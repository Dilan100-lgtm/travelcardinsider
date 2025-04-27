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
    return res.status(400).json({ error: 'Missing required user profile data' });
  }
   // Basic validation for spending profile
   if (typeof userProfile.spendingProfile !== 'object' || userProfile.spendingProfile === null) {
      return res.status(400).json({ error: 'Invalid spending profile format' });
   }
   // Basic validation for preferences
   if (typeof userProfile.preferences !== 'object' || userProfile.preferences === null) {
        return res.status(400).json({ error: 'Invalid preferences format' });
   }
   // Ensure essential preference like credit score exists
   if (!userProfile.preferences.creditScoreRange) {
        return res.status(400).json({ error: 'Missing credit score preference' });
   }


  // Reminder: Ensure finalcreditcard.json data is refined as per prerequisites!

  try {
    if (!cardsData?.cards || !Array.isArray(cardsData.cards)) {
      console.error('Error: Invalid or missing cards data in finalcreditcard.json');
      throw new Error('Invalid card data format');
    }

    // 1. Filter Cards based on non-scoring criteria
    const eligibleCards = filterCards(cardsData.cards, userProfile);

    if (eligibleCards.length === 0) {
        // Return empty results if no cards match basic filters
        return res.status(200).json({ matchedCards: [], lastRefreshed: new Date().toISOString() });
    }

    // 2. Score the eligible cards
    const scoredCards = eligibleCards
      .map(card => {
        // Add robust check for card validity before scoring
        if (!card || !card['Card Name']) {
            console.warn('Skipping invalid card object during scoring:', card);
            return null; // Skip this card if it's invalid
        }
        try {
            const scoreResult = calculateAdvancedCardScore(card, userProfile);
            return {
              // Include necessary data for the RecommendedCardTile component AND AI prompt
              cardId: card['Card Name'], // Ideally use a real unique ID later
              name: card['Card Name'],
              issuer: card['Issuer'],
              imageUrl: card.image, // Ensure 'image' field exists in JSON
              annualFee: card['Annual Fee'] ?? 0, // Default to 0 if missing
              applyUrl: card.applyLink, // Ensure 'applyLink' exists
              reviewUrl: card.reviewLink, // Ensure 'reviewLink' exists
              score: scoreResult.totalScore,
              netFirstYearValue: scoreResult.netFirstYearValue,
              ongoingValue: scoreResult.ongoingValue,
              matchedFeatures: scoreResult.matchedFeatures, // Key features for display and AI context
              // Provide key scoring factors/data points for AI context if needed:
              bonusValue: card.signUpBonus?.estimated_value_usd || 0,
              keyPerks: card.perks?.map(p => p.description || p.perkType).slice(0,3) || [], // Top 3 perk descriptions
              rewardHighlights: card.rewards?.filter(r => r.multiplier > (card.rewards.baseRate || 1)).map(r => `${r.multiplier}x on ${r.category.replace(/_/g, ' ')}`).slice(0,2) || [], // Top 2 bonus categories
              // scoreBreakdown: scoreResult.breakdown, // Optional for debugging
            };
        } catch (scoringError) {
            console.error(`Error scoring card "${card['Card Name']}":`, scoringError);
            return null; // Skip card if scoring fails for any reason
        }
      })
      .filter(card => card !== null) // Remove any cards that failed validation or scoring
      .sort((a, b) => b.score - a.score); // Sort by the new advanced score

    // Return top N matches (e.g., top 5 for display, top 3 needed for AI prompt)
    const topMatches = scoredCards.slice(0, 5);

    // Include a refresh timestamp (can be build time or server time)
    const lastRefreshed = new Date().toISOString();

    res.status(200).json({ matchedCards: topMatches, lastRefreshed });

  } catch (error) {
    console.error('Card scoring API error:', error);
    res.status(500).json({ error: 'Internal Server Error processing card matching.' });
  }
}