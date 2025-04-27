// Example Path: pages/reviews/delta-skymiles-blue.js
// Or: pages/reviews/[slug].js (if using dynamic routing with 'delta-skymiles-blue' as slug)

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
  cardName: 'Delta SkyMiles® Blue American Express Card',
  title: 'Delta SkyMiles® Blue American Express Card – In-Depth 2025 Review',
  description: 'A 2000-word review of the Delta SkyMiles® Blue American Express Card, focusing on 2x miles on Delta and dining, no annual fee, 2025 updates, pros, cons, and tips for maximizing your SkyMiles.',
  keywords: 'Delta, SkyMiles, Blue, American Express, no annual fee, airline miles, 2025 updates',
  author: 'TravelCardInsider', // *** REPLACE with your actual author/site name ***
  imageUrl: '/NUS000000267_480x304_straight_withname.webp', // *** VERIFY PATH in /public ***
  ratingValue: 6.3, // From Delta Blue HTML
  applyLink: 'https://www.americanexpress.com/us/credit-cards/card/delta-skymiles-blue-american-express-card/', // *** REPLACE with actual Delta Blue APPLY URL ***
  ratesLink: 'https://www.americanexpress.com/us/credit-cards/card-application/apply/prospect/terms/delta-skymiles-blue-american-express-card/25330-10-0#FeeTable', // *** VERIFY URL ***
  // Image dimensions (MUST BE ACCURATE for next/image) - Guessed from filename
  imageWidth: 480, // *** REPLACE with actual image width ***
  imageHeight: 304, // *** REPLACE with actual image height ***
};

// --- Rating Tooltip Content (Customize if needed for Delta Blue) ---
const ratingCriteria = [ // *** VERIFY/CUSTOMIZE these criteria for Delta Blue Rating ***
    'No Annual Fee',
    'Dining & Delta Rewards (2x)',
    'No Foreign Transaction Fee',
    'Welcome Bonus (Small)',
    'Lack of Travel Perks (Bags/Lounge/Status)',
];

