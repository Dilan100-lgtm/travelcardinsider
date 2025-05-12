// Example Path: pages/reviews/citi-custom-cash.js
// Or: pages/reviews/[slug].js (if using dynamic routing with 'citi-custom-cash' as slug)

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
  cardName: 'Citi Custom Cash® Card',
  title: 'Citi Custom Cash® Card – In-Depth 2025 Review',
  description: 'A comprehensive 2500-word review of the Citi Custom Cash® Card for 2025. Learn about 5% cash back on your top spending category, no annual fee, advanced usage tips, synergy with other Citi cards, and disclaimers.', // Adapted slightly
  keywords: 'Citi Custom Cash, credit card, no annual fee, cash back, best credit cards, 2025 updates',
  author: 'TravelCardInsider', // *** REPLACE with your actual author/site name ***
  imageUrl: '/download.png', // *** VERIFY PATH & FILENAME in /public (Duplicate filename?) ***
  ratingValue: 7.5, // From Citi Custom Cash HTML
  applyLink: 'https://www.citi.com/credit-cards/citi-custom-cash-credit-card', // *** REPLACE with actual Custom Cash APPLY URL ***
  ratesLink: 'https://online.citi.com/US/ag/cards/displayterms?app=UNSOL&HKOP=541175b33e25f6837a0d7af4ba29114f264447b80dcde5f6be6db7d02fed5901', // *** REPLACE WITH CORRECT RATES/FEES LINK (Source had placeholder) ***
  // Image dimensions (MUST BE ACCURATE for next/image)
  imageWidth: 480, // *** REPLACE with actual image width *** (Example Placeholder)
  imageHeight: 304, // *** REPLACE with actual image height *** (Example Placeholder)
};

// --- Rating Tooltip Content (Customize if needed for Custom Cash) ---
const ratingCriteria = [ // *** VERIFY/CUSTOMIZE these criteria for Custom Cash Rating ***
    'Cash Back Rate (5% Auto-Adjusting)',
    'No Annual Fee',
    'Welcome Bonus',
    'ThankYou® Points Synergy',
    'Monthly Spend Cap ($500)',
];

