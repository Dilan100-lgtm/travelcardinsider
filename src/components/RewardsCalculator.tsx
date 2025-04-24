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
interface DetailedCreditCard { "Card Name": string; Issuer: string; image: string; ratingValue?: number; applyLink: string; ratesandfees: string; reviewLink: string; "Card Type": "Personal" | "Business"; "Annual Fee": number; "APR Range (Purchases)": string | null; "Foreign Transaction Fee": number | null; "Intro APR": string | null; "Credit Score Requirement": string | null; signUpBonus: CardSignUpBonus; rewardProgram: string | null; rewards: CardReward[]; redemptionOptions: CardRedemptionOptions; perks: CardPerk[]; calculatedPoints?: number; calculatedRewardsValue?: number; calculatedAnnualPerkValue?: number; calculatedNetValue?: number; calculatedFirstYearNetValue?: number; }

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

  // --- Helper Functions ---
  // (getSelectedCpp remains the same)
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

  // --- Core Calculation Logic (useMemo Hook) ---
  // (useMemo hook and internal helpers remain the same as the previous version with bonus/perk integration)
   const results: DetailedCreditCard[] = useMemo(() => {
       const categoryMap: { [key in keyof SpendInput]?: string[] } = { dining: ['dining'], groceries: ['groceries_us', 'groceries', 'online_grocery'], gas: ['gas_us', 'gas'], flights: ['flights_direct', 'flights_amex_travel', 'flights_chase_portal', 'flights_capital_one_portal', 'airlines', 'southwest_airlines', 'united_airlines', 'jetblue', 'hawaiian_airlines', 'delta_airlines', 'american_airlines', 'british_airways', 'alaska_airlines', 'aircanada'], hotels: ['hotel', 'hotel_amex_travel', 'hotel_chase_portal', 'hotel_capital_one_portal', 'hilton_hotels', 'hyatt_hotels'], streaming: ['streaming'], transit: ['transit'], onlineShopping: ['online_retail_us'], drugstores: ['drugstores'], other: ['other'], };
       const getOtherMultiplier = (card: DetailedCreditCard): number => { const otherRule = card.rewards.find(r => r.category === 'other'); return otherRule?.multiplier ?? 1; }
       const findBestRuleForInput = (card: DetailedCreditCard, uiCategory: keyof SpendInput): CardReward | undefined => { const targetJsonCategories = categoryMap[uiCategory] || []; let bestRule: CardReward | undefined = undefined; let bestMultiplier = 0; for (const jsonCat of targetJsonCategories) { const rule = Array.isArray(card.rewards) ? card.rewards.find(r => r.category === jsonCat) : undefined; if (rule && rule.multiplier > bestMultiplier) { bestMultiplier = rule.multiplier; bestRule = rule; } } const otherMultiplier = getOtherMultiplier(card); const otherRule = Array.isArray(card.rewards) ? card.rewards.find(r => r.category === 'other') : undefined; if (!bestRule || bestMultiplier <= otherMultiplier) { return otherRule; } return bestRule; };

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
           return { ...card, calculatedPoints: Math.round(totalAnnualPoints), calculatedRewardsValue: parseFloat(rewardsValue.toFixed(2)), calculatedAnnualPerkValue: parseFloat(annualPerkValue.toFixed(2)), calculatedNetValue: parseFloat(netValueIncludingPerks.toFixed(2)), calculatedFirstYearNetValue: parseFloat(firstYearNetValue.toFixed(2)), };
       }).sort((a, b) => (b.calculatedFirstYearNetValue ?? -Infinity) - (a.calculatedFirstYearNetValue ?? -Infinity));
   }, [spend, redemptionStrategy]);


  // --- AI Recommendation Fetching ---
  // (getAiRecommendation function remains the same as previous version with enhanced context)
   const getAiRecommendation = async () => { /* ... same as previous version ... */
       setLoading(true); setError(''); try {
           const topCardsContext = results.slice(0, 5).map(card => { const selectedCpp = getSelectedCpp(card, redemptionStrategy); return { cardName: card["Card Name"], issuer: card.Issuer, cardType: card["Card Type"], annualFee: card["Annual Fee"], estimatedFirstYearNetValue: card.calculatedFirstYearNetValue, estimatedOngoingNetValue: card.calculatedNetValue, calculatedAnnualRewardsValue: card.calculatedRewardsValue, calculatedAnnualPerkValue: card.calculatedAnnualPerkValue, calculatedAnnualPoints: card.calculatedPoints, cppUsedForValue: selectedCpp, signUpBonusValue: card.signUpBonus?.estimated_value_usd ?? 0, signUpBonusDescription: card.signUpBonus?.description || "N/A", topRewardCategories: Array.isArray(card.rewards) ? card.rewards .filter(r => r.multiplier > 1 && r.category !== 'other') .sort((a, b) => b.multiplier - a.multiplier) .slice(0, 4) .map(r => ({ category: r.category, multiplier: r.multiplier, notes: r.notes, cap: r.cap ? `$${r.cap.amount_usd}/${r.cap.period}` : null })) : [], keyPerks: Array.isArray(card.perks) ? card.perks .filter(p => ['lounge_access', 'free_checked_bag', 'travel_credit', 'companion_fare', 'companion_certificate', 'global_entry_tsa_precheck_credit', 'annual_hotel_credit', 'anniversary_points', 'anniversary_miles', 'hilton_status'].includes(p.type) || p.value_usd > 0 || p.estimated_value_usd > 0) .map(p => ({ type: p.type, description: p.description || p.type.replace(/_/g, ' '), value: p.value_usd || p.estimated_value_usd, frequency: p.frequency })) .slice(0, 5) : [], }; });
           const currentAnnualSpend = Object.entries(spend).reduce((acc, [key, monthlySpend]) => { acc[key as keyof SpendInput] = monthlySpend * 12; return acc; }, {} as { [key in keyof SpendInput]: number });
           const res = await fetch('/api/gpt-recommend', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ spend: spend, annualSpend: currentAnnualSpend, redemptionStrategy: redemptionStrategy, topCards: topCardsContext }), });
           if (!res.ok) throw new Error(`Server responded ${res.status}`); const data = await res.json(); setAiSuggestion(data.recommendation);
       } catch (err: any) { console.error('AI request failed:', err); setError('AI recommendation failed.'); } finally { setLoading(false); }
   };


  // --- Render JSX ---
  return (
    // Added basic CSS variables for easier theming
    <div style={{
        padding: '2rem',
        fontFamily: 'system-ui, sans-serif',
        '--input-border-color': '#ccc',
        '--input-bg-color': '#fff',
        '--label-color': '#333',
        '--primary-color': '#007bff',
        '--light-bg': '#f8f9fa',
        '--ai-suggestion-bg': '#eef8ff', // Lighter blue
        '--ai-suggestion-border': '#d0e8ff',
        '--success-color': 'green',
        '--danger-color': 'red',
     } as React.CSSProperties}>

      <h2 style={{ textAlign: 'center', marginBottom: '1.5rem', color: 'var(--label-color)' }}>
          AI-Powered Travel Rewards Calculator
      </h2>

      {/* Controls Section (Redemption/Sort) */}
       <div style={{
           display: 'flex',
           justifyContent: 'center', // Center horizontally
           gap: '1.5rem',
           marginBottom: '1.5rem',
           padding: '1rem',
           backgroundColor: 'var(--light-bg)',
           borderRadius: '8px',
           flexWrap: 'wrap', // Allow wrapping on smaller screens
           maxWidth: '600px', // Limit width
           margin: '0 auto 2rem auto' // Center block element
        }}>
            <div>
                <label htmlFor="redemptionStrategy" style={{ marginRight: '0.5rem', fontWeight: '500', color: 'var(--label-color)' }}>Value Points As:</label>
                <select
                    id="redemptionStrategy"
                    value={redemptionStrategy}
                    onChange={handleRedemptionChange}
                    style={{ padding: '0.6rem', border: '1px solid var(--input-border-color)', borderRadius: '4px', backgroundColor: 'var(--input-bg-color)', minWidth: '200px' }}
                >
                    <option value="default">Best Default Value</option>
                    <option value="cash_back">Cash Back / Statement Credit</option>
                    <option value="travel_portal">Travel Portal Booking</option>
                    <option value="transfer_partners">Transfer Partners (Est. Avg.)</option>
                </select>
            </div>
            {/* Optional: Sort preference selector - styling added */}
           {/* <div>
               <label htmlFor="sortBy" style={{ marginRight: '0.5rem', fontWeight: '500', color: 'var(--label-color)' }}>Sort By:</label>
               <select id="sortBy" value={sortBy} onChange={handleSortChange} style={{ padding: '0.6rem', border: '1px solid var(--input-border-color)', borderRadius: '4px', backgroundColor: 'var(--input-bg-color)', minWidth: '150px' }}>
                   <option value="firstYear">First Year Value</option>
                   <option value="ongoing">Ongoing Value</option>
               </select>
           </div> */}
        </div>


      <p style={{ textAlign: 'center', color: 'var(--label-color)', marginBottom: '1rem' }}>
          Enter your estimated <strong>monthly</strong> spending per category:
      </p>

      {/* Spending Input Form - Improved Layout */}
      <form style={{
          display: 'grid',
          // Responsive grid: 1 column on small screens, up to 3 on larger screens
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '1.5rem', // Increased gap
          marginBottom: '2.5rem',
          maxWidth: '900px', // Limit overall width
          margin: '0 auto 2.5rem auto' // Center form
       }}>
        {categoryList.map((category) => (
          <div key={category} style={{ display: 'flex', flexDirection: 'column' }}>
            {/* Updated Label */}
            <label
               htmlFor={category}
               style={{
                   marginBottom: '0.5rem',
                   textTransform: 'capitalize',
                   fontWeight: '500',
                   color: 'var(--label-color)',
                   fontSize: '0.95em'
                }}
             >
              {/* More descriptive labels */}
              {category === 'onlineShopping' ? 'Online Shopping (US)' : category.replace(/([A-Z])/g, ' $1')} (Monthly $):
            </label>
            <input
              type="number"
              id={category}
              name={category}
              value={spend[category as keyof SpendInput]}
              onChange={handleChange}
              min={0}
              step={10}
              placeholder="$0" // Placeholder text
              style={{
                  padding: '0.8rem', // Slightly larger padding
                  border: '1px solid var(--input-border-color)',
                  borderRadius: '4px',
                  fontSize: '1rem',
                  backgroundColor: 'var(--input-bg-color)',
               }}
            />
          </div>
        ))}
      </form>

      {/* --- Results Section --- */}
      <div style={{ marginTop: '2rem' }}>
        <h3 style={{ textAlign: 'center', marginBottom: '1.5rem', color: 'var(--label-color)' }}>
            Top Cards Based on Your Spend (Sorted by Est. First Year Value)
        </h3>
        <ul style={{ listStyle: 'none', padding: 0, maxWidth: '800px', margin: '0 auto' }}>
          {/* (Results list rendering logic remains the same, styling updated below) */}
           {results && results.length > 0 ? (
              results.slice(0, 10).map((card) => (
               card && card["Card Name"] ? (
                 <li key={card["Card Name"]} style={{
                     border: '1px solid #e0e0e0', // Lighter border
                     borderRadius: '8px', // More rounded
                     padding: '1.2rem', // More padding
                     marginBottom: '1.5rem', // More spacing
                     display: 'flex',
                     gap: '1.5rem',
                     flexWrap: 'nowrap', // Prevent wrapping image and text block initially
                     backgroundColor: 'var(--input-bg-color)', // White background
                     boxShadow: '0 2px 4px rgba(0,0,0,0.05)' // Subtle shadow
                  }}>
                   <img
                       src={card.image || 'placeholder.png'}
                       alt={card["Card Name"]}
                       style={{ height: '55px', width: '88px', objectFit: 'contain', flexShrink: 0, alignSelf: 'flex-start', borderRadius: '3px', marginTop: '0.2rem' }}
                       onError={(e) => { (e.target as HTMLImageElement).src = 'placeholder.png'; }}
                    />
                   <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', gap: '0.4rem' }}> {/* Added flex column and gap */}
                     <strong style={{ fontSize: '1.1em', color: 'var(--label-color)' }}>{card.Issuer} - {card["Card Name"]} <span style={{ fontSize: '0.85em', color: '#666' }}>({card["Card Type"]})</span></strong>
                     <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', fontSize: '0.95em' }}>
                         <div><strong>Est. 1st Year:</strong> <span style={{ color: (card.calculatedFirstYearNetValue ?? 0) >= 0 ? 'var(--success-color)' : 'var(--danger-color)', fontWeight: 'bold', fontSize: '1.05em' }}>${(card.calculatedFirstYearNetValue ?? 0).toFixed(2)}</span></div>
                         <div><strong>Ongoing:</strong> <span style={{ fontWeight: 'bold' }}>${(card.calculatedNetValue ?? 0).toFixed(2)}</span>/yr</div>
                     </div>
                     <small style={{ color: '#555', fontSize: '0.85em' }}>
                        (Rewards: ${(card.calculatedRewardsValue ?? 0).toFixed(2)} + Perks: ${(card.calculatedAnnualPerkValue ?? 0).toFixed(2)} - Fee: ${card["Annual Fee"]}) | Pts: {card.calculatedPoints ?? 0}
                     </small>
                     {card.signUpBonus && card.signUpBonus.estimated_value_usd > 0 && (
                         <div style={{ fontSize: '0.85em', background: '#fffadf', padding: '0.3rem 0.6rem', borderRadius: '4px', border: '1px solid #ffe9a7' }}>
                            <strong>Bonus:</strong> {card.signUpBonus.description} (Value: ~${card.signUpBonus.estimated_value_usd})
                         </div>
                     )}
                     {Array.isArray(card.perks) && card.perks.filter(p => ['lounge_access', 'free_checked_bag', 'travel_credit', 'companion_fare', 'companion_certificate', 'global_entry_tsa_precheck_credit', 'annual_hotel_credit', 'anniversary_points', 'anniversary_miles', 'hilton_status'].includes(p.type) || p.value_usd > 0).length > 0 && (
                        <div style={{ fontSize: '0.85em' }}>
                           <strong>Key Perks:</strong>
                           <ul style={{ margin: '0.1rem 0 0 1rem', padding: 0, listStyle: 'disc', color: '#444' }}>
                              {card.perks
                                 .filter(p => ['lounge_access', 'free_checked_bag', 'travel_credit', 'companion_fare', 'companion_certificate', 'global_entry_tsa_precheck_credit', 'annual_hotel_credit', 'anniversary_points', 'anniversary_miles', 'hilton_status'].includes(p.type) || p.value_usd > 0)
                                 .slice(0, 3) // Show top 3 key perks
                                 .map(perk => (
                                    <li key={perk.type + (perk.description || '')} style={{ marginBottom: '0.1rem' }}>{perk.description || perk.type.replace(/_/g, ' ')} {perk.value_usd ? `($${perk.value_usd}${perk.frequency ? '/'+perk.frequency.replace('_',' ') : ''})` : ''}</li>
                                 ))
                              }
                           </ul>
                        </div>
                     )}
                      <div style={{marginTop: '0.5rem'}}>
                         <a href={card.reviewLink} target="_blank" rel="noopener noreferrer" style={{ marginRight: '1rem', fontSize: '0.9em', color: 'var(--primary-color)', textDecoration: 'none' }}>Review</a>
                         <a href={card.applyLink} target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.9em', color: 'var(--primary-color)', textDecoration: 'none' }}>Apply Link</a>
                      </div>
                   </div>
                 </li>
               ) : null
              ))
           ) : ( <li style={{ textAlign: 'center', color: '#777' }}>Enter spending values above to see card recommendations.</li> )}
         </ul>
      </div>


      {/* --- AI Section --- */}
       <div style={{ textAlign: 'center', marginTop: '2.5rem', borderTop: '1px solid #eee', paddingTop: '2rem' }}>
           <button
               onClick={getAiRecommendation}
               disabled={loading}
               style={{
                   padding: '0.8rem 1.8rem',
                   cursor: 'pointer',
                   background: 'var(--primary-color)',
                   color: 'white',
                   border: 'none',
                   borderRadius: '4px',
                   fontSize: '1.05rem',
                   fontWeight: '500',
                   transition: 'background-color 0.2s ease',
                }}
                onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#0056b3'}
                onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'var(--primary-color)'}
            >
               {loading ? 'Generating Recommendation...' : 'Get AI Recommendation'}
           </button>

           {error && <p style={{ color: 'var(--danger-color)', marginTop: '1rem', fontWeight: '500' }}>{error}</p>}

           {/* Improved AI Suggestion Display */}
           {aiSuggestion && (
           <div style={{
               maxWidth: '800px',
               margin: '2rem auto 0 auto', // Center block
               background: 'var(--ai-suggestion-bg)',
               padding: '1.5rem 2rem',
               borderRadius: '8px',
               border: '1px solid var(--ai-suggestion-border)',
               textAlign: 'left', // Left-align text inside
               lineHeight: '1.6', // Improve readability
               color: '#222', // Darker text color
            }}>
             <h4 style={{ marginTop: 0, marginBottom: '1rem', color: 'var(--label-color)', borderBottom: '1px solid var(--ai-suggestion-border)', paddingBottom: '0.5rem' }}>
                 Personalized AI Suggestion
             </h4>
             {/* Render the AI suggestion text respecting formatting */}
             {/* For full markdown support, consider react-markdown library */}
             <div
                 dangerouslySetInnerHTML={{ __html: formatAiOutput(aiSuggestion) }}
                 style={{ whiteSpace: 'pre-wrap' }} // Still useful for line breaks
             ></div>
           </div>
           )}
        </div>
    </div>
  );
}


// Helper function to do basic formatting for AI output (bold, bullets)
// For security with external HTML, use a sanitizer like DOMPurify
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