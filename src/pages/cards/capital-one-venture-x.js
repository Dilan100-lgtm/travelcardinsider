/* ------------------------------------------------------------------
    File:  pages/reviews/capital-one-venture-x.js
    Route: https://www.travelcardinsider.com/reviews/capital-one-venture-x
------------------------------------------------------------------- */

import React, { useState, useEffect, useCallback, useRef } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import styles from '../../styles/ReviewPage.module.css'; // Assuming same CSS module

import TableOfContents    from '../../components/TableOfContents'; // Assuming same TOC component
import IconGift from '../../components/icons/icon-gift.svg'; // Assuming generic icons are okay
import IconStar from '../../components/icons/icon-star.svg';
import IconCheck from '../../components/icons/icon-Credit Card.svg';
import IconX from '../../components/icons/icon-Star + Arrow Up.svg';
import IconPlus from '../../components/icons/icon-target.svg';

const RatingTooltip = dynamic(() => import('../../components/RatingTooltip'), { ssr: false, loading: () => null });

/* ──────────────────────────────
    CONSTANTS & STATIC DATA
    ────────────────────────────── */
const siteName    = 'TravelCardInsider';
const siteUrl     = 'https://www.travelcardinsider.com';
const pagePath    = '/reviews/capital-one-venture-x'; // Updated for the new card
const pageUrlFull = `${siteUrl}${pagePath}`;
const publishDate = '2025-05-13'; // Placeholder, update as needed
const updateDate  = '2025-05-13'; // Placeholder, update as needed

const reviewDataNew = {
  cardName        : 'Capital One Venture X Rewards Credit Card',
  title           : 'Capital One Venture X Review: Focused Guide for US Travelers (2025)',
  description     : 'In-depth 2025 review of the Capital One Venture X Rewards Credit Card: premium travel benefits, $300 annual travel credit, 10,000 bonus miles annually, lounge access, and comprehensive rewards for US travelers.',
  keywords        : 'Capital One Venture X review, Venture X rewards, premium travel credit card, travel credits, airport lounge access, Capital One rewards, Visa Infinite',
  author: { // Assuming same author details as the example
      name: 'Dilan Madushanka',
      title: 'Founder & Lead Editor',
      imageUrl: '/WhatsApp Image 2025-05-12 at 4.09.58 PM.jpeg',
      imageWidth: 40,
      imageHeight: 40,
      tooltipImageUrl: '/WhatsApp Image 2025-05-12 at 4.09.58 PM.jpeg',
      tooltipImageWidth: 60,
      tooltipImageHeight: 60,
      expertise: [
          'Travel Credit Cards',
          'Rewards Programs',
          'Financial Literacy for Travel',
          'Maximizing Card Benefits',
          'Credit Card Analysis'
      ],
      bioSnippet: 'Dilan Madushanka is the founder and lead editor of TravelCardInsider.com, dedicated to demystifying credit cards and uncovering their real-world value for smarter travel.',
      fullBioLink: '/author/dilan-madushanka',
      fullBio: `Dilan Madushanka is the founder and lead editor of TravelCardInsider.com, a platform dedicated to helping everyday people make smarter decisions with travel and rewards credit cards. With a background in medicine and a deep passion for financial literacy, Dilan turned his real-world experience—navigating travel, budgeting, and rewards programs—into a mission: demystify credit cards and uncover their real-world value.\n\nAfter years of studying the fine print, testing travel benefits firsthand, and comparing hundreds of card offers, Dilan has built a site that goes beyond generic advice. He combines research, real spending scenarios, and hands-on card analysis to help readers maximize rewards and avoid costly mistakes.\n\nExperience matters—and Dilan brings a unique one. A Sri Lankan doctor by training, he took a bold leap into digital entrepreneurship to build a transparent, user-focused credit card resource from scratch. Every guide and review you read is written or edited by him with accuracy, integrity, and a deep sense of purpose.`,
      publishedStats: '6+ in-depth card reviews per week',
      testedStats: 'Over 50 credit card benefits across major brands',
      socialLinks: {
          linkedin: 'www.linkedin.com/in/dilan-madushanka-b65293365', // *** REPLACE with actual URL ***
          twitter: 'https://x.com/team_dilan', // *** REPLACE with actual URL ***
          email: 'team@travelcardinsider.com'
      }
  },
  siteName: 'TravelCardInsider',
  imageUrl        : '/venturex-cg-static-card-1000x630-2.avif', // Placeholder - replace with actual image path
  imageWidth      : 1290, // Adjust if your image has different dimensions
  imageHeight     : 812,  // Adjust if your image has different dimensions
  ratingValue     : 9.0, // Converted from 4.5/5.0
  ratingCount     : 300, // Placeholder from "Aggregated reviews"
  reviewBody      : 'Our editors evaluate the Capital One Venture X card based on its premium travel rewards, annual credits, lounge access, fees, and overall value for US travelers.',
  aprRange        : '19.99% - 29.24% variable',
  annualFee       : 395,
  applyLink       : 'https://www.capitalone.com/credit-cards/venture-x/', // Example apply link, update
  ratesLink       : 'https://www.capitalone.com/credit-cards/venture-x/', // Example rates link, update
  sku             : 'CAP1-VX-TCI-2025', // Placeholder
  mpn             : 'CAP1VX', // Placeholder
  h1Content       : "Capital One Venture X Rewards Credit Card: Your Focused Guide for US Travelers",
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
      image          : reviewDataNew.imageUrl,
      description    : reviewDataNew.description,
      sku            : reviewDataNew.sku,
      mpn            : reviewDataNew.mpn,
      brand          : { '@type': 'Brand', name: 'Capital One' },
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
            description          : 'Annual fee',
          },
          {
            '@type'              : 'PriceSpecification',
            priceCurrency        : 'USD',
            description          : `Purchase APR: ${reviewDataNew.aprRange}`,
          },
        ],
        seller: { '@type': 'Organization', name: 'Capital One' },
      },
      review: { '@id': `${pageUrlFull}#editorReview` },
    },
    {
      '@type'         : 'Review',
      '@id'           : `${pageUrlFull}#editorReview`,
      name            : `${reviewDataNew.cardName} – Review Updated ${updateDate}`,
      itemReviewed    : { '@id': `${pageUrlFull}#product` },
      reviewBody      : reviewDataNew.reviewBody,
      reviewRating    : {
        '@type'    : 'Rating',
        ratingValue : reviewDataNew.ratingValue.toString(),
        bestRating  : '10',
        worstRating : '1',
        description: `TravelCardInsider editorial rating based on 5.0 scale converted to 10.0 scale, as of ${updateDate}.`
      },
      author          : {
          '@type': 'Person',
          'name': reviewDataNew.author.name,
          'url': reviewDataNew.author.fullBioLink ? `${siteUrl}${reviewDataNew.author.fullBioLink}` : undefined
      },
      publisher       : {
        '@type' : 'Organization',
        name    : siteName,
        logo    : { '@type': 'ImageObject', url: `${siteUrl}/images/logo/tci-logo-schema.png` }, // Ensure this logo exists
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
      url       : reviewDataNew.imageUrl,
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
    { // Updated FAQs from Venture X review
      '@type'    : 'FAQPage',
      '@id'      : `${pageUrlFull}#faqs`,
      mainEntity: [
        {
          '@type': 'Question',
          name   : 'How does the $300 Capital One Travel credit work?',
          acceptedAnswer: { '@type': 'Answer', text: "Applied automatically as a discount on flights, hotels, or rentals booked via Capital One Travel, up to $300/year. Resets at anniversary." },
        },
        {
          '@type': 'Question',
          name   : 'Do authorized users get free lounge access?',
          acceptedAnswer: { '@type': 'Answer', text: 'Yes, up to four AUs ($0 fee) get their own Priority Pass Select and Capital One Lounge access with guest privileges.' },
        },
        {
          '@type': 'Question',
          name   : 'Can I transfer miles directly to AA, Delta, or United?',
          acceptedAnswer: { '@type': 'Answer', text: 'No. Use alliance partners: BA for AA, Aeroplan for United, Flying Blue for Delta.' },
        },
        {
          '@type': 'Question',
          name   : 'Is the $395 annual fee worth it?',
          acceptedAnswer: { '@type': 'Answer', text: 'Yes, for most who travel 1-2x/year. The $300 credit + 10k anniversary miles ($100+ value) cover it. Lounge access and other perks add more value.' },
        },
        {
          '@type': 'Question',
          name   : 'What credit score is needed?',
          acceptedAnswer: { '@type': 'Answer', text: '"Excellent" credit. Aim for FICO 740+. C1 also eyes income, recent inquiries, and open accounts.' },
        },
        {
          '@type': 'Question',
          name   : 'Foreign transaction fees?',
          acceptedAnswer: { '@type': 'Answer', text: 'None.' },
        },
        {
          '@type': 'Question',
          name   : 'How does cell phone protection work?',
          acceptedAnswer: { '@type': 'Answer', text: 'Pay monthly bill with Venture X for reimbursement (up to $800/claim, $50 deductible) for covered theft/damage. Terms apply.' },
        },
         {
          '@type': 'Question',
          name   : 'How to get/use Priority Pass?',
          acceptedAnswer: { '@type': 'Answer', text: 'Enroll via link in C1 online account after getting card. Present Priority Pass card (digital/physical) and same-day boarding pass for lounge access (you + 2 guests). Non-lounge experiences (restaurants) not included.' },
        }
      ],
    },
    {
      '@type' : 'Organization',
      '@id'   : `${siteUrl}#website`,
      name    : siteName,
      url     : siteUrl,
      logo    : { '@type': 'ImageObject', url: `${siteUrl}/images/logo/tci-logo-schema.png` },
      sameAs  : [
        // 'https://www.facebook.com/TravelCardInsider',
        // 'https://www.instagram.com/travelcardinsider',
        // 'https://twitter.com/travelcardinsider',
      ],
    },
  ],
};

