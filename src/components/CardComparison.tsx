// File: components/CardComparison.tsx
import React, { useState, useEffect } from 'react'; // Added useEffect
import styles from './CardComparison.module.css';
import { CreditCard } from '@/hooks/useCreditCards'; // Assuming interface is exported from hook file

// Define props interface
interface CardComparisonProps {
  cards: CreditCard[];
  initiallySelectedCards?: CreditCard[]; // Optional prop for pre-selection
}

export default function CardComparison({ cards, initiallySelectedCards = [] }: CardComparisonProps) { // Destructure props
  // Initialize state. Use initiallySelectedCards if provided, ensuring it fits the 3-slot array.
  const initialSelection = [null, null, null];
  initiallySelectedCards.slice(0, 3).forEach((card, index) => {
      initialSelection[index] = card;
  });

  const [selected, setSelected] = useState<(CreditCard | null)[]>(initialSelection);

  // Effect to update selection if initial prop changes after mount (optional, depends on exact flow)
  useEffect(() => {
      const newSelection = [null, null, null];
      initiallySelectedCards.slice(0, 3).forEach((card, index) => {
          newSelection[index] = card;
      });
       // Only update if the initial cards actually changed to avoid unnecessary re-renders
      if (JSON.stringify(newSelection) !== JSON.stringify(selected)) {
          setSelected(newSelection);
      }
  }, [initiallySelectedCards]); // Rerun when the initial selection prop changes


  const handleChange = (index: number, cardName: string) => {
    const card = cards.find(c => c["Card Name"] === cardName);
    const updated = [...selected];
    updated[index] = card || null; // Allow deselecting by choosing the placeholder
    setSelected(updated);
  };

  // Define the fields you want to compare here
   const fieldsToCompare = [
     { label: 'Card Image', key: 'Image', type: 'image' }, // Example: Add image row
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
      {/* Dropdown Row - allows changing the comparison on this page */}
      <div className={styles.dropdownRow}>
        {[0, 1, 2].map((index) => (
          <div key={index} className={styles.dropdownWrapper}>
            <label htmlFor={`compare-card-select-${index}`}>Select Card {index + 1}</label>
            <select
              id={`compare-card-select-${index}`}
              value={selected[index]?.["Card Name"] || ''}
              onChange={(e) => handleChange(index, e.target.value)}
            >
              <option value="">-- Select/Change Card --</option> {/* Modified placeholder */}
              {cards.map(card => (
                <option key={card["Card Name"]} value={card["Card Name"]}>
                  {card["Card Name"]}
                </option>
              ))}
            </select>
          </div>
        ))}
      </div>

      {/* Comparison Table */}
      <div className={styles.tableWrapper}>
        <table className={styles.compareTable}>
          {/* No thead needed if features are rows */}
          <tbody>
            {fieldsToCompare.map(({ label, key, type }) => (
              <tr key={key}>
                <td><strong>{label}</strong></td>
                {selected.map((card, i) => (
                  <td key={i}>
                     {card ?
                       (type === 'image' ?
                         <Image src={card['image'] || '/placeholder-card.png'} alt={`${card['Card Name']} image`} width={150} height={94} style={{ objectFit: 'contain' }} />
                         : (card[key] || '—'))
                       : '—'}
                  </td>
                ))}
              </tr>
            ))}
             {/* Optional: Add Apply Now button row */}
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