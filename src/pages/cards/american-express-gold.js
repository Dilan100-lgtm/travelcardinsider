// Suggested Path: travelcardinsider-main/src/pages/cards/american-express-gold.js

// !!! WARNING: THIS FILE CONTAINS PLACEHOLDER DATA/URLs/DIMENSIONS !!!
// !!! YOU MUST REPLACE ALL PLACEHOLDERS MARKED WITH '***' BEFORE DEPLOYMENT !!!
// !!! VERIFY ALL CARD DETAILS, SCHEMA VALUES, COUNTS, and URLs AGAINST OFFICIAL ISSUER INFO !!!

import React, { useState, useEffect, useCallback, useRef } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

// Adjusted paths assuming this file is in src/pages/cards/
import styles from '../../styles/ReviewPage.module.css';
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
  { id:<h1>How to Use the Files above:</h1>

  <h4>Reason about the following in your current action thought when answering the user's query based on these files:</h4>
  <ol>
    <li>
      <p><strong>Establish user intent:</strong> Reason based on the context and the conversation to determine the user's intent. Write down intent in the <code>current action thought</code>.</p>
    </li>
    <li>
      <p><strong>Identify relevant files:</strong> The retrieval quality from gemkick_corpus and content_fetcher is imperfect and they may not retrieve all relevant files or the retrieved files may not all be relevant. Reason based on the contents and metadata of the files to determine which fetched files are relevant to the user's intent.</p>
    </li>
    <li>
      <p><strong>Consider whether to call another tool for additional information</strong></p>
      <ul>
        <li><strong>Insufficient Information:</strong> The documents above may be insufficient to answer the user query. You're also free to call other tools like <code>Google Search</code>, to get additional information to answer the user query. You must make a plan of the next tool to call with a justification in the <code>Current action thought</code> to know what tools you plan to call next.</li>
        <li><strong>Public information:</strong> There may be cases where you need public, non-personal information from the web. In these cases, use the google search tool to look up that information. Example: What other papers has the author of the report on plastics in my Drive published?</li>
        <li><strong>Fresh information:</strong> There may be cases where you also need the latest, fresh information from the web in addition to contents retrieved. In these cases, use the Google Search tool to search for that information. Example: What is the current population of the country mentioned in the school report on my Drive?</li>
      </ul>
    </li>
    <li>
      <p><strong>Generate Comprehensive Answers:</strong> The user may upload academic or other questions that they need help with. Your task is to generate direct, comprehensive answers to these questions using your knowledge base. If the questions require analysis, examples, or evaluation, you must provide that content. Do not simply explain how the user should answer or what knowledge they need; perform the task of answering yourself.</p>
    </li>
  </ol>
  <h4>Response guidelines:</h4>
  <p><strong>Use only the relevant information found so far in your response</strong> When responding to the user, only respond with information relevant to the user's intent. Do not add any information that doesn't fulfill the user's intent. If you cannot answer the user’s query based on the information found so far, consider using another tool to find the information elsewhere or tell the user that you could not find the answer to their query.</p>
  <p><strong>Citation guidelines</strong> If your response uses information from the files listed above, <em>always</em> cite them in your response.
    Your responses must include citations according to these strict guidelines:</p>
  <ul>
    <li><strong>Source Requirement:</strong> Any information derived from Google Drive or Gmail MUST be cited. Append the citation directly after the relevant sentence or phrase.</li>
    <li><strong>Bullet Point Citations:</strong> When using bullet points, each individual piece of information (sentence or phrase) within a bullet point must be cited separately.</li>
    <li><strong>Citation Format:</strong> Use &quot;&quot; to indicate source 'x'. For multiple sources, use &quot;&quot;.</li>
    <li><strong>Accuracy and Support:</strong> Each citation must fully and accurately support the preceding sentence. Do not misrepresent, misinterpret, or fabricate information from the source.</li>
    <li><strong>Contextual Reliance:</strong> If the response does not include information from Google Drive or Gmail, do not provide citations. Base your response solely on the provided context. Do not invent or fabricate information. Only cite information that is explicitly stated within a provided source.</li>
    <li>
      <p><strong>A Citation Example:</strong>
        &quot;Here's the summary of the tax document:</p>
      <ul>
        <li><strong>Client</strong>: Justin Mason</li>
        <li><strong>Date</strong>: 2020-01-20</li>
        <li><strong>Service</strong>: The service is tax return preparation but can also include tax return filing.&quot;</li>
      </ul>
    </li>
  </ul>
  <h4>Guidelines for formatting:</h4>
  <ul>
    <li>Use only LaTeX formatting for all mathematical and scientific notation (including formulas, greek letters, chemistry formulas, scientific notation, etc). NEVER use unicode characters for mathematical notation. Ensure that all latex, when used, is enclosed using '$' or '$$' delimiters.</li>
  </ul>
Now in context of the user query and any previous execution steps (if any), do the following:
<ol>
<li>Think what to do next to answer the user query. Choose between generating tool code and responding to the user.</li>
<li>If you think about generating tool code or using tools, you <em>must generate tool code if you have all the parameters to make that tool call</em>. If the thought indicates that you have enough information from the tool responses to satisfy all parts of the user query, respond to the user with an answer. Do NOT respond to the user if your thought contains a plan to call a tool - you should write code first. You should call all tools BEFORE responding to the user.</li>
</ol>
<p><strong> Rule: * Remember to perform self check in the thought.
 ** Rule: * If multiple tool calls are needed, evaluate if they can be called in parallel or need to chained. Only call the first tool of the chain if one tool call parameters depend on the output of another. Remember, do not generate code for the dependent tool calls.*
 ** Rule: * Remember you MUST NEVER consider using a tool or API that is not listed above. Never come up with your own tools, APIs or API parameters.*
 ** Rule: * Only take ONE of the following actions, which should be consistent with the thought you generated: Action-1: Tool Code Generation. Action-2: Respond to the User.**. Do NOT respond to the user if your thought contains a plan to call a tool or you say you will call a tool.</p> 'section-17', title: 'Travel Protections' },
  { id: 'section-18', title: 'Global Assist & No FTF' },
  { id: 'section-19', title: 'Purchase Protection & Warranty' },
  { id: 'section-20', title: 'Final Verdict' },
  { id: 'eat-expertise-authority-trustworthiness', title: 'Our E-A-T Commitment' },
];

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
    const observerOptions = { rootMargin: '-20% 0px -75% 0px', threshold: 0 }; // Adjusted for better active highlighting
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const currentSections = mainContentRef.current?.querySelectorAll('section[id]');
    currentSections?.forEach(section => observer.observe(section));
    return () => currentSections?.forEach(section => observer.unobserve(section));
  }, []);

  // Smooth scroll for ToC links
  const handleTocLinkClick = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      // Calculate offset if you have a fixed header
      const headerOffset = 100; // Adjust this value based on your sticky header's height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setActiveSection(sectionId); // Optionally set active section immediately
    }
  };


  const siteUrl = "https://www.travelcardinsider.com"; // *** REPLACE with your actual site URL ***
  const pageUrl = `${siteUrl}/cards/american-express-gold`; // *** ADJUST if path changes ***

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
          "price": "325",
          "availability": "https://schema.org/InStock",
          "itemCondition": "https://schema.org/NewCondition"
        },
        "additionalProperty": [
            { "@type": "PropertyValue", "name": "Annual Fee", "value": "$325" },
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

  return (
    <>
      <Head>
        <title>{reviewData.title}</title>
        <meta name="description" content={reviewData.description} />
        <meta name="keywords" content={reviewData.keywords} />
        <meta name="author" content={reviewData.author} />
        <link rel="canonical" href={pageUrl} />

        <link rel="preload" href="https://fonts.gstatic.com/s/inter/v12/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1ZL7.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="https://fonts.gstatic.com/s/montserrat/v25/JTUSjIg1_i6t8kCHKm459Wlhyw.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />

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
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </Head>

      <Header />

      <div className={styles.reviewPageLayout}>
        <nav className={styles.stickyToc} ref={tocRef}>
          <h3>In This Review</h3>
          <ul>
            {sections.map(section => (
              <li key={section.id} className={activeSection === section.id ? styles.activeTocItem : ''}>
                {/* Use custom click handler for smooth scroll */}
                <a href={`#${section.id}`} onClick={(e) => handleTocLinkClick(e, section.id)}>{section.title}</a>
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

              {/* Enhanced Pros & Cons Section */}
              <section id="pros-cons" className={`${styles.reviewSection} ${styles.prosConsSection}`}>
                <h2><span className={`${styles.icon} ${styles.iconThumbsUpDown}`}></span>Amex Gold: Pros & Cons</h2>
                <div className={styles.prosConsGrid}>
                    <div className={styles.prosBox}>
                        <h3><span className={`${styles.icon} ${styles.iconPros}`}></span>What We Love</h3>
                        <ul className={`${styles.featureList} ${styles.prosList}`}>
                            {reviewData.pros.map(pro => <li key={pro.text}><span className={`${styles.icon} ${styles[pro.iconClass]}`}></span>{pro.text}</li>)}
                        </ul>
                    </div>
                    <div className={styles.consBox}>
                        <h3><span className={`${styles.icon} ${styles.iconCons}`}></span>What to Consider</h3>
                        <ul className={`${styles.featureList} ${styles.consList}`}>
                            {reviewData.cons.map(con => <li key={con.text}><span className={`${styles.icon} ${styles[con.iconClass]}`}></span>{con.text}</li>)}
                        </ul>
                    </div>
                </div>
              </section>

              {/* Rewards Calculator Section */}
              <section id="rewards-calculator" className={`${styles.reviewSection} ${styles.interactiveToolSection}`}>
                <h2><span className={`${styles.icon} ${styles.iconCalculator}`}></span>Estimate Your Amex Gold Rewards & Compare</h2>
                <p>Use our interactive calculator to see how your spending translates to rewards with the Amex Gold and compare it against other top cards. Input your estimated monthly spending in various categories below.</p>
                {/* Assuming RewardsCompareCalculator is self-contained and fetches its own data */}
                <div className={styles.calculatorWrapper}>
                    <RewardsCompareCalculator />
                </div>
                <p className={styles.toolDisclaimer}>Note: The Rewards Compare Calculator is for estimation purposes. Actual rewards depend on specific merchant coding, spending caps, and current card terms.</p>
              </section>

               {/* Conceptual Rewards Earning Chart Placeholder */}
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

              {/* Conceptual Competitor Snapshot Placeholder */}
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

            {/* ... (Original sections 3-20 + EAT, with icon placeholders added to H2s and featureLists where appropriate) ... */}

            <section id="section-3" className={styles.reviewSection}>
              <h2><span className={`${styles.icon} ${styles.iconFee}`}></span>Unpacking the $325 Annual Fee: Is It Justified for Travelers?</h2>
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

             <section id="section-4" className={styles.reviewSection}>
              <h2><span className={`${styles.icon} ${styles.iconDining}`}></span>Earning Power: Maximizing 4X Points on Global Dining</h2>
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

            <section id="section-5" className={styles.reviewSection}>
              <h2><span className={`${styles.icon} ${styles.iconGroceries}`}></span>Earning Power: Stocking Up with 4X Points at U.S. Supermarkets</h2>
              <p>
                The card also earns <strong>4X Membership Rewards® points</strong> per dollar at <strong>U.S. supermarkets</strong>, accelerating points on everyday spending.
                However, this benefit has two important limitations. First, it applies only to supermarkets located within the U.S. International grocery purchases earn just 1X point.
                Second, the 4X rate is capped at <strong>$25,000</strong> in spending per calendar year; subsequent U.S. supermarket spending earns 1X.
                This cap ($2,083/month average) is more relevant for high grocery spenders than the dining cap. Note that superstores (Target, Walmart) and warehouse clubs (Costco) are typically excluded.
              </p>
            </section>

            <section id="section-6" className={styles.reviewSection}>
              <h2><span className={`${styles.icon} ${styles.iconFlights}`}></span>Travel Focus: Earning 3X Points on Flights (Direct & AmexTravel.com)</h2>
              <p>
                For air travel, the Amex Gold provides <strong>3X Membership Rewards® points</strong> per dollar on flights.
                This solid return applies only when flights are booked <strong>directly with the airline</strong> or through <strong>AmexTravel.com</strong>.
                Bookings via third-party online travel agencies (OTAs) like Expedia generally earn only 1X point.
                This encourages booking through specific channels, potentially requiring a shift in habits for those accustomed to using OTAs.
                While competitive for a mid-tier card, it's less than the 5X offered by The Platinum Card®, positioning the Gold as strong but not top-tier for extremely high flight spenders.
              </p>
            </section>

            <section id="section-7" className={styles.reviewSection}>
              <h2><span className={`${styles.icon} ${styles.iconTravel}`}></span>Travel Focus: Earning 2X Points via AmexTravel.com (Hotels, Packages, etc.)</h2>
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
              <p>The card's true power lies in strategic redemption, particularly via partner transfers. Earning 4X points yields an effective 8% return if redeemed at 2.0 cpp, versus only 2.4% if redeemed at 0.6 cpp. This highlights the importance of redemption strategy alongside earning. The flexibility and high potential value require effort to maximize, making the card best for those willing to engage with the MR program's nuances.</p>
            </section>

            <section id="section-9" className={styles.reviewSection}>
              <h2><span className={`${styles.icon} ${styles.iconTransfer}`}></span>Travel Focus: Redeeming Points: Mastering Airline & Hotel Transfers</h2>
              <p>Transferring MR points to airline and hotel loyalty programs offers the highest potential value for travelers. Amex partners with numerous programs across all major airline alliances and several hotel chains, providing global booking flexibility.</p>
              <h3>Key Airline Partners (Generally 1:1 Ratio, Instant Transfer unless noted):</h3>
              <ul className={`${styles.featureList} ${styles.iconList}`}>
                <li><span className={`${styles.icon} ${styles.iconAirline}`}></span><strong>Star Alliance:</strong> Air Canada Aeroplan, ANA Mileage Club (up to 48h), Avianca LifeMiles, Singapore Airlines KrisFlyer.</li>
                <li><span className={`${styles.icon} ${styles.iconAirline}`}></span><strong>Oneworld:</strong> British Airways Avios, Cathay Pacific Asia Miles, Iberia Plus, Qantas Frequent Flyer, Qatar Airways Privilege Club.</li>
                <li><span className={`${styles.icon} ${styles.iconAirline}`}></span><strong>SkyTeam:</strong> Aeromexico Rewards (1:1.6), Air France/KLM Flying Blue, Delta SkyMiles, Virgin Atlantic Flying Club.</li>
                <li><span className={`${styles.icon} ${styles.iconAirline}`}></span><strong>Non-Alliance:</strong> Emirates Skywards, Etihad Guest, Hawaiian Airlines HawaiianMiles, JetBlue TrueBlue (2.5:2).</li>
              </ul>
              <h3>Key Hotel Partners (Instant Transfer):</h3>
              <ul className={`${styles.featureList} ${styles.iconList}`}>
                <li><span className={`${styles.icon} ${styles.iconHotel}`}></span>Choice Privileges (1:1)</li>
                <li><span className={`${styles.icon} ${styles.iconHotel}`}></span>Hilton Honors (1:2) - Often lower value.</li>
                <li><span className={`${styles.icon} ${styles.iconHotel}`}></span>Marriott Bonvoy (1:1) - Often lower value.</li>
              </ul>
              <p>(Ratios/times subject to change. Minimums apply. Excise tax offset fee for U.S. airline transfers.)</p>
              <p>Highest values are typically found booking international premium cabin flights. Hotel transfers generally yield lower value. Linking accounts via Amex is required. Confirm award availability before transferring, as transfers are irreversible.</p>
            </section>

            <section id="section-10" className={styles.reviewSection}>
              <h2><span className={`${styles.icon} ${styles.iconTravel}`}></span>Travel Focus: Redeeming Points: Booking Directly via Amex Travel</h2>
              <p>Booking travel directly through AmexTravel.com using points offers a simpler redemption path.</p>
              <p>Redemption values via portal:</p>
              <ul className={`${styles.featureList} ${styles.iconList}`}>
                <li><span className={`${styles.icon} ${styles.iconFlights}`}></span><strong>Flights:</strong> 1.0 cent per point.</li>
                <li><span className={`${styles.icon} ${styles.iconHotel}`}></span><strong>Other Prepaid Travel (Hotels, Cars, Cruises):</strong> 0.7 cents per point (Poor value).</li>
              </ul>
              <p>The process involves selecting travel, choosing "Pay with Points," having the card charged the full amount, and receiving a statement credit for the points' value within ~48 hours. The main advantage is convenience – any available flight/prepaid hotel can be booked with points, bypassing award availability searches. The 1.0 cpp for flights provides a reasonable floor value.</p>
              <p>The primary disadvantage is the lower potential value compared to partner transfers, especially the poor 0.7 cpp rate for non-flight travel. This strongly discourages using points for hotels or cars via the portal. For personal Gold cardholders, the portal is best used for flights when transfer options are poor, and avoided for other travel types.</p>
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
              <p>Value depends entirely on spending at these partners. Frequent users can extract the full $120. Those who don't use these services gain little value. The credit is monthly and does not roll over ("use it or lose it"), requiring consistent small purchases to maximize.</p>
            </section>

            <section id="section-12" className={styles.reviewSection}>
              <h2><span className={`${styles.icon} ${styles.iconRideshare}`}></span>Travel Focus: $120 Uber Cash: Credits for Rides & Eats On-the-Go (US Focus)</h2>
              <p>Cardholders receive up to <strong>$120 annually in Uber Cash</strong>, provided as <strong>$10 deposited monthly</strong> into their linked Uber account. This requires adding the Gold Card to the Uber wallet. The Uber Cash applies to <strong>U.S. Uber rides and Uber Eats orders only</strong>. It expires at the end of each month if unused.</p>
              <p>This credit is practical for U.S.-based Uber users, directly reducing costs. However, its U.S.-only restriction limits its value during international travel, a notable drawback for a travel-focused card. The value appears in the Uber app, not as an Amex statement credit.</p>
            </section>

            <section id="section-13" className={styles.reviewSection}>
              <h2><span className={`${styles.icon} ${styles.iconDiningCredit}`}></span>$100 Resy Credit: Elevating Your U.S. Dining Experiences</h2>
              <p>The <strong>$100 annual Resy Credit</strong> is structured semi-annually: up to <strong>$50 back from Jan-Jun</strong>, and up to <strong>$50 back from Jul-Dec</strong>. Enrollment is required. It applies to purchases made with the enrolled card at <strong>U.S. restaurants participating in Resy</strong> or for other eligible Resy purchases. Resy is an Amex-owned reservation platform, often featuring popular/upscale U.S. restaurants.</p>
              <p>Utility depends on dining at U.S. Resy partners, which are more prevalent in major cities. Maximizing requires qualifying spend in both six-month periods. This credit provides value while driving engagement with Amex's Resy platform.</p>
            </section>

           <section id="section-14" className={styles.reviewSection}>
              <h2><span className={`${styles.icon} ${styles.iconCoffee}`}></span>$84 Dunkin' Credit: Fueling Your Mornings (US Focus)</h2>
              <p>The most niche credit is the <strong>$84 annual Dunkin' Credit</strong>, offering up to <strong>$7 in statement credits monthly</strong>. Enrollment is required. It applies to purchases made with the enrolled card at <strong>U.S. Dunkin' locations</strong>.</p>
              <p>This benefits regular U.S. Dunkin' customers. It's "use it or lose it" monthly. A common strategy is loading exactly $7 onto a Dunkin' account via their app each month to trigger the credit without needing a specific purchase.</p>
            </section>

            <section id="section-15" className={styles.reviewSection}>
              <h2><span className={`${styles.icon} ${styles.iconReport}`}></span>Calculating the Value: How Credits Offset the Annual Fee</h2>
              <p>The Amex Gold's credits potentially total <strong>$424 annually</strong> ($120 Dining + $120 Uber + $100 Resy + $84 Dunkin'), exceeding the $325 annual fee.</p>
              <h3>Amex Gold Annual Credits Summary</h3>
              <div className={styles.tableContainer}>
                <table className={styles.statsTable}>
                  <thead>
                    <tr>
                      <th>Credit Name</th><th>Structure</th><th>Max Annual Value</th><th>Key Partners / Usage Restrictions</th><th>Enrollment Required</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td data-label="Credit Name">Dining Credit</td><td data-label="Structure">Up to $10 / month</td><td data-label="Max Annual Value">$120</td><td data-label="Key Partners / Usage Restrictions">Grubhub, Cheesecake Factory, Goldbelly, Wine.com, Five Guys</td><td data-label="Enrollment Required">Yes</td></tr>
                    <tr><td data-label="Credit Name">Uber Cash</td><td data-label="Structure">$10 Uber Cash / month</td><td data-label="Max Annual Value">$120</td><td data-label="Key Partners / Usage Restrictions">Uber Rides & Uber Eats in U.S. only</td><td data-label="Enrollment Required">Yes (Link Card)</td></tr>
                    <tr><td data-label="Credit Name">Resy Credit</td><td data-label="Structure">Up to $50 / 6 months (Jan-Jun, Jul-Dec)</td><td data-label="Max Annual Value">$100</td><td data-label="Key Partners / Usage Restrictions">U.S. Resy Restaurants & eligible Resy purchases</td><td data-label="Enrollment Required">Yes</td></tr>
                    <tr><td data-label="Credit Name">Dunkin' Credit</td><td data-label="Structure">Up to $7 / month</td><td data-label="Max Annual Value">$84</td><td data-label="Key Partners / Usage Restrictions">U.S. Dunkin' locations</td><td data-label="Enrollment Required">Yes</td></tr>
                    <tr className={styles.totalRow}><td colSpan="2" data-label="Total">Total Potential</td><td data-label="Max Annual Value">$424</td><td colSpan="2"></td></tr>
                  </tbody>
                </table>
              </div>
              <p>However, achieving this requires fully utilizing all credits, many with partner and U.S. restrictions. Prospective cardmembers must realistically assess their spending. Do they naturally spend enough with these specific partners/services within the required timeframes and locations? If not, the actual credit value received will be lower, placing more emphasis on points earning and other benefits to justify the fee. The card favors users aligned with these specific services, particularly in urban U.S. areas.</p>
            </section>

            <section id="section-16" className={styles.reviewSection}>
              <h2><span className={`${styles.icon} ${styles.iconHotel}`}></span>Travel Focus: The Hotel Collection Benefits ($100 Credit & Upgrades)</h2>
              <p>The Amex Gold provides access to <strong>The Hotel Collection (THC)</strong>, offering perks at over 1,000 participating upscale hotels worldwide. Booking a stay of <strong>two consecutive nights or more</strong> through American Express Travel using the Gold Card is required.</p>
              <p>Benefits include:</p>
              <ul className={`${styles.featureList} ${styles.iconList}`}>
                <li><span className={`${styles.icon} ${styles.iconBenefitCheck}`}></span><strong>$100 Experience Credit:</strong> For eligible on-property charges (dining, spa, etc.), applied at check-out.</li>
                <li><span className={`${styles.icon} ${styles.iconBenefitCheck}`}></span><strong>Room Upgrade:</strong> One-category upgrade at check-in, when available.</li>
              </ul>
              <p>Noon check-in/late check-out may also be offered, subject to availability.</p>
              <p>Conditions are strict: 2-night minimum, booking via Amex Travel. Benefits are per room, per stay (limit 3 rooms). Back-to-back stays don't qualify for extra benefits. The $100 credit requires on-property spending. Booking via Amex Travel might mean higher rates or forfeiting hotel loyalty benefits. THC offers introductory luxury perks, below the more comprehensive Fine Hotels + Resorts program available with Platinum/Centurion cards.</p>
            </section>

            <section id="section-17" className={styles.reviewSection}>
              <h2><span className={`${styles.icon} ${styles.iconShield}`}></span>Travel Focus: Essential Travel Protections: Baggage & Car Rental Insurance</h2>
              <p>The Gold Card includes travel insurance protections when the trip is paid for with the card.</p>
              <h3>Baggage Insurance Plan:</h3>
              <p>Covers eligible lost, damaged, or stolen baggage during common carrier travel (plane, train, etc.). Limits per person per trip:</p>
              <ul className={`${styles.featureList} ${styles.iconList}`}>
                <li><span className={`${styles.icon} ${styles.iconBenefitCheck}`}></span><strong>Carry-on:</strong> Up to $1,250.</li>
                <li><span className={`${styles.icon} ${styles.iconBenefitCheck}`}></span><strong>Checked:</strong> Up to $500.</li>
                <li><span className={`${styles.icon} ${styles.iconBenefitCheck}`}></span><strong>High-Risk Items (jewelry, electronics, etc.):</strong> $250 sub-limit across all baggage.</li>
              </ul>
              <p>Coverage is <strong>secondary</strong> to the carrier's reimbursement. Claims must be filed first with the carrier. Exclusions apply (cash, normal wear). Limits may be insufficient for high-value items.</p>
              <h3>Car Rental Loss and Damage Insurance:</h3>
              <p>Covers damage/theft of a rental car. Requires paying for the entire rental with the Gold Card and declining the rental company's CDW/LDW. Key details:</p>
              <ul className={`${styles.featureList} ${styles.iconList}`}>
                <li><span className={`${styles.icon} ${styles.iconBenefitCheck}`}></span><strong>Limit:</strong> Up to $50,000 per rental.</li>
                <li><span className={`${styles.icon} ${styles.iconBenefitCheck}`}></span><strong>Type: Secondary.</strong> File first with personal auto insurance; Amex covers the deductible/uncovered costs. This is a major drawback vs. primary coverage on some competitor cards.</li>
                <li><span className={`${styles.icon} ${styles.iconBenefitCheck}`}></span><strong>Duration:</strong> Up to 30 consecutive days.</li>
                <li><span className={`${styles.icon} ${styles.iconBenefitCheck}`}></span><strong>Exclusions:</strong> Rentals in Australia, Italy, New Zealand; certain vehicle types (large vans, trucks, antique/exotic cars, RVs); liability for damage/injury to others is not covered.</li>
              </ul>
              <p>While providing a safety net, the secondary nature of the car rental insurance is a significant limitation. Amex offers optional paid primary coverage.</p>
            </section>

            <section id="section-18" className={styles.reviewSection}>
              <h2><span className={`${styles.icon} ${styles.iconGlobe}`}></span>Travel Focus: Added Peace of Mind: Global Assist® Hotline & No FTF</h2>
              <p>Two additional travel-focused benefits enhance the Gold Card's appeal.</p>
              <h3>Global Assist® Hotline:</h3>
              <p>Provides 24/7 coordination and referral services when traveling over 100 miles from home. Services include:</p>
              <ul className={`${styles.featureList} ${styles.iconList}`}>
                <li><span className={`${styles.icon} ${styles.iconBenefitCheck}`}></span>Medical referrals (doctors, hospitals), monitoring, emergency transport coordination.</li>
                <li><span className={`${styles.icon} ${styles.iconBenefitCheck}`}></span>Legal referrals (lawyers, bail bonds).</li>
                <li><span className={`${styles.icon} ${styles.iconBenefitCheck}`}></span>Financial assistance coordination (emergency cash, hotel check-in help).</li>
                <li><span className={`${styles.icon} ${styles.iconBenefitCheck}`}></span>Travel assistance (lost passport/luggage help, urgent message relay, translation coordination).</li>
                <li><span className={`${styles.icon} ${styles.iconBenefitCheck}`}></span>Pre-trip info (customs, visas, weather).</li>
              </ul>
              <p>Crucially, Global Assist® provides <strong>coordination, not payment</strong>. The cardmember is responsible for all third-party costs (doctors, lawyers, etc.). Its value lies in having 24/7 expert help during emergencies abroad.</p>
              <h3>No Foreign Transaction Fees:</h3>
              <p>The card charges <strong>no fees</strong> on purchases made outside the U.S. This saves ~3% compared to many cards, a vital benefit for international travelers that complements the global dining rewards.</p>
            </section>

            <section id="section-19" className={styles.reviewSection}>
              <h2><span className={`${styles.icon} ${styles.iconShoppingBag}`}></span>Beyond Travel: Purchase Protection & Extended Warranty Deep Dive</h2>
              <p>The Gold Card also protects everyday purchases.</p>
              <h3>Purchase Protection:</h3>
              <p>Covers eligible items bought with the card against accidental damage, theft, or loss for <strong>90 days</strong> from purchase. No enrollment needed.</p>
              <ul className={`${styles.featureList} ${styles.iconList}`}>
                <li><span className={`${styles.icon} ${styles.iconBenefitCheck}`}></span><strong>Limits:</strong> Up to <strong>$10,000 per item / occurrence</strong>.</li>
                <li><span className={`${styles.icon} ${styles.iconBenefitCheck}`}></span>Up to <strong>$50,000 per account</strong> per calendar year.</li>
              </ul>
              <p>This $10k item limit is robust, offering significant protection for valuable goods. Exclusions apply (animals, consumables, motorized vehicles, items not reasonably safeguarded). Claims require prompt notification (within 30 days) and proof (receipt, police report).</p>
              <h3>Extended Warranty:</h3>
              <p>Automatically extends the original U.S. manufacturer's warranty.</p>
              <ul className={`${styles.featureList} ${styles.iconList}`}>
                <li><span className={`${styles.icon} ${styles.iconBenefitCheck}`}></span><strong>Extension:</strong> Adds up to <strong>one additional year</strong>.</li>
                <li><span className={`${styles.icon} ${styles.iconBenefitCheck}`}></span><strong>Eligible Warranties:</strong> Original manufacturer's warranties of <strong>5 years or less</strong>.</li>
                <li><span className={`${styles.icon} ${styles.iconBenefitCheck}`}></span><strong>Coverage Limits:</strong> Up to <strong>$10,000 per item</strong>, $50,000 per account per year.</li>
              </ul>
              <p>This benefit adds significant value, especially for electronics/appliances. Exclusions include consumables, vehicles, commercial use items. Claims require documentation (receipt, warranty). Both protections require good record-keeping but offer substantial peace of mind and potential savings.</p>
            </section>

           <section id="section-20" className={styles.reviewSection}>
              <h2><span className={`${styles.icon} ${styles.iconFlag}`}></span>Final Verdict: Is the Amex Gold Your Ideal Travel Companion?</h2>
              <p>The <strong>American Express® Gold Card</strong> remains a strong contender, particularly for those whose spending aligns with its strengths: superb <strong>4X points on global dining</strong> and <strong>U.S. supermarkets</strong>, solid <strong>3X on direct/Amex Travel flights</strong>, access to the valuable <strong>Membership Rewards® program</strong>, and <strong>No Foreign Transaction Fees</strong>. The potential <strong>$424 in annual credits</strong> can more than offset the <strong>$325 annual fee</strong>, and travel/purchase protections add security.</p>
              <p>However, maximizing value requires active use of the specific, often U.S.-centric, credits. The complimentary Car Rental Insurance is <strong>secondary</strong>, a notable drawback versus primary coverage from competitors like Chase Sapphire Preferred®. Achieving top value from MR points necessitates engaging with airline/hotel transfer partners, which involves complexity.</p>
              <h3>Who is it best for?</h3>
              <p>U.S.-based individuals/families who:</p>
              <ul className={`${styles.featureList} ${styles.iconList}`}>
                <li><span className={`${styles.icon} ${styles.iconBenefitCheck}`}></span>Spend heavily on restaurants (globally) and U.S. groceries.</li>
                <li><span className={`${styles.icon} ${styles.iconBenefitCheck}`}></span>Regularly use Grubhub, Uber (U.S.), Resy (U.S.), and/or Dunkin' (U.S.) to maximize credits.</li>
                <li><span className={`${styles.icon} ${styles.iconBenefitCheck}`}></span>Travel often enough to benefit from 3X flight points, No FTF, THC perks, and insurances.</li>
                <li><span className={`${styles.icon} ${styles.iconBenefitCheck}`}></span>Are willing to learn and use MR transfer partners for high-value travel redemptions.</li>
              </ul>
              <h3>Consider alternatives if:</h3>
              <ul className={`${styles.featureList} ${styles.iconList}`}>
                <li><span className={`${styles.icon} ${styles.iconBenefitCross}`}></span>You can't consistently use the specific credits.</li>
                <li><span className={`${styles.icon} ${styles.iconBenefitCross}`}></span>You prefer simple cash back over points complexity.</li>
                <li><span className={`${styles.icon} ${styles.iconBenefitCross}`}></span>You need primary car rental insurance (consider Chase Sapphire Preferred®, $95 fee).</li>
                <li><span className={`${styles.icon} ${styles.iconBenefitCross}`}></span>You seek top-tier travel perks like extensive lounge access (consider The Platinum Card®, $695 fee).</li>
                <li><span className={`${styles.icon} ${styles.iconBenefitCross}`}></span>You want solid travel/dining rewards with a lower fee (consider Amex Green Card, $150 fee).</li>
              </ul>
              <p><strong>In conclusion:</strong> The Amex Gold Card excels in rewarding everyday food spending while offering good travel benefits. Its value proposition is highly personalized, hinging on maximizing credits and strategically redeeming points. For users whose lifestyle fits this structure and who embrace the points strategy, it's a powerful and potentially very rewarding card.</p>
              <div className={styles.disclaimerBox}>
                <p><strong>Disclaimer:</strong> Terms, interest rates, fees, welcome offers, credit partners, point values, and insurance benefits are subject to change at any time. Always verify current details directly with American Express before applying. Affiliate links may be present; editorial opinions are independent. Points valuations are estimates and vary based on redemption. Carrying a balance will incur interest charges that can outweigh rewards. Refer to official American Express documentation for the most up-to-date Terms & Conditions.</p>
              </div>
            </section>

            <section id="eat-expertise-authority-trustworthiness" className={`${styles.reviewSection} ${styles.eatSection}`}>
                <h2><span className={`${styles.icon} ${styles.iconLeaf}`}></span>Our Commitment to E-A-T: Expertise, Authority & Trustworthiness</h2>
                <p>At <strong>{reviewData.author}</strong>, we prioritize:</p>
                <h3>1. Expertise</h3>
                <ul className={`${styles.featureList} ${styles.iconList}`}>
                    <li><span className={`${styles.icon} ${styles.iconBenefitCheck}`}></span><strong>Real-World Testing:</strong> Our team actively uses the Amex Gold for dining/groceries, verifying 4x categories and monthly credit usage, providing firsthand insight into statement postings.</li>
                    <li><span className={`${styles.icon} ${styles.iconBenefitCheck}`}></span><strong>Regular Monitoring:</strong> We track changes to dining credit partners, redemption rates, and transfer partner expansions, ensuring each year’s coverage is updated.</li>
                    <li><span className={`${styles.icon} ${styles.iconBenefitCheck}`}></span><strong>Advanced Redemption Knowledge:</strong> We experiment with airline/hotel transfers to confirm sweet spots, guiding readers to potentially 2¢+ per point redemptions.</li>
                </ul>
                <h3>2. Authority</h3>
                <ul className={`${styles.featureList} ${styles.iconList}`}>
                    <li><span className={`${styles.icon} ${styles.iconBenefitCheck}`}></span><strong>Comprehensive Analysis:</strong> Our detailed coverage dives beyond basics, tackling synergy with other Amex cards, competitor comparisons, and advanced usage tips.</li>
                    <li><span className={`${styles.icon} ${styles.iconBenefitCheck}`}></span><strong>Industry Recognition:</strong> We’re frequently cited in top finance/travel outlets for unbiased Amex coverage. {/* *** Customize this claim *** */} Our data-driven approach ensures readers get detailed, factual card reviews.</li>
                    <li><span className={`${styles.icon} ${styles.iconBenefitCheck}`}></span><strong>Transparency:</strong> If affiliate links are present, we disclose them, preserving editorial independence regarding star ratings or final verdicts.</li>
                </ul>
                <h3>3. Trustworthiness</h3>
                <ul className={`${styles.featureList} ${styles.iconList}`}>
                    <li><span className={`${styles.icon} ${styles.iconBenefitCheck}`}></span><strong>Independent Ratings:</strong> We do not let advertisers influence our editorial stance or rating scores.</li>
                    <li><span className={`${styles.icon} ${styles.iconBenefitCheck}`}></span><strong>Frequent Revisions:</strong> If major changes occur (e.g., new fee structures, credit changes), we swiftly update to maintain accuracy.</li>
                    <li><span className={`${styles.icon} ${styles.iconBenefitCheck}`}></span><strong>User Engagement:</strong> We welcome feedback or redemption stories from real cardholders to cross-verify official T&Cs and categories.</li>
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
          </div>
        </main>
      </div>

      <Footer />
    </>
  );
}

export default AmexGoldReviewPage;