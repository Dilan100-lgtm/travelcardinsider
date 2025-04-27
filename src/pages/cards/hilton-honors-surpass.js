// Example Path: pages/reviews/hilton-honors-surpass.js
// Or: pages/reviews/[slug].js (if using dynamic routing with 'hilton-honors-surpass' as slug)

// !!! WARNING: THIS FILE CONTAINS PLACEHOLDER DATA/URLs/DIMENSIONS !!!
// !!! CTA LINKS IN SOURCE HTML WERE INCORRECT - PLACEHOLDERS USED BELOW !!!
// !!! E-A-T SECTION IN SOURCE HTML WAS INCORRECT - GENERIC TEXT USED BELOW !!!
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
  cardName: 'Hilton Honors American Express Surpass® Card',
  title: 'Hilton Honors American Express Surpass® Card – In-Depth 2025 Review',
  description: 'A comprehensive 2000-word review of the Hilton Honors American Express Surpass® Card, focusing on travel benefits, earning potential, Hilton Honors synergy, 2025 updates, pros, cons, and advanced usage tips.',
  keywords: 'Hilton Honors, Amex Surpass, hotel credit card, travel rewards, 2025',
  author: 'TravelCardInsider', // *** REPLACE with your actual author/site name ***
  imageUrl: '/NUS000000328_480x304_straight_withname.avif', // *** VERIFY PATH in /public ***
  ratingValue: 8.1, // From Hilton Surpass HTML
  applyLink: 'https://www.americanexpress.com/us/credit-cards/card/hilton-honors-surpass/', // *** REPLACE: Source HTML had incorrect Discover link ***
  // !!! Source HTML had incorrect Discover link for Rates & Fees. Using placeholder. Find correct Amex link. !!!
  ratesLink: 'https://www.americanexpress.com/us/credit-cards/card/hilton-honors-surpass/', // *** REPLACE WITH CORRECT RATES/FEES LINK ***
  // Image dimensions (MUST BE ACCURATE for next/image) - Guessed from filename
  imageWidth: 480, // *** REPLACE with actual image width ***
  imageHeight: 304, // *** REPLACE with actual image height ***
};

// --- Rating Tooltip Content (Customize if needed for Hilton Surpass) ---
const ratingCriteria = [ // *** VERIFY/CUSTOMIZE these criteria for Hilton Surpass Rating ***
    'Hilton Points Earning Rate (12x/6x/3x)',
    'Automatic Gold Status Value',
    'Priority Pass™ Lounge Visits (10)',
    'Welcome Bonus Value',
    'Annual Fee ($95)'
];

