import React, { useState, useEffect } from 'react';
import styles from './CardComparison.module.css';
import Image from 'next/image';
import { CreditCard } from '@/hooks/useCreditCards';

interface CardComparisonProps {
  cards: CreditCard[];
  initiallySelectedCards?: CreditCard[];
}

const CardComparison = ({ cards, initiallySelectedCards = [] }: CardComparisonProps) => {
  const initialSelection: (CreditCard | null)[] = [null, null, null];
  initiallySelectedCards.slice(0, 3).forEach((card, index) => {
    initialSelection[index] = card;
  });

  const [selected, setSelected] = useState<(CreditCard | null)[]>(initialSelection);

  useEffect(() => {
    const newSelection = [null, null, null];
    initiallySelectedCards.slice(0, 3).forEach((card, index) => {
      newSelection[index] = card;
    });
    if (JSON.stringify(newSelection) !== JSON.stringify(selected)) {
      setSelected(newSelection);
    }
  }, [initiallySelectedCards]);

  const handleChange = (index: number, cardName: string) => {
    const card = cards.find((c) => c['Card Name'] === cardName);
    const updated = [...selected];
    updated[index] = card || null;
    setSelected(updated);
  };

  const fieldsToCompare = [
    { label: 'Card Image', key: 'image', type: 'image' },
    { label: 'Card Name', key: 'Card Name' },
    { label: 'Issuer', key: 'Issuer' },
    { label: 'Card Type', key: 'Card Type' },
    { label: 'Credit Score Req.', key: 'Credit Score Requirement' },
    { label: 'Annual Fee', key: 'Annual Fee' },
    { label: 'Foreign Transaction Fee', key: 'Foreign Transaction Fee' },
    { label: 'Sign-Up Bonus', key: 'Sign-Up Bonus' },
    { label: 'Minimum Spend', key: 'Minimum Spend for Bonus' },
    { label: 'Bonus Value ($)', key: 'Bonus Redemption Value ($)' },
    { label: 'Reward Program', key: 'Reward Program' },
    { label: 'Base Earning Rate', key: 'Base Earning Rate (pts/$)' },
    { label: 'Bonus Categories', key: 'Bonus Categories' },
    { label: 'Category Rates', key: 'Bonus Category Rates' },
    { label: 'Multipliers Explained', key: 'Multipliers Explained' },
    { label: 'Redemption Rate (c/pt)', key: 'Redemption Rate (cents/pt)' },
    { label: 'Intro APR', key: 'Intro APR' },
    { label: 'Purchase APR', key: 'APR Range (Purchases)' },
    { label: 'Balance Transfer APR', key: 'Balance Transfer APR' },
    { label: 'Balance Transfer Fee', key: 'Balance Transfer Fee' },
    { label: 'Cash Advance Fee', key: 'Cash Advance Fee' },
    { label: 'Late Payment Fee', key: 'Late Payment Fee' },
    { label: 'Penalty APR', key: 'Penalty APR' },
    { label: 'Lounge Access', key: 'Lounge Access' },
    { label: 'Specific Lounge', key: 'Specific Lounge Program' },
    { label: 'Airline Benefits', key: 'Airline Benefits' },
    { label: 'Hotel Benefits', key: 'Hotel Benefits' },
    { label: 'Travel Insurance', key: 'Travel Insurance' },
  ];

  return (
    <div className={styles.wrapper}>
      <div className={styles.dropdownRow}>
        {[0, 1, 2].map((index) => (
          <div key={index} className={styles.dropdownWrapper}>
            <label htmlFor={`compare-card-select-${index}`}>Select Card {index + 1}</label>
            <select
              id={`compare-card-select-${index}`}
              value={selected[index]?.['Card Name'] || ''}
              onChange={(e) => handleChange(index, e.target.value)}
            >
              <option value="">-- Select/Change Card --</option>
              {cards.map((card) => (
                <option key={card['Card Name']} value={card['Card Name']}>
                  {card['Card Name']}
                </option>
              ))}
            </select>
          </div>
        ))}
      </div>

      <div className={styles.tableWrapper}>
        <table className={styles.compareTable}>
          <tbody>
            {fieldsToCompare.map(({ label, key, type }) => (
              <tr key={key}>
                <td><strong>{label}</strong></td>
                {selected.map((card, i) => (
                  <td key={i}>
                    {card ? (
                      type === 'image' ? (
                        <Image
                          src={card['image'] || '/placeholder-card.png'}
                          alt={`${card['Card Name']} image`}
                          width={150}
                          height={94}
                          style={{ objectFit: 'contain' }}
                          unoptimized
                        />
                      ) : (
                        card[key as keyof CreditCard] || '—'
                      )
                    ) : (
                      '—'
                    )}
                  </td>
                ))}
              </tr>
            ))}
            <tr>
              <td><strong>Apply</strong></td>
              {selected.map((card, i) => (
                <td key={`apply-${i}`}>
                  {card ? (
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener sponsored"
                      className="Apply-button"
                    >
                      Apply Now
                    </a>
                  ) : (
                    '—'
                  )}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

// ✅ This line is critical
export default CardComparison;
