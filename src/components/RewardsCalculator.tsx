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

// Assuming the file structure is { "cards": [...] }
let allCards: DetailedCreditCard[] = [];
if (cardDataRaw && Array.isArray((cardDataRaw as any).cards)) {
   // If cardDataRaw is {cards: [...]}
   allCards = (cardDataRaw as any).cards as DetailedCreditCard[];
} else {
  // Attempt to handle if it's an array of {cards: [...]} - less likely if fixed
  if (Array.isArray(cardDataRaw)) {
      cardDataRaw.forEach((dataPart: any) => {
          if (dataPart && Array.isArray(dataPart.cards)) {
              allCards = allCards.concat(dataPart.cards as DetailedCreditCard[]);
          }
      });
  }
  if (allCards.length === 0) { // Check if still empty after trying array method
     console.error("Unexpected structure in finalcreditcard.json. Expected { cards: [...] }.");
  }
}

// Filter out any potentially invalid card entries if necessary (basic check)
const cards: DetailedCreditCard[] = allCards.filter(card => card && card["Card Name"]);


// --- Define MORE GRANULAR User Input Categories and State ---
// Match common high-value categories from your data more closely
const categoryList = [
  'dining',
  'groceries', // Consider clarifying US vs non-US if needed often
  'gas',       // Consider clarifying US vs non-US if needed often
  'flights',   // For portal/direct flights
  'hotels',    // For portal/direct hotels
  'streaming',
  'transit',   // Includes rideshare in some card data
  'onlineShopping', // Specify US online retail if that's usually the case
  'drugstores',
  'other'      // Catch-all
] as const;

type SpendInput = {
  [key in typeof categoryList[number]]: number;
};

// Update default spend to include new categories
const defaultSpend: SpendInput = {
  dining: 0,
  groceries: 0,
  gas: 0,
  flights: 0,
  hotels: 0,
  streaming: 0,
  transit: 0,
  onlineShopping: 0,
  drugstores: 0,
  other: 0,
};

