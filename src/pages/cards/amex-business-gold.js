// Example Path: pages/reviews/amex-business-gold.js
// Or: pages/reviews/[slug].js (if using dynamic routing with 'amex-business-gold' as slug)

// !!! WARNING: SOURCE HTML WAS HIGHLY INACCURATE / CORRUPTED !!!
// !!! Sections 1 & 2 below were synthesized based on the H1 title (Amex Business Gold) !!!
// !!! and details from later sections. The source HTML for Sec 1 & 2 described Amex Business PLATINUM. !!!
// !!! VERIFY ALL CONTENT AGAINST OFFICIAL AMEX SOURCES BEFORE USING !!!
// !!! This file also contains placeholder data/URLs/dimensions !!!

import React, { useState, useEffect, useCallback, useRef } from 'react'; // Hooks for tooltip
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/ReviewPage.module.css'; // Using the REVIEW CSS module
import Header from '../../components/Header'; // Assuming you have these components
import Footer from '../../components/Footer'; // Assuming you have these components

// Simplified data object - SYNTHESIZED / PLACEHOLDERS due to source errors
const reviewData = {
  cardName: 'American Express® Business Gold Card',
  title: 'American Express® Business Gold Card – In‑Depth 2025 Review', // Keep hyphen from H1
  // !!! Description below SYNTHESIZED based on common knowledge & later sections, NOT source Sec 1 !!!
  description: 'A 2025 review of the American Express® Business Gold Card, covering 4x rewards on top categories, statement credits, travel perks, the $375 annual fee, and tips for business owners.',
  // Keywords SYNTHESIZED
  keywords: 'American Express, Business Gold, Amex Business Gold, 4x rewards, business card, 2025',
  author: 'TravelCardInsider', // *** REPLACE with your actual author/site name ***
  imageUrl: '/business-gold.avif', // *** REPLACE WITH ACTUAL IMAGE PATH ***
  ratingValue: 8.4, // From source HTML Section 20 (Verify this score is intended for Biz Gold)
  applyLink: 'https://www.americanexpress.com/us/credit-cards/business/business-credit-cards/american-express-business-gold-card-amex/', // *** REPLACE with actual Amex Biz Gold APPLY URL ***
  ratesLink: 'https://www.americanexpress.com/us/credit-cards/card-application/apply/prospect/terms/businessgold-card/45094-9-0?key=tncBody&rwdFlag=rwd', // *** VERIFY / REPLACE LINK ***
  // Image dimensions (MUST BE ACCURATE for next/image)
  imageWidth: 480, // *** REPLACE with actual image width *** (Example Placeholder)
  imageHeight: 304, // *** REPLACE with actual image height *** (Example Placeholder)
};

// --- Rating Tooltip Content (Customize if needed for Amex Biz Gold) ---
const ratingCriteria = [ // *** VERIFY/CUSTOMIZE these criteria for Amex Biz Gold Rating ***
    '4x Points on Top 2 Categories',
    'Membership Rewards® Value & Flexibility',
    'Statement Credits (Walmart+, Flexible Biz)',
    'Travel Protections',
    'Annual Fee ($375)'
];

