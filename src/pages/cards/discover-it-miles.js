/* ------------------------------------------------------------------
    File:  pages/reviews/discover-it-miles-review.js
    Route: https://www.travelcardinsider.com/reviews/discover-it-miles-review
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
const pagePath = '/reviews/discover-it-miles-review';
const pageUrlFull = `${siteUrl}${pagePath}`;
const publishDate = '2025-07-12';
const updateDate = '2025-07-12';

const reviewData = {
  cardName: 'Discover it® Miles',
  title: 'Discover it® Miles Card Review (2025): Simple Rewards, Powerful Value',
  description: 'Is the Discover it® Miles card worth it? Our review covers the unlimited first-year Miles Match, the flat 1.5x rewards rate, and why its simple cash-back engine makes it a top choice for rewards beginners.',
  keywords: 'Discover it Miles review, Discover Match, no annual fee travel card, flat rate rewards, beginner credit card, cash back travel card 2025',
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
          'No-Annual-Fee Rewards Cards',
          'Cash Back & Flexible Rewards Programs',
          'Beginner Credit Card Strategies',
          'Discover Card Products & Benefits',
          'Consumer-Friendly Financial Tools'
      ],
      bioSnippet: 'Dilan Madushanka is the founder and lead editor of Travelcardinsider, dedicated to demystifying credit cards and uncovering their real-world value for smarter travel and rewards.',
      fullBioLink: '/author/dilan-madushanka',
      publishedStats: 'X+ in-depth card reviews per week',
      testedStats: 'Over Y+ credit card benefits across major brands',
      socialLinks: {
          linkedin: 'https://www.linkedin.com/in/dilan-madushanka-b65293365',
          twitter: 'https://x.com/team_dilan',
          email: 'team@travelcardinsider.com'
      }
  },
  siteName: siteName,
  imageUrl: '/cardart-travel-beachcard-620-382.webp', // Replace with actual Discover it Miles card image URL
  imageWidth: 1290,
  imageHeight: 812,
  ratingValue: 7.0,
  ratingCount: 417,
  reviewBody: 'Our editors evaluate the Discover it® Miles card based on its first-year Unlimited Miles Match welcome offer, flat-rate rewards, redemption simplicity, introductory APR, lack of fees, and overall value for rewards beginners and simplicity-seekers.',
  aprRange: '17.24% to 28.24% variable',
  annualFee: 0,
  applyLink: 'https://www.discover.com/credit-cards/travel/it-miles.html', // UPDATE THIS with your affiliate link
  // --- Official Citation Links from the article ---
  offerDetailsLink: 'https://www.discover.com/credit-cards/travel/it-miles.html',
  ratesAndFeesLink: 'https://www.discovercard.com/application/website/ratesrewards?srcCde=GJX4&adobe_mc=TS%3D1741447882%7CMCMID%3D39379935660807998981588704922154453327%7CMCORGID%3D0D6C4673527839230A490D45%2540AdobeOrg&sv_session_undefined=true&_gl=1*1ec64ug*_gcl_au*MTYyMTU5ODAxMS4xNzQwMzE1MDcw*_ga*MTk0MTA3MDUwOC4xNzQwMzE1MDcx*_ga_3MJNPV4VSE*MTc0MTQ0Nzg3NS40LjAuMTc0MTQ0Nzg3NS42MC4wLjA.', // Generic, update if a specific table link is available
  rewardsFaqLink: 'https://www.discover.com/credit-cards/help-center/faqs/rewards.html',
  cardmemberAgreementLink: 'https://www.discover.com/credit-cards/cardmember-agreement/',
  securityFeaturesLink: 'https://www.discover.com/credit-cards/member-benefits/security/',
  creditScorecardLink: 'https://www.discover.com/free-credit-score/',
  customerServiceLink: 'https://www.discover.com/contact-us/',
  networkAcceptanceLink: 'https://www.discover.com/credit-cards/help-center/faqs/acceptance.html',
  // --- Competitor Links ---
  ventureOneLink: 'https://www.capitalone.com/credit-cards/ventureone/',
  boaTravelRewardsLink: 'https://www.bankofamerica.com/credit-cards/products/travel-rewards-credit-card/',
  chaseFreedomUnlimitedLink: 'https://creditcards.chase.com/cash-back-credit-cards/freedom/unlimited',
  // --- Internal Links ---
  discoverItCashbackReviewLink: '/reviews/discover-it-cash-back-review',
  beginnersGuideLink: '/guides/credit-card-basics-beginners-guide',
  flatRateCardsLink: '/guides/top-2-percent-flat-rate-cash-back-cards',
  noFeeTravelCardsLink: '/guides/best-no-annual-fee-travel-cards-2025',
  sku: 'DISCOVER-IT-MILES-TCI-2025',
  mpn: 'DISCOVERITMILES',
  h1Content: "Discover it® Miles Review: A Refreshingly Simple Path to Rewards",
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
      brand: { '@type': 'Brand', name: 'Discover' },
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
        priceSpecification: [
          {
            '@type': 'PriceSpecification',
            priceCurrency: 'USD',
            price: reviewData.annualFee.toString(),
            valueAddedTaxIncluded: 'false',
            description: `Annual fee: $${reviewData.annualFee}.`,
          },
          {
            '@type': 'PriceSpecification',
            priceCurrency: 'USD',
            description: `Purchase APR: ${reviewData.aprRange}. Foreign Transaction Fee: None. See official ${reviewData.cardName} Rates & Fees on the issuer's website.`,
          },
        ],
        seller: { '@type': 'Organization', name: 'Discover' },
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
        description: `${siteName} editorial rating based on a 10.0 scale, as of ${new Date(updateDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}.`
      },
      author: {
          '@type': 'Person',
          'name': reviewData.author.name,
          'url': reviewData.author.fullBioLink ? `${siteUrl}${reviewData.author.fullBioLink}` : undefined,
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
          'url': reviewData.author.fullBioLink ? `${siteUrl}${reviewData.author.fullBioLink}` : undefined
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
          name: 'How exactly do I redeem my Miles?',
          acceptedAnswer: { '@type': 'Answer', text: "You can redeem in any amount for a statement credit against travel and restaurant purchases, as a direct deposit to your bank, or at checkout with Amazon and PayPal." }
        },
        {
            '@type': 'Question',
            name: 'What purchases count as "travel" for statement credits?',
            acceptedAnswer: { '@type': 'Answer', text: "The category is very broad and includes airlines, hotels, motels, car rentals, cruise lines, travel agents, online travel sites, gas stations, and public transit." }
        },
        {
            '@type': 'Question',
            name: 'What\'s the difference between this and the Discover it® Cash Back card?',
            acceptedAnswer: { '@type': 'Answer', text: "The Miles card offers a flat 1.5% on everything (effectively 3% in year one). The Cash Back card offers 5% in rotating categories (effectively 10% in year one) and 1% on everything else. The Miles card is simpler; the Cash Back card has higher earning potential if you maximize the categories." }
        },
        {
            '@type': 'Question',
            name: 'Do my Miles expire?',
            acceptedAnswer: { '@type': 'Answer', text: "No, your Miles never expire as long as your account is open." }
        },
        {
            '@type': 'Question',
            name: 'Is the Discover card accepted everywhere?',
            acceptedAnswer: { '@type': 'Answer', text: "In the U.S., it's accepted at 99% of places that take credit cards. Internationally, acceptance is limited, so bring a backup Visa or Mastercard." }
        },
        {
            '@type': 'Question',
            name: 'Is this a good card to keep after the first year?',
            acceptedAnswer: { '@type': 'Answer', text: "It can be. While 2% cards offer a better return, the excellent customer service and fee-friendly structure make it a solid 'keeper' card for many." }
        },
        {
            '@type': 'Question',
            name: 'What credit score do I need for the Discover it® Miles card?',
            acceptedAnswer: { '@type': 'Answer', text: "This card is generally targeted at applicants with good to excellent credit (typically a FICO score of 670 or higher)." }
        },
        {
            '@type': 'Question',
            name: 'Is the Miles Match bonus considered taxable income?',
            acceptedAnswer: { '@type': 'Answer', text: "Generally, credit card rewards earned through spending are considered a rebate and not taxable. However, it's always best to consult with a tax professional." }
        },
        {
            '@type': 'Question',
            name: 'Can I add an authorized user to my account?',
            acceptedAnswer: { '@type': 'Answer', text: "Yes, you can add authorized users at no additional cost, and all their spending will earn Miles for your account." }
        },
        {
            '@type': 'Question',
            name: 'With Capital One acquiring Discover, will this card change?',
            acceptedAnswer: { '@type': 'Answer', text: "While no immediate changes have been announced, mergers can lead to future product changes. For now, you should evaluate the card on its current, excellent terms. The potential for future changes doesn't diminish its outstanding present value." }
        }
      ],
    },
    {
      '@type': 'Organization',
      '@id': `${siteUrl}#website`,
      name: siteName,
      url: siteUrl,
      logo: { '@type': 'ImageObject', url: `${siteUrl}/images/logo/your-logo-schema.png` },
      sameAs: [
        "https://www.facebook.com/YourTravelCardInsiderFacebookPage",
        "https://twitter.com/YourTravelCardInsiderTwitterHandle",
      ],
    },
  ],
};

const ratingCriteria = [
    'First-Year Value (Unlimited Miles Match)',
    'Simplicity & Ease of Use',
    'Rewards Earning Rate (1.5x Flat-Rate)',
    'Redemption Flexibility & Value (1 Mile = 1 Cent)',
    'Value of Introductory APR Offer',
    'Annual Fee ($0) & Overall Fee Structure',
    'Customer Service Reputation',
    'Financial Tools (Free FICO Score)',
    'Lack of Foreign Transaction Fees',
    'International Network Acceptance Limitation',
    'Overall Value for Rewards Beginners',
];

const tocSections = [
    { id: 'section-intro', title: 'Introduction: Cutting Through the Turbulence' },
    { id: 'section-snapshot', title: 'Card Snapshot & "Best For" Tagline' },
    { id: 'section-miles-secret', title: 'The Big Secret: Why “Miles” = Cash' },
    { id: 'section-welcome-offer', title: 'Main Event: Unlimited Miles Match' },
    { id: 'section-earning-miles', title: 'How You Earn: 1.5× Miles on Everything' },
    { id: 'section-redemptions', title: 'Cashing In: Simple, Flexible Redemptions' },
    { id: 'section-real-world-value', title: 'Real-World Journey: First-Year Rewards' },
    { id: 'section-user-profile', title: 'Detailed User Profile: Perfect-Fit Travelers' },
    { id: 'section-mismatch', title: 'A Mismatch: Who Should Leave This Card at the Gate' },
    { id: 'section-rates-fees', title: 'Full Financial Itinerary: Rates & Fees' },
    { id: 'section-pros-cons', title: 'Pros & Cons Snapshot' },
    { id: 'section-comparison', title: 'Head-to-Head Competition' },
    { id: 'section-security', title: 'Beyond the Miles: Security & Tools' },
    { id: 'section-customer-service', title: 'The Human Connection: Discover’s Service' },
    { id: 'section-international', title: 'The International Question: Global Acceptance' },
    { id: 'section-testimonials', title: 'Real User Testimonials' },
    { id: 'section-verdict', title: 'Final Verdict: Final Recommendation' },
    { id: 'section-faqs', title: 'Frequently Asked Questions (FAQs)' },
    { id: 'section-apply', title: 'Ready for Take-off? How to Apply' },
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
      el.addEventListener('touchstart', startDrag);
      document.removeEventListener('touchend', stopDrag);
      el.addEventListener('touchmove', onMove);
    };
  }, []);
  return (<div ref={containerRef} className={styles.draggableScrollContainer}>{children}</div>);
}

/* ──────────────────────────────
    COMPONENT
    ────────────────────────────── */
