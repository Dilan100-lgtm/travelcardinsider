// pages/cards/amex-business-gold.js
// !!! WARNING: THIS FILE IS A RESTRUCTURED TEMPLATE FOR THE AMEX BUSINESS GOLD CARD. !!!
// !!! IT INCORPORATES PHASE 2 & 3 BLUEPRINT ENHANCEMENTS AND USER-REQUESTED OPTIMIZATIONS. !!!
// !!! YOU MUST REPLACE ALL PLACEHOLDER CONTENT (ESPECIALLY THE 20 SECTIONS) AND VERIFY ALL CARD DETAILS, SCHEMA VALUES, URLs, ICONS & IMAGERY !!!

import React, { useState, useEffect, useCallback, useRef } from 'react';
import Head from 'next/head';
import Image from 'next/image'; // Keep for other images, hero will use CSS background
// import Link from 'next/link'; // Next.js Link can be used if client-side nav is critical, otherwise standard <a> for simplicity in this context
import styles from '../../styles/ReviewPage1.module.css'; // Using the new REVIEW CSS module
import Header from '../../components/Header'; // Assuming these components exist
import Footer from '../../components/Footer'; // Assuming these components exist

// --- Data object for Amex Business Gold Card ---
const reviewData = {
  cardName: 'American Express® Business Gold Card',
  title: 'Comprehensive Review: American Express® Business Gold Card - Elevating Business Rewards',
  description: 'In-depth analysis of the Amex Business Gold Card. Explore its 4X rewards, flexible business credits, travel perks, and see if its premium benefits justify the annual fee for your business.',
  keywords: 'American Express, Business Gold Card, Amex Business Gold, business rewards, travel rewards, advertising rewards, shipping rewards, software rewards, Membership Rewards, statement credits, business card review',
  author: 'TravelCardInsider', // *** REPLACE with your actual author/site name ***
  authorLinkedIn: 'https://www.linkedin.com/in/example-author', // *** REPLACE with actual LinkedIn URL ***
  authorTwitter: 'https://twitter.com/exampleauthor', // *** REPLACE with actual Twitter URL ***
  publisherName: 'TravelCardInsider Publishing', // *** REPLACE with your publisher name ***
  publisherLogoUrl: '/logo.png', // *** REPLACE with your actual logo URL ***
  lastUpdated: 'May 8, 2025',
  // Hero image paths for responsive background
  heroImageMobile: '/images/amex_business_gold_hero_mobile.webp', // *** REPLACE with 192px wide hero image ***
  heroImageDesktop: '/images/amex_business_gold_hero_desktop.webp', // *** REPLACE with 384px+ wide hero image ***
  heroImagePlaceholderColor: '#f0f4f8', // A light placeholder color
  // CDN pre-connect URL (replace with your actual CDN if applicable)
  cdnUrl: 'https://your-cdn-provider.com', // *** REPLACE with your CDN URL or remove if not using one ***

  imageUrl: '/images/amex_business_gold_card.png', // For schema and potentially other uses (non-hero)
  imageWidth: 480,
  imageHeight: 304,
  applyLink: 'https://www.americanexpress.com/us/credit-cards/business/business-gold-card/',
  ratesLink: 'https://www.americanexpress.com/us/credit-cards/business/business-gold-card/terms/',
  ratingValue: 8.5,

  atAGlance: {
    welcomeOffer: 'Example: Earn 70,000 Membership Rewards® Points after spending $10,000 in the first 3 months.',
    annualFee: '$375',
    rewardsHighlights: [
      { text: '4X points on top 2 eligible categories where your business spent the most each month (up to $150k/yr combined, then 1X)', icon: '🏆' },
      { text: '3X points on flights & prepaid hotels booked on amextravel.com', icon: '✈️' },
      { text: '1X points on other eligible purchases', icon: '🛍️' },
    ],
    keyBenefits: [
      { text: 'Up to $240 Flexible Business Credit ($20/month for eligible U.S. purchases at FedEx, Grubhub, office supply stores)', icon: '💼' },
      { text: 'Up to $155 Walmart+ Credit ($12.95/month, covers cost of monthly Walmart+ membership, subject to auto-renew)', icon: '🛒' },
      { text: 'No Foreign Transaction Fees', icon: '🌍' },
      { text: 'Cell Phone Protection', icon: '📱' },
    ],
    bestFor: 'Businesses with significant spending in categories like advertising, transit, U.S. tech providers, or that can maximize the flexible business and Walmart+ credits.',
    // Moved Pros/Cons here for "At a glance" box
    pros: [
        'Flexible 4X rewards in top 2 spending categories.',
        'Valuable statement credits (Flexible Business, Walmart+).',
        'Access to Membership Rewards program.',
        'No Foreign Transaction Fees.',
        'Cell Phone Protection.',
    ],
    cons: [
        '$375 annual fee.',
        '$150,000 annual cap on 4X categories.',
        'Credits require specific spending/enrollment.',
    ]
  },
};

