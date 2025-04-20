// Example Path: pages/reviews/amex-gold.js
// Or: pages/reviews/[slug].js (if using dynamic routing)

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
  cardName: 'American Express® Gold Card',
  title: 'American Express® Gold Card – In-Depth 2025 Review',
  description: 'A 2000-word review of the American Express® Gold Card, focusing on dining, grocery, travel rewards, credits, 2025 updates, pros, cons, and advanced usage tips.',
  keywords: 'American Express, Gold Card, rewards, dining, groceries, travel, 2025 updates',
  author: 'TravelCardInsider', // *** REPLACE with your actual author/site name ***
  imageUrl: '/NUS000000174_480x304_straight_withname.avif', // *** VERIFY PATH in /public ***
  ratingValue: 8.8, // From Amex Gold HTML
  applyLink: 'https://www.americanexpress.com/us/credit-cards/card/gold-card/', // *** REPLACE with actual Amex Gold APPLY URL ***
  ratesLink: 'https://www.americanexpress.com/us/credit-cards/card-application/apply/prospect/terms/gold-card/25330-10-0#FeeTable', // *** VERIFY URL ***
  // Image dimensions (MUST BE ACCURATE for next/image)
  imageWidth: 480, // *** REPLACE with actual image width ***
  imageHeight: 304, // *** REPLACE with actual image height ***
};

// --- Rating Tooltip Content (Customize if needed for Amex Gold) ---
const ratingCriteria = [ // *** VERIFY/CUSTOMIZE these criteria for Amex Gold Rating ***
    'Dining & Grocery Rewards (4x)',
    'Welcome Bonus Value',
    'Membership Rewards® Flexibility',
    'Annual Fee vs. Credits ($250 / $240)',
    'Travel Perks (3x Flights, No FTF)'
];


