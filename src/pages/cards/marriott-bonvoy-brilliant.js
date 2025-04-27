// Example Path: pages/reviews/marriott-bonvoy-brilliant.js
// Or: pages/reviews/[slug].js (if using dynamic routing with 'marriott-bonvoy-brilliant' as slug)

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
  cardName: 'Marriott Bonvoy Brilliant™ American Express® Card',
  title: 'Marriott Bonvoy Brilliant American Express Card – In-Depth 2025 Review', // Removed ™/® for simplicity here if needed
  description: 'A 2000-word review of the Marriott Bonvoy Brilliant American Express Card, focusing on hotel perks, elite status, annual credits, 2025 updates, and advanced usage strategies for loyal Marriott travelers.',
  keywords: 'Marriott Bonvoy, Marriott, Amex, credit card, hotel rewards, 2025',
  author: 'TravelCardInsider', // *** REPLACE with your actual author/site name ***
  imageUrl: '/NUS000000313_480x304_straight_withname.avif', // *** VERIFY PATH in /public ***
  ratingValue: 8.9, // From Marriott Brilliant HTML
  applyLink: 'https://www.americanexpress.com/us/credit-cards/card/marriott-bonvoy-brilliant/', // *** REPLACE with actual Brilliant APPLY URL ***
  ratesLink: 'https://www.americanexpress.com/us/credit-cards/card-application/apply/prospect/terms/marriott-bonvoy-brilliant-card/25330-10-0#FeeTable', // *** VERIFY URL ***
  // Image dimensions (MUST BE ACCURATE for next/image) - Guessed from filename
  imageWidth: 480, // *** REPLACE with actual image width ***
  imageHeight: 304, // *** REPLACE with actual image height ***
};

// --- Rating Tooltip Content (Customize if needed for Bonvoy Brilliant) ---
const ratingCriteria = [ // *** VERIFY/CUSTOMIZE these criteria for Brilliant Rating ***
    'Free Night Value (85k Cert)',
    'Platinum Elite Status Perks',
    'Dining Credits ($300/year)',
    'Marriott Points Earning (6x/3x)',
    'Annual Fee ($650)'
];

