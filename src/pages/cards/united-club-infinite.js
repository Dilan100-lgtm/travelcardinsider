// Example Path: pages/reviews/united-club-infinite.js
// Or: pages/reviews/[slug].js (if using dynamic routing with 'united-club-infinite' as slug)

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
  cardName: 'United Club℠ Infinite Card',
  title: 'United Club℠ Infinite Card – In-Depth 2025 Review',
  description: 'A 2000-word review of the United Club℠ Infinite Card, emphasizing full United Club membership, 4x on United purchases, $525 annual fee, 2025 updates, advanced usage tips, and synergy with MileagePlus elite status.',
  keywords: 'United, United Club Infinite, chase, airline card, lounge access, 2025, mileageplus',
  author: 'TravelCardInsider', // *** REPLACE with your actual author/site name ***
  imageUrl: '/united_club_infinite_card.png', // *** VERIFY PATH in /public ***
  ratingValue: 8.9, // From United Club Infinite HTML
  applyLink: 'https://creditcards.chase.com/travel-credit-cards/united/club-infinite', // *** REPLACE with actual Infinite APPLY URL ***
  ratesLink: 'https://sites.chase.com/services/creatives/pricingandterms.html/content/dam/pricingandterms/LGC57973.html', // *** VERIFY URL ***
  // Image dimensions (MUST BE ACCURATE for next/image)
  imageWidth: 480, // *** REPLACE with actual image width *** (Example Placeholder)
  imageHeight: 304, // *** REPLACE with actual image height *** (Example Placeholder)
};

// --- Rating Tooltip Content (Customize if needed for United Club Infinite) ---
const ratingCriteria = [ // *** VERIFY/CUSTOMIZE these criteria for Infinite Rating ***
    'United Club Membership Value',
    'United Purchase Rewards (4x)',
    'Free Checked Bags (2)',
    'Premier Access Perks',
    'Annual Fee ($525)',
];

