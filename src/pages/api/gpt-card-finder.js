// File: /pages/api/gpt-card-finder.js
import { OpenAI } from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  // Receive spending, preferences, AND the recommended cards
  const { spendingProfile, preferences, recommendedCards } = req.body;

  if (!spendingProfile || !preferences || !recommendedCards) {
    return res.status(400).json({ error: 'Missing required data for AI suggestion' });
  }

  // --- Prompt Engineering ---
  const topCardNames = recommendedCards.map(c => c.name).join(', ');
  const prompt = `
      You are a helpful credit card advisor. Based on the user's profile and the top ${recommendedCards.length} cards already recommended, provide a short, personalized explanation (2-3 sentences maximum per card, total 100 words max) for why these cards are a good fit. Explain using specific details from the user profile and card features.

      User Profile:
      - Monthly Spending: ${JSON.stringify(spendingProfile)}
      - Preferences: ${JSON.stringify(preferences)}
      - Recommended Cards: ${topCardNames}

      Example Format (adapt to the cards):
      "Based on your high dining spend and preference for travel points, the [Card Name 1] is a great fit due to its 4x points on dining... The [Card Name 2] suits your desire for lounge access and has a reasonable fee..."

      Generate the personalized explanation:
  `;

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo", // Or "gpt-4" for higher quality/cost
      messages: [{ role: "user", content: prompt }],
      max_tokens: 150, // Adjust as needed
      temperature: 0.7, // Control creativity
    });

    const suggestionText = completion.choices[0]?.message?.content?.trim() || "Could not generate AI summary.";

    // Simple split for basic list format, can be improved
    const suggestionsList = suggestionText.split('. ').filter(s => s).map(s => s.trim() + '.');

    res.status(200).json({ suggestions: suggestionsList });

  } catch (error) {
    console.error('OpenAI API error:', error);
    res.status(500).json({ error: 'Failed to get AI suggestions' });
  }
}