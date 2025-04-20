// Example Path: pages/reviews/jetblue-plus.js
// Or: pages/reviews/[slug].js (if using dynamic routing with 'jetblue-plus' as slug)

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
  cardName: 'JetBlue Plus Card',
  title: 'JetBlue Plus Card – In-Depth 2025 Review',
  description: 'A thorough 2000-word review of the JetBlue Plus Card by Barclays, covering airline perks, TrueBlue rewards, 2025 updates, pros, cons, disclaimers, and advanced tips for JetBlue flyers.',
  keywords: 'JetBlue, JetBlue Plus, Barclays, airline credit card, TrueBlue points, 2025 updates',
  author: 'TravelCardInsider', // *** REPLACE with your actual author/site name ***
  imageUrl: '/JBE_card_Plus_WE_Angle_359x246_L.png', // *** VERIFY PATH in /public ***
  ratingValue: 7.8, // From JetBlue Plus HTML
  applyLink: 'https://www.jetblue.com/trueblue/credit-cards/jetblue-card-comparison', // *** REPLACE with actual JetBlue Plus APPLY URL ***
  ratesLink: 'https://www.barclaycardus.com/applycontent/TnCs.jsp?tc46682', // *** VERIFY URL - seems generic ***
  // Image dimensions (MUST BE ACCURATE for next/image) - Guessed from filename
  imageWidth: 359, // *** REPLACE with actual image width ***
  imageHeight: 246, // *** REPLACE with actual image height ***
};

// --- Rating Tooltip Content (Customize if needed for JetBlue Plus) ---
const ratingCriteria = [ // *** VERIFY/CUSTOMIZE these criteria for JetBlue Plus Rating ***
    'JetBlue Points Earning (6x/2x)',
    'Free Checked Bag (Primary)',
    'In-Flight Savings (50%)',
    'Welcome Bonus Value',
    'Annual Fee ($99)',
];