function UnitedClubInfiniteReviewPage() {
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
  // !!! VERIFY all URLs, counts, and details FOR UNITED CLUB INFINITE !!!
  const siteUrl = "https://www.travelcardinsider.com"; // *** REPLACE with your actual site URL ***
  const pageUrl = `${siteUrl}/reviews/united-club-infinite-card`; // *** REPLACE with your actual page URL ***
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "United Club℠ Infinite Card",
    "image": `${siteUrl}${reviewData.imageUrl}`, // *** Assuming imageUrl starts with / ***
    "description": "A premium co-branded United credit card offering full United Club membership, 4x miles on United purchases, 2x on other travel/dining, and top-tier perks for MileagePlus loyalists.", // Updated description
    "brand": {
      "@type": "Brand",
      "name": "Chase" // Issuer
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
      "ratingCount": 390, // *** REPLACE with actual or estimated count ***
      "reviewCount": 390  // *** REPLACE with actual or estimated count ***
    },
    "offers": {
      "@type": "Offer",
      "url": reviewData.applyLink.startsWith('http') ? reviewData.applyLink : `${siteUrl}${reviewData.applyLink}`, // *** Ensure full APPLY URL ***
      "priceCurrency": "USD",
      "price": "525", // Annual Fee for Club Infinite
      "availability": "https://schema.org/InStock",
      "itemCondition": "https://schema.org/NewCondition"
    }
     // Consider adding "provider": { "@type": "Organization", "name": "United Airlines" }
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
              <h1 dangerouslySetInnerHTML={{ __html: "United Club℠ Infinite Card – In-Depth 2025 Review" }}></h1>

              {/* Section 1 Content (Part of Header Structure in Template) */}
              <section id="section-1">
                 {/* Using dangerouslySetInnerHTML for ℠ & ® */}
                <div className={styles.intro}>
                   <p dangerouslySetInnerHTML={{ __html: "The <strong>United Club℠ Infinite Card</strong> from Chase sits at the apex of United’s co-branded portfolio, delivering <strong>full United Club membership</strong>, accelerated earning on United purchases, and robust travel protections for frequent flyers. With a <strong>$525 annual fee</strong>, it targets those seeking a seamless United experience—especially for lounge access, better boarding/group privileges, and synergy with the <strong>MileagePlus®</strong> loyalty program. This review covers 20 sections, focusing on 2025 updates, disclaimers, advanced redemption tips, plus how it stacks against other airline or premium travel cards. If you’re a United devotee wanting lounge comfort, read on."}}></p>
                </div>

                {/* Image Container */}
                <div className={styles.cardImageContainer}>
                  {/* Class name adjusted */}
                   <Image
                     src={reviewData.imageUrl}
                      /* Using dangerouslySetInnerHTML for ℠ */
                     alt={"United Club℠ Infinite Card"}
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
                  <div className={styles.starRating} title={`Rated ${reviewData.ratingValue} out of 10 stars`} style={{ '--rating': `${reviewData.ratingValue * 10}%` }}>
                    <span>★★★★★</span>
                    <span className={styles.filledStars}>★★★★★</span>
                  </div>

                  <div className={styles.ratingDescription}>
                    <i>A top-tier United card granting full lounge membership, 4x on United purchases, and extensive perks—pricey, but worth it if you love United Club lounge comfort.</i>
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
                                <td data-label="Details">$525</td>
                            </tr>
                            <tr>
                                <td data-label="Feature">APR Range</td>
                                 {/* Using dangerouslySetInnerHTML for ® */}
                                <td data-label="Details" dangerouslySetInnerHTML={{__html:"21.24%–28.24% Variable"}}></td>
                            </tr>
                            <tr>
                                <td data-label="Feature">Sign-Up Bonus</td>
                                 {/* Using dangerouslySetInnerHTML for ® */}
                                <td data-label="Details" dangerouslySetInnerHTML={{__html:"Often 80k–100k MileagePlus miles after $5k spend in 3 months"}}></td>
                            </tr>
                            <tr>
                                <td data-label="Feature">Rewards Rate</td>
                                <td data-label="Details">4x on United purchases, 2x on dining/travel, 1x all else</td>
                            </tr>
                            <tr>
                                <td data-label="Feature">Lounge Access</td>
                                <td data-label="Details">Full United Club membership (cardholder + 2 guests), some partner lounges</td>
                            </tr>
                             {/* Using dangerouslySetInnerHTML for ® */}
                            <tr dangerouslySetInnerHTML={{__html:'<td data-label="Feature">Elite Perks</td><td data-label="Details">Premier Access boarding, free bags, no close-in booking fees, etc.</td>'}}></tr>
                            <tr>
                                <td data-label="Feature">Foreign Transaction Fee</td>
                                <td data-label="Details">None</td>
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
                <h2 dangerouslySetInnerHTML={{ __html: "Get the <b>United Club℠ Infinite Card</b> Today!"}}></h2>
                <div className={styles.ctaButtons}>
                    <a href={reviewData.applyLink} className={`${styles.btn} ${styles.btnApply}`} title="From card issuer's secure site" target="_blank" rel="noopener noreferrer sponsored">Apply Now</a>
                    <a href={reviewData.ratesLink} className={`${styles.btn} ${styles.btnRates}`} target="_blank" rel="noopener noreferrer sponsored" dangerouslySetInnerHTML={{__html:"See Rates &amp; Fees"}}></a>
                </div>
            </section>

            {/* Section 3: Card Overview & Positioning */}
             <section id="section-3" className={styles.reviewSection}>
                <h2 dangerouslySetInnerHTML={{ __html: "Card Overview &amp; Positioning" }}></h2>
                 {/* Using dangerouslySetInnerHTML for ℠ & ® */}
                <p dangerouslySetInnerHTML={{ __html: "The <strong>United Club℠ Infinite Card</strong> from Chase is the airline’s top personal product, providing a <strong>full</strong> United Club membership for the primary cardholder (and up to two guests or immediate family). This is more robust than day passes or limited lounge visits— it’s a permanent membership as long as you keep the card open. At a <strong>$525 annual fee</strong>, it rivals premium airline cards like the Delta SkyMiles Reserve or American AAdvantage Executive for lounge focus. Additionally, you earn <strong>4x miles</strong> on United ticket purchases, <strong>2x</strong> on all other travel/dining, plus 1x everything else. If you frequently pass through United hubs (EWR, DEN, SFO, IAH, ORD), lounge access can significantly enhance your airport experience, making the Club Infinite a prime choice for loyal United fliers in 2025."}}></p>
            </section>

            {/* Section 4: Earning United Miles & Category Rates */}
            <section id="section-4" className={styles.reviewSection}>
                 <h2 dangerouslySetInnerHTML={{ __html: "Earning United Miles &amp; Category Rates"}}></h2>
                <p>
                    The card’s structure:
                </p>
                <ul className={styles.featureList}>
                    <li><strong>4x miles</strong> on United purchases (flights, seat upgrades, in-flight purchases, baggage fees, etc.)</li>
                    <li><strong>2x miles</strong> on other travel (airlines, hotels, transit, etc.) + dining</li>
                    <li><strong>1x miles</strong> on everything else</li>
                </ul>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{ __html: "Earning at 4x is quite competitive for direct airline spend, though the 2x on general travel/dining is on par with mid-tier cards like Sapphire Preferred. Meanwhile, 1x on general spending might be lackluster if you want bigger everyday multipliers. Typically, you’d put all United charges on this card, but maybe pair it with a general 2x–3x daily driver for other categories. <strong>United miles</strong> are valued ~1.2–1.4 cents each, more if you find sweet-spot Star Alliance redemptions or business-class deals. Overall, the 4x can accumulate quickly if you frequently buy United fares, especially premium cabins or status runs."}}></p>
            </section>

            {/* Section 5: Sign-Up Bonus & Redemption Potential */}
             <section id="section-5" className={styles.reviewSection}>
                <h2 dangerouslySetInnerHTML={{ __html: "Sign-Up Bonus &amp; Redemption Potential" }}></h2>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{ __html: "The Infinite’s bonus is often <strong>80k–100k MileagePlus miles</strong> after spending $5k in 3 months. Some limited-time offers might push it higher (120k). At ~1.3¢ each, 100k could be ~$1,300 in flight value, especially for Star Alliance partner business class or saver awards to Europe/Asia. The bonus helps offset the $525 fee in year one. If you redeem for domestic flights, you might see 25k–30k for a round trip, so that’s ~3–4 round trips. For business-class long-hauls, you might pay 60–70k+ each way. The sign-up lumpsum can get you a big chunk. Combined with lounge membership (valued at $650 if bought alone from United), year-one value can be quite positive if you maximize redemption opportunities."}}></p>
            </section>

             {/* Section 6: Lounge Access – Full United Club Membership */}
             <section id="section-6" className={styles.reviewSection}>
                <h2>Lounge Access – Full United Club Membership</h2>
                <p>
                    The Infinite card stands out by granting a <strong>full United Club membership</strong>,
                    not just day passes or limited visits.
                    That means:
                </p>
                <ul className={styles.featureList}>
                    <li><strong>Unlimited access</strong> to United Club lounges worldwide for you plus <strong>2</strong> adult guests or immediate family</li>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"Sometimes access to <strong>Star Alliance</strong> partner lounges if flying Star Alliance same-day, though that can vary by location (verify official Star Alliance lounge policies—some accept “paid/Club membership,” but not all do so equally)."}}></li>
                    <li>Better than older mid-tier United cards that gave 2 day passes/year.
                    This is full membership, equivalent to a standalone membership that often costs ~$650–$700 from United if purchased separately.</li>
                </ul>
                <p>
                    If you frequently endure layovers at major United hubs,
                    having a lounge for free food, drinks, and quieter space can easily recoup a big part of the annual fee.
                    For travelers who only occasionally pass through a United hub,
                    the membership might be less essential.
                    But for the loyal flyer, it’s a massive perk,
                    typically overshadowing the card’s $525 cost if utilized regularly.
                </p>
            </section>

            {/* Section 7: Elite-Like Perks & Baggage/Boarding Benefits */}
             <section id="section-7" className={styles.reviewSection}>
                <h2 dangerouslySetInnerHTML={{ __html: "Elite-Like Perks &amp; Baggage/Boarding Benefits"}}></h2>
                <p>
                    The Infinite card offers:
                </p>
                <ul className={styles.featureList}>
                    <li><strong>Premier Access</strong> (priority check-in, security lane, boarding group) if available at your airport.
                    This replicates some perks that come with United Premier status.
                    </li>
                     {/* Using dangerouslySetInnerHTML for &amp; */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Free First &amp; Second Checked Bag</strong> for the primary cardholder plus one companion on the same reservation (domestic itineraries). That can save $35–$45 per bag each way. If you frequently check luggage, it adds up fast."}}></li>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>No Close-In Booking Fees</strong> for last-minute award tickets—helpful if you find a sudden Star Alliance saver seat."}}></li>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Expanded Award Availability</strong> Typically, co-branded cardholders see more “Saver” level seats. Not guaranteed for all routes, but a perk for snagging better redemption options."}}></li>
                </ul>
                <p>
                    These features mimic mid-level Premier benefits,
                    though you won’t earn PQMs or status from spending alone (unlike some other airline cards that help chase status).
                    But if you’re not already a top-tier United elite,
                    these can significantly enhance your United travel routine—bypassing lines, saving on bag fees, and snagging seats with fewer restrictions.
                </p>
            </section>

             {/* Section 8: 2025 Updates & Potential Changes */}
             <section id="section-8" className={styles.reviewSection}>
                 <h2 dangerouslySetInnerHTML={{ __html: "2025 Updates &amp; Potential Changes"}}></h2>
                <ol className={styles.numberedList}>
                    <li><strong>Annual Fee Adjustments:</strong>
                    Some rumors suggest the fee could rise from $525 to $545 or $550 if new benefits are added.
                    Or it may remain stable.
                    Always confirm official statements from Chase/United.</li>
                    <li><strong>United Club Lounge Overcrowding:</strong>
                    If crowding worsens, United might revise guest policies or capacity limits.
                    The card still grants membership, but you might see restrictions on guest entry or certain peak times.
                    </li>
                     {/* Using dangerouslySetInnerHTML for &amp; */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Category Multipliers Expansions:</strong> Possibly 3x on dining or grocery in the future, or promotional offers. Currently, 2x on travel/dining is standard, but watch for changing T&amp;Cs or short-term boosts in 2025."}}></li>
                    <li><strong>Star Alliance Partnerships Evolving:</strong>
                    If new alliance partners come in or existing lounge rules shift,
                    your lounge coverage might expand or contract.
                    Typically stable, but worth monitoring if you rely on partner lounges abroad.</li>
                </ol>
                <p>
                    Historically, the Club card remains consistent, focusing on lounge membership + baggage perks.
                    By 2025, you can expect small fee or policy tweaks, but the core lounge benefit is likely to persist.
                    Checking official announcements each renewal cycle is prudent to confirm changes in cost or coverage.
                </p>
            </section>

             {/* Section 9: Real-Life Example Table */}
             <section id="section-9" className={styles.reviewSection}>
                <h2>Real-Life Example: Annual Spend & Miles</h2>
                <p>
                    Suppose your annual spend:
                </p>
                <ul className={styles.featureList}>
                    <li>$4,000 on United flights (4x = 16k miles)</li>
                     {/* Using dangerouslySetInnerHTML for &amp; */}
                    <li dangerouslySetInnerHTML={{__html:"$4,000 on other travel + dining (2x = 8k miles)"}}></li>
                    <li>$12,000 on general spending (1x = 12k miles)</li>
                </ul>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{ __html:"That’s <strong>36k</strong> miles from the card alone. If the sign-up bonus is 80k miles, you could net ~116k total in year one. At ~1.3¢ each, 116k miles is ~$1,500 in flight value, offsetting the $525 fee multiple times if redeemed well. Meanwhile, your lounge membership might replace $50 day passes or more frequent visits if you’d otherwise buy membership at $650. That’s a direct intangible savings that further cements the card’s value for a loyal United flyer."}}></p>
            </section>

            {/* Section 10: Competitor Analysis */}
            <section id="section-10" className={styles.reviewSection}>
                <h2>Competitor Analysis</h2>
                <p>
                    Similar premium airline/lounge cards:
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
                             {/* Using dangerouslySetInnerHTML for ℠ */}
                            <tr dangerouslySetInnerHTML={{ __html:'<td data-label="Card">United Club℠ Infinite Card</td><td data-label="Annual Fee">$525</td><td data-label="Lounge Access">Full United Club membership (unlimited, 2 guests)</td><td data-label="Key Advantage">4x United, free checked bags, no close-in fees, top-tier travel protections</td>'}}></tr>
                             {/* Using dangerouslySetInnerHTML for ® */}
                            <tr dangerouslySetInnerHTML={{ __html:'<td data-label="Card">Delta SkyMiles® Reserve</td><td data-label="Annual Fee">$550</td><td data-label="Lounge Access">Sky Club + Centurion (Delta flights), 3x Delta</td><td data-label="Key Advantage">MQM boosts for status, first-class companion cert</td>'}}></tr>
                            {/* Using dangerouslySetInnerHTML for ® */}
                            <tr dangerouslySetInnerHTML={{ __html:'<td data-label="Card">AA Executive World Elite</td><td data-label="Annual Fee">$595</td><td data-label="Lounge Access">Admirals Club membership</td><td data-label="Key Advantage">2x AA flights, family lounge access, some status shortcuts</td>'}}></tr>
                             {/* Using dangerouslySetInnerHTML for ® */}
                            <tr dangerouslySetInnerHTML={{ __html:'<td data-label="Card">Amex Platinum</td><td data-label="Annual Fee">$695</td><td data-label="Lounge Access">Centurion, Priority Pass, Delta lounge (if flying Delta), etc.</td><td data-label="Key Advantage">Broader lounge coverage, 5x on flights, but no airline-specific free bags or expanded awards</td>'}}></tr>
                        </tbody>
                    </table>
                </div>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{ __html:"If you’re all in on <strong>United</strong>, the <strong>Club Infinite</strong> card stands out with the best lounge coverage and airline perks. If you prefer broader lounge networks (like Amex Platinum’s Centurion or Priority Pass), that might be better. Delta/American have their own high-end lounge cards. But if you specifically want <strong>United Club membership</strong> plus deeper synergy with MileagePlus, the Infinite remains the top choice."}}></p>
            </section>

            {/* Section 11: Additional Benefits & Travel Protections */}
            <section id="section-11" className={styles.reviewSection}>
                 <h2 dangerouslySetInnerHTML={{ __html: "Additional Benefits &amp; Travel Protections" }}></h2>
                 {/* Using dangerouslySetInnerHTML for ℠ */}
                <p dangerouslySetInnerHTML={{ __html: "The United Club℠ Infinite includes:"}}></p>
                <ul className={styles.featureList}>
                    <li><strong>Trip Cancellation/Interruption Insurance:</strong>
                    Coverage if your trip is canceled/interrupted for a covered reason,
                    reimbursing certain nonrefundable expenses up to a set limit.</li>
                     {/* Using dangerouslySetInnerHTML for &amp; */}
                    <li dangerouslySetInnerHTML={{ __html:"<strong>Trip Delay Reimbursement:</strong> If your flight is delayed 12+ hours or overnight, up to $500 per ticket for lodging/meals. Check official T&amp;Cs for exact coverage times/limits."}}></li>
                    <li><strong>Auto Rental Collision Damage Waiver (Primary):</strong>
                    When renting a car for business or personal use,
                    you can typically decline the rental company’s collision coverage and be covered for theft/damage.
                    This is a top-tier perk from Chase.</li>
                    <li><strong>Baggage Delay/Lost Luggage Insurance:</strong>
                    Reimburse essential items if baggage is delayed or lost by a common carrier.
                    </li>
                     {/* Using dangerouslySetInnerHTML for &amp; */}
                    <li dangerouslySetInnerHTML={{ __html:"<strong>Purchase Protection &amp; Extended Warranty:</strong> Covers eligible items if damaged/stolen within a certain timeframe, plus extends US manufacturer warranties by up to a year."}}></li>
                </ul>
                <p>
                    These protections mirror the robust coverage found on Chase’s premium cards.
                    Combined with lounge membership,
                    you have a near all-in-one travel tool if you primarily fly United.
                    If you want to rely heavily on credit card travel insurance,
                    the Infinite’s coverage is among the best in airline co-brands.
                </p>
            </section>

            {/* Section 12: APR & Carrying a Balance */}
            <section id="section-12" className={styles.reviewSection}>
                <h2 dangerouslySetInnerHTML={{ __html: "APR &amp; Carrying a Balance" }}></h2>
                <p>
                    The Infinite’s variable APR runs ~21.24–28.24%.
                    If you revolve a balance, interest charges can easily dwarf the lounge or baggage perks.
                    Best practice: pay in full monthly to maximize net gains from the sign-up bonus, 4x miles, and lounge membership.
                    If you need a 0% intro or a lower-interest approach,
                    look to a different product.
                    The Infinite is designed for frequent travelers who reap travel benefits,
                    not for carrying debt.
                    Similarly, <strong>cash advances</strong> incur high fees/interest (~29.99%),
                    so only do that in emergencies.
                </p>
            </section>

            {/* Section 13: Potential Downsides */}
            <section id="section-13" className={styles.reviewSection}>
                <h2>Potential Downsides</h2>
                <ul className={styles.featureList}>
                    <li><strong>$525 Annual Fee:</strong>
                    If you seldom use United Club lounges,
                    or don’t check bags,
                    you might not recoup enough.
                    Occasional flyers might prefer the cheaper Explorer or Quest cards with day passes.</li>
                    <li><strong>Limited to United Lounges:</strong>
                    If you want more universal lounge access (like Centurion or Priority Pass with restaurants),
                    another card might be better.
                    The Club membership is specific to United (some Star Alliance acceptance, but not universal worldwide).
                    </li>
                    <li><strong>1x on General Spend:</strong>
                    Could be overshadowed by a 2x or 3x everyday card if you want maximum miles from daily purchases.
                    </li>
                     {/* Using dangerouslySetInnerHTML for &amp; */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Guest Policy:</strong> While membership typically allows you + 2 guests or spouse/kids, lounge crowding might lead to potential future guest restrictions. For large families, ensure you understand current lounge T&amp;Cs."}}></li>
                    <li><strong>No Direct Status Accelerators:</strong>
                    This card doesn’t provide PQF/PQP waivers or boosts like some competitor airline cards.
                    You still rely on flying/spend to achieve Premier status.
                    </li>
                </ul>
            </section>

             {/* Section 14: Advanced Tips & Strategies */}
             <section id="section-14" className={styles.reviewSection}>
                 <h2 dangerouslySetInnerHTML={{ __html: "Advanced Tips &amp; Strategies" }}></h2>
                <ol className={styles.numberedList}>
                    <li><strong>Maximize Lounge Time:</strong>
                    If you have multiple connections at United hubs,
                    plan your layovers to enjoy lounge meals, saving $10–$15 each time.
                    Over many visits, that can offset the annual fee quickly.
                    </li>
                     {/* Using dangerouslySetInnerHTML for &amp; */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Book Travel &amp; Dining on This Card or Another?</strong> The Infinite yields 2x on travel/dining. If you have a card offering 3x or 4x in these categories (like a Sapphire Reserve or Amex Gold for dining), weigh which is better for your miles vs. flexible points. Still, for direct United flights, definitely use the Infinite at 4x."}}></li>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Track United Award Sales:</strong> Occasionally, domestic flights are 5k–7.5k one-way on sale, or partner flights drop. Use your sign-up bonus or 4x earnings for these sweet-spot routes."}}></li>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Use the Explorer or Another United Card for Family AUs:</strong> If you want spouse/kids to have free baggage or priority boarding but don’t need them to have full lounge membership, maybe put them on a lower-tier card. Meanwhile, you hold the Infinite for lounge membership. Everyone can still join you in the lounge as your guests, if current policy allows it."}}></li>
                     {/* Using dangerouslySetInnerHTML for &amp; */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Monitor Seat Upgrades &amp; Expand Award Inventory:</strong> Co-branded cardholders sometimes get expanded “XN” inventory for standard awards in economy, letting you find seats that others can’t. Keep an eye on your search results vs. searching logged out."}}></li>
                </ol>
            </section>

            {/* Section 15: Another Real-Life Example */}
            <section id="section-15" className={styles.reviewSection}>
                <h2>Another Real-Life Example</h2>
                <p>
                    A frequent United flyer logs:
                </p>
                <ul className={styles.featureList}>
                    <li>$6,000 in United purchases (4x = 24k miles)</li>
                     {/* Using dangerouslySetInnerHTML for &amp; */}
                    <li dangerouslySetInnerHTML={{__html:"$6,000 in other travel + dining (2x = 12k miles)"}}></li>
                    <li>$10,000 in general spend (1x = 10k miles)</li>
                </ul>
                <p>
                    Card-based earnings = <strong>46k</strong> miles.
                    Add an 80k sign-up bonus: 126k total.
                    At 1.3¢ each, that’s ~$1,638 in flight value.
                    Meanwhile, you visit the lounge 15 times a year (day passes are $59 each or membership is $650 if bought outright).
                    That’s a direct intangible savings if you would otherwise pay for membership.
                    Factor in free checked bags (maybe $60–$120 saved per round-trip if you check multiple bags).
                    You easily surpass the $525 fee if you frequently benefit from lounge or bag perks.
                    This synergy cements the card’s value for loyal United travelers.
                </p>
            </section>

            {/* Section 16: Synergy with Other Chase / United Products */}
             <section id="section-16" className={styles.reviewSection}>
                <h2>Synergy with Other Chase / United Products</h2>
                 {/* Using dangerouslySetInnerHTML for ℠ */}
                <p dangerouslySetInnerHTML={{ __html: "The <strong>Club Infinite</strong> can pair well with:"}}></p>
                <ul className={styles.featureList}>
                    <li><strong>Chase Sapphire Reserve / Preferred</strong>:
                    Earn higher multipliers on non-United travel or dining,
                    then potentially transfer UR → United if you want more miles,
                    or keep them flexible.
                    But you can’t stack lounge benefits from both.
                    The synergy is about maximizing everyday category multipliers while reserving 4x for United flights.
                    </li>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{ __html: "<strong>Chase Freedom / Freedom Unlimited</strong>: Use Freedoms for 5x rotating categories or 1.5x on everything. If you also hold a Sapphire, you can move those UR to United eventually. The Infinite ensures your direct United purchases come with lounge membership."}}></li>
                    <li><strong>Other United Cards for Family Members</strong>:
                    If your spouse rarely travels alone,
                    the no-fee Gateway or mid-tier Explorer might suffice for them to get free checked bag or occasional day passes.
                    Meanwhile, you maintain the full membership for lounge visits whenever traveling together.
                    </li>
                </ul>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{ __html: "Typically, you hold the Infinite for lounge membership + 4x on flights, and pair it with a flexible or no-fee card for day-to-day categories. All United miles funnel into your MileagePlus account, so combining different cards can expand your redemption possibilities."}}></p>
            </section>

             {/* Section 17: Redemption & Star Alliance Insights */}
             <section id="section-17" className={styles.reviewSection}>
                 <h2 dangerouslySetInnerHTML={{ __html: "Redemption &amp; Star Alliance Insights"}}></h2>
                <p>
                    <strong>United MileagePlus</strong> uses a semi-dynamic approach for awards. Key points:
                </p>
                <ul className={styles.featureList}>
                    <li><strong>Domestic Saver Levels:</strong>
                    Economy can start ~5k–12.5k one-way,
                    though busier routes/dates might run 15k–25k.
                    Premium cabins could jump 25k–30k or more each way.
                    </li>
                    <li><strong>Partner Awards:</strong>
                    Star Alliance partners (Lufthansa, ANA, Swiss, etc.) can yield sweet spots in business/first,
                    though availability can be tricky.
                    The “Excursionist Perk” might help create a free one-way in multi-city itineraries.
                    </li>
                    <li><strong>No Close-In Fees:</strong>
                    Cardmembers avoid last-minute booking surcharges,
                    though the mileage cost might be higher if flights are in demand.
                    </li>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{ __html:"<strong>Everyday vs. Saver Awards:</strong> If saver-level seats are gone, everyday awards can cost 2–3x more miles. Cardholders sometimes see expanded availability but not guaranteed for all routes."}}></li>
                </ul>
                <p>
                    The sweet spot is finding saver-level partner or domestic routes.
                    If you plan carefully, those 80k–100k bonus miles plus your 4x accumulation can net 2–3 round trips or a premium cabin partner flight abroad.
                    Meanwhile, lounge membership ensures comfort on all those trips.
                </p>
            </section>

            {/* Section 18: Competitor & Alternative Cards */}
            <section id="section-18" className={styles.reviewSection}>
                <h2 dangerouslySetInnerHTML={{ __html:"Competitor &amp; Alternative Cards"}}></h2>
                <p>
                    Potential alternatives:
                </p>
                <ul className={styles.featureList}>
                    <li><strong>United Explorer or Quest</strong>:
                    Lower annual fee ($0–$250), 2 day passes/year for lounge (Explorer) or partial benefits.
                    No full membership.
                    For moderate flyers, might suffice.
                    </li>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Chase Sapphire Reserve</strong>: $550 AF, Priority Pass lounge network (not specifically United Club), 3x on travel/dining, flexible UR points. Transfer UR to United if you want, plus more flexible lounge coverage. But doesn’t provide free United bags or boarding privileges."}}></li>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Amex Platinum</strong>: $695 AF, Centurion + Delta lounge (Delta flights), Priority Pass (no restaurants). Not airline-specific to United, so no free checked bags or mileage expansions. If you want universal lounge coverage, this might be appealing, but no direct United synergy."}}></li>
                    <li><strong>Capital One Venture X</strong>:
                    $395 AF, Priority Pass with restaurants, simpler 2x everything.
                    No airline-specific perks, though you can transfer miles to a few partners, including some Star Alliance affiliates.
                    Not as direct for United lounge access.
                    </li>
                </ul>
                <p>
                    If you <strong>want full United lounge membership</strong>,
                    <strong>Infinite</strong> is the straightforward pick.
                    If you prefer broad lounge coverage or flexible points,
                    you might prefer a general premium card.
                    For a lighter fee or day passes,
                    the Explorer/Quest might do.
                    But for dedicated United flyers wanting top-tier lounge perks,
                    the Infinite stands alone.
                </p>
            </section>

            {/* Section 19: Who Should Get the Card? */}
            <section id="section-19" className={styles.reviewSection}>
                <h2 dangerouslySetInnerHTML={{ __html:"Who Should Get the United Club℠ Infinite Card?"}}></h2>
                <div className={styles.prosCons}>
                    <div className={styles.pros}>
                        <h3>Yes, If You:</h3>
                        <ul className={styles.featureList}>
                            <li>Fly <strong>United frequently</strong> and want <strong>unlimited lounge membership</strong> for you + 2 guests/family</li>
                            <li>Check bags often—<strong>1st and 2nd bag free</strong> can save hundreds yearly</li>
                            <li>Appreciate <strong>Premier Access</strong> boarding and streamlined check-in/ security lines</li>
                            <li>Value a large sign-up bonus (80k–100k miles) to offset the <strong>$525 fee</strong></li>
                             {/* Using dangerouslySetInnerHTML for ® */}
                            <li dangerouslySetInnerHTML={{__html:"Pay in full monthly, avoiding ~21–28% APR interest overshadowing lounge benefits"}}></li>
                        </ul>
                    </div>
                    <div className={styles.cons}>
                        <h3>No, If You:</h3>
                        <ul className={styles.featureList}>
                            <li>Rarely or sporadically use <strong>United Club lounges</strong></li>
                            <li>Prefer a <strong>broader lounge network</strong> (e.g., Priority Pass with restaurant credits, Centurion) or a different airline’s hub</li>
                            <li>Don’t value the <strong>bag fee waivers or Premier Access</strong> enough to justify $525</li>
                             {/* Using dangerouslySetInnerHTML for ® */}
                            <li dangerouslySetInnerHTML={{__html:"Desire <strong>2x+ on everyday categories</strong> outside travel/dining (Infinite only has 1x on general spend)"}}></li>
                            <li>Plan to <strong>carry a balance</strong>; interest can quickly negate card perks</li>
                        </ul>
                    </div>
                </div>
            </section>

             {/* Section 20: Bottom Line & Disclaimer */}
             <section id="section-20" className={styles.reviewSection}>
                <h2 dangerouslySetInnerHTML={{ __html:"Final Thoughts &amp; Disclaimer"}}></h2>
                 {/* Using dangerouslySetInnerHTML for ℠, ®, &amp; */}
                <p dangerouslySetInnerHTML={{__html:"The <strong>United Club℠ Infinite Card</strong> offers <strong>full United Club membership</strong> for the frequent flyer who craves lounge comfort at major United hubs. At <strong>$525</strong>, it’s priced below some other airline lounge cards, yet still includes key perks—<strong>4x</strong> on United, <strong>2x</strong> on travel/dining, <strong>free 1st &amp; 2nd checked bags</strong>, <strong>Premier Access</strong>, and robust <strong>Chase travel protections</strong>. If you regularly lounge-hop at EWR, SFO, ORD, or IAH, membership alone (valued ~$650) can justify the fee. Add in a large sign-up bonus, intangible lounge savings, plus the day-to-day convenience of priority boarding and waived baggage fees. In 2025, as United expands lounge facilities or tightens capacity, the Infinite remains the simplest route to guaranteed lounge access for you and guests. If you seldom use United or want broader lounge coverage, consider a general premium card. But if you’re locked into United’s network, the <strong>Club Infinite</strong> card is a prime solution for a comfortable, perk-laden travel experience."}}></p>
                <p dangerouslySetInnerHTML={{ __html:"<strong>Disclaimer:</strong> Terms, APR, sign-up bonuses, and lounge policies can change. Always verify the latest details with Chase or United. We may receive affiliate commissions from certain links but retain editorial independence. United miles typically value ~1.2–1.4¢ each; dynamic award pricing may raise or lower redemptions. If you revolve balances at ~21–28% APR, interest quickly erodes lounge benefits. Evaluate your flight frequency, lounge usage, and baggage needs before deciding if $525 is worthwhile."}}></p>
            </section>

            {/* E-A-T Section - Adapted for United Club Infinite */}
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
                    Our writers and analysts have years of experience
                    in premium airline credit cards, including the specific benefits of the United Club Infinite card and lounge access rules.</li>
                    <li><strong>Real-Time Updates:</strong>
                    We continually check official issuer materials (Chase/United)
                    and user data points to maintain current rates, terms, and lounge membership details.</li>
                    <li dangerouslySetInnerHTML={{ __html: "<strong>Conferences &amp; Webinars:</strong> Our team attends financial and travel events, enriching our knowledge base with insights on airline loyalty and premium card value."}}></li>
                </ul>
                <h3>2. Authority</h3>
                <ul className={styles.featureList}>
                     {/* Using dangerouslySetInnerHTML for ℠ */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Detailed Coverage:</strong> This review offers an exhaustive look at the United Club℠ Infinite Card, from the $525 fee justification to maximizing MileagePlus earnings."}}></li>
                    <li><strong>Trusted By Major Outlets:</strong>
                    Our articles are frequently cited by national finance
                    and travel news sites for premium airline card analysis.</li>
                    <li><strong>Full Disclosure:</strong>
                    If affiliate links or promotions exist, we clearly state them,
                    ensuring objective editorial content.</li>
                </ul>
                <h3>3. Trustworthiness</h3>
                <ul className={styles.featureList}>
                    <li><strong>Independent Analysis:</strong>
                    We never let advertisers influence our ratings or opinions on the United Club Infinite card's value proposition.</li>
                    <li><strong>Frequent Revisions:</strong>
                    We revise reviews whenever new offers appear or United/Chase updates lounge access policies or benefits.</li>
                    <li><strong>Community Feedback:</strong>
                    We encourage open discussion in comments,
                    fostering transparency and additional user insights on United Club experiences.</li>
                    <li>
                        <strong>Data Security:</strong> We prioritize user privacy and follow best practices,
                        outlined in our <Link href="/privacy-policy"><a>Privacy Policy</a></Link>.
                    </li>
                </ul>
                 {/* Using dangerouslySetInnerHTML for ℠ */}
                <p dangerouslySetInnerHTML={{ __html: "By following these E‑A‑T principles, we aim to guide you responsibly toward a credit card that fits your needs and maximizes your travel rewards, specifically within the United MileagePlus ecosystem." }}></p>
            </section>

          </article>
        </div> {/* Close reviewContainer */}
      </main>

      
    </>
  );
}

export default UnitedClubInfiniteReviewPage;