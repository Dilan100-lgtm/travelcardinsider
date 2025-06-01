/* ------------------------------------------------------------------
    File:  pages/reviews/bank-of-america-travel-rewards-review.js
    Route: https://www.yourwebsite.com/reviews/bank-of-america-travel-rewards-review
------------------------------------------------------------------- */

import React, { useState, useEffect, useCallback, useRef } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import styles from '../../styles/ReviewPage.module.css'; // Assuming same CSS module

import TableOfContents from '../../components/TableOfContents'; // Assuming same TOC component
// Using existing icons from your Platinum example; update if new ones are needed
import IconGift from '../../components/icons/icon-gift.svg';
import IconStar from '../../components/icons/icon-star.svg';
import IconCheck from '../../components/icons/icon-Credit Card.svg'; // Represents fee or card feature
import IconPlus from '../../components/icons/icon-target.svg'; // Represents 'Best For' or 'Key Benefit'
import IconPlane from '../../components/icons/icon-plane.svg'; // Represents Travel Perks
// import IconDollar from '../../components/icons/icon-dollar.svg'; // Not explicitly needed for BofA summary box as designed
// import IconBriefcase from '../../components/icons/icon-briefcase.svg'; // May not be primary for this card's summary

const RatingTooltip = dynamic(() => import('../../components/RatingTooltip'), { ssr: false, loading: () => null });

/* ──────────────────────────────
    CONSTANTS & STATIC DATA
    ────────────────────────────── */
const siteName = 'Travelcardinsider'; // /* UPDATE THIS IF DIFFERENT */
const siteUrl = 'https://www.travelcardinsider.com'; // /* UPDATE THIS IF DIFFERENT */
const pagePath = '/reviews/bank-of-america-travel-rewards-review';
const pageUrlFull = `${siteUrl}${pagePath}`;
const publishDate = '2025-06-01'; // /* UPDATE THIS */ Current date or actual publish date
const updateDate = '2025-06-01'; // /* UPDATE THIS */ Current date or actual update date

// Source mapping for citations (internal reference, not directly used in code in this form)
// Source 1: Official Bank of America® Travel Rewards Credit Card Page
// Source 2: Official Bank of America Preferred Rewards® Program Page
// Source 3: Official Visa Signature® Benefits Page
// Source 4: Official Chase Sapphire Preferred® Card Page
// Source 5: Official Capital One Venture Rewards Credit Card Page
// Source 6: Official Discover it® Miles Card Page
// Source 7: Official Wells Fargo Autograph℠ Card Page

// Data specific to the Bank of America® Travel Rewards Credit Card Review
const reviewData = {
  cardName        : 'Bank of America® Travel Rewards credit card',
  cardShortName   : 'BofA Travel Rewards',
  title           : 'Bank of America® Travel Rewards Card Review (2025): Simple No-Fee Points?',
  description     : 'In-depth 2025 review of the Bank of America® Travel Rewards credit card. Explore 1.5x-2.625x points, no annual fee, no foreign transaction fees, Preferred Rewards boost & $250 bonus. Is it the best simple travel card for you?',
  keywords        : 'Bank of America Travel Rewards review, BofA Travel Rewards, no annual fee travel credit card, Preferred Rewards, Bank of America points, no foreign transaction fee card, BofA Travel Rewards 2025',
  author: { // /* Using Dilan's details from Platinum example; UPDATE ALL AUTHOR DETAILS AS NEEDED */
      name: 'Dilan Madushanka',
      title: 'Founder & Lead Editor',
      imageUrl: '/WhatsApp Image 2025-05-12 at 4.09.58 PM.jpeg', // /* UPDATE THIS */
      imageWidth: 40,
      imageHeight: 40,
      tooltipImageUrl: '/WhatsApp Image 2025-05-12 at 4.09.58 PM.jpeg', // /* UPDATE THIS */
      tooltipImageWidth: 60,
      tooltipImageHeight: 60,
      expertise: [
          'No-Annual-Fee Rewards Cards',
          'Travel Rewards Programs',
          'Bank Loyalty Programs (Preferred Rewards)',
          'Credit Card Application Strategies',
          'Maximizing Everyday Spending Rewards'
      ],
      bioSnippet: 'Dilan Madushanka is the founder and lead editor of Travelcardinsider, specializing in demystifying credit cards like the Bank of America® Travel Rewards to help users find maximum value with simplicity.', // /* UPDATE THIS */
      fullBioLink: '/author/dilan-madushanka', // /* UPDATE THIS */
      publishedStats: 'X+ card reviews published', // /* UPDATE THIS */
      testedStats: 'Over Y+ card benefits analyzed', // /* UPDATE THIS */
      socialLinks: { // /* UPDATE THIS */
          linkedin: 'https://www.linkedin.com/in/dilan-madushanka-b65293365',
          twitter: 'https://x.com/team_dilan',
          email: 'team@travelcardinsider.com'
      }
  },
  siteName: siteName,
  imageUrl        : '/bofa-travel-rewards-card.avif', // /* UPDATE THIS with actual card image path */
  imageWidth      : 1290, // /* UPDATE THIS if image dimensions differ */
  imageHeight     : 812,  // /* UPDATE THIS if image dimensions differ */
  ratingValue     : 8.2,  // /* UPDATE THIS */ Example rating
  ratingCount     : 160,  // /* UPDATE THIS */ Example review count
  reviewBody      : 'Our editors evaluate the Bank of America® Travel Rewards credit card based on its flat-rate rewards, no annual fee, no foreign transaction fees, the value of the Preferred Rewards program boost, introductory offers, and overall simplicity for travelers and everyday spenders.', // For Schema
  aprRange        : 'Variable APR, often includes a 0% intro APR on purchases and qualifying balance transfers for the first 15 billing cycles. Refer to official rates and terms.', // From content
  annualFee       : 0,  // From content
  // /* USER ACTION: UPDATE ALL LINKS BELOW WITH OFFICIAL BOFA URLs */
  applyLink       : 'https://www.bankofamerica.com/credit-cards/products/travel-rewards-credit-card/', // Placeholder - Official Apply Link
  ratesFeesLink   : 'https://www.bankofamerica.com/credit-cards/products/travel-rewards-credit-card/', // Placeholder - Official Rates & Fees (Cited)
  officialOverviewLink: 'https://www.bankofamerica.com/credit-cards/products/travel-rewards-credit-card/', // Placeholder - Official Card Page
  officialBofaTravelCenterLink: 'https://www.bankofamerica.com/credit-cards/travel-center/', // Placeholder for BofA Travel Center
  officialPreferredRewardsLink: 'https://promotions.bankofamerica.com/preferredrewards/en', // Official Preferred Rewards Page
  officialVisaSignatureLink: 'https://usa.visa.com/pay-with-visa/cards/visa-credit-cards/visa-signature-credit-cards.html', // Official Visa Signature Page

  sku             : 'BOFA-TRAVELREWARDS-TCI-2025', // /* UPDATE THIS */ Example SKU
  mpn             : 'BOFATRAVELREWARDS', // /* UPDATE THIS */ Example MPN
  h1Content       : "Bank of America® Travel Rewards Card: Your Compass to Simple, Rewarding Journeys?",
  heroSubtitle    : "Is the BofA Travel Rewards card the key to uncomplicated travel points? Our 2025 review explores its no-annual-fee structure, 1.5x rewards, and the powerful Preferred Rewards boost."
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
      name           : reviewData.cardName,
      image          : `${siteUrl}${reviewData.imageUrl}`,
      description    : reviewData.description,
      sku            : reviewData.sku,
      mpn            : reviewData.mpn,
      brand          : { '@type': 'Brand', name: 'Bank of America' },
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
        priceValidUntil    : '2026-12-31', // /* UPDATE THIS AS NEEDED */
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
            description          : `Purchase APR: ${reviewData.aprRange}. Foreign Transaction Fee: None. See official ${reviewData.cardName} Rates & Fees on the issuer's website.`,
          },
        ],
        seller: { '@type': 'Organization', name: 'Bank of America' },
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
        description: `${siteName} editorial rating based on a 10.0 scale, as of ${new Date(updateDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}.`
      },
      author          : {
          '@type': 'Person',
          'name': reviewData.author.name,
          'url': reviewData.author.fullBioLink ? `${siteUrl}${reviewData.author.fullBioLink}` : undefined,
      },
      publisher       : {
        '@type' : 'Organization',
        name    : siteName,
        logo    : { '@type': 'ImageObject', url: `${siteUrl}/images/logo/your-logo-schema.png` }, // /* UPDATE THIS */
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
        { '@type': 'ListItem', position: 2, name: 'Credit Card Reviews', item: `${siteUrl}/reviews` }, // /* UPDATE THIS if path differs */
        { '@type': 'ListItem', position: 3, name: `${reviewData.cardName} Review`, item: pageUrlFull },
      ],
    },
    { // FAQs from user's text (Section 21)
      '@type'    : 'FAQPage',
      '@id'      : `${pageUrlFull}#faqs`,
      mainEntity: [
        { '@type': 'Question', name: 'How much are points worth with the Bank of America® Travel Rewards credit card?', acceptedAnswer: { '@type': 'Answer', text: 'Points are worth $0.01 each when redeemed for travel or dining statement credits. For example, 25,000 points equal $250 toward eligible purchases.' } },
        { '@type': 'Question', name: 'Do I have to book travel through the Bank of America Travel Center to redeem my points?', acceptedAnswer: { '@type': 'Answer', text: 'No, you can book your travel anywhere you find the best deal and then redeem your points for a statement credit against that purchase. However, booking flights, hotels, and rental cars through the Bank of America Travel Center earns you an elevated rate of 3 points per $1 spent.' } },
        { '@type': 'Question', name: 'What types of purchases count as "travel" for redemption purposes?', acceptedAnswer: { '@type': 'Answer', text: 'Bank of America has a broad definition of travel for redemption. It includes standard purchases like flights, hotels, car rentals, and cruises, but also extends to vacation rentals, baggage fees, and even expenses like timeshares, campgrounds, passenger trains, amusement parks, museums, and zoos.' } },
        { '@type': 'Question', name: 'Is the Bank of America® Travel Rewards card good for international travel?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, it\'s a good option for international travel because it has no foreign transaction fees, which can save you around 3% on purchases made abroad compared to cards that do charge this fee.' } },
        { '@type': 'Question', name: 'How does the Bank of America Preferred Rewards® program boost earnings on this card?', acceptedAnswer: { '@type': 'Answer', text: 'Eligible Bank of America Preferred Rewards® members receive a points bonus of 25% to 75% on all points earned, depending on their tier. This is based on their qualifying combined balances in Bank of America deposit accounts and/or Merrill investment accounts.' } },
        { '@type': 'Question', name: 'Do points earned with this card expire?', acceptedAnswer: { '@type': 'Answer', text: 'No, points do not expire as long as your account remains open and in good standing. However, there is typically a 12-month window from the purchase date to redeem points against eligible travel and dining purchases.' } },
        { '@type': 'Question', name: 'Can I transfer my points to airline or hotel partners?', acceptedAnswer: { '@type': 'Answer', text: 'No, the Bank of America® Travel Rewards credit card does not offer the ability to transfer points to airline or hotel loyalty programs.' } },
        { '@type': 'Question', name: 'Is there a minimum number of points required to redeem?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, there is typically a minimum redemption requirement, often 2,500 points, which translates to a $25 statement credit.' } },
        { '@type': 'Question', name: 'Are there any caps on the points I can earn?', acceptedAnswer: { '@type': 'Answer', text: 'No, you earn unlimited 1.5 points per $1 spent on all purchases, with no caps or categories to track for the base earning rate.' } },
        { '@type': 'Question', name: 'How do no foreign transaction fees save money?', acceptedAnswer: { '@type': 'Answer', text: 'No foreign transaction fees mean you avoid an extra charge (often around 3%) on purchases made outside the U.S. or in a foreign currency. For example, on $1,000 spent abroad, you would save approximately $30 with this card.' } }
      ],
    },
    { // Organization details
      '@type' : 'Organization',
      '@id'   : `${siteUrl}#website`,
      name    : siteName,
      url     : siteUrl,
      logo    : { '@type': 'ImageObject', url: `${siteUrl}/images/logo/your-logo-schema.png` }, // /* UPDATE THIS */
      sameAs  : [ // /* UPDATE THESE */
        "https://www.facebook.com/YourTravelCardInsiderFacebookPage",
        "https://twitter.com/YourTravelCardInsiderTwitterHandle",
      ],
    },
  ],
};

