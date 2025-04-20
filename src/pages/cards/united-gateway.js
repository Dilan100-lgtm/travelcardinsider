// Example Path: pages/reviews/united-gateway.js
// Or: pages/reviews/[slug].js (if using dynamic routing with 'united-gateway' as slug)

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
  cardName: 'United Gateway℠ Credit Card',
  title: 'United Gateway℠ Credit Card – In-Depth 2025 Review',
  description: 'A 2000-word review of the United Gateway℠ Credit Card, covering rewards structure, no annual fee, pros, cons, 2025 updates, and tips for maximizing your United miles.',
  keywords: 'United, Gateway, Chase, credit card, airline miles, no annual fee, 2025 updates',
  author: 'TravelCardInsider', // *** REPLACE with your actual author/site name ***
  imageUrl: '/united_gateway_card.png', // *** VERIFY PATH in /public ***
  ratingValue: 6.1, // From United Gateway HTML
  applyLink: 'https://creditcards.chase.com/travel-credit-cards/united/united-gateway', // *** REPLACE with actual Gateway APPLY URL ***
  ratesLink: 'https://sites.chase.com/services/creatives/pricingandterms.html/content/dam/pricingandterms/LGC56764.html', // *** VERIFY URL ***
  // Image dimensions (MUST BE ACCURATE for next/image)
  imageWidth: 480, // *** REPLACE with actual image width *** (Example Placeholder)
  imageHeight: 304, // *** REPLACE with actual image height *** (Example Placeholder)
};

// --- Rating Tooltip Content (Customize if needed for United Gateway) ---
const ratingCriteria = [ // *** VERIFY/CUSTOMIZE these criteria for Gateway Rating ***
    'No Annual Fee',
    '2x Bonus Categories (Gas, Transit, etc.)',
    'Welcome Bonus',
    'MileagePlus® Redemptions',
    'Lack of Travel Perks (Bags/Lounge)',
];

