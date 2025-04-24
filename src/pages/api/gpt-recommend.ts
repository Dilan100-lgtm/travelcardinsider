// File: src/pages/api/gpt-recommend.ts

import type { NextApiRequest, NextApiResponse } from 'next';
import { OpenAI } from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).end();

  const { topCards, spend } = req.body;

  // ✅ Move logs inside the function and after declaration
  console.log("API Call Triggered");
  console.log("Spend:", spend);
  console.log("Top Cards:", topCards);

  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-4',
      messages: [
        {
          role: 'system',
          content: 'You are a credit card rewards expert. Recommend the best cards based on user monthly spend and reward types.',
        },
        {
          role: 'user',
          content: `Here are the user inputs:\nSpend: ${JSON.stringify(spend)}\nTop 10 Cards: ${JSON.stringify(topCards)}`,
        },
      ],
      temperature: 0.7,
    });

    const message = response.choices[0]?.message?.content ?? 'No response';
    res.status(200).json({ recommendation: message });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'GPT API error' });
  }
}
