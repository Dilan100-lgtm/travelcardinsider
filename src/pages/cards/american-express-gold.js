// pages/cards/amex-business-gold.js
// !!! WARNING: THIS FILE IS A RESTRUCTURED TEMPLATE FOR THE AMEX BUSINESS GOLD CARD. !!!
// !!! IT INCORPORATES PHASE 2 & 3 BLUEPRINT ENHANCEMENTS. !!!
// !!! YOU MUST REPLACE ALL PLACEHOLDER CONTENT (ESPECIALLY THE 20 SECTIONS) AND VERIFY ALL CARD DETAILS, SCHEMA VALUES, URLs, ICONS & IMAGERY !!!

import React, { useState, useEffect, useCallback, useRef } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/ReviewPage1.module.css'; // Using the new REVIEW CSS module
import Header from '../../components/Header';
import Footer from '../../components/Footer';

// --- Data object for Amex Business Gold Card ---
// Data sourced from blueprint and src/schemas/business/8-amex-business-gold.json
const reviewData = {
  cardName: 'American Express® Business Gold Card',
  title: 'Comprehensive Review: American Express® Business Gold Card - Elevating Business Rewards', // From Blueprint
  description: 'In-depth analysis of the Amex Business Gold Card. Explore its 4X rewards, flexible business credits, travel perks, and see if its premium benefits justify the annual fee for your business.', // Custom description
  keywords: 'American Express, Business Gold Card, Amex Business Gold, business rewards, travel rewards, advertising rewards, shipping rewards, software rewards, Membership Rewards, statement credits, business card review',
  author: 'TravelCardInsider', // *** REPLACE with your actual author/site name ***
  lastUpdated: 'May 8, 2025', // *** REPLACE with actual last updated date ***
  // From src/schemas/business/8-amex-business-gold.json
  imageUrl: '/images/amex_business_gold_card.png', // *** VERIFY PATH & IMAGE in /public. Placeholder from schema. Blueprint suggests "aspirational photograph or polished product shot" ***
  imageWidth: 480, // *** REPLACE with actual image width ***
  imageHeight: 304, // *** REPLACE with actual image height ***
  // *** REPLACE with actual APPLY & RATES URLs for Business Gold ***
  applyLink: 'https://www.americanexpress.com/us/credit-cards/business/business-gold-card/', // Placeholder
  ratesLink: 'https://www.americanexpress.com/us/credit-cards/business/business-gold-card/terms/', // Placeholder
  ratingValue: 8.5, // From schema, adjust as per your new rating

  atAGlance: { // Based on Blueprint "Key Insights"
    welcomeOffer: 'Example: Earn 70,000 Membership Rewards® Points after spending $10,000 in the first 3 months.', // *** REPLACE with current Business Gold Offer ***
    annualFee: '$375', // The schema had $295. Many sources list $375 for the current iteration. *** VERIFY AND REPLACE ***
    rewardsHighlights: [ // Top 2-3 Rewards Earning Categories (Blueprint)
      { text: '4X points on top 2 eligible categories where your business spent the most each month (up to $150k/yr combined, then 1X)', icon: '🏆' }, // Placeholder icon, use custom SVG/Image
      { text: '3X points on flights & prepaid hotels booked on amextravel.com', icon: '✈️' },
      { text: '1X points on other eligible purchases', icon: '🛍️' },
    ],
    keyBenefits: [ // Key Benefits with value (Blueprint)
      { text: 'Up to $240 Flexible Business Credit ($20/month for eligible U.S. purchases at FedEx, Grubhub, office supply stores)', icon: '💼' },
      { text: 'Up to $155 Walmart+ Credit ($12.95/month, covers cost of monthly Walmart+ membership, subject to auto-renew)', icon: '🛒' },
      { text: 'No Foreign Transaction Fees', icon: '🌍' },
      { text: 'Cell Phone Protection', icon: '📱' },
    ],
    bestFor: 'Businesses with significant spending in categories like advertising, transit, U.S. tech providers, or that can maximize the flexible business and Walmart+ credits.', // From Blueprint
  },
};

