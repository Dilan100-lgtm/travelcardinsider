// Example Path: pages/reviews/united-business-card.js
// Or: pages/reviews/[slug].js (if using dynamic routing with 'united-business-card' as slug)

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
  cardName: 'United℠ Business Card',
  title: 'United℠ Business Card – In-Depth 2025 Review',
  description: 'A 2000-word review of the United℠ Business Card, covering benefits, perks, lounge passes, 2025 updates, business usage tips, pros, and cons.',
  keywords: 'United Business, credit card, airline miles, business travel, 2025 review',
  author: 'TravelCardInsider', // *** REPLACE with your actual author/site name ***
  imageUrl: '/united_biz_card.png', // *** VERIFY PATH in /public ***
  ratingValue: 7.9, // From United Biz HTML
  applyLink: 'https://creditcards.chase.com/business-credit-cards/united/united-business-card', // *** REPLACE with actual United Biz APPLY URL ***
  ratesLink: 'https://sites.chase.com/services/creatives/pricingandterms.html/content/dam/pricingandterms/LGC57969.html', // *** VERIFY URL ***
  // Image dimensions (MUST BE ACCURATE for next/image)
  imageWidth: 480, // *** REPLACE with actual image width *** (Example Placeholder)
  imageHeight: 304, // *** REPLACE with actual image height *** (Example Placeholder)
};

// --- Rating Tooltip Content (Customize if needed for United Biz) ---
const ratingCriteria = [ // *** VERIFY/CUSTOMIZE these criteria for United Biz Rating ***
    'United Miles Earning (2x Categories)',
    'Free Checked Bag Perk',
    'Annual Lounge Passes (2)',
    'Welcome Bonus Value',
    'Annual Fee ($99 / $0 Intro)'
];

