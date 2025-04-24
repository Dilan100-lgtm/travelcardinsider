// File: src/components/RewardsCalculator.tsx

import React, { useState, useMemo } from 'react';
// Assuming your data file is correctly named and placed
import cardDataRaw from '@/data/finalcreditcard.json'; // Use the actual path to your detailed JSON

// --- Define Interfaces ---
// (Interfaces: CardCap, CardReward, CardSignUpBonus, CardRedemptionOptions, CardPerk, DetailedCreditCard - remain the same as before)
interface CardCap { amount_usd: number; period: 'month' | 'quarter' | 'year'; applies_to_categories: string[]; }
interface CardReward { multiplier: number; category: string; notes: string | null; cap: CardCap | null; }
interface CardSignUpBonus { points: number | null; description: string; minSpend: number | null; durationDays: number | null; estimated_value_usd: number | null; }
interface CardRedemptionOptions { travel_statement_credit_cpp?: number; cash_back_cpp?: number; chase_travel_portal_cpp?: number; amex_travel_cpp?: number; cap_one_travel_cpp?: number; transfer_partner_average_cpp?: number; program_cpp?: number; [key: string]: number | undefined; }
interface CardPerk { type: string; description?: string; value_usd?: number; frequency?: string; notes?: string; estimated_value_usd?: number | null; }
interface DetailedCreditCard { "Card Name": string; Issuer: string; image: string; ratingValue?: number; applyLink: string; ratesandfees: string; reviewLink: string; "Card Type": "Personal" | "Business"; "Annual Fee": number; "APR Range (Purchases)": string | null; "Foreign Transaction Fee": number | null; "Intro APR": string | null; "Credit Score Requirement": string | null; signUpBonus: CardSignUpBonus; rewardProgram: string | null; rewards: CardReward[]; redemptionOptions: CardRedemptionOptions; perks: CardPerk[]; calculatedPoints?: number; calculatedRewardsValue?: number; // Note: Used calculatedRewardsValue based on your code
calculatedAnnualPerkValue?: number; calculatedNetValue?: number; calculatedFirstYearNetValue?: number; }

