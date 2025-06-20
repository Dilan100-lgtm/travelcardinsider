/* ------------------------------------------------------------------
    File:  pages/reviews/chase-freedom-unlimited-review.js
    Route: https://www.travelcardinsider.com/reviews/chase-freedom-unlimited-review
------------------------------------------------------------------- */

import React, { useState, useEffect, useCallback, useRef } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import styles from '../../styles/ReviewPage.module.css'; // Assuming same CSS module as the Amex page

// Inlined SVG components for single file delivery
const IconGift = () => <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24"><path d="M20 12v10H4V12H2v10a2 2 0 002 2h16a2 2 0 002-2V12h-2z"/><path d="M12 2L9.5 4.5l-3-3L4 4l3 3L4.5 9.5 7 12h10l2.5-2.5-2.5-2.5 3-3-2.5-2.5-3 3L12 2zM12 8a2 2 0 110-4 2 2 0 010 4z"/></svg>;
const IconStar = () => <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>;
const IconCheck = () => <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>;
const IconPlus = () => <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"/></svg>;
const IconPlane = () => <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24"><path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/></svg>;
const IconDollar = () => <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24"><path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c2.14-.46 3.5-1.78 3.5-3.97 0-2.02-1.47-3.5-4.2-4.18z"/></svg>;

const TableOfContents = dynamic(() => import('../../components/TableOfContents'), { ssr: false });
const RatingTooltip = dynamic(() => import('../../components/RatingTooltip'), { ssr: false });

/* ──────────────────────────────
    CONSTANTS & STATIC DATA
    ────────────────────────────── */
const siteName = 'Travelcardinsider';
const siteUrl = 'https://www.travelcardinsider.com';
const pagePath = '/reviews/chase-freedom-unlimited-review';
const pageUrlFull = `${siteUrl}${pagePath}`;
const publishDate = '2025-06-20';
const updateDate = '2025-06-20';

const reviewData = {
  cardName        : 'Chase Freedom Unlimited®',
  title           : 'Chase Freedom Unlimited® Review (2025): The Ultimate Everyday Card?',
  description     : 'Our in-depth 2025 review of the Chase Freedom Unlimited®. Explore its 5/3/1.5% rewards, $0 annual fee, valuable perks like trip insurance, and how it powers the Chase Trifecta.',
  keywords        : 'Chase Freedom Unlimited review, Chase Ultimate Rewards, no annual fee credit card, best cashback card 2025, Chase Trifecta, Chase Freedom review',
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
          'Chase Ultimate Rewards® Ecosystem',
          'Credit Card Rewards Optimization',
          'Travel Hacking for Beginners',
          'Cash Back Strategies'
      ],
      bioSnippet: 'Dilan Madushanka is the founder and lead editor of Travelcardinsider, dedicated to demystifying credit cards and uncovering their real-world value for smarter travel and rewards.',
      fullBioLink: '/author/dilan-madushanka',
  },
  siteName: siteName,
  imageUrl        : '/freedom_unlimited_card_alt (1).png',
  imageWidth      : 1290,
  imageHeight     : 812,
  ratingValue     : 9.0,
  ratingCount     : 310,
  reviewBody      : 'Our editors evaluate the Chase Freedom Unlimited® based on its tiered rewards structure (5% on travel via Chase, 3% on dining/drugstores, 1.5% everywhere else), its $0 annual fee, the value of Ultimate Rewards® points, its introductory offers, and its valuable built-in protections like trip cancellation insurance, making it a top-tier no-annual-fee card.',
  aprRange        : '20.49%–29.24% Variable',
  annualFee       : 0,
  applyLink       : 'https://creditcards.chase.com/cash-back-credit-cards/freedom/unlimited',
  ratesLink       : 'https://sites.chase.com/services/creatives/pricingandterms.html/content/dam/pricingandterms/LGC56029.html',
  officialOverviewLink: 'https://creditcards.chase.com/cash-back-credit-cards/freedom/unlimited',
  officialBenefitsGuideLink: 'https://www.chase.com/personal/credit-cards/card-resource-center/chase-benefits',
  officialUltimateRewardsLink: 'https://www.chase.com/personal/credit-cards/ultimate-rewards',
  sku             : 'CHASE-CFU-TCI-2025',
  mpn             : 'CHASECFU',
};

