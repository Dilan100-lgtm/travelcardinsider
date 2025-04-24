// File: src/components/RewardsCalculator.tsx

import React, { useState, useMemo } from 'react';
// Assuming your data file is correctly named and placed
import cardDataRaw from '@/data/finalcreditcard.json'; // Use the actual path to your detailed JSON

// --- Define Interfaces based on finalcreditcard.json structure ---

// Interface for spending caps within rewards
interface CardCap {
  amount_usd: number;
  period: 'month' | 'quarter' | 'year';
  applies_to_categories: string[];
}

// Interface for individual reward rules
interface CardReward {
  multiplier: number;
  category: string; // e.g., 'travel_portal', 'dining', 'groceries_us', 'other'
  notes: string | null;
  cap: CardCap | null;
}

// Interface for the sign-up bonus
interface CardSignUpBonus {
  points: number | null;
  description: string;
  minSpend: number | null;
  durationDays: number | null;
  estimated_value_usd: number | null;
}

// Interface for redemption options and their values (cents per point)
// Add more keys as needed based on all possibilities in your data
interface CardRedemptionOptions {
  travel_statement_credit_cpp?: number;
  cash_back_cpp?: number;
  chase_travel_portal_cpp?: number;
  amex_travel_cpp?: number;
  cap_one_travel_cpp?: number;
  transfer_partner_average_cpp?: number; // Use estimated value if available
  program_cpp?: number; // For specific airline/hotel programs
  // Add other specific cpp keys found in your data
  [key: string]: number | undefined; // Allow for other potential keys
}

// Interface for card perks
interface CardPerk {
  type: string; // e.g., 'lounge_access', 'free_checked_bag', 'travel_credit'
  description?: string;
  value_usd?: number; // Direct annual value if applicable
  frequency?: string; // e.g., 'annual', 'every_4_years'
  notes?: string;
  estimated_value_usd?: number | null; // Estimated value if direct value isn't fixed
}

// Main interface for the credit card object
interface DetailedCreditCard {
  "Card Name": string;
  Issuer: string;
  image: string;
  ratingValue?: number; // Optional based on data consistency
  applyLink: string;
  ratesandfees: string;
  reviewLink: string;
  "Card Type": "Personal" | "Business";
  "Annual Fee": number;
  "APR Range (Purchases)": string | null;
  "Foreign Transaction Fee": number | null;
  "Intro APR": string | null;
  "Credit Score Requirement": string | null;
  signUpBonus: CardSignUpBonus;
  rewardProgram: string | null;
  rewards: CardReward[];
  redemptionOptions: CardRedemptionOptions;
  perks: CardPerk[];

  // Add calculated fields
  calculatedPoints?: number;
  calculatedTotalValue?: number;
  calculatedNetValue?: number;
}

// --- Load and Type the Data ---

// The JSON file might contain multiple root 'cards' arrays if concatenated incorrectly.
// Assuming the file structure is actually like { "cards": [...] } or an array of { "cards": [...] }
let allCards: DetailedCreditCard[] = [];
if (Array.isArray(cardDataRaw)) {
  // If cardDataRaw is [{cards: [...]}, {cards: [...]}, ...]
  cardDataRaw.forEach((dataPart: any) => {
    if (dataPart && Array.isArray(dataPart.cards)) {
      allCards = allCards.concat(dataPart.cards as DetailedCreditCard[]);
    }
  });
} else if (cardDataRaw && Array.isArray((cardDataRaw as any).cards)) {
   // If cardDataRaw is {cards: [...]}
   allCards = (cardDataRaw as any).cards as DetailedCreditCard[];
} else {
  console.error("Unexpected structure in finalcreditcard.json. Expected { cards: [...] } or [{ cards: [...] }, ...]");
  // Handle the error appropriately, maybe set allCards to an empty array
}

// Filter out any potentially invalid card entries if necessary (basic check)
const cards: DetailedCreditCard[] = allCards.filter(card => card && card["Card Name"]);

// --- Define User Input Categories and State ---
const categoryList = ['travel', 'dining', 'groceries', 'gas', 'onlineShopping', 'other'] as const;

type SpendInput = {
  [key in typeof categoryList[number]]: number;
};

const defaultSpend: SpendInput = {
  travel: 0,
  dining: 0,
  groceries: 0,
  gas: 0,
  onlineShopping: 0,
  other: 0,
};

