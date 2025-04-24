// File: src/components/RewardsCalculator.tsx

import React, { useState, useMemo } from 'react';
// Assuming your data file is correctly named and placed
import cardDataRaw from '@/data/finalcreditcard.json'; // Use the actual path to your detailed JSON

// --- Define Interfaces ---
// (Interfaces remain the same)
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
// (categoryList and defaultSpend remain the same)
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
  // (getSelectedCpp and formatPerkForCompare remain the same)
   const getSelectedCpp = (card: DetailedCreditCard, strategy: RedemptionStrategy): number => { /* ... same logic ... */
        const options = card.redemptionOptions; if (!options) return 1.0;
        switch (strategy) {
            case 'cash_back': return options.cash_back_cpp ?? options.travel_statement_credit_cpp ?? 1.0;
            case 'travel_portal': return options.chase_travel_portal_cpp ?? options.amex_travel_cpp ?? options.cap_one_travel_cpp ?? options.travel_statement_credit_cpp ?? 1.0;
            case 'transfer_partners': return options.transfer_partner_average_cpp ?? options.chase_travel_portal_cpp ?? 1.5;
            case 'default': default: return options.transfer_partner_average_cpp ?? options.chase_travel_portal_cpp ?? options.amex_travel_cpp ?? options.cap_one_travel_cpp ?? options.travel_statement_credit_cpp ?? options.cash_back_cpp ?? 1.0;
        }
   }
   const formatPerkForCompare = (perk: CardPerk): string => { /* ... same logic ... */
       let text = perk.description || perk.type.replace(/_/g, ' '); if (perk.value_usd) { text += ` ($${perk.value_usd}${perk.frequency ? '/'+perk.frequency.replace('_',' ') : ''})`; } else if (perk.estimated_value_usd) { text += ` (~$${perk.estimated_value_usd} value)`; } return text;
   }

  // --- Event Handlers ---
  // (handleChange and handleRedemptionChange remain the same)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => { /* ... same logic ... */
       const { name, value } = e.target; setSpend((prev) => ({ ...prev, [name]: parseFloat(value) || 0, }));
  };
  const handleRedemptionChange = (e: React.ChangeEvent<HTMLSelectElement>) => { setRedemptionStrategy(e.target.value as RedemptionStrategy); }
  // (handleCompareClick remains the same)
  const handleCompareClick = () => { setCardsToCompare(results.slice(0, 3)); setShowComparison(true); }

  // --- Core Calculation Logic (useMemo Hook) ---
  // (useMemo hook remains the same)
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
  // (getAiRecommendation remains the same)
   const getAiRecommendation = async () => { /* ... same as previous version ... */
       setLoading(true); setError(''); try {
           const topCardsContext = results.slice(0, 5).map(card => { const selectedCpp = getSelectedCpp(card, redemptionStrategy); return { cardName: card["Card Name"], issuer: card.Issuer, cardType: card["Card Type"], annualFee: card["Annual Fee"], estimatedFirstYearNetValue: card.calculatedFirstYearNetValue, estimatedOngoingNetValue: card.calculatedNetValue, calculatedAnnualRewardsValue: card.calculatedRewardsValue, calculatedAnnualPerkValue: card.calculatedAnnualPerkValue, calculatedAnnualPoints: card.calculatedPoints, cppUsedForValue: selectedCpp, redemptionStrategyUsed: redemptionStrategy, signUpBonusValue: card.signUpBonus?.estimated_value_usd ?? 0, signUpBonusDescription: card.signUpBonus?.description || "N/A", topRewardCategories: Array.isArray(card.rewards) ? card.rewards .filter(r => r.multiplier > 1 && r.category !== 'other') .sort((a, b) => b.multiplier - a.multiplier) .slice(0, 4) .map(r => ({ category: r.category, multiplier: r.multiplier, notes: r.notes, cap: r.cap ? `$${r.cap.amount_usd}/${r.cap.period}` : null })) : [], keyPerks: Array.isArray(card.perks) ? card.perks .filter(p => ['lounge_access', 'free_checked_bag', 'travel_credit', 'companion_fare', 'companion_certificate', 'global_entry_tsa_precheck_credit', 'annual_hotel_credit', 'anniversary_points', 'anniversary_miles', 'hilton_status'].includes(p.type) || p.value_usd > 0 || p.estimated_value_usd > 0) .map(p => ({ type: p.type, description: p.description || p.type.replace(/_/g, ' '), value: p.value_usd || p.estimated_value_usd, frequency: p.frequency })) .slice(0, 5) : [], }; });
           const currentAnnualSpend = Object.entries(spend).reduce((acc, [key, monthlySpend]) => { acc[key as keyof SpendInput] = monthlySpend * 12; return acc; }, {} as { [key in keyof SpendInput]: number });
           const res = await fetch('/api/gpt-recommend', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ spend: spend, annualSpend: currentAnnualSpend, redemptionStrategy: redemptionStrategy, topCards: topCardsContext }), });
           if (!res.ok) throw new Error(`Server responded ${res.status}`); const data = await res.json(); setAiSuggestion(data.recommendation);
       } catch (err: any) { console.error('AI request failed:', err); setError('AI recommendation failed.'); } finally { setLoading(false); }
   };

   // (formatAiOutput helper remains the same)
   function formatAiOutput(text: string): string { /* ... same as previous version ... */
        let formatted = text .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') .replace(/\* (.*?)(?=\n\* |\n\n|$)/g, '<li>$1</li>');
        if (formatted.includes('<li>')) { formatted = formatted.replace(/\n*<li>/g, '<li>').replace(/<\/li>\n*/g, '</li>'); }
        return formatted;
   }

  // --- Render JSX ---
  return (
    // Apply base styles and CSS variables
    <div style={{
        padding: '2rem clamp(1rem, 5vw, 3rem)', // Responsive padding
        fontFamily: '"Inter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif', // Modern font stack
        backgroundColor: '#f9fafb', // Lighter overall background
        color: '#374151', // Default text color (Gray-700)
        '--input-border-color': '#d1d5db', // Gray-300
        '--input-focus-border': '#3b82f6', // Blue-500
        '--input-bg-color': '#ffffff',
        '--label-color': '#111827', // Gray-900
        '--primary-color': '#2563eb', // Blue-600
        '--primary-hover-color': '#1d4ed8', // Blue-700
        '--secondary-color': '#6b7280', // Gray-500
        '--secondary-hover-color': '#4b5563', // Gray-600
        '--light-bg': '#ffffff', // White background for controls/cards
        '--ai-suggestion-bg': '#eff6ff', // Blue-50
        '--ai-suggestion-border': '#bfdbfe', // Blue-200
        '--success-color': '#16a34a', // Green-600
        '--danger-color': '#dc2626', // Red-600
        '--warning-bg': '#fefce8', // Yellow-50
        '--warning-border': '#fef08a', // Yellow-200
        '--warning-text': '#854d0e', // Yellow-900
     } as React.CSSProperties}>

      <h2 style={{
          textAlign: 'center',
          marginBottom: '2rem', // Increased margin
          color: 'var(--label-color)',
          fontSize: 'clamp(1.5rem, 5vw, 2.25rem)', // Responsive font size
          fontWeight: '700',
      }}>
          AI-Powered Travel Rewards Calculator
      </h2>

       {/* Controls Section */}
       <div style={{
           display: 'flex', justifyContent: 'center', gap: '1.5rem',
           marginBottom: '2.5rem', padding: '1rem 1.5rem',
           backgroundColor: 'var(--light-bg)', borderRadius: '8px',
           flexWrap: 'wrap', maxWidth: '600px', margin: '0 auto 2.5rem auto',
           boxShadow: '0 1px 3px rgba(0,0,0,0.05)', border: '1px solid var(--input-border-color)'
        }}>
            <div>
                <label htmlFor="redemptionStrategy" style={{ marginRight: '0.5rem', fontWeight: '500', color: 'var(--label-color)', fontSize: '0.9em' }}>Value Points As:</label>
                <select id="redemptionStrategy" value={redemptionStrategy} onChange={handleRedemptionChange} style={{ padding: '0.6rem 1rem', border: '1px solid var(--input-border-color)', borderRadius: '6px', backgroundColor: 'var(--input-bg-color)', minWidth: '200px', cursor: 'pointer', fontSize: '0.9em' }}>
                    <option value="default">Best Default Value</option>
                    <option value="cash_back">Cash Back / Statement Credit</option>
                    <option value="travel_portal">Travel Portal Booking</option>
                    <option value="transfer_partners">Transfer Partners (Est. Avg.)</option>
                </select>
            </div>
       </div>

      <p style={{ textAlign: 'center', color: '#4b5563', marginBottom: '1.5rem', fontSize: '1.05em' }}>
          Enter your estimated <strong>monthly</strong> spending per category:
      </p>

      {/* Spending Input Form */}
      <form style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', // Slightly wider min
          gap: '1.5rem 1.8rem', marginBottom: '3rem', maxWidth: '1000px', margin: '0 auto 3rem auto'
       }}>
        {categoryList.map((category) => (
          <div key={category} style={{ display: 'flex', flexDirection: 'column' }}>
            <label htmlFor={category} style={{ marginBottom: '0.5rem', textTransform: 'capitalize', fontWeight: '500', color: 'var(--label-color)', fontSize: '0.9em' }}>
              {category === 'onlineShopping' ? 'Online Shopping (US)' : category.replace(/([A-Z])/g, ' $1')} (Monthly $):
            </label>
            <input type="number" id={category} name={category} value={spend[category as keyof SpendInput]} onChange={handleChange} min={0} step={10} placeholder="$0" style={{ padding: '0.8rem', border: '1px solid var(--input-border-color)', borderRadius: '6px', fontSize: '1rem', backgroundColor: 'var(--input-bg-color)', boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.05)', transition: 'border-color 0.2s ease, box-shadow 0.2s ease', }}
             // Add focus style effect (optional, requires managing focus state or CSS classes)
             // onFocus={(e) => { e.target.style.borderColor = 'var(--input-focus-border)'; e.target.style.boxShadow = `0 0 0 2px rgba(59, 130, 246, 0.3)`; }}
             // onBlur={(e) => { e.target.style.borderColor = 'var(--input-border-color)'; e.target.style.boxShadow = 'inset 0 1px 2px rgba(0,0,0,0.05)'; }}
            />
          </div>
        ))}
      </form>

      {/* --- Results Section --- */}
      <div style={{ marginTop: '2rem' }}>
        <h3 style={{ textAlign: 'center', marginBottom: '1.5rem', color: 'var(--label-color)', fontWeight: '600', fontSize: '1.5rem' }}>
            Top Cards Based on Your Spend
        </h3>
        {/* Moved Buttons Container Here */}
         <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
             {results && results.length > 0 && (
                 <button
                     onClick={getAiRecommendation}
                     disabled={loading}
                     style={{ padding: '0.7rem 1.5rem', cursor: 'pointer', background: 'var(--primary-color)', color: 'white', border: 'none', borderRadius: '6px', fontSize: '1rem', fontWeight: '500', transition: 'background-color 0.2s ease, transform 0.1s ease', }}
                     onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'var(--primary-hover-color)'}
                     onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'var(--primary-color)'}
                     onMouseDown={(e) => e.currentTarget.style.transform = 'scale(0.98)'}
                     onMouseUp={(e) => e.currentTarget.style.transform = 'scale(1)'}
                 >
                     {loading ? 'Generating AI Suggestion...' : 'Get AI Suggestion'}
                 </button>
             )}
             {results && results.length >= 3 && !showComparison && (
                 <button
                     onClick={handleCompareClick}
                     style={{ padding: '0.7rem 1.5rem', cursor: 'pointer', background: 'var(--secondary-color)', color: 'white', border: 'none', borderRadius: '6px', fontSize: '1rem', fontWeight: '500', transition: 'background-color 0.2s ease, transform 0.1s ease', }}
                     onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'var(--secondary-hover-color)'}
                     onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'var(--secondary-color)'}
                     onMouseDown={(e) => e.currentTarget.style.transform = 'scale(0.98)'}
                     onMouseUp={(e) => e.currentTarget.style.transform = 'scale(1)'}
                 >
                     Compare Top 3 Cards
                 </button>
             )}
         </div>

         {/* Display Error Below Buttons */}
         {error && <p style={{ color: 'var(--danger-color)', marginTop: '-1rem', marginBottom: '1.5rem', fontWeight: '500', textAlign: 'center' }}>{error}</p>}

        <ul style={{ listStyle: 'none', padding: 0, maxWidth: '850px', margin: '0 auto' }}>
           {/* Results list item styling */}
             {results && results.length > 0 ? ( results.slice(0, 10).map((card, index) => ( card && card["Card Name"] ? ( <li key={card["Card Name"]} style={{ border: '1px solid var(--input-border-color)', borderRadius: '10px', padding: '1.5rem', marginBottom: '1.5rem', display: 'flex', gap: '1.5rem', flexWrap: 'nowrap', backgroundColor: 'var(--light-bg)', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', transition: 'box-shadow 0.2s ease' }}> <img src={card.image || 'placeholder.png'} alt={card["Card Name"]} style={{ height: '60px', width: '95px', objectFit: 'contain', flexShrink: 0, alignSelf: 'center', borderRadius: '4px' }} onError={(e) => { (e.target as HTMLImageElement).src = 'placeholder.png'; }} /> <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}> <strong style={{ fontSize: '1.15em', color: 'var(--label-color)', fontWeight: '600' }}>{index + 1}. {card.Issuer} - {card["Card Name"]} <span style={{ fontSize: '0.8em', color: '#6b7280', fontWeight: '400' }}>({card["Card Type"]})</span></strong> <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', fontSize: '1em', borderBottom: '1px dashed #eee', paddingBottom: '0.6rem', marginBottom: '0.4rem' }}> <div><strong>Est. 1st Year:</strong> <span style={{ color: (card.calculatedFirstYearNetValue ?? 0) >= 0 ? 'var(--success-color)' : 'var(--danger-color)', fontWeight: 'bold', fontSize: '1.1em' }}>${(card.calculatedFirstYearNetValue ?? 0).toFixed(2)}</span></div> <div><strong>Ongoing:</strong> <span style={{ fontWeight: 'bold' }}>${(card.calculatedNetValue ?? 0).toFixed(2)}</span>/yr</div> </div> <small style={{ color: '#4b5563', fontSize: '0.88em', lineHeight: 1.5 }}> (Rewards: ${(card.calculatedRewardsValue ?? 0).toFixed(2)} + Perks: ${(card.calculatedAnnualPerkValue ?? 0).toFixed(2)} - Fee: ${card["Annual Fee"]}) | Est. Points: {card.calculatedPoints ?? 0} </small> {card.signUpBonus && card.signUpBonus.estimated_value_usd > 0 && ( <div style={{ fontSize: '0.88em', background: 'var(--warning-bg)', padding: '0.4rem 0.8rem', borderRadius: '6px', border: '1px solid var(--warning-border)', color: 'var(--warning-text)' }}> <strong style={{color: '#a16207'}}>Bonus:</strong> {card.signUpBonus.description} (Value: ~${card.signUpBonus.estimated_value_usd}) </div> )} {Array.isArray(card.perks) && card.perks.filter(p => ['lounge_access', 'free_checked_bag', 'travel_credit', 'companion_fare', 'companion_certificate', 'global_entry_tsa_precheck_credit', 'annual_hotel_credit', 'anniversary_points', 'anniversary_miles', 'hilton_status'].includes(p.type) || p.value_usd > 0 || p.estimated_value_usd > 0).length > 0 && ( <div style={{ fontSize: '0.88em' }}> <strong style={{color: '#374151'}}>Key Perks:</strong> <ul style={{ margin: '0.2rem 0 0 1rem', padding: 0, listStyle: 'disc', color: '#4b5563' }}> {card.perks .filter(p => ['lounge_access', 'free_checked_bag', 'travel_credit', 'companion_fare', 'companion_certificate', 'global_entry_tsa_precheck_credit', 'annual_hotel_credit', 'anniversary_points', 'anniversary_miles', 'hilton_status'].includes(p.type) || p.value_usd > 0 || p.estimated_value_usd > 0) .slice(0, 3) .map(perk => ( <li key={perk.type + (perk.description || '')} style={{ marginBottom: '0.2rem' }}>{formatPerkForCompare(perk)}</li> )) } </ul> </div> )} <div style={{marginTop: '0.6rem'}}> <a href={card.reviewLink} target="_blank" rel="noopener noreferrer" style={{ marginRight: '1.5rem', fontSize: '0.9em', color: 'var(--primary-color)', textDecoration: 'none', fontWeight: '500', transition: 'color 0.2s ease' }}>Read Review</a> <a href={card.applyLink} target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.9em', color: 'var(--primary-color)', textDecoration: 'none', fontWeight: '500', transition: 'color 0.2s ease' }}>Apply Now</a> </div> </div> </li> ) : null )) ) : ( <li style={{ textAlign: 'center', color: '#6b7280', padding: '2rem 0' }}>Enter your spending details above to see card recommendations.</li> )}
        </ul>
      </div>

       {/* --- Comparison Modal/Section --- */}
       {/* Enhanced styling for modal and table */}
       {showComparison && cardsToCompare.length > 0 && (
          <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0, 0, 0, 0.7)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000, overflowY: 'auto', padding: '1rem' }}>
              <div style={{ backgroundColor: 'white', borderRadius: '12px', padding: '2rem 2.5rem', width: '95%', maxWidth: '1200px', maxHeight: '90vh', overflowY: 'auto', position: 'relative', boxShadow: '0 10px 25px rgba(0,0,0,0.2)' }}>
                  <button onClick={() => setShowComparison(false)} style={{ position: 'absolute', top: '15px', right: '20px', background: 'none', border: 'none', fontSize: '2rem', cursor: 'pointer', color: '#9ca3af', lineHeight: 1, padding: '0.2rem' }}> &times; </button>
                  <h3 style={{ textAlign: 'center', marginTop: 0, marginBottom: '2rem', fontSize: '1.6rem', fontWeight: '600' }}>Compare Top {cardsToCompare.length} Cards</h3>
                  <div style={{ display: 'grid', gridTemplateColumns: `minmax(160px, 1.2fr) repeat(${cardsToCompare.length}, minmax(180px, 1fr))`, gap: '0px', border: '1px solid #e5e7eb', fontSize: '0.9em', borderRadius: '8px', overflow: 'hidden' }}> {/* Rounded corners for table */}
                      {/* --- Header Row --- */}
                      <div style={compareCellStyleEnhanced(true, true)}>Feature</div>
                      {cardsToCompare.map(card => ( <div key={card["Card Name"]} style={{...compareCellStyleEnhanced(true, false), textAlign: 'center'}}> <img src={card.image || 'placeholder.png'} alt={card["Card Name"]} style={{ height: '45px', objectFit: 'contain', marginBottom: '0.5rem' }} onError={(e) => { (e.target as HTMLImageElement).src = 'placeholder.png'; }}/> <div style={{fontWeight: '600', fontSize: '1.05em'}}>{card["Card Name"]}</div> <div style={{fontSize: '0.9em', color: '#6b7280'}}>{card.Issuer}</div> </div> ))}
                      {/* --- Data Rows --- */}
                      {renderCompareRowEnhanced("Annual Fee", cardsToCompare.map(c => `$${c["Annual Fee"].toFixed(2)}`))}
                      {renderCompareRowEnhanced("Est. First Year Value", cardsToCompare.map(c => <span style={{ color: (c.calculatedFirstYearNetValue ?? 0) >= 0 ? 'var(--success-color)' : 'var(--danger-color)', fontWeight: 'bold', fontSize: '1.1em' }}>${(c.calculatedFirstYearNetValue ?? 0).toFixed(2)}</span>))}
                      {renderCompareRowEnhanced("Est. Ongoing Value", cardsToCompare.map(c => <span style={{ fontWeight: 'bold', fontSize: '1.05em' }}>${(c.calculatedNetValue ?? 0).toFixed(2)}</span>))}
                      {renderCompareRowEnhanced("Sign-Up Bonus", cardsToCompare.map(c => <div style={{fontSize: '0.9em'}}>{c.signUpBonus?.description || 'N/A'} <span style={{color: '#4b5563'}}>(~$${c.signUpBonus?.estimated_value_usd ?? 0})</span></div>))}
                      {renderCompareRowEnhanced("Top Reward Rates", cardsToCompare.map(c => ( <ul style={{margin: 0, paddingLeft: '1.1em', textAlign: 'left', fontSize: '0.9em', listStylePosition: 'outside'}}> {(Array.isArray(c.rewards) ? c.rewards.filter(r => r.multiplier > 1 && r.category !== 'other').sort((a,b) => b.multiplier - a.multiplier).slice(0, 3) : []) .map(r => <li key={r.category} style={{marginBottom: '0.2em'}}>{r.multiplier}x {r.category.replace(/_/g,' ')}{r.cap ? ` ($${r.cap.amount_usd}/${r.cap.period})`:''}</li>)} <li>{c.rewards.find(r => r.category === 'other')?.multiplier ?? 1}x Other</li> </ul> )))}
                      {renderCompareRowEnhanced("Key Perks", cardsToCompare.map(c => ( <ul style={{margin: 0, paddingLeft: '1.1em', textAlign: 'left', fontSize: '0.9em', listStylePosition: 'outside'}}> {(Array.isArray(c.perks) ? c.perks.filter(p => ['lounge_access', 'free_checked_bag', 'travel_credit', 'companion_fare', 'companion_certificate', 'global_entry_tsa_precheck_credit', 'annual_hotel_credit', 'anniversary_points', 'anniversary_miles', 'hilton_status'].includes(p.type) || p.value_usd > 0 || p.estimated_value_usd > 0).slice(0, 4) : []) .map(p => <li key={p.type+(p.description || '')} style={{marginBottom: '0.2em'}}>{formatPerkForCompare(p)}</li>)} </ul> )))}
                      {renderCompareRowEnhanced("Redemption Strategy Used", cardsToCompare.map(c => <span style={{fontStyle: 'italic', color: '#4b5563'}}>{redemptionStrategy.replace('_', ' ')}</span>))}
                      {renderCompareRowEnhanced("CPP Used", cardsToCompare.map(c => getSelectedCpp(c, redemptionStrategy).toFixed(2)))}
                      {renderCompareRowEnhanced("Links", cardsToCompare.map(c => ( <div style={{display: 'flex', flexDirection: 'column', gap: '0.4rem'}}> <a href={c.reviewLink} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary-color)', textDecoration: 'none', fontWeight: '500' }}>Review</a> <a href={c.applyLink} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary-color)', textDecoration: 'none', fontWeight: '500' }}>Apply</a> </div> )))}
                  </div>
              </div>
          </div>
       )}

      {/* --- AI Section --- */}
       <div style={{ textAlign: 'center', marginTop: '3rem', borderTop: '1px solid #e5e7eb', paddingTop: '2.5rem' }}>
           {/* AI Button is now moved up with Compare button */}
           {aiSuggestion && (
           <div style={{ maxWidth: '800px', margin: '0 auto', background: 'var(--ai-suggestion-bg)', padding: '1.5rem 2rem', borderRadius: '8px', border: '1px solid var(--ai-suggestion-border)', textAlign: 'left', lineHeight: '1.65', color: '#1f2937', boxShadow: '0 2px 4px rgba(0,0,0,0.03)' }}>
             <h4 style={{ marginTop: 0, marginBottom: '1rem', color: 'var(--label-color)', borderBottom: '1px solid var(--ai-suggestion-border)', paddingBottom: '0.6rem', fontSize: '1.2em', fontWeight: '600' }}> Personalized AI Suggestion </h4>
             <div dangerouslySetInnerHTML={{ __html: formatAiOutput(aiSuggestion) }} style={{ whiteSpace: 'pre-wrap' }} ></div>
           </div>
           )}
        </div>
    </div>
  );
}

