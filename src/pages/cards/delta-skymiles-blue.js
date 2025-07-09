/* ------------------------------------------------------------------
    File:  pages/reviews/delta-skymiles-blue-review.js
    Route: https://www.travelcardinsider.com/reviews/delta-skymiles-blue-review
------------------------------------------------------------------- */

import React, { useState, useEffect, useCallback, useRef } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import styles from '../../styles/ReviewPage.module.css'; // Assuming shared CSS module

// --- Reusable Components ---
import TableOfContents from '../../components/TableOfContents'; // Assuming shared TOC component

// --- Icon Imports (UPDATE PATHS AS NEEDED) ---
import IconGift from '../../components/icons/icon-gift.svg';
import IconStar from '../../components/icons/icon-star.svg';
import IconCheck from '../../components/icons/icon-Credit Card.svg';
import IconPlus from '../../components/icons/icon-target.svg';
import IconPlane from '../../components/icons/icon-plane.svg';
import IconDollar from '../../components/icons/icon-dollar.svg';
import IconX from '../../components/icons/icon-Star + Arrow Up.svg'; // Represents a 'Con' or 'Drawback'

// Lazy-load the tooltip component for performance
const RatingTooltip = dynamic(() => import('../../components/RatingTooltip'), { ssr: false, loading: () => null });

/* ──────────────────────────────
    CONSTANTS & STATIC DATA
    ────────────────────────────── */
const siteName = 'Travelcardinsider';
const siteUrl = 'https://www.travelcardinsider.com'; // UPDATE with your actual site URL
const pagePath = '/reviews/delta-skymiles-blue-review'; // Canonical path for this review
const pageUrlFull = `${siteUrl}${pagePath}`;
const publishDate = '2025-07-09'; // UPDATE with publish date
const updateDate = '2025-07-09'; // UPDATE with last modified date

// --- Core data for the Delta SkyMiles Blue Card review ---
const reviewData = {
  cardName        : 'Delta SkyMiles® Blue American Express Card',
  title           : 'Delta SkyMiles® Blue Amex Review (2025): No-Fee Ticket to the Sky?',
  description     : "In-depth 2025 review of the Delta SkyMiles® Blue American Express Card. Explore 2X miles on dining & Delta, its $0 annual fee, and key travel perks. Is this the best no-fee airline card for you?",
  keywords        : 'Delta SkyMiles Blue review, Delta Amex Blue, no-fee airline card, earn SkyMiles, Delta credit card, American Express review 2025, no annual fee travel card',
  author: { // UPDATE ALL AUTHOR DETAILS AS NEEDED
      name: 'Dilan Madushanka',
      title: 'Founder & Lead Editor',
      imageUrl: '/WhatsApp Image 2025-05-12 at 4.09.58 PM.jpeg', // UPDATE
      imageWidth: 40,
      imageHeight: 40,
      tooltipImageUrl: '/WhatsApp Image 2025-05-12 at 4.09.58 PM.jpeg', // UPDATE
      tooltipImageWidth: 60,
      tooltipImageHeight: 60,
      expertise: [
          'No-Annual-Fee Credit Cards',
          'Airline Co-Branded Cards',
          'Delta SkyMiles Program',
          'Beginner Travel Rewards',
          'American Express Cards'
      ],
      bioSnippet: 'Dilan Madushanka is the founder and lead editor of Travelcardinsider, dedicated to demystifying credit cards and uncovering their real-world value for smarter travel and rewards.',
      fullBioLink: '/author/dilan-madushanka', // UPDATE
      socialLinks: { // UPDATE
          linkedin: 'https://www.linkedin.com/in/dilan-madushanka-b65293365',
          twitter: 'https://x.com/team_dilan',
          email: 'team@travelcardinsider.com'
      }
  },
  siteName: siteName,
  imageUrl        : '/cards/delta-skymiles-blue-card.png', // UPDATE with your card image path
  imageWidth      : 1290,
  imageHeight     : 812,
  ratingValue     : 7.8,  // Assigned based on review verdict
  ratingCount     : 185,  // Placeholder user rating count
  reviewBody      : 'Our editors evaluate the Delta SkyMiles® Blue American Express Card based on its rewards structure (2X on Dining & Delta), its value as a no-annual-fee card, welcome offer accessibility, travel perks like no foreign transaction fees, and its key drawbacks like the lack of a free checked bag, to determine its overall value for budget-conscious, Delta-loyal travelers.',
  aprRange        : '20.24% to 29.24% variable APR',
  annualFee       : 0,
  applyLink       : 'https://www.travelcardinsider.com/apply/delta-blue', // IMPORTANT: REPLACE WITH YOUR ACTUAL AFFILIATE LINK
  // --- Official Citation Links from Your Text ---
  official: {
    applyWithConfidence: "https://www.americanexpress.com/us/credit-cards/features-benefits/apply-with-confidence/",
    cardDetails: "https://www.americanexpress.com/us/credit-cards/card/delta-skymiles-blue-american-express-card/",
    offerTerms: "https://www.americanexpress.com/us/credit-cards/card-application/apply/prospect/terms/delta-skymiles-blue-american-express-card/25330-10-0", // Example link, verify
    ratesAndFees: "https://www.americanexpress.com/us/credit-cards/card-application/apply/prospect/terms/delta-skymiles-blue-american-express-card/25330-10-0#FeeTable", // Example link, verify
    payWithMiles: "https://www.delta.com/us/en/skymiles/how-to-use-miles/pay-with-miles",
    baggageInfo: "https://www.delta.com/us/en/travel-planning-center/baggage/checked-baggage-fees",
    carRentalInsurance: "https://www.americanexpress.com/us/credit-cards/features-benefits/policies/car-rental-loss-and-damage-insurance-terms.html",
    amexOffers: "https://www.americanexpress.com/en-us/benefits/offers/",
    creditScoreResources: "https://www.americanexpress.com/us/credit-cards/credit-score-education/",
    skymilesProgramRules: "https://www.delta.com/us/en/skymiles/program-resources/program-rules",
    goldCardDetails: "https://www.americanexpress.com/us/credit-cards/card/delta-skymiles-gold-american-express-card/"
  },
  sku             : 'DELTA-BLUE-TCI-2025',
  mpn             : 'DELTABLUEAMEX',
  h1Content       : "The Travelcardinsider Review: Is the Delta SkyMiles® Blue Amex Your No-Fee Ticket to the Sky?",
};