/* ──────────────────────────────
    STRUCTURED DATA GRAPH
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
      brand          : { '@type': 'Brand', name: 'Chase' },
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
        priceSpecification: [
          {
            '@type'              : 'PriceSpecification',
            priceCurrency        : 'USD',
            price                : reviewData.annualFee.toString(),
            valueAddedTaxIncluded: 'false',
            description          : `Annual fee: $${reviewData.annualFee}.`,
          },
          {
            '@type'              : 'PriceSpecification',
            priceCurrency        : 'USD',
            description          : `Purchase APR: ${reviewData.aprRange}. Foreign Transaction Fee: 3%. See official ${reviewData.cardName} Rates & Fees on the issuer's website.`,
          },
        ],
        seller: { '@type': 'Organization', name: 'Chase' },
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
        description: `${siteName} editorial rating based on a 10.0 scale.`
      },
      author          : {
          '@type': 'Person',
          'name': reviewData.author.name,
          'url': reviewData.author.fullBioLink ? `${siteUrl}${reviewData.author.fullBioLink}` : undefined,
      },
      publisher       : {
        '@type' : 'Organization',
        name    : siteName,
        logo    : { '@type': 'ImageObject', url: `${siteUrl}/images/logo/your-logo-schema.png` },
      },
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
       author: {
          '@type': 'Person',
          'name': reviewData.author.name,
          'url': reviewData.author.fullBioLink ? `${siteUrl}${reviewData.author.fullBioLink}` : undefined
       },
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
    {
      '@type'    : 'FAQPage',
      '@id'      : `${pageUrlFull}#faqs`,
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Is the Chase Freedom Unlimited® a Visa or Mastercard?',
          acceptedAnswer: { '@type': 'Answer', text: "It's a Visa Signature®, so it has widespread acceptance wherever Visa is taken." }
        },
        {
          '@type': 'Question',
          name: 'Do the rewards on the Chase Freedom Unlimited® expire?',
          acceptedAnswer: { '@type': 'Answer', text: "No, your Ultimate Rewards® points do not expire as long as your account remains open and in good standing. You can find more details on the official Chase Ultimate Rewards® FAQ page." }
        },
        {
          '@type': 'Question',
          name: 'Is there a minimum number of points to redeem for cash back?',
          acceptedAnswer: { '@type': 'Answer', text: "No, there is no minimum to redeem for cash back. You can redeem any amount at any time." }
        },
        {
          '@type': 'Question',
          name: 'Can I have both the Chase Freedom Unlimited® and the Freedom Flex®?',
          acceptedAnswer: { '@type': 'Answer', text: "Absolutely. Holding both cards is a popular strategy and the foundation of the 'Chase Trifecta,' allowing you to maximize rewards across different spending categories." }
        },
        {
          '@type': 'Question',
          name: 'Does the Chase Freedom Unlimited® offer airport lounge access?',
          acceptedAnswer: { '@type': 'Answer', text: "No, airport lounge access is not a benefit of this card. This perk is typically reserved for premium travel cards with higher annual fees, like the Chase Sapphire Reserve®." }
        },
        {
          '@type': 'Question',
          name: 'What happens to my Ultimate Rewards® points if I close my account?',
          acceptedAnswer: { '@type': 'Answer', text: "You will forfeit any remaining points if you close your account. It's crucial to either redeem your points or transfer them to another Ultimate Rewards®-earning card (like a Sapphire card) or an airline/hotel partner before closing the account. Use them or lose them!" }
        },
      ],
    },
    {
      '@type' : 'Organization',
      '@id'   : `${siteUrl}#website`,
      name    : siteName,
      url     : siteUrl,
      logo    : { '@type': 'ImageObject', url: `${siteUrl}/images/logo/your-logo-schema.png` },
      sameAs  : [
        "https://www.facebook.com/YourTravelCardInsiderFacebookPage",
        "https://twitter.com/YourTravelCardInsiderTwitterHandle",
      ],
    },
  ],
};

const ratingCriteria = [
    'Base Rewards Rate (1.5%)',
    'Bonus Category Rewards (Dining, Drugstores, Travel Portal)',
    'Value and Flexibility of Ultimate Rewards® Points',
    'Welcome Offer Attractiveness & Achievability',
    'Annual Fee ($0)',
    'Introductory APR Offer on Purchases & Transfers',
    'Value of Built-in Protections (e.g., Trip Insurance)',
    'Card-Pairing Potential (e.g., Chase Trifecta)',
    'Foreign Transaction Fee (as a negative factor)',
    'Overall Value Proposition for a No-Fee Card',
];

const tocSections = [
    { id: 'section-intro', title: "So, You're Thinking About the Chase Freedom Unlimited®?" },
    { id: 'section-at-a-glance', title: '1. The Card at a Glance' },
    { id: 'section-why-good', title: '2. What Makes This Card Genuinely Good?' },
    { id: 'section-welcome-offer', title: '3. The Achievable Welcome Offer' },
    { id: 'section-rewards-breakdown', title: '4. The 5/3/1.5 Rewards Formula' },
    { id: 'section-power-of-1-5', title: '5. The Power of 1.5% (and Why It Can Beat 2%)' },
    { id: 'section-cashing-in', title: '6. Cashing In: From Statement Credit to First-Class Seat' },
    { id: 'section-rates-fees', title: '7. Full Rundown on Rates & Fees' },
    { id: 'section-foreign-fee', title: '8. My Mini-Rant: The 3% Foreign Transaction Fee' },
    { id: 'section-perks', title: '9. The Built-In Safety Net (Perks People Forget)' },
    { id: 'section-mid-cta', title: 'Ready to Earn More?' },
    { id: 'section-competition', title: '10. Sizing Up the Competition' },
    { id: 'section-spending-scenario', title: '11. A Real-World Spending Scenario' },
    { id: 'section-user-voices', title: '12. Voices from the Internet' },
    { id: 'section-bottom-line', title: '13. The Bottom Line: The Good and The Bad' },
    { id: 'section-trifecta', title: '14. Unlocking "God Mode": The "Chase Trifecta" Explained' },
    { id: 'section-faqs', title: '15. Your Questions, Answered (FAQs)' },
    { id: 'section-verdict', title: '16. The Verdict: Should You Apply Right Now?' },
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
function ChaseFreedomUnlimitedReviewPage() {
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

  const handleAuthorMouseEnter = useCallback(() => {
      setShowAuthorBioTooltip(true);
  }, []);

  const handleAuthorMouseLeave = useCallback(() => {
      const timerId = setTimeout(() => {
          if (!authorRef.current?.matches(':hover') && !authorTooltipRef.current?.matches(':hover')) {
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
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showAuthorBioTooltip, showRatingInfo]);

  const summaryBoxData = {
    welcomeOffer: "Extra 1.5% on everything (on up to $20,000 in the first year).",
    annualFee: `$${reviewData.annualFee}`,
    topEarning: "5% on travel via Chase, 3% on dining & drugstores.",
    baseEarning: "1.5% on everything else.",
    keyPerk: "Trip Cancellation/Interruption Insurance.",
    bestFor: "The rewards beginner, the aspiring travel hacker, or anyone needing a powerful, all-around card with no annual fee."
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
        <meta property="og:title" content={reviewData.title} />
        <meta property="og:description" content={reviewData.description} />
        <meta property="og:url" content={pageUrlFull} />
        <meta property="og:image" content={`${siteUrl}${reviewData.imageUrl}`} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </Head>

      <main>
        <div className={styles.reviewPageLayout}>
          <div className={styles.mainContentArea}>
            <section className={styles.heroSection}>
              <div className={styles.heroTextContainer}>
                <h1 className={styles.heroTitle}>
                  {reviewData.title}
                </h1>
                 <div
                    className={styles.authorBioContainer}
                    ref={authorRef}
                    onMouseEnter={() => { handleAuthorClearTimeout(); handleAuthorMouseEnter(); }}
                    onMouseLeave={handleAuthorMouseLeave}
                    onFocus={handleAuthorMouseEnter}
                    onBlur={handleAuthorMouseLeave}
                    tabIndex={0}
                >
                    <Image
                        src={reviewData.author.imageUrl}
                        alt={`${reviewData.author.name} headshot`}
                        width={reviewData.author.imageWidth}
                        height={reviewData.author.imageHeight}
                        className={styles.authorImageSmall}
                        priority
                    />
                    <div className={styles.authorInfoBlock}>
                        <div className={styles.authorNameLine}>
                            <span className={styles.authorPrefix}>By</span>
                            <span className={styles.authorName}>{reviewData.author.name}</span>
                        </div>
                        <span className={styles.authorTitle}>{reviewData.author.title}</span>
                         <time dateTime={updateDate} className={styles.authorLastEdited}>
                            Last updated: {new Date(updateDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                        </time>
                    </div>
                </div>
                <p className={styles.heroSubtitle}>
                    The Chase Freedom Unlimited® is frequently touted across finance sites and forums as the quintessential “do-it-all” credit card. This review examines whether the card’s features and rewards truly justify the hype—and, ultimately, whether it merits a place in your wallet.
                </p>
                <div className={styles.heroCtaContainer}>
                  <div>
                    <a
                      href={reviewData.applyLink}
                      target="_blank"
                      rel="noopener noreferrer sponsored"
                      className={`${styles.applyNowButton} ${styles.heroApplyButton}`}
                    >
                      Apply Securely Now
                    </a>
                    <span className={styles.heroApplyButtonDisclaimer}>
                      on Chase&apos;s official site
                    </span>
                  </div>
                  <Link href="#section-at-a-glance" legacyBehavior>
                    <a className={styles.heroSecondaryLink}>View Key Features</a>
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
                      aria-expanded={showRatingInfo}
                    >
                      <svg aria-hidden="true" focusable="false" className={styles.infoIcon} viewBox="0 0 16 16"><path fillRule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/><path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/></svg>
                    </button>
                    {siteName} Rating: <strong>{reviewData.ratingValue.toFixed(1)}</strong>/10
                    {showRatingInfo && (
                      <RatingTooltip
                        ref={ratingTooltipRef}
                        ratingValue={reviewData.ratingValue}
                        ratingCriteria={ratingCriteria}
                        onClose={() => setShowRatingInfo(false)}
                      />
                    )}
                  </span>
                  <div className={styles.starRating} title={`Rated ${reviewData.ratingValue} out of 10 stars`}>
                      ★★★★★
                      <span className={styles.filledStars} style={{ '--rating': `${(reviewData.ratingValue / 10) * 100}%` }}>
                        ★★★★★
                      </span>
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
                    <div className={styles.summaryBox} id="summaryBoxTitle">
                        <h2 className={styles.summaryBoxTitle}>{reviewData.cardName}: Key Insights</h2>
                        <div className={styles.summaryGrid}>
                            <div className={styles.summaryItem}>
                                <span className={styles.summaryIcon}><IconGift /></span>
                                <span className={styles.summaryLabel}>Welcome Offer:</span>
                                <span className={styles.summaryValue}>{summaryBoxData.welcomeOffer}</span>
                            </div>
                            <div className={styles.summaryItem}>
                                <span className={styles.summaryIcon}><IconDollar /></span>
                                <span className={styles.summaryLabel}>Annual Fee:</span>
                                <span className={styles.summaryValue}>{summaryBoxData.annualFee}</span>
                            </div>
                            <div className={styles.summaryItem}>
                                <span className={styles.summaryIcon}><IconStar /></span>
                                <span className={styles.summaryLabel}>Top Rewards:</span>
                                <span className={styles.summaryValue}>{summaryBoxData.topEarning}</span>
                            </div>
                             <div className={styles.summaryItem}>
                                <span className={styles.summaryIcon}><IconStar /></span>
                                <span className={styles.summaryLabel}>Base Rewards:</span>
                                <span className={styles.summaryValue}>{summaryBoxData.baseEarning}</span>
                            </div>
                            <div className={styles.summaryItem}>
                                <span className={styles.summaryIcon}><IconPlane /></span>
                                <span className={styles.summaryLabel}>Key Perk:</span>
                                <span className={styles.summaryValue}>{summaryBoxData.keyPerk}</span>
                            </div>
                            <div className={styles.summaryItem} data-full-width="true">
                                <span className={styles.summaryIcon}><IconPlus /></span>
                                <span className={styles.summaryLabel}>Best For:</span>
                                <span className={styles.summaryValue}>{summaryBoxData.bestFor}</span>
                            </div>
                        </div>
                        <div className={styles.summaryBoxActions}>
                            <a href={reviewData.ratesLink} className={styles.summaryRatesLink} target="_blank" rel="noopener noreferrer sponsored">
                                See Card Rates & Fees
                            </a>
                            <Link href="/rewards-compare" legacyBehavior>
                                <a className={styles.heroRewardsCalculator}>Rewards Calculator</a>
                            </Link>
                        </div>
                    </div>
                </header>

                <section id="section-intro" className={styles.reviewSection}>
                  <p>On the surface, it looks like a simple cash-back card. But its real trick is that it's secretly a travel points machine in disguise. It’s weirdly flexible. It can be the first and only rewards card you own, but it can also be the foundation for one of those slightly obsessive, high-powered <Link href="/learn/rewards-and-perks">travel hacking systems</Link>.</p>
                  <p>This is a deep-dive look at whether it deserves a spot in your wallet. We'll get into the good, the bad, and the stuff you absolutely need to know before you apply.</p>
                </section>

                <section id="section-at-a-glance" className={styles.reviewSection}>
                    <h2>1. The Card at a Glance</h2>
                    <DraggableTableWrapper>
                        <div className={styles.tableContainer}>
                            <table className={`${styles.statsTable} ${styles.highlightTable}`}>
                                <tbody>
                                    <tr><td>Card Name:</td><td><strong>{reviewData.cardName}</strong></td></tr>
                                    <tr><td>'Best For' Tagline:</td><td>The card you'll probably use for almost everything, from cash back to serious travel.</td></tr>
                                    <tr><td>Welcome Bonus:</td><td>Earn an extra 1.5% on everything you buy (on up to $20,000 spent in the first year) - worth up to $300 cash back.</td></tr>
                                    <tr><td>Rewards Rate:</td><td>5% on travel booked through Chase Travel℠, 3% on dining and drugstores, and 1.5% on everything else. (<a href={reviewData.ratesLink} target="_blank" rel="noopener noreferrer sponsored">Pricing & Terms</a>)</td></tr>
                                    <tr><td>Annual Fee:</td><td><strong>${reviewData.annualFee}</strong></td></tr>
                                    <tr><td>Intro APR:</td><td>0% Intro APR for 15 months on purchases and balance transfers.</td></tr>
                                    <tr><td>Credit Needed:</td><td>Good to Excellent (670-850 FICO range). (<a href="https://www.experian.com/blogs/ask-experian/credit-education/score-basics/what-is-a-good-credit-score/" target="_blank" rel="noopener noreferrer">Source: Experian</a>)</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </DraggableTableWrapper>
                </section>
                
                <section id="section-why-good" className={styles.reviewSection}>
                  <h2>2. What Makes This Card Genuinely Good?</h2>
                  <p>The Freedom Unlimited® is popular for a few key reasons that actually hold up. First, the rewards structure is a smart hybrid. You get a decent "floor" of 1.5% back on all your boring, miscellaneous purchases. But you also get a much higher "ceiling" with the 3% and 5% bonus categories. This mix means your actual return on spending will almost always beat a simple 2% flat-rate card, unless you literally never eat out or travel.</p>
                  <p>Second, it’s a $0 annual fee card that doesn't feel cheap. Most no-fee cards skimp on the perks, but this one includes things like Trip Cancellation/Interruption Insurance. (<a href={reviewData.officialBenefitsGuideLink} target="_blank" rel="noopener noreferrer sponsored">See Chase Guide to Benefits</a>). Honestly, having one flight cancellation covered can save you more money than a rival card would earn you in years. It gives you some peace of mind when booking a big trip.</p>
                  <p>Finally, this is the card's hidden superpower: your "cash back" is actually Chase Ultimate Rewards® points. Sure, you can take the cash. No problem. But you can also pair this card with a <Link href="/review/chase-sapphire-preferred-2025">Chase Sapphire card</Link>, move the points over, and often double their value when you redeem them for flights or hotels.</p>
                </section>
                
                <section id="section-welcome-offer" className={styles.reviewSection}>
                    <h2>3. The Achievable Welcome Offer</h2>
                    <p>The sign-up bonus is pretty clever. Instead of making you hit a high spending target in 90 days, it’s just an extra 1.5% back on your first $20,000 in spending for the first year. It’s a bonus you earn organically, without stress-spending on things you don't need. It feels much more user-friendly than the competition.</p>
                </section>
                
                <section id="section-rewards-breakdown" className={styles.reviewSection}>
                    <h2>4. The 5/3/1.5 Rewards Formula</h2>
                    <p>The engine of this card is its tiered rewards:</p>
                    <ul className={styles.featureList}>
                        <li><strong>5% Cash Back on Chase Travel℠:</strong> This is a huge incentive to book your flights and hotels through their portal.</li>
                        <li><strong>3% Cash Back on Dining and Drugstores:</strong> This is the card's sweet spot for daily life. It covers your morning coffee, fancy dinners, and even DoorDash.</li>
                        <li><strong>1.5% Cash Back on All Other Purchases:</strong> This is your safety net. From utility bills to that new sofa, no purchase gets left behind.</li>
                    </ul>
                </section>
                
                <section id="section-power-of-1-5" className={styles.reviewSection}>
                    <h2>5. The Power of 1.5% (and Why It Can Beat 2%)</h2>
                    <p>On paper, 1.5% seems weaker than the 2% you get from cards like the <Link href="/cards/citi-double-cash">Citi Double Cash®</Link> (<a href="https://www.nerdwallet.com/article/credit-cards/chase-freedom-unlimited-vs-citi-double-cash" target="_blank" rel="noopener noreferrer">NerdWallet Comparison</a>). But that’s missing the point. The points you earn with the Freedom Unlimited® are more valuable. When you transfer them to a partner like World of Hyatt through a Sapphire card, you can easily get 2, 3, or even more cents per point. A simple cash-back card can't touch that.</p>
                </section>

                <section id="section-cashing-in" className={styles.reviewSection}>
                  <h2>6. Cashing In: From a Statement Credit to a First-Class Seat</h2>
                  <p>The flexibility in how you use your points is a major selling point.</p>
                  <ul className={styles.featureList}>
                      <li><strong>The Simple Path (Cash Back):</strong> Redeem your points for a statement credit or direct deposit anytime. 10,000 points = $100.</li>
                      <li><strong>The Power-Up Path (Transfer to Premium Cards):</strong> If you also have a Chase Sapphire Preferred® or Reserve®, you can move your points to that account.</li>
                      <li><strong>The Pro Path (Transfer Partners):</strong> This is the secret to those ridiculous travel deals you read about. Pool your points on a Sapphire card, then transfer them 1:1 to airlines like United, Southwest, or hotels like Hyatt.</li>
                  </ul>
                  <blockquote className={styles.highlightQuote}>
                    Just one warning: avoid the "Pay With Points" option on Amazon or PayPal. It is a terrible deal that torches the value of your points. (<a href="https://thepointsguy.com/guide/redeeming-chase-ultimate-rewards-points/" target="_blank" rel="noopener noreferrer">Source: The Points Guy</a>).
                  </blockquote>
                </section>
                
                <section id="section-rates-fees" className={styles.reviewSection}>
                    <h2>7. Full Rundown on Rates & Fees</h2>
                    <p>That $0 annual fee is the star, but here are the other potential costs. This card includes a great chance to pay down existing high-interest debt with its intro <Link href="/guides/balance-transfer-guide">balance transfer</Link> offer. (<a href={reviewData.ratesLink} target="_blank" rel="noopener noreferrer sponsored">See Official Offer Details</a>).</p>
                    <DraggableTableWrapper>
                        <div className={styles.tableContainer}>
                            <table className={`${styles.statsTable} ${styles.ratesFeesTable}`}>
                                <thead><tr><th>Fee/Rate Type</th><th>Cost</th><th>Insider Notes</th></tr></thead>
                                <tbody>
                                    <tr><td>Annual Fee:</td><td><strong>$0</strong></td><td>The best price there is.</td></tr>
                                    <tr><td>Intro Purchase APR:</td><td>0% for 15 months</td><td>A long runway to pay off new purchases interest-free.</td></tr>
                                    <tr><td>Regular Purchase APR:</td><td>{reviewData.aprRange}</td><td>After the intro period, this rate applies.</td></tr>
                                    <tr><td>Intro Balance Transfer APR:</td><td>0% for 15 months</td><td>A great chance to pay down existing high-interest debt.</td></tr>
                                    <tr><td>Balance Transfer Fee:</td><td>Either $5 or 5% of the transfer</td><td>This fee is important. Factor it into your calculations.</td></tr>
                                    <tr><td>Foreign Transaction Fee:</td><td><strong>3% of each transaction</strong></td><td>A real gut-punch. More on this below.</td></tr>
                                    <tr><td>Late Payment Fee:</td><td>Up to $40</td><td>Pay on time. Always.</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </DraggableTableWrapper>
                </section>
                
                <section id="section-foreign-fee" className={styles.reviewSection}>
                    <h2>8. My Mini-Rant: The 3% Foreign Transaction Fee</h2>
                    <p>Okay, let's talk about that 3% fee. For a card that’s so good for earning travel rewards, this feels like a slap in the face. Using this card outside the U.S. will completely erase your rewards. On a $3,000 trip, that’s an extra $90 in fees.</p>
                    <p>But it’s by design. Chase wants the Freedom Unlimited® to be your at-home workhorse. For international trips, they want you to get a card like the <Link href="/review/chase-sapphire-preferred-2025">Chase Sapphire Preferred®</Link>, which has no foreign transaction fees. It’s a clever system to get you deeper into their ecosystem.</p>
                </section>

                <Image
                                    src="/pexels-jose-parra-325935170-32609062 (1).jpg" // UPDATE THIS with a relevant image
                                    alt="A person studying a world map and planning a trip, symbolizing travel rewards education"
                                    width={800}
                                    height={500}
                                    className={styles.contentImage}
                                    loading="lazy"
                                />
                
                <section id="section-perks" className={styles.reviewSection}>
                    <h2>9. The Built-In Safety Net (Perks People Forget)</h2>
                    <p>One of the most underrated features here is the suite of protections, which is rare for a no-fee card. (<a href={reviewData.officialBenefitsGuideLink} target="_blank" rel="noopener noreferrer sponsored">See Card Benefits Guide</a>).</p>
                    <ul className={styles.featureList}>
                        <li><strong>Purchase Protection:</strong> Covers new stuff for 120 days against damage or theft (up to $500 per claim).</li>
                        <li><strong>Extended Warranty:</strong> Adds an extra year to a U.S. manufacturer's warranty.</li>
                        <li><strong>Trip Cancellation/Interruption Insurance:</strong> This is huge. If you get sick or severe weather messes up your trip, you can get reimbursed up to $1,500 per person for non-refundable fares.</li>
                        <li><strong>Auto Rental CDW:</strong> Provides coverage for theft and collision damage for most rental cars.</li>
                        <li><strong>Fraud Protection:</strong> Standard 24/7 monitoring and you aren't liable for fraudulent charges.</li>
                    </ul>
                </section>

                <section id="section-mid-cta" className={styles.midArticleCta}>
                    <h3>Ready to Start Earning with Freedom Unlimited®?</h3>
                    
                    <a href={reviewData.applyLink} target="_blank" rel="noopener noreferrer sponsored" className={styles.applyNowButton}>Apply on Chase's Secure Site</a>
                    <span className={styles.ctaDisclaimer}>Terms apply. Applications are processed on the official issuer's website.</span>
                </section>
                
                <section id="section-competition" className={styles.reviewSection}>
                    <h2>10. Sizing Up the Competition</h2>
                    <p>The Freedom Unlimited® competes in a crowded field by being a jack-of-all-trades.</p>
                    <DraggableTableWrapper>
                        <div className={styles.tableContainer}>
                            <table className={`${styles.statsTable} ${styles.comparisonTable}`}>
                                <thead>
                                    <tr>
                                        <th>Feature</th>
                                        <th>Chase Freedom Unlimited®</th>
                                        <th><Link href="/cards/citi-double-cash">Citi Double Cash® Card</Link></th>
                                        <th><Link href="/cards/wells-fargo-active-cash">Wells Fargo Active Cash®</Link></th>
                                        <th><Link href="/cards/blue-cash-everyday">Blue Cash Everyday® Amex</Link></th>
                                        <th><Link href="/cards/capital-one-quicksilver">Capital One Quicksilver</Link></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr><td>Annual Fee</td><td>$0</td><td>$0</td><td>$0</td><td>$0</td><td>$0</td></tr>
                                    <tr><td>Rewards Rate</td><td>1.5% - 5% (Tiered)</td><td>2% Flat</td><td>2% Flat</td><td>1% - 3% (Tiered)</td><td>1.5% Flat</td></tr>
                                    <tr><td>Foreign Fee</td><td><strong>3%</strong></td><td>3%</td><td>3%</td><td>2.7%</td><td><strong>None</strong></td></tr>
                                    <tr><td>Key Perk</td><td>Trip Insurance</td><td>Long Intro Balance Transfer</td><td>Cell Phone Protection</td><td>Disney Bundle Credit</td><td>No Foreign Fee</td></tr>
                                    <tr><td>Ecosystem</td><td>Chase Ultimate Rewards®</td><td>Citi ThankYou® Points</td><td>Wells Fargo Rewards</td><td>Amex Membership Rewards</td><td>Capital One Miles</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </DraggableTableWrapper>
                </section>
                
                <section id="section-spending-scenario" className={styles.reviewSection}>
                    <h2>11. A Real-World Spending Scenario</h2>
                    <p>Let’s see how it plays out for Taylor, a family traveler.</p>
                    <div className={styles.profileCard}>
                        <h4>Taylor's Monthly Spending:</h4>
                        <ul className={styles.featureList}>
                            <li>Dining & Takeout: $500</li>
                            <li>Drugstores: $150</li>
                            <li>Travel (via Chase): $300</li>
                            <li>All Other Spending: $1,500</li>
                            <li><strong>Total Monthly Spend: $2,450</strong></li>
                        </ul>
                    </div>
                    <h3>Annual Earnings with Chase Freedom Unlimited®:</h3>
                    <p>Dining ($6,000 x 3%) + Drugstores ($1,800 x 3%) + Travel ($3,600 x 5%) + Other ($18,000 x 1.5%) = <strong>$684</strong></p>
                    <h3>Annual Earnings with a 2% Flat-Rate Card:</h3>
                    <p>Total Annual Spend ($29,400) x 2% = <strong>$588</strong></p>
                    <p>For Taylor, the Freedom Unlimited® delivers nearly $100 more in value per year.</p>
                </section>

                <section id="section-user-voices" className={styles.reviewSection}>
                    <h2>12. Voices from the Internet</h2>
                    <div className={styles.testimonialContainer}>
                        <blockquote className={styles.testimonialQuote}><p>"It's the best starter card, period. The bonus categories plus the potential to transfer points later just crushes flat-rate 2% cards if you have any plans to travel."</p><footer>– User on <a href="https://www.reddit.com/r/CreditCards/" target="_blank" rel="noopener noreferrer">r/CreditCards</a></footer></blockquote>
                        <blockquote className={styles.testimonialQuote}><p>"The Freedom Unlimited is my 'catch-all' card. It's the foundation of my Chase Trifecta system for earning points on every single thing I buy."</p><footer>– Thread on the <a href="https://ficoforums.myfico.com/" target="_blank" rel="noopener noreferrer">MyFICO forums</a></footer></blockquote>
                        <blockquote className={styles.testimonialQuote}><p>"Forget everything else, the 3% back at drugstores is why I have this card. I get about $30 back a month just from my family's prescriptions. It's a no-brainer."</p><footer>– A practical cardholder</footer></blockquote>
                    </div>
                </section>

                <section id="section-bottom-line" className={styles.reviewSection}>
                    <h2>13. The Bottom Line: The Good and The Bad</h2>
                    <div className={styles.prosConsContainer}>
                        <div className={styles.prosBox}>
                            <h4>The Good Stuff</h4>
                            <ul className={styles.featureList}>
                                <li> All these perks for a $0 annual fee.</li>
                                <li> Strong tiered rewards with a high floor (1.5%) and ceiling (3-5%).</li>
                                <li> Lucrative bonus categories that reward common spending.</li>
                                <li> Accessible welcome bonus that doesn't force weird spending.</li>
                                <li> Outstanding protections like trip insurance, a huge win on a no-fee card. (<a href="https://www.forbes.com/advisor/credit-cards/best/no-annual-fee/" target="_blank" rel="noopener noreferrer">Forbes Advisor Source</a>)</li>
                            </ul>
                        </div>
                        <div className={styles.consBox}>
                            <h4>The Not-So-Good Stuff</h4>
                             <ul className={styles.featureList}>
                                <li> That 3% foreign transaction fee is a dealbreaker for international use.</li>
                                <li> The 1.5% base rate is lower than some flat 2% competitors.</li>
                                <li> You need to pair it with a Sapphire card to get the maximum value from points.</li>
                                <li> It requires good-to-excellent credit, so it's not for those <Link href="/learn/credit-management-guide">just starting to build credit</Link>. (<a href="https://ficoforums.myfico.com/t5/Credit-Card-Applications/bd-p/5" target="_blank" rel="noopener noreferrer">MyFICO Forums Data</a>)</li>
                            </ul>
                        </div>
                    </div>
                </section>
                
                <section id="section-trifecta" className={styles.reviewSection}>
                    <h2>14. Unlocking "God Mode": The "Chase Trifecta" Explained</h2>
                    <p>Ready to go from casual user to points pro? Meet the "Chase Trifecta." It's a nerdy name for using three Chase cards together to maximize points. (<a href="https://www.forbes.com/advisor/credit-cards/chase-trifecta/" target="_blank" rel="noopener noreferrer">Forbes Advisor Explanation</a>). It’s like a superhero team for your wallet.</p>
                    <ul className={styles.featureList}>
                        <li><strong>The Workhorse (Freedom Unlimited®):</strong> You use this for all your random, non-bonus spending to get 1.5%.</li>
                        <li><strong>The Specialist (Freedom Flex®):</strong> You use this for its rotating 5% bonus category that quarter.</li>
                        <li><strong>The Leader (Sapphire Preferred® or Reserve®):</strong> This is your hub to pool all your points and transfer them to airlines and hotels.</li>
                    </ul>
                </section>

                <section id="section-faqs" className={`${styles.reviewSection} ${styles.faqSection}`}>
                  <h2>15. Your Questions, Answered (FAQs)</h2>
                  <div className={styles.faqContainer}>
                      {structuredData['@graph'].find(item => item['@type'] === 'FAQPage').mainEntity.map((faq, index) => (
                          <details key={index} className={styles.faqItem} name={`faq-${index + 1}`}>
                              <summary className={styles.faqQuestion}>{`${index + 1}. ${faq.name}`}</summary>
                              <div className={styles.faqAnswer}>
                                <p dangerouslySetInnerHTML={{ __html:
                                  faq.acceptedAnswer.text
                                    .replace("Chase Ultimate Rewards® FAQ page", `<a href="${reviewData.officialUltimateRewardsLink}" target="_blank" rel="noopener noreferrer sponsored">Chase Ultimate Rewards® FAQ page</a>`)
                                }} />
                              </div>
                          </details>
                      ))}
                  </div>
                </section>
                
                <section id="section-verdict" className={styles.reviewSection}>
                    <h2>16. The Verdict: Should You Apply Right Now?</h2>
                    <p>The Chase Freedom Unlimited® is one of the most versatile financial tools out there. It serves both the beginner who wants simple cash back and the expert chasing epic travel deals.</p>
                    <h3>This card is an immediate "yes" for:</h3>
                    <ul className={styles.featureList}>
                        <li><strong>The Rewards Beginner:</strong> If you want your first serious rewards card, this is the perfect, <Link href="/no-fee/best-no-fee-cards-2025">no-fee place to start</Link>.</li>
                        <li><strong>The Busy Professional or Family:</strong> If a lot of your budget goes to dining, takeout, and drugstore runs, this card is built for you.</li>
                        <li><strong>The Aspiring Travel Hacker:</strong> This is step one. It's the best way to start stockpiling valuable Chase points.</li>
                    </ul>
                    <h3>However, you should probably pause if:</h3>
                    <ul className={styles.featureList}>
                        <li><strong>You're a frequent international traveler who only wants one card.</strong> That 3% fee will hurt.</li>
                        <li><strong>Your spending is almost entirely on gas and groceries.</strong> The <Link href="/cards/amex-blue-cash-everyday">Amex Blue Cash Everyday®</Link> might fit better.</li>
                    </ul>
                    <p>For just about everyone else, the conclusion is easy. If you want a card that works as a simple cash-back tool today and a powerful travel engine tomorrow, the Chase Freedom Unlimited® is one of the smartest additions you can make to your wallet. It's a card that doesn't just reward you; it grows with you.</p>
                </section>
                
                <section id="section-eat" className={`${styles.reviewSection} ${styles.eatSection}`}>
                    <h2>Our Commitment to E-A-T: Expertise, Authority &amp; Trustworthiness</h2>
                    <p>At <strong>{siteName}</strong>, we are committed to providing content that exemplifies Expertise, Authoritativeness, and Trustworthiness. This review of the <strong>{reviewData.cardName}</strong> has been meticulously researched, referencing official issuer documentation from Chase and considering real-world user experiences. Our goal is to present a balanced, comprehensive, and reliable guide. All information is current as of <strong>{new Date(updateDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</strong>, but we always recommend verifying details directly with the issuer.</p>
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
                <a
                    href={reviewData.applyLink}
                    className={`${styles.stickyFooterBtn} ${styles.stickyFooterBtnApply}`}
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                >
                    Apply Now
                </a>
                <a
                    href={reviewData.ratesLink}
                    className={`${styles.stickyFooterBtn} ${styles.stickyFooterBtnRates}`}
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                >
                    See Rates & Fees
                </a>
            </div>
        </div>
      </div>
    </>
  );
}

export default ChaseFreedomUnlimitedReviewPage;