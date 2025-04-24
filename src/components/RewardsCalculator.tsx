// File: src/components/RewardsCalculator.tsx

import React, { useState, useMemo } from 'react';
// Assuming your data file is correctly named and placed
import cardDataRaw from '@/data/finalcreditcard.json'; // Use the actual path to your detailed JSON

// --- Define Interfaces based on finalcreditcard.json structure ---
// (Interfaces: CardCap, CardReward, CardSignUpBonus, CardRedemptionOptions, CardPerk remain the same)
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

// Update DetailedCreditCard interface to include new calculated values
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

  // Calculated fields
  calculatedPoints?: number;
  calculatedRewardsValue?: number; // Renamed from calculatedTotalValue for clarity
  calculatedAnnualPerkValue?: number;
  calculatedNetValue?: number; // Net value including annual perks (Ongoing Value)
  calculatedFirstYearNetValue?: number; // Net value including perks and signup bonus
}

// --- Load and Type the Data ---
// (Data loading logic remains the same)
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
// (categoryList remains the same)
const categoryList = [ 'dining', 'groceries', 'gas', 'flights', 'hotels', 'streaming', 'transit', 'onlineShopping', 'drugstores', 'other'] as const;
type SpendInput = { [key in typeof categoryList[number]]: number; };
// (defaultSpend remains the same)
const defaultSpend: SpendInput = { dining: 0, groceries: 0, gas: 0, flights: 0, hotels: 0, streaming: 0, transit: 0, onlineShopping: 0, drugstores: 0, other: 0, };

// --- Define Redemption Strategy Types ---
type RedemptionStrategy = 'default' | 'cash_back' | 'travel_portal' | 'transfer_partners';

