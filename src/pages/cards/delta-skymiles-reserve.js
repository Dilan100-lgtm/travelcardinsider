/* ------------------------------------------------------------------
    File:  pages/reviews/delta-reserve-amex-review.js
    Route: https://www.travelcardinsider.com/reviews/delta-reserve-amex-review
------------------------------------------------------------------- */

import React, { useState, useEffect, useCallback, useRef } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import styles from '../../styles/ReviewPage.module.css';

// --- Component Imports (assuming paths are correct in your project) ---
import TableOfContents from '../../components/TableOfContents';
import IconGift from '../../components/icons/icon-gift.svg';
import IconStar from '../../components/icons/icon-star.svg';
import IconCheck from '../../components/icons/icon-Credit Card.svg';
import IconPlus from '../../components/icons/icon-target.svg';
import IconPlane from '../../components/icons/icon-plane.svg';
import IconDollar from '../../components/icons/icon-dollar.svg';

const RatingTooltip = dynamic(() => import('../../components/RatingTooltip'), { ssr: false, loading: () => null });

/* ──────────────────────────────
    CONSTANTS & STATIC DATA
    ────────────────────────────── */
const siteName = 'Travelcardinsider';
const siteUrl = 'https://www.travelcardinsider.com';
const pagePath = '/reviews/delta-reserve-amex-review';
const pageUrlFull = `${siteUrl}${pagePath}`;
const publishDate = '2025-07-11';
const updateDate = '2025-07-11';

const reviewData = {
  cardName: 'Delta SkyMiles® Reserve American Express Card',
  title: 'Delta Reserve Amex Review (2025): Is the $650 Fee Worth It?',
  description: 'A deep dive into the Delta SkyMiles® Reserve Amex card. We analyze the First-Class Companion Certificate, Sky Club access, MQD shortcuts, and the $650 annual fee to see if it’s the ultimate card for Delta loyalists.',
  keywords: 'Delta Reserve Amex review, Delta SkyMiles Reserve, Amex Delta Reserve, companion certificate, Sky Club access, Centurion Lounge, MQD Headstart, airline credit card review 2025',
  author: {
      name: 'Dilan Madushanka',
      title: 'Founder & Lead Editor',
      imageUrl: '/WhatsApp Image 2025-05-12 at 4.09.58 PM.jpeg',
      imageWidth: 40,
      imageHeight: 40,
      tooltipImageUrl: '/WhatsApp Image 2025-05-12 at 4.09.58 PM.jpeg',
      tooltipImageWidth: 60,
      tooltipImageHeight: 60,
      expertise: [
          'Premium Airline Co-branded Cards',
          'Delta SkyMiles & Medallion Program',
          'Airport Lounge Access & Benefits',
          'Credit Card Rewards Optimization',
          'American Express Cards'
      ],
      bioSnippet: 'Dilan Madushanka is the founder and lead editor of Travelcardinsider, dedicated to demystifying credit cards and uncovering their real-world value for smarter travel and rewards.',
      fullBioLink: '/author/dilan-madushanka',
  },
  siteName: siteName,
  imageUrl: '/delta-reserve-card.png', // Placeholder for actual Reserve card image
  imageWidth: 1290,
  imageHeight: 812,
  ratingValue: 8.8, 
  ratingCount: 352,
  reviewBody: 'Our editors evaluate the Delta SkyMiles® Reserve American Express Card based on its premium airline loyalty benefits, including the annual First-Class Companion Certificate, Delta Sky Club & Centurion Lounge access, MQD Headstart for elite status, statement credits, rewards, the annual fee, and its overall value for top-tier Delta Air Lines travelers.',
  aprRange: '20.99% to 29.99% variable',
  annualFee: 650,
  applyLink: 'https://www.americanexpress.com/us/credit-cards/card/delta-skymiles-reserve-american-express-card/', // UPDATE with your affiliate link
  // --- Official Citation Links from the article ---
  ratesFeesLink: 'https://www.americanexpress.com/us/credit-cards/card-application/apply/prospect/terms/delta-skymiles-reserve-american-express-card/25330-10-0#FeeTable',
  benefitsGuideLink: 'https://www.americanexpress.com/us/credit-cards/card/delta-skymiles-reserve-american-express-card/benefits',
  offerTermsLink: 'https://www.americanexpress.com/us/credit-cards/card/delta-skymiles-reserve-american-express-card/',
  companionCertTermsLink: 'https://www.delta.com/us/en/skymiles/airline-credit-cards/companion-certificate',
  skyClubAccessLink: 'https://www.delta.com/us/en/delta-sky-club/access',
  centurionLoungeLink: 'https://www.thecenturionlounge.com/',
  medallionProgramLink: 'https://www.delta.com/us/en/skymiles/medallion-program/how-to-qualify',
  takeOff15Link: 'https://www.delta.com/us/en/skymiles/airline-credit-cards/takeoff-15',
  statementCreditsGuideLink: 'https://global.americanexpress.com/card-benefits/guide',
  travelProtectionsLink: 'https://www.americanexpress.com/us/credit-cards/features-benefits/policies/trip-cancellation-terms.html',
  // --- Competitor & other links from article ---
  deltaPlatinumReviewLink: '/reviews/delta-platinum-amex-review',
  deltaGoldReviewLink: '/reviews/delta-skymiles-gold-amex-review',
  deltaBlueReviewLink: '/reviews/delta-skymiles-blue-amex-review',
  amexPlatinumCardPageLink: 'https://www.americanexpress.com/us/credit-cards/card/platinum/',
  chaseSapphireReservePageLink: 'https://creditcards.chase.com/rewards-credit-cards/sapphire/reserve',
  amexPlatinumVsDeltaReserveLink: '/comparisons/amex-platinum-vs-delta-reserve',
  bestAirlineCardsLink: '/guides/best-airline-credit-cards-2025',
  sku: 'AMEX-DELTA-RES-TCI-2025',
  mpn: 'AMEXDELTARES',
  h1Content: "The Delta Reserve Card: Your Ticket to the Top, or Just an Expensive Ride?",
};

