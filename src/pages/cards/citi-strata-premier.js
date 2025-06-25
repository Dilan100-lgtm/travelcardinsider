// Example Path: pages/reviews/citi-strata-premier.js
// Or: pages/reviews/[slug].js (if using dynamic routing with 'citi-strata-premier' as slug)

// !!! WARNING: THIS FILE CONTAINS PLACEHOLDER DATA/URLs/DIMENSIONS !!!
// !!! YOU MUST REPLACE ALL PLACEHOLDERS MARKED WITH '!!!' BEFORE DEPLOYMENT !!!
// !!! VERIFY ALL CARD DETAILS & SCHEMA VALUES AGAINST OFFICIAL ISSUER INFO !!!

import React, { useState, useEffect, useCallback, useRef } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/ReviewPage.module.css'; // Using the REVIEW CSS module

// Data object for the Citi Strata Premier℠ Card review
const reviewData = {
  cardName: 'Citi Strata Premier℠ Card',
  title: 'Citi Strata Premier℠ Card – In-Depth 2025 Review',
  description: 'A comprehensive 2000-word review of the Citi Strata Premier℠ Card, focusing on its 3X and 10X bonus categories, travel protections, $100 hotel credit, transfer partners, and the Citi Trifecta strategy for 2025.',
  keywords: 'Citi, Strata Premier, ThankYou Points, travel credit card, transfer partners, 3X points, 2025 updates',
  author: 'TravelCardInsider', // *** REPLACE with your actual author/site name ***
  imageUrl: '/CardArt-Strata.png.webp', // *** VERIFY PATH in /public ***
  ratingValue: 8.5, // !!! REPLACE with your calculated rating for this card !!!
  applyLink: 'https://www.citi.com/credit-cards/citi-strata-premier-credit-card', // Official Apply Link
  ratesLink: 'https://www.citi.com/credit-cards/compare-credit-cards/citi-strata-premier-credit-card/rates', // !!! VERIFY/REPLACE with specific rates page if different !!!
  // Image dimensions (MUST BE ACCURATE for next/image)
  imageWidth: 480, // *** REPLACE with actual image width ***
  imageHeight: 304, // *** REPLACE with actual image height ***
};

// --- Rating Tooltip Content ---
const ratingCriteria = [ // *** VERIFY/CUSTOMIZE these criteria for Citi Strata Premier Rating ***
    '3X & 10X Bonus Categories',
    'Transfer Partner Value',
    'Welcome Bonus Potential',
    '$100 Hotel Credit Usefulness',
    'Reinstated Travel Protections',
    'Annual Fee ($95)'
];

