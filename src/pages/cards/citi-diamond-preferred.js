// Example Path: pages/reviews/citi-diamond-preferred.js
// Or: pages/reviews/[slug].js (if using dynamic routing with 'citi-diamond-preferred' as slug)

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
  cardName: 'Citi® Diamond Preferred® Card',
  title: 'Citi® Diamond Preferred® Card – In-Depth 2025 Review',
  description: 'A 2000-word review of the Citi® Diamond Preferred® Card, focusing on balance transfers, fees, 2025 updates, pros, cons, and tips for maximizing 0% APR offers.',
  keywords: 'Citi Diamond Preferred, balance transfer, 0% APR, no annual fee, low interest, 2025 updates',
  author: 'TravelCardInsider', // *** REPLACE with your actual author/site name ***
  imageUrl: '/download (1).png', // *** VERIFY PATH & FILENAME in /public (Duplicate?) ***
  ratingValue: 6.5, // From Citi Diamond Preferred HTML
  applyLink: 'https://www.citi.com/credit-cards/citi-diamond-preferred-credit-card', // *** REPLACE with actual Diamond Preferred APPLY URL ***
  ratesLink: 'https://online.citi.com/US/ag/cards/displayterms?app=UNSOL&HKOP=608d295cca6a832d9455f97709fe858e684350d1359860de82b2b8a07336a954', // *** VERIFY URL ***
  // Image dimensions (MUST BE ACCURATE for next/image)
  imageWidth: 480, // *** REPLACE with actual image width *** (Example Placeholder)
  imageHeight: 304, // *** REPLACE with actual image height *** (Example Placeholder)
};

// --- Rating Tooltip Content (Customize if needed for Diamond Preferred) ---
const ratingCriteria = [ // *** VERIFY/CUSTOMIZE these criteria for Diamond Preferred Rating ***
    'Length of 0% Intro APR (Balance Transfer)',
    'Length of 0% Intro APR (Purchases)',
    'No Annual Fee',
    'Lack of Rewards Program',
    'Balance Transfer Fee'
];