/* ──────────────────────────────
    STRUCTURED DATA (JSON-LD)
    ────────────────────────────── */
const structuredData = {
  '@context': 'https://schema.org',
  '@graph'  : [
    {
      '@type'        : 'Product',
      '@id'          : `${pageUrlFull}#product`,
      name           : reviewData.cardName,
      image          : `${siteUrl}${reviewData.imageUrl}`,
      description    : reviewData.description,
      sku            : reviewData.sku,
      mpn            : reviewData.mpn,
      brand          : { '@type': 'Brand', name: 'American Express' },
      aggregateRating: {
        '@type'    : 'AggregateRating',
        ratingValue : reviewData.ratingValue.toString(),
        bestRating  : '10',
        worstRating : '1',
        ratingCount : reviewData.ratingCount.toString(),
        reviewCount : '1',
      },
      offers: {
        '@type'            : 'Offer',
        url                : reviewData.applyLink,
        priceCurrency      : 'USD',
        price              : reviewData.annualFee.toString(),
        priceValidUntil    : '2026-12-31',
        itemCondition      : 'https://schema.org/NewCondition',
        availability       : 'https://schema.org/InStock',
        priceSpecification: {
            '@type'              : 'PriceSpecification',
            priceCurrency        : 'USD',
            price                : reviewData.annualFee.toString(),
            valueAddedTaxIncluded: 'false',
            description          : `Annual fee: $${reviewData.annualFee}.`,
        },
        seller: { '@type': 'Organization', name: 'American Express' },
      },
      review: { '@id': `${pageUrlFull}#editorReview` },
    },
    {
      '@type'         : 'Review',
      '@id'           : `${pageUrlFull}#editorReview`,
      name            : `${reviewData.cardName} – Review Updated ${new Date(updateDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}`,
      itemReviewed    : { '@id': `${pageUrlFull}#product` },
      reviewBody      : reviewData.reviewBody,
      reviewRating    : {
        '@type'    : 'Rating',
        ratingValue : reviewData.ratingValue.toString(),
        bestRating  : '10',
        worstRating : '1',
      },
      author          : { '@type': 'Person', name: reviewData.author.name, url: `${siteUrl}${reviewData.author.fullBioLink}` },
      publisher       : { '@type' : 'Organization', name: siteName, logo: { '@type': 'ImageObject', url: `${siteUrl}/images/logo/logo-schema.png` } }, // UPDATE LOGO PATH
      datePublished   : publishDate,
      dateModified    : updateDate,
    },
    {
      '@type'            : 'WebPage',
      '@id'              : pageUrlFull,
      url                : pageUrlFull,
      name               : reviewData.title,
      description        : reviewData.description,
      inLanguage         : 'en-US',
      isPartOf           : { '@id': `${siteUrl}#website` },
      primaryImageOfPage : { '@id': `${pageUrlFull}#primaryImage` },
      breadcrumb         : { '@id': `${pageUrlFull}#breadcrumbs` },
      datePublished      : publishDate,
      dateModified       : updateDate,
       author: { '@type': 'Person', name: reviewData.author.name, url: `${siteUrl}${reviewData.author.fullBioLink}` },
    },
    {
      '@type'   : 'ImageObject',
      '@id'     : `${pageUrlFull}#primaryImage`,
      url       : `${siteUrl}${reviewData.imageUrl}`,
      width     : reviewData.imageWidth,
      height    : reviewData.imageHeight,
      caption   : reviewData.cardName,
    },
    {
      '@type'        : 'BreadcrumbList',
      '@id'          : `${pageUrlFull}#breadcrumbs`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: siteName, item: siteUrl },
        { '@type': 'ListItem', position: 2, name: 'Credit Card Reviews', item: `${siteUrl}/reviews` },
        { '@type': 'ListItem', position: 3, name: `${reviewData.cardName} Review`, item: pageUrlFull },
      ],
    },
    { // Populated from the "Card-Specific Frequently Asked Questions (FAQs)" section of your text
      '@type'    : 'FAQPage',
      '@id'      : `${pageUrlFull}#faqs`,
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What credit score do I need for the Delta Blue Card?',
          acceptedAnswer: { '@type': 'Answer', text: "While not guaranteed, American Express generally looks for a Good to Excellent credit score (typically FICO 690+)." }
        },
        {
          '@type': 'Question',
          name: 'Do my Delta SkyMiles expire?',
          acceptedAnswer: { '@type': 'Answer', text: "No. A huge perk of the SkyMiles program is that your miles never expire." }
        },
        {
          '@type': 'Question',
          name: 'Does this card help me earn Delta Medallion elite status?',
          acceptedAnswer: { '@type': 'Answer', text: "No. This card does not offer any pathways to earning elite status, unlike the premium Delta cards." }
        },
        {
          '@type': 'Question',
          name: 'Can I downgrade my Delta Gold card to the Blue card?',
          acceptedAnswer: { '@type': 'Answer', text: "Yes. This is a popular strategy to avoid an annual fee while keeping your account history, which is good for your credit score." }
        },
        {
          '@type': 'Question',
          name: 'Is "Pay with Miles" a good deal?',
          acceptedAnswer: { '@type': 'Answer', text: "It’s convenient, but you get a better value (more cents per mile) by booking award travel directly." }
        },
      ],
    },
    {
      '@type' : 'Organization',
      '@id'   : `${siteUrl}#website`,
      name    : siteName,
      url     : siteUrl,
      logo    : { '@type': 'ImageObject', url: `${siteUrl}/images/logo/logo-schema.png` }, // UPDATE LOGO PATH
      sameAs  : [ // UPDATE with your actual social links
        "https://www.facebook.com/YourTravelcardinsiderPage",
        "https://twitter.com/YourTravelcardinsiderHandle",
      ],
    },
  ],
};

