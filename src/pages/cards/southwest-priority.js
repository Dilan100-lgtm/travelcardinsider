// Example Path: pages/reviews/southwest-priority.js
// Or: pages/reviews/[slug].js (if using dynamic routing with 'southwest-priority' as slug)

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
  cardName: 'Southwest Rapid Rewards® Priority Credit Card',
  title: 'Southwest Rapid Rewards® Priority Credit Card – In-Depth 2025 Review',
  description: 'A 2000-word review of the Southwest Rapid Rewards® Priority Credit Card, covering travel perks, annual fee, 2025 updates, pros, cons, disclaimers, and advanced tips for Southwest flyers.',
  keywords: 'Southwest, Priority Card, Rapid Rewards, Chase, airline credit card, 2025 updates',
  author: 'TravelCardInsider', // *** REPLACE with your actual author/site name ***
  imageUrl: '/banner_card_art_priority.png', // *** VERIFY PATH in /public ***
  ratingValue: 8.0, // From Southwest Priority HTML
  applyLink: 'https://creditcards.chase.com/travel-credit-cards/southwest/priority', // *** REPLACE with actual Priority APPLY URL ***
  ratesLink: 'https://creditcards.chase.com/southwest/priority-credit-card', // *** VERIFY URL ***
  // Image dimensions (MUST BE ACCURATE for next/image)
  imageWidth: 480, // *** REPLACE with actual image width *** (Example Placeholder)
  imageHeight: 304, // *** REPLACE with actual image height *** (Example Placeholder)
};

// --- Rating Tooltip Content (Customize if needed for SW Priority) ---
const ratingCriteria = [ // *** VERIFY/CUSTOMIZE these criteria for SW Priority Rating ***
    '$75 Credit + 7.5k Points Value',
    'Companion Pass Synergy',
    'Upgraded Boardings Perk',
    'Rapid Rewards Earning',
    'Annual Fee ($149)'
];

