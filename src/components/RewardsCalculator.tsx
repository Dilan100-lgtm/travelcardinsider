import React, { useState, useMemo, useEffect, useRef } from 'react';
import cardDataRaw from '@/data/finalcreditcard.json';
import styles from '@/styles/rewards.module.css'; // Ensure CSS path is correct

// --- Interfaces (Keep Existing + Add New) ---
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
    // Calculated fields (might be removed if not used directly in main list anymore)
    calculatedPoints?: number;
    calculatedRewardsValue?: number;
    calculatedAnnualPerkValue?: number;
    calculatedNetValue?: number; // Ongoing
    calculatedFirstYearNetValue?: number; // First year
}
// Interfaces for Selected Card Calculations
interface CalculatedCategoryReward {
  category: string;
  points: number;
  value: number;
}
interface CalculatedCardReward {
  cardName: string;
  cardImage: string;
  issuer: string; // Added for display
  reviewLink: string; // Added for button
  totalPoints: number;
  rewardsValue: number;
  annualPerkValue: number;
  annualFee: number;
  netValue: number; // Ongoing net value
  breakdown: CalculatedCategoryReward[];
}

// --- Data Loading ---
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

// --- Categories & Grouping ---
const categoryList = [ 'dining', 'groceries', 'gas', 'flights', 'hotels', 'streaming', 'transit', 'onlineShopping', 'drugstores', 'other'] as const;
type SpendInput = { [key in typeof categoryList[number]]: number; };

const categoryGroups = {
    "Travel": ['flights', 'hotels'],
    "Dining": ['dining'],
    "Everyday": ['groceries', 'gas', 'onlineShopping', 'drugstores'],
    "Other": ['streaming', 'transit', 'other']
};
const categoryIcons: { [key in keyof SpendInput]?: string } = {
    dining: '🍽️', groceries: '🛒', gas: '⛽', flights: '✈️', hotels: '🏨',
    streaming: '📺', transit: '🚌', onlineShopping: '💻', drugstores: '💊', other: ' miscellaneous'
};

const defaultSpend: SpendInput = { dining: 0, groceries: 0, gas: 0, flights: 0, hotels: 0, streaming: 0, transit: 0, onlineShopping: 0, drugstores: 0, other: 0, };

type RedemptionStrategy = 'default' | 'cash_back' | 'travel_portal' | 'transfer_partners';

