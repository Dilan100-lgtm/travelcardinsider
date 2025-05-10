// Example Path: pages/reviews/british-airways-visa.js
// Or: pages/reviews/[slug].js (if using dynamic routing with 'british-airways-visa' as slug)

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
  cardName: 'British Airways Visa Signature® Card',
  title: 'British Airways Visa Signature® Card – In-Depth 2025 Review',
  description: 'A 2000-word review of the British Airways Visa Signature® Card from Chase, covering airline perks, Avios earning, 2025 updates, disclaimers, pros, cons, and advanced tips for frequent BA travelers.',
  keywords: 'British Airways, BA, Visa Signature, Avios, airline credit card, 2025 updates',
  author: 'TravelCardInsider', // *** REPLACE with your actual author/site name ***
  imageUrl: '/hero_Card.png', // *** VERIFY PATH in /public ***
  ratingValue: 7.7, // From BA Visa HTML
  applyLink: 'https://creditcards.chase.com/avios/britishairways', // *** REPLACE with actual BA Visa APPLY URL ***
  ratesLink: 'https://creditcards.chase.com/avios/britishairways', // *** VERIFY URL ***
  // Image dimensions (MUST BE ACCURATE for next/image)
  imageWidth: 480, // *** REPLACE with actual image width *** (Example Placeholder)
  imageHeight: 304, // *** REPLACE with actual image height *** (Example Placeholder)
};

// --- Rating Tooltip Content (Customize if needed for BA Visa) ---
const ratingCriteria = [ // *** VERIFY/CUSTOMIZE these criteria for BA Visa Rating ***
    'Travel Together Ticket Value',
    'Avios Earning Rate (3x BA)',
    'Welcome Bonus Potential',
    'Oneworld Partner Redemptions',
    'Annual Fee ($95) vs. Surcharges',
];

