// Example Path: pages/reviews/amex-gold.js
// Or: pages/reviews/[slug].js (if using dynamic routing)

// !!! WARNING: THIS FILE CONTAINS PLACEHOLDER DATA/URLs/DIMENSIONS !!!
// !!! YOU MUST REPLACE ALL PLACEHOLDERS MARKED WITH '***' BEFORE DEPLOYMENT !!!
// !!! VERIFY ALL CARD DETAILS, SCHEMA VALUES, COUNTS, and URLs AGAINST OFFICIAL ISSUER INFO !!!

import React, { useState, useEffect, useCallback, useRef } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/ReviewPage.module.css'; // Using the REVIEW CSS module
import Header from '../../components/Header'; // Assuming path: components/Header.js
import Footer from '../../components/Footer'; // Assuming path: components/Footer.js
import TableOfContents from '../../components/TableOfContents'; // Import the new ToC component

// --- Updated data object based on new content (Ambiguous spaces removed) ---
const reviewData = {
  cardName: 'American Express® Gold Card',
  // Updated Title based on new Section 1
  title: 'American Express® Gold Card: An In-Depth Review for Travel Enthusiasts',
  // Updated Description based on new Section 1
  description: 'Expert analysis of the Amex Gold Card for travel enthusiasts, focusing on 4X dining/groceries, 3X flights, credits, travel perks, and Membership Rewards® redemption to assess its value against the $325 fee.',
  // Updated Keywords based on new content
  keywords: 'American Express, Gold Card, travel rewards, dining rewards, Membership Rewards, statement credits, travel insurance, $325 annual fee',
  author: 'TravelCardInsider', // *** REPLACE with your actual author/site name ***
  imageUrl: '/NUS000000174_480x304_straight_withname.avif', // *** VERIFY PATH in /public ***
  ratingValue: 8.8, // From Amex Gold HTML (KEEPING ORIGINAL AS REQUESTED)
  applyLink: 'https://www.americanexpress.com/us/credit-cards/card/gold-card/', // *** REPLACE with actual Amex Gold APPLY URL ***
  ratesLink: 'https://www.americanexpress.com/us/credit-cards/card-application/apply/prospect/terms/gold-card/25330-10-0#FeeTable', // *** VERIFY URL ***
  // Image dimensions (MUST BE ACCURATE for next/image)
  imageWidth: 480, // *** REPLACE with actual image width ***
  imageHeight: 304, // *** REPLACE with actual image height ***
};

// --- Rating Tooltip Content (Ambiguous spaces removed) ---
// KEEPING ORIGINAL AS REQUESTED
const ratingCriteria = [ // *** VERIFY/CUSTOMIZE these criteria for Amex Gold Rating ***
    'Dining & Grocery Rewards (4x)',
    'Welcome Bonus Value',
    'Membership Rewards® Flexibility',
    'Annual Fee vs. Credits ($250 / $240)', // *** NOTE: Fee/Credits different in new text, but rating kept original ***
    'Travel Perks (3x Flights, No FTF)'
];


