// File: /components/RewardsCompareCalculator.jsx
import React, { useState } from 'react';
import styles from '@/styles/RewardsCompareCalculator.module.css';
import cardsData from '@/data/finalcreditcard.json';

const spendingCategories = ["travel", "dining", "groceries", "gas", "other"];

export default function RewardsCompareCalculator() {
  const [spending, setSpending] = useState({
    travel: 0,
    dining: 0,
    groceries: 0,
    gas: 0,
    other: 0,
  });
  const [selectedCards, setSelectedCards] = useState([null, null, null]);

  const handleSpendingChange = (category, value) => {
    setSpending({ ...spending, [category]: Number(value) });
  };

  const handleCardSelect = (index, cardName) => {
    const updated = [...selectedCards];
    updated[index] = cardName;
    setSelectedCards(updated);
  };

  const calculateRewards = (card) => {
    if (!card) return null;

    const rewards = {
      travel: 0,
      dining: 0,
      groceries: 0,
      gas: 0,
      other: 0,
      totalPoints: 0,
      estimatedValue: 0,
      breakdown: {},
    };

    const rewardCategories = card.rewards || [];

    rewardCategories.forEach(reward => {
      spendingCategories.forEach(cat => {
        if (reward.category.includes(cat)) {
          const points = (spending[cat] * 12) * reward.multiplier;
          rewards[cat] += points;
          rewards.breakdown[cat] = `${spending[cat]} × 12 × ${reward.multiplier} = ${Math.round(points)} pts`;
        }
      });
      if (reward.category === "other") {
        const points = (spending.other * 12) * reward.multiplier;
        rewards.other += points;
        rewards.breakdown.other = `${spending.other} × 12 × ${reward.multiplier} = ${Math.round(points)} pts`;
      }
    });

    rewards.totalPoints = rewards.travel + rewards.dining + rewards.groceries + rewards.gas + rewards.other;

    const cpp = card.redemptionOptions?.cash_back_cpp || 1.0; // Default 1.0 cent per point if missing
    rewards.estimatedValue = (rewards.totalPoints * cpp) / 100;

    return rewards;
  };

  return (
    <div className={styles.calculatorContainer}>
      <div className={styles.inputSection}>
        <h2>Enter Your Estimated Monthly Spending</h2>
        {spendingCategories.map((category) => (
          <div key={category} className={styles.inputGroup}>
            <label>{category.charAt(0).toUpperCase() + category.slice(1)}</label>
            <input
              type="number"
              min="0"
              value={spending[category]}
              onChange={(e) => handleSpendingChange(category, e.target.value)}
              placeholder="$0"
            />
          </div>
        ))}

        <h2>Select Up to 3 Cards</h2>
        {selectedCards.map((card, index) => (
          <div key={index} className={styles.dropdownGroup}>
            <select value={card || ""} onChange={(e) => handleCardSelect(index, e.target.value)}>
              <option value="">Select a Card</option>
              {cardsData.cards.map((c) => (
                <option key={c["Card Name"]} value={c["Card Name"]}>
                  {c["Card Name"]}
                </option>
              ))}
            </select>
          </div>
        ))}
      </div>

      <div className={styles.resultsSection}>
        <h2>Rewards Breakdown</h2>
        <div className={styles.tableWrapper}>
          <table className={styles.rewardsTable}>
            <thead>
              <tr>
                <th>Category</th>
                {selectedCards.map((card, index) => card && (
                  <th key={index}>{card}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {spendingCategories.map((cat) => (
                <tr key={cat}>
                  <td>{cat.charAt(0).toUpperCase() + cat.slice(1)}</td>
                  {selectedCards.map((cardName, index) => {
                    const card = cardsData.cards.find(c => c["Card Name"] === cardName);
                    const rewards = calculateRewards(card);
                    return card ? (
                      <td key={index} className={styles.tooltip}>
                        {Math.round(rewards[cat] || 0)} pts
                        <span className={styles.tooltiptext}>{rewards.breakdown[cat]}</span>
                      </td>
                    ) : (
                      <td key={index}>-</td>
                    );
                  })}
                </tr>
              ))}
              <tr>
                <td><strong>Total Value (USD)</strong></td>
                {selectedCards.map((cardName, index) => {
                  const card = cardsData.cards.find(c => c["Card Name"] === cardName);
                  const rewards = calculateRewards(card);
                  return card ? (
                    <td key={index}><strong>${rewards.estimatedValue.toFixed(2)}</strong></td>
                  ) : (
                    <td key={index}>-</td>
                  );
                })}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
