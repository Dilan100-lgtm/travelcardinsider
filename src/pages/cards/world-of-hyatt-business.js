// Example Path: pages/reviews/world-of-hyatt-business.js
// Or: pages/reviews/[slug].js (if using dynamic routing with 'world-of-hyatt-business' as slug)

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
  cardName: 'World of Hyatt Business Credit Card',
  title: 'World of Hyatt Business Credit Card – In-Depth 2025 Review',
  description: 'A 2000-word review of the World of Hyatt Business Credit Card, discussing annual fee, benefits, status perks, 2025 updates, advanced usage tips, and synergy with Hyatt\'s loyalty program.',
  keywords: 'World of Hyatt, Hyatt, credit card, business, travel rewards, 2025',
  author: 'TravelCardInsider', // *** REPLACE with your actual author/site name ***
  imageUrl: '/HYCOM-090821-WOH-Business-Card.webp', // *** VERIFY PATH in /public ***
  ratingValue: 8.5, // From Hyatt Business HTML
  applyLink: 'https://world.hyatt.com/content/gp/en/rewards/hyatt-credit-card.html', // *** REPLACE with actual Hyatt Biz APPLY URL ***
  ratesLink: 'https://sites.chase.com/services/creatives/pricingandterms.html/content/dam/pricingandterms/LGC61034.html', // *** VERIFY URL ***
  // Image dimensions (MUST BE ACCURATE for next/image)
  imageWidth: 480, // *** REPLACE with actual image width *** (Example Placeholder)
  imageHeight: 304, // *** REPLACE with actual image height *** (Example Placeholder)
};

// --- Rating Tooltip Content (Customize if needed for Hyatt Biz) ---
const ratingCriteria = [ // *** VERIFY/CUSTOMIZE these criteria for Hyatt Biz Rating ***
    'Hyatt Points Earning Rate (up to 9x)',
    'Tier-Qualifying Night Credits via Spend',
    'Value of Hyatt Points',
    'Welcome Bonus Potential',
    'Annual Fee ($199)'
];

function HyattBusinessReviewPage() {
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
  // !!! VERIFY all URLs, counts, and details FOR HYATT BUSINESS CARD !!!
  const siteUrl = "https://www.travelcardinsider.com"; // *** REPLACE with your actual site URL ***
  const pageUrl = `${siteUrl}/reviews/world-of-hyatt-business`; // *** REPLACE with your actual page URL ***
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product", // Using Product as per template
    "name": "World of Hyatt Business Credit Card",
    "image": `${siteUrl}${reviewData.imageUrl}`, // *** Assuming imageUrl starts with / ***
    "description": "The World of Hyatt Business Credit Card offers elevated points at Hyatt hotels, mid-tier status, spending-based perks, and strong travel benefits for business owners seeking Hyatt privileges.", // Adjusted description
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
      "ratingCount": 450, // *** REPLACE with actual or estimated count ***
      "reviewCount": 450  // *** REPLACE with actual or estimated count ***
    },
    "offers": {
      "@type": "Offer",
      "url": reviewData.applyLink.startsWith('http') ? reviewData.applyLink : `${siteUrl}${reviewData.applyLink}`, // *** Ensure full APPLY URL ***
      "priceCurrency": "USD",
      "price": "199", // Annual Fee for Hyatt Business
      "availability": "https://schema.org/InStock",
      "itemCondition": "https://schema.org/NewCondition"
    }
    // Consider adding "provider": { "@type": "Organization", "name": "World of Hyatt" }
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
        <meta name="geo.region" content="US" />