function CitiDiamondPreferredReviewPage() {
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
  // !!! VERIFY all URLs, counts, and details FOR CITI DIAMOND PREFERRED !!!
  const siteUrl = "https://www.travelcardinsider.com"; // *** REPLACE with your actual site URL ***
  const pageUrl = `${siteUrl}/reviews/citi-diamond-preferred`; // *** REPLACE with your actual page URL ***
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product", // Use Product schema type
    "name": "Citi® Diamond Preferred® Card", // Removed <b>
    "image": `${siteUrl}${reviewData.imageUrl}`, // *** Assuming imageUrl starts with / ***
    "description": "The Citi® Diamond Preferred® Card is an excellent choice for long 0% APR balance transfers, featuring no annual fee, top-tier intro APR offers, and a solid set of consumer protections.", // Adjusted description, removed <b>
    "brand": {
      "@type": "Brand",
      "name": "Citi"
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
      "ratingCount": 290, // *** REPLACE with actual or estimated count ***
      "reviewCount": 290  // *** REPLACE with actual or estimated count ***
    },
    "offers": {
      "@type": "Offer",
      "url": reviewData.applyLink.startsWith('http') ? reviewData.applyLink : `${siteUrl}${reviewData.applyLink}`, // *** Ensure full APPLY URL ***
      "priceCurrency": "USD",
      "price": "0", // Annual Fee for Diamond Preferred
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
              <h1 dangerouslySetInnerHTML={{ __html: "Citi® Diamond Preferred® Card – In-Depth 2025 Review"}}></h1>

              {/* Section 1 Content (Part of Header Structure in Template) */}
              <section id="section-1">
                 {/* Using dangerouslySetInnerHTML for ® */}
                <div className={styles.intro}>
                   <p dangerouslySetInnerHTML={{ __html:"The <strong>Citi® Diamond Preferred® Card</strong> is a top choice if you’re looking for a long 0% intro APR on balance transfers, minimal fees, and a straightforward approach to reducing debt. With no annual fee and consumer-friendly perks, it’s a powerful tool for those aiming to pay off existing balances or finance large purchases in 2025. Let’s delve into 20 sections, from quick stats to advanced FAQs, to see if this is your best low-interest pick."}}></p>
                </div>

                {/* Image Container */}
                <div className={styles.cardImageContainer}>
                   {/* Corrected class name */}
                   <Image
                     src={reviewData.imageUrl}
                      /* Using dangerouslySetInnerHTML for ® */
                     alt={"Citi® Diamond Preferred® Card"}
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
                    <i>An excellent low-interest card for reducing debt!</i>
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
                                <td data-label="Feature">Intro APR on Balance Transfers</td>
                                 {/* Using dangerouslySetInnerHTML for ® */}
                                <td data-label="Details" dangerouslySetInnerHTML={{__html:"0% for 21 months (then 17.99%–27.74% variable)"}}></td>
                            </tr>
                            <tr>
                                <td data-label="Feature">Intro APR on Purchases</td>
                                 {/* Using dangerouslySetInnerHTML for ® */}
                                <td data-label="Details" dangerouslySetInnerHTML={{__html:"0% for 12 months (then 17.99%–27.74% variable)"}}></td>
                            </tr>
                            <tr>
                                <td data-label="Feature">Annual Fee</td>
                                <td data-label="Details">$0</td>
                            </tr>
                            <tr>
                                <td data-label="Feature">Balance Transfer Fee</td>
                                <td data-label="Details">3% (min $5) for first 4 months, then 5% (min $5)</td>
                            </tr>
                            <tr>
                                <td data-label="Feature">Foreign Transaction Fee</td>
                                <td data-label="Details">3%</td>
                            </tr>
                            <tr>
                                <td data-label="Feature">Recommended Credit Score</td>
                                <td data-label="Details">700+ (Good to Excellent)</td>
                            </tr>
                            <tr>
                                <td data-label="Feature">Late Fee</td>
                                <td data-label="Details">Up to $41</td>
                            </tr>
                             {/* Using dangerouslySetInnerHTML for ® */}
                            <tr dangerouslySetInnerHTML={{__html:'<td data-label="Feature">Penalty APR</td><td data-label="Details">Up to 29.99% variable</td>'}}></tr>
                        </tbody>
                    </table>
                </div>
            </section>

            {/* CTA Section */}
            <section id="cta" className={styles.ctaSection}>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <h2 dangerouslySetInnerHTML={{__html:"Get the <b>Citi® Diamond Preferred® Card</b> Today!"}}></h2>
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
                <p dangerouslySetInnerHTML={{ __html:"The Citi® Diamond Preferred® Card focuses on <b>low interest</b>, especially for transferring existing balances from higher-interest cards. Unlike premium rewards cards, it doesn’t offer significant perks or complex point structures. Instead, it aims for <b>long 0% intro APR</b> windows—currently among the best on the market in 2025. Great for those wanting to tackle credit card debt or finance big purchases without incurring interest."}}></p>
            </section>

             {/* Section 4: Intro APR Offers (Mapped from HTML Section 3) */}
             <section id="section-4" className={styles.reviewSection}>
                 <h2>Intro APR Offers</h2>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{ __html:"The Diamond Preferred® is famous for <b>21 months</b> of 0% on balance transfers, plus 12 months on new purchases. That can significantly reduce interest, saving hundreds (or thousands) if used wisely. Just note the transfer must be completed within the first 4 months to get the full 0% window."}}></p>
                <p>
                    <strong>Why It Matters:</strong>
                    Many competitor cards only offer 15-18 months on transfers.
                    Those extra months can be the difference between
                    fully paying off a debt vs. being stuck with leftover interest.
                </p>
            </section>

            {/* Section 5: Rewards (Mapped from HTML Section 4) */}
             <section id="section-5" className={styles.reviewSection}>
                <h2>Rewards: None, By Design</h2>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{ __html:"Citi Diamond Preferred® doesn’t have a typical cash back or points system. The “reward” is the <b>0% interest</b> advantage. If you want actual points or cash back, consider a different Citi card or keep Diamond Preferred® purely for its low-APR benefits."}}></p>
                <p>
                    This is normal for a card that focuses on <b>interest savings</b>
                    over everyday rewards.
                    Some folks pair it with another cash-back or travel card
                    once they’re done with the 0% window.
                </p>
            </section>

             {/* Section 6: Redemption (Mapped from HTML Section 5) */}
             <section id="section-6" className={styles.reviewSection}>
                <h2 dangerouslySetInnerHTML={{ __html:"Redemption or Value from Diamond Preferred®"}}></h2>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{ __html:"Because there’s no direct rewards program, “redemption” typically refers to the interest you <b>don’t</b> pay. By transferring a balance from a card charging 18%–26% interest to Diamond Preferred® at 0% for up to 21 months, you effectively gain that interest saving as your “value.”"}}></p>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{ __html:"If you do want rewards synergy, you can hold other Citi cards that earn ThankYou® Points and use Diamond Preferred® solely for large purchase financing or zero-interest balance transfers."}}></p>
            </section>

            {/* Section 7: Annual Fee & Costs (Mapped from HTML Section 6) */}
             <section id="section-7" className={styles.reviewSection}>
                <h2 dangerouslySetInnerHTML={{ __html:"Annual Fee &amp; Ongoing Costs"}}></h2>
                <p>
                    This card has <strong>$0 annual fee</strong>.
                    Once the 0% intro APR expires, you’ll pay <b>17.99%–27.74% variable</b>
                    based on creditworthiness. As always, carrying a balance beyond
                    the intro period can be costly.
                    Keep track of when your 0% ends to avoid high interest.
                </p>
            </section>

            {/* Section 8: Fees & Fine Print (Mapped from HTML Section 7) */}
            <section id="section-8" className={styles.reviewSection}>
                 <h2 dangerouslySetInnerHTML={{ __html:"Balance Transfer Fees &amp; Fine Print"}}></h2>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{ __html:"Diamond Preferred® requires a <b>3%</b> transfer fee (minimum $5) within the first 4 months. After that, it’s <b>5%</b>. If you’re transferring a large balance, factor this cost into your calculations. For many, paying 3% upfront is still far cheaper than months of 20%+ interest on another card."}}></p>
                <p>
                    You typically can’t transfer balances from another Citi card.
                    Check the terms to ensure your existing card is eligible
                    (must be non-Citi). Also, the 0% only applies to the <b>transfer amount</b>—
                    any new charges not covered by the purchase 0% might accrue interest.
                </p>
            </section>

            {/* Section 9: Other Fees (Mapped from HTML Section 8) */}
             <section id="section-9" className={styles.reviewSection}>
                <h2 dangerouslySetInnerHTML={{ __html:"Other Fees &amp; Considerations"}}></h2>
                <ul className={styles.featureList}>
                    <li><strong>Foreign Transaction Fee:</strong> 3% on purchases made outside the U.S.</li>
                    <li><strong>Cash Advance Fee:</strong> 5% (min $10), with a much higher APR</li>
                    <li><strong>Penalty APR:</strong> Up to 29.99% if you miss payments, potentially nullifying your 0%</li>
                </ul>
                <p>
                    This card isn’t designed for international usage or cash advances.
                    Use it domestically and responsibly to preserve the low-interest benefit.
                </p>
            </section>

            {/* Section 10: Protections & Perks (Mapped from HTML Section 9) */}
             <section id="section-10" className={styles.reviewSection}>
                <h2 dangerouslySetInnerHTML={{ __html:"Cardholder Protections &amp; Perks"}}></h2>
                <ul className={styles.featureList}>
                    <li><strong>Purchase Protection:</strong>
                    Covers new items from theft or damage for a limited time</li>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Extended Warranty:</strong> Extends eligible U.S. manufacturers’ warranties up to 12 months"}}></li>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Zero Liability on Fraud:</strong> Citi won’t hold you responsible for unauthorized charges"}}></li>
                    <li><strong>Digital Wallet Compatibility:</strong>
                    Apple Pay, Google Pay, Samsung Pay, etc.</li>
                </ul>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{ __html:"These are standard on many Citi cards, but having them on a no-fee, low-APR card is a bonus. They can save money on electronics or big-ticket items if something goes wrong post-purchase."}}></p>
            </section>

             {/* Section 11: 2025 Updates (Mapped from HTML Section 10) */}
             <section id="section-11" className={styles.reviewSection}>
                <h2 dangerouslySetInnerHTML={{ __html:"2025 Updates &amp; Potential Enhancements"}}></h2>
                <ol className={styles.numberedList}>
                    <li><strong>Extended 0% Windows:</strong>
                    Some rumored promotional expansions to 24 months or more on balance transfers</li>
                    <li><strong>Digital Tools:</strong>
                    Citi often updates its app and website,
                    possibly adding a better balance transfer simulator or payoff planner</li>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Temporary Bonus Offers:</strong> Rare, but watch for short-lived $100 or $150 statement credit deals if you spend a certain amount"}}></li>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Enhanced Security:</strong> Citi might roll out more advanced ID theft resolution or real-time notifications"}}></li>
                </ol>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{ __html:"Historically, Diamond Preferred® has kept its focus on extended 0% APR. Newer changes are usually incremental. Always check official announcements for the latest specifics."}}></p>
            </section>

            {/* Section 12: Real-Life Example (Mapped from HTML Section 11) */}
            <section id="section-12" className={styles.reviewSection}>
                 <h2>Real-Life Example: Balance Transfer Savings</h2>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{ __html:"Imagine you have $5,000 on a higher-interest card at 20% APR, paying $200 monthly. Over ~26 months, you’d pay around $1,100 in interest. By transferring that to Diamond Preferred® with 21 months at 0%, you’d only pay the 3% fee ($150) and possibly pay off the balance entirely within those 21 months. That’s a net savings of nearly $1,000 in interest."}}></p>
                <p>
                    This is the card’s main draw.
                    Use a balance transfer calculator to see the difference in your unique scenario.
                </p>
            </section>

            {/* Section 13: Pairing Cards (Mapped from HTML Section 12) */}
             <section id="section-13" className={styles.reviewSection}>
                <h2 dangerouslySetInnerHTML={{ __html:"Pairing Diamond Preferred® with Other Citi Cards"}}></h2>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{ __html:"Citi Diamond Preferred® is specialized for low APR. Many consumers also hold a rewards-based Citi card (like Citi Double Cash® or Citi Custom Cash®) for ongoing spend. Diamond Preferred® can be your “debt tool,” while the other card is for everyday rewards."}}></p>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{ __html:"You can keep Diamond Preferred® long-term to maintain your credit line and utilization ratio, even after the 0% period ends. Or consider product-changing it to a reward card if you no longer need the low APR."}}></p>
            </section>

            {/* Section 14: Competitor Analysis (Mapped from HTML Section 13) */}
            <section id="section-14" className={styles.reviewSection}>
                 <h2>Competitor Analysis</h2>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{ __html:"How does Diamond Preferred® fare among other top 0% balance transfer cards?"}}></p>
                <div className={styles.tableContainer}>
                     <table className={styles.statsTable}>
                        <thead>
                            <tr>
                                <th>Card</th>
                                <th>Annual Fee</th>
                                <th>Balance Transfer Intro</th>
                                <th>Key Advantage</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* Using dangerouslySetInnerHTML for ® */}
                            <tr dangerouslySetInnerHTML={{__html:'<td data-label="Card">Citi® Diamond Preferred®</td><td data-label="Annual Fee">$0</td><td data-label="Balance Transfer Intro">0% for 21 months</td><td data-label="Key Advantage">Longer transfer window vs. many competitors</td>'}}></tr>
                             {/* Using dangerouslySetInnerHTML for ® */}
                            <tr dangerouslySetInnerHTML={{__html:'<td data-label="Card">Citi® Simplicity® Card</td><td data-label="Annual Fee">$0</td><td data-label="Balance Transfer Intro">0% for 21 months</td><td data-label="Key Advantage">No late fees or penalty APR</td>'}}></tr>
                             {/* Using dangerouslySetInnerHTML for ℠ */}
                            <tr dangerouslySetInnerHTML={{__html:'<td data-label="Card">Wells Fargo Reflect℠ Card</td><td data-label="Annual Fee">$0</td><td data-label="Balance Transfer Intro">Up to 21 months with on-time payments</td><td data-label="Key Advantage">Potentially extends intro APR by meeting conditions</td>'}}></tr>
                             {/* Using dangerouslySetInnerHTML for ® */}
                            <tr dangerouslySetInnerHTML={{__html:'<td data-label="Card">BankAmericard® Credit Card</td><td data-label="Annual Fee">$0</td><td data-label="Balance Transfer Intro">0% for 18 months</td><td data-label="Key Advantage">Simple, no-fuss approach</td>'}}></tr>
                        </tbody>
                    </table>
                </div>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{ __html:"Citi Simplicity® is the main sibling rival to Diamond Preferred®, also offering 21 months. Simplicity® has no late fees or penalty APR, while Diamond Preferred® might have a slightly lower ongoing APR potential. Evaluate which nuance suits you best."}}></p>
            </section>

            {/* Section 15: International Use (Mapped from HTML Section 14) */}
            <section id="section-15" className={styles.reviewSection}>
                 <h2>International Usage Concerns</h2>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{ __html:"With a 3% foreign transaction fee, Diamond Preferred® isn’t recommended for traveling outside the U.S. or making frequent foreign purchases. Acceptance of Mastercards is generally good worldwide, but that 3% fee can erode savings. Keep it for domestic spend or debt management, and use a no-FTF card overseas."}}></p>
            </section>

            {/* Section 16: Who Should Get It (Mapped from HTML Section 15) */}
            <section id="section-16" className={styles.reviewSection}>
                 <h2 dangerouslySetInnerHTML={{ __html:"Who Should Get Citi® Diamond Preferred®?"}}></h2>
                <div className={styles.prosCons}>
                    <div className={styles.pros}>
                        <h3>Ideal For:</h3>
                         <ul className={styles.featureList}>
                             <li><strong>Balance Transfer Seekers:</strong>
                             People wanting the longest 0% intro to pay off existing debt.</li>
                             <li><strong>Big Purchase Financing:</strong>
                             If you want 12 months of 0% on new purchases for a major expense.</li>
                             <li><strong>No-Fee Fans:</strong>
                             No annual fee ensures any interest savings remain pure gain.</li>
                              {/* Using dangerouslySetInnerHTML for ® */}
                             <li dangerouslySetInnerHTML={{__html:"<strong>Responsible Payers:</strong> Must pay on time to keep that 0% or avoid penalty APR."}}></li>
                         </ul>
                    </div>
                    <div className={styles.cons}>
                        {/* Added heading */}
                        <h3>Not Ideal If:</h3>
                         <ul className={styles.featureList}>
                            <li>You want rewards points or cash back.</li>
                            <li>You travel internationally frequently (3% FTF).</li>
                            <li>You might miss payments (penalty APR risk).</li>
                            <li>You need to transfer a balance from another Citi card.</li>
                         </ul>
                     </div>
                 </div>
            </section>

            {/* Section 17: Downsides (Mapped from HTML Section 16) */}
            <section id="section-17" className={styles.reviewSection}>
                 <h2>Potential Downsides</h2>
                <ul className={styles.featureList}>
                    <li><strong>No Rewards Program:</strong>
                    It’s purely about the 0% intro APR, no points or cash back.</li>
                    <li><strong>3% Balance Transfer Fee:</strong>
                    Could be hefty if transferring large amounts (but often still cheaper than high interest).</li>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Foreign Transaction Fee:</strong> 3% makes it poor for international usage."}}></li>
                    <li><strong>Penalty APR Risk:</strong>
                    Miss a payment, risk losing your 0% window and incurring penalty rates.</li>
                </ul>
                <p>
                    All manageable if you use the card for its intended purpose:
                    zero-interest debt consolidation or financing in a domestic environment.
                </p>
            </section>

            {/* Section 18: Pro Tips (Mapped from HTML Section 17) */}
             <section id="section-18" className={styles.reviewSection}>
                 <h2 dangerouslySetInnerHTML={{ __html:"Pro Tips for Maximizing Diamond Preferred®"}}></h2>
                <ol className={styles.numberedList}>
                    <li><strong>Transfer Early:</strong>
                    You must transfer within first 4 months to get the full 21 months at 0%.</li>
                    <li><strong>Calculate the Fee:</strong>
                    3% vs. potential interest if you kept the debt on another card—still likely cheaper.</li>
                    <li><strong>Pay More Than Minimum:</strong>
                    Ensure you clear your balance before the 21 months end.</li>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Auto-Pay:</strong> Avoid late fees or missing payments, especially since penalty APR can apply if you’re late."}}></li>
                    <li><strong>Use Another Card for Rewards:</strong>
                    If you want points or cash back, have a second card for everyday spending.</li>
                </ol>
            </section>

             {/* Section 19: Another Example (Mapped from HTML Section 18) */}
             <section id="section-19" className={styles.reviewSection}>
                <h2>Another Example: Large Purchase Financing</h2>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{ __html:"Suppose you plan a $3,000 home improvement project. Using Diamond Preferred® at 0% for 12 months (purchases), you can pay it down over a year with zero interest. If your alternative is a 20% APR card, you’d have paid about $300 in interest. That’s immediate savings. Just ensure you pay off or transfer it before the 12 months end."}}></p>
            </section>

             {/* Section 20: Should You Apply (Mapped from HTML Section 19) */}
             <section id="section-20" className={styles.reviewSection}>
                <h2>Should You Apply?</h2>
                <div className={styles.prosCons}>
                    <div className={styles.pros}>
                         <h3>Yes, If You:</h3>
                         <ul className={styles.featureList}>
                             <li>Need a <strong>long 0% balance transfer</strong> period to clear debt</li>
                             <li>Don’t mind <strong>no rewards</strong> in exchange for interest savings</li>
                             <li>Have <strong>700+ credit</strong> to qualify for the best terms</li>
                             <li>Plan to keep using <strong>another card for everyday spending</strong></li>
                         </ul>
                     </div>
                     <div className={styles.cons}>
                        <h3>No, If You:</h3>
                         <ul className={styles.featureList}>
                             <li>Want <strong>cash back or points</strong> from your purchases</li>
                             <li>Travel internationally often (3% FTF) or need no-FTF features</li>
                             <li>Struggle to <strong>pay on time</strong> (risk losing 0% offers or incurring penalty APR)</li>
                             <li>Already have a Citi card to transfer from (transfers within Citi typically not allowed)</li>
                         </ul>
                     </div>
                 </div>
             </section>

              {/* CTA Section */}
            <section id="cta" className={styles.ctaSection}>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <h2 dangerouslySetInnerHTML={{__html:"Get the <b>Citi® Diamond Preferred® Card</b> Today!"}}></h2>
                <div className={styles.ctaButtons}>
                    <a href={reviewData.applyLink} className={`${styles.btn} ${styles.btnApply}`} title="From card issuer's secure site" target="_blank" rel="noopener noreferrer sponsored">Apply Now</a>
                     {/* Using dangerouslySetInnerHTML for &amp; */}
                    <a href={reviewData.ratesLink} className={`${styles.btn} ${styles.btnRates}`} target="_blank" rel="noopener noreferrer sponsored" dangerouslySetInnerHTML={{__html:"See Rates &amp; Fees"}}></a>
                </div>
            </section>

            {/* E-A-T Section */}
            <section id="eat-expertise-authority-trustworthiness" className={`${styles.reviewSection} ${styles.eatSection}`}>
                 <h2 dangerouslySetInnerHTML={{ __html: "Our Commitment to E-A-T: Expertise, Authority &amp; Trustworthiness"}}></h2>
                 {/* Using E-A-T text adapted for Diamond Preferred */}
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
                    Our writers analyze balance transfer cards like the Citi Diamond Preferred®, focusing on maximizing 0% APR periods and understanding fee structures.</li>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Real-Time Updates:</strong> We continually check official issuer materials (Citi) and user data points to maintain current rates, terms, and intro APR offer details."}}></li>
                     {/* Using dangerouslySetInnerHTML for &amp; */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Conferences &amp; Webinars:</strong> Our team attends financial and travel events, enriching our knowledge base with industry insights on debt management and credit card strategies."}}></li>
                </ul>
                <h3>2. Authority</h3>
                <ul className={styles.featureList}>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Detailed Coverage:</strong> This review offers an exhaustive look at the Citi® Diamond Preferred® Card, from its fee structure to competitor comparisons."}}></li>
                    <li><strong>Trusted By Major Outlets:</strong>
                    Our articles are frequently cited by national finance
                    and travel news sites for balance transfer card analysis.</li>
                    <li><strong>Full Disclosure:</strong>
                    If affiliate links or promotions exist, we clearly state them,
                    ensuring objective editorial content.</li>
                </ul>
                <h3>3. Trustworthiness</h3>
                <ul className={styles.featureList}>
                    <li><strong>Independent Analysis:</strong>
                    We never let advertisers influence our ratings or opinions on the Diamond Preferred® card.</li>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Frequent Revisions:</strong> We revise reviews whenever new offers appear or Citi updates the card terms or intro APR periods."}}></li>
                    <li><strong>Community Feedback:</strong>
                    We encourage open discussion in comments,
                    fostering transparency and additional user insights on balance transfer experiences.</li>
                    {/* Using dangerouslySetInnerHTML for &amp; */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Data Security:</strong> We prioritize user privacy and follow best practices, outlined in our <a href='/privacy-policy'>Privacy Policy</a>."}}>
                        {/* Corrected: <Link href="/privacy-policy"><a>Privacy Policy</a></Link> */}
                    </li>
                </ul>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{ __html: "By following these E‑A‑T principles, we aim to guide you responsibly toward a credit card that fits your needs and financial goals." }}></p>
            </section>

          </article>
        </div> {/* Close reviewContainer */}
      </main>

      <Footer />
    </>
  );
}

export default CitiDiamondPreferredReviewPage;