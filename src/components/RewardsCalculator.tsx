// File: src/components/RewardsCalculator.tsx

import React, { useState, useMemo } from 'react';
import cardDataRaw from '@/data/finalcreditcard.json';
import styles from '@/styles/rewards.module.css'; // Ensure path is correct

// --- Define Interfaces ---
interface CardCap { amount_usd: number; period: 'month' | 'quarter' | 'year'; applies_to_categories: string[]; }
interface CardReward { multiplier: number; category: string; notes: string | null; cap: CardCap | null; }
interface CardSignUpBonus { points: number | null; description: string; minSpend: number | null; durationDays: number | null; estimated_value_usd: number | null; }
interface CardRedemptionOptions { travel_statement_credit_cpp?: number; cash_back_cpp?: number; chase_travel_portal_cpp?: number; amex_travel_cpp?: number; cap_one_travel_cpp?: number; transfer_partner_average_cpp?: number; program_cpp?: number; [key: string]: number | undefined; }
interface CardPerk { type: string; description?: string; value_usd?: number; frequency?: string; notes?: string; estimated_value_usd?: number | null; }
interface DetailedCreditCard { "Card Name": string; Issuer: string; image: string; ratingValue?: number; applyLink: string; ratesandfees: string; reviewLink: string; "Card Type": "Personal" | "Business"; "Annual Fee": number; "APR Range (Purchases)": string | null; "Foreign Transaction Fee": number | null; "Intro APR": string | null; "Credit Score Requirement": string | null; signUpBonus: CardSignUpBonus; rewardProgram: string | null; rewards: CardReward[]; redemptionOptions: CardRedemptionOptions; perks: CardPerk[]; calculatedPoints?: number; calculatedRewardsValue?: number; calculatedAnnualPerkValue?: number; calculatedNetValue?: number; calculatedFirstYearNetValue?: number; }

// --- Load and Type the Data ---
let allCards: DetailedCreditCard[] = [];
if (cardDataRaw && Array.isArray((cardDataRaw as any).cards)) { allCards = (cardDataRaw as any).cards as DetailedCreditCard[]; } else { if (Array.isArray(cardDataRaw)) { cardDataRaw.forEach((dataPart: any) => { if (dataPart && Array.isArray(dataPart.cards)) { allCards = allCards.concat(dataPart.cards as DetailedCreditCard[]); } }); } if (allCards.length === 0) { console.error("Unexpected structure in finalcreditcard.json. Expected { cards: [...] }."); } }
const cards: DetailedCreditCard[] = allCards.filter(card => card && card["Card Name"]);

