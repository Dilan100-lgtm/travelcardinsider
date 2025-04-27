// Example Path: pages/reviews/hsbc-premier-world-elite.js
// Or: pages/reviews/[slug].js (if using dynamic routing with 'hsbc-premier-world-elite' as slug)

// !!! WARNING: THIS FILE CONTAINS PLACEHOLDER DATA/URLs/DIMENSIONS !!!
// !!! Rates/Fees link in source pointed to HSBC UK - VERIFY/REPLACE link below !!!
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
  cardName: 'HSBC Premier World Elite Mastercard®',
  title: 'HSBC Premier World Elite Mastercard® – In-Depth 2025 Review',
  description: 'A comprehensive 2000-word review of the HSBC Premier World Elite Mastercard®. Explore 3X travel, 2X dining/entertainment, no foreign fees, advanced usage tips, synergy with HSBC Premier, disclaimers, and more for 2025.', // From meta description
  keywords: 'HSBC, Premier World Elite, Mastercard, travel rewards, no foreign fees, lounge access, 2025 updates',
  author: 'TravelCardInsider', // *** REPLACE with your actual author/site name ***
  imageUrl: '/14785-hsbc-world-elite-credit-card-hex-1600x900.jpg', // *** VERIFY PATH in /public ***
  ratingValue: 8.2, // From HSBC HTML
  applyLink: 'https://www.us.hsbc.com/credit-cards/products/elite/', // *** REPLACE with actual HSBC APPLY URL ***
  // !!! WARNING: Source link points to HSBC UK. VERIFY/REPLACE with correct link for your audience !!!
  ratesLink: 'https://www.hsbc.co.uk/credit-cards/products/premier-world-elite/', // *** VERIFY/REPLACE LINK ***
  // Image dimensions (MUST BE ACCURATE for next/image) - Scaled from filename
  imageWidth: 640, // *** REPLACE with desired display width *** (Scaled Placeholder)
  imageHeight: 360, // *** REPLACE with desired display height *** (Scaled Placeholder)
};

// --- Rating Tooltip Content (Customize if needed for HSBC) ---
const ratingCriteria = [ // *** VERIFY/CUSTOMIZE these criteria for HSBC Rating ***
    'Travel Rewards Rate (3x)',
    'Dining/Entertainment Rewards (2x)',
    'LoungeKey™ Access',
    '$100 Annual Travel Credit',
    'Annual Fee ($395) & Premier Requirement'
];

