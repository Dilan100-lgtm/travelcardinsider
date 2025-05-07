// Suggested Path: travelcardinsider-main/src/pages/cards/american-express-gold.js

// !!! WARNING: THIS FILE CONTAINS PLACEHOLDER DATA/URLs/DIMENSIONS !!!
// !!! YOU MUST REPLACE ALL PLACEHOLDERS MARKED WITH '***' BEFORE DEPLOYMENT !!!
// !!! VERIFY ALL CARD DETAILS, SCHEMA VALUES, COUNTS, and URLs AGAINST OFFICIAL ISSUER INFO !!!

import React, { useState, useEffect, useCallback, useRef } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

// Adjusted paths assuming this file is in src/pages/cards/
import styles from '../../styles/ReviewPage1.module.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import RewardsCompareCalculator from '../../components/RewardsCompareCalculator'; // Import the calculator

// --- Data object ---
const reviewData = {
  cardName: 'American Express® Gold Card',
  title: 'Comprehensive Review: American Express® Gold Card - Maximize Your Rewards',
  description: 'Discover how the American Express® Gold Card can elevate your rewards with 4X on dining & groceries, 3X on flights, and valuable credits. Our in-depth review analyzes its premium perks and overall value.',
  keywords: 'American Express, Gold Card, Amex Gold, premium rewards, travel rewards, dining rewards, grocery rewards, Membership Rewards, statement credits, card review, $325 annual fee',
  author: 'TravelCardInsider', // *** REPLACE with your actual author/site name ***
  lastUpdated: 'May 7, 2025', // *** REPLACE with actual last updated date ***
  imageUrl: '/NUS000000174_480x304_straight_withname.avif', // *** VERIFY PATH in /public ***
  imageWidth: 480,
  imageHeight: 304,
  applyLink: 'https://www.americanexpress.com/us/credit-cards/card/gold-card/', // *** REPLACE with actual Amex Gold APPLY URL ***
  ratesLink: 'https://www.americanexpress.com/us/credit-cards/card-application/apply/prospect/terms/gold-card/25330-10-0#FeeTable', // *** VERIFY URL ***
  ratingValue: 8.8,

  atAGlance: {
    welcomeOffer: 'Earn 60,000 Membership Rewards® Points after spending $6,000 on eligible purchases within the first 6 months.',
    annualFee: '$325',
    rewardsHighlights: [
      { text: '4X points at restaurants worldwide (up to $50k/yr, then 1X)', iconClass: 'iconDining' },
      { text: '4X points at U.S. supermarkets (up to $25k/yr, then 1X)', iconClass: 'iconGroceries' },
      { text: '3X points on flights (booked directly or on AmexTravel.com)', iconClass: 'iconFlights' },
    ],
    keyBenefits: [
      { text: 'Up to $120 Dining Credit ($10/month at select partners)', iconClass: 'iconStatementCredit' },
      { text: 'Up to $120 Uber Cash ($10/month for U.S. rides/eats)', iconClass: 'iconRideshare' },
      { text: 'Up to $100 Resy Credit ($50 semi-annually)', iconClass: 'iconDiningCredit' },
      { text: 'Up to $84 Dunkin\' Credit ($7/month at U.S. Dunkin\')', iconClass: 'iconCoffee' },
      { text: 'No Foreign Transaction Fees', iconClass: 'iconNoFTF' },
    ],
    bestFor: 'Individuals who spend significantly on dining and U.S. groceries, travel frequently, and can maximize statement credits with specific partners.',
  },
  // Data for conceptual rewards earning chart
  sampleRewardsChartData: {
    labels: ['Dining', 'U.S. Supermarkets', 'Flights', 'Other Travel (AmexTravel)', 'General Spend'],
    // Assuming $1000 monthly spend in each for illustration
    points: [4000*12, 4000*12, 3000*12, 2000*12, 1000*12],
    description: "Illustrative annual points based on $1,000 monthly spend in each category, before caps. Your earnings will vary based on actual spending and adherence to category terms (e.g., U.S. supermarkets)."
  },
  // Data for conceptual competitor snapshot
  competitorSnapshot: [
    { name: 'Chase Sapphire Preferred®', annualFee: '$95', coreReward: '2X-5X Travel, 3X Dining', topPerk: '$50 Annual Hotel Credit' , iconClass: 'iconCompetitorChase'},
    { name: 'Capital One Venture Rewards', annualFee: '$95', coreReward: '2X Miles Everywhere', topPerk: 'Global Entry/TSA PreCheck Credit', iconClass: 'iconCompetitorCap1' },
  ],
  pros: [
    { text: "Excellent 4X points on global dining & U.S. supermarkets.", iconClass: 'iconBenefitCheck' },
    { text: "Solid 3X points on flights booked directly or via AmexTravel.com.", iconClass: 'iconBenefitCheck' },
    { text: "Up to $424 in annual statement credits can offset the fee.", iconClass: 'iconBenefitCheck' },
    { text: "Valuable Membership Rewards® program with transfer partners.", iconClass: 'iconBenefitCheck' },
    { text: "No foreign transaction fees.", iconClass: 'iconBenefitCheck' },
    { text: "Good travel and purchase protections.", iconClass: 'iconBenefitCheck' },
  ],
  cons: [
    { text: "$325 annual fee requires maximizing credits for best value.", iconClass: 'iconBenefitCross' },
    { text: "Statement credits are partner-specific and often U.S.-focused.", iconClass: 'iconBenefitCross' },
    { text: "Secondary car rental insurance (primary preferred by some).", iconClass: 'iconBenefitCross' },
    { text: "Highest point values require learning transfer partner strategies.", iconClass: 'iconBenefitCross' },
    { text: "Caps on some bonus categories (though generally high).", iconClass: 'iconBenefitCross' },
  ]
};

