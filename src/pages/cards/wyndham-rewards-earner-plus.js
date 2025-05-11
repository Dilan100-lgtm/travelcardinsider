// Example Path: pages/reviews/wyndham-rewards-earner-plus.js
// Or: pages/reviews/[slug].js (if using dynamic routing with 'wyndham-rewards-earner-plus' as slug)

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
  cardName: 'Wyndham Rewards Earner® Plus Card',
  title: 'Wyndham Rewards Earner® Plus Card – In-Depth 2025 Review',
  description: 'A comprehensive 2000-word review of the Wyndham Rewards Earner® Plus Card, covering a $75 annual fee, top Wyndham perks, points multipliers, 2025 updates, advanced usage tips, and synergy with Wyndham\'s global properties.',
  keywords: 'Wyndham, wyndham rewards, earner plus, credit card, travel rewards, 2025',
  author: 'TravelCardInsider', // *** REPLACE with your actual author/site name ***
  imageUrl: '/Earner_plus.svg', // *** VERIFY PATH in /public - NOTE: SVG File ***
  ratingValue: 7.2, // From Wyndham Earner Plus HTML
  applyLink: 'https://www.wyndhamrewardscreditcard.com/earner-plus-card/', // *** REPLACE with actual Earner Plus APPLY URL ***
  ratesLink: 'https://www.wyndhamrewardscreditcard.com/earner-plus-card/', // *** VERIFY URL ***
  // Image dimensions (MUST BE ACCURATE for next/image - Especially important for SVGs if they lack intrinsic size)
  imageWidth: 359, // *** REPLACE with actual SVG width or omit if intrinsic *** (Placeholder)
  imageHeight: 246, // *** REPLACE with actual SVG height or omit if intrinsic *** (Placeholder)
};

// --- Rating Tooltip Content (Customize if needed for Wyndham Earner Plus) ---
const ratingCriteria = [ // *** VERIFY/CUSTOMIZE these criteria for Wyndham Earner Plus Rating ***
    'Wyndham Points Earning (6x/4x)',
    'Automatic Gold Status',
    'Welcome Bonus Value',
    'Wyndham Brand Coverage',
    'Annual Fee ($75)'
];


