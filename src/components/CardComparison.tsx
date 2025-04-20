// File: components/CardComparison.tsx
import React, { useState } from 'react';
import styles from './CardComparison.module.css'; // Optional: use if you want custom styling

export default function CardComparison({ cards }) {
  const [selected, setSelected] = useState([null, null, null]);

  const handleChange = (index: number, cardName: string) => {
    const card = cards.find(c => c["Card Name"] === cardName);
    const updated = [...selected];
    updated[index] = card || null;
    setSelected(updated);
  };

  const fieldsToCompare = [
    { label: 'Card Name', key: 'Card Name' },
    { label: 'Issuer', key: 'Issuer' },
    { label: 'Annual Fee', key: 'Annual Fee' },
    { label: 'Sign-Up Bonus', key: 'Sign-Up Bonus' },
    { label: 'Reward Program', key: 'Reward Program' },
    { label: 'Multipliers Explained', key: 'Multipliers Explained' },
    { label: 'Redemption Rate (cents/pt)', key: 'Redemption Rate (cents/pt)' },
    { label: 'Foreign Transaction Fee', key: 'Foreign Transaction Fee' },
  ];

  return (
    <div className={styles.wrapper}>
      <div className={styles.dropdownRow}>
        {[0, 1, 2].map((index) => (
          <div key={index} className={styles.dropdownWrapper}>
            <label>Select Card {index + 1}</label>
            <select
              value={selected[index]?.["Card Name"] || ''}
              onChange={(e) => handleChange(index, e.target.value)}
            >
              <option value="">-- Select a card --</option>
              {cards.map(card => (
                <option key={card["Card Name"]} value={card["Card Name"]}>
                  {card["Card Name"]}
                </option>
              ))}
            </select>
          </div>
        ))}
      </div>

      <div className={styles.tableWrapper}>
        <table className={styles.compareTable}>
          <thead>
            <tr>
              <th>Feature</th>
              {selected.map((card, i) => (
                <th key={i}>{card ? card["Card Name"] : `Card ${i + 1}`}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {fieldsToCompare.map(({ label, key }) => (
              <tr key={key}>
                <td><strong>{label}</strong></td>
                {selected.map((card, i) => (
                  <td key={i}>{card ? card[key] || '—' : '—'}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
