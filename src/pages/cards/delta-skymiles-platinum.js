/* ------------------------------------------------------------------
    File:  pages/reviews/delta-platinum-amex-review.js
    Route: https://www.travelcardinsider.com/reviews/delta-platinum-amex-review
------------------------------------------------------------------- */

import React, { useState, useEffect, useCallback, useRef } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import styles from '../../styles/ReviewPage.module.css';

// --- Component Imports ---
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
const siteUrl = 'https://www.travelcardinsider.com'; // UPDATE with your actual site URL
const pagePath = '/reviews/delta-platinum-amex-review';
const pageUrlFull = `${siteUrl}${pagePath}`;
const publishDate = '2025-07-10'; // UPDATE: Current date or actual publish date
const updateDate = '2025-07-10'; // UPDATE: Current date or actual update date

const reviewData = {
  cardName: 'Delta SkyMiles® Platinum American Express Card',
  title: 'Delta Platinum Amex Review (2025): Ultimate Delta Loyalist Card?',
  description: 'Deep dive into the Delta SkyMiles® Platinum Amex card. Explore the Companion Certificate, MQD Headstart, TakeOff 15, statement credits, and the $350 annual fee. Is this the best card for Delta flyers?',
  keywords: 'Delta Platinum Amex review, Delta SkyMiles Platinum, Amex Delta Platinum, companion certificate, MQD headstart, Delta Medallion status, airline credit card review 2025',
  author: {
      name: 'Dilan Madushanka', // UPDATE
      title: 'Founder & Lead Editor', // UPDATE
      imageUrl: '/WhatsApp Image 2025-05-12 at 4.09.58 PM.jpeg', // UPDATE
      imageWidth: 40,
      imageHeight: 40,
      tooltipImageUrl: '/WhatsApp Image 2025-05-12 at 4.09.58 PM.jpeg', // UPDATE
      tooltipImageWidth: 60,
      tooltipImageHeight: 60,
      expertise: [ // UPDATE
          'Airline Co-branded Cards',
          'Delta SkyMiles Program',
          'Credit Card Rewards Optimization',
          'Travel Companion Perks',
          'American Express Cards'
      ],
      bioSnippet: 'Dilan Madushanka is the founder and lead editor of Travelcardinsider, dedicated to demystifying credit cards and uncovering their real-world value for smarter travel and rewards.', // UPDATE
      fullBioLink: '/author/dilan-madushanka', // UPDATE
      publishedStats: 'X+ in-depth card reviews per week', // UPDATE
      testedStats: 'Over Y+ credit card benefits across major brands', // UPDATE
      socialLinks: { // UPDATE
          linkedin: 'https://www.linkedin.com/in/dilan-madushanka-b65293365',
          twitter: 'https://x.com/team_dilan',
          email: 'team@travelcardinsider.com'
      }
  },
  siteName: siteName,
  imageUrl: '/NUS000000269_480x304_straight_withname.avif', // UPDATE with actual Delta Platinum card image URL
  imageWidth: 1290,
  imageHeight: 812,
  ratingValue: 8.3, // UPDATE AS NEEDED (e.g. 4.35/5 * 2)
  ratingCount: 310, // UPDATE AS NEEDED
  reviewBody: 'Our editors evaluate the Delta SkyMiles® Platinum American Express Card based on its core airline loyalty benefits, including the annual Companion Certificate, MQD Headstart for elite status, TakeOff 15 discount, statement credits, rewards structure, the annual fee, and its overall value for frequent Delta Air Lines travelers.',
  aprRange: '20.24% to 29.24% variable', // From your text
  annualFee: 350,
  applyLink: 'https://www.americanexpress.com/us/credit-cards/card/delta-skymiles-platinum-american-express-card/', // UPDATE THIS with your affiliate link
  ratesLink: 'https://www.americanexpress.com/us/credit-cards/card-application/apply/prospect/terms/delta-skymiles-platinum-american-express-card/25330-10-0#FeeTable',
  // --- Official Citation Links ---
  officialCardPageLink: 'https://www.americanexpress.com/us/credit-cards/card/delta-skymiles-platinum-american-express-card/',
  companionCertTermsLink: 'https://www.delta.com/us/en/skymiles/airline-credit-cards/companion-certificate',
  medallionProgramLink: 'https://www.delta.com/us/en/skymiles/medallion-program/how-to-qualify',
  takeOff15Link: 'https://www.delta.com/us/en/skymiles/airline-credit-cards/takeoff-15',
  rewardsStructureLink: 'https://www.americanexpress.com/us/credit-cards/card/delta-skymiles-platinum-american-express-card/benefits',
  benefitsGuideLink: 'https://www.americanexpress.com/us/credit-cards/card/delta-skymiles-platinum-american-express-card/benefits',
  baggageInfoLink: 'https://www.delta.com/us/en/baggage/overview',
  globalEntryTSALink: 'https://global.americanexpress.com/card-benefits/detail/global-entry-or-tsa-precheck-fee-credit/delta-platinum',
  skyClubAccessLink: 'https://www.delta.com/us/en/delta-sky-club/access',
  businessCardLink: 'https://www.americanexpress.com/us/credit-cards/business/business-credit-cards/delta-skymiles-platinum-business-american-express-card/',
  sku: 'AMEX-DELTA-PLAT-TCI-2025',
  mpn: 'AMEXDELTAPLAT',
  h1Content: "Delta Platinum Amex: A Deep Dive into the Ultimate Delta Loyalist's Card",
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
          name: 'When do I get my first Companion Certificate?',
          acceptedAnswer: { '@type': 'Answer', text: "You receive your first Companion Certificate after your first card anniversary, upon renewal. It is not available in the first year." }
        },
        {
          '@type': 'Question',
          name: 'Does the Delta Platinum Amex get me into the Sky Club?',
          acceptedAnswer: { '@type': 'Answer', text: "No. The card does not offer complimentary Delta Sky Club access. This perk is reserved for the Delta SkyMiles® Reserve Card." }
        },
        {
          '@type': 'Question',
          name: 'Is the $350 annual fee worth it?',
          acceptedAnswer: { '@type': 'Answer', text: "It can be, but only if you are a frequent Delta flyer who can maximize the Companion Certificate, statement credits, and free checked bag benefit." }
        },
        {
          '@type': 'Question',
          name: 'How much are Delta SkyMiles worth?',
          acceptedAnswer: { '@type': 'Answer', text: "Valuations are typically 1.2 to 1.3 cents apiece. However, the TakeOff 15 benefit effectively increases their value when you redeem them for Delta flights." }
        },
        {
          '@type': 'Question',
          name: 'Can I get complimentary upgrades with this card?',
          acceptedAnswer: { '@type': 'Answer', text: "You are added to the complimentary upgrade list, but your priority is below all Medallion members and Reserve cardholders, so your chances are low." }
        }
      ],
    },
    {
      '@type': 'Organization',
      '@id': `${siteUrl}#website`,
      name: siteName,
      url: siteUrl,
      logo: { '@type': 'ImageObject', url: `${siteUrl}/images/logo/your-logo-schema.png` }, // UPDATE THIS
      sameAs: [ // UPDATE THESE
        "https://www.facebook.com/YourTravelCardInsiderFacebookPage",
        "https://twitter.com/YourTravelCardInsiderTwitterHandle",
      ],
    },
  ],
};

