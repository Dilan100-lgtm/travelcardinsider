// Example Path: pages/reviews/delta-skymiles-platinum.js
// Or: pages/reviews/[slug].js (if using dynamic routing with 'delta-skymiles-platinum' as slug)

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
  cardName: 'Delta SkyMiles® Platinum American Express Card',
  title: 'Delta SkyMiles® Platinum American Express Card – In-Depth 2025 Review',
  description: 'An extensive 2000-word review of the Delta SkyMiles® Platinum American Express Card, focusing on travel and airline perks, annual fee, lounge access, companion certificate, 2025 updates, pros, cons, and advanced usage tips.',
  keywords: 'Delta, SkyMiles, Platinum, American Express, airline miles, travel, lounge, MQMs, 2025 updates',
  author: 'TravelCardInsider', // *** REPLACE with your actual author/site name ***
  imageUrl: '/NUS000000269_480x304_straight_withname.avif', // *** VERIFY PATH in /public ***
  ratingValue: 8.3, // From Delta Platinum HTML
  applyLink: 'https://www.americanexpress.com/us/credit-cards/card/delta-skymiles-platinum-american-express-card/', // *** REPLACE with actual Delta Platinum APPLY URL ***
  ratesLink: 'https://www.americanexpress.com/us/credit-cards/card-application/apply/prospect/terms/delta-skymiles-platinum-american-express-card/25330-10-0#FeeTable', // *** VERIFY URL ***
  // Image dimensions (MUST BE ACCURATE for next/image) - Guessed from filename
  imageWidth: 480, // *** REPLACE with actual image width ***
  imageHeight: 304, // *** REPLACE with actual image height ***
};

// --- Rating Tooltip Content (Customize if needed for Delta Plat) ---
const ratingCriteria = [ // *** VERIFY/CUSTOMIZE these criteria for Delta Plat Rating ***
    'Companion Certificate Value',
    'Delta & Hotel Rewards (3x)',
    'Free Checked Bag & Priority Boarding',
    'MQM Boost / Status Help',
    'Annual Fee ($250)'
];

