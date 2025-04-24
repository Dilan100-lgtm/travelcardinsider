// File: src/pages/api/gpt-recommend.ts

import type { NextApiRequest, NextApiResponse } from 'next';
import { OpenAI } from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).end();

  // Destructure payload from the front-end
  const { spend, annualSpend, redemptionStrategy, topCards } = req.body;

  // Basic validation (optional but good practice)
  if (!spend || !annualSpend || !redemptionStrategy || !topCards || !Array.isArray(topCards)) {
      return res.status(400).json({ error: 'Missing required data in request body' });
  }

  console.log("API Call Triggered - gpt-recommend");
  // console.log("Spend:", spend); // Log if needed for debugging
  // console.log("Top Cards Context:", JSON.stringify(topCards, null, 2)); // Log rich context if needed

  try {
    const response = await openai.chat.completions.create({
      // Consider using gpt-4-turbo or newer for potentially better results if budget allows
      model: 'gpt-3.5-turbo', // Or 'gpt-3.5-turbo' if preferred
      temperature: 0.6, // Slightly lower temp for more focused recommendations
      max_tokens: 500, // Adjust token limit as needed

      messages: [
        {
          role: 'system',
          content: `You are a sophisticated and objective Credit Card Rewards Expert AI, specializing in maximizing travel value and benefits for users based on their specific spending patterns.

          **Your Goal:** Provide highly personalized, clear, and actionable credit card recommendations. Analyze the user's spending, their preferred point valuation strategy, and the detailed data provided for the top-ranked cards. Identify the 1-2 best cards for this specific user.

          **Analysis Requirements:**
          1.  **Personalization:** Directly reference the user's highest spending categories when justifying recommendations.
          2.  **Value Assessment:** Compare cards based on both 'estimatedFirstYearNetValue' (including bonus) and 'estimatedOngoingNetValue' (rewards + annual perks - fee). Acknowledge the difference.
          3.  **Rewards Matching:** Explicitly mention how a card's 'topRewardCategories' align (or don't align) with the user's spending.
          4.  **Perk Relevance:** Highlight 'keyPerks' that are particularly relevant to travel (lounge access, credits, free bags, status, companion passes) or that significantly contribute to the card's value ('calculatedAnnualPerkValue').
          5.  **Fee Justification:** If recommending a card with a high annual fee, explain how its rewards and perks potentially offset that fee based on the provided data.
          6.  **Objectivity:** Base recommendations *strictly* on the provided 'Top Cards Analysis' data. Do *not* invent card details or recommend cards not listed in the input. Avoid promotional language.

          **Output Format:**
          * Start with a brief summary acknowledging the user's spending profile (e.g., "Based on your spending, especially in [Category X] and [Category Y]...").
          * Recommend the top 1 or 2 cards.
          * For **each** recommended card:
              * Use **bold** for the Card Name.
              * Provide a concise paragraph explaining *why* it's a strong fit for *this specific user*, linking its features (rewards/perks) to their spending and the calculated values. Use bullet points within the explanation for key reasons if helpful.
              * Briefly state the estimated first-year and ongoing net values.
              * Mention 1-2 most relevant key perks.
              * Note any significant considerations (e.g., high fee, specific redemption value via chosen strategy).
          * If recommending two cards, briefly explain how they might complement each other (e.g., one for travel, one for everyday) or why one might be slightly better depending on priorities (first year vs. ongoing).
          * Keep the overall tone helpful, expert, and objective. Ensure the response is easy to read.`,
        },
        {
          role: 'user',
          // Provide the data in a clear, structured format
          content: `Here is the user's data and the analysis of their top calculated cards:

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
          \`\`\`json
          ${JSON.stringify(topCards, null, 2)}
          \`\`\`

          Please provide your expert recommendation based *only* on the data above, strictly following the analysis requirements and output format specified in the system prompt. Focus on the best 1-2 cards for this user's profile.`,
        },
      ],
    });

    const message = response.choices[0]?.message?.content?.trim() ?? 'No recommendation available.';
    res.status(200).json({ recommendation: message });

  } catch (err: any) {
    console.error("Error calling OpenAI:", err.message); // Log the actual error message
    res.status(500).json({ error: 'Failed to get AI recommendation.' });
  }
}