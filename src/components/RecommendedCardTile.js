// File: /components/RecommendedCardTile.js
import React from 'react';
import Image from 'next/image';
import styles from '@/styles/CardFinder.module.css'; // Ensure path is correct

// Optional Icon Helper (Example)
// import { FaPlaneDeparture, FaUtensils, /* ... more icons */ } from 'react-icons/fa';
// const getIconForFeature = (feature) => { /* ... icon logic ... */ }

export default function RecommendedCardTile({ card, badge }) { // Accepts optional badge prop
  if (!card) return null;

  // Create URL-safe subID
  const subId = card.name ? encodeURIComponent(card.name.replace(/[^a-zA-Z0-9]/g, '_')) : 'unknown';
  // Add tracking parameters
  const campaign = badge ? badge.toLowerCase().replace(/[^a-z0-9]/g, '_') : 'general';
  const applyLinkWithTracking = `${card.applyUrl}?utm_source=travelcardinsider&utm_medium=cardfinder&utm_campaign=recommendation_${campaign}&subid1=${subId}`;
  const reviewLinkWithTracking = card.reviewUrl ? `${card.reviewUrl}?utm_source=travelcardinsider&utm_medium=cardfinder_review_link` : null;

  return (
    // Add dynamic class if badge exists
    <div className={`${styles.cardTile} ${badge ? styles.hasBadge : ''}`} itemScope itemType="https://schema.org/FinancialProduct">
      {/* Conditionally render badge */}
      {badge && <div className={`${styles.cardTileBadge} ${badge === 'Best Pick' ? styles.bestPick : ''}`}>{badge}</div>}

      {/* Schema.org Microdata */}
      <meta itemProp="name" content={card.name} />
      <meta itemProp="description" content={`Recommended based on user profile. Score: ${card.score}/100. Est. 1st Year Value: $${card.netFirstYearValue}. Ongoing Value: $${card.ongoingValue}. Annual Fee: $${card.annualFee ?? 0}.`} />
      <div itemProp="brand" itemScope itemType="https://schema.org/Brand">
          <meta itemProp="name" content={card.issuer} />
      </div>
       <link itemProp="url" href={card.applyUrl} />
       <div itemProp="feesAndPricingSpecification" itemScope itemType="https://schema.org/UnitPriceSpecification">
          <meta itemProp="priceCurrency" content="USD" />
          <meta itemProp="price" content={card.annualFee ?? 0} />
          <meta itemProp="unitText" content="Year" />
          <meta itemProp="valueAddedTaxIncluded" content="false" />
          <meta itemProp="description" content="Annual Fee" />
       </div>
       {/* Add more schema: rewardsProgram, interestRate, etc. if available */}

      {/* Card Header */}
      <div className={styles.cardTileHeader}>
        {card.imageUrl ? (
          <div className={styles.cardTileImage}>
            <Image
              src={card.imageUrl} alt={`${card.name} Card Art`} width={120} height={75}
              style={{ objectFit: 'contain' }} itemProp="image"
              priority={badge === 'Best Pick'} // Load best pick image faster
            />
          </div>
        ) : (
            <div className={styles.cardTileImagePlaceholder}>Image</div>
        )}
        <div className={styles.cardTileInfo}>
          <h3 itemProp="name">{card.name}</h3>
          <p className={styles.cardTileIssuer}>{card.issuer}</p>
          <p className={styles.cardTileScore}>Score: <strong>{card.score}</strong>/100</p>
        </div>
      </div>

      {/* Calculated Values */}
      <div className={styles.cardTileValues}>
        <div> <span>1st Year Value</span> <strong>~${card.netFirstYearValue}</strong> </div>
        <div> <span>Ongoing Value</span> <strong>~${card.ongoingValue}</strong> </div>
        <div> <span>Annual Fee</span> <strong>${card.annualFee ?? 0}</strong> </div>
      </div>

       {/* Key Matched Features */}
       {card.matchedFeatures && card.matchedFeatures.length > 0 && (
         <div className={styles.cardTileFeatures}>
             <p><strong>Key Features:</strong></p>
             <ul>
                 {card.matchedFeatures.map((feature, idx) => (
                     <li key={idx}> {/* Add icons here if desired using getIconForFeature(feature) */} {feature} </li>
                 ))}
             </ul>
         </div>
       )}

      {/* Action Buttons */}
      <div className={styles.cardTileActions}>
        {reviewLinkWithTracking && (
          <a href={reviewLinkWithTracking} target="_blank" rel="noopener noreferrer" className={`${styles.cardTileButton} ${styles.reviewButton}`}>
            Read Review
          </a>
        )}
        <a href={applyLinkWithTracking} target="_blank" rel="noopener noreferrer sponsored nofollow" className={`${styles.cardTileButton} ${styles.applyButton}`}
           itemProp="offers" itemScope itemType="https://schema.org/Offer">
           <span itemProp="description">Apply Now</span>
            <link itemProp="url" href={applyLinkWithTracking}/>
        </a>
      </div>
    </div>
  );
}