const ratingCriteria = [
    'Flexible 4X Rewards Categories',
    'Welcome Bonus Value & Terms',
    'Value of Statement Credits (Flexible Business, Walmart+)',
    'Annual Fee vs. Overall Benefits',
    'Business-Oriented Perks & Protections'
];

const sections = [
  // { id: 'at-a-glance', title: 'At a Glance: Business Gold' }, // Integrated into Hero
  { id: 'introduction', title: 'Introduction & Value Proposition' }, // Combined with Hero
  { id: 'welcome-offer-details', title: 'Welcome Offer In-Depth' },
  { id: 'annual-fee-analysis', title: 'Annual Fee Breakdown' },
  { id: 'earning-rewards-main', title: 'Earning Rewards Deep Dive' }, // Main section for rewards
  { id: 'earning-rewards-4x', title: '4X Points: Top 2 Categories', isSubSection: true }, // H3
  { id: 'earning-rewards-other', title: 'Other Earning Rates (3X, 1X)', isSubSection: true }, // H3
  { id: 'rewards-calculator-inline', title: 'Estimate Your Rewards Potential', isSubSection: true}, // H3 for inline calculator
  { id: 'membership-rewards-value', title: 'Membership Rewards® Program Value' },
  { id: 'statement-credits-overview', title: 'Maximizing Statement Credits'}, // Main section for credits
  { id: 'flexible-business-credit', title: '$240 Flexible Business Credit', isSubSection: true }, // H3
  { id: 'walmart-plus-credit', title: '$155 Walmart+ Credit', isSubSection: true }, // H3
  { id: 'travel-perks-benefits', title: 'Travel Perks & Protections' },
  { id: 'business-management-tools', title: 'Business Management Tools' },
  { id: 'card-protections', title: 'Cardholder Protections Overview'}, // Main section for protections
  { id: 'cell-phone-protection', title: 'Cell Phone Protection Details', isSubSection: true }, // H3
  { id: 'purchase-extended-warranty', title: 'Purchase & Warranty Protections', isSubSection: true }, // H3
  { id: 'comparison-competitors', title: 'Comparison with Competitors' },
  // { id: 'pros-cons', title: 'Pros & Cons Summary' }, // Moved to At a Glance / Hero
  { id: 'who-is-it-for', title: 'Is This Card Right for Your Business?' },
  { id: 'application-process', title: 'Application Tips & Process' },
  { id: 'expert-verdict', title: 'Our Expert Verdict' },
  { id: 'eat-commitment', title: 'E-A-T Commitment' },
];

