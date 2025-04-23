import React, { useState, useMemo } from 'react';
import cardData from '@/data/creditCards.json';

interface CreditCard {
  id: string;
  name: string;
  rewards: {
    category: string;
    rate: number; // Points per dollar
  }[];
  pointValue: number; // Value per point in dollars (e.g., 0.01 = 1 cent)
}

const categories = [
  'Travel',
  'Dining',
  'Groceries',
  'Gas',
  'Online Shopping',
  'Other',
];

export default function RewardsCalculator() {
  const [spending, setSpending] = useState(
    Object.fromEntries(categories.map((cat) => [cat, 0]))
  );

  const handleChange = (category: string, value: string) => {
    setSpending((prev) => ({
      ...prev,
      [category]: parseFloat(value) || 0,
    }));
  };

  const cards: CreditCard[] = cardData.cards as CreditCard[];

  const results = useMemo(() => {
    return cards.map((card) => {
      let totalPoints = 0;
      for (const cat of categories) {
        const reward = card.rewards.find((r) => r.category === cat);
        const rate = reward ? reward.rate : 1;
        totalPoints += spending[cat] * rate;
      }
      const estimatedValue = totalPoints * card.pointValue;
      return {
        id: card.id,
        name: card.name,
        estimatedValue: estimatedValue.toFixed(2),
      };
    });
  }, [spending, cards]);

  return (
    <div className="rewards-calculator">
      <h2>Travel Credit Card Rewards Calculator</h2>

      <form className="spending-form">
        {categories.map((cat) => (
          <div key={cat} className="spending-input">
            <label>{cat} ($/month)</label>
            <input
              type="number"
              min="0"
              value={spending[cat]}
              onChange={(e) => handleChange(cat, e.target.value)}
            />
          </div>
        ))}
      </form>

      <div className="results">
        <h3>Estimated Yearly Rewards Value</h3>
        <ul>
          {results
            .sort((a, b) => parseFloat(b.estimatedValue) - parseFloat(a.estimatedValue))
            .map((card) => (
              <li key={card.id}>
                <strong>{card.name}</strong>: ${card.estimatedValue} per year
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
