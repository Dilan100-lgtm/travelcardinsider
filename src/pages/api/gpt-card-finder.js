// File: /pages/api/gpt-card-finder.js
import { OpenAI } from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Helper function to safely stringify JSON for the prompt
function safeJsonStringify(obj) {
    try {
        return JSON.stringify(obj, null, 2);
    } catch (e) {
        console.error("Error stringifying object for prompt:", e);
        return '{}';
    }
}

// Helper to format the NEW spending profile (10 categories)
function formatSpending(spendingProfile) {
    // Define the display order or use Object.entries directly
    const categoryOrder = [
        'flightsHotels', 'dining', 'groceries', 'gasEV', 'transitCommuting',
        'streaming', 'phoneInternetBills', 'drugstores', 'onlineShopping', 'other'
    ];
    const formattedEntries = categoryOrder
        .map(key => {
            const value = spendingProfile[key] || 0;
            if (value > 0) {
                // Make category names more readable
                const readableKey = key
                    .replace(/([A-Z])/g, ' $1') // Add space before caps
                    .replace(/^./, str => str.toUpperCase()) // Capitalize first letter
                    .replace('Ev', 'EV'); // Fix EV capitalization
                return `${readableKey}: $${value}/month`;
            }
            return null; // Filter out zero-spend categories
        })
        .filter(entry => entry !== null);

    return formattedEntries.length > 0 ? formattedEntries.join(', ') : 'No spending data provided';
}


// Helper to format preferences, including the NEW annual fee range
function formatPreferences(preferences) {
    const prefsList = [];
    if (preferences.priority) prefsList.push(`Primary Goal: ${preferences.priority.replace(/_/g, ' ')}`);
    if (preferences.creditScoreRange) prefsList.push(`Credit Score: ${preferences.creditScoreRange}`);
    if (preferences.cardType && preferences.cardType !== 'any') prefsList.push(`Card Type: ${preferences.cardType}`);

    // Format the annual fee budget array [min, max]
    if (preferences.annualFeeBudget && Array.isArray(preferences.annualFeeBudget)) {
        prefsList.push(`Acceptable Annual Fee: $${preferences.annualFeeBudget[0]} - $${preferences.annualFeeBudget[1]}`);
    }

    if (preferences.preferredAirlines?.length > 0) prefsList.push(`Prefers Airlines: ${preferences.preferredAirlines.join(', ')}`);
    if (preferences.preferredHotels?.length > 0) prefsList.push(`Prefers Hotels: ${preferences.preferredHotels.join(', ')}`);
    if (preferences.needsIntroAPR) prefsList.push('Needs Intro APR');

    const desiredPerks = Object.entries(preferences)
        .filter(([key, value]) => key.startsWith('wants') && value === true)
        .map(([key]) => key.replace(/^wants/, '').replace(/([A-Z])/g, ' $1').trim());
    if (desiredPerks.length > 0) prefsList.push(`Desired Perks: ${desiredPerks.join(', ')}`);

    return prefsList.join('; ');
}

// Helper to format card details for the prompt
function formatCardForPrompt(card) {
    // ... (remains the same as previous version) ...
    if (!card) return null;
    return `- ${card.name} (Score: ${card.score}/100, Fee: $${card.annualFee}, Bonus: ~$${card.bonusValue}, Features: ${[...card.rewardHighlights, ...card.keyPerks, ...card.matchedFeatures].slice(0, 4).join(', ')})`;
}

// --- Main API Handler ---
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { spendingProfile, preferences, recommendedCards } = req.body;

  // Validate inputs
  if (!spendingProfile || typeof spendingProfile !== 'object' || spendingProfile === null) {
    return res.status(400).json({ error: 'Missing or invalid spending profile data' });
  }
  if (!preferences || typeof preferences !== 'object' || preferences === null) {
    return res.status(400).json({ error: 'Missing or invalid preferences data' });
  }
   // Specifically check for the annualFeeBudget array within preferences now
   if (!preferences.annualFeeBudget || !Array.isArray(preferences.annualFeeBudget) || preferences.annualFeeBudget.length !== 2) {
       return res.status(400).json({ error: 'Missing or invalid annual fee budget in preferences' });
   }
  if (!recommendedCards || !Array.isArray(recommendedCards) || recommendedCards.length === 0) {
    return res.status(400).json({ error: 'Missing or invalid recommended cards data' });
  }

  // --- Prompt Engineering ---
  const topCardsForPrompt = recommendedCards.slice(0, 3).map(formatCardForPrompt).filter(c => c).join('\n');

  // Construct the prompt using the updated format helpers
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
1. Select ONE card from the list as the "Best Pick" that most closely aligns with the user's spending, primary goal, and preferences (including fee range).
2. Select ONE or TWO *different* cards from the list as strong "Runner-Up" options. If only one other card is suitable, just provide one runner-up.
3. For EACH selected card (Best Pick and Runner-Ups), write a short, professional, and encouraging explanation (2-4 sentences, approx. 40-70 words) detailing *why* it's a good fit for THIS user. Mention specific relevant factors like bonus categories matching their spend, key perks they desire, the annual fee in context (mention if it fits their stated range), and any significant sign-up bonus value. Avoid generic statements.
4. Ensure the tone is natural, expert, and trustworthy – like a personal recommendation from a finance-savvy travel advisor.
5. Do NOT recommend any cards NOT included in the "Top Cards Identified by Scoring Algorithm" list above.
6. Format the output EXACTLY as follows, using the specified emojis and markdown:

