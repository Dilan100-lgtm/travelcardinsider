// Example Path: pages/reviews/ink-business-preferred.js
// Or: pages/reviews/[slug].js (if using dynamic routing with 'ink-business-preferred' as slug)

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
  cardName: 'Ink Business Preferred® Credit Card',
  title: 'Ink Business Preferred® Credit Card – In-Depth 2025 Review',
  description: 'A comprehensive 2000-word review of the Ink Business Preferred® Credit Card, focusing on business travel rewards, sign-up bonus, 3x categories, redemption, 2025 updates, pros, cons, and advanced usage tips for entrepreneurs.',
  keywords: 'Ink Business Preferred, Chase, business travel, 3x rewards, Ultimate Rewards, 2025 updates, entrepreneur credit card',
  author: 'TravelCardInsider', // *** REPLACE with your actual author/site name ***
  imageUrl: '/ink_preferred_card.png', // *** VERIFY PATH in /public ***
  ratingValue: 8.6, // From Ink Biz Preferred HTML
  applyLink: 'https://creditcards.chase.com/business-credit-cards/ink/business-preferred', // *** REPLACE with actual Ink Biz Preferred APPLY URL ***
  ratesLink: 'https://sites.chase.com/services/creatives/pricingandterms.html/content/dam/pricingandterms/LGC60250.html', // *** VERIFY URL ***
  // Image dimensions (MUST BE ACCURATE for next/image)
  imageWidth: 480, // *** REPLACE with actual image width *** (Example Placeholder)
  imageHeight: 304, // *** REPLACE with actual image height *** (Example Placeholder)
};

// --- Rating Tooltip Content (Customize if needed for Ink Biz Preferred) ---
const ratingCriteria = [ // *** VERIFY/CUSTOMIZE these criteria for Ink Biz Preferred Rating ***
    'Ultimate Rewards Value & Flexibility',
    '3x Bonus Categories (Travel, Shipping, Ads, etc.)',
    'Sign-Up Bonus Value (Often 100k UR)',
    'Travel Protections (Primary Rental CDW)',
    'Annual Fee ($95)'
];

