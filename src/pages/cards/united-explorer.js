// Example Path: pages/reviews/united-explorer.js
// Or: pages/reviews/[slug].js (if using dynamic routing with 'united-explorer' as slug)

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
  cardName: 'United℠ Explorer Card',
  title: 'United℠ Explorer Card – In-Depth 2025 Review',
  description: 'A thorough 2000-word review of the United℠ Explorer Card by Chase, covering airline perks, lounge passes, travel benefits, 2025 updates, pros, cons, disclaimers, and advanced tips for frequent United flyers.',
  keywords: 'United, Explorer Card, Chase, airline miles, lounge passes, travel, 2025 updates',
  author: 'TravelCardInsider', // *** REPLACE with your actual author/site name ***
  imageUrl: '/united_explorer_card.png', // *** VERIFY PATH in /public ***
  ratingValue: 8.0, // From United Explorer HTML
  applyLink: 'https://creditcards.chase.com/travel-credit-cards/united/united-explorer', // *** REPLACE with actual Explorer APPLY URL ***
  ratesLink: 'https://sites.chase.com/services/creatives/pricingandterms.html/content/dam/pricingandterms/LGC56768.html', // *** VERIFY URL ***
  // Image dimensions (MUST BE ACCURATE for next/image)
  imageWidth: 480, // *** REPLACE with actual image width *** (Example Placeholder)
  imageHeight: 304, // *** REPLACE with actual image height *** (Example Placeholder)
};

// --- Rating Tooltip Content (Customize if needed for United Explorer) ---
const ratingCriteria = [ // *** VERIFY/CUSTOMIZE these criteria for Explorer Rating ***
    'Free Checked Bag Value',
    'United Club Passes (2)',
    'Welcome Bonus Value',
    'Travel & Dining Rewards (2x)',
    'Annual Fee ($0 Intro / $95)'
];

