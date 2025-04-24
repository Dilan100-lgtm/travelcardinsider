// File: src/components/RewardsCalculator.tsx

import React, { useState, useMemo } from 'react';
import cardData from '@/data/creditCards.json';

interface CreditCard {
  "Card Name": string;
  image: string;
  reviewLink: string;
  "Bonus Category Rates": string;
  "Bonus Categories": string;
  "Redemption Rate (cents/pt)": number;
}

const cards: CreditCard[] = cardData.cards.map((card) => ({
  ...card,
  "Redemption Rate (cents/pt)": parseFloat(card["Redemption Rate (cents/pt)"]) || 0.01,
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

export default function RewardsCalculator() {
  const [spend, setSpend] = useState<SpendInput>(defaultSpend);
  const [aiSuggestion, setAiSuggestion] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSpend((prev) => ({
      ...prev,
      [name]: parseFloat(value) || 0,
    }));
  };

  const results = useMemo(() => {
    return cards.map((card) => {
      const bonusRates = card["Bonus Category Rates"] || '';
const bonusCategories = card["Bonus Categories"] || '';
const rewardMultiplier = bonusRates.split(',').reduce((acc, rate, index) => {
  const category = bonusCategories.split(',')[index]?.trim();
  if (category) acc[category] = parseFloat(rate.trim()) || 1;
  return acc;
}, {} as Record<string, number>);


      let totalPoints = 0;
      for (const category of categoryList) {
        const multiplier = rewardMultiplier[category] || 1;
        totalPoints += spend[category] * multiplier * 12;
      }

      return {
        ...card,
        totalPoints,
        totalValue: totalPoints * pointValue,
      };
    }).sort((a, b) => b.totalValue - a.totalValue);
  }, [spend]);

  const getAiRecommendation = async () => {
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/gpt-recommend', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ topCards: results.slice(0, 10), spend }),
      });

      if (!res.ok) throw new Error(`Server responded ${res.status}`);

      const data = await res.json();
      setAiSuggestion(data.recommendation);
    } catch (err: any) {
      console.error('AI request failed:', err);
      setError('AI recommendation failed. Try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>AI-Powered Travel Rewards Calculator</h2>

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
              min={0}
              step={10}
            />
          </div>
        ))}
      </form>

      <div style={{ marginTop: '2rem' }}>
        <h3>Top Cards Based on Your Spend:</h3>
        <ul>
          {results.slice(0, 10).map((card) => (
            <li key={card["Card Name"]}>
              <img src={card.image} alt={card["Card Name"]} style={{ maxHeight: '40px' }} />
              <strong> {card["Card Name"]}:</strong> ${card.totalValue.toFixed(2)} per year
              <a href={card.reviewLink} target="_blank" rel="noopener noreferrer" style={{ marginLeft: '1rem' }}>
                View Review
              </a>
            </li>
          ))}
        </ul>
      </div>

      <button onClick={getAiRecommendation} style={{ marginTop: '1rem' }}>
        {loading ? 'Generating...' : 'Get AI Recommendation'}
      </button>

      {error && <p style={{ color: 'red', marginTop: '1rem' }}>{error}</p>}
      {aiSuggestion && (
        <div style={{ marginTop: '2rem', background: '#f0f0f0', padding: '1rem' }}>
          <h4>AI Suggestion:</h4>
          <p>{aiSuggestion}</p>
        </div>
      )}
    </div>
  );
}
