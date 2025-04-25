// File: src/pages/api/gpt-recommend.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { OpenAI } from 'openai';

// Ensure API key is loaded from environment variables
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
});

// Updated Request Body Interface
interface RequestBody {
  spend: { [key: string]: number };
  annualSpend: { [key: string]: number };
  redemptionStrategy: string;
  topCards: any[]; // Use a more specific type if possible matching the frontend context
  userOwnedCards?: any[]; // Make optional, contains CalculatedCardReward[] structure
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  // Destructure potentially new field
  const { spend, annualSpend, redemptionStrategy, topCards, userOwnedCards }: RequestBody = req.body;

  // Validation
  if (!spend || !annualSpend || !redemptionStrategy || !topCards || !Array.isArray(topCards)) {
      return res.status(400).json({ error: 'Missing required data in request body' });
  }
  // Don't require userOwnedCards for validation

  // Handle case where filters result in no cards for potential recommendations
  if (topCards.length === 0 && (!userOwnedCards || userOwnedCards.length === 0)) {
        return res.status(200).json({ recommendation: "No cards matched your filters or spending profile to generate a recommendation." });
  }
  if (topCards.length === 0 && userOwnedCards && userOwnedCards.length > 0) {
        // If only owned cards exist, maybe provide a summary or different message
        return res.status(200).json({ recommendation: "You haven't found any new potential cards with your current filters, but here's a reminder of your selected cards' performance based on your spend." }); // Placeholder message
  }


  console.log(`API Call Triggered - gpt-recommend for strategy: ${redemptionStrategy}`);
  if (userOwnedCards && userOwnedCards.length > 0) {
      console.log(`Including ${userOwnedCards.length} user-selected cards in context.`);
  }

