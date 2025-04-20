// Example Path: pages/reviews/alaska-visa-signature.js
// Or: pages/reviews/[slug].js (if using dynamic routing with 'alaska-visa-signature' as slug)

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
  cardName: 'Alaska Airlines Visa Signature® Card',
  title: 'Alaska Airlines Visa Signature® Card – In-Depth 2025 Review',
  description: 'A 2,000-word review of the Alaska Airlines Visa Signature® Card by Bank of America, covering travel perks, companion fare, fees, 2025 updates, pros, cons, disclaimers, and advanced tips for frequent Alaska flyers.',
  keywords: 'Alaska Airlines, Visa Signature, Bank of America, companion fare, airline credit card, 2025 updates',
  author: 'TravelCardInsider', // *** REPLACE with your actual author/site name ***
  imageUrl: '/1bbt_sigcm_v_mileageplan_250x158.png', // *** VERIFY PATH in /public ***
  ratingValue: 7.9, // From Alaska HTML
  applyLink: 'https://www.alaskaair.com/content/credit-card/visa-signature?srsltid=AfmBOopDXeo80pVEogV9HD0vekWjZ37Oa5Q3QSVRkVZWNhEaMZKv7F68', // *** REPLACE with actual Alaska APPLY URL ***
  ratesLink: 'https://www.bankofamerica.com/credit-cards/products/alaska-airlines-credit-card/', // *** VERIFY URL ***
  // Image dimensions (MUST BE ACCURATE for next/image) - Guessed from filename
  imageWidth: 250, // *** REPLACE with actual image width ***
  imageHeight: 158, // *** REPLACE with actual image height ***
};

// --- Rating Tooltip Content (Customize if needed for Alaska Card) ---
const ratingCriteria = [ // *** VERIFY/CUSTOMIZE these criteria for Alaska Card Rating ***
    'Companion Fare Value',
    'Free Checked Bag Benefit',
    'Alaska Mileage Plan™ Value',
    'Welcome Bonus',
    'Annual Fee ($95)'
];

