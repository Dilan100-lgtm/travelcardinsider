/* ------------------------------------------------------------------
    File:  pages/reviews/hilton-honors-amex.js
    Route: https://www.travelcardinsider.com/reviews/hilton-honors-amex
------------------------------------------------------------------- */

import React, { useState, useEffect, useCallback, useRef } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import styles from '../../styles/ReviewPage.module.css'; // Assuming same CSS module from

import TableOfContents    from '../../components/TableOfContents'; // Assuming same TOC component from
// Assuming you have similar icon components or will adapt these:
import IconGift from '../../components/icons/icon-gift.svg'; // from
import IconStar from '../../components/icons/icon-star.svg'; // from
import IconCheck from '../../components/icons/icon-Credit Card.svg'; // from - Reused for Key Benefit
import IconX from '../../components/icons/icon-Star + Arrow Up.svg'; // from - Reused for Top Earning
import IconPlus from '../../components/icons/icon-target.svg'; // from

const RatingTooltip = dynamic(() => import('../../components/RatingTooltip'), { ssr: false, loading: () => null }); // from

/* ──────────────────────────────
    CONSTANTS & STATIC DATA
    ────────────────────────────── */
const siteName    = 'TravelCardInsider'; // from
const siteUrl     = 'https://www.travelcardinsider.com'; // from
const pagePath    = '/reviews/hilton-honors-amex'; // Updated path
const pageUrlFull = `${siteUrl}${pagePath}`;
const publishDate = '2025-05-12'; // *** PLACEHOLDER *** Update publish date
const updateDate  = '2025-05-12'; // *** PLACEHOLDER *** Update modification date

const reviewDataHilton = {
  cardName        : 'Hilton Honors American Express Card',
  title           : 'Hilton Honors American Express Card Review (2025): No-Fee Status Perks', // Generated Title
  description     : 'In-depth 2025 review of the no-annual-fee Hilton Honors American Express Card. Get Silver status, earn points on Hilton stays & US spending, and enjoy no foreign transaction fees. Ideal for occasional Hilton guests.', // Generated Description
  keywords        : 'Hilton Honors American Express Card review, Hilton Amex review, no annual fee hotel card, Hilton Silver status, Hilton points, Amex Hilton card, no foreign transaction fee card', // Generated Keywords
  // --- AUTHOR DETAILS - *** PLACEHOLDER: Update with actual author info *** ---
  author: {
      name: 'Dilan Madushanka', // Placeholder from
      title: 'Founder & Lead Editor', // Placeholder from
      imageUrl: '/WhatsApp Image 2025-05-12 at 4.09.58 PM.jpeg', // Placeholder from
      imageWidth: 40, // Placeholder from
      imageHeight: 40, // Placeholder from
      tooltipImageUrl: '/WhatsApp Image 2025-05-12 at 4.09.58 PM.jpeg', // Placeholder from
      tooltipImageWidth: 60, // Placeholder from
      tooltipImageHeight: 60, // Placeholder from
      expertise: [ // Placeholder from
          'Travel Credit Cards',
          'Rewards Programs',
          'Hotel Loyalty Programs',
          'Maximizing Card Benefits',
          'Credit Card Analysis'
      ],
      bioSnippet: 'Dilan Madushanka is the founder and lead editor of TravelCardInsider.com, dedicated to demystifying credit cards and uncovering their real-world value for smarter travel.', // Placeholder from
      fullBioLink: '/author/dilan-madushanka', // Placeholder from
      fullBio: `Dilan Madushanka is the founder and lead editor of TravelCardInsider.com... [Add full bio here]`, // Placeholder from
      publishedStats: '6+ in-depth card reviews per week', // Placeholder from
      testedStats: 'Over 50 credit card benefits across major brands', // Placeholder from
      socialLinks: { // Placeholder from
          linkedin: 'www.linkedin.com/in/dilan-madushanka-b65293365', // *** REPLACE ***
          twitter: 'https://x.com/team_dilan', // *** REPLACE ***
          email: 'team@travelcardinsider.com' // *** REPLACE ***
      }
  },
  // --- End Author Details ---
  siteName: 'TravelCardInsider',
  imageUrl        : '/NUS000000327_480x304_straight_withname.avif', // *** PLACEHOLDER: Update with actual card image URL ***
  imageWidth      : 1290, // *** PLACEHOLDER: Adjust width ***
  imageHeight     : 812, // *** PLACEHOLDER: Adjust height ***
  ratingValue     : 6.8, // Converted from 3.5/5 Stars (3.5 / 5 * 10)
  ratingCount     : 150, // *** PLACEHOLDER: Update with estimated review count ***
  reviewBody      : "Our editors evaluate the Hilton Honors American Express Card based on its rewards structure, fees, included Silver status benefits, travel protections, and overall value for US travelers, especially those who stay occasionally at Hilton properties and prefer no annual fee.", // Generated reviewBody
  // APR and Fee info extracted from review text Section 12
  aprRange        : '20.99% – 29.99% Variable', // From review text (Section 12)
  annualFee       : 0, // From review text (Section 3 & 12)
  applyLink       : 'https://www.americanexpress.com/en-us/credit-cards/card/hilton-honors/', // *** PLACEHOLDER: Verify & update apply link ***
  ratesLink       : 'https://www.americanexpress.com/us/credit-cards/card-application/apply/hilton-honors-credit-card/49003-10-0', // *** PLACEHOLDER: Verify & update rates link ***
  sku             : 'AMEX-HILTON-TCI-2025', // *** PLACEHOLDER: Update SKU ***
  mpn             : 'AMEXHILTONHONORS', // *** PLACEHOLDER: Update MPN ***
  h1Content       : "Hilton Honors Amex Review: No-Fee Status & Points", // Generated H1
};

/* ──────────────────────────────
    STRUCTURED DATA GRAPH
    ────────────────────────────── */
