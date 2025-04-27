// File: /components/RecommendedCardTile.js
import React from 'react';
import Image from 'next/image';
import styles from '@/styles/CardFinder.module.css'; // Ensure path is correct

// Optional Icon Helper (Example - requires installation: npm install react-icons)
// import { FaPlaneDeparture, FaUtensils, FaGasPump, FaCreditCard, FaPercentage, FaCrown, FaBriefcase, FaCheckCircle, FaInfoCircle, FaShieldAlt } from 'react-icons/fa';
// const getIconForFeature = (feature) => {
//     if (!feature) return null;
//     const lowerFeature = feature.toLowerCase();
//     if (lowerFeature.includes('lounge')) return <FaPlaneDeparture title="Lounge Access" />;
//     if (lowerFeature.includes('dining') || lowerFeature.includes('restaurants')) return <FaUtensils title="Dining Perk/Reward" />;
//     if (lowerFeature.includes('gas')) return <FaGasPump title="Gas Perk/Reward" />;
//     if (lowerFeature.includes('fee')) return <FaCreditCard title="Fee Related" />;
//     if (lowerFeature.includes('apr')) return <FaPercentage title="Intro APR" />;
//     if (lowerFeature.includes('elite') || lowerFeature.includes('status') || lowerFeature.includes('nights')) return <FaCrown title="Elite Status Perk" />;
//     if (lowerFeature.includes('bag') || lowerFeature.includes('checked')) return <FaBriefcase title="Checked Bag Perk" />;
//     if (lowerFeature.includes('global entry') || lowerFeature.includes('tsa')) return <FaCheckCircle title="Travel Credit Perk" />;
//     if (lowerFeature.includes('insurance') || lowerFeature.includes('protection')) return <FaShieldAlt title="Insurance/Protection" />;
//     // Add more specific mappings based on your data
//     return <FaInfoCircle />; // Default icon for unmatched features
// }

