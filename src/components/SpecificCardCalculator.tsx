import React, { useState, useMemo } from 'react';
import cardDataRaw from '@/data/finalcreditcard.json'; // Use the actual path to your detailed JSON
import styles from '@/styles/specificCardStyles.module.css'; // New CSS module for this component

// --- Interfaces (Reused & Adapted) ---
// These interfaces are assumed to be the same as in your previous calculator component
interface CardCap { amount_usd: number; period: 'month' | 'quarter' | 'year'; applies_to_categories: string[]; }
interface CardReward { multiplier: number; category: string; notes: string | null; cap: CardCap | null; }
interface CardSignUpBonus { points: number | null; description: string; minSpend: number | null; durationDays: number | null; estimated_value_usd: number | null; }
interface CardRedemptionOptions { travel_statement_credit_cpp?: number; cash_back_cpp?: number; chase_travel_portal_cpp?: number; amex_travel_cpp?: number; cap_one_travel_cpp?: number; transfer_partner_average_cpp?: number; program_cpp?: number; [key: string]: number | undefined; }
interface CardPerk { type: string; description?: string; value_usd?: number; frequency?: string; notes?: string; estimated_value_usd?: number | null; }
interface DetailedCreditCard { "Card Name": string; Issuer: string; image: string; ratingValue?: number; applyLink: string; ratesandfees: string; reviewLink: string; "Card Type": "Personal" | "Business"; "Annual Fee": number; "APR Range (Purchases)": string | null; "Foreign Transaction Fee": number | null; "Intro APR": string | null; "Credit Score Requirement": string | null; signUpBonus: CardSignUpBonus; rewardProgram: string | null; rewards: CardReward[]; redemptionOptions: CardRedemptionOptions; perks: CardPerk[]; calculatedPoints?: number; calculatedRewardsValue?: number; calculatedAnnualPerkValue?: number; calculatedNetValue?: number; calculatedFirstYearNetValue?: number; } //

// --- Load Data & Select Specific Card ---
let allCards: DetailedCreditCard[] = [];
if (cardDataRaw && Array.isArray((cardDataRaw as any).cards)) {
  allCards = (cardDataRaw as any).cards as DetailedCreditCard[];
} else {
  // Basic fallback/error handling if structure is unexpected
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

// *** DEFINE THE CARD TO DISPLAY HERE ***
const selectedCardName = "Chase Sapphire Preferred® Credit Card"; // Example

const card: DetailedCreditCard | undefined = allCards.find(c => c && c["Card Name"] === selectedCardName); //

// --- Define Spending Categories & State ---
const categoryList = [ 'dining', 'groceries', 'gas', 'flights', 'hotels', 'streaming', 'transit', 'onlineShopping', 'drugstores', 'other'] as const;
type SpendInput = { [key in typeof categoryList[number]]: number; };
const defaultSpend: SpendInput = { dining: 0, groceries: 0, gas: 0, flights: 0, hotels: 0, streaming: 0, transit: 0, onlineShopping: 0, drugstores: 0, other: 0, };

// --- React Component ---
export default function SpecificCardCalculator() {
  const [spend, setSpend] = useState<SpendInput>(defaultSpend);
  // Optional: Add state for selecting redemption value if desired (e.g., travel vs cash)
  // const [valuationType, setValuationType] = useState<'travel' | 'cash'>('travel');

  // --- Helper: Get Best Cents Per Point (Simplified for one card) ---
  const getBestCpp = (options: CardRedemptionOptions | undefined): number => {
    if (!options) return 1.0; // Default to 1 cent
    // Prioritize highest value options generally available for this card type
    return options.transfer_partner_average_cpp //
        ?? options.chase_travel_portal_cpp //
        ?? options.amex_travel_cpp //
        ?? options.cap_one_travel_cpp //
        ?? options.travel_statement_credit_cpp //
        ?? options.cash_back_cpp //
        ?? 1.0;
  };

  // --- Event Handlers ---
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSpend((prev) => ({ ...prev, [name]: parseFloat(value) || 0, }));
  };

  // --- Core Calculation Logic ---
  const calculatedValues = useMemo(() => {
    if (!card || !Array.isArray(card.rewards)) { //
      return {
        totalAnnualPoints: 0, rewardsValue: 0, annualPerkValue: 0,
        netValue: -(card?.["Annual Fee"] ?? 0), //
        firstYearNetValue: -(card?.["Annual Fee"] ?? 0), //
        pointsBreakdown: {}, cpp: 1.0
      };
    }

    // Category mapping logic (simplified map relevant to this card's rules)
    const categoryMap: { [key in keyof SpendInput]?: string[] } = {
        dining: ['dining'],
        groceries: ['online_grocery', 'groceries'], // Check specific card rules if needed
        flights: ['travel_portal', 'travel_other'], // CSP earns on portal and general travel
        hotels: ['travel_portal', 'travel_other', 'annual_hotel_credit'], // Include perks if they grant points
        streaming: ['streaming'],
        transit: ['travel_other'], // General travel
        onlineShopping: ['online_grocery'], // Specific to CSP's online grocery
        // Add other mappings if card has specific rules for gas, drugstores etc.
        other: ['other'],
    };

    // Find the best reward rule for a given UI category for THIS card
    const findBestRuleForInput = (uiCategory: keyof SpendInput): CardReward | undefined => {
        const targetJsonCategories = categoryMap[uiCategory] || [];
        let bestRule: CardReward | undefined = undefined;
        let bestMultiplier = 0;
        for (const jsonCat of targetJsonCategories) {
            const rule = card.rewards.find(r => r.category === jsonCat); //
            if (rule && rule.multiplier > bestMultiplier) {
                bestMultiplier = rule.multiplier;
                bestRule = rule;
            }
        }
        const otherRule = card.rewards.find(r => r.category === 'other'); //
        const otherMultiplier = otherRule?.multiplier ?? 1;
        if (!bestRule || bestMultiplier <= otherMultiplier) {
            return otherRule;
        }
        return bestRule;
    };

    let totalAnnualPoints = 0;
    const pointsBreakdown: { [key: string]: { points: number; multiplier: number; spend: number } } = {};
    const capSpendTracker: { [capKey: string]: number } = {};
    const otherMultiplier = card.rewards.find(r => r.category === 'other')?.multiplier ?? 1; //

    for (const uiCategory of categoryList) {
      const monthlySpend = spend[uiCategory as keyof SpendInput];
      if (monthlySpend <= 0) continue;

      const annualSpendInCategory = monthlySpend * 12;
      const rule = findBestRuleForInput(uiCategory as keyof SpendInput);
      const currentMultiplier = rule?.multiplier ?? otherMultiplier;
      let categoryPoints = 0;

      if (!rule || rule.category === 'other' || !rule.cap) { //
          categoryPoints = annualSpendInCategory * currentMultiplier;
      } else {
          // Handle caps (copied simplified logic from previous calculator)
          const capInfo = rule.cap;
          const capKey = Array.isArray(capInfo.applies_to_categories) && capInfo.applies_to_categories.length > 0
                         ? capInfo.applies_to_categories.sort().join(',')
                         : rule.category;
          const capLimit = capInfo.amount_usd;
          const capPeriod = capInfo.period;
          let annualPointsAtBonusRate = 0;
          let annualPointsAtOtherRate = 0;
          const spentTowardsCapSoFar = capSpendTracker[capKey] || 0;

          if (capPeriod === 'year') {
              const remainingAnnualCapRoom = Math.max(0, capLimit - spentTowardsCapSoFar);
              const annualSpendAppliedAtBonus = Math.min(annualSpendInCategory, remainingAnnualCapRoom);
              const annualSpendAppliedAtOther = Math.max(0, annualSpendInCategory - annualSpendAppliedAtBonus);
              annualPointsAtBonusRate = annualSpendAppliedAtBonus * currentMultiplier;
              annualPointsAtOtherRate = annualSpendAppliedAtOther * otherMultiplier;
              capSpendTracker[capKey] = spentTowardsCapSoFar + annualSpendAppliedAtBonus;
          } else if (capPeriod === 'month') {
              const monthlyCapLimit = capLimit;
              for (let month = 0; month < 12; month++) {
                  const monthlySpendAtBonusRate = Math.min(monthlySpend, monthlyCapLimit);
                  const monthlySpendAtOtherRate = Math.max(0, monthlySpend - monthlySpendAtBonusRate);
                  annualPointsAtBonusRate += monthlySpendAtBonusRate * currentMultiplier;
                  annualPointsAtOtherRate += monthlySpendAtOtherRate * otherMultiplier;
              }
          } else if (capPeriod === 'quarter') {
              const quarterlyCapLimit = capLimit;
              for (let quarter = 0; quarter < 4; quarter++) {
                  const quarterlySpendEstimate = monthlySpend * 3;
                  const quarterlySpendAtBonusRate = Math.min(quarterlySpendEstimate, quarterlyCapLimit);
                  const quarterlySpendAtOtherRate = Math.max(0, quarterlySpendEstimate - quarterlySpendAtBonusRate);
                  annualPointsAtBonusRate += quarterlySpendAtBonusRate * currentMultiplier;
                  annualPointsAtOtherRate += quarterlySpendAtOtherRate * otherMultiplier;
              }
          }
          categoryPoints = annualPointsAtBonusRate + annualPointsAtOtherRate;
      }

      if (categoryPoints > 0) {
         pointsBreakdown[uiCategory] = {
             points: Math.round(categoryPoints),
             multiplier: currentMultiplier,
             spend: annualSpendInCategory
         };
      }
      totalAnnualPoints += categoryPoints;
    }

    // Calculate Perk Value
    let annualPerkValue = 0;
    if (Array.isArray(card.perks)) { //
        card.perks.forEach(perk => {
            if (perk.value_usd && perk.frequency === 'annual') { //
                annualPerkValue += perk.value_usd;
            } else if (perk.type === 'global_entry_tsa_precheck_credit' && perk.value_usd && perk.frequency?.includes('years')) { //
                const years = parseInt(perk.frequency.split('_')[1]) || 4;
                annualPerkValue += perk.value_usd / years;
            }
            // Add other perk calculations if needed
        });
    }

    const selectedCpp = getBestCpp(card.redemptionOptions); //
    const rewardsValue = (totalAnnualPoints * selectedCpp) / 100;
    const netValue = rewardsValue + annualPerkValue - card["Annual Fee"]; //
    const signUpBonusValue = card.signUpBonus?.estimated_value_usd ?? 0; //
    const firstYearNetValue = netValue + signUpBonusValue;

    return {
      totalAnnualPoints: Math.round(totalAnnualPoints),
      rewardsValue: parseFloat(rewardsValue.toFixed(2)),
      annualPerkValue: parseFloat(annualPerkValue.toFixed(2)),
      netValue: parseFloat(netValue.toFixed(2)),
      firstYearNetValue: parseFloat(firstYearNetValue.toFixed(2)),
      pointsBreakdown,
      cpp: selectedCpp
    };
  }, [spend, card]); // Recalculate only when spend or card changes

  // --- Render Component ---
  if (!card) {
    return <div className={styles.container}><p className={styles.errorMessage}>Error: Card '{selectedCardName}' not found in data.</p></div>;
  }

  return (
    <div className={styles.pageWrapper}>
        {/* Optional: Add Breadcrumbs or Link back */}
        {/* <div className={styles.breadcrumb}> &lt; <a href="/calculators">All Calculators</a></div> */}

        <header className={styles.cardHeader}>
            <img
                src={card.image || '/placeholder.png'} //
                alt={`${card["Card Name"]} Card`} //
                className={styles.cardImage}
                onError={(e) => { (e.target as HTMLImageElement).src = '/placeholder.png'; }}
            />
            <div className={styles.headerText}>
                <h1 className={styles.cardName}>{card["Card Name"]}</h1> {/* */}
                <p className={styles.issuer}>by {card.Issuer}</p> {/* */}
                <div className={styles.headerLinks}>
                    <a href={card.reviewLink} target="_blank" rel="noopener noreferrer" className={`${styles.linkButton} ${styles.reviewLink}`}>Read Full Review</a> {/* */}
                    <a href={card.applyLink} target="_blank" rel="noopener noreferrer" className={`${styles.linkButton} ${styles.applyLink}`}>Apply Now</a> {/* */}
                </div>
            </div>
        </header>

        <div className={styles.calculatorGrid}>
            {/* --- Left Column: Inputs --- */}
            <section className={styles.inputSection}>
                <h2 className={styles.sectionTitle}>Your Estimated Monthly Spend</h2>
                <div className={styles.inputList}>
                    {categoryList.map((category) => (
                        <div key={category} className={styles.inputGroup}>
                            <label htmlFor={category} className={styles.inputLabel}>
                                {category === 'onlineShopping' ? 'Online Shopping (US)' : category.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                            </label>
                            <div className={styles.inputWrapper}>
                                <span className={styles.dollarSign}>$</span>
                                <input
                                    type="number"
                                    id={category}
                                    name={category}
                                    value={spend[category as keyof SpendInput]}
                                    onChange={handleChange}
                                    min={0} step={10} placeholder="0"
                                    className={styles.inputField}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* --- Right Column: Results & Card Info --- */}
            <section className={styles.resultsSection}>
                <h2 className={styles.sectionTitle}>Estimated Annual Value</h2>

                {/* Value Summary */}
                <div className={styles.valueSummary}>
                    <div className={styles.valueBox}>
                        <span className={styles.valueLabel}>1st Year Net Value</span>
                        <span className={`${styles.valueAmount} ${calculatedValues.firstYearNetValue >= 0 ? styles.valueGood : styles.valueBad}`}>
                           ${calculatedValues.firstYearNetValue.toFixed(2)}
                        </span>
                        <span className={styles.valueDetail}>(Incl. ~$ {card.signUpBonus?.estimated_value_usd?.toFixed(0) ?? 0} Bonus)</span> {/* */}
                    </div>
                     <div className={styles.valueBox}>
                        <span className={styles.valueLabel}>Ongoing Net Value</span>
                        <span className={`${styles.valueAmount} ${calculatedValues.netValue >= 0 ? styles.valueGood : styles.valueBad}`}>
                            ${calculatedValues.netValue.toFixed(2)}/yr
                        </span>
                        <span className={styles.valueDetail}>(Rewards + Perks - Fee)</span>
                    </div>
                    <div className={styles.valueBox}>
                        <span className={styles.valueLabel}>Total Points</span>
                        <span className={styles.valueAmount}>
                            {calculatedValues.totalAnnualPoints.toLocaleString()} pts
                        </span>
                         <span className={styles.valueDetail}>(@ ~{calculatedValues.cpp.toFixed(2)} cpp)</span>
                    </div>
                </div>

                {/* Points Breakdown */}
                 {calculatedValues.totalAnnualPoints > 0 && (
                    <div className={styles.breakdownSection}>
                        <h3 className={styles.breakdownTitle}>Points Breakdown by Spending</h3>
                        <ul className={styles.breakdownList}>
                            {Object.entries(calculatedValues.pointsBreakdown)
                                .sort(([, a], [, b]) => b.points - a.points) // Sort by points descending
                                .map(([category, data]) => (
                                <li key={category} className={styles.breakdownItem}>
                                    <span className={styles.breakdownCategory}>
                                        {category.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                                    </span>
                                    <span className={styles.breakdownDetails}>
                                        ({data.multiplier}x on ${data.spend.toLocaleString()})
                                    </span>
                                    <span className={styles.breakdownPoints}>
                                        {data.points.toLocaleString()} pts
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {/* Key Card Info */}
                <div className={styles.cardInfoSection}>
                    <h3 className={styles.infoTitle}>Key Card Information</h3>
                    <ul className={styles.infoList}>
                        <li><strong>Annual Fee:</strong> ${card["Annual Fee"].toFixed(2)}</li> {/* */}
                        {card.signUpBonus?.description && ( /* */
                             <li><strong>Sign-Up Bonus:</strong> {card.signUpBonus.description}</li> /* */
                        )}
                        <li><strong>Top Rewards:</strong>
                           <ul className={styles.nestedList}>
                                {card.rewards.filter(r => r.multiplier > 1).slice(0, 3).map((reward, i) => ( /* */
                                    <li key={`reward-${i}`}>{reward.multiplier}x {reward.notes ?? reward.category.replace(/_/g, ' ')} {reward.cap ? `(Cap: $${reward.cap.amount_usd.toLocaleString()}/${reward.cap.period})`: ''}</li> /* */
                                ))}
                            </ul>
                        </li>
                         {card.perks && card.perks.filter(p => p.value_usd || p.estimated_value_usd || p.description?.toLowerCase().includes('access') || p.description?.toLowerCase().includes('credit') || p.description?.toLowerCase().includes('status')).length > 0 && ( /* */
                            <li><strong>Key Perks:</strong>
                                <ul className={styles.nestedList}>
                                    {card.perks
                                        .filter(p => p.value_usd || p.estimated_value_usd || p.description?.toLowerCase().includes('access') || p.description?.toLowerCase().includes('credit') || p.description?.toLowerCase().includes('status'))
                                        .slice(0, 3)
                                        .map((perk, i) => ( /* */
                                        <li key={`perk-${i}`}>{perk.description ?? perk.type.replace(/_/g, ' ')} {perk.value_usd ? `($${perk.value_usd}/${perk.frequency ?? 'yr'})` : perk.estimated_value_usd ? `(~$${perk.estimated_value_usd}/yr)` : ''}</li> /* */
                                    ))}
                                </ul>
                            </li>
                        )}
                        <li><strong>Foreign Transaction Fee:</strong> {card["Foreign Transaction Fee"] === 0 ? 'None' : `${card["Foreign Transaction Fee"]}%`}</li> {/* */}
                    </ul>
                </div>
            </section>
        </div>
    </div>
  );
}