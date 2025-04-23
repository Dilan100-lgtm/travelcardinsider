import React, { useState } from 'react';
import creditCardData from '@/data/creditCards.json';

interface SpendInput {
  travel: number;
  dining: number;
  groceries: number;
  gas: number;
  other: number;
}

interface RewardResult {
  cardName: string;
  totalRewardsValue: number;
}

export default function RewardsCalculator() {
  const [spend, setSpend] = useState<SpendInput>({
    travel: 0,
    dining: 0,
    groceries: 0,
    gas: 0,
    other: 0,
  });

  const [results, setResults] = useState<RewardResult[]>([]);

  const handleChange = (category: keyof SpendInput, value: string) => {
    setSpend({ ...spend, [category]: parseFloat(value) || 0 });
  };

  const calculateRewards = () => {
    const output: RewardResult[] = creditCardData.cards.map((card: any) => {
      const earnRates = card['Bonus Category Rates'] || {};
      const baseRate = parseFloat(card['Base Earning Rate (pts/$)']) || 1;
      const redemptionRate = parseFloat(card['Redemption Rate (cents/pt)']) || 1;

      let totalPoints = 0;
      totalPoints += spend.travel * (earnRates.travel || baseRate);
      totalPoints += spend.dining * (earnRates.dining || baseRate);
      totalPoints += spend.groceries * (earnRates.groceries || baseRate);
      totalPoints += spend.gas * (earnRates.gas || baseRate);
      totalPoints += spend.other * baseRate;

      const yearlyPoints = totalPoints * 12;
      const totalRewardsValue = (yearlyPoints * redemptionRate) / 100;

      return {
        cardName: card['Card Name'],
        totalRewardsValue: parseFloat(totalRewardsValue.toFixed(2)),
      };
    });

    // Sort by best value
    setResults(output.sort((a, b) => b.totalRewardsValue - a.totalRewardsValue));
  };

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Travel Card Rewards Calculator</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {['travel', 'dining', 'groceries', 'gas', 'other'].map((category) => (
          <div key={category}>
            <label className="block text-sm font-medium mb-1 capitalize">
              {category} (monthly $)
            </label>
            <input
              type="number"
              value={spend[category as keyof SpendInput]}
              onChange={(e) => handleChange(category as keyof SpendInput, e.target.value)}
              className="w-full p-2 border rounded"
            />
          </div>
        ))}
      </div>

      <button
        onClick={calculateRewards}
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Calculate Rewards
      </button>

      {results.length > 0 && (
        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-2">Top Cards by Estimated Yearly Value:</h3>
          <ul className="space-y-2">
            {results.slice(0, 5).map((res, index) => (
              <li key={index} className="border p-3 rounded shadow">
                <strong>{res.cardName}</strong>: ${res.totalRewardsValue.toLocaleString()}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