function MarriottBonvoyBrilliantReviewPage() {
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
  // !!! VERIFY all URLs, counts, and details FOR MARRIOTT BRILLIANT !!!
  const siteUrl = "https://www.travelcardinsider.com"; // *** REPLACE with your actual site URL ***
  const pageUrl = `${siteUrl}/reviews/marriott-bonvoy-brilliant`; // *** REPLACE with your actual page URL ***
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Marriott Bonvoy Brilliant™ American Express® Card",
    "image": `${siteUrl}${reviewData.imageUrl}`, // *** Assuming imageUrl starts with / ***
    "description": "The Marriott Bonvoy Brilliant American Express Card offers premium Marriott benefits, annual statement credits, hotel elite perks (Platinum Elite), and high earning potential.", // Adjusted description
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
      "ratingCount": 550, // *** REPLACE with actual or estimated count ***
      "reviewCount": 550  // *** REPLACE with actual or estimated count ***
    },
    "offers": {
      "@type": "Offer",
      "url": reviewData.applyLink.startsWith('http') ? reviewData.applyLink : `${siteUrl}${reviewData.applyLink}`, // *** Ensure full APPLY URL ***
      "priceCurrency": "USD",
      "price": "650", // Annual Fee for Brilliant
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

      <Header />

      <main>
        {/* Spacing for fixed header */}
        <div style={{ marginTop: '5rem' }}></div>

        {/* Review Container using CSS Module */}
        <div className={styles.reviewContainer}>
          <article> {/* Wrap main content in article */}
            {/* ============= REVIEW HEADER ============= */}
            <header className={styles.reviewHeader}>
               {/* Using dangerouslySetInnerHTML for ™ and ® */}
              <h1 dangerouslySetInnerHTML={{ __html: "Marriott Bonvoy Brilliant™ American Express® Card – In-Depth 2025 Review"}}></h1>

              {/* Section 1 Content (Part of Header Structure in Template) */}
              <section id="section-1">
                 {/* Using dangerouslySetInnerHTML for ™, ®, and & */}
                <div className={styles.intro}>
                  <p dangerouslySetInnerHTML={{ __html: "The <strong>Marriott Bonvoy Brilliant™ American Express® Card</strong> stands at the premium tier of Marriott co-branded credit cards. With a <strong>$650 annual fee</strong>, it caters to frequent travelers who prefer Marriott’s extensive hotel network for both leisure and business stays. Benefits include an annual <strong>free night certificate (worth up to 85k points)</strong>, <strong>Marriott Bonvoy Platinum Elite status</strong> (subject to current T&amp;Cs), plus statement credits such as a <strong>$300 dining credit</strong> in many cases. This review will dissect 20 sections, from quick stats (including APR info) to synergy with the Marriott Bonvoy loyalty program, 2025 updates, disclaimers, advanced usage tips, and how it might fit your travel portfolio if you love Marriott’s over 7,000+ properties worldwide."}}></p>
                </div>

                {/* Image Container */}
                <div className={styles.cardImageContainer}>
                  {/* Class name adjusted */}
                   <Image
                     src={reviewData.imageUrl}
                     alt={"Marriott Bonvoy Brilliant American Express Card"}
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

                  {/* STAR RATING - Corrected style value */}
                  <div className={styles.starRating} title={`Rated ${reviewData.ratingValue} out of 10 stars`} style={{ '--rating': `${reviewData.ratingValue * 10}%` }}>
                    <span>★★★★★</span>
                    <span className={styles.filledStars}>★★★★★</span>
                  </div>

                  <div className={styles.ratingDescription}>
                     {/* Using dangerouslySetInnerHTML for &amp; */}
                    <i dangerouslySetInnerHTML={{__html:"A premium Marriott card offering Platinum status, free night certificates, &amp; dining credits—perfect for frequent Bonvoy loyalists willing to pay a higher fee."}}></i>
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
                                <td data-label="Details">$650</td>
                            </tr>
                            <tr>
                                <td data-label="Feature">APR Range</td>
                                <td data-label="Details" dangerouslySetInnerHTML={{__html:"20.99%–29.99% Variable (purchases)"}}></td>
                            </tr>
                            <tr>
                                <td data-label="Feature">Sign-Up Bonus</td>
                                <td data-label="Details">Often 95k–125k Bonvoy points after $5k–$6k in 3 months</td>
                            </tr>
                             {/* Using dangerouslySetInnerHTML for &amp; */}
                            <tr dangerouslySetInnerHTML={{__html:'<td data-label="Feature">Rewards Rate</td><td data-label="Details">Up to 6x at Marriott, 3x at restaurants &amp; flights, 2x other</td>'}}></tr>
                            <tr>
                                <td data-label="Feature">Annual Credits</td>
                                <td data-label="Details">$300 dining statement credit (distributed monthly), plus up to $100 property credit on certain stays</td>
                            </tr>
                             {/* Using dangerouslySetInnerHTML for &amp; */}
                            <tr dangerouslySetInnerHTML={{__html:'<td data-label="Feature">Free Night Certificate</td><td data-label="Details">Valued up to 85k points (subject to T&amp;Cs, typically once per year)</td>'}}></tr>
                            <tr>
                                <td data-label="Feature">Foreign Transaction Fee</td>
                                <td data-label="Details">None</td>
                            </tr>
                            <tr>
                                <td data-label="Feature">Elite Status</td>
                                <td data-label="Details">Platinum Elite (terms apply) or guaranteed Gold if offers change</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            {/* CTA Section */}
             <section id="cta" className={styles.ctaSection}>
                 {/* Using dangerouslySetInnerHTML for ™ & ® */}
                <h2 dangerouslySetInnerHTML={{__html:"Get the <b>Marriott Bonvoy Brilliant™ American Express® Card</b> Today!"}}></h2>
                <div className={styles.ctaButtons}>
                    <a href={reviewData.applyLink} className={`${styles.btn} ${styles.btnApply}`} title="From card issuer's secure site" target="_blank" rel="noopener noreferrer sponsored">Apply Now</a>
                    {/* Using dangerouslySetInnerHTML for &amp; */}
                    <a href={reviewData.ratesLink} className={`${styles.btn} ${styles.btnRates}`} target="_blank" rel="noopener noreferrer sponsored" dangerouslySetInnerHTML={{__html:"See Rates &amp; Fees"}}></a>
                </div>
            </section>

            {/* Section 3: Card Overview & Positioning */}
             <section id="section-3" className={styles.reviewSection}>
                 <h2 dangerouslySetInnerHTML={{ __html: "Card Overview &amp; Positioning" }}></h2>
                 {/* Using dangerouslySetInnerHTML for ™, ®, &amp; */}
                <p dangerouslySetInnerHTML={{ __html: "The <strong>Marriott Bonvoy Brilliant™ American Express® Card</strong> is a top-tier co-branded Marriott card from American Express. It’s aimed squarely at travelers who frequently stay within the <strong>Marriott Bonvoy</strong> ecosystem (including brands like St. Regis, Ritz-Carlton, JW Marriott, W Hotels, Sheraton, Westin, and more). The <strong>$650 annual fee</strong> is hefty, but the card offsets it with monthly dining credits (totaling up to $300/year), an annual free night certificate (up to 85,000 points in value), and <strong>complimentary Platinum Elite status</strong>—which includes perks like lounge access, potential suite upgrades, free breakfast at many brands, late checkout, and more. In 2025, the Bonvoy Brilliant competes with other premium hotel cards and alternative high-fee travel products. If you harness Marriott’s wide property footprint or relish Platinum perks, this card can more than justify its cost." }}></p>
            </section>

            {/* Section 4: Earning Marriott Bonvoy Points & Category Multipliers */}
            <section id="section-4" className={styles.reviewSection}>
                <h2 dangerouslySetInnerHTML={{ __html: "Earning Marriott Bonvoy Points &amp; Category Multipliers" }}></h2>
                <p>
                    The card typically offers:
                </p>
                <ul className={styles.featureList}>
                    <li><strong>6x Bonvoy points</strong> for every $1 spent at Marriott properties</li>
                    <li><strong>3x</strong> on restaurants worldwide and flights booked directly with airlines</li>
                    <li><strong>2x</strong> on all other purchases</li>
                </ul>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{ __html: "Coupled with your Marriott membership, you’ll also earn base Bonvoy points for each stay (usually 10 points/$1 at most Marriott brands), plus your elite tier multiplier (e.g., Platinum = 50% bonus on base points). That synergy can yield effective double-digit returns for Marriott spend. If you frequently dine out or fly, 3x is a decent rate (though some separate travel cards might outdo it). Overall, if you keep most spending on Bonvoy Brilliant, you’ll accumulate substantial points redeemable across Marriott’s broad global presence."}}></p>
            </section>

            {/* Section 5: Sign-Up Bonus & Redemption Potential */}
            <section id="section-5" className={styles.reviewSection}>
                <h2 dangerouslySetInnerHTML={{ __html: "Sign-Up Bonus &amp; Redemption Potential" }}></h2>
                <p>
                    The sign-up bonus for the Bonvoy Brilliant often hovers between <strong>95,000 and 125,000</strong> Marriott Bonvoy points
                    after meeting a minimum spend of $5k–$6k in the first 3 months.
                    Some limited-time or referral offers may exceed that.
                    Given Marriott points’ variable value (~0.7–0.9 cents each in many redemptions,
                    occasionally 1¢+ at top-tier or peak times),
                    100k points can be worth roughly $700–$900 or more, depending on redemption.
                    Factor in the annual free night certificate (up to 85k points) as another big chunk of potential value.
                    If you choose expensive Ritz-Carlton or St. Regis stays,
                    you might surpass $1,000 in effective value from that certificate alone.
                </p>
            </section>

            {/* Section 6: Elite Status & Hotel Perks */}
            <section id="section-6" className={styles.reviewSection}>
                <h2 dangerouslySetInnerHTML={{ __html: "Elite Status &amp; Hotel Perks" }}></h2>
                <p dangerouslySetInnerHTML={{ __html: "One of the biggest draws for the <strong>Bonvoy Brilliant</strong> is the complimentary <strong>Platinum Elite</strong> status (though in the past, some versions only guaranteed Gold with a path to Platinum via spend—always confirm the latest T&amp;Cs). Assuming Platinum is included:"}}></p>
                <ul className={styles.featureList}>
                    <li><strong>50% Bonus Points</strong> on stays (base points = 10 per $1 at most Marriott brands, so +50% = 15 points/$1 total if combined with standard membership lines)</li>
                    <li><strong>Lounge Access</strong> or free breakfast at most brands (Courtyard, Marriott, Sheraton, Westin, etc.)</li>
                    <li><strong>Room Upgrades</strong> (including standard suites, if available)</li>
                    <li><strong>4pm Late Checkout</strong> (guaranteed at many properties, subject to availability at resorts)</li>
                    <li><strong>Welcome Gift</strong> (points, breakfast, or beverage amenity depending on the brand)</li>
                </ul>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{ __html: "If you utilize these perks across multiple stays, you could easily recoup thousands in freebies or upgrades each year. Additionally, the card typically provides <strong>25 Elite Night Credits</strong> for Marriott status each year. This helps push you further if you aim for higher levels like Titanium or Ambassador. Overall, Platinum is a sweet spot for Marriott loyalists, and this card can auto-grant that valuable mid-to-upper tier perk."}}></p>
            </section>

            {/* Section 7: Airline Fee Credit or Dining Credits */}
            <section id="section-7" className={styles.reviewSection}>
                 <h2 dangerouslySetInnerHTML={{ __html: "Dining Credits &amp; Other Statement Credits" }}></h2>
                <p>
                    The <strong>Marriott Bonvoy Brilliant</strong> historically offered a <strong>$300 credit</strong>
                    to offset spending at Marriott properties. In recent updates (2023–2025),
                    that credit evolved into a <strong>$25 monthly dining statement credit</strong>
                    at restaurants worldwide,
                    totaling $300 annually if fully used.
                    Check your latest terms to confirm.
                    Another highlight can be a <strong>$100 property credit</strong> for two-night+ stays at The Ritz-Carlton or St. Regis (sometimes called the “property credit benefit”).
                    Essentially, these statement credits aim to soften the blow of the $650 annual fee,
                    especially if you dine out often or stay in Marriott’s higher-end hotels.
                    Making a point to use these monthly or annually can effectively slash your net cost to near $350
                    before factoring in the free night or additional perks.
                </p>
            </section>

            {/* Section 8: 2025 Updates & Potential Changes */}
            <section id="section-8" className={styles.reviewSection}>
                 <h2 dangerouslySetInnerHTML={{ __html: "2025 Updates &amp; Potential Changes"}}></h2>
                <ol className={styles.numberedList}>
                    <li><strong>Possible Fee Adjustments:</strong>
                    The card used to be $450, then jumped to $650. It’s possible future expansions of perks could nudge it higher.
                    Keep an eye out for official announcements in 2025.</li>
                    <li><strong>Evolving Statement Credits:</strong>
                    Amex or Marriott may shift from monthly dining credits to different travel or property credits.
                    The overall total is likely to remain near $300, but how it’s distributed might change.</li>
                    <li><strong>Sign-Up Bonus Changes:</strong>
                    Flash offers of 150k+ Bonvoy points might appear, or limited-time free night certificates on top of points.
                    Watch for promotions if you’re not applying immediately.</li>
                     {/* Using dangerouslySetInnerHTML for &amp; */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Status Benefit Modifications:</strong> Currently, many cardholders enjoy immediate Platinum Elite. If Marriott/Amex changes the agreement, it could revert to automatic Gold plus a spend path to Platinum. Always verify the current offering before applying."}}></li>
                </ol>
                <p>
                    Generally, the Bonvoy Brilliant evolves gradually, so no abrupt overhauls are expected.
                    The biggest watch might be if the annual fee climbs again or the statement credits shift to a different redemption flow.
                    Double-check official Amex or Marriott channels for the latest 2025 details.
                </p>
            </section>

            {/* Section 9: Real-Life Example Table */}
            <section id="section-9" className={styles.reviewSection}>
                <h2>Real-Life Example: Annual Spend & Points</h2>
                <p>
                    Suppose you spend yearly:
                </p>
                <ul className={styles.featureList}>
                    <li>$5,000 at Marriott properties</li>
                    <li>$6,000 at restaurants worldwide</li>
                    <li>$4,000 on flights booked directly with airlines</li>
                    <li>$15,000 on general everyday purchases</li>
                </ul>
                <p>
                    Points from the card’s perspective:
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
                                <td data-label="Category">Marriott Hotels</td>
                                <td data-label="Annual Spend">$5,000</td>
                                <td data-label="Points per $">6x</td>
                                <td data-label="Total Points">30,000</td>
                            </tr>
                            <tr>
                                <td data-label="Category">Restaurants</td>
                                <td data-label="Annual Spend">$6,000</td>
                                <td data-label="Points per $">3x</td>
                                <td data-label="Total Points">18,000</td>
                            </tr>
                            <tr>
                                <td data-label="Category">Flights (direct)</td>
                                <td data-label="Annual Spend">$4,000</td>
                                <td data-label="Points per $">3x</td>
                                <td data-label="Total Points">12,000</td>
                            </tr>
                            <tr>
                                <td data-label="Category">All Other</td>
                                <td data-label="Annual Spend">$15,000</td>
                                <td data-label="Points per $">2x</td>
                                <td data-label="Total Points">30,000</td>
                            </tr>
                            <tr style={{fontWeight: 'bold', borderTop: '2px solid #dee2e6'}}>
                                <th data-label="Category">Total</th>
                                <th data-label="Annual Spend">$30,000</th>
                                <th data-label="Points per $">—</th>
                                <th data-label="Total Points">90,000</th>
                            </tr>
                        </tbody>
                    </table>
                </div>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{ __html: "You’d earn <strong>90,000</strong> Bonvoy points from spend alone. Add in a potential sign-up bonus of 100k = 190k total. If we assume ~0.8¢ per point, that’s ~$1,520 in potential Marriott stays. Factor in the free night certificate worth up to 85k points (valued at possibly $400–$700, depending on redemption), plus the intangible gains from Platinum Elite perks (breakfast, lounge, etc.). Although the $650 fee is steep, these combined benefits can yield a net positive if you’re a frequent Marriott guest."}}></p>
            </section>

             {/* Section 10: Competitor Analysis */}
             <section id="section-10" className={styles.reviewSection}>
                 <h2>Competitor Analysis</h2>
                <p>
                    Notable competition in the premium hotel/travel card space:
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
                            <tr dangerouslySetInnerHTML={{__html:'<td data-label="Card">Marriott Bonvoy Brilliant (Amex)</td><td data-label="Annual Fee">$650</td><td data-label="Rewards">6x Marriott, 3x dining/flights, 2x elsewhere</td><td data-label="Key Advantage">Platinum Elite status, free night up to 85k points, $300 dining credit</td>'}}></tr>
                            <tr>
                                <td data-label="Card">Hilton Honors American Express Aspire</td>
                                <td data-label="Annual Fee">$450</td>
                                <td data-label="Rewards">14x Hilton, 7x flights/restaurants/car rentals, 3x else</td>
                                <td data-label="Key Advantage">Automatic Diamond, $250 resort + $250 airline credit, free weekend night certificate</td>
                            </tr>
                             {/* Using dangerouslySetInnerHTML for ® */}
                            <tr dangerouslySetInnerHTML={{__html:'<td data-label="Card">IHG® Rewards Premier (Chase)</td><td data-label="Annual Fee">$99–$120</td><td data-label="Rewards">Up to 26x at IHG (with membership), 5x travel/dining/gas, etc.</td><td data-label="Key Advantage">Lower fee, Platinum IHG status, free annual night (capped category)</td>'}}></tr>
                             {/* Using dangerouslySetInnerHTML for ® */}
                            <tr dangerouslySetInnerHTML={{__html:'<td data-label="Card">Amex Platinum (general travel)</td><td data-label="Annual Fee">$695</td><td data-label="Rewards">5x flights/hotels via Amex Travel, 1x else</td><td data-label="Key Advantage">Extensive lounge access, many statement credits, automatic Hilton Gold (less than Diamond)</td>'}}></tr>
                        </tbody>
                    </table>
                </div>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{ __html: "If you favor Marriott’s extensive portfolio, the Bonvoy Brilliant is the direct approach. If you prefer Hilton, the Aspire card from Amex might be more valuable (lower fee, automatic top-tier Diamond). Meanwhile, general premium cards like the <strong>Amex Platinum</strong> or <strong>Chase Sapphire Reserve</strong> ($550 fee) can be better if you want more flexible points and multi-brand coverage. Decide based on how often you stay at Marriott, the value you place on Platinum Elite benefits, and whether the free night (85k value) plus monthly dining credits offset $650 in your eyes."}}></p>
            </section>

            {/* Section 11: Additional Card Benefits & Travel Protections */}
             <section id="section-11" className={styles.reviewSection}>
                 <h2 dangerouslySetInnerHTML={{ __html: "Additional Card Benefits &amp; Travel Protections" }}></h2>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{ __html: "The Bonvoy Brilliant from Amex includes:"}}></p>
                <ul className={styles.featureList}>
                    <li><strong>Trip Delay/Cancellation Insurance:</strong>
                    Coverage for nonrefundable expenses if your trip is delayed/canceled for a covered reason (specific time thresholds apply).</li>
                     {/* Using dangerouslySetInnerHTML for &amp; */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Secondary Car Rental Loss &amp; Damage Insurance:</strong> Some coverage when you pay for the rental with your card (though it might not be primary). Always confirm the exact T&amp;Cs if you rely heavily on this coverage."}}></li>
                     {/* Using dangerouslySetInnerHTML for &amp; */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Purchase Protection &amp; Extended Warranty:</strong> Common American Express perks that cover eligible items against damage/theft for a limited period, plus extends manufacturer warranties."}}></li>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Global Entry/TSA PreCheck Credit:</strong> Up to $100 every 4–4.5 years (depending on the program) to expedite airport security lines."}}></li>
                     {/* Using dangerouslySetInnerHTML for ® &amp; */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Complimentary Boingo Wi-Fi &amp; Other Amex Offers:</strong> Periodic merchant or travel credits (sometimes you’ll see rebates for dining, shipping, or retail). Checking your Amex Offers section can yield extra savings each month."}}></li>
                </ul>
                <p>
                    These intangible benefits add security and convenience.
                    Coupled with no foreign transaction fees,
                    you can swipe confidently anywhere Marriott or Amex is accepted,
                    which is quite broad globally.
                    If you frequently travel overseas, these coverage perks can be quite handy.
                </p>
            </section>

            {/* Section 12: APR & Carrying a Balance */}
            <section id="section-12" className={styles.reviewSection}>
                <h2 dangerouslySetInnerHTML={{ __html: "APR &amp; Carrying a Balance" }}></h2>
                <p>
                    The Bonvoy Brilliant typically has a <strong>20.99%–29.99%</strong> variable APR.
                    This is high for ongoing balances, standard among many premium rewards cards.
                    Because interest charges can quickly erode the card’s benefits,
                    best practice is to pay statements in full each month.
                    If you require a 0% intro APR or a low-interest solution for big purchases,
                    you might seek a different product.
                    This Amex is designed for travelers who want to maximize Marriott perks
                    rather than revolve large balances.
                    Similarly, <strong>cash advances</strong> incur immediate fees plus ~29.99% APR—avoid unless absolutely necessary.
                </p>
            </section>

            {/* Section 13: Potential Downsides */}
             <section id="section-13" className={styles.reviewSection}>
                <h2>Potential Downsides</h2>
                <ul className={styles.featureList}>
                    <li><strong>$650 Annual Fee:</strong>
                    Very high for a co-branded hotel card.
                    Even with $300 dining credits and an 85k free night, some may find it difficult to justify unless they truly utilize Platinum perks or frequent Marriott stays.</li>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Points Valuation:</strong> Marriott Bonvoy points typically hover around 0.7–0.9 cents each (sometimes 1¢+ with strategic redemptions). They’re not the highest-value hotel currency, so if you aim for maximum “cents per point,” programs like Hyatt might outshine Bonvoy in certain scenarios."}}></li>
                    <li><strong>Dining Credit Use:</strong>
                    The monthly $25 installments require consistent usage.
                    If you forget or don’t dine out monthly, you lose part of the credit.
                    Some prefer a single $300 chunk for Marriott stays, which was the older structure.</li>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Limited Primary Car Insurance:</strong> The coverage is often secondary unless traveling abroad or if you meet certain conditions. Cards like the Chase Sapphire Reserve® might be better for primary auto rental coverage."}}></li>
                    <li><strong>Travel Patterns:</strong>
                    If you rarely stay at Marriott or prefer boutique accommodations,
                    you might not recoup enough from the card’s suite of Marriott-centric benefits.</li>
                </ul>
            </section>

            {/* Section 14: Advanced Marriott Bonvoy Strategies */}
            <section id="section-14" className={styles.reviewSection}>
                <h2>Advanced Marriott Bonvoy Strategies</h2>
                <ol className={styles.numberedList}>
                    <li><strong>Maximize the Free Night (85k Points) Certificate:</strong>
                    Use it at high-category Marriott hotels or during peak events (like a prime city location or popular resort).
                    If the cash rate is $600+, you’re extracting excellent value.</li>
                    <li><strong>Book 5-Night Award Stays:</strong>
                    Marriott offers a fifth night free on award stays,
                    effectively averaging down your per-night cost in points.
                    This is especially impactful at pricey category 7 or 8 properties,
                    letting you stretch your points further.</li>
                    <li><strong>Take Advantage of Platinum Elite Benefits:</strong>
                    Priority check-in, suite upgrades (when available), and free breakfast or lounge access can save you $20–$50 daily on food costs alone.
                    Over multiple nights, that might be hundreds in savings.</li>
                    <li><strong>Check Amex Offers Regularly:</strong>
                    You might find extra discounts or cash back at Marriott properties or partner merchants—these stack with your base earn.
                    Using these targeted deals further offsets your annual fee.</li>
                    <li><strong>Combine Points + Certificates:</strong>
                    If you have personal or business Marriott cards,
                    or you’ve earned free night certificates from promotions,
                    coordinate them to piece together a multi-night stay.
                    If you aim for a dream trip at St. Regis or The Ritz-Carlton,
                    synergy with multiple certificates can drastically reduce out-of-pocket costs.</li>
                </ol>
            </section>

            {/* Section 15: Another Real-Life Example */}
             <section id="section-15" className={styles.reviewSection}>
                <h2>Another Example: A Frequent Business Traveler</h2>
                <p>
                    Imagine you (or your family) spend:
                </p>
                <ul className={styles.featureList}>
                    <li>$8,000 at Marriott annually (multiple week-long business trips + weekend getaways)</li>
                    <li>$5,000 on flights (direct with airlines), $4,000 at restaurants</li>
                    <li>$10,000 on general spending</li>
                </ul>
                <p>
                    That totals $27k yearly.
                    Points breakdown from the card:
                </p>
                <ul className={styles.featureList}>
                    <li><strong>Marriott ($8k):</strong> 6x = 48,000 points</li>
                    <li><strong>Flights + Dining ($9k total):</strong> 3x = 27,000 points</li>
                    <li><strong>Everything Else ($10k):</strong> 2x = 20,000 points</li>
                </ul>
                <p>
                    That’s <strong>95,000</strong> points from spend alone.
                    Add a sign-up bonus of, say, 95k for $5k spend → 190k total.
                    At ~0.8¢ each, that’s ~$1,520 in potential lodging.
                    You’ll also have the 85k free night certificate for an aspirational stay
                    (like an overwater villa at a premium property or a top-tier city hotel).
                    Platinum status means daily breakfast or lounge for those business trips,
                    likely saving you additional cash, plus potential suite upgrades.
                    Combine with monthly $25 dining credits and you’ve negated a big slice of the $650 fee.
                    Over the year, the net “cost” might be effectively near $200 or less if you fully use all perks.
                </p>
            </section>

             {/* Section 16: Synergy with Other Amex Cards or Loyalty Programs */}
             <section id="section-16" className={styles.reviewSection}>
                 <h2>Synergy with Other Amex Cards or Loyalty Programs</h2>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{ __html:"The <strong>Bonvoy Brilliant</strong> primarily earns Marriott points, which don’t freely convert to Membership Rewards (MR). However:"}}></p>
                <ul className={styles.featureList}>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Pair with Amex Gold/Platinum for Dining or Travel:</strong> If you want 4x on U.S. restaurants (Amex Gold) or 5x on flights (Amex Platinum) but prefer focusing Marriott stays on the Bonvoy Brilliant, you can hold multiple cards. Just keep track of your categories. E.g., you might put flights on the Platinum for 5x, but if you prefer a single strategy or want 3x via Bonvoy Brilliant (direct with airlines), that’s simpler albeit less lucrative in some cases."}}></li>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Combine Marriott Earn with Marriott Biz Cards:</strong> If you have a Marriott Bonvoy Business Amex, you might gather additional free nights or milestone nights, although there can be limitations on how many “Elite Night Credits” you can stack between personal and business co-brands. Always confirm the current rules from Marriott."}}></li>
                    <li><strong>Transfer Points from Chase or Other Partners:</strong>
                    If you hold, for instance, Chase Ultimate Rewards, you can sometimes transfer UR → Marriott at suboptimal rates (often 1:1. If offered, it’s typically not as good as transferring to Hyatt, for example).
                    Typically, it’s better to keep your Bonvoy points separate or earn them directly with your stays or co-branded spending.
                    But if you find yourself short on Marriott points for a redemption, that path might exist, albeit at a lesser ratio or value.</li>
                </ul>
                <p>
                    The main synergy is combining Bonvoy Brilliant’s elite status benefits
                    with other Amex credit cards that maximize other spend categories.
                    If you’re a “one card to rule them all” type,
                    you’ll still find decent coverage with 3x on dining/flights and 2x on everything else,
                    but it’s not always the absolute best in each spending category.
                    The tradeoff is the powerful Marriott perks.
                </p>
            </section>

            {/* Section 17: Redemption & Point Value Insights */}
             <section id="section-17" className={styles.reviewSection}>
                <h2 dangerouslySetInnerHTML={{ __html:"Redemption &amp; Point Value Insights"}}></h2>
                <p>
                    <strong>Marriott Bonvoy</strong> points see varying redemption values:
                </p>
                <ul className={styles.featureList}>
                    <li><strong>Standard vs. Peak/Off-Peak:</strong>
                    Marriott uses dynamic pricing with certain floors/ceilings by category.
                    You might pay fewer points if traveling during off-peak.
                    Peak times can cost significantly more, reducing average point value.</li>
                    <li><strong>Luxury Brands:</strong>
                    St. Regis, Ritz-Carlton, Edition hotels typically run high in cash cost.
                    Redeeming points or your 85k certificate at these can yield 1¢ or better if the nightly rate is $700+ before taxes/fees.</li>
                    <li><strong>Fifth Night Free:</strong>
                    Book a 5-night stay with points, pay for 4 nights in points and get the 5th free.
                    This effectively increases your points’ value if you can commit to that length of stay.</li>
                    <li><strong>Cash + Points:</strong>
                    If you’re low on points, you can do partial cash + partial points.
                    Evaluate if it’s a good deal vs. a full-points redemption or a standard paid stay.
                    Sometimes it can be an efficient way to stretch limited Bonvoy balances.</li>
                </ul>
                <p>
                    Overall, many find <strong>0.7–0.9¢</strong> is a safe baseline for Bonvoy points.
                    That said, with the Bonvoy Brilliant offering you a big chunk of points from the sign-up bonus,
                    plus the 85k free night,
                    you can find sweet spots that exceed 1¢, especially at top-tier or pricey properties.
                    The best approach:
                    compare the cash rate (including taxes/resort fees) to the total points needed—
                    if you’re netting over 1¢ per point, that’s a solid redemption.
                </p>
            </section>

             {/* Section 18: Competitor & Alternative Cards */}
             <section id="section-18" className={styles.reviewSection}>
                 <h2 dangerouslySetInnerHTML={{ __html:"Competitor &amp; Alternative Cards"}}></h2>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{__html:"If the <strong>Bonvoy Brilliant</strong> doesn’t align, consider:"}}></p>
                <ul className={styles.featureList}>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Hilton Honors American Express Aspire</strong> ($450 AF): Includes top-tier Diamond status, a $250 Hilton resort credit, a free weekend night, and up to $250 airline fee credit. If you prefer Hilton’s ~6,500 properties, Aspire might be cheaper but with arguably better ROI for heavy Hilton stayers."}}></li>
                    {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>IHG Rewards Premier</strong> (Chase, ~$99–$120 AF): Not as premium, but cheaper, includes Platinum status, an annual free night, good if you frequent IHG (InterContinental, Holiday Inn, Kimpton). Points are weaker in value but the lower fee is easy to justify for moderate travelers."}}></li>
                    {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Chase Sapphire Reserve</strong> ($550 AF): Not hotel-specific but offers 3x on travel/dining, $300 universal travel credit, Priority Pass lounge access, plus the ability to transfer points to Marriott (though it’s rarely the best use). Good if you’re brand-agnostic. You won’t get Marriott Platinum from it, though."}}></li>
                    {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Amex Platinum</strong> ($695 AF): You get Marriott Gold Elite status automatically (lower than Platinum), plus a bunch of airline/lifestyle credits and Centurion Lounge access. No free nights or direct route to Marriott Platinum, but you can combine it with personal stays to push for higher status if you spend nights at Marriott."}}></li>
                </ul>
                <p>
                    The <strong>Bonvoy Brilliant</strong> is the go-to for dedicated Marriott enthusiasts who want immediate higher-tier benefits,
                    a big annual free night, and a chunk of dining or property credits.
                    If you prefer more general coverage or another chain, consider these alternatives.
                </p>
            </section>

            {/* Section 19: Who Should Get the Card? */}
            <section id="section-19" className={styles.reviewSection}>
                 <h2 dangerouslySetInnerHTML={{ __html: "Who Should Get the Marriott Bonvoy Brilliant™ American Express® Card?"}}></h2>
                 {/* Using dangerouslySetInnerHTML for ® & ™ */}
                 <div className={styles.prosCons}>
                    <div className={styles.pros}>
                        <h3>Yes, If You:</h3>
                        <ul className={styles.featureList}>
                            <li>Frequently stay at <strong>Marriott</strong> properties (you enjoy or have brand loyalty across its ~30 sub-brands)</li>
                            <li>Can easily use the <strong>$300 dining credits</strong> (monthly $25) plus the <strong>85k free night</strong> certificate</li>
                            <li>Value <strong>Platinum Elite</strong> status for breakfast, lounge, and potential suite upgrades</li>
                            <li>Don’t mind a <strong>$650 annual fee</strong> if offset by perks, statement credits, and your regular travel patterns</li>
                             {/* Using dangerouslySetInnerHTML for ® */}
                            <li dangerouslySetInnerHTML={{__html:"Pay statements in full to avoid the ~<strong>20–29% APR</strong> cost overshadowing your rewards"}}></li>
                        </ul>
                    </div>
                    <div className={styles.cons}>
                        <h3>No, If You:</h3>
                        <ul className={styles.featureList}>
                            <li>Prefer <strong>Hilton, Hyatt, or IHG</strong> properties or prefer being brand-agnostic</li>
                            <li>Can’t justify a <strong>$650</strong> net cost even after monthly dining usage or free night redemption</li>
                            <li>Rarely stay at <strong>Marriott</strong>, so perks go to waste</li>
                            {/* Using dangerouslySetInnerHTML for ® */}
                            <li dangerouslySetInnerHTML={{__html:"Want <strong>flexible points</strong> or a different lounge network (Chase/Amex general travel cards might be better)"}}></li>
                            <li>Plan to <strong>revolve balances</strong>; interest charges quickly outpace any Marriott perks</li>
                        </ul>
                    </div>
                </div>
            </section>

             {/* Section 20: Final Thoughts & Disclaimer */}
             <section id="section-20" className={styles.reviewSection}>
                 <h2 dangerouslySetInnerHTML={{ __html:"Final Thoughts &amp; Disclaimer"}}></h2>
                 {/* Using dangerouslySetInnerHTML for ® & ™ */}
                <p dangerouslySetInnerHTML={{ __html:"The <strong>Marriott Bonvoy Brilliant™ American Express® Card</strong> remains a top-level hotel rewards card delivering significant value to <strong>Marriott loyalists</strong>. With an <strong>$650</strong> annual fee, it’s aimed at travelers who will benefit from <strong>Platinum Elite status</strong>, a robust <strong>85k free night certificate</strong>, monthly dining credits (up to $300/year), and strong earn rates at Marriott. If you can harness the free night for a property where cash rates exceed $400+ per night, plus enjoy daily breakfast and lounge benefits from Platinum, the card can pay for itself multiple times over. However, if your travel patterns or personal preference don’t align with Marriott, or you want a more flexible points ecosystem, consider general premium travel cards or other hotel co-brands with lower fees. Ultimately, for 2025, the Bonvoy Brilliant remains a top contender for high-frequency Marriott guests who want streamlined elite perks and an easier path to cushy hotel stays around the globe."}}></p>
                 {/* Using dangerouslySetInnerHTML for ® &amp; */}
                <p dangerouslySetInnerHTML={{ __html:"<strong>Disclaimer:</strong> Card details, such as APR, sign-up bonus, and statement credits, may change. Always check official American Express and Marriott sites for current terms. We may earn affiliate commissions from certain links but maintain independent editorial opinions. Marriott point valuations vary widely depending on brand, location, and peak vs. off-peak. If you revolve balances at 20–29% APR, interest costs overshadow potential rewards. Pay in full monthly for maximum net gain. Elite status offers can also shift—Platinum vs. Gold. Confirm the card’s official T&amp;Cs if you’re applying in 2025 or beyond."}}></p>
            </section>

             {/* E-A-T Section - Adapted for Marriott Brilliant */}
             <section id="eat-expertise-authority-trustworthiness" className={`${styles.reviewSection} ${styles.eatSection}`}>
                 <h2 dangerouslySetInnerHTML={{ __html: "Our Commitment to E-A-T: Expertise, Authority &amp; Trustworthiness"}}></h2>
                 {/* !!! E-A-T Text below is adapted. Review/replace if needed. !!! */}
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
                    in credit cards and premium hotel rewards, including the Marriott Bonvoy Brilliant and its Platinum Elite benefits.</li>
                    <li><strong>Real-Time Updates:</strong>
                    We continually check official issuer materials (Amex/Marriott)
                    and user data to maintain current rates, terms, and credit rules.</li>
                    <li dangerouslySetInnerHTML={{ __html: "<strong>Conferences &amp; Webinars:</strong> Our team attends financial and travel events, enriching our knowledge base with insights on maximizing hotel loyalty and statement credits."}}></li>
                </ul>
                <h3>2. Authority</h3>
                <ul className={styles.featureList}>
                     {/* Using dangerouslySetInnerHTML for ® & ™ */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Detailed Coverage:</strong> This review offers an exhaustive look at the <b>Marriott Bonvoy Brilliant™ American Express® Card</b>, from the $650 fee justification to optimizing the 85k free night."}}></li>
                    <li><strong>Trusted By Major Outlets:</strong>
                    Our articles are frequently cited by national finance
                    and travel news sites for premium hotel card analysis.</li>
                    <li><strong>Full Disclosure:</strong>
                    If affiliate links or promotions exist, we clearly state them,
                    ensuring objective editorial content.</li>
                </ul>
                <h3>3. Trustworthiness</h3>
                <ul className={styles.featureList}>
                    <li><strong>Independent Analysis:</strong>
                    We never let advertisers influence our ratings or opinions on the Bonvoy Brilliant.</li>
                    <li><strong>Frequent Revisions:</strong>
                    We revise reviews whenever new offers appear or Marriott/Amex modify program benefits (like status levels or credit structures).</li>
                    <li><strong>Community Feedback:</strong>
                    We encourage open discussion in comments,
                    fostering transparency and additional user insights on Marriott stays and perks.</li>
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

      <Footer />
    </>
  );
}

export default MarriottBonvoyBrilliantReviewPage;