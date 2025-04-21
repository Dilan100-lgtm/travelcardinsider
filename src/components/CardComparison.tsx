// File: components/CardComparison.tsx
// Complete component with column layout, expanded rows, and scaled star rating

import React, { useState } from 'react';
import styles from './CardComparison.module.css'; // Ensure this CSS file has column layout styles (Grid/Flexbox)
import { CreditCard } from '@/hooks/useCreditCards'; // Make sure path is correct
import Image from 'next/image';

// --- Helper Component for Star Rating (Scales 10-pt input to 5-star output) ---
interface StarRatingProps {
  value?: number; // Rating value (e.g., 8.4 out of 10)
  originalMax?: number; // The original scale max (e.g., 10)
  displayMax?: number; // The display scale max (e.g., 5)
}

const StarRating: React.FC<StarRatingProps> = ({
  value = 0,
  originalMax = 10, // Assume original scale is 10
  displayMax = 5    // Display scale is 5
}) => {
  // Scale the value from originalMax (10) down to displayMax (5)
  // Handle potential non-numeric or zero originalMax
  const scaledValue = (typeof value === 'number' && originalMax > 0)
    ? (value / originalMax) * displayMax
    : 0;

  // Calculate stars based on the scaled value (0-5)
  const fullStars = Math.floor(scaledValue);
  // Simple rounding for half star: >= 0.5 rounds up for display purposes here
  const additionalStar = (scaledValue % 1) >= 0.5 ? 1 : 0;
  const totalStarsToShow = Math.min(fullStars + additionalStar, displayMax); // Cap at displayMax
  const emptyStars = displayMax - totalStarsToShow;


  // Ensure value is treated as a number for toFixed
  const displayValue = typeof value === 'number' ? value.toFixed(1) : 'N/A';
  const displayOriginalMax = typeof originalMax === 'number' ? originalMax : 'N/A';


  return (
    <div className={styles.starRating} aria-label={`Rating: ${displayValue} out of ${displayOriginalMax}`}>
       {/* Display stars based on the 5-star scale calculation */}
      {'★'.repeat(totalStarsToShow)}
      {'☆'.repeat(emptyStars)}
       <span style={{ fontSize: '0.8em', marginLeft: '0.3em', verticalAlign: 'middle' }}>
         {/* Display the original rating value (e.g., 8.4 / 10) */}
         ({displayValue} / {displayOriginalMax})
       </span>
    </div>
  );
};
// --- End Helper Component ---


// --- Main Comparison Component ---
interface CardComparisonProps {
  cards: CreditCard[];
}

export default function CardComparison({ cards }: CardComparisonProps) {
  const [selected, setSelected] = useState<(CreditCard | null)[]>([null, null, null]);

  const handleChange = (index: number, cardName: string) => {
    // Allow deselecting by choosing the placeholder option
    const card = cardName ? cards.find(c => c["Card Name"] === cardName) : null;
    const updated = [...selected];
    updated[index] = card || null;
    setSelected(updated);
  };

  // Define the fields you want to compare here - Expanded List
  const fieldsToCompare = [
    // Card Identity & Cost
    // Note: Image row removed from here, handled in header
    // { label: 'Card Image', key: 'image', type: 'image' },
    { label: 'Rating', key: 'ratingValue', type: 'stars' }, // Added type for custom render
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
  ];

  return (
    <div className={styles.comparisonContainer}> {/* Main container for Grid/Flex */}

      {/* --- Header Row for Selection & Card Headers --- */}
      <div className={styles.headerRow}>
         {/* Empty cell corresponding to the feature label column */}
         <div className={styles.featureHeader}></div>

         {/* Card Selection / Header Columns */}
         {[0, 1, 2].map((index) => (
           <div key={`header-${index}`} className={styles.cardColumnHeader}>
             {/* Dropdown Selector */}
             <div className={styles.dropdownWrapper}>
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
             {/* Card Info Display (If a card is selected) */}
             {selected[index] && (
               <div className={styles.cardInfo}>
                  {/* Card Image */}
                  <Image
                     // Use optional chaining and provide a fallback image
                     src={selected[index]?.image || '/images/cards/placeholder.png'} // ADJUST PLACEHOLDER PATH
                     alt={`${selected[index]?.['Card Name'] || 'Card'} image`}
                     width={180} // Adjust size as needed
                     height={113} // Adjust size as needed
                     style={{ objectFit: 'contain', marginBottom: '0.5rem', backgroundColor: '#eee' }} // Added background for placeholder visibility
                  />
                  {/* Card Name */}
                  <h3 className={styles.cardName}>{selected[index]?.['Card Name']}</h3>
                  {/* Apply Button */}
                  <a
                     href={selected[index]?.applyLink || '#'} // Use actual apply link property from your JSON
                     target="_blank"
                     rel="noopener sponsored"
                     className={`Apply-button ${styles.applyButton}`} // Combine global and module styles if needed
                  >
                     Apply Now
                  </a>
               </div>
             )}
              {/* Show placeholder if no card is selected */}
              {!selected[index] && (
                  <div className={styles.cardPlaceholder}>Select a card above</div>
              )}
           </div>
         ))}
      </div>

      {/* --- Feature Rows --- */}
      {fieldsToCompare.map(({ label, key, type }) => (
        <div key={key} className={styles.featureRow}>
          {/* Feature Label Column */}
          <div className={styles.featureLabelCell}>
            <strong>{label}</strong>
          </div>

          {/* Card Value Columns */}
          {[0, 1, 2].map((index) => (
            <div key={`value-${index}-${key}`} className={styles.cardValueCell}>
              {/* Render based on type or default */}
              {type === 'stars' && selected[index] ? (
                <StarRating value={selected[index]?.ratingValue} originalMax={10} displayMax={5} />
              ) : (
                 // Default text rendering - use optional chaining
                 selected[index]?.[key as keyof CreditCard] ?? '—' // Use nullish coalescing for fallback
              )}
            </div>
          ))}
        </div>
      ))}

       {/* --- Apply Button Row (Alternative placement) --- */}
       {/* You might prefer apply buttons only in the header, or repeated here */}
       {/* <div className={`${styles.featureRow} ${styles.applyRow}`}>
            <div className={styles.featureLabelCell}><strong>Apply</strong></div>
            {[0, 1, 2].map((index) => (
                <div key={`apply-cell-${index}`} className={styles.cardValueCell}>
                    {selected[index] ? (
                         <a
                            href={selected[index]?.applyLink || '#'}
                            target="_blank"
                            rel="noopener sponsored"
                            className={`Apply-button ${styles.applyButton}`}
                        > Apply Now </a>
                    ) : '—'}
                </div>
             ))}
       </div> */}


    </div> // End comparisonContainer
  );
}