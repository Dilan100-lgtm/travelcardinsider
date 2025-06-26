/* ------------------------------------------------------------------
    File:  pages/reviews/delta-reserve-business-review.js
    Route: https://www.travelcardinsider.com/reviews/delta-reserve-business-review
------------------------------------------------------------------- */

import React, { useState, useEffect, useCallback, useRef } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import styles from '../../styles/ReviewPage.module.css'; // Assuming same CSS module

import TableOfContents from '../../components/TableOfContents'; // Assuming same TOC component
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
const pagePath = '/reviews/delta-reserve-business-review';
const pageUrlFull = `${siteUrl}${pagePath}`;
const publishDate = '2025-06-26';
const updateDate = '2025-06-26';

const reviewDataNew = {
  cardName        : 'Delta SkyMiles® Reserve Business American Express Card',
  title           : 'Delta Reserve Business Card Review (2025): A First-Class Upgrade or Just an Expensive Seat?',
  description     : "Is the $650 Delta Reserve Business card worth it? Our 2025 review dissects the Centurion Lounge access, Companion Certificate, MQD Headstart, and statement credits to see if it's the right co-pilot for your business.",
  keywords        : 'delta reserve business review, delta business credit card, amex delta reserve business, delta skymiles reserve business, medallion status, companion certificate, centurion lounge access, delta business card 2025',
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
          'Airline Co-Branded Credit Cards',
          'Delta SkyMiles Program',
          'Business Credit Card Strategy',
          'Premium Travel Perks & Lounge Access',
          'American Express Cards'
      ],
      bioSnippet: 'Dilan Madushanka is the founder and lead editor of Travelcardinsider, dedicated to demystifying premium credit cards and uncovering their real-world value for business owners.',
      fullBioLink: '/author/dilan-madushanka',
      fullBio: `Dilan Madushanka is the founder and lead editor of Travelcardinsider, a platform dedicated to helping everyday people make smarter decisions with travel and rewards credit cards. [MORE BIO DETAILS TO BE ADDED BY USER]`,
      publishedStats: 'X+ in-depth card reviews per week',
      testedStats: 'Over Y+ credit card benefits across major brands',
      socialLinks: {
          linkedin: 'https://www.linkedin.com/in/dilan-madushanka-b65293365',
          twitter: 'https://x.com/team_dilan',
          email: 'team@travelcardinsider.com'
      }
  },
  siteName: siteName,
  imageUrl        : '/delta-reserve-business-card.png', // Placeholder: Replace with actual card image URL
  imageWidth      : 1290,
  imageHeight     : 812,
  ratingValue     : 8.5,  // Placeholder - Based on focus for Delta Loyalists with high spend
  ratingCount     : 428,  // Placeholder - UPDATE AS NEEDED
  reviewBody      : "Our editors evaluate the Delta SkyMiles® Reserve Business American Express Card based on its premium travel benefits (lounge access, companion certificate), elite status acceleration (MQD Headstart & Boost), statement credits, earning rates, annual fee, and overall value proposition for Delta-loyal business owners.",
  aprRange        : '20.24% - 29.24% (Variable)', // From your text
  annualFee       : 650,
  applyLink       : 'https://www.americanexpress.com/en-us/business/credit-cards/delta-skymiles-reserve/', // Official Link
  ratesLink       : 'https://www.americanexpress.com/us/credit-cards/card-application/apply/business-card/delta-reserve-for-business-credit-card/ep-36427', // Direct link to terms
  officialOverviewLink: 'https://www.americanexpress.com/en-us/business/credit-cards/delta-skymiles-reserve/',
  officialWelcomeOfferLink: 'https://www.americanexpress.com/en-us/business/credit-cards/delta-skymiles-reserve/',
  officialBenefitsCreditsLink: 'https://global.americanexpress.com/card-benefits/listing/delta-reserve-business',
  officialTravelShoppingProtectionsLink: 'https://www.americanexpress.com/us/credit-cards/features-benefits/policies/purchase-protection-terms.html',
  officialCellPhoneProtectionLink: 'https://global.americanexpress.com/card-benefits/detail/cell-phone-protection/delta-reserve-business',
  officialMedallionProgramLink: 'https://www.delta.com/us/en/skymiles/medallion-program/overview',
  officialCompanionCertLink: 'https://www.delta.com/us/en/booking-information/companion-certificates',
  officialSkyClubAccessLink: 'https://www.delta.com/us/en/delta-sky-club/access',
  officialGlobalEntryTSAPreCheckLink: 'https://global.americanexpress.com/card-benefits/detail/global-entry/delta-reserve-business',
  sku             : 'AMEX-DELTA-RES-BIZ-TCI-2025',
  mpn             : 'AMEXDELTARESBIZ',
  h1Content       : "Delta Reserve Business Card: A First-Class Upgrade or Just an Expensive Seat?",
};

/* ──────────────────────────────
    STRUCTURED DATA GRAPH
    ────────────────────────────── */
