// Example Path: pages/reviews/discover-it-miles.js
// Or: pages/reviews/[slug].js (if using dynamic routing with 'discover-it-miles' as slug)

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
  cardName: 'Discover it® Miles Credit Card',
  title: 'Discover it® Miles Credit Card – In-Depth 2025 Review',
  description: 'A comprehensive 2000-word review of the Discover it® Miles credit card, covering rewards, fees, travel benefits, 2025 updates, and tips for maximizing your miles.',
  keywords: 'Discover it Miles, travel rewards, credit card, no annual fee, 2025 updates',
  author: 'TravelCardInsider', // *** REPLACE with your actual author/site name ***
  imageUrl: '/cardart-travel-beachcard-620-382.webp', // *** VERIFY PATH in /public ***
  ratingValue: 7.0, // From Discover it Miles HTML
  applyLink: 'https://www.discover.com/credit-cards/travel/', // *** REPLACE with actual Discover APPLY URL ***
  ratesLink: 'https://www.discovercard.com/application/website/ratesrewards?srcCde=GJX4&adobe_mc=TS%3D1741447882%7CMCMID%3D39379935660807998981588704922154453327%7CMCORGID%3D0D6C4673527839230A490D45%2540AdobeOrg&sv_session_undefined=true&_gl=1*1ec64ug*_gcl_au*MTYyMTU5ODAxMS4xNzQwMzE1MDcw*_ga*MTk0MTA3MDUwOC4xNzQwMzE1MDcx*_ga_3MJNPV4VSE*MTc0MTQ0Nzg3NS40LjAuMTc0MTQ0Nzg3NS42MC4wLjA.', // *** VERIFY URL ***
  // Image dimensions (MUST BE ACCURATE for next/image) - Guessed from filename
  imageWidth: 620, // *** REPLACE with actual image width ***
  imageHeight: 382, // *** REPLACE with actual image height ***
};

// --- Rating Tooltip Content (Customize if needed for Discover it Miles) ---
const ratingCriteria = [ // *** VERIFY/CUSTOMIZE these criteria for Discover it Miles Rating ***
    'First-Year Miles Match Value',
    'Flat-Rate Earning (1.5x Miles)',
    'No Annual Fee',
    'No Foreign Transaction Fee',
    'Limited Travel Perks/Insurance',
];