// --- React Component ---
export default function RewardsCalculator() {
  const [spend, setSpend] = useState<SpendInput>(defaultSpend);
  const [redemptionStrategy, setRedemptionStrategy] = useState<RedemptionStrategy>('default');
  // Add state to control sorting preference (optional)
  // const [sortBy, setSortBy] = useState<'firstYear' | 'ongoing'>('firstYear');
  const [aiSuggestion, setAiSuggestion] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // --- Helper Functions ---
  // (getSelectedCpp remains the same as before)
  const getSelectedCpp = (card: DetailedCreditCard, strategy: RedemptionStrategy): number => { /* ... same logic ... */
      const options = card.redemptionOptions; if (!options) return 1.0;
      switch (strategy) {
          case 'cash_back': return options.cash_back_cpp ?? options.travel_statement_credit_cpp ?? 1.0;
          case 'travel_portal': return options.chase_travel_portal_cpp ?? options.amex_travel_cpp ?? options.cap_one_travel_cpp ?? options.travel_statement_credit_cpp ?? 1.0;
          case 'transfer_partners': return options.transfer_partner_average_cpp ?? options.chase_travel_portal_cpp ?? 1.5;
          case 'default': default: return options.transfer_partner_average_cpp ?? options.chase_travel_portal_cpp ?? options.amex_travel_cpp ?? options.cap_one_travel_cpp ?? options.travel_statement_credit_cpp ?? options.cash_back_cpp ?? 1.0;
      }
  }

  // --- Event Handlers ---
  // (handleChange remains the same)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => { /* ... same logic ... */
      const { name, value } = e.target; setSpend((prev) => ({ ...prev, [name]: parseFloat(value) || 0, }));
  };
  // (handleRedemptionChange remains the same)
  const handleRedemptionChange = (e: React.ChangeEvent<HTMLSelectElement>) => { setRedemptionStrategy(e.target.value as RedemptionStrategy); }
  // Handler for sort preference (optional)
  // const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => { setSortBy(e.target.value as 'firstYear' | 'ongoing'); }

  // --- Core Calculation Logic (useMemo Hook) ---
  const results: DetailedCreditCard[] = useMemo(() => {
    // (Category Map and Cap Logic Helpers: getOtherMultiplier, findBestRuleForInput remain the same)
     const categoryMap: { [key in keyof SpendInput]?: string[] } = { /* ... same as before ... */
        dining: ['dining'], groceries: ['groceries_us', 'groceries', 'online_grocery'], gas: ['gas_us', 'gas'], flights: ['flights_direct', 'flights_amex_travel', 'flights_chase_portal', 'flights_capital_one_portal', 'airlines', 'southwest_airlines', 'united_airlines', 'jetblue', 'hawaiian_airlines', 'delta_airlines', 'american_airlines', 'british_airways', 'alaska_airlines', 'aircanada'], hotels: ['hotel', 'hotel_amex_travel', 'hotel_chase_portal', 'hotel_capital_one_portal', 'hilton_hotels', 'hyatt_hotels'], streaming: ['streaming'], transit: ['transit'], onlineShopping: ['online_retail_us'], drugstores: ['drugstores'], other: ['other'],
    };
     const getOtherMultiplier = (card: DetailedCreditCard): number => { /* ... same logic ... */
         const otherRule = card.rewards.find(r => r.category === 'other'); return otherRule?.multiplier ?? 1;
     }
     const findBestRuleForInput = (card: DetailedCreditCard, uiCategory: keyof SpendInput): CardReward | undefined => { /* ... same logic ... */
        const targetJsonCategories = categoryMap[uiCategory] || []; let bestRule: CardReward | undefined = undefined; let bestMultiplier = 0;
        for (const jsonCat of targetJsonCategories) { const rule = Array.isArray(card.rewards) ? card.rewards.find(r => r.category === jsonCat) : undefined; if (rule && rule.multiplier > bestMultiplier) { bestMultiplier = rule.multiplier; bestRule = rule; } }
        const otherMultiplier = getOtherMultiplier(card); const otherRule = Array.isArray(card.rewards) ? card.rewards.find(r => r.category === 'other') : undefined;
        if (!bestRule || bestMultiplier <= otherMultiplier) { return otherRule; } return bestRule;
    };

    return cards.map(card => {
       // (Card validation remains the same)
       if (!card || !Array.isArray(card.rewards)) { /* ... same console warning and placeholder return ... */
           console.warn(`Skipping card due to missing data: ${card?.["Card Name"]}`); return { ...card, calculatedPoints: 0, calculatedRewardsValue: 0, calculatedAnnualPerkValue: 0, calculatedNetValue: -(card?.["Annual Fee"] ?? 0), calculatedFirstYearNetValue: -(card?.["Annual Fee"] ?? 0) } as DetailedCreditCard;
       }

      let totalAnnualPoints = 0;
      const otherMultiplier = getOtherMultiplier(card);
      const capSpendTracker: { [capKey: string]: number } = {};

      // (Loop through spend categories and cap logic remains the same)
       for (const uiCategory of categoryList) { /* ... same cap logic ... */
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
      const selectedCpp = getSelectedCpp(card, redemptionStrategy);
      const rewardsValue = (totalAnnualPoints * selectedCpp) / 100; // Value in dollars

      // --- Calculate Annual Perk Value ---
      let annualPerkValue = 0;
      if (Array.isArray(card.perks)) {
          card.perks.forEach(perk => {
              // Include perks with a direct annual value
              if (perk.value_usd && perk.frequency === 'annual') {
                  annualPerkValue += perk.value_usd;
              }
              // Estimate value for things like Global Entry credit (prorated)
              else if (perk.type === 'global_entry_tsa_precheck_credit' && perk.value_usd && perk.frequency?.includes('years')) {
                   // Basic proration - assumes value every 4 or 5 years typically
                   const years = parseInt(perk.frequency.split('_')[1]) || 4; // Extract years or default to 4
                   annualPerkValue += perk.value_usd / years;
              }
              // Add other quantifiable annual perk estimations here if desired (e.g., anniversary points/miles)
              else if ((perk.type === 'anniversary_points' || perk.type === 'anniversary_miles') && perk.estimated_value_usd) {
                    annualPerkValue += perk.estimated_value_usd;
              }
          });
      }

      // --- Calculate Final Values ---
      const netValueIncludingPerks = rewardsValue + annualPerkValue - card["Annual Fee"];
      const signUpBonusValue = card.signUpBonus?.estimated_value_usd ?? 0;
      const firstYearNetValue = netValueIncludingPerks + signUpBonusValue;

      return {
        ...card,
        calculatedPoints: Math.round(totalAnnualPoints),
        calculatedRewardsValue: parseFloat(rewardsValue.toFixed(2)),
        calculatedAnnualPerkValue: parseFloat(annualPerkValue.toFixed(2)),
        calculatedNetValue: parseFloat(netValueIncludingPerks.toFixed(2)), // This is the ongoing net value
        calculatedFirstYearNetValue: parseFloat(firstYearNetValue.toFixed(2)),
      };
      // Sort by First Year Value by default
    }).sort((a, b) => (b.calculatedFirstYearNetValue ?? -Infinity) - (a.calculatedFirstYearNetValue ?? -Infinity));

  // Update dependency array
  }, [spend, redemptionStrategy]); // Add sortBy here if implementing sort state


  // --- AI Recommendation Fetching ---
  const getAiRecommendation = async () => {
    setLoading(true);
    setError('');
    try {
        // Inside RewardsCalculator component -> getAiRecommendation function

  // Prepare data for AI - Ensure clear field names
  const topCardsContext = results.slice(0, 5).map(card => { // Send top 5-7 for better context
    const selectedCpp = getSelectedCpp(card, redemptionStrategy);
    return {
       // Card Identification
       cardName: card["Card Name"],
       issuer: card.Issuer,
       cardType: card["Card Type"], // Personal or Business

       // Calculated Values (Crucial Context)
       annualFee: card["Annual Fee"],
       estimatedFirstYearNetValue: card.calculatedFirstYearNetValue,
       estimatedOngoingNetValue: card.calculatedNetValue, // (Rewards + Perks - Fee)
       calculatedAnnualRewardsValue: card.calculatedRewardsValue,
       calculatedAnnualPerkValue: card.calculatedAnnualPerkValue,
       calculatedAnnualPoints: card.calculatedPoints,
       cppUsedForValue: selectedCpp, // CPP used in calculation

       // Key Features for AI Analysis
       signUpBonusValue: card.signUpBonus?.estimated_value_usd ?? 0,
       signUpBonusDescription: card.signUpBonus?.description || "N/A",
       topRewardCategories: Array.isArray(card.rewards) ? card.rewards
           .filter(r => r.multiplier > 1 && r.category !== 'other')
           .sort((a, b) => b.multiplier - a.multiplier)
           .slice(0, 4) // Send maybe top 4 bonus categories
           .map(r => ({
               category: r.category,
               multiplier: r.multiplier,
               notes: r.notes,
               cap: r.cap ? `$${r.cap.amount_usd}/${r.cap.period}` : null
           })) : [],
        keyPerks: Array.isArray(card.perks) ? card.perks
           .filter(p => ['lounge_access', 'free_checked_bag', 'travel_credit', 'companion_fare', 'companion_certificate', 'global_entry_tsa_precheck_credit', 'annual_hotel_credit', 'anniversary_points', 'anniversary_miles', 'hilton_status'].includes(p.type) || p.value_usd > 0 || p.estimated_value_usd > 0) // Keep valuable perks
           .map(p => ({
               type: p.type,
               description: p.description || p.type.replace(/_/g, ' '),
               value: p.value_usd || p.estimated_value_usd, // Combine value fields
               frequency: p.frequency
           }))
           .slice(0, 5) : [], // Limit displayed perks slightly
    };
});
// ... rest of the fetch call sending spend, annualSpend, redemptionStrategy, and topCards: topCardsContext

      const currentAnnualSpend = Object.entries(spend).reduce((acc, [key, monthlySpend]) => {
           acc[key as keyof SpendInput] = monthlySpend * 12; return acc;
      }, {} as { [key in keyof SpendInput]: number });

      const res = await fetch('/api/gpt-recommend', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            spend: spend,
            annualSpend: currentAnnualSpend,
            redemptionStrategy: redemptionStrategy,
            // sortByPreference: sortBy, // Add if implementing sort preference
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
        <div style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <div>
                <label htmlFor="redemptionStrategy" style={{ marginRight: '0.5rem', fontWeight: 'bold' }}>Value Points As:</label>
                <select id="redemptionStrategy" value={redemptionStrategy} onChange={handleRedemptionChange} style={{ padding: '0.5rem', border: '1px solid #ccc', borderRadius: '4px' }}>
                    <option value="default">Best Default Value</option>
                    <option value="cash_back">Cash Back / Statement Credit</option>
                    <option value="travel_portal">Travel Portal Booking</option>
                    <option value="transfer_partners">Transfer Partners (Est. Avg.)</option>
                </select>
            </div>
           {/* Optional: Sort preference selector */}
           {/* <div>
               <label htmlFor="sortBy" style={{ marginRight: '0.5rem', fontWeight: 'bold' }}>Sort By:</label>
               <select id="sortBy" value={sortBy} onChange={handleSortChange} style={{ padding: '0.5rem', border: '1px solid #ccc', borderRadius: '4px' }}>
                   <option value="firstYear">First Year Value</option>
                   <option value="ongoing">Ongoing Value</option>
               </select>
           </div> */}
        </div>


      <p>Enter your estimated *monthly* spending per category.</p>

      {/* Spending Input Form */}
      <form style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '2rem', maxWidth: '1000px' }}>
        { /* (Form generation code remains the same) */ }
         {categoryList.map((category) => ( <div key={category} style={{ display: 'flex', flexDirection: 'column' }}> <label htmlFor={category} style={{ marginBottom: '0.5rem', textTransform: 'capitalize' }}> {category === 'onlineShopping' ? 'Online Shopping (US)' : category.replace(/([A-Z])/g, ' $1')} Spend ($): </label> <input type="number" id={category} name={category} value={spend[category as keyof SpendInput]} onChange={handleChange} min={0} step={10} style={{ padding: '0.5rem', border: '1px solid #ccc', borderRadius: '4px' }} /> </div> ))}
      </form>

      {/* Results List - Updated Display */}
      <div style={{ marginTop: '2rem' }}>
        <h3>Top Cards Based on Your Spend (Sorted by Est. First Year Value)</h3>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {results && results.length > 0 ? (
             results.slice(0, 10).map((card) => (
               card && card["Card Name"] ? (
                 <li key={card["Card Name"]} style={{ border: '1px solid #eee', borderRadius: '4px', padding: '1rem', marginBottom: '1rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                   <img src={card.image || 'placeholder.png'} alt={card["Card Name"]} style={{ height: '50px', width: '80px', objectFit: 'contain', flexShrink: 0, alignSelf: 'flex-start' }} onError={(e) => { (e.target as HTMLImageElement).src = 'placeholder.png'; }} />
                   <div style={{ flexGrow: 1 }}>
                     <strong>{card.Issuer} - {card["Card Name"]}</strong> ({card["Card Type"]})
                     <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', margin: '0.5rem 0' }}>
                         <div><strong>Est. First Year Value:</strong> <span style={{ color: (card.calculatedFirstYearNetValue ?? 0) >= 0 ? 'green' : 'red', fontWeight: 'bold', fontSize: '1.1em' }}>${(card.calculatedFirstYearNetValue ?? 0).toFixed(2)}</span></div>
                         <div><strong>Est. Ongoing Value:</strong> <span style={{ fontWeight: 'bold' }}>${(card.calculatedNetValue ?? 0).toFixed(2)}</span>/year</div>
                     </div>
                     <small style={{ display: 'block', marginBottom: '0.5rem' }}>
                        (Rewards: ${(card.calculatedRewardsValue ?? 0).toFixed(2)} + Perks: ${(card.calculatedAnnualPerkValue ?? 0).toFixed(2)} - Fee: ${card["Annual Fee"]}) | Points: {card.calculatedPoints ?? 0}
                     </small>
                     {/* Bonus Info */}
                     {card.signUpBonus && card.signUpBonus.estimated_value_usd > 0 && (
                         <div style={{ fontSize: '0.9em', background: '#fff8e1', padding: '0.3rem 0.6rem', borderRadius: '4px', margin: '0.5rem 0' }}>
                            <strong>Bonus:</strong> {card.signUpBonus.description} (Est. Value: ${card.signUpBonus.estimated_value_usd})
                         </div>
                     )}
                     {/* Key Perks */}
                     {Array.isArray(card.perks) && card.perks.length > 0 && (
                        <div style={{ fontSize: '0.9em', marginTop: '0.5rem' }}>
                           <strong>Key Perks:</strong>
                           <ul style={{ margin: '0.2rem 0 0 1.2rem', padding: 0, listStyle: 'disc' }}>
                              {card.perks
                                 .filter(p => ['lounge_access', 'free_checked_bag', 'travel_credit', 'companion_fare', 'companion_certificate', 'global_entry_tsa_precheck_credit', 'annual_hotel_credit', 'anniversary_points', 'anniversary_miles', 'hilton_status'].includes(p.type) || p.value_usd > 0) // Filter for important/valuable perks
                                 .slice(0, 4) // Limit displayed perks
                                 .map(perk => (
                                    <li key={perk.type + (perk.description || '')}>{perk.description || perk.type.replace(/_/g, ' ')} {perk.value_usd ? `($${perk.value_usd}${perk.frequency ? '/'+perk.frequency : ''})` : ''}</li>
                                 ))
                              }
                           </ul>
                        </div>
                     )}
                     {/* Links */}
                      <div style={{marginTop: '0.8rem'}}>
                         <a href={card.reviewLink} target="_blank" rel="noopener noreferrer" style={{ marginRight: '1rem', fontSize: '0.9em' }}>Review</a>
                         <a href={card.applyLink} target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.9em' }}>Apply</a>
                      </div>
                   </div>
                 </li>
               ) : null
              ))
           ) : ( <li>Enter spending values to see results.</li> )}
         </ul>
      </div>

      {/* AI Button and Suggestion Section */}
      {/* (Remains the same) */}
      <button onClick={getAiRecommendation} disabled={loading} style={{ marginTop: '1rem', padding: '0.8rem 1.5rem', cursor: 'pointer', background: '#007bff', color: 'white', border: 'none', borderRadius: '4px', fontSize: '1rem' }}> {loading ? 'Generating Recommendation...' : 'Get AI Recommendation'} </button>
      {error && <p style={{ color: 'red', marginTop: '1rem' }}>{error}</p>}
      {aiSuggestion && ( <div style={{ marginTop: '2rem', background: '#f0f8ff', padding: '1.5rem', borderRadius: '4px', border: '1px solid #e0f0ff' }}> <h4>AI Suggestion:</h4> <p style={{ whiteSpace: 'pre-wrap' }}>{aiSuggestion}</p> </div> )}

    </div>
  );
}