function DeltaSkyMilesBlueReviewPage() {
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
  // !!! VERIFY all URLs, counts, and details FOR DELTA BLUE !!!
  const siteUrl = "https://www.travelcardinsider.com"; // *** REPLACE with your actual site URL ***
  const pageUrl = `${siteUrl}/reviews/delta-skymiles-blue`; // *** REPLACE with your actual page URL ***
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Delta SkyMiles® Blue American Express Card",
    "image": `${siteUrl}${reviewData.imageUrl}`, // *** Assuming imageUrl starts with / ***
    "description": "The Delta SkyMiles® Blue Amex Card offers 2x miles on Delta and dining, no annual fee, and a simple approach to earning SkyMiles.", // Adjusted description
    "brand": {
      "@type": "Brand",
      "name": "American Express" // Issuer
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
      "ratingCount": 280, // *** REPLACE with actual or estimated count ***
      "reviewCount": 280  // *** REPLACE with actual or estimated count ***
    },
    "offers": {
      "@type": "Offer",
      "url": reviewData.applyLink.startsWith('http') ? reviewData.applyLink : `${siteUrl}${reviewData.applyLink}`, // *** Ensure full APPLY URL ***
      "priceCurrency": "USD",
      "price": "0", // Annual Fee for Delta Blue
      "availability": "https://schema.org/InStock",
      "itemCondition": "https://schema.org/NewCondition"
    }
    // Consider adding "provider": { "@type": "Organization", "name": "Delta Air Lines" }
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
              <h1 dangerouslySetInnerHTML={{ __html: "Delta SkyMiles® Blue American Express Card – In-Depth 2025 Review"}}></h1>

              {/* Section 1 Content (Part of Header Structure in Template) */}
              <section id="section-1">
                 {/* Using dangerouslySetInnerHTML for ® */}
                <div className={styles.intro}>
                   <p dangerouslySetInnerHTML={{ __html:"The <strong>Delta SkyMiles® Blue American Express Card</strong> stands out as a <strong>no-annual-fee</strong> gateway for anyone wanting to earn Delta miles on everyday purchases, especially dining. With <strong>2x miles</strong> on Delta and dining, plus no foreign transaction fees, it’s a straightforward entry to the SkyMiles ecosystem in 2025. This review covers the card’s features, rewards, sign-up bonus, travel benefits, and potential downsides, especially if you’re a casual Delta flyer who prefers to skip annual fees."}}></p>
                </div>

                {/* Image Container */}
                <div className={styles.cardImageContainer}>
                  {/* Corrected class name */}
                   <Image
                     src={reviewData.imageUrl}
                     alt={"Delta SkyMiles® Blue American Express Card"}
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
                    {/* Using dangerouslySetInnerHTML for &amp; */}
                    <i dangerouslySetInnerHTML={{__html:"A no-fee Delta card with 2x on dining &amp; Delta flights—great for occasional travelers wanting simpler SkyMiles accumulation."}}></i>
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
                                <td data-label="Details">$0</td>
                            </tr>
                            <tr>
                                <td data-label="Feature">APR</td>
                                <td data-label="Details" dangerouslySetInnerHTML={{__html:"20.74%–29.74% Variable"}}></td>
                            </tr>
                             {/* Using dangerouslySetInnerHTML for ® */}
                            <tr dangerouslySetInnerHTML={{__html:'<td data-label="Feature">Sign-Up Bonus</td><td data-label="Details">Often ~10k–15k SkyMiles after $500–$1,000 spend in 3 months (offer varies)</td>'}}></tr>
                            {/* Using dangerouslySetInnerHTML for ® &amp; */}
                            <tr dangerouslySetInnerHTML={{__html:'<td data-label="Feature">Rewards Rate</td><td data-label="Details">2x on Delta purchases &amp; dining worldwide, 1x on all else</td>'}}></tr>
                            <tr>
                                <td data-label="Feature">Foreign Transaction Fee</td>
                                <td data-label="Details">None</td>
                            </tr>
                            <tr>
                                <td data-label="Feature">Travel Benefits</td>
                                <td data-label="Details">20% back on in-flight Delta purchases, basic Amex travel protections</td>
                            </tr>
                             {/* Using dangerouslySetInnerHTML for &amp; */}
                            <tr dangerouslySetInnerHTML={{__html:'<td data-label="Feature">Intro APR Offer</td><td data-label="Details">Occasionally 0% for 12 months on purchases (check T&amp;Cs)</td>'}}></tr>
                            <tr>
                                <td data-label="Feature">Recommended Credit Score</td>
                                <td data-label="Details">Good–excellent (700+ FICO typically)</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

             {/* CTA Section */}
             <section id="cta" className={styles.ctaSection}>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <h2 dangerouslySetInnerHTML={{__html:"Get the <b>Delta SkyMiles® Blue American Express Card</b> Today!"}}></h2>
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
                <p dangerouslySetInnerHTML={{ __html:"The <strong>Delta SkyMiles® Blue Amex</strong> is the entry-level Delta card with <strong>no annual fee</strong>, focusing on <strong>2x</strong> miles in Delta flights and global dining. You don’t get free checked bags or lounge passes—that’s for the Gold, Platinum, or Reserve versions. Still, it’s an easy way to accumulate miles if you dine out often or buy Delta flights occasionally. The sign-up bonus is modest— typically around 10k–15k miles— but easier to achieve with a low spend threshold. If you want a no-fee introduction to SkyMiles, or a backup card for Delta and dining with no foreign fees, Blue might be your 2025 solution."}}></p>
            </section>

             {/* Section 4: Earning SkyMiles */}
             <section id="section-4" className={styles.reviewSection}>
                <h2 dangerouslySetInnerHTML={{ __html:"Earning SkyMiles on Dining &amp; Delta"}}></h2>
                <p>
                    The main appeal is <strong>2x miles</strong> on:
                </p>
                <ul className={styles.featureList}>
                    <li><strong>Delta flights</strong> and related purchases (tickets, seat upgrades, in-flight items coded as Delta, etc.)</li>
                    <li><strong>Worldwide Dining</strong> (restaurants, fast food, coffee shops, takeout, and possibly some delivery services if coded properly)</li>
                    <li><strong>1x miles on everything else</strong></li>
                </ul>
                <p>
                    That’s a straightforward structure.
                    If you dine out frequently or occasionally buy Delta tickets,
                    it can yield a steady flow of SkyMiles.
                    Meanwhile, all other spend is 1x.
                    If you want bigger multipliers for groceries/travel, consider a different Amex or Delta product.
                    But for a no-fee, 2x on dining plus Delta is a decent baseline for casual flyers.
                </p>
            </section>

            {/* Section 5: Redeeming Your Delta Miles */}
             <section id="section-5" className={styles.reviewSection}>
                <h2>Redeeming Your Delta SkyMiles</h2>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{ __html:"All miles earned go into your <strong>Delta SkyMiles®</strong> account, where you can redeem for award flights on Delta or partner airlines in SkyTeam (like Air France, KLM). Key redemption methods:"}}></p>
                <ol className={styles.numberedList}>
                    <li><strong>Delta Award Flights:</strong>
                    Domestic or international routes at variable mileage rates.
                    No official chart, so watch for “Flash Sales” or everyday award rates.
                    A short domestic route might be 10k–15k miles one-way, but it can vary widely.</li>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Partner Redemptions:</strong> Book flights on Air France/KLM, Virgin Atlantic, etc. through Delta.com with your miles. Values can differ; always compare cash vs. miles to see if it’s a good deal."}}></li>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Upgrades/Other Options:</strong> You can redeem miles for seat upgrades or even experiences via SkyMiles marketplace, but flight awards typically yield the best value."}}></li>
                </ol>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{ __html:"There’s no direct synergy with other Amex Membership Rewards points (like from an Amex Gold/Platinum) because your card is co-branded. The miles deposit directly into SkyMiles. If you want more advanced transfer partner possibilities, consider an Amex charge card. But for a no-fee airline co-brand, Blue is among the simplest ways to earn actual Delta miles."}}></p>
            </section>

             {/* Section 6: Sign-Up Bonus & Intro Offers */}
             <section id="section-6" className={styles.reviewSection}>
                <h2 dangerouslySetInnerHTML={{ __html:"Sign-Up Bonus &amp; Intro Offers"}}></h2>
                {/* Using dangerouslySetInnerHTML for &amp; */}
                <p dangerouslySetInnerHTML={{ __html:"The bonus is typically <strong>10,000–15,000 miles</strong> after spending around $500–$1,000 in your first 3 months. Occasionally, you might see a higher 20k–25k miles promo, but that’s rarer. While small compared to the 40k–70k or more on Delta Gold/Platinum, it’s still a free chunk of miles for minimal spend—and no annual fee. Some offers also give an <strong>intro 0% APR</strong> for 12 months on purchases, letting you spread out a bigger purchase interest-free. Check the T&amp;Cs each year for specifics."}}></p>
            </section>

             {/* Section 7: No Foreign Transaction Fees */}
             <section id="section-7" className={styles.reviewSection}>
                <h2>No Foreign Transaction Fees</h2>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{ __html:"A big plus for <strong>Delta SkyMiles® Blue</strong> is <strong>no FTF</strong>— relatively rare for a no-fee airline card. That means you can dine overseas or buy from foreign websites without incurring a 2.7–3% fee. This synergy is especially sweet if you travel internationally with Delta or just want a fallback card for foreign transactions. Earning 2x miles on dining abroad is a nice perk, especially for frequent travelers or study-abroad scenarios. Note that acceptance of Amex outside the U.S. can be less widespread than Visa/Mastercard, but in major tourist cities, it’s typically feasible."}}></p>
            </section>

             {/* Section 8: 2025 Updates & Potential Changes */}
             <section id="section-8" className={styles.reviewSection}>
                <h2 dangerouslySetInnerHTML={{ __html:"2025 Updates &amp; Potential Changes"}}></h2>
                <ol className={styles.numberedList}>
                    <li><strong>Possible Sign-Up Bonus Shifts:</strong>
                    Amex might raise the bonus to 20k or 25k miles temporarily, or run targeted offers for existing customers.</li>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Category Tweaks:</strong> 2x on dining is likely stable, but they could add limited-time 2x on groceries or transit. Keep an eye on official updates."}}></li>
                     {/* Using dangerouslySetInnerHTML for &amp; */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Amex Offers &amp; Promotions:</strong> Cardmembers can access rotating Amex Offers for statement credits or bonus miles. 2025 might bring more airline or dining tie-ins."}}></li>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Delta SkyMiles Program Changes:</strong> Delta might revamp award charts, MQD/MQM thresholds, or expand partner redemptions. Keep track of official Delta announcements for how your miles can be used or valued."}}></li>
                </ol>
                <p>
                    Always confirm real-time details on AmericanExpress.com or Delta.com
                    if a new bonus or category emerges that might alter your usage strategy.
                </p>
            </section>

            {/* Section 9: Real-Life Example Table */}
            <section id="section-9" className={styles.reviewSection}>
                 <h2 dangerouslySetInnerHTML={{ __html:"Real-Life Example: Annual Spend &amp; Miles"}}></h2>
                <p>
                    Assume you spend $2,000 on Delta flights yearly, $4,000 dining (including overseas trips),
                    and $7,000 on everything else. Let’s see your annual miles:
                </p>
                <div className={styles.tableContainer}>
                    <table className={styles.statsTable}>
                        <thead>
                            <tr>
                                <th>Category</th>
                                <th>Annual Spend</th>
                                <th>Miles per $</th>
                                <th>Miles Earned</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td data-label="Category">Delta Flights</td>
                                <td data-label="Annual Spend">$2,000</td>
                                <td data-label="Miles per $">2x</td>
                                <td data-label="Miles Earned">4,000</td>
                            </tr>
                            <tr>
                                <td data-label="Category">Dining</td>
                                <td data-label="Annual Spend">$4,000</td>
                                <td data-label="Miles per $">2x</td>
                                <td data-label="Miles Earned">8,000</td>
                            </tr>
                            <tr>
                                <td data-label="Category">All Other</td>
                                <td data-label="Annual Spend">$7,000</td>
                                <td data-label="Miles per $">1x</td>
                                <td data-label="Miles Earned">7,000</td>
                            </tr>
                            <tr style={{fontWeight: 'bold', borderTop: '2px solid #dee2e6'}}>
                                <th data-label="Category">Total</th>
                                <th data-label="Annual Spend">$13,000</th>
                                <th data-label="Miles per $">—</th>
                                <th data-label="Total Points">19,000</th>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p>
                    That’s <strong>19,000 miles</strong> from normal spend.
                    Add a sign-up bonus (say 15k for $1,000 spend) = <strong>34,000 total</strong>.
                    Enough for a round-trip domestic flight at a saver level or partial coverage of a bigger trip.
                    And no annual fee.
                    This is quite appealing for moderate Delta flyers who frequent restaurants or coffee shops.
                </p>
            </section>

             {/* Section 10: Competitor Analysis */}
             <section id="section-10" className={styles.reviewSection}>
                <h2>Competitor Analysis</h2>
                {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{__html:"How does <strong>Delta SkyMiles® Blue</strong> compare to other no-fee airline or travel cards?"}}></p>
                 <div className={styles.tableContainer}>
                     <table className={styles.statsTable}>
                        <thead>
                            <tr>
                                <th>Card</th>
                                <th>Annual Fee</th>
                                <th>Rewards Structure</th>
                                <th>Key Advantage</th>
                            </tr>
                        </thead>
                        <tbody>
                             {/* Using dangerouslySetInnerHTML for ® &amp; */}
                            <tr dangerouslySetInnerHTML={{__html:'<td data-label="Card">Delta SkyMiles® Blue</td><td data-label="Annual Fee">$0</td><td data-label="Rewards Structure">2x on Delta &amp; dining, 1x else</td><td data-label="Key Advantage">No annual fee, no FTF, easy dining synergy</td>'}}></tr>
                             {/* Using dangerouslySetInnerHTML for ℠ */}
                            <tr dangerouslySetInnerHTML={{__html:'<td data-label="Card">United Gateway℠</td><td data-label="Annual Fee">$0</td><td data-label="Rewards Structure">2x United, gas, transit, streaming; 1x else</td><td data-label="Key Advantage">Multiple 2x categories, no annual fee, also no FTF</td>'}}></tr>
                            <tr>
                                <td data-label="Card">JetBlue Card</td>
                                <td data-label="Annual Fee">$0</td>
                                <td data-label="Rewards Structure">3x JetBlue, 2x dining/groceries, 1x else</td>
                                <td data-label="Key Advantage">Strong grocery/dining multiplier, no fee, brand loyalty to JetBlue</td>
                            </tr>
                             {/* Using dangerouslySetInnerHTML for ® */}
                            <tr dangerouslySetInnerHTML={{__html:'<td data-label="Card">Capital One SavorOne®</td><td data-label="Annual Fee">$0</td><td data-label="Rewards Structure">3% dining, entertainment, groceries; 1% else</td><td data-label="Key Advantage">Broad 3% categories, no FTF, but no direct airline miles</td>'}}></tr>
                        </tbody>
                    </table>
                </div>
                <p>
                    <strong>Blue</strong> is perfect if you specifically want Delta miles at no cost,
                    focusing on 2x for Delta flights plus global dining.
                    If you prefer United or JetBlue, or want broad travel rewards, you’d pick a different product.
                    For general non-airline spending, SavorOne might outdo Blue’s 2x with a 3% structure.
                    But if your heart’s set on SkyMiles and no annual fee,
                    the Delta Blue stands out.
                </p>
            </section>

             {/* Section 11: Pairing with Other Amex or Delta Cards */}
             <section id="section-11" className={styles.reviewSection}>
                <h2>Pairing with Other Amex or Delta Cards</h2>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{ __html:"Some might eventually upgrade to <strong>Delta SkyMiles® Gold</strong> for free bags or more robust perks. Or even the Platinum/Reserve for lounge/bonus MQMs. You can hold multiple Delta Amex cards, but note that each typically has a “once-in-a-lifetime” sign-up bonus policy by Amex. If you aim for bigger perks, you might skip Blue and go Gold or higher right away. Alternatively, if you want to keep no fees but also want flexible points, you might pair <strong>Blue</strong> with an <strong>Amex Membership Rewards®</strong> card for other categories. However, you can’t pool or combine those points directly— your Delta miles are separate from MR points. Evaluate if you prefer a single no-fee solution (Blue) or a combination of multiple Amex cards for broader coverage."}}></p>
            </section>

            {/* Section 12: Additional Benefits & Travel Protections */}
            <section id="section-12" className={styles.reviewSection}>
                 <h2 dangerouslySetInnerHTML={{ __html:"Additional Benefits &amp; Travel Protections"}}></h2>
                <p>
                    As an <strong>American Express</strong> product, Delta Blue typically offers:
                </p>
                <ul className={styles.featureList}>
                    <li><strong>20% In-Flight Savings on Delta:</strong>
                    Purchases of meals, Wi-Fi, etc. on Delta flights get 20% statement credit if charged to your Delta Blue card.</li>
                     {/* Using dangerouslySetInnerHTML for &amp; */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Purchase Protection &amp; Extended Warranty:</strong> Standard for many Amex cards, covers new items from damage/theft, plus extends warranties up to 1 additional year. Check your guide for coverage limits/exclusions."}}></li>
                    <li><strong>Global Assist Hotline:</strong>
                    Offers 24/7 emergency coordination when traveling, though actual costs are your responsibility.
                    More robust coverage is on higher-tier Amex/Delta cards.</li>
                     {/* Using dangerouslySetInnerHTML for &amp; */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Car Rental Loss &amp; Damage Insurance (Secondary):</strong> Typically covers damage/theft if you decline the rental agency’s coverage, but it’s secondary to personal insurance in the U.S."}}></li>
                </ul>
                <p>
                    There is <strong>no</strong> free checked bag or priority boarding with Delta Blue—
                    that’s for Delta Gold and above.
                    But for a no-fee product, the in-flight discount and no FTF are nice travel perks.
                </p>
            </section>

             {/* Section 13: APR & Carrying a Balance */}
             <section id="section-13" className={styles.reviewSection}>
                <h2 dangerouslySetInnerHTML={{ __html:"APR &amp; Carrying a Balance"}}></h2>
                <p>
                    The standard APR is about <strong>20.74%–29.74%</strong>.
                    Some sign-up promos include <strong>0% intro APR</strong> for 12 months on purchases.
                    If you revolve beyond that, interest can overshadow your 2x gains quickly.
                    It’s best to pay in full monthly if possible.
                    If you plan a bigger expense, the 0% can help you spread payments over a year.
                    But once standard rates apply,
                    it’s wise to keep a zero balance to maximize net savings from your miles.
                </p>
            </section>

            {/* Section 14: Potential Downsides */}
            <section id="section-14" className={styles.reviewSection}>
                <h2>Potential Downsides</h2>
                <ul className={styles.featureList}>
                    <li><strong>Limited Bonus Categories:</strong>
                    2x only on Delta and dining.
                    No grocery, travel, or gas multipliers outside Delta flights.</li>
                    <li><strong>Smaller Sign-Up Bonus:</strong>
                    Usually 10k–15k miles vs. 40k+ on Delta Gold or other premium cards.</li>
                    <li><strong>Fewer Travel Protections:</strong>
                    No baggage insurance, trip delay coverage, or free bag.
                    Just standard Amex purchase/extended warranty coverage.</li>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>SkyMiles Program Limitations:</strong> Delta’s dynamic pricing can make it tricky to find “sweet spot” redemption deals. Heavier flyers might prefer a bigger Delta card for lounge or bag perks."}}></li>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>No Tier/Status Boosts:</strong> Unlike Gold or Platinum, Blue doesn’t help with MQDs or MQMs for Medallion Status. Strictly a miles-earning card for casual usage."}}></li>
                </ul>
            </section>

            {/* Section 15: Advanced Tips & Strategies */}
             <section id="section-15" className={styles.reviewSection}>
                <h2 dangerouslySetInnerHTML={{ __html:"Advanced Tips &amp; Strategies"}}></h2>
                <ol className={styles.numberedList}>
                    <li><strong>Leverage 2x Dining Abroad:</strong>
                    With no FTF, you can dine overseas and earn double miles,
                    outdoing many no-fee domestic-only cards that have foreign fees.</li>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Watch for Delta Flash Sales:</strong> If Delta offers domestic round-trip sales for 10k–15k miles, your sign-up bonus might cover an entire ticket or two short-haul one-ways."}}></li>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Consider Upgrading Later:</strong> If you find yourself checking bags frequently, you might upgrade to Delta Gold for the free bag perk. But confirm you haven’t had that card’s bonus before if chasing sign-ups is your strategy."}}></li>
                     {/* Using dangerouslySetInnerHTML for &amp; */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Amex Offers &amp; Dining Partnerships:</strong> Monitor your Amex account for targeted statement credits or bonus miles for certain restaurants or events. You can stack that with your 2x base earning."}}></li>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Use for Delta In-Flight Purchases:</strong> Save 20%, plus earn 2x if it codes as Delta. Not a huge discount, but better than paying full price onboard with another card."}}></li>
                </ol>
            </section>

            {/* Section 16: Another Real-Life Scenario */}
             <section id="section-16" className={styles.reviewSection}>
                <h2>Another Example: If You’re a Dining Enthusiast</h2>
                <p>
                    Suppose you dine out or order in about $6,000 yearly,
                    plus $2,000 on Delta flights, and $6,000 everything else:
                </p>
                <ul className={styles.featureList}>
                    <li>Dining: 6k * 2 = 12k miles</li>
                    <li>Delta: 2k * 2 = 4k miles</li>
                    <li>Other: 6k * 1 = 6k miles</li>
                </ul>
                <p>
                    Total = 22k miles from normal spend.
                    Add a 15k bonus = 37k miles in your first year—
                    enough for a domestic round-trip or partial coverage of a bigger trip.
                    Considering there’s no annual fee, that’s a strong upside
                    if you enjoy restaurants or frequent coffee runs.
                    And if you dine abroad, still 2x with no extra FTF penalty.
                </p>
            </section>

            {/* Section 17: Pairing with a Premium Delta Amex or General Amex? */}
            <section id="section-17" className={styles.reviewSection}>
                <h2>Pairing with a Premium Delta Amex or General Amex?</h2>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{ __html:"If you’re paying baggage fees regularly or want lounge access, you might be better off with Delta Gold, Platinum, or Reserve. If you want to keep no annual fee but also want broader category coverage (like groceries, streaming), consider an Amex Everyday or Blue Cash product. However, you <strong>cannot</strong> directly combine Membership Rewards points with SkyMiles, as they’re separate currencies. So if you want a single strategy for Delta miles at no cost, <strong>Delta Blue</strong> stands alone effectively. Some users keep Blue for the 2x dining/Delta synergy, then use a different no-fee card for groceries, gas, etc. Evaluate if that complexity is worth the potential incremental benefit."}}></p>
            </section>

             {/* Section 18: Competitor & Alternative Cards */}
             <section id="section-18" className={styles.reviewSection}>
                <h2 dangerouslySetInnerHTML={{ __html:"Competitor &amp; Alternative Cards"}}></h2>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{ __html:"If you prefer a different airline or approach, consider:"}}></p>
                <ul className={styles.featureList}>
                     {/* Using dangerouslySetInnerHTML for ℠ */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>United Gateway℠</strong> (Chase): No fee, 2x on United, gas, transit, streaming, 1x else. No FTF, minimal perks, better if you favor United over Delta."}}></li>
                    <li><strong>JetBlue Card</strong> (Barclays):
                    No fee, 3x JetBlue, 2x dining/groceries, 1x else.
                    Great if you prefer JetBlue’s route network.</li>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Amex Blue Cash Everyday®</strong>: No fee, 3% groceries, 3% online retail, 3% gas, no direct miles but get cash back or statement credits. If you want straightforward cash vs. airline miles, that might be simpler."}}></li>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Chase Freedom Unlimited®</strong>: 1.5–5% across categories, no FTF if used with a premium Chase card? Actually, Freedom does have 3% foreign transaction fee. If you also have a Sapphire, you can convert UR points to airline miles (like to Virgin Atlantic, then onto Delta). More complicated but more flexible. However, that requires paying the annual fee for a Sapphire for the transfer option."}}></li>
                </ul>
                <p>
                    <strong>Delta SkyMiles® Blue</strong> is your best bet if you specifically want to rack up Delta miles,
                    get 2x on dining plus Delta flights, and pay $0 yearly.
                    Another airline card or general travel card might do better if you want different routes, bigger sign-ups,
                    or higher daily multipliers outside dining.
                </p>
            </section>

            {/* Section 19: Who Should Get the Card? */}
            <section id="section-19" className={styles.reviewSection}>
                 <h2 dangerouslySetInnerHTML={{ __html:"Who Should Get the Delta SkyMiles® Blue Amex?"}}></h2>
                <div className={styles.prosCons}>
                    <div className={styles.pros}>
                        <h3>Yes, If You:</h3>
                        <ul className={styles.featureList}>
                            <li>Want a <strong>no-annual-fee</strong> card to earn Delta SkyMiles</li>
                             {/* Using dangerouslySetInnerHTML for &amp; */}
                            <li dangerouslySetInnerHTML={{__html:"Spend significantly on <strong>dining</strong> (2x) or buy some <strong>Delta flights</strong> each year"}}></li>
                             {/* Using dangerouslySetInnerHTML for ® */}
                            <li dangerouslySetInnerHTML={{__html:"Want <strong>no foreign transaction fees</strong> for overseas dining/shopping"}}></li>
                             {/* Using dangerouslySetInnerHTML for ® */}
                            <li dangerouslySetInnerHTML={{__html:"Prefer <strong>simple 2x categories</strong> to complicated multi-tier structures"}}></li>
                             {/* Using dangerouslySetInnerHTML for ® */}
                            <li dangerouslySetInnerHTML={{__html:"Don’t need <strong>free bags</strong> or advanced Delta perks from higher-tier cards"}}></li>
                        </ul>
                    </div>
                    <div className={styles.cons}>
                        <h3>No, If You:</h3>
                        <ul className={styles.featureList}>
                            <li>Frequently check <strong>bags</strong> or want <strong>priority boarding</strong> (Delta Gold or above might offset fees quickly)</li>
                            <li>Desire <strong>larger sign-up bonuses</strong> or robust travel coverage</li>
                            <li>Spend heavily outside <strong>dining</strong> or Delta,
                            wanting bigger multipliers for groceries, gas, or more broad categories</li>
                             {/* Using dangerouslySetInnerHTML for ® */}
                            <li dangerouslySetInnerHTML={{__html:"Need <strong>MQD/MQM boosts</strong> for Medallion® status (Gold/Platinum/Reserve do that)"}}></li>
                             {/* Using dangerouslySetInnerHTML for ® */}
                            <li dangerouslySetInnerHTML={{__html:"Are flexible and want <strong>general travel points</strong> vs. airline-specific miles"}}></li>
                        </ul>
                    </div>
                </div>
            </section>

             {/* Section 20: Final Thoughts & Disclaimer */}
             <section id="section-20" className={styles.reviewSection}>
                 <h2 dangerouslySetInnerHTML={{ __html:"Final Thoughts &amp; Disclaimer"}}></h2>
                {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{ __html:"The <strong>Delta SkyMiles® Blue American Express Card</strong> stands as a user-friendly, <strong>no-fee</strong> way to earn Delta miles on <strong>dining</strong> plus Delta flights at <strong>2x</strong>, with no foreign transaction fees. It’s an ideal stepping stone for travelers who want to accumulate SkyMiles without an annual cost. While it lacks bag benefits or priority boarding, it’s perfect for occasional Delta fliers who dine out frequently. The modest sign-up bonus and minimal travel coverage reflect its entry-level nature, but as a zero-fee product, it’s a strong competitor for your everyday or international dining expenses. If you find yourself paying bag fees often, or craving lounge/elite perks, you might upgrade to a higher-tier Delta Amex. Otherwise, <strong>Blue</strong> keeps things simple and affordable in 2025."}}></p>
                {/* Using dangerouslySetInnerHTML for &amp; ® */}
                <p dangerouslySetInnerHTML={{ __html:"<strong>Disclaimer:</strong> Terms, interest rates, and sign-up bonuses can change. Always verify current details with American Express and Delta. We may earn affiliate commissions from certain links, but editorial opinions remain our own. Examples of redemption and miles usage are approximate. If you carry a balance beyond any intro APR, interest can negate your 2x advantage. Refer to official T&amp;Cs for accurate coverage and usage."}}></p>
            </section>

            {/* CTA Section */}
            <section id="cta" className={styles.ctaSection}>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <h2 dangerouslySetInnerHTML={{__html:"Get the <b>Delta SkyMiles® Blue American Express Card</b> Today!"}}></h2>
                <div className={styles.ctaButtons}>
                    <a href={reviewData.applyLink} className={`${styles.btn} ${styles.btnApply}`} title="From card issuer's secure site" target="_blank" rel="noopener noreferrer sponsored">Apply Now</a>
                     {/* Using dangerouslySetInnerHTML for &amp; */}
                    <a href={reviewData.ratesLink} className={`${styles.btn} ${styles.btnRates}`} target="_blank" rel="noopener noreferrer sponsored" dangerouslySetInnerHTML={{__html:"See Rates &amp; Fees"}}></a>
                </div>
            </section>

             {/* E-A-T Section - Adapted for Delta Blue */}
             <section id="eat-expertise-authority-trustworthiness" className={`${styles.reviewSection} ${styles.eatSection}`}>
                 <h2 dangerouslySetInnerHTML={{ __html: "Our Commitment to E-A-T: Expertise, Authority &amp; Trustworthiness"}}></h2>
                 {/* Using E-A-T text adapted for Delta Blue */}
                <p>
                    At <strong>TravelCardInsider</strong>, we uphold:
                </p>
                <h3>1. Expertise</h3>
                <ul className={styles.featureList}>
                     {/* Using dangerouslySetInnerHTML for &amp; */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Category Testing &amp; Verification:</strong> We confirm how 2x dining and Delta flight purchases code, verifying overseas acceptance and in-flight charges with real usage."}}></li>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Frequent Offer Monitoring:</strong> Our team checks for sign-up bonus shifts, new dining or partner promotions, and updates coverage for each year’s changes."}}></li>
                    <li><strong>SkyMiles Redemption Trials:</strong>
                    We periodically book flights to measure how many miles typical domestic or short-haul awards cost,
                    ensuring realistic advice for entry-level cardholders.</li>
                </ul>
                <h3>2. Authority</h3>
                <ul className={styles.featureList}>
                    <li><strong>Comprehensive Reviews:</strong>
                    Our ~2,000-word coverage goes beyond superficial bullet points,
                    delving into synergy with other Amex/Delta cards, competitor analysis, and advanced tips.</li>
                    <li><strong>Industry Recognition:</strong>
                    We’re often cited in finance/travel outlets for unbiased, data-driven card evaluations.</li>
                    <li><strong>Transparency:</strong>
                    If affiliate links are present, we disclose them.
                    Our star ratings or final conclusions remain independent of advertiser influence.</li>
                </ul>
                <h3>3. Trustworthiness</h3>
                <ul className={styles.featureList}>
                    <li><strong>Editorial Independence:</strong>
                    No bank or airline dictates our opinions or rating scales.
                    We always prioritize user interests.</li>
                    <li><strong>Swift Updates:</strong>
                    If Amex modifies the sign-up bonus or adds 2x categories,
                    we update quickly to keep you informed.</li>
                    <li><strong>User Engagement:</strong>
                    We welcome real cardholder feedback in comments,
                    verifying how dining or foreign purchases code and if 2x posted properly.</li>
                    {/* Using Link component for internal link */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Privacy &amp; Data Practices:</strong> See our <a href='/privacy-policy'>Privacy Policy</a> for how we protect user data on our site. We follow best security protocols."}}>
                         {/* Corrected: <Link href="/privacy-policy"><a>Privacy Policy</a></Link> */}
                    </li>
                </ul>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{ __html:"By adhering to E-A-T, we aim to deliver a reliable, thorough perspective on the <strong>Delta SkyMiles® Blue American Express Card</strong> for your 2025 travel and dining strategy."}}></p>
            </section>

          </article>
        </div> {/* Close reviewContainer */}
      </main>

      <Footer />
    </>
  );
}

export default DeltaSkyMilesBlueReviewPage;