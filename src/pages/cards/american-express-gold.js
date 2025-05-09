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
import IconGift from '../../components/icons/icon-gift.svg';
import IconStar from '../../components/icons/icon-star.svg'; // Assuming you have a star icon component
import IconCheck from '../../components/icons/icon-Credit Card.svg'; // Assuming you have a check icon component
import IconX from '../../components/icons/icon-Star + Arrow Up.svg'; // Assuming you have an X icon componen
import IconPlus from '../../components/icons/icon-target.svg'; // Assuming you have a plus icon component



// --- Updated data object based on new content (Ambiguous spaces removed) ---
const reviewData = {
  cardName: 'American Express® Gold Card',
  // MODIFIED: Title Tag Update - Added "2025", moved "Review"
  title: 'American Express® Gold Card – Maximize Your Rewards 2025 Review',
  // Meta Description: Verify it exists at build time; keep it ≤ 155 chars and include welcome-offer figures.
  // The current description is: "Expert analysis of the Amex Gold Card for travel enthusiasts, focusing on 4X dining/groceries, 3X flights, credits, travel perks, and Membership Rewards® redemption to assess its value against the $325 fee."
  // This is a good length. Let's refine it to include welcome offer.
  description: 'Explore the American Express® Gold Card (2025): 60,000 points welcome offer, 4X on dining/groceries, 3X flights, valuable credits. Is the $325 fee worth it? Full review.',
  // Updated Keywords based on new content
  keywords: 'American Express, Gold Card, 2025 review, travel rewards, dining rewards, Membership Rewards, statement credits, travel insurance, $325 annual fee, Amex Gold welcome offer',
  author: 'TravelCardInsider', // *** REPLACE with your actual author/site name ***
  imageUrl: '/NUS000000174_480x304_straight_withname.avif', // *** VERIFY PATH in /public ***
  ratingValue: 8.8, // From Amex Gold HTML (KEEPING ORIGINAL AS REQUESTED)
  applyLink: 'https://www.americanexpress.com/us/credit-cards/card/gold-card/', // *** REPLACE with actual Amex Gold APPLY URL ***
  ratesLink: 'https://www.americanexpress.com/us/credit-cards/card-application/apply/prospect/terms/gold-card/25330-10-0#FeeTable', // *** VERIFY URL ***
  // Image dimensions (MUST BE ACCURATE for next/image)
  imageWidth: 480, // *** REPLACE with actual image width ***
  imageHeight: 304, // *** REPLACE with actual image height ***
  datePublished: "2025-05-09", // MODIFIED: Added for Schema - USE THE ACTUAL PUBLISH/UPDATE DATE
  // Placeholder for APR info - update with actual data
  aprRange: "19.24% - 26.24% Variable", // *** REPLACE with actual APR range if available, or a general statement ***
};