// --- React Component ---
export default function RewardsCalculator() {
  // --- State Hooks ---
  const [spend, setSpend] = useState<SpendInput>(defaultSpend);
  const [redemptionStrategy, setRedemptionStrategy] = useState<RedemptionStrategy>('default');
  const [aiSuggestion, setAiSuggestion] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  // NEW State for selected cards
  const [selectedCards, setSelectedCards] = useState<DetailedCreditCard[]>([]); // Stores full card details
  const [selectedCardRewards, setSelectedCardRewards] = useState<CalculatedCardReward[]>([]); // Stores calculated results

  const calculatorSectionRef = useRef<HTMLDivElement>(null); // Ref for scrolling

  // Sort cards alphabetically for the dropdown
  const sortedCardNames = useMemo(() => cards.map(c => c["Card Name"]).sort((a, b) => a.localeCompare(b)), [cards]);

  // --- Helper Functions ---
  const getSelectedCpp = (card: DetailedCreditCard, strategy: RedemptionStrategy): number => {
    const options = card.redemptionOptions; if (!options) return 1.0;
    switch (strategy) {
        case 'cash_back': return options.cash_back_cpp ?? options.travel_statement_credit_cpp ?? 1.0;
        case 'travel_portal': return options.chase_travel_portal_cpp ?? options.amex_travel_cpp ?? options.cap_one_travel_cpp ?? options.travel_statement_credit_cpp ?? 1.0;
        case 'transfer_partners': return options.transfer_partner_average_cpp ?? options.chase_travel_portal_cpp ?? 1.5;
        case 'default': default: return options.transfer_partner_average_cpp ?? options.chase_travel_portal_cpp ?? options.amex_travel_cpp ?? options.cap_one_travel_cpp ?? options.travel_statement_credit_cpp ?? options.cash_back_cpp ?? 1.0;
    }
  };

  const categoryMap: { [key in keyof SpendInput]?: string[] } = useMemo(() => ({
    dining: ['dining'],
    groceries: ['groceries_us', 'groceries', 'online_grocery'],
    gas: ['gas_us', 'gas'],
    flights: ['flights_direct', 'flights_amex_travel', 'flights_chase_portal', 'flights_capital_one_portal', 'airlines', 'southwest_airlines', 'united_airlines', 'jetblue', 'hawaiian_airlines', 'delta_airlines', 'american_airlines', 'british_airways', 'alaska_airlines', 'aircanada'],
    hotels: ['hotel', 'hotel_amex_travel', 'hotel_chase_portal', 'hotel_capital_one_portal', 'hilton_hotels', 'hyatt_hotels'],
    streaming: ['streaming'],
    transit: ['transit'],
    onlineShopping: ['online_retail_us'],
    drugstores: ['drugstores'],
    other: ['other'],
}), []);

  const getOtherMultiplier = (card: DetailedCreditCard): number => {
    const otherRule = Array.isArray(card.rewards) ? card.rewards.find(r => r.category === 'other') : undefined;
    return otherRule?.multiplier ?? 1;
  };

  const findBestRuleForInput = (card: DetailedCreditCard, uiCategory: keyof SpendInput): CardReward | undefined => {
    const targetJsonCategories = categoryMap[uiCategory] || [];
    let bestRule: CardReward | undefined = undefined;
    let bestMultiplier = 0;
    for (const jsonCat of targetJsonCategories) {
        const rule = Array.isArray(card.rewards) ? card.rewards.find(r => r.category === jsonCat) : undefined;
        if (rule && rule.multiplier > bestMultiplier) {
            bestMultiplier = rule.multiplier;
            bestRule = rule;
        }
    }
    const otherMultiplier = getOtherMultiplier(card);
    const otherRule = Array.isArray(card.rewards) ? card.rewards.find(r => r.category === 'other') : undefined;
    if (!bestRule || bestMultiplier <= otherMultiplier) {
        return otherRule; // Return 'other' rule if no better match or if 'other' is higher/equal
    }
    return bestRule;
  };

  // --- Calculation Function for Selected Cards ---
  const calculateCardRewards = (card: DetailedCreditCard, spendInput: SpendInput, strategy: RedemptionStrategy): CalculatedCardReward => {
      let totalAnnualPoints = 0;
      const breakdown: CalculatedCategoryReward[] = [];
      const capSpendTracker: { [capKey: string]: number } = {};
      const otherMultiplier = getOtherMultiplier(card);
      const selectedCpp = getSelectedCpp(card, strategy);

      for (const uiCategory of categoryList) {
          const monthlySpend = spendInput[uiCategory as keyof SpendInput];
          if (monthlySpend <= 0) continue;
          const annualSpendInCategory = monthlySpend * 12;
          const rule = findBestRuleForInput(card, uiCategory as keyof SpendInput);
          const multiplier = rule?.multiplier ?? otherMultiplier;
          let categoryPoints = 0;

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
                  const quarterlyCapLimit = capLimit; // Assuming cap is per quarter
                  for (let quarter = 0; quarter < 4; quarter++) {
                      // Estimate spend per quarter - simpler than tracking exact quarterly spend
                      const quarterlySpendEstimate = monthlySpend * 3;
                      // Apply cap logic per quarter (this is an approximation)
                      // A more accurate approach would need quarterly inputs or different logic
                      const spendAtBonus = Math.min(quarterlySpendEstimate, quarterlyCapLimit);
                      const spendAtOther = Math.max(0, quarterlySpendEstimate - spendAtBonus);
                      pointsAtBonusRate += spendAtBonus * multiplier;
                      pointsAtOtherRate += spendAtOther * otherMultiplier;
                  }
              }
              categoryPoints = pointsAtBonusRate + pointsAtOtherRate;
          } else {
              categoryPoints = annualSpendInCategory * multiplier;
          }

          totalAnnualPoints += categoryPoints;
          if (categoryPoints > 0) { // Only add to breakdown if points were earned
              breakdown.push({
                  category: uiCategory,
                  points: Math.round(categoryPoints),
                  value: (categoryPoints * selectedCpp) / 100
              });
          }
      }

      let annualPerkValue = 0;
      if (Array.isArray(card.perks)) {
          card.perks.forEach(perk => {
              if (perk.value_usd && perk.frequency === 'annual') { annualPerkValue += perk.value_usd; }
              else if (perk.type === 'global_entry_tsa_precheck_credit' && perk.value_usd && perk.frequency?.includes('years')) { const years = parseInt(perk.frequency.split('_')[1]) || 4; if(years > 0) annualPerkValue += perk.value_usd / years; }
              else if ((perk.type === 'anniversary_points' || perk.type === 'anniversary_miles') && perk.estimated_value_usd) { annualPerkValue += perk.estimated_value_usd; }
          });
      }

      const rewardsValue = (totalAnnualPoints * selectedCpp) / 100;
      const annualFee = card["Annual Fee"] ?? 0;
      const netValue = rewardsValue + annualPerkValue - annualFee;

      return {
          cardName: card["Card Name"],
          cardImage: card.image || '/placeholder.png',
          issuer: card.Issuer,
          reviewLink: card.reviewLink,
          totalPoints: Math.round(totalAnnualPoints),
          rewardsValue: parseFloat(rewardsValue.toFixed(2)),
          annualPerkValue: parseFloat(annualPerkValue.toFixed(2)),
          annualFee: annualFee,
          netValue: parseFloat(netValue.toFixed(2)),
          breakdown: breakdown.sort((a,b) => b.value - a.value) // Sort breakdown by value
      };
  };

  // --- Event Handlers ---
  const handleScrollToCalculator = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    calculatorSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSpend((prev) => ({ ...prev, [name]: parseFloat(value) || 0 }));
  };

  const handleRedemptionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setRedemptionStrategy(e.target.value as RedemptionStrategy);
  };

  // Handler for selecting cards to calculate
  const handleSelectCard = (event: React.ChangeEvent<HTMLSelectElement>) => {
      const cardName = event.target.value;
      if (!cardName) return;
      const cardToAdd = cards.find(c => c["Card Name"] === cardName);
      // Allow selecting up to e.g., 5 cards now
      if (cardToAdd && selectedCards.length < 5 && !selectedCards.some(sc => sc["Card Name"] === cardName)) {
          setSelectedCards(prev => [...prev, cardToAdd]);
      }
      event.target.value = ""; // Reset dropdown
  };

  // Handler for removing selected cards
  const handleRemoveCard = (cardName: string) => {
      setSelectedCards(prev => prev.filter(c => c["Card Name"] !== cardName));
  };

  // --- useEffect to recalculate selected card rewards ---
  useEffect(() => {
      const calculatedRewards = selectedCards.map(card =>
          calculateCardRewards(card, spend, redemptionStrategy)
      );
      setSelectedCardRewards(calculatedRewards);
  }, [selectedCards, spend, redemptionStrategy, calculateCardRewards]); // Added calculateCardRewards dependency


  // --- AI Recommendation Fetching ---
   const getAiRecommendation = async (regenerate = false) => {
       if (!regenerate && aiSuggestion) return; // Don't fetch if already have suggestion unless regenerating
       setLoading(true);
       setError('');
       setAiSuggestion(''); // Clear previous suggestion immediately

       try {
            // NOTE: results (potential cards) are no longer calculated here.
            // The AI will now ONLY get context from the user's selected cards.
            // If you still want to recommend NEW cards, you'd need to calculate
            // the `results` list like before and pass it as `topCards`.
            // For this redesign focusing on *owned* cards, we simplify the payload.

           const currentAnnualSpend = Object.entries(spend).reduce((acc, [key, monthlySpend]) => {
               acc[key as keyof SpendInput] = monthlySpend * 12; return acc;
           }, {} as { [key in keyof SpendInput]: number });

           // Simplified payload focusing on owned cards
           const payload = {
               spend,
               annualSpend: currentAnnualSpend,
               redemptionStrategy,
               // topCards: [], // Omit potential new cards for now
               userOwnedCards: selectedCardRewards // Pass calculated data for selected cards
           };

            // Check if there are selected cards to analyze
           if (!selectedCardRewards || selectedCardRewards.length === 0) {
               setError("Please select at least one card to get an AI analysis.");
               setLoading(false);
               return;
           }


           const res = await fetch('/api/gpt-recommend', {
               method: 'POST', headers: { 'Content-Type': 'application/json' },
               body: JSON.stringify(payload),
            });

           if (!res.ok) {
               const errorData = await res.json().catch(() => ({ error: `Server responded ${res.status}` }));
               throw new Error(errorData.error || `Server responded ${res.status}`);
           }
           const data = await res.json();
           setAiSuggestion(data.recommendation);

       } catch (err: any) {
            console.error('AI request failed:', err);
            setError(`AI analysis failed: ${err.message}. Please try again.`);
       } finally {
            setLoading(false);
       }
   };

  // Format AI Output (Handles Markdown)
  function formatAiOutput(text: string): string {
     let formatted = text
         .replace(/### (.*?)(?=\n|$)/gm, '<h3>$1</h3>')
         .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
         .replace(/---/g, '<hr />')
         .replace(/^\* (.*)$/gm, '<li>$1</li>');
     formatted = formatted.replace(/(?:<li>.*?<\/li>\s*)+/gs, (match) => `<ul>${match.trim()}</ul>`);
     formatted = formatted
         .replace(/<\/(h3|ul|li|p)>\s*\n/g, '</$1>\n')
         .replace(/<hr.*?>\s*\n/g, '<hr />\n')
         .replace(/\n/g, '<br />');
     formatted = formatted.replace(/<\/(h3|ul|li|p)>\s*<br \/>/g, '</$1>');
     formatted = formatted.replace(/<hr.*?>\s*<br \/>/g, '<hr />');
     formatted = formatted.replace(/<br \/>\s*<ul>/g, '<ul>');
     return formatted;
  }

  // --- Render JSX ---
  return (
    <>
      {/* --- Hero Section --- */}
      <section className={styles.heroSection}>
        <h1 className={styles.heroTitle}>Maximize Your Credit Card Rewards</h1>
        <p className={styles.heroSubtitle}>
          Calculate the value of your cards based on your spending and get personalized AI insights.
        </p>
        <button onClick={handleScrollToCalculator} className={styles.heroButton}>
          Start Calculating
        </button>
      </section>

      {/* --- Top Card Picks Section --- */}
      <section className={styles.topPicksSection}>
        <h2 className={styles.sectionTitle}>Top Card Picks for Travelers</h2>
        <div className={styles.topPicksGrid}>
          {/* Placeholder for 4 featured cards - Replace with actual data mapping */}
          {[1, 2, 3, 4].map(i => (
            <div key={i} className={styles.cardBlock}>
              <img src="/placeholder.png" alt={`Featured Card ${i}`} className={styles.cardBlockImage} />
              <div className={styles.cardBlockContent}>
                <h4 className={styles.cardBlockTitle}>Featured Card {i}</h4>
                <p className={styles.cardBlockDesc}>Brief description of why this card is great...</p>
                <a href="#" target="_blank" rel="noopener noreferrer" className={styles.cardBlockButton}>Learn More</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- Main Calculator & AI Section --- */}
      <section ref={calculatorSectionRef} id="calculator" className={styles.mainSection}>

        {/* --- Left Column: Calculator --- */}
        <div className={styles.calculatorColumn}>
            <h2 className={styles.sectionTitle}>Rewards Calculator</h2>

            {/* Spending Input */}
            <div className={styles.spendInputSection}>
                <h3 className={styles.subSectionTitle}>Enter Monthly Spending</h3>
                <form className={styles.inputGroupsContainer}>
                    {Object.entries(categoryGroups).map(([groupName, categories]) => (
                        <details key={groupName} className={styles.categoryGroupCard} open={groupName === 'Travel' || groupName === 'Everyday'}> {/* Default open some */}
                            <summary className={styles.categoryGroupTitle}>{groupName}</summary>
                            <div className={styles.inputGrid}>
                                {(categories as Array<keyof SpendInput>).map((category) => (
                                <div key={category} className={styles.inputGroup}>
                                    <label htmlFor={category}>
                                    {categoryIcons[category] || ''} {category.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}:
                                    </label>
                                    <input
                                        type="number"
                                        id={category}
                                        name={category}
                                        value={spend[category]}
                                        onChange={handleChange}
                                        min={0} step={10} placeholder="$0"
                                        className={styles.inputField}
                                    />
                                </div>
                                ))}
                            </div>
                        </details>
                    ))}
                </form>
            </div>

            {/* Card Selector & Results */}
            <div className={styles.selectedCardSection}>
                 <h3 className={styles.subSectionTitle}>Calculate Your Cards</h3>
                 <div className={styles.cardSelectorContainer}>
                     <label htmlFor="cardSelector">Add Cards to Analyze (up to 5):</label>
                     <select
                        id="cardSelector"
                        onChange={handleSelectCard}
                        disabled={selectedCards.length >= 5}
                        value=""
                        className={styles.cardSelectorDropdown}
                     >
                        <option value="">-- Select Card --</option>
                        {sortedCardNames
                            .filter(name => !selectedCards.some(sc => sc["Card Name"] === name))
                            .map(cardName => (
                                <option key={cardName} value={cardName}>{cardName}</option>
                            ))
                        }
                     </select>
                     <div className={styles.selectedCardChips}>
                        {selectedCards.map(card => (
                            <span key={card["Card Name"]} className={styles.selectedCardChip}>
                                {card["Card Name"]}
                                <button onClick={() => handleRemoveCard(card["Card Name"])} title={`Remove ${card["Card Name"]}`}>&times;</button>
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
                               <div className={styles.selectedCardInfo}>
                                   <h4 className={styles.selectedCardTitle}>{rewardData.cardName}</h4>
                                   <span className={styles.selectedCardIssuer}>{rewardData.issuer}</span>
                               </div>
                           </div>
                           <div className={styles.selectedValueGrid}>
                                <div>
                                    <span>Rewards Value</span>
                                    <strong>${rewardData.rewardsValue.toFixed(2)}</strong>
                                </div>
                                <div>
                                    <span>Annual Fee</span>
                                    <strong>-${rewardData.annualFee.toFixed(2)}</strong>
                                </div>
                                <div>
                                    <span>Net Value</span>
                                    <strong className={rewardData.netValue >= 0 ? styles.valueGood : styles.valueBad}>
                                        ${rewardData.netValue.toFixed(2)}/yr
                                    </strong>
                                </div>
                           </div>
                           <a href={rewardData.reviewLink} target="_blank" rel="noopener noreferrer" className={styles.selectedCardButton}>
                                View Review
                           </a>
                           {/* Optional Breakdown */}
                           {/* <details className={styles.categoryBreakdown}>
                               <summary>Points Breakdown ({rewardData.totalPoints} pts)</summary>
                                <ul className={styles.categoryBreakdownList}> ... </ul>
                           </details> */}
                        </div>
                    ))}
                    {selectedCards.length === 0 && (
                        <p className={styles.emptyStateText}>Select cards above to see their calculated value based on your spending.</p>
                    )}
                 </div>
            </div>

        </div> {/* --- END Left Column --- */}

        {/* --- Right Column: AI Recommendation --- */}
        <aside className={styles.aiColumn}>
            <h2 className={styles.sectionTitle}>AI Analysis</h2>
            <div className={styles.aiCard}>
                <div className={styles.aiControls}>
                     <label htmlFor="redemptionStrategy" className={styles.aiLabel}>Value Points As:</label>
                     <select
                         id="redemptionStrategy"
                         value={redemptionStrategy}
                         onChange={handleRedemptionChange}
                         className={styles.aiSelectBox}
                         disabled={loading}
                     >
                         <option value="default">Best Default Value</option>
                         <option value="cash_back">Cash Back/Statement</option>
                         <option value="travel_portal">Travel Portal</option>
                         <option value="transfer_partners">Transfer Partners</option>
                     </select>
                     <button
                        onClick={() => getAiRecommendation(false)} // Pass false for initial call
                        disabled={loading || selectedCards.length === 0}
                        className={styles.aiButtonPrimary}
                     >
                         {loading ? 'Analyzing...' : 'Get AI Analysis'}
                     </button>
                     {aiSuggestion && !loading && (
                        <button
                            onClick={() => getAiRecommendation(true)} // Pass true to force regenerate
                            disabled={loading}
                            className={styles.aiButtonSecondary}
                            title="Regenerate Analysis"
                        >
                            🔄
                        </button>
                     )}
                </div>

                {error && <p className={styles.errorMessage}>{error}</p>}

                {loading && (
                    <div className={styles.spinnerContainer}>
                        <div className={styles.spinner}></div>
                        <p>Generating personalized analysis...</p>
                    </div>
                )}

                {!loading && aiSuggestion && (
                    <div className={styles.aiSuggestionBox} dangerouslySetInnerHTML={{ __html: formatAiOutput(aiSuggestion) }}></div>
                )}
                {!loading && !aiSuggestion && !error && (
                     <p className={styles.aiPlaceholder}>
                        {selectedCards.length > 0
                         ? "Click 'Get AI Analysis' for insights on your selected cards based on your spending."
                         : "Add some cards and enter your spending, then click 'Get AI Analysis'."
                        }
                    </p>
                )}
            </div>
        </aside> {/* --- END Right Column --- */}

      </section> {/* --- END Main Section --- */}

      {/* Comparison Modal (Keep structure, styles will be updated in CSS) */}
      {/* Removed for brevity in this example, but keep your existing modal structure if needed */}

    </> // Use Fragment as top-level wrapper
  );
}