const structuredDataOptimized = {
  '@context': 'https://schema.org',
  '@graph'  : [
    {
      '@type'        : 'Product',
      '@id'          : `${pageUrlFull}#product`,
      name           : reviewDataNew.cardName,
      image          : `${siteUrl}${reviewDataNew.imageUrl}`,
      description    : reviewDataNew.description,
      sku            : reviewDataNew.sku,
      mpn            : reviewDataNew.mpn,
      brand          : { '@type': 'Brand', name: 'American Express' },
      aggregateRating: {
        '@type'    : 'AggregateRating',
        ratingValue : reviewDataNew.ratingValue.toString(),
        bestRating  : '10',
        worstRating : '1',
        ratingCount : reviewDataNew.ratingCount.toString(),
        reviewCount : '1',
      },
      offers: {
        '@type'            : 'Offer',
        url                : reviewDataNew.applyLink,
        priceCurrency      : 'USD',
        price              : reviewDataNew.annualFee.toString(),
        priceValidUntil    : '2026-12-31',
        itemCondition      : 'https://schema.org/NewCondition',
        availability       : 'https://schema.org/InStock',
        priceSpecification: [
          {
            '@type'              : 'PriceSpecification',
            priceCurrency        : 'USD',
            price                : reviewDataNew.annualFee.toString(),
            valueAddedTaxIncluded: 'false',
            description          : `Annual fee: $${reviewDataNew.annualFee}.`,
          },
          {
            '@type'              : 'PriceSpecification',
            priceCurrency        : 'USD',
            description          : `Purchase APR: ${reviewDataNew.aprRange}. Foreign Transaction Fee: None. See official ${reviewDataNew.cardName} Rates & Fees on the issuer's website.`,
          },
        ],
        seller: { '@type': 'Organization', name: 'American Express' },
      },
      review: { '@id': `${pageUrlFull}#editorReview` },
    },
    {
      '@type'         : 'Review',
      '@id'           : `${pageUrlFull}#editorReview`,
      name            : `${reviewDataNew.cardName} – Review Updated ${new Date(updateDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}`,
      itemReviewed    : { '@id': `${pageUrlFull}#product` },
      reviewBody      : reviewDataNew.reviewBody,
      reviewRating    : {
        '@type'    : 'Rating',
        ratingValue : reviewDataNew.ratingValue.toString(),
        bestRating  : '10',
        worstRating : '1',
        description: `${siteName} editorial rating based on a 10.0 scale, as of ${new Date(updateDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}.`
      },
      author          : {
          '@type': 'Person',
          'name': reviewDataNew.author.name,
          'url': reviewDataNew.author.fullBioLink ? `${siteUrl}${reviewDataNew.author.fullBioLink}` : undefined,
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
      name               : reviewDataNew.title,
      description        : reviewDataNew.description,
      inLanguage         : 'en-US',
      isPartOf           : { '@id': `${siteUrl}#website` },
      primaryImageOfPage : { '@id': `${pageUrlFull}#primaryImage` },
      breadcrumb         : { '@id': `${pageUrlFull}#breadcrumbs` },
      datePublished      : publishDate,
      dateModified       : updateDate,
       author: {
          '@type': 'Person',
          'name': reviewDataNew.author.name,
          'url': reviewDataNew.author.fullBioLink ? `${siteUrl}${reviewDataNew.author.fullBioLink}` : undefined
       },
    },
    {
      '@type'   : 'ImageObject',
      '@id'     : `${pageUrlFull}#primaryImage`,
      url       : `${siteUrl}${reviewDataNew.imageUrl}`,
      width     : reviewDataNew.imageWidth,
      height    : reviewDataNew.imageHeight,
      caption   : reviewDataNew.cardName,
    },
    {
      '@type'        : 'BreadcrumbList',
      '@id'          : `${pageUrlFull}#breadcrumbs`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: siteName, item: siteUrl },
        { '@type': 'ListItem', position: 2, name: 'Credit Card Reviews', item: `${siteUrl}/reviews` },
        { '@type': 'ListItem', position: 3, name: `${reviewDataNew.cardName} Review`, item: pageUrlFull },
      ],
    },
    {
      '@type'    : 'FAQPage',
      '@id'      : `${pageUrlFull}#faqs`,
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Does the Companion Certificate roll over if I don\'t use it?',
          acceptedAnswer: { '@type': 'Answer', text: "No. It expires one year from issuance, and travel must be completed by that date. It's a use-it-or-lose-it benefit." }
        },
        {
          '@type': 'Question',
          name: 'Can I get into the Sky Club if I\'m flying a partner like Air France?',
          acceptedAnswer: { '@type': 'Answer', text: "No. Card access is strictly for when you are flying on a Delta-marketed or operated flight." }
        },
        {
          '@type': 'Question',
          name: 'Is the MQD Boost based on all spending?',
          acceptedAnswer: { '@type': 'Answer', text: "Yes. It's based on all eligible purchases, making it a powerful tool for earning status through regular business expenses." }
        },
        {
          '@type': 'Question',
          name: 'Can I combine the TakeOff 15 discount with Pay with Miles?',
          acceptedAnswer: { '@type': 'Answer', text: "No. TakeOff 15 is for Award Tickets (paid almost entirely with miles), while Pay with Miles reduces the cash cost of a ticket. They are separate redemption methods." }
        },
        {
          '@type': 'Question',
           name: 'Is the card made of metal?',
           acceptedAnswer: { '@type': 'Answer', text: "Yes, the Delta SkyMiles® Reserve Business American Express Card has a premium metal construction." }
        }
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

const ratingCriteriaOriginal = [
    'Companion Certificate Value (First Class)',
    'Lounge Access (Sky Club & Centurion)',
    'Elite Status Acceleration (MQD Headstart & Boost)',
    'Statement Credits Value ($610 potential)',
    'Welcome Bonus Value',
    'Earning Rates (3X on Delta)',
    'Annual Fee ($650) vs. Overall Benefits',
    'Travel Perks (Free Bag, Upgrade Priority)',
    'Business Protections (Cell Phone, etc.)',
    'Overall Value for Delta-Loyal Businesses',
];

const tocSections = [
    { id: 'section-1', title: '1. At a Glance: The High-Flying Essentials' },
    { id: 'section-2', title: '2. The Ideal Cardholder: The "Delta-Devoted Entrepreneur"' },
    { id: 'section-3', title: '3. The Welcome Wagon: Is the 110,000-Mile Offer Worth It?' },
    { id: 'section-4', title: '4. Earning Your Wings: Maximizing Miles' },
    { id: 'section-5', title: '5. The Medallion Fast Track: Your Shortcut to Elite Status' },
    { id: 'section-6', title: '6. The Crown Jewel: The Companion Certificate' },
    { id: 'section-7', title: '7. Your Airport Oasis: Sky Club & Centurion Lounge Access' },
    { id: 'section-8', title: '8. Curb to Cabin: Perks That Smooth Your Journey' },
    { id: 'section-9', title: '9. The $610 Question: Maximizing Statement Credits' },
    { id: 'section-10', title: '10. A Year in the Life: A Real-World Value Example' },
    { id: 'section-11', title: '11. The Price of Admission: Full Rates & Fees' },
    { id: 'section-12', title: '12. Clash of the Titans: Reserve Business vs. The Competition' },
    { id: 'section-13', title: '13. Pros & Cons: The Good, The Bad & The Complicated' },
    { id: 'section-14', title: '14. Voices from the Gate: Real User Testimonials' },
    { id: 'section-15', title: '15. Navigating the Fine Print: What You Can\'t Ignore' },
    { id: 'section-16', title: '16. Beyond the Traveler: Business Tools & Protections' },
    { id: 'section-17', title: '17. Final Verdict: Is It Worth the $650 Fee?' },
    { id: 'section-18', title: '18. Your Top Questions, Answered (FAQs)' },
    { id: 'section-19', title: '19. Pre-Flight Checklist: Your Final Takeaway' },
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
function DeltaReserveBusinessReviewPage() {
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
          if (authorRef.current && authorTooltipRef.current) {
              const isHoveringTrigger = authorRef.current.matches(':hover');
              const isHoveringTooltip = authorTooltipRef.current.matches(':hover');
              const isFocusWithinTrigger = authorRef.current.contains(document.activeElement);
              const isFocusWithinTooltip = authorTooltipRef.current.contains(document.activeElement);
              if (!isHoveringTrigger && !isHoveringTooltip && !isFocusWithinTrigger && !isFocusWithinTooltip) {
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
          if (showAuthorBioTooltip &&
              authorRef.current && !authorRef.current.contains(event.target) &&
              authorTooltipRef.current && !authorTooltipRef.current.contains(event.target)) {
              setShowAuthorBioTooltip(false);
          }
          if (showRatingInfo &&
              !event.target.closest(`.${styles.infoIconButton}`) &&
              ratingTooltipRef.current && !ratingTooltipRef.current.contains(event.target)
             ) {
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
    welcomeOffer: "110,000 Bonus Miles after $12,000 spend in first 6 months.",
    annualFee: `$${reviewDataNew.annualFee}`,
    topEarning: "3X miles on Delta purchases.",
    keyPerks: "Sky Club & Centurion Lounge Access.",
    travelPerk: "Annual First Class Companion Certificate.",
    bestFor: "The Delta-loyal business owner who prioritizes elite status and premium comfort."
  };


  return (
    <>
      <Head>
        <title>{reviewDataNew.title} - {siteName}</title>
        <meta name="description" content={reviewDataNew.description} />
        <meta name="keywords" content={reviewDataNew.keywords} />
        <meta name="author" content={reviewDataNew.author.name} />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="robots" content="index,follow,max-image-preview:large" />
        <link rel="canonical" href={pageUrlFull} />
        <link rel="alternate" href={pageUrlFull} hreflang="en-us" />
        <link rel="preload" as="image" href={`${siteUrl}${reviewDataNew.imageUrl}`} />
        <link rel="preload" as="image" href={reviewDataNew.author.imageUrl} />
        <link rel="preload" as="image" href={reviewDataNew.author.tooltipImageUrl} />
        <meta name="geo.region" content="US" />
        <meta name="geo.placename" content="United States" />
        <meta name="language" content="en-US" />
        <meta name="distribution" content="US" />
        {[
          '/fonts/inter-v18-latin-regular.woff2',
          '/fonts/inter-v18-latin-600.woff2',
          '/fonts/inter-v18-latin-700.woff2',
          '/fonts/Roboto_Condensed-Regular.ttf',
          '/fonts/Roboto_Condensed-Bold.ttf',
        ].map((f) => (
          <link key={f} rel="preload" href={f} as="font" type={f.endsWith('woff2') ? 'font/woff2' : 'font/ttf'} crossOrigin="anonymous" />
        ))}
        <meta property="og:type"        content="article" />
        <meta property="og:locale"      content="en_US" />
        <meta property="og:site_name"   content={siteName} />
        <meta property="og:title"       content={reviewDataNew.title} />
        <meta property="og:description" content={reviewDataNew.description} />
        <meta property="og:url"         content={pageUrlFull} />
        <meta property="og:image"       content={`${siteUrl}${reviewDataNew.imageUrl}`} />
        <meta property="og:image:width" content={String(reviewDataNew.imageWidth)} />
        <meta property="og:image:height" content={String(reviewDataNew.imageHeight)} />
        <meta property="article:publisher" content={`https://www.facebook.com/YourTravelCardInsiderFacebookPage`} />
        <meta property="article:section"       content="Credit Card Reviews" />
        <meta property="article:published_time" content={publishDate} />
        <meta property="article:modified_time"  content={updateDate} />
        <meta property="article:author" content={reviewDataNew.author.name} />
        {reviewDataNew.keywords.split(',').map(keyword => (
            <meta property="article:tag" content={keyword.trim()} key={keyword.trim()} />
        ))}
        <meta name="twitter:card"        content="summary_large_image" />
        <meta name="twitter:site" content="@YourTravelCardInsiderTwitterHandle" />
        <meta name="twitter:creator" content={`@${reviewDataNew.author.socialLinks?.twitter?.split('/').pop() || 'YourAuthorTwitterHandle'}`} />
        <meta name="twitter:title"       content={reviewDataNew.title} />
        <meta name="twitter:description" content={reviewDataNew.description} />
        <meta name="twitter:image"       content={`${siteUrl}${reviewDataNew.imageUrl}`} />
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredDataOptimized) }} />
      </Head>

      <main>
        <div className={styles.reviewPageLayout}>
          <div className={styles.mainContentArea}>
            <section className={styles.heroSection}>
              <div className={styles.heroTextContainer}>
                <h1 className={styles.heroTitle}>
                  {reviewDataNew.h1Content}
                </h1>
                 <div
                    className={styles.authorBioContainer}
                    ref={authorRef}
                    onMouseEnter={() => { handleAuthorClearTimeout(); handleAuthorMouseEnter(); }}
                    onMouseLeave={handleAuthorMouseLeave}
                    onFocus={handleAuthorMouseEnter}
                    onBlur={handleAuthorMouseLeave}
                    aria-haspopup="true"
                    aria-expanded={showAuthorBioTooltip}
                    tabIndex={0}
                >
                    <Image
                        src={reviewDataNew.author.imageUrl}
                        alt={`${reviewDataNew.author.name} headshot`}
                        width={reviewDataNew.author.imageWidth}
                        height={reviewDataNew.author.imageHeight}
                        className={styles.authorImageSmall}
                        priority
                    />
                    <div className={styles.authorInfoBlock}>
                        <div className={styles.authorNameLine}>
                            <span className={styles.authorPrefix}>By</span>
                            <span className={styles.authorName}>{reviewDataNew.author.name}</span>
                        </div>
                        <span className={styles.authorTitle}>{reviewDataNew.author.title}</span>
                        {updateDate && (
                            <time dateTime={updateDate} className={styles.authorLastEdited}>
                                Last updated: {new Date(updateDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                            </time>
                        )}
                        {reviewDataNew.author.socialLinks && (
                            <div className={styles.authorSocialLinks}>
                                {reviewDataNew.author.socialLinks.linkedin && (
                                    <a href={reviewDataNew.author.socialLinks.linkedin} target="_blank" rel="noopener noreferrer me" aria-label={`${reviewDataNew.author.name} on LinkedIn`} className={styles.socialIconLink}>
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                                    </a>
                                )}
                                {reviewDataNew.author.socialLinks.twitter && (
                                    <a href={reviewDataNew.author.socialLinks.twitter} target="_blank" rel="noopener noreferrer me" aria-label={`${reviewDataNew.author.name} on Twitter`} className={styles.socialIconLink}>
                                         <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-.422.724-.665 1.56-.665 2.452 0 1.697.864 3.198 2.18 4.078-.8-.025-1.555-.247-2.227-.616v.054c0 2.37 1.683 4.333 3.91 4.78-.426.116-.874.174-1.337.174-.31 0-.611-.03-.904-.085.622 1.936 2.421 3.338 4.553 3.377-1.672 1.309-3.781 2.088-6.072 2.088-.394 0-.784-.023-1.169-.069 2.16 1.389 4.723 2.202 7.482 2.202 8.979 0 13.897-7.446 13.897-13.898 0-.21 0-.42-.015-.63.953-.689 1.778-1.56 2.433-2.525z"/></svg>
                                    </a>
                                )}
                                {reviewDataNew.author.socialLinks.email && (
                                    <a href={`mailto:${reviewDataNew.author.socialLinks.email}`} aria-label={`Email ${reviewDataNew.author.name}`} className={styles.socialIconLink}>
                                         <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"/></svg>
                                    </a>
                                )}
                            </div>
                        )}
                    </div>
                    {showAuthorBioTooltip && reviewDataNew.author.bioSnippet && (
                        <div
                            className={styles.authorTooltip}
                            ref={authorTooltipRef}
                            role="tooltip"
                            onMouseEnter={handleAuthorClearTimeout}
                            onMouseLeave={handleAuthorMouseLeave}
                            onFocus={handleAuthorMouseEnter}
                            onBlur={handleAuthorMouseLeave}
                        >
                             <div className={styles.authorTooltipHeader}>
                                 <Image
                                    src={reviewDataNew.author.tooltipImageUrl}
                                    alt={`${reviewDataNew.author.name} large headshot`}
                                    width={reviewDataNew.author.tooltipImageWidth}
                                    height={reviewDataNew.author.tooltipImageHeight}
                                    className={styles.authorTooltipImage}
                                 />
                                 <div className={styles.authorTooltipInfo}>
                                     <span className={styles.authorTooltipName}>{reviewDataNew.author.name}</span>
                                     <span className={styles.authorTooltipTitle}>{reviewDataNew.author.title}</span>
                                 </div>
                               </div>
                               {reviewDataNew.author.expertise && reviewDataNew.author.expertise.length > 0 && (
                                 <div className={styles.authorTooltipExpertise}>
                                     <strong>Expertise</strong>
                                     <ul>
                                         {reviewDataNew.author.expertise.map(area => <li key={area}>{area}</li>)}
                                     </ul>
                                 </div>
                               )}
                               <p className={styles.authorTooltipBioSnippet}>{reviewDataNew.author.bioSnippet}</p>
                               {reviewDataNew.author.fullBioLink && (
                                   <Link href={reviewDataNew.author.fullBioLink} legacyBehavior>
                                       <a className={styles.authorTooltipBioLink}>
                                           See full bio
                                       </a>
                                   </Link>
                               )}
                               {reviewDataNew.author.socialLinks && (
                                    <div className={styles.authorTooltipSocials}>
                                        {reviewDataNew.author.socialLinks.linkedin && (
                                             <a href={reviewDataNew.author.socialLinks.linkedin} target="_blank" rel="noopener noreferrer me" aria-label={`${reviewDataNew.author.name} on LinkedIn`} className={styles.socialIconLink}>
                                                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                                             </a>
                                         )}
                                         {reviewDataNew.author.socialLinks.twitter && (
                                             <a href={reviewDataNew.author.socialLinks.twitter} target="_blank" rel="noopener noreferrer me" aria-label={`${reviewDataNew.author.name} on Twitter`} className={styles.socialIconLink}>
                                                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-.422.724-.665 1.56-.665 2.452 0 1.697.864 3.198 2.18 4.078-.8-.025-1.555-.247-2.227-.616v.054c0 2.37 1.683 4.333 3.91 4.78-.426.116-.874.174-1.337.174-.31 0-.611-.03-.904-.085.622 1.936 2.421 3.338 4.553 3.377-1.672 1.309-3.781 2.088-6.072 2.088-.394 0-.784-.023-1.169-.069 2.16 1.389 4.723 2.202 7.482 2.202 8.979 0 13.897-7.446 13.897-13.898 0-.21 0-.42-.015-.63.953-.689 1.778-1.56 2.433-2.525z"/></svg>
                                             </a>
                                         )}
                                         {reviewDataNew.author.socialLinks.email && (
                                             <a href={`mailto:${reviewDataNew.author.socialLinks.email}`} aria-label={`Email ${reviewDataNew.author.name}`} className={styles.socialIconLink}>
                                                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"/></svg>
                                             </a>
                                         )}
                                    </div>
                                )}
                        </div>
                    )}
                </div>
                <p className={styles.heroSubtitle}>
                  Picture the typical business trip: the chaotic rush, a crowded gate, the hunt for a power outlet. Now, imagine finalizing a presentation in a quiet lounge, drink in hand. The {reviewDataNew.cardName} promises this world, but does it justify the steep $650 annual fee?
                </p>
                <div className={styles.heroCtaContainer}>
                  <div>
                    <a
                      href={reviewDataNew.applyLink}
                      target="_blank"
                      rel="noopener noreferrer sponsored"
                      className={`${styles.applyNowButton} ${styles.heroApplyButton}`}
                    >
                      Apply Securely Now
                    </a>
                    <span className={styles.heroApplyButtonDisclaimer}>
                      on American Express's official site
                    </span>
                  </div>
                  <Link href="#section-1" legacyBehavior>
                    <a className={styles.heroSecondaryLink}>View Key Features</a>
                  </Link>
                </div>
              </div>
              <div className={styles.heroImageContainer}>
                <div className={styles.cardImageContainer}>
                  <Image
                    src={reviewDataNew.imageUrl}
                    alt={reviewDataNew.cardName}
                    width={reviewDataNew.imageWidth}
                    height={reviewDataNew.imageHeight}
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
                      <svg aria-hidden="true" focusable="false" className={styles.infoIcon} viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                        <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                      </svg>
                    </button>
                    {siteName} Rating: <strong>{reviewDataNew.ratingValue.toFixed(1)}</strong>/10
                    {showRatingInfo && (
                      <RatingTooltip
                        ref={ratingTooltipRef}
                        ratingValue={reviewDataNew.ratingValue}
                        ratingCriteria={ratingCriteriaOriginal}
                        onClose={() => setShowRatingInfo(false)}
                      />
                    )}
                  </span>
                  <div className={styles.starRating} title={`Rated ${reviewDataNew.ratingValue} out of 10 stars`}>
                      ★★★★★
                      <span className={styles.filledStars} style={{ '--rating': `${(reviewDataNew.ratingValue / 10) * 100}%` }}>
                        ★★★★★
                      </span>
                  </div>
                </div>
                 <div className={styles.ratingDescription}>
                    <i>This deep dive will dissect every aspect of the card to deliver a clear verdict on whether this is the right co-pilot for your business.</i>
                 </div>
              </div>
            </section>

             <div className={styles.reviewContainer}>
              <article>
                <header className={styles.reviewHeader}>
                    <div className={styles.summaryBox} id="summaryBoxTitle">
                        <h2 className={styles.summaryBoxTitle}>{reviewDataNew.cardName}: Key Insights</h2>
                        <div className={styles.summaryGrid}>
                            <div className={styles.summaryItem}>
                                <span className={styles.summaryIcon}><IconGift /></span>
                                <span className={styles.summaryLabel}>Welcome Offer:</span>
                                <span className={styles.summaryValue}>{summaryBoxData.welcomeOffer}</span>
                            </div>
                            <div className={styles.summaryItem}>
                                <span className={styles.summaryIcon}><IconCheck /></span>
                                <span className={styles.summaryLabel}>Annual Fee:</span>
                                <span className={styles.summaryValue}>{summaryBoxData.annualFee}</span>
                            </div>
                            <div className={styles.summaryItem}>
                                <span className={styles.summaryIcon}><IconStar /></span>
                                <span className={styles.summaryLabel}>Top Earning:</span>
                                <span className={styles.summaryValue}>{summaryBoxData.topEarning}</span>
                            </div>
                             <div className={styles.summaryItem}>
                                <span className={styles.summaryIcon}><IconPlane /></span>
                                <span className={styles.summaryLabel}>Key Perks:</span>
                                <span className={styles.summaryValue}>{summaryBoxData.keyPerks}</span>
                            </div>
                            <div className={styles.summaryItem}>
                                <span className={styles.summaryIcon}><IconDollar /></span>
                                <span className={styles.summaryLabel}>Top Travel Perk:</span>
                                <span className={styles.summaryValue}>{summaryBoxData.travelPerk}</span>
                            </div>
                            <div className={styles.summaryItem} data-full-width="true">
                                <span className={styles.summaryIcon}><IconPlus /></span>
                                <span className={styles.summaryLabel}>Best For:</span>
                                <span className={styles.summaryValue}>{summaryBoxData.bestFor}</span>
                            </div>
                        </div>
                        <div className={styles.summaryBoxActions}>
                            <a href={reviewDataNew.ratesLink} className={styles.summaryRatesLink} target="_blank" rel="noopener noreferrer sponsored">
                                See Card Rates & Fees
                            </a>
                             <a href='/rewards-calculator' className={`${styles.heroRewardsCalculator} ${styles.summaryButton}`} target="_blank" rel="noopener noreferrer">
                                Rewards Calculator
                            </a>
                        </div>
                    </div>
                </header>

                <section id="section-1" className={styles.reviewSection}>
                  <h2>1. At a Glance: The High-Flying Essentials</h2>
                  <p><strong>Best For:</strong> The Delta-loyal business owner who prioritizes elite status and premium comfort. This card is precision-engineered for entrepreneurs whose business lives and breathes on Delta Air Lines.</p>
                  <DraggableTableWrapper>
                        <div className={styles.tableContainer}>
                            <table className={`${styles.statsTable} ${styles.ratesFeesTable}`}>
                                <thead>
                                    <tr>
                                        <th>Feature</th>
                                        <th>Details</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr><td>Card Name</td><td>{reviewDataNew.cardName}</td></tr>
                                    <tr><td>Welcome Offer</td><td>Earn 110,000 Bonus Miles after spending $12,000 on purchases in your first 6 months. (<a href={reviewDataNew.officialWelcomeOfferLink} target="_blank" rel="noopener noreferrer sponsored">Source: American Express</a>)</td></tr>
                                    <tr><td>Annual Fee</td><td>${reviewDataNew.annualFee}</td></tr>
                                    <tr><td>Earning Rates</td><td>3X Miles on Delta purchases; 1.5X Miles on eligible transit, U.S. shipping, and at U.S. office supply stores; 1.5X Miles on all other purchases after you spend $150,000 in a year; 1X Miles on everything else.</td></tr>
                                    <tr><td>Top 3 Perks</td><td>1. Delta Sky Club® & The Centurion® Lounge Access <br/> 2. Annual First Class/Comfort+/Main Cabin Companion Certificate <br/> 3. MQD Headstart & MQD Boost for Medallion® Status</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </DraggableTableWrapper>
                </section>

                <Image
                    src="/business-traveler-lounge.webp" // Placeholder - image of person in a lounge
                    alt="A business professional working in an airport lounge, symbolizing the card's premium access."
                    width={800}
                    height={500}
                    className={styles.contentImage}
                    loading="lazy"
                />

                <section id="section-2" className={styles.reviewSection}>
                  <h2>2. The Ideal Cardholder: The "Delta-Devoted Entrepreneur"</h2>
                  <p>This card isn’t for everyone, and it doesn’t pretend to be. It confidently walks past the budget-conscious startup and the infrequent traveler, targeting a specific profile: the established small business owner, consultant, or executive whose work is fundamentally linked to travel—specifically, Delta travel.</p>
                  <div className={styles.profileCardContainer}>
                    <div className={styles.profileCard}>
                        <h4>The Status Chaser</h4>
                        <p>This person sees business spending as a strategic tool to chase elite status. They channel significant expenses to hit the MQD Boost and the $75,000 spend waiver for unlimited Sky Club visits.</p>
                    </div>
                    <div className={styles.profileCard}>
                        <h4>The Hub-Based Traveler</h4>
                        <p>They likely live near or often connect through a Delta hub like Atlanta (ATL), Detroit (DTW), or Salt Lake City (SLC). Why? Because frequent, easy access to Delta Sky Clubs is central to the card’s value proposition.</p>
                    </div>
                    <div className={styles.profileCard}>
                        <h4>The Value Maximizer</h4>
                        <p>This owner's spending naturally aligns with the card's "coupon book" of credits. They use Resy for client dinners and regularly use rideshare services, making the statement credits an easy win.</p>
                    </div>
                  </div>
                </section>

                <section id="section-3" className={styles.reviewSection}>
                    <h2>3. The Welcome Wagon: Is the 110,000-Mile Offer Worth It?</h2>
                    <p>The card's first handshake is a firm and valuable one. Currently, new members can earn **110,000 Bonus Miles** after spending $12,000 in the first six months.</p>
                    <p>So, what’s that bonus really worth? Using a conservative valuation of 1.2 cents per SkyMile, 110,000 miles translates to about **$1,320 in travel value**. This value gets a further boost from the card's **TakeOff 15** benefit, which gives you a 15% discount when redeeming miles for Delta flights, stretching your rewards even further. (<a href="https://www.delta.com/us/en/skymiles/airline-credit-cards/takeoff-15" target="_blank" rel="noopener noreferrer">Source: Delta Air Lines</a>).</p>
                    <p>The $12,000 spending requirement over six months breaks down to a manageable $2,000 per month for many businesses. More importantly, this welcome offer reframes the card's financial commitment. The ~$1,320 in initial value effectively covers the $650 annual fee for two years, giving you a risk-mitigated trial.</p>
                </section>

                <section id="section-4" className={styles.reviewSection}>
                  <h2>4. Earning Your Wings: Maximizing Miles on Business Spend</h2>
                  <p>When it comes to earning miles, the Delta Reserve Business card has a clear but narrow focus. It’s built to reward loyalty above all else. (<a href={reviewDataNew.officialBenefitsCreditsLink} target="_blank" rel="noopener noreferrer sponsored">Source: American Express</a>)</p>
                   <ul className={styles.featureList}>
                      <li><strong>3X Miles</strong> per dollar on eligible purchases made directly with Delta.</li>
                      <li><strong>1.5X Miles</strong> per dollar on eligible transit, U.S. shipping, and at U.S. office supply stores. This rate also applies to all other purchases after you spend $150,000 in a calendar year.</li>
                      <li><strong>1X Mile</strong> per dollar on all other purchases.</li>
                  </ul>
                  <p>Let’s be direct: this is not an earning powerhouse compared to its competitors. The card signals that its primary value doesn’t come from racking up miles on every transaction. Instead, the value is unlocked by actively using its suite of premium benefits.</p>
                </section>

                <section id="section-5" className={styles.reviewSection}>
                    <h2>5. The Medallion Fast Track: Your Shortcut to Elite Status</h2>
                    <p>For the die-hard Delta loyalist, this is the card’s superpower. It offers a direct pathway to convert your everyday business spending into coveted Medallion elite status through a potent, two-pronged system.</p>
                     <ul className={styles.featureList}>
                        <li><strong>MQD Headstart:</strong> As a cardholder, you automatically get a **$2,500 Medallion Qualification Dollar (MQD)** deposit into your SkyMiles account each year. (<a href={reviewDataNew.officialMedallionProgramLink} target="_blank" rel="noopener noreferrer">Source: Delta Air Lines</a>). This single-handedly gets you halfway to Silver Medallion status.</li>
                        <li><strong>MQD Boost:</strong> You earn **$1 MQD for every $10 you spend** on the card. This creates a clear, predictable path to status. A large inventory purchase is no longer just a budget item; it’s a measurable step toward complimentary seat upgrades.</li>
                    </ul>
                </section>

                <section id="section-6" className={styles.reviewSection}>
                    <h2>6. The Crown Jewel: Unlocking the Companion Certificate</h2>
                    <p>Each year you renew your card, you receive what is arguably its single most valuable benefit: the Annual Companion Certificate. What makes the Reserve’s version the crown jewel? It’s valid for one round-trip companion flight in **First Class, Delta Comfort+®, or Main Cabin**. (<a href={reviewDataNew.officialCompanionCertLink} target="_blank" rel="noopener noreferrer">Source: Delta Air Lines</a>). You buy your ticket, and your companion flies for just the cost of taxes and fees (capped at $80 domestically).</p>
                    <p>When used strategically, this one perk can justify the entire annual fee. A last-minute, cross-country First Class ticket can easily top $1,500. Using the certificate in this scenario would save you that entire amount, resulting in a net value of over $850 after accounting for the annual fee. It’s the card’s ultimate high-impact win. Just be aware it's only valid for lower-priced fare classes (L, U, T, X, and V), which can sell out quickly.</p>
                </section>

                <section id="section-7" className={styles.reviewSection}>
                    <h2>7. Your Airport Oasis: Sky Club & Centurion Lounge Access</h2>
                    <p>One of the most tangible benefits of the Reserve Business card is the sanctuary it provides from chaotic airport terminals. Here are the current access rules:</p>
                    <ul className={styles.featureList}>
                        <li><strong>Delta Sky Club:</strong> You receive 15 visits per year to Delta Sky Clubs when flying Delta. You also get four one-time guest passes annually. Want unlimited access? You can remove the 15-visit cap by spending $75,000 on the card in a calendar year. (<a href={reviewDataNew.officialSkyClubAccessLink} target="_blank" rel="noopener noreferrer">Source: Delta Air Lines</a>).</li>
                        <li><strong>The Centurion® Lounge & Escape Lounges:</strong> You also get complimentary access to the exclusive Amex Centurion Lounge network and Escape Lounges when flying on a Delta ticket purchased with your card.</li>
                    </ul>
                    <p>The 15-visit cap is perfectly calibrated for the executive who travels once or twice a month, helping to address the common issue of lounge overcrowding.</p>
                </section>

                <section id="section-8" className={styles.reviewSection}>
                    <h2>8. From Curb to Cabin: Perks That Smooth Your Journey</h2>
                    <p>The Reserve card is packed with smaller perks designed to sand down the rough edges of travel.</p>
                    <ul className={styles.featureList}>
                        <li><strong>First Checked Bag Free:</strong> For you and up to eight others on your reservation, saving up to $280 for a group of four on a single round trip. (<a href={reviewDataNew.officialBenefitsCreditsLink} target="_blank" rel="noopener noreferrer sponsored">Source: American Express</a>)</li>
                        <li><strong>Zone 5 Priority Boarding:</strong> Get on the plane early and secure that coveted overhead bin space.</li>
                        <li><strong>TSA PreCheck® / Global Entry Credit:</strong> A statement credit to cover the application fee. (<a href={reviewDataNew.officialGlobalEntryTSAPreCheckLink} target="_blank" rel="noopener noreferrer sponsored">Source: American Express</a>)</li>
                        <li><strong>Complimentary Upgrade Priority:</strong> A crucial tie-breaker, putting you ahead of other Medallion members in the same status tier.</li>
                        <li><strong>Hertz President's Circle® Status:</strong> Enjoy top-tier elite status with Hertz for guaranteed upgrades.</li>
                    </ul>
                </section>

                 <section id="section-9" className={styles.reviewSection}>
                    <h2>9. The $610 Question: Maximizing Statement Credits</h2>
                    <p>The Reserve Business card uses a "coupon book" of benefits that can dramatically offset the annual fee. These require enrollment and specific spending. (<a href={reviewDataNew.officialBenefitsCreditsLink} target="_blank" rel="noopener noreferrer sponsored">Source: American Express</a>)</p>
                    <ul className={styles.featureList}>
                        <li><strong>$250 Delta Stays Credit:</strong> For prepaid hotels or vacation rentals booked via the Delta Stays portal.</li>
                        <li><strong>$240 Resy Credit:</strong> Delivered as a $20 monthly credit for purchases at U.S. Resy restaurants.</li>
                        <li><strong>$120 Rideshare Credit:</strong> Delivered as a $10 monthly credit for U.S. rideshare purchases (Uber, Lyft, etc.).</li>
                    </ul>
                     <p>The total potential value is **$610**. For a business owner whose spending naturally aligns with these services, the credits make the annual fee almost a non-issue. For others, it’s a use-it-or-lose-it system.</p>
                </section>

                {/* --- MID-REVIEW CTA --- */}
                <section className={styles.midArticleCta}>
                    <h3>{reviewDataNew.cardName}</h3>
                    <a href={reviewDataNew.applyLink} target="_blank" rel="noopener noreferrer sponsored" className={styles.applyNowButton}>
                        Apply Now on Amex's Site
                    </a>
                    <span className={styles.ctaDisclaimer}>Terms and conditions apply.</span>
                </section>

                <section id="section-10" className={styles.reviewSection}>
                    <h2>10. A Year in the Life: A Real-World Value Example</h2>
                    <p>Let's make this tangible. Meet Taylor, a marketing consultant based in Atlanta and a loyal Delta flyer.</p>
                    <h3>Annual Spend: $95,000</h3>
                    <DraggableTableWrapper>
                        <div className={styles.tableContainer}>
                            <table className={`${styles.statsTable}`}>
                                <thead>
                                    <tr>
                                        <th>Benefit</th>
                                        <th>Calculation</th>
                                        <th>Annual Value</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr><td>Miles Earned</td><td>162,500 SkyMiles earned. At 1.2 cents/mile.</td><td>~$1,950</td></tr>
                                    <tr><td>MQD Headstart & Boost</td><td>$2,500 Headstart + 9,500 from spend.</td><td>Achieves Gold Medallion Status</td></tr>
                                    <tr><td>Companion Certificate</td><td>Used for a First Class flight (ATL to LAX).</td><td>~$1,200</td></tr>
                                    <tr><td>Statement Credits</td><td>Assumes full use of all credits.</td><td>$610</td></tr>
                                    <tr><td>Lounge Access</td><td>12 visits valued at $50 each.</td><td>$600</td></tr>
                                    <tr><td>Free Checked Bags</td><td>6 round trips with one checked bag.</td><td>$420</td></tr>
                                    <tr><td><strong>Total Gross Value</strong></td><td></td><td><strong>$4,780</strong></td></tr>
                                    <tr><td>Annual Fee</td><td></td><td>-$650</td></tr>
                                    <tr><td><strong>Net Annual Value</strong></td><td></td><td><strong>$4,130</strong></td></tr>
                                </tbody>
                            </table>
                        </div>
                    </DraggableTableWrapper>
                </section>

                <section id="section-11" className={styles.reviewSection}>
                    <h2>11. The Price of Admission: Full Rates &amp; Fees</h2>
                    <p>Beyond the annual fee, here’s the full cost structure.</p>
                    <DraggableTableWrapper>
                        <div className={styles.tableContainer}>
                            <table className={`${styles.statsTable} ${styles.ratesFeesTable}`}>
                                <thead>
                                    <tr>
                                        <th>Fee/Rate</th>
                                        <th>Amount</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr><td>Annual Fee</td><td>${reviewDataNew.annualFee} (not waived the first year)</td></tr>
                                    <tr><td>Purchase APR</td><td>{reviewDataNew.aprRange}</td></tr>
                                    <tr><td>Foreign Transaction Fee</td><td>None</td></tr>
                                    <tr><td>Late/Returned Payment Fees</td><td>Up to $40</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </DraggableTableWrapper>
                </section>

                <section id="section-12" className={styles.reviewSection}>
                  <h2>12. Clash of the Titans: Reserve Business vs. The Competition</h2>
                  <DraggableTableWrapper>
                    <div className={styles.tableContainer}>
                      <table className={`${styles.statsTable} ${styles.comparisonTable}`}>
                        <thead>
                          <tr>
                            <th>Feature</th>
                            <th>Delta Reserve Business</th>
                            <th>The Business Platinum Card®</th>
                            <th>Chase Ink Business Preferred®</th>
                            <th>Capital One Venture X Business</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr><td>Annual Fee</td><td>$650</td><td>$695</td><td>$95</td><td>$395</td></tr>
                          <tr><td>Best For</td><td>The Delta Loyalist</td><td>The Luxury Traveler</td><td>The Pragmatic Maximizer</td><td>The Simplicity Seeker</td></tr>
                          <tr><td>Lounge Access</td><td>Delta Sky Club, Centurion</td><td>Amex Global Lounge Collection (Widest Access)</td><td>None</td><td>Priority Pass™, Capital One</td></tr>
                          <tr><td>Key Perk</td><td>Annual First Class Companion Cert.</td><td>&gt;$1,000 in various statement credits</td><td>3X on key business categories</td><td>$300 travel credit + 10k miles</td></tr>
                          <tr><td>Status Boost</td><td>Direct path to Delta Status</td><td>Hilton & Marriott Gold Status</td><td>None</td><td>None</td></tr>
                        </tbody>
                      </table>
                    </div>
                  </DraggableTableWrapper>
                  <p>This table shows the decision isn't about which card is "best," but which ecosystem fits your business.</p>
                </section>

                <section id="section-13" className={styles.reviewSection}>
                    <h2>13. Pros & Cons: The Good, The Bad & The Complicated</h2>
                    <div className={styles.prosConsContainer}>
                        <div className={styles.prosBox}>
                            <h4>Pros</h4>
                            <ul className={styles.featureList}>
                                <li><strong>Unmatched Path to Delta Status:</strong> The MQD Headstart and Boost are game-changers.</li>
                                <li><strong>High-Value Companion Certificate:</strong> The First Class redemption can justify the annual fee.</li>
                                <li><strong>Premium Lounge Access:</strong> Sky Club and Centurion access is a top-tier benefit.</li>
                                <li><strong>Credits Offset Fee:</strong> The $610 in available credits makes the $650 fee palatable.</li>
                            </ul>
                        </div>
                        <div className={styles.consBox}>
                            <h4>Cons</h4>
                            <ul className={styles.featureList}>
                                <li><strong>Steep Annual Fee:</strong> $650 is a significant upfront cost.</li>
                                <li><strong>Weak Everyday Earning:</strong> Outside of Delta purchases, the rewards rates are uncompetitive.</li>
                                <li><strong>Restrictive "Coupon Book":</strong> Credits require spending with specific partners.</li>
                                <li><strong>Limited Lounge Visits:</strong> The 15-visit cap is a drawback for hyper-frequent travelers (without the spend waiver).</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section id="section-14" className={styles.reviewSection}>
                  <h2>14. Voices from the Gate: Real User Testimonials</h2>
                    <div className={styles.testimonialContainer}>
                      <blockquote className={styles.testimonialQuote}>
                          <p>&quot;My main goal is leveraging my $200k in business spending into the highest Delta status possible. For that, this card is the only tool for the job.&quot;</p>
                          <footer>– Michael, a High-Spending Consultant</footer>
                      </blockquote>
                       <blockquote className={styles.testimonialQuote}>
                          <p>&quot;We use the Companion Certificate for a First Class trip every year and easily max out the monthly Resy and rideshare credits. For our lifestyle, it’s a great card.&quot;</p>
                          <footer>– Jessica, a Family-Oriented Entrepreneur</footer>
                      </blockquote>
                       <blockquote className={styles.testimonialQuote}>
                          <p>&quot;As someone who had never been in an airport lounge, the access this card provides is a total game-changer. Having a quiet space to work between flights is invaluable.&quot;</p>
                          <footer>– Ben, the Newbie to Lounge Life</footer>
                      </blockquote>
                  </div>
                </section>

                <section id="section-15" className={styles.reviewSection}>
                    <h2>15. Navigating the Fine Print: What You Can't Ignore</h2>
                    <ul className={styles.featureList}>
                        <li><strong>Companion Certificate Fare Classes:</strong> It's restricted to L, U, T, X, and V fares. Book early.</li>
                        <li><strong>Credit Enrollment Required:</strong> You must manually enroll in the Resy and Rideshare benefits.</li>
                        <li><strong>Lounge Access Nuances:</strong> Sky Club access requires a same-day Delta flight. Centurion Lounge access requires a same-day Delta flight paid for with your Reserve card.</li>
                        <li><strong>Employee Cards:</strong> They come with a fee, and premium perks like lounge access do not extend to employee cardholders.</li>
                    </ul>
                </section>

                <section id="section-16" className={styles.reviewSection}>
                    <h2>16. Beyond the Traveler: Business Tools & Protections</h2>
                    <p>The card isn’t just about travel. It also includes a suite of protections and tools:</p>
                    <ul className={styles.featureList}>
                        <li><strong>Cell Phone Protection:</strong> Pay your monthly wireless bill with the card and get up to $800 per claim for theft or damage (two claims per year, $50 deductible). (<a href={reviewDataNew.officialCellPhoneProtectionLink} target="_blank" rel="noopener noreferrer sponsored">Source: American Express</a>)</li>
                        <li><strong>Purchase Protection & Extended Warranty:</strong> Covers new purchases against damage or theft.</li>
                        <li><strong>Trip Cancellation & Delay Insurance:</strong> Provides reimbursement for covered reasons.</li>
                        <li><strong>Expense Management:</strong> Integrates with QuickBooks® and offers employee cards with spending limits.</li>
                    </ul>
                </section>

                <section id="section-17" className={styles.reviewSection}>
                  <h2>17. Final Verdict: Is the Delta Reserve Business Card Worth $650?</h2>
                  <p>This card’s worth isn’t a simple math problem. It’s a strategic investment in your travel experience, tailor-made for a specific type of business owner.</p>
                  <h4>This card IS worth its $650 fee if:</h4>
                  <ul className={styles.featureList}>
                    <li>Your business life revolves around Delta Air Lines.</li>
                    <li>You will strategically use the Companion Certificate for a high-value flight that recoups most of the annual fee.</li>
                    <li>You are serious about achieving Delta Medallion status and will channel significant spending through the card to do so.</li>
                    <li>Your spending habits naturally align with the card's "coupon book" of credits.</li>
                  </ul>
                  <h4>This card is NOT worth its $650 fee if:</h4>
                  <div className={styles.prosConsContainer}>
                      <div className={styles.consBox}>
                          <ul className={styles.featureList}>
                              <li>You are airline-agnostic and always book the cheapest flight.</li>
                              <li>Your goal is earning the maximum number of flexible points on all business expenses.</li>
                              <li>You know you won't consistently use the monthly and annual statement credits.</li>
                              <li>You travel more than 30 times a year and the 15-visit Sky Club cap is a dealbreaker (and the $75k spend is out of reach).</li>
                          </ul>
                      </div>
                  </div>
                </section>

                <section id="section-18" className={`${styles.reviewSection} ${styles.faqSection}`}>
                  <h2>18. Your Top Questions, Answered (FAQs)</h2>
                  <div className={styles.faqContainer}>
                      {structuredDataOptimized['@graph'].find(item => item['@type'] === 'FAQPage').mainEntity.map((faq, index) => (
                          <details key={index} className={styles.faqItem} name={`faq-${index + 1}`}>
                              <summary className={styles.faqQuestion}>{`${index + 1}. ${faq.name}`}</summary>
                              <div className={styles.faqAnswer}>
                                <p>{faq.acceptedAnswer.text}</p>
                              </div>
                          </details>
                      ))}
                  </div>
                </section>

                <section id="section-19" className={styles.reviewSection}>
                  <h2>19. Pre-Flight Checklist: Your Final Takeaway</h2>
                  <p>The {reviewDataNew.cardName} is the definitive choice for the entrepreneur who sees travel not as a commodity, but as an integral—and even enjoyable—part of their business. Before you apply, do this quick gut-check:</p>
                   <ul className={styles.featureList}>
                     <li>Look at your last year of travel. Was 80% or more on Delta?</li>
                     <li>Open the Resy and Uber/Lyft apps. Are they already part of your life?</li>
                     <li>Think of one specific trip for next year. Could the Companion Certificate save you more than $650?</li>
                  </ul>
                  <p>If you answered a confident "yes," then this card isn't a cost—it's a comprehensive upgrade to your entire business travel life.</p>
                </section>

                <section id="section-eat" className={`${styles.reviewSection} ${styles.eatSection}`}>
                    <h2 dangerouslySetInnerHTML={{ __html: `Our Commitment to E-A-T: Expertise, Authority &amp; Trustworthiness`}}></h2>
                    <p>At <strong>{siteName}</strong>, we are committed to providing content that exemplifies Expertise, Authoritativeness, and Trustworthiness (E-A-T). This review of the <strong>{reviewDataNew.cardName}</strong> has been meticulously researched and crafted. We've analyzed the card's features, benefits, rewards structure, and fees, referencing official issuer documentation from American Express and Delta Air Lines, and considering real-world user experiences. Our goal is to present a balanced, comprehensive, and reliable guide to help you make an informed decision. All information is current as of <strong>{new Date(updateDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</strong>, but we always recommend verifying details directly with the issuer as terms can change.</p>
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
            <Image src={reviewDataNew.imageUrl} alt={`${reviewDataNew.cardName} small image`} width={60} height={38} className={styles.stickyFooterCardImage} />
            <div className={styles.stickyFooterText}>
              <span className={styles.stickyFooterCardName}>{reviewDataNew.cardName}</span>
              <span className={styles.stickyFooterRating}>{siteName} Rating: {reviewDataNew.ratingValue.toFixed(1)}/10</span>
            </div>
            <div className={styles.stickyFooterButtons}>
                <a
                    href={reviewDataNew.applyLink}
                    className={`${styles.stickyFooterBtn} ${styles.stickyFooterBtnApply}`}
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                >
                    Apply Now
                </a>
                <a
                    href={reviewDataNew.ratesLink}
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

export default DeltaReserveBusinessReviewPage;