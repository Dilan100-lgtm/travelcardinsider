// Example Path: pages/reviews/chase-sapphire-preferred.js
// Or: pages/reviews/[slug].js (if using dynamic routing with 'chase-sapphire-preferred' as slug)

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
  cardName: 'Chase Sapphire Preferred® Credit Card',
  title: 'Chase Sapphire Preferred® Credit Card – In-Depth 2025 Review',
  description: 'A 2000-word review of the Chase Sapphire Preferred® Credit Card, focusing on travel and dining rewards, annual fee, bonus categories, 2025 updates, pros, cons, and advanced usage tips.',
  keywords: 'Chase, Sapphire Preferred, credit card, travel, dining, Ultimate Rewards, 2025 updates',
  author: 'TravelCardInsider', // *** REPLACE with your actual author/site name ***
  imageUrl: '/sapphire_preferred_card.png', // *** VERIFY PATH in /public ***
  ratingValue: 8.4, // From Chase Sapphire Preferred HTML
  applyLink: 'https://creditcards.chase.com/rewards-credit-cards/sapphire/preferred', // *** REPLACE with actual CSP APPLY URL ***
  ratesLink: 'https://sites.chase.com/services/creatives/pricingandterms.html/content/dam/pricingandterms/LGC56014.html', // *** VERIFY URL ***
  // Image dimensions (MUST BE ACCURATE for next/image)
  imageWidth: 480, // *** REPLACE with actual image width *** (Example Placeholder)
  imageHeight: 304, // *** REPLACE with actual image height *** (Example Placeholder)
};

// --- Rating Tooltip Content (Customize if needed for CSP) ---
const ratingCriteria = [ // *** VERIFY/CUSTOMIZE these criteria for CSP Rating ***
    'Travel & Dining Rewards (3x-5x)',
    'Welcome Bonus Value',
    'Ultimate Rewards® Flexibility & Transfers',
    'Travel Protections Value',
    'Annual Fee ($95)'
];