✨ **Best Pick:** [Full Card Name]
[Your explanation paragraph for the best pick card here. Focus on why it's the top choice for this user.]

🥈 **Runner-Up 1:** [Full Card Name]
[Your explanation paragraph for the first runner-up card here. Explain its strengths for the user.]

🥉 **Runner-Up 2:** [Full Card Name]
[Your explanation paragraph for the second runner-up card here. Explain its strengths.]

(If you only identify one runner-up, omit the "🥉 Runner-Up 2:" section entirely).
Start your response directly with "✨ **Best Pick:**". Do not include any preamble or extra text before or after the formatted recommendations.
`;

  try {
    // ... (API call logic remains the same as previous version) ...
     console.log("Sending prompt to OpenAI...");
     const completion = await openai.chat.completions.create({
       model: "gpt-3.5-turbo",
       messages: [{ role: "user", content: prompt }],
       max_tokens: 450,
       temperature: 0.6,
       n: 1,
       stop: null,
     });
     const rawResponse = completion.choices[0]?.message?.content?.trim() || "";
     if (!rawResponse) {
         console.error("OpenAI response was empty.");
         throw new Error("AI response was empty.");
     }
     console.log("Received raw AI response:", rawResponse);

    // --- Parse the AI Response ---
    // ... (Parsing logic remains the same as previous version) ...
    let bestPick = null;
    const runnerUps = [];
    const lines = rawResponse.split('\n').filter(line => line.trim() !== '');
    let currentCard = null;
    let currentExplanation = "";

    for (const line of lines) {
        if (line.startsWith('✨ **Best Pick:**')) {
            if (currentCard) {
                if (currentCard.isBestPick) bestPick = { name: currentCard.name, explanation: currentExplanation.trim() };
                else runnerUps.push({ name: currentCard.name, explanation: currentExplanation.trim() });
            }
            currentCard = { name: line.replace('✨ **Best Pick:**', '').trim(), isBestPick: true };
            currentExplanation = "";
        } else if (line.startsWith('🥈 **Runner-Up 1:**')) {
             if (currentCard) {
                 if (currentCard.isBestPick) bestPick = { name: currentCard.name, explanation: currentExplanation.trim() };
                 else runnerUps.push({ name: currentCard.name, explanation: currentExplanation.trim() });
             }
             currentCard = { name: line.replace('🥈 **Runner-Up 1:**', '').trim(), isBestPick: false };
             currentExplanation = "";
        } else if (line.startsWith('🥉 **Runner-Up 2:**')) {
             if (currentCard) {
                 if (currentCard.isBestPick) bestPick = { name: currentCard.name, explanation: currentExplanation.trim() };
                 else runnerUps.push({ name: currentCard.name, explanation: currentExplanation.trim() });
             }
             currentCard = { name: line.replace('🥉 **Runner-Up 2:**', '').trim(), isBestPick: false };
             currentExplanation = "";
        } else if (currentCard) {
            currentExplanation += line + "\n";
        }
    }
    if (currentCard) {
        if (currentCard.isBestPick) bestPick = { name: currentCard.name, explanation: currentExplanation.trim() };
        else runnerUps.push({ name: currentCard.name, explanation: currentExplanation.trim() });
    }

     if (!bestPick) {
       console.error("Failed to parse Best Pick from AI response:", rawResponse);
        return res.status(500).json({ error: 'AI response format error (missing Best Pick)' });
     }

    const structuredSuggestions = { bestPick, runnerUps };
    console.log("Parsed suggestions:", structuredSuggestions);
    res.status(200).json({ suggestions: structuredSuggestions });

  } catch (error) {
    console.error('OpenAI API call failed:', error);
    const errorMessage = error.response?.data?.error?.message || error.message || 'Failed to get AI suggestions';
    res.status(500).json({ error: `OpenAI API Error: ${errorMessage}` });
  }
}