export default function RecommendedCardTile({ card, badge }) { // Accepts card data and optional badge text
  if (!card) return null; // Don't render if no card data

  // --- Tracking & Links ---
  // Create a safer subID, replacing non-alphanumeric chars
  const subId = card.name ? encodeURIComponent(card.name.replace(/[^a-zA-Z0-9\s]/g, '').replace(/\s+/g, '_')) : 'unknown_card';
  // Define campaign based on badge or general if no badge
  const campaign = badge ? badge.toLowerCase().replace(/[^a-z0-9]/g, '_') : 'general';
  // Construct tracked Apply URL
  const applyLinkWithTracking = `${card.applyUrl || '#'}?utm_source=travelcardinsider&utm_medium=cardfinder&utm_campaign=recommendation_${campaign}&subid1=${subId}`;
  // Construct tracked Review URL (if available)
  const reviewLinkWithTracking = card.reviewUrl ? `${card.reviewUrl}?utm_source=travelcardinsider&utm_medium=cardfinder_review_link` : null;

  return (
    // --- Schema.org Microdata & Tile Structure ---
    <div className={`${styles.cardTile} ${badge ? styles.hasBadge : ''}`} itemScope itemType="https://schema.org/FinancialProduct">
      {/* Conditionally render badge if provided */}
      {badge && (
          <div className={`${styles.cardTileBadge} ${badge === 'Best Pick' ? styles.bestPick : ''}`}>
              {badge}
          </div>
      )}

      {/* --- Hidden Metadata for SEO/Crawlers --- */}
      <meta itemProp="name" content={card.name} />
      <meta itemProp="description" content={`Travel credit card recommendation based on user profile. Key features include estimated $${card.netFirstYearValue} first year value and $${card.ongoingValue} ongoing value. Score: ${card.score}/100. Annual Fee: $${card.annualFee ?? 0}.`} />
      {/* Brand Information */}
      <div itemProp="brand" itemScope itemType="https://schema.org/Brand">
          <meta itemProp="name" content={card.issuer} />
      </div>
      {/* Main URL (Apply Link) */}
      <link itemProp="url" href={card.applyUrl || '#'} />
      {/* Annual Fee Specification */}
       <div itemProp="feesAndPricingSpecification" itemScope itemType="https://schema.org/UnitPriceSpecification">
          <meta itemProp="priceCurrency" content="USD" />
          <meta itemProp="price" content={card.annualFee ?? 0} />
          <meta itemProp="unitCode" content="ANN" /> {/* Code for Annually */}
          <meta itemProp="valueAddedTaxIncluded" content="false" />
          <meta itemProp="description" content="Annual Fee" />
       </div>
       {/* Add more schema props: category, availableTerritory, rewardsProgram, interestRate, etc. */}
       {/* <meta itemProp="category" content="Travel Credit Card" /> */}

      {/* --- Visible Card Content --- */}
      {/* Card Header: Image + Basic Info */}
      <div className={styles.cardTileHeader}>
        {card.imageUrl ? (
          <div className={styles.cardTileImage}>
            <Image
              src={card.imageUrl}
              alt={`${card.name} Card Art`}
              width={120} height={75}
              style={{ objectFit: 'contain' }} // Ensures image scales nicely
              itemProp="image"
              loading="lazy" // Lazy load images below the fold
              priority={badge === 'Best Pick'} // Eager load the "Best Pick" image
              unoptimized={card.imageUrl.includes('.svg')} // Add if you use SVGs directly
            />
          </div>
        ) : (
            // Placeholder if image URL is missing
            <div className={styles.cardTileImagePlaceholder}>Image Unavailable</div>
        )}
        <div className={styles.cardTileInfo}>
          <h3 itemProp="name">{card.name}</h3>
          <p className={styles.cardTileIssuer}>{card.issuer}</p>
          <p className={styles.cardTileScore}>Score: <strong>{card.score}</strong>/100</p>
        </div>
      </div>

      {/* Calculated Values Grid */}
      <div className={styles.cardTileValues}>
        <div> <span>1st Year Value</span> <strong>~${card.netFirstYearValue}</strong> </div>
        <div> <span>Ongoing Value</span> <strong>~${card.ongoingValue}</strong> </div>
        <div> <span>Annual Fee</span> <strong>${card.annualFee ?? 0}</strong> </div>
      </div>

       {/* Key Matched Features List */}
       {card.matchedFeatures && card.matchedFeatures.length > 0 && (
         <div className={styles.cardTileFeatures}>
             <p><strong>Key Features:</strong></p>
             <ul>
                 {/* Map through matched features from scoring */}
                 {card.matchedFeatures.map((feature, idx) => (
                     <li key={idx}>
                         {/* Optional: Add icon based on feature text */}
                         {/* {getIconForFeature(feature)} */}
                         {feature}
                     </li>
                 ))}
             </ul>
         </div>
       )}

      {/* Action Buttons (Review & Apply) */}
      <div className={styles.cardTileActions}>
        {/* Review Button (conditional) */}
        {reviewLinkWithTracking && (
          <a href={reviewLinkWithTracking} target="_blank" rel="noopener noreferrer" className={`${styles.cardTileButton} ${styles.reviewButton}`}>
            Read Review
          </a>
        )}
        {/* Apply Button */}
        <a
          href={applyLinkWithTracking}
          target="_blank"
          // Use 'sponsored nofollow' for affiliate links per Google guidelines
          rel="noopener noreferrer sponsored nofollow"
          className={`${styles.cardTileButton} ${styles.applyButton}`}
          // Schema.org Offer markup for the apply action
          itemProp="offers" itemScope itemType="https://schema.org/Offer"
        >
           <span itemProp="description">Apply Now</span>
           <link itemProp="url" href={applyLinkWithTracking}/>
           {/* Optional: Availability (e.g., OnlineOnly) */}
           {/* <link itemProp="availability" href="https://schema.org/OnlineOnly"/> */}
        </a>
      </div>
    </div>
  );
}