function HSBCPremierWorldEliteReviewPage() {
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
  // !!! VERIFY all URLs, counts, and details FOR HSBC PREMIER WORLD ELITE !!!
  const siteUrl = "https://www.travelcardinsider.com"; // *** REPLACE with your actual site URL ***
  const pageUrl = `${siteUrl}/reviews/hsbc-premier-world-elite`; // *** REPLACE with your actual page URL ***
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "HSBC Premier World Elite Mastercard®",
    "image": `${siteUrl}${reviewData.imageUrl}`, // *** Assuming imageUrl starts with / ***
    "description": "A premium travel card offering 3X on travel, 2X on dining/entertainment, no foreign transaction fees, annual travel credit, and airport lounge access for HSBC Premier clients.", // Adjusted description
    "brand": {
      "@type": "Brand",
      "name": "HSBC"
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
      "ratingCount": 480, // *** REPLACE with actual or estimated count ***
      "reviewCount": 480  // *** REPLACE with actual or estimated count ***
    },
    "offers": {
      "@type": "Offer",
      "url": reviewData.applyLink.startsWith('http') ? reviewData.applyLink : `${siteUrl}${reviewData.applyLink}`, // *** Ensure full APPLY URL ***
      "priceCurrency": "USD",
      "price": "395", // Annual Fee for HSBC Premier WE
      "availability": "https://schema.org/InStock", // May require qualification status
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

      <Header />

      <main>
        {/* Spacing for fixed header */}
        <div style={{ marginTop: '5rem' }}></div>

        {/* Review Container using CSS Module */}
        <div className={styles.reviewContainer}>
          <article> {/* Wrap main content in article */}
            {/* ============= REVIEW HEADER ============= */}
            <header className={styles.reviewHeader}>
              {/* Using dangerouslySetInnerHTML for ® */}
              <h1 dangerouslySetInnerHTML={{ __html: "HSBC Premier World Elite Mastercard® – In-Depth 2025 Review"}}></h1>

              {/* Section 1 Content (Part of Header Structure in Template) */}
              <section id="section-1">
                 {/* Using dangerouslySetInnerHTML for ® & ™ */}
                <div className={styles.intro}>
                   <p dangerouslySetInnerHTML={{ __html:"The <strong>HSBC Premier World Elite Mastercard®</strong> is a <b>premium travel rewards card</b> tailored for HSBC Premier clients, offering <b>no foreign transaction fees</b>, <b>3X points on travel</b>, <b>2X on dining and entertainment</b>, and a variety of <b>travel perks</b> like lounge access via LoungeKey™. With a <b>$395 annual fee</b>, it ranks in the mid-tier premium range—below some $495+ cards yet more exclusive than mainstream no-fee solutions. This review covers 20 sections of disclaimers, synergy tips, disclaimers, competitor analysis, and whether the World Elite suits your 2025 travel game plan. If you want to <b>maximize points on travel/dining</b>, enjoy an annual travel credit, and handle global spending seamlessly, read on."}}></p>
                </div>

                {/* Image Container */}
                <div className={styles.cardImageContainer}>
                  {/* Corrected class name */}
                   <Image
                     src={reviewData.imageUrl}
                     alt={"HSBC Premier World Elite Mastercard®"}
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
                    <i>A strong mid-tier premium card with 3X on travel, 2X on dining/entertainment, a $100 annual travel credit, and no foreign fees—ideal for HSBC Premier clients wanting global perks.</i>
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
                                <td data-label="Details">$395</td>
                            </tr>
                             {/* Using dangerouslySetInnerHTML for ® */}
                            <tr dangerouslySetInnerHTML={{__html:'<td data-label="Feature">APR Range</td><td data-label="Details">19.74% – 27.74% Variable</td>'}}></tr>
                            <tr>
                                <td data-label="Feature">Sign-Up Bonus</td>
                                <td data-label="Details">~50,000 points after spending $4,000 in 3 months (varies, check current)</td>
                            </tr>
                             {/* Using dangerouslySetInnerHTML for ® */}
                            <tr dangerouslySetInnerHTML={{__html:'<td data-label="Feature">Rewards Rate</td><td data-label="Details">3x on travel, 2x dining/entertainment, 1x everything else</td>'}}></tr>
                            <tr>
                                <td data-label="Feature">Foreign Transaction Fee</td>
                                <td data-label="Details">None</td>
                            </tr>
                             {/* Using dangerouslySetInnerHTML for ® */}
                            <tr dangerouslySetInnerHTML={{__html:'<td data-label="Feature">Annual Travel Credit</td><td data-label="Details">$100 credit on travel bookings</td>'}}></tr>
                            {/* Using dangerouslySetInnerHTML for ™ */}
                            <tr dangerouslySetInnerHTML={{__html:'<td data-label="Feature">Lounge Access</td><td data-label="Details">LoungeKey™ membership (unlimited visits for cardholder)</td>'}}></tr>
                             {/* Using dangerouslySetInnerHTML for ® */}
                            <tr dangerouslySetInnerHTML={{__html:'<td data-label="Feature">HSBC Premier Requirement</td><td data-label="Details">Must maintain certain deposit/balance relationship to qualify</td>'}}></tr>
                        </tbody>
                    </table>
                </div>
            </section>

            {/* CTA Section */}
            <section id="cta" className={styles.ctaSection}>
                {/* Using dangerouslySetInnerHTML for ® */}
                <h2 dangerouslySetInnerHTML={{__html:"Get the <b>HSBC Premier World Elite Mastercard®</b> Today!"}}></h2>
                <div className={styles.ctaButtons}>
                    <a href={reviewData.applyLink} className={`${styles.btn} ${styles.btnApply}`} title="From card issuer's secure site" target="_blank" rel="noopener noreferrer sponsored">Apply Now</a>
                    {/* Using dangerouslySetInnerHTML for &amp; */}
                     {/* !!! WARNING: Rates link points to HSBC UK. VERIFY/REPLACE! !!! */}
                    <a href={reviewData.ratesLink} className={`${styles.btn} ${styles.btnRates}`} target="_blank" rel="noopener noreferrer sponsored" dangerouslySetInnerHTML={{__html:"See Rates &amp; Fees"}}></a>
                </div>
            </section>

             {/* Section 3: Card Overview & Positioning */}
             <section id="section-3" className={styles.reviewSection}>
                <h2 dangerouslySetInnerHTML={{ __html:"Card Overview &amp; Key Positioning"}}></h2>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{ __html:"The <strong>HSBC Premier World Elite Mastercard®</strong> is exclusive to <b>HSBC Premier</b> customers. Typically, that means maintaining a certain deposit or mortgage relationship with HSBC (requirements vary by region, e.g., $75k+ across accounts). This card aims at <b>globally mobile</b> individuals who want <b>no foreign fees</b>, decent multipliers (3x on travel, 2x on dining/entertainment), a <b>$395 annual fee</b> that’s somewhat more moderate than some $550+ competitor premium cards. You also get <b>LoungeKey lounge access</b> with unlimited visits, plus a <b>$100 annual travel credit</b>. If you do a lot of <b>international travel</b>, prefer HSBC’s global banking footprint, and want a balanced mid-tier premium solution, the Premier World Elite might be the sweet spot for 2025."}}></p>
            </section>

             {/* Section 4: Reward Structure */}
             <section id="section-4" className={styles.reviewSection}>
                 <h2>Reward Structure</h2>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{ __html:"The <b>HSBC Premier World Elite</b> uses a tiered system:"}}></p>
                <ul className={styles.featureList}>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>3X points on travel:</strong> flights, hotels, car rentals, possibly rideshares—verify merchant codes."}}></li>
                     {/* Using dangerouslySetInnerHTML for &amp; */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>2X points on dining and entertainment:</strong> includes restaurants, bars, possibly streaming services or shows. Check T&amp;Cs if they code as entertainment."}}></li>
                    <li><strong>1X on other purchases:</strong> a standard base rate for non-bonus categories.</li>
                </ul>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{ __html:"Points typically yield around <b>1¢ each</b> when redeemed for travel or statement credits in the HSBC Rewards system, though that can fluctuate. If you focus on maximizing the 3X/2X categories, your effective return can surpass 2–3% on those segments, especially if you can combine it with certain promo rates or transfer partners. The card doesn’t have the broadest range of transfer partners, but it has some (e.g., British Airways, Singapore KrisFlyer in certain markets). This can net above 1¢/point if you find sweet spots. But if you redeem purely for statement credits, assume ~1¢ for each point."}}></p>
            </section>

             {/* Section 5: Sign-Up Bonus & Value */}
             <section id="section-5" className={styles.reviewSection}>
                 <h2 dangerouslySetInnerHTML={{ __html:"Sign-Up Bonus &amp; Value"}}></h2>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{ __html:"The card often features a sign-up bonus of <b>50,000 HSBC Rewards points</b> after, say, $4,000 in the first 3 months (terms can vary). That’s worth around $500 toward travel or statement credits if you redeem at ~1¢ each. Check official offers for any seasonal increases (some might go up to 75k points). A 50k or 75k bonus can offset the $395 fee in year one. Some competitor premium cards offer bigger 80k–100k bonuses, but usually come with higher fees or more brand restrictions. If you’re already an <b>HSBC Premier</b> client, the synergy may be worth it. Evaluate how easy it is to meet the minimum spend (like $4k in 3 months)."}}></p>
            </section>

             {/* Section 6: LoungeKey Access & Travel Perks */}
             <section id="section-6" className={styles.reviewSection}>
                <h2 dangerouslySetInnerHTML={{ __html:"LoungeKey Access &amp; Travel Perks"}}></h2>
                 {/* Using dangerouslySetInnerHTML for ® & ™ */}
                <p dangerouslySetInnerHTML={{ __html:"The <b>HSBC Premier World Elite</b> offers membership to <b>LoungeKey™</b>:"}}></p>
                <ul className={styles.featureList}>
                    <li><strong>Unlimited lounge visits</strong> for the primary cardholder at 1,100+ airport lounges worldwide.
                    Typically you just show your card, and the lounge system verifies it.
                    </li>
                    {/* Using dangerouslySetInnerHTML for &amp; */}
                    <li dangerouslySetInnerHTML={{__html:"Guests might incur a fee (~$27–$32) or a set number of free guest passes—confirm your region’s T&amp;Cs."}}></li>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"Unlike some Priority Pass versions, LoungeKey doesn’t typically include airport restaurant credits. It focuses on lounge entry."}}></li>
                </ul>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{ __html:"You also get a <b>$100 annual travel credit</b> (sometimes labeled as “annual fee rebate” or partial offset for travel purchases), plus coverage like trip delay/cancellation insurance, baggage delay, and auto rental collision coverage. If you frequently visit airports with LoungeKey-participating lounges, that alone can offset paying for daily lounge passes or airport meals."}}></p>
            </section>

             {/* Section 7: Annual Fee & HSBC Premier Requirement */}
             <section id="section-7" className={styles.reviewSection}>
                <h2 dangerouslySetInnerHTML={{ __html:"Annual Fee &amp; HSBC Premier Requirement"}}></h2>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{ __html:"The <b>$395</b> annual fee is somewhat lower than super-premium cards (Chase Sapphire Reserve® at $550, Amex Platinum® at $695), but still a chunk. However, to get this card, you generally must qualify for <b>HSBC Premier</b>:"}}></p>
                <ul className={styles.featureList}>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"Maintain <b>$75k+</b> in combined personal/business deposits or investment balances with HSBC, or"}}></li>
                    <li>Have a certain direct deposit minimum monthly, or</li>
                    <li>Hold an <b>HSBC mortgage</b> above a certain threshold, or</li>
                    <li>Meet some other local banking relationship requirement (varies by country).
                    </li>
                </ul>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{ __html:"That can be a barrier unless you’re already an HSBC client or plan to become one. If you do maintain that relationship, you might get extra banking benefits, waived checking fees, or global support. So the card can be a nice perk of your existing HSBC footprint. Otherwise, it might be more complicated to open if you don’t want to shift your finances to HSBC."}}></p>
            </section>

             {/* Section 8: No Foreign Transaction Fees */}
             <section id="section-8" className={styles.reviewSection}>
                <h2>No Foreign Transaction Fees – A Big Draw</h2>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{ __html:"<b>HSBC Premier World Elite</b> has <b>0% foreign transaction fees</b>. This is crucial for a card aimed at globally mobile customers. With 3x on travel, 2x on dining, you can seamlessly pay for foreign hotels, flights, or restaurants without that ~3% penalty many other cards impose. Combined with LoungeKey, it fits well for cross-border usage. If you frequently travel or live abroad part-time, the savings can add up. Many other HSBC credit cards also have minimal or no FTF, but the World Elite is the premium version with higher multipliers and lounge membership."}}></p>
            </section>

            {/* Section 9: 2025 Updates & Potential Changes */}
             <section id="section-9" className={styles.reviewSection}>
                 <h2 dangerouslySetInnerHTML={{ __html:"2025 Updates &amp; Potential Changes"}}></h2>
                <ol className={styles.numberedList}>
                    <li><strong>Possible Annual Fee Adjustments:</strong>
                    $395 might rise to $495 if the benefits expand, or remain if the card remains stable.
                    HSBC sometimes rebrands or changes packaging; watch for announcements.</li>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Shift in Lounge Provider or Guest Policy:</strong> LoungeKey™ might alter guest fees or add more lounges in 2025. Usually, unlimited access for the primary cardholder stays, but check changes for guests."}}></li>
                    <li><strong>Enhanced Sign-Up Offers:</strong>
                    They might push it to 60k–80k points occasionally.
                    Evaluate if that appears for a limited time, which can significantly offset the fee the first year.</li>
                    <li><strong>HSBC Rewards Partner Changes:</strong>
                    Transfer partners for airline/hotels might expand or shrink.
                    This can affect the advanced redemption value.
                    </li>
                </ol>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{ __html:"Typically, HSBC’s Premier World Elite has stayed consistent, but each year or two might see minor tweaks or new transfer relationships. Keep an eye on official channels if you plan to apply or renew in 2025."}}></p>
            </section>

            {/* Section 10: Real-Life Example Table */}
             <section id="section-10" className={styles.reviewSection}>
                <h2 dangerouslySetInnerHTML={{ __html:"Real-Life Example: Annual Spend &amp; Points"}}></h2>
                <p>
                    Suppose your annual spending looks like this:
                </p>
                <ul className={styles.featureList}>
                    <li>$6,000 on travel (3x {'=>'} 18,000 points)</li>
                     {/* Using dangerouslySetInnerHTML for &amp; */}
                    <li dangerouslySetInnerHTML={{__html:"$4,000 on dining + entertainment (2x &amp;gt; 8,000 points)"}}></li>
                    <li>$10,000 on everything else (1x {'=>'} 10,000 points)</li>
                </ul>
                <p>That yields <b>36,000 points</b> total. If 1 point ≈ 1¢ in redemption value, that’s about $360 in travel statement credits. Then you also use your $100 annual travel credit, so total value could be $460. Let’s see a simplified table:</p>

                <div className={styles.tableContainer}>
                     <table className={styles.statsTable}>
                        <thead>
                            <tr>
                                <th>Category</th>
                                <th>Annual Spend</th>
                                <th>Earning Rate</th>
                                <th>Total Points</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td data-label="Category">Travel</td>
                                <td data-label="Annual Spend">$6,000</td>
                                <td data-label="Earning Rate">3X</td>
                                <td data-label="Total Points">18,000</td>
                            </tr>
                             {/* Using dangerouslySetInnerHTML for &amp; */}
                            <tr dangerouslySetInnerHTML={{__html:'<td data-label="Category">Dining + Entertainment</td><td data-label="Annual Spend">$4,000</td><td data-label="Earning Rate">2X</td><td data-label="Total Points">8,000</td>'}}></tr>
                            <tr>
                                <td data-label="Category">Other Purchases</td>
                                <td data-label="Annual Spend">$10,000</td>
                                <td data-label="Earning Rate">1X</td>
                                <td data-label="Total Points">10,000</td>
                            </tr>
                             <tr style={{fontWeight: 'bold', borderTop: '2px solid #dee2e6'}}>
                                <th>Total</th>
                                <th>$20,000</th>
                                <th>—</th>
                                <th>36,000 Points</th>
                            </tr>
                        </tbody>
                    </table>
                </div>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{ __html:"If 36k points = $360 in travel, plus your $100 annual credit, you get $460 in direct offset. Subtract the $395 fee => net +$65 ignoring intangible lounge usage. If you take advantage of LoungeKey™ multiple times or the sign-up bonus, that might further outvalue the cost. But competitor cards might yield more if they have stronger multipliers or bigger statement credits. The World Elite stands well for someone with existing HSBC ties who wants a mid-tier premium card."}}></p>
            </section>

            {/* Section 11: Competitor Analysis */}
             <section id="section-11" className={styles.reviewSection}>
                <h2>Competitor Analysis</h2>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{ __html:"Let’s compare the HSBC Premier World Elite with some similar or higher-tier cards:"}}></p>
                 <div className={styles.tableContainer}>
                     <table className={styles.statsTable}>
                        <thead>
                            <tr>
                                <th>Card</th>
                                <th>Annual Fee</th>
                                <th>Lounge Access</th>
                                <th>Highlights</th>
                            </tr>
                        </thead>
                        <tbody>
                             {/* Using dangerouslySetInnerHTML for ® & ™ */}
                            <tr dangerouslySetInnerHTML={{__html:'<td data-label="Card">HSBC Premier World Elite</td><td data-label="Annual Fee">$395</td><td data-label="Lounge Access">LoungeKey™ (unlimited visits, cardholder only or + guest fee)</td><td data-label="Highlights">3x travel, 2x dining/entertainment, $100 travel credit, must qualify for Premier</td>'}}></tr>
                             {/* Using dangerouslySetInnerHTML for ® */}
                            <tr dangerouslySetInnerHTML={{__html:'<td data-label="Card">Capital One Venture X®</td><td data-label="Annual Fee">$395</td><td data-label="Lounge Access">Priority Pass + Cap One Lounges</td><td data-label="Highlights">$300 travel credit, 10k anniversary miles, 2x on everything, strong sign-up</td>'}}></tr>
                             {/* Using dangerouslySetInnerHTML for ® */}
                            <tr dangerouslySetInnerHTML={{__html:'<td data-label="Card">Chase Sapphire Reserve®</td><td data-label="Annual Fee">$550</td><td data-label="Lounge Access">Priority Pass (including restaurants)</td><td data-label="Highlights">$300 travel credit, 3x travel/dining, big sign-up bonus, strong redemption portal</td>'}}></tr>
                            {/* Using dangerouslySetInnerHTML for ® &amp; */}
                            <tr dangerouslySetInnerHTML={{__html:'<td data-label="Card">U.S. Bank Altitude® Reserve</td><td data-label="Annual Fee">$400</td><td data-label="Lounge Access">Priority Pass (4 visits/year?), subject to T&amp;Cs</td><td data-label="Highlights">$325 annual travel credit, 3x on travel/dining, 1.5x mobile wallet approach</td>'}}></tr>
                             {/* Using dangerouslySetInnerHTML for ® */}
                            <tr dangerouslySetInnerHTML={{__html:'<td data-label="Card">Amex Platinum®</td><td data-label="Annual Fee">$695</td><td data-label="Lounge Access">Amex Centurion, Priority Pass (lounges only), Delta (when flying Delta)</td><td data-label="Highlights">5x flights/hotels, large sign-up bonus, many credits but complex structure</td>'}}></tr>
                        </tbody>
                    </table>
                </div>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{ __html:"The <b>HSBC Premier World Elite</b> lines up with Venture X or Altitude Reserve in the $395–$400 range, each offering robust lounge access or travel credits. Venture X has a bigger sign-up bonus and a $300 credit plus 10,000 miles annually. The main difference: you must be an <b>HSBC Premier</b> client. If that’s not an obstacle, the World Elite can be a decent pick, especially for the 3x/2x categories. If you want the best lounge coverage, or the biggest net travel credit, you might find other cards more rewarding. But for an existing HSBC customer wanting synergy with your global banking, it’s a strong contender."}}></p>
            </section>

            {/* Section 12: Additional Card Benefits & Insurance */}
             <section id="section-12" className={styles.reviewSection}>
                <h2 dangerouslySetInnerHTML={{ __html:"Additional Card Benefits &amp; Insurance"}}></h2>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{ __html:"The <b>HSBC Premier World Elite</b> typically includes:"}}></p>
                <ul className={styles.featureList}>
                    <li><strong>Cell Phone Protection:</strong> up to a certain amount if you pay your phone bill with the card (region dependent).</li>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Auto Rental Collision Damage Waiver (CDW):</strong> for rentals charged to the card (secondary or primary based on your location). Read T&amp;C for specifics."}}></li>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Trip Cancellation/Interruption Coverage:</strong> partial coverage if your trip is canceled or cut short by covered events."}}></li>
                     {/* Using dangerouslySetInnerHTML for &amp; */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Travel Accident &amp; Baggage Delay Insurance:</strong> coverage for lost/delayed baggage, plus accidental death or dismemberment insurance on travel."}}></li>
                     {/* Using dangerouslySetInnerHTML for &amp; */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Extended Warranty &amp; Purchase Protection:</strong> certain items purchased may get coverage if damaged or stolen or an extension on manufacturer warranties (T&amp;Cs apply)."}}></li>
                     {/* Using dangerouslySetInnerHTML for &amp; */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Travel &amp; Emergency Assistance:</strong> 24/7 hotline for emergencies, though actual cost of service is not always covered, just the coordination."}}></li>
                </ul>
                <p>
                    These are standard for premium cards.
                    If you rely heavily on travel insurance or advanced coverage, read the fine print: each card has coverage limits, disclaimers, or region differences.
                    But overall, the World Elite’s coverage is robust enough for typical mishaps, complementing your 3x/2x earning and lounge membership.
                </p>
            </section>

            {/* Section 13: APR & Carrying a Balance */}
             <section id="section-13" className={styles.reviewSection}>
                <h2 dangerouslySetInnerHTML={{ __html:"APR &amp; Carrying a Balance"}}></h2>
                <p>
                    The variable APR typically ranges around <b>19.74%–27.74%</b>, depending on creditworthiness.
                    Like most premium cards, it’s unwise to revolve large balances since interest charges will overshadow the reward value.
                    If you occasionally carry a balance, consider that your net effective gain from 3x or 2x might vanish under high interest.
                    Also note that the card is best used as a pay-in-full option for travelers, especially given the no foreign fee advantage.
                    If you need 0% intro on purchases or a balance transfer, this might not be the best choice.
                    Compare with other HSBC or competing cards that have intro APR deals if that is a priority.
                </p>
            </section>

             {/* Section 14: Potential Downsides */}
             <section id="section-14" className={styles.reviewSection}>
                <h2>Potential Downsides</h2>
                <ul className={styles.featureList}>
                    <li><strong>$395 Annual Fee:</strong> Not extremely high but still significant. If you can’t maximize the travel credit, lounge visits, or 3x/2x categories, it might not pay off.</li>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>HSBC Premier Requirement:</strong> You must meet certain banking relationships or deposit thresholds, which might be a big obstacle if you’re not interested in shifting finances to HSBC."}}></li>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>No Large Multipliers on Groceries or Gas:</strong> 3x travel, 2x dining/entertainment is good, but other categories default to 1x. Some competitor cards cover groceries or other daily categories more robustly."}}></li>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Limited Transfer Partners (region-specific):</strong> HSBC’s redemption might not be as broad as Amex/Chase. You can redeem for statement credit at ~1¢ per point, or sometimes transfer to airlines, but the partner list is shorter."}}></li>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Competition from Venture X® or Altitude® Reserve:</strong> Also $395–$400 fee range, with arguably bigger sign-up bonuses or monthly/annual perks. If you’re not loyal to HSBC, you might find them more appealing."}}></li>
                </ul>
            </section>

            {/* Section 15: Advanced Tips & Strategies */}
            <section id="section-15" className={styles.reviewSection}>
                 <h2 dangerouslySetInnerHTML={{ __html:"Advanced Tips &amp; Strategies"}}></h2>
                <ol className={styles.numberedList}>
                    <li><strong>Pair with Another Card for Other Categories:</strong> If you want a synergy for groceries or gas, keep a 4% or 5% rotating card. Use HSBC for travel/dining while your other card covers the rest. Redeem your HSBC points for travel or airline transfers to maximize the 3x/2x advantage.</li>
                    <li><strong>Explore Potential Transfer Partners:</strong> Some markets let you transfer HSBC points to British Airways Avios, KrisFlyer, or other programs at ~1:1 ratio. If you find a sweet spot flight, you can exceed 1¢ per point. Check local HSBC site for details.</li>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Use the $100 Travel Credit Every Year:</strong> If you skip it, you effectively pay $395 with no offset. Apply the credit to flight/hotel bookings or a travel package. Don’t forget it."}}></li>
                     {/* Using dangerouslySetInnerHTML for ™ */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Leverage LoungeKey™ Extensively:</strong> If you do multiple lounge visits annually, you might “save” $30–$50 each time vs. paying for day passes or airport meals. That can help recoup the annual fee quickly."}}></li>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Sync with HSBC Premier Perks:</strong> Being a Premier client might yield better foreign exchange rates, waived ATM fees, or global account linking. The credit card can tie into that ecosystem for a smoother global banking experience."}}></li>
                </ol>
            </section>

            {/* Section 16: Another Real-Life Example */}
             <section id="section-16" className={styles.reviewSection}>
                <h2>Another Real-Life Example</h2>
                <p>
                    Suppose you spend:
                </p>
                <ul className={styles.featureList}>
                    <li>$8,000 on travel (3x &gt; 24,000 points)</li>
                     {/* Using dangerouslySetInnerHTML for &amp; */}
                    <li dangerouslySetInnerHTML={{__html:"$5,000 on dining/entertainment (2x &gt; 10,000 points)"}}></li>
                    <li>$7,000 on general (1x &gt; 7,000 points)</li>
                </ul>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{ __html:"That’s <b>41,000 points</b> total, ~$410 in statement credit or more if transferring to an airline at a favorable ratio. Then factor in:"}}></p>
                <ul className={styles.featureList}>
                    <li><b>$100 travel credit</b> &gt; total $510 offset</li>
                    <li><b>Annual fee $395</b> &gt; net +$115 if you purely do statement credits (plus lounge usage).
                    </li>
                </ul>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{ __html:"If you also snag a sign-up bonus of 50k points, that’s an extra $500 in year one. Combined with your net offset, you could easily see $600–$1,000 in total value above the fee, ignoring intangible lounge comfort. This can beat out many competitor mid-tier cards, provided you already qualify for HSBC Premier and want a simpler “3-2-1” approach with no foreign fees."}}></p>
            </section>

            {/* Section 17: Synergy with HSBC Premier Accounts */}
            <section id="section-17" className={styles.reviewSection}>
                <h2>Synergy with HSBC Premier Accounts</h2>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{ __html:"Being an <b>HSBC Premier</b> customer might grant additional perks:"}}></p>
                <ul className={styles.featureList}>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Waived monthly checking fees</strong> or special rates on mortgages, savings, or personal loans."}}></li>
                    <li><strong>Global Transfers:</strong> If you hold accounts in multiple countries, you can easily move funds between them. The Premier card is recognized globally, reinforcing the idea of an internationally mobile lifestyle.
                    </li>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Potential Relationship Bonuses:</strong> Some markets offer bonus points or lower interest rates for Premier clients with large deposit/investment relationships."}}></li>
                </ul>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{ __html:"If you frequently do cross-border banking or want a single institution for your credit card + accounts, the synergy is strong. If you’re not an HSBC loyalist or can’t meet the deposit threshold, you might consider other premium travel cards that don’t require a specific banking relationship."}}></p>
            </section>

            {/* Section 18: Redemption, Partners, and Tips */}
            <section id="section-18" className={styles.reviewSection}>
                 <h2 dangerouslySetInnerHTML={{ __html:"Redemption, Partners, and Tips"}}></h2>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{ __html:"With <b>HSBC Rewards</b>, you can:"}}></p>
                <ul className={styles.featureList}>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Redeem points for statement credit or travel portal bookings</strong> at ~1¢ each. Possibly more if you find deals."}}></li>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Transfer to certain airline/hotel partners</strong> if your region supports it. E.g., British Airways Avios, Singapore KrisFlyer, maybe others. Ratios can vary (like 1:1 or 1:0.8). If you find a sweet-spot redemption, you might surpass 1¢/point."}}></li>
                    <li><b>Gift cards, merchandise</b>: Typically yield lower than 1¢.
                    The best approach is statement credit, direct travel booking, or partner transfers.
                    </li>
                </ul>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{ __html:"If you’re comfortable with airline miles, transferring your 3x or 2x earnings can push your real returns above ~3%. But confirm partner availability and ratio. For straightforward usage, taking statement credits or booking in HSBC’s travel portal is easy, netting about 1¢. If you’re chasing advanced sweet spots, do some research on the airline/hotel you prefer."}}></p>
            </section>

            {/* Section 19: Who Should Get the Card? */}
             <section id="section-19" className={styles.reviewSection}>
                 <h2 dangerouslySetInnerHTML={{ __html:"Who Should Get the HSBC Premier World Elite Mastercard®?"}}></h2>
                 {/* Using dangerouslySetInnerHTML for &amp; ® ™ */}
                <div className={styles.prosCons}>
                    <div className={styles.pros}>
                         <h3>Ideal For:</h3>
                         <ul className={styles.featureList}>
                             <li dangerouslySetInnerHTML={{__html:"<b>Existing HSBC Premier</b> clients seeking a cohesive global banking + credit card solution."}}></li>
                             <li dangerouslySetInnerHTML={{__html:"Frequent travelers wanting <b>3x on travel</b> and <b>2x dining</b> with no foreign fees, plus lounge access via LoungeKey™."}}></li>
                             <li>People who appreciate a <b>moderate $395</b> fee vs. $550–$700 in other top-tier cards, but still want premium features.</li>
                             <li>Anyone who can regularly exploit the <b>$100 annual travel credit</b> and 3x/2x categories enough to offset the fee comfortably.</li>
                         </ul>
                     </div>
                     <div className={styles.cons}>
                         <h3>Not So Great If:</h3>
                         <ul className={styles.featureList}>
                             <li>You <b>don’t qualify</b> for HSBC Premier or prefer not to keep $75k in assets or meet monthly direct deposit requirements.</li>
                              {/* Using dangerouslySetInnerHTML for ® */}
                             <li dangerouslySetInnerHTML={{__html:"You want a <b>massive sign-up bonus</b> or bigger statement credits like $300–$400, which some competitor premium cards provide."}}></li>
                             <li>You desire <b>4x–5x</b> multipliers in key categories (like Amex Gold or certain premium cards) that can exceed the 3x cap.</li>
                              {/* Using dangerouslySetInnerHTML for ® */}
                             <li dangerouslySetInnerHTML={{__html:"You want broader lounge coverage with restaurant credits (some Priority Pass offerings) or unique lounge networks (like Centurion Lounges with Amex)."}}></li>
                         </ul>
                     </div>
                 </div>
             </section>

             {/* Section 20: Final Thoughts & Disclaimer */}
             <section id="section-20" className={styles.reviewSection}>
                 <h2 dangerouslySetInnerHTML={{ __html:"Final Thoughts &amp; Disclaimer"}}></h2>
                 {/* Using dangerouslySetInnerHTML for &amp; ® ™ */}
                <p dangerouslySetInnerHTML={{ __html:"The <b>HSBC Premier World Elite Mastercard®</b> provides a <b>compelling</b> mid-premium solution for globally minded travelers who already bank with HSBC. The <b>3x on travel, 2x on dining/entertainment</b>, and <b>no foreign fees</b> match well for frequent flyers or people living abroad. The $395 fee is partially offset by a <b>$100 travel credit</b>, and the <b>LoungeKey™</b> membership gives unlimited lounge visits. If you’d prefer bigger sign-up bonuses or higher overall statement credits, competitor cards may outdo it. But if you want synergy with <b>HSBC Premier</b> and a simpler “3-2-1” rewards system, plus no foreign transaction fees, it’s a strong pick for 2025. Just ensure you meet the <b>HSBC Premier</b> requirement, regularly exploit the travel credit, and pay your balance in full to maximize gains."}}></p>
                 {/* Using dangerouslySetInnerHTML for &amp; ® */}
                <p dangerouslySetInnerHTML={{ __html:"<strong>Disclaimer:</strong> Terms, rates, and sign-up bonuses can change. Always confirm details with HSBC’s official site. We may earn affiliate commissions from certain links but remain editorially independent. Reward valuations are approximate; if you revolve a balance at ~19.74–27.74% APR, interest costs can outweigh your 3x or 2x gains. Evaluate your usage patterns, synergy with HSBC Premier, and travel frequency to decide if the Premier World Elite is right for you."}}></p>
            </section>

             {/* CTA Section */}
             <section id="cta" className={styles.ctaSection}>
                {/* Using dangerouslySetInnerHTML for ® */}
                <h2 dangerouslySetInnerHTML={{__html:"Get the <b>HSBC Premier World Elite Mastercard®</b> Today!"}}></h2>
                <div className={styles.ctaButtons}>
                    <a href={reviewData.applyLink} className={`${styles.btn} ${styles.btnApply}`} title="From card issuer's secure site" target="_blank" rel="noopener noreferrer sponsored">Apply Now</a>
                    {/* Using dangerouslySetInnerHTML for &amp; */}
                     {/* !!! WARNING: Rates link points to HSBC UK. VERIFY/REPLACE! !!! */}
                    <a href={reviewData.ratesLink} className={`${styles.btn} ${styles.btnRates}`} target="_blank" rel="noopener noreferrer sponsored" dangerouslySetInnerHTML={{__html:"See Rates &amp; Fees"}}></a>
                </div>
            </section>

             {/* E-A-T Section */}
             <section id="eat-expertise-authority-trustworthiness" className={`${styles.reviewSection} ${styles.eatSection}`}>
                 <h2 dangerouslySetInnerHTML={{ __html: "Our Commitment to E-A-T: Expertise, Authority &amp; Trustworthiness"}}></h2>
                 {/* Using E-A-T text adapted for HSBC Premier WE */}
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
                    <li dangerouslySetInnerHTML={{__html:"<strong>In-Depth Knowledge:</strong> Our team has years of experience with premium travel cards, including the unique requirements and benefits of the HSBC Premier World Elite Mastercard®."}}></li>
                    {/* Using dangerouslySetInnerHTML for &amp; */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Research &amp; Data Verification:</strong> We consult official HSBC sources, user experiences, and T&amp;Cs for up-to-date reward structures, fees, lounge access rules, and transfer partner lists."}}></li>
                </ul>
                <h3>2. Authority</h3>
                <ul className={styles.featureList}>
                    {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Well-Structured Content:</strong> This review details annual fees, synergy tips, disclaimers, competitor comparisons, and advanced redemption strategies for the HSBC Premier World Elite Mastercard®."}}></li>
                    <li><strong>Industry Recognition:</strong>
                    We’re regularly referenced by major finance/travel publications for comprehensive coverage and objective stances on premium cards.</li>
                </ul>
                <h3>3. Trustworthiness</h3>
                <ul className={styles.featureList}>
                    <li><strong>No Hidden Agenda:</strong> Although affiliate links may be present, they don’t shape our editorial viewpoint or final rating.</li>
                    {/* Using dangerouslySetInnerHTML for &amp; */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Accurate Disclaimers:</strong> We highlight potential restrictions (HSBC Premier membership), disclaim risk of changing T&amp;Cs, and encourage reading official HSBC documentation."}}></li>
                    <li><strong>Frequent Updates:</strong>
                    We revise content whenever sign-up bonuses, lounge policies, or annual fees shift, to keep you informed with the latest data.</li>
                     {/* Using dangerouslySetInnerHTML for &amp; */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Privacy &amp; Security:</strong> We adhere to best practices, outlined in our <a href='/privacy-policy'>Privacy Policy</a>."}}>
                        {/* Corrected Link */}
                        {/* <strong>Privacy &amp; Security:</strong> As per our <Link href="/privacy-policy"><a>Privacy Policy</a></Link>, we safeguard user data on our site responsibly, consistent with best practices. */}
                    </li>
                </ul>
                {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{ __html: "By adhering to these principles, we offer a reliable, honest view of the <strong>HSBC Premier World Elite Mastercard®</strong> for your 2025 travel and banking needs." }}></p>
            </section>

          </article>
        </div> {/* Close reviewContainer */}
      </main>

      <Footer />
    </>
  );
}

export default HSBCPremierWorldEliteReviewPage;