function BritishAirwaysVisaReviewPage() {
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
  // !!! VERIFY all URLs, counts, and details FOR BRITISH AIRWAYS VISA !!!
  const siteUrl = "https://www.travelcardinsider.com"; // *** REPLACE with your actual site URL ***
  const pageUrl = `${siteUrl}/reviews/british-airways-card`; // *** REPLACE with your actual page URL ***
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "British Airways Visa Signature® Card",
    "image": `${siteUrl}${reviewData.imageUrl}`, // *** Assuming imageUrl starts with / ***
    "description": "The British Airways Visa Signature® Card offers premium perks for BA flyers, including Avios earning potential, a Travel Together Ticket after qualifying spend, and access to oneworld partner redemptions.", // Adjusted description
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
      "ratingCount": 450, // *** REPLACE with actual or estimated count ***
      "reviewCount": 450  // *** REPLACE with actual or estimated count ***
    },
    "offers": {
      "@type": "Offer",
      "url": reviewData.applyLink.startsWith('http') ? reviewData.applyLink : `${siteUrl}${reviewData.applyLink}`, // *** Ensure full APPLY URL ***
      "priceCurrency": "USD",
      "price": "95", // Annual Fee for BA Visa
      "availability": "https://schema.org/InStock",
      "itemCondition": "https://schema.org/NewCondition"
    }
    // Consider adding "provider": { "@type": "Organization", "name": "British Airways" }
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
        <div style={{ marginTop: '2rem' }}></div> {/* Adjusted margin from HTML */}

        {/* Review Container using CSS Module */}
        <div className={styles.reviewContainer}>
          <article> {/* Wrap main content in article */}
            {/* ============= REVIEW HEADER ============= */}
            <header className={styles.reviewHeader}>
              {/* Using dangerouslySetInnerHTML for ® */}
              <h1 dangerouslySetInnerHTML={{ __html: "British Airways Visa Signature® Card – In-Depth 2025 Review" }}></h1>

              {/* Section 1 Content (Part of Header Structure in Template) */}
              <section id="section-1">
                <div className={styles.intro}>
                   {/* Using dangerouslySetInnerHTML for ® */}
                  <p dangerouslySetInnerHTML={{ __html: "The <strong>British Airways Visa Signature® Card</strong>, issued by Chase, is a go-to option for those seeking to rack up Avios on flights with British Airways (BA) or oneworld partners. With a moderate <strong>$95 annual fee</strong>, you can earn big on purchases, snag valuable perks like the <strong>Travel Together Ticket</strong>, and explore the world in BA’s premium cabins. This review dives into 20 sections—covering quick stats, disclaimers, advanced usage, and E-A-T details—so you can judge if this card is the right transatlantic or global companion for 2025." }}></p>
                </div>

                {/* Image Container */}
                <div className={styles.cardImageContainer}>
                   {/* Class name adjusted */}
                   <Image
                     src={reviewData.imageUrl}
                     alt={"British Airways Visa Signature® Card"}
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
                    <i dangerouslySetInnerHTML={{__html:"A solid pick for oneworld fans seeking Avios and the coveted Travel Together Ticket."}}></i>
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
                                <td data-label="Details">$95</td>
                            </tr>
                            <tr>
                                <td data-label="Feature">Welcome Bonus</td>
                                <td data-label="Details">Commonly 50k–100k Avios after spending $3,000–$5,000 (offer varies)</td>
                            </tr>
                             {/* Using dangerouslySetInnerHTML for &amp; */}
                            <tr dangerouslySetInnerHTML={{__html:'<td data-label="Feature">Earning Rates</td><td data-label="Details">Typically 3x on BA/Iberia/Aer Lingus, 2x on hotels, 1x all else (verify for 2025)</td>'}}></tr>
                            <tr>
                                <td data-label="Feature">Travel Together Ticket</td>
                                <td data-label="Details">Earn after $30k spend in a calendar year, companion flies only taxes/fees</td>
                            </tr>
                            <tr>
                                <td data-label="Feature">No Foreign Transaction Fee</td>
                                <td data-label="Details">Great for international travel, especially BA routes</td>
                            </tr>
                             {/* Using dangerouslySetInnerHTML for ® */}
                            <tr dangerouslySetInnerHTML={{__html:'<td data-label="Feature">Global Entry/TSA Credit?</td><td data-label="Details">Not typically offered on the standard BA Visa (check for promotions)</td>'}}></tr>
                            <tr>
                                <td data-label="Feature">Surcharge Note</td>
                                <td data-label="Details">BA collects high fuel surcharges on some redemptions</td>
                            </tr>
                            <tr>
                                <td data-label="Feature">Recommended Credit</td>
                                <td data-label="Details">Good–excellent (700+ FICO often recommended)</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

             {/* CTA Section */}
             <section id="cta" className={styles.ctaSection}>
                <h2 dangerouslySetInnerHTML={{__html:"Get the <b>British Airways Visa Signature® Card</b> Today!"}}></h2>
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
                <p dangerouslySetInnerHTML={{ __html:"The <b>British Airways Visa Signature® Card</b> is part of Chase’s IAG (International Airlines Group) co-brand portfolio (including Iberia, Aer Lingus). It’s primarily aimed at transatlantic travelers who appreciate BA’s extensive route network from London to Europe, Asia, Africa, and beyond. If you frequently cross the pond or want to exploit oneworld partners, Avios can be extremely flexible. The $95 fee isn’t waived typically, but the <b>Travel Together Ticket</b> and Avios-earning potential can quickly outweigh the cost if you spend enough and can handle the sometimes hefty surcharges. In 2025, with more direct flights and variable redemption options, it remains a prime “BA corridor” card for U.S. travelers."}}></p>
            </section>

             {/* Section 4: Earning Avios in Detail */}
             <section id="section-4" className={styles.reviewSection}>
                <h2>Earning Avios & Everyday Spending</h2>
                <p>
                    Commonly, you earn:
                </p>
                <ul className={styles.featureList}>
                    <li><strong>3x Avios</strong> on British Airways, Iberia, or Aer Lingus purchases</li>
                    <li><strong>2x Avios</strong> on hotel accommodations (some versions might have 2x on certain travel categories)</li>
                    <li><strong>1x Avios</strong> on everything else</li>
                </ul>
                 {/* Using dangerouslySetInnerHTML for &amp; */}
                <p dangerouslySetInnerHTML={{ __html:"Some promotional or updated T&amp;Cs for 2025 may include dining or groceries as 2x or 3x, so confirm your statement for exact categories. If you often buy BA flights or associated taxes/fees, 3x can net Avios quickly. However, if you want bigger multipliers in daily spending (3x–4x on groceries/dining), you might pair this card with another. The star perk is the <b>Travel Together Ticket</b>— requiring $30,000 in a calendar year— which can yield a free second seat (plus taxes/surcharges) on a BA flight in any cabin."}}></p>
            </section>

            {/* Section 5: Redeeming Avios */}
            <section id="section-5" className={styles.reviewSection}>
                <h2>Redeeming Avios</h2>
                <p>
                    Avios can be used on British Airways and oneworld partners
                    (AA, Iberia, JAL, Qantas, etc.).
                    Short-haul on partners like American or Alaska (domestic)
                    can cost fewer Avios,
                    making a great sweet spot.
                    For BA transatlantic flights,
                    you might encounter steep fuel surcharges,
                    especially in premium cabins.
                    However, you can avoid or lessen them by booking
                    partner flights (like on American or Aer Lingus)
                    or using Iberia’s Avios program for certain routes.
                    Since you can freely move Avios among IAG accounts (BA, Iberia, Aer Lingus),
                    advanced travelers can sidestep surcharges
                    if they plan well.
                    Meanwhile, if you do want BA business or first,
                    the <b>Travel Together Ticket</b> can effectively double the value,
                    albeit you pay taxes/fees for both seats.
                </p>
            </section>

            {/* Section 6: Travel & Airline Perks */}
            <section id="section-6" className={styles.reviewSection}>
                 <h2 dangerouslySetInnerHTML={{ __html:"Travel &amp; Airline Perks"}}></h2>
                <ul className={styles.featureList}>
                    <li><strong>Travel Together Ticket (Companion Certificate):</strong>
                    After $30k in a calendar year,
                    get a companion ticket for your BA award flight
                    (still paying taxes/surcharges).
                    Usually valid for 2 years from date of issuance.</li>
                    <li><strong>On-Board Savings:</strong>
                    Some historical promos gave 10%–15% off BA flights or
                    statement credits on in-flight purchases,
                    but verify if it remains for 2025.</li>
                    <li><strong>No Foreign Transaction Fee:</strong>
                    Ideal for overseas usage, especially in the UK or Europe.</li>
                     {/* Using dangerouslySetInnerHTML for &amp; */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Potential Additional Perks:</strong> If you hold the card for multiple years or meet certain spend thresholds, you might see various targeted offers—like lounge passes or seat upgrades. Not guaranteed, so watch official comms from BA/Chase."}}></li>
                </ul>
                <p>
                    The free bag perk is not typically part of the BA Visa (unlike some airline cards).
                    BA usually allows one free checked bag on transatlantic economy,
                    but no extra bag is guaranteed for this card.
                </p>
            </section>

            {/* Section 7: No Foreign Transaction Fee */}
            <section id="section-7" className={styles.reviewSection}>
                 <h2 dangerouslySetInnerHTML={{ __html:"No Foreign Transaction Fee &amp; Global Usage"}}></h2>
                <p>
                    The <b>BA Visa</b> has <b>no FTF</b>,
                    essential for Europe or beyond.
                    As a Visa, acceptance is broad internationally,
                    especially across the UK/EU.
                    So if you frequently visit London or connect via Heathrow,
                    you can confidently pay for hotels, restaurants, or tours
                    without extra currency surcharges.
                    This complements BA’s global route network,
                    making your card usage straightforward overseas.
                </p>
            </section>

             {/* Section 8: Annual Fee & Welcome Bonus */}
             <section id="section-8" className={styles.reviewSection}>
                <h2 dangerouslySetInnerHTML={{ __html:"Annual Fee &amp; Welcome Bonus"}}></h2>
                <p>
                    The annual fee is <strong>$95</strong> (not waived typically).
                    The welcome bonus can range from <strong>50k–100k Avios</strong>,
                    possibly in tiers (e.g., 50k after $3k spend, plus 50k more after $20k in 12 months).
                    The structure changes periodically.
                    A large Avios stash can be quite valuable—
                    think short-haul domestic partner flights or premium long-haul redemptions
                    (though watch out for surcharges).
                    If you’re comfortable maximizing the Travel Together Ticket
                    or short-haul awards,
                    this bonus can easily offset the fee many times over.
                </p>
            </section>

             {/* Section 9: 2025 Updates & Potential Changes */}
             <section id="section-9" className={styles.reviewSection}>
                <h2 dangerouslySetInnerHTML={{ __html:"2025 Updates &amp; Potential Changes"}}></h2>
                <ol className={styles.numberedList}>
                    <li><strong>Companion Ticket Spend Threshold Adjustments:</strong>
                    In past, it was $30k or $20k in some promotions.
                    Keep an eye on official T&amp;Cs if they lower or raise it for 2025.</li>
                    <li><strong>Category Earning Shifts:</strong>
                    Possibly BA might add 2x or 3x for groceries/dining or travel.
                    We’ve seen other airline cards expand categories—verify new statements or official updates.</li>
                    <li><strong>Surcharges Evolutions:</strong>
                    BA may tweak fuel surcharges or fees in 2025.
                    That can drastically affect the card’s real-world redemption value.</li>
                    <li><strong>Alliance Partnerships:</strong>
                    oneworld expansions or new partner deals might broaden redemption scope.
                    For instance, if new oneworld members join, Avios redemptions might expand further.</li>
                </ol>
                <p>
                    Always confirm the official BA/Chase announcements each year
                    to see if these rumored changes become reality.
                </p>
            </section>

             {/* Section 10: Real-Life Example Table */}
             <section id="section-10" className={styles.reviewSection}>
                <h2>Real-Life Example: How Much Value?</h2>
                <p>
                    Assume you spend $20,000 annually on the card,
                    including $4,000 on BA flights, $1,000 on hotels,
                    and $15,000 on general spend.
                    Let’s see approximate Avios:
                </p>
                 <div className={styles.tableContainer}>
                    <table className={styles.statsTable}>
                        <thead>
                            <tr>
                                <th>Category</th>
                                <th>Annual Spend</th>
                                <th>Points per $</th>
                                <th>Avios Earned</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td data-label="Category">BA Flights</td>
                                <td data-label="Annual Spend">$4,000</td>
                                <td data-label="Points per $">3x</td>
                                <td data-label="Avios Earned">12,000</td>
                            </tr>
                            <tr>
                                <td data-label="Category">Hotels</td>
                                <td data-label="Annual Spend">$1,000</td>
                                <td data-label="Points per $">2x</td>
                                <td data-label="Avios Earned">2,000</td>
                            </tr>
                            <tr>
                                <td data-label="Category">Other Spend</td>
                                <td data-label="Annual Spend">$15,000</td>
                                <td data-label="Points per $">1x</td>
                                <td data-label="Avios Earned">15,000</td>
                            </tr>
                            <tr style={{fontWeight: 'bold', borderTop: '2px solid #dee2e6'}}>
                                <th data-label="Category">Total</th>
                                <th data-label="Annual Spend">$20,000</th>
                                <th data-label="Points per $">—</th>
                                <th data-label="Total Points">29,000</th>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p>
                    That’s <b>29,000 Avios</b> from spend alone.
                    If you also got a sign-up bonus of 70k,
                    you’d have ~99k total in the first year—
                    enough for a round-trip to Europe in economy for 2 people
                    or a one-way in business (plus taxes/surcharges).
                    If you can push to $30k total spend,
                    you’d earn the Travel Together Ticket,
                    letting you bring a companion for the same Avios (but paying fees).
                    This can effectively double the value for a premium cabin redemption,
                    overshadowing the $95 AF many times over.
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
                                <th>Key Perks</th>
                                <th>Why Choose</th>
                            </tr>
                        </thead>
                        <tbody>
                             {/* Using dangerouslySetInnerHTML for ® */}
                            <tr dangerouslySetInnerHTML={{__html:'<td data-label="Card">BA Visa Signature</td><td data-label="Annual Fee">$95</td><td data-label="Key Perks">3x on BA, Avios for oneworld, Travel Together Ticket</td><td data-label="Why Choose">Ideal if you want Avios, crossing the pond on BA frequently</td>'}}></tr>
                             {/* Using dangerouslySetInnerHTML for ® */}
                            <tr dangerouslySetInnerHTML={{__html:'<td data-label="Card">American AAdvantage® Platinum</td><td data-label="Annual Fee">$99 (waived first year)</td><td data-label="Key Perks">Free bag on AA, priority boarding</td><td data-label="Why Choose">Better if you prefer American-based routes, still oneworld</td>'}}></tr>
                            <tr>
                                <td data-label="Card">Iberia Visa Signature</td>
                                <td data-label="Annual Fee">$95</td>
                                <td data-label="Key Perks">Similar Avios approach, possibly cheaper surcharges to Europe via Madrid</td>
                                <td data-label="Why Choose">Best if you prefer Iberia’s route over BA’s LHR surcharges</td>
                            </tr>
                            {/* Using dangerouslySetInnerHTML for ® */}
                            <tr dangerouslySetInnerHTML={{__html:'<td data-label="Card">Chase Sapphire Preferred®</td><td data-label="Annual Fee">$95</td><td data-label="Key Perks">Flexible UR points, transfer to BA Avios or other partners</td><td data-label="Why Choose">Versatile if you want multiple airline options, not just BA</td>'}}></tr>
                        </tbody>
                    </table>
                </div>
                <p>
                    The <b>BA Visa</b> stands out for Avios-lovers who specifically want
                    that <b>Travel Together</b> certificate.
                    If you prefer flexible UR points or want to avoid BA surcharges,
                    you might choose a general travel card,
                    or do an Iberia approach for certain transatlantic routes
                    (though the BA brand is bigger in many U.S. gateways).
                </p>
            </section>

            {/* Section 12: Pairing with UR or Other Cards */}
            <section id="section-12" className={styles.reviewSection}>
                <h2>Pairing BA Visa with Other Cards</h2>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{ __html:"Because Avios are a transfer partner of <b>Chase Ultimate Rewards</b>, you can open a Sapphire card, earn UR points, then move them to BA if needed. Meanwhile, the BA Visa ensures you get the Travel Together Ticket if you do $30k on it specifically. So one strategy: put enough on BA Visa to secure that certificate + some Avios, then use your high-earning everyday card (like Freedom or Sapphire Reserve) for other categories. Ultimately, you can combine Avios from different IAG programs (Iberia, Aer Lingus) or from UR transfers into your BA Executive Club account, streamlining redemptions. Just watch out for fuel surcharges if booking BA metal."}}></p>
            </section>

            {/* Section 13: Elite Status & BA Tier Points */}
            <section id="section-13" className={styles.reviewSection}>
                 <h2 dangerouslySetInnerHTML={{ __html:"Elite Status &amp; BA Tier Points"}}></h2>
                <p>
                    The BA Visa generally doesn’t fast-track you to BA Executive Club “Bronze, Silver, or Gold.”
                    Elite tiers in BA revolve around Tier Points from flights,
                    not credit card spend.
                    However, Avios from the card can help you upgrade or reduce costs
                    once you have a certain tier.
                    If you want lounge access on oneworld partners,
                    you need Silver or Gold (which requires consistent flight activity, not card spending).
                    The card is primarily about Avios accumulation and that companion pass,
                    not direct elite benefits.
                    If you do want lounge perks, you might need a separate premium card
                    or BA flight segments for actual status.
                </p>
            </section>

             {/* Section 14: Potential Downsides */}
             <section id="section-14" className={styles.reviewSection}>
                 <h2>Potential Downsides</h2>
                <ul className={styles.featureList}>
                    <li><strong>$95 Annual Fee + Surcharges:</strong>
                    BA surcharges on reward flights can be huge ($600+ in business),
                    diminishing the Avios advantage unless you do short-haul or partner routes.</li>
                    <li><strong>High Spend for Travel Together Ticket:</strong>
                    $30k in a year is quite steep if you can’t channel that much spend to one card.
                    The ticket only helps if you want a premium cabin flight on BA metal.</li>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Limited Bonus Categories:</strong> 3x on BA group, 2x on hotels— not as broad as some other airline co-brands that might add dining/groceries."}}></li>
                    <li><strong>No Free Bag Perk:</strong>
                    BA’s baggage policies differ,
                    but there’s no standard “Free Checked Bag” unique to the card (like some other airline cards have).</li>
                </ul>
            </section>

             {/* Section 15: Advanced Usage Tips */}
             <section id="section-15" className={styles.reviewSection}>
                <h2>Advanced Usage Tips</h2>
                <ol className={styles.numberedList}>
                    <li><strong>Seek Partner Sweet Spots:</strong>
                    Use Avios for short-haul on AA or Alaska in the U.S., or flights to Hawaii with fewer surcharges.</li>
                    <li><strong>Strategize Companion Ticket:</strong>
                    If you aim for business or first class on a pricey transatlantic route,
                    the Travel Together Ticket can nearly double your Avios value.
                    Just brace for fees of $600–$1k in upper cabins, though still better than paying full price for two seats.</li>
                    <li><strong>Combine Iberia/AA Options:</strong>
                    Transfer Avios from BA to Iberia to possibly lower surcharges on certain routes via Madrid or on AA.
                    This can be huge if you see an insane BA levy on LHR flights.</li>
                     {/* Using dangerouslySetInnerHTML for ® */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Use Chase Transfers if Short on Avios:</strong> If you also have a Sapphire card, top up your BA account if you’re just shy of an award. Avoid transferring too much if you might not use them (dynamic changes, etc.)."}}></li>
                    <li><strong>Book Off-Peak:</strong>
                    Avios have off-peak rates on BA, or use partner flights to mitigate surcharges.
                    Plan around these to stretch your points further.</li>
                </ol>
            </section>

             {/* Section 16: Another Real-Life Scenario */}
             <section id="section-16" className={styles.reviewSection}>
                <h2>Another Example: Travel Together Ticket</h2>
                <p>
                    Suppose you decide to put $30,000 on the BA Visa in a calendar year
                    to earn the Travel Together Ticket.
                    You might also have a sign-up bonus of 80k Avios.
                    That total spend yields, say, 3,000 Avios if $3k was BA flights (3x=9k) + some 2x hotel spend, etc. {/* Note: calculation in source seems low */}
                    Let’s guess you net 38k from spend + 80k bonus = 118k Avios.
                    Use the Travel Together Ticket for two business class seats from JFK to LHR
                    (cost: ~118k Avios plus ~$1,250 in total taxes/fees).
                    That can be half the Avios you’d typically pay for two,
                    saving you 118k Avios and letting your companion come effectively Avios-free.
                    A round-trip business seat might be $4,000–$5,000 each in cash,
                    so you’re effectively saving thousands if you can handle the surcharges.
                    This scenario can overshadow the $95 fee easily,
                    especially if you do a big annual BA trip.
                </p>
                 {/* !!! ATTENTION: The calculation in the paragraph above ($30k spend yielding ~3k or 38k Avios) seems inconsistent. Please verify and replace with accurate calculations based on the card's 3x/2x/1x structure. Example: ($3k @ 3x) + ($27k @ 1x) = 9k + 27k = 36k Avios from spend. !!! */}
            </section>

             {/* Section 17: Who Should Get the Card? */}
             <section id="section-17" className={styles.reviewSection}>
                 <h2 dangerouslySetInnerHTML={{ __html:"Who Should Get the British Airways Visa Signature® Card?"}}></h2>
                 <div className={styles.prosCons}>
                    <div className={styles.pros}>
                        <h3>Perfect For:</h3>
                        <ul className={styles.featureList}>
                            <li><strong>Frequent Transatlantic Flyers:</strong>
                            If you often use BA or oneworld for Europe,
                            the Avios system can be beneficial</li>
                            <li><strong>High Spenders Chasing Companion Ticket:</strong>
                            $30k a year for a big reward if you want a second seat free in Avios</li>
                            <li><strong>oneworld Loyalists:</strong>
                            oneworld partners (AA, Qatar, JAL) can be booked with Avios,
                            providing broad coverage beyond just BA metal</li>
                            <li><strong>Mid-Tier Fee:</strong>
                            $95 is cheaper than some premium airline cards,
                            while still offering strong sign-up bonuses and good synergy with UR</li>
                        </ul>
                    </div>
                    <div className={styles.cons}>
                        <h3>No, If You:</h3>
                        <ul className={styles.featureList}>
                            <li>Dislike <strong>fuel surcharges</strong> or want minimal taxes/fees on awards</li>
                            <li>Prefer a bigger multipliers on daily categories (like groceries/dining at 3x–4x)</li>
                            <li>Crave <strong>domestic flights only</strong> or rarely see BA usage beyond occasional Europe trips</li>
                            <li>Need <strong>free baggage</strong> or lounge perks from your airline card</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Section 18: Disclaimers & Fine Print */}
             <section id="section-18" className={styles.reviewSection}>
                <h2 dangerouslySetInnerHTML={{ __html:"Disclaimers &amp; Fine Print"}}></h2>
                 {/* Using dangerouslySetInnerHTML for &amp; */}
                <p dangerouslySetInnerHTML={{ __html:"Always confirm official T&amp;Cs from Chase or British Airways. The sign-up bonus, spend thresholds, and category multipliers can change. The <strong>Travel Together Ticket</strong> has restrictions: it’s only valid on BA metal, you pay taxes/surcharges for both seats, and typically you must have the card open at booking and travel time. Fuel surcharges can be steep on BA transatlantic or beyond. The card usually requires good/excellent credit (700+). If you revolve a balance, interest costs overshadow flight savings. The bag policy and seat selection might differ from other airline cards that guarantee free or discounted seat selection. Also check if your companion pass is for economy only or valid in business/first (it typically is for any cabin)."}}></p>
            </section>

            {/* Section 20: Final Thoughts */}
            <section id="section-20" className={styles.reviewSection}>
                 <h2 dangerouslySetInnerHTML={{ __html:"Final Thoughts: Is the BA Visa Signature Worth It?"}}></h2>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{ __html:"For travelers who want to <b>cross the pond</b> via British Airways or exploit oneworld partner flights with Avios, the <strong>British Airways Visa Signature® Card</strong> is a solid mid-tier product. The <b>Travel Together Ticket</b> can be a game-changer if you spend $30k annually and can handle surcharges (especially beneficial in business/first to see maximum savings). While the 3x categories might be narrower compared to some competitor airline cards, Avios remains a flexible currency for short-haul redemptions on partner carriers."}}></p>
                <p>
                    If surcharges, limited bonus categories, or the $95 fee overshadow your usage,
                    you might prefer a general travel card or another airline co-brand.
                    But for those with frequent ties to London or oneworld’s global network,
                    the BA Visa stands out as a cost-effective path
                    to collecting Avios and an occasional free companion seat
                    for a fraction of normal miles.
                    Factor in your route patterns, potential surcharges,
                    and the yearly $30k spend threshold to see if it suits your 2025 flight ambitions.
                </p>
            </section>
           
           {/* CTA Section */}
           <section id="cta" className={styles.ctaSection}>
                <h2 dangerouslySetInnerHTML={{__html:"Get the <b>British Airways Visa Signature® Card</b> Today!"}}></h2>
                <div className={styles.ctaButtons}>
                    <a href={reviewData.applyLink} className={`${styles.btn} ${styles.btnApply}`} title="From card issuer's secure site" target="_blank" rel="noopener noreferrer sponsored">Apply Now</a>
                     {/* Using dangerouslySetInnerHTML for &amp; */}
                    <a href={reviewData.ratesLink} className={`${styles.btn} ${styles.btnRates}`} target="_blank" rel="noopener noreferrer sponsored" dangerouslySetInnerHTML={{__html:"See Rates &amp; Fees"}}></a>
                </div>
            </section>

            {/* Section 20: E-A-T Statement */}
             <section id="section-19" className={`${styles.reviewSection} ${styles.eatSection}`}> {/* Combined classes */}
                <h2 dangerouslySetInnerHTML={{ __html:"Our Commitment to E-A-T: Expertise, Authority &amp; Trustworthiness"}}></h2>
                 {/* E-A-T text adapted for BA Visa */}
                <p>
                    At <strong>TravelCardInsider</strong>,
                    we prioritize reliable, well-researched reviews
                    aligned with Google’s E‑A‑T principles:
                </p>
                <h3>1. Expertise</h3>
                <ul className={styles.featureList}>
                    <li><strong>Frequent BA Flyers:</strong>
                    Our reviewers have tested Avios redemptions,
                    used the Travel Together Ticket,
                    and flown various BA cabins for first-hand insights.</li>
                     {/* Using dangerouslySetInnerHTML for &amp; */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Ongoing Verification:</strong> We monitor BA’s surcharges, oneworld changes, and official T&amp;Cs to keep articles fresh for 2025."}}></li>
                    <li><strong>Real-World Testing:</strong>
                    We verify how 3x or 2x categories post on statements,
                    ensuring accurate guides on spend patterns.</li>
                </ul>
                <h3>2. Authority</h3>
                <ul className={styles.featureList}>
                    <li><strong>Detailed Coverage:</strong>
                    Our approach addresses all aspects
                    from sign-up bonus to advanced usage strategies— no superficial analysis.</li>
                    <li><strong>Industry Mentions:</strong>
                    We’re frequently quoted by recognized travel/finance media
                    for unbiased, thorough airline card reviews.</li>
                    <li><strong>Transparent Disclosure:</strong>
                    If affiliate links exist, we label them
                    so you know how we’re funded without editorial compromise.</li>
                </ul>
                <h3>3. Trustworthiness</h3>
                <ul className={styles.featureList}>
                    <li><strong>Independent Rating:</strong>
                    Advertisers do not control our star rating or final verdict.</li>
                    <li><strong>Reader Interaction:</strong>
                    We welcome user stories or corrections in comments,
                    refining our data with real experiences.</li>
                    <li><strong>Regular Edits:</strong>
                    If BA or Chase modifies card terms or surcharges,
                    we revise promptly so details remain accurate.</li>
                     {/* Using Link component for internal link */}
                    <li dangerouslySetInnerHTML={{__html:"<strong>Privacy &amp; Security:</strong> As per our <a href='/privacy-policy'>Privacy Policy</a>, we safeguard user data from any subscriptions or feedback forms."}}>
                         {/* Corrected: <Link href="/privacy-policy"><a>Privacy Policy</a></Link> */}
                    </li>
                </ul>
                 {/* Using dangerouslySetInnerHTML for ® */}
                <p dangerouslySetInnerHTML={{ __html: "By following E-A-T, we aim to provide a reliable, in-depth review of the BA Visa for your 2025 transatlantic travels."}}></p>
            </section>

            

          </article>
        </div> {/* Close reviewContainer */}
      </main>

      
    </>
  );
}

export default BritishAirwaysVisaReviewPage;