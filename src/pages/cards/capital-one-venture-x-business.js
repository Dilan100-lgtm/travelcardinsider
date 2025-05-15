/* ------------------------------------------------------------------
    File:  pages/reviews/capital-one-venture-x-business.js
    Route: https://www.yourwebsite.com/reviews/capital-one-venture-x-business 
------------------------------------------------------------------- */

import React, { useState, useEffect, useCallback, useRef } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import styles from '../../styles/ReviewPage.module.css'; // Assuming same CSS module

import TableOfContents    from '../../components/TableOfContents'; // Assuming same TOC component
import IconGift from '../../components/icons/icon-gift.svg'; 
import IconStar from '../../components/icons/icon-star.svg';
import IconCheck from '../../components/icons/icon-Credit Card.svg';
import IconX from '../../components/icons/icon-Star + Arrow Up.svg';
import IconPlus from '../../components/icons/icon-target.svg';

const RatingTooltip = dynamic(() => import('../../components/RatingTooltip'), { ssr: false, loading: () => null });

/* ──────────────────────────────
    CONSTANTS & STATIC DATA
    ────────────────────────────── */
const siteName    = 'TravelCardInsider'; // Assuming same site name
const siteUrl     = 'https://www.travelcardinsider.com'; // Replace with your actual site URL
const pagePath    = '/reviews/capital-one-venture-x-business';
const pageUrlFull = `${siteUrl}${pagePath}`;
const publishDate = '2025-05-16'; // UPDATE AS NEEDED
const updateDate  = '2025-05-16'; // UPDATE AS NEEDED

const reviewDataNew = {
  cardName        : 'Capital One Venture X Business',
  title           : 'Capital One Venture X Business: Comprehensive Review for US Business Travelers (2025)',
  description     : 'In-depth 2025 review of the Capital One Venture X Business card: covering its $395 annual fee, welcome offer, 2X miles rewards, $300 travel credit, lounge access, and business features for US travelers.',
  keywords        : 'Capital One Venture X Business review, Venture X Business, premium business credit card, travel rewards, Capital One business, $300 travel credit, airport lounge access',
  author: { // Using Dilan Madushanka's details from the template as a placeholder - UPDATE AS NEEDED
      name: 'Dilan Madushanka',
      title: 'Founder & Lead Editor',
      imageUrl: '/WhatsApp Image 2025-05-12 at 4.09.58 PM.jpeg', // Placeholder - UPDATE
      imageWidth: 40,
      imageHeight: 40,
      tooltipImageUrl: '/WhatsApp Image 2025-05-12 at 4.09.58 PM.jpeg', // Placeholder - UPDATE
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
      fullBioLink: '/author/dilan-madushanka', // Placeholder - UPDATE
      fullBio: `Dilan Madushanka is the founder and lead editor of TravelCardInsider.com, a platform dedicated to helping everyday people make smarter decisions with travel and rewards credit cards. With a background in medicine and a deep passion for financial literacy, Dilan turned his real-world experience—navigating travel, budgeting, and rewards programs—into a mission: demystify credit cards and uncover their real-world value.\n\nAfter years of studying the fine print, testing travel benefits firsthand, and comparing hundreds of card offers, Dilan has built a site that goes beyond generic advice. He combines research, real spending scenarios, and hands-on card analysis to help readers maximize rewards and avoid costly mistakes.\n\nExperience matters—and Dilan brings a unique one. A Sri Lankan doctor by training, he took a bold leap into digital entrepreneurship to build a transparent, user-focused credit card resource from scratch. Every guide and review you read is written or edited by him with accuracy, integrity, and a deep sense of purpose.`,
      publishedStats: '6+ in-depth card reviews per week',
      testedStats: 'Over 50 credit card benefits across major brands',
      socialLinks: { // Placeholder - UPDATE
          linkedin: 'www.linkedin.com/in/dilan-madushanka-b65293365',
          twitter: 'https://x.com/team_dilan',
          email: 'team@travelcardinsider.com'
      }
  },
  siteName: 'TravelCardInsider',
  imageUrl        : '/vxb-card-alt-at-2x.avif', // Placeholder: Replace with actual card image URL for Venture X Business
  imageWidth      : 1290, 
  imageHeight     : 812,  
  ratingValue     : 8.8, // Placeholder - UPDATE AS NEEDED (e.g. 4.4/5 * 2)
  ratingCount     : 250, // Placeholder - UPDATE AS NEEDED
  reviewBody      : 'Our editors evaluate the Capital One Venture X Business card based on its rewards, annual fee, travel credits, lounge access, business tools, and overall value for US-based business travelers.',
  aprRange        : 'Not Applicable (Pay-in-full charge card)', 
  annualFee       : 395, 
  applyLink       : 'http://capitalone.com/small-business/credit-cards/venture-x-business/', // Placeholder - UPDATE
  ratesLink       : 'http://capitalone.com/small-business/credit-cards/venture-x-business/', // Placeholder - UPDATE
  sku             : 'CAP1-VENTUREXBIZ-TCI-2025', // Placeholder
  mpn             : 'CAP1VENTUREXBIZ', // Placeholder
  h1Content       : "Capital One Venture X Business: A Comprehensive Review for US Business Travelers",
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
            description          : `Annual fee: $${reviewDataNew.annualFee}.`,
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
        description: `TravelCardInsider editorial rating based on 10.0 scale, as of ${updateDate}.`
      },
      author          : {
          '@type': 'Person',
          'name': reviewDataNew.author.name,
          'url': reviewDataNew.author.fullBioLink ? `${siteUrl}${reviewDataNew.author.fullBioLink}` : undefined
      },
      publisher       : {
        '@type' : 'Organization',
        name    : siteName,
        logo    : { '@type': 'ImageObject', url: `${siteUrl}/images/logo/tci-logo-schema.png` },
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
    { 
      '@type'    : 'FAQPage',
      '@id'      : `${pageUrlFull}#faqs`,
      mainEntity: [ // Combined FAQs from both sections of the review
        {
          '@type': 'Question',
          name   : 'Is the $395 annual fee worth it?',
          acceptedAnswer: { '@type': 'Answer', text: "Yes, if you use the $300 travel credit (via Capital One Travel) and value the 10,000 anniversary miles ($100+ value), effectively making the fee -$5. (See Sections V, VI)" },
        },
        {
          '@type': 'Question',
          name   : 'What credit score is needed?',
          acceptedAnswer: { '@type': 'Answer', text: '"Excellent credit," typically 720-740 FICO or higher. (See Section XII)' },
        },
        {
          '@type': 'Question',
          name   : 'Can I carry a balance?',
          acceptedAnswer: { '@type': 'Answer', text: "No, it's a pay-in-full charge card. (See Section X)" },
        },
        {
            '@type': 'Question',
            name   : 'Best transfer partners for domestic US travel?',
            acceptedAnswer: { '@type': 'Answer', text: "Use international partners in alliances: Air Canada Aeroplan or Avianca LifeMiles (for United), British Airways (for American/Alaska). Requires research." },
        },
        {
            '@type': 'Question',
            name   : 'How does "no preset spending limit" work?',
            acceptedAnswer: { '@type': 'Answer', text: "Purchasing capacity adapts based on spending, payment history, etc. Not unlimited. (See Section IX)" },
        },
        {
            '@type': 'Question',
            name   : 'Are employee cards free, and do they get lounge access?',
            acceptedAnswer: { '@type': 'Answer', text: "Yes, employee cards are free. No, they generally don't get their own complimentary lounge access." },
        },
        {
            '@type': 'Question',
            name   : 'Must I use Capital One Travel for bonus miles?',
            acceptedAnswer: { '@type': 'Answer', text: "Yes, for 10X on hotels/cars and 5X on flights. All other purchases earn 2X. (See Section III)" },
        },
        {
            '@type': 'Question',
            name   : 'Does it report to personal credit?',
            acceptedAnswer: { '@type': 'Answer', text: "Typically no, unless the account is delinquent." },
        },
        // From "Top 10 FAQs"
        {
            '@type': 'Question',
            name: 'What is the annual fee for the Venture X Business card and is it a charge card?',
            acceptedAnswer: { '@type': 'Answer', text: "The Capital One Venture X Business card has a $395 annual fee. It is a pay-in-full charge card, meaning the balance must be paid in full each month." }
        },
        {
            '@type': 'Question',
            name: 'What is the current welcome offer for the Venture X Business card?',
            acceptedAnswer: { '@type': 'Answer', text: "For a limited time, new cardholders can earn up to 350,000 bonus miles. This is a tiered offer: 150,000 miles after spending $30,000 in the first 3 months, and an additional 200,000 miles after spending a total of $200,000 in the first 6 months." }
        },
        {
            '@type': 'Question',
            name: 'How do I earn miles with the Venture X Business card?',
            acceptedAnswer: { '@type': 'Answer', text: "You earn unlimited 2X miles on every purchase. You also earn 5X miles on flights and vacation rentals booked through Capital One Travel, and 10X miles on hotels and rental cars booked through Capital One Travel." }
        },
        {
            '@type': 'Question',
            name: 'How can I redeem my Venture X Business miles?',
            acceptedAnswer: { '@type': 'Answer', text: "Miles can be redeemed to cover recent travel purchases (within 90 days) at 1 cent per mile, to book new travel through Capital One Travel, or by transferring them to over 15 airline and hotel partners. Miles can also be used for gift cards or cash back, though often at a lower value." }
        },
        {
            '@type': 'Question',
            name: 'How does the $300 annual travel credit work?',
            acceptedAnswer: { '@type': 'Answer', text: "Primary account holders receive a $300 annual travel credit for bookings made through Capital One Travel. The credit is automatically available at checkout and expires on your next account anniversary if unused." }
        },
        {
            '@type': 'Question',
            name: 'What airport lounge access does the primary Venture X Business cardholder get?',
            acceptedAnswer: { '@type': 'Answer', text: "The primary cardholder receives unlimited complimentary access to Capital One Lounges (plus two guests per visit) and access to over 1,300 global airport lounges through the Partner Lounge Network, which includes Priority Pass (enrollment required), also typically with two guests per visit." }
        },
        {
            '@type': 'Question',
            name: 'Do employee cardholders on the Venture X Business card get their own lounge access (e.g., Priority Pass)?',
            acceptedAnswer: { '@type': 'Answer', text: "No, according to official Capital One lounge access pages, authorized users and account managers on the Venture X Business card are not eligible for complimentary access to Capital One Lounges or the Partner Lounge Network (which includes Priority Pass). They may enter as one of the primary cardholder's guests or pay the standard rate. This differs from the personal Venture X card." }
        },
        {
            '@type': 'Question',
            name: 'Does the Venture X Business card offer primary Auto Rental Collision Damage Waiver (CDW)?',
            acceptedAnswer: { '@type': 'Answer', text: "Yes, the Venture X Business card, as a Visa Infinite Business product, offers Auto Rental Collision Damage Waiver (CDW) that is primary coverage. This means it takes precedence over your personal or business auto insurance for covered incidents when you decline the rental company's CDW and pay for the entire rental with your card. Coverage is generally up to the Actual Cash Value of most rental vehicles (MSRP up to $75,000) for rental periods up to 31 days." }
        },
        {
            '@type': 'Question',
            name: 'Are employee cards free for the Venture X Business card, and what spending controls are available?',
            acceptedAnswer: { '@type': 'Answer', text: "Yes, employee cards are free to add to the Venture X Business account. You can set customized spending limits for each employee card, track their transactions in real-time, and receive year-end summaries." }
        },
        {
            '@type': 'Question',
            name: 'What credit score is generally needed to apply for the Venture X Business card? (From Top 10)',
            acceptedAnswer: { '@type': 'Answer', text: '"Excellent" credit is required for the Venture X Business card. Bankrate suggests a FICO score in the range of 740 to 850 is typically needed. Capital One also considers factors like never having declared bankruptcy or defaulted on a loan, and no recent late payments.' }
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
        // Add actual social links here if available
      ],
    },
  ],
};

