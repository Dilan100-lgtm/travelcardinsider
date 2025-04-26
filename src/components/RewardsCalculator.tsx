// File: src/components/RewardsCalculator.tsx
import React, { useState, useMemo, useEffect } from 'react'; // Added useEffect
// Assuming your data file is correctly named and placed
import cardDataRaw from '@/data/finalcreditcard.json'; // Use the actual path to your detailed JSON
// Import the CSS module
import styles from '@/styles/rewards.module.css'; // Adjust path if needed

// --- Define Interfaces ---
interface CardCap { amount_usd: number; period: 'month' | 'quarter' | 'year'; applies_to_categories: string[]; }
interface CardReward { multiplier: number; category: string; notes: string | null; cap: CardCap | null; }
interface CardSignUpBonus { points: number | null; description: string; minSpend: number | null; durationDays: number | null; estimated_value_usd: number | null; }
interface CardRedemptionOptions { travel_statement_credit_cpp?: number; cash_back_cpp?: number; chase_travel_portal_cpp?: number; amex_travel_cpp?: number; cap_one_travel_cpp?: number; transfer_partner_average_cpp?: number; program_cpp?: number; [key: string]: number | undefined; }
interface CardPerk { type: string; description?: string; value_usd?: number; frequency?: string; notes?: string; estimated_value_usd?: number | null; }
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
    calculatedRewardsValue?: number;
    calculatedAnnualPerkValue?: number;
    calculatedNetValue?: number;
    calculatedFirstYearNetValue?: number;
}

// NEW Interfaces for Selected Card Calculations
interface CalculatedCategoryReward {
  category: string; // e.g., 'dining', 'groceries', 'other'
  points: number;
  value: number; // points * cpp for this category's points
}
interface CalculatedCardReward {
  cardName: string;
  cardImage: string; // Store image for display
  totalPoints: number;
  rewardsValue: number; // Just from points * cpp
  annualPerkValue: number; // Calculated annual perk value
  annualFee: number;
  netValue: number; // rewardsValue + annualPerkValue - annualFee
  breakdown: CalculatedCategoryReward[];
}

// --- Load and Type the Data ---
let allCards: DetailedCreditCard[] = [];
if (cardDataRaw && Array.isArray((cardDataRaw as any).cards)) {
  allCards = (cardDataRaw as any).cards as DetailedCreditCard[]; //
} else {
  if (Array.isArray(cardDataRaw)) {
    cardDataRaw.forEach((dataPart: any) => {
      if (dataPart && Array.isArray(dataPart.cards)) {
        allCards = allCards.concat(dataPart.cards as DetailedCreditCard[]); //
      }
    });
  }
  if (allCards.length === 0) {
    console.error("Unexpected structure in finalcreditcard.json. Expected { cards: [...] }."); //
  }
}
const cards: DetailedCreditCard[] = allCards.filter(card => card && card["Card Name"]); //

