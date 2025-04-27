// Example Path: pages/reviews/citi-strata-premier.js
// Or: pages/reviews/[slug].js (if using dynamic routing with 'citi-strata-premier' as slug)

// !!! WARNING: THIS FILE CONTAINS PLACEHOLDER DATA/URLs/DIMENSIONS !!!
// !!! CARD ITSELF MAY BE HYPOTHETICAL - VERIFY ALL DETAILS WITH CITI !!!
// !!! YOU MUST REPLACE ALL PLACEHOLDERS MARKED WITH '!!!' BEFORE DEPLOYMENT !!!

import React, { useState, useEffect, useCallback, useRef } from 'react'; // Hooks for tooltip
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/ReviewPage.module.css'; // Using the REVIEW CSS module
import Header from '../../components/Header'; // Assuming you have these components
import Footer from '../../components/Footer'; // Assuming you have these components

// Simplified data object based on the final template structure
const reviewData = {
  cardName: 'Citi Strata Premier℠ Card',
  title: 'Citi Strata Premier℠ Card – In-Depth 2025 Review',
  description: 'A comprehensive 2000-word review of the Citi Strata Premier℠ Card, covering travel perks, annual fee, points, 2025 updates, pros, cons, and advanced usage tips.',
  keywords: 'Citi, Strata Premier, travel credit card, points, no foreign fees, 2025',
  author: 'TravelCardInsider', // *** REPLACE with your actual author/site name ***
  imageUrl: '/download1.png', // *** VERIFY PATH & FILENAME in /public *** (Placeholder name)
  ratingValue: 7.7, // From Citi Strata Premier HTML
  applyLink: 'https://www.citi.com/credit-cards/citi-strata-premier-credit-card', // *** REPLACE with actual APPLY URL (if card exists) ***
  ratesLink: 'https://www.citi.com/credit-cards/citi-strata-premier-credit-card', // *** VERIFY URL (if card exists) ***
  // Image dimensions (MUST BE ACCURATE for next/image)
  imageWidth: 480, // *** REPLACE with actual image width *** (Example Placeholder)
  imageHeight: 304, // *** REPLACE with actual image height *** (Example Placeholder)
};

// --- Rating Tooltip Content (Customize if needed for Citi Strata) ---
const ratingCriteria = [ // *** VERIFY/CUSTOMIZE these criteria for Citi Strata Rating ***
    'Travel & Transit Rewards (3x)',
    'Dining & Streaming Rewards (2x)',
    'Welcome Bonus Value',
    'Annual Fee ($95)',
    'ThankYou® Points Synergy (w/ Premier®)' // Note dependency
];