// Rating Tooltip Content (Keep or adapt from personal gold)
const ratingCriteria = [
    'Flexible 4X Rewards Categories',
    'Welcome Bonus Value & Terms',
    'Value of Statement Credits (Flexible Business, Walmart+)',
    'Annual Fee vs. Overall Benefits',
    'Business-Oriented Perks & Protections'
];

// --- Sections for Table of Contents (Blueprint: 20 distinct sections) ---
// !!! THESE ARE PLACEHOLDER TITLES. REPLACE WITH YOUR ACTUAL 20 SECTION TITLES FOR AMEX BUSINESS GOLD REVIEW !!!
const sections = [
  { id: 'at-a-glance', title: 'At a Glance: Business Gold' },
  { id: 'hero-placeholder', title: 'Introduction & Value Proposition' }, // Placeholder, to be part of Hero
  { id: 'welcome-offer-details', title: 'Welcome Offer In-Depth' },
  { id: 'annual-fee-analysis', title: 'Annual Fee Breakdown' },
  { id: 'earning-rewards-4x', title: '4X Points: Top 2 Categories' },
  { id: 'earning-rewards-other', title: 'Other Earning Rates (3X, 1X)' },
  { id: 'membership-rewards-value', title: 'Membership Rewards® Program Value' },
  { id: 'flexible-business-credit', title: '$240 Flexible Business Credit' },
  { id: 'walmart-plus-credit', title: '$155 Walmart+ Credit' },
  { id: 'travel-perks-benefits', title: 'Travel Perks & Protections' },
  { id: 'business-management-tools', title: 'Business Management Tools' },
  { id: 'cell-phone-protection', title: 'Cell Phone Protection Details' },
  { id: 'purchase-extended-warranty', title: 'Purchase & Warranty Protections' },
  { id: 'comparison-competitors', title: 'Comparison with Competitors' }, // Placeholder for Phase 3 Data Viz
  { id: 'rewards-calculator-section', title: 'Estimate Your Rewards' }, // Placeholder for Phase 3 Interactive Tool
  { id: 'pros-cons', title: 'Pros & Cons Summary' },
  { id: 'who-is-it-for', title: 'Is This Card Right for Your Business?' },
  { id: 'application-process', title: 'Application Tips & Process' },
  { id: 'expert-verdict', title: 'Our Expert Verdict' },
  { id: 'eat-commitment', title: 'E-A-T Commitment' },
  // Add more section objects up to 20 as per your actual review content
];

