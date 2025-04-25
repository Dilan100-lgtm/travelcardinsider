// Backend API Pseudocode (e.g., in pages/api/gpt-recommend.js or similar)

import OpenAI from 'openai'; // Or your preferred AI SDK

// Assume openai is configured with your API key
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // Ensure you have set this environment variable
});

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { spend, annualSpend, redemptionStrategy, topCards } = req.body;

      // --- Construct the Prompt ---

      const systemMessage = `You are a world-class travel credit card expert. Your job is to analyze a user's monthly spend and recommend the top 1-2 cards based on realistic net value, perks, and fit. Focus on the *why* behind the recommendation, considering the user's specific spending patterns against the card's strengths. Be honest, helpful, precise, and avoid overly generic statements. Mention specific high-value perks if applicable to the recommendation. Format the output clearly using markdown (bolding, bullet points).`;

      // Format the top cards data clearly for the prompt
      const topCardsFormatted = topCards.map((c, i) => `
Card #${i + 1}: ${c.cardName} (${c.issuer})
- Type: ${c.cardType}
- Annual Fee: $${c.annualFee}
- Est. 1st Year Net Value: $${c.estimatedFirstYearNetValue?.toFixed(2) ?? 'N/A'} (Based on your spend)
- Est. Ongoing Net Value: $${c.estimatedOngoingNetValue?.toFixed(2) ?? 'N/A'} (Based on your spend)
- Sign-Up Bonus: ${c.signUpBonusDescription || 'N/A'} (~$${c.signUpBonusValue?.toFixed(2) ?? '0'})
- Calculated Annual Rewards Value: $${c.calculatedAnnualRewardsValue?.toFixed(2) ?? 'N/A'} (From your spend)
- Calculated Annual Perk Value: $${c.calculatedAnnualPerkValue?.toFixed(2) ?? 'N/A'}
- Key Reward Categories (Calculated for you): ${Array.isArray(c.topRewardCategories) && c.topRewardCategories.length > 0 ? c.topRewardCategories.map(r => `${r.multiplier}x on ${r.category.replace(/_/g, ' ')}${r.cap ? ` (Cap: $${r.cap.amount_usd}/${r.cap.period})` : ''}`).join(', ') : 'Standard 1x or specific base rate'}
- Key Perks: ${Array.isArray(c.keyPerks) && c.keyPerks.length > 0 ? c.keyPerks.map(p => `${p.description}${p.value ? ` (~$${p.value}/yr)` : ''}`).join('; ') : 'None notable'}
- Point Value Used (CPP): ${c.cppUsedForValue?.toFixed(2)} based on '${c.redemptionStrategyUsed.replace('_', ' ')}' strategy
`).trim(); // Use trim() to remove leading/trailing whitespace if needed

      const userMessageContent = `
A user is looking for credit card recommendations based on their estimated *monthly* spending:
${JSON.stringify(spend, null, 2)}

Their total estimated *annual* spending based on this is:
${JSON.stringify(annualSpend, null, 2)}

They are currently valuing points using the '${redemptionStrategy.replace('_', ' ')}' redemption strategy.

Based on their spending and selected strategy, here are the top ${topCards.length} cards calculated by our tool:
--- START CARD DATA ---
${topCardsFormatted}
--- END CARD DATA ---

Instructions:
1.  Analyze the user's spending profile (e.g., "high dining spend", "significant travel costs", "balanced spending").
2.  Compare the top 2-3 cards from the list provided.
3.  Recommend the single best card, OR potentially the top two if they serve very different purposes or if the second is a close competitor. Justify your recommendation clearly.
4.  Explain *why* the chosen card(s) are a good fit based on the user's specific spending, the card's reward multipliers in relevant categories, the overall value (considering fees), and any standout perks mentioned in the data.
5.  If recommending two cards, briefly explain the key difference or trade-off (e.g., "Card A for pure rewards, Card B for premium travel perks").
6.  Maintain an expert yet approachable tone. Use Markdown for formatting (like **bolding** and bullet points *).
7.  Focus solely on the cards and data provided. Do not suggest cards not on the list.
`;

      // --- Call the AI Model ---
      const response = await openai.chat.completions.create({
        model: 'gpt-4o', // Or 'gpt-3.5-turbo', 'gpt-4' etc. Consider newer models if available.
        messages: [
          { role: 'system', content: systemMessage },
          { role: 'user', content: userMessageContent }
        ],
        temperature: 0.6, // Adjust temperature for creativity vs. precision (0.5-0.8 often works well)
        // max_tokens: 500, // Optional: Limit response length
        // top_p: 1, // Optional
        // frequency_penalty: 0, // Optional
        // presence_penalty: 0, // Optional
      });

      const recommendation = response.choices[0]?.message?.content || 'No recommendation available.';

      res.status(200).json({ recommendation });

    } catch (error) {
      console.error('AI recommendation API error:', error);
      res.status(500).json({ error: 'Failed to get AI recommendation.' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}