// Adapted structured data from using reviewDataHilton
const structuredDataOptimized = {
  '@context': 'https://schema.org',
  '@graph'  : [
    {
      '@type'        : 'Product',
      '@id'          : `${pageUrlFull}#product`,
      name           : reviewDataHilton.cardName,
      image          : reviewDataHilton.imageUrl, // *** PLACEHOLDER ***
      description    : reviewDataHilton.description,
      sku            : reviewDataHilton.sku, // *** PLACEHOLDER ***
      mpn            : reviewDataHilton.mpn, // *** PLACEHOLDER ***
      brand          : { '@type': 'Brand', name: 'American Express' }, // Updated Brand
      aggregateRating: {
        '@type'    : 'AggregateRating',
        ratingValue : reviewDataHilton.ratingValue.toString(),
        bestRating  : '10',
        worstRating : '1',
        ratingCount : reviewDataHilton.ratingCount.toString(), // *** PLACEHOLDER ***
        reviewCount : '1', // Represents this editorial review
      },
      offers: {
        '@type'            : 'Offer',
        url                : reviewDataHilton.applyLink, // *** PLACEHOLDER ***
        priceCurrency      : 'USD',
        price              : reviewDataHilton.annualFee.toString(),
        priceValidUntil    : '2026-12-31', // *** PLACEHOLDER ***
        itemCondition      : 'https://schema.org/NewCondition',
        availability       : 'https://schema.org/InStock',
        priceSpecification: [
          {
            '@type'              : 'PriceSpecification',
            priceCurrency        : 'USD',
            price                : reviewDataHilton.annualFee.toString(),
            valueAddedTaxIncluded: 'false',
            description          : 'Annual fee',
          },
          {
            '@type'              : 'PriceSpecification',
            priceCurrency        : 'USD',
            description          : `Purchase APR: ${reviewDataHilton.aprRange}`,
          },
        ],
        seller: { '@type': 'Organization', name: 'American Express' }, // Updated Seller
      },
      review: { '@id': `${pageUrlFull}#editorReview` },
    },
    {
      '@type'         : 'Review',
      '@id'           : `${pageUrlFull}#editorReview`,
      name            : `${reviewDataHilton.cardName} – Review Updated ${updateDate}`, // *** PLACEHOLDER ***
      itemReviewed    : { '@id': `${pageUrlFull}#product` },
      reviewBody      : reviewDataHilton.reviewBody,
      reviewRating    : {
        '@type'    : 'Rating',
        ratingValue : reviewDataHilton.ratingValue.toString(),
        bestRating  : '10',
        worstRating : '1',
        description: `TravelCardInsider editorial rating based on 5.0 scale converted to 10.0 scale, as of ${updateDate}.` // *** PLACEHOLDER ***
      },
      author          : { // Using Person type based on correction in
          '@type': 'Person',
          'name': reviewDataHilton.author.name, // *** PLACEHOLDER ***
          'url': reviewDataHilton.author.fullBioLink ? `${siteUrl}${reviewDataHilton.author.fullBioLink}` : undefined // *** PLACEHOLDER ***
      },
      publisher       : {
        '@type' : 'Organization',
        name    : siteName,
        logo    : { '@type': 'ImageObject', url: `${siteUrl}/images/logo/tci-logo-schema.png` }, // from - Ensure this exists
      },
      datePublished   : publishDate, // *** PLACEHOLDER ***
      dateModified    : updateDate, // *** PLACEHOLDER ***
    },
    {
      '@type'            : 'WebPage',
      '@id'              : pageUrlFull,
      url                : pageUrlFull,
      name               : reviewDataHilton.title,
      description        : reviewDataHilton.description,
      inLanguage         : 'en-US',
      isPartOf           : { '@id': `${siteUrl}#website` },
      primaryImageOfPage : { '@id': `${pageUrlFull}#primaryImage` },
      breadcrumb         : { '@id': `${pageUrlFull}#breadcrumbs` },
      datePublished      : publishDate, // *** PLACEHOLDER ***
      dateModified       : updateDate, // *** PLACEHOLDER ***
       author: { // Using Person type based on correction in
          '@type': 'Person',
          'name': reviewDataHilton.author.name, // *** PLACEHOLDER ***
          'url': reviewDataHilton.author.fullBioLink ? `${siteUrl}${reviewDataHilton.author.fullBioLink}` : undefined // *** PLACEHOLDER ***
       },
    },
    {
      '@type'   : 'ImageObject',
      '@id'     : `${pageUrlFull}#primaryImage`,
      url       : reviewDataHilton.imageUrl, // *** PLACEHOLDER ***
      width     : reviewDataHilton.imageWidth, // *** PLACEHOLDER ***
      height    : reviewDataHilton.imageHeight, // *** PLACEHOLDER ***
      caption   : reviewDataHilton.cardName,
    },
    {
      '@type'        : 'BreadcrumbList',
      '@id'          : `${pageUrlFull}#breadcrumbs`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: siteName, item: siteUrl },
        { '@type': 'ListItem', position: 2, name: 'Credit Card Reviews', item: `${siteUrl}/reviews` }, // from
        { '@type': 'ListItem', position: 3, name: `${reviewDataHilton.cardName} Review`, item: pageUrlFull },
      ],
    },
    { // FAQ data extracted from review text Section 20
      '@type'    : 'FAQPage',
      '@id'      : `${pageUrlFull}#faqs`,
      mainEntity: [
        {
          '@type': 'Question',
          name   : 'Annual Fee?',
          acceptedAnswer: { '@type': 'Answer', text: "$0." },
        },
        {
          '@type': 'Question',
          name   : 'Welcome Offer?',
          acceptedAnswer: { '@type': 'Answer', text: "Often 80k points after $2k spend in 6 months (check current offer)." },
        },
        {
          '@type': 'Question',
          name   : 'Credit Score Needed?',
          acceptedAnswer: { '@type': 'Answer', text: "Good to Excellent (typically FICO 670+)." },
        },
        {
          '@type': 'Question',
          name   : 'Foreign Transaction Fees?',
          acceptedAnswer: { '@type': 'Answer', text: "None." },
        },
        {
          '@type': 'Question',
          name   : 'Main Silver Benefits?',
          acceptedAnswer: { '@type': 'Answer', text: "20% points bonus on stays, 5th Night Free on award stays, points don't expire with status." },
        },
        {
          '@type': 'Question',
          name   : 'Earn Gold Status?',
          acceptedAnswer: { '@type': 'Answer', text: "Yes, by spending $20k/year (often inefficient)." },
        },
         {
          '@type': 'Question',
          name   : 'Hilton Point Value?',
          acceptedAnswer: { '@type': 'Answer', text: "Around 0.5-0.6 cents each." },
        },
         {
          '@type': 'Question',
          name   : 'Good for Everyday Spend?',
          acceptedAnswer: { '@type': 'Answer', text: "Decent for U.S. bonus categories (5X), less competitive elsewhere (3X), value depends on using points well." },
        },
         {
          '@type': 'Question',
          name   : 'Lounge Access?',
          acceptedAnswer: { '@type': 'Answer', text: "No." },
        }
      ],
    },
    { // Copied from
      '@type' : 'Organization',
      '@id'   : `${siteUrl}#website`,
      name    : siteName,
      url     : siteUrl,
      logo    : { '@type': 'ImageObject', url: `${siteUrl}/images/logo/tci-logo-schema.png` }, // from - Ensure this logo exists
      sameAs  : [
        // 'https://www.facebook.com/TravelCardInsider', // *** REPLACE with actual ***
        // 'https://www.instagram.com/travelcardinsider', // *** REPLACE with actual ***
        // 'https://twitter.com/travelcardinsider', // *** REPLACE with actual ***
      ],
    },
  ],
};

// Adapted rating criteria based on Hilton review focus
const ratingCriteriaHilton = [
    'Hilton Stay Earning Rate (7X)',
    'US Bonus Categories (5X)',
    'No Foreign Transaction Fees',
    'Annual Fee ($0)',
    'Complimentary Silver Status (5th Night Free)',
    'Welcome Offer & Protections'
];

// TOC sections based on the Hilton review headings
const tocSectionsHilton = [
    { id: 'section-1', title: 'Card Snapshot & "Best For" Tagline' },
    { id: 'section-2', title: "Editor's Rating & Concise Verdict and High-Quality Card Image" },
    { id: 'section-3', title: 'Key Features Overview' },
    { id: 'section-4', title: 'Current Welcome Offer & Eligibility Deep Dive' },
    { id: 'section-5', title: 'Annual Fee: Why $0 Doesn\'t Mean Zero Value' },
    { id: 'section-6', title: 'Comprehensive Rewards Earning Structure' },
    { id: 'section-7', title: 'Redemption Strategies & Point/Mile Valuation' },
    { id: 'section-8', title: 'Loyalty Program Deep Dive & Partner Network Analysis' },
    { id: 'section-9', title: 'Travel-Specific Benefits & Credits (Maximization Guide - Focus on Status Path)' },
    { id: 'section-10', title: 'Travel & Purchase Protections (Insurance Explained Simply)' },
    { id: 'section-11', title: 'Security, Convenience & Tech Features' },
    { id: 'section-12', title: 'Full Spectrum of Rates & Fees (Transparency is Key)' },
    { id: 'section-13', title: 'Credit Score Guidance & Application Insights' },
    { id: 'section-14', title: '"Is This Card Your Perfect Travel Companion?" (Detailed User Profiling)' },
    { id: 'section-15', title: 'Unbiased Pros & Cons (Comprehensive & Balanced)' },
    { id: 'section-16', title: 'Head-to-Head: How It Stacks Up Against Key Competitors' },
    { id: 'section-17', title: 'Exclusive Expert Tips & Hidden Value Unlocked' },
    { id: 'section-18', title: 'Aggregated User Sentiment & Real-World Experiences and Real-Life Spend Examples / Estimated Value' },
    { id: 'section-19', title: '"The Final Takeaway": Authoritative Recommendation & Alternatives' },
    { id: 'section-20', title: 'Card-Specific Frequently Asked Questions (FAQs)' },
  ];

