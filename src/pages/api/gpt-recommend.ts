// File: pages/api/gpt-recommend.ts

import type { NextApiRequest, NextApiResponse } from 'next';
import { OpenAI } from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // Put your key in .env.local
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Only POST requests are allowed' });
  }

  const { topCards, spend } = req.body;

  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-4',
      messages: [
        {
          role: 'system',
          content:
            'You are a travel credit card expert. Given a user\'s monthly spending and a list of top-matching credit cards, recommend the best 1-2 cards and explain why based on reward potential.',
        },
        {
          role: 'user',
          content: `User's monthly spend: ${JSON.stringify(spend, null, 2)}\n\nTop 10 credit cards: ${JSON.stringify(topCards, null, 2)}`,
        },
      ],
      temperature: 0.7,
    });

    const message = response.choices[0]?.message?.content ?? 'No recommendation generated.';
    res.status(200).json({ recommendation: message });
  } catch (error: any) {
    console.error('OpenAI Error:', error.message);
    res.status(500).json({ error: 'AI failed to generate a response. Check API key or usage quota.' });
  }
}