function DiscoverItMilesReviewPage() {
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
  // !!! VERIFY all URLs, counts, and details FOR DISCOVER IT MILES !!!
  const siteUrl = "https://www.travelcardinsider.com"; // *** REPLACE with your actual site URL ***
  const pageUrl = `${siteUrl}/reviews/discover-it-miles`; // *** REPLACE with your actual page URL ***
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Discover it® Miles",
    "image": `${siteUrl}${reviewData.imageUrl}`, // *** Assuming imageUrl starts with / ***
    "description": "The Discover it® Miles card offers 1.5x miles on every purchase, no annual fee, and unlimited matching of all miles earned at the end of your first year.", // Adjusted description
    "brand": {
      "@type": "Brand",
      "name": "Discover"
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
      "ratingCount": 510, // *** REPLACE with actual or estimated count ***
      "reviewCount": 510  // *** REPLACE with actual or estimated count ***
    },
    "offers": {
      "@type": "Offer",
      "url": reviewData.applyLink.startsWith('http') ? reviewData.applyLink : `${siteUrl}${reviewData.applyLink}`, // *** Ensure full APPLY URL ***
      "priceCurrency": "USD",
      "price": "0", // Annual Fee for Discover it Miles
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
               {/* Using dangerouslySetInnerHTML for ® */}
              <h1 dangerouslySetInnerHTML={{ __html: "Discover it® Miles Credit Card – 2025 Review"}}></h1>

              {/* Section 1 Content (Part of Header Structure in Template) */}
              <section id="overview"> {/* Match HTML ID */}
                <div className={styles.intro}>
                   {/* Using dangerouslySetInnerHTML for ® & ™ */}
                  <p dangerouslySetInnerHTML={{ __html:"The <strong>Discover it® Miles</strong> card remains a top contender for travelers seeking simplicity, no annual fee, and a unique perk: Discover automatically matches all the miles you’ve earned at the end of your first year. You’ll typically earn <strong>1.5x miles on every purchase</strong>, making it especially valuable for general spending— no rotating categories or enrollment hassles. Many travelers love that these miles can be redeemed for travel purchases at a straightforward rate, or even for cash back if preferred. In this 2025 review, we’ll dive into how the card fares in an ever-evolving travel credit card landscape."}}></p>
                </div>

                {/* Image Container */}
                <div className={styles.cardImageContainer}>
                  {/* Corrected class name */}
                   <Image
                     src={reviewData.imageUrl}
                     alt={"Discover it Miles Card"}
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
                    <i>No-annual-fee freedom with a first-year miles match!</i>
                  </div>
                </div>
              </section>
            </header>

            {/* ============= REVIEW CONTENT SECTIONS (Hardcoded JSX) ============= */}

             {/* Section 2: Quick Stats Table (Mapped from HTML Section 1) */}
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
                                <td data-label="Feature">Welcome Offer</td>
                                <td data-label="Details">Discover Match: All miles earned in the first year are matched, effectively doubling your first-year earnings</td>
                            </tr>
                             {/* Using dangerouslySetInnerHTML for ® */}
                            <tr dangerouslySetInnerHTML={{__html:'<td data-label="Feature">Rewards Rate</td><td data-label="Details">1.5 miles per $1 on every purchase</td>'}}></tr>
                            <tr>
                                <td data-label="Feature">Annual Fee</td>
                                <td data-label="Details">$0</td>
                            </tr>
                             {/* Using dangerouslySetInnerHTML for ® */}
                            <tr dangerouslySetInnerHTML={{__html:'<td data-label="Feature">Foreign Transaction Fee</td><td data-label="Details">None (but Discover acceptance may vary internationally)</td>'}}></tr>
                            <tr>
                                <td data-label="Feature">Recommended Credit Score</td>
                                <td data-label="Details">670+ (Good to Excellent)</td>
                            </tr>
                             {/* Using dangerouslySetInnerHTML for &amp; ® */}
                            <tr dangerouslySetInnerHTML={{__html:'<td data-label="Feature">Intro APR Offer</td><td data-label="Details">0% intro APR on purchases for 15 months (then 16.24%–27.24% Variable)</td>'}}></tr>
                             {/* Using dangerouslySetInnerHTML for ® */}
                            <tr dangerouslySetInnerHTML={{__html:'<td data-label="Feature">Regular APR</td><td data-label="Details">16.24%–27.24% Variable</td>'}}></tr>
                            <tr>
                                <td data-label="Feature">Penalty Fees</td>
                                <td data-label="Details">No penalty APR; Up to $41 late fee</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            {/* CTA Section */}
            <section id="cta" className={styles.ctaSection}>
                {/* Using dangerouslySetInnerHTML for ® */}
                <h2 dangerouslySetInnerHTML={{__html:"Get the <b>Discover it® Miles</b> Card Today!"}}></h2>
                <div className={styles.ctaButtons}>
                    <a href={reviewData.applyLink} className={`${styles.btn} ${styles.btnApply}`} title="From card issuer's secure site" target="_blank" rel="noopener noreferrer sponsored">Apply Now</a>
                     {/* Using dangerouslySetInnerHTML for &amp; */}
                    <a href={reviewData.ratesLink} className={`${styles.btn} ${styles.btnRates}`} target="_blank" rel="noopener noreferrer sponsored" dangerouslySetInnerHTML={{__html:"See Rates &amp; Fees"}}></a>
                </div>
            </section>

            {/* Section 3: Card Overview & Positioning (Mapped from HTML Section 2) */}
             <section id="section-3" className={styles.reviewSection}>
                <h2>Card Overview and Positioning</h2>
                {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{__html:"The <strong>Discover it® Miles</strong> card has carved a niche for itself among travel enthusiasts who prefer a straightforward approach to earning rewards. Unlike cards that juggle rotating categories or complex airline/hotel transfer systems, Discover’s 1.5x miles on everything is refreshingly simple. Additionally, your first-year miles are effectively <em>doubled</em> by Discover’s unlimited match. This positions the card as a powerful no-fee alternative to annual-fee travel cards that promise higher ongoing multipliers."}}></p>
                <p>
                    More importantly, the card offers flexibility: you can redeem
                    miles for travel statement credits, essentially “erasing”
                    airfare, hotels, rideshare, or other travel-coded purchases.
                    And if you’d rather just get cash, that’s also an option,
                    albeit the real value often shines when using the miles
                    to offset travel spending.
                </p>
            </section>

            {/* Section 4: Discover Match (Mapped from HTML Section 3) */}
             <section id="section-4" className={styles.reviewSection}>
                <h2>Discover Match: A Unique Welcome Offer</h2>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{__html:"Instead of a traditional one-time bonus for spending a certain amount, <strong>Discover it® Miles</strong> features a first-year “match.” That means if you earn, say, 35,000 miles in your first year, Discover will match them, giving you a total of 70,000. There’s <em>no cap</em> on how many miles you can match—so the sky’s the limit if you anticipate higher spending or plan big purchases within that introductory year."}}></p>
                <p>
                    <strong>Why It’s Noteworthy:</strong>
                    With some competing no-fee cards, you might only get $200
                    or $250 as a sign-up bonus for spending a few thousand.
                    But the Discover match can be far more lucrative if
                    your yearly outlay is significant. For example, if
                    you spend $20,000 in your first year, you’ll earn
                    30,000 miles (1.5 miles per $1) plus another 30,000
                    from Discover’s match, for a total of 60,000 miles.
                    That’s $600+ worth of travel value with zero annual fee.
                </p>
            </section>

             {/* Section 5: Rewards Structure (Mapped from HTML Section 4) */}
             <section id="section-5" className={styles.reviewSection}>
                <h2>Rewards Structure in Detail</h2>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{ __html:"The <strong>Discover it® Miles</strong> card is all about simplicity:"}}></p>
                <ul className={styles.featureList}>
                    <li><strong>1.5 miles per dollar</strong> on every purchase—no categories</li>
                    <li><strong>First-Year Match</strong> of all miles earned, effectively doubling year-one miles</li>
                    <li><strong>No caps</strong> or rotating enrollments</li>
                </ul>
                <p>
                    This uniform earn rate sets it apart from cards that require
                    constant category tracking. If you’re busy or prefer
                    not to micromanage your spending, 1.5 miles across the board
                    is a worry-free method.
                </p>
                <p>
                    <strong>Example:</strong>
                    If you have monthly expenses of $2,000, you’d earn 3,000 miles
                    each month (1.5 miles x $2,000). Over 12 months, that’s 36,000 miles.
                    Once Discover matches them, you have 72,000 miles—worth $720
                    in travel statement credits. That’s pretty powerful
                    for a no-fee product.
                </p>
            </section>

             {/* Section 6: Redemption Options (Mapped from HTML Section 5) */}
             <section id="section-6" className={styles.reviewSection}>
                 <h2>How to Redeem Discover Miles</h2>
                <p>
                    Discover miles are flexible in how you can use them. You can:
                </p>
                <ol className={styles.numberedList}>
                    <li><strong>Travel Credit:</strong>
                    Redeem miles against travel purchases (airfare, hotels, car rentals,
                    rideshares, etc.) you’ve made with your card, effectively
                    getting statement credits.</li>
                    <li><strong>Direct Deposit or Statement Credit (Cash Option):</strong>
                    If you prefer, you can convert miles to actual cash in your bank account
                    or as statement credits for non-travel expenses.
                    (1 mile = 1 cent, same as travel.)</li>
                     {/* Using dangerouslySetInnerHTML for &amp; */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Amazon &amp; PayPal Checkout:</strong> You can apply your miles at checkout when shopping online, though you’ll want to confirm your redemption rate is still 1 cent per mile (Discover typically maintains 1:1, but always check for any promotional rates or terms)."}}></li>
                </ol>
                <p>
                    With no minimum redemption requirement, you can apply as few or
                    as many miles as you like. This is ideal for people who want
                    quick partial credits (like $25 to offset a ride-share ride)
                    or prefer waiting until they have a big chunk of miles.
                </p>
            </section>

             {/* Section 7: Annual Fee & Costs (Mapped from HTML Section 6) */}
             <section id="section-7" className={styles.reviewSection}>
                <h2>Annual Fee and Ongoing Costs</h2>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{ __html:"Consistent with Discover’s consumer-friendly focus, the <strong>Discover it® Miles</strong> card has <strong>$0 annual fee</strong>. You’ll never worry about offsetting an annual cost. Also, there’s no penalty APR for late payments, though you could face a late fee of up to $41. If you occasionally slip on a payment, Discover will typically waive your first late fee— but don’t rely on that grace forever!"}}></p>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{ __html:"After any 0% intro on purchases (commonly 15 months), the ongoing variable APR ranges from <strong>16.24% to 27.24%</strong>. Try to pay off your monthly balances in full to avoid accruing interest that can quickly negate your travel rewards."}}></p>
            </section>

             {/* Section 8: Travel-Related Fees (Mapped from HTML Section 7) */}
             <section id="section-8" className={styles.reviewSection}>
                 <h2>Travel-Related Fees and Acceptance Abroad</h2>
                <p>
                    Discover prides itself on having <strong>no foreign transaction fees</strong>,
                    which is excellent for those who travel outside the U.S.
                    However, acceptance of Discover can vary internationally.
                    While it’s recognized in many major markets—and acceptance
                    has improved over the years—Visa and Mastercard still
                    outpace Discover in global coverage.
                </p>
                <ul className={styles.featureList}>
                    <li><strong>Balance Transfer Fee:</strong> Typically 3% for new cardholders
                    within a certain timeframe, then 5% (min $5).</li>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Cash Advance Fee:</strong> 5% (min $10), with high APR (27.24% or more). Best avoided unless absolutely necessary."}}></li>
                    <li><strong>Late Payment Fee:</strong> Up to $41, but no penalty APR.</li>
                </ul>
                <p>
                    If you travel frequently to Europe or Asia,
                    carry a backup Visa or Mastercard in case you visit
                    merchants that don’t accept Discover. In many tourist areas,
                    you’ll be fine, but it’s always good to have alternatives.
                </p>
            </section>

             {/* Section 9: Consumer Protections (Mapped from HTML Section 8) */}
             <section id="section-9" className={styles.reviewSection}>
                 <h2>Consumer Protections and Cardholder Benefits</h2>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{ __html:"Although Discover it® Miles doesn’t offer luxury travel perks like lounge access or premium insurance, you still benefit from a few robust cardholder protections:"}}></p>
                <ul className={styles.featureList}>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{ __html:"<strong>Discover Freeze It®:</strong> Instantly freeze your account in the Discover app if your card is lost or stolen, blocking new purchases while allowing recurring bills to process."}}></li>
                     {/* Using dangerouslySetInnerHTML for ® & ® */}
                    <li dangerouslySetInnerHTML={{ __html:"<strong>Free FICO® Score:</strong> Track your credit score each month via your online account or the mobile app."}}></li>
                    <li><strong>Zero Liability Protection:</strong> You aren’t liable
                    for fraudulent purchases if you promptly report them.</li>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{ __html:"<strong>U.S.-Based Customer Service:</strong> Discover touts 100% U.S.-based reps, which many find helpful for quick and clear communication."}}></li>
                </ul>
                <p>
                    While not travel insurance, these features can add peace of mind.
                    If robust trip cancellation or baggage coverage is critical,
                    consider pairing it with a premium travel card or a separate policy.
                </p>
            </section>

             {/* Section 10: 2025 Updates (Mapped from HTML Section 9) */}
             <section id="section-10" className={styles.reviewSection}>
                 <h2>2025 Updates: Rising Competition</h2>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{ __html:"As we move further into 2025, Discover has reaffirmed its strategy of keeping the it® Miles card simple and easy to use. Potential enhancements or short-term promos can include:"}}></p>
                <ol className={styles.numberedList}>
                    <li><strong>Seasonal Travel Boosts:</strong>
                    Occasionally, Discover runs promotions offering
                    5x miles at select travel partners. Check your email
                    or the Discover Deals portal for any upcoming offers.</li>
                    <li><strong>Expanded Global Acceptance:</strong>
                    Discover continues forging alliances with foreign networks,
                    improving merchant acceptance outside the U.S.</li>
                    <li><strong>Longer Intro APR Windows:</strong>
                    In response to competitor offers, Discover might push
                    the 0% purchase APR from 15 to 18 months or beyond for new applicants.</li>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{ __html:"<strong>Partnership with Travel Booking Sites:</strong> Some rumored collaborations with booking portals could potentially boost miles on certain reservations, though this is speculative."}}></li>
                </ol>
                <p>
                    Keep an eye on official Discover announcements to see if
                    they launch limited-time multipliers or extended intro rates,
                    helping you extract even more value from this no-fee card.
                </p>
            </section>

             {/* Section 11: Real-Life Example (Mapped from HTML Section 10) */}
             <section id="section-11" className={styles.reviewSection}>
                <h2>Real-Life Example: Maximizing Miles</h2>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{ __html:"Imagine you spend $2,500 monthly on your Discover it® Miles card for everyday expenses—groceries, utilities, streaming services, occasional flights, etc. Over the course of one year:"}}></p>
                <div className={styles.tableContainer}>
                     <table className={styles.statsTable}>
                        <thead>
                            <tr>
                                <th>Monthly Spend</th>
                                <th>Miles per $1</th>
                                <th>Monthly Miles</th>
                                <th>Yearly Miles</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td data-label="Monthly Spend">$2,500</td>
                                <td data-label="Miles per $1">1.5</td>
                                <td data-label="Monthly Miles">3,750</td>
                                <td data-label="Yearly Miles">45,000</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p>
                    Now, <strong>Discover matches</strong> that entire 45,000 miles
                    at the end of the first year, giving you a total of
                    <strong>90,000 miles</strong>.
                    That’s <strong>$900</strong> worth of travel statement credits
                    or even cash back—again, with <strong>no annual fee</strong>.
                    If your spending is higher, your matched total can be well over $1,000
                    in your first year alone.
                </p>
            </section>

             {/* Section 12: Pairing Cards (Mapped from HTML Section 11) */}
             <section id="section-12" className={styles.reviewSection}>
                <h2>Pairing Discover it® Miles with Other Cards</h2>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{ __html:"While the <strong>Discover it® Miles</strong> card can stand well on its own, certain cardholders might consider pairing it for synergy:"}}></p>
                <ul className={styles.featureList}>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{ __html:"<strong>Discover it® Cash Back:</strong> This card has 5% rotating categories each quarter (on up to $1,500 in spend). You could use that for groceries, gas, etc. when they’re 5%, and rely on Miles for everything else at 1.5x. End-of-year match on the Miles card sweetens the pot."}}></li>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{ __html:"<strong>Premium Travel Card (e.g., Amex Platinum, Chase Sapphire Reserve®):</strong> If you want lounge access or extensive travel insurance, you can keep the Discover it® Miles for everyday no-fee usage and leverage a premium card for flights or high-end perks."}}></li>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{ __html:"<strong>No Foreign Fee Backup:</strong> Although Discover has no foreign transaction fees, acceptance can be uneven. Some travelers pair it with a popular no-FTF Visa or Mastercard to ensure coverage worldwide."}}></li>
                </ul>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{ __html:"Combining the it® Miles with other specialized cards can yield a more robust travel strategy without incurring multiple annual fees."}}></p>
            </section>

            {/* Section 13: Competitor Analysis (Mapped from HTML Section 12) */}
            <section id="section-13" className={styles.reviewSection}>
                <h2>Competitor Analysis</h2>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{ __html:"Let’s see how the Discover it® Miles stacks up against other no-annual-fee travel-centric cards:"}}></p>
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
                            <tr dangerouslySetInnerHTML={{__html:'<td data-label="Card">Discover it® Miles</td><td data-label="Annual Fee">$0</td><td data-label="Rewards">1.5x on all purchases (+ 1st-year match)</td><td data-label="Key Advantage">Potential to double miles after first year</td>'}}></tr>
                             {/* Using dangerouslySetInnerHTML for ® */}
                            <tr dangerouslySetInnerHTML={{__html:'<td data-label="Card">Bank of America® Travel Rewards</td><td data-label="Annual Fee">$0</td><td data-label="Rewards">1.5x all; 3x via BoA Travel Center</td><td data-label="Key Advantage">Synergy with BoA Preferred Rewards</td>'}}></tr>
                            <tr>
                                <td data-label="Card">Capital One VentureOne</td>
                                <td data-label="Annual Fee">$0</td>
                                <td data-label="Rewards">1.25 miles on all purchases</td>
                                <td data-label="Key Advantage">Allows some airline/hotel transfers</td>
                            </tr>
                             {/* Using dangerouslySetInnerHTML for ℠ */}
                            <tr dangerouslySetInnerHTML={{__html:'<td data-label="Card">Wells Fargo Autograph℠</td><td data-label="Annual Fee">$0</td><td data-label="Rewards">3x on travel, dining, transit, and more</td><td data-label="Key Advantage">Broad 3x categories with no fee</td>'}}></tr>
                        </tbody>
                    </table>
                </div>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{ __html:"<strong>Verdict:</strong> If you expect heavy year-one spending, <strong>Discover it® Miles</strong> can outpace the others through the match. However, if you prefer transfer partners or a broader ecosystem (like points going to airlines/hotels), Capital One or other programs might appeal more. If you’re a BoA loyalist, that card can be a close competitor. Discover’s acceptance overseas, while improving, is still a consideration for heavy global travelers."}}></p>
            </section>

            {/* Section 14: International Travel (Mapped from HTML Section 13) */}
            <section id="section-14" className={styles.reviewSection}>
                <h2>International Travel: Acceptance vs. No FTF</h2>
                <p>
                    The <strong>no foreign transaction fee</strong> advantage
                    is enormous if you frequently travel abroad.
                    However, while many places now accept Discover,
                    you may encounter smaller merchants or off-the-beaten-path locales
                    that don’t.
                </p>
                <p>
                    On the other hand, if your travel primarily involves tourist areas,
                    large hotels, airlines, or major retailers, you’ll likely find
                    decent acceptance. Always consider having a backup card
                    for peace of mind.
                </p>
            </section>

            {/* Section 15: Who Should Get It (Mapped from HTML Section 14) */}
            <section id="section-15" className={styles.reviewSection}>
                 <h2 dangerouslySetInnerHTML={{ __html:"Who Should Get the Discover it® Miles Card?"}}></h2>
                 {/* Using Pros/Cons Structure */}
                 <div className={styles.prosCons}>
                    <div className={styles.pros}>
                        <h3>Perfect For:</h3>
                        <ul className={styles.featureList}>
                            <li><strong>Beginner or Intermediate Reward Seekers:</strong>
                            The 1.5x base plus year-one match is incredibly straightforward;
                            no complex loyalty programs to navigate.</li>
                            <li><strong>No-Fee Fans:</strong>
                            Absolutely zero annual fee while retaining a robust rewards rate.</li>
                            <li><strong>Domestic Travelers:</strong>
                            If you primarily travel within the U.S., acceptance is a non-issue.</li>
                            <li><strong>Moderate International Use:</strong>
                            Larger cities abroad typically accept Discover,
                            and you’ll avoid foreign transaction fees.</li>
                            <li><strong>Anyone Wanting Big Year-One Earnings:</strong>
                            High spenders can effectively double their first year’s miles
                            for a massive payoff.</li>
                        </ul>
                    </div>
                    <div className={styles.cons}>
                        {/* Added heading for consistency */}
                        <h3>Not Ideal If:</h3>
                         <ul className={styles.featureList}>
                             <li>You require robust travel insurance or premium perks.</li>
                             <li>You insist on extensive global acceptance (Visa/MC might be better abroad).</li>
                             <li>You want to transfer points to airline/hotel loyalty programs.</li>
                             <li>You are comfortable paying an annual fee for higher base earnings after year one.</li>
                         </ul>
                    </div>
                 </div>
            </section>

            {/* Section 16: Downsides (Mapped from HTML Section 15) */}
             <section id="section-16" className={styles.reviewSection}>
                 <h2>Downsides</h2>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{ __html:"While Discover it® Miles is popular, it’s not perfect:"}}></p>
                <ul className={styles.featureList}>
                    <li><strong>No Major Travel Protections:</strong>
                    Lacks trip cancellation, lost baggage, or primary rental car insurance.</li>
                    <li><strong>Potential Acceptance Issues Overseas:</strong>
                    Some smaller international merchants may reject Discover.</li>
                    <li><strong>No Transfer Partners:</strong>
                    You can’t send miles to airlines or hotels for outsized redemption.
                    It’s basically a fixed-value redemption system.</li>
                    <li><strong>Better Value in Year One:</strong>
                    After your first year match, your effective earn rate returns to 1.5x,
                    which is decent but not revolutionary if you spend heavily
                    and want next-level perks.</li>
                </ul>
            </section>

             {/* Section 17: Practical Tips (Mapped from HTML Section 16) */}
             <section id="section-17" className={styles.reviewSection}>
                <h2>Practical Tips and Best Practices</h2>
                <ol className={styles.numberedList}>
                    <li><strong>Maximize Year One:</strong>
                    Try to push big expenses into your first year to maximize the match.
                    Consider large purchases (appliances, travel bookings, etc.)
                    if they make financial sense and you can pay them off promptly.</li>
                    <li><strong>Pay in Full:</strong>
                    High interest can negate your miles. Always pay your statement
                    in full to truly benefit from no annual fee + rewards.</li>
                    <li><strong>Carry a Backup Card:</strong>
                    For certain remote or international locations, have a second card
                    (Visa/Mastercard) in case Discover isn’t accepted.</li>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Use the App for Freeze It®:</strong> Quick toggling can protect you from fraudulent activity if you misplace your card."}}></li>
                    <li><strong>Check for Discover Deals:</strong>
                    Occasionally, they offer extra miles or cashback
                    for certain merchants or travel partners.
                    Always monitor your account for promotions.</li>
                </ol>
            </section>

             {/* Section 18: Advanced FAQ (Mapped from HTML Section 17) */}
             <section id="section-18" className={styles.reviewSection}>
                <h2>Advanced FAQ</h2>
                 <h3>Q1: How does the miles match actually post?</h3>
                 <p>
                    After your 12th billing cycle completes (or near the end
                    of your first membership year), Discover automatically applies
                    the matched miles to your balance. You’ll see a separate transaction
                    or a summary statement indicating the total miles matched.
                </p>
                 <h3>Q2: Can I redeem miles for partial travel purchases?</h3>
                 <p>
                    Yes. If you only want to cover $20 of a $200 hotel charge, you can.
                    There’s no minimum redemption requirement.
                    You can apply as many or as few miles as you wish.
                </p>
                 <h3>Q3: Do miles expire?</h3>
                 <p>
                    Discover miles <strong>never expire</strong> as long as your account remains open
                    and in good standing. If you close the card or become delinquent,
                    your miles could be forfeited.
                </p>
                 <h3>Q4: Is there an introductory balance transfer offer?</h3>
                 <p>
                    Often, Discover includes a 0% APR on balance transfers for 15 months
                    (same as purchases), but you’ll pay a 3% transfer fee.
                    Offers can vary, so check your approval or the official Discover site.
                </p>
                 <h3>Q5: Any categories that earn more than 1.5x miles?</h3>
                 <p>
                    Typically, no. Discover occasionally offers limited-time promotions
                    in your online account, but the base rate is 1.5x across the board
                    with no standard bonus categories.
                </p>
                 <h3>Q6: How does acceptance compare in the U.S. vs. abroad?</h3>
                 <p>
                    In the U.S., acceptance is comparable to Visa/MC at most major retailers.
                    Internationally, it’s growing but still behind Visa/MC in many regions.
                    Always have a backup card just in case.
                </p>
                 <h3>Q7: Are there special perks for big spenders beyond the match?</h3>
                 <p>
                    Discover does not have a formal premium tier or lounge access.
                    Your biggest perk is the unlimited first-year match,
                    which scales with spending. After year one, there isn’t
                    an extra tier for large spenders.
                </p>
                 {/* Using dangerouslySetInnerHTML for ® */}
                 <h3 dangerouslySetInnerHTML={{__html:"Q8: Can I convert my miles to Discover it® Cash Back or vice versa?"}}></h3>
                 <p>
                    Not directly. They are distinct accounts. However, you can redeem
                    miles as statement credit (effectively cash) if you want the same
                    effect. Merging points across different Discover products
                    isn’t a standard feature.
                </p>
            </section>

             {/* Section 19: Final Thoughts (Mapped from HTML Section 18) */}
             <section id="section-19" className={styles.reviewSection}>
                <h2>Final Thoughts</h2>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{ __html:"The <strong>Discover it® Miles</strong> card continues to excel for users seeking a no-annual-fee card with a strong first-year incentive. The simplicity of earning 1.5x miles on every single purchase, plus unlimited matching at the year’s end, can easily overshadow many competing sign-up bonuses—especially if you anticipate moderate or high spending in your first 12 months."}}></p>
                <p>
                    Though it lacks advanced travel perks or extensive acceptance
                    outside major global markets, the card still stands as an
                    excellent everyday earner. Whether you’re new to travel
                    rewards or want a supplementary card to your existing lineup,
                    it seamlessly fits into most wallets without incurring
                    extra annual costs.
                </p>
            </section>

             {/* Section 20: Should You Apply? (Mapped from HTML Section 19) */}
             <section id="section-20" className={styles.reviewSection}>
                <h2>Should You Apply?</h2>
                <div className={styles.prosCons}>
                    <div className={styles.pros}>
                         <h3>Yes, If You:</h3>
                        <ul className={styles.featureList}>
                            <li>Want a <strong>no annual fee</strong> travel rewards card</li>
                            <li>Value a <strong>simple, flat-rate</strong> earning structure</li>
                            <li>Expect to put <strong>higher spending</strong> on the card in year one</li>
                            <li>Don’t need specialized airline/hotel transfer partners</li>
                             {/* Using dangerouslySetInnerHTML for ® */}
                            <li dangerouslySetInnerHTML={{__html:"Are okay with potential <strong>international acceptance</strong> limitations"}}></li>
                        </ul>
                    </div>
                    <div className={styles.cons}>
                         <h3>No, If You:</h3>
                        <ul className={styles.featureList}>
                            <li>Require robust <strong>travel insurance or premium perks</strong></li>
                             {/* Using dangerouslySetInnerHTML for ® */}
                            <li dangerouslySetInnerHTML={{__html:"Insist on <strong>extensive global acceptance</strong> (Visa/MC might be better abroad)"}}></li>
                             {/* Using dangerouslySetInnerHTML for ® */}
                            <li dangerouslySetInnerHTML={{__html:"Want to <strong>transfer points to airline/hotel</strong> loyalty programs"}}></li>
                             {/* Using dangerouslySetInnerHTML for ® */}
                            <li dangerouslySetInnerHTML={{__html:"Are comfortable paying an annual fee for <strong>higher base earnings</strong>"}}></li>
                        </ul>
                    </div>
                 </div>
                  {/* Using dangerouslySetInnerHTML for ® */}
                 <p dangerouslySetInnerHTML={{ __html:"Ultimately, if the convenience of a no-fee card plus a potentially massive first-year match appeals to you, <strong>Discover it® Miles</strong> belongs on your shortlist."}}></p>
             </section>

             {/* CTA Section */}
            <section id="cta" className={styles.ctaSection}>
                {/* Using dangerouslySetInnerHTML for ® */}
                <h2 dangerouslySetInnerHTML={{__html:"Get the <b>Discover it® Miles</b> Card Today!"}}></h2>
                <div className={styles.ctaButtons}>
                    <a href={reviewData.applyLink} className={`${styles.btn} ${styles.btnApply}`} title="From card issuer's secure site" target="_blank" rel="noopener noreferrer sponsored">Apply Now</a>
                     {/* Using dangerouslySetInnerHTML for &amp; */}
                    <a href={reviewData.ratesLink} className={`${styles.btn} ${styles.btnRates}`} target="_blank" rel="noopener noreferrer sponsored" dangerouslySetInnerHTML={{__html:"See Rates &amp; Fees"}}></a>
                </div>
            </section>

             {/* E-A-T Section - Corrected from Source */}
             <section id="eat-expertise-authority-trustworthiness" className={`${styles.reviewSection} ${styles.eatSection}`}>
                <h2 dangerouslySetInnerHTML={{ __html: "Our Commitment to E-A-T: Expertise, Authority &amp; Trustworthiness"}}></h2>
                 {/* Using E-A-T text adapted for Discover it Miles */}
                <p>
                    At <strong>TravelCardInsider</strong>, we prioritize
                    reliable, unbiased reviews so you can make informed
                    credit decisions. We adhere to Google’s E‑A‑T
                    (Expertise, Authority, and Trustworthiness) guidelines
                    through:
                </p>
                <h3>1. Expertise</h3>
                <ul className={styles.featureList}>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Specialized Research:</strong> Our writers analyze no-fee travel cards like Discover it® Miles, comparing flat-rate rewards and unique features like the first-year match."}}></li>
                    <li><strong>Real-Time Updates:</strong>
                    We continually check official issuer materials (Discover)
                    and user data points to maintain current rates, terms, and bonus match details.</li>
                     {/* Using dangerouslySetInnerHTML for &amp; */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Conferences &amp; Webinars:</strong> Our team attends financial and travel events, enriching our knowledge base with industry insights on cash back and simple travel rewards."}}></li>
                </ul>
                <h3>2. Authority</h3>
                <ul className={styles.featureList}>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Detailed Coverage:</strong> This review offers an exhaustive look at the Discover it® Miles card, from its straightforward earning to redemption options."}}></li>
                    <li><strong>Trusted By Major Outlets:</strong>
                    Our articles are frequently cited by national finance
                    and travel news sites for credit card analysis.</li>
                    <li><strong>Full Disclosure:</strong>
                    If affiliate links or promotions exist, we clearly state them,
                    ensuring objective editorial content.</li>
                </ul>
                <h3>3. Trustworthiness</h3>
                <ul className={styles.featureList}>
                    <li><strong>Independent Analysis:</strong>
                    We never let advertisers influence our ratings or opinions on the Discover it Miles card.</li>
                    <li><strong>Frequent Revisions:</strong>
                    We revise reviews whenever new offers appear or Discover updates its card features or match program.</li>
                    <li><strong>Community Feedback:</strong>
                    We encourage open discussion in comments,
                    fostering transparency and additional user insights on Discover card usage.</li>
                     {/* Using Link component for internal link */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Data Security:</strong> We prioritize user privacy and follow best practices, outlined in our <a href='/privacy-policy'>Privacy Policy</a>."}}>
                        {/* Corrected: <Link href="/privacy-policy"><a>Privacy Policy</a></Link> */}
                    </li>
                </ul>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{ __html: "By following these E‑A‑T principles, we aim to guide you responsibly toward a credit card that fits your needs and maximizes your travel rewards." }}></p>
            </section>

          </article>
        </div> {/* Close reviewContainer */}
      </main>

      
    </>
  );
}

export default DiscoverItMilesReviewPage;