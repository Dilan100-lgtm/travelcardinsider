// File: src/components/RewardsCalculator.tsx

import React, { useState, useMemo, useCallback } from 'react'; // Added useCallback
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

// --- Filter State Interface and Default --- *NEW*
interface FiltersState {
  cardType: 'all' | 'Personal' | 'Business';
  noAnnualFee: boolean;
  lowAnnualFee: boolean; // e.g., < $100
  premiumAnnualFee: boolean; // e.g., $100+
  introApr: boolean;
  travelFocus: boolean;
  diningFocus: boolean;
  groceryFocus: boolean;
}
const defaultFilters: FiltersState = {
  cardType: 'all',
  noAnnualFee: false,
  lowAnnualFee: false,
  premiumAnnualFee: false,
  introApr: false,
  travelFocus: false,
  diningFocus: false,
  groceryFocus: false,
};


// --- React Component ---
export default function RewardsCalculator() {
  const [spend, setSpend] = useState<SpendInput>(defaultSpend);
  const [redemptionStrategy, setRedemptionStrategy] = useState<RedemptionStrategy>('default');
  const [filters, setFilters] = useState<FiltersState>(defaultFilters); // *NEW* Filter state
  const [aiSuggestion, setAiSuggestion] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [showComparison, setShowComparison] = useState(false);
  const [cardsToCompare, setCardsToCompare] = useState<DetailedCreditCard[]>([]);

  // --- Helper Functions ---
  // Added useCallback wrappers for stability if passed as props later
  const getSelectedCpp = useCallback((card: DetailedCreditCard, strategy: RedemptionStrategy): number => {
    const options = card.redemptionOptions; if (!options) return 1.0;
    switch (strategy) {
        case 'cash_back': return options.cash_back_cpp ?? options.travel_statement_credit_cpp ?? 1.0;
        case 'travel_portal': return options.chase_travel_portal_cpp ?? options.amex_travel_cpp ?? options.cap_one_travel_cpp ?? options.travel_statement_credit_cpp ?? 1.0;
        case 'transfer_partners': return options.transfer_partner_average_cpp ?? options.chase_travel_portal_cpp ?? 1.5;
        case 'default': default: return options.transfer_partner_average_cpp ?? options.chase_travel_portal_cpp ?? options.amex_travel_cpp ?? options.cap_one_travel_cpp ?? options.travel_statement_credit_cpp ?? options.cash_back_cpp ?? 1.0;
    }
  }, []); // No external dependencies

  const formatPerkForCompare = useCallback((perk: CardPerk): string => {
    let text = perk.description || perk.type.replace(/_/g, ' '); if (perk.value_usd) { text += ` ($${perk.value_usd}${perk.frequency ? '/'+perk.frequency.replace('_',' ') : ''})`; } else if (perk.estimated_value_usd) { text += ` (~$${perk.estimated_value_usd} value)`; } return text;
  }, []); // No external dependencies


  // --- Event Handlers ---
  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
       const { name, value } = e.target; setSpend((prev) => ({ ...prev, [name]: parseFloat(value) || 0, }));
  }, []);
  const handleRedemptionChange = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => { setRedemptionStrategy(e.target.value as RedemptionStrategy); }, []);
  const handleCompareClick = useCallback(() => {
      // Note: 'results' is calculated below, so using it here works
      setCardsToCompare(results.slice(0, 3));
      setShowComparison(true);
  }, [/* depends on results, added below */]); // Dependency handled later

  // *NEW* Handler for filter changes
  const handleFilterChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const isCheckbox = type === 'checkbox';
    // Need type assertion for checked property
    const checked = isCheckbox ? (e.target as HTMLInputElement).checked : null;

    setFilters(prev => ({
        ...prev,
        [name]: isCheckbox ? checked : value,
    }));
  }, []);

  // *NEW* Handler to clear all filters
  const clearFilters = useCallback(() => {
      setFilters(defaultFilters);
  }, []);


  // --- Core Calculation Logic (useMemo Hook) ---
   const results: DetailedCreditCard[] = useMemo(() => {
        // Calculation helpers (remain unchanged from your base code)
        const categoryMap: { [key in keyof SpendInput]?: string[] } = { dining: ['dining'], groceries: ['groceries_us', 'groceries', 'online_grocery'], gas: ['gas_us', 'gas'], flights: ['flights_direct', 'flights_amex_travel', 'flights_chase_portal', 'flights_capital_one_portal', 'airlines', 'southwest_airlines', 'united_airlines', 'jetblue', 'hawaiian_airlines', 'delta_airlines', 'american_airlines', 'british_airways', 'alaska_airlines', 'aircanada'], hotels: ['hotel', 'hotel_amex_travel', 'hotel_chase_portal', 'hotel_capital_one_portal', 'hilton_hotels', 'hyatt_hotels'], streaming: ['streaming'], transit: ['transit'], onlineShopping: ['online_retail_us'], drugstores: ['drugstores'], other: ['other'], };
        const getOtherMultiplier = (card: DetailedCreditCard): number => { const otherRule = Array.isArray(card.rewards) ? card.rewards.find(r => r.category === 'other') : undefined; return otherRule?.multiplier ?? 1; }
        const findBestRuleForInput = (card: DetailedCreditCard, uiCategory: keyof SpendInput): CardReward | undefined => { const targetJsonCategories = categoryMap[uiCategory] || []; let bestRule: CardReward | undefined = undefined; let bestMultiplier = 0; for (const jsonCat of targetJsonCategories) { const rule = Array.isArray(card.rewards) ? card.rewards.find(r => r.category === jsonCat) : undefined; if (rule && rule.multiplier > bestMultiplier) { bestMultiplier = rule.multiplier; bestRule = rule; } } const otherMultiplier = getOtherMultiplier(card); const otherRule = Array.isArray(card.rewards) ? card.rewards.find(r => r.category === 'other') : undefined; if (!bestRule || bestMultiplier <= otherMultiplier) { return otherRule; } return bestRule; };

        // Define focus categories for filtering *inside useMemo* as they don't change
        const travelCats = ['travel_portal', 'travel_other', 'flights_direct', 'hotel', 'flights_amex_travel', 'hotel_amex_travel', 'hotel_chase_portal', 'car_rental_chase_portal', 'flights_chase_portal', 'hotel_capital_one_portal', 'flights_capital_one_portal', 'airlines', 'transit', 'gas', 'southwest_airlines', 'united_airlines', 'jetblue', 'hawaiian_airlines', 'delta_airlines', 'american_airlines', 'british_airways', 'alaska_airlines', 'aircanada'];
        const diningCats = ['dining'];
        const groceryCats = ['groceries_us', 'groceries', 'online_grocery'];
        const travelPerkTypes = ['lounge_access', 'free_checked_bag', 'travel_credit', 'companion_fare', 'companion_certificate', 'global_entry_tsa_precheck_credit', 'annual_hotel_credit', 'anniversary_points', 'anniversary_miles'];

        return cards.map(card => {
            // Calculation part (same as your base code)
            if (!card || !card["Card Name"]) { return null; }
            const rewards = Array.isArray(card.rewards) ? card.rewards : [];
            let totalAnnualPoints = 0; const otherMultiplier = getOtherMultiplier(card); const capSpendTracker: { [capKey: string]: number } = {};
            for (const uiCategory of categoryList) { const monthlySpend = spend[uiCategory as keyof SpendInput]; if (monthlySpend <= 0) continue; const annualSpendInCategory = monthlySpend * 12; const rule = findBestRuleForInput(card, uiCategory as keyof SpendInput); const multiplier = rule?.multiplier ?? otherMultiplier; if (!rule || rule.category === 'other' || !rule.cap) { totalAnnualPoints += annualSpendInCategory * multiplier; continue; } const capInfo = rule.cap; const capKey = Array.isArray(capInfo.applies_to_categories) ? capInfo.applies_to_categories.sort().join(',') || rule.category : rule.category; const capLimit = capInfo.amount_usd; const capPeriod = capInfo.period; let annualPointsAtBonusRate = 0; let annualPointsAtOtherRate = 0; const spentTowardsCapSoFar = capSpendTracker[capKey] || 0;
                if (capPeriod === 'year') { const remainingAnnualCapRoom = Math.max(0, capLimit - spentTowardsCapSoFar); const annualSpendAppliedAtBonus = Math.min(annualSpendInCategory, remainingAnnualCapRoom); const annualSpendAppliedAtOther = Math.max(0, annualSpendInCategory - annualSpendAppliedAtBonus); annualPointsAtBonusRate = annualSpendAppliedAtBonus * multiplier; annualPointsAtOtherRate = annualSpendAppliedAtOther * otherMultiplier; capSpendTracker[capKey] = spentTowardsCapSoFar + annualSpendAppliedAtBonus; }
                else if (capPeriod === 'month') { const monthlyCapLimit = capLimit; for (let month = 0; month < 12; month++) { const monthlySpendAtBonusRate = Math.min(monthlySpend, monthlyCapLimit); const monthlySpendAtOtherRate = Math.max(0, monthlySpend - monthlySpendAtBonusRate); annualPointsAtBonusRate += monthlySpendAtBonusRate * multiplier; annualPointsAtOtherRate += monthlySpendAtOtherRate * otherMultiplier; } }
                else if (capPeriod === 'quarter') { const quarterlyCapLimit = capLimit; for (let quarter = 0; quarter < 4; quarter++) { const quarterlySpendEstimate = monthlySpend * 3; const quarterlySpendAtBonusRate = Math.min(quarterlySpendEstimate, quarterlyCapLimit); const quarterlySpendAtOtherRate = Math.max(0, quarterlySpendEstimate - quarterlySpendAtBonusRate); annualPointsAtBonusRate += quarterlySpendAtBonusRate * multiplier; annualPointsAtOtherRate += quarterlySpendAtOtherRate * otherMultiplier; } }
                totalAnnualPoints += annualPointsAtBonusRate + annualPointsAtOtherRate;
            }
            const selectedCpp = getSelectedCpp(card, redemptionStrategy); const rewardsValue = (totalAnnualPoints * selectedCpp) / 100;
            let annualPerkValue = 0; const perks = Array.isArray(card.perks) ? card.perks : [];
            perks.forEach(perk => { if (perk.value_usd && perk.frequency === 'annual') { annualPerkValue += perk.value_usd; } else if (perk.type === 'global_entry_tsa_precheck_credit' && perk.value_usd && perk.frequency?.includes('years')) { const years = parseInt(perk.frequency.split('_')[1]) || 4; annualPerkValue += perk.value_usd / years; } else if ((perk.type === 'anniversary_points' || perk.type === 'anniversary_miles') && perk.estimated_value_usd) { annualPerkValue += perk.estimated_value_usd; } });
            const annualFee = card["Annual Fee"] ?? 0; const netValueIncludingPerks = rewardsValue + annualPerkValue - annualFee; const signUpBonusValue = card.signUpBonus?.estimated_value_usd ?? 0; const firstYearNetValue = netValueIncludingPerks + signUpBonusValue;

            return { ...card, calculatedPoints: Math.round(totalAnnualPoints), calculatedRewardsValue: parseFloat(rewardsValue.toFixed(2)), calculatedAnnualPerkValue: parseFloat(annualPerkValue.toFixed(2)), calculatedNetValue: parseFloat(netValueIncludingPerks.toFixed(2)), calculatedFirstYearNetValue: parseFloat(firstYearNetValue.toFixed(2)), };
        })
        .filter((card): card is DetailedCreditCard & { 
            calculatedPoints: number; 
            calculatedRewardsValue: number; 
            calculatedAnnualPerkValue: number; 
            calculatedNetValue: number; 
            calculatedFirstYearNetValue: number; 
        } => { // *NEW* Filter step
            if (
                !card ||
                card.calculatedPoints === undefined ||
                card.calculatedRewardsValue === undefined ||
                card.calculatedAnnualPerkValue === undefined ||
                card.calculatedNetValue === undefined ||
                card.calculatedFirstYearNetValue === undefined
            ) {
                return false;
            }

            // Card Type Filter
            if (filters.cardType !== 'all' && card["Card Type"] !== filters.cardType) {
                return false;
            }

            // Annual Fee Filter
            const fee = card["Annual Fee"] ?? 0;
            const feeFilterActive = filters.noAnnualFee || filters.lowAnnualFee || filters.premiumAnnualFee;
            if (feeFilterActive) {
                let matchesFee = false;
                if (filters.noAnnualFee && fee === 0) matchesFee = true;
                if (filters.lowAnnualFee && fee > 0 && fee < 100) matchesFee = true;
                if (filters.premiumAnnualFee && fee >= 100) matchesFee = true;
                if (!matchesFee) return false;
            }

            // Intro APR Filter
            if (filters.introApr && !card["Intro APR"]) {
                 return false;
            }

             // Focus Filters
             const cardRewards = Array.isArray(card.rewards) ? card.rewards : [];
             const cardPerks = Array.isArray(card.perks) ? card.perks : [];
             const hasRewardCategory = (cats: string[]) => cardRewards.some(r => cats.includes(r.category) && r.multiplier > getOtherMultiplier(card));
             const hasPerkType = (types: string[]) => cardPerks.some(p => types.includes(p.type));

            if (filters.travelFocus && !(hasRewardCategory(travelCats) || hasPerkType(travelPerkTypes))) {
                return false;
            }
            if (filters.diningFocus && !hasRewardCategory(diningCats)) {
                return false;
            }
             if (filters.groceryFocus && !hasRewardCategory(groceryCats)) {
                return false;
            }

            return true; // Card passes all active filters
        })
        .sort((a, b) => (b.calculatedFirstYearNetValue ?? -Infinity) - (a.calculatedFirstYearNetValue ?? -Infinity));
    }, [spend, redemptionStrategy, filters, getSelectedCpp]); // Added filters dependency


  // --- AI Recommendation Fetching ---
   const getAiRecommendation = async () => {
       // This function remains unchanged from your base code
       setLoading(true); setError(''); try {
           const topCardsContext = results.slice(0, 5).map(card => { const selectedCpp = getSelectedCpp(card, redemptionStrategy); return { cardName: card["Card Name"], issuer: card.Issuer, cardType: card["Card Type"], annualFee: card["Annual Fee"], estimatedFirstYearNetValue: card.calculatedFirstYearNetValue, estimatedOngoingNetValue: card.calculatedNetValue, calculatedAnnualRewardsValue: card.calculatedRewardsValue, calculatedAnnualPerkValue: card.calculatedAnnualPerkValue, calculatedAnnualPoints: card.calculatedPoints, cppUsedForValue: selectedCpp, redemptionStrategyUsed: redemptionStrategy, signUpBonusValue: card.signUpBonus?.estimated_value_usd ?? 0, signUpBonusDescription: card.signUpBonus?.description || "N/A", topRewardCategories: Array.isArray(card.rewards) ? card.rewards .filter(r => r.multiplier > 1 && r.category !== 'other') .sort((a, b) => b.multiplier - a.multiplier) .slice(0, 4) .map(r => ({ category: r.category, multiplier: r.multiplier, notes: r.notes, cap: r.cap ? `$${r.cap.amount_usd}/${r.cap.period}` : null })) : [], keyPerks: Array.isArray(card.perks) ? card.perks .filter(p => ['lounge_access', 'free_checked_bag', 'travel_credit', 'companion_fare', 'companion_certificate', 'global_entry_tsa_precheck_credit', 'annual_hotel_credit', 'anniversary_points', 'anniversary_miles', 'hilton_status'].includes(p.type) || p.value_usd > 0 || p.estimated_value_usd > 0) .map(p => ({ type: p.type, description: p.description || p.type.replace(/_/g, ' '), value: p.value_usd || p.estimated_value_usd, frequency: p.frequency })) .slice(0, 5) : [], }; });
           const currentAnnualSpend = Object.entries(spend).reduce((acc, [key, monthlySpend]) => { acc[key as keyof SpendInput] = monthlySpend * 12; return acc; }, {} as { [key in keyof SpendInput]: number });
           const res = await fetch('/api/gpt-recommend', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ spend: spend, annualSpend: currentAnnualSpend, redemptionStrategy: redemptionStrategy, topCards: topCardsContext }), });
           if (!res.ok) throw new Error(`Server responded ${res.status}`); const data = await res.json(); setAiSuggestion(data.recommendation);
       } catch (err: any) { console.error('AI request failed:', err); setError('AI recommendation failed.'); } finally { setLoading(false); }
   };

   // --- formatAiOutput helper ---
   // This function remains unchanged from your base code
   function formatAiOutput(text: string): string {
        let formatted = text .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') .replace(/\* (.*?)(?=\n\* |\n\n|$)/g, '<li>$1</li>');
        if (formatted.includes('<li>')) { formatted = formatted.replace(/\n*<li>/g, '<li>').replace(/<\/li>\n*/g, '</li>'); }
        // Updated wrapping logic from previous step
        formatted = formatted.replace(/(<li>.*?<\/li>\s*)+/gs, (match) => `<ul>${match.trim()}</ul>`);
        formatted = formatted.split(/\n\s*\n/).map(p => { const trimmed = p.trim(); if (!trimmed) return ''; if (trimmed.startsWith('<ul>') && trimmed.endsWith('</ul>')) return trimmed; return `<p>${trimmed.replace(/\n/g, '<br />')}</p>`; }).join('');
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
                <select id="redemptionStrategy" value={redemptionStrategy} onChange={handleRedemptionChange} className={styles.selectBox}>
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
            <input type="number" id={category} name={category} value={spend[category as keyof SpendInput]} onChange={handleChange} min={0} step={10} placeholder="$0" />
          </div>
        ))}
      </form>

      {/* --- *NEW* Filter Section --- */}
       <div className={styles.filterContainer}>
           <div className={styles.filterHeader}>
               <h4>Filter Cards</h4>
               <button onClick={clearFilters} className={styles.clearButton}>
                   Clear All Filters
               </button>
           </div>
           <div className={styles.filterGrid}>
               {/* Card Type Dropdown */}
               <div className={styles.filterGroup}>
                  <label htmlFor="cardTypeFilter" className={styles.groupLabel}>Card Type</label>
                  <select
                      id="cardTypeFilter"
                      name="cardType" // Matches state key
                      value={filters.cardType}
                      onChange={handleFilterChange}
                      className={styles.filterDropdown}
                  >
                      <option value="all">All Types</option>
                      <option value="Personal">Personal</option>
                      <option value="Business">Business</option>
                  </select>
               </div>

               {/* Annual Fee Checkboxes */}
               <div className={styles.filterGroup}>
                   <label className={styles.groupLabel}>Annual Fee</label>
                   <div className={styles.filterControl}>
                       <input type="checkbox" id="noAnnualFee" name="noAnnualFee" checked={filters.noAnnualFee} onChange={handleFilterChange} />
                       <label htmlFor="noAnnualFee">No Annual Fee</label>
                   </div>
                   <div className={styles.filterControl}>
                       <input type="checkbox" id="lowAnnualFee" name="lowAnnualFee" checked={filters.lowAnnualFee} onChange={handleFilterChange} />
                       <label htmlFor="lowAnnualFee">Under $100</label>
                   </div>
                    <div className={styles.filterControl}>
                       <input type="checkbox" id="premiumAnnualFee" name="premiumAnnualFee" checked={filters.premiumAnnualFee} onChange={handleFilterChange} />
                       <label htmlFor="premiumAnnualFee">$100+</label>
                   </div>
               </div>

                {/* Intro APR Checkbox */}
               <div className={styles.filterGroup}>
                   <label className={styles.groupLabel}>Offers</label>
                   <div className={styles.filterControl}>
                       <input type="checkbox" id="introApr" name="introApr" checked={filters.introApr} onChange={handleFilterChange} />
                       <label htmlFor="introApr">0% Intro APR</label>
                   </div>
               </div>

                {/* Focus Checkboxes */}
               <div className={styles.filterGroup}>
                   <label className={styles.groupLabel}>Card Focus</label>
                   <div className={styles.filterControl}>
                       <input type="checkbox" id="travelFocus" name="travelFocus" checked={filters.travelFocus} onChange={handleFilterChange} />
                       <label htmlFor="travelFocus">Travel</label>
                   </div>
                   <div className={styles.filterControl}>
                       <input type="checkbox" id="diningFocus" name="diningFocus" checked={filters.diningFocus} onChange={handleFilterChange} />
                       <label htmlFor="diningFocus">Dining</label>
                   </div>
                    <div className={styles.filterControl}>
                       <input type="checkbox" id="groceryFocus" name="groceryFocus" checked={filters.groceryFocus} onChange={handleFilterChange} />
                       <label htmlFor="groceryFocus">Grocery</label>
                   </div>
               </div>
           </div>
       </div>
       {/* --- End Filter Section --- */}


      {/* --- Results Section --- */}
      <div>
        <h3 className={styles.resultsTitle}>
            {/* Optionally show filter count */}
            Top Cards Based on Your Spend {results.length < cards.length ? `(${results.length} matching filters)` : ''}
        </h3>
        {/* Buttons Container */}
         <div className={styles.buttonGroup}>
             {results && results.length > 0 && (
                 <button onClick={getAiRecommendation} disabled={loading} className={styles.primaryBtn}>
                     {loading ? 'Generating AI Suggestion...' : 'Get AI Suggestion'}
                 </button>
             )}
             {results && results.length >= 3 && !showComparison && (
                 <button onClick={handleCompareClick} className={styles.secondaryBtn}>
                     Compare Top 3 Cards
                 </button>
             )}
         </div>

         {error && <p className={styles.errorMessage}>{error}</p>}

        <ul className={styles.cardList}>
             {results && results.length > 0 ? ( results.slice(0, 10).map((card, index) => (
                 <li key={card["Card Name"]} className={styles.cardItem}>
                   <img src={card.image || 'placeholder.png'} alt={card["Card Name"]} className={styles.cardImage} onError={(e) => { (e.target as HTMLImageElement).src = 'placeholder.png'; }} />
                   <div className={styles.cardDetails}>
                     <div className={styles.cardTitle}>
                        <strong>{index + 1}. {card.Issuer} - {card["Card Name"]} <span>({card["Card Type"]})</span></strong>
                     </div>
                     <div className={styles.cardValues}>
                         <div><strong>Est. 1st Year:</strong> <span className={(card.calculatedFirstYearNetValue ?? 0) >= 0 ? styles.valueGood : styles.valueBad}>${(card.calculatedFirstYearNetValue ?? 0).toFixed(2)}</span></div>
                         <div><strong>Ongoing:</strong> <span className={styles.valueOngoing}>${(card.calculatedNetValue ?? 0).toFixed(2)}</span>/yr</div>
                     </div>
                     <small className={styles.cardSubtext}>
                        (Rewards: ${(card.calculatedRewardsValue ?? 0).toFixed(2)} + Perks: ${(card.calculatedAnnualPerkValue ?? 0).toFixed(2)} - Fee: ${card["Annual Fee"] ?? 0}) | Est. Points: {card.calculatedPoints ?? 0}
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
                      <div className={styles.cardLinks}>
                         <a href={card.reviewLink} target="_blank" rel="noopener noreferrer" className={`${styles.linkButton} ${styles.reviewLink}`}> {/* Assuming .linkButton exists */}
                             Read Review
                         </a>
                         <a href={card.applyLink} target="_blank" rel="noopener noreferrer" className={`${styles.linkButton} ${styles.applyLink}`}> {/* Assuming .linkButton exists */}
                             Apply Now
                         </a>
                      </div>
                   </div>
                 </li>
             )) ) : ( <li className={styles.noResults}>No cards match your current filters. Try adjusting them or clear all filters.</li> )}
        </ul>
      </div>

       {/* --- Comparison Modal/Section --- */}
       {showComparison && cardsToCompare.length > 0 && (
          <div className={styles.comparisonOverlay}>
              <div className={styles.comparisonContent}>
                  <button onClick={() => setShowComparison(false)} className={styles.closeButton}> &times; </button>
                  <h3>Compare Top {cardsToCompare.length} Cards</h3>
                  <div className={styles.comparisonTableWrapper}>
                      <div className={styles.comparisonGrid} style={{ gridTemplateColumns: `minmax(160px, 1.2fr) repeat(${cardsToCompare.length}, minmax(180px, 1fr))`}}>
                          {/* Header Row */}
                          <div className={`${styles.compareCell} ${styles.compareCellHeader} ${styles.compareCellLabel}`}>Feature</div>
                          {cardsToCompare.map(card => ( <div key={card["Card Name"]} className={`${styles.compareCell} ${styles.compareCellHeader}`}> <img src={card.image || 'placeholder.png'} alt={card["Card Name"]} className={styles.compareCardImage} onError={(e) => { (e.target as HTMLImageElement).src = 'placeholder.png'; }}/> <div>{card["Card Name"]}</div> <div className={styles.compareIssuer}>{card.Issuer}</div> </div> ))}
                          {/* Data Rows */}
                           <div className={`${styles.compareCell} ${styles.compareCellLabel}`}>Annual Fee</div>
                           {cardsToCompare.map((c, i) => <div key={i} className={`${styles.compareCell} ${styles.compareCellData}`}>{`$${(c["Annual Fee"] ?? 0).toFixed(2)}`}</div>)}
                           {Array.from({ length: 3 - cardsToCompare.length }).map((_, i) => <div key={`empty-fee-${i}`} className={`${styles.compareCell} ${styles.compareCellData}`}>-</div>)}
                           <div className={`${styles.compareCell} ${styles.compareCellLabel}`}>Est. First Year Value</div>
                           {cardsToCompare.map((c,i) => <div key={i} className={`${styles.compareCell} ${styles.compareCellData}`}><span className={(c.calculatedFirstYearNetValue ?? 0) >= 0 ? styles.valueGood : styles.valueBad}>${(c.calculatedFirstYearNetValue ?? 0).toFixed(2)}</span></div>)}
                           {Array.from({ length: 3 - cardsToCompare.length }).map((_, i) => <div key={`empty-fyv-${i}`} className={`${styles.compareCell} ${styles.compareCellData}`}>-</div>)}
                           <div className={`${styles.compareCell} ${styles.compareCellLabel}`}>Est. Ongoing Value</div>
                           {cardsToCompare.map((c,i) => <div key={i} className={`${styles.compareCell} ${styles.compareCellData}`}><span className={styles.valueOngoing}>${(c.calculatedNetValue ?? 0).toFixed(2)}</span></div>)}
                           {Array.from({ length: 3 - cardsToCompare.length }).map((_, i) => <div key={`empty-ogv-${i}`} className={`${styles.compareCell} ${styles.compareCellData}`}>-</div>)}
                           <div className={`${styles.compareCell} ${styles.compareCellLabel}`}>Sign-Up Bonus</div>
                           {cardsToCompare.map((c,i) => <div key={i} className={`${styles.compareCell} ${styles.compareCellData} ${styles.smallText}`}>{c.signUpBonus?.description || 'N/A'} <span>(~$${c.signUpBonus?.estimated_value_usd ?? 0})</span></div>)}
                           {Array.from({ length: 3 - cardsToCompare.length }).map((_, i) => <div key={`empty-bonus-${i}`} className={`${styles.compareCell} ${styles.compareCellData}`}>-</div>)}
                           <div className={`${styles.compareCell} ${styles.compareCellLabel}`}>Top Reward Rates</div>
                           {cardsToCompare.map((c,i) => <div key={i} className={`${styles.compareCell} ${styles.compareCellData}`}> <ul className={styles.compareList}> {(Array.isArray(c.rewards) ? c.rewards.filter(r => r.multiplier > 1 && r.category !== 'other').sort((a,b) => b.multiplier - a.multiplier).slice(0, 3) : []) .map(r => <li key={r.category}>{r.multiplier}x {r.category.replace(/_/g,' ')}{r.cap ? ` ($${r.cap.amount_usd}/${r.cap.period})`:''}</li>)} <li>{(Array.isArray(c.rewards) ? c.rewards.find(r => r.category === 'other')?.multiplier : 1) ?? 1}x Other</li> </ul> </div>)}
                           {Array.from({ length: 3 - cardsToCompare.length }).map((_, i) => <div key={`empty-rewards-${i}`} className={`${styles.compareCell} ${styles.compareCellData}`}>-</div>)}
                            <div className={`${styles.compareCell} ${styles.compareCellLabel}`}>Key Perks</div>
                            {cardsToCompare.map((c,i) => <div key={i} className={`${styles.compareCell} ${styles.compareCellData}`}> <ul className={styles.compareList}> {(Array.isArray(c.perks) ? c.perks.filter(p => ['lounge_access', 'free_checked_bag', 'travel_credit', 'companion_fare', 'companion_certificate', 'global_entry_tsa_precheck_credit', 'annual_hotel_credit', 'anniversary_points', 'anniversary_miles', 'hilton_status'].includes(p.type) || p.value_usd > 0 || p.estimated_value_usd > 0).slice(0, 4) : []) .map(p => <li key={p.type+(p.description || '')}>{formatPerkForCompare(p)}</li>)} </ul> </div>)}
                            {Array.from({ length: 3 - cardsToCompare.length }).map((_, i) => <div key={`empty-perks-${i}`} className={`${styles.compareCell} ${styles.compareCellData}`}>-</div>)}
                            <div className={`${styles.compareCell} ${styles.compareCellLabel}`}>Redemption Strategy</div>
                            {cardsToCompare.map((c,i) => <div key={i} className={`${styles.compareCell} ${styles.compareCellData} ${styles.italicText}`}>{redemptionStrategy.replace('_', ' ')}</div>)}
                            {Array.from({ length: 3 - cardsToCompare.length }).map((_, i) => <div key={`empty-strat-${i}`} className={`${styles.compareCell} ${styles.compareCellData}`}>-</div>)}
                            <div className={`${styles.compareCell} ${styles.compareCellLabel}`}>CPP Used</div>
                            {cardsToCompare.map((c,i) => <div key={i} className={`${styles.compareCell} ${styles.compareCellData}`}>{getSelectedCpp(c, redemptionStrategy).toFixed(2)}</div>)}
                            {Array.from({ length: 3 - cardsToCompare.length }).map((_, i) => <div key={`empty-cpp-${i}`} className={`${styles.compareCell} ${styles.compareCellData}`}>-</div>)}
                            <div className={`${styles.compareCell} ${styles.compareCellLabel}`}>Links</div>
                            {cardsToCompare.map((c,i) => <div key={i} className={`${styles.compareCell} ${styles.compareCellData}`}>
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
             <div dangerouslySetInnerHTML={{ __html: formatAiOutput(aiSuggestion) }} />
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
    // Updated wrapping logic
    formatted = formatted.replace(/(<li>.*?<\/li>\s*)+/gs, (match) => `<ul>${match.trim()}</ul>`);
    formatted = formatted.split(/\n\s*\n/).map(p => { const trimmed = p.trim(); if (!trimmed) return ''; if (trimmed.startsWith('<ul>') && trimmed.endsWith('</ul>')) return trimmed; return `<p>${trimmed.replace(/\n/g, '<br />')}</p>`; }).join('');
    return formatted;
}