// --- Rating Tooltip Content (Ambiguous spaces removed) ---
// KEEPING ORIGINAL AS REQUESTED
const ratingCriteria = [ // *** VERIFY/CUSTOMIZE these criteria for Amex Gold Rating ***
    'Dining & Grocery Rewards (4x)',
    'Welcome Bonus Value',
    'Membership Rewards® Flexibility',
    'Annual Fee vs. Credits ($325 / up to $424)', // Updated to reflect current fee/credit potential
    'Travel Perks (3X Flights, No FTF)'
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

  // MODIFIED: Enhanced Structured Data
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [ // Using @graph for multiple schema types
      {
        "@type": "Product",
        "name": reviewData.cardName,
        "image": `${siteUrl}${reviewData.imageUrl}`,
        "description": reviewData.description,
        "sku": "AMEX-GOLD-CARD", // *** REPLACE with your internal SKU or identifier ***
        "mpn": "NUS000000174",   // *** REPLACE with actual Manufacturer Part Number if applicable ***
        "brand": {
          "@type": "Brand",
          "name": "American Express"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": reviewData.ratingValue.toString(),
          "bestRating": "10",
          "worstRating": "1",
          "ratingCount": "580", // *** REPLACE with actual or estimated count (string) ***
          "reviewCount": "1"  // Number of reviews on THIS page, so 1 for this specific Review object
        },
        "offers": {
          "@type": "Offer",
          "url": reviewData.applyLink.startsWith('http') ? reviewData.applyLink : `${siteUrl}${reviewData.applyLink}`,
          "priceCurrency": "USD",
          "price": "325", // Annual Fee
          "priceSpecification": [ // Added for APR info
            {
              "@type": "PriceSpecification",
              "price": "325",
              "priceCurrency": "USD",
              "valueAddedTaxIncluded": "false", // Assuming fees don't include VAT directly
              "description": "Annual Fee"
            },
            // Placeholder for APR. Update with real data or remove if not applicable/too variable.
            // For credit cards, APR is complex. You might link to terms instead or provide a typical range.
            {
              "@type": "PriceSpecification",
              "priceCurrency": "USD",
              "description": `Purchase APR: ${reviewData.aprRange}. See rates and fees for details.`, // Example
              // "minPrice": "19.24", // If you have min/max APR
              // "maxPrice": "26.24"
            }
          ],
          "availability": "https://schema.org/InStock",
          "itemCondition": "https://schema.org/NewCondition",
          "offeredBy": {
            "@type": "Organization",
            "name": "American Express" // The issuer offering the card
          }
        }
        // "review" property for Product can point to the ID of the Review schema object below
        // "review": { "@id": `${pageUrl}#review` } // Linking to the Review object
      },
      {
        "@type": "Review",
        "@id": `${pageUrl}#review`, // Unique ID for this review
        "itemReviewed": {
          "@type": "Product", // Minimal reference to the Product being reviewed
          "name": reviewData.cardName,
          "image": `${siteUrl}${reviewData.imageUrl}`
          // Potentially add "@id": "AMEX-GOLD-PRODUCT-ID" if you give the Product an @id
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": reviewData.ratingValue.toString(),
          "bestRating": "10",
          "worstRating": "1",
          "description": "TravelCardInsider's rating based on rewards, fees, and benefits." // Optional description for the rating
        },
        "name": reviewData.title, // Title of the review
        "author": {
          "@type": "Organization", // Or "Person" if it's an individual author
          "name": reviewData.author,
          "url": siteUrl // URL of the author/organization
        },
        "datePublished": reviewData.datePublished, // ISO 8601 format YYYY-MM-DD
        // "dateModified": "YYYY-MM-DD", // If you update the review, add this
        "reviewBody": reviewData.description, // Or a more detailed summary of the review
        "publisher": { // The publisher of the review (your website)
            "@type": "Organization",
            "name": reviewData.author, // Assuming author is the site name here
            "logo": {
              "@type": "ImageObject",
              "url": `${siteUrl}/path-to-your-logo.png` // *** REPLACE with your actual logo URL ***
            }
        }
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home", // Or your site's name
            "item": siteUrl
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Credit Card Reviews", // *** REPLACE with your category page name ***
            "item": `${siteUrl}/reviews` // *** REPLACE with your category page URL ***
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": reviewData.cardName + " Review", // Current page
            "item": pageUrl
          }
        ]
      },
      // MODIFIED: Added FAQPage Schema
      // *** Populate mainEntity with your actual Q&A content from the page ***
      // *** If you don't have a Q&A section, you can remove this FAQPage schema part ***
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is the annual fee for the American Express Gold Card?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The annual fee for the American Express Gold Card is $325."
            }
          },
          {
            "@type": "Question",
            "name": "What are the main rewards categories for the Amex Gold Card?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The Amex Gold Card offers 4X points at restaurants worldwide (up to $50k/year, then 1X), 4X points at U.S. supermarkets (up to $25k/year, then 1X), and 3X points on flights booked directly with airlines or on AmexTravel.com."
            }
          },
          {
            "@type": "Question",
            "name": "Does the Amex Gold Card have foreign transaction fees?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No, the American Express Gold Card does not charge foreign transaction fees, making it a good choice for international travel."
            }
          }
          // *** ADD MORE Q&A PAIRS FROM YOUR CONTENT HERE ***
        ]
      }
    ]
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
    // MODIFIED: If you add a Q&A section to your page, add its ID here for ToC
    // { id: 'faq-section', title: 'Frequently Asked Questions' },
  ];


  return (
    <>
      {/* ===== HEAD SECTION for Metadata & SEO ===== */}
      <Head>
        {/* MODIFIED: Title now comes from reviewData.title which was updated */}
        <title>{reviewData.title}</title>
        {/* MODIFIED: Description now comes from reviewData.description which was updated */}
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
        <meta property="og:image" content={structuredData["@graph"][0].image} /> {/* Points to Product image */}
        <meta property="og:type" content="article" />
        {/* MODIFIED: Added article specific OG tags */}
        <meta property="article:published_time" content={reviewData.datePublished} />
        <meta property="article:author" content={siteUrl} /> {/* URL to author page or site */}
        <meta property="article:section" content="Credit Card Reviews" /> {/* Category */}
        {reviewData.keywords.split(',').map(keyword => (
            <meta property="article:tag" content={keyword.trim()} key={keyword} />
        ))}


        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={reviewData.title} />
        <meta name="twitter:description" content={reviewData.description} />
        <meta name="twitter:image" content={structuredData["@graph"][0].image} />
        {/* <meta name="twitter:site" content="@YourTwitterHandle" /> */} {/* *** REPLACE with your Twitter handle *** */}
        {/* <meta name="twitter:creator" content="@AuthorTwitterHandle" /> */} {/* *** REPLACE with author's Twitter handle if different *** */}


        {/* Favicons */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" /> {/* Ensure these files exist in /public */}

        {/* Structured Data (JSON-LD) */}
        {/* This ensures the JSON-LD is SSR'd */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      <Header />

      <main>
        {/* New layout wrapper for main content and sidebar */}
        <div className={styles.reviewPageLayout}>
          {/* Main content area that contains the review article */}

          <div className={styles.mainContentArea}>
             {/* NEW Hero Section - Placed before mainContentArea or at the top of it */}
            <section className={styles.heroSection}>
              <div className={styles.heroTextContainer}>
                <h1 className={styles.heroTitle}>
                  {/* GUIDANCE: Headings - This H1 is logical. Review subsequent H2s/H3s in the article body. */}
                  {/* The current H1 content: "American Express® Gold Card: An In-Depth Review for Travel Enthusiasts" */}
                  {/* This seems good and descriptive. */}
                  American Express® Gold Card: An In-Depth Review for Travel Enthusiasts {/* Using the specific H1 from the content */}
                </h1>
                <p className={styles.heroSubtitle}>
                  {/* Using the original subtitle from the content file */}
                  Expert analysis of the Amex Gold Card for travel enthusiasts, focusing on 4X dining/groceries, 3X flights, credits, travel perks, and Membership Rewards® redemption to assess its value against the $325 fee.
                </p>
                <div className={styles.heroCtaContainer}>
                  <a
                    href={reviewData.applyLink}
                    target="_blank"
                    rel="noopener noreferrer sponsored" // Added sponsored for affiliate links
                    className={`${styles.applyNowButton} ${styles.heroApplyButton}`}
                  >
                    Apply Securely Now
                  </a>
                  <Link href="#summaryBoxTitle" className={styles.heroSecondaryLink}>
                    View Key Benefits
                  </Link>
                </div>
              </div>
              <div className={styles.heroImageContainer}>
                <div className={styles.cardImageContainer}>
                      <Image
                        src={reviewData.imageUrl}
                        alt={reviewData.cardName}
                        width={reviewData.imageWidth}
                        height={reviewData.imageHeight}
                        className={styles.heroImage}
                        priority
                      />
                    </div>
                  <div className={styles.ratingSection}>
                      <span className={styles.tciRating}>
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
                        {showRatingInfo && (
                              <div
                                ref={tooltipRef}
                                className={styles.ratingTooltip}
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

                    <div className={styles.starRating} title={`Rated ${reviewData.ratingValue} out of 10 stars`}>
                      ★★★★★
                      <span className={styles.filledStars} style={{ '--rating': `${reviewData.ratingValue * 10}%` }}>
                        ★★★★★
                      </span>
                    </div>
                    </div>
                    <div className={styles.ratingDescription}>
                      <i>A top pick for foodies & travelers, excelling in dining/grocery rewards and offering valuable statement credits.</i>
                    </div>
                </div>
            </section>
            <div className={styles.reviewContainer}>
              <article>
                <header className={styles.reviewHeader}>
                {/* GUIDANCE: Headings - The H1 is in the hero. The At-A-Glance summary box title is an H2. This is good. */}
                <div className={styles.summaryBox} id="summaryBoxTitle">
                  <h2 className={styles.summaryBoxTitle}>Amex Gold: Key Insights</h2>
                  <div className={styles.summaryGrid}>
                    <div className={styles.summaryItem}>
                      <span className={styles.summaryIcon}><IconGift /></span>
                      <span className={styles.summaryLabel}>Welcome Offer:</span>
                      <span className={styles.summaryValue}>60,000 points <small>(after $6k spend in 6 mos)</small></span>
                    </div>
                    <div className={styles.summaryItem}>
                      <span className={styles.summaryIcon}><IconStar /></span>
                      <span className={styles.summaryLabel}>Annual Fee:</span>
                      <span className={styles.summaryValue}>$325</span>
                    </div>
                    <div className={styles.summaryItem}>
                      <span className={styles.summaryIcon}><IconX /></span>
                      <span className={styles.summaryLabel}>Top Earning:</span>
                      <span className={styles.summaryValue}>4X Dining & U.S. Supermarkets, 3X Flights</span>
                    </div>
                    <div className={styles.summaryItem}>
                      <span className={styles.summaryIcon}><IconCheck /></span>
                      <span className={styles.summaryLabel}>Annual Credits (Up To):</span>
                      <span className={styles.summaryValue}><small>$120 Dining + $120 Uber + $100 Resy + $84 Dunkin' (Enrollment Req.)</small></span>
                    </div>
                    <div className={styles.summaryItem} data-full-width="true">
                      <span className={styles.summaryIcon}><IconPlus /></span>
                      <span className={styles.summaryLabel}>Best For:</span>
                      <span className={styles.summaryValue}>Foodies & travelers maximizing points & specific U.S. credits.</span>
                    </div>
                  </div>
                  <div className={styles.summaryRatesLink}>
                    <a href={reviewData.ratesLink} className={`${styles.btnRates} `} target="_blank" rel="noopener noreferrer sponsored">
                      See Card Rates & Fees
                    </a>
                  </div>
                </div>

                  <div className={styles.introAndImageWrapper}>
                    <div className={styles.intro}>
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
                    </div>
                  </div>
                </header>

                {/* GUIDANCE: Headings - The following sections use H2 for main topics, which is correct. */}
                {/* Check for repeated H3s where H2s might be clearer based on your a11y-lint pass. */}
                {/* For example, in Section 9, "Key Airline Partners" and "Key Hotel Partners" are H3s. This is generally fine for subsections. */}
                {/* If "Mastering Airline & Hotel Transfers" is a major distinct topic deserving an H2, you could restructure. Current structure looks acceptable. */}

                <section id="section-2" className={styles.reviewSection}>
                  <h2>Snapshot: Key Features and Current Welcome Offer</h2>
                  {/* ... content ... */}
                </section>

                <section id="cta" className={styles.ctaSection}>
                  <h2>Get the <b>American Express® Gold Card</b> Today!</h2>
                  {/* ... content ... */}
                </section>

                <section id="section-3" className={styles.reviewSection}>
                  <h2>Unpacking the $325 Annual Fee: Is It Justified for Travelers?</h2>
                  {/* ... content ... */}
                  <p>
                    {/* GUIDANCE: Internal Linking Example */}
                    Compared to other Amex cards, it sits between the premium <Link href="/reviews/amex-platinum"><a>Platinum Card®</a></Link> ($695 fee, more travel perks) and the lower-tier Green Card ($150 fee, fewer benefits).
                  </p>
                  {/* ... content ... */}
                </section>

                {/* ... Other sections ... */}

                 <section id="section-9" className={styles.reviewSection}>
                  <h2>Travel Focus: Redeeming Points: Mastering Airline & Hotel Transfers (Key Partners)</h2>
                  <p>
                    Transferring MR points to airline and hotel loyalty programs offers the highest potential value for travelers.
                    Amex partners with numerous programs across all major airline alliances and several hotel chains, providing global booking flexibility.
                    {/* GUIDANCE: Internal Linking Example */}
                    For instance, transferring points to Delta SkyMiles can be beneficial, though consider options like the <Link href="/reviews/chase-sapphire-preferred"><a>Chase Sapphire Preferred®</a></Link> for different transfer partners.
                  </p>
                  <h3>Key Airline Partners (Generally 1:1 Ratio, Instant Transfer unless noted):</h3>
                  {/* ... content ... */}
                  <h3>Key Hotel Partners (Instant Transfer):</h3>
                  {/* ... content ... */}
                </section>

                {/* ... Other sections up to Section 20 ... */}

                <section id="section-20" className={styles.reviewSection}>
                  <h2>Final Verdict: Is the Amex Gold Your Ideal Travel Companion?</h2>
                  {/* ... content ... */}
                  <h3>Consider alternatives if:</h3>
                  <ul className={styles.featureList}>
                    {/* ... content ... */}
                    {/* GUIDANCE: Internal Linking Example */}
                    <li>You need primary car rental insurance (consider <Link href="/reviews/chase-sapphire-preferred"><a>Chase Sapphire Preferred®</a></Link>, $95 fee).</li>
                    <li>You seek top-tier travel perks like extensive lounge access (consider <Link href="/reviews/amex-platinum"><a>The Platinum Card®</a></Link>, $695 fee).</li>
                    {/* ... content ... */}
                  </ul>
                  {/* ... content ... */}
                </section>

                {/* GUIDANCE: If you add a dedicated FAQ section in the body of your page, give it an id="faq-section" */}
                {/* <section id="faq-section" className={styles.reviewSection}> */}
                {/* <h2>Frequently Asked Questions</h2> */}
                {/* <div> */}
                {/* <h3>What is the annual fee for the American Express Gold Card?</h3> */}
                {/* <p>The annual fee for the American Express Gold Card is $325.</p> */}
                {/* </div> */}
                {/* <div> */}
                {/* <h3>What are the main rewards categories for the Amex Gold Card?</h3> */}
                {/* <p>The Amex Gold Card offers 4X points at restaurants worldwide (up to $50k/year, then 1X), 4X points at U.S. supermarkets (up to $25k/year, then 1X), and 3X points on flights booked directly with airlines or on AmexTravel.com.</p> */}
                {/* </div> */}
                {/* ... more Q&A ... */}
                {/* </section> */}


                <section id="eat-expertise-authority-trustworthiness" className={`${styles.reviewSection} ${styles.eatSection}`}>
                    <h2 dangerouslySetInnerHTML={{ __html: "Our Commitment to E-A-T: Expertise, Authority &amp; Trustworthiness"}}></h2>
                    {/* ... content ... */}
                </section>

              </article>
            </div> {/* Close reviewContainer */}
          </div> {/* Close mainContentArea */}

          <aside className={styles.sidebarArea}>
            <TableOfContents sections={tocSections} />
          </aside>
        </div> {/* Close reviewPageLayout */}
      </main>

      <Footer />
    </>
  );
}

export default AmexGoldReviewPage;