/* ──────────────────────────────
    STRUCTURED DATA GRAPH
    ────────────────────────────── */
const structuredDataOptimized = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Product',
      '@id': `${pageUrlFull}#product`,
      name: reviewData.cardName,
      image: `${siteUrl}${reviewData.imageUrl}`,
      description: reviewData.description,
      sku: reviewData.sku,
      mpn: reviewData.mpn,
      brand: { '@type': 'Brand', name: 'American Express' },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: reviewData.ratingValue.toString(),
        bestRating: '10',
        worstRating: '1',
        ratingCount: reviewData.ratingCount.toString(),
        reviewCount: '1',
      },
      offers: {
        '@type': 'Offer',
        url: reviewData.applyLink,
        priceCurrency: 'USD',
        price: reviewData.annualFee.toString(),
        priceValidUntil: '2026-12-31',
        itemCondition: 'https://schema.org/NewCondition',
        availability: 'https://schema.org/InStock',
        seller: { '@type': 'Organization', name: 'American Express' },
      },
      review: { '@id': `${pageUrlFull}#editorReview` },
    },
    {
      '@type': 'Review',
      '@id': `${pageUrlFull}#editorReview`,
      name: `${reviewData.cardName} – Review Updated ${new Date(updateDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}`,
      itemReviewed: { '@id': `${pageUrlFull}#product` },
      reviewBody: reviewData.reviewBody,
      reviewRating: {
        '@type': 'Rating',
        ratingValue: reviewData.ratingValue.toString(),
        bestRating: '10',
        worstRating: '1',
      },
      author: { '@type': 'Person', 'name': reviewData.author.name, 'url': `${siteUrl}${reviewData.author.fullBioLink}` },
      publisher: { '@type': 'Organization', name: siteName, logo: { '@type': 'ImageObject', url: `${siteUrl}/images/logo/your-logo-schema.png` } },
      datePublished: publishDate,
      dateModified: updateDate,
    },
    {
      '@type': 'WebPage',
      '@id': pageUrlFull,
      url: pageUrlFull,
      name: reviewData.title,
      description: reviewData.description,
      inLanguage: 'en-US',
      isPartOf: { '@id': `${siteUrl}#website` },
      primaryImageOfPage: { '@id': `${pageUrlFull}#primaryImage` },
      breadcrumb: { '@id': `${pageUrlFull}#breadcrumbs` },
      datePublished: publishDate,
      dateModified: updateDate,
    },
    {
      '@type': 'ImageObject',
      '@id': `${pageUrlFull}#primaryImage`,
      url: `${siteUrl}${reviewData.imageUrl}`,
      width: reviewData.imageWidth,
      height: reviewData.imageHeight,
      caption: reviewData.cardName,
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${pageUrlFull}#breadcrumbs`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: siteName, item: siteUrl },
        { '@type': 'ListItem', position: 2, name: 'Credit Card Reviews', item: `${siteUrl}/reviews` },
        { '@type': 'ListItem', position: 3, name: `${reviewData.cardName} Review`, item: pageUrlFull },
      ],
    },
    {
      '@type': 'FAQPage',
      '@id': `${pageUrlFull}#faqs`,
      mainEntity: [
        {
          '@type': 'Question', name: `Is the $${reviewData.annualFee} annual fee worth it?`,
          acceptedAnswer: { '@type': 'Answer', text: "It is, but only if you are a loyal Delta flyer who will maximize the Companion Certificate and the annual statement credits. If you use those, the card easily pays for itself." }
        },
        {
          '@type': 'Question', name: 'How many guests can I bring into the Sky Club?',
          acceptedAnswer: { '@type': 'Answer', text: "You get four complimentary one-time guest passes each year. After that, you can bring up to two guests per visit for a fee of $50 each." }
        },
        {
          '@type': 'Question', name: 'Can I get unlimited Sky Club access?',
          acceptedAnswer: { '@type': 'Answer', text: "Yes, but it requires spending $75,000 or more on the card in a calendar year." }
        },
        {
            '@type': 'Question', name: 'Is the Companion Certificate easy to use?',
            acceptedAnswer: { '@type': 'Answer', text: "It can be challenging. Success requires flexibility with your travel dates and booking well in advance to find eligible fare classes." }
        },
        {
            '@type': 'Question', name: 'Does the card give me Medallion status automatically?',
            acceptedAnswer: { '@type': 'Answer', text: "No, but it gives you the best shortcuts. You get a $2,500 MQD Headstart and can earn more MQDs through spending." }
        },
        {
            '@type': 'Question', name: 'Can authorized users access the Sky Club?',
            acceptedAnswer: { '@type': 'Answer', text: "Yes, for an annual fee of $175, authorized users get their own Sky Club access when flying Delta." }
        },
        {
            '@type': 'Question', name: 'Is there a foreign transaction fee?',
            acceptedAnswer: { '@type': 'Answer', text: "No. The card has no foreign transaction fees, making it great for international travel." }
        },
        {
            '@type': 'Question', name: 'How does the TakeOff 15 benefit work?',
            acceptedAnswer: { '@type': 'Answer', text: "It's automatic. When you're logged into your SkyMiles account and book a Delta flight with miles, you'll see the 15% discount reflected in the price." }
        },
        {
            '@type': 'Question', name: "What happens if I don't use my monthly Resy or rideshare credits?",
            acceptedAnswer: { '@type': 'Answer', text: "They do not roll over. The credits are \"use-it-or-lose-it,\" so you have to take advantage of them each month." }
        },
        {
            '@type': 'Question', name: 'Is this a good card for everyday spending?',
            acceptedAnswer: { '@type': 'Answer', text: "No. Its 1X earning rate on non-Delta purchases is poor. It's best paired with another card that earns more on categories like dining and groceries." }
        }
      ],
    },
    { '@type': 'Organization', '@id': `${siteUrl}#website`, name: siteName, url: siteUrl, logo: { '@type': 'ImageObject', url: `${siteUrl}/images/logo/your-logo-schema.png` } },
  ],
};