// --- React Component ---

export default function RewardsCalculator() {
  const [spend, setSpend] = useState<SpendInput>(defaultSpend);
  const [aiSuggestion, setAiSuggestion] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // --- Helper Functions ---

  // Helper function to get the best reward rule for a specific JSON category
  const getRewardRule = (card: DetailedCreditCard, targetCategory: string): CardReward | undefined => {
      // Find exact match first
      let rule = card.rewards.find(r => r.category === targetCategory);
      if (rule) return rule;
      // Fallback to 'other' category if no specific match
      return card.rewards.find(r => r.category === 'other');
  };

   // Helper function to get a default Cents Per Point (CPP) - prioritizing cash back or 1.0
  const getDefaultCpp = (card: DetailedCreditCard): number => {
      return card.redemptionOptions?.cash_back_cpp ?? // Prefer cash back value
             card.redemptionOptions?.travel_statement_credit_cpp ?? // Then travel credit
             1.0; // Default to 1 cent per point otherwise
  }

  // --- Event Handlers ---

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSpend((prev) => ({
      ...prev,
      [name]: parseFloat(value) || 0,
    }));
  };

  // --- Core Calculation Logic ---

  const results: DetailedCreditCard[] = useMemo(() => {
    // 1. Define Category Mapping (User Input -> JSON Categories)
    // This needs careful consideration and customization based on your data categories
    const categoryMap: { [userInputCategory: string]: string[] } = {
      travel: ['travel_portal', 'travel_other', 'flights_direct', 'hotel', 'flights_amex_travel', 'hotel_amex_travel', 'hotel_chase_portal', 'car_rental_chase_portal', 'flights_chase_portal', 'hotel_capital_one_portal', 'flights_capital_one_portal', 'airlines', 'transit', 'gas', 'southwest_airlines', 'united_airlines', 'jetblue', 'hawaiian_airlines', 'delta_airlines', 'american_airlines', 'british_airways', 'alaska_airlines', 'aircanada'],
      dining: ['dining'],
      groceries: ['groceries_us', 'groceries', 'online_grocery'],
      gas: ['gas_us', 'gas'],
      onlineShopping: ['online_retail_us'],
      // Specific card categories not easily mapped to broad inputs:
      // 'drugstores', 'streaming', 'phone_plans', 'shipping', 'wireless_phone', 'office_supplies',
      // 'fitness_clubs', 'partner_merchants', 'custom_top_category', 'chosen_category_5pct',
      // 'chosen_everyday_2pct', 'business_top_category', 'business_bonus_category',
      // 'business_category_boost', 'hilton_hotels', 'hyatt_hotels'
      // These might need separate inputs or be handled via 'other' unless mapped specifically
    };

    return cards.map(card => {
      let totalPoints = 0;
      // Track spending towards caps (Simplified: assumes annual caps & annualizes monthly spend)
      const capTracker: { [capKey: string]: number } = {};
      const annualSpend = Object.entries(spend).reduce((acc, [key, monthlySpend]) => {
         acc[key as keyof SpendInput] = monthlySpend * 12;
         return acc;
      }, {} as { [key in keyof SpendInput]: number });

      // Iterate through each USER INPUT spending category (travel, dining, etc.)
      for (const [userInputCategory, userAnnualSpend] of Object.entries(annualSpend)) {
          if (userAnnualSpend <= 0) continue;

          // Find corresponding JSON categories from mapping
          const targetJsonCategories = categoryMap[userInputCategory] || [];

          if (userInputCategory === 'other' || targetJsonCategories.length === 0) {
              // Handle 'other' spend or unmapped categories
              const rule = getRewardRule(card, 'other');
              const multiplier = rule?.multiplier ?? 1; // Default to 1x if no 'other' rule somehow
              totalPoints += userAnnualSpend * multiplier;
          } else {
              // Find the best multiplier available for this user category among mapped JSON categories
              let bestMultiplier = 1; // Start with base rate
              let appliedRule: CardReward | undefined = getRewardRule(card, 'other'); // Default to 'other' rule

              for (const jsonCategory of targetJsonCategories) {
                   const rule = card.rewards.find(r => r.category === jsonCategory);
                   if (rule && rule.multiplier > bestMultiplier) {
                      bestMultiplier = rule.multiplier;
                      appliedRule = rule;
                   }
              }

              // Apply Cap Logic (Simplified for Annual Caps)
              let spendToAdd = userAnnualSpend;
              if (appliedRule?.cap && appliedRule.cap.period === 'year') {
                 const capKey = appliedRule.cap.applies_to_categories.sort().join(',');
                 const capLimit = appliedRule.cap.amount_usd;
                 const spentTowardsCap = capTracker[capKey] || 0;
                 const remainingCap = Math.max(0, capLimit - spentTowardsCap);

                 const spendAtBonusRate = Math.min(userAnnualSpend, remainingCap);
                 const spendAtOtherRate = Math.max(0, userAnnualSpend - spendAtBonusRate);

                 // Add points at bonus rate (up to cap)
                 totalPoints += spendAtBonusRate * bestMultiplier;
                 capTracker[capKey] = spentTowardsCap + spendAtBonusRate; // Update tracker

                 // Add remaining points at 'other' rate
                 if (spendAtOtherRate > 0) {
                    const otherRule = getRewardRule(card, 'other');
                    const otherMultiplier = otherRule?.multiplier ?? 1;
                    totalPoints += spendAtOtherRate * otherMultiplier;
                 }
                 // Reset spendToAdd as it's handled
                 spendToAdd = 0;
              } else if (appliedRule?.cap && (appliedRule.cap.period === 'month' || appliedRule.cap.period === 'quarter')) {
                  // --- Placeholder for Monthly/Quarterly Cap Logic ---
                  // This requires more complex handling - assuming annual for now
                  // For a simple monthly cap: check if (userAnnualSpend / 12) > capLimit
                  // For quarterly: check if (userAnnualSpend / 4) > capLimit
                  // This basic version applies the bestMultiplier to all spendToAdd here
                  // --- End Placeholder ---
                  totalPoints += spendToAdd * bestMultiplier;
                  spendToAdd = 0; // Mark as handled (even if simplified)
              }


              // If no cap applied or spend remains after cap logic
              if (spendToAdd > 0) {
                  totalPoints += spendToAdd * bestMultiplier;
              }
          }
      } // End loop through user spend categories

      // Calculate initial values
      const defaultCpp = getDefaultCpp(card);
      const totalValue = (totalPoints * defaultCpp) / 100; // Value in dollars
      const netValue = totalValue - card["Annual Fee"];

      return {
        ...card,
        calculatedPoints: Math.round(totalPoints), // Store calculated points
        calculatedTotalValue: parseFloat(totalValue.toFixed(2)), // Store calculated value
        calculatedNetValue: parseFloat(netValue.toFixed(2)), // Store calculated net value
      };
    }).sort((a, b) => (b.calculatedNetValue ?? -Infinity) - (a.calculatedNetValue ?? -Infinity)); // Sort by net value

  }, [spend]); // Dependency array includes spend state

  // --- AI Recommendation Fetching ---

  const getAiRecommendation = async () => {
    setLoading(true);
    setError('');
    try {
        // Prepare data for AI - Send richer context than before
        const topCardsContext = results.slice(0, 5).map(card => ({ // Send top 5 for context
            name: card["Card Name"],
            issuer: card.Issuer,
            annualFee: card["Annual Fee"],
            netValue: card.calculatedNetValue,
            points: card.calculatedPoints,
            topRewards: card.rewards // Send reward rules
                .filter(r => r.multiplier > 1 && r.category !== 'other') // Filter for bonus categories
                .sort((a, b) => b.multiplier - a.multiplier) // Sort by multiplier
                .slice(0, 3) // Get top 3 bonus categories
                .map(r => `${r.multiplier}x on ${r.category}${r.cap ? ` (up to $${r.cap.amount_usd}/${r.cap.period})` : ''}`),
            keyPerks: card.perks // Send perk info
                .filter(p => p.type !== 'tier_qualifying_boost' && p.type !== 'points_back') // Filter out less tangible perks for brevity
                .map(p => p.description || p.type)
                .slice(0, 3), // Limit perks shown
            signupBonus: card.signUpBonus.description, // Include bonus description
        }));


      const res = await fetch('/api/gpt-recommend', { // Ensure this API route exists and works
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        // Send structured data including calculated values and richer card context
        body: JSON.stringify({
            spend: spend, // Send monthly spend
            annualSpend: Object.entries(spend).reduce((acc, [key, monthlySpend]) => {
                acc[key as keyof SpendInput] = monthlySpend * 12; return acc;
            }, {} as { [key in keyof SpendInput]: number }),
            topCards: topCardsContext // Send the richer context
        }),
      });

      if (!res.ok) throw new Error(`Server responded ${res.status}`);

      const data = await res.json();
      setAiSuggestion(data.recommendation);
    } catch (err: any) {
      console.error('AI request failed:', err);
      setError('AI recommendation failed. Please ensure the API route is set up correctly.');
    } finally {
      setLoading(false);
    }
  };

  // --- Render JSX ---

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h2>AI-Powered Travel Rewards Calculator</h2>
      <p>Enter your estimated *monthly* spending per category.</p>

      <form style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '2rem', maxWidth: '800px' }}>
        {categoryList.map((category) => (
          <div key={category} style={{ display: 'flex', flexDirection: 'column' }}>
            <label htmlFor={category} style={{ marginBottom: '0.5rem', textTransform: 'capitalize' }}>
              {/* Add spaces for camelCase */}
              {category.replace(/([A-Z])/g, ' $1')} Spend ($):
            </label>
            <input
              type="number"
              id={category}
              name={category}
              value={spend[category]}
              onChange={handleChange}
              min={0}
              step={10}
              style={{ padding: '0.5rem', border: '1px solid #ccc', borderRadius: '4px' }}
            />
          </div>
        ))}
      </form>

      <div style={{ marginTop: '2rem' }}>
        <h3>Top Cards Based on Your Spend:</h3>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {/* Check if results exist before mapping */}
          {results && results.length > 0 ? (
             results.slice(0, 10).map((card) => (
              <li key={card["Card Name"]} style={{ border: '1px solid #eee', borderRadius: '4px', padding: '1rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                <img
                  src={card.image || 'placeholder.png'} // Add a fallback image if needed
                  alt={card["Card Name"]}
                  style={{ height: '50px', objectFit: 'contain', flexShrink: 0 }}
                  onError={(e) => { (e.target as HTMLImageElement).src = 'placeholder.png'; }} // Handle broken images
                 />
                <div style={{ flexGrow: 1 }}>
                  <strong>{card.Issuer} - {card["Card Name"]}</strong>
                  <div>Net Value: <span style={{ color: (card.calculatedNetValue ?? 0) >= 0 ? 'green' : 'red', fontWeight: 'bold' }}>${(card.calculatedNetValue ?? 0).toFixed(2)}</span>/year</div>
                  <small>
                     (Est. Rewards: ${(card.calculatedTotalValue ?? 0).toFixed(2)},
                      Fee: ${card["Annual Fee"]},
                      Points: {card.calculatedPoints ?? 0})
                  </small>
                   {/* Optional: Add links */}
                   <div style={{marginTop: '0.5rem'}}>
                      <a href={card.reviewLink} target="_blank" rel="noopener noreferrer" style={{ marginRight: '1rem', fontSize: '0.9em' }}>Review</a>
                      <a href={card.applyLink} target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.9em' }}>Apply</a>
                   </div>
                </div>
              </li>
             ))
          ) : (
             <li>Enter spending values to see results.</li>
          )}
        </ul>
      </div>

      <button onClick={getAiRecommendation} disabled={loading} style={{ marginTop: '1rem', padding: '0.8rem 1.5rem', cursor: 'pointer', background: '#007bff', color: 'white', border: 'none', borderRadius: '4px', fontSize: '1rem' }}>
        {loading ? 'Generating Recommendation...' : 'Get AI Recommendation'}
      </button>

      {error && <p style={{ color: 'red', marginTop: '1rem' }}>{error}</p>}
      {aiSuggestion && (
        <div style={{ marginTop: '2rem', background: '#f0f8ff', padding: '1.5rem', borderRadius: '4px', border: '1px solid #e0f0ff' }}>
          <h4>AI Suggestion:</h4>
          {/* Use pre-wrap to respect whitespace/newlines from AI */}
          <p style={{ whiteSpace: 'pre-wrap' }}>{aiSuggestion}</p>
        </div>
      )}
    </div>
  );
}