// --- Helper Components / Functions for Comparison ---

// Enhanced style helper for comparison cells
const compareCellStyleEnhanced = (isHeader: boolean, isLabelCol: boolean): React.CSSProperties => ({
    padding: '0.8rem 1rem', // Increased padding
    borderBottom: '1px solid #e5e7eb', // Gray-200
    borderRight: '1px solid #e5e7eb', // Gray-200
    backgroundColor: isHeader ? '#f3f4f6' : (isLabelCol ? '#f9fafb' : 'white'), // Slightly different grays
    fontWeight: isHeader || isLabelCol ? '600' : '400', // Adjusted weights
    textAlign: isLabelCol ? 'right' : 'left',
    verticalAlign: 'top',
    // Ensure last row cells don't have bottom border if needed (can be complex with dynamic rows)
    // borderBottom: isLastRow ? 'none' : '1px solid #e5e7eb',
    // Ensure last column cells don't have right border
    // borderRight: isLastCol ? 'none' : '1px solid #e5e7eb',
});

// Enhanced row renderer for comparison grid (ensure it handles dynamic number of columns)
const renderCompareRowEnhanced = (label: string, values: React.ReactNode[]) => (
    <>
        {/* Label Cell - Apply border logic based on position if needed */}
        <div style={{ ...compareCellStyleEnhanced(false, true), borderRight: '1px solid #d1d5db' }}>{label}</div>
        {/* Value Cells */}
        {values.map((value, index) => (
            <div key={index} style={compareCellStyleEnhanced(false, false)}>
                {value ?? <span style={{ color: '#9ca3af' }}>N/A</span>} {/* Use N/A for null/undefined */}
            </div>
        ))}
        {/* Add empty cells if less than 3 cards are being compared */}
        {Array.from({ length: 3 - values.length }).map((_, index) => (
             <div key={`empty-${index}`} style={compareCellStyleEnhanced(false, false)}><span style={{ color: '#9ca3af' }}>-</span></div>
        ))}
    </>
);


// (formatAiOutput helper function remains the same)
function formatAiOutput(text: string): string { /* ... same logic ... */
    let formatted = text .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') .replace(/\* (.*?)(?=\n\* |\n\n|$)/g, '<li>$1</li>');
    if (formatted.includes('<li>')) { formatted = formatted.replace(/\n*<li>/g, '<li>').replace(/<\/li>\n*/g, '</li>'); }
    return formatted;
}