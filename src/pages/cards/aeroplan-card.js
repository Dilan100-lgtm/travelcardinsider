// Example Path: pages/reviews/aeroplan-card.js
// Or: pages/reviews/[slug].js (if using dynamic routing with 'aeroplan-card' as slug)

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
  cardName: 'Aeroplan® Credit Card',
  title: 'Aeroplan® Credit Card – In-Depth 2025 Review',
  description: 'A comprehensive 2000-word review of the Chase Aeroplan® Credit Card, covering Air Canada benefits, earning rates, 2025 updates, pros and cons, disclaimers, and advanced usage tips for Aeroplan travelers.',
  keywords: 'Aeroplan, Air Canada, Chase, airline credit card, points, 2025 updates',
  author: 'TravelCardInsider', // *** REPLACE with your actual author/site name ***
  imageUrl: '/aeroplan_card.png', // *** VERIFY PATH in /public ***
  ratingValue: 8.0, // From Aeroplan HTML
  applyLink: 'https://creditcards.chase.com/travel-credit-cards/aircanada/aeroplan', // *** REPLACE with actual Aeroplan Card APPLY URL ***
  ratesLink: 'https://sites.chase.com/services/creatives/pricingandterms.html/content/dam/pricingandterms/LGC60518.html', // *** VERIFY URL ***
  // Image dimensions (MUST BE ACCURATE for next/image)
  imageWidth: 480, // *** REPLACE with actual image width *** (Example Placeholder)
  imageHeight: 304, // *** REPLACE with actual image height *** (Example Placeholder)
};

// --- Rating Tooltip Content (Customize if needed for Aeroplan Card) ---
const ratingCriteria = [ // *** VERIFY/CUSTOMIZE these criteria for Aeroplan Card Rating ***
    'Aeroplan Points Earning (3x Categories)',
    'Star Alliance Redemption Value',
    'Welcome Bonus Potential',
    'Elite Status Acceleration',
    'Annual Fee ($95) vs. Perks',
];

