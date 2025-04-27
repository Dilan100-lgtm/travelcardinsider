// Example Path: pages/reviews/capital-one-spark-miles.js
// Or: pages/reviews/[slug].js (if using dynamic routing with 'capital-one-spark-miles' as slug)

// !!! WARNING: THIS FILE CONTAINS PLACEHOLDER DATA/URLs/DIMENSIONS !!!
// !!! Source HTML had INCORRECT Rates/Fees Link - Placeholder used below !!!
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
  cardName: 'Capital One Spark Miles for Business',
  title: 'Capital One Spark Miles for Business – In-Depth 2025 Review',
  description: 'A comprehensive 2000-word review of the Capital One Spark Miles for Business card, covering 2x rewards, travel perks, 2025 updates, pros, cons, and best strategies for business owners.',
  keywords: 'Capital One, Spark Miles, business card, travel rewards, 2025 review',
  author: 'TravelCardInsider', // *** REPLACE with your actual author/site name ***
  imageUrl: '/miles_new_2021.avif', // *** VERIFY PATH in /public ***
  ratingValue: 8.0, // From Spark Miles HTML
  applyLink: 'https://www.capitalone.com/small-business/credit-cards/spark-miles/', // *** REPLACE with actual Spark Miles APPLY URL ***
  // !!! WARNING: Source HTML linked to Spark Miles Select. Using placeholder for standard Spark Miles. VERIFY & REPLACE !!!
  ratesLink: 'https://www.capitalone.com/small-business/credit-cards/spark-miles/', // *** REPLACE WITH CORRECT RATES/FEES LINK ***
  // Image dimensions (MUST BE ACCURATE for next/image)
  imageWidth: 480, // *** REPLACE with actual image width *** (Example Placeholder)
  imageHeight: 304, // *** REPLACE with actual image height *** (Example Placeholder)
};

// --- Rating Tooltip Content (Customize if needed for Spark Miles) ---
const ratingCriteria = [ // *** VERIFY/CUSTOMIZE these criteria for Spark Miles Rating ***
    'Flat-Rate Earning (2x Miles)',
    'No Foreign Transaction Fee',
    'Welcome Bonus Value',
    'Transfer Partner Flexibility',
    'Annual Fee ($95)'
];

