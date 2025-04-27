import React, { useState, useMemo } from 'react';
import styles from '@/styles/CardFinder.module.css';
import cardsData from '@/data/finalcreditcard.json';

export default function CardFinder() {
  const [spendingProfile, setSpendingProfile] = useState({
    travel: 0,
    dining: 0,
    groceries: 0,
    gas: 0,
    other: 0,
  });
  const [preferences, setPreferences] = useState({
    preferNoAnnualFee: false,
    preferPremiumBenefits: false,
    preferCashBack: false,
  });
  const [aiSuggestions, setAiSuggestions] = useState([]);

  const handleSpendChange = (field, value) => {
    setSpendingProfile({ ...spendingProfile, [field]: Number(value) });
  };

  const handlePreferenceChange = (field) => {
    setPreferences({ ...preferences, [field]: !preferences[field] });
  };

  const matchedCards = useMemo(() => {
    if (!cardsData?.cards) return [];

    return cardsData.cards.map(card => {
      const rewardScore =
        (spendingProfile.travel * (getMultiplier(card, 'travel') || 1)) +
        (spendingProfile.dining * (getMultiplier(card, 'dining') || 1)) +
        (spendingProfile.groceries * (getMultiplier(card, 'groceries') || 1)) +
        (spendingProfile.gas * (getMultiplier(card, 'gas') || 1)) +
        (spendingProfile.other * (getMultiplier(card, 'other') || 1));

      let preferenceBonus = 0;
      if (preferences.preferNoAnnualFee && (card["Annual Fee"] || 0) === 0) preferenceBonus += 500;
      if (preferences.preferPremiumBenefits && card.perks?.length > 5) preferenceBonus += 500;
      if (preferences.preferCashBack && card.redemptionOptions?.cash_back_cpp) preferenceBonus += 500;

      const totalScore = rewardScore + preferenceBonus;

      return { card, totalScore };
    }).sort((a, b) => b.totalScore - a.totalScore);
  }, [spendingProfile, preferences]);

  function getMultiplier(card, category) {
    if (!card?.rewards) return 1;
    const match = card.rewards.find(r => r.category.includes(category));
    return match?.multiplier || 1;
  }

  const generateAiSuggestions = () => {
    const prompt = `Find the best travel credit cards based on this spending: \nTravel: $${spendingProfile.travel}, Dining: $${spendingProfile.dining}, Groceries: $${spendingProfile.groceries}, Gas: $${spendingProfile.gas}, Other: $${spendingProfile.other}. Preferences: ${JSON.stringify(preferences)}`;
    // Call your /api/gpt-suggest endpoint here (mocked)
    setAiSuggestions([
      "Amex Platinum if you want top travel perks.",
      "Chase Sapphire Preferred if you want good travel and dining." 
    ]);
  };

  return (
    <div className={styles.finderContainer}>
      <h1>Find Your Best Travel Card</h1>

      <section className={styles.inputSection}>
        <h2>Monthly Spending</h2>
        {['travel', 'dining', 'groceries', 'gas', 'other'].map(category => (
          <div key={category} className={styles.inputGroup}>
            <label>{category.charAt(0).toUpperCase() + category.slice(1)}</label>
            <input
              type="number"
              value={spendingProfile[category]}
              onChange={e => handleSpendChange(category, e.target.value)}
              min="0"
            />
          </div>
        ))}
      </section>

      <section className={styles.preferenceSection}>
        <h2>Preferences</h2>
        {['preferNoAnnualFee', 'preferPremiumBenefits', 'preferCashBack'].map(pref => (
          <div key={pref} className={styles.checkboxGroup}>
            <input
              type="checkbox"
              id={pref}
              checked={preferences[pref]}
              onChange={() => handlePreferenceChange(pref)}
            />
            <label htmlFor={pref}>{pref.replace(/([A-Z])/g, ' $1')}</label>
          </div>
        ))}
      </section>

      <section className={styles.resultsSection}>
        <h2>Top Matches</h2>
        {matchedCards.slice(0, 3).map(({ card }, idx) => (
          <div key={idx} className={styles.cardResult}>
            <h3>{card["Card Name"]}</h3>
            <p>Annual Fee: ${card["Annual Fee"]}</p>
            <a href={card.applyLink || '#'} target="_blank" rel="noopener noreferrer">Apply</a>
          </div>
        ))}
      </section>

      <button onClick={generateAiSuggestions} className={styles.aiButton}>Get AI Recommendations</button>

      {aiSuggestions.length > 0 && (
        <section className={styles.aiSection}>
          <h2>AI Suggestions</h2>
          <ul>
            {aiSuggestions.map((suggestion, idx) => (
              <li key={idx}>{suggestion}</li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}