function CitiCustomCashReviewPage() {
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
  // !!! VERIFY all URLs, counts, and details FOR CITI CUSTOM CASH !!!
  const siteUrl = "https://www.travelcardinsider.com"; // *** REPLACE with your actual site URL ***
  const pageUrl = `${siteUrl}/cards/citi-custom-cash`; // *** REPLACE with your actual page URL ***
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Citi Custom Cash® Card",
    "image": `${siteUrl}${reviewData.imageUrl}`, // *** Assuming imageUrl starts with / ***
    "description": "The Citi Custom Cash® Card offers flexible 5% cash back on your top spending category each month (up to $500), no annual fee, and a straightforward welcome bonus.", // Adjusted description
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
      "ratingCount": 980, // *** REPLACE with actual or estimated count ***
      "reviewCount": 980  // *** REPLACE with actual or estimated count ***
    },
    "offers": {
      "@type": "Offer",
      "url": reviewData.applyLink.startsWith('http') ? reviewData.applyLink : `${siteUrl}${reviewData.applyLink}`, // *** Ensure full APPLY URL ***
      "priceCurrency": "USD",
      "price": "0", // Annual Fee for Custom Cash
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
              <h1 dangerouslySetInnerHTML={{ __html: "Citi Custom Cash® Card – 2025 Review"}}></h1>

              {/* Section 1 Content (Part of Header Structure in Template) */}
              <section id="overview"> {/* Match HTML ID */}
                <div className={styles.intro}>
                   {/* Using dangerouslySetInnerHTML for ® & ™ */}
                  <p dangerouslySetInnerHTML={{ __html:"The <b>Citi Custom Cash® Card</b> is renowned for its ability to adapt seamlessly to your spending habits every month, offering <strong>5% cashback</strong> on whichever eligible category you use the most (up to $500). For cardholders seeking no-annual-fee simplicity, it’s a standout solution that automatically optimizes rewards without manual enrollment or rotating categories. Whether you dedicate a particular month to groceries, dining, or even streaming services, the Custom Cash® ensures you maximize returns."}}></p>
                  <p dangerouslySetInnerHTML={{ __html:"In this comprehensive 2025 review, we’ll uncover how you can combine the card with other Citi products, why its flexible redemption through <em>ThankYou® Points</em> can outshine competitor systems, and which types of spenders will benefit most. Plus, we’ll explore ongoing updates that could further boost the Custom Cash® experience. If you’re someone who dislikes juggling category activations but craves elevated rewards, read on. This card might just revolutionize how you manage everyday expenses."}}></p>
                </div>

                {/* Image Container */}
                <div className={styles.cardImageContainer}>
                  {/* Corrected class name */}
                   <Image
                     src={reviewData.imageUrl}
                     alt={"Citi Custom Cash Card"}
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

                  {/* STAR RATING - Corrected value */}
                  <div className={styles.starRating} title={`Rated ${reviewData.ratingValue} out of 10 stars`} style={{ '--rating': `${reviewData.ratingValue * 10}%` }}>
                    <span>★★★★★</span>
                    <span className={styles.filledStars}>★★★★★</span>
                  </div>

                  <div className={styles.ratingDescription}>
                    <i>An exceptional no-annual-fee cash-back card for flexible spenders.</i>
                  </div>
                </div>
              </section>
            </header>

            {/* ============= REVIEW CONTENT SECTIONS (Hardcoded JSX) ============= */}

            {/* Section 2: Quick Stats Table (Mapped from HTML Section 1) */}
             <section id="section-2" className={styles.reviewSection}>
                <h2>Quick Stats at a Glance</h2>
                <div className={styles.tableContainer}>
                     <table className={styles.statsTable}> {/* Corrected from source HTML */}
                        <thead>
                            <tr>
                                <th>Feature</th>
                                <th>Details</th>
                            </tr>
                        </thead>
                        <tbody>
                             {/* Using dangerouslySetInnerHTML for ® */}
                            <tr dangerouslySetInnerHTML={{__html:'<td data-label="Feature">Welcome Bonus</td><td data-label="Details">$200 after spending $750 in the first 3 months</td>'}}></tr>
                            <tr>
                                <td data-label="Feature">Rewards Rate</td>
                                <td data-label="Details">5% on your top spend category (up to $500/month), 1% on all other purchases</td>
                            </tr>
                            <tr>
                                <td data-label="Feature">Annual Fee</td>
                                <td data-label="Details">$0</td>
                            </tr>
                            <tr>
                                <td data-label="Feature">Foreign Transaction Fee</td>
                                <td data-label="Details">3% on each transaction in U.S. dollars</td>
                            </tr>
                            <tr>
                                <td data-label="Feature">Recommended Credit Score</td>
                                <td data-label="Details">700+ (Good to Excellent)</td>
                            </tr>
                            {/* Using dangerouslySetInnerHTML for &amp; ® */}
                            <tr dangerouslySetInnerHTML={{__html:'<td data-label="Feature">Intro APR Offer</td><td data-label="Details">0% APR for 15 months on purchases &amp; balance transfers (then 17.49%–27.49% Variable)</td>'}}></tr>
                             {/* Using dangerouslySetInnerHTML for ® */}
                            <tr dangerouslySetInnerHTML={{__html:'<td data-label="Feature">Regular APR</td><td data-label="Details">17.49%–27.49% Variable</td>'}}></tr>
                            <tr>
                                <td data-label="Feature">Penalty Fees</td>
                                <td data-label="Details">Up to $40 late fee</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

             {/* CTA Section */}
             <section id="cta" className={styles.ctaSection}>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <h2 dangerouslySetInnerHTML={{__html:"Get the <b>Citi Custom Cash®</b> Today!"}}></h2>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{__html:"Want to capitalize on a flexible 5% without an annual fee? The Citi Custom Cash® might be a perfect match. Don’t miss out on the sign-up bonus, straightforward redemption paths, and synergy with other Citi cards. Apply below or check the rates first:"}}></p>
                <div className={styles.ctaButtons}>
                    <a href={reviewData.applyLink} className={`${styles.btn} ${styles.btnApply}`} title="From card issuer's secure site" target="_blank" rel="noopener noreferrer sponsored">Apply Now</a>
                    {/* Using dangerouslySetInnerHTML for &amp; */}
                    {/* !!! WARNING: Rates link is a placeholder based on source HTML !!! */}
                    <a href={reviewData.ratesLink} className={`${styles.btn} ${styles.btnRates}`} target="_blank" rel="noopener noreferrer sponsored" dangerouslySetInnerHTML={{__html:"See Rates &amp; Fees"}}></a>
                </div>
            </section>

            {/* Section 3: Card Overview & Positioning (Mapped from HTML Section 2) */}
            <section id="section-3" className={styles.reviewSection}>
                <h2>Card Overview and Positioning</h2>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{__html:"The Citi Custom Cash® Card has become a top contender for individuals looking for high earning potential without the friction of rotating or manually activating categories. By rewarding you with <strong>5%</strong> on the single category you spend most on—whether that’s groceries, restaurants, or streaming services—it offers an intuitive approach to monthly expenses. This sets it apart from cards that rely on quarter-by-quarter categories that may not align with your lifestyle."}}></p>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{__html:"Positioning itself as a versatile, no-fee cashback card, the Custom Cash® suits both novice cardholders building credit and experienced users wanting a flexible supplement to existing travel or cashback products. When integrated into the broader Citi ecosystem—particularly if you hold a premium card like Citi Premier®—the points you accumulate can be channeled into potentially lucrative travel redemptions. As we move deeper into 2025, this synergy places the Custom Cash® near the top of the no-fee segment, giving it an edge over simpler flat-rate cards that never exceed 2% on any purchase."}}></p>
            </section>

             {/* Section 4: Welcome Bonus (Mapped from HTML Section 3) */}
             <section id="section-4" className={styles.reviewSection}>
                <h2>Welcome Bonus: A Solid Starter</h2>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{__html:"Many no-annual-fee credit cards either skip a welcome bonus entirely or limit it to a modest $100 statement credit. The <strong>Citi Custom Cash®</strong>, however, typically grants <strong>$200</strong> once you reach <strong>$750</strong> in purchases within three months. That’s a compelling 26.7% return on your initial spending—a boon for newcomers trying to maximize early rewards or longtime credit enthusiasts looking for a quick injection of extra points."}}></p>
                <p>
                    Why is this beneficial? Unlike some competitor cards that require over $1,000 in
                    spend or only offer $100 in welcome value, Citi keeps the threshold approachable.
                    Everyday expenses like utility bills, groceries, or a few dinners out can easily
                    cover $750. Once you receive the bonus—provided as either a statement credit or
                    ThankYou® Points depending on your preference—you’re free to redeem it as you see
                    fit, adding a straightforward bump to your bottom line.
                </p>
            </section>

            {/* Section 5: Rewards Structure (Mapped from HTML Section 4) */}
            <section id="section-5" className={styles.reviewSection}>
                <h2>Rewards Structure in Detail</h2>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{ __html:"The <strong>Citi Custom Cash®</strong> stands out primarily for its <strong>auto-adjusting 5% category</strong> feature, letting you focus spending on one area without chasing rotating calendars. Common eligible categories typically include:"}}></p>
                <ul className={styles.featureList}>
                    <li><strong>Groceries:</strong> Perfect for consistent spenders aiming to earn big on household essentials.</li>
                    <li><strong>Dining:</strong> From casual takeout to upscale restaurants, all fall under a single dining umbrella.</li>
                    <li><strong>Gas Stations:</strong> An excellent 5% category if you frequently drive.</li>
                    <li><strong>Streaming Services:</strong> For those with multiple subscriptions, a monthly bill might approach $100+.</li>
                     {/* Using dangerouslySetInnerHTML for &amp; */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Drugstores &amp; Select Travel:</strong> Additional variety that captures everyday errands or smaller travel costs."}}></li>
                </ul>
                <p>
                    If you happen to spend, say, $400 in dining and $300 on groceries,
                    <em>dining</em> becomes your top category for that month, awarding you
                    5% up to $500. Surpass that $500, and the remainder earns 1%. Meanwhile,
                    everything else remains at 1%. This seamless approach negates the need to
                    micromanage or sign up for quarterly categories, reducing friction for those
                    who just want to swipe without fuss.
                </p>
            </section>

            {/* Section 6: Redemption Options (Mapped from HTML Section 5) */}
            <section id="section-6" className={styles.reviewSection}>
                <h2>Redemption Options via Citi ThankYou® Points</h2>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{ __html:"One of Citi’s brightest advantages is its <em>ThankYou® Points</em> ecosystem, which the Custom Cash® taps into for a variety of redemption methods:"}}></p>
                <ol className={styles.numberedList}>
                    <li><strong>Cash Back / Statement Credits:</strong> Typically, it’s 1 cent per point, with minimal fuss or complexities.</li>
                    <li><strong>Gift Cards:</strong> Redeem for popular retailers at the same 1:1 ratio, ideal for birthdays or personal treats.</li>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Shop with Points:</strong> Select merchants (like Amazon) let you check out using points, although the per-point value might be less than 1 cent."}}></li>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Transfers to Citi Premier® (If Held):</strong> By pairing Custom Cash® with Citi Premier®, you unlock 1:1 transfers to airlines, turning everyday 1.5% or 5% categories into potentially more valuable flight redemptions."}}></li>
                </ol>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{ __html:"This ecosystem is particularly flexible. For instance, if you prefer simple cash back, you can request it with no complicated hoops. Meanwhile, advanced users can store up points for high-value international flights. Given the card’s monthly auto-earning, you can accumulate a surprising stash of ThankYou® Points over time without rethinking your spending categories each quarter—something that rotating or tiered programs might demand."}}></p>
            </section>

            {/* Section 7: Annual Fee & Costs (Mapped from HTML Section 6) */}
            <section id="section-7" className={styles.reviewSection}>
                <h2>Annual Fee and Ongoing Costs</h2>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{ __html:"A major selling point: the <strong>Citi Custom Cash®</strong> charges <strong>$0 annual fee</strong>. This ensures every reward you earn remains net positive (barring interest charges). You won’t have the pressure of “breaking even” to justify the cost of holding the card."}}></p>
                <p>
                    However, like most rewards cards, the APR can soar—averaging around
                    <strong>17.49%–27.49% Variable</strong> once any 0% intro period ends. If
                    you anticipate carrying a large balance, these interest rates might overshadow
                    your earned rewards quickly. To truly benefit from the card’s structure,
                    it’s wise to pay statements in full whenever possible. If a big purchase or
                    short-term financing is necessary, consider using the initial 0% intro window
                    (often 15 months) carefully, then revert to paying in full once standard
                    APRs begin.
                </p>
            </section>

            {/* Section 8: Fees to Keep in Mind (Mapped from HTML Section 7) */}
            <section id="section-8" className={styles.reviewSection}>
                 <h2>Fees to Keep in Mind</h2>
                <p>
                    Though there’s no annual fee, certain actions can trigger extra charges:
                </p>
                <ul className={styles.featureList}>
                    <li><strong>Foreign Transaction Fee (3%):</strong> For each international purchase, you’ll lose part of your rewards to this surcharge.</li>
                    <li><strong>Balance Transfer Fee:</strong> Typically 3% initially, then 5% (with a $5 minimum). This matters if you plan to move a balance from another card.</li>
                    <li><strong>Cash Advance Fee:</strong> 5% (min $10), plus an elevated APR. Only recommended in emergencies.</li>
                    <li><strong>Late Payment Fee:</strong> Up to $40, which also impacts your credit score if you’re not careful.</li>
                </ul>
                <p>
                    Collectively, these fees can erode your monthly gains if you’re not mindful.
                    Frequent travelers might find the 3% foreign fee particularly limiting,
                    making the Custom Cash® less appealing for overseas trips. Nevertheless,
                    if you’re primarily a domestic spender, these costs remain unlikely to hamper
                    your day-to-day usage significantly.
                </p>
            </section>

            {/* Section 9: Protections & Benefits (Mapped from HTML Section 8) */}
            <section id="section-9" className={styles.reviewSection}>
                 <h2>Consumer Protections and Cardholder Benefits</h2>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{ __html:"While the <strong>Custom Cash®</strong> isn’t a luxury travel card, it does include a handful of solid benefits:"}}></p>
                <ul className={styles.featureList}>
                    <li><strong>Purchase Protection:</strong> Covering accidental damage or theft
                    for a limited window—usually 90–120 days—on newly bought items.</li>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{ __html:"<strong>Extended Warranty:</strong> Automatically adds up to 24 months to qualified manufacturer warranties, giving extra peace of mind for electronics or appliances."}}></li>
                    <li><strong>Zero Liability:</strong> If your card details are stolen and
                    unauthorized charges appear, you’re not held responsible if reported timely.</li>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{ __html:"<strong>Digital Wallet Compatibility:</strong> Adding the Custom Cash® to Apple Pay, Google Pay, or Samsung Pay can occasionally unlock promotional bonuses or simply expedite daily checkout experiences."}}></li>
                </ul>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{ __html:"Compared to premium options (like Citi Prestige®, no longer publicly available), you won’t find lounge access or robust trip delay/cancellation insurance. Still, the included perks can be lifesavers for everyday purchases and minor accidents. You might consider pairing with a more travel-oriented product if you desire additional coverage. But for a no-fee card with a strong 5% category, these benefits exceed what many competitor products offer at the same annual cost—namely, $0."}}></p>
            </section>

            {/* Section 10: 2025 Updates (Mapped from HTML Section 9) */}
            <section id="section-10" className={styles.reviewSection}>
                 <h2>2025 Updates and Enhancements</h2>
                <p>
                    As the credit card market evolves, Citi often refines benefits or
                    promotional rates to stay competitive. Looking forward into 2025,
                    a few rumored or possible changes could arise:
                </p>
                <ol className={styles.numberedList}>
                    <li><strong>Higher 5% Monthly Cap:</strong> Some insiders speculate
                    Citi might experiment with $750 monthly for a limited promotional period,
                    letting heavy spenders capture more 5% volume.</li>
                     {/* Using dangerouslySetInnerHTML for &amp; */}
                    <li dangerouslySetInnerHTML={{ __html:"<strong>Expanded Categories:</strong> Additional eligible categories (like phone bill or internet services) may enter the lineup, appealing to those with large utility expenses."}}></li>
                    <li><strong>Digital Wallet Incentives:</strong> As contactless payments
                    grow, Citi could introduce extra points or statement credits for Apple Pay
                    or Google Pay transactions.</li>
                    <li><strong>Longer 0% Intro APRs:</strong> Competing no-fee cards
                    sometimes push 18–21 months interest-free. Citi may match or exceed
                    these durations to attract new cardholders.</li>
                </ol>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{ __html:"Naturally, these remain speculative until Citi issues an official update. But given the card’s popularity, incremental improvements are likely, especially as the card faces increasing competition from other no-fee powerhouses. Staying informed of these shifts can make the difference when you’re trying to optimize monthly spending or plan major purchases under an extended 0% window."}}></p>
            </section>

             {/* Section 11: Real-Life Example (Mapped from HTML Section 10) */}
             <section id="section-11" className={styles.reviewSection}>
                <h2>Real-Life Example: Maximizing the Custom Cash®</h2>
                <p>
                    Let’s imagine you spend $2,000 monthly across various categories, with
                    <strong>$400 on dining</strong> as your top category for one cycle:
                </p>
                <div className={styles.tableContainer}>
                     <table className={styles.statsTable}>
                        <thead>
                            <tr>
                                <th>Category</th>
                                <th>Monthly Spend</th>
                                <th>Cash Back Rate</th>
                                <th>Monthly Cash Back</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td data-label="Category">Dining (Top Category)</td>
                                <td data-label="Monthly Spend">$400</td>
                                <td data-label="Cash Back Rate">5%</td>
                                <td data-label="Monthly Cash Back">$20</td>
                            </tr>
                            <tr>
                                <td data-label="Category">Groceries</td>
                                <td data-label="Monthly Spend">$300</td>
                                <td data-label="Cash Back Rate">1%</td>
                                <td data-label="Monthly Cash Back">$3</td>
                            </tr>
                            <tr>
                                <td data-label="Category">Gas</td>
                                <td data-label="Monthly Spend">$200</td>
                                <td data-label="Cash Back Rate">1%</td>
                                <td data-label="Monthly Cash Back">$2</td>
                            </tr>
                            <tr>
                                <td data-label="Category">Other Purchases</td>
                                <td data-label="Monthly Spend">$1,100</td>
                                <td data-label="Cash Back Rate">1%</td>
                                <td data-label="Monthly Cash Back">$11</td>
                            </tr>
                            <tr style={{fontWeight: 'bold', borderTop: '2px solid #dee2e6'}}>
                                <th>Total</th>
                                <th>$2,000</th>
                                <th>—</th>
                                <th>$36</th>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p>
                    Over 12 months, that’s <strong>$432</strong> purely from monthly spend,
                    plus a possible <strong>$200</strong> bonus if you meet the initial
                    threshold—netting about <strong>$632</strong> in the first year. For
                    a no-fee product, that’s solid value.
                </p>
            </section>

             {/* Section 12: Pairing with Other Citi Cards (Mapped from HTML Section 11) */}
             <section id="section-12" className={styles.reviewSection}>
                 <h2>Pairing the Custom Cash® with Other Citi Cards</h2>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{ __html:"The real advantage often emerges when you combine <strong>Custom Cash®</strong> with the broader <em>Citi ThankYou®</em> lineup:"}}></p>
                <ul className={styles.featureList}>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{ __html:"<strong>Citi Premier®:</strong> Lets you transfer points to 1:1 travel partners (like JetBlue, Singapore Airlines, or Choice Hotels). This effectively turns the 5% categories into miles or points that can exceed 1 cent in value per point if redeemed wisely."}}></li>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{ __html:"<strong>Citi Double Cash®:</strong> Earn a steady 2% on everything else. Between Double Cash® and the Custom Cash®, you can secure robust returns on daily spend, ensuring minimal overlap or wasted effort."}}></li>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{ __html:"<strong>Citi Rewards+®:</strong> Rounds up each purchase to the nearest 10 points, though synergy is less direct unless you frequently make many small transactions. Still, it can complement Custom Cash® for broad coverage."}}></li>
                </ul>
                <p>
                    By leveraging these combos, you not only avoid an annual fee on the
                    Custom Cash®, but you can effectively turn everyday purchases into
                    competitive travel redemptions. This synergy is especially appealing
                    if you’re eyeing premium flights or hotel stays that typically require
                    more advanced reward strategies. The simplicity of 5% on your top category
                    plus 2% on general spend can overshadow many other no-fee combos on the market.
                </p>
            </section>

            {/* Section 13: Competitor Analysis (Mapped from HTML Section 12) */}
            <section id="section-13" className={styles.reviewSection}>
                 <h2>Competitor Analysis</h2>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{ __html:"Let’s see how the <strong>Citi Custom Cash®</strong> lines up against a few no-fee stalwarts:"}}></p>
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
                            <tr dangerouslySetInnerHTML={{__html:'<td data-label="Card">Citi Custom Cash®</td><td data-label="Annual Fee">$0</td><td data-label="Rewards">5% top category (up to $500/mo), 1% elsewhere</td><td data-label="Key Advantage">Auto-adjusting 5% with no category enrollment</td>'}}></tr>
                             {/* Using dangerouslySetInnerHTML for ℠ ® */}
                            <tr dangerouslySetInnerHTML={{__html:'<td data-label="Card">Chase Freedom Flex℠</td><td data-label="Annual Fee">$0</td><td data-label="Rewards">5% rotating categories, 3% dining, 5% travel (Chase)</td><td data-label="Key Advantage">Ties into Chase’s flexible UR ecosystem</td>'}}></tr>
                             {/* Using dangerouslySetInnerHTML for ® */}
                            <tr dangerouslySetInnerHTML={{__html:'<td data-label="Card">Discover it® Cash Back</td><td data-label="Annual Fee">$0</td><td data-label="Rewards">5% rotating categories quarterly</td><td data-label="Key Advantage">1st-year Cashback Match effectively doubles your rewards</td>'}}></tr>
                             {/* Using dangerouslySetInnerHTML for ℠ */}
                            <tr dangerouslySetInnerHTML={{__html:'<td data-label="Card">Wells Fargo Active Cash℠</td><td data-label="Annual Fee">$0</td><td data-label="Rewards">2% on everything</td><td data-label="Key Advantage">Straightforward approach, no categories to track</td>'}}></tr>
                        </tbody>
                    </table>
                </div>
                 {/* Using dangerouslySetInnerHTML for ® & ℠ */}
                <p dangerouslySetInnerHTML={{ __html:"While the competition is fierce, Custom Cash® stands tall for anyone who wants automatic 5% monthly on a chosen category. If you prefer a no-hassle 2% on absolutely everything, alternatives like Double Cash® or Active Cash℠ might suffice. But for strategic earners comfortable with focusing on one major category monthly, Custom Cash® is tough to beat."}}></p>
            </section>

            {/* Section 14: International Travel (Mapped from HTML Section 13) */}
            <section id="section-14" className={styles.reviewSection}>
                 <h2>Is It Right for International Travel?</h2>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{ __html:"With a <strong>3% foreign transaction fee</strong>, the <strong>Citi Custom Cash®</strong> isn’t ideal for globetrotters. Frequent overseas usage will erode your rewards, potentially reducing the net value below 1%. If you spend significant time abroad, consider a no-FTF card (like some from Capital One or a premium Citi product) for foreign-based transactions. However, if your international purchases are sporadic or minimal, you can still leverage Custom Cash® for domestic expenditures while pairing it with a second, more globally friendly card whenever you travel."}}></p>
            </section>

            {/* Section 15: Who Should Get It (Mapped from HTML Section 14) */}
             <section id="section-15" className={styles.reviewSection}>
                <h2 dangerouslySetInnerHTML={{ __html:"Who Should Get the Custom Cash®?"}}></h2>
                 {/* Using Pros/Cons Structure */}
                 <div className={styles.prosCons}>
                     <div className={styles.pros}>
                        <h3>Perfect For:</h3>
                         <ul className={styles.featureList}>
                             <li><strong>Beginner or Intermediate Users:</strong> Zero annual fee, easy welcome bonus, and flexible 5% categories remove complexity.</li>
                             <li><strong>Domestic Spenders:</strong> If most charges are in USD, you sidestep the 3% foreign fee and reap maximum returns.</li>
                              {/* Using dangerouslySetInnerHTML for ® */}
                             <li dangerouslySetInnerHTML={{__html:"<strong>Citi Fans:</strong> Already in the ThankYou® Points ecosystem? Custom Cash® can supercharge your monthly earnings for future travel redemptions."}}></li>
                             <li><strong>Category-Focused Earners:</strong> If your monthly expenses naturally cluster in one category, it’s an effortless way to consistently earn 5%.</li>
                         </ul>
                     </div>
                     <div className={styles.cons}>
                         {/* Added a heading for consistency */}
                         <h3>Not Ideal If:</h3>
                         <ul className={styles.featureList}>
                             <li>You travel abroad frequently (3% FTF is a drawback).</li>
                             <li>You spend well over $500 in one category monthly (only 1% applies beyond cap).</li>
                             <li>You need premium travel perks like lounge access or robust insurance.</li>
                             <li>You prefer flat-rate 2% cash back on everything.</li>
                         </ul>
                     </div>
                 </div>
            </section>

            {/* Section 16: Downsides (Mapped from HTML Section 15) */}
            <section id="section-16" className={styles.reviewSection}>
                <h2>Downsides</h2>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{ __html:"Although the Custom Cash® shines in many respects, consider these potential issues:"}}></p>
                <ul className={styles.featureList}>
                    <li><strong>$500 Monthly Cap:</strong> If your top category typically exceeds $500, you’ll revert to 1% on the overage.</li>
                    <li><strong>Foreign Transaction Fee (3%):</strong> Deters heavy international or cross-border online shoppers.</li>
                    <li><strong>No Premium Travel Perks:</strong> You won’t see airport lounge access, baggage insurance, or trip delay coverage common in high-tier travel cards.</li>
                    <li><strong>Credit Score Requirements:</strong> Generally needs 700+ for approval, so not ideal for fresh rebuilders with significantly lower scores.</li>
                </ul>
                <p>
                    If none of these are deal-breakers, the overall benefits easily outweigh
                    the limitations for the average user wanting robust monthly earnings
                    in a no-fee package.
                </p>
            </section>

             {/* Section 17: Practical Tips (Mapped from HTML Section 16) */}
             <section id="section-17" className={styles.reviewSection}>
                <h2>Practical Tips and Best Practices</h2>
                <ol className={styles.numberedList}>
                    <li><strong>Target the $500 Cap:</strong> Consolidate spending in your chosen 5% category up to $500 each month. Use a separate card for other categories if you have better rates elsewhere.</li>
                    <li><strong>Monitor Your Category Shifts:</strong> If you foresee a big grocery spend next month, plan your dining spend accordingly, so groceries remain your top outlay.</li>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Pair with a No-FTF Card:</strong> If traveling, keep a no-FTF companion on hand (like some Capital One or certain Chase cards) to avoid the 3% foreign fee on overseas charges."}}></li>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Combine with Citi Premier®:</strong> If travel hacking is your game, transferring points from Custom Cash® to Premier® can unlock higher-value redemptions."}}></li>
                    <li><strong>Watch for Temporary Offers:</strong> Occasionally, Citi may run targeted deals (like extra points at specific merchants), so keep an eye on your statement or Citi offers in your online account.</li>
                </ol>
            </section>

            {/* Section 18: Advanced FAQ (Mapped from HTML Section 17) */}
            <section id="section-18" className={styles.reviewSection}>
                <h2>Advanced FAQ</h2>
                <h3>Q1: Does the 5% category rotate each billing cycle automatically?</h3>
                <p>
                    Yes. The card checks which eligible category you spent the most on,
                    awarding 5% on up to $500. If groceries outstrip dining one month,
                    groceries get the 5%. Next month, if dining surpasses groceries,
                    it auto-shifts to dining—no re-enrollment necessary.
                </p>
                <h3>Q2: How does the $200 welcome bonus post?</h3>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{ __html:"After $750 in purchases within the first 3 months, Citi typically issues a statement credit or grants you 20,000 ThankYou® Points (worth $200 if redeemed as cash). Terms can vary, so check the current offer details."}}></p>
                <h3>Q3: Can multiple authorized users affect my 5% category?</h3>
                <p>
                    All charges on the account (including those by authorized users)
                    combine. Whichever category hits the highest sum becomes your
                    5% earner. So yes, an authorized user’s spending could change
                    which category you maximize in a given billing cycle.
                </p>
                <h3>Q4: Do ThankYou® Points expire?</h3>
                <p>
                    Generally not, as long as the account remains open and in good
                    standing. However, if you close your account or default,
                    you risk losing any unredeemed points.
                </p>
            </section>

            {/* Section 19: Final Thoughts (Mapped from HTML Section 18) */}
            <section id="section-19" className={styles.reviewSection}>
                <h2>Final Thoughts</h2>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{ __html:"The <strong>Citi Custom Cash® Card</strong> proves that no-annual-fee cards can still offer top-tier rewards. By automatically funneling 5% to your prime monthly category, it reduces the friction usually tied to rotating enrollments or carefully planned category usage. Pair that with a decent welcome bonus and flexibility in redemption, and you have a product that caters to both casual cardholders and serious reward strategists."}}></p>
                <p>
                    While it’s not the best solution for heavy international usage or major
                    travelers wanting lounge benefits, for everyday domestic spending it excels.
                    Whether you’re single, a family shopper, or someone with a shifting monthly
                    budget, the Custom Cash® can adapt. And if you combine it with a higher-end
                    Citi card, you unlock advanced redemption potential, effectively bridging
                    the gap between a “simple” cashback card and a robust travel points tool.
                </p>
            </section>

             {/* CTA Section */}
             <section id="cta" className={styles.ctaSection}>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <h2 dangerouslySetInnerHTML={{__html:"Get the <b>Citi Custom Cash®</b> Today!"}}></h2>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{__html:"Want to capitalize on a flexible 5% without an annual fee? The Citi Custom Cash® might be a perfect match. Don’t miss out on the sign-up bonus, straightforward redemption paths, and synergy with other Citi cards. Apply below or check the rates first:"}}></p>
                <div className={styles.ctaButtons}>
                    <a href={reviewData.applyLink} className={`${styles.btn} ${styles.btnApply}`} title="From card issuer's secure site" target="_blank" rel="noopener noreferrer sponsored">Apply Now</a>
                    {/* Using dangerouslySetInnerHTML for &amp; */}
                    {/* !!! WARNING: Rates link is a placeholder based on source HTML !!! */}
                    <a href={reviewData.ratesLink} className={`${styles.btn} ${styles.btnRates}`} target="_blank" rel="noopener noreferrer sponsored" dangerouslySetInnerHTML={{__html:"See Rates &amp; Fees"}}></a>
                </div>
            </section>


            {/* Section 20: Should You Apply? (Mapped from HTML Section 19) */}
             <section id="section-20" className={styles.reviewSection}>
                 <h2>Should You Apply?</h2>
                <div className={styles.prosCons}>
                    <div className={styles.pros}>
                        <h3>Yes, If You:</h3>
                        <ul className={styles.featureList}>
                            <li>Value an auto-adjusting 5% category with zero annual fee</li>
                            <li>Primarily spend in USD or domestically</li>
                             {/* Using dangerouslySetInnerHTML for ® */}
                            <li dangerouslySetInnerHTML={{__html:"Are comfortable paying in full to avoid high APR erosion of rewards"}}></li>
                             {/* Using dangerouslySetInnerHTML for ® */}
                            <li dangerouslySetInnerHTML={{__html:"Want a synergy boost with other Citi ThankYou® cards"}}></li>
                        </ul>
                    </div>
                    <div className={styles.cons}>
                         <h3>No, If You:</h3>
                        <ul className={styles.featureList}>
                            <li>Frequently purchase abroad (the 3% FTF is limiting)</li>
                            <li>Spend well above $500 in a single category monthly and want more than 1% beyond that cap</li>
                            <li>Need robust travel perks, such as lounge access or baggage insurance</li>
                        </ul>
                    </div>
                </div>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{ __html:"Overall, for domestic, no-fee consumers looking for a quick route to 5% each month, the Custom Cash® is compelling. Just be mindful of the cap and foreign fees to ensure it fits your lifestyle."}}></p>
            </section>

             {/* E-A-T Section - Corrected from source */}
             <section id="eat-expertise-authority-trustworthiness" className={`${styles.reviewSection} ${styles.eatSection}`}>
                <h2 dangerouslySetInnerHTML={{ __html: "Our Commitment to E-A-T: Expertise, Authority &amp; Trustworthiness"}}></h2>
                 {/* Using E-A-T text adapted for Citi Custom Cash */}
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
                    in credit cards and cash back rewards, ensuring thorough,
                    accurate content on cards like the Citi Custom Cash.</li>
                    <li><strong>Real-Time Updates:</strong>
                    We continually check official issuer materials (Citi)
                    and user data points to maintain current rates, terms, and bonus categories.</li>
                    <li dangerouslySetInnerHTML={{ __html: "<strong>Conferences &amp; Webinars:</strong> Our team attends financial and travel events, enriching our knowledge base with industry insights on maximizing rewards."}}></li>
                </ul>
                <h3>2. Authority</h3>
                <ul className={styles.featureList}>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Detailed Coverage:</strong> This review offers an exhaustive look at the Citi Custom Cash® Card, from its unique 5% structure to redemption tips."}}></li>
                    <li><strong>Trusted By Major Outlets:</strong>
                    Our articles are frequently cited by national finance
                    and travel news sites for credit card comparisons.</li>
                    <li><strong>Full Disclosure:</strong>
                    If affiliate links or promotions exist, we clearly state them,
                    ensuring objective editorial content.</li>
                </ul>
                <h3>3. Trustworthiness</h3>
                <ul className={styles.featureList}>
                    <li><strong>Independent Analysis:</strong>
                    We never let advertisers influence our ratings or opinions on the Custom Cash card.</li>
                    <li><strong>Frequent Revisions:</strong>
                    We revise reviews whenever new offers appear or Citi updates the ThankYou program or card benefits.</li>
                    <li><strong>Community Feedback:</strong>
                    We encourage open discussion in comments,
                    fostering transparency and additional user insights.</li>
                    <li dangerouslySetInnerHTML={{__html:"<strong>Data Security:</strong> We prioritize user privacy and follow best practices, outlined in our <a href='/privacy-policy'>Privacy Policy</a>."}}>
                        {/* Corrected Link */}
                        {/* <strong>Data Security:</strong> As per our <Link href="/privacy-policy"><a>Privacy Policy</a></Link>, we safeguard user data from subscriptions or feedback forms. */}
                    </li>
                </ul>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{ __html: "By following these E‑A‑T principles, we aim to guide you responsibly toward a credit card that fits your needs and maximizes your cash back rewards." }}></p>
            </section>

          </article>
        </div> {/* Close reviewContainer */}
      </main>

      
    </>
  );
}

export default CitiCustomCashReviewPage;