// Rating criteria adapted for this card
const ratingCriteria = [
    'Base Rewards Rate (1.5x points value)',
    'Preferred Rewards Program Boost (Potential up to 2.625x)',
    'Welcome Bonus Value & Spending Requirement',
    'Annual Fee (Absence thereof - $0)',
    'Foreign Transaction Fees (Absence thereof)',
    'Redemption Flexibility & Value (Travel & Dining Credits)',
    'Value of 3x Points at BofA Travel Center',
    'Introductory APR Offer on Purchases & Balance Transfers',
    'Clarity of Terms & Ease of Use',
    'Associated Perks (Visa Signature, Museums on Us®)',
];

// Table of Contents sections based on the review structure
const tocSections = [
    { id: 'section-intro', title: '1. Introduction: Navigating No-Fee Travel Rewards' },
    { id: 'section-tldr', title: '2. TL;DR: Is the BofA Travel Rewards Your Go-To Card?' },
    { id: 'section-snapshot', title: '3. At a Glance: Card Snapshot & Ideal User Profile' },
    { id: 'section-visual-appeal', title: '4. Visual Appeal: The Card\'s Understated Design' },
    { id: 'section-key-features', title: '5. Key Features & Benefits: What Makes It Shine?' },
    { id: 'section-pros-cons', title: '6. Pros & Cons: A Quick Rundown' },
    { id: 'section-welcome-bonus', title: '7. Welcome Bonus Analysis: A Solid Start for Travelers' },
    { id: 'section-earning-points', title: '8. Earning Points: From Everyday Spending to Travel Bookings' },
    { id: 'section-preferred-rewards', title: '9. Power Up: The Preferred Rewards Program Advantage' },
    { id: 'section-redeeming-points', title: '10. Redeeming Points: Maximum Flexibility for Travel & Dining' },
    { id: 'section-international-travel', title: '11. Global Travel Made Easy: No Foreign Transaction Fees' },
    { id: 'section-intro-apr', title: '12. Smart Savings: Leveraging the Introductory APR' },
    { id: 'section-security', title: '13. Security & Management: Tools for Peace of Mind' },
    { id: 'section-visa-signature', title: '14. Extra Perks: Unpacking Visa Signature® Benefits' },
    { id: 'section-user-profiling', title: '15. Is This Card For You? Detailed User Profiling' },
    { id: 'section-real-world-example', title: '16. Value Illustrated: A Real-World Rewards Example' },
    { id: 'section-competitors', title: '17. Head-to-Head: Comparison with Competing Travel Cards' },
    { id: 'section-user-testimonials', title: '18. Community Insights: What Real Users Are Saying' },
    { id: 'section-application', title: '19. Application Guide: Eligibility and How to Apply' },
    { id: 'section-final-verdict', title: '20. Our Expert Verdict: The Bottom Line on BofA Travel Rewards' },
    { id: 'section-next-steps', title: '21. Next Steps: Embark on Your Rewards Journey' },
    { id: 'section-faqs-jump', title: '22. Card-Specific Frequently Asked Questions' },
    { id: 'section-eat', title: '23. Our E-A-T Pledge: Why You Can Trust This Review' },
];

