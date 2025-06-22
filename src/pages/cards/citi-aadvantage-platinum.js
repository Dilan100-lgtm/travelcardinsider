/* ------------------------------------------------------------------
    File:  pages/reviews/citi-aadvantage-platinum-select-review.js
    Route: https://www.travelcardinsider.com/reviews/citi-aadvantage-platinum-select-review
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
import IconX from '../../components/icons/icon-Star + Arrow Up.svg';

const RatingTooltip = dynamic(() => import('../../components/RatingTooltip'), { ssr: false, loading: () => null });

/* ──────────────────────────────
    CONSTANTS & STATIC DATA
    ────────────────────────────── */
const siteName = 'Travelcardinsider'; 
const siteUrl = 'https://www.travelcardinsider.com'; 
const pagePath = '/reviews/citi-aadvantage-platinum-select-review'; 
const pageUrlFull = `${siteUrl}${pagePath}`;
const publishDate = '2025-06-22'; 
const updateDate = '2025-06-22'; 

const reviewDataNew = {
  cardName        : 'Citi® / AAdvantage® Platinum Select® World Elite Mastercard®',
  title           : 'Citi AAdvantage Platinum Select Review (2025): The Ultimate Co-Pilot for AA Flyers?',
  description     : "Is the Citi / AAdvantage Platinum Select card worth it? Our 2025 review covers the 50k bonus, free checked bags, loyalty points, and 2X miles on gas & dining to see if it's your ticket to free flights.",
  keywords        : 'citi aadvantage platinum select review, aadvantage credit card, citi aa card, american airlines credit card, earn aadvantage miles, free checked bag, loyalty points, citi aadvantage review 2025',
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
          'American Airlines AAdvantage Program',
          'Credit Card Rewards Optimization',
          'Travel Hacking & Loyalty Programs',
          'Citi Credit Cards'
      ],
      bioSnippet: 'Dilan Madushanka is the founder and lead editor of Travelcardinsider, dedicated to demystifying credit cards and uncovering their real-world value for smarter travel and rewards.',
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
  imageUrl        : '/CardArt.png.webp', // Placeholder: Replace with actual card image URL
  imageWidth      : 1290, 
  imageHeight     : 812,  
  ratingValue     : 7.8,  // Placeholder - Based on focus for AA Loyalists
  ratingCount     : 312,  // Placeholder - UPDATE AS NEEDED
  reviewBody      : 'Our editors evaluate the Citi / AAdvantage Platinum Select Card based on its rewards structure (2X on AA, gas, restaurants), key travel perks (first checked bag free for 5, preferred boarding), welcome bonus, Loyalty Point earnings, annual fee, and overall value proposition for American Airlines flyers.',
  aprRange        : '20.24% - 29.24% (Variable)', // From your text
  annualFee       : 99, 
  applyLink       : 'https://creditcards.aa.com/credit-cards/citi-platinum-card-american-airlines-direct/', 
  ratesLink       : 'https://creditcards.aa.com/credit-cards/citi-platinum-card-american-airlines-direct/#pricing', // Direct link to terms
  officialOverviewLink: 'https://creditcards.aa.com/credit-cards/citi-platinum-card-american-airlines-direct/',
  officialWelcomeOfferLink: 'https://creditcards.aa.com/credit-cards/citi-platinum-card-american-airlines-direct/',
  officialBenefitsCreditsLink: 'https://www.aa.com/i18n/aadvantage-program/aadvantage-credit-cards.jsp',
  officialTravelShoppingProtectionsLink: 'https://www.cardbenefits.citi.com/~/media/CardBenefits/Files/Guides/Benefit-Guides/World-and-World-Elite-Mastercard-Customers-English.pdf',
  officialAAdvantageProgramLink: 'https://www.aa.com/i18n/aadvantage-program/aadvantage-program.jsp',
  officialPartnerAirlinesLink: 'https://www.aa.com/i18n/aadvantage-program/miles/partners.jsp',
  sku             : 'CITI-AADV-PLAT-TCI-2025',
  mpn             : 'CITIAADVPLAT', 
  h1Content       : "Your Ticket to Free Flights? A Real-World Review of the Citi / AAdvantage Platinum Select", 
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
            description          : `Annual fee: $${reviewDataNew.annualFee}, waived for the first 12 months.`,
          },
          {
            '@type'              : 'PriceSpecification',
            priceCurrency        : 'USD',
            description          : `Purchase APR: ${reviewDataNew.aprRange}. Foreign Transaction Fee: None. See official ${reviewDataNew.cardName} Rates & Fees on the issuer's website.`,
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
          '@type': 'Question',
          name: 'Can I get a free bag on a flight I booked with miles?',
          acceptedAnswer: { '@type': 'Answer', text: "Yep! As long as your AAdvantage number is on the ticket, the benefits apply, no matter how you paid." }
        },
        {
          '@type': 'Question',
          name: 'Do my authorized users get a free bag if they travel without me?',
          acceptedAnswer: { '@type': 'Answer', text: "No. They only get the perk if they are on the same reservation as the primary cardholder." }
        },
        {
          '@type': 'Question',
          name: 'Do I earn 2X Loyalty Points at restaurants?',
          acceptedAnswer: { '@type': 'Answer', text: "Nope. It's a common point of confusion. You get 2X redeemable miles, but always only 1 Loyalty Point per dollar." }
        },
        {
          '@type': 'Question',
          name: 'Is that $125 flight discount a sure thing?',
          acceptedAnswer: { '@type': 'Answer', text: "Not at all. It requires a hefty $20,000 annual spend. Think of it as a bonus for big spenders, not a standard perk." }
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
    'Welcome Bonus Value',
    'Free Checked Bag Benefit (for 5)',
    'Rewards on Gas & Dining (2X)',
    'Rewards on AA Flights (2X)',
    'Loyalty Point Earning Rate (1 per $)',
    'Annual Fee ($99, waived yr 1) vs. Value',
    'Preferred Boarding Perk',
    'No Foreign Transaction Fees',
    'In-Flight Purchase Discount (25%)',
    'Overall Value for AA Loyalists',
    'Flexibility of AAdvantage Miles',
];

