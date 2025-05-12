// Example Path: pages/reviews/wells-fargo-autograph.js
// Or: pages/reviews/[slug].js (if using dynamic routing with 'wells-fargo-autograph' as slug)

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
  cardName: 'Wells Fargo Autograph℠ Card',
  title: 'Wells Fargo Autograph℠ Card – In-Depth 2025 Review',
  description: 'A 2000-word review of the Wells Fargo Autograph℠ Card, covering 3x reward categories, no annual fee, 2025 updates, pros, cons, and advanced usage tips.',
  keywords: 'Wells Fargo, Autograph, no annual fee, rewards, 3x categories, 2025 updates',
  author: 'TravelCardInsider', // *** REPLACE with your actual author/site name ***
  imageUrl: '/Autograph-No-Fee-Card-RGB_d.png', // *** VERIFY PATH in /public ***
  ratingValue: 7.1, // From WF Autograph HTML
  applyLink: 'https://creditcards.wellsfargo.com/autograph-visa-credit-card/?SGNTST=SHINYLP&sub_channel=SEO&vendor_code=G', // *** REPLACE with actual Autograph APPLY URL ***
  ratesLink: 'https://www.wellsfargo.com/credit-cards/autograph-visa/terms/?FPID=012988I6P10000&product_code=CC&subproduct_code=AU&cx_nm=CXNAME_CSMPD&sub_channel=SEO&vendor_code=G&refdmn=www.google.com&_gl=1*1qpj6ry*_gcl_au*OTk5NTUyMzU3LjE3NDAzMTU0NDM.*_ga*NjU1MzIyNC4xNzQwMzE1NDQz*_ga_7JXJJ2JF12*MTc0MTQ1MzE2Ny41LjAuMTc0MTQ1MzIyMy40LjAuMA..', // *** VERIFY URL ***
  // Image dimensions (MUST BE ACCURATE for next/image)
  imageWidth: 480, // *** REPLACE with actual image width *** (Example Placeholder)
  imageHeight: 304, // *** REPLACE with actual image height *** (Example Placeholder)
};

// --- Rating Tooltip Content (Customize if needed for Autograph) ---
const ratingCriteria = [ // *** VERIFY/CUSTOMIZE these criteria for Autograph Rating ***
    'Broad 3x Categories (Travel, Dining, Gas, etc.)',
    'No Annual Fee',
    'Welcome Bonus',
    'Cell Phone Protection',
    'Foreign Transaction Fee (3%)', // Note drawback
];

