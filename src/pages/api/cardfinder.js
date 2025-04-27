// File: /pages/api/cardfinder.js
import cardsData from '@/data/finalcreditcard.json'; // Ensure path is correct
import { filterCards, calculateAdvancedCardScore } from '@/lib/scoring'; // Ensure path is correct

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }
  const userProfile = req.body;
  if (!userProfile || !userProfile.spendingProfile || !userProfile.preferences) {
    // Add more specific checks if needed
    return res.status(400).json({ error: 'Missing required inputs (spendingProfile, preferences)' });
  }

  // --- Data Refinement Reminder ---
  // THIS CODE ASSUMES finalcreditcard.json HAS BEEN UPDATED WITH:
  // - Standardized `perkType`
  // - `transferPartners` arrays
  // - Standardized `creditScoreRequirement` (e.g., ["Good", "Excellent"])
  // - Structured `introAPR` objects like { type: 'purchase', durationMonths: 15 }
  // - Reliable `estimated_value_usd` in `signUpBonus`
  // ---

  try {
    // Basic validation of card data structure
    if (!cardsData?.cards || !Array.isArray(cardsData.cards)) {
      console.error("Invalid or missing card data in finalcreditcard.json");
      throw new Error('Internal server error: Card data not available.');
    }

    // 1. Filter Cards
    const eligibleCards = filterCards(cardsData.cards, userProfile);

    // 2. Score the eligible cards
    const scoredCards = eligibleCards
      .map(card => {
        // Handle potential errors during scoring of a single card
        try {
            const scoreResult = calculateAdvancedCardScore(card, userProfile);
            return {
                cardId: card['Card Name'], // Use a more unique ID if available later
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
                scoreBreakdown: scoreResult.breakdown, // Pass the breakdown
            };
        } catch(scoreError) {
            console.error(`Error scoring card "${card?.['Card Name']}":`, scoreError);
            return null; // Skip cards that cause scoring errors
        }
      })
      .filter(card => card !== null) // Remove cards that failed scoring
      .sort((a, b) => b.score - a.score); // Sort by score

    const topMatches = scoredCards.slice(0, 5); // Keep top 5
    const lastRefreshed = new Date().toISOString(); // Timestamp of this request

    res.status(200).json({ matchedCards: topMatches, lastRefreshed });

  } catch (error) {
    // Log the detailed error on the server, but return a generic message
    console.error('Card scoring API error:', error);
    res.status(500).json({ error: 'Internal Server Error processing card matching.' });
  }
}