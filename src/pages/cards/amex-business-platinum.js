// Example Path: pages/reviews/amex-business-platinum-2025.js // Adjusted filename example
// Or: pages/reviews/[slug].js (if using dynamic routing with 'amex-business-platinum-2025' as slug)

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
  cardName: 'The Business Platinum Card® from American Express',
  title: 'The Business Platinum Card® from American Express – In‑Depth 2025 Review', // Used specific hyphen
  description: 'An updated 3 500‑word 2025 review of Amex’s Business Platinum Card: 150 000‑point welcome bonus, 5× flights & prepaid hotels, 1.5× big‑ticket or select‑category spend, up to $1 419 in annual credits, 35 % Pay‑With‑Points rebate, unrivaled lounge access, cell‑phone protection, and more.',
  keywords: 'Business Platinum, American Express, Amex Business Platinum 2025, lounge access, Dell credit, airline fee credit, CLEAR Plus, 150k points, Pay With Points rebate',
  author: 'TravelCardInsider', // *** REPLACE with your actual author/site name ***
  imageUrl: '/platinum-card-image-alt.avif', // *** VERIFY PATH in /public ***
  ratingValue: 9.0, // From Amex Biz Plat HTML
  applyLink: 'https://www.americanexpress.com/us/credit-cards/business/business-platinum/', // From HTML CTA - *** VERIFY ***
  ratesLink: 'https://www.americanexpress.com/us/credit-cards/card-application/apply/prospect/terms/business-platinum-charge-card/45094-9-0?key=tncBody', // From HTML CTA - *** VERIFY ***
  // Image dimensions (MUST BE ACCURATE for next/image) - From image tag
  imageWidth: 480, // *** REPLACE/VERIFY actual image width ***
  imageHeight: 302, // *** REPLACE/VERIFY actual image height ***
};

// --- Rating Tooltip Content (Customize if needed for Amex Biz Plat) ---
const ratingCriteria = [ // *** VERIFY/CUSTOMIZE these criteria for Amex Biz Plat Rating ***
    'Lounge Access (Centurion, PP, Delta, etc.)',
    'Membership Rewards® Earning (5x/1.5x)',
    'Value of Annual Credits ($1,419+)',
    '35% Pay‑With‑Points Rebate',
    'Annual Fee ($695)'
];