// --- Data for Page Components ---
const ratingCriteria = [
    'Rewards on Dining (2X)',
    'Rewards on Delta Purchases (2X)',
    'Value as a $0 Annual Fee Card',
    'Welcome Offer Accessibility',
    'Benefit: No Foreign Transaction Fees',
    'Benefit: 20% In-Flight Savings',
    'Drawback: No Free Checked Bag',
    'Drawback: No Priority Boarding',
    'Value of Amex Protections (Insurance, etc.)',
    'Simplicity and Ease of Use',
];

const tocSections = [
    { id: 'section-intro', title: 'Introduction: The Allure of a No-Fee Airline Card' },
    { id: 'section-snapshot', title: 'Card Snapshot & "Best For" Tagline' },
    { id: 'section-welcome-offer', title: 'The Welcome Offer: A Gentle Nudge' },
    { id: 'section-earning', title: 'How You Earn Miles: More Than Just Flights' },
    { id: 'section-spending-scenario', title: 'The Real-World Value: A Spending Scenario' },
    { id: 'section-redeeming', title: 'Redeeming Your SkyMiles: Flexibility and Options' },
    { id: 'section-key-features', title: 'Key Features: The No-Fee Advantage' },
    { id: 'section-deal-breakers', title: 'The Deal-Breakers: What You\'re Giving Up' },
    { id: 'section-amex-benefits', title: 'Beyond the Basics: The Hidden Value of Amex Benefits' },
    { id: 'section-user-profile', title: 'Detailed User Profile: The Perfect Match' },
    { id: 'section-who-elsewhere', title: 'Who Should Look Elsewhere?' },
    { id: 'section-pros-cons', title: 'Pros & Cons: A Quick Summary' },
    { id: 'section-competition', title: 'The No-Fee Airline Gauntlet: Delta Blue vs. The Competition' },
    { id: 'section-upgrade', title: 'Stepping Up: Is the Delta Gold Card Worth the Fee?' },
    { id: 'section-fees', title: 'The Full Spectrum of Rates & Fees' },
    { id: 'section-testimonials', title: 'Real Voices: What Cardholders Are Saying' },
    { id: 'section-verdict', title: 'Our Expert Verdict: The Bottom Line' },
    { id: 'section-faqs', title: 'Card-Specific Frequently Asked Questions (FAQs)' },
    { id: 'section-apply', title: 'Your Next Step: How to Apply' },
];

// --- Helper Components (Can be moved to /components/ if preferred) ---
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
    document.addEventListener('mouseup', stopDrag);
    document.addEventListener('mouseleave', stopDrag);
    el.addEventListener('mousemove', onMove);
    el.addEventListener('touchstart', startDrag, { passive: true });
    document.addEventListener('touchend', stopDrag);
    el.addEventListener('touchmove', onMove, { passive: false });
    return () => {
      el.removeEventListener('mousedown', startDrag);
      document.removeEventListener('mouseup', stopDrag);
      document.removeEventListener('mouseleave', stopDrag);
      el.removeEventListener('mousemove', onMove);
      el.removeEventListener('touchstart', startDrag);
      document.removeEventListener('touchend', stopDrag);
      el.removeEventListener('touchmove', onMove);
    };
  }, []);
  return (<div ref={containerRef} className={styles.draggableScrollContainer}>{children}</div>);
}

const OfficialLink = ({ href, children }) => (
    <a href={href} target="_blank" rel="noopener noreferrer sponsored">{children}</a>
);

/* ──────────────────────────────
    MAIN PAGE COMPONENT
    ────────────────────────────── */
