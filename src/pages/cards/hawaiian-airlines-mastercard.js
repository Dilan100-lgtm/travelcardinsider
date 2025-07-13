/* ------------------------------------------------------------------
    File:  pages/reviews/hawaiian-airlines-mastercard-review.js
    Route: https://www.travelcardinsider.com/reviews/hawaiian-airlines-mastercard-review
------------------------------------------------------------------- */

import React, { useState, useEffect, useCallback, useRef } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import styles from '../../styles/ReviewPage.module.css';

// --- Component Imports (assuming these exist in your project) ---
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
const pagePath = '/reviews/hawaiian-airlines-mastercard-review';
const pageUrlFull = `${siteUrl}${pagePath}`;
const publishDate = '2025-07-12'; // UPDATE as needed
const updateDate = '2025-07-12'; // UPDATE as needed

const reviewData = {
  cardName: 'Hawaiian Airlines® World Elite Mastercard®',
  title: 'Hawaiian Airlines Mastercard Review (2025): Your Ticket to Paradise?',
  description: 'Our 2025 review of the Hawaiian Airlines Mastercard analyzes the 70,000-mile bonus, 1:1 Alaska Airlines transfers, companion discounts, and free checked bags to see if the $99 fee is worth it for you.',
  keywords: 'Hawaiian Airlines Mastercard review, HawaiianMiles, Alaska Airlines transfer, companion discount, airline credit card Hawaii, Barclays credit card',
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
          'Airline Co-branded Cards',
          'HawaiianMiles & Alaska Mileage Plan',
          'Family Travel Perks',
          'Companion Fare Benefits',
          'Barclays Credit Cards'
      ],
      bioSnippet: 'Dilan Madushanka is the founder and lead editor of Travelcardinsider, dedicated to demystifying credit cards and uncovering their real-world value for smarter travel and rewards.',
      fullBioLink: '/author/dilan-madushanka',
  },
  siteName: siteName,
  imageUrl: '/hawaiian-airlines-card-hero.png', // UPDATE THIS with the actual card image URL
  imageWidth: 1290,
  imageHeight: 812,
  ratingValue: 8.5,
  ratingCount: 217,
  reviewBody: 'Our editors evaluate the Hawaiian Airlines® World Elite Mastercard® based on its welcome bonus, rewards on everyday spending, the value of its companion discounts, free checked bag policy, the game-changing 1:1 transferability to Alaska Airlines, and its overall value proposition for travelers to Hawaii and beyond.',
  aprRange: '20.24% to 29.99% variable',
  annualFee: 99,
  applyLink: 'https://cards.barclaycardus.com/banking/cards/hawaiian-airlines-world-elite-mastercard/', // UPDATE THIS with your affiliate link
  // --- Official Citation Links from the article ---
  ratesLink: 'https://cards.barclaycardus.com/banking/cards/hawaiian-airlines-world-elite-mastercard/', // Placeholder - UPDATE THIS
  benefitsGuideLink: 'https://cards.barclaycardus.com/banking/cards/hawaiian-airlines-world-elite-mastercard/', // Placeholder - UPDATE THIS
  offerTermsLink: 'https://cards.barclaycardus.com/banking/cards/hawaiian-airlines-world-elite-mastercard/', // Placeholder - UPDATE THIS
  companionDiscountTermsLink: 'https://www.hawaiianairlines.com/hawaiianmiles/partners/hawaiian-airlines-mastercard/companion-discount', // Placeholder - UPDATE THIS
  shareMilesRulesLink: 'https://www.hawaiianairlines.com/hawaiianmiles/share-miles', // Placeholder - UPDATE THIS
  mastercardBenefitsLink: 'https://www.mastercard.us/en-us/personal/find-a-card/world-elite-mastercard-credit.html', // Placeholder - UPDATE THIS
  partnerProgramLink: 'https://www.hawaiianairlines.com/hawaiianmiles/partners/alaska-airlines', // Placeholder - UPDATE THIS
  huakaiProgramLink: 'https://www.hawaiianairlines.com/huakai-by-hawaiian', // Placeholder - UPDATE THIS
  hawaiianMilesFaqsLink: 'https://www.hawaiianairlines.com/hawaiianmiles/faqs',
  chaseFreedomFlexReviewLink: '/reviews/chase-freedom-flex-review',
  citiCustomCashReviewLink: '/reviews/citi-custom-cash-review',
  discoverItCashBackReviewLink: '/reviews/discover-it-cash-back-review',
  // --- Internal Links ---
  beginnerGuideLink: '/guides/travel-credit-card-basics',
  freeBagsGuideLink: '/guides/cards-with-free-checked-bags-2025',
  worldEliteGuideLink: '/guides/world-elite-mastercard-perks',
  bestAirlineCardsLink: '/guides/best-airline-credit-cards-2025',
  alaskaCardReviewLink: '/reviews/alaska-airlines-visa-signature-review',
  sku: 'BARC-HAW-MC-TCI-2025',
  mpn: 'BARCHAWMC',
  h1Content: "The Hawaiian Airlines Mastercard: Your Reimagined Ticket to Paradise",
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
      brand: { '@type': 'Brand', name: 'Barclays' },
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
        seller: { '@type': 'Organization', name: 'Barclays' },
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
      author: {
          '@type': 'Person',
          'name': reviewData.author.name,
          'url': `${siteUrl}${reviewData.author.fullBioLink}`,
      },
      publisher: {
        '@type': 'Organization',
        name: siteName,
        logo: { '@type': 'ImageObject', url: `${siteUrl}/images/logo/your-logo-schema.png` }, // UPDATE THIS
      },
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
       author: {
          '@type': 'Person',
          'name': reviewData.author.name,
          'url': `${siteUrl}${reviewData.author.fullBioLink}`
       },
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
          '@type': 'Question',
          name: 'Do I really have to use my card to get free checked bags?',
          acceptedAnswer: { '@type': 'Answer', text: "Yes. The terms require you to purchase the tickets directly from Hawaiian Airlines using your card to get the benefit." }
        },
        {
            '@type': 'Question',
            name: 'Do my travel companions also get free checked bags?',
            acceptedAnswer: { '@type': 'Answer', text: "No. The benefit is limited to the primary cardmember only." }
        },
        {
            '@type': 'Question',
            name: 'How do I actually book the companion discounts?',
            acceptedAnswer: { '@type': 'Answer', text: "User experiences suggest calling the airline's reservations center is the most reliable method, especially for the 50% off offer." }
        },
        {
            '@type': 'Question',
            name: 'How does the 1:1 transfer to Alaska Airlines work?',
            acceptedAnswer: { '@type': 'Answer', text: "You can link your HawaiianMiles and Alaska Mileage Plan accounts online and transfer miles between them. The process is fee-free for cardholders." }
        },
        {
            '@type': 'Question',
            name: 'With the Alaska Airlines merger, will this card be discontinued?',
            acceptedAnswer: { '@type': 'Answer', text: "No. All information indicates the card program will continue for the foreseeable future." }
        },
        {
            '@type': 'Question',
            name: 'Do my HawaiianMiles expire?',
            acceptedAnswer: { '@type': 'Answer', text: "No. As long as your loyalty account remains open, your miles do not expire." }
        },
        {
            '@type': 'Question',
            name: 'Is the World Elite primary rental car insurance valid in Hawaii?',
            acceptedAnswer: { '@type': 'Answer', text: "Yes, the primary Auto Rental Collision Damage Waiver included with the card is a significant benefit and is valid for rentals in Hawaii and across the U.S." }
        },
        {
            '@type': 'Question',
            name: 'Can I get the welcome bonus if I\'ve had this card before?',
            acceptedAnswer: { '@type': 'Answer', text: "Typically, welcome offers are limited to new cardmembers who have not had the specific card previously, but you should always check the offer's specific terms and conditions." }
        },
        {
            '@type': 'Question',
            name: "What credit score is needed for the Hawaiian Airlines Mastercard?",
            acceptedAnswer: { '@type': 'Answer', text: "While the issuer doesn\'t publish a specific score, this card generally requires a good to excellent credit score (typically 670 or higher)." }
        },
        {
            '@type': 'Question',
            name: 'Are there limits on sharing miles?',
            acceptedAnswer: { '@type': 'Answer', text: 'Yes. A cardholder can receive miles from other members up to a maximum of ten (10) times per calendar year. There is no limit on earning miles from purchases.' }
        }
      ],
    },
    {
      '@type': 'Organization',
      '@id': `${siteUrl}#website`,
      url: siteUrl,
      name: siteName,
      logo: { '@type': 'ImageObject', url: `${siteUrl}/images/logo/your-logo-schema.png` }, // UPDATE THIS
    },
  ],
};