function UnitedBusinessCardReviewPage() {
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
  // !!! VERIFY all URLs, counts, and details FOR UNITED BIZ CARD !!!
  const siteUrl = "https://www.travelcardinsider.com"; // *** REPLACE with your actual site URL ***
  const pageUrl = `${siteUrl}/cards/united-business-card`; // *** REPLACE with your actual page URL ***
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "United℠ Business Card",
    "image": `${siteUrl}${reviewData.imageUrl}`, // *** Assuming imageUrl starts with / ***
    "description": "The United℠ Business Card from Chase offers 2x miles on business categories, free checked bags, lounge passes, and more for entrepreneurs flying with United.", // Adjusted description
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
      "ratingCount": 650, // *** REPLACE with actual or estimated count ***
      "reviewCount": 650  // *** REPLACE with actual or estimated count ***
    },
    "offers": {
      "@type": "Offer",
      "url": reviewData.applyLink.startsWith('http') ? reviewData.applyLink : `${siteUrl}${reviewData.applyLink}`, // *** Ensure full APPLY URL ***
      "priceCurrency": "USD",
      "price": "99", // Regular Annual Fee for United Biz
      // Could add Offer notes about $0 intro fee if schema supports
      "availability": "https://schema.org/InStock",
      "itemCondition": "https://schema.org/NewCondition"
    }
    // Consider adding "provider": { "@type": "Organization", "name": "United Airlines" }
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
        <div style={{ marginTop: '2rem' }}></div> {/* Adjusted margin from HTML */}

        {/* Review Container using CSS Module */}
        <div className={styles.reviewContainer}>
          <article> {/* Wrap main content in article */}
            {/* ============= REVIEW HEADER ============= */}
            <header className={styles.reviewHeader}>
              <h1 dangerouslySetInnerHTML={{ __html: "United℠ Business Card – In-Depth 2025 Review"}}></h1>

              {/* Section 1 Content (Part of Header Structure in Template) */}
              <section id="section-1">
                 {/* Using dangerouslySetInnerHTML for ℠ & ® */}
                <div className={styles.intro}>
                   <p dangerouslySetInnerHTML={{ __html:"The <strong>United℠ Business Card</strong> is an excellent solution for small to medium-sized businesses whose owners or staff frequently fly with United Airlines. It offers <b>2 miles per $1</b> on key business categories, <b>priority boarding</b>, <b>free checked bags</b>, and <b>annual lounge passes</b>. Whether you’re traveling for client meetings or shipping products, the synergy between everyday spending categories and airline benefits can substantially cut your annual travel costs by 2025. In this review, we’ll break down 20 sections, exploring everything from quick stats to disclaimers so you can decide if the <b>United℠ Business Card</b> is right for your enterprise."}}></p>
                </div>

                {/* Image Container */}
                <div className={styles.cardImageContainer}>
                  {/* Corrected class name */}
                   <Image
                     src={reviewData.imageUrl}
                     alt={"United℠ Business Card"}
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
                    <i>An easy, business-oriented airline card offering solid United perks and 2x categories at a moderate annual fee.</i>
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
                                <td data-label="Details">$99 (often waived first year)</td>
                            </tr>
                            <tr>
                                <td data-label="Feature">APR</td>
                                <td data-label="Details" dangerouslySetInnerHTML={{__html:"20.24% – 27.24% Variable"}}></td>
                            </tr>
                             {/* Using dangerouslySetInnerHTML for ® */}
                            <tr dangerouslySetInnerHTML={{__html:'<td data-label="Feature">Sign-Up Bonus</td><td data-label="Details">Typically ~75k miles after $5k spend in 3 months</td>'}}></tr>
                            {/* Using dangerouslySetInnerHTML for ® */}
                            <tr dangerouslySetInnerHTML={{__html:'<td data-label="Feature">Rewards Rate</td><td data-label="Details">2x on United, dining, gas stations, local transit, rideshare, office supply stores; 1x elsewhere</td>'}}></tr>
                            <tr>
                                <td data-label="Feature">Foreign Transaction Fee</td>
                                <td data-label="Details">None</td>
                            </tr>
                             {/* Using dangerouslySetInnerHTML for ® */}
                            <tr dangerouslySetInnerHTML={{__html:'<td data-label="Feature">Free First Checked Bag</td><td data-label="Details">Yes, for cardholder + 1 companion on same reservation</td>'}}></tr>
                            <tr>
                                <td data-label="Feature">Lounge Access</td>
                                <td data-label="Details">2 United Club passes per year</td>
                            </tr>
                             {/* Using dangerouslySetInnerHTML for ® */}
                            <tr dangerouslySetInnerHTML={{__html:'<td data-label="Feature">Priority Boarding</td><td data-label="Details">Yes, Group 2 boarding on United flights</td>'}}></tr>
                        </tbody>
                    </table>
                </div>
            </section>

             {/* CTA Section */}
             <section id="cta" className={styles.ctaSection}>
                <h2 dangerouslySetInnerHTML={{__html:"Get the <b>United℠ Business Card</b> Today!"}}></h2>
                <div className={styles.ctaButtons}>
                    <a href={reviewData.applyLink} className={`${styles.btn} ${styles.btnApply}`} title="From card issuer's secure site" target="_blank" rel="noopener noreferrer sponsored">Apply Now</a>
                     {/* Using dangerouslySetInnerHTML for &amp; */}
                    <a href={reviewData.ratesLink} className={`${styles.btn} ${styles.btnRates}`} target="_blank" rel="noopener noreferrer sponsored" dangerouslySetInnerHTML={{__html:"See Rates &amp; Fees"}}></a>
                </div>
            </section>

            {/* Section 3: Card Overview & Positioning */}
             <section id="section-3" className={styles.reviewSection}>
                <h2 dangerouslySetInnerHTML={{ __html:"Card Overview &amp; Positioning"}}></h2>
                 {/* Using dangerouslySetInnerHTML for ℠ */}
                <p dangerouslySetInnerHTML={{ __html:"The <strong>United℠ Business Card</strong> stands at a moderate fee (<strong>$99</strong>, sometimes waived first year) offering a blend of airline perks (like free bags, 2 lounge passes, priority boarding) plus <b>2x miles</b> on relevant business categories (dining, gas, office supplies, local transit). If your enterprise or staff frequently choose United for domestic or international routes, this synergy can be highly cost-effective, especially if you combine it with other <b>Chase</b> or <b>United</b>-branded loyalty elements. In 2025, the airline credit card scene is competitive, but the United Business Card’s broad 2x categories remain a strong reason to pick it for your routine overhead and travel spending."}}></p>
            </section>

            {/* Section 4: Earning Miles & Category Focus */}
             <section id="section-4" className={styles.reviewSection}>
                <h2 dangerouslySetInnerHTML={{ __html:"Earning Miles &amp; Category Emphasis"}}></h2>
                <p>
                    The card’s main differentiator is its <b>2x miles</b> approach:
                </p>
                <ul className={styles.featureList}>
                    <li><strong>2x miles on United purchases</strong>:
                    This includes tickets bought from United, seat upgrades, in-flight services, baggage fees, etc.</li>
                    <li><strong>2x miles on dining</strong>:
                    Perfect for business lunches/dinners or traveling employees’ meal expenses.</li>
                    <li><strong>2x miles on gas stations</strong>:
                    If your staff or you frequently drive for local business operations.</li>
                     {/* Using dangerouslySetInnerHTML for &amp; */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>2x miles on local transit/rideshare</strong>: Taxis, rideshare services like Uber/Lyft, commuter rail, etc."}}></li>
                    <li><strong>2x miles on office supply stores</strong>:
                    Staples, Office Depot, or local supply vendors, helpful for day-to-day overhead.</li>
                    <li><strong>1x miles on everything else</strong></li>
                </ul>
                 {/* Using dangerouslySetInnerHTML for ℠ */}
                <p dangerouslySetInnerHTML={{ __html:"By capturing multiple business-centric categories, the <b>United℠ Business Card</b> can be your primary card for overhead while also rewarding your airline loyalty. This is more flexible than some co-branded airline cards, which limit 2x primarily to that airline alone. Over an entire year, you can accumulate miles quickly just from typical office or travel expenses before even factoring in flights."}}></p>
            </section>

            {/* Section 5: Redeeming United Miles */}
            <section id="section-5" className={styles.reviewSection}>
                <h2>Redeeming Your United Miles</h2>
                 {/* Using dangerouslySetInnerHTML for ℠ ® */}
                <p dangerouslySetInnerHTML={{ __html:"Miles earned feed into your <b>United MileagePlus®</b> account. Popular redemptions include:"}}></p>
                <ol className={styles.numberedList}>
                     {/* Using dangerouslySetInnerHTML for &amp; */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>United Award Flights:</strong> Domestic or international on United or Star Alliance partners (like Lufthansa, SWISS, Air Canada). Check for saver awards or “Everyday Awards,” though dynamic pricing has made exact mileage charts less transparent."}}></li>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Star Alliance Partners:</strong> Redeem on Lufthansa, ANA, Swiss, etc. at set mileage levels. Sometimes you’ll find sweet spots if you research partner routes."}}></li>
                     {/* Using dangerouslySetInnerHTML for &amp; */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Upgrades &amp; More:</strong> Possibly redeem miles for seat upgrades or other experiences. Typically, flights yield the best value, but your usage may vary."}}></li>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Other Options (gift cards, experiences):</strong> These often yield lower value. If your main aim is free flights, stick to award tickets or upgrades."}}></li>
                </ol>
                 {/* Using dangerouslySetInnerHTML for ℠ */}
                <p dangerouslySetInnerHTML={{ __html:"The card doesn’t directly offer a special redemption portal. You use your miles in your United account. So if you’re comfortable with airline miles, the Gateway℠ is an easy accrual tool—particularly with no annual fee dragging down your net gains."}}></p>
                 {/* !!! ATTENTION: Paragraph above refers to "Gateway" card, likely a copy/paste error. Should refer to United Business Card. !!! */}
            </section>

             {/* Section 6: Sign-Up Bonus & Potential Offers */}
             <section id="section-6" className={styles.reviewSection}>
                <h2 dangerouslySetInnerHTML={{ __html:"Sign-Up Bonus &amp; Potential Offers"}}></h2>
                 {/* Using dangerouslySetInnerHTML for ℠ */}
                <p dangerouslySetInnerHTML={{ __html:"Typically, the <b>United℠ Business Card</b> sign-up bonus revolves around <b>75,000 miles</b> after a certain spend threshold (e.g., $5,000 in 3 months). Sometimes, limited-time promotions push it to 100k or add a statement credit. This can drastically jumpstart your business’s mileage balance. If you redeem those miles for a few round-trip flights to Europe in economy, for example, you’re recouping well above the cost of the annual fee. Especially if your staff or you regularly route through United’s hub cities (EWR, ORD, DEN, IAH, SFO, LAX, etc.), that initial mileage stash might cover multiple domestic or one big international trip. Keep watch for cyclical marketing pushes that might sweeten the welcome bonus in 2025."}}></p>
            </section>

             {/* Section 7: No Foreign Transaction Fee & Global Use */}
             <section id="section-7" className={styles.reviewSection}>
                <h2 dangerouslySetInnerHTML={{ __html:"No Foreign Transaction Fee &amp; Global Use"}}></h2>
                 {/* Using dangerouslySetInnerHTML for ℠ */}
                <p dangerouslySetInnerHTML={{ __html:"Chase typically issues United cards on the Visa or Visa Signature platform, meaning <b>no foreign transaction fees</b> is a standard perk. This is essential if your employees travel abroad or shop from international vendors. Visa is widely accepted worldwide, so if you buy supplies from overseas or pay for lodging at foreign conferences, you avoid the typical 3% surcharge. This can yield significant savings if your business has global footprints or staff traveling frequently for expansions or trade shows. In 2025’s increasingly borderless marketplace, acceptance rarely becomes an issue, making this card convenient for international usage."}}></p>
            </section>

            {/* Section 8: 2025 Updates & Potential Changes */}
            <section id="section-8" className={styles.reviewSection}>
                 <h2 dangerouslySetInnerHTML={{ __html:"2025 Updates &amp; Potential Changes"}}></h2>
                <ol className={styles.numberedList}>
                    <li><strong>Lounge Access Policy:</strong>
                    Currently, 2 United Club℠ one-time passes are standard.
                    If lounge overcrowding intensifies, we might see adjustments to usage or pass frequency.</li>
                    <li><strong>Enhanced 2x Categories:</strong>
                    Chase might add more specialized business categories or raise them to 3x for certain promotions.
                    Always check official updates if spending patterns shift in 2025.</li>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Sign-Up Bonus Fluctuations:</strong> We could see occasional limited-time 90k–100k mile bonuses. If you see a bigger offer, it might be the prime time to apply or upgrade."}}></li>
                    <li><strong>Annual Fee Adjustments:</strong>
                    $99 might remain stable or shift slightly if new perks (like additional lounge passes or statement credits) are introduced.
                    Monitoring official announcements is key.</li>
                </ol>
                <p>
                    As with any airline card, terms evolve.
                    Stay alert for United’s loyalty program changes or added benefits that might appear to remain competitive with other airlines in 2025’s travel environment.
                </p>
            </section>

             {/* Section 9: Real-Life Example Table */}
             <section id="section-9" className={styles.reviewSection}>
                <h2>Real-Life Example: Annual Spend & Miles Accrued</h2>
                 {/* Using dangerouslySetInnerHTML for ℠ */}
                <p dangerouslySetInnerHTML={{ __html:"Suppose your business invests:"}}></p>
                <ul className={styles.featureList}>
                    <li>$4,000 on United flights annually</li>
                    <li>$3,000 at office supply stores</li>
                    <li>$2,000 on gas stations for company vehicles</li>
                    <li>$2,000 on dining (client lunches, team dinners)</li>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"$1,000 on local transit/rideshares"}}></li>
                    <li>$15,000 everything else at 1x</li>
                </ul>
                 {/* Using dangerouslySetInnerHTML for ℠ */}
                <p dangerouslySetInnerHTML={{ __html:"Let’s calculate your miles:"}}></p>
                <div className={styles.tableContainer}>
                    <table className={styles.statsTable}>
                        <thead>
                            <tr>
                                <th>Category</th>
                                <th>Annual Spend</th>
                                <th>Miles per $</th>
                                <th>Total Miles</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td data-label="Category">United Flights</td>
                                <td data-label="Annual Spend">$4,000</td>
                                <td data-label="Miles per $">2x</td>
                                <td data-label="Total Miles">8,000</td>
                            </tr>
                            <tr>
                                <td data-label="Category">Office Supply Stores</td>
                                <td data-label="Annual Spend">$3,000</td>
                                <td data-label="Miles per $">2x</td>
                                <td data-label="Total Miles">6,000</td>
                            </tr>
                            <tr>
                                <td data-label="Category">Gas Stations</td>
                                <td data-label="Annual Spend">$2,000</td>
                                <td data-label="Miles per $">2x</td>
                                <td data-label="Total Miles">4,000</td>
                            </tr>
                            <tr>
                                <td data-label="Category">Dining</td>
                                <td data-label="Annual Spend">$2,000</td>
                                <td data-label="Miles per $">2x</td>
                                <td data-label="Total Miles">4,000</td>
                            </tr>
                            <tr>
                                <td data-label="Category">Local Transit</td>
                                <td data-label="Annual Spend">$1,000</td>
                                <td data-label="Miles per $">2x</td>
                                <td data-label="Total Miles">2,000</td>
                            </tr>
                            <tr>
                                <td data-label="Category">Everything Else</td>
                                <td data-label="Annual Spend">$15,000</td>
                                <td data-label="Miles per $">1x</td>
                                <td data-label="Total Miles">15,000</td>
                            </tr>
                            <tr style={{fontWeight: 'bold', borderTop: '2px solid #dee2e6'}}>
                                <th data-label="Category">Total</th>
                                <th data-label="Annual Spend">$27,000</th>
                                <th data-label="Miles per $">—</th>
                                <th data-label="Total Points">39,000</th>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p>
                    That’s <b>39,000</b> miles from normal spend.
                    If you also meet a sign-up bonus of 75,000 miles,
                    that’s <b>114,000</b> miles total.
                    This can significantly offset your next flights,
                    especially if you find saver award flights.
                    Factoring in the potential for free bag savings and lounge passes,
                    the card’s net cost is quickly justified.
                </p>
            </section>

             {/* Section 10: Competitor Analysis */}
             <section id="section-10" className={styles.reviewSection}>
                <h2>Competitor Analysis</h2>
                 {/* Using dangerouslySetInnerHTML for ℠ */}
                <p dangerouslySetInnerHTML={{ __html:"Comparing the <b>United℠ Business Card</b> with other airline business cards:"}}></p>
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
                            <tr dangerouslySetInnerHTML={{__html:'<td data-label="Card">United℠ Business Card</td><td data-label="Annual Fee">$99</td><td data-label="Rewards">2x on United, dining, gas, local transit, office supplies; 1x else</td><td data-label="Key Advantage">2 lounge passes, priority boarding, free bag, moderate fee</td>'}}></tr>
                            {/* Using dangerouslySetInnerHTML for ® */}
                            <tr dangerouslySetInnerHTML={{__html:'<td data-label="Card">Delta SkyMiles® Platinum Business</td><td data-label="Annual Fee">$250</td><td data-label="Rewards">3x on Delta, hotels, shipping; 1.5x large purchases promos</td><td data-label="Key Advantage">Annual companion certificate (main cabin), partial lounge discount</td>'}}></tr>
                             {/* Using dangerouslySetInnerHTML for ® */}
                            <tr dangerouslySetInnerHTML={{__html:'<td data-label="Card">AA Business (Citi/Barclays) Cards</td><td data-label="Annual Fee">$99–$450 range</td><td data-label="Rewards">2x on AA or select categories, free bag, Group 1 boarding</td><td data-label="Key Advantage">Cheaper or more expensive depending on lounge versions, purely AA-based</td>'}}></tr>
                             {/* Using dangerouslySetInnerHTML for ® */}
                            <tr dangerouslySetInnerHTML={{__html:'<td data-label="Card">Southwest® Performance Business</td><td data-label="Annual Fee">$199</td><td data-label="Rewards">3x on Southwest, 2x on social ads/internet, in-flight Wi-Fi credits</td><td data-label="Key Advantage">Ideal for domestic travelers seeking Southwest’s two-bags-free policy</td>'}}></tr>
                        </tbody>
                    </table>
                </div>
                 {/* Using dangerouslySetInnerHTML for ℠ */}
                <p dangerouslySetInnerHTML={{ __html:"If your loyalty is with <b>United Airlines</b>, the <b>United℠ Business Card</b> stands out with the best lounge coverage and airline perks. If you prefer a different airline or want heavier multipliers, another co-branded or general travel card might suffice. But for a moderate fee and consistent 2x categories, <b>United℠ Business</b> is a strong choice in 2025 if your staff frequently travels via United’s network."}}></p>
                 {/* !!! ATTENTION: Paragraph above says United Biz has "best lounge coverage". Source HTML for Quick Stats lists only 2 passes/year. This seems contradictory. Verify text. !!! */}
            </section>

             {/* Section 11: Synergy with Other Chase or United Cards */}
             <section id="section-11" className={styles.reviewSection}>
                 <h2>Synergy with Other Chase or United Products</h2>
                <p>
                    <strong>Chase</strong> offers a broad ecosystem:
                </p>
                <ul className={styles.featureList}>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Chase Ink Business Cards:</strong> If you hold an Ink Business Preferred (3x on certain categories) or Ink Cash, you cannot directly combine “Ultimate Rewards” with United miles 1:1. However, you might convert UR points to miles if you have a personal Sapphire &gt; partner airline approach. It’s simpler to keep the United miles separate if you prefer a direct co-branded approach."}}></li>
                     {/* Using dangerouslySetInnerHTML for ℠ ® */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>United Quest℠ or Club℠ Cards (Personal):</strong> Some business owners also hold a personal premium United card for additional lounge access or bigger perks. Evaluate if you need more lounge passes or an actual United Club membership (Club Card ~ $525 fee). The United Business card’s 2 annual passes might suffice for occasional lounge visits. If you want unlimited visits, consider the more premium personal or business versions (like the $450–$525 range for a Club membership approach)."}}></li>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Employee Cards:</strong> Additional employee cards are typically free, letting staff also earn miles at the same 2x categories. This can exponentially speed up your mileage accrual if multiple employees charge business dining, transit, or office supplies to the account. Just keep an eye on authorized user oversight and statements."}}></li>
                </ul>
                 {/* Using dangerouslySetInnerHTML for ℠ */}
                <p dangerouslySetInnerHTML={{ __html:"For small to medium enterprises, the <b>United℠ Business Card</b> can be your central airline solution. If you also want general 1.5–2x on everything, you might pair it with an Ink or other no-fee card. But the synergy primarily benefits if you’re loyal to United’s route network or Star Alliance partnerships."}}></p>
            </section>

            {/* Section 12: Additional Benefits & Travel Protections */}
             <section id="section-12" className={styles.reviewSection}>
                <h2 dangerouslySetInnerHTML={{ __html:"Additional Benefits &amp; Travel Protections"}}></h2>
                 {/* Using dangerouslySetInnerHTML for ℠ */}
                <p dangerouslySetInnerHTML={{ __html:"Key perks of the <b>United℠ Business Card</b> often include:"}}></p>
                <ul className={styles.featureList}>
                    <li><strong>Free First Checked Bag:</strong>
                    For you + a companion on the same reservation if you purchase the ticket with the card.
                    This can save $60 round trip per person on domestic routes ($30 each way).
                    Even more valuable on international flights where bag fees can be higher.</li>
                    <li><strong>Priority Boarding (Group 2):</strong>
                    Ensures overhead bin space and less boarding chaos for you or your staff.</li>
                     {/* Using dangerouslySetInnerHTML for ℠ */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Two United Club℠ One-Time Passes Annually:</strong> Perfect for occasional lounge visits. Each pass can be valued at ~$59 if purchased at the door, so that’s ~$118 in potential lounge savings per year. Not unlimited access, but good for a couple of big trips."}}></li>
                    <li><strong>25% Back on United In-Flight Purchases:</strong>
                    E.g., Wi-Fi, food, drinks.
                    Offsets overhead for traveling staff who need onboard connectivity or meals.</li>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Trip Cancellation/Interruption Insurance:</strong> Typically up to $1,500 or more if a trip is disrupted by covered reasons. Great for business owners mitigating last-minute changes or client cancellations."}}></li>
                     {/* Using dangerouslySetInnerHTML for &amp; */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Primary Auto Rental Collision Damage Waiver (CDW):</strong> If renting for business purposes, coverage can be primary (subject to T&amp;C) when you decline the rental company’s insurance. Potential cost savings and peace of mind on business road trips."}}></li>
                </ul>
                <p>
                    These features revolve around reducing your out-of-pocket costs
                    and streamlining business travel under the <b>United</b> brand.
                    If your employees or you only occasionally need lounge visits,
                    the 2 annual passes will suffice—
                    a sweet perk at a fraction of more premium card fees.
                </p>
            </section>

            {/* Section 13: APR & Paying Balances */}
            <section id="section-13" className={styles.reviewSection}>
                <h2 dangerouslySetInnerHTML={{ __html:"APR &amp; Paying Balances"}}></h2>
                 {/* Using dangerouslySetInnerHTML for ℠ */}
                <p dangerouslySetInnerHTML={{ __html:"The United℠ Business Card often has an APR range from <b>20.24%</b> up to <b>27.24%</b> variable, depending on your credit profile. With such high rates, it’s generally best to pay in full monthly. If you must occasionally revolve a balance for short-term cash flow, weigh the interest cost carefully— interest can erode your miles’ value quickly. For larger or longer financing needs, a dedicated business loan or a 0% intro APR product might be better than incurring 20%+ on a business credit card. The real strength of this card is travel rewards, not cheap financing."}}></p>
            </section>

            {/* Section 14: Potential Downsides */}
            <section id="section-14" className={styles.reviewSection}>
                 <h2>Potential Downsides</h2>
                <ul className={styles.featureList}>
                    <li><strong>$99 Annual Fee</strong>:
                    Not huge, but if you rarely fly United or you fail to redeem lounge passes,
                    you might not offset the cost.
                    Some competing airline cards also come in under $99, or have different perks.</li>
                     {/* Using dangerouslySetInnerHTML for ℠ */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Limited Lounge Visits</strong>: Only 2 passes per year. If your staff or you want unlimited lounge usage, consider a more premium card (like United Club℠ or a general travel card with Priority Pass/Amex lounge network)."}}></li>
                    <li><strong>1x Rate on Non-Bonus Spend</strong>:
                    If large sums are in categories outside the 2x scope, you might prefer a 1.5–2x flat-rate business card.
                    Keep an eye on synergy with other Chase or no-fee solutions if you want higher base earnings.</li>
                    <li><strong>Primarily Tied to United</strong>:
                    If your business sometimes uses other airlines (AA, Delta, Southwest),
                    the United perks are less helpful.
                    You also can’t easily transfer these miles to other carriers outside Star Alliance co-share redemptions.</li>
                     {/* Using dangerouslySetInnerHTML for ℠ */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>MQD/Status Not Directly Boosted</strong>: This card doesn’t provide Premier Qualifying Dollar waivers or direct PQP boosts like top-tier premium cards might. If you need quicker United elite status, you might want the United Club℠ Business or to rely on flight spend alone."}}></li>
                </ul>
            </section>

             {/* Section 15: Advanced Strategies & Tips */}
             <section id="section-15" className={styles.reviewSection}>
                <h2 dangerouslySetInnerHTML={{ __html:"Advanced Strategies &amp; Tips"}}></h2>
                <ol className={styles.numberedList}>
                    <li><strong>Use the 2x Categories Religiously:</strong>
                    Move all dining, gas, transit, and office supply spend to this card to maximize miles.
                    Ensure employees with authorized cards know which categories they can charge to get 2x.</li>
                    <li><strong>Leverage the Free First Bag for Employee Trips:</strong>
                    If multiple staff travel on the same record locator,
                    you can save baggage fees for at least 2 travelers.
                    This can quickly offset the $99 fee if you do multiple round-trip flights each year.</li>
                     {/* Using dangerouslySetInnerHTML for ℠ */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Don’t Let Lounge Passes Expire:</strong> You get 2 one-time United Club℠ passes per year— schedule them for flights with longer layovers or crucial client travel so employees can freshen up, reducing meal costs at the airport."}}></li>
                    <li><strong>Track “Mile Valuation” for Redeeming:</strong>
                    Generally, try aiming for at least 1.2–1.5 cents per mile on award flights.
                    If you see domestic route saver awards or interesting Star Alliance opportunities to Europe/Asia, you might get even 2+ cpm.
                    That’s a big advantage for your corporate travel budget.</li>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Combine with Another Chase Card if Desired:</strong> Some owners keep a no-fee Ink Business Unlimited for 1.5% on all else or the Ink Preferred for 3x on shipping, ads, etc. Then use the United Business for the 2x airline/gas/dining. Just keep separate statements or expense tracking for clarity."}}></li>
                </ol>
            </section>

             {/* Section 16: Another Real-Life Scenario */}
             <section id="section-16" className={styles.reviewSection}>
                <h2>Another Example: Medium-Sized Agency</h2>
                <p>
                    Consider a marketing agency spending:
                </p>
                <ul className={styles.featureList}>
                    <li>$10,000 on United flights yearly for employees visiting clients</li>
                    <li>$5,000 on office supply stores (paper, printer cartridges, etc.)</li>
                    <li>$4,000 dining with clients, staff</li>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"$4,000 gas stations for local deliveries/errands"}}></li>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"$2,000 local transit/rideshare for city commutes"}}></li>
                    <li>$25,000 everything else (1x)</li>
                </ul>
                <p>
                    That’s $50,000 total.
                    The breakdown:
                </p>
                <ul className={styles.featureList}>
                    <li>$10k United flights → 2x = 20k miles</li>
                    <li>$5k office supplies → 2x = 10k miles</li>
                    <li>$4k dining → 2x = 8k miles</li>
                    <li>$4k gas → 2x = 8k miles</li>
                    <li>$2k transit → 2x = 4k miles</li>
                    <li>$25k other → 1x = 25k miles</li>
                </ul>
                <p>
                    That yields <b>75,000</b> miles from normal spend.
                    Add a sign-up bonus of 75k for $5k spend.
                    Now you’ve got <b>150k</b> miles in a single year— enough for multiple domestic round-trip awards or a big chunk off international premium cabin flights.
                    This easily offsets the net cost of $99, especially considering free bags and lounge passes.
                </p>
            </section>

            {/* Section 17: Pairing with Personal United Cards or Different Cards */}
            <section id="section-17" className={styles.reviewSection}>
                 <h2>Pairing with a Personal United Card or Other Solutions</h2>
                 {/* Using dangerouslySetInnerHTML for ℠ */}
                <p dangerouslySetInnerHTML={{ __html:"Some business owners also hold a personal <b>United Club℠ Infinite</b> or <b>United Quest℠</b> card. Could that overlap help?"}}></p>
                <ul className={styles.featureList}>
                    <li><strong>Multiple Freedoms:</strong>
                    If you have a personal United card with unlimited lounge access, you might not need more lounge passes from the business card.
                    But the business card’s 2 passes can be used by employees or separate trips.
                    Evaluate if paying two fees is worth it, or if you can glean enough from the single personal card alone.</li>
                    <li><strong>Combining Miles:</strong>
                    All United miles funnel into the same MileagePlus account if your business card is under your name.
                    If employees have separate accounts, they can earn miles on the same card but funnel to your business’s chosen MileagePlus ID.
                    Keep an eye on who gets the flight credit for actually traveling.
                    Corporate policy might differ for staff’s personal miles vs. business redemption usage.</li>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{ __html:"<strong>Other Chase Co-Brand or UR Cards:</strong> If you desire better coverage on shipping or travel, consider an Ink Business Preferred (3x shipping/travel). But you can’t directly combine UR points with your United miles, though you can do UR → United transfers. Some advanced users collect UR in a personal Sapphire Reserve®, then transfer to United as needed. The synergy can be powerful for bigger awards or upgrades."}}></li>
                </ul>
                 {/* Using dangerouslySetInnerHTML for ℠ */}
                <p dangerouslySetInnerHTML={{ __html:"In short, if you already have a personal United premium card, the business card can still add 2x categories for your overhead. Or if you prefer a mix of general and airline-specific solutions, consider how best to allocate spending for maximum miles or points. The United℠ Business card remains straightforward if your staff often uses office supplies/gas/dining categories."}}></p>
            </section>

             {/* Section 18: Competitor & Alternative Cards */}
             <section id="section-18" className={styles.reviewSection}>
                <h2 dangerouslySetInnerHTML={{ __html:"Competitor &amp; Alternative Cards"}}></h2>
                 {/* Using dangerouslySetInnerHTML for ℠ */}
                <p dangerouslySetInnerHTML={{ __html:"Beyond the major airline business cards, you might consider:"}}></p>
                <ul className={styles.featureList}>
                    {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Amex Business Platinum®:</strong> $695 fee, broader lounge coverage (Centurion, Priority Pass), 1.5x on large purchases, 5x on flights via Amex Travel, not specifically airline-limited. However, no free bag on United or direct synergy with United status. Good if you want multi-airline usage, but more expensive."}}></li>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Capital One Spark Miles for Business®:</strong> $95 fee (sometimes waived first year), 2x miles on everything. Simpler approach, but no direct airline brand perks like free baggage or airline lounge passes. Miles can be transferred to a selection of partner airlines, but not United directly (Star Alliance might be partial via some partners, but more friction)."}}></li>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Southwest Performance Business®:</strong> If your business is more domestic and you prefer two free bags. $199 fee, in-flight Wi-Fi credits, 3x on Southwest. No global coverage or lounge perks, so different niche vs. United’s overseas routes if you do international expansions."}}></li>
                </ul>
                 {/* Using dangerouslySetInnerHTML for ℠ */}
                <p dangerouslySetInnerHTML={{ __html:"If you specifically want <b>United</b> perks, the <b>United℠ Business Card</b> stands as a sweet spot in cost vs. benefits. But if you want a general airline-agnostic approach, other business travel cards might out-earn it on categories or provide more lounge coverage. Decide how strictly your company commits to United (especially if near a United hub) or if you want multi-carrier freedom."}}></p>
            </section>

            {/* Section 19: Who Should Get the Card? */}
            <section id="section-19" className={styles.reviewSection}>
                <h2 dangerouslySetInnerHTML={{ __html:"Who Should Get the United℠ Business Card?"}}></h2>
                {/* Using dangerouslySetInnerHTML for ℠ */}
                <div className={styles.prosCons}>
                    <div className={styles.pros}>
                        <h3>Yes, If You:</h3>
                        <ul className={styles.featureList}>
                             {/* Using dangerouslySetInnerHTML for ® */}
                            <li dangerouslySetInnerHTML={{__html:"Fly <strong>United Airlines regularly</strong> for business or prefer Star Alliance routes"}}></li>
                            <li>Appreciate a <strong>moderate $99 fee</strong> but still want airline perks (free bag, lounge passes)</li>
                            <li>Spend heavily in <strong>office supplies, gas, dining, local transit</strong> to exploit 2x miles</li>
                            <li>Desire an <strong>easy sign-up bonus</strong> that can cover flights quickly for staff/exec trips</li>
                             {/* Using dangerouslySetInnerHTML for ® */}
                            <li dangerouslySetInnerHTML={{__html:"Want a <strong>no foreign transaction fee</strong> Visa for overseas vendor payments or international travel"}}></li>
                        </ul>
                    </div>
                    <div className={styles.cons}>
                        <h3>No, If You:</h3>
                        <ul className={styles.featureList}>
                            <li>Rarely use <strong>United Airlines</strong> or prefer multiple carriers for your corporate flights</li>
                             {/* Using dangerouslySetInnerHTML for ® */}
                            <li dangerouslySetInnerHTML={{__html:"Crave unlimited <strong>lounge access</strong> or deeper perks (like bigger baggage allowances, seat upgrades) typically found in premium $450+ annual fee airline cards"}}></li>
                             {/* Using dangerouslySetInnerHTML for ® */}
                            <li dangerouslySetInnerHTML={{__html:"Want a <strong>flat 2x–2.5x on all spending</strong> (Spark, Ink Unlimited, etc.) if your overhead doesn’t fit the 2x categories here"}}></li>
                             {/* Using dangerouslySetInnerHTML for ® */}
                            <li dangerouslySetInnerHTML={{__html:"Need robust <strong>elite status shortcuts</strong> or advanced waivers that a more premium card might provide"}}></li>
                             {/* Using dangerouslySetInnerHTML for ® */}
                            <li dangerouslySetInnerHTML={{__html:"Prefer a <strong>no annual fee solution</strong> if you rarely redeem lounge passes or free baggage"}}></li>
                        </ul>
                    </div>
                </div>
            </section>

             {/* Section 20: Final Thoughts & Disclaimer */}
             <section id="section-20" className={styles.reviewSection}>
                <h2 dangerouslySetInnerHTML={{ __html:"Final Thoughts &amp; Disclaimer"}}></h2>
                 {/* Using dangerouslySetInnerHTML for ℠ ® */}
                <p dangerouslySetInnerHTML={{ __html:"If your business or staff frequently relies on <b>United Airlines</b>, the <strong>United℠ Business Card</strong> is a strong contender in the airline co-branded market for 2025. Its <b>2x miles</b> across multiple business-related categories, <b>two annual United Club passes</b>, and <b>free checked bag</b> easily surpass the moderate <b>$99</b> annual fee. The sign-up bonus can jumpstart your mileage balance for upcoming flights. While it won’t grant you full lounge membership or deep elite status accelerators, it’s a valuable mid-tier choice if you want consistent airline perks without a hefty premium. Evaluate your business spending and travel patterns: if you buy supplies, dine out with clients, or fill corporate vehicles often, those 2x miles add up quickly. Combine that with baggage savings, and the net cost can be effectively negative for frequent travelers."}}></p>
                 {/* Using dangerouslySetInnerHTML for &amp; */}
                <p dangerouslySetInnerHTML={{ __html:"<strong>Disclaimer:</strong> Terms, sign-up bonuses, and redemption structures can change. Verify the latest details with <b>Chase</b> or <b>United Airlines</b>. We may earn commissions from certain links but remain editorially independent. Examples are approximate; your actual usage or flight availability may vary. For large financing needs, watch out for high APR (20%+). Paying in full monthly to maximize mileage benefits is typically recommended. Always consult official T&amp;Cs for baggage, lounge pass usage, or 2x category definitions."}}></p>
            </section>

            {/* CTA Section */}
            <section id="cta" className={styles.ctaSection}>
                <h2 dangerouslySetInnerHTML={{__html:"Get the <b>United℠ Business Card</b> Today!"}}></h2>
                <div className={styles.ctaButtons}>
                    <a href={reviewData.applyLink} className={`${styles.btn} ${styles.btnApply}`} title="From card issuer's secure site" target="_blank" rel="noopener noreferrer sponsored">Apply Now</a>
                     {/* Using dangerouslySetInnerHTML for &amp; */}
                    <a href={reviewData.ratesLink} className={`${styles.btn} ${styles.btnRates}`} target="_blank" rel="noopener noreferrer sponsored" dangerouslySetInnerHTML={{__html:"See Rates &amp; Fees"}}></a>
                </div>
            </section>

            {/* E-A-T Section */}
             <section id="eat-expertise-authority-trustworthiness" className={`${styles.reviewSection} ${styles.eatSection}`}>
                <h2 dangerouslySetInnerHTML={{ __html: "Our Commitment to E-A-T: Expertise, Authority &amp; Trustworthiness"}}></h2>
                 {/* Using E-A-T text adapted for United Biz */}
                <p>
                    At <strong>TravelCardInsider</strong>, we prioritize
                    reliable, unbiased reviews so you can make informed
                    credit decisions. We adhere to Google’s E‑A‑T
                    (Expertise, Authority, and Trustworthiness) guidelines
                    through:
                </p>
                <h3>1. Expertise</h3>
                <ul className={styles.featureList}>
                    <li><strong>Direct Card Testing:</strong>
                    Our team monitors actual merchant coding for transit, streaming, etc.
                    We confirm how 2x miles post for different purchases on the United Business Card.</li>
                    <li><strong>Frequent Policy Checks:</strong>
                    We watch for sign-up bonus changes, new foreign fee policies, or updated travel coverage from Chase/United.</li>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Flight Redemption Trials:</strong> We explore real award bookings with United miles—ensuring we advise on typical cost, saver/peak routes, and seat availability."}}></li>
                </ul>
                <h3>2. Authority</h3>
                <ul className={styles.featureList}>
                     {/* Using dangerouslySetInnerHTML for ℠ */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Detailed Reviews:</strong> A ~2,000-word coverage goes beyond bullet points, tackling synergy with other cards, advanced usage, and competitor analysis for the United℠ Business Card."}}></li>
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
                    {/* Using Link component for internal link & &amp; */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Privacy &amp; Data Security:</strong> We adhere to best practices as outlined in our <a href='/privacy-policy'>Privacy Policy</a>, safeguarding user data on our site."}}>
                        {/* Corrected: <Link href="/privacy-policy"><a>Privacy Policy</a></Link> */}
                    </li>
                </ul>
                <p dangerouslySetInnerHTML={{ __html: "By prioritizing E-A-T, we deliver a thorough, dependable review of the <strong>United℠ Business Card</strong> to empower your 2025 financial decisions." }}></p>
            </section>

          </article>
        </div> {/* Close reviewContainer */}
      </main>

      
    </>
  );
}

export default UnitedBusinessCardReviewPage;