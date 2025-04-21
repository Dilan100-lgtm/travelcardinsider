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

 // Inside components/CardComparison.tsx

// Define the fields you want to compare here - CONFIRMED LIST WITH >20 ROWS
const fieldsToCompare = [
  // Card Identity & Cost
  
  { label: 'Card Name', key: 'Card Name' },
  { label: 'Issuer', key: 'Issuer' },
  { label: 'Card Type', key: 'Card Type' },
  { label: 'Credit Score Req.', key: 'Credit Score Requirement' },
  { label: 'Annual Fee', key: 'Annual Fee' },
  { label: 'Foreign Transaction Fee', key: 'Foreign Transaction Fee' },

  // Welcome Offer
  { label: 'Sign-Up Bonus', key: 'Sign-Up Bonus' },
  { label: 'Minimum Spend', key: 'Minimum Spend for Bonus' },
  { label: 'Bonus Value ($)', key: 'Bonus Redemption Value ($)' },

  // Earning Rewards
  { label: 'Reward Program', key: 'Reward Program' },
  { label: 'Base Earning Rate', key: 'Base Earning Rate (pts/$)' },
  { label: 'Bonus Categories', key: 'Bonus Categories' },
  { label: 'Category Rates', key: 'Bonus Category Rates' },
  { label: 'Multipliers Explained', key: 'Multipliers Explained' },
  { label: 'Redemption Rate (c/pt)', key: 'Redemption Rate (cents/pt)' },

  // APRs & Fees
  { label: 'Intro APR', key: 'Intro APR' },
  { label: 'Purchase APR', key: 'APR Range (Purchases)' },
  { label: 'Balance Transfer APR', key: 'Balance Transfer APR' },
  { label: 'Balance Transfer Fee', key: 'Balance Transfer Fee' },
  { label: 'Cash Advance Fee', key: 'Cash Advance Fee' },
  { label: 'Late Payment Fee', key: 'Late Payment Fee' },
  { label: 'Penalty APR', key: 'Penalty APR' },

  // Travel & Other Perks
  { label: 'Lounge Access', key: 'Lounge Access' },
  { label: 'Specific Lounge', key: 'Specific Lounge Program' },
  { label: 'Airline Benefits', key: 'Airline Benefits' },
  { label: 'Hotel Benefits', key: 'Hotel Benefits' },
  { label: 'Travel Insurance', key: 'Travel Insurance' },

  // Add/remove/reorder fields as needed
];

// ... rest of the CardComparison.tsx component ...

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