const ratingCriteriaOriginal = [ 
    'Base Miles Earning Rate (2X)',
    'Capital One Travel Bonus (5X/10X)',
    'Welcome Offer Value & Spend Requirement',
    'Annual Fee ($395) & Offset Potential',
    'Annual Travel Credit ($300)',
    'Anniversary Bonus (10,000 miles)',
    'Airport Lounge Access (Capital One, Priority Pass)',
    'Business-Focused Features (Employee Cards, Spend Controls)',
    'Redemption Flexibility & Partner Value'
];

const tocSections = [
    { id: 'section-intro', title: 'Introduction' },
    { id: 'section-1', title: 'I. Card Snapshot: Venture X Business at a Glance' },
    { id: 'section-2', title: 'II. Unpacking the Welcome Offer' },
    { id: 'section-3', title: 'III. Earning Miles' },
    { id: 'section-4', title: 'IV. Redeeming Your Hard-Earned Miles' },
    { id: 'section-5', title: 'V. The Annual Fee: Understanding the $395 Price Tag' },
    { id: 'section-6', title: 'VI. Key Benefits That Justify the Fee (or Don\'t)' },
    { id: 'section-7', title: 'VII. Airport Lounge Access' },
    { id: 'section-8', title: 'VIII. Premium Travel Perks & Credits' },
    { id: 'section-9', title: 'IX. Business-Focused Features & Tools' },
    { id: 'section-10', title: 'X. Understanding the "Pay-in-Full" Nature' },
    { id: 'section-11', title: 'XI. Travel & Purchase Protections' },
    { id: 'section-12', title: 'XII. Eligibility & Application' },
    { id: 'section-13', title: 'XIII. Pros & Cons' },
    { id: 'section-14', title: 'XIV. Competitor Comparison' },
    { id: 'section-15', title: 'XV. Real-World Example' },
    { id: 'section-16', title: 'XVI. User Sentiment' },
    { id: 'section-17', title: 'XVII. Expert Tips for Maximizing Value' },
    { id: 'section-18', title: 'XVIII. Frequently Asked Questions (General)' }, // First FAQ set
    { id: 'section-19', title: 'XIX. Our Final Verdict' }, // Renumbered from XVIII
    { id: 'section-20', title: 'XX. Top 10 FAQs (Card Specific)' } // Second FAQ set, renumbered
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
function CapitalOneVentureXBusinessReviewPage() {
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
        <meta property="article:publisher" content={`https://www.facebook.com/${siteName}`} /> {/* Update with actual FB page */}
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
                  This review dissects the Capital One Venture X Business card's offerings to help US businesses determine if its benefits justify the cost.
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
                                <span className={styles.summaryValue}>Up to 350,000 Bonus Miles (tiered).</span>
                            </div>
                            <div className={styles.summaryItem}>
                                <span className={styles.summaryIcon}><IconStar /></span>
                                <span className={styles.summaryLabel}>Annual Fee:</span>
                                <span className={styles.summaryValue}>$395.</span>
                            </div>
                            <div className={styles.summaryItem}>
                                <span className={styles.summaryIcon}><IconX /></span>
                                <span className={styles.summaryLabel}>Top Earning:</span>
                                <span className={styles.summaryValue}>2X miles on all purchases; 5X flights, 10X hotels/cars via Capital One Travel.</span>
                            </div>
                            <div className={styles.summaryItem}>
                                <span className={styles.summaryIcon}><IconCheck /></span>
                                <span className={styles.summaryLabel}>Key Benefit:</span>
                                <span className={styles.summaryValue}>$300 annual travel credit; 10,000 anniversary miles.</span>
                            </div>
                            <div className={styles.summaryItem} data-full-width="true">
                                <span className={styles.summaryIcon}><IconPlus /></span>
                                <span className={styles.summaryLabel}>Best For:</span>
                                <span className={styles.summaryValue}>US businesses with significant travel spend, valuing premium perks and straightforward high rewards, comfortable with portal bookings.</span>
                            </div>
                        </div>
                        <div className={styles.summaryBoxActions}>
                            <a href={reviewDataNew.ratesLink} className={styles.summaryRatesLink} target="_blank" rel="noopener noreferrer sponsored">
                                See Card Rates & Fees
                            </a>
                             <a href='/rewards-compare' className={`${styles.heroRewardsCalculator} ${styles.summaryButton}`} target="_blank" rel="noopener noreferrer sponsored"> {/* Update link if needed */}
                                Rewards Calculator
                            </a>
                        </div>
                    </div>
                </header>

                <section id="section-intro" className={styles.reviewSection}>
                  <h2>Introduction</h2>
                  <p>For business owners, maximizing value from travel spending is paramount. The Capital One Venture X Business card aims to be a key tool in this effort, offering premium travel rewards and business features for a $395 annual fee. This review dissects the card's offerings to help US businesses determine if its benefits justify the cost.</p>
                  <p>The card blends premium perks with a simple rewards structure, appealing to those who want luxury without complex bonus categories. By mirroring the successful personal Venture X, Capital One targets businesses that value straightforward rewards and high-end travel benefits, leveraging established brand recognition for the higher-spending business market.</p>
                </section>

                <section id="section-1" className={styles.reviewSection}>
                  <h2>I. Card Snapshot: Venture X Business at a Glance</h2>
                  <p>Here’s a quick overview of the Capital One Venture X Business card's main features:</p>
                  <h3>Key Table: Venture X Business - Core Features</h3>
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
                                <tr><td data-label="Feature">Annual Fee</td><td data-label="Details">$395</td></tr>
                                <tr><td data-label="Feature">Current Welcome Offer</td><td data-label="Details">Limited Time: Up to 350,000 Bonus Miles. Earn 150,000 miles after $30,000 spend in 3 months, plus an additional 200,000 miles after $200,000 total spend in 6 months.</td></tr>
                                <tr><td data-label="Feature">Base Rewards Rate</td><td data-label="Details">Unlimited 2X miles on every purchase.</td></tr>
                                <tr><td data-label="Feature">Capital One Travel Bonus</td><td data-label="Details">10X miles on hotels and rental cars; 5X miles on flights (booked via Capital One Travel).</td></tr>
                                <tr><td data-label="Feature">Annual Travel Credit</td><td data-label="Details">$300 for bookings through Capital One Travel.</td></tr>
                                <tr><td data-label="Feature">Anniversary Bonus</td><td data-label="Details">10,000 miles every account anniversary (worth $100 towards travel).</td></tr>
                                <tr><td data-label="Feature">Lounge Access</td><td data-label="Details">Capital One Lounges, Priority Pass Select, Plaza Premium Group.</td></tr>
                                <tr><td data-label="Feature">Card Type</td><td data-label="Details">Pay-in-full charge card.</td></tr>
                                <tr><td data-label="Feature">Foreign Transaction Fees</td><td data-label="Details">None.</td></tr>
                                <tr><td data-label="Feature">Employee Cards</td><td data-label="Details">Free, with customizable spending limits.</td></tr>
                            </tbody>
                        </table>
                    </div>
                  </DraggableTableWrapper>
                  <p>This snapshot shows substantial rewards potential, especially via the welcome offer and bonus categories, balanced by the annual fee and the need to use Capital One Travel to maximize certain benefits.</p>
                </section>
                
                <section id="cta-venture-x-business" className={styles.ctaSection}>
                  <h2>Interested in the <b>{reviewDataNew.cardName}</b>?</h2>
                  <div className={styles.ctaButtons}>
                    <a href={reviewDataNew.applyLink} className={`${styles.btn} ${styles.btnApply}`} title="From card issuer's secure site" target="_blank" rel="noopener noreferrer sponsored">Apply Now</a>
                    <a href={reviewDataNew.ratesLink} className={`${styles.btn} ${styles.btnRates}`} target="_blank" rel="noopener noreferrer sponsored">See Rates & Fees</a>
                  </div>
                </section>

                <section id="section-2" className={styles.reviewSection}>
                  <h2>II. Unpacking the Welcome Offer: A Big Reward for Big Spenders</h2>
                  <p>The Venture X Business card features a significant limited-time welcome offer: earn 150,000 bonus miles after spending $30,000 in the first three months, and an additional 200,000 miles if total spending reaches $200,000 within six months. The $200,000 includes the initial $30,000, and existing Spark cardholders may not be eligible.</p>
                  <p>Valued at 1.85 cents per mile by The Points Guy, 350,000 miles could be worth up to $6,475; even at 1 cent per mile, it's $3,500. However, the spending requirements are high, suiting businesses with significant, regular expenditures. Many smaller enterprises might find the $200,000 target challenging.</p>
                  <p>The tiered structure aims to attract medium-to-large businesses. The initial 150,000-mile tier is more attainable, while the full bonus targets very high spenders, indicating Capital One's focus on businesses with substantial cash flow.</p>
                </section>

                <section id="section-3" className={styles.reviewSection}>
                  <h2>III. Earning Miles: How Your Business Spending Translates to Travel</h2>
                  <p>The Venture X Business card offers a straightforward way to accumulate miles.</p>
                  <p><strong>Base Earning Rate:</strong> Cardholders earn unlimited 2X miles on every purchase, with no caps or expiration for the life of the account. This simplicity appeals to business owners who prefer not to track complex bonus categories.</p>
                  <p><strong>Accelerated Earning via Capital One Travel:</strong> Earning potential increases when booking through Capital One Travel:</p>
                  <ul className={styles.featureList}>
                    <li>Unlimited 10X miles on hotels and rental cars.</li>
                    <li>Unlimited 5X miles on flights.</li>
                  </ul>
                  <p>The portal also offers features like price prediction. These rates incentivize using Capital One Travel, aligning with the $300 annual travel credit also tied to the portal. This strategy benefits Capital One by increasing platform volume and providing customer data, while the unlimited 2X miles offer reliable returns on all other spending.</p>
                </section>

                <section id="section-4" className={styles.reviewSection}>
                  <h2>IV. Redeeming Your Hard-Earned Miles: Flexibility and Value</h2>
                  <p>Capital One offers several redemption avenues for Venture X Business miles.</p>
                  <p><strong>Redeeming Through Capital One Travel:</strong> Miles are worth 1 cent each for flights, hotels, and rental cars booked via Capital One Travel.</p>
                  <p><strong>Covering Recent Travel Purchases:</strong> Redeem miles at 1 cent each for eligible travel purchases made with the card in the last 90 days. This is useful if better deals are found outside the portal.</p>
                  <p><strong>Transferring to Airline and Hotel Partners:</strong> This often yields the highest value. Capital One has over 15 travel partners, mostly with a 1:1 transfer ratio. Exceptions include ALL - Accor Live Limitless (2:1), EVA Air Infinity MileageLands (2:1.5), and JetBlue TrueBlue (5:3). Experts value miles at 1.2 to 1.85 cents each when transferred strategically. Many international airline partners can be used for domestic US flights via alliances (e.g., Air Canada Aeroplan for United, British Airways Avios for American).</p>
                  <h3>Key Capital One Airline & Hotel Transfer Partners (for US Travelers)</h3>
                  <DraggableTableWrapper>
                    <div className={styles.tableContainer}>
                        <table className={`${styles.statsTable} ${styles.ratesFeesTable}`}>
                            <thead>
                                <tr>
                                    <th>Partner Program</th>
                                    <th>Transfer Ratio (C1:Partner)</th>
                                    <th>Typical Transfer Time</th>
                                    <th>Notes on Value/Use for US Travelers</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td>Air Canada Aeroplan</td><td>1:1</td><td>Almost Instant</td><td>Star Alliance awards (incl. United); stopovers.</td></tr>
                                <tr><td>Avianca LifeMiles</td><td>1:1</td><td>Almost Instant</td><td>Star Alliance awards; good for premium cabins.</td></tr>
                                <tr><td>British Airways Executive Club</td><td>1:1</td><td>Almost Instant</td><td>Oneworld awards (incl. American/Alaska); good for short-hauls.</td></tr>
                                <tr><td>Air France-KLM Flying Blue</td><td>1:1</td><td>Almost Instant</td><td>SkyTeam awards; monthly Promo Rewards.</td></tr>
                                <tr><td>Singapore Airlines KrisFlyer</td><td>1:1</td><td>Up to 36 hours</td><td>Star Alliance awards; Singapore Airlines premium cabins.</td></tr>
                                <tr><td>Turkish Airlines Miles&Smiles</td><td>1:1</td><td>Up to 24 hours</td><td>Star Alliance awards; domestic US/Hawaii sweet spots.</td></tr>
                                <tr><td>Virgin Red (Virgin Atlantic)</td><td>1:1</td><td>Unknown</td><td>Delta One, ANA partner awards.</td></tr>
                                <tr><td>Choice Privileges</td><td>1:1</td><td>Up to 24 hours</td><td>Budget/mid-tier US/Europe hotels.</td></tr>
                                <tr><td>Wyndham Rewards</td><td>1:1</td><td>Up to 24 hours</td><td>Fixed hotel rates; Vacasa vacation rentals.</td></tr>
                                <tr><td>ALL - Accor Live Limitless</td><td>2:1</td><td>Up to 36 hours</td><td>Fixed value redemptions; strong international presence.</td></tr>
                                <tr><td>EVA Air Infinity MileageLands</td><td>2:1.5 (4:3)</td><td>Up to 36 hours</td><td>Star Alliance awards; niche sweet spots.</td></tr>
                                <tr><td>JetBlue TrueBlue</td><td>5:3</td><td>2 to 5 days</td><td>Revenue-based on JetBlue; less favorable ratio.</td></tr>
                            </tbody>
                        </table>
                    </div>
                  </DraggableTableWrapper>
                  <p><small>Note: Confirm current ratios/terms before transferring.</small></p>
                  <p><strong>Other Redemptions (Lower Value):</strong> Gift cards (0.8 cents/mile), cash back (0.5 cents/mile), PayPal/Amazon (0.8 cents/mile). These devalue miles significantly.</p>
                  <p>The structure offers a 1 cent/mile travel baseline, with higher potential via partners, catering to both simplicity-seekers and maximizers.</p>
                </section>

                <section id="section-5" className={styles.reviewSection}>
                  <h2>V. The Annual Fee: Understanding the $395 Price Tag</h2>
                  <p>The Venture X Business card has a $395 annual fee, placing it in the premium business travel segment. This is the same as the personal Venture X but less than The Business Platinum Card® from American Express ($695) and more than the Chase Ink Business Preferred® ($95).</p>
                  <p>This fee requires careful evaluation. It's designed to be offset by the $300 travel credit and 10,000 anniversary miles (worth $100+), creating a low or "negative" effective annual fee for those who use these perks. This makes the upfront cost more palatable. By pricing below some top-tier competitors while offering premium benefits, Capital One targets value-conscious premium market segments.</p>
                </section>

                <section id="section-6" className={styles.reviewSection}>
                    <h2>VI. Key Benefits That Justify the Fee (or Don't)</h2>
                    <p>The $395 annual fee is primarily justified by its annual credits.</p>
                    <p><strong>$300 Annual Travel Credit:</strong> A $300 credit each year for travel booked via Capital One Travel. It's automatically applied or available as a statement credit and expires at account anniversary if unused. The portal offers price matching, but some prefer direct bookings, potentially limiting this credit's value if the portal isn't a good fit.</p>
                    <p><strong>10,000 Anniversary Bonus Miles:</strong> 10,000 bonus miles annually starting the first anniversary, worth $100 for travel via Capital One Travel, or potentially $185 if transferred strategically.</p>
                    <p><strong>Calculating the "Effective" Annual Fee:</strong> Fully used, these benefits provide at least $400 value ($300 credit + $100 miles), making the effective annual fee -$5. This hinges on using Capital One Travel for at least $300 in bookings. If not, the effective fee is much higher. The portal-tied credit encourages engagement with Capital One's platform.</p>
                </section>

                <section id="section-7" className={styles.reviewSection}>
                    <h2>VII. Airport Lounge Access: Your Oasis on the Go</h2>
                    <p>The Venture X Business card offers comprehensive airport lounge access for primary cardholders.</p>
                    <p><strong>Capital One Lounges:</strong> Unlimited complimentary access to Capital One Lounges (DFW, DEN, IAD, LAS, with more planned). Known for premium amenities, cardholders can typically bring two guests free.</p>
                    <p><strong>Priority Pass Select Membership:</strong> Access to over 1,300 lounges worldwide. Notably, the Venture X Business card's Priority Pass reportedly includes non-lounge experiences like airport restaurant/spa credits, a perk not on the personal Venture X.</p>
                    <p><strong>Plaza Premium Group Lounges:</strong> Further expands lounge options.</p>
                    <p><strong>Employee/Authorized User Access:</strong> Unlike the personal Venture X, the Venture X Business generally does not provide complimentary, independent lounge access to employee cardholders. This is a key distinction for businesses with multiple traveling employees.</p>
                    <p><strong>Access Requirements:</strong> Typically, the Venture X Business card, ID, and same-day boarding pass are needed.</p>
                    <p><strong>Potential Downsides:</strong> Priority Pass lounges can be crowded. The Capital One Lounge network is still small but growing. The differentiation in employee card lounge access is likely a cost-control measure, allowing free employee cards while reserving the premium lounge perk for the main cardmember.</p>
                </section>

                <section id="section-8" className={styles.reviewSection}>
                    <h2>VIII. Premium Travel Perks & Credits</h2>
                    <p>Beyond annual credits and lounge access, the Venture X Business offers other travel-enhancing perks.</p>
                    <p><strong>Global Entry or TSA PreCheck Credit:</strong> Up to $120 statement credit for Global Entry or TSA PreCheck application fee, once every 4-4.5 years.</p>
                    <p><strong>Premier Collection Hotel Benefits:</strong> When booking luxury hotels via Capital One Travel's "Premier Collection," cardholders get a $100 experience credit per stay, daily breakfast for two, Wi-Fi, and potential upgrades/early check-in/late checkout. This, plus 10X miles on these bookings, incentivizes portal use for high-end stays.</p>
                    <p><strong>No Foreign Transaction Fees:</strong> Crucial for international business, saving ~3% on overseas purchases.</p>
                    <p><strong>Hertz President's Circle Status:</strong> While the personal Venture X offers this, its inclusion for the Venture X Business isn't explicitly confirmed in provided materials and should be verified by interested business owners.</p>
                    <p>These perks, especially Premier Collection benefits and the Global Entry/TSA PreCheck credit, add significant value for frequent travelers.</p>
                </section>

                <section id="section-9" className={styles.reviewSection}>
                    <h2>IX. Business-Focused Features & Tools</h2>
                    <p>The Venture X Business card includes features for business expense management.</p>
                    <ul className={styles.featureList}>
                        <li><strong>Free Employee Cards:</strong> Add employee cards at no extra cost, with all miles accruing to the primary account. Set custom spending limits and track transactions.</li>
                        <li><strong>Virtual Card Numbers:</strong> Generate unique, temporary numbers for secure online purchases.</li>
                        <li><strong>No Preset Spending Limit (Flexible Spend Capacity):</strong> Spending capacity adapts based on spending behavior, payment history, and credit profile, offering flexibility for large purchases. It's not "unlimited spending" and requires responsible management with the pay-in-full nature.</li>
                        <li><strong>Year-End Summaries & Accounting Integrations:</strong> Itemized year-end summaries and data downloads for Quicken®, QuickBooks®, and Excel® simplify bookkeeping.</li>
                        <li><strong>Account Managers:</strong> Designate an account manager for purchases, payments, and issue resolution.</li>
                        <li><strong>Automatic Payments (AutoPay):</strong> Set up automatic payments to avoid late fees.</li>
                    </ul>
                    <p>These tools position the card as an instrument for expense management, enhancing its utility beyond travel perks.</p>
                </section>

                <section id="section-10" className={styles.reviewSection}>
                    <h2>X. Understanding the "Pay-in-Full" Nature</h2>
                    <p>The Venture X Business is a "Pay-In-Full Card" or charge card. The entire balance must be paid monthly. It doesn't allow revolving a balance with interest like traditional credit cards.</p>
                    <p><strong>Implications for Business Cash Flow:</strong> This requires disciplined financial planning, especially for businesses with inconsistent income. Failure to pay in full results in late fees and potential penalties, not interest charges for carrying a balance (as there's no APR for purchases).</p>
                    <p>This encourages fiscal discipline but means the card isn't for short-term financing. It suits businesses with stable cash flow or strong financial management, reducing credit risk for Capital One.</p>
                </section>

                <section id="section-11" className={styles.reviewSection}>
                    <h2>XI. Travel & Purchase Protections: What's Covered?</h2>
                    <p>The Venture X Business card includes several protections, though full details are in the official benefits guide.</p>
                    <p><strong>Confirmed Protections:</strong></p>
                    <ul className={styles.featureList}>
                        <li>$0 Fraud Liability: No responsibility for unauthorized charges; emergency card replacement and cash advance available.</li>
                        <li>Extended Warranty Protection: May extend manufacturer's warranty on eligible purchases.</li>
                        <li>Card Lock: Quickly lock lost/stolen cards via app or online.</li>
                        <li>Security Alerts: Monitoring for suspicious transactions with notifications.</li>
                    </ul>
                    <p><strong>Protections via Capital One Travel:</strong></p>
                    <ul className={styles.featureList}>
                        <li>Price Drop Protection: Up to $50 travel credit if a recommended flight's price drops within 10 days of booking.</li>
                        <li>Price Match Guarantee: May match a better price for identical bookings found within 24 hours.</li>
                    </ul>
                    <p><strong>Other Potential Protections (Common for Premium Visa Cards):</strong></p>
                    <p>The personal Venture X (a Visa Infinite) includes Travel Accident Insurance, Trip Cancellation/Interruption, Baggage Delay/Loss, Auto Rental CDW, and Cell Phone Protection. Specifics for the business version (e.g., coverage amounts, whether Auto Rental CDW is primary) are not fully detailed in provided snippets, though one source lists "Primary car rental insurance". Business owners must consult their "Guide to Benefits" for full details.</p>
                </section>

                <section id="section-12" className={styles.reviewSection}>
                    <h2>XII. Eligibility & Application: What Does It Take?</h2>
                    <p>Applying for the Venture X Business requires good credit and business status.</p>
                    <p><strong>Credit Score Requirement:</strong> "Excellent credit" is needed. While no minimum is published, a FICO score of 740+ is often suggested.</p>
                    <p><strong>Business Information:</strong> Applicants provide business legal name, address, EIN, years in business, annual revenue, and industry type.</p>
                    <p><strong>Capital One's Application Sensitivities:</strong> Capital One is reportedly sensitive to recent hard inquiries and new accounts. They may pull reports from all three major credit bureaus (Equifax, Experian, TransUnion).</p>
                    <p><strong>Application Process:</strong> Typically online via Capital One's website. Pre-approval tools, if available, can check likelihood without a hard inquiry.</p>
                    <p>The "excellent credit" requirement and sensitivity to recent credit activity target financially established businesses.</p>
                </section>

                <section id="section-13" className={styles.reviewSection}>
                  <h2>XIII. Pros & Cons: The Quick Verdict</h2>
                  <DraggableTableWrapper>
                    <div className={styles.tableContainer}>
                        <table className={`${styles.statsTable} ${styles.prosConsTable}`}>
                            <thead>
                                <tr>
                                    <th>Pros</th>
                                    <th>Cons</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td data-label="Pros">
                                        <ul className={styles.featureListSimple}>
                                            <li>High Flat-Rate Rewards: Unlimited 2X miles on all purchases.</li>
                                            <li>Generous Welcome Offer: Up to 350,000 bonus miles, though with high spend.</li>
                                            <li>Effective Annual Fee Offset: $300 travel credit and 10,000 anniversary miles can negate the $395 fee.</li>
                                            <li>Comprehensive Lounge Access: Capital One Lounges, Priority Pass Select (with restaurant/spa access for business version), Plaza Premium.</li>
                                            <li>Flexible Redemptions: Direct travel, cover purchases, or transfer to 15+ partners.</li>
                                            <li>No Foreign Transaction Fees.</li>
                                            <li>Free Employee Cards with spending controls.</li>
                                            <li>Business Tools: Accounting integration, virtual cards, year-end summaries.</li>
                                            <li>Flexible Spending Capacity.</li>
                                        </ul>
                                    </td>
                                    <td data-label="Cons">
                                        <ul className={styles.featureListSimple}>
                                            <li>High Annual Fee ($395).</li>
                                            <li>Requires Excellent Credit.</li>
                                            <li>Pay-in-Full Charge Card.</li>
                                            <li>Portal Dependency for key benefits (travel credit, 5X/10X miles).</li>
                                            <li>Steep Welcome Offer Spend Requirements.</li>
                                            <li>International Skew of Transfer Partners requiring alliance knowledge for domestic US.</li>
                                            <li>Limited Lounge Access for Employee Cards.</li>
                                            <li>Small Capital One Lounge Network (though growing).</li>
                                            <li>Application Sensitivity.</li>
                                        </ul>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                  </DraggableTableWrapper>
                  <p>The card offers significant value but requires alignment with its usage structure, especially the Capital One Travel portal.</p>
                </section>

                <section id="section-14" className={styles.reviewSection}>
                    <h2>XIV. Competitor Comparison: How Does Venture X Business Stack Up?</h2>
                    <p>Choosing a premium business card requires comparing it against alternatives.</p>
                    <h3>Key Table: Premium Business Travel Card Comparison</h3>
                    <DraggableTableWrapper>
                        <div className={styles.tableContainer}>
                            <table className={`${styles.statsTable} ${styles.ratesFeesTable}`}>
                                <thead>
                                    <tr>
                                        <th>Feature</th>
                                        <th>Capital One Venture X Business</th>
                                        <th>The Business Platinum Card® from American Express</th>
                                        <th>Chase Ink Business Preferred® Credit Card</th>
                                        <th>American Express® Business Gold Card</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr><td data-label="Feature">Annual Fee</td><td data-label="Capital One Venture X Business">$395</td><td data-label="The Business Platinum Card® from American Express">$695</td><td data-label="Chase Ink Business Preferred® Credit Card">$95</td><td data-label="American Express® Business Gold Card">$375</td></tr>
                                    <tr><td data-label="Feature">Current Welcome Offer (Examples)</td><td data-label="Capital One Venture X Business">Up to 350,000 miles ($30K/$200K spend)</td><td data-label="The Business Platinum Card® from American Express">150,000 MR® points ($20K spend)</td><td data-label="Chase Ink Business Preferred® Credit Card">90,000 UR® points ($8K spend)</td><td data-label="American Express® Business Gold Card">125,000 MR® points ($15K spend)</td></tr>
                                    <tr><td data-label="Feature">Rewards on General Business Spend</td><td data-label="Capital One Venture X Business">2X miles</td><td data-label="The Business Platinum Card® from American Express">1X pts; 1.5X on $5K+ purchases (up to $2M/yr)</td><td data-label="Chase Ink Business Preferred® Credit Card">1X pts</td><td data-label="American Express® Business Gold Card">1X pts</td></tr>
                                    <tr><td data-label="Feature">Bonus Rewards Categories</td><td data-label="Capital One Venture X Business">5X flights, 10X hotels/cars (C1 Travel)</td><td data-label="The Business Platinum Card® from American Express">5X pts flights & prepaid hotels (AmexTravel.com)</td><td data-label="Chase Ink Business Preferred® Credit Card">3X pts travel, shipping, internet/cable/phone, online ads (first $150K combined/yr)</td><td data-label="American Express® Business Gold Card">4X pts top 2 eligible categories (first $150K combined/yr)</td></tr>
                                    <tr><td data-label="Feature">Key Annual Travel/Statement Credits</td><td data-label="Capital One Venture X Business">$300 travel credit (C1 Travel)</td><td data-label="The Business Platinum Card® from American Express">$200 airline fee; $200 hotel (Amex Travel); $189 CLEAR® Plus; Hilton credits, etc. (over $1K value)</td><td data-label="Chase Ink Business Preferred® Credit Card">Points 25% more for travel via Chase Travel℠</td><td data-label="American Express® Business Gold Card">Up to $240 flexible business credit; up to $155 Walmart+ credit</td></tr>
                                    <tr><td data-label="Feature">Airport Lounge Access</td><td data-label="Capital One Venture X Business">C1 Lounges; Priority Pass Select (incl. restaurants); Plaza Premium</td><td data-label="The Business Platinum Card® from American Express">Amex Global Lounge Collection (Centurion, Priority Pass, Delta Sky Club, etc.)</td><td data-label="Chase Ink Business Preferred® Credit Card">None complimentary</td><td data-label="American Express® Business Gold Card">None complimentary</td></tr>
                                    <tr><td data-label="Feature">Unique Standout Perk</td><td data-label="Capital One Venture X Business">10K anniversary miles; simple 2X earn; Priority Pass restaurant access.</td><td data-label="The Business Platinum Card® from American Express">Broadest luxury credits & elite statuses.</td><td data-label="Chase Ink Business Preferred® Credit Card">Primary auto rental CDW; cell phone protection; strong 3X categories.</td><td data-label="American Express® Business Gold Card">Flexible 4X bonus categories.</td></tr>
                                    <tr><td data-label="Feature">Points Ecosystem</td><td data-label="Capital One Venture X Business">Capital One Miles</td><td data-label="The Business Platinum Card® from American Express">Amex Membership Rewards®</td><td data-label="Chase Ink Business Preferred® Credit Card">Chase Ultimate Rewards®</td><td data-label="American Express® Business Gold Card">Amex Membership Rewards®</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </DraggableTableWrapper>
                    <p><small>Offers/details subject to change.</small></p>
                    <p>The Venture X Business offers a simple 2X earn and an easily offset annual fee. Amex Business Platinum has a higher fee but more extensive lounge access and luxury credits. Chase Ink Business Preferred excels with 3X business categories and protections for a lower fee. Amex Business Gold offers flexible 4X bonus categories. The best choice depends on business spending and priorities.</p>
                </section>

                <section id="section-15" className={styles.reviewSection}>
                    <h2>XV. Real-World Example: Putting the Card to Work</h2>
                    <p>Consider "Creative Solutions LLC," a marketing agency.</p>
                    <ul className={styles.featureList}>
                        <li>Year 1 Major Spend: $40,000 in first 3 months (tech upgrade, client projects), earning first tier welcome bonus.</li>
                        <li>Ongoing Monthly Spend (avg. after 3 months): $8,000 general, $2,000 flights (C1T), $1,500 hotels/cars (C1T).</li>
                        <li>Total Spend Year 1: $143,500.</li>
                    </ul>
                    <p><strong>Calculations - Year 1:</strong></p>
                    <ul className={styles.featureList}>
                        <li>Miles from Regular Spend:
                            <ul className={styles.subList}>
                                <li>Initial $40K (general): 80,000 miles</li>
                                <li>General ($72K x 2X): 144,000 miles</li>
                                <li>Flights C1T ($18K x 5X): 90,000 miles</li>
                                <li>Hotels/Cars C1T ($13.5K x 10X): 135,000 miles</li>
                                <li>Subtotal from spend = 449,000 miles</li>
                            </ul>
                        </li>
                        <li>Welcome Bonus: 150,000 miles (met $30K spend).</li>
                        <li>Total Miles Year 1: 599,000 miles.</li>
                        <li>Value of Miles (@ 1 cent/mile): $5,990.</li>
                        <li>Value of Credits: $300 Travel Credit + $120 Global Entry = $420.</li>
                        <li>Net Value Year 1: $5,990 (miles) + $420 (credits) - $395 (fee) = $6,015.</li>
                    </ul>
                    <p><strong>Calculations - Year 2+ (assuming similar $143,500 spend):</strong></p>
                    <ul className={styles.featureList}>
                        <li>Miles from Spend: 449,000 miles.</li>
                        <li>Anniversary Bonus: 10,000 miles.</li>
                        <li>Total Miles Year 2: 459,000 miles.</li>
                        <li>Value of Miles (@ 1 cent/mile): $4,590.</li>
                        <li>Value of Credits: $300 Travel Credit.</li>
                        <li>Net Value Year 2: $4,590 (miles) + $300 (credit) - $395 (fee) = $4,495.</li>
                    </ul>
                    <p>Creative Solutions LLC benefits significantly, especially in Year 1. Ongoing value is strong due to portal use for bonus miles and easily consumed credits. Employee cards streamline expenses. Strategic mile redemption via transfer partners could further increase value.</p>
                </section>

                <section id="section-16" className={styles.reviewSection}>
                    <h2>XVI. User Sentiment: What Are Cardholders Saying?</h2>
                    <p>Real-world feedback highlights common themes.</p>
                    <p><strong>Common Praises:</strong></p>
                    <ul className={styles.featureList}>
                        <li>High Welcome Offer Value (for those meeting spend).</li>
                        <li>Effective Negative Annual Fee via credits.</li>
                        <li>Simple 2X Base Earning.</li>
                        <li>Lounge Access (especially Priority Pass restaurant credits for business version).</li>
                        <li>User-Friendly Capital One Travel Portal with price drop protection.</li>
                        <li>Free Employee Cards.</li>
                        <li>No Reporting to Personal Credit (generally, unless delinquent).</li>
                    </ul>
                    <p><strong>Common Complaints/Concerns:</strong></p>
                    <ul className={styles.featureList}>
                        <li>Extremely High Spend for Full Welcome Bonus.</li>
                        <li>Travel Credit Portal Restriction.</li>
                        <li>Transfer Partner Limitations for easy domestic US travel.</li>
                        <li>Application Difficulty and sensitivity to inquiries.</li>
                        <li>Customer Service Variability.</li>
                        <li>Charge Card Nature (pay-in-full).</li>
                    </ul>
                    <p>Sentiment often depends on the welcome offer's feasibility and portal dependency. Businesses aligned with these report high satisfaction.</p>
                </section>

                <section id="section-17" className={styles.reviewSection}>
                    <h2>XVII. Expert Tips for Maximizing Value</h2>
                    <ol className={styles.orderedList}>
                        <li>Plan for the Welcome Offer: Align application with large, necessary business expenses.</li>
                        <li>Prioritize $300 Travel Credit: Book at least $300 travel annually via Capital One Travel. Check for price matches.</li>
                        <li>Value 10,000 Anniversary Miles: This further reduces the card's effective cost.</li>
                        <li>Maximize Portal Bookings: Use Capital One Travel for 5X/10X miles when prices are competitive.</li>
                        <li>Master Transfer Partners: Identify key partners for your routes. Watch for transfer bonuses. Confirm award availability before transferring.</li>
                        <li>Leverage Business Tools: Use free employee cards, virtual numbers, and accounting integrations.</li>
                        <li>Utilize Lounge Access: Take advantage of all lounge network benefits.</li>
                        <li>Opt for Global Entry with the credit if international travel is anticipated.</li>
                        <li>Adhere to Pay-in-Full: Ensure cash flow to pay the balance monthly.</li>
                        <li>Monitor Benefit Changes: Stay updated on card terms and perks.</li>
                    </ol>
                    <p>Maximizing the card involves active engagement with its portal, transfer partners, and business tools.</p>
                </section>

                <section id="section-18" className={`${styles.reviewSection} ${styles.faqSection}`}>
                    <h2>XVIII. Frequently Asked Questions (General)</h2>
                    <div className={styles.faqContainer}>
                        <details className={styles.faqItem}>
                            <summary className={styles.faqQuestion}>Q1: Is the $395 annual fee worth it?</summary>
                            <div className={styles.faqAnswer}><p>A: Yes, if you use the $300 travel credit (via Capital One Travel) and value the 10,000 anniversary miles ($100+ value), effectively making the fee -$5. (See Sections V, VI)</p></div>
                        </details>
                        <details className={styles.faqItem}>
                            <summary className={styles.faqQuestion}>Q2: What credit score is needed?</summary>
                            <div className={styles.faqAnswer}><p>A: "Excellent credit," typically 720-740 FICO or higher. (See Section XII)</p></div>
                        </details>
                        <details className={styles.faqItem}>
                            <summary className={styles.faqQuestion}>Q3: Can I carry a balance?</summary>
                            <div className={styles.faqAnswer}><p>A: No, it's a pay-in-full charge card. (See Section X)</p></div>
                        </details>
                        <details className={styles.faqItem}>
                            <summary className={styles.faqQuestion}>Q4: Best transfer partners for domestic US travel?</summary>
                            <div className={styles.faqAnswer}><p>A: Use international partners in alliances: Air Canada Aeroplan or Avianca LifeMiles (for United), British Airways (for American/Alaska). Requires research.</p></div>
                        </details>
                        <details className={styles.faqItem}>
                            <summary className={styles.faqQuestion}>Q5: How does "no preset spending limit" work?</summary>
                            <div className={styles.faqAnswer}><p>A: Purchasing capacity adapts based on spending, payment history, etc. Not unlimited. (See Section IX)</p></div>
                        </details>
                        <details className={styles.faqItem}>
                            <summary className={styles.faqQuestion}>Q6: Are employee cards free, and do they get lounge access?</summary>
                            <div className={styles.faqAnswer}><p>A: Yes, employee cards are free. No, they generally don't get their own complimentary lounge access.</p></div>
                        </details>
                        <details className={styles.faqItem}>
                            <summary className={styles.faqQuestion}>Q7: Must I use Capital One Travel for bonus miles?</summary>
                            <div className={styles.faqAnswer}><p>A: Yes, for 10X on hotels/cars and 5X on flights. All other purchases earn 2X. (See Section III)</p></div>
                        </details>
                        <details className={styles.faqItem}>
                            <summary className={styles.faqQuestion}>Q8: Does it report to personal credit?</summary>
                            <div className={styles.faqAnswer}><p>A: Typically no, unless the account is delinquent.</p></div>
                        </details>
                    </div>
                </section>

                <section id="section-19" className={styles.reviewSection}>
                    <h2>XIX. Our Final Verdict: Who Should Get the Venture X Business Card (and Who Shouldn't)?</h2>
                    <p>The Venture X Business is a strong premium business travel card, best for those whose habits align with its structure.</p>
                    <p><strong>Excellent fit for:</strong></p>
                    <ul className={styles.featureList}>
                        <li>Businesses with Significant Annual Spending.</li>
                        <li>Frequent Travelers Comfortable with Portal Bookings.</li>
                        <li>Users Valuing Simplicity with Premium Perks.</li>
                        <li>Financially Disciplined Businesses (can pay in full monthly).</li>
                        <li>Organizations Wanting Expense Consolidation via free employee cards.</li>
                    </ul>
                    <p><strong>Not the best choice for:</strong></p>
                    <ul className={styles.featureList}>
                        <li>Businesses with Low Annual Spending.</li>
                        <li>Those Who Strictly Avoid Travel Portals.</li>
                        <li>Companies Needing to Carry a Balance.</li>
                        <li>Businesses Prioritizing Specific Non-Travel Bonus Categories.</li>
                        <li>Very Small Businesses/Sole Proprietors with Limited Spend.</li>
                    </ul>
                    <p><strong>Alternative Card Suggestions:</strong></p>
                    <ul className={styles.featureList}>
                        <li>Simple Cash Back (High Spend): Capital One Spark Cash Plus (2% cash back, charge card, annual fee).</li>
                        <li>Simple Cash Back (No Annual Fee): Capital One Spark 1.5% Cash Select (1.5% cash back).</li>
                        <li>Specific Business Bonus Categories (Lower Fee): Chase Ink Business Preferred® ($95 fee, 3X categories).</li>
                        <li>Ultimate Luxury Travel (Higher Fee): The Business Platinum Card® from American Express ($695 fee, extensive credits).</li>
                    </ul>
                    <p>The Venture X Business offers compelling value, especially its credits and rewards, for businesses that can leverage its portal-centric benefits and manage its pay-in-full nature. For others, different financial tools might be more suitable.</p>
                </section>
                
                <section id="section-20" className={`${styles.reviewSection} ${styles.faqSection}`}>
                    <h2>XX. Capital One Venture X Business: Top 10 FAQs (Card Specific)</h2>
                    <div className={styles.faqContainer}>
                        <details className={styles.faqItem}>
                            <summary className={styles.faqQuestion}>1. What is the annual fee for the Venture X Business card and is it a charge card?</summary>
                            <div className={styles.faqAnswer}><p>The Capital One Venture X Business card has a $395 annual fee. It is a pay-in-full charge card, meaning the balance must be paid in full each month.</p></div>
                        </details>
                        <details className={styles.faqItem}>
                            <summary className={styles.faqQuestion}>2. What is the current welcome offer for the Venture X Business card?</summary>
                            <div className={styles.faqAnswer}><p>For a limited time, new cardholders can earn up to 350,000 bonus miles. This is a tiered offer: 150,000 miles after spending $30,000 in the first 3 months, and an additional 200,000 miles after spending a total of $200,000 in the first 6 months.</p></div>
                        </details>
                        <details className={styles.faqItem}>
                            <summary className={styles.faqQuestion}>3. How do I earn miles with the Venture X Business card?</summary>
                            <div className={styles.faqAnswer}><p>You earn unlimited 2X miles on every purchase. You also earn 5X miles on flights and vacation rentals booked through Capital One Travel, and 10X miles on hotels and rental cars booked through Capital One Travel.</p></div>
                        </details>
                        <details className={styles.faqItem}>
                            <summary className={styles.faqQuestion}>4. How can I redeem my Venture X Business miles?</summary>
                            <div className={styles.faqAnswer}><p>Miles can be redeemed to cover recent travel purchases (within 90 days) at 1 cent per mile, to book new travel through Capital One Travel, or by transferring them to over 15 airline and hotel partners. Miles can also be used for gift cards or cash back, though often at a lower value.</p></div>
                        </details>
                        <details className={styles.faqItem}>
                            <summary className={styles.faqQuestion}>5. How does the $300 annual travel credit work?</summary>
                            <div className={styles.faqAnswer}><p>Primary account holders receive a $300 annual travel credit for bookings made through Capital One Travel. The credit is automatically available at checkout and expires on your next account anniversary if unused.</p></div>
                        </details>
                        <details className={styles.faqItem}>
                            <summary className={styles.faqQuestion}>6. What airport lounge access does the primary Venture X Business cardholder get?</summary>
                            <div className={styles.faqAnswer}><p>The primary cardholder receives unlimited complimentary access to Capital One Lounges (plus two guests per visit) and access to over 1,300 global airport lounges through the Partner Lounge Network, which includes Priority Pass (enrollment required), also typically with two guests per visit.</p></div>
                        </details>
                        <details className={styles.faqItem}>
                            <summary className={styles.faqQuestion}>7. Do employee cardholders on the Venture X Business card get their own lounge access (e.g., Priority Pass)?</summary>
                            <div className={styles.faqAnswer}><p>No, according to official Capital One lounge access pages, authorized users and account managers on the Venture X Business card are not eligible for complimentary access to Capital One Lounges or the Partner Lounge Network (which includes Priority Pass). They may enter as one of the primary cardholder's guests or pay the standard rate. This differs from the personal Venture X card.</p></div>
                        </details>
                        <details className={styles.faqItem}>
                            <summary className={styles.faqQuestion}>8. Does the Venture X Business card offer primary Auto Rental Collision Damage Waiver (CDW)?</summary>
                            <div className={styles.faqAnswer}><p>Yes, the Venture X Business card, as a Visa Infinite Business product, offers Auto Rental Collision Damage Waiver (CDW) that is primary coverage. This means it takes precedence over your personal or business auto insurance for covered incidents when you decline the rental company's CDW and pay for the entire rental with your card. Coverage is generally up to the Actual Cash Value of most rental vehicles (MSRP up to $75,000) for rental periods up to 31 days.</p></div>
                        </details>
                        <details className={styles.faqItem}>
                            <summary className={styles.faqQuestion}>9. Are employee cards free for the Venture X Business card, and what spending controls are available?</summary>
                            <div className={styles.faqAnswer}><p>Yes, employee cards are free to add to the Venture X Business account. You can set customized spending limits for each employee card, track their transactions in real-time, and receive year-end summaries.</p></div>
                        </details>
                        <details className={styles.faqItem}>
                            <summary className={styles.faqQuestion}>10. What credit score is generally needed to apply for the Venture X Business card?</summary>
                            <div className={styles.faqAnswer}><p>"Excellent" credit is required for the Venture X Business card. Bankrate suggests a FICO score in the range of 740 to 850 is typically needed. Capital One also considers factors like never having declared bankruptcy or defaulted on a loan, and no recent late payments.</p></div>
                        </details>
                    </div>
                </section>

                <section id="eat-expertise-authority-trustworthiness" className={`${styles.reviewSection} ${styles.eatSection}`}>
                    <h2 dangerouslySetInnerHTML={{ __html: "Our Commitment to E-A-T: Expertise, Authority &amp; Trustworthiness"}}></h2>
                    <p>At <strong>{siteName}</strong>, we ensure our content meets the highest standards. This review of the <strong>{reviewDataNew.cardName}</strong> is based on thorough research of the card's features, terms, and conditions as of {updateDate}, as well as comparisons to other cards in the market, to provide you with a reliable and comprehensive guide.</p>
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

export default CapitalOneVentureXBusinessReviewPage;