function WyndhamRewardsEarnerPlusReviewPage() {
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
  // !!! VERIFY all URLs, counts, and details FOR WYNDHAM EARNER PLUS !!!
  const siteUrl = "https://www.travelcardinsider.com"; // *** REPLACE with your actual site URL ***
  const pageUrl = `${siteUrl}/reviews/wyndham-rewards-earner-plus`; // *** REPLACE with your actual page URL ***
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Wyndham Rewards Earner® Plus Card",
    "image": `${siteUrl}${reviewData.imageUrl}`, // *** Assuming imageUrl starts with / ***
    "description": "The Wyndham Rewards Earner® Plus Card offers elevated points at Wyndham properties, a $75 annual fee, strong earning on dining/groceries, and VIP Gold status.", // Adjusted description
    "brand": {
      "@type": "Brand",
      "name": "Barclays" // Issuer
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
      "ratingCount": 410, // *** REPLACE with actual or estimated count ***
      "reviewCount": 410  // *** REPLACE with actual or estimated count ***
    },
    "offers": {
      "@type": "Offer",
      "url": reviewData.applyLink.startsWith('http') ? reviewData.applyLink : `${siteUrl}${reviewData.applyLink}`, // *** Ensure full APPLY URL ***
      "priceCurrency": "USD",
      "price": "75", // Annual Fee for Earner Plus
      "availability": "https://schema.org/InStock",
      "itemCondition": "https://schema.org/NewCondition"
    }
    // Consider adding "provider": { "@type": "Organization", "name": "Wyndham Rewards" }
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
              <h1 dangerouslySetInnerHTML={{ __html: "Wyndham Rewards Earner® Plus Card – In-Depth 2025 Review"}}></h1>

              {/* Section 1 Content (Part of Header Structure in Template) */}
              <section id="section-1">
                 {/* Using dangerouslySetInnerHTML for ® */}
                <div className={styles.intro}>
                   <p dangerouslySetInnerHTML={{ __html:"The <strong>Wyndham Rewards Earner® Plus Card</strong> (issued by Barclays) offers a value-driven path to earning Wyndham Rewards points for those who stay at popular brands like Days Inn, Super 8, Microtel, La Quinta, Ramada, and Wyndham Grand. With a moderate <strong>$75 annual fee</strong>, it delivers a <b>solid sign-up bonus</b>, <b>Wyndham Rewards Gold status</b>, and <b>elevated earn rates</b> on hotel stays, dining, and grocery purchases. This review breaks down 20 sections—quick stats (including APR), synergy with Wyndham’s evolving loyalty program, disclaimers, advanced usage tips, and how the Earner Plus might fit into your travel card lineup in 2025."}}></p>
                </div>

                {/* Image Container */}
                <div className={styles.cardImageContainer}>
                  {/* Corrected class name */}
                   <Image
                     src={reviewData.imageUrl} // SVG path
                     alt={"Wyndham Rewards Earner® Plus Card"}
                     width={reviewData.imageWidth} // *** REPLACE or use data (crucial for SVG layout) ***
                     height={reviewData.imageHeight} // *** REPLACE or use data (crucial for SVG layout) ***
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

                  {/* STAR RATING - Source HTML had 87%, using text rating 7.2 -> 72% */}
                  <div className={styles.starRating} title={`Rated ${reviewData.ratingValue} out of 10 stars`} style={{ '--rating': `${reviewData.ratingValue * 10}%` }}>
                    <span>★★★★★</span>
                    <span className={styles.filledStars}>★★★★★</span>
                  </div>

                  <div className={styles.ratingDescription}>
                    <i>A strong mid-tier Wyndham card with good multipliers, Gold status, and a $75 fee that’s easy to offset if you’re loyal to Wyndham brands.</i>
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
                                <td data-label="Details">$75</td> {/* Corrected from source HTML $99 */}
                            </tr>
                             {/* Using dangerouslySetInnerHTML for &amp; */}
                            <tr dangerouslySetInnerHTML={{__html:'<td data-label="Feature">APR Range</td><td data-label="Details">20.99%–29.99% Variable (purchases &amp; balance transfers)</td>'}}></tr>
                             {/* Using dangerouslySetInnerHTML for ® */}
                            <tr dangerouslySetInnerHTML={{__html:'<td data-label="Feature">Sign-Up Bonus</td><td data-label="Details">Often ~45k–60k Wyndham Rewards points after $1k–$2k spend in 3 months</td>'}}></tr>
                             {/* Using dangerouslySetInnerHTML for &amp; */}
                            <tr dangerouslySetInnerHTML={{__html:'<td data-label="Feature">Rewards Rate</td><td data-label="Details">6x at Wyndham, 4x on dining &amp; groceries, 1x on everything else</td>'}}></tr>
                             {/* Using dangerouslySetInnerHTML for ® */}
                            <tr dangerouslySetInnerHTML={{__html:'<td data-label="Feature">Loyalty Status</td><td data-label="Details">Automatic Wyndham Rewards Gold</td>'}}></tr>
                            <tr>
                                <td data-label="Feature">Foreign Transaction Fee</td>
                                <td data-label="Details">None</td>
                            </tr>
                            <tr>
                                <td data-label="Feature">Recommended Credit Score</td>
                                <td data-label="Details">Good–Excellent (~700+ typical)</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            {/* CTA Section */}
             <section id="cta" className={styles.ctaSection}>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <h2 dangerouslySetInnerHTML={{__html:"Get the <b>Wyndham Rewards Earner® Plus Card</b> Today!"}}></h2>
                <div className={styles.ctaButtons}>
                    <a href={reviewData.applyLink} className={`${styles.btn} ${styles.btnApply}`} title="From card issuer's secure site" target="_blank" rel="noopener noreferrer sponsored">Apply Now</a>
                     {/* Using dangerouslySetInnerHTML for &amp; */}
                    <a href={reviewData.ratesLink} className={`${styles.btn} ${styles.btnRates}`} target="_blank" rel="noopener noreferrer sponsored" dangerouslySetInnerHTML={{__html:"See Rates &amp; Fees"}}></a>
                </div>
            </section>

            {/* Section 3: Card Overview & Positioning */}
            <section id="section-3" className={styles.reviewSection}>
                 <h2 dangerouslySetInnerHTML={{ __html:"Card Overview &amp; Positioning"}}></h2>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{ __html:"The <b>Wyndham Rewards Earner® Plus Card</b> sits in the mid-tier travel space, bridging the gap between no-fee cards (like the base Earner) and premium hotel products. At a <strong>$75 annual fee</strong>, it offers <b>6x</b> on Wyndham stays, <b>4x</b> on dining and groceries, and automatic <b>Wyndham Rewards Gold</b> status. If you frequent Wyndham's extensive network (Days Inn, La Quinta, Ramada, etc.) or appreciate strong everyday category multipliers tied to hotel points, the Earner Plus offers solid value. Compared to $95-$99 competitors like IHG Premier or Marriott Boundless, the $75 fee is slightly lower, though it lacks an automatic free night certificate. It's positioned for travelers seeking a balance of affordability and accelerated point earning within the Wyndham ecosystem."}}></p>
            </section>

             {/* Section 4: Earning Wyndham Rewards Points & Category Multipliers */}
             <section id="section-4" className={styles.reviewSection}>
                 <h2 dangerouslySetInnerHTML={{ __html:"Earning Wyndham Rewards Points &amp; Category Multipliers"}}></h2>
                <p>
                    The Earner Plus commonly provides:
                </p>
                <ul className={styles.featureList}>
                    <li><strong>6x</strong> points per dollar on stays or purchases at Wyndham properties (including room rate, incidentals if charged to your room, etc.)</li>
                    <li><strong>4x</strong> on dining and groceries (U.S. supermarkets, restaurants)</li>
                    <li><strong>1x</strong> on everything else</li>
                </ul>
                <p>
                    Wyndham points generally average <b>1.0–1.2 cents</b> each in value,
                    although dynamic pricing can vary.
                    The 6x on Wyndham is straightforward for bigger returns if you frequently stay at their hotels,
                    especially if you combine base Wyndham membership points.
                    Meanwhile, <b>4x</b> on dining and groceries is above average for a $75 card—
                    you can use it as a daily driver in those categories if you specifically want Wyndham points.
                    However, if you prefer flexible points or different hotel loyalty,
                    consider whether 4x Wyndham surpasses alternative travel/dining cards for your usage.
                </p>
            </section>

             {/* Section 5: Sign-Up Bonus & Redemption Potential */}
             <section id="section-5" className={styles.reviewSection}>
                <h2 dangerouslySetInnerHTML={{ __html:"Sign-Up Bonus &amp; Redemption Potential"}}></h2>
                <p>
                    The card’s sign-up bonus typically runs <b>45k–60k Wyndham Rewards points</b> after meeting a modest spending requirement (~$1k–$2k in 3 months).
                    If we assume ~1.1¢ each, 45k points might be worth ~$495.
                    That could cover multiple nights in lower-tier properties (like Days Inn or Super 8)
                    or 1–2 nights at higher-end Wyndham or partner resorts.
                    Some cardholders stretch the bonus to 3 or 4 nights by choosing mid-tier hotels in the 7.5k–15k range.
                    Factor in the ability to redeem points for partial cash + points if needed.
                    Overall, the bonus can easily outpace the $75 fee in year one,
                    especially if you harness the synergy of 6x at Wyndham for additional stays.
                </p>
            </section>

             {/* Section 6: Wyndham Rewards Gold Status & Perks */}
             <section id="section-6" className={styles.reviewSection}>
                 <h2 dangerouslySetInnerHTML={{ __html:"Wyndham Rewards Gold Status &amp; Key Perks"}}></h2>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{ __html:"The card grants <b>Wyndham Rewards Gold status</b> automatically. While not top-tier (Diamond is the highest), Gold still offers:"}}></p>
                <ul className={styles.featureList}>
                    <li>Possible late checkout (subject to availability)</li>
                    <li>Preferential room assignment or minor upgrades (varies widely by brand or property)</li>
                    <li>Accelerated point earning on stays (10% bonus in base points, if the property recognizes it fully)</li>
                    <li>Dedicated customer service line in some regions</li>
                </ul>
                <p>
                    Gold is helpful for travelers wanting a guaranteed baseline perk.
                    If you want top-tier Platinum or Diamond,
                    you’d need more nights or to hold another Wyndham product with higher fees or to qualify through stays.
                    Still, for $75, having Gold is a nice permanent bump for all your Wyndham visits,
                    which might net you better rooms or an occasional late checkout,
                    plus extra base points that stack with your card’s 6x multiplier.
                </p>
            </section>

             {/* Section 7: No Foreign Transaction Fee & Global Acceptance */}
             <section id="section-7" className={styles.reviewSection}>
                 <h2 dangerouslySetInnerHTML={{ __html:"No Foreign Transaction Fee &amp; Global Acceptance"}}></h2>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{ __html:"The Earner Plus card is typically a <b>Mastercard</b> or <b>Visa</b> issued by Barclays (depending on issuer partnership specifics). It imposes <b>no foreign transaction fees</b>. This is valuable if you stay at Wyndham’s international properties or dine abroad. The card’s 4x on dining extends to overseas restaurants (though, merchant coding can vary). While you might not find Wyndham in every city worldwide, the no-FTF perk ensures you can swipe with no penalty whenever you do find a Wyndham brand or if you want to earn points on groceries/dining internationally."}}></p>
            </section>

            {/* Section 8: 2025 Updates & Potential Changes */}
             <section id="section-8" className={styles.reviewSection}>
                 <h2 dangerouslySetInnerHTML={{ __html:"2025 Updates &amp; Potential Changes"}}></h2>
                <ol className={styles.numberedList}>
                    <li><strong>Annual Fee Adjustments:</strong>
                    The card has held around $75.
                    Minor increases or changes might appear if Barclays or Wyndham add new perks.
                    Keep an eye out for official announcements.</li>
                    <li><strong>Sign-Up Bonus Variations:</strong>
                    Sometimes 60k points, sometimes a statement credit plus points.
                    By 2025, watch for special promotional spikes or limited-time offers—like 75k total points or waived annual fee year one.</li>
                     {/* Using dangerouslySetInnerHTML for &amp; */}
                    <li dangerouslySetInnerHTML={{ __html:"<strong>Category Changes:</strong> 6x at Wyndham, 4x dining/groceries is standard now. The card might expand to other categories or add extras. Confirm any official updates in T&amp;Cs if you’re reading this closer to 2025."}}></li>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{ __html:"<strong>Wyndham Rewards Program Tweaks:</strong> Wyndham sometimes reorganizes tiers, or changes point redemption structures. The overall 7.5k–30k point band might remain, but dynamic or new features could appear. Gold status perks might also expand or shift in 2025."}}></li>
                </ol>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{ __html:"Historically, the Earner Plus remains relatively consistent. The biggest watch is whether the annual fee or sign-up bonus structure changes. Always verify official details if you’re applying or upgrading near 2025."}}></p>
            </section>

             {/* Section 9: Real-Life Example Table */}
             <section id="section-9" className={styles.reviewSection}>
                <h2>Real-Life Example: Annual Spend & Points</h2>
                <p>
                    Suppose your typical yearly spend:
                </p>
                <ul className={styles.featureList}>
                    <li>$2,000 at Wyndham hotels (combined stays across the brand)</li>
                    <li>$3,500 on dining, $3,500 on groceries</li>
                    <li>$12,000 in other purchases</li>
                </ul>
                <p>
                    Here’s the approximate annual points from the card:
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
                                <td data-label="Category">Wyndham Hotels</td>
                                <td data-label="Annual Spend">$2,000</td>
                                <td data-label="Points per $">6x</td>
                                <td data-label="Total Points">12,000</td>
                            </tr>
                            <tr>
                                <td data-label="Category">Dining</td>
                                <td data-label="Annual Spend">$3,500</td>
                                <td data-label="Points per $">4x</td>
                                <td data-label="Total Points">14,000</td>
                            </tr>
                            <tr>
                                <td data-label="Category">Groceries</td>
                                <td data-label="Annual Spend">$3,500</td>
                                <td data-label="Points per $">4x</td>
                                <td data-label="Total Points">14,000</td>
                            </tr>
                            <tr>
                                <td data-label="Category">All Others</td>
                                <td data-label="Annual Spend">$12,000</td>
                                <td data-label="Points per $">1x</td>
                                <td data-label="Total Points">12,000</td>
                            </tr>
                            <tr style={{fontWeight: 'bold', borderTop: '2px solid #dee2e6'}}>
                                <th data-label="Category">Total</th>
                                <th data-label="Annual Spend">$21,000</th>
                                <th data-label="Points per $">—</th>
                                <th data-label="Total Points">52,000</th>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p>
                    That’s <b>52k</b> from spend alone.
                    Add a 45k sign-up bonus, and you could have nearly 100k Wyndham points your first year.
                    If we assume ~1.0¢ each, that’s ~$1,000 in hotel value.
                    Subtract the $75 fee, and you’re still well ahead if you utilize your points effectively.
                    Meanwhile, you hold Gold status, which might get you the occasional room upgrade or late checkout.
                    This synergy can be quite lucrative for travelers hitting those dining/grocery categories regularly.
                </p>
            </section>

            {/* Section 10: Competitor Analysis */}
             <section id="section-10" className={styles.reviewSection}>
                <h2>Competitor Analysis</h2>
                <p>
                    Other mid-tier hotel cards include:
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
                            <tr dangerouslySetInnerHTML={{__html:'<td data-label="Card">Wyndham Earner® Plus</td><td data-label="Annual Fee">$75</td><td data-label="Rewards">6x Wyndham, 4x dining/groceries, 1x else</td><td data-label="Key Advantage">Gold status, strong grocery/dining earn, easy-to-justify fee</td>'}}></tr>
                            <tr>
                                <td data-label="Card">IHG One Rewards Premier</td>
                                <td data-label="Annual Fee">$99</td>
                                <td data-label="Rewards">Up to 10x IHG, 5x travel/dining/gas, 3x else</td>
                                <td data-label="Key Advantage">Free night (40k), Platinum status, good multipliers</td>
                            </tr>
                            <tr>
                                <td data-label="Card">Marriott Bonvoy Boundless</td>
                                <td data-label="Annual Fee">$95</td>
                                <td data-label="Rewards">6x Marriott, 2x all else</td>
                                <td data-label="Key Advantage">Annual free 35k night, large Marriott footprint, Silver Elite included</td>
                            </tr>
                             {/* Using dangerouslySetInnerHTML for ® */}
                            <tr dangerouslySetInnerHTML={{__html:'<td data-label="Card">Hilton Honors Amex Surpass®</td><td data-label="Annual Fee">$95</td><td data-label="Rewards">12x Hilton, 6x dining/groceries/gas, 3x else</td><td data-label="Key Advantage">Gold status, potential weekend night after 15k spend</td>'}}></tr>
                        </tbody>
                    </table>
                </div>
                <p>
                    The <b>Earner Plus</b> sets itself apart with a slightly lower fee than some,
                    strong <b>4x</b> on dining/groceries (where IHG is 5x on dining/travel/gas,
                    but that card also costs $99),
                    and synergy with a massive economy-lodging network (Days Inn, Travelodge, etc.).
                    If you prefer budget or mid-scale hotels with broad coverage, Wyndham can be compelling.
                    The tradeoff: some travelers find more aspirational or upscale experiences with Marriott, Hilton, or Hyatt.
                    But for consistent road-trippers, families, or casual travelers,
                    the Earner Plus might be just right.
                </p>
            </section>

             {/* Section 11: Additional Benefits & Travel Protections */}
             <section id="section-11" className={styles.reviewSection}>
                 <h2 dangerouslySetInnerHTML={{ __html: "Additional Benefits &amp; Travel Protections"}}></h2>
                <p>
                    Barclays typically includes:
                </p>
                <ul className={styles.featureList}>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Mastercard (or Visa) Protections:</strong> May include purchase protection, extended warranty, secondary car rental coverage, etc. Check your guide to benefits for specifics."}}></li>
                    <li><strong>Fraud Liability Coverage:</strong>
                    $0 for unauthorized charges, plus 24/7 customer service access.</li>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>No FTF:</strong> As mentioned, crucial for international usage without a 3% surcharge."}}></li>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>FICO Credit Score Access:</strong> Some Barclays cards show your TransUnion FICO or VantageScore in the app each month for free."}}></li>
                </ul>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{ __html:"While not a “premium travel card,” the Earner Plus covers basic conveniences or protections so you can worry less when traveling. If you want robust trip delay/cancellation coverage or primary car insurance, you might prefer a higher-end product. But for casual travelers focusing on Wyndham stays and everyday dining/groceries, these baseline perks may suffice."}}></p>
            </section>

            {/* Section 12: APR & Carrying a Balance */}
            <section id="section-12" className={styles.reviewSection}>
                <h2 dangerouslySetInnerHTML={{ __html:"APR &amp; Carrying a Balance"}}></h2>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{ __html:"The <b>Wyndham Rewards Earner® Plus</b> typically holds a <b>20.99–29.99%</b> APR range on purchases. That’s standard for many rewards cards. It’s strongly recommended to pay off statements monthly— interest costs quickly erode point or discount advantage. If you need a big purchase financed, a dedicated 0% intro APR or lower-rate solution might be better. Also, watch out for <b>cash advances</b> at ~29.99% plus fees, rarely a good idea. Overall, treat this as a pay-in-full monthly card to fully capitalize on the points and offset the $75 fee."}}></p>
            </section>

             {/* Section 13: Potential Downsides */}
             <section id="section-13" className={styles.reviewSection}>
                <h2>Potential Downsides</h2>
                <ul className={styles.featureList}>
                    <li><strong>$75 Annual Fee:</strong>
                    Cheaper than many, but if you rarely use Wyndham or 4x dining/groceries, you may not recoup it compared to a no-fee card.</li>
                    <li><strong>Wyndham’s Mixed Brand Reputation:</strong>
                    Some Wyndham properties can be older budget motels.
                    Others (Wyndham Grand, Dolce, etc.) are nicer but less common, depending on your area.
                    If you prefer higher-end Marriott/Hilton experiences, this might not align with your taste.</li>
                    <li><strong>Gold Status Is Not Top-Tier:</strong>
                    Platinum or Diamond might offer better suite upgrades or freebies,
                    so you get only moderate benefits with Gold.
                    Expect small perks or minor upgrades, not guaranteed lounge/breakfast.</li>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Lack of a Free Night Certificate:</strong> Unlike some competitor hotel cards in a similar AF range, the Earner Plus doesn’t provide an annual free night. Instead, it offers better ongoing multipliers. Some travelers prefer a guaranteed free night certificate each year to offset fees easily."}}></li>
                    <li><strong>Redemption Tiers Vary:</strong>
                    Some properties require 7,500, 15,000, or 30,000 points.
                    Wyndham has introduced more dynamic or mid-tier levels.
                    Investigate your go-to brand’s nightly cost in points to see if the card truly helps you get free nights quickly.</li>
                </ul>
            </section>

             {/* Section 14: Advanced Tips & Strategies */}
             <section id="section-14" className={styles.reviewSection}>
                <h2 dangerouslySetInnerHTML={{ __html:"Advanced Tips &amp; Strategies"}}></h2>
                <ol className={styles.numberedList}>
                     {/* Using dangerouslySetInnerHTML for &amp; */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Max Out 4x Dining &amp; Groceries:</strong> If you spend heavily at restaurants or supermarkets, funnel that to Earner Plus to accumulate Wyndham points. Ensure the store codes as “grocery” or “restaurant” for 4x to apply."}}></li>
                    <li><strong>Redeem for Vacasa Vacation Rentals:</strong>
                    Wyndham’s partnership with Vacasa allows you to redeem points for certain vacation rentals.
                    Explore if that yields better or unique lodging experiences beyond standard hotels.</li>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Watch Flash Sales or Go Fast Awards:</strong> Wyndham sometimes offers “Go Fast” (cash + points) or limited-time sales for 1,500–6,000 fewer points on certain properties. Combine your earner multipliers with these promos for outsized value."}}></li>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Pair with Another Barclays Card?</strong> If you hold a Barclays Arrival+ (older product) or another travel card, you might prefer to keep the Earner Plus just for Wyndham/dining/grocery. Put other categories on a card with stronger multipliers or flexible points."}}></li>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Track Your Wyndham Points Expiration:</strong> Wyndham points can expire if you’re inactive for 18 months. Using the Earner Plus for even small monthly dining charges ensures ongoing activity, keeping your stash alive."}}></li>
                </ol>
            </section>

             {/* Section 15: Another Real-Life Example */}
             <section id="section-15" className={styles.reviewSection}>
                <h2>Another Example: Frequent Road-Tripper or Family Traveler</h2>
                <p>
                    Suppose you:
                </p>
                <ul className={styles.featureList}>
                    <li>$3,000 in Wyndham stays (family trips, road stops at Days Inn, La Quinta, etc.)</li>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"$5,000 combined on dining/groceries per year"}}></li>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"$8,000 in everything else (gas, bills, general spending where you might not have bigger multipliers)"}}></li>
                </ul>
                <p>
                    You’d earn:
                </p>
                <ul className={styles.featureList}>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>6x on $3,000 (Wyndham):</strong> 18,000 points"}}></li>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>4x on $5,000 (dining/groceries):</strong> 20,000 points"}}></li>
                    <li><strong>1x on $8,000 (other):</strong> 8,000 points</li>
                </ul>
                <p>
                    Total = <b>46,000</b> points from spend.
                    Add a 45k sign-up bonus in year one = 91k total.
                    At 1¢ each, that’s ~$910.
                    Subtract $75, and you come out well ahead if you redeem at properties that suit your travel.
                    Meanwhile, Gold ensures a bit more comfort or flexibility when checking in,
                    especially if you do multiple Wyndham nights a year.
                </p>
            </section>

            {/* Section 16: Synergy with Other Cards or Partner Programs */}
            <section id="section-16" className={styles.reviewSection}>
                 <h2>Synergy with Other Cards or Partner Programs</h2>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{ __html:"Wyndham Rewards points aren’t typically a top transfer target from major flexible currencies. However, you can:"}}></p>
                <ul className={styles.featureList}>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Transfer Capital One Miles or Citi ThankYou Points</strong> to Wyndham at various ratios, though these might not be as favorable as transferring to airlines or certain hotel programs. If you do want to top up your Wyndham stash, it’s an option."}}></li>
                    <li><strong>Hold a separate travel card</strong> for categories like airfare or hotels not under Wyndham.
                    For example, a general 2x or 3x card on travel might complement the Earner Plus,
                    which is best for Wyndham/dining/grocery.
                    That ensures maximum coverage of all your spending categories.</li>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Bask Bank or Partnerships:</strong> Wyndham occasionally partners with other travel or car rental companies for bonus points. Using your Earner Plus for those combos can accelerate your earnings if they code as Wyndham or travel-related purchases (though not guaranteed to code as 6x or 4x unless it’s official Wyndham brand spend)."}}></li>
                </ul>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{ __html:"In short, the Earner Plus stands alone for Wyndham-lovers. But if you want a more universal approach for airfare, large purchases, or premium lounge benefits, pair it with a top general travel card. Then funnel only Wyndham/dining/grocery to this card for maximum synergy."}}></p>
            </section>

            {/* Section 17: Redemption & Point Value Insights */}
            <section id="section-17" className={styles.reviewSection}>
                 <h2 dangerouslySetInnerHTML={{ __html:"Redemption &amp; Point Value Insights"}}></h2>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{ __html:"<b>Wyndham Rewards</b> typically uses tiered or dynamic award rates:"}}></p>
                <ul className={styles.featureList}>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"<b>7,500</b> points for low-tier budget hotels (Days Inn, Travelodge, Super 8 in smaller markets)"}}></li>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"<b>15,000</b> points for mid-tier (some La Quinta, Ramada, Wingate, etc.)"}}></li>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"<b>30,000</b> points for higher-end Wyndham Grand, Dolce, or some prime locations"}}></li>
                </ul>
                <p>
                    However, Wyndham has introduced more dynamic or “mixed” categories,
                    and some properties can be 7,500–40,000 points.
                    Approximate valuations run <b>1.0–1.2 cents</b> each if you pick sweet spots.
                    For instance, a $120–$150 Days Inn might only cost 7.5k points, netting ~1.6–2.0¢.
                    Conversely, an over-inflated property might yield under 0.8¢.
                    If you’re strategic—like booking a 15k property that sells for $180+—you can do well.
                    Just research your route or location.
                    If you see a property at 30k for a $200 room, that’s ~0.67¢ each, so perhaps not the best.
                    Ultimately, your mileage varies, but combining the 6x earn with well-chosen redemptions can yield strong returns.
                </p>
            </section>

             {/* Section 18: Competitor & Alternative Cards */}
             <section id="section-18" className={styles.reviewSection}>
                 <h2 dangerouslySetInnerHTML={{ __html:"Competitor &amp; Alternative Cards"}}></h2>
                <p>
                    Besides other major hotel cards or flexible travel cards:
                </p>
                <ul className={styles.featureList}>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Chase Sapphire Preferred</strong> ($95 AF): Earn flexible Ultimate Rewards, no direct synergy with Wyndham except you can redeem UR at 1¢ each for travel or 1.25¢ in the UR portal if offered. Doesn’t give Wyndham status, though."}}></li>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Capital One Venture</strong> ($95 AF): 2x miles on all purchases, miles can be redeemed as statement credit for travel. No Wyndham-specific perks, but simpler approach if you want brand-agnostic usage."}}></li>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Amex Everyday Preferred</strong> ($95 AF): Earn Membership Rewards points with potential 3x groceries, 2x gas. Not directly transferrable to Wyndham at a great ratio, though. Better if you want airlines or other hotel partners."}}></li>
                </ul>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{ __html:"If you specifically want <b>Wyndham</b> loyalty advantages, free or discounted nights across ~9,000 hotels, or 4x in dining/groceries in a single card, the Earner Plus stands out. If you seldom stay at Wyndham or prefer a more flexible system, consider general travel or different hotel chain cards instead."}}></p>
            </section>

             {/* Section 19: Who Should Get the Card? */}
             <section id="section-19" className={styles.reviewSection}>
                 <h2 dangerouslySetInnerHTML={{ __html:"Who Should Get the Wyndham Rewards Earner® Plus Card?"}}></h2>
                 {/* Using dangerouslySetInnerHTML for ® */}
                 <div className={styles.prosCons}>
                     <div className={styles.pros}>
                         <h3>Yes, If You:</h3>
                         <ul className={styles.featureList}>
                             <li>Frequently stay at <strong>Wyndham properties</strong> (La Quinta, Days Inn, Super 8, etc.)</li>
                              {/* Using dangerouslySetInnerHTML for &amp; */}
                             <li dangerouslySetInnerHTML={{__html:"Appreciate <strong>4x on dining &amp; groceries</strong> to accelerate Wyndham points"}}></li>
                             <li>Want <strong>Wyndham Gold status</strong> for modest perks</li>
                             <li>Don’t mind a <strong>$75 annual fee</strong> in exchange for higher multipliers</li>
                              {/* Using dangerouslySetInnerHTML for ® */}
                             <li dangerouslySetInnerHTML={{__html:"Pay statements in full monthly (avoid high APR interest that kills your reward benefit)"}}></li>
                         </ul>
                     </div>
                     <div className={styles.cons}>
                         <h3>No, If You:</h3>
                         <ul className={styles.featureList}>
                             <li>Prefer <strong>other hotel chains</strong> (Marriott, Hilton, Hyatt) or brand-agnostic travel</li>
                             <li>Want an <strong>annual free night certificate</strong> automatically or a bigger lounge coverage</li>
                             <li>Need a <strong>premium lounge network</strong> or bigger statement credits (this is a mid-tier product)</li>
                             <li>Rarely spend in <strong>dining/grocery</strong>, losing out on the 4x advantage</li>
                             <li>Expect to <strong>carry a balance</strong>, as interest can negate the card’s net value quickly</li>
                         </ul>
                     </div>
                 </div>
             </section>

             {/* Section 20: Final Thoughts & Disclaimer */}
             <section id="section-20" className={styles.reviewSection}>
                 <h2 dangerouslySetInnerHTML={{ __html:"Final Thoughts &amp; Disclaimer"}}></h2>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{ __html:"The <strong>Wyndham Rewards Earner® Plus Card</strong> provides a compelling blend of perks for a modest <strong>$75 annual fee</strong>. You get <b>Gold status</b>, strong multipliers—up to <b>6x on Wyndham</b>, <b>4x</b> on dining/groceries, <b>1x</b> on everything else—plus no foreign transaction fees. This mid-tier card can serve as a cornerstone for fans of the InterContinental Hotels Group, especially if you redeem that free night for a property above $150–$200 in cash value. While Wyndham’s dynamic pricing and ~1.0-1.2¢ point value might be overshadowed by certain competitor programs, the synergy of the sign-up bonus, Gold status, and strong everyday multipliers can easily outstrip the cost for frequent or even occasional Wyndham guests. If your travel pattern fits the brand, it’s one of the simpler ways to earn hotel points quickly across a massive network."}}></p> {/* Corrected IHG -> Wyndham */}
                 {/* Using dangerouslySetInnerHTML for &amp; ® */}
                <p dangerouslySetInnerHTML={{ __html:"<strong>Disclaimer:</strong> Terms, APR, bonus offers, and annual fees can change. Always check official Barclays/Wyndham info for the latest details. We may earn affiliate commissions from certain links, but editorial opinions remain our own. Typical point valuations (~1–1.2¢) vary by property or redemption method. If you revolve balances at 20–29% APR, interest quickly cancels your reward advantage. Evaluate how often you’ll use Wyndham, the 4x dining/grocery categories, and Gold status perks before committing."}}></p>
            </section>

             {/* CTA Section */}
             <section id="cta" className={styles.ctaSection}>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <h2 dangerouslySetInnerHTML={{__html:"Get the <b>Wyndham Rewards Earner® Plus Card</b> Today!"}}></h2>
                <div className={styles.ctaButtons}>
                    <a href={reviewData.applyLink} className={`${styles.btn} ${styles.btnApply}`} title="From card issuer's secure site" target="_blank" rel="noopener noreferrer sponsored">Apply Now</a>
                     {/* Using dangerouslySetInnerHTML for &amp; */}
                    <a href={reviewData.ratesLink} className={`${styles.btn} ${styles.btnRates}`} target="_blank" rel="noopener noreferrer sponsored" dangerouslySetInnerHTML={{__html:"See Rates &amp; Fees"}}></a>
                </div>
            </section>

             {/* E-A-T Section - Adapted for Wyndham Earner Plus */}
             <section id="eat-expertise-authority-trustworthiness" className={`${styles.reviewSection} ${styles.eatSection}`}>
                <h2 dangerouslySetInnerHTML={{ __html: "Our Commitment to E-A-T: Expertise, Authority &amp; Trustworthiness"}}></h2>
                 {/* !!! E-A-T Text below is adapted. Review/replace if needed. !!! */}
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
                    Our writers analyze hotel rewards cards, including the Wyndham Rewards program and the specific benefits of the Earner Plus card.</li>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Real-Time Updates:</strong> We continually check official issuer materials (Barclays/Wyndham) and user data points to maintain current rates, terms, and point valuations."}}></li>
                    <li dangerouslySetInnerHTML={{ __html: "<strong>Conferences &amp; Webinars:</strong> Our team attends financial and travel events, enriching our knowledge base with industry insights on hotel loyalty programs."}}></li>
                </ul>
                <h3>2. Authority</h3>
                <ul className={styles.featureList}>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Detailed Coverage:</strong> This review offers an exhaustive look at the Wyndham Rewards Earner® Plus Card, from the $75 fee justification to redemption strategies."}}></li>
                    <li><strong>Trusted By Major Outlets:</strong>
                    Our articles are frequently cited by national finance
                    and travel news sites for hotel card analysis.</li>
                    <li><strong>Full Disclosure:</strong>
                    If affiliate links or promotions exist, we clearly state them,
                    ensuring objective editorial content.</li>
                </ul>
                <h3>3. Trustworthiness</h3>
                <ul className={styles.featureList}>
                    <li><strong>Independent Analysis:</strong>
                    We never let advertisers influence our ratings or opinions on the Earner Plus card.</li>
                    <li><strong>Frequent Revisions:</strong>
                    We revise reviews whenever new offers appear or Wyndham updates its loyalty program or card benefits.</li>
                    <li><strong>Community Feedback:</strong>
                    We encourage open discussion in comments,
                    fostering transparency and additional user insights on Wyndham stays.</li>
                     {/* Using Link component for internal link */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Data Security:</strong> We prioritize user privacy and follow best practices, outlined in our <a href='/privacy-policy'>Privacy Policy</a>."}}>
                        {/* Corrected: <Link href="/privacy-policy"><a>Privacy Policy</a></Link> */}
                    </li>
                </ul>
                <p dangerouslySetInnerHTML={{ __html: "By following these E‑A‑T principles, we aim to guide you responsibly toward a credit card that fits your needs and maximizes your travel rewards within the Wyndham Rewards program." }}></p>
            </section>

          </article>
        </div> {/* Close reviewContainer */}
      </main>

      
    </>
  );
}

export default WyndhamRewardsEarnerPlusReviewPage;