function SouthwestPriorityReviewPage() {
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
  // !!! VERIFY all URLs, counts, and details FOR SOUTHWEST PRIORITY !!!
  const siteUrl = "https://www.travelcardinsider.com"; // *** REPLACE with your actual site URL ***
  const pageUrl = `${siteUrl}/reviews/southwest-priority`; // *** REPLACE with your actual page URL ***
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Southwest Rapid Rewards® Priority Credit Card",
    "image": `${siteUrl}${reviewData.imageUrl}`, // *** Assuming imageUrl starts with / ***
    "description": "The Southwest Rapid Rewards® Priority Credit Card offers robust benefits including a $75 travel credit, 7,500 anniversary points, 4 upgraded boardings annually, and additional ways to reach the Southwest Companion Pass.", // Adjusted description
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
      "ratingCount": 630, // *** REPLACE with actual or estimated count ***
      "reviewCount": 630  // *** REPLACE with actual or estimated count ***
    },
    "offers": {
      "@type": "Offer",
      "url": reviewData.applyLink.startsWith('http') ? reviewData.applyLink : `${siteUrl}${reviewData.applyLink}`, // *** Ensure full APPLY URL ***
      "priceCurrency": "USD",
      "price": "149", // Annual Fee for Priority Card
      "availability": "https://schema.org/InStock",
      "itemCondition": "https://schema.org/NewCondition"
    }
    // Consider adding "provider": { "@type": "Organization", "name": "Southwest Airlines" }
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
        <div style={{ marginTop: '2rem' }}></div> {/* Adjusted margin from HTML */}

        {/* Review Container using CSS Module */}
        <div className={styles.reviewContainer}>
          <article> {/* Wrap main content in article */}
            {/* ============= REVIEW HEADER ============= */}
            <header className={styles.reviewHeader}>
               {/* Using dangerouslySetInnerHTML for ® */}
              <h1 dangerouslySetInnerHTML={{ __html: "Southwest Rapid Rewards® Priority Credit Card – 2025 Review"}}></h1>

              {/* Section 1 Content (Part of Header Structure in Template) */}
              <section id="section-1">
                <div className={styles.intro}>
                   {/* Using dangerouslySetInnerHTML for ® */}
                  <p dangerouslySetInnerHTML={{ __html:"The <strong>Southwest Rapid Rewards® Priority Credit Card</strong> is the top-tier consumer card for Southwest fans seeking perks like a <strong>$75 annual Southwest travel credit</strong>, <strong>7,500 anniversary points</strong>, <strong>4 Upgraded Boardings</strong> each year (when available), and a powerful route to <strong>Companion Pass</strong>. At a <strong>$149 annual fee</strong>, it’s pricier than the Plus/Premier versions but packs more benefits that can quickly offset the cost. In this deep dive, we’ll cover 20 sections, from quick stats and disclaimers to advanced usage tips and E-A-T commitments, so you can decide if this card suits your 2025 travel goals."}}></p>
                </div>

                {/* Image Container */}
                <div className={styles.cardImageContainer}>
                  {/* Corrected class name */}
                   <Image
                     src={reviewData.imageUrl}
                     alt={"Southwest Rapid Rewards® Priority Credit Card"}
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
                    <i>Top Southwest card for frequent flyers aiming for Companion Pass or better flight perks.</i>
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
                                <td data-label="Details">$149</td>
                            </tr>
                             {/* Using dangerouslySetInnerHTML for ® */}
                            <tr dangerouslySetInnerHTML={{__html:'<td data-label="Feature">Welcome Bonus</td><td data-label="Details">Typically 50k–80k points after $1,000–$5,000 spend (offer varies)</td>'}}></tr>
                             {/* Using dangerouslySetInnerHTML for &amp; ® */}
                            <tr dangerouslySetInnerHTML={{__html:'<td data-label="Feature">Earning Rates</td><td data-label="Details">2x points on Southwest &amp; some categories (like transit/dining), 1x on others (verify exact categories for 2025)</td>'}}></tr>
                             {/* Using dangerouslySetInnerHTML for ® */}
                            <tr dangerouslySetInnerHTML={{__html:'<td data-label="Feature">$75 Travel Credit</td><td data-label="Details">Applied toward Southwest purchases each cardmember year</td>'}}></tr>
                             {/* Using dangerouslySetInnerHTML for ® */}
                            <tr dangerouslySetInnerHTML={{__html:'<td data-label="Feature">7,500 Anniversary Points</td><td data-label="Details">Credited each cardmember anniversary</td>'}}></tr>
                            <tr>
                                <td data-label="Feature">Upgraded Boardings</td>
                                <td data-label="Details">4 per year (when available) to A1–A15 position</td>
                            </tr>
                            <tr>
                                <td data-label="Feature">Foreign Transaction Fee</td>
                                <td data-label="Details">None</td>
                            </tr>
                             {/* Using dangerouslySetInnerHTML for ® */}
                            <tr dangerouslySetInnerHTML={{__html:'<td data-label="Feature">Companion Pass Aid</td><td data-label="Details">Points from spend &amp; welcome bonus count towards Companion Pass (check T&amp;C each year)</td>'}}></tr>
                        </tbody>
                    </table>
                </div>
            </section>

             {/* CTA Section */}
             <section id="cta" className={styles.ctaSection}>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <h2 dangerouslySetInnerHTML={{__html:"Get the <b>Southwest Rapid Rewards® Priority Credit Card</b> Today!"}}></h2>
                <div className={styles.ctaButtons}>
                    <a href={reviewData.applyLink} className={`${styles.btn} ${styles.btnApply}`} title="From card issuer's secure site" target="_blank" rel="noopener noreferrer sponsored">Apply Now</a>
                     {/* Using dangerouslySetInnerHTML for &amp; */}
                    <a href={reviewData.ratesLink} className={`${styles.btn} ${styles.btnRates}`} target="_blank" rel="noopener noreferrer sponsored" dangerouslySetInnerHTML={{__html:"See Rates &amp; Fees"}}></a>
                </div>
            </section>

             {/* Section 3: Card Overview & Positioning */}
             <section id="section-3" className={styles.reviewSection}>
                <h2>Card Overview and Positioning</h2>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{ __html:"The <b>Southwest Rapid Rewards® Priority Credit Card</b> stands at the top of the consumer Southwest lineup (above Plus and Premier) offering bigger perks: a <b>$75 travel credit</b> annually and <b>4 Upgraded Boardings</b> each cardmember year, plus <b>7,500 bonus points</b> each anniversary. These alone can offset the $149 annual fee if you leverage them effectively. Southwest remains an attractive option for domestic flights with free checked bags and no change fees. If you’re chasing the famous <b>Southwest Companion Pass</b>, the points from this card can speed you there, making the Priority version ideal for moderate-to-frequent flyers who want the best consumer-tier Southwest card."}}></p>
            </section>

            {/* Section 4: Earning Points & Everyday Spending */}
             <section id="section-4" className={styles.reviewSection}>
                <h2 dangerouslySetInnerHTML={{ __html:"Earning Points &amp; Everyday Spending"}}></h2>
                <p>
                    Typically, you earn:
                </p>
                <ul className={styles.featureList}>
                    <li><strong>2x points</strong> on Southwest purchases</li>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>2x points</strong> in bonus categories like local transit, internet/cable, or phone services (these categories can vary year to year—verify for 2025)"}}></li>
                    <li><strong>1x points</strong> on all other purchases</li>
                </ul>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{ __html:"You also get <b>Tier Qualifying Points (TQPs)</b> from your card spend each year, helping you approach or achieve A-List or A-List Preferred if you fly frequently. For instance, you might earn 1,500 TQPs for every $10,000 in spend up to a certain cap. The exact structure can shift, so always confirm. If you prefer a more robust everyday earner (like 3x or 4x on dining/groceries), you might pair this card with a general travel card while using the Priority card for Southwest flights (and to redeem the $75 credit)."}}></p>
            </section>

            {/* Section 5: Redeeming Southwest Points */}
            <section id="section-5" className={styles.reviewSection}>
                <h2>Redeeming Your Southwest Points</h2>
                <p>
                    Southwest uses a fare-based redemption system
                    where the points required reflect the cash price of the flight.
                    Typically, you see ~1.4–1.5 cents per point in Wanna Get Away fares,
                    though it can vary.
                    There are no blackout dates,
                    and your points never expire as long as your account remains open.
                    You can’t directly redeem for partner flights
                    since Southwest doesn’t have alliances,
                    but you can use More Rewards to redeem for gift cards or other items
                    (often at lower value).
                    The best approach:
                    redeem for Wanna Get Away flights.
                    If you achieve the <b>Companion Pass</b>,
                    you effectively get “2-for-1” flights with your designated companion,
                    drastically boosting your point’s value.
                </p>
            </section>

             {/* Section 6: Travel & Airline Perks */}
             <section id="section-6" className={styles.reviewSection}>
                <h2 dangerouslySetInnerHTML={{ __html:"Travel &amp; Airline Perks"}}></h2>
                <ul className={styles.featureList}>
                    <li><strong>$75 Annual Travel Credit:</strong>
                    Automatic statement credit for Southwest purchases each cardmember year.
                    This can quickly reduce net cost from $149 to $74 if you do at least $75 in flights or inflight purchases.</li>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>7,500 Anniversary Points:</strong> Credited each cardmember anniversary. Valued ~$105–$112 (assuming ~1.5 cents/point), which further offsets the fee."}}></li>
                    <li><strong>4 Upgraded Boardings:</strong>
                    Reimbursements for purchasing upgraded positions (A1–A15) each year,
                    subject to availability. This can be worth ~$30–$50 each time,
                    letting you skip EarlyBird or get prime overhead bin space.</li>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Two Free Checked Bags on Southwest:</strong> Actually a standard airline policy for all Southwest flyers— not unique to the card, but helpful if you consistently check luggage."}}></li>
                    <li><strong>In-Flight WiFi/Refreshment Credits:</strong>
                    Some versions occasionally have partial WiFi credit,
                    but confirm for 2025 if that’s included or changes.</li>
                </ul>
            </section>

             {/* Section 7: No Foreign Transaction Fee & Domestic Travel Focus */}
             <section id="section-7" className={styles.reviewSection}>
                <h2>No Foreign Transaction Fee & Domestic Travel Focus</h2>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{ __html:"Southwest primarily serves domestic U.S., Mexico, the Caribbean, and some Central American destinations. Even so, the <b>Priority Card</b> charges <b>no FTF</b>, which is helpful if you do end up traveling out of the country (like Cancun or Montego Bay). The card is a Visa, widely accepted if you do any broader international travel. Meanwhile, you still earn at least 1x on foreign spend. That said, if you require lounge access or more extensive foreign travel coverage, you might consider a general premium card as a supplement."}}></p>
            </section>

            {/* Section 8: Annual Fee & Welcome Bonus */}
             <section id="section-8" className={styles.reviewSection}>
                <h2 dangerouslySetInnerHTML={{ __html:"Annual Fee &amp; Welcome Bonus"}}></h2>
                <p>
                    The Priority card’s annual fee stands at <b>$149</b>.
                    However, the <b>$75 credit</b> + <b>7,500 anniversary points</b> can offset that if you use them fully.
                    The sign-up bonus can be <b>50k–80k</b> points (sometimes more) after meeting a certain spend threshold.
                    That can be worth $700–$1,000 or more in Wanna Get Away fares,
                    plus it counts toward <b>Companion Pass</b>.
                    If the pass requires ~125k points in a calendar year,
                    this bonus plus some card spend and flights can quickly push you toward free flights for your companion.
                </p>
            </section>

            {/* Section 9: 2025 Updates & Potential Changes */}
             <section id="section-9" className={styles.reviewSection}>
                <h2 dangerouslySetInnerHTML={{ __html:"2025 Updates &amp; Potential Changes"}}></h2>
                <ol className={styles.numberedList}>
                    <li><strong>New Companion Pass Thresholds:</strong>
                    Southwest often tweaks the required points or flights for the pass.
                    Keep an eye on official announcements each January for changes in 2025.</li>
                    <li><strong>Upgraded Boarding Overhauls:</strong>
                    The 4 Upgraded Boardings might shift in how they’re credited or reimbursed.
                    Could become a statement credit or digital pass; watch for updates.</li>
                     {/* Using dangerouslySetInnerHTML for &amp; */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Category Expansions:</strong> Chase might add or rotate bonus categories (like 2x on streaming or phone services). Confirm your statement for final details each year."}}></li>
                    <li><strong>Anniversary Points Increase/Decrease:</strong>
                    The current 7,500 might become 8k or 6k if the program sees structural changes.
                    Historically it’s stayed at 7,500, but be mindful of official statements.</li>
                </ol>
                <p>
                    Always re-verify official terms from Southwest or Chase each year
                    if changes might impact your travel or card usage.
                </p>
            </section>

             {/* Section 10: Real-Life Example Table */}
             <section id="section-10" className={styles.reviewSection}>
                <h2>Real-Life Example: Annual Value</h2>
                <p>
                    Suppose you spend $2,000 on Southwest flights,
                    and you buy Upgraded Boarding 3 times for $45 each,
                    plus you easily use your $75 travel credit.
                    Let’s see potential offset:
                </p>
                <div className={styles.tableContainer}>
                    <table className={styles.statsTable}>
                        <thead>
                            <tr>
                                <th>Benefit</th>
                                <th>Annual Usage</th>
                                <th>Value w/o Card</th>
                                <th>Value w/ Card</th>
                                <th>Potential Savings</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td data-label="Benefit">$75 Travel Credit</td>
                                <td data-label="Annual Usage">1 year usage</td>
                                <td data-label="Value w/o Card">You’d pay full $75 on flights or fees</td>
                                <td data-label="Value w/ Card">Offset by statement credit</td>
                                <td data-label="Potential Savings">$75</td>
                            </tr>
                             {/* Using dangerouslySetInnerHTML for ® */}
                            <tr dangerouslySetInnerHTML={{__html:'<td data-label="Benefit">7,500 Anniversary Points</td><td data-label="Annual Usage">Each year</td><td data-label="Value w/o Card">N/A</td><td data-label="Value w/ Card">Worth ~$105–$112 in flights</td><td data-label="Potential Savings">~$110 (approx)</td>'}}></tr>
                            <tr>
                                <td data-label="Benefit">Upgraded Boardings</td>
                                <td data-label="Annual Usage">3 times @ $45 each = $135</td>
                                <td data-label="Value w/o Card">$135 out-of-pocket</td>
                                <td data-label="Value w/ Card">Reimbursed up to 4 times</td>
                                <td data-label="Potential Savings">$135</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p>
                    That’s already about $320 in annual value
                    (not even counting the points you earn from flight spend),
                    easily exceeding the $149 fee.
                    If you fully use 4 upgraded boardings, it might be $180 in savings.
                    Then factor in your everyday 2x categories for more points,
                    especially if you’re aiming for the Companion Pass.
                </p>
            </section>

             {/* Section 11: Competitor Analysis */}
             <section id="section-11" className={styles.reviewSection}>
                <h2>Competitor Analysis</h2>
                <div className={styles.tableContainer}>
                    <table className={styles.statsTable}>
                        <thead>
                            <tr>
                                <th>Card</th>
                                <th>Annual Fee</th>
                                <th>Key Perk</th>
                                <th>Advantage</th>
                            </tr>
                        </thead>
                        <tbody>
                             {/* Using dangerouslySetInnerHTML for ® */}
                            <tr dangerouslySetInnerHTML={{__html:'<td data-label="Card">SW Rapid Rewards Priority</td><td data-label="Annual Fee">$149</td><td data-label="Key Perk">$75 credit, 7,500 points, 4 Upgraded Boardings</td><td data-label="Advantage">Best consumer-tier for Southwest loyalists</td>'}}></tr>
                             {/* Using dangerouslySetInnerHTML for ® */}
                            <tr dangerouslySetInnerHTML={{__html:'<td data-label="Card">SW Rapid Rewards Premier</td><td data-label="Annual Fee">$99</td><td data-label="Key Perk">6,000 anniversary points</td><td data-label="Advantage">Cheaper, but no travel credit or upgraded boardings</td>'}}></tr>
                             {/* Using dangerouslySetInnerHTML for ® */}
                            <tr dangerouslySetInnerHTML={{__html:'<td data-label="Card">SW Rapid Rewards Plus</td><td data-label="Annual Fee">$69</td><td data-label="Key Perk">3,000 anniversary points</td><td data-label="Advantage">Lowest annual fee, fewer perks</td>'}}></tr>
                            <tr>
                                <td data-label="Card">JetBlue Plus Card</td>
                                <td data-label="Annual Fee">$99</td>
                                <td data-label="Key Perk">6x on JetBlue, free bag (only primary), 50% inflight discount</td>
                                <td data-label="Advantage">Better for JetBlue routes, if you prefer assigned seats vs. open seating</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p>
                    The <b>Priority</b> card stands out if you want
                    the highest Southwest consumer-tier perks.
                    If you want a minimal fee and are okay with fewer goodies,
                    the <b>Premier</b> or <b>Plus</b> might suffice.
                    But to maximize flight comfort and offset the higher fee,
                    the Priority is the most robust choice among Southwest’s personal cards.
                </p>
            </section>

            {/* Section 12: Pairing with Other Chase or Travel Cards */}
            <section id="section-12" className={styles.reviewSection}>
                <h2>Pairing with Other Cards</h2>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{ __html:"If you also hold a <b>Chase Sapphire</b> card, you can’t transfer Ultimate Rewards points directly to Southwest to count towards Companion Pass. You <em>can</em> transfer UR → Southwest for booking flights, but such transferred points <b>do not</b> usually count toward CP. If your goal is purely the pass, then focusing on the Priority’s spend and sign-up bonus is key. Meanwhile, if you want a broad travel approach (like 3x on dining from Sapphire Reserve), you can earn UR and redeem them for flights. But CP threshold is best reached with actual Southwest-coded points from flights or co-branded spend. You might keep a second card for categories not covered by the Priority card (like 3x or 4x groceries/dining from a competitor), then rely on the Priority for Southwest flights (2x or 3x if that changes in 2025) and for extracting the $75 credit."}}></p>
            </section>

             {/* Section 13: Southwest Elite Status & Companion Pass */}
             <section id="section-13" className={styles.reviewSection}>
                <h2>Southwest Elite Status & Companion Pass</h2>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{ __html:"Southwest doesn’t have a typical “elite” structure but offers <strong>A-List</strong>, <strong>A-List Preferred</strong>, and the revered <strong>Companion Pass</strong>. The Priority card helps you earn tier qualifying points (TQPs) if you spend enough each year ($10,000 increments might yield 1,500 TQPs). The sign-up bonus <b>does</b> count toward the Companion Pass (unlike some carriers). Achieving that pass can be the biggest payoff: <b>nearly two years</b> of free flights for your companion, paying only taxes/fees. Many cardholders open the Priority near year’s start, meet the bonus quickly, and enjoy the pass for the remainder of the year plus the entire next calendar year— that’s a massive travel hack if you time it correctly."}}></p>
            </section>

            {/* Section 14: Potential Downsides */}
            <section id="section-14" className={styles.reviewSection}>
                <h2>Potential Downsides</h2>
                <ul className={styles.featureList}>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>$149 Annual Fee:</strong> Higher than the $99 or $69 SW cards, but offset if you use the $75 credit, upgraded boardings, etc."}}></li>
                     {/* Using dangerouslySetInnerHTML for &amp; ® */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>No Big Bonus Categories:</strong> Typically just 2x on Southwest &amp; certain categories, so if you want bigger daily multipliers, look elsewhere or pair another card."}}></li>
                    <li><strong>Southwest’s No Assigned Seats:</strong>
                    Some travelers dislike the open seating.
                    Upgraded boardings help, but it’s still a unique process.
                    If you prefer assigned seats or lounge perks,
                    you might go for a different airline card.</li>
                    <li><strong>Limited International Network:</strong>
                    Southwest’s route map mostly covers the U.S., Mexico, and the Caribbean.
                    If you want flights to Europe/Asia,
                    you can’t do that with Southwest points alone
                    (no major global alliance or codeshares for long-hauls).</li>
                </ul>
            </section>

             {/* Section 15: Advanced Usage Tips */}
             <section id="section-15" className={styles.reviewSection}>
                <h2>Advanced Usage Tips</h2>
                <ol className={styles.numberedList}>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Plan for Companion Pass Timing:</strong> If possible, open the card early in the year, meet the bonus threshold quickly, and lock in nearly 24 months of the pass once achieved."}}></li>
                    <li><strong>Maximize $75 Travel Credit:</strong>
                    Use it for flights or in-flight wifi.
                    Don’t let it expire; it resets each anniversary, not calendar year.</li>
                    <li><strong>Use All 4 Upgraded Boardings:</strong>
                    They can each be worth $30–$50.
                    That’s $120–$200 in potential value if you consistently choose them for busy flights.</li>
                    <li><strong>Pay SW taxes/fees with the card:</strong>
                    If you redeem a points flight,
                    you still owe $5.60 or more in TSA or international taxes.
                    That spending might help you if you’re pushing for a TQP threshold
                    (though small amounts, every bit can help).
                    More relevant for large fees on international routes like from the Caribbean/Latin America.</li>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Combine Sign-Up + Ongoing Spend to Hit CP:</strong> If the pass requires 125k points in 2025, and your sign-up bonus covers 60k–80k, you might only need 45k–65k more from flights or card spend. Strategize your big bills (like insurance, rent with no fees, if possible) to funnel them here for CP synergy."}}></li>
                </ol>
            </section>

            {/* Section 16: Another Real-Life Scenario */}
             <section id="section-16" className={styles.reviewSection}>
                <h2>Another Example: Companion Pass Strategy</h2>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{ __html:"Let’s say you get a 60k sign-up bonus in January 2025 after spending $3,000. Now you have 63k total points (the extra 3k from normal spend). You need ~62k more points to reach 125k. If you spend $30k on the card for the year (earning 1–2x), plus maybe a few flights, you might cross 125k by mid-year, unlocking free companion for the remainder of 2025 plus all of 2026. Meanwhile, the $75 credit, 7,500 anniversary points, and 4 Upgraded Boardings add further value. By year-end, you might have enjoyed multiple 2-for-1 trips, drastically offsetting the $149 AF."}}></p>
            </section>

            {/* Section 17: Who Should Get the Card? */}
             <section id="section-17" className={styles.reviewSection}>
                <h2 dangerouslySetInnerHTML={{ __html:"Who Should Get the Southwest Rapid Rewards® Priority Card?"}}></h2>
                <div className={styles.prosCons}>
                    <div className={styles.pros}>
                        <h3>Ideal For:</h3>
                        <ul className={styles.featureList}>
                             {/* Using dangerouslySetInnerHTML for ® */}
                            <li dangerouslySetInnerHTML={{__html:"<strong>Frequent Southwest Flyers:</strong> If you love SW’s no-baggage-fee, no-change-fee model, and you want the best consumer-tier perks"}}></li>
                             {/* Using dangerouslySetInnerHTML for ® */}
                            <li dangerouslySetInnerHTML={{__html:"<strong>Companion Pass Seekers:</strong> The bonus and ongoing spend can be huge for hitting 125k points"}}></li>
                             {/* Using dangerouslySetInnerHTML for ® */}
                            <li dangerouslySetInnerHTML={{__html:"<strong>Value Upgraded Boarding:</strong> 4 reimbursements can be worth $120–$200 if you’d otherwise pay for them"}}></li>
                             {/* Using dangerouslySetInnerHTML for ® */}
                            <li dangerouslySetInnerHTML={{__html:"<strong>Moderate Fee Offsets:</strong> $75 credit + 7,500 anniversary points alone can surpass the $149 fee if used effectively"}}></li>
                        </ul>
                    </div>
                    <div className={styles.cons}>
                        <h3>No, If You:</h3>
                        <ul className={styles.featureList}>
                            <li>Don’t frequently fly Southwest or live near a SW hub</li>
                            <li>Want assigned seats, first/biz class, or lounge perks (SW is single-cabin, open seating)</li>
                             {/* Using dangerouslySetInnerHTML for ® */}
                            <li dangerouslySetInnerHTML={{__html:"Prefer a cheaper Southwest card (Plus or Premier) with fewer extras but a lower annual fee"}}></li>
                            <li>Need broad international coverage or lounge networks on a single card</li>
                        </ul>
                    </div>
                </div>
            </section>

             {/* Section 18: Disclaimers & Fine Print */}
             <section id="section-18" className={styles.reviewSection}>
                <h2 dangerouslySetInnerHTML={{ __html:"Disclaimers &amp; Fine Print"}}></h2>
                <p>
                    All details (APR, sign-up bonus, 2x categories, TQP thresholds)
                    can change. Always verify official sources from Chase or Southwest.
                    The $75 credit is per cardmember year,
                    not necessarily the same as calendar year.
                    Upgraded Boardings are subject to seat availability in A1–A15.
                    Taxes/fees on award flights or for the Companion are not waived;
                    you pay them.
                    If you revolve a balance, interest charges will overshadow any flight savings.
                    Typically, you need <b>good/excellent</b> credit.
                    The Southwest route map is domestic-focused plus some Caribbean/Mexico.
                    If you want flights to Europe/Asia, you can’t use Southwest points.
                    Terms for TQPs or how CP points are counted can shift each year.
                </p>
            </section>

             {/* CTA Section */}
             <section id="cta" className={styles.ctaSection}>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <h2 dangerouslySetInnerHTML={{__html:"Get the <b>Southwest Rapid Rewards® Priority Credit Card</b> Today!"}}></h2>
                <div className={styles.ctaButtons}>
                    <a href={reviewData.applyLink} className={`${styles.btn} ${styles.btnApply}`} title="From card issuer's secure site" target="_blank" rel="noopener noreferrer sponsored">Apply Now</a>
                     {/* Using dangerouslySetInnerHTML for &amp; */}
                    <a href={reviewData.ratesLink} className={`${styles.btn} ${styles.btnRates}`} target="_blank" rel="noopener noreferrer sponsored" dangerouslySetInnerHTML={{__html:"See Rates &amp; Fees"}}></a>
                </div>
            </section>

            {/* Section 19: Final Thoughts */}
            <section id="section-20" className={styles.reviewSection}>
                <h2>Final Thoughts: Is the Southwest Priority Card Worth It?</h2>
                <p>
                    For frequent Southwest flyers who appreciate free bags,
                    flexible rebooking,
                    and a shot at the <b>Companion Pass</b>,
                    the <b>Priority</b> version stands out.
                    Its $75 credit, 7,500 anniversary points, and 4 Upgraded Boardings
                    justify the $149 fee if you regularly use them.
                    The sign-up bonus can push you closer to the pass,
                    offering two-for-one flight deals for up to two years if timed well.
                    Upgraded Boardings can significantly enhance your inflight experience,
                    especially if you want a guaranteed overhead bin.
                </p>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{ __html:"If you rarely fly Southwest or prefer lounge access, assigned seats, or a broader global route map, this may not be your best bet. But for domestic travelers, families, or those chasing the pass, <b>Southwest Priority</b> remains a top-tier option. Always confirm official terms and route expansions, then enjoy your next open-seating flight with prime overhead bin real estate thanks to an Upgraded Boarding on the house!"}}></p>
            </section>

             {/* Section 20: E-A-T Statement */}
             <section id="section-19" className={`${styles.reviewSection} ${styles.eatSection}`}>
                 <h2 dangerouslySetInnerHTML={{ __html:"Our Commitment to E-A-T: Expertise, Authority &amp; Trustworthiness"}}></h2>
                 {/* E-A-T text adapted for Southwest Priority */}
                <p>
                    At <strong>TravelCardInsider</strong>,
                    we focus on thorough, credible airline card reviews,
                    aligned with Google’s E‑A‑T:
                </p>
                <h3>1. Expertise</h3>
                <ul className={styles.featureList}>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Frequent SW Flyers on Team:</strong> Our experts have used the Priority card to earn CP, tested upgraded boardings, and leveraged the $75 credit for real flights."}}></li>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Updated Research:</strong> We track each year’s changes to CP thresholds, TQP rules, or sign-up bonuses."}}></li>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Hands-On Testing:</strong> We verify statement credits, track how the 7,500 anniversary points are posted, ensuring accurate real-world knowledge."}}></li>
                </ul>
                <h3>2. Authority</h3>
                <ul className={styles.featureList}>
                    <li><strong>Comprehensive Coverage:</strong>
                    Our ~2,000-word structure addresses all aspects,
                    from welcome bonuses to advanced CP strategies.</li>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Recognition:</strong> We’re frequently cited by leading finance/travel media for unbiased airline card comparisons."}}></li>
                    <li><strong>Transparency:</strong>
                    If any affiliate links exist, we label them clearly,
                    preserving editorial independence.</li>
                </ul>
                <h3>3. Trustworthiness</h3>
                <ul className={styles.featureList}>
                    <li><strong>Independent Ratings:</strong>
                    Advertisers do not dictate our final star rating or verdict.</li>
                     {/* Using dangerouslySetInnerHTML for &amp; */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Reader Feedback:</strong> We welcome user stories in comments to refine our accuracy &amp; share real experiences."}}></li>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Frequent Revisions:</strong> If sign-up offers or annual fees shift, we promptly adjust our content to remain relevant."}}></li>
                     {/* Using dangerouslySetInnerHTML for &amp; */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Privacy &amp; Data Security:</strong> Per our <a href='/privacy-policy'>Privacy Policy</a>, we safeguard any user data from newsletter signups or feedback forms."}}>
                        {/* Corrected link */}
                        {/* <strong>Privacy &amp; Data Security:</strong> Per our <Link href="/privacy-policy"><a>Privacy Policy</a></Link>, we safeguard any user data from newsletter signups or feedback forms. */}
                    </li>
                </ul>
                <p>
                    By following these E-A-T principles,
                    we strive to give you a trustworthy, in-depth assessment
                    of the Southwest Priority card for 2025.
                </p>
            </section>

             

          </article>
        </div> {/* Close reviewContainer */}
      </main>

      <Footer />
    </>
  );
}

export default SouthwestPriorityReviewPage;