function JetBluePlusReviewPage() {
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
  // !!! VERIFY all URLs, counts, and details FOR JETBLUE PLUS !!!
  const siteUrl = "https://www.travelcardinsider.com"; // *** REPLACE with your actual site URL ***
  const pageUrl = `${siteUrl}/reviews/jetblue-plus`; // *** REPLACE with your actual page URL ***
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "JetBlue Plus Card",
    "image": `${siteUrl}${reviewData.imageUrl}`, // *** Assuming imageUrl starts with / ***
    "description": "The JetBlue Plus Card offers elevated TrueBlue points earning, in-flight discounts, a free checked bag, and other travel perks for frequent JetBlue flyers.", // Adjusted description
    "brand": {
      "@type": "Brand",
      "name": "Barclays" // Issuer
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
      "ratingCount": 490, // *** REPLACE with actual or estimated count ***
      "reviewCount": 490  // *** REPLACE with actual or estimated count ***
    },
    "offers": {
      "@type": "Offer",
      "url": reviewData.applyLink.startsWith('http') ? reviewData.applyLink : `${siteUrl}${reviewData.applyLink}`, // *** Ensure full APPLY URL ***
      "priceCurrency": "USD",
      "price": "99", // Annual Fee for JetBlue Plus
      "availability": "https://schema.org/InStock",
      "itemCondition": "https://schema.org/NewCondition"
    }
    // Consider adding "provider": { "@type": "Organization", "name": "JetBlue" }
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
              <h1>{reviewData.title}</h1>

              {/* Section 1 Content (Part of Header Structure in Template) */}
              <section id="section-1">
                 {/* Using dangerouslySetInnerHTML for ® */}
                <div className={styles.intro}>
                  <p dangerouslySetInnerHTML={{ __html:"The <strong>JetBlue Plus Card</strong> by Barclays is a favorite among JetBlue loyalists, thanks to its strong earnings on JetBlue purchases, free checked bag, in-flight savings, and potential Mosaic® status boosts. At a <strong>$99 annual fee</strong>, it’s a mid-tier airline card offering decent everyday categories (like groceries and dining) to accumulate TrueBlue points faster."}}></p>
                </div>

                {/* Image Container */}
                <div className={styles.cardImageContainer}>
                  {/* Corrected class name */}
                   <Image
                     src={reviewData.imageUrl}
                     alt={"JetBlue Plus Card"}
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
                     {/* Using dangerouslySetInnerHTML for &amp; */}
                    <i dangerouslySetInnerHTML={{__html:"A strong pick for JetBlue loyalists, featuring free bags &amp; good earning rates."}}></i>
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
                             {/* Using dangerouslySetInnerHTML for ® &amp; */}
                            <tr dangerouslySetInnerHTML={{__html:'<td data-label="Feature">Annual Fee</td><td data-label="Details">$99</td>'}}></tr>
                            <tr dangerouslySetInnerHTML={{__html:'<td data-label="Feature">Welcome Bonus</td><td data-label="Details">Often 40k–60k points after $1,000–$2,000 in first 90 days (subject to change)</td>'}}></tr>
                            <tr dangerouslySetInnerHTML={{__html:'<td data-label="Feature">Earning Rates</td><td data-label="Details">6x on JetBlue, 2x at restaurants/groceries, 1x on everything else</td>'}}></tr>
                            <tr dangerouslySetInnerHTML={{__html:'<td data-label="Feature">Free Checked Bag</td><td data-label="Details">For primary cardmember only (some exceptions might apply, confirm 2025 rules)</td>'}}></tr>
                            <tr dangerouslySetInnerHTML={{__html:'<td data-label="Feature">In-Flight Savings</td><td data-label="Details">50% back on eligible inflight purchases (food/drinks)</td>'}}></tr>
                            <tr dangerouslySetInnerHTML={{__html:'<td data-label="Feature">Foreign Transaction Fee</td><td data-label="Details">None</td>'}}></tr>
                            <tr dangerouslySetInnerHTML={{__html:'<td data-label="Feature">Mosaic® Status Aid</td><td data-label="Details">Card spend can help you reach JetBlue Mosaic status (details vary each year)</td>'}}></tr>
                            <tr dangerouslySetInnerHTML={{__html:'<td data-label="Feature">Travel Insurance</td><td data-label="Details">Primary car rental CDW abroad, baggage delay coverage, more (check exact terms)</td>'}}></tr>
                        </tbody>
                    </table>
                </div>
            </section>

             {/* CTA Section */}
             <section id="cta" className={styles.ctaSection}>
                <h2>Get the <b>JetBlue Plus Card</b> Today!</h2>
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
                <p dangerouslySetInnerHTML={{ __html:"The <b>JetBlue Plus Card</b> is an airline co-branded card from Barclays that offers <b>6x points</b> on JetBlue purchases, plus daily-friendly categories like <b>2x</b> at groceries and restaurants. The $99 annual fee is on par with other mid-tier airline cards. While the free checked bag only covers the <b>primary cardholder</b> (not companions by default), you do get a robust <b>in-flight 50%</b> discount, which can add up for snack/beer/wifi on JetBlue’s many route expansions. Fans of JetBlue’s comfortable seats, free wifi, and good customer service might see this card as the easiest way to accelerate TrueBlue points and possibly nudge you closer to Mosaic® status."}}></p>
            </section>

            {/* Section 4: Earning Points & Everyday Spending */}
            <section id="section-4" className={styles.reviewSection}>
                 <h2 dangerouslySetInnerHTML={{ __html:"Earning Points &amp; Everyday Spending"}}></h2>
                <p>
                    Typically, you earn:
                </p>
                <ul className={styles.featureList}>
                    <li><strong>6x points</strong> on JetBlue purchases</li>
                    <li><strong>2x points</strong> at restaurants and grocery stores</li>
                    <li><strong>1x point</strong> on all other purchases</li>
                </ul>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{ __html:"The <b>6x</b> is among the highest airline multipliers for flights on your own carrier. Meanwhile, the <b>2x</b> categories let you accumulate more TrueBlue points from everyday errands. If you spend heavily on groceries or dining, that’s a decent chunk of extra points each month. This can offset the $99 annual fee if you value TrueBlue at ~1.3–1.5 cents per point. The card also provides <b>10% points rebate</b> when you redeem for JetBlue award flights (in some older versions; confirm for 2025), effectively lowering your net redemption cost."}}></p>
            </section>

             {/* Section 5: Redeeming TrueBlue Points */}
             <section id="section-5" className={styles.reviewSection}>
                <h2>Redeeming Your TrueBlue Points</h2>
                <p>
                    JetBlue uses a dynamic award pricing system
                    where the points required generally relate
                    to the cash cost of the ticket.
                    Typically, you might see values around <b>1.2–1.5 cents</b>
                    per point for economy fares.
                    Mint (JetBlue’s premium cabin) redemptions can yield
                    higher or lower values depending on route/demand.
                    Since JetBlue mostly focuses on the Americas,
                    your redemption options are somewhat region-limited,
                    though new expansions to London have introduced
                    more long-haul opportunities.
                    Also note that you can use points for JetBlue Vacations
                    or for partner airlines (some limited partner award usage).
                </p>
                <p>
                    If you have older perks like the <b>10% redemption rebate</b>
                    (still listed for some cardmembers;
                    verify if it remains in 2025),
                    that effectively makes your points go further.
                    For example, a 10k-point flight might only cost 9k net
                    after the 1k rebate.
                    That can push your redemption value to a comfortable position
                    above 1.5 cents per point in many scenarios.
                </p>
            </section>

            {/* Section 6: Travel & Airline Perks */}
            <section id="section-6" className={styles.reviewSection}>
                <h2 dangerouslySetInnerHTML={{ __html:"Travel &amp; Airline Perks"}}></h2>
                <ul className={styles.featureList}>
                    <li><strong>Free Checked Bag:</strong>
                    Only for the primary cardmember on JetBlue flights
                    (not for companions by default;
                    always confirm the rules for 2025
                    because some promotions might come or go).</li>
                    <li><strong>50% In-Flight Savings:</strong>
                    On eligible purchases like cocktails, meals,
                    wifi on JetBlue flights.
                    You’ll see a statement credit after you pay with your card.</li>
                    <li><strong>Group Boarding Priority:</strong>
                    Typically, you can board in an earlier group
                    than general boarding,
                    ensuring overhead bin space for your carry-on.</li>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Mosaic Qualifying Spend:</strong> Some large spend can help you progress toward Mosaic® status. Check current thresholds each year—sometimes $50k or more might net partial status benefits or additional perks."}}></li>
                </ul>
                <p>
                    These benefits are especially relevant if you frequently fly JetBlue
                    on cross-country or Caribbean routes,
                    where in-flight snacks, wifi,
                    or bag checks might be standard in your travel routine.
                </p>
            </section>

             {/* Section 7: No Foreign Transaction Fee & Global Usage */}
             <section id="section-7" className={styles.reviewSection}>
                 <h2 dangerouslySetInnerHTML={{ __html:"No Foreign Transaction Fee &amp; Global Travel"}}></h2> {/* Adjusted heading */}
                <p>
                    The JetBlue Plus Card has <b>no FTF</b>,
                    so you can swipe it abroad
                    without incurring 3% surcharges.
                    JetBlue primarily focuses on North American/Caribbean routes,
                    plus some limited transatlantic flights (e.g., London).
                    But if you do go overseas,
                    using this card won’t ding you for foreign currency purchases.
                    As a Mastercard, acceptance is wide,
                    making it a good fallback for global trips
                    (though you might prefer a general travel card
                    for broader lounge or insurance perks).
                </p>
            </section>

            {/* Section 8: Annual Fee & Welcome Bonus */}
             <section id="section-8" className={styles.reviewSection}>
                <h2 dangerouslySetInnerHTML={{ __html:"Annual Fee &amp; Welcome Bonus"}}></h2>
                <p>
                    The card charges a <b>$99</b> annual fee,
                    typically not waived the first year.
                    However, sign-up bonuses can range from <b>40k</b> to <b>60k</b>
                    (or more) after a modest spend,
                    plus sometimes a $100 statement credit or partial Mosaic benefit.
                    These bonus points can easily be worth $500+
                    if you redeem for high-value flights.
                    That’s a strong offset to your first-year fee.
                    If you keep the card beyond year one,
                    the 6x on JetBlue flights plus in-flight savings
                    might justify the cost if you do a few JetBlue trips annually.
                </p>
            </section>

            {/* Section 9: 2025 Updates & Potential Changes */}
             <section id="section-9" className={styles.reviewSection}>
                <h2 dangerouslySetInnerHTML={{ __html:"2025 Updates &amp; Potential Changes"}}></h2>
                <ol className={styles.numberedList}>
                    <li><strong>Possible Companion Perks:</strong>
                    There’s chatter that JetBlue may introduce a companion pass style perk
                    or partial discount for cardholders, but nothing confirmed.
                    Keep an eye on official announcements.</li>
                    <li><strong>Mosaic Earning Tweaks:</strong>
                    JetBlue may adjust how credit card spend counts toward Mosaic.
                    For instance, a certain high spend might directly grant partial Mosaic or extra perks.</li>
                    <li><strong>New International Routes:</strong>
                    As JetBlue expands transatlantic flights,
                    the value of 6x on those flights might become more appealing,
                    especially if competitor pricing is high.</li>
                     {/* Using dangerouslySetInnerHTML for &amp; */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Inflight Savings Rate Changes:</strong> The 50% discount might shift to 30% or 40% or become a statement credit. Always recheck the T&amp;Cs each year."}}></li>
                </ol>
                <p>
                    These are speculations; the airline/issuer can alter card benefits.
                    Always check official sources for the latest card details
                    or new JetBlue routes that might boost your card usage.
                </p>
            </section>

             {/* Section 10: Real-Life Example Table */}
             <section id="section-10" className={styles.reviewSection}>
                <h2>Real-Life Example: How Much Can You Save?</h2>
                <p>
                    Suppose you take 3 JetBlue round trips a year,
                    each costing ~$400. You check a bag each time,
                    buy $20 of snacks/wifi onboard per flight,
                    and spend monthly on groceries/dining.
                    Let’s see an approximate breakdown:
                </p>
                 <div className={styles.tableContainer}>
                    <table className={styles.statsTable}>
                        <thead>
                            <tr>
                                <th>Benefit/Spend</th>
                                <th>Annual Count/Amount</th>
                                <th>Cost/Value w/o Card</th>
                                <th>Value w/ Card</th>
                                <th>Potential Savings</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td data-label="Benefit/Spend">Free Checked Bag</td>
                                <td data-label="Annual Count/Amount">3 round trips x $35 each way = 6 bag fees total</td>
                                <td data-label="Cost/Value w/o Card">$210</td>
                                <td data-label="Value w/ Card">$0 for primary cardholder’s first bag</td>
                                <td data-label="Potential Savings">$210</td>
                            </tr>
                            <tr>
                                <td data-label="Benefit/Spend">In-Flight Purchases</td>
                                <td data-label="Annual Count/Amount">3 trips x $20 = $60 total</td>
                                <td data-label="Cost/Value w/o Card">$60</td>
                                <td data-label="Value w/ Card">50% off → $30 net cost</td>
                                <td data-label="Potential Savings">$30</td>
                            </tr>
                            <tr>
                                <td data-label="Benefit/Spend">Points Earned on Flights</td>
                                <td data-label="Annual Count/Amount">$1,200 total flights ($400x3)</td>
                                <td data-label="Cost/Value w/o Card">N/A (only ~6 TrueBlue points/$ if purchased direct at JetBlue.com w/o card boost)</td>
                                <td data-label="Value w/ Card">6x from card = 7,200 points (worth ~$100)</td>
                                <td data-label="Potential Savings">Miles-based advantage: ~$100 in flight value (approx)</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p>
                    You might save around $340 in bag/in-flight costs,
                    plus you gain an extra $100 in points from flight spending.
                    That easily offsets the $99 AF if you repeat these flights yearly.
                    If you also put your grocery/dining spend on it (2x)
                    or big JetBlue flight purchases (6x),
                    you’ll accumulate more TrueBlue points for future award flights.
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
                                <th>Why Choose</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td data-label="Card">JetBlue Plus Card</td>
                                <td data-label="Annual Fee">$99</td>
                                <td data-label="Key Perk">6x JetBlue, free bag, 50% inflight discount</td>
                                <td data-label="Why Choose">Strong earner on JetBlue & decent daily categories</td>
                            </tr>
                             {/* Using dangerouslySetInnerHTML for ® */}
                            <tr dangerouslySetInnerHTML={{__html:'<td data-label="Card">Southwest Rapid Rewards® Premier</td><td data-label="Annual Fee">$99</td><td data-label="Key Perk">2x Southwest, tier-qualifying points for Companion Pass chase</td><td data-label="Why Choose">Better if you prefer Southwest routes & 2 free checked bags anyway</td>'}}></tr>
                             {/* Using dangerouslySetInnerHTML for ® */}
                            <tr dangerouslySetInnerHTML={{__html:'<td data-label="Card">Delta SkyMiles® Gold Amex</td><td data-label="Annual Fee">$0 intro, then ~$99</td><td data-label="Key Perk">Free bag, priority boarding on Delta</td><td data-label="Why Choose">Better if you’re more Delta-oriented than JetBlue</td>'}}></tr>
                             {/* Using dangerouslySetInnerHTML for ® */}
                            <tr dangerouslySetInnerHTML={{__html:'<td data-label="Card">Chase Sapphire Preferred®</td><td data-label="Annual Fee">$95</td><td data-label="Key Perk">Flexible UR points, 2x–3x on travel/dining, transfer to some airline partners</td><td data-label="Why Choose">Versatile if you want multiple airline options, not just JetBlue</td>'}}></tr>
                        </tbody>
                    </table>
                </div>
                <p>
                    The <b>JetBlue Plus</b> stands out for JetBlue enthusiasts
                    wanting robust flight earnings and inflight discounts.
                    If you prefer a bigger route map or no assigned seats approach (like Southwest),
                    or want more lounge perks,
                    you might pick another card.
                    But for East Coast or LA-based travelers who enjoy JetBlue’s comfort,
                    it’s a compelling option.
                </p>
            </section>

             {/* Section 12: Pairing with Other Cards */}
             <section id="section-12" className={styles.reviewSection}>
                <h2>Pairing JetBlue Plus with Other Cards</h2>
                <p>
                    If you want strong grocery or dining multipliers beyond 2x,
                    you might pair the JetBlue Plus with another card
                    that offers 3–4% on groceries or 3x–4x on restaurants.
                    Then, you’d use JetBlue Plus specifically for JetBlue flights
                    to ensure the free bag and 6x points, plus the 50% inflight discount.
                    You could also hold a premium travel card (like an Amex Platinum or Chase Sapphire Reserve)
                    for lounge networks or broader travel insurance coverage,
                    but still rely on JetBlue Plus for the airline-specific perks
                    and TrueBlue synergy.
                </p>
            </section>

            {/* Section 13: JetBlue Mosaic® Status & Card Synergy */}
             <section id="section-13" className={styles.reviewSection}>
                <h2 dangerouslySetInnerHTML={{ __html:"JetBlue Mosaic® Status & Card Synergy"}}></h2>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{ __html:"If you’re aiming for Mosaic® (JetBlue’s elite tier), you need a combination of flight segments or spend-based thresholds (these have changed over years). The <b>JetBlue Plus</b> can help: historically, spending $50k in a calendar year might directly earn you Mosaic or certain bonus points. For 2025, check if a portion of your card spend can convert to Mosaic-qualifying points or how many flight segments can be supplemented by card usage. Once you have Mosaic, you enjoy free change/cancellation on many fares, free first/bag, and even more inflight perks. The card helps complement that journey if you can put heavy spend on it."}}></p>
            </section>

             {/* Section 14: Potential Downsides */}
             <section id="section-14" className={styles.reviewSection}>
                <h2>Potential Downsides</h2>
                <ul className={styles.featureList}>
                    <li><strong>$99 Annual Fee:</strong>
                    Not waived the first year; you must offset it with free bag, inflight savings, or points.</li>
                    <li><strong>Free Bag for Primary Only:</strong>
                    Companions do not automatically get a free bag (unlike some airline cards that extend to companions).
                    If traveling as a couple/family, the bag perk is less powerful.</li>
                    <li><strong>Limited Route Network:</strong>
                    JetBlue is strong in the East Coast (especially NYC, Boston)
                    and expanding in LA, Florida, Caribbean, but if you’re in a region with minimal JetBlue presence,
                    you might not benefit as much.</li>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>In-Flight Savings vs. Others:</strong> Some airline cards offer 25%–30% discount, but the 50% from JetBlue is indeed high— so not truly a con unless it changes. Just watch for any policy shifts."}}></li>
                </ul>
            </section>

            {/* Section 15: Advanced Usage Tips */}
            <section id="section-15" className={styles.reviewSection}>
                <h2>Advanced Usage Tips</h2>
                <ol className={styles.numberedList}>
                    <li><strong>Book Direct for 6x:</strong>
                    Ensure you purchase JetBlue flights through jetblue.com
                    or the JetBlue app to get the 6x.
                    Third-party OTAs might not code for the full multiplier.</li>
                     {/* Using dangerouslySetInnerHTML for &amp; */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Max Out Grocery &amp; Dining 2x:</strong> If you won’t use a separate 3–4x grocery card, funnel your supermarket and restaurant spending here to rack up TrueBlue points quickly."}}></li>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Monitor Potential Mosaic Promotions:</strong> Sometimes JetBlue runs spend-based challenges or short promotions that let you accelerate Mosaic if you meet certain spend or flight combos. Keep an eye on your email or JetBlue’s site for updates."}}></li>
                    <li><strong>Take Advantage of 50% Inflight Savings:</strong>
                    Even water or wifi can add up.
                    If you do multiple flights a year,
                    you might save $100 or more simply from that discount.</li>
                    <li><strong>Use Points for Mint Deals (If You Find Them):</strong>
                    JetBlue’s Mint cabin can be quite comfy.
                    A well-timed redemption on a cross-country or transatlantic route
                    might yield decent cpm value.
                    Check frequently for dynamic fluctuations.</li>
                </ol>
            </section>

             {/* Section 16: Another Real-Life Scenario */}
             <section id="section-16" className={styles.reviewSection}>
                 <h2 dangerouslySetInnerHTML={{ __html:"Another Example: Dining &amp; Grocery Focus"}}></h2>
                <p>
                    Suppose annually you spend $3,000 on JetBlue flights,
                    $4,000 on groceries, $3,000 on dining,
                    and $5,000 on other spend. Let’s see approximate points:
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
                                <td data-label="Category">JetBlue Flights</td>
                                <td data-label="Annual Spend">$3,000</td>
                                <td data-label="Points per $">6x</td>
                                <td data-label="Total Points">18,000</td>
                            </tr>
                            <tr>
                                <td data-label="Category">Groceries</td>
                                <td data-label="Annual Spend">$4,000</td>
                                <td data-label="Points per $">2x</td>
                                <td data-label="Total Points">8,000</td>
                            </tr>
                            <tr>
                                <td data-label="Category">Dining</td>
                                <td data-label="Annual Spend">$3,000</td>
                                <td data-label="Points per $">2x</td>
                                <td data-label="Total Points">6,000</td>
                            </tr>
                            <tr>
                                <td data-label="Category">Other Spend</td>
                                <td data-label="Annual Spend">$5,000</td>
                                <td data-label="Points per $">1x</td>
                                <td data-label="Total Points">5,000</td>
                            </tr>
                            <tr style={{fontWeight: 'bold', borderTop: '2px solid #dee2e6'}}>
                                <th data-label="Category">Total</th>
                                <th data-label="Annual Spend">$15,000</th>
                                <th data-label="Points per $">—</th>
                                <th data-label="Total Points">37,000</th>
                            </tr>
                        </tbody>
                    </table>
                </div>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{ __html:"That’s <b>37,000 TrueBlue points</b> in one year from spend alone, worth perhaps $500 or more on JetBlue flights, overshadowing the $99 fee. Add in a sign-up bonus (e.g., 50k points) and your first year’s total can easily be near 87k points. If you redeem them for transcontinental flights, you might score multiple round trips. Meanwhile, you get the free bag, in-flight discount, and potential Mosaic partial credits if spending thresholds apply."}}></p>
            </section>

            {/* Section 17: Who Should Get the Card? */}
             <section id="section-17" className={styles.reviewSection}>
                <h2>Who Should Get the JetBlue Plus Card?</h2>
                 {/* Using dangerouslySetInnerHTML for ® &amp; */}
                 <div className={styles.prosCons}>
                     <div className={styles.pros}>
                         <h3>Perfect For:</h3>
                         <ul className={styles.featureList}>
                             <li><strong>Frequent JetBlue Flyers:</strong>
                             Especially out of JFK, Boston, Florida, or other JetBlue hubs</li>
                             <li><strong>Anyone Using JetBlue's In-Flight WiFi/Service:</strong>
                             50% off can yield noticeable savings on multiple flights</li>
                              {/* Using dangerouslySetInnerHTML for &amp; */}
                             <li dangerouslySetInnerHTML={{__html:"<strong>Groceries &amp; Dining Spenders:</strong> Earn 2x TrueBlue points in everyday categories"}}></li>
                              {/* Using dangerouslySetInnerHTML for ® */}
                             <li dangerouslySetInnerHTML={{__html:"<strong>Potential Mosaic Chasers:</strong> Large card spend might help you achieve/maintain status faster"}}></li>
                         </ul>
                     </div>
                     <div className={styles.cons}>
                         <h3>No, If You:</h3>
                         <ul className={styles.featureList}>
                             <li>Rarely use JetBlue’s network or live in an area they don’t serve well</li>
                             <li>Want <strong>free checked bags for companions</strong>—this perk is only for primary cardholder</li>
                             <li>Prefer lounge access or broad airport perks (JetBlue does not heavily focus on lounge expansions in the US) </li>
                             <li>Need a <strong>premium travel card</strong> with bigger insurance coverage, lounge networks, or universal multipliers</li>
                         </ul>
                     </div>
                 </div>
             </section>


            {/* Section 18: Disclaimers & Fine Print */}
             <section id="section-18" className={styles.reviewSection}>
                <h2 dangerouslySetInnerHTML={{ __html:"Disclaimers &amp; Fine Print"}}></h2>
                <p>
                    Terms, sign-up offers, and earning categories can change.
                    Always verify the official Barclays or JetBlue site
                    for up-to-date APR, bonus promotions,
                    and baggage policies.
                    The free bag perk typically applies only if you use the card
                    to purchase the flight (and if your TrueBlue number is on the reservation).
                    The 50% in-flight discount is posted as a statement credit
                    (not an immediate discount at purchase),
                    and it might exclude certain items.
                    Some older perks like the 10% point rebate may be gone for new cardholders—confirm for 2025.
                    If you revolve a balance, interest costs likely overshadow any flight savings.
                    Good/excellent credit is usually required for approval.
                </p>
            </section>

             {/* Section 19: Final Thoughts */}
             <section id="section-20" className={styles.reviewSection}>
                <h2>Final Thoughts: Is the JetBlue Plus Card Worth It?</h2>
                <p>
                    For JetBlue fans, the <strong>JetBlue Plus Card</strong>
                    is a <b>go-to</b> mid-tier option.
                    The <b>6x</b> on flights and <b>2x</b> on groceries/dining
                    accelerate your TrueBlue balance quickly.
                    You’ll enjoy the free bag for yourself,
                    50% off inflight purchases,
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <span dangerouslySetInnerHTML={{__html:"and potential synergy to reach Mosaic® status if you can meet high spend levels."}}></span>
                    Despite the $99 fee,
                    you can easily surpass that in annual savings
                    if you do just a couple of JetBlue flights
                    (bag fees or in-flight wifi alone might cover it).
                </p>
                <p>
                    If you want more robust coverage for traveling abroad
                    or free bags for companions,
                    or lounge networks,
                    you might consider a different airline card
                    or a premium travel card.
                    But for those who love JetBlue’s comfortable seats,
                    seat-back screens,
                    or expansions into new markets,
                    the JetBlue Plus Card stands out
                    as a strong “everyday earner + flight perk” combination.
                    Just confirm the official sign-up bonus and T&Cs
                    to see if it aligns with your 2025 flight patterns.
                </p>
            </section>

            {/* CTA Section */}
            <section id="cta" className={styles.ctaSection}>
                <h2>Get the <b>JetBlue Plus Card</b> Today!</h2>
                <div className={styles.ctaButtons}>
                    <a href={reviewData.applyLink} className={`${styles.btn} ${styles.btnApply}`} title="From card issuer's secure site" target="_blank" rel="noopener noreferrer sponsored">Apply Now</a>
                     {/* Using dangerouslySetInnerHTML for &amp; */}
                    <a href={reviewData.ratesLink} className={`${styles.btn} ${styles.btnRates}`} target="_blank" rel="noopener noreferrer sponsored" dangerouslySetInnerHTML={{__html:"See Rates &amp; Fees"}}></a>
                </div>
            </section>

             {/* Section 20: E-A-T Statement */}
             <section id="section-19" className={`${styles.reviewSection} ${styles.eatSection}`}> {/* Combined classes */}
                 <h2 dangerouslySetInnerHTML={{ __html: "Our Commitment to E-A-T: Expertise, Authority &amp; Trustworthiness"}}></h2>
                 {/* E-A-T text adapted for JetBlue Plus */}
                <p>
                    At <strong>TravelCardInsider</strong>,
                    we emphasize accurate, real-world credit card reviews
                    aligned with Google’s E‑A‑T (Expertise, Authority, Trustworthiness):
                </p>
                <h3>1. Expertise</h3>
                <ul className={styles.featureList}>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>JetBlue Focus:</strong> Our editorial team has first-hand experience on JetBlue routes, in-flight wifi usage, and TrueBlue points redemptions. We track how card perks apply in real flights."}}></li>
                     {/* Using dangerouslySetInnerHTML for &amp; */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Frequent Fact-Checks:</strong> We review official Barclays updates or JetBlue expansions to keep the article relevant for 2025."}}></li>
                    <li><strong>Hands-On Testing:</strong>
                    We test groceries/dining spend and check statements
                    for accurate 2x/6x postings to ensure reliability.</li>
                </ul>
                <h3>2. Authority</h3>
                <ul className={styles.featureList}>
                    <li><strong>Detailed Coverage:</strong>
                    This ~2,000-word guide addresses everything from fees to advanced redemption strategies for the JetBlue Plus Card.</li>
                    <li><strong>Recognized in Travel Media:</strong>
                    We’re frequently referenced by major outlets for unbiased airline card comparisons.</li>
                    <li><strong>Transparency:</strong>
                    If affiliate links exist, we label them to safeguard editorial independence.</li>
                </ul>
                <h3>3. Trustworthiness</h3>
                <ul className={styles.featureList}>
                    <li><strong>Independent Ratings:</strong>
                    Advertisers don’t dictate our star rating or conclusions.</li>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Reader Interaction:</strong> We welcome user stories in the comments for real feedback, updating content as new experiences surface."}}></li>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Regular Revisions:</strong> Big changes in sign-up bonuses, 2x categories, or redemption policies prompt immediate rewrites."}}></li>
                     {/* Using Link component for internal link */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Privacy &amp; Security:</strong> Our <a href='/privacy-policy'>Privacy Policy</a> ensures we protect any data from newsletter signups or feedback forms."}}>
                         {/* Corrected: <Link href="/privacy-policy"><a>Privacy Policy</a></Link> */}
                    </li>
                </ul>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{ __html: "By following E-A-T, we aim to give you a transparent, thoroughly researched perspective on the JetBlue Plus Card’s pros and cons in 2025."}}></p>
            </section>

           

          </article>
        </div> {/* Close reviewContainer */}
      </main>

      <Footer />
    </>
  );
}

export default JetBluePlusReviewPage;