function ChaseSapphirePreferredReviewPage() {
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
  // !!! VERIFY all URLs, counts, and details FOR CHASE SAPPHIRE PREFERRED® !!!
  const siteUrl = "https://www.travelcardinsider.com"; // *** REPLACE with your actual site URL ***
  const pageUrl = `${siteUrl}/cards/chase-sapphire-preferred`; // *** REPLACE with your actual page URL ***
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Chase Sapphire Preferred® Credit Card",
    "image": `${siteUrl}${reviewData.imageUrl}`, // *** Assuming imageUrl starts with / ***
    "description": "The Chase Sapphire Preferred® Credit Card is a top pick for travelers, offering elevated rewards on dining and travel, flexible Ultimate Rewards®, and valuable redemption options.", // Updated description
    "brand": {
      "@type": "Brand",
      "name": "Chase"
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
      "ratingCount": 1980, // *** REPLACE with actual or estimated count ***
      "reviewCount": 1980  // *** REPLACE with actual or estimated count ***
    },
    "offers": {
      "@type": "Offer",
      "url": reviewData.applyLink.startsWith('http') ? reviewData.applyLink : `${siteUrl}${reviewData.applyLink}`, // *** Ensure full APPLY URL ***
      "priceCurrency": "USD",
      "price": "95", // Annual Fee for CSP
      "availability": "https://schema.org/InStock",
      "itemCondition": "https://schema.org/NewCondition"
    }
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
        {/* Preload critical fonts */}
        <link rel="preload" href="/fonts/Roboto_Condensed-Regular.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/Roboto_Condensed-Bold.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/PlayfairDisplay-Regular.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/Playfair-Display-Bold.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />

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
      </Head>

      

      <main>
        {/* Spacing for fixed header - adjusted margin from HTML */}
        <div style={{ marginTop: '2rem' }}></div>

        {/* Review Container using CSS Module */}
        <div className={styles.reviewContainer}>
          <article> {/* Wrap main content in article */}
            {/* ============= REVIEW HEADER ============= */}
            <header className={styles.reviewHeader}>
               {/* H1 styled by .reviewHeader h1 */}
              <h1>{reviewData.title}</h1>

              {/* Section 1 Content (Part of Header Structure in Template) */}
              <section id="section-1">
                <div className={styles.intro}>
                  <p>
                    The <strong>Chase Sapphire Preferred®</strong> is widely recognized
                    as a staple for travel rewards enthusiasts. Priced at a
                    <strong> $95 annual fee</strong>, it offers robust points
                    (Chase Ultimate Rewards®) in dining and travel categories,
                    plus a suite of flexible redemption options. If you’re
                    diving into 2025 seeking a mid-tier card that can handle
                    everything from flights and hotels to easy point transfers
                    to airline and hotel partners, the Sapphire Preferred®
                    remains a top contender. In this review, we’ll explore
                    20 sections—covering quick stats, disclaimers, advanced usage tips,
                    and more—so you can see if it’s the right anchor card
                    for your next adventure.
                  </p>
                </div>

                {/* Image Container */}
                 {/* Using cardImageContainer and cardImage styles */}
                <div className={styles.cardImageContainer}>
                   {/* Class name adjusted from HTML to match CSS module */}
                   <Image
                     src={reviewData.imageUrl}
                     alt={reviewData.cardName} // Use card name for alt
                     width={reviewData.imageWidth} // *** REPLACE or use data ***
                     height={reviewData.imageHeight} // *** REPLACE or use data ***
                     className={styles.cardImage}
                     priority
                   />
                 </div>

                {/* RATING SECTION */}
                <div className={styles.ratingSection}>
                  <span className={styles.tciRating}>
                    <button
                      type="button"
                      className={styles.infoIconButton} // Use CSS module class
                      aria-label="Rating Information"
                      title="Our TCI rating info" // Added title attribute
                      onClick={handleIconClick}
                    >
                       {/* Reusing info icon SVG */}
                       <svg aria-hidden="true" focusable="false" className={styles.infoIcon} viewBox="0 0 16 16">
                         <path fillRule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                         <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                       </svg>
                    </button>
                    TCI Rating: <strong>{reviewData.ratingValue.toFixed(1)}</strong>/10

                    {/* --- Conditionally Rendered Tooltip --- */}
                    {showRatingInfo && (
                        <div
                            ref={tooltipRef}
                            className={styles.ratingTooltip}
                            role="tooltip"
                            aria-live="polite"
                        >
                            <strong>TCI Rating: {reviewData.ratingValue.toFixed(1)}/10</strong>
                             {/* Using ratingCriteria array */}
                            <p className={styles.tooltipIntro}>This rating is based on:</p>
                            <ul className={styles.tooltipList}>
                                 {ratingCriteria.map((criterion, index) => <li key={index}>{criterion}</li>)}
                            </ul>
                         </div>
                    )}
                  </span>

                  {/* STAR RATING */}
                  <div className={styles.starRating} title={`Rated ${reviewData.ratingValue} out of 10 stars`} style={{ '--rating': `${reviewData.ratingValue * 10}%` }}>
                    <span>★★★★★</span>
                    <span className={styles.filledStars}>★★★★★</span>
                  </div>

                  <div className={styles.ratingDescription}>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <i dangerouslySetInnerHTML={{ __html: "A leading mid-tier travel card with valuable UR points and flexible redemptions."}}></i>
                  </div>
                </div>
              </section>
            </header>

            {/* ============= REVIEW CONTENT SECTIONS (Hardcoded JSX) ============= */}

            {/* Section 2: Quick Stats Table */}
            <section id="section-2" className={styles.reviewSection}>
              <h2>Quick Stats at a Glance</h2>
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
                      <td data-label="Details">$95</td>
                    </tr>
                    <tr>
                      <td data-label="Feature">Sign-Up Bonus</td>
                      <td data-label="Details">Typically ~60k–80k points after $4,000 spend in first 3 months (offer varies)</td>
                    </tr>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <tr dangerouslySetInnerHTML={{ __html: '<td data-label="Feature">Earning Rates</td><td data-label="Details">5x on travel via Chase Ultimate Rewards®, 3x dining, 2x other travel, 1x all else</td>'}}></tr>
                    <tr>
                      <td data-label="Feature">Redemption Boost</td>
                      <td data-label="Details">1.25¢ value per point in Chase travel portal</td>
                    </tr>
                    <tr>
                      <td data-label="Feature">Transfer Partners</td>
                      <td data-label="Details">11+ airline/hotel partners (e.g., United, Southwest, Hyatt)</td>
                    </tr>
                    <tr>
                      <td data-label="Feature">No Foreign Transaction Fee</td>
                      <td data-label="Details">Use abroad or online in other currencies without a 3% penalty</td>
                    </tr>
                    <tr>
                      <td data-label="Feature">Travel Protections</td>
                      <td data-label="Details">Primary car rental coverage, trip delay/cancellation coverage, etc.</td>
                    </tr>
                    <tr>
                      <td data-label="Feature">Recommended Credit</td>
                      <td data-label="Details">Good–excellent (700+ FICO typically)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* CTA Section */}
            <section id="cta" className={styles.ctaSection}>
               {/* Using dangerouslySetInnerHTML for ® */}
              <h2 dangerouslySetInnerHTML={{ __html:"Get the <b>Chase Sapphire Preferred® Credit Card</b> Today!"}}></h2>
              <div className={styles.ctaButtons}>
                <a href={reviewData.applyLink} className={`${styles.btn} ${styles.btnApply}`} title="From card issuer's secure site" target="_blank" rel="noopener noreferrer sponsored">Apply Now</a>
                <a href={reviewData.ratesLink} className={`${styles.btn} ${styles.btnRates}`} target="_blank" rel="noopener noreferrer sponsored">See Rates & Fees</a>
              </div>
            </section>

            {/* Section 3: Card Overview & Positioning */}
            <section id="section-3" className={styles.reviewSection}>
              <h2 dangerouslySetInnerHTML={{ __html: "Card Overview &amp; Positioning" }}></h2>
               {/* Using dangerouslySetInnerHTML for ® */}
              <p dangerouslySetInnerHTML={{ __html: "The <b>Sapphire Preferred®</b> has become an industry favorite for novices and experienced travelers alike. It strikes a balance with a moderate $95 fee but delivers robust travel/dining multipliers. If you want flexible points, stellar redemption potential (1.25¢ each in the portal or potentially 2¢+ via transfers), and solid travel insurance, it’s hard to beat. Many use it as a stepping stone to premium travel or pair it with no-annual-fee Chase cards (Freedom®) to supercharge their Ultimate Rewards. If you’re not ready for the $550 <b>Sapphire Reserve®</b> or you want a cost-efficient travel card, <b>Preferred</b> remains a top contender in 2025."}}></p>
            </section>

             {/* Section 4: Earning Points & Travel Emphasis */}
             <section id="section-4" className={styles.reviewSection}>
                <h2 dangerouslySetInnerHTML={{ __html: "Earning Points &amp; Travel Emphasis" }}></h2>
                <p dangerouslySetInnerHTML={{ __html: "Standard categories (subject to 2025 T&amp;Cs) include:"}}></p>
                <ul className={styles.featureList}>
                    <li dangerouslySetInnerHTML={{ __html: "<strong>5x points</strong> on travel booked via Chase Ultimate Rewards® portal"}}></li>
                    <li><strong>3x points</strong> on dining (including eligible takeout and delivery services)</li>
                    <li><strong>2x points</strong> on general travel (hotels, flights, taxis, tolls, etc.) if booked outside Chase portal</li>
                    <li><strong>1x point</strong> on all other spending</li>
                </ul>
                <p>
                    Many appreciate that “travel” is broad: includes rideshare, parking, bus/rail, etc. Dining is typically equally broad—covering restaurants, bars, sometimes certain meal delivery. This ensures daily commuting and food spend can accumulate quickly.
                </p>
            </section>

            {/* Section 5: Redeeming Ultimate Rewards® */}
            <section id="section-5" className={styles.reviewSection}>
                <h2 dangerouslySetInnerHTML={{ __html: "Redeeming Ultimate Rewards®"}}></h2>
                <p>
                    The hallmark of <strong>Chase Ultimate Rewards®</strong> is flexibility:
                </p>
                <ol className={styles.numberedList}>
                    <li dangerouslySetInnerHTML={{ __html: "<strong>Pay Yourself Back® (Selected Categories):</strong> Redeem points at a 1.25¢ rate to offset certain categories (like groceries, dining, or donations). This feature changes over time, so confirm 2025 offerings."}}></li>
                    <li><strong>Chase Travel Portal:</strong>
                    Book flights, hotels, car rentals, etc. at a 1.25¢ per point rate.
                    If a flight is $250, you can pay 20,000 points (given the 25% bonus) instead of 25,000.</li>
                    <li><strong>Transfer Partners (1:1):</strong>
                    Move points to 11+ airline/hotel programs (United, Southwest, Hyatt, etc.).
                    This can yield above 2¢ per point if you find premium cabin awards or Hyatt sweet spots.</li>
                    <li><strong>Cash Back or Gift Cards:</strong>
                    Typically 1¢ each, not ideal if you want maximum value,
                    but it’s flexible if you need quick statement credits.</li>
                </ol>
                <p>
                    Often, transferring to airline/hotel partners reaps the highest value,
                    while the 1.25¢ redemption for travel via the portal is a strong baseline
                    if you want simplicity.
                </p>
            </section>

            {/* Section 6: Travel & Purchase Protections */}
            <section id="section-6" className={styles.reviewSection}>
                <h2 dangerouslySetInnerHTML={{ __html: "Travel &amp; Purchase Protections"}}></h2>
                <p>
                    The <strong>Sapphire Preferred</strong> is known for robust coverage:
                </p>
                <ul className={styles.featureList}>
                    <li><strong>Primary Auto Rental Collision Damage Waiver:</strong>
                    If you decline the rental agency’s collision coverage,
                    you have primary coverage on rentals used for personal reasons.</li>
                    <li><strong>Trip Delay/Cancellation Insurance:</strong>
                    Reimburse non-refundable expenses if your trip is delayed
                    (12+ hours or overnight) or canceled for covered reasons.</li>
                    <li><strong>Baggage Delay Insurance:</strong>
                    You may get reimbursed for essentials if your baggage is delayed 6+ hours.</li>
                    <li dangerouslySetInnerHTML={{ __html: "<strong>Purchase Protection &amp; Extended Warranty:</strong> Covers new purchases against damage/theft for a limited period, plus extends eligible manufacturers’ warranties."}}></li>
                </ul>
                <p>
                    These perks matter if you frequently book travel or rent cars.
                    The coverage can save hundreds in emergencies,
                    justifying the $95 fee alone if you use them.
                </p>
            </section>

            {/* Section 7: Annual Fee & Ongoing Costs */}
            <section id="section-7" className={styles.reviewSection}>
                <h2 dangerouslySetInnerHTML={{ __html: "Annual Fee &amp; Ongoing Costs"}}></h2>
                <p>
                    <b>$95</b> is your annual fee, not waived typically.
                    You’ll need to weigh that against the card’s robust earn rates
                    and travel protections. After any promotional 0% period (if offered),
                    the APR is typically around <strong>19.24%–26.24% Variable</strong>.
                    Always best to pay in full.
                    There’s <b>no foreign transaction fee</b>,
                    so it’s safe to use abroad or on foreign websites.
                </p>
                <p>
                    For many, just the sign-up bonus plus a few trips can easily outstrip $95.
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <span dangerouslySetInnerHTML={{ __html: "If you also hold no-annual-fee Freedoms, you can combine points and redeem them at the Preferred’s boosted rate or transfer them to airlines/hotels, expanding your synergy."}}></span>
                </p>
            </section>

            {/* Section 8: 2025 Updates & Potential Changes */}
            <section id="section-8" className={styles.reviewSection}>
                <h2 dangerouslySetInnerHTML={{ __html: "2025 Updates &amp; Potential Changes"}}></h2>
                <ol className={styles.numberedList}>
                    <li><strong>New Transfer Partners:</strong>
                    Chase might add or drop airline/hotel partners (in 2024, they added Aeroplan, for instance).
                    2025 could see expansions to more carriers or dynamic alliances.</li>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{ __html: "<strong>Pay Yourself Back® Rotations:</strong> Categories eligible for 1.25¢ redemption might shift from dining to groceries, etc. Keep an eye on official announcements."}}></li>
                     {/* Using dangerouslySetInnerHTML for ® &amp; */}
                    <li dangerouslySetInnerHTML={{ __html: "<strong>Possible Category Earning Adjustments:</strong> Some rumors say 3x might expand to streaming or transit. Confirm with official T&amp;Cs if it changes in 2025."}}></li>
                    <li><strong>Increased Sign-Up Bonus:</strong>
                    Over the years, we’ve seen 80k or even 100k point offers.
                    2025 might bring bigger limited-time promos if competition intensifies.</li>
                </ol>
                <p>
                    Always verify with Chase for official updates each year
                    to see if new redemption features or categories are introduced or retired.
                </p>
            </section>

            {/* Section 9: Real-Life Example Table */}
            <section id="section-9" className={styles.reviewSection}>
                <h2>Real-Life Example: Points Earning</h2>
                <p>
                    Suppose you spend $2,000 annually on travel, $3,000 on dining,
                    and $6,000 on everything else (including $1,500 in travel not via the portal,
                    but let’s keep it simple). Let’s approximate:
                </p>
                <div className={styles.tableContainer}>
                    <table className={styles.statsTable}>
                        <thead>
                            <tr>
                                <th>Category</th>
                                <th>Annual Spend</th>
                                <th>Points per $</th>
                                <th>Points Earned</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td data-label="Category">Travel via Portal</td>
                                <td data-label="Annual Spend">$2,000</td>
                                <td data-label="Points per $">5x</td>
                                <td data-label="Points Earned">10,000</td>
                            </tr>
                            <tr>
                                <td data-label="Category">Dining</td>
                                <td data-label="Annual Spend">$3,000</td>
                                <td data-label="Points per $">3x</td>
                                <td data-label="Points Earned">9,000</td>
                            </tr>
                            <tr>
                                <td data-label="Category">Other Spend</td>
                                <td data-label="Annual Spend">$6,000</td>
                                <td data-label="Points per $">1x</td>
                                <td data-label="Points Earned">6,000</td>
                            </tr>
                            <tr style={{fontWeight: 'bold', borderTop: '2px solid #dee2e6'}}>
                                <th data-label="Category">Total</th>
                                <th data-label="Annual Spend">$11,000</th>
                                <th data-label="Points per $">—</th>
                                <th data-label="Points Earned">25,000</th>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p>
                    That’s <b>25,000</b> UR points from normal spend.
                    If you add a sign-up bonus (say 60k) after meeting the initial requirement,
                    you could be at 85k total in year one.
                    Redeemed at 1.25¢ each in the portal, that’s {'>'} $1,000 in travel.
                    Transfer to partners might net even more,
                    depending on sweet spots or premium cabins.
                    That easily beats the $95 annual fee if you utilize it well.
                </p>
            </section>

            {/* Section 10: Competitor Analysis */}
            <section id="section-10" className={styles.reviewSection}>
                <h2>Competitor Analysis</h2>
                <p>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <span dangerouslySetInnerHTML={{__html:"How does the <b>Chase Sapphire Preferred®</b> compare to similar mid-tier travel cards?"}}></span>
                </p>
                <div className={styles.tableContainer}>
                     <table className={styles.statsTable}> {/* Corrected from empty table tag in source */}
                        <thead>
                            <tr>
                                <th>Card</th>
                                <th>Annual Fee</th>
                                <th>Key Perks</th>
                                <th>Why Choose</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                 {/* Using dangerouslySetInnerHTML for ® */}
                                <td data-label="Card" dangerouslySetInnerHTML={{__html:"Chase Sapphire Preferred®"}}></td>
                                <td data-label="Annual Fee">$95</td>
                                <td data-label="Key Perks">5x on travel via portal, 3x dining, 2x travel, 1.25¢ portal redemption</td>
                                <td data-label="Why Choose">Flexible UR points, great travel protections, moderate fee</td>
                            </tr>
                            <tr>
                                <td data-label="Card">Capital One Venture Rewards</td>
                                <td data-label="Annual Fee">$95</td>
                                <td data-label="Key Perks">2x miles on everything, transfer partners, $100 TSA PreCheck credit</td>
                                <td data-label="Why Choose">Simpler 2x structure, but fewer travel protections than CSP</td>
                            </tr>
                            <tr>
                                <td data-label="Card">Amex Gold</td>
                                <td data-label="Annual Fee">$250</td>
                                <td data-label="Key Perks">4x dining, 4x US supermarkets, $120 dining credit, airline fee credit</td>
                                <td data-label="Why Choose">Highest dining/grocery earner, but bigger fee & less robust travel coverage vs. CSP</td>
                            </tr>
                            <tr>
                                <td data-label="Card">Citi Premier®</td>
                                <td data-label="Annual Fee">$95</td>
                                <td data-label="Key Perks" dangerouslySetInnerHTML={{__html:"3x on travel, gas, dining, groceries; flexible ThankYou® Points"}}></td>
                                <td data-label="Why Choose">Great if you want 3x on wide categories, but slightly fewer travel partners than UR</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{__html:"The <b>Sapphire Preferred®</b> stands out with top-tier travel insurance coverage, strong 3x dining, and a robust portal redemption bonus (1.25¢). Competitors might have 2x everything (Venture) or bigger dining/grocery multipliers (Amex Gold), but each has trade-offs in fee or partner networks. For a balanced card with broad travel coverage, CSP remains a top pick."}}></p>
            </section>

            {/* Section 11: Pairing with Other Chase Cards */}
             <section id="section-11" className={styles.reviewSection}>
                <h2>Pairing with Other Chase Cards</h2>
                <p>
                    Many build a <b>Chase Trifecta</b> or <b>Quadfecta</b>:
                </p>
                <ul className={styles.featureList}>
                    {/* Using dangerouslySetInnerHTML for ®/℠ */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Freedom Flex℠ or Freedom Unlimited®:</strong> Earn 3–5x on rotating categories or 1.5x on everything, then combine points with the Sapphire Preferred® for better redemption rates or transfers."}}></li>
                    {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Chase Ink Business Cards:</strong> If you have business spend, the Ink cards can funnel more points into UR. Then your Sapphire unlocks travel portal 1.25¢ or partner transfers. The synergy can yield thousands of extra points each year."}}></li>
                </ul>
                <p>
                    Because only Sapphire (Preferred or Reserve) unlocks airline/hotel transfers,
                    having it in your portfolio is crucial if you want to convert Freedoms’ or Inks’ cash-back points to Ultimate Rewards for high-value redemptions.
                </p>
            </section>

            {/* Section 12: Travel Insurance & Protections Deep Dive */}
            <section id="section-12" className={styles.reviewSection}>
                <h2 dangerouslySetInnerHTML={{ __html: "Travel Insurance &amp; Protections Deep Dive"}}></h2>
                <p>
                    The coverage suite often includes:
                </p>
                <ul className={styles.featureList}>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Primary Auto Rental Collision Damage Waiver:</strong> If you decline the rental agency’s collision coverage, you have primary coverage on rentals used for personal reasons (not business rentals—confirm T&amp;Cs)."}}></li>
                    <li><strong>Trip Interruption/Cancel:</strong>
                    Up to $10k per person ($20k max) if an eligible event forces cancellation.
                    Great for flights or tours you pre-pay.</li>
                    <li><strong>Trip Delay Reimbursement:</strong>
                    After 12+ hour delay (or overnight), you get up to $500 per ticket in lodging/meal expenses.
                    This helps if you’re stranded mid-journey.</li>
                    <li dangerouslySetInnerHTML={{ __html: "<strong>Baggage Delay &amp; Lost Luggage:</strong> If your bag is delayed 6+ hours, you can get reimbursed for essentials (toothbrush, clothes). If fully lost, more coverage may apply."}}></li>
                </ul>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{__html:"The scope is robust for a $95 card. Typically, you must charge the entire trip to Sapphire Preferred® (or at least a portion). Always read the official guide to benefits for specifics and claim procedures."}}></p>
            </section>

            {/* Section 13: No Foreign Transaction Fee & International Acceptance */}
            <section id="section-13" className={styles.reviewSection}>
                <h2 dangerouslySetInnerHTML={{ __html: "No Foreign Transaction Fee &amp; Worldwide Acceptance"}}></h2>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{__html:"With <b>no FTF</b>, the <b>Sapphire Preferred®</b> is ideal for overseas travel. As a Visa, acceptance is widespread across Europe, Asia, etc. Coupled with the travel/dining bonus categories, you can safely swipe abroad and keep earning 2x or 3x. Just confirm your travel-coded merchants to maximize the 2x if booking directly. If you want a bigger 5x, you might use the Chase Travel Portal for flights/hotels before departure."}}></p>
            </section>

            {/* Section 14: Potential Downsides */}
            <section id="section-14" className={styles.reviewSection}>
                <h2>Potential Downsides</h2>
                <ul className={styles.featureList}>
                    <li><strong>$95 Fee Not Waived:</strong>
                    Usually, the first year’s not waived (unlike some airline cards).
                    But you get a large sign-up bonus to offset it quickly.</li>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Limited Top-Tier Perks:</strong> For lounge access or 1.5¢ portal redemption, you’d need the $550 Sapphire Reserve®. Preferred is more budget-friendly but lacks those extras."}}></li>
                    <li><strong>Uncertain Transfer Value:</strong>
                    If you’re not comfortable with partner award booking or frequent flyer programs,
                    you might not fully exploit potential 2¢+ valuations.
                    Then 1.25¢ via the portal is your fallback, still decent but not mind-blowing.</li>
                    <li><strong>Travel Category Complexity:</strong>
                    The 5x or 2x can be overshadowed if you frequently use other aggregator sites or package deals.
                    Also, some “travel” expenses might not code as travel (like Airbnb or certain local transit)
                    so verifying each merchant code can be a bit tricky.</li>
                </ul>
            </section>

            {/* Section 15: Advanced Redemption Tips */}
            <section id="section-15" className={styles.reviewSection}>
                <h2>Advanced Redemption Tips</h2>
                <ol className={styles.numberedList}>
                    <li><strong>Leverage Transfer Sweet Spots:</strong>
                    Transfer UR to Hyatt for hotel redemptions often yields great value.
                    Or to United for overseas premium cabins, or Southwest for domestic.
                    Compare portal cost vs. partner miles cost for your route.</li>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Watch for Pay Yourself Back® Promotions:</strong> If dining/grocery/home improvement is included at 1.25¢, you might recoup your everyday spend easily. The categories can rotate, so remain flexible."}}></li>
                    {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Combine Freedoms for Max Points:</strong> Use Freedom Flex’s 5% categories or Freedom Unlimited’s 1.5% everywhere. Then pool those points into your Sapphire Preferred® for the 25% redemption bonus or partner transfers."}}></li>
                    <li><strong>Book Portal Travel for 5x If Cheaper:</strong>
                    Check the Chase portal flight price vs. direct airline.
                    If it’s the same or cheaper, you can snag 5x points on flights or hotels,
                    accelerating your UR accumulation.</li>
                    <li><strong>Don’t Overlook Travel Insurance:</strong>
                    Use the card for flights/hotels to ensure coverage in case of delays or cancellations.
                    If you split payments on other cards, coverage might not fully apply.</li>
                </ol>
            </section>

            {/* Section 16: Another Real-Life Scenario */}
            <section id="section-16" className={styles.reviewSection}>
                <h2 dangerouslySetInnerHTML={{ __html: "Another Example: Family Vacation Earnings &amp; Savings"}}></h2>
                <p>
                    Suppose you plan a big $3,000 flight/hotel package in the Chase portal. That’s 5x = 15,000 points.
                    Throughout the year, you spend $4,000 on dining (3x = 12,000) and $4,000 on additional travel or general purchases.
                    Let’s approximate $2,000 on random travel at 2x (4,000 points) plus $2,000 at 1x (2,000 points).
                    You’d earn 33,000 points from normal usage. Add a 60k sign-up bonus, and you’re near 93k total.
                    Redeem in the portal at 1.25¢ each for ~$1,162 in flights or hotels, or possibly more if you transfer to a partner at the right time.
                </p>
                <p>
                    This easily surpasses the $95 annual fee, especially if you also benefit from the travel insurances.
                    If you hold Freedoms, you might funnel 5% categories into the pot for even higher totals,
                    quickly hitting 100k+ UR in a year for major travel redemptions.
                </p>
            </section>

            {/* Section 17: Pairing with Sapphire Reserve? */}
            <section id="section-17" className={styles.reviewSection}>
                 <h2>Pairing with Sapphire Reserve?</h2>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{__html:"Usually, you can’t hold both the Preferred and Reserve simultaneously. Chase’s policy typically restricts having both active. Some upgrade from Preferred to Reserve once they want the $300 travel credit, Priority Pass lounge access, and 1.5¢ portal redemption. But many find the $95 fee on Preferred more palatable if they aren’t traveling enough to justify $550. Evaluate your lounge usage, travel volume, and redemption style to see if upgrading or sticking with Preferred is better for 2025."}}></p>
            </section>

            {/* Section 18: Competitor & Alternative Cards */}
             <section id="section-18" className={styles.reviewSection}>
                 <h2 dangerouslySetInnerHTML={{ __html: "Competitors &amp; Alternatives"}}></h2>
                <ul className={styles.featureList}>
                    <li><strong>Capital One Venture</strong> ($95):
                    2x miles on everything, simple redemption erasure approach, transfer partners, but fewer travel protections vs. CSP.</li>
                    <li><strong>Amex Gold</strong> ($250):
                    4x dining/groceries, monthly dining credits, but higher fee and smaller set of travel insurances. High earner but more limited for travel coverage.</li>
                    <li><strong>Citi Premier</strong> ($95):
                    3x on travel, dining, gas, groceries, transfer partners.
                    Lacks the robust travel insurance of CSP, but strong multipliers.</li>
                    {/* Using dangerouslySetInnerHTML for ℠ */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Wells Fargo Autograph℠</strong> ($0): 3x on travel, dining, transit, phone, streaming, no annual fee. But no direct partner transfers or easy “erase.” If you want a no-fee approach, you might prefer that, but it’s less flexible for big travel redemptions."}}></li>
                </ul>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{__html:"For travelers wanting a wide net of airline/hotel transfer partners, powerful redemption, and strong travel coverage, the <b>Sapphire Preferred®</b> remains near the top. If you want bigger multipliers but no lounge perks or if you only desire a no-fee approach, other options might suit you better. It depends on your travel/spending patterns, willingness to pay fees, and need for insurance coverage."}}></p>
            </section>

            {/* Section 19: Who Should Get the Card? */}
            <section id="section-19" className={styles.reviewSection}>
                <h2 dangerouslySetInnerHTML={{ __html: "Who Should Get the Chase Sapphire Preferred®?"}}></h2>
                <div className={styles.prosCons}>
                    <div className={styles.pros}>
                        <h3>Yes, If You:</h3>
                        <ul className={styles.featureList}>
                             {/* Using dangerouslySetInnerHTML for ® &amp; */}
                             <li dangerouslySetInnerHTML={{__html:"Spend <strong>significantly on travel &amp; dining</strong>"}}></li>
                             <li dangerouslySetInnerHTML={{__html:"Value <strong>Ultimate Rewards® flexibility</strong>, especially transfer partners"}}></li>
                             <li>Want <strong>solid travel protections</strong> at a moderate $95 fee</li>
                             <li>Plan to <strong>combine Freedoms or Ink cards</strong> for boosted UR synergy</li>
                             <li>Aim to avoid <strong>foreign transaction fees</strong> while traveling abroad</li>
                        </ul>
                    </div>
                    <div className={styles.cons}>
                        <h3>No, If You:</h3>
                        <ul className={styles.featureList}>
                             <li>Rarely travel or prefer <strong>cash-back simplicity</strong></li>
                             <li>Don’t dine out enough to leverage 3x dining, or want bigger grocery multipliers</li>
                             {/* Using dangerouslySetInnerHTML for ® */}
                             <li dangerouslySetInnerHTML={{__html:"Need <strong>airport lounge access</strong> or 1.5¢ redemption in the portal (Chase Sapphire Reserve® might be better)"}}></li>
                             <li>Want a <strong>low/no annual fee</strong> card with simpler rewards</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Section 20: Bottom Line & Disclaimer */}
            <section id="section-20" className={styles.reviewSection}>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <h2 dangerouslySetInnerHTML={{__html:"Final Thoughts on the Sapphire Preferred®"}}></h2>
                <p dangerouslySetInnerHTML={{__html:"The <strong>Chase Sapphire Preferred® Credit Card</strong> remains a near-perfect balance of cost and rewards for 2025 travelers seeking flexible points and reliable coverage. With a strong sign-up bonus, 3x dining, up to 5x on travel (portal), 1.25¢ portal redemption, and a broad set of 1:1 transfer partners, it’s straightforward to see how the $95 fee is easily recouped. If you maximize categories, redeem points wisely, and appreciate trip coverage or potential synergy with Freedoms, the <b>Sapphire Preferred®</b> can anchor your travel wallet for years."}}></p>
                <p dangerouslySetInnerHTML={{__html:"If you want lounge access or a $300 travel credit, consider upgrading to the <b>Sapphire Reserve®</b> once you’re traveling extensively. But for many moderate travelers, <b>Preferred</b> hits the sweet spot in cost-to-benefit ratio—particularly when you factor in the dynamic redemption potential that can net far beyond 1¢ per point."}}></p>
                <h3>Disclaimer</h3>
                <p dangerouslySetInnerHTML={{__html:"Card terms, interest rates, sign-up bonuses, and category multipliers can change. Always verify the latest details with Chase. We may earn an affiliate commission on certain links, but editorial opinions are our own. Examples of redemption or valuations are estimates and vary by route/availability. If you carry a balance, interest charges overshadow the card’s benefits. Refer to official card documentation for up-to-date fees and T&amp;Cs."}}></p>
            </section>

            {/* E-A-T Section */}
             <section id="eat-expertise-authority-trustworthiness" className={`${styles.reviewSection} ${styles.eatSection}`}>
                 <h2 dangerouslySetInnerHTML={{ __html: "Our Commitment to E-A-T: Expertise, Authority &amp; Trustworthiness"}}></h2>
                <p>
                    At <strong>TravelCardInsider</strong>, we aim to:
                </p>
                <h3>1. Expertise</h3>
                <ul className={styles.featureList}>
                    {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Deep UR Knowledge:</strong> Our reviewers hold multiple Chase cards (Sapphire, Freedoms, Ink), thoroughly testing redemption methods—portal, transfers, Pay Yourself Back®, etc."}}></li>
                    <li dangerouslySetInnerHTML={{__html:"<strong>Regular Updates:</strong> We track T&amp;C changes, new partners, or category expansions, ensuring up-to-date coverage for each year’s new offerings."}}></li>
                    <li><strong>Real-World Verification:</strong>
                    We confirm the 3x or 5x categories monthly in statements, verifying how points post for actual flights, hotels, or dinners.</li>
                </ul>
                <h3>2. Authority</h3>
                <ul className={styles.featureList}>
                    <li><strong>Comprehensive Reviews:</strong>
                    Our approach thoroughly addresses categories, redemption, synergy with Freedoms, sign-up bonuses, etc.</li>
                    <li><strong>Quoted in Travel Outlets:</strong>
                    Our insights are regularly cited for unbiased coverage on UR points and advanced redemption strategies.</li>
                    <li><strong>Transparent Affiliations:</strong>
                    If we earn commissions from sign-up links, we disclose them. Our star ratings remain advertiser-independent.</li>
                </ul>
                <h3>3. Trustworthiness</h3>
                <ul className={styles.featureList}>
                    <li><strong>Independently Rated:</strong>
                    We don’t let credit card issuers influence final verdict or rating.</li>
                    <li><strong>Frequent Content Refresh:</strong>
                    We promptly revise articles if major changes (like new 10x categories or partner expansions) happen.</li>
                    <li><strong>Community Feedback:</strong>
                    We welcome user experiences or clarifications in comments—great for verifying real-life redemption stories.</li>
                     {/* Using Link for internal page */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Privacy &amp; Data Protection:</strong> Per our <a href='/privacy-policy'>Privacy Policy</a>, we protect user data from sign-ups or queries responsibly."}}>
                         {/* Corrected above: Use Link component if it's an internal page */}
                         {/* <strong>Privacy &amp; Data Protection:</strong> Per our <Link href="/privacy-policy"><a>Privacy Policy</a></Link>, we protect user data from sign-ups or queries responsibly. */}
                    </li>
                </ul>
                <p dangerouslySetInnerHTML={{__html:"Adhering to E-A-T ensures you receive credible, in-depth guidance on the <strong>Chase Sapphire Preferred®</strong> for your 2025 travel planning."}}></p>
            </section>

          </article>
        </div> {/* Close reviewContainer */}
      </main>

      
    </>
  );
}

export default ChaseSapphirePreferredReviewPage;