function SparkMilesReviewPage() {
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
  // !!! VERIFY all URLs, counts, and details FOR SPARK MILES !!!
  const siteUrl = "https://www.travelcardinsider.com"; // *** REPLACE with your actual site URL ***
  const pageUrl = `${siteUrl}/reviews/capital-one-spark-miles`; // *** REPLACE with your actual page URL ***
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Capital One Spark Miles for Business",
    "image": `${siteUrl}${reviewData.imageUrl}`, // *** Assuming imageUrl starts with / ***
    "description": "The Capital One Spark Miles for Business card offers 2x miles on every purchase, no foreign transaction fees, and a competitive sign-up bonus.", // Adjusted description
    "brand": {
      "@type": "Brand",
      "name": "Capital One"
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
      "ratingCount": 810, // *** REPLACE with actual or estimated count ***
      "reviewCount": 810  // *** REPLACE with actual or estimated count ***
    },
    "offers": {
      "@type": "Offer",
      "url": reviewData.applyLink.startsWith('http') ? reviewData.applyLink : `${siteUrl}${reviewData.applyLink}`, // *** Ensure full APPLY URL ***
      "priceCurrency": "USD",
      "price": "95", // Annual Fee for Spark Miles
      // Add note about first year waiver if applicable/common
      "availability": "https://schema.org/InStock",
      "itemCondition": "https://schema.org/NewCondition"
    }
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
                <div className={styles.intro}>
                  <p>
                    The <strong>Capital One Spark Miles for Business</strong> card is a <b>straightforward</b>
                    travel rewards solution, offering a <b>2x miles</b> rate on virtually every purchase,
                    no foreign transaction fees, and a moderate annual fee (often waived first year).
                    In this review, we’ll explore how this card can transform your business spending
                    into easy, flexible travel miles for 2025.
                    From sign-up bonuses to advanced synergy with Capital One Travel partners,
                    we’ll dissect 20 sections so you can decide if <b>Spark Miles</b> suits your enterprise’s needs.
                  </p>
                </div>

                {/* Image Container */}
                <div className={styles.cardImageContainer}>
                  {/* Corrected class name */}
                   <Image
                     src={reviewData.imageUrl}
                     alt={"Capital One Spark Miles for Business Card"}
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
                    <i>One of the simplest, high-earning travel cards for business: 2x miles on everything, easy redemption, moderate annual fee.</i>
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
                                <td data-label="Details">$95 (often waived first year)</td>
                            </tr>
                            <tr>
                                <td data-label="Feature">APR</td>
                                <td data-label="Details" dangerouslySetInnerHTML={{__html:"18.99% – 26.99% Variable"}}></td>
                            </tr>
                            <tr>
                                <td data-label="Feature">Sign-Up Bonus</td>
                                <td data-label="Details">Commonly 50k–100k miles after meeting $X spend in 3 months</td>
                            </tr>
                             {/* Using dangerouslySetInnerHTML for ® */}
                            <tr dangerouslySetInnerHTML={{__html:'<td data-label="Feature">Rewards Rate</td><td data-label="Details">2 miles per $1 on all purchases, no category restrictions</td>'}}></tr>
                            <tr>
                                <td data-label="Feature">Foreign Transaction Fee</td>
                                <td data-label="Details">None</td>
                            </tr>
                             {/* Using dangerouslySetInnerHTML for ® */}
                            <tr dangerouslySetInnerHTML={{__html:'<td data-label="Feature">Miles Redemption</td><td data-label="Details">Erasing travel expenses or transferring to airline/hotel partners</td>'}}></tr>
                            <tr>
                                <td data-label="Feature">Recommended Credit Score</td>
                                <td data-label="Details">Good–Excellent (700+ typically), plus business details</td>
                            </tr>
                            <tr>
                                <td data-label="Feature">Authorized Employee Cards</td>
                                <td data-label="Details">Typically no additional fee</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

             {/* CTA Section */}
             <section id="cta" className={styles.ctaSection}>
                 <h2>Get the <b>Capital One Spark Miles for Business</b> Today!</h2>
                <div className={styles.ctaButtons}>
                    <a href={reviewData.applyLink} className={`${styles.btn} ${styles.btnApply}`} title="From card issuer's secure site" target="_blank" rel="noopener noreferrer sponsored">Apply Now</a>
                     {/* Using dangerouslySetInnerHTML for &amp; */}
                     {/* !!! WARNING: Rates link incorrect in source, using placeholder. VERIFY/REPLACE! !!! */}
                    <a href={reviewData.ratesLink} className={`${styles.btn} ${styles.btnRates}`} target="_blank" rel="noopener noreferrer sponsored" dangerouslySetInnerHTML={{__html:"See Rates &amp; Fees"}}></a>
                </div>
            </section>

            {/* Section 3: Card Overview & Positioning */}
            <section id="section-3" className={styles.reviewSection}>
                 <h2 dangerouslySetInnerHTML={{ __html:"Card Overview &amp; Positioning"}}></h2>
                <p>
                    <strong>Capital One Spark Miles for Business</strong> keeps it simple:
                    you earn <b>2 miles on every dollar</b>—
                    no rotating categories or complicated tier structures.
                    If your business wants a <b>flat-rate</b> approach,
                    you can easily funnel all overhead, from office supplies to ad campaigns,
                    into this single card.
                    Then, redeem those miles for travel by “erasing” expenses or transferring to partners.
                    The annual fee of <b>$95</b> (often waived year one) is quite moderate for a consistent 2x.
                    In 2025’s crowded market of business travel cards,
                    Spark Miles stands out for straightforward usage—particularly if you or your staff want global acceptance,
                    no foreign fees, and flexible redemption beyond a single airline.
                </p>
            </section>

             {/* Section 4: Earning Miles & 2x on Everything */}
             <section id="section-4" className={styles.reviewSection}>
                <h2 dangerouslySetInnerHTML={{ __html:"Earning Miles &amp; 2x on Everything"}}></h2>
                <p>
                    The hallmark is <b>2x miles</b> on <b>all purchases</b>:
                </p>
                <ul className={styles.featureList}>
                    <li>No specialized categories—2x for dining, shipping, software subscriptions, flights, office supplies, etc.</li>
                    <li>Occasional promotions might offer 5x on hotels/cars booked via Capital One Travel,
                    but the standard baseline is 2x on everything.</li>
                </ul>
                <p>
                    This is a refreshing approach if your business spending doesn’t align well with other cards’ category bonuses
                    (like 3x shipping, 2x airline, etc.).
                    With Spark Miles, you keep it simple:
                    any business expense yields the same 2 miles per $1.
                    Over a year, that can accumulate a large mileage balance
                    you can redeem for flights, hotels, or partial offsets.
                    Also, employee cards typically share the same 2x structure at no extra cost,
                    meaning more staff usage can supercharge your mile earnings.
                </p>
            </section>

             {/* Section 5: Redeeming Spark Miles for Travel */}
             <section id="section-5" className={styles.reviewSection}>
                <h2>Redeeming Spark Miles for Travel</h2>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{ __html:"Once earned, your miles live in the <b>Capital One</b> ecosystem. You have two main redemption routes:"}}></p>
                <ol className={styles.numberedList}>
                    <li><strong>Travel Purchase Eraser:</strong>
                    Buy any travel expense (flight, hotel, rental car) on your card,
                    then “erase” it afterward by redeeming miles at 1 cent each.
                    For instance, a $500 airline ticket can be offset with 50k miles.
                    Flexible with zero blackouts or capacity controls—great for last-minute or specific airline usage.</li>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{ __html:"<strong>Transfer to Partner Airlines/Hotels:</strong> Capital One has grown its partner network (e.g., Air Canada Aeroplan, Air France/KLM Flying Blue, etc.), typically at 1:1 (though some are 2:1.5 or 2:1). This can yield better-than-1¢ valuations if you find premium cabin sweet spots. An advanced approach for those comfortable with airline loyalty programs or major alliances."}}></li>
                </ol>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{ __html:"Many business owners favor the “erase” method for simplicity— simply charge any flight/hotel on the card, log into your account, and apply miles to cover that cost. If you do desire bigger potential value, transferring to partners for, say, a business-class seat on an international route, might net 1.5–2¢ or more per mile. That said, it requires more planning. Either way, <b>Spark Miles</b> is flexible, which is crucial in 2025’s dynamic travel environment."}}></p>
            </section>

             {/* Section 6: Sign-Up Bonus & Promotions */}
             <section id="section-6" className={styles.reviewSection}>
                <h2 dangerouslySetInnerHTML={{ __html:"Sign-Up Bonus &amp; Promotions"}}></h2>
                {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{ __html:"Capital One typically sets the <b>Spark Miles</b> welcome bonus around <b>50k–100k</b> miles after meeting a certain spend (like $4,500 in 3 months). Keep an eye on limited-time promotions that might push it higher or add statements. That initial stash can easily offset your next business trip or more if you pick strategic redemptions. For example, 50k miles can erase a $500 flight or transfer to an airline partner for a longer-haul route. Some deals might also waive the $95 annual fee for the first year, which is helpful to test the card’s synergy with your business overhead."}}></p>
            </section>

            {/* Section 7: No Foreign Transaction Fee & Global Acceptance */}
            <section id="section-7" className={styles.reviewSection}>
                 <h2 dangerouslySetInnerHTML={{ __html:"No Foreign Transaction Fee &amp; Global Acceptance"}}></h2>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{ __html:"<b>Spark Miles</b> is typically a <b>Visa</b> or <b>Mastercard</b> (often Visa Signature or World Elite Mastercard tier). With <strong>no foreign transaction fees</strong>, your employees can use it abroad for flights, hotels, or vendor invoices without the usual 3% surcharge. This is a big plus if your enterprise frequently deals with overseas suppliers or if staff travels for conferences. The broad acceptance of Visa/Mastercard also means minimal acceptance hurdles in smaller foreign markets. In 2025’s global economy, that convenience can save significant sums on cross-border expenses."}}></p>
            </section>

             {/* Section 8: 2025 Updates & Potential Changes */}
             <section id="section-8" className={styles.reviewSection}>
                <h2 dangerouslySetInnerHTML={{ __html:"2025 Updates &amp; Potential Changes"}}></h2>
                <ol className={styles.numberedList}>
                    <li><strong>Transfer Partner Expansions:</strong>
                    Capital One might add new airline/hotel partners or shift transfer ratios.
                    Keep an eye on announcements if you rely on direct 1:1 conversions to top carriers.</li>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Sign-Up Bonus Fluctuations:</strong> We could see cyclical 100k–150k mile offers or additional statement credits for business software or shipping. If you see a bigger bonus, it might be the perfect time to apply."}}></li>
                    <li><strong>Potential Fee Adjustments:</strong>
                    The $95 might remain stable if competition stays intense.
                    However, new perks (like partial lounge coverage or monthly credits) could appear.
                    Official details remain speculation until Capital One confirms changes.</li>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Travel Portal Enhancements:</strong> Cap One Travel might expand its dynamic “price prediction” or incorporate business-friendly booking tools, possibly awarding higher multipliers for certain hotels/flights, akin to personal Venture X. This could present new 3–5x categories within the portal for Spark Miles customers as well."}}></li>
                </ol>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{ __html:"Overall, <b>Spark Miles</b> typically sees incremental improvements—like an expanding partner roster—rather than big structural overhauls. Always verify official announcements for the latest benefit additions or changes in 2025."}}></p>
            </section>

            {/* Section 9: Real-Life Example Table */}
             <section id="section-9" className={styles.reviewSection}>
                 <h2 dangerouslySetInnerHTML={{ __html:"Real-Life Example: Annual Business Spend &amp; Miles"}}></h2>
                <p>
                    Suppose your business invests:
                </p>
                <ul className={styles.featureList}>
                    <li>$20,000 in shipping/ad services</li>
                    <li>$6,000 on flights/lodging</li>
                    <li>$4,000 on dining (client or staff meals)</li>
                    <li>$20,000 on miscellaneous overhead (office supplies, software, etc.)</li>
                </ul>
                <p>
                    Total = $50,000 annual spending.
                </p>
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
                             {/* Using dangerouslySetInnerHTML for &amp; */}
                            <tr dangerouslySetInnerHTML={{__html:'<td data-label="Category">Shipping/Ads</td><td data-label="Annual Spend">$20,000</td><td data-label="Miles per $">2x</td><td data-label="Total Miles">40,000</td>'}}></tr>
                             {/* Using dangerouslySetInnerHTML for &amp; */}
                            <tr dangerouslySetInnerHTML={{__html:'<td data-label="Category">Flights/Lodging</td><td data-label="Annual Spend">$6,000</td><td data-label="Miles per $">2x</td><td data-label="Total Miles">12,000</td>'}}></tr>
                            <tr>
                                <td data-label="Category">Dining</td>
                                <td data-label="Annual Spend">$4,000</td>
                                <td data-label="Miles per $">2x</td>
                                <td data-label="Total Miles">8,000</td>
                            </tr>
                            <tr>
                                <td data-label="Category">Misc. Overhead</td>
                                <td data-label="Annual Spend">$20,000</td>
                                <td data-label="Miles per $">2x</td>
                                <td data-label="Total Miles">40,000</td>
                            </tr>
                            <tr style={{fontWeight: 'bold', borderTop: '2px solid #dee2e6'}}>
                                <th data-label="Category">Total</th>
                                <th data-label="Annual Spend">$50,000</th>
                                <th data-label="Miles per $">—</th>
                                <th data-label="Total Points">100,000</th>
                            </tr>
                        </tbody>
                    </table>
                </div>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{ __html:"That’s <b>100,000</b> miles from routine spend alone. Add a sign-up bonus of 50k–100k for $X spend. Now you’re at <b>150k–200k</b> miles total in a year— a huge asset to offset flights or potentially for transferring to airline partners for premium cabins. Considering the net cost after the first waived year is just $95, the ROI for a 2x flat rate can be substantial if your overhead is mid-to-high volume."}}></p>
            </section>

             {/* Section 10: Competitor Analysis */}
             <section id="section-10" className={styles.reviewSection}>
                <h2>Competitor Analysis</h2>
                <p>
                    Other popular business travel cards include:
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
                            <tr dangerouslySetInnerHTML={{__html:'<td data-label="Card">Cap One Spark Miles</td><td data-label="Annual Fee">$95 (waived first year often)</td><td data-label="Rewards">2x on all spend</td><td data-label="Key Advantage">Easy, flat approach, flexible “erase” or partner transfers</td>'}}></tr>
                             {/* Using dangerouslySetInnerHTML for ® */}
                            <tr dangerouslySetInnerHTML={{__html:'<td data-label="Card">Chase Ink Business Preferred®</td><td data-label="Annual Fee">$95</td><td data-label="Rewards">3x on travel, shipping, ads, phone up to $150k</td><td data-label="Key Advantage">Strong UR points, wide partner transfers, big sign-up bonus</td>'}}></tr>
                             {/* Using dangerouslySetInnerHTML for ® */}
                            <tr dangerouslySetInnerHTML={{__html:'<td data-label="Card">Amex Business Gold®</td><td data-label="Annual Fee">$295–$375 range</td><td data-label="Rewards">4x on top 2 categories from 6 select categories, 1x else</td><td data-label="Key Advantage">High multipliers if your big spend aligns with those categories</td>'}}></tr>
                             {/* Using dangerouslySetInnerHTML for ℠ */}
                            <tr dangerouslySetInnerHTML={{__html:'<td data-label="Card">United℠ Business Card</td><td data-label="Annual Fee">$99</td><td data-label="Rewards">2x on United + certain biz categories, airline-specific perks</td><td data-label="Key Advantage">Best if you always fly United, free bag & lounge passes</td>'}}></tr>
                        </tbody>
                    </table>
                </div>
                {/* Using dangerouslySetInnerHTML for ® & ℠ */}
                <p dangerouslySetInnerHTML={{ __html:"If you want <b>ultimate simplicity</b> with a 2x across the board, <b>Spark Miles</b> outshines more complex bonus categories. If you prefer specialized 3x–4x categories (like shipping or ads), an <b>Ink</b> or <b>Business Gold</b> might yield more. If you consistently use one airline, a co-branded airline business card might offer free baggage or lounge passes. But for flexible travel usage—especially with possible partner transfer—<b>Spark Miles</b> is quite appealing in 2025."}}></p>
            </section>

            {/* Section 11: Synergy with Other Capital One Cards */}
            <section id="section-11" className={styles.reviewSection}>
                 <h2>Synergy with Other Capital One Cards</h2>
                <p>
                    Some advanced or personal combos:
                </p>
                <ul className={styles.featureList}>
                    <li><strong>Personal Venture/Venture X + Spark Miles:</strong>
                    If you hold a personal Venture (2x) or Venture X (2x everything, 5–10x on Cap One Travel)
                    plus the Spark Miles for your business,
                    you can often merge the miles into one Capital One account.
                    This can yield a massive pool of points from both personal and business spending.
                    Then choose whether to “erase” or transfer them to an airline/hotel partner.
                    </li>
                    <li><strong>Employee Cards:</strong>
                    Additional employee Spark Miles cards typically have no annual fee.
                    Let staff use them for business expenses.
                    All miles funnel into your main business account,
                    accelerating your overall accumulation.
                    Just manage expense policies carefully, of course.</li>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Possible 5x on Hotels/Car Rentals (via Cap One Travel):</strong> Capital One’s personal Venture X has that perk— if they ever expand or unify that for Spark Miles, you could see bigger multipliers. For now, watch official updates. Some short-term promos might appear for business cardholders."}}></li>
                </ul>
                <p>
                    Combining <b>Spark Miles</b> with a personal Capital One card can drastically amplify your miles,
                    especially if you keep overhead on the business card and personal everyday spend on Venture or Venture X.
                    Since the redemption options are effectively pooled,
                    you enjoy more flexibility for your entire travel strategy—both personal and corporate.
                </p>
            </section>

             {/* Section 12: Additional Benefits & Travel Protections */}
             <section id="section-12" className={styles.reviewSection}>
                <h2 dangerouslySetInnerHTML={{ __html:"Additional Benefits &amp; Travel Protections"}}></h2>
                <p>
                    Highlights for <b>Spark Miles</b> typically include:
                </p>
                <ul className={styles.featureList}>
                     {/* Using dangerouslySetInnerHTML for &amp; */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Rental Car Insurance:</strong> If you rent a vehicle for business trips and pay with the card, you usually get collision damage waiver coverage (secondary in the U.S., potentially primary abroad—read T&amp;C)."}}></li>
                     {/* Using dangerouslySetInnerHTML for &amp; */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Purchase Security &amp; Extended Warranty:</strong> Protects eligible items from damage/theft for a certain window (e.g., 90–120 days) and can extend U.S. manufacturers’ warranties by up to 1 year."}}></li>
                    <li><strong>Year-End Summaries:</strong>
                    A detailed breakdown of spending categories, convenient for tax time or management analysis.</li>
                    <li><strong>Employee Card Management Tools:</strong>
                    Set individual limits, track expenses,
                    and centralize all miles in your main business account at no extra cost for additional users.</li>
                     {/* Using dangerouslySetInnerHTML for &amp; */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Fraud Coverage &amp; Security Alerts:</strong> 24/7 fraud alerts, $0 liability for unauthorized charges if reported promptly."}}></li>
                </ul>
                <p>
                    While you won’t get lounge passes or airline fee credits from Spark Miles,
                    the robust purchase/travel coverage can still mitigate risk for your enterprise.
                    If your staff or you do moderate to heavy travel,
                    the 2x plus these protections can streamline your business finances and policy compliance.
                </p>
            </section>

            {/* Section 13: APR & Carrying a Balance */}
            <section id="section-13" className={styles.reviewSection}>
                <h2 dangerouslySetInnerHTML={{ __html:"APR &amp; Carrying a Balance"}}></h2>
                 {/* Using dangerouslySetInnerHTML for ® &amp; */}
                <p dangerouslySetInnerHTML={{ __html:"The <b>Spark Miles</b> APR typically runs <b>18.99%–26.99%</b> variable, based on creditworthiness. With rates that high, revolve only if necessary. The real advantage is the 2x earning and no foreign fees, not cheap financing. For large or extended finance needs, consider a 0% intro APR card or a small business loan. Ideally, pay in full monthly to keep your miles’ net value intact. The card does occasionally have an introductory purchase APR, but read the official T&amp;Cs for current promotions. Over the long run, paying statement balances fully each cycle is the best approach for maximizing rewards vs. interest costs."}}></p>
            </section>

             {/* Section 14: Potential Downsides */}
             <section id="section-14" className={styles.reviewSection}>
                <h2>Potential Downsides</h2>
                <ul className={styles.featureList}>
                    <li><strong>$95 Annual Fee After Year One:</strong>
                    If your business has minimal spend, you might not earn enough miles to offset that cost.
                    Explore no-fee solutions if you want truly zero cost.</li>
                    <li><strong>No Airline-Specific Perks:</strong>
                    No free checked bags or lounge passes you’d get with co-branded airline cards.
                    This is truly an “agnostic” travel card, so no direct synergy with a single airline’s baggage or upgrade benefits.</li>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Transfer Partners Not All 1:1:</strong> Some remain 2:1.5 or 2:1. That can degrade value for certain frequent flyer programs. If you specifically want a robust 1:1 set, or if you want Southwest/United directly, you might prefer a different approach (like Chase UR)."}}></li>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Lacks Premium Lounge Access or Credits:</strong> If you want big perks like Global Entry credits or lounge visits, you might consider the higher-tier Spark Travel Elite or personal Venture X. The standard Spark Miles is more of a mid-tier offering."}}></li>
                    <li><strong>No Elevated Category Multipliers Beyond 2x:</strong>
                    If shipping or ads are a huge portion of your spend,
                    you might yield more from a 3x or 4x competitor in that category.
                    Spark Miles is simpler but not always highest-earning in specialized categories.</li>
                </ul>
            </section>

            {/* Section 15: Advanced Tips & Strategies */}
            <section id="section-15" className={styles.reviewSection}>
                 <h2 dangerouslySetInnerHTML={{ __html:"Advanced Tips &amp; Strategies"}}></h2>
                <ol className={styles.numberedList}>
                    <li><strong>Focus All Overhead:</strong>
                    Because it’s 2x on everything,
                    the bigger your monthly overhead (marketing, shipping, supplies, bills) you can place on the card,
                    the more miles you’ll accumulate.
                    Centralize spending if it doesn’t break vendor surcharges or usage policies.</li>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Monitor Partner Transfer Promotions:</strong> Capital One occasionally runs 1:1.2 or 1:1.5 promos with certain airlines. If that lines up, you can get outsized flight redemptions for your business travel. Keep an eye on official announcements or the travel partners page."}}></li>
                    <li><strong>Employee Cards for All Staff with Controlled Limits:</strong>
                    Let your traveling employees charge flights, hotels, etc.
                    2x miles quickly multiply across multiple employees.
                    Just set expense rules or monthly budgets to keep everything within reason.</li>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Use “Purchase Eraser” for Uncommon Airlines or Travel Vendors:</strong> If you must fly a smaller regional airline or buy from a specific lodging vendor not partnered with major programs, the eraser method can still recoup the cost at 1¢ per mile. This is simpler than searching for partner conversions or complicated redemption portals."}}></li>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Evaluate Upgrading to Spark Travel Elite (If Officially Available):</strong> Capital One has a personal Venture X. If they ever roll out a Spark “Elite” business version with lounge membership, $300 travel credit, etc., you might weigh that if you want heavier travel perks. For now, the standard Spark Miles remains the mid-tier approach with minimal frills."}}></li>
                </ol>
            </section>

            {/* Section 16: Another Real-Life Example */}
            <section id="section-16" className={styles.reviewSection}>
                 <h2>Another Example: High-Spend E-commerce Company</h2>
                <p>
                    If your e-commerce business invests:
                </p>
                <ul className={styles.featureList}>
                     {/* Using dangerouslySetInnerHTML for &amp; */}
                    <li dangerouslySetInnerHTML={{__html:"$40,000 annually on shipping &amp; fulfilment"}}></li>
                    <li>$20,000 on online advertising</li>
                     {/* Using dangerouslySetInnerHTML for &amp; */}
                    <li dangerouslySetInnerHTML={{__html:"$10,000 on travel &amp; lodging for events"}}></li>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"$30,000 on general overhead (software, inventory, etc.)"}}></li>
                </ul>
                <p>
                    That’s $100,000 total.
                    At <b>2x</b>, you net <b>200,000</b> miles from normal spend.
                    Add a sign-up bonus (let’s say 60k for $5k spend).
                    You’re at <b>260,000</b> miles in year one.
                    If you “erase” a $2,600 flight expense or transfer for a premium route,
                    the card easily pays for itself beyond the $95 second-year fee,
                    especially if it’s waived first year.
                    The straightforward 2x means zero category guesswork for you or staff.
                </p>
            </section>

             {/* Section 17: Pairing with Personal Venture or Other Solutions */}
             <section id="section-17" className={styles.reviewSection}>
                <h2>Pairing with a Personal Venture or Other Cards</h2>
                <p>
                    Many owners also hold a personal <b>Venture</b> or <b>Venture X</b>.
                    The synergy can be quite strong:
                </p>
                <ul className={styles.featureList}>
                    <li><strong>Combine Miles in One Account:</strong>
                    You can typically merge or transfer miles between personal and business cards in Capital One’s system,
                    letting you pool all earned miles for bigger redemptions.
                    </li>
                    <li><strong>Employee Usage in Spark, Personal for Personal Expenses:</strong>
                    Keep business and personal separate, but the miles remain flexible if you want to combine them.
                    This helps if you’re building a major trip or want to share miles across personal/family travel as well.</li>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Expand Earning Potential:</strong> For instance, if personal Venture X yields 10x on hotels/cars via Cap One Travel, you might channel personal bookings there while the business card handles overhead. All merges together if you so choose. The main difference: the business card is under your company’s EIN/financials, the personal is under your SSN, but the miles can unify."}}></li>
                </ul>
                <p>
                    If you prefer a single do-it-all approach for business,
                    Spark Miles alone can suffice.
                    But the synergy with a personal Capital One card can amplify your total miles—
                    especially if both get large sign-up bonuses.
                    Evaluate your personal/business usage boundaries and corporate policies to ensure correct expense allocations.
                </p>
            </section>

            {/* Section 18: Competitor & Alternative Cards */}
            <section id="section-18" className={styles.reviewSection}>
                <h2 dangerouslySetInnerHTML={{ __html:"Competitor &amp; Alternative Cards"}}></h2>
                <ul className={styles.featureList}>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Chase Ink Business Unlimited®:</strong> 1.5% cash back on all spend (redeemable as UR points). Simpler approach, but only 1.5%, less than 2x miles. If you also have a personal Sapphire Reserve or Ink Preferred®, you could turn that 1.5% into 1.5 UR points per $1, which then can transfer to airlines, matching or outpacing Spark? Possibly, but more complicated synergy than Spark’s direct 2x approach."}}></li>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Amex Blue Business Plus®:</strong> 2x Membership Rewards on first $50k each year, 1x after. Good if your business is smaller or you don’t exceed $50k. But if you spend well over $50k, Spark Miles might deliver 2x on the entire sum."}}></li>
                    <li><strong>Airline Co-Branded Cards:</strong>
                    If your staff always flies one airline (Delta, United, American, Southwest),
                    you might want free baggage or companion perks.
                    But that locks you into that airline.
                    Spark Miles remains flexible for any flight/hotel globally at 1¢ per mile, or partner transfers if you want better redemptions.</li>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Amex Business Gold® or Platinum®:</strong> Higher annual fees ($295–$695) with bigger category bonuses or lounge coverage, but more complexity. If you want 4x in certain categories or Centurion lounge visits, that might be worth it. For a mid-tier approach, Spark Miles is simpler and cheaper."}}></li>
                </ul>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{ __html:"Ultimately, <b>Spark Miles</b> thrives on its no-nonsense 2x structure and moderate fee. If you crave bigger category multipliers, airline-specific perks, or robust lounge coverage, a specialized card might be better. For broad usage with minimal fuss, Spark stands tall in 2025."}}></p>
            </section>

             {/* Section 19: Who Should Get the Card? */}
             <section id="section-19" className={styles.reviewSection}>
                <h2>Who Should Get the Capital One Spark Miles for Business?</h2>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <div className={styles.prosCons}>
                    <div className={styles.pros}>
                        <h3>Yes, If You:</h3>
                        <ul className={styles.featureList}>
                            <li>Run a <strong>business</strong> with <b>diverse spending</b> and want <b>2x across the board</b></li>
                            <li>Value <b>flexible travel redemption</b> (erase method) or potential partner transfers for premium flights</li>
                             {/* Using dangerouslySetInnerHTML for ® */}
                            <li dangerouslySetInnerHTML={{__html:"Desire a <strong>moderate annual fee</strong> and <strong>no foreign transaction fees</strong>"}}></li>
                            <li>Want an <strong>easy sign-up bonus</strong> that can offset next business trips quickly</li>
                            <li>Prefer <b>simple employee card issuance</b> without added fees or complicated category management</li>
                        </ul>
                    </div>
                    <div className={styles.cons}>
                        <h3>No, If You:</h3>
                        <ul className={styles.featureList}>
                            <li>Always fly a <strong>specific airline</strong> and want free bags or lounge passes from a co-brand card</li>
                            <li>Need <strong>robust category multipliers</strong> (3x–4x for shipping, ads, travel, etc.) from competitor solutions</li>
                             {/* Using dangerouslySetInnerHTML for ® */}
                            <li dangerouslySetInnerHTML={{__html:"Desire <strong>premium lounge access</strong>, big travel credits, or top-tier statement perks (that might require a $395–$695 card)"}}></li>
                            <li>Rarely travel or prefer a <strong>no annual fee</strong> approach</li>
                            <li>Need extended 0% APR or heavy financing as opposed to paying in full monthly</li>
                        </ul>
                    </div>
                 </div>
             </section>

             {/* Section 20: Final Thoughts & Disclaimer */}
             <section id="section-20" className={styles.reviewSection}>
                <h2 dangerouslySetInnerHTML={{ __html:"Final Thoughts &amp; Disclaimer"}}></h2>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{ __html:"The <strong>Capital One Spark Miles for Business</strong> remains a top recommendation for 2025 if you want a simple 2x approach, flexible redemption, and moderate fee. By funneling all business overhead (and travel) onto this card, you’ll accumulate miles quickly, redeemable for flight/hotel erasures or partner airline/hotel transfers. The sign-up bonus can further cut business travel costs, and no foreign transaction fees means smoother overseas vendor transactions. While it lacks advanced perks like airline baggage waivers or premium lounge memberships, that’s by design—the aim is straightforward 2x with minimal complexity. If that resonates with your business strategy, <b>Spark Miles</b> might be your best ally for managing and minimizing travel spend in 2025."}}></p>
                 {/* Using dangerouslySetInnerHTML for &amp; ® */}
                <p dangerouslySetInnerHTML={{ __html:"<strong>Disclaimer:</strong> Card terms, APRs, sign-up bonuses, or partner transfer ratios can change. Always review official Capital One sources for up-to-date details. We may earn affiliate commissions from certain links, but editorial opinions stay our own. Interest rates of 18.99%–26.99% are high for big balances, so paying in full monthly is recommended. Examples of redemption or miles value are approximate; your real usage or airline/hotel availability can vary. Consult official T&amp;Cs on employee card usage, coverage disclaimers, or authorized business spending guidelines."}}></p>
            </section>

            {/* CTA Section */}
            <section id="cta" className={styles.ctaSection}>
                 <h2>Get the <b>Capital One Spark Miles for Business</b> Today!</h2>
                <div className={styles.ctaButtons}>
                    <a href={reviewData.applyLink} className={`${styles.btn} ${styles.btnApply}`} title="From card issuer's secure site" target="_blank" rel="noopener noreferrer sponsored">Apply Now</a>
                     {/* Using dangerouslySetInnerHTML for &amp; */}
                     {/* !!! WARNING: Rates link incorrect in source, using placeholder. VERIFY/REPLACE! !!! */}
                    <a href={reviewData.ratesLink} className={`${styles.btn} ${styles.btnRates}`} target="_blank" rel="noopener noreferrer sponsored" dangerouslySetInnerHTML={{__html:"See Rates &amp; Fees"}}></a>
                </div>
            </section>

             {/* E-A-T Section - Adapted for Spark Miles */}
             <section id="eat-expertise-authority-trustworthiness" className={`${styles.reviewSection} ${styles.eatSection}`}>
                <h2 dangerouslySetInnerHTML={{ __html: "Our Commitment to E-A-T: Expertise, Authority &amp; Trustworthiness"}}></h2>
                 {/* Using E-A-T text adapted for Spark Miles */}
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
                    in business credit cards and travel rewards, analyzing the Spark Miles card's flat-rate structure and transfer partners.</li>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Real-Time Updates:</strong> We continually check official issuer materials (Capital One) and user data points to maintain current rates, terms, and partner transfer ratios."}}></li>
                    <li dangerouslySetInnerHTML={{ __html: "<strong>Conferences &amp; Webinars:</strong> Our team attends financial and travel events, enriching our knowledge base with industry insights on business rewards."}}></li>
                </ul>
                <h3>2. Authority</h3>
                <ul className={styles.featureList}>
                    <li><strong>Detailed Coverage:</strong>
                    This review offers an exhaustive look
                    at the Capital One Spark Miles for Business, from its fee structure to maximizing the 2x earning rate.</li>
                    <li><strong>Trusted By Major Outlets:</strong>
                    Our articles are frequently cited by national finance
                    and travel news sites for business credit card comparisons.</li>
                    <li><strong>Full Disclosure:</strong>
                    If affiliate links or promotions exist, we clearly state them,
                    ensuring objective editorial content.</li>
                </ul>
                <h3>3. Trustworthiness</h3>
                <ul className={styles.featureList}>
                    <li><strong>Independent Analysis:</strong>
                    We never let advertisers influence our ratings or opinions on the Spark Miles card's value.</li>
                    <li><strong>Frequent Revisions:</strong>
                    We revise reviews whenever new offers appear or Capital One updates its transfer partners or card benefits.</li>
                    <li><strong>Community Feedback:</strong>
                    We encourage open discussion in comments,
                    fostering transparency and additional user insights on business card spending.</li>
                    <li dangerouslySetInnerHTML={{__html:"<strong>Data Security:</strong> We prioritize user privacy and follow best practices, outlined in our <a href='/privacy-policy'>Privacy Policy</a>."}}>
                        {/* Corrected: <Link href="/privacy-policy"><a>Privacy Policy</a></Link> */}
                    </li>
                </ul>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{ __html: "By following these E‑A‑T principles, we aim to guide you responsibly toward a credit card that fits your business needs and maximizes your travel rewards." }}></p>
            </section>

          </article>
        </div> {/* Close reviewContainer */}
      </main>

      <Footer />
    </>
  );
}

export default SparkMilesReviewPage;