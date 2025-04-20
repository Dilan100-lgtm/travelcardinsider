// File: components/CardComparison.tsx
// Conceptual restructuring for column layout

import React, { useState } from 'react';
import styles from './CardComparison.module.css'; // We will heavily modify this CSS
import { CreditCard } from '@/hooks/useCreditCards';
import Image from 'next/image';

interface CardComparisonProps {
  cards: CreditCard[];
}

export default function CardComparison({ cards }: CardComparisonProps) {
  const [selected, setSelected] = useState<(CreditCard | null)[]>([null, null, null]);

  const handleChange = (index: number, cardName: string) => {
    const card = cards.find(c => c["Card Name"] === cardName);
    const updated = [...selected];
    updated[index] = card || null;
    setSelected(updated);
  };

  // Keep your expanded list of fields from the previous step
  const fieldsToCompare = [
     // Example subset - use your full list from the previous step
     { label: 'Annual Fee', key: 'Annual Fee' },
     { label: 'Sign-Up Bonus', key: 'Sign-Up Bonus' },
     { label: 'Reward Program', key: 'Reward Program' },
     { label: 'Purchase APR', key: 'APR Range (Purchases)' },
     { label: 'Foreign Transaction Fee', key: 'Foreign Transaction Fee' },
      // ... add all other desired rows here
   ];

  return (
    <div className={styles.comparisonContainer}> {/* Main container */}

      {/* --- Header Row for Selection & Card Headers --- */}
      <div className={styles.headerRow}>
         {/* Placeholder for Feature labels column header (optional) */}
         <div className={styles.featureHeader}></div>

         {/* Card Selection / Header Columns */}
         {[0, 1, 2].map((index) => (
           <div key={`header-${index}`} className={styles.cardColumnHeader}>
             <div className={styles.dropdownWrapper}> {/* Keep dropdowns */}
               <label htmlFor={`compare-card-select-${index}`}>Card {index + 1}</label>
               <select
                 id={`compare-card-select-${index}`}
                 value={selected[index]?.["Card Name"] || ''}
                 onChange={(e) => handleChange(index, e.target.value)}
               >
                 <option value="">-- Select a Card --</option>
                 {cards.map(card => (
                   <option key={card["Card Name"]} value={card["Card Name"]}>
                     {card["Card Name"]}
                   </option>
                 ))}
               </select>
             </div>
             {selected[index] && ( // Display card info if selected
               <div className={styles.cardInfo}>
                  <Image
                     src={selected[index]?.['image'] || '/placeholder-card.png'}
                     alt={`${selected[index]?.['Card Name']} image`}
                     width={180} // Adjust size
                     height={113} // Adjust size
                     style={{ objectFit: 'contain', marginBottom: '0.5rem' }}
                  />
                  <h3 className={styles.cardName}>{selected[index]?.['Card Name']}</h3>
                  {/* Add Rating Here if you have it in data */}
                  <a
                     href={selected[index]?.['applyLink'] || '#'} // Use actual apply link
                     target="_blank"
                     rel="noopener sponsored"
                     className={`Apply-button ${styles.applyButton}`} // Use your button style + module style
                  >
                     Apply Now
                  </a>
               </div>
             )}
           </div>
         ))}
      </div>

      {/* --- Feature Rows --- */}
      {fieldsToCompare.map(({ label, key }) => (
        <div key={key} className={styles.featureRow}>
          {/* Feature Label Column */}
          <div className={styles.featureLabelCell}>
            <strong>{label}</strong>
          </div>

          {/* Card Value Columns */}
          {[0, 1, 2].map((index) => (
            <div key={`value-${index}-${key}`} className={styles.cardValueCell}>
              {selected[index]?.[key as keyof CreditCard] || '—'}
            </div>
          ))}
        </div>
      ))}

    </div> // End comparisonContainer
  );
}