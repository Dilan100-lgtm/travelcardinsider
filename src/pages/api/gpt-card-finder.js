// File: /pages/api/gpt-card-finder.js
import { OpenAI } from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // Ensure this is set in your environment
});

// Helper to format spending profile
function formatSpending(spendingProfile) {
    const categoryOrder = [ 'flightsHotels', 'dining', 'groceries', 'gasEV', 'transitCommuting', 'streaming', 'phoneInternetBills', 'drugstores', 'onlineShopping', 'other' ]; const formattedEntries = categoryOrder .map(key => { const value = spendingProfile[key] || 0; if (value > 0) { const readableKey = key .replace(/([A-Z])/g, ' $1') .replace(/^./, str => str.toUpperCase()) .replace('Ev', 'EV'); return `${readableKey}: $${value}/month`; } return null; }) .filter(entry => entry !== null); return formattedEntries.length > 0 ? formattedEntries.join(', ') : 'No spending data provided';
 }

// Helper to format preferences, including preferNoAnnualFee
function formatPreferences(preferences) {
    const prefsList = [];
    if (preferences.priority) prefsList.push(`Primary Goal: ${preferences.priority.replace(/_/g, ' ')}`);
    if (preferences.creditScoreRange) prefsList.push(`Credit Score: ${preferences.creditScoreRange}`);
    if (preferences.cardType && preferences.cardType !== 'any') prefsList.push(`Card Type: ${preferences.cardType}`);
    if (preferences.annualFeeBudget && Array.isArray(preferences.annualFeeBudget)) { prefsList.push(`Acceptable Fee: $${preferences.annualFeeBudget[0]} - $${preferences.annualFeeBudget[1]}`); }
    // ADD the new preference flag
    if (preferences.preferNoAnnualFee === true) { prefsList.push("Prefers $0 Annual Fee Cards"); }
    if (preferences.preferredAirlines?.length > 0) prefsList.push(`Prefers Airlines: ${preferences.preferredAirlines.join(', ')}`);
    if (preferences.preferredHotels?.length > 0) prefsList.push(`Prefers Hotels: ${preferences.preferredHotels.join(', ')}`);
    if (preferences.needsIntroAPR) prefsList.push('Needs Intro APR');
    const desiredPerks = Object.entries(preferences) .filter(([key, value]) => key.startsWith('wants') && value === true) .map(([key]) => key.replace(/^wants/, '').replace(/([A-Z])/g, ' $1').trim());
    if (desiredPerks.length > 0) prefsList.push(`Desired Perks: ${desiredPerks.join(', ')}`);
    return prefsList.join('; ');
}

// Helper to format card details for the prompt
function formatCardForPrompt(card) {
    if (!card) return null;
    // Combine highlights and features for brevity
    const highlights = [...(card.rewardHighlights || []), ...(card.keyPerks || []), ...(card.matchedFeatures || [])];
    const uniqueHighlights = [...new Set(highlights)].slice(0, 4).join(', '); // Limit features shown
    return `- ${card.name} (Score: ${card.score}/100, Fee: $${card.annualFee}, Bonus: ~$${card.bonusValue}, Features: ${uniqueHighlights || 'N/A'})`;
}