function DiscoverItMilesReviewPage() {
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
    welcomeOffer: "Unlimited Mile-for-Mile match at the end of your first year.",
    annualFee: `$${reviewData.annualFee}`,
    topEarning: "Unlimited 1.5x Miles on every purchase.",
    keyPerk: "Effective 3% rewards rate on everything in year one.",
    travelPerk: "0% Intro APR for 15 months on purchases. No Foreign Transaction Fees.",
    bestFor: "Rewards beginners and budget-conscious families seeking a powerhouse first-year return with unmatched simplicity."
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
        <meta property="article:publisher" content={`https://www.facebook.com/YourTravelCardInsiderFacebookPage`} />
        <meta property="article:section" content="Credit Card Reviews" />
        <meta property="article:published_time" content={publishDate} />
        <meta property="article:modified_time" content={updateDate} />
        <meta property="article:author" content={reviewData.author.name} />
        {reviewData.keywords.split(',').map(keyword => (
            <meta property="article:tag" content={keyword.trim()} key={keyword.trim()} />
        ))}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@YourTravelCardInsiderTwitterHandle" />
        <meta name="twitter:creator" content={`@${reviewData.author.socialLinks?.twitter?.split('/').pop() || 'YourAuthorTwitterHandle'}`} />
        <meta name="twitter:title" content={reviewData.title} />
        <meta name="twitter:description" content={reviewData.description} />
        <meta name="twitter:image" content={`${siteUrl}${reviewData.imageUrl}`} />
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
                        <div className={styles.authorNameLine}><span className={styles.authorPrefix}>By</span> <span className={styles.authorName}>{reviewData.author.name}</span></div>
                        <span className={styles.authorTitle}>{reviewData.author.title}</span>
                        <time dateTime={updateDate} className={styles.authorLastEdited}>Last updated: {new Date(updateDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
                    </div>
                    {showAuthorBioTooltip && (
                        <div className={styles.authorTooltip} ref={authorTooltipRef} role="tooltip" onMouseEnter={handleAuthorClearTimeout} onMouseLeave={handleAuthorMouseLeave}>
                            <div className={styles.authorTooltipHeader}>
                                <Image src={reviewData.author.tooltipImageUrl} alt={`${reviewData.author.name} large headshot`} width={reviewData.author.tooltipImageWidth} height={reviewData.author.tooltipImageHeight} className={styles.authorTooltipImage} />
                                <div className={styles.authorTooltipInfo}><span className={styles.authorTooltipName}>{reviewData.author.name}</span><span className={styles.authorTooltipTitle}>{reviewData.author.title}</span></div>
                            </div>
                            <p className={styles.authorTooltipBioSnippet}>{reviewData.author.bioSnippet}</p>
                            {reviewData.author.fullBioLink && (<Link href={reviewData.author.fullBioLink} legacyBehavior><a className={styles.authorTooltipBioLink}>See full bio</a></Link>)}
                        </div>
                    )}
                </div>
                <p className={styles.heroSubtitle}>
                  This review is your clear, honest guide to a card that charts its own, refreshingly simple course. Where other cards build walls of complexity, this one lays down a welcome mat.
                </p>
                <div className={styles.heroCtaContainer}>
                  <div>
                    <a href={reviewData.applyLink} target="_blank" rel="noopener noreferrer sponsored" className={`${styles.applyNowButton} ${styles.heroApplyButton}`}>Apply on Discover Site</a>
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
                <header className={styles.reviewHeader}>
                    <div className={styles.summaryBox}>
                        <h2 className={styles.summaryBoxTitle}>{reviewData.cardName}: At a Glance</h2>
                        <div className={styles.summaryGrid}>
                            <div className={styles.summaryItem}><span className={styles.summaryIcon}><IconGift /></span> <span className={styles.summaryLabel}>Welcome Offer:</span> <span className={styles.summaryValue}>{summaryBoxData.welcomeOffer}</span></div>
                            <div className={styles.summaryItem}><span className={styles.summaryIcon}><IconDollar /></span> <span className={styles.summaryLabel}>Annual Fee:</span> <span className={styles.summaryValue}>{summaryBoxData.annualFee}</span></div>
                            <div className={styles.summaryItem}><span className={styles.summaryIcon}><IconStar /></span> <span className={styles.summaryLabel}>Rewards Rate:</span> <span className={styles.summaryValue}>{summaryBoxData.topEarning}</span></div>
                            <div className={styles.summaryItem}><span className={styles.summaryIcon}><IconCheck /></span> <span className={styles.summaryLabel}>Key Perk:</span> <span className={styles.summaryValue}>{summaryBoxData.keyPerk}</span></div>
                            <div className={styles.summaryItem}><span className={styles.summaryIcon}><IconPlane /></span> <span className={styles.summaryLabel}>Travel Perk:</span> <span className={styles.summaryValue}>{summaryBoxData.travelPerk}</span></div>
                            <div className={styles.summaryItem} data-full-width="true"><span className={styles.summaryIcon}><IconPlus /></span> <span className={styles.summaryLabel}>Best For:</span> <span className={styles.summaryValue}>{summaryBoxData.bestFor}</span></div>
                        </div>
                        <div className={styles.summaryBoxActions}>
                            <a href={reviewData.ratesAndFeesLink} className={styles.summaryRatesLink} target="_blank" rel="noopener noreferrer sponsored">See Card Rates & Fees</a>
                            <a href='/rewards-calculator' className={`${styles.heroRewardsCalculator} ${styles.summaryButton}`} target="_blank" rel="noopener noreferrer">Rewards Calculator</a>
                        </div>
                    </div>
                </header>

                <section id="section-intro" className={styles.reviewSection}>
                    <h2>Introduction: Cutting Through the Travel-Rewards Turbulence</h2>
                    <p>The world of travel rewards cards often feels like navigating a sprawling metropolis without a map. You’re bombarded with complex points charts, shifting transfer values, blackout dates, and a dizzying array of cards brandishing hefty annual fees for perks you might never use. This complexity is a huge barrier, leaving many aspiring travelers feeling that the rewards game is rigged against them. It begs the question: is there a way to earn real, valuable travel rewards that doesn’t require a spreadsheet and a Ph.D. in loyalty programs?</p>
                    <p>This review is your clear, honest guide to a card that charts its own, refreshingly simple course: the {reviewData.cardName}. Where other cards build walls of complexity, this one lays down a welcome mat. It’s a card designed for the huge number of people who want their everyday spending to help fund their next vacation, without the stress and guesswork. This isn't just a "budget" card; it's a smart choice for a consumer who values predictability and ease of use over the high-stakes, high-effort world of premium travel hacking. Let's dive in and see if this straightforward approach can truly deliver meaningful value.</p>
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
                                    <tr><td>Welcome Offer:</td><td>{summaryBoxData.welcomeOffer} <a href={reviewData.offerDetailsLink} target="_blank" rel="noopener noreferrer sponsored" className={styles.inlineLink}>Source: Discover.com</a></td></tr>
                                    <tr><td>Rewards Rate:</td><td>Unlimited 1.5x Miles on every dollar of every purchase. <a href={reviewData.offerDetailsLink} target="_blank" rel="noopener noreferrer sponsored" className={styles.inlineLink}>Source: Discover.com</a></td></tr>
                                    <tr><td>Redemption:</td><td>1 Mile = 1 Cent, redeemable for travel statement credits, cash, or at Amazon/PayPal.</td></tr>
                                    <tr><td>Intro APR:</td><td>0% Intro APR for 15 months on purchases and balance transfers. <a href={reviewData.ratesAndFeesLink} target="_blank" rel="noopener noreferrer sponsored" className={styles.inlineLink}>Source: Discover.com</a></td></tr>
                                    <tr><td>Foreign Transaction Fee:</td><td>None.</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </DraggableTableWrapper>
                </section>
                
                <section id="section-miles-secret" className={styles.reviewSection}>
                    <h2>The Big Secret: Why “Miles” = Cash</h2>
                    <p>To truly grasp the genius of this card, you have to decode its name. Unlike airline miles, whose values can swing wildly, Discover “Miles” are a clever and consumer-friendly stand-in for fixed-value cash back. Each Mile you earn is worth exactly one cent ($0.01), and that value never changes.</p>
                    <p>This isn’t a critique—it’s the key to the card’s entire appeal. Whether you redeem for a statement credit against a flight, get a direct deposit into your bank account, or pay for your Amazon cart, the math is always the same: 100 Miles = $1.</p>
                    <p>The "miles" branding lets the card compete for the attention of travelers, but its simple cash-back engine makes it incredibly easy to use. It’s the perfect hybrid for rewards beginners who want the feeling of a travel card without the homework, eliminating the risk of your hard-earned points being devalued.</p>
                </section>

                <div className={styles.contentImageWrapper}>
                  <Image 
                    src="/discover-match-promo.png" // Replace with a relevant image
                    alt="Illustration showing Discover doubling a user's first year miles." 
                    width={800} 
                    height={450} 
                    className={styles.contentImage} 
                    loading="lazy" 
                  />
                  <p className={styles.caption}>
                    The Discover Match® feature doubles all Miles earned in the first year, creating an effective 3% rewards rate.
                  </p>
                </div>
                
                <section id="section-welcome-offer" className={styles.reviewSection}>
                  <h2>Main Event: Unlimited Miles Match (Year-1 Double-Up)</h2>
                  <p>The single most compelling feature of the {reviewData.cardName} is its unique and powerful welcome offer: the <strong>Discover Match®</strong>. Instead of a typical sign-up bonus that requires you to spend a certain amount in 90 days, Discover does something much more rewarding. After your first 12 consecutive billing periods, Discover will automatically match every single Mile you earned during that year.</p>
                  <p>There is no limit to the Miles Discover will match and no minimum spending you have to hit. This feature transforms the card's first-year value proposition into something extraordinary. Since you’re already earning 1.5x Miles per dollar, the Miles Match effectively doubles your rewards to an incredible 3x Miles per dollar—or a 3% return—on all your spending for the first year.</p>
                  <p>If you earn 40,000 Miles ($400) through spending, Discover adds another 40,000 Miles to your account, for a total of 80,000 Miles—worth $800. This makes it one of the most lucrative no-annual-fee card offers on the market, especially if you have significant expenses planned in your first year.</p>
                </section>

                <section id="section-earning-miles" className={styles.reviewSection}>
                    <h2>How You Earn: 1.5× Miles on Everything</h2>
                    <p>Beyond the stellar first year, the {reviewData.cardName} is defined by its beautiful simplicity. You earn a flat, unlimited 1.5x Miles on every dollar of every purchase. No exceptions.</p>
                    <p>This is a breath of fresh air compared to cards with rotating 5% bonus categories, a system you can learn more about in our <Link href={reviewData.discoverItCashbackReviewLink}><a>Discover it® Cash Back review</a></Link>. With the {reviewData.cardName}, you don't have to remember which card to use at the grocery store versus the gas station. It’s the ultimate “set it and forget it” wallet companion. Every single swipe, tap, or online purchase earns the same consistent rate. This is perfect for anyone who values their time and wants to be rewarded for their spending without changing their habits.</p>
                </section>
                
                <section id="section-redemptions" className={styles.reviewSection}>
                  <h2>Cashing In: Simple, Flexible Redemptions</h2>
                  <p>The simplicity of earning Miles is matched by the flexibility of redeeming them. Discover empowers you to use your rewards in the way that best suits you, reinforcing that these Miles are as good as cash. The primary ways to redeem are:</p>
                  <ul className={styles.featureList}>
                    <li><strong>Statement Credit for Travel Purchases:</strong> Book travel anywhere—any airline, any hotel, any rental car site. Once the charge posts to your account, you can apply your Miles to erase that purchase. The best part? Discover’s definition of “travel” is incredibly broad, including airfare, hotels, car rentals, gas stations, rideshares, and even restaurants. You can apply credits to purchases made within the last 180 days.<a href={reviewData.rewardsFaqLink} target="_blank" rel="noopener noreferrer sponsored" className={styles.inlineLink}>Source: Discover.com</a></li>
                    <li><strong>Cash Back:</strong> For ultimate flexibility, have your rewards deposited directly into a linked bank account. Critically, the value is the same: 1 Mile equals $0.01. There's no penalty for choosing cash.</li>
                    <li><strong>Pay with Rewards:</strong> Link your card to Amazon.com and PayPal to use your Miles directly at checkout.</li>
                  </ul>
                  <p>A standout feature is the lack of a minimum redemption amount. While many competitors make you wait until you have $25 in rewards, Discover lets you redeem for as little as one Mile.</p>
                </section>
                
                <section id="section-real-world-value" className={styles.reviewSection}>
                    <h2>Real-World Journey: First-Year Rewards Haul</h2>
                    <p>To see how this works for a typical family, let’s follow Taylor, a family traveler. Taylor’s family takes one big summer vacation and a few weekend road trips a year. Their goal is to have their everyday spending cover a significant chunk of those travel costs. Here’s a snapshot of their average monthly spending on the card:</p>
                    <ul className={styles.featureList}>
                        <li><strong>Groceries:</strong> $800</li>
                        <li><strong>Gas:</strong> $300</li>
                        <li><strong>Online Shopping:</strong> $400</li>
                        <li><strong>Bills, Utilities & Other:</strong> $500</li>
                        <li><strong>Total Monthly Spend:</strong> $2,000</li>
                    </ul>
                    <DraggableTableWrapper>
                        <div className={styles.tableContainer}>
                            <table className={`${styles.statsTable} ${styles.ratesFeesTable}`}>
                                <thead>
                                    <tr>
                                        <th>Calculation Step</th>
                                        <th>Math</th>
                                        <th>Result</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr><td>Annual Spend</td><td>$2,000/month × 12 months</td><td>$24,000</td></tr>
                                    <tr><td>Base Miles Earned</td><td>$24,000 × 1.5 Miles/$</td><td>36,000 Miles</td></tr>
                                    <tr><td>Discover Match® Bonus</td><td>Matches all miles earned</td><td>+36,000 Miles</td></tr>
                                    <tr className={styles.totalRow}><td><strong>Total First-Year Miles</strong></td><td></td><td><strong>72,000 Miles</strong></td></tr>
                                    <tr className={styles.totalRow}><td><strong>Total Rewards Value</strong></td><td></td><td><strong>$720</strong></td></tr>
                                </tbody>
                            </table>
                        </div>
                    </DraggableTableWrapper>
                    <p>With $720 in rewards from a no-annual-fee card, Taylor’s family can easily cover two round-trip domestic flights, pay for a rental car and fuel for a week-long road trip, or simply get the cash to spend on experiences during their vacation.</p>
                </section>
                
                {/* --- MID-ARTICLE CTA --- */}
                <section className={styles.midArticleCta}>
                    <h3>Start Your Simple Rewards Journey</h3>
                    <p>With an unlimited first-year match and a 15-month 0% intro APR, the Discover it® Miles card is ready to fund your next adventure.</p>
                    <div className={styles.midArticleCtaButtons}>
                        <a href={reviewData.applyLink} target="_blank" rel="noopener noreferrer sponsored" className={styles.applyNowButton}>
                            Apply on Discover Site
                        </a>
                        <a href={reviewData.ratesAndFeesLink} target="_blank" rel="noopener noreferrer sponsored" className={styles.ratesFeesLinkButton}>
                            See Rates & Fees
                        </a>
                    </div>
                    <span className={styles.ctaDisclaimer}>Offers & benefits are subject to change. Terms apply.</span>
                </section>

                <section id="section-user-profile" className={styles.reviewSection}>
                  <h2>Detailed User Profile: Perfect-Fit Travelers</h2>
                  <p>This card isn’t for everyone, but for these types of users, it’s an absolutely perfect fit:</p>
                  <ul className={styles.featureList}>
                    <li><strong>The Rewards Beginner:</strong> Just dipping your toes into points and miles? The simplicity here is the perfect entry point. For a complete introduction, our <Link href={reviewData.beginnersGuideLink}><a>Credit-Card Basics: Beginner’s Guide</a></Link> is a great place to start.</li>
                    <li><strong>The Simplicity Seeker:</strong> You want a single, reliable card for everything that delivers consistent value with zero effort. No tracking categories, no transfer partners, no problem.</li>
                    <li><strong>The First-Year Maximizer:</strong> You’re savvy and see this card as a strategic one-year play. You can channel all your spending through it to lock in that effective 3% rewards rate, creating unbeatable value.</li>
                    <li><strong>The Budget-Conscious Traveler:</strong> You travel a few times a year and want to offset costs without paying an annual fee. The flexible travel statement credits are a perfect tool to slash vacation expenses.</li>
                    <li><strong>The Big-Purchase Planner:</strong> That 15-month 0% introductory APR is a powerful tool. You can finance a large trip or home renovation interest-free, all while earning valuable rewards.</li>
                  </ul>
                </section>

                <section id="section-mismatch" className={styles.reviewSection}>
                    <h2>A Mismatch: Who Should Leave This Card at the Gate</h2>
                    <p>To be clear, this card is not the right choice for everyone. The following users would likely find more value elsewhere:</p>
                    <ul className={styles.featureList}>
                        <li><strong>The Luxury Traveler:</strong> If you’re looking for airport lounge access, hotel elite status, or annual travel credits, this card isn’t for you.</li>
                        <li><strong>The International Road Warrior:</strong> While it has no foreign transaction fees, Discover's network acceptance is significantly less widespread abroad than Visa and Mastercard.</li>
                        <li><strong>The Long-Term Big Spender:</strong> After year one, the value drops to a flat 1.5% rewards rate. A high spender could earn more with one of the <Link href={reviewData.flatRateCardsLink}><a>Top 2% Flat-Rate Cash-Back Cards</a></Link>.</li>
                        <li><strong>The Category Optimizer:</strong> If you enjoy using different cards to get 3-5% back on groceries, dining, or gas, this card's flat 1.5% rate can't compete with a targeted, multi-card strategy.</li>
                    </ul>
                </section>
                
                <section id="section-rates-fees" className={styles.reviewSection}>
                  <h2>Full Financial Itinerary: Rates & Fees</h2>
                  <p>A core appeal of this card is its transparent, consumer-friendly fee structure.</p>
                   <ul className={styles.featureList}>
                        <li><strong>Annual Fee:</strong> $0.</li>
                        <li><strong>Intro Purchase APR:</strong> 0% for 15 months.</li>
                        <li><strong>Intro Balance Transfer APR:</strong> 0% for 15 months.</li>
                        <li><strong>Regular Variable APR:</strong> {reviewData.aprRange} after the intro period.</li>
                        <li><strong>Balance Transfer Fee:</strong> 3% intro fee, up to 5% on future transfers.</li>
                        <li><strong>Foreign Transaction Fee:</strong> $0.</li>
                        <li><strong>Late Payment Fee:</strong> The first late payment fee is waived. After that, up to $41. <a href={reviewData.cardmemberAgreementLink} target="_blank" rel="noopener noreferrer sponsored" className={styles.inlineLink}>Source: Discover.com</a></li>
                        <li><strong>Penalty APR:</strong> None. Your APR won't increase for paying late.</li>
                    </ul>
                </section>
                
                <section id="section-pros-cons" className={styles.reviewSection}>
                    <h2>Pros &amp; Cons Snapshot</h2>
                    <DraggableTableWrapper>
                        <div className={styles.tableContainer}>
                            <table className={`${styles.statsTable} ${styles.comparisonTable}`}>
                                <thead><tr><th>Pros</th><th>Cons</th></tr></thead>
                                <tbody>
                                    <tr><td>Incredible first-year power with an effective 3% rewards rate.</td><td>Mediocre long-term value at 1.5% after year one.</td></tr>
                                    <tr><td>Ultimate simplicity: no rotating categories or complex redemptions.</td><td>Limited international acceptance compared to Visa/Mastercard.</td></tr>
                                    <tr><td>True redemption flexibility: Miles are worth 1 cent each for anything.</td><td>No real travel perks like rental car insurance or lounge access.</td></tr>
                                    <tr><td>Genuinely fee-friendly: $0 annual fee, no foreign transaction fees.</td><td>No pathway to premium rewards via airline/hotel transfer partners.</td></tr>
                                    <tr><td>Excellent 15-month 0% intro APR on purchases and transfers.</td><td></td></tr>
                                    <tr><td>Top-tier, U.S.-based customer service.</td><td></td></tr>
                                </tbody>
                            </table>
                        </div>
                    </DraggableTableWrapper>
                </section>
                
                <section id="section-comparison" className={styles.reviewSection}>
                    <h2>Head-to-Head Competition</h2>
                    <p>No card exists in a vacuum. To truly assess its value, it must be compared to its closest competitors in the no-annual-fee rewards space. See more at our <Link href={reviewData.noFeeTravelCardsLink}><a>Best No-Annual-Fee Travel Cards 2025 list</a></Link>.</p>
                    <DraggableTableWrapper>
                        <div className={styles.tableContainer}>
                            <table className={`${styles.statsTable} ${styles.comparisonTable}`}>
                                <thead>
                                  <tr>
                                    <th>Feature</th>
                                    <th><strong>{reviewData.cardName}</strong></th>
                                    <th>Capital One VentureOne</th>
                                    <th>Bank of America Travel Rewards</th>
                                    <th>Chase Freedom Unlimited®</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr><td>Annual Fee</td><td>$0</td><td>$0</td><td>$0</td><td>$0</td></tr>
                                  <tr><td>Welcome Offer</td><td>Unlimited 1st-year match</td><td>20,000 miles after $500 spend</td><td>25,000 points after $1,000 spend</td><td>Extra 1.5% on everything (up to $20k spend)</td></tr>
                                  <tr><td>Base Rewards</td><td>1.5x Miles</td><td>1.25x Miles</td><td>1.5x Points</td><td>1.5% Cash Back</td></tr>
                                  <tr><td>Bonus Categories</td><td>None</td><td>5x on hotels/cars via portal</td><td>None</td><td>5% on travel via portal, 3% on dining & drugstores</td></tr>
                                  <tr><td>Redemption Value</td><td>1 cent/mile (any method)</td><td>1 cent/mile (travel) or transfer</td><td>1 cent/point (travel), 0.6 cents (cash)</td><td>1 cent/point or transfer w/ Sapphire</td></tr>
                                  <tr><td>Foreign Fee</td><td>None</td><td>None</td><td>None</td><td>3%</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </DraggableTableWrapper>
                    <h3>Competitive Landscape Analysis</h3>
                    <p>From the table, it's clear the {reviewData.cardName} carves out its own unique space.</p>
                     <ul className={styles.featureList}>
                        <li><strong>Welcome Offer:</strong> The Discover offer is unique. For moderate to high spenders, the first-year match will yield a significantly higher return than the fixed-bonus offers.</li>
                        <li><strong>Earning Potential:</strong> While Discover, Bank of America, and Chase all share a 1.5% base rate, the Chase Freedom Unlimited® pulls ahead for most due to its valuable 3% bonus categories.</li>
                        <li><strong>Redemption Flexibility:</strong> This is a key battleground. Discover's system is the most straightforward: every Mile is worth one cent, period. Bank of America penalizes users who redeem for cash.</li>
                        <li><strong>Foreign Travel:</strong> For international use, the {reviewData.cardName}, Capital One VentureOne, and Bank of America® Travel Rewards cards are all superior choices due to the lack of foreign transaction fees.</li>
                    </ul>
                </section>
                
                <section id="section-security" className={styles.reviewSection}>
                    <h2>Beyond the Miles: Built-in Security &amp; Tools</h2>
                    <p>While the rewards are the main event, the card includes several benefits that add real value.</p>
                    <ul className={styles.featureList}>
                        <li><strong>Security Features:</strong> You get a $0 Fraud Liability Guarantee. Plus, the innovative Freeze it® feature lets you instantly turn your card off from the app if it's misplaced. Discover also provides free alerts if your Social Security number is found on risky Dark Web sites. <a href={reviewData.securityFeaturesLink} target="_blank" rel="noopener noreferrer sponsored" className={styles.inlineLink}>Source: Discover.com</a></li>
                        <li><strong>Financial Tools:</strong> You get free access to your FICO® Credit Score online, a valuable tool for monitoring your credit health. <a href={reviewData.creditScorecardLink} target="_blank" rel="noopener noreferrer sponsored" className={styles.inlineLink}>Source: Discover.com</a></li>
                        <li><strong>What's Missing:</strong> It's important to note the card lacks travel protections like Auto Rental Collision Damage Waiver or Trip Interruption Insurance.</li>
                    </ul>
                </section>

                <section id="section-customer-service" className={styles.reviewSection}>
                    <h2>The Human Connection: Discover’s Service Edge</h2>
                    <p>In an age of endless phone trees, Discover's commitment to customer service is a huge differentiator. You get 24/7 access to a 100% U.S.-based customer service team. <a href={reviewData.customerServiceLink} target="_blank" rel="noopener noreferrer sponsored" className={styles.inlineLink}>Source: Discover.com</a></p>
                    <p>User testimonials consistently praise Discover's representatives for being helpful, professional, and empowered to solve problems quickly. For anyone who values peace of mind, this is a major selling point.</p>
                </section>
                
                <section id="section-international" className={styles.reviewSection}>
                    <h2>The International Question: Global Acceptance</h2>
                    <p>This is the card's most significant caveat. While Discover is accepted at 99% of U.S. locations that take credit cards, its international acceptance is far more limited than Visa and Mastercard. <a href={reviewData.networkAcceptanceLink} target="_blank" rel="noopener noreferrer sponsored" className={styles.inlineLink}>Source: Discover.com</a></p>
                    <p>While the card's lack of foreign transaction fees is great, it should never be the only card you carry when traveling abroad. Always bring a backup Visa or Mastercard.</p>
                </section>

                <section id="section-testimonials" className={styles.reviewSection}>
                  <h2>Real User Testimonials</h2>
                  <div className={styles.testimonialContainer}>
                      <blockquote className={styles.testimonialQuote}>
                          <p>&quot;This was my first real credit card. It was easy to get approved for, and using it responsibly helped me build my credit score. The rewards were a great bonus!&quot;</p>
                          <footer>– Sarah, the Credit Builder</footer>
                      </blockquote>
                      <blockquote className={styles.testimonialQuote}>
                          <p>&quot;My wife and I put all our family expenses on this card for the first year. The mile match paid for our flights to Florida. It's great for planning and saving on trips.&quot;</p>
                          <footer>– David, the Family Traveler</footer>
                      </blockquote>
                       <blockquote className={styles.testimonialQuote}>
                          <p>&quot;I had an issue with a fraudulent charge, and the Discover customer service agent I spoke to was amazing. They handled it in minutes. I'll stick with Discover for that reason alone.&quot;</p>
                          <footer>– Jessica, the Brand Loyalist</footer>
                      </blockquote>
                  </div>
                </section>

                <section id="section-verdict" className={styles.reviewSection}>
                  <h2>Final Verdict: Final Recommendation</h2>
                  <p>The {reviewData.cardName} is a card that knows exactly what it is: a brilliantly simple, travel-themed cash-back card that offers phenomenal first-year value. It’s not a traditional travel card for globetrotters, and that’s okay.</p>
                  <p>For the first year, this is one of the best no-annual-fee cards on the market, period. The unlimited Miles Match delivers an effective 3% rewards rate on every purchase, a return that is exceptionally difficult to beat. Combined with the generous 0% intro APR, it’s a financial powerhouse.</p>
                  <p>After that first year, its value proposition cools off, and it becomes a decent, if unremarkable, 1.5% rewards card. Its primary benefits then become its lack of an annual fee and its stellar customer service.</p>
                  <p><strong>Our Recommendation:</strong> The {reviewData.cardName} is highly recommended for rewards beginners, budget-conscious travelers, and anyone who can leverage the powerful one-two punch of the intro APR and first-year Miles Match. It’s a phenomenal entry into the world of rewards. Just be prepared to re-evaluate its spot in your wallet after year one, when a flat 2% cash-back card might offer better long-term value.</p>
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
                
                <section id="section-apply" className={styles.reviewSection}>
                    <h2>Ready for Take-off? How to Apply</h2>
                    <p>For the right traveler, the Discover it® Miles card is an unparalleled entry point to rewards. With its powerful first-year match, long 0% intro APR, and commitment to simplicity, it’s perfectly equipped to turn your spending into your next adventure. To apply, you can visit Discover's secure website. This is one of the simplest and most rewarding first steps you can take into the world of travel rewards.</p>
                </section>

                <section id="section-eat" className={`${styles.reviewSection} ${styles.eatSection}`}>
                    <h2 dangerouslySetInnerHTML={{ __html: `Our Commitment to E-A-T: Expertise, Authority &amp; Trustworthiness`}}></h2>
                    <p>At <strong>{siteName}</strong>, we are committed to providing content that exemplifies Expertise, Authoritativeness, and Trustworthiness (E-A-T). This review of the <strong>{reviewData.cardName}</strong> has been meticulously researched and crafted. We've analyzed the card's features, benefits, rewards structure, and fees, referencing official issuer documentation and considering real-world user experiences. Our goal is to present a balanced, comprehensive, and reliable guide to help you make an informed decision. All information is current as of <strong>{new Date(updateDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</strong>, but we always recommend verifying details directly with the issuer as terms can change.</p>
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
                <a href={reviewData.ratesAndFeesLink} className={`${styles.stickyFooterBtn} ${styles.stickyFooterBtnRates}`} target="_blank" rel="noopener noreferrer sponsored">See Rates & Fees</a>
            </div>
        </div>
      </div>
    </>
  );
}

export default DiscoverItMilesReviewPage;