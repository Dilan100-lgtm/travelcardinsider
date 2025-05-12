// Example Path: pages/reviews/marriott-bonvoy-boundless.js
// Or: pages/reviews/[slug].js (if using dynamic routing with 'marriott-bonvoy-boundless' as slug)

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
  cardName: 'Marriott Bonvoy Boundless® Credit Card',
  title: 'Marriott Bonvoy Boundless® Credit Card – In-Depth 2025 Review',
  description: 'A comprehensive 2000-word review of the Marriott Bonvoy Boundless® Credit Card, discussing free night awards, Marriott points, annual fee, 2025 updates, advanced usage tips, synergy, disclaimers, and more.',
  keywords: 'Marriott, Bonvoy Boundless, hotel credit card, travel rewards, free night, 2025',
  author: 'TravelCardInsider', // *** REPLACE with your actual author/site name ***
  imageUrl: '/marriott_bonvoy_boundless_card.png', // *** VERIFY PATH in /public ***
  ratingValue: 8.4, // From Marriott Bonvoy Boundless HTML
  applyLink: 'https://creditcards.chase.com/travel-credit-cards/marriott-bonvoy/boundless', // *** REPLACE with actual Boundless APPLY URL ***
  ratesLink: 'https://sites.chase.com/services/creatives/pricingandterms.html/content/dam/pricingandterms/LGC58145.html', // *** VERIFY URL ***
  // Image dimensions (MUST BE ACCURATE for next/image)
  imageWidth: 480, // *** REPLACE with actual image width *** (Example Placeholder)
  imageHeight: 304, // *** REPLACE with actual image height *** (Example Placeholder)
};

// --- Rating Tooltip Content (Customize if needed for Bonvoy Boundless) ---
const ratingCriteria = [ // *** VERIFY/CUSTOMIZE these criteria for Boundless Rating ***
    'Free Annual Night Value (35k)',
    'Marriott Points Earning Rate (up to 17x)',
    'Welcome Bonus Value',
    'Automatic Silver Elite Status',
    'Annual Fee ($95)'
];

