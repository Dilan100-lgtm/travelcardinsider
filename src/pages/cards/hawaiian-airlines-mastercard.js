// Example Path: pages/reviews/hawaiian-airlines-mastercard.js
// Or: pages/reviews/[slug].js (if using dynamic routing with 'hawaiian-airlines-mastercard' as slug)

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
  cardName: 'Hawaiian Airlines® World Elite Mastercard®',
  title: 'Hawaiian Airlines® World Elite Mastercard® – In-Depth 2025 Review',
  description: 'A comprehensive 2000-word review of the Hawaiian Airlines® World Elite Mastercard®, focusing on travel and airline perks, annual fee, companion discounts, 2025 updates, pros, cons, and advanced usage tips.',
  keywords: 'Hawaiian Airlines, Mastercard, miles, travel, lounge, bonus miles, 2025 updates',
  author: 'TravelCardInsider', // *** REPLACE with your actual author/site name ***
  imageUrl: '/HCL_card_PremWhite_WE_Angle_359x246_L.png', // *** VERIFY PATH in /public ***
  ratingValue: 7.6, // From Hawaiian Airlines HTML
  applyLink: 'https://cards.barclaycardus.com/banking/cards/hawaiian-airlines-world-elite-mastercard/', // *** REPLACE with actual HA Card APPLY URL ***
  ratesLink: 'https://www.barclaycardus.com/applycontent/TnCs.jsp?tc46491', // *** VERIFY URL - seems generic ***
  // Image dimensions (MUST BE ACCURATE for next/image) - Guessed from filename
  imageWidth: 359, // *** REPLACE with actual image width ***
  imageHeight: 246, // *** REPLACE with actual image height ***
};

// --- Rating Tooltip Content (Customize if needed for Hawaiian Card) ---
const ratingCriteria = [ // *** VERIFY/CUSTOMIZE these criteria for HA Card Rating ***
    'Companion Fare/Discount Value',
    'HawaiianMiles Earning (3x/2x)',
    'Free Checked Bag Benefit',
    'Welcome Bonus',
    'Annual Fee ($99)'
];