function DeltaSkyMilesBlueReviewPage() {
  const [showRatingInfo, setShowRatingInfo] = useState(false);
  const [showAuthorBioTooltip, setShowAuthorBioTooltip] = useState(false);
  const authorRef = useRef(null);
  const authorTooltipRef = useRef(null);
  const ratingTooltipRef = useRef(null);

  // --- Handlers for tooltips ---
  const handleIconClick = useCallback((event) => {
      event.preventDefault();
      event.stopPropagation();
      setShowRatingInfo(prevState => !prevState);
  }, []);

  const handleAuthorMouseEnter = useCallback(() => setShowAuthorBioTooltip(true), []);
  const handleAuthorMouseLeave = useCallback(() => setShowAuthorBioTooltip(false), []);

    useEffect(() => {
      function handleClickOutside(event) {
          if (showAuthorBioTooltip && authorRef.current && !authorRef.current.contains(event.target) && authorTooltipRef.current && !authorTooltipRef.current.contains(event.target)) {
              setShowAuthorBioTooltip(false);
          }
          if (showRatingInfo && ratingTooltipRef.current && !ratingTooltipRef.current.contains(event.target) && !event.target.closest(`.${styles.infoIconButton}`)) {
               setShowRatingInfo(false);
          }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showAuthorBioTooltip, showRatingInfo]);


  // --- Data for the summary box specific to Delta Blue ---
  const summaryBoxData = {
    welcomeOffer: "10,000 bonus miles after $1,000 spend in first 6 months.",
    annualFee: "$0",
    topEarning: "2X Miles on Delta & at restaurants worldwide.",
    keyPerk: "No Foreign Transaction Fees & 20% in-flight savings.",
    bestFor: "The Delta-loyal foodie's first foray into flight rewards."
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
        <link rel="alternate" href={pageUrlFull} hreflang="en-us" />
        <meta property="og:type" content="article" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content={siteName} />
        <meta property="og:title" content={reviewData.title} />
        <meta property="og:description" content={reviewData.description} />
        <meta property="og:url" content={pageUrlFull} />
        <meta property="og:image" content={`${siteUrl}${reviewData.imageUrl}`} />
        <meta property="og:image:width" content={String(reviewData.imageWidth)} />
        <meta property="og:image:height" content={String(reviewData.imageHeight)} />
        <meta property="article:publisher" content={`https://www.facebook.com/YourTravelcardinsiderPage`} />
        <meta property="article:section" content="Credit Card Reviews" />
        <meta property="article:published_time" content={publishDate} />
        <meta property="article:modified_time"  content={updateDate} />
        <meta property="article:author" content={`${siteUrl}${reviewData.author.fullBioLink}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@YourTravelcardinsiderHandle" />
        <meta name="twitter:creator" content={`@${reviewData.author.socialLinks?.twitter?.split('/').pop() || 'YourAuthorHandle'}`} />
        <meta name="twitter:title" content={reviewData.title} />
        <meta name="twitter:description" content={reviewData.description} />
        <meta name="twitter:image" content={`${siteUrl}${reviewData.imageUrl}`} />
        {/* Favicons (UPDATE PATHS) */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </Head>

      <main>
        <div className={styles.reviewPageLayout}>
          <div className={styles.mainContentArea}>
            <section className={styles.heroSection}>
              <div className={styles.heroTextContainer}>
                <h1 className={styles.heroTitle}>{reviewData.h1Content}</h1>
                 <div className={styles.authorBioContainer} ref={authorRef} onMouseEnter={handleAuthorMouseEnter} onMouseLeave={handleAuthorMouseLeave} tabIndex={0} role="button" aria-expanded={showAuthorBioTooltip}>
                    <Image src={reviewData.author.imageUrl} alt={`${reviewData.author.name} headshot`} width={reviewData.author.imageWidth} height={reviewData.author.imageHeight} className={styles.authorImageSmall} priority />
                    <div className={styles.authorInfoBlock}>
                        <div className={styles.authorNameLine}>By <span className={styles.authorName}>{reviewData.author.name}</span></div>
                        <span className={styles.authorTitle}>{reviewData.author.title}</span>
                        <time dateTime={updateDate} className={styles.authorLastEdited}>Last updated: {new Date(updateDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
                    </div>
                    {showAuthorBioTooltip && (
                         <div className={styles.authorTooltip} ref={authorTooltipRef} role="tooltip">
                            <div className={styles.authorTooltipHeader}>
                                <Image src={reviewData.author.tooltipImageUrl} alt={`${reviewData.author.name} large headshot`} width={reviewData.author.tooltipImageWidth} height={reviewData.author.tooltipImageHeight} className={styles.authorTooltipImage} />
                                <div className={styles.authorTooltipInfo}>
                                    <span className={styles.authorTooltipName}>{reviewData.author.name}</span>
                                    <span className={styles.authorTooltipTitle}>{reviewData.author.title}</span>
                                </div>
                            </div>
                            <div className={styles.authorTooltipExpertise}><strong>Expertise:</strong><ul>{reviewData.author.expertise.map(area => <li key={area}>{area}</li>)}</ul></div>
                            <p className={styles.authorTooltipBioSnippet}>{reviewData.author.bioSnippet}</p>
                            <Link href={reviewData.author.fullBioLink} legacyBehavior><a className={styles.authorTooltipBioLink}>See full bio</a></Link>
                         </div>
                    )}
                </div>
              </div>
              <div className={styles.heroImageContainer}>
                <div className={styles.cardImageContainer}>
                  <Image src={reviewData.imageUrl} alt={reviewData.cardName} width={reviewData.imageWidth} height={reviewData.imageHeight} className={styles.heroImage} priority />
                </div>
                <div className={styles.ratingSection}>
                  <button type="button" className={styles.infoIconButton} aria-label="Rating Information" onClick={handleIconClick} aria-expanded={showRatingInfo}>
                    <svg aria-hidden="true" focusable="false" className={styles.infoIcon} viewBox="0 0 16 16"><path fillRule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/><path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/></svg>
                  </button>
                  {siteName} Rating: <strong>{reviewData.ratingValue.toFixed(1)}/10</strong>
                  {showRatingInfo && <RatingTooltip ref={ratingTooltipRef} ratingValue={reviewData.ratingValue} ratingCriteria={ratingCriteria} onClose={() => setShowRatingInfo(false)} />}
                </div>
                 <div className={styles.starRating} title={`Rated ${reviewData.ratingValue} out of 10 stars`}>★★★★★<span className={styles.filledStars} style={{'--rating': `${(reviewData.ratingValue / 10) * 100}%`}}>★★★★★</span></div>
                 <div className={styles.heroCtaContainer}>
                  <div>
                    <a href={reviewData.applyLink} target="_blank" rel="noopener noreferrer sponsored" className={`${styles.applyNowButton} ${styles.heroApplyButton}`}>Apply Securely Now</a>
                    <span className={styles.heroApplyButtonDisclaimer}>on American Express&apos;s official site</span>
                  </div>
                </div>
              </div>
            </section>

            <div className={styles.reviewContainer}>
              <article>
                <header className={styles.reviewHeader}>
                    <div className={styles.summaryBox}>
                        <h2 className={styles.summaryBoxTitle}>{reviewData.cardName}: Key Insights</h2>
                        <div className={styles.summaryGrid}>
                            <div className={styles.summaryItem}><span className={styles.summaryIcon}><IconGift /></span><span className={styles.summaryLabel}>Welcome Offer:</span><span className={styles.summaryValue}>{summaryBoxData.welcomeOffer}</span></div>
                            <div className={styles.summaryItem}><span className={styles.summaryIcon}><IconCheck /></span><span className={styles.summaryLabel}>Annual Fee:</span><span className={styles.summaryValue}>{summaryBoxData.annualFee}</span></div>
                            <div className={styles.summaryItem}><span className={styles.summaryIcon}><IconStar /></span><span className={styles.summaryLabel}>Top Earning Rate:</span><span className={styles.summaryValue}>{summaryBoxData.topEarning}</span></div>
                            <div className={styles.summaryItem}><span className={styles.summaryIcon}><IconPlane /></span><span className={styles.summaryLabel}>Key Travel Perk:</span><span className={styles.summaryValue}>{summaryBoxData.keyPerk}</span></div>
                            <div className={styles.summaryItem} data-full-width="true"><span className={styles.summaryIcon}><IconPlus /></span><span className={styles.summaryLabel}>Best For:</span><span className={styles.summaryValue}>{summaryBoxData.bestFor}</span></div>
                        </div>
                         <div className={styles.summaryBoxActions}>
                            <OfficialLink href={reviewData.official.ratesAndFees} className={styles.summaryRatesLink}>See Card Rates & Fees</OfficialLink>
                        </div>
                    </div>
                </header>

                <section id="section-intro" className={styles.reviewSection}>
                    <p>The dream of travel—exploring new cities, relaxing on distant shores—often collides with the hard reality of its cost. For years, <Link href="/general/best-travel-cards-2025">travel rewards cards</Link> have been the answer, turning your everyday spending into flights and adventures. But this solution usually comes with a catch: a hefty annual fee.</p>
                    <p>This leaves many travelers asking a simple question: Is paying a yearly fee for the privilege of earning rewards actually worth it?</p>
                    <p>The <OfficialLink href={reviewData.official.cardDetails}>{reviewData.cardName}</OfficialLink> aims to be the perfect answer. As the entry-level card from a global airline and a credit card powerhouse, it makes a tempting promise: earn valuable Delta SkyMiles without paying an annual fee. In a world of high-perk, high-fee cards, does the Delta Blue chart a winning course for the budget-conscious traveler? Or does it leave you stranded at the gate?</p>
                    <p>This definitive review will explore every angle of the card—from its surprising earning potential to its critical drawbacks—to help you decide if it’s the right boarding pass for your wallet.</p>
                </section>

                <section id="section-snapshot" className={styles.reviewSection}>
                  <h2>Card Snapshot &amp; &quot;Best For&quot; Tagline</h2>
                  <ul className={styles.featureList}>
                    <li><strong>Card Name:</strong> {reviewData.cardName}</li>
                    <li><strong>Annual Fee:</strong> $0</li>
                    <li><strong>Welcome Offer:</strong> Earn 10,000 bonus miles after you spend $1,000 in purchases on your new Card in your first 6 months. (<OfficialLink href={reviewData.official.offerTerms}>American Express: {reviewData.cardName} Offer Terms</OfficialLink>)</li>
                    <li><strong>Rewards Rate:</strong> Earn 2X Miles on Delta purchases, 2X Miles at restaurants worldwide (including U.S. takeout and delivery), and 1X Mile on all other eligible purchases. (<OfficialLink href={reviewData.official.cardDetails}>American Express: {reviewData.cardName} Details</OfficialLink>)</li>
                    <li><strong>Key Perk:</strong> No Foreign Transaction Fees.</li>
                  </ul>
                  <h3><OfficialLink href="https://www.travelcardinsider.com">Travelcardinsider</OfficialLink> &quot;Best For&quot; Tagline: The Delta-loyal foodie's first foray into flight rewards.</h3>
                  <p>This card is built for a specific person: someone who loves dining out, flies Delta a few times a year, and wants to dip their toes into travel rewards without committing to an annual fee. The 2X miles on dining is the standout feature, turning your restaurant budget into a powerful engine for earning flights.</p>
                </section>
                
                <section id="section-welcome-offer" className={styles.reviewSection}>
                    <h2>The Welcome Offer: A Gentle Nudge into the SkyMiles World</h2>
                    <p>The Delta Blue Card greets you with a modest but highly accessible welcome offer: Earn 10,000 bonus miles after spending $1,000 in your first 6 months.</p>
                    <p>So, what's that bonus actually worth? Based on real-world flight data, we <OfficialLink href="https://www.travelcardinsider.com/about/how-we-rate">value Delta SkyMiles</OfficialLink> at an average of 1.2 cents each. That makes the 10,000-mile bonus worth about $120 toward your next Delta flight.</p>
                    <p>While that’s smaller than the bonuses on premium cards, the beauty here is the low barrier to entry. The spending requirement breaks down to just ~$167 per month, making it easy to hit without overspending. Plus, with Amex’s <OfficialLink href={reviewData.official.applyWithConfidence}>"Apply with Confidence"</OfficialLink> feature, you can see if you’re approved without any impact on your credit score, removing the usual application anxiety.</p>
                </section>

                <section id="section-earning" className={styles.reviewSection}>
                    <h2>How You Earn Miles: More Than Just Flights</h2>
                    <p>Here’s where the Delta Blue starts to pull away from the pack. You’ll earn miles through a simple, powerful structure:</p>
                    <ul className={styles.featureList}>
                        <li><strong>2X Miles on Delta Purchases:</strong> This covers flights, seat upgrades, and even in-flight food and drinks.</li>
                        <li><strong>2X Miles at Restaurants Worldwide:</strong> This is the card's secret weapon. You get double miles on dining, from your local cafe to U.S. takeout and delivery services. For a <Link href="/no-fee/best-no-fee-cards-2025">no-fee airline card</Link>, this is an outstanding perk that lets you rack up miles with your everyday lifestyle spending.</li>
                        <li><strong>1X Mile on All Other Eligible Purchases:</strong> Your everyday spending on everything else earns a steady one mile per dollar.</li>
                    </ul>
                    <p>This hybrid approach makes the Delta Blue a lifestyle card as much as a travel card—a rare and valuable combination in the no-fee space.</p>
                </section>
                
                <section id="section-spending-scenario" className={styles.reviewSection}>
                    <h2>The Real-World Value: A Spending Scenario for Taylor, the Family Traveler</h2>
                    <p>Let's see how this works for Taylor, a family traveler who lives near a Delta hub. Taylor’s family takes one big trip a year, dines out regularly, and uses the card for all their household spending.</p>
                    <h3>Here’s how the miles add up in Year 1:</h3>
                    <ul className={styles.featureList}>
                        <li><strong>Annual Delta Flights:</strong> One family trip costing $1,200.<br/><em>1,200 x 2 miles/$ = 2,400 SkyMiles</em></li>
                        <li><strong>Dining & Takeout:</strong> $300 per month ($3,600 annually).<br/><em>3,600 x 2 miles/$ = 7,200 SkyMiles</em></li>
                        <li><strong>All Other Purchases:</strong> Groceries, gas, shopping, and bills at $1,500 per month ($18,000 annually).<br/><em>18,000 x 1 mile/$ = 18,000 SkyMiles</em></li>
                    </ul>
                    <p><strong>Total Miles from Spending:</strong> In one year, Taylor’s family earns a total of 27,600 SkyMiles.</p>
                    <h3>First-Year Total with Welcome Bonus:</h3>
                    <p>27,600 miles (from spending) + 10,000 miles (welcome bonus) = <strong>37,600 SkyMiles</strong></p>
                    <p>At a value of 1.2 cents per mile, Taylor’s miles are worth approximately $451 toward flights. That’s a massive return from a card with no annual fee and could easily cover a round-trip domestic ticket during a Delta SkyMiles Deal.</p>
                </section>

                <section id="section-redeeming" className={styles.reviewSection}>
                    <h2>Redeeming Your SkyMiles: Flexibility and Options</h2>
                    <p>Earning miles is easy, but how do you use them? You have two main options:</p>
                     <ul className={styles.featureList}>
                        <li><strong>Award Travel:</strong> This is your best bet for maximizing value. By booking flights with miles on Delta.com, you can find incredible deals, especially if your dates are flexible. Delta’s dynamic pricing means the miles needed can change, but it also creates opportunities for flash sales.</li>
                        <li><strong>Pay with Miles:</strong> An exclusive perk for cardholders, this lets you redeem miles for a simple cash discount on flights. Every 5,000 miles gives you a $50 discount. (<OfficialLink href={reviewData.official.payWithMiles}>Delta Air Lines: Pay with Miles Program</OfficialLink>) While incredibly straightforward, this feature locks you into a redemption rate of 1 cent per mile, which is less than what you can get with Award Travel. It’s a good backup option, but always hunt for an award flight first.</li>
                    </ul>
                </section>

                <section id="section-key-features" className={styles.reviewSection}>
                    <h2>Key Features: The No-Fee Advantage</h2>
                    <p>The Delta Blue’s appeal is built on delivering key travel perks without the cost.</p>
                    <ul className={styles.featureList}>
                        <li><strong>$0 Annual Fee:</strong> The cornerstone benefit. You can earn miles and keep the card forever without paying a dime.</li>
                        <li><strong>No Foreign Transaction Fees:</strong> A must-have for international travel. This saves you the typical 3% surcharge many other no-fee cards charge on purchases abroad. (<OfficialLink href={reviewData.official.ratesAndFees}>American Express: Card Rates & Fees</OfficialLink>)</li>
                        <li><strong>20% Back on In-Flight Purchases:</strong> Use your card for snacks, drinks, or headsets on a Delta flight, and you’ll get a 20% statement credit. It’s a small but satisfying perk.</li>
                    </ul>
                </section>

                <section id="section-deal-breakers" className={styles.reviewSection}>
                    <h2>The Deal-Breakers: What You're Giving Up</h2>
                    <p>To offer a $0 annual fee, some serious cuts had to be made. Be aware of what you’re missing:</p>
                    <ul className={styles.featureList}>
                        <li><strong>No Free Checked Bags:</strong> This is the most significant drawback. A checked bag costs $35 each way on Delta. (<OfficialLink href={reviewData.official.baggageInfo}>Delta Air Lines: Baggage Information</OfficialLink>) One round-trip with a bag costs $70, instantly making the Delta Gold card (with its free bag perk) a better financial choice for anyone who doesn't travel light.</li>
                        <li><strong>No Priority Boarding:</strong> You’ll board in one of the last groups. On full flights, this means you might be forced to gate-check your carry-on bag due to a lack of overhead bin space.</li>
                    </ul>
                </section>
                
                <section id="section-amex-benefits" className={styles.reviewSection}>
                    <h2>Beyond the Basics: The Hidden Value of Amex Benefits</h2>
                    <p>While the Delta perks are limited, the card comes loaded with valuable benefits from the American Express network that provide real security and savings.</p>
                     <ul className={styles.featureList}>
                        <li><strong>Car Rental Loss and Damage Insurance:</strong> Pay for your rental car with the card and you can be covered for damage or theft. (<OfficialLink href={reviewData.official.carRentalInsurance}>American Express: Car Rental Loss and Damage Insurance</OfficialLink>)</li>
                        <li><strong>Global Assist® Hotline:</strong> When you're traveling more than 100 miles from home, you have 24/7 access to a hotline for medical, legal, and other emergency assistance.</li>
                        <li><strong>Amex Offers:</strong> Access to a rotating list of valuable statement credits and bonus point offers at dozens of popular retailers, restaurants, and travel providers. (<OfficialLink href={reviewData.official.amexOffers}>American Express: Amex Offers</OfficialLink>)</li>
                        <li><strong>Purchase & Warranty Protection:</strong> Your eligible purchases are covered against accidental damage or theft for 90 days, and the original manufacturer's warranty can be extended by up to a year.</li>
                    </ul>
                </section>

                <section id="section-user-profile" className={styles.reviewSection}>
                    <h2>Detailed User Profile: The Perfect Match for the Delta Blue</h2>
                     <p>This card isn't for everyone. It shines brightest for three specific people:</p>
                    <div className={styles.profileCardContainer}>
                      <div className={styles.profileCard}>
                          <h4>The Aspiring Traveler</h4>
                          <p>You're new to travel rewards, live near a Delta hub, and want a simple, no-risk way to start earning miles for future trips without paying a fee.</p>
                      </div>
                      <div className={styles.profileCard}>
                          <h4>The Delta-Loyal Foodie</h4>
                          <p>Your biggest spending categories are dining out and occasional flights on Delta. The dual 2X rewards on both are a perfect match for your lifestyle.</p>
                      </div>
                      <div className={styles.profileCard}>
                          <h4>The Strategic Downgrader</h4>
                          <p>You're a savvy card user who previously had a premium Delta card. You can downgrade to the Blue card to stop paying the annual fee while keeping your credit line and account history intact—a smart move for your credit score.</p>
                      </div>
                  </div>
                </section>
                
                <section id="section-who-elsewhere" className={styles.reviewSection}>
                    <h2>Who Should Look Elsewhere?</h2>
                    <p>This card is a poor fit for a few other profiles:</p>
                     <ul className={styles.featureList}>
                        <li><strong>The Frequent Bag-Checker:</strong> If you check a bag on Delta even twice a year, get the Delta SkyMiles® Gold card instead. The baggage fee savings will outweigh the annual fee.</li>
                        <li><strong>The Road Warrior:</strong> If you value comfort and efficiency, the lack of priority boarding and <Link href="/lounge/best-lounge-access-cards-2025">lounge access</Link> will be a deal-breaker. Look to the Platinum or Reserve cards. (Small-business owners in this category should check out the <Link href="/business/best-business-cards-2025">best business travel cards</Link>).</li>
                        <li><strong>The Rewards Maximizer:</strong> If you aren’t loyal to Delta, a general travel card like the Chase Sapphire Preferred® or <Link href="/cards/capital-one-ventureone">Capital One Venture Rewards</Link> offers far more flexible points that transfer to many different airlines and hotels.</li>
                    </ul>
                </section>
                
                <section id="section-pros-cons" className={styles.reviewSection}>
                    <h2>The Pros: Why You’ll Love This Card</h2>
                     <ul className={styles.featureList}>
                        <li>Absolutely No Annual Fee</li>
                        <li>Strong Dining Rewards: 2X miles at restaurants worldwide</li>
                        <li>No Foreign Transaction Fees</li>
                        <li>Simple Path to SkyMiles</li>
                        <li>Helpful Amex Protections</li>
                    </ul>
                    <h2>The Cons: The Honest Drawbacks</h2>
                    <ul className={styles.featureList}>
                        <li>No Free Checked Bag</li>
                        <li>Lacks Premium Travel Perks (priority boarding, lounge access)</li>
                        <li>Modest Welcome Offer</li>
                        <li>Inflexible Rewards (Delta-only)</li>
                    </ul>
                </section>
                
                <section id="section-competition" className={styles.reviewSection}>
                    <h2>The No-Fee Airline Gauntlet: Delta Blue vs. The Competition</h2>
                    <p>How does the Delta Blue stack up against its direct, no-fee <Link href="/airlines/best-airline-cards-2025">airline-specific competitors</Link>? This head-to-head comparison reveals that your ideal card depends entirely on your primary spending category.</p>
                    <DraggableTableWrapper>
                        <div className={styles.tableContainer}>
                            <table className={`${styles.statsTable} ${styles.comparisonTable}`}>
                                <thead>
                                    <tr>
                                        <th>Feature</th>
                                        <th>Delta SkyMiles® Blue Amex</th>
                                        <th><Link href="https://www.travelcardinsider.com/cards/aadvantage-mileup">American Airlines AAdvantage® MileUp®</Link></th>
                                        <th><Link href="https://www.travelcardinsider.com/cards/united-gateway">United Gateway℠ Card</Link></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr><td>Annual Fee</td><td>$0</td><td>$0</td><td>$0</td></tr>
                                    <tr><td>Top Bonus Category</td><td><strong>2X at Restaurants</strong></td><td>2X at Grocery Stores</td><td>2X on Gas & Local Transit</td></tr>
                                    <tr><td>Airline Rewards</td><td>2X on Delta</td><td>2X on American</td><td>2X on United</td></tr>
                                    <tr><td>In-Flight Discount</td><td>20% back</td><td>25% back</td><td>25% back</td></tr>
                                    <tr><td>Foreign Transaction Fee</td><td><strong>None</strong></td><td>3%</td><td>None</td></tr>
                                    <tr><td>Flexibility</td><td>Low (Delta only)</td><td>Low (American only)</td><td>Low (United only)</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </DraggableTableWrapper>
                    <p>The takeaway is clear: if you spend more on dining out, the Delta Blue is your winner. If you spend more at the grocery store, the AAdvantage MileUp is better. And if your budget is dominated by gas and commuting, the United Gateway card is the superior choice.</p>
                </section>

                <section id="section-upgrade" className={styles.reviewSection}>
                    <h2>Stepping Up: Is the Delta Gold Card Worth the Fee?</h2>
                    <p>The biggest question for many is whether to pay for the next card up: the Delta SkyMiles® Gold American Express Card. It has a $150 annual fee. (<OfficialLink href={reviewData.official.goldCardDetails}>American Express: Delta SkyMiles Gold Card Details</OfficialLink>)</p>
                    <h3>Here’s the simple breakeven math:</h3>
                    <ul className={styles.featureList}>
                        <li>A checked bag on Delta costs $35 each way.</li>
                        <li>A single round-trip with a checked bag costs $70.</li>
                        <li>Checking a bag on just three one-way flights in a year costs you $105—already covering a huge portion of the Gold card's fee.</li>
                    </ul>
                    <p>The Gold card also comes with a much larger welcome bonus, a $200 Delta Flight Credit (after spending $10,000 in a year), and other valuable perks. For anyone who checks a bag more than once a year, the Gold card is the more financially sound choice.</p>
                </section>
                
                <section id="section-fees" className={styles.reviewSection}>
                    <h2>The Full Spectrum of Rates & Fees</h2>
                    <p>While the headline is "$0 annual fee," carrying a balance can be costly. This card is for earning rewards, not for carrying debt. To avoid interest charges that will wipe out your miles' value, plan to pay your balance in full each month.</p>
                     <ul className={styles.featureList}>
                        <li><strong>Annual Fee:</strong> $0</li>
                        <li><strong>Purchase APR:</strong> A variable APR, currently {reviewData.aprRange}, based on your creditworthiness.</li>
                        <li><strong>Foreign Transaction Fee:</strong> None</li>
                        <li><strong>Late/Returned Payment Fee:</strong> Up to $40.</li>
                    </ul>
                </section>
                
                <section id="section-testimonials" className={styles.reviewSection}>
                    <h2>Real Voices: What Cardholders Are Saying</h2>
                    <div className={styles.testimonialContainer}>
                        <blockquote className={styles.testimonialQuote}>
                            <p>"I'm absolutely in love with my Delta Amex... this card consistently adds comfort, value, and convenience to every trip."</p>
                            <footer>– Valerie, the Casual Traveler</footer>
                        </blockquote>
                         <blockquote className={styles.testimonialQuote}>
                            <p>"It's a Great Delta credit card with a no annual fee to start with and you can upgrade afterwards."</p>
                            <footer>– Diamond, the Upgrader</footer>
                        </blockquote>
                        <blockquote className={styles.testimonialQuote}>
                            <p>"I would have expected Delta to provide far more... perks/benefits (e.g. free access to Sky Lounge, priority boarding... They offer none of that... DISAPPOINTING!!!")</p>
                            <footer>– An Anonymous User, the Disappointed</footer>
                        </blockquote>
                        <blockquote className={styles.testimonialQuote}>
                            <p>"No, you should not open the delta blue card... You would be better served by a 2% cash back card... You could downgrade the gold to the blue after 1 year to avoid the annual fee."</p>
                            <footer>– A Reddit User, the Maximizer</footer>
                        </blockquote>
                    </div>
                </section>

                <section id="section-verdict" className={styles.reviewSection}>
                    <h2>Our Expert Verdict: The Bottom Line from Travelcardinsider</h2>
                    <p>So, what’s our final verdict? The {reviewData.cardName} is a definite "Yes" for a very specific person—and a hard "No" for almost everyone else.</p>
                    <p>This card is an excellent choice for the fee-averse, Delta-loyal traveler whose spending leans heavily towards dining out. If you fly once or twice a year, travel light without checked bags, and want a no-cost way to turn restaurant meals into airline miles, this card is a simple, effective tool that will serve you well.</p>
                    <p>However, if you regularly check bags, you will lose money by choosing this card over its Gold counterpart. If you're a frequent flyer who values comfort, you'll be frustrated by the lack of perks. And if you aren't loyal to Delta, a flexible-points card is a far better option.</p>
                    <p>Think of this card not as your ultimate travel companion, but as your free boarding pass into the world of SkyMiles. It gets you on the plane, but if you want to bring luggage or sit closer to the front, you'll eventually need to upgrade your ticket.</p>
                </section>

                <section id="section-faqs" className={`${styles.reviewSection} ${styles.faqSection}`}>
                    <h2>Card-Specific Frequently Asked Questions (FAQs)</h2>
                    <div className={styles.faqContainer}>
                      {structuredData['@graph'].find(item => item['@type'] === 'FAQPage').mainEntity.map((faq, index) => (
                          <details key={index} className={styles.faqItem}>
                              <summary className={styles.faqQuestion}>{faq.name}</summary>
                              <div className={styles.faqAnswer}>
                                <p dangerouslySetInnerHTML={{ __html: faq.acceptedAnswer.text }} />
                                {index === 0 && <p><OfficialLink href={reviewData.official.creditScoreResources}>American Express: Credit Score Resources</OfficialLink></p>}
                                {index === 1 && <p><OfficialLink href={reviewData.official.skymilesProgramRules}>Delta Air Lines: SkyMiles Program Rules</OfficialLink></p>}
                              </div>
                          </details>
                      ))}
                    </div>
                </section>
                
                <section id="section-apply" className={styles.reviewSection}>
                    <h2>Your Next Step: How to Apply</h2>
                    <p>If your travel style and spending habits align with this card's unique profile, it's the perfect, cost-free way to start your travel rewards journey. Remember the <OfficialLink href={reviewData.official.applyWithConfidence}>"Apply with Confidence"</OfficialLink> feature, which lets you see if you're approved with no impact to your credit score.</p>
                    <p>When you're ready to turn today's lattes into tomorrow's layovers, you can begin your application. Happy travels.</p>
                     <div className={styles.finalCtaContainer}>
                        <a href={reviewData.applyLink} target="_blank" rel="noopener noreferrer sponsored" className={styles.applyNowButton}>Apply Securely on Amex's Site</a>
                    </div>
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
                <a href={reviewData.official.ratesAndFees} className={`${styles.stickyFooterBtn} ${styles.stickyFooterBtnRates}`} target="_blank" rel="noopener noreferrer sponsored">See Rates & Fees</a>
            </div>
        </div>
      </div>
    </>
  );
}

export default DeltaSkyMilesBlueReviewPage;