const ratingCriteriaOriginal = [ // These might need adjustment for Venture X
    'Annual Travel Credit Value',
    'Anniversary Bonus Miles Value',
    'Rewards Earning Rate (Base & Portal)',
    'Lounge Access Quality & Scope',
    'No Foreign Transaction Fees & Other Perks',
    'Annual Fee vs. Offsettable Credits'
];

const tocSections = [ // Updated from Venture X review content
    { id: 'section-1', title: 'Card Snapshot & "Best For" Tagline' },
    { id: 'section-2', title: "Editor's Rating & Concise Verdict" },
    { id: 'section-3', title: 'Key Features' },
    { id: 'section-4', title: 'Current Welcome Offer & Eligibility Deep Dive' },
    { id: 'section-5', title: 'Annual Fee: Cost vs. Value Analysis' },
    { id: 'section-6', title: 'Comprehensive Rewards Earning Structure' },
    { id: 'section-7', title: 'Redemption Strategies & Point/Mile Valuation' },
    { id: 'section-8', title: 'Loyalty Program Deep Dive & Partner Network Analysis' },
    { id: 'section-9', title: 'Travel-Specific Benefits & Credits (Maximization Guide)' },
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
function CapitalOneVentureXReviewPage() { // Renamed component
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
      };
  }, [showAuthorBioTooltip, authorRef, authorTooltipRef, showRatingInfo, ratingTooltipRef]);

  return (
    <>
      <Head>
        <title>{reviewDataNew.title}</title>
        <meta name="description" content={reviewDataNew.description} />
        <meta name="keywords" content={reviewDataNew.keywords} />
        <meta name="author" content={reviewDataNew.author.name} />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="robots" content="index,follow,max-image-preview:large" />
        <link rel="canonical" href={pageUrlFull} />
        <link rel="alternate" href={pageUrlFull} hreflang="en-us" />
        <link rel="preload" as="image" href={reviewDataNew.imageUrl} />
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
          '/fonts/PlayfairDisplay-Regular.ttf',
          '/fonts/Playfair-Display-Bold.ttf',
        ].map((f) => (
          <link key={f} rel="preload" href={f} as="font" type={f.endsWith('woff2') ? 'font/woff2' : 'font/ttf'} crossOrigin="anonymous" />
        ))}
        <meta property="og:type"        content="article" />
        <meta property="og:locale"      content="en_US" />
        <meta property="og:site_name"   content={siteName} />
        <meta property="og:title"       content={reviewDataNew.title} />
        <meta property="og:description" content={reviewDataNew.description} />
        <meta property="og:url"         content={pageUrlFull} />
        <meta property="og:image"       content={reviewDataNew.imageUrl} />
        <meta property="og:image:width" content={String(reviewDataNew.imageWidth)} />
        <meta property="og:image:height" content={String(reviewDataNew.imageHeight)} />
        <meta property="article:publisher" content={`https://www.facebook.com/${siteName}`} />
        <meta property="article:section"       content="Credit Card Reviews" />
        <meta property="article:published_time" content={publishDate} />
        <meta property="article:modified_time"  content={updateDate} />
        <meta property="article:author" content={reviewDataNew.author.name} />
        {reviewDataNew.keywords.split(',').map(keyword => (
            <meta property="article:tag" content={keyword.trim()} key={keyword.trim()} />
        ))}
        <meta name="twitter:card"        content="summary_large_image" />
        {/* <meta name="twitter:site" content="@YourTwitterHandle" /> */}
        <meta name="twitter:title"       content={reviewDataNew.title} />
        <meta name="twitter:description" content={reviewDataNew.description} />
        <meta name="twitter:image"       content={reviewDataNew.imageUrl} />
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
                                    <a href={reviewDataNew.author.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={styles.socialIconLink}>
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                                    </a>
                                )}
                                {reviewDataNew.author.socialLinks.twitter && (
                                    <a href={reviewDataNew.author.socialLinks.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter" className={styles.socialIconLink}>
                                         <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-.422.724-.665 1.56-.665 2.452 0 1.697.864 3.198 2.18 4.078-.8-.025-1.555-.247-2.227-.616v.054c0 2.37 1.683 4.333 3.91 4.78-.426.116-.874.174-1.337.174-.31 0-.611-.03-.904-.085.622 1.936 2.421 3.338 4.553 3.377-1.672 1.309-3.781 2.088-6.072 2.088-.394 0-.784-.023-1.169-.069 2.16 1.389 4.723 2.202 7.482 2.202 8.979 0 13.897-7.446 13.897-13.898 0-.21 0-.42-.015-.63.953-.689 1.778-1.56 2.433-2.525z"/></svg>
                                    </a>
                                )}
                                {reviewDataNew.author.socialLinks.email && (
                                    <a href={`mailto:${reviewDataNew.author.socialLinks.email}`} aria-label="Email" className={styles.socialIconLink}>
                                         <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"/></svg>
                                    </a>
                                )}
                            </div>
                        )}
                    </div>
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
                                    src={reviewDataNew.author.tooltipImageUrl}
                                    alt={`${reviewDataNew.author.name} headshot`}
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
                                             <a href={reviewDataNew.author.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={styles.socialIconLink}>
                                                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                                             </a>
                                         )}
                                         {reviewDataNew.author.socialLinks.twitter && (
                                             <a href={reviewDataNew.author.socialLinks.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter" className={styles.socialIconLink}>
                                                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-.422.724-.665 1.56-.665 2.452 0 1.697.864 3.198 2.18 4.078-.8-.025-1.555-.247-2.227-.616v.054c0 2.37 1.683 4.333 3.91 4.78-.426.116-.874.174-1.337.174-.31 0-.611-.03-.904-.085.622 1.936 2.421 3.338 4.553 3.377-1.672 1.309-3.781 2.088-6.072 2.088-.394 0-.784-.023-1.169-.069 2.16 1.389 4.723 2.202 7.482 2.202 8.979 0 13.897-7.446 13.897-13.898 0-.21 0-.42-.015-.63.953-.689 1.778-1.56 2.433-2.525z"/></svg>
                                             </a>
                                         )}
                                         {reviewDataNew.author.socialLinks.email && (
                                             <a href={`mailto:${reviewDataNew.author.socialLinks.email}`} aria-label="Email" className={styles.socialIconLink}>
                                                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"/></svg>
                                             </a>
                                         )}
                                    </div>
                                )}
                        </div>
                    )}
                </div>
                <p className={styles.heroSubtitle}>
                  Let's get straight to what the Capital One Venture X Rewards Credit Card offers and if it’s the travel partner you need.
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
                      on Capital One's official site
                    </span>
                  </div>
                  <Link href="#section-3" legacyBehavior>
                    <a className={styles.heroSecondaryLink}>View Key Features</a>
                  </Link>
                </div>
              </div>
              <div className={styles.heroImageContainer}>
                <div className={styles.cardImageContainer}>
                  <Image
                    src={reviewDataNew.imageUrl} // Make sure this image exists in /public
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
                                <span className={styles.summaryValue}>75,000 bonus miles after $4,000 spend in first 3 months.</span>
                            </div>
                            <div className={styles.summaryItem}>
                                <span className={styles.summaryIcon}><IconStar /></span>
                                <span className={styles.summaryLabel}>Annual Fee:</span>
                                <span className={styles.summaryValue}>${reviewDataNew.annualFee}</span>
                            </div>
                            <div className={styles.summaryItem}>
                                <span className={styles.summaryIcon}><IconX /></span>
                                <span className={styles.summaryLabel}>Top Earning:</span>
                                <span className={styles.summaryValue}>10× miles on hotels/rental cars, 5× on flights (via Capital One Travel), 2× on everything else.</span>
                            </div>
                            <div className={styles.summaryItem}>
                                <span className={styles.summaryIcon}><IconCheck /></span>
                                <span className={styles.summaryLabel}>Key Benefit:</span>
                                <span className={styles.summaryValue}>$300 Annual Travel Credit + 10,000 Anniversary Miles.</span>
                            </div>
                            <div className={styles.summaryItem} data-full-width="true">
                                <span className={styles.summaryIcon}><IconPlus /></span>
                                <span className={styles.summaryLabel}>Best For:</span>
                                <span className={styles.summaryValue}>US Travelers seeking premium benefits, lounge access, and straightforward rewards whose annual fee is effectively covered by perks.</span>
                            </div>
                        </div>
                        <div className={styles.summaryBoxActions}>
                            <a href={reviewDataNew.ratesLink} className={styles.summaryRatesLink} target="_blank" rel="noopener noreferrer sponsored">
                                See Card Rates & Fees
                            </a>
                             <a href='/rewards-compare' className={`${styles.heroRewardsCalculator} ${styles.summaryButton}`} target="_blank" rel="noopener noreferrer sponsored">
                                Rewards Calculator
                            </a>
                        </div>
                    </div>
                </header>

                {/* Review Sections Start Here */}
                <section id="section-1" className={styles.reviewSection}>
                  <h2>1. Card Snapshot &amp; "Best For" Tagline</h2>
                  <ul className={styles.featureList}>
                    <li>Card Name: Capital One Venture X Rewards Credit Card</li>
                    <li>Issuer: Capital One</li>
                    <li>Network: Visa Infinite</li>
                    <li>Primary Audience: US Travelers seeking premium benefits.</li>
                    <li>Core Proposition: A premium travel card with significant annual credits and lounge access, coupled with straightforward rewards.</li>
                  </ul>
                  <p><strong>Best For You If:</strong> You travel regularly, value airport lounges and travel credits, prefer simple rewards, and want a card whose annual fee is effectively covered by its perks.</p>
                  <p>This card aims to deliver high-value benefits often seen with pricier competitors but with simpler earning/redeeming and a cost structure offset by tangible annual perks. Its Visa Infinite status means enhanced travel and purchase protections.</p>
                </section>

                <section id="section-2" className={styles.reviewSection}>
                  <h2>2. Editor's Rating &amp; Concise Verdict</h2>
                  <p><strong>Editor's Rating:</strong> 4.5 / 5 (Aggregated reviews and feature analysis)</p>
                  <div className={styles.cardImageContainer2}>
                    <Image
                        src={reviewDataNew.imageUrl} // Replace with actual image if different for inline
                        alt={`${reviewDataNew.cardName} visual`}
                        width={645} // Adjust as needed
                        height={406} // Adjust as needed
                        className={styles.inlineCardImage}
                    />
                    <p className={styles.imageCaption}>(Imagine a sleek, high-quality image of the metal Capital One Venture X card here)</p>
                  </div>
                  <p><strong>Concise Verdict:</strong> The Capital One Venture X offers outstanding value. Its easily redeemable credits, robust lounge access (especially for authorized users), and strong flat-rate earning make it a top premium travel card. It’s particularly good if you value simplicity and shareable benefits that cut down the real cost of owning it.</p>
                  <p>It appeals by providing core luxury travel benefits—credits largely negating the annual fee and comprehensive lounge access—without the much higher fees of cards like The Platinum Card® from American Express or Chase Sapphire Reserve®.</p>
                </section>

                <section id="cta-venture-x" className={styles.ctaSection}>
                  <h2>Interested in the <b>{reviewDataNew.cardName}</b>?</h2>
                  <div className={styles.ctaButtons}>
                    <a href={reviewDataNew.applyLink} className={`${styles.btn} ${styles.btnApply}`} title="From card issuer's secure site" target="_blank" rel="noopener noreferrer sponsored">Apply Now</a>
                    <a href={reviewDataNew.ratesLink} className={`${styles.btn} ${styles.btnRates}`} target="_blank" rel="noopener noreferrer sponsored">See Rates & Fees</a>
                  </div>
                </section>

                <section id="section-3" className={styles.reviewSection}>
                  <h2>3. Key Features</h2>
                  <p>The Venture X is packed for travelers:</p>
                  <ul className={styles.featureList}>
                    <li>Annual Credits: $300 yearly for travel via Capital One Travel, plus 10,000 bonus miles (worth $100+ for travel) each anniversary after the first.</li>
                    <li>Rewards Earning: 10× miles on hotels/rental cars via Capital One Travel, 5× on flights/vacation rentals via Capital One Travel, and 2× miles on everything else.</li>
                    <li>Airport Lounge Access: Unlimited access to Capital One Lounges and Priority Pass Select (1,300+ lounges) for you and two guests.</li>
                    <li>Global Entry/TSA PreCheck® Credit: Up to $120 statement credit every four years.</li>
                    <li>Hertz President's Circle® Status: Top-tier Hertz status (enrollment needed).</li>
                    <li>No Foreign Transaction Fees.</li>
                    <li>Free Authorized Users: Add users at no extra cost; they get many benefits, including Priority Pass. This is a huge plus for families/groups.</li>
                    <li>Cell Phone Protection: Up to $800 per claim (deductible applies) if your phone is stolen/damaged and you pay your bill with the card.</li>
                  </ul>
                </section>

                <section id="section-4" className={styles.reviewSection}>
                  <h2>4. Current Welcome Offer &amp; Eligibility Deep Dive</h2>
                  <p>Typically, a strong welcome offer awaits:</p>
                  <ul className={styles.featureList}>
                    <li>Standard Offer: 75,000 bonus miles after $4,000 spend in the first 3 months.</li>
                    <li>Value: At least $750 for travel via Capital One or Purchase Eraser. Strategically transferred, experts value it over $1,300.</li>
                    <li>Eligibility: "Excellent" credit needed. Aim for a FICO score of 740+, though approvals vary. Capital One limits new cards to one every six months and is sensitive to recent applications and total open credit lines. Use their pre-approval tool as a guide.</li>
                  </ul>
                </section>

                <section id="section-5" className={styles.reviewSection}>
                  <h2>5. Annual Fee: Cost vs. Value Analysis</h2>
                  <p>The $395 annual fee is designed to be offset:</p>
                  <ul className={styles.featureList}>
                    <li>$300 Annual Capital One Travel Credit: Applied to bookings via their portal. Expires at anniversary if unused.</li>
                    <li>10,000 Anniversary Bonus Miles: From year one, worth at least $100 for travel.</li>
                  </ul>
                  <p>Together, these offer $400+ in annual value, potentially making the effective annual fee negative. This hinges on using the Capital One Travel portal for at least $300 annually. If you prefer booking direct, full value might not be realized, making it less flexible than some competitors' credits.</p>
                </section>

                <section id="section-6" className={styles.reviewSection}>
                  <h2>6. Comprehensive Rewards Earning Structure</h2>
                  <p>A multi-tiered structure favoring the Capital One portal, with a strong base rate:</p>
                  <ul className={styles.featureList}>
                    <li>Capital One Travel Portal: 10× miles on hotels/cars, 5× on flights/vacation rentals.</li>
                    <li>Base Earning: Unlimited 2× miles on all other purchases.</li>
                  </ul>
                  <p>The universal 2× rate on non-portal spending is a standout, simplifying rewards accumulation on everyday expenses, unlike many premium cards offering only 1× outside bonus categories.</p>
                </section>

                <section id="section-7" className={styles.reviewSection}>
                  <h2>7. Redemption Strategies &amp; Point/Mile Valuation</h2>
                  <p>Flexible redemption options:</p>
                  <ul className={styles.featureList}>
                    <li>Capital One Travel Portal: 1 cent per mile for travel.</li>
                    <li>Cover Travel Purchases (Purchase Eraser): Statement credit for travel booked elsewhere (past 90 days) at 1 cent per mile.</li>
                    <li>Transfer to Travel Partners: Over 15 airline/hotel partners. Most airlines are 1:1, potentially yielding {'>'}1.8 cents per mile.</li>
                    <li>Other Options: Gift cards, Amazon/PayPal. Cash back is poor value (0.5 cents/mile) and not advised.</li>
                  </ul>
                  <p>A solid 1-cent floor for easy travel, with upside via transfers, makes it broadly appealing.</p>
                </section>

                <section id="section-8" className={styles.reviewSection}>
                  <h2>8. Loyalty Program Deep Dive &amp; Partner Network Analysis</h2>
                  <p>The Capital One Miles program's strength is its airline transfer partners:</p>
                  <ul className={styles.featureList}>
                    <li>Airline Partners: Includes members from Star Alliance (Air Canada, Avianca, Singapore), Oneworld (British Airways, Cathay Pacific), SkyTeam (Air France-KLM, Virgin Red), and non-alliance (Emirates, Etihad). Most are 1:1 (1000-mile minimum).</li>
                    <li>Hotel Partners: More limited. Accor (2:1), Choice (1:1, US only), Wyndham (1:1). Generally less compelling than Chase (Hyatt) or Amex (Hilton, Marriott) options.</li>
                  </ul>
                  <p>No direct transfers to major US carriers (AA, Delta, United), but indirect access via alliance partners (e.g., BA Avios for AA, Aeroplan for United) requires more know-how.</p>
                </section>

                <section id="section-9" className={styles.reviewSection}>
                  <h2>9. Travel-Specific Benefits &amp; Credits (Maximization Guide)</h2>
                  <p>Actively engage these perks:</p>
                  <ul className={styles.featureList}>
                    <li>$300 Capital One Travel Credit: Spend $300 via the portal annually. Use price match if needed.</li>
                    <li>10,000 Anniversary Miles: Automatic $100+ travel value yearly after year one.</li>
                    <li>Global Entry/TSA PreCheck Credit: Up to $120 every 4 years; choose Global Entry for best value.</li>
                    <li>Lounge Access: Enroll in Priority Pass. Unlimited visits for you + 2 guests (Capital One/Priority Pass lounges). Free authorized users get same access. (Priority Pass restaurant credits discontinued early 2023). Capital One Lounges at DFW, DEN, IAD, LAS (early 2025), more planned. Access needs same-day boarding pass, 3 hours prior.</li>
                    <li>Hertz President's Circle Status: Enroll for top-tier perks.</li>
                    <li>No Foreign Transaction Fees.</li>
                    <li>Other Perks: PRIOR subscription ($149 value), The Cultivist discount.</li>
                  </ul>
                  <p>Core benefits ($300 credit + 10k miles) reliably give $400+ value, justifying the fee.</p>
                </section>

                <section id="section-10" className={styles.reviewSection}>
                  <h2>10. Travel &amp; Purchase Protections (Insurance Explained Simply)</h2>
                  <p>As a Visa Infinite, it offers key protections:</p>
                  <ul className={styles.featureList}>
                    <li>Trip Cancellation/Interruption: Up to $2,000/person for non-refundable costs due to limited covered reasons (illness/injury, provider insolvency). Narrower than some competitors.</li>
                    <li>Trip Delay Reimbursement: Up to $500/person for reasonable expenses if delayed &gt;6 hours or overnight.</li>
                    <li>Lost/Damaged Baggage: Up to $3,000/passenger beyond carrier reimbursement.</li>
                    <li>Auto Rental CDW: Primary coverage for collision/theft on eligible rentals paid with the card (decline rental co's CDW).</li>
                    <li>Travel Accident Insurance: Up to $1,000,000 for common carrier travel.</li>
                    <li>Cell Phone Protection: Up to $800/claim (deductible) for theft/damage if bill paid with card.</li>
                    <li>Purchase Security: Covers new items against theft/damage for 90 days (up to $10k/claim).</li>
                    <li>Return Protection: May reimburse if merchant refuses return within 90 days.</li>
                    <li>Extended Warranty: Adds a year to US manufacturer warranties of ≤3 years.</li>
                  </ul>
                  <p>File claims promptly with documentation.</p>
                </section>

                <section id="section-11" className={styles.reviewSection}>
                  <h2>11. Security, Convenience &amp; Tech Features</h2>
                  <p>Modern and user-friendly:</p>
                  <ul className={styles.featureList}>
                    <li>$0 Fraud Liability.</li>
                    <li>Virtual Card Numbers: Via Eno® for secure online shopping.</li>
                    <li>Card Lock: Instantly lock via mobile app.</li>
                    <li>Security Alerts: Proactive notifications.</li>
                    <li>Eno Assistant: AI-powered monitoring and support.</li>
                    <li>Mobile App: Comprehensive account management, praised for usability.</li>
                    <li>Contactless Payment.</li>
                    <li>Account Management: AutoPay, customizable due dates, spending summaries.</li>
                  </ul>
                </section>

                <section id="section-12" className={styles.reviewSection}>
                  <h2>12. Full Spectrum of Rates &amp; Fees (Transparency is Key)</h2>
                  <p>Know the costs:</p>
                  <ul className={styles.featureList}>
                    <li>Annual Fee: $395.</li>
                    <li>Purchase APR: 19.99% - 29.24% variable.</li>
                    <li>Balance Transfer APR: 19.99% - 29.24% variable.</li>
                    <li>Balance Transfer Fee: $0 at standard APR; 4% if at a special promotional APR.</li>
                    <li>Cash Advance APR: 29.24% variable (interest accrues immediately).</li>
                    <li>Cash Advance Fee: Greater of $5 or 5%.</li>
                    <li>Foreign Transaction Fee: None.</li>
                    <li>Late Payment Fee: Up to $40.</li>
                  </ul>
                  <p>High APRs mean it's for those who pay in full monthly.</p>
                </section>

                <section id="section-13" className={styles.reviewSection}>
                  <h2>13. Credit Score Guidance &amp; Application Insights</h2>
                  <p>Strong credit is key:</p>
                  <ul className={styles.featureList}>
                    <li>Required Credit: "Excellent" per Capital One.</li>
                    <li>Recommended Score: FICO 740+ generally advised.</li>
                    <li>Beyond Score: Capital One is sensitive to recent application velocity (limit 1 new C1 card/6 months) and total open credit lines.</li>
                    <li>Strategy: Use pre-approval tool (not a guarantee). Limit other applications before applying for Venture X.</li>
                  </ul>
                </section>

                <section id="section-14" className={styles.reviewSection}>
                  <h2>14. "Is This Card Your Perfect Travel Companion?" (Detailed User Profiling)</h2>
                  <p><strong>Ideal For You If You:</strong> Travel regularly; can meet welcome bonus spend; value lounge access (especially shared via free AUs); prefer simple, high base-earn rewards (2×); will use C1 Travel portal for $300 credit; want Global Entry/Hertz perks; pay balance in full; have excellent credit (740+) and haven't applied for too many cards recently.</p>
                  <p><strong>Look Elsewhere If You:</strong> Travel infrequently; are strictly budget-conscious; are loyal to programs weak in C1's network; dislike travel portals; primarily want cash back (poor value); or carry a balance (high APRs).</p>
                  <p>Venture X suits the "value-conscious premium traveler."</p>
                </section>

                <section id="section-15" className={styles.reviewSection}>
                  <h2>15. Unbiased Pros &amp; Cons (Comprehensive &amp; Balanced)</h2>
                  <div className={styles.prosConsContainer}>
                    <div className={styles.prosBox}>
                        <h3>Pros:</h3>
                        <ul className={styles.featureList}>
                            <li>High value: Credits ($300 portal + 10k anniversary miles) offset $395 fee.</li>
                            <li>Simple, strong rewards: 2× base, 5×/10× portal bonuses.</li>
                            <li>Excellent lounge access: C1 LoungES & Priority Pass, 2 guests.</li>
                            <li>Free AUs with benefits: Independent lounge access.</li>
                            <li>Generous welcome bonus: $750+ travel value.</li>
                            <li>Travel conveniences: Global Entry credit, Hertz status.</li>
                            <li>No foreign transaction fees.</li>
                            <li>Robust protections: Primary rental CDW, cell phone protection.</li>
                            <li>Modern tech: Good app, Eno, virtual cards.</li>
                            <li>Flexible redemptions: Portal, Purchase Eraser (1 cpp), partner transfers.</li>
                        </ul>
                    </div>
                    <div className={styles.consBox}>
                        <h3>Cons:</h3>
                        <ul className={styles.featureList}>
                            <li>$395 annual fee (though offsettable).</li>
                            <li>Portal dependency for $300 credit.</li>
                            <li>Portal limitations (occasional price/availability issues).</li>
                            <li>No direct major US airline partners.</li>
                            <li>Weaker hotel partners vs. competitors.</li>
                            <li>Strict approval criteria.</li>
                            <li>Narrower trip cancellation coverage.</li>
                            <li>Poor cash back value (0.5 cpp).</li>
                            <li>Lounge network limits (C1 growing, PP quality varies).</li>
                        </ul>
                    </div>
                  </div>
                </section>

                <section id="section-16" className={styles.reviewSection}>
                  <h2>16. Head-to-Head: How It Stacks Up Against Key Competitors</h2>
                  <p>Venture X competes with other premium travel cards.</p>
                  <DraggableTableWrapper>
                    <div className={styles.tableContainer}>
                        <table className={`${styles.statsTable} ${styles.ratesFeesTable}`}>
                            <thead>
                                <tr>
                                    <th>Feature</th>
                                    <th>Capital One Venture X</th>
                                    <th>Chase Sapphire Reserve®</th>
                                    <th>The Platinum Card® from Amex</th>
                                    <th>Bank of America® Premium Rewards® Elite</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td data-label="Feature">Annual Fee</td>
                                    <td data-label="Capital One Venture X">$395</td>
                                    <td data-label="Chase Sapphire Reserve®">$550 ($75 per AU)</td>
                                    <td data-label="The Platinum Card® from Amex">$695 ($195 per Plat AU, $0 per Comp AU)</td>
                                    <td data-label="Bank of America® Premium Rewards® Elite">$550</td>
                                </tr>
                                <tr>
                                    <td data-label="Feature">Welcome Bonus</td>
                                    <td data-label="Capital One Venture X">75,000 miles ($4k spend/3mo)</td>
                                    <td data-label="Chase Sapphire Reserve®">60,000 points ($5k spend/3mo)</td>
                                    <td data-label="The Platinum Card® from Amex">80,000 points ($8k spend/6mo)</td>
                                    <td data-label="Bank of America® Premium Rewards® Elite">75,000 points ($5k spend/90 days)</td>
                                </tr>
                                <tr>
                                    <td data-label="Feature">Rewards: Portal Travel</td>
                                    <td data-label="Capital One Venture X">10× Hotels/Cars, 5× Flights</td>
                                    <td data-label="Chase Sapphire Reserve®">10× Hotels/Cars, 5× Flights (after $300)</td>
                                    <td data-label="The Platinum Card® from Amex">5× Hotels/Flights (Amex Travel)</td>
                                    <td data-label="Bank of America® Premium Rewards® Elite">2× points (effectively 2.5x w/ 20% airfare discount)</td>
                                </tr>
                                <tr>
                                    <td data-label="Feature">Rewards: Other Travel</td>
                                    <td data-label="Capital One Venture X">2× miles</td>
                                    <td data-label="Chase Sapphire Reserve®">3× points (after $300)</td>
                                    <td data-label="The Platinum Card® from Amex">1× points</td>
                                    <td data-label="Bank of America® Premium Rewards® Elite">2× points</td>
                                </tr>
                                <tr>
                                    <td data-label="Feature">Rewards: Dining</td>
                                    <td data-label="Capital One Venture X">2× miles</td>
                                    <td data-label="Chase Sapphire Reserve®">3× points</td>
                                    <td data-label="The Platinum Card® from Amex">1× points</td>
                                    <td data-label="Bank of America® Premium Rewards® Elite">2× points</td>
                                </tr>
                                <tr>
                                    <td data-label="Feature">Rewards: Other</td>
                                    <td data-label="Capital One Venture X">2× miles</td>
                                    <td data-label="Chase Sapphire Reserve®">1× point</td>
                                    <td data-label="The Platinum Card® from Amex">1× point</td>
                                    <td data-label="Bank of America® Premium Rewards® Elite">1.5× points</td>
                                </tr>
                                <tr>
                                    <td data-label="Feature">Primary Travel Credit</td>
                                    <td data-label="Capital One Venture X">$300 via Capital One Travel</td>
                                    <td data-label="Chase Sapphire Reserve®">$300 Flexible Travel Credit</td>
                                    <td data-label="The Platinum Card® from Amex">$200 Hotel Credit (FHR/THC via Amex Travel)</td>
                                    <td data-label="Bank of America® Premium Rewards® Elite">$300 Airline Incidental Credit</td>
                                </tr>
                                <tr>
                                    <td data-label="Feature">Other Key Credits</td>
                                    <td data-label="Capital One Venture X">10k Anniv. Miles ($100+ value)</td>
                                    <td data-label="Chase Sapphire Reserve®">Global Entry/TSA/NEXUS ($120/4yr)</td>
                                    <td data-label="The Platinum Card® from Amex">$200 Airline Fee, $200 Uber, $100 Saks, $199 CLEAR+, $240 Digital Ent, $155 Walmart+</td>
                                    <td data-label="Bank of America® Premium Rewards® Elite">$150 Lifestyle Credit, $120 GE/TSA (every 4 yrs)</td>
                                </tr>
                                <tr>
                                    <td data-label="Feature">Lounge Access</td>
                                    <td data-label="Capital One Venture X">Capital One Lounges, Priority Pass Select</td>
                                    <td data-label="Chase Sapphire Reserve®">Priority Pass Select, Chase Sapphire Lounges</td>
                                    <td data-label="The Platinum Card® from Amex">Amex Global Lounge Collection (Centurion, PP Select, Delta Sky Club*, Escape, Plaza Premium, Lufthansa*)</td>
                                    <td data-label="Bank of America® Premium Rewards® Elite">Priority Pass Select (4 memberships)</td>
                                </tr>
                                <tr>
                                    <td data-label="Feature">Lounge Guests (Primary)</td>
                                    <td data-label="Capital One Venture X">2 Free (C1/PP)</td>
                                    <td data-label="Chase Sapphire Reserve®">2 Free (PP/Chase Sapphire)</td>
                                    <td data-label="The Platinum Card® from Amex">Varies: 2 Free (PP); $50/guest (Centurion unless $75k spend); 10 Visits/yr (Delta); Others vary</td>
                                    <td data-label="Bank of America® Premium Rewards® Elite">Varies by PP policy</td>
                                </tr>
                                <tr>
                                    <td data-label="Feature">Authorized User Fee</td>
                                    <td data-label="Capital One Venture X">$0</td>
                                    <td data-label="Chase Sapphire Reserve®">$75</td>
                                    <td data-label="The Platinum Card® from Amex">$195 (Platinum AU)</td>
                                    <td data-label="Bank of America® Premium Rewards® Elite">$0 (unclear if AUs get full benefits like PP)</td>
                                </tr>
                                <tr>
                                    <td data-label="Feature">AU Lounge Access</td>
                                    <td data-label="Capital One Venture X">Yes, same as primary</td>
                                    <td data-label="Chase Sapphire Reserve®">Yes, same as primary</td>
                                    <td data-label="The Platinum Card® from Amex">Yes (Platinum AU only)</td>
                                    <td data-label="Bank of America® Premium Rewards® Elite">Likely requires own PP membership</td>
                                </tr>
                                <tr>
                                    <td data-label="Feature">Key Transfer Partners</td>
                                    <td data-label="Capital One Venture X">Aeroplan, Flying Blue, BA Avios, Virgin Red</td>
                                    <td data-label="Chase Sapphire Reserve®">Aeroplan, Flying Blue, BA Avios, Hyatt, United, Southwest</td>
                                    <td data-label="The Platinum Card® from Amex">Aeroplan, Flying Blue, BA Avios, Delta, Hilton, Marriott</td>
                                    <td data-label="Bank of America® Premium Rewards® Elite">None</td>
                                </tr>
                                <tr>
                                    <td data-label="Feature">Portal Redemption Boost</td>
                                    <td data-label="Capital One Venture X">No (Fixed 1 cpp)</td>
                                    <td data-label="Chase Sapphire Reserve®">Yes (Points worth 1.5 cpp for travel)</td>
                                    <td data-label="The Platinum Card® from Amex">No (Fixed 1 cpp for flights, less for others)</td>
                                    <td data-label="Bank of America® Premium Rewards® Elite">Yes (20% airfare discount via points)</td>
                                </tr>
                                <tr>
                                    <td data-label="Feature">Hotel Status</td>
                                    <td data-label="Capital One Venture X">No</td>
                                    <td data-label="Chase Sapphire Reserve®">No</td>
                                    <td data-label="The Platinum Card® from Amex">Yes (Hilton Gold, Marriott Gold)</td>
                                    <td data-label="Bank of America® Premium Rewards® Elite">No</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                  </DraggableTableWrapper>
                  <p><em>Delta Sky Club access for Amex Plat is limited (10 visits/year unless $75k spend). Lufthansa access requires same-day Lufthansa Group boarding pass.</em></p>
                  <p><strong>Analysis:</strong> Venture X excels on net cost and simplicity, with an effective fee near zero and strong base earn. CSR offers a flexible credit and better partners (Hyatt, United) with a 50% point boost in its portal. Amex Platinum has the most credits (though complex) and best lounge network (Centurion) plus hotel status. BoA PRE has good credits and an airfare discount but no transfer partners.</p>
                </section>

                <section id="section-17" className={styles.reviewSection}>
                  <h2>17. Exclusive Expert Tips &amp; Hidden Value Unlocked</h2>
                  <p>Maximize your Venture X:</p>
                  <ul className={styles.featureList}>
                    <li>Leverage Free Authorized Users: They get independent lounge access, saving fees.</li>
                    <li>Optimize Portal Use: For the $300 credit and bonus miles; use price match.</li>
                    <li>Master Transfer Partners: Learn sweet spots (Aeroplan for Star Alliance, Avios for AA/AS short-hauls).</li>
                    <li>Utilize Purchase Eraser: For non-portal travel (trains, cruises) at 1 cpp.</li>
                    <li>Activate Protections: Know your Visa Infinite benefits (primary rental CDW, cell phone protection).</li>
                    <li>Check Capital One Offers: For targeted merchant deals.</li>
                    <li>Choose Global Entry: Maximizes the application fee credit.</li>
                    <li>Enroll for Hertz Status.</li>
                  </ul>
                  <p>Active engagement unlocks its full potential.</p>
                </section>

                <section id="section-18" className={styles.reviewSection}>
                  <h2>18. Aggregated User Sentiment &amp; Real-World Experiences and Real-Life Spend Examples / Estimated Value</h2>
                  <p><strong>User Feedback:</strong> Generally very positive. Praised for value (credits offsetting fee), simple 2× earn, and free AU lounge access. Capital One Lounges liked when accessible. Criticisms include portal dependency for $300 credit, occasional portal pricing issues, no direct major US airline partners, variable Priority Pass lounge quality, C1 Lounge crowding, and some customer service/application approval frustrations.</p>
                  <h3>Real-Life Spend Example (Alex &amp; Ben):</h3>
                  <p>Assume $30k annual spend ($5k travel, $1.5k flights & $1.5k hotels via C1 Portal; $25k other). They use all core credits, add 1 AU, 4 trips/year with lounge use.</p>
                  <ul className={styles.featureList}>
                    <li>Credits Value: $300 (C1 Travel) + $100 (Anniv. Miles) + $30 (Global Entry annualized) = +$430</li>
                    <li>Miles Earned (@1cpp): 7,500 (Flights) + 15,000 (Hotels) + 4,000 (Other Travel) + 50,000 (Other) = 76,500 miles = +$765</li>
                    <li>Lounge Value (Est.): 16 visits @ $15/visit = +$240</li>
                    <li>Hertz Status (Est.): +$50</li>
                    <li>Total Estimated Value: $430 + $765 + $240 + $50 = $1,485</li>
                    <li>Net Annual Value: $1,485 - $395 (Fee) = ~$1,090</li>
                  </ul>
                  <p>Even conservatively, it offers {'>'}$1,000 net annual value for moderate travelers.</p>
                </section>

                <section id="section-19" className={styles.reviewSection}>
                  <h2>19. "The Final Takeaway": Authoritative Recommendation &amp; Alternatives</h2>
                  <p>The Capital One Venture X is a standout premium travel card. It delivers luxury benefits (credits, lounge access, rewards) at a lower effective cost than competitors, thanks to perks that offset its fee. Its simple 2× base earn and free authorized user policy are major draws.</p>
                  <p><strong>Strongly Recommended For:</strong> US travelers taking multiple annual trips, valuing lounge access (especially shared), appreciating simple rewards, comfortable using the C1 portal for $300 yearly, and paying balances in full.</p>
                  <p><strong>Consider Alternatives If:</strong></p>
                  <ul className={styles.featureList}>
                    <li>Max Flexibility Needed: Chase Sapphire Reserve® ($550 fee) has a broader $300 travel credit, 1.5x point value in Chase Travel, and better direct partners (Hyatt, United).</li>
                    <li>Pinnacle Luxury/Lounges Sought: The Platinum Card® from American Express ($695 fee) offers unparalleled lounge access (Centurion), hotel elite status, and many (complex) credits.</li>
                    <li>Lower Fee Travel Rewards: Capital One Venture Rewards ($95 fee) offers 2× miles and Global Entry credit, but no $300 credit or lounge access.</li>
                    <li>Everyday Spend Categories Key: Citi Strata Premier℠ Card ($95 fee) has 3× on broad categories (restaurants, supermarkets, gas, air, hotels) and a $100 annual hotel credit, but weaker travel protections/lounge access.</li>
                  </ul>
                  <p>Venture X makes premium travel more accessible, offering a potent mix of value, simplicity, and key perks.</p>
                </section>

                <section id="section-20" className={`${styles.reviewSection} ${styles.faqSection}`}>
                  <h2>20. Card-Specific Frequently Asked Questions (FAQs)</h2>
                  <div className={styles.faqContainer}>
                    <details className={styles.faqItem}>
                        <summary className={styles.faqQuestion}>Q1: How does the $300 Capital One Travel credit work?</summary>
                        <div className={styles.faqAnswer}><p>A: Applied automatically as a discount on flights, hotels, or rentals booked via Capital One Travel, up to $300/year. Resets at anniversary.</p></div>
                    </details>
                    <details className={styles.faqItem}>
                        <summary className={styles.faqQuestion}>Q2: Do authorized users get free lounge access?</summary>
                        <div className={styles.faqAnswer}><p>A: Yes, up to four AUs ($0 fee) get their own Priority Pass Select and Capital One Lounge access with guest privileges.</p></div>
                    </details>
                    <details className={styles.faqItem}>
                        <summary className={styles.faqQuestion}>Q3: Can I transfer miles directly to AA, Delta, or United?</summary>
                        <div className={styles.faqAnswer}><p>A: No. Use alliance partners: BA for AA, Aeroplan for United, Flying Blue for Delta.</p></div>
                    </details>
                    <details className={styles.faqItem}>
                        <summary className={styles.faqQuestion}>Q4: Is the $395 annual fee worth it?</summary>
                        <div className={styles.faqAnswer}><p>A: Yes, for most who travel 1-2x/year. The $300 credit + 10k anniversary miles ($100+ value) cover it. Lounge access and other perks add more value.</p></div>
                    </details>
                    <details className={styles.faqItem}>
                        <summary className={styles.faqQuestion}>Q5: What credit score is needed?</summary>
                        <div className={styles.faqAnswer}><p>A: "Excellent" credit. Aim for FICO 740+. C1 also eyes income, recent inquiries, and open accounts.</p></div>
                    </details>
                    <details className={styles.faqItem}>
                        <summary className={styles.faqQuestion}>Q6: Foreign transaction fees?</summary>
                        <div className={styles.faqAnswer}><p>A: None.</p></div>
                    </details>
                    <details className={styles.faqItem}>
                        <summary className={styles.faqQuestion}>Q7: How does cell phone protection work?</summary>
                        <div className={styles.faqAnswer}><p>A: Pay monthly bill with Venture X for reimbursement (up to $800/claim, $50 deductible) for covered theft/damage. Terms apply.</p></div>
                    </details>
                    <details className={styles.faqItem}>
                        <summary className={styles.faqQuestion}>Q8: How to get/use Priority Pass?</summary>
                        <div className={styles.faqAnswer}><p>A: Enroll via link in C1 online account after getting card. Present Priority Pass card (digital/physical) and same-day boarding pass for lounge access (you + 2 guests). Non-lounge experiences (restaurants) not included.</p></div>
                    </details>
                  </div>
                </section>
                {/* End Review Sections */}

                <section id="eat-expertise-authority-trustworthiness" className={`${styles.reviewSection} ${styles.eatSection}`}>
                    <h2 dangerouslySetInnerHTML={{ __html: "Our Commitment to E-A-T: Expertise, Authority &amp; Trustworthiness"}}></h2>
                    <p>At <strong>{siteName}</strong>, we ensure our content meets the highest standards.</p>
                     <p>
                      This review of the <strong>{reviewDataNew.cardName}</strong> is based on thorough research of the card's features, terms, and conditions as of {updateDate}, as well as comparisons to other cards in the market, to provide you with a reliable and comprehensive guide.
                    </p>
                </section>

              </article>
            </div>
          </div>

          <aside className={styles.sidebarArea}>
            <TableOfContents sections={tocSections} />
          </aside>
        </div>
      </main>
    </>
  );
}

export default CapitalOneVentureXReviewPage; // Renamed export