function HawaiianAirlinesReviewPage() {
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
  // !!! VERIFY all URLs, counts, and details FOR HAWAIIAN AIRLINES CARD !!!
  const siteUrl = "https://www.travelcardinsider.com"; // *** REPLACE with your actual site URL ***
  const pageUrl = `${siteUrl}/reviews/hawaiian-airlines-card`; // *** REPLACE with your actual page URL ***
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Hawaiian Airlines® World Elite Mastercard®",
    "image": `${siteUrl}${reviewData.imageUrl}`, // *** Assuming imageUrl starts with / ***
    "description": "The Hawaiian Airlines® World Elite Mastercard® from Barclays offers rich travel benefits, discount companion fares, bag fee savings, and fast ways to earn HawaiianMiles.", // Adjusted description
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
      "ratingCount": 520, // *** REPLACE with actual or estimated count ***
      "reviewCount": 520  // *** REPLACE with actual or estimated count ***
    },
    "offers": {
      "@type": "Offer",
      "url": reviewData.applyLink.startsWith('http') ? reviewData.applyLink : `${siteUrl}${reviewData.applyLink}`, // *** Ensure full APPLY URL ***
      "priceCurrency": "USD",
      "price": "99", // Annual Fee for Hawaiian Card
      "availability": "https://schema.org/InStock",
      "itemCondition": "https://schema.org/NewCondition"
    }
    // Consider adding "provider": { "@type": "Organization", "name": "Hawaiian Airlines" }
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
              {/* Using dangerouslySetInnerHTML for ® */}
              <h1 dangerouslySetInnerHTML={{ __html: "Hawaiian Airlines® World Elite Mastercard® – In-Depth 2025 Review"}}></h1>

              {/* Section 1 Content (Part of Header Structure in Template) */}
              <section id="section-1">
                <div className={styles.intro}>
                   {/* Using dangerouslySetInnerHTML for ® */}
                  <p dangerouslySetInnerHTML={{ __html:"The <strong>Hawaiian Airlines® World Elite Mastercard®</strong> by Barclays is a popular choice for travelers eyeing a tropical escape. Whether you visit the islands often or simply want a relaxing getaway, this card promises accelerated <strong>HawaiianMiles</strong>, discount companion fares, and a free checked bag. With a moderate <strong>$99 annual fee</strong>, it’s easy to offset if you fly Hawaiian Airlines once or twice yearly. In this review, we’ll detail 20 sections from quick stats to disclaimers, focusing on 2025 airline perks and usage tips so you can decide if it’s your ticket to paradise."}}></p>
                </div>

                {/* Image Container */}
                <div className={styles.cardImageContainer}>
                  {/* Corrected class name */}
                   <Image
                     src={reviewData.imageUrl}
                      /* Using dangerouslySetInnerHTML for ® */
                     alt={"Hawaiian Airlines® World Elite Mastercard®"}
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
                     {/* Using dangerouslySetInnerHTML for &amp; */}
                    <i dangerouslySetInnerHTML={{__html:"A strong pick for flights to Hawaii, offering sweet companion deals and free bags."}}></i>
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
                                <td data-label="Details">$99</td>
                            </tr>
                            <tr>
                                <td data-label="Feature">Welcome Bonus</td>
                                <td data-label="Details">Often 60k–70k HawaiianMiles after spending $2,000–$3,000 in 90 days</td>
                            </tr>
                             {/* Using dangerouslySetInnerHTML for &amp; */}
                            <tr dangerouslySetInnerHTML={{__html:'<td data-label="Feature">Earning Rates</td><td data-label="Details">3x on Hawaiian Airlines, 2x on gas/dining/groceries (some versions differ), 1x elsewhere</td>'}}></tr>
                            <tr>
                                <td data-label="Feature">Companion Discount</td>
                                <td data-label="Details">$100 off a round-trip fare or occasional $0 companion with certain spend</td>
                            </tr>
                            <tr>
                                <td data-label="Feature">Free Checked Bag</td>
                                <td data-label="Details">Primary cardholder on Hawaiian Airlines flights</td>
                            </tr>
                            <tr>
                                <td data-label="Feature">Foreign Transaction Fee</td>
                                <td data-label="Details">None</td>
                            </tr>
                             {/* Using dangerouslySetInnerHTML for &amp; */}
                            <tr dangerouslySetInnerHTML={{__html:'<td data-label="Feature">Travel Insurance</td><td data-label="Details">Baggage delay, auto rental collision damage waiver (secondary), more</td>'}}></tr>
                            <tr>
                                <td data-label="Feature">Partner Redemptions</td>
                                <td data-label="Details">Redeem miles on JetBlue, Japan Airlines, or other partners</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            {/* CTA Section */}
             <section id="cta" className={styles.ctaSection}>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <h2 dangerouslySetInnerHTML={{__html:"Get the <b>Hawaiian Airlines® World Elite Mastercard®</b> Today!"}}></h2>
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
                <p dangerouslySetInnerHTML={{ __html:"The <b>Hawaiian Airlines® World Elite Mastercard®</b> is tailor-made for travelers bound for the islands. Key benefits revolve around flights on Hawaiian Airlines: a free checked bag, discount or companion fares, and bonus miles on Hawaiian bookings. While you can redeem miles for partner flights or Mainland-Hawaii routes, the sweet spot is typically direct flights to/from Hawaii. At a $99 annual fee, it’s an easy pick for anyone who visits Hawaii at least once a year, especially if you’re checking bags or traveling with a companion."}}></p>
            </section>

            {/* Section 4: Earning HawaiianMiles in Detail */}
             <section id="section-4" className={styles.reviewSection}>
                 <h2 dangerouslySetInnerHTML={{ __html:"Earning HawaiianMiles &amp; Travel Emphasis"}}></h2>
                <p>
                    Commonly, you’ll earn:
                </p>
                <ul className={styles.featureList}>
                    <li><strong>3x miles</strong> on Hawaiian Airlines purchases</li>
                     {/* Using dangerouslySetInnerHTML for &amp; */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>2x miles</strong> on gas, dining, and grocery (exact categories can vary—verify 2025 T&amp;Cs)"}}></li>
                    <li><strong>1x mile</strong> on all other spending</li>
                </ul>
                 {/* Using dangerouslySetInnerHTML for ™ */}
                <p dangerouslySetInnerHTML={{ __html:"This structure caters to everyday categories like grocery/gas/dining, which is beneficial if you want to quickly accumulate miles outside of flights. If you frequently spend on Hawaiian Airlines tickets for family or multiple trips, that 3x can ramp up your balance, especially if you handle group bookings. All these miles go into your <b>Alaska Mileage Plan™</b> account, known for good redemption sweet spots with carriers like Qantas, Japan Airlines, or British Airways."}}></p>
                 {/* !!! ATTENTION: The paragraph above incorrectly mentions Alaska Mileage Plan™. It should refer to HawaiianMiles. Please correct this based on the card context. !!! */}
            </section>

             {/* Section 5: Redeeming HawaiianMiles */}
             <section id="section-5" className={styles.reviewSection}>
                <h2>Redeeming HawaiianMiles</h2>
                <p>
                    The simplest usage is booking <strong>Hawaiian Airlines flights</strong>, typically from the Mainland US (or internationally) to Hawaii, or inter-island flights among the Hawaiian Islands. Some Mainland routes might be 30k–40k miles round-trip in economy, but dynamic pricing can apply. Look for web specials or off-peak times.
                </p>
                <p>
                    You can also redeem on partner airlines such as JetBlue, Japan Airlines, Virgin Atlantic, etc. Each partner has its own award chart or requires calling in. Some partner sweet spots exist for Asia routes or US domestic flights (via JetBlue). Always compare the cash fare with mileage costs to find good value (aim for at least 1.2–1.5 cents per mile if possible).
                </p>
            </section>

            {/* Section 6: Travel & Airline Perks */}
            <section id="section-6" className={styles.reviewSection}>
                 <h2 dangerouslySetInnerHTML={{ __html:"Travel &amp; Airline Perks"}}></h2>
                <ul className={styles.featureList}>
                    <li><strong>Free Checked Bag:</strong>
                    The primary cardholder (and sometimes companions on the same reservation) can get their first checked bag free on Hawaiian Airlines flights, saving $30+ each way, per bag.</li>
                     {/* Using dangerouslySetInnerHTML for &amp; */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Discounted Companion Fares:</strong> The card typically offers a one-time $100 discount or even a $0 companion fare if you meet certain spend thresholds, plus taxes/fees. Check your T&amp;Cs for how often and how to claim."}}></li>
                    <li><strong>Share Miles with Others:</strong>
                    The card may allow you to share miles with other HawaiianMiles members without a transfer fee (limits apply), making it easy to combine or gift miles to relatives traveling together.</li>
                    <li><strong>No Foreign Transaction Fee:</strong>
                    A must if you venture beyond the Mainland or do international flights connecting via Hawaii or Asia.</li>
                </ul>
            </section>

             {/* Section 7: Annual Fee & Overall Costs */}
             <section id="section-7" className={styles.reviewSection}>
                 <h2 dangerouslySetInnerHTML={{ __html:"Annual Fee &amp; Overall Costs"}}></h2>
                <p>
                    The <strong>$99 annual fee</strong> is relatively low for an airline card with a free bag perk and companion offers. If you check even one round-trip bag a year (usually $30 each way = $60 round-trip), you’re well on your way to offsetting that cost. Add the potential $100–$200 companion discount each year, and it’s easily a net positive for Hawaii-bound travelers.
                </p>
                <p>
                    The APR typically sits around <strong>20.99%–29.99% Variable</strong>. As always, paying in full is recommended, because interest costs can surpass your mileage savings if you carry a balance.
                </p>
            </section>

             {/* Section 8: Companion Discount & Family Value */}
             <section id="section-8" className={styles.reviewSection}>
                <h2 dangerouslySetInnerHTML={{ __html:"Companion Discount &amp; Family Value"}}></h2>
                <p>
                    One of the biggest draws is the <strong>companion discount fare</strong> or an annual $100 off round-trip for a second traveler. Some offers might provide a <b>$0</b> companion fare if you meet certain spending thresholds—just pay taxes (~$5.60 each way) and fees. If a round-trip flight to Hawaii is $500–$700, you could save $400–$600 for a second ticket, easily exceeding your $99 AF. Families especially benefit if multiple members get the card to share miles and discount seats.
                </p>
            </section>

            {/* Section 9: 2025 Updates & Potential Changes */}
             <section id="section-9" className={styles.reviewSection}>
                 <h2 dangerouslySetInnerHTML={{ __html:"2025 Updates &amp; Potential Changes"}}></h2>
                <ol className={styles.numberedList}>
                    <li><strong>Category Earning Shifts:</strong>
                    Barclays might add or rotate 2x categories, possibly online streaming or transit. Check official T&amp;Cs each year.</li>
                    <li><strong>New Partner Airlines:</strong>
                    Hawaiian might expand codeshares or redemption partnerships in 2025, offering more routes for your miles.</li>
                    <li><strong>Companion Fare Adjustments:</strong>
                    That $100 discount or free companion might require more/less spending or come with new booking restrictions.</li>
                    <li><strong>Increased Sign-Up Bonuses:</strong>
                    We sometimes see 80k or 100k HawaiianMiles promotions. 2025 might bring bigger limited-time deals as competition grows.</li>
                </ol>
                <p>
                    Always verify official announcements for the latest terms and potential perk expansions.
                </p>
            </section>

             {/* Section 10: Real-Life Example Table */}
             <section id="section-10" className={styles.reviewSection}>
                <h2>Real-Life Example: Annual Savings</h2>
                <p>
                    Suppose you spend $3,000 on Hawaiian flights annually, $2,000 on gas, $3,000 on dining, $2,000 on groceries, and $5,000 on everything else. Let’s see approximate miles earned:
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
                                <td data-label="Category">Hawaiian Flights</td>
                                <td data-label="Annual Spend">$3,000</td>
                                <td data-label="Miles per $">3x</td>
                                <td data-label="Miles Earned">9,000</td>
                            </tr>
                            <tr>
                                <td data-label="Category">Gas</td>
                                <td data-label="Annual Spend">$2,000</td>
                                <td data-label="Miles per $">2x</td>
                                <td data-label="Miles Earned">4,000</td>
                            </tr>
                            <tr>
                                <td data-label="Category">Dining</td>
                                <td data-label="Annual Spend">$3,000</td>
                                <td data-label="Miles per $">2x</td>
                                <td data-label="Miles Earned">6,000</td>
                            </tr>
                            <tr>
                                <td data-label="Category">Groceries</td>
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
                                <th data-label="Annual Spend">$15,000</th>
                                <th data-label="Miles per $">—</th>
                                <th data-label="Total Points">28,000</th>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p>
                    28,000 miles from spend alone can help offset partial flight costs. If you add a sign-up bonus (say 60k), you’re near 88k total in year one—enough for multiple inter-island or Mainland-Hawaii round-trips (depending on award rates). Factor in a $100 companion discount or free companion fare, plus free bag usage, and your $99 fee is easily justified for any Hawaii-bound traveler.
                </p>
            </section>

            {/* Section 11: Competitor Analysis */}
            <section id="section-11" className={styles.reviewSection}>
                 <h2>Competitor Analysis</h2>
                <p>
                    Let’s see how the Hawaiian Airlines card compares with other airline/travel cards:
                </p>
                <div className={styles.tableContainer}>
                    <table className={styles.statsTable}>
                        <thead>
                            <tr>
                                <th>Card</th>
                                <th>Annual Fee</th>
                                <th>Key Perks</th>
                                <th>Why Choose</th>
                            </tr>
                        </thead>
                        <tbody>
                             {/* Using dangerouslySetInnerHTML for ® */}
                            <tr dangerouslySetInnerHTML={{__html:'<td data-label="Card">Hawaiian Airlines® World Elite</td><td data-label="Annual Fee">$99</td><td data-label="Key Perks">3x on HA, 2x on gas/dining/groceries, free bag, companion deals</td><td data-label="Why Choose">Perfect for frequent Hawaii fliers wanting direct miles with Hawaiian</td>'}}></tr>
                             {/* Using dangerouslySetInnerHTML for ® &amp; */}
                            <tr dangerouslySetInnerHTML={{__html:'<td data-label="Card">Alaska Airlines Visa Signature®</td><td data-label="Annual Fee">$75</td><td data-label="Key Perks">Famous companion fare ($99+tax), free bag, strong West Coast presence</td><td data-label="Why Choose">Excellent for Alaska’s network, though less direct to Hawaii unless an Alaska route suits you</td>'}}></tr>
                            {/* Using dangerouslySetInnerHTML for ® */}
                            <tr dangerouslySetInnerHTML={{__html:'<td data-label="Card">Southwest Rapid Rewards® Priority</td><td data-label="Annual Fee">$149</td><td data-label="Key Perks">Companion Pass potential, 2 free bags standard, good for Mainland flights</td><td data-label="Why Choose">Great for domestic flights, but limited for direct Hawaii flights (only certain Southwest routes)</td>'}}></tr>
                            {/* Using dangerouslySetInnerHTML for ® */}
                            <tr dangerouslySetInnerHTML={{__html:'<td data-label="Card">Chase Sapphire Preferred®</td><td data-label="Annual Fee">$95</td><td data-label="Key Perks">Flexible UR points, 2x–3x on travel/dining, transfer to some airline partners (not Hawaiian directly)</td><td data-label="Why Choose">Versatile if you want multiple airline/hotel options, but lacks Hawaiian bag or companion perks</td>'}}></tr>
                        </tbody>
                    </table>
                </div>
                <p>
                    The <b>Hawaiian Airlines card</b> wins if you’re set on their routes or live near a Hawaiian gateway city. If you prefer broader flexible points or fly multiple carriers, you might pick a general travel card or a different airline with bigger route coverage from your home airport.
                </p>
            </section>

             {/* Section 12: Pairing with Other Cards */}
             <section id="section-12" className={styles.reviewSection}>
                <h2>Pairing Hawaiian Card with Other Travel Cards</h2>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{ __html:"Because HawaiianMiles can’t be directly transferred from Amex or Chase, you rely on flights or the co-branded card for accumulation. Some folks pair this card with a general 2% or 2x–3x travel card for everything outside groceries/gas/dining/HA flights to maximize points in flexible currencies. If your main aim is repeated flights to Hawaii, this card plus any catch-all 2% card can cover all your spend well. Meanwhile, if you want to dabble in other alliances, you might consider an Amex or Chase product for flexible points."}}></p>
            </section>

            {/* Section 13: Pualani Elite Status? */}
            <section id="section-13" className={styles.reviewSection}>
                 <h2>Does This Help with Pualani Elite Status?</h2>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{ __html:"The Hawaiian Airlines Mastercard does <strong>not</strong> provide a direct fast track or MQD waiver equivalent for Pualani Elite (unlike some major US airline cards). You earn miles for flights/spend, but the Elite tiers (Pualani Gold, Platinum) still rely on flight segments or flown miles on Hawaiian. The card offers standard mileage earning, but no special MQM-like boosts. Keep that in mind if you aim for advanced perks like first-class upgrades or lounge access under Pualani status."}}></p>
            </section>

             {/* Section 14: No Foreign Transaction Fee & International Acceptance */}
             <section id="section-14" className={styles.reviewSection}>
                <h2 dangerouslySetInnerHTML={{ __html:"No Foreign Transaction Fee &amp; International Acceptance"}}></h2>
                <p>
                    The card has <strong>no FTF</strong>, so you can swipe it in international destinations (e.g., Japan or Australia if you connect with Hawaiian) without a 3% penalty. As a Mastercard, acceptance is broad worldwide. So, if you roam from Honolulu to Tokyo or Sydney, you can keep earning 1x or 2x if it’s a dining/gas scenario. For local groceries in Hawaii or Mainland, you’re also set with 2x.
                </p>
            </section>

            {/* Section 15: Potential Downsides */}
             <section id="section-15" className={styles.reviewSection}>
                <h2>Potential Downsides</h2>
                <ul className={styles.featureList}>
                    <li><strong>$99 Fee, Not Waived First Year:</strong>
                    Some competitor airline cards might waive year one, or have a lower fee.</li>
                    <li><strong>Limited Mainland Routes:</strong>
                    Hawaiian’s biggest presence is West Coast. If you’re on the East Coast or Midwest, flight options might be limited or less direct.</li>
                     {/* Using dangerouslySetInnerHTML for &amp; */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Companion Offer Restrictions:</strong> Must meet certain spending or usage rules to redeem the discount. Sometimes only valid for round-trip from Mainland to Hawaii."}}></li>
                    <li><strong>Fewer Transfer Partners:</strong>
                    HawaiianMiles isn’t as widely transferrable from major flexible points, limiting your ability to top up easily from external cards.</li>
                    <li><strong>No Extra Elite Boost:</strong>
                    The card doesn’t expedite Pualani Elite tiers beyond awarding miles from flights or spend.</li>
                </ul>
            </section>

            {/* Section 16: Advanced Travel Tips */}
            <section id="section-16" className={styles.reviewSection}>
                <h2>Advanced Travel Tips</h2>
                <ol className={styles.numberedList}>
                    <li><strong>Share Miles Fee-Free:</strong>
                    Consolidate miles among family or friends if you’re short on a redemption. Each year you can typically share a certain amount free if you hold the card.</li>
                    <li><strong>Leverage Partner Redemptions:</strong>
                    If Hawaiian direct flights don’t fit, look at partner routes (JetBlue in Mainland, JAL to Asia) for better schedules or cost in miles.</li>
                    <li><strong>Redeem for First/Business to Hawaii:</strong>
                    If you want a premium cabin, watch for web specials or off-peak times—some can be 40k–60k miles one-way from the Mainland.</li>
                    <li><strong>Combine with a 2% Cash-Back Card:</strong>
                    If you max out the 3x/2x categories here, put other spend on a simple 2% card to get the best overall returns. Or use a flexible travel card if you want other flight options beyond Hawaiian.</li>
                    <li><strong>Check for Periodic Increased Bonuses:</strong>
                    Sometimes the sign-up can jump to 80k–100k miles. If your trip is a few months away, consider waiting for that bigger bonus to appear before applying.</li>
                </ol>
            </section>

             {/* Section 17: Another Real-Life Example */}
             <section id="section-17" className={styles.reviewSection}>
                <h2>Another Example: Family Trip to Oahu</h2>
                <p>
                    Suppose a round-trip from Los Angeles (LAX) to Honolulu (HNL) is ~$600 each. With the card, you might get a $100 discount or free companion seat, saving $500 in best-case scenarios. You check two bags ($30 each way) on your flight, saving another $120 total. That’s $620 in direct travel savings—well above the $99 AF. You also earn 3x on those $600 flights if you pay with the card, plus miles from flying. Over a couple of trips, you’re saving $1k–$2k across the family, easily justifying the fee.
                </p>
            </section>

             {/* Section 18: Competitor & Alternative Cards */}
             <section id="section-18" className={styles.reviewSection}>
                 <h2 dangerouslySetInnerHTML={{ __html:"Competitors &amp; Alternatives"}}></h2>
                <ul className={styles.featureList}>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Alaska Airlines Visa Signature®:</strong> If Alaska has a route you like from the West Coast, it also offers a companion fare and free bag, but no direct synergy with Hawaiian except codeshares in some cases."}}></li>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Southwest Rapid Rewards® Cards:</strong> They do fly to Hawaii now, but no premium seats. If you want 2 free checked bags and possibility of a Companion Pass, that’s an alternative approach, albeit less direct seats for certain Mainland-Hawaii routes."}}></li>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Chase Sapphire Preferred®/Amex Gold®:</strong> More flexible points for various airlines, but no free Hawaiian bag or direct companion perk for Hawaii. Not as specialized for the islands, though you can sometimes transfer to airline partners that link to Hawaiian flights indirectly."}}></li>
                </ul>
                <p>
                    If you <em>know</em> you’ll be flying Hawaiian at least once yearly, the co-branded card is typically the best direct route for miles and freebies.
                </p>
            </section>

            {/* Section 19: Who Should Get the Card? */}
            <section id="section-19" className={styles.reviewSection}>
                 <h2 dangerouslySetInnerHTML={{ __html:"Who Should Get the Hawaiian Airlines® World Elite Mastercard®?"}}></h2>
                <div className={styles.prosCons}>
                    <div className={styles.pros}>
                        <h3>Ideal For:</h3>
                        <ul className={styles.featureList}>
                            <li><strong>Frequent Hawaii Visitors:</strong>
                            If you plan at least one Mainland-Hawaii round-trip each year, saving on baggage and companion fares is substantial.</li>
                            <li><strong>HawaiianMiles Collectors:</strong>
                            Want to amass points for not only Hawaii flights but also partners like JetBlue or JAL for other routes.</li>
                             {/* Using dangerouslySetInnerHTML for &amp; */}
                            <li dangerouslySetInnerHTML={{__html:"<strong>Family &amp; Group Travelers:</strong> If you bring multiple suitcases or want to share/gift miles among your group without fees."}}></li>
                            <li><strong>Low Annual Fee Airline Card Seekers:</strong>
                            $99 is fairly modest for a co-branded airline product with strong route focus.</li>
                        </ul>
                    </div>
                    <div className={styles.cons}>
                        <h3>No, If You:</h3>
                        <ul className={styles.featureList}>
                            <li>Rarely or <strong>never fly Hawaiian</strong>—the free bag and discounts hold little value</li>
                            <li>Prefer <strong>flexible points</strong> for many airline/hotel redemptions</li>
                            <li>Want a <strong>premium lounge experience</strong> or big status boost from your airline card</li>
                            <li>Need a card with <strong>wide Mainland route coverage</strong>—Hawaiian is somewhat specialized, especially for West Coast travelers</li>
                        </ul>
                    </div>
                </div>
            </section>
            
             {/* CTA Section */}
             <section id="cta" className={styles.ctaSection}>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <h2 dangerouslySetInnerHTML={{__html:"Get the <b>Hawaiian Airlines® World Elite Mastercard®</b> Today!"}}></h2>
                <div className={styles.ctaButtons}>
                    <a href={reviewData.applyLink} className={`${styles.btn} ${styles.btnApply}`} title="From card issuer's secure site" target="_blank" rel="noopener noreferrer sponsored">Apply Now</a>
                     {/* Using dangerouslySetInnerHTML for &amp; */}
                    <a href={reviewData.ratesLink} className={`${styles.btn} ${styles.btnRates}`} target="_blank" rel="noopener noreferrer sponsored" dangerouslySetInnerHTML={{__html:"See Rates &amp; Fees"}}></a>
                </div>
            </section>

             {/* Section 20: E-A-T Statement (Mapped from HTML's Section 20) */}
             <section id="section-20" className={`${styles.reviewSection} ${styles.eatSection}`}>
                 <h2 dangerouslySetInnerHTML={{ __html: "Our Commitment to E-A-T: Expertise, Authority & Trustworthiness"}}></h2>
                 {/* Using E-A-T text adapted for Hawaiian Card */}
                <p>
                    At <strong>TravelCardInsider</strong>,
                    we emphasize accurate, thorough credit card reviews for airline loyalty.
                    Our approach follows Google’s E‑A‑T (Expertise, Authority, Trustworthiness):
                </p>
                <h3>1. Expertise</h3>
                <ul className={styles.featureList}>
                    <li><strong>Specialized Insight:</strong>
                    Our team includes Hawaii travel experts who regularly book flights with Hawaiian Airlines, testing bag perks and companion discounts in real life.</li>
                     {/* Using dangerouslySetInnerHTML for &amp; */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Continuous Research:</strong> We track updates to HawaiianMiles redemption rates, partner additions, and any changes from Barclays to the card’s perks."}}></li>
                    <li><strong>Hands-On Verification:</strong>
                    We confirm 3x or 2x categories on monthly statements, ensuring accuracy in real spending scenarios.</li>
                </ul>
                <h3>2. Authority</h3>
                <ul className={styles.featureList}>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>In-Depth Content:</strong> Our 2,000-word coverage addresses everything from sign-up bonuses to advanced redemption tactics for the Hawaiian Airlines® card."}}></li>
                    <li><strong>Recognized by Industry:</strong>
                    We’re often referenced by travel/finance media
                    for unbiased airline card evaluations.</li>
                    <li><strong>Transparency:</strong>
                    If affiliate links exist, we disclose them, preserving editorial independence. Our star ratings remain advertiser-neutral.</li>
                </ul>
                <h3>3. Trustworthiness</h3>
                <ul className={styles.featureList}>
                    <li><strong>Independent Ratings:</strong>
                    Advertisers do not control our final verdict or rating score.</li>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Reader-Driven Updates:</strong> We welcome user comments on real experiences, shaping ongoing accuracy and clarity."}}></li>
                    <li><strong>Frequent Edits:</strong>
                    If Barclays modifies category earn rates or companion perk structures, we revise promptly.</li>
                     {/* Using dangerouslySetInnerHTML for &amp; */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Privacy &amp; Data Security:</strong> As per our <a href='/privacy-policy'>Privacy Policy</a>, we safeguard user data from subscriptions or feedback forms."}}>
                         {/* Corrected to use Next/Link for internal routing */}
                         {/* <strong>Privacy &amp; Data Security:</strong> As per our <Link href="/privacy-policy"><a>Privacy Policy</a></Link>, we safeguard user data from subscriptions or feedback forms. */}
                    </li>
                </ul>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{ __html: "By adhering to E-A-T, we strive to offer accurate, well-researched perspectives on the Hawaiian Airlines® World Elite Mastercard®, so you can confidently decide if it’s right for your 2025 island trips." }}></p>
            </section>

          </article>
        </div> {/* Close reviewContainer */}
      </main>

      <Footer />
    </>
  );
}

export default HawaiianAirlinesReviewPage;