// --- Interactive Rewards Calculator Component ---
const BusinessRewardsCalculator = ({isMiniVersion = false}) => {
  const [spending, setSpending] = useState({
    otherEligible: '',
    flightsAmexTravel: '',
    other: ''
  });
  const [estimatedPoints, setEstimatedPoints] = useState(0);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSpending(prev => ({ ...prev, [name]: valueAsNumber(value) })); // Ensure numbers
  };
  
  // Helper to convert input value to number, defaulting to 0 if empty or invalid
  const valueAsNumber = (value) => {
    const num = parseFloat(value);
    return isNaN(num) ? 0 : num;
  };


  const calculatePoints = () => {
    const top2CombinedSpend = spending.otherEligible || 0;
    const flights = spending.flightsAmexTravel || 0;
    const otherSpend = spending.other || 0;

    const annualTop2Spend = Math.min(top2CombinedSpend * 12, 150000);
    const pointsFromTop2 = annualTop2Spend * 4;
    const pointsFromFlights = (flights * 12) * 3;
    const pointsFromOther = (otherSpend * 12) * 1;

    setEstimatedPoints(pointsFromTop2 + pointsFromFlights + pointsFromOther);
  };
  
  useEffect(() => {
    // Auto-calculate on spending change for a more interactive feel
    if (isMiniVersion || spending.otherEligible || spending.flightsAmexTravel || spending.other) {
        calculatePoints();
    }
  }, [spending, isMiniVersion]);


  return (
    <div className={`${styles.rewardsCalculator} ${isMiniVersion ? styles.miniCalculator : ''}`}>
      {!isMiniVersion && <h4>Estimate Your Annual Rewards</h4>}
      {!isMiniVersion && <p>Enter your estimated monthly spending in key business categories.</p>}
      <div className={styles.calcGrid}>
        <div>
          <label htmlFor="calc-otherEligible">Combined Monthly Spend in Top 2 Categories (e.g., U.S. Advertising, U.S. Software, U.S. Transit, etc.):</label>
          <input type="number" id="calc-otherEligible" name="otherEligible" value={spending.otherEligible || ''} onChange={handleInputChange} placeholder="e.g., 2000" />
        </div>
        <div>
          <label htmlFor="calc-flightsAmexTravel">Monthly Flights/Prepaid Hotels (AmexTravel.com):</label>
          <input type="number" id="calc-flightsAmexTravel" name="flightsAmexTravel" value={spending.flightsAmexTravel || ''} onChange={handleInputChange} placeholder="e.g., 500" />
        </div>
         <div>
          <label htmlFor="calc-other">Other Monthly Business Spending:</label>
          <input type="number" id="calc-other" name="other" value={spending.other || ''} onChange={handleInputChange} placeholder="e.g., 1000" />
        </div>
      </div>
      {!isMiniVersion && <button onClick={calculatePoints} className={`${styles.btn} ${styles.btnApplySmall}`} style={{marginTop: '1rem'}}>Calculate Points</button>}
      
      {estimatedPoints > 0 && (
        <div className={styles.calculatedResult}>
          {isMiniVersion ? "You’d earn ≈ " : "Estimated Annual Points: "}
          <strong>{estimatedPoints.toLocaleString()} pts</strong>
          {!isMiniVersion && " MR Points"}
        </div>
      )}
      {isMiniVersion && <p><a href="#rewards-calculator-full" className={styles.miniCalcLink}>Use full calculator for deeper personalization &rarr;</a></p>}
      {!isMiniVersion && <small>This is a simplified estimate. Actual points depend on meeting specific category requirements and caps. Refer to card terms.</small>}
    </div>
  );
};