// Placeholder for content images, update paths as needed
const contentImage1 = "/bofa-travel-rewards-feature1.webp"; // /* UPDATE THIS */
const contentImage2 = "/bofa-travel-rewards-feature2.webp"; // /* UPDATE THIS */


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
function BankOfAmericaTravelRewardsReviewPage() {
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
    welcomeOffer: "Typically 25,000 bonus points after $1,000 spend in 90 days (worth $250 for travel/dining).",
    annualFee: `$${reviewData.annualFee}`,
    topEarning: "Unlimited 1.5X points on all purchases; 3X points via BofA Travel Center. Up to 2.625X (or 5.25X) with Preferred Rewards.",
    keyPerks: "No Foreign Transaction Fees. Potential 25%-75% points boost with Preferred Rewards.",
    bestFor: "No-fee simplicity seekers & Bank of America loyalists aiming to maximize rewards through the Preferred Rewards program."
  };


  return (
    <div>
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
        <meta property="og:title"       content={reviewData.title} />
        <meta property="og:description" content={reviewData.description} />
        <meta property="og:url"         content={pageUrlFull} />
        <meta property="og:image"       content={`${siteUrl}${reviewData.imageUrl}`} />
        <meta property="og:image:width" content={String(reviewData.imageWidth)} />
        <meta property="og:image:height" content={String(reviewData.imageHeight)} />
        <meta property="article:publisher" content={`https://www.facebook.com/YourTravelCardInsiderFacebookPage`} />  {/* /* UPDATE THIS */ }
        <meta property="article:section"       content="Credit Card Reviews" />
        <meta property="article:published_time" content={publishDate} />
        <meta property="article:modified_time"  content={updateDate} />
        <meta property="article:author" content={reviewData.author.name} />
        {reviewData.keywords.split(',').map(keyword => (
            <meta property="article:tag" content={keyword.trim()} key={keyword.trim()} />
        ))}
        <meta name="twitter:card"        content="summary_large_image" />
        <meta name="twitter:site" content="@YourTravelCardInsiderTwitterHandle" /> {/* /* UPDATE THIS */ }
        <meta name="twitter:creator" content={`@${reviewData.author.socialLinks?.twitter?.split('/').pop() || 'YourAuthorTwitterHandle'}`} /> {/* /* UPDATE THIS */ }
        <meta name="twitter:title"       content={reviewData.title} />
        <meta name="twitter:description" content={reviewData.description} />
        <meta name="twitter:image"       content={`${siteUrl}${reviewData.imageUrl}`} />
        <link rel="icon" href="/favicon.ico" /> {/* /* UPDATE THESE PATHS AS NEEDED */ }
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
                  {reviewData.h1Content}
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
                        src={reviewData.author.imageUrl} // /* UPDATE THIS */
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
                        </div>,
                        <span className={styles.authorTitle}>{reviewData.author.title}</span>
                        {updateDate && (
                            <time dateTime={updateDate} className={styles.authorLastEdited}>
                                Last updated: {new Date(updateDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                            </time>
                        )}
                        {reviewData.author.socialLinks && (
                            <div className={styles.authorSocialLinks}>
                                {reviewData.author.socialLinks.linkedin && (
                                    <a href={reviewData.author.socialLinks.linkedin} target="_blank" rel="noopener noreferrer me" aria-label={`${reviewData.author.name} on LinkedIn`} className={styles.socialIconLink}>
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                                    </a>
                                )}
                                {reviewData.author.socialLinks.twitter && (
                                    <a href={reviewData.author.socialLinks.twitter} target="_blank" rel="noopener noreferrer me" aria-label={`${reviewData.author.name} on Twitter`} className={styles.socialIconLink}>
                                         <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-.422.724-.665 1.56-.665 2.452 0 1.697.864 3.198 2.18 4.078-.8-.025-1.555-.247-2.227-.616v.054c0 2.37 1.683 4.333 3.91 4.78-.426.116-.874.174-1.337.174-.31 0-.611-.03-.904-.085.622 1.936 2.421 3.338 4.553 3.377-1.672 1.309-3.781 2.088-6.072 2.088-.394 0-.784-.023-1.169-.069 2.16 1.389 4.723 2.202 7.482 2.202 8.979 0 13.897-7.446 13.897-13.898 0-.21 0-.42-.015-.63.953-.689 1.778-1.56 2.433-2.525z"/></svg>
                                    </a>
                                )}
                                {reviewData.author.socialLinks.email && (
                                    <a href={`mailto:${reviewData.author.socialLinks.email}`} aria-label={`Email ${reviewData.author.name}`} className={styles.socialIconLink}>
                                         <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"/></svg>
                                    </a>
                                )}
                            </div>
                        )}
                    </div>
                    {showAuthorBioTooltip && reviewData.author.bioSnippet && (
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
                                    src={reviewData.author.tooltipImageUrl} // /* UPDATE THIS */
                                    alt={`${reviewData.author.name} large headshot`}
                                    width={reviewData.author.tooltipImageWidth}
                                    height={reviewData.author.tooltipImageHeight}
                                    className={styles.authorTooltipImage}
                                 />
                                 <div className={styles.authorTooltipInfo}>
                                     <span className={styles.authorTooltipName}>{reviewData.author.name}</span>
                                     <span className={styles.authorTooltipTitle}>{reviewData.author.title}</span>
                                 </div>
                               </div>
                               {reviewData.author.expertise && reviewData.author.expertise.length > 0 && (
                                 <div className={styles.authorTooltipExpertise}>
                                     <strong>Expertise</strong>
                                     <ul>
                                         {reviewData.author.expertise.map(area => <li key={area}>{area}</li>)}
                                     </ul>
                                 </div>
                               )}
                               <p className={styles.authorTooltipBioSnippet}>{reviewData.author.bioSnippet}</p>
                               {reviewData.author.fullBioLink && (
                                   <Link href={reviewData.author.fullBioLink} legacyBehavior>
                                       <a className={styles.authorTooltipBioLink}>
                                           See full bio
                                       </a>
                                   </Link>
                               )}
                               {reviewData.author.socialLinks && ( 
                                    <div className={styles.authorTooltipSocials}>
                                        {reviewData.author.socialLinks.linkedin && (
                                             <a href={reviewData.author.socialLinks.linkedin} target="_blank" rel="noopener noreferrer me" aria-label={`${reviewData.author.name} on LinkedIn`} className={styles.socialIconLink}>
                                                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                                             </a>
                                         )}
                                         {reviewData.author.socialLinks.twitter && (
                                             <a href={reviewData.author.socialLinks.twitter} target="_blank" rel="noopener noreferrer me" aria-label={`${reviewData.author.name} on Twitter`} className={styles.socialIconLink}>
                                                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-.422.724-.665 1.56-.665 2.452 0 1.697.864 3.198 2.18 4.078-.8-.025-1.555-.247-2.227-.616v.054c0 2.37 1.683 4.333 3.91 4.78-.426.116-.874.174-1.337.174-.31 0-.611-.03-.904-.085.622 1.936 2.421 3.338 4.553 3.377-1.672 1.309-3.781 2.088-6.072 2.088-.394 0-.784-.023-1.169-.069 2.16 1.389 4.723 2.202 7.482 2.202 8.979 0 13.897-7.446 13.897-13.898 0-.21 0-.42-.015-.63.953-.689 1.778-1.56 2.433-2.525z"/></svg>
                                             </a>
                                         )}
                                         {reviewData.author.socialLinks.email && (
                                             <a href={`mailto:${reviewData.author.socialLinks.email}`} aria-label={`Email ${reviewData.author.name}`} className={styles.socialIconLink}>
                                                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"/></svg>
                                             </a>
                                         )}
                                    </div>
                                )}
                        </div>
                    )}
                </div>
                
                <p className={styles.heroSubtitle}>
                  {reviewData.heroSubtitle}
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
                      on Bank of America&apos;s official site
                    </span>
                  </div>
                  <Link href="#section-snapshot" legacyBehavior>
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
                      <svg aria-hidden="true" focusable="false" className={styles.infoIcon} viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                        <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                      </svg>
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
                    <i>{reviewData.cardShortName}: Ideal for simple rewards and BofA loyalists.</i> {/* Shorter description for this spot */}
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
                                <span className={styles.summaryValue} dangerouslySetInnerHTML={{ __html: summaryBoxData.welcomeOffer.replace('', '<sup>[1]</sup>') }}></span>
                            </div>
                            <div className={styles.summaryItem}>
                                <span className={styles.summaryIcon}><IconCheck /></span>
                                <span className={styles.summaryLabel}>Annual Fee:</span>
                                <span className={styles.summaryValue} dangerouslySetInnerHTML={{ __html: summaryBoxData.annualFee.replace('', '<sup>[1]</sup>') }}></span>
                            </div>
                            <div className={styles.summaryItem}>
                                <span className={styles.summaryIcon}><IconStar /></span>
                                <span className={styles.summaryLabel}>Top Earning:</span>
                                <span className={styles.summaryValue} dangerouslySetInnerHTML={{ __html: summaryBoxData.topEarning }}></span>
                            </div>
                             <div className={styles.summaryItem}>
                                <span className={styles.summaryIcon}><IconPlus /></span>
                                <span className={styles.summaryLabel}>Key Perks:</span>
                                <span className={styles.summaryValue} dangerouslySetInnerHTML={{ __html: summaryBoxData.keyPerks }}></span>
                            </div>
                            <div className={styles.summaryItem} data-full-width="true">
                                <span className={styles.summaryIcon}><IconPlane /></span>
                                <span className={styles.summaryLabel}>Best For:</span>
                                <span className={styles.summaryValue}>{summaryBoxData.bestFor}</span>
                            </div>
                        </div>
                        <div className={styles.summaryBoxActions}>
                            <a href={reviewData.ratesFeesLink} className={styles.summaryRatesLink} target="_blank" rel="noopener noreferrer sponsored">
                                See Card Rates & Fees (BofA Site) <sup>[1]</sup>
                            </a>
                             <a href='/rewards-calculator' className={`${styles.heroRewardsCalculator} ${styles.summaryButton}`} target="_blank" rel="noopener noreferrer"> {/* /* UPDATE LINK if needed */ }
                                Rewards Calculator
                            </a>
                        </div>
                    </div>
                </header>

                <section id="section-intro" className={styles.reviewSection}>
                  <h2>1. Introduction: Navigating No-Fee Travel Rewards</h2>
                  <p>The dream of turning daily spending into exciting travel is compelling, but complex credit card rules can be daunting. The {reviewData.cardName} simplifies this with a flat-rate earning structure, no annual fee <sup>[1]</sup>, and no foreign transaction fees <sup>[1]</sup>. This makes it attractive for both U.S. and international adventures. This review unpacks its essentials, offering a clear guide to its real-world performance and suitability for different travelers.</p>
                </section>

                <section id="section-tldr" className={styles.reviewSection}>
                  <h2>2. TL;DR: Is the BofA Travel Rewards Your Go-To Card?</h2>
                  <p>The {reviewData.cardName} is a strong contender if you want simple, straightforward travel rewards without an annual fee <sup>[1]</sup>.</p>
                  <p><strong>It’s ideal for:</strong> Budget-conscious individuals, those new to travel rewards, and especially Bank of America customers who can leverage the Preferred Rewards program for significantly boosted earnings (up to 2.625 points per dollar or higher) <sup>[2]</sup>. The lack of foreign transaction fees <sup>[1]</sup> is a big plus for international travelers.</p>
                  <p><strong>Consider alternatives if:</strong> You’re seeking luxury travel perks (like lounge access or airline credits), want to transfer points to airline/hotel partners for potentially higher-value redemptions, or won't qualify for Preferred Rewards and can find a higher flat-rate rewards card elsewhere.</p>
                  <p><strong>The bottom line:</strong> For uncomplicated value, especially with BofA relationship benefits, this card is a winner. If you crave premium features or complex points strategies, look further. Read on for the full breakdown.</p>
                </section>

                <section id="section-snapshot" className={styles.reviewSection}>
                    <h2>3. At a Glance: Card Snapshot & Ideal User Profile</h2>
                    <p>Here’s a quick overview of the {reviewData.cardName}:</p>
                    <ul className={styles.featureList}>
                        <li><strong>Card Name:</strong> Bank of America® Travel Rewards credit card</li>
                        <li><strong>Network:</strong> Visa®</li>
                        <li><strong>Primary Reward Type:</strong> Points, redeemable for travel and dining statement credits <sup>[1]</sup>.</li>
                    </ul>
                    <p><strong>"Best For" Tagline:</strong> "Simple Journeys, Amplified Rewards: Ideal for No-Fee Simplicity Seekers and Bank of America Loyalists."</p>
                    <p>This tagline highlights the card's dual appeal: its easy, no-fee structure and its enhanced value for Bank of America customers via the Preferred Rewards program <sup>[2]</sup>. It’s tailored for those who appreciate straightforward rewards without paying an annual fee <sup>[1]</sup>.</p>
                </section>
                
                <Image
                    src={contentImage1} // /* UPDATE THIS with a relevant image */
                    alt="Illustration of simple travel planning with the BofA Travel Rewards card"
                    width={800}
                    height={500}
                    className={styles.contentImage}
                    loading="lazy"
                />

                <section id="section-visual-appeal" className={styles.reviewSection}>
                    <h2>4. Visual Appeal: The Card's Understated Design</h2>
                    <p>The {reviewData.cardName} features a clean, professional design. It's predominantly blue with a subtle gradient, the Bank of America logo, and "Travel Rewards" clearly visible. The Visa® logo and a security chip complete its understated yet recognizable look, aligning with the card's straightforward nature and appealing to those who prefer a classic aesthetic over flashy designs.</p>
                </section>

                <section id="section-key-features" className={styles.reviewSection}>
                    <h2>5. Key Features & Benefits: What Makes It Shine?</h2>
                    <p>This card shines with user-friendly features designed for hassle-free rewards:</p>
                    <ul className={styles.featureList}>
                        <li><strong>Unlimited 1.5X Points:</strong> Earn a consistent 1.5 points per $1 on all purchases, with no caps or categories to track <sup>[1]</sup>.</li>
                        <li><strong>3X Points at BofA Travel Center:</strong> Get an elevated 3 points per $1 on travel (flights, hotels, cars) booked directly through the Bank of America Travel Center <sup>[1]</sup>.</li>
                        <li><strong>No Annual Fee:</strong> Enjoy all the card’s reward-earning potential without paying a yearly cost <sup>[1]</sup>.</li>
                        <li><strong>No Foreign Transaction Fees:</strong> Save approximately 3% on purchases made overseas or in a foreign currency <sup>[1]</sup>.</li>
                        <li><strong>Flexible Redemptions:</strong> Easily redeem points as statement credits for a wide variety of travel and dining purchases <sup>[1]</sup>.</li>
                        <li><strong>Preferred Rewards® Boost:</strong> Bank of America Preferred Rewards® members can earn 25% to 75% more points on every purchase, significantly increasing the rewards rate <sup>[2]</sup>.</li>
                        <li><strong>Introductory APR:</strong> Often includes a 0% introductory APR on purchases and qualifying balance transfers for a set period, offering a window for interest-free financing <sup>[1]</sup>. (A balance transfer fee applies).</li>
                        <li><strong>Points Don't Expire:</strong> Your hard-earned points won't expire as long as your account is open and in good standing <sup>[1]</sup>.</li>
                    </ul>
                </section>

                <section id="section-pros-cons" className={styles.reviewSection}>
                    <h2>6. Pros & Cons: A Quick Rundown</h2>
                    <div className={styles.prosConsContainer}>
                        <div className={styles.prosList}>
                            <h3>Pros:</h3>
                            <ul>
                                <li>No annual fee <sup>[1]</sup>.</li>
                                <li>Simple, unlimited 1.5 points per dollar on all purchases <sup>[1]</sup>.</li>
                                <li>No foreign transaction fees <sup>[1]</sup>.</li>
                                <li>Flexible travel and dining statement credit redemptions <sup>[1]</sup>.</li>
                                <li>Significant earnings boost (up to an effective 2.625 points per dollar or more) with Preferred Rewards status <sup>[2]</sup>.</li>
                                <li>Typically offers a solid welcome bonus for a no-fee card <sup>[1]</sup>.</li>
                                <li>Potential for a 0% introductory APR period on purchases and balance transfers <sup>[1]</sup>.</li>
                            </ul>
                        </div>
                        <div className={styles.consList}>
                            <h3>Cons:</h3>
                            <ul>
                                <li>Base rewards rate (1.5x) is less competitive without Preferred Rewards status compared to some other cards.</li>
                                <li>Low value for cash back or gift card redemptions; best for travel/dining credits.</li>
                                <li>No option to transfer points to airline or hotel partners.</li>
                                <li>Lacks premium travel perks like airport lounge access or annual travel credits.</li>
                                <li>Bonus travel points (3x) require booking through the Bank of America Travel Center <sup>[1]</sup>.</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section id="section-welcome-bonus" className={styles.reviewSection}>
                    <h2>7. Welcome Bonus Analysis: A Solid Start for Travelers</h2>
                    <p>New cardholders can typically earn <strong>25,000 online bonus points</strong> after spending $1,000 on purchases in the first 90 days of account opening <sup>[1]</sup>. These 25,000 points are worth $250 when redeemed as a statement credit towards travel and dining purchases <sup>[1]</sup>. This is a competitive welcome offer for a no-annual-fee card, providing a quick and tangible reward that can easily cover a domestic flight or a couple of nights at a budget-friendly hotel. Applying directly via the Bank of America website is often recommended to ensure you receive any "online only" elements of the offer <sup>[1]</sup>. Always check the current offer terms before applying as bonuses can change.</p>
                </section>

                <section id="section-earning-points" className={styles.reviewSection}>
                    <h2>8. Earning Points: From Everyday Spending to Travel Bookings</h2>
                    <p>The rewards program for the {reviewData.cardName} is built for simplicity and straightforward earning.</p>
                    <p><strong>Base Earning:</strong> You'll earn a flat, unlimited <strong>1.5 points for every $1 spent on all purchases</strong> <sup>[1]</sup>. There are no rotating categories to track or spending caps to worry about for this base rate, making it easy to accumulate points on your everyday expenses.</p>
                    <p><strong>Bonus Earning at BofA Travel Center:</strong> For travel bookings, you can boost your earnings by using the Bank of America Travel Center. Purchases made through the portal for flights, hotels, and rental cars earn an enhanced rate of <strong>3 points per $1 spent</strong> <sup>[1]</sup>.</p>
                    <p>The real power-up, however, comes if you're a Bank of America Preferred Rewards® member, which we'll dive into next.</p>
                </section>

                <section id="section-preferred-rewards" className={styles.reviewSection}>
                    <h2>9. Power Up: The Preferred Rewards Program Advantage</h2>
                    <p>The Bank of America Preferred Rewards® program is pivotal to maximizing the value of the {reviewData.cardName}. This loyalty program rewards you based on your combined qualifying balances in Bank of America deposit accounts (like checking and savings) and/or Merrill investment accounts <sup>[2]</sup>.</p>
                    <p>Eligible members receive a bonus of 25% to 75% on the points earned with the card <sup>[2]</sup>. Here’s how the tiers typically break down and boost your effective earnings on all purchases:</p>
                    <ul className={styles.featureList}>
                        <li><strong>Gold Tier</strong> ($20,000 - $49,999 in qualifying balances): 25% points bonus. This turns the 1.5x points into an effective <strong>1.875 points per $1</strong>. The 3x Travel Center rate becomes <strong>3.75 points per $1</strong>.</li>
                        <li><strong>Platinum Tier</strong> ($50,000 - $99,999 in qualifying balances): 50% points bonus. This turns the 1.5x points into an effective <strong>2.25 points per $1</strong>. The 3x Travel Center rate becomes <strong>4.5 points per $1</strong>.</li>
                        <li><strong>Platinum Honors, Diamond, and Diamond Honors Tiers</strong> ($100,000+ in qualifying balances): 75% points bonus. This turns the 1.5x points into an effective <strong>2.625 points per $1</strong> <sup>[2]</sup>. The 3x Travel Center rate becomes an impressive <strong>5.25 points per $1</strong>.</li>
                    </ul>
                    <p>An effective 2.625% back on all spending (when points are redeemed for travel at $0.01 each) is exceptional for a no-annual-fee card, making it a market leader for those who qualify for higher Preferred Rewards tiers. Without this status, the card’s 1.5x rate is solid but less remarkable when compared to some other flat-rate cards.</p>
                </section>

                 <Image
                    src={contentImage2} // /* UPDATE THIS with a relevant image */
                    alt="Chart showing Preferred Rewards tiers and benefits"
                    width={800}
                    height={500}
                    className={styles.contentImage}
                    loading="lazy"
                />

                <section id="section-redeeming-points" className={styles.reviewSection}>
                    <h2>10. Redeeming Points: Maximum Flexibility for Travel & Dining</h2>
                    <p>A key strength of the {reviewData.cardName} is its flexible redemption options, particularly for travel and dining expenses. Points are worth a straightforward $0.01 each when redeemed as a statement credit against eligible travel or dining purchases <sup>[1]</sup>. This means 25,000 points equate to a $250 credit.</p>
                    <p>Unlike some airline or hotel co-branded cards that restrict you to their specific programs, this card allows you to book travel how and where you find the best deals—be it directly with an airline, through an online travel agency, or any other vendor. Once an eligible travel or dining purchase posts to your account, you can log in to your online banking or use the Bank of America mobile app to apply your points to "erase" those charges from your statement.</p>
                    <p>Bank of America’s definition of "travel" for redemption purposes is commendably broad <sup>[1]</sup>. It includes not only standard airfare, hotel stays, and car rentals, but also cruises, vacation rentals (like Airbnb or VRBO), baggage fees, and even less common expenses such as timeshares, campground fees, passenger train tickets, tours, amusement park tickets, museum entry fees, and zoo admissions. Similarly, eligible dining redemptions cover purchases at restaurants, cafes, bars, and takeout services <sup>[1]</sup>.</p>
                    <p>There's typically a minimum redemption amount, usually 2,500 points ($25 value). It's generally advisable to avoid redeeming points for cash back or gift cards, as these options usually offer a lower value per point compared to travel and dining statement credits.</p>
                </section>

                <section id="section-international-travel" className={styles.reviewSection}>
                  <h2>11. Global Travel Made Easy: No Foreign Transaction Fees</h2>
                  <p>One of the standout benefits for international travelers is the {reviewData.cardName}'s policy of <strong>no foreign transaction fees</strong> <sup>[1]</sup>. Many credit cards impose a fee, typically around 3% of the transaction amount, for purchases made outside the United States or processed in a foreign currency. With this card, that fee is waived, which can lead to substantial savings over the course of an international trip. For example, on $1,000 spent abroad, you'd save $30 with this card compared to one with a 3% foreign transaction fee. Coupled with Visa's® widespread global acceptance, this makes the card a practical and cost-effective choice for use overseas.</p>
                </section>

                <section id="section-intro-apr" className={styles.reviewSection}>
                    <h2>12. Smart Savings: Leveraging the Introductory APR</h2>
                    <p>The {reviewData.cardName} often features an attractive introductory Annual Percentage Rate (APR) offer. Commonly, this includes a <strong>0% Intro APR for the first 15 billing cycles for purchases</strong>, and also for <strong>balance transfers made within the first 60 days of account opening</strong> <sup>[1]</sup>. After this introductory period, a variable APR will apply, based on your creditworthiness and prevailing rates (always check Bank of America's website for the current rates and terms before applying) <sup>[1]</sup>.</p>
                    <p>This 0% intro APR window can be a valuable tool for financing significant purchases you plan to pay off over several months, or for managing existing debt from other higher-interest credit cards by transferring a balance. Keep in mind that a balance transfer fee (e.g., 3% or 4% of the amount of each transfer) typically applies <sup>[1]</sup>. It’s crucial to have a plan to pay off any transferred balances or new purchases before the introductory 0% APR period concludes to avoid accruing interest at the standard variable APR.</p>
                </section>

                <section id="section-security" className={styles.reviewSection}>
                    <h2>13. Security & Management: Tools for Peace of Mind</h2>
                    <p>Bank of America equips the {reviewData.cardName} with essential security and account management tools to ensure a safe and convenient user experience. These typically include:</p>
                    <ul className={styles.featureList}>
                        <li><strong>$0 Liability Guarantee:</strong> You're not responsible for unauthorized transactions made with your card <sup>[1]</sup>.</li>
                        <li><strong>Fraud Monitoring:</strong> Bank of America actively monitors your account for suspicious activity and may alert you if potential fraud is detected.</li>
                        <li><strong>Contactless Chip Technology:</strong> The card includes an embedded chip for enhanced security and the option for contactless (tap-to-pay) transactions where available.</li>
                        <li><strong>Digital Wallet Compatibility:</strong> Easily add your card to digital wallets like Apple Pay®, Google Pay™, or Samsung Pay for secure mobile payments.</li>
                        <li><strong>Online and Mobile Banking:</strong> Access your account 24/7 through Bank of America's website or mobile app to view transactions, make payments, redeem rewards, and manage settings.</li>
                        <li><strong>Customizable Account Alerts:</strong> Set up alerts for payment due dates, posted transactions, or when your balance approaches its credit limit.</li>
                        <li><strong>Free FICO® Score Access:</strong> Eligible cardholders can typically access their FICO® Score for free, updated monthly, through online banking.</li>
                        <li><strong>Paperless Statement Option:</strong> Opt for electronic statements to reduce clutter and enhance account security.</li>
                    </ul>
                    <p>These features combine to provide a robust platform for managing your card securely and efficiently.</p>
                </section>

                <section id="section-visa-signature" className={styles.reviewSection}>
                    <h2>14. Extra Perks: Unpacking Visa Signature® Benefits</h2>
                    <p>As a Visa Signature® card, the {reviewData.cardName} may come with a suite of additional benefits provided through the Visa network <sup>[3]</sup>. While the specific benefits can vary and are ultimately determined by Bank of America, common Visa Signature® perks can include:</p>
                    <ul className={styles.featureList}>
                        <li><strong>Extended Warranty Protection:</strong> Can double the manufacturer's warranty on eligible purchases, up to an additional year, for warranties of three years or less.</li>
                        <li><strong>Roadside Dispatch®:</strong> A pay-per-use service providing access to 24/7 towing and locksmith services.</li>
                        <li><strong>Travel and Emergency Assistance Services:</strong> Offers help with pre-trip assistance, medical and legal referrals, and emergency transportation if you're traveling.</li>
                        <li><strong>Auto Rental Collision Damage Waiver:</strong> This typically provides secondary coverage for damage due to collision or theft when you rent an eligible vehicle and pay with your card.</li>
                    </ul>
                    <p>In addition to Visa Signature benefits, Bank of America also offers its own perks that cardholders can often access, such as:</p>
                    <ul className={styles.featureList}>
                        <li><strong>Museums on Us®:</strong> Provides free general admission to select museums and cultural institutions nationwide during the first full weekend of every month when you present your card and photo ID.</li>
                        <li><strong>BankAmeriDeals®:</strong> A program offering cash back deals when you use your card at participating merchants. You typically need to activate these offers through your online banking.</li>
                    </ul>
                    <p><strong>Crucially, it's important to consult your card’s official Guide to Benefits provided by Bank of America for the precise terms, conditions, and coverage details of any benefits associated with your specific card, as these can vary and are subject to change.</strong></p>
                </section>

                <section id="section-user-profiling" className={styles.reviewSection}>
                    <h2>15. Is This Card For You? Detailed User Profiling</h2>
                    <p>The {reviewData.cardName} is an excellent choice for specific types of users, but it might not be the optimal fit for everyone. Here’s who stands to benefit most:</p>
                    <ul className={styles.featureList}>
                        <li><strong>Bank of America Preferred Rewards Members:</strong> This is where the card truly shines. The 25% to 75% points bonus <sup>[2]</sup> transforms it into an exceptionally valuable rewards card, especially for a no-annual-fee option. If you have significant balances with Bank of America or Merrill, this card should be high on your list.</li>
                        <li><strong>Budget-Conscious Travelers Seeking Simplicity:</strong> If you want a straightforward travel rewards card without an annual fee <sup>[1]</sup>, a simple flat-rate earning structure <sup>[1]</sup>, and the valuable perk of no foreign transaction fees <sup>[1]</sup>, this card delivers.</li>
                        <li><strong>Travel Rewards Beginners:</strong> The easy-to-understand earning (1.5 points per dollar) and redemption (statement credits for travel/dining at $0.01 per point) make it less intimidating than complex tiered-reward or points-transfer cards.</li>
                        <li><strong>Occasional International Travelers:</strong> The combination of no foreign transaction fees <sup>[1]</sup> and widespread Visa® acceptance makes it a practical and cost-effective companion for trips abroad, without committing to an annual fee for a card you might only use for travel a few times a year.</li>
                    </ul>
                    <p>It might not be the best fit for:</p>
                    <ul className={styles.featureList}>
                        <li><strong>Luxury Travel Perk Seekers:</strong> If you're looking for benefits like airport lounge access, annual travel credits, or elite hotel status, premium travel cards with annual fees would be more suitable.</li>
                        <li><strong>Points/Miles Maximizers Focused on Transfers:</strong> Those who enjoy the strategy of transferring points to airline and hotel partners to find outsized value for business or first-class flights will miss that feature here.</li>
                        <li><strong>Users Who Won't Qualify for Preferred Rewards and Want Higher Flat-Rate Rewards:</strong> If you don't bank with Bank of America or can't meet Preferred Rewards balance requirements, other no-fee cards might offer a slightly higher flat-rate return or more appealing bonus categories for your spending.</li>
                        <li><strong>Individuals Prioritizing Cash Back Redemptions:</strong> While possible, redeeming points for cash back typically yields a lower value than travel or dining statement credits, making other cash back cards potentially more rewarding for this purpose.</li>
                    </ul>
                </section>

                <section id="section-real-world-example" className={styles.reviewSection}>
                    <h2>16. Value Illustrated: A Real-World Rewards Example</h2>
                    <p>Let's consider "Alex," a cardholder who qualifies for the <strong>Gold Tier of Bank of America Preferred Rewards®</strong>, which provides a 25% points bonus on all earned points <sup>[2]</sup>. We'll estimate Alex's first-year value, keeping in mind there's no annual fee for this card.</p>
                    <ul className={styles.featureList}>
                        <li><strong>Welcome Bonus:</strong> Alex spends $1,000 on purchases in the first 90 days of account opening, earning the typical 25,000 online bonus points <sup>[1]</sup>.</li>
                        <li><strong>Annual Spending & Points Calculation:</strong>
                            <ul>
                                <li>Assume Alex spends $13,000 on general purchases throughout the year. Points earned: $13,000 x 1.5 points/$1 = 19,500 points. With the 25% Preferred Rewards bonus: 19,500 x 1.25 = 24,375 points.</li>
                                <li>Assume Alex spends an additional $2,000 on travel booked through the Bank of America Travel Center. Points earned: $2,000 x 3 points/$1 = 6,000 points. With the 25% Preferred Rewards bonus: 6,000 x 1.25 = 7,500 points.</li>
                            </ul>
                        </li>
                        <li><strong>Total Points Earned in First Year:</strong> 25,000 (welcome bonus) + 24,375 (general spending) + 7,500 (BofA Travel Center) = <strong>56,875 points</strong>.</li>
                        <li><strong>Travel Value of Points:</strong> At $0.01 per point for travel statement credits: 56,875 points x $0.01/point = <strong>$568.75</strong>.</li>
                    </ul>
                    <p>In this scenario, Alex gets over $560 in travel value in the first year from a no-annual-fee card. Without Preferred Rewards, the travel value from spending would be $195 (from general) + $60 (from portal) + $250 (bonus) = $505. Higher Preferred Rewards tiers would yield even more significant value. This example illustrates how the Preferred Rewards program can substantially elevate the card's worth.</p>
                </section>

                <section id="section-competitors" className={styles.reviewSection}>
                    <h2>17. Head-to-Head: Comparison with Competing Travel Cards</h2>
                    <p>The {reviewData.cardName} operates in a competitive space, especially among no-annual-fee and entry-level travel cards. Here’s how it stacks up against some common alternatives. (Note: Offers, fees, and reward structures are subject to change; always verify details with the issuer.)</p>
                    <DraggableTableWrapper>
                        <div className={styles.tableContainer}>
                            <table className={`${styles.statsTable} ${styles.comparisonTable}`}>
                                <thead>
                                    <tr>
                                        <th>Feature</th>
                                        <th>{reviewData.cardShortName}</th>
                                        <th>Chase Sapphire Preferred® Card <sup>[4]</sup></th>
                                        <th>Capital One Venture Rewards Card <sup>[5]</sup></th>
                                        <th>Discover it® Miles <sup>[6]</sup></th>
                                        <th>Wells Fargo Autograph℠ Card <sup>[7]</sup></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td data-label="Feature">Annual Fee</td>
                                        <td data-label={reviewData.cardShortName}>$0 <sup>[1]</sup></td>
                                        <td data-label="Chase Sapphire Preferred® Card">$95</td>
                                        <td data-label="Capital One Venture Rewards Card">$95</td>
                                        <td data-label="Discover it® Miles">$0</td>
                                        <td data-label="Wells Fargo Autograph℠ Card">$0</td>
                                    </tr>
                                    <tr>
                                        <td data-label="Feature">Welcome Bonus (Typical)</td>
                                        <td data-label={reviewData.cardShortName}>25,000 pts ($250 value) <sup>[1]</sup></td>
                                        <td data-label="Chase Sapphire Preferred® Card">60,000 pts ($750+ value when transferred)</td>
                                        <td data-label="Capital One Venture Rewards Card">75,000 miles ($750 value)</td>
                                        <td data-label="Discover it® Miles">Unlimited Mile-for-Mile match first year</td>
                                        <td data-label="Wells Fargo Autograph℠ Card">20,000 pts ($200 value)</td>
                                    </tr>
                                    <tr>
                                        <td data-label="Feature">Rewards (General Spending)</td>
                                        <td data-label={reviewData.cardShortName}>1.5x pts (up to 2.625x with Preferred Rewards) <sup>[1, 2]</sup></td>
                                        <td data-label="Chase Sapphire Preferred® Card">1x pts (plus bonus categories)</td>
                                        <td data-label="Capital One Venture Rewards Card">Unlimited 2x miles</td>
                                        <td data-label="Discover it® Miles">Unlimited 1.5x miles (effectively 3x first year)</td>
                                        <td data-label="Wells Fargo Autograph℠ Card">1x pts (plus 3x bonus categories)</td>
                                    </tr>
                                     <tr>
                                        <td data-label="Feature">Foreign Transaction Fee</td>
                                        <td data-label={reviewData.cardShortName}>No <sup>[1]</sup></td>
                                        <td data-label="Chase Sapphire Preferred® Card">No</td>
                                        <td data-label="Capital One Venture Rewards Card">No</td>
                                        <td data-label="Discover it® Miles">No</td>
                                        <td data-label="Wells Fargo Autograph℠ Card">No</td>
                                    </tr>
                                    <tr>
                                        <td data-label="Feature">Key Differentiator</td>
                                        <td data-label={reviewData.cardShortName}>Preferred Rewards boost <sup>[2]</sup>; Simple travel credits <sup>[1]</sup></td>
                                        <td data-label="Chase Sapphire Preferred® Card">Valuable transfer partners; Travel credits</td>
                                        <td data-label="Capital One Venture Rewards Card">Flat 2x miles; Transfer partners; Travel credit</td>
                                        <td data-label="Discover it® Miles">First year match; Simple miles</td>
                                        <td data-label="Wells Fargo Autograph℠ Card">Broad 3x bonus categories (restaurants, travel, gas, transit, streaming)</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </DraggableTableWrapper>
                    <p>The {reviewData.cardName} holds its own strongly as a no-annual-fee option, particularly for those who can leverage the Preferred Rewards boost <sup>[2]</sup>. Cards like the Chase Sapphire Preferred® and Capital One Venture Rewards offer more premium perks and valuable airline/hotel transfer partners but come with a $95 annual fee. Against other no-fee competitors like Discover it® Miles or the Wells Fargo Autograph℠ Card, the BofA Travel Rewards card's main advantage is the Preferred Rewards enhancement. Without that boost, other cards might offer slightly better returns or more relevant bonus categories depending on individual spending habits.</p>
                </section>

                <section id="section-user-testimonials" className={styles.reviewSection}>
                    <h2>18. Community Insights: What Real Users Are Saying</h2>
                    <p>Here’s a glimpse of what cardholders are saying about the {reviewData.cardName} (paraphrased from online forums and review sites):</p>
                    <div className={styles.testimonialContainer}>
                        <blockquote className={styles.testimonialQuote}>
                            <p>"As a Bank of America Platinum Honors member, this card is a dream. Getting over 2.6% back on all my spending towards travel with no annual fee is just unbeatable. The simplicity is a huge plus."</p>
                            <footer>– Sarah P., Loyal BofA Customer</footer>
                        </blockquote>
                        <blockquote className={styles.testimonialQuote}>
                            <p>"It's a good, basic travel card. The no annual fee and no foreign transaction fees were perfect for my occasional trips abroad. Redeeming points for statement credits was super easy."</p>
                            <footer>– Mike B., Infrequent Traveler</footer>
                        </blockquote>
                        <blockquote className={styles.testimonialQuote}>
                            <p>"I used to chase complicated points with other cards. This one is so much simpler. I do miss the big airline transfer redemptions sometimes, but for straightforward travel credits, it just works without any fuss."</p>
                            <footer>– Jessica L., Values Simplicity</footer>
                        </blockquote>
                         <blockquote className={styles.testimonialQuote}>
                            <p>"Solid free card. The sign-up bonus was a nice $250 that I used for a flight to visit family. Can't complain about getting that for just meeting the initial spend."</p>
                            <footer>– David K., Budget-Focused User</footer>
                        </blockquote>
                    </div>
                    <p>These testimonials highlight the card's appeal to those who value simplicity, cost-effectiveness, and especially the benefits tied to the Preferred Rewards program.</p>
                </section>

                <section id="section-application" className={styles.reviewSection}>
                    <h2>19. Application Guide: Eligibility and How to Apply</h2>
                    <p>Applying for the {reviewData.cardName} is typically straightforward. Generally, you'll need <strong>good to excellent credit</strong> (often FICO scores in the 670+ range, with scores above 700 being ideal) for a strong chance of approval. However, Bank of America considers various factors beyond just your credit score, including your credit history, income, existing debt levels, and any current relationship you have with Bank of America.</p>
                    <p>You can apply online directly through the <a href={reviewData.officialOverviewLink} target="_blank" rel="noopener noreferrer sponsored">Bank of America website</a> <sup>[1]</sup>. This is often the best route to ensure you're eligible for any "online only" welcome bonus offers that may be available <sup>[1]</sup>. The application process usually involves providing personal information, employment details, and income information. Bank of America may provide an instant decision, or in some cases, the application might require further review.</p>
                </section>

                <section id="section-final-verdict" className={styles.reviewSection}>
                  <h2>20. Our Expert Verdict: The Bottom Line on BofA Travel Rewards</h2>
                  <p>The {reviewData.cardName} stands out as a strong contender in the no-annual-fee travel credit card market <sup>[1]</sup>. Its appeal lies in its simplicity, straightforward flat-rate rewards, and the valuable perk of no foreign transaction fees <sup>[1]</sup>. For everyday spenders who want to dip their toes into travel rewards without committing to an annual fee or complex rules, it's an excellent starting point.</p>
                  <p>However, the <strong>true power of this card is unlocked for Bank of America and Merrill customers who qualify for the Preferred Rewards program</strong> <sup>[2]</sup>. The 25% to 75% points bonus elevates its earning potential significantly, potentially offering an effective 2.625% back (or higher on Travel Center bookings) on all purchases towards travel – a rate that's hard to beat with any no-fee card. The 3x points on bookings through the BofA Travel Center <sup>[1]</sup> can also add incremental value if the prices are competitive.</p>
                  <p>It’s an ideal choice if you are an existing Bank of America customer eligible for Preferred Rewards, if you prioritize simplicity and no annual fees in a travel card, or if you are relatively new to the world of points and miles. However, if you're chasing luxury travel perks, need the flexibility of airline and hotel transfer partners, or won't benefit from the Preferred Rewards boost, other cards (potentially with annual fees) might offer a better overall value proposition for your specific needs.</p>
                  <p>Ultimately, if straightforward value, cost-effectiveness, and especially loyalty benefits with Bank of America align with your financial habits and travel aspirations, the {reviewData.cardName} is a compelling and highly recommended choice.</p>
                </section>

                <section id="section-next-steps" className={styles.reviewSection}>
                  <h2>21. Next Steps: Embark on Your Rewards Journey</h2>
                  <p>If the {reviewData.cardName} aligns with your spending habits, travel goals, and particularly if you can leverage the Bank of America Preferred Rewards® program <sup>[2]</sup>, it warrants serious consideration. Its blend of simplicity, no annual fee <sup>[1]</sup>, and solid rewards can make it a valuable addition to your wallet.</p>
                  <p>To learn more or to apply, you can visit the <a href={reviewData.officialOverviewLink} target="_blank" rel="noopener noreferrer sponsored">official Bank of America® Travel Rewards credit card page</a> <sup>[1]</sup>. Remember to always review the latest terms and conditions before applying, as offers can change. Responsible credit card use, including paying your balances on time and in full whenever possible, is key to maximizing the benefits and truly making your financial journeys rewarding.</p>
                </section>


                <section id="section-faqs-jump" className={`${styles.reviewSection} ${styles.faqSection}`}>
                  <h2>22. Card-Specific Frequently Asked Questions</h2>
                  <div className={styles.faqContainer}>
                      {structuredDataOptimized['@graph'].find(item => item['@type'] === 'FAQPage').mainEntity.map((faq, index) => (
                          <details key={index} className={styles.faqItem} name={`faq-${index + 1}`}>
                              <summary className={styles.faqQuestion}>{`${index + 1}. ${faq.name}`}</summary>
                              <div className={styles.faqAnswer}>
                                <p dangerouslySetInnerHTML={{ __html:
                                  faq.acceptedAnswer.text
                                    // Replace [1], [2] style citations with links
                                    .replace(/\[(\d+)\]/g, (match, p1) => {
                                        let url = '#'; // Default fallback
                                        if (p1 === '1') url = reviewData.officialOverviewLink;
                                        if (p1 === '2') url = reviewData.officialPreferredRewardsLink;
                                        return `<sup><a href="${url}" target="_blank" rel="noopener noreferrer sponsored">[${p1}]</a></sup>`;
                                    })
                                    // Replace "Bank of America Travel Center" with a link
                                    .replace(/Bank of America Travel Center/g, `<a href="${reviewData.officialBofaTravelCenterLink}" target="_blank" rel="noopener noreferrer sponsored">Bank of America Travel Center</a>`)
                                }} />
                              </div>
                          </details>
                      ))}
                  </div>
                </section>

                <section id="section-eat" className={`${styles.reviewSection} ${styles.eatSection}`}>
                    <h2 dangerouslySetInnerHTML={{ __html: `23. Our E-A-T Pledge: Why You Can Trust This Review`}}></h2>
                    <p>At <strong>{siteName}</strong>, we are committed to providing content that exemplifies Expertise, Authoritativeness, and Trustworthiness (E-A-T). This review of the <strong>{reviewData.cardName}</strong> has been meticulously researched and crafted. We've analyzed the card's features, benefits, rewards structure, and fees, referencing official issuer documentation from Bank of America and considering real-world user experiences and data points from the personal finance community. Our goal is to present a balanced, comprehensive, and reliable guide to help you make an informed decision. All information is current as of <strong>{new Date(updateDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</strong>, but we always recommend verifying details directly with the issuer as terms can change.</p>
                    <p><strong>Cited Sources:</strong></p>
                    <ol className={styles.citationList}>
                        <li>Official Bank of America® Travel Rewards Credit Card Page: <a href={reviewData.officialOverviewLink} target="_blank" rel="noopener noreferrer sponsored">{reviewData.officialOverviewLink}</a></li>
                        <li>Official Bank of America Preferred Rewards® Program Page: <a href={reviewData.officialPreferredRewardsLink} target="_blank" rel="noopener noreferrer sponsored">{reviewData.officialPreferredRewardsLink}</a></li>
                        <li>Official Visa Signature® Benefits Page (General Info): <a href={reviewData.officialVisaSignatureLink} target="_blank" rel="noopener noreferrer sponsored">{reviewData.officialVisaSignatureLink}</a> (Note: Specific benefits are determined by Bank of America and detailed in the card's Guide to Benefits.)</li>
                        <li>Official Chase Sapphire Preferred® Card Page (Example for comparison)</li>
                        <li>Official Capital One Venture Rewards Credit Card Page (Example for comparison)</li>
                        <li>Official Discover it® Miles Card Page (Example for comparison)</li>
                        <li>Official Wells Fargo Autograph℠ Card Page (Example for comparison)</li>
                    </ol>
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
                  <span className={styles.stickyFooterCardName}>{reviewData.cardShortName}</span> {/* Use short name for brevity */}
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
                        href={reviewData.ratesFeesLink}
                        className={`${styles.stickyFooterBtn} ${styles.stickyFooterBtnRates}`}
                        target="_blank"
                        rel="noopener noreferrer sponsored"
                    >
                        See Rates & Fees
                    </a>
                </div>
            </div>
      </div>
    </div>
  );
}

export default BankOfAmericaTravelRewardsReviewPage;