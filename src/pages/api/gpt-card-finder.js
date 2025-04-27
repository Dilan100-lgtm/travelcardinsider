// File: /pages/api/gpt-card-finder.js
import { OpenAI } from 'openai';

// Ensure the OpenAI API key is loaded from environment variables
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // Ensure this is set in your environment
});

// --- Helper Functions for Prompt Formatting ---

// Helper to format the 10-category spending profile
function formatSpending(spendingProfile) {
    const categoryOrder = [
        'flightsHotels', 'dining', 'groceries', 'gasEV', 'transitCommuting',
        'streaming', 'phoneInternetBills', 'drugstores', 'onlineShopping', 'other'
    ];
    const formattedEntries = categoryOrder
        .map(key => {
            const value = spendingProfile[key] || 0;
            if (value > 0) {
                // Make category names more readable for the prompt
                const readableKey = key
                    .replace(/([A-Z])/g, ' $1') // Add space before caps
                    .replace(/^./, str => str.toUpperCase()) // Capitalize first letter
                    .replace('Ev', 'EV'); // Specific capitalization adjustment
                return `${readableKey}: $${value}/month`;
            }
            return null; // Filter out zero-spend categories
        })
        .filter(entry => entry !== null);

    return formattedEntries.length > 0 ? formattedEntries.join(', ') : 'No significant spending data provided';
}

// Helper to format preferences, including fee range and no-fee preference
function formatPreferences(preferences) {
    const prefsList = [];
    if (preferences.priority) prefsList.push(`Primary Goal: ${preferences.priority.replace(/_/g, ' ')}`);
    if (preferences.creditScoreRange) prefsList.push(`Credit Score: ${preferences.creditScoreRange}`);
    if (preferences.cardType && preferences.cardType !== 'any') prefsList.push(`Card Type: ${preferences.cardType}`);

    // Format the annual fee budget array [min, max]
    if (preferences.annualFeeBudget && Array.isArray(preferences.annualFeeBudget)) {
        prefsList.push(`Acceptable Fee Range: $${preferences.annualFeeBudget[0]} - $${preferences.annualFeeBudget[1]}`);
    }
    // Include the "Prefer No Annual Fee" flag if true
    if (preferences.preferNoAnnualFee === true) {
        prefsList.push("Strongly Prefers $0 Annual Fee Cards");
    }
    // Include other preferences
    if (preferences.preferredAirlines?.length > 0) prefsList.push(`Prefers Airlines: ${preferences.preferredAirlines.join(', ')}`);
    if (preferences.preferredHotels?.length > 0) prefsList.push(`Prefers Hotels: ${preferences.preferredHotels.join(', ')}`);
    if (preferences.needsIntroAPR) prefsList.push('Needs Intro 0% APR');
    // List desired perks
    const desiredPerks = Object.entries(preferences)
        .filter(([key, value]) => key.startsWith('wants') && value === true)
        .map(([key]) => key.replace(/^wants/, '').replace(/([A-Z])/g, ' $1').trim()); // Convert key to readable name
    if (desiredPerks.length > 0) prefsList.push(`Desired Perks: ${desiredPerks.join(', ')}`);

    return prefsList.length > 0 ? prefsList.join('; ') : 'No specific preferences selected.';
}

// Helper to format card details concisely for the AI prompt
function formatCardForPrompt(card) {
    if (!card) return null;
    // Combine various features/highlights into a short list for context
    const highlights = [
        ...(card.rewardHighlights || []), // e.g., ["3x on Dining"]
        ...(card.keyPerks || []),        // e.g., ["Lounge Access", "Global Entry Credit"]
        ...(card.matchedFeatures || [])  // e.g., ["~$500/yr rewards"]
    ];
    // Get unique features and limit the number shown
    const uniqueHighlights = [...new Set(highlights)].slice(0, 3).join(', '); // Show top 3 unique features
    return `- ${card.name} (Score: ${card.score}/100, Fee: $${card.annualFee}, Bonus: ~$${card.bonusValue}, Features: ${uniqueHighlights || 'Standard Rewards'})`;
}

// --- Main API Route Handler ---
export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  // --- Input Validation ---
  const { spendingProfile, preferences, recommendedCards } = req.body;
  if (!spendingProfile || typeof spendingProfile !== 'object' ||
      !preferences || typeof preferences !== 'object' ||
      !recommendedCards || !Array.isArray(recommendedCards) || recommendedCards.length === 0) {
    return res.status(400).json({ error: 'Missing or invalid required data for AI suggestion' });
  }
   // Validate specific nested preferences
   if (!preferences.annualFeeBudget || !Array.isArray(preferences.annualFeeBudget) || preferences.annualFeeBudget.length !== 2 || typeof preferences.preferNoAnnualFee === 'undefined') {
       return res.status(400).json({ error: 'Invalid or missing fee preferences' });
   }

  // --- Prompt Construction ---
  // Prepare top cards list for the prompt (usually top 3 is enough context)
  const topCardsForPrompt = recommendedCards.slice(0, 3).map(formatCardForPrompt).filter(c => c).join('\n');
  if (!topCardsForPrompt) {
      return res.status(400).json({ error: 'Could not format recommended cards for AI prompt.' });
  }

  // Define the detailed prompt for OpenAI
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
1. Select ONE card from the list as the "Best Pick" that most closely aligns with the user's spending, primary goal, and preferences (pay close attention to the fee range and if they prefer $0 fee).
2. Select ONE or TWO *different* cards from the list as strong "Runner-Up" options. If only one other card is suitable, just provide one runner-up. Do not select the same card as Best Pick.
3. For EACH selected card (Best Pick and Runner-Ups), write a short, professional, and encouraging explanation (2-4 sentences, approx. 40-70 words) detailing *why* it's a good fit for THIS user. Mention specific relevant factors like bonus categories matching their spend, key perks they desire, the annual fee in context (explicitly mention if it's $0 if the user prefers that, or how it fits their range), and any significant sign-up bonus value. Avoid generic statements.
4. Ensure the tone is natural, expert, and trustworthy – like a personal recommendation from a finance-savvy travel advisor.
5. Do NOT recommend any cards NOT included in the "Top Cards Identified by Scoring Algorithm" list above.
6. Format the output EXACTLY as follows, using the specified text markers and structure:

