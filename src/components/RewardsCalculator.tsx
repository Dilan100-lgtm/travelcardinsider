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

const cards: CreditCard[] = cardData.cards.map(card => ({
  ...card,
  "Bonus Redemption Value ($)": parseFloat(card["Bonus Redemption Value ($)"]),
  "Base Earning Rate (pts/$)": parseFloat(card["Base Earning Rate (pts/$)"]),
  "Redemption Rate (cents/pt)": parseFloat(card["Redemption Rate (cents/pt)"]),
}));

const categoryList = ['travel', 'dining', 'groceries', 'gas', 'onlineShopping', 'other'] as const;

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

// Normalize categories to match input keys
const normalize = (str: string): string => {
  const map: Record<string, string> = {
    supermarkets: 'groceries',
    grocery: 'groceries',
    supermarket: 'groceries',
    restaurants: 'dining',
    dining: 'dining',
    travel: 'travel',
    gas: 'gas',
    fuel: 'gas',
    online: 'onlineShopping',
    shopping: 'onlineShopping',
    'online shopping': 'onlineShopping',
    other: 'other',
  };
  return map[str.trim().toLowerCase()] || 'other';
};

export default function RewardsCalculator() {
  const [spend, setSpend] = useState<SpendInput>(defaultSpend);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSpend(prev => ({
      ...prev,
      [name]: parseFloat(value) || 0,
    }));
  };

  const results = useMemo(() => {
    return cards
      .map(card => {
        const categories = card["Bonus Categories"].split(',');
        const rates = card["Bonus Category Rates"].split(',');
        const multiplierMap: Partial<Record<keyof SpendInput, number>> = {};

        categories.forEach((cat, i) => {
          const key = normalize(cat) as keyof SpendInput;
          const rate = parseFloat(rates[i]?.trim()) || card["Base Earning Rate (pts/$)"] || 1;
          multiplierMap[key] = rate;
        });

        const pointValue = card["Redemption Rate (cents/pt)"] / 100 || 0.01;
        let totalPoints = 0;

        for (const category of categoryList) {
          const multiplier = multiplierMap[category] || card["Base Earning Rate (pts/$)"];
          totalPoints += spend[category] * multiplier * 12;
        }

        return {
          ...card,
          totalPoints,
          totalValue: totalPoints * pointValue,
        };
      })
      .sort((a, b) => b.totalValue - a.totalValue) // Top value first
      .slice(0, 10); // Top 10 only
  }, [spend]);

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Travel Rewards Calculator</h2>
      <form style={{ display: 'grid', gap: '1rem', maxWidth: '400px' }}>
        {categoryList.map((category) => (
          <div key={category}>
            <label htmlFor={category}>
              {category.charAt(0).toUpperCase() + category.slice(1)} Spend ($/month):
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
          {results.map(card => (
            <li key={card["Card Name"]} style={{ marginBottom: '1rem' }}>
              <img src={card.image} alt={card["Card Name"]} style={{ maxHeight: '40px' }} />
              <strong> {card["Card Name"]}</strong>: ${card.totalValue.toFixed(2)} / year
              <a href={card.reviewLink} target="_blank" rel="noopener noreferrer" style={{ marginLeft: '1rem' }}>
                View Review
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