  try {
    // Format topCards (potential recommendations)
    const topCardsFormatted = topCards.map((c, i) => `
--- Card ${i + 1} ---
Name: ${c.cardName} (${c.issuer})
Type: ${c.cardType}
Annual Fee: $${c.annualFee?.toFixed(2) ?? '0.00'}
Est. 1st Year Net Value: $${c.estimatedFirstYearNetValue?.toFixed(2) ?? 'N/A'}
Est. Ongoing Net Value: $${c.estimatedOngoingNetValue?.toFixed(2) ?? 'N/A'}
Sign-Up Bonus: ${c.signUpBonusDescription || 'N/A'} (~$${c.signUpBonusValue?.toFixed(2) ?? '0'})
Calculated Annual Rewards Value: $${c.calculatedAnnualRewardsValue?.toFixed(2) ?? 'N/A'}
Calculated Annual Perk Value: $${c.calculatedAnnualPerkValue?.toFixed(2) ?? 'N/A'}
Point Value Used (CPP): ${c.cppUsedForValue?.toFixed(2)} via '${c.redemptionStrategyUsed}' strategy
Key Reward Categories: ${Array.isArray(c.topRewardCategories) && c.topRewardCategories.length > 0 ? c.topRewardCategories.map(r => `${r.multiplier}x on ${r.category.replace(/_/g, ' ')}${r.cap ? ` (Cap: $${r.cap.amount_usd}/${r.cap.period})` : ''}`).join('; ') : 'Base rate'}
Key Perks: ${Array.isArray(c.keyPerks) && c.keyPerks.length > 0 ? c.keyPerks.map(p => `${p.description}${p.value ? ` (~$${p.value?.toFixed(0)}/yr)` : ''}`).join('; ') : 'None notable'}
`).join('\n\n'); // Use double newline between potential cards


    // --- NEW: Format userOwnedCards if present ---
    let userOwnedCardsFormatted = "";
    if (userOwnedCards && userOwnedCards.length > 0) {
        userOwnedCardsFormatted = userOwnedCards.map((c, i) => `
--- Owned Card ${i + 1} ---
Name: ${c.cardName}
Est. Annual Net Value (for user's spend): $${c.netValue?.toFixed(2) ?? 'N/A'}
(Rewards: ~$${c.rewardsValue?.toFixed(2)}, Perks: ~$${c.annualPerkValue?.toFixed(2)}, Fee: $${c.annualFee?.toFixed(2)})
Total Points Earned (for user's spend): ${c.totalPoints ?? 'N/A'} pts
`).join('\n'); // Join with single newline between owned cards
    }

    // --- Update Prompts ---
    const systemMessage = `You are a sophisticated and objective Credit Card Rewards Expert AI, specializing in maximizing travel value and benefits for users based on their specific spending patterns.

          **Your Goal:** Provide highly personalized, clear, and actionable credit card recommendations. Analyze the user's spending, their preferred point valuation strategy, the detailed data provided for potential new cards, and calculated data for cards the user already has selected. Identify the 1-2 best *new* cards for this specific user from the 'Potential New Cards Analysis' list.

          **Analysis Requirements:**
          1.  **Personalization:** Directly reference the user's highest spending categories when justifying recommendations.
          2.  **Value Assessment:** Compare cards based on both 'estimatedFirstYearNetValue' (including bonus) and 'estimatedOngoingNetValue' (rewards + annual perks - fee). Acknowledge the difference.
          3.  **Rewards Matching:** Explicitly mention how a *new* card's 'Key Reward Categories' align (or don't align) with the user's spending.
          4.  **Perk Relevance:** Highlight 'Key Perks' of *new* cards that are particularly relevant to travel or significantly contribute to the card's value.
          5.  **Fee Justification:** If recommending a card with a high annual fee, explain how its rewards and perks potentially offset that fee based on the provided data.
          6.  **Objectivity:** Base recommendations *strictly* on the provided 'Potential New Cards Analysis' data. Do *not* invent card details or recommend cards not listed in the input. Avoid promotional language.
          7.  **Comparison to Owned Cards:** If data for 'User Owned / Selected Cards' is provided, compare the *net value* and *key features* of your top recommendations against those owned cards *for this user's specific spending*. Highlight if a recommended card offers significantly better value or distinctly different perks relevant to the user.

          **Output Format:**
          * Start with a brief 1-2 sentence summary acknowledging the user's spending profile.
          * Clearly state the recommendation for 1-2 *new* cards (e.g., "My top recommendation for a new card for you is..." or "The two best new cards to consider adding are...").
          * Use "---" (horizontal rule) as a separator.
          * For **each** recommended *new* card, use the following structured format using Markdown:
              * Use a level 3 heading for the card name: \`### **[Card Name]**\`
              * Include the following sections clearly separated (Use these exact headings):
                  * **Why it Fits You:** Use bullet points (\`* \`) explaining *why* it's a strong fit for *this specific user*, linking its features (rewards/perks) to their spending and the calculated values.
                  * **Key Rewards:** Use bullet points to list 2-3 top reward categories relevant to the recommendation.
                  * **Notable Perks:** Use bullet points to list 1-2 most relevant key perks from the data.
                  * **Estimated Value:** Use bullet points: \`* First Year Net: ~$XXX\`, \`* Ongoing Net: ~$XXX/year\`. Use the values provided.
                  * **Considerations:** Use bullet points for key factors (\`* Annual Fee: $XXX\`, \`* Best value via [Strategy] redemption\`).
          * If data for 'User Owned / Selected Cards' was provided, briefly incorporate the comparison in your reasoning under "Why it Fits You". Example: \`* This offers ~$XXX more annual net value than your selected [Owned Card Name] based on your spending.\`
          * If recommending two cards: Use "---" between card sections and add a brief concluding sentence explaining how they compare or complement each other (and potentially the owned cards).
          * Ensure the entire response uses Markdown effectively for clarity (headings, bolding, bullet points). Avoid conversational filler. Focus only on recommending cards from the 'Potential New Cards Analysis' list.`;

    const userMessage = `Here is the user's data, calculated values for their selected cards (if any), and the analysis of potential new cards:

          **User Monthly Spend:**
          \`\`\`json
          ${JSON.stringify(spend, null, 2)}
          \`\`\`

          **User Annual Spend:**
          \`\`\`json
          ${JSON.stringify(annualSpend, null, 2)}
          \`\`\`

          **User Preferred Point Valuation Strategy:** ${redemptionStrategy}

          ${userOwnedCardsFormatted ? `**User Owned / Selected Cards (Calculated for their spend):**\n${userOwnedCardsFormatted}\n` : ''}
          **Potential New Cards Analysis (Sorted by First Year Value):**
          ${topCardsFormatted}

          Please provide your expert recommendation based *only* on the data above, strictly following the analysis requirements (including comparison to owned cards if provided) and structured output format specified in the system prompt. Focus on the best 1-2 *new* cards for this user's profile from the 'Potential New Cards Analysis' list.`;

    // --- Call OpenAI API ---
    const response = await openai.chat.completions.create({
      model: 'gpt-4o', // Recommended model
      // model: 'gpt-3.5-turbo', // Fallback if needed
      temperature: 0.6, // Slightly lower temp for more structured output adherence
      max_tokens: 600, // Increased tokens for potentially more comparison text
      messages: [
        { role: 'system', content: systemMessage },
        { role: 'user', content: userMessage },
      ],
    });

    const message = response.choices[0]?.message?.content?.trim() ?? 'No recommendation available.';
    res.status(200).json({ recommendation: message });

  } catch (err: any) {
    // Log more detailed error information if available
    console.error("Error calling OpenAI:", err.response ? JSON.stringify(err.response.data, null, 2) : err.message);
    // Optionally check for specific OpenAI error types
    let errorMessage = 'Failed to get AI recommendation.';
    if (err.status === 401) {
      errorMessage = 'Authentication error: Invalid OpenAI API Key.';
    } else if (err.status === 429) {
      errorMessage = 'API Limit Error: You may have exceeded your OpenAI quota or rate limit.';
    }
    // Send generic error to frontend, but log specifics on server
    res.status(500).json({ error: errorMessage }); // Send specific error message if available
  }
}