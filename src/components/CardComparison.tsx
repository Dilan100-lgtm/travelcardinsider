// File: components/CardComparison.tsx

import React from 'react';
import styles from './CardComparison.module.css'; // ✅ This import was missing!

interface CreditCard {
  "Card Name": string;
  "Issuer": string;
  "Sign-Up Bonus": string | null;
  "Annual Fee": string;
  "Reward Program": string | null;
  "Multipliers Explained": string | null;
}

interface Props {
  cards: CreditCard[];
  selectedCards: CreditCard[];
  onCardSelect: (card: CreditCard) => void;
}

export default function CardComparison({ cards, selectedCards, onCardSelect }: Props) {
  if (!Array.isArray(cards)) {
    return <p>Loading cards...</p>;
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.cardGrid}>
        {cards.map((card) => (
          <div
            key={card['Card Name']}
            className={`${styles.card} ${
              selectedCards.some((c) => c['Card Name'] === card['Card Name']) ? styles.selected : ''
            }`}
            onClick={() => onCardSelect(card)}
          >
            <h4>{card['Card Name']}</h4>
            <p><strong>Issuer:</strong> {card.Issuer}</p>
            <p><strong>Sign-Up Bonus:</strong> {card['Sign-Up Bonus']}</p>
            <p><strong>Annual Fee:</strong> {card['Annual Fee']}</p>
            <p><strong>Reward Program:</strong> {card['Reward Program']}</p>
          </div>
        ))}
      </div>

      {selectedCards.length >= 2 && (
        <div className={styles.compareBox}>
          <h3>Compare Selected Cards</h3>
          <div className={styles.compareGrid}>
            {selectedCards.map((card) => (
              <div key={card['Card Name']} className={styles.compareCard}>
                <h4>{card['Card Name']}</h4>
                <p><strong>Bonus:</strong> {card['Sign-Up Bonus']}</p>
                <p><strong>Annual Fee:</strong> {card['Annual Fee']}</p>
                <p><strong>Rewards:</strong> {card['Multipliers Explained']}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