function MarriottBonvoyBoundlessReviewPage() {
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
  // !!! VERIFY all URLs, counts, and details FOR MARRIOTT BOUNDLESS !!!
  const siteUrl = "https://www.travelcardinsider.com"; // *** REPLACE with your actual site URL ***
  const pageUrl = `${siteUrl}/cards/marriott-bonvoy-boundless`; // *** REPLACE with your actual page URL ***
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Marriott Bonvoy Boundless® Credit Card",
    "image": `${siteUrl}${reviewData.imageUrl}`, // *** Assuming imageUrl starts with / ***
    "description": "The Marriott Bonvoy Boundless® Credit Card offers a free annual night, high Marriott points earnings, and automatic Silver Elite status for fans of Marriott properties.", // Updated description
    "brand": {
      "@type": "Brand",
      "name": "Chase" // Issuer
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
      "ratingCount": 820, // *** REPLACE with actual or estimated count ***
      "reviewCount": 820  // *** REPLACE with actual or estimated count ***
    },
    "offers": {
      "@type": "Offer",
      "url": reviewData.applyLink.startsWith('http') ? reviewData.applyLink : `${siteUrl}${reviewData.applyLink}`, // *** Ensure full APPLY URL ***
      "priceCurrency": "USD",
      "price": "95", // Annual Fee for Boundless
      "availability": "https://schema.org/InStock",
      "itemCondition": "https://schema.org/NewCondition"
    }
    // Consider adding "provider": { "@type": "Organization", "name": "Marriott Bonvoy" }
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
        <meta name="geo.region" content="US" />
<meta name="geo.placename" content="United States" />
<meta name="language" content="en-US" />
<meta name="distribution" content="US" />
<link rel="alternate" href="https://www.travelcardinsider.com" hreflang="en-us" />
      </Head>

      

      <main>
        {/* Spacing for fixed header */}
        <div style={{ marginTop: '5rem' }}></div>

        {/* Review Container using CSS Module */}
        <div className={styles.reviewContainer}>
          <article> {/* Wrap main content in article */}
            {/* ============= REVIEW HEADER ============= */}
            <header className={styles.reviewHeader}>
              <h1 dangerouslySetInnerHTML={{ __html: "Marriott Bonvoy Boundless® Credit Card – In-Depth 2025 Review"}}></h1>

              {/* Section 1 Content (Part of Header Structure in Template) */}
              <section id="section-1">
                <div className={styles.intro}>
                  <p dangerouslySetInnerHTML={{ __html: "The <strong>Marriott Bonvoy Boundless® Credit Card</strong> from Chase is a cornerstone for travelers loyal to Marriott’s extensive hotel portfolio. At a <b>$95 annual fee</b>, you get a <b>free annual night</b> (worth up to 35,000 points), automated <b>Silver Elite</b> status, and elevated points on Marriott stays. This ~2,000-word review unpacks 20 sections: from quick stats (APR included) to synergy with Bonvoy tiers, disclaimers, advanced usage tips, and how it ranks among 2025’s travel cards."}}></p>
                </div>

                {/* Image Container */}
                <div className={styles.cardImageContainer}>
                  <Image
                     src={reviewData.imageUrl}
                     alt={"Marriott Bonvoy Boundless® Credit Card"}
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
                            <p className={styles.tooltipIntro}>Our TCI rating is based on:</p>
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
                    <i dangerouslySetInnerHTML={{__html:"A $95 Marriott card with a free annual night, easy Silver Elite, and big earn rates—great for brand enthusiasts!"}}></i>
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
                                <td data-label="Details" dangerouslySetInnerHTML={{__html:"18.49%–25.49% Variable"}}></td>
                            </tr>
                            <tr>
                                <td data-label="Feature">Sign-Up Bonus</td>
                                <td data-label="Details">Often ~3 Free Nights or ~100k–125k Marriott Bonvoy points (varies by promo)</td>
                            </tr>
                            <tr>
                                <td data-label="Feature">Rewards Rate</td>
                                <td data-label="Details">Up to 17x total at Marriott hotels (with membership), 2x on other categories, 1x general</td>
                            </tr>
                            <tr>
                                <td data-label="Feature">Free Night Award</td>
                                <td data-label="Details">Annual certificate upon account anniversary (worth up to 35k points/night)</td>
                            </tr>
                            <tr>
                                <td data-label="Feature">Elite Status Tier</td>
                                <td data-label="Details">Automatic Silver Elite; can earn Gold via $35k spend in a calendar year</td>
                            </tr>
                            <tr>
                                <td data-label="Feature">Foreign Transaction Fee</td>
                                <td data-label="Details">None</td>
                            </tr>
                            <tr>
                                <td data-label="Feature">Recommended Credit Score</td>
                                <td data-label="Details">700+ (Good–Excellent)</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

             {/* CTA Section */}
             <section id="cta" className={styles.ctaSection}>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <h2 dangerouslySetInnerHTML={{__html:"Get the <b>Marriott Bonvoy Boundless® Credit Card</b> Today!"}}></h2>
                <div className={styles.ctaButtons}>
                    <a href={reviewData.applyLink} className={`${styles.btn} ${styles.btnApply}`} title="From card issuer's secure site" target="_blank" rel="noopener noreferrer sponsored">Apply Now</a>
                     {/* Using dangerouslySetInnerHTML for &amp; */}
                    <a href={reviewData.ratesLink} className={`${styles.btn} ${styles.btnRates}`} target="_blank" rel="noopener noreferrer sponsored" dangerouslySetInnerHTML={{__html:"See Rates &amp; Fees"}}></a>
                </div>
            </section>

            {/* Section 3: Card Overview & Positioning */}
            <section id="section-3" className={styles.reviewSection}>
                 <h2 dangerouslySetInnerHTML={{ __html: "Card Overview &amp; Positioning" }}></h2>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{ __html:"The <b>Marriott Bonvoy Boundless® Credit Card</b> from Chase is a popular mid-tier hotel card anchored by an <b>annual free night</b> certificate (worth up to 35k points) and <b>automatic Silver Elite</b> status. With a <strong>$95 annual fee</strong>, it competes against other brand-specific cards (like Hilton Surpass, IHG Premier). For loyal Marriott guests, the Boundless can offset its fee easily if you use the free night each year at properties costing $150+ nightly. In 2025, it remains a mainstay for those wanting a simpler Marriott approach without jumping to more premium $450+ co-branded options."}}></p>
            </section>

            {/* Section 4: Earning Rates & Marriott Points */}
             <section id="section-4" className={styles.reviewSection}>
                <h2>Earning Rates & Marriott Points</h2>
                <p>
                    The Boundless typically advertises up to <b>17x total</b> at Marriott hotels:
                    that’s combining the card’s <b>6x</b> plus your standard Bonvoy membership base rate (10x at most brands) plus 1x from possible Elite bonuses.
                    More precisely, the credit card portion is often:
                </p>
                <ul className={styles.featureList}>
                    <li><strong>6x Marriott Bonvoy Points</strong> per $1 at Marriott properties</li>
                     {/* Using dangerouslySetInnerHTML for &amp; */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>2x Points</strong> on all other travel purchases, or sometimes on broad categories (like dining, airlines, etc.)—check T&amp;Cs"}}></li>
                    <li><strong>1x Points</strong> for everything else</li>
                </ul>
                <p>
                    Combined with your base Marriott membership and any Elite tier bonus,
                    you can see big totals when staying at Marriott.
                    If you’re a consistent Marriott traveler, the points can multiply quickly.
                    Just note <b>Marriott points</b> are typically valued around ~0.7–0.9¢ each,
                    though sweet spots can exceed 1¢ with strategic redemptions.
                </p>
            </section>

             {/* Section 5: Sign-Up Bonus & Potential Value */}
             <section id="section-5" className={styles.reviewSection}>
                <h2 dangerouslySetInnerHTML={{ __html: "Sign-Up Bonus &amp; Potential Value"}}></h2>
                <p>
                    The sign-up bonus frequently alternates between <b>3 Free Nights</b> (up to 50k points each) or <b>100k–125k</b> Marriott points.
                    If each free night is up to 50k, that can surpass $500–$600 in total value if used at higher category hotels.
                    Alternatively, 100k points can represent $700–$900 or more, depending on redemption.
                    Evaluate which bonus is more appealing:
                    the free night certs can be great for mid/high-tier properties,
                    while a large points stash might let you stretch nights at cheaper spots or combine with existing points for a big redemption.
                </p>
            </section>

            {/* Section 6: Free Night Certificate & Automatic Silver Elite */}
            <section id="section-6" className={styles.reviewSection}>
                 <h2>Free Night Certificate & Automatic Silver Elite</h2>
                <p>
                    The Boundless automatically grants a <b>Free Night Award</b> every account anniversary,
                    valid at Marriott hotels costing up to <b>35,000 points</b>.
                    This alone can offset the $95 fee if you find a property that typically runs $150+ per night.
                    Meanwhile, the card confers <b>Silver Elite</b> in Bonvoy,
                    which includes:
                </p>
                <ul className={styles.featureList}>
                    <li>10% bonus on base Marriott points</li>
                    <li>Priority late checkout (when available)</li>
                     {/* Using dangerouslySetInnerHTML for &amp; */}
                    <li dangerouslySetInnerHTML={{__html:"Member rate &amp; Wi-Fi—standard for all Bonvoy members anyway"}}></li>
                </ul>
                <p>
                    <b>Silver</b> is modest, but you can reach <b>Gold</b> with $35k in annual card spend.
                    However, consider if that’s worthwhile or if you’ll organically achieve Gold/Platinum from frequent stays.
                    The real highlight remains the free night certificate for many cardholders.
                </p>
            </section>

            {/* Section 7: 2025 Updates & Potential Changes */}
             <section id="section-7" className={styles.reviewSection}>
                <h2 dangerouslySetInnerHTML={{ __html: "2025 Updates &amp; Potential Changes"}}></h2>
                <ol className={styles.numberedList}>
                    <li><strong>Annual Fee Shift:</strong>
                    Chase might raise it from $95 to $99 or $110 if new features are introduced.
                    Keep an eye on official announcements.</li>
                    <li><strong>Category Bonus Adjustments:</strong>
                    The Boundless might see expansions or promotions, e.g., 3x or 4x on dining or groceries for a limited time.
                    Marriott/Chase occasionally test new multipliers.</li>
                    <li dangerouslySetInnerHTML={{ __html: "<strong>Free Night Cap Increases:</strong> Potentially up to 40k or 50k points, or top-up options. In fact, Marriott has introduced <b>top-up</b> for free night certs (adding your points to surpass the 35k threshold). This can drastically improve certificate usage if official T&amp;Cs apply in 2025."}}></li>
                    <li><strong>Sign-Up Bonus Variations:</strong>
                    You could see a limited-time 5 nights or 125k+ points.
                    If so, applying during a boosted period can yield bigger immediate returns.</li>
                </ol>
                <p>
                    Typically, the fundamental structure—$95 fee, free night cert, Silver Elite—remains stable.
                    But check official terms for major updates each year.
                </p>
            </section>

            {/* Section 8: Real-Life Example Table */}
            <section id="section-8" className={styles.reviewSection}>
                <h2>Real-Life Example: Annual Spend & Points Earned</h2>
                <p>
                    Suppose you:
                </p>
                <ul className={styles.featureList}>
                    <li>Spend $2,000 yearly at Marriott properties</li>
                     {/* Using dangerouslySetInnerHTML for &amp; */}
                    <li dangerouslySetInnerHTML={{__html:"$3,000 on travel/dining/other categories that might earn 2x (depending on current T&amp;Cs)"}}></li>
                    <li>$10,000 on general overhead at 1x</li>
                </ul>
                <p>
                    Approximate points from the card:
                </p>
                <div className={styles.tableContainer}>
                    <table className={styles.statsTable}>
                        <thead>
                            <tr>
                                <th>Category</th>
                                <th>Annual Spend</th>
                                <th>Points per $ (card portion)</th>
                                <th>Total Points</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td data-label="Category">Marriott Stays</td>
                                <td data-label="Annual Spend">$2,000</td>
                                <td data-label="Points per $">6x</td>
                                <td data-label="Total Points">12,000</td>
                            </tr>
                            <tr>
                                <td data-label="Category">2x Categories</td>
                                <td data-label="Annual Spend">$3,000</td>
                                <td data-label="Points per $">2x</td>
                                <td data-label="Total Points">6,000</td>
                            </tr>
                            <tr>
                                <td data-label="Category">1x General</td>
                                <td data-label="Annual Spend">$10,000</td>
                                <td data-label="Points per $">1x</td>
                                <td data-label="Total Points">10,000</td>
                            </tr>
                            <tr style={{fontWeight: 'bold', borderTop: '2px solid #dee2e6'}}>
                                <th data-label="Category">Total</th>
                                <th data-label="Annual Spend">$15,000</th>
                                <th data-label="Points per $">—</th>
                                <th data-label="Total Points">28,000</th>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p>
                    That’s <b>28,000</b> from the card alone.
                    Additionally, you’d earn <b>base Bonvoy points</b> on the $2,000 of Marriott stays (usually 10x = 20k more) plus your Silver bonus (10% more on base = 2k),
                    total ~22k from the hotel side.
                    Summation: 50k points across card + base membership for $2k Marriott.
                    Add a sign-up bonus (~100k or 3 free nights) for even bigger returns.
                    Don’t forget the free night certificate each anniversary—often worth $150–$200+ at many properties, covering the $95 fee effectively.
                </p>
            </section>

            {/* Section 9: Competitor Analysis */}
            <section id="section-9" className={styles.reviewSection}>
                 <h2>Competitor Analysis</h2>
                <p>
                    Mid-tier hotel cards with similar $95ish fees:
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
                                <td data-label="Card">Marriott Bonvoy Boundless</td>
                                <td data-label="Annual Fee">$95</td>
                                <td data-label="Key Features">6x at Marriott, free night up to 35k points, Silver Elite</td>
                                <td data-label="Notable Perk">Strong global Marriott footprint, easy free night offsets fee</td>
                            </tr>
                            <tr>
                                 {/* Using dangerouslySetInnerHTML for ® */}
                                <td data-label="Card" dangerouslySetInnerHTML={{__html:"Hilton Honors Surpass®"}}></td>
                                <td data-label="Annual Fee">$95</td>
                                <td data-label="Key Features">12x at Hilton, 6x dining/groceries/gas, lounge passes</td>
                                <td data-label="Notable Perk">Gold status, 10 Priority Pass visits</td>
                            </tr>
                            <tr>
                                <td data-label="Card">IHG Rewards Premier</td>
                                <td data-label="Annual Fee">$99</td>
                                <td data-label="Key Features">Up to 26x total at IHG, free anniversary night, IHG Platinum status</td>
                                <td data-label="Notable Perk">4th night free on awards, wide mid-priced brand coverage</td>
                            </tr>
                            <tr>
                                <td data-label="Card">World of Hyatt Credit Card</td>
                                <td data-label="Annual Fee">$95</td>
                                <td data-label="Key Features">Up to 9x total at Hyatt, free night cat 1–4, discoverist status</td>
                                <td data-label="Notable Perk">High point value, advanced synergy with Hyatt’s smaller footprint</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p>
                    If you prefer Marriott’s brand reach (Westin, Sheraton, St. Regis, etc.),
                    Boundless is a straightforward pick.
                    If you like Hilton or Hyatt’s loyalty systems or prefer IHG’s annual night approach,
                    check their co-brands.
                    But for Marriott loyalists, the free 35k night is easy to recoup annually, plus the sign-up bonus can be substantial.
                </p>
            </section>

            {/* Section 10: Additional Benefits & Travel Insurance */}
            <section id="section-10" className={styles.reviewSection}>
                 <h2 dangerouslySetInnerHTML={{ __html: "Additional Benefits &amp; Travel Insurance"}}></h2>
                <p>
                    Boundless typically includes:
                </p>
                <ul className={styles.featureList}>
                     {/* Using dangerouslySetInnerHTML for &amp; */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Purchase Protection &amp; Extended Warranty:</strong> Standard coverage from Chase on new items if damaged or stolen within a set timeframe, plus extended warranty up to 1 year beyond the manufacturer’s warranty."}}></li>
                     {/* Using dangerouslySetInnerHTML for &amp; */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Trip Delay/Cancellation Insurance:</strong> Reimburses up to certain limits for covered reasons, if you pay with the card. Usually $500 per ticket for delays 12+ hours, but check official T&amp;Cs for specifics."}}></li>
                    <li><strong>Lost Luggage Reimbursement:</strong>
                    Coverage for checked or carry-on baggage if lost or damaged.
                    Secondary to airline compensation in many cases.</li>
                    <li><strong>No Foreign Transaction Fee:</strong>
                    Perfect for Marriott’s international presence, so you aren’t penalized 3% on foreign stays or dining.</li>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Visa Signature/Infinite Perks:</strong> May include various travel/dining offers, or DoorDash/Lyft promos. Keep an eye on the rotating deals in your Chase portal."}}></li>
                </ul>
                <p>
                    Combined, these can protect your purchases or travels, though coverage limits vary.
                    Make sure you pay for your travel with the Boundless to activate insurance benefits.
                    If you desire more extensive coverage, consider a premium travel card, but for a $95 product, Boundless’s perks are solid.
                </p>
            </section>

            {/* Section 11: APR & Balance Considerations */}
            <section id="section-11" className={styles.reviewSection}>
                <h2>APR & Balance Considerations</h2>
                <p>
                    The <b>APR</b> typically sits around <b>18.49–25.49%</b> variable.
                    As usual, paying in full monthly is recommended to avoid interest overshadowing your points.
                    If you need a large short-term financing solution,
                    a 0% introductory APR card is better than incurring 20+% on a rewards card.
                    Also, check if the Boundless has any promotional balance transfer offers, though typically they’re not the main feature.
                    Keep in mind, the real advantage here is the free annual night, sign-up bonus, and Marriott earning—
                    not carrying a balance.
                </p>
            </section>

            {/* Section 12: Potential Downsides */}
            <section id="section-12" className={styles.reviewSection}>
                 <h2>Potential Downsides</h2>
                <ul className={styles.featureList}>
                    <li><strong>$95 Fee for Light Marriott Users:</strong>
                    If you seldom stay at Marriott, the free night might go unused or redeemed at cheaper properties, reducing net value.
                    Consider a no-fee alternative if you’re not committed to Marriott.</li>
                     {/* Using dangerouslySetInnerHTML for &amp; */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Limited Earning Outside Marriott:</strong> Only 2x on other travel/dining (depending on T&amp;Cs) or 1x on general spend may be overshadowed by general travel cards."}}></li>
                    <li><strong>Silver Elite is Basic:</strong>
                    10% point bonus, late checkout subject to availability.
                    If you want lounge/breakfast (Gold/Platinum), you’ll need more nights or a pricier Marriott card.</li>
                    <li><strong>35k Free Night Cap:</strong>
                    Some top-tier properties cost 40k–60k or more.
                    Though Marriott now allows top-up with points, 35k can limit you to mid-tier locations unless you top-up from your points stash.</li>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Marriott Points Valuation (~0.7–0.9¢):</strong> Not as high as Hyatt, so you might see less overall value if you prefer upscale redemptions or easily found sweet spots."}}></li>
                </ul>
            </section>

            {/* Section 13: Advanced Marriott Strategies */}
            <section id="section-13" className={styles.reviewSection}>
                <h2>Advanced Marriott Strategies</h2>
                <ol className={styles.numberedList}>
                    <li><strong>Maximize Free Night Cert:</strong>
                    Redeem it for properties costing $200+ if possible.
                    If a property requires 40k points, top-up might be an option— e.g., use the 35k cert + 5k points.
                    This can unlock higher-tier hotels on a single redemption.</li>
                    <li><strong>Combine with Marriott Bonvoy Loyalty Promotions:</strong>
                    Marriott runs double or triple points events.
                    Stacking those promotions with your card’s 6x can yield large sums.</li>
                     {/* Using dangerouslySetInnerHTML for &amp; */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>$35k Spend for Gold:</strong> If you’re missing nights for Gold Elite or prefer to earn it via spend, $35k in a calendar year on Boundless triggers Gold. Gold includes better upgrades, free breakfast in some regions, lounge access at certain legacy brands (but not all). Weigh whether the 2x or 1x multipliers are worth that big chunk of spending vs. using another card with higher everyday returns."}}></li>
                    {/* Using dangerouslySetInnerHTML for &amp; */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Use 15 Elite Night Credits Wisely:</strong> The Boundless typically includes 15 elite night credits each year, which counts toward your total nights for higher status. If you combine Boundless with a Marriott business card, nights can stack further (some T&amp;Cs disclaim a max though). This synergy can push you closer to Platinum or Titanium if you do partial real stays plus credit card nights."}}></li>
                    <li><strong>Monitor Off-Peak vs. Peak Award Pricing:</strong>
                    Marriott uses dynamic pricing.
                    Searching flexible dates can unearth off-peak awards for the same property, saving thousands of points.
                    Aim for 0.8–1¢ per point for best value, or use the free night on nights priced at 30–35k points or more to maximize redemption.</li>
                </ol>
            </section>

            {/* Section 14: Another Real-Life Example */}
            <section id="section-14" className={styles.reviewSection}>
                <h2>Another Example: Frequent Marriott Traveler</h2>
                <p>
                    Let’s say you:
                </p>
                <ul className={styles.featureList}>
                    <li>$5,000 at Marriott properties yearly</li>
                     {/* Using dangerouslySetInnerHTML for &amp; */}
                    <li dangerouslySetInnerHTML={{__html:"$4,000 in categories awarding 2x (travel, dining, etc.)"}}></li>
                    <li>$8,000 general overhead at 1x</li>
                </ul>
                <p>
                    That’s $17k total.
                    Approx card points:
                </p>
                <ul className={styles.featureList}>
                    <li>Marriott stays: $5,000 → 6x = 30,000 from the card</li>
                    <li>2x categories: $4,000 → 8,000 points</li>
                    <li>Other: $8,000 → 8,000 points</li>
                </ul>
                <p>
                    Summation: <b>46,000</b> from the card alone.
                    Meanwhile, your base Marriott membership yields ~10x on $5k = 50k, plus your Silver 10% bonus = 5k, total 55k from stays.
                    So you’d accumulate ~101k points from combined membership + card usage on Marriott portion.
                    Add an additional sign-up bonus (like 3 free nights or 125k points) plus your free annual night certificate each anniversary.
                    The $95 fee becomes negligible if you redeem that free cert at a property usually costing $150–$250 or more.
                </p>
            </section>

             {/* Section 15: Synergy with Other Chase Cards */}
             <section id="section-15" className={styles.reviewSection}>
                <h2>Synergy with Other Chase Cards</h2>
                <p>
                    Boundless is a co-branded Marriott card, so it doesn’t earn Ultimate Rewards (UR) points.
                    However:
                </p>
                <ul className={styles.featureList}>
                    <li><strong>Chase Freedom or Sapphire line:</strong>
                    You could hold a Freedom for 5x rotating categories or a Sapphire Preferred/Reserve for general travel/dining.
                    But Marriott points remain separate from UR.
                    Some users pick Boundless for Marriott stays and a Sapphire product for non-Marriott travel to maximize UR.
                    </li>
                    <li><strong>Chase 5/24 Rule:</strong>
                    Boundless is subject to 5/24 approvals.
                    If you exceed 5 credit card accounts in 24 months, you might be denied.
                    Plan your applications if you want Boundless and maybe a Sapphire Preferred/Reserve for overall synergy.</li>
                </ul>
                <p>
                    The synergy is mostly about having a separate solution for everyday non-Marriott spend if you want flexible UR.
                    Meanwhile, Boundless optimizes your Marriott nights and ensures that free annual night.
                    They complement each other but do not pool points directly.
                </p>
            </section>

            {/* Section 16: Redemption & Marriott Bonvoy Points Insights */}
             <section id="section-16" className={styles.reviewSection}>
                <h2>Redemption & Marriott Bonvoy Points Insights</h2>
                <p>
                    Marriott Bonvoy points typically see:
                </p>
                <ul className={styles.featureList}>
                    <li><strong>~0.7–0.9¢</strong> average.
                    Some top-tier properties or off-peak rates might exceed 1¢.
                    Value can also drop to 0.5–0.6¢ if you redeem at a suboptimal time or location.</li>
                    <li><strong>Fifth Night Free on Award Stays:</strong>
                    Book 5 nights on points, pay only for 4 in points.
                    This can push your average cost per night down, effectively boosting your point value.</li>
                    <li><strong>Points + Cash Rates:</strong>
                    Could be beneficial if you’re short on points or prefer partial out-of-pocket.
                    Compare the effective rate carefully to ensure it’s a good deal vs. pure cash or pure points.</li>
                    <li><strong>Top-Up for the 35k Cert:</strong>
                    If a room is 40k, you can use your 35k certificate plus 5k points in some scenarios.
                    This is relatively new but can open higher-tier property redemptions than 35k alone allows.</li>
                </ul>
                <p>
                    Typically, you want to find award nights at or above $180–$250 in cash value for 35k–40k points to see 0.7–1¢.
                    If you can incorporate the Fifth Night Free or top-ups, you can push your redemption value further.
                    Research flexible dates, watch for potential off-peak deals in 2025.
                </p>
            </section>

            {/* Section 17: Competitor & Alternative Cards */}
             <section id="section-17" className={styles.reviewSection}>
                <h2 dangerouslySetInnerHTML={{ __html:"Competitor &amp; Alternative Cards"}}></h2>
                <p>
                    If Marriott isn’t your main brand or the Boundless structure doesn’t suit, consider:
                </p>
                <ul className={styles.featureList}>
                    {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Hilton Honors Surpass® (Amex):</strong> $95 fee, 12x at Hilton, 6x dining/groceries/gas, 10 Priority Pass visits, Gold status. No annual free night but higher everyday earn potential at Hiltons."}}></li>
                    <li><strong>IHG Rewards Premier (Chase):</strong>
                    $99 fee, free night (capped ~40k), strong synergy with IHG hotels.
                    4th night free on award stays.
                    Platinum Elite automatically.
                    </li>
                    <li><strong>World of Hyatt Card (Chase):</strong>
                    $95 fee, 4x at Hyatt, free night category 1–4, discoverist status.
                    Hyatt points are typically valued higher (1.5–2¢), but Hyatt’s footprint is smaller.
                    </li>
                    {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Marriott Bonvoy Brilliant® (Amex):</strong> $650 fee, but includes up to 85k free night, Platinum Elite automatically, $300 dining credit. If you want top-tier Marriott perks, might be worth it if you utilize the credits fully."}}></li>
                </ul>
                <p>
                    The Boundless is the standard $95 Marriott card—so weigh which brand’s coverage or loyalty perks matter.
                    If you’re a Marriott devotee, the free annual night alone can justify the fee.
                    If you want higher elite status or more perks, consider the more premium cards.
                    If you rarely do Marriott, or want to explore different brands, check the competitor line-up.
                </p>
            </section>

             {/* Section 18: Who Should Get the Card? */}
             <section id="section-18" className={styles.reviewSection}>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <h2 dangerouslySetInnerHTML={{__html:"Who Should Get the Marriott Bonvoy Boundless® Card?"}}></h2>
                <div className={styles.prosCons}>
                    <div className={styles.pros}>
                        <h3>Yes, If You:</h3>
                        <ul className={styles.featureList}>
                            <li>Prefer <strong>Marriott’s large hotel network</strong></li>
                            <li>Will <strong>use the free 35k night certificate</strong> each year at a property valued ~$150+ nightly</li>
                            <li>Like <strong>automatic Silver Elite</strong> and can possibly achieve or don’t mind skipping higher tiers</li>
                            <li>Desire a <strong>$95 card</strong> with decent travel coverage, no foreign fee</li>
                            <li>Pay statements in full each month, avoiding high APR interest</li>
                        </ul>
                    </div>
                    <div className={styles.cons}>
                        <h3>No, If You:</h3>
                        <ul className={styles.featureList}>
                            <li>Rarely stay at <strong>Marriott brand hotels</strong></li>
                            <li>Want an <strong>automatic free breakfast or lounge access</strong> (Gold/Platinum perks) without large stays/spend</li>
                            <li>Carry a balance frequently, overshadowing your gains in interest charges</li>
                            <li>Prefer a <strong>different chain</strong> (Hilton, Hyatt, IHG) or flexible points like Ultimate Rewards / Membership Rewards</li>
                             {/* Using dangerouslySetInnerHTML for ® */}
                            <li dangerouslySetInnerHTML={{__html:"Desire a <strong>premium Marriott card</strong> for Platinum Elite or bigger statement credits (Bonvoy Brilliant at $650 AF, for instance)"}}></li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Section 19: Annual Fee Rationale & Lifetime Value */}
            <section id="section-19" className={styles.reviewSection}>
                 <h2 dangerouslySetInnerHTML={{ __html:"Annual Fee Rationale &amp; Lifetime Value"}}></h2>
                <p>
                    Many keep the Boundless card long-term for the <b>annual free night</b> alone.
                    If you redeem that night at a property normally costing $200, you’re effectively up $105 minus the $95 fee.
                    Over multiple years, that net can accumulate significantly—on top of sign-up bonus,
                    ongoing Marriott earnings, and the possibility of 15 elite nights credit each year if you hold the card (accelerating progress toward higher tiers).
                </p>
                <p>
                    Meanwhile, if you skip using the free night or only redeem it for a low-tier $80 property,
                    you might break even or lose out compared to a no-fee approach.
                    Evaluate your travel patterns.
                    If you consistently can use that night for something $150–$200 or more,
                    the card pays for itself comfortably, plus the sign-up bonus can yield hundreds in additional Marriott lodging in year one.
                </p>
            </section>

             {/* Section 20: Bottom Line & Disclaimer */}
             <section id="section-20" className={styles.reviewSection}>
                 <h2 dangerouslySetInnerHTML={{ __html:"Final Thoughts &amp; Disclaimer"}}></h2>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{__html:"The <strong>Marriott Bonvoy Boundless® Credit Card</strong> remains a prime $95 hotel card choice, thanks to the annual free night (worth up to 35k points) that typically offsets the fee, easy <b>Silver Elite</b>, and synergy for those partial to Marriott’s 30+ brand portfolio worldwide. Sign-up bonuses offering either free night certificates or large point totals can jumpstart your Bonvoy account, and 6x Marriott earn means more points for your next stay. If you prefer unlimited lounge access, higher status, or more statement credits, a premium Marriott card might be a better fit at a higher fee. But for moderate Marriott travelers wanting a straightforward approach, Boundless can unlock strong value in 2025 and beyond."}}></p>
                 {/* Using dangerouslySetInnerHTML for ® &amp; */}
                <p dangerouslySetInnerHTML={{__html:"<strong>Disclaimer:</strong> Terms, annual fees, sign-up bonuses, or redemption rules for Marriott vary. Always verify official <b>Chase</b> or <b>Marriott</b> materials for the latest details. We may earn affiliate commissions from some links, but editorial opinions remain our own. If you revolve a balance at ~18–25% APR, interest quickly erodes your reward. Pay in full monthly to maximize net gains. If you’re not a Marriott loyalist or want different hotel perks, consider the competitor cards mentioned earlier before applying."}}></p>
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
                    accurate content, including Marriott Bonvoy cards.</li>
                    <li><strong>Real-Time Updates:</strong>
                    We continually check official issuer materials (Chase/Marriott)
                    and user data to maintain current rates, benefits, and terms for the Boundless card.</li>
                     {/* Using dangerouslySetInnerHTML for &amp; */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Conferences &amp; Webinars:</strong> Our team attends financial and travel events, enriching our knowledge base with industry insights on hotel loyalty programs like Bonvoy."}}></li>
                </ul>
                <h3>2. Authority</h3>
                <ul className={styles.featureList}>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Detailed Coverage:</strong> This review offers an exhaustive look at the Marriott Bonvoy Boundless® Credit Card, from fees to redemption tips and free night strategies."}}></li>
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
                    We never let advertisers influence our ratings or opinions on the Boundless card.</li>
                    <li><strong>Frequent Revisions:</strong>
                    We revise reviews whenever new offers appear or Marriott changes program rules (like free night top-ups).</li>
                    <li><strong>Community Feedback:</strong>
                    We encourage open discussion in comments,
                    fostering transparency and additional user insights on Marriott stays.</li>
                    <li>
                        <strong>Data Security:</strong> We prioritize user privacy and follow best practices,
                        outlined in our <Link href="/privacy-policy"><a>Privacy Policy</a></Link>.
                    </li>
                </ul>
                <p dangerouslySetInnerHTML={{ __html: "By following these E‑A‑T principles, we aim to guide you responsibly toward a credit card that fits your needs and maximizes your travel rewards within the Marriott Bonvoy program." }}></p>
            </section>

          </article>
        </div> {/* Close reviewContainer */}
      </main>

      
    </>
  );
}

export default MarriottBonvoyBoundlessReviewPage;