const ratingCriteria = [
    'Value of First-Class Companion Certificate',
    'Delta Sky Club & Centurion Lounge Access Quality',
    'Effectiveness of MQD Headstart & Boost for Status',
    'Value of Statement Credits (Resy, Rideshare, Delta Stays)',
    'Welcome Offer Attractiveness & Terms',
    'Annual Fee ($650) vs. Overall Benefits',
    'Rewards Earning Rates (3x on Delta)',
    'Day-of-Travel Perks (Bags, Boarding)',
    'Overall Value Proposition for Elite Delta Travelers',
];

const tocSections = [
    { id: 'section-intro', title: 'Introduction: The $650 Question' },
    { id: 'section-snapshot', title: 'Card Snapshot & "Best For" Tagline' },
    { id: 'section-welcome-offer', title: 'Welcome Offer: 95K-Mile Jump-Start' },
    { id: 'section-companion-cert', title: 'Golden Ticket: First-Class Companion Certificate' },
    { id: 'section-lounge-access', title: 'Airport Oasis: Sky Club + Centurion Access' },
    { id: 'section-status-boost', title: 'Fast-Track to Medallion: MQD Headstart & Boost' },
    { id: 'section-every-trip-perks', title: 'Every-Trip Perks: Bags, Boarding, In-Flight Savings' },
    { id: 'section-redemptions', title: 'TakeOff 15 & SkyMiles Redemptions' },
    { id: 'section-earning-miles', title: 'Earning Miles: 3× Delta, 1× Everything Else' },
    { id: 'section-statement-credits', title: 'Statement-Credit “Coupon Book” ($560 Potential)' },
    { id: 'section-real-world-value', title: 'Year-in-Life Value Example' },
    { id: 'section-rates-fees', title: 'Rates, Fees & Authorized-User Costs' },
    { id: 'section-user-profile', title: 'Ideal vs. Poor-Fit Cardholders' },
    { id: 'section-pros-cons', title: 'Pros & Cons Snapshot' },
    { id: 'section-comparison', title: 'Reserve vs. Key Competitors' },
    { id: 'section-testimonials', title: 'Real-World Voices (5 Mini-Testimonials)' },
    { id: 'section-protections', title: 'Travel & Purchase Protections' },
    { id: 'section-customer-service', title: 'Customer Service & App Experience' },
    { id: 'section-faqs', title: 'FAQs: Quick Answers' },
    { id: 'section-verdict', title: 'Final Verdict: Should You Board?' }
];

function DraggableTableWrapper({ children }) {
  const containerRef = useRef(null);
  useEffect(() => {
    if (typeof window === 'undefined' || window.innerWidth < 768) return;
    const el = containerRef.current;
    if (!el) return;
    let isDragging = false, startX = 0, scrollStart = 0;
    const startDrag = (e) => {
      isDragging = true; el.classList.add(styles.grabbing);
      startX = e.pageX || e.touches?.[0]?.pageX; scrollStart = el.scrollLeft;
    };
    const stopDrag = () => { isDragging = false; el.classList.remove(styles.grabbing); };
    const onMove = (e) => {
      if (!isDragging) return; e.preventDefault();
      const x = e.pageX || e.touches?.[0]?.pageX;
      el.scrollLeft = scrollStart - (x - startX);
    };
    el.addEventListener('mousedown', startDrag);
    el.addEventListener('mouseup', stopDrag);
    el.addEventListener('mouseleave', stopDrag);
    el.addEventListener('mousemove', onMove);
    return () => {
      el.removeEventListener('mousedown', startDrag);
      document.removeEventListener('mouseup', stopDrag);
      document.removeEventListener('mouseleave', stopDrag);
      el.removeEventListener('mousemove', onMove);
    };
  }, []);
  return (<div ref={containerRef} className={styles.draggableScrollContainer}>{children}</div>);
}

/* ──────────────────────────────
    COMPONENT
    ────────────────────────────── */
