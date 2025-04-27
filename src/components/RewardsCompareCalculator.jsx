import React, { useState, useMemo, useEffect } from 'react';
import styles from '@/styles/RewardsCompareCalculator.module.css';
// Assuming cardsData is structured correctly and sourced reliably.
// For E-E-A-T, the ultimate source and update frequency of this data is crucial.
import cardsData from '@/data/finalcreditcard.json'; // Ensure this path is correct

// --- Configuration ---
const spendingCategories = [
    'dining', 'groceries', 'gas', 'flights', 'hotels',
    'streaming', 'transit', 'onlineShopping', 'drugstores', 'other'
];
const categoryDisplayNames = {
    dining: 'Dining', groceries: 'Groceries', gas: 'Gas', flights: 'Flights',
    hotels: 'Hotels', streaming: 'Streaming', transit: 'Transit',
    onlineShopping: 'Online Shopping (US)', drugstores: 'Drugstores', other: 'Other'
};
const defaultSpend = spendingCategories.reduce((acc, cat) => ({ ...acc, [cat]: 0 }), {});
const MOBILE_BREAKPOINT = 767; // Define mobile breakpoint width

// --- Helper Functions ---
const getCategoryMap = () => ({
    dining: ['dining'],
    groceries: ['groceries_us', 'groceries', 'online_grocery'],
    gas: ['gas_us', 'gas'],
    flights: ['flights_direct', 'flights_amex_travel', 'flights_chase_portal', 'flights_capital_one_portal', 'airlines', 'southwest_airlines', 'united_airlines', 'jetblue', 'hawaiian_airlines', 'delta_airlines', 'american_airlines', 'british_airways', 'alaska_airlines', 'aircanada', 'travel_portal', 'travel_other'],
    hotels: ['hotel', 'hotel_amex_travel', 'hotel_chase_portal', 'hotel_capital_one_portal', 'hilton_hotels', 'hyatt_hotels', 'travel_portal', 'travel_other', 'annual_hotel_credit'],
    streaming: ['streaming'],
    transit: ['transit', 'travel_other'],
    onlineShopping: ['online_retail_us', 'online_grocery'],
    drugstores: ['drugstores'],
    other: ['other'],
    travel_portal: ['travel_portal', 'flights_amex_travel', 'flights_chase_portal', 'flights_capital_one_portal', 'hotel_amex_travel', 'hotel_chase_portal', 'hotel_capital_one_portal'],
    travel_other: ['travel_other'],
});

const findBestRuleForInput = (card, uiCategory, categoryMap) => {
    if (!card || !Array.isArray(card.rewards)) return undefined;
    const targetJsonCategories = categoryMap[uiCategory] || [uiCategory];
    let bestRule = undefined;
    let bestMultiplier = 0;
    for (const jsonCat of targetJsonCategories) {
        const rule = card.rewards.find(r => r.category === jsonCat);
        if (rule && rule.multiplier > bestMultiplier) {
            bestMultiplier = rule.multiplier;
            bestRule = rule;
        }
    }
    const otherRule = card.rewards.find(r => r.category === 'other');
    const otherMultiplier = otherRule?.multiplier ?? 1;
    if (!bestRule || bestMultiplier <= otherMultiplier) {
         return otherRule;
    }
    return bestRule;
};

const calculateAnnualPerkValue = (card) => {
    let annualPerkValue = 0;
    if (Array.isArray(card?.perks)) {
        card.perks.forEach(perk => {
            if (perk.value_usd && perk.frequency === 'annual') {
                annualPerkValue += perk.value_usd;
            } else if (perk.type === 'global_entry_tsa_precheck_credit' && perk.value_usd && perk.frequency?.includes('years')) {
                const years = parseInt(perk.frequency.split('_')[1]) || 4;
                annualPerkValue += perk.value_usd / years;
            } else if ((perk.type === 'anniversary_points' || perk.type === 'anniversary_miles') && perk.estimated_value_usd) {
                annualPerkValue += perk.estimated_value_usd;
            } else if (!perk.value_usd && perk.estimated_value_usd && perk.frequency === 'annual') {
                annualPerkValue += perk.estimated_value_usd;
            }
        });
    }
    return parseFloat(annualPerkValue.toFixed(2));
};

