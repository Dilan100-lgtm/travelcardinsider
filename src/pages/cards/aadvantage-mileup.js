// Example Path: pages/reviews/aadvantage-mileup.js
// Or: pages/reviews/[slug].js (if using dynamic routing with 'aadvantage-mileup' as slug)

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
  cardName: 'American Airlines AAdvantage® MileUp® Card',
  title: 'American Airlines AAdvantage® MileUp® Card – 2025 In-Depth Review',
  description: 'A 2,500-word comprehensive review of the American Airlines AAdvantage® MileUp® Card for 2025. Learn about 2x groceries and AA purchases, no annual fee, advanced usage tips, synergy with other AAdvantage cards, and disclaimers.',
  keywords: 'American Airlines, AAdvantage, MileUp, no annual fee, travel credit card, 2x groceries, 2025 updates',
  author: 'TravelCardInsider', // *** REPLACE with your actual author/site name ***
  imageUrl: '/CardArt-7.webp', // *** VERIFY PATH in /public ***
  ratingValue: 6.1, // From AAdvantage MileUp HTML
  applyLink: 'https://creditcards.aa.com/credit-cards/citi-mileup-card-american-airlines-direct/', // *** REPLACE with actual MileUp APPLY URL ***
  ratesLink: 'https://creditcards.aa.com/credit-cards/citi-mileup-card-american-airlines-direct/', // *** VERIFY URL ***
  // Image dimensions (MUST BE ACCURATE for next/image)
  imageWidth: 480, // *** REPLACE with actual image width *** (Example Placeholder)
  imageHeight: 304, // *** REPLACE with actual image height *** (Example Placeholder)
};

// --- Rating Tooltip Content (Customize if needed for MileUp) ---
const ratingCriteria = [ // *** VERIFY/CUSTOMIZE these criteria for MileUp Rating ***
    'No Annual Fee Value',
    'Grocery & AA Earning Rate (2x)',
    'Welcome Bonus (Miles + Credit)',
    'AAdvantage® Miles Redemption',
    'Lack of Travel Perks (Bags/Lounge)',
];

