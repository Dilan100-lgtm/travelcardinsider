// File: /pages/api/cardfinder.js
import cardsData from '@/data/finalcreditcard.json'; // Ensure path is correct
import { filterCards, calculateAdvancedCardScore } from '@/lib/scoring'; // Ensure path is correct

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const userProfile = req.body;

  // Robust validation
  if (!userProfile || typeof userProfile !== 'object' ||
      !userProfile.spendingProfile || typeof userProfile.spendingProfile !== 'object' ||
      !userProfile.preferences || typeof userProfile.preferences !== 'object') {
    return res.status(400).json({ error: 'Missing or invalid required user profile data' });
  }
   if (!userProfile.preferences.creditScoreRange ||
       !userProfile.preferences.annualFeeBudget || !Array.isArray(userProfile.preferences.annualFeeBudget) || userProfile.preferences.annualFeeBudget.length !== 2) {
        return res.status(400).json({ error: 'Missing or invalid preferences (credit score or fee budget)' });
   }


  try {
    // Validate card data source
    if (!cardsData?.cards || !Array.isArray(cardsData.cards)) {
      console.error('Error: Invalid or missing cards data in finalcreditcard.json');
      throw new Error('Internal Server Error: Invalid card data source'); // User-friendly error
    }

    // 1. Filter Cards
    const eligibleCards = filterCards(cardsData.cards, userProfile);

    if (eligibleCards.length === 0) {
        return res.status(200).json({ matchedCards: [], lastRefreshed: new Date().toISOString() });
    }

    // 2. Score the eligible cards
    const scoredCards = eligibleCards
      .map(card => {
        if (!card || !card['Card Name']) {
            console.warn('Skipping invalid card object during scoring:', card);
            return null;
        }
        try {
            const scoreResult = calculateAdvancedCardScore(card, userProfile);
            // Data needed for Tile and AI prompt
            return {
              cardId: card['Card Name'], // Use a real unique ID if available
              name: card['Card Name'],
              issuer: card['Issuer'],
              imageUrl: card.image,
              annualFee: card['Annual Fee'] ?? 0,
              applyUrl: card.applyLink,
              reviewUrl: card.reviewLink,
              score: scoreResult.totalScore,
              netFirstYearValue: scoreResult.netFirstYearValue,
              ongoingValue: scoreResult.ongoingValue,
              matchedFeatures: scoreResult.matchedFeatures,
              // Explicit data for AI context
              bonusValue: card.signUpBonus?.estimated_value_usd || 0,
              keyPerks: card.perks?.map(p => p.description || p.perkType).slice(0,3) || [],
              rewardHighlights: card.rewards?.filter(r => r.multiplier > (card.rewards.baseRate || 1)).map(r => `${r.multiplier}x on ${r.category.replace(/_/g, ' ')}`).slice(0,2) || [],
            };
        } catch (scoringError) {
            console.error(`Error scoring card "${card['Card Name']}":`, scoringError);
            return null; // Skip card if scoring fails
        }
      })
      .filter(card => card !== null) // Remove nulls from failed scoring/validation
      .sort((a, b) => b.score - a.score); // Sort by score DESC

    const topMatches = scoredCards.slice(0, 5); // Return top 5 for display
    const lastRefreshed = new Date().toISOString();

    res.status(200).json({ matchedCards: topMatches, lastRefreshed });

  } catch (error) {
    console.error('Card scoring API error:', error);
    // Avoid exposing internal details in production
    res.status(500).json({ error: 'Internal Server Error processing card matching.' });
  }
}