function UnitedExplorerReviewPage() {
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
  // !!! VERIFY all URLs, counts, and details FOR UNITED EXPLORER !!!
  const siteUrl = "https://www.travelcardinsider.com"; // *** REPLACE with your actual site URL ***
  const pageUrl = `${siteUrl}/reviews/united-explorer`; // *** REPLACE with your actual page URL ***
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "United℠ Explorer Card",
    "image": `${siteUrl}${reviewData.imageUrl}`, // *** Assuming imageUrl starts with / ***
    "description": "The United℠ Explorer Card provides free checked bags, priority boarding, two United Club one-time passes each year, and valuable airline perks for frequent United travelers.", // Updated description
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
      "ratingCount": 910, // *** REPLACE with actual or estimated count ***
      "reviewCount": 910  // *** REPLACE with actual or estimated count ***
    },
    "offers": {
      "@type": "Offer",
      "url": reviewData.applyLink.startsWith('http') ? reviewData.applyLink : `${siteUrl}${reviewData.applyLink}`, // *** Ensure full APPLY URL ***
      "priceCurrency": "USD",
      "price": "95", // Regular Annual Fee
      // Indicate $0 intro fee in description or separate offer if schema allows
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
        <link rel="alternate" href="https://www.travelcardinsider.com" hreflang="en-us" />
      </Head>

      <Header />

      <main>
        {/* Spacing for fixed header */}
        <div style={{ marginTop: '2rem' }}></div> {/* Adjusted margin from HTML */}

        {/* Review Container using CSS Module */}
        <div className={styles.reviewContainer}>
          <article> {/* Wrap main content in article */}
            {/* ============= REVIEW HEADER ============= */}
            <header className={styles.reviewHeader}>
              <h1 dangerouslySetInnerHTML={{ __html: "United℠ Explorer Card – 2025 Review"}}></h1>

              {/* Section 1 Content (Part of Header Structure in Template) */}
              <section id="section-1">
                <div className={styles.intro}>
                   {/* Using dangerouslySetInnerHTML for ℠ */}
                  <p dangerouslySetInnerHTML={{ __html:"The <strong>United℠ Explorer Card</strong> by Chase is one of the most popular mid-tier airline credit cards for United Airlines flyers. With its <b>$0 intro annual fee the first year</b> (then $95), it provides essential perks like a free first checked bag, two <b>United Club</b> one-time passes each year, and faster mileage earning on travel/dining. This deep dive (split into 20 sections) will help you determine if the Explorer is right for your 2025 travel plans, from quick stats and advanced tips to disclaimers and an E‑A‑T statement."}}></p>
                </div>

                {/* Image Container */}
                <div className={styles.cardImageContainer}>
                   {/* Class name adjusted */}
                   <Image
                     src={reviewData.imageUrl}
                      /* Using dangerouslySetInnerHTML for ℠ */
                     alt={"United℠ Explorer Card"}
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
                            <p className={styles.tooltipIntro}>Our TCI rating is based on:</p>
                            <ul className={styles.tooltipList}>
                                 {ratingCriteria.map((criterion, index) => <li key={index}>{criterion}</li>)}
                            </ul>
                        </div>
                    )}
                  </span>

                  {/* STAR RATING */}
                  <div className={styles.starRating} title={`Rated ${reviewData.ratingValue} out of 10 stars`} style={{ '--rating': `${reviewData.ratingValue * 10}%` }}>
                    <span>★★★★★</span>
                    <span className={styles.filledStars}>★★★★★</span>
                  </div>

                  <div className={styles.ratingDescription}>
                    <i>Solid mid-tier United card with lounge passes and free bag.</i>
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
                                <td data-label="Details">$0 Intro, then $95</td>
                            </tr>
                            <tr>
                                <td data-label="Feature">Welcome Bonus</td>
                                <td data-label="Details">60k miles after $3,000 in 3 months (offer can vary)</td>
                            </tr>
                            <tr>
                                <td data-label="Feature">Earning Rates</td>
                                <td data-label="Details">2x on United, dining, hotels; 1x on all else</td>
                            </tr>
                            <tr>
                                <td data-label="Feature">Free Checked Bag</td>
                                 {/* Using dangerouslySetInnerHTML for &amp; */}
                                <td data-label="Details" dangerouslySetInnerHTML={{__html:"First bag free for cardholder &amp; 1 companion"}}></td>
                            </tr>
                            <tr>
                                <td data-label="Feature">Lounge Perk</td>
                                <td data-label="Details">2 United Club one-time passes each anniversary year</td>
                            </tr>
                            <tr>
                                <td data-label="Feature">Foreign Transaction Fee</td>
                                <td data-label="Details">None</td>
                            </tr>
                            <tr>
                                <td data-label="Feature">Travel Insurance</td>
                                <td data-label="Details">Baggage delay, trip cancellation coverage, car rental CDW (primary if traveling abroad, otherwise conditions apply)</td>
                            </tr>
                            <tr>
                                <td data-label="Feature">Priority Boarding</td>
                                <td data-label="Details">Group 2 or earlier on United flights</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            {/* CTA Section */}
            <section id="cta" className={styles.ctaSection}>
                <h2 dangerouslySetInnerHTML={{ __html: "Get the <b>United℠ Explorer Card</b> Today!"}}></h2>
                <div className={styles.ctaButtons}>
                    <a href={reviewData.applyLink} className={`${styles.btn} ${styles.btnApply}`} title="From card issuer's secure site" target="_blank" rel="noopener noreferrer sponsored">Apply Now</a>
                     {/* Using dangerouslySetInnerHTML for &amp; */}
                    <a href={reviewData.ratesLink} className={`${styles.btn} ${styles.btnRates}`} target="_blank" rel="noopener noreferrer sponsored" dangerouslySetInnerHTML={{__html:"See Rates &amp; Fees"}}></a>
                </div>
            </section>

            {/* Section 3: Card Overview & Positioning */}
            <section id="section-3" className={styles.reviewSection}>
                <h2>Card Overview and Positioning</h2>
                 {/* Using dangerouslySetInnerHTML for ℠ */}
                <p dangerouslySetInnerHTML={{ __html: "The <b>United℠ Explorer Card</b> is designed for moderate to frequent United flyers who appreciate occasional lounge visits, a free checked bag, and bonus miles on airline/travel categories. It’s less expensive than the United Club℠ Infinite Card ($525 AF) but still provides valuable perks—particularly if you only need a <b>couple</b> of lounge visits each year. With a $0 intro fee the first year, it’s low-risk to try if you often fly from a United hub." }}></p>
                <p>
                    Families also benefit from the free bag perk for one travel companion,
                    plus expanded coverage on trip interruptions
                    or car rentals.
                    Meanwhile, everyday categories like dining and hotels
                    can help you build miles quickly for an award flight.
                </p>
            </section>

            {/* Section 4: Earning Structure in Detail */}
            <section id="section-4" className={styles.reviewSection}>
                <h2>Earning Miles & Everyday Value</h2>
                <p>
                    <strong>2x miles:</strong> on United purchases, dining, and hotel stays.
                    <strong>1x mile:</strong> on all other spending.
                </p>
                <p dangerouslySetInnerHTML={{ __html: "This structure is straightforward. If you spend a lot on restaurants or frequent hotels, you’ll see decent mileage returns. For flights, you’ll still earn 2x miles plus the miles from actually flying (which go to your MileagePlus® account). For bigger everyday purchases (groceries, gas, etc.), you might want a secondary card that offers 2%–3% in those categories. But for your airline/travel and dining needs, the Explorer can yield respectable returns while fueling your next United award flight." }}></p>
            </section>

            {/* Section 5: Redeeming Your United Miles */}
            <section id="section-5" className={styles.reviewSection}>
                <h2>Redeeming United Miles</h2>
                <p>
                    United miles are best used for award flights on United or Star Alliance partners
                    (Lufthansa, ANA, Air Canada, etc.).
                    With dynamic pricing, domestic flights can range from ~7,500 to 25,000 miles
                    for economy, more for first/business class.
                    International partner redemptions vary widely;
                    watch for sweet spots, especially to Asia or Europe in business class,
                    potentially netting 1.5–2 cents per mile in value.
                </p>
                <p>
                    You can also redeem for seat upgrades or United Vacation packages,
                    but typically flight awards offer the highest value.
                    Explorer cardmembers sometimes get additional award availability
                    or reduced close-in fees (the latter has changed in recent times,
                    so check updated policies for 2025).
                </p>
            </section>

            {/* Section 6: Travel & Airline Perks */}
            <section id="section-6" className={styles.reviewSection}>
                 <h2 dangerouslySetInnerHTML={{ __html: "Travel &amp; Airline Perks" }}></h2>
                <p>
                    Some key benefits:
                </p>
                <ul className={styles.featureList}>
                    <li><strong>First Checked Bag Free:</strong>
                    For you + 1 companion on the same reservation,
                    saving ~$35 each way per bag.
                    If you both check a bag on a round trip,
                    that’s ~$140 saved,
                    quickly offsetting the $95 annual fee after the first year.</li>
                    <li><strong>Two United Club Passes:</strong>
                    Each card anniversary, you get two one-time lounge passes
                    for United Club.
                    If you occasionally want lounge comfort (snacks, Wi-Fi, seating),
                    these passes can each be worth ~$59 or more at the door.
                    They are digitally stored in your MileagePlus account for easy usage.</li>
                    <li><strong>Priority Boarding:</strong>
                    Typically Group 2 or earlier on United flights,
                    beating the crowd for overhead bin space.</li>
                    <li><strong>25% Back on In-Flight Purchases:</strong>
                    If you buy snacks, beverages, or Wi-Fi,
                    you get 25% statement credit off those purchases on United flights.</li>
                </ul>
            </section>

            {/* Section 7: No Foreign Transaction Fee & Global Usability */}
             <section id="section-7" className={styles.reviewSection}>
                 <h2 dangerouslySetInnerHTML={{ __html: "No Foreign Transaction Fee &amp; Global Use" }}></h2>
                <p>
                    The Explorer card has <b>no FTF</b>, so you can swipe it abroad
                    without paying an extra 3%.
                    This is helpful for those traveling internationally on United
                    or Star Alliance partners.
                    The card is a Visa,
                    so global acceptance is quite high.
                    You also gain primary car rental CDW coverage
                    when renting outside the U.S.
                    (within the U.S. it can be secondary in many cases),
                    plus baggage/trip coverage for added protection.
                </p>
            </section>

            {/* Section 8: Annual Fee & Intro Offer */}
            <section id="section-8" className={styles.reviewSection}>
                 <h2 dangerouslySetInnerHTML={{ __html: "Annual Fee &amp; Intro Offer" }}></h2>
                <p>
                    The <b>annual fee</b> is <strong>$0 intro</strong> for the first year,
                    then <strong>$95</strong>.
                    That first-year waiver makes it easy to test the waters—
                    if you enjoy the free bag and lounge passes,
                    you might find the $95 second-year charge more than worthwhile.
                    If you only do one major trip per year,
                    the free bag alone often covers that fee.
                    Many find that combined with the ~60k-mile sign-up bonus
                    can be a strong initial value,
                    especially if you can meet the spending threshold
                    (like $3,000 in 3 months—though offers change).
                </p>
            </section>

            {/* Section 9: 2025 Updates & Potential Changes */}
            <section id="section-9" className={styles.reviewSection}>
                 <h2 dangerouslySetInnerHTML={{ __html: "2025 Updates &amp; Potential Changes" }}></h2>
                <ol className={styles.numberedList}>
                    <li><strong>Lounge Passes Digitalization:</strong>
                    The 2 passes might shift to digital format in your UA app (some already do).
                    Expect more app-based lounge admissions or eCertificates.</li>
                    <li><strong>Expanded Award Seat Availability:</strong>
                    United may tweak their dynamic pricing,
                    possibly offering Explorer cardholders more Saver Award seats.</li>
                    <li><strong>New Elite Perks:</strong>
                    Some rumors mention partial PQP (Premier Qualifying Points) earn
                    from credit spend to help with United Premier status.
                    Not guaranteed, but watch for official announcements.</li>
                    <li><strong>Sign-Up Bonus Swings:</strong>
                    We’ve seen 70k–80k or even 100k mile promos.
                    2025 might bring bigger limited-time offers
                    as the travel sector intensifies competition.</li>
                </ol>
                <p>
                    Always confirm the latest terms on Chase or United’s official site
                    before applying or counting on certain perks.
                </p>
            </section>

             {/* Section 10: Real-Life Example Table */}
             <section id="section-10" className={styles.reviewSection}>
                <h2>Real-Life Example: Annual Value Calculation</h2>
                <p>
                    Let’s say you (and occasionally one companion)
                    take 3 round trips a year on United.
                    Each time you both check a bag.
                    You also use the lounge passes once for you
                    and once for you + a guest.
                    Here’s a rough savings breakdown:
                </p>
                <div className={styles.tableContainer}>
                    <table className={styles.statsTable}>
                        <thead>
                            <tr>
                                <th>Benefit</th>
                                <th>Annual Count</th>
                                <th>Cost Without Card</th>
                                <th>Cost With Card</th>
                                <th>Potential Savings</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td data-label="Benefit">Free Checked Bag</td>
                                <td data-label="Annual Count">3 round trips x 2 people = 6 segments each = 12 bag fees total</td>
                                <td data-label="Cost Without Card">$35 each way × 12 = $420</td>
                                <td data-label="Cost With Card">$0 for first bag each passenger</td>
                                <td data-label="Potential Savings">$420</td>
                            </tr>
                            <tr>
                                <td data-label="Benefit">Lounge Passes</td>
                                <td data-label="Annual Count">2 passes used (1 solo, 1 with companion if permissible)</td>
                                <td data-label="Cost Without Card">$59 per pass per person → ~$118 total</td>
                                <td data-label="Cost With Card">Included</td>
                                <td data-label="Potential Savings">$118</td>
                            </tr>
                            <tr>
                                <td data-label="Benefit">Priority Boarding</td>
                                <td data-label="Annual Count">3 round trips</td>
                                <td data-label="Cost Without Card">— intangible/time</td>
                                <td data-label="Cost With Card">Included</td>
                                <td data-label="Potential Savings">n/a intangible</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p>
                    You might save ~$538 just on bags + lounge visits,
                    easily covering the $95 second-year fee once the first year ends.
                    If you place airline/travel/dining spend on the card,
                    you’ll also accumulate miles for your next trip.
                    This scenario shows how the Explorer can be a bargain
                    for consistent United travelers.
                </p>
            </section>

             {/* Section 11: Competitor Analysis */}
             <section id="section-11" className={styles.reviewSection}>
                <h2>Competitor Analysis</h2>
                <div className={styles.tableContainer}>
                     <table className={styles.statsTable}>
                        <thead>
                            <tr>
                                <th>Card</th>
                                <th>Annual Fee</th>
                                <th>Key Perk</th>
                                <th>Why Choose</th>
                            </tr>
                        </thead>
                        <tbody>
                             {/* Using dangerouslySetInnerHTML for ℠ */}
                            <tr dangerouslySetInnerHTML={{ __html:'<td data-label="Card">United℠ Explorer</td><td data-label="Annual Fee">$0 intro, then $95</td><td data-label="Key Perk">2 lounge passes, free bag, 2x on dining/hotels</td><td data-label="Why Choose">Mid-tier cost with valuable airline perks</td>'}}></tr>
                            <tr dangerouslySetInnerHTML={{ __html:'<td data-label="Card">United Club℠ Infinite</td><td data-label="Annual Fee">$525</td><td data-label="Key Perk">Full United Club membership, free bag, 2x–4x earn in some categories</td><td data-label="Why Choose">Higher-end lounge access for heavy travelers</td>'}}></tr>
                             {/* Using dangerouslySetInnerHTML for ® */}
                            <tr dangerouslySetInnerHTML={{ __html:'<td data-label="Card">Delta SkyMiles® Gold Amex</td><td data-label="Annual Fee">$0 intro, then ~$99</td><td data-label="Key Perk">Free bag, priority boarding for Delta</td><td data-label="Why Choose">Better for Delta loyalists, not United</td>'}}></tr>
                             {/* Using dangerouslySetInnerHTML for ® */}
                            <tr dangerouslySetInnerHTML={{ __html:'<td data-label="Card">Chase Sapphire Preferred®</td><td data-label="Annual Fee">$95</td><td data-label="Key Perk">2x travel/dining, flexible UR points, partial travel coverage</td><td data-label="Why Choose">General travel card, no airline-specific perks or free bag</td>'}}></tr>
                        </tbody>
                    </table>
                </div>
                <p>
                    The <b>Explorer</b> stands out for moderate United flyers
                    wanting lounge passes and a free bag.
                     {/* Using dangerouslySetInnerHTML for ℠ */}
                    <span dangerouslySetInnerHTML={{__html:"If you want unlimited lounge access, the <b>United Club℠ Infinite</b> might be better, though it’s more expensive. Non-United loyalists might pick a general travel card or an airline-specific card for their chosen carrier."}}></span>
                </p>
            </section>

            {/* Section 12: Synergy with Other Chase Cards */}
            <section id="section-12" className={styles.reviewSection}>
                <h2>Synergy with Other Chase Cards</h2>
                <p>
                    If you hold a <b>Chase Sapphire</b> (Preferred or Reserve),
                    you can’t directly pool those UR points into United miles
                    <i>via</i> the Explorer card.
                    You do, however, have the option to transfer UR → United
                    if you hold a Sapphire,
                    effectively combining that flexibility with your Explorer
                    which still yields airline perks.
                    The Explorer’s advantage is the free bag and lounge passes,
                    which Sapphire does not offer.
                    Meanwhile, <b>Chase Freedom</b> cards can boost your overall points
                    which you can combine (and then transfer to United
                    if you also have Sapphire).
                    This synergy helps you pile up more miles
                    if you’re a heavy spender across multiple categories.
                </p>
            </section>

            {/* Section 13: Synergy with MileagePlus Elite Status */}
            <section id="section-13" className={styles.reviewSection}>
                <h2>MileagePlus Elite Status & Card Perks</h2>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{__html:"If you chase <b>Premier status</b> with United, your flight activity is the main driver for PQF/PQP or however the 2025 rules define it. The Explorer card itself typically doesn’t accelerate PQP like some premium versions might. But it does remove or reduce close-in booking fees for certain award tickets if you hold any co-branded card, and some promos may pop up that give PQP multipliers if you purchase flights with the Explorer. Always watch for targeted offers in your email or in the Chase portal."}}></p>
            </section>

            {/* Section 14: Potential Downsides */}
            <section id="section-14" className={styles.reviewSection}>
                <h2>Potential Downsides</h2>
                <ul className={styles.featureList}>
                    <li><strong>$0 Intro, Then $95 Fee:</strong>
                    Not huge, but if you rarely fly or check bags,
                    you might not recoup it easily year two.</li>
                    <li><strong>2 Lounge Passes Only:</strong>
                    Good for the casual traveler,
                    but not enough if you want frequent lounge access
                     {/* Using dangerouslySetInnerHTML for ℠ */}
                    <span dangerouslySetInnerHTML={{__html:"(you’d pay day pass or consider the $525 United Club℠ Infinite Card)."}}></span></li>
                    <li><strong>Modest Earning Rates Outside Dining/Hotels:</strong>
                    Only 1x on groceries, gas, etc.</li>
                    <li><strong>Limited Award Seat Access vs. Premium UA Cards:</strong>
                    Some advanced/expanded saver availability might be better on higher-tier cards.</li>
                </ul>
            </section>

            {/* Section 15: Advanced Usage Tips */}
            <section id="section-15" className={styles.reviewSection}>
                <h2>Advanced Usage Tips</h2>
                <ol className={styles.numberedList}>
                    <li><strong>Maximize Lounge Pass Value:</strong>
                    Use your 2 passes on longer layovers or when traveling with a companion
                    who might also enter with you on one pass if policy allows.
                    If you’re alone, it’s typically 1 pass per visit.
                    Check rules if you want to bring someone in on the same pass
                    (this can vary in enforcement).</li>
                    <li><strong>Book United Hotels for 2x:</strong>
                    If you frequently do “United Vacations” or hotels via United’s booking site,
                    you can earn 2x plus possible synergy with flight/hotel packages.</li>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Monitor Dining Deals:</strong> The 2x on dining can combine with third-party dining rewards or the United MileagePlus Dining program for more miles. Double-dip if possible."}}></li>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Consider Pairing with a Chase Freedom® or Sapphire:</strong> Earn more points on groceries/gas with Freedom or Sapphire, then funnel them to your United miles if you have a Sapphire. Use Explorer for United/dining/hotels specifically."}}></li>
                    <li><strong>Watch for PQP Promotions:</strong>
                    Occasionally, United does “spend $X on your co-branded card = extra PQP.”
                    Could help you inch toward Premier Silver or Gold status.</li>
                </ol>
            </section>

            {/* Section 16: Another Example Scenario */}
            <section id="section-16" className={styles.reviewSection}>
                <h2>Another Real-Life Example: Frequent Diner</h2>
                <p>
                    Suppose each year you spend $3,000 on United flights,
                    $4,000 on dining, $2,000 on hotels,
                    and $6,000 everything else:
                </p>
                 {/* Recreating table from HTML */}
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
                            <td data-label="Category">United Flights</td>
                            <td data-label="Annual Spend">$3,000</td>
                            <td data-label="Miles per $">2x</td>
                            <td data-label="Miles Earned">6,000</td>
                        </tr>
                        <tr>
                            <td data-label="Category">Dining (Restaurants)</td>
                            <td data-label="Annual Spend">$4,000</td>
                            <td data-label="Miles per $">2x</td>
                            <td data-label="Miles Earned">8,000</td>
                        </tr>
                        <tr>
                            <td data-label="Category">Hotels</td>
                            <td data-label="Annual Spend">$2,000</td>
                            <td data-label="Miles per $">2x</td>
                            <td data-label="Miles Earned">4,000</td>
                        </tr>
                        <tr>
                            <td data-label="Category">All Other</td>
                            <td data-label="Annual Spend">$6,000</td>
                            <td data-label="Miles per $">1x</td>
                            <td data-label="Miles Earned">6,000</td>
                        </tr>
                        <tr style={{fontWeight: 'bold', borderTop: '2px solid #dee2e6'}}>
                            <th data-label="Category">Total</th>
                            <th data-label="Annual Spend">$15,000</th>
                            <th data-label="Miles per $">—</th>
                            <th data-label="Miles Earned">24,000</th>
                        </tr>
                    </tbody>
                 </table>
                </div>
                <p>
                    24,000 miles might be worth ~$360 or more
                    (assuming ~1.5 cents per mile in flight redemptions).
                    Add in the free bag perk (maybe $105–$140 saved if you check once or twice),
                    plus those lounge passes,
                    and you can see how the net value quickly surpasses $95
                    if you’re flying United a few times a year.
                    This scenario typically suits mid-range travelers
                    who want an annual pass into the lounge and a simpler approach to miles.
                </p>
            </section>

            {/* Section 17: Who Should Get the Card? */}
            <section id="section-17" className={styles.reviewSection}>
                 <h2 dangerouslySetInnerHTML={{ __html: "Who Should Get the United℠ Explorer Card?"}}></h2>
                 <div className={styles.prosCons}>
                    <div className={styles.pros}>
                        <h3>Ideal For:</h3>
                        <ul className={styles.featureList}>
                            <li><strong>Moderate United Flyers:</strong>
                            At least 1–2 round trips a year with checked bags or lounge interest</li>
                            <li><strong>Occasional Lounge Users:</strong>
                            The 2 annual passes might suffice if you’re not traveling weekly</li>
                             {/* Using dangerouslySetInnerHTML for &amp; */}
                            <li dangerouslySetInnerHTML={{__html:"<strong>Dining &amp; Hotel Spenders:</strong> 2x categories can net decent miles if you dine out or stay in hotels often"}}></li>
                            <li><strong>First-Year Fee Waiver Seekers:</strong>
                            $0 intro makes it easy to test, especially for a strong sign-up bonus</li>
                        </ul>
                    </div>
                    <div className={styles.cons}>
                        <h3>No, If You:</h3>
                        <ul className={styles.featureList}>
                             {/* Using dangerouslySetInnerHTML for ℠ */}
                            <li dangerouslySetInnerHTML={{__html:"Need <strong>unlimited lounge access</strong> (the pass usage can be limiting, consider the United Club℠ Infinite Card)"}}></li>
                            <li>Rarely fly United or rarely check baggage</li>
                            <li>Want <strong>stronger everyday earnings</strong> on groceries/gas or flexible points (Chase Sapphire might be better)</li>
                            <li>Are loyal to <strong>another airline</strong> entirely (e.g., American, Delta, Southwest, etc.)</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Section 18: Disclaimers & Fine Print */}
            <section id="section-18" className={styles.reviewSection}>
                 <h2 dangerouslySetInnerHTML={{ __html: "Disclaimers &amp; Fine Print"}}></h2>
                <p>
                    Always verify the current sign-up bonus, interest rates,
                    lounge pass rules, and baggage fee policies
                    on the official Chase or United sites.
                    The 2 lounge passes typically expire after one year
                    if unused, so plan your usage carefully.
                    Baggage fees vary by route/class—
                    confirm you’re booking your ticket with your Explorer card
                    to ensure the free bag triggers.
                    Terms for travel insurance can differ,
                    especially regarding coverage amounts and triggers
                    (e.g., baggage delay vs. lost baggage).
                    The card typically requires good/excellent credit for approval.
                    If you revolve a balance, interest costs can overshadow any miles earned.
                </p>
            </section>

            {/* Section 19: E-A-T Statement */}
             <section id="section-19" className={`${styles.reviewSection} ${styles.eatSection}`}> {/* Combined classes */}
                <h2>Our Commitment to E-A-T: Expertise, Authority & Trustworthiness</h2>
                 {/* Using E-A-T text adapted for United Explorer */}
                <p>
                    At <strong>TravelCardInsider</strong>,
                    we focus on airline credit card analysis with accuracy
                    and real-world experience.
                    Our approach aligns with Google’s E-A-T framework:
                </p>
                <h3>1. Expertise</h3>
                <ul className={styles.featureList}>
                    <li><strong>Frequent Flyers on Staff:</strong>
                    Our team includes regular United flyers
                    who’ve tested the Explorer card’s lounge passes,
                    baggage perks, and coverage in real life.</li>
                    <li><strong>Ongoing Updates:</strong>
                    We track changes to United’s baggage fees, lounge policies,
                    or sign-up bonuses.
                    This article is revised whenever major updates occur.</li>
                    <li><strong>In-Depth Research:</strong>
                    We reference official chase/United data for any claim
                    about annual fees, category earnings, or travel coverage.</li>
                </ul>
                <h3>2. Authority</h3>
                <ul className={styles.featureList}>
                    <li><strong>Comprehensive Reviews:</strong>
                    Our ~2,000-word coverage addresses the Explorer card
                    from the annual fee waiver to advanced redemptions.
                    We aim for thoroughness so you can make an informed choice.</li>
                    <li><strong>Industry Mentions:</strong>
                    Our work is cited in top travel/finance outlets,
                    recognized for unbiased evaluations.</li>
                    <li><strong>Transparent Disclosures:</strong>
                    If we include affiliate links, we note that
                    so you know how we’re funded,
                    maintaining editorial independence.</li>
                </ul>
                <h3>3. Trustworthiness</h3>
                <ul className={styles.featureList}>
                    <li><strong>Independent Ratings:</strong>
                    Our final star rating is not influenced by advertisers or sponsorships.</li>
                    <li><strong>Reader Feedback:</strong>
                    We welcome user stories in comments
                    to keep our data fresh and relevant to real experiences.</li>
                    <li><strong>Frequent Revisions:</strong>
                    As sign-up bonuses or policies shift,
                    we promptly revise the text to stay accurate.</li>
                    <li> {/* Using Link for internal page */}
                         <strong>Privacy &amp; Data Protection:</strong> Our <Link href="/privacy-policy"><a>Privacy Policy</a></Link> outlines how we safeguard user data. We keep your info secure if you subscribe or comment.
                    </li>
                </ul>
                 {/* Using dangerouslySetInnerHTML for ℠ */}
                <p dangerouslySetInnerHTML={{__html:"By following E-A-T, we strive to deliver a trustworthy, user-centric perspective on the United℠ Explorer Card so you can decide if it meets your 2025 travel needs."}}></p>
            </section>

             {/* Section 20: Final Thoughts */}
             <section id="section-20" className={styles.reviewSection}>
                 <h2 dangerouslySetInnerHTML={{__html:"Final Thoughts: Is the United℠ Explorer Worth It?"}}></h2>
                 {/* Using dangerouslySetInnerHTML for ℠ */}
                <p dangerouslySetInnerHTML={{__html:"With a <b>$0 intro fee</b> for the first year, the <strong>United℠ Explorer Card</strong> is a low-risk choice for anyone flying United more than once or twice a year. The free first checked bag alone can cover that eventual $95 fee, and the two lounge passes are perfect if you only need occasional pre-flight comfort. The 2x categories (United, dining, hotels) plus a decent sign-up bonus help you amass miles for future awards. While it’s not the top-earning or lounge-unlimited option, it hits the sweet spot for moderate travelers who want to step beyond the basics."}}></p>
                 {/* Using dangerouslySetInnerHTML for ℠ ® &amp; */}
                <p dangerouslySetInnerHTML={{__html:"If you prefer unlimited lounge access, consider the <b>United Club℠ Infinite</b> or a general premium card (like Chase Sapphire Reserve® or Amex Platinum with Priority Pass). But for many, the Explorer’s free bag, lounge passes, no foreign fee, and $0 intro-year approach delivers excellent value—especially if you’re a loyal United customer. Just confirm current sign-up bonuses and T&amp;Cs to ensure it aligns with your upcoming 2025 travel plans."}}></p>
                <h3>Disclaimer</h3>
                <p>
                    Card terms, bonuses, and policies can change.
                    Always double-check official sources (Chase, United)
                    for the latest details.
                    We may earn a commission from certain links,
                    but editorial opinions remain independent.
                    Example redemptions or cost savings are estimates
                    and may vary based on actual flight routes, times, or availability.
                    If you revolve a balance,
                    interest charges can overshadow any travel perks.
                </p>
            </section>

          </article>
        </div> {/* Close reviewContainer */}
      </main>

      <Footer />
    </>
  );
}

export default UnitedExplorerReviewPage;