// --- Define Granular User Input Categories and State ---
const categoryList = [ 'dining', 'groceries', 'gas', 'flights', 'hotels', 'streaming', 'transit', 'onlineShopping', 'drugstores', 'other'] as const;
type SpendInput = { [key in typeof categoryList[number]]: number; };
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
  const [showComparison, setShowComparison] = useState(false);
  const [cardsToCompare, setCardsToCompare] = useState<DetailedCreditCard[]>([]);

  // --- Helper Functions ---
   const getSelectedCpp = (card: DetailedCreditCard, strategy: RedemptionStrategy): number => {
        const options = card.redemptionOptions; if (!options) return 1.0;
        switch (strategy) {
            case 'cash_back': return options.cash_back_cpp ?? options.travel_statement_credit_cpp ?? 1.0;
            case 'travel_portal': return options.chase_travel_portal_cpp ?? options.amex_travel_cpp ?? options.cap_one_travel_cpp ?? options.travel_statement_credit_cpp ?? 1.0;
            case 'transfer_partners': return options.transfer_partner_average_cpp ?? options.chase_travel_portal_cpp ?? 1.5;
            case 'default': default: return options.transfer_partner_average_cpp ?? options.chase_travel_portal_cpp ?? options.amex_travel_cpp ?? options.cap_one_travel_cpp ?? options.travel_statement_credit_cpp ?? options.cash_back_cpp ?? 1.0;
        }
   }
   const formatPerkForCompare = (perk: CardPerk): string => {
       let text = perk.description || perk.type.replace(/_/g, ' '); if (perk.value_usd) { text += ` ($${perk.value_usd}${perk.frequency ? '/'+perk.frequency.replace('_',' ') : ''})`; } else if (perk.estimated_value_usd) { text += ` (~$${perk.estimated_value_usd} value)`; } return text;
   }

  // --- Event Handlers ---
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
       const { name, value } = e.target; setSpend((prev) => ({ ...prev, [name]: parseFloat(value) || 0, }));
  };
  const handleRedemptionChange = (e: React.ChangeEvent<HTMLSelectElement>) => { setRedemptionStrategy(e.target.value as RedemptionStrategy); }
  const handleCompareClick = () => { setCardsToCompare(results.slice(0, 3)); setShowComparison(true); }

  // --- Core Calculation Logic (useMemo Hook) ---
   const results: DetailedCreditCard[] = useMemo(() => {
        const categoryMap: { [key in keyof SpendInput]?: string[] } = { dining: ['dining'], groceries: ['groceries_us', 'groceries', 'online_grocery'], gas: ['gas_us', 'gas'], flights: ['flights_direct', 'flights_amex_travel', 'flights_chase_portal', 'flights_capital_one_portal', 'airlines', 'southwest_airlines', 'united_airlines', 'jetblue', 'hawaiian_airlines', 'delta_airlines', 'american_airlines', 'british_airways', 'alaska_airlines', 'aircanada'], hotels: ['hotel', 'hotel_amex_travel', 'hotel_chase_portal', 'hotel_capital_one_portal', 'hilton_hotels', 'hyatt_hotels'], streaming: ['streaming'], transit: ['transit'], onlineShopping: ['online_retail_us'], drugstores: ['drugstores'], other: ['other'], };
        const getOtherMultiplier = (card: DetailedCreditCard): number => { const otherRule = Array.isArray(card.rewards) ? card.rewards.find(r => r.category === 'other') : undefined; return otherRule?.multiplier ?? 1; }
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
   const getAiRecommendation = async () => {
       setLoading(true); setError(''); try {
           const topCardsContext = results.slice(0, 5).map(card => { const selectedCpp = getSelectedCpp(card, redemptionStrategy); return { cardName: card["Card Name"], issuer: card.Issuer, cardType: card["Card Type"], annualFee: card["Annual Fee"], estimatedFirstYearNetValue: card.calculatedFirstYearNetValue, estimatedOngoingNetValue: card.calculatedNetValue, calculatedAnnualRewardsValue: card.calculatedRewardsValue, calculatedAnnualPerkValue: card.calculatedAnnualPerkValue, calculatedAnnualPoints: card.calculatedPoints, cppUsedForValue: selectedCpp, redemptionStrategyUsed: redemptionStrategy, signUpBonusValue: card.signUpBonus?.estimated_value_usd ?? 0, signUpBonusDescription: card.signUpBonus?.description || "N/A", topRewardCategories: Array.isArray(card.rewards) ? card.rewards .filter(r => r.multiplier > 1 && r.category !== 'other') .sort((a, b) => b.multiplier - a.multiplier) .slice(0, 4) .map(r => ({ category: r.category, multiplier: r.multiplier, notes: r.notes, cap: r.cap ? `$${r.cap.amount_usd}/${r.cap.period}` : null })) : [], keyPerks: Array.isArray(card.perks) ? card.perks .filter(p => ['lounge_access', 'free_checked_bag', 'travel_credit', 'companion_fare', 'companion_certificate', 'global_entry_tsa_precheck_credit', 'annual_hotel_credit', 'anniversary_points', 'anniversary_miles', 'hilton_status'].includes(p.type) || p.value_usd > 0 || p.estimated_value_usd > 0) .map(p => ({ type: p.type, description: p.description || p.type.replace(/_/g, ' '), value: p.value_usd || p.estimated_value_usd, frequency: p.frequency })) .slice(0, 5) : [], }; });
           const currentAnnualSpend = Object.entries(spend).reduce((acc, [key, monthlySpend]) => { acc[key as keyof SpendInput] = monthlySpend * 12; return acc; }, {} as { [key in keyof SpendInput]: number });
           const res = await fetch('/api/gpt-recommend', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ spend: spend, annualSpend: currentAnnualSpend, redemptionStrategy: redemptionStrategy, topCards: topCardsContext }), });
           if (!res.ok) throw new Error(`Server responded ${res.status}`); const data = await res.json(); setAiSuggestion(data.recommendation);
       } catch (err: any) { console.error('AI request failed:', err); setError('AI recommendation failed.'); } finally { setLoading(false); }
   };

   // --- formatAiOutput helper ---
   function formatAiOutput(text: string): string {
        let formatted = text .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') .replace(/\* (.*?)(?=\n\* |\n\n|$)/g, '<li>$1</li>');
        if (formatted.includes('<li>')) { formatted = formatted.replace(/\n*<li>/g, '<li>').replace(/<\/li>\n*/g, '</li>'); }
        return formatted;
   }

  // --- Render JSX ---
  return (
    <div className={styles.container}>

      <h2 className={styles.heroTitle}>
          AI-Powered Travel Rewards Calculator
      </h2>

       {/* Controls Section */}
       <div className={styles.selectorGroup}>
            <div>
                <label htmlFor="redemptionStrategy">Value Points As:</label>
                <select
                    id="redemptionStrategy"
                    value={redemptionStrategy}
                    onChange={handleRedemptionChange}
                    className={styles.selectBox}
                >
                    <option value="default">Best Default Value</option>
                    <option value="cash_back">Cash Back / Statement Credit</option>
                    <option value="travel_portal">Travel Portal Booking</option>
                    <option value="transfer_partners">Transfer Partners (Est. Avg.)</option>
                </select>
            </div>
       </div>

      <p className={styles.heroDescription}>
          Enter your estimated <strong>monthly</strong> spending per category:
      </p>

      {/* Spending Input Form */}
      <form className={styles.inputGrid}>
        {categoryList.map((category) => (
          <div key={category} className={styles.inputGroup}>
            <label htmlFor={category}>
              {category === 'onlineShopping' ? 'Online Shopping (US)' : category.replace(/([A-Z])/g, ' $1')} (Monthly $):
            </label>
            <input
                type="number" id={category} name={category}
                value={spend[category as keyof SpendInput]} onChange={handleChange}
                min={0} step={10} placeholder="$0"
            />
          </div>
        ))}
      </form>

      {/* --- Results Section --- */}
      <div>
        <h3 className={styles.resultsTitle}>
            Top Cards Based on Your Spend
        </h3>
        {/* Buttons Container */}
         <div className={styles.buttonGroup}>
             {results && results.length > 0 && (
                 <button
                     onClick={getAiRecommendation}
                     disabled={loading}
                     className={styles.primaryBtn}
                 >
                     {loading ? 'Generating AI Suggestion...' : 'Get AI Suggestion'}
                 </button>
             )}
             {results && results.length >= 3 && !showComparison && (
                 <button
                     onClick={handleCompareClick}
                     className={styles.secondaryBtn}
                 >
                     Compare Top 3 Cards
                 </button>
             )}
         </div>

         {/* Display Error Below Buttons */}
         {error && <p className={styles.errorMessage}>{error}</p>}

        <ul className={styles.cardList}>
             {results && results.length > 0 ? ( results.slice(0, 10).map((card, index) => ( card && card["Card Name"] ? (
                 <li key={card["Card Name"]} className={styles.cardItem}>
                   <img src={card.image || 'placeholder.png'} alt={card["Card Name"]} className={styles.cardImage} onError={(e) => { (e.target as HTMLImageElement).src = 'placeholder.png'; }} />
                   <div className={styles.cardDetails}>
                     <div className={styles.cardTitle}> {/* Added wrapper div */}
                        <strong>{index + 1}. {card.Issuer} - {card["Card Name"]} <span>({card["Card Type"]})</span></strong>
                     </div>
                     <div className={styles.cardValues}>
                         <div><strong>Est. 1st Year:</strong> <span className={(card.calculatedFirstYearNetValue ?? 0) >= 0 ? styles.valueGood : styles.valueBad}>${(card.calculatedFirstYearNetValue ?? 0).toFixed(2)}</span></div>
                         <div><strong>Ongoing:</strong> <span className={styles.valueOngoing}>${(card.calculatedNetValue ?? 0).toFixed(2)}</span>/yr</div>
                     </div>
                     <small className={styles.cardSubtext}>
                        (Rewards: ${(card.calculatedRewardsValue ?? 0).toFixed(2)} + Perks: ${(card.calculatedAnnualPerkValue ?? 0).toFixed(2)} - Fee: ${card["Annual Fee"]}) | Est. Points: {card.calculatedPoints ?? 0}
                     </small>
                     {card.signUpBonus && card.signUpBonus.estimated_value_usd > 0 && (
                         <div className={styles.bonusBox}>
                            <strong>Bonus:</strong> {card.signUpBonus.description} (Value: ~${card.signUpBonus.estimated_value_usd})
                         </div>
                     )}
                     {Array.isArray(card.perks) && card.perks.filter(p => ['lounge_access', 'free_checked_bag', 'travel_credit', 'companion_fare', 'companion_certificate', 'global_entry_tsa_precheck_credit', 'annual_hotel_credit', 'anniversary_points', 'anniversary_miles', 'hilton_status'].includes(p.type) || p.value_usd > 0 || p.estimated_value_usd > 0).length > 0 && (
                         <div className={styles.perksSection}>
                            <strong>Key Perks:</strong>
                            <ul>
                               {card.perks
                                 .filter(p => ['lounge_access', 'free_checked_bag', 'travel_credit', 'companion_fare', 'companion_certificate', 'global_entry_tsa_precheck_credit', 'annual_hotel_credit', 'anniversary_points', 'anniversary_miles', 'hilton_status'].includes(p.type) || p.value_usd > 0 || p.estimated_value_usd > 0)
                                 .slice(0, 3)
                                 .map(perk => ( <li key={perk.type + (perk.description || '')}>{formatPerkForCompare(perk)}</li> ))
                               }
                            </ul>
                         </div>
                     )}
                      {/* ADDED CLASSES TO LINKS */}
                      <div className={styles.cardLinks}>
                         <a href={card.reviewLink} target="_blank" rel="noopener noreferrer" className={styles.reviewLink}>
                             Read Review
                         </a>
                         <a href={card.applyLink} target="_blank" rel="noopener noreferrer" className={styles.applyLink}>
                             Apply Now
                         </a>
                      </div>
                   </div>
                 </li> ) : null )) ) : ( <li className={styles.noResults}>Enter your spending details above to see card recommendations.</li> )}
        </ul>
      </div>

       {/* --- Comparison Modal/Section --- */}
       {showComparison && cardsToCompare.length > 0 && (
          <div className={styles.comparisonOverlay}>
              <div className={styles.comparisonContent}>
                  <button onClick={() => setShowComparison(false)} className={styles.closeButton}> &times; </button>
                  <h3>Compare Top {cardsToCompare.length} Cards</h3>
                  {/* ADDED WRAPPER DIV */}
                  <div className={styles.comparisonTableWrapper}>
                      <div className={styles.comparisonGrid} style={{ gridTemplateColumns: `minmax(160px, 1.2fr) repeat(${cardsToCompare.length}, minmax(180px, 1fr))`}}>
                          {/* Header Row */}
                          <div className={`${styles.compareCell} ${styles.compareCellHeader} ${styles.compareCellLabel}`}>Feature</div>
                          {cardsToCompare.map(card => ( <div key={card["Card Name"]} className={`${styles.compareCell} ${styles.compareCellHeader}`}> <img src={card.image || 'placeholder.png'} alt={card["Card Name"]} className={styles.compareCardImage} onError={(e) => { (e.target as HTMLImageElement).src = 'placeholder.png'; }}/> <div>{card["Card Name"]}</div> <div className={styles.compareIssuer}>{card.Issuer}</div> </div> ))}
                          {/* Data Rows */}
                          {/* Annual Fee */}
                          <div className={`${styles.compareCell} ${styles.compareCellLabel}`}>Annual Fee</div>
                          {cardsToCompare.map((c, i) => <div key={i} className={`${styles.compareCell} ${styles.compareCellData}`}>{`$${c["Annual Fee"].toFixed(2)}`}</div>)}
                          {Array.from({ length: 3 - cardsToCompare.length }).map((_, i) => <div key={`empty-fee-${i}`} className={`${styles.compareCell} ${styles.compareCellData}`}>-</div>)}
                          {/* Est. First Year */}
                          <div className={`${styles.compareCell} ${styles.compareCellLabel}`}>Est. First Year Value</div>
                          {cardsToCompare.map((c,i) => <div key={i} className={`${styles.compareCell} ${styles.compareCellData}`}><span className={(c.calculatedFirstYearNetValue ?? 0) >= 0 ? styles.valueGood : styles.valueBad}>${(c.calculatedFirstYearNetValue ?? 0).toFixed(2)}</span></div>)}
                          {Array.from({ length: 3 - cardsToCompare.length }).map((_, i) => <div key={`empty-fyv-${i}`} className={`${styles.compareCell} ${styles.compareCellData}`}>-</div>)}
                           {/* Est. Ongoing Value */}
                           <div className={`${styles.compareCell} ${styles.compareCellLabel}`}>Est. Ongoing Value</div>
                           {cardsToCompare.map((c,i) => <div key={i} className={`${styles.compareCell} ${styles.compareCellData}`}><span className={styles.valueOngoing}>${(c.calculatedNetValue ?? 0).toFixed(2)}</span></div>)}
                           {Array.from({ length: 3 - cardsToCompare.length }).map((_, i) => <div key={`empty-ogv-${i}`} className={`${styles.compareCell} ${styles.compareCellData}`}>-</div>)}
                           {/* Sign-Up Bonus */}
                           <div className={`${styles.compareCell} ${styles.compareCellLabel}`}>Sign-Up Bonus</div>
                           {cardsToCompare.map((c,i) => <div key={i} className={`${styles.compareCell} ${styles.compareCellData} ${styles.smallText}`}>{c.signUpBonus?.description || 'N/A'} <span>(~$${c.signUpBonus?.estimated_value_usd ?? 0})</span></div>)}
                           {Array.from({ length: 3 - cardsToCompare.length }).map((_, i) => <div key={`empty-bonus-${i}`} className={`${styles.compareCell} ${styles.compareCellData}`}>-</div>)}
                           {/* Top Rewards */}
                           <div className={`${styles.compareCell} ${styles.compareCellLabel}`}>Top Reward Rates</div>
                           {cardsToCompare.map((c,i) => <div key={i} className={`${styles.compareCell} ${styles.compareCellData}`}> <ul className={styles.compareList}> {(Array.isArray(c.rewards) ? c.rewards.filter(r => r.multiplier > 1 && r.category !== 'other').sort((a,b) => b.multiplier - a.multiplier).slice(0, 3) : []) .map(r => <li key={r.category}>{r.multiplier}x {r.category.replace(/_/g,' ')}{r.cap ? ` ($${r.cap.amount_usd}/${r.cap.period})`:''}</li>)} <li>{c.rewards.find(r => r.category === 'other')?.multiplier ?? 1}x Other</li> </ul> </div>)}
                           {Array.from({ length: 3 - cardsToCompare.length }).map((_, i) => <div key={`empty-rewards-${i}`} className={`${styles.compareCell} ${styles.compareCellData}`}>-</div>)}
                           {/* Key Perks */}
                            <div className={`${styles.compareCell} ${styles.compareCellLabel}`}>Key Perks</div>
                            {cardsToCompare.map((c,i) => <div key={i} className={`${styles.compareCell} ${styles.compareCellData}`}> <ul className={styles.compareList}> {(Array.isArray(c.perks) ? c.perks.filter(p => ['lounge_access', 'free_checked_bag', 'travel_credit', 'companion_fare', 'companion_certificate', 'global_entry_tsa_precheck_credit', 'annual_hotel_credit', 'anniversary_points', 'anniversary_miles', 'hilton_status'].includes(p.type) || p.value_usd > 0 || p.estimated_value_usd > 0).slice(0, 4) : []) .map(p => <li key={p.type+(p.description || '')}>{formatPerkForCompare(p)}</li>)} </ul> </div>)}
                            {Array.from({ length: 3 - cardsToCompare.length }).map((_, i) => <div key={`empty-perks-${i}`} className={`${styles.compareCell} ${styles.compareCellData}`}>-</div>)}
                            {/* Redemption Strategy */}
                            <div className={`${styles.compareCell} ${styles.compareCellLabel}`}>Redemption Strategy</div>
                            {cardsToCompare.map((c,i) => <div key={i} className={`${styles.compareCell} ${styles.compareCellData} ${styles.italicText}`}>{redemptionStrategy.replace('_', ' ')}</div>)}
                            {Array.from({ length: 3 - cardsToCompare.length }).map((_, i) => <div key={`empty-strat-${i}`} className={`${styles.compareCell} ${styles.compareCellData}`}>-</div>)}
                            {/* CPP Used */}
                            <div className={`${styles.compareCell} ${styles.compareCellLabel}`}>CPP Used</div>
                            {cardsToCompare.map((c,i) => <div key={i} className={`${styles.compareCell} ${styles.compareCellData}`}>{getSelectedCpp(c, redemptionStrategy).toFixed(2)}</div>)}
                            {Array.from({ length: 3 - cardsToCompare.length }).map((_, i) => <div key={`empty-cpp-${i}`} className={`${styles.compareCell} ${styles.compareCellData}`}>-</div>)}
                            {/* Links */}
                            <div className={`${styles.compareCell} ${styles.compareCellLabel}`}>Links</div>
                            {cardsToCompare.map((c,i) => <div key={i} className={`${styles.compareCell} ${styles.compareCellData}`}>
                                {/* ADDED CLASSES TO COMPARISON LINKS */}
                                <a href={c.reviewLink} target="_blank" rel="noopener noreferrer" className={`${styles.compareLink} ${styles.reviewLink}`}>Review</a>
                                <a href={c.applyLink} target="_blank" rel="noopener noreferrer" className={`${styles.compareLink} ${styles.applyLink}`}>Apply</a>
                            </div>)}
                            {Array.from({ length: 3 - cardsToCompare.length }).map((_, i) => <div key={`empty-links-${i}`} className={`${styles.compareCell} ${styles.compareCellData}`}>-</div>)}

                      </div> {/* End Comparison Grid */}
                  </div> {/* End Wrapper Div */}
              </div> {/* End Comparison Content Box */}
          </div> // End Overlay
       )}

      {/* --- AI Section --- */}
       <div className={styles.aiSection}>
           {aiSuggestion && (
           <div className={styles.aiSuggestionBox}>
             <h4> Personalized AI Suggestion </h4>
             <div dangerouslySetInnerHTML={{ __html: formatAiOutput(aiSuggestion) }} ></div>
           </div>
           )}
        </div>
    </div>
  );
}


// (formatAiOutput helper function remains the same)
function formatAiOutput(text: string): string {
    let formatted = text .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') .replace(/\* (.*?)(?=\n\* |\n\n|$)/g, '<li>$1</li>');
    if (formatted.includes('<li>')) { formatted = formatted.replace(/\n*<li>/g, '<li>').replace(/<\/li>\n*/g, '</li>'); }
    return formatted;
}