const ratingCriteria = [
    'Dining & Grocery Rewards (4x)', 'Welcome Bonus Value', 'Membership Rewards® Flexibility',
    'Annual Fee vs. Credits ($325 / $424 Potential)', 'Travel Perks (3x Flights, No FTF)'
];

// --- Sections for Table of Contents ---
// Corrected: Removed the instructional HTML block that was here causing the syntax error.
const sections = [
  { id: 'at-a-glance', title: 'At a Glance' },
  { id: 'pros-cons', title: 'Pros & Cons' },
  { id: 'rewards-calculator', title: 'Rewards Calculator' },
  { id: 'rewards-earning-chart', title: 'Earning Potential' },
  { id: 'competitor-snapshot', title: 'Quick Comparison' },
  { id: 'section-2', title: 'Snapshot & Welcome Offer' },
  { id: 'section-3', title: 'Annual Fee Analysis' },
  { id: 'section-4', title: '4X Dining Rewards' },
  { id: 'section-5', title: '4X U.S. Supermarket Rewards' },
  { id: 'section-6', title: '3X Flight Rewards' },
  { id: 'section-7', title: '2X AmexTravel.com Rewards' },
  { id: 'section-8', title: 'Membership Rewards® Value' },
  { id: 'section-9', title: 'Airline & Hotel Transfers' },
  { id: 'section-10', title: 'Redeeming via Amex Travel' },
  { id: 'section-11', title: '$120 Dining Credit' },
  { id: 'section-12', title: '$120 Uber Cash' },
  { id: 'section-13', title: '$100 Resy Credit' },
  { id: 'section-14', title: '$84 Dunkin\' Credit' },
  { id: 'section-15', title: 'Credits Summary' },
  { id: 'section-16', title: 'The Hotel Collection' },
  { id: 'section-17', title: 'Travel Protections' },
  { id: 'section-18', title: 'Global Assist & No FTF' },
  { id: 'section-19', title: 'Purchase Protection & Warranty' },
  { id: 'section-20', title: 'Final Verdict' },
  { id: 'eat-expertise-authority-trustworthiness', title: 'Our E-A-T Commitment' },
];