function WellsFargoAutographReviewPage() {
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
  // !!! VERIFY all URLs, counts, and details FOR WF AUTOGRAPH !!!
  const siteUrl = "https://www.travelcardinsider.com"; // *** REPLACE with your actual site URL ***
  const pageUrl = `${siteUrl}/cards/wells-fargo-autograph`; // *** REPLACE with your actual page URL ***
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Wells Fargo Autograph℠ Card",
    "image": `${siteUrl}${reviewData.imageUrl}`, // *** Assuming imageUrl starts with / ***
    "description": "The Wells Fargo Autograph℠ Card features multiple 3x categories (travel, dining, gas, transit, streaming, phone plans), a no-annual-fee structure, and a strong sign-up offer.", // Adjusted description
    "brand": {
      "@type": "Brand",
      "name": "Wells Fargo"
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
      "price": "0", // Annual Fee for Autograph
      "availability": "https://schema.org/InStock",
      "itemCondition": "https://schema.org/NewCondition"
    }
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
               {/* Using dangerouslySetInnerHTML for ℠ */}
              <h1 dangerouslySetInnerHTML={{ __html: "Wells Fargo Autograph℠ Card – In-Depth 2025 Review"}}></h1>

              {/* Section 1 Content (Part of Header Structure in Template) */}
              <section id="section-1">
                 {/* Using dangerouslySetInnerHTML for ℠ */}
                <div className={styles.intro}>
                   <p dangerouslySetInnerHTML={{ __html:"The <strong>Wells Fargo Autograph℠ Card</strong> has emerged as a top pick for those seeking a <strong>no-annual-fee</strong> product with multiple <strong>3x</strong> bonus categories—covering travel, dining, gas, transit, and more. If you want strong everyday rewards without paying a yearly cost, Autograph℠ might be your 2025 solution. This review covers 20 sections, from quick stats and disclaimers to advanced tips, so you can decide if it suits your lifestyle."}}></p>
                </div>

                {/* Image Container */}
                <div className={styles.cardImageContainer}>
                  {/* Corrected class name */}
                   <Image
                     src={reviewData.imageUrl}
                     alt={"Wells Fargo Autograph Card"}
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

                  {/* STAR RATING - Added */}
                  <div className={styles.starRating} title={`Rated ${reviewData.ratingValue} out of 10 stars`} style={{ '--rating': `${reviewData.ratingValue * 10}%` }}>
                    <span>★★★★★</span>
                    <span className={styles.filledStars}>★★★★★</span>
                  </div>

                  <div className={styles.ratingDescription}>
                    <i>Earn 3x in multiple categories without an annual fee—ideal for everyday spenders seeking solid rewards.</i>
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
                                <td data-label="Details">$0</td>
                            </tr>
                             {/* Using dangerouslySetInnerHTML for ® */}
                            <tr dangerouslySetInnerHTML={{__html:'<td data-label="Feature">APR Range</td><td data-label="Details">19.99%–29.99% Variable</td>'}}></tr>
                            <tr>
                                <td data-label="Feature">Sign-Up Bonus</td>
                                <td data-label="Details">Often ~20k–30k points after spending $1,000–$1,500 in first 3 months (varies)</td>
                            </tr>
                             {/* Using dangerouslySetInnerHTML for ® */}
                            <tr dangerouslySetInnerHTML={{__html:'<td data-label="Feature">Rewards Rate</td><td data-label="Details">3x on travel, dining, gas, transit, streaming, phone plans; 1x all else</td>'}}></tr>
                            <tr>
                                <td data-label="Feature">Foreign Transaction Fee</td>
                                <td data-label="Details">3% on each transaction in USD</td>
                            </tr>
                             {/* Using dangerouslySetInnerHTML for ® */}
                            <tr dangerouslySetInnerHTML={{__html:'<td data-label="Feature">Redemption Options</td><td data-label="Details">Statement credits, direct deposit, Wells Fargo Rewards portal</td>'}}></tr>
                             {/* Using dangerouslySetInnerHTML for &amp; */}
                            <tr dangerouslySetInnerHTML={{__html:'<td data-label="Feature">Intro APR Offer</td><td data-label="Details">Possible 0% for 12–15 months on purchases &amp; balance transfers (details vary)</td>'}}></tr>
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
                <h2 dangerouslySetInnerHTML={{__html:"Get the <b>Wells Fargo Autograph℠ Card</b> Today!"}}></h2>
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
                    The <strong>Wells Fargo Autograph℠</strong> stands out by offering <strong>3x</strong> in several everyday categories
                    (travel, dining, gas, transit, select streaming, and phone plans)
                    with <strong>no annual fee</strong>.
                    That’s a robust multiplier typically seen on premium products.
                    If you’re okay with a <strong>3% foreign transaction fee</strong>, it might not be your top choice for overseas usage,
                    but for domestic spending in these categories, it can net significant returns.
                    The sign-up bonus is modest but easy to achieve.
                    Overall, it’s a “reward powerhouse” for typical spending—like commutes, streaming, phone bills, etc.—
                    especially if you want a single, no-fee card that outperforms flat 1.5% or standard 1% rates.
                </p>
            </section>

             {/* Section 4: Earning 3x in Multiple Categories */}
             <section id="section-4" className={styles.reviewSection}>
                <h2>Earning 3x in Multiple Categories</h2>
                 {/* Using dangerouslySetInnerHTML for ℠ */}
                <p dangerouslySetInnerHTML={{ __html:"Unlike some cards that limit bonus categories or rotate them quarterly, Autograph℠ keeps them year-round:"}}></p>
                <ul className={styles.featureList}>
                     {/* Using dangerouslySetInnerHTML for &amp; */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>3x travel:</strong> This can include flights, hotels, car rentals, and possibly rideshare (check T&amp;Cs)."}}></li>
                    <li><strong>3x dining:</strong>
                    Restaurants, cafes, bars, and sometimes food delivery services code as dining, but confirm merchant coding.</li>
                    <li><strong>3x gas stations:</strong>
                    Great if you drive frequently; watch if big-box or warehouse clubs might not code as gas.</li>
                    <li><strong>3x transit:</strong>
                    Taxis, buses, tolls, trains—covering daily commuting costs with triple points is a big plus for city folks.</li>
                    <li><strong>3x streaming services:</strong>
                    Netflix, Spotify, Hulu, etc. can net 3x if coded properly as streaming by the merchant.</li>
                    <li><strong>3x phone plans:</strong>
                    Paying your monthly cell phone bill with Autograph℠ yields triple points if coded as a telecom service.
                    That’s a set monthly expense many consumers have anyway.</li>
                    <li><strong>1x on everything else</strong></li>
                </ul>
                <p>
                    For many, these 3x categories cover a large chunk of monthly costs,
                    surpassing typical 2% or 1.5% cards in those segments.
                    That can quickly accumulate points, especially if you drive, commute, dine out, or have multiple streaming accounts.
                </p>
            </section>

            {/* Section 5: Redeeming Wells Fargo Rewards */}
            <section id="section-5" className={styles.reviewSection}>
                 <h2>Redeeming Wells Fargo Rewards</h2>
                <p>
                    Points can be redeemed for:
                </p>
                <ol className={styles.numberedList}>
                    <li><strong>Statement Credits:</strong>
                    Apply them to your card balance, typically 1 cent per point.</li>
                    <li><strong>Direct Deposit:</strong>
                    Transfer to a Wells Fargo checking/savings if you bank with them, also 1 cent per point.</li>
                     {/* Using dangerouslySetInnerHTML for &amp; */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Gift Cards &amp; Purchases:</strong> The Wells Fargo Rewards portal occasionally offers gift cards or merchandise at varied rates. Usually, aim for at least 1 cent/point value, but watch for promotions."}}></li>
                    <li><strong>Online Travel Booking Portal:</strong>
                    Book flights, hotels, car rentals with points, typically 1 cent each in many cases.
                    Compare prices to ensure a fair redemption rate.</li>
                </ol>
                 {/* Using dangerouslySetInnerHTML for ℠ */}
                <p dangerouslySetInnerHTML={{ __html:"Wells Fargo does not have a broad airline/hotel transfer partner network, so if you want advanced travel partner conversions, consider a different ecosystem. But if you prefer straightforward redemption for cash or statement credit, Autograph℠ is quite simple—3x on key categories, then 1 cent/point for redemptions, effectively 3% returns in those categories."}}></p>
            </section>

             {/* Section 6: Sign-Up Bonus & Intro APR Potential */}
             <section id="section-6" className={styles.reviewSection}>
                <h2 dangerouslySetInnerHTML={{ __html:"Sign-Up Bonus &amp; Intro APR Potential"}}></h2>
                 {/* Using dangerouslySetInnerHTML for ℠ */}
                <p dangerouslySetInnerHTML={{ __html:"Autograph℠ frequently offers a sign-up bonus—like <strong>20,000 or 30,000 points</strong> after spending $1,000 or $1,500 in the first 3 months. That’s worth ~$200–$300 in statement credits or direct deposit. Sometimes they run 0% APR for 12–15 months on purchases or balance transfers (with a 3% or 5% transfer fee). Check current promotions. While not massive, it’s easy to achieve and a nice boost for a no-fee product."}}></p>
            </section>

             {/* Section 7: 3% Foreign Transaction Fee */}
             <section id="section-7" className={styles.reviewSection}>
                <h2>3% Foreign Transaction Fee – A Travel Caveat</h2>
                 {/* Using dangerouslySetInnerHTML for ℠ */}
                <p dangerouslySetInnerHTML={{ __html:"Despite the “travel” emphasis in 3x categories, the <strong>Autograph℠</strong> has a <strong>3% foreign transaction fee</strong>. That’s unfortunate if you plan to use it abroad or for foreign online purchases. Even though you earn 3x on travel, the 3% fee can negate or overshadow your rewards. If you frequently travel internationally, you might prefer a card with no foreign fee (like Capital One Venture or Quicksilver). Still, for domestic travelers, earning 3x on flights/hotels in the U.S. is beneficial, but watch for any cross-border fees if booking foreign-based carriers."}}></p>
            </section>

             {/* Section 8: 2025 Updates & Potential Tweaks */}
             <section id="section-8" className={styles.reviewSection}>
                <h2 dangerouslySetInnerHTML={{ __html:"2025 Updates &amp; Potential Tweaks"}}></h2>
                <ol className={styles.numberedList}>
                    <li><strong>Expanded 3x Categories?</strong>
                    Wells Fargo might add new categories or adjust streaming/phone triggers.
                    Keep an eye on official T&amp;Cs.</li>
                    <li><strong>Boosted Intro Bonus or Portal Partnerships:</strong>
                    They could run promos, e.g., 30k or 40k sign-up or special redemption deals in their Rewards portal.</li>
                     {/* Using dangerouslySetInnerHTML for &amp; */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Technology &amp; Digital Wallet Bonuses:</strong> Some rumor they might add extra points for digital wallet usage, though not confirmed. Always watch for short-term promotions."}}></li>
                     {/* Using dangerouslySetInnerHTML for ℠ */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Potential Replacement of the 3% FTF?</strong> Some hope Wells Fargo might drop the foreign fee to stay competitive, but that’s speculation. No official sign so far."}}></li>
                </ol>
                <p>
                    Always confirm changes on WellsFargo.com or official communications, as they can revise features or sign-up bonus amounts each year.
                </p>
            </section>

            {/* Section 9: Real-Life Example Table */}
            <section id="section-9" className={styles.reviewSection}>
                <h2>Real-Life Example: Earning with Autograph℠</h2>
                <p>
                    Suppose your annual spend looks like this:
                    $2,500 in dining, $3,000 in travel, $1,500 in gas, $2,000 in phone/streaming,
                    and $6,000 on other. Let’s see the points:
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
                                <td data-label="Category">Dining</td>
                                <td data-label="Annual Spend">$2,500</td>
                                <td data-label="Points per $">3x</td>
                                <td data-label="Points Earned">7,500</td>
                            </tr>
                            <tr>
                                <td data-label="Category">Travel</td>
                                <td data-label="Annual Spend">$3,000</td>
                                <td data-label="Points per $">3x</td>
                                <td data-label="Points Earned">9,000</td>
                            </tr>
                            <tr>
                                <td data-label="Category">Gas</td>
                                <td data-label="Annual Spend">$1,500</td>
                                <td data-label="Points per $">3x</td>
                                <td data-label="Points Earned">4,500</td>
                            </tr>
                            <tr>
                                <td data-label="Category">Phone/Streaming</td>
                                <td data-label="Annual Spend">$2,000</td>
                                <td data-label="Points per $">3x</td>
                                <td data-label="Points Earned">6,000</td>
                            </tr>
                             {/* Transit was in paragraph but not table, skipping for now */}
                            <tr>
                                <td data-label="Category">Other Spend</td>
                                <td data-label="Annual Spend">$6,000</td>
                                <td data-label="Points per $">1x</td>
                                <td data-label="Points Earned">6,000</td>
                            </tr>
                            <tr style={{fontWeight: 'bold', borderTop: '2px solid #dee2e6'}}>
                                <th data-label="Category">Total</th>
                                <th data-label="Annual Spend">$15,000</th> {/* Recalculated total spend */}
                                <th data-label="Points per $">—</th>
                                <th data-label="Total Points">33,000</th>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p>
                    You’d earn <strong>33,000 points</strong>, typically worth <strong>$330</strong> if redeemed for statement credits.
                    Add a possible sign-up bonus (e.g., 20k points = $200) for a total of <strong>53k</strong> points,
                    or $530 in year one.
                    Not bad for a <strong>no-fee</strong> product.
                    The only caveat is that 3% foreign fee if you do international spend.
                </p>
                 {/* !!! ATTENTION: The total annual spend in the table ($15k) does not match the sum of the categories listed in the preceding paragraph ($15k). Please verify the example spend amounts and recalculate if necessary. !!! */}
            </section>

             {/* Section 10: Competitor Analysis */}
             <section id="section-10" className={styles.reviewSection}>
                <h2>Competitor Analysis</h2>
                 {/* Using dangerouslySetInnerHTML for ℠ */}
                <p dangerouslySetInnerHTML={{ __html:"How does <strong>Autograph℠</strong> compare to other no-fee “category-based” cards?"}}></p>
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
                             {/* Using dangerouslySetInnerHTML for ℠ */}
                            <tr dangerouslySetInnerHTML={{__html:'<td data-label="Card">Wells Fargo Autograph℠</td><td data-label="Annual Fee">$0</td><td data-label="Rewards">3x on travel, dining, gas, transit, streaming, phone; 1x else</td><td data-label="Key Advantage">Broad set of 3x categories, easy no-fee approach</td>'}}></tr>
                             {/* Using dangerouslySetInnerHTML for ® */}
                            <tr dangerouslySetInnerHTML={{__html:'<td data-label="Card">Capital One SavorOne®</td><td data-label="Annual Fee">$0</td><td data-label="Rewards">3% dining, grocery, streaming, entertainment; 1% else</td><td data-label="Key Advantage">Strong dining/grocery, no annual fee, no foreign fees</td>'}}></tr>
                             {/* Using dangerouslySetInnerHTML for ℠ ® */}
                            <tr dangerouslySetInnerHTML={{__html:'<td data-label="Card">Chase Freedom Flex℠</td><td data-label="Annual Fee">$0</td><td data-label="Rewards">5% rotating categories, 3% dining/drugstores, 1% else</td><td data-label="Key Advantage">5% potential, but categories rotate and need activation</td>'}}></tr>
                             {/* Using dangerouslySetInnerHTML for ® */}
                            <tr dangerouslySetInnerHTML={{__html:'<td data-label="Card">US Bank Cash+®</td><td data-label="Annual Fee">$0</td><td data-label="Rewards">5% in 2 chosen categories, 2% in 1 everyday category, 1% else</td><td data-label="Key Advantage">Customizable, but has spending caps and some complexity</td>'}}></tr>
                        </tbody>
                    </table>
                </div>
                 {/* Using dangerouslySetInnerHTML for ℠ & ® */}
                <p dangerouslySetInnerHTML={{ __html:"<strong>Autograph℠</strong> is unique in consistently offering 3x across multiple categories without rotating or complicated activation. However, some might prefer SavorOne’s no foreign fee, especially if you dine/grocery a lot or travel internationally. If you rarely do foreign purchases, Autograph℠ covers more categories at 3x, including phone/streaming. Evaluate your spend pattern to decide the best match."}}></p>
            </section>

            {/* Section 11: Pairing with Other Wells Fargo Cards */}
             <section id="section-11" className={styles.reviewSection}>
                <h2>Pairing with Other Wells Fargo Cards</h2>
                 {/* Using dangerouslySetInnerHTML for ℠ */}
                <p dangerouslySetInnerHTML={{ __html:"You might combine Autograph℠ with <strong>Wells Fargo Active Cash℠</strong> (2% on everything else) to maximize earnings: use Autograph℠ for 3x categories, and Active Cash℠ for general spend at 2%. Both have no annual fee, so you can hold them simultaneously. However, keep in mind redemption is separate (Active Cash is pure cash back, while Autograph℠ uses the Wells Fargo Rewards points system, though effectively also redeemed at 1¢ each). Or you can rely solely on Autograph℠ if you prefer fewer accounts; 3x in so many categories and 1x for the rest might be simpler enough for everyday life."}}></p>
            </section>

             {/* Section 12: Additional Benefits & Protections */}
             <section id="section-12" className={styles.reviewSection}>
                <h2 dangerouslySetInnerHTML={{ __html:"Additional Benefits &amp; Protections"}}></h2>
                 {/* Using dangerouslySetInnerHTML for ℠ */}
                <p dangerouslySetInnerHTML={{ __html:"As a Wells Fargo product, Autograph℠ typically includes:"}}></p>
                <ul className={styles.featureList}>
                     {/* Using dangerouslySetInnerHTML for &amp; */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Cell Phone Protection:</strong> If you pay your monthly phone bill with this card, you can get coverage (damage/theft) up to a certain limit (e.g., $600) after a small deductible. This is a major perk for a no-fee card. Confirm T&amp;Cs for details."}}></li>
                     {/* Using dangerouslySetInnerHTML for &amp; */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Purchase Protection &amp; Extended Warranty:</strong> Similar coverage to many Mastercards/Visa signature-tier cards, safeguarding new items for a period or extending warranties by a year."}}></li>
                     {/* Using dangerouslySetInnerHTML for &amp; */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Zero Liability &amp; Fraud Monitoring:</strong> Standard coverage if unauthorized charges occur, plus real-time alerts."}}></li>
                </ul>
                 {/* Using dangerouslySetInnerHTML for ℠ &amp; */}
                <p dangerouslySetInnerHTML={{ __html:"The <strong>Cell Phone Protection</strong> stands out. Many no-fee cards lack it, or they require a fee. If you have an expensive smartphone, it’s a big money saver. Just pay your phone bill with Autograph℠ each month and meet the T&amp;C requirements to remain covered."}}></p>
            </section>

             {/* Section 13: APR & Carrying a Balance */}
             <section id="section-13" className={styles.reviewSection}>
                <h2 dangerouslySetInnerHTML={{ __html:"APR &amp; Carrying a Balance"}}></h2>
                <p>
                    The standard APR is typically <strong>19.99%–29.99%</strong>.
                    Some sign-up offers feature <strong>0% intro APR for 12–15 months</strong> on purchases or balance transfers.
                    If you revolve beyond that period, interest can overshadow your 3x gains.
                    Ideally, pay in full monthly or use the intro zero interest responsibly if you have a big purchase planned.
                    After the intro, the variable APR is relatively high, so it’s best to avoid carrying a balance long-term
                    if you want to keep the net rewards positive.
                </p>
            </section>

             {/* Section 14: Potential Downsides */}
             <section id="section-14" className={styles.reviewSection}>
                <h2>Potential Downsides</h2>
                <ul className={styles.featureList}>
                    <li><strong>3% Foreign Transaction Fee:</strong>
                    If you travel abroad or shop internationally, that’s a big drawback, overshadowing the 3x in travel or dining overseas.</li>
                    <li><strong>Limited Redeeming Options vs. Big Travel Ecosystems:</strong>
                    You can’t transfer points to airline/hotel partners.
                    It’s primarily statement credits or gift cards at 1¢ each.</li>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Tiered 3x Categories Might Miss Some Merchants:</strong> Not all gas stations or streaming services may code as expected, so keep an eye on how your transactions post to confirm 3x."}}></li>
                    <li><strong>Modest Sign-Up Bonus:</strong>
                    Usually around $200–$300 value in points, smaller than some competitor deals
                    but still decent for a no-fee card.</li>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>High Ongoing APR:</strong> 19.99%–29.99% can be steep if you revolve a balance after the intro period."}}></li>
                </ul>
            </section>

             {/* Section 15: Advanced Tips & Strategies */}
             <section id="section-15" className={styles.reviewSection}>
                <h2 dangerouslySetInnerHTML={{ __html:"Advanced Tips &amp; Strategies"}}></h2>
                <ol className={styles.numberedList}>
                     {/* Using dangerouslySetInnerHTML for ℠ */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Use for Cell Phone Bill:</strong> Not only do you get 3x, but also cell phone insurance coverage if you pay your bill monthly with Autograph℠. That’s a unique synergy saving you from separate phone insurance fees."}}></li>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Check Merchant Coding:</strong> If you dine in a grocery store restaurant or buy gas at a warehouse club, the coding may differ. Confirm the merchant category to ensure 3x applies."}}></li>
                     {/* Using dangerouslySetInnerHTML for ℠ */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Pair with 2% Card for “Other” Spend:</strong> You can keep Autograph℠ for 3x categories and use a 2% or 1.5% no-FTF card for everything else or foreign usage."}}></li>
                    <li><strong>Redeem Regularly:</strong>
                    Since points are straightforward at 1¢ each, you can redeem as statement credits or direct deposit regularly.
                    No reason to hoard them, though sometimes gift cards or limited promos might net a slight bonus.</li>
                    <li><strong>Leverage Intro APR If Needed:</strong>
                    Big purchase in one of the 3x categories can yield a chunk of points while giving you time to pay it off.
                    Just watch the timeline to avoid interest after the promotional window.</li>
                </ol>
            </section>

            {/* Section 16: Another Real-Life Scenario */}
            <section id="section-16" className={styles.reviewSection}>
                <h2>Another Example: Maximizing Autograph℠ Categories</h2>
                 {/* Using dangerouslySetInnerHTML for ℠ */}
                <p dangerouslySetInnerHTML={{ __html:"Suppose you spend $4,000 on travel (domestic flights, hotels), $2,500 on dining, $1,200 on gas, $1,000 on phone/streaming, and $1,300 on transit (rideshare, tolls, trains):"}}></p>
                <ul className={styles.featureList}>
                    <li>Travel: 4k * 3 = 12,000 points</li>
                    <li>Dining: 2.5k * 3 = 7,500 points</li>
                    <li>Gas: 1.2k * 3 = 3,600 points</li>
                    <li>Phone/streaming: 1k * 3 = 3,000 points</li>
                    <li>Transit: 1.3k * 3 = 3,900 points</li>
                </ul>
                 {/* Using dangerouslySetInnerHTML for ℠ */}
                <p dangerouslySetInnerHTML={{ __html:"That’s 30,000 points from these categories alone (~$300). If you also do another $5,000 on miscellaneous stuff at 1x, that’s 5,000 more points for 35,000 total. Add a sign-up bonus of 20k for 55k points or $550 in the first year—impressive for a $0 annual fee card. Just remember the 3% foreign fee if traveling abroad."}}></p>
            </section>

             {/* Section 17: Pairing with Premium Cards? */}
             <section id="section-17" className={styles.reviewSection}>
                 <h2>Pairing with Premium Cards?</h2>
                 {/* Using dangerouslySetInnerHTML for ℠ */}
                <p dangerouslySetInnerHTML={{ __html:"You might hold a premium travel card for lounge access or advanced redemption, but that typically belongs to a different bank ecosystem (Chase/Amex/Citi). Autograph℠ is purely Wells Fargo Rewards. They can’t be transferred to airline partners for outsized value. However, you can keep Autograph℠ for domestic everyday categories at 3x, then use your premium card for international travel or bigger lounge perks. Each card’s points remain separate, but that’s normal if you prefer using multiple products for different goals. If you want a single no-fee solution covering a wide range of everyday categories, Autograph℠ might suffice on its own."}}></p>
            </section>

            {/* Section 18: Competitor & Alternative Cards */}
            <section id="section-18" className={styles.reviewSection}>
                 <h2 dangerouslySetInnerHTML={{ __html:"Competitor &amp; Alternative Cards"}}></h2>
                <ul className={styles.featureList}>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Capital One SavorOne®:</strong> 3% dining, grocery, streaming, entertainment; no FTF. If you shop or dine internationally, SavorOne might beat Autograph℠ due to no foreign fees, though it lacks some categories like phone bills or transit at 3%."}}></li>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Amex Blue Cash Everyday®:</strong> 3% groceries, gas, online retail, no annual fee, but limited categories vs. Autograph℠, plus foreign fees apply."}}></li>
                     {/* Using dangerouslySetInnerHTML for ℠ ® */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Chase Freedom Flex℠:</strong> 5% rotating categories, 3% dining/drugstores, 1% else, but 3% foreign fee. Possibly bigger returns in the 5% quarters but less consistent coverage year-round."}}></li>
                     {/* Using dangerouslySetInnerHTML for ℠ */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Wells Fargo Active Cash℠:</strong> 2% on everything if you prefer a simpler approach, but again a 3% foreign fee, no 3x categories. Might be good synergy with Autograph℠ or alone if you want uniform 2% no complexity."}}></li>
                </ul>
                 {/* Using dangerouslySetInnerHTML for ℠ */}
                <p dangerouslySetInnerHTML={{ __html:"Autograph℠ wins if you want a broad set of 3x categories year-round. If you specifically want no FTF, you might look at SavorOne or a different product. If you want a single do-it-all card, you’ll weigh the categories’ importance and foreign usage carefully."}}></p>
            </section>

             {/* Section 19: Who Should Get the Card? */}
             <section id="section-19" className={styles.reviewSection}>
                 <h2 dangerouslySetInnerHTML={{ __html:"Who Should Get the Wells Fargo Autograph℠ Card?"}}></h2>
                <div className={styles.prosCons}>
                    <div className={styles.pros}>
                        <h3>Yes, If You:</h3>
                        <ul className={styles.featureList}>
                            <li>Spend significantly in <strong>travel, dining, gas, transit, streaming, or phone</strong> categories</li>
                            <li>Prefer a <strong>no-annual-fee</strong> card with multiple 3x bonus categories</li>
                             {/* Using dangerouslySetInnerHTML for ® */}
                            <li dangerouslySetInnerHTML={{__html:"Like easy redemption at <strong>1¢ per point</strong> for statement credits or deposit"}}></li>
                             {/* Using dangerouslySetInnerHTML for ® */}
                            <li dangerouslySetInnerHTML={{__html:"Don’t mind a <strong>3% foreign transaction fee</strong> (or rarely travel overseas)"}}></li>
                             {/* Using dangerouslySetInnerHTML for ® */}
                            <li dangerouslySetInnerHTML={{__html:"Want <strong>cell phone protection</strong> (pay phone bill with the card) and other everyday coverage"}}></li>
                        </ul>
                    </div>
                    <div className={styles.cons}>
                         <h3>No, If You:</h3>
                        <ul className={styles.featureList}>
                            <li>Frequently travel abroad or <strong>shop internationally</strong> (3% foreign fee hurts your net gain)</li>
                            <li>Desire a robust <strong>travel partner transfer</strong> ecosystem or lounge perks</li>
                            <li>Prefer a <strong>2% or higher</strong> universal flat-rate approach</li>
                            <li>Seek a large <strong>sign-up bonus</strong> or elaborate redemption portal beyond basic usage</li>
                            <li>Want <strong>rotating 5% categories</strong> or deeper synergy with major travel programs</li>
                        </ul>
                    </div>
                </div>
            </section>

             {/* Section 20: Final Thoughts & Disclaimer */}
             <section id="section-20" className={styles.reviewSection}>
                 <h2 dangerouslySetInnerHTML={{ __html:"Final Thoughts &amp; Disclaimer"}}></h2>
                 {/* Using dangerouslySetInnerHTML for ℠ */}
                <p dangerouslySetInnerHTML={{ __html:"The <strong>Wells Fargo Autograph℠ Card</strong> packs an impressive set of <strong>3x</strong> categories without charging an annual fee. For everyday U.S.-based spend—like dining, gas, transit, streaming, phone bills, plus some domestic travel— it can yield strong returns, easily surpassing 1.5% or 2% in those categories. If you want maximum synergy in typical daily life without paying fees, Autograph℠ is a major contender for 2025. The only shortfall is the <strong>3% foreign transaction fee</strong>, so you might pair it with a no-FTF card if you travel abroad. Redemption is straightforward at 1¢ each, though advanced travelers may miss airline/hotel transfers. Overall, it’s a top-tier everyday earner for those big 3x categories, plus a modest sign-up bonus and potential cell phone coverage sweeten the deal."}}></p>
                 {/* Using dangerouslySetInnerHTML for &amp; */}
                <p dangerouslySetInnerHTML={{ __html:"<strong>Disclaimer:</strong> Terms, rates, sign-up bonuses, and categories can change. Always verify with Wells Fargo for the latest. We may earn affiliate commissions from certain links, but editorial opinions remain our own. Examples of redemption or valuations are approximate. If you carry a balance beyond any intro APR, interest charges may erode your rewards. Refer to official T&amp;Cs for up-to-date details."}}></p>
            </section>

            {/* CTA Section */}
            <section id="cta" className={styles.ctaSection}>
                <h2 dangerouslySetInnerHTML={{__html:"Get the <b>Wells Fargo Autograph℠ Card</b> Today!"}}></h2>
                <div className={styles.ctaButtons}>
                    <a href={reviewData.applyLink} className={`${styles.btn} ${styles.btnApply}`} title="From card issuer's secure site" target="_blank" rel="noopener noreferrer sponsored">Apply Now</a>
                     {/* Using dangerouslySetInnerHTML for &amp; */}
                    <a href={reviewData.ratesLink} className={`${styles.btn} ${styles.btnRates}`} target="_blank" rel="noopener noreferrer sponsored" dangerouslySetInnerHTML={{__html:"See Rates &amp; Fees"}}></a>
                </div>
            </section>

            {/* E-A-T Section */}
             <section id="eat-expertise-authority-trustworthiness" className={`${styles.reviewSection} ${styles.eatSection}`}>
                <h2 dangerouslySetInnerHTML={{ __html: "Our Commitment to E-A-T: Expertise, Authority &amp; Trustworthiness"}}></h2>
                 {/* E-A-T text adapted for Wells Fargo Autograph */}
                <p>
                    At <strong>TravelCardInsider</strong>, we prioritize
                    reliable, unbiased reviews so you can make informed
                    credit decisions. We adhere to Google’s E‑A‑T
                    (Expertise, Authority, and Trustworthiness) guidelines
                    through:
                </p>
                <h3>1. Expertise</h3>
                <ul className={styles.featureList}>
                     {/* Using dangerouslySetInnerHTML for &amp; */}
                    <li dangerouslySetInnerHTML={{ __html:"<strong>Hands-On Category Testing:</strong> Our team validates whether gas, streaming, transit, etc., truly earn 3x by analyzing merchant codes monthly."}}></li>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{ __html:"<strong>Continuous Monitoring:</strong> We track changes to sign-up bonuses, foreign fee policies, or reward expansions, updating coverage yearly."}}></li>
                     {/* Using dangerouslySetInnerHTML for &amp; */}
                    <li dangerouslySetInnerHTML={{ __html:"<strong>Cell Phone Protection &amp; T&amp;Cs Exploration:</strong> We confirm the actual coverage limits, deductibles, and usage to provide accurate advice."}}></li>
                </ul>
                <h3>2. Authority</h3>
                <ul className={styles.featureList}>
                     {/* Using dangerouslySetInnerHTML for ℠ */}
                    <li dangerouslySetInnerHTML={{ __html:"<strong>In-Depth Reviews:</strong> This ~2,000-word piece digs beyond basics, from synergy with other Wells Fargo cards to advanced redemption tips for the Autograph℠ card."}}></li>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{ __html:"<strong>Industry Recognition:</strong> Our credit card analyses are frequently referenced in top finance/travel blogs for comprehensive, unbiased info."}}></li>
                    <li><strong>Transparency:</strong>
                    If we earn from affiliate links, we disclose that upfront.
                    Our rating and conclusion remain independent to serve readers’ best interests.</li>
                </ul>
                <h3>3. Trustworthiness</h3>
                <ul className={styles.featureList}>
                    <li><strong>Editorial Independence:</strong>
                    Advertisers have no influence on our star ratings or final verdict.
                    We always prioritize user utility.</li>
                    <li><strong>Frequent Updates:</strong>
                    If Wells Fargo adjusts categories or foreign fees, we quickly revise content to maintain accuracy.</li>
                     {/* Using dangerouslySetInnerHTML for ℠ */}
                    <li dangerouslySetInnerHTML={{ __html:"<strong>User Feedback Inclusion:</strong> We encourage cardholder experiences in the comments, verifying how Autograph℠ performs in real scenarios."}}></li>
                     {/* Using dangerouslySetInnerHTML for &amp; */}
                    <li dangerouslySetInnerHTML={{ __html:"<strong>Privacy &amp; Data Practices:</strong> As per our <a href='/privacy-policy'>Privacy Policy</a>, we protect user data on our site responsibly, consistent with best practices."}}>
                         {/* Corrected: <Link href="/privacy-policy"><a>Privacy Policy</a></Link> */}
                    </li>
                </ul>
                 {/* Using dangerouslySetInnerHTML for ℠ */}
                <p dangerouslySetInnerHTML={{ __html: "Our commitment to E-A-T ensures a thorough, trustworthy review of the <strong>Wells Fargo Autograph℠ Card</strong> for your 2025 finance toolkit." }}></p>
            </section>

          </article>
        </div> {/* Close reviewContainer */}
      </main>

      
    </>
  );
}

export default WellsFargoAutographReviewPage;