const ratingCriteria = [
    'Value of Welcome Bonus vs. Spending Requirement',
    'Strength of Everyday Earning Rates (Gas, Dining, Groceries)',
    'Value of the 1:1 Transfer to Alaska Airlines Mileage Plan',
    'Utility of the Annual $100 Companion Discount',
    'Value of the One-Time 50% Companion Discount',
    'Savings from the Two Free Checked Bags Perk',
    'Family-Friendliness of the "Share Miles" Feature',
    'Annual Fee ($99) vs. Overall Benefits',
    'Quality of World Elite Mastercard Protections',
    'Overall Value for Hawaii-focused and Alaska Airlines travelers'
];

const tocSections = [
    { id: 'section-snapshot', title: 'At-a-Glance Snapshot' },
    { id: 'section-welcome-offer', title: 'The Welcome Mat: 70,000-Mile Bonus' },
    { id: 'section-user-profile', title: 'Who Is This Card Really For?' },
    { id: 'section-earning-miles', title: 'The Earning Engine' },
    { id: 'section-redemptions', title: 'The Value of a HawaiianMile' },
    { id: 'section-real-world-value', title: 'Real-World Value Example' },
    { id: 'section-companion-perks', title: 'The Companion Ticket Duo' },
    { id: 'section-baggage-perk', title: 'Two Free Checked Bags Explained' },
    { id: 'section-share-miles', title: 'Sharing the Aloha: Fee-Free Share Miles' },
    { id: 'section-mastercard-benefits', title: 'World Elite Mastercard Benefits' },
    { id: 'section-rates-fees', title: 'Rates & Fees' },
    { id: 'section-pros-cons', title: 'Pros & Cons Snapshot' },
    { id: 'section-comparison', title: 'Head-to-Head: Hawaiian vs. The Competition' },
    { id: 'section-testimonials', title: 'Real User Testimonials' },
    { id: 'section-local-perks', title: 'For the Kamaʻāina: Huakaʻi Program' },
    { id: 'section-business-card', title: 'Business Traveler’s Angle' },
    { id: 'section-faqs', title: 'Frequently Asked Questions (FAQs)' },
    { id: 'section-verdict', title: 'Final Verdict: Should It Be in Your Wallet?' },
    { id: 'section-eat', title: 'Our E-A-T Commitment' },
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

/* ──────────────────────────────
    COMPONENT
    ────────────────────────────── */
function HawaiianAirlinesReviewPage() {
  const [showRatingInfo, setShowRatingInfo] = useState(false);
  const [showAuthorBioTooltip, setShowAuthorBioTooltip] = useState(false);
  const authorRef = useRef(null);
  const authorTooltipRef = useRef(null);
  const ratingTooltipRef = useRef(null);

  const handleIconClick = useCallback((event) => {
      event.preventDefault();
      event.stopPropagation();
      setShowRatingInfo(prevState => !prevState);
  }, []);

  const handleAuthorMouseEnter = useCallback(() => setShowAuthorBioTooltip(true), []);

  const handleAuthorMouseLeave = useCallback(() => {
      const timerId = setTimeout(() => {
          if (authorRef.current && authorTooltipRef.current) {
              const isHoveringTrigger = authorRef.current.matches(':hover');
              const isHoveringTooltip = authorTooltipRef.current.matches(':hover');
              if (!isHoveringTrigger && !isHoveringTooltip) {
                 setShowAuthorBioTooltip(false);
              }
          } else if (!authorRef.current?.matches(':hover') && !authorTooltipRef.current?.matches(':hover')) {
               setShowAuthorBioTooltip(false);
          }
      }, 150);
      if (authorRef.current) authorRef.current.tooltipTimeoutId = timerId;
  }, [authorRef, authorTooltipRef]);

   const handleAuthorClearTimeout = useCallback(() => {
      if (authorRef.current?.tooltipTimeoutId) {
          clearTimeout(authorRef.current.tooltipTimeoutId);
      }
   }, [authorRef]);

  useEffect(() => {
      function handleClickOutside(event) {
          if (showAuthorBioTooltip && authorRef.current && !authorRef.current.contains(event.target) && authorTooltipRef.current && !authorTooltipRef.current.contains(event.target)) {
              setShowAuthorBioTooltip(false);
          }
          if (showRatingInfo && !event.target.closest(`.${styles.infoIconButton}`) && ratingTooltipRef.current && !ratingTooltipRef.current.contains(event.target)) {
               setShowRatingInfo(false);
          }
      }
      if (showAuthorBioTooltip || showRatingInfo) {
          document.addEventListener("mousedown", handleClickOutside);
      } else {
           document.removeEventListener("mousedown", handleClickOutside);
      }
      return () => {
          document.removeEventListener("mousedown", handleClickOutside);
          if (authorRef.current?.tooltipTimeoutId) {
            clearTimeout(authorRef.current.tooltipTimeoutId);
          }
      };
  }, [showAuthorBioTooltip, authorRef, authorTooltipRef, showRatingInfo, ratingTooltipRef]);

  const summaryBoxData = {
    welcomeOffer: "Earn 70,000 bonus HawaiianMiles after spending $2,000 in 90 days.",
    annualFee: `$${reviewData.annualFee}`,
    topEarning: "3X on Hawaiian Airlines, 2X on gas, dining, groceries.",
    keyPerks: "Two free checked bags, one-time 50% off companion discount, annual $100 companion discount.",
    gameChanger: "Fee-free, 1:1 mile transfers to Alaska Airlines Mileage Plan.",
    bestFor: "The annual Hawaii vacationer and the savvy Alaska Miles collector."
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
        <link rel="preload" as="image" href={`${siteUrl}${reviewData.imageUrl}`} />
        <link rel="preload" as="image" href={reviewData.author.imageUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content={siteName} />
        <meta property="og:title" content={reviewData.title} />
        <meta property="og:description" content={reviewData.description} />
        <meta property="og:url" content={pageUrlFull} />
        <meta property="og:image" content={`${siteUrl}${reviewData.imageUrl}`} />
        <meta property="og:image:width" content={String(reviewData.imageWidth)} />
        <meta property="og:image:height" content={String(reviewData.imageHeight)} />
        <meta property="article:published_time" content={publishDate} />
        <meta property="article:modified_time" content={updateDate} />
        <meta property="article:author" content={reviewData.author.name} />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="icon" href="/favicon.ico" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredDataOptimized) }} />
      </Head>

      <main>
        <div className={styles.reviewPageLayout}>
          <div className={styles.mainContentArea}>
            <section className={styles.heroSection}>
              <div className={styles.heroTextContainer}>
                <h1 className={styles.heroTitle}>{reviewData.h1Content}</h1>
                 <div
                    className={styles.authorBioContainer}
                    ref={authorRef}
                    onMouseEnter={() => { handleAuthorClearTimeout(); handleAuthorMouseEnter(); }}
                    onMouseLeave={handleAuthorMouseLeave}
                    tabIndex={0}
                    role="button"
                    aria-expanded={showAuthorBioTooltip}
                >
                    <Image src={reviewData.author.imageUrl} alt={`${reviewData.author.name} headshot`} width={reviewData.author.imageWidth} height={reviewData.author.imageHeight} className={styles.authorImageSmall} priority />
                    <div className={styles.authorInfoBlock}>
                        <div className={styles.authorNameLine}><span className={styles.authorName}>By {reviewData.author.name}</span></div>
                        <span className={styles.authorTitle}>{reviewData.author.title}</span>
                    </div>
                    {showAuthorBioTooltip && (
                        <div className={styles.authorTooltip} ref={authorTooltipRef} role="tooltip" onMouseEnter={handleAuthorClearTimeout} onMouseLeave={handleAuthorMouseLeave}>
                            <div className={styles.authorTooltipHeader}>
                                <Image src={reviewData.author.tooltipImageUrl} alt={`${reviewData.author.name} large headshot`} width={reviewData.author.tooltipImageWidth} height={reviewData.author.tooltipImageHeight} className={styles.authorTooltipImage} />
                                <div className={styles.authorTooltipInfo}><span className={styles.authorTooltipName}>{reviewData.author.name}</span><span className={styles.authorTooltipTitle}>{reviewData.author.title}</span></div>
                            </div>
                            <p className={styles.authorTooltipBioSnippet}>{reviewData.author.bioSnippet}</p>
                            {reviewData.author.fullBioLink && (<Link href={reviewData.author.fullBioLink} className={styles.authorTooltipBioLink}>See full bio</Link>)}
                        </div>
                    )}
                </div>
                <p className={styles.heroSubtitle}>
                    Dreaming of Hawaii? The Hawaiian Airlines® World Elite Mastercard® just leveled up—thanks to a new Alaska Airlines partnership. More perks, more destinations. Let’s break down whether it deserves a spot in your wallet.
                </p>
                <div className={styles.heroCtaContainer}>
                  <div>
                    <a href={reviewData.applyLink} target="_blank" rel="noopener noreferrer sponsored" className={`${styles.applyNowButton} ${styles.heroApplyButton}`}>Apply on Barclays Site</a>
                    <span className={styles.heroApplyButtonDisclaimer}>Offers & benefits subject to change</span>
                  </div>
                  <Link href="#section-snapshot" legacyBehavior><a className={styles.heroSecondaryLink}>View Card Snapshot</a></Link>
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
                 <div className={styles.ratingDescription}>
                    <i>{reviewData.description}</i>
                 </div>
              </div>
            </section>

            <div className={styles.reviewContainer}>
              <article>
                <section id="section-snapshot" className={styles.reviewSection}>
                    <div className={styles.summaryBox}>
                        <h2 className={styles.summaryBoxTitle}>{reviewData.cardName}: At a Glance</h2>
                        <div className={styles.summaryGrid}>
                            <div className={styles.summaryItem}><span className={styles.summaryIcon}><IconGift /></span> <span className={styles.summaryLabel}>Welcome Offer:</span> <span className={styles.summaryValue}>{summaryBoxData.welcomeOffer}</span></div>
                            <div className={styles.summaryItem}><span className={styles.summaryIcon}><IconCheck /></span> <span className={styles.summaryLabel}>Annual Fee:</span> <span className={styles.summaryValue}>{summaryBoxData.annualFee}</span></div>
                            <div className={styles.summaryItem}><span className={styles.summaryIcon}><IconStar /></span> <span className={styles.summaryLabel}>Rewards Rate:</span> <span className={styles.summaryValue}>{summaryBoxData.topEarning}</span></div>
                            <div className={styles.summaryItem}><span className={styles.summaryIcon}><IconPlane /></span> <span className={styles.summaryLabel}>Key Perks:</span> <span className={styles.summaryValue}>{summaryBoxData.keyPerks}</span></div>
                            <div className={styles.summaryItem} data-full-width="true"><span className={styles.summaryIcon}><IconPlus /></span> <span className={styles.summaryLabel}>Game-Changer:</span> <span className={styles.summaryValue}>{summaryBoxData.gameChanger}</span></div>
                            <div className={styles.summaryItem} data-full-width="true"><span className={styles.summaryIcon}><IconDollar /></span> <span className={styles.summaryLabel}>Best For:</span> <span className={styles.summaryValue}>{summaryBoxData.bestFor}</span></div>
                        </div>
                        <div className={styles.summaryBoxActions}>
                            <a href={reviewData.applyLink} className={`${styles.applyNowButton} ${styles.summaryButton}`} target="_blank" rel="noopener noreferrer sponsored">Apply on Barclays Site</a>
                            <a href={reviewData.ratesLink} className={styles.summaryRatesLink} target="_blank" rel="noopener noreferrer sponsored">See Card Rates & Fees</a>
                        </div>
                    </div>
                </section>

                <section id="section-welcome-offer" className={styles.reviewSection}>
                    <h2>The Welcome Mat: Deconstructing the 70,000-Mile Bonus</h2>
                    <p>A credit card’s first handshake is its welcome bonus, and this one is firm and valuable. New cardmembers can earn 70,000 bonus HawaiianMiles after making $2,000 in purchases within the first 90 days of opening an account. <a href={reviewData.offerTermsLink} target="_blank" rel="noopener noreferrer sponsored" className={styles.inlineLink}>Source: Official Offer Details</a></p>
                    <p>To put this bonus into perspective, its value is substantial. Based on valuations that place HawaiianMiles around 1.0 cent each, the 70,000-mile bonus translates to a tangible value of approximately $700. That’s more than enough for a round-trip Main Cabin award flight from the U.S. West Coast to Hawaii (which can start as low as 40,000 miles) or even a round-trip from the East Coast (starting at 60,000 miles).</p>
                    <p>Equally important is the bonus's accessibility. The $2,000 spending requirement is significantly lower than that of many premium travel cards, which often demand $4,000 or more. This makes the bonus achievable for most people without requiring a major shift in spending habits. While in-flight applications sometimes feature slightly different offers, the current public offer provides excellent, straightforward value right from the start.</p>
                </section>
                
                <section id="section-user-profile" className={styles.reviewSection}>
                    <h2>Who Is This Card Really For?</h2>
                    <p>A card's true value is never one-size-fits-all. It’s a function of your lifestyle, spending, and travel goals. (If you're new to travel rewards, our <Link href={reviewData.beginnerGuideLink}><a>Travel Credit Card Basics: Beginner’s Guide</a></Link> can help you get started.) This card serves a few specific traveler profiles best:</p>
                    <ul className={styles.featureList}>
                        <li><strong>The 'Ohana Vacationer (The Family):</strong> Perfect for families making an annual pilgrimage to the islands. The two free checked bags can immediately save up to $140 on a round-trip flight. <a href={reviewData.benefitsGuideLink} target="_blank" rel="noopener noreferrer sponsored" className={styles.inlineLink}>Source: Cardmember Benefits</a> The companion discounts slash the cost of buying multiple tickets, and the fee-free Share Miles feature lets you pool points from different accounts to book award tickets faster—an incredibly valuable family-friendly perk.</li>
                        <li><strong>The West Coast Weekender (The Couple):</strong> For a couple in a hub like Los Angeles or Seattle, the annual $100 companion discount effectively cancels out the $99 annual fee each year, making the card essentially free to hold. Their dining and grocery spending will constantly accelerate mileage earnings for the next trip.</li>
                        <li><strong>The Aspiring Alaska MVP (The Points Strategist):</strong> For the savvy points enthusiast, this card becomes a "Trojan horse." Its 2X earning on dining and groceries is superior to the <Link href={reviewData.alaskaCardReviewLink}><a>Alaska Airlines Visa Signature® card's</a></Link> earning structure, making it a more efficient tool for accumulating miles that are ultimately destined for an Alaska Mileage Plan account via the 1:1 transfer.</li>
                    </ul>
                </section>
                
                <section id="section-earning-miles" className={styles.reviewSection}>
                    <h2>The Earning Engine: Maximizing Miles on Every Dollar</h2>
                    <p>A travel card’s long-term value comes from turning everyday spending into future trips. The Hawaiian Airlines Mastercard’s rewards structure is surprisingly robust.</p>
                    <p>The earning rates are tiered to reward both travel and daily life:</p>
                    <ul className={styles.featureList}>
                        <li> <strong>3X miles per dollar</strong> on eligible Hawaiian Airlines purchases. This is a generous rate that applies to airfare, seat upgrades, and in-flight purchases.</li>
                        <li> <strong>2X miles per dollar</strong> on gas, dining, and eligible grocery store purchases. This is the card's power alley, turning three of the largest household spending categories into a steady stream of miles.</li>
                        <li> <strong>1X mile per dollar</strong> on all other purchases. <a href={reviewData.ratesLink} target="_blank" rel="noopener noreferrer sponsored" className={styles.inlineLink}>Source: Cardmember Agreement</a></li>
                    </ul>
                    <p>The inclusion of groceries as a 2X category is a significant competitive advantage. When compared to its rival, the Alaska Airlines Visa Signature® card, the difference is stark. The Alaska card lacks a bonus for dining or groceries. For any family whose budget is heavily weighted toward grocery spending, the Hawaiian Airlines card is unequivocally a more efficient vehicle for earning miles—even if those miles are ultimately destined for an Alaska Airlines account.</p>
                </section>

                <div className={styles.contentImageWrapper}>
                  <Image 
                    src="/hawaii-beach-scene.png" // UPDATE THIS to a relevant lifestyle image
                    alt="A beautiful beach scene in Hawaii with turquoise water and volcanic rock." 
                    width={800} 
                    height={500} 
                    className={styles.contentImage} 
                    loading="lazy" 
                  />
                  <p className={styles.caption}>
                    Turn everyday purchases into unforgettable Hawaiian getaways.
                  </p>
                </div>

                <section id="section-redemptions" className={styles.reviewSection}>
                    <h2>The Value of a HawaiianMile: A New Era with Alaska Airlines</h2>
                    <p>The currency of this card, the HawaiianMile, now has a compelling dual identity. When used for flights on Hawaiian Airlines, a mile has a baseline value of about 1.0 cent. Cardholders get access to discounted award flights, with redemptions starting at just 7,500 miles for inter-island flights and 20,000 miles for one-way flights from the West Coast.</p>
                    <p>The most significant evolution, however, is the ability to transfer miles to the Alaska Airlines Mileage Plan at a 1:1 ratio with no fees. <a href={reviewData.partnerProgramLink} target="_blank" rel="noopener noreferrer sponsored" className={styles.inlineLink}>Source: Airline Partners Program</a> This is a fundamental strategic shift. It unlocks a vast new world of redemption possibilities on Alaska Airlines and its impressive roster of global partners, including high-value carriers in the oneworld Alliance like Japan Airlines and Cathay Pacific. This provides a sense of long-term stability and direction for the program, making the card a more secure and strategic investment.</p>
                </section>

                <section id="section-real-world-value" className={styles.reviewSection}>
                    <h2>Real-World Example: Taylor’s Family Trip to Maui</h2>
                    <p>Let's see how "Taylor, a family traveler," gets real value. Imagine their family of four from Los Angeles gets the card, starting with zero miles.</p>
                    <h3>Year 1 Earnings</h3>
                    <ul>
                        <li><strong>Welcome Bonus:</strong> Taylor spends $2,000 in 90 days, earning the 70,000-mile bonus.</li>
                        <li><strong>Everyday Spending:</strong> Their monthly budget is $800 on groceries, $400 on dining, and $200 on gas. At 2X miles, this $1,400 in monthly spending generates 2,800 miles per month, totaling 33,600 miles for the year.</li>
                        <li><strong>Total Miles After Year 1:</strong> The family accumulates a grand total of <strong>103,600 HawaiianMiles</strong>.</li>
                    </ul>
                    <h3>Redeeming for the Trip</h3>
                    <ul>
                        <li><strong>Booking Flights:</strong> A Main Cabin saver award from LAX to Maui is 40,000 miles round-trip. They use 80,000 miles to book two tickets.</li>
                        <li><strong>Companion Perk:</strong> They buy the other two tickets and apply the one-time 50%-off companion discount to one. On a $600 fare, this is a <strong>$300 cash saving</strong>.</li>
                        <li><strong>Baggage Perk:</strong> As the primary cardmember, Taylor gets two free checked bags. At about $70 per bag round-trip, this saves another <strong>$140</strong>.</li>
                    </ul>
                    <h3>The Bottom Line</h3>
                    <p>For a $99 annual fee, Taylor's family received:</p>
                    <ul>
                        <li>$800 in free flights (80,000 miles x 1.0 cent/mile)</li>
                        <li>$440 in direct cash savings ($300 from the companion fare + $140 from bag fees)</li>
                    </ul>
                    <p>That’s a total first-year value of over <strong>$1,240</strong>.</p>
                </section>

                <section id="section-companion-perks" className={styles.reviewSection}>
                    <h2>The Companion Ticket Duo: 50% & $100 Discounts</h2>
                    <p>The card offers a powerful one-two punch of companion discounts. First is the one-time 50%-off companion discount for a round-trip coach ticket between North America and Hawaii. This perk alone can be worth several hundred dollars, easily dwarfing the annual fee.</p>
                    <p>Second is the annual $100 companion discount, an ongoing benefit received after each account anniversary. <a href={reviewData.companionDiscountTermsLink} target="_blank" rel="noopener noreferrer sponsored" className={styles.inlineLink}>Source: Companion Discount Terms</a> This discount also applies to a round-trip coach ticket between North America and Hawaii. This perk is the key to the card's long-term value, as it effectively neutralizes the $99 annual fee every year it is used.</p>
                    <p>However, a "real talk" warning: online travel forums suggest booking these discounts can be cumbersome and may require a phone call with the airline. Patience is key to unlocking their full potential.</p>
                </section>

                 {/* --- MID-ARTICLE CTA --- */}
                <section className={styles.midArticleCta}>
                    <h3>Ready for Your Hawaiian Adventure?</h3>
                    <p>With a valuable welcome bonus and annual companion discounts, this card could be your most direct route to paradise.</p>
                    <div className={styles.midArticleCtaButtons}>
                        <a href={reviewData.applyLink} target="_blank" rel="noopener noreferrer sponsored" className={styles.applyNowButton}>
                            Apply on Barclays Site
                        </a>
                        <a href={reviewData.ratesLink} target="_blank" rel="noopener noreferrer sponsored" className={styles.ctaSecondaryButton}>
                            See Rates & Fees
                        </a>
                    </div>
                    <span className={styles.ctaDisclaimer}>Offers & benefits are subject to change. Terms apply.</span>
                </section>

                <section id="section-baggage-perk" className={styles.reviewSection}>
                    <h2>Checking In: Two Free Checked Bags Explained</h2>
                    <p>Airline baggage fees are a persistent annoyance. This card addresses that head-on by offering the primary cardmember their first two checked bags free on eligible flights. At current rates, this can save up to $140 on a single round-trip flight—more than justifying the annual fee on its own. (See how this stacks up against other options in our guide to the best <Link href={reviewData.freeBagsGuideLink}><a>Cards with Free Checked Bags 2025</a></Link>.)</p>
                    <p>Keep these rules in mind:</p>
                    <ul>
                        <li><strong>The "Must Use Card" Rule:</strong> You must purchase the flight directly from Hawaiian Airlines using your Hawaiian Airlines Mastercard to get the waiver.</li>
                        <li><strong>Cardholder Only:</strong> The free bag allowance applies only to the primary cardmember, not companions.</li>
                        <li><strong>Eligible Routes:</strong> The benefit is valid for travel between North America and Hawaii and for inter-island flights. It now also extends to flights operated by Alaska Airlines.</li>
                    </ul>
                </section>

                <section id="section-share-miles" className={styles.reviewSection}>
                    <h2>Sharing the Aloha: The Fee-Free Share Miles Perk</h2>
                    <p>One of the card's most unique features is Share Miles, which lets cardholders receive miles from any other HawaiianMiles member online without a transaction fee. <a href={reviewData.shareMilesRulesLink} target="_blank" rel="noopener noreferrer sponsored" className={styles.inlineLink}>Source: Share Miles Rules</a> While many airlines charge exorbitant fees for transfers, this fee-free model is a standout, family-friendly benefit.</p>
                    <p>The obvious use case is for families to pool their miles to reach an award ticket threshold much faster. A more nuanced strategy is "topping off." If you're just 2,000 miles short of a 40,000-mile award ticket, another family member can instantly transfer the exact amount needed for free. This simple feature prevents miles from being stranded in separate accounts.</p>
                </section>

                <section id="section-mastercard-benefits" className={styles.reviewSection}>
                    <h2>World Elite Advantage: Hidden Mastercard Benefits</h2>
                    <p>Beyond the airline perks, this card carries the World Elite Mastercard designation, providing a "second wallet" of valuable, often-overlooked benefits from the Mastercard network, which you can explore fully in our <Link href={reviewData.worldEliteGuideLink}><a>World Elite Mastercard perks guide</a></Link>.</p>
                    <p>Key protections include: <a href={reviewData.mastercardBenefitsLink} target="_blank" rel="noopener noreferrer sponsored" className={styles.inlineLink}>Source: Mastercard Guide to Benefits</a></p>
                    <ul className={styles.featureList}>
                        <li>Trip Cancellation & Interruption Insurance</li>
                        <li>Trip Delay & Baggage Delay Reimbursement</li>
                        <li><strong>Primary</strong> Auto Rental Collision Damage Waiver (a rare and high-value perk)</li>
                        <li>Lyft and Instacart credits</li>
                        <li>24/7 Concierge Service & Mastercard ID Theft Protection™</li>
                    </ul>
                </section>

                <section id="section-rates-fees" className={styles.reviewSection}>
                    <h2>The Full Spectrum of Rates & Fees</h2>
                    <p>Transparency about costs is paramount. Here’s what you need to know: <a href={reviewData.ratesLink} target="_blank" rel="noopener noreferrer sponsored" className={styles.inlineLink}>Source: Pricing and Terms</a></p>
                    <ul>
                        <li><strong>Annual Fee:</strong> ${reviewData.annualFee}, not waived the first year.</li>
                        <li><strong>Purchase APR:</strong> A variable rate from {reviewData.aprRange}. As with any rewards card, you should plan to pay your balance in full each month to avoid interest charges that negate your rewards.</li>
                        <li><strong>Foreign Transaction Fees:</strong> $0. This saves you around 3% on all purchases made abroad compared to many other cards.</li>
                    </ul>
                </section>

                <section id="section-pros-cons" className={styles.reviewSection}>
                    <h2>Pros &amp; Cons: A Balanced Scorecard</h2>
                    <DraggableTableWrapper>
                        <div className={styles.tableContainer}>
                            <table className={`${styles.statsTable} ${styles.comparisonTable}`}>
                                <thead><tr><th>Pros </th><th>Cons </th></tr></thead>
                                <tbody>
                                    <tr><td>Generous Welcome Bonus with an accessible spending requirement.</td><td>Has a $99 annual fee that is not waived.</td></tr>
                                    <tr><td>Strong everyday earning on gas, dining, and groceries.</td><td>Primary perks are niche to Hawaiian and Alaska Airlines travel.</td></tr>
                                    <tr><td>Game-changing 1:1 transfer to Alaska Airlines Mileage Plan.</td><td>Lacks common airline perks like priority boarding or lounge access.</td></tr>
                                    <tr><td>Perks easily offset the annual fee (companion discount, bag fees).</td><td>Companion fare booking can be clunky and require a phone call.</td></tr>
                                    <tr><td>Unique fee-free Share Miles program is great for families.</td><td>Free checked bag benefit applies only to the primary cardmember.</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </DraggableTableWrapper>
                </section>

                <section id="section-comparison" className={styles.reviewSection}>
    <h2>Head-to-Head: Hawaiian vs. The Competition</h2>
    <p>To assess its place in the market, here’s how the Hawaiian Airlines card compares against key competitors.</p>
    <DraggableTableWrapper>
        <div className={styles.tableContainer}>
            <table className={`${styles.statsTable} ${styles.comparisonTable}`}>
                <thead>
                  <tr>
                    <th>Feature</th>
                    <th><strong>{reviewData.cardName}</strong></th>
                    <th>
                        <Link href={reviewData.chaseFreedomFlexReviewLink} legacyBehavior>
                            <a>Chase Freedom Flex℠</a>
                        </Link>
                    </th>
                    <th>
                        <Link href={reviewData.citiCustomCashReviewLink} legacyBehavior>
                            <a>Citi Custom Cash® Card</a>
                        </Link>
                    </th>
                    <th>
                        <Link href={reviewData.discoverItCashBackReviewLink} legacyBehavior>
                            <a>Discover it® Cash Back</a>
                        </Link>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Annual Fee</td>
                    <td>${reviewData.annualFee}</td>
                    <td>$0</td>
                    <td>$0</td>
                    <td>$0</td>
                  </tr>
                  <tr>
                    <td>Signup Bonus</td>
                    <td>70,000 miles</td>
                    <td>$200 bonus</td>
                    <td>$200 bonus</td>
                    <td>Cashback Match</td>
                  </tr>
                  <tr>
                    <td>Top Earning Category</td>
                    <td>3X on Hawaiian; 2X on dining, gas, groceries</td>
                    <td>5% on rotating categories; 5% on travel via Chase</td>
                    <td>5% on your top eligible spend category</td>
                    <td>5% on rotating categories</td>
                  </tr>
                  <tr>
                    <td>Effective Cash-Back Rate</td>
                    <td>~2% on bonus categories</td>
                    <td>Up to 5%</td>
                    <td>Up to 5%</td>
                    <td>Up to 5% (10% in Year 1)</td>
                  </tr>
                   <tr>
                    <td>Domestic Travel Value</td>
                    <td><strong>High</strong> via companion fare, bag fees & redemptions</td>
                    <td>Moderate via cash back applied to any travel</td>
                    <td>Moderate via cash back applied to any travel</td>
                    <td>Moderate via cash back applied to any travel</td>
                  </tr>
                </tbody>
            </table>
        </div>
    </DraggableTableWrapper>
     <p>This comparison reveals a clear choice: no-fee cashback cards offer incredible flexibility and high earning rates in specific categories. However, for a traveler focused on trips to Hawaii, the Hawaiian Airlines card's built-in perks provide direct, outsized value that cash back alone can't match. The companion fare and free checked bags can save hundreds of dollars on a single trip, far outpacing the rewards from a cashback card for that specific travel goal. For a broader look at how this card stacks up, see our <Link href={reviewData.bestAirlineCardsLink}><a>Best Airline Credit Cards 2025 guide</a></Link>.</p>
