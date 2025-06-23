/* ------------------------------------------------------------------
    File:  pages/reviews/citi-diamond-preferred-review.js
    Route: https://www.travelcardinsider.com/reviews/citi-diamond-preferred-review
------------------------------------------------------------------- */

import React, { useState, useEffect, useCallback, useRef } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import styles from '../../styles/ReviewPage.module.css';

import TableOfContents from '../../components/TableOfContents';
import IconGift from '../../components/icons/icon-gift.svg'; // Placeholder, using as "Intro APR"
import IconStar from '../../components/icons/icon-star.svg'; // Placeholder, using as "Key Feature"
import IconCheck from '../../components/icons/icon-Credit Card.svg'; // Placeholder, using as "Annual Fee"
import IconPlus from '../../components/icons/icon-target.svg'; // Placeholder, using as "Best For"
import IconClock from '../../components/icons/icon-plane.svg';  // Placeholder, using as "APR Length"
import IconDollar from '../../components/icons/icon-dollar.svg'; // Placeholder, using as "Fees"
import IconX from '../../components/icons/icon-Star + Arrow Up.svg'; // Placeholder

const RatingTooltip = dynamic(() => import('../../components/RatingTooltip'), { ssr: false, loading: () => null });

/* ──────────────────────────────
    CONSTANTS & STATIC DATA
    ────────────────────────────── */
const siteName = 'Travelcardinsider';
const siteUrl = 'https://www.travelcardinsider.com';
const pagePath = '/reviews/citi-diamond-preferred-review';
const pageUrlFull = `${siteUrl}${pagePath}`;
const publishDate = '2025-06-23';
const updateDate = '2025-06-23';