function CitiStrataPremierReviewPage() {
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
  // !!! VERIFY all URLs, counts, and details FOR CITI STRATA PREMIER !!!
  const siteUrl = "https://www.travelcardinsider.com"; // *** REPLACE with your actual site URL ***
  const pageUrl = `${siteUrl}/cards/citi-strata-premier`; // *** REPLACE with your actual page URL ***
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Citi Strata Premier℠ Card",
    "image": `${siteUrl}${reviewData.imageUrl}`,
    "description": "The Citi Strata Premier℠ Card is a travel rewards powerhouse, offering 3X points on everyday categories like gas and groceries, a $100 hotel credit, and access to valuable airline transfer partners.",
    "brand": {
      "@type": "Brand",
      "name": "Citi"
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
      "reviewBody": reviewData.description
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": reviewData.ratingValue.toString(),
      "bestRating": "10",
      "worstRating": "1",
      "ratingCount": 1150, // *** REPLACE with actual or estimated count ***
      "reviewCount": 1150  // *** REPLACE with actual or estimated count ***
    },
    "offers": {
      "@type": "Offer",
      "url": reviewData.applyLink,
      "priceCurrency": "USD",
      "price": "95",
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
        <link rel="alternate" href={siteUrl} hreflang="en-us" />
      </Head>

      <main>
        {/* Spacing for fixed header */}
        <div style={{ marginTop: '2rem' }}></div>

        {/* Review Container using CSS Module */}
        <div className={styles.reviewContainer}>
          <article>
            {/* ============= REVIEW HEADER ============= */}
            <header className={styles.reviewHeader}>
              <h1 dangerouslySetInnerHTML={{ __html: "Citi Strata Premier℠ Card: Your Everyday Workhorse for World-Class Travel" }}></h1>
              <section id="section-1">
                <div className={styles.intro}>
                   <p>Your wallet is a well-worn compromise. There’s the card for groceries, the one for gas, and another for dining. Each serves a purpose, but together they create a fragmented strategy. What if one card could simplify this juggle and turn your everyday errands into extraordinary travel?</p>
                   <p dangerouslySetInnerHTML={{ __html: "Enter the <strong>Citi Strata Premier℠ Card</strong>. In May 2024, Citi strategically refreshed its respected Premier® Card, relaunching it as the Strata Premier℠. This wasn't just a name change; it was a response. Citi listened, bringing back crucial travel protections that had vanished years prior, signaling a renewed commitment to the serious traveler." }}></p>
                   <p dangerouslySetInnerHTML={{ __html: "The result is a formidable <strong>&quot;workhorse&quot; card</strong>. It’s designed to excel at turning your largest household budget items—supermarket runs, gas fill-ups, and family dinners—into a powerful stash of flexible travel points. It’s built for the everyday spender with global ambitions, offering a pathway to premium travel without the premium price tag. This review will dissect every facet of the card to help you decide if it’s the new champion your wallet deserves." }}></p>
                </div>
                <div className={styles.cardImageContainer}>
                   <Image
                     src={reviewData.imageUrl}
                     alt={"Citi Strata Premier℠ Card"}
                     width={reviewData.imageWidth}
                     height={reviewData.imageHeight}
                     className={styles.cardImage}
                     priority
                   />
                 </div>
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
                  <div className={styles.starRating} title={`Rated ${reviewData.ratingValue} out of 10 stars`} style={{ '--rating': `${reviewData.ratingValue * 10}%` }}>
                    <span>★★★★★</span>
                    <span className={styles.filledStars}>★★★★★</span>
                  </div>
                  <div className={styles.ratingDescription}>
                    <i>A travel rewards powerhouse with top-tier earning on everyday spending and valuable transfer partners.</i>
                  </div>
                </div>
              </section>
            </header>

            {/* ============= REVIEW CONTENT SECTIONS ============= */}

            <section id="section-2" className={styles.reviewSection}>
                <h2>Card Snapshot & “Best For” Tagline</h2>
                <p><strong>Best For: The Everyday Spender with Global Ambitions.</strong></p>
                <ul className={styles.featureList}>
                    <li><strong>Welcome Bonus:</strong> Earn 60,000 bonus ThankYou® Points after spending $4,000 in the first 3 months of account opening. <a href="https://www.citi.com/credit-cards/citi-strata-premier-credit-card" target="_blank" rel="noopener noreferrer sponsored">[Citi: Citi Strata Premier℠ Card Details]</a></li>
                    <li><strong>Annual Fee:</strong> $95</li>
                    <li><strong>Key Earning Rates:</strong> 10X points on hotels, car rentals, and attractions booked via CitiTravel.com; 3X points on air travel, other hotels, restaurants, supermarkets, gas & EV stations; 1X on all else.</li>
                    <li><strong>Standout Perk:</strong> $100 Annual Hotel Credit on a single stay of $500+ booked via CitiTravel.com. <a href="https://www.cardbenefits.citi.com/" target="_blank" rel="noopener noreferrer sponsored">[Citi: Citi Strata Premier℠ Card Benefits]</a></li>
                    <li><strong>Foreign Transaction Fees:</strong> None.</li>
                    <li><strong>Credit Needed:</strong> Good to Excellent (typically 670-850 FICO score).</li>
                </ul>
            </section>
            
            <section id="section-3" className={styles.reviewSection}>
                <h2>Detailed User Profiling — Who Should Get the Card</h2>
                <p>A credit card is only as good as its fit for your lifestyle. The Citi Strata Premier℠ isn't for everyone, but for these specific profiles, it’s nearly perfect.</p>
                <ul className={styles.featureList}>
                    <li><strong>The Family CFO:</strong> You manage the household budget, where the biggest lines are groceries, gas, and dining. The Strata Premier’s broad 3X categories are a direct match, effortlessly converting weekly errands into points for the next family vacation.</li>
                    <li><strong>The Aspiring Points Pro:</strong> Ready to graduate from simple cash-back cards? The Strata Premier is an ideal "starter travel card." It’s a manageable entry into the world of transferable points without the intimidating fee of a premium card. More importantly, it’s the essential key that unlocks the powerful "Citi Trifecta" strategy.</li>
                    <li><strong>The International Explorer:</strong> You aren't deterred by unfamiliar airline names. You know the true value of points lies in loyalty program alliances. The card’s transfer partners, rich with international powerhouses like Turkish Airlines and Air France-KLM, unlock phenomenal redemptions—like deeply discounted business class seats to Europe or Asia.</li>
                </ul>
            </section>

            {/* CTA Section */}
             <section id="cta" className={styles.ctaSection}>
                <h2 dangerouslySetInnerHTML={{__html:"Get the <b>Citi Strata Premier℠ Card</b> Today!"}}></h2>
                <div className={styles.ctaButtons}>
                    <a href={reviewData.applyLink} className={`${styles.btn} ${styles.btnApply}`} title="From card issuer's secure site" target="_blank" rel="noopener noreferrer sponsored">Apply Now</a>
                    <a href={reviewData.ratesLink} className={`${styles.btn} ${styles.btnRates}`} target="_blank" rel="noopener noreferrer sponsored" dangerouslySetInnerHTML={{__html:"See Rates &amp; Fees"}}></a>
                </div>
            </section>

            <section id="section-4" className={styles.reviewSection}>
                <h2>Who Should Pass on the Card</h2>
                <p>While the Strata Premier excels for many, it's a clear mismatch for others.</p>
                <ul className={styles.featureList}>
                    <li><strong>The Domestic-Only Flyer:</strong> Loyal to U.S. airlines like Southwest or United? The card’s only domestic airline partner is JetBlue. A card like the Chase Sapphire Preferred® is a much more effective tool.</li>
                    <li><strong>The Simplicity Seeker:</strong> If you want one card that earns a great flat rate on everything, this isn't it. The Capital One Venture Rewards Credit Card is a superior choice.</li>
                    <li><strong>The Ultra-Premium Traveler:</strong> If you demand airport lounge access or hotel elite status, the Strata Premier will fall short. High-end travelers should look at premium cards like The Platinum Card® from American Express.</li>
                    <li><strong>The Dedicated Cash-Back Enthusiast:</strong> If your primary goal is cash, this card is not for you. Citi is devaluing cash-back redemptions, cementing this card's identity as a travel-first product.</li>
                </ul>
            </section>

            <section id="section-5" className={styles.reviewSection}>
                <h2>Welcome Bonus & Citi 48-Month Eligibility Rules</h2>
                <p>The Citi Strata Premier℠ greets new cardholders with 60,000 bonus ThankYou® Points after a $4,000 spend in the first three months. At a minimum, that's worth $600 for travel or gift cards. Through transfer partners, however, that bonus could easily be worth $1,000 or more in airfare.</p>
                <p>Before applying, you must understand Citi's strict eligibility rules:</p>
                <ul className={styles.featureList}>
                    <li><strong>The 48-Month Rule:</strong> You cannot get the welcome bonus if you have received one for the Citi Premier® or Strata Premier® in the past 48 months. <a href="https://www.citi.com/credit-cards/compare-credit-cards/CMA-PIT" target="_blank" rel="noopener noreferrer sponsored">[Citi: Cardmember Agreement]</a></li>
                    <li><strong>The Product Change Trap:</strong> You are also ineligible if you have product-changed a different Citi card to a Premier or Strata Premier in the past 48 months.</li>
                    <li><strong>Application Velocity:</strong> While unwritten, a common rule of thumb is to apply for no more than one Citi card every 8 days and no more than two every 65 days.</li>
                </ul>
            </section>

            <section id="section-6" className={styles.reviewSection}>
                <h2>Earning Power – 3× Everyday & 10× Portal Multipliers</h2>
                <p>The engine of the Citi Strata Premier℠ is its rewards structure, led by its expansive 3X bonus categories. You’ll earn 3 ThankYou® Points per dollar at restaurants, supermarkets, gas stations, EV charging stations, and on air travel and other hotel purchases.</p>
                <p>For those booking through Citi's own portal, the rewards are even richer: a staggering 10 ThankYou® Points per dollar on hotels, car rentals, and attractions booked via CitiTravel.com.</p>
            </section>
            
            <section id="section-7" className={styles.reviewSection}>
                <h2 dangerouslySetInnerHTML={{__html:"ThankYou® Points Basics &amp; Cash-Back Devaluation"}}></h2>
                <p>The currency you earn is Citi ThankYou® Points (TYPs), but not all redemptions are created equal.</p>
                <ul className={styles.featureList}>
                    <li><strong>Poor Value (&lt;1¢/point):</strong> Using points at checkout with retailers like Amazon yields a low value of just 0.8 cents per point.</li>
                    <li><strong>Standard Value (1¢/point):</strong> This is the baseline. Redeem points for 1 cent each for gift cards or travel booked through the Citi Travel portal.</li>
                    <li><strong>The Big Warning—Cash Back Devaluation:</strong> You can currently redeem points for cash at the standard 1-cent rate. However, effective August 24, 2025, the value of points redeemed for cash back will drop 25% to just 0.75 cents per point. <a href="https://www.thankyou.com/cms.htm?pageName=tc" target="_blank" rel="noopener noreferrer sponsored">[Citi ThankYou Rewards: Program Terms and Conditions]</a></li>
                    <li><strong>Best Value (1.5¢+/point):</strong> The undisputed best way to use TYPs is by transferring them to Citi's airline and hotel partners.</li>
                </ul>
            </section>

            <section id="section-8" className={styles.reviewSection}>
                <h2>Transfer-Partner Sweet Spots (Airline & Hotel)</h2>
                <p>The true power of the Strata Premier lies in converting points to airline miles. Here are some of the most valuable "sweet spot" redemptions:</p>
                <ul className={styles.featureList}>
                    <li><strong>Turkish Airlines Miles&Smiles:</strong> Arguably the program's crown jewel. You can book round-trip domestic flights on United Airlines for as little as 10,000 miles each way.</li>
                    <li><strong>Air France-KLM Flying Blue:</strong> Your gateway across the Atlantic, with frequent "Promo Rewards" that discount award tickets by 25-50%.</li>
                    <li><strong>Avianca LifeMiles:</strong> Prized for premium cabin redemptions with no fuel surcharges, saving hundreds of dollars.</li>
                    <li><strong>Choice Privileges (The Hidden Gem):</strong> Offers an enhanced 1:2 transfer ratio (10,000 Citi points become 20,000 Choice points). <a href="https://www.thankyou.com/transferPartner.htm" target="_blank" rel="noopener noreferrer sponsored">[Citi ThankYou Rewards: Transfer Partners List]</a></li>
                </ul>
            </section>
            
            <section id="section-9" className={styles.reviewSection}>
                <h2 dangerouslySetInnerHTML={{__html:"“Citi Trifecta” Strategy (Premier + Custom Cash + Double Cash)"}}></h2>
                 <p>While strong on its own, the Strata Premier's value multiplies when paired with its no-annual-fee siblings in a strategy known as the "Citi Trifecta."</p>
                <ol className={styles.numberedList}>
                    <li><strong>Citi Strata Premier℠ Card ($95 annual fee): The Engine.</strong> Use it for its broad 3X categories and as the key that unlocks transfers to high-value travel partners.</li>
                    <li><strong>Citi Custom Cash® Card ($0 annual fee): The Specialist.</strong> It earns 5X points on your single highest eligible spending category each month (on up to $500). <a href="https://www.citi.com/credit-cards/citi-custom-cash-credit-card" target="_blank" rel="noopener noreferrer sponsored">[Citi: Citi Custom Cash® Card Details]</a></li>
                    <li><strong>Citi Double Cash® Card ($0 annual fee): The Catch-All.</strong> This earns a flat 2X points on all other purchases (1X when you buy, 1X when you pay). <a href="https://www.citi.com/credit-cards/citi-double-cash-credit-card" target="_blank" rel="noopener noreferrer sponsored">[Citi: Citi Double Cash® Card Details]</a></li>
                </ol>
            </section>

            <section id="section-10" className={styles.reviewSection}>
                <h2>$100 Annual Hotel Credit – Use-Case & Limits</h2>
                <p>One of the card's headline benefits is its $100 annual hotel credit. You receive a $100 discount on a single, prepaid hotel stay of $500 or more (excluding taxes) booked through CitiTravel.com.</p>
                <p>However, this perk can be a puzzle:</p>
                <ul className={styles.featureList}>
                    <li>The $500 minimum spend requirement.</li>
                    <li>The portal booking requirement means forfeiting hotel loyalty points.</li>
                    <li>Portal prices can sometimes be higher, negating the savings.</li>
                </ul>
            </section>

            <section id="section-11" className={styles.reviewSection}>
                <h2>Re-instated Travel Protections (Trip Delay, Luggage, Rental Car)</h2>
                <p>A huge improvement with the Strata Premier rebrand was the return of travel protections. Their absence was a deal-breaker for many; their comeback makes the card a viable contender again. <a href="https://www.cardbenefits.citi.com/" target="_blank" rel="noopener noreferrer sponsored">[Citi: Guide to Protection Benefits]</a></p>
                <p>Key protections include: Trip Cancellation & Interruption, Trip Delay, Lost or Damaged Luggage, and MasterRental® Coverage.</p>
            </section>

            <section id="section-12" className={styles.reviewSection}>
                <h2>Extra World Elite/Amex-Style Perks</h2>
                <p>As a World Elite Mastercard®, the Strata Premier includes a collection of often-overlooked perks that add real value: <a href="https://www.mastercard.us/en-us/personal-credit-cards/world-elite-mastercard-credit-card.html" target="_blank" rel="noopener noreferrer sponsored">[Mastercard: World Elite Mastercard® Benefits]</a></p>
                <ul className={styles.featureList}>
                    <li>$5 Lyft credit each month after taking three rides.</li>
                    <li>Complimentary trial membership to DoorDash DashPass.</li>
                    <li>Complimentary ShopRunner membership.</li>
                    <li>Citi Entertainment access for presale tickets.</li>
                </ul>
            </section>

            <section id="section-13" className={styles.reviewSection}>
                <h2>Rates, Fees & Why You Must Pay in Full</h2>
                <p>The high interest rates (variable 20.24% - 28.24% APR) underscore the golden rule of rewards cards: always pay your balance in full and on time. The value of any rewards earned is quickly erased by interest charges.</p>
            </section>

            <section id="section-14" className={styles.reviewSection}>
                <h2>Real-World Spending Example (Family Budget Math)</h2>
                <p>Let's see how the points add up for "Taylor, a family traveler," with a typical monthly budget using the "Citi Trifecta":</p>
                <div className={styles.tableContainer}>
                    <table className={styles.statsTable}>
                        <thead>
                            <tr>
                                <th>Category (Card Used)</th>
                                <th>Monthly Spend</th>
                                <th>Multiplier</th>
                                <th>Monthly Points</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr><td data-label="Category">Groceries (Custom Cash)</td><td data-label="Spend">$500</td><td data-label="Multiplier">5X</td><td data-label="Points">2,500</td></tr>
                            <tr><td data-label="Category">Gas (Strata Premier)</td><td data-label="Spend">$250</td><td data-label="Multiplier">3X</td><td data-label="Points">750</td></tr>
                            <tr><td data-label="Category">Dining (Strata Premier)</td><td data-label="Spend">$300</td><td data-label="Multiplier">3X</td><td data-label="Points">900</td></tr>
                            <tr><td data-label="Category">Other (Double Cash)</td><td data-label="Spend">$1,500</td><td data-label="Multiplier">2X</td><td data-label="Points">3,000</td></tr>
                            <tr style={{fontWeight: 'bold', borderTop: '2px solid #dee2e6'}}>
                                <th colSpan="3">Total Annual Points from Spend</th><th>85,800</th>
                            </tr>
                            <tr style={{fontWeight: 'bold'}}>
                                <th colSpan="3">Welcome Bonus (Year 1)</th><th>+60,000</th>
                            </tr>
                             <tr style={{fontWeight: 'bold', backgroundColor: '#f0f8ff'}}>
                                <th colSpan="3">Total Year 1 Points</th><th>145,800</th>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            <section id="section-15" className={styles.reviewSection}>
                <h2>Pros & Cons One-Look Table</h2>
                 <div className={styles.prosCons}>
                    <div className={styles.pros}>
                        <h3>Pros</h3>
                        <ul className={styles.featureList}>
                            <li>Excellent 3X on groceries, gas, dining</li>
                            <li>Powerful 10X portal earning rate</li>
                            <li>Valuable international transfer partners</li>
                            <li>Reinstated travel protections</li>
                            <li>Unlocks the powerful "Citi Trifecta"</li>
                        </ul>
                    </div>
                    <div className={styles.cons}>
                        <h3>Cons</h3>
                        <ul className={styles.featureList}>
                             <li>$95 annual fee</li>
                             <li>Restrictive $100 hotel credit</li>
                             <li>Lacks major U.S. airline partners</li>
                             <li>Upcoming cash-back devaluation</li>
                             <li>No airport lounge access</li>
                        </ul>
                    </div>
                </div>
            </section>
            
            <section id="section-16" className={styles.reviewSection}>
                <h2>Voices from the Community – 5 Mini-Testimonials</h2>
                <ul className={styles.featureList}>
                    <li><strong>The Strategist (Andrew, One Mile at a Time):</strong> "The Strata Premier...is required to make transfers work," highlighting its role as the key to his Trifecta system.</li>
                    <li><strong>The International Value Hunter (Reddit user):</strong> "I do multiple cross Atlantic trips and Turkish Airlines have business class that you can get for 45,000 miles..."</li>
                    <li><strong>The Realist (TMagee, One Mile at a Time):</strong> On the hotel credit: "I would not count on being able to use this benefit... Most likely you'll break even at best."</li>
                    <li><strong>The Everyday Earner (alexarauz, Reddit):</strong> "I will start using my Citi Premier more often as it also gets 3x on...restaurants, groceries and gas."</li>
                    <li><strong>The Frustrated Applicant (Jake Z., Frequent Miler):</strong> Detailed a struggle to get his bonus due to a "disconnect between the marketing department's offer...and the back-end terms."</li>
                </ul>
            </section>
            
            <section id="section-17" className={styles.reviewSection}>
                <h2>Market Matchup Table vs. The Competition</h2>
                <div className={styles.tableContainer}>
                    <table className={styles.statsTable}>
                        <thead><tr><th>Feature</th><th>Citi Strata Premier℠</th><th>Chase Sapphire Preferred®</th><th>Capital One Venture</th><th>American Express® Green</th></tr></thead>
                        <tbody>
                            <tr><td data-label="Feature">Annual Fee</td><td>$95</td><td>$95</td><td>$95</td><td>$150</td></tr>
                            <tr><td data-label="Feature">Groceries</td><td><strong>3X (in-store)</strong></td><td>3X (online only)</td><td>2X</td><td>1X</td></tr>
                            <tr><td data-label="Feature">Gas</td><td><strong>3X</strong></td><td>1X</td><td>2X</td><td>1X</td></tr>
                            <tr><td data-label="Feature">Key Credit</td><td>$100 Hotel Credit</td><td>$50 Hotel Credit <a href="https://www.chase.com/card-benefits/sapphire-preferred/travel" target="_blank" rel="noopener noreferrer sponsored">[Chase: Card Benefits Guide]</a></td><td>$100 TSA/Global Entry <a href="https://www.capitalone.com/credit-cards/venture/" target="_blank" rel="noopener noreferrer sponsored">[Capital One: Venture Card Benefits]</a></td><td>$189 CLEAR® Plus <a href="https://www.americanexpress.com/us/credit-cards/card/green-card/" target="_blank" rel="noopener noreferrer sponsored">[American Express: Green Card Benefits]</a></td></tr>
                            <tr><td data-label="Feature">Portal Value</td><td>1.0¢ / point</td><td><strong>1.25¢ / point</strong></td><td>1.0¢ / mile</td><td>Up to 1.0¢ / point</td></tr>
                        </tbody>
                    </table>
                </div>
            </section>

            <section id="section-18" className={styles.reviewSection}>
                <h2>Deeper Competitor Analysis – When Strata Wins/Loses</h2>
                 <ul className={styles.featureList}>
                    <li><strong>vs. Chase Sapphire Preferred®:</strong> Strata Premier is superior for earning on groceries and gas. Sapphire Preferred wins with its 25% portal points boost and better domestic transfer partners. Choose Strata for everyday spending; choose Sapphire for simple redemptions and domestic travel.</li>
                    <li><strong>vs. Capital One Venture Rewards:</strong> Strata's 3X categories will out-earn Venture's flat 2X for most. But Venture is a "set it and forget it" card with a Global Entry/TSA PreCheck credit. Choose Strata if you're a category maximizer; choose Venture for simplicity.</li>
                    <li><strong>vs. American Express® Green Card:</strong> The Amex Green has a higher fee ($150). Its strength is a broader definition of "travel" and unique credits for CLEAR Plus. Choose Strata for its lower fee and stronger everyday earning; choose Amex Green if you value its specific credits.</li>
                </ul>
            </section>
            
            <section id="section-19" className={styles.reviewSection}>
                <h2>Card-Specific FAQs (Top Questions)</h2>
                <dl>
                    <dt>What credit score do I need?</dt>
                    <dd>Approval typically requires a Good to Excellent score (FICO 670+).</dd>
                    <dt>Can I get the bonus if I had the old Citi Premier®?</dt>
                    <dd>Only if you haven't received a bonus for either card in the past 48 months.</dd>
                    <dt>Do my ThankYou® Points expire?</dt>
                    <dd>No, as long as your account is open.</dd>
                    <dt>Is the $100 hotel credit easy to use?</dt>
                    <dd>It can be challenging. It requires a single, prepaid booking of $500+ through the Citi portal.</dd>
                    <dt>Does this card have airport lounge access?</dt>
                    <dd>No, the Citi Strata Premier℠ does not include lounge access.</dd>
                </dl>
            </section>

            {/* Final CTA Section */}
            <section id="cta-final" className={styles.ctaSection}>
                <h2 dangerouslySetInnerHTML={{__html:"Ready to Make the <b>Citi Strata Premier℠ Card</b> Your New Workhorse?"}}></h2>
                <div className={styles.ctaButtons}>
                    <a href={reviewData.applyLink} className={`${styles.btn} ${styles.btnApply}`} title="From card issuer's secure site" target="_blank" rel="noopener noreferrer sponsored">Apply Now</a>
                    <a href={reviewData.ratesLink} className={`${styles.btn} ${styles.btnRates}`} target="_blank" rel="noopener noreferrer sponsored" dangerouslySetInnerHTML={{__html:"See Rates &amp; Fees"}}></a>
                </div>
            </section>
            
            <section id="section-20" className={styles.reviewSection}>
                <h2>Final Verdict – Is It Your New Front-of-Wallet Champ?</h2>
                <p>In a crowded field, the Citi Strata Premier℠ has carved out a distinct and compelling identity. Its value doesn’t come from flashy perks like lounge access. Instead, its strength is more fundamental: an unparalleled ability to convert the largest, most common categories of everyday spending into a highly valuable travel currency.</p>
                <p>This card is built for the savvy consumer who looks beyond the surface. It is for the household that wants its weekly grocery bill and daily commute to fund its next great adventure. It's the perfect centerpiece for a low-cost, high-reward "Citi Trifecta," transforming two no-annual-fee cards into a point-earning powerhouse.</p>
                <p>But for those willing to meet it halfway, the rewards are immense. If you’re looking for a card that works as hard as you do at the supermarket and gas pump—and then rewards that hard work with business class flights to Paris or a family trip to Hawaii—the Citi Strata Premier℠ isn't just a contender. It might just be your new front-of-wallet champion.</p>
            </section>

          </article>
        </div>
      </main>
    </>
  );
}

export default CitiStrataPremierReviewPage;