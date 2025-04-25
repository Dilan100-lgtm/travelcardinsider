// File: src/pages/api/gpt-recommend.ts

import type { NextApiRequest, NextApiResponse } from 'next';
import { OpenAI } from 'openai';

// Ensure API key is loaded from environment variables
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
});

// Define interfaces for the incoming request body for clarity
interface RequestBody {
  spend: { [key: string]: number };
  annualSpend: { [key: string]: number };
  redemptionStrategy: string;
  topCards: any[]; // Use a more specific type if possible matching the frontend context
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  const { spend, annualSpend, redemptionStrategy, topCards }: RequestBody = req.body;

  // Basic validation
  if (!spend || !annualSpend || !redemptionStrategy || !topCards || !Array.isArray(topCards)) {
      return res.status(400).json({ error: 'Missing required data in request body' });
  }
  if (topCards.length === 0) {
       // Handle case where filters result in no cards
       return res.status(200).json({ recommendation: "No cards matched your filters or spending profile to generate a recommendation." });
  }


  console.log(`API Call Triggered - gpt-recommend for strategy: ${redemptionStrategy}`);

  try {
    // Format the top cards data clearly for the prompt
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
`).trim(); // Use trim()


    // Construct the Prompt Messages
    const systemMessage = `You are a sophisticated and objective Credit Card Rewards Expert AI, specializing in maximizing travel value and benefits for users based on their specific spending patterns.

          **Your Goal:** Provide highly personalized, clear, and actionable credit card recommendations. Analyze the user's spending, their preferred point valuation strategy, and the detailed data provided for the top-ranked cards. Identify the 1-2 best cards for this specific user.

          **Analysis Requirements:**
          1.  **Personalization:** Directly reference the user's highest spending categories when justifying recommendations.
          2.  **Value Assessment:** Compare cards based on both 'estimatedFirstYearNetValue' (including bonus) and 'estimatedOngoingNetValue' (rewards + annual perks - fee). Acknowledge the difference.
          3.  **Rewards Matching:** Explicitly mention how a card's 'Key Reward Categories' align (or don't align) with the user's spending.
          4.  **Perk Relevance:** Highlight 'Key Perks' that are particularly relevant to travel (lounge access, credits, free bags, status, companion passes) or that significantly contribute to the card's value ('Calculated Annual Perk Value').
          5.  **Fee Justification:** If recommending a card with a high annual fee, explain how its rewards and perks potentially offset that fee based on the provided data.
          6.  **Objectivity:** Base recommendations *strictly* on the provided 'Top Cards Analysis' data. Do *not* invent card details or recommend cards not listed in the input. Avoid promotional language.

          **Output Format:**
          * Start with a brief 1-2 sentence summary acknowledging the user's spending profile (e.g., "Based on your spending, especially in [Category X] and [Category Y]...").
          * Clearly state the recommendation (e.g., "My top recommendation for you is..." or "The two best cards for your profile are...").
          * Use "---" (horizontal rule) as a separator.
          * For **each** recommended card, use the following structured format using Markdown:
              * Use a level 3 heading for the card name: \`### **[Card Name]**\`
              * Include the following sections clearly separated (Use these exact headings):
                  * **Why it Fits You:** Use bullet points (\`* \`) explaining *why* it's a strong fit for *this specific user*, linking its features (rewards/perks) to their spending and the calculated values.
                  * **Key Rewards:** Use bullet points to list 2-3 top reward categories relevant to the recommendation (e.g., \`* 5x on Travel via Portal\`).
                  * **Notable Perks:** Use bullet points to list 1-2 most relevant key perks from the data (e.g., \`* $300 Travel Credit\`, \`* Lounge Access\`).
                  * **Estimated Value:** Use bullet points: \`* First Year Net: ~$XXX\`, \`* Ongoing Net: ~$XXX/year\`. Use the values provided.
                  * **Considerations:** Use bullet points for key factors (\`* Annual Fee: $XXX\`, \`* Best value via [Strategy] redemption\`).
          * If recommending two cards: Use "---" between card sections and add a brief concluding sentence explaining how they compare or complement each other.
          * Ensure the entire response uses Markdown effectively for clarity (headings, bolding, bullet points). Avoid conversational filler.`;

    const userMessage = `Here is the user's data and the analysis of their top calculated cards:

          **User Monthly Spend:**
          \`\`\`json
          ${JSON.stringify(spend, null, 2)}
          \`\`\`

          **User Annual Spend:**
          \`\`\`json
          ${JSON.stringify(annualSpend, null, 2)}
          \`\`\`

          **User Preferred Point Valuation Strategy:** ${redemptionStrategy}

          **Top Cards Analysis (Sorted by First Year Value):**
          ${topCardsFormatted}

          Please provide your expert recommendation based *only* on the data above, strictly following the analysis requirements and **especially the structured output format** specified in the system prompt. Focus on the best 1-2 cards for this user's profile.`;


    // Call OpenAI API
    const response = await openai.chat.completions.create({
      model: 'gpt-4o', // Recommended model
      // model: 'gpt-3.5-turbo', // Fallback if needed
      temperature: 0.5, // Slightly lower temp for more structured output adherence
      max_tokens: 700, // Increased tokens for structured format
      messages: [
        { role: 'system', content: systemMessage },
        { role: 'user', content: userMessage },
      ],
    });

    const message = response.choices[0]?.message?.content?.trim() ?? 'No recommendation available.';
    res.status(200).json({ recommendation: message });

  } catch (err: any) {
    console.error("Error calling OpenAI:", err.response ? err.response.data : err.message); // Log more detailed error if available
    res.status(500).json({ error: 'Failed to get AI recommendation.' });
  }
}