function AmexGoldReviewPage() {
  // --- Tooltip State and Logic (KEEPING ORIGINAL) ---
  const [showRatingInfo, setShowRatingInfo] = useState(false);
  const tooltipRef = useRef(null);

  const handleIconClick = useCallback((event) => {
        event.preventDefault();
        event.stopPropagation();
        setShowRatingInfo(prevState => !prevState); // Toggle state
    }, []);

  const closeTooltip = useCallback(() => {
        setShowRatingInfo(false);
    }, []);

  useEffect(() => {
        if (!showRatingInfo) return;
        const handleClickOutside = (event) => {
            const isInfoButton = event.target.closest(`.${styles.infoIconButton}`);
            // Check if the click is outside the tooltip AND not on the info button itself
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

  // *** CRITICAL: Verify the 'price' (annual fee) here matches the current offer ($325 according to text). The placeholder uses $250 based on previous context. UPDATE BEFORE DEPLOYMENT. ***
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "American Express® Gold Card", // Kept original name
    "image": `${siteUrl}${reviewData.imageUrl}`, // *** Assuming imageUrl starts with / and siteUrl is correct ***
    "description": reviewData.description, // Updated description
    "brand": {
      "@type": "Brand",
      "name": "American Express"
    },
    "review": {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": reviewData.ratingValue.toString(), // Kept original rating
        "bestRating": "10",
        "worstRating": "1"
      },
      "author": {
        "@type": "Organization",
        "name": reviewData.author // *** REPLACE with actual author/site name ***
      },
      "reviewBody": reviewData.description // Use meta description or a specific summary
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": reviewData.ratingValue.toString(), // Kept original rating
      "bestRating": "10",
      "worstRating": "1",
      "ratingCount": "580", // *** REPLACE with actual or estimated count (string) ***
      "reviewCount": "580"  // *** REPLACE with actual or estimated count (string) ***
    },
    "offers": {
      "@type": "Offer",
      "url": reviewData.applyLink.startsWith('http') ? reviewData.applyLink : `${siteUrl}${reviewData.applyLink}`, // *** Ensure full APPLY URL ***
      "priceCurrency": "USD",
       // *** VERIFY/UPDATE PRICE BASED ON CURRENT OFFER & TEXT ($325 mentioned in text) ***
      "price": "325", // Updated Annual Fee based on text content
      "availability": "https://schema.org/InStock",
      "itemCondition": "https://schema.org/NewCondition"
    }
  };

  // Define tocSections here
  const tocSections = [
    { id: 'section-2', title: 'Snapshot: Key Features and Current Welcome Offer' },
    { id: 'section-3', title: 'Unpacking the $325 Annual Fee: Is It Justified for Travelers?' },
    { id: 'section-4', title: 'Earning Power: Maximizing 4X Points on Global Dining' },
    { id: 'section-5', title: 'Earning Power: Stocking Up with 4X Points at U.S. Supermarkets' },
    { id: 'section-6', title: 'Travel Focus: Earning 3X Points on Flights (Direct & AmexTravel.com)' },
    { id: 'section-7', title: 'Travel Focus: Earning 2X Points via AmexTravel.com (Hotels, Packages, etc.)' },
    { id: 'section-8', title: 'The Foundation: Understanding Membership Rewards® Points Value' },
    { id: 'section-9', title: 'Travel Focus: Redeeming Points: Mastering Airline & Hotel Transfers (Key Partners)' },
    { id: 'section-10', title: 'Travel Focus: Redeeming Points: Booking Directly via Amex Travel' },
    { id: 'section-11', title: '$120 Dining Credit: Savoring Monthly Savings (Partners & Enrollment)' },
    { id: 'section-12', title: 'Travel Focus: $120 Uber Cash: Credits for Rides & Eats On-the-Go (US Focus)' },
    { id: 'section-13', title: '$100 Resy Credit: Elevating Your U.S. Dining Experiences' },
    { id: 'section-14', title: "$84 Dunkin' Credit: Fueling Your Mornings (US Focus)" },
    { id: 'section-15', title: 'Calculating the Value: How Credits Offset the Annual Fee' },
    { id: 'section-16', title: 'Travel Focus: The Hotel Collection Benefits ($100 Credit & Upgrades)' },
    { id: 'section-17', title: 'Travel Focus: Essential Travel Protections: Baggage & Car Rental Insurance (Secondary)' },
    { id: 'section-18', title: 'Travel Focus: Added Peace of Mind: Global Assist® Hotline & No Foreign Transaction Fees' },
    { id: 'section-19', title: 'Beyond Travel: Purchase Protection & Extended Warranty Deep Dive' },
    { id: 'section-20', title: 'Final Verdict: Is the Amex Gold Your Ideal Travel Companion?' },
    // Optional Sections (Uncomment to include):
    // { id: 'cta', title: 'Apply for the American Express® Gold Card' },
    // { id: 'eat-expertise-authority-trustworthiness', title: 'Our Commitment to E-A-T' },
  ];


  return (
    <>
      {/* ===== HEAD SECTION for Metadata & SEO ===== */}
      <Head>
        <title>{reviewData.title}</title>
        <meta name="description" content={reviewData.description} />
        <meta name="keywords" content={reviewData.keywords} />
        <meta name="author" content={reviewData.author} />
        <link rel="canonical" href={pageUrl} />

        {/* Preload critical fonts (Ensure paths are correct & consider WOFF2 format) */}
        <link rel="preload" href="/fonts/Roboto_Condensed-Regular.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/Roboto_Condensed-Bold.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/PlayfairDisplay-Regular.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/Playfair-Display-Bold.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
        {/* Add WOFF2 preloads if available, e.g.: */}
        {/* <link rel="preload" href="/fonts/Roboto_Condensed-Regular.woff2" as="font" type="font/woff2" crossOrigin="anonymous" /> */}


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

        {/* Favicons */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" /> {/* Ensure these files exist in /public */}

        {/* Structured Data (JSON-LD) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      <Header />

      <main>
        {/* New layout wrapper for main content and sidebar */}
        <div className={styles.reviewPageLayout}>
          {/* Sidebar area for the Table of Contents */}
          <aside className={styles.sidebarArea}>
            <TableOfContents sections={tocSections} />
          </aside>
          {/* Main content area that contains the review article */}
          <div className={styles.mainContentArea}>
            <div className={styles.reviewContainer}>
              <article> {/* Wrap main content in article */}
                {/* ============= REVIEW HEADER ============= */}
                <header className={styles.reviewHeader}>
                  {/* H1 uses new title from reviewData */}
                  <h1>{reviewData.title}</h1>

                  {/* Section 1 Content & Image Wrapper */}
                  {/* Added introAndImageWrapper div for CSS Module layout */}
                  <div className={styles.introAndImageWrapper}>
                    <div className={styles.intro}>
                      {/* === Section 1 Content === */}
                      <p>
                        The <strong>American Express® Gold Card</strong> holds a prominent position in the premium credit card sphere,
                        easily identified by its classic Gold or stylish Rose Gold metal design. It targets individuals whose spending habits heavily feature dining and travel,
                        offering a compelling mix of accelerated points earning in these key categories and various statement credits aimed at offsetting its annual fee.
                        Marketed as ideal for "Food Lovers" and equipped with benefits for both culinary and travel pursuits, the card appeals to those who frequently dine out,
                        order delivery, buy groceries (especially in the U.S.), and travel enough to leverage the versatile American Express Membership Rewards® program.
                        This review offers an expert analysis, concentrating on its travel-related features and assessing its value proposition for the modern traveler and diner,
                        using the most current data. We'll examine its earning potential, redemption avenues, travel protections, and credits to determine if the benefits justify the cost,
                        particularly considering its updated annual fee and the active management required to maximize its value.
                      </p>
                      {/* === END Section 1 Content === */}
                    </div>

                    {/* Image Container */}
                    <div className={styles.cardImageContainer}>
                      <Image
                        src={reviewData.imageUrl} // *** VERIFY PATH ***
                        alt={reviewData.cardName} // Alt text is crucial
                        width={reviewData.imageWidth} // *** REPLACE with actual image width ***
                        height={reviewData.imageHeight} // *** REPLACE with actual image height ***
                        className={styles.cardImage}
                        priority // Preload this important image
                      />
                    </div>
                  </div> {/* End introAndImageWrapper */}

                  {/* RATING SECTION */}
                  <div className={styles.ratingSection}>
                      <span className={styles.tciRating}>
                        <button
                          type="button"
                          className={styles.infoIconButton}
                          aria-label="Rating Information"
                          onClick={handleIconClick}
                        >
                          {/* SVG Icon for Information */}
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
                                aria-live="polite" // Announce changes politely
                              >
                                <strong>TCI Rating: {reviewData.ratingValue.toFixed(1)}/10</strong>
                                <p className={styles.tooltipIntro}>This rating is based on:</p>
                                <ul className={styles.tooltipList}>
                                    {ratingCriteria.map((criterion, index) => <li key={index}>{criterion}</li>)}
                                    {/* Using index as key is acceptable for static, non-reordering lists */}
                                </ul>
                              </div>
                          )}
                      </span>

                    {/* STAR RATING */}
                    <div className={styles.starRating} title={`Rated ${reviewData.ratingValue} out of 10 stars`}>
                      ★★★★★ {/* Background empty stars */}
                      <span className={styles.filledStars} style={{ '--rating': `${reviewData.ratingValue * 10}%` }}>
                        ★★★★★ {/* Foreground filled stars, width controlled by CSS variable */}
                      </span>
                    </div>

                    {/* Rating Description */}
                    <div className={styles.ratingDescription}>
                      <i>A top pick for foodies & travelers, excelling in dining/grocery rewards and offering valuable statement credits.</i>
                    </div>
                  </div> {/* End ratingSection */}
                </header>

                {/* ============= REVIEW CONTENT SECTIONS ============= */}

                {/* Section 2: Snapshot */}
                <section id="section-2" className={styles.reviewSection}>
                  <h2>Snapshot: Key Features and Current Welcome Offer</h2>
                  <p>Here’s a quick look at the Amex Gold Card's current core features:</p>
                  <ul className={styles.featureList}>
                    <li><strong>Annual Fee:</strong> $325.</li>
                    <li><strong>Welcome Offer:</strong> Earn 60,000 Membership Rewards® Points after spending $6,000 on eligible purchases within the first 6 months of Card Membership. (Offers can vary).</li>
                    <li><strong>Rewards Earning:</strong>
                      <ul>
                        <li>4X points at restaurants worldwide (up to $50k/year, then 1X).</li>
                        <li>4X points at U.S. supermarkets (up to $25k/year, then 1X).</li>
                        <li>3X points on flights (booked directly with airlines or AmexTravel.com).</li>
                        <li>2X points on other eligible prepaid travel via AmexTravel.com.</li>
                        <li>1X points on other eligible purchases.</li>
                      </ul>
                    </li>
                    <li><strong>Annual Statement Credits (Enrollment Required):</strong>
                      <ul>
                        <li>Up to $120 Dining Credit ($10/month at select partners).</li>
                        <li>Up to $120 Uber Cash ($10/month for U.S. rides/eats).</li>
                        <li>Up to $100 Resy Credit ($50 semi-annually at U.S. Resy partners).</li>
                        <li>Up to $84 Dunkin' Credit ($7/month at U.S. Dunkin').</li>
                      </ul>
                    </li>
                    <li><strong>Application Feature:</strong> "Apply with Confidence" allows checking for approval without impacting credit score before accepting.</li>
                  </ul>
                  <p>The welcome offer requires significant spending ($1,000/month average for 6 months), a factor for potential applicants to consider.</p>
                </section>

                {/* CTA Section */}
                <section id="cta" className={styles.ctaSection}>
                  <h2>Get the <b>American Express® Gold Card</b> Today!</h2>
                  <div className={styles.ctaButtons}>
                    {/* Ensure links are correct and sponsored rel attribute is appropriate */}
                    <a href={reviewData.applyLink} className={`${styles.btn} ${styles.btnApply}`} title="From card issuer's secure site" target="_blank" rel="noopener noreferrer sponsored">Apply Now</a>
                    <a href={reviewData.ratesLink} className={`${styles.btn} ${styles.btnRates}`} target="_blank" rel="noopener noreferrer sponsored">See Rates & Fees</a>
                  </div>
                  {/* Reminder about updating fee in structured data */}
                </section>

                {/* Section 3: Annual Fee */}
                <section id="section-3" className={styles.reviewSection}>
                  <h2>Unpacking the $325 Annual Fee: Is It Justified for Travelers?</h2>
                  <p>
                    The <strong>$325 annual fee</strong> is a central consideration. It's charged upon opening and annually thereafter, with a 30-day grace period for cancellation refunds.
                    Justification primarily rests on the potential <strong>$424 in annual statement credits</strong> ($120 Dining + $120 Uber + $100 Resy + $84 Dunkin').
                    While this exceeds the fee, realizing the full value requires active enrollment and spending with specific partners, many U.S.-based.
                    This contrasts with simpler cards and highlights the need for engagement.
                  </p>
                  <p>
                    For travelers, the <strong>No Foreign Transaction Fee</strong> is crucial, saving ~3% on international purchases.
                    Travel insurances and The Hotel Collection perks add further potential value. Compared to other Amex cards, it sits between the premium Platinum Card® ($695 fee, more travel perks) and the lower-tier Green Card ($150 fee, fewer benefits).
                  </p>
                  <p>
                    A key advantage is the ability to add up to five Additional Gold Cards for <strong>no extra annual fee</strong> (sixth+ card is $35 each).
                    This allows authorized users to help accumulate points and access some benefits, enhancing the value derived from the single primary fee.
                  </p>
                </section>

                {/* Section 4: 4X Dining */}
                <section id="section-4" className={styles.reviewSection}>
                  <h2>Earning Power: Maximizing 4X Points on Global Dining</h2>
                  <p>
                    A major appeal of the Amex Gold is earning <strong>4X Membership Rewards® points</strong> per dollar at <strong>restaurants worldwide</strong>.
                    This high rate applies broadly to cafes, bars, and restaurants globally, and includes U.S. takeout and delivery.
                    The "worldwide" aspect is vital for travelers, rewarding dining spending abroad at the same high rate, unlike some competitors.
                  </p>
                  <p>
                    This 4X rate is capped at <strong>$50,000</strong> in restaurant spending per calendar year, after which it drops to 1X.
                    However, this cap is very high (over $4,100/month) and unlikely to affect most users, making the 4X dining benefit effectively unlimited for typical spending patterns, both domestically and internationally.
                  </p>
                </section>

                {/* Section 5: 4X U.S. Supermarkets */}
                <section id="section-5" className={styles.reviewSection}>
                  <h2>Earning Power: Stocking Up with 4X Points at U.S. Supermarkets</h2>
                  <p>
                    The card also earns <strong>4X Membership Rewards® points</strong> per dollar at <strong>U.S. supermarkets</strong>, accelerating points on everyday spending.
                    However, this benefit has two important limitations. First, it applies only to supermarkets located within the U.S. International grocery purchases earn just 1X point.
                    Second, the 4X rate is capped at <strong>$25,000</strong> in spending per calendar year; subsequent U.S. supermarket spending earns 1X.
                    This cap ($2,083/month average) is more relevant for high grocery spenders than the dining cap. Note that superstores (Target, Walmart) and warehouse clubs (Costco) are typically excluded.
                  </p>
                </section>

                {/* Section 6: 3X Flights */}
                <section id="section-6" className={styles.reviewSection}>
                  <h2>Travel Focus: Earning 3X Points on Flights (Direct & AmexTravel.com)</h2>
                  <p>
                    For air travel, the Amex Gold provides <strong>3X Membership Rewards® points</strong> per dollar on flights.
                    This solid return applies only when flights are booked <strong>directly with the airline</strong> or through <strong>AmexTravel.com</strong>.
                    Bookings via third-party online travel agencies (OTAs) like Expedia generally earn only 1X point.
                    This encourages booking through specific channels, potentially requiring a shift in habits for those accustomed to using OTAs.
                    While competitive for a mid-tier card, it's less than the 5X offered by The Platinum Card®, positioning the Gold as strong but not top-tier for extremely high flight spenders.
                  </p>
                </section>

                {/* Section 7: 2X AmexTravel */}
                <section id="section-7" className={styles.reviewSection}>
                  <h2>Travel Focus: Earning 2X Points via AmexTravel.com (Hotels, Packages, etc.)</h2>
                  <p>
                    The card offers <strong>2X Membership Rewards® points</strong> on certain other travel purchases, but only for <strong>prepaid bookings made through AmexTravel.com</strong>.
                    This typically includes prepaid hotels, vacation packages, prepaid car rentals, and cruises booked via the portal.
                    Non-prepaid bookings or travel booked elsewhere usually earn just 1X point.
                  </p>
                  <p>
                    This 2X category is less compelling than the 4X/3X rates and narrower than some competitors' travel multipliers.
                    It strongly incentivizes using the Amex Travel portal, which integrates with The Hotel Collection benefit.
                    However, users must weigh the 2X points against potentially higher portal prices, the inflexibility of prepaid rates, and the common inability to earn hotel loyalty points or elite status credit on portal bookings – a significant factor for hotel loyalists.
                  </p>
                </section>

                {/* Section 8: MR Points Value */}
                <section id="section-8" className={styles.reviewSection}>
                  <h2>The Foundation: Understanding Membership Rewards® Points Value</h2>
                  <p>
                    Points earned are American Express Membership Rewards® (MR), a flexible currency whose value depends heavily on redemption.
                  </p>
                  <p>Typical redemption values:</p>
                  <ul className={styles.featureList}>
                    <li><strong>Statement Credits:</strong> ~0.6 cents per point (cpp) - Poor value.</li>
                    <li><strong>Pay with Points/Gift Cards:</strong> 0.7 - 1.0 cpp.</li>
                    <li><strong>Amex Travel Bookings:</strong>
                      <ul>
                        <li>Flights: 1.0 cpp.</li>
                        <li>Other Prepaid Travel (Hotels, Cars): 0.7 cpp - Poor value.</li>
                      </ul>
                    </li>
                    <li><strong>Airline/Hotel Partner Transfers:</strong> Potential for 2.0+ cpp, especially for premium international travel - Highest potential value.</li>
                  </ul>
                  <p>
                    The card's true power lies in strategic redemption, particularly via partner transfers. Earning 4X points yields an effective 8% return if redeemed at 2.0 cpp, versus only 2.4% if redeemed at 0.6 cpp.
                    This highlights the importance of redemption strategy alongside earning. The flexibility and high potential value require effort to maximize, making the card best for those willing to engage with the MR program's nuances.
                  </p>
                </section>

                {/* Section 9: Partner Transfers */}
                <section id="section-9" className={styles.reviewSection}>
                  <h2>Travel Focus: Redeeming Points: Mastering Airline & Hotel Transfers (Key Partners)</h2>
                  <p>
                    Transferring MR points to airline and hotel loyalty programs offers the highest potential value for travelers.
                    Amex partners with numerous programs across all major airline alliances and several hotel chains, providing global booking flexibility.
                  </p>
                  <h3>Key Airline Partners (Generally 1:1 Ratio, Instant Transfer unless noted):</h3>
                  <ul className={styles.featureList}>
                    <li><strong>Star Alliance:</strong> Air Canada Aeroplan, ANA Mileage Club (up to 48h), Avianca LifeMiles, Singapore Airlines KrisFlyer. (Allows booking United, etc.)</li>
                    <li><strong>Oneworld:</strong> British Airways Avios, Cathay Pacific Asia Miles, Iberia Plus, Qantas Frequent Flyer, Qatar Airways Privilege Club. (Allows booking American Airlines, etc.)</li>
                    <li><strong>SkyTeam:</strong> Aeromexico Rewards (1:1.6), Air France/KLM Flying Blue, Delta SkyMiles, Virgin Atlantic Flying Club.</li>
                    <li><strong>Non-Alliance:</strong> Emirates Skywards, Etihad Guest, Hawaiian Airlines HawaiianMiles, JetBlue TrueBlue (2.5:2).</li>
                  </ul>
                  <h3>Key Hotel Partners (Instant Transfer):</h3>
                  <ul className={styles.featureList}>
                    <li>Choice Privileges (1:1)</li>
                    <li>Hilton Honors (1:2) - Often lower value.</li>
                    <li>Marriott Bonvoy (1:1) - Often lower value.</li>
                  </ul>
                  <p>(Ratios/times subject to change. Minimums apply. Excise tax offset fee for U.S. airline transfers.)</p>
                  <p>
                    Highest values are typically found booking international premium cabin flights. Hotel transfers generally yield lower value.
                    Linking accounts via Amex is required. Confirm award availability before transferring, as transfers are irreversible.
                  </p>
                </section>

                {/* Section 10: Amex Travel Redemption */}
                <section id="section-10" className={styles.reviewSection}>
                  <h2>Travel Focus: Redeeming Points: Booking Directly via Amex Travel</h2>
                  <p>Booking travel directly through AmexTravel.com using points offers a simpler redemption path.</p>
                  <p>Redemption values via portal:</p>
                  <ul className={styles.featureList}>
                    <li><strong>Flights:</strong> 1.0 cent per point.</li>
                    <li><strong>Other Prepaid Travel (Hotels, Cars, Cruises):</strong> 0.7 cents per point (Poor value).</li>
                  </ul>
                  <p>
                    The process involves selecting travel, choosing "Pay with Points," having the card charged the full amount, and receiving a statement credit for the points' value within ~48 hours.
                    The main advantage is convenience – any available flight/prepaid hotel can be booked with points, bypassing award availability searches. The 1.0 cpp for flights provides a reasonable floor value.
                  </p>
                  <p>
                    The primary disadvantage is the lower potential value compared to partner transfers, especially the poor 0.7 cpp rate for non-flight travel.
                    This strongly discourages using points for hotels or cars via the portal. For personal Gold cardholders, the portal is best used for flights when transfer options are poor, and avoided for other travel types.
                  </p>
                </section>

                {/* Section 11: Dining Credit */}
                <section id="section-11" className={styles.reviewSection}>
                  <h2>$120 Dining Credit: Savoring Monthly Savings (Partners & Enrollment)</h2>
                  <p>
                    The Amex Gold offers a <strong>$120 annual Dining Credit</strong>, delivered as up to <strong>$10 in statement credits monthly</strong>. Enrollment is required.
                    The credit applies to purchases made with the enrolled card at these specific partners:
                  </p>
                  <ul className={styles.featureList}>
                    <li>Grubhub (incl. Seamless)</li>
                    <li>The Cheesecake Factory</li>
                    <li>Goldbelly</li>
                    <li>Wine.com</li>
                    <li>Five Guys</li>
                  </ul>
                  <p>
                    Value depends entirely on spending at these partners. Frequent users can extract the full $120. Those who don't use these services gain little value.
                    The credit is monthly and does not roll over ("use it or lose it"), requiring consistent small purchases to maximize.
                  </p>
                </section>

                {/* Section 12: Uber Cash */}
                <section id="section-12" className={styles.reviewSection}>
                  <h2>Travel Focus: $120 Uber Cash: Credits for Rides & Eats On-the-Go (US Focus)</h2>
                  <p>
                    Cardholders receive up to <strong>$120 annually in Uber Cash</strong>, provided as <strong>$10 deposited monthly</strong> into their linked Uber account.
                    This requires adding the Gold Card to the Uber wallet. The Uber Cash applies to <strong>U.S. Uber rides and Uber Eats orders only</strong>.
                    It expires at the end of each month if unused.
                  </p>
                  <p>
                    This credit is practical for U.S.-based Uber users, directly reducing costs. However, its U.S.-only restriction limits its value during international travel, a notable drawback for a travel-focused card.
                    The value appears in the Uber app, not as an Amex statement credit.
                  </p>
                </section>

                {/* Section 13: Resy Credit */}
                <section id="section-13" className={styles.reviewSection}>
                  <h2>$100 Resy Credit: Elevating Your U.S. Dining Experiences</h2>
                  <p>
                    The <strong>$100 annual Resy Credit</strong> is structured semi-annually: up to <strong>$50 back from Jan-Jun</strong>, and up to <strong>$50 back from Jul-Dec</strong>. Enrollment is required.
                    It applies to purchases made with the enrolled card at <strong>U.S. restaurants participating in Resy</strong> or for other eligible Resy purchases.
                    Resy is an Amex-owned reservation platform, often featuring popular/upscale U.S. restaurants.
                  </p>
                  <p>
                    Utility depends on dining at U.S. Resy partners, which are more prevalent in major cities. Maximizing requires qualifying spend in both six-month periods.
                    This credit provides value while driving engagement with Amex's Resy platform.
                  </p>
                </section>

              {/* Section 14: Dunkin Credit */}
              <section id="section-14" className={styles.reviewSection}>
                  <h2>$84 Dunkin' Credit: Fueling Your Mornings (US Focus)</h2>
                  <p>
                    The most niche credit is the <strong>$84 annual Dunkin' Credit</strong>, offering up to <strong>$7 in statement credits monthly</strong>. Enrollment is required.
                    It applies to purchases made with the enrolled card at <strong>U.S. Dunkin' locations</strong>.
                  </p>
                  <p>
                    This benefits regular U.S. Dunkin' customers. It's "use it or lose it" monthly. A common strategy is loading exactly $7 onto a Dunkin' account via their app each month to trigger the credit without needing a specific purchase.
                  </p>
                </section>

                {/* Section 15: Credits Summary Table */}
                <section id="section-15" className={styles.reviewSection}>
                  <h2>Calculating the Value: How Credits Offset the Annual Fee</h2>
                  <p>
                    The Amex Gold's credits potentially total <strong>$424 annually</strong> ($120 Dining + $120 Uber + $100 Resy + $84 Dunkin'), exceeding the $325 annual fee.
                  </p>
                  <h3>Amex Gold Annual Credits Summary</h3>
                  <div className={styles.tableContainer}>
                    <table className={styles.statsTable}>
                      <thead>
                        <tr>
                          <th>Credit Name</th>
                          <th>Structure</th>
                          <th>Max Annual Value</th>
                          <th>Key Partners / Usage Restrictions</th>
                          <th>Enrollment Required</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td data-label="Credit Name">Dining Credit</td>
                          <td data-label="Structure">Up to $10 / month</td>
                          <td data-label="Max Annual Value">$120</td>
                          <td data-label="Key Partners / Usage Restrictions">Grubhub, Cheesecake Factory, Goldbelly, Wine.com, Five Guys</td>
                          <td data-label="Enrollment Required">Yes</td>
                        </tr>
                        <tr>
                          <td data-label="Credit Name">Uber Cash</td>
                          <td data-label="Structure">$10 Uber Cash / month</td>
                          <td data-label="Max Annual Value">$120</td>
                          <td data-label="Key Partners / Usage Restrictions">Uber Rides & Uber Eats in U.S. only</td>
                          <td data-label="Enrollment Required">Yes (Link Card)</td>
                        </tr>
                        <tr>
                          <td data-label="Credit Name">Resy Credit</td>
                          <td data-label="Structure">Up to $50 / 6 months (Jan-Jun, Jul-Dec)</td>
                          <td data-label="Max Annual Value">$100</td>
                          <td data-label="Key Partners / Usage Restrictions">U.S. Resy Restaurants & eligible Resy purchases</td>
                          <td data-label="Enrollment Required">Yes</td>
                        </tr>
                        <tr>
                          <td data-label="Credit Name">Dunkin' Credit</td>
                          <td data-label="Structure">Up to $7 / month</td>
                          <td data-label="Max Annual Value">$84</td>
                          <td data-label="Key Partners / Usage Restrictions">U.S. Dunkin' locations</td>
                          <td data-label="Enrollment Required">Yes</td>
                        </tr>
                        {/* Added className here for styling the total row */}
                        <tr className={styles.totalRow}>
                          <td colSpan="2" data-label="Total">Total Potential</td>
                          <td data-label="Max Annual Value">$424</td>
                          <td colSpan="2"></td> {/* Empty cells for alignment */}
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p>
                    However, achieving this requires fully utilizing all credits, many with partner and U.S. restrictions.
                    Prospective cardmembers must realistically assess their spending. Do they naturally spend enough with these specific partners/services within the required timeframes and locations?
                    If not, the actual credit value received will be lower, placing more emphasis on points earning and other benefits to justify the fee.
                    The card favors users aligned with these specific services, particularly in urban U.S. areas.
                  </p>
                </section>

                {/* Section 16: Hotel Collection */}
                <section id="section-16" className={styles.reviewSection}>
                  <h2>Travel Focus: The Hotel Collection Benefits ($100 Credit & Upgrades)</h2>
                  <p>
                    The Amex Gold provides access to <strong>The Hotel Collection (THC)</strong>, offering perks at over 1,000 participating upscale hotels worldwide.
                    Booking a stay of <strong>two consecutive nights or more</strong> through American Express Travel using the Gold Card is required.
                  </p>
                  <p>Benefits include:</p>
                  <ul className={styles.featureList}>
                    <li><strong>$100 Experience Credit:</strong> For eligible on-property charges (dining, spa, etc.), applied at check-out.</li>
                    <li><strong>Room Upgrade:</strong> One-category upgrade at check-in, when available.</li>
                  </ul>
                  <p>Noon check-in/late check-out may also be offered, subject to availability.</p>
                  <p>
                    Conditions are strict: 2-night minimum, booking via Amex Travel. Benefits are per room, per stay (limit 3 rooms). Back-to-back stays don't qualify for extra benefits.
                    The $100 credit requires on-property spending. Booking via Amex Travel might mean higher rates or forfeiting hotel loyalty benefits.
                    THC offers introductory luxury perks, below the more comprehensive Fine Hotels + Resorts program available with Platinum/Centurion cards.
                  </p>
                </section>

                {/* Section 17: Travel Protections */}
                <section id="section-17" className={styles.reviewSection}>
                  <h2>Travel Focus: Essential Travel Protections: Baggage & Car Rental Insurance (Secondary)</h2>
                  <p>The Gold Card includes travel insurance protections when the trip is paid for with the card.</p>
                  <h3>Baggage Insurance Plan:</h3>
                  <p>Covers eligible lost, damaged, or stolen baggage during common carrier travel (plane, train, etc.). Limits per person per trip:</p>
                  <ul className={styles.featureList}>
                    <li><strong>Carry-on:</strong> Up to $1,250.</li>
                    <li><strong>Checked:</strong> Up to $500.</li>
                    <li><strong>High-Risk Items (jewelry, electronics, etc.):</strong> $250 sub-limit across all baggage.</li>
                  </ul>
                  <p>Coverage is <strong>secondary</strong> to the carrier's reimbursement. Claims must be filed first with the carrier. Exclusions apply (cash, normal wear). Limits may be insufficient for high-value items.</p>

                  <h3>Car Rental Loss and Damage Insurance:</h3>
                  <p>Covers damage/theft of a rental car. Requires paying for the entire rental with the Gold Card and declining the rental company's CDW/LDW. Key details:</p>
                  <ul className={styles.featureList}>
                    <li><strong>Limit:</strong> Up to $50,000 per rental.</li>
                    <li><strong>Type: Secondary.</strong> File first with personal auto insurance; Amex covers the deductible/uncovered costs. This is a major drawback vs. primary coverage on some competitor cards.</li>
                    <li><strong>Duration:</strong> Up to 30 consecutive days.</li>
                    <li><strong>Exclusions:</strong> Rentals in Australia, Italy, New Zealand; certain vehicle types (large vans, trucks, antique/exotic cars, RVs); liability for damage/injury to others is not covered.</li>
                  </ul>
                  <p>While providing a safety net, the secondary nature of the car rental insurance is a significant limitation. Amex offers optional paid primary coverage.</p>
                </section>

                {/* Section 18: Global Assist & No FTF */}
                <section id="section-18" className={styles.reviewSection}>
                  <h2>Travel Focus: Added Peace of Mind: Global Assist® Hotline & No Foreign Transaction Fees</h2>
                  <p>Two additional travel-focused benefits enhance the Gold Card's appeal.</p>
                  <h3>Global Assist® Hotline:</h3>
                  <p>Provides 24/7 coordination and referral services when traveling over 100 miles from home. Services include:</p>
                  <ul className={styles.featureList}>
                    <li>Medical referrals (doctors, hospitals), monitoring, emergency transport coordination.</li>
                    <li>Legal referrals (lawyers, bail bonds).</li>
                    <li>Financial assistance coordination (emergency cash, hotel check-in help).</li>
                    <li>Travel assistance (lost passport/luggage help, urgent message relay, translation coordination).</li>
                    <li>Pre-trip info (customs, visas, weather).</li>
                  </ul>
                  <p>Crucially, Global Assist® provides <strong>coordination, not payment</strong>. The cardmember is responsible for all third-party costs (doctors, lawyers, etc.). Its value lies in having 24/7 expert help during emergencies abroad.</p>

                  <h3>No Foreign Transaction Fees:</h3>
                  <p>The card charges <strong>no fees</strong> on purchases made outside the U.S. This saves ~3% compared to many cards, a vital benefit for international travelers that complements the global dining rewards.</p>
                </section>

                {/* Section 19: Purchase Protection & Ext Warranty */}
                <section id="section-19" className={styles.reviewSection}>
                  <h2>Beyond Travel: Purchase Protection & Extended Warranty Deep Dive</h2>
                  <p>The Gold Card also protects everyday purchases.</p>
                  <h3>Purchase Protection:</h3>
                  <p>Covers eligible items bought with the card against accidental damage, theft, or loss for <strong>90 days</strong> from purchase. No enrollment needed.</p>
                  <ul className={styles.featureList}>
                    <li><strong>Limits:</strong> Up to <strong>$10,000 per item / occurrence</strong>.</li>
                    <li>Up to <strong>$50,000 per account</strong> per calendar year.</li>
                  </ul>
                  <p>This $10k item limit is robust, offering significant protection for valuable goods. Exclusions apply (animals, consumables, motorized vehicles, items not reasonably safeguarded). Claims require prompt notification (within 30 days) and proof (receipt, police report).</p>

                  <h3>Extended Warranty:</h3>
                  <p>Automatically extends the original U.S. manufacturer's warranty.</p>
                  <ul className={styles.featureList}>
                    <li><strong>Extension:</strong> Adds up to <strong>one additional year</strong>.</li>
                    <li><strong>Eligible Warranties:</strong> Original manufacturer's warranties of <strong>5 years or less</strong>.</li>
                    <li><strong>Coverage Limits:</strong> Up to <strong>$10,000 per item</strong>, $50,000 per account per year.</li>
                  </ul>
                  <p>This benefit adds significant value, especially for electronics/appliances. Exclusions include consumables, vehicles, commercial use items. Claims require documentation (receipt, warranty). Both protections require good record-keeping but offer substantial peace of mind and potential savings.</p>
                </section>

              {/* Section 20: Final Verdict */}
              <section id="section-20" className={styles.reviewSection}>
                  <h2>Final Verdict: Is the Amex Gold Your Ideal Travel Companion?</h2>
                  <p>
                    The <strong>American Express® Gold Card</strong> remains a strong contender, particularly for those whose spending aligns with its strengths: superb <strong>4X points on global dining</strong> and <strong>U.S. supermarkets</strong>, solid <strong>3X on direct/Amex Travel flights</strong>, access to the valuable <strong>Membership Rewards® program</strong>, and <strong>No Foreign Transaction Fees</strong>. The potential <strong>$424 in annual credits</strong> can more than offset the <strong>$325 annual fee</strong>, and travel/purchase protections add security.
                  </p>
                  <p>
                    However, maximizing value requires active use of the specific, often U.S.-centric, credits. The complimentary Car Rental Insurance is <strong>secondary</strong>, a notable drawback versus primary coverage from competitors like Chase Sapphire Preferred®. Achieving top value from MR points necessitates engaging with airline/hotel transfer partners, which involves complexity.
                  </p>
                  <h3>Who is it best for?</h3>
                  <p>U.S.-based individuals/families who:</p>
                  <ul className={styles.featureList}>
                    <li>Spend heavily on restaurants (globally) and U.S. groceries.</li>
                    <li>Regularly use Grubhub, Uber (U.S.), Resy (U.S.), and/or Dunkin' (U.S.) to maximize credits.</li>
                    <li>Travel often enough to benefit from 3X flight points, No FTF, THC perks, and insurances.</li>
                    <li>Are willing to learn and use MR transfer partners for high-value travel redemptions.</li>
                  </ul>

                  <h3>Consider alternatives if:</h3>
                  <ul className={styles.featureList}>
                    <li>You can't consistently use the specific credits.</li>
                    <li>You prefer simple cash back over points complexity.</li>
                    <li>You need primary car rental insurance (consider Chase Sapphire Preferred®, $95 fee).</li>
                    <li>You seek top-tier travel perks like extensive lounge access (consider The Platinum Card®, $695 fee).</li>
                    <li>You want solid travel/dining rewards with a lower fee (consider Amex Green Card, $150 fee).</li>
                  </ul>
                  <p>
                    <strong>In conclusion:</strong> The Amex Gold Card excels in rewarding everyday food spending while offering good travel benefits. Its value proposition is highly personalized, hinging on maximizing credits and strategically redeeming points. For users whose lifestyle fits this structure and who embrace the points strategy, it's a powerful and potentially very rewarding card.
                  </p>
                  <p>
                    {/* Standard Disclaimer */}
                    <strong>Disclaimer:</strong> Terms, interest rates, fees, welcome offers, credit partners, point values, and insurance benefits are subject to change at any time. Always verify current details directly with American Express before applying. Affiliate links may be present; editorial opinions are independent. Points valuations are estimates and vary based on redemption. Carrying a balance will incur interest charges that can outweigh rewards. Refer to official American Express documentation for the most up-to-date Terms & Conditions.
                  </p>
                </section>

                {/* E-A-T Section */}
                {/* *** Ensure you customize the E-A-T content for accuracy and relevance *** */}
                <section id="eat-expertise-authority-trustworthiness" className={`${styles.reviewSection} ${styles.eatSection}`}>
                    {/* Using dangerouslySetInnerHTML for the title as it includes HTML entities */}
                    <h2 dangerouslySetInnerHTML={{ __html: "Our Commitment to E-A-T: Expertise, Authority &amp; Trustworthiness"}}></h2>
                    <p>
                        At <strong>{reviewData.author}</strong>, we prioritize: {/* *** Ensure author name is correct *** */}
                    </p>
                    <h3>1. Expertise</h3>
                    <ul className={styles.featureList}>
                        <li><strong>Real-World Testing:</strong> Our team actively uses the Amex Gold for dining/groceries, verifying 4x categories and monthly credit usage, providing firsthand insight into statement postings.</li>
                        <li><strong>Regular Monitoring:</strong> We track changes to dining credit partners, redemption rates, and transfer partner expansions, ensuring each year’s coverage is updated.</li>
                        <li><strong>Advanced Redemption Knowledge:</strong> We experiment with airline/hotel transfers to confirm sweet spots, guiding readers to potentially 2¢+ per point redemptions.</li>
                    </ul>
                    <h3>2. Authority</h3>
                    <ul className={styles.featureList}>
                        <li><strong>Comprehensive Analysis:</strong> Our detailed coverage dives beyond basics, tackling synergy with other Amex cards, competitor comparisons, and advanced usage tips.</li>
                        <li><strong>Industry Recognition:</strong> We’re frequently cited in top finance/travel outlets for unbiased Amex coverage. {/* *** Customize this claim *** */} Our data-driven approach ensures readers get detailed, factual card reviews.</li>
                        <li><strong>Transparency:</strong> If affiliate links are present, we disclose them, preserving editorial independence regarding star ratings or final verdicts.</li>
                    </ul>
                    <h3>3. Trustworthiness</h3>
                    <ul className={styles.featureList}>
                        <li><strong>Independent Ratings:</strong> We do not let advertisers influence our editorial stance or rating scores.</li>
                        <li><strong>Frequent Revisions:</strong> If major changes occur (e.g., new fee structures, credit changes), we swiftly update to maintain accuracy.</li>
                        <li><strong>User Engagement:</strong> We welcome feedback or redemption stories from real cardholders to cross-verify official T&amp;Cs and categories.</li>
                        <li>
                          <strong>Privacy &amp; Security:</strong> We uphold data protection best practices, as explained in our{' '}
                          <Link href="/privacy-policy">
                            <a>Privacy Policy</a>{/* Ensure /privacy-policy route exists */}
                          </Link>.
                        </li>
                    </ul>
                    <p>
                      By following E-A-T, we aim to deliver a thorough, trustworthy evaluation of the <strong>{reviewData.cardName}</strong>, so you can decide if it’s your ideal travel and dining companion.
                    </p>
                </section>

              </article>
            </div> {/* Close reviewContainer */}
          </div> {/* Close mainContentArea */}

          
        </div> {/* Close reviewPageLayout */}
      </main>

      <Footer />
    </>
  );
}

export default AmexGoldReviewPage;