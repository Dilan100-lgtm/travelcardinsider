
import React, { useState, useMemo } from 'react';
import cardData from '@/data/creditCards.json';

interface CreditCard {
  "Card Name": string;
  Issuer: string;
  image: string;
  ratingValue: number;
  applyLink: string;
  reviewLink: string;
  ratesandfees: string;
  "Card Type": string;
  "Annual Fee": string;
  "APR Range (Purchases)": string;
  "Credit Score Requirement": string;
  "Foreign Transaction Fee": string;
  "Sign-Up Bonus": string;
  "Minimum Spend for Bonus": string;
  "Bonus Redemption Value ($)": number;
  "Reward Program": string;
  "Base Earning Rate (pts/$)": number;
  "Bonus Categories": string;
  "Bonus Category Rates": string;
  "Multipliers Explained": string;
  "Redemption Rate (cents/pt)": number;
}

const cards: CreditCard[] = cardData.cards.map((card) => ({
  ...card,
  "Bonus Redemption Value ($)": parseFloat(card["Bonus Redemption Value ($)"]),
  "Base Earning Rate (pts/$)": parseFloat(card["Base Earning Rate (pts/$)"]),
  "Redemption Rate (cents/pt)": parseFloat(card["Redemption Rate (cents/pt)"]),
}));

const categoryList = [
  'travel', 'dining', 'groceries', 'gas', 'onlineShopping', 'other'
] as const;

type SpendInput = {
  [key in typeof categoryList[number]]: number;
};

const defaultSpend: SpendInput = {
  travel: 0,
  dining: 0,
  groceries: 0,
  gas: 0,
  onlineShopping: 0,
  other: 0,
};

export default function RewardsCalculator() {
  const [spend, setSpend] = useState<SpendInput>(defaultSpend);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSpend((prev) => ({
      ...prev,
      [name]: parseFloat(value) || 0,
    }));
  };

  const results = useMemo(() => {
    return cards
      .map(card => {
        const rewardMultiplier = card["Bonus Category Rates"]
          .split(',')
          .reduce((acc, rate, index) => {
            const category = card["Bonus Categories"].split(',')[index]?.trim();
            if (category) {
              acc[category] = parseFloat(rate.trim()) || 1;
            }
            return acc;
          }, {} as Record<string, number>);
        const pointValue = card["Redemption Rate (cents/pt)"] / 100 || 0.01;
  
        let totalPoints = 0;
        for (const category in spend) {
          const multiplier = rewardMultiplier[category] || rewardMultiplier["other"] || 1;
          totalPoints += spend[category] * multiplier * 12; // 12 months
        }
  
        const totalValue = totalPoints * pointValue;
  
        return {
          ...card,
          totalPoints,
          totalValue
        };
      })
      .sort((a, b) => b.totalValue - a.totalValue) // 🔥 Sort by best value
      .slice(0, 10); // ✅ Show top 10 only
  }, [cards, spend]);
  

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Travel Rewards Calculator</h2>
      <form style={{ display: 'grid', gap: '1rem', maxWidth: '400px' }}>
        {categoryList.map((category) => (
          <div key={category}>
            <label htmlFor={category}>
              {category.charAt(0).toUpperCase() + category.slice(1)} Spend ($):
            </label>
            <input
              type="number"
              id={category}
              name={category}
              value={spend[category]}
              onChange={handleChange}
              min="0"
              step="10"
            />
          </div>
        ))}
      </form>

      <div style={{ marginTop: '2rem' }}>
        <h3>Top Cards Based on Your Spend:</h3>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {results.slice(0, 10).map((result) => (
            <li key={result["Card Name"]} style={{ marginBottom: '1rem' }}>
              <img src={result.image} alt={result["Card Name"]} style={{ maxHeight: '40px' }} />
              <strong> {result["Card Name"]}:</strong> ${result.totalValue.toFixed(2)} per year
              <a href={result.reviewLink} target="_blank" rel="noopener noreferrer" style={{ marginLeft: '1rem' }}>
                View Review
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