function InkBusinessPreferredReviewPage() {
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
  // !!! VERIFY all URLs, counts, and details FOR INK BIZ PREFERRED !!!
  const siteUrl = "https://www.travelcardinsider.com"; // *** REPLACE with your actual site URL ***
  const pageUrl = `${siteUrl}/cards/ink-business-preferred`; // *** REPLACE with your actual page URL ***
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Ink Business Preferred® Credit Card",
    "image": `${siteUrl}${reviewData.imageUrl}`, // *** Assuming imageUrl starts with / ***
    "description": "The Ink Business Preferred® Credit Card offers 3x points on travel, shipping, select advertising, and telecom, a substantial sign-up bonus, and versatile Ultimate Rewards redemption.", // Adjusted description
    "brand": {
      "@type": "Brand",
      "name": "Chase"
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
      "ratingCount": 1200, // *** REPLACE with actual or estimated count ***
      "reviewCount": 1200  // *** REPLACE with actual or estimated count ***
    },
    "offers": {
      "@type": "Offer",
      "url": reviewData.applyLink.startsWith('http') ? reviewData.applyLink : `${siteUrl}${reviewData.applyLink}`, // *** Ensure full APPLY URL ***
      "priceCurrency": "USD",
      "price": "95", // Annual Fee for Ink Biz Preferred
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
        <div style={{ marginTop: '2rem' }}></div> {/* Adjusted margin from HTML */}

        {/* Review Container using CSS Module */}
        <div className={styles.reviewContainer}>
          <article> {/* Wrap main content in article */}
            {/* ============= REVIEW HEADER ============= */}
            <header className={styles.reviewHeader}>
               {/* Using dangerouslySetInnerHTML for ® */}
              <h1 dangerouslySetInnerHTML={{ __html: "Ink Business Preferred® Credit Card – In-Depth 2025 Review"}}></h1>

              {/* Section 1 Content (Part of Header Structure in Template) */}
              <section id="section-1">
                 {/* Using dangerouslySetInnerHTML for ® */}
                <div className={styles.intro}>
                  <p dangerouslySetInnerHTML={{ __html:"The <strong>Ink Business Preferred® Credit Card</strong> from Chase is among the most revered small-business travel cards, offering <b>3x Ultimate Rewards</b> points on select categories—like travel, shipping, internet/phone services, and certain online advertising—plus a substantial sign-up bonus. If you’re an entrepreneur who wants robust business <b>travel</b> rewards in 2025, the Ink Preferred stands out for its synergy with the Ultimate Rewards ecosystem. In this review, we’ll dissect 20 sections: from quick stats and disclaimers to advanced usage tips, focusing especially on <b>business travel</b> strategies."}}></p>
                </div>

                {/* Image Container */}
                <div className={styles.cardImageContainer}>
                  {/* Corrected class name */}
                   <Image
                     src={reviewData.imageUrl}
                     // Using dangerouslySetInnerHTML for ®
                     alt={"Ink Business Preferred® Credit Card"}
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

                  {/* STAR RATING - Added based on template */}
                  <div className={styles.starRating} title={`Rated ${reviewData.ratingValue} out of 10 stars`} style={{ '--rating': `${reviewData.ratingValue * 10}%` }}>
                    <span>★★★★★</span>
                    <span className={styles.filledStars}>★★★★★</span>
                  </div>

                  <div className={styles.ratingDescription}>
                    <i>A top-tier small business travel card with 3x categories, big sign-up bonus, and flexible Ultimate Rewards points.</i>
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
                             {/* Using dangerouslySetInnerHTML for ® */}
                            <tr dangerouslySetInnerHTML={{__html:'<td data-label="Feature">APR</td><td data-label="Details">19.99%–27.99% Variable</td>'}}></tr>
                             {/* Using dangerouslySetInnerHTML for ® */}
                            <tr dangerouslySetInnerHTML={{__html:'<td data-label="Feature">Sign-Up Bonus</td><td data-label="Details">Often 100k Ultimate Rewards points after $15k spend in first 3 months (subject to change)</td>'}}></tr>
                             {/* Using dangerouslySetInnerHTML for &amp; ® */}
                            <tr dangerouslySetInnerHTML={{__html:'<td data-label="Feature">Rewards Rate</td><td data-label="Details">3x on travel, shipping, internet/phone/cable, &amp; select online ads (up to $150k/year); 1x after</td>'}}></tr>
                            <tr>
                                <td data-label="Feature">Foreign Transaction Fee</td>
                                <td data-label="Details">None</td>
                            </tr>
                             {/* Using dangerouslySetInnerHTML for ® */}
                            <tr dangerouslySetInnerHTML={{__html:'<td data-label="Feature">Redemption Options</td><td data-label="Details">Chase Ultimate Rewards portal, transfer to airline/hotel partners, or statement credits</td>'}}></tr>
                             {/* Using dangerouslySetInnerHTML for &amp; */}
                            <tr dangerouslySetInnerHTML={{__html:'<td data-label="Feature">Intro APR Offer</td><td data-label="Details">Not typically offered on this card (check current T&amp;Cs)</td>'}}></tr>
                            <tr>
                                <td data-label="Feature">Recommended Credit Score</td>
                                <td data-label="Details">Good–excellent (700+ typically); business details required</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

             {/* CTA Section */}
             <section id="cta" className={styles.ctaSection}>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <h2 dangerouslySetInnerHTML={{__html:"Get the <b>Ink Business Preferred® Credit Card</b> Today!"}}></h2>
                <div className={styles.ctaButtons}>
                    <a href={reviewData.applyLink} className={`${styles.btn} ${styles.btnApply}`} title="From card issuer's secure site" target="_blank" rel="noopener noreferrer sponsored">Apply Now</a>
                    <a href={reviewData.ratesLink} className={`${styles.btn} ${styles.btnRates}`} target="_blank" rel="noopener noreferrer sponsored" dangerouslySetInnerHTML={{__html:"See Rates &amp; Fees"}}></a>
                </div>
            </section>

            {/* Section 3: Card Overview & Positioning */}
            <section id="section-3" className={styles.reviewSection}>
                 <h2 dangerouslySetInnerHTML={{ __html:"Card Overview &amp; Positioning"}}></h2>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{ __html:"The <b>Ink Business Preferred®</b> is Chase’s flagship small business card focusing heavily on <b>business travel</b> and expenses. You earn <b>3x</b> points on broad categories relevant to entrepreneurs—like shipping, online advertising (Facebook, Google, etc.), phone/internet/cable services, and travel. If your business invests significantly in these areas, you can quickly rack up valuable <b>Ultimate Rewards®</b> points. With a typical sign-up bonus of <b>80k–100k points</b>—worth $1,000+ in travel— it’s a prime contender for business owners seeking high-value business travel. The <b>$95 annual fee</b> is easily offset if you frequently redeem for flights, hotels, or transfer to airline partners. No foreign transaction fee cements its global usability. In 2025, with many businesses returning to more frequent travel, the Ink Preferred stands tall as a top choice in the segment."}}></p>
            </section>

            {/* Section 4: Earning 3x Points & Business Travel Emphasis */}
            <section id="section-4" className={styles.reviewSection}>
                 <h2 dangerouslySetInnerHTML={{ __html:"Earning 3x Points &amp; Business Travel Emphasis"}}></h2>
                <p>
                    The card’s <b>3x</b> categories revolve around typical small-business needs:
                </p>
                <ul className={styles.featureList}>
                    <li><strong>Travel:</strong>
                    Flights, hotels, car rentals, taxis, tolls, parking—nearly all travel-coded expenses.
                    Perfect for business trips, conferences, or site visits.</li>
                    <li><strong>Shipping:</strong>
                    UPS, FedEx, USPS shipping costs—fantastic for e-commerce or product-based ventures shipping frequently.</li>
                    <li><strong>Internet, Cable, Phone Services:</strong>
                    A standard monthly overhead for many businesses, from broadband to phone lines or corporate cell phone bills.</li>
                    <li><strong>Online Advertising:</strong>
                    Facebook ads, Google Ads, LinkedIn, and more—3x is a boon if you run digital marketing campaigns.</li>
                </ul>
                <p>
                    You earn 3x on these up to a combined <b>$150,000</b> annually, then 1x after that.
                    Everything else is 1x. If your business invests heavily in travel or online ads,
                    the points can accumulate rapidly.
                    This synergy suits frequent travelers who want to offset flight/hotel costs or
                    leverage <b>transfer partners</b> for premium cabin flights.
                    Essentially, you turn your business expenses into robust <b>business travel</b> opportunities.
                </p>
            </section>

             {/* Section 5: Redeeming Ultimate Rewards for Travel */}
             <section id="section-5" className={styles.reviewSection}>
                 <h2>Redeeming Your Ultimate Rewards for Travel</h2>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{ __html:"Points earned with Ink Business Preferred feed into <b>Chase Ultimate Rewards</b>. You can redeem them in various ways, but for business travel, the top options are:"}}></p>
                <ol className={styles.numberedList}>
                    <li><strong>Chase Travel Portal:</strong>
                    Points are worth 1.25 cents each when booking flights, hotels, car rentals, or experiences via Chase’s portal.
                    That means 100k points = $1,250 in travel.
                    It's straightforward—like an online travel agency powered by Chase.</li>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{ __html:"<strong>Transfer to Airline/Hotel Partners:</strong> Major partners include United, Southwest, JetBlue, British Airways, Hyatt, Marriott, etc. Typically 1:1 transfers. This can unlock higher value if you find sweet-spot award flights or certain Hyatt redemptions. Skilled travelers might fetch 2 cents+ per point in business/first-class flights or top-tier hotels."}}></li>
                    <li><strong>Statement Credits or Cash Back:</strong>
                    Only 1 cent each in value, so it’s less ideal for maximizing your business travel returns.
                    Still an option if you need straightforward reimbursements.</li>
                </ol>
                <p>
                    Most business owners prefer the <b>travel portal</b> or <b>transfer</b> approach for bigger potential returns.
                    This is especially beneficial for international business trips or premium cabins—
                    you can drastically reduce out-of-pocket travel costs.
                    If your business regularly invests in travel,
                    the Ink Preferred’s synergy with Ultimate Rewards is a top highlight in 2025.
                </p>
            </section>

            {/* Section 6: Sign-Up Bonus & Massive Value */}
             <section id="section-6" className={styles.reviewSection}>
                <h2 dangerouslySetInnerHTML={{ __html:"Sign-Up Bonus &amp; Massive Value"}}></h2>
                {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{ __html:"Historically, the <b>Ink Business Preferred®</b> sign-up bonus runs around <b>80k–100k</b> points after $15k in purchases within the first 3 months. That can be big, but you must confirm the current offer. While $15k is substantial, many small businesses easily reach that with rent, supplies, ad budgets, etc. Then you hold a chunk of Ultimate Rewards that can be worth $1,250+ in travel via the portal or even more if you transfer to airline/hotel partners for premium cabins. For established businesses, this can jumpstart your <b>business travel</b> budget. Just ensure your business can handle that spend threshold responsibly."}}></p>
            </section>

            {/* Section 7: Foreign Transaction Fee & Global Use */}
             <section id="section-7" className={styles.reviewSection}>
                 <h2>No Foreign Transaction Fee: Perfect for Global Travel</h2>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{ __html:"The Ink Business Preferred® has <b>no foreign transaction fees</b>, making it a dependable companion if you or your employees travel abroad. You can charge overseas hotels, dining, or taxis at 3x if coded as “travel,” or at least 1x if not, without the typical 3% fee many cards levy. This is essential for entrepreneurs with global expansions, international conferences, or supply chain visits. Considering that many business trips cross borders in 2025, the no-FTF feature is a significant cost saver."}}></p>
            </section>

             {/* Section 8: 2025 Updates & Potential Tweaks */}
             <section id="section-8" className={styles.reviewSection}>
                <h2 dangerouslySetInnerHTML={{ __html:"2025 Updates &amp; Potential Tweaks"}}></h2>
                <ol className={styles.numberedList}>
                    <li><strong>Adjustments to 3x Categories:</strong>
                    Chase might expand categories or raise the $150k cap if competition intensifies.
                    Keep an eye on official announcements if you’re close to that spend ceiling.</li>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>New Transfer Partners or Partnerships:</strong> Chase occasionally adds (or removes) airline/hotel partners. Additional direct partners could further boost redemption potential. Stay tuned for changes in the UR ecosystem."}}></li>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Possible Sign-Up Bonus Fluctuations:</strong> Chase has run limited-time 100k, 120k, or even targeted offers. If you see a bigger bonus, it could be a prime time to apply."}}></li>
                    <li><strong>Mobile Payment Bonuses:</strong>
                    Some speculate about special promotions for digital wallets or contactless.
                    Not guaranteed, but short-term bonuses are sometimes introduced.</li>
                </ol>
                 {/* Using dangerouslySetInnerHTML for &amp; */}
                <p dangerouslySetInnerHTML={{ __html:"Always verify with Chase’s official site or your business banking rep for any real-time changes, especially around sign-up bonus or the UR partner list. In 2025, competition among business travel cards is fierce— so watch for incremental improvements."}}></p>
            </section>

             {/* Section 9: Real-Life Example Table */}
             <section id="section-9" className={styles.reviewSection}>
                 <h2 dangerouslySetInnerHTML={{ __html:"Real-Life Example: Annual Spend &amp; Points Earned"}}></h2>
                <p>
                    Suppose your business invests yearly in:
                </p>
                <ul className={styles.featureList}>
                    <li>$8,000 in travel (flights, hotels, car rentals, etc.)</li>
                    <li>$6,000 in shipping costs</li>
                    <li>$10,000 in online ads (Facebook, Google Ads, etc.)</li>
                    <li>$2,000 phone/internet/cable services</li>
                    <li>$24,000 in other business expenses outside 3x categories</li>
                </ul>
                <p>That sums to $50,000 total, $26,000 of which is in 3x categories.
                Let’s break it down:
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
                                <td data-label="Category">Travel</td>
                                <td data-label="Annual Spend">$8,000</td>
                                <td data-label="Points per $">3x</td>
                                <td data-label="Total Points">24,000</td>
                            </tr>
                            <tr>
                                <td data-label="Category">Shipping</td>
                                <td data-label="Annual Spend">$6,000</td>
                                <td data-label="Points per $">3x</td>
                                <td data-label="Total Points">18,000</td>
                            </tr>
                            <tr>
                                <td data-label="Category">Online Ads</td>
                                <td data-label="Annual Spend">$10,000</td>
                                <td data-label="Points per $">3x</td>
                                <td data-label="Total Points">30,000</td>
                            </tr>
                            <tr>
                                <td data-label="Category">Phone/Internet/Cable</td>
                                <td data-label="Annual Spend">$2,000</td>
                                <td data-label="Points per $">3x</td>
                                <td data-label="Total Points">6,000</td>
                            </tr>
                            <tr>
                                <td data-label="Category">All Other</td>
                                <td data-label="Annual Spend">$24,000</td>
                                <td data-label="Points per $">1x</td>
                                <td data-label="Total Points">24,000</td>
                            </tr>
                            <tr style={{fontWeight: 'bold', borderTop: '2px solid #dee2e6'}}>
                                <th data-label="Category">Total</th>
                                <th data-label="Annual Spend">$50,000</th>
                                <th data-label="Points per $">—</th>
                                <th data-label="Total Points">102,000</th>
                            </tr>
                        </tbody>
                    </table>
                </div>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{ __html:"That’s <b>102,000</b> UR points from everyday spend. If you also got the sign-up bonus—say 100k for meeting the threshold— that’s <b>202,000</b> points total. Redeemed via the portal at 1.25¢ each = $2,525 in travel. Or possibly more if transferred to a <b>1:1</b> airline/hotel partner. The $95 annual fee is trivial compared to the potential value for business travel."}}></p>
            </section>

             {/* Section 10: Competitor Analysis */}
             <section id="section-10" className={styles.reviewSection}>
                 <h2>Competitor Analysis</h2>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{ __html:"If you’re eyeing the Ink Preferred, compare it to these top business travel cards:"}}></p>
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
                            <tr dangerouslySetInnerHTML={{__html:'<td data-label="Card">Ink Business Preferred®</td><td data-label="Annual Fee">$95</td><td data-label="Rewards">3x on travel, shipping, internet, cable, phone, ads; 1x else</td><td data-label="Key Advantage">Large sign-up bonus, flexible UR points, $150k cap on 3x</td>'}}></tr>
                             {/* Using dangerouslySetInnerHTML for ® */}
                            <tr dangerouslySetInnerHTML={{__html:'<td data-label="Card">Amex Business Gold®</td><td data-label="Annual Fee">$295 (recently $375, but confirm)</td><td data-label="Rewards">4x on top 2 categories (from 6 options), up to $150k/year</td><td data-label="Key Advantage">Higher multipliers, but bigger fee, MRs can transfer to Delta, etc.</td>'}}></tr>
                             {/* Using dangerouslySetInnerHTML for ® */}
                            <tr dangerouslySetInnerHTML={{__html:'<td data-label="Card">Capital One Spark Miles®</td><td data-label="Annual Fee">$95 (waived first year, verify current)</td><td data-label="Rewards">2x on everything, 5x on hotels/cars booked via Cap One Travel</td><td data-label="Key Advantage">Simpler approach, but less partner variety vs. Ultimate Rewards</td>'}}></tr>
                             {/* Using dangerouslySetInnerHTML for ® */}
                            <tr dangerouslySetInnerHTML={{__html:'<td data-label="Card">Ink Business Unlimited®</td><td data-label="Annual Fee">$0</td><td data-label="Rewards">1.5% cash back (or UR points) on all spend</td><td data-label="Key Advantage">No fee, simpler, but fewer big multipliers</td>'}}></tr>
                        </tbody>
                    </table>
                </div>
                {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{ __html:"The <b>Ink Preferred</b> excels if you spend heavily in those <b>3x</b> categories, want <b>Ultimate Rewards</b> for business travel, and appreciate a large sign-up bonus at a moderate $95 fee. If your spend is widely varied, something like a 2x Spark Miles might be simpler. If you want 4x or advanced Amex perks, Business Gold might do better (but costs more). In short, the Ink Preferred remains a leading business travel pick for 2025."}}></p>
            </section>

             {/* Section 11: Synergy with Other Chase Cards */}
             <section id="section-11" className={styles.reviewSection}>
                 <h2>Synergy with Other Chase Cards</h2>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{ __html:"You can pair <b>Ink Business Preferred</b> with other Chase cards:"}}></p>
                <ul className={styles.featureList}>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{ __html:"<strong>Ink Business Cash® / Ink Business Unlimited®:</strong> They have no annual fee, earning 5x or 1.5x on certain categories. You can pool points into the Ink Preferred account and redeem at 1.25¢ or transfer to partners. This strategy effectively turns your smaller Ink cards into more valuable UR points when combined with the Preferred."}}></li>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{ __html:"<strong>Chase Sapphire Reserve® / Preferred® (Personal):</strong> If you want personal travel coverage or different category bonuses, you can also combine your business UR points with personal UR points. If you have the Reserve, that personal account offers 1.5 cents each in the travel portal vs. the Ink’s 1.25. So you could earn business points on Ink, transfer them to your personal Reserve, and redeem for 1.5¢ each on personal or bleisure travel. Alternatively, you can keep them separate if you want to track business vs. personal travel distinctly."}}></li>
                </ul>
                <p>
                    Combining multiple <b>Chase</b> business or personal cards is a hallmark strategy for entrepreneurs wanting to maximize UR points.
                    If you run a business, the Ink Preferred is your big anchor card for <b>business travel</b>.
                    Meanwhile, a personal Sapphire Reserve might give you an even higher redemption rate (1.5¢) in the portal.
                    Or at any rate, you can unify your UR stash in one place, ensuring maximum travel redemption flexibility.
                </p>
            </section>

             {/* Section 12: Additional Benefits & Travel Protections */}
             <section id="section-12" className={styles.reviewSection}>
                 <h2 dangerouslySetInnerHTML={{ __html:"Additional Benefits &amp; Travel Protections"}}></h2>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{ __html:"Ink Preferred is known for strong travel and purchase protections:"}}></p>
                <ul className={styles.featureList}>
                    <li><strong>Cell Phone Protection:</strong>
                    Pay your business phone bill with this card and get coverage for damage or theft up to $600 per claim (with a small deductible,
                    limit 3 claims/year).
                    A big perk for small businesses with multiple employee phones.</li>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{ __html:"<strong>Trip Cancellation/Interruption Insurance:</strong> Up to $5,000 per covered trip if it’s canceled or interrupted for covered reasons when booked with the card."}}></li>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{ __html:"<strong>Primary Rental Car Insurance (Business rentals):</strong> When renting for business use, coverage can be primary for collision damage. Great for road warriors or frequent travel."}}></li>
                     {/* Using dangerouslySetInnerHTML for &amp; */}
                    <li dangerouslySetInnerHTML={{ __html:"<strong>Extended Warranty &amp; Purchase Protection:</strong> Standard but valuable coverage on eligible new purchases."}}></li>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{ __html:"<strong>No Foreign Transaction Fee:</strong> As stated, crucial for overseas business trips or purchases."}}></li>
                </ul>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{ __html:"These robust protections are a key reason many business owners keep the Ink Preferred in their wallet. The cell phone insurance is especially useful if your staff phones are all on one plan. Combined with 3x categories, it fosters a comprehensive business travel solution."}}></p>
            </section>

            {/* Section 13: APR & Carrying a Balance */}
             <section id="section-13" className={styles.reviewSection}>
                <h2 dangerouslySetInnerHTML={{ __html:"APR &amp; Carrying a Balance"}}></h2>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{ __html:"The standard APR stands around <b>19.99%–27.99%</b> variable. Typically, Ink Business Preferred doesn’t feature an intro 0% APR for purchases or balance transfers, focusing instead on the massive sign-up bonus and 3x categories. If you revolve a balance, interest charges can overshadow your points. Best practice: keep the card paid in full monthly—especially with business finances. If you need a 0% period, you might pair it with a different business card (like Ink Business Cash®) that occasionally offers an intro 0%. But the real power of Ink Preferred is in the travel rewards, not interest promotions."}}></p>
            </section>

             {/* Section 14: Potential Downsides */}
             <section id="section-14" className={styles.reviewSection}>
                <h2>Potential Downsides</h2>
                <ul className={styles.featureList}>
                    <li><strong>$95 Annual Fee:</strong>
                    Not huge, but some business owners prefer a no-fee card if they can’t leverage the sign-up bonus or 3x categories sufficiently.</li>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>$150k Cap on 3x Categories:</strong> Big spenders might exceed this limit quickly. After that, it’s just 1x. However, $150k is fairly generous for small/medium businesses."}}></li>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>No 0% Intro APR:</strong> If you want to finance a large purchase, this card won’t help you avoid interest. You’d rely on other lines of credit or a different card with an intro offer."}}></li>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Strictness with 5/24 Rule:</strong> If you’ve opened 5 or more personal credit cards in the past 24 months, you might be denied. This standard applies to most Chase cards. Business owners must watch personal inquiries too."}}></li>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Limited Bonus Categories:</strong> If your business doesn’t do shipping or online ads, or invests less in travel/telecom, you might not see the full 3x advantage. Another card might be more flexible if your expenses differ."}}></li>
                </ul>
            </section>

             {/* Section 15: Advanced Tips & Strategies */}
             <section id="section-15" className={styles.reviewSection}>
                <h2 dangerouslySetInnerHTML={{ __html:"Advanced Tips &amp; Strategies"}}></h2>
                <ol className={styles.numberedList}>
                    <li><strong>Leverage Business Travel in 3x:</strong>
                    All airfare, hotels, rental cars, ride-shares, train tickets—
                    ensure you book them on this card to maximize 3x.
                    If employees travel, consider giving them employee cards (no additional cost)
                    so every business trip expense piles up points in your account.</li>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{ __html:"<strong>Combine with Ink Cash® or Unlimited®:</strong> If you have the <b>Ink Business Cash</b> (5x office supply/telecom but at no annual fee) or <b>Ink Business Unlimited</b> (1.5x on everything), funnel all points into the Ink Preferred for high-value travel redemption. This is called the “Chase trifecta/quadrifecta” method on the business side."}}></li>
                    <li><strong>Utilize Transfer Partners for Premium Flights:</strong>
                    If you want business class or first class for long-haul business flights,
                    transferring points to, say, United or Air Canada or Hyatt might yield outsized value
                    instead of using the portal at 1.25¢.
                    Do some research on sweet-spot awards.</li>
                    <li><strong>Monitor Category Coding:</strong>
                    Make sure shipping services or online ad platforms code properly.
                    If you notice lower points, contact Chase or verify the merchant category.
                    Also confirm your phone/internet bills are coded under telecom.</li>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{ __html:"<strong>Max Out the $150k if Possible:</strong> If you can route or shift relevant expenses to the Ink Preferred up to $150k, you’ll maximize 3x. Once you surpass that, consider your other business cards (like Ink Unlimited) if needed."}}></li>
                </ol>
            </section>

            {/* Section 16: Another Real-Life Scenario */}
            <section id="section-16" className={styles.reviewSection}>
                <h2>Another Example: Marketing-Heavy Business</h2>
                <p>
                    Suppose your marketing agency invests heavily in online ads plus shipping.
                    E.g.:
                </p>
                <ul className={styles.featureList}>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{ __html:"$20,000 on Facebook/Google Ads"}}></li>
                    <li>$10,000 in shipping expenses</li>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{ __html:"$7,000 in travel for conferences, flights, hotels"}}></li>
                    <li>$3,000 phone/internet</li>
                    <li>$15,000 everything else</li>
                </ul>
                <p>
                    That’s $55,000 total, with $40,000 in 3x categories, generating:
                </p>
                <ul className={styles.featureList}>
                    <li>3x * 40k = 120,000 points</li>
                    <li>1x * 15k = 15,000 points</li>
                    <li>Total = 135,000 points from normal spend</li>
                </ul>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{ __html:"If you also meet the sign-up bonus, say 100k points after $15k in 3 months, you could be near 235,000 points. That’s huge for business travel— you might book multiple domestic flights for your staff or snag business class seats for overseas deals. The $95 fee is overshadowed by the potential thousands in travel savings."}}></p>
            </section>

             {/* Section 17: Pairing with a Personal Chase Sapphire? */}
             <section id="section-17" className={styles.reviewSection}>
                <h2>Pairing with a Personal Chase Sapphire?</h2>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{ __html:"Some business owners also hold a personal <b>Chase Sapphire Reserve®</b> or <b>Preferred®</b>. You can combine your Ink Preferred points with those personal UR points. If you have the Reserve, that personal account offers 1.5 cents each in the travel portal vs. the Ink’s 1.25. So you could earn business points on Ink, transfer them to your personal Reserve, and redeem for 1.5¢ each on personal or bleisure travel. Alternatively, you can keep them separate if you want to track business vs. personal travel distinctly. The synergy is robust if you want maximum redemption flexibility. Just keep accounting clean if you’re mixing business and personal usage."}}></p>
            </section>

            {/* Section 18: Competitor & Alternative Cards */}
            <section id="section-18" className={styles.reviewSection}>
                <h2 dangerouslySetInnerHTML={{ __html:"Competitor &amp; Alternative Cards"}}></h2>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{ __html:"If you’re uncertain about the Ink Preferred, consider these popular business travel alternatives:"}}></p>
                <ul className={styles.featureList}>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Amex Business Gold®:</strong> 4x in your top 2 categories (from 6 possible, e.g., airfare, U.S. ads, U.S. restaurants, etc.), but $295–$375 annual fee. Great if your spend matches those categories heavily. Points are in Membership Rewards—also strong for airline transfers."}}></li>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Capital One Spark Miles for Business®:</strong> 2x miles on everything, 5x on hotels/cars via Capital One Travel, $95 fee. Simpler if your spend doesn’t align to the Ink categories, but fewer direct airline transfer partners than Chase."}}></li>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Ink Business Cash®:</strong> No annual fee, 5x on office supplies, phone, internet (up to $25k), 2x on gas/dining. Great companion or alternative if you want no fee but smaller bonus. Pairing with Ink Preferred is unstoppable for certain setups."}}></li>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>U.S. Bank Business Leverage® Visa Signature®:</strong> 2x on the top two categories you spend most in each month, complicated but can be valuable. Typically less flexible in redemption than UR points though."}}></li>
                </ul>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{ __html:"For <b>business travel</b> specifically, the Ink Business Preferred is top-tier due to the combination of 3x travel, easy airline/hotel transfer, and a formidable sign-up bonus. If your business expense aligns well with shipping/ads/telecom, it’s truly a powerhouse. Alternatively, if your categories differ or you want 2x on everything, competitor cards might suffice."}}></p>
            </section>

            {/* Section 19: Who Should Get the Card? */}
            <section id="section-19" className={styles.reviewSection}>
                <h2 dangerouslySetInnerHTML={{ __html:"Who Should Get the Ink Business Preferred®?"}}></h2>
                {/* Using dangerouslySetInnerHTML for ® */}
                <div className={styles.prosCons}>
                    <div className={styles.pros}>
                         <h3>Yes, If You:</h3>
                        <ul className={styles.featureList}>
                            <li>Run a <b>small or medium business</b> with significant spend in <b>travel, shipping, ads, telecom</b></li>
                            <li>Desire a <b>big sign-up bonus</b> (80k+ UR points) to offset business travel costs</li>
                            <li>Value <b>Ultimate Rewards</b> for flexible redemption or <b>1:1 airline/hotel transfers</b></li>
                            <li>Frequent <b>overseas travel</b> or online foreign vendor payments (no FTF crucial)</li>
                            <li>Want robust <b>cell phone protection</b> and <b>travel insurance</b> for business trips</li>
                        </ul>
                    </div>
                    <div className={styles.cons}>
                        <h3>No, If You:</h3>
                        <ul className={styles.featureList}>
                            <li>Prefer a <b>no annual fee</b> business card (e.g., Ink Business Cash or Unlimited)</li>
                             {/* Using dangerouslySetInnerHTML for ® */}
                            <li dangerouslySetInnerHTML={{__html:"Lack enough spend in 3x categories (the annual fee might not be justified then)"}}></li>
                             {/* Using dangerouslySetInnerHTML for ® */}
                            <li dangerouslySetInnerHTML={{__html:"Need a <b>0% intro APR</b> for a large business purchase (this card lacks that feature)"}}></li>
                             {/* Using dangerouslySetInnerHTML for ® */}
                            <li dangerouslySetInnerHTML={{__html:"Want a simpler approach, e.g., <b>2x on everything</b> (Spark Miles might be better)"}}></li>
                             {/* Using dangerouslySetInnerHTML for ® */}
                            <li dangerouslySetInnerHTML={{__html:"Are restricted by <b>Chase’s 5/24 rule</b> or have trouble meeting $15k sign-up bonus threshold"}}></li>
                        </ul>
                    </div>
                </div>
            </section>

             {/* Section 20: Final Thoughts & Disclaimer */}
             <section id="section-20" className={styles.reviewSection}>
                <h2 dangerouslySetInnerHTML={{ __html:"Final Thoughts &amp; Disclaimer"}}></h2>
                {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{ __html:"The <b>Ink Business Preferred® Credit Card</b> ranks among the best for <b>business travel</b> in 2025, boasting a large sign-up bonus, <b>3x</b> on key categories up to $150k, plus flexible redemption via <b>Ultimate Rewards®</b>. Its $95 annual fee is modest compared to the potential thousands you can save if you frequently book flights/hotels for business. The synergy with other Ink cards or personal Chase cards broadens your redemption potential. If your company invests significantly in shipping, online advertising, or traveling often, the Ink Preferred is a powerful tool to turn your overhead into free or discounted corporate travel. Just mind the $15k spend requirement for the sign-up bonus and watch out for the 5/24 rule. Overall, it’s a top contender for entrepreneurs seeking big travel returns on their business expenses."}}></p>
                {/* Using dangerouslySetInnerHTML for &amp; ® */}
                <p dangerouslySetInnerHTML={{ __html:"<strong>Disclaimer:</strong> Terms, sign-up bonuses, and redemption policies can change. Always verify with Chase for the latest. We may earn affiliate commissions from select links, but editorial opinions remain our own. Examples of potential redemption reflect typical usage but subject to availability and dynamic pricing. If you carry a balance beyond statement cycles, interest can erode reward gains. Check official T&amp;Cs for full usage details and coverage guidelines."}}></p>
            </section>

             {/* CTA Section */}
             <section id="cta" className={styles.ctaSection}>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <h2 dangerouslySetInnerHTML={{__html:"Get the <b>Ink Business Preferred® Credit Card</b> Today!"}}></h2>
                <div className={styles.ctaButtons}>
                    <a href={reviewData.applyLink} className={`${styles.btn} ${styles.btnApply}`} title="From card issuer's secure site" target="_blank" rel="noopener noreferrer sponsored">Apply Now</a>
                    <a href={reviewData.ratesLink} className={`${styles.btn} ${styles.btnRates}`} target="_blank" rel="noopener noreferrer sponsored" dangerouslySetInnerHTML={{__html:"See Rates &amp; Fees"}}></a>
                </div>
            </section>

             {/* E-A-T Section - Adapted for Ink Biz Preferred */}
             <section id="eat-expertise-authority-trustworthiness" className={`${styles.reviewSection} ${styles.eatSection}`}>
                <h2 dangerouslySetInnerHTML={{ __html: "Our Commitment to E-A-T: Expertise, Authority &amp; Trustworthiness"}}></h2>
                {/* Using E-A-T text adapted for Ink Biz Preferred */}
                <p>
                    At <strong>TravelCardInsider</strong>, we focus on:
                </p>
                <h3>1. Expertise</h3>
                <ul className={styles.featureList}>
                    {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Real-World Testing:</strong> Our team utilizes the Ink Business Preferred® for actual shipping, ad campaigns, travel booking to confirm 3x categories and redemption processes."}}></li>
                    {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Frequent Fact-Checks:</strong> We monitor sign-up bonus fluctuations, new UR transfer partners, or policy changes from Chase in real time."}}></li>
                    {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Business Travel Insights:</strong> We attend conferences, analyze business owners’ usage data, and refine knowledge on corporate travel cost reduction via rewards like Ultimate Rewards®."}}></li>
                </ul>
                <h3>2. Authority</h3>
                <ul className={styles.featureList}>
                    {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>In-Depth Reviews:</strong> Our ~2,000-word coverage addresses synergy with other Ink cards, advanced partner redemptions, and competitor breakdowns for Ink Business Preferred®."}}></li>
                    {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Industry Citations:</strong> We’re often referenced by top finance/travel outlets for objective business card analysis, particularly for small/medium enterprises."}}></li>
                    <li><strong>Transparency:</strong>
                    If affiliate links apply, we disclose them.
                    Our editorial stance and star ratings remain solely determined by user value.</li>
                </ul>
                <h3>3. Trustworthiness</h3>
                <ul className={styles.featureList}>
                    <li><strong>Editorial Independence:</strong>
                    Advertisers and banks do not influence our final verdict or how we weight pros/cons.</li>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Swift Content Updates:</strong> If major changes occur (e.g., sign-up bonus soared to 120k, or new UR partners), we revise promptly to ensure accuracy for businesses deciding on a new card."}}></li>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>User Engagement:</strong> We welcome real business owners’ feedback on shipping category codes, or ad platform recognition. This practical data fosters better clarity."}}></li>
                    {/* Using Link component for internal link & &amp; */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Privacy &amp; Security:</strong> Per our <a href='/privacy-policy'>Privacy Policy</a>, we protect user data, aligning with best online practices."}}>
                        {/* Corrected: <Link href="/privacy-policy"><a>Privacy Policy</a></Link> */}
                    </li>
                </ul>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{ __html: "By embodying E-A-T, we deliver a reliable, comprehensive view of the <strong>Ink Business Preferred® Credit Card</strong> for your 2025 business travel ambitions." }}></p>
            </section>

          </article>
        </div> {/* Close reviewContainer */}
      </main>

      
    </>
  );
}

export default InkBusinessPreferredReviewPage;