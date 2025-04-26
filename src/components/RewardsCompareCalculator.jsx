import React, { useState, useMemo } from 'react';
import styles from '@/styles/RewardsCompareCalculator.module.css'; // Updated CSS Module
import cardsData from '@/data/finalcreditcard.json'; // Ensure this path is correct

// --- Configuration ---
// More granular categories for potentially better mapping
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

// --- Helper Functions ---

// Map UI categories to potential JSON categories
const getCategoryMap = () => ({
    dining: ['dining'],
    groceries: ['groceries_us', 'groceries', 'online_grocery'],
    gas: ['gas_us', 'gas'],
    flights: ['flights_direct', 'flights_amex_travel', 'flights_chase_portal', 'flights_capital_one_portal', 'airlines', 'southwest_airlines', 'united_airlines', 'jetblue', 'hawaiian_airlines', 'delta_airlines', 'american_airlines', 'british_airways', 'alaska_airlines', 'aircanada', 'travel_portal', 'travel_other'],
    hotels: ['hotel', 'hotel_amex_travel', 'hotel_chase_portal', 'hotel_capital_one_portal', 'hilton_hotels', 'hyatt_hotels', 'travel_portal', 'travel_other', 'annual_hotel_credit'], // Added general travel
    streaming: ['streaming'],
    transit: ['transit', 'travel_other'], // Added general travel
    onlineShopping: ['online_retail_us', 'online_grocery'], // Includes online grocery as potential match
    drugstores: ['drugstores'],
    other: ['other'], // Represents the base earning rate
    // Add mappings for categories used in JSON but not direct UI inputs if needed
    travel_portal: ['travel_portal', 'flights_amex_travel', 'flights_chase_portal', 'flights_capital_one_portal', 'hotel_amex_travel', 'hotel_chase_portal', 'hotel_capital_one_portal'],
    travel_other: ['travel_other'],
    // ... add others as needed based on JSON data keys ...
});

// Get the best applicable reward rule for a spending category for a specific card
const findBestRuleForInput = (card, uiCategory, categoryMap) => {
    if (!card || !Array.isArray(card.rewards)) return undefined;
    const targetJsonCategories = categoryMap[uiCategory] || [uiCategory]; // Fallback to self if no map
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
        // If no specific rule better than 'other' was found explicitly for the UI category,
        // check if any *other* rule in the card *might* cover this category implicitly
        // e.g., uiCategory 'flights' might be covered by a card's 'travel_other' rule.
        // This part needs careful mapping based on your data structure.
        // For simplicity here, we'll prioritize direct matches or 'other'.
         return otherRule; // Return 'other' if no better specific rule found
    }
    return bestRule;
};

// Calculate annual perk value
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
            }
             // Add estimated values if direct value_usd is missing but estimate exists
             else if (!perk.value_usd && perk.estimated_value_usd && perk.frequency === 'annual') {
                annualPerkValue += perk.estimated_value_usd;
            }
            // Add more perk types here (e.g., lounge pass estimates if desired)
        });
    }
    return parseFloat(annualPerkValue.toFixed(2));
};

// Get CPP based on strategy
const getCardCpp = (card, strategy) => {
    const options = card?.redemptionOptions;
    if (!options) return 1.0;
    switch (strategy) {
        case 'cash': return options.cash_back_cpp ?? 1.0;
        case 'portal': return options.chase_travel_portal_cpp ?? options.amex_travel_cpp ?? options.cap_one_travel_cpp ?? options.travel_statement_credit_cpp ?? 1.0;
        case 'transfer': return options.transfer_partner_average_cpp ?? options.program_cpp ?? 1.8; // Example fallback for transfer
        default: // 'best' or 'default'
            return options.transfer_partner_average_cpp ?? options.chase_travel_portal_cpp ?? options.amex_travel_cpp ?? options.cap_one_travel_cpp ?? options.travel_statement_credit_cpp ?? options.cash_back_cpp ?? 1.0;
    }
};

