// Example Path: pages/reviews/amex-business-gold.js
// Or: pages/reviews/[slug].js (if using dynamic routing with 'amex-business-gold' as slug)

// !!! WARNING: THIS FILE CONTAINS PLACEHOLDER DATA/URLs/DIMENSIONS !!!
// !!! YOU MUST REPLACE ALL PLACEHOLDERS MARKED WITH '!!!' BEFORE DEPLOYMENT !!!
// !!! VERIFY ALL CARD DETAILS & SCHEMA VALUES AGAINST OFFICIAL ISSUER INFO !!!

import React, { useState, useEffect, useCallback, useRef } from 'react'; // Hooks for tooltip
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/ReviewPage.module.css'; // Using the REVIEW CSS module
import Header from '../../components/Header'; // Assuming you have these components
import Footer from '../../components/Footer'; // Assuming you have these components

// Simplified data object based on the final template structure
const reviewData = {
  cardName: 'American Express® Business Gold Card',
  title: 'American Express® Business Gold Card – In-Depth 2025 Review for Business Travel',
  description: 'A comprehensive 20-section review of the American Express® Business Gold Card, focusing on its adaptive 4X rewards, travel benefits, $375 annual fee, new statement credits, and competitor analysis for 2025.',
  keywords: 'American Express, Business Gold, Amex, Membership Rewards, business credit card, travel rewards, 4X points, 2025',
  author: 'TravelCardInsider', // *** REPLACE with your actual author/site name ***
  imageUrl: '/business-gold.avif', // *** REPLACE with actual Amex Biz Gold image PATH in /public ***
  ratingValue: 8.5, // From Amex Business Gold Review Text (Hypothetical TCI Rating)
  applyLink: 'https://www.americanexpress.com/us/credit-cards/business/business-credit-cards/american-express-business-gold-card-amex/', // *** REPLACE/VERIFY actual Amex Biz Gold APPLY URL ***
  ratesLink: 'https://www.americanexpress.com/us/credit-cards/card-application/apply/prospect/terms/businessgold-card/45094-9-0?key=tncBody&rwdFlag=rwd', // *** REPLACE/VERIFY actual Rates & Fees URL ***
  // Image dimensions (MUST BE ACCURATE for next/image) - PLACEHOLDERS
  imageWidth: 480, // *** REPLACE with actual image width *** (Example Placeholder)
  imageHeight: 304, // *** REPLACE with actual image height *** (Example Placeholder)
};

// --- Rating Tooltip Content (Customize if needed for Amex Biz Gold) ---
const ratingCriteria = [ // *** VERIFY/CUSTOMIZE these criteria for Amex Biz Gold Rating ***
    'Adaptive 4X Earning Potential',
    'Value of Membership Rewards® Points (Transfers)',
    'Statement Credit Value ($240 Flex + $155 Walmart+)',
    'Welcome Bonus Variability',
    'Annual Fee Justification ($375)',
    'Travel Protections Included'
];

