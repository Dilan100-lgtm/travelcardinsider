// File: src/components/RewardsCalculator.tsx

import React, { useState, useMemo } from 'react';
import cardDataRaw from '@/data/finalcreditcard.json'; // Use the actual path
import styles from '@/styles/rewards.module.css'; // Adjust path if needed

// --- Define Interfaces ---
// (Interfaces remain the same - including DetailedCreditCard, etc.)
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

// --- Define Filter State Types ---
type CardTypeFilter = 'all' | 'personal' | 'business';
type AnnualFeeFilter = 'noFee' | 'under100' | 'premium';

interface FiltersState {
  cardType: CardTypeFilter;
  annualFee: AnnualFeeFilter[]; // Array to allow multiple selections
  introApr: boolean;
  travelFocus: boolean;
  diningFocus: boolean;
  groceryFocus: boolean;
}

const defaultFilters: FiltersState = {
  cardType: 'all',
  annualFee: [],
  introApr: false,
  travelFocus: false,
  diningFocus: false,
  groceryFocus: false,
};

// --- React Component ---
export default function RewardsCalculator() {
  const [spend, setSpend] = useState<SpendInput>(defaultSpend);
  const [redemptionStrategy, setRedemptionStrategy] = useState<RedemptionStrategy>('default');
  const [aiSuggestion, setAiSuggestion] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [showComparison, setShowComparison] = useState(false);
  const [cardsToCompare, setCardsToCompare] = useState<DetailedCreditCard[]>([]);
  const [filters, setFilters] = useState<FiltersState>(defaultFilters); // <<< ADDED Filter State

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
  // (handleChange, handleRedemptionChange, handleCompareClick remain the same)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => { /* ... same logic ... */
    const { name, value } = e.target; setSpend((prev) => ({ ...prev, [name]: parseFloat(value) || 0, }));
  };
  const handleRedemptionChange = (e: React.ChangeEvent<HTMLSelectElement>) => { setRedemptionStrategy(e.target.value as RedemptionStrategy); }
  const handleCompareClick = () => { setCardsToCompare(results.slice(0, 3)); setShowComparison(true); }

  // --- ADDED Filter Handlers ---
  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;

    setFilters(prev => {
      if (type === 'checkbox') {
        const { checked } = e.target as HTMLInputElement;
        // Special handling for annual fee checkboxes
        if (name === 'annualFee') {
          const feeValue = value as AnnualFeeFilter;
          const currentFees = prev.annualFee;
          if (checked) {
            // Add fee type if not already present
            return { ...prev, annualFee: [...currentFees, feeValue] };
          } else {
            // Remove fee type
            return { ...prev, annualFee: currentFees.filter(fee => fee !== feeValue) };
          }
        } else {
          // Handle regular boolean checkboxes
          return { ...prev, [name]: checked };
        }
      } else {
        // Handle dropdowns (or other inputs if added later)
        return { ...prev, [name]: value };
      }
    });
  };

  const handleClearFilters = () => {
    setFilters(defaultFilters);
  };
  // --- END Filter Handlers ---

  // --- Core Calculation Logic (useMemo Hook) ---
  // (categoryMap, getOtherMultiplier, findBestRuleForInput remain the same)
  const results: DetailedCreditCard[] = useMemo(() => {
        // Helper to check for high multipliers in specific categories
        const hasHighMultiplier = (card: DetailedCreditCard, categories: string[], threshold: number): boolean => {
          if (!Array.isArray(card.rewards)) return false;
          // Expand the categories based on the map
          const expandedCategories = categories.flatMap(cat => categoryMap[cat as keyof SpendInput] || [cat]);
          return card.rewards.some(reward => expandedCategories.includes(reward.category) && reward.multiplier >= threshold);
        };

        const categoryMap: { [key in keyof SpendInput]?: string[] } = { dining: ['dining'], groceries: ['groceries_us', 'groceries', 'online_grocery'], gas: ['gas_us', 'gas'], flights: ['flights_direct', 'flights_amex_travel', 'flights_chase_portal', 'flights_capital_one_portal', 'airlines', 'southwest_airlines', 'united_airlines', 'jetblue', 'hawaiian_airlines', 'delta_airlines', 'american_airlines', 'british_airways', 'alaska_airlines', 'aircanada'], hotels: ['hotel', 'hotel_amex_travel', 'hotel_chase_portal', 'hotel_capital_one_portal', 'hilton_hotels', 'hyatt_hotels'], streaming: ['streaming'], transit: ['transit'], onlineShopping: ['online_retail_us'], drugstores: ['drugstores'], other: ['other'], };
        const getOtherMultiplier = (card: DetailedCreditCard): number => { const otherRule = Array.isArray(card.rewards) ? card.rewards.find(r => r.category === 'other') : undefined; return otherRule?.multiplier ?? 1; }
        const findBestRuleForInput = (card: DetailedCreditCard, uiCategory: keyof SpendInput): CardReward | undefined => { const targetJsonCategories = categoryMap[uiCategory] || []; let bestRule: CardReward | undefined = undefined; let bestMultiplier = 0; for (const jsonCat of targetJsonCategories) { const rule = Array.isArray(card.rewards) ? card.rewards.find(r => r.category === jsonCat) : undefined; if (rule && rule.multiplier > bestMultiplier) { bestMultiplier = rule.multiplier; bestRule = rule; } } const otherMultiplier = getOtherMultiplier(card); const otherRule = Array.isArray(card.rewards) ? card.rewards.find(r => r.category === 'other') : undefined; if (!bestRule || bestMultiplier <= otherMultiplier) { return otherRule; } return bestRule; };

        // 1. Calculate values for ALL cards first
        const calculatedCards = cards.map(card => {
            // ... (existing calculation logic to determine totalAnnualPoints, rewardsValue, annualPerkValue, net values) ...
            // THIS PART REMAINS IDENTICAL TO YOUR ORIGINAL CODE
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
          });

        // 2. Filter the calculated cards based on the filter state
        const filteredCards = calculatedCards.filter(card => {
            // Card Type Filter
            if (filters.cardType !== 'all' && card["Card Type"].toLowerCase() !== filters.cardType) {
                return false;
            }

            // Annual Fee Filter
            if (filters.annualFee.length > 0) {
                let feeMatch = false;
                const annualFee = card["Annual Fee"];
                if (filters.annualFee.includes('noFee') && annualFee === 0) feeMatch = true;
                if (filters.annualFee.includes('under100') && annualFee > 0 && annualFee < 100) feeMatch = true;
                if (filters.annualFee.includes('premium') && annualFee >= 100) feeMatch = true;
                if (!feeMatch) return false;
            }

            // Intro APR Filter
            if (filters.introApr && !card["Intro APR"]) { // Check if Intro APR field exists and is truthy
                return false;
            }

            // Focus Filters (using helper function)
            const focusThreshold = 3; // Define minimum multiplier for "focus"
            if (filters.travelFocus && !hasHighMultiplier(card, ['flights', 'hotels'], focusThreshold)) {
                 return false;
            }
            if (filters.diningFocus && !hasHighMultiplier(card, ['dining'], focusThreshold)) {
                 return false;
            }
            if (filters.groceryFocus && !hasHighMultiplier(card, ['groceries'], focusThreshold)) {
                 return false;
            }

            // If card passes all active filters
            return true;
        });

        // 3. Sort the filtered cards
        return filteredCards.sort((a, b) => (b.calculatedFirstYearNetValue ?? -Infinity) - (a.calculatedFirstYearNetValue ?? -Infinity));

      // ADD 'filters' to dependency array
  }, [spend, redemptionStrategy, filters]);

  // --- AI Recommendation Fetching ---
  // (getAiRecommendation and formatAiOutput remain the same)
  const getAiRecommendation = async () => { /* ... same logic ... */
        setLoading(true); setError(''); try {
            const topCardsContext = results.slice(0, 5).map(card => { const selectedCpp = getSelectedCpp(card, redemptionStrategy); return { cardName: card["Card Name"], issuer: card.Issuer, cardType: card["Card Type"], annualFee: card["Annual Fee"], estimatedFirstYearNetValue: card.calculatedFirstYearNetValue, estimatedOngoingNetValue: card.calculatedNetValue, calculatedAnnualRewardsValue: card.calculatedRewardsValue, calculatedAnnualPerkValue: card.calculatedAnnualPerkValue, calculatedAnnualPoints: card.calculatedPoints, cppUsedForValue: selectedCpp, redemptionStrategyUsed: redemptionStrategy, signUpBonusValue: card.signUpBonus?.estimated_value_usd ?? 0, signUpBonusDescription: card.signUpBonus?.description || "N/A", topRewardCategories: Array.isArray(card.rewards) ? card.rewards .filter(r => r.multiplier > 1 && r.category !== 'other') .sort((a, b) => b.multiplier - a.multiplier) .slice(0, 4) .map(r => ({ category: r.category, multiplier: r.multiplier, notes: r.notes, cap: r.cap ? `$${r.cap.amount_usd}/${r.cap.period}` : null })) : [], keyPerks: Array.isArray(card.perks) ? card.perks .filter(p => ['lounge_access', 'free_checked_bag', 'travel_credit', 'companion_fare', 'companion_certificate', 'global_entry_tsa_precheck_credit', 'annual_hotel_credit', 'anniversary_points', 'anniversary_miles', 'hilton_status'].includes(p.type) || p.value_usd > 0 || p.estimated_value_usd > 0) .map(p => ({ type: p.type, description: p.description || p.type.replace(/_/g, ' '), value: p.value_usd || p.estimated_value_usd, frequency: p.frequency })) .slice(0, 5) : [], }; });
            const currentAnnualSpend = Object.entries(spend).reduce((acc, [key, monthlySpend]) => { acc[key as keyof SpendInput] = monthlySpend * 12; return acc; }, {} as { [key in keyof SpendInput]: number });
            const res = await fetch('/api/gpt-recommend', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ spend: spend, annualSpend: currentAnnualSpend, redemptionStrategy: redemptionStrategy, topCards: topCardsContext }), });
            if (!res.ok) throw new Error(`Server responded ${res.status}`); const data = await res.json(); setAiSuggestion(data.recommendation);
        } catch (err: any) { console.error('AI request failed:', err); setError('AI recommendation failed.'); } finally { setLoading(false); }
  };
  function formatAiOutput(text: string): string { /* ... same logic ... */
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

      {/* Controls Section (Redemption Strategy) */}
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
              type="number"
              id={category}
              name={category}
              value={spend[category as keyof SpendInput]}
              onChange={handleChange}
              min={0}
              step={10}
              placeholder="$0"
            />
          </div>
        ))}
      </form>

      {/* --- ADDED Filter Section --- */}
      <div className={styles.filterContainer}>
        <div className={styles.filterHeader}>
          <h4>Filter Cards</h4>
          <button onClick={handleClearFilters} className={styles.clearButton}>
            Clear All Filters
          </button>
        </div>
        <div className={styles.filterGrid}>
          {/* Card Type */}
          <div className={styles.filterGroup}>
            <label htmlFor="cardType" className={styles.groupLabel}>Card Type</label>
            <select
              id="cardType"
              name="cardType"
              value={filters.cardType}
              onChange={handleFilterChange}
              className={styles.filterDropdown}
            >
              <option value="all">All</option>
              <option value="personal">Personal</option>
              <option value="business">Business</option>
            </select>
          </div>

          {/* Annual Fee */}
          <div className={styles.filterGroup}>
             <label className={styles.groupLabel}>Annual Fee</label>
             <div className={styles.filterControl}>
               <input
                 type="checkbox"
                 id="noFee"
                 name="annualFee"
                 value="noFee"
                 checked={filters.annualFee.includes('noFee')}
                 onChange={handleFilterChange}
               />
               <label htmlFor="noFee">No Annual Fee ($0)</label>
             </div>
             <div className={styles.filterControl}>
               <input
                 type="checkbox"
                 id="under100"
                 name="annualFee"
                 value="under100"
                 checked={filters.annualFee.includes('under100')}
                 onChange={handleFilterChange}
               />
               <label htmlFor="under100">Under $100</label>
             </div>
             <div className={styles.filterControl}>
               <input
                 type="checkbox"
                 id="premium"
                 name="annualFee"
                 value="premium"
                 checked={filters.annualFee.includes('premium')}
                 onChange={handleFilterChange}
               />
               <label htmlFor="premium">Premium ($100+)</label>
             </div>
           </div>

          {/* 0% Intro APR */}
          <div className={styles.filterGroup}>
            <label className={styles.groupLabel}>Offers</label>
            <div className={styles.filterControl}>
              <input
                type="checkbox"
                id="introApr"
                name="introApr"
                checked={filters.introApr}
                onChange={handleFilterChange}
              />
              <label htmlFor="introApr">0% Intro APR</label>
            </div>
          </div>

          {/* Travel Focus */}
          <div className={styles.filterGroup}>
             <label className={styles.groupLabel}>Category Focus</label>
             <div className={styles.filterControl}>
               <input
                 type="checkbox"
                 id="travelFocus"
                 name="travelFocus"
                 checked={filters.travelFocus}
                 onChange={handleFilterChange}
               />
               <label htmlFor="travelFocus">Travel Focus</label>
             </div>
             {/* Dining Focus */}
             <div className={styles.filterControl}>
               <input
                 type="checkbox"
                 id="diningFocus"
                 name="diningFocus"
                 checked={filters.diningFocus}
                 onChange={handleFilterChange}
               />
               <label htmlFor="diningFocus">Dining Focus</label>
             </div>
             {/* Grocery Focus */}
             <div className={styles.filterControl}>
               <input
                 type="checkbox"
                 id="groceryFocus"
                 name="groceryFocus"
                 checked={filters.groceryFocus}
                 onChange={handleFilterChange}
               />
               <label htmlFor="groceryFocus">Grocery Focus</label>
             </div>
           </div>
        </div>
      </div>
      {/* --- END Filter Section --- */}


      {/* --- Results Section --- */}
      <div>
        <h3 className={styles.resultsTitle}>
           {filters !== defaultFilters ? 'Filtered Card Results' : 'Top Cards Based on Your Spend'}
        </h3>

        {/* Buttons Container */}
         <div className={styles.buttonGroup}>
           {/* Conditionally render buttons based on *filtered* results */}
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

        {/* Card List */}
        <ul className={styles.cardList}>
            {/* Use the 'results' variable which now contains filtered and sorted cards */}
            {results && results.length > 0 ? ( results.slice(0, 10).map((card, index) => ( card && card["Card Name"] ? (
              <li key={card["Card Name"]} className={styles.cardItem}>
                 <img
                     src={card.image || 'placeholder.png'}
                     alt={card["Card Name"]}
                     className={styles.cardImage}
                     onError={(e) => { (e.target as HTMLImageElement).src = 'placeholder.png'; }}
                 />
                 <div className={styles.cardDetails}>
                    <strong>{index + 1}. {card.Issuer} - {card["Card Name"]} <span>({card["Card Type"]})</span></strong>
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
                     <div className={styles.cardLinks}>
                         <a href={card.reviewLink} target="_blank" rel="noopener noreferrer" className={styles.reviewLink}>Read Review</a>
                         <a href={card.applyLink} target="_blank" rel="noopener noreferrer" className={styles.applyLink}>Apply Now</a>
                     </div>
                 </div>
              </li> ) : null )) ) : (
                // Adjusted No Results Message
                <li className={styles.noResults}>
                    {filters !== defaultFilters
                     ? 'No cards match your current filters and spending.'
                     : 'Enter your spending details above to see card recommendations.'}
                 </li>
               )}
        </ul>
      </div>

      {/* --- Comparison Modal/Section --- */}
      {/* (Comparison Modal JSX remains the same) */}
      {showComparison && cardsToCompare.length > 0 && (
        <div className={styles.comparisonOverlay}>
            <div className={styles.comparisonContent}>
                <button onClick={() => setShowComparison(false)} className={styles.closeButton}> &times; </button>
                <h3>Compare Top {cardsToCompare.length} Cards</h3>
                <div className={styles.comparisonTableWrapper}> {/* Added Wrapper */}
                    <div className={styles.comparisonGrid} style={{ gridTemplateColumns: `minmax(160px, 1.2fr) repeat(${cardsToCompare.length}, minmax(180px, 1fr))`}}>
                        {/* --- Header Row --- */}
                        <div className={`${styles.compareCell} ${styles.compareCellHeader} ${styles.compareCellLabel}`}>Feature</div>
                        {cardsToCompare.map(card => (
                            <div key={card["Card Name"]} className={`${styles.compareCell} ${styles.compareCellHeader}`}>
                                <img src={card.image || 'placeholder.png'} alt={card["Card Name"]} className={styles.compareCardImage} onError={(e) => { (e.target as HTMLImageElement).src = 'placeholder.png'; }}/>
                                <div>{card["Card Name"]}</div>
                                <div className={styles.compareIssuer}>{card.Issuer}</div>
                            </div>
                        ))}
                        {/* Fill empty header cells if less than 3 cards */}
                        {Array.from({ length: 3 - cardsToCompare.length }).map((_, i) => <div key={`empty-header-${i}`} className={`${styles.compareCell} ${styles.compareCellHeader}`}>-</div>)}


                        {/* --- Data Rows --- */}
                        {/* Row: Annual Fee */}
                        <div className={`${styles.compareCell} ${styles.compareCellLabel}`}>Annual Fee</div>
                        {cardsToCompare.map((c, i) => <div key={i} className={`${styles.compareCell} ${styles.compareCellData}`}>{`$${c["Annual Fee"].toFixed(2)}`}</div>)}
                        {Array.from({ length: 3 - cardsToCompare.length }).map((_, i) => <div key={`empty-fee-${i}`} className={`${styles.compareCell} ${styles.compareCellData}`}>-</div>)}

                        {/* Row: Est. First Year Value */}
                        <div className={`${styles.compareCell} ${styles.compareCellLabel}`}>Est. First Year Value</div>
                        {cardsToCompare.map((c,i) => <div key={i} className={`${styles.compareCell} ${styles.compareCellData}`}><span className={(c.calculatedFirstYearNetValue ?? 0) >= 0 ? styles.valueGood : styles.valueBad}>${(c.calculatedFirstYearNetValue ?? 0).toFixed(2)}</span></div>)}
                        {Array.from({ length: 3 - cardsToCompare.length }).map((_, i) => <div key={`empty-fyv-${i}`} className={`${styles.compareCell} ${styles.compareCellData}`}>-</div>)}

                        {/* Row: Est. Ongoing Value */}
                        <div className={`${styles.compareCell} ${styles.compareCellLabel}`}>Est. Ongoing Value</div>
                        {cardsToCompare.map((c,i) => <div key={i} className={`${styles.compareCell} ${styles.compareCellData}`}><span className={styles.valueOngoing}>${(c.calculatedNetValue ?? 0).toFixed(2)}</span></div>)}
                        {Array.from({ length: 3 - cardsToCompare.length }).map((_, i) => <div key={`empty-ogv-${i}`} className={`${styles.compareCell} ${styles.compareCellData}`}>-</div>)}

                        {/* Row: Sign-Up Bonus */}
                        <div className={`${styles.compareCell} ${styles.compareCellLabel}`}>Sign-Up Bonus</div>
                        {cardsToCompare.map((c,i) => <div key={i} className={`${styles.compareCell} ${styles.compareCellData} ${styles.smallText}`}>{c.signUpBonus?.description || 'N/A'} {c.signUpBonus?.estimated_value_usd > 0 && <span>(~$${c.signUpBonus.estimated_value_usd})</span>}</div>)}
                        {Array.from({ length: 3 - cardsToCompare.length }).map((_, i) => <div key={`empty-bonus-${i}`} className={`${styles.compareCell} ${styles.compareCellData}`}>-</div>)}

                        {/* Row: Top Reward Rates */}
                        <div className={`${styles.compareCell} ${styles.compareCellLabel}`}>Top Reward Rates</div>
                        {cardsToCompare.map((c,i) => <div key={i} className={`${styles.compareCell} ${styles.compareCellData}`}>
                            <ul className={styles.compareList}>
                                {(Array.isArray(c.rewards) ? c.rewards.filter(r => r.multiplier > 1 && r.category !== 'other').sort((a,b) => b.multiplier - a.multiplier).slice(0, 3) : [])
                                    .map(r => <li key={r.category}>{r.multiplier}x {r.category.replace(/_/g,' ').replace(' us', ' (US)')}{r.cap ? ` ($${r.cap.amount_usd}/${r.cap.period})`:''}</li>)}
                                <li>{(Array.isArray(c.rewards) ? c.rewards.find(r => r.category === 'other')?.multiplier : 1) ?? 1}x Other</li>
                            </ul>
                        </div>)}
                        {Array.from({ length: 3 - cardsToCompare.length }).map((_, i) => <div key={`empty-rewards-${i}`} className={`${styles.compareCell} ${styles.compareCellData}`}>-</div>)}


                         {/* Row: Key Perks */}
                         <div className={`${styles.compareCell} ${styles.compareCellLabel}`}>Key Perks</div>
                         {cardsToCompare.map((c,i) => <div key={i} className={`${styles.compareCell} ${styles.compareCellData}`}>
                             <ul className={styles.compareList}>
                                 {(Array.isArray(c.perks) ? c.perks.filter(p => ['lounge_access', 'free_checked_bag', 'travel_credit', 'companion_fare', 'companion_certificate', 'global_entry_tsa_precheck_credit', 'annual_hotel_credit', 'anniversary_points', 'anniversary_miles', 'hilton_status'].includes(p.type) || p.value_usd > 0 || p.estimated_value_usd > 0).slice(0, 4) : [])
                                     .map(p => <li key={p.type+(p.description || '')}>{formatPerkForCompare(p)}</li>)}
                                 {/* Show placeholder if no key perks */}
                                 {(Array.isArray(c.perks) ? c.perks.filter(p => ['lounge_access', 'free_checked_bag', 'travel_credit', 'companion_fare', 'companion_certificate', 'global_entry_tsa_precheck_credit', 'annual_hotel_credit', 'anniversary_points', 'anniversary_miles', 'hilton_status'].includes(p.type) || p.value_usd > 0 || p.estimated_value_usd > 0).length === 0 : true) && (<li>-</li>)}
                             </ul>
                         </div>)}
                         {Array.from({ length: 3 - cardsToCompare.length }).map((_, i) => <div key={`empty-perks-${i}`} className={`${styles.compareCell} ${styles.compareCellData}`}>-</div>)}


                        {/* Row: Redemption Strategy */}
                        <div className={`${styles.compareCell} ${styles.compareCellLabel}`}>Redemption Strategy</div>
                        {cardsToCompare.map((c,i) => <div key={i} className={`${styles.compareCell} ${styles.compareCellData} ${styles.italicText}`}>{redemptionStrategy.replace(/_/g, ' ')}</div>)}
                        {Array.from({ length: 3 - cardsToCompare.length }).map((_, i) => <div key={`empty-strat-${i}`} className={`${styles.compareCell} ${styles.compareCellData}`}>-</div>)}

                        {/* Row: CPP Used */}
                        <div className={`${styles.compareCell} ${styles.compareCellLabel}`}>CPP Used</div>
                        {cardsToCompare.map((c,i) => <div key={i} className={`${styles.compareCell} ${styles.compareCellData}`}>{getSelectedCpp(c, redemptionStrategy).toFixed(2)}</div>)}
                        {Array.from({ length: 3 - cardsToCompare.length }).map((_, i) => <div key={`empty-cpp-${i}`} className={`${styles.compareCell} ${styles.compareCellData}`}>-</div>)}

                        {/* Row: Links */}
                        <div className={`${styles.compareCell} ${styles.compareCellLabel}`}>Links</div>
                        {cardsToCompare.map((c,i) => <div key={i} className={`${styles.compareCell} ${styles.compareCellData}`}>
                            <a href={c.reviewLink} target="_blank" rel="noopener noreferrer" className={`${styles.compareLink} ${styles.reviewLink}`}>Review</a>
                            <a href={c.applyLink} target="_blank" rel="noopener noreferrer" className={`${styles.compareLink} ${styles.applyLink}`}>Apply</a>
                        </div>)}
                        {Array.from({ length: 3 - cardsToCompare.length }).map((_, i) => <div key={`empty-links-${i}`} className={`${styles.compareCell} ${styles.compareCellData}`}>-</div>)}

                    </div> {/* End Comparison Grid */}
                </div> {/* End Comparison Table Wrapper */}
            </div> {/* End Comparison Content Box */}
        </div> // End Overlay
      )}

      {/* --- AI Section --- */}
      {/* (AI Section JSX remains the same) */}
      <div className={styles.aiSection}>
          {aiSuggestion && (
          <div className={styles.aiSuggestionBox}>
            <h4> Personalized AI Suggestion </h4>
            <div dangerouslySetInnerHTML={{ __html: formatAiOutput(aiSuggestion) }} ></div>
          </div>
          )}
      </div>

    </div> // End Container
  );
}

// Helper function formatAiOutput remains unchanged
// function formatAiOutput(text: string): string { /* ... same logic ... */ }