BEST_PICK:: [Full Card Name]
[Explanation paragraph for best pick]

RUNNER_UP_1:: [Full Card Name]
[Explanation paragraph for first runner-up]

RUNNER_UP_2:: [Full Card Name]
[Explanation paragraph for second runner-up]

(If you only identify one runner-up, omit the "RUNNER_UP_2::" section entirely).
Start your response directly with "BEST_PICK::". Do not include any preamble, introduction, conclusion, or extra text before or after the formatted recommendations. Use ":: " (two colons and a space) as the separator after the marker and before the card name. Each explanation must be on a new line after the card name.
`;

  // --- OpenAI API Call ---
  try {
     console.log("Sending prompt to OpenAI..."); // Log for debugging if needed
     const completion = await openai.chat.completions.create({
       // Recommended models: "gpt-4o-mini" (cost-effective, good), "gpt-3.5-turbo", "gpt-4-turbo" (higher quality/cost)
       model: "gpt-4o-mini",
       messages: [{ role: "user", content: prompt }],
       max_tokens: 550, // Increased slightly for potentially more detailed explanations
       temperature: 0.65, // Balance between focused and slightly natural tone
       n: 1,
       stop: null, // Let model determine end, or specify stop sequences if needed
     });
     const rawResponse = completion.choices[0]?.message?.content?.trim() || "";

     if (!rawResponse) {
         console.error("OpenAI response was empty.");
         throw new Error("AI response was empty.");
     }
     console.log("Received raw AI response."); // Avoid logging rawResponse in production if it contains sensitive info

    // --- Parse the AI Response using specific markers ---
    let bestPick = null;
    const runnerUps = [];
    // Split based on the markers, keeping the markers for context (using lookahead)
    const sections = rawResponse.split(/(?=BEST_PICK:: |RUNNER_UP_1:: |RUNNER_UP_2:: )/);

    sections.forEach(section => {
        section = section.trim();
        if (section.startsWith('BEST_PICK:: ')) {
            const content = section.substring('BEST_PICK:: '.length);
            const nameEndIndex = content.indexOf('\n'); // Find the first newline
            if (nameEndIndex > 0) {
                bestPick = {
                    name: content.substring(0, nameEndIndex).trim(),
                    explanation: content.substring(nameEndIndex + 1).trim() // Text after newline
                };
            } else { // Handle case where explanation might be missing or format is wrong
                bestPick = { name: content.trim(), explanation: "AI explanation could not be parsed." };
            }
        } else if (section.startsWith('RUNNER_UP_1:: ')) {
             const content = section.substring('RUNNER_UP_1:: '.length);
             const nameEndIndex = content.indexOf('\n');
             if (nameEndIndex > 0) {
                 runnerUps[0] = {
                     name: content.substring(0, nameEndIndex).trim(),
                     explanation: content.substring(nameEndIndex + 1).trim()
                 };
             } else {
                 runnerUps[0] = { name: content.trim(), explanation: "AI explanation could not be parsed." };
             }
        } else if (section.startsWith('RUNNER_UP_2:: ')) {
             const content = section.substring('RUNNER_UP_2:: '.length);
             const nameEndIndex = content.indexOf('\n');
             if (nameEndIndex > 0) {
                  runnerUps[1] = {
                      name: content.substring(0, nameEndIndex).trim(),
                      explanation: content.substring(nameEndIndex + 1).trim()
                  };
             } else {
                 runnerUps[1] = { name: content.trim(), explanation: "AI explanation could not be parsed." };
             }
        }
    });

     // --- Validate Parsing & Respond ---
     if (!bestPick || !bestPick.name || !bestPick.explanation) {
       console.error("Failed to parse Best Pick correctly from AI response:", rawResponse);
        // Return an error, maybe include the raw response for debugging on server-side logs
       return res.status(500).json({ error: 'AI response format error (parsing failed)' });
     }

    const structuredSuggestions = { bestPick, runnerUps: runnerUps.filter(ru => ru && ru.name && ru.explanation) }; // Ensure runner-ups are valid
    console.log("Parsed suggestions successfully.");
    res.status(200).json({ suggestions: structuredSuggestions }); // Return structured data

  } catch (error) {
    console.error('OpenAI API call or processing failed:', error);
    // Extract specific error message if available from OpenAI error object
    const errorMessage = error.response?.data?.error?.message || error.message || 'Failed to get AI suggestions';
    // Avoid sending potentially sensitive OpenAI error details to client in production
    res.status(500).json({ error: `AI processing failed. Please try again later.` });
  }
}