// --- Main React Component ---
function AmexGoldReviewPage() {
  const [showRatingInfo, setShowRatingInfo] = useState(false);
  const tooltipRef = useRef(null);
  const [activeSection, setActiveSection] = useState('');
  const tocRef = useRef(null);
  const mainContentRef = useRef(null);

  const handleIconClick = useCallback((event) => {
    event.preventDefault();
    event.stopPropagation();
    setShowRatingInfo(prevState => !prevState);
  }, []);

  const closeTooltip = useCallback(() => {
    setShowRatingInfo(false);
  }, []);

  // Close tooltip on outside click
  useEffect(() => {
    if (!showRatingInfo) return;
    const handleClickOutside = (event) => {
      const isInfoButton = event.target.closest(`.${styles.infoIconButton}`);
      if (tooltipRef.current && !tooltipRef.current.contains(event.target) && !isInfoButton) {
        closeTooltip();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [showRatingInfo, closeTooltip]);

  // Intersection Observer for ToC highlighting
  useEffect(() => {
    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };
    const observerOptions = { rootMargin: '-20% 0px -75% 0px', threshold: 0 }; // Adjusted for better active highlighting
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const currentSections = mainContentRef.current?.querySelectorAll('section[id]');
    currentSections?.forEach(section => observer.observe(section));
    return () => currentSections?.forEach(section => observer.unobserve(section));
  }, []);

  // Smooth scroll handler for ToC links
  const handleTocLinkClick = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      // Calculate offset if you have a fixed header
      const headerOffset = 100; // *** Adjust this value based on your sticky header's actual height ***
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      // Optional: Update URL hash without page jump (can interfere with observer sometimes)
      // history.pushState(null, null, `#${sectionId}`);
      setActiveSection(sectionId); // Optionally set active section immediately
    }
  };

  const siteUrl = "https://www.travelcardinsider.com"; // *** REPLACE with your actual site URL ***
  const pageUrl = `${siteUrl}/cards/american-express-gold`; // *** ADJUST if path changes ***

  // Structured Data (Schema.org)
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProductReview",
    "itemReviewed": {
        "@type": "FinancialProduct",
        "name": reviewData.cardName,
        "image": `${siteUrl}${reviewData.imageUrl}`,
        "description": reviewData.description,
        "brand": { "@type": "Brand", "name": "American Express" },
        "offers": {
          "@type": "Offer",
          "url": reviewData.applyLink.startsWith('http') ? reviewData.applyLink : `${siteUrl}${reviewData.applyLink}`,
          "priceCurrency": "USD",
          "price": "325", // Ensure this matches the current fee
          "availability": "https://schema.org/InStock",
          "itemCondition": "https://schema.org/NewCondition"
        },
        "additionalProperty": [
            { "@type": "PropertyValue", "name": "Annual Fee", "value": "$325" }, // Ensure consistency
            { "@type": "PropertyValue", "name": "Foreign Transaction Fee", "value": "None" }
        ]
    },
    "reviewRating": { "@type": "Rating", "ratingValue": reviewData.ratingValue.toString(), "bestRating": "10", "worstRating": "1" },
    "name": reviewData.title,
    "author": { "@type": "Organization", "name": reviewData.author },
    "datePublished": "2023-10-26", // *** REPLACE with actual publish date ***
    "dateModified": reviewData.lastUpdated,
    "description": reviewData.description,
    "publisher": { "@type": "Organization", "name": reviewData.author, "logo": { "@type": "ImageObject", "url": `${siteUrl}/logo.png` } }, // *** REPLACE with your logo path ***
    "mainEntityOfPage": pageUrl,
    "aggregateRating": { "@type": "AggregateRating", "ratingValue": reviewData.ratingValue.toString(), "bestRating": "10", "worstRating": "1", "ratingCount": "580", "reviewCount": "580" }, // *** REPLACE counts ***
  };

  // --- Render Component ---
  return (
    <>
      {/* --- Head Section --- */}
      <Head>
        <title>{reviewData.title}</title>
        <meta name="description" content={reviewData.description} />
        <meta name="keywords" content={reviewData.keywords} />
        <meta name="author" content={reviewData.author} />
        <link rel="canonical" href={pageUrl} />

        {/* Font Preloading */}
        <link rel="preload" href="https://fonts.gstatic.com/s/inter/v12/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1ZL7.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="https://fonts.gstatic.com/s/montserrat/v25/JTUSjIg1_i6t8kCHKm459Wlhyw.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />

        {/* Open Graph / Social Meta Tags */}
        <meta property="og:title" content={reviewData.title} />
        <meta property="og:description" content={reviewData.description} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:image" content={structuredData.itemReviewed.image} />
        <meta property="og:type" content="article" />
        <meta property="article:author" content={reviewData.author} />
        <meta property="article:published_time" content={structuredData.datePublished} />
        <meta property="article:modified_time" content={structuredData.dateModified} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={reviewData.title} />
        <meta name="twitter:description" content={reviewData.description} />
        <meta name="twitter:image" content={structuredData.itemReviewed.image} />
        {/* <meta name="twitter:site" content="@YourTwitterHandle"> */}

        {/* Favicons */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        {/* JSON-LD Schema */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </Head>

      {/* --- Header Component --- */}
      <Header />

      {/* --- Main Page Layout (ToC + Content) --- */}
      <div className={styles.reviewPageLayout}>
        {/* --- Sticky Table of Contents --- */}
        <nav className={styles.stickyToc} ref={tocRef}>
          <h3>In This Review</h3>
          <ul>
            {sections.map(section => (
              <li key={section.id} className={activeSection === section.id ? styles.activeTocItem : ''}>
                <a href={`#${section.id}`} onClick={(e) => handleTocLinkClick(e, section.id)}>{section.title}</a>
              </li>
            ))}
          </ul>
          {/* ToC Call to Action */}
          <div className={styles.tocCta}>
            <a href={reviewData.applyLink} className={`${styles.btn} ${styles.btnApplySmall}`} target="_blank" rel="noopener noreferrer sponsored">
              Apply Now <span className={styles.lockIcon}>🔒</span>
            </a>
          </div>
        </nav>

        {/* --- Main Content Area --- */}
        <main className={styles.mainContent} ref={mainContentRef}>
          <div className={styles.reviewContainer}>
            <article>
              {/* --- Hero Section --- */}
              <header className={styles.heroSection}>
                {/* Strategic Imagery Suggestion: High-quality, aspirational lifestyle shot related to dining/travel OR dynamic card shot */}
                <div className={styles.heroTextContent}>
                  <h1>{reviewData.title}</h1>
                  <p className={styles.heroSubtitle}>
                    Unlock premium rewards and benefits. Is the Amex Gold the right choice for your wallet?
                  </p>
                  <div className={styles.authorDate}>
                    <span>By {reviewData.author}</span> | <span>Last Updated: {reviewData.lastUpdated}</span>
                  </div>
                  <div className={styles.heroCta}>
                    <a href={reviewData.applyLink} className={`${styles.btn} ${styles.btnApply}`} target="_blank" rel="noopener noreferrer sponsored">
                      Apply Securely Now <span className={styles.lockIcon}>🔒</span>
                    </a>
                    <a href={reviewData.ratesLink} className={`${styles.btn} ${styles.btnRates}`} target="_blank" rel="noopener noreferrer sponsored">See Rates & Fees</a>
                  </div>
                </div>
                <div className={styles.heroImageContainer}>
                  <Image
                    src={reviewData.imageUrl} alt={reviewData.cardName} width={reviewData.imageWidth} height={reviewData.imageHeight}
                    className={styles.cardImage} priority
                  />
                  {/* Rating Section */}
                  <div className={styles.ratingSection}>
                    <span className={styles.tciRating}>
                      <button type="button" className={styles.infoIconButton} aria-label="Rating Information" onClick={handleIconClick}>
                        {/* SVG Icon */}
                        <svg aria-hidden="true" focusable="false" className={styles.infoIcon} viewBox="0 0 16 16"><path fillRule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/><path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/></svg>
                      </button>
                      TCI Rating: <strong>{reviewData.ratingValue.toFixed(1)}</strong>/10
                      {/* Tooltip */}
                      {showRatingInfo && (
                        <div ref={tooltipRef} className={styles.ratingTooltip} role="tooltip" aria-live="polite">
                          <strong>TCI Rating: {reviewData.ratingValue.toFixed(1)}/10</strong>
                          <p className={styles.tooltipIntro}>This rating is based on:</p>
                          <ul className={styles.tooltipList}>{ratingCriteria.map((criterion, index) => <li key={index}>{criterion}</li>)}</ul>
                        </div>
                      )}
                    </span>
                    {/* Star Rating Visual */}
                    <div className={styles.starRating} title={`Rated ${reviewData.ratingValue} out of 10 stars`}>
                      ★★★★★ <span className={styles.filledStars} style={{ '--rating': `${reviewData.ratingValue * 10}%` }}>★★★★★</span>
                    </div>
                  </div>
                </div>
              </header>

              {/* --- At a Glance Section --- */}
              <section id="at-a-glance" className={`${styles.reviewSection} ${styles.atAGlanceBox}`}>
                <h2><span className={`${styles.icon} ${styles.iconInfo}`}></span>{reviewData.cardName}: Key Insights</h2>
                <div className={styles.glanceGrid}>
                    <div><strong>Welcome Offer:</strong> {reviewData.atAGlance.welcomeOffer}</div>
                    <div><strong>Annual Fee:</strong> <span className={styles.glanceFee}>{reviewData.atAGlance.annualFee}</span></div>
                    <div>
                        <strong>Top Rewards:</strong>
                        <ul className={`${styles.glanceList} ${styles.iconList}`}>
                            {reviewData.atAGlance.rewardsHighlights.map(item => <li key={item.text}><span className={`${styles.icon} ${styles[item.iconClass]}`}></span> {item.text}</li>)}
                        </ul>
                    </div>
                    <div>
                        <strong>Key Statement Credits:</strong>
                        <ul className={`${styles.glanceList} ${styles.iconList}`}>
                            {reviewData.atAGlance.keyBenefits.map(item => <li key={item.text}><span className={`${styles.icon} ${styles[item.iconClass]}`}></span> {item.text}</li>)}
                        </ul>
                    </div>
                    <div className={styles.glanceBestFor}>
                        <strong>Best For:</strong> {reviewData.atAGlance.bestFor}
                    </div>
                     <div className={styles.glanceCta}>
                        <a href={reviewData.applyLink} className={`${styles.btn} ${styles.btnApply}`} target="_blank" rel="noopener noreferrer sponsored">
                            Apply Securely Now <span className={styles.lockIcon}>🔒</span>
                        </a>
                        <a href={reviewData.ratesLink} className={`${styles.btn} ${styles.btnRates}`} target="_blank" rel="noopener noreferrer sponsored">See Rates & Fees</a>
                    </div>
                </div>
              </section>

              {/* --- Enhanced Pros & Cons Section --- */}
              <section id="pros-cons" className={`${styles.reviewSection} ${styles.prosConsSection}`}>
                <h2><span className={`${styles.icon} ${styles.iconThumbsUpDown}`}></span>Amex Gold: Pros & Cons</h2>
                <div className={styles.prosConsGrid}>
                    <div className={styles.prosBox}>
                        <h3><span className={`${styles.icon} ${styles.iconPros}`}></span>What We Love</h3>
                        <ul className={`${styles.featureList} ${styles.prosList} ${styles.iconList}`}>
                            {reviewData.pros.map(pro => <li key={pro.text}><span className={`${styles.icon} ${styles[pro.iconClass]}`}></span>{pro.text}</li>)}
                        </ul>
                    </div>
                    <div className={styles.consBox}>
                        <h3><span className={`${styles.icon} ${styles.iconCons}`}></span>What to Consider</h3>
                        <ul className={`${styles.featureList} ${styles.consList} ${styles.iconList}`}>
                            {reviewData.cons.map(con => <li key={con.text}><span className={`${styles.icon} ${styles[con.iconClass]}`}></span>{con.text}</li>)}
                        </ul>
                    </div>
                </div>
              </section>

              {/* --- Rewards Calculator Section --- */}
              <section id="rewards-calculator" className={`${styles.reviewSection} ${styles.interactiveToolSection}`}>
                <h2><span className={`${styles.icon} ${styles.iconCalculator}`}></span>Estimate Your Amex Gold Rewards & Compare</h2>
                <p>Use our interactive calculator to see how your spending translates to rewards with the Amex Gold and compare it against other top cards. Input your estimated monthly spending in various categories below.</p>
                <div className={styles.calculatorWrapper}>
                    <RewardsCompareCalculator />
                </div>
                <p className={styles.toolDisclaimer}>Note: The Rewards Compare Calculator is for estimation purposes. Actual rewards depend on specific merchant coding, spending caps, and current card terms.</p>
              </section>

              {/* --- Conceptual Rewards Earning Chart Placeholder --- */}
              <section id="rewards-earning-chart" className={`${styles.reviewSection} ${styles.dataVisualizationSection}`}>
                <h2><span className={`${styles.icon} ${styles.iconChart}`}></span>Visualizing Your Potential Rewards</h2>
                <p>The chart below offers a conceptual look at how points can accumulate in key bonus categories with the Amex Gold Card. <em>(This is a placeholder for a dynamic chart you can implement with a library like Chart.js or Recharts).</em></p>
                <div className={styles.chartPlaceholder}>
                    <h4>Annual Points Projection (Illustrative)</h4>
                    {/* You would replace this with your chart component */}
                    <div className={styles.barChartExample}>
                        {reviewData.sampleRewardsChartData.labels.map((label, index) => (
                            <div key={label} className={styles.barChartBar} style={{ height: `${(reviewData.sampleRewardsChartData.points[index] / 60000) * 100}%` /* Simple scaling for visual */ }}>
                                <span className={styles.barLabel}>{label}</span>
                                <span className={styles.barValue}>{reviewData.sampleRewardsChartData.points[index].toLocaleString()} pts</span>
                            </div>
                        ))}
                    </div>
                    <p className={styles.chartDescription}>{reviewData.sampleRewardsChartData.description}</p>
                </div>
              </section>

              {/* --- Conceptual Competitor Snapshot Placeholder --- */}
              <section id="competitor-snapshot" className={`${styles.reviewSection} ${styles.dataVisualizationSection}`}>
                <h2><span className={`${styles.icon} ${styles.iconCompare}`}></span>Amex Gold vs. Key Competitors: A Quick Look</h2>
                <p>While our calculator provides an in-depth comparison, here’s a brief snapshot of how the Amex Gold stacks up against popular alternatives. <em>(This is a placeholder for a more visually engaging comparison table/graphic).</em></p>
                <div className={styles.competitorTablePlaceholder}>
                    {reviewData.competitorSnapshot.map(card => (
                        <div key={card.name} className={styles.competitorCard}>
                             <h4><span className={`${styles.icon} ${styles[card.iconClass]}`}></span> {card.name}</h4>
                             <p><strong>Annual Fee:</strong> {card.annualFee}</p>
                             <p><strong>Core Reward:</strong> {card.coreReward}</p>
                             <p><strong>Top Perk:</strong> {card.topPerk}</p>
                        </div>
                    ))}
                </div>
              </section>

              {/* --- Lead-in Content --- */}
              <section className={`${styles.reviewSection} ${styles.contentLeadIn}`}>
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
              </section>

              {/* --- Detailed Review Sections Start --- */}

              {/* Section 2: Snapshot */}
              <section id="section-2" className={styles.reviewSection}>
                <h2><span className={`${styles.icon} ${styles.iconSnapshot}`}></span>Snapshot: Key Features and Current Welcome Offer</h2>
                <p>Here’s a quick look at the Amex Gold Card's current core features:</p>
                <ul className={`${styles.featureList} ${styles.iconList}`}>
                  <li><span className={`${styles.icon} ${styles.iconFee}`}></span><strong>Annual Fee:</strong> $325.</li>
                  <li><span className={`${styles.icon} ${styles.iconGift}`}></span><strong>Welcome Offer:</strong> Earn 60,000 Membership Rewards® Points after spending $6,000 on eligible purchases within the first 6 months of Card Membership. (Offers can vary).</li>
                  <li><span className={`${styles.icon} ${styles.iconRewards}`}></span><strong>Rewards Earning:</strong>
                    <ul>
                      <li><span className={`${styles.icon} ${styles.iconDining}`}></span>4X points at restaurants worldwide (up to $50k/year, then 1X).</li>
                      <li><span className={`${styles.icon} ${styles.iconGroceries}`}></span>4X points at U.S. supermarkets (up to $25k/year, then 1X).</li>
                      <li><span className={`${styles.icon} ${styles.iconFlights}`}></span>3X points on flights (booked directly with airlines or AmexTravel.com).</li>
                      <li><span className={`${styles.icon} ${styles.iconTravel}`}></span>2X points on other eligible prepaid travel via AmexTravel.com.</li>
                      <li><span className={`${styles.icon} ${styles.iconPoints}`}></span>1X points on other eligible purchases.</li>
                    </ul>
                  </li>
                  <li><span className={`${styles.icon} ${styles.iconStatementCredit}`}></span><strong>Annual Statement Credits (Enrollment Required):</strong>
                    <ul>
                      <li><span className={`${styles.icon} ${styles.iconDiningCredit}`}></span>Up to $120 Dining Credit ($10/month at select partners).</li>
                      <li><span className={`${styles.icon} ${styles.iconRideshare}`}></span>Up to $120 Uber Cash ($10/month for U.S. rides/eats).</li>
                      <li><span className={`${styles.icon} ${styles.iconDiningCredit}`}></span>Up to $100 Resy Credit ($50 semi-annually at U.S. Resy partners).</li>
                      <li><span className={`${styles.icon} ${styles.iconCoffee}`}></span>Up to $84 Dunkin' Credit ($7/month at U.S. Dunkin').</li>
                    </ul>
                  </li>
                  <li><span className={`${styles.icon} ${styles.iconCheckmarkCircle}`}></span><strong>Application Feature:</strong> "Apply with Confidence" allows checking for approval without impacting credit score before accepting.</li>
                </ul>
                <p>The welcome offer requires significant spending ($1,000/month average for 6 months), a factor for potential applicants to consider.</p>
              </section>

              {/* --- Mid-Page CTA --- */}
              <section id="cta-main" className={`${styles.ctaSection} ${styles.ctaSectionMain}`}>
                <h2>Ready to Elevate Your Rewards?</h2>
                <p>Unlock premium benefits with the American Express® Gold Card.</p>
                <div className={styles.ctaButtons}>
                  <a href={reviewData.applyLink} className={`${styles.btn} ${styles.btnApply}`} title="From card issuer's secure site" target="_blank" rel="noopener noreferrer sponsored">
                      Apply Securely Now <span className={styles.lockIcon}>🔒</span>
                  </a>
                  <a href={reviewData.ratesLink} className={`${styles.btn} ${styles.btnRates}`} target="_blank" rel="noopener noreferrer sponsored">See Rates & Fees</a>
                </div>
              </section>

              {/* --- Continue with detailed sections 3 through 20 --- */}
              {/* (Ensuring H2s and feature lists have icon placeholders) */}

              <section id="section-3" className={styles.reviewSection}>
                <h2><span className={`${styles.icon} ${styles.iconFee}`}></span>Unpacking the $325 Annual Fee: Is It Justified for Travelers?</h2>
                {/* ... content ... */}
              </section>

              <section id="section-4" className={styles.reviewSection}>
                <h2><span className={`${styles.icon} ${styles.iconDining}`}></span>Earning Power: Maximizing 4X Points on Global Dining</h2>
                {/* ... content ... */}
              </section>

              <section id="section-5" className={styles.reviewSection}>
                <h2><span className={`${styles.icon} ${styles.iconGroceries}`}></span>Earning Power: Stocking Up with 4X Points at U.S. Supermarkets</h2>
                {/* ... content ... */}
              </section>

              <section id="section-6" className={styles.reviewSection}>
                <h2><span className={`${styles.icon} ${styles.iconFlights}`}></span>Travel Focus: Earning 3X Points on Flights (Direct & AmexTravel.com)</h2>
                {/* ... content ... */}
              </section>

              <section id="section-7" className={styles.reviewSection}>
                <h2><span className={`${styles.icon} ${styles.iconTravel}`}></span>Travel Focus: Earning 2X Points via AmexTravel.com (Hotels, Packages, etc.)</h2>
                 {/* ... content ... */}
              </section>

              <section id="section-8" className={styles.reviewSection}>
                <h2><span className={`${styles.icon} ${styles.iconPoints}`}></span>The Foundation: Understanding Membership Rewards® Points Value</h2>
                <p>Points earned are American Express Membership Rewards® (MR), a flexible currency whose value depends heavily on redemption.</p>
                <p>Typical redemption values:</p>
                <ul className={`${styles.featureList} ${styles.iconList}`}>
                  <li><span className={`${styles.icon} ${styles.iconStatementCredit}`}></span><strong>Statement Credits:</strong> ~0.6 cents per point (cpp) - Poor value.</li>
                  <li><span className={`${styles.icon} ${styles.iconGiftCard}`}></span><strong>Pay with Points/Gift Cards:</strong> 0.7 - 1.0 cpp.</li>
                  <li><span className={`${styles.icon} ${styles.iconTravel}`}></span><strong>Amex Travel Bookings:</strong>
                    <ul>
                      <li><span className={`${styles.icon} ${styles.iconFlights}`}></span>Flights: 1.0 cpp.</li>
                      <li><span className={`${styles.icon} ${styles.iconHotel}`}></span>Other Prepaid Travel (Hotels, Cars): 0.7 cpp - Poor value.</li>
                    </ul>
                  </li>
                  <li><span className={`${styles.icon} ${styles.iconTransfer}`}></span><strong>Airline/Hotel Partner Transfers:</strong> Potential for 2.0+ cpp, especially for premium international travel - Highest potential value.</li>
                </ul>
                {/* ... rest of content ... */}
              </section>

              <section id="section-9" className={styles.reviewSection}>
                <h2><span className={`${styles.icon} ${styles.iconTransfer}`}></span>Travel Focus: Redeeming Points: Mastering Airline & Hotel Transfers</h2>
                 {/* ... content ... */}
                 {/* Ensure ul lists have styles.iconList if icons added */}
                 <h3>Key Airline Partners (Generally 1:1 Ratio, Instant Transfer unless noted):</h3>
                  <ul className={`${styles.featureList} ${styles.iconList}`}>
                    <li><span className={`${styles.icon} ${styles.iconAirline}`}></span><strong>Star Alliance:</strong> Air Canada Aeroplan, ANA Mileage Club (up to 48h), Avianca LifeMiles, Singapore Airlines KrisFlyer.</li>
                    {/* ... other partners ... */}
                  </ul>
                 <h3>Key Hotel Partners (Instant Transfer):</h3>
                  <ul className={`${styles.featureList} ${styles.iconList}`}>
                    <li><span className={`${styles.icon} ${styles.iconHotel}`}></span>Choice Privileges (1:1)</li>
                    {/* ... other partners ... */}
                  </ul>
                 {/* ... rest of content ... */}
              </section>

              <section id="section-10" className={styles.reviewSection}>
                <h2><span className={`${styles.icon} ${styles.iconTravel}`}></span>Travel Focus: Redeeming Points: Booking Directly via Amex Travel</h2>
                <p>Booking travel directly through AmexTravel.com using points offers a simpler redemption path.</p>
                <p>Redemption values via portal:</p>
                <ul className={`${styles.featureList} ${styles.iconList}`}>
                  <li><span className={`${styles.icon} ${styles.iconFlights}`}></span><strong>Flights:</strong> 1.0 cent per point.</li>
                  <li><span className={`${styles.icon} ${styles.iconHotel}`}></span><strong>Other Prepaid Travel (Hotels, Cars, Cruises):</strong> 0.7 cents per point (Poor value).</li>
                </ul>
                 {/* ... rest of content ... */}
              </section>

              <section id="section-11" className={styles.reviewSection}>
                <h2><span className={`${styles.icon} ${styles.iconDiningCredit}`}></span>$120 Dining Credit: Savoring Monthly Savings (Partners & Enrollment)</h2>
                <p>The Amex Gold offers a <strong>$120 annual Dining Credit</strong>, delivered as up to <strong>$10 in statement credits monthly</strong>. Enrollment is required. The credit applies to purchases made with the enrolled card at these specific partners:</p>
                <ul className={`${styles.featureList} ${styles.iconList}`}>
                    <li><span className={`${styles.icon} ${styles.iconBenefitCheck}`}></span>Grubhub (incl. Seamless)</li>
                    <li><span className={`${styles.icon} ${styles.iconBenefitCheck}`}></span>The Cheesecake Factory</li>
                    <li><span className={`${styles.icon} ${styles.iconBenefitCheck}`}></span>Goldbelly</li>
                    <li><span className={`${styles.icon} ${styles.iconBenefitCheck}`}></span>Wine.com</li>
                    <li><span className={`${styles.icon} ${styles.iconBenefitCheck}`}></span>Five Guys</li>
                </ul>
                 {/* ... rest of content ... */}
              </section>

              <section id="section-12" className={styles.reviewSection}>
                <h2><span className={`${styles.icon} ${styles.iconRideshare}`}></span>Travel Focus: $120 Uber Cash: Credits for Rides & Eats On-the-Go (US Focus)</h2>
                 {/* ... content ... */}
              </section>

              <section id="section-13" className={styles.reviewSection}>
                <h2><span className={`${styles.icon} ${styles.iconDiningCredit}`}></span>$100 Resy Credit: Elevating Your U.S. Dining Experiences</h2>
                 {/* ... content ... */}
              </section>

             <section id="section-14" className={styles.reviewSection}>
                <h2><span className={`${styles.icon} ${styles.iconCoffee}`}></span>$84 Dunkin' Credit: Fueling Your Mornings (US Focus)</h2>
                 {/* ... content ... */}
              </section>

              <section id="section-15" className={styles.reviewSection}>
                <h2><span className={`${styles.icon} ${styles.iconReport}`}></span>Calculating the Value: How Credits Offset the Annual Fee</h2>
                 {/* ... content ... table included ... */}
              </section>

              <section id="section-16" className={styles.reviewSection}>
                <h2><span className={`${styles.icon} ${styles.iconHotel}`}></span>Travel Focus: The Hotel Collection Benefits ($100 Credit & Upgrades)</h2>
                <p>The Amex Gold provides access to <strong>The Hotel Collection (THC)</strong>, offering perks at over 1,000 participating upscale hotels worldwide. Booking a stay of <strong>two consecutive nights or more</strong> through American Express Travel using the Gold Card is required.</p>
                <p>Benefits include:</p>
                <ul className={`${styles.featureList} ${styles.iconList}`}>
                  <li><span className={`${styles.icon} ${styles.iconBenefitCheck}`}></span><strong>$100 Experience Credit:</strong> For eligible on-property charges (dining, spa, etc.), applied at check-out.</li>
                  <li><span className={`${styles.icon} ${styles.iconBenefitCheck}`}></span><strong>Room Upgrade:</strong> One-category upgrade at check-in, when available.</li>
                </ul>
                 {/* ... rest of content ... */}
              </section>

              <section id="section-17" className={styles.reviewSection}>
                <h2><span className={`${styles.icon} ${styles.iconShield}`}></span>Travel Focus: Essential Travel Protections: Baggage & Car Rental Insurance</h2>
                 {/* ... content ... lists included ... */}
                  <h3>Baggage Insurance Plan:</h3>
                  <ul className={`${styles.featureList} ${styles.iconList}`}>
                     <li><span className={`${styles.icon} ${styles.iconBenefitCheck}`}></span><strong>Carry-on:</strong> Up to $1,250.</li>
                     {/* ... other list items ... */}
                  </ul>
                  <h3>Car Rental Loss and Damage Insurance:</h3>
                  <ul className={`${styles.featureList} ${styles.iconList}`}>
                    <li><span className={`${styles.icon} ${styles.iconBenefitCheck}`}></span><strong>Limit:</strong> Up to $50,000 per rental.</li>
                    {/* ... other list items ... */}
                  </ul>
                 {/* ... rest of content ... */}
              </section>

              <section id="section-18" className={styles.reviewSection}>
                <h2><span className={`${styles.icon} ${styles.iconGlobe}`}></span>Travel Focus: Added Peace of Mind: Global Assist® Hotline & No FTF</h2>
                 {/* ... content ... lists included ... */}
                 <h3>Global Assist® Hotline:</h3>
                 <ul className={`${styles.featureList} ${styles.iconList}`}>
                   <li><span className={`${styles.icon} ${styles.iconBenefitCheck}`}></span>Medical referrals...</li>
                   {/* ... other list items ... */}
                 </ul>
                 {/* ... rest of content ... */}
              </section>

              <section id="section-19" className={styles.reviewSection}>
                <h2><span className={`${styles.icon} ${styles.iconShoppingBag}`}></span>Beyond Travel: Purchase Protection & Extended Warranty Deep Dive</h2>
                 {/* ... content ... lists included ... */}
                 <h3>Purchase Protection:</h3>
                 <ul className={`${styles.featureList} ${styles.iconList}`}>
                    <li><span className={`${styles.icon} ${styles.iconBenefitCheck}`}></span><strong>Limits:</strong> Up to <strong>$10,000 per item / occurrence</strong>.</li>
                    {/* ... other list items ... */}
                 </ul>
                 <h3>Extended Warranty:</h3>
                 <ul className={`${styles.featureList} ${styles.iconList}`}>
                    <li><span className={`${styles.icon} ${styles.iconBenefitCheck}`}></span><strong>Extension:</strong> Adds up to <strong>one additional year</strong>.</li>
                    {/* ... other list items ... */}
                 </ul>
                 {/* ... rest of content ... */}
              </section>

             <section id="section-20" className={styles.reviewSection}>
                <h2><span className={`${styles.icon} ${styles.iconFlag}`}></span>Final Verdict: Is the Amex Gold Your Ideal Travel Companion?</h2>
                 {/* ... content ... lists included ... */}
                 <h3>Who is it best for?</h3>
                 <ul className={`${styles.featureList} ${styles.iconList}`}>
                   <li><span className={`${styles.icon} ${styles.iconBenefitCheck}`}></span>Spend heavily...</li>
                   {/* ... other list items ... */}
                 </ul>
                 <h3>Consider alternatives if:</h3>
                 <ul className={`${styles.featureList} ${styles.iconList}`}>
                   <li><span className={`${styles.icon} ${styles.iconBenefitCross}`}></span>You can't consistently...</li>
                   {/* ... other list items ... */}
                 </ul>
                 {/* ... rest of content ... */}
              </section>

              {/* --- E-A-T Section --- */}
              <section id="eat-expertise-authority-trustworthiness" className={`${styles.reviewSection} ${styles.eatSection}`}>
                <h2><span className={`${styles.icon} ${styles.iconLeaf}`}></span>Our Commitment to E-A-T: Expertise, Authority & Trustworthiness</h2>
                <p>At <strong>{reviewData.author}</strong>, we prioritize:</p>
                <h3>1. Expertise</h3>
                <ul className={`${styles.featureList} ${styles.iconList}`}>
                    <li><span className={`${styles.icon} ${styles.iconBenefitCheck}`}></span><strong>Real-World Testing:</strong> Our team actively uses the Amex Gold...</li>
                    {/* ... other list items ... */}
                </ul>
                <h3>2. Authority</h3>
                <ul className={`${styles.featureList} ${styles.iconList}`}>
                    <li><span className={`${styles.icon} ${styles.iconBenefitCheck}`}></span><strong>Comprehensive Analysis:</strong> Our detailed coverage dives beyond basics...</li>
                    {/* ... other list items ... */}
                </ul>
                <h3>3. Trustworthiness</h3>
                <ul className={`${styles.featureList} ${styles.iconList}`}>
                    <li><span className={`${styles.icon} ${styles.iconBenefitCheck}`}></span><strong>Independent Ratings:</strong> We do not let advertisers influence...</li>
                    {/* ... other list items ... */}
                    <li><span className={`${styles.icon} ${styles.iconBenefitCheck}`}></span>
                      <strong>Privacy & Security:</strong> We uphold data protection best practices, as explained in our{' '}
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
        </main>
      </div> {/* Close reviewPageLayout */}

      {/* --- Footer Component --- */}
      <Footer />
    </>
  );
}

export default AmexGoldReviewPage;