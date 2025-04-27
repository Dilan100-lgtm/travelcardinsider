// File: /components/RecommendedCardTile.js
import React from 'react';
import Image from 'next/image'; // Use Next.js Image component
import styles from '@/styles/CardFinder.module.css'; // Reuse or create new styles

// --- Helper Function for Icons (Example - Requires installing an icon library like react-icons) ---
// import { FaPlaneDeparture, FaUtensils, FaGasPump, FaCreditCard, FaPercentage, FaCrown, FaBriefcase, FaCheckCircle, FaInfoCircle } from 'react-icons/fa';
// const getIconForFeature = (feature) => {
//     const lowerFeature = feature.toLowerCase();
//     if (lowerFeature.includes('lounge')) return <FaPlaneDeparture title="Lounge Access" />;
//     if (lowerFeature.includes('dining') || lowerFeature.includes('restaurants')) return <FaUtensils title="Dining Perk/Reward" />;
//     if (lowerFeature.includes('gas')) return <FaGasPump title="Gas Perk/Reward" />;
//     if (lowerFeature.includes('fee')) return <FaCreditCard title="Fee Related" />;
//     if (lowerFeature.includes('apr')) return <FaPercentage title="Intro APR" />;
//     if (lowerFeature.includes('elite') || lowerFeature.includes('status') || lowerFeature.includes('nights')) return <FaCrown title="Elite Status Perk" />;
//     if (lowerFeature.includes('bag') || lowerFeature.includes('checked')) return <FaBriefcase title="Checked Bag Perk" />;
//     if (lowerFeature.includes('global entry') || lowerFeature.includes('tsa')) return <FaCheckCircle title="Travel Credit Perk" />;
//     // Add more mappings
//     return <FaInfoCircle />; // Default icon
// }
// ---

export default function RecommendedCardTile({ card, badge }) { // Added badge prop
  if (!card) return null;

  // Basic UTM/SubID addition example - Ensure cardId is URL-safe or use a proper ID
  const subId = card.name ? encodeURIComponent(card.name.replace(/[^a-zA-Z0-9]/g, '_')) : 'unknown';
  const applyLinkWithTracking = `${card.applyUrl}?utm_source=travelcardinsider&utm_medium=cardfinder&utm_campaign=recommendation_${badge ? badge.toLowerCase().replace(' ','_') : 'general'}&subid1=${subId}`;
  const reviewLinkWithTracking = card.reviewUrl ? `${card.reviewUrl}?utm_source=travelcardinsider&utm_medium=cardfinder_review_link` : null;


  return (
    // Add Schema.org markup
    <div className={`${styles.cardTile} ${badge ? styles.hasBadge : ''}`} itemScope itemType="https://schema.org/FinancialProduct">
       {/* Add badge if provided */}
       {badge && <div className={styles.cardTileBadge}>{badge}</div>}

      <meta itemProp="name" content={card.name} />
      <meta itemProp="description" content={`Recommended based on user profile. Score: ${card.score}/100. Est. 1st Year Value: $${card.netFirstYearValue}. Ongoing Value: $${card.ongoingValue}. Annual Fee: $${card.annualFee ?? 0}.`} />
      <div itemProp="brand" itemScope itemType="https://schema.org/Brand">
          <meta itemProp="name" content={card.issuer} />
      </div>
       <link itemProp="url" href={card.applyUrl} />
       {/* Add more schema props as needed: fees, rewards, etc. */}

      <div className={styles.cardTileHeader}>
        {card.imageUrl ? (
          <div className={styles.cardTileImage}>
            <Image
              src={card.imageUrl}
              alt={`${card.name} Card Art`}
              width={120} // Adjust size as needed
              height={75} // Adjust size as needed
              style={{ objectFit: 'contain' }}
              itemProp="image"
              unoptimized={card.imageUrl.includes('.svg')} // Handle SVGs if necessary
              priority={badge === 'Best Pick'} // Prioritize loading image for top pick
            />
          </div>
        ) : (
            <div className={styles.cardTileImagePlaceholder}>No Image</div> // Placeholder if no image
        )}
        <div className={styles.cardTileInfo}>
          <h3 itemProp="name">{card.name}</h3>
          <p className={styles.cardTileIssuer}>{card.issuer}</p>
          <p className={styles.cardTileScore}>Score: <strong>{card.score}</strong>/100</p>
        </div>
      </div>

      <div className={styles.cardTileValues}>
        <div>
          <span>1st Year Value</span>
          <strong>~${card.netFirstYearValue}</strong>
        </div>
        <div>
          <span>Ongoing Value</span>
          <strong>~${card.ongoingValue}</strong>
        </div>
        <div>
          <span>Annual Fee</span>
          <strong>${card.annualFee ?? 0}</strong>
        </div>
      </div>

       {/* Display Key Matched Features / Perks with Icons (Example) */}
       {card.matchedFeatures && card.matchedFeatures.length > 0 && (
         <div className={styles.cardTileFeatures}>
             <p><strong>Key Features:</strong></p>
             <ul>
                 {card.matchedFeatures.slice(0, 4).map((feature, idx) => ( // Limit displayed features
                     <li key={idx}>
                         {/* {getIconForFeature(feature)}  */}
                         {feature}
                     </li>
                 ))}
             </ul>
         </div>
       )}


      <div className={styles.cardTileActions}>
        {reviewLinkWithTracking && (
          <a
            href={reviewLinkWithTracking}
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.cardTileButton} ${styles.reviewButton}`}
          >
            Read Review
          </a>
        )}
        <a
          href={applyLinkWithTracking} // Use link with tracking
          target="_blank"
          // Use 'sponsored nofollow' for affiliate links for modern SEO best practices
          rel="noopener noreferrer sponsored nofollow"
          className={`${styles.cardTileButton} ${styles.applyButton}`}
          itemProp="offers" itemScope itemType="https://schema.org/Offer"
        >
           <span itemProp="description">Apply Now</span>
            <link itemProp="url" href={applyLinkWithTracking}/>
            {/* Optional: Add priceSpecification for annual fee in schema */}
            <div itemProp="priceSpecification" itemScope itemType="https://schema.org/UnitPriceSpecification">
                <meta itemProp="priceCurrency" content="USD" />
                <meta itemProp="price" content={card.annualFee ?? 0} />
                <meta itemProp="unitText" content="Year" />
                <meta itemProp="referenceQuantity" content="1" />
             </div>
        </a>
      </div>
       {/* Basic "Explain Why" (can be expanded into accordion) */}
       {/* <div className={styles.cardTileExplain}>
            <p>Based on your preferences for [mention key pref] and spending of [mention key spending], this card scores well because [mention top reason like high rewards in X category or key perk].</p>
       </div> */}
    </div>
  );
}