// --- Load and Type the Data ---
// (Data loading logic remains the same)
let allCards: DetailedCreditCard[] = [];
if (cardDataRaw && Array.isArray((cardDataRaw as any).cards)) { allCards = (cardDataRaw as any).cards as DetailedCreditCard[]; } else { if (Array.isArray(cardDataRaw)) { cardDataRaw.forEach((dataPart: any) => { if (dataPart && Array.isArray(dataPart.cards)) { allCards = allCards.concat(dataPart.cards as DetailedCreditCard[]); } }); } if (allCards.length === 0) { console.error("Unexpected structure in finalcreditcard.json. Expected { cards: [...] }."); } }
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
  const [aiSuggestion, setAiSuggestion] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // --- State for Comparison Feature ---
  const [showComparison, setShowComparison] = useState(false);
  const [cardsToCompare, setCardsToCompare] = useState<DetailedCreditCard[]>([]);


  // --- Helper Functions ---
  // (getSelectedCpp remains the same as provided in your base code)
  const getSelectedCpp = (card: DetailedCreditCard, strategy: RedemptionStrategy): number => {
       const options = card.redemptionOptions; if (!options) return 1.0;
       switch (strategy) {
           case 'cash_back': return options.cash_back_cpp ?? options.travel_statement_credit_cpp ?? 1.0;
           case 'travel_portal': return options.chase_travel_portal_cpp ?? options.amex_travel_cpp ?? options.cap_one_travel_cpp ?? options.travel_statement_credit_cpp ?? 1.0;
           case 'transfer_partners': return options.transfer_partner_average_cpp ?? options.chase_travel_portal_cpp ?? 1.5;
           case 'default': default: return options.transfer_partner_average_cpp ?? options.chase_travel_portal_cpp ?? options.amex_travel_cpp ?? options.cap_one_travel_cpp ?? options.travel_statement_credit_cpp ?? options.cash_back_cpp ?? 1.0;
       }
  }
   // Helper to format perk descriptions for comparison view
   // (This is new but specific to the comparison feature)
   const formatPerkForCompare = (perk: CardPerk): string => {
      let text = perk.description || perk.type.replace(/_/g, ' ');
      if (perk.value_usd) {
          text += ` ($${perk.value_usd}${perk.frequency ? '/'+perk.frequency.replace('_',' ') : ''})`;
      } else if (perk.estimated_value_usd) {
           text += ` (~$${perk.estimated_value_usd} value)`;
      }
      return text;
   }


  // --- Event Handlers ---
  // (handleChange remains the same as provided)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
       const { name, value } = e.target; setSpend((prev) => ({ ...prev, [name]: parseFloat(value) || 0, }));
  };
  // (handleRedemptionChange remains the same as provided)
  const handleRedemptionChange = (e: React.ChangeEvent<HTMLSelectElement>) => { setRedemptionStrategy(e.target.value as RedemptionStrategy); }

  // Handler to trigger comparison
  // (This is new but specific to the comparison feature)
  const handleCompareClick = () => {
      setCardsToCompare(results.slice(0, 3)); // Get top 3 from current results
      setShowComparison(true);
  }


  // --- Core Calculation Logic (useMemo Hook) ---
  // (useMemo hook remains EXACTLY the same as provided in your base code)
   const results: DetailedCreditCard[] = useMemo(() => {
        const categoryMap: { [key in keyof SpendInput]?: string[] } = { dining: ['dining'], groceries: ['groceries_us', 'groceries', 'online_grocery'], gas: ['gas_us', 'gas'], flights: ['flights_direct', 'flights_amex_travel', 'flights_chase_portal', 'flights_capital_one_portal', 'airlines', 'southwest_airlines', 'united_airlines', 'jetblue', 'hawaiian_airlines', 'delta_airlines', 'american_airlines', 'british_airways', 'alaska_airlines', 'aircanada'], hotels: ['hotel', 'hotel_amex_travel', 'hotel_chase_portal', 'hotel_capital_one_portal', 'hilton_hotels', 'hyatt_hotels'], streaming: ['streaming'], transit: ['transit'], onlineShopping: ['online_retail_us'], drugstores: ['drugstores'], other: ['other'], };
        const getOtherMultiplier = (card: DetailedCreditCard): number => { const otherRule = card.rewards.find(r => r.category === 'other'); return otherRule?.multiplier ?? 1; } // Using existing getOtherMultiplier from base
        const findBestRuleForInput = (card: DetailedCreditCard, uiCategory: keyof SpendInput): CardReward | undefined => { const targetJsonCategories = categoryMap[uiCategory] || []; let bestRule: CardReward | undefined = undefined; let bestMultiplier = 0; for (const jsonCat of targetJsonCategories) { const rule = Array.isArray(card.rewards) ? card.rewards.find(r => r.category === jsonCat) : undefined; if (rule && rule.multiplier > bestMultiplier) { bestMultiplier = rule.multiplier; bestRule = rule; } } const otherMultiplier = getOtherMultiplier(card); const otherRule = Array.isArray(card.rewards) ? card.rewards.find(r => r.category === 'other') : undefined; if (!bestRule || bestMultiplier <= otherMultiplier) { return otherRule; } return bestRule; }; // Using existing findBestRuleForInput from base

        return cards.map(card => {
            if (!card || !Array.isArray(card.rewards)) { console.warn(`Skipping card due to missing data: ${card?.["Card Name"]}`); return { ...card, calculatedPoints: 0, calculatedRewardsValue: 0, calculatedAnnualPerkValue: 0, calculatedNetValue: -(card?.["Annual Fee"] ?? 0), calculatedFirstYearNetValue: -(card?.["Annual Fee"] ?? 0) } as DetailedCreditCard; }
            let totalAnnualPoints = 0; const otherMultiplier = getOtherMultiplier(card); const capSpendTracker: { [capKey: string]: number } = {};
            for (const uiCategory of categoryList) { const monthlySpend = spend[uiCategory as keyof SpendInput]; if (monthlySpend <= 0) continue; const annualSpendInCategory = monthlySpend * 12; const rule = findBestRuleForInput(card, uiCategory as keyof SpendInput); const multiplier = rule?.multiplier ?? otherMultiplier; if (!rule || rule.category === 'other' || !rule.cap) { totalAnnualPoints += annualSpendInCategory * multiplier; continue; } const capInfo = rule.cap; const capKey = Array.isArray(capInfo.applies_to_categories) ? capInfo.applies_to_categories.sort().join(',') || rule.category : rule.category; const capLimit = capInfo.amount_usd; const capPeriod = capInfo.period; let annualPointsAtBonusRate = 0; let annualPointsAtOtherRate = 0; const spentTowardsCapSoFar = capSpendTracker[capKey] || 0;
                if (capPeriod === 'year') { const remainingAnnualCapRoom = Math.max(0, capLimit - spentTowardsCapSoFar); const annualSpendAppliedAtBonus = Math.min(annualSpendInCategory, remainingAnnualCapRoom); const annualSpendAppliedAtOther = Math.max(0, annualSpendInCategory - annualSpendAppliedAtBonus); annualPointsAtBonusRate = annualSpendAppliedAtBonus * multiplier; annualPointsAtOtherRate = annualSpendAppliedAtOther * otherMultiplier; capSpendTracker[capKey] = spentTowardsCapSoFar + annualSpendAppliedAtBonus; }
                else if (capPeriod === 'month') { const monthlyCapLimit = capLimit; for (let month = 0; month < 12; month++) { const monthlySpendAtBonusRate = Math.min(monthlySpend, monthlyCapLimit); const monthlySpendAtOtherRate = Math.max(0, monthlySpend - monthlySpendAtBonusRate); annualPointsAtBonusRate += monthlySpendAtBonusRate * multiplier; annualPointsAtOtherRate += monthlySpendAtOtherRate * otherMultiplier; } }
                else if (capPeriod === 'quarter') { const quarterlyCapLimit = capLimit; for (let quarter = 0; quarter < 4; quarter++) { const quarterlySpendEstimate = monthlySpend * 3; const quarterlySpendAtBonusRate = Math.min(quarterlySpendEstimate, quarterlyCapLimit); const quarterlySpendAtOtherRate = Math.max(0, quarterlySpendEstimate - quarterlySpendAtBonusRate); annualPointsAtBonusRate += quarterlySpendAtBonusRate * multiplier; annualPointsAtOtherRate += quarterlySpendAtOtherRate * otherMultiplier; } }
                totalAnnualPoints += annualPointsAtBonusRate + annualPointsAtOtherRate;
            }
            const selectedCpp = getSelectedCpp(card, redemptionStrategy); const rewardsValue = (totalAnnualPoints * selectedCpp) / 100;
            let annualPerkValue = 0;
            if (Array.isArray(card.perks)) { card.perks.forEach(perk => { if (perk.value_usd && perk.frequency === 'annual') { annualPerkValue += perk.value_usd; } else if (perk.type === 'global_entry_tsa_precheck_credit' && perk.value_usd && perk.frequency?.includes('years')) { const years = parseInt(perk.frequency.split('_')[1]) || 4; annualPerkValue += perk.value_usd / years; } else if ((perk.type === 'anniversary_points' || perk.type === 'anniversary_miles') && perk.estimated_value_usd) { annualPerkValue += perk.estimated_value_usd; } }); }
            const netValueIncludingPerks = rewardsValue + annualPerkValue - card["Annual Fee"]; const signUpBonusValue = card.signUpBonus?.estimated_value_usd ?? 0; const firstYearNetValue = netValueIncludingPerks + signUpBonusValue;
            // NOTE: Using calculatedRewardsValue from your base code for consistency
            return { ...card, calculatedPoints: Math.round(totalAnnualPoints), calculatedRewardsValue: parseFloat(rewardsValue.toFixed(2)), calculatedAnnualPerkValue: parseFloat(annualPerkValue.toFixed(2)), calculatedNetValue: parseFloat(netValueIncludingPerks.toFixed(2)), calculatedFirstYearNetValue: parseFloat(firstYearNetValue.toFixed(2)), };
        }).sort((a, b) => (b.calculatedFirstYearNetValue ?? -Infinity) - (a.calculatedFirstYearNetValue ?? -Infinity));
    }, [spend, redemptionStrategy]);


  // --- AI Recommendation Fetching ---
  // (getAiRecommendation function remains EXACTLY the same as provided in your base code)
   const getAiRecommendation = async () => {
       setLoading(true); setError(''); try {
           const topCardsContext = results.slice(0, 5).map(card => { const selectedCpp = getSelectedCpp(card, redemptionStrategy); return { cardName: card["Card Name"], issuer: card.Issuer, cardType: card["Card Type"], annualFee: card["Annual Fee"], estimatedFirstYearNetValue: card.calculatedFirstYearNetValue, estimatedOngoingNetValue: card.calculatedNetValue, calculatedAnnualRewardsValue: card.calculatedRewardsValue, calculatedAnnualPerkValue: card.calculatedAnnualPerkValue, calculatedAnnualPoints: card.calculatedPoints, cppUsedForValue: selectedCpp, redemptionStrategyUsed: redemptionStrategy, signUpBonusValue: card.signUpBonus?.estimated_value_usd ?? 0, signUpBonusDescription: card.signUpBonus?.description || "N/A", topRewardCategories: Array.isArray(card.rewards) ? card.rewards .filter(r => r.multiplier > 1 && r.category !== 'other') .sort((a, b) => b.multiplier - a.multiplier) .slice(0, 4) .map(r => ({ category: r.category, multiplier: r.multiplier, notes: r.notes, cap: r.cap ? `$${r.cap.amount_usd}/${r.cap.period}` : null })) : [], keyPerks: Array.isArray(card.perks) ? card.perks .filter(p => ['lounge_access', 'free_checked_bag', 'travel_credit', 'companion_fare', 'companion_certificate', 'global_entry_tsa_precheck_credit', 'annual_hotel_credit', 'anniversary_points', 'anniversary_miles', 'hilton_status'].includes(p.type) || p.value_usd > 0 || p.estimated_value_usd > 0) .map(p => ({ type: p.type, description: p.description || p.type.replace(/_/g, ' '), value: p.value_usd || p.estimated_value_usd, frequency: p.frequency })) .slice(0, 5) : [], }; });
           const currentAnnualSpend = Object.entries(spend).reduce((acc, [key, monthlySpend]) => { acc[key as keyof SpendInput] = monthlySpend * 12; return acc; }, {} as { [key in keyof SpendInput]: number });
           const res = await fetch('/api/gpt-recommend', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ spend: spend, annualSpend: currentAnnualSpend, redemptionStrategy: redemptionStrategy, topCards: topCardsContext }), });
           if (!res.ok) throw new Error(`Server responded ${res.status}`); const data = await res.json(); setAiSuggestion(data.recommendation);
       } catch (err: any) { console.error('AI request failed:', err); setError('AI recommendation failed.'); } finally { setLoading(false); }
   };


  // --- Render JSX ---
  // (Using the styling from previous step, adding Comparison feature JSX)
  return (
    <div style={{
        padding: '2rem',
        fontFamily: 'system-ui, sans-serif',
        '--input-border-color': '#ccc',
        '--input-bg-color': '#fff',
        '--label-color': '#333',
        '--primary-color': '#007bff',
        '--light-bg': '#f8f9fa',
        '--ai-suggestion-bg': '#eef8ff',
        '--ai-suggestion-border': '#d0e8ff',
        '--success-color': 'green',
        '--danger-color': 'red',
     } as React.CSSProperties}>

      <h2 style={{ textAlign: 'center', marginBottom: '1.5rem', color: 'var(--label-color)' }}>
          AI-Powered Travel Rewards Calculator
      </h2>

       {/* Controls Section */}
       <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginBottom: '1.5rem', padding: '1rem', backgroundColor: 'var(--light-bg)', borderRadius: '8px', flexWrap: 'wrap', maxWidth: '600px', margin: '0 auto 2rem auto' }}>
            <div>
                <label htmlFor="redemptionStrategy" style={{ marginRight: '0.5rem', fontWeight: '500', color: 'var(--label-color)' }}>Value Points As:</label>
                <select id="redemptionStrategy" value={redemptionStrategy} onChange={handleRedemptionChange} style={{ padding: '0.6rem', border: '1px solid var(--input-border-color)', borderRadius: '4px', backgroundColor: 'var(--input-bg-color)', minWidth: '200px' }}>
                    <option value="default">Best Default Value</option>
                    <option value="cash_back">Cash Back / Statement Credit</option>
                    <option value="travel_portal">Travel Portal Booking</option>
                    <option value="transfer_partners">Transfer Partners (Est. Avg.)</option>
                </select>
            </div>
       </div>

      <p style={{ textAlign: 'center', color: 'var(--label-color)', marginBottom: '1rem' }}>
          Enter your estimated <strong>monthly</strong> spending per category:
      </p>

      {/* Spending Input Form */}
      <form style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem', marginBottom: '2.5rem', maxWidth: '900px', margin: '0 auto 2.5rem auto' }}>
         {categoryList.map((category) => ( <div key={category} style={{ display: 'flex', flexDirection: 'column' }}> <label htmlFor={category} style={{ marginBottom: '0.5rem', textTransform: 'capitalize', fontWeight: '500', color: 'var(--label-color)', fontSize: '0.95em' }}> {category === 'onlineShopping' ? 'Online Shopping (US)' : category.replace(/([A-Z])/g, ' $1')} (Monthly $): </label> <input type="number" id={category} name={category} value={spend[category as keyof SpendInput]} onChange={handleChange} min={0} step={10} placeholder="$0" style={{ padding: '0.8rem', border: '1px solid var(--input-border-color)', borderRadius: '4px', fontSize: '1rem', backgroundColor: 'var(--input-bg-color)', }} /> </div> ))}
      </form>

      {/* --- Results Section --- */}
      <div style={{ marginTop: '2rem' }}>
        <h3 style={{ textAlign: 'center', marginBottom: '1.5rem', color: 'var(--label-color)' }}>
            Top Cards Based on Your Spend (Sorted by Est. First Year Value)
        </h3>
         {/* Add Compare Button */}
         {results && results.length >= 3 && !showComparison && (
            <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
                <button
                    onClick={handleCompareClick} // Use the new handler
                    style={{ padding: '0.6rem 1.2rem', cursor: 'pointer', background: '#6c757d', color: 'white', border: 'none', borderRadius: '4px', fontSize: '0.95rem' }}
                >
                    Compare Top 3 Cards
                </button>
            </div>
          )}

        <ul style={{ listStyle: 'none', padding: 0, maxWidth: '800px', margin: '0 auto' }}>
           {/* Results list rendering - same as provided in base code, using calculatedRewardsValue */}
             {results && results.length > 0 ? ( results.slice(0, 10).map((card) => ( card && card["Card Name"] ? ( <li key={card["Card Name"]} style={{ border: '1px solid #e0e0e0', borderRadius: '8px', padding: '1.2rem', marginBottom: '1.5rem', display: 'flex', gap: '1.5rem', flexWrap: 'nowrap', backgroundColor: 'var(--input-bg-color)', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}> <img src={card.image || 'placeholder.png'} alt={card["Card Name"]} style={{ height: '55px', width: '88px', objectFit: 'contain', flexShrink: 0, alignSelf: 'flex-start', borderRadius: '3px', marginTop: '0.2rem' }} onError={(e) => { (e.target as HTMLImageElement).src = 'placeholder.png'; }} /> <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', gap: '0.4rem' }}> <strong style={{ fontSize: '1.1em', color: 'var(--label-color)' }}>{card.Issuer} - {card["Card Name"]} <span style={{ fontSize: '0.85em', color: '#666' }}>({card["Card Type"]})</span></strong> <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', fontSize: '0.95em' }}> <div><strong>Est. 1st Year:</strong> <span style={{ color: (card.calculatedFirstYearNetValue ?? 0) >= 0 ? 'var(--success-color)' : 'var(--danger-color)', fontWeight: 'bold', fontSize: '1.05em' }}>${(card.calculatedFirstYearNetValue ?? 0).toFixed(2)}</span></div> <div><strong>Ongoing:</strong> <span style={{ fontWeight: 'bold' }}>${(card.calculatedNetValue ?? 0).toFixed(2)}</span>/yr</div> </div> <small style={{ color: '#555', fontSize: '0.85em' }}> (Rewards: ${(card.calculatedRewardsValue ?? 0).toFixed(2)} + Perks: ${(card.calculatedAnnualPerkValue ?? 0).toFixed(2)} - Fee: ${card["Annual Fee"]}) | Pts: {card.calculatedPoints ?? 0} </small> {card.signUpBonus && card.signUpBonus.estimated_value_usd > 0 && ( <div style={{ fontSize: '0.85em', background: '#fffadf', padding: '0.3rem 0.6rem', borderRadius: '4px', border: '1px solid #ffe9a7' }}> <strong>Bonus:</strong> {card.signUpBonus.description} (Value: ~${card.signUpBonus.estimated_value_usd}) </div> )} {Array.isArray(card.perks) && card.perks.filter(p => ['lounge_access', 'free_checked_bag', 'travel_credit', 'companion_fare', 'companion_certificate', 'global_entry_tsa_precheck_credit', 'annual_hotel_credit', 'anniversary_points', 'anniversary_miles', 'hilton_status'].includes(p.type) || p.value_usd > 0).length > 0 && ( <div style={{ fontSize: '0.85em' }}> <strong>Key Perks:</strong> <ul style={{ margin: '0.1rem 0 0 1rem', padding: 0, listStyle: 'disc', color: '#444' }}> {card.perks .filter(p => ['lounge_access', 'free_checked_bag', 'travel_credit', 'companion_fare', 'companion_certificate', 'global_entry_tsa_precheck_credit', 'annual_hotel_credit', 'anniversary_points', 'anniversary_miles', 'hilton_status'].includes(p.type) || p.value_usd > 0) .slice(0, 3) .map(perk => ( <li key={perk.type + (perk.description || '')} style={{ marginBottom: '0.1rem' }}>{formatPerkForCompare(perk)}</li> )) } </ul> </div> )} <div style={{marginTop: '0.5rem'}}> <a href={card.reviewLink} target="_blank" rel="noopener noreferrer" style={{ marginRight: '1rem', fontSize: '0.9em', color: 'var(--primary-color)', textDecoration: 'none' }}>Review</a> <a href={card.applyLink} target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.9em', color: 'var(--primary-color)', textDecoration: 'none' }}>Apply Link</a> </div> </div> </li> ) : null )) ) : ( <li style={{ textAlign: 'center', color: '#777' }}>Enter spending values above to see card recommendations.</li> )}
        </ul>
      </div>

       {/* --- Comparison Modal/Section --- */}
       {/* (This entire block is new) */}
       {showComparison && cardsToCompare.length > 0 && (
          // Simple overlay styling
          <div style={{
              position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.6)',
              display: 'flex', justifyContent: 'center', alignItems: 'center',
              zIndex: 1000, overflowY: 'auto', padding: '1rem' // Add padding for scrollbar space
           }}>
              {/* Comparison Content Box */}
              <div style={{
                  backgroundColor: 'white', borderRadius: '8px', padding: '1.5rem 2rem',
                  width: '90%', maxWidth: '1100px', // Adjusted max-width
                  maxHeight: '90vh', overflowY: 'auto',
                  position: 'relative' // Needed for close button positioning
               }}>
                  <button onClick={() => setShowComparison(false)} style={{
                      position: 'absolute', top: '10px', right: '15px', background: 'none', border: 'none',
                      fontSize: '1.8rem', cursor: 'pointer', color: '#888', lineHeight: 1
                   }}>
                      &times; {/* Close symbol */}
                  </button>
                  <h3 style={{ textAlign: 'center', marginTop: 0, marginBottom: '1.5rem' }}>Compare Top {cardsToCompare.length} Cards</h3>

                  {/* Comparison Grid */}
                  <div style={{
                      display: 'grid',
                      // 4 columns: Labels + up to 3 Cards
                      gridTemplateColumns: `minmax(150px, 1fr) repeat(${cardsToCompare.length}, minmax(180px, 1fr))`, // Dynamic columns
                      gap: '0px', // No gap, using borders
                      border: '1px solid #ddd',
                      fontSize: '0.9em',
                   }}>
                      {/* --- Header Row --- */}
                      <div style={compareCellStyle(true, true)}>Feature</div>
                      {cardsToCompare.map(card => (
                          <div key={card["Card Name"]} style={{...compareCellStyle(true, false), textAlign: 'center'}}>
                              <img src={card.image || 'placeholder.png'} alt={card["Card Name"]} style={{ height: '40px', objectFit: 'contain', marginBottom: '0.3rem' }} onError={(e) => { (e.target as HTMLImageElement).src = 'placeholder.png'; }}/>
                              <div style={{fontWeight: 'bold'}}>{card["Card Name"]}</div>
                              <div style={{fontSize: '0.9em', color: '#555'}}>{card.Issuer}</div>
                          </div>
                      ))}

                      {/* --- Data Rows (Using renderCompareRow helper defined outside component) --- */}
                      {renderCompareRow("Annual Fee", cardsToCompare.map(c => `$${c["Annual Fee"].toFixed(2)}`))}
                      {renderCompareRow("Est. First Year Value", cardsToCompare.map(c => <span style={{ color: (c.calculatedFirstYearNetValue ?? 0) >= 0 ? 'var(--success-color)' : 'var(--danger-color)', fontWeight: 'bold' }}>${(c.calculatedFirstYearNetValue ?? 0).toFixed(2)}</span>))}
                      {renderCompareRow("Est. Ongoing Value", cardsToCompare.map(c => <span style={{ fontWeight: 'bold' }}>${(c.calculatedNetValue ?? 0).toFixed(2)}</span>))}
                      {renderCompareRow("Sign-Up Bonus", cardsToCompare.map(c => `${c.signUpBonus?.description || 'N/A'} (~$${c.signUpBonus?.estimated_value_usd ?? 0})`))}
                      {renderCompareRow("Top Rewards", cardsToCompare.map(c => (
                          <ul style={{margin: 0, paddingLeft: '1em', textAlign: 'left', fontSize: '0.9em'}}>
                              {(Array.isArray(c.rewards) ? c.rewards.filter(r => r.multiplier > 1 && r.category !== 'other').sort((a,b) => b.multiplier - a.multiplier).slice(0, 3) : [])
                                  .map(r => <li key={r.category}>{r.multiplier}x {r.category.replace(/_/g,' ')}{r.cap ? ` ($${r.cap.amount_usd}/${r.cap.period})`:''}</li>)}
                               {/* Using existing getOtherMultiplier function */}
                               <li>{c.rewards.find(r => r.category === 'other')?.multiplier ?? 1}x Other</li>
                          </ul>
                      )))}
                       {renderCompareRow("Key Perks", cardsToCompare.map(c => (
                           <ul style={{margin: 0, paddingLeft: '1em', textAlign: 'left', fontSize: '0.9em'}}>
                               {(Array.isArray(c.perks) ? c.perks.filter(p => ['lounge_access', 'free_checked_bag', 'travel_credit', 'companion_fare', 'companion_certificate', 'global_entry_tsa_precheck_credit', 'annual_hotel_credit', 'anniversary_points', 'anniversary_miles', 'hilton_status'].includes(p.type) || p.value_usd > 0 || p.estimated_value_usd > 0).slice(0, 4) : [])
                                   .map(p => <li key={p.type+(p.description || '')}>{formatPerkForCompare(p)}</li>)}
                           </ul>
                       )))}
                      {renderCompareRow("Redemption Strategy", cardsToCompare.map(c => redemptionStrategy))}
                      {renderCompareRow("CPP Used", cardsToCompare.map(c => getSelectedCpp(c, redemptionStrategy).toFixed(2)))}
                      {renderCompareRow("Links", cardsToCompare.map(c => (
                          <>
                              <a href={c.reviewLink} target="_blank" rel="noopener noreferrer" style={{ display: 'block', marginBottom: '0.3rem', color: 'var(--primary-color)', textDecoration: 'none' }}>Review</a>
                              <a href={c.applyLink} target="_blank" rel="noopener noreferrer" style={{ display: 'block', color: 'var(--primary-color)', textDecoration: 'none' }}>Apply</a>
                          </>
                      )))}

                  </div> {/* End Comparison Grid */}
              </div> {/* End Comparison Content Box */}
          </div> // End Overlay
       )}

      {/* --- AI Section --- */}
      {/* (AI Button and Suggestion Display remain the same as provided in base code) */}
       <div style={{ textAlign: 'center', marginTop: '2.5rem', borderTop: '1px solid #eee', paddingTop: '2rem' }}>
           <button onClick={getAiRecommendation} disabled={loading} style={{ padding: '0.8rem 1.8rem', cursor: 'pointer', background: 'var(--primary-color)', color: 'white', border: 'none', borderRadius: '4px', fontSize: '1.05rem', fontWeight: '500', transition: 'background-color 0.2s ease', }} onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#0056b3'} onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'var(--primary-color)'} > {loading ? 'Generating Recommendation...' : 'Get AI Recommendation'} </button>
           {error && <p style={{ color: 'var(--danger-color)', marginTop: '1rem', fontWeight: '500' }}>{error}</p>}
           {aiSuggestion && ( <div style={{ maxWidth: '800px', margin: '2rem auto 0 auto', background: 'var(--ai-suggestion-bg)', padding: '1.5rem 2rem', borderRadius: '8px', border: '1px solid var(--ai-suggestion-border)', textAlign: 'left', lineHeight: '1.6', color: '#222', }}> <h4 style={{ marginTop: 0, marginBottom: '1rem', color: 'var(--label-color)', borderBottom: '1px solid var(--ai-suggestion-border)', paddingBottom: '0.5rem' }}> Personalized AI Suggestion </h4> <div dangerouslySetInnerHTML={{ __html: formatAiOutput(aiSuggestion) }} style={{ whiteSpace: 'pre-wrap' }} ></div> </div> )}
        </div>
    </div>
  );
}


// --- Helper Components / Functions for Comparison ---
// (These are new but specific to comparison feature - Must be outside component)

// Style helper for comparison cells
const compareCellStyle = (isHeader: boolean, isLabelCol: boolean): React.CSSProperties => ({
    padding: '0.6rem 0.8rem',
    borderBottom: '1px solid #eee',
    borderRight: '1px solid #eee',
    backgroundColor: isHeader ? '#f8f9fa' : 'white',
    fontWeight: isHeader || isLabelCol ? '600' : 'normal',
    textAlign: isLabelCol ? 'right' : 'left',
    verticalAlign: 'top', // Align content top for multi-line cells
});

// Helper function to render a row in the comparison grid
const renderCompareRow = (label: string, values: React.ReactNode[]) => (
    // Using React.Fragment shorthand <>...</>
    <>
        <div style={compareCellStyle(false, true)}>{label}</div>
        {/* Ensure values array has items before mapping, provide fallback */}
        {values.map((value, index) => (
            <div key={index} style={compareCellStyle(false, false)}>{value ?? '-'}</div>
        ))}
        {/* Add empty cells if less than 3 cards are compared */}
        {Array.from({ length: 3 - values.length }).map((_, index) => (
             <div key={`empty-${index}`} style={compareCellStyle(false, false)}>-</div>
        ))}
    </>
);


// (formatAiOutput helper function remains EXACTLY the same as provided in base code)
function formatAiOutput(text: string): string {
  // Basic replacements - can be expanded
  let formatted = text
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') // Bold **text**
      .replace(/\* (.*?)(?=\n\* |\n\n|$)/g, '<li>$1</li>'); // Basic bullet * item

  // Wrap bullet points in <ul> - REMOVED the line causing the build error
  // The line below was removed:
  // formatted = formatted.replace(/^(<li>.*<\/li>)/sm, '<ul>$1</ul>');

  // If you still want to try wrapping, you could attempt a simpler multi-line replace,
  // but it might be less reliable than the original regex with the 's' flag.
  // For now, we prioritize fixing the build. LIs will be rendered individually.

  // Clean up potential extra newlines around list items if they exist individually
  if (formatted.includes('<li>')) {
       formatted = formatted.replace(/\n*<li>/g, '<li>').replace(/<\/li>\n*/g, '</li>');
  }


  // Convert remaining newlines to <br> tags for HTML paragraphs (Optional)
  // formatted = formatted.replace(/\n/g, '<br />');

  return formatted; // Remember caution with dangerouslySetInnerHTML
}