function AeroplanCardReviewPage() {
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
  // !!! VERIFY all URLs, counts, and details FOR AEROPLAN CARD !!!
  const siteUrl = "https://www.travelcardinsider.com"; // *** REPLACE with your actual site URL ***
  const pageUrl = `${siteUrl}/reviews/aeroplan-card`; // *** REPLACE with your actual page URL ***
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Aeroplan® Credit Card",
    "image": `${siteUrl}${reviewData.imageUrl}`, // *** Assuming imageUrl starts with / ***
    "description": "The Aeroplan® Credit Card by Chase offers elevated Air Canada Aeroplan benefits, multiple bonus categories (3x points), and a path to Aeroplan Elite Status.", // Adjusted description
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
      "ratingCount": 410, // *** REPLACE with actual or estimated count ***
      "reviewCount": 410  // *** REPLACE with actual or estimated count ***
    },
    "offers": {
      "@type": "Offer",
      "url": reviewData.applyLink.startsWith('http') ? reviewData.applyLink : `${siteUrl}${reviewData.applyLink}`, // *** Ensure full APPLY URL ***
      "priceCurrency": "USD",
      "price": "95", // Annual Fee for Aeroplan Card
      "availability": "https://schema.org/InStock",
      "itemCondition": "https://schema.org/NewCondition"
    }
    // Consider adding "provider": { "@type": "Organization", "name": "Air Canada" }
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
               {/* Using dangerouslySetInnerHTML for ® */}
              <h1 dangerouslySetInnerHTML={{ __html: "Aeroplan® Credit Card – 2025 Review" }}></h1>

              {/* Section 1 Content (Part of Header Structure in Template) */}
              <section id="section-1">
                 {/* Using dangerouslySetInnerHTML for ® */}
                <div className={styles.intro}>
                  <p dangerouslySetInnerHTML={{ __html: "The <strong>Aeroplan® Credit Card</strong> by Chase is a popular choice for frequent (and aspiring) Air Canada travelers, offering robust opportunities to earn Aeroplan points on everyday and travel categories. With Air Canada’s increasingly global footprint and Star Alliance membership, Aeroplan points can be redeemed for flights worldwide. The card often grants <strong>solid sign-up bonuses</strong>, perks like a <strong>Global Entry/TSA PreCheck® credit</strong>, and accelerated paths to <strong>Aeroplan Elite Status</strong> in 2025. At a moderate <strong>$95 annual fee</strong>, it can be a strong mid-tier airline card if you’re partial to Air Canada’s service and alliances. Read on for our 20-section deep dive—covering quick stats, disclaimers, advanced usage tips, and more—to see if it aligns with your 2025 travel plans." }}></p>
                </div>

                {/* Image Container */}
                <div className={styles.cardImageContainer}>
                  {/* Class name adjusted */}
                   <Image
                     src={reviewData.imageUrl}
                     alt={"Aeroplan® Credit Card"}
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
                     {/* Using dangerouslySetInnerHTML for ® &amp; */}
                    <i dangerouslySetInnerHTML={{__html:"A strong Air Canada companion with flexible Star Alliance redemptions &amp; mid-range fee."}}></i>
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
                                <td data-label="Feature">Welcome Bonus</td>
                                <td data-label="Details">Often 60k–100k points after $2,000–$4,000 spend (subject to change)</td>
                            </tr>
                             {/* Using dangerouslySetInnerHTML for ® &amp; */}
                            <tr dangerouslySetInnerHTML={{__html:'<td data-label="Feature">Earning Rates</td><td data-label="Details">3x on Air Canada &amp; groceries/dining (varies), 1x on others (verify for 2025)</td>'}}></tr>
                            <tr>
                                <td data-label="Feature">Elite Status Aid</td>
                                <td data-label="Details">Card spend can accelerate Aeroplan Elite Status (conditions apply)</td>
                            </tr>
                             {/* Using dangerouslySetInnerHTML for ® */}
                            <tr dangerouslySetInnerHTML={{__html:'<td data-label="Feature">Global Entry/TSA PreCheck®</td><td data-label="Details">$100 statement credit every 4 years</td>'}}></tr>
                            <tr>
                                <td data-label="Feature">No Foreign Transaction Fee</td>
                                <td data-label="Details">Ideal for global Star Alliance usage</td>
                            </tr>
                            <tr>
                                <td data-label="Feature">Baggage/Seat Perks</td>
                                <td data-label="Details">1st checked bag free for cardholder on Air Canada (check for 2025 updates)</td>
                            </tr>
                            <tr>
                                <td data-label="Feature">Points Transfer Partners</td>
                                <td data-label="Details">Aeroplan is a Star Alliance program with broad redemption possibilities</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            {/* CTA Section */}
             <section id="cta" className={styles.ctaSection}>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <h2 dangerouslySetInnerHTML={{__html:"Get the <b>Aeroplan® Credit Card</b> Today!"}}></h2>
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
                <p dangerouslySetInnerHTML={{ __html: "The <b>Chase Aeroplan® Card</b> aligns with Air Canada’s globally recognized <b>Star Alliance</b> footprint. Aeroplan points can book flights on United, Lufthansa, Swiss, and other partners, making it an excellent choice if you want to travel internationally. With a modest <b>$95</b> annual fee, it’s not as premium as some top-tier airline cards, but it offers a strong everyday earning structure (like 3x on groceries or dining + Air Canada purchases). There’s also a <b>Global Entry</b> or <b>TSA PreCheck®</b> credit, typically found in premium cards, giving more bang for your buck. For 2025, if you’re eyeing Air Canada or Star Alliance flights, it’s worth considering over other mid-tier airline products." }}></p>
            </section>

            {/* Section 4: Earning Points in Detail */}
            <section id="section-4" className={styles.reviewSection}>
                 <h2 dangerouslySetInnerHTML={{ __html: "Earning Points &amp; Everyday Spending"}}></h2>
                <p>
                    Typically, you get:
                </p>
                <ul className={styles.featureList}>
                    <li><strong>3x points</strong> on Air Canada purchases (including ancillaries) and possibly certain everyday categories like groceries/dining.</li>
                    <li><strong>1x point</strong> on everything else.</li>
                </ul>
                 {/* Using dangerouslySetInnerHTML for &amp; */}
                <p dangerouslySetInnerHTML={{ __html: "Because the exact categories can shift or expand—some versions also give 2x on travel— always confirm the current T&amp;Cs for 2025. If you frequently buy groceries or dine out, you can accumulate Aeroplan points quickly for future flights. For better daily multipliers (like 4x or 5x on groceries), you might pair this with a general card. But 3x on groceries/dining plus 3x on Air Canada is quite solid for a modest annual fee card."}}></p>
            </section>

             {/* Section 5: Redeeming Aeroplan Points */}
             <section id="section-5" className={styles.reviewSection}>
                <h2>Redeeming Aeroplan Points</h2>
                <p>
                    Aeroplan is known for its <b>flexibility</b> and wide partner network
                    (all Star Alliance plus some non-alliance partners).
                    You can redeem for economy, business, or first class seats globally.
                    Air Canada uses a more dynamic pricing approach for its own flights,
                    but partner awards often have a zone/distance-based chart
                    leading to sweet spots (like certain flights on Lufthansa or Swiss).
                    You might also see the “Stopovers for 5k points” policy
                    allowing creative routings.
                    If you want to explore Europe or Asia with a multi-city itinerary,
                    Aeroplan can be extremely valuable.
                    Factor in no or reduced surcharges on certain carriers
                    to maximize your points’ worth.
                </p>
            </section>

             {/* Section 6: Travel & Airline Perks */}
             <section id="section-6" className={styles.reviewSection}>
                <h2 dangerouslySetInnerHTML={{ __html: "Travel &amp; Airline Perks" }}></h2>
                <ul className={styles.featureList}>
                    <li><strong>1st Checked Bag Free:</strong>
                    Typically covers the cardholder on Air Canada flights (some disclaimers apply if you have multiple travelers).</li>
                    {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{ __html: "<strong>Global Entry/TSA PreCheck®:</strong> Up to $100 statement credit every 4 years—uncommon in a mid-range card."}}></li>
                    {/* Using dangerouslySetInnerHTML for ® &amp; */}
                    <li dangerouslySetInnerHTML={{ __html: "<strong>Preferred Pricing &amp; Priority Perks:</strong> If you have or aim for certain Aeroplan Elite Tiers, having this card might unlock extra seat selection or priority check-in. Always confirm your specific tier."}}></li>
                    <li><strong>Points Transfer Partnerships:</strong>
                    If you hold Ultimate Rewards, Amex Membership Rewards, etc.,
                    you might combine to top up your Aeroplan balance.
                    The card synergy can help if you funnel multiple sources into one pot.</li>
                </ul>
                <p>
                    A big highlight is the synergy with Aeroplan Elite Status,
                    where card spend can contribute or accelerate your progress,
                    making your travels even more rewarding globally across Star Alliance.
                </p>
            </section>

            {/* Section 7: No Foreign Transaction Fee & Global Coverage */}
             <section id="section-7" className={styles.reviewSection}>
                <h2 dangerouslySetInnerHTML={{ __html: "No Foreign Transaction Fee &amp; Global Coverage"}}></h2>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{ __html: "Because it’s a Visa from Chase, you get <b>no FTF</b> and widespread global acceptance. This is crucial if you’re traveling internationally (like to Canada, Europe, or Asia) to book Star Alliance flights or pay for local expenses. If you pair it with the <b>Global Entry</b> credit, your international airport arrivals are smoother. Also, if you route on Air Canada to destinations in Europe or Asia, you’ll appreciate no extra fees for overseas spend."}}></p>
            </section>

            {/* Section 8: Annual Fee & Welcome Bonus */}
             <section id="section-8" className={styles.reviewSection}>
                <h2 dangerouslySetInnerHTML={{ __html: "Annual Fee &amp; Welcome Bonus" }}></h2>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{ __html: "The annual fee stands at <b>$95</b>. The sign-up bonus can be <b>60k–100k points</b> after a certain spend, often $2,000–$4,000 in 3 months. That’s quite appealing if you value Aeroplan points at ~1.5–2.0 cents each (especially for premium cabins or partner flights). Sometimes, promotions also include a statement credit or additional flight perks. For many, the welcome bonus + 3x categories can quickly net enough points for a transatlantic or transpacific flight if you strategize well."}}></p>
            </section>

            {/* Section 9: 2025 Updates & Potential Changes */}
             <section id="section-9" className={styles.reviewSection}>
                <h2 dangerouslySetInnerHTML={{ __html: "2025 Updates &amp; Potential Changes"}}></h2>
                <ol className={styles.numberedList}>
                    <li><strong>Elite Status Earning Shifts:</strong>
                    Air Canada might update how card spend translates to Elite Status (say, 1 point for each $5k).
                    Keep an eye on official announcements.</li>
                    <li><strong>Expanded or Rotated 3x Categories:</strong>
                    Chase might tweak them. Possibly adding streaming or transit,
                    or might remove a less-used category.</li>
                    <li><strong>Partner Award Chart Adjustments:</strong>
                    Aeroplan could change award rates for Star Alliance partners,
                    affecting redemption sweet spots in 2025.
                    Keep updated on official Aeroplan communications.</li>
                    <li><strong>Potential Extra Perks:</strong>
                    Some rumors about a Maple Leaf Lounge pass or partial lounge discount
                    for cardholders, but nothing is guaranteed.
                    Watch for official releases if that becomes a perk.</li>
                </ol>
                <p>
                    Always confirm the official terms from Chase/Air Canada
                    if any updates occur that might reshape your usage or redemption approach.
                </p>
            </section>

             {/* Section 10: Real-Life Example Table */}
             <section id="section-10" className={styles.reviewSection}>
                <h2>Real-Life Example: Annual Value</h2>
                <p>
                    Suppose you spend $3,000 on Air Canada flights annually
                    and $5,000 on groceries and dining (both at 3x),
                    plus $7,000 on everything else. Let’s see your approximate yearly haul:
                </p>
                 <div className={styles.tableContainer}>
                     <table className={styles.statsTable}>
                        <thead>
                            <tr>
                                <th>Spend Category</th>
                                <th>Annual Spend</th>
                                <th>Points per $</th>
                                <th>Total Points</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td data-label="Spend Category">Air Canada Flights</td>
                                <td data-label="Annual Spend">$3,000</td>
                                <td data-label="Points per $">3x</td>
                                <td data-label="Total Points">9,000</td>
                            </tr>
                            <tr>
                                <td data-label="Spend Category">Groceries/Dining</td>
                                <td data-label="Annual Spend">$5,000</td>
                                <td data-label="Points per $">3x</td>
                                <td data-label="Total Points">15,000</td>
                            </tr>
                            <tr>
                                <td data-label="Spend Category">Other Spend</td>
                                <td data-label="Annual Spend">$7,000</td>
                                <td data-label="Points per $">1x</td>
                                <td data-label="Total Points">7,000</td>
                            </tr>
                            <tr style={{fontWeight: 'bold', borderTop: '2px solid #dee2e6'}}>
                                <th data-label="Spend Category">Total</th>
                                <th data-label="Annual Spend">$15,000</th>
                                <th data-label="Points per $">—</th>
                                <th data-label="Total Points">31,000</th>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p>
                    <b>31,000</b> Aeroplan points a year from normal spend
                    can be quite valuable—worth easily $400+ in economy flights
                    or even more in partner business class.
                    If you also add a 60k sign-up bonus,
                    you’re close to 91k total in year one,
                    enough for a round-trip to Europe in economy
                    or a one-way in business if you find a good partner redemption.
                    That can overshadow the $95 annual fee,
                    especially if you also use the bag perk or the Global Entry credit.
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
                                <th>Highlights</th>
                                <th>Why Choose</th>
                            </tr>
                        </thead>
                        <tbody>
                             {/* Using dangerouslySetInnerHTML for ® */}
                            <tr dangerouslySetInnerHTML={{__html:'<td data-label="Card">Aeroplan® Credit Card</td><td data-label="Annual Fee">$95</td><td data-label="Highlights">3x on Air Canada, groceries/dining; free bag, Global Entry credit</td><td data-label="Why Choose">Ideal for Air Canada/Star Alliance fans</td>'}}></tr>
                             {/* Using dangerouslySetInnerHTML for ℠ */}
                            <tr dangerouslySetInnerHTML={{__html:'<td data-label="Card">United℠ Explorer Card</td><td data-label="Annual Fee">$0 intro, then $95</td><td data-label="Highlights">2x on United, dining, hotels; 2 lounge passes, free bag</td><td data-label="Why Choose">Better if you prefer United’s route network over Air Canada’s</td>'}}></tr>
                             {/* Using dangerouslySetInnerHTML for ® */}
                            <tr dangerouslySetInnerHTML={{__html:'<td data-label="Card">Delta SkyMiles® Gold Amex</td><td data-label="Annual Fee">$0 intro, then ~$99</td><td data-label="Highlights">Free bag, priority boarding on Delta</td><td data-label="Why Choose">Focus on Delta flyers over Star Alliance usage</td>'}}></tr>
                             {/* Using dangerouslySetInnerHTML for ® */}
                            <tr dangerouslySetInnerHTML={{__html:'<td data-label="Card">Chase Sapphire Preferred®</td><td data-label="Annual Fee">$95</td><td data-label="Highlights">Flexible UR points, 2x–3x on travel/dining, transfer to Aeroplan or other partners</td><td data-label="Why Choose">Versatile if you want to move points across multiple airline/hotel programs</td>'}}></tr>
                        </tbody>
                    </table>
                </div>
                <p>
                    The <b>Aeroplan</b> card stands out if you specifically want
                    direct synergy with Air Canada,
                    especially for <b>Star Alliance</b> flights.
                    If your main hub is Chicago or Newark (heavy United presence)
                    and you prefer United, that might overshadow the Aeroplan approach.
                    However, for those wanting to explore global partner awards
                    with a strong everyday earner at $95,
                    the Aeroplan card is quite compelling.
                </p>
            </section>

            {/* Section 12: Synergy with Other Chase or Travel Cards */}
            <section id="section-12" className={styles.reviewSection}>
                <h2>Pairing with Other Cards</h2>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{ __html:"If you already have a <b>Chase Sapphire Preferred®</b> or <b>Reserve®</b>, you can transfer Ultimate Rewards → Aeroplan to top up your account. However, having the Aeroplan card itself can provide the free bag perk, possibly lounge or Maple Leaf lounge discounts for certain Elite Tiers, and direct advanced perks like Elite Status boost. Meanwhile, you might prefer using a different card for dining if you can get 4x or 5x, though 3x is still respectable. Because Aeroplan is also a partner of Amex Membership Rewards, Capital One, etc., some travelers might skip the co-branded card. But the annual fee + Global Entry credit + free bag can easily pay for itself if you fly Air Canada even once or twice."}}></p>
            </section>

             {/* Section 13: Aeroplan Elite Status Synergy */}
             <section id="section-13" className={styles.reviewSection}>
                <h2 dangerouslySetInnerHTML={{ __html:"Aeroplan Elite Status &amp; Card Benefits"}}></h2>
                <p>
                    Aeroplan’s Elite program (25K, 35K, 50K, 75K, Super Elite)
                    can be accelerated by holding the Aeroplan card.
                    For instance, you might earn “Status Qualifying Miles”
                    or “Status Qualifying Segments” from certain spend thresholds.
                    Re-check 2025 rules for how many $ or points you need
                    for each tier.
                    Some mid-tier statuses provide Maple Leaf Lounge access,
                    free upgrades on Air Canada, or Star Alliance Silver/Gold privileges.
                    Combining flight activity plus card spend
                    might be your best route to achieving or sustaining
                    mid-level or higher Aeroplan Elite Status.
                </p>
            </section>

            {/* Section 14: Potential Downsides */}
            <section id="section-14" className={styles.reviewSection}>
                 <h2>Potential Downsides</h2>
                <ul className={styles.featureList}>
                    <li><strong>$95 Annual Fee:</strong>
                    Not huge, but some airline co-brands do $0 intro or $69–$79 fees.
                    The offset depends on your usage of bag perks, etc.</li>
                    <li><strong>Limited In-Canada Perks:</strong>
                    Some might expect Maple Leaf lounge passes or major baggage benefits for companions.
                    You only get 1st bag free for the cardholder typically (verify for 2025—some might extend to companions if same reservation).</li>
                    <li><strong>No Broad Lounge Access:</strong>
                    You get a Global Entry credit but no Priority Pass or Maple Leaf lounge passes by default.
                    Elite status or separate membership might still be needed for lounge usage.</li>
                    <li><strong>Dynamic Pricing on AC Metal:</strong>
                    Aeroplan for Air Canada flights is subject to dynamic award costs
                    that can be high during peak times,
                    though partner flights might remain more consistent.</li>
                </ul>
            </section>

             {/* Section 15: Advanced Usage Tips */}
             <section id="section-15" className={styles.reviewSection}>
                <h2>Advanced Usage Tips</h2>
                <ol className={styles.numberedList}>
                    <li><strong>Leverage 3x on Groceries/Dining (If Offered):</strong>
                    Funnel big grocery/dining bills here if you want to pad your Aeroplan points quickly.</li>
                    <li><strong>Combine with UR Transfers (If You Have Sapphire):</strong>
                    Move UR → Aeroplan for large award bookings,
                    then top up with card spend as needed.
                    This synergy can yield huge redemption opportunities.</li>
                    <li><strong>Aeroplan Family Sharing:</strong>
                    If you have Family Sharing enabled,
                    multiple members can pool points for bigger redemptions—
                    ensures no small leftover accounts hamper your flight bookings.</li>
                    <li><strong>Check Partner Sweet Spots:</strong>
                    Airlines like Turkish, Lufthansa, or EVA often have valuable business class redemptions
                    via Aeroplan.
                    Plan around these for maximum cpm (cents per mile) value.</li>
                    <li><strong>Track Elite Status Spend Thresholds:</strong>
                    If the card offers a certain number of eUpgrade credits or SQM for each $5k or $10k in spend,
                    plan to route big expenses here for a strong shot at 25K or 35K status each year.</li>
                </ol>
            </section>

            {/* Section 16: Another Real-Life Scenario */}
            <section id="section-16" className={styles.reviewSection}>
                <h2 dangerouslySetInnerHTML={{ __html:"Another Example: Earning &amp; Redeeming for Europe"}}></h2>
                <p>
                    Suppose you put $2,000 in Air Canada flights,
                    $4,000 in groceries/dining,
                    and $4,000 in general spend yearly.
                    That yields:
                </p>
                 <div className={styles.tableContainer}>
                    <table className={styles.statsTable}>
                        <thead>
                            <tr>
                                <th>Spend Category</th>
                                <th>Annual Spend</th>
                                <th>Points per $</th>
                                <th>Total Points</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td data-label="Spend Category">Air Canada</td>
                                <td data-label="Annual Spend">$2,000</td>
                                <td data-label="Points per $">3x</td>
                                <td data-label="Total Points">6,000</td>
                            </tr>
                            <tr>
                                <td data-label="Spend Category">Groceries/Dining</td>
                                <td data-label="Annual Spend">$4,000</td>
                                <td data-label="Points per $">3x</td>
                                <td data-label="Total Points">12,000</td>
                            </tr>
                            <tr>
                                <td data-label="Spend Category">Others</td>
                                <td data-label="Annual Spend">$4,000</td>
                                <td data-label="Points per $">1x</td>
                                <td data-label="Total Points">4,000</td>
                            </tr>
                            <tr style={{fontWeight: 'bold', borderTop: '2px solid #dee2e6'}}>
                                <th data-label="Spend Category">Total</th>
                                <th data-label="Annual Spend">$10,000</th>
                                <th data-label="Points per $">—</th>
                                <th data-label="Total Points">22,000</th>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p>
                    That’s 22,000 Aeroplan points purely from spend.
                    Add a sign-up bonus (let’s say 60k).
                    Now you’re at 82k total—often enough for a round-trip
                    from North America to Europe in economy on Air Canada or a Star Alliance partner
                    if you find decent availability.
                    That one redemption can easily beat the $95 AF,
                    especially if you factor in the free first checked bag
                    (worth $60–$70 round trip to Europe).
                </p>
            </section>

            {/* Section 17: Who Should Get the Card? */}
            <section id="section-17" className={styles.reviewSection}>
                <h2 dangerouslySetInnerHTML={{ __html:"Who Should Get the Aeroplan® Credit Card?"}}></h2>
                 <div className={styles.prosCons}>
                    <div className={styles.pros}>
                        <h3>Ideal For:</h3>
                        <ul className={styles.featureList}>
                             {/* Using dangerouslySetInnerHTML for ® */}
                            <li dangerouslySetInnerHTML={{__html:"<strong>Frequent Air Canada/Star Alliance Flyers:</strong> If you love AC’s global routes or need partner flights frequently"}}></li>
                             {/* Using dangerouslySetInnerHTML for ® */}
                            <li dangerouslySetInnerHTML={{__html:"<strong>Moderate Annual Fee Seekers:</strong> $95 is a sweet spot for an airline card with a Global Entry credit and nice 3x categories"}}></li>
                            <li><strong>Aeroplan Elite Aspirants:</strong>
                            Large card spend can expedite your path to Elite 25K or higher</li>
                            <li><strong>Global Redemption Enthusiasts:</strong>
                            Aeroplan’s wide Star Alliance and partner network
                            ensures broad usage, including stopovers in premium cabins</li>
                        </ul>
                    </div>
                    <div className={styles.cons}>
                        <h3>No, If You:</h3>
                        <ul className={styles.featureList}>
                            <li>Don’t need or want to fly Air Canada or Star Alliance routes</li>
                            <li>Want a cheaper card (some airline cards have $0 intro or $69 fees, albeit fewer perks)</li>
                             {/* Using dangerouslySetInnerHTML for ® */}
                            <li dangerouslySetInnerHTML={{__html:"Prefer guaranteed lounge access or top-tier travel insurance (this card’s coverage is decent but not premium-lounge level)"}}></li>
                            <li>Live in a region with minimal AC or Star Alliance flights, making it hard to use the perks</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Section 18: Disclaimers & Fine Print */}
            <section id="section-18" className={styles.reviewSection}>
                 <h2 dangerouslySetInnerHTML={{ __html: "Disclaimers &amp; Fine Print"}}></h2>
                 {/* Using dangerouslySetInnerHTML for ® &amp; */}
                <p dangerouslySetInnerHTML={{ __html:"All details (APR, sign-up bonus, earning categories) can change. Verify official info from Chase or Air Canada for the current T&amp;Cs. The card might require good/excellent credit. The free bag typically only covers the cardholder on AC flights if the card is used to purchase the ticket, or if your Aeroplan number is attached— disclaimers can shift each year. Global Entry/TSA PreCheck® credit is typically up to $100 every 4 years— if you have it from another card, you may not need duplication. If you revolve a balance, interest charges overshadow flight savings. Also confirm if transfer partner points count or not towards AC Elite. Terms for redemption or surcharges differ among partner airlines."}}></p>
            </section>

             {/* Section 19: Final Thoughts */}
             <section id="section-20" className={styles.reviewSection}>
                <h2 dangerouslySetInnerHTML={{ __html:"Final Thoughts: Is the Aeroplan® Credit Card Worth It?"}}></h2>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{ __html:"If you’re looking for a <b>moderate annual fee</b> airline card that unlocks <b>worldwide Star Alliance</b> flight possibilities, the <strong>Aeroplan® Credit Card</strong> is a top contender. Its 3x categories, synergy with Aeroplan Elite Status, and <b>Global Entry</b> credit outperform many $95-tier airline cards. Whether you occasionally fly Air Canada or frequently hop across continents, Aeroplan’s wide partner network can stretch your points for premium flight experiences. Just confirm your route priorities and redemption goals to ensure you use the card effectively. If you do, you’ll find the value easily surpasses the $95 AF via sign-up bonuses, free bag, or advanced redemptions that transform your travel in 2025 and beyond."}}></p>
                <h3>Disclaimer</h3>
                <p>
                    Card terms, sign-up bonuses, and redemption rates can change.
                    Always refer to official Chase/Aeroplan websites for up-to-date details.
                    We may earn affiliate commissions from certain links,
                    but editorial opinions remain our own.
                    Example values or redemption options are illustrative;
                    your actual usage depends on route availability, partner surcharges, etc.
                    If you carry a balance, interest charges likely negate any flight savings
                    or sign-up benefits from the card.
                </p>
            </section>

             {/* Section 20: E-A-T Statement */}
             <section id="section-19" className={`${styles.reviewSection} ${styles.eatSection}`}> {/* Combined classes */}
                 <h2 dangerouslySetInnerHTML={{ __html: "Our Commitment to E-A-T: Expertise, Authority &amp; Trustworthiness"}}></h2>
                 {/* Using E-A-T text adapted for Aeroplan Card */}
                <p>
                    At <strong>TravelCardInsider</strong>,
                    we prioritize reliable, well-researched reviews
                    aligned with Google’s E-A-T framework:
                </p>
                <h3>1. Expertise</h3>
                <ul className={styles.featureList}>
                    {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Frequent AC Flyers:</strong> Our reviewers have tested Aeroplan redemptions, Star Alliance partner bookings, and tracked how the card’s spend influences Elite progress."}}></li>
                     {/* Using dangerouslySetInnerHTML for &amp; */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Ongoing Verification:</strong> We watch for changes in Aeroplan’s partner charts, T&amp;Cs, or new promotions for 2025 and beyond."}}></li>
                    <li><strong>Real-World Testing:</strong>
                    We verify bag perks, use the card overseas,
                    and check the statement for correct multipliers
                    to ensure accurate advice.</li>
                </ul>
                <h3>2. Authority</h3>
                <ul className={styles.featureList}>
                    <li><strong>Detailed Reviews:</strong>
                    This ~2,000-word coverage highlights from sign-up bonus
                    to advanced partner redemptions—ensuring thoroughness.</li>
                    <li><strong>Industry Mentions:</strong>
                    We’re frequently quoted by recognized travel/finance media
                    for unbiased airline card analysis.</li>
                    <li><strong>Transparent Disclosure:</strong>
                    If affiliate links exist, we label them
                    so you know how we’re funded without editorial compromise.</li>
                </ul>
                <h3>3. Trustworthiness</h3>
                <ul className={styles.featureList}>
                    <li><strong>Independent Rating:</strong>
                    Advertisers do not control our star rating or final verdict.</li>
                    <li><strong>Reader Interaction:</strong>
                    We welcome user experiences in the comments,
                    refining our content if new data emerges.</li>
                    <li><strong>Frequent Updates:</strong>
                    If sign-up bonuses or terms shift, we revise promptly
                    for factual accuracy.</li>
                     {/* Using dangerouslySetInnerHTML for &amp; */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Privacy &amp; Security:</strong> As per our <a href='/privacy-policy'>Privacy Policy</a>, we safeguard user data from any subscriptions or feedback forms."}}></li> {/* Used relative link */}
                </ul>
                <p dangerouslySetInnerHTML={{ __html: "Following E-A-T principles, we aim to provide a trustworthy, thorough evaluation of the Aeroplan® Credit Card for 2025 so you can decide if it meets your global travel needs." }}></p>
            </section>

           

          </article>
        </div> {/* Close reviewContainer */}
      </main>

      <Footer />
    </>
  );
}

export default AeroplanCardReviewPage;