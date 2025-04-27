// Example Path: pages/reviews/citi-aadvantage-executive.js
// Or: pages/reviews/[slug].js (if using dynamic routing with 'citi-aadvantage-executive' as slug)

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
  cardName: 'Citi® / AAdvantage® Executive World Elite Mastercard®',
  title: 'Citi® / AAdvantage® Executive World Elite Mastercard® – In-Depth 2025 Review',
  description: 'A 2000-word review of the Citi® / AAdvantage® Executive World Elite Mastercard®, focusing on Admirals Club membership, 2025 updates, elite benefits, lounge guest policies, advanced usage tips, and synergy with American Airlines loyalty.',
  keywords: 'Citi, AAdvantage, American Airlines, credit card, lounge access, admirals club, 2025',
  author: 'TravelCardInsider', // *** REPLACE with your actual author/site name ***
  imageUrl: '/CardArt-8.webp', // *** VERIFY PATH in /public ***
  ratingValue: 8.6, // From Citi AA Exec HTML
  applyLink: 'https://creditcards.aa.com/credit-cards/citi-executive-card-american-airlines-direct/', // *** REPLACE with actual Exec APPLY URL ***
  ratesLink: 'https://creditcards.aa.com/credit-cards/citi-executive-card-american-airlines-direct/#pricing', // *** VERIFY URL ***
  // Image dimensions (MUST BE ACCURATE for next/image)
  imageWidth: 480, // *** REPLACE with actual image width *** (Example Placeholder)
  imageHeight: 304, // *** REPLACE with actual image height *** (Example Placeholder)
};

// --- Rating Tooltip Content (Customize if needed for Citi AA Exec) ---
const ratingCriteria = [ // *** VERIFY/CUSTOMIZE these criteria for Citi AA Exec Rating ***
    'Admirals Club® Membership Value',
    'Authorized User Lounge Access Perk',
    'Free Checked Bag Benefit',
    'Welcome Bonus Value',
    'Annual Fee ($595)',
];