// --- React Component ---
export default function RewardsCalculator() {
  const [spend, setSpend] = useState<SpendInput>(defaultSpend);
  const [aiSuggestion, setAiSuggestion] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // --- Helper Functions ---

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

  // --- Core Calculation Logic (Refactored useMemo Hook) ---
  const results: DetailedCreditCard[] = useMemo(() => {

    // 1. Define Category Mapping (Granular Input -> JSON Categories)
    // Map UI input category to potential JSON category names
    const categoryMap: { [key in keyof SpendInput]?: string[] } = {
      dining: ['dining'],
      groceries: ['groceries_us', 'groceries', 'online_grocery'],
      gas: ['gas_us', 'gas'],
      flights: ['flights_direct', 'flights_amex_travel', 'flights_chase_portal', 'flights_capital_one_portal', 'airlines', 'southwest_airlines', 'united_airlines', 'jetblue', 'hawaiian_airlines', 'delta_airlines', 'american_airlines', 'british_airways', 'alaska_airlines', 'aircanada'],
      hotels: ['hotel', 'hotel_amex_travel', 'hotel_chase_portal', 'hotel_capital_one_portal', 'hilton_hotels', 'hyatt_hotels'],
      streaming: ['streaming'],
      transit: ['transit'],
      onlineShopping: ['online_retail_us'],
      drugstores: ['drugstores'],
      other: ['other'], // 'other' input maps directly to 'other' JSON category
      // Categories from JSON not directly mapped (handled by 'other' rule):
      // travel_portal, travel_other, custom_top_category, chosen_category_5pct,
      // chosen_everyday_2pct, phone_plans, shipping, wireless_phone, office_supplies,
      // fitness_clubs, partner_merchants, business_top_category, business_bonus_category,
      // business_category_boost, car_rental_chase_portal
    };

    // Helper to get the default 'other' multiplier for a card
    const getOtherMultiplier = (card: DetailedCreditCard): number => {
        const otherRule = card.rewards.find(r => r.category === 'other');
        return otherRule?.multiplier ?? 1; // Default to 1x if no explicit 'other' rule
    }

    // Helper to find the best reward rule matching *any* of the target JSON categories
    const findBestRuleForInput = (card: DetailedCreditCard, uiCategory: keyof SpendInput): CardReward | undefined => {
        const targetJsonCategories = categoryMap[uiCategory] || [];
        let bestRule: CardReward | undefined = undefined;
        let bestMultiplier = 0; // Start below default 'other' rate initially

        for (const jsonCat of targetJsonCategories) {
            // Ensure card.rewards is an array before finding
            const rule = Array.isArray(card.rewards) ? card.rewards.find(r => r.category === jsonCat) : undefined;
            if (rule && rule.multiplier > bestMultiplier) {
                bestMultiplier = rule.multiplier;
                bestRule = rule;
            }
        }

        // If no specific rule found better than default, return the 'other' rule (or undefined if no 'other')
        const otherMultiplier = getOtherMultiplier(card);
        const otherRule = Array.isArray(card.rewards) ? card.rewards.find(r => r.category === 'other') : undefined;

        if (!bestRule || bestMultiplier <= otherMultiplier) {
            return otherRule;
        }

        return bestRule;
    };


    return cards.map(card => {
      // Ensure card and rewards are valid before processing
      if (!card || !Array.isArray(card.rewards)) {
          console.warn(`Skipping card due to missing data: ${card?.["Card Name"]}`);
          return {
              ...card,
              calculatedPoints: 0,
              calculatedTotalValue: 0,
              calculatedNetValue: -(card?.["Annual Fee"] ?? 0)
          } as DetailedCreditCard; // Return a placeholder to avoid breaking sort/map
      }

      let totalAnnualPoints = 0;
      const otherMultiplier = getOtherMultiplier(card);

      // Cap trackers: Track *annual* spending applied against caps for specific categories/groups
      // Key: cap identifier (e.g., categories joined, or just category name if solo)
      // Value: amount of *annual* spend already counted towards this cap at bonus rates
      const capSpendTracker: { [capKey: string]: number } = {};

      // Iterate through each USER INPUT spending category (dining, groceries, etc.)
      for (const uiCategory of categoryList) {
          const monthlySpend = spend[uiCategory as keyof SpendInput]; // Ensure correct typing
          if (monthlySpend <= 0) continue;

          const annualSpendInCategory = monthlySpend * 12;
          const rule = findBestRuleForInput(card, uiCategory as keyof SpendInput); // Ensure correct typing
          const multiplier = rule?.multiplier ?? otherMultiplier; // Use rule's multiplier or fallback to 'other'

          // If the best rule is just the 'other' rule, no cap applies (usually)
          // Also check if rule or rule.cap is null/undefined
          if (!rule || rule.category === 'other' || !rule.cap) {
              totalAnnualPoints += annualSpendInCategory * multiplier;
              continue; // Move to next spend category
          }

          // --- Handle Caps ---
          const capInfo = rule.cap;
          // Ensure applies_to_categories exists and is an array before joining
          const capKey = Array.isArray(capInfo.applies_to_categories)
                         ? capInfo.applies_to_categories.sort().join(',') || rule.category
                         : rule.category; // Use category name if applies_to is missing/invalid
          const capLimit = capInfo.amount_usd;
          const capPeriod = capInfo.period;

          let annualPointsAtBonusRate = 0;
          let annualPointsAtOtherRate = 0;

          const spentTowardsCapSoFar = capSpendTracker[capKey] || 0;

          if (capPeriod === 'year') {
              const remainingAnnualCapRoom = Math.max(0, capLimit - spentTowardsCapSoFar);
              const annualSpendAppliedAtBonus = Math.min(annualSpendInCategory, remainingAnnualCapRoom);
              const annualSpendAppliedAtOther = Math.max(0, annualSpendInCategory - annualSpendAppliedAtBonus);

              annualPointsAtBonusRate = annualSpendAppliedAtBonus * multiplier;
              annualPointsAtOtherRate = annualSpendAppliedAtOther * otherMultiplier;
              capSpendTracker[capKey] = spentTowardsCapSoFar + annualSpendAppliedAtBonus; // Update tracker

          } else if (capPeriod === 'month') {
              const monthlyCapLimit = capLimit;
              // Calculate points month by month for the whole year
              for (let month = 0; month < 12; month++) {
                  const monthlySpendAtBonusRate = Math.min(monthlySpend, monthlyCapLimit);
                  const monthlySpendAtOtherRate = Math.max(0, monthlySpend - monthlySpendAtBonusRate);
                  annualPointsAtBonusRate += monthlySpendAtBonusRate * multiplier;
                  annualPointsAtOtherRate += monthlySpendAtOtherRate * otherMultiplier;
              }
              // Note: Monthly caps usually apply *per category* unless specified otherwise in applies_to_categories.
              // This logic assumes the cap applies independently to spend in this category each month.

          } else if (capPeriod === 'quarter') {
               // Calculate points quarter by quarter for the whole year
              const quarterlyCapLimit = capLimit;
              for (let quarter = 0; quarter < 4; quarter++) {
                   // Estimate spend in this quarter
                   const quarterlySpendEstimate = monthlySpend * 3;
                   // Calculate spend at bonus/other rate for this quarter
                   const quarterlySpendAtBonusRate = Math.min(quarterlySpendEstimate, quarterlyCapLimit);
                   const quarterlySpendAtOtherRate = Math.max(0, quarterlySpendEstimate - quarterlySpendAtBonusRate);
                   // Add this quarter's contribution to annual points
                   annualPointsAtBonusRate += quarterlySpendAtBonusRate * multiplier;
                   annualPointsAtOtherRate += quarterlySpendAtOtherRate * otherMultiplier;
              }
              // Note: Assumes even spend across months within the quarter. A more precise approach
              // might track cumulative quarterly spend if categories share a quarterly cap.
          }

          // Add calculated annual points from this category to the total
          totalAnnualPoints += annualPointsAtBonusRate + annualPointsAtOtherRate;

      } // End loop through user spend categories

      // Calculate final values using a default CPP for now
      // (Integrate dynamic redemption selection later)
      const defaultCpp = getDefaultCpp(card);
      const totalValue = (totalAnnualPoints * defaultCpp) / 100; // Value in dollars
      const netValue = totalValue - card["Annual Fee"];

      return {
        ...card,
        calculatedPoints: Math.round(totalAnnualPoints),
        calculatedTotalValue: parseFloat(totalValue.toFixed(2)),
        calculatedNetValue: parseFloat(netValue.toFixed(2)),
      };
    }).sort((a, b) => (b.calculatedNetValue ?? -Infinity) - (a.calculatedNetValue ?? -Infinity));

  }, [spend]); // Recalculate when spend changes


  // --- AI Recommendation Fetching ---

  const getAiRecommendation = async () => {
    setLoading(true);
    setError('');
    try {
        // Prepare data for AI - Send richer context
        const topCardsContext = results.slice(0, 5).map(card => ({ // Send top 5 for context
            name: card["Card Name"],
            issuer: card.Issuer,
            annualFee: card["Annual Fee"],
            netValue: card.calculatedNetValue,
            points: card.calculatedPoints,
            // Refine topRewards based on actual structure
            topRewards: Array.isArray(card.rewards) ? card.rewards
                .filter(r => r.multiplier > 1 && r.category !== 'other')
                .sort((a, b) => b.multiplier - a.multiplier)
                .slice(0, 3)
                .map(r => `${r.multiplier}x on ${r.category}${r.cap ? ` (up to $${r.cap.amount_usd}/${r.cap.period})` : ''}`) : [],
            keyPerks: Array.isArray(card.perks) ? card.perks
                .filter(p => p.type !== 'tier_qualifying_boost' && p.type !== 'points_back')
                .map(p => p.description || p.type)
                .slice(0, 3) : [],
            signupBonus: card.signUpBonus?.description || "N/A", // Handle potential missing bonus
        }));

      const currentAnnualSpend = Object.entries(spend).reduce((acc, [key, monthlySpend]) => {
           acc[key as keyof SpendInput] = monthlySpend * 12; return acc;
      }, {} as { [key in keyof SpendInput]: number });


      const res = await fetch('/api/gpt-recommend', { // Ensure this API route exists and works
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        // Send structured data including calculated values and richer card context
        body: JSON.stringify({
            spend: spend, // Send monthly spend
            annualSpend: currentAnnualSpend, // Send annual spend
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

      {/* Updated Form with Granular Categories */}
      <form style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '2rem', maxWidth: '1000px' }}>
        {categoryList.map((category) => (
          <div key={category} style={{ display: 'flex', flexDirection: 'column' }}>
            <label htmlFor={category} style={{ marginBottom: '0.5rem', textTransform: 'capitalize' }}>
              {/* Add spaces for camelCase or specific labels */}
              {category === 'onlineShopping' ? 'Online Shopping (US)' : category.replace(/([A-Z])/g, ' $1')} Spend ($):
            </label>
            <input
              type="number"
              id={category}
              name={category}
              // Ensure spend[category] is accessed correctly
              value={spend[category as keyof SpendInput]}
              onChange={handleChange}
              min={0}
              step={10}
              style={{ padding: '0.5rem', border: '1px solid #ccc', borderRadius: '4px' }}
            />
          </div>
        ))}
      </form>

      {/* Results List */}
      <div style={{ marginTop: '2rem' }}>
        <h3>Top Cards Based on Your Spend:</h3>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {results && results.length > 0 ? (
             results.slice(0, 10).map((card) => (
              // Ensure card is valid before rendering
              card && card["Card Name"] ? (
                <li key={card["Card Name"]} style={{ border: '1px solid #eee', borderRadius: '4px', padding: '1rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                  <img
                    src={card.image || 'placeholder.png'}
                    alt={card["Card Name"]}
                    style={{ height: '50px', objectFit: 'contain', flexShrink: 0 }}
                    onError={(e) => { (e.target as HTMLImageElement).src = 'placeholder.png'; }}
                   />
                  <div style={{ flexGrow: 1 }}>
                    <strong>{card.Issuer} - {card["Card Name"]}</strong>
                    <div>Net Value: <span style={{ color: (card.calculatedNetValue ?? 0) >= 0 ? 'green' : 'red', fontWeight: 'bold' }}>${(card.calculatedNetValue ?? 0).toFixed(2)}</span>/year</div>
                    <small>
                       (Est. Rewards: ${(card.calculatedTotalValue ?? 0).toFixed(2)},
                        Fee: ${card["Annual Fee"]},
                        Points: {card.calculatedPoints ?? 0})
                    </small>
                     <div style={{marginTop: '0.5rem'}}>
                        <a href={card.reviewLink} target="_blank" rel="noopener noreferrer" style={{ marginRight: '1rem', fontSize: '0.9em' }}>Review</a>
                        <a href={card.applyLink} target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.9em' }}>Apply</a>
                     </div>
                  </div>
                </li>
              ) : null // Render nothing if card data is incomplete/invalid
             ))
          ) : (
             <li>Enter spending values to see results.</li>
          )}
        </ul>
      </div>

        {/* AI Button and Suggestion Section */}
      <button onClick={getAiRecommendation} disabled={loading} style={{ marginTop: '1rem', padding: '0.8rem 1.5rem', cursor: 'pointer', background: '#007bff', color: 'white', border: 'none', borderRadius: '4px', fontSize: '1rem' }}>
        {loading ? 'Generating Recommendation...' : 'Get AI Recommendation'}
      </button>

      {error && <p style={{ color: 'red', marginTop: '1rem' }}>{error}</p>}
      {aiSuggestion && (
        <div style={{ marginTop: '2rem', background: '#f0f8ff', padding: '1.5rem', borderRadius: '4px', border: '1px solid #e0f0ff' }}>
          <h4>AI Suggestion:</h4>
          <p style={{ whiteSpace: 'pre-wrap' }}>{aiSuggestion}</p>
        </div>
      )}
    </div>
  );
}