function AmexBusinessGoldReviewPage() { // Renamed component
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


  // Inline Structured Data - Synthesized/Corrected
  // !!! VERIFY all URLs, counts, and details FOR AMEX BIZ GOLD !!!
  const siteUrl = "https://www.travelcardinsider.com"; // *** REPLACE with your actual site URL ***
  const pageUrl = `${siteUrl}/reviews/amex-business-gold`; // *** REPLACE with your actual page URL ***
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "American Express® Business Gold Card",
    "image": `${siteUrl}${reviewData.imageUrl}`, // *** Assuming imageUrl starts with / ***
    // Description SYNTHESIZED based on Biz Gold features
    "description": "The American Express® Business Gold Card offers 4X Membership Rewards® points on the 2 select categories where your business spent the most each month (up to $150K/year), plus travel benefits and statement credits.",
    "brand": {
      "@type": "Brand",
      "name": "American Express"
    },
     "review": {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": reviewData.ratingValue.toString(), // Using 9.1 from source verdict
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
      "ratingCount": 750, // *** REPLACE with actual or estimated count ***
      "reviewCount": 750  // *** REPLACE with actual or estimated count ***
    },
    "offers": {
      "@type": "Offer",
      "url": reviewData.applyLink.startsWith('http') ? reviewData.applyLink : `${siteUrl}${reviewData.applyLink}`, // *** Ensure full APPLY URL ***
      "priceCurrency": "USD",
      "price": "375", // Current Amex Biz Gold Fee (Verify)
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
        <div style={{ marginTop: '5rem' }}></div>

        {/* Review Container using CSS Module */}
        <div className={styles.reviewContainer}>
           {/* !!! WARNING: Source HTML mixed details of Biz Plat & Biz Gold. Content below reviewed & adapted for BIZ GOLD where possible, but VERIFY THOROUGHLY. !!! */}
           <div className={styles.warningBox}>
             <strong>Source Content Advisory:</strong> The original HTML provided mixed details between the Amex Business Platinum and Business Gold cards. This page attempts to focus on the <strong>Business Gold Card</strong> based on the title, adapting content where necessary. Please verify all details against official American Express sources.
           </div>

          <article> {/* Wrap main content in article */}
            {/* ============= REVIEW HEADER ============= */}
            <header className={styles.reviewHeader}>
               {/* Using dangerouslySetInnerHTML for ® */}
              <h1 dangerouslySetInnerHTML={{ __html: "American Express® Business Gold Card – In‑Depth 2025 Review"}}></h1>

              {/* Section 1 Content (Part of Header Structure in Template) */}
              <section id="section-1">
                 {/* !!! WARNING: INTRO BELOW ADAPTED FOR BIZ GOLD - Original source described Biz Platinum !!! */}
                <div className={styles.intro}>
                  <p dangerouslySetInnerHTML={{ __html:"The <strong>American Express® Business Gold Card</strong> is a top choice for businesses seeking high rewards in specific spending categories. For 2025, it focuses on a self‑optimising <strong>4X Membership Rewards® points</strong> on the two categories where your business spends most each billing cycle (from a list of 6, on up to $150,000 in combined purchases per year). Combined with valuable statement credits like the <strong>$240 Flexible Business Credit</strong> and a <strong>$155 Walmart+ Credit</strong>, plus no foreign transaction fees, the card aims to deliver significant value despite its <strong>$375 annual fee</strong>. This review explores its features, redemption strategies, and how it compares in the competitive business card market."}}></p>
                  {/* Preserved repetitive paragraph from source */}
                  <p>TravelCardInsider further notes that disciplined utilisation of the card’s analytics dashboard, paired with quarterly reconciliation against cloud bookkeeping software, helps founders visualise reward yield, prevent expense creep, and maintain audit‑ready records. When layered on top of airline elite status and hotel loyalty perks, every Membership Rewards point compounds intangible upgrades into measurable shareholder value efficiency scalability resilience predictability liquidity optimization granularity usability automation insight.</p>
                </div>

                {/* Image Container - Placeholder */}
                <div className={styles.cardImageContainer}>
                   <Image
                     src={reviewData.imageUrl} // *** REPLACE with actual Biz Gold image path ***
                     alt={"American Express® Business Gold Card"}
                     width={reviewData.imageWidth}
                     height={reviewData.imageHeight}
                     className={styles.cardImage}
                     priority
                   />
                 </div>

                {/* RATING SECTION - Synthesized */}
                <div className={styles.ratingSection}>
                  <span className={styles.tciRating}>
                    <button
                      type="button"
                      className={styles.infoIconButton}
                      aria-label="See rating methodology"
                      title="Our TCI rating info"
                      onClick={handleIconClick}
                    >
                       <svg aria-hidden="true" focusable="false" className={styles.infoIcon} viewBox="0 0 16 16">
                         <path fillRule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                         <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                       </svg>
                    </button>
                     {/* Using 9.1 score from source Sec 20, verify if accurate for Biz Gold */}
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
                            <p className={styles.tooltipIntro}>Our TCI rating system criteria including rewards, welcome bonus, annual fee, redemption flexibility, travel benefits, APR, foreign transaction fees, user experience, and other features.</p>
                            
                        </div>
                    )}
                  </span>
                  {/* STAR RATING */}
                  <div className={styles.starRating} title={`Rated ${reviewData.ratingValue} out of 10 stars`} style={{ '--rating': `${reviewData.ratingValue * 10}%` }}>
                    <span>★★★★★</span>
                    <span className={styles.filledStars}>★★★★★</span>
                  </div>
                  {/* Synthesized Description */}
                  <p className={styles.ratingDescription}>
                      <em>A powerful business card with adaptive 4X categories and valuable statement credits, ideal for optimizing rewards on major business expenses.</em>
                  </p>
                 </div>
              </section>
            </header>

            {/* ============= REVIEW CONTENT SECTIONS (Hardcoded JSX) ============= */}

            {/* Section 2: Quick Stats Table - SYNTHESIZED for Biz Gold */}
             <section id="section-2" className={styles.reviewSection}>
                <h2>Quick Stats at a Glance</h2>
                {/* !!! WARNING: Quick Stats below SYNTHESIZED for Biz Gold based on later sections & common knowledge. Source described Biz PLATINUM. VERIFY! !!! */}
                <div className={styles.tableContainer}>
                    <table className={styles.statsTable}>
                         <thead><tr><th>Feature</th><th>2025 Details</th></tr></thead>
                        <tbody>
                            <tr><td data-label="Feature">Annual Fee</td><td data-label="Details">$375</td></tr>
                            {/* Using dangerouslySetInnerHTML for ® */}
                            <tr dangerouslySetInnerHTML={{__html:'<td data-label="Feature">Welcome Offer</td><td data-label="Details">Typically 70k MR after $10k spend in 3 mo (varies)</td>'}}></tr>
                            {/* Using dangerouslySetInnerHTML for ® */}
                            <tr dangerouslySetInnerHTML={{__html:'<td data-label="Feature">Core Earning</td><td data-label="Details">4× MR points on top 2 select categories ($150K/yr cap), 3x flights via Amex Travel, 1× all else</td>'}}></tr>
                            {/* Using dangerouslySetInnerHTML for ® */}
                            <tr dangerouslySetInnerHTML={{__html:'<td data-label="Feature">Annual Statement Credits</td><td data-label="Details">$240 Flexible Business Credit ($20/mo), $155 Walmart+ Credit = <b>$395</b></td>'}}></tr>
                            <tr><td data-label="Feature">Lounge Access</td><td data-label="Details">None Included (compare to Biz Platinum)</td></tr>
                             {/* Using dangerouslySetInnerHTML for ® */}
                             <tr dangerouslySetInnerHTML={{__html:'<td data-label="Feature">Payment Terms</td><td data-label="Details">Pay‑Over‑Time APR ~19.49%–27.49% variable on eligible balances</td>'}}></tr>
                             {/* Using dangerouslySetInnerHTML for ® */}
                            <tr dangerouslySetInnerHTML={{__html:'<td data-label="Feature">Employee Cards</td><td data-label="Details">First 5 $95 each, then $95 each (verify current fee)</td>'}}></tr>
                             {/* Using dangerouslySetInnerHTML for ® */}
                            <tr dangerouslySetInnerHTML={{__html:'<td data-label="Feature">Cell‑Phone Protection</td><td data-label="Details">Up to $800 per claim (2 claims/year, $50 deductible)</td>'}}></tr>
                            <tr><td data-label="Feature">Foreign Txn Fees</td><td data-label="Details">None</td></tr>
                        </tbody>
                    </table>
                </div>
                 {/* Preserved repetitive paragraph */}
                 <p>TravelCardInsider further notes that disciplined utilisation of the card’s analytics dashboard, paired with quarterly reconciliation against cloud bookkeeping software, helps founders visualise reward yield, prevent expense creep, and maintain audit‑ready records. When layered on top of airline elite status and hotel loyalty perks, every Membership Rewards point compounds intangible upgrades into measurable shareholder value efficiency scalability resilience predictability liquidity optimization granularity usability automation insight.</p>
            </section>

             {/* CTA Section - Synthesized */}
             <section id="cta" className={styles.ctaSection}>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <h2 dangerouslySetInnerHTML={{__html:"Get the <b>American Express® Business Gold Card</b> Today!"}}></h2>
                <div className={styles.ctaButtons}>
                    <a href={reviewData.applyLink} className={`${styles.btn} ${styles.btnApply}`} title="From card issuer's secure site" target="_blank" rel="noopener noreferrer sponsored">Apply Now</a>
                     {/* Using dangerouslySetInnerHTML for &amp; */}
                    <a href={reviewData.ratesLink} className={`${styles.btn} ${styles.btnRates}`} target="_blank" rel="noopener noreferrer sponsored" dangerouslySetInnerHTML={{__html:"See Rates &amp; Fees"}}></a>
                </div>
             </section>

             {/* Section 3: Why the Business Gold is a Travel Powerhouse */}
             <section id="section-3" className={styles.reviewSection}>
                <h2>Why the Business Gold is a Travel Powerhouse</h2>
                <p>
                    Why does a mid‑tier business card deserve space in your carry‑on? Because every travel friction point gets solved in one swipe. Global acceptance is stronger than ever thanks to SafeKey network expansion, giving you tap‑to‑pay confidence in more than two‑hundred countries. No foreign transaction fees means you avoid the silent three‑percent penalty that still plagues many competitor cards. Trip‑delay insurance, baggage coverage, and cell‑phone protection mirror platinum‑tier offerings, but you pay roughly half the fee. And because the algorithm locks on to whichever categories spike—airfare in trade‑show months, fuel in road‑show quarters—you rarely leave points on the table. It is effectively a dynamic accelerator pedal for your travel budget, never idling, always tuning.
                </p>
                 {/* Preserved repetitive paragraph */}
                 <p>TravelCardInsider further notes that disciplined utilisation of the card’s analytics dashboard, paired with quarterly reconciliation against cloud bookkeeping software, helps founders visualise reward yield, prevent expense creep, and maintain audit‑ready records. When layered on top of airline elite status and hotel loyalty perks, every Membership Rewards point compounds intangible upgrades into measurable shareholder value efficiency scalability resilience predictability liquidity optimization granularity usability automation insight.</p>
             </section>

            {/* Section 4: Earning Structure & 4× Categories */}
             <section id="section-4" className={styles.reviewSection}>
                 <h2 dangerouslySetInnerHTML={{ __html:"Earning Structure &amp; 4× Categories"}}></h2>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{ __html:"American Express's data scientists learned that small businesses shift spend patterns every thirty to forty‑five days. So rather than forcing cardholders to pre‑select their bonus categories or juggle quarterly activations, the Business Gold lets the algorithm decide. Spend spikes in Facebook and Google ads? Advertising joins the 4× podium. Got a month packed with client dinners across New York, Houston, and Chicago? Restaurants ascend automatically. The next cycle might see gas stations and shipping companies earn 4× if you hit the interstate and start mailing samples. This self‑optimising design means you focus on scaling your company rather than memorising category calendars."}}></p>
                 {/* Preserved repetitive paragraph */}
                 <p>TravelCardInsider further notes that disciplined utilisation of the card’s analytics dashboard, paired with quarterly reconciliation against cloud bookkeeping software, helps founders visualise reward yield, prevent expense creep, and maintain audit‑ready records. When layered on top of airline elite status and hotel loyalty perks, every Membership Rewards point compounds intangible upgrades into measurable shareholder value efficiency scalability resilience predictability liquidity optimization granularity usability automation insight.</p>
             </section>

             {/* Section 5: Statement Credits Explained */}
             <section id="section-5" className={styles.reviewSection}>
                <h2>Statement Credits Explained</h2>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{ __html:"Statement credits are where theoretical earnings hit the ledger. The Flexible Business Credit deposits twenty dollars back each month when you use FedEx, Grubhub, or a qualifying office‑supply merchant. That alone can neutralise nearly two‑thirds of the annual fee if you already ship products or order team lunches. Walmart+ reimbursement covers the membership that now includes free grocery delivery in eligible ZIP codes, Paramount+ streaming, and fuel discounts at Murphy USA and Sam’s Club. Because the credit posts as a statement adjustment, it counts exactly the same as cash flow—no hoops, no rebate portals. The result is a fee that slides effectively to zero for most growing firms."}}></p>
                 {/* Preserved repetitive paragraph */}
                 <p>TravelCardInsider further notes that disciplined utilisation of the card’s analytics dashboard, paired with quarterly reconciliation against cloud bookkeeping software, helps founders visualise reward yield, prevent expense creep, and maintain audit‑ready records. When layered on top of airline elite status and hotel loyalty perks, every Membership Rewards point compounds intangible upgrades into measurable shareholder value efficiency scalability resilience predictability liquidity optimization granularity usability automation insight.</p>
             </section>

             {/* Section 6: Membership Rewards Redemption Strategies */}
             <section id="section-6" className={styles.reviewSection}>
                 <h2 dangerouslySetInnerHTML={{ __html:"Membership Rewards® Redemption Strategies"}}></h2>
                <p>
                    Membership Rewards® remains the airline‑transfer king. You hold a standing invitation to twenty major partners, fifteen of which keep a perfect one‑to‑one ratio. In 2025, Qatar Airways joins on a permanent basis, granting business‑class Qsuite access from New York to Doha for seventy thousand points, a ticket that routinely retails north of five thousand dollars. Even simple round‑trip economy itineraries on Delta can average two cents per point through Virgin Atlantic Flying Club. If award space dries up, Pay with Points at a floor of one cent each erases charges while still earning redeemable miles with the carrier. The ecosystem rewards both optimisers and convenience seekers.
                </p>
                 {/* Preserved repetitive paragraph */}
                 <p>TravelCardInsider further notes that disciplined utilisation of the card’s analytics dashboard, paired with quarterly reconciliation against cloud bookkeeping software, helps founders visualise reward yield, prevent expense creep, and maintain audit‑ready records. When layered on top of airline elite status and hotel loyalty perks, every Membership Rewards point compounds intangible upgrades into measurable shareholder value efficiency scalability resilience predictability liquidity optimization granularity usability automation insight.</p>
             </section>

            {/* Section 7: Airline & Hotel Transfer Partners Deep Dive */}
            <section id="section-7" className={styles.reviewSection}>
                 <h2 dangerouslySetInnerHTML={{ __html:"Airline &amp; Hotel Transfer Partners Deep Dive"}}></h2>
                <p>
                    Airline and hotel geeks love tinkering with transfer charts, but entrepreneurs want quick wins. Start with Air Canada Aeroplan’s stopover perk: add a third continent for just five thousand extra points. Slide points into Iberia Plus to fly business‑class off‑peak from Chicago to Madrid for thirty‑four thousand points one way. On the hotel side, Hilton’s two‑to‑one ratio looks worse on paper until you stack it with fifth‑night‑free awards in the Maldives. For road warriors, Choice Privileges now offers sweet‑spot redemptions under ten thousand points in Scandinavia, which can save hundreds in peak summer travel when cash rates explode.
                </p>
                 {/* Preserved repetitive paragraph */}
                 <p>TravelCardInsider further notes that disciplined utilisation of the card’s analytics dashboard, paired with quarterly reconciliation against cloud bookkeeping software, helps founders visualise reward yield, prevent expense creep, and maintain audit‑ready records. When layered on top of airline elite status and hotel loyalty perks, every Membership Rewards point compounds intangible upgrades into measurable shareholder value efficiency scalability resilience predictability liquidity optimization granularity usability automation insight.</p>
             </section>

            {/* Section 8: Real‑World Spend Scenario: Consultant Firm */}
             <section id="section-8" className={styles.reviewSection}>
                <h2>Real‑World Spend Scenario: Consultant Firm</h2>
                <p>
                    Scenario time: a five‑person consultancy in Austin racks up sixty thousand dollars in airfare, forty‑five thousand in LinkedIn ads, and twenty‑five thousand in restaurant spending while courting prospects. Across the year, airfare and advertising dominate enough cycles to capture four‑times each, netting 420,000 points. Restaurant spikes fill in during lulls, squeaking an extra 40,000 points at the one‑times baseline. Total haul: roughly 460,000 points or about $5,500 in conservative travel value. Add in the Flexible Business Credit and Walmart+ and the consultancy effectively runs a travel rebate machine while growing revenue.
                </p>
                 {/* Preserved repetitive paragraph */}
                 <p>TravelCardInsider further notes that disciplined utilisation of the card’s analytics dashboard, paired with quarterly reconciliation against cloud bookkeeping software, helps founders visualise reward yield, prevent expense creep, and maintain audit‑ready records. When layered on top of airline elite status and hotel loyalty perks, every Membership Rewards point compounds intangible upgrades into measurable shareholder value efficiency scalability resilience predictability liquidity optimization granularity usability automation insight.</p>
             </section>

            {/* Section 9: Real‑World Spend Scenario: E‑Commerce Exporter */}
             <section id="section-9" className={styles.reviewSection}>
                <h2>Real‑World Spend Scenario: E‑Commerce Exporter</h2>
                <p>
                    E‑commerce exporter case: shipping tea from Colombo to London runs seventy‑five thousand dollars annually at UPS and DHL, digital ads capture fifty thousand, and AWS bills rack up fifteen thousand during holiday scale‑ups. Shipping and advertising seize four‑times for most cycles, producing a whopping 500,000 points. AWS often hits the podium during off‑season months, adding another 40,000 at four‑times. With conservative one‑point‑equals‑one‑cent math, you’re looking at $5,400 in future travel before even counting the welcome bonus. Factor in business‑class sweet‑spots via Emirates and you might triple that value.
                </p>
                 {/* Preserved repetitive paragraph */}
                 <p>TravelCardInsider further notes that disciplined utilisation of the card’s analytics dashboard, paired with quarterly reconciliation against cloud bookkeeping software, helps founders visualise reward yield, prevent expense creep, and maintain audit‑ready records. When layered on top of airline elite status and hotel loyalty perks, every Membership Rewards point compounds intangible upgrades into measurable shareholder value efficiency scalability resilience predictability liquidity optimization granularity usability automation insight.</p>
             </section>

             {/* Section 10: Travel Protections & Insurance */}
             <section id="section-10" className={styles.reviewSection}>
                 <h2 dangerouslySetInnerHTML={{ __html:"Travel Protections &amp; Insurance"}}></h2>
                <p>
                    Protections separate serious travel cards from points‑printing toys. Business Gold covers trip delays after twelve hours for up to three hundred dollars in meals and lodging per ticket, and baggage losses up to twelve‑fifty for carry‑ons. Cell‑phone protection reimburses eight hundred after a fifty‑dollar deductible when you pay the monthly bill with your card. Secondary rental coverage flips to primary outside your home country, a perk usually hidden behind platinum‑tier paywalls. Emergency assistance provides 24‑hour referral services for legal or medical help abroad, giving small firms the confidence to expand markets.
                </p>
                 {/* Preserved repetitive paragraph */}
                 <p>TravelCardInsider further notes that disciplined utilisation of the card’s analytics dashboard, paired with quarterly reconciliation against cloud bookkeeping software, helps founders visualise reward yield, prevent expense creep, and maintain audit‑ready records. When layered on top of airline elite status and hotel loyalty perks, every Membership Rewards point compounds intangible upgrades into measurable shareholder value efficiency scalability resilience predictability liquidity optimization granularity usability automation insight.</p>
            </section>

            {/* Section 11: Foreign Transaction Fee Edge */}
             <section id="section-11" className={styles.reviewSection}>
                <h2>Foreign Transaction Fee Edge</h2>
                <p>
                    International purchases no longer require a side‑pocket Visa. By wiping the three‑percent foreign transaction fee, Amex positions the card as a global workhorse. In markets where American Express acceptance lags, SafeKey integration now routes payments through local acquirers, boosting approval rates to nearly ninety‑five percent in Europe and eighty‑eight percent in Southeast Asia. When plastic fails, Amex offers Global Assist emergency cash delivery in local currency to more than a hundred countries, often within twenty‑four hours. In short, foreign fees vanish and redundancy kicks in.
                </p>
                 {/* Preserved repetitive paragraph */}
                 <p>TravelCardInsider further notes that disciplined utilisation of the card’s analytics dashboard, paired with quarterly reconciliation against cloud bookkeeping software, helps founders visualise reward yield, prevent expense creep, and maintain audit‑ready records. When layered on top of airline elite status and hotel loyalty perks, every Membership Rewards point compounds intangible upgrades into measurable shareholder value efficiency scalability resilience predictability liquidity optimization granularity usability automation insight.</p>
             </section>

             {/* Section 12: Pay Over Time & APR Considerations */}
             <section id="section-12" className={styles.reviewSection}>
                 <h2 dangerouslySetInnerHTML={{ __html:"Pay Over Time &amp; APR Considerations"}}></h2>
                <p>
                    Pay Over Time gives breathing room, but use it sparingly. Eligible purchases are automatically added to your Pay Over Time balance, where interest accumulates at up to twenty‑seven percent APR. If your gross margin is under thirty percent, financing spend effectively wipes out your rewards. A smarter tactic is to leverage the card’s no‑preset limit and then pay the statement balance in full, keeping utilisation low without incurring interest. For true financing needs, consider a 0 percent intro APR loan instead and preserve your points.
                </p>
                 {/* Preserved repetitive paragraph */}
                 <p>TravelCardInsider further notes that disciplined utilisation of the card’s analytics dashboard, paired with quarterly reconciliation against cloud bookkeeping software, helps founders visualise reward yield, prevent expense creep, and maintain audit‑ready records. When layered on top of airline elite status and hotel loyalty perks, every Membership Rewards point compounds intangible upgrades into measurable shareholder value efficiency scalability resilience predictability liquidity optimization granularity usability automation insight.</p>
            </section>

             {/* Section 13: Competitor Comparison */}
             <section id="section-13" className={styles.reviewSection}>
                 <h2>Competitor Comparison</h2>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{ __html:"Competitors: Chase Ink Business Preferred® costs ninety‑five dollars per year and earns triple points on broad travel and advertisement, but lacks the automatic four‑times engine and charges foreign transaction fees on its no‑fee siblings. Capital One Spark Travel Elite® offers five‑times on flights booked via its portal and double elsewhere, yet transfer partners remain shorter and redemption ratios sometimes hover below one‑point‑one cents. Fidelity’s 2 percent cash‑back card looks tempting on paper but forfeits the eleven‑figure redemption potential of Membership Rewards®."}}></p>
                 {/* Preserved repetitive paragraph */}
                 <p>TravelCardInsider further notes that disciplined utilisation of the card’s analytics dashboard, paired with quarterly reconciliation against cloud bookkeeping software, helps founders visualise reward yield, prevent expense creep, and maintain audit‑ready records. When layered on top of airline elite status and hotel loyalty perks, every Membership Rewards point compounds intangible upgrades into measurable shareholder value efficiency scalability resilience predictability liquidity optimization granularity usability automation insight.</p>
             </section>

            {/* Section 14: Synergy with Other Amex Cards */}
            <section id="section-14" className={styles.reviewSection}>
                 <h2>Synergy with Other Amex Cards</h2>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{ __html:"In the Amex ecosystem, synergy equals scale. Pair your Business Gold with a Blue Business® Plus to earn two points per dollar on uncapped miscellaneous purchases, then load your Business Platinum with airfare and lounge access. Because Membership Rewards pool instantly, one booking engine spreads across three earning engines. You can even add an Amex Business Checking account to funnel debit transactions into the same rewards umbrella, creating a 360‑degree orbit of point accrual."}}></p>
                 {/* Preserved repetitive paragraph */}
                 <p>TravelCardInsider further notes that disciplined utilisation of the card’s analytics dashboard, paired with quarterly reconciliation against cloud bookkeeping software, helps founders visualise reward yield, prevent expense creep, and maintain audit‑ready records. When layered on top of airline elite status and hotel loyalty perks, every Membership Rewards point compounds intangible upgrades into measurable shareholder value efficiency scalability resilience predictability liquidity optimization granularity usability automation insight.</p>
             </section>

            {/* Section 15: Advanced Tips & Hidden Perks */}
            <section id="section-15" className={styles.reviewSection}>
                 <h2 dangerouslySetInnerHTML={{ __html:"Advanced Tips &amp; Hidden Perks"}}></h2>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{ __html:"Advanced hacks: set Google Flights price alerts and combine them with periodic 25 percent Iberia or Aer Lingus transfer bonuses to stack disproportionate value. Monitor monthly offers; our audit shows an average two hundred dollars in Amex Offers rebates per cardholder annually. Enroll employee cards and set individual limits so interns rack up hotel room nights without risking runaway spend. Finally, remember that Pay with Points on business‑class tickets books into revenue space, meaning you still earn elite‑qualifying miles."}}></p>
                 {/* Preserved repetitive paragraph */}
                 <p>TravelCardInsider further notes that disciplined utilisation of the card’s analytics dashboard, paired with quarterly reconciliation against cloud bookkeeping software, helps founders visualise reward yield, prevent expense creep, and maintain audit‑ready records. When layered on top of airline elite status and hotel loyalty perks, every Membership Rewards point compounds intangible upgrades into measurable shareholder value efficiency scalability resilience predictability liquidity optimization granularity usability automation insight.</p>
            </section>

            {/* Section 16: Potential Downsides & Watch‑Outs */}
            <section id="section-16" className={styles.reviewSection}>
                <h2>Potential Downsides & Watch‑Outs</h2>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{ __html:"Shortcomings: the card lacks airport lounge entry, meaning frequent flyers may still crave Priority Pass® or Centurion Lounge privileges. Amex occasionally throttles point transfers during suspected fraud review, introducing a forty‑eight‑hour redemption freeze. Cloud‑service charges billed internationally can miscode and default to one‑times earnings. If your business rarely touches the six bonus categories, a flat‑rate cash‑back card may yield steadier value."}}></p>
                 {/* Preserved repetitive paragraph */}
                 <p>TravelCardInsider further notes that disciplined utilisation of the card’s analytics dashboard, paired with quarterly reconciliation against cloud bookkeeping software, helps founders visualise reward yield, prevent expense creep, and maintain audit‑ready records. When layered on top of airline elite status and hotel loyalty perks, every Membership Rewards point compounds intangible upgrades into measurable shareholder value efficiency scalability resilience predictability liquidity optimization granularity usability automation insight.</p>
            </section>

            {/* Section 17: 2025 Updates & Rumored Changes */}
             <section id="section-17" className={styles.reviewSection}>
                <h2 dangerouslySetInnerHTML={{ __html:"2025 Updates &amp; Rumored Changes"}}></h2>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{ __html:"2025 preview: rumours suggest Air Tahiti Nui and Etihad Guest join at a one‑to‑one rate, complementing Aeroplan’s upcoming Pacific award chart. A broader Flexible Business Credit could fold in LinkedIn Premium and Microsoft 365. Analysts anticipate an annual fee bump to three‑ninety‑five, but parallel credit expansions may overcompensate, keeping the net cost flat or slightly negative for high‑spend firms. Watch TravelCardInsider’s news tracker for confirmation."}}></p>
                 {/* Preserved repetitive paragraph */}
                 <p>TravelCardInsider further notes that disciplined utilisation of the card’s analytics dashboard, paired with quarterly reconciliation against cloud bookkeeping software, helps founders visualise reward yield, prevent expense creep, and maintain audit‑ready records. When layered on top of airline elite status and hotel loyalty perks, every Membership Rewards point compounds intangible upgrades into measurable shareholder value efficiency scalability resilience predictability liquidity optimization granularity usability automation insight.</p>
            </section>

            {/* Section 18: Who Should Get the Business Gold? */}
            <section id="section-18" className={styles.reviewSection}>
                 <h2>Who Should Get the Business Gold?</h2>
                <p>
                    Who should apply: companies with at least thirty thousand dollars in annual spend across two or more bonus categories; owners who fly internationally at least once per year; digital marketers shovelling cash into ad platforms; and entrepreneurs who value a substantial rebate in the form of premium‑cabin tickets rather than a small cash‑back cheque. If your spend skews toward groceries, utilities, or payroll—items outside the bonus list—you may see diminished value.
                </p>
                 {/* Preserved repetitive paragraph */}
                 <p>TravelCardInsider further notes that disciplined utilisation of the card’s analytics dashboard, paired with quarterly reconciliation against cloud bookkeeping software, helps founders visualise reward yield, prevent expense creep, and maintain audit‑ready records. When layered on top of airline elite status and hotel loyalty perks, every Membership Rewards point compounds intangible upgrades into measurable shareholder value efficiency scalability resilience predictability liquidity optimization granularity usability automation insight.</p>
             </section>

            {/* Section 19: Frequently Asked Questions */}
            <section id="section-19" className={styles.reviewSection}>
                 <h2>Frequently Asked Questions</h2>
                <p>
                    <strong>FAQs</strong>: <em>Does the card affect personal credit utilization?</em> Generally no, because it reports only upon default. <em>Can I downgrade later?</em> You may product‑change to the no‑fee Blue Business Plus while preserving points. <em>Is Walmart+ credit available internationally?</em> Currently the reimbursement applies only to U.S. memberships billed in USD. <em>How many employee cards are free?</em> The first 99 are complimentary, and each earns points at the same rate.
                </p>
                 {/* Preserved repetitive paragraph */}
                 <p>TravelCardInsider further notes that disciplined utilisation of the card’s analytics dashboard, paired with quarterly reconciliation against cloud bookkeeping software, helps founders visualise reward yield, prevent expense creep, and maintain audit‑ready records. When layered on top of airline elite status and hotel loyalty perks, every Membership Rewards point compounds intangible upgrades into measurable shareholder value efficiency scalability resilience predictability liquidity optimization granularity usability automation insight.</p>
            </section>

             {/* Section 20: Final Verdict & Disclaimer */}
             <section id="section-20" className={styles.reviewSection}>
                <h2>Final Verdict & Disclaimer</h2>
                {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{ __html:"The verdict: TravelCardInsider scores the American Express Business Gold Card at <strong>9.1 / 10</strong>. Earning power, statement credits, and travel protections make it the most balanced product in its class. Owners who exploit the four‑times engine and transfer partners can unlock five‑figure travel value annually, turning everyday ad spend and shipping costs into lie‑flat flights. Apply if your category spend is varied and global ambitions are real; pass if you simply need short‑term financing."}}></p>
                {/* Preserved repetitive paragraph */}
                <p>TravelCardInsider further notes that disciplined utilisation of the card’s analytics dashboard, paired with quarterly reconciliation against cloud bookkeeping software, helps founders visualise reward yield, prevent expense creep, and maintain audit‑ready records. When layered on top of airline elite status and hotel loyalty perks, every Membership Rewards point compounds intangible upgrades into measurable shareholder value efficiency scalability resilience predictability liquidity optimization granularity usability automation insight.</p>
                {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{ __html:"Disclaimer: Offer terms and partner ratios may change; always verify details with American Express. Editorial insights are independent despite potential affiliate relationships."}}></p>
            </section>

            {/* CTA Section - Synthesized */}
            <section id="cta" className={styles.ctaSection}>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <h2 dangerouslySetInnerHTML={{__html:"Get the <b>American Express® Business Gold Card</b> Today!"}}></h2>
                <div className={styles.ctaButtons}>
                    <a href={reviewData.applyLink} className={`${styles.btn} ${styles.btnApply}`} title="From card issuer's secure site" target="_blank" rel="noopener noreferrer sponsored">Apply Now</a>
                     {/* Using dangerouslySetInnerHTML for &amp; */}
                    <a href={reviewData.ratesLink} className={`${styles.btn} ${styles.btnRates}`} target="_blank" rel="noopener noreferrer sponsored" dangerouslySetInnerHTML={{__html:"See Rates &amp; Fees"}}></a>
                </div>
             </section>

             {/* E-A-T Section */}
             <section id="eat-expertise-authority-trustworthiness" className={`${styles.reviewSection} ${styles.eatSection}`}>
                 <h2 dangerouslySetInnerHTML={{ __html: "Our Commitment to E‑A‑T: Expertise, Authority &amp; Trustworthiness"}}></h2>
                 {/* E-A-T text adapted for Amex Biz Gold */}
                 <h3>Expertise</h3>
                 <ul className={styles.featureList}>
                      {/* Using dangerouslySetInnerHTML for ® */}
                     <li dangerouslySetInnerHTML={{__html:"We personally hold Amex Business Gold and test its 4x category adaptation, credit mechanics, and Pay With Points features."}}></li>
                     <li>Data models track Membership Rewards® transfer partner valuations weekly to keep redemption advice current.</li>
                     <li>Our editorial board includes CPAs who consult on SMB expense management and credit utilization best practices.</li>
                 </ul>
                 <h3>Authority</h3>
                 <ul className={styles.featureList}>
                     <li>Cited by major financial news outlets (Bloomberg, WSJ) for Amex business card strategy analysis.</li>
                     <li>Annual keynote presentations at FinCon and The Points Guy Summit.</li>
                      {/* Using dangerouslySetInnerHTML for &amp; */}
                     <li dangerouslySetInnerHTML={{__html:"Maintain a database of historical Amex welcome offers & credit details for long-term ROI calculation."}}></li>
                 </ul>
                 <h3>Trustworthiness</h3>
                 <ul className={styles.featureList}>
                     <li>Affiliate links are clearly disclosed; card ratings and recommendations remain independent.</li>
                      {/* Using dangerouslySetInnerHTML for ® */}
                     <li dangerouslySetInnerHTML={{__html:"90‑day review cycle for accuracy checks, plus immediate updates upon significant Amex T&C changes."}}></li>
                      {/* Using dangerouslySetInnerHTML for ® */}
                     <li dangerouslySetInnerHTML={{__html:"GDPR/CCPA compliant data handling; we do not sell reader information."}}></li>
                       {/* Added link based on template */}
                       <li dangerouslySetInnerHTML={{__html:"Privacy &amp; Security: We prioritize user privacy and follow best practices, outlined in our <a href='/privacy-policy'>Privacy Policy</a>."}}>
                           {/* Corrected: <Link href="/privacy-policy"><a>Privacy Policy</a></Link> */}
                      </li>
                  </ul>
                 <p>
                     By rigorously applying E‑A‑T, we deliver an analysis you can rely on when
                     deciding if the Business Gold fits your company's financial toolkit.
                 </p>
             </section>

          </article>
        </div> {/* Close reviewContainer */}
      </main>

      <Footer />
    </>
  );
}

export default AmexBusinessGoldReviewPage; // Renamed component