<meta name="geo.placename" content="United States" />
<meta name="language" content="en-US" />
<meta name="distribution" content="US" />
<link rel="alternate" href="https://www.travelcardinsider.com" hreflang="en-us" />
      </Head>

      

      <main>
        {/* Spacing for fixed header */}
        <div style={{ marginTop: '2rem' }}></div> {/* Adjusted margin from HTML */}

        {/* Review Container using CSS Module */}
        <div className={styles.reviewContainer}>
          <article> {/* Wrap main content in article */}
            {/* ============= REVIEW HEADER ============= */}
            <header className={styles.reviewHeader}>
              <h1>{reviewData.title}</h1>

              {/* Section 1 Content (Part of Header Structure in Template) */}
              <section id="section-1">
                 {/* Using dangerouslySetInnerHTML for ® */}
                <div className={styles.intro}>
                   <p dangerouslySetInnerHTML={{ __html:"The <strong>World of Hyatt Business Credit Card</strong> (issued by Chase) is a specialized product for small-business owners who frequently stay at Hyatt properties worldwide. Offering a <strong>$199 annual fee</strong>, it grants numerous perks like automatic <strong>Discoverist status</strong>, bonus categories on business spend, and an avenue to rapidly accumulate Hyatt points (known for above-average value at redemption). This review covers 20 sections—from quick stats (including APR info) to synergy with Hyatt’s loyalty tiers, disclaimers, advanced usage tips, and 2025 updates—helping you decide if it’s the right hotel rewards solution for your company."}}></p>
                </div>

                {/* Image Container */}
                <div className={styles.cardImageContainer}>
                  {/* Corrected class name */}
                   <Image
                     src={reviewData.imageUrl}
                     alt={"World of Hyatt Business Credit Card"}
                     width={480} // *** REPLACE or use data ***
                     height={300} // *** REPLACE or use data ***
                     className={styles.cardImage}
                     lazy-load
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
                            {/* Using ratingCriteria array */}
                            <p className={styles.tooltipIntro}>Our TCI rating system criteria including rewards, welcome bonus, annual fee, redemption flexibility, travel benefits, APR, foreign transaction fees, user experience, and other features.</p>
                           
                        </div>
                    )}
                  </span>

                  {/* STAR RATING - Using 8.5 Rating -> 85% */}
                  <div className={styles.starRating} title={`Rated ${reviewData.ratingValue} out of 10 stars`} style={{ '--rating': `${reviewData.ratingValue * 10}%` }}>
                    <span>★★★★★</span>
                    <span className={styles.filledStars}>★★★★★</span>
                  </div>

                  <div className={styles.ratingDescription}>
                    <i>High-value Hyatt points plus mid-tier status at a $199 fee—ideal for brand loyalists wanting accelerated path to Explorist or Globalist.</i>
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
                                <td data-label="Details">$199</td>
                            </tr>
                             {/* Using dangerouslySetInnerHTML for &amp; */}
                            <tr dangerouslySetInnerHTML={{__html:'<td data-label="Feature">APR Range</td><td data-label="Details">17.49%–24.49% Variable (purchases &amp; balance transfers)</td>'}}></tr>
                             {/* Using dangerouslySetInnerHTML for ® */}
                            <tr dangerouslySetInnerHTML={{__html:'<td data-label="Feature">Cash Advance APR</td><td data-label="Details">~26.49% Variable, plus fees</td>'}}></tr>
                            <tr>
                                <td data-label="Feature">Sign-Up Bonus</td>
                                <td data-label="Details">Typically ~60k–75k Bonus Points after spending $5k in 3 months</td>
                            </tr>
                             {/* Using dangerouslySetInnerHTML for ® */}
                            <tr dangerouslySetInnerHTML={{__html:'<td data-label="Feature">Rewards Rate</td><td data-label="Details">Up to 9x total on Hyatt stays, plus 2x or more on select business categories</td>'}}></tr>
                             {/* Using dangerouslySetInnerHTML for ® */}
                            <tr dangerouslySetInnerHTML={{__html:'<td data-label="Feature">Status Benefit</td><td data-label="Details">Automatic Discoverist; spend-based Tier-Qualifying Night Credits</td>'}}></tr>
                            <tr>
                                <td data-label="Feature">Foreign Transaction Fee</td>
                                <td data-label="Details">None</td>
                            </tr>
                            <tr>
                                <td data-label="Feature">Recommended Credit Score</td>
                                <td data-label="Details">Good–Excellent (700+ typical)</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            {/* CTA Section */}
             <section id="cta" className={styles.ctaSection}>
                <h2>Get the <b>World of Hyatt Business Credit Card</b> Today!</h2>
                <div className={styles.ctaButtons}>
                    <a href={reviewData.applyLink} className={`${styles.btn} ${styles.btnApply}`} title="From card issuer's secure site" target="_blank" rel="noopener noreferrer sponsored">Apply Now</a>
                     {/* Using dangerouslySetInnerHTML for &amp; */}
                    <a href={reviewData.ratesLink} className={`${styles.btn} ${styles.btnRates}`} target="_blank" rel="noopener noreferrer sponsored" dangerouslySetInnerHTML={{__html:"See Rates &amp; Fees"}}></a>
                </div>
            </section>

             {/* Section 3: Card Overview & Positioning */}
             <section id="section-3" className={styles.reviewSection}>
                <h2 dangerouslySetInnerHTML={{ __html:"Card Overview &amp; Positioning"}}></h2>
                <p>
                    The <b>World of Hyatt Business Credit Card</b> from Chase is a premium hotel rewards tool
                    aimed at businesses wanting robust Hyatt benefits.
                    With a <strong>$199 annual fee</strong>,
                    it outstrips simpler mid-tier cards in cost,
                    but yields stronger perks—like automatic <b>Discoverist</b> status,
                    the ability to fast-track to higher Hyatt tiers via spending-based free night credits,
                    and big earn rates on Hyatt stays or business categories.
                    Given Hyatt points’ well-regarded value (~1.7–2.0 cents each in many redemptions),
                    you can offset the fee if you frequently lodge at Hyatt’s brand portfolio (Hyatt Regency, Park Hyatt, etc.).
                    Let’s see how it stacks up in 2025’s competitive market.
                </p>
            </section>

            {/* Section 4: Earning Hyatt Points & Bonus Categories */}
             <section id="section-4" className={styles.reviewSection}>
                <h2 dangerouslySetInnerHTML={{ __html:"Earning World of Hyatt Points &amp; Bonus Categories"}}></h2>
                <p>
                    The card typically offers:
                </p>
                <ul className={styles.featureList}>
                    <li><strong>4 Bonus Points per $1</strong> on Hyatt stays (plus 5 Base Points from your normal membership for 9 total)</li>
                    {/* Using dangerouslySetInnerHTML for &amp; */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>2x Points</strong> on several business categories (like dining, shipping, advertising, local transit, etc.)—some vary by official T&amp;C so verify the current list"}}></li>
                    <li><strong>2x Points</strong> on general travel or airline tickets in many cases</li>
                    <li><strong>1x Point</strong> on everything else</li>
                </ul>
                <p>
                    Notably, the total 9x on Hyatt is the main draw if you factor in the standard 5x from your World of Hyatt membership.
                    Meanwhile, 2x on broad categories helps accumulate points for businesses with robust overhead in shipping,
                    marketing, or travel.
                    Since Hyatt points are widely considered among the highest value in hotel loyalty,
                    these multipliers can yield significant free night potential or suite upgrades,
                    especially at mid- to high-tier Hyatt properties worldwide.
                </p>
            </section>

            {/* Section 5: Sign-Up Bonus & Redemption Potential */}
             <section id="section-5" className={styles.reviewSection}>
                <h2 dangerouslySetInnerHTML={{ __html:"Sign-Up Bonus &amp; Redemption Potential"}}></h2>
                <p>
                    The sign-up bonus commonly stands at <b>60,000–75,000 Bonus Points</b> after spending $5k in 3 months.
                    Considering a baseline value of ~1.5–2.0 cents each,
                    that’s ~$900–$1,500 in lodging potential if used wisely.
                    Some limited-time promos might push it to 80k or combine with a statement credit.
                    Since Hyatt award charts can be favorable,
                    60k could net multiple nights at mid-tier properties or at least 2 nights at a top-tier luxury brand like Park Hyatt.
                    Keep an eye on 5th night free or lower category sweet spots to stretch your points further.
                    Even so, the initial bonus can easily surpass the $199 annual fee if you redeem effectively.
                </p>
            </section>

             {/* Section 6: Automatic Discoverist Status & Path to Higher Tiers */}
             <section id="section-6" className={styles.reviewSection}>
                <h2>Automatic Discoverist Status & Path to Higher Tiers</h2>
                <p>
                    Cardmembers get <b>automatic Discoverist</b> status in Hyatt’s loyalty program,
                    which includes benefits like:
                </p>
                <ul className={styles.featureList}>
                    <li>10% bonus on base points for stays</li>
                    <li>Upgraded rooms (if available), premium internet, late checkout at many hotels</li>
                    <li>Potential small amenity or bottled water at check-in (varies by brand)</li>
                </ul>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{ __html:"More crucially, the card provides <b>Tier-Qualifying Night Credits</b> or ways to accelerate your route to Explorist or Globalist. Typically, you get a certain number of Tier-Qualifying Night Credits each year, plus extra for each $5k spend (capped). If you aim for <b>Globalist</b> (Hyatt’s top-tier with suite upgrades, lounge access, free breakfast, parking waivers, etc.), the synergy can be invaluable if you’re a big spender. This can drastically reduce your required actual nights. For many brand-loyal travelers, that alone can justify $199 if you recoup thousands in high-tier perks annually."}}></p>
            </section>

             {/* Section 7: No Foreign Transaction Fee & Global Acceptance */}
             <section id="section-7" className={styles.reviewSection}>
                <h2 dangerouslySetInnerHTML={{ __html:"No Foreign Transaction Fee &amp; Global Acceptance"}}></h2>
                <p>
                    Like many Chase travel cards, the World of Hyatt Business card charges <b>no foreign transaction fee</b>,
                    essential for overseas stays or vendor payments.
                    Being on the Visa network ensures wide acceptance globally,
                    especially at major hotels, restaurants, or meeting venues.
                    If your business frequently travels to Hyatt destinations worldwide,
                    you avoid the 3% surcharges that hamper lesser travel cards.
                    Combined with 2x or 4x multipliers,
                    each international purchase can further accelerate your path to free Hyatt nights or improved status.
                </p>
            </section>

             {/* Section 8: 2025 Updates & Potential Changes */}
             <section id="section-8" className={styles.reviewSection}>
                <h2 dangerouslySetInnerHTML={{ __html:"2025 Updates &amp; Potential Changes"}}></h2>
                <ol className={styles.numberedList}>
                    <li><strong>Tier Night Credits Adjustments:</strong>
                    Hyatt or Chase might tweak how many nights you receive automatically or via spend thresholds.
                    Keep an eye on official announcements if you rely on them for upper-tier status.</li>
                    <li><strong>Sign-Up Bonus Variations:</strong>
                    We might see 80k or 100k special offers or short-term statement credits in 2025.
                    If you see a big spike, it’s a prime time to apply or upgrade.</li>
                    <li><strong>New Bonus Categories or Partnerships:</strong>
                    Chase occasionally refreshes bonus categories or brand alliances.
                    For instance, 3x or 5x expansions for certain merchants might appear if synergy with Hyatt’s brand expansions grows.</li>
                    <li><strong>APR Adjustments:</strong>
                    If the prime rate shifts, the card’s 17.49–24.49% variable range might move.
                    Always verify updated T&amp;Cs for exact APR and fees.</li>
                </ol>
                <p>
                    Typically, the card remains stable with its tier-credit strategy for Explorist/Globalist.
                    Any big changes would revolve around how Hyatt evolves its loyalty program or how many free nights or night credits are included.
                    Checking official sources in 2025 ensures you’re aware of the latest perks or promos.
                </p>
            </section>

            {/* Section 9: Real-Life Example Table */}
            <section id="section-9" className={styles.reviewSection}>
                <h2>Real-Life Example: Annual Spend & Points Accumulation</h2>
                <p>
                    Suppose your business invests:
                </p>
                <ul className={styles.featureList}>
                    <li>$8,000 annually in Hyatt stays</li>
                    <li>$4,000 in dining, $3,000 in shipping, $3,000 in airline flights (each at 2x)</li>
                    <li>$20,000 in overhead at 1x (office supplies, general spend not in bonus categories)</li>
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
                                <td data-label="Category">Hyatt Stays</td>
                                <td data-label="Annual Spend">$8,000</td>
                                <td data-label="Points per $">4 (card) + 5 (base) = 9 total, but 4 from card perspective</td>
                                <td data-label="Total Points">+32,000 from card (and 40k more from base loyalty, total ~72k for Hyatt stays if counting synergy)</td>
                            </tr>
                             {/* Using dangerouslySetInnerHTML for &amp; */}
                            <tr dangerouslySetInnerHTML={{__html:'<td data-label="Category">Dining, Shipping, Flights, etc.</td><td data-label="Annual Spend">$10,000</td><td data-label="Points per $">2x</td><td data-label="Total Points">20,000</td>'}}></tr>
                            <tr>
                                <td data-label="Category">Everything Else</td>
                                <td data-label="Annual Spend">$20,000</td>
                                <td data-label="Points per $">1x</td>
                                <td data-label="Total Points">20,000</td>
                            </tr>
                            <tr style={{fontWeight: 'bold', borderTop: '2px solid #dee2e6'}}>
                                <th data-label="Category">Total</th>
                                <th data-label="Annual Spend">$38,000</th>
                                <th data-label="Points per $">—</th>
                                <th data-label="Total Points">72,000 (from card alone) plus synergy from base loyalty on the $8k Hyatt stays</th>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p>
                    That’s <b>72,000</b> from the card’s portion alone if we separate the base Hyatt program’s 5x for transparency.
                    If you add a sign-up bonus of 60k, you’re at <b>132k</b> total from card usage in a year.
                    With Hyatt’s typical value of ~1.7¢ each, that’s over $2,200 in potential lodging.
                    Meanwhile, you also gather Tier-Qualifying Nights from actual stays plus any spend-based credits,
                    pushing you closer to Explorist or even Globalist if you supplement with more nights or higher spend.
                </p>
            </section>

             {/* Section 10: Competitor Analysis */}
             <section id="section-10" className={styles.reviewSection}>
                <h2>Competitor Analysis</h2>
                <p>
                    Other hotel or general business travel cards:
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
                             {/* Using dangerouslySetInnerHTML for ® */}
                            <tr dangerouslySetInnerHTML={{__html:'<td data-label="Card">World of Hyatt Business Card</td><td data-label="Annual Fee">$199</td><td data-label="Rewards">Up to 9x total on Hyatt stays, 2x on categories, 1x else</td><td data-label="Key Advantage">Strong Hyatt synergy, Tier-Qualifying Night spend boosts</td>'}}></tr>
                             {/* Using dangerouslySetInnerHTML for ® */}
                            <tr dangerouslySetInnerHTML={{__html:'<td data-label="Card">Marriott Bonvoy Business® Amex</td><td data-label="Annual Fee">$125</td><td data-label="Rewards">6x at Marriott, 4x on select biz categories, 2x else</td><td data-label="Key Advantage">Annual free night, Marriott network is bigger than Hyatt</td>'}}></tr>
                             {/* Using dangerouslySetInnerHTML for ® */}
                            <tr dangerouslySetInnerHTML={{__html:'<td data-label="Card">Hilton Honors Amex Business</td><td data-label="Annual Fee">$95</td><td data-label="Rewards">12x at Hilton, 6x on big categories, 3x else</td><td data-label="Key Advantage">Gold status, easy high earn, but points worth less vs. Hyatt</td>'}}></tr>
                            {/* Using dangerouslySetInnerHTML for ® */}
                            <tr dangerouslySetInnerHTML={{__html:'<td data-label="Card">Chase Ink Business Preferred®</td><td data-label="Annual Fee">$95</td><td data-label="Rewards">3x on travel, shipping, ads, phone up to $150k; UR points can be transferred to Hyatt</td><td data-label="Key Advantage">Versatility if you want multiple airline/hotel transfer partners beyond just Hyatt</td>'}}></tr>
                        </tbody>
                    </table>
                </div>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{ __html:"If you specifically love <b>Hyatt</b> for its high-value points and upper-tier benefits, this card is the direct route. If you want a broader approach (like Chase UR to multiple airlines/hotels, not just Hyatt), Ink Business Preferred might be better. Marriott or Hilton co-brands have bigger footprints, but typically their point valuations are lower or more variable. Hyatt’s smaller global presence can be a limitation if you travel outside major cities or certain markets. Evaluate if Hyatt’s coverage aligns well with your staff’s typical routes."}}></p>
            </section>

            {/* Section 11: Additional Card Benefits & Business Tools */}
            <section id="section-11" className={styles.reviewSection}>
                 <h2 dangerouslySetInnerHTML={{ __html: "Additional Card Benefits &amp; Business Tools"}}></h2>
                <p>
                    The World of Hyatt Business Card typically includes:
                </p>
                <ul className={styles.featureList}>
                    <li><strong>Primary Rental Car Collision Damage Waiver (CDW)</strong>
                    on business rentals if you decline the rental company coverage and pay with the card.</li>
                     {/* Using dangerouslySetInnerHTML for &amp; */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Purchase Protection &amp; Extended Warranty:</strong> Common for Chase business cards, often up to 120 days of coverage for theft/damage, plus extended warranties on eligible items."}}></li>
                     {/* Using dangerouslySetInnerHTML for &amp; */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Travel/Trip Insurance:</strong> Varies by policy, but can cover trip cancellation/interruption up to certain amounts if paid with the card. Always read official T&amp;C for coverage levels."}}></li>
                    <li><strong>No employee card fees:</strong>
                    Issue them to staff for business spend, each earning 2x or 1x.
                    Manage limits or categories in your Chase for Business online account.</li>
                     {/* Using dangerouslySetInnerHTML for &amp; */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Year-End Summaries &amp; Integrations:</strong> Summaries can help with accounting, plus potential integrations with expense software. This can be crucial if you track overhead meticulously or want to confirm 2x vs. 1x categories usage."}}></li>
                </ul>
                <p>
                    Coupled with no foreign transaction fee,
                    these benefits can significantly reduce your business’s travel costs or risk
                    while simplifying expense management in the background.
                </p>
            </section>

             {/* Section 12: APR & Carrying a Balance */}
             <section id="section-12" className={styles.reviewSection}>
                <h2 dangerouslySetInnerHTML={{ __html:"APR &amp; Carrying a Balance"}}></h2>
                 {/* Using dangerouslySetInnerHTML for ® &amp; */}
                <p dangerouslySetInnerHTML={{ __html:"The card’s purchase APR is typically <b>17.49%–24.49%</b> variable. No special 0% intro is offered for extended months (it’s occasionally 0% for a short window, but not guaranteed). Revolving a balance at ~20% interest quickly outweighs your point gains. For large capital needs, a dedicated low-interest solution or small business loan is likely better. The real advantage is paying in full monthly to enjoy the substantial points from Hyatt or category multipliers. Similarly, <b>cash advances</b> at ~26.49% plus fees are rarely cost-effective. Best practice: treat this as a charge-like business card for monthly overhead or travel, then pay in full to maximize net benefit from the Hyatt points and status perks."}}></p>
            </section>

            {/* Section 13: Potential Downsides */}
            <section id="section-13" className={styles.reviewSection}>
                 <h2>Potential Downsides</h2>
                <ul className={styles.featureList}>
                    <li><strong>$199 Annual Fee:</strong>
                    Higher than most mid-tier business cards, though cheaper than some premium ~ $450+ travel products.
                    Justify it if you truly use Hyatt’s brand or want tier night credits and robust points value.</li>
                    <li><strong>Hyatt’s Smaller Footprint:</strong>
                    Hyatt has fewer properties globally than Marriott or Hilton.
                    If your staff frequently visits areas with no Hyatt, it’s less beneficial than a more ubiquitous brand or general card.</li>
                    <li><strong>2x on Categories vs. 3x or More from Competitors:</strong>
                    While 2x is solid, some business categories could see higher rates with other solutions (like 3x or 4x on shipping or travel).
                    The trade-off is that Hyatt points can be worth more, but run the math for your specific spend patterns.</li>
                    <li><strong>Spend Complexity for Tier Credits:</strong>
                    Achieving Explorist or Globalist by bridging nights with spend can be beneficial,
                    but might push you to place more overhead on the card than you normally would,
                    potentially missing out on higher multipliers from other cards for shipping or marketing, etc.</li>
                    <li><strong>No Freedoms for 2–3 Freed Night Certificates (like some hotel co-brands):</strong>
                    The primary card perk is nights credit, not an automatic free night each year.
                    Some might prefer a Marriott/Hilton business card giving an annual free night instead.</li>
                </ul>
            </section>

            {/* Section 14: Advanced Hyatt Strategies */}
             <section id="section-14" className={styles.reviewSection}>
                 <h2>Advanced Hyatt Strategies</h2>
                <ol className={styles.numberedList}>
                    <li><strong>Utilize Hyatt’s High Point Valuations:</strong>
                    Typically ~1.7–2.0 cents each,
                    so 50k points might save you $850–$1,000 at a top-tier property.
                    Focus on Category 6–7 Hyatts in prime destinations or all-inclusive partners for maximum value.</li>
                    <li><strong>Combine Business + Personal Stays:</strong>
                    If your business or personal travel is flexible,
                    accumulate nights for a single World of Hyatt account.
                    The card’s Tier Night Credits help unify your progress.
                    Watch Hyatt’s brand expansions (like Miraval, SLH).
                    </li>
                    <li><strong>Off-Peak vs. Peak Award Rates:</strong>
                    In 2025, Hyatt fully implemented a dynamic approach with off-peak, standard, and peak.
                    If you can schedule off-peak, you’ll need fewer points for the same property.
                    That can push your average redemption closer to 2¢ or beyond.</li>
                    <li><strong>Spend for Explorist/Globalist:</strong>
                    The card typically gives night credits each $5k or $10k in spend, up to a certain limit.
                    If you’re near Explorist or Globalist, channel overhead to the card to push you over the threshold.
                    Just verify you’re not sacrificing better returns on shipping or ads from other business cards.</li>
                    <li><strong>Track Special Bonus Promotions:</strong>
                    Hyatt occasionally runs brand or seasonal promos (like double points on certain Hyatt brand stays).
                    Stacking that with your card earn can produce monstrous returns.
                    Combine with your status bonus for even bigger synergy.</li>
                </ol>
            </section>

             {/* Section 15: Another Real-Life Example */}
             <section id="section-15" className={styles.reviewSection}>
                <h2>Another Example: Medium-Sized Consulting Firm</h2>
                <p>
                    Suppose your firm invests:
                </p>
                <ul className={styles.featureList}>
                    <li>$12,000 in Hyatt lodging yearly (client site visits in major cities)</li>
                    <li>$6,000 on flights/travel (2x), $4,000 dining (2x), $3,000 shipping (2x)</li>
                    <li>$15,000 everything else at 1x</li> {/* Corrected from $20k in source */}
                </ul>
                <p>
                    That’s a total of $40k. Points from the card: {/* Adjusted total */}
                </p>
                <ul className={styles.featureList}>
                    <li>$12k on Hyatt: effectively 4x from the card = 48k (plus 5x from base program if we factor synergy,
                    but let’s keep the card portion at 48k for clarity)</li>
                    <li>$13k in 2x categories (6 + 4 + 3) = $13k * 2 = 26k</li>
                    <li>$15k in 1x category = 15k</li> {/* Corrected from source */}
                </ul>
                 {/* Recalculating Sum */}
                <p>
                    Summation = 48k + 26k + 15k = <b>89,000</b> from the card alone.
                    Add a sign-up bonus of ~60k = 149k total.
                    If you value points at ~1.8¢,
                    that’s over $2,600 in potential lodging.
                    Meanwhile, you rack up Tier Night Credits from actual nights plus spend-based nights,
                    possibly pushing you near or into Explorist status for 2025–2026 (a ~20% point bonus on future stays + better perks).
                </p>
                 {/* !!! ATTENTION: Please verify the example calculation logic and values above based on the card's exact terms and your expected spend. !!! */}
            </section>

             {/* Section 16: Synergy with Other Chase Cards or Loyalty Programs */}
             <section id="section-16" className={styles.reviewSection}>
                 <h2>Synergy with Other Chase Cards or Loyalty Programs</h2>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{ __html:"Unlike some co-branded cards that let you combine or convert to Ultimate Rewards, the World of Hyatt Business Card typically does <strong>not</strong> let you pool points seamlessly with UR. They remain distinct Hyatt points. However:"}}></p>
                <ul className={styles.featureList}>
                    <li><strong>Separate Freedoms or Ink Cards:</strong>
                    You could hold an Ink Business Preferred or Ink Business Unlimited for big shipping or ad multipliers in UR points,
                    then keep the Hyatt card for lodging or to chase Tier Night Credits.
                    But you can’t just combine the point currencies; each remains separate (UR vs. Hyatt).
                    Some advanced users might transfer UR to Hyatt at 1:1, though, from an Ink or Sapphire Reserve,
                    so effectively you can funnel UR to your Hyatt account plus the direct Hyatt points from this card for maximum synergy if you prefer Hyatt as your end redemption.
                    </li>
                    <li><strong>Employee Cards from Different Portfolios:</strong>
                    If you want employees to earn Hyatt points for lodging specifically,
                    they can use the Hyatt Business card.
                    For shipping or broader overhead, you might use an Ink or a different card if the multiplier is higher.
                    Evaluate whichever yields the best net return on spend categories.
                    </li>
                </ul>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{ __html:"Overall, the direct synergy is that you can <strong>transfer Ultimate Rewards to Hyatt</strong>, supplementing your stash from the co-brand. If you hold a personal Sapphire Reserve or an Ink Business Preferred, you can move UR → Hyatt 1:1, layering with the nights/ status advantage from the Hyatt Business card. That’s a potent route if you adore Hyatt’s brand and want to top up for a big redemption or status threshold."}}></p>
            </section>

             {/* Section 17: Redemption & Point Value Insights */}
             <section id="section-17" className={styles.reviewSection}>
                 <h2 dangerouslySetInnerHTML={{ __html:"Redemption &amp; Point Value Insights"}}></h2>
                <p>
                    <b>Hyatt</b> is frequently praised for consistent high-value redemptions,
                    sometimes around 1.7–2.0 cents each.
                    Key tips:
                </p>
                <ul className={styles.featureList}>
                    <li><strong>Standard Award Chart + Peak/Off-Peak:</strong>
                    In 2025, Hyatt fully implemented a dynamic approach with off-peak, standard, and peak.
                    If you can schedule off-peak, you’ll need fewer points for the same property.
                    That can push your average redemption closer to 2¢ or beyond.</li>
                    <li><strong>Suite Redemptions:</strong>
                    Hyatt offers suite upgrades or suite awards using points.
                    This can be a big leap in comfort for a moderate additional point cost,
                    especially if traveling with staff or family.
                    Alternatively, if you’re chasing Globalist, you might receive better suite upgrade chance with top-tier status anyway.</li>
                    {/* Using dangerouslySetInnerHTML for &amp; */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>All-Inclusive &amp; SLH Partnerships:</strong> Hyatt’s portfolio includes smaller luxury hotels under the SLH (Small Luxury Hotels) alliance, plus all-inclusives in certain regions. These can yield outsized redemption value. Check availability and compare cash rates to see if you’re hitting 2–3 cents each in prime scenarios."}}></li>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>5-Brand or Category Milestone Rewards:</strong> Hyatt also has milestone freebies or Category 1–4 free night certificates at certain stay thresholds. Combining those with your Tier Night Credits from the card can lead to multiple free nights or suite upgrades each year."}}></li>
                </ul>
                <p>
                    Ultimately, if your business or you can strategically redeem during off-peak or for high-end resorts,
                    Hyatt points can deliver amazing ROI that easily justifies the $199 fee.
                </p>
            </section>

             {/* Section 18: Competitor & Alternative Cards */}
             <section id="section-18" className={styles.reviewSection}>
                 <h2 dangerouslySetInnerHTML={{ __html:"Competitor &amp; Alternative Cards"}}></h2>
                <p>
                    In addition to other hotel co-brands, consider general travel cards:
                </p>
                <ul className={styles.featureList}>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Ink Business Preferred</strong> ($95 AF, 3x on shipping/travel/ads, etc., transferrable to Hyatt 1:1). Could be simpler if you want broader redemption options or if you prefer to keep UR flexible for airlines as well. But you won’t get the direct Hyatt Tier Night Credits or automatic Discoverist status from that approach."}}></li>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Amex Business Platinum</strong> ($695 AF, big lounge coverage, 1.5x on large purchases, etc.), but no direct synergy with Hyatt unless you transfer MR to an airline, then pay for Hyatt, or do a statement credit. Not as direct for Hyatt fans, though the travel perks can be broader for your employees."}}></li>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Marriott Bonvoy or Hilton Biz Cards</strong> if those chains have better coverage where you travel or you prefer their loyalty program. Some come with free night certificates or cheaper annual fees."}}></li>
                </ul>
                <p>
                    If you are set on <b>Hyatt</b> for high-value points and minimal chain size that leads to more consistent experiences,
                    the World of Hyatt Business Card is uniquely tailored with direct night credits.
                    If your staff visits areas lacking Hyatt coverage, though,
                    a more general or larger brand co-brand might be better.
                </p>
            </section>

             {/* Section 19: Who Should Get the Card? */}
             <section id="section-19" className={styles.reviewSection}>
                <h2>Who Should Get the World of Hyatt Business Card?</h2>
                 <div className={styles.prosCons}>
                    <div className={styles.pros}>
                        <h3>Yes, If You:</h3>
                        <ul className={styles.featureList}>
                            <li>Are a <strong>Hyatt loyalist</strong> or see good coverage where your business travels</li>
                            <li>Want <strong>fast-tracking to higher Hyatt status</strong> with Tier Night Credits from spending</li>
                            <li>Value <strong>high-value hotel points</strong> (~1.7–2.0¢ each) to offset the $199 annual fee</li>
                             {/* Using dangerouslySetInnerHTML for ® */}
                            <li dangerouslySetInnerHTML={{__html:"Don’t mind focusing lodging on <strong>Hyatt’s smaller footprint</strong> for big payoffs"}}></li>
                             {/* Using dangerouslySetInnerHTML for &amp; */}
                            <li dangerouslySetInnerHTML={{__html:"Like the <strong>no foreign transaction fee</strong> plus standard Chase travel perks &amp; insurances"}}></li>
                        </ul>
                    </div>
                    <div className={styles.cons}>
                        <h3>No, If You:</h3>
                        <ul className={styles.featureList}>
                            <li>Prefer a <strong>larger hotel chain</strong> (e.g., Marriott, Hilton, IHG) or brand-agnostic approach</li>
                            <li>Can’t justify <strong>$199 annual fee</strong> or want a cheaper/no-fee solution</li>
                             {/* Using dangerouslySetInnerHTML for ® */}
                            <li dangerouslySetInnerHTML={{__html:"Want a <strong>free night certificate each year</strong> from your business card (some other co-brands do that automatically)"}}></li>
                            <li>Need <strong>broader acceptance or transfer flexibility</strong> like Chase Ink UR (multi-partner) or Amex MR</li>
                             {/* Using dangerouslySetInnerHTML for ® */}
                            <li dangerouslySetInnerHTML={{__html:"Rarely stay at <strong>Hyatt properties</strong> or your staff’s travel spots have limited Hyatt presence"}}></li>
                        </ul>
                    </div>
                </div>
            </section>

             {/* CTA Section */}
             <section id="cta" className={styles.ctaSection}>
                <h2>Get the <b>World of Hyatt Business Credit Card</b> Today!</h2>
                <div className={styles.ctaButtons}>
                    <a href={reviewData.applyLink} className={`${styles.btn} ${styles.btnApply}`} title="From card issuer's secure site" target="_blank" rel="noopener noreferrer sponsored">Apply Now</a>
                     {/* Using dangerouslySetInnerHTML for &amp; */}
                    <a href={reviewData.ratesLink} className={`${styles.btn} ${styles.btnRates}`} target="_blank" rel="noopener noreferrer sponsored" dangerouslySetInnerHTML={{__html:"See Rates &amp; Fees"}}></a>
                </div>
            </section>


             {/* Section 20: Final Thoughts & Disclaimer */}
             <section id="section-20" className={styles.reviewSection}>
                 <h2 dangerouslySetInnerHTML={{ __html:"Final Thoughts &amp; Disclaimer"}}></h2>
                <p>
                    The <strong>World of Hyatt Business Credit Card</strong> is a compelling, albeit niche, business card
                    for those partial to Hyatt’s higher-value redemption or comfortable with its smaller brand portfolio.
                    At <b>$199</b> per year, you gain <b>Discoverist</b> status, big multipliers on Hyatt stays and business categories,
                    plus crucial Tier Night Credits that can push you to Explorist or even Globalist if you combine them with actual stays.
                    For travelers who love the consistent upscale experience at Hyatts (like Park Hyatt, Grand Hyatt, Andaz, etc.),
                    the card’s synergy with premium redemption rates can quickly outstrip its fee.
                    Meanwhile, the sign-up bonus can net multiple nights at mid-tier properties or a few nights at top-tier ones.
                    If you rarely see Hyatts on your routes, prefer a brand with more coverage, or want a cheaper approach,
                    consider Marriott/Hilton co-brands or general travel cards.
                    Ultimately, if your staff or you can leverage the card’s night credits for status and extract 1.7–2.0¢ from each point,
                    it’s a potent solution in 2025’s business lodging space.
                </p>
                 {/* Using dangerouslySetInnerHTML for ® &amp; */}
                <p dangerouslySetInnerHTML={{ __html:"<strong>Disclaimer:</strong> Terms, APR, and sign-up bonuses vary. Always check official Chase/Hyatt documentation for exact details. We may earn affiliate commissions from certain links, but editorial opinions remain independent. Examples of redemption or point valuations are estimates; your usage or peak/off-peak rates can differ. If you revolve balances at ~17–24% APR, interest can erode the card’s reward advantage. Paying statements in full is recommended for maximum net benefit. Tier Night Credits or spending thresholds can change over time; consult 2025 T&amp;Cs for the most accurate rules."}}></p>
            </section>

            {/* E-A-T Section - Adapted for Hyatt Business */}
             <section id="eat-expertise-authority-trustworthiness" className={`${styles.reviewSection} ${styles.eatSection}`}>
                <h2 dangerouslySetInnerHTML={{ __html: "Our Commitment to E-A-T: Expertise, Authority &amp; Trustworthiness"}}></h2>
                 {/* Using E-A-T text adapted for Hyatt Business */}
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
                    in business credit cards and hotel rewards, including the World of Hyatt program and its high-value points.</li>
                    <li><strong>Real-Time Updates:</strong>
                    We continually check official issuer materials (Chase/Hyatt)
                    and user data to maintain current rates, terms, and Tier Night Credit rules.</li>
                    <li dangerouslySetInnerHTML={{ __html: "<strong>Conferences &amp; Webinars:</strong> Our team attends financial and travel events, enriching our knowledge base with industry insights on maximizing hotel loyalty for business."}}></li>
                </ul>
                <h3>2. Authority</h3>
                <ul className={styles.featureList}>
                    <li><strong>Detailed Coverage:</strong>
                    This review offers an exhaustive look
                    at the World of Hyatt Business Credit Card, from the $199 fee to status acceleration strategies.</li>
                    <li><strong>Trusted By Major Outlets:</strong>
                    Our articles are frequently cited by national finance
                    and travel news sites for hotel card and business rewards analysis.</li>
                    <li><strong>Full Disclosure:</strong>
                    If affiliate links or promotions exist, we clearly state them,
                    ensuring objective editorial content.</li>
                </ul>
                <h3>3. Trustworthiness</h3>
                <ul className={styles.featureList}>
                    <li><strong>Independent Analysis:</strong>
                    We never let advertisers influence our ratings or opinions on the card's value.</li>
                    <li><strong>Frequent Revisions:</strong>
                    We revise reviews whenever new offers appear or Hyatt adjusts its loyalty program or Tier Night requirements.</li>
                    <li><strong>Community Feedback:</strong>
                    We encourage open discussion in comments,
                    fostering transparency and additional user insights on Hyatt business travel.</li>
                     {/* Using Link component for internal link */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Data Security:</strong> We prioritize user privacy and follow best practices, outlined in our <a href='/privacy-policy'>Privacy Policy</a>."}}>
                        {/* Corrected: <Link href="/privacy-policy"><a>Privacy Policy</a></Link> */}
                    </li>
                </ul>
                <p dangerouslySetInnerHTML={{ __html: "By following these E‑A‑T principles, we aim to guide you responsibly toward a credit card that fits your business needs and maximizes your travel rewards within the World of Hyatt program." }}></p>
            </section>

          </article>
        </div> {/* Close reviewContainer */}
      </main>

      
    </>
  );
}

export default HyattBusinessReviewPage;