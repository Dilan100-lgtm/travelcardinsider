// File: components/CardComparison.tsx
// Simplified - manages its own selection state entirely

import React, { useState } from 'react'; // Removed useEffect
import styles from './CardComparison.module.css';
import { CreditCard } from '@/hooks/useCreditCards'; // Assuming interface is exported from hook file
import Image from 'next/image'; // Import Image if not already done

// Define props interface - only needs all cards now
interface CardComparisonProps {
  cards: CreditCard[];
  // initiallySelectedCards?: CreditCard[]; // REMOVED this prop
}

export default function CardComparison({ cards }: CardComparisonProps) { // Removed initiallySelectedCards from destructuring

  // Initialize state directly - starts empty
  const [selected, setSelected] = useState<(CreditCard | null)[]>([null, null, null]);

  /* useEffect(() => { // REMOVED this effect
      const newSelection = [null, null, null];
      initiallySelectedCards.slice(0, 3).forEach((card, index) => {
          newSelection[index] = card;
      });
      if (JSON.stringify(newSelection) !== JSON.stringify(selected)) {
          setSelected(newSelection);
      }
  }, [initiallySelectedCards]); */


  const handleChange = (index: number, cardName: string) => {
    const card = cards.find(c => c["Card Name"] === cardName);
    const updated = [...selected];
    updated[index] = card || null;
    setSelected(updated);
  };

  // Define the fields you want to compare here (same as before)
   const fieldsToCompare = [
     { label: 'Card Image', key: 'Image', type: 'image' },
     { label: 'Card Name', key: 'Card Name' },
     { label: 'Issuer', key: 'Issuer' },
     { label: 'Annual Fee', key: 'Annual Fee' },
     { label: 'Sign-Up Bonus', key: 'Sign-Up Bonus' },
     { label: 'Minimum Spend', key: 'Minimum Spend for Bonus'},
     { label: 'Bonus Value ($)', key: 'Bonus Redemption Value ($)'},
     { label: 'Reward Program', key: 'Reward Program' },
     { label: 'Base Earning Rate', key: 'Base Earning Rate (pts/$)' },
     { label: 'Bonus Categories', key: 'Bonus Categories'},
     { label: 'Category Rates', key: 'Bonus Category Rates'},
     { label: 'Lounge Access', key: 'Lounge Access'},
     { label: 'Specific Lounge', key: 'Specific Lounge Program'},
     { label: 'Foreign Transaction Fee', key: 'Foreign Transaction Fee' },
     { label: 'Travel Insurance', key: 'Travel Insurance'},
     { label: 'APR', key: 'APR Range (Purchases)' },
     // Add more fields as needed
   ];


  return (
    <div className={styles.wrapper}>
      {/* Dropdown Row - this is where selection now happens */}
      <div className={styles.dropdownRow}>
        {[0, 1, 2].map((index) => (
          <div key={index} className={styles.dropdownWrapper}>
            <label htmlFor={`compare-card-select-${index}`}>Select Card {index + 1}</label>
            <select
              id={`compare-card-select-${index}`}
              value={selected[index]?.["Card Name"] || ''} // Value is based on internal state
              onChange={(e) => handleChange(index, e.target.value)}
            >
              <option value="">-- Select a Card --</option> {/* Default option */}
              {cards.map(card => (
                <option key={card["Card Name"]} value={card["Card Name"]}>
                  {card["Card Name"]}
                </option>
              ))}
            </select>
          </div>
        ))}
      </div>

      {/* Comparison Table (structure remains the same) */}
      <div className={styles.tableWrapper}>
        <table className={styles.compareTable}>
          <tbody>
            {fieldsToCompare.map(({ label, key, type }) => (
              <tr key={key}>
                <td><strong>{label}</strong></td>
                {selected.map((card, i) => (
                  <td key={i}>
                     {card ?
                       (type === 'image' ?
                         // Make sure card objects have an 'image' property or adjust key
                         <Image src={card['image'] || '/placeholder-card.png'} alt={`${card['Card Name']} image`} width={150} height={94} style={{ objectFit: 'contain' }} />
                         : (card[key] || '—'))
                       : '—'}
                  </td>
                ))}
              </tr>
            ))}
             {/* Optional: Add Apply Now button row (structure remains the same) */}
              <tr>
                 <td><strong>Apply</strong></td>
                 {selected.map((card, i) => (
                    <td key={`apply-${i}`}>
                        {card ? (
                            <a
                                href={`#`} /* Replace with actual affiliate link */
                                target="_blank"
                                rel="noopener sponsored"
                                className="Apply-button" // Use your button style
                            >
                                Apply Now
                            </a>
                        ) : (
                            "—"
                        )}
                    </td>
                 ))}
              </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}