// DraggableTableWrapper component copied directly from
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
      e.preventDefault();
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
    el.addEventListener('touchstart', startDrag, { passive: false });
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
function HiltonHonorsAmexReviewPage() {
  // State and effect hooks copied from
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
      authorRef.current.tooltipTimeoutId = timerId;
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
      };
  }, [showAuthorBioTooltip, authorRef, authorTooltipRef, showRatingInfo, ratingTooltipRef]);


  return (
    <>
      {/* Head component structure copied from, updated with reviewDataHilton */}
      <Head>
        <title>{reviewDataHilton.title}</title>
        <meta name="description" content={reviewDataHilton.description} />
        <meta name="keywords" content={reviewDataHilton.keywords} />
        <meta name="author" content={reviewDataHilton.author.name} /> {/* *** PLACEHOLDER *** */}
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="robots" content="index,follow,max-image-preview:large" />
        <link rel="canonical" href={pageUrlFull} />
        <link rel="alternate" href={pageUrlFull} hreflang="en-us" />
        <link rel="preload" as="image" href={reviewDataHilton.imageUrl} /> {/* *** PLACEHOLDER *** */}
        {/* Preload author images - *** PLACEHOLDER *** */}
        <link rel="preload" as="image" href={reviewDataHilton.author.imageUrl} />
        <link rel="preload" as="image" href={reviewDataHilton.author.tooltipImageUrl} />
        <meta name="geo.region" content="US" />
        <meta name="geo.placename" content="United States" />
        <meta name="language" content="en-US" />
        <meta name="distribution" content="US" />
        {[ // Font preloads copied from
          '/fonts/inter-v18-latin-regular.woff2',
          '/fonts/inter-v18-latin-600.woff2',
          '/fonts/inter-v18-latin-700.woff2',
          '/fonts/Roboto_Condensed-Regular.ttf',
          '/fonts/Roboto_Condensed-Bold.ttf',
          '/fonts/PlayfairDisplay-Regular.ttf',
          '/fonts/Playfair-Display-Bold.ttf',
        ].map((f) => (
          <link key={f} rel="preload" href={f} as="font" type={f.endsWith('woff2') ? 'font/woff2' : 'font/ttf'} crossOrigin="anonymous" />
        ))}
        <meta property="og:type"        content="article" />
        <meta property="og:locale"      content="en_US" />
        <meta property="og:site_name"   content={siteName} />
        <meta property="og:title"       content={reviewDataHilton.title} />
        <meta property="og:description" content={reviewDataHilton.description} />
        <meta property="og:url"         content={pageUrlFull} />
        <meta property="og:image"       content={reviewDataHilton.imageUrl} /> {/* *** PLACEHOLDER *** */}
        <meta property="og:image:width" content={String(reviewDataHilton.imageWidth)} /> {/* *** PLACEHOLDER *** */}
        <meta property="og:image:height" content={String(reviewDataHilton.imageHeight)} /> {/* *** PLACEHOLDER *** */}
        <meta property="article:publisher" content={`https://www.facebook.com/${siteName}`} /> {/* from */}
        <meta property="article:section"       content="Credit Card Reviews" />
        <meta property="article:published_time" content={publishDate} /> {/* *** PLACEHOLDER *** */}
        <meta property="article:modified_time"  content={updateDate} /> {/* *** PLACEHOLDER *** */}
        <meta property="article:author" content={reviewDataHilton.author.name} /> {/* *** PLACEHOLDER *** */}
        {reviewDataHilton.keywords.split(',').map(keyword => (
            <meta property="article:tag" content={keyword.trim()} key={keyword.trim()} />
        ))}
        <meta name="twitter:card"        content="summary_large_image" />
        {/* <meta name="twitter:site" content="@YourTwitterHandle" /> */} {/* from */}
        <meta name="twitter:title"       content={reviewDataHilton.title} />
        <meta name="twitter:description" content={reviewDataHilton.description} />
        <meta name="twitter:image"       content={reviewDataHilton.imageUrl} /> {/* *** PLACEHOLDER *** */}
        {/* Favicon links copied from */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredDataOptimized) }} />
      </Head>

      <main>
        {/* Layout structure copied from */}
        <div className={styles.reviewPageLayout}>
          <div className={styles.mainContentArea}>
            {/* Hero Section structure copied from, content updated */}
            <section className={styles.heroSection}>
              <div className={styles.heroTextContainer}>
                <h1 className={styles.heroTitle}>
                  {reviewDataHilton.h1Content}
                </h1>
                 {/* Author Section structure copied from, using reviewDataHilton - *** PLACEHOLDER: Update Author Data *** */}
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
                        src={reviewDataHilton.author.imageUrl}
                        alt={`${reviewDataHilton.author.name} headshot`}
                        width={reviewDataHilton.author.imageWidth}
                        height={reviewDataHilton.author.imageHeight}
                        className={styles.authorImageSmall}
                        priority
                    />
                    <div className={styles.authorInfoBlock}>
                        <div className={styles.authorNameLine}>
                            <span className={styles.authorPrefix}>By</span>
                            <span className={styles.authorName}>{reviewDataHilton.author.name}</span>
                        </div>
                        <span className={styles.authorTitle}>{reviewDataHilton.author.title}</span>
                        {updateDate && (
                            <time dateTime={updateDate} className={styles.authorLastEdited}>
                                Last updated: {new Date(updateDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                            </time>
                        )}
                        {reviewDataHilton.author.socialLinks && (
                            <div className={styles.authorSocialLinks}>
                                {reviewDataHilton.author.socialLinks.linkedin && (
                                    <a href={reviewDataHilton.author.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={styles.socialIconLink}>
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"> {/* Inline SVG from */}
                                           <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                                        </svg>
                                    </a>
                                )}
                                {reviewDataHilton.author.socialLinks.twitter && (
                                    <a href={reviewDataHilton.author.socialLinks.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter" className={styles.socialIconLink}>
                                         <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"> {/* Inline SVG from */}
                                           <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-.422.724-.665 1.56-.665 2.452 0 1.697.864 3.198 2.18 4.078-.8-.025-1.555-.247-2.227-.616v.054c0 2.37 1.683 4.333 3.91 4.78-.426.116-.874.174-1.337.174-.31 0-.611-.03-.904-.085.622 1.936 2.421 3.338 4.553 3.377-1.672 1.309-3.781 2.088-6.072 2.088-.394 0-.784-.023-1.169-.069 2.16 1.389 4.723 2.202 7.482 2.202 8.979 0 13.897-7.446 13.897-13.898 0-.21 0-.42-.015-.63.953-.689 1.778-1.56 2.433-2.525z"/>
                                        </svg>
                                    </a>
                                )}
                                {reviewDataHilton.author.socialLinks.email && (
                                    <a href={`mailto:${reviewDataHilton.author.socialLinks.email}`} aria-label="Email" className={styles.socialIconLink}>
                                         <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"> {/* Inline SVG from */}
                                            <path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"/>
                                         </svg>
                                    </a>
                                )}
                            </div>
                        )}
                    </div>
                    {/* Author Tooltip structure copied from - *** PLACEHOLDER: Update Author Data *** */}
                    {showAuthorBioTooltip && (
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
                                    src={reviewDataHilton.author.tooltipImageUrl}
                                    alt={`${reviewDataHilton.author.name} headshot`}
                                    width={reviewDataHilton.author.tooltipImageWidth}
                                    height={reviewDataHilton.author.tooltipImageHeight}
                                    className={styles.authorTooltipImage}
                                 />
                                 <div className={styles.authorTooltipInfo}>
                                     <span className={styles.authorTooltipName}>{reviewDataHilton.author.name}</span>
                                     <span className={styles.authorTooltipTitle}>{reviewDataHilton.author.title}</span>
                                 </div>
                               </div>
                               {reviewDataHilton.author.expertise && reviewDataHilton.author.expertise.length > 0 && (
                                 <div className={styles.authorTooltipExpertise}>
                                     <strong>Expertise</strong>
                                     <ul>
                                         {reviewDataHilton.author.expertise.map(area => <li key={area}>{area}</li>)}
                                     </ul>
                                 </div>
                               )}
                               <p className={styles.authorTooltipBioSnippet}>{reviewDataHilton.author.bioSnippet}</p>
                               {reviewDataHilton.author.fullBioLink && (
                                   <Link href={reviewDataHilton.author.fullBioLink} legacyBehavior>
                                       <a className={styles.authorTooltipBioLink}>
                                           See full bio
                                       </a>
                                   </Link>
                               )}
                               {reviewDataHilton.author.socialLinks && (
                                    <div className={styles.authorTooltipSocials}>
                                        {reviewDataHilton.author.socialLinks.linkedin && (
                                             <a href={reviewDataHilton.author.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={styles.socialIconLink}>
                                                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                                             </a>
                                         )}
                                         {reviewDataHilton.author.socialLinks.twitter && (
                                             <a href={reviewDataHilton.author.socialLinks.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter" className={styles.socialIconLink}>
                                                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-.422.724-.665 1.56-.665 2.452 0 1.697.864 3.198 2.18 4.078-.8-.025-1.555-.247-2.227-.616v.054c0 2.37 1.683 4.333 3.91 4.78-.426.116-.874.174-1.337.174-.31 0-.611-.03-.904-.085.622 1.936 2.421 3.338 4.553 3.377-1.672 1.309-3.781 2.088-6.072 2.088-.394 0-.784-.023-1.169-.069 2.16 1.389 4.723 2.202 7.482 2.202 8.979 0 13.897-7.446 13.897-13.898 0-.21 0-.42-.015-.63.953-.689 1.778-1.56 2.433-2.525z"/></svg>
                                             </a>
                                         )}
                                         {reviewDataHilton.author.socialLinks.email && (
                                             <a href={`mailto:${reviewDataHilton.author.socialLinks.email}`} aria-label="Email" className={styles.socialIconLink}>
                                                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"/></svg>
                                             </a>
                                         )}
                                    </div>
                                )}
                        </div>
                    )}
                </div>
                <p className={styles.heroSubtitle}>
                  A Comprehensive Review for US Travelers seeking no-fee Hilton perks.
                </p>
                {/* CTA buttons copied from, links updated */}
                <div className={styles.heroCtaContainer}>
                  <div>
                    <a
                      href={reviewDataHilton.applyLink} // *** PLACEHOLDER ***
                      target="_blank"
                      rel="noopener noreferrer sponsored"
                      className={`${styles.applyNowButton} ${styles.heroApplyButton}`}
                    >
                      Apply Securely Now
                    </a>
                    <span className={styles.heroApplyButtonDisclaimer}>
                      on American Express' official site
                    </span>
                  </div>
                  <Link href="#section-3" legacyBehavior>
                    <a className={styles.heroSecondaryLink}>View Key Features</a>
                  </Link>
                </div>
              </div>
              {/* Hero Image section copied from, data updated */}
              <div className={styles.heroImageContainer}>
                <div className={styles.cardImageContainer}>
                  <Image
                    src={reviewDataHilton.imageUrl} // *** PLACEHOLDER ***
                    alt={reviewDataHilton.cardName}
                    width={reviewDataHilton.imageWidth} // *** PLACEHOLDER ***
                    height={reviewDataHilton.imageHeight} // *** PLACEHOLDER ***
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
                    {siteName} Rating: <strong>{reviewDataHilton.ratingValue.toFixed(1)}</strong>/10
                    {showRatingInfo && (
                      <RatingTooltip
                        ref={ratingTooltipRef}
                        ratingValue={reviewDataHilton.ratingValue}
                        ratingCriteria={ratingCriteriaHilton} // Use Hilton criteria
                        onClose={() => setShowRatingInfo(false)}
                      />
                    )}
                  </span>
                  <div className={styles.starRating} title={`Rated ${reviewDataHilton.ratingValue} out of 10 stars`}>
                      ★★★★★
                      <span className={styles.filledStars} style={{ '--rating': `${(reviewDataHilton.ratingValue / 10) * 100}%` }}>
                        ★★★★★
                      </span>
                  </div>
                </div>
                 <div className={styles.ratingDescription}>
                    <i>{reviewDataHilton.cardName}: {reviewDataHilton.description}</i>
                 </div>
              </div>
            </section>

            {/* Main review content area */}
            <div className={styles.reviewContainer}>
              <article>
                {/* Summary Box structure copied from, content updated */}
                <header className={styles.reviewHeader}>
                    <div className={styles.summaryBox} id="summaryBoxTitle">
                        <h2 className={styles.summaryBoxTitle}>{reviewDataHilton.cardName}: Key Insights</h2>
                        <div className={styles.summaryGrid}>
                            <div className={styles.summaryItem}>
                                <span className={styles.summaryIcon}><IconGift /></span>
                                <span className={styles.summaryLabel}>Welcome Offer:</span>
                                <span className={styles.summaryValue}>Typically 80k points after $2k spend in 6 months.</span>
                            </div>
                            <div className={styles.summaryItem}>
                                <span className={styles.summaryIcon}><IconStar /></span>
                                <span className={styles.summaryLabel}>Annual Fee:</span>
                                <span className={styles.summaryValue}>${reviewDataHilton.annualFee}</span>
                            </div>
                            <div className={styles.summaryItem}>
                                <span className={styles.summaryIcon}><IconX /></span> {/* Reused icon */}
                                <span className={styles.summaryLabel}>Top Earning:</span>
                                <span className={styles.summaryValue}>7X at Hilton; 5X at US Restaurants, Supermarkets, Gas Stations.</span>
                            </div>
                            <div className={styles.summaryItem}>
                                <span className={styles.summaryIcon}><IconCheck /></span> {/* Reused icon */}
                                <span className={styles.summaryLabel}>Key Benefit:</span>
                                <span className={styles.summaryValue}>Complimentary Hilton Honors Silver Status (inc. 5th Night Free).</span>
                            </div>
                            <div className={styles.summaryItem} data-full-width="true">
                                <span className={styles.summaryIcon}><IconPlus /></span>
                                <span className={styles.summaryLabel}>Best For:</span>
                                <span className={styles.summaryValue}>Occasional Hilton Guests Seeking No-Fee Status Perks and Point Earnings.</span>
                            </div>
                        </div>
                        <div className={styles.summaryBoxActions}>
                            <a href={reviewDataHilton.ratesLink} className={styles.summaryRatesLink} target="_blank" rel="noopener noreferrer sponsored">
                                See Card Rates & Fees {/* *** PLACEHOLDER *** */}
                            </a>
                             <a href='/rewards-compare' className={`${styles.heroRewardsCalculator} ${styles.summaryButton}`} target="_blank" rel="noopener noreferrer sponsored">
                                Rewards Calculator {/* Copied from */}
                            </a>
                        </div>
                    </div>
                </header>

                {/* Review sections based on Hilton text */}
                <section id="section-1" className={styles.reviewSection}>
                  <h2>1. Card Snapshot &amp; "Best For" Tagline</h2>
                  <p>Think of the Hilton Honors American Express Card as your straightforward entry into Hilton rewards, minus the annual fee. It’s the collaboration between Amex and Hilton designed for travelers who enjoy Hilton properties occasionally and appreciate earning points without a yearly cost. This isn't the card for high-flyers seeking luxury; it's the practical starting point. It grants you access to the Hilton Honors program, lets you earn points on hotel stays and everyday U.S. spending (like groceries and gas), and gives you automatic Silver status perks. It’s built for the traveler who values simplicity and savings.</p>
                  <p><strong>Best For:</strong> Occasional Hilton Guests Seeking No-Fee Status Perks and Point Earnings.</p>
                </section>

                <section id="section-2" className={styles.reviewSection}>
                  <h2>2. Editor's Rating &amp; Concise Verdict and High-Quality Card Image</h2>
                  <p><strong>Editor's Rating:</strong> 3.5 / 5 Stars (translates to {reviewDataHilton.ratingValue.toFixed(1)}/10 on our scale)</p>
                  <p><strong>Concise Verdict:</strong> The Hilton Honors American Express Card is a solid, reliable choice, particularly if you stay at Hilton properties sometimes and strongly prefer avoiding annual fees. Getting automatic Silver status is a nice perk, especially for the 5th Night Free benefit on award stays. Earning extra points at U.S. supermarkets, restaurants, and gas stations helps turn daily spending into future travel. Plus, no foreign transaction fees is always welcome for trips abroad. The main trade-offs? Hilton points aren't the most valuable currency, and you won't find premium travel credits or lounge access. It’s a dependable, low-risk introduction to Hilton Honors for the budget-conscious traveler.</p>
                  <div className={styles.cardImageContainer2}>
                    {/* *** PLACEHOLDER: Add actual card image *** */}
                    <Image
                        src={reviewDataHilton.imageUrl} // Placeholder
                        alt={`${reviewDataHilton.cardName} visual`}
                        width={645} // Placeholder from
                        height={406} // Placeholder from
                        className={styles.inlineCardImage}
                    />
                     <p>(Imagine a clear image of the Hilton Honors American Express Card, emphasizing its connection to both Amex and Hilton without overstating luxury.)</p>
                  </div>
                 </section>

                {/* CTA Section copied from, links updated */}
                <section id="cta-hilton-amex" className={styles.ctaSection}>
                  <h2>Interested in the <b>{reviewDataHilton.cardName}</b>?</h2>
                  <div className={styles.ctaButtons}>
                    <a href={reviewDataHilton.applyLink} className={`${styles.btn} ${styles.btnApply}`} title="From card issuer's secure site" target="_blank" rel="noopener noreferrer sponsored">Apply Now</a> {/* *** PLACEHOLDER *** */}
                    <a href={reviewDataHilton.ratesLink} className={`${styles.btn} ${styles.btnRates}`} target="_blank" rel="noopener noreferrer sponsored">See Rates & Fees</a> {/* *** PLACEHOLDER *** */}
                  </div>
                </section>

                <section id="section-3" className={styles.reviewSection}>
                  <h2>3. Key Features Overview</h2>
                  <p>What makes this no-fee card stand out? Here are the core features:</p>
                  {/* Using featureList style from */}
                  <ul className={styles.featureList}>
                    <li>$0 Annual Fee: Keep the card year after year without paying a membership fee. This removes the pressure to constantly justify its cost.</li>
                    <li>Complimentary Hilton Honors™ Silver Status: You're automatically granted Silver status, providing enhanced point earnings on stays and the valuable 5th Night Free benefit on point redemptions of 5+ nights.</li>
                    <li>Bonus Points Earning: Earn 7X points per dollar on eligible Hilton purchases. Get 5X points per dollar at U.S. restaurants, U.S. supermarkets, and U.S. gas stations. All other eligible purchases earn 3X points per dollar.</li>
                    <li>No Foreign Transaction Fees: Avoid the typical ~3% fee on purchases made outside the United States, saving you money on international trips.</li>
                  </ul>
                   <p>The combination of no annual fee and no foreign transaction fees is a significant advantage, making it a cost-effective option even for infrequent international travelers who might stay at a Hilton property abroad.</p>
                </section>

                <section id="section-4" className={styles.reviewSection}>
                  <h2>4. Current Welcome Offer & Eligibility Deep Dive</h2>
                  <p>New cardmembers can often snag a welcome bonus. A typical offer is 80,000 Hilton Honors Bonus Points after spending $2,000 on eligible purchases within the first 6 months of opening the card.</p>
                  <p>This offer is generally accessible, requiring around $333 in monthly spending over six months – achievable for many through regular expenses. Those 80,000 points could be worth roughly $480 towards Hilton stays (based on a ~0.6 cpp valuation), providing substantial first-year value for a no-fee card.</p>
                  <p>Regarding eligibility, Amex usually limits welcome offers to once per lifetime per specific card. Your history with other Amex cards also matters. The "Apply with Confidence" feature is helpful, allowing you to see if you're approved before a hard credit inquiry impacts your score, letting you accept only if approved.</p>
                </section>

                <section id="section-5" className={styles.reviewSection}>
                   <h2>5. Annual Fee: Why $0 Doesn't Mean Zero Value</h2>
                  <p>The $0 annual fee is a cornerstone of this card's appeal. It means every benefit – the status, the points, the protections – is pure upside, without the need to constantly calculate if you're "breaking even" on a fee.</p>
                  <p>Beyond immediate savings, the $0 fee offers long-term strategic value. Keeping the card open helps build your credit history length, potentially boosting your score. It maintains your relationship with American Express, ensuring continued access to Amex Offers and potential upgrade opportunities. Plus, the Silver status helps prevent your Hilton points from expiring. It’s a low-maintenance way to stay connected to both Amex and Hilton.</p>
                </section>

                <section id="section-6" className={styles.reviewSection}>
                  <h2>6. Comprehensive Rewards Earning Structure</h2>
                  <p>The card rewards Hilton loyalty and common U.S. spending:</p>
                  {/* Using featureList style from */}
                  <ul className={styles.featureList}>
                    <li>7X Points: For eligible purchases charged directly with hotels and resorts within the Hilton portfolio.</li>
                    <li>5X Points: For eligible purchases at:
                        <ul>
                            <li>U.S. Restaurants (including takeout/delivery)</li>
                            <li>U.S. Supermarkets</li>
                            <li>U.S. Gas Stations</li>
                        </ul>
                    </li>
                    <li>3X Points: On all other eligible purchases.</li>
                  </ul>
                  <p>"Eligible purchases" exclude things like fees and cash advances. The key limitation is that the 5X bonus categories only apply to merchants located within the United States. Dining, grocery, or gas purchases abroad only earn 3X points.</p>
                  <p>This structure clearly favors domestic spending patterns.</p>
                </section>

                <section id="section-7" className={styles.reviewSection}>
                  <h2>7. Redemption Strategies & Point/Mile Valuation</h2>
                  <p>The most valuable way to use your Hilton Honors points is for free nights at Hilton portfolio hotels. Hilton uses dynamic pricing, so the points needed vary based on the hotel, date, and demand, similar to cash prices. Expect costs from 5,000 points to over 95,000 points per night. Use Hilton's Points Explorer tool online to estimate costs.</p>
                  <p>Hilton points are generally valued around 0.5 to 0.6 cents per point (cpp), lower than some competitors. However, the 5th Night Free benefit significantly boosts value. Available to Silver members (which you get with this card), booking a standard room award stay of 5+ consecutive nights using only points makes the fifth night free. This effectively gives a 20% points discount on 5-night stays, making longer award stays the most strategic redemption.</p>
                  <p>Other options like airline transfers or merchandise usually offer poor value and are best avoided.</p>
                </section>

                <section id="section-8" className={styles.reviewSection}>
                  <h2>8. Loyalty Program Deep Dive & Partner Network Analysis (Hilton Honors Focus)</h2>
                   <p>This card grants you automatic Hilton Honors Silver status, the first elite tier in Hilton's four-level program (Member, Silver, Gold, Diamond). Silver status provides:</p>
                   {/* Using featureList style from */}
                   <ul className={styles.featureList}>
                    <li>20% Bonus on Base Points: Earn 12 points per dollar on paid stays (10 base + 20% bonus), before card earnings.</li>
                    <li>Fifth Night Free: The most valuable Silver perk for maximizing point redemptions.</li>
                    <li>Complimentary Bottled Water: Two bottles per stay at most brands.</li>
                    <li>Elite Rollover Nights: Helps qualify for status the following year.</li>
                    <li>Points Don't Expire: Status typically prevents point expiration from inactivity.</li>
                   </ul>
                   <p>While Silver lacks the upgrades or breakfast benefits of Gold/Diamond, securing the 5th Night Free automatically is a significant advantage for a no-fee card. Hilton also partners with Lyft and dining programs for extra point earning opportunities. Airline transfers are possible but generally not recommended due to poor ratios.</p>
                 </section>

                <section id="section-9" className={styles.reviewSection}>
                  <h2>9. Travel-Specific Benefits & Credits (Maximization Guide - Focus on Status Path)</h2>
                  <p>Unlike premium Hilton cards, this no-fee version doesn't offer annual statement credits. Its main travel benefits are the no foreign transaction fees and complimentary Silver status.</p>
                  <p>The card does offer a path to Hilton Honors Gold status by spending $20,000 on eligible purchases in a calendar year. Gold status is a nice upgrade, offering an 80% point bonus, potential room upgrades, and a daily food/beverage credit (U.S.) or breakfast (international).</p>
                  <p>However, spending $20,000 just for Gold status is generally not efficient. The Hilton Honors American Express Surpass® Card ($150 annual fee) provides automatic Gold status. For most people wanting Gold, paying the fee for the Surpass card is a more direct and likely cost-effective strategy than hitting the high spending threshold on the no-fee card.</p>
                 </section>

                <section id="section-10" className={styles.reviewSection}>
                  <h2>10. Travel & Purchase Protections (Insurance Explained Simply)</h2>
                  <p>Despite the $0 fee, Amex includes valuable protections:</p>
                   {/* Using featureList style from */}
                   <ul className={styles.featureList}>
                    <li>Car Rental Loss and Damage Insurance: Provides secondary coverage against damage or theft for eligible rentals paid with the card when you decline the rental company's CDW. Secondary means it applies after your personal auto insurance.</li>
                    <li>Purchase Protection: Covers eligible new purchases against accidental damage, theft, or loss for up to 90 days (typically up to $1,000 per item).</li>
                    <li>Extended Warranty: Extends the original manufacturer's warranty by up to one additional year on eligible purchases with warranties of 5 years or less.</li>
                    <li>Global Assist® Hotline: Provides 24/7 coordination and referral services for medical, legal, or other emergencies when traveling over 100 miles from home (you pay third-party costs).</li>
                   </ul>
                   <p>These benefits offer real peace of mind and potential savings, adding tangible value often overlooked in no-fee cards.</p>
                </section>

                <section id="section-11" className={styles.reviewSection}>
                  <h2>11. Security, Convenience & Tech Features</h2>
                  <p>As an Amex card, you get access to their robust platform:</p>
                  {/* Using featureList style from */}
                  <ul className={styles.featureList}>
                    <li>American Express App/Website: Excellent tools for tracking spending, points, paying bills, and managing your account.</li>
                    <li>Amex Offers: Access targeted deals providing statement credits or bonus points at various merchants. Regularly checking and activating these offers is key to maximizing value.</li>
                    <li>Send & Split®: Split purchase costs with Venmo or PayPal users directly from the Amex App, while still earning rewards on the full amount.</li>
                    <li>Fraud Protection: $0 liability for unauthorized charges.</li>
                    <li>Account Alerts: Customizable notifications for payments, spending, etc.</li>
                    <li>Contactless Payment: Supports tap-to-pay.</li>
                  </ul>
                   <p>Engaging with these features, especially Amex Offers, enhances the card's overall value proposition.</p>
                </section>

                <section id="section-12" className={styles.reviewSection}>
                  <h2>12. Full Spectrum of Rates & Fees (Transparency is Key)</h2>
                  <p>Understanding the costs is vital. Here’s a summary (always verify with official Amex documentation):</p>
                  {/* Table structure adapted from using DraggableTableWrapper */}
                  <DraggableTableWrapper>
                    <div className={styles.tableContainer}>
                        <table className={`${styles.statsTable} ${styles.ratesFeesTable}`}>
                            <thead>
                                <tr>
                                    <th>Fee/Rate Type</th>
                                    <th>Amount/Rate</th>
                                    {/* <th>Supporting Snippets</th> */} {/* Removed as superscripts are removed */}
                                    <th>Notes</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td data-label="Fee/Rate Type">Annual Fee</td>
                                    <td data-label="Amount/Rate">$0</td>
                                    {/* <td data-label="Supporting Snippets">1</td> */}
                                    <td data-label="Notes">Core benefit.</td>
                                </tr>
                                <tr>
                                    <td data-label="Fee/Rate Type">Foreign Transaction Fee</td>
                                    <td data-label="Amount/Rate">None</td>
                                    {/* <td data-label="Supporting Snippets">1</td> */}
                                    <td data-label="Notes">Saves ~3% abroad.</td>
                                </tr>
                                <tr>
                                    <td data-label="Fee/Rate Type">Purchase APR</td>
                                    <td data-label="Amount/Rate">20.99% – 29.99% Variable</td>
                                    {/* <td data-label="Supporting Snippets">4</td> */}
                                    <td data-label="Notes">High; avoid carrying a balance.</td>
                                </tr>
                                <tr>
                                    <td data-label="Fee/Rate Type">Balance Transfer APR</td>
                                    <td data-label="Amount/Rate">20.99% – 29.99% Variable</td>
                                    {/* <td data-label="Supporting Snippets">Implied by 4</td> */}
                                    <td data-label="Notes">High ongoing rate; check for intro offers.</td>
                                </tr>
                                <tr>
                                    <td data-label="Fee/Rate Type">Balance Transfer Fee</td>
                                    <td data-label="Amount/Rate">Fee Applies</td>
                                    {/* <td data-label="Supporting Snippets">See Note</td> */}
                                    <td data-label="Notes">Typically 3% or $5. Verify terms.</td>
                                </tr>
                                <tr>
                                    <td data-label="Fee/Rate Type">Cash Advance APR</td>
                                    <td data-label="Amount/Rate">29.99% Variable</td>
                                    {/* <td data-label="Supporting Snippets">4</td> */}
                                    <td data-label="Notes">Very high; interest accrues immediately.</td>
                                </tr>
                                <tr>
                                    <td data-label="Fee/Rate Type">Cash Advance Fee</td>
                                    <td data-label="Amount/Rate">Fee Applies</td>
                                    {/* <td data-label="Supporting Snippets">See Note</td> */}
                                    <td data-label="Notes">Typically 5% or $10. Verify terms.</td>
                                </tr>
                                <tr>
                                    <td data-label="Fee/Rate Type">Late Payment Fee</td>
                                    <td data-label="Amount/Rate">Up to $40</td>
                                    {/* <td data-label="Supporting Snippets">Standard Amex</td> */}
                                    <td data-label="Notes">Pay on time! Verify terms.</td>
                                </tr>
                                <tr>
                                    <td data-label="Fee/Rate Type">Returned Payment Fee</td>
                                    <td data-label="Amount/Rate">Up to $40</td>
                                    {/* <td data-label="Supporting Snippets">Standard Amex</td> */}
                                    <td data-label="Notes">Ensure sufficient funds. Verify terms.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                  </DraggableTableWrapper>
                  <p><em>Note: Specific fee amounts need confirmation from the issuer.</em></p>
                  <p>The key takeaway: The Purchase APR is high. Carrying a balance will likely cost more in interest than you earn in rewards. Pay your statement in full each month.</p>
                </section>


                <section id="section-13" className={styles.reviewSection}>
                  <h2>13. Credit Score Guidance & Application Insights</h2>
                  <p>Approval generally requires good to excellent credit, typically a FICO score of 670 or higher. Amex considers your full credit profile, income, and relationship with them.</p>
                  <p>The "Apply with Confidence" feature is helpful, letting you see if you're approved before a hard inquiry hits your credit report. You only get the inquiry if you're approved and accept the card. While entry-level for Hilton, it's still an Amex card, so standards might be slightly higher than some other basic cards. It's best for those with established positive credit.</p>
                <Image
                        src={'/bilderboken-rlwE8f8anOc-unsplash.webp'} // Placeholder
                        alt={`${reviewDataHilton.cardName} visual`}
                        width={645} // Placeholder from
                        height={406} // Placeholder from
                        className={styles.inlineCardImage}
                    />
                </section>

                <section id="section-14" className={styles.reviewSection}>
                  <h2>14. "Is This Card Your Perfect Travel Companion?" (Detailed User Profiling)</h2>
                  <p>This card fits specific profiles well:</p>
                  {/* Using featureList style from */}
                  <h3>Ideal Users:</h3>
                  <ul className={styles.featureList}>
                    <li>The Casual Hilton Guest: Travels occasionally, often chooses mid-tier Hilton brands, values earning points and basic perks without an annual fee.</li>
                    <li>The Budget-Conscious U.S. Spender: Spends significantly on U.S. groceries, dining, and gas, wants travel rewards without a fee, and is okay with Hilton points.</li>
                    <li>The Amex Ecosystem Entrant: Wants a low-risk way to start a relationship with American Express and access Amex Offers.</li>
                  </ul>
                  <h3>Not the Best Fit For:</h3>
                  <ul className={styles.featureList}>
                    <li>Frequent Travelers Seeking Premium Perks: Needs lounge access, travel credits, higher status, or top-tier insurance.</li>
                    <li>Hotel Brand Agnostics: Doesn't stay loyal to Hilton, limiting point redemption value.</li>
                    <li>Heavy International Spenders: Misses out on 5X bonus categories outside the U.S.</li>
                    <li>Rewards Maximizers: Prefers higher-value flexible points or straightforward cash back.</li>
                  </ul>
                  <p>Honesty about your travel and spending habits is key to determining if this card aligns with your needs.</p>
                </section>

                <section id="section-15" className={styles.reviewSection}>
                  <h2>15. Unbiased Pros & Cons (Comprehensive & Balanced)</h2>
                  <p>Let's weigh the good against the not-so-good:</p>
                  {/* Pros/Cons structure copied from */}
                  <div className={styles.prosConsContainer}>
                    <div className={styles.prosBox}>
                        <h3>Pros:</h3>
                        <ul className={styles.featureList}>
                            <li>$0 Annual Fee: Easy to keep long-term.</li>
                            <li>Complimentary Silver Status: Key perk is the 5th Night Free.</li>
                            <li>Strong 7X Earning at Hilton: Rewards brand loyalty.</li>
                            <li>Solid 5X U.S. Bonus Categories: Covers common spending.</li>
                            <li>No Foreign Transaction Fees: Saves money abroad.</li>
                            <li>Access to Amex Offers: Potential for extra savings/points.</li>
                            <li>Included Protections: Car rental insurance, purchase protection, extended warranty add value.</li>
                            <li>Attainable Welcome Offer: Often has reasonable requirements.</li>
                        </ul>
                    </div>
                    <div className={styles.consBox}>
                        <h3>Cons:</h3>
                        <ul className={styles.featureList}>
                            <li>Lower Point Valuation: Hilton points worth ~0.6 cpp.</li>
                            <li>U.S. Restriction on 5X Categories: Limits earning abroad.</li>
                            <li>Basic Silver Perks: Beyond 5th Night Free, benefits are minimal.</li>
                            <li>Inefficient Path to Gold Status: $20k spend is very high.</li>
                            <li>High APR: Costly if you carry a balance.</li>
                            <li>Requires Hilton Preference: Points best used within Hilton.</li>
                            <li>Everyday Return Can Be Matched: Effective return (~3% on 5X, ~1.8% on 3X) might not beat cash back or flexible points for some spenders.</li>
                        </ul>
                    </div>
                  </div>
                  <p>The core trade-off is accepting lower point value and flexibility for no annual fee and solid Hilton/U.S. spending perks.</p>
                </section>

                <section id="section-16" className={styles.reviewSection}>
                  <h2>16. Head-to-Head: How It Stacks Up Against Key Competitors</h2>
                  <p>Compared to other $0 fee hotel/travel cards:</p>
                   {/* Table structure adapted from using DraggableTableWrapper */}
                  <DraggableTableWrapper>
                    <div className={styles.tableContainer}>
                        <table className={`${styles.statsTable} ${styles.ratesFeesTable}`}>
                            <thead>
                                <tr>
                                    <th>Feature</th>
                                    <th>Hilton Honors Amex</th>
                                    <th>Marriott Bonvoy Bold (Chase)</th>
                                    <th>IHG One Rewards Traveler (Chase)</th>
                                    <th>Wyndham Rewards Earner (Barclays)</th>
                                    <th>Capital One VentureOne</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td data-label="Feature">Annual Fee</td>
                                    <td data-label="Hilton Honors Amex">$0</td>
                                    <td data-label="Marriott Bonvoy Bold (Chase)">$0</td>
                                    <td data-label="IHG One Rewards Traveler (Chase)">$0</td>
                                    <td data-label="Wyndham Rewards Earner (Barclays)">$0</td>
                                    <td data-label="Capital One VentureOne">$0</td>
                                </tr>
                                <tr>
                                    <td data-label="Feature">Hotel Stay Earning</td>
                                    <td data-label="Hilton Honors Amex">7X Hilton</td>
                                    <td data-label="Marriott Bonvoy Bold (Chase)">Up to 14X Marriott</td>
                                    <td data-label="IHG One Rewards Traveler (Chase)">Up to 17X IHG</td>
                                    <td data-label="Wyndham Rewards Earner (Barclays)">5X Wyndham</td>
                                    <td data-label="Capital One VentureOne">5X miles via C1 Portal</td>
                                </tr>
                                <tr>
                                    <td data-label="Feature">Dining Earning</td>
                                    <td data-label="Hilton Honors Amex">5X (U.S. only)</td>
                                    <td data-label="Marriott Bonvoy Bold (Chase)">2X</td>
                                    <td data-label="IHG One Rewards Traveler (Chase)">3X</td>
                                    <td data-label="Wyndham Rewards Earner (Barclays)">2X</td>
                                    <td data-label="Capital One VentureOne">1.25X miles</td>
                                </tr>
                                <tr>
                                    <td data-label="Feature">Grocery Earning</td>
                                    <td data-label="Hilton Honors Amex">5X (U.S. only)</td>
                                    <td data-label="Marriott Bonvoy Bold (Chase)">2X</td>
                                    <td data-label="IHG One Rewards Traveler (Chase)">2X (Other)</td>
                                    <td data-label="Wyndham Rewards Earner (Barclays)">2X</td>
                                    <td data-label="Capital One VentureOne">1.25X miles</td>
                                </tr>
                                <tr>
                                    <td data-label="Feature">Gas Earning</td>
                                    <td data-label="Hilton Honors Amex">5X (U.S. only)</td>
                                    <td data-label="Marriott Bonvoy Bold (Chase)">1X (Other)</td>
                                    <td data-label="IHG One Rewards Traveler (Chase)">3X</td>
                                    <td data-label="Wyndham Rewards Earner (Barclays)">5X</td>
                                    <td data-label="Capital One VentureOne">1.25X miles</td>
                                </tr>
                                <tr>
                                    <td data-label="Feature">Key Status Perk</td>
                                    <td data-label="Hilton Honors Amex">Hilton Silver (5th Night Free)</td>
                                    <td data-label="Marriott Bonvoy Bold (Chase)">Marriott Silver</td>
                                    <td data-label="IHG One Rewards Traveler (Chase)">IHG Silver</td>
                                    <td data-label="Wyndham Rewards Earner (Barclays)">Wyndham Gold</td>
                                    <td data-label="Capital One VentureOne">None</td>
                                </tr>
                                <tr>
                                    <td data-label="Feature">Est. Point Value (cpp)</td>
                                    <td data-label="Hilton Honors Amex">~0.006</td>
                                    <td data-label="Marriott Bonvoy Bold (Chase)">~0.008</td>
                                    <td data-label="IHG One Rewards Traveler (Chase)">~0.005</td>
                                    <td data-label="Wyndham Rewards Earner (Barclays)">~0.011</td>
                                    <td data-label="Capital One VentureOne">~0.01+</td>
                                </tr>
                                <tr>
                                    <td data-label="Feature">Foreign Transaction Fee</td>
                                    <td data-label="Hilton Honors Amex">$0</td>
                                    <td data-label="Marriott Bonvoy Bold (Chase)">$0</td>
                                    <td data-label="IHG One Rewards Traveler (Chase)">$0</td>
                                    <td data-label="Wyndham Rewards Earner (Barclays)">$0</td>
                                    <td data-label="Capital One VentureOne">$0</td>
                                </tr>
                                {/* Removed Supporting Snippets row */}
                            </tbody>
                        </table>
                    </div>
                  </DraggableTableWrapper>
                  <p><em>Point values/earning rates are estimates/typical.</em></p>
                  <p>Analysis: The Hilton Amex competes well with its high 5X U.S. bonus categories and valuable Silver status (5th Night Free). However, Wyndham Earner offers higher Gold status and 5X on gas globally. IHG Traveler includes bills in its 3X category. Marriott Bold earns more valuable points (lower rate). VentureOne offers transferable miles. The best choice depends on preferred hotel brand, spending patterns (U.S. vs. global), and value placed on status vs. flexibility.</p>
                </section>

                <section id="section-17" className={styles.reviewSection}>
                   <h2>17. Exclusive Expert Tips & Hidden Value Unlocked</h2>
                  <p>Maximize your card with these strategies:</p>
                  {/* Using featureList style from */}
                  <ul className={styles.featureList}>
                    <li>Hunt Amex Offers: Regularly check for and activate targeted deals for statement credits or bonus points. This adds significant hidden value.</li>
                    <li>Plan for the 5th Night Free: Structure award stays in 5-night increments whenever feasible to get a 20% points discount.</li>
                    <li>Stack Hilton Promotions: Always register for Hilton Honors bonus point promotions before stays. They stack with card and status earnings.</li>
                    <li>Pool Points: Combine points with up to 10 friends or family members for free to reach redemptions faster.</li>
                    <li>Book Direct with Hilton: Always use Hilton's site/app to book stays and pay with this card to ensure points and status benefits.</li>
                    <li>Use for No Foreign Fees: If lacking another fee-free card, use this abroad to save ~3%, even if bonus categories don't apply.</li>
                    <li>Avoid the $20k Gold Chase: Spending $20k just for Gold status is usually inefficient; consider the Surpass card instead if Gold is desired.</li>
                  </ul>
                  <p>Active engagement with Amex Offers and Hilton program features is crucial.</p>
                </section>

                <section id="section-18" className={styles.reviewSection}>
                  <h2>18. Aggregated User Sentiment & Real-World Experiences and Real-Life Spend Examples / Estimated Value</h2>
                  <p>Users generally praise the $0 fee, Silver status (5th Night Free), and no foreign transaction fees. Criticisms often focus on the lower value of Hilton points and the U.S.-only 5X bonus categories. It's well-regarded by its target audience but less so by rewards maximizers.</p>
                  <h3>Example Scenario:</h3>
                   <p>A user spending $15,000 annually ($1k Hilton, $3k U.S. Restaurants, $4k U.S. Supermarkets, $2k U.S. Gas, $5k Other) could earn ~79,000 Hilton points.</p>
                  {/* Using featureList style from */}
                  <ul className={styles.featureList}>
                    <li>Base Value (@ 0.6 cpp): ~$474</li>
                    <li>vs. 2% Cash Back: $15,000 x 0.02 = $300</li>
                    <li>Potential Added Value: Using the 5th Night Free could save points worth $100+, and Amex Offers could add $50-$200+ annually.</li>
                  </ul>
                  <p>The card can outperform simple cash back, but realizing that extra value often depends on leveraging Hilton perks and Amex Offers.</p>
                </section>

                <section id="section-19" className={styles.reviewSection}>
                   <h2>19. "The Final Takeaway": Authoritative Recommendation & Alternatives</h2>
                  <p>The Hilton Honors American Express Card is a strong choice for the cost-conscious, occasional Hilton guest whose spending is primarily domestic. It delivers solid value through its $0 fee, Silver status perks (especially 5th Night Free), decent U.S. bonus categories, and lack of foreign transaction fees.</p>
                  <p>It's less suitable if you: rarely stay at Hilton, demand maximum point value/flexibility, spend heavily abroad, need premium travel benefits, or want higher elite status easily.</p>
                  <h3>Recommendation:</h3>
                  <p>Get it if you fit the target profile. Otherwise, explore alternatives:</p>
                  {/* Using featureList style from */}
                  <ul className={styles.featureList}>
                    <li>More Hilton Perks/Easier Gold: Hilton Honors Amex Surpass® Card ($150 fee).</li>
                    <li>No-Fee Flexible Rewards: Capital One VentureOne (transferable miles).</li>
                    <li>Premium Flexible Rewards: Chase Sapphire Preferred® or Capital One Venture X.</li>
                    <li>Simple Cash Back: Flat 1.5%-2% cash back cards.</li>
                    <li>Other No-Fee Hotel Cards: Marriott Bonvoy Bold®, IHG One Rewards Traveler, Wyndham Rewards Earner®.</li>
                  </ul>
                  <p>Choose based on your specific travel loyalty, spending habits, and tolerance for fees.</p>
                </section>

                 {/* FAQ Section structure copied from, content updated */}
                <section id="section-20" className={`${styles.reviewSection} ${styles.faqSection}`}>
                  <h2>20. Card-Specific Frequently Asked Questions (FAQs)</h2>
                  <div className={styles.faqContainer}>
                    <details className={styles.faqItem}>
                        <summary className={styles.faqQuestion}>Q1: Annual Fee?</summary>
                        <div className={styles.faqAnswer}><p>A: $0.</p></div>
                    </details>
                    <details className={styles.faqItem}>
                        <summary className={styles.faqQuestion}>Q2: Welcome Offer?</summary>
                        <div className={styles.faqAnswer}><p>A: Often 80k points after $2k spend in 6 months (check current offer).</p></div>
                    </details>
                    <details className={styles.faqItem}>
                        <summary className={styles.faqQuestion}>Q3: Credit Score Needed?</summary>
                        <div className={styles.faqAnswer}><p>A: Good to Excellent (typically FICO 670+).</p></div>
                    </details>
                     <details className={styles.faqItem}>
                        <summary className={styles.faqQuestion}>Q4: Foreign Transaction Fees?</summary>
                        <div className={styles.faqAnswer}><p>A: None.</p></div>
                    </details>
                    <details className={styles.faqItem}>
                        <summary className={styles.faqQuestion}>Q5: Main Silver Benefits?</summary>
                        <div className={styles.faqAnswer}><p>A: 20% points bonus on stays, 5th Night Free on award stays, points don't expire with status.</p></div>
                    </details>
                    <details className={styles.faqItem}>
                        <summary className={styles.faqQuestion}>Q6: Earn Gold Status?</summary>
                        <div className={styles.faqAnswer}><p>A: Yes, by spending $20k/year (often inefficient).</p></div>
                    </details>
                    <details className={styles.faqItem}>
                        <summary className={styles.faqQuestion}>Q7: Hilton Point Value?</summary>
                        <div className={styles.faqAnswer}><p>A: Around 0.5-0.6 cents each.</p></div>
                    </details>
                     <details className={styles.faqItem}>
                        <summary className={styles.faqQuestion}>Q8: Good for Everyday Spend?</summary>
                        <div className={styles.faqAnswer}><p>A: Decent for U.S. bonus categories (5X), less competitive elsewhere (3X), value depends on using points well.</p></div>
                    </details>
                     <details className={styles.faqItem}>
                        <summary className={styles.faqQuestion}>Q9: Lounge Access?</summary>
                        <div className={styles.faqAnswer}><p>A: No.</p></div>
                    </details>
                  </div>
                </section>

                {/* E-A-T Section structure copied from, content updated */}
                <section id="eat-expertise-authority-trustworthiness" className={`${styles.reviewSection} ${styles.eatSection}`}>
                    <h2 dangerouslySetInnerHTML={{ __html: "Our Commitment to E-A-T: Expertise, Authority &amp; Trustworthiness"}}></h2>
                    <p>At <strong>{siteName}</strong>, we ensure our content meets the highest standards.</p>
                     <p>
                      This review of the <strong>{reviewDataHilton.cardName}</strong> is based on thorough research of the card's features, terms, and conditions as of {updateDate}, as well as comparisons to other cards in the market, to provide you with a reliable and comprehensive guide. {/* *** PLACEHOLDER: Update date *** */}
                    </p>
                </section>

              </article>
            </div>
          </div>

          {/* Sidebar structure copied from */}
          <aside className={styles.sidebarArea}>
            <TableOfContents sections={tocSectionsHilton} /> {/* Use Hilton TOC sections */}
          </aside>
        </div>
      </main>
    </>
  );
}

export default HiltonHonorsAmexReviewPage; // Updated export name