// --- Define Granular User Input Categories and State ---
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
  // --- State Hooks ---
  const [spend, setSpend] = useState<SpendInput>(defaultSpend);
  const [redemptionStrategy, setRedemptionStrategy] = useState<RedemptionStrategy>('default');
  const [aiSuggestion, setAiSuggestion] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [showComparison, setShowComparison] = useState(false);
  const [cardsToCompare, setCardsToCompare] = useState<DetailedCreditCard[]>([]);
  const [filters, setFilters] = useState<FiltersState>(defaultFilters);
  // NEW State for selected cards
  const [selectedCards, setSelectedCards] = useState<DetailedCreditCard[]>([]);
  const [selectedCardRewards, setSelectedCardRewards] = useState<CalculatedCardReward[]>([]);

  // Sort cards alphabetically for the dropdown
  const sortedCardNames = useMemo(() => cards.map(c => c["Card Name"]).sort((a, b) => a.localeCompare(b)), [cards]);

  // --- Helper Functions ---
  const getSelectedCpp = (card: DetailedCreditCard, strategy: RedemptionStrategy): number => {
    const options = card.redemptionOptions; if (!options) return 1.0;
    switch (strategy) {
      case 'cash_back': return options.cash_back_cpp ?? options.travel_statement_credit_cpp ?? 1.0;
      case 'travel_portal': return options.chase_travel_portal_cpp ?? options.amex_travel_cpp ?? options.cap_one_travel_cpp ?? options.travel_statement_credit_cpp ?? 1.0;
      case 'transfer_partners': return options.transfer_partner_average_cpp ?? options.chase_travel_portal_cpp ?? 1.5; // Using 1.5 as a fallback avg
      case 'default': default: return options.transfer_partner_average_cpp ?? options.chase_travel_portal_cpp ?? options.amex_travel_cpp ?? options.cap_one_travel_cpp ?? options.travel_statement_credit_cpp ?? options.cash_back_cpp ?? 1.0;
    }
  };

  const formatPerkForCompare = (perk: CardPerk): string => {
    let text = perk.description || perk.type.replace(/_/g, ' ');
    if (perk.value_usd) {
      text += ` ($${perk.value_usd}${perk.frequency ? '/'+perk.frequency.replace('_',' ') : ''})`;
    } else if (perk.estimated_value_usd) {
      text += ` (~$${perk.estimated_value_usd} value)`;
    }
    return text;
  };

  const categoryMap: { [key in keyof SpendInput]?: string[] } = { dining: ['dining'], groceries: ['groceries_us', 'groceries', 'online_grocery'], gas: ['gas_us', 'gas'], flights: ['flights_direct', 'flights_amex_travel', 'flights_chase_portal', 'flights_capital_one_portal', 'airlines', 'southwest_airlines', 'united_airlines', 'jetblue', 'hawaiian_airlines', 'delta_airlines', 'american_airlines', 'british_airways', 'alaska_airlines', 'aircanada'], hotels: ['hotel', 'hotel_amex_travel', 'hotel_chase_portal', 'hotel_capital_one_portal', 'hilton_hotels', 'hyatt_hotels'], streaming: ['streaming'], transit: ['transit'], onlineShopping: ['online_retail_us'], drugstores: ['drugstores'], other: ['other'], };
  const getOtherMultiplier = (card: DetailedCreditCard): number => { const otherRule = Array.isArray(card.rewards) ? card.rewards.find(r => r.category === 'other') : undefined; return otherRule?.multiplier ?? 1; }
  const findBestRuleForInput = (card: DetailedCreditCard, uiCategory: keyof SpendInput): CardReward | undefined => { const targetJsonCategories = categoryMap[uiCategory] || []; let bestRule: CardReward | undefined = undefined; let bestMultiplier = 0; for (const jsonCat of targetJsonCategories) { const rule = Array.isArray(card.rewards) ? card.rewards.find(r => r.category === jsonCat) : undefined; if (rule && rule.multiplier > bestMultiplier) { bestMultiplier = rule.multiplier; bestRule = rule; } } const otherMultiplier = getOtherMultiplier(card); const otherRule = Array.isArray(card.rewards) ? card.rewards.find(r => r.category === 'other') : undefined; if (!bestRule || bestMultiplier <= otherMultiplier) { return otherRule; } return bestRule; };


  // --- NEW Calculation Function for Selected Cards ---
  const calculateCardRewards = (card: DetailedCreditCard, spendInput: SpendInput, strategy: RedemptionStrategy): CalculatedCardReward => {
      let totalAnnualPoints = 0;
      const breakdown: CalculatedCategoryReward[] = [];
      const capSpendTracker: { [capKey: string]: number } = {}; // Separate tracker per card calc
      const otherMultiplier = getOtherMultiplier(card);
      const selectedCpp = getSelectedCpp(card, strategy);

      for (const uiCategory of categoryList) {
          const monthlySpend = spendInput[uiCategory as keyof SpendInput];
          if (monthlySpend <= 0) continue;
          const annualSpendInCategory = monthlySpend * 12;
          const rule = findBestRuleForInput(card, uiCategory as keyof SpendInput);
          const multiplier = rule?.multiplier ?? otherMultiplier;

          let categoryPoints = 0;

          // Apply Caps if rule exists and has a cap
          if (rule && rule.cap && rule.category !== 'other') {
              const capInfo = rule.cap;
              const capKey = Array.isArray(capInfo.applies_to_categories) ? capInfo.applies_to_categories.sort().join(',') || rule.category : rule.category;
              const capLimit = capInfo.amount_usd;
              const capPeriod = capInfo.period;
              let pointsAtBonusRate = 0;
              let pointsAtOtherRate = 0;
              const spentTowardsCapSoFar = capSpendTracker[capKey] || 0;

              if (capPeriod === 'year') {
                  const remainingCapRoom = Math.max(0, capLimit - spentTowardsCapSoFar);
                  const spendAtBonus = Math.min(annualSpendInCategory, remainingCapRoom);
                  const spendAtOther = Math.max(0, annualSpendInCategory - spendAtBonus);
                  pointsAtBonusRate = spendAtBonus * multiplier;
                  pointsAtOtherRate = spendAtOther * otherMultiplier;
                  capSpendTracker[capKey] = spentTowardsCapSoFar + spendAtBonus;
              } else if (capPeriod === 'month') {
                   for (let month = 0; month < 12; month++) {
                       const spendAtBonus = Math.min(monthlySpend, capLimit);
                       const spendAtOther = Math.max(0, monthlySpend - spendAtBonus);
                       pointsAtBonusRate += spendAtBonus * multiplier;
                       pointsAtOtherRate += spendAtOther * otherMultiplier;
                   }
              } else if (capPeriod === 'quarter') {
                  for (let quarter = 0; quarter < 4; quarter++) {
                      const quarterlySpend = monthlySpend * 3;
                      const spendAtBonus = Math.min(quarterlySpend, capLimit);
                      const spendAtOther = Math.max(0, quarterlySpend - spendAtBonus);
                      pointsAtBonusRate += spendAtBonus * multiplier;
                      pointsAtOtherRate += spendAtOther * otherMultiplier;
                  }
              }
              categoryPoints = pointsAtBonusRate + pointsAtOtherRate;
          } else {
              // No cap or 'other' category
              categoryPoints = annualSpendInCategory * multiplier;
          }

          totalAnnualPoints += categoryPoints;
          breakdown.push({
              category: uiCategory,
              points: Math.round(categoryPoints),
              value: (categoryPoints * selectedCpp) / 100
          });
      }

      // Calculate Annual Perk Value (reuse logic from main useMemo)
      let annualPerkValue = 0;
      if (Array.isArray(card.perks)) {
          card.perks.forEach(perk => {
              if (perk.value_usd && perk.frequency === 'annual') {
                  annualPerkValue += perk.value_usd;
              } else if (perk.type === 'global_entry_tsa_precheck_credit' && perk.value_usd && perk.frequency?.includes('years')) {
                  const years = parseInt(perk.frequency.split('_')[1]) || 4;
                  if (years > 0) annualPerkValue += perk.value_usd / years;
              } else if ((perk.type === 'anniversary_points' || perk.type === 'anniversary_miles') && perk.estimated_value_usd) {
                  annualPerkValue += perk.estimated_value_usd;
              }
          });
      }

      const rewardsValue = (totalAnnualPoints * selectedCpp) / 100;
      const annualFee = card["Annual Fee"] ?? 0;
      const netValue = rewardsValue + annualPerkValue - annualFee;

      return {
          cardName: card["Card Name"],
          cardImage: card.image || '/placeholder.png',
          totalPoints: Math.round(totalAnnualPoints),
          rewardsValue: parseFloat(rewardsValue.toFixed(2)),
          annualPerkValue: parseFloat(annualPerkValue.toFixed(2)),
          annualFee: annualFee,
          netValue: parseFloat(netValue.toFixed(2)),
          breakdown: breakdown.filter(b => b.points > 0).sort((a,b) => b.points - a.points) // Show categories with points, sorted
      };
  };

  // --- Event Handlers ---
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target; setSpend((prev) => ({ ...prev, [name]: parseFloat(value) || 0, }));
  };
  const handleRedemptionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setRedemptionStrategy(e.target.value as RedemptionStrategy);
  }
  const handleCompareClick = () => {
    setCardsToCompare(results.slice(0, 3)); // Use already filtered/sorted results
    setShowComparison(true);
  }

  // Filter Handlers
  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;

    setFilters(prev => {
      if (type === 'checkbox') {
        const { checked } = e.target as HTMLInputElement;
        if (name === 'annualFee') {
          const feeValue = value as AnnualFeeFilter;
          const currentFees = prev.annualFee;
          if (checked) {
            return { ...prev, annualFee: [...currentFees, feeValue] };
          } else {
            return { ...prev, annualFee: currentFees.filter(fee => fee !== feeValue) };
          }
        } else {
          return { ...prev, [name]: checked };
        }
      } else {
        return { ...prev, [name]: value };
      }
    });
  };

  const handleClearFilters = () => {
    setFilters(defaultFilters);
  };

  // NEW Handler for selecting cards
  const handleSelectCard = (event: React.ChangeEvent<HTMLSelectElement>) => {
      const cardName = event.target.value;
      if (!cardName) return; // Ignore default "-- Select Card --" option

      const cardToAdd = cards.find(c => c["Card Name"] === cardName);
      if (cardToAdd && selectedCards.length < 3 && !selectedCards.some(sc => sc["Card Name"] === cardName)) {
          setSelectedCards(prev => [...prev, cardToAdd]);
      }
      // Reset dropdown value
      event.target.value = "";
  };

  // NEW Handler for removing selected cards
  const handleRemoveCard = (cardName: string) => {
      setSelectedCards(prev => prev.filter(c => c["Card Name"] !== cardName));
  };

  // --- useEffect to recalculate selected card rewards ---
  useEffect(() => {
      const calculatedRewards = selectedCards.map(card =>
          calculateCardRewards(card, spend, redemptionStrategy)
      );
      setSelectedCardRewards(calculatedRewards);
  }, [selectedCards, spend, redemptionStrategy]); // Dependencies


  // --- Core Calculation Logic (useMemo for main results list) ---
   const results: DetailedCreditCard[] = useMemo(() => {
       // (Helper: hasHighMultiplier) - Must be defined inside useMemo or outside component
       const hasHighMultiplier = (card: DetailedCreditCard, categories: string[], threshold: number): boolean => {
          if (!Array.isArray(card.rewards)) return false;
          const expandedCategories = categories.flatMap(cat => categoryMap[cat as keyof SpendInput] || [cat]);
          return card.rewards.some(reward => expandedCategories.includes(reward.category) && reward.multiplier >= threshold);
        };

       // 1. Calculate values for ALL cards first (same logic as before)
       const calculatedCards = cards.map(card => {
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
            if (Array.isArray(card.perks)) { card.perks.forEach(perk => { if (perk.value_usd && perk.frequency === 'annual') { annualPerkValue += perk.value_usd; } else if (perk.type === 'global_entry_tsa_precheck_credit' && perk.value_usd && perk.frequency?.includes('years')) { const years = parseInt(perk.frequency.split('_')[1]) || 4; if (years > 0) annualPerkValue += perk.value_usd / years; } else if ((perk.type === 'anniversary_points' || perk.type === 'anniversary_miles') && perk.estimated_value_usd) { annualPerkValue += perk.estimated_value_usd; } }); }
            const netValueIncludingPerks = rewardsValue + annualPerkValue - card["Annual Fee"]; const signUpBonusValue = card.signUpBonus?.estimated_value_usd ?? 0; const firstYearNetValue = netValueIncludingPerks + signUpBonusValue;
            return { ...card, calculatedPoints: Math.round(totalAnnualPoints), calculatedRewardsValue: parseFloat(rewardsValue.toFixed(2)), calculatedAnnualPerkValue: parseFloat(annualPerkValue.toFixed(2)), calculatedNetValue: parseFloat(netValueIncludingPerks.toFixed(2)), calculatedFirstYearNetValue: parseFloat(firstYearNetValue.toFixed(2)), };
        });

       // 2. Filter the calculated cards based on the filter state (same logic as before)
       const filteredCards = calculatedCards.filter(card => {
           if (!card) return false; // Ensure card exists
           // Card Type Filter
           if (filters.cardType !== 'all' && card["Card Type"].toLowerCase() !== filters.cardType) { return false; }
           // Annual Fee Filter
           if (filters.annualFee.length > 0) { let feeMatch = false; const annualFee = card["Annual Fee"]; if (filters.annualFee.includes('noFee') && annualFee === 0) feeMatch = true; if (!feeMatch && filters.annualFee.includes('under100') && annualFee > 0 && annualFee < 100) feeMatch = true; if (!feeMatch && filters.annualFee.includes('premium') && annualFee >= 100) feeMatch = true; if (!feeMatch) return false; }
           // Intro APR Filter
           if (filters.introApr && (!card["Intro APR"] || card["Intro APR"].trim() === "")) { return false; }
           // Focus Filters
           const focusThreshold = 3; if (filters.travelFocus && !hasHighMultiplier(card, ['flights', 'hotels'], focusThreshold)) { return false; }
           if (filters.diningFocus && !hasHighMultiplier(card, ['dining'], focusThreshold)) { return false; }
           if (filters.groceryFocus && !hasHighMultiplier(card, ['groceries'], focusThreshold)) { return false; }
           return true; // Card passes all active filters
       });

       // 3. Sort the filtered cards (same logic as before)
       return filteredCards.sort((a, b) => (b.calculatedFirstYearNetValue ?? -Infinity) - (a.calculatedFirstYearNetValue ?? -Infinity));

   }, [spend, redemptionStrategy, filters]);

  // --- AI Recommendation Fetching (Updated) ---
   const getAiRecommendation = async () => {
       setLoading(true); setError('');
       try {
           const topCardsContext = results.slice(0, 5).map(card => {
                const selectedCpp = getSelectedCpp(card, redemptionStrategy);
                return {
                    cardName: card["Card Name"],
                    issuer: card.Issuer,
                    cardType: card["Card Type"],
                    annualFee: card["Annual Fee"],
                    estimatedFirstYearNetValue: card.calculatedFirstYearNetValue,
                    estimatedOngoingNetValue: card.calculatedNetValue,
                    calculatedAnnualRewardsValue: card.calculatedRewardsValue,
                    calculatedAnnualPerkValue: card.calculatedAnnualPerkValue,
                    calculatedAnnualPoints: card.calculatedPoints,
                    cppUsedForValue: selectedCpp,
                    redemptionStrategyUsed: redemptionStrategy,
                    signUpBonusValue: card.signUpBonus?.estimated_value_usd ?? 0,
                    signUpBonusDescription: card.signUpBonus?.description || "N/A",
                    topRewardCategories: Array.isArray(card.rewards) ? card.rewards
                        .filter(r => r.multiplier > 1 && r.category !== 'other')
                        .sort((a, b) => b.multiplier - a.multiplier)
                        .slice(0, 4)
                        .map(r => ({ category: r.category, multiplier: r.multiplier, notes: r.notes, cap: r.cap ? { amount_usd: r.cap.amount_usd, period: r.cap.period } : null })) : [],
                    keyPerks: Array.isArray(card.perks) ? card.perks
                        .filter(p => ['lounge_access', 'free_checked_bag', 'travel_credit', 'companion_fare', 'companion_certificate', 'global_entry_tsa_precheck_credit', 'annual_hotel_credit', 'anniversary_points', 'anniversary_miles', 'hilton_status'].includes(p.type) || p.value_usd > 0 || p.estimated_value_usd > 0)
                        .map(p => ({ type: p.type, description: p.description || p.type.replace(/_/g, ' '), value: p.value_usd || p.estimated_value_usd || 0, frequency: p.frequency }))
                        .slice(0, 5) : [],
               };
           });
           const currentAnnualSpend = Object.entries(spend).reduce((acc, [key, monthlySpend]) => {
               acc[key as keyof SpendInput] = monthlySpend * 12; return acc;
           }, {} as { [key in keyof SpendInput]: number });

           // *** ADD selected card data to the payload ***
           const payload = {
               spend,
               annualSpend: currentAnnualSpend,
               redemptionStrategy,
               topCards: topCardsContext,
               userOwnedCards: selectedCardRewards // Pass calculated data for selected cards
           };

           const res = await fetch('/api/gpt-recommend', {
               method: 'POST', headers: { 'Content-Type': 'application/json' },
               body: JSON.stringify(payload), // Send updated payload
            });

           if (!res.ok) throw new Error(`Server responded ${res.status}`);
           const data = await res.json();
           setAiSuggestion(data.recommendation);

       } catch (err: any) {
            console.error('AI request failed:', err);
            setError('AI recommendation failed. Please try again.');
       } finally {
            setLoading(false);
       }
   };

  // --- Format AI Output ---
  function formatAiOutput(text: string): string {
     // Minimal replacements - rely on AI generating good markdown
     let formatted = text
         .replace(/### (.*?)(?=\n|$)/gm, '<h3>$1</h3>')       // H3 Headings
         .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')    // Bold
         .replace(/---/g, '<hr style="margin: 1rem 0;" />')   // Separator
         // Basic list item conversion: find lines starting with '* '
         // Use capturing group to allow nested formatting like bold inside lists
         .replace(/^\* (.*)$/gm, '<li>$1</li>');

     // Attempt to wrap consecutive <li> tags in <ul>. Handles simple cases.
     formatted = formatted.replace(/(?:<li>.*?<\/li>\s*)+/gs, (match) => `<ul>${match.trim()}</ul>`);

     // Convert remaining newlines to <br>, carefully avoiding extra breaks after blocks
     formatted = formatted
         .replace(/<\/(h3|ul|li|p)>\s*\n/g, '</$1>\n') // Remove newline after block elements first
         .replace(/<hr.*?>\s*\n/g, '<hr />\n')       // Remove newline after hr
         .replace(/\n/g, '<br />');                 // Convert remaining newlines

     // Clean up potential <br> immediately after closing block elements
     formatted = formatted.replace(/<\/(h3|ul|li|p)>\s*<br \/>/g, '</$1>');
     formatted = formatted.replace(/<hr.*?>\s*<br \/>/g, '<hr />');
     // Clean up extra breaks potentially before <ul>
     formatted = formatted.replace(/<br \/>\s*<ul>/g, '<ul>');

     return formatted;
  }

  // --- Render JSX ---
  return (
    <div className={styles.container}>
      <h2 className={styles.heroTitle}>AI-Powered Travel Rewards Calculator</h2>
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

      {/* --- MAIN LAYOUT GRID --- */}
      <div className={styles.mainLayout}>

        {/* --- LEFT COLUMN --- */}
        <div className={styles.leftColumn}>
          <p className={styles.heroDescription}>Enter your estimated <strong>monthly</strong> spending:</p>
          <form className={styles.inputGrid}>
             {categoryList.map((category) => (
               <div key={category} className={styles.inputGroup}>
                 <label htmlFor={category}>
                   {category === 'onlineShopping' ? 'Online Shopping (US)' : category.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())} (Monthly $):
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
                   className={styles.inputField}
                 />
               </div>
             ))}
          </form>
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
                    <select id="cardType" name="cardType" value={filters.cardType} onChange={handleFilterChange} className={styles.filterDropdown}>
                        <option value="all">All Types</option>
                        <option value="personal">Personal</option>
                        <option value="business">Business</option>
                    </select>
                </div>
                {/* Annual Fee */}
                <div className={styles.filterGroup}>
                    <label className={styles.groupLabel}>Annual Fee</label>
                    <div className={styles.filterControl}>
                        <input type="checkbox" id="noFee" name="annualFee" value="noFee" checked={filters.annualFee.includes('noFee')} onChange={handleFilterChange}/>
                        <label htmlFor="noFee">No Annual Fee ($0)</label>
                    </div>
                    <div className={styles.filterControl}>
                        <input type="checkbox" id="under100" name="annualFee" value="under100" checked={filters.annualFee.includes('under100')} onChange={handleFilterChange}/>
                        <label htmlFor="under100">Under $100 ($1-99)</label>
                    </div>
                    <div className={styles.filterControl}>
                        <input type="checkbox" id="premium" name="annualFee" value="premium" checked={filters.annualFee.includes('premium')} onChange={handleFilterChange}/>
                        <label htmlFor="premium">Premium ($100+)</label>
                    </div>
                </div>
                {/* Offers */}
                <div className={styles.filterGroup}>
                    <label className={styles.groupLabel}>Offers</label>
                    <div className={styles.filterControl}>
                        <input type="checkbox" id="introApr" name="introApr" checked={filters.introApr} onChange={handleFilterChange}/>
                        <label htmlFor="introApr">Has 0% Intro APR</label>
                    </div>
                </div>
                {/* Category Focus */}
                <div className={styles.filterGroup}>
                    <label className={styles.groupLabel}>Category Focus (3x+)</label>
                    <div className={styles.filterControl}>
                        <input type="checkbox" id="travelFocus" name="travelFocus" checked={filters.travelFocus} onChange={handleFilterChange}/>
                        <label htmlFor="travelFocus">Travel Focus</label>
                    </div>
                    <div className={styles.filterControl}>
                        <input type="checkbox" id="diningFocus" name="diningFocus" checked={filters.diningFocus} onChange={handleFilterChange}/>
                        <label htmlFor="diningFocus">Dining Focus</label>
                    </div>
                    <div className={styles.filterControl}>
                        <input type="checkbox" id="groceryFocus" name="groceryFocus" checked={filters.groceryFocus} onChange={handleFilterChange}/>
                        <label htmlFor="groceryFocus">Grocery Focus</label>
                    </div>
                </div>
            </div>
          </div>
          {/* Button container might be better outside the filter section if it relates to results/AI */}
          <div className={styles.stickyButtonContainer}>
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
          <div className={styles.aiSection}>
            {aiSuggestion && (
                <div className={styles.aiSuggestionBox}>
                    <div dangerouslySetInnerHTML={{ __html: formatAiOutput(aiSuggestion) }}></div>
                </div>
            )}
            {!aiSuggestion && !loading && results.length > 0 && (
                <p className={styles.aiPlaceholder}>Click "Get AI Suggestion" for a personalized recommendation based on the results.</p>
            )}
          </div>
        </div> {/* --- END LEFT COLUMN --- */}


        {/* --- RIGHT COLUMN --- */}
        <div className={styles.rightColumn}>

          {/* --- NEW Selected Card Calculator Section --- */}
          <div className={styles.selectedCardCalculator}>
             <h4>Calculate Rewards for Your Cards</h4>
             <div className={styles.cardSelectorContainer}>
                 <label htmlFor="cardSelector">Select up to 3 cards:</label>
                 <select
                    id="cardSelector"
                    onChange={handleSelectCard}
                    disabled={selectedCards.length >= 3}
                    value="" // Controlled outside or reset on change
                    className={`${styles.selectBox} ${styles.cardSelectorDropdown}`} // Combine styles
                 >
                    <option value="">-- Select Card --</option>
                    {sortedCardNames
                        .filter(name => !selectedCards.some(sc => sc["Card Name"] === name)) // Filter out already selected
                        .map(cardName => (
                            <option key={cardName} value={cardName}>{cardName}</option>
                        ))
                    }
                 </select>
                 <div className={styles.selectedCardChips}>
                    {selectedCards.map(card => (
                        <span key={card["Card Name"]} className={styles.selectedCardChip}>
                            {card["Card Name"]}
                            <button onClick={() => handleRemoveCard(card["Card Name"])}>&times;</button>
                        </span>
                    ))}
                 </div>
             </div>

             {/* Display Results for Selected Cards */}
             <div className={styles.selectedCardResultsContainer}>
                {selectedCardRewards.map(rewardData => (
                    <div key={rewardData.cardName} className={styles.selectedCardResultItem}>
                       <div className={styles.selectedCardHeader}>
                           <img src={rewardData.cardImage} alt={rewardData.cardName} className={styles.selectedCardImage}/>
                           <strong>{rewardData.cardName}</strong>
                       </div>
                       <div className={styles.selectedValue}>
                            Est. Net Value: <span className={rewardData.netValue >= 0 ? styles.valueGood : styles.valueBad}>${rewardData.netValue.toFixed(2)}</span>
                            <small>(Rewards: ${rewardData.rewardsValue.toFixed(2)} + Perks: ${rewardData.annualPerkValue.toFixed(2)} - Fee: ${rewardData.annualFee.toFixed(2)})</small>
                       </div>
                       <details className={styles.categoryBreakdown}>
                           <summary>Points Breakdown ({rewardData.totalPoints} pts)</summary>
                           <ul className={styles.categoryBreakdownList}>
                               {rewardData.breakdown.map(cat => (
                                   <li key={cat.category}>
                                       <span>{cat.category.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}:</span>
                                       <span>{cat.points} pts (~${cat.value.toFixed(2)})</span>
                                   </li>
                               ))}
                           </ul>
                       </details>
                    </div>
                ))}
             </div>
          </div>
          {/* --- END Selected Card Calculator Section --- */}


          {/* Separator */}
          {selectedCardRewards.length > 0 && <hr className={styles.columnSeparator}/>}

          {/* Main Results List */}
          <h3 className={styles.resultsTitle}>
            {JSON.stringify(filters) !== JSON.stringify(defaultFilters) ? 'Filtered Results' : 'Top Card Recommendations'}
            {results.length > 0 && <span className={styles.resultsCount}> ({results.length} found)</span>}
          </h3>
          <ul className={styles.cardList}>
            {results && results.length > 0 ? ( results.slice(0, 10).map((card, index) => ( card && card["Card Name"] ? (
                 <li key={card["Card Name"] + '-' + index} className={styles.cardItem}> {/* Added index to key for safety if names aren't unique */}
                     <img
                         src={card.image || '/placeholder.png'} // Ensure placeholder path is correct
                         alt={card["Card Name"]}
                         className={styles.cardImage}
                         onError={(e) => { (e.target as HTMLImageElement).src = '/placeholder.png'; }} // Ensure placeholder path is correct
                     />
                     <div className={styles.cardDetails}>
                         <div className={styles.cardTitle}>
                             <strong>{index + 1}. {card.Issuer} - {card["Card Name"]} <span>({card["Card Type"]})</span></strong>
                         </div>
                         <div className={styles.cardValues}>
                             <div><strong>Est. 1st Year:</strong> <span className={(card.calculatedFirstYearNetValue ?? 0) >= 0 ? styles.valueGood : styles.valueBad}>${(card.calculatedFirstYearNetValue ?? 0).toFixed(2)}</span></div>
                             <div><strong>Ongoing:</strong> <span className={styles.valueOngoing}>${(card.calculatedNetValue ?? 0).toFixed(2)}</span>/yr</div>
                         </div>
                         <small className={styles.cardSubtext}>
                             (Rewards: ${(card.calculatedRewardsValue ?? 0).toFixed(2)} + Perks: ${(card.calculatedAnnualPerkValue ?? 0).toFixed(2)} - Fee: ${card["Annual Fee"]}) | Est. Points: {card.calculatedPoints ?? 0} @ {getSelectedCpp(card, redemptionStrategy).toFixed(2)} CPP
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
                                         .slice(0, 3) // Show top 3 key perks
                                         .map((perk, pIndex) => ( <li key={pIndex}>{formatPerkForCompare(perk)}</li> ))
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
                 <li className={styles.noResults}>
                     {JSON.stringify(filters) !== JSON.stringify(defaultFilters)
                         ? 'No cards match your current filters and spending.'
                         : 'Enter your spending details above to see card recommendations.'}
                 </li>
                 )}
          </ul>

        </div> {/* --- END RIGHT COLUMN --- */}

      </div> {/* --- END MAIN LAYOUT GRID --- */}


      {/* Comparison Modal (Keep Existing Structure) */}
      {showComparison && cardsToCompare.length > 0 && (
         <div className={styles.comparisonOverlay}>
             <div className={styles.comparisonContent}>
                 <button onClick={() => setShowComparison(false)} className={styles.closeButton}> &times; </button>
                 <h3>Compare Top {cardsToCompare.length} Cards</h3>
                 <div className={styles.comparisonTableWrapper}>
                     <div className={styles.comparisonGrid} style={{ gridTemplateColumns: `minmax(160px, 1.2fr) repeat(${cardsToCompare.length}, minmax(180px, 1fr))`}}>
                         {/* Header Row */}
                         <div className={`${styles.compareCell} ${styles.compareCellHeader} ${styles.compareCellLabel}`}>Feature</div>
                         {cardsToCompare.map(card => (
                             <div key={card["Card Name"]} className={`${styles.compareCell} ${styles.compareCellHeader}`}>
                                 <img src={card.image || '/placeholder.png'} alt={card["Card Name"]} className={styles.compareCardImage} onError={(e) => { (e.target as HTMLImageElement).src = '/placeholder.png'; }}/>
                                 <div>{card["Card Name"]}</div>
                                 <div className={styles.compareIssuer}>{card.Issuer}</div>
                             </div>
                         ))}
                         {Array.from({ length: 3 - cardsToCompare.length }).map((_, i) => <div key={`empty-header-${i}`} className={`${styles.compareCell} ${styles.compareCellHeader}`}>-</div>)}

                         {/* Data Rows */}
                         <div className={`${styles.compareCell} ${styles.compareCellLabel}`}>Annual Fee</div>
                         {cardsToCompare.map((c, i) => <div key={`fee-${i}`} className={`${styles.compareCell} ${styles.compareCellData}`}>{`$${c["Annual Fee"].toFixed(2)}`}</div>)}
                         {Array.from({ length: 3 - cardsToCompare.length }).map((_, i) => <div key={`empty-fee-${i}`} className={`${styles.compareCell} ${styles.compareCellData}`}>-</div>)}

                         <div className={`${styles.compareCell} ${styles.compareCellLabel}`}>Est. First Year Value</div>
                         {cardsToCompare.map((c,i) => <div key={`fyv-${i}`} className={`${styles.compareCell} ${styles.compareCellData}`}><span className={(c.calculatedFirstYearNetValue ?? 0) >= 0 ? styles.valueGood : styles.valueBad}>${(c.calculatedFirstYearNetValue ?? 0).toFixed(2)}</span></div>)}
                         {Array.from({ length: 3 - cardsToCompare.length }).map((_, i) => <div key={`empty-fyv-${i}`} className={`${styles.compareCell} ${styles.compareCellData}`}>-</div>)}

                         <div className={`${styles.compareCell} ${styles.compareCellLabel}`}>Est. Ongoing Value</div>
                         {cardsToCompare.map((c,i) => <div key={`ogv-${i}`} className={`${styles.compareCell} ${styles.compareCellData}`}><span className={styles.valueOngoing}>${(c.calculatedNetValue ?? 0).toFixed(2)}</span></div>)}
                         {Array.from({ length: 3 - cardsToCompare.length }).map((_, i) => <div key={`empty-ogv-${i}`} className={`${styles.compareCell} ${styles.compareCellData}`}>-</div>)}

                         <div className={`${styles.compareCell} ${styles.compareCellLabel}`}>Sign-Up Bonus</div>
                         {cardsToCompare.map((c,i) => <div key={`bonus-${i}`} className={`${styles.compareCell} ${styles.compareCellData} ${styles.smallText}`}>{c.signUpBonus?.description || 'N/A'} {c.signUpBonus?.estimated_value_usd > 0 && <span>(~$${c.signUpBonus.estimated_value_usd})</span>}</div>)}
                         {Array.from({ length: 3 - cardsToCompare.length }).map((_, i) => <div key={`empty-bonus-${i}`} className={`${styles.compareCell} ${styles.compareCellData}`}>-</div>)}

                         <div className={`${styles.compareCell} ${styles.compareCellLabel}`}>Top Reward Rates</div>
                         {cardsToCompare.map((c,i) => <div key={`rewards-${i}`} className={`${styles.compareCell} ${styles.compareCellData}`}>
                             <ul className={styles.compareList}>
                                 {(Array.isArray(c.rewards) ? c.rewards.filter(r => r.multiplier > 1 && r.category !== 'other').sort((a,b) => b.multiplier - a.multiplier).slice(0, 3) : [])
                                     .map((r, rIndex) => <li key={rIndex}>{r.multiplier}x {r.category.replace(/_/g,' ').replace(' us', ' (US)')}{r.cap ? ` ($${r.cap.amount_usd}/${r.cap.period})`:''}</li>)}
                                 <li>{(Array.isArray(c.rewards) ? c.rewards.find(r => r.category === 'other')?.multiplier : 1) ?? 1}x Other</li>
                             </ul>
                         </div>)}
                         {Array.from({ length: 3 - cardsToCompare.length }).map((_, i) => <div key={`empty-rewards-${i}`} className={`${styles.compareCell} ${styles.compareCellData}`}>-</div>)}

                          <div className={`${styles.compareCell} ${styles.compareCellLabel}`}>Key Perks</div>
                          {cardsToCompare.map((c,i) => <div key={`perks-${i}`} className={`${styles.compareCell} ${styles.compareCellData}`}>
                              <ul className={styles.compareList}>
                                  {(Array.isArray(c.perks) ? c.perks.filter(p => ['lounge_access', 'free_checked_bag', 'travel_credit', 'companion_fare', 'companion_certificate', 'global_entry_tsa_precheck_credit', 'annual_hotel_credit', 'anniversary_points', 'anniversary_miles', 'hilton_status'].includes(p.type) || p.value_usd > 0 || p.estimated_value_usd > 0).slice(0, 4) : [])
                                      .map((p, pIndex) => <li key={pIndex}>{formatPerkForCompare(p)}</li>)}
                                  {(Array.isArray(c.perks) ? c.perks.filter(p => ['lounge_access', 'free_checked_bag', 'travel_credit', 'companion_fare', 'companion_certificate', 'global_entry_tsa_precheck_credit', 'annual_hotel_credit', 'anniversary_points', 'anniversary_miles', 'hilton_status'].includes(p.type) || p.value_usd > 0 || p.estimated_value_usd > 0).length === 0 : true) && (<li>-</li>)}
                              </ul>
                          </div>)}
                          {Array.from({ length: 3 - cardsToCompare.length }).map((_, i) => <div key={`empty-perks-${i}`} className={`${styles.compareCell} ${styles.compareCellData}`}>-</div>)}

                         <div className={`${styles.compareCell} ${styles.compareCellLabel}`}>Redemption Strategy</div>
                         {cardsToCompare.map((c,i) => <div key={`strat-${i}`} className={`${styles.compareCell} ${styles.compareCellData} ${styles.italicText}`}>{redemptionStrategy.replace(/_/g, ' ')}</div>)}
                         {Array.from({ length: 3 - cardsToCompare.length }).map((_, i) => <div key={`empty-strat-${i}`} className={`${styles.compareCell} ${styles.compareCellData}`}>-</div>)}

                         <div className={`${styles.compareCell} ${styles.compareCellLabel}`}>CPP Used</div>
                         {cardsToCompare.map((c,i) => <div key={`cpp-${i}`} className={`${styles.compareCell} ${styles.compareCellData}`}>{getSelectedCpp(c, redemptionStrategy).toFixed(2)}</div>)}
                         {Array.from({ length: 3 - cardsToCompare.length }).map((_, i) => <div key={`empty-cpp-${i}`} className={`${styles.compareCell} ${styles.compareCellData}`}>-</div>)}

                         <div className={`${styles.compareCell} ${styles.compareCellLabel}`}>Links</div>
                         {cardsToCompare.map((c,i) => <div key={`links-${i}`} className={`${styles.compareCell} ${styles.compareCellData}`}>
                             <a href={c.reviewLink} target="_blank" rel="noopener noreferrer" className={`${styles.compareLink} ${styles.reviewLink}`}>Review</a>
                             <a href={c.applyLink} target="_blank" rel="noopener noreferrer" className={`${styles.compareLink} ${styles.applyLink}`}>Apply</a>
                         </div>)}
                         {Array.from({ length: 3 - cardsToCompare.length }).map((_, i) => <div key={`empty-links-${i}`} className={`${styles.compareCell} ${styles.compareCellData}`}>-</div>)}

                     </div> {/* End Comparison Grid */}
                 </div> {/* End Comparison Table Wrapper */}
             </div> {/* End Comparison Content Box */}
       </div> // End Overlay
       )}

    </div> // End Container
  );
}