const reviewDataNew = {
  cardName        : 'Citi® Diamond Preferred® Card',
  title           : 'Citi Diamond Preferred Card Review 2025: A 21-Month 0% APR Lifeline?',
  description     : "Is the Citi Diamond Preferred card the key to your debt-free future? Our 2025 review dissects its massive 21-month 0% intro APR on balance transfers, its pros and cons, and who it's truly for.",
  keywords        : 'citi diamond preferred review, 0% apr credit card, balance transfer credit card, citi diamond preferred 2025, long intro apr card, debt consolidation, citi credit card review',
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
          'Balance Transfer & 0% APR Cards',
          'Debt Management Strategies',
          'Credit Card Terms & Fees Analysis',
          'Consumer Credit & FICO Scores',
          'Citi Credit Cards'
      ],
      bioSnippet: 'Dilan Madushanka is the founder and lead editor of Travelcardinsider, dedicated to demystifying credit cards and uncovering their real-world value for smarter financial management.',
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
  imageUrl        : '/download (1).png', // Placeholder: Replace with actual card image URL
  imageWidth      : 1290,
  imageHeight     : 812,
  ratingValue     : 6.5,  // Rating based on its excellence in its niche (debt consolidation)
  ratingCount     : 247,  // Placeholder - UPDATE AS NEEDED
  reviewBody      : 'Our editors evaluate the Citi Diamond Preferred Card based on its introductory APR offers, balance transfer fee, annual fee, and overall effectiveness as a tool for debt consolidation and management.',
  aprRange        : '18.15% - 28.99% (Variable)',
  annualFee       : 0,
  applyLink       : 'https://www.citi.com/credit-cards/citi-diamond-preferred-credit-card',
  ratesLink       : 'https://online.citi.com/US/ag/cards/displayterms?app=UNSOL&HKOP=608d295cca6a832d9455f97709fe858e684350d1359860de82b2b8a07336a954',
  officialOverviewLink: 'https://www.citi.com/credit-cards/citi-diamond-preferred-credit-card',
  officialBenefitsLink: 'https://www.cardbenefits.citi.com/en/Products/Citi-Entertainment',
  officialFicoScoreLink: 'https://www.cardbenefits.citi.com/en/Products/FICO-Score',
  officialBalanceTransferFaqLink: 'https://www.citi.com/credit-cards/balance-transfer/how-to-transfer-your-credit-card-balance',
  officialFicoEducationLink: 'https://www.ficoscore.com/education',
  experianReviewsLink: 'https://www.experian.com/credit-cards/details/citi-diamond-preferred-card/',
  myFicoForumsLink: 'https://forum.myfico.com/t5/Credit-Cards/bd-p/creditcard',
  sku             : 'CITI-DIAMOND-TCI-2025',
  mpn             : 'CITIDIAMONDPREF',
  h1Content       : "Citi Diamond Preferred Review (2025): Your 21-Month Lifeline to a Debt-Free Future?",
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
      brand          : { '@type': 'Brand', name: 'Citi' },
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
            description          : `Purchase APR: ${reviewDataNew.aprRange}. Balance Transfer Fee: 5% ($5 min). Foreign Transaction Fee: 3%. See official ${reviewDataNew.cardName} Rates & Fees on the issuer's website.`,
          },
        ],
        seller: { '@type': 'Organization', name: 'Citi' },
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
          '@type': 'Question', name: 'Does the Citi Diamond Preferred earn rewards?',
          acceptedAnswer: { '@type': 'Answer', text: "No. The card's sole purpose is to save you money on interest. It does not earn points, miles, or cash back." }
        },
        {
          '@type': 'Question', name: 'What is the balance transfer fee?',
          acceptedAnswer: { '@type': 'Answer', text: 'The fee is 5% of the transfer amount, with a $5 minimum. This is on the higher end and is a key cost to factor into your calculations.' }
        },
        {
          '@type': 'Question', name: 'How is this card different from the Citi Simplicity®?',
          acceptedAnswer: { '@type': 'Answer', text: 'The Citi Simplicity® Card is generally a better choice for most. It offers the same 21-month 0% intro APR but with a lower introductory balance transfer fee (3%) and, crucially, no late fees and no penalty APR, making it much safer.' }
        },
        {
          '@type': 'Question', name: 'Can my 0% intro APR be cancelled?',
          acceptedAnswer: { '@type': 'Answer', text: 'Yes. A single late or returned payment can give Citi the right to revoke your 0% intro APR and impose a penalty rate of up to 29.99% on your entire balance.' }
        },
        {
          '@type': 'Question', name: 'Can I transfer a balance from another Citi card?',
          acceptedAnswer: { '@type': 'Answer', text: 'No. Like most issuers, Citi does not permit balance transfers between its own credit card products. The debt must come from a different financial institution.' }
        },
        {
           '@type': 'Question', name: 'What happens after the 21-month intro period ends?',
           acceptedAnswer: { '@type': 'Answer', text: 'Any remaining balance will begin to accrue interest at the standard variable APR. It is critical to pay off the entire balance before this happens.' }
        },
        {
           '@type': 'Question', name: 'What credit score do I need for the Citi Diamond Preferred?',
           acceptedAnswer: { '@type': 'Answer', text: 'Citi recommends a "Good" to "Excellent" credit score, which generally means a FICO score of 670 or higher. A score above 720 gives you the best chance of approval and a higher credit limit.' }
        },
        {
            '@type': 'Question', name: 'How long does a balance transfer take?',
            acceptedAnswer: { '@type': 'Answer', text: 'The entire process, from application to the transfer posting, can take several weeks. A transfer can take up to 14 days or more to post after your account is open. Do not stop making payments on your old card until you confirm the transfer is complete.' }
        },
        {
            '@type': 'Question', name: 'What is the "product change" strategy?',
            acceptedAnswer: { '@type': 'Answer', text: "This is when you ask Citi to convert your card to a different product (like a rewards card) after you've paid off your debt. This allows you to keep the account's credit history and get a card you'll use long-term without a new application." }
        },
        {
            '@type': 'Question', name: 'Is the Citi Diamond Preferred worth the 5% fee?',
            acceptedAnswer: { '@type': 'Answer', text: 'Only if the 21-month timeframe is the single most important feature for your debt-repayment plan. If a shorter period with a 3% fee would work, other cards are cheaper.' }
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
    'Intro Balance Transfer APR Length (21 mos)',
    'Annual Fee ($0)',
    'Value for Debt Consolidation',
    'Balance Transfer Fee (5%)',
    'Intro Purchase APR Length (12 mos)',
    'Penalty APR Risk',
    'Ongoing Value & Rewards (None)',
    'Foreign Transaction Fee (3%)',
    'Cardholder Perks (Citi Entertainment)',
    'Overall Simplicity & Focus',
];

