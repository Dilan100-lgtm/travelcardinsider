// File: /pages/api/cardfinder.js
import cardsData from '@/data/finalcreditcard.json';
// Import *both* functions from scoring lib
import { filterCards, calculateAdvancedCardScore } from '@/lib/scoring';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  // Destructure *all* expected inputs from the request body
  const userProfile = req.body; // Contains spendingProfile, preferences, creditScoreRange, etc.

  if (!userProfile || !userProfile.spendingProfile || !userProfile.preferences) {
    return res.status(400).json({ error: 'Missing required inputs' });
  }

  // Reminder: Ensure finalcreditcard.json data is refined as per prerequisites!

  try {
    if (!cardsData?.cards || !Array.isArray(cardsData.cards)) {
      throw new Error('Invalid card data format');
    }

    // 1. Filter Cards based on non-scoring criteria
    const eligibleCards = filterCards(cardsData.cards, userProfile);

    // 2. Score the eligible cards
    const scoredCards = eligibleCards
      .map(card => {
        const scoreResult = calculateAdvancedCardScore(card, userProfile);
        return {
          // Include necessary data for the RecommendedCardTile component
          cardId: card['Card Name'], // Ideally use a real unique ID later
          name: card['Card Name'],
          issuer: card['Issuer'],
          imageUrl: card.image,
          annualFee: card['Annual Fee'],
          applyUrl: card.applyLink,
          reviewUrl: card.reviewLink,
          score: scoreResult.totalScore,
          netFirstYearValue: scoreResult.netFirstYearValue,
          ongoingValue: scoreResult.ongoingValue,
          matchedFeatures: scoreResult.matchedFeatures,
          // scoreBreakdown: scoreResult.breakdown, // Optional
        };
      })
      .sort((a, b) => b.score - a.score); // Sort by the new advanced score

    const topMatches = scoredCards.slice(0, 5); // Return top 5

    // Include a refresh timestamp (can be build time or server time)
    const lastRefreshed = new Date().toISOString();

    res.status(200).json({ matchedCards: topMatches, lastRefreshed });

  } catch (error) {
    console.error('Card scoring error:', error);
    res.status(500).json({ error: 'Internal Server Error processing card matching.' });
  }
}