function HiltonHonorsSurpassReviewPage() {
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
  // !!! VERIFY all URLs, counts, and details FOR HILTON SURPASS AMEX !!!
  const siteUrl = "https://www.travelcardinsider.com"; // *** REPLACE with your actual site URL ***
  const pageUrl = `${siteUrl}/reviews/hilton-honors-surpass`; // *** REPLACE with your actual page URL ***
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Hilton Honors American Express Surpass® Card",
    "image": `${siteUrl}${reviewData.imageUrl}`, // *** Assuming imageUrl starts with / ***
    "description": "The Hilton Honors American Express Surpass® Card offers high rewards at Hilton properties (12x), automatic Gold status, lounge passes, and synergy in the Hilton Honors ecosystem.", // Adjusted description
    "brand": {
      "@type": "Brand",
      "name": "American Express" // Issuer
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
      "ratingCount": 610, // *** REPLACE with actual or estimated count ***
      "reviewCount": 610  // *** REPLACE with actual or estimated count ***
    },
    "offers": {
      "@type": "Offer",
      "url": reviewData.applyLink.startsWith('http') ? reviewData.applyLink : `${siteUrl}${reviewData.applyLink}`, // *** Ensure full APPLY URL ***
      "priceCurrency": "USD",
      "price": "95", // Annual Fee for Hilton Surpass
      "availability": "https://schema.org/InStock",
      "itemCondition": "https://schema.org/NewCondition"
    }
     // Consider adding "provider": { "@type": "Organization", "name": "Hilton" }
  };


  return (
    <>
      {/* ===== HEAD SECTION for Metadata & SEO ===== */}
      <Head>
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
        <link rel="alternate" href="https://www.travelcardinsider.com" hreflang="en-us" />
      </Head>

      <Header />

      <main>
        {/* Spacing for fixed header */}
        <div style={{ marginTop: '5rem' }}></div> {/* Reverted to 5rem like template */}

        {/* Review Container using CSS Module */}
        <div className={styles.reviewContainer}>
          <article> {/* Wrap main content in article */}
            {/* ============= REVIEW HEADER ============= */}
            <header className={styles.reviewHeader}>
               {/* Using dangerouslySetInnerHTML for ® */}
              <h1 dangerouslySetInnerHTML={{ __html: "Hilton Honors American Express Surpass® Card – In-Depth 2025 Review"}}></h1>

              {/* Section 1 Content (Part of Header Structure in Template) */}
              <section id="section-1">
                 {/* Using dangerouslySetInnerHTML for ® & ™ */}
                <div className={styles.intro}>
                  <p dangerouslySetInnerHTML={{ __html: "The <strong>Hilton Honors American Express Surpass® Card</strong> hits the sweet spot for travelers wanting <strong>high-value Hilton points</strong>, <strong>automatic Gold status</strong>, and moderate perks without the $450+ premium fees. Priced at <strong>$95/year</strong>, it offers <strong>up to 12x</strong> at Hilton properties, <strong>6x</strong> at U.S. restaurants/groceries/gas, plus additional benefits like 10 free lounge passes via Priority Pass™. This ~2,000-word review covers 20 sections—from quick stats (including APR details) to synergy with Hilton’s loyalty program, disclaimers, advanced usage tips, and how it performs in 2025’s travel rewards environment." }}></p>
                </div>

                {/* Image Container */}
                <div className={styles.cardImageContainer}>
                  {/* Class name adjusted */}
                   <Image
                     src={reviewData.imageUrl}
                      /* Using dangerouslySetInnerHTML for ® */
                     alt={"Hilton Honors American Express Surpass® Card"}
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
                      className={styles.infoIconButton}
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
                            {/* Using ratingCriteria array */}
                            <p className={styles.tooltipIntro}>Our TCI rating system criteria including rewards, welcome bonus, annual fee, redemption flexibility, travel benefits, APR, foreign transaction fees, user experience, and other features.</p>
                            
                                 
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
                    <i dangerouslySetInnerHTML={{__html:"A strong mid-tier Hilton card with high earning, Gold status, and 10 lounge visits for a $95 fee—ideal for frequent Hilton guests."}}></i>
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
                    {/* Data from HTML Table */}
                    <tr>
                      <td data-label="Feature">Annual Fee</td>
                      <td data-label="Details">$95</td>
                    </tr>
                    <tr>
                      <td data-label="Feature">APR Range</td>
                      <td data-label="Details" dangerouslySetInnerHTML={{__html:"19.49%–28.49% Variable"}}></td>
                    </tr>
                    <tr>
                      <td data-label="Feature">Sign-Up Bonus</td>
                      <td data-label="Details">Often ~130k–150k Hilton Honors Points after $2k in 3 months (varies by promo)</td>
                    </tr>
                    <tr>
                      <td data-label="Feature">Rewards Rate</td>
                      <td data-label="Details">12x at Hilton properties, 6x at U.S. restaurants/groceries/gas, 3x elsewhere</td>
                    </tr>
                    <tr>
                      <td data-label="Feature">Lounge Benefit</td>
                       {/* Using dangerouslySetInnerHTML for ™ */}
                      <td data-label="Details" dangerouslySetInnerHTML={{__html:"10 Priority Pass™ visits yearly (registrations required)"}}></td>
                    </tr>
                    <tr>
                      <td data-label="Feature">Status Benefit</td>
                      <td data-label="Details">Automatic Hilton Honors Gold, path to Diamond via $40k annual spend</td>
                    </tr>
                    <tr>
                      <td data-label="Feature">Foreign Transaction Fee</td>
                      <td data-label="Details">None</td>
                    </tr>
                    <tr>
                      <td data-label="Feature">Recommended Credit Score</td>
                      <td data-label="Details">Good–Excellent (700+ typically)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

             {/* CTA Section - !!! USES PLACEHOLDER LINKS DUE TO SOURCE HTML ERROR !!! */}
             <section id="cta" className={styles.ctaSection}>
                {/* Using dangerouslySetInnerHTML for ® */}
                <h2 dangerouslySetInnerHTML={{__html:"Get the <b>Hilton Honors American Express Surpass® Card</b> Today!"}}></h2>
                <div className={styles.ctaButtons}>
                     {/* !!! WARNING: REPLACE hrefs with CORRECT Apply and Rates links for Hilton Surpass !!! */}
                    <a href={reviewData.applyLink} className={`${styles.btn} ${styles.btnApply}`} title="From card issuer's secure site" target="_blank" rel="noopener noreferrer sponsored">Apply Now</a>
                    <a href={reviewData.ratesLink} className={`${styles.btn} ${styles.btnRates}`} target="_blank" rel="noopener noreferrer sponsored" dangerouslySetInnerHTML={{ __html:"See Rates &amp; Fees"}}></a>
                </div>
            </section>

            {/* Section 3: Card Overview & Positioning */}
            <section id="section-3" className={styles.reviewSection}>
               {/* Using dangerouslySetInnerHTML for ® */}
                <h2 dangerouslySetInnerHTML={{ __html: "Card Overview &amp; Positioning" }}></h2>
                <p dangerouslySetInnerHTML={{ __html: "The <strong>Hilton Honors American Express Surpass®</strong> is a mid-tier co-branded hotel card bridging simpler no-fee versions (like the basic Hilton Amex) and the luxury $450+ Aspire Card. At <strong>$95</strong>, Surpass® grants <strong>Gold status</strong> automatically, robust daily earning on Hilton stays and select everyday categories, plus 10 Priority Pass lounge visits. For those who want more than base-level Hilton perks but don’t require the full premium scope (Aspire’s diamond status, resort credits, etc.), Surpass can significantly enhance your Hilton experience in 2025 without a huge fee." }}></p>
            </section>

            {/* Section 4: Earning Rates & Hilton Multipliers */}
            <section id="section-4" className={styles.reviewSection}>
                <h2 dangerouslySetInnerHTML={{ __html: "Earning Rates &amp; Hilton Multipliers" }}></h2>
                <p>
                    Surpass typically offers:
                </p>
                <ul className={styles.featureList}>
                    <li><strong>12x Hilton Honors Points</strong> at Hilton properties worldwide</li>
                    <li><strong>6x Points</strong> at U.S. restaurants, U.S. supermarkets, U.S. gas stations</li>
                    <li><strong>3x Points</strong> on all other eligible purchases</li>
                </ul>
                <p>
                    Combined with the standard Hilton base points (10x at most brands),
                    your total points can climb quickly on stays.
                    Also, Gold status yields a bonus on base points (usually 80% extra),
                    further amplifying your net.
                    The 6x for common everyday categories (dining, groceries, gas)
                    is quite generous for a $95 card,
                    though you must factor in that <strong>Hilton points</strong> are typically valued lower (0.5¢ on average, though can be higher or lower depending on redemption).
                </p>
            </section>

             {/* Section 5: Sign-Up Bonus & Potential Redemption */}
             <section id="section-5" className={styles.reviewSection}>
                <h2 dangerouslySetInnerHTML={{ __html: "Sign-Up Bonus &amp; Potential Redemption" }}></h2>
                <p>
                    Often, Surpass’s sign-up bonus hovers around <strong>130k–150k</strong> Hilton Honors points after spending ~$2,000 in 3 months,
                    with occasional statement credits or free night certificates.
                    Valuing Hilton points at ~0.5¢ each,
                    150k can be ~$750 in lodging if used carefully (sometimes 0.6–0.7¢).
                    Enough for multiple nights at mid-tier Hiltons or 1–2 nights at a higher-tier property.
                    If used at lower category hotels, you could stretch it even further.
                    With 12x on Hilton spending plus the sign-up,
                    you can accumulate large point balances quickly for 2025 vacations or business stays.
                </p>
            </section>

            {/* Section 6: Automatic Gold Status & Path to Diamond */}
            <section id="section-6" className={styles.reviewSection}>
                <h2>Automatic Gold Status & Path to Diamond</h2>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{ __html: "One of the Surpass’s strongest draws is <strong>automatic Hilton Gold</strong>. Gold includes:"}}></p>
                <ul className={styles.featureList}>
                    <li>~80% bonus on base points earned from Hilton stays</li>
                    <li dangerouslySetInnerHTML={{ __html: "Complimentary breakfast at many brands, or a food &amp; beverage credit in the U.S. (brand-dependent)"}}></li>
                    <li>Room upgrades (if available), late checkout, free Wi-Fi, etc.</li>
                </ul>
                <p>
                    Also, you can achieve <strong>Diamond</strong> if you spend <strong>$40,000</strong> on the card in a calendar year.
                    Diamond includes better upgrades (suites sometimes),
                    lounge access (if the hotel has an executive lounge),
                    and higher point bonuses.
                    That’s a big threshold, but if you’re a heavy spender,
                    you can skip the usual ~30 stays or 60 nights required to earn Diamond organically.
                    For frequent Hilton guests, that can be a game-changer.
                </p>
            </section>

             {/* Section 7: 10 Priority Pass™ Lounge Visits */}
             <section id="section-7" className={styles.reviewSection}>
                <h2 dangerouslySetInnerHTML={{ __html: "10 Priority Pass™ Lounge Visits"}}></h2>
                 {/* Using dangerouslySetInnerHTML for ® & ™ */}
                <p dangerouslySetInnerHTML={{ __html: "Surpass® includes <strong>10 single-use Priority Pass lounge passes</strong> each year (enrollment required). That’s not unlimited access, but enough for occasional travelers. Each pass typically covers the cardholder only, though some lounge policies might allow you to pay extra for guests. If you fly a few times a year, those visits can significantly improve airport experiences with free snacks, drinks, or comfortable seating. If you need unlimited lounge visits or want free guest privileges, a higher-tier card (like Amex Platinum or the Hilton Aspire) might be necessary. But for a $95 card, 10 visits are a nice mid-level perk."}}></p>
            </section>

             {/* Section 8: 2025 Updates & Potential Changes */}
             <section id="section-8" className={styles.reviewSection}>
                <h2 dangerouslySetInnerHTML={{ __html: "2025 Updates &amp; Potential Changes" }}></h2>
                <ol className={styles.numberedList}>
                    {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{ __html: "<strong>Annual Fee Adjustments:</strong> Amex might move Surpass® from $95 to $99 or $110 if new perks are added or costs change."}}></li>
                    {/* Using dangerouslySetInnerHTML for &amp; */}
                    <li dangerouslySetInnerHTML={{ __html: "<strong>Category Earning Tweaks:</strong> Possible expansions, e.g., 6x on streaming or phone bills, or promotional multipliers at certain times. Keep an eye on official T&amp;Cs or limited-time offers."}}></li>
                    <li><strong>Sign-Up Bonus Variations:</strong>
                    We might see 160k or 180k bonuses occasionally, or free night certificates combined.
                    If you see a significantly higher promo, it might be prime time to apply.</li>
                    <li><strong>Diamond Qualification Via Spend:</strong>
                    The $40k threshold might shift or new spend-based milestones appear.
                    Amex and Hilton regularly refine co-brand benefits to remain competitive.</li>
                </ol>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{ __html: "Typically, Surpass remains stable with 12x on Hilton, 6x on everyday categories, 10 lounge passes, and Gold. But verifying official updates each year ensures no surprises in your 2025 strategy." }}></p>
            </section>

            {/* Section 9: Real-Life Example Table */}
            <section id="section-9" className={styles.reviewSection}>
                <h2>Real-Life Example: Annual Spend & Points Earned</h2>
                <p>
                    Suppose you spend:
                </p>
                <ul className={styles.featureList}>
                    <li>$2,000/year at Hilton properties</li>
                    <li>$4,000/year on U.S. restaurants + $3,000 groceries + $2,000 gas = $9k at 6x</li>
                    <li>$10,000 on other categories at 3x</li>
                </ul>
                <p>
                    Totals:
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
                                <td data-label="Category">Hilton Spend</td>
                                <td data-label="Annual Spend">$2,000</td>
                                <td data-label="Points per $">12x</td>
                                <td data-label="Total Points">24,000</td>
                            </tr>
                            <tr>
                                <td data-label="Category">Restaurants/Groceries/Gas</td>
                                <td data-label="Annual Spend">$9,000</td>
                                <td data-label="Points per $">6x</td>
                                <td data-label="Total Points">54,000</td>
                            </tr>
                            <tr>
                                <td data-label="Category">All Other</td>
                                <td data-label="Annual Spend">$10,000</td>
                                <td data-label="Points per $">3x</td>
                                <td data-label="Total Points">30,000</td>
                            </tr>
                            <tr style={{fontWeight: 'bold', borderTop: '2px solid #dee2e6'}}>
                                <th data-label="Category">Total</th>
                                <th data-label="Annual Spend">$21,000</th>
                                <th data-label="Points per $">—</th>
                                <th data-label="Total Points">108,000</th>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p>
                    That’s <strong>108,000</strong> from spending alone.
                    Add a sign-up bonus (~150k points) = 258k total.
                    At an average 0.5¢ each, that’s ~$1,290 in potential Hilton value.
                    Subtract the $95 fee, it’s still an easy net positive for loyal Hilton travelers.
                    Meanwhile, <strong>Gold status</strong> adds an ~80% bonus on base points at stays for extra synergy (this calculation only includes the card’s 12x, not the additional Gold multiplier).
                </p>
            </section>

            {/* Section 10: Competitor Analysis */}
             <section id="section-10" className={styles.reviewSection}>
                <h2>Competitor Analysis</h2>
                <p>
                    Other mid-level hotel co-brands or comparable:
                </p>
                <div className={styles.tableContainer}>
                    <table className={styles.statsTable}>
                        <thead>
                            <tr>
                                <th>Card</th>
                                <th>Annual Fee</th>
                                <th>Key Features</th>
                                <th>Notable Perk</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                 {/* Using dangerouslySetInnerHTML for ® */}
                                <td data-label="Card" dangerouslySetInnerHTML={{__html:"Hilton Honors Surpass®"}}></td>
                                <td data-label="Annual Fee">$95</td>
                                <td data-label="Key Features">12x at Hilton, 6x dining/groceries/gas, lounge passes</td>
                                <td data-label="Notable Perk">Gold status, 10 Priority Pass visits</td>
                            </tr>
                            <tr>
                                <td data-label="Card">Hilton Honors Amex (No Fee)</td>
                                <td data-label="Annual Fee">$0</td>
                                <td data-label="Key Features">7x at Hilton, 5x dining/groceries/gas</td>
                                <td data-label="Notable Perk">Silver status, no lounge passes, lesser earn rates</td>
                            </tr>
                            <tr>
                                <td data-label="Card">Marriott Bonvoy Boundless</td>
                                <td data-label="Annual Fee">$95</td>
                                <td data-label="Key Features">Up to 17x at Marriott (with membership), free night certificate each year</td>
                                <td data-label="Notable Perk">Complimentary Silver status, 1 annual free night up to 35k points</td>
                            </tr>
                            <tr>
                                <td data-label="Card">IHG Rewards Premier</td>
                                <td data-label="Annual Fee">$99</td>
                                <td data-label="Key Features">10x at IHG, 2x or 3x everyday, free anniversary night</td>
                                <td data-label="Notable Perk">IHG Platinum status, 4th night free on awards</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{ __html: "The Surpass stands out for <strong>strong earning</strong> (12x Hilton, 6x everyday categories) plus <strong>Gold status</strong> (including breakfast). Marriott or IHG counterparts might yield annual free night certificates. If you prefer that approach or a different hotel chain, weigh your options. But if you’re loyal to Hilton, Surpass arguably hits the best mid-tier sweet spot with lounge passes for occasional flyers."}}></p>
            </section>

            {/* Section 11: Additional Benefits & Insurance */}
            <section id="section-11" className={styles.reviewSection}>
                 <h2 dangerouslySetInnerHTML={{ __html: "Additional Benefits &amp; Insurance Coverage" }}></h2>
                <p>
                    Surpass offers:
                </p>
                <ul className={styles.featureList}>
                     {/* Using dangerouslySetInnerHTML for &amp; */}
                    <li dangerouslySetInnerHTML={{ __html: "<strong>Purchase Protection &amp; Extended Warranty:</strong> Standard Amex coverage for eligible items (often 90–120 days for damage/theft, plus 1 extra year warranty on <1-year manufacturer warranties)."}}></li>
                    {/* Using dangerouslySetInnerHTML for &amp; */}
                    <li dangerouslySetInnerHTML={{ __html: "<strong>Car Rental Loss &amp; Damage Insurance (Secondary):</strong> Typically secondary in the U.S. If you want primary coverage, consider other Amex or competitor cards."}}></li>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{ __html: "<strong>Global Assist® Hotline:</strong> 24/7 assistance with emergencies, translation, or legal/medical referrals if traveling >100 miles from home."}}></li>
                    <li><strong>No FTF:</strong>
                    Great for overseas Hilton stays or dining internationally, no 2–3% extra fees.</li>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{ __html: "<strong>Amex Offers:</strong> Potential statement credits or bonus points at select merchants. Check your account regularly to see if you can save $10 here or 15% there, stacking with your normal earn rates."}}></li>
                </ul>
                <p>
                    The coverage is moderately robust for a $95 card, though not as extensive as premium products.
                    Make sure to pay with Surpass to activate coverage on relevant purchases/travels,
                    and consult your benefits guide for exact terms and claim processes.
                </p>
            </section>

            {/* Section 12: APR & Carrying a Balance */}
            <section id="section-12" className={styles.reviewSection}>
                 <h2 dangerouslySetInnerHTML={{ __html: "APR &amp; Carrying a Balance"}}></h2>
                <p>
                    The Surpass typically has a <strong>variable APR</strong> around <strong>19.49%–28.49%</strong> for purchases.
                    No special 0% intro is standard for this co-brand (occasionally short promos might appear).
                    Revolving high balances at ~20–28% can quickly negate your points.
                    If you need to carry a balance, a dedicated low-interest or 0% card is safer.
                    Use Surpass for monthly pay-in-full to maximize net returns from the 12x or 6x.
                    The same caution applies to cash advances—excessive fees and interest at ~28–29%.
                </p>
            </section>

            {/* Section 13: Potential Downsides */}
            <section id="section-13" className={styles.reviewSection}>
                <h2>Potential Downsides</h2>
                <ul className={styles.featureList}>
                    <li><strong>Hilton Points = Lower Value (~0.5¢ avg.):</strong>
                    12x is big, but per-point value is often half of some competitor currencies.
                    You can see higher value if you research sweet spots, but if you prefer simpler points (like 1¢ each), might be disappointed.</li>
                    <li><strong>$95 Annual Fee, No Automatic Free Night:</strong>
                    Some $95 competitor hotel cards give a free night certificate annually.
                    Surpass does not; you can only earn a free weekend night certificate after $15k yearly spend.</li>
                    <li><strong>Only 10 Lounge Visits, Not Unlimited:</strong>
                    If you travel more than 10 times/year, you might want unlimited lounge access from a higher-tier card (Aspire or Amex Platinum, etc.).</li>
                    <li><strong>Secondary Car Rental Coverage:</strong>
                    If you want primary coverage for collisions, you may need Amex’s premium rental coverage add-on or another card with built-in primary coverage.</li>
                    <li><strong>Carryover from the Past:</strong>
                    If you had a bonus on the Surpass or a Hilton co-brand recently, you might be restricted from another sign-up bonus.
                    Check Amex “once per lifetime” rules or general co-brand limitations.</li>
                </ul>
            </section>

            {/* Section 14: Advanced Hilton Strategies */}
            <section id="section-14" className={styles.reviewSection}>
                <h2>Advanced Hilton Strategies</h2>
                <ol className={styles.numberedList}>
                    <li><strong>Maximize Gold Breakfast Perks:</strong>
                    That can save $10–$30 daily if you regularly stay at Hilton properties.
                    Over multiple nights annually, you could offset the $95 quickly.</li>
                    <li><strong>Use the 10 Lounge Passes Strategically:</strong>
                    If you have 2–3 trips with layovers or multiple travelers, consider how to best utilize your passes each calendar year.
                    They do not roll over, so ensure you re-register if needed each year.</li>
                    <li><strong>Free Weekend Night Certificate at $15k Spend:</strong>
                    This is an important threshold. If you spend $15k on Surpass in a calendar year,
                    you typically earn a free weekend night at many Hilton brands.
                    That can be worth $250–$400 if redeemed at a mid/high-tier property.
                    Factor that into your strategy if your monthly overhead can route here.</li>
                    <li><strong>Target High-Value Hilton Redemptions:</strong>
                    Avoid random 0.3–0.4¢ conversions.
                    Focus on off-peak or sweet-spot properties,
                    all-inclusives in the Caribbean or high-end Hiltons in major cities.
                    Checking daily or flexible dates can push value near 0.6–0.7¢ each.</li>
                    <li><strong>$40k to Diamond:</strong>
                    If Diamond is your end goal (upgraded lounge access, better upgrades, 100% bonus points),
                    see if $40k annual spend is feasible or if you'd prefer the Aspire card’s automatic Diamond for a $450 fee.
                    Weigh your typical spending and benefits usage carefully.</li>
                </ol>
            </section>

            {/* Section 15: Another Real-Life Example */}
            <section id="section-15" className={styles.reviewSection}>
                <h2>Another Example: Frequent Domestic Commuter</h2>
                <p>
                    Suppose you:
                </p>
                <ul className={styles.featureList}>
                    <li>$3,000 at Hilton hotels yearly</li>
                    <li>$5,000 on restaurants, $4,000 groceries, $3,000 gas = $12k total at 6x</li>
                    <li>$10,000 everything else at 3x</li>
                </ul>
                <p>
                    That’s $25k total.
                    Breakdown:
                </p>
                <ul className={styles.featureList}>
                    <li><strong>Hilton:</strong> $3k → 12x = 36k points</li>
                    <li><strong>U.S. restaurants/groceries/gas:</strong> $12k → 6x = 72k points</li>
                    <li><strong>Others:</strong> $10k → 3x = 30k points</li>
                </ul>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{ __html: "Summation = <strong>138k</strong> from normal spend alone. Add sign-up bonus ~130k = 268k total. If redeemed at ~0.5¢ each, that’s <strong>$1,340</strong> in lodging, overshadowing the $95 fee. You’d also be near that $15k threshold for a free weekend night if you want to route more spend onto it. If you do $15k, you get an additional weekend certificate, possibly valued at $300+ at a good property." }}></p>
            </section>

             {/* Section 16: Synergy with Other Amex Cards */}
             <section id="section-16" className={styles.reviewSection}>
                <h2>Synergy with Other Amex Cards</h2>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{ __html: "Because Surpass is a <strong>co-brand</strong> focusing on <strong>Hilton</strong> points, it doesn’t feed into Amex Membership Rewards. Still, synergy exists with:" }}></p>
                <ul className={styles.featureList}>
                    {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{ __html: "<strong>Amex Gold or Blue Cash Everyday®</strong> for groceries/dining if you want flexible MR points or daily cash back. But if Surpass yields 6x at groceries/dining, you might prefer Surpass if you specifically want Hilton points. Compare potential net values from each approach (MR can be more flexible, Hilton points are more specialized for hotel stays)."}}></li>
                    {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{ __html: "<strong>Platinum Card® from Amex</strong> for broader lounge access, airline fee credits, and premium travel coverage. Surpass does not have robust travel insurance or universal lounge visits, so pairing with a Platinum could fill that gap. But that’s a big combined annual fee if you do both."}}></li>
                    {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{ __html: "<strong>Hilton Aspire® from Amex</strong> If you eventually upgrade for automatic Diamond status, $250 resort credit, free annual weekend night, etc. But that’s a $450 fee. Many users start with Surpass to see if the advanced perks are needed, then consider Aspire if they want unlimited lounge visits, Diamond, or big statement credits."}}></li>
                </ul>
                <p>
                    So, Surpass stands alone well for mid-level Hilton loyalty,
                    but you may incorporate other Amex cards for everyday MR or additional travel benefits if you have broader needs.
                    Just note each card’s annual fees carefully so as not to overlap unnecessarily.
                </p>
            </section>

            {/* Section 17: Redemption & Hilton Points Value */}
            <section id="section-17" className={styles.reviewSection}>
                 <h2 dangerouslySetInnerHTML={{ __html: "Redemption &amp; Hilton Points Value Insights"}}></h2>
                <p>
                    Hilton doesn’t publish an official award chart,
                    so rates can vary widely.
                    Typically, <strong>0.5¢</strong> each is a decent baseline.
                    Some tips to maximize:
                </p>
                <ul className={styles.featureList}>
                    <li><strong>Look for Off-Peak or Limited Time Sales:</strong>
                    Hilton does dynamic pricing, so certain nights/properties might cost fewer points.
                    If you’re flexible, you might see 0.6–0.7¢ value or more.</li>
                    <li><strong>All-Inclusive or Resorts Abroad:</strong>
                    Some Caribbean, Mexican, or Asian all-inclusive Hiltons can yield great returns if cash rates are high but point requirements moderate.</li>
                    <li><strong>Fifth Night Free for Elites:</strong>
                    If you have Silver or above (Surpass = Gold), you get the 5th night free on standard room awards.
                    That can push your average points per night lower and your redemption value higher.</li>
                    <li><strong>Avoid Low-End if Cash is Cheap:</strong>
                    If a property is $100 but costs 30k points, that’s only ~0.33¢ each.
                    Evaluate if paying cash is better or if you want to save points for a property with a higher ratio.</li>
                </ul>
                <p>
                    If your aim is always to snag ~0.5–0.6¢,
                    Surpass’s 12x effectively becomes a 6–7% return at Hilton properties—very solid for a $95 fee card, especially with Gold benefits stacked.
                </p>
            </section>

            {/* Section 18: Competitor & Alternative Cards */}
            <section id="section-18" className={styles.reviewSection}>
                 <h2 dangerouslySetInnerHTML={{ __html: "Competitor &amp; Alternative Cards"}}></h2>
                 {/* Using dangerouslySetInnerHTML for ℠ */}
                <p dangerouslySetInnerHTML={{ __html: "If Surpass doesn’t align, consider:" }}></p>
                <ul className={styles.featureList}>
                    <li><strong>Hilton Honors American Express Card (no fee):</strong>
                    7x at Hilton, 5x gas/groceries/dining, Silver status.
                    Less robust, but no fee.
                    If you rarely stay at Hilton or want to keep costs at $0, that could suffice.</li>
                    <li><strong>Hilton Honors Aspire (Amex):</strong>
                    $450 fee, automatic Diamond status, $250 resort credit, $250 airline fee credit, unlimited lounge access.
                    Great if you leverage those credits fully, but steep if you don’t travel frequently.</li>
                    <li><strong>Marriott Bonvoy Boundless (Chase):</strong>
                    $95 fee, up to 17x at Marriott with membership, annual free night, Silver status.
                    Different hotel chain if you prefer Marriott’s coverage or a guaranteed free night certificate each year.</li>
                    <li><strong>IHG Rewards Premier (Chase):</strong>
                    $99 fee, strong synergy with IHG, free anniversary night, 4th night free on awards, Platinum status.
                    Another mid-tier competitor with a certificate approach if you prefer IHG’s network.</li>
                </ul>
                <p>
                    Surpass stands out if you love Hilton’s brand variety (Waldorf Astoria, Conrad, DoubleTree, etc.)
                    and want automatic Gold with lounge passes for occasional airports.
                    If you prefer Marriott or IHG or want a free night certificate each year,
                    consider competitor co-brands.
                    All depends on your loyalty preferences and how often you’ll exploit the brand’s coverage globally.
                </p>
            </section>

            {/* Section 19: Who Should Get the Card? */}
            <section id="section-19" className={styles.reviewSection}>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <h2 dangerouslySetInnerHTML={{ __html: "Should You Get the Hilton Honors Amex Surpass®?"}}></h2>
                <div className={styles.prosCons}>
                    <div className={styles.pros}>
                        <h3>Yes, If You:</h3>
                        <ul className={styles.featureList}>
                            <li>Stay at <strong>Hilton properties frequently</strong> or want a major hotel chain with wide coverage</li>
                            <li>Desire <strong>Gold status</strong> for free breakfast/room upgrades</li>
                            <li>Want a <strong>$95 card</strong> with robust earn rates (12x Hilton, 6x dining/groceries/gas)</li>
                            <li>Find occasional lounge visits beneficial (10 Priority Pass passes are enough for you)</li>
                            <li>Plan to pay in full monthly and avoid high APR interest</li>
                        </ul>
                    </div>
                    <div className={styles.cons}>
                        <h3>No, If You:</h3>
                        <ul className={styles.featureList}>
                            <li>Rarely use <strong>Hilton hotels</strong> or prefer different loyalty programs (Marriott, IHG, Hyatt, etc.)</li>
                            <li>Want an <strong>annual free night certificate</strong> automatically or a bigger lounge coverage</li>
                            <li>Need a <strong>$0 annual fee</strong> or prefer a premium $450+ card with Diamond status and bigger statement credits</li>
                            <li>Expect unlimited lounge access or advanced travel coverage (like primary car rental insurance)</li>
                             {/* Using dangerouslySetInnerHTML for ® */}
                            <li dangerouslySetInnerHTML={{__html:"Carry large balances, overshadowing your points with ~19–28% interest"}}></li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Section 20: Final Thoughts & Disclaimer */}
            <section id="section-20" className={styles.reviewSection}>
                 <h2 dangerouslySetInnerHTML={{ __html:"Final Thoughts &amp; Disclaimer"}}></h2>
                 {/* Using dangerouslySetInnerHTML for ® & ™ */}
                <p dangerouslySetInnerHTML={{ __html: "The <strong>Hilton Honors American Express Surpass® Card</strong> stands as a top mid-tier pick for consistent Hilton travelers. <strong>12x</strong> at Hilton, <strong>6x</strong> on everyday categories (restaurants, groceries, gas), plus <strong>automatic Gold</strong> (free breakfast, better upgrades) deliver strong day-to-day returns. The <strong>10 Priority Pass lounge visits</strong> add occasional airport luxury for those not flying often enough to need unlimited access. With a <strong>$95</strong> annual fee, it’s relatively easy to justify, especially if you utilize the high earning rates, sign-up bonus, and select sweet-spot Hilton redemptions near 0.5–0.6¢. While it lacks an automatic free night or comprehensive travel coverage, the synergy with Gold status and decent lounge benefits keeps it well-placed among 2025’s mid-tier hotel cards." }}></p>
                <p dangerouslySetInnerHTML={{ __html: "<strong>Disclaimer:</strong> Terms, APR, sign-up bonus, or lounge pass benefits can change. Always verify the <strong>current</strong> info with American Express or Hilton. We may earn affiliate commissions from some links, but editorial opinions remain our own. The 19–28% APR quickly negates your points if you revolve big balances—best to pay in full monthly. If you prefer a different hotel brand, free annual nights, or unlimited lounge visits, investigate competitor options before applying. For moderate Hilton loyalty, Surpass is a prime solution in 2025." }}></p>
            </section>

            {/* E-A-T Section - Using Generic Text from Template as Source HTML was Incorrect */}
             <section id="eat-expertise-authority-trustworthiness" className={`${styles.reviewSection} ${styles.eatSection}`}>
                <h2 dangerouslySetInnerHTML={{ __html: "Our Commitment to E-A-T: Expertise, Authority &amp; Trustworthiness"}}></h2>
                 {/* !!! E-A-T Text below is generic; adapted from template. Review/replace if needed. !!! */}
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
                    accurate content, including hotel co-brand cards like the Hilton Surpass.</li>
                    <li><strong>Real-Time Updates:</strong>
                    We continually check official issuer materials (Amex/Hilton)
                    and user data to maintain current rates, benefits, and terms.</li>
                    <li dangerouslySetInnerHTML={{ __html: "<strong>Conferences &amp; Webinars:</strong> Our team attends financial and travel events, enriching our knowledge base with industry insights on hotel loyalty programs."}}></li>
                </ul>
                <h3>2. Authority</h3>
                <ul className={styles.featureList}>
                    <li><strong>Detailed Coverage:</strong>
                    This review offers an exhaustive look
                    at the {reviewData.cardName}, from fees to redemption tips for Hilton Honors points.</li>
                    <li><strong>Trusted By Major Outlets:</strong>
                    Our articles are frequently cited by national finance
                    and travel news sites for hotel card analysis.</li>
                    <li><strong>Full Disclosure:</strong>
                    If affiliate links or promotions exist, we clearly state them,
                    ensuring objective editorial content.</li>
                </ul>
                <h3>3. Trustworthiness</h3>
                <ul className={styles.featureList}>
                    <li><strong>Independent Analysis:</strong>
                    We never let advertisers influence our ratings or opinions on cards like the Surpass.</li>
                    <li><strong>Frequent Revisions:</strong>
                    We revise reviews whenever new offers appear or benefits change (like lounge access rules).</li>
                    <li><strong>Community Feedback:</strong>
                    We encourage open discussion in comments,
                    fostering transparency and additional user insights on Hilton stays.</li>
                    <li>
                        <strong>Data Security:</strong> We prioritize user privacy and follow best practices,
                        outlined in our <Link href="/privacy-policy"><a>Privacy Policy</a></Link>.
                    </li>
                </ul>
                <p dangerouslySetInnerHTML={{ __html: "By following these E‑A‑T principles, we aim to guide you responsibly toward a credit card that fits your needs and maximizes your travel rewards, specifically within the Hilton Honors program." }}></p>
            </section>

          </article>
        </div> {/* Close reviewContainer */}
      </main>

      <Footer />
    </>
  );
}

export default HiltonHonorsSurpassReviewPage;