// Render stars based on rating
const renderStars = (rating) => {
    const totalStars = 5;
    const fullStars = Math.floor(rating / 2);
    const halfStar = rating % 2 >= 0.5 ? 1 : 0; // Simple half-star logic if rating is x.5 or higher
    const emptyStars = totalStars - fullStars - halfStar;
    const stars = [];
    for (let i = 0; i < fullStars; i++) stars.push(<span key={`full-${i}`} className={styles.starFull}>★</span>);
    if (halfStar) stars.push(<span key="half" className={styles.starHalf}>★</span>); // You might need CSS to clip this star
    for (let i = 0; i < emptyStars; i++) stars.push(<span key={`empty-${i}`} className={styles.starEmpty}>☆</span>);
    return stars;
};


// --- Main Component ---
export default function RewardsCompareCalculator() {
    const [spending, setSpending] = useState(defaultSpend);
    const [selectedCardNames, setSelectedCardNames] = useState([null, null, null]);
    const [redemptionStrategy, setRedemptionStrategy] = useState('best'); // 'best', 'cash', 'portal', 'transfer'

    const handleSpendingChange = (category, value) => {
        setSpending({ ...spending, [category]: Math.max(0, Number(value) || 0) }); // Ensure non-negative
    };

    const handleCardSelect = (index, cardName) => {
        const updated = [...selectedCardNames];
        updated[index] = cardName || null; // Store null if "" selected
        setSelectedCardNames(updated);
    };

    const handleStrategyChange = (event) => {
        setRedemptionStrategy(event.target.value);
    };

    // --- Main Calculation Memo ---
    const cardCalculations = useMemo(() => {
        const categoryMap = getCategoryMap();
        return selectedCardNames.map(cardName => {
            const card = cardsData.cards.find(c => c["Card Name"] === cardName);
            if (!card) return null;

            let totalAnnualPoints = 0;
            const breakdown = {}; // Store points and multiplier per category
            const capSpendTracker = {};
            const otherMultiplier = card.rewards.find(r => r.category === 'other')?.multiplier ?? 1;

            for (const uiCategory of spendingCategories) {
                const monthlySpend = spending[uiCategory];
                if (monthlySpend <= 0) continue;

                const annualSpendInCategory = monthlySpend * 12;
                const rule = findBestRuleForInput(card, uiCategory, categoryMap);
                const currentMultiplier = rule?.multiplier ?? otherMultiplier;
                let categoryPoints = 0;
                let appliedMultiplier = currentMultiplier; // Track the actual multiplier used after caps

                 if (!rule || rule.category === 'other' || !rule.cap) {
                    categoryPoints = annualSpendInCategory * currentMultiplier;
                    appliedMultiplier = currentMultiplier;
                } else {
                    // Handle caps (copied and adapted logic)
                    const capInfo = rule.cap;
                    const capKey = Array.isArray(capInfo.applies_to_categories) && capInfo.applies_to_categories.length > 0
                                ? capInfo.applies_to_categories.sort().join(',')
                                : rule.category;
                    const capLimit = capInfo.amount_usd;
                    const capPeriod = capInfo.period;
                    let annualPointsAtBonusRate = 0;
                    let annualPointsAtOtherRate = 0;
                    const spentTowardsCapSoFar = capSpendTracker[capKey] || 0;

                    let totalSpendAtBonusRate = 0; // Track how much spend got the bonus rate for avg multiplier calc

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
                            totalSpendAtBonusRate += monthlySpendAtBonusRate; // Accumulate monthly bonus spend
                        }
                    } else if (capPeriod === 'quarter') {
                        const quarterlyCapLimit = capLimit;
                        for (let quarter = 0; quarter < 4; quarter++) {
                            const quarterlySpendEstimate = monthlySpend * 3;
                            const quarterlySpendAtBonusRate = Math.min(quarterlySpendEstimate, quarterlyCapLimit);
                            const quarterlySpendAtOtherRate = Math.max(0, quarterlySpendEstimate - quarterlySpendAtBonusRate);
                            annualPointsAtBonusRate += quarterlySpendAtBonusRate * currentMultiplier;
                            annualPointsAtOtherRate += quarterlySpendAtOtherRate * otherMultiplier;
                            totalSpendAtBonusRate += quarterlySpendAtBonusRate; // Accumulate quarterly bonus spend
                        }
                    }
                    categoryPoints = annualPointsAtBonusRate + annualPointsAtOtherRate;
                    // Calculate an *average* multiplier for display if cap was hit
                    if (annualSpendInCategory > 0 && categoryPoints > 0) {
                         appliedMultiplier = categoryPoints / annualSpendInCategory;
                    } else if (annualSpendInCategory > 0) {
                        appliedMultiplier = otherMultiplier; // If somehow points are zero but spend exists
                    }
                }

                if (categoryPoints > 0) {
                    breakdown[uiCategory] = {
                        points: Math.round(categoryPoints),
                        // Use appliedMultiplier which accounts for caps
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

            // Create tooltip strings dynamically based on calculation
            const breakdownTooltips = {};
             Object.entries(breakdown).forEach(([cat, data]) => {
                breakdownTooltips[cat] = `$${spending[cat]} × 12 × ${data.multiplier}x = ${data.points.toLocaleString()} pts`;
            });

            return {
                card, // Include full card data
                totalPoints: Math.round(totalAnnualPoints),
                rewardsValue: parseFloat(rewardsValue.toFixed(2)),
                annualPerkValue,
                netValue: parseFloat(netValue.toFixed(2)),
                firstYearNetValue: parseFloat(firstYearNetValue.toFixed(2)),
                signUpBonusValue,
                annualFee,
                breakdown, // Contains { points, multiplier, spend }
                breakdownTooltips, // Contains calculation strings
                cpp: parseFloat(cpp.toFixed(2)),
            };
        });
    }, [selectedCardNames, spending, redemptionStrategy]); // Recalculate when these change

    // --- Render ---
    return (
        <div className={styles.calculatorContainer}>

            {/* --- Card Selection Area --- */}
            <section className={styles.cardSelectionSection}>
                <h2>Select Up to 3 Cards to Compare</h2>
                <div className={styles.cardSelectorsGrid}>
                    {selectedCardNames.map((selectedName, index) => {
                        const cardCalc = cardCalculations[index];
                        const card = cardCalc?.card;
                        return (
                            <div key={index} className={styles.cardSelectorColumn}>
                                <div className={styles.dropdownGroup}>
                                    <label htmlFor={`card-select-${index}`}>Card {index + 1}</label>
                                    <select
                                        id={`card-select-${index}`}
                                        value={selectedName || ""}
                                        onChange={(e) => handleCardSelect(index, e.target.value)}
                                    >
                                        <option value="">-- Select a Card --</option>
                                        {cardsData.cards.map((c) => (
                                            <option key={c["Card Name"]} value={c["Card Name"]}>
                                                {c["Card Name"]}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                {card && (
                                    <div className={styles.selectedCardInfo}>
                                        <img
                                            src={card.image || '/placeholder.png'}
                                            alt={`${card["Card Name"]} card`}
                                            className={styles.cardInfoImage}
                                            onError={(e) => { e.target.src = '/placeholder.png'; }}
                                        />
                                        <div className={styles.cardInfoRating}>
                                            {card.ratingValue ? (
                                                <>
                                                    {renderStars(card.ratingValue)}
                                                    <span className={styles.ratingValue}>({(card.ratingValue / 2).toFixed(1)})</span>
                                                </>
                                            ) : (
                                                <span>No Rating</span>
                                            )}
                                        </div>
                                        <div className={styles.cardInfoLinks}>
                                            <a href={card.reviewLink || '#'} target="_blank" rel="noopener noreferrer" className={`${styles.cardButton} ${styles.reviewButton}`}>Review</a>
                                            <a href={card.applyLink || '#'} target="_blank" rel="noopener noreferrer" className={`${styles.cardButton} ${styles.applyButton}`}>Apply</a>
                                            <a href={card.ratesandfees || '#'} target="_blank" rel="noopener noreferrer" className={styles.ratesLink}>Rates & Fees</a>
                                        </div>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* --- Input Section --- */}
            <section className={styles.inputSection}>
                <div className={styles.inputHeader}>
                    <h2>Enter Your Estimated Monthly Spending</h2>
                     {/* Redemption Strategy Selector */}
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
            {selectedCardNames.some(name => name !== null) && ( // Only show results if at least one card selected
                <section className={styles.resultsSection}>
                    <h2>Rewards & Value Comparison</h2>
                    <div className={styles.tableWrapper}>
                        <table className={styles.rewardsTable}>
                            <thead>
                                <tr>
                                    <th>Category</th>
                                    {cardCalculations.map((calc, index) => (
                                        <th key={index}>{calc?.card["Card Name"] ?? `Card ${index + 1}`}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {/* Points Breakdown */}
                                {spendingCategories.map((cat) => (
                                    <tr key={cat}>
                                        <td>{categoryDisplayNames[cat]} Points</td>
                                        {cardCalculations.map((calc, index) => {
                                            const points = calc?.breakdown?.[cat]?.points ?? 0;
                                            const tooltipText = calc?.breakdownTooltips?.[cat] ?? '-';
                                            return (
                                                <td key={index} className={points > 0 ? styles.tooltip : ''}>
                                                    {points.toLocaleString()} pts
                                                    {points > 0 && <span className={styles.tooltiptext}>{tooltipText}</span>}
                                                </td>
                                            );
                                        })}
                                    </tr>
                                ))}
                                {/* Spacer Row */}
                                <tr className={styles.spacerRow}><td colSpan={selectedCardNames.length + 1}></td></tr>
                                {/* Summary Rows */}
                                <tr>
                                    <td>Total Annual Points</td>
                                    {cardCalculations.map((calc, index) => (
                                        <td key={index}>{(calc?.totalPoints ?? 0).toLocaleString()}</td>
                                    ))}
                                </tr>
                                <tr>
                                    <td>Selected Point Value (CPP)</td>
                                     {cardCalculations.map((calc, index) => (
                                        <td key={index}>{calc?.cpp.toFixed(2) ?? '-'}¢</td>
                                    ))}
                                </tr>
                                 <tr>
                                    <td>Est. Annual Rewards Value</td>
                                    {cardCalculations.map((calc, index) => (
                                        <td key={index}>${(calc?.rewardsValue ?? 0).toFixed(2)}</td>
                                    ))}
                                </tr>
                                <tr>
                                    <td>Est. Annual Perk Value</td>
                                     {cardCalculations.map((calc, index) => (
                                        <td key={index}>${(calc?.annualPerkValue ?? 0).toFixed(2)}</td>
                                    ))}
                                </tr>
                                <tr>
                                    <td>Annual Fee</td>
                                    {cardCalculations.map((calc, index) => (
                                        <td key={index}>-${(calc?.annualFee ?? 0).toFixed(2)}</td>
                                    ))}
                                </tr>
                                <tr className={styles.highlightRow}>
                                    <td>Est. Ongoing Net Value</td>
                                    {cardCalculations.map((calc, index) => (
                                        <td key={index} className={calc && calc.netValue >= 0 ? styles.valueGood : styles.valueBad}>
                                            ${(calc?.netValue ?? 0).toFixed(2)}
                                        </td>
                                    ))}
                                </tr>
                                 {/* Spacer Row */}
                                <tr className={styles.spacerRow}><td colSpan={selectedCardNames.length + 1}></td></tr>
                                <tr>
                                    <td>Sign-up Bonus Value</td>
                                    {cardCalculations.map((calc, index) => (
                                        <td key={index}>+${(calc?.signUpBonusValue ?? 0).toFixed(2)}</td>
                                    ))}
                                </tr>
                                <tr className={styles.highlightRowBold}>
                                    <td>Est. 1st Year Net Value</td>
                                    {cardCalculations.map((calc, index) => (
                                         <td key={index} className={calc && calc.firstYearNetValue >= 0 ? styles.valueGood : styles.valueBad}>
                                            ${(calc?.firstYearNetValue ?? 0).toFixed(2)}
                                        </td>
                                    ))}
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p className={styles.disclaimer}>Estimated values are based on your inputs and average point valuations. Actual value may vary. Annual fees are subtracted.</p>
                </section>
            )}
        </div>
    );
}