function DeltaSkyMilesPlatinumReviewPage() {
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
  // !!! VERIFY all URLs, counts, and details FOR DELTA PLATINUM AMEX !!!
  const siteUrl = "https://www.travelcardinsider.com"; // *** REPLACE with your actual site URL ***
  const pageUrl = `${siteUrl}/reviews/delta-skymiles-platinum`; // *** REPLACE with your actual page URL ***
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Delta SkyMiles® Platinum American Express Card",
    "image": `${siteUrl}${reviewData.imageUrl}`, // *** Assuming imageUrl starts with / ***
    "description": "The Delta SkyMiles® Platinum Amex Card offers robust travel perks like a companion certificate, first checked bag free, lounge access options, and valuable MQM boosts toward Medallion® Status.", // Updated description
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
      "ratingCount": 750, // *** REPLACE with actual or estimated count ***
      "reviewCount": 750  // *** REPLACE with actual or estimated count ***
    },
    "offers": {
      "@type": "Offer",
      "url": reviewData.applyLink.startsWith('http') ? reviewData.applyLink : `${siteUrl}${reviewData.applyLink}`, // *** Ensure full APPLY URL ***
      "priceCurrency": "USD",
      "price": "250", // Annual Fee for Delta Platinum
      "availability": "https://schema.org/InStock",
      "itemCondition": "https://schema.org/NewCondition"
    }
    // Consider adding "category": "Airline Rewards Credit Card" if needed
    // Consider adding "provider": { "@type": "Organization", "name": "Delta Air Lines" }
  };

  return (
    <>
      {/* ===== HEAD SECTION for Metadata & SEO ===== */}
      <Head>
         {/* Using dangerouslySetInnerHTML for ® */}
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
              {/* Using dangerouslySetInnerHTML for ® */}
              <h1 dangerouslySetInnerHTML={{ __html: "Delta SkyMiles® Platinum American Express Card – 2025 Review" }}></h1>

              {/* Section 1 Content (Part of Header Structure in Template) */}
              <section id="section-1">
                <div className={styles.intro}>
                   {/* Using dangerouslySetInnerHTML for ® */}
                   <p dangerouslySetInnerHTML={{ __html: "The <strong>Delta SkyMiles® Platinum American Express Card</strong> is a mid-tier airline card aimed at frequent Delta travelers who want extra perks like a free checked bag, priority boarding, lounge access options, and a <b>companion certificate</b> each year. At a <strong>$250 annual fee</strong>, it’s less premium than the Reserve version but still provides valuable benefits and helps you earn Medallion® Status faster if you meet spending thresholds." }}></p>
                </div>

                {/* Image Container */}
                <div className={styles.cardImageContainer}>
                  {/* Class name adjusted */}
                  <Image
                     src={reviewData.imageUrl}
                     alt="Delta SkyMiles® Platinum American Express Card" // Updated alt text
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
                    <i>Great mid-tier Delta card with a free checked bag, lounge perks, and companion certificate!</i>
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
                      <td data-label="Feature">Welcome Bonus</td>
                      <td data-label="Details">Frequently ~50,000–80,000 bonus miles after spending $3,000+ in first 3 months (varies by promo)</td>
                    </tr>
                    <tr>
                      <td data-label="Feature">Annual Fee</td>
                      <td data-label="Details">$250</td>
                    </tr>
                    <tr>
                      <td data-label="Feature">Earning Rates</td>
                       {/* Using dangerouslySetInnerHTML for ® &amp; */}
                       <td data-label="Details" dangerouslySetInnerHTML={{ __html: "3x miles on Delta purchases &amp; Hotels (via Amex Travel), 2x at Restaurants &amp; U.S. Supermarkets, 1x elsewhere"}}></td>
                    </tr>
                    <tr>
                      <td data-label="Feature">Lounge Benefits</td>
                       {/* Using dangerouslySetInnerHTML for ® */}
                      <td data-label="Details" dangerouslySetInnerHTML={{ __html: "Discounted Sky Club® access, 2-for-1 guest passes, no Centurion Lounge access (that's Reserve tier)"}}></td>
                    </tr>
                    <tr>
                      <td data-label="Feature">Companion Certificate</td>
                      <td data-label="Details">Each renewal year, domestic Main Cabin round-trip (plus taxes/fees)</td>
                    </tr>
                    <tr>
                      <td data-label="Feature">Foreign Transaction Fee</td>
                      <td data-label="Details">None</td>
                    </tr>
                    <tr>
                      <td data-label="Feature">MQM Boost / Status Help</td>
                       {/* Using dangerouslySetInnerHTML for ® */}
                      <td data-label="Details" dangerouslySetInnerHTML={{ __html: "Earn MQMs after spending thresholds ($25k / $50k), helps reach Medallion® Status"}}></td>
                    </tr>
                    <tr>
                      <td data-label="Feature">Free Checked Bag</td>
                      <td data-label="Details">Yes, for the cardholder + up to 8 companions on same reservation</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* CTA Section */}
             <section id="cta" className={styles.ctaSection}>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <h2 dangerouslySetInnerHTML={{ __html: "Get the <b>Delta SkyMiles® Platinum American Express Card</b> Today!"}}></h2>
                <div className={styles.ctaButtons}>
                    <a href={reviewData.applyLink} className={`${styles.btn} ${styles.btnApply}`} title="From card issuer's secure site" target="_blank" rel="noopener noreferrer sponsored">Apply Now</a>
                     {/* Using dangerouslySetInnerHTML for ® &amp; */}
                    <a href={reviewData.ratesLink} className={`${styles.btn} ${styles.btnRates}`} target="_blank" rel="noopener noreferrer sponsored" dangerouslySetInnerHTML={{ __html:"See Rates &amp; Fees"}}></a>
                </div>
            </section>

             {/* Section 3: Card Overview & Positioning */}
             <section id="section-3" className={styles.reviewSection}>
                <h2>Card Overview and Positioning</h2>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{ __html: "The Delta SkyMiles® Platinum card caters to fliers who want <b>substantial</b> Delta perks but aren’t ready for the $550 Delta Reserve® annual fee. With Platinum, you get a <b>companion certificate</b> (Main Cabin), a free first checked bag, priority boarding, and partial lounge privileges—<b>discount</b> access to Delta Sky Club®, but no free Centurion Lounge access. The $250 annual fee can be offset if you use the companion certificate or check enough bags."}}></p>
            </section>

            {/* Section 4: Earning Miles & Travel Emphasis */}
            <section id="section-4" className={styles.reviewSection}>
                <h2 dangerouslySetInnerHTML={{ __html: "Earning Miles &amp; Travel Emphasis" }}></h2>
                 {/* Using dangerouslySetInnerHTML for &amp; */}
                <p dangerouslySetInnerHTML={{ __html:"<strong>3x miles:</strong> on Delta purchases and on eligible Hotels booked via Amex Travel. <strong>2x miles:</strong> at U.S. supermarkets and restaurants worldwide. <strong>1x mile:</strong> on all other spend."}}></p>
                <p>
                    This structure heavily rewards Delta flights,
                    but also recognizes that many travelers incur
                    significant hotel nights.
                    Keep in mind the “Hotels” bonus typically applies
                    only if you book via AmexTravel.com.
                    If you want hotel elite benefits with brands
                    like Marriott or Hilton, booking direct might matter more—
                    but you’d earn only 1x on direct hotel brand websites
                    with this card.
                </p>
            </section>

            {/* Section 5: Redeeming SkyMiles */}
            <section id="section-5" className={styles.reviewSection}>
                 <h2 dangerouslySetInnerHTML={{ __html: "Redeeming Your Delta SkyMiles®" }}></h2>
                <p>
                    Miles are best redeemed for <b>award flights</b> on Delta
                    or partner airlines (Air France, KLM, Virgin Atlantic, etc.).
                    While Delta no longer publishes an official award chart,
                    you can find sweet spots—particularly for domestic flights
                    or certain international partners.
                    Typically, aim for at least 1.3–1.5 cents per mile
                    to feel satisfied.
                    For example, a $300 domestic round-trip might cost 25,000 miles
                    (1.2 cpm), whereas some international routes in business class
                    might yield 2+ cpm if you find a deal.
                </p>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{ __html: "You can also redeem miles for seat upgrades, Delta Vacations® packages, or basic gift cards, but flight redemptions typically yield the highest value for frequent travelers."}}></p>
            </section>

            {/* Section 6: Medallion® Status & MQM Boosts */}
             <section id="section-6" className={styles.reviewSection}>
                 <h2 dangerouslySetInnerHTML={{ __html: "Medallion® Status &amp; MQM Boosts" }}></h2>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{ __html: "One of the biggest draws for <b>Platinum</b> is it helps you reach or maintain <b>Delta Medallion® Status</b>:"}}></p>
                <ul className={styles.featureList}>
                    {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{ __html:"<strong>MQMs (Medallion® Qualification Miles):</strong> Earn a set chunk of MQMs after hitting a certain annual spend threshold (historically $25k / $50k). Each threshold typically yields ~10,000 MQMs, helping you climb from Silver to Gold or even Platinum status if your flight activity is close to the requirement."}}></li>
                    {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{ __html:"<strong>MQD Waiver:</strong> If you spend enough (historically $25k+ annually) on the card, you might bypass the MQD requirement for some Medallion® tiers, meaning you don’t need the $3k–$9k flight spending threshold to achieve the same tier. However, for Diamond status, you might need $250k spend or a partial MQD requirement. Check the <b>2025</b> MQD rules for the newest details, as Delta changes them frequently."}}></li>
                </ul>
                <p>
                    This synergy is huge for frequent Delta fliers
                    who can’t put all that spending on cheaper or
                    more flexible cards. The extra miles and status
                    can drastically improve your travel experience
                    (upgrades, free Comfort+ seats, etc.).
                </p>
            </section>

            {/* Section 7: Lounge Access & Perks */}
            <section id="section-7" className={styles.reviewSection}>
                 <h2 dangerouslySetInnerHTML={{ __html: "Lounge Access &amp; Travel Perks" }}></h2>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{ __html: "With the Platinum card, you can access <b>Delta Sky Club®</b> at a discounted rate (~$50 per visit), or for free if you hold Delta Medallion® with a lounge membership. However, unlike the Delta Reserve or Amex Platinum, there’s no complimentary entry. Another perk is the <b>Global Entry/TSA PreCheck</b> credit every four years if you pay the enrollment fee with your Platinum card—a nice time-saver for frequent travelers."}}></p>
                <p>
                    Also, you get <b>Priority Boarding</b> (Zone 1)
                    on Delta flights, waiving the scramble for overhead bin space,
                    plus that <b>first checked bag free</b>
                    for you and up to 8 traveling companions
                    on the same reservation.
                </p>
            </section>

            {/* Section 8: Companion Certificate */}
            <section id="section-8" className={styles.reviewSection}>
                <h2>Companion Certificate: A Major Value</h2>
                <p>
                    Each card renewal (after your first year),
                    you get a <b>domestic Main Cabin</b> round-trip
                    <strong> companion certificate</strong>.
                    That means you buy your own Delta flight (plus taxes/fees)
                    and can bring one companion on the same itinerary for free,
                    aside from ~ $75 in taxes/fees.
                    If you find a $400 domestic flight, that can net $400 in savings,
                    already offsetting your <b>$250</b> annual fee.
                </p>
                <p>
                    Note that certain seat classes or routes might be restricted,
                    and you can’t use it on international flights.
                    Still, it’s one of the largest cost-saving features
                    if you travel with a spouse/friend at least once a year.
                </p>
            </section>

             {/* Section 9: Annual Fee & Overall Costs */}
             <section id="section-9" className={styles.reviewSection}>
                 <h2 dangerouslySetInnerHTML={{ __html: "Annual Fee &amp; Overall Costs"}}></h2>
                <p>
                    The <b>annual fee</b> is currently <b>$250</b>.
                    There’s <b>no foreign transaction fee</b>,
                    so you can use it abroad without penalty.
                    After any intro APR (sometimes 0% for purchases for 6 months,
                    but not always), the ongoing APR is <b>20.74%–29.74%</b> variable.
                    Avoid interest by paying in full, especially because
                    carrying a balance can quickly negate the card’s benefits.
                </p>
                <p>
                    For many, the free checked bag and companion certificate
                    can recoup the $250 fairly easily if you fly Delta
                    more than once or twice per year domestically.
                </p>
            </section>

            {/* Section 10: 2025 Updates & Potential Changes */}
            <section id="section-10" className={styles.reviewSection}>
                 <h2 dangerouslySetInnerHTML={{ __html: "2025 Updates &amp; Potential Changes"}}></h2>
                <ol className={styles.numberedList}>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{ __html:"<strong>MQD Requirement Shifts:</strong> Delta frequently adjusts the Medallion® qualification thresholds. Watch for new MQD or MQM spending rules that might affect your status strategy."}}></li>
                    <li><strong>Renewal Timing on Companion Cert:</strong>
                    Terms might shift to your anniversary date or card membership date.
                    Keep an eye on official Amex communications.</li>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{ __html:"<strong>New Lounge Rules:</strong> Potential changes in Sky Club® policy, possibly limiting the $50 entry to a certain number of visits or restricting busy hours."}}></li>
                    <li><strong>Promotional Sign-Up Bonuses:</strong>
                    We often see limited-time 90k or 100k mile offers for the Platinum card.
                    2025 may bring an even bigger bonus if competition intensifies.</li>
                </ol>
                <p>
                    As always, check official announcements for the latest terms.
                    Delta and Amex are known to tweak perks
                    in response to market demands.
                </p>
            </section>

            {/* Section 11: Real-Life Example Table */}
            <section id="section-11" className={styles.reviewSection}>
                <h2>Real-Life Example: Earning & Savings</h2>
                <p>
                    Let’s assume you spend $6,000 on flights with Delta,
                    $3,000 at U.S. supermarkets, and $2,000 at restaurants yearly,
                    plus general $5,000 on other purchases:
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
                                <td data-label="Category">Delta Flights</td>
                                <td data-label="Annual Spend">$6,000</td>
                                <td data-label="Miles per $">3x</td>
                                <td data-label="Miles Earned">18,000</td>
                            </tr>
                            <tr>
                                <td data-label="Category">U.S. Supermarkets</td>
                                <td data-label="Annual Spend">$3,000</td>
                                <td data-label="Miles per $">2x</td>
                                <td data-label="Miles Earned">6,000</td>
                            </tr>
                            <tr>
                                <td data-label="Category">Restaurants</td>
                                <td data-label="Annual Spend">$2,000</td>
                                <td data-label="Miles per $">2x</td>
                                <td data-label="Miles Earned">4,000</td>
                            </tr>
                            <tr>
                                <td data-label="Category">All Other</td>
                                <td data-label="Annual Spend">$5,000</td>
                                <td data-label="Miles per $">1x</td>
                                <td data-label="Miles Earned">5,000</td>
                            </tr>
                            <tr style={{fontWeight: 'bold', borderTop: '2px solid #dee2e6'}}>
                                <th data-label="Category">Total</th>
                                <th data-label="Annual Spend">$16,000</th>
                                <th data-label="Miles per $">—</th>
                                <th data-label="Miles Earned">33,000</th>
                            </tr>
                        </tbody>
                    </table>
                </div>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{ __html: "33,000 miles might be worth ~$400 if redeemed at ~1.2 cpm, or more if used wisely. Add in the <b>companion certificate</b> (saving $400+ on a domestic flight), plus a <b>free checked bag</b> a few times a year, and you easily justify the $250 annual fee. The intangible benefit of boosting Medallion® Status further sweetens the deal." }}></p>
            </section>

             {/* Section 12: Competitor Analysis */}
             <section id="section-12" className={styles.reviewSection}>
                <h2>Competitor Analysis</h2>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{ __html:"How does <b>Delta SkyMiles® Platinum Amex</b> compare to other mid-tier airline/travel cards?"}}></p>
                <div className={styles.tableContainer}>
                     <table className={styles.statsTable}> {/* Corrected from empty table tag */}
                        <thead>
                            <tr>
                                <th>Card</th>
                                <th>Annual Fee</th>
                                <th>Main Perks</th>
                                <th>Key Advantage</th>
                            </tr>
                        </thead>
                        <tbody>
                             {/* Using dangerouslySetInnerHTML for ® */}
                            <tr dangerouslySetInnerHTML={{ __html:'<td data-label="Card">Delta SkyMiles® Platinum Amex</td><td data-label="Annual Fee">$250</td><td data-label="Main Perks">Companion certificate, MQM boosts, 3x on Delta/hotels, free bag</td><td data-label="Key Advantage">Strong synergy with Delta Medallion® Status</td>'}}></tr>
                             {/* Using dangerouslySetInnerHTML for ℠ */}
                            <tr dangerouslySetInnerHTML={{ __html:'<td data-label="Card">United℠ Explorer Card</td><td data-label="Annual Fee">$0 first year, then ~$95</td><td data-label="Main Perks">Free checked bag, 2 United Club passes, 25% back on in-flight purchases</td><td data-label="Key Advantage">Lower fee, less robust status help than Delta Platinum</td>'}}></tr>
                             {/* Using dangerouslySetInnerHTML for ® */}
                            <tr dangerouslySetInnerHTML={{ __html:'<td data-label="Card">American Airlines AAdvantage® Platinum Select®</td><td data-label="Annual Fee">$99 (waived first year often)</td><td data-label="Main Perks">Free bag, priority boarding, 2x miles on gas/restaurants</td><td data-label="Key Advantage">Cheaper fee, simpler perks</td>'}}></tr>
                             {/* Using dangerouslySetInnerHTML for ® */}
                            <tr dangerouslySetInnerHTML={{ __html:'<td data-label="Card">Chase Sapphire Preferred®</td><td data-label="Annual Fee">$95</td><td data-label="Main Perks">2x on travel/dining, flexible UR points, primary rental coverage</td><td data-label="Key Advantage">Versatile, but no airline-specific perks or checked bag waivers</td>'}}></tr>
                        </tbody>
                    </table>
                </div>
                <p>
                    The Delta Platinum stands out if you frequently fly Delta
                    and desire advanced status benefits.
                    United or American fans might pick their respective cards
                    at a lower fee but with fewer premium perks.
                    A general travel card (Sapphire Preferred) is good
                    if you want flexible points, but you lose airline-specific extras
                    like the companion certificate or baggage waivers.
                </p>
            </section>

            {/* Section 13: Pairing with Other Amex Cards */}
            <section id="section-13" className={styles.reviewSection}>
                <h2>Pairing Delta Platinum with Other Amex Cards</h2>
                {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{__html:"Some travelers hold a <b>Delta Reserve</b> or an <b>Amex Platinum</b> card for lounge access, and keep the <b>Delta Platinum</b> for additional MQM boosts or that companion certificate. But typically, you’d pick one main Delta co-branded card unless you have a specific reason to carry multiple (like maximizing status miles). Alternatively, you can pair <b>Delta Platinum</b> with a general Membership Rewards®-earning card (like the Amex Gold or Green) to earn flexible points on non-Delta categories and then transfer to Delta SkyMiles."}}></p>
            </section>

            {/* Section 14: No Foreign Transaction Fee */}
            <section id="section-14" className={styles.reviewSection}>
                <h2>Foreign Transaction Fee or Not?</h2>
                {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{__html:"Great news: The Delta SkyMiles® Platinum has <b>no FTF</b>, meaning you can use it internationally without paying an extra 3% fee. If you’re traveling abroad on Delta or any partner airline, you can keep earning miles and enjoy the free checked bag on Delta flights from overseas as well. However, not all partner flights are equally recognized for baggage or lounge privileges, so double-check if you’re on a codeshare or alliance flight."}}></p>
            </section>

            {/* Section 15: Downsides & Considerations */}
            <section id="section-15" className={styles.reviewSection}>
                 <h2 dangerouslySetInnerHTML={{ __html: "Potential Downsides &amp; Considerations"}}></h2>
                <ul className={styles.featureList}>
                    <li><strong>$250 Annual Fee:</strong>
                    Some might find it steep if you only fly Delta occasionally.</li>
                    <li><strong>Limited Lounge Access:</strong>
                    You have to pay a discounted entry, not free.
                    If you want unlimited lounge visits, consider Delta Reserve or Amex Platinum.</li>
                    <li><strong>Not Great for Non-Delta Loyalists:</strong>
                    If you switch airlines often, the bag and companion perks are less valuable.</li>
                    <li><strong>Hotel 3x Restriction:</strong>
                    Must book via Amex Travel, possibly losing direct hotel loyalty benefits.</li>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Sometimes Underpowered vs. Delta Reserve®:</strong> If you crave top-tier lounge + MQM boosts, you might upgrade to Reserve or pair with an alternative premium card."}}></li>
                </ul>
            </section>

             {/* Section 16: Advanced Travel Tips */}
             <section id="section-16" className={styles.reviewSection}>
                <h2>Advanced Travel Tips</h2>
                <ol className={styles.numberedList}>
                    <li><strong>Maximize Companion Certificate Value:</strong>
                    Use it on flights that cost ~$300+ to offset the $250 fee.
                    Book early to ensure seat availability.</li>
                    <li><strong>Spending Thresholds for MQMs:</strong>
                    If you’re near a tier, ramp up your card spend to hit $25k or $50k
                    for those extra MQMs or MQD waivers.
                    Only do so if the incremental miles/benefits outweigh
                    potential rewards you’d get from other cards.</li>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Combine with Delta Vacation Packages:</strong> If you pay with this card, you earn 3x miles, plus any Delta Vacations® bonus miles occasionally offered. It can stack well for big annual trips."}}></li>
                    <li><strong>Use Priority Boarding Wisely:</strong>
                    If traveling with carry-ons, get on earlier to secure overhead bin space,
                    especially on busy routes.</li>
                    <li><strong>Check Partners for Higher CPM:</strong>
                    Sometimes redeeming miles on Virgin Atlantic or KLM
                    yields better redemption rates.
                    Explore Delta’s partner routes to maximize your miles further.</li>
                </ol>
            </section>

             {/* Section 17: Another Real-Life Example */}
             <section id="section-17" className={styles.reviewSection}>
                <h2>Another Real-Life Example: Big Trip Strategy</h2>
                <p>
                    Suppose you plan a large family trip:
                </p>
                <ul className={styles.featureList}>
                    <li>Two round-trip Delta tickets (domestic) at $400 each →
                    Use your companion certificate for the second traveler →
                    saving ~$400 after taxes/fees (~$75).</li>
                    <li>You check 3 bags total across the family →
                    Each bag might have cost $30 each way →
                    $90 in baggage savings if they’re all on same reservation
                    (bag fees vary by route, but typically $30–$60 each way per bag).</li>
                    <li>Spending on Delta flights: $400 (the one you pay for)
                    → 3x = 1,200 miles.
                    If you also pay for other family tickets with your card,
                    you can earn 3x on those base fares, too.</li>
                </ul>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{ __html: "Total intangible value from a single trip can exceed $600, which easily surpasses the $250 annual fee. Add monthly grocery/restaurant 2x usage and the occasional MQM boost, and the card’s synergy for Delta loyalists is evident."}}></p>
            </section>

             {/* Section 18: Competitor & Alternative Cards */}
             <section id="section-18" className={styles.reviewSection}>
                 <h2 dangerouslySetInnerHTML={{ __html: "Competitors &amp; Alternatives"}}></h2>
                <p>
                    If you’re not fully set on Delta or want to explore other airline/travel combos:
                </p>
                <ul className={styles.featureList}>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Amex Gold®:</strong> 4x on dining and U.S. supermarkets, flexible points you can transfer to Delta, $250 AF, but no airline baggage or companion perk."}}></li>
                    {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Delta SkyMiles® Gold Amex:</strong> $99 AF, fewer perks, no companion certificate, less synergy with MQMs, but cheaper for light Delta travelers."}}></li>
                    {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Delta SkyMiles® Reserve Amex:</strong> $550 AF, full Sky Club® access, bigger MQM boosts, but pricier if you don’t travel enough to justify it."}}></li>
                    {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Chase Sapphire Reserve® or Preferred®:</strong> Flexible points, robust travel benefits, but no direct Delta baggage or companion perks; you can transfer UR points to airline partners (not Delta directly, but you can do it via Virgin Atlantic or Air France sometimes for Delta flights)."}}></li>
                </ul>
            </section>

            {/* Section 19: Who Should Apply? */}
             <section id="section-19" className={styles.reviewSection}>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <h2 dangerouslySetInnerHTML={{ __html: "Should You Apply for Delta SkyMiles® Platinum Amex?"}}></h2>
                 <div className={styles.prosCons}>
                    <div className={styles.pros}>
                        <h3>Yes, If You:</h3>
                        <ul className={styles.featureList}>
                            <li>Are a <strong>frequent Delta flyer</strong> (or want to be)
                            who can leverage the companion certificate and free bag</li>
                             {/* Using dangerouslySetInnerHTML for ® */}
                            <li dangerouslySetInnerHTML={{__html:"Seek <strong>Medallion® Status</strong> via MQM boosts but don’t want the $550 Reserve card"}}></li>
                             {/* Using dangerouslySetInnerHTML for ® */}
                            <li dangerouslySetInnerHTML={{__html:"Enjoy the occasional <strong>discounted lounge access</strong> at Delta Sky Clubs®"}}></li>
                            <li>Value the <strong>$250 annual fee</strong> offset
                            by bag fees, certificate, or status benefits</li>
                        </ul>
                    </div>
                    <div className={styles.cons}>
                        <h3>No, If You:</h3>
                        <ul className={styles.featureList}>
                            <li><strong>Rarely fly Delta</strong> or prefer multiple airlines
                            (the bag and companion perks lose value)</li>
                            <li>Desire <strong>premium lounge access</strong> or top-tier perks
                            (Delta Reserve or Amex Platinum might be better)</li>
                            <li>Need a <strong>budget airline card</strong>
                            with a lower annual fee or no fee at all</li>
                            <li>Want <strong>flexible points</strong> for many transfer partners
                            outside of SkyTeam</li>
                        </ul>
                    </div>
                </div>
            </section>

             {/* Section 20: Bottom Line & Disclaimer */}
             <section id="section-20" className={styles.reviewSection}>
                  {/* Using dangerouslySetInnerHTML for ® */}
                 <h2 dangerouslySetInnerHTML={{ __html: "Bottom Line: Is the Delta SkyMiles® Platinum Amex Worth $250?"}}></h2>
                 <p dangerouslySetInnerHTML={{ __html: "If you fly Delta at least a few times a year, need the companion certificate, and crave moderate lounge perks + faster status attainment, the <b>Delta SkyMiles® Platinum American Express Card</b> is a compelling mid-tier choice. The annual fee can be recouped via one big domestic trip using the companion pass, plus a few checked bags. Earning 3x on Delta/hotel bookings further sweetens the mileage haul for your travels."}}></p>
                 <p>
                    If you prefer top-tier lounge access or top-tier MQMs,
                    jump to the Reserve.
                    If you rarely check bags or only take minimal flights on Delta,
                    the cheaper Gold card might suffice.
                    But for many frequent travelers wanting a solid blend
                    of perks, miles, and status help—Platinum hits the sweet spot.
                </p>
                <h3>Disclaimer</h3>
                 {/* Using dangerouslySetInnerHTML for ® &amp; */}
                <p dangerouslySetInnerHTML={{ __html: "Terms and offers can change. Always verify the current welcome bonus, interest rates, fees, and Medallion® qualification details with Delta and Amex. We may earn a commission from affiliate links, but editorial opinions remain our own. Examples of redemption or mileage values are estimates and may differ from your actual usage or flight availability."}}></p>
            </section>

             {/* E-A-T Section */}
             <section id="eat-expertise-authority-trustworthiness" className={`${styles.reviewSection} ${styles.eatSection}`}>
                 <h2 dangerouslySetInnerHTML={{ __html: "Our Commitment to E-A-T: Expertise, Authority & Trustworthiness"}}></h2>
                <p>
                    At <strong>TravelCardInsider</strong>, we prioritize credible,
                    data-driven evaluations of airline credit cards.
                    Our approach aligns with Google’s E‑A‑T (Expertise, Authority, Trustworthiness):
                </p>
                <h3>1. Expertise</h3>
                <ul className={styles.featureList}>
                    <li><strong>Airline Card Specialists:</strong>
                    Our reviewers have years of experience analyzing co-branded airline cards,
                    including multiple Delta products for tiered benefits.</li>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Frequent Fact-Checks:</strong> We update data whenever Delta or Amex modifies the card’s perks (like lounge access, companion terms, or MQM thresholds)."}}></li>
                    <li><strong>Industry Insights:</strong>
                    We attend travel/aviation conferences to stay on top
                    of loyalty program changes and advanced status strategies.</li>
                </ul>
                <h3>2. Authority</h3>
                <ul className={styles.featureList}>
                    <li><strong>Detailed Reviews:</strong>
                    Our ~2,000-word coverage addresses everything from
                    annual fees to advanced status tips, ensuring thorough guidance.</li>
                    <li><strong>Widely Quoted:</strong>
                    We’ve been referenced in major finance and travel outlets
                    for unbiased airline card comparisons.</li>
                    <li><strong>Transparent Affiliations:</strong>
                    If links lead to potential commissions, we disclose them,
                    preserving editorial independence.</li>
                </ul>
                <h3>3. Trustworthiness</h3>
                <ul className={styles.featureList}>
                    <li><strong>Independent Ratings:</strong>
                    Advertisers do not control our final verdict or star ratings.</li>
                    <li><strong>Timely Updates:</strong>
                    We revise articles promptly if major changes (like new lounge rules) happen.</li>
                    <li><strong>User Feedback Encouraged:</strong>
                    We welcome traveler experiences in the comments
                    to refine accuracy and real-world perspective.</li>
                     {/* Corrected Privacy Policy link rendering */}
                    <li>
                        <strong>Privacy &amp; Data Security:</strong> We adhere to best practices, outlined in our <Link href="/privacy-policy"><a>Privacy Policy</a></Link>.
                    </li>
                </ul>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{__html:"By following E-A-T, we aim to deliver credible, comprehensive recommendations so you can confidently decide if the Delta SkyMiles® Platinum Amex suits your 2025 travel goals."}}></p>
            </section>

          </article>
        </div> {/* Close reviewContainer */}
      </main>

      <Footer />
    </>
  );
}

export default DeltaSkyMilesPlatinumReviewPage;