function AmexGoldReviewPage() {
  // --- Tooltip State and Logic ---
  const [showRatingInfo, setShowRatingInfo] = useState(false);
  const tooltipRef = useRef(null);

  const handleIconClick = useCallback((event) => {
        event.preventDefault();
        event.stopPropagation();
        setShowRatingInfo(prevState => !prevState); // Toggle state
    }, []); // Empty dependency array as it doesn't depend on external state changing

    const closeTooltip = useCallback(() => {
        setShowRatingInfo(false);
    }, []);

    // Close tooltip if clicked outside
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


  // Inline Structured Data based on the final template structure
  // !!! VERIFY all URLs, counts, and details !!!
  const siteUrl = "https://www.travelcardinsider.com"; // *** REPLACE with your actual site URL ***
  const pageUrl = `${siteUrl}/reviews/amex-gold`; // *** REPLACE with your actual page URL ***
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "American Express® Gold Card",
    "image": `${siteUrl}${reviewData.imageUrl}`, // *** Assuming imageUrl starts with / ***
    "description": "The American Express® Gold Card offers standout rewards on dining and groceries (4x points), plus valuable monthly credits ($10 dining, $10 Uber Cash). Ideal for foodies and travelers using Membership Rewards®.",
    "brand": {
      "@type": "Brand",
      "name": "American Express"
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
      "reviewBody": reviewData.description // Use meta description or a specific summary
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": reviewData.ratingValue.toString(),
      "bestRating": "10",
      "worstRating": "1",
      "ratingCount": 580, // *** REPLACE with actual or estimated count ***
      "reviewCount": 580  // *** REPLACE with actual or estimated count ***
    },
    "offers": {
      "@type": "Offer",
      "url": reviewData.applyLink.startsWith('http') ? reviewData.applyLink : `${siteUrl}${reviewData.applyLink}`, // *** Ensure full APPLY URL ***
      "priceCurrency": "USD",
      "price": "250", // Annual Fee
      "availability": "https://schema.org/InStock",
      "itemCondition": "https://schema.org/NewCondition"
    }
  };


  return (
    <>
      {/* ===== HEAD SECTION for Metadata & SEO ===== */}
      <Head>
        <title>{reviewData.title}</title>
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
               {/* H1 already styled by .reviewHeader h1 */}
              <h1>{reviewData.title}</h1>

              {/* Section 1 Content (Part of Header Structure in Template) */}
              <section id="section-1"> {/* No specific introSection class needed now */}
                <div className={styles.intro}> {/* Styling applied via .intro p */}
                  <p>
                    The <strong>American Express® Gold Card</strong> consistently ranks among
                    the best for <strong>dining and groceries</strong>, rewarding up to 4x Membership Rewards® points
                    in these categories. With an annual fee of <strong>$250</strong>,
                    it’s not the cheapest, but it’s loaded with monthly dining credits,
                    airline fee credits, and robust point multipliers.
                    If you’re a foodie or frequent traveler,
                    you can easily recoup the fee if you leverage its perks well.
                  </p>
                </div>

                {/* Image Container */}
                <div className={styles.cardImageContainer}>
                  <Image
                    src={reviewData.imageUrl}
                    alt={reviewData.cardName} // Use card name for alt text
                    width={reviewData.imageWidth} // *** REPLACE or use data ***
                    height={reviewData.imageHeight} // *** REPLACE or use data ***
                    className={styles.cardImage}
                    priority
                  />
                </div>

                {/* RATING SECTION */}
                <div className={styles.ratingSection}>
                   <span className={styles.tciRating}> {/* Added position: relative in CSS */}
                     <button
                       type="button"
                       className={styles.infoIconButton}
                       aria-label="Rating Information"
                       onClick={handleIconClick}
                     >
                       <svg aria-hidden="true" focusable="false" className={styles.infoIcon} viewBox="0 0 16 16">
                         <path fillRule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                         <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                       </svg>
                     </button>
                     TCI Rating: <strong>{reviewData.ratingValue.toFixed(1)}</strong>/10

                      {/* --- Conditionally Rendered Tooltip --- */}
                      {/* Positioned absolutely relative to tciRating span */}
                      {showRatingInfo && (
                            <div
                                ref={tooltipRef} // Attach the ref here
                                className={styles.ratingTooltip}
                                // Removed inline style, relying on CSS for positioning
                                role="tooltip"
                                aria-live="polite"
                            >
                                <strong>TCI Rating: {reviewData.ratingValue.toFixed(1)}/10</strong>
                                <p className={styles.tooltipIntro}>This rating is based on:</p>
                                <ul className={styles.tooltipList}>
                                     {ratingCriteria.map((criterion, index) => <li key={index}>{criterion}</li>)}
                                </ul>
                            </div>
                        )}
                   </span>

                  {/* STAR RATING */}
                  <div className={styles.starRating} title={`Rated ${reviewData.ratingValue} out of 10 stars`}>
                    ★★★★★
                    <span className={styles.filledStars} style={{ '--rating': `${reviewData.ratingValue * 10}%` }}>
                      ★★★★★
                    </span>
                  </div>

                  <div className={styles.ratingDescription}>
                    <i>A top pick for foodies & travelers, with huge dining/grocery rewards and valuable statement credits.</i>
                  </div>
                </div>
              </section>
            </header>

            {/* ============= REVIEW CONTENT SECTIONS (Hardcoded JSX) ============= */}

            {/* Section 2: Quick Stats Table */}
            <section id="section-2" className={styles.reviewSection}>
               {/* h2 styled by .reviewSection h2 */}
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
                      <td data-label="Details">$250</td>
                    </tr>
                    <tr>
                      <td data-label="Feature">APR</td>
                      <td data-label="Details" dangerouslySetInnerHTML={{ __html: "20.24%–27.24% Variable (Pay in Full recommended for charge cards; see T&amp;Cs)" }}></td>
                    </tr>
                    <tr>
                      <td data-label="Feature">Welcome Bonus</td>
                      <td data-label="Details">Typically ~60k–75k Membership Rewards® after $4,000 in first 6 months</td>
                    </tr>
                    <tr>
                      <td data-label="Feature">Earning Rates</td>
                      <td data-label="Details">4x dining, 4x U.S. supermarkets (up to $25k/year, then 1x), 3x flights booked with Amex Travel, 1x on other spend</td>
                    </tr>
                    <tr>
                      <td data-label="Feature">Credits</td>
                      <td data-label="Details">$10 monthly dining credit (Select merchants), $10 monthly Uber Cash (U.S.)</td>
                    </tr>
                    <tr>
                      <td data-label="Feature">Foreign Transaction Fee</td>
                      <td data-label="Details">None</td>
                    </tr>
                    <tr>
                      <td data-label="Feature">Membership Rewards® Transfers</td>
                      <td data-label="Details">1:1 to many airline partners (Delta, ANA, etc.) plus hotels (Hilton, Marriott) at variable rates</td>
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
              <h2>Get the <b>American Express® Gold Card</b> Today!</h2>
              <div className={styles.ctaButtons}>
                <a href={reviewData.applyLink} className={`${styles.btn} ${styles.btnApply}`} title="From card issuer's secure site" target="_blank" rel="noopener noreferrer sponsored">Apply Now</a>
                <a href={reviewData.ratesLink} className={`${styles.btn} ${styles.btnRates}`} target="_blank" rel="noopener noreferrer sponsored">See Rates & Fees</a>
              </div>
            </section>

            {/* Section 3: Card Overview & Positioning */}
            <section id="section-3" className={styles.reviewSection}>
              <h2>Card Overview & Positioning</h2>
              <p>
                The <strong>Amex Gold</strong> targets individuals who spend heavily on <strong>food</strong>—both dining and groceries.
                Its 4x categories can yield hundreds of dollars worth of points yearly.
                At a <strong>$250</strong> annual fee, it’s more than many mid-tier cards but still cheaper than premium $695 alternatives (Amex Platinum).
                Two key monthly credits ($10 dining, $10 Uber) offset up to $240 if utilized fully.
                That effectively reduces your out-of-pocket cost close to $10/year if you maximize them.
                Meanwhile, you get robust point earnings,
                plus the advantage of <strong>Membership Rewards</strong> for advanced travel redemptions via airline/hotel transfers.
                If you frequently dine out or buy groceries in the U.S.,
                the Gold Card can be a staple in your wallet for 2025.
              </p>
            </section>

            {/* Section 4: Earning Rates & Food Focus */}
             <section id="section-4" className={styles.reviewSection}>
                <h2>Earning Rates – A Foodie’s Dream</h2>
                <p dangerouslySetInnerHTML={{ __html: "As of 2025 T&amp;Cs, you get:"}}></p>
                <ul className={styles.featureList}>
                    <li><strong>4x points</strong> on dining worldwide</li>
                    <li><strong>4x points</strong> on U.S. supermarket purchases (up to $25k annually, then 1x)</li>
                    <li><strong>3x points</strong> on flights booked directly with airlines or via Amex Travel</li>
                    <li><strong>1x point</strong> on everything else</li>
                </ul>
                <p>
                    This arrangement is extremely lucrative for families or individuals spending thousands on groceries annually.
                    The 4x dining is also a boon if you frequently eat out or use certain food delivery services that code as dining.
                    Meanwhile, 3x on flights is decent (though some competitor cards do 2x or 3x on general travel).
                    If you want top-tier coverage across all travel, you might look at Platinum or a different product,
                    but for food, the Gold shines.
                </p>
            </section>

            {/* Section 5: Redeeming Membership Rewards® */}
            <section id="section-5" className={styles.reviewSection}>
                <h2>Redeeming Membership Rewards® (MR Points)</h2>
                <p>
                    <strong>Amex’s</strong> MR program is among the most versatile, offering:
                </p>
                <ol className={styles.numberedList}>
                    <li><strong>Transfer to Partners (1:1 or Varying Ratios):</strong>
                    Airlines like Delta, ANA, British Airways, etc.
                    Some hotels like Hilton (1:2) or Marriott (1:1.2).
                    Potentially secure 2¢+ per point on premium cabin awards or off-peak sweet spots.</li>
                    <li><strong>Amex Travel Portal:</strong>
                    Book flights, hotels, etc. Typically ~1¢ per point.
                    Not as high-value as transferring, but simpler than dealing with multiple loyalty programs.</li>
                    <li><strong>Statement Credits / Gift Cards / Shopping:</strong>
                    Usually ~0.6–0.8¢ per point, less ideal,
                    but a fallback if you need quick redemption outside travel.
                    Alternatively, you can do “Plan It” or “Checkout with Points” on certain portals,
                    but that’s rarely the best value.</li>
                </ol>
                <p>
                    For maximum yield, consider airline/hotel transfers.
                    Earning 4x on groceries plus a 2¢ redemption means ~8% value back,
                    though the actual redemption will require some award availability knowledge.
                    If you prefer straightforward “book & go,” the portal is an option,
                    albeit at a slightly lower effective rate.
                </p>
            </section>

           {/* Section 6: Dining & Uber Credits */}
            <section id="section-6" className={styles.reviewSection}>
                <h2>Dining & Uber Credits – Offsetting the Fee</h2>
                <p>
                    The <strong>Gold Card</strong> provides:
                </p>
                <ul className={styles.featureList}>
                    <li><strong>$10/month Dining Credit (Total $120/year):</strong>
                    Use at select partners (e.g., Grubhub, The Cheesecake Factory, Goldbelly, some local restaurants, etc.).
                    Must enroll and use the card at checkout.
                    If you order takeout or dine at these merchants monthly,
                    it’s straightforward to recoup $120 annually.</li>
                    <li><strong>$10/month Uber Cash (U.S.):</strong>
                    For rides or Uber Eats. Another $120/year if fully used.
                    Stacks nicely with the 4x dining on Uber Eats, if that codes as dining.
                    You must add the card to your Uber wallet, and credit is doled out monthly.</li>
                </ul>
                <p>
                    In total, that’s up to $240 in potential credits.
                    If you can fully utilize them each month,
                    you effectively reduce your net fee to $10.
                    If your spending pattern doesn’t align with these merchants,
                    part of the credit might go unused.
                    Weigh carefully whether you’ll consistently redeem them.
                </p>
            </section>

             {/* Section 7: Annual Fee & Overall Costs */}
             <section id="section-7" className={styles.reviewSection}>
                <h2 dangerouslySetInnerHTML={{ __html: "Annual Fee &amp; Overall Costs"}}></h2>
                <p>
                    The annual fee is <strong>$250</strong> (not waived the first year).
                    The <strong>APR</strong> for the Gold Card typically ranges from <strong>20.24%–27.24% Variable</strong>,
                    though many treat Amex charge cards as “pay in full” to avoid interest.
                    Amex also offers “Pay Over Time” features for big purchases if needed.
                    If you revolve a balance, the interest can overshadow your dining/grocery rewards quickly,
                    so always best to pay in full.
                    There’s <strong>no foreign transaction fee</strong>,
                    so you can dine or shop abroad with 4x or 1x without penalty.
                </p>
                <p>
                    The real question is whether your typical grocery/dining spend plus the monthly credits offset $250.
                    For most moderate-to-heavy spenders on food, it’s easily done.
                    If you rarely dine out or can’t use the credits,
                    consider a lower-fee or no-fee alternative that might yield simpler returns.
                </p>
            </section>

            {/* Section 8: 2025 Updates & Potential Changes */}
            <section id="section-8" className={styles.reviewSection}>
                <h2 dangerouslySetInnerHTML={{ __html: "2025 Updates &amp; Potential Changes"}}></h2>
                <ol className={styles.numberedList}>
                    <li><strong>Possible New Dining Partners:</strong>
                    Amex occasionally rotates or adds dining credit partners. Keep an eye on official announcements for expansions or replacements (maybe DoorDash or other local platforms in 2025).</li>
                    <li><strong>Additional Streaming Credits?</strong>
                    Some rumor that Amex might add streaming or smartphone credits. No confirmation yet, but they’ve tested new credits before (like in pandemic times).</li>
                    <li><strong>Transfer Partner Bonuses:</strong>
                    Expect cyclical promotions (e.g., 30% bonus to British Airways, etc.). 2025 might see new or removed partners.
                    Check the Amex partner list regularly.</li>
                    <li dangerouslySetInnerHTML={{ __html: "<strong>Permanent “Plan It” Offers:</strong> Amex might further refine their BNPL approach for Gold or add new ways to redeem points at improved rates. Always confirm T&amp;Cs."}}></li>
                </ol>
                <p dangerouslySetInnerHTML={{ __html: "Official T&amp;Cs from American Express are the best place to verify any new features or changes to the Gold Card each year."}}></p>
            </section>

             {/* Section 9: Real-Life Example Table */}
             <section id="section-9" className={styles.reviewSection}>
                <h2>Real-Life Example: Annual Spend</h2>
                <p>
                    Consider you spend $8,000 a year at U.S. supermarkets (within the $25k 4x limit),
                    $4,000 on dining (restaurants/takeout), $2,000 on flights booked directly with airlines,
                    and $6,000 on other purchases:
                </p>
                <div className={styles.tableContainer}>
                    <table className={styles.statsTable}>
                        <thead>
                            <tr>
                                <th>Category</th>
                                <th>Annual Spend</th>
                                <th>Points per $</th>
                                <th>Points Earned</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td data-label="Category">U.S. Supermarkets</td>
                                <td data-label="Annual Spend">$8,000</td>
                                <td data-label="Points per $">4x</td>
                                <td data-label="Points Earned">32,000</td>
                            </tr>
                            <tr>
                                <td data-label="Category">Dining</td>
                                <td data-label="Annual Spend">$4,000</td>
                                <td data-label="Points per $">4x</td>
                                <td data-label="Points Earned">16,000</td>
                            </tr>
                            <tr>
                                <td data-label="Category">Flights (Direct/Amex Travel)</td>
                                <td data-label="Annual Spend">$2,000</td>
                                <td data-label="Points per $">3x</td>
                                <td data-label="Points Earned">6,000</td>
                            </tr>
                            <tr>
                                <td data-label="Category">Other Purchases</td>
                                <td data-label="Annual Spend">$6,000</td>
                                <td data-label="Points per $">1x</td>
                                <td data-label="Points Earned">6,000</td>
                            </tr>
                            <tr style={{fontWeight: 'bold', borderTop: '2px solid #dee2e6'}}>
                                <th data-label="Category">Total</th>
                                <th data-label="Annual Spend">$20,000</th>
                                <th data-label="Points per $">—</th>
                                <th data-label="Points Earned">60,000</th>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p dangerouslySetInnerHTML={{ __html: "That’s <strong>60k MR points</strong> from normal spending alone. Add a sign-up bonus (say 60k for $4k in 6 months), and you’re near 120k total in year one. If you combine that with monthly dining ($10) + Uber credits ($10) for $240 in potential annual value, it’s easy to outpace the $250 fee—especially if you redeem your points via high-value airline partners or 1 cent each in the Amex Travel portal (though typically you’d aim for 1.5¢–2¢ via transfers)."}}></p>
            </section>

            {/* Section 10: Competitor Analysis */}
            <section id="section-10" className={styles.reviewSection}>
                <h2>Competitor Analysis</h2>
                <p>
                    How does the <strong>Amex Gold</strong> stack up against other mid/high-tier food/travel cards?
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
                            <tr>
                                <td data-label="Card">Amex® Gold</td>
                                <td data-label="Annual Fee">$250</td>
                                <td data-label="Rewards" dangerouslySetInnerHTML={{ __html:"4x dining &amp; groceries (U.S.), 3x flights, $120 dining + $120 Uber credits"}}></td>
                                <td data-label="Key Advantage">Fantastic for everyday food spend, strong MR ecosystem</td>
                            </tr>
                            <tr>
                                <td data-label="Card">Capital One Savor®</td>
                                <td data-label="Annual Fee">$95</td>
                                <td data-label="Rewards" dangerouslySetInnerHTML={{ __html:"4% dining &amp; entertainment, 3% groceries"}}></td>
                                <td data-label="Key Advantage">Straight cash back, simpler but no big travel ecosystem or lounge perks</td>
                            </tr>
                            <tr>
                                <td data-label="Card">Chase Sapphire Preferred®</td>
                                <td data-label="Annual Fee">$95</td>
                                <td data-label="Rewards">3x dining, 2x travel, 1.25¢ in portal, good travel coverage</td>
                                <td data-label="Key Advantage">Flexible UR points for multiple travel partners, robust insurance</td>
                            </tr>
                            <tr>
                                <td data-label="Card">Amex Green</td>
                                <td data-label="Annual Fee">$150</td>
                                <td data-label="Rewards" dangerouslySetInnerHTML={{ __html:"3x travel &amp; transit, 3x dining, $100 CLEAR® credit, $100 LoungeBuddy credit"}}></td>
                                <td data-label="Key Advantage">Cheaper than Gold, but less grocery focus, smaller credits</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p>
                    <strong>Amex Gold</strong> stands out for heavy <strong>food</strong> spending plus the dual monthly credits.
                    If you want a bigger emphasis on travel coverage or simpler cash back,
                    other cards might compete.
                    But for groceries/dining synergy, it’s tough to beat 4x plus $240 in potential annual credits.
                </p>
            </section>

            {/* Section 11: Synergy with Other Amex Cards */}
            <section id="section-11" className={styles.reviewSection}>
                <h2>Synergy with Other Amex Cards</h2>
                <p>
                    Many pair the <strong>Gold</strong> with the <strong>Platinum</strong> or <strong>Blue Cash Everyday</strong> for different reasons.
                    If you get the <strong>Platinum</strong> for lounge access and travel perks,
                    you could keep the Gold for everyday dining/groceries,
                    racking up massive MR points across categories.
                    Another synergy is <strong>Amex Green</strong> + <strong>Gold</strong>,
                    but that may overlap on dining.
                    More commonly, folks do <strong>Gold</strong> for groceries/dining plus <strong>Platinum</strong> for flights,
                    lounge perks, airline credits, etc.,
                    fueling a big Membership Rewards ecosystem.
                </p>
                <p>
                    Also note: if you hold Amex co-branded cards (Delta or Hilton),
                    you don’t directly pool those points with MR.
                    The <strong>Gold</strong> is specifically for Membership Rewards, so synergy is mostly with other MR-earning Amex.
                    You can quickly accelerate your points if you have multiple sweet-spot categories covered by different Amex cards.
                </p>
            </section>

            {/* Section 12: Travel Coverage & Protections */}
            <section id="section-12" className={styles.reviewSection}>
                <h2 dangerouslySetInnerHTML={{ __html: "Travel Coverage &amp; Protections"}}></h2>
                <p>
                    The <strong>Gold</strong> card offers:
                </p>
                <ul className={styles.featureList}>
                    <li dangerouslySetInnerHTML={{ __html: "<strong>Baggage Insurance Plan:</strong> Coverage for lost, stolen, or damaged luggage (limitations apply, see T&amp;Cs)."}}></li>
                    <li dangerouslySetInnerHTML={{ __html: "<strong>Car Rental Loss &amp; Damage Insurance:</strong> Typically secondary coverage, covers damage or theft (some exclusions). Consider your personal insurance or a premium card for primary coverage if you want more robust protection."}}></li>
                    <li dangerouslySetInnerHTML={{ __html: "<strong>Purchase &amp; Return Protection:</strong> For eligible new items within a certain window if damaged/stolen or if the retailer won’t accept returns."}}></li>
                    <li><strong>Extended Warranty:</strong>
                    Extends the manufacturer’s warranty on eligible purchases (some limitations on cost/duration).
                    </li>
                </ul>
                <p>
                    While better than basic, it lacks the <strong>trip delay/cancellation</strong> coverage found on some competitor cards.
                    If you want deeper travel insurance, the Amex Platinum or certain other premium cards might serve you better.
                    But if your main spend is dining/groceries, the Gold’s coverage is likely sufficient for day-to-day.
                </p>
            </section>

            {/* Section 13: No Foreign Transaction Fee & Global Use */}
            <section id="section-13" className={styles.reviewSection}>
                <h2 dangerouslySetInnerHTML={{ __html: "No Foreign Transaction Fee &amp; Acceptance Abroad"}}></h2>
                <p>
                    <strong>No FTF</strong> ensures you can dine or shop abroad without incurring extra 2–3% fees.
                    Acceptance for Amex internationally has improved,
                    but remains slightly behind Visa/Mastercard in some regions.
                    Still, major tourist areas often accept Amex, especially in 2025.
                    If traveling in more remote places,
                    carrying a backup Visa or Mastercard might help.
                    But for many global destinations, Gold can be used effectively,
                    continuing your 4x on dining if coded as restaurants abroad.
                </p>
            </section>

           {/* Section 14: Potential Downsides */}
           <section id="section-14" className={styles.reviewSection}>
                <h2>Potential Downsides</h2>
                <ul className={styles.featureList}>
                    <li><strong>$250 Annual Fee (No Waiver Usually):</strong>
                    Justifiable with enough dining/grocery spend & credit usage, but high if you can’t maximize them.</li>
                    <li><strong>Monthly Credits Restriction:</strong>
                    The $10 dining and $10 Uber credits are monthly use-it-or-lose-it.
                    If you forget or can’t use them, that’s lost value.</li>
                    <li><strong>Limited Travel Insurance:</strong>
                    Lacks trip delay/cancellation coverage.
                    Also, car rental coverage is typically secondary, not primary.</li>
                    <li><strong>U.S. Groceries Only:</strong>
                    The 4x category is limited to U.S. supermarkets, not global grocery stores or big-box retailers like Walmart/Target.</li>
                    <li><strong>Amex Acceptance Abroad:</strong>
                    Some smaller merchants may not take Amex,
                    though it’s better than in past years.</li>
                </ul>
            </section>

            {/* Section 15: Advanced Tips & Strategies */}
            <section id="section-15" className={styles.reviewSection}>
                <h2 dangerouslySetInnerHTML={{ __html: "Advanced Tips &amp; Strategies"}}></h2>
                <ol className={styles.numberedList}>
                    <li dangerouslySetInnerHTML={{ __html: "<strong>Max the Dining &amp; Uber Credits:</strong> Set reminders to order from the specified dining partners monthly or use Uber for a quick ride. That’s $240/year if you do it religiously."}}></li>
                    <li><strong>Focus on U.S. Groceries:</strong>
                    Up to $25k/year at 4x. If you have a big family or host frequent gatherings,
                    you can accumulate thousands of extra points.
                    But watch out for superstores or warehouse clubs that may not code as groceries.</li>
                    <li><strong>Combine with Amex Platinum or Green:</strong>
                    Use the Gold for restaurants/groceries, Platinum for flights/hotels and lounge perks.
                    All points funnel into one MR account, accelerating your redemption goals.</li>
                    <li><strong>Transfer Partnerships for Premium Travel:</strong>
                    4x can become 8%+ returns if you find sweet spots with ANA for Asia business class or Delta for domestic routes.
                    Investigate periodic transfer bonuses for even bigger conversions.</li>
                    <li><strong>Leverage the 4x with Online Grocery Orders:</strong>
                    Many online grocery delivery services code as U.S. supermarket (not always, so confirm your merchant code).
                    If it does, you get 4x plus the convenience of delivery.</li>
                </ol>
            </section>

             {/* Section 16: Another Real-Life Scenario */}
             <section id="section-16" className={styles.reviewSection}>
                <h2>Another Example: Usage + Value Calculation</h2>
                <p>
                    Suppose you spend $10,000 yearly on U.S. groceries, $5,000 on dining, $1,000 flights, and $4,000 everything else.
                    That yields:
                </p>
                <ul className={styles.featureList}>
                    <li>Groceries: 10k * 4 = 40k points</li>
                    <li>Dining: 5k * 4 = 20k points</li>
                    <li>Flights: 1k * 3 = 3k points</li>
                    <li>Other: 4k * 1 = 4k points</li>
                    <li>Total from spend: <strong>67k points</strong></li>
                </ul>
                <p>
                    Add a sign-up bonus (say 60k) = 127k points in the first year.
                    If you redeem at ~1.8–2¢ per point with airline transfers,
                    that’s $2,286–$2,540 in value.
                    Meanwhile, you could gather $240 from monthly dining/Uber credits if fully utilized.
                    Subtract the $250 fee and you’re still far ahead,
                    making the Gold Card extremely profitable for a high spender in these categories.
                </p>
            </section>

            {/* Section 17: Pairing with Amex Platinum? */}
            <section id="section-17" className={styles.reviewSection}>
                <h2>Pairing with Amex Platinum?</h2>
                <p>
                    Many travelers hold <strong>Amex Platinum</strong> for lounge access and additional travel credits (airline incidental,
                    CLEAR® credit, etc.) but use the <strong>Gold</strong> for everyday dining/grocery to rack up 4x.
                    All points funnel into the same MR account,
                    letting you build a large stash of points quickly.
                    The combined annual fees can be steep (~$250 + $695 = $945),
                    but if you frequently travel, lounge hop, and dine out,
                    you might offset that via massive point earnings,
                    statement credits, and premium perks.
                </p>
                <p>
                    Alternatively, if you want a simpler approach,
                    you can keep just the Gold as your main card for daily spend.
                    Some also add the <strong>Blue Cash Preferred</strong> for groceries if they prefer cash back,
                    but that doesn’t feed into MR.
                    So synergy with another MR card is typically recommended if you want maximum coverage across categories.
                </p>
            </section>

            {/* Section 18: Competitor & Alternative Cards */}
            <section id="section-18" className={styles.reviewSection}>
                <h2 dangerouslySetInnerHTML={{ __html: "Competitor &amp; Alternative Cards"}}></h2>
                <ul className={styles.featureList}>
                    <li dangerouslySetInnerHTML={{ __html: "<strong>Capital One Savor® ($95):</strong> Earn 4% on dining/entertainment, 3% groceries, 1% else, purely cash back. Cheaper fee, simpler but no major travel partners or lounge perks."}}></li>
                    <li><strong>Chase Sapphire Preferred® ($95):</strong>
                    3x dining, 2x travel, robust trip coverage, flexible UR points.
                    Great if you want a cheaper general travel card with strong insurance.
                    But only 1x on groceries.</li>
                    <li><strong>Citi Premier® ($95):</strong>
                    3x groceries, 3x dining, 3x gas, 3x travel.
                    Cheaper fee, simpler coverage.
                    But no monthly credits, fewer premium perks, and some airline partners not as broad as Amex or Chase.</li>
                    <li dangerouslySetInnerHTML={{ __html: "<strong>Amex Green® ($150):</strong> 3x travel, 3x dining, $100 CLEAR® credit, $100 LoungeBuddy. Lower fee, but no groceries emphasis or monthly credits."}}></li>
                </ul>
                <p>
                    The <strong>Gold</strong> stands out if you’re a big <strong>food spender</strong> who can harness the monthly credits.
                    If you prefer bigger travel coverage or lounge access,
                    or just want a cheaper card with decent categories,
                    alternatives might be better.
                    But for heavy dining/grocery plus the possibility of huge redemption via MR,
                    Gold remains near the top in 2025.
                </p>
            </section>

            {/* Section 19: Who Should Get the Amex Gold Card? */}
            <section id="section-19" className={styles.reviewSection}>
                <h2>Who Should Get the American Express® Gold Card?</h2>
                <div className={styles.prosCons}>
                    <div className={styles.pros}>
                        <h3>Yes, If You:</h3>
                        <ul className={styles.featureList}>
                           <li dangerouslySetInnerHTML={{ __html:"<strong>Spend significantly on dining &amp; groceries</strong> in the U.S."}}></li>
                           <li dangerouslySetInnerHTML={{ __html:"Can <strong>maximize monthly credits</strong> for $10 dining + $10 Uber"}}></li>
                           <li>Prefer <strong>Membership Rewards®</strong> (esp. airline transfers for premium travel)</li>
                           <li>Want a <strong>mid-to-high tier card</strong> without jumping to $695 Platinum</li>
                           <li>Pay <strong>in full</strong> to avoid interest overshadowing your 4x earnings</li>
                        </ul>
                    </div>
                    <div className={styles.cons}>
                        <h3>No, If You:</h3>
                        <ul className={styles.featureList}>
                           <li>Do <strong>not spend much on dining or groceries</strong> (the main 4x categories)</li>
                           <li dangerouslySetInnerHTML={{ __html:"Won’t fully use the <strong>$10 monthly dining &amp; $10 Uber credits</strong>"}}></li>
                           <li>Desire <strong>comprehensive travel insurance</strong> or lounge access (Amex Platinum might suit better)</li>
                           <li>Need a <strong>low/no annual fee</strong> approach or prefer simpler cash back</li>
                           <li>Rarely <strong>value airline/hotel transfer partners</strong> or advanced reward strategies</li>
                        </ul>
                    </div>
                </div>
            </section>

           {/* Section 20: Bottom Line & Disclaimer */}
           <section id="section-20" className={styles.reviewSection}>
                <h2 dangerouslySetInnerHTML={{ __html:"Bottom Line &amp; Disclaimers"}}></h2>
                <p>
                    The <strong>American Express® Gold Card</strong> remains a top pick for 2025,
                    thanks to its unmatched <strong>4x</strong> in dining/groceries, monthly statement credits,
                    and <strong>Membership Rewards</strong> flexibility.
                    If you dine out or fill your grocery cart often,
                    you can quickly offset the $250 fee—especially when you add in the $240/year across
                    <span dangerouslySetInnerHTML={{ __html:" the dining &amp; Uber credits."}}></span>
                    While it lacks robust travel insurance or lounge perks,
                    it’s still an excellent middle ground if you want advanced points earning
                    without the heftier $695 Platinum fee.
                    Overall, for the food-focused traveler or family,
                    it’s one of the best ways to accelerate your path to free flights,
                    especially if you optimize partner transfers.
                </p>
                <p>
                    <strong>Disclaimer:</strong> Terms, interest rates, sign-up bonuses,
                    <span dangerouslySetInnerHTML={{ __html:" and redemption approaches can change. Always verify details with American Express. We may earn affiliate commissions from certain links, but editorial opinions remain our own. Valuations (like 2¢ per point) are approximate and depend on route/availability. If you carry a balance, interest can overshadow your 4x gains. Refer to official Amex documentation for up-to-date T&amp;Cs."}}></span>
                </p>
            </section>

            {/* E-A-T Section */}
             <section id="eat-expertise-authority-trustworthiness" className={`${styles.reviewSection} ${styles.eatSection}`}>
                <h2 dangerouslySetInnerHTML={{ __html: "Our Commitment to E-A-T: Expertise, Authority &amp; Trustworthiness"}}></h2>
                <p>
                    At <strong>TravelCardInsider</strong>, we prioritize:
                </p>
                <h3>1. Expertise</h3>
                 {/* Styling list items directly */}
                <ul className={styles.featureList}>
                    <li><strong>Real-World Testing:</strong>
                    Our team actively uses the Amex Gold for dining/groceries,
                    verifying 4x categories and monthly credit usage,
                    providing firsthand insight into statement postings.</li>
                    <li><strong>Regular Monitoring:</strong>
                    We track changes to dining credit partners, redemption rates,
                    and transfer partner expansions, ensuring each year’s coverage is updated.</li>
                    <li><strong>Advanced Redemption Knowledge:</strong>
                    We experiment with airline/hotel transfers to confirm sweet spots,
                    guiding readers to potentially 2¢+ per point redemptions.</li>
                </ul>
                <h3>2. Authority</h3>
                <ul className={styles.featureList}>
                    <li><strong>Comprehensive Analysis:</strong>
                    Our ~2,000-word coverage dives beyond basics,
                    tackling synergy with other Amex cards, competitor comparisons,
                    and advanced usage tips.</li>
                    <li><strong>Industry Recognition:</strong>
                    We’re frequently cited in top finance/travel outlets for unbiased Amex coverage.
                    Our data-driven approach ensures readers get detailed, factual card reviews.</li>
                    <li><strong>Transparency:</strong>
                    If affiliate links are present, we disclose them,
                    preserving editorial independence regarding star ratings or final verdicts.</li>
                </ul>
                <h3>3. Trustworthiness</h3>
                <ul className={styles.featureList}>
                    <li><strong>Independent Ratings:</strong>
                    We do not let advertisers influence our editorial stance or rating scores.</li>
                    <li><strong>Frequent Revisions:</strong>
                    If major changes occur (e.g., new 4x expansions, new monthly credits),
                    we swiftly update to maintain accuracy.</li>
                    <li dangerouslySetInnerHTML={{ __html:"<strong>User Engagement:</strong> We welcome feedback or redemption stories from real cardholders to cross-verify official T&amp;Cs and categories."}}></li>
                    <li > {/* Removed dangerouslySetInnerHTML as Link handles it */}
                        <strong>Privacy &amp; Security:</strong> We uphold data protection best practices,
                        as explained in our <Link href="/privacy-policy"><a>Privacy Policy</a></Link>.
                    </li>
                </ul>
                <p>
                    By following E-A-T, we aim to deliver a thorough, trustworthy evaluation
                    of the <strong>{reviewData.cardName}</strong> for 2025,
                    so you can decide if it’s your ultimate dining and grocery companion.
                </p>
            </section>

          </article>
        </div> {/* Close reviewContainer */}
      </main>

      <Footer />
    </>
  );
}

export default AmexGoldReviewPage;