function CitiStrataPremierReviewPage() {
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
  // !!! VERIFY all URLs, counts, and details FOR CITI STRATA PREMIER !!!
  // !!! Note: Schema reflects data provided but card may be hypothetical !!!
  const siteUrl = "https://www.travelcardinsider.com"; // *** REPLACE with your actual site URL ***
  const pageUrl = `${siteUrl}/reviews/citi-strata-premier`; // *** REPLACE with your actual page URL ***
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Citi Strata Premier℠ Card",
    "image": `${siteUrl}${reviewData.imageUrl}`, // *** Assuming imageUrl starts with / ***
    "description": "The Citi Strata Premier℠ Card provides elevated points on travel, dining, no foreign transaction fees, and synergy with Citi ThankYou® Points.", // Adjusted description
    "brand": {
      "@type": "Brand",
      "name": "Citi"
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
      "ratingCount": 350, // *** REPLACE with actual or estimated count ***
      "reviewCount": 350  // *** REPLACE with actual or estimated count ***
    },
    "offers": {
      "@type": "Offer",
      "url": reviewData.applyLink.startsWith('http') ? reviewData.applyLink : `${siteUrl}${reviewData.applyLink}`, // *** Ensure full APPLY URL ***
      "priceCurrency": "USD",
      "price": "95", // Annual Fee from HTML
      "availability": "https://schema.org/InStock", // Adjust if card is truly hypothetical/unavailable
      "itemCondition": "https://schema.org/NewCondition"
    }
  };


  return (
    <>
      {/* ===== HEAD SECTION for Metadata & SEO ===== */}
      <Head>
         {/* Using dangerouslySetInnerHTML for ℠ */}
        <title dangerouslySetInnerHTML={{ __html: reviewData.title }}></title>
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

      <Header />

      <main>
        {/* Spacing for fixed header */}
        <div style={{ marginTop: '2rem' }}></div> {/* Adjusted margin from HTML */}

        {/* Review Container using CSS Module */}
        <div className={styles.reviewContainer}>
          <article> {/* Wrap main content in article */}
            {/* ============= REVIEW HEADER ============= */}
            <header className={styles.reviewHeader}>
               {/* Using dangerouslySetInnerHTML for ℠ */}
              <h1 dangerouslySetInnerHTML={{ __html: "Citi Strata Premier℠ Card – In-Depth 2025 Review"}}></h1>

              {/* Section 1 Content (Part of Header Structure in Template) */}
              <section id="section-1">
                 {/* Using dangerouslySetInnerHTML for ℠ and ® */}
                <div className={styles.intro}>
                  <p dangerouslySetInnerHTML={{ __html:"The hypothetical <strong>Citi Strata Premier℠ Card</strong> is designed for travelers seeking flexible <strong>ThankYou® Points</strong> on global travel and dining. With a mid-level <strong>$95 annual fee</strong>, it sits between no-fee cards and premium $495+ products, offering <b>3x</b> in top travel categories, <b>2x</b> on dining, and synergy with the Citi ThankYou® Points ecosystem. This review covers 20 sections—from quick stats (including APR details), advanced usage tips, synergy with other Citi cards, disclaimers, and how it might fit your 2025 travel reward goals."}}></p>
                </div>

                {/* Image Container */}
                <div className={styles.cardImageContainer}>
                  {/* Class name adjusted */}
                   <Image
                     src={reviewData.imageUrl}
                      /* Using dangerouslySetInnerHTML for ℠ */
                     alt={"Citi Strata Premier℠ Card"}
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
                      title="Our TCI rating info"
                      onClick={handleIconClick}
                    >
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
                            {/* Simplified tooltip text */}
                             <p className={styles.tooltipIntro}>Our TCI rating system criteria including rewards, welcome bonus, annual fee, redemption flexibility, travel benefits, APR, foreign transaction fees, user experience, and other features.</p>
                            {/* Use ratingCriteria Array */}
                            {/* <ul className={styles.tooltipList}>
                                {ratingCriteria.map((criterion, index) => <li key={index}>{criterion}</li>)}
                            </ul> */}
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
                    <i dangerouslySetInnerHTML={{__html:"A mid-range travel card for ThankYou® Points fans with solid 3x on major categories, no FTF, and a $95 fee."}}></i>
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
                      <td data-label="Feature">APR Range</td>
                       {/* Using dangerouslySetInnerHTML for ℠ &amp; */}
                      <td data-label="Details" dangerouslySetInnerHTML={{__html:"20.24%- 28.24% Variable (purchases &amp; balance transfers)"}}></td>
                    </tr>
                    <tr>
                      <td data-label="Feature">Sign-Up Bonus</td>
                       {/* Using dangerouslySetInnerHTML for ® */}
                      <td data-label="Details" dangerouslySetInnerHTML={{__html:"Typically ~50k ThankYou® Points after $3k in 3 months"}}></td>
                    </tr>
                    <tr>
                      <td data-label="Feature">Rewards Rate</td>
                       {/* Using dangerouslySetInnerHTML for &amp; */}
                      <td data-label="Details" dangerouslySetInnerHTML={{__html:"Earn a total of 10 ThankYou® Points per $1 spent on Hotel, Car Rentals, and Attractions booked through CitiTravel.com,3x on travel &amp; transit, 2x on dining &amp; select streaming, 1x else"}}></td>
                    </tr>
                    <tr>
                      <td data-label="Feature">Foreign Transaction Fee</td>
                      <td data-label="Details">None</td>
                    </tr>
                    <tr>
                      <td data-label="Feature">Recommended Credit Score</td>
                      <td data-label="Details">Good–Excellent (700+ typical)</td>
                    </tr>
                    <tr>
                      <td data-label="Feature">Travel Protections</td>
                      <td data-label="Details">Some trip cancellation, baggage delay coverage, plus car rental collision (secondary U.S.)</td>
                    </tr>
                    <tr>
                      <td data-label="Feature">Point Transfers</td>
                       {/* Using dangerouslySetInnerHTML for ® */}
                      <td data-label="Details" dangerouslySetInnerHTML={{__html:"Yes, to select airline partners (like Singapore, Virgin Atlantic) at 1:1 if combined with Citi Premier® or Prestige®"}}></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* CTA Section */}
            <section id="cta" className={styles.ctaSection}>
              {/* Using dangerouslySetInnerHTML for ℠ */}
              <h2 dangerouslySetInnerHTML={{__html:"Get the <b>Citi Strata Premier℠ Card</b> Today!"}}></h2>
              <div className={styles.ctaButtons}>
                <a href={reviewData.applyLink} className={`${styles.btn} ${styles.btnApply}`} title="From card issuer's secure site" target="_blank" rel="noopener noreferrer sponsored">Apply Now</a>
                 {/* Using dangerouslySetInnerHTML for ℠ &amp; */}
                <a href={reviewData.ratesLink} className={`${styles.btn} ${styles.btnRates}`} target="_blank" rel="noopener noreferrer sponsored" dangerouslySetInnerHTML={{__html:"See Rates &amp; Fees"}}></a>
              </div>
            </section>

            {/* Section 3: Card Overview & Positioning */}
            <section id="section-3" className={styles.reviewSection}>
               {/* Using dangerouslySetInnerHTML for ℠ & ® */}
              <h2 dangerouslySetInnerHTML={{ __html: "Card Overview &amp; Positioning" }}></h2>
              <p dangerouslySetInnerHTML={{ __html: "The <b>Citi Strata Premier℠</b> sits in the mid-tier travel space, bridging the gap between no-fee cards (like Citi Rewards+®) and premium $495+ products (like Prestige®). At a <strong>$95 annual fee</strong>, it offers <b>3x</b> on travel &amp; transit, <b>2x</b> on dining/streaming, and synergy with the broader ThankYou® Points system. If combined with a top-tier Citi product (like the older Citi Prestige® or Citi Premier®), you could unlock airline/hotel transfer partners at 1:1. This card also includes no foreign transaction fees—an essential for global travelers in 2025. Let’s see how it competes with other mid-level travel solutions." }}></p>
            </section>

            {/* Section 4: Earning Structure & Category Multipliers */}
            <section id="section-4" className={styles.reviewSection}>
                 {/* Using dangerouslySetInnerHTML for ℠ & ® */}
                <h2 dangerouslySetInnerHTML={{ __html: "Earning Structure &amp; Category Multipliers" }}></h2>
                <p dangerouslySetInnerHTML={{ __html: "The <b>Strata Premier℠</b> typically offers:" }}></p>
                <ul className={styles.featureList}>
                     {/* Using dangerouslySetInnerHTML for ® &amp; */}
                    <li dangerouslySetInnerHTML={{ __html: "<strong>3x ThankYou® Points</strong> on travel &amp; transit (airfare, hotels, car rentals, rideshares, trains, parking, tolls, etc.)"}}></li>
                    <li><strong>2x Points</strong> on dining (including fast food, cafes, restaurants)
                    and select streaming services (like Netflix, Hulu, etc.)</li>
                    <li><strong>1x Points</strong> on all other purchases</li>
                </ul>
                 {/* Using dangerouslySetInnerHTML for &amp; */}
                <p dangerouslySetInnerHTML={{ __html: "This structure suits travelers who also have moderate dining habits. The streaming 2x is a small perk—helpful for monthly subscription bills. Meanwhile, 3x on broad travel &amp; transit stands out, especially if your city usage includes ride-hailing, subways, or commuter trains. If you’re a frequent traveler or daily commuter, you can rake in points quickly. However, there’s no official $300 travel credit or lounge pass like premium cards, so weigh that difference if you want top-tier perks." }}></p>
            </section>

             {/* Section 5: Sign-Up Bonus & Point Potential */}
             <section id="section-5" className={styles.reviewSection}>
                <h2 dangerouslySetInnerHTML={{ __html: "Sign-Up Bonus &amp; Point Potential" }}></h2>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{ __html: "A typical bonus might be <b>50,000 ThankYou® Points</b> after $3,000 spend in 3 months. Valuations vary:" }}></p>
                <ul className={styles.featureList}>
                    <li><strong>1¢ per point</strong> if redeemed as statement credits, gift cards, or a direct portal booking</li>
                     {/* Using dangerouslySetInnerHTML for ® &amp; */}
                    <li dangerouslySetInnerHTML={{ __html: "<strong>1.25¢ or higher</strong> if you can combine with certain older Citi Premier® (or Prestige®) for airline/hotel transfers— e.g., Singapore KrisFlyer, Virgin Atlantic, Turkish Miles &amp; Smiles, etc. Some can see 1.5–2¢ or more in business/first class redemptions or sweet-spot flights"}}></li>
                </ul>
                <p>
                    So, 50k points might yield $500 if used straightforwardly or $750–$1,000 in advanced partner usage.
                    That easily offsets the $95 annual fee for year one.
                    If you’re not pairing it with a top-tier Citi card,
                    your redemption might be limited to ~1¢ each.
                    Confirm your approach to maximize returns.
                </p>
            </section>

             {/* Section 6: ThankYou® Points & Transfer Partners */}
             <section id="section-6" className={styles.reviewSection}>
                <h2 dangerouslySetInnerHTML={{ __html: "ThankYou® Points & Transfer Partners" }}></h2>
                 {/* Using dangerouslySetInnerHTML for ® & ℠ */}
                <p dangerouslySetInnerHTML={{ __html: "Citi’s ThankYou® ecosystem offers direct 1:1 transfers primarily if you hold a <b>Citi Premier®</b> or <b>Citi Prestige®</b> (though Prestige is no longer widely available). By itself, the Strata Premier℠ might only redeem at ~1¢ in the ThankYou portal or for gift cards/cash. But if you also hold a <strong>Citi Premier®</strong>, you can combine points from Strata and gain access to airline partners like:"}}></p>
                <ul className={styles.featureList}>
                    <li>Singapore Airlines KrisFlyer</li>
                    <li>Virgin Atlantic Flying Club</li>
                    <li>Air France/KLM Flying Blue</li>
                     {/* Using dangerouslySetInnerHTML for &amp; */}
                    <li dangerouslySetInnerHTML={{__html:"Turkish Airlines Miles &amp; Smiles"}}></li>
                    <li>Etihad Guest</li>
                    <li>And more…</li>
                </ul>
                <p>
                    If you don’t hold a Premier or older Prestige, you’ll be stuck at simpler redemption methods.
                    Meanwhile, if you do pair them,
                    you might see 2¢ or more in premium class redemptions.
                    That synergy is crucial for maximizing 3x from Strata’s travel category.
                </p>
            </section>

            {/* Section 7: No Foreign Transaction Fee & International Usage */}
            <section id="section-7" className={styles.reviewSection}>
                 <h2 dangerouslySetInnerHTML={{ __html: "No Foreign Transaction Fee & International Usage" }}></h2>
                 {/* Using dangerouslySetInnerHTML for ℠ */}
                <p dangerouslySetInnerHTML={{ __html: "The <b>Strata Premier℠</b> charges <strong>no foreign transaction fee</strong>, letting you pay abroad or via foreign online merchants without the usual 3% penalty. Being a <b>Mastercard</b> (or Visa, hypothetically), acceptance is generally wide globally. For a mid-level card, this is significant, ensuring you can continue earning 3x on overseas travel or 2x on dining in foreign countries. If your next big international trip is in 2025, you can rely on Strata for overseas usage without hemorrhaging extra fees."}}></p>
            </section>

            {/* Section 8: 2025 Updates & Potential Changes */}
             <section id="section-8" className={styles.reviewSection}>
                <h2 dangerouslySetInnerHTML={{ __html: "2025 Updates &amp; Potential Changes" }}></h2>
                <ol className={styles.numberedList}>
                    <li><strong>Annual Fee Adjustments:</strong>
                    Citi may shift the fee from $95 to $225 or more,
                    especially if they add new statement credits or lounge perks to remain competitive.</li>
                     {/* Using dangerouslySetInnerHTML for &amp; */}
                    <li dangerouslySetInnerHTML={{ __html: "<strong>Earning Category Tweaks:</strong> The 3x on travel might broaden to 4x in certain promotional windows or 2x streaming could expand to other digital categories. Watch official T&amp;Cs for expansions or short-term promos."}}></li>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{ __html: "<strong>Sign-Up Bonus Fluctuations:</strong> Might see 60k or 70k points. If so, it’s a prime time to apply if you haven’t before. Check Citi’s “48-month” or “24-month” rules for prior ThankYou card sign-up restrictions."}}></li>
                    <li><strong>Travel Protections Upgrades:</strong>
                    Possibly including better baggage insurance or trip delay coverage.
                    Citi sometimes refines coverage based on competitor pressure, e.g., from Chase or Amex mid-tier products.</li>
                </ol>
                <p>
                    Typically, Citi modifies card benefits periodically.
                    Keep an eye on official updates for the Strata line,
                    especially synergy changes with ThankYou partners or the possibility of statement credits that offset the fee.
                </p>
            </section>

            {/* Section 9: Real-Life Example Table */}
            <section id="section-9" className={styles.reviewSection}>
                <h2>Real-Life Example: Annual Spend & Points Earned</h2>
                <p>
                    Suppose you spend:
                </p>
                <ul className={styles.featureList}>
                     {/* Using dangerouslySetInnerHTML for &amp; */}
                    <li dangerouslySetInnerHTML={{ __html: "$4,000 on travel &amp; transit (flights, trains, ride-hailing)"}}></li>
                    <li>$3,000 on dining</li>
                    <li>$1,200 on streaming services throughout the year</li>
                    <li>$15,000 on general overhead (1x category)</li>
                </ul>
                <p>
                    Let’s see approximate points:
                </p>
                <div className={styles.tableContainer}>
                    <table className={styles.statsTable}>
                        <thead>
                            <tr>
                                <th>Category</th>
                                <th>Annual Spend</th>
                                <th>Points per $</th>
                                <th>Total Points</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                 {/* Using dangerouslySetInnerHTML for &amp; */}
                                <td data-label="Category" dangerouslySetInnerHTML={{__html:"Travel &amp; Transit"}}></td>
                                <td data-label="Annual Spend">$4,000</td>
                                <td data-label="Points per $">3x</td>
                                <td data-label="Total Points">12,000</td>
                            </tr>
                            <tr>
                                <td data-label="Category">Dining</td>
                                <td data-label="Annual Spend">$3,000</td>
                                <td data-label="Points per $">2x</td>
                                <td data-label="Total Points">6,000</td>
                            </tr>
                            <tr>
                                <td data-label="Category">Streaming</td>
                                <td data-label="Annual Spend">$1,200</td>
                                <td data-label="Points per $">2x</td>
                                <td data-label="Total Points">2,400</td>
                            </tr>
                            <tr>
                                <td data-label="Category">All Other</td>
                                <td data-label="Annual Spend">$15,000</td>
                                <td data-label="Points per $">1x</td>
                                <td data-label="Total Points">15,000</td>
                            </tr>
                            <tr style={{fontWeight: 'bold', borderTop: '2px solid #dee2e6'}}>
                                <th data-label="Category">Total</th>
                                <th data-label="Annual Spend">$23,200</th>
                                <th data-label="Points per $">—</th>
                                <th data-label="Total Points">35,400</th>
                            </tr>
                        </tbody>
                    </table>
                </div>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{ __html: "That’s <b>35,400</b> from normal spending alone. Add the sign-up bonus (~50k), you’d have ~85,400 total. If you redeem at 1¢ each, that’s $854, or if you have a Citi Premier® to do partner transfers at ~1.5–2¢ each, $1,200–$1,700 potential. Subtract the $95 fee, you still net hundreds in value, especially if you were paying for a travel card to avoid foreign fees anyway."}}></p>
            </section>

            {/* Section 10: Competitor Analysis */}
             <section id="section-10" className={styles.reviewSection}>
                <h2>Competitor Analysis</h2>
                <p>
                    In the mid-tier travel card realm:
                </p>
                <div className={styles.tableContainer}>
                    <table className={styles.statsTable}>
                        <thead>
                            <tr>
                                <th>Card</th>
                                <th>Annual Fee</th>
                                <th>Rewards</th>
                                <th>Key Advantage</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                 {/* Using dangerouslySetInnerHTML for ℠ & ® */}
                                <td data-label="Card" dangerouslySetInnerHTML={{__html:"Citi Strata Premier℠"}}></td>
                                <td data-label="Annual Fee">$95</td>
                                <td data-label="Rewards">3x travel, 2x dining/streaming, 1x else</td>
                                <td data-label="Key Advantage" dangerouslySetInnerHTML={{__html:"No FTF, synergy with ThankYou if also holding Premier®"}}></td>
                            </tr>
                            <tr>
                                <td data-label="Card">Chase Sapphire Preferred</td>
                                <td data-label="Annual Fee">$95</td>
                                <td data-label="Rewards">2x travel/dining, 1.25¢ in portal</td>
                                <td data-label="Key Advantage">UR ecosystem, cheaper fee</td>
                            </tr>
                            <tr>
                                <td data-label="Card">Amex Green Card</td>
                                <td data-label="Annual Fee">$150</td>
                                <td data-label="Rewards">3x travel/dining, $100 CLEAR credit</td>
                                <td data-label="Key Advantage">Membership Rewards synergy, no FTF</td>
                            </tr>
                            <tr>
                                <td data-label="Card">Capital One Venture</td>
                                <td data-label="Annual Fee">$95</td>
                                <td data-label="Rewards">2x on everything</td>
                                <td data-label="Key Advantage">Simple approach, partial partner transfers</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                 {/* Using dangerouslySetInnerHTML for ℠ ® */}
                <p dangerouslySetInnerHTML={{ __html: "The <b>Strata Premier℠</b> is slightly more expensive ($95) than those $95–$150 cards, but offers a full 3x on broad travel/transit and 2x dining. If you frequently spend on transit or streaming, that’s appealing. But if you want a cheaper approach (like $95) or prefer an established system (UR or MR), you might consider alternatives unless you specifically want to build out Citi’s ThankYou suite."}}></p>
            </section>

            {/* Section 11: Additional Benefits & Travel Protections */}
            <section id="section-11" className={styles.reviewSection}>
                 <h2 dangerouslySetInnerHTML={{ __html: "Additional Benefits &amp; Travel Protections"}}></h2>
                 {/* Using dangerouslySetInnerHTML for ℠ &amp; */}
                <p dangerouslySetInnerHTML={{ __html: "The <b>Strata Premier℠</b> typically includes:" }}></p>
                <ul className={styles.featureList}>
                    <li dangerouslySetInnerHTML={{ __html: "<strong>Trip Cancellation/Interruption Coverage:</strong> Up to a certain limit if you pay with the card—check official T&amp;Cs for coverage amounts."}}></li>
                    <li><strong>Lost Baggage Assistance:</strong>
                    Some coverage if your luggage is lost or stolen.
                    Usually secondary to airline reimbursements.
                    </li>
                    <li><strong>Car Rental Insurance (Secondary):</strong>
                    In the U.S., it’s typically secondary, but may be primary abroad.
                    Check the guide to benefits for specifics.</li>
                     {/* Using dangerouslySetInnerHTML for &amp; */}
                    <li dangerouslySetInnerHTML={{ __html: "<strong>Purchase Protection &amp; Extended Warranty:</strong> Common for Citi travel cards, up to certain coverage windows (90–120 days purchase protection, extra year on warranties, etc.)"}}></li>
                    <li><strong>No FTF:</strong>
                    We’ve mentioned, but that’s a big advantage if you travel internationally or buy from foreign websites.</li>
                </ul>
                <p>
                    Note that coverage or dollar limits might be less robust than premium cards like Citi Prestige or some competitor $450+ products.
                    But for a mid-level $95 fee, it’s decent.
                    Always read the official benefit guide upon receiving your card.
                </p>
            </section>

            {/* Section 12: APR & Carrying a Balance */}
            <section id="section-12" className={styles.reviewSection}>
                 <h2 dangerouslySetInnerHTML={{ __html: "APR &amp; Carrying a Balance"}}></h2>
                <p>
                    The variable APR typically ranges from <b>17.99–26.99%</b>.
                    Like most travel cards, that’s high enough that carrying a balance erodes your points benefit.
                    If you revolve significant amounts,
                    the interest cost likely overwhelms any 3x or 2x gain.
                    This card is best for paying in full monthly or only using short revolving periods.
                    Also watch for potential 0% intro offers on balance transfers for 12–15 months—
                    sometimes Citi includes them, though a 3–5% fee might apply.
                    If your main goal is carrying a big debt,
                    a dedicated 0% APR card is likely more suitable than a travel rewards product.
                </p>
            </section>

             {/* Section 13: Potential Downsides */}
             <section id="section-13" className={styles.reviewSection}>
                <h2>Potential Downsides</h2>
                <ul className={styles.featureList}>
                    <li><strong>$95 Annual Fee:</strong>
                    Higher than the $95 typical mid-tier.
                    You must out-earn that difference in 3x/2x categories or synergy with ThankYou partners.</li>
                    <li><strong>No Premium Perks (lounge, big travel credit):</strong>
                    This is not a Prestige-level card, so no lounge membership or $250–$300 travel credits typically found in premium lines.</li>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Limited Partner Transfer if Standalone:</strong> Without Citi Premier/Prestige, you can’t do direct airline 1:1 transfers, restricting you to simpler cash/portal redemptions near 1¢ each."}}></li>
                    <li><strong>Secondary Car Rental Coverage (in U.S.):</strong>
                    Some competitor mid-tier cards (e.g., Chase Sapphire Preferred) might provide primary coverage for rentals.
                    Citi usually offers secondary domestically, so you'd rely on your personal insurance first.</li>
                    <li><strong>High APR if you revolve:</strong>
                    Common among travel cards.
                    Recommending pay in full monthly to actually net gains.</li>
                </ul>
            </section>

            {/* Section 14: Advanced Tips & Strategies */}
            <section id="section-14" className={styles.reviewSection}>
                 <h2 dangerouslySetInnerHTML={{ __html: "Advanced Tips &amp; Strategies"}}></h2>
                <ol className={styles.numberedList}>
                    {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Pair with Citi Premier® or Prestige®:</strong> Combine points for 1:1 airline/hotel transfers. Earning 3x on Strata for travel plus the Premier’s 3x on groceries/gas can accelerate totals, culminating in robust partner redemption."}}></li>
                    <li><strong>Check Category Coding for Transit:</strong>
                    Ensure your ride-hailing, tolls, or bus passes code as “transit.”
                    Some local operators might appear as 3x or not, depending on merchant codes.</li>
                    <li><strong>Use for International Dining:</strong>
                    You get 2x plus no foreign fee.
                    Combine with local experiences globally.
                    If you hold other dining cards, see if 2x here or a 3–4x from a competitor is better.</li>
                    <li><strong>Track Seasonal Promotions:</strong>
                    Citi occasionally runs promotions—like extra points at certain retailers or limited-time 5x.
                    Activate them in your online account for bigger returns.</li>
                    <li><strong>Don’t Over-Spend for the Bonus:</strong>
                    The $3k in 3 months is moderate,
                    but ensure normal monthly budgets—avoid paying interest that offsets your welcome points.</li>
                </ol>
            </section>

            {/* Section 15: Another Real-Life Example */}
            <section id="section-15" className={styles.reviewSection}>
                <h2>Another Example: City Dweller with Frequent Transit</h2>
                <p>
                    Consider a city resident spending heavily on public transit, ride-hailing,
                    plus some domestic flights:
                </p>
                <ul className={styles.featureList}>
                    <li>$5,000 in local commuting (trains, subways, buses, parking) plus $2,000 flights = $7k at 3x</li>
                    <li>$4,000 dining, $1,000 streaming = $5k at 2x</li>
                    <li>$10,000 general overhead = 1x</li>
                </ul>
                <p>
                    That’s $22k total.
                    The 3x portion is $7k = 21,000 points,
                    2x portion is $5k = 10,000 points,
                    1x portion is 10,000— sum = 41,000 from spend.
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <span dangerouslySetInnerHTML={{__html:"Add a 50k sign-up bonus = 91,000 total. If used at 1¢, that’s $910, or if you pair with Premier® for ~1.5–2¢, $1,365–$1,820 potential. The $95 annual fee looks small by comparison if you exploit the card’s travel/dining categories effectively."}}></span>
                </p>
            </section>

            {/* Section 16: Synergy with Other Citi Cards */}
            <section id="section-16" className={styles.reviewSection}>
                <h2>Synergy with Other Citi Cards</h2>
                {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{__html:"As noted, <b>Citi</b> fosters a multi-card approach for advanced ThankYou® usage:"}}></p>
                <ul className={styles.featureList}>
                    {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Citi Premier®:</strong> 3x on groceries/gas, plus 1:1 airline transfer for ThankYou® points. Combine with Strata’s 3x travel for more diversified coverage. Then transfer all points to a single ThankYou account for big airline/hotel redemption potential."}}></li>
                    {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Citi Double Cash®:</strong> Earn 2% on everything else. If you can funnel those points into ThankYou® at 1:1, plus Strata’s 3x on travel, that’s a well-rounded system. (Remember, the direct 2% from Double Cash can be converted to ThankYou points if you also hold a ThankYou card like Strata or Premier.)"}}></li>
                    {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Citi Custom Cash®:</strong> 5% on your top spend category up to $500 monthly. Combine that with Strata’s broad travel coverage. All these ThankYou points can pool for bigger airline/hotel redemptions, provided you have a transfer-unlocking card like Premier or Prestige."}}></li>
                </ul>
                {/* Using dangerouslySetInnerHTML for ℠ &amp; ® */}
                <p dangerouslySetInnerHTML={{__html:"In short, <b>Strata</b> can anchor your travel &amp; transit 3x, while other Citi cards fill additional categories (groceries, general spend, 5% top category). Then unify them for maximum ThankYou synergy. If you lack a Premier/Prestige, you remain limited to simpler redemption rates at ~1¢ each, diminishing the advanced travel payoff."}}></p>
            </section>

            {/* Section 17: Redemption & ThankYou Value Insights */}
            <section id="section-17" className={styles.reviewSection}>
                 {/* Using dangerouslySetInnerHTML for ® &amp; */}
                <h2 dangerouslySetInnerHTML={{__html:"Redemption &amp; ThankYou® Value Insights"}}></h2>
                <p>
                    Key routes if you can transfer:
                </p>
                <ul className={styles.featureList}>
                    <li><strong>Singapore KrisFlyer:</strong>
                    Redeem for Singapore Airlines premium cabins, or Star Alliance partners (like United).
                    Possibly 2¢ or more each in business/first class redemptions.</li>
                    <li><strong>Virgin Atlantic Flying Club:</strong>
                    Great for Delta One flights on certain routes, often 2–3¢ each in prime deals.
                    </li>
                    <li><strong>Air France/KLM Flying Blue:</strong>
                    Promo awards can yield ~2¢ if flexible.
                    </li>
                     {/* Using dangerouslySetInnerHTML for &amp; */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Turkish Miles &amp; Smiles:</strong> Cheap domestic U.S. flights on United or sweet spots to Europe."}}></li>
                </ul>
                {/* Using dangerouslySetInnerHTML for ® &amp; */}
                <p dangerouslySetInnerHTML={{__html:"If you only hold Strata, you might face a ~1¢ redemption for statement credits or direct portal bookings. That’s fine but less lucrative than partner sweet spots. If advanced redemptions excite you, it’s crucial to pair with a full-blown ThankYou transfer card (like Citi Premier®). Then your 3x on travel &amp; transit can yield an effective 4.5–6% back in real travel value."}}></p>
            </section>

            {/* Section 18: Competitor & Alternative Cards */}
             <section id="section-18" className={styles.reviewSection}>
                <h2 dangerouslySetInnerHTML={{ __html: "Competitor &amp; Alternative Cards"}}></h2>
                 {/* Using dangerouslySetInnerHTML for ℠ */}
                <p dangerouslySetInnerHTML={{__html:"If the <b>Strata Premier℠</b> doesn’t align, or you want alternatives:"}}></p>
                <ul className={styles.featureList}>
                    {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Citi Premier®</strong> ($95): 3x on groceries/gas, dining, hotels, airfare. Lower fee, direct partner transfer. However, no 3x on local transit specifically, but more broad 3x coverage. Many prefer Premier due to $95 cost vs. $95 here."}}></li>
                    <li><strong>Chase Sapphire Preferred</strong> ($95):
                    2x on travel/dining, 1.25¢ in portal.
                    UR partners are strong (United, Southwest, Hyatt).
                    Cheaper fee if you prefer a simpler approach or different partner lineup.</li>
                    <li><strong>Amex Green Card</strong> ($150):
                    3x on travel/dining, statement credits for CLEAR or LoungeBuddy.
                    Ties into Membership Rewards transfers.
                    Another mid-tier competitor with strong travel/dining synergy.</li>
                    <li><strong>Capital One Venture Rewards</strong> ($95):
                    2x on everything, partial partner list.
                    Simpler if you want no category detail, though partner values can be decent.
                    </li>
                </ul>
                 {/* Using dangerouslySetInnerHTML for ℠ &amp; */}
                <p dangerouslySetInnerHTML={{__html:"The <b>Strata Premier℠</b> is unique for 3x travel &amp; transit plus 2x dining/streaming at a $95 fee. Decide if the incremental cost vs. a $95–$150 competitor is justified by your spend patterns or streaming usage, and how the synergy with other Citi products might matter."}}></p>
            </section>

             {/* Section 19: Who Should Get the Card? */}
             <section id="section-19" className={styles.reviewSection}>
                <h2 dangerouslySetInnerHTML={{ __html: "Who Should Get the Citi Strata Premier℠ Card?"}}></h2>
                 {/* Using dangerouslySetInnerHTML for ℠ &amp; ® */}
                 <div className={styles.prosCons}>
                    <div className={styles.pros}>
                        <h3>Yes, If You:</h3>
                        <ul className={styles.featureList}>
                            <li dangerouslySetInnerHTML={{__html:"Spend significantly on <strong>transit &amp; travel</strong> to leverage 3x"}}></li>
                            <li dangerouslySetInnerHTML={{__html:"<strong>Value dining &amp; streaming</strong> at 2x"}}></li>
                            <li dangerouslySetInnerHTML={{__html:"Want a mid-tier card with <strong>no foreign fees</strong> &amp; modest annual fee"}}></li>
                            <li dangerouslySetInnerHTML={{__html:"Plan synergy with <strong>Citi Premier®</strong> (for 1:1 partner transfers) or hold older Prestige"}}></li>
                            <li>Pay statements in full monthly (avoid high APR interest)</li>
                        </ul>
                    </div>
                    <div className={styles.cons}>
                        <h3>No, If You:</h3>
                        <ul className={styles.featureList}>
                            <li>Prefer a <strong>lower annual fee</strong> ($95 or no fee) for a travel card or want <strong>premium perks</strong> from $450+ lines</li>
                            <li>Want <strong>primary car rental coverage</strong> or robust trip insurance (some competitor mid-tiers are better)</li>
                            <li>Need a <strong>bigger lounge/credit/travel insurance suite</strong> akin to premium cards</li>
                            <li dangerouslySetInnerHTML={{__html:"Expect 1:1 partner transfers <strong>without</strong> also holding Citi Premier/Prestige"}}></li>
                            <li>Carry large balances, thus overshadowing your 3x/2x with ~17–27% interest</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Section 20: Final Thoughts & Disclaimer */}
            <section id="section-20" className={styles.reviewSection}>
                 <h2 dangerouslySetInnerHTML={{ __html:"Final Thoughts &amp; Disclaimer"}}></h2>
                 {/* Using dangerouslySetInnerHTML for ℠ & ® */}
                <p dangerouslySetInnerHTML={{__html:"The <strong>Citi Strata Premier℠ Card</strong> (hypothetical) offers a distinctive <b>3x</b> approach to travel &amp; transit, <b>2x</b> on dining &amp; streaming, a <strong>$95 annual fee</strong>, and synergy with Citi’s ThankYou® Points—particularly if you also hold Citi Premier® or an older Prestige® for airline/hotel transfers. As a mid-level travel card, it’s a decent competitor if you frequently commute or explore the world with no foreign fee. You won’t get lounge access or lavish statement credits here, but you can yield strong returns if you prefer modest fees and a robust 3x category for flights, trains, ride-hailing, etc. For 2025, it remains appealing if your city/travel lifestyle aligns with these categories, and you want a stepping stone toward bigger ThankYou® redemption potential."}}></p>
                 {/* Using dangerouslySetInnerHTML for ℠ &amp; ® */}
                <p dangerouslySetInnerHTML={{__html:"<strong>Disclaimer:</strong> This card (Citi Strata Premier℠) is a hypothetical. Real Citi products may differ. Terms, APR, sign-up bonus, or synergy with ThankYou partners can change. Confirm the latest details with Citi. We may earn affiliate commissions from certain links, but editorial opinions remain our own. If you revolve a balance at ~17–27% APR, interest quickly negates your points gains. Evaluate whether 3x travel, 2x dining, and a $95 fee best suit your budget and reward preferences."}}></p>
            </section>

            {/* E-A-T Section */}
             <section id="eat-expertise-authority-trustworthiness" className={`${styles.reviewSection} ${styles.eatSection}`}>
                 <h2 dangerouslySetInnerHTML={{ __html: "Our Commitment to E-A-T: Expertise, Authority &amp; Trustworthiness"}}></h2>
                <p>
                    At <strong>TravelCardInsider</strong>, we prioritize
                    reliable, unbiased reviews so you can make informed
                    credit decisions. We adhere to Google’s E‑A‑T
                    (Expertise, Authority, and Trustworthiness) guidelines
                    through:
                </p>
                <h3>1. Expertise</h3>
                <ul className={styles.featureList}>
                    <li><strong>Specialized Research:</strong>
                    Our writers and analysts have years of experience
                    in credit cards and travel rewards, ensuring thorough,
                    accurate content.</li>
                    <li><strong>Real-Time Updates:</strong>
                    We continually check official issuer materials
                    and user data to maintain current rates and terms.</li>
                    <li dangerouslySetInnerHTML={{ __html: "<strong>Conferences &amp; Webinars:</strong> Our team attends financial and travel events, enriching our knowledge base with industry insights."}}></li>
                </ul>
                <h3>2. Authority</h3>
                <ul className={styles.featureList}>
                     {/* Using dangerouslySetInnerHTML for ℠ */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Detailed Coverage:</strong> This review offers an exhaustive look at the <b>Citi Strata Premier℠ Card</b>, from fees to redemption tips."}}></li>
                    <li><strong>Trusted By Major Outlets:</strong>
                    Our articles are frequently cited by national finance
                    and travel news sites.</li>
                    <li><strong>Full Disclosure:</strong>
                    If affiliate links or promotions exist, we clearly state them,
                    ensuring objective editorial content.</li>
                </ul>
                <h3>3. Trustworthiness</h3>
                <ul className={styles.featureList}>
                    <li><strong>Independent Analysis:</strong>
                    We never let advertisers influence our ratings or opinions.</li>
                    <li><strong>Frequent Revisions:</strong>
                    We revise reviews whenever new offers appear,
                    so details remain accurate.</li>
                    <li><strong>Community Feedback:</strong>
                    We encourage open discussion in comments,
                    fostering transparency and additional user insights.</li>
                    <li>
                        <strong>Data Security:</strong> We prioritize user privacy and follow best practices,
                        outlined in our <Link href="/privacy-policy"><a>Privacy Policy</a></Link>.
                    </li>
                </ul>
                 {/* Using dangerouslySetInnerHTML for ℠ */}
                <p dangerouslySetInnerHTML={{__html:"By following these E‑A‑T principles, we aim to guide you responsibly toward a credit card that fits your needs and maximizes your travel rewards."}}></p>
            </section>

          </article>
        </div> {/* Close reviewContainer */}
      </main>

      <Footer />
    </>
  );
}

export default CitiStrataPremierReviewPage;