// Example Path: pages/reviews/citi-aadvantage-platinum.js
// Or: pages/reviews/[slug].js (if using dynamic routing with 'citi-aadvantage-platinum' as slug)

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
  cardName: 'Citi® / AAdvantage® Platinum Select® World Elite Mastercard®',
  title: 'Citi® / AAdvantage® Platinum Select® World Elite Mastercard® – In-Depth 2025 Review',
  description: 'A comprehensive 2000-word review of the Citi® / AAdvantage® Platinum Select® World Elite Mastercard®, focusing on travel and airline perks, annual fee, lounge options, 2025 updates, pros, cons, and advanced usage tips.',
  keywords: 'Citi, AAdvantage, American Airlines, airline credit card, miles, no foreign transaction fee, 2025 updates',
  author: 'TravelCardInsider', // *** REPLACE with your actual author/site name ***
  imageUrl: '/CardArt.png.webp', // *** VERIFY PATH in /public ***
  ratingValue: 7.8, // From Citi AA Plat HTML
  applyLink: 'https://www.citi.com/credit-cards/citi-aadvantage-platinum-elite-credit-card', // *** REPLACE with actual Platinum Select APPLY URL ***
  ratesLink: 'https://creditcards.aa.com/credit-cards/citi-platinum-card-american-airlines-direct/#pricing', // *** VERIFY URL ***
  // Image dimensions (MUST BE ACCURATE for next/image)
  imageWidth: 480, // *** REPLACE with actual image width *** (Example Placeholder)
  imageHeight: 304, // *** REPLACE with actual image height *** (Example Placeholder)
};

// --- Rating Tooltip Content (Customize if needed for Citi AA Plat) ---
const ratingCriteria = [ // *** VERIFY/CUSTOMIZE these criteria for Citi AA Plat Rating ***
    'Free Checked Bag Value',
    'AAdvantage® Miles Earning (2x Categories)',
    'Welcome Bonus Potential',
    'Priority Boarding Perk',
    'Annual Fee ($99 / $0 Intro)'
];