function DeltaReserveAmexReviewPage() {
  const [showRatingInfo, setShowRatingInfo] = useState(false);
  const ratingTooltipRef = useRef(null);

  const handleIconClick = useCallback((event) => {
      event.preventDefault();
      event.stopPropagation();
      setShowRatingInfo(prevState => !prevState);
  }, []);

  useEffect(() => {
      function handleClickOutside(event) {
          if (showRatingInfo && !event.target.closest(`.${styles.infoIconButton}`) && ratingTooltipRef.current && !ratingTooltipRef.current.contains(event.target)) {
               setShowRatingInfo(false);
          }
      }
      if (showRatingInfo) {
          document.addEventListener("mousedown", handleClickOutside);
      } else {
           document.removeEventListener("mousedown", handleClickOutside);
      }
      return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showRatingInfo, ratingTooltipRef]);

  const summaryBoxData = {
    welcomeOffer: "Earn 95,000 Bonus Miles after spending $6,000 in eligible purchases in your first 6 months.",
    annualFee: `$${reviewData.annualFee}`,
    topEarning: "3X Miles on Delta purchases.",
    keyPerks: "Annual First-Class Companion Certificate, Delta Sky Club & Centurion Lounge Access.",
    keyCredits: "$240 Resy, $120 Rideshare, $200 Delta Stays credits annually.",
    bestFor: "The aspiring or established Delta Medallion Member who values elite status and lounge access above all else."
  };

  return (
    <>
      <Head>
        <title>{reviewData.title} - {siteName}</title>
        <meta name="description" content={reviewData.description} />
        <meta name="keywords" content={reviewData.keywords} />
        <meta name="author" content={reviewData.author.name} />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="robots" content="index,follow,max-image-preview:large" />
        <link rel="canonical" href={pageUrlFull} />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content={siteName} />
        <meta property="og:title" content={reviewData.title} />
        <meta property="og:description" content={reviewData.description} />
        <meta property="og:url" content={pageUrlFull} />
        <meta property="og:image" content={`${siteUrl}${reviewData.imageUrl}`} />
        <meta property="og:image:width" content={String(reviewData.imageWidth)} />
        <meta property="og:image:height" content={String(reviewData.imageHeight)} />
        <meta property="article:published_time" content={publishDate} />
        <meta property="article:modified_time" content={updateDate} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@TravelCardInsid" />
        <meta name="twitter:title" content={reviewData.title} />
        <meta name="twitter:description" content={reviewData.description} />
        <meta name="twitter:image" content={`${siteUrl}${reviewData.imageUrl}`} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredDataOptimized) }} />
      </Head>

      <main>
        <div className={styles.reviewPageLayout}>
          <div className={styles.mainContentArea}>
             <section className={styles.heroSection}>
              <div className={styles.heroTextContainer}>
                <h1 className={styles.heroTitle}>{reviewData.h1Content}</h1>
                <p className={styles.heroSubtitle}>
                  But this elevated experience comes with a steep ${reviewData.annualFee} annual fee. Is the Delta Reserve a master key that unlocks value far beyond its cost, or a luxury too niche for anyone but the most dedicated Delta road warrior?
                </p>
                <div className={styles.heroCtaContainer}>
                  <div>
                    <a href={reviewData.applyLink} target="_blank" rel="noopener noreferrer sponsored" className={`${styles.applyNowButton} ${styles.heroApplyButton}`}>Apply on Amex's Site</a>
                    <span className={styles.heroApplyButtonDisclaimer}>Official & secure application</span>
                  </div>
                  <Link href="#section-snapshot" legacyBehavior><a className={styles.heroSecondaryLink}>See Card Snapshot</a></Link>
                </div>
              </div>
              <div className={styles.heroImageContainer}>
                <div className={styles.cardImageContainer}>
                  <Image src={reviewData.imageUrl} alt={reviewData.cardName} width={reviewData.imageWidth} height={reviewData.imageHeight} className={styles.heroImage} priority />
                </div>
                <div className={styles.ratingSection}>
                  <span className={styles.tciRating}>
                    <button type="button" className={styles.infoIconButton} aria-label="Rating Information" onClick={handleIconClick} aria-expanded={showRatingInfo}>
                      <svg aria-hidden="true" focusable="false" className={styles.infoIcon} viewBox="0 0 16 16"><path fillRule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/><path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/></svg>
                    </button>
                    {siteName} Rating: <strong>{reviewData.ratingValue.toFixed(1)}</strong>/10
                    {showRatingInfo && (<RatingTooltip ref={ratingTooltipRef} ratingValue={reviewData.ratingValue} ratingCriteria={ratingCriteria} onClose={() => setShowRatingInfo(false)} />)}
                  </span>
                  <div className={styles.starRating} title={`Rated ${reviewData.ratingValue} out of 10 stars`}>
                      ★★★★★<span className={styles.filledStars} style={{ '--rating': `${(reviewData.ratingValue / 10) * 100}%` }}>★★★★★</span>
                  </div>
                </div>
              </div>
            </section>
            
            <div className={styles.reviewContainer}>
              <article>
                <header className={styles.reviewHeader}>
                    <div className={styles.summaryBox}>
                        <h2 className={styles.summaryBoxTitle}>{reviewData.cardName}: At a Glance</h2>
                        <div className={styles.summaryGrid}>
                            <div className={styles.summaryItem}><span className={styles.summaryIcon}><IconGift /></span> <span className={styles.summaryLabel}>Welcome Offer:</span> <span className={styles.summaryValue}>{summaryBoxData.welcomeOffer}</span></div>
                            <div className={styles.summaryItem}><span className={styles.summaryIcon}><IconCheck /></span> <span className={styles.summaryLabel}>Annual Fee:</span> <span className={styles.summaryValue}>{summaryBoxData.annualFee}</span></div>
                            <div className={styles.summaryItem}><span className={styles.summaryIcon}><IconStar /></span> <span className={styles.summaryLabel}>Key Perks:</span> <span className={styles.summaryValue}>{summaryBoxData.keyPerks}</span></div>
                            <div className={styles.summaryItem}><span className={styles.summaryIcon}><IconDollar /></span> <span className={styles.summaryLabel}>Key Credits:</span> <span className={styles.summaryValue}>{summaryBoxData.keyCredits}</span></div>
                            <div className={styles.summaryItem} data-full-width="true"><span className={styles.summaryIcon}><IconPlus /></span> <span className={styles.summaryLabel}>Best For:</span> <span className={styles.summaryValue}>{summaryBoxData.bestFor}</span></div>
                        </div>
                        <div className={styles.summaryBoxActions}>
                            <a href={reviewData.ratesFeesLink} className={styles.summaryRatesLink} target="_blank" rel="noopener noreferrer sponsored">See Card Rates & Fees</a>
                        </div>
                    </div>
                </header>
                
                <section id="section-intro" className={styles.reviewSection}>
                    <h2>Introduction: The $650 Question</h2>
                    <p>Imagine the scene: you’re at Gate B27, surrounded by a sea of anxious travelers, a chaos of rolling suitcases and final boarding calls. You glance at the long queue, then at your watch.</p>
                    <p>Now, picture this instead: you’re sinking into a plush armchair in the serene, glass-walled sanctuary of the Delta Sky Club, a complimentary drink in hand. This is the world the Delta SkyMiles® Reserve American Express Card promises—a calmer, more premium way to travel.</p>
                    <p>But this elevated experience comes with a steep ${reviewData.annualFee} annual fee. <a href={reviewData.ratesFeesLink} target="_blank" rel="noopener noreferrer sponsored" className={styles.inlineLink}>Source: American Express</a></p>
                    <p>That figure is the central question. Is the Delta Reserve a master key that unlocks value far beyond its cost, or is it a luxury whose benefits are too niche for anyone but the most dedicated Delta road warrior? This guide will dissect every facet of the card to help you decide if it’s the right choice for you.</p>
                </section>

                <section id="section-snapshot" className={styles.reviewSection}>
                    <h2>Card Snapshot &amp; &quot;Best For&quot; Tagline</h2>
                    <p><strong>Best For:</strong> {summaryBoxData.bestFor}</p>
                    <DraggableTableWrapper>
                        <div className={styles.tableContainer}>
                            <table className={`${styles.statsTable} ${styles.highlightTable}`}>
                                <tbody>
                                    <tr><td>Card Name:</td><td><strong>{reviewData.cardName}</strong></td></tr>
                                    <tr><td>Annual Fee:</td><td><strong>${reviewData.annualFee}</strong></td></tr>
                                    <tr><td>Welcome Offer:</td><td>{summaryBoxData.welcomeOffer}</td></tr>
                                    <tr><td>Key Perks:</td><td>{summaryBoxData.keyPerks}</td></tr>
                                    <tr><td>Earning Rate:</td><td>3X Miles on Delta purchases; 1X Mile on all other eligible purchases. <a href={reviewData.benefitsGuideLink} target="_blank" rel="noopener noreferrer sponsored" className={styles.inlineLink}>Source: Amex</a></td></tr>
                                    <tr><td>Recommended Credit:</td><td>Good to Excellent.</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </DraggableTableWrapper>
                </section>

                <section id="section-welcome-offer" className={styles.reviewSection}>
                    <h2>Welcome Offer: 95K-Mile Jump-Start</h2>
                    <p>American Express rolls out a substantial welcome mat for new Reserve cardholders. The current offer lets you earn 95,000 Bonus Miles after spending $6,000 on eligible purchases within your first six months. <a href={reviewData.offerTermsLink} target="_blank" rel="noopener noreferrer sponsored" className={styles.inlineLink}>Source: American Express</a></p>
                    <p>What are those miles worth? While values fluctuate, a conservative estimate is about 1.2 cents per mile. At that rate, the 95,000-mile bonus is worth roughly $1,140 toward Delta flights. This massive initial value easily covers the ${reviewData.annualFee} annual fee, leaving you with nearly $500 in positive value for your first year.</p>
                    <p>However, be aware of Amex’s “once per lifetime” rule, which means you’re likely ineligible for the bonus if you’ve had this specific card before. Also, closing your account shortly after receiving a bonus can cause the issuer to “claw back” the miles, so plan to keep the card for at least one full year.</p>
                </section>

                <section id="section-companion-cert" className={styles.reviewSection}>
                  <h2>Golden Ticket: First-Class Companion Certificate</h2>
                  <p>After the welcome bonus, the Annual Companion Certificate becomes the card’s single most powerful perk. Received each year upon renewal (starting in year two), it’s a buy-one-get-one-free ticket that elevates the card far above its peers.</p>
                  <p>Unlike certificates from lower-tier cards (like the one in our <Link href={reviewData.deltaPlatinumReviewLink}><a>Delta SkyMiles® Platinum Amex review</a></Link>), the Reserve’s is valid for round-trip travel in First Class, Delta Comfort+, or Main Cabin. It can be used for flights within the 48 contiguous U.S. states, plus many destinations in Mexico, the Caribbean, and Central America. <a href={reviewData.companionCertTermsLink} target="_blank" rel="noopener noreferrer sponsored" className={styles.inlineLink}>Source: Delta Air Lines</a></p>
                  <p>You’re only responsible for taxes and fees on the second ticket, capped at $80 domestically. The value here is immense. A cross-country first-class ticket can easily top $1,200. Using the certificate effectively saves that entire amount, generating value that can be nearly double the card's annual fee from a single trip. For anyone who consistently travels with a partner or friend, this perk alone can make the card a financial no-brainer.</p>
                  <p>However, redeeming it requires flexibility. Availability is limited to specific fare classes, which can be scarce on popular routes or during holidays. To snag a high-value seat, you often need to book well in advance.</p>
                </section>

                <section id="section-lounge-access" className={styles.reviewSection}>
                  <h2>Airport Oasis: Sky Club + Centurion Access</h2>
                  <p>For many, the airport lounge is the ultimate antidote to travel stress. The Reserve Card offers access to two premier lounge networks.</p>
                  <p>First, you get 15 annual visits to the Delta Sky Club when flying with the airline. A "visit" covers all lounge entries within a 24-hour window, so layovers on the same trip don't burn extra visits. Want unlimited access? You can unlock it for the rest of the year and the following one by spending $75,000 on the card in a calendar year. <a href={reviewData.skyClubAccessLink} target="_blank" rel="noopener noreferrer sponsored" className={styles.inlineLink}>Source: Delta Air Lines</a></p>
                  <p>Second, you gain entry to the exclusive American Express Centurion Lounges when flying Delta on a ticket purchased with your card. <a href={reviewData.centurionLoungeLink} target="_blank" rel="noopener noreferrer sponsored" className={styles.inlineLink}>Source: American Express</a> This benefit also extends to Escape Lounges—The Centurion Studio Partner. This two-pronged access solidifies the card's position as a ticket to pre-flight comfort.</p>
                </section>
                
                <section id="section-status-boost" className={styles.reviewSection}>
                    <h2>Fast-Track to Medallion: MQD Headstart &amp; Boost</h2>
                    <p>Delta’s loyalty program now hinges entirely on Medallion Qualification Dollars (MQDs), making the Reserve card an essential tool for chasing elite status.</p>
                    <ul className={styles.featureList}>
                        <li><strong>MQD Headstart:</strong> At the start of each year, you get $2,500 MQDs deposited into your account.</li>
                        <li><strong>MQD Boost:</strong> You earn $1 MQD for every $10 you spend on the card, with no cap. Spending $25,000 in a year nets another 2,500 MQDs—enough to secure Silver status without setting foot on a plane. <a href={reviewData.medallionProgramLink} target="_blank" rel="noopener noreferrer sponsored" className={styles.inlineLink}>Source: Delta Air Lines</a></li>
                        <li><strong>Upgrade Priority:</strong> As a cardholder, you get priority for complimentary upgrades over other Medallion members in the same tier and fare class. In a crowded upgrade list, this is often the deciding factor.</li>
                    </ul>
                    <p>The card is no longer a supplement to a status strategy—it's the foundation.</p>
                </section>

                <section id="section-every-trip-perks" className={styles.reviewSection}>
                    <h2>Every-Trip Perks: Bags, Boarding, In-Flight Savings</h2>
                    <p>Beyond the headline benefits, the Reserve card smooths out the rough edges of travel with practical perks that deliver value on every trip.</p>
                    <ul className={styles.featureList}>
                        <li><strong>First Checked Bag Free:</strong> You and up to eight others on your reservation get a free first checked bag on Delta flights. For a family of four, this can save up to $280 on a single round-trip journey.</li>
                        <li><strong>Priority Boarding:</strong> You receive Main Cabin 1 boarding, which helps you settle in sooner and nearly guarantees overhead bin space for your carry-on.</li>
                        <li><strong>20% In-Flight Savings:</strong> Use your card for in-flight food and drinks and get a 20% discount via a statement credit.</li>
                    </ul>
                    <p>These benefits add up, saving you money and reducing hassle each time you fly.</p>
                </section>
                
                <section id="section-redemptions" className={styles.reviewSection}>
                    <h2>TakeOff 15 &amp; SkyMiles Redemptions</h2>
                    <p>The Delta SkyMiles program has a reputation for unpredictable "dynamic pricing," but the Reserve card gives you two powerful tools to maximize value.</p>
                    <p>First is the TakeOff 15 benefit, which automatically gives you a 15% discount when using miles to book Delta-operated award flights on delta.com or the app. <a href={reviewData.takeOff15Link} target="_blank" rel="noopener noreferrer sponsored" className={styles.inlineLink}>Source: Delta Air Lines</a></p>
                    <p>Your miles can be redeemed for flights on Delta and partners like Air France and Virgin Atlantic, used for upgrades, or applied to vacation packages. While other redemptions exist (like merchandise or gift cards), they typically offer lower value. To find the best deals, use Delta’s "Price Calendar" view and keep an eye out for their frequent SkyMiles Deals.</p>
                </section>

                <section id="section-earning-miles" className={styles.reviewSection}>
                    <h2>Earning Miles: 3× Delta, 1× Everything Else</h2>
                    <p>The Reserve card's earning structure is simple and specialized: it rewards loyalty to Delta above all else. You earn a solid 3X miles on all purchases made directly with Delta, including flights, upgrades, and Sky Club memberships. For a loyal Delta flyer, these miles add up quickly.</p>
                    <p>However, outside of that category, the card's potential drops off. On all other purchases—groceries, gas, dining, and more—it earns a flat 1X mile per dollar. In today's competitive market, that's a significant weakness.</p>
                    <p>This structure encourages a "two-card" strategy: use the Reserve for all things Delta to unlock its unique travel perks and status benefits, and use a different, high-earning card (even a no-fee option like the one in our <Link href={reviewData.deltaBlueReviewLink}><a>Delta SkyMiles® Blue Amex review</a></Link>) for all other daily spending to maximize your overall rewards.</p>
                </section>

                <section id="section-statement-credits" className={styles.reviewSection}>
                    <h2>Statement-Credit “Coupon Book” ($560 Potential)</h2>
                    <p>The Reserve card offers a portfolio of annual credits that can total up to $560 in value, dramatically lowering the effective annual fee. However, most are offered on a "use-it-or-lose-it" monthly basis, requiring active management. <a href={reviewData.statementCreditsGuideLink} target="_blank" rel="noopener noreferrer sponsored" className={styles.inlineLink}>Source: American Express</a></p>
                    <ul className={styles.featureList}>
                        <li><strong>$240 Resy Credit:</strong> Get up to $20 back per month as a statement credit on eligible purchases at U.S. restaurants in the Resy network. Pro-tip: Some users buy a $20 gift card each month to bank the value for a larger meal.</li>
                        <li><strong>$120 Rideshare Credit:</strong> Receive up to $10 back per month on U.S. rideshare purchases with services like Uber and Lyft. Pro-tip: Add $10 to your Uber Cash balance each month to save it for a future ride.</li>
                        <li><strong>$200 Delta Stays Credit:</strong> Earn up to a $200 statement credit each year when you book a prepaid hotel or vacation rental through Delta Stays on delta.com.</li>
                    </ul>
                </section>

                <section id="section-real-world-value" className={styles.reviewSection}>
                    <h2>Year-in-Life Value Example</h2>
                    <p>Let's meet Taylor, a family traveler from a Delta hub city. Taylor's family of four takes two domestic trips a year. Their goal is to travel more comfortably and achieve Silver Medallion status. They spend about $2,500 a month on their credit card for groceries, gas, and online shopping.</p>
                    <p><strong>Taylor's Year 1 Value:</strong></p>
                    <h3>Status Progress:</h3>
                    <ul>
                        <li>MQD Headstart: +$2,500 MQDs.</li>
                        <li>MQD Boost: $30,000 in annual spending ($2,500 x 12) on the card earns +$3,000 MQDs ($30,000 / $10).</li>
                        <li><strong>Total:</strong> Taylor earns $5,500 MQDs, securing Silver Medallion status without booking a single flight.</li>
                    </ul>
                    <h3>Value from Perks & Credits:</h3>
                    <ul>
                        <li>Welcome Offer: +$1,140 (from 95,000 miles).</li>
                        <li>Statement Credits: +$360 (assuming full use of Resy and Rideshare credits).</li>
                        <li>Free Checked Bags: +$280 (2 trips x 4 people x $35/bag).</li>
                    </ul>
                    <p><strong>Total Year 1 Value: $1,780.</strong></p>
                    <p><strong>Net Value: $1,780 (Value) - $650 (Fee) = +$1,130.</strong></p>
                    <p>For Taylor, the card is a clear winner, delivering significant positive value and elite status.</p>
                </section>

                <section id="section-rates-fees" className={styles.reviewSection}>
                    <h2>Rates, Fees &amp; Authorized-User Costs</h2>
                    <p>It's crucial to understand the card's full financial framework. This is a travel card, not a tool for carrying debt.</p>
                     <ul className={styles.featureList}>
                        <li><strong>Annual Fee:</strong> ${reviewData.annualFee}.</li>
                        <li><strong>Authorized User Fee:</strong> $175 annually for each additional card. Authorized users also get their own Sky Club access, which is a significant value-add.</li>
                        <li><strong>APRs:</strong> The variable purchase APR is high, typically {reviewData.aprRange}. Avoid carrying a balance, as interest charges will quickly erase any rewards you earn.</li>
                        <li><strong>Foreign Transaction Fee:</strong> None. This is essential for any travel card, saving you ~3% on all purchases abroad.</li>
                        <li><strong>Late/Returned Payment Fees:</strong> Up to $40.</li>
                    </ul>
                    <p>The golden rule: Always pay your statement balance in full and on time.</p>
                </section>

                <section id="section-user-profile" className={styles.reviewSection}>
                    <h2>Ideal vs. Poor-Fit Cardholders</h2>
                    <p>This card is not a one-size-fits-all solution. Its value depends entirely on your loyalty to Delta and your travel habits.</p>
                    <h3>The Ideal Cardholder: "The Delta Status Seeker"</h3>
                    <p>This person flies Delta at least 5-10 times a year, lives near a Delta hub, and actively pursues Medallion status. They value the lounge experience, travel with a companion, and are organized enough to maximize the monthly statement credits. They understand the card's weakness and use another card for everyday spending.</p>
                    <h3>Who Should Think Twice: "The Occasional Traveler"</h3>
                    <p>This traveler flies only once or twice a year, is airline-agnostic, and won't use the Companion Certificate. They find the monthly credits to be a hassle and want a single, simple card for all their spending. The 1X earning rate on non-Delta purchases is a deal-breaker for this profile. For this traveler, the card in our <Link href={reviewData.deltaGoldReviewLink}><a>Delta SkyMiles® Gold Amex review</a></Link> is likely a much better fit.</p>
                </section>

                <section id="section-pros-cons" className={styles.reviewSection}>
                    <h2>Pros &amp; Cons Snapshot</h2>
                    <DraggableTableWrapper>
                        <div className={styles.tableContainer}>
                            <table className={`${styles.statsTable} ${styles.comparisonTable}`}>
                                <thead><tr><th>Pros</th><th>Cons</th></tr></thead>
                                <tbody>
                                    <tr><td>Generous Welcome Offer provides huge value in the first year.</td><td>Steep ${reviewData.annualFee} Annual Fee is a significant upfront cost.</td></tr>
                                    <tr><td>High-Value Companion Certificate can be worth over $1,000.</td><td>Weak Everyday Earning Rate (1X on non-Delta spend) is uncompetitive.</td></tr>
                                    <tr><td>Powerful Path to Medallion Status is the best for earning status through spending.</td><td>Limited Sky Club Access (15 visits/year) may not be enough for road warriors.</td></tr>
                                    <tr><td>Comprehensive Lounge Access (Sky Club and Centurion) provides a premium experience.</td><td>Companion Certificate can be difficult to redeem due to limited availability.</td></tr>
                                    <tr><td>Valuable Annual Credits can offset a huge portion of the annual fee.</td><td>"Coupon Book" monthly credits require active tracking.</td></tr>
                                    <tr><td>TakeOff 15 Discount makes every SkyMile more valuable.</td><td></td></tr>
                                </tbody>
                            </table>
                        </div>
                    </DraggableTableWrapper>
                </section>

                <section id="section-comparison" className={styles.reviewSection}>
                    <h2>Reserve vs. Key Competitors</h2>
                    <p>No card exists in a vacuum. Here’s how the Reserve stacks up against its main rivals.</p>
                     <DraggableTableWrapper>
                        <div className={styles.tableContainer}>
                            <table className={`${styles.statsTable} ${styles.comparisonTable}`}>
                                <thead>
                                    <tr>
                                        <th>Feature</th>
                                        <th><strong>Delta Reserve Card</strong></th>
                                        <th>Amex Platinum Card</th>
                                        <th>Chase Sapphire Reserve</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Annual Fee</td>
                                        <td><strong>${reviewData.annualFee}</strong></td>
                                        <td>$695 <a href={reviewData.amexPlatinumCardPageLink} target="_blank" rel="noopener noreferrer sponsored" className={styles.inlineLink}>Source</a></td>
                                        <td>$550</td>
                                    </tr>
                                    <tr>
                                        <td>Lounge Access</td>
                                        <td><strong>Delta Sky Club (15 visits/yr), Centurion Lounge (on Delta flights)</strong></td>
                                        <td>Widest access: Centurion, Priority Pass, Delta Sky Club, etc.</td>
                                        <td>Priority Pass Select, Sapphire Lounges</td>
                                    </tr>
                                    <tr>
                                        <td>Airline Rewards</td>
                                        <td><strong>3X on Delta</strong></td>
                                        <td>5X on flights booked direct or via AmexTravel</td>
                                        <td>3X on all travel (after $300 credit)</td>
                                    </tr>
                                    <tr>
                                        <td>Signature Perk</td>
                                        <td><strong>First Class Companion Certificate &amp; MQD Boost</strong></td>
                                        <td>$200 airline fee credit &amp; broad luxury credits (Uber, Saks)</td>
                                        <td>$300 flexible annual travel credit</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </DraggableTableWrapper>
                    <p>The choice isn't about which card is "best," but which ecosystem fits your loyalty. The Amex Platinum is better for airline-agnostic travelers, while the Delta Reserve is built for those committed to the Delta ecosystem. For an even deeper dive, see our head-to-head <Link href={reviewData.amexPlatinumVsDeltaReserveLink}><a>Amex Platinum Card vs. Delta Reserve comparison</a></Link>.</p>
                </section>

                <section id="section-testimonials" className={styles.reviewSection}>
                  <h2>Real-World Voices (5 Mini-Testimonials)</h2>
                  <div className={styles.testimonialContainer}>
                      <blockquote className={styles.testimonialQuote}>
                          <p>&quot;The MQD Headstart and Boost are why I have this card. It's the only way I can realistically make Diamond status now, and that's worth the fee to me.&quot;</p>
                          <footer>– Mark, The Status Chaser</footer>
                      </blockquote>
                      <blockquote className={styles.testimonialQuote}>
                          <p>&quot;The companion certificate alone makes it worth it. We just booked a first-class trip that saved us $1,200. It's a no-brainer for us.&quot;</p>
                          <footer>– Sarah, The Companion Maximizer</footer>
                      </blockquote>
                       <blockquote className={styles.testimonialQuote}>
                          <p>&quot;The monthly credits are a bit annoying, but I use them enough. Between that, the 15 lounge visits, and the companion pass, I definitely come out ahead.&quot;</p>
                          <footer>– Ben, The Balanced User</footer>
                      </blockquote>
                      <blockquote className={styles.testimonialQuote}>
                          <p>&quot;It's a terrible card for daily spending. We use it for Delta flights and a monthly dinner with the Resy credit, and another card for everything else.&quot;</p>
                          <footer>– Chloe, The Rewards Realist</footer>
                      </blockquote>
                       <blockquote className={styles.testimonialQuote}>
                          <p>&quot;For our family of four, the free checked bags and lounge guest passes provide huge savings and comfort on our yearly vacations. It just makes travel easier.&quot;</p>
                          <footer>– David, The Family Traveler</footer>
                      </blockquote>
                  </div>
                </section>
                
                <section id="section-protections" className={styles.reviewSection}>
                    <h2>Travel &amp; Purchase Protections</h2>
                    <p>A key part of a premium card's value is its safety net of insurance benefits. The Reserve includes: <a href={reviewData.travelProtectionsLink} target="_blank" rel="noopener noreferrer sponsored" className={styles.inlineLink}>Source: Amex</a></p>
                    <ul className={styles.featureList}>
                        <li>Trip Cancellation/Interruption Insurance: Up to $10,000 per trip if you're sidelined for a covered reason.</li>
                        <li>Trip Delay Coverage: Up to $500 for essentials like meals and lodging if your trip is delayed more than 6 hours.</li>
                        <li>Baggage Insurance Plan: Coverage for lost, damaged, or stolen baggage.</li>
                        <li>Cell Phone Protection: Get reimbursed up to $800 (with a $50 deductible) if your phone is stolen or damaged, as long as you pay your wireless bill with the card.</li>
                        <li>Purchase Protection & Extended Warranty</li>
                    </ul>
                </section>

                <section id="section-customer-service" className={styles.reviewSection}>
                  <h2>Customer Service &amp; App Experience</h2>
                  <p>The card is backed by American Express, which consistently ranks at the top for customer satisfaction. You get reliable 24/7 service via phone or chat. The Amex mobile app is also a standout—clean, intuitive, and highly rated. It allows you to manage your account, track spending, and add Amex Offers, which provide targeted deals that can add even more value to your membership.</p>
                </section>
                
                <section id="section-faqs" className={`${styles.reviewSection} ${styles.faqSection}`}>
                  <h2>FAQs: Quick Answers</h2>
                  <div className={styles.faqContainer}>
                      {structuredDataOptimized['@graph'].find(item => item['@type'] === 'FAQPage').mainEntity.map((faq, index) => (
                          <details key={index} className={styles.faqItem} name={`faq-${index + 1}`}>
                              <summary className={styles.faqQuestion}>{`${index + 1}. ${faq.name}`}</summary>
                              <div className={styles.faqAnswer}><p>{faq.acceptedAnswer.text}</p></div>
                          </details>
                      ))}
                  </div>
                </section>

                <section id="section-verdict" className={styles.reviewSection}>
                  <h2>Final Verdict: Should You Board?</h2>
                  <p>The Delta SkyMiles® Reserve American Express Card is not for everyone. It's a high-cost, high-reward instrument precision-engineered for the dedicated Delta loyalist.</p>
                  <p>The card presents a clear trade-off. In exchange for a steep ${reviewData.annualFee} annual fee and a poor rewards rate on everyday purchases, you gain access to an ecosystem of benefits designed to make the entire Delta experience more comfortable and rewarding. It offers a tangible shortcut to elite status, a quiet refuge in crowded airports, and a golden ticket that can put you and a companion in first class.</p>
                  <p>The decision demands an honest self-assessment. If you live and breathe Delta, chase Medallion status, travel with a companion, and value the sanctuary of a lounge, then this card is an indispensable part of your travel strategy. For everyone else—the occasional flyer, the price-sensitive traveler, the free agent who values flexibility above all—the sky-high fee and airline-specific perks mean your loyalty is better invested elsewhere. Our <Link href={reviewData.bestAirlineCardsLink}><a>Best Airline Credit Cards 2025 guide</a></Link> can help you find the perfect match.</p>
                </section>

              </article>
            </div>
          </div>
          <aside className={styles.sidebarArea}>
            <TableOfContents sections={tocSections} />
          </aside>
        </div>
      </main>
      <div className={styles.stickyFooterContainer}>
        <div className={styles.stickyFooterContent}>
            <Image src={reviewData.imageUrl} alt={`${reviewData.cardName} small image`} width={60} height={38} className={styles.stickyFooterCardImage} />
            <div className={styles.stickyFooterText}>
              <span className={styles.stickyFooterCardName}>{reviewData.cardName}</span>
              <span className={styles.stickyFooterRating}>{siteName} Rating: {reviewData.ratingValue.toFixed(1)}/10</span>
            </div>
            <div className={styles.stickyFooterButtons}>
                <a href={reviewData.applyLink} className={`${styles.stickyFooterBtn} ${styles.stickyFooterBtnApply}`} target="_blank" rel="noopener noreferrer sponsored">Apply Now</a>
                <a href={reviewData.ratesFeesLink} className={`${styles.stickyFooterBtn} ${styles.stickyFooterBtnRates}`} target="_blank" rel="noopener noreferrer sponsored">See Rates & Fees</a>
            </div>
        </div>
      </div>
    </>
  );
}

export default DeltaReserveAmexReviewPage;