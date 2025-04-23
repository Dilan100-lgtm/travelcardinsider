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
  "Bonus Redemption Value ($)": string;
  "Reward Program": string;
  "Base Earning Rate (pts/$)": string;
  "Bonus Categories": string;
  "Bonus Category Rates": string;
  "Multipliers Explained": string;
  "Redemption Rate (cents/pt)": string;
}

const categoryList = [
  'travel',
  'dining',
  'groceries',
  'gas',
  'onlineShopping',
  'other'
] as const;

type SpendInput = Record<typeof categoryList[number], number>;

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
    return cardData.cards
      .map((card: CreditCard) => {
        const baseRate = parseFloat(card["Base Earning Rate (pts/$)"]) || 1;
        const redemptionRate = parseFloat(card["Redemption Rate (cents/pt)"]) / 100 || 0.01;

        // Bonus multipliers per category
        const bonusCategories = card["Bonus Categories"]?.split(',').map(c => c.trim().toLowerCase()) || [];
        const bonusRates = card["Bonus Category Rates"]?.split(',').map(r => parseFloat(r.trim()) || 0) || [];
        const bonusMap = new Map<string, number>();
        bonusCategories.forEach((cat, idx) => bonusMap.set(cat, bonusRates[idx] || baseRate));

        let totalPoints = 0;
        for (const cat of categoryList) {
          const rate = bonusMap.get(cat) || baseRate;
          totalPoints += spend[cat] * rate * 12; // 12 months spend
        }

        const totalValue = totalPoints * redemptionRate;

        return {
          ...card,
          totalPoints,
          totalValue,
        };
      })
      .filter(card => card.totalValue > 0)
      .sort((a, b) => b.totalValue - a.totalValue)
      .slice(0, 10);
  }, [spend]);

  return (
    <div style={{ padding: '2rem', maxWidth: '700px', margin: '0 auto' }}>
      <h2>AI-Powered Travel Credit Card Rewards Calculator</h2>
      <form style={{ display: 'grid', gap: '1rem', marginBottom: '2rem' }}>
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
              style={{ width: '100%', padding: '0.4rem' }}
            />
          </div>
        ))}
      </form>

      <h3>Top Smart Recommendations</h3>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {results.map((card) => (
          <li key={card["Card Name"]} style={{ marginBottom: '1.5rem', borderBottom: '1px solid #ccc', paddingBottom: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <img src={card.image} alt={card["Card Name"]} style={{ height: '50px' }} />
              <div>
                <strong>{card["Card Name"]}</strong>
                <div>Estimated Yearly Value: <strong>${card.totalValue.toFixed(2)}</strong></div>
                <div style={{ marginTop: '0.3rem' }}>
                  <a href={card.reviewLink} target="_blank" rel="noopener noreferrer" style={{ marginRight: '1rem' }}>
                    View Review
                  </a>
                  <a href={card.applyLink} target="_blank" rel="noopener sponsored">
                    Apply Now
                  </a>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