const StatementCreditsChart = ({ credits }) => {
    const totalValue = credits.reduce((sum, credit) => sum + credit.value, 0);

    return (
        <div className={styles.statementCreditsChart}>
            <h4>Visualizing Annual Credits (Up to ${totalValue})</h4>
            <div className={styles.chartBars}>
                {credits.map(credit => (
                    <div key={credit.name} className={styles.chartBarContainer}>
                        <div className={styles.chartBarLabel}>
                            {credit.icon || '💰'} {credit.name} (${credit.value})
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

// Breadcrumb Component
const Breadcrumbs = ({ items }) => (
  <nav aria-label="Breadcrumb" className={styles.breadcrumbs}>
    <ol itemScope itemType="https://schema.org/BreadcrumbList">
      {items.map((item, index) => (
        <li key={item.name} itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
          {index < items.length - 1 ? (
            <a itemProp="item" href={item.href}>
              <span itemProp="name">{item.name}</span>
            </a>
          ) : (
            <span itemProp="name" aria-current="page">{item.name}</span>
          )}
          <meta itemProp="position" content={String(index + 1)} />
          {index < items.length - 1 && <span className={styles.breadcrumbSeparator}>&rsaquo;</span>}
        </li>
      ))}
    </ol>
  </nav>
);


function AmexBusinessGoldReviewPage() {
  const [showRatingInfo, setShowRatingInfo] = useState(false);
  const tooltipRef = useRef(null);
  const [activeSection, setActiveSection] = useState('');
  const tocRef = useRef(null); // Ref for the ToC itself for potential future interactions
  const mainContentRef = useRef(null); // Ref for the main content area containing sections
  const [isTocCollapsed, setIsTocCollapsed] = useState(true); // For collapsible ToC on mobile

  const breadcrumbItems = [
    { name: 'Home', href: '/' }, // *** REPLACE with actual Home URL ***
    { name: 'Business Credit Cards', href: '/business-cards' }, // *** REPLACE with actual category URL ***
    { name: reviewData.cardName, href: `/cards/${reviewData.cardName.toLowerCase().replace(/[^a-z0-9]+/g, '-')}` } // Auto-generate slug
  ];

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

  // IntersectionObserver for ToC highlighting
 useEffect(() => {
    const observerCallback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setActiveSection(entry.target.id);
            }
        });
    };

    // Adjust rootMargin: top margin is negative of sticky ToC height + some offset
    // For example, if ToC is sticky at top: 64px, and header is 56px, total offset ~120px + a bit more for active highlighting trigger point.
    // The bottom margin can be large negative to ensure last sections are caught.
    const observerOptions = {
        rootMargin: '-150px 0px -70% 0px', // Fine-tune this based on actual sticky top position and desired highlighting behavior
        threshold: 0 // Trigger as soon as any part of the section enters the viewport within the rootMargin
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const currentSections = mainContentRef.current?.querySelectorAll('section[id]');
    currentSections?.forEach(section => observer.observe(section));

    return () => currentSections?.forEach(section => observer.unobserve(section));
}, []);


  const siteUrl = "https://www.travelcardinsider.com"; // *** REPLACE with your actual site URL ***
  const pageUrl = `${siteUrl}/cards/amex-business-gold`; // *** REPLACE with your actual page URL ***

  const structuredData = {
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
        "price": reviewData.atAGlance.annualFee.replace('$', ''),
        "availability": "https://schema.org/InStock",
      },
      "additionalProperty": [
        { "@type": "PropertyValue", "name": "Annual Fee", "value": reviewData.atAGlance.annualFee },
        { "@type": "PropertyValue", "name": "Foreign Transaction Fee", "value": "None" }
      ]
    },
    "reviewRating": { "@type": "Rating", "ratingValue": reviewData.ratingValue.toString(), "bestRating": "10", "worstRating": "1" },
    "name": reviewData.title,
    "author": {
        "@type": "Person", // Changed to Person for specific author
        "name": reviewData.author,
        "sameAs": [ // Add links to author's social profiles or about page
            reviewData.authorLinkedIn,
            reviewData.authorTwitter,
            // `${siteUrl}/about/${reviewData.author.toLowerCase().replace(' ', '-')}` // Example author page
        ].filter(Boolean) // Filter out empty links
    },
    "datePublished": "2024-01-15", // *** REPLACE with actual publish date ***
    "dateModified": reviewData.lastUpdated,
    "description": reviewData.description,
    "publisher": {
        "@type": "Organization",
        "name": reviewData.publisherName, // Use specific publisher name
        "logo": { "@type": "ImageObject", "url": `${siteUrl}${reviewData.publisherLogoUrl}` },
        "sameAs": [ // Add links to publisher's social profiles or main site
            siteUrl,
            // Add publisher's LinkedIn, Twitter etc. if available
        ]
    },
    "mainEntityOfPage": pageUrl,
  };
  
  const businessGoldCredits = [
      { name: 'Flexible Business Credit', value: 240, icon: '💼', color: 'var(--color-primary-accent)' },
      { name: 'Walmart+ Credit', value: 155, icon: '🛒', color: 'var(--color-secondary-accent)' },
  ];

  // Style for hero background image
  const heroBackgroundStyle = {
    // Using CSS variables defined in ReviewPage1.module.css for breakpoints
    // The actual background image will be set via CSS classes for responsiveness
    backgroundColor: reviewData.heroImagePlaceholderColor, // Fallback color
  };


  return (
    <>
      <Head>
        <title>{reviewData.title}</title>
        <meta name="description" content={reviewData.description} />
        <meta name="keywords" content={reviewData.keywords} />
        <meta name="author" content={reviewData.author} />
        <link rel="canonical" href={pageUrl} />
        {reviewData.cdnUrl && <link rel="preconnect" href={reviewData.cdnUrl} />}
        {/* Preload responsive hero images */}
        <link rel="preload" as="image" href={reviewData.heroImageMobile} media="(max-width: 767px)" />
        <link rel="preload" as="image" href={reviewData.heroImageDesktop} media="(min-width: 768px)" />

        <meta property="og:title" content={reviewData.title} />
        <meta property="og:description" content={reviewData.description} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:image" content={structuredData.itemReviewed.image} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
        {/* Schema for BreadcrumbList */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
            __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                "itemListElement": breadcrumbItems.map((item, index) => ({
                    "@type": "ListItem",
                    "position": index + 1,
                    "name": item.name,
                    "item": item.href.startsWith('http') ? item.href : `${siteUrl}${item.href}`
                }))
            })
        }} />
      </Head>

      <Header /> {/* Assuming Header component handles its own fixed/sticky behavior */}
      
      {/* Sticky Secondary CTA */}
      <div className={styles.stickyCtaBar}>
        <span className={styles.stickyCtaText}>{reviewData.cardName}</span>
        <a href={reviewData.applyLink} className={`${styles.btn} ${styles.btnApplySmall} ${styles.stickyApplyBtn}`} target="_blank" rel="noopener noreferrer sponsored">
            Apply Now <span className={styles.lockIcon}>🔒</span>
        </a>
      </div>


      <div className={styles.reviewPageLayout}>
        {/* Collapsible Sticky Table of Contents */}
        <nav className={`${styles.stickyToc} ${isTocCollapsed ? styles.tocCollapsed : styles.tocExpanded}`} ref={tocRef}>
          <button className={styles.tocToggle} onClick={() => setIsTocCollapsed(!isTocCollapsed)} aria-expanded={!isTocCollapsed} aria-controls="toc-list">
            {isTocCollapsed ? 'Show Contents ☰' : 'Hide Contents ✕'}
          </button>
          <div id="toc-list" className={styles.tocListWrapper}>
            <h3>Table of Contents</h3>
            <ul>
              {sections.map(section => (
                <li key={section.id} className={`${activeSection === section.id ? styles.activeTocItem : ''} ${section.isSubSection ? styles.tocSubItem : ''}`}>
                  <a href={`#${section.id}`}>{section.title}</a>
                </li>
              ))}
            </ul>
            {/* Removed Apply Now button from ToC as per "CTA Dilution" fix */}
          </div>
        </nav>

        <main className={styles.mainContent} ref={mainContentRef}>
          <Breadcrumbs items={breadcrumbItems} />
          <div className={styles.reviewContainer}> {/* This container will have max-width: 720px; margin: auto; */}
            <article>
              {/* Hero Section with CSS Background Image */}
              <header
                id="introduction" // Added ID for ToC
                className={`${styles.heroSection} ${styles.heroBackground}`} // Added heroBackground for image
                style={heroBackgroundStyle} // Placeholder color, actual image via CSS
                role="banner"
              >
                <div className={styles.heroOverlay}></div> {/* Overlay for text contrast */}
                <div className={styles.heroContent}> {/* This will contain text and CTAs */}
                    <h1>{reviewData.title}</h1>
                    <p className={styles.heroSubtitle}>
                        Maximize Your Business Rewards with Flexible Earning & Premium Perks.
                    </p>
                    <div className={styles.authorDate}>
                        <span>By {reviewData.author}</span> | <span>Last Updated: {reviewData.lastUpdated}</span>
                    </div>
                    {/* Primary CTA in Hero */}
                    <div className={styles.heroCta}>
                        <a href={reviewData.applyLink} className={`${styles.btn} ${styles.btnApply} ${styles.heroApplyBtn}`} target="_blank" rel="noopener noreferrer sponsored">
                        Apply Securely Now <span className={styles.lockIcon}>🔒</span>
                        </a>
                        {/* Removed secondary "Rates & Fees" button from hero to reduce CTA dilution, it's in the sticky bar if needed or footer */}
                    </div>

                    {/* "At a Glance" / Pros & Cons Box integrated into Hero area */}
                    <div className={`${styles.atAGlanceBoxInline}`}> {/* New class for styling */}
                        <h2>{reviewData.cardName}: At a Glance</h2>
                        <div className={styles.glanceGridInline}>
                            <div><strong>Welcome Offer:</strong> {reviewData.atAGlance.welcomeOffer}</div>
                            <div><strong>Annual Fee:</strong> <span className={styles.glanceFee}>{reviewData.atAGlance.annualFee}</span></div>
                            <div>
                                <strong>Top Rewards:</strong>
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
                            <div className={styles.glanceProsCons}>
                                <div className={styles.pros}>
                                    <h3>Pros <span className={styles.customIcon}>👍</span></h3>
                                    <ul>{reviewData.atAGlance.pros.map(pro => <li key={pro}>{pro}</li>)}</ul>
                                </div>
                                <div className={styles.cons}>
                                    <h3>Cons <span className={styles.customIcon}>👎</span></h3>
                                    <ul>{reviewData.atAGlance.cons.map(con => <li key={con}>{con}</li>)}</ul>
                                </div>
                            </div>
                            <div className={styles.glanceBestFor}><strong>Best For:</strong> {reviewData.atAGlance.bestFor}</div>
                        </div>
                         {/* Rating Section */}
                        <div className={styles.ratingSectionHero}>
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
                </div>
              </header>

              {/* Original Image (non-hero) and Rating Section - This can be removed if hero image is sufficient */}
              {/* Or kept if a different card image is desired within the content */}
              {/*
              <div className={styles.heroImageContainer}>
                  <Image
                    src={reviewData.imageUrl}
                    alt={reviewData.cardName}
                    width={reviewData.imageWidth}
                    height={reviewData.imageHeight}
                    className={styles.cardImage}
                    priority={false} // No longer priority as hero is CSS bg
                  />
              </div>
              */}


              {/* Content Sections */}
              <section id="welcome-offer-details" className={styles.reviewSection}>
                <h2>Welcome Offer In-Depth</h2>
                <p>Placeholder for detailed analysis of the current American Express Business Gold Card welcome offer, including spending requirements, timeframe, and potential value. Discuss how it compares to other business card offers.</p>
              </section>

              <section id="annual-fee-analysis" className={styles.reviewSection}>
                <h2>Annual Fee Breakdown: Is {reviewData.atAGlance.annualFee} Justified?</h2>
                <p>Placeholder for discussing the {reviewData.atAGlance.annualFee} annual fee. Analyze how the card's benefits and credits can offset this cost. Compare its fee structure to key competitors in the business card market.</p>
                 <StatementCreditsChart credits={businessGoldCredits} />
              </section>

              {/* Earning Rewards Main Section (H2) */}
              <section id="earning-rewards-main" className={styles.reviewSection}>
                <h2>Earning Rewards Deep Dive</h2>
                <p>The American Express® Business Gold Card offers a dynamic rewards structure designed to adapt to your business's spending patterns. Here's how you can maximize your Membership Rewards® points:</p>
                {/* Sub-section for 4X (H3) */}
                <div id="earning-rewards-4x" className={styles.subSection}> {/* Using div for H3 section to avoid full section styling if not needed */}
                    <h3>4X Points: Top 2 Categories</h3>
                    <p>Placeholder for detailed explanation of the 4X Membership Rewards® points earning structure. List all eligible categories and explain how the top two are determined. Discuss the annual cap of $150,000 on combined purchases for these categories.</p>
                    <ul className={styles.featureList}>
                        <li><span className={styles.customIcon}>🌟</span> Advertising in select media (online, TV, radio)</li>
                        <li><span className={styles.customIcon}>💻</span> U.S. purchases of electronics goods, software, and cloud solutions from select technology providers.</li>
                        <li><span className={styles.customIcon}>⛽</span> U.S. purchases at gas stations.</li>
                        <li><span className={styles.customIcon}>🍽️</span> U.S. purchases at restaurants, including takeout and delivery.</li>
                        <li><span className={styles.customIcon}>🚚</span> Transit purchases including trains, taxicabs, rideshare services, ferries, tolls, parking, buses, and subways.</li>
                        <li><span className={styles.customIcon}>📦</span> Monthly wireless telephone service charges made directly from a wireless telephone service provider in the U.S.</li>
                    </ul>
                    <p><em>Note: Your business will earn 4X points in the 2 categories (from the list above) where it spends the most each billing cycle, on up to $150,000 in combined purchases from these 2 categories per calendar year. Then 1X.</em></p>
                </div>
                {/* Sub-section for Other Earning (H3) */}
                <div id="earning-rewards-other" className={styles.subSection}>
                    <h3>Other Earning Rates (3X, 1X)</h3>
                    <p>Beyond the flexible 4X categories, you can also earn points on other specific purchases...</p>
                </div>
                {/* Mini Rewards Calculator (H3) */}
                <div id="rewards-calculator-inline" className={styles.subSection}>
                    <h3>Estimate Your Rewards Potential</h3>
                    <BusinessRewardsCalculator isMiniVersion={true} />
                </div>
              </section>


              <section id="membership-rewards-value" className={styles.reviewSection}>
                <h2>Membership Rewards® Program Value for Businesses</h2>
                <p>Placeholder for explaining the value of MR points, transfer partners, redemption options (flights, hotels, statement credits, gift cards), and strategies for businesses to maximize point value.</p>
              </section>
              
              {/* Statement Credits Main Section (H2) */}
              <section id="statement-credits-overview" className={styles.reviewSection}>
                <h2>Maximizing Statement Credits</h2>
                <p>The Amex Business Gold offers several statement credits that can significantly reduce the net cost of the card. Here's a look at the key credits:</p>
                {/* Sub-section for Flexible Business Credit (H3) */}
                <div id="flexible-business-credit" className={styles.subSection}>
                    <h3>$240 Flexible Business Credit</h3>
                    <p>Placeholder for explaining how the $20 monthly credit works, eligible purchase categories (FedEx, Grubhub, U.S. office supply stores), enrollment requirements, and tips for maximizing this benefit.</p>
                </div>
                {/* Sub-section for Walmart+ Credit (H3) */}
                <div id="walmart-plus-credit" className={styles.subSection}>
                    <h3>$155 Walmart+ Credit</h3>
                    <p>Placeholder for details on the Walmart+ membership credit, how it applies, benefits of Walmart+, and any enrollment or usage terms. This is $12.95 per month plus applicable taxes on one membership.</p>
                </div>
              </section>


              <section id="travel-perks-benefits" className={styles.reviewSection}>
                <h2>Business Travel Perks & Protections</h2>
                <p>Placeholder for travel benefits like The Hotel Collection, travel insurance (baggage, car rental - specify if primary/secondary), no foreign transaction fees, etc.</p>
              </section>
              
              <section id="business-management-tools" className={styles.reviewSection}>
                <h2>Streamlining Operations: Business Management Tools</h2>
                <p>Placeholder to detail tools like year-end summaries, employee cards (and any associated fees/benefits), account alerts, integration with accounting software (e.g., QuickBooks).</p>
              </section>

              {/* Card Protections Main Section (H2) */}
              <section id="card-protections" className={styles.reviewSection}>
                <h2>Cardholder Protections Overview</h2>
                <p>This card comes with a suite of protections to give you peace of mind for your business purchases and travel.</p>
                {/* Sub-section for Cell Phone Protection (H3) */}
                <div id="cell-phone-protection" className={styles.subSection}>
                    <h3>Cell Phone Protection Details</h3>
                    <p>Placeholder explaining the coverage limits, deductibles, claim process, and requirements for the cell phone protection benefit when paying the wireless bill with the card.</p>
                </div>
                {/* Sub-section for Purchase & Warranty (H3) */}
                <div id="purchase-extended-warranty" className={styles.subSection}>
                    <h3>Purchase & Extended Warranty Protections</h3>
                    <p>Details on purchase protection against damage or theft, and extended warranty coverage for eligible items.</p>
                </div>
              </section>


              <section id="comparison-competitors" className={`${styles.reviewSection} ${styles.dataVisualizationSection}`}>
                <h2>Amex Business Gold vs. The Competition</h2>
                <p>Placeholder for comparing the Amex Business Gold card with 2-3 key competitors (e.g., Chase Ink Business Preferred, Capital One Spark Miles for Business). Focus on annual fees, rewards structures, key benefits, and target audience.</p>
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
                    </tbody>
                  </table>
                </div>
              </section>
              
              {/* Full Rewards Calculator Section (if a separate, more detailed version is desired) */}
              {/* <section id="rewards-calculator-full" className={styles.reviewSection}>
                <h2>In-Depth Rewards Calculator</h2>
                <BusinessRewardsCalculator isMiniVersion={false} />
              </section> */}


              <section id="who-is-it-for" className={styles.reviewSection}>
                <h2>Is This Card Right for Your Business?</h2>
                <p>Placeholder content...</p>
              </section>

              <section id="application-process" className={styles.reviewSection}>
                <h2>Application Tips & Process</h2>
                <p>Placeholder content...</p>
              </section>


              <section id="expert-verdict" className={styles.reviewSection}>
                <h2>Our Expert Verdict</h2>
                <p>Placeholder for a concluding summary, reiterating who the card is best for, its key strengths and weaknesses, and a final recommendation.</p>
                {/* CLS from ad placeholder: If ads are used, ensure placeholders have fixed dimensions or use CSS aspect-ratio / min-height to prevent layout shifts. Example: <div style={{minHeight: '250px', width: '300px', backgroundColor: '#eee'}}>Ad Placeholder</div> */}
                <div className={styles.disclaimerBox}>
                    <p><strong>Disclaimer:</strong> Terms, conditions, rates, fees, rewards, benefits, and offers for credit cards are subject to change without notice. Please verify all information directly with the issuing bank or financial institution before applying. Content on this site is for informational purposes only and does not constitute financial advice.</p>
                </div>
              </section>

               <section id="eat-commitment" className={`${styles.reviewSection} ${styles.eatSection}`}>
                  <h2 dangerouslySetInnerHTML={{ __html: "Our Commitment to E-A-T: Expertise, Authority &amp; Trustworthiness"}}></h2>
                  <p>At <strong>{reviewData.author}</strong>, we are committed to providing expert, authoritative, and trustworthy reviews to help you make informed financial decisions for your business...</p>
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