// --- Main API Handler ---
export default async function handler(req, res) {
  if (req.method !== 'POST') { return res.status(405).json({ error: 'Method Not Allowed' }); }

  const { spendingProfile, preferences, recommendedCards } = req.body;

  // Validation
  if (!spendingProfile || !preferences || !recommendedCards || !Array.isArray(recommendedCards) || recommendedCards.length === 0) { return res.status(400).json({ error: 'Missing or invalid required data' }); }
  if (!preferences.annualFeeBudget || !Array.isArray(preferences.annualFeeBudget) || preferences.annualFeeBudget.length !== 2) { return res.status(400).json({ error: 'Invalid annual fee budget in preferences' }); }

  // --- Prompt Engineering ---
  const topCardsForPrompt = recommendedCards.slice(0, 3).map(formatCardForPrompt).filter(c => c).join('\n');

  const prompt = `
You are a highly knowledgeable and friendly credit card and travel rewards expert, writing for the TravelCardInsider blog.
Your goal is to provide personalized, trustworthy recommendations based on the user's profile and the top cards already identified by our scoring algorithm.

User Profile:
- Estimated Monthly Spending: ${formatSpending(spendingProfile)}
- Preferences & Profile: ${formatPreferences(preferences)}

Top Cards Identified by Scoring Algorithm (Consider these for your selection):
${topCardsForPrompt}

Instructions:
Based *only* on the user's profile and the provided top cards list, please:
1. Select ONE card from the list as the "Best Pick" that most closely aligns with the user's spending, primary goal, and preferences (especially consider the fee range and if they prefer $0 fee).
2. Select ONE or TWO *different* cards from the list as strong "Runner-Up" options. If only one other card is suitable, just provide one runner-up.
3. For EACH selected card (Best Pick and Runner-Ups), write a short, professional, and encouraging explanation (2-4 sentences, approx. 40-70 words) detailing *why* it's a good fit for THIS user. Mention specific relevant factors like bonus categories matching their spend, key perks they desire, the annual fee in context (explicitly mention if it's $0 if the user prefers that), and any significant sign-up bonus value. Avoid generic statements.
4. Ensure the tone is natural, expert, and trustworthy – like a personal recommendation from a finance-savvy travel advisor.
5. Do NOT recommend any cards NOT included in the "Top Cards Identified by Scoring Algorithm" list above.
6. Format the output EXACTLY as follows, using the specified markdown structure (Use the text markers):

BEST_PICK:: [Full Card Name]
[Explanation paragraph for best pick]

RUNNER_UP_1:: [Full Card Name]
[Explanation paragraph for first runner-up]

RUNNER_UP_2:: [Full Card Name]
[Explanation paragraph for second runner-up]

(If only one runner-up, omit the "RUNNER_UP_2::" section entirely).
Start your response directly with "BEST_PICK::". Do not include any preamble or extra text before or after the formatted recommendations. Use ":: " as the separator after the marker.
`;

  try {
     console.log("Sending prompt to OpenAI...");
     const completion = await openai.chat.completions.create({
       model: "gpt-3.5-turbo", // Or "gpt-4o-mini", "gpt-4-turbo"
       messages: [{ role: "user", content: prompt }],
       max_tokens: 500,
       temperature: 0.6,
       n: 1,
       stop: null,
     });
     const rawResponse = completion.choices[0]?.message?.content?.trim() || "";
     if (!rawResponse) { throw new Error("AI response was empty."); }
     console.log("Received raw AI response.");

    // --- Parse the AI Response using markers ---
    let bestPick = null;
    const runnerUps = [];
    const sections = rawResponse.split(/(?=BEST_PICK:: |RUNNER_UP_1:: |RUNNER_UP_2:: )/);

    sections.forEach(section => {
        section = section.trim();
        if (section.startsWith('BEST_PICK:: ')) { const content = section.substring('BEST_PICK:: '.length); const nameEndIndex = content.indexOf('\n'); if (nameEndIndex > 0) { bestPick = { name: content.substring(0, nameEndIndex).trim(), explanation: content.substring(nameEndIndex + 1).trim() }; } }
        else if (section.startsWith('RUNNER_UP_1:: ')) { const content = section.substring('RUNNER_UP_1:: '.length); const nameEndIndex = content.indexOf('\n'); if (nameEndIndex > 0) { runnerUps[0] = { name: content.substring(0, nameEndIndex).trim(), explanation: content.substring(nameEndIndex + 1).trim() }; } }
        else if (section.startsWith('RUNNER_UP_2:: ')) { const content = section.substring('RUNNER_UP_2:: '.length); const nameEndIndex = content.indexOf('\n'); if (nameEndIndex > 0) { runnerUps[1] = { name: content.substring(0, nameEndIndex).trim(), explanation: content.substring(nameEndIndex + 1).trim() }; } }
    });

     if (!bestPick) { console.error("Failed to parse Best Pick from AI response:", rawResponse); return res.status(500).json({ error: 'AI response format error (parsing failed)' }); }

    const structuredSuggestions = { bestPick, runnerUps: runnerUps.filter(ru => ru) }; // Filter out undefined entries
    console.log("Parsed suggestions successfully.");
    res.status(200).json({ suggestions: structuredSuggestions });

  } catch (error) {
    console.error('OpenAI API call failed:', error);
    const errorMessage = error.response?.data?.error?.message || error.message || 'Failed to get AI suggestions';
    res.status(500).json({ error: `OpenAI API Error: ${errorMessage}` });
  }
}