function AlaskaVisaSignatureReviewPage() {
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
  // !!! VERIFY all URLs, counts, and details FOR ALASKA VISA SIGNATURE !!!
  const siteUrl = "https://www.travelcardinsider.com"; // *** REPLACE with your actual site URL ***
  const pageUrl = `${siteUrl}/reviews/alaska-visa-signature`; // *** REPLACE with your actual page URL ***
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Alaska Airlines Visa Signature® Card",
    "image": `${siteUrl}${reviewData.imageUrl}`, // *** Assuming imageUrl starts with / ***
    "description": "The Alaska Airlines Visa Signature® Card offers an annual companion fare, free checked bag, and other travel perks for loyal Alaska flyers.", // Adjusted description
    "brand": {
      "@type": "Brand",
      "name": "Bank of America" // Issuer
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
      "ratingCount": 680, // *** REPLACE with actual or estimated count ***
      "reviewCount": 680  // *** REPLACE with actual or estimated count ***
    },
    "offers": {
      "@type": "Offer",
      "url": reviewData.applyLink.startsWith('http') ? reviewData.applyLink : `${siteUrl}${reviewData.applyLink}`, // *** Ensure full APPLY URL ***
      "priceCurrency": "USD",
      "price": "95", // Annual Fee for Alaska Visa Signature
      "availability": "https://schema.org/InStock",
      "itemCondition": "https://schema.org/NewCondition"
    }
    // Consider adding "provider": { "@type": "Organization", "name": "Alaska Airlines" }
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
              <h1 dangerouslySetInnerHTML={{ __html: "Alaska Airlines Visa Signature® Card – 2025 Review"}}></h1>

              {/* Section 1 Content (Part of Header Structure in Template) */}
              <section id="section-1">
                 {/* Using dangerouslySetInnerHTML for ® */}
                <div className={styles.intro}>
                   <p dangerouslySetInnerHTML={{ __html: "The <strong>Alaska Airlines Visa Signature® Card</strong>, offered by Bank of America, is beloved for its annual <b>Companion Fare</b> (starting at $122 after taxes/fees, but typically saves $300+), free checked bag for the cardholder + companions, and strong mileage-earning potential—particularly on Alaska flights. At a moderate annual fee of <strong>$95</strong>, it’s a staple among frequent West Coast or Alaska Airlines flyers who love the airline’s partnership network (including oneworld and numerous global carriers). In this guide, we’ll explore 20 sections from quick stats to advanced usage tips, disclaimers ensuring you can decide if it’s right for your 2025 travel needs."}}></p>
                </div>

                {/* Image Container */}
                <div className={styles.cardImageContainer}>
                  {/* Class name adjusted */}
                   <Image
                     src={reviewData.imageUrl}
                     alt={"Alaska Airlines Visa Signature® Card"}
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
                    <i>An excellent pick for loyal Alaska flyers, thanks to companion fare and free checked bags.</i>
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
                                <td data-label="Details">Often 40k+ miles after $2,000 in 3 months (varies), plus companion fare</td>
                            </tr>
                             {/* Using dangerouslySetInnerHTML for &amp; */}
                            <tr dangerouslySetInnerHTML={{__html:'<td data-label="Feature">Earning Rates</td><td data-label="Details">3x on Alaska purchases, 2x on gas/transit, 1x elsewhere (subject to current offer)</td>'}}></tr>
                             {/* Using dangerouslySetInnerHTML for &amp; */}
                            <tr dangerouslySetInnerHTML={{__html:'<td data-label="Feature">Companion Fare</td><td data-label="Details">Annually from $122 ($99 + taxes/fees) – saves hundreds vs. buying a separate ticket</td>'}}></tr>
                            <tr>
                                <td data-label="Feature">Free Checked Bag</td>
                                <td data-label="Details">For cardholder + up to 6 companions on same reservation</td>
                            </tr>
                            <tr>
                                <td data-label="Feature">Foreign Transaction Fee</td>
                                <td data-label="Details">None</td>
                            </tr>
                            <tr>
                                <td data-label="Feature">Travel Insurance</td>
                                <td data-label="Details">Baggage delay, auto rental collision damage waiver (secondary), more</td>
                            </tr>
                            <tr>
                                <td data-label="Feature">Partner Airlines</td>
                                <td data-label="Details">Can redeem miles on oneworld carriers (AA, BA, etc.) + unique global partners (Singapore, etc.)</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

             {/* CTA Section */}
             <section id="cta" className={styles.ctaSection}>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <h2 dangerouslySetInnerHTML={{__html:"Get the <b>Alaska Airlines Visa Signature® Card</b> Today!"}}></h2>
                <div className={styles.ctaButtons}>
                    <a href={reviewData.applyLink} className={`${styles.btn} ${styles.btnApply}`} title="From card issuer's secure site" target="_blank" rel="noopener noreferrer sponsored">Apply Now</a>
                    <a href={reviewData.ratesLink} className={`${styles.btn} ${styles.btnRates}`} target="_blank" rel="noopener noreferrer sponsored" dangerouslySetInnerHTML={{__html:"See Rates &amp; Fees"}}></a>
                </div>
            </section>

            {/* Section 3: Card Overview & Positioning */}
            <section id="section-3" className={styles.reviewSection}>
                 <h2 dangerouslySetInnerHTML={{ __html: "Card Overview and Positioning" }}></h2>
                <p>
                    Alaska’s card shines for its <strong>annual companion fare</strong>,
                    which is among the best “buy-one-get-one” deals in the airline card space.
                    Add free checked bags, easy-to-use miles (particularly for international partner flights),
                    and you get a potent mid-tier airline card.
                    If you frequently fly out of Alaska’s West Coast hubs (Seattle, Portland, etc.),
                    or love their robust partner network,
                    the annual fee becomes easy to justify—especially if you redeem that companion fare
                    on flights typically priced at $300–$400 or more.
                    The card also provides priority boarding with Alaska
                    (some conditions apply),
                    so you can nab overhead bin space early.
                </p>
            </section>

            {/* Section 4: Earning Miles & Travel Emphasis */}
             <section id="section-4" className={styles.reviewSection}>
                <h2 dangerouslySetInnerHTML={{ __html: "Earning Miles &amp; Travel Emphasis" }}></h2>
                <p>
                    Typically, you earn:
                </p>
                <ul className={styles.featureList}>
                    <li><strong>3 miles per $1</strong> on Alaska Airlines purchases</li>
                    <li><strong>2 miles per $1</strong> on gas, local transit, and rideshares (subject to change; verify current categories)</li>
                    <li><strong>1 mile per $1</strong> on all other spend</li>
                </ul>
                 {/* Using dangerouslySetInnerHTML for ™ &amp; */}
                <p dangerouslySetInnerHTML={{ __html:"The 3x on Alaska flights ensures you stack miles quickly, plus you earn flight miles from actually flying. The 2x on gas/transit is a relatively new perk (some versions might differ), so confirm your exact terms. The flexibility is good if you’re commuting or traveling regularly. All these miles go into your <b>Alaska Mileage Plan™</b> account, known for good redemption sweet spots with carriers like Qantas, Japan Airlines, or British Airways."}}></p>
            </section>

            {/* Section 5: Redeeming Alaska Miles */}
            <section id="section-5" className={styles.reviewSection}>
                 <h2>Redeeming Your Alaska Miles</h2>
                <p>
                    Alaska Airlines miles are prized for partner redemptions
                    (some allow free stopovers),
                    and typically have a region-based or distance-based approach
                    for certain partners.
                    You can find sweet deals, e.g.,
                    70k miles for a one-way business class to Asia
                    on Cathay Pacific or Japan Airlines.
                    Domestically, you can also redeem on American,
                    though availability can vary.
                    For short flights on Alaska itself,
                    you might find one-way economy from 5k–12.5k miles
                    depending on demand.
                </p>
                <p>
                    The <b>companion fare</b> coupon is separate from your miles
                    — each card anniversary, you pay the base fare for one passenger
                    and get the second passenger’s fare for $99 plus taxes (which start around $23).
                    If that second ticket would’ve cost $350,
                    you’ve saved ~$250 effectively.
                    This is a major part of the card’s ROI.
                </p>
            </section>

             {/* Section 6: Travel & Airline Perks */}
             <section id="section-6" className={styles.reviewSection}>
                 <h2 dangerouslySetInnerHTML={{ __html: "Travel &amp; Airline Perks" }}></h2>
                <ul className={styles.featureList}>
                    <li><strong>Free Checked Bag:</strong>
                    You + up to 6 others on the same reservation each get a free first bag,
                    saving $30+ each way per bag.</li>
                    <li><strong>Priority Boarding:</strong>
                    Board earlier than the main cabin (some disclaimers apply,
                    might be “Boarding Group C” or similar for cardholders).
                    Check Alaska’s updated policies if they shift in 2025.</li>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Discounted Lounge Membership:</strong> Some card versions offer $100 off an annual Alaska Lounge membership if you fly Alaska often. (Check current terms—some promotions come and go.)"}}></li>
                    <li><strong>20% Back on In-Flight Purchases:</strong>
                    Usually 20% statement credit on in-flight food/beverages
                    when using your card.
                    Terms subject to change.</li>
                </ul>
                <p>
                    These perks can easily offset the $95 fee if you check bags or use the companion fare
                    at least once a year.
                </p>
            </section>

            {/* Section 7: No Foreign Transaction Fee & Global Coverage */}
            <section id="section-7" className={styles.reviewSection}>
                <h2>No Foreign Transaction Fee</h2> {/* Simplified heading */}
                <p>
                    The card has <b>no FTF</b>,
                    so you can safely swipe abroad or with foreign carriers
                    (especially helpful if you use Alaska’s global partners
                    like British Airways, Qantas, or Japan Airlines)
                    without an extra 3% tacked on.
                    As a Visa, acceptance is widespread,
                    making it convenient for international travel.
                </p>
            </section>

             {/* Section 8: Annual Fee & Welcome Bonus */}
             <section id="section-8" className={styles.reviewSection}>
                 <h2 dangerouslySetInnerHTML={{ __html: "Annual Fee &amp; Welcome Bonus" }}></h2>
                <p>
                    The <b>annual fee</b> is <strong>$95</strong> (not waived the first year, typically).
                    The welcome bonus might be <b>40k–70k miles</b> plus a companion fare
                    after meeting a spending threshold (often $2,000 in first 90 days).
                    The exact promotional details can vary, so always verify.
                    If you secure a 50k miles + companion fare bonus,
                    you might quickly get $700+ in flight value.
                    That’s huge for a $95 AF,
                    though you do pay the AF in your first billing cycles
                    unless a special promo says otherwise.
                </p>
            </section>

            {/* Section 9: 2025 Updates & Potential Changes */}
            <section id="section-9" className={styles.reviewSection}>
                 <h2 dangerouslySetInnerHTML={{ __html: "2025 Updates &amp; Potential Changes" }}></h2>
                <ol className={styles.numberedList}>
                    <li><strong>Companion Fare Pricing:</strong>
                    It might shift from $99 + taxes to another formula or dynamic approach.
                    Keep an eye on official announcements.</li>
                     {/* Using dangerouslySetInnerHTML for &amp; */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Earning Categories:</strong> Bank of America could expand 2x categories (like groceries or streaming) or revert them. Confirm your statement for the newest list."}}></li>
                    <li><strong>Partner Award Charts:</strong>
                    Alaska might revise partner award charts or remove sweet spots,
                    impacting redemption value.
                    They joined oneworld in 2021,
                    but 2025 might see new alliances or dynamic pricing changes.</li>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Lounge/Discount Codes:</strong> The $100 discount on lounge membership might become an annual statement credit or shift in structure. No guarantee, but watch for synergy with oneworld lounge access developments."}}></li>
                </ol>
                <p>
                    Because airline landscapes evolve,
                    always check official statements from Alaska or Bank of America
                    for the latest changes.
                </p>
            </section>

            {/* Section 10: Real-Life Example Table */}
             <section id="section-10" className={styles.reviewSection}>
                <h2>Real-Life Example: Family Savings</h2>
                <p>
                    Suppose you fly from Seattle to Hawaii once a year with a spouse.
                    Each ticket costs $400. You also each check a bag each way,
                    plus you do a short weekend trip to California with a single bag each.
                    Let’s see potential savings:
                </p>
                <div className={styles.tableContainer}>
                    <table className={styles.statsTable}>
                        <thead>
                            <tr>
                                <th>Benefit/Expense</th>
                                <th>Annual Count</th>
                                <th>Cost w/o Card</th>
                                <th>Cost w/ Card</th>
                                <th>Potential Savings</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td data-label="Benefit/Expense">Hawaii Flight (Companion Fare)</td>
                                <td data-label="Annual Count">2 tickets</td>
                                <td data-label="Cost w/o Card">$800 total ($400 each)</td>
                                <td data-label="Cost w/ Card">$400 + $99 + ~$23 tax/fees = ~$522</td>
                                <td data-label="Potential Savings">~$278</td>
                            </tr>
                            <tr>
                                <td data-label="Benefit/Expense">Bags to Hawaii</td>
                                <td data-label="Annual Count">2 round-trip x $30 each way = 4 bag fees</td>
                                <td data-label="Cost w/o Card">$120 total</td>
                                <td data-label="Cost w/ Card">$0 for first bag each</td>
                                <td data-label="Potential Savings">$120</td>
                            </tr>
                            <tr>
                                <td data-label="Benefit/Expense">Bags to California</td>
                                <td data-label="Annual Count">2 round-trip x $30 each = 4 fees</td>
                                <td data-label="Cost w/o Card">$120 total</td>
                                <td data-label="Cost w/ Card">$0 for first bag each</td>
                                <td data-label="Potential Savings">$120</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p>
                    That’s ~$518 in ticket/baggage savings,
                    overshadowing the $95 fee.
                    You also earn miles for each flight + 3x if you purchase with the card,
                    building your next award trip.
                    This scenario highlights the card’s synergy for at least 1–2 bigger trips a year.
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
                                <th>Primary Perk</th>
                                <th>Why Choose</th>
                            </tr>
                        </thead>
                        <tbody>
                             {/* Using dangerouslySetInnerHTML for ® &amp; */}
                            <tr dangerouslySetInnerHTML={{__html:'<td data-label="Card">Alaska Airlines Visa Signature®</td><td data-label="Annual Fee">$95</td><td data-label="Primary Perk">Companion fare, free checked bag</td><td data-label="Why Choose">Big saver on a BOGO flight &amp; strong mileage program</td>'}}></tr>
                             {/* Using dangerouslySetInnerHTML for ® */}
                            <tr dangerouslySetInnerHTML={{__html:'<td data-label="Card">Delta SkyMiles® Gold Amex</td><td data-label="Annual Fee">$0 intro, then ~$99</td><td data-label="Primary Perk">Free bag, priority boarding</td><td data-label="Why Choose">Better if you’re a Delta loyalist vs. Alaska</td>'}}></tr>
                             {/* Using dangerouslySetInnerHTML for ® */}
                            <tr dangerouslySetInnerHTML={{__html:'<td data-label="Card">Southwest Rapid Rewards® Plus/Premier</td><td data-label="Annual Fee">$69–$99</td><td data-label="Primary Perk">2x on Southwest purchases, unique bag policies (2 free bags anyway)</td><td data-label="Why Choose">Better for Southwest routes, but no companion fare akin to Alaska’s</td>'}}></tr>
                             {/* Using dangerouslySetInnerHTML for ® */}
                            <tr dangerouslySetInnerHTML={{__html:'<td data-label="Card">American Airlines AAdvantage® Platinum Select®</td><td data-label="Annual Fee">$99 (waived first year often)</td><td data-label="Primary Perk">Free bag, priority boarding</td><td data-label="Why Choose">AA fans, but lacks a strong companion discount like Alaska’s</td>'}}></tr>
                        </tbody>
                    </table>
                </div>
                <p>
                    If you primarily fly <b>Alaska</b>,
                    the companion fare easily outperforms competitor freebies.
                    Southwest has 2 free bags but no direct “companion fare”
                    unless you earn the Companion Pass via heavy flights/spending.
                    So for that specific BOGO opportunity,
                    Alaska’s card stands out in the airline space.
                </p>
            </section>

            {/* Section 12: Pairing with Bank of America or Other Cards */}
             <section id="section-12" className={styles.reviewSection}>
                <h2>Pairing the Alaska Card with Other Cards</h2>
                <p>
                    Bank of America has a “Preferred Rewards” program that can boost
                    credit card reward rates for certain BofA products,
                    but typically the Alaska card’s mileage structure is separate.
                    Still, if you have large balances with BofA,
                    you might get certain benefits or waived banking fees,
                    though the synergy is more general than specific to Alaska’s card.
                </p>
                <p>
                    If you want stronger everyday categories (groceries, streaming, etc.),
                    you might keep a separate card (like a 2% or 3% back card)
                    for daily purchases. Then use the Alaska card specifically
                    for flights, companion fare usage,
                    and those gas/transit categories if it’s 2x.
                    Also, for global lounge coverage or premium perks,
                    you might add an Amex Platinum or Chase Sapphire Reserve
                    while still using the Alaska card for flights
                    to ensure you get the free bag perk and 3x miles.
                </p>
            </section>

            {/* Section 13: Elite Status with Alaska & Card Benefits */}
             <section id="section-13" className={styles.reviewSection}>
                <h2 dangerouslySetInnerHTML={{ __html:"Elite Status with Alaska &amp; Card Benefits"}}></h2>
                <p>
                    If you want to achieve or maintain MVP, MVP Gold, or MVP Gold 75k (now 100k)
                    with Alaska, your flight activity is key.
                    The credit card itself does not directly accelerate status (like some other airlines might do with spend).
                    However, the card ensures you keep the free bag perk even if you’re not MVP,
                    plus the companion fare is useful for budget or personal trips.
                    Once you do hold status,
                    your miles on flights are multiplied further,
                    so combining a good flight schedule, MVP,
                    and the card can result in a large mileage bank quickly.
                </p>
            </section>

            {/* Section 14: Potential Downsides */}
            <section id="section-14" className={styles.reviewSection}>
                 <h2>Potential Downsides</h2>
                <ul className={styles.featureList}>
                    <li><strong>$95 Annual Fee (No Intro Waiver Usually):</strong>
                    You pay it right away, but hopefully recoup from the companion fare/bag perk.</li>
                    <li><strong>Limited 2x Categories:</strong>
                    Some might prefer broader 2x or 3x categories (like groceries/dining).
                    This card focuses on flight/gas/transit,
                    so consider a second card for everyday spend.</li>
                    <li><strong>No Lounge Passes Built-In:</strong>
                    You only get a discount on lounge membership sometimes,
                    not free passes. If you want frequent lounge visits,
                    consider Alaska Lounge membership or an alternative premium card.</li>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Companion Fare Still Has $99 + taxes:</strong> It’s not truly free—though it can be a huge discount if the second ticket is pricey. Some travellers expect a near-$0 second ticket and may be surprised by $120+ out-of-pocket fees."}}></li>
                </ul>
            </section>

            {/* Section 15: Advanced Usage Tips */}
             <section id="section-15" className={styles.reviewSection}>
                <h2>Advanced Usage Tips</h2>
                <ol className={styles.numberedList}>
                    <li><strong>Maximize Companion Fare:</strong>
                    Try using it on a route where the second ticket is $400+ to see big savings.
                    Also, book early if it’s a popular route, as seat availability can be limited.</li>
                    <li><strong>Check Partner Redemption Sweet Spots:</strong>
                    Alaska miles can be amazing for flights on Japan Airlines, Cathay Pacific, or Qantas.
                    Watch for multi-city or stopover deals to get more out of each redemption.</li>
                    <li><strong>Use Gas/Transit for 2x:</strong>
                    If you commute or spend heavily on rideshares, that can accelerate your mile earnings.
                    This can offset not having a separate gas card if you do big monthly fill-ups.</li>
                    <li><strong>Calendar the Companion Fare Expiration:</strong>
                    The annual companion fare codes typically expire after a year.
                    Mark your renewal date to ensure you don’t let it go to waste.</li>
                    <li><strong>Combine with Another Travel Card:</strong>
                    If you have an Amex Gold or Chase Sapphire for broad categories,
                    you can funnel flights to the Alaska card for 3x on Alaska purchases,
                    ensuring the free bag triggers.
                    Then use your other card for groceries/dining if you want 3–4x there.
                    This synergy can yield more total points across programs.</li>
                </ol>
            </section>

             {/* Section 16: Another Real-Life Scenario */}
             <section id="section-16" className={styles.reviewSection}>
                <h2 dangerouslySetInnerHTML={{ __html:"Another Real-Life Scenario: Frequent Gas &amp; Seattle Flyer"}}></h2>
                <p>
                    Suppose you drive a lot and fill up $250 monthly on gas,
                    also do $1,000 on Alaska flights yearly,
                    $500 on local transit/rideshares,
                    and $6,000 on everything else.
                    Here’s approximate annual mileage:
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
                                <td data-label="Category">Alaska Flights</td>
                                <td data-label="Annual Spend">$1,000</td>
                                <td data-label="Miles per $">3x</td>
                                <td data-label="Miles Earned">3,000</td>
                            </tr>
                            <tr>
                                <td data-label="Category">Gas</td>
                                <td data-label="Annual Spend">$3,000 ($250×12)</td>
                                <td data-label="Miles per $">2x</td>
                                <td data-label="Miles Earned">6,000</td>
                            </tr>
                            <tr>
                                <td data-label="Category">Transit/Rideshare</td>
                                <td data-label="Annual Spend">$500</td>
                                <td data-label="Miles per $">2x</td>
                                <td data-label="Miles Earned">1,000</td>
                            </tr>
                            <tr>
                                <td data-label="Category">All Else</td>
                                <td data-label="Annual Spend">$6,000</td>
                                <td data-label="Miles per $">1x</td>
                                <td data-label="Miles Earned">6,000</td>
                            </tr>
                            <tr style={{fontWeight: 'bold', borderTop: '2px solid #dee2e6'}}>
                                <th data-label="Category">Total</th>
                                <th data-label="Annual Spend">$10,500</th>
                                <th data-label="Miles per $">—</th>
                                <th data-label="Total Points">16,000</th>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p>
                    That’s ~16,000 miles from spend alone,
                    plus flight miles earned from actually flying (which can be another ~1k–2k miles).
                    Add in the <b>companion fare</b> on a $400 route,
                    free bag or two, and you can easily justify the $95 AF
                    if you’re an Alaska loyalist.
                </p>
            </section>

            {/* Section 17: Who Should Get the Card? */}
            <section id="section-17" className={styles.reviewSection}>
                 <h2 dangerouslySetInnerHTML={{ __html:"Who Should Get the Alaska Airlines Visa Signature® Card?"}}></h2>
                <div className={styles.prosCons}>
                    <div className={styles.pros}>
                        <h3>Ideal For:</h3>
                        <ul className={styles.featureList}>
                            <li><strong>Alaska Airlines Loyalists:</strong>
                            If you regularly fly Alaska or its oneworld partners from a West Coast or PNW hub</li>
                            <li><strong>Seeking a Generous Companion Fare:</strong>
                            Possibly the best “annual BOGO” among airline cards for domestic flights</li>
                            <li><strong>Families/Groups:</strong>
                            Free first bag can apply up to 6 companions—big savings if traveling in groups</li>
                            <li><strong>Moderate Annual Fee:</strong>
                            $95 is not too high, easily offset by 1–2 round trips with checked bags</li>
                        </ul>
                    </div>
                    <div className={styles.cons}>
                        <h3>No, If You:</h3>
                        <ul className={styles.featureList}>
                            <li><strong>Rarely Fly Alaska</strong> or you live in a region with minimal Alaska routes</li>
                            <li>Want <strong>Premium Lounge Access</strong> or more robust benefits (like a top-tier “club” card)
                            with unlimited lounge visits</li>
                            <li>Desire <strong>Higher Earning on Everyday Categories</strong>
                            (like 3–4x on groceries/dining—this card only does 1x or 2x on select categories)</li>
                            <li>Need <strong>Global Alliance Reciprocity</strong>
                            with bigger airline coverage (like Delta or AA, though Alaska does have many partners,
                            it’s not as large as some alliances historically)</li>
                        </ul>
                    </div>
                </div>
            </section>

             {/* Section 18: Disclaimers & Fine Print */}
             <section id="section-18" className={styles.reviewSection}>
                 <h2 dangerouslySetInnerHTML={{ __html:"Disclaimers &amp; Fine Print"}}></h2>
                 {/* Using dangerouslySetInnerHTML for ® &amp; */}
                <p dangerouslySetInnerHTML={{ __html:"Always confirm the current sign-up bonus, APR, and specific 2x categories on the official Bank of America or Alaska Airlines websites. The <b>companion fare</b> typically requires you to purchase an Alaska flight with your card to use it, and seat availability can be limited. Taxes &amp; fees from ~$23 are in addition to the $99 companion cost. Free checked bag requires you to have the card open and use it for the flight purchase. Baggage fees and lounge membership discounts can change at any time. Also note that if you revolve a balance, interest charges may overshadow any flight perks. This card typically requires good-excellent credit for approval."}}></p>
            </section>

             {/* Section 19 (was 20): Final Thoughts */}
             <section id="section-19" className={styles.reviewSection}>
                 <h2 dangerouslySetInnerHTML={{ __html:"Final Thoughts: Is the Alaska Airlines Visa Signature® Worth It?"}}></h2>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{ __html:"If you fly Alaska even once or twice a year—especially with a companion— the <strong>Alaska Airlines Visa Signature® Card</strong> can pay off easily via the <b>companion fare</b> and free bags. At a modest $95 annual fee, the BOGO ticket alone can yield several hundred dollars in savings. You’ll also accumulate miles (often more valuable than some other airline programs), redeemable on a wide range of carriers from American to Qantas. The 3x on Alaska flights and 2x on gas/transit is a decent way to top off your mileage account quickly."}}></p>
                <p>
                    If you rarely use Alaska or live in a region they don’t serve much,
                    you might not maximize the card’s perks.
                    But for West Coast flyers or those who appreciate
                    a global partner network with creative routing options,
                    it’s a top competitor.
                    Add in the intangible perks of priority boarding
                    and the potential lounge membership discount,
                    and you have a robust airline card
                    that’s easy to justify year after year—
                    as long as you leverage that precious companion fare annually.
                </p>
            </section>

             {/* Section 20 (was E-A-T): E-A-T Statement */}
             <section id="section-20" className={`${styles.reviewSection} ${styles.eatSection}`}>
                 <h2 dangerouslySetInnerHTML={{ __html: "Our Commitment to E-A-T: Expertise, Authority, Trustworthiness"}}></h2>
                 {/* Using E-A-T text adapted for Alaska Card */}
                <p>
                    At <strong>TravelCardInsider</strong>,
                    we emphasize accurate, thorough credit card reviews for airline loyalty.
                    Our approach follows Google’s E‑A‑T (Expertise, Authority, Trustworthiness):
                </p>
                <h3>1. Expertise</h3>
                <ul className={styles.featureList}>
                    <li><strong>Alaska Flyer Insights:</strong>
                    Our reviewers include frequent Alaska travelers
                    who leverage the companion fare in real scenarios and understand Mileage Plan nuances.</li>
                     {/* Using dangerouslySetInnerHTML for &amp; */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Up-to-Date Research:</strong> We revise this piece when Bank of America or Alaska alters mileage categories, lounge discounts, or the companion fare structure."}}></li>
                    <li><strong>Practical Testing:</strong>
                    We’ve used the card for flights, tracked baggage fee waivers,
                    and redeemed miles for partner flights to confirm real-world value.</li>
                </ul>
                <h3>2. Authority</h3>
                <ul className={styles.featureList}>
                    {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>In-Depth Content:</strong> Our 2,000-word coverage addresses from sign-up bonuses to advanced redemption strategies for the Alaska Airlines Visa Signature® Card."}}></li>
                    <li><strong>Recognized by Industry:</strong>
                    We’re often referenced by travel/finance media
                    for unbiased airline card evaluations.</li>
                    <li><strong>Transparency:</strong>
                    If we earn commissions from affiliate links, we disclose that,
                    preserving editorial independence.</li>
                </ul>
                <h3>3. Trustworthiness</h3>
                <ul className={styles.featureList}>
                    <li><strong>Independent Ratings:</strong>
                    Advertisers do not dictate our star rating or final verdict.</li>
                    <li><strong>Reader-Driven Updates:</strong>
                    We welcome user comments on real experiences,
                    shaping ongoing accuracy and clarity.</li>
                    <li><strong>Frequent Edits:</strong>
                    We promptly modify content if major policy changes occur
                    (e.g., new companion fare rules or bag fees).</li>
                     {/* Using Link component for internal link */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Privacy &amp; Data Security:</strong> As per our <a href='/privacy-policy'>Privacy Policy</a>, we safeguard user data from any subscriptions or feedback forms."}}>
                        {/* Corrected to use Next/Link for internal routing */}
                        {/* <strong>Privacy &amp; Data Security:</strong> As per our <Link href="/privacy-policy"><a>Privacy Policy</a></Link>, we safeguard user data from any subscriptions or feedback forms. */}
                    </li>
                </ul>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{ __html: "By adhering to E-A-T, we aim to provide a reliable, user-focused review so you can confidently decide if the Alaska Visa Signature® Card is your next move."}}></p>
            </section>

          </article>
        </div> {/* Close reviewContainer */}
      </main>

      <Footer />
    </>
  );
}

export default AlaskaVisaSignatureReviewPage;