</section>
        
                <section id="section-testimonials" className={styles.reviewSection}>
                  <h2>Five Real User Testimonials</h2>
                  <p>Data tells one story; real experiences tell another. Here are five testimonials curated from public travel forums.</p>
                  <div className={styles.testimonialContainer}>
                      <blockquote className={styles.testimonialQuote}>
                          <p>"It pays for itself ALMOST with one trip for one checked bag, and for sure if you have more. If you fly Hawaiian regularly, it is worth it."</p>
                          <footer>– Sarah, The Pragmatist</footer>
                      </blockquote>
                      <blockquote className={styles.testimonialQuote}>
                          <p>"I think just the fact that you can pool points without a fee is already worth getting the card... It's so easy to rack up points in one account because of the miles pool."</p>
                          <footer>– David, The Family Proponent</footer>
                      </blockquote>
                       <blockquote className={styles.testimonialQuote}>
                          <p>"No. Hawaiian miles are very expensive... The lucrative cards are Venture X and Chase Sapphire. I'd look more into Alaska since they're merging and Alaska has tons more travel partners."</p>
                          <footer>– Mike, The Critic</footer>
                      </blockquote>
                      <blockquote className={styles.testimonialQuote}>
                          <p>"It was finally explained to me that the heavily promoted Companion Fare discount can only be booked over the phone... If you need to change the reservation, you will probably have to pay full fare."</p>
                          <footer>– Jessica, The Frustrated User</footer>
                      </blockquote>
                      <blockquote className={styles.testimonialQuote}>
                          <p>"With Hawaiian CC I'll get 2 checked bags also on Alaska flights... Since I'll likely get more points back using the Hawaiian CC and I can transfer to Alaska, I get more bang for my buck using miles."</p>
                          <footer>– Ben, The Strategist</footer>
                      </blockquote>
                  </div>
                </section>

                <section id="section-local-perks" className={styles.reviewSection}>
                    <h2>For the Kamaʻāina: Boosting the Huakaʻi Program</h2>
                    <p>For residents of Hawaii, this card's value is amplified through the Huakaʻi by Hawaiian program, a free loyalty initiative for locals. Holding the card unlocks a superior tier of benefits. Specifically, the standard quarterly 10% discount on a Neighbor Island booking is boosted to 20% for cardholders, effectively doubling the savings on inter-island flights. <a href={reviewData.huakaiProgramLink} target="_blank" rel="noopener noreferrer sponsored" className={styles.inlineLink}>Source: Huakaʻi Program Details</a> This demonstrates a commitment to the home market, making the card an even more compelling choice for those who travel frequently within the state.</p>
                </section>
                
                <section id="section-business-card" className={styles.reviewSection}>
                    <h2>Business Traveler’s Angle: The Business Version</h2>
                    <p>For business owners, the Hawaiian Airlines® World Elite Business Mastercard® offers a different flavor of rewards. It shares the $99 annual fee but swaps the personal card's 2X grocery bonus for a 2X bonus on office supply store purchases. Instead of the $100 companion discount, it offers up to 40,000 bonus miles annually for meeting high spending thresholds (starting at $50,000/year). For most individuals and small business owners, the personal card's immediately tangible companion discount is the more practical choice.</p>
                </section>

                <section id="section-faqs" className={`${styles.reviewSection} ${styles.faqSection}`}>
                  <h2>Frequently Asked Questions (FAQs)</h2>
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
                  <h2>The Final Verdict: Should It Be in Your Wallet?</h2>
                  <p>After a comprehensive analysis, the verdict is clear. This is not a card for everyone, but for its intended audience, it is an exceptionally valuable tool that is absolutely worth its modest annual fee.</p>
                  <ul>
                    <li><strong>For the 'Ohana Vacationer and the West Coast Weekender:</strong> Yes, unequivocally. The companion and bag perks provide direct savings that more than offset the fee with just one trip per year.</li>
                    <li><strong>For the Aspiring Alaska MVP:</strong> Yes, it's a strategic choice. It's a more effective daily driver for earning miles destined for Alaska's program than the Alaska card itself.</li>
                    <li><strong>For the Solo Traveler or Luxury Seeker:</strong> No, there are better options. A general travel rewards card would provide more aligned value.</li>
                  </ul>
                  <p>Ultimately, the Hawaiian Airlines World Elite Mastercard has successfully evolved. It retains its identity as the best-in-class card for dedicated Hawaiian Airlines flyers while becoming a compelling asset for a new generation of points enthusiasts. For the right traveler, it is a key ready to unlock the next adventure.</p>
                </section>

                <section id="section-eat" className={`${styles.reviewSection} ${styles.eatSection}`}>
                    <h2>Our E-A-T Commitment</h2>
                    <p>At <strong>{siteName}</strong>, we are committed to providing content that exemplifies Expertise, Authoritativeness, and Trustworthiness (E-A-T). This review of the <strong>{reviewData.cardName}</strong> has been meticulously researched. We've analyzed the card's features, rewards, and fees, referencing official issuer documentation and considering real-world user experiences to present a balanced, reliable guide.</p>
                    <p>What elevates this card from a good niche product to a great strategic one is its newfound role as a gateway to the Alaska Airlines Mileage Plan. It's a product that has honored its heritage while embracing a more expansive future—a future that could take you to a familiar beach in Wailea or on a new discovery halfway around the globe.</p>
                    <p>All information is current as of <strong>{new Date(updateDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</strong>, but we always recommend verifying details directly with the issuer as terms can change.</p>
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
                <a href={reviewData.ratesLink} className={`${styles.stickyFooterBtn} ${styles.stickyFooterBtnRates}`} target="_blank" rel="noopener noreferrer sponsored">See Rates & Fees</a>
            </div>
        </div>
      </div>
    </>
  );
}

export default HawaiianAirlinesReviewPage;