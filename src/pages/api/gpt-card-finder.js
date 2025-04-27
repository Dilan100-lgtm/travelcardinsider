// File: /pages/api/gpt-card-finder.js

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { spendingProfile, preferences } = req.body;

  if (!spendingProfile || !preferences) {
    return res.status(400).json({ error: 'Missing spending or preferences' });
  }

  // This is MOCK behavior. In production, replace this with actual OpenAI API call.
  const mockSuggestions = [
    "Chase Sapphire Preferred®: Good for travel and dining mix.",
    "American Express® Gold Card: High dining and grocery rewards.",
    "Capital One Venture X®: Strong all-around travel perks."
  ];

  res.status(200).json({ suggestions: mockSuggestions });
}