function CitiAAdvantageExecutiveReviewPage() {
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
  // !!! VERIFY all URLs, counts, and details FOR CITI AA EXECUTIVE !!!
  const siteUrl = "https://www.travelcardinsider.com"; // *** REPLACE with your actual site URL ***
  const pageUrl = `${siteUrl}/reviews/citi-aadvantage-executive`; // *** REPLACE with your actual page URL ***
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Citi® / AAdvantage® Executive World Elite Mastercard®",
    "image": `${siteUrl}${reviewData.imageUrl}`, // *** Assuming imageUrl starts with / ***
    "description": "A top-tier co-branded American Airlines credit card offering Admirals Club membership, accelerated AAdvantage mile earning, elite perks, and robust travel protections.", // Adjusted description
    "brand": {
      "@type": "Brand",
      "name": "Citi" // Issuer
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
      "ratingCount": 430, // *** REPLACE with actual or estimated count ***
      "reviewCount": 430  // *** REPLACE with actual or estimated count ***
    },
    "offers": {
      "@type": "Offer",
      "url": reviewData.applyLink.startsWith('http') ? reviewData.applyLink : `${siteUrl}${reviewData.applyLink}`, // *** Ensure full APPLY URL ***
      "priceCurrency": "USD",
      "price": "595", // Annual Fee for Citi AA Executive
      "availability": "https://schema.org/InStock",
      "itemCondition": "https://schema.org/NewCondition"
    }
     // Consider adding "provider": { "@type": "Organization", "name": "American Airlines" }
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
              <h1 dangerouslySetInnerHTML={{ __html: "Citi® / AAdvantage® Executive World Elite Mastercard® – In-Depth 2025 Review" }}></h1>

              {/* Section 1 Content (Part of Header Structure in Template) */}
              <section id="section-1">
                <div className={styles.intro}>
                   {/* Using dangerouslySetInnerHTML for ® */}
                  <p dangerouslySetInnerHTML={{ __html: "The <strong>Citi® / AAdvantage® Executive World Elite Mastercard®</strong> is American Airlines’ premium co-branded product, delivering <strong>unlimited Admirals Club® lounge access</strong> for the primary cardholder plus authorized users, and a robust set of AAdvantage® perks. With a <strong>$595 annual fee</strong>, it targets frequent AA flyers who value lounge comfort, priority boarding, free checked bags, plus synergy with the airline’s loyalty program. This review spans 20 sections, from quick stats (including APR) to disclaimers, advanced usage tips, 2025 updates, and how this top-tier AA card compares to rival airline or general premium cards. If you’re all in on American, read on." }}></p>
                </div>

                {/* Image Container */}
                <div className={styles.cardImageContainer}>
                  {/* Class name adjusted */}
                   <Image
                     src={reviewData.imageUrl}
                      /* Using dangerouslySetInnerHTML for ® */
                     alt={"Citi® / AAdvantage® Executive World Elite Mastercard®"}
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
                            <p className={styles.tooltipIntro}>Our TCI rating system criteria including rewards, welcome bonus, annual fee, redemption flexibility, travel benefits, APR, foreign transaction fees, user experience, and other features.</p>
                            
                        </div>
                    )}
                  </span>

                  {/* STAR RATING */}
                   {/* Corrected: Apply rating value directly */}
                  <div className={styles.starRating} title={`Rated ${reviewData.ratingValue} out of 10 stars`} style={{ '--rating': `${reviewData.ratingValue * 10}%` }}>
                    <span>★★★★★</span>
                    <span className={styles.filledStars}>★★★★★</span>
                  </div>

                  <div className={styles.ratingDescription}>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <i dangerouslySetInnerHTML={{__html:"A high-end American Airlines card offering full Admirals Club membership, big AA perks, and authorized user lounge privileges—ideal for frequent flyers despite a $595 fee."}}></i>
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
                                <td data-label="Details">$595</td>
                            </tr>
                            <tr>
                                <td data-label="Feature">APR Range</td>
                                 {/* Using dangerouslySetInnerHTML for ® */}
                                <td data-label="Details" dangerouslySetInnerHTML={{__html:"21.24%–29.24% Variable"}}></td>
                            </tr>
                            <tr>
                                <td data-label="Feature">Sign-Up Bonus</td>
                                 {/* Using dangerouslySetInnerHTML for ® */}
                                <td data-label="Details" dangerouslySetInnerHTML={{__html:"Often ~50k–80k AAdvantage miles after $5k in 3 months"}}></td>
                            </tr>
                            <tr>
                                <td data-label="Feature">Rewards Rate</td>
                                <td data-label="Details">2x on AA purchases, 1x else (occasional 2x categories may appear)</td>
                            </tr>
                            <tr>
                                <td data-label="Feature">Lounge Access</td>
                                <td data-label="Details">Full Admirals Club membership (cardholder + immediate family or 2 guests), authorized users also get lounge access</td>
                            </tr>
                            <tr>
                                <td data-label="Feature">Bag/Boarding Benefits</td>
                                <td data-label="Details">First checked bag free, priority boarding, no foreign transaction fees</td>
                            </tr>
                            <tr>
                                <td data-label="Feature">Credit Score Needed</td>
                                <td data-label="Details">Typically Good–Excellent (700+)</td>
                            </tr>
                            <tr>
                                <td data-label="Feature">Mile Valuation</td>
                                <td data-label="Details">~1.3¢ each (varies by route/class), can be higher for premium awards</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

             {/* CTA Section */}
             <section id="cta" className={styles.ctaSection}>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <h2 dangerouslySetInnerHTML={{__html:"Get the <b>Citi® / AAdvantage® Executive World Elite Mastercard®</b> Card Today!"}}></h2>
                <div className={styles.ctaButtons}>
                    <a href={reviewData.applyLink} className={`${styles.btn} ${styles.btnApply}`} title="From card issuer's secure site" target="_blank" rel="noopener noreferrer sponsored">Apply Now</a>
                     {/* Using dangerouslySetInnerHTML for &amp; */}
                    <a href={reviewData.ratesLink} className={`${styles.btn} ${styles.btnRates}`} target="_blank" rel="noopener noreferrer sponsored" dangerouslySetInnerHTML={{__html:"See Rates &amp; Fees"}}></a>
                </div>
            </section>

            {/* Section 3: Card Overview & Positioning */}
             <section id="section-3" className={styles.reviewSection}>
                <h2 dangerouslySetInnerHTML={{ __html: "Card Overview &amp; Positioning" }}></h2>
                {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{ __html: "The <strong>Citi® / AAdvantage® Executive World Elite Mastercard®</strong> is American’s premium co-brand product from Citi, offering <strong>full Admirals Club® membership</strong>. This is not just a few day passes—it's unlimited lounge visits for you plus guests/kids. With a <strong>$595 annual fee</strong>, it competes with top-tier airline cards (like United Club Infinite or Delta Reserve). You’ll earn just <strong>2x miles</strong> on American purchases, <strong>1x</strong> on everything else. The real draw is the lounge membership plus <strong>authorized user</strong> lounge privileges: each AU also gets their own access, a unique perk that can offset the steep fee for families. Meanwhile, you get typical AA perks: first bag free, priority boarding, discounted in-flight purchases, etc. If you frequently fly American out of major hubs (DFW, MIA, CLT, etc.), the lounge membership alone can justify much of the cost in 2025’s environment." }}></p>
            </section>

            {/* Section 4: AAdvantage Earning & Category Rates */}
            <section id="section-4" className={styles.reviewSection}>
                 <h2 dangerouslySetInnerHTML={{ __html: "AAdvantage Earning &amp; Category Rates" }}></h2>
                <p>
                    The Executive card’s base structure is:
                </p>
                <ul className={styles.featureList}>
                    <li><strong>2x miles</strong> on American Airlines purchases (flights, seat fees, baggage, etc.)</li>
                    <li><strong>1x miles</strong> on all other spending</li>
                </ul>
                <p dangerouslySetInnerHTML={{ __html: "Some limited-time promos or special categories might appear (like 2x dining or gas for a few months), but typically it’s 2x on AA and 1x elsewhere. AAdvantage miles often value <strong>~1.3¢</strong> each, so 2x is decent for direct AA spend. If you want higher daily multipliers or flexible points, you might pair this with another card (like a Citi Double Cash or Chase Sapphire) for non-airfare categories. The Executive’s real power is the <strong>lounge</strong> and intangible airline benefits, not day-to-day earning." }}></p>
            </section>

            {/* Section 5: Sign-Up Bonus & Redemption Potential */}
             <section id="section-5" className={styles.reviewSection}>
                <h2 dangerouslySetInnerHTML={{ __html: "Sign-Up Bonus &amp; Redemption Potential" }}></h2>
                <p dangerouslySetInnerHTML={{ __html: "The bonus typically runs <strong>50k–80k AAdvantage miles</strong> after $5k spend in 3 months. Some special offers might approach 100k. At ~1.3¢ each, 80k can be ~$1,040 in flight value, or more if you find off-peak deals or business-class SAAver awards. That can offset most of the $595 fee in year one. If you redeem for domestic economy, it might be 12.5k–15k each way, netting multiple round trips. Or for international premium cabins, you might get 50–70k each way. Evaluate your typical routes—some partner awards (like Qatar, Etihad, Cathay) via AA miles can yield high-value premium seats. Regardless, the initial bonus can quickly recoup a chunk of the fee if used strategically." }}></p>
            </section>

            {/* Section 6: Admirals Club Lounge Access */}
             <section id="section-6" className={styles.reviewSection}>
                <h2>Admirals Club Lounge Access (Primary & Authorized Users)</h2>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{ __html: "The <strong>Executive</strong> card grants <strong>full Admirals Club® membership</strong>:"}}></p>
                <ul className={styles.featureList}>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{ __html:"<strong>Unlimited visits</strong> to Admirals Clubs globally for the cardholder + immediate family (spouse, domestic partner, children) or up to 2 guests traveling with you."}}></li>
                    <li dangerouslySetInnerHTML={{ __html:"<strong>Authorized Users</strong> also get their own Admirals Club access** (unique perk—each AU can enter lounges on their own, with their boarding pass, no primary holder needed). This can be huge for families or adult children traveling separately."}}></li>
                    <li>No additional lounge membership or pass fees beyond the $595 annual.
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <span dangerouslySetInnerHTML={{__html:"Typically, an Admirals Club® membership alone costs ~$650–$700 if bought directly from AA, so the card often pays for itself if you’d otherwise buy membership."}}></span></li>
                </ul>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{ __html: "If you or your family frequently passes through AA hubs (DFW, MIA, PHX, ORD, etc.), lounge comfort can easily save $10–$20 on airport meals or drinks each visit. Over multiple visits, the intangible convenience is immense. Note: It doesn’t provide Oneworld partner lounge access except Admirals or select AA-branded lounges (some partner lounge acceptance might differ, always confirm). But for domestic AA flyers, it’s the direct route to unlimited Admirals Club® entry."}}></p>
            </section>

            {/* Section 7: Bag Fees, Priority Boarding, & Other AA Perks */}
            <section id="section-7" className={styles.reviewSection}>
                 <h2 dangerouslySetInnerHTML={{ __html: "Bag Fees, Priority Boarding, &amp; Other AA Perks"}}></h2>
                <p>
                    The Executive card typically offers:
                </p>
                <ul className={styles.featureList}>
                    <li><strong>First Checked Bag Free:</strong>
                    For the primary cardholder (and up to 8 companions on the same reservation).
                    Saves ~$30 per bag each way if you frequently check luggage.</li>
                    <li><strong>Priority Boarding:</strong>
                    Group 4 (or better if you have status), meaning overhead bin security and less boarding chaos.
                    </li>
                     {/* Using dangerouslySetInnerHTML for &amp; */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Reduced Mileage Awards (occasionally):</strong> Some AA cards get discount awards to select domestic routes (like 1k–7.5k off round-trip), though T&amp;Cs vary. Check if the Executive card qualifies."}}></li>
                    <li><strong>25% In-Flight Savings:</strong>
                    If you buy food/drinks/headsets on AA flights with your card, you’ll get a statement credit for a portion of the cost.
                    </li>
                </ul>
                <p>
                    These replicate some perks found on cheaper AA cards like the Platinum Select,
                    but the difference is the <strong>unlimited</strong> lounge membership and the ability for AUs to also have lounge access.
                    The baggage perk can quickly add up if you travel with family or check multiple bags.
                    Priority boarding is also nice to ensure overhead space,
                    especially if you don’t hold higher AA status.
                </p>
            </section>

             {/* Section 8: 2025 Lounge Policy Changes & Trends */}
             <section id="section-8" className={styles.reviewSection}>
                 <h2 dangerouslySetInnerHTML={{ __html: "2025 Lounge Policy Changes &amp; Trends"}}></h2>
                <ol className={styles.numberedList}>
                    <li><strong>Guest Policy Adjustments:</strong>
                    Admirals Clubs may adjust how many guests or which family members can enter.
                    Currently, the cardholder can bring in immediate family or up to 2 guests.
                    That’s quite generous.
                    By 2025, if crowding worsens, AA could revise guest rules or impose capacity limits.</li>
                    <li><strong>Authorized User Lounge Access:</strong>
                    A key perk: each authorized user (AU) can visit independently.
                    Watch for any changes if AA tries to reduce crowding.
                    As of now, it remains a major selling point.
                    </li>
                    <li><strong>Fee Increases:</strong>
                    The card’s annual fee rose from $450 to $595 in recent years.
                    Could it nudge higher to $625–$650? Possibly, if new benefits or offsetting credits appear.
                    Always confirm with Citi/AA for official changes in 2025.</li>
                    <li><strong>Oneworld Lounge Partnerships:</strong>
                    Don’t expect a huge shift,
                    but if new Oneworld members join or alliances restructure,
                    lounge acceptance might slightly expand or contract.
                    Admirals Clubs remain the main coverage in the US,
                    with limited partner lounge usage abroad for “club membership.”
                    </li>
                </ol>
                <p>
                    Historically, the Executive card’s lounge policy is stable.
                    But if AA tightens guest rules or raises fees, your cost/benefit might shift.
                    Keep an eye on announcements each renewal period.
                </p>
            </section>

            {/* Section 9: Real-Life Example Table */}
            <section id="section-9" className={styles.reviewSection}>
                 <h2 dangerouslySetInnerHTML={{ __html: "Real-Life Example: Annual Spend &amp; Miles"}}></h2>
                <p>
                    Suppose you spend yearly:
                </p>
                <ul className={styles.featureList}>
                    <li>$4,000 in AA flights (2x = 8k miles)</li>
                    <li>$3,000 on other categories at 1x = 3k miles (assuming no 2x promos)</li>
                    <li>You also get a sign-up bonus of 80k miles in year one</li>
                </ul>
                <p>
                    That’s <strong>11k</strong> miles from spend + 80k bonus = <strong>91k</strong> total.
                    At 1.3¢ each, 91k is ~$1,183 in flight value.
                    Meanwhile, you frequently use Admirals Club—
                    say 12 visits/year at $59 each if you had to buy day passes = $708.
                    That alone outweighs the $595 fee if you’re big on lounge comfort.
                    Over time, free checked bags also yield savings for each trip.
                    So if you’re a moderate AA flyer who values lounge visits,
                    the intangible coverage is strong despite “just 2x” on tickets.
                </p>
            </section>

            {/* Section 10: Competitor Analysis */}
            <section id="section-10" className={styles.reviewSection}>
                 <h2>Competitor Analysis</h2>
                <p>
                    Top comparable airline lounge cards:
                </p>
                <div className={styles.tableContainer}>
                    <table className={styles.statsTable}>
                        <thead>
                            <tr>
                                <th>Card</th>
                                <th>Annual Fee</th>
                                <th>Lounge Access</th>
                                <th>Key Advantage</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* Using dangerouslySetInnerHTML for ® */}
                            <tr dangerouslySetInnerHTML={{__html:'<td data-label="Card">Citi® / AAdvantage® Executive</td><td data-label="Annual Fee">$595</td><td data-label="Lounge Access">Admirals Club membership (cardholder + family/guests), AUs also get lounge access</td><td data-label="Key Advantage">2x AA purchases, free 1st bag, authorized user lounge perk</td>'}}></tr>
                             {/* Using dangerouslySetInnerHTML for ℠ */}
                            <tr dangerouslySetInnerHTML={{__html:'<td data-label="Card">United Club℠ Infinite</td><td data-label="Annual Fee">$525</td><td data-label="Lounge Access">United Club membership, 4x United, 2x other travel/dining</td><td data-label="Key Advantage">Slightly cheaper, higher airline multiplier, but only for United folks</td>'}}></tr>
                            {/* Using dangerouslySetInnerHTML for ® */}
                            <tr dangerouslySetInnerHTML={{__html:'<td data-label="Card">Delta SkyMiles® Reserve</td><td data-label="Annual Fee">$550</td><td data-label="Lounge Access">Sky Club + limited Centurion if flying Delta</td><td data-label="Key Advantage">MQM boosts for status, first-class companion cert</td>'}}></tr>
                            <tr>
                                <td data-label="Card">Amex Platinum</td>
                                <td data-label="Annual Fee">$695</td>
                                <td data-label="Lounge Access">Centurion, Priority Pass (no restaurants), Delta lounge if flying Delta</td>
                                <td data-label="Key Advantage">Broader lounge coverage, 5x flights/hotels, but no AA-specific freebies</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{ __html:"For <strong>American</strong> loyalists wanting an <strong>Admirals Club®</strong> membership, the <strong>Executive</strong> card is the direct path. If you want broader lounge networks or another airline, pick a different premium card. The authorized user lounge feature is unique— AUs can access Admirals Club on their own, making it especially valuable for families or employees traveling separate from you."}}></p>
            </section>

            {/* Section 11: Additional Benefits & Travel Protections */}
            <section id="section-11" className={styles.reviewSection}>
                <h2 dangerouslySetInnerHTML={{ __html: "Additional Benefits &amp; Travel Protections" }}></h2>
                <p>
                    The Executive card typically includes:
                </p>
                <ul className={styles.featureList}>
                    <li><strong>Trip Cancellation/Interruption Insurance</strong> (covers some expenses if your trip is canceled/interrupted for a covered reason)</li>
                    <li><strong>Trip Delay Reimbursement</strong> (if your flight is delayed 12+ hours or overnight, up to $500 per ticket for hotels/meals)</li>
                    {/* Using dangerouslySetInnerHTML for &amp; */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Auto Rental Collision Damage Waiver</strong> (secondary coverage in the US, primary overseas—check T&amp;Cs)"}}></li>
                    <li dangerouslySetInnerHTML={{__html:"<strong>Baggage Delay Insurance</strong>, <strong>Lost Luggage Reimbursement</strong>, etc."}}></li>
                    <li><strong>$100 Global Entry/TSA PreCheck Credit</strong> every 4–5 years</li>
                </ul>
                <p>
                    These align with many premium cards’ coverage levels.
                    While not as extensive as some top-tier travel cards,
                    they provide a solid safety net if your flights get derailed or your luggage is lost.
                    Combined with no foreign transaction fees,
                    you can swipe confidently worldwide,
                    especially if connecting on Oneworld carriers.
                </p>
            </section>

             {/* Section 12: APR & Paying in Full */}
             <section id="section-12" className={styles.reviewSection}>
                 <h2 dangerouslySetInnerHTML={{ __html: "APR &amp; Paying in Full" }}></h2>
                <p>
                    With a variable APR ~21.24–29.24%,
                    carrying a balance can quickly negate the value of lounge access or free bags.
                    Always pay statements in full monthly if possible.
                    The card is best viewed as a travel tool, not a financing option.
                    If you foresee large purchases needing 0% or lower interest,
                    look elsewhere.
                    Similarly, avoid cash advances (~29.99%+ fees).
                    The Executive card thrives when you treat it as a PIF monthly card,
                    reaping lounge benefits, miles, and bag savings without interest charges overshadowing them.
                </p>
            </section>

             {/* Section 13: Potential Downsides */}
             <section id="section-13" className={styles.reviewSection}>
                <h2>Potential Downsides</h2>
                <ul className={styles.featureList}>
                    <li><strong>$595 Fee:</strong>
                    Among the highest airline co-brands,
                    so you must frequently use Admirals Club or other AA perks to justify.</li>
                     {/* Using dangerouslySetInnerHTML for &amp; */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>1x on Most Categories:</strong> You only get 2x for AA purchases. If you want higher multipliers on everyday spend or dining/travel, consider another card."}}></li>
                    <li><strong>No Direct Elite Status Accelerator:</strong>
                    Some airline cards offer spend-based status boosts,
                    but the Executive doesn’t.
                    You still need to fly/spend with AA or buy status challenges if offered.</li>
                    <li><strong>Guest Policy for AUs Freed? Possibly Overcrowding:</strong>
                    Admirals Club can get crowded.
                    If AA changes guest rules or times,
                    you might face capacity limits or restricted guests in peak hours.
                    </li>
                    <li><strong>Limited Partner Lounge Access:</strong>
                    Admirals Club membership doesn’t guarantee entry into all Oneworld lounges.
                    Some require you hold Oneworld Sapphire/Emerald status or an international itinerary.
                    </li>
                </ul>
            </section>

             {/* Section 14: Advanced Tips & Strategies */}
             <section id="section-14" className={styles.reviewSection}>
                 <h2 dangerouslySetInnerHTML={{ __html: "Advanced Tips &amp; Strategies" }}></h2>
                <ol className={styles.numberedList}>
                     {/* Using dangerouslySetInnerHTML for &amp; */}
                    <li dangerouslySetInnerHTML={{ __html:"<strong>Authorized Users for Lounge Access:</strong> Each AU also gets their own Admirals Club entry card. If you have family members who travel alone, that’s huge. Keep in mind the AU fee might be $0 or $0 for a few AUs (verify current T&amp;Cs). It’s one of the best family lounge solutions among airline cards."}}></li>
                    <li><strong>Pair with a 2x–5x Card for Non-AA Spend:</strong>
                    For everyday categories, a no-fee Double Cash (2x) or something from Amex/Chase could yield better returns.
                    Use the Executive card specifically for AA tickets and lounge access privileges.
                    </li>
                     {/* Using dangerouslySetInnerHTML for &amp; */}
                    <li dangerouslySetInnerHTML={{ __html:"<strong>Exploit International Admirals Clubs &amp; Partner Access:</strong> If traveling abroad from an AA hub, you’ll have a comfortable lounge experience. In some airports, membership might allow you into associated partner lounges if coded as an “Admirals Club” or if a separate arrangement is in place. Always confirm local rules."}}></li>
                     {/* Using dangerouslySetInnerHTML for &amp; */}
                    <li dangerouslySetInnerHTML={{ __html:"<strong>Track Award Sales &amp; Partner Awards:</strong> AAdvantage miles can be used for partner flights on Qatar, Cathay, etc. Premium cabins can yield 2¢+ per mile. Keep an eye on dynamic pricing for AA metal; sometimes it’s cheaper miles last minute or off-peak."}}></li>
                    <li><strong>Leverage Checked Bag for Many Companions:</strong>
                    If traveling with up to 8 on one reservation, that’s 9 total people (you + 8) each saving $30–$40 per bag per direction.
                    That can easily be $540 saved on one big family trip, offsetting the annual fee alone.
                    </li>
                </ol>
            </section>

             {/* Section 15: Another Real-Life Example */}
             <section id="section-15" className={styles.reviewSection}>
                <h2>Another Real-Life Example</h2>
                <p>
                    Suppose you:
                </p>
                <ul className={styles.featureList}>
                    <li>$5,000 on AA flights (2x = 10k miles)</li>
                    <li>$5,000 on general categories (1x = 5k miles)</li>
                    <li>Collect a sign-up bonus of 80k after $5k spend</li>
                    <li>Visit Admirals Club ~10 times/year (day passes cost $59 each, so $590 total if you’d otherwise buy passes)</li>
                </ul>
                <p>
                    That’s <strong>15k</strong> miles from spend + 80k bonus = 95k total.
                    At 1.3¢ each, about $1,235 flight value.
                    Lounge visits saving ~$590 in day passes.
                    This easily surpasses the $595 fee if you would otherwise pay for lounge access or day passes.
                    Meanwhile, free first bag can save $30 each way.
                    Over multiple trips, it’s not hard to see the net value tipping in your favor as an AA loyalist.
                </p>
            </section>

             {/* Section 16: Synergy with Citi / AAdvantage or Other Cards */}
             <section id="section-16" className={styles.reviewSection}>
                 <h2 dangerouslySetInnerHTML={{ __html: "Synergy with Citi / AAdvantage or Other Cards"}}></h2>
                <p>
                    The Executive card can pair with:
                </p>
                <ul className={styles.featureList}>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Citi Double Cash</strong> or <strong>Custom Cash</strong> for better everyday multipliers (2% or 5% in certain categories). Then, if you have a Citi Premier or Prestige (if still active), you can convert your cash-back into ThankYou points and possibly transfer to AA if a relationship resurfaces. Currently, direct AA transfers from ThankYou are not open to the public, but watch for promotions or indirect routes."}}></li>
                    <li><strong>A lower-fee AA card</strong> for other family members who want priority boarding/free bag but don’t need lounge membership.
                    The Executive card covers your lounge usage, but they might want their own card for extra sign-up bonus or other benefits.
                    </li>
                    <li><strong>Chase/Amex for Dining/Travel</strong> if you want 3–5x on non-AA travel.
                    Then keep the Executive card purely for AA flight purchases (2x) and lounge membership.
                    </li>
                </ul>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{__html:"Typically, you’d keep the Executive card for the lounge membership, bag waivers, and put your AA flight purchases there to build miles. For everyday categories, a more rewarding card might be used. All AAdvantage miles deposit into your same AA account, so it’s straightforward to track them."}}></p>
            </section>

             {/* Section 17: Redemption & Oneworld Partners */}
             <section id="section-17" className={styles.reviewSection}>
                 <h2 dangerouslySetInnerHTML={{ __html: "Redemption &amp; Oneworld Partners"}}></h2>
                <p>
                    AAdvantage miles can be redeemed for:
                </p>
                <ul className={styles.featureList}>
                     {/* Using dangerouslySetInnerHTML for &amp; */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>AA Domestic &amp; International Flights</strong>, with dynamic pricing for economy or business. Off-peak deals can yield sub-20k round-trip in economy to certain regions, while premium cabins might cost 57.5k+ each way depending on route demand."}}></li>
                    <li><strong>Oneworld Partners</strong> (like British Airways, Qatar Airways, Cathay Pacific, etc.),
                    often yielding better value for business/first class.
                    For instance, Qatar Qsuite to the Middle East might be ~70–75k one-way.
                    Some partner awards remain “sweet spots” if saver seats appear.</li>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Upgrades</strong> to premium cabins, or <strong>Web Specials</strong> if you find discounted miles routes. The program has become more dynamic, so always compare the cost in miles vs. cash to find if you’re getting at least ~1.3¢ each."}}></li>
                </ul>
                <p>
                    If you systematically hunt for partner business class or off-peak AA flights,
                    you can often surpass 1.5–2¢ per mile.
                    Domestic redemptions vary widely, but no close-in fees help for last-minute flights.
                    Overall, AAdvantage remains a strong program for premium partner awards—ideal if you’re able to plan or pounce on saver availability.
                </p>
            </section>

             {/* Section 18: Competitor & Alternative Cards */}
             <section id="section-18" className={styles.reviewSection}>
                 <h2 dangerouslySetInnerHTML={{ __html: "Competitor &amp; Alternative Cards"}}></h2>
                <p>
                    If you don’t want the full lounge membership or prefer other options:
                </p>
                <ul className={styles.featureList}>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>AA Platinum Select</strong> ($99 AF) or <strong>AA MileUp</strong> ($0 AF): Cheaper cards with fewer perks, typically 1 free checked bag, day passes, but no lounge membership. Good for moderate flyers who can’t justify $595."}}></li>
                    <li><strong>Chase Sapphire Reserve</strong> ($550 AF):
                    Priority Pass lounge network (restaurant credits included), 3x travel/dining, flexible UR points.
                    Not AA-specific bag or boarding perks, but broader coverage if you’re airline-agnostic.
                    </li>
                    <li><strong>Amex Platinum</strong> ($695 AF):
                    Centurion Lounges, Delta Sky Club if flying Delta, 5x flights/hotels.
                    No AA baggage waivers, no Admirals Club.
                    More universal lounge coverage (except AA).
                    </li>
                    <li><strong>Capital One Venture X</strong> ($395 AF):
                    Priority Pass (with restaurants), simpler 2x all purchases, $300 travel credit.
                    No direct AA bag/boarding perks or Admirals Club membership.</li>
                </ul>
                <p>
                    The <strong>Executive</strong> is the definitive route to Admirals Club membership.
                    If you want multiple airline lounge options or flexible points,
                    a general premium card might suit better.
                    But for a frequent AA traveler who craves unlimited lounge visits (and AUs with lounge privileges),
                    the Executive stands alone.
                </p>
            </section>

             {/* Section 19: Who Should Get the Card? */}
             <section id="section-19" className={styles.reviewSection}>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <h2 dangerouslySetInnerHTML={{ __html: "Who Should Get the Citi® / AAdvantage® Executive World Elite Mastercard®?"}}></h2>
                <div className={styles.prosCons}>
                    <div className={styles.pros}>
                        <h3>Yes, If You:</h3>
                        <ul className={styles.featureList}>
                            <li>Fly <strong>American Airlines regularly</strong> and want unlimited Admirals Club lounge access</li>
                            <li>Desire <strong>authorized users who each get lounge access</strong> (unique perk for families/colleagues)</li>
                            <li>Check <strong>bags frequently</strong>—1st bag free for up to 8 companions can save hundreds</li>
                            <li>Value the <strong>sign-up bonus</strong> (50k–80k miles) to offset the $595 fee in year one</li>
                            <li>Crave <strong>priority boarding</strong> to ensure overhead space on AA flights</li>
                        </ul>
                    </div>
                    <div className={styles.cons}>
                        <h3>No, If You:</h3>
                        <ul className={styles.featureList}>
                            <li>Rarely or sporadically <strong>fly AA</strong> or <strong>use Admirals Clubs</strong></li>
                            <li>Seek <strong>higher multipliers</strong> on everyday spend or flexible points; only 2x on AA, 1x else is limited</li>
                            <li>Prefer a <strong>broader lounge network</strong> (Priority Pass, Centurion) or an airline-agnostic approach</li>
                            <li>Can’t justify a <strong>$595 fee</strong> or lounge membership if you seldom visit airports/hubs</li>
                            <li>Expect to <strong>carry a balance</strong>—interest can overshadow your lounge/bag savings quickly</li>
                        </ul>
                    </div>
                </div>
            </section>

             {/* Section 20: Bottom Line & Disclaimer */}
             <section id="section-20" className={styles.reviewSection}>
                <h2 dangerouslySetInnerHTML={{ __html:"Final Thoughts &amp; Disclaimer"}}></h2>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{ __html:"The <strong>Citi® / AAdvantage® Executive World Elite Mastercard®</strong> stands as American Airlines’ premier co-brand, delivering <strong>full Admirals Club® membership</strong> plus authorized user lounge benefits—rare among airline cards. At <strong>$595</strong>, it’s pricier than mid-tier AA cards, but the lounge membership (worth ~$650+ alone), <strong>first checked bag free</strong> for many travelers on your reservation, <strong>priority boarding</strong>, and a decent sign-up bonus can offset that fee for frequent AA flyers. You’ll earn just <strong>2x</strong> on AA purchases, <strong>1x</strong> everything else, so for daily spending you might pair it with a higher-multiplier product. Yet if you love American’s route network, want consistent lounge comfort, and appreciate that your AUs can also enter Admirals Clubs on their own, the Executive card is a top pick for 2025’s traveling families or business flyers dedicated to AA."}}></p>
                 {/* Using dangerouslySetInnerHTML for ® &amp; */}
                <p dangerouslySetInnerHTML={{ __html:"<strong>Disclaimer:</strong> Terms, APR, sign-up bonuses, lounge policies, and fees can change. Always check Citi or American Airlines for current details. We may earn affiliate commissions from certain links, but editorial views remain independent. AAdvantage miles typically hold ~1.3¢ in value, though dynamic award prices vary. If you revolve balances at ~21–29% APR, interest quickly negates lounge or baggage perks. Evaluate your AA flight frequency, lounge usage, and potential for 1st bag free to see if $595 makes sense."}}></p>
            </section>

            {/* E-A-T Section - Using Generic Text adapted for Citi AA Exec */}
             <section id="eat-expertise-authority-trustworthiness" className={`${styles.reviewSection} ${styles.eatSection}`}>
                 <h2 dangerouslySetInnerHTML={{ __html: "Our Commitment to E-A-T: Expertise, Authority &amp; Trustworthiness"}}></h2>
                 {/* !!! E-A-T Text below is generic; adapted from template. Review/replace if needed. !!! */}
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
                    in credit cards and travel rewards, including detailed analysis of premium airline co-brand cards like the Citi / AAdvantage Executive.</li>
                    <li><strong>Real-Time Updates:</strong>
                    We continually check official issuer materials (Citi/AA)
                    and user data to maintain current rates, lounge policies, and terms.</li>
                    <li dangerouslySetInnerHTML={{ __html: "<strong>Conferences &amp; Webinars:</strong> Our team attends financial and travel events, enriching our knowledge base with industry insights on airline loyalty and lounge access."}}></li>
                </ul>
                <h3>2. Authority</h3>
                <ul className={styles.featureList}>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{ __html:"<strong>Detailed Coverage:</strong> This review offers an exhaustive look at the Citi® / AAdvantage® Executive World Elite Mastercard®, from the $595 fee justification to lounge access rules."}}></li>
                    <li><strong>Trusted By Major Outlets:</strong>
                    Our articles are frequently cited by national finance
                    and travel news sites for airline card comparisons.</li>
                    <li><strong>Full Disclosure:</strong>
                    If affiliate links or promotions exist, we clearly state them,
                    ensuring objective editorial content.</li>
                </ul>
                <h3>3. Trustworthiness</h3>
                <ul className={styles.featureList}>
                    <li><strong>Independent Analysis:</strong>
                    We never let advertisers influence our ratings or opinions on the Executive card.</li>
                    <li><strong>Frequent Revisions:</strong>
                    We revise reviews whenever new offers appear or Admirals Club policies change.</li>
                    <li><strong>Community Feedback:</strong>
                    We encourage open discussion in comments,
                    fostering transparency and additional user insights on AA travel.</li>
                    <li>
                        <strong>Data Security:</strong> We prioritize user privacy and follow best practices,
                        outlined in our <Link href="/privacy-policy"><a>Privacy Policy</a></Link>.
                    </li>
                </ul>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{ __html: "By following these E‑A‑T principles, we aim to guide you responsibly toward a credit card that fits your needs and maximizes your travel rewards with American Airlines." }}></p>
            </section>

          </article>
        </div> {/* Close reviewContainer */}
      </main>

      <Footer />
    </>
  );
}

export default CitiAAdvantageExecutiveReviewPage;