// --- Phase 3: Simple Rewards Calculator Component ---
const BusinessRewardsCalculator = () => {
  const [spending, setSpending] = useState({
    advertising: '',
    shipping: '',
    software: '',
    transit: '',
    gas: '',
    otherEligible: '', // For the 2 categories that become 4X
    flightsAmexTravel: '',
    other: ''
  });
  const [estimatedPoints, setEstimatedPoints] = useState(0);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSpending(prev => ({ ...prev, [name]: value }));
  };

  const calculatePoints = () => {
    // Simplified logic: Assumes user identifies their top 2 categories for 4X.
    // Real logic would need to pick top 2 from various inputs.
    // This is a conceptual placeholder.
    const adSpend = Number(spending.advertising) || 0;
    const shipSpend = Number(spending.shipping) || 0;
    const softwareSpend = Number(spending.software) || 0;
    const transitSpend = Number(spending.transit) || 0;
    const gasSpend = Number(spending.gas) || 0;
    // Let's say 'otherEligible' represents the combined spend in the top 2 of the 6 categories (electronics, transit, gas, travel, dining, advertising - this needs to be accurate to the card terms)
    const top2CombinedSpend = Number(spending.otherEligible) || 0;


    const flights = Number(spending.flightsAmexTravel) || 0;
    const otherSpend = Number(spending.other) || 0;

    // Placeholder: In reality, you'd identify the top 2 spending categories from a list.
    // For this example, let's assume 'top2CombinedSpend' is the sum of the two highest 4X categories.
    // Cap for 4X categories is $150,000 per year.
    const annualTop2Spend = Math.min(top2CombinedSpend * 12, 150000);
    const pointsFromTop2 = annualTop2Spend * 4;
    const pointsFromFlights = (flights * 12) * 3; // Assuming monthly input
    const pointsFromOther = (otherSpend * 12) * 1;

    setEstimatedPoints(pointsFromTop2 + pointsFromFlights + pointsFromOther);
  };

  return (
    <div className={styles.rewardsCalculator}>
      <h4>Estimate Your Annual Rewards</h4>
      <p>Enter your estimated monthly spending in key business categories.</p>
      <div className={styles.calcGrid}>
        {/* Example: Add input fields for relevant Amex Business Gold categories */}
        {/* These are just examples, align with actual 4X eligible categories */}
        <div>
          <label htmlFor="calc-otherEligible">Combined Monthly Spend in Top 2 Categories (e.g., U.S. Advertising, U.S. Software, U.S. Transit, etc.):</label>
          <input type="number" id="calc-otherEligible" name="otherEligible" value={spending.otherEligible} onChange={handleInputChange} placeholder="e.g., 2000" />
        </div>
        <div>
          <label htmlFor="calc-flightsAmexTravel">Monthly Flights/Prepaid Hotels (AmexTravel.com):</label>
          <input type="number" id="calc-flightsAmexTravel" name="flightsAmexTravel" value={spending.flightsAmexTravel} onChange={handleInputChange} placeholder="e.g., 500" />
        </div>
         <div>
          <label htmlFor="calc-other">Other Monthly Business Spending:</label>
          <input type="number" id="calc-other" name="other" value={spending.other} onChange={handleInputChange} placeholder="e.g., 1000" />
        </div>
      </div>
      <button onClick={calculatePoints} className={`${styles.btn} ${styles.btnApplySmall}`} style={{marginTop: '1rem'}}>Calculate Points</button>
      {estimatedPoints > 0 && (
        <div className={styles.calculatedResult}>
          Estimated Annual Points: <strong>{estimatedPoints.toLocaleString()} MR Points</strong>
          {/* Add notes on point valuation if desired */}
        </div>
      )}
      <small>This is a simplified estimate. Actual points depend on meeting specific category requirements and caps. Refer to card terms.</small>
    </div>
  );
};


// --- Phase 3: Simple Bar Chart for Statement Credits ---
const StatementCreditsChart = ({ credits }) => {
    const totalValue = credits.reduce((sum, credit) => sum + credit.value, 0);

    return (
        <div className={styles.statementCreditsChart}>
            <h4>Visualizing Annual Credits (Up to ${totalValue})</h4>
            <div className={styles.chartBars}>
                {credits.map(credit => (
                    <div key={credit.name} className={styles.chartBarContainer}>
                        <div className={styles.chartBarLabel}>
                            {credit.name} (${credit.value})
                            {/* Phase 2: Custom Icon here */}
                            <span className={styles.barIcon}>{credit.icon || '💰'}</span>
                        </div>
                        <div className={styles.chartBar} style={{ width: `${(credit.value / totalValue) * 100}%`, backgroundColor: credit.color || 'var(--color-secondary-accent)' }}>
                        </div>
                    </div>
                ))}
            </div>
            <p>Potentially offset your annual fee by maximizing these statement credits. Enrollment/terms apply.</p>
        </div>
    );
};