const tocSections = [ 
    { id: 'section-1', title: '1. At a Glance: The Platinum Select Cheat Sheet' },
    { id: 'section-2', title: '2. Are You the Right Fit? Profiling the Ideal Cardholder' },
    { id: 'section-3', title: '3. The Real Value Prop: A Closed-Door Rewards Program' },
    { id: 'section-4', title: '4. The Main Event: A Breakdown of Key Features' },
    { id: 'section-5', title: '5. That Welcome Bonus: What are 50,000 Miles Actually Worth?' },
    { id: 'section-6', title: '6. Earning on the Ground: Your Daily Spending Strategy' },
    { id: 'section-7', title: '7. The Loyalty Point Engine: A Shortcut to Elite Status' },
    { id: 'section-8', title: '8. The Airport Advantage: Real Perks You Can Feel' },
    { id: 'section-9', title: '9. The Little Extras: In-Flight Savings & Other Perks' },
    { id: 'section-10', title: '10. The Nitty-Gritty: Full Rates & Fees' },
    { id: 'section-11', title: '11. What We Love: The Platinum Select\'s Winning Features' },
    { id: 'section-12', title: '12. Where it Falls Short: Potential Turbulence' },
    { id: 'section-13', title: '13. Putting it to the Test: A Year with a Family Traveler' },
    { id: 'section-14', title: '14. From the Source: Real User Reviews' },
    { id: 'section-15', title: '15. Head-to-Head: The Mid-Tier Travel Card Showdown' },
    { id: 'section-16', title: '16. The AAdvantage Family: Finding Your Perfect Fit' },
    { id: 'section-17', title: '17. Cashing In: How to Redeem Your Miles Wisely' },
    { id: 'section-18', title: '18. The Final Verdict: So, Is It Worth It?' },
    { id: 'section-19', title: '19. Your Top Questions, Answered (FAQs)' },
    { id: 'section-20', title: '20. Ready for Takeoff: How to Apply' },
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
function CitiAAdvantagePlatinumSelectReviewPage() {
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
    welcomeOffer: "50,000 bonus miles after $2,500 spend in first 3 months.",
    annualFee: `$${reviewDataNew.annualFee} (waived first year)`,
    topEarning: "2X miles on AA, restaurants, & gas stations.",
    keyPerks: "First checked bag free for you + 4 companions.",
    travelPerk: "Preferred boarding & no foreign transaction fees.",
    bestFor: "Practical AA flyers who want to erase bag fees & earn miles without fuss."
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
                  Can everyday spending really earn you free flights? For American Airlines flyers, the Citi® / AAdvantage® Platinum Select® Card might be the key. We took a closer look to see if it truly delivers—or just sounds good on paper.
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
                      on American Airlines's official site
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
                    <i>{reviewDataNew.cardName}: {reviewDataNew.description}</i>
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
                                <span className={styles.summaryIcon}><IconDollar /></span> 
                                <span className={styles.summaryLabel}>Key Perks:</span>
                                <span className={styles.summaryValue}>{summaryBoxData.keyPerks}</span>
                            </div>
                            <div className={styles.summaryItem}>
                                <span className={styles.summaryIcon}><IconPlane /></span>
                                <span className={styles.summaryLabel}>Travel Perk:</span>
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
                  <h2>1. At a Glance: The Platinum Select Cheat Sheet</h2>
                  <p><strong>Best For:</strong> The practical American Airlines flyer who wants to erase bag fees and earn miles without a fuss. The {reviewDataNew.cardName} isn't trying to be the most luxurious travel card on the market. Instead, it’s a straightforward and effective tool. Think of it as a dedicated engine for earning AAdvantage miles on your daily routine—gas, dining, and more—which is crucial since you can't get those miles from other major bank rewards programs.</p>
                  <ul className={styles.featureList}>
                    <li><strong>Welcome Bonus:</strong> A solid 50,000 AAdvantage® bonus miles after you spend $2,500 in the first 3 months. (<a href={reviewDataNew.officialWelcomeOfferLink} target="_blank" rel="noopener noreferrer sponsored">Source: citi.com, "Citi® / AAdvantage® Platinum Select® Card Details"</a>)</li>
                    <li><strong>Annual Fee:</strong> $99, but they waive it for the first year, so you get a free trial run.</li>
                    <li><strong>Top Earning Rates:</strong> 2X AAdvantage miles on American Airlines flights, at restaurants, and at gas stations. 1X mile everywhere else.</li>
                    <li><strong>The Big Perks:</strong> Your first checked bag is free on domestic flights for you and four companions. Plus, you get to board a little earlier.</li>
                    <li><strong>Good for Globetrotters:</strong> No foreign transaction fees.</li>
                  </ul>
                </section>
                
                <Image
                    src="/medium-shot-happy-family-airport_result.webp" // Placeholder - image of family at airport
                    alt="A family checking in at an American Airlines counter, symbolizing the card's travel perks."
                    width={800}
                    height={500}
                    className={styles.contentImage}
                    loading="lazy"
                />

                <section id="section-2" className={styles.reviewSection}>
                  <h2>2. Are You the Right Fit? Profiling the Ideal Cardholder</h2>
                  <p>A credit card’s worth is all about the person holding it. This one is no different. You'll get the most out of it if you see yourself here.</p>
                  <div className={styles.profileCardContainer}>
                    <div className={styles.profileCard}>
                        <h4>The AA Loyalist</h4>
                        <p>This is the most obvious one. If you live near an American hub like Dallas (DFW), Charlotte (CLT), or Chicago (ORD), this card becomes less of a choice and more of a necessity.</p>
                    </div>
                    <div className={styles.profileCard}>
                        <h4>The Practical Traveler</h4>
                        <p>This person lives by a simple calculation: do the benefits outweigh the fee? The free checked bag is their north star. For me, after just one round-trip flight with my wife, the $160 in saved bag fees more than paid for the card's annual fee. It’s that simple.</p>
                    </div>
                    <div className={styles.profileCard}>
                        <h4>The Elite Status Chaser</h4>
                        <p>Every dollar you spend earns one Loyalty Point toward AAdvantage elite status.</p>
                    </div>
                     <div className={styles.profileCard}>
                        <h4>The Family Vacationer</h4>
                        <p>That free checked bag perk? It extends to four other people on your reservation. (<a href="https://www.aa.com/i18n/travel-info/baggage/checked-baggage-policy.jsp" target="_blank" rel="noopener noreferrer sponsored">Source: aa.com, "AAdvantage® Credit Card Benefits"</a>). A family of five can save a ridiculous $400 on a single round-trip flight. That’s not just a perk; it’s a game-changer for <Link href="/review/Top-5-Family-Friendly-Travel-Cards-for-2025-Maximize-Points-&-Perks-with-Kids-in-Tow">family travel</Link>.</p>
                    </div>
                  </div>
                </section>

                <section id="section-3" className={styles.reviewSection}>
                  <h2>3. The Real Value Prop: A Closed-Door Rewards Program</h2>
                  <p>To get why this card punches above its weight, you have to understand something critical about the AAdvantage program: it's a fortress. You can't transfer your points from Chase, Amex, or Capital One to American Airlines. (<a href="https://www.aa.com/i18n/aadvantage-program/aadvantage-terms-and-conditions.jsp" target="_blank" rel="noopener noreferrer sponsored">Source: aa.com, "AAdvantage® Program Terms and Conditions"</a>).</p>
                  <p>That strategic wall creates a "moat." If you want to earn AA miles from credit card spending, you have to use an AAdvantage co-branded card. There’s no other way in.</p>
                  <p>This is the card’s fundamental power. Other cards might boast higher earn rates, but this one gives you what you can't get elsewhere: direct, consistent access to AAdvantage miles. It’s not meant to compete with a <Link href="/review/chase-sapphire-preferred-2025">Chase Sapphire Preferred</Link>; it's meant to work alongside it in a smart traveler's wallet.</p>
                </section>

                <section id="section-4" className={styles.reviewSection}>
                  <h2>4. The Main Event: A Breakdown of Key Features</h2>
                  <p>The Platinum Select is built around a tight list of benefits designed to make AA travel better and get you to your next award flight faster.</p>
                  <ul className={styles.featureList}>
                      <li><strong>Welcome Bonus:</strong> A hefty 50,000-mile head start.</li>
                      <li><strong>Rewards on a Diet:</strong> 2X miles on AA, restaurants, and gas; 1X on everything else.</li>
                      <li><strong>Airport Life-Savers:</strong> First checked bag free and preferred boarding for you and up to four others on your trip.</li>
                      <li><strong>Status Shortcut:</strong> 1 Loyalty Point per dollar spent helps you climb the AAdvantage ladder.</li>
                      <li><strong>A Bonus for Big Spenders:</strong> Spend $20,000 in a year and renew the card, and you'll get a $125 American Airlines flight discount.</li>
                      <li><strong>Travel-Ready:</strong> Zero foreign transaction fees.</li>
                  </ul>
                </section>

                <section id="section-5" className={styles.reviewSection}>
                  <h2>5. That Welcome Bonus: What are 50,000 Miles Actually Worth?</h2>
                  <p>The card’s sign-up bonus gives your AAdvantage account a massive boost right out of the gate: 50,000 bonus miles after a $2,500 spend in three months.</p>
                  <p>What's that worth in real money? Most experts value those miles between $800 and $965 when used for flights. That could easily cover a couple of round-trip tickets in the U.S., especially if you find a good "Web Special" deal. It's a fantastic return that pays for the annual fee for years to come. Explore our guide on <Link href="/review/2025-Points-&-Miles-Trends-Best-Ways-to-Redeem-for-Luxury-Travel-on-a-Budget">redeeming miles for luxury travel</Link> to see how far they can go.</p>
                  <p>Just know the rule: you can't get this bonus if you've received one for this same card in the last 48 months.</p>
                </section>

                <section id="section-6" className={styles.reviewSection}>
                  <h2>6. Earning on the Ground: Your Daily Spending Strategy</h2>
                  <p>This card rewards you for how you actually live. You’ll earn 2 miles per dollar not just on AA flights, but also at restaurants and gas stations—two categories that make up a huge part of most people's budgets. It makes earning miles a background activity, not a chore.</p>
                  <p>Everything else earns a flat 1 mile per dollar.</p>
                  <p><strong>Pro tip:</strong> To really put things in overdrive, use the AAdvantage eShopping portal or SimplyMiles program. You can stack bonus miles from hundreds of retailers on top of what the card already gives you.</p>
                </section>
                
                <Image
                    src="/pexels-ketut-subiyanto-4350108.webp" // Placeholder - person paying at restaurant
                    alt="A person using a credit card to pay at a restaurant, highlighting the 2X rewards on dining."
                    width={800}
                    height={500}
                    className={styles.contentImage}
                    loading="lazy"
                />

                <section id="section-7" className={styles.reviewSection}>
                    <h2>7. The Loyalty Point Engine: A Shortcut to Elite Status</h2>
                    <p>American’s elite status now runs entirely on Loyalty Points, and this card is a key part of that system. You’ll earn 1 Loyalty Point for every 1 dollar you spend. (<a href={reviewDataNew.officialAAdvantageProgramLink} target="_blank" rel="noopener noreferrer sponsored">Source: aa.com, "AAdvantage® Program Details & Loyalty Points"</a>).</p>
                    <p>But here’s the fine print, and it's important: the 2X bonus on gas and dining is for redeemable miles only. It does not give you 2X Loyalty Points. A $100 dinner gets you 200 miles to spend, but only 100 points toward status.</p>
                    <p>This leaves you with a choice. Chasing status? This card is a "one dollar, one point" machine. Trying to book a free trip? Maximize your spending at restaurants and gas stations. Knowing your goal is half the battle.</p>
                </section>

                <section id="section-8" className={styles.reviewSection}>
                    <h2>8. The Airport Advantage: Real Perks You Can Feel</h2>
                    <p>This is where the card truly delivers.</p>
                    <ul className={styles.featureList}>
                        <li><strong>First Checked Bag Free:</strong> You and up to four—yes, four!—companions on your domestic AA booking get a free checked bag. With fees around $40 each way, this saved me $80 on my last solo trip. For a family of five, that’s an incredible $400 saved on one vacation. This is, without question, the card’s hero benefit.</li>
                        <li><strong>Preferred Boarding:</strong> You and your crew board with Group 5. Why does this matter? It's your best shot at finding overhead bin space right above your seat. No more checking your carry-on at the gate. It's a small thing that makes a huge difference.</li>
                    </ul>
                </section>

                <section id="section-9" className={styles.reviewSection}>
                    <h2>9. The Little Extras: In-Flight Savings &amp; Other Perks</h2>
                    <p>The value doesn’t end there. The card also offers:</p>
                    <ul className={styles.featureList}>
                        <li><strong>25% Off In-Flight:</strong> Get a 25% statement credit on food and drinks you buy onboard an AA flight with your card.</li>
                        <li><strong>$125 Flight Discount:</strong> A nice idea, but it comes with a catch. You have to spend $20,000 in a year and renew the card. (<a href={reviewDataNew.officialTravelShoppingProtectionsLink} target="_blank" rel="noopener noreferrer sponsored">Source: citi.com, "Citi® / AAdvantage® Platinum Select® Guide to Benefits"</a>). This is a great rebate for high-spenders, but most people won't hit this threshold.</li>
                        <li><strong>World Elite Mastercard Benefits:</strong> This unlocks random little deals on things like food delivery and ride-sharing services.</li>
                        <li><strong>Citi Entertainment:</strong> Gives you access to presale tickets for concerts and sporting events.</li>
                    </ul>
                </section>

                {/* Mid-Article CTA Section */}
                <section className={styles.midArticleCta}>
                    <div className={styles.ctaCard}>
                        <div className={styles.ctaIcon}>
                            <IconGift />
                        </div>
                        <div className={styles.ctaText}>
                            <h3>Ready to Stop Paying Baggage Fees?</h3>
                            <p>The Citi / AAdvantage Platinum Select Card is the straightforward way to save money on every American Airlines flight. If you check bags, the math is simple.</p>
                        </div>
                        <div className={styles.ctaActions}>
                            <a href={reviewDataNew.applyLink} target="_blank" rel="noopener noreferrer sponsored" className={styles.ctaButton}>
                                Learn More & Apply
                            </a>
                             <a href={reviewDataNew.ratesLink} target="_blank" rel="noopener noreferrer sponsored" className={styles.ctaSecondaryButton}>
                                See Rates & Fees
                            </a>
                        </div>
                    </div>
                </section>


                <section id="section-10" className={styles.reviewSection}>
                    <h2>10. The Nitty-Gritty: Full Rates &amp; Fees</h2>
                    <p>No review is honest without looking at the fine print. Here's the cost structure.</p>
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
                                    <tr><td>Annual Fee</td><td>$99 (waived for the first 12 months)</td></tr>
                                    <tr><td>Purchase APR</td><td>{reviewDataNew.aprRange}</td></tr>
                                    <tr><td>Foreign Transaction Fee</td><td>None</td></tr>
                                    <tr><td>Balance Transfer Fee</td><td>5% of the transfer amount or $5, whichever is greater.</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </DraggableTableWrapper>
                </section>

                <section id="section-11" className={styles.reviewSection}>
                    <h2>11. What We Love: The Platinum Select's Winning Features</h2>
                    <p>The card's strengths are focused and incredibly valuable to the right person.</p>
                    <div className={styles.prosConsContainer}>
                        <div className={styles.prosBox}>
                            <ul className={styles.featureList}>
                                <li><strong>A Fantastic Welcome Bonus:</strong> That 50,000-mile bonus is a huge head start, worth up to $965 in flights.</li>
                                <li><strong>The Best Bag Perk in its Class:</strong> Free bags for you and four friends is an unbeatable benefit that can save families hundreds.</li>
                                <li><strong>A Clear Path to Elite Status:</strong> Earning 1 Loyalty Point per dollar is a simple way to build toward AAdvantage status.</li>
                                <li><strong>Rewards for Real Life:</strong> 2X on gas and restaurants makes it a useful card for everyday spending.</li>
                                <li><strong>Travel-Friendly:</strong> No foreign transaction fees is a must, and preferred boarding is a welcome touch.</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section id="section-12" className={styles.reviewSection}>
                    <h2>12. Where it Falls Short: Potential Turbulence</h2>
                    <p>Let's be real—the card isn't perfect. Here are the trade-offs.</p>
                     <div className={styles.prosConsContainer}>
                        <div className={styles.consBox}>
                            <ul className={styles.featureList}>
                                <li><strong>The Annual Fee:</strong> After year one, you have to justify that $99 cost. If you don't check bags, it’s a tough sell.</li>
                                <li><strong>No Luxury Perks:</strong> You won't find airport <Link href="/review/The-Ultimate-Guide-to-Lounge-Access-in-2025-How-to-Get-VIP-Treatment-at-Airports">lounge access</Link> or a credit for TSA PreCheck®. This is a workhorse, not a show pony.</li>
                                <li><strong>Inflexible Miles:</strong> AAdvantage miles are great for AA and its partners, but they aren't as flexible as points you can transfer to multiple airlines and hotels.</li>
                                <li><strong>That Flight Discount Hurdle:</strong> The $20,000 spending requirement for the $125 discount is steep. Don't count on getting it.</li>
                                <li><strong>No Travel Insurance:</strong> For me, this is a big one. Citi stripped away travel protections like trip cancellation coverage from this card. For booking big, important trips, I'd still use a card with better insurance, which you can read about in our <Link href="/review/best-travel-insurance-cards-2025">guide to travel insurance cards</Link>.</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section id="section-13" className={styles.reviewSection}>
                    <h2>13. Putting it to the Test: A Year with a Family Traveler</h2>
                    <p>Let's imagine Taylor's family of four. They live in an American hub and use this card for everything to fund their vacations. I see families like theirs at the airport all the time.</p>
                    <h3>Their Annual Spending:</h3>
                    <ul className={styles.featureList}>
                        <li>AA Flights: $2,000</li>
                        <li>Restaurants & Gas: $6,000 ($500/month combined)</li>
                        <li>Everything Else: $12,000 ($1,000/month)</li>
                        <li><strong>Total: $20,000</strong></li>
                    </ul>
                    <h3>The Payoff After One Year:</h3>
                    <DraggableTableWrapper>
                        <div className={styles.tableContainer}>
                            <table className={`${styles.statsTable}`}>
                                <tbody>
                                    <tr><td>Miles Earned:</td><td>They’d earn a respectable 28,000 AAdvantage miles.</td></tr>
                                    <tr><td colSpan="2"><strong>The Real Money:</strong></td></tr>
                                    <tr><td>From Miles:</td><td>Those 28,000 miles are worth about $448.</td></tr>
                                    <tr><td>From Bags:</td><td>On their family trips, they'd save a massive $720 in bag fees.</td></tr>
                                    <tr><td>From the Discount:</td><td>By hitting $20k, they get the $125 flight discount.</td></tr>
                                    <tr><td colSpan="2">After the $99 fee, Taylor's family walks away with <strong>$1,194 in net value</strong>. The lesson? The checked bag perk isn't just a benefit; it's the entire engine of this card's value.</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </DraggableTableWrapper>
                </section>
                
                <section id="section-14" className={styles.reviewSection}>
                  <h2>14. From the Source: Real User Reviews</h2>
                    <div className={styles.testimonialContainer}>
                      <blockquote className={styles.testimonialQuote}>
                          <p>&quot;I've had this card forever. It's been my go-to, and I've booked countless flights with miles. The free bag combined with my status makes it a no-brainer.&quot;</p>
                          <footer>– David, the Decade-Long Loyalist</footer>
                      </blockquote>
                      <blockquote className={styles.testimonialQuote}>
                          <p>&quot;Honestly, it's just math. If you fly AA and check bags, it's worth it. We're a family of four, so it pays for itself with the first flight we take each year.&quot;</p>
                          <footer>– Sarah, the Pragmatist</footer>
                      </blockquote>
                       <blockquote className={styles.testimonialQuote}>
                          <p>&quot;I was just hoping for a decent card, but the credit limit they gave me blew me away! It was double my other cards. That alone made me a happy customer.&quot;</p>
                          <footer>– Mark, the Surprised Applicant</footer>
                      </blockquote>
                       <blockquote className={styles.testimonialQuote}>
                          <p>&quot;A word of warning. Don't try to make a big purchase out of the blue. My account got flagged and shut down. It was embarrassing and a total pain to fix.&quot;</p>
                          <footer>– Jessica, the Frustrated User</footer>
                      </blockquote>
                  </div>
                </section>

                <Image
                    src="/front-view-young-traveller-with-backpack-holding-up-ticket-making-thumbs-up-sign_result.webp" // Placeholder - image of family at airport
                    alt="A family checking in at an American Airlines counter, symbolizing the card's travel perks."
                    width={800}
                    height={500}
                    className={styles.contentImage}
                    loading="lazy"
                />
                
                <section id="section-15" className={styles.reviewSection}>
                  <h2>15. Head-to-Head: The Mid-Tier Travel Card Showdown</h2>
                  <p>How does the Platinum Select stack up against the competition? This is the central choice every traveler has to make.</p>
                  <DraggableTableWrapper>
                    <div className={styles.tableContainer}>
                      <table className={`${styles.statsTable} ${styles.comparisonTable}`}>
                        <thead>
                          <tr>
                            <th>Feature</th>
                            <th>Citi AAdvantage Platinum Select</th>
                            <th>Delta SkyMiles Gold Amex</th>
                            <th>United Explorer Card</th>
                            <th>Chase Sapphire Preferred</th>
                            <th>Capital One Venture</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td data-label="Feature">Annual Fee</td>
                            <td data-label="Citi AAdvantage">$99 (waived yr 1)</td>
                            <td data-label="Delta SkyMiles"><Link href="/cards/delta-skymiles-platinum">$150 ($0 intro yr 1)</Link></td>
                            <td data-label="United Explorer"><Link href="/cards/united-explorer">$95 ($0 intro yr 1)</Link></td>
                            <td data-label="Chase Sapphire"><Link href="/cards/chase-sapphire-preferred">$95</Link></td>
                            <td data-label="Capital One Venture"><Link href="/cards/capital-one-venture">$95</Link></td>
                          </tr>
                          <tr>
                            <td data-label="Feature">Free Checked Bag</td>
                            <td data-label="Citi AAdvantage">Yes (self + 4)</td>
                            <td data-label="Delta SkyMiles">Yes (self + 8)</td>
                            <td data-label="United Explorer">Yes (self + 1)</td>
                            <td data-label="Chase Sapphire">No</td>
                            <td data-label="Capital One Venture">No</td>
                          </tr>
                          <tr>
                            <td data-label="Feature">Lounge Access</td>
                            <td data-label="Citi AAdvantage">No</td>
                            <td data-label="Delta SkyMiles">No</td>
                            <td data-label="United Explorer">2 passes/yr (<a href="https://www.chase.com/personal/credit-cards/united/united-explorer-card/travel-benefits" target="_blank" rel="noopener noreferrer sponsored">Source: chase.com</a>)</td>
                            <td data-label="Chase Sapphire">No</td>
                            <td data-label="Capital One Venture">No</td>
                          </tr>
                          <tr>
                            <td data-label="Feature">Points Flexibility</td>
                            <td data-label="Citi AAdvantage">Low (AA/Oneworld)</td>
                            <td data-label="Delta SkyMiles">Low (Delta/SkyTeam) (<a href="https://www.americanexpress.com/us/credit-cards/card/delta-skymiles-gold-american-express-card/" target="_blank" rel="noopener noreferrer sponsored">Source: amex.com</a>)</td>
                            <td data-label="United Explorer">Low (United/Star Alliance)</td>
                            <td data-label="Chase Sapphire">High (1:1 Transfers) (<a href="https://www.chase.com/personal/credit-cards/sapphire/preferred/benefits" target="_blank" rel="noopener noreferrer sponsored">Source: chase.com</a>)</td>
                            <td data-label="Capital One Venture">High (Transfers)</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </DraggableTableWrapper>
                  <p>You can either lock into an airline's ecosystem for perks like free bags, or go with a flexible card for better earning and redemption options. There's no single right answer.</p>
                </section>
                
                <section id="section-16" className={styles.reviewSection}>
                    <h2>16. The AAdvantage Family: Finding Your Perfect Fit</h2>
                    <p>The Platinum Select is the middle child in the AAdvantage family.</p>
                    <ul className={styles.featureList}>
                        <li><strong>AAdvantage MileUp Card:</strong> The no-fee entry point. It earns miles but lacks the crucial bag and boarding perks. It's for the casual fan who refuses to pay an annual fee.</li>
                        <li><strong>AAdvantage Executive Card:</strong> The $595 premium card. Its whole purpose is providing an Admirals Club membership for lounge access. (<a href="https://creditcards.aa.com/credit-cards/citi-executive-card-american-airlines-direct/" target="_blank" rel="noopener noreferrer sponsored">Source: citi.com, "Citi® / AAdvantage® Executive Card Details"</a>). This is for the weekly road warrior.</li>
                    </ul>
                    <p>The Platinum Select is the sweet spot. It has the one perk most people actually need—the bag fee waiver—without the sky-high cost of the Executive card.</p>
                </section>

                <section id="section-17" className={styles.reviewSection}>
                    <h2>17. Cashing In: How to Redeem Your Miles Wisely</h2>
                    <p>Earning miles is easy; spending them wisely is an art.</p>
                     <ul className={styles.featureList}>
                        <li><strong>Fly on Partners:</strong> Use your miles on AA's Oneworld partners like British Airways or Japan Airlines. (<a href={reviewDataNew.officialPartnerAirlinesLink} target="_blank" rel="noopener noreferrer sponsored">Source: aa.com, "Redeeming Miles on Partner Airlines"</a>). It’s a great way to fly internationally.</li>
                        <li><strong>Go for Business Class:</strong> The best bang-for-your-buck is often found by redeeming for business or first-class seats on long-haul flights.</li>
                        <li><strong>Book Early:</strong> Award availability is almost always better when you book far in advance.</li>
                        <li><strong>Don't Waste Them:</strong> Never, ever redeem your miles for merchandise or gift cards. It’s a terrible value compared to flights.</li>
                    </ul>
                </section>

                <section id="section-18" className={styles.reviewSection}>
                  <h2>18. The Final Verdict: So, Is It Worth It?</h2>
                  <p>This isn't a simple yes or no. It's a conditional "absolutely" for a well-defined person.</p>
                  <p><strong>This card is a home run for the American Airlines flyer who checks bags.</strong> If your savings on bag fees are more than the $99 annual fee, the card is a net positive. For me, that's just one trip a year with a companion. For a family, the value is undeniable. The miles and boarding perks are just bonuses on top of a card that's already paying you back.</p>
                  
                  <h3>But this card is probably a pass for:</h3>
                  <div className={styles.prosConsContainer}>
                      <div className={styles.consBox}>
                          <ul className={styles.featureList}>
                              <li><strong>The Occasional Flyer:</strong> If you fly AA less than once a year, you'll lose money on the fee.</li>
                              <li><strong>The Free-Agent Traveler:</strong> If you just book the cheapest flight regardless of airline, a flexible card like the Chase Sapphire Preferred is a much better fit.</li>
                              <li><strong>The Lounge Lizard:</strong> If you need lounge access, you'll have to shell out for a premium card.</li>
                          </ul>
                      </div>
                  </div>
                  <p>Ultimately, it comes down to that one question: <strong>Do you fly American and check bags?</strong> If so, this is one of the most straightforward and valuable cards you can get.</p>
                </section>

                <section id="section-19" className={`${styles.reviewSection} ${styles.faqSection}`}>
                  <h2>19. Your Top Questions, Answered (FAQs)</h2>
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
                
                <section id="section-20" className={styles.reviewSection}>
                  <h2>20. Ready for Takeoff: How to Apply</h2>
                  <p>If you see yourself in the profile of the pragmatic AA loyalist, applying is the next step. You'll typically need a good to excellent credit score (usually 690+) to get approved. (<a href="https://www.citi.com/credit-cards/understanding-credit-cards/how-to-get-a-first-credit-card" target="_blank" rel="noopener noreferrer sponsored">Source: citi.com, "Credit Card Application FAQs"</a>). You can find the application on Citi's website, where you might even find a pre-qualified offer. For more tips, see our guide on <Link href="/review/How-to-Improve-Your-Credit-Score-Fast-for-Premium-Travel-Cards">improving your credit score for premium cards</Link>.</p>
                  <p>Armed with this knowledge, you can confidently decide if this card is the right co-pilot for your travels.</p>
                </section>


                <section id="section-eat" className={`${styles.reviewSection} ${styles.eatSection}`}>
                    <h2 dangerouslySetInnerHTML={{ __html: `Our Commitment to E-A-T: Expertise, Authority &amp; Trustworthiness`}}></h2>
                    <p>At <strong>{siteName}</strong>, we are committed to providing content that exemplifies Expertise, Authoritativeness, and Trustworthiness (E-A-T). This review of the <strong>{reviewDataNew.cardName}</strong> has been meticulously researched and crafted. We've analyzed the card's features, benefits, rewards structure, and fees, referencing official issuer documentation from Citi and American Airlines, and considering real-world user experiences and data points from the travel rewards community. Our goal is to present a balanced, comprehensive, and reliable guide to help you make an informed decision. All information is current as of <strong>{new Date(updateDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</strong>, but we always recommend verifying details directly with the issuer as terms can change.</p>
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

export default CitiAAdvantagePlatinumSelectReviewPage;