const tocSections = [
    { id: 'section-1', title: '1. At-a-Glance: The Diamond Preferred Snapshot' },
    { id: 'section-2', title: '2. How the Headline Offer Works' },
    { id: 'section-3', title: '3. Pros and Cons of the Card' },
    { id: 'section-4', title: '4. Real-World Example: Saving $3,100' },
    { id: 'section-5', title: '5. Competitive Comparison' },
    { id: 'section-6', title: '6. Who Should Get This Card?' },
    { id: 'section-7', title: '7. Who Should Skip This Card?' },
    { id: 'section-8', title: '8. Beyond the Intro Offer: Long-Term Benefits' },
    { id: 'section-9', title: '9. Real User Testimonials' },
    { id: 'section-10', title: '10. Frequently Asked Questions (FAQ)' },
    { id: 'section-11', title: '11. The Final Verdict' },
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
function CitiDiamondPreferredReviewPage() {
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
    introBTApr: "0% for 21 months on balance transfers.",
    introPurchApr: "0% for 12 months on new purchases.",
    annualFee: "$0",
    balanceTransferFee: "5% of transfer ($5 minimum).",
    rewards: "None. This card is built for one job: saving on interest.",
    bestFor: "The Debt Demolisher—someone needing the maximum possible time to pay down balances."
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
                  In the vast world of credit cards, most products shout about points and miles. The {reviewDataNew.cardName} takes a different path. It offers no rewards for spending. Instead, it offers a far more precious commodity to a very specific person: time.
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
                      on Citi's official site
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
                    <i>{reviewDataNew.cardName}: A specialized financial tool engineered for one critical mission—to give you an extended period of peace on the battlefield of debt.</i>
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
                                <span className={styles.summaryLabel}>Intro Balance Transfer APR:</span>
                                <span className={styles.summaryValue}>{summaryBoxData.introBTApr}</span>
                            </div>
                            <div className={styles.summaryItem}>
                                <span className={styles.summaryIcon}><IconClock /></span>
                                <span className={styles.summaryLabel}>Intro Purchase APR:</span>
                                <span className={styles.summaryValue}>{summaryBoxData.introPurchApr}</span>
                            </div>
                            <div className={styles.summaryItem}>
                                <span className={styles.summaryIcon}><IconCheck /></span>
                                <span className={styles.summaryLabel}>Annual Fee:</span>
                                <span className={styles.summaryValue}>{summaryBoxData.annualFee}</span>
                            </div>
                             <div className={styles.summaryItem}>
                                <span className={styles.summaryIcon}><IconDollar /></span>
                                <span className={styles.summaryLabel}>Balance Transfer Fee:</span>
                                <span className={styles.summaryValue}>{summaryBoxData.balanceTransferFee}</span>
                            </div>
                            <div className={styles.summaryItem}>
                                <span className={styles.summaryIcon}><IconStar /></span>
                                <span className={styles.summaryLabel}>Rewards Rate:</span>
                                <span className={styles.summaryValue}>{summaryBoxData.rewards}</span>
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
                        </div>
                    </div>
                </header>

                <p>This deep-dive review will dissect every feature, pitfall, and strategic advantage of the Citi Diamond Preferred, helping you decide if this is the right key to unlock your debt-free future.</p>

                <section id="section-1" className={styles.reviewSection}>
                  <h2>1. At-a-Glance: The Diamond Preferred Snapshot</h2>
                  <p>Before we get into the weeds, here’s a quick summary of what this card brings to the table.</p>
                  <ul className={styles.featureList}>
                    <li><strong>Best For:</strong> The Debt Demolisher—someone needing the maximum possible time to eliminate high-interest balances.</li>
                    <li><strong>Intro Balance Transfer APR:</strong> 0% intro APR for an impressive 21 months on balance transfers completed within 4 months of account opening. (<a href={reviewDataNew.officialOverviewLink} target="_blank" rel="noopener noreferrer sponsored">Source: Citi.com, Diamond Preferred Offer Details Page</a>)</li>
                    <li><strong>Intro Purchase APR:</strong> 0% intro APR for 12 months from the date of account opening.</li>
                    <li><strong>Standard Variable APR:</strong> {reviewDataNew.aprRange} based on your creditworthiness after the intro periods expire. (<a href={reviewDataNew.ratesLink} target="_blank" rel="noopener noreferrer sponsored">Source: Citi.com, Cardmember Agreement and Pricing Page</a>)</li>
                    <li><strong>Annual Fee:</strong> ${reviewDataNew.annualFee}. (<a href={reviewDataNew.ratesLink} target="_blank" rel="noopener noreferrer sponsored">Source: Citi.com, Cardmember Agreement and Pricing Page</a>)</li>
                    <li><strong>Balance Transfer Fee:</strong> 5% of the amount of each transfer, with a $5 minimum. (<a href={reviewDataNew.officialOverviewLink} target="_blank" rel="noopener noreferrer sponsored">Source: Citi.com, Diamond Preferred Offer Details Page</a>)</li>
                    <li><strong>Required Credit:</strong> Good to Excellent (Recommended FICO Score of 670+).</li>
                  </ul>
                </section>

                <Image
                    src="/SWAExterior-3.jpg" // Placeholder - image of someone looking relieved at their finances
                    alt="A person looking at their finances on a laptop with a sense of relief, symbolizing debt management."
                    width={800}
                    height={500}
                    className={styles.contentImage}
                    loading="lazy"
                />

                <section id="section-2" className={styles.reviewSection}>
                  <h2>2. How the Headline Offer Works: 21 Months of Financial Breathing Room</h2>
                  <p>The undeniable crown jewel of the Citi Diamond Preferred is its introductory APR offer. Let's break down exactly what you get.</p>
                  <h3>The Main Event: 21 Months for Balance Transfers</h3>
                  <p>The 0% intro APR for 21 months on balance transfers is the core reason this card exists. It’s consistently one of the longest interest-free periods on the market, making it a powerhouse for anyone with a substantial balance to pay down.</p>
                  <p>However, there's a critical catch: you must complete your balance transfers within the first 4 months of opening the account to qualify for the offer. Miss this four-month window, and the 0% APR opportunity for that transfer is gone forever. Since processing a transfer can take up to two weeks, it's essential to act the moment you get your card.</p>
                  <h3>The Side Benefit: 12 Months for New Purchases</h3>
                  <p>The card also features a 0% intro APR for 12 months on new purchases. This is a solid, if not market-leading, offer that can be useful for financing a planned expense—like a new appliance or a medical bill—without incurring interest for a year.</p>
                  <h4>Warning: The Danger of Mixing Balances</h4>
                  <p>A major pitfall is using the card for both a balance transfer and new spending after the first year. Here’s why:</p>
                   <ul className={styles.featureList}>
                        <li>After month 12, the 0% APR on new purchases expires.</li>
                        <li>New purchases will then start accruing interest at the high standard APR.</li>
                        <li>Due to payment allocation rules, your payments will likely be applied to your lowest-APR debt first (the 0% transferred balance), allowing interest to pile up on your new, high-APR purchases.</li>
                   </ul>
                   <p><strong>Pro Tip:</strong> To avoid this trap, use this card only for your initial balance transfer. Put the physical card away and use a different card for everyday spending.</p>
                </section>

                <section id="section-3" className={styles.reviewSection}>
                    <h2>3. Pros and Cons of the Citi Diamond Preferred Card</h2>
                    <p>Every financial tool has its trade-offs. Here’s a balanced look at where this card shines and where it falls short.</p>
                    <div className={styles.prosConsContainer}>
                        <div className={styles.prosBox}>
                            <h4>Pros: Why You Might Want This Card</h4>
                            <ul className={styles.featureList}>
                                <li><strong>Maximum Time Horizon:</strong> The 21-month 0% intro APR on balance transfers is an exceptionally long, interest-free runway to pay down debt.</li>
                                <li><strong>Zero Annual Fee:</strong> A crucial feature that ensures the card itself isn’t adding to your financial burden while you focus on repayment.</li>
                                <li><strong>Distraction-Free Design:</strong> The absence of a rewards program can be a psychological advantage, removing the temptation to spend more to earn points and keeping you focused on becoming debt-free.</li>
                                <li><strong>Helpful Purchase APR:</strong> The separate 12-month 0% intro APR on purchases adds valuable flexibility for planned expenses.</li>
                            </ul>
                        </div>
                        <div className={styles.consBox}>
                            <h4>Cons: Potential Dealbreakers</h4>
                            <ul className={styles.featureList}>
                                <li><strong>High 5% Balance Transfer Fee:</strong> This is higher than many competitors and represents a significant upfront cost that gets added to your debt.</li>
                                <li><strong>No Long-Term Value:</strong> With no rewards, the card offers almost no reason to keep using it for spending once the intro APR period ends.</li>
                                <li><strong>The Penalty Cliff:</strong> A single late payment can trigger a penalty APR, potentially canceling your 0% deal and applying a high interest rate to your entire balance. (<a href={reviewDataNew.ratesLink} target="_blank" rel="noopener noreferrer sponsored">Source: Citi.com, Cardmember Agreement and Pricing Page</a>)</li>
                                <li><strong>Poor Choice for Travel:</strong> The 3% foreign transaction fee makes it a costly option for any spending outside the United States. (<a href={reviewDataNew.ratesLink} target="_blank" rel="noopener noreferrer sponsored">Source: Citi.com, Cardmember Agreement and Pricing Page</a>)</li>
                            </ul>
                        </div>
                    </div>
                </section>

                 {/* --- MID-REVIEW CTA --- */}
                <section className={styles.midArticleCta}>
                    <h3>Citi® Diamond Preferred® Card</h3>
                   
                    <a href={reviewDataNew.applyLink} target="_blank" rel="noopener noreferrer sponsored" className={styles.applyNowButton}>
                        Apply Now on Citi's Site
                    </a>
                    <span className={styles.ctaDisclaimer}>Terms and conditions apply.</span>
                </section>

                <section id="section-4" className={styles.reviewSection}>
                    <h2>4. Real-World Example: How Taylor Can Save $3,100</h2>
                    <p>Let's see how this card works in a real-world scenario. Meet Taylor, who wants to clear out debt to free up cash. Taylor has an $8,000 balance on a store credit card with a punishing 24.99% APR.</p>
                    <p><strong>Without the Diamond Preferred:</strong> Taylor’s minimum payment is $200. Each month, about $167 of that payment is eaten by interest, with only $33 going toward the principal. After paying $2,400 over 12 months, the debt has only shrunk by about $400. It’s a classic debt trap.</p>
                    <p><strong>With the Diamond Preferred Solution:</strong> Taylor applies and is approved. Here’s the new plan:</p>
                    <ul className={styles.featureList}>
                        <li><strong>The Upfront Fee:</strong> A 5% balance transfer fee is applied to the $8,000 balance. The fee is $400 ($8,000 x 0.05).</li>
                        <li><strong>The New Balance:</strong> Taylor’s new starting balance on the Diamond Preferred is $8,400.</li>
                        <li><strong>The Payoff Plan:</strong> To become debt-free in 21 months, Taylor must pay $400 per month ($8,400 / 21).</li>
                        <li><strong>The Progress:</strong> Now, 100% of that $400 monthly payment goes directly to reducing the principal.</li>
                    </ul>
                    <p><strong>The Bottom Line:</strong> By using the Diamond Preferred, Taylor pays a $400 fee but saves approximately $3,500 in interest. The net savings are a staggering <strong>$3,100</strong>, and more importantly, the debt is completely eliminated in under two years.</p>
                </section>

                <section id="section-5" className={styles.reviewSection}>
                  <h2>5. Competitive Comparison: How the Diamond Preferred Stacks Up</h2>
                  <p>This card doesn’t exist in a vacuum. Here’s how it compares to other top contenders in the balance transfer and 0% APR space.</p>
                  <DraggableTableWrapper>
                    <div className={styles.tableContainer}>
                      <table className={`${styles.statsTable} ${styles.comparisonTable}`}>
                        <thead>
                          <tr>
                            <th>Feature</th>
                            <th>Citi® Diamond Preferred®</th>
                            <th>Citi Simplicity®</th>
                            <th><Link href="/cards/wells-fargo-reflect">Wells Fargo Reflect®</Link></th>
                            <th><Link href="/cards/discover-it-miles">Discover it® Balance Transfer</Link></th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td data-label="Feature">Intro APR (BT)</td>
                            <td data-label="Citi Diamond Preferred">21 months</td>
                            <td data-label="Citi Simplicity">21 months</td>
                            <td data-label="Wells Fargo Reflect">21 months</td>
                            <td data-label="Discover it">18 months</td>
                          </tr>
                          <tr>
                            <td data-label="Feature">Intro APR (Purchases)</td>
                            <td data-label="Citi Diamond Preferred">12 months</td>
                            <td data-label="Citi Simplicity">12 months</td>
                            <td data-label="Wells Fargo Reflect">21 months</td>
                            <td data-label="Discover it">6 months</td>
                          </tr>
                           <tr>
                            <td data-label="Feature">Balance Transfer Fee</td>
                            <td data-label="Citi Diamond Preferred">5% ($5 min)</td>
                            <td data-label="Citi Simplicity">3% intro, then 5%</td>
                            <td data-label="Wells Fargo Reflect">5% ($5 min)</td>
                            <td data-label="Discover it">3% intro, then 5%</td>
                          </tr>
                          <tr>
                            <td data-label="Feature">Annual Fee</td>
                            <td data-label="Citi Diamond Preferred">$0</td>
                            <td data-label="Citi Simplicity">$0</td>
                            <td data-label="Wells Fargo Reflect">$0</td>
                            <td data-label="Discover it">$0</td>
                          </tr>
                          <tr>
                            <td data-label="Feature">Key Perk</td>
                            <td data-label="Citi Diamond Preferred">Longest BT APR</td>
                            <td data-label="Citi Simplicity">No Late Fees/Penalty APR</td>
                            <td data-label="Wells Fargo Reflect">Longest Purchase APR</td>
                            <td data-label="Discover it">Rewards + Cashback Match</td>
                          </tr>
                           <tr>
                            <td data-label="Feature">Rewards</td>
                            <td data-label="Citi Diamond Preferred">None</td>
                            <td data-label="Citi Simplicity">None</td>
                            <td data-label="Wells Fargo Reflect">None</td>
                            <td data-label="Discover it">5% rotating + 1%</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </DraggableTableWrapper>
                  <p>This table makes it clear: the Diamond Preferred is a specialist. For lower fees, more forgiveness, or rewards, other cards are demonstrably better. Its value hinges entirely on prioritizing time above all else.</p>
                </section>

                <section id="section-6" className={styles.reviewSection}>
                    <h2>6. Who Should Get the Citi Diamond Preferred Card?</h2>
                    <p>This card is built for a very specific person. You're the ideal candidate if you fit this profile:</p>
                    <div className={styles.profileCardContainer}>
                        <div className={styles.profileCard}>
                            <h4>The Strategic Consolidator</h4>
                            <p>You have a significant credit card balance (e.g., $5,000+) on a high-interest card and a stable income to make aggressive payments.</p>
                        </div>
                        <div className={styles.profileCard}>
                            <h4>The Disciplined Planner</h4>
                            <p>You already have a concrete plan to eliminate your debt. You see this card as a temporary tool, not a new license to spend. You've done the math and know that the 21-month runway is the most critical feature for your success.</p>
                        </div>
                        <div className={styles.profileCard}>
                            <h4>The Good Credit Applicant</h4>
                            <p>You have a FICO score of 670 or higher, with a score over 720 giving you the best chance for approval with a meaningful credit limit. (<a href={reviewDataNew.officialFicoEducationLink} target="_blank" rel="noopener noreferrer">Source: FICO.com, Understanding Credit Scores Page</a>)</p>
                        </div>
                    </div>
                </section>

                <section id="section-7" className={styles.reviewSection}>
                    <h2>7. Who Should Skip This Card?</h2>
                    <p>Applying for this card would be a mistake for these individuals:</p>
                    <div className={styles.profileCardContainer}>
                        <div className={styles.profileCard}>
                            <h4>The Rewards Seeker</h4>
                            <p>If you pay your balances in full each month, this card’s 0% rewards rate is leaving money on the table. A cash-back card like the <Link href="/review/citi-custom-cash-2025">Citi Custom Cash® Card</Link> is a far better choice.</p>
                        </div>
                        <div className={styles.profileCard}>
                            <h4>The Globetrotter</h4>
                            <p>The 3% foreign transaction fee is a dealbreaker for international travel or online shopping from foreign merchants. Consider one of our <Link href="/review/top-5-no-ftf-cards-2025">top cards with no foreign transaction fees</Link> instead.</p>
                        </div>
                        <div className={styles.profileCard}>
                            <h4>The Purchase Financer</h4>
                            <p>If your main goal is to finance a new purchase, the <Link href="/cards/wells-fargo-reflect">Wells Fargo Reflect® Card</Link> is superior, offering a stunning 21-month 0% intro APR on purchases that crushes this card's 12-month offer.</p>
                        </div>
                    </div>
                </section>

                <section id="section-8" className={styles.reviewSection}>
                    <h2>8. Beyond the Intro Offer: Long-Term Benefits and Perks</h2>
                    <p>While the card's value plummets after the intro period, it does have a few useful features.</p>
                    <ul className={styles.featureList}>
                        <li><strong>Citi Entertainment®:</strong> Get special access to presale tickets and VIP packages for concerts, sports, and dining. (<a href={reviewDataNew.officialBenefitsLink} target="_blank" rel="noopener noreferrer sponsored">Source: Citi.com, Citi Entertainment Benefits Page</a>)</li>
                        <li><strong>Free FICO® Score:</strong> An invaluable tool for monitoring your credit progress as you pay down your debt. (<a href={reviewDataNew.officialFicoScoreLink} target="_blank" rel="noopener noreferrer sponsored">Source: Citi.com, Account Benefits Page</a>)</li>
                        <li><strong>The Secret Weapon: The "Product Change"</strong> After you've paid off your debt, closing the account can <Link href="/review/How-to-Improve-Your-Credit-Score-Fast-for-Premium-Travel-Cards">hurt your credit score</Link>. Instead, you can often request a "product change." Citi may allow you to convert your Diamond Preferred into a rewards-earning card like the <Link href="/review/citi-custom-cash-2025">Citi Custom Cash® Card</Link> without a new application. This preserves your account history and transforms the card into a valuable long-term tool.</li>
                    </ul>
                </section>

                <section id="section-9" className={styles.reviewSection}>
                  <h2>9. From the Source: Real User Testimonials</h2>
                    <p>Here are five paraphrased testimonials that highlight the real-world experience with this card.</p>
                    <div className={styles.testimonialContainer}>
                      <blockquote className={styles.testimonialQuote}>
                          <p>&quot;The card performed exactly as advertised, providing a seamless way to manage a significant balance at 0% interest, calling it a '10/10' experience.&quot;</p>
                          <footer>– Reddit user with over $20,000 in debt</footer>
                      </blockquote>
                      <blockquote className={styles.testimonialQuote}>
                          <p>&quot;Despite an excellent credit score, they were approved for a limit of only $3,000—too low to be useful for their intended balance transfer, highlighting the risk of getting an unusable credit line.&quot; (<a href={reviewDataNew.experianReviewsLink} target="_blank" rel="noopener noreferrer">Source: Experian.com, Public User Reviews Page</a>)</p>
                          <footer>– Experian user with a FICO score over 750</footer>
                      </blockquote>
                       <blockquote className={styles.testimonialQuote}>
                          <p>&quot;They praised the card for its simple terms, interest-free grace period, and user-friendly website, showing that for many, the core experience is hassle-free.&quot;</p>
                          <footer>– User on Experian</footer>
                      </blockquote>
                       <blockquote className={styles.testimonialQuote}>
                          <p>&quot;They learned a hard lesson when their autopay didn't take effect until the next billing cycle, causing an unexpected missed payment. This is a potent reminder to double-check all payment setups.&quot;</p>
                          <footer>– Reddit user on autopay pitfalls</footer>
                      </blockquote>
                      <blockquote className={styles.testimonialQuote}>
                          <p>&quot;This user got the card specifically to tackle debt, with the explicit plan to product-change it to the Citi Double Cash® Card later, demonstrating the sophisticated strategy savvy cardholders use.&quot;</p>
                          <footer>– Reddit user planning a product change</footer>
                      </blockquote>
                  </div>
                </section>

                <section id="section-10" className={`${styles.reviewSection} ${styles.faqSection}`}>
                  <h2>10. Frequently Asked Questions (FAQ)</h2>
                  <div className={styles.faqContainer}>
                      {structuredDataOptimized['@graph'].find(item => item['@type'] === 'FAQPage').mainEntity.map((faq, index) => (
                          <details key={index} className={styles.faqItem} name={`faq-${index + 1}`}>
                              <summary className={styles.faqQuestion}>{`${index + 1}. ${faq.name}`}</summary>
                              <div className={styles.faqAnswer}>
                                <p>{faq.acceptedAnswer.text}
                                {faq.name === "Can I transfer a balance from another Citi card?" &&
                                    <> (<a href={reviewDataNew.officialBalanceTransferFaqLink} target="_blank" rel="noopener noreferrer sponsored">Source: Citi.com, Balance Transfer FAQs</a>)</>
                                }
                                {faq.name === 'What is the "product change" strategy?' &&
                                     <> (<a href={reviewDataNew.myFicoForumsLink} target="_blank" rel="noopener noreferrer">Source: myFICO Forums, Credit Card Topics Section</a>)</>
                                }
                                </p>
                              </div>
                          </details>
                      ))}
                  </div>
                </section>

                <section id="section-11" className={styles.reviewSection}>
                  <h2>11. The Final Verdict: A Powerful Tool for a Singular Purpose</h2>
                  <p>The {reviewDataNew.cardName} is the definition of a niche product. It is a highly specialized debt-management instrument that sacrifices nearly every common card benefit—rewards, low fees, travel perks—in exchange for its single powerhouse feature: one of the longest interest-free runways in the industry.</p>
                  <p>Because of its high 5% balance transfer fee and the existence of more forgiving or versatile competitors, this card can only be recommended to a very narrow slice of consumers. The ideal user is the disciplined "Strategic Debt-Consolidator" who has a large balance, a concrete repayment plan, and for whom the 21-month timeframe is a non-negotiable necessity that outweighs all other costs.</p>
                  <div className={styles.prosConsContainer}>
                      <div className={styles.consBox}>
                          <h4>For everyone else, the choice is clear:</h4>
                          <ul className={styles.featureList}>
                              <li>If you want a forgiving, lower-cost balance transfer from Citi, choose the <strong>Citi Simplicity® Card.</strong></li>
                              <li>If you need to finance a new purchase for just as long, choose the <strong><Link href="/cards/wells-fargo-reflect">Wells Fargo Reflect® Card</Link>.</strong></li>
                          </ul>
                      </div>
                  </div>
                  <p>The Citi Diamond Preferred is a powerful tool, capable of saving you thousands in interest and changing your financial trajectory. But its value is conditional. For the right person with the right plan, it truly is a diamond. For everyone else, there are <Link href="/zeroapr/Best-10-Zero-APR-And-Balance-Transfer-Credit-Cards-of-2025">better gems to be found</Link>.</p>
                </section>


                <section id="section-eat" className={`${styles.reviewSection} ${styles.eatSection}`}>
                    <h2 dangerouslySetInnerHTML={{ __html: `Our Commitment to E-A-T: Expertise, Authority &amp; Trustworthiness`}}></h2>
                    <p>At <strong>{siteName}</strong>, we are committed to providing content that exemplifies Expertise, Authoritativeness, and Trustworthiness (E-A-T). This review of the <strong>{reviewDataNew.cardName}</strong> has been meticulously researched and crafted. We've analyzed the card's features, benefits, and fees, referencing official issuer documentation from Citi, and considering real-world user experiences. Our goal is to present a balanced, comprehensive, and reliable guide to help you make an informed financial decision. All information is current as of <strong>{new Date(updateDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</strong>, but we always recommend verifying details directly with the issuer as terms can change.</p>
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

export default CitiDiamondPreferredReviewPage;