function AmexBusinessGoldReviewPage() {
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

  useEffect(() => {
    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };
    const observerOptions = { rootMargin: '-20% 0px -80% 0px', threshold: 0 };
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const currentSections = mainContentRef.current?.querySelectorAll('section[id]');
    currentSections?.forEach(section => observer.observe(section));
    return () => currentSections?.forEach(section => observer.unobserve(section));
  }, []);

  const siteUrl = "https://www.travelcardinsider.com"; // *** REPLACE with your actual site URL ***
  const pageUrl = `${siteUrl}/cards/amex-business-gold`; // *** REPLACE with your actual page URL ***

  const structuredData = { // Update with Business Gold specifics
    "@context": "https://schema.org",
    "@type": "ProductReview",
    "itemReviewed": {
      "@type": "FinancialProduct",
      "name": reviewData.cardName,
      "image": reviewData.imageUrl.startsWith('http') ? reviewData.imageUrl : `${siteUrl}${reviewData.imageUrl}`,
      "description": reviewData.description,
      "brand": { "@type": "Brand", "name": "American Express" },
      "offers": {
        "@type": "Offer",
        "url": reviewData.applyLink.startsWith('http') ? reviewData.applyLink : `${siteUrl}${reviewData.applyLink}`,
        "priceCurrency": "USD",
        "price": reviewData.atAGlance.annualFee.replace('$', ''), // Use dynamic fee
        "availability": "https://schema.org/InStock",
      },
      "additionalProperty": [
        { "@type": "PropertyValue", "name": "Annual Fee", "value": reviewData.atAGlance.annualFee },
        { "@type": "PropertyValue", "name": "Foreign Transaction Fee", "value": "None" }
        // Add other properties like "Rewards Program: Membership Rewards"
      ]
    },
    "reviewRating": { "@type": "Rating", "ratingValue": reviewData.ratingValue.toString(), "bestRating": "10", "worstRating": "1" },
    "name": reviewData.title,
    "author": { "@type": "Organization", "name": reviewData.author },
    "datePublished": "2024-01-15", // *** REPLACE with actual publish date ***
    "dateModified": reviewData.lastUpdated,
    "description": reviewData.description,
    "publisher": { "@type": "Organization", "name": reviewData.author, "logo": { "@type": "ImageObject", "url": `${siteUrl}/logo.png` } }, // *** REPLACE logo path ***
    "mainEntityOfPage": pageUrl,
  };
  
  // For Phase 3 Data Visualization - Statement Credits
  const businessGoldCredits = [
      { name: 'Flexible Business Credit', value: 240, icon: '💼', color: 'var(--color-primary-accent)' },
      { name: 'Walmart+ Credit', value: 155, icon: '🛒', color: 'var(--color-secondary-accent)' },
      // Add other potential credits if applicable
  ];


  return (
    <>
      <Head>
        <title>{reviewData.title}</title>
        <meta name="description" content={reviewData.description} />
        <meta name="keywords" content={reviewData.keywords} />
        <meta name="author" content={reviewData.author} />
        <link rel="canonical" href={pageUrl} />
        {/* Add preloaded fonts as in ReviewPage1.module.css if not globally handled */}
        <meta property="og:title" content={reviewData.title} />
        <meta property="og:description" content={reviewData.description} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:image" content={structuredData.itemReviewed.image} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </Head>

      <Header />

      <div className={styles.reviewPageLayout}>
        <nav className={styles.stickyToc} ref={tocRef}>
          <h3>Table of Contents</h3>
          <ul>
            {sections.map(section => (
              <li key={section.id} className={activeSection === section.id ? styles.activeTocItem : ''}>
                <a href={`#${section.id}`}>{section.title}</a>
              </li>
            ))}
          </ul>
          <div className={styles.tocCta}>
            <a href={reviewData.applyLink} className={`${styles.btn} ${styles.btnApplySmall}`} target="_blank" rel="noopener noreferrer sponsored">
              Apply Now <span className={styles.lockIcon}>🔒</span>
            </a>
          </div>
        </nav>

        <main className={styles.mainContent} ref={mainContentRef}>
          <div className={styles.reviewContainer}>
            <article>
              {/* ============= HERO SECTION (Phase 2 Enhancement) ============= */}
              <header className={styles.heroSection}>
                <div className={styles.heroTextContent}>
                  <h1>{reviewData.title}</h1>
                  <p className={styles.heroSubtitle}> {/* From Blueprint */}
                    Maximize Your Business Rewards with Flexible Earning & Premium Perks.
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
                  {/* Phase 2: Strategic Imagery - high-quality, aspirational photo or polished product shot */}
                  <Image
                    src={reviewData.imageUrl} // Ensure this is the Business Gold image
                    alt={reviewData.cardName}
                    width={reviewData.imageWidth} // Adjust for Business Gold image
                    height={reviewData.imageHeight} // Adjust
                    className={styles.cardImage}
                    priority
                  />
                   {/* Placeholder for "aspirational business hero image" if different from card shot */}
                  <div className={styles.ratingSection}>
                    <span className={styles.tciRating}>
                      <button type="button" className={styles.infoIconButton} aria-label="Rating Information" onClick={handleIconClick}>
                        <svg aria-hidden="true" focusable="false" className={styles.infoIcon} viewBox="0 0 16 16"><path fillRule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/><path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/></svg>
                      </button>
                      TCI Rating: <strong>{reviewData.ratingValue.toFixed(1)}</strong>/10
                      {showRatingInfo && (
                        <div ref={tooltipRef} className={styles.ratingTooltip} role="tooltip" aria-live="polite">
                          <strong>TCI Rating: {reviewData.ratingValue.toFixed(1)}/10</strong>
                          <p className={styles.tooltipIntro}>This rating is based on:</p>
                          <ul className={styles.tooltipList}>{ratingCriteria.map((criterion, index) => <li key={index}>{criterion}</li>)}</ul>
                        </div>
                      )}
                    </span>
                     <div className={styles.starRating} title={`Rated ${reviewData.ratingValue} out of 10 stars`}>
                      ★★★★★ <span className={styles.filledStars} style={{ '--rating': `${reviewData.ratingValue * 10}%` }}>★★★★★</span>
                    </div>
                  </div>
                </div>
              </header>

              {/* --- "At-a-Glance" Summary Box (Phase 1 Foundation, Enhanced for Phase 2) --- */}
              <section id="at-a-glance" className={`${styles.reviewSection} ${styles.atAGlanceBox}`}>
                <h2>{reviewData.cardName}: Key Insights</h2>
                <div className={styles.glanceGrid}>
                  <div><strong>Welcome Offer:</strong> {reviewData.atAGlance.welcomeOffer}</div>
                  <div><strong>Annual Fee:</strong> <span className={styles.glanceFee}>{reviewData.atAGlance.annualFee}</span></div>
                  <div>
                    <strong>Top Rewards:</strong>
                    {/* Phase 2: Benefit-Driven Custom Icons (using placeholders) */}
                    <ul className={styles.glanceList}>
                      {reviewData.atAGlance.rewardsHighlights.map(item => (
                        <li key={item.text}><span className={styles.glanceIcon}>{item.icon}</span> {item.text}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <strong>Key Statement Credits:</strong>
                    <ul className={styles.glanceList}>
                      {reviewData.atAGlance.keyBenefits.map(item => (
                        <li key={item.text}><span className={styles.glanceIcon}>{item.icon}</span> {item.text}</li>
                      ))}
                    </ul>
                  </div>
                  <div className={styles.glanceBestFor}><strong>Best For:</strong> {reviewData.atAGlance.bestFor}</div>
                  <div className={styles.glanceCta}>
                    <a href={reviewData.applyLink} className={`${styles.btn} ${styles.btnApply}`} target="_blank" rel="noopener noreferrer sponsored">
                      Apply Securely Now <span className={styles.lockIcon}>🔒</span>
                    </a>
                    <a href={reviewData.ratesLink} className={`${styles.btn} ${styles.btnRates}`} target="_blank" rel="noopener noreferrer sponsored">See Rates & Fees</a>
                  </div>
                </div>
              </section>

              {/* ============= REVIEW CONTENT SECTIONS (20 Sections - Placeholder Content) ============= */}
              {/* !!! IMPORTANT: Populate these sections with your detailed Amex Business Gold review content !!! */}

              <section id="welcome-offer-details" className={styles.reviewSection}>
                <h2>Welcome Offer In-Depth</h2>
                <p>Placeholder for detailed analysis of the current American Express Business Gold Card welcome offer, including spending requirements, timeframe, and potential value. Discuss how it compares to other business card offers.</p>
                {/* Phase 2: Strategic Imagery could be used here if relevant to offer */}
              </section>

              <section id="annual-fee-analysis" className={styles.reviewSection}>
                <h2>Annual Fee Breakdown: Is {reviewData.atAGlance.annualFee} Justified?</h2>
                <p>Placeholder for discussing the {reviewData.atAGlance.annualFee} annual fee. Analyze how the card's benefits and credits can offset this cost. Compare its fee structure to key competitors in the business card market.</p>
                {/* Phase 3: Data Visualization - Could include a chart showing fee vs. potential credit value */}
                 <StatementCreditsChart credits={businessGoldCredits} />
              </section>

              <section id="earning-rewards-4x" className={styles.reviewSection}>
                <h2>Earning Rewards: Maximizing 4X Points on Your Top 2 Business Categories</h2>
                <p>Placeholder for detailed explanation of the 4X Membership Rewards® points earning structure. List all eligible 2X categories and explain how the top two are determined. Discuss the annual cap of $150,000 on combined purchases for these categories.</p>
                {/* Phase 2: Custom Icons for each eligible category would be beneficial here */}
                <ul className={styles.featureList}>
                    <li><span className={styles.customIcon}> {/* Replace with actual icon */}🌟</span> Advertising in select media (online, TV, radio)</li>
                    <li><span className={styles.customIcon}>💻</span> U.S. purchases of electronics goods, software, and cloud solutions from select technology providers.</li>
                    <li><span className={styles.customIcon}>⛽</span> U.S. purchases at gas stations.</li>
                    <li><span className={styles.customIcon}>🍽️</span> U.S. purchases at restaurants, including takeout and delivery.</li>
                    <li><span className={styles.customIcon}>🚚</span> Transit purchases including trains, taxicabs, rideshare services, ferries, tolls, parking, buses, and subways.</li>
                     <li><span className={styles.customIcon}>📦</span> Monthly wireless telephone service charges made directly from a wireless telephone service provider in the U.S.</li>
                </ul>
                <p><em>Note: Your business will earn 4X points in the 2 categories (from the list above) where it spends the most each billing cycle, on up to $150,000 in combined purchases from these 2 categories per calendar year. Then 1X.</em></p>
              </section>

              {/* ... Add more placeholder sections 5 through 13 ... */}
              <section id="membership-rewards-value" className={styles.reviewSection}>
                <h2>Understanding Membership Rewards® Program Value for Businesses</h2>
                <p>Placeholder for explaining the value of MR points, transfer partners, redemption options (flights, hotels, statement credits, gift cards), and strategies for businesses to maximize point value.</p>
              </section>

              <section id="flexible-business-credit" className={styles.reviewSection}>
                <h2>Deep Dive: $240 Flexible Business Credit</h2>
                <p>Placeholder for explaining how the $20 monthly credit works, eligible purchase categories (FedEx, Grubhub, U.S. office supply stores), enrollment requirements, and tips for maximizing this benefit.</p>
                {/* Phase 3: Data Visualization - Simple bar chart showing monthly accumulation if desired */}
              </section>

               <section id="walmart-plus-credit" className={styles.reviewSection}>
                <h2>Maximizing the $155 Walmart+ Credit</h2>
                <p>Placeholder for details on the Walmart+ membership credit, how it applies, benefits of Walmart+, and any enrollment or usage terms. This is $12.95 per month plus applicable taxes on one membership.</p>
              </section>

              <section id="travel-perks-benefits" className={styles.reviewSection}>
                <h2>Business Travel Perks & Protections</h2>
                <p>Placeholder for travel benefits like The Hotel Collection, travel insurance (baggage, car rental - specify if primary/secondary), no foreign transaction fees, etc.</p>
                {/* Phase 2: Custom Icons for each travel perk */}
              </section>
              
              <section id="business-management-tools" className={styles.reviewSection}>
                <h2>Streamlining Operations: Business Management Tools</h2>
                <p>Placeholder to detail tools like year-end summaries, employee cards (and any associated fees/benefits), account alerts, integration with accounting software (e.g., QuickBooks).</p>
              </section>

              <section id="cell-phone-protection" className={styles.reviewSection}>
                <h2>Stay Connected: Cell Phone Protection Details</h2>
                <p>Placeholder explaining the coverage limits, deductibles, claim process, and requirements for the cell phone protection benefit when paying the wireless bill with the card.</p>
              </section>


              <section id="comparison-competitors" className={`${styles.reviewSection} ${styles.dataVisualizationSection}`}>
                <h2>Amex Business Gold vs. The Competition</h2>
                <p>Placeholder for comparing the Amex Business Gold card with 2-3 key competitors (e.g., Chase Ink Business Preferred, Capital One Spark Miles for Business). Focus on annual fees, rewards structures, key benefits, and target audience.</p>
                {/* Phase 3: Visually engaging comparison chart will be styled by ReviewPage1.module.css */}
                <div className={styles.tableContainer}>
                  <table className={`${styles.statsTable} ${styles.comparisonTable}`}>
                    <thead>
                      <tr>
                        <th>Feature</th>
                        <th>Amex Business Gold</th>
                        <th>Competitor 1 (e.g., Ink Business Preferred)</th>
                        <th>Competitor 2 (e.g., Spark Miles)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td data-label="Feature">Annual Fee</td><td data-label="Amex Biz Gold">{reviewData.atAGlance.annualFee}</td><td data-label="Competitor 1">$95</td><td data-label="Competitor 2">$0 intro, then $95</td></tr>
                      <tr><td data-label="Feature">Key Rewards</td><td data-label="Amex Biz Gold">4X on 2 select categories</td><td data-label="Competitor 1">3X on travel, shipping, ads</td><td data-label="Competitor 2">2X miles on everything</td></tr>
                      {/* ... more comparison rows ... */}
                    </tbody>
                  </table>
                </div>
              </section>

              <section id="rewards-calculator-section" className={styles.reviewSection}>
                {/* Phase 3: Interactive Rewards Calculator */}
                <BusinessRewardsCalculator />
              </section>

              {/* Other sections based on the 20-section plan */}
              {/* For example: */}
              <section id="pros-cons" className={styles.reviewSection}>
                    <h2>Pros & Cons of the Amex Business Gold</h2>
                    <div className={styles.prosCons}>
                        <div className={styles.pros}>
                            <h3>Pros <span className={styles.customIcon}>👍</span></h3> {/* Phase 2: Custom Icons */}
                            <ul>
                                <li>Flexible 4X rewards in top 2 spending categories.</li>
                                <li>Valuable statement credits (Flexible Business, Walmart+).</li>
                                <li>Access to Membership Rewards program.</li>
                                <li>No Foreign Transaction Fees.</li>
                                <li>Cell Phone Protection.</li>
                            </ul>
                        </div>
                        <div className={styles.cons}>
                            <h3>Cons <span className={styles.customIcon}>👎</span></h3>
                            <ul>
                                <li>{reviewData.atAGlance.annualFee} annual fee.</li>
                                <li>$150,000 annual cap on 4X categories.</li>
                                <li>Credits require specific spending/enrollment.</li>
                                {/* List other cons */}
                            </ul>
                        </div>
                    </div>
                </section>

              {/* ... More placeholder sections to reach 20 ... */}
              <section id="expert-verdict" className={styles.reviewSection}>
                <h2>Final Verdict: Is the Amex Business Gold the Right Choice for Your Business?</h2>
                <p>Placeholder for a concluding summary, reiterating who the card is best for, its key strengths and weaknesses, and a final recommendation.</p>
                <div className={styles.disclaimerBox}> {/* From Blueprint */}
                    <p><strong>Disclaimer:</strong> Terms, conditions, rates, fees, rewards, benefits, and offers for credit cards are subject to change without notice. Please verify all information directly with the issuing bank or financial institution before applying. Content on this site is for informational purposes only and does not constitute financial advice.</p>
                </div>
              </section>

               <section id="eat-commitment" className={`${styles.reviewSection} ${styles.eatSection}`}>
                  <h2 dangerouslySetInnerHTML={{ __html: "Our Commitment to E-A-T: Expertise, Authority &amp; Trustworthiness"}}></h2>
                  <p>At <strong>{reviewData.author}</strong>, we are committed to providing expert, authoritative, and trustworthy reviews to help you make informed financial decisions for your business...</p>
                  {/* Add more E-A-T content as per your standards */}
              </section>


            </article>
          </div>
        </main>
      </div>

      <Footer />
    </>
  );
}

export default AmexBusinessGoldReviewPage;