const ratingCriteria = [
    'Value of Annual Companion Certificate',
    'Effectiveness of MQD Headstart & Boost for Status',
    'Impact of TakeOff 15 Discount',
    'Value of Statement Credits (Delta Stays, Rideshare, Resy)',
    'Rewards Earning Rates (Delta, Hotels, Restaurants, Supermarkets)',
    'Welcome Offer Attractiveness & Terms',
    'Annual Fee ($350) vs. Overall Benefits',
    'Day-of-Travel Perks (Free Checked Bags, Priority Boarding)',
    'Travel & Purchase Protections Suite',
    'Lack of Airport Lounge Access',
    'Overall Value Proposition for Delta Loyalists',
];

const tocSections = [
    { id: 'section-intro', title: 'Introduction: The Ultimate Card for the Delta Devotee?' },
    { id: 'section-snapshot', title: 'Card Snapshot & "Best For" Tagline' },
    { id: 'section-welcome-offer', title: 'The Current Welcome Offer: A 90,000-Mile Head Start' },
    { id: 'section-companion-cert', title: 'The Crown Jewel: Unlocking the Annual Companion Certificate' },
    { id: 'section-status-boost', title: 'The Status Chaser’s Secret Weapon: MQD Headstart & Boost' },
    { id: 'section-takeoff-15', title: 'TakeOff 15: A Permanent 15% Discount on Award Flights' },
    { id: 'section-earning-miles', title: 'Earning SkyMiles: A Deep-Dive into the Rewards Structure' },
    { id: 'section-statement-credits', title: 'Statement-Credit Strategy: Offsetting the Annual Fee' },
    { id: 'section-real-world-value', title: 'Real-World Value: A Calculated Example' },
    { id: 'section-day-of-travel', title: 'Elevating Your Journey: Free Checked Bags to Priority Boarding' },
    { id: 'section-protections', title: 'Essential Travel & Purchase Protections' },
    { id: 'section-no-lounge', title: 'The Missing Piece: What About Airport Lounge Access?' },
    { id: 'section-user-profile', title: 'Detailed User Profiling: Who Should Get This Card?' },
    { id: 'section-pros-cons', title: 'A Balanced View: The Definitive Pros and Cons' },
    { id: 'section-comparison', title: 'How It Stacks Up: Competitive Card Comparison' },
    { id: 'section-testimonials', title: 'Voices from the Real World: User Testimonials' },
    { id: 'section-rates-fees', title: 'The Full Spectrum of Rates & Fees' },
    { id: 'section-faqs', title: 'Card-Specific Frequently Asked Questions (FAQs)' },
    { id: 'section-business-version', title: 'The Business Traveler\'s Angle' },
    { id: 'section-verdict', title: 'Final Verdict: Is the Delta Platinum Your Ticket to More?' },
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
function DeltaPlatinumAmexReviewPage() {
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
    welcomeOffer: "Earn 90,000 Bonus Miles after you spend $4,000 in eligible purchases on your new Card in your first 6 months.",
    annualFee: `$${reviewData.annualFee}`,
    topEarning: "3X on Delta & hotels; 2X on restaurants & U.S. supermarkets.",
    keyCredits: "Up to $150 Delta Stays, $120 Rideshare, $120 Resy credits annually.",
    travelPerk: "Annual Companion Certificate, MQD Headstart, and TakeOff 15.",
    bestFor: "The Delta-loyal duo or family traveler who values a shortcut to Medallion Status and can consistently leverage the annual Companion Certificate."
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
        <link rel="preload" as="image" href={reviewData.author.tooltipImageUrl} />
        <meta name="geo.region" content="US" />
        <meta name="geo.placename" content="United States" />
        <meta name="language" content="en-US" />
        <meta name="distribution" content="US" />
        {['/fonts/inter-v18-latin-regular.woff2', '/fonts/inter-v18-latin-600.woff2', '/fonts/inter-v18-latin-700.woff2', '/fonts/Roboto_Condensed-Regular.ttf', '/fonts/Roboto_Condensed-Bold.ttf'].map((f) => (
          <link key={f} rel="preload" href={f} as="font" type={f.endsWith('woff2') ? 'font/woff2' : 'font/ttf'} crossOrigin="anonymous" />
        ))}
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
                <h1 className={styles.heroTitle}>{reviewData.h1Content}</h1>
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
                    <Image src={reviewData.author.imageUrl} alt={`${reviewData.author.name} headshot`} width={reviewData.author.imageWidth} height={reviewData.author.imageHeight} className={styles.authorImageSmall} priority />
                    <div className={styles.authorInfoBlock}>
                        <div className={styles.authorNameLine}><span className={styles.authorPrefix}>By</span> <span className={styles.authorName}>{reviewData.author.name}</span></div>
                        <span className={styles.authorTitle}>{reviewData.author.title}</span>
                        {updateDate && (<time dateTime={updateDate} className={styles.authorLastEdited}>Last updated: {new Date(updateDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</time>)}
                        {reviewData.author.socialLinks && (
                            <div className={styles.authorSocialLinks}>
                                {reviewData.author.socialLinks.linkedin && (<a href={reviewData.author.socialLinks.linkedin} target="_blank" rel="noopener noreferrer me" aria-label={`${reviewData.author.name} on LinkedIn`} className={styles.socialIconLink}><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg></a>)}
                                {reviewData.author.socialLinks.twitter && (<a href={reviewData.author.socialLinks.twitter} target="_blank" rel="noopener noreferrer me" aria-label={`${reviewData.author.name} on Twitter`} className={styles.socialIconLink}><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-.422.724-.665 1.56-.665 2.452 0 1.697.864 3.198 2.18 4.078-.8-.025-1.555-.247-2.227-.616v.054c0 2.37 1.683 4.333 3.91 4.78-.426.116-.874.174-1.337.174-.31 0-.611-.03-.904-.085.622 1.936 2.421 3.338 4.553 3.377-1.672 1.309-3.781 2.088-6.072 2.088-.394 0-.784-.023-1.169-.069 2.16 1.389 4.723 2.202 7.482 2.202 8.979 0 13.897-7.446 13.897-13.898 0-.21 0-.42-.015-.63.953-.689 1.778-1.56 2.433-2.525z"/></svg></a>)}
                                {reviewData.author.socialLinks.email && (<a href={`mailto:${reviewData.author.socialLinks.email}`} aria-label={`Email ${reviewData.author.name}`} className={styles.socialIconLink}><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"/></svg></a>)}
                            </div>
                        )}
                    </div>
                    {showAuthorBioTooltip && reviewData.author.bioSnippet && (
                        <div className={styles.authorTooltip} ref={authorTooltipRef} role="tooltip" onMouseEnter={handleAuthorClearTimeout} onMouseLeave={handleAuthorMouseLeave} onFocus={handleAuthorMouseEnter} onBlur={handleAuthorMouseLeave}>
                             <div className={styles.authorTooltipHeader}>
                                 <Image src={reviewData.author.tooltipImageUrl} alt={`${reviewData.author.name} large headshot`} width={reviewData.author.tooltipImageWidth} height={reviewData.author.tooltipImageHeight} className={styles.authorTooltipImage} />
                                 <div className={styles.authorTooltipInfo}><span className={styles.authorTooltipName}>{reviewData.author.name}</span><span className={styles.authorTooltipTitle}>{reviewData.author.title}</span></div>
                               </div>
                               {reviewData.author.expertise && reviewData.author.expertise.length > 0 && (<div className={styles.authorTooltipExpertise}><strong>Expertise</strong><ul>{reviewData.author.expertise.map(area => <li key={area}>{area}</li>)}</ul></div>)}
                               <p className={styles.authorTooltipBioSnippet}>{reviewData.author.bioSnippet}</p>
                               {reviewData.author.fullBioLink && (<Link href={reviewData.author.fullBioLink} legacyBehavior><a className={styles.authorTooltipBioLink}>See full bio</a></Link>)}
                               {reviewData.author.socialLinks && (<div className={styles.authorTooltipSocials}>{reviewData.author.socialLinks.linkedin && (<a href={reviewData.author.socialLinks.linkedin} target="_blank" rel="noopener noreferrer me" aria-label={`${reviewData.author.name} on LinkedIn`} className={styles.socialIconLink}><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg></a>)}{reviewData.author.socialLinks.twitter && (<a href={reviewData.author.socialLinks.twitter} target="_blank" rel="noopener noreferrer me" aria-label={`${reviewData.author.name} on Twitter`} className={styles.socialIconLink}><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-.422.724-.665 1.56-.665 2.452 0 1.697.864 3.198 2.18 4.078-.8-.025-1.555-.247-2.227-.616v.054c0 2.37 1.683 4.333 3.91 4.78-.426.116-.874.174-1.337.174-.31 0-.611-.03-.904-.085.622 1.936 2.421 3.338 4.553 3.377-1.672 1.309-3.781 2.088-6.072 2.088-.394 0-.784-.023-1.169-.069 2.16 1.389 4.723 2.202 7.482 2.202 8.979 0 13.897-7.446 13.897-13.898 0-.21 0-.42-.015-.63.953-.689 1.778-1.56 2.433-2.525z"/></svg></a>)}{reviewData.author.socialLinks.email && (<a href={`mailto:${reviewData.author.socialLinks.email}`} aria-label={`Email ${reviewData.author.name}`} className={styles.socialIconLink}><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"/></svg></a>)}</div>)}
                        </div>
                    )}
                </div>
                <p className={styles.heroSubtitle}>
                  Is this the ultimate card for the Delta devotee? We'll navigate every aspect of the Delta Platinum card—from its celebrated perks to its glaring omissions—to help you decide if it deserves a place in your wallet.
                </p>
                <div className={styles.heroCtaContainer}>
                  <div>
                    <a href={reviewData.applyLink} target="_blank" rel="noopener noreferrer sponsored" className={`${styles.applyNowButton} ${styles.heroApplyButton}`}>Apply Securely Now</a>
                    <span className={styles.heroApplyButtonDisclaimer}>on American Express&apos;s official site</span>
                  </div>
                  <Link href="#section-snapshot" legacyBehavior><a className={styles.heroSecondaryLink}>View Key Features</a></Link>
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
                    <i>{reviewData.cardName}: {reviewData.description}</i>
                 </div>
              </div>
            </section>

            <div className={styles.reviewContainer}>
              <article>
                <header className={styles.reviewHeader}>
                    <div className={styles.summaryBox}>
                        <h2 className={styles.summaryBoxTitle}>{reviewData.cardName}: Key Insights</h2>
                        <div className={styles.summaryGrid}>
                            <div className={styles.summaryItem}><span className={styles.summaryIcon}><IconGift /></span> <span className={styles.summaryLabel}>Welcome Offer:</span> <span className={styles.summaryValue}>{summaryBoxData.welcomeOffer}</span></div>
                            <div className={styles.summaryItem}><span className={styles.summaryIcon}><IconCheck /></span> <span className={styles.summaryLabel}>Annual Fee:</span> <span className={styles.summaryValue}>{summaryBoxData.annualFee}</span></div>
                            <div className={styles.summaryItem}><span className={styles.summaryIcon}><IconStar /></span> <span className={styles.summaryLabel}>Top Earning:</span> <span className={styles.summaryValue}>{summaryBoxData.topEarning}</span></div>
                            <div className={styles.summaryItem}><span className={styles.summaryIcon}><IconDollar /></span> <span className={styles.summaryLabel}>Key Credits:</span> <span className={styles.summaryValue}>{summaryBoxData.keyCredits}</span></div>
                            <div className={styles.summaryItem}><span className={styles.summaryIcon}><IconPlane /></span> <span className={styles.summaryLabel}>Travel Perk:</span> <span className={styles.summaryValue}>{summaryBoxData.travelPerk}</span></div>
                            <div className={styles.summaryItem} data-full-width="true"><span className={styles.summaryIcon}><IconPlus /></span> <span className={styles.summaryLabel}>Best For:</span> <span className={styles.summaryValue}>{summaryBoxData.bestFor}</span></div>
                        </div>
                        <div className={styles.summaryBoxActions}>
                            <a href={reviewData.ratesLink} className={styles.summaryRatesLink} target="_blank" rel="noopener noreferrer sponsored">See Card Rates & Fees</a>
                            <a href='/rewards-calculator' className={`${styles.heroRewardsCalculator} ${styles.summaryButton}`} target="_blank" rel="noopener noreferrer">Rewards Calculator</a>
                        </div>
                    </div>
                </header>

                <section id="section-intro" className={styles.reviewSection}>
                  <h2>Introduction: Is This the Ultimate Card for the Delta Devotee?</h2>
                  <p>The Delta SkyMiles® Platinum Amex straddles the middle ground between entry-level airline cards and ultra-premium options. Its $350 annual fee buys Delta-only perks—an annual Main Cabin Companion Certificate, fast-track Medallion status boosts, and 15 % off Delta award flights—rather than flexible, transferable points. For loyal Delta flyers who’ll use those benefits, it’s a smart co-pilot; for everyone else, more versatile or lounge-focused cards may fly farther.</p>
                </section>

               <div className={styles.contentImageWrapper}>
  <Image 
    src="/Adobe Express - file.png" 
    alt="Screenshot of the official American Express webpage for the Delta SkyMiles Platinum Card." 
    width={800} 
    height={500} 
    className={styles.contentImage} 
    loading="lazy" 
  />
  <p className={styles.caption}>
    The official American Express website provides the most current details on the Delta SkyMiles® Platinum Card's benefits and terms.
  </p>
</div>
                <section id="section-snapshot" className={styles.reviewSection}>
                    <h2>Card Snapshot &amp; &quot;Best For&quot; Tagline</h2>
                    <p><strong>Best For:</strong> {summaryBoxData.bestFor}</p>
                    <DraggableTableWrapper>
                        <div className={styles.tableContainer}>
                            <table className={`${styles.statsTable} ${styles.highlightTable}`}>
                                <tbody>
                                    <tr><td>Card Name:</td><td><strong>{reviewData.cardName}</strong></td></tr>
                                    <tr><td>Welcome Offer:</td><td>{summaryBoxData.welcomeOffer}</td></tr>
                                    <tr><td>Annual Fee:</td><td><strong>${reviewData.annualFee}</strong> (<a href={reviewData.ratesLink} target="_blank" rel="noopener noreferrer sponsored">Source: American Express</a>)</td></tr>
                                    <tr><td>Key Rewards:</td><td>{summaryBoxData.topEarning}</td></tr>
                                    <tr><td>Standout Perk:</td><td>Annual Main Cabin Companion Certificate upon renewal of your card.</td></tr>
                                    <tr><td>Credit Needed:</td><td>Good to Excellent.</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </DraggableTableWrapper>
                </section>
                
                <section id="section-welcome-offer" className={styles.reviewSection}>
                  <h2>The Current Welcome Offer: A 90,000-Mile Head Start</h2>
                  <p>For those considering this card, the journey begins with a compelling welcome offer. New cardmembers can earn 90,000 bonus miles after spending $4,000 on eligible purchases within the first six months of membership. This offer provides a substantial initial boost to your SkyMiles balance.</p>
                  <p>To put this bonus into perspective, leading points and miles valuation sites peg its worth quite high. The Points Guy estimates the 90,000-mile bonus is worth approximately $1,125, valuing each SkyMile at 1.25 cents. Other analyses place the value even higher at $1,170, or 1.3 cents per mile. This upfront value is significant because it effectively covers the card's ${reviewData.annualFee} annual fee for over three years. This generous cushion makes the first year of card membership a low-risk proposition, giving you ample time to explore the card's benefits and determine if it’s a good long-term fit before the annual fee becomes a true out-of-pocket cost.</p>
                </section>

                <section id="section-companion-cert" className={styles.reviewSection}>
                  <h2>The Crown Jewel: Unlocking the Annual Companion Certificate</h2>
                  <p>At the heart of the Delta Platinum Amex's value proposition lies its most celebrated and potentially lucrative perk: the annual Companion Certificate. This benefit is the primary reason many loyal Delta flyers choose and keep this card year after year.</p>
                  <p>Each year upon renewal (starting in your second year), you receive a certificate for a round-trip Main Cabin flight for a companion traveling with you on the same itinerary. The certificate is valid for flights within the 48 contiguous United States. For residents of Hawaii, Alaska, Puerto Rico, or the U.S. Virgin Islands, it can be used for travel originating from those locations to the contiguous U.S. As a significant enhancement, the certificate is also valid for travel to Mexico, the Caribbean, or Central America. <a href={reviewData.companionCertTermsLink} target="_blank" rel="noopener noreferrer sponsored" className={styles.inlineLink}>Source: Delta Air Lines</a></p>
                  <p>Of course, it's not entirely free. You are responsible for paying government-imposed taxes and fees on the companion's ticket, capped at $80 for domestic round-trips and up to $250 for round-trip international itineraries. Even with these fees, the potential savings are immense. Here's the secret: the certificate's value hinges entirely on the cash price of the flight you book. Using it for a last-minute flight from New York to Los Angeles during a peak travel week, which might cost $700, would save you over $600 after fees. This single use would more than double the value of the card's annual fee. For travelers who can consistently use this benefit for a moderately expensive flight each year, the Companion Certificate alone makes the ${reviewData.annualFee} annual fee a worthwhile investment.</p>
                </section>

                <section id="section-status-boost" className={styles.reviewSection}>
                    <h2>The Status Chaser’s Secret Weapon: MQD Headstart & Boost</h2>
                    <p>Beyond the Companion Certificate, the card's most strategic benefit is its ability to accelerate your journey toward coveted Delta Medallion elite status. For travelers who fly Delta regularly, Medallion status unlocks a world of perks, including complimentary upgrades, waived fees, and priority airport services. The Delta Platinum Amex offers two powerful tools to help you get there faster.</p>
                    <ul className={styles.featureList}>
                        <li><strong>MQD Headstart:</strong> Each year, cardholders automatically receive $2,500 Medallion Qualification Dollars (MQDs) deposited into their SkyMiles account. With Silver Medallion, the first rung of elite status, requiring $5,000 MQDs, this benefit instantly gets you halfway there without setting foot on a plane. <a href={reviewData.medallionProgramLink} target="_blank" rel="noopener noreferrer sponsored" className={styles.inlineLink}>Source: Delta Air Lines</a></li>
                        <li><strong>MQD Boost:</strong> For every $20 you spend on your card, you earn $1 MQD. This feature creates a compelling reason to use the card for significant spending. To earn the remaining 2,500 MQDs for Silver status, for instance, a cardholder would need to spend $50,000 on the card. For someone chasing status, the value of the Medallion perks could easily outweigh the extra cash back they might have earned elsewhere.</li>
                    </ul>
                    <p>Furthermore, even without Medallion status, holding the Delta Platinum Amex gets you on the Complimentary Upgrade list, though you will be prioritized after all Medallion Members and Delta SkyMiles® Reserve Card Members.</p>
                </section>

                <section id="section-takeoff-15" className={styles.reviewSection}>
                  <h2>TakeOff 15: A Permanent 15% Discount on Award Flights</h2>
                  <p>Let's be honest: Delta SkyMiles have a reputation. For years, travelers have dubbed them "SkyPesos," criticizing their unpredictable value compared to other airline currencies. The TakeOff 15 benefit is a direct and powerful counterargument to that narrative.</p>
                  <p>This perk provides a straightforward 15% discount whenever you use miles to book a Delta-operated award flight through delta.com or the Fly Delta app. The discount is applied automatically at checkout. <a href={reviewData.takeOff15Link} target="_blank" rel="noopener noreferrer sponsored" className={styles.inlineLink}>Source: American Express</a> The only caveat is that it doesn't apply to partner-operated flights or the cash portion of a ticket (taxes and fees).</p>
                  <p>The impact of this benefit is more significant than it first appears. It effectively increases the purchasing power of every SkyMile you own. For example, a flight that costs a non-cardholder 100,000 miles would only cost you 85,000 miles. This means your miles go further, transforming the card from just a tool to earn miles into a tool that makes those miles inherently more valuable.</p>
                </section>

                <section id="section-earning-miles" className={styles.reviewSection}>
                    <h2>Earning SkyMiles: A Deep-Dive into the Rewards Structure</h2>
                    <p>The Delta Platinum Amex features a tiered rewards structure designed to reward spending in key travel and lifestyle categories. (If you're new to this, our <Link href="/guides/travel-credit-card-basics-2025"><a>Travel Credit Card Basics: Beginner’s Guide 2025</a></Link> can help you get up to speed on reward mechanics.)</p>
                    <DraggableTableWrapper>
                        <div className={styles.tableContainer}>
                          <table className={`${styles.statsTable} ${styles.earningRatesTable}`}>
                            <thead>
                              <tr>
                                <th>Miles per $1 Spent</th>
                                <th>Eligible Purchase Categories</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td data-label="Miles"><strong>3X</strong></td>
                                <td data-label="Categories">Miles on Delta purchases and purchases made directly with hotels.</td>
                              </tr>
                              <tr>
                                <td data-label="Miles"><strong>2X</strong></td>
                                <td data-label="Categories">Miles at restaurants worldwide (including takeout and delivery in the U.S.) and at U.S. supermarkets.</td>
                              </tr>
                              <tr>
                                <td data-label="Miles"><strong>1X</strong></td>
                                <td data-label="Categories">Mile on all other eligible purchases. (<a href={reviewData.rewardsStructureLink} target="_blank" rel="noopener noreferrer sponsored">Source: American Express</a>)</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                    </DraggableTableWrapper>
                    <p>The 3X category is competitive for a co-branded card. However, the real strength for everyday value lies in the 2X categories. The inclusion of U.S. supermarkets is a significant advantage, broadening the card's appeal to couples and families who can accumulate substantial miles on weekly grocery bills.</p>
                    <p>The primary weakness is the base earning rate of 1X mile. This suggests that for optimal value, the Delta Platinum Amex is best used as part of a multi-card strategy: use it for its bonus categories and pair it with a high-yield, flat-rate rewards card for all other spending.</p>
                </section>

                <section id="section-statement-credits" className={styles.reviewSection}>
                  <h2>Statement-Credit Strategy: Offsetting the Annual Fee</h2>
                  <p>The Delta Platinum Amex offers a suite of annual statement credits that function like a coupon book. If fully maximized, they can provide up to $390 in value each year. The catch? To max out their value, you need to pay attention and ensure they align with your actual spending habits.</p>
                   <ul className={styles.featureList}>
                      <li><strong>$150 Delta Stays Credit:</strong> Receive up to $150 back annually on prepaid hotels or vacation rentals booked through the Delta Stays portal.</li>
                      <li><strong>$120 Rideshare Credit:</strong> Earn up to $10 back each month on U.S. rideshare purchases with select providers like Uber and Lyft (enrollment required).</li>
                      <li><strong>$120 Resy Credit:</strong> Earn up to $10 back each month on eligible purchases at U.S. restaurants that partner with Resy (enrollment required). <a href={reviewData.benefitsGuideLink} target="_blank" rel="noopener noreferrer sponsored" className={styles.inlineLink}>Source: American Express</a></li>
                  </ul>
                  <p>The monthly credits for rideshare and Resy are "use-it-or-lose-it," meaning they don't roll over. Their value depends entirely on your lifestyle. A savvy cardholder will treat these credits as a bonus that reduces the effective annual fee, rather than a guaranteed return.</p>
                </section>
                
                <section id="section-real-world-value" className={styles.reviewSection}>
                    <h2>Real-World Value: A Calculated Example for the "Savvy Traveler"</h2>
                    <p>To make the card's value tangible, consider a hypothetical year-one scenario for "The Savvy Couple." They live near a Delta hub, take two domestic trips per year, and use the Companion Certificate for one of them.</p>
                    <DraggableTableWrapper>
                        <div className={styles.tableContainer}>
                            <table className={`${styles.statsTable} ${styles.ratesFeesTable}`}>
                                <thead>
                                    <tr>
                                        <th>Benefit/Cost</th>
                                        <th>Calculation</th>
                                        <th>Year-One Value</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr><td><strong>Value Gained</strong></td><td></td><td></td></tr>
                                    <tr><td>Welcome Offer Value</td><td>90,000 miles @ 1.25 cents/mile</td><td>+$1,125</td></tr>
                                    <tr><td>Companion Certificate Savings</td><td>Based on a $500 flight</td><td>+$500</td></tr>
                                    <tr><td>Free Checked Bags</td><td>2 people x 2 round trips x 1 bag @ $35/bag</td><td>+$140</td></tr>
                                    <tr><td>Delta Stays Credit</td><td>Used for one hotel booking</td><td>+$150</td></tr>
                                    <tr><td>Rideshare Credits</td><td>80% utilization ($10 x 12 months x 0.8)</td><td>+$96</td></tr>
                                    <tr><td>Resy Credits</td><td>50% utilization ($10 x 12 months x 0.5)</td><td>+$60</td></tr>
                                    <tr><td><strong>Costs</strong></td><td></td><td></td></tr>
                                    <tr><td>Annual Fee</td><td></td><td>-$350</td></tr>
                                    <tr><td>Companion Ticket Taxes & Fees</td><td>Max domestic fee</td><td>-$80</td></tr>
                                    <tr className={styles.totalRow}><td><strong>Net Year-One Value</strong></td><td></td><td><strong>$1,641</strong></td></tr>
                                </tbody>
                            </table>
                        </div>
                    </DraggableTableWrapper>
                    <p>This calculation demonstrates that for the right user, the Delta Platinum Amex can deliver substantial value that far exceeds its annual fee, especially in the first year.</p>
                </section>
                
                <section id="section-day-of-travel" className={styles.reviewSection}>
                    <h2>Elevating Your Journey: Free Checked Bags to Priority Boarding</h2>
                    <p>Beyond the marquee benefits, the card includes practical day-of-travel perks designed to make the airport experience smoother.</p>
                    <ul className={styles.featureList}>
                        <li><strong>First Checked Bag Free:</strong> The primary cardmember and up to eight other passengers on the same reservation get their first checked bag free on Delta flights. For a family of four, this saves $280 on a single round trip, nearly covering the annual fee in one vacation. <a href={reviewData.baggageInfoLink} target="_blank" rel="noopener noreferrer sponsored" className={styles.inlineLink}>Source: Delta Air Lines</a></li>
                        <li><strong>Zone 5 Priority Boarding:</strong> This priority access generally ensures you can find overhead bin space for your carry-on luggage.</li>
                        <li><strong>Fee Credit for Global Entry or TSA PreCheck®:</strong> The card offers a statement credit to cover the application fee for Global Entry (up to $120) or TSA PreCheck® (up to $85). <a href={reviewData.globalEntryTSALink} target="_blank" rel="noopener noreferrer sponsored" className={styles.inlineLink}>Source: American Express</a></li>
                        <li><strong>20% Back on In-Flight Purchases:</strong> Receive a 20% savings as a statement credit on eligible in-flight purchases like food and drinks.</li>
                    </ul>
                </section>
                
                <section id="section-protections" className={styles.reviewSection}>
                    <h2>Essential Travel & Purchase Protections</h2>
                    <p>Holding the Delta Platinum Amex also provides a safety net of insurance-like benefits that offer significant peace of mind during your travels and with your purchases. (Our <Link href="/guides/ultimate-rewards-perks-guide"><a>Ultimate Rewards & Perks Guide</a></Link> covers these types of benefits in greater detail.) Key coverages include:</p>
                    <ul className={styles.featureList}>
                        <li>Trip Delay Insurance</li>
                        <li>Baggage Insurance Plan</li>
                        <li>Car Rental Loss and Damage Insurance</li>
                        <li>Purchase Protection</li>
                        <li>Extended Warranty</li>
                        <li>Premium Global Assist® Hotline</li>
                    </ul>
                </section>
                
                <section id="section-no-lounge" className={styles.reviewSection}>
                  <h2>The Missing Piece: What About Airport Lounge Access?</h2>
                  <p>For a card with "Platinum" in its name and a ${reviewData.annualFee} annual fee, its most conspicuous omission is complimentary airport lounge access. The {reviewData.cardName} does not provide access to Delta Sky Clubs or any other lounge network. <a href={reviewData.skyClubAccessLink} target="_blank" rel="noopener noreferrer sponsored" className={styles.inlineLink}>Source: Delta Air Lines</a></p>
                  <p>This is a deliberate product segmentation strategy. The lack of lounge access is the primary feature separating the Delta Platinum from its more expensive sibling, the Delta SkyMiles® Reserve American Express Card ($650 annual fee), which is designed for travelers who prioritize the lounge experience. If complimentary lounge access is a must-have, the Delta Platinum is not the right card for you.</p>
                </section>
                
                <section id="section-user-profile" className={styles.reviewSection}>
                  <h2>Detailed User Profiling: Who Should Get This Card (and Who Shouldn't)</h2>
                  <p>The value of this card is highly dependent on your travel patterns. Here’s who stands to benefit most.</p>
                  <h3>Ideal Profiles:</h3>
                  <div className={styles.profileCardContainer}>
                      <div className={styles.profileCard}>
                          <h4>The Delta Duo</h4>
                          <p>A couple or pair of friends who fly Delta at least twice a year and can use the Companion Certificate to justify the annual fee.</p>
                      </div>
                      <div className={styles.profileCard}>
                          <h4>The Status-Seeking Family</h4>
                          <p>A family living near a Delta hub. The checked bag savings alone are massive, and the MQD boosts help the primary cardholder earn status for the family's benefit.</p>
                      </div>
                      <div className={styles.profileCard}>
                          <h4>The Aspiring Medallion Member</h4>
                          <p>A frequent solo traveler close to the next Medallion tier. The MQD Headstart and Boost can be the deciding factor that pushes them over the threshold.</p>
                      </div>
                  </div>
                  <h3>Who Should Pass:</h3>
                  <ul className={styles.featureList}>
                      <li><strong>The Free Agent Flyer:</strong> If you are loyal only to the lowest price, a co-branded card is too restrictive.</li>
                      <li><strong>The Solo Traveler on a Budget:</strong> If you rarely travel with a companion, the card's most valuable perk is rendered useless, making the ${reviewData.annualFee} annual fee very difficult to justify. A simpler, no-annual-fee card like the one in our <Link href="/reviews/delta-skymiles-blue-amex-review"><a>Delta SkyMiles® Blue Amex review</a></Link> might be a better fit.</li>
                      <li><strong>The Luxury Seeker:</strong> Travelers who consider lounge access a non-negotiable part of the travel experience will be disappointed.</li>
                      <li><strong>The International Road Warrior:</strong> American Express is not as widely accepted internationally as Visa or Mastercard, so you may need a different card for purchases abroad.</li>
                  </ul>
                </section>
                
                <section id="section-pros-cons" className={styles.reviewSection}>
                    <h2>A Balanced View: The Definitive Pros and Cons</h2>
                    <DraggableTableWrapper>
                        <div className={styles.tableContainer}>
                            <table className={`${styles.statsTable} ${styles.comparisonTable}`}>
                                <thead><tr><th>Pros</th><th>Cons</th></tr></thead>
                                <tbody>
                                    <tr><td>Annual Companion Certificate can provide value far exceeding the annual fee.</td><td>${reviewData.annualFee} annual fee is high for a card without top-tier perks like lounge access.</td></tr>
                                    <tr><td>Excellent pathway to Delta Medallion Status via MQD Headstart & MQD Boost.</td><td>No complimentary airport lounge access is a major drawback.</td></tr>
                                    <tr><td>Generous welcome offer provides significant upfront value.</td><td>Delta SkyMiles can have unpredictable redemption values due to dynamic pricing.</td></tr>
                                    <tr><td>Up to $390 in annual statement credits can offset the fee.</td><td>Monthly statement credits are "use-it-or-lose-it" and may not align with spending.</td></tr>
                                    <tr><td>First Checked Bag Free offers substantial savings for groups.</td><td>The base rewards rate of 1X mile on non-bonus spending is uncompetitive.</td></tr>
                                    <tr><td>TakeOff 15 provides a 15% discount on Delta award flights.</td><td>The Companion Certificate is only available after the first year, upon renewal.</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </DraggableTableWrapper>
                </section>
                
                <section id="section-comparison" className={styles.reviewSection}>
                    <h2>How It Stacks Up: Competitive Card Comparison</h2>
                    <p>No card exists in a vacuum. Here’s how the Delta Platinum Amex compares to key competitors. For a wider look at how other cards stack up, check out our <Link href="/guides/best-airline-credit-cards-2025"><a>Best Airline Credit Cards 2025 guide</a></Link>.</p>
                    <DraggableTableWrapper>
                        <div className={styles.tableContainer}>
                            <table className={`${styles.statsTable} ${styles.comparisonTable}`}>
  <thead>
    <tr>
      <th>Feature</th>
      <th>
        <Link href={pagePath}>
          <a>Delta SkyMiles® Platinum Amex</a>
        </Link>
      </th>
      <th>
        <Link href="/reviews/chase-sapphire-preferred-review">
          <a>Chase Sapphire Preferred® Card</a>
        </Link>
      </th>
      <th>
        <Link href="/reviews/capital-one-venture-x-review">
          <a>Capital One Venture X</a>
        </Link>
      </th>
      <th>
        <Link href="/reviews/united-explorer-card-review">
          <a>United℠ Explorer Card</a>
        </Link>
      </th>
      <th>
        <Link href="/reviews/delta-skymiles-gold-amex-review">
          <a>Delta SkyMiles® Gold Amex</a>
        </Link>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Card Review</td>
      <td>
        <Link href={pagePath}>
          <a>Full Review</a>
        </Link>
      </td>
      <td>
        <Link href="/reviews/chase-sapphire-preferred-review">
          <a>Review</a>
        </Link>
      </td>
      <td>
        <Link href="/reviews/capital-one-venture-x-review">
          <a>Review</a>
        </Link>
      </td>
      <td>
        <Link href="/reviews/united-explorer-card-review">
          <a>Review</a>
        </Link>
      </td>
      <td>
        <Link href="/reviews/delta-skymiles-gold-amex-review">
          <a>Review</a>
        </Link>
      </td>
    </tr>
    <tr>
      <td>Annual Fee</td>
      <td>${reviewData.annualFee}</td>
      <td>$95</td>
      <td>$395</td>
      <td>$0 intro, then $150</td>
      <td>$0 intro, then $150</td>
    </tr>
    <tr>
      <td>Welcome Offer</td>
      <td>90,000 miles</td>
      <td>75,000 points</td>
      <td>75,000 miles</td>
      <td>60,000 miles</td>
      <td>80,000 miles</td>
    </tr>
    <tr>
      <td>Primary Perk</td>
      <td>Annual Companion Certificate</td>
      <td>$50 annual hotel credit</td>
      <td>$300 annual travel credit</td>
      <td>2 United Club passes/year</td>
      <td>$200 Delta flight credit</td>
    </tr>
    <tr>
      <td>Status/Lounge</td>
      <td>MQD Headstart & Boost</td>
      <td>Points transfer 1:1</td>
      <td>Unlimited Lounge Access</td>
      <td>Free first checked bag</td>
      <td>Free first checked bag</td>
    </tr>
    <tr>
      <td>Foreign Fee</td>
      <td>None</td>
      <td>None</td>
      <td>None</td>
      <td>None</td>
      <td>None</td>
    </tr>
  </tbody>
</table>
                        </div>
                    </DraggableTableWrapper>
                     <p>This comparison crystallizes the choice: flexible cards like the Sapphire Preferred and Venture X offer superior points ecosystems, but they cannot provide Delta-specific benefits like the Companion Certificate or a direct path to Medallion status. The choice comes down to a simple trade-off: are you a "points maximizer" who values flexibility, or a "Delta loyalist" who values an enhanced experience with your preferred airline? For those who need even more premium perks like lounge access, see our <Link href="/reviews/delta-skymiles-reserve-amex-review"><a>Delta SkyMiles® Reserve Amex review</a></Link>.</p>
                </section>
                
                <section id="section-testimonials" className={styles.reviewSection}>
                  <h2>Voices from the Real World: 5 User Testimonials</h2>
                  <p>But don't just take our word for it. Here’s what real cardholders are saying on public forums, giving you a glimpse into their firsthand experiences.</p>
                  <div className={styles.testimonialContainer}>
                      <blockquote className={styles.testimonialQuote}>
                          <p>&quot;I've been using the Delta SkyMiles Platinum Amex for a short time, and I'm already impressed... The standout benefit for me is the free checked bag perk, which saves me and my husband money every time we fly.&quot;</p>
                          <footer>– The Satisfied Family Traveler</footer>
                      </blockquote>
                      <blockquote className={styles.testimonialQuote}>
                          <p>&quot;Fast forward ten years, and I'm wondering if it still makes sense... the miles are watered down... The Amex card is worthless internationally. Hardly anyone takes it other than major hotel chains.&quot;</p>
                          <footer>– The Skeptical Long-Term User</footer>
                      </blockquote>
                      <blockquote className={styles.testimonialQuote}>
                          <p>&quot;I have it for the companion certificate and I do use the stays credit and monthly rideshare credit. Other than that I never use it... if you do use those 3 benefits then you come out ahead of the annual fee.&quot;</p>
                          <footer>– The Value-Maximizer</footer>
                      </blockquote>
                      <blockquote className={styles.testimonialQuote}>
                          <p>&quot;Never paid for a card with an annual fee like this... no lounge it seems and no companion ticket in the first year.&quot;</p>
                          <footer>– The Disappointed Newbie</footer>
                      </blockquote>
                      <blockquote className={styles.testimonialQuote}>
                          <p>&quot;The recent changes... have made it incredibly easy to get silver... Before applying, I'd determine if it's really going to lift you to the next level or not.&quot;</p>
                          <footer>– The Status Chaser</footer>
                      </blockquote>
                  </div>
                </section>
                
                <section id="section-rates-fees" className={styles.reviewSection}>
                  <h2>The Full Spectrum of Rates &amp; Fees</h2>
                  <p>This is a rewards card designed for people who pay their balance in full each month; its high APR makes it a poor choice for carrying debt. (<a href={reviewData.ratesLink} target="_blank" rel="noopener noreferrer sponsored">Source: American Express</a>)</p>
                  <DraggableTableWrapper>
                        <div className={styles.tableContainer}>
                            <table className={`${styles.statsTable} ${styles.ratesFeesTable}`}>
                                <thead><tr><th>Rate/Fee</th><th>Amount</th></tr></thead>
                                <tbody>
                                    <tr><td>Annual Fee</td><td>${reviewData.annualFee}</td></tr>
                                    <tr><td>Purchase APR</td><td>{reviewData.aprRange}</td></tr>
                                    <tr><td>Cash Advance APR</td><td>29.49% variable</td></tr>
                                    <tr><td>Foreign Transaction Fee</td><td>None</td></tr>
                                    <tr><td>Late/Returned Payment Fee</td><td>Up to $39</td></tr>
                                </tbody>
                            </table>
                        </div>
                  </DraggableTableWrapper>
                </section>

                <section id="section-faqs" className={`${styles.reviewSection} ${styles.faqSection}`}>
                  <h2>Card-Specific Frequently Asked Questions (FAQs)</h2>
                  <div className={styles.faqContainer}>
                      {structuredDataOptimized['@graph'].find(item => item['@type'] === 'FAQPage').mainEntity.map((faq, index) => (
                          <details key={index} className={styles.faqItem} name={`faq-${index + 1}`}>
                              <summary className={styles.faqQuestion}>{`${index + 1}. ${faq.name}`}</summary>
                              <div className={styles.faqAnswer}><p>{faq.acceptedAnswer.text}</p></div>
                          </details>
                      ))}
                  </div>
                </section>
                
                <section id="section-business-version" className={styles.reviewSection}>
                    <h2>The Business Traveler's Angle: A Note on the Platinum Business Version</h2>
                    <p>For small business owners, American Express offers the <a href={reviewData.businessCardLink} target="_blank" rel="noopener noreferrer sponsored">Delta SkyMiles® Platinum Business American Express Card</a>. It carries the same ${reviewData.annualFee} annual fee and shares core benefits like the Companion Certificate, MQD Headstart, and TakeOff 15. The primary difference lies in its rewards structure, which is tailored to business expenses (e.g., 1.5X miles on transit and large purchases). It’s a compelling alternative for the self-employed Delta loyalist.</p>
                </section>

                <section id="section-verdict" className={styles.reviewSection}>
                  <h2>Final Verdict: Is the Delta SkyMiles Platinum Your Ticket to More?</h2>
                  <p>After a comprehensive flight check, the {reviewData.cardName} lands firmly in a specific, well-defined territory. Its value is not built on universal appeal; instead, it is forged in unwavering loyalty to a single airline. The worth of its ${reviewData.annualFee} annual fee hinges almost entirely on two factors: your commitment to flying Delta and your ability to strategically use the annual Companion Certificate.</p>
                  <p>This is not a card for the occasional traveler or the bargain hunter who hops between carriers. It is a purpose-built instrument for the dedicated Delta flyer. The ideal cardholder is part of a pair or family who can turn the Companion Certificate into an annual travel subsidy that makes the fee an afterthought. They are the traveler who sees real savings in free checked bags and views the path to Medallion status as a tangible goal.</p>
                  <p>If you bleed Delta blue, fly with a plus-one, and see Medallion Status as a worthy pursuit, the Delta Platinum Amex isn't just a good card—it's arguably the most logical and value-packed tool for your travel wallet. For everyone else, the skies are wider, and your wallet may be better served by more flexible options.</p>
                </section>

                <section id="section-eat" className={`${styles.reviewSection} ${styles.eatSection}`}>
                    <h2 dangerouslySetInnerHTML={{ __html: `Our Commitment to E-A-T: Expertise, Authority &amp; Trustworthiness`}}></h2>
                    <p>At <strong>{siteName}</strong>, we are committed to providing content that exemplifies Expertise, Authoritativeness, and Trustworthiness (E-A-T). This review of the <strong>{reviewData.cardName}</strong> has been meticulously researched and crafted. We've analyzed the card's features, benefits, rewards structure, and fees, referencing official issuer documentation from American Express and Delta Air Lines, and considering real-world user experiences. Our goal is to present a balanced, comprehensive, and reliable guide to help you make an informed decision. All information is current as of <strong>{new Date(updateDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</strong>, but we always recommend verifying details directly with the issuer as terms can change.</p>
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

export default DeltaPlatinumAmexReviewPage;