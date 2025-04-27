// File: /components/RecommendedCardTile.js
import React, { useState } from 'react';
import Image from 'next/image';
import styles from '@/styles/CardFinder.module.css'; // Ensure path is correct

// Optional: Define or import icons if you use them
// import { FaInfoCircle, FaExternalLinkAlt, FaCheckCircle, FaPlus, FaMinus } from 'react-icons/fa';

export default function RecommendedCardTile({ card, isSelected, onCompareChange }) {
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);

  if (!card) return null;

  // Add simple tracking parameters
  const applyLinkWithTracking = `${card.applyUrl}${card.applyUrl?.includes('?') ? '&' : '?'}utm_source=travelcardinsider&utm_medium=cardfinder&utm_campaign=recommendation&subid1=${encodeURIComponent(card.cardId)}`;
  const reviewLinkWithTracking = card.reviewUrl ? `${card.reviewUrl}?utm_source=travelcardinsider&utm_medium=cardfinder&utm_campaign=review_click` : null;


  // --- Analytics Placeholder Functions ---
  const handleApplyClick = () => {
      console.log('ANALYTICS EVENT: Apply Clicked', { cardName: card.name, score: card.score });
      // window.gtag('event', 'apply_click', { card_name: card.name, score: card.score });
  };
  const handleReviewClick = () => {
      console.log('ANALYTICS EVENT: Review Clicked', { cardName: card.name });
       // window.gtag('event', 'review_click', { card_name: card.name });
  };
  const handleAccordionToggle = () => {
      const newState = !isAccordionOpen;
      setIsAccordionOpen(newState);
      if (newState) { // Only log when opening
           console.log('ANALYTICS EVENT: Explain Why Opened', { cardName: card.name });
           // window.gtag('event', 'explain_score_open', { card_name: card.name });
      }
  }
  const handleCheckboxChange = () => {
      onCompareChange(card.cardId); // Let parent handle state and logging
  }

  return (
    // Add Schema.org markup
    <div className={`${styles.cardTile} ${isSelected ? styles.selectedTile : ''}`} itemScope itemType="https://schema.org/FinancialProduct">
      <meta itemProp="name" content={card.name} />
      <meta itemProp="description" content={`Recommended based on user profile. Score: ${card.score}/100. Est. 1st Year Value: $${card.netFirstYearValue}. Ongoing Value: $${card.ongoingValue}.`} />
      {card.issuer && <div itemProp="brand" itemScope itemType="https://schema.org/Brand"><meta itemProp="name" content={card.issuer} /></div>}
      {card.applyUrl && <link itemProp="url" href={card.applyUrl} />}
      {/* Consider adding more schema: fees (MonetaryAmount), rewards (ItemList) */}

      {/* --- Compare Checkbox --- */}
      <div className={styles.compareCheckbox}>
          <input
              type="checkbox"
              id={`compare-${card.cardId}`}
              checked={isSelected}
              onChange={handleCheckboxChange} // Use specific handler
              aria-label={`Select ${card.name} for comparison`}
          />
          <label htmlFor={`compare-${card.cardId}`}>Compare</label>
      </div>

      {/* --- Card Header --- */}
      <div className={styles.cardTileHeader}>
        {card.imageUrl && (
          <div className={styles.cardTileImage}>
            <Image
              src={card.imageUrl} // Ensure images are in /public or accessible URL
              alt={`${card.name} Card Art`}
              width={120}
              height={75}
              style={{ objectFit: 'contain' }}
              unoptimized={card.imageUrl.startsWith('http')} // Add if using external URLs sometimes
              itemProp="image"
              priority // Load top card images faster
            />
          </div>
        )}
        <div className={styles.cardTileInfo}>
          <h3 itemProp="name">{card.name}</h3>
          {card.issuer && <p className={styles.cardTileIssuer}>{card.issuer}</p>}
          <p className={styles.cardTileScore}>Score: <strong>{card.score}</strong>/100</p>
        </div>
      </div>

      {/* --- Value Display --- */}
      <div className={styles.cardTileValues}>
         <div><span>1st Year Value</span><strong>~${card.netFirstYearValue ?? 'N/A'}</strong></div>
         <div><span>Ongoing Value</span><strong>~${card.ongoingValue ?? 'N/A'}</strong></div>
         <div><span>Annual Fee</span><strong>${card.annualFee ?? 0}</strong></div>
      </div>

       {/* --- Matched Features --- */}
       {card.matchedFeatures && card.matchedFeatures.length > 0 && (
         <div className={styles.cardTileFeatures}>
             <p><strong>Key Matches For You:</strong></p>
             <ul>{card.matchedFeatures.slice(0, 4).map((feature, idx) => (
                <li key={idx}>
                    {/* Add icons here later if desired */}
                    {feature}
                </li>))}
             </ul>
         </div>
       )}

      {/* --- "Explain Why" Accordion --- */}
      <div className={styles.accordion}>
          <button
              className={styles.accordionToggle}
              onClick={handleAccordionToggle}
              aria-expanded={isAccordionOpen}
              aria-controls={`accordion-content-${card.cardId}`} // Link button to content
          >
              Explain Score Details {isAccordionOpen ? '▲' : '▼'}
          </button>
          {isAccordionOpen && (
              <div className={styles.accordionContent} id={`accordion-content-${card.cardId}`}>
                  <h4>Score Factor Contribution (Approx.):</h4>
                  {card.scoreBreakdown ? (
                      <ul>
                          {Object.entries(card.scoreBreakdown)
                           .filter(([key, value]) => typeof value === 'number' && value > 0) // Only show factors > 0
                           .map(([key, value]) => {
                              const formattedKey = key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
                              return ( <li key={key}><strong>{formattedKey}:</strong> {value.toFixed(1)} pts</li> );
                          })}
                      </ul>
                  ) : <p>Detailed breakdown not available.</p>}
                  <p><small>Note: Factors shown before priority weighting. Total score reflects your priorities.</small></p>
              </div>
          )}
      </div>

      {/* --- Action Buttons --- */}
      <div className={styles.cardTileActions}>
        {reviewLinkWithTracking && (
          <a href={reviewLinkWithTracking} target="_blank" rel="noopener noreferrer" className={`${styles.cardTileButton} ${styles.reviewButton}`} onClick={handleReviewClick}>
            Read Review
          </a>
        )}
        {card.applyUrl && (
            <a href={applyLinkWithTracking} target="_blank" rel="noopener noreferrer nofollow" className={`${styles.cardTileButton} ${styles.applyButton}`} onClick={handleApplyClick} itemProp="offers" itemScope itemType="https://schema.org/Offer">
               <span itemProp="description">Apply Now</span>
                <link itemProp="url" href={applyLinkWithTracking}/>
            </a>
        )}
      </div>
    </div>
  );
}