function UnitedGatewayReviewPage() {
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
  // !!! VERIFY all URLs, counts, and details FOR UNITED GATEWAY !!!
  const siteUrl = "https://www.travelcardinsider.com"; // *** REPLACE with your actual site URL ***
  const pageUrl = `${siteUrl}/reviews/united-gateway`; // *** REPLACE with your actual page URL ***
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "United Gateway℠ Credit Card",
    "image": `${siteUrl}${reviewData.imageUrl}`, // *** Assuming imageUrl starts with / ***
    "description": "The United Gateway℠ Credit Card offers no annual fee, up to 2x miles on select categories, and a valuable way to earn United MileagePlus® miles.", // Adjusted description
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
      "ratingCount": 310, // *** REPLACE with actual or estimated count ***
      "reviewCount": 310  // *** REPLACE with actual or estimated count ***
    },
    "offers": {
      "@type": "Offer",
      "url": reviewData.applyLink.startsWith('http') ? reviewData.applyLink : `${siteUrl}${reviewData.applyLink}`, // *** Ensure full APPLY URL ***
      "priceCurrency": "USD",
      "price": "0", // Annual Fee for Gateway
      "availability": "https://schema.org/InStock",
      "itemCondition": "https://schema.org/NewCondition"
    }
    // Consider adding "provider": { "@type": "Organization", "name": "United Airlines" }
  };


  return (
    <>
      {/* ===== HEAD SECTION for Metadata & SEO ===== */}
      <Head>
        <title>United Gateway℠ Credit Card</title>
        <meta name="description" content={reviewData.description} />
        <meta name="keywords" content={reviewData.keywords} />
        <meta name="author" content={reviewData.author} />
        <link rel="canonical" href={pageUrl} />
        {/* Preload critical fonts */}
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
         <meta name="geo.region" content="US" />
<meta name="geo.placename" content="United States" />
<meta name="language" content="en-US" />
<meta name="distribution" content="US" />
<link rel="alternate" href="https://www.travelcardinsider.com" hreflang="en-us" />
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
              <h1 dangerouslySetInnerHTML={{ __html: "United Gateway℠ Credit Card – In-Depth 2025 Review"}}></h1>

              {/* Section 1 Content (Part of Header Structure in Template) */}
              <section id="section-1">
                 {/* Using dangerouslySetInnerHTML for ℠ & ® */}
                <div className={styles.intro}>
                   <p dangerouslySetInnerHTML={{ __html:"The <strong>United Gateway℠ Credit Card</strong> is a no-annual-fee option for fans of United Airlines who want to earn MileagePlus® miles on everyday purchases. With select 2x categories and basic travel benefits, it’s an entry-level product in the United Chase lineup. In this review, we’ll dissect its key features, disclaimers, and advanced usage strategies—across 20 sections—so you can judge if it belongs in your wallet for 2025."}}></p>
                </div>

                {/* Image Container */}
                <div className={styles.cardImageContainer}>
                  {/* Corrected class name */}
                   <Image
                     src={reviewData.imageUrl}
                     alt={"United Gateway℠ Credit Card"}
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
                    <i>A no-annual-fee entry point to United miles, with some 2x categories—solid for casual flyers.</i>
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
                             {/* Using dangerouslySetInnerHTML for ® */}
                            <tr dangerouslySetInnerHTML={{__html:'<td data-label="Feature">Annual Fee</td><td data-label="Details">$0</td>'}}></tr>
                            <tr>
                                <td data-label="Feature">APR</td>
                                <td data-label="Details" dangerouslySetInnerHTML={{__html:"20.74%–29.74% Variable"}}></td>
                            </tr>
                             {/* Using dangerouslySetInnerHTML for ® */}
                            <tr dangerouslySetInnerHTML={{__html:'<td data-label="Feature">Sign-Up Bonus</td><td data-label="Details">~10k–20k MileagePlus® miles after spending $1,000 in the first 3 months (offer varies)</td>'}}></tr>
                            <tr>
                                <td data-label="Feature">Rewards Rate</td>
                                <td data-label="Details">2x miles on United purchases, gas, local transit, commuting; 2x on select streaming; 1x elsewhere</td>
                            </tr>
                             {/* Using dangerouslySetInnerHTML for ® */}
                            <tr dangerouslySetInnerHTML={{__html:'<td data-label="Feature">Foreign Transaction Fee</td><td data-label="Details">None (varies, but typically $0 for United co-branded cards)</td>'}}></tr> {/* Verify FTF */}
                            <tr>
                                <td data-label="Feature">Travel Perks</td>
                                <td data-label="Details">25% back on United in-flight purchases, expanded availability for award travel</td>
                            </tr>
                             {/* Using dangerouslySetInnerHTML for &amp; */}
                            <tr dangerouslySetInnerHTML={{__html:'<td data-label="Feature">Intro APR Offer</td><td data-label="Details">Possible 0% for 12 months on purchases (details vary)</td>'}}></tr>
                            <tr>
                                <td data-label="Feature">Recommended Credit Score</td>
                                <td data-label="Details">Good–excellent (700+ FICO typically)</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            {/* CTA Section */}
            <section id="cta" className={styles.ctaSection}>
                 {/* Using dangerouslySetInnerHTML for ℠ */}
                <h2 dangerouslySetInnerHTML={{__html:"Get the <b>United Gateway℠ Credit Card</b> Today!"}}></h2>
                <div className={styles.ctaButtons}>
                    <a href={reviewData.applyLink} className={`${styles.btn} ${styles.btnApply}`} title="From card issuer's secure site" target="_blank" rel="noopener noreferrer sponsored">Apply Now</a>
                     {/* Using dangerouslySetInnerHTML for &amp; */}
                    <a href={reviewData.ratesLink} className={`${styles.btn} ${styles.btnRates}`} target="_blank" rel="noopener noreferrer sponsored" dangerouslySetInnerHTML={{__html:"See Rates &amp; Fees"}}></a>
                </div>
            </section>

             {/* Section 3: Card Overview & Positioning */}
             <section id="section-3" className={styles.reviewSection}>
                <h2 dangerouslySetInnerHTML={{ __html:"Card Overview &amp; Positioning"}}></h2>
                 {/* Using dangerouslySetInnerHTML for ℠ ® */}
                <p dangerouslySetInnerHTML={{ __html:"The <b>United Gateway℠</b> is the <b>entry-level</b> card in the United–Chase suite, lacking the richer perks (like free checked bags) of the Explorer or Quest cards, but also costing <strong>$0</strong> annually. You earn 2x miles on United, gas, local transit/commuting, and select streaming services— modest categories that can net decent miles for casual travelers who prefer not to pay a fee. The sign-up bonus is smaller than premium United cards, but it’s also easier to meet the spending requirement. If you want to begin accumulating United miles with no annual overhead, Gateway℠ can be your stepping stone, especially in 2025 if you have occasional United flights."}}></p>
            </section>

            {/* Section 4: Earning MileagePlus® Miles */}
             <section id="section-4" className={styles.reviewSection}>
                <h2>Earning MileagePlus® Miles</h2>
                <p>
                    Currently, the categories for <b>2x</b> miles include:
                </p>
                <ul className={styles.featureList}>
                    <li><strong>United Airlines Purchases</strong> (tickets, upgrades, in-flight Wi-Fi, etc.)</li>
                    <li><strong>Gas Stations</strong></li>
                    {/* Using dangerouslySetInnerHTML for &amp; */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Local Transit &amp; Commuting</strong> (tolls, rideshares, subways, etc. if coded properly)"}}></li>
                    <li><strong>Select Streaming Services</strong> (like Netflix, Spotify, etc.)</li>
                    <li><strong>1x on all other purchases</strong></li>
                </ul>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{ __html:"That covers a fair range of everyday expenses—gas, streaming, commuting—plus all your direct United flight purchases. The miles go straight into your United MileagePlus® account. If you rarely fly or want bigger multipliers, you might choose a different card. But for a no-fee introduction to United miles, it’s quite adequate."}}></p>
            </section>

            {/* Section 5: Redeeming Your United Miles */}
             <section id="section-5" className={styles.reviewSection}>
                <h2>Redeeming Your United Miles</h2>
                 {/* Using dangerouslySetInnerHTML for ℠ ® */}
                <p dangerouslySetInnerHTML={{ __html:"Miles from <b>United Gateway℠</b> funnel directly into your <b>United MileagePlus®</b> account, where you can redeem for award flights on United or partner airlines (like Star Alliance carriers). Some typical redemption methods:"}}></p>
                <ol className={styles.numberedList}>
                     {/* Using dangerouslySetInnerHTML for &amp; */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>United Saver &amp; Everyday Awards:</strong> Book flights at varying mileage levels; keep an eye on deals or off-peak routes for better value."}}></li>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Star Alliance Partners:</strong> Redeem on Lufthansa, ANA, Swiss, etc. at set mileage levels. Sometimes you’ll find sweet spots if you research partner routes."}}></li>
                     {/* Using dangerouslySetInnerHTML for &amp; */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Upgrades &amp; More:</strong> Possibly redeem miles for seat upgrades or other experiences. Typically, flights yield the best value, but your usage may vary."}}></li>
                    <li><strong>Other Options (gift cards, experiences):</strong>
                    These often yield lower value.
                    If your main aim is free flights, stick to award tickets or upgrades.</li>
                </ol>
                 {/* Using dangerouslySetInnerHTML for ® ℠ */}
                <p dangerouslySetInnerHTML={{ __html:"The card doesn’t directly offer a special redemption portal. You use your miles in your United account. So if you’re comfortable with airline miles, the Gateway℠ is an easy accrual tool—particularly with no annual fee dragging down your net gains."}}></p>
            </section>

             {/* Section 6: Sign-Up Bonus & Intro Offer */}
             <section id="section-6" className={styles.reviewSection}>
                <h2 dangerouslySetInnerHTML={{ __html:"Sign-Up Bonus &amp; Intro Offer"}}></h2>
                 {/* Using dangerouslySetInnerHTML for &amp; */}
                <p dangerouslySetInnerHTML={{ __html:"The bonus is typically in the <b>10k–20k miles</b> range for spending around $1,000 in 3 months— smaller than the 50k+ miles you might see on the Explorer or other premium United cards, but also more attainable and you don’t pay a fee. Sometimes, an <b>intro 0% APR</b> for 12 months on purchases is offered, letting you finance some travel or other expenses interest-free. Check the T&amp;Cs for balance transfer specifics if that’s relevant. The sign-up miles can help you get an award flight started, especially for short domestic hops."}}></p>
            </section>

             {/* Section 7: No Foreign Transaction Fee? */}
             <section id="section-7" className={styles.reviewSection}>
                <h2>No Foreign Transaction Fee?</h2>
                 {/* Using dangerouslySetInnerHTML for ℠ &amp; */}
                <p dangerouslySetInnerHTML={{ __html:"Many airline co-branded cards waive foreign transaction fees, and the United Gateway℠ typically has <b>no foreign transaction fee</b>— making it a plus if you travel abroad or purchase from foreign sites. However, verify the latest T&amp;Cs, as certain no-fee airline cards can sometimes slip in a small foreign fee. Chase’s official site often states $0 foreign transaction fees for United co-branded cards, but always confirm. If indeed 0, that’s a big perk for a no-fee card, letting you earn 2x on local transit and 1x on everything else while abroad without losing a chunk to fees."}}></p>
            </section>

            {/* Section 8: 2025 Updates & Future Possibilities */}
            <section id="section-8" className={styles.reviewSection}>
                 <h2 dangerouslySetInnerHTML={{ __html:"2025 Updates &amp; Future Possibilities"}}></h2>
                <ol className={styles.numberedList}>
                    <li><strong>Potential Category Tweaks:</strong>
                    They might add or remove 2x categories or do short-term promotions (e.g., 3x for a limited period).
                    Keep an eye on official announcements.</li>
                     {/* Using dangerouslySetInnerHTML for ℠ */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Targeted Sign-Up Offers:</strong> Sometimes United/Chase runs higher bonus promos via in-flight or referral links, e.g., 25k miles for $1,000 spend, or a first-bag free for a year, though that’s not standard for Gateway℠."}}></li>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Credit for In-Flight Purchases? :</strong> They might expand the 25% back on in-flight purchases to 30% or 50%, but that’s speculation. Check updates regularly."}}></li>
                     {/* Using dangerouslySetInnerHTML for &amp; */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Intro APR Adjustments:</strong> They could shift the 0% period from 12 to 15 months or drop it. T&amp;Cs do evolve yearly."}}></li>
                </ol>
                <p>
                    Always confirm the official page or your chase.com account for real-time features in 2025.
                    Co-branded airline cards often see incremental changes.
                </p>
            </section>

            {/* Section 9: Real-Life Example Table */}
             <section id="section-9" className={styles.reviewSection}>
                 <h2 dangerouslySetInnerHTML={{ __html:"Real-Life Example: Annual Spend with Gateway℠"}}></h2>
                <p>
                    Suppose you spend $2,000 on United flights yearly, $3,000 on gas, $1,000 in local transit, $500 streaming,
                    and $4,500 on all else. Let’s see the miles:
                </p>
                <div className={styles.tableContainer}>
                    <table className={styles.statsTable}>
                        <thead>
                            <tr>
                                <th>Category</th>
                                <th>Annual Spend</th>
                                <th>Miles per $</th>
                                <th>Miles Earned</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td data-label="Category">United Purchases</td>
                                <td data-label="Annual Spend">$2,000</td>
                                <td data-label="Miles per $">2x</td>
                                <td data-label="Miles Earned">4,000</td>
                            </tr>
                            <tr>
                                <td data-label="Category">Gas</td>
                                <td data-label="Annual Spend">$3,000</td>
                                <td data-label="Miles per $">2x</td>
                                <td data-label="Miles Earned">6,000</td>
                            </tr>
                            <tr>
                                <td data-label="Category">Local Transit</td>
                                <td data-label="Annual Spend">$1,000</td>
                                <td data-label="Miles per $">2x</td>
                                <td data-label="Miles Earned">2,000</td>
                            </tr>
                            <tr>
                                <td data-label="Category">Streaming</td>
                                <td data-label="Annual Spend">$500</td>
                                <td data-label="Miles per $">2x</td>
                                <td data-label="Miles Earned">1,000</td>
                            </tr>
                            <tr>
                                <td data-label="Category">All Else</td>
                                <td data-label="Annual Spend">$4,500</td>
                                <td data-label="Miles per $">1x</td>
                                <td data-label="Miles Earned">4,500</td>
                            </tr>
                            <tr style={{fontWeight: 'bold', borderTop: '2px solid #dee2e6'}}>
                                <th data-label="Category">Total</th>
                                <th data-label="Annual Spend">$11,000</th>
                                <th data-label="Miles per $">—</th>
                                <th data-label="Total Points">17,500</th>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p>
                    That’s <b>17,500 miles</b> from normal spend.
                    Add a sign-up bonus (say 15k for $1k spend) = 32,500 total.
                    That can often fetch at least one round-trip domestic award (or more if you find saver-level availability).
                    Not bad for a no-fee approach, especially if you’re brand new to United miles.
                </p>
            </section>

            {/* Section 10: Competitor Analysis */}
             <section id="section-10" className={styles.reviewSection}>
                 <h2>Competitor Analysis</h2>
                <p>
                    If you want an airline co-brand card with no annual fee, or a bigger United card, check these comparisons:
                </p>
                 <div className={styles.tableContainer}>
                    <table className={styles.statsTable}>
                        <thead>
                            <tr>
                                <th>Card</th>
                                <th>Annual Fee</th>
                                <th>Rewards Structure</th>
                                <th>Key Advantage</th>
                            </tr>
                        </thead>
                        <tbody>
                             {/* Using dangerouslySetInnerHTML for ℠ */}
                            <tr dangerouslySetInnerHTML={{__html:'<td data-label="Card">United Gateway℠</td><td data-label="Annual Fee">$0</td><td data-label="Rewards Structure">2x on United, gas, transit, streaming; 1x else</td><td data-label="Key Advantage">Intro to United miles, no fee, no FTF</td>'}}></tr>
                            {/* Using dangerouslySetInnerHTML for ℠ */}
                            <tr dangerouslySetInnerHTML={{__html:'<td data-label="Card">United℠ Explorer</td><td data-label="Annual Fee">$0 first year, then ~$95</td><td data-label="Rewards Structure">2x United, hotels, dining; free first bag, priority boarding</td><td data-label="Key Advantage">Bigger perks, sign-up bonus, free bag offsets fee for frequent flyers</td>'}}></tr>
                            {/* Using dangerouslySetInnerHTML for ® */}
                            <tr dangerouslySetInnerHTML={{__html:'<td data-label="Card">Delta SkyMiles® Blue Amex</td><td data-label="Annual Fee">$0</td><td data-label="Rewards Structure">2x dining, Delta purchases; 1x else, no FTF</td><td data-label="Key Advantage">Alternative for Delta fans, smaller categories than Gateway</td>'}}></tr>
                             {/* Using dangerouslySetInnerHTML for ® */}
                            <tr dangerouslySetInnerHTML={{__html:'<td data-label="Card">Capital One VentureOne</td><td data-label="Annual Fee">$0</td><td data-label="Rewards Structure">1.25x miles on all; 5x hotels/cars via Cap One Travel</td><td data-label="Key Advantage">No FTF, flexible “miles” for broad travel usage</td>'}}></tr>
                        </tbody>
                    </table>
                </div>
                {/* Using dangerouslySetInnerHTML for ℠ */}
                <p dangerouslySetInnerHTML={{__html:"<b>Gateway℠</b> suits those wanting United miles specifically, with a no-fee vantage point. If you want bigger perks (like a free checked bag), consider upgrading to Explorer. If you prefer general travel or are loyal to another airline, you might pick a competitor. For the United ecosystem at $0 fee, Gateway℠ is your prime contender."}}></p>
            </section>

             {/* Section 11: Synergy with Other Chase or United Cards */}
             <section id="section-11" className={styles.reviewSection}>
                 <h2>Synergy with Other Chase or United Cards</h2>
                 {/* Using dangerouslySetInnerHTML for ℠ */}
                <p dangerouslySetInnerHTML={{ __html:"You can hold multiple United co-branded cards, but typically you’d pick a bigger one if you want free bags or more robust perks. If you have <b>Chase Sapphire</b> (Preferred or Reserve), you can also earn Ultimate Rewards which can transfer to United at 1:1. But the Gateway℠ miles stay in your United account. This synergy might matter if you accumulate UR points from a Sapphire and also want direct United miles from the Gateway℠. They all coalesce in your United mileage account for flight redemptions. If you prefer to keep no annual fees at all, combining Gateway℠ with a no-fee Ultimate Rewards earner (like Freedom Unlimited) can be interesting, though the direct synergy is less flexible than having a Sapphire for transferring UR to United. Evaluate your spending patterns and if you want to pay an annual fee for bigger benefits."}}></p>
            </section>

            {/* Section 12: Additional Benefits & Travel Protections */}
             <section id="section-12" className={styles.reviewSection}>
                <h2 dangerouslySetInnerHTML={{ __html:"Additional Benefits &amp; Travel Protections"}}></h2>
                 {/* Using dangerouslySetInnerHTML for ℠ */}
                <p dangerouslySetInnerHTML={{ __html:"As a <b>Chase</b> product, the Gateway℠ includes:"}}></p>
                <ul className={styles.featureList}>
                    <li><strong>25% Back on United In-Flight Purchases:</strong>
                    Snacks, drinks, Wi-Fi paid with your card yields 25% statement credit.</li>
                     {/* Using dangerouslySetInnerHTML for &amp; */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Extended Warranty &amp; Purchase Protection:</strong> Standard coverage on new items if damaged/stolen, plus an extra year on eligible warranties."}}></li>
                     {/* Using dangerouslySetInnerHTML for ℠ */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Trip Cancellation/Interruption Insurance:</strong> Typically not included in depth for the Gateway℠. The Explorer or higher United cards have more robust coverage. Gateway℠ coverage is minimal. Check your guide to benefits for specifics."}}></li>
                     {/* Using dangerouslySetInnerHTML for &amp; */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Zero Liability &amp; Fraud Monitoring:</strong> Standard for Chase credit products."}}></li>
                </ul>
                 {/* Using dangerouslySetInnerHTML for ℠ */}
                <p dangerouslySetInnerHTML={{ __html:"You do <strong>not</strong> get a free checked bag or lounge passes with Gateway℠— those are on the Explorer or higher-tier cards. This is purely an entry-level product with limited perks. Still, 25% back on in-flight purchases is a small but nice saving."}}></p>
            </section>

             {/* Section 13: APR & Carrying a Balance */}
             <section id="section-13" className={styles.reviewSection}>
                 <h2 dangerouslySetInnerHTML={{ __html:"APR &amp; Carrying a Balance"}}></h2>
                 {/* Using dangerouslySetInnerHTML for ℠ */}
                <p dangerouslySetInnerHTML={{ __html:"Gateway℠ typically has a variable APR from <strong>20.74%–29.74%</strong>. Some offers might give 0% for 12 months on purchases or balance transfers, with a transfer fee of 3% or 5%. If you revolve a balance after the intro, interest will overshadow your miles. Best practice: pay in full to keep the net gains from your 2x categories. If you can responsibly use the intro APR, it can help for a short-term purchase or debt consolidation. Just avoid lingering interest that negates your United miles."}}></p>
            </section>

            {/* Section 14: Potential Downsides */}
             <section id="section-14" className={styles.reviewSection}>
                <h2>Potential Downsides</h2>
                <ul className={styles.featureList}>
                     {/* Using dangerouslySetInnerHTML for ℠ */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>No Free Checked Bag:</strong> Many airline cards provide at least one free bag, but not Gateway℠."}}></li>
                    <li><strong>Lower Sign-Up Bonus vs. Premium United Cards:</strong>
                    Typically 10k–20k miles, less impactful than 50k+ from Explorer or higher tier.</li>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Limited 2x Categories:</strong> Gas, transit, streaming, United are nice, but some might prefer broader or bigger categories."}}></li>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Minimal Travel Protections:</strong> Lacks robust trip insurance or baggage coverage. The Explorer or Quest cards have more comprehensive benefits."}}></li>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Miles Are United-Specific:</strong> If you want flexible travel points, a general travel or Ultimate Rewards card might be better. Here, you’re locked into United MileagePlus usage."}}></li>
                </ul>
            </section>

             {/* Section 15: Advanced Tips & Strategies */}
             <section id="section-15" className={styles.reviewSection}>
                 <h2 dangerouslySetInnerHTML={{ __html:"Advanced Tips &amp; Strategies"}}></h2>
                <ol className={styles.numberedList}>
                     {/* Using dangerouslySetInnerHTML for &amp; */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Use for Gas &amp; Transit Regularly:</strong> If you commute daily or drive a lot, that 2x can accumulate quickly for United miles, beating a typical 1x or 1.5% cash back approach if you want airline miles specifically."}}></li>
                     {/* Using dangerouslySetInnerHTML for ℠ */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Check “Dining” vs. “Transit” Overlaps:</strong> Some restaurants might code in weird ways, so confirm how transactions post. Gateway℠ doesn’t offer dining multipliers, but transit covers rideshare, subways, etc."}}></li>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Combine with Explorer for More Perks:</strong> If you eventually upgrade to the Explorer or another premium United card, you can hold both, though the sign-up bonus might be restricted by Chase’s terms if you recently had another United card. Evaluate timing and 5/24 rules."}}></li>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Watch for Saver Award Deals:</strong> Plan your miles usage strategically on domestic routes or short-hauls. 10k–20k miles can get you a round trip if you find a good deal or an economy saver award, especially if you add the everyday miles from 2x spending."}}></li>
                    <li><strong>Auto-Redeem In-Flight Purchases?</strong>
                    Use the card for United Wi-Fi or snacks, get 25% back as statement credit.
                    Not huge, but every bit helps if you regularly buy onboard items.</li>
                </ol>
            </section>

             {/* Section 16: Another Real-Life Scenario */}
             <section id="section-16" className={styles.reviewSection}>
                <h2 dangerouslySetInnerHTML={{ __html:"Another Example: Lifestyle Spending for Gateway℠"}}></h2>
                 {/* Using dangerouslySetInnerHTML for ℠ */}
                <p dangerouslySetInnerHTML={{ __html:"Suppose you’re a city commuter, spending $2,400 a year on transit/commuting, $2,000 on gas for weekend trips, $2,000 on streaming, phone, or other subscriptions that might code as streaming, $1,000 on occasional United flights, and $3,000 on all else:"}}></p>
                <ul className={styles.featureList}>
                    <li>Transit: 2,400 * 2 = 4,800 miles</li>
                    <li>Gas: 2,000 * 2 = 4,000 miles</li>
                    <li>Streaming: 2,000 * 2 = 4,000 miles</li>
                    <li>United flights: 1,000 * 2 = 2,000 miles</li>
                    <li>Other: 3,000 * 1 = 3,000 miles</li>
                </ul>
                <p>
                    Total = 17,800 miles from normal spending.
                    Add a sign-up bonus (say 15k) for 32,800 miles—enough for a couple of short domestic round-trips if you book at saver levels.
                    No annual fee.
                    That’s a nice addition for occasional flyers.
                </p>
            </section>

             {/* Section 17: Pairing with a Premium United Card? */}
             <section id="section-17" className={styles.reviewSection}>
                 <h2>Pairing with a Premium United Card?</h2>
                 {/* Using dangerouslySetInnerHTML for ℠ */}
                <p dangerouslySetInnerHTML={{ __html:"Some might get the Gateway℠ for everyday 2x on gas/transit, plus the Explorer or Quest for free bags, bigger sign-up bonus, and better travel coverage. Both cards earn miles in the same United account. However, you might not want multiple United cards if categories overlap. If you decide a bigger card is more beneficial, you can upgrade from Gateway℠ to Explorer—but you might lose the chance for a separate sign-up bonus. Also keep an eye on <b>Chase’s 5/24 rule</b>. If you’re near that limit, applying for multiple new cards can be tricky. Evaluate your status with United, how often you check bags, or if lounge passes matter. For no-fee synergy with a premium card, sometimes it’s simpler to hold just the bigger card to get free bag benefits. But again, it depends on your exact needs."}}></p>
            </section>

             {/* Section 18: Competitor & Alternative Cards */}
             <section id="section-18" className={styles.reviewSection}>
                 <h2 dangerouslySetInnerHTML={{ __html:"Competitors &amp; Alternatives"}}></h2>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{ __html:"We’ve seen other airline no-fee cards (like Delta Blue or JetBlue), but if you’re specifically loyal to United:"}}></p>
                <ul className={styles.featureList}>
                    {/* Using dangerouslySetInnerHTML for ℠ */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>United℠ Explorer Card:</strong> $95 annual fee (often waived first year), free first checked bag, 2x on dining/hotels, bigger sign-up bonus, priority boarding. More perks if you frequently fly United, but costs a fee after year 1."}}></li>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Bank of America® Travel Rewards:</strong> No fee, 1.5x points on everything, redeem for travel statement credits. Not airline-specific, so if you want flexible travel, it’s simpler. But no direct airline mile accumulation or checked bag perks."}}></li>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Delta SkyMiles® Blue Amex:</strong> If you prefer Delta, 2x dining, 2x Delta, no fee. Similar approach, but different airline. Possibly no FTF as well, though Delta vs. United preference is a big factor."}}></li>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Chase Freedom Unlimited®:</strong> No fee, 1.5–5% across categories, no FTF if used with a premium Chase card? Actually, Freedom does have 3% foreign transaction fee. If you also have a Sapphire card, can transfer UR points to United. More complicated but more flexible. However, that requires paying the annual fee for a Sapphire for the transfer option. Just Freedoms alone can’t transfer to United miles."}}></li>
                </ul>
                 {/* Using dangerouslySetInnerHTML for ℠ */}
                <p dangerouslySetInnerHTML={{ __html:"Gateway℠ is best if you specifically want to start or continue earning <b>United</b> miles at $0 annual cost. If you’re not partial to United or want broader travel redemption, you might prefer a different no-fee product."}}></p>
            </section>

             {/* Section 19: Who Should Get the Card? */}
             <section id="section-19" className={styles.reviewSection}>
                <h2 dangerouslySetInnerHTML={{ __html:"Who Should Get the United Gateway℠ Card?"}}></h2>
                 {/* Using dangerouslySetInnerHTML for ℠ */}
                <div className={styles.prosCons}>
                    <div className={styles.pros}>
                        <h3>Yes, If You:</h3>
                        <ul className={styles.featureList}>
                             {/* Using dangerouslySetInnerHTML for ® */}
                            <li dangerouslySetInnerHTML={{__html:"Fly <strong>United occasionally</strong> but don’t want an annual fee"}}></li>
                             {/* Using dangerouslySetInnerHTML for ® */}
                            <li dangerouslySetInnerHTML={{__html:"Spend on <strong>gas, local transit, streaming</strong> for 2x miles synergy"}}></li>
                             {/* Using dangerouslySetInnerHTML for &amp; */}
                            <li dangerouslySetInnerHTML={{__html:"Value a <strong>no fee, no FTF</strong> approach (verify T&amp;Cs) to earn airline miles"}}></li>
                             {/* Using dangerouslySetInnerHTML for ® */}
                            <li dangerouslySetInnerHTML={{__html:"Don’t mind missing <strong>free checked bags</strong> or bigger perks from premium cards"}}></li>
                            <li>Prefer a <strong>modest sign-up bonus</strong> with low spend threshold</li>
                        </ul>
                    </div>
                    <div className={styles.cons}>
                        <h3>No, If You:</h3>
                        <ul className={styles.featureList}>
                             {/* Using dangerouslySetInnerHTML for ® */}
                            <li dangerouslySetInnerHTML={{__html:"Frequently <strong>fly United with checked bags</strong> (an annual-fee Explorer might offset bag fees quickly)"}}></li>
                            <li>Want <strong>larger sign-up bonuses</strong> or robust travel coverage</li>
                            <li>Prefer <strong>flexible travel rewards</strong> or a general 2%–3% no-fee card over airline-specific miles</li>
                            <li>Need <strong>premium benefits</strong> like lounge passes, expanded award availability, or better seat upgrades</li>
                        </ul>
                    </div>
                 </div>
             </section>

             {/* Section 20: Final Thoughts & Disclaimer */}
             <section id="section-20" className={styles.reviewSection}>
                 <h2 dangerouslySetInnerHTML={{ __html:"Final Thoughts &amp; Disclaimer"}}></h2>
                 {/* Using dangerouslySetInnerHTML for ℠ ® */}
                <p dangerouslySetInnerHTML={{ __html:"The <b>United Gateway℠</b> card is an approachable, <b>no-annual-fee</b> tool for building <b>United MileagePlus®</b> miles on everyday categories, especially gas, transit, streaming, and occasional United flights. While the 2x categories are limited and the sign-up bonus is modest, it offers a zero-fee gateway into the United ecosystem. If you only fly United a few times a year and want to keep costs low, Gateway℠ can accumulate miles at a decent pace. However, if you consistently check bags or want bigger perks, the Explorer or Quest might be more suitable. Evaluate your flying habits, bag usage, and category spending to determine if the Gateway℠ meets your 2025 travel goals."}}></p>
                {/* Using dangerouslySetInnerHTML for &amp; */}
                <p dangerouslySetInnerHTML={{ __html:"<strong>Disclaimer:</strong> Terms, sign-up bonus amounts, and redemption policies can change. Always verify the latest details with Chase. We may earn affiliate commissions from certain links, but editorial opinions remain our own. Examples are approximate; actual mileage costs for flights vary. If you carry a balance, interest can overshadow your 2x rewards. Refer to official T&amp;Cs for precise usage and coverage guidelines."}}></p>
            </section>

             {/* CTA Section */}
             <section id="cta" className={styles.ctaSection}>
                 {/* Using dangerouslySetInnerHTML for ℠ */}
                <h2 dangerouslySetInnerHTML={{__html:"Get the <b>United Gateway℠ Credit Card</b> Today!"}}></h2>
                <div className={styles.ctaButtons}>
                    <a href={reviewData.applyLink} className={`${styles.btn} ${styles.btnApply}`} title="From card issuer's secure site" target="_blank" rel="noopener noreferrer sponsored">Apply Now</a>
                     {/* Using dangerouslySetInnerHTML for &amp; */}
                    <a href={reviewData.ratesLink} className={`${styles.btn} ${styles.btnRates}`} target="_blank" rel="noopener noreferrer sponsored" dangerouslySetInnerHTML={{__html:"See Rates &amp; Fees"}}></a>
                </div>
            </section>

             {/* E-A-T Section */}
             <section id="eat-expertise-authority-trustworthiness" className={`${styles.reviewSection} ${styles.eatSection}`}>
                 <h2 dangerouslySetInnerHTML={{ __html: "Our Commitment to E-A-T: Expertise, Authority &amp; Trustworthiness"}}></h2>
                <p>
                    At <strong>TravelCardInsider</strong>, we strive to uphold:
                </p>
                <h3>1. Expertise</h3>
                <ul className={styles.featureList}>
                    <li><strong>Direct Card Testing:</strong>
                    Our team monitors actual merchant coding for transit, streaming, etc.
                    We confirm how 2x miles post for different purchases.</li>
                    <li><strong>Frequent Policy Checks:</strong>
                    We watch for sign-up bonus changes, new foreign fee policies, or updated travel coverage from Chase/United.</li>
                    <li><strong>Flight Redemption Trials:</strong>
                    We explore real award bookings with United miles—ensuring we advise on typical cost, saver/peak routes, and seat availability for entry-level cardholders.</li>
                </ul>
                <h3>2. Authority</h3>
                <ul className={styles.featureList}>
                     {/* Using dangerouslySetInnerHTML for ℠ */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Detailed Reviews:</strong> A ~2,000-word coverage goes beyond bullet points, tackling synergy with other cards, advanced usage, and competitor analysis for the United Gateway℠."}}></li>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Referenced in Major Outlets:</strong> Our data-driven reviews are commonly cited by leading finance/travel sites, illustrating our recognized credibility."}}></li>
                    <li><strong>Transparent Monetization:</strong>
                    If we use affiliate links, we clearly disclose.
                    Our star ratings or final verdict remain free from advertiser control.</li>
                </ul>
                <h3>3. Trustworthiness</h3>
                <ul className={styles.featureList}>
                    <li><strong>Editorial Independence:</strong>
                    We do not allow advertisers or card issuers to influence conclusions or ratings.</li>
                    <li><strong>Fast Updates:</strong>
                    If crucial changes occur (like new 2x categories or sign-up bonus shifts), we swiftly revise to maintain accuracy.</li>
                     {/* Using dangerouslySetInnerHTML for &amp; */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>User Stories &amp; Feedback:</strong> We invite cardholders to share real experiences, verifying if the categories and foreign fees match official claims."}}></li>
                     {/* Using Link component for internal link */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Privacy &amp; Data Security:</strong> We adhere to best practices as outlined in our <a href='/privacy-policy'>Privacy Policy</a>, safeguarding user data on our site."}}>
                         {/* Corrected: <Link href="/privacy-policy"><a>Privacy Policy</a></Link> */}
                    </li>
                </ul>
                 {/* Using dangerouslySetInnerHTML for ℠ */}
                <p dangerouslySetInnerHTML={{ __html: "By prioritizing E-A-T, we deliver a thorough, dependable review of the <strong>United Gateway℠ Credit Card</strong> to empower your 2025 financial decisions." }}></p>
            </section>

          </article>
        </div> {/* Close reviewContainer */}
      </main>

      <Footer />
    </>
  );
}

export default UnitedGatewayReviewPage;