// File: /pages/api/cardfinder.js
import cardsData from '@/data/finalcreditcard.json'; // Load data server-side
import { calculateAdvancedCardScore } from '@/lib/scoring'; // Assume scoring logic is moved to a helper

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  // Expect more inputs later (creditScore, loyalty etc.)
  const { spendingProfile, preferences /*, add other inputs here */ } = req.body;

  if (!spendingProfile || !preferences) {
    return res.status(400).json({ error: 'Missing required inputs' });
  }

  // --- Data Refinement Reminder ---
  // Ensure your finalcreditcard.json includes:
  // - Standardized `perkType` (e.g., "LOUNGE_ACCESS")
  // - `transferPartners` arrays
  // - Standardized `Credit Score Requirement` (e.g., ["Good", "Excellent"])
  // - Structured `Intro APR` objects
  // ---

  try {
    if (!cardsData?.cards || !Array.isArray(cardsData.cards)) {
       throw new Error('Invalid card data format');
    }

    // **Advanced Scoring Implementation**
    const scoredCards = cardsData.cards
      .map(card => {
        // 1. Initial Filtering (Example: Credit Score - add input later)
        // if (!checkCreditScoreMatch(card, userCreditScore)) {
        //   return null; // Or score very low
        // }

        // 2. Calculate score using the detailed weighted logic
        const scoreDetails = calculateAdvancedCardScore(card, { spendingProfile, preferences /*, other inputs */ });
        return {
          cardId: card['Card Name'], // Use a unique ID if available
          name: card['Card Name'],
          score: scoreDetails.totalScore, // Calculated score (0-100)
          scoreBreakdown: scoreDetails.breakdown, // Optional: for transparency
          imageUrl: card.image,
          annualFee: card['Annual Fee'],
          applyUrl: card.applyLink,
          reviewUrl: card.reviewLink, // Add review link
          keyFeatures: scoreDetails.matchedFeatures, // Key features that contributed to score
        };
      })
      .filter(card => card !== null) // Remove filtered-out cards
      .sort((a, b) => b.score - a.score); // Sort by advanced score

    const topMatches = scoredCards.slice(0, 5); // Return top 5

    res.status(200).json({ matchedCards: topMatches });

  } catch (error) {
    console.error('Card scoring error:', error);
    res.status(500).json({ error: 'Internal Server Error processing card matching.' });
  }
}

// --- Helper function placeholder (Create in /lib/scoring.js) ---
// import { calculateAdvancedCardScore } from '@/lib/scoring';
// function calculateAdvancedCardScore(card, userProfile) {
//   // Implement the weighted scoring from the original technical plan here:
//   // - Estimated Annual Rewards Value (40%) - Use spendingProfile & card rewards/point values
//   // - Fit with User Loyalty (20%) - Needs loyalty inputs & transfer partner data
//   // - Perks Match (15%) - Needs perk inputs & standardized perkType in data
//   // - Fee Affordability (10%) - Needs budget input & card fee
//   // - 0% APR Match (5%) - Needs APR input & structured card APR data
//   // - (Credit Score Filter applied before this function)
//
//   let totalScore = 0;
//   let breakdown = {}; // Optional: store contribution of each factor
//   let matchedFeatures = []; // Optional: list features user liked
//
//   // ... detailed calculation logic ...
//
//   return { totalScore: Math.round(totalScore), breakdown, matchedFeatures };
// }