function AAdvantageMileUpReviewPage() {
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
  // !!! VERIFY all URLs, counts, and details FOR AA MILEUP CARD !!!
  const siteUrl = "https://www.travelcardinsider.com"; // *** REPLACE with your actual site URL ***
  const pageUrl = `${siteUrl}/reviews/aa-mileup`; // *** REPLACE with your actual page URL ***
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "American Airlines AAdvantage® MileUp® Mastercard®", // Added Mastercard from schema
    "image": `${siteUrl}${reviewData.imageUrl}`, // *** Assuming imageUrl starts with / ***
    "description": "The American Airlines AAdvantage® MileUp® Card is a no-annual-fee credit card offering 2x miles on groceries and American Airlines purchases.", // Adjusted description
    "brand": {
      "@type": "Brand",
      "name": "Citi" // Issuer is Citi according to Apply link structure usually
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
      "ratingCount": 350, // *** REPLACE with actual or estimated count ***
      "reviewCount": 350  // *** REPLACE with actual or estimated count ***
    },
    "offers": {
      "@type": "Offer",
      "url": reviewData.applyLink.startsWith('http') ? reviewData.applyLink : `${siteUrl}${reviewData.applyLink}`, // *** Ensure full APPLY URL ***
      "priceCurrency": "USD",
      "price": "0", // Annual Fee for MileUp
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
              <h1 dangerouslySetInnerHTML={{ __html: "American Airlines AAdvantage® MileUp® Card – 2025 In-Depth Review"}}></h1>

              {/* Section 1 Content (Part of Header Structure in Template) */}
              <section id="section-1">
                 {/* Using dangerouslySetInnerHTML for ® */}
                <div className={styles.intro}>
                   <p dangerouslySetInnerHTML={{ __html:"The <strong>American Airlines AAdvantage® MileUp® Card</strong> stands out among airline co-branded products for its <strong>no-annual-fee</strong> approach. With <strong>2x miles on groceries</strong> and American Airlines purchases, plus a modest sign-up bonus featuring <strong>10,000 AAdvantage miles</strong> and a <strong>$50 statement credit</strong> after meeting a low spend threshold, it’s perfect for the casual traveler who doesn't want to pay a yearly fee. Across 20 comprehensive sections, we’ll dissect everything from advanced usage tips to synergy with other AAdvantage cards, disclaimers, real-life spending scenarios, and more—empowering you to decide if MileUp® is your 2025 solution."}}></p>
                </div>

                {/* Image Container */}
                <div className={styles.cardImageContainer}>
                  {/* Corrected class name */}
                   <Image
                     src={reviewData.imageUrl}
                     alt={"AAdvantage MileUp Card"}
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
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <i dangerouslySetInnerHTML={{__html:"No annual fee, easy 2x on groceries and AA flights, a small bonus—great for casual travelers wanting AAdvantage miles on everyday spend."}}></i>
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
                                <td data-label="Details" dangerouslySetInnerHTML={{__html:"~20.99% – 29.74% Variable (based on creditworthiness)"}}></td>
                            </tr>
                            <tr>
                                <td data-label="Feature">Sign-Up Bonus</td>
                                <td data-label="Details">Typically 10,000 miles + $50 statement credit after $500 spend in 3 months</td>
                            </tr>
                            {/* Using dangerouslySetInnerHTML for &amp; */}
                            <tr dangerouslySetInnerHTML={{__html:'<td data-label="Feature">Rewards Rate</td><td data-label="Details">2x on AA purchases &amp; groceries, 1x on everything else</td>'}}></tr>
                            <tr>
                                <td data-label="Feature">Foreign Transaction Fee</td>
                                <td data-label="Details">3%</td>
                            </tr>
                             {/* Using dangerouslySetInnerHTML for ® */}
                            <tr dangerouslySetInnerHTML={{__html:'<td data-label="Feature">Redemption Options</td><td data-label="Details">Redeem AAdvantage miles for flights, seat upgrades, partner airlines, and more</td>'}}></tr>
                            <tr>
                                <td data-label="Feature">Intro APR Offer</td>
                                <td data-label="Details">Occasionally 0% intro on purchases for X months (varies); check current promotions</td>
                            </tr>
                            <tr>
                                <td data-label="Feature">Recommended Credit Score</td>
                                <td data-label="Details">Good–Excellent (700+ typically)</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            {/* CTA Section */}
             <section id="cta" className={styles.ctaSection}>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <h2 dangerouslySetInnerHTML={{__html:"Apply for the <b>American Airlines AAdvantage® MileUp®</b> Card"}}></h2>
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
                <p dangerouslySetInnerHTML={{ __html:"The <strong>AAdvantage® MileUp®</strong> is an **entry-level** airline card focusing on <strong>no annual fee</strong> while still letting you earn <strong>American Airlines miles</strong>. Many airline co-branded cards impose fees around $99 or more, but MileUp® cuts that to $0, aiming at new or casual travelers who appreciate <strong>2x miles at groceries + on AA purchases</strong>. You’ll get a smaller sign-up bonus vs. premium cards but never pay a yearly cost. For those who occasionally fly American Airlines or want to gradually stockpile miles, it’s a gentle start to the AAdvantage program without big investment."}}></p>
            </section>

            {/* Section 4: Earning Potential: 2x on Groceries & AA */}
             <section id="section-4" className={styles.reviewSection}>
                 <h2 dangerouslySetInnerHTML={{ __html:"Earning Potential: 2x on Groceries &amp; AA"}}></h2>
                <p>
                    The card’s highlight is **2x miles** on:
                </p>
                <ul className={styles.featureList}>
                    <li><strong>American Airlines purchases:</strong> flight tickets, seat upgrades, in-flight purchases (when coded properly), etc.</li>
                    <li><strong>Grocery stores:</strong> This is key—so many no-fee airline cards don’t reward groceries at 2x. If you’re a typical household shopper, it’s an easy way to add miles year-round. Just ensure the store codes as a “grocery” merchant, not a warehouse club or supercenter.</li>
                </ul>
                <p>
                    You earn <strong>1x mile on everything else</strong>.
                    While not amazing for general spend, it’s typical for a no-fee airline card.
                    The stand-out part is groceries, since you can accumulate a respectable stash of AA miles just by buying weekly produce, meat, or household items.
                </p>
            </section>

            {/* Section 5: Redemption & Using AAdvantage Miles */}
            <section id="section-5" className={styles.reviewSection}>
                 <h2 dangerouslySetInnerHTML={{ __html:"Redemption &amp; Using AAdvantage Miles"}}></h2>
                <p>
                    AAdvantage miles remain one of the largest airline loyalty currencies worldwide,
                    with numerous <strong>redemption</strong> opportunities:
                </p>
                <ol className={styles.numberedList}>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>American Airlines Award Flights:</strong> Book domestic or international flights at saver or anytime award levels. Award sweet spots exist on certain routes—like short domestic flights or off-peak international zones."}}></li>
                     {/* Using dangerouslySetInnerHTML for ® &amp; */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>oneworld® &amp; Partner Airlines:</strong> Redeem miles for travel on oneworld partners like British Airways, Japan Airlines, Qatar Airways, etc. Sometimes you find amazing premium cabin flights for fewer miles if you master partner charts."}}></li>
                    <li><strong>Upgrades:</strong>
                    Use miles + co-pay to upgrade from economy to business or from business to first on some AA flights.</li>
                     {/* Using dangerouslySetInnerHTML for &amp; */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Hotels, Cars, &amp; Other Redemptions:</strong> The AAdvantage program also allows non-flight options, though these typically yield less value than flight awards."}}></li>
                </ol>
                <p>
                    Generally, you’ll get better value from flight redemptions—1.5–2 cents per mile or more in premium cabins.
                    For economy flights, it might be 1–1.4 cents per mile.
                    Some off-peak AA awards can be as low as 7,500–10,000 miles one-way, letting you stretch your miles quite far.
                </p>
            </section>

            {/* Section 6: Sign-Up Bonus: 10,000 Miles + $50 Statement Credit */}
            <section id="section-6" className={styles.reviewSection}>
                <h2>Sign-Up Bonus: 10,000 Miles + $50 Statement Credit</h2>
                <p>
                    While not huge, the bonus typically requires only <strong>$500 spend in 3 months</strong>—a low threshold.
                    That’s easy for groceries alone.
                    The 10k miles can be worth $120–$180 in typical flight redemptions, possibly more if you find a sweet-spot route.
                    Add a <strong>$50 statement credit</strong> to sweeten the deal.
                    For a <strong>no-fee</strong> product, it’s a fair welcome for new cardholders.
                    Premium AA cards might offer 50k or 60k miles but charge $99–$450 fees.
                    MileUp® is more about slow and steady mile-building with no yearly cost.
                </p>
            </section>

             {/* Section 7: APR & Fees */}
             <section id="section-7" className={styles.reviewSection}>
                <h2 dangerouslySetInnerHTML={{ __html:"APR &amp; Fees"}}></h2>
                <p>
                    Like many airline co-branded cards:
                </p>
                <ul className={styles.featureList}>
                    <li><strong>Annual Fee:</strong> $0 forever—no hidden or waived first-year approach.
                    A big plus if you just want to dabble in the AAdvantage program.</li>
                    <li><strong>APR:</strong> Typically ~20.99%–29.74% variable, dependent on credit.
                    If you revolve a balance, interest will overshadow your miles earned—so aim to pay in full or use any 0% intro if offered.</li>
                    <li><strong>Foreign Transaction Fee:</strong> 3% on foreign purchases.
                    That’s standard for many no-fee airline cards but still a minus if you travel abroad.
                    You’ll want a different card for overseas spend if you want to avoid that fee.</li>
                    <li><strong>Late/Penalty Fees:</strong> Standard cycle, e.g., up to $40 if late.
                    Not unusual, but keep up timely payments to protect your credit score and avoid fees.</li>
                </ul>
                <p>
                    Overall, the biggest cost advantage is <strong>$0 annual fee</strong>.
                    The biggest limitation is the foreign transaction fee if traveling internationally.
                    Considering American Airlines has many global routes, ironically it’s not an ideal card for foreign purchases outside of flight bookings (which typically still might incur that fee if processed overseas).
                </p>
            </section>

            {/* Section 8: Travel Perks & Additional Features */}
            <section id="section-8" className={styles.reviewSection}>
                 <h2 dangerouslySetInnerHTML={{ __html:"Travel Perks &amp; Additional Features"}}></h2>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{ __html:"The <strong>AAdvantage® MileUp®</strong> is relatively barebones compared to bigger AA cards. For instance, you <strong>do not</strong> get:"}}></p>
                <ul className={styles.featureList}>
                    <li>Free checked bag</li>
                    <li>Priority boarding beyond standard group boarding</li>
                    <li>Admirals Club lounge access or day passes</li>
                    <li>Annual companion certificates or travel credits</li>
                </ul>
                <p>
                    However, you do get:
                </p>
                <ul className={styles.featureList}>
                    <li><strong>25% savings on in-flight purchases</strong> for food and beverages on American Airlines flights</li>
                    <li>Basic <strong>travel/purchase protections</strong> like purchase protection or extended warranty</li>
                    <li><strong>Global Assist Hotline</strong> if traveling 100+ miles from home (medical/legal/other assistance; not always fully covered, but helpful for basic guidance)</li>
                </ul>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{ __html:"If you want free bags or lounge privileges, you’d need a higher-tier AA co-branded card like the <strong>Citi® / AAdvantage® Platinum Select</strong> or <strong>AAdvantage® Executive World Elite Mastercard</strong>. But those carry annual fees starting at $99 or much higher. MileUp® remains the simpler, no-fee approach with 2x groceries."}}></p>
            </section>

            {/* Section 9: Real-Life Example Spending Table */}
             <section id="section-9" className={styles.reviewSection}>
                <h2>Real-Life Example: Earning with MileUp®</h2>
                <p>
                    Suppose you spend $300 monthly at grocery stores = $3,600 annually, plus $800 on AA flights yearly.
                    Then you have $5,000 on other categories. Let’s see the miles:
                </p>
                <div className={styles.tableContainer}>
                    <table className={styles.statsTable}>
                        <thead>
                            <tr>
                                <th>Category</th>
                                <th>Annual Spend</th>
                                <th>Miles per $</th>
                                <th>Total Miles</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td data-label="Category">Groceries</td>
                                <td data-label="Annual Spend">$3,600</td>
                                <td data-label="Miles per $">2x</td>
                                <td data-label="Total Miles">7,200</td>
                            </tr>
                            <tr>
                                <td data-label="Category">AA Flights</td>
                                <td data-label="Annual Spend">$800</td>
                                <td data-label="Miles per $">2x</td>
                                <td data-label="Total Miles">1,600</td>
                            </tr>
                            <tr>
                                <td data-label="Category">All Other</td>
                                <td data-label="Annual Spend">$5,000</td>
                                <td data-label="Miles per $">1x</td>
                                <td data-label="Total Miles">5,000</td>
                            </tr>
                            <tr style={{fontWeight: 'bold', borderTop: '2px solid #dee2e6'}}>
                                <th data-label="Category">Totals</th>
                                <th data-label="Annual Spend">$9,400</th>
                                <th data-label="Miles per $">—</th>
                                <th data-label="Total Points">13,800</th> {/* Corrected label */}
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p>
                    <strong>13,800</strong> miles from normal spending.
                    Add the sign-up bonus of <strong>10k</strong> (plus a $50 statement credit) for ~23,800 miles total in your first year.
                    That’s enough for a <strong>domestic round-trip</strong> on some saver awards or nearly enough for a short flight + seat upgrades.
                    All while paying $0 in annual fees.
                </p>
            </section>

            {/* Section 10: Synergy with Other AAdvantage Cards */}
            <section id="section-10" className={styles.reviewSection}>
                <h2>Synergy with Other AAdvantage Cards</h2>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{ __html:"If you like building AA miles faster or want perks like free bags, you might combine MileUp® with a <strong>premium AAdvantage card</strong>. For example:"}}></p>
                <ul className={styles.featureList}>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{ __html:"<strong>Citi® / AAdvantage® Platinum Select:</strong> $99 annual fee (often waived year 1), offers free checked bag, 2x on AA/dining/gas. Might overshadow MileUp® for some categories, but MileUp® has groceries at 2x, which the Platinum Select lacks."}}></li>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{ __html:"<strong>AAdvantage® Executive World Elite Mastercard:</strong> $450+ fee with Admirals Club lounge membership. That’s for heavy travelers. MileUp® can remain your “grocery earner” while the Executive card is your lounge pass + free bag tool."}}></li>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{ __html:"<strong>Barclays AAdvantage Aviator Cards:</strong> Another set of AA co-branded products that might have big sign-up bonuses or specialized perks but do charge an annual fee. If you want 2–3 AA cards, you can stack sign-up bonuses, but be aware of fees and application rules."}}></li>
                </ul>
                <p>
                    In short, keep MileUp® for 2x groceries without a fee, possibly adding a fee-based AA card if you want bag waivers, lounge access, or bigger sign-up bonuses.
                    Merging those points is easy because they all funnel into the same AAdvantage account.
                </p>
            </section>

             {/* Section 11: 2025 Updates & Potential Changes */}
             <section id="section-11" className={styles.reviewSection}>
                 <h2 dangerouslySetInnerHTML={{ __html:"2025 Updates &amp; Potential Changes"}}></h2>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{ __html:"In 2025, some speculation might revolve around AAdvantage revamping certain tiers or adjusting how co-branded cards earn Loyalty Points (the metric for AA elite status). Currently, the MileUp® card can earn Loyalty Points on everyday spend (1 point per dollar). If they expand that or change the formula, it might become more/less powerful for chasing Gold or higher statuses. Always check official <strong>AAdvantage program updates</strong> each year. The card’s <strong>2x groceries</strong> is unlikely to vanish, as it’s the main selling point. But sign-up bonuses or small category expansions could shift. Keep an eye on official communication from Citi and American Airlines for any 2025 announcements."}}></p>
            </section>

            {/* Section 12: Potential Drawbacks & Limitations */}
             <section id="section-12" className={styles.reviewSection}>
                 <h2 dangerouslySetInnerHTML={{ __html:"Potential Drawbacks &amp; Limitations"}}></h2>
                <ul className={styles.featureList}>
                    <li><strong>No free bag or priority boarding</strong> – A major hallmark of airline cards is waived baggage fees. You won’t get that here.</li>
                    <li><strong>3% Foreign Transaction Fee</strong> – If you frequently travel abroad (especially beyond AA flight bookings), consider a no-FTF card. This can overshadow the 2x earnings if the purchase is coded internationally.</li>
                    <li><strong>Relatively small sign-up bonus</strong> – It’s easy to attain but far smaller than 50k–60k from premium AA cards.</li>
                    <li><strong>Minimal additional perks</strong> – No lounge access, no big statement credits, no expanded insurance. Basic coverage only.</li>
                </ul>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{ __html:"In short, MileUp® is designed for <strong>zero annual fee + basic miles earning</strong>. If you want more robust travel benefits, you’ll need a different or additional card."}}></p>
            </section>

            {/* Section 13: Real-Life Extended Example */}
            <section id="section-13" className={styles.reviewSection}>
                <h2>Another Real-Life Example: Family Grocery & Occasional AA Travel</h2>
                <p>
                    Let’s assume a family spends $500 monthly at grocery stores ($6,000/year). They also book $1,200 in AA flights.
                    Additional $3,800 on random spend. Let’s see approximate miles:
                </p>
                <ul className={styles.featureList}>
                    <li>Groceries: $6,000 x 2 = 12,000 miles</li>
                    <li>AA flights: $1,200 x 2 = 2,400 miles</li>
                    <li>All other: $3,800 x 1 = 3,800 miles</li>
                    <li>Total from spend = 18,200 miles</li>
                </ul>
                <p>
                    Then add a 10k sign-up bonus + $50 statement credit after a modest spend threshold.
                    That’s 28,200 miles in the first year.
                    Possibly enough for 1–2 domestic economy round-trips or a chunk off an international flight.
                    No annual fee. Not bad for typical grocery + a couple of AA flights.
                </p>
            </section>

            {/* Section 14: Using Miles for Seat Upgrades */}
            <section id="section-14" className={styles.reviewSection}>
                <h2>Using Miles for Seat Upgrades</h2>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{ __html:"American Airlines allows using miles plus a co-pay to upgrade from economy to business or from business to first on select routes. However, upgrade “space” can be limited, and co-pays can be substantial, especially for long-haul flights. MileUp® holders can still request or pay for these mileage upgrades, but the value can vary widely. Always compare the cost difference if you were to purchase the premium seat outright. Sometimes saving miles for an award ticket is more efficient than paying for an upgrade. On short domestic routes, an upgrade might require fewer miles, but it’s rarely “the best” redemption. The card itself doesn’t guarantee any upgrade priority status; that’s typically for elite members. So be mindful of how upgrades fit your travel style."}}></p>
            </section>

             {/* Section 15: Pairing with Another Non-AA Card for Overseas Travel */}
             <section id="section-15" className={styles.reviewSection}>
                <h2>Pairing with Another Non-AA Card for Overseas Travel</h2>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{ __html:"Because the MileUp® card has a <strong>3% foreign transaction fee</strong>, you might want a secondary no-annual-fee card with no FTF (like Capital One Quicksilver or Bank of America Travel Rewards) for any international purchases. Then use MileUp® for domestic groceries or American Airlines flight purchases. That way, you avoid paying unnecessary fees on global transactions while still reaping the 2x miles on groceries. This two-card strategy ensures you <strong>maximize rewards</strong> in different scenarios."}}></p>
            </section>

            {/* Section 16: Intro APR & Large Purchases */}
             <section id="section-16" className={styles.reviewSection}>
                <h2 dangerouslySetInnerHTML={{ __html:"Intro APR &amp; Large Purchases"}}></h2>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{ __html:"Sometimes, the MileUp® card might offer a <strong>0% intro APR</strong> on purchases for, say, 15 months. If so, you could do a large grocery or AA flight purchase, then pay it off over time interest-free. But once the intro ends, the APR can jump to 20.99%–29.74%. If you revolve a balance, the interest charges will overshadow your earned miles. So treat any 0% promotion carefully—like a short-term financing option. The best practice is still paying in full monthly to keep your net rewards high and maintain a strong credit record."}}></p>
            </section>

            {/* Section 17: Competitor Cards Analysis */}
            <section id="section-17" className={styles.reviewSection}>
                <h2>Competitor Cards Analysis</h2>
                <p>
                    Some direct competitors in the airline no-fee space:
                </p>
                <ul className={styles.featureList}>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Delta SkyMiles® Blue</strong>: Also $0 fee, 2x on Delta/dining, minimal sign-up bonus, no free bag. If you prefer Delta, that’s parallel to MileUp® for AA. But MileUp® has groceries at 2x, which might be more widely beneficial than 2x on dining alone."}}></li>
                     {/* Using dangerouslySetInnerHTML for ℠ ® */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>United Gateway℠ Card</strong>: $0 fee, 2x on United, gas, transit. Another parallel approach. But again, if you buy groceries more than gas, MileUp® might be better. Freed bag perks appear on the United Explorer card, which has $95 fee. So Gateway is truly entry-level, like MileUp®."}}></li>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>JetBlue Card (no annual fee)</strong>: 3x on JetBlue, 2x groceries/dining. Actually quite similar to MileUp®, but with JetBlue loyalty. If you live near a JetBlue hub, that might be more appealing. If near an AA hub, you prefer MileUp®."}}></li>
                </ul>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{ __html:"Each big U.S. airline (AA, Delta, United, JetBlue) typically has a no-fee entry card. The difference is categories: MileUp® is groceries + AA, Delta Blue is restaurants + Delta, etc. Pick which airline you fly or want to accumulate miles with. If you want a free bag or lounge passes, you’ll need their higher-fee sibling."}}></p>
            </section>

             {/* Section 18: Advanced Strategies for AAdvantage Loyalty Points */}
             <section id="section-18" className={styles.reviewSection}>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <h2 dangerouslySetInnerHTML={{ __html:"Advanced Strategies for AAdvantage Loyalty Points"}}></h2>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{ __html:"In 2022–2023, American Airlines introduced <strong>Loyalty Points</strong> as the new method to earn elite status. Every 1 base AAdvantage mile you earn from credit card spend = 1 Loyalty Point. This means:"}}></p>
                <ul className={styles.featureList}>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{ __html:"Spending $1 on groceries or AA flights with MileUp® at 2x miles typically yields 2 AAdvantage miles = 2 Loyalty Points. That helps you climb toward Gold/Platinum if you can accumulate enough over a year."}}></li>
                    <li>Non-bonus categories only earn 1x, so $1 = 1 mile = 1 Loyalty Point.
                    If your goal is to reach at least American Airlines Gold (~40,000 Loyalty Points), you may need a large volume of spend or complement with flights, dining program, or other AA partners.
                    But at least you’re not paying an annual fee for the privilege of funneling spend into AAdvantage miles + Loyalty Points.</li>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{ __html:"Consider whether you might get more synergy from a higher-fee AA card that awards 2x across more categories. But if you want a $0 approach, MileUp® is a no-risk entry to start building Loyalty Points from groceries + flights."}}></li>
                </ul>
                <p>
                    If you aim for status, track your monthly spend carefully.
                    MileUp® might be too slow alone for Platinum or above unless you also fly/earn miles from other sources.
                    Still, it’s a stepping-stone that can help you inch closer to your status tier each year.
                </p>
            </section>

            {/* Section 19: Who Should Get It? */}
            <section id="section-19" className={styles.reviewSection}>
                 <h2 dangerouslySetInnerHTML={{ __html:"Who Should Get the AAdvantage® MileUp® Card?"}}></h2>
                <div className={styles.prosCons}>
                    <div className={styles.pros}>
                        <h3>Ideal For:</h3>
                        <ul className={styles.featureList}>
                             {/* Using dangerouslySetInnerHTML for ® */}
                            <li dangerouslySetInnerHTML={{ __html:"<strong>Light travelers or new to AA miles</strong>: Great first step into the AAdvantage program with no cost."}}></li>
                            <li><strong>Grocery spenders</strong>: 2x on groceries can add up quickly for households.</li>
                             {/* Using dangerouslySetInnerHTML for ® */}
                            <li dangerouslySetInnerHTML={{ __html:"<strong>Occasional AA flyers</strong>: Earn some miles for 1–2 flights a year, top them off with card spend, and redeem for short domestic routes or seat upgrades."}}></li>
                            <li><strong>Those avoiding annual fees</strong>: Zero risk if you’re unsure about airline loyalty or want to test out AAdvantage miles.</li>
                        </ul>
                    </div>
                    <div className={styles.cons}>
                        <h3>Not Great If:</h3>
                        <ul className={styles.featureList}>
                            <li>You want <strong>free checked bag or lounge passes</strong></li>
                            <li>You do <strong>heavy international travel</strong> (3% foreign fee is a letdown)</li>
                             {/* Using dangerouslySetInnerHTML for ® */}
                            <li dangerouslySetInnerHTML={{ __html:"You prefer a <strong>large sign-up bonus</strong> or a bigger set of bonus categories (e.g., 2x or 3x on multiple segments, not just groceries + AA)"}}></li>
                            <li>You want <strong>premium travel coverage</strong> or strong insurance benefits</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Section 20: Final Thoughts & Disclaimer */}
             <section id="section-20" className={styles.reviewSection}>
                 <h2 dangerouslySetInnerHTML={{ __html:"Final Thoughts &amp; Disclaimer"}}></h2>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{ __html:"The <strong>American Airlines AAdvantage® MileUp®</strong> stands as a <strong>unique</strong> no-fee offering in the airline space, letting you <strong>earn miles on groceries + AA flights</strong> at 2x, with an <strong>easy sign-up bonus</strong> worth ~10k miles plus $50 statement credit. That’s an effortless entry to the AAdvantage ecosystem if you occasionally fly American or just want to start building miles. If you need free bags or bigger perks, you’d have to pay a higher annual fee on a different card. MileUp® is intentionally minimalist—<strong>no annual fee, no extra frills</strong>— just consistent earnings on a major household expense (groceries) plus minor AA flight coverage."}}></p>
                <p dangerouslySetInnerHTML={{ __html:"<strong>Disclaimer:</strong> Terms, rates, and offers can change. Always verify with the official bank or American Airlines site. We may earn affiliate commissions if you click certain links, but editorial opinions remain our own. Examples, valuations, and advanced strategies are approximate. Pay your statement in full monthly to avoid high interest. If you intend to rely on advanced AAdvantage tactics or want lounge/bag perks, consider a different or additional card that suits your needs. For a <strong>no-fee, 2x groceries + AA</strong> approach, MileUp® remains a strong 2025 pick."}}></p>
            </section>

            {/* CTA Section */}
            <section id="cta" className={styles.ctaSection}>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <h2 dangerouslySetInnerHTML={{__html:"Apply for the <b>American Airlines AAdvantage® MileUp®</b> Card"}}></h2>
                <div className={styles.ctaButtons}>
                    <a href={reviewData.applyLink} className={`${styles.btn} ${styles.btnApply}`} title="From card issuer's secure site" target="_blank" rel="noopener noreferrer sponsored">Apply Now</a>
                     {/* Using dangerouslySetInnerHTML for &amp; */}
                    <a href={reviewData.ratesLink} className={`${styles.btn} ${styles.btnRates}`} target="_blank" rel="noopener noreferrer sponsored" dangerouslySetInnerHTML={{__html:"See Rates &amp; Fees"}}></a>
                </div>
            </section>

             {/* E-A-T Section - Corrected from source */}
             <section id="eat-expertise-authority-trustworthiness" className={`${styles.reviewSection} ${styles.eatSection}`}>
                 <h2 dangerouslySetInnerHTML={{ __html: "Our Commitment to E-A-T: Expertise, Authority &amp; Trustworthiness"}}></h2>
                 {/* Using E-A-T text adapted for AA MileUp */}
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
                    in credit cards and travel rewards, including entry-level airline cards like the AAdvantage MileUp.</li>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Real-Time Updates:</strong> We continually check official issuer materials (Citi/AA) and user data points to maintain current rates, terms, and bonus offers."}}></li>
                    <li dangerouslySetInnerHTML={{ __html: "<strong>Conferences &amp; Webinars:</strong> Our team attends financial and travel events, enriching our knowledge base with industry insights on loyalty programs."}}></li>
                </ul>
                <h3>2. Authority</h3>
                <ul className={styles.featureList}>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Detailed Coverage:</strong> This review offers an exhaustive look at the American Airlines AAdvantage® MileUp® Card, covering its unique no-fee structure and earning potential."}}></li>
                    <li><strong>Trusted By Major Outlets:</strong>
                    Our articles are frequently cited by national finance
                    and travel news sites for credit card analysis.</li>
                    <li><strong>Full Disclosure:</strong>
                    If affiliate links or promotions exist, we clearly state them,
                    ensuring objective editorial content.</li>
                </ul>
                <h3>3. Trustworthiness</h3>
                <ul className={styles.featureList}>
                    <li><strong>Independent Analysis:</strong>
                    We never let advertisers influence our ratings or opinions on the MileUp card.</li>
                    <li><strong>Frequent Revisions:</strong>
                    We revise reviews whenever new offers appear or AA updates its AAdvantage program rules.</li>
                    <li><strong>Community Feedback:</strong>
                    We encourage open discussion in comments,
                    fostering transparency and additional user insights.</li>
                     {/* Using Link component for internal link */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Data Security:</strong> We prioritize user privacy and follow best practices, outlined in our <a href='/privacy-policy'>Privacy Policy</a>."}}>
                         {/* Corrected: <Link href="/privacy-policy"><a>Privacy Policy</a></Link> */}
                    </li>
                </ul>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{ __html: "By following these E‑A‑T principles, we aim to guide you responsibly toward a credit card that fits your needs and maximizes your travel rewards within the AAdvantage program." }}></p>
            </section>

          </article>
        </div> {/* Close reviewContainer */}
      </main>

      <Footer />
    </>
  );
}

export default AAdvantageMileUpReviewPage;