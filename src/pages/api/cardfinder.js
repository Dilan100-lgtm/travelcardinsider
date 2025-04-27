// File: /pages/api/cardfinder.js
import cardsData from '@/data/finalcreditcard.json'; // Ensure path is correct
import { filterCards, calculateAdvancedCardScore } from '@/lib/scoring'; // Ensure path is correct

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const userProfile = req.body;

  // --- Input Validation ---
  if (!userProfile || typeof userProfile !== 'object' ||
      !userProfile.spendingProfile || typeof userProfile.spendingProfile !== 'object' ||
      !userProfile.preferences || typeof userProfile.preferences !== 'object') {
    console.error("Validation Error: Missing or invalid user profile structure.", userProfile);
    return res.status(400).json({ error: 'Missing or invalid required user profile data' });
  }
   // Validate specific required preferences
   if (!userProfile.preferences.creditScoreRange ||
       !userProfile.preferences.annualFeeBudget || !Array.isArray(userProfile.preferences.annualFeeBudget) || userProfile.preferences.annualFeeBudget.length !== 2) {
        console.error("Validation Error: Missing credit score or fee budget.", userProfile.preferences);
        return res.status(400).json({ error: 'Missing or invalid preferences (credit score or fee budget)' });
   }
   // Validate spending profile keys match expected (optional but good)
   // const expectedSpendingKeys = SPENDING_CATEGORIES.map(c => c.key); // Need SPENDING_CATEGORIES here or pass expected keys
   // const actualSpendingKeys = Object.keys(userProfile.spendingProfile);
   // if (!expectedSpendingKeys.every(k => actualSpendingKeys.includes(k))) {
   //    console.warn("Warning: Spending profile might have unexpected keys.");
   // }


  try {
    // --- Card Data Validation ---
    if (!cardsData?.cards || !Array.isArray(cardsData.cards)) {
      console.error('CRITICAL Error: Invalid or missing cards data in finalcreditcard.json');
      // Return a generic server error to the user
      throw new Error('Internal Server Error: Could not load card data.');
    }

    // --- Processing ---
    // 1. Filter Cards based on non-scoring criteria (Credit Score, Card Type)
    const eligibleCards = filterCards(cardsData.cards, userProfile);

    // Handle case where no cards match basic filters
    if (eligibleCards.length === 0) {
        console.log("No eligible cards found after initial filtering.");
        return res.status(200).json({ matchedCards: [], lastRefreshed: new Date().toISOString() });
    }

    // 2. Score the eligible cards individually
    const scoredCards = eligibleCards
      .map(card => {
        // Basic card object validation before scoring
        if (!card || !card['Card Name'] || !card['Issuer']) {
            console.warn('Skipping invalid/incomplete card object during scoring:', card);
            return null; // Skip this card if essential data is missing
        }
        try {
            // Calculate the score and relevant values
            const scoreResult = calculateAdvancedCardScore(card, userProfile);
            // Structure the data needed for the frontend tile AND the AI prompt context
            return {
              cardId: card['Card Unique ID'] || card['Card Name'], // Use a unique ID if available, fallback to name
              name: card['Card Name'],
              issuer: card['Issuer'],
              imageUrl: card.image || null, // Handle missing image field gracefully
              annualFee: card['Annual Fee'] ?? 0, // Default to 0 if null/undefined
              applyUrl: card.applyLink || '#', // Handle missing apply link
              reviewUrl: card.reviewLink || null, // Handle missing review link
              score: scoreResult.totalScore,
              netFirstYearValue: scoreResult.netFirstYearValue,
              ongoingValue: scoreResult.ongoingValue,
              matchedFeatures: scoreResult.matchedFeatures,
              // Provide extra context for the AI prompt if needed
              bonusValue: card.signUpBonus?.estimated_value_usd || 0,
              keyPerks: card.perks?.map(p => p.description || p.perkType).slice(0,3) || [], // Top 3 perk descriptions
              rewardHighlights: card.rewards?.filter(r => r.multiplier > (card.rewards.baseRate || 1)).map(r => `${r.multiplier}x on ${r.category.replace(/_/g, ' ')}`).slice(0,2) || [], // Top 2 bonus categories
            };
        } catch (scoringError) {
            // Log error scoring a specific card but continue with others
            console.error(`Error scoring card "${card['Card Name']}":`, scoringError);
            return null; // Skip card if scoring function throws an error
        }
      })
      .filter(card => card !== null) // Remove any cards that were skipped due to errors/validation
      .sort((a, b) => b.score - a.score); // Sort results by score descending

    // --- Response ---
    const topMatches = scoredCards.slice(0, 5); // Return top 5 matches for display
    const lastRefreshed = new Date().toISOString(); // Timestamp of when data was processed

    console.log(`Found ${topMatches.length} top matches.`);
    res.status(200).json({ matchedCards: topMatches, lastRefreshed });

  } catch (error) {
    // Catch broader errors (like data loading failure)
    console.error('Card scoring API handler error:', error);
    // Avoid exposing internal error details to the client in production
    res.status(500).json({ error: 'Internal Server Error processing card matching.' });
  }
}