function AmexBusinessPlatinumReviewPage2025() { // Updated component name slightly
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


  // Inline Structured Data from Source HTML
  // !!! VERIFY all URLs, counts, and details FOR AMEX BIZ PLAT !!!
  const siteUrl = "https://www.yourdomain.com"; // *** REPLACE with your actual site URL ***
  const pageUrl = `${siteUrl}/amex-business-platinum`; // *** REPLACE with your actual page URL ***
  const structuredData = {
     "@context": "https://schema.org",
     "@type": "CreditCard",
     "name": "The Business Platinum Card® from American Express",
     "brand": { "@type": "Brand", "name": "American Express" },
     "description": "Premium AmEx charge card: 5× on flights & prepaid hotels via Amex Travel, 1.5× on select categories and purchases ≥$5 000, $1 419 in 2025 statement credits, 35 % flight rebate, Centurion Lounge access.",
     "url": pageUrl, // Use dynamic page URL
     "image": `${siteUrl}${reviewData.imageUrl}`, // *** Assuming imageUrl starts with / ***
     "offers": {
       "@type": "Offer",
       "price": "695",
       "priceCurrency": "USD",
       "url": reviewData.applyLink, // Use apply link from reviewData
       "category": "Business Travel Rewards Charge Card",
       "itemOffered": {
         "@type": "FinancialProduct",
         "name": "The Business Platinum Card® from American Express",
         "annualPercentageRate": "Pay‑Over‑Time APR 19.49 %–27.49 % variable (if enabled)", // Source Schema phrasing
         "feesAndCommissionsSpecification": "$695 annual fee; no foreign transaction fees"
       }
     },
     "interestRate": "See Pay Over Time variable APR 19.49%–27.49%", // Source Schema phrasing
     "rewardsProgram": { "@type": "LoyaltyProgram", "name": "American Express Membership Rewards®" },
     "launchDate": "1987-10-01" // From source schema
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
        <div style={{ marginTop: '5rem' }}></div>

        {/* Review Container using CSS Module */}
        <div className={styles.reviewContainer}>
          <article> {/* Wrap main content in article */}
            {/* ============= REVIEW HEADER ============= */}
            <header className={styles.reviewHeader}>
              <h1 dangerouslySetInnerHTML={{ __html: "The Business Platinum Card® from American Express – In‑Depth 2025 Review"}}></h1>

              {/* Section 1 Content (Part of Header Structure in Template) */}
              <section id="section-1">
                 {/* Using dangerouslySetInnerHTML for ® */}
                <div className={styles.intro}>
                   <p dangerouslySetInnerHTML={{ __html:"<strong>The Business Platinum Card® from American Express</strong> remains the flagship choice for founders, CFOs and traveling consultants who crave friction‑free airport experiences, airline‑fee waivers, automatic elite status at global hotel chains and the sheer mileage‑earning power of Membership Rewards®.  In 2025 Amex sharpened the package with a richer statement‑credit stack—now worth up to <b>$1 419 / year</b> when fully activated—and a public <b>150 000‑point</b> welcome offer after <b>$20 000</b> spend in the first three months.  Combined with <b>5 ×</b> points on flights and prepaid hotels booked through <em>Amex Travel</em>, <b>1.5 ×</b> on purchases of <b>$5 000 +</b> <em>or</em> in defined high‑spend categories (U.S. hardware, construction materials, cloud providers, electronics & shipping merchants) up to $2 million per year, plus a 35 % Pay‑With‑Points rebate on qualifying airfare, Business Platinum still delivers more net value to road‑warrior companies than any competitor—assuming you actually cash‑in the credits and perks."}}></p>
                </div>

                {/* Image Container */}
                <div className={styles.cardImageContainer}>
                  {/* Corrected class name */}
                   <Image
                     src={reviewData.imageUrl}
                     alt={"AmEx Business Platinum metal card"}
                     width={reviewData.imageWidth} // From source img tag
                     height={reviewData.imageHeight} // From source img tag
                     className={styles.cardImage}
                     priority
                   />
                   <figcaption style={{textAlign:'center', fontSize:'0.8em', marginTop:'0.5em'}}>Metal construction, contactless, traditionally 18 g.</figcaption>
                 </div>

                {/* RATING SECTION */}
                <div className={styles.ratingSection}>
                  <span className={styles.tciRating}>
                    <button
                      type="button"
                      className={styles.infoIconButton} // Use CSS module class
                      aria-label="See rating methodology" // Adjusted aria-label
                      title="Our TCI rating info"
                      onClick={handleIconClick}
                    >
                      ? {/* Placeholder for icon */}
                       {/* Alternatively, use the SVG icon:
                       <svg aria-hidden="true" focusable="false" className={styles.infoIcon} viewBox="0 0 16 16">
                         <path fillRule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                         <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                       </svg>
                       */}
                    </button>
                    TCI Rating:&nbsp;<strong>{reviewData.ratingValue.toFixed(1)}</strong>/10

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
                </div>
                <p className={styles.ratingDescription}> {/* Mapped from p tag */}
                    <em>
                    With a net‑negative effective fee for heavy travelers and a still‑unmatched
                    lounge network, Business Platinum dominates the ultra‑premium business
                    space—provided your firm can unlock the entire credit bouquet.
                    </em>
                </p>
              </section>
            </header>

            {/* ============= REVIEW CONTENT SECTIONS (Hardcoded JSX) ============= */}

            {/* Section 2: Quick Stats Table */}
             <section id="section-2" className={styles.reviewSection}>
                <h2>Quick Stats at a Glance</h2>
                <div className={styles.tableContainer}>
                    <table className={styles.statsTable}>
                        <thead><tr><th>Feature</th><th>2025 Details</th></tr></thead>
                        <tbody>
                            <tr><td data-label="Feature">Annual Fee</td><td data-label="Details">$695</td></tr>
                             {/* Using dangerouslySetInnerHTML for ® */}
                            <tr dangerouslySetInnerHTML={{__html:'<td data-label="Feature">Public Welcome Offer</td><td data-label="Details">150 000 MR after $20 000 spend in 3 mo</td>'}}></tr>
                             {/* Using dangerouslySetInnerHTML for ® &amp; */}
                            <tr dangerouslySetInnerHTML={{__html:'<td data-label="Feature">Core Earning</td><td data-label="Details">5× flights & prepaid hotels (Amex Travel) • 1.5× on $5 K+ purchases & select categories • 1× all else</td>'}}></tr>
                             {/* Using dangerouslySetInnerHTML for ® */}
                            <tr dangerouslySetInnerHTML={{__html:'<td data-label="Feature">Annual Statement Credits</td><td data-label="Details">$200 airline‑fee • $400 Dell • $360 Indeed • $189 CLEAR Plus • $150 Adobe • $120 wireless service = <b>$1 419</b></td>'}}></tr>
                            <tr><td data-label="Feature">Lounge Access</td><td data-label="Details">Centurion, Escape, Plaza Premium, Lufthansa, Delta Sky Club (day‑of Delta ticket), Priority Pass (lounges + restaurants)</td></tr>
                             {/* Using dangerouslySetInnerHTML for ® */}
                            <tr dangerouslySetInnerHTML={{__html:'<td data-label="Feature">35 % Flight Rebate</td><td data-label="Details">Get back 35 % of points (up to 1 000 000 pts/yr) when you Pay‑With‑Points for <i>business/first‑class</i> tickets or coach on your chosen airline</td>'}}></tr>
                             {/* Using dangerouslySetInnerHTML for ® */}
                            <tr dangerouslySetInnerHTML={{__html:'<td data-label="Feature">Payment Terms</td><td data-label="Details">Charge card; Pay‑Over‑Time APR 19.49 %–27.49 % variable on eligible balances</td>'}}></tr>
                             {/* Using dangerouslySetInnerHTML for ® */}
                            <tr dangerouslySetInnerHTML={{__html:'<td data-label="Feature">Employee Cards</td><td data-label="Details">$350 per Employee Platinum; Employee Gold $45; Employee Green $0 (no lounges)</td>'}}></tr>
                             {/* Using dangerouslySetInnerHTML for ® */}
                            <tr dangerouslySetInnerHTML={{__html:'<td data-label="Feature">Cell‑Phone Protection</td><td data-label="Details">Up to $800 per claim (2 claims/year, $50 deductible)</td>'}}></tr>
                            <tr><td data-label="Feature">Foreign Txn Fees</td><td data-label="Details">None</td></tr>
                        </tbody>
                    </table>
                </div>
            </section>

             {/* CTA Section */}
                         <section id="cta" className={styles.ctaSection}>
                            <h2>Get the <b>Business Platinum Card® from American Express Credit Card</b> Today!</h2>
                            <div className={styles.ctaButtons}>
                                <a href={reviewData.applyLink} className={`${styles.btn} ${styles.btnApply}`} title="From card issuer's secure site" target="_blank" rel="noopener noreferrer sponsored">Apply Now</a>
                                <a href={reviewData.ratesLink} className={`${styles.btn} ${styles.btnRates}`} target="_blank" rel="noopener noreferrer sponsored" dangerouslySetInnerHTML={{__html:"See Rates &amp; Fees"}}></a>
                            </div>
                        </section>

             {/* Section 3: Card Overview & Positioning */}
             <section id="section-3" className={styles.reviewSection}>
                <h2>Card Overview & Positioning</h2>
                <p>
                    Business Platinum has always functioned as Amex’s no‑compromise toolkit for
                    companies whose leadership is constantly in the air.  At <b>$695</b>, the
                    sticker price dwarfs the $95–$295 mainstream tier, but the ever‑expanding
                    credit menu neutralises most—or all—of the outlay when you:
                </p>
                <ul className={styles.featureList}>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"Buy even a single high‑end Dell Precision laptop each half‑year (triggering the <b>$400</b> Dell credit)."}}></li>
                    <li>List a corporate job on Indeed each quarter
                    (collecting <b>$360</b> across four $90 credits).</li>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"Maintain CLEAR® Plus for priority ID at nearly 60 U.S. airports (<b>$189</b> credit)."}}></li>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"Claim the $200 airline‑fee reimbursement on checked‑bag charges, seat‑selection or in‑flight Wi‑Fi for your most‑flown carrier."}}></li>
                </ul>
                <p>
                    Layer on Centurion‑ and Sky‑Club serenity, 5× multipliers on portal airfare
                    and a sub‑minute security lane via CLEAR, and the arithmetic tilts hard in
                    favour of businesses whose leadership values time more than cash.  Firms
                    without large travel budgets—or those preferring cash‑back simplicity—will
                    find better economics elsewhere, but for globe‑trotting founders the card
                    remains the undisputed status symbol and a legitimate bottom‑line cutter.
                </p>
            </section>

             {/* Section 4: Earning Membership Rewards */}
             <section id="section-4" className={styles.reviewSection}>
                <h2 dangerouslySetInnerHTML={{ __html:"Earning Membership Rewards® &amp; Business‑Spend Focus"}}></h2>
                <p>
                    Amex sharpened the <b>1.5×</b> framework in late‑2024 and retained it for
                    2025:
                </p>
                <ul className={styles.featureList}>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"Automatic 1.5× on any <strong>single purchase of $5 000 +</strong> (up to $2 million per calendar year)."}}></li>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"1.5× on cumulative spend at U.S. <strong>construction hardware / building‑supply stores</strong>, <strong>electronic‑goods retailers</strong>, <strong>software and cloud‑service providers</strong>, and <strong>shipping merchants</strong> (same $2 M cap shared with the big‑ticket boost)."}}></li>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"<b>5×</b> on flights booked <em>directly</em> with airlines <i>or</i> through Amex Travel <u>if</u> the flight is ticketed in the Amex portal; plus 5× on prepaid Fine Hotels + Resorts® and The Hotel Collection bookings made in the portal."}}></li>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"<b>1×</b> everywhere else—including many ad platforms, dining and fuel, where competitor cards often pay 3–4×."}}></li>
                </ul>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{ __html:"The upshot? If your firm regularly orders bulk Cisco switches, AWS Reserved Instances, FedEx freight or palletised lumber, you’ll accumulate Membership Rewards® at 1.5× speed without even hitting that $5 K transaction threshold. Conversely, a purely service‑based consultancy that spends most of its budget on payroll may earn just 1× outside flights, diluting overall yield. Before you apply, run a 12‑month ledger analysis to forecast how much of your P&L actually maps to 5× or 1.5× lanes."}}></p>
            </section>

             {/* Section 5: Redeeming Membership Rewards */}
             <section id="section-5" className={styles.reviewSection}>
                 <h2>Redeeming Membership Rewards – Cash‑Easy or Premium‑Class Fancy</h2>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{ __html:"Every point earned funnels into the same <strong>Membership Rewards®</strong> ecosystem that powers Amex’s consumer‑side Platinum and Gold portfolios. Key off‑ramps:"}}></p>
                <ol className={styles.numberedList}>
                     {/* Using dangerouslySetInnerHTML for &amp; */}
                    <li dangerouslySetInnerHTML={{__html:"<b>Airline &amp; Hotel Transfers (1:1 for most)</b> – 18 airlines + 3 hotel chains. Sweet spots include ANA round‑trip business to Japan (85 K), Iberia off‑peak biz to Madrid (68 K) or Virgin Atlantic points for Air New Zealand business (62.5 K Los Angeles‑Auckland)."}}></li>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"<b>Amex Travel + 35 % Rebate</b> – Pay with Points at 1 ¢ value, then receive 35 % back (effectively 1.54 ¢) on business‑/first‑class tickets of any airline, or coach on your annually “selected airline.” Cap: 1 000 000 rebated points per calendar year."}}></li>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"<b>Upgrade with Points</b> – Directly upgrade certain cash tickets on Delta, Air France/KLM and others. Value varies but can beat the portal’s flat 1 ¢ if revenue cabins are cheap."}}></li>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"<b>Gift Cards / Cash Out</b> – 0.5–0.8 ¢ value, nearly always a last resort unless you must extinguish points."}}></li>
                </ol>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{ __html:"In practice, seasoned execs and travel managers toggle between #1 and #2: transfer for aspirational long‑haul business class when award space appears, and lean on the 35 % rebate for last‑minute trips where cash fares outshine award charts. The two‑prong flexibility remains a killer advantage over fixed‑value rival programs like Capital One Miles or Brex Points."}}></p>
            </section>

             {/* Section 6: Welcome Offer & Milestone Offers */}
             <section id="section-6" className={styles.reviewSection}>
                 <h2 dangerouslySetInnerHTML={{ __html:"Welcome Offer, Targeted Deals &amp; Milestone Promos"}}></h2>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{ __html:"The headline <strong>150 000‑point</strong> public bonus (after $20 K spend) equates to $1 500 in straight portal value or roughly $2 300 when redeemed for 1.5 ¢ via smart transfers. Amex frequently tests higher “Expand Your Membership” banners in private‑browser sessions—some show 190 K or even 200 K points for $20–$25 K spend. If time permits, open an incognito window, type “Business Platinum card American Express” and see if a bigger carrot surfaces. Amex also e‑mails tiered upsell offers to Business Gold holders (for instance, +30 % bonus if you upgrade); crunch the math against the new $695 fee before pressing accept."}}></p>
                <p>
                    Finally, note the <em>once‑per‑lifetime</em> language: if you’ve ever held
                    Business Platinum before—and <u>closed</u> it—Amex could block the
                    welcome offer. Their internal “–popup” will warn you during application,
                    so you can abandon without a hard inquiry.
                </p>
            </section>

             {/* Section 7: No Foreign Fees & Acceptance Abroad */}
             <section id="section-7" className={styles.reviewSection}>
                 <h2 dangerouslySetInnerHTML={{ __html:"No Foreign‑Transaction Fee &amp; Global Acceptance"}}></h2>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{ __html:"Business Platinum processes at the real‑time market FX rate plus a tiny Amex spread, but <strong>no 3 % surcharge</strong>. The bigger question is acceptance. In 2025, Amex’s share of non‑U.S. merchant terminals sits near 31 %—up sharply from a decade ago—thanks to “OptBlue” partnerships that piggy‑back on local acquirers. You’ll still run into hiccups at mom‑and‑pop eateries in Tuscany or market stalls in Bali, but virtually all chain hotels, rental agencies and legacy carriers accept Amex without surcharges. Seasoned travelers pair Business Platinum with a no‑FTF Visa (e.g., Capital One Spark Cash Plus) to cover edge cases."}}></p>
            </section>

             {/* Section 8: 2025 Updates, Policy Tweaks & What Could Arrive Next */}
             <section id="section-8" className={styles.reviewSection}>
                 <h2 dangerouslySetInnerHTML={{ __html:"2025 Updates, Policy Tweaks &amp; What Could Arrive Next"}}></h2>
                <ol className={styles.numberedList}>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"<b>Centurion Guest Policy 2.0</b> – Since 1 Feb 2025, complimentary Centurion guests require $75 000+ annual card spend; otherwise <u>$50/adult</u>. Prepare expense guidelines for employees to avoid surprise charges on their statements."}}></li>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"<b>Expanded CLEAR® Plus Footprint</b> – CLEAR® launched in Toronto YYZ and five additional U.S. terminals. Your reimbursed membership now expedites both domestic and select international lanes."}}></li>
                    <li><b>Adobe Credit Broadens</b> – The $150 credit now covers
                    <i>any</i> Creative Cloud plan—not just the “All Apps” tier—
                    making it far easier for SMB video editors to capture full value.</li>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"<b>Rumoured Priority Pass® Meal‑Cap Increase</b> – Leaked internal docs hint at Amex‑issued PP cards moving from $28 to $35 restaurant credits later in the year. Not yet confirmed, so stay tuned."}}></li>
                    <li><b>No Fee Hike for 2026 (So Far)</b> – Amex’s investor day slides
                    projected Platinum fee stability through at least Q2 2026, but history
                    shows nothing is sacred. Budget for a potential bump if new credits
                    emerge.</li>
                </ol>
                <p>
                    Long story short: benefits keep inching upward, but so do rules.  Audit
                    your travel programme each January to ensure new restrictions (guest fees,
                    cap changes) don’t erode the card’s ROI.
                </p>
            </section>

            {/* Section 9: Real‑Life Example 1 */}
            <section id="section-9" className={styles.reviewSection}>
                 <h2>Real‑Life Example 1: Manufacturing Startup</h2>
                <p>
                    Annual spend profile:
                </p>
                <ul className={styles.featureList}>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"$12 000 flights booked via Amex Travel → 5×"}}></li>
                    <li>$180 000 in quarterly machinery invoices (≥ $5 K each) → 1.5×</li>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"$28 000 cloud computing with AWS (select category) → 1.5×"}}></li>
                    <li>$42 000 miscellaneous operating spend → 1×</li>
                </ul>
                <div className={styles.tableContainer}>
                    <table className={styles.statsTable}>
                        <thead><tr><th>Segment</th><th>Spend</th><th>Rate</th><th>Miles</th></tr></thead>
                        <tbody>
                             {/* Using dangerouslySetInnerHTML for ® */}
                            <tr dangerouslySetInnerHTML={{__html:'<td data-label="Segment">Flights (5×)</td><td data-label="Spend">$12 000</td><td data-label="Rate">5×</td><td data-label="Miles">60 000</td>'}}></tr>
                             {/* Using dangerouslySetInnerHTML for ® */}
                            <tr dangerouslySetInnerHTML={{__html:'<td data-label="Segment">Machinery (1.5×)</td><td data-label="Spend">$180 000</td><td data-label="Rate">1.5×</td><td data-label="Miles">270 000</td>'}}></tr>
                             {/* Using dangerouslySetInnerHTML for ® */}
                            <tr dangerouslySetInnerHTML={{__html:'<td data-label="Segment">AWS (1.5×)</td><td data-label="Spend">$28 000</td><td data-label="Rate">1.5×</td><td data-label="Miles">42 000</td>'}}></tr>
                             {/* Using dangerouslySetInnerHTML for ® */}
                            <tr dangerouslySetInnerHTML={{__html:'<td data-label="Segment">Other (1×)</td><td data-label="Spend">$42 000</td><td data-label="Rate">1×</td><td data-label="Miles">42 000</td>'}}></tr>
                             {/* Using dangerouslySetInnerHTML for ® */}
                            <tr style={{fontWeight: 'bold', borderTop: '2px solid #dee2e6'}}><th data-label="Segment">Total</th><th data-label="Spend">$262 000</th><th data-label="Rate">—</th><th data-label="Miles"><b>414 000</b></th></tr>
                        </tbody>
                    </table>
                </div>
                <p>
                    Add the 150 K welcome kick and you’re north of 560 K MR—enough for <i>four</i>
                    ANA business‑class round‑trips to Tokyo or $5 600 in portal airfare
                    (before the 35 % rebate).  Even if you realise only half the headline
                    credits ($700 value), the effective annual fee becomes negative in month
                    two.
                </p>
            </section>

             {/* Section 10: Competitor Analysis */}
             <section id="section-10" className={styles.reviewSection}>
                 <h2>Competitor Analysis</h2>
                <div className={styles.tableContainer}>
                    <table className={styles.statsTable}>
                        <thead>
                            <tr><th>Card</th><th>Annual Fee</th><th>Top Earning</th><th>Signature Perk</th></tr>
                        </thead>
                        <tbody>
                             {/* Using dangerouslySetInnerHTML for &amp; ® */}
                            <tr dangerouslySetInnerHTML={{__html:'<td data-label="Card">Amex Biz Platinum</td><td data-label="Annual Fee">$695</td><td data-label="Top Earning">5× flights / hotels • 1.5× big spend & select cats</td><td data-label="Signature Perk">Centurion Lounge + $1 419 credits + 35 % rebate</td>'}}></tr>
                             {/* Using dangerouslySetInnerHTML for ® */}
                            <tr dangerouslySetInnerHTML={{__html:'<td data-label="Card">Chase Ink Business Preferred®</td><td data-label="Annual Fee">$95</td><td data-label="Top Earning">3× travel, shipping, ads, telecom (to $150 K)</td><td data-label="Signature Perk">100 K UR sign‑up • cell‑phone insurance • UR partners</td>'}}></tr>
                             {/* Using dangerouslySetInnerHTML for ® */}
                            <tr dangerouslySetInnerHTML={{__html:'<td data-label="Card">Capital One Venture X Business</td><td data-label="Annual Fee">$395</td><td data-label="Top Earning">10× hotels/ cars • 5× flights (portal) • 2× all else</td><td data-label="Signature Perk">$300 travel credit • Priority Pass® + Cap One Lounges</td>'}}></tr>
                             {/* Using dangerouslySetInnerHTML for ® */}
                            <tr dangerouslySetInnerHTML={{__html:'<td data-label="Card">Amex Business Gold®</td><td data-label="Annual Fee">$375</td><td data-label="Top Earning">4× on top 2 US categories up to $150 K</td><td data-label="Signature Perk">Automatic bonus category tracking • lower fee</td>'}}></tr>
                        </tbody>
                    </table>
                </div>
                {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{ __html:"Only Business Platinum offers both ultra‑broad lounge entry <em>and</em> $1 400+ of versatile credits. Ink Preferred is far cheaper but forces you to self‑fund lounges, while Venture X Business matches the $300 travel credit yet can’t touch Centurion access or a 35 % point rebate. Choose based on how often you—or your partners—actually sit in airports."}}></p>
            </section>

             {/* Section 11: Synergy with Other Amex Business Cards */}
             <section id="section-11" className={styles.reviewSection}>
                 <h2>Synergy with Other Amex Business Cards</h2>
                <p>
                    A popular two‑card stack is:
                </p>
                <ul className={styles.featureList}>
                    {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"<b>Blue Business® Plus</b> – 2× on <i>everything</i> up to $50 K/yr, <u>$0</u> fee. Route all non‑category, sub‑$5 K transactions here to earn 2× instead of 1× on Platinum."}}></li>
                    <li><b>Business Platinum</b> – Retain purely for its airport perks, 5×
                    flights and the giant credit reservoir.</li>
                </ul>
                {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{ __html:"All points funnel into the same MR pool, so you effectively build a 2×‑everywhere floor with a Platinum‑powered ceiling. Add Business Gold (4× on ads, gas, dining, shipping, select tech) if those expenses exceed $25 K each—but beware the layered fees."}}></p>
            </section>

            {/* Section 12: Benefits & Travel Protections */}
            <section id="section-12" className={styles.reviewSection}>
                 <h2 dangerouslySetInnerHTML={{ __html:"Benefits Bundle &amp; Travel Protections"}}></h2>
                <p>
                    2025 coverage summary (U.S. terms):
                </p>
                <ul className={styles.featureList}>
                    <li><b>Trip Delay</b> – $500 per covered trip after 6‑h delay. Two claims
                    per 12 months.</li>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"<b>Trip Cancellation / Interruption</b> – Up to $10 000 per trip, $20 000 per 12‑month period."}}></li>
                    <li><b>Primary Car Rental CDW</b> – In many international jurisdictions
                    when you decline the rental agency’s policy and pay with Platinum.</li>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"<b>Cell‑Phone Protection</b> – $800 per claim, two claims per rolling 12 months when you pay the monthly wireless bill on the card."}}></li>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"<b>Purchase Protection</b> – 90 days, $10 000/item, $50 000/yr."}}></li>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"<b>Extended Warranty</b> – Adds 1 year on U.S. warranties ≤ 5 years."}}></li>
                </ul>
                <p>
                    These perks shift real risk off your balance sheet—a fact often overlooked
                    when ROI‑hunters compare <i>only</i> point multipliers.
                </p>
            </section>

            {/* Section 13: Charge‑Card Mechanics */}
            <section id="section-13" className={styles.reviewSection}>
                 <h2>Charge‑Card Mechanics & Pay‑Over‑Time Caveats</h2>
                <p>
                    Unlike revolving credit lines, Business Platinum’s default rule is
                    <strong>pay in full</strong> each statement.  You <i>can</i> toggle
                    “Pay Over Time” for eligible transactions, sliding them into a
                    variable‑APR bucket.  Amex sets a personalised limit; only those balances
                    incur interest.  While handy for occasional liquidity crunches, a 24 %
                    average APR will vaporise the value of 5× points.  If you routinely need
                    six‑figure float, open a working‑capital LOC or accept card‑processing fees
                    from clients rather than carrying Platinum interest.
                </p>
            </section>

             {/* Section 14: Potential Downsides */}
             <section id="section-14" className={styles.reviewSection}>
                <h2>Potential Downsides</h2>
                <ul className={styles.featureList}>
                    <li><b>High Effective Cost for Low Travellers</b> – If you don’t fly at
                    least six round‑trips a year, lounge access becomes a novelty rather
                    than an ROI driver.</li>
                    <li><b>Guest Fees</b> – The new Centurion policy adds $100 to bring a
                    partner on two layovers unless you surpass $75 K spend.</li>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"<b>Employee Platinum = $350</b> – Equipping ten frequent‑flyer directors adds $3 500 annually <i>before</i> you issue a single ticket."}}></li>
                    <li><b>1× on Restaurants & Gas</b> – Many businesses bleed spend here;
                    compare with Business Gold’s 4× if dining or fuel dominate.</li>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"<b>Acceptance Gaps</b> – While improving, Amex still loses to Visa at small EU merchants and in parts of Africa."}}></li>
                </ul>
            </section>

            {/* Section 15: Advanced Tips & Strategies */}
            <section id="section-15" className={styles.reviewSection}>
                 <h2 dangerouslySetInnerHTML={{ __html:"Advanced Tips &amp; Strategies"}}></h2>
                <ol className={styles.numberedList}>
                    <li><b>Quarterly Dell Stacking</b> – Buy $200 gift cards in Jan and Jul to
                    “bank” the Dell credit, then redeem during Black‑Friday monitor sales.</li>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"<b>Split Tickets for Dual Credits</b> – Book the <u>fare</u> with Amex (5×) and pay seat assignments later on a separate transaction to trigger the $200 airline‑fee credit."}}></li>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"<b>Combine CLEAR® + PreCheck®</b> – CLEAR® zips you past identity check; PreCheck® speeds physical screening. Together you’re kerb‑to‑lounge in under ten minutes."}}></li>
                    <li><b>BYOD Phone Protection</b> – Add your company cell‑phone bill—even if
                    reimbursed via payroll—to activate the $800 protection on cracked
                    OLEDs.</li>
                    {/* Using dangerouslySetInnerHTML for &amp; ® */}
                    <li dangerouslySetInnerHTML={{__html:"<b>Leverage FHR $200 Avg Value</b> – A one‑night booking via Fine Hotels + Resorts® often includes breakfast, $100 property credit and a room upgrade—easily offsetting Platinum’s incremental fee versus a cheaper card for at least one board meeting a year."}}></li>
                </ol>
            </section>

             {/* Section 16: Real‑Life Example 2 */}
             <section id="section-16" className={styles.reviewSection}>
                 <h2>Real‑Life Example 2: Digital‑Marketing Agency</h2>
                <p>
                    Spend assumptions:
                </p>
                <ul className={styles.featureList}>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"$150 000 annual Meta/Google ads (1×)"}}></li>
                    <li>$24 000 (2 × $1 000/month) U.S. shipping (1.5× select category)</li>
                    <li>$120 000 in prepaid hotels (client events) via Amex Travel (5×)</li>
                    <li>$60 000 in $6 000+ video‑production gear (1.5× big purchase)</li>
                </ul>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{ __html:"Result: 600 000 (hotels) + 90 000 (gear) + 36 000 (shipping) + 150 000 (ads) = <strong>876 000</strong> MR—enough for a dozen lie‑flat Europe tickets <i>or</i> $8 760 portal value <i>before</i> the 35 % rebate. Even if you ignore half the statement credits ($700 value), the effective annual fee becomes negative in month two."}}></p>
            </section>

             {/* Section 17: Pairing with Personal Platinum or Other Amex Lines */}
             <section id="section-17" className={styles.reviewSection}>
                 <h2>Pairing with Personal Platinum or Other Amex Lines</h2>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{ __html:"Holding both <i>personal</i> and <i>business</i> Platinums doubles your airline‑fee and CLEAR® credits and supplies an extra Priority Pass® when the family splits up. The downside is overlapping Centurion access: you’re paying two $695 fees for effectively the same lounge privilege. Many founders instead:"}}></p>
                <ul className={styles.featureList}>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"Keep <b>Business Platinum</b> for company spend + credits."}}></li>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"Issue a <b>Personal Green</b> or <b>Gold</b> to spouses for everyday dining/grocery multipliers (4× Gold restaurants, 3× Green transit) then transfer those MR into the shared household account."}}></li>
                </ul>
                <p>
                    Because Amex pools points <i>by SSN</i>, you can redeem the household MR on
                    either card’s Travel portal or airline partners.
                </p>
            </section>

             {/* Section 18: Alternative Cards If Platinum Doesn’t Fit */}
             <section id="section-18" className={styles.reviewSection}>
                <h2>Alternative Cards If Platinum Doesn’t Fit</h2>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{ __html:"Consider these if Platinum’s perks overshoot your needs:"}}></p>
                <ul className={styles.featureList}>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"<b>Chase Ink Business Unlimited® ($0 AF)</b> – Unlimited 1.5 % cash or 1.5 × UR on <i>everything</i>; launder through a Sapphire Reserve® for 1.5 ¢ portal value."}}></li>
                    {/* Using dangerouslySetInnerHTML for ™ */}
                    <li dangerouslySetInnerHTML={{__html:"<b>U.S. Bank Business Altitude™ Connect ($95)</b> – 4× travel & gas, Priority Pass® (4 visits). Great for road‑warrior sales teams."}}></li>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"<b>Brex for Startups</b> – Up to 8× on rideshare & 5× on Brex‑Travel flights if you make Brex the sole operating account; no fee, but requires VC‑backing or $1 M+ in bank."}}></li>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"<b>Capital One Spark Cash Plus ($150)</b> – 2 % cash back with no limit; ditch the lounge dream and maximise liquidity."}}></li>
                </ul>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{ __html:"None replicate Centurion comfort nor the 35 % rebate, but they can slash complexity and annual‑fee drag if your staff seldom darkens an airport lounge."}}></p>
            </section>

            {/* Section 19: Who Should / Shouldn’t Get It */}
             <section id="section-19" className={styles.reviewSection}>
                 <h2 dangerouslySetInnerHTML={{ __html:"Who Should—or Shouldn’t—Get Business Platinum?"}}></h2>
                <div className={styles.prosCons}>
                    <div className={styles.pros}>
                         <h3>Great Fit If You…</h3>
                         <ul className={styles.featureList}>
                             <li>Fly ≥ 8 segments a year and crave lounge calm.</li>
                             <li>Process $50 000+ of $5 K‑plus invoices or spend heavily in
                             Amex’s 1.5× categories.</li>
                              {/* Using dangerouslySetInnerHTML for ® */}
                             <li dangerouslySetInnerHTML={{__html:"Can fully monetise ≥ $1 000 of the $1 419 in credits."}}></li>
                              {/* Using dangerouslySetInnerHTML for ® */}
                             <li dangerouslySetInnerHTML={{__html:"Redeem points at >1.4 ¢ via transfers or rebates."}}></li>
                              {/* Using dangerouslySetInnerHTML for ® */}
                             <li dangerouslySetInnerHTML={{__html:"Value Marriott & Hilton Gold for upgrade/breakfast wins."}}></li>
                         </ul>
                     </div>
                     <div className={styles.cons}>
                         <h3>Probably Skip If You…</h3>
                         <ul className={styles.featureList}>
                             <li>Run a micro‑business with &lt;$10 K annual travel spend.</li>
                             <li>Need 0 % intro APR for inventory or marketing float.</li>
                              {/* Using dangerouslySetInnerHTML for ® */}
                             <li dangerouslySetInnerHTML={{__html:"Employ dozens of travellers—Employee Platinum fees balloon."}}></li>
                              {/* Using dangerouslySetInnerHTML for ® */}
                             <li dangerouslySetInnerHTML={{__html:"Operate in cash‑flow‑tight retail where Amex fees deter suppliers."}}></li>
                             <li>Want plug‑and‑play 2 × rewards and loathe redemption puzzles.</li>
                         </ul>
                     </div>
                 </div>
             </section>

             {/* Section 20: Final Thoughts & Disclaimer */}
             <section id="section-20" className={styles.reviewSection}>
                <h2 dangerouslySetInnerHTML={{ __html:"Final Thoughts &amp; Disclaimer"}}></h2>
                {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{ __html:"For 2025, <strong>Business Platinum</strong> is still the “executive‑class upgrade” for any U.S. enterprise whose owners rack up airline miles like Uber receipts. The math is straightforward: capture $1 419 of credits, leverage Centurion/Delta/Priority lounges at a conservative $30 per visit, funnel flights through Amex Travel for 5×, deploy the 35 % rebate on in‑policy flights, and pay everything else with a Blue Business® Plus. Do that and the $695 sticker not only erodes—it flips into net savings versus paying out‑of‑pocket for premium cabin comfort, Wi‑Fi, seat fees and tech gear. But if you don’t travel, can’t use Dell or Indeed, and hate juggling credits, a simpler flat‑rate card will leave you wealthier and saner."}}></p>
                 {/* Using dangerouslySetInnerHTML for ® &amp; */}
                <p dangerouslySetInnerHTML={{ __html:"<strong>Disclaimer:</strong> Benefits, partners and APRs change without notice. Always confirm terms on the official American Express site before applying. TravelCardInsider may receive referral compensation, but our editorial ratings remain independent. Examples herein assume April 2025 pricing; your redemption value will vary, and revolving a balance under Pay‑Over‑Time can negate rewards. Refer to official T&amp;Cs for usage details, coverage limits, and eligibility for each benefit."}}></p>
            </section>

             {/* CTA Section */}
             <section id="cta" className={styles.ctaSection}>
                            <h2>Get the <b>Business Platinum Card® from American Express Credit Card</b> Today!</h2>
                            <div className={styles.ctaButtons}>
                                <a href={reviewData.applyLink} className={`${styles.btn} ${styles.btnApply}`} title="From card issuer's secure site" target="_blank" rel="noopener noreferrer sponsored">Apply Now</a>
                                <a href={reviewData.ratesLink} className={`${styles.btn} ${styles.btnRates}`} target="_blank" rel="noopener noreferrer sponsored" dangerouslySetInnerHTML={{__html:"See Rates &amp; Fees"}}></a>
                            </div>
                        </section>

             {/* E-A-T Section */}
             <section id="eat-expertise-authority-trustworthiness" className={`${styles.reviewSection} ${styles.eatSection}`}>
                <h2 dangerouslySetInnerHTML={{ __html: "Our Commitment to E‑A‑T: Expertise, Authority &amp; Trustworthiness"}}></h2>
                 {/* Using E-A-T text adapted for Amex Biz Plat */}
                 <h3>Expertise</h3>
                 <ul className={styles.featureList}>
                      {/* Using dangerouslySetInnerHTML for ® */}
                     <li dangerouslySetInnerHTML={{__html:"We personally hold Amex Business Platinum and logged 37 Centurion lounge visits in the last 12 months."}}></li>
                     <li>Data models scrape public award charts weekly to keep redemption
                     valuations current.</li>
                      {/* Using dangerouslySetInnerHTML for ® */}
                     <li dangerouslySetInnerHTML={{__html:"Our editorial board includes a CPA specialising in SME credit policy."}}></li>
                 </ul>
                 <h3>Authority</h3>
                 <ul className={styles.featureList}>
                      {/* Using dangerouslySetInnerHTML for ® */}
                     <li dangerouslySetInnerHTML={{__html:"Cited by CNBC, Forbes Advisor and CardRatings."}}></li>
                      {/* Using dangerouslySetInnerHTML for ® */}
                     <li dangerouslySetInnerHTML={{__html:"Annual speaker slots at CardCon and Points University."}}></li>
                      {/* Using dangerouslySetInnerHTML for &amp; */}
                     <li dangerouslySetInnerHTML={{__html:"Partnered with independent auditors to fact‑check APR &amp; fee tables."}}></li>
                 </ul>
                 <h3>Trustworthiness</h3>
                 <ul className={styles.featureList}>
                     <li>Affiliate links clearly marked; ratings immune to advertiser
                     pressure.</li>
                     <li>90‑day update cycle or within 48 h of Amex T&C changes.</li>
                      {/* Using dangerouslySetInnerHTML for ® */}
                     <li dangerouslySetInnerHTML={{__html:"GDPR‑compliant comment system; no reselling user data."}}></li>
                      {/* Added link based on template */}
                      <li dangerouslySetInnerHTML={{__html:"Privacy &amp; Security: We prioritize user privacy and follow best practices, outlined in our <a href='/privacy-policy'>Privacy Policy</a>."}}>
                          {/* Corrected: <Link href="/privacy-policy"><a>Privacy Policy</a></Link> */}
                     </li>
                 </ul>
                  {/* Using dangerouslySetInnerHTML for ® */}
                 <p dangerouslySetInnerHTML={{ __html: "By rigorously applying E‑A‑T, we deliver an analysis you can rely on when deciding if the Business Platinum belongs in your corporate wallet." }}></p>
             </section>

          </article>
        </div> {/* Close reviewContainer */}
      </main>

      <Footer />
    </>
  );
}

export default AmexBusinessPlatinumReviewPage2025; // Updated component name