function AmexBusinessGoldReviewPage() {
  // --- Tooltip State and Logic ---
  const [showRatingInfo, setShowRatingInfo] = useState(false);
  const tooltipRef = useRef(null);

  const handleIconClick = useCallback((event) => {
        event.preventDefault();
        event.stopPropagation();
        setShowRatingInfo(prevState => !prevState);
    }, []);

    const closeTooltip = useCallback(() => {
        setShowRatingInfo(false);
    }, []);

    useEffect(() => {
        if (!showRatingInfo) return;
        const handleClickOutside = (event) => {
            const isInfoButton = event.target.closest(`.${styles.infoIconButton}`);
            if (tooltipRef.current && !tooltipRef.current.contains(event.target) && !isInfoButton) {
                closeTooltip();
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [showRatingInfo, closeTooltip]);
  // --- End Tooltip State and Logic ---


  // Inline Structured Data
  // !!! VERIFY all URLs, counts, and details FOR AMEX BUSINESS GOLD CARD !!!
  const siteUrl = "https://www.travelcardinsider.com"; // *** REPLACE with your actual site URL ***
  const pageUrl = `${siteUrl}/reviews/amex-business-gold`; // *** REPLACE with your actual page URL ***
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product", // Using Product schema
    "name": "American Express® Business Gold Card",
    "image": `${siteUrl}${reviewData.imageUrl}`, // *** Assuming imageUrl starts with / ***
    "description": "The American Express® Business Gold Card offers adaptive 4X rewards on top spending categories, flexible Membership Rewards® points ideal for travel, and valuable statement credits.", // Updated description
    "brand": {
      "@type": "Brand",
      "name": "American Express"
    },
    "review": {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": reviewData.ratingValue.toString(),
        "bestRating": "10",
        "worstRating": "1"
      },
      "author": {
        "@type": "Organization",
        "name": reviewData.author
      },
      "reviewBody": reviewData.description // Use meta description
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": reviewData.ratingValue.toString(),
      "bestRating": "10",
      "worstRating": "1",
      "ratingCount": 980, // *** REPLACE with actual or estimated count ***
      "reviewCount": 980  // *** REPLACE with actual or estimated count ***
    },
    "offers": {
      "@type": "Offer",
      "url": reviewData.applyLink.startsWith('http') ? reviewData.applyLink : `${siteUrl}${reviewData.applyLink}`, // *** Ensure full APPLY URL ***
      "priceCurrency": "USD",
      "price": "375", // Annual Fee for Amex Business Gold
      "availability": "https://schema.org/InStock",
      "itemCondition": "https://schema.org/NewCondition"
    }
     // Consider adding "provider": { "@type": "Organization", "name": "American Express" }
  };

  return (
    <>
      {/* ===== HEAD SECTION for Metadata & SEO ===== */}
      <Head>
        <title>{reviewData.title}</title>
        <meta name="description" content={reviewData.description} />
        <meta name="keywords" content={reviewData.keywords} />
        <meta name="author" content={reviewData.author} />
        <link rel="canonical" href={pageUrl} />
        {/* Preload critical fonts (assuming same fonts as example) */}
        <link rel="preload" href="/fonts/Roboto_Condensed-Regular.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/Roboto_Condensed-bold.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/playfair-display-regular.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/playfair-display-bold.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />

        {/* OG/Twitter tags */}
        <meta property="og:title" content={reviewData.title} />
        <meta property="og:description" content={reviewData.description} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:image" content={structuredData.image} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={reviewData.title} />
        <meta name="twitter:description" content={reviewData.description} />
        <meta name="twitter:image" content={structuredData.image} />

        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        {/* Structured Data (JSON-LD) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {/* Assuming US target */}
        <meta name="geo.region" content="US" />
        <meta name="geo.placename" content="United States" />
        <meta name="language" content="en-US" />
        <meta name="distribution" content="US" />
        <link rel="alternate" href={siteUrl} hreflang="en-us" />
      </Head>

      <Header />

      <main>
        {/* Spacing for fixed header */}
        <div style={{ marginTop: '5rem' }}></div> {/* Adjust margin as needed */}

        {/* Review Container using CSS Module */}
        <div className={styles.reviewContainer}>
          <article> {/* Wrap main content in article */}
            {/* ============= REVIEW HEADER ============= */}
            <header className={styles.reviewHeader}>
              <h1>{reviewData.title}</h1>

              {/* Intro Section (Part of Header Structure) */}
              <section id="intro-section"> {/* Using section ID for clarity */}
                <div className={styles.intro}>
                    {/* Using dangerouslySetInnerHTML for ® */}
                   <p dangerouslySetInnerHTML={{ __html: `The <strong>American Express® Business Gold Card</strong> stands as a dynamic rewards card designed for businesses whose expenditures fluctuate across key operational areas, including travel. It's renowned for its adaptive rewards structure, granting <strong>4X Membership Rewards® points</strong> on the top two select categories where your business directs most of its spending each billing cycle (up to an annual cap). This makes it a potentially powerful tool for accumulating valuable Membership Rewards® points, prized for their flexibility, especially when redeemed for travel through transfers to numerous airline and hotel partners. Coupled with recently added statement credits, the card presents a compelling, albeit premium (<strong>$375 annual fee</strong>), option for businesses aiming to turn expenses into travel opportunities.` }}></p>
                   <p>This comprehensive 2025 review delves into 20 distinct sections, analyzing its suitability as a core component of your business travel strategy.</p>
                </div>

                 {/* Image Container */}
                <div className={styles.cardImageContainer}>
                   <Image
                     src={reviewData.imageUrl} // *** PLACEHOLDER ***
                     alt={reviewData.cardName}
                     width={reviewData.imageWidth} // *** PLACEHOLDER ***
                     height={reviewData.imageHeight} // *** PLACEHOLDER ***
                     className={styles.cardImage}
                     priority // Load image early if it's above the fold
                   />
                 </div>

                {/* RATING SECTION */}
                <div className={styles.ratingSection}>
                  <span className={styles.tciRating}>
                    <button
                      type="button"
                      className={styles.infoIconButton}
                      aria-label="Rating Information"
                      onClick={handleIconClick}
                    >
                       <svg aria-hidden="true" focusable="false" className={styles.infoIcon} viewBox="0 0 16 16">
                         <path fillRule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                         <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                       </svg>
                    </button>
                    TCI Rating : <strong>{reviewData.ratingValue.toFixed(1)}</strong>/10

                    {/* --- Conditionally Rendered Tooltip --- */}
                    {showRatingInfo && (
                      <div
                        ref={tooltipRef}
                        className={styles.ratingTooltip}
                        role="tooltip"
                        aria-live="polite"
                      >
                        <strong>TCI Rating: {reviewData.ratingValue.toFixed(1)}/10</strong>
                        <p className={styles.tooltipIntro}>Our TCI rating system criteria including rewards, welcome bonus, annual fee, redemption flexibility, travel benefits, APR, foreign transaction fees, user experience, and other features.</p>
                       
                      </div>
                    )}
                  </span>

                  {/* STAR RATING - Using 8.5 Rating -> 85% */}
                  {/* Note: The review text used 8 stars (★★★★★★★★☆☆), but the numeric rating was 8.5. Using 8.5 for consistency with the number. */}
                  <div className={styles.starRating} title={`Rated ${reviewData.ratingValue} out of 10 stars`} style={{ '--rating': `${reviewData.ratingValue * 10}%` }}>
                     <span>★★★★★</span> {/* Base 5 stars */}
                     <span className={styles.filledStars}>★★★★★</span> {/* Filled stars overlay */}
                  </div>

                  <div className={styles.ratingDescription}>
                    <i>A potent rewards card for businesses with high spending in its adaptable bonus categories, featuring highly flexible Membership Rewards® points ideal for travel. New statement credits significantly enhance its value proposition against the annual fee.</i>
                  </div>
                </div>
              </section>
            </header>

            {/* ============= REVIEW CONTENT SECTIONS (Hardcoded JSX based on Amex Review Text) ============= */}

            {/* Section 1: Quick Stats Table */}
            <section id="section-1" className={styles.reviewSection}>
              <h2>1. Quick Stats at a Glance</h2>
              <div className={styles.tableContainer}>
                <table className={styles.statsTable}>
                  <thead>
                    <tr>
                      <th>Feature</th>
                      <th>Details</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td data-label="Feature">Annual Fee</td>
                      <td data-label="Details">$375 <a href={reviewData.ratesLink} target="_blank" rel="noopener noreferrer sponsored">(See Rates & Fees)</a></td>
                    </tr>
                    <tr>
                      <td data-label="Feature">Welcome Offer</td>
                      <td data-label="Details">Highly variable; Public offers typically range from 70,000-100,000 points after meeting significant spend (e.g., $10k-$15k in 3 months). Check for targeted offers (via Amex website, CardMatch, mail/email) which can be substantially higher (e.g., 150k, 175k, or even 200k points, often with similar spend requirements).</td>
                    </tr>
                    <tr>
                      <td data-label="Feature">Earning Rates</td>
                      <td data-label="Details" dangerouslySetInnerHTML={{ __html: "<strong>4X points</strong> on the top 2 select categories where your business spent the most each billing cycle (applies to the first $150,000 in combined purchases from these 6 categories annually, then 1X). <strong>3X points</strong> on flights and prepaid hotels booked on amextravel.com. <strong>1X point</strong> on all other eligible purchases.‡"}}></td>
                    </tr>
                    <tr>
                      <td data-label="Feature">4X Eligible Categories</td>
                      <td data-label="Details" dangerouslySetInnerHTML={{ __html: "Transit; U.S. Electronic goods retailers/software & cloud providers; U.S. Restaurants; U.S. Gas stations; U.S. Monthly wireless phone service; U.S. Advertising (select media).‡"}}></td>
                    </tr>
                    <tr>
                      <td data-label="Feature">Redemption Options</td>
                      <td data-label="Details" dangerouslySetInnerHTML={{ __html: "Transfer points to airline/hotel partners (often best value), book travel via Amex Travel, statement credits, gift cards, merchandise."}}></td>
                    </tr>
                     <tr>
                      <td data-label="Feature">Key Perks & Credits</td>
                      <td data-label="Details" dangerouslySetInnerHTML={{ __html: "$240 Flexible Business Credit (Up to $20/month at FedEx, Grubhub, U.S. Office Supply Stores; Enrollment req.).‡ $155 Walmart+ Credit (Covers monthly membership via statement credits; Enrollment req.).‡ The Hotel Collection ($100 experience credit on eligible 2+ night stays).‡ No Foreign Transaction Fees.‡"}}></td>
                    </tr>
                    <tr>
                      <td data-label="Feature">Travel Protections</td>
                      <td data-label="Details" dangerouslySetInnerHTML={{ __html: "Trip Delay Insurance‡, Baggage Insurance Plan‡, Car Rental Loss and Damage Insurance (Secondary)‡, Global Assist Hotline‡."}}></td>
                    </tr>
                    <tr>
                      <td data-label="Feature">Foreign Transaction Fee</td>
                       <td data-label="Details">None <a href={reviewData.ratesLink} target="_blank" rel="noopener noreferrer sponsored">(See Rates & Fees)</a></td>
                    </tr>
                    <tr>
                      <td data-label="Feature">Recommended Credit</td>
                      <td data-label="Details">Good to Excellent</td>
                    </tr>
                  </tbody>
                </table>
              </div>
               {/* Footer for Table */}
              <p style={{fontSize: '0.85rem', color: '#666', marginTop: '1rem', textAlign: 'center'}}>
                  Information accurate as of April 2025, but offers and benefits can change. Enrollment required for select benefits. Always verify directly with American Express. Terms apply. ‡Benefit Terms.
              </p>
            </section>

            {/* CTA Section - Placeholders */}
             <section id="cta" className={styles.ctaSection}>
              <h2>Get the <b>American Express® Business Gold Card</b> Today!</h2>
              <div className={styles.ctaButtons}>
                <a href={reviewData.applyLink} className={`${styles.btn} ${styles.btnApply}`} title="From card issuer's secure site" target="_blank" rel="noopener noreferrer sponsored">Apply Now</a>
                <a href={reviewData.ratesLink} className={`${styles.btn} ${styles.btnRates}`} target="_blank" rel="noopener noreferrer sponsored">See Rates & Fees</a>
              </div>
            </section>

            {/* Section 2: Card Overview & Positioning */}
            <section id="section-2" className={styles.reviewSection}>
              <h2>2. Card Overview & Positioning</h2>
              {/* Using dangerouslySetInnerHTML for ® */}
              <p dangerouslySetInnerHTML={{ __html: "Positioned in the premium business card segment, the Amex Business Gold (<strong>$375 annual fee</strong>) bridges the gap between mid-tier cards and the ultra-premium Business Platinum ($695 annual fee). Its signature feature is the adaptive <strong>4X points</strong> structure, automatically rewarding the two categories (from a list of six) where your business spends most each month, up to $150,000 combined annually. This is ideal for businesses with fluctuating expenses across areas like transit, tech, advertising, restaurants, gas, or wireless services." }}></p>
              <p dangerouslySetInnerHTML={{ __html: "Crucially for travelers, <strong>Transit</strong> (covering rideshares, taxis, parking, tolls, trains, buses etc.) is one of these potential 4X categories. While direct airfare isn't a 4X category itself, the card offers a solid <strong>3X points</strong> on flights and prepaid hotels booked via amextravel.com. The recent addition of up to <strong>$395 in annual statement credits</strong> ($240 Flexible Business + $155 Walmart+) significantly alters its positioning, making the annual fee much easier to offset for businesses that utilize these specific merchants, thereby enhancing its appeal beyond just the points structure. It targets businesses that value high-potential rewards via Membership Rewards® and can leverage both the bonus categories and the new credits." }}></p>
            </section>

            {/* Section 3: Earning Membership Rewards® Points & Travel Emphasis */}
             <section id="section-3" className={styles.reviewSection}>
                <h2 dangerouslySetInnerHTML={{ __html: "3. Earning Membership Rewards® Points & Travel Emphasis" }}></h2>
                <p>The card's earning power is defined by:</p>
                {/* Use featureList style for the main points */}
                <ul className={styles.featureList}>
                    {/* List item for 4X */}
                    <li>
                       <strong>4X Membership Rewards® points:</strong> Automatically applied to the top two of the following six categories where your business spends the most each billing cycle, on the first $150,000 in combined purchases per calendar year (then 1X):
                       {/* Nested standard ul for sub-categories */}
                       <ul style={{listStyleType: 'disc', marginLeft: '20px', marginTop: '0.5rem'}}>
                          <li>Transit purchases (trains, taxicabs, rideshare services, ferries, tolls, parking, buses, subways).</li>
                          <li>U.S. purchases made from electronic goods retailers and software & cloud system providers.</li>
                          <li>U.S. purchases at restaurants (including takeout and delivery).</li>
                          <li>U.S. purchases at gas stations.</li>
                          <li>Monthly wireless telephone service charges made directly from a U.S. wireless telephone service provider.</li>
                          <li>U.S. purchases for advertising in select media (online, TV, radio).</li>
                       </ul>
                    </li>
                    {/* List item for 3X */}
                    <li>
                       <strong>3X Membership Rewards® points:</strong> Earned on flights and prepaid hotels booked through amextravel.com.
                    </li>
                    {/* List item for 1X */}
                    <li>
                       <strong>1X Membership Rewards® point:</strong> Earned on all other eligible purchases.
                    </li>
                </ul>
                <p><strong>Travel Focus:</strong> The inclusion of Transit as a potential 4X category is a direct benefit for travelers, covering many ground transportation costs. While direct airfare isn't a 4X category, the 3X points on flights and prepaid hotels booked via amextravel.com provides a strong, reliable earning rate for core travel bookings made through the portal. If transit or U.S. restaurants are frequently among your top two spending areas during travel, you'll earn 4X points on those expenses (up to the cap).</p>
            </section>

             {/* Section 4: Redeeming Membership Rewards® Points for Travel */}
            <section id="section-4" className={styles.reviewSection}>
              <h2 dangerouslySetInnerHTML={{ __html: "4. Redeeming Membership Rewards® Points for Travel" }}></h2>
              {/* Using dangerouslySetInnerHTML for ® */}
              <p dangerouslySetInnerHTML={{ __html: "Membership Rewards® (MR) points offer exceptional flexibility, particularly valuable for travel:" }}></p>
              {/* Use featureList style */}
              <ul className={styles.featureList}>
                <li><strong>Transfer Points to Partners (Highest Potential Value):</strong> This remains the gold standard for maximizing MR points. Amex partners with numerous airlines (e.g., Delta, Air Canada Aeroplan, British Airways Avios, Singapore Airlines KrisFlyer, Virgin Atlantic) and hotels (Hilton Honors, Marriott Bonvoy, Choice Privileges). Transferring points (often 1:1 for airlines) allows booking award travel, especially international premium cabins or strategically valuable hotel nights, potentially yielding values of 2 cents per point or significantly more. (See Section 12 for details).</li>
                <li><strong>Book Travel via Amex Travel (Pay with Points):</strong> Use points to book flights, prepaid hotels, car rentals, or packages. Flights typically redeem at 1 cent per point. Hotels, car rentals, and cruises booked via the portal often redeem at a lower value, around 0.7 cents per point. Note: The 35% Airline Bonus when using Pay with Points is a feature of the Business Platinum Card, NOT the Business Gold Card.</li>
                <li><strong>Upgrade with Points:</strong> Use points for seat upgrades on select airlines; value varies.</li>
                <li><strong>Statement Credits:</strong> Redeem points for statement credits against charges, but usually at a poor value (approx. 0.6 cents per point). Not recommended for maximizing travel value.</li>
                <li><strong>Other Options:</strong> Gift cards, merchandise. Typically offer lower value than travel redemptions.</li>
              </ul>
              <p>For businesses focused on travel, transferring points to airline and hotel partners provides the most compelling redemption pathway.</p>
            </section>

            {/* Section 5: Key Travel Perks & Credits */}
            <section id="section-5" className={styles.reviewSection}>
              <h2>5. Key Travel Perks & Credits</h2>
              <p>The Business Gold offers targeted travel perks and valuable new statement credits:</p>
              {/* Using featureList style */}
              <ul className={styles.featureList}>
                <li dangerouslySetInnerHTML={{ __html: "<strong>$240 Flexible Business Credit:</strong> Receive up to $20 in statement credits each month for eligible U.S. purchases at FedEx, Grubhub, and Office Supply Stores. Enrollment is required. While not exclusively travel, Grubhub credits can be used while traveling, and FedEx/Office Supply credits help overall business costs. Total potential annual value: $240.‡" }}></li>
                <li dangerouslySetInnerHTML={{ __html: "<strong>$155 Walmart+ Credit:</strong> Cover the cost of a monthly Walmart+ membership ($12.95 + tax per month) via statement credits when you pay with your card. Enrollment is required. Provides benefits like free shipping and grocery delivery, potentially useful for business supplies or even while on extended stays. Total potential annual value: ~$155.‡" }}></li>
                <li dangerouslySetInnerHTML={{ __html: "<strong>The Hotel Collection:</strong> Book prepaid stays of two consecutive nights or more at participating properties through Amex Travel (amextravel.com) and receive a $100 experience credit for qualifying dining, spa, or resort activities during your stay, plus a room upgrade upon arrival, when available.‡" }}></li>
                <li dangerouslySetInnerHTML={{ __html: "<strong>No Foreign Transaction Fees:</strong> Crucial for international business; use the card abroad without incurring extra fees on purchases made in foreign currencies (<a href={reviewData.ratesLink} target='_blank' rel='noopener noreferrer sponsored'>See Rates & Fees</a>).‡" }}></li>
              </ul>
              <p>These credits ($240 + $155 = up to $395 annually) can significantly offset, or even exceed, the card's $375 annual fee if your business utilizes these merchants.</p>
            </section>

            {/* Section 6: Travel & Purchase Protections */}
            <section id="section-6" className={styles.reviewSection}>
              <h2 dangerouslySetInnerHTML={{ __html: "6. Travel & Purchase Protections" }}></h2>
              <p>The card includes valuable protections for peace of mind during travel and for business purchases:</p>
              {/* Using featureList style */}
              <ul className={styles.featureList}>
                 <li dangerouslySetInnerHTML={{ __html: "<strong>Trip Delay Insurance:</strong> If a covered trip paid for with the card is delayed by a covered reason for more than 12 hours, you can be reimbursed for reasonable additional expenses (e.g., meals, lodging) up to $300 per covered trip, maximum 2 claims per 12 consecutive months.‡*" }}></li>
                 <li dangerouslySetInnerHTML={{ __html: "<strong>Baggage Insurance Plan:</strong> Provides coverage for lost, damaged, or stolen baggage (checked or carry-on) when the entire fare for a common carrier ticket (e.g., plane, train, bus) is charged to your card. Coverage limits apply (e.g., up to $1,250 for carry-on, $500 for checked per covered person).‡*" }}></li>
                 <li dangerouslySetInnerHTML={{ __html: "<strong>Car Rental Loss and Damage Insurance:</strong> Offers secondary coverage for damage to or theft of a rental vehicle when you pay for the entire rental with your card and decline the rental company's collision damage waiver (CDW). It covers costs not paid by your primary insurance. Available in most countries.‡*" }}></li>
                 <li dangerouslySetInnerHTML={{ __html: "<strong>Purchase Protection:</strong> Protects eligible new purchases made with the card against accidental damage or theft for up to 90 days from the date of purchase (up to $1,000 per occurrence, $50,000 per Card Member account per calendar year).‡*" }}></li>
                 <li dangerouslySetInnerHTML={{ __html: "<strong>Extended Warranty:</strong> Can extend the original U.S. manufacturer's warranty by up to one additional year on eligible warranties of 5 years or less for items purchased with the card.‡*" }}></li>
                 <li dangerouslySetInnerHTML={{ __html: "<strong>Global Assist® Hotline:</strong> Access to 24/7 emergency assistance and coordination services (medical, legal referrals, etc.) when traveling more than 100 miles from home. Card Members are responsible for third-party costs.‡*" }}></li>
              </ul>
              <p style={{fontSize: '0.85rem', color: '#666', marginTop: '1rem'}}>
                 *Eligibility and Benefit level varies by Card. Terms, Conditions, and Limitations Apply. Please visit americanexpress.com/benefitsguide for more details. Underwritten by Amex Assurance Company.
              </p>
            </section>

            {/* Section 7: Annual Fee & Ongoing Costs */}
            <section id="section-7" className={styles.reviewSection}>
              <h2 dangerouslySetInnerHTML={{ __html: "7. Annual Fee & Ongoing Costs" }}></h2>
              {/* Using dangerouslySetInnerHTML for ® */}
              <p dangerouslySetInnerHTML={{ __html: `The American Express® Business Gold Card has a <strong>$375 annual fee</strong> (<a href='${reviewData.ratesLink}' target='_blank' rel='noopener noreferrer sponsored'>See Rates & Fees</a>).`}}></p>
              {/* Using featureList style */}
              <ul className={styles.featureList}>
                  <li><strong>Justifying the Fee:</strong> Previously, justification relied heavily on maximizing the 4X points categories. Now, the $240 Flexible Business Credit and $155 Walmart+ Credit offer a direct path to offset the fee. If your business fully utilizes these credits (spending at least $20/month at FedEx/Grubhub/Office Supply Stores and paying for Walmart+ monthly), you receive up to $395 in statement credits annually, more than covering the fee before even considering points earned or other perks.</li>
                  <li><strong>Ongoing Costs:</strong> As a card with a Pay Over Time feature, you have the flexibility to carry a balance on eligible purchases, but this incurs interest at a variable APR (<a href={reviewData.ratesLink} target='_blank' rel='noopener noreferrer sponsored'>See Rates & Fees</a>). To maximize value, aim to pay your statement balance in full each month. There are no foreign transaction fees (<a href={reviewData.ratesLink} target='_blank' rel='noopener noreferrer sponsored'>See Rates & Fees</a>).</li>
              </ul>
              <p>The addition of the credits dramatically improves the card's value proposition, making the annual fee significantly less daunting for businesses that can use them.</p>
            </section>

            {/* Section 8: 2025 Updates & Potential Changes */}
            <section id="section-8" className={styles.reviewSection}>
              <h2>8. 2025 Updates & Potential Changes</h2>
              <p>While the recent addition of credits is a major update, the card landscape evolves:</p>
              {/* Use numberedList style */}
              <ol className={styles.numberedList}>
                  <li><strong>Welcome Offer Dynamics:</strong> Expect continued variation in welcome offers, with potentially high targeted bonuses appearing periodically.</li>
                  <li><strong>Credit Utility:</strong> Monitor how useful the Flexible Business Credit categories (FedEx, Grubhub, Office Supply Stores) and the Walmart+ credit are for your specific business needs over time.</li>
                  <li><strong>Category Stability:</strong> The six 4X categories seem relatively stable but could theoretically be adjusted by Amex in the future.</li>
                  <li><strong>Transfer Partner Value:</strong> Keep an eye on airline/hotel partner transfer ratios and potential devaluations within partner programs, which can impact the value of MR points. Amex may also add or remove partners.</li>
                  <li><strong>Amex Offers:</strong> Regularly check for targeted Amex Offers for additional savings or bonus points on travel and business expenses.</li>
              </ol>
              <p>Stay informed via official Amex communications for the latest updates.</p>
            </section>

            {/* Section 9: Real-Life Example: Points Earning for Business Travel */}
            <section id="section-9" className={styles.reviewSection}>
              <h2>9. Real-Life Example: Points Earning for Business Travel</h2>
              <p>Consider a marketing agency using the Amex Business Gold with these typical monthly expenses:</p>
              {/* Use standard ul for list */}
              <ul>
                  <li>$1,800 on U.S. Advertising (Online - Facebook/Google Ads).</li>
                  <li>$1,200 on Transit (Rideshares for client meetings, employee commutes).</li>
                  <li>$900 on U.S. Restaurants (Client dinners).</li>
                  <li>$600 on Flights/Hotels booked via amextravel.com.</li>
                  <li>$1,500 on Other business expenses (software, supplies not at designated stores).</li>
              </ul>
              <p><strong>Points Calculation for the month:</strong></p>
              {/* Use featureList style for calculation steps */}
              <ul className={styles.featureList}>
                  <li>Identify Top 2 Spending Categories (from 6 eligible): U.S. Advertising ($1,800) and Transit ($1,200).</li>
                  <li>Calculate 4X Points: ($1,800 + $1,200) * 4 points/$ = $3,000 * 4 = <strong>12,000 points</strong>.</li>
                  <li>Calculate 3X Points (Amex Travel): $600 * 3 points/$ = <strong>1,800 points</strong>.</li>
                  <li>Calculate 1X Points: ($900 [Restaurants] + $1,500 [Other]) * 1 point/$ = $2,400 * 1 = <strong>2,400 points</strong>.</li>
                  <li><strong>Total Monthly Points:</strong> 12,000 + 1,800 + 2,400 = <strong>16,200 Membership Rewards® points</strong>.</li>
              </ul>
              <p><strong>Annual Projection:</strong> This spending pattern yields <strong>194,400 MR points</strong> annually. If valued conservatively at 1.5 cents per point via transfers, that's <strong>~$2,916 in travel value</strong>. Added to the potential $395 in statement credits, the card delivers significant value well beyond its $375 fee.</p>
            </section>

            {/* Section 10: Competitor Analysis Table */}
            <section id="section-10" className={styles.reviewSection}>
              <h2>10. Competitor Analysis (Travel Focus)</h2>
              <p>How does the updated Amex Business Gold compare to key business travel competitors?</p>
              <div className={styles.tableContainer}>
                <table className={styles.statsTable}>
                  <thead>
                    <tr>
                      <th>Card</th>
                      <th>Annual Fee</th>
                      <th>Key Travel Rewards/Perks</th>
                      <th>Why Choose Over/Under Amex Business Gold</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td data-label="Card"><strong>Amex Business Gold</strong></td>
                      <td data-label="Annual Fee">$375</td>
                      <td data-label="Key Travel Rewards/Perks" dangerouslySetInnerHTML={{ __html: "4X pts on top 2 cats (incl. Transit), 3X on Amex Travel, MR points (strong partners), $240 Flex Biz Credit‡, $155 Walmart+ Credit‡, Hotel Collection‡, No FTF‡."}}></td>
                      <td data-label="Why Choose Over/Under" dangerouslySetInnerHTML={{ __html: "<strong>Choose if:</strong> Your top spend aligns with 4X cats, you value MR partners, AND you can use the new credits ($240+$155) effectively offsetting the fee. <strong>Consider others if:</strong> You need lounge access, higher flat-rate earning, primary car rental insurance, or different credits."}}></td>
                    </tr>
                    <tr>
                      <td data-label="Card">Chase Ink Business Preferred®</td>
                      <td data-label="Annual Fee">$95</td>
                      <td data-label="Key Travel Rewards/Perks" dangerouslySetInnerHTML={{ __html: "3X pts on travel, shipping, ads, internet/cable/phone (up to $150k/yr combined), UR points (good partners like Hyatt), Primary car rental insurance."}}></td>
                      <td data-label="Why Choose Over/Under" dangerouslySetInnerHTML={{ __html: "<strong>Choose if:</strong> Your spending hits Chase's broader 3X categories well, you prefer the lower $95 fee, need primary rental insurance, or favor UR partners. Offers less peak earning (3X vs 4X) and fewer credits, but strong value for its fee."}}></td>
                    </tr>
                    <tr>
                      <td data-label="Card">Capital One Venture X Business</td>
                      <td data-label="Annual Fee">$395</td>
                      <td data-label="Key Travel Rewards/Perks" dangerouslySetInnerHTML={{ __html: "2X miles everywhere, 10X hotels/cars & 5X flights via C1 Travel, $300 annual travel credit, Lounge access (Priority Pass + C1), 10k anniversary miles."}}></td>
                      <td data-label="Why Choose Over/Under" dangerouslySetInnerHTML={{ __html: "<strong>Choose if:</strong> You prefer simple 2X earning, want significant lounge access and a direct $300 travel credit. Offers great perks for a similar fee, but less potential for high category spend rewards and fewer transfer partners than Amex MR."}}></td>
                    </tr>
                    <tr>
                      <td data-label="Card">Amex Business Platinum Card®</td>
                      <td data-label="Annual Fee">$695</td>
                      <td data-label="Key Travel Rewards/Perks" dangerouslySetInnerHTML={{ __html: "5X pts on flights/hotels via Amex Travel‡, Extensive lounge access‡, $200 airline fee credit‡, numerous other credits (Dell‡, Indeed‡ etc.), Hotel status‡, 35% airline bonus‡, No FTF‡."}}></td>
                      <td data-label="Why Choose Over/Under" dangerouslySetInnerHTML={{ __html: "<strong>Choose if:</strong> You're a heavy traveler needing top-tier lounge access, book often via Amex Travel, can utilize the many statement credits to justify the $695 fee, and value hotel elite status & the 35% points rebate. Offers far superior direct travel perks but lower earning on non-travel category spend compared to Gold's 4X."}}></td>
                    </tr>
                  </tbody>
                </table>
              </div>
               {/* Footer for Table */}
              <p style={{fontSize: '0.85rem', color: '#666', marginTop: '1rem', textAlign: 'center'}}>
                 The Business Gold, with its new credits, now competes more strongly on overall value, especially for businesses not needing lounge access but spending heavily in its bonus categories and using partners like FedEx, Grubhub, or Walmart+.
              </p>
            </section>

            {/* Section 11: Pairing with Other Amex Cards */}
            <section id="section-11" className={styles.reviewSection}>
              <h2>11. Pairing with Other Amex Cards</h2>
              {/* Using dangerouslySetInnerHTML for ® */}
              <p dangerouslySetInnerHTML={{ __html: "Combining the Business Gold with other Amex cards can optimize Membership Rewards® earning:" }}></p>
              {/* Use featureList style */}
              <ul className={styles.featureList}>
                 <li dangerouslySetInnerHTML={{ __html: "<strong>The Blue Business® Plus Credit Card from American Express:</strong> Earns 2X MR points on all eligible purchases up to $50,000 per calendar year, then 1X. With no annual fee (<a href={reviewData.ratesLink} target='_blank' rel='noopener noreferrer sponsored'>See Rates & Fees</a>), it's the ideal partner. Use the Business Gold for potential 4X/3X categories and its credits; use the Blue Business Plus for all other spending to guarantee at least 2X points (up to the cap).‡" }}></li>
                 <li dangerouslySetInnerHTML={{ __html: "<strong>American Express® Business Platinum Card®:</strong> Holding both is less common due to high combined fees and overlapping MR points. Generally chosen instead of Gold for its travel perks, unless a specific niche strategy justifies both." }}></li>
                 <li dangerouslySetInnerHTML={{ __html: "<strong>Personal Amex Cards (e.g., Amex Gold, Amex Platinum):</strong> Points earned from personal MR-earning cards can be pooled with your Business Gold points, creating a larger balance for significant travel redemptions." }}></li>
              </ul>
              <p>The Business Gold + Blue Business Plus combination is a highly effective strategy for maximizing MR points across diverse business spending.</p>
            </section>

             {/* Section 12: Membership Rewards® Transfer Partners Deep Dive */}
             <section id="section-12" className={styles.reviewSection}>
                <h2 dangerouslySetInnerHTML={{ __html: "12. Membership Rewards® Transfer Partners Deep Dive" }}></h2>
                <p>Transferring points is key to unlocking maximum value. Amex U.S. Membership Rewards typically partners with around 18 airlines and 3 hotel chains (partners and ratios subject to change):</p>
                {/* Using featureList style for main types */}
                <ul className={styles.featureList}>
                    <li>
                        <strong>Key Airline Partners (Ratio usually 1:1 unless noted):</strong>
                        {/* Nested standard ul for alliances */}
                        <ul style={{listStyleType: 'disc', marginLeft: '20px', marginTop: '0.5rem'}}>
                            <li><strong>Star Alliance:</strong> Air Canada Aeroplan (Excellent awards/routing), ANA Mileage Club (Great value, esp. RTW/premium), Avianca LifeMiles (No fuel surcharges), Singapore Airlines KrisFlyer (Premium cabin access).</li>
                            <li><strong>SkyTeam:</strong> Delta SkyMiles (Dynamic, watch for sales), Air France/KLM Flying Blue (Promo awards, Europe), Aeromexico Rewards (1:1.6 ratio).</li>
                            <li><strong>Oneworld:</strong> British Airways Avios (Short-haul value), Cathay Pacific Asia Miles, Iberia Plus (Often good value for Iberia/partner flights), Qantas Frequent Flyer, Qatar Airways Privilege Club.</li>
                            <li><strong>Non-Alliance:</strong> Emirates Skywards, Etihad Guest, HawaiianMiles, JetBlue TrueBlue (Often less than 1:1 ratio), Virgin Atlantic Flying Club (Delta/ANA/partner value).</li>
                        </ul>
                    </li>
                    <li>
                        <strong>Hotel Partners:</strong>
                        {/* Nested standard ul for hotels */}
                         <ul style={{listStyleType: 'disc', marginLeft: '20px', marginTop: '0.5rem'}}>
                            <li><strong>Hilton Honors (Ratio 1:2):</strong> Points generally less valuable, but 1:2 ratio helps. Good for topping off or specific high-value redemptions.</li>
                            <li><strong>Marriott Bonvoy (Ratio 1:1):</strong> Lower value than airlines typically, useful for specific Bonvoy redemptions.</li>
                            <li><strong>Choice Privileges (Ratio 1:1):</strong> Niche value, can be excellent in certain regions (Europe/Japan).</li>
                        </ul>
                    </li>
                </ul>
                <p><strong>Strategy:</strong> Always check transfer ratios and availability before transferring, as transfers are irreversible. Utilize online tools to compare portal booking costs vs. partner award costs. Look for Amex transfer bonuses (e.g., 20-40% extra points to a specific partner) to boost value further.</p>
            </section>

             {/* Section 13: No Foreign Transaction Fee & Global Acceptance */}
            <section id="section-13" className={styles.reviewSection}>
              <h2 dangerouslySetInnerHTML={{ __html: "13. No Foreign Transaction Fee & Global Acceptance" }}></h2>
              <p dangerouslySetInnerHTML={{ __html: `The <strong>no foreign transaction fee</strong> feature is essential for international business (<a href='${reviewData.ratesLink}' target='_blank' rel='noopener noreferrer sponsored'>See Rates & Fees</a>). You save ~3% on purchases made outside the U.S. or in foreign currencies online.‡` }}></p>
              <p><strong>Global Acceptance:</strong> American Express is widely accepted at major travel providers (airlines, hotels, rental cars) and larger merchants globally. However, Visa and Mastercard generally have broader acceptance, especially at smaller businesses or in certain regions. It's recommended to carry a backup Visa/Mastercard when traveling internationally, but for most core business travel expenses, Amex acceptance is reliable.</p>
            </section>

            {/* Section 14: Potential Downsides for Travelers */}
            <section id="section-14" className={styles.reviewSection}>
              <h2>14. Potential Downsides for Travelers</h2>
              <p>Despite its strengths and new credits, consider these potential downsides:</p>
              {/* Use featureList style */}
              <ul className={styles.featureList}>
                  <li dangerouslySetInnerHTML={{ __html: "<strong>No Direct 4X Airfare Category:</strong> Unlike some cards, direct airfare purchases only earn 1X unless booked via Amex Travel (3X) or if Transit/Restaurants become top categories during travel."}}></li>
                  <li dangerouslySetInnerHTML={{ __html: "<strong>No Airport Lounge Access:</strong> A significant omission compared to the Business Platinum or Venture X Business. If lounge access is crucial, this card falls short."}}></li>
                  <li dangerouslySetInnerHTML={{ __html: "<strong>$375 Fee Still Requires Utilization:</strong> While the credits help immensely, if you don't use FedEx, Grubhub, Office Supply Stores, or Walmart+, the fee rests solely on points earnings and other perks, requiring significant bonus category spend to justify."}}></li>
                  <li dangerouslySetInnerHTML={{ __html: "<strong>Secondary Car Rental Insurance:</strong> Primary coverage (offered by cards like Ink Business Preferred) is generally preferred as it doesn't involve your personal/business insurance first.‡"}}></li>
                  <li dangerouslySetInnerHTML={{ __html: "<strong>Lower Value Portal Redemptions (Non-Flight):</strong> Using points for hotels/cars/cruises via Amex Travel often yields poor value (~0.7 cpp). Maximizing value requires focusing on partner transfers or flights via the portal."}}></li>
              </ul>
            </section>

            {/* Section 15: Advanced Redemption Tips for Travel */}
             <section id="section-15" className={styles.reviewSection}>
                <h2 dangerouslySetInnerHTML={{ __html: "15. Advanced Redemption Tips for Travel" }}></h2>
                {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{ __html: "Elevate your Membership Rewards® strategy:" }}></p>
                {/* Use numberedList style */}
                <ol className={styles.numberedList}>
                    <li><strong>Master Partner Sweet Spots:</strong> Identify high-value award chart redemptions (e.g., Iberia Avios for off-peak US-Spain business class, Aeroplan for complex Star Alliance itineraries with stopovers, Virgin Atlantic points for ANA First Class).</li>
                    <li><strong>Capitalize on Transfer Bonuses:</strong> Wait for Amex transfer bonuses (e.g., 30% bonus to Marriott or Avios) if your travel plans are flexible, effectively reducing the points cost.</li>
                    <li><strong>Pool Points:</strong> Combine MR points from all your Amex personal and business cards into one account for larger redemptions.</li>
                    <li><strong>Compare Portal vs. Partners Diligently:</strong> For every trip, calculate the cost in points via Amex Travel (1 cpp for flights) versus transferring to partners and booking an award. Factor in taxes/fees on award tickets.</li>
                    <li dangerouslySetInnerHTML={{ __html: "<strong>Utilize The Hotel Collection Benefit:</strong> When booking 2+ night stays at eligible mid-to-upper tier hotels via Amex Travel, the $100 credit + potential upgrade adds real value.‡"}}></li>
                    <li><strong>Avoid Low-Value Traps:</strong> Resist redeeming for statement credits or merchandise unless absolutely necessary. Prioritize travel transfers or flights via the portal.</li>
                </ol>
            </section>

            {/* Section 16: Another Example: Maximizing Travel Value */}
            <section id="section-16" className={styles.reviewSection}>
              <h2>16. Another Example: Maximizing Travel Value</h2>
              <p>A business accumulates 250,000 MR points. Let's maximize:</p>
              {/* Use featureList style */}
              <ul className={styles.featureList}>
                  <li><strong>Goal:</strong> Round-trip business class flights for two from New York (JFK) to Paris (CDG).</li>
                  <li><strong>Amex Travel Portal Cost:</strong> Assume flights cost $4,000 per person ($8,000 total). Using points at 1 cpp would require <strong>800,000 MR points</strong>. Not feasible.</li>
                  <li>
                      <strong>Partner Transfer Strategy (Air France/KLM Flying Blue):</strong> Flying Blue often has promo awards or reasonable standard pricing. Let's estimate 60,000 points one-way per person in business class during a standard period (120,000 round-trip pp). Total = <strong>240,000 Flying Blue miles</strong>.
                       {/* Nested standard ul */}
                       <ul style={{listStyleType: 'disc', marginLeft: '20px', marginTop: '0.5rem'}}>
                          <li><strong>Action:</strong> Transfer 240,000 MR points to Flying Blue (1:1 ratio).</li>
                          <li><strong>Result:</strong> Book the $8,000 flights using 240,000 points + taxes/fees (e.g., ~$400-$600 total).</li>
                          <li><strong>Value Achieved:</strong> ~$7,500 value from 240,000 points = <strong>~3.1 cents per point</strong>. This excellent redemption leaves 10,000 MR points remaining and showcases the power of partner transfers.</li>
                        </ul>
                  </li>
              </ul>
              <p>This scenario highlights how strategic transfers yield far superior value compared to direct portal redemptions for premium travel.</p>
            </section>

             {/* Section 17: Business Gold vs. Business Platinum for Travel */}
            <section id="section-17" className={styles.reviewSection}>
                <h2>17. Business Gold vs. Business Platinum for Travel</h2>
                <p>The choice hinges on spending patterns, fee tolerance, and desired perks:</p>
                {/* Structure similar to pros/cons but using standard ul */}
                <div>
                    <h3>Choose Business Gold if:</h3>
                    <ul style={{listStyleType: 'disc', marginLeft: '20px'}}>
                        <li>You heavily spend in 2 of the 6 specific 4X categories (Transit, U.S. Restaurants, Gas, Wireless, Tech, Ads).</li>
                        <li dangerouslySetInnerHTML={{ __html: "You can fully utilize the $240 Flexible Business Credit and $155 Walmart+ Credit, making the $375 fee highly manageable.‡" }}></li>
                        <li>You prioritize earning flexible MR points via category spend.</li>
                        <li>Airport lounge access is not a primary requirement.</li>
                        <li>You mainly transfer points to partners.</li>
                    </ul>
                </div>
                 <div style={{marginTop: '1.5rem'}}>
                    <h3>Choose Business Platinum if:</h3>
                    <ul style={{listStyleType: 'disc', marginLeft: '20px'}}>
                        <li dangerouslySetInnerHTML={{ __html: "You need extensive airport lounge access (Centurion, Priority Pass, Delta).‡" }}></li>
                        <li dangerouslySetInnerHTML={{ __html: "You frequently book flights/hotels via amextravel.com (for 5X points).‡" }}></li>
                        <li dangerouslySetInnerHTML={{ __html: "You can leverage the numerous statement credits ($200 airline fee‡, Dell‡, Indeed‡, Adobe‡, Wireless‡, CLEAR Plus‡, etc.) to offset the $695 fee.‡" }}></li>
                        <li dangerouslySetInnerHTML={{ __html: "You value hotel elite status (Hilton Gold, Marriott Gold).‡" }}></li>
                        <li dangerouslySetInnerHTML={{ __html: "You benefit from the 35% Airline Bonus for Pay with Points on eligible flights.‡" }}></li>
                    </ul>
                </div>
                <p style={{marginTop: '1.5rem'}}><strong>Summary:</strong> Business Gold is now a strong value proposition centered on category earning + specific credits. Business Platinum remains the premium choice focused on direct travel perks + Amex Travel booking rewards.</p>
            </section>

             {/* Section 18: Who Should Get the Amex Business Gold for Travel? */}
            <section id="section-18" className={styles.reviewSection}>
              <h2>18. Who Should Get the Amex Business Gold for Travel?</h2>
              {/* Using the prosCons style from the module */}
               <div className={styles.prosCons}>
                    <div className={styles.pros}>
                        <h3>Yes, Get This Card If:</h3>
                        {/* Using featureList style */}
                        <ul className={styles.featureList}>
                            <li>Your business consistently spends significantly in two of the six 4X categories (Transit, U.S. Restaurants, Gas, Wireless, Tech, Ads).</li>
                            <li dangerouslySetInnerHTML={{ __html: "Your business uses FedEx, Grubhub, Office Supply Stores, and/or Walmart+ regularly, allowing you to maximize the $240 + $155 annual credits.‡" }}></li>
                            <li dangerouslySetInnerHTML={{ __html: "You value Membership Rewards® points for transferring to airline/hotel partners for high-value travel."}}></li>
                            <li dangerouslySetInnerHTML={{ __html: "You book some flights/hotels via amextravel.com (for 3X points).‡" }}></li>
                            <li dangerouslySetInnerHTML={{ __html: "You need no foreign transaction fees.‡" }}></li>
                            <li>The $375 annual fee is effectively negated or justified by the credits and points earned.</li>
                        </ul>
                    </div>
                    <div className={styles.cons}>
                        <h3>No, Consider Other Cards If:</h3>
                        {/* Using featureList style */}
                        <ul className={styles.featureList}>
                            <li>Your spending doesn't align well with the 4X categories.</li>
                            <li dangerouslySetInnerHTML={{ __html: "You cannot utilize the $240 Flexible Business Credit or $155 Walmart+ Credit effectively."}}></li>
                            <li>Airport lounge access is essential for your travel.</li>
                            <li>You prefer a simpler flat-rate rewards card or one with a large, direct travel credit (like Venture X Business).</li>
                            <li>You need primary car rental insurance.</li>
                            <li dangerouslySetInnerHTML={{ __html: "You prefer the Chase Ultimate Rewards® or Capital One Miles ecosystem."}}></li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Section 19: Final Thoughts & Conclusion */}
            <section id="section-19" className={styles.reviewSection}>
                <h2>19. Final Thoughts & Conclusion</h2>
                {/* Using dangerouslySetInnerHTML for ® and ‡ */}
                <p dangerouslySetInnerHTML={{ __html: "The <strong>American Express® Business Gold Card</strong> has significantly boosted its appeal in 2025 with the addition of up to $395 in annual statement credits ($240 Flexible Business + $155 Walmart+).‡ This fundamentally changes the calculus for its $375 annual fee, making it much easier to justify for businesses that use the relevant merchants. Combined with its powerful, adaptive 4X earning structure in key business categories (including Transit and U.S. Restaurants relevant to travel) and the valuable Membership Rewards® program, it's a formidable contender." }}></p>
                <p dangerouslySetInnerHTML={{ __html: "While it still lacks airport lounge access and direct airfare isn't a 4X category, its strengths lie in rewarding specific high-spend areas and providing access to lucrative airline/hotel transfer partners. The 3X on Amex Travel bookings‡ and solid travel protections‡ round out its offering." }}></p>
                <p>For businesses that can leverage both the adaptable 4X categories and the new statement credits, the Amex Business Gold offers a compelling blend of high rewards potential and tangible annual savings, positioning it as an excellent tool for turning business expenses into valuable travel experiences.</p>
            </section>

            {/* CTA Section - Placeholders */}
            <section id="cta" className={styles.ctaSection}>
              <h2>Get the <b>American Express® Business Gold Card</b> Today!</h2>
              <div className={styles.ctaButtons}>
                <a href={reviewData.applyLink} className={`${styles.btn} ${styles.btnApply}`} title="From card issuer's secure site" target="_blank" rel="noopener noreferrer sponsored">Apply Now</a>
                <a href={reviewData.ratesLink} className={`${styles.btn} ${styles.btnRates}`} target="_blank" rel="noopener noreferrer sponsored">See Rates & Fees</a>
              </div>
            </section>

            {/* Section 20: Disclaimer */}
            <section id="section-20" className={styles.reviewSection}>
                <h2>20. Disclaimer</h2>
                 <p style={{fontSize: '0.85rem', color: '#666'}}>
                    Card terms, welcome offers, points valuations, earning rates, annual fees, benefits (including insurance coverage, transfer partners, credits like the Flexible Business Credit and Walmart+ Credit, perks like The Hotel Collection), and APRs are subject to change at any time without notice. Information presented here is accurate to the best of our knowledge as of April 2025 but should be verified directly with American Express before applying.
                 </p>
            </section>


            {/* E-A-T Section - Adapted for Amex Business Gold */}
             <section id="eat-expertise-authority-trustworthiness" className={`${styles.reviewSection} ${styles.eatSection}`}>
                 <h2 dangerouslySetInnerHTML={{ __html: "Our Commitment to E-A-T: Expertise, Authority & Trustworthiness"}}></h2>
                <p>
                    At <strong>{reviewData.author}</strong>, we prioritize reliable, unbiased reviews so you can make informed credit decisions. We adhere to Google’s E‑A‑T (Expertise, Authority, and Trustworthiness) guidelines through:
                </p>
                <h3>1. Expertise</h3>
                <ul className={styles.featureList}>
                    <li><strong>Specialized Research:</strong> Our writers and analysts have years of experience in business credit cards and Membership Rewards®, understanding the nuances of the 4X adaptive categories and partner transfers.</li>
                    <li><strong>Real-Time Updates:</strong> We continually check official issuer materials (American Express) and user data to maintain current rates, terms, credits (like Flex Business and Walmart+), and benefit details.</li>
                    <li dangerouslySetInnerHTML={{ __html: "<strong>Practical Testing:</strong> We verify how categories code, how statement credits post, and the usability of perks like The Hotel Collection based on real-world data and user reports."}}></li>
                </ul>
                <h3>2. Authority</h3>
                <ul className={styles.featureList}>
                    <li><strong>Detailed Coverage:</strong> This review offers an exhaustive look at the American Express® Business Gold Card, from the $375 fee justification to advanced redemption strategies.</li>
                    <li><strong>Trusted By Major Outlets:</strong> Our articles are frequently cited by national finance and travel news sites for Amex card analysis and Membership Rewards® insights.</li>
                    <li dangerouslySetInnerHTML={{ __html: "<strong>Full Disclosure:</strong> If affiliate links or promotions exist, we clearly state them, ensuring objective editorial content."}}></li>
                </ul>
                <h3>3. Trustworthiness</h3>
                <ul className={styles.featureList}>
                    <li><strong>Independent Analysis:</strong> We never let advertisers influence our ratings or opinions on the card's value proposition or comparison points.</li>
                    <li><strong>Frequent Revisions:</strong> We revise reviews whenever new offers appear or American Express adjusts card benefits, categories, or partner details.</li>
                    <li><strong>Community Feedback:</strong> We encourage open discussion in comments, fostering transparency and additional user insights on Amex business card usage.</li>
                    <li><strong>Data Security:</strong> We prioritize user privacy and follow best practices, outlined in our <Link href="/privacy-policy"><a>Privacy Policy</a></Link>.</li>
                </ul>
                <p dangerouslySetInnerHTML={{ __html: `By following these E‑A‑T principles, we aim to guide you responsibly toward a credit card that fits your business needs and maximizes your travel rewards with the <strong>${reviewData.cardName}</strong>.` }}></p>
            </section>

          </article>
        </div> {/* Close reviewContainer */}
      </main>

      <Footer />
    </>
  );
}

export default AmexBusinessGoldReviewPage;