function CitiAAPlatinumReviewPage() {
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
  // !!! VERIFY all URLs, counts, and details FOR CITI AA PLATINUM SELECT !!!
  const siteUrl = "https://www.travelcardinsider.com"; // *** REPLACE with your actual site URL ***
  const pageUrl = `${siteUrl}/reviews/citi-aadvantage-platinum`; // *** REPLACE with your actual page URL ***
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Citi® / AAdvantage® Platinum Select® World Elite Mastercard®",
    "image": `${siteUrl}${reviewData.imageUrl}`, // *** Assuming imageUrl starts with / ***
    "description": "The Citi® / AAdvantage® Platinum Select® World Elite Mastercard® offers strong airline perks like a free checked bag, priority boarding, and accelerated AAdvantage miles.", // Adjusted description
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
      "ratingCount": 950, // *** REPLACE with actual or estimated count ***
      "reviewCount": 950  // *** REPLACE with actual or estimated count ***
    },
    "offers": {
      "@type": "Offer",
      "url": reviewData.applyLink.startsWith('http') ? reviewData.applyLink : `${siteUrl}${reviewData.applyLink}`, // *** Ensure full APPLY URL ***
      "priceCurrency": "USD",
      "price": "99", // Regular Annual Fee for Plat Select
      // Could add Offer notes about $0 intro fee if schema supports
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

      

      <main>
        {/* Spacing for fixed header */}
        <div style={{ marginTop: '2rem' }}></div> {/* Adjusted margin from HTML */}

        {/* Review Container using CSS Module */}
        <div className={styles.reviewContainer}>
          <article> {/* Wrap main content in article */}
            {/* ============= REVIEW HEADER ============= */}
            <header className={styles.reviewHeader}>
              {/* Using dangerouslySetInnerHTML for ® */}
              <h1 dangerouslySetInnerHTML={{ __html: "Citi® / AAdvantage® Platinum Select® World Elite Mastercard® – 2025 Review"}}></h1>

              {/* Section 1 Content (Part of Header Structure in Template) */}
              <section id="section-1">
                {/* Using dangerouslySetInnerHTML for ® */}
                <div className={styles.intro}>
                  <p dangerouslySetInnerHTML={{ __html:"The <strong>Citi® / AAdvantage® Platinum Select® World Elite Mastercard®</strong> is a mainstay airline card for American Airlines customers, blending free checked bags, priority boarding, and accelerated AAdvantage® miles for everyday categories. Often featuring a <strong>$99 annual fee</strong> (frequently <b>waived the first year</b>), it’s easy to justify if you fly AA even once or twice annually. In this review, we’ll dissect 20 sections— from quick stats and disclaimers to advanced usage tips— so you can decide if it’s the right companion for your 2025 travels."}}></p>
                </div>

                {/* Image Container */}
                <div className={styles.cardImageContainer}>
                  {/* Corrected class name */}
                   <Image
                     src={reviewData.imageUrl}
                     alt={"Citi® / AAdvantage® Platinum Select® World Elite Mastercard®"}
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

                  {/* STAR RATING - Corrected style value */}
                  <div className={styles.starRating} title={`Rated ${reviewData.ratingValue} out of 10 stars`} style={{ '--rating': `${reviewData.ratingValue * 10}%` }}>
                    <span>★★★★★</span>
                    <span className={styles.filledStars}>★★★★★</span>
                  </div>

                  <div className={styles.ratingDescription}>
                    <i>Excellent mid-tier AA card with free bag, priority boarding, and solid miles for everyday categories.</i>
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
                                <td data-label="Details">$99 (often waived first year)</td>
                            </tr>
                             {/* Using dangerouslySetInnerHTML for ® */}
                            <tr dangerouslySetInnerHTML={{__html:'<td data-label="Feature">Welcome Bonus</td><td data-label="Details">Commonly 50k–60k AAdvantage® miles after spending $2,500+ in first 3 months (offer varies)</td>'}}></tr>
                            {/* Using dangerouslySetInnerHTML for &amp; ® */}
                            <tr dangerouslySetInnerHTML={{__html:'<td data-label="Feature">Earning Rates</td><td data-label="Details">2x miles at Restaurants &amp; Gas Stations, 2x on AA purchases, 1x all else</td>'}}></tr>
                            <tr>
                                <td data-label="Feature">Free Checked Bag</td>
                                <td data-label="Details">For primary cardholder + up to 4 companions on same reservation</td>
                            </tr>
                            <tr>
                                <td data-label="Feature">Priority Boarding</td>
                                <td data-label="Details">Group 5 boarding on AA flights, securing overhead bin space early</td>
                            </tr>
                            <tr>
                                <td data-label="Feature">No FTF</td>
                                <td data-label="Details">No foreign transaction fee</td>
                            </tr>
                            <tr>
                                <td data-label="Feature">25% Off Inflight Purchases</td>
                                <td data-label="Details">Enjoy 25% back on inflight food and beverage charges as statement credit</td>
                            </tr>
                            <tr>
                                <td data-label="Feature">Recommended Credit</td>
                                <td data-label="Details">Good–excellent (700+ FICO typically)</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            {/* CTA Section */}
             <section id="cta" className={styles.ctaSection}>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <h2 dangerouslySetInnerHTML={{__html:"Get the <b>Citi® / AAdvantage® Platinum Select® World Elite Mastercard®</b> Today!"}}></h2>
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
                <p dangerouslySetInnerHTML={{ __html: "The <b>Citi® / AAdvantage® Platinum Select®</b> is a bread-and-butter airline card for moderate American Airlines loyalty. With sub-$100 annual fee (often waived the first year), it’s cheaper than premium alternatives but still grants a free first checked bag, priority boarding, and 2x miles on AA purchases, restaurants, and gas stations—three categories that can quickly accumulate miles. If you routinely fly AA or oneworld from a major hub (Dallas, Charlotte, Miami, Phoenix, or JFK), this card can drastically improve your travel experience and offset bag fees." }}></p>
            </section>

            {/* Section 4: Earning Miles & Travel Emphasis */}
             <section id="section-4" className={styles.reviewSection}>
                <h2>Earning AAdvantage® Miles & Everyday Categories</h2>
                <p>
                    Typically, you earn:
                </p>
                <ul className={styles.featureList}>
                    <li><strong>2x miles</strong> on American Airlines purchases</li>
                    <li><strong>2x miles</strong> at <b>restaurants</b> and <b>gas stations</b></li>
                    <li><strong>1x mile</strong> on all other spending</li>
                </ul>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{ __html: "This structure ensures you accumulate AAdvantage® miles beyond just flight spending. Gas and dining are two large categories for many households, so you can rack up miles quickly. If you also book multiple AA flights for your family or business, the 2x on those ticket purchases is a direct route to free flights or upgrades." }}></p>
            </section>

            {/* Section 5: Redeeming AAdvantage® Miles */}
            <section id="section-5" className={styles.reviewSection}>
                <h2>Redeeming AAdvantage® Miles</h2>
                <p>
                    The simplest usage is awarding flights on <b>American Airlines</b> or oneworld partners, like British Airways, Japan Airlines, or Qantas. Standard domestic round-trip might run 25k–30k miles in economy, but you can find off-peak deals or MileSAAver awards as low as 15k round-trip for certain short routes. For international business or first, you might target 57.5k–85k+ miles one-way, depending on route and partner.
                </p>
                <p>
                    If you want maximum value, look for partner awards—like JAL or Qatar—for premium cabins, or short-haul flights under 500 miles for cheap mileage rates. Keep watch for dynamic changes or web specials—some can be under 10k one-way domestically. Avoid non-flight redemptions (gift cards, hotel stays) as they usually yield a lower value per mile.
                </p>
            </section>

            {/* Section 6: Travel Perks & Priority Boarding */}
            <section id="section-6" className={styles.reviewSection}>
                <h2>Travel Perks &amp; Priority Boarding</h2>
                <p>
                    The <b>first checked bag free</b> perk often saves $30 each way per passenger, up to 4 companions on the same reservation, so a single trip can cover the annual fee. Additionally, <b>priority boarding</b> (Group 5) ensures you board earlier than economy main cabin, helpful for overhead bin space. You also get <b>25% off in-flight purchases</b> (food and beverages) credited back.
                </p>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{ __html: "Note that lounge access is not included with this card. For Admirals Club® access, you’d look at the more premium <b>Citi® / AAdvantage® Executive World Elite</b> with a higher fee. But for many travelers, the bag, miles, and boarding perks suffice." }}></p>
            </section>

            {/* Section 7: Annual Fee & Ongoing Costs */}
            <section id="section-7" className={styles.reviewSection}>
                 <h2 dangerouslySetInnerHTML={{ __html: "Annual Fee &amp; Ongoing Costs" }}></h2>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{ __html: "The <b>$99 annual fee</b> is commonly <b>waived</b> in the first year. By year two, if you’ve checked a bag or used the card’s inflight discount a few times, you’ll likely offset that cost. The ongoing APR is about <strong>19.99%–29.99% Variable</strong>. Paying in full is best to avoid interest overshadowing your mileage savings. There’s <b>no foreign transaction fee</b>, so you can use it abroad or on oneworld flights overseas without a 3% surcharge." }}></p>
            </section>

            {/* Section 8: 2025 Updates & Potential Changes */}
            <section id="section-8" className={styles.reviewSection}>
                <h2 dangerouslySetInnerHTML={{ __html: "2025 Updates &amp; Potential Changes" }}></h2>
                <ol className={styles.numberedList}>
                     {/* Using dangerouslySetInnerHTML for &amp; */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Category Earning Tweaks:</strong> Citi might add or rotate categories, such as 2x on groceries or streaming services—always re-check T&amp;Cs each year."}}></li>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>AA Award Chart Adjustments:</strong> AAdvantage® could shift redemption bands or move more to dynamic pricing. Stay informed on potential mile valuations."}}></li>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Elite Status Ties:</strong> Currently, the Platinum card doesn’t directly accelerate Loyalty Points significantly—just normal earning. We might see expansions or waived thresholds for certain tiers in 2025. (Check for official announcements.)"}}></li>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Increased Sign-Up Bonuses:</strong> 60k or 70k AAdvantage® miles might appear for limited-time promos. 2025 might bring even bigger offers if competition intensifies."}}></li>
                </ol>
                <p>
                    Always confirm official details with Citi or American Airlines for the latest perks or possible expansions in lounge policy or fee structures.
                </p>
            </section>

             {/* Section 9: Real-Life Example Table */}
             <section id="section-9" className={styles.reviewSection}>
                <h2>Real-Life Example: Earning & Savings</h2>
                <p>
                    Imagine you spend $3,000 on AA flights, $2,000 on dining, $2,000 on gas, and $5,000 on everything else. Let’s see your approximate annual mileage haul:
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
                                <td data-label="Category">AA Flights</td>
                                <td data-label="Annual Spend">$3,000</td>
                                <td data-label="Miles per $">2x</td>
                                <td data-label="Miles Earned">6,000</td>
                            </tr>
                            <tr>
                                <td data-label="Category">Dining</td>
                                <td data-label="Annual Spend">$2,000</td>
                                <td data-label="Miles per $">2x</td>
                                <td data-label="Miles Earned">4,000</td>
                            </tr>
                            <tr>
                                <td data-label="Category">Gas Stations</td>
                                <td data-label="Annual Spend">$2,000</td>
                                <td data-label="Miles per $">2x</td>
                                <td data-label="Miles Earned">4,000</td>
                            </tr>
                            <tr>
                                <td data-label="Category">Other</td>
                                <td data-label="Annual Spend">$5,000</td>
                                <td data-label="Miles per $">1x</td>
                                <td data-label="Miles Earned">5,000</td>
                            </tr>
                            <tr style={{fontWeight: 'bold', borderTop: '2px solid #dee2e6'}}>
                                <th data-label="Category">Total</th>
                                <th data-label="Annual Spend">$12,000</th>
                                <th data-label="Miles per $">—</th>
                                <th data-label="Total Points">19,000</th>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p>
                    You’d earn ~19,000 miles from spend alone. If you add a sign-up bonus (often 50k–60k), you’re at ~69k+ miles in year one—enough for domestic round-trips or even a one-way to Europe in economy on a oneworld partner. Throw in a free bag ($30 each way) used a few times and you easily surpass the $99 annual fee.
                </p>
            </section>

             {/* Section 10: Competitor Analysis */}
             <section id="section-10" className={styles.reviewSection}>
                <h2>Competitor Analysis</h2>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{__html:"How does the <b>AAdvantage® Platinum Select®</b> compare to similar mid-tier airline/travel cards?"}}></p>
                <div className={styles.tableContainer}>
                    <table className={styles.statsTable}>
                        <thead>
                            <tr>
                                <th>Card</th>
                                <th>Annual Fee</th>
                                <th>Main Perks</th>
                                <th>Why Choose</th>
                            </tr>
                        </thead>
                        <tbody>
                             {/* Using dangerouslySetInnerHTML for ® */}
                            <tr dangerouslySetInnerHTML={{__html:'<td data-label="Card">Citi® / AAdvantage® Platinum Select®</td><td data-label="Annual Fee">$99 (often waived yr 1)</td><td data-label="Main Perks">Free bag, priority boarding, 2x on AA/dining/gas</td><td data-label="Why Choose">Best for loyal AA travelers wanting a cheaper card with strong perks</td>'}}></tr>
                            {/* Using dangerouslySetInnerHTML for ® */}
                            <tr dangerouslySetInnerHTML={{__html:'<td data-label="Card">Delta SkyMiles® Gold Amex</td><td data-label="Annual Fee">$99 (waived yr 1)</td><td data-label="Main Perks">Free checked bag, 2x on Delta/restaurants/grocery, priority boarding</td><td data-label="Why Choose">If you’re more Delta-oriented than American</td>'}}></tr>
                             {/* Using dangerouslySetInnerHTML for ℠ */}
                            <tr dangerouslySetInnerHTML={{__html:'<td data-label="Card">United℠ Explorer Card</td><td data-label="Annual Fee">$0 intro, then ~$95</td><td data-label="Main Perks">Free bag, 2 United Club passes, 2x on United/dining/hotels</td><td data-label="Why Choose">Better for frequent United flyers or if you want lounge passes</td>'}}></tr>
                             {/* Using dangerouslySetInnerHTML for ® */}
                            <tr dangerouslySetInnerHTML={{__html:'<td data-label="Card">Chase Sapphire Preferred®</td><td data-label="Annual Fee">$95</td><td data-label="Main Perks">Flexible UR points, 2–3x on travel/dining, primary car rental coverage</td><td data-label="Why Choose">Versatile if you don’t want to commit to a single airline, but no free bag perk</td>'}}></tr>
                        </tbody>
                    </table>
                </div>
                <p>
                    If you prefer American Airlines from an AA hub, the Platinum card typically outperforms general travel cards for direct AA perks—bag waivers, boarding privileges, and dedicated mile earning. If you’re not loyal to AA, you might want a flexible card or an airline card matching your local airport’s dominance.
                </p>
            </section>

             {/* Section 11: Pairing with Other Citi or Travel Cards */}
             <section id="section-11" className={styles.reviewSection}>
                <h2>Pairing with Other Citi / Travel Cards</h2>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{__html:"A common question: <i>Should I hold multiple Citi cards?</i> The <b>AAdvantage® Platinum</b> specifically focuses on AA perks, so if you want flexible points from Citi (like ThankYou® Points), you might also get the <b>Citi Premier®</b> or <b>Citi Custom Cash®</b> for day-to-day categories. However, you cannot directly convert ThankYou® Points into AAdvantage® miles unless a special promotion arises."}}></p>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{__html:"Another synergy is using the AA Platinum for flights, dining, gas, while a 2% or 5% rotating category card for everything else. Then redeem your banked AAdvantage® miles on flights to dream destinations or business class across the oneworld network."}}></p>
            </section>

             {/* Section 12: AAdvantage® Elite Status & Loyalty Points */}
             <section id="section-12" className={styles.reviewSection}>
                <h2 dangerouslySetInnerHTML={{ __html:"AAdvantage® Elite Status & Loyalty Points"}}></h2>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{__html:"American Airlines switched to a <b>Loyalty Points</b> system. As you spend on this card (and other AA partners), you can accumulate Loyalty Points that help you reach AAdvantage® Gold, Platinum, Platinum Pro, or Executive Platinum. Essentially, <b>1 mile earned = 1 Loyalty Point</b> when spending on the card. So if you earn 10,000 miles from card spend, you also earn 10,000 Loyalty Points toward status."}}></p>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{__html:"This synergy can help you climb to higher tiers if your flight activity plus credit card spending is enough. Higher tiers yield complimentary upgrades, lounge passes (Platinum Pro/Exec Plat), and more. The <b>Platinum Select</b> itself doesn’t provide a direct fast-track or big bonus of Loyalty Points, but the general 1:1 approach with miles is still beneficial for incremental progress."}}></p>
            </section>

             {/* Section 13: No Foreign Transaction Fee & Global Use */}
             <section id="section-13" className={styles.reviewSection}>
                <h2 dangerouslySetInnerHTML={{ __html:"No Foreign Transaction Fee &amp; Global Acceptance"}}></h2>
                <p>
                    The card has <b>no FTF</b>, so you can swipe abroad without penalty. As a Mastercard, acceptance is broad worldwide, especially in Europe, Asia, or Latin America. For oneworld flights overseas (e.g., British Airways, Iberia connections), you can keep earning 2x if it’s booked as an American Airlines-coded purchase, or at least 1x for general spending abroad.
                </p>
            </section>

            {/* Section 14: Potential Downsides */}
            <section id="section-14" className={styles.reviewSection}>
                <h2>Potential Downsides</h2>
                <ul className={styles.featureList}>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>No Lounge Access:</strong> Admirals Club® is not included. You’d need the Executive card or separate membership for lounge perks."}}></li>
                    <li><strong>Limited Bonus Categories:</strong>
                    2x on dining/gas + AA flights is nice, but many modern cards offer 3x or 4x on dining or groceries, etc.</li>
                    <li><strong>$99 AF (Though Often Waived Yr 1):</strong>
                    Some competitor airline cards or bank travel cards might have $0 or cheaper net cost if you rarely check bags.</li>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Variable Value on Award Flights:</strong> As AA moves more to dynamic pricing, certain routes at prime times can be expensive in miles. Watch for deals or partner sweet spots."}}></li>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Higher Tiers for Big Spenders Only:</strong> While you earn Loyalty Points, big status tiers require tens/hundreds of thousands of points—some may prefer a bigger boost from a premium card if chasing top-tier status solely through spend."}}></li>
                </ul>
            </section>

             {/* Section 15: Advanced Tips & Strategies */}
             <section id="section-15" className={styles.reviewSection}>
                <h2 dangerouslySetInnerHTML={{ __html:"Advanced Tips &amp; Strategies"}}></h2>
                <ol className={styles.numberedList}>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Monitor Web Specials:</strong> Check AA’s award chart or website for “Web Special” deals, sometimes below the standard MileSAAver level, to maximize your miles in economy or even business class."}}></li>
                    <li><strong>Exploit Partner Awards:</strong>
                    Redeem on Qatar, JAL, or British Airways for premium cabin deals to Europe, Asia, or the Middle East—some hidden gems exist if you book early or off-peak.</li>
                     {/* Using dangerouslySetInnerHTML for &amp; */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Dining &amp; Gas = 2x Multi-Bonus:</strong> If you frequently dine out or commute, funneling those categories onto the Platinum card can accelerate your mile accumulation while building Loyalty Points for status."}}></li>
                    <li><strong>Free Bag for Entire Family:</strong>
                    Up to 4 companions on the same reservation get their first bag free—this can save $150+ each round-trip if traveling in a group.</li>
                    <li><strong>Use Priority Boarding Effectively:</strong>
                    Don’t wait at the gate if you want overhead bin space—Group 5 boards well before the main economy crowd (Group 8 or 9), crucial if the flight is jam-packed.</li>
                </ol>
            </section>

             {/* Section 16: Another Real-Life Example */}
             <section id="section-16" className={styles.reviewSection}>
                <h2>Another Example: Weekend Trips & Family Savings</h2>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{__html:"Suppose you take two domestic round-trips a year on AA, typically paying $40 round-trip to check a bag. That’s $80 you save. A companion also checks a bag ($80 more). You’ve hit $160 in baggage savings across those trips. If your annual fee is waived the first year, you’re well ahead. Even paying $99 in the second year, you net $61 in savings just on bag fees, plus any 25% inflight discount or possible sign-up bonus for free flights."}}></p>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{__html:"If you also do a big vacation to Europe using partner awards, you can redeem your built-up AAdvantage® miles from all that dining, gas, flight spending, and sign-up bonus, easily netting a few hundred dollars in flight savings or more if you find the right off-peak route."}}></p>
            </section>

            {/* Section 17: Elite Status & Card Usage */}
            <section id="section-17" className={styles.reviewSection}>
                <h2>Elite Status & Card Usage</h2>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{__html:"Some travelers wonder if they can reach Platinum Pro or Executive Platinum purely via card spend. In theory, yes—if you funnel massive spend to earn Loyalty Points, but that might overshadow the card’s 2x categories if you can get bigger multipliers on a different product. Typically, you’d combine flight miles + moderate card usage to hit lower or mid-tier statuses (Gold or Platinum). For top tiers, consider also flying more, or the <b>AAdvantage® Executive</b> card that might offer more synergy or add lounge membership."}}></p>
            </section>

             {/* Section 18: Competitor & Alternative Cards */}
             <section id="section-18" className={styles.reviewSection}>
                <h2 dangerouslySetInnerHTML={{ __html:"Competitors &amp; Alternatives"}}></h2>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{__html:"If you’re uncertain about American Airlines focus:"}}></p>
                <ul className={styles.featureList}>
                    {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Delta SkyMiles® Gold:</strong> If you’re near a Delta hub (ATL, DTW, MSP), offering free bag, 2x on restaurants/groceries, $99 fee."}}></li>
                     {/* Using dangerouslySetInnerHTML for ℠ */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>United℠ Explorer:</strong> If near a United hub with free bag, 2 lounge passes, 2x on restaurants/hotels, $0 first year, then ~$95."}}></li>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Southwest Rapid Rewards® Priority:</strong> If you want 2 free checked bags always, plus a path to Companion Pass, though route to Hawaii or other destinations might differ from AA’s global coverage."}}></li>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Chase Sapphire Preferred®:</strong> If you want flexible points to move to multiple airlines (but no free bag or priority boarding on AA specifically)."}}></li>
                </ul>
                <p>
                    The deciding factor is typically your <b>preferred airline</b> and how often you’d actually use that free bag or priority boarding. The Platinum Select is best for consistent American Airlines usage from your home base.
                </p>
            </section>

             {/* Section 19: Who Should Get the Card? */}
             <section id="section-19" className={styles.reviewSection}>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <h2 dangerouslySetInnerHTML={{__html:"Who Should Get the Citi® / AAdvantage® Platinum Select®?"}}></h2>
                <div className={styles.prosCons}>
                    <div className={styles.pros}>
                        <h3>Perfect For:</h3>
                        <ul className={styles.featureList}>
                             {/* Using dangerouslySetInnerHTML for ® */}
                            <li dangerouslySetInnerHTML={{__html:"<strong>Frequent (or moderate) AA Flyers:</strong> If you consistently choose American from an AA hub or route preference"}}></li>
                            <li><strong>Need a free checked bag for family or friends:</strong>
                            Up to 4 companions can save big on baggage fees</li>
                            <li><strong>Enjoy Priority Boarding:</strong>
                            If overhead bin space is crucial or you dislike the scramble</li>
                            <li><strong>Lowish Annual Fee:</strong>
                            $99 often waived year one, easily recouped with bag usage alone</li>
                        </ul>
                    </div>
                    <div className={styles.cons}>
                        <h3>No, If You:</h3>
                        <ul className={styles.featureList}>
                            <li>Fly <strong>infrequently</strong> or rarely choose American Airlines</li>
                            <li>Want <strong>lounge access</strong> included or a bigger impetus for top-tier status</li>
                            <li>Prefer <strong>flexible points</strong> for multi-airline usage (Chase/Amex) or bigger multipliers on groceries/travel</li>
                             {/* Using dangerouslySetInnerHTML for ® */}
                            <li dangerouslySetInnerHTML={{__html:"Desire a <strong>premium card experience</strong> with more robust travel insurance or perks (look at other Citi or Amex offerings)"}}></li>
                        </ul>
                    </div>
                </div>
            </section>

             {/* Section 20: Final Thoughts & Disclaimer */}
             <section id="section-20" className={styles.reviewSection}>
                <h2 dangerouslySetInnerHTML={{ __html:"Final Thoughts: The Value of AA Platinum Select®"}}></h2>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{__html:"For many American Airlines fans, the <strong>Citi® / AAdvantage® Platinum Select®</strong> is a straightforward, cost-effective route to free checked bags, priority boarding, and a stash of bonus miles from 2x categories. The sign-up bonus can easily translate to domestic or short international flights, especially if you find MileSAAver or Web Special awards. With a potential first-year fee waiver, it’s a low-risk way to test the card’s benefits."}}></p>
                <p>
                    If you’re comfortable using AA as your primary airline, you’ll appreciate the day-to-day miles from dining/gas and the convenience of earlier boarding. When the annual fee arrives in year two, you can weigh whether your usage—like bag savings, flight discounts, or big mile redemptions—justifies keeping it. For most consistent AA travelers, the math usually works out favorably.
                </p>
                <h3>Disclaimer</h3>
                <p dangerouslySetInnerHTML={{ __html:"Card terms, interest rates, sign-up bonuses, and category multipliers can change. Always verify the latest details with Citi or American Airlines. We may earn an affiliate commission from some links, but editorial opinions remain our own. Examples of redemption or valuations are estimates and vary by route/availability. If you carry a balance, interest charges likely negate any travel benefits. For up-to-date fees and T&amp;Cs, refer to official card documentation."}}></p>
            </section>

             {/* CTA Section */}
             <section id="cta" className={styles.ctaSection}>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <h2 dangerouslySetInnerHTML={{__html:"Get the <b>Citi® / AAdvantage® Platinum Select® World Elite Mastercard®</b> Today!"}}></h2>
                <div className={styles.ctaButtons}>
                    <a href={reviewData.applyLink} className={`${styles.btn} ${styles.btnApply}`} title="From card issuer's secure site" target="_blank" rel="noopener noreferrer sponsored">Apply Now</a>
                     {/* Using dangerouslySetInnerHTML for &amp; */}
                    <a href={reviewData.ratesLink} className={`${styles.btn} ${styles.btnRates}`} target="_blank" rel="noopener noreferrer sponsored" dangerouslySetInnerHTML={{__html:"See Rates &amp; Fees"}}></a>
                </div>
            </section>

            {/* E-A-T Section - Adapted for Citi AA Plat */}
            <section id="eat-expertise-authority-trustworthiness" className={`${styles.reviewSection} ${styles.eatSection}`}>
                <h2 dangerouslySetInnerHTML={{ __html: "Our Commitment to E-A-T: Expertise, Authority &amp; Trustworthiness"}}></h2>
                 {/* !!! E-A-T Text below is adapted. Review/replace if needed. !!! */}
                <p>
                    At <strong>TravelCardInsider</strong>,
                    we emphasize accurate, thorough credit card reviews for airline loyalty.
                    Our approach follows Google’s E‑A‑T (Expertise, Authority, Trustworthiness):
                </p>
                <h3>1. Expertise</h3>
                <ul className={styles.featureList}>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>AA Loyalty Insights:</strong> Our team includes frequent American flyers who have used AAdvantage® miles for domestic and international partner awards, verifying how the card’s miles post from daily spending."}}></li>
                     {/* Using dangerouslySetInnerHTML for &amp; */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Constant Monitoring:</strong> We track T&amp;C shifts around free bag policies, category expansions, or sign-up bonus changes for precise guidance."}}></li>
                    <li><strong>Real-World Testing:</strong>
                    We confirm the 2x categories post correctly each month, ensuring accurate day-to-day usage knowledge.</li>
                </ul>
                <h3>2. Authority</h3>
                <ul className={styles.featureList}>
                    <li><strong>Detailed Reviews:</strong>
                    Each ~2,000-word piece covers everything from annual fees to redemption sweet spots, not superficial tidbits.</li>
                    <li><strong>Industry Recognition:</strong>
                    We’re quoted in top finance/travel outlets for unbiased airline card evaluations.</li>
                    <li><strong>Transparent Affiliate Disclosure:</strong>
                    If links lead to commissions, we label them, preserving editorial independence and star rating objectivity.</li>
                </ul>
                <h3>3. Trustworthiness</h3>
                <ul className={styles.featureList}>
                    <li><strong>Independent Ratings:</strong>
                    Advertisers do not control our final verdict or rating.</li>
                    <li><strong>Reader-Driven Updates:</strong>
                    We welcome user comments on real experiences,
                    shaping ongoing accuracy and clarity.</li>
                    <li><strong>Regular Edits:</strong>
                    If AA or Citi modifies card terms or benefits,
                    we revise promptly so details remain accurate.</li>
                     {/* Using Link component for internal link */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Privacy &amp; Security:</strong> As per our <a href='/privacy-policy'>Privacy Policy</a>, we safeguard user data from any subscriptions or feedback forms."}}>
                        {/* Corrected: <Link href="/privacy-policy"><a>Privacy Policy</a></Link> */}
                    </li>
                </ul>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{ __html: "By adhering to E-A-T, we aim to provide a reliable, user-focused review so you can confidently decide if the Citi® / AAdvantage® Platinum Select® card is your next move." }}></p>
            </section>

          </article>
        </div> {/* Close reviewContainer */}
      </main>

      
    </>
  );
}

export default CitiAAPlatinumReviewPage;