const getCardCpp = (card, strategy) => {
    const options = card?.redemptionOptions;
    if (!options) return 1.0;
    switch (strategy) {
        case 'cash': return options.cash_back_cpp ?? 1.0;
        case 'portal': return options.chase_travel_portal_cpp ?? options.amex_travel_cpp ?? options.cap_one_travel_cpp ?? options.travel_statement_credit_cpp ?? 1.0;
        case 'transfer': return options.transfer_partner_average_cpp ?? options.program_cpp ?? 1.8;
        default: // 'best' or 'default'
            return options.transfer_partner_average_cpp ?? options.chase_travel_portal_cpp ?? options.amex_travel_cpp ?? options.cap_one_travel_cpp ?? options.travel_statement_credit_cpp ?? options.cash_back_cpp ?? 1.0;
    }
};

const renderStars = (ratingOutOf10) => {
    if (typeof ratingOutOf10 !== 'number' || ratingOutOf10 < 0) {
        return null;
    }
    const ratingOutOf5 = ratingOutOf10 / 2.0;
    const totalStars = 5;
    const fullStars = Math.floor(ratingOutOf5);
    const halfStar = Math.round(ratingOutOf5 - fullStars) >= 0.5 ? 1 : 0;
    const emptyStars = totalStars - fullStars - halfStar;
    const stars = [];
    for (let i = 0; i < fullStars; i++) stars.push(<span key={`full-${i}`} className={styles.starFull}>★</span>);
    if (halfStar && (fullStars < 5)) stars.push(<span key="half" className={styles.starHalf}>★</span>);
    for (let i = 0; i < emptyStars; i++) stars.push(<span key={`empty-${i}`} className={styles.starEmpty}>☆</span>);
    return stars;
};


// --- Main Component ---
export default function RewardsCompareCalculator() {
    const [spending, setSpending] = useState(defaultSpend);
    const [selectedCardNames, setSelectedCardNames] = useState([null, null, null]);
    const [redemptionStrategy, setRedemptionStrategy] = useState('best');
    const [isMobile, setIsMobile] = useState(false);

    // --- Effect to check screen size ---
    useEffect(() => {
        const checkScreenSize = () => {
            setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT);
        };
        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);
        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    // --- Event Handlers ---
    const handleSpendingChange = (category, value) => {
        setSpending({ ...spending, [category]: Math.max(0, Number(value) || 0) });
    };
    const handleCardSelect = (index, cardName) => {
        const updated = [...selectedCardNames];
        updated[index] = cardName || null;
        setSelectedCardNames(updated);
    };
    const handleStrategyChange = (event) => {
        setRedemptionStrategy(event.target.value);
    };

    // --- Main Calculation Memo ---
    const cardCalculations = useMemo(() => {
        const categoryMap = getCategoryMap();
        const results = selectedCardNames.map(cardName => {
            const card = cardsData.cards.find(c => c["Card Name"] === cardName);
            if (!card) return null;

            let totalAnnualPoints = 0;
            const breakdown = {};
            const capSpendTracker = {};
            const otherMultiplier = card.rewards.find(r => r.category === 'other')?.multiplier ?? 1;

            for (const uiCategory of spendingCategories) {
                const monthlySpend = spending[uiCategory];
                if (monthlySpend <= 0) continue;
                const annualSpendInCategory = monthlySpend * 12;
                const rule = findBestRuleForInput(card, uiCategory, categoryMap);
                const currentMultiplier = rule?.multiplier ?? otherMultiplier;
                let categoryPoints = 0;
                let appliedMultiplier = currentMultiplier;

                if (!rule || rule.category === 'other' || !rule.cap) {
                    categoryPoints = annualSpendInCategory * currentMultiplier;
                    appliedMultiplier = currentMultiplier;
                } else {
                    // Handle caps logic...
                    const capInfo = rule.cap;
                    const capKey = Array.isArray(capInfo.applies_to_categories) && capInfo.applies_to_categories.length > 0
                                ? capInfo.applies_to_categories.sort().join(',')
                                : rule.category;
                    const capLimit = capInfo.amount_usd;
                    const capPeriod = capInfo.period;
                    let annualPointsAtBonusRate = 0;
                    let annualPointsAtOtherRate = 0;
                    const spentTowardsCapSoFar = capSpendTracker[capKey] || 0;
                    let totalSpendAtBonusRate = 0;

                    if (capPeriod === 'year') {
                         const remainingAnnualCapRoom = Math.max(0, capLimit - spentTowardsCapSoFar);
                         const annualSpendAppliedAtBonus = Math.min(annualSpendInCategory, remainingAnnualCapRoom);
                         const annualSpendAppliedAtOther = Math.max(0, annualSpendInCategory - annualSpendAppliedAtBonus);
                         annualPointsAtBonusRate = annualSpendAppliedAtBonus * currentMultiplier;
                         annualPointsAtOtherRate = annualSpendAppliedAtOther * otherMultiplier;
                         capSpendTracker[capKey] = spentTowardsCapSoFar + annualSpendAppliedAtBonus;
                         totalSpendAtBonusRate = annualSpendAppliedAtBonus;
                     } else if (capPeriod === 'month') {
                         const monthlyCapLimit = capLimit;
                         for (let month = 0; month < 12; month++) {
                            const monthlySpendAtBonusRate = Math.min(monthlySpend, monthlyCapLimit);
                            const monthlySpendAtOtherRate = Math.max(0, monthlySpend - monthlySpendAtBonusRate);
                            annualPointsAtBonusRate += monthlySpendAtBonusRate * currentMultiplier;
                            annualPointsAtOtherRate += monthlySpendAtOtherRate * otherMultiplier;
                            totalSpendAtBonusRate += monthlySpendAtBonusRate;
                         }
                     } else if (capPeriod === 'quarter') {
                         const quarterlyCapLimit = capLimit;
                         for (let quarter = 0; quarter < 4; quarter++) {
                             const quarterlySpendEstimate = monthlySpend * 3;
                             const quarterlySpendAtBonusRate = Math.min(quarterlySpendEstimate, quarterlyCapLimit);
                             const quarterlySpendAtOtherRate = Math.max(0, quarterlySpendEstimate - quarterlySpendAtBonusRate);
                             annualPointsAtBonusRate += quarterlySpendAtBonusRate * currentMultiplier;
                             annualPointsAtOtherRate += quarterlySpendAtOtherRate * otherMultiplier;
                             totalSpendAtBonusRate += quarterlySpendAtBonusRate;
                         }
                     }
                    categoryPoints = annualPointsAtBonusRate + annualPointsAtOtherRate;
                    if (annualSpendInCategory > 0 && categoryPoints > 0) {
                         appliedMultiplier = categoryPoints / annualSpendInCategory;
                    } else if (annualSpendInCategory > 0) {
                        appliedMultiplier = otherMultiplier;
                    }
                }

                if (categoryPoints > 0) {
                    breakdown[uiCategory] = {
                        points: Math.round(categoryPoints),
                        multiplier: parseFloat(appliedMultiplier.toFixed(2)),
                        spend: annualSpendInCategory
                    };
                }
                totalAnnualPoints += categoryPoints;
            }

            const annualPerkValue = calculateAnnualPerkValue(card);
            const cpp = getCardCpp(card, redemptionStrategy);
            const rewardsValue = (totalAnnualPoints * cpp) / 100;
            const annualFee = card["Annual Fee"] || 0;
            const netValue = rewardsValue + annualPerkValue - annualFee;
            const signUpBonusValue = card.signUpBonus?.estimated_value_usd ?? 0;
            const firstYearNetValue = netValue + signUpBonusValue;
            const breakdownTooltips = {};
             Object.entries(breakdown).forEach(([cat, data]) => {
                breakdownTooltips[cat] = `$${spending[cat]} × 12 × ${data.multiplier}x = ${data.points.toLocaleString()} pts`;
            });

            return {
                card, totalPoints: Math.round(totalAnnualPoints),
                rewardsValue: parseFloat(rewardsValue.toFixed(2)),
                annualPerkValue, netValue: parseFloat(netValue.toFixed(2)),
                firstYearNetValue: parseFloat(firstYearNetValue.toFixed(2)),
                signUpBonusValue, annualFee, breakdown, breakdownTooltips,
                cpp: parseFloat(cpp.toFixed(2)),
                isBestTotalPoints: false, isBestRewardsValue: false,
                isLowestAnnualFee: false, isBestNetValue: false,
                isBestFirstYearNetValue: false, isBestPerkValue: false
            };
        });

        // --- Find Best Values Across Selected Cards ---
        const validResults = results.filter(r => r !== null);
        if (validResults.length > 0) {
            const maxPoints = Math.max(...validResults.map(r => r.totalPoints));
            const maxRewards = Math.max(...validResults.map(r => r.rewardsValue));
            const maxPerks = Math.max(...validResults.map(r => r.annualPerkValue));
            const minFee = Math.min(...validResults.map(r => r.annualFee));
            const maxNet = Math.max(...validResults.map(r => r.netValue));
            const maxFirstYear = Math.max(...validResults.map(r => r.firstYearNetValue));

            results.forEach(calc => {
                if (calc) {
                    calc.isBestTotalPoints = calc.totalPoints === maxPoints && calc.totalPoints > 0;
                    calc.isBestRewardsValue = calc.rewardsValue === maxRewards && calc.rewardsValue > 0;
                    calc.isBestPerkValue = calc.annualPerkValue === maxPerks && calc.annualPerkValue > 0;
                    calc.isLowestAnnualFee = calc.annualFee === minFee;
                    calc.isBestNetValue = calc.netValue === maxNet;
                    calc.isBestFirstYearNetValue = calc.firstYearNetValue === maxFirstYear;
                }
            });
        }

        return results;
    }, [selectedCardNames, spending, redemptionStrategy]);

    // Determine which card slots/calculations to display based on screen size
    const cardsToDisplayIndices = isMobile ? [0, 1] : [0, 1, 2];
    const displayedCardCalculations = cardsToDisplayIndices.map(i => cardCalculations[i]);
    const displayedSelectedCardNames = cardsToDisplayIndices.map(i => selectedCardNames[i]);

    // --- Render ---
    return (
        <div className={styles.calculatorContainer}>

            {/* --- Card Selection Area --- */}
            <section className={styles.cardSelectionSection}>
                 <h2>Select Up to {isMobile ? '2' : '3'} Cards to Compare</h2>
                <div className={styles.cardSelectorsGrid}>
                     {selectedCardNames.map((selectedName, index) => {
                        const card = cardsData.cards.find(c => c["Card Name"] === selectedName);
                        return (
                            <div key={index} className={`${styles.cardSelectorColumn} ${isMobile && index > 1 ? styles.hideOnMobile : ''}`}>
                                <div className={styles.dropdownGroup}>
                                    <label htmlFor={`card-select-${index}`}>Card {index + 1}</label>
                                    <select
                                        id={`card-select-${index}`}
                                        value={selectedName || ""}
                                        onChange={(e) => handleCardSelect(index, e.target.value)}
                                        disabled={isMobile && index > 1}
                                    >
                                        <option value="">-- Select a Card --</option>
                                        {cardsData.cards.map((c) => (
                                            <option key={c["Card Name"]} value={c["Card Name"]}>
                                                {c["Card Name"]}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                {/* Sticky Wrapper */}
                                <div className={styles.stickyCardHeader}>
                                    {card ? (
                                        <div className={styles.selectedCardInfo}>
                                            <img src={card.image || '/placeholder.png'} alt={`${card["Card Name"]} card`} className={styles.cardInfoImage} onError={(e) => { e.target.src = '/placeholder.png'; }}/>
                                            <div className={styles.cardInfoRating}>
                                                {typeof card.ratingValue === 'number' ? (<>{renderStars(card.ratingValue)} <span className={styles.ratingValue}>({card.ratingValue.toFixed(1)} / 10)</span></>) : (<span>No Rating</span>)}
                                            </div>
                                            <div className={styles.cardInfoLinks}>
                                                <a href={card.reviewLink || '#'} target="_blank" rel="noopener noreferrer" className={`${styles.cardButton} ${styles.reviewButton}`}>Review</a>
                                                <a href={card.applyLink || '#'} target="_blank" rel="noopener noreferrer" className={`${styles.cardButton} ${styles.applyButton}`}>Apply</a>
                                                <a href={card.ratesandfees || '#'} target="_blank" rel="noopener noreferrer" className={styles.ratesLink}>Rates & Fees</a>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className={styles.selectedCardInfoPlaceholder}>
                                            {!(isMobile && index > 1) ? 'Select a card above' : ''}
                                        </div>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>

             {/* --- Input Section --- */}
            <section className={styles.inputSection}>
                 <div className={styles.inputHeader}>
                    <h2>Enter Your Estimated Monthly Spending</h2>
                    <div className={styles.strategySelector}>
                        <label htmlFor="redemptionStrategy">Value Points As:</label>
                        <select id="redemptionStrategy" value={redemptionStrategy} onChange={handleStrategyChange}>
                            <option value="best">Best Estimated Value</option>
                            <option value="transfer">Transfer Partners (Avg)</option>
                            <option value="portal">Travel Portal</option>
                            <option value="cash">Cash Back / Statement</option>
                        </select>
                    </div>
                </div>
                <div className={styles.spendingInputsGrid}>
                    {spendingCategories.map((category) => (
                        <div key={category} className={styles.inputGroup}>
                            <label htmlFor={`spend-${category}`}>{categoryDisplayNames[category]}</label>
                            <input
                                id={`spend-${category}`}
                                type="number"
                                min="0" step="10"
                                value={spending[category]}
                                onChange={(e) => handleSpendingChange(category, e.target.value)}
                                placeholder="$0"
                            />
                        </div>
                    ))}
                </div>
            </section>

            {/* --- Results Section --- */}
             {displayedSelectedCardNames.some(name => name !== null) && (
                <section className={styles.resultsSection}>
                    <h2>Rewards & Value Comparison {isMobile ? '(Top 2)' : ''}</h2>
                    <p className={styles.resultsExplanation}>
                        The table below estimates your annual rewards based on the spending you entered and the selected point valuation strategy. Net values account for calculated rewards, estimated annual perk values, and subtract the card's annual fee. The 1st Year value also includes the estimated sign-up bonus value.
                    </p>
                    <div className={styles.tableWrapper}>
                         <table className={styles.rewardsTable}>
                             <thead>
                                 <tr>
                                     <th>Category</th>
                                     {displayedCardCalculations.map((calc, index) => (
                                         <th key={cardsToDisplayIndices[index]}>
                                            {calc?.card["Card Name"] ?? `Card ${cardsToDisplayIndices[index] + 1}`}
                                        </th>
                                     ))}
                                 </tr>
                             </thead>
                             <tbody>
                                 {/* Points Breakdown */}
                                 {spendingCategories.map((cat) => (
                                     <tr key={cat}>
                                         <td>{categoryDisplayNames[cat]} Points</td>
                                         {displayedCardCalculations.map((calc, index) => {
                                             const points = calc?.breakdown?.[cat]?.points ?? 0;
                                             const tooltipText = calc?.breakdownTooltips?.[cat] ?? '-';
                                             return (
                                                 <td key={cardsToDisplayIndices[index]} className={points > 0 ? styles.tooltip : ''}>
                                                     {points > 0 ? points.toLocaleString() + ' pts' : '-'}
                                                     {points > 0 && <span className={styles.tooltiptext}>{tooltipText}</span>}
                                                 </td>
                                             );
                                         })}
                                     </tr>
                                 ))}
                                 {/* --- Spacer Row --- */}
                                 <tr className={styles.spacerRow}><td colSpan={cardsToDisplayIndices.length + 1}></td></tr>
                                 {/* --- Summary Rows with Highlighting --- */}
                                 <tr>
                                     <td>Total Annual Points</td>
                                     {displayedCardCalculations.map((calc, index) => ( <td key={cardsToDisplayIndices[index]} className={calc?.isBestTotalPoints ? styles.bestValue : ''}>{calc ? calc.totalPoints.toLocaleString() : '-'}</td> ))}
                                 </tr>
                                 <tr>
                                     <td>Selected Point Value (CPP)</td>
                                     {displayedCardCalculations.map((calc, index) => ( <td key={cardsToDisplayIndices[index]}>{calc ? `${calc.cpp.toFixed(2)}¢` : '-'}</td> ))}
                                 </tr>
                                  <tr>
                                     <td>Est. Annual Rewards Value</td>
                                     {displayedCardCalculations.map((calc, index) => ( <td key={cardsToDisplayIndices[index]} className={calc?.isBestRewardsValue ? styles.bestValue : ''}>{calc ? `$${calc.rewardsValue.toFixed(2)}` : '-'}</td> ))}
                                 </tr>
                                 <tr>
                                     <td>Est. Annual Perk Value</td>
                                     {displayedCardCalculations.map((calc, index) => ( <td key={cardsToDisplayIndices[index]} className={calc?.isBestPerkValue ? styles.bestValue : ''}>{calc ? `$${calc.annualPerkValue.toFixed(2)}` : '-'}</td> ))}
                                 </tr>
                                 <tr>
                                     <td>Annual Fee</td>
                                     {displayedCardCalculations.map((calc, index) => ( <td key={cardsToDisplayIndices[index]} className={calc?.isLowestAnnualFee ? styles.bestValue : ''}>{calc ? `-$${calc.annualFee.toFixed(2)}` : '-'}</td> ))}
                                 </tr>
                                 <tr className={styles.highlightRow}>
                                     <td>Est. Ongoing Net Value</td>
                                     {displayedCardCalculations.map((calc, index) => ( <td key={cardsToDisplayIndices[index]} className={`${calc?.isBestNetValue ? styles.bestValue : ''} ${calc && calc.netValue < 0 ? styles.valueBad : ''}`}>{calc ? `$${calc.netValue.toFixed(2)}` : '-'}</td> ))}
                                 </tr>
                                 {/* --- Spacer Row --- */}
                                 <tr className={styles.spacerRow}><td colSpan={cardsToDisplayIndices.length + 1}></td></tr>
                                 <tr>
                                     <td>Sign-up Bonus Value</td>
                                     {displayedCardCalculations.map((calc, index) => ( <td key={cardsToDisplayIndices[index]}>{calc ? `+$${calc.signUpBonusValue.toFixed(2)}` : '-'}</td> ))}
                                 </tr>
                                 <tr className={styles.highlightRowBold}>
                                     <td>Est. 1st Year Net Value</td>
                                     {displayedCardCalculations.map((calc, index) => ( <td key={cardsToDisplayIndices[index]} className={`${calc?.isBestFirstYearNetValue ? styles.bestValue : ''} ${calc && calc.firstYearNetValue < 0 ? styles.valueBad : ''}`}>{calc ? `$${calc.firstYearNetValue.toFixed(2)}` : '-'}</td> ))}
                                 </tr>
                             </tbody>
                         </table>
                    </div>
                     <p className={styles.disclaimer}>
                        **Important:** Calculations are estimates based on provided data and user inputs. Actual rewards may vary based on spending patterns, cap limits, and specific merchant coding. Point values (CPP) are estimates and can fluctuate. Offers, rates, fees, and benefits are subject to change; please verify all details directly with the card issuer before applying. See our full Advertiser Disclosure. Last data refresh: [Insert Date or Mechanism].
                     </p>
                </section>
             )}
        </div>
    );
}