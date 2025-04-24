// File: src/components/RewardsCalculator.tsx

import React, { useState, useMemo } from 'react';
// Assuming your data file is correctly named and placed
import cardDataRaw from '@/data/finalcreditcard.json'; // Use the actual path to your detailed JSON

// --- Define Interfaces based on finalcreditcard.json structure ---
// (Interfaces: CardCap, CardReward, CardSignUpBonus, CardRedemptionOptions, CardPerk, DetailedCreditCard - remain the same as before)
interface CardCap {
  amount_usd: number;
  period: 'month' | 'quarter' | 'year';
  applies_to_categories: string[];
}
interface CardReward {
  multiplier: number;
  category: string;
  notes: string | null;
  cap: CardCap | null;
}
interface CardSignUpBonus {
  points: number | null;
  description: string;
  minSpend: number | null;
  durationDays: number | null;
  estimated_value_usd: number | null;
}
interface CardRedemptionOptions {
  travel_statement_credit_cpp?: number;
  cash_back_cpp?: number;
  chase_travel_portal_cpp?: number;
  amex_travel_cpp?: number;
  cap_one_travel_cpp?: number;
  transfer_partner_average_cpp?: number;
  program_cpp?: number;
  [key: string]: number | undefined;
}
interface CardPerk {
  type: string;
  description?: string;
  value_usd?: number;
  frequency?: string;
  notes?: string;
  estimated_value_usd?: number | null;
}
interface DetailedCreditCard {
  "Card Name": string;
  Issuer: string;
  image: string;
  ratingValue?: number;
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
  calculatedPoints?: number;
  calculatedTotalValue?: number;
  calculatedNetValue?: number;
}

// --- Load and Type the Data ---
// (Data loading logic remains the same as before)
let allCards: DetailedCreditCard[] = [];
if (cardDataRaw && Array.isArray((cardDataRaw as any).cards)) {
   allCards = (cardDataRaw as any).cards as DetailedCreditCard[];
} else {
  if (Array.isArray(cardDataRaw)) {
      cardDataRaw.forEach((dataPart: any) => {
          if (dataPart && Array.isArray(dataPart.cards)) {
              allCards = allCards.concat(dataPart.cards as DetailedCreditCard[]);
          }
      });
  }
  if (allCards.length === 0) {
     console.error("Unexpected structure in finalcreditcard.json. Expected { cards: [...] }.");
  }
}
const cards: DetailedCreditCard[] = allCards.filter(card => card && card["Card Name"]);


// --- Define Granular User Input Categories and State ---
// (categoryList remains the same as before)
const categoryList = [
  'dining', 'groceries', 'gas', 'flights', 'hotels', 'streaming',
  'transit', 'onlineShopping', 'drugstores', 'other'
] as const;

type SpendInput = {
  [key in typeof categoryList[number]]: number;
};

// (defaultSpend remains the same as before)
const defaultSpend: SpendInput = {
  dining: 0, groceries: 0, gas: 0, flights: 0, hotels: 0, streaming: 0,
  transit: 0, onlineShopping: 0, drugstores: 0, other: 0,
};

// --- Define Redemption Strategy Types ---
type RedemptionStrategy = 'default' | 'cash_back' | 'travel_portal' | 'transfer_partners';


// --- React Component ---
export default function RewardsCalculator() {
  const [spend, setSpend] = useState<SpendInput>(defaultSpend);
  // Add state for redemption strategy
  const [redemptionStrategy, setRedemptionStrategy] = useState<RedemptionStrategy>('default');
  const [aiSuggestion, setAiSuggestion] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // --- Helper Functions ---

  // Helper function to get Cents Per Point (CPP) based on selected strategy
  const getSelectedCpp = (card: DetailedCreditCard, strategy: RedemptionStrategy): number => {
      const options = card.redemptionOptions;
      if (!options) return 1.0; // Fallback if no redemption options defined

      switch (strategy) {
          case 'cash_back':
              // Prioritize cash back, then travel statement credit, then 1.0
              return options.cash_back_cpp ?? options.travel_statement_credit_cpp ?? 1.0;
          case 'travel_portal':
              // Prioritize specific portals, then general travel credit, then 1.0
              return options.chase_travel_portal_cpp ?? options.amex_travel_cpp ??
                     options.cap_one_travel_cpp ?? options.travel_statement_credit_cpp ?? 1.0;
          case 'transfer_partners':
              // Use estimated average if available, otherwise fallback (e.g., to portal value or a higher default)
              // Using 1.5 as a generic fallback if specific portal/cash values aren't high
              return options.transfer_partner_average_cpp ??
                     options.chase_travel_portal_cpp ?? // Fallback to known good portal
                     1.5; // Generic higher value fallback for transfers
          case 'default':
          default:
               // Prioritize transfer partners > specific portals > generic travel credit > cash back > default 1.0
               // Choose a reasonable default valuation order
               return options.transfer_partner_average_cpp ??
                      options.chase_travel_portal_cpp ??
                      options.amex_travel_cpp ??
                      options.cap_one_travel_cpp ??
                      options.travel_statement_credit_cpp ??
                      options.cash_back_cpp ??
                      1.0;
      }
  }

  // --- Event Handlers ---
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSpend((prev) => ({
      ...prev,
      [name]: parseFloat(value) || 0,
    }));
  };

  // Handle redemption strategy change
  const handleRedemptionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      setRedemptionStrategy(e.target.value as RedemptionStrategy);
  }

  // --- Core Calculation Logic (useMemo Hook) ---
  const results: DetailedCreditCard[] = useMemo(() => {
    // (Category Map and Helper functions: getOtherMultiplier, findBestRuleForInput remain the same as previous version)
    const categoryMap: { [key in keyof SpendInput]?: string[] } = { /* ... same as before ... */
        dining: ['dining'], groceries: ['groceries_us', 'groceries', 'online_grocery'], gas: ['gas_us', 'gas'], flights: ['flights_direct', 'flights_amex_travel', 'flights_chase_portal', 'flights_capital_one_portal', 'airlines', 'southwest_airlines', 'united_airlines', 'jetblue', 'hawaiian_airlines', 'delta_airlines', 'american_airlines', 'british_airways', 'alaska_airlines', 'aircanada'], hotels: ['hotel', 'hotel_amex_travel', 'hotel_chase_portal', 'hotel_capital_one_portal', 'hilton_hotels', 'hyatt_hotels'], streaming: ['streaming'], transit: ['transit'], onlineShopping: ['online_retail_us'], drugstores: ['drugstores'], other: ['other'],
    };
    const getOtherMultiplier = (card: DetailedCreditCard): number => { /* ... same as before ... */
        const otherRule = card.rewards.find(r => r.category === 'other'); return otherRule?.multiplier ?? 1;
    }
    const findBestRuleForInput = (card: DetailedCreditCard, uiCategory: keyof SpendInput): CardReward | undefined => { /* ... same as before ... */
        const targetJsonCategories = categoryMap[uiCategory] || []; let bestRule: CardReward | undefined = undefined; let bestMultiplier = 0;
        for (const jsonCat of targetJsonCategories) { const rule = Array.isArray(card.rewards) ? card.rewards.find(r => r.category === jsonCat) : undefined; if (rule && rule.multiplier > bestMultiplier) { bestMultiplier = rule.multiplier; bestRule = rule; } }
        const otherMultiplier = getOtherMultiplier(card); const otherRule = Array.isArray(card.rewards) ? card.rewards.find(r => r.category === 'other') : undefined;
        if (!bestRule || bestMultiplier <= otherMultiplier) { return otherRule; } return bestRule;
    };

    return cards.map(card => {
      // (Card validation remains the same)
       if (!card || !Array.isArray(card.rewards)) { /* ... same console warning and placeholder return ... */
           console.warn(`Skipping card due to missing data: ${card?.["Card Name"]}`); return { ...card, calculatedPoints: 0, calculatedTotalValue: 0, calculatedNetValue: -(card?.["Annual Fee"] ?? 0) } as DetailedCreditCard;
       }

      let totalAnnualPoints = 0;
      const otherMultiplier = getOtherMultiplier(card);
      const capSpendTracker: { [capKey: string]: number } = {};

      // (Loop through spend categories and cap logic remains the same as previous version)
       for (const uiCategory of categoryList) {
           const monthlySpend = spend[uiCategory as keyof SpendInput]; if (monthlySpend <= 0) continue;
           const annualSpendInCategory = monthlySpend * 12; const rule = findBestRuleForInput(card, uiCategory as keyof SpendInput); const multiplier = rule?.multiplier ?? otherMultiplier;
           if (!rule || rule.category === 'other' || !rule.cap) { totalAnnualPoints += annualSpendInCategory * multiplier; continue; }
           const capInfo = rule.cap; const capKey = Array.isArray(capInfo.applies_to_categories) ? capInfo.applies_to_categories.sort().join(',') || rule.category : rule.category; const capLimit = capInfo.amount_usd; const capPeriod = capInfo.period;
           let annualPointsAtBonusRate = 0; let annualPointsAtOtherRate = 0; const spentTowardsCapSoFar = capSpendTracker[capKey] || 0;
           if (capPeriod === 'year') { const remainingAnnualCapRoom = Math.max(0, capLimit - spentTowardsCapSoFar); const annualSpendAppliedAtBonus = Math.min(annualSpendInCategory, remainingAnnualCapRoom); const annualSpendAppliedAtOther = Math.max(0, annualSpendInCategory - annualSpendAppliedAtBonus); annualPointsAtBonusRate = annualSpendAppliedAtBonus * multiplier; annualPointsAtOtherRate = annualSpendAppliedAtOther * otherMultiplier; capSpendTracker[capKey] = spentTowardsCapSoFar + annualSpendAppliedAtBonus; }
           else if (capPeriod === 'month') { const monthlyCapLimit = capLimit; for (let month = 0; month < 12; month++) { const monthlySpendAtBonusRate = Math.min(monthlySpend, monthlyCapLimit); const monthlySpendAtOtherRate = Math.max(0, monthlySpend - monthlySpendAtBonusRate); annualPointsAtBonusRate += monthlySpendAtBonusRate * multiplier; annualPointsAtOtherRate += monthlySpendAtOtherRate * otherMultiplier; } }
           else if (capPeriod === 'quarter') { const quarterlyCapLimit = capLimit; for (let quarter = 0; quarter < 4; quarter++) { const quarterlySpendEstimate = monthlySpend * 3; const quarterlySpendAtBonusRate = Math.min(quarterlySpendEstimate, quarterlyCapLimit); const quarterlySpendAtOtherRate = Math.max(0, quarterlySpendEstimate - quarterlySpendAtBonusRate); annualPointsAtBonusRate += quarterlySpendAtBonusRate * multiplier; annualPointsAtOtherRate += quarterlySpendAtOtherRate * otherMultiplier; } }
           totalAnnualPoints += annualPointsAtBonusRate + annualPointsAtOtherRate;
       } // End loop through user spend categories

      // --- Apply Selected Redemption Rate ---
      const selectedCpp = getSelectedCpp(card, redemptionStrategy); // Use the helper function
      const totalValue = (totalAnnualPoints * selectedCpp) / 100; // Value in dollars
      const netValue = totalValue - card["Annual Fee"];

      return {
        ...card,
        calculatedPoints: Math.round(totalAnnualPoints),
        calculatedTotalValue: parseFloat(totalValue.toFixed(2)),
        calculatedNetValue: parseFloat(netValue.toFixed(2)),
      };
    }).sort((a, b) => (b.calculatedNetValue ?? -Infinity) - (a.calculatedNetValue ?? -Infinity));

  // Add redemptionStrategy to dependency array
  }, [spend, redemptionStrategy]);


  // --- AI Recommendation Fetching (Optional: Add redemption context) ---
  const getAiRecommendation = async () => {
    setLoading(true);
    setError('');
    try {
        const topCardsContext = results.slice(0, 5).map(card => {
             const selectedCpp = getSelectedCpp(card, redemptionStrategy); // Get CPP used
             return {
                name: card["Card Name"],
                issuer: card.Issuer,
                annualFee: card["Annual Fee"],
                netValue: card.calculatedNetValue,
                points: card.calculatedPoints,
                cppUsed: selectedCpp, // Add CPP used
                redemptionStrategyUsed: redemptionStrategy, // Add strategy used
                topRewards: Array.isArray(card.rewards) ? card.rewards
                    .filter(r => r.multiplier > 1 && r.category !== 'other')
                    .sort((a, b) => b.multiplier - a.multiplier)
                    .slice(0, 3)
                    .map(r => `${r.multiplier}x on ${r.category}${r.cap ? ` (up to $${r.cap.amount_usd}/${r.cap.period})` : ''}`) : [],
                keyPerks: Array.isArray(card.perks) ? card.perks
                    .filter(p => p.type !== 'tier_qualifying_boost' && p.type !== 'points_back')
                    .map(p => p.description || p.type)
                    .slice(0, 3) : [],
                signupBonus: card.signUpBonus?.description || "N/A",
             };
        });

      const currentAnnualSpend = Object.entries(spend).reduce((acc, [key, monthlySpend]) => {
           acc[key as keyof SpendInput] = monthlySpend * 12; return acc;
      }, {} as { [key in keyof SpendInput]: number });

      const res = await fetch('/api/gpt-recommend', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            spend: spend,
            annualSpend: currentAnnualSpend,
            redemptionStrategy: redemptionStrategy, // Send selected strategy to AI
            topCards: topCardsContext
        }),
      });

      if (!res.ok) throw new Error(`Server responded ${res.status}`);
      const data = await res.json();
      setAiSuggestion(data.recommendation);
    } catch (err: any) {
      console.error('AI request failed:', err);
      setError('AI recommendation failed.');
    } finally {
      setLoading(false);
    }
  };

  // --- Render JSX ---
  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h2>AI-Powered Travel Rewards Calculator</h2>

      {/* Redemption Strategy Selector */}
      <div style={{ marginBottom: '1.5rem', maxWidth: '400px' }}>
          <label htmlFor="redemptionStrategy" style={{ marginRight: '1rem', fontWeight: 'bold' }}>Value Points As:</label>
          <select
              id="redemptionStrategy"
              value={redemptionStrategy}
              onChange={handleRedemptionChange}
              style={{ padding: '0.5rem', border: '1px solid #ccc', borderRadius: '4px' }}
          >
              <option value="default">Best Default Value</option>
              <option value="cash_back">Cash Back / Statement Credit</option>
              <option value="travel_portal">Travel Portal Booking</option>
              <option value="transfer_partners">Transfer Partners (Est. Avg.)</option>
          </select>
      </div>

      <p>Enter your estimated *monthly* spending per category.</p>

      {/* Spending Input Form (remains the same as previous version) */}
      <form style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '2rem', maxWidth: '1000px' }}>
        {categoryList.map((category) => (
          <div key={category} style={{ display: 'flex', flexDirection: 'column' }}>
            <label htmlFor={category} style={{ marginBottom: '0.5rem', textTransform: 'capitalize' }}>
              {category === 'onlineShopping' ? 'Online Shopping (US)' : category.replace(/([A-Z])/g, ' $1')} Spend ($):
            </label>
            <input
              type="number" id={category} name={category}
              value={spend[category as keyof SpendInput]} onChange={handleChange}
              min={0} step={10} style={{ padding: '0.5rem', border: '1px solid #ccc', borderRadius: '4px' }}
            />
          </div>
        ))}
      </form>

      {/* Results List (remains the same as previous version) */}
      <div style={{ marginTop: '2rem' }}>
        <h3>Top Cards Based on Your Spend:</h3>
        {/* (Results list rendering code remains the same) */}
         <ul style={{ listStyle: 'none', padding: 0 }}>
           {results && results.length > 0 ? (
              results.slice(0, 10).map((card) => (
               card && card["Card Name"] ? (
                 <li key={card["Card Name"]} style={{ border: '1px solid #eee', borderRadius: '4px', padding: '1rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                   <img src={card.image || 'placeholder.png'} alt={card["Card Name"]} style={{ height: '50px', objectFit: 'contain', flexShrink: 0 }} onError={(e) => { (e.target as HTMLImageElement).src = 'placeholder.png'; }} />
                   <div style={{ flexGrow: 1 }}>
                     <strong>{card.Issuer} - {card["Card Name"]}</strong>
                     <div>Net Value: <span style={{ color: (card.calculatedNetValue ?? 0) >= 0 ? 'green' : 'red', fontWeight: 'bold' }}>${(card.calculatedNetValue ?? 0).toFixed(2)}</span>/year</div>
                     <small> (Est. Rewards: ${(card.calculatedTotalValue ?? 0).toFixed(2)}, Fee: ${card["Annual Fee"]}, Points: {card.calculatedPoints ?? 0}) </small>
                      <div style={{marginTop: '0.5rem'}}> <a href={card.reviewLink} target="_blank" rel="noopener noreferrer" style={{ marginRight: '1rem', fontSize: '0.9em' }}>Review</a> <a href={card.applyLink} target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.9em' }}>Apply</a> </div>
                   </div>
                 </li>
               ) : null
              ))
           ) : ( <li>Enter spending values to see results.</li> )}
         </ul>
      </div>

        {/* AI Button and Suggestion Section (remains the same as previous version) */}
        <button onClick={getAiRecommendation} disabled={loading} style={{ marginTop: '1rem', padding: '0.8rem 1.5rem', cursor: 'pointer', background: '#007bff', color: 'white', border: 'none', borderRadius: '4px', fontSize: '1rem' }}> {loading ? 'Generating Recommendation...' : 'Get AI Recommendation'} </button>
        {error && <p style={{ color: 'red', marginTop: '1rem' }}>{error}</p>}
        {aiSuggestion && ( <div style={{ marginTop: '2rem', background: '#f0f8ff', padding: '1.5rem', borderRadius: '4px', border: '1px solid #e0f0ff' }}> <h4>AI Suggestion:</h4> <p style={{ whiteSpace: 'pre-wrap' }}>{aiSuggestion}</p> </div> )}
    </div>
  );
}