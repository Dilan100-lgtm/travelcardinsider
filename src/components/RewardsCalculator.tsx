// File: src/components/RewardsCalculator.tsx

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
    return cards.map(card => {
      const rewardMultiplier: Record<string, number> = {};

      const categories = card["Bonus Categories"]?.split(',') || [];
      const rates = card["Bonus Category Rates"]?.split(',') || [];

      categories.forEach((cat, i) => {
        const key = cat.trim().toLowerCase();
        const rate = parseFloat(rates[i]?.trim() || '1');
        if (key) rewardMultiplier[key] = rate;
      });

      const pointValue = (card["Redemption Rate (cents/pt)"] || 1) / 100;
      let totalPoints = 0;
      const matchedCategories: string[] = [];

      for (const cat of categoryList) {
        const multiplier = rewardMultiplier[cat] || rewardMultiplier["other"] || 1;
        if (multiplier > 1 && spend[cat] > 0) {
          matchedCategories.push(`${cat} (${multiplier}x)`);
        }
        totalPoints += spend[cat] * multiplier * 12;
      }

      return {
        ...card,
        totalPoints,
        totalValue: totalPoints * pointValue,
        matchedCategories
      };
    }).sort((a, b) => b.totalValue - a.totalValue);
  }, [spend]);

  return (
    <div style={{ padding: '2rem', maxWidth: '1000px', margin: '0 auto' }}>
      <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>AI-Powered Travel Rewards Calculator</h2>

      <form style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '2rem' }}>
        {categoryList.map((cat) => (
          <div key={cat}>
            <label htmlFor={cat}>
              {cat.charAt(0).toUpperCase() + cat.slice(1)} Spend ($/mo):
            </label>
            <input
              type="number"
              name={cat}
              value={spend[cat]}
              onChange={handleChange}
              min="0"
              step="10"
              style={{ width: '100%', padding: '0.5rem' }}
            />
          </div>
        ))}
      </form>

      <div style={{ marginTop: '2rem' }}>
        <h3 style={{ fontSize: '1.4rem' }}>Top 3 Personalized Card Recommendations</h3>
        {results.slice(0, 3).map((card, index) => (
          <div key={card["Card Name"]} style={{ border: '1px solid #ccc', borderRadius: '10px', padding: '1rem', marginBottom: '1rem', backgroundColor: '#f9fafb' }}>
            <h4>{index + 1}. {card["Card Name"]}</h4>
            <img src={card.image} alt={card["Card Name"]} style={{ maxHeight: '60px' }} />
            <p><strong>Estimated Annual Rewards:</strong> ${card.totalValue.toFixed(2)}</p>
            <p><strong>Matched Categories:</strong> {card.matchedCategories.length ? card.matchedCategories.join(', ') : 'Base rate only'}</p>
            <p><a href={card.reviewLink} target="_blank" rel="noopener noreferrer">View Full Review</a></p>
          </div>
        ))}
      </div>
    </div>
  );
}
