/* ------------------------------------------------------------------
    File:  pages/reviews/chase-sapphire-reserve-review.js
    Route: https://www.travelcardinsider.com/reviews/chase-sapphire-reserve-review
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
const pagePath = '/reviews/chase-sapphire-reserve-review'; 
const pageUrlFull = `${siteUrl}${pagePath}`;
const publishDate = '2025-06-20'; // UPDATE AS NEEDED: Current date or actual publish date
const updateDate = '2025-06-20'; // UPDATE AS NEEDED: Current date or actual update date

const reviewDataNew = {
  cardName        : 'Chase Sapphire Reserve®',
  title           : 'Chase Sapphire Reserve® Review (2025): A $795 Lifestyle Revolution', // SEO Optimized Title
  description     : 'In-depth 2025 review of the overhauled Chase Sapphire Reserve®. Explore the $795 fee, 8X travel points, new lifestyle credits, and industry-leading insurance. Is this complex card for you?', // Meta Description
  keywords        : 'Chase Sapphire Reserve review, CSR 2025, Chase Sapphire Reserve benefits, Ultimate Rewards, Chase travel portal, premium travel credit card, Chase Sapphire Reserve $795 fee', // Keywords
  author: { // Placeholder: UPDATE ALL AUTHOR DETAILS AS NEEDED
      name: 'Dilan Madushanka', 
      title: 'Founder & Lead Editor', 
      imageUrl: '/WhatsApp Image 2025-05-12 at 4.09.58 PM.jpeg', 
      imageWidth: 40,
      imageHeight: 40,
      tooltipImageUrl: '/WhatsApp Image 2025-05-12 at 4.09.58 PM.jpeg', 
      tooltipImageWidth: 60,
      tooltipImageHeight: 60,
      expertise: [ 
          'Premium Travel Credit Cards',
          'Airline & Hotel Loyalty Programs',
          'Credit Card Rewards Optimization',
          'Travel Hacking Strategies',
          'Chase Ultimate Rewards'
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
  imageUrl        : '/chase-sapphire-reserve-card.png', // Placeholder: Replace with actual CSR card image URL
  imageWidth      : 1290, // Placeholder - UPDATE if image dimensions differ
  imageHeight     : 812,  // Placeholder - UPDATE if image dimensions differ
  ratingValue     : 9.2,  // Placeholder - UPDATE AS NEEDED (e.g. 4.6/5 * 2)
  ratingCount     : 310,  // Placeholder - UPDATE AS NEEDED
  reviewBody      : 'Our editors evaluate the Chase Sapphire Reserve® based on its redefined rewards structure (8X on Chase Travel), comprehensive lifestyle credits, industry-leading travel insurance, the Ultimate Rewards® ecosystem, its premium $795 annual fee, and its overall value for a specific profile of high-spending, organized travelers.',
  aprRange        : 'See issuer\'s site for current APR details. Variable APRs apply.', // General placeholder
  annualFee       : 795, 
  // IMPORTANT: REPLACE WITH YOUR ACTUAL AFFILIATE LINK FOR CSR
  applyLink       : 'https://creditcards.chase.com/rewards-credit-cards/sapphire/reserve', // /* UPDATE THIS */
  // Official links from your document
  ratesLink       : 'https://www.chase.com/personal/credit-cards/agreements',
  officialOverviewLink: 'https://creditcards.chase.com/rewards-credit-cards/sapphire/reserve',
  officialBenefitsCreditsLink: 'https://www.chase.com/card-benefits/sapphirereserve/travel',
  officialTravelShoppingProtectionsLink: 'https://www.chase.com/card-benefits/sapphirereserve/travel',
  officialUltimateRewardsLink: 'https://www.chase.com/personal/credit-cards/ultimate-rewards',
  chaseTravelPortalLink: 'https://www.chasetravel.com',
  freedomFlexLink: 'https://creditcards.chase.com/cash-back-credit-cards/freedom/flex',
  sapphirePreferredLink: 'https://creditcards.chase.com/rewards-credit-cards/sapphire/preferred',
  loungeAccessLink: 'https://www.chase.com/personal/credit-cards/sapphire-lounge',
  sku             : 'CHASE-CSR-TCI-2025', // Placeholder - Example SKU
  mpn             : 'CHASESAPPHIRERESERVE', // Placeholder - Example MPN
  h1Content       : "The New Chase Sapphire Reserve®: An In-Depth Review of the $795 Premium Lifestyle Card", // From your text
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
      brand          : { '@type': 'Brand', name: 'Chase' },
      aggregateRating: {
        '@type'    : 'AggregateRating',
        ratingValue : reviewDataNew.ratingValue.toString(),
        bestRating  : '10',
        worstRating : '1',
        ratingCount : reviewDataNew.ratingCount.toString(),
        reviewCount : '1', // Assuming 1 editor review for this page
      },
      offers: {
        '@type'            : 'Offer',
        url                : reviewDataNew.applyLink, // Your affiliate link
        priceCurrency      : 'USD',
        price              : reviewDataNew.annualFee.toString(),
        priceValidUntil    : '2026-12-31', // UPDATE AS NEEDED
        itemCondition      : 'https://schema.org/NewCondition',
        availability       : 'https://schema.org/InStock',
        priceSpecification: [
          {
            '@type'              : 'PriceSpecification',
            priceCurrency        : 'USD',
            price                : reviewDataNew.annualFee.toString(),
            valueAddedTaxIncluded: 'false',
            description          : `Annual fee: $${reviewDataNew.annualFee}. Authorized User Fee: $195.`,
          },
          {
            '@type'              : 'PriceSpecification',
            priceCurrency        : 'USD',
            description          : `See official ${reviewDataNew.cardName} Pricing & Terms on the issuer's website for current APRs and fees.`,
          },
        ],
        seller: { '@type': 'Organization', name: 'Chase' },
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
        logo    : { '@type': 'ImageObject', url: `${siteUrl}/images/logo/your-logo-schema.png` }, // /* UPDATE THIS */ path to your logo for schema
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
          name: 'Is the Chase Sapphire Reserve $795 annual fee worth it in 2025?',
          acceptedAnswer: { '@type': 'Answer', text: "It depends entirely on your spending. If you are a high-spender whose lifestyle naturally aligns with the card's specific credit categories (like The Edit by Chase, Sapphire Dining, StubHub, Apple, Peloton) and you travel enough to maximize the 8x points via the Chase portal, the value can easily exceed the fee. For others, a card with a lower fee might be better." }
        },
        {
          '@type': 'Question',
          name: 'What is the biggest change to the Sapphire Reserve rewards?',
          acceptedAnswer: { '@type': 'Answer', text: "The biggest change is the devaluation of the 'general travel' category from 3x to 1x points. This makes the card less rewarding for purchases like cruises, tours, or travel not booked via Chase Travel or directly with airlines/hotels. The focus has shifted heavily to bookings made through Chase's ecosystem." }
        },
        {
          '@type': 'Question',
          name: 'What are the new semi-annual credits on the Chase Sapphire Reserve?',
          acceptedAnswer: { '@type': 'Answer', text: "The new model includes several credits split into semi-annual allotments (e.g., Jan-Jun and Jul-Dec). These include a $500 credit for 'The Edit by Chase' ($250 per half), a $300 Sapphire Dining credit ($150 per half), and a $300 StubHub credit ($150 per half). These are 'use it or lose it' and require careful tracking." }
        },
        {
          '@type': 'Question',
          name: 'Is the travel insurance on the Sapphire Reserve still good?',
          acceptedAnswer: { '@type': 'Answer', text: "Yes, the travel insurance suite on the Chase Sapphire Reserve® remains industry-leading. It includes Primary Auto Rental Collision Damage Waiver, Trip Cancellation/Interruption Insurance, Trip Delay Reimbursement, and more. For many loyalists, these protections alone are a major reason to keep the card." }
        },
        {
          '@type': 'Question',
          name: "Who is the ideal cardholder for the new Sapphire Reserve?",
          acceptedAnswer: { '@type': 'Answer', text: "The ideal cardholder is a highly organized, high-spending individual in a major metropolitan area. They already use services like DoorDash, Lyft, and Apple Music, and they travel frequently by booking flights and hotels through portals or directly. They see tracking credits not as a chore, but as a challenge." }
        },
      ],
    },
    {
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

const ratingCriteriaOriginal = [
    'Value of Lifestyle & Travel Credits vs. Annual Fee',
    'Rewards on Chase Travel Portal Bookings (8x)',
    'Rewards on Direct Flight/Hotel Bookings (4x)',
    'Quality and Breadth of Travel Insurance Protections',
    'Ultimate Rewards® Program Flexibility & Value',
    'Proprietary Lounge Access (Sapphire Lounges)',
    'Authorized User Fee ($195) vs. Shared Benefits',
    'Devaluation of General Travel Earning (1x)',
    'Complexity of "Coupon Book" Credit System',
    'Overall Value Proposition for the Target User',
];

const tocSections = [
    { id: 'section-intro', title: 'Executive Summary: The 2025 Overhaul & The End of an Era' },
    { id: 'section-1', title: 'The Ideal Cardholder: A Detailed User Profile' },
    { id: 'section-2', title: 'Deconstructing the Rewards: The New Points Earning Structure' },
    { id: 'section-3', title: 'Unlocking True Value: The Ultimate Rewards Ecosystem' },
    { id: 'section-4', title: 'Unpacking the "Coupon Book": A Guide to the New Lifestyle Credits' },
    { id: 'section-5', title: 'The Protections: Why Many Loyalists Stay' },
    { id: 'section-cta', title: 'Is The Reserve Right For You? Compare Top Cards' },
    { id: 'section-6', title: 'A First-Person Test Drive: Using the "Edit" Portal' },
    { id: 'section-7', title: 'The Bottom Line: A Real-World Spending Example' },
    { id: 'section-8', title: 'The Premium Gauntlet: How the Sapphire Reserve Stacks Up' },
    { id: 'section-9', title: 'The Verdict: A Balanced Look at Pros and Cons' },
    { id: 'section-10', title: 'Final Verdict: Who Should Get the Chase Sapphire Reserve in 2025?' },
    { id: 'section-faq', title: 'Frequently Asked Questions (FAQs)' },
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
function ChaseSapphireReserveReviewPage() {
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
              if (!isHoveringTrigger && !isHoveringTooltip) {
                 setShowAuthorBioTooltip(false);
              }
          } else {
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
    welcomeOffer: "Varies by offer. Check Chase's site for the current bonus.", // CSR offers can vary widely
    annualFee: `$${reviewDataNew.annualFee}`,
    topEarning: "8x points on All Travel via Chase Travel; 10x on Chase Dining.",
    keyCredits: "Over $1,500 in potential credits (The Edit, Sapphire Dining, StubHub, etc.).",
    travelPerk: "Industry-leading travel insurance; Priority Pass & Sapphire Lounges.",
    bestFor: "Organized, high-spending travelers who can maximize portal bookings and a complex web of lifestyle credits."
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
                  Here in mid-2025, the ground has irrevocably shifted in the world of premium credit cards. Chase has radically transformed its iconic Sapphire Reserve®, a move that has sent ripples through the wallets of travelers everywhere. It’s no longer the straightforward travel workhorse we knew; it has been reborn as a complex, high-end lifestyle card with a jaw-dropping $795 annual fee. This review will be your guide through that hunt.
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
                      on Chase&apos;s official site
                    </span>
                  </div>
                  <Link href="#section-1" legacyBehavior>
                    <a className={styles.heroSecondaryLink}>View Ideal Profile</a>
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
                                <span className={styles.summaryLabel}>Key Credits:</span>
                                <span className={styles.summaryValue}>{summaryBoxData.keyCredits}</span>
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
                                See Card Pricing & Terms
                            </a>
                            <Link href="/rewards-compare" legacyBehavior>
                                <a className={`${styles.heroRewardsCalculator} ${styles.summaryButton}`}>Rewards Calculator</a>
                            </Link>
                        </div>
                    </div>
                </header>
              <article>
                <section id="section-intro" className={styles.reviewSection}>
                  <h2>Executive Summary: The 2025 Overhaul &amp; The End of an Era</h2>
                  <p>The premium credit card landscape has been shaken by a seismic shift. In a move signaling the end of an era, Chase has completely reimagined its flagship, the Sapphire Reserve. The headline news is the dramatic fee increase to a market-topping $795, while the cost to add an authorized user has more than doubled to $195 (<a href={reviewDataNew.ratesLink} target="_blank" rel="noopener noreferrer sponsored">Source: Chase.com, Cardmember Pricing & Terms</a>). This isn't a card you add to your wallet lightly.</p>
                  <p>In Chase’s view, this steep new price is justified. The card is now loaded with over $1,500 in potential annual statement credits, a strategic pivot that moves it squarely into the territory of its chief rival, <Link href="/review/amex-platinum-review-2025">The Platinum Card® from American Express</Link> (<a href={reviewDataNew.officialBenefitsCreditsLink} target="_blank" rel="noopener noreferrer sponsored">Source: Chase.com, Sapphire Reserve Benefits Page</a>). In doing so, the Sapphire Reserve has effectively traded its celebrated simplicity for what many users have dubbed a "coupon-book" model. Value is no longer effortless; it must be actively extracted by using a complex web of benefits with specific partners.</p>
                  <p>This transformation is rooted in stark business reality. The original Sapphire Reserve, launched in 2016 to massive fanfare, was famously a loss leader for Chase. It was brilliant at attracting a coveted demographic of young, affluent customers, but it cost the bank dearly. The 2025 overhaul is a clear and decisive move to make the product profitable. Consequently, the Chase Sapphire Reserve is now a fundamentally different product. To judge this new card by the standards of the old is to miss the point entirely.</p>
                </section>

                <Image
                    src="/travel-lifestyle-montage.jpg" // Placeholder: create a lifestyle image
                    alt="A montage showing upscale dining, travel, and lifestyle activities"
                    width={800}
                    height={500}
                    className={styles.contentImage}
                    loading="lazy"
                />

                <section id="section-1" className={styles.reviewSection}>
                  <h2>The Ideal Cardholder: A Detailed User Profile</h2>
                  <p>So, who is the new $795 Chase Sapphire Reserve® for? It's not for everyone. In fact, it has been re-engineered for a niche, ultra-premium user. A vivid picture emerges of the individual for whom this card is a powerful financial tool.</p>
                  <h3>Spending Habits</h3>
                  <p>The ideal cardholder is a high spender, someone whose lifestyle naturally aligns with the card’s new partners. Their spending is heavily concentrated in dining, particularly at the kind of upscale restaurants featured in the "Sapphire Reserve Exclusive Tables" program. Crucially, they are already an organic user of services like Apple Music, Peloton, DoorDash, and Lyft. For this person, the statement credits don't feel like forced spending; they feel like organic rebates.</p>
                  <h3>Travel Patterns</h3>
                  <p>This individual travels frequently, primarily booking flights and hotels. They are comfortable using the Chase Travel portal to chase the new 8x points multiplier or booking directly with airlines to secure 4x points (<a href={reviewDataNew.officialUltimateRewardsLink} target="_blank" rel="noopener noreferrer sponsored">Source: Chase.com, Ultimate Rewards Program</a>). Their home base is likely a major city with a Chase Sapphire Lounge—like New York (LGA, JFK) or Boston (BOS)—or at least an airport with solid Priority Pass options.</p>
                  <h3>Lifestyle</h3>
                  <p>Geographically, this person lives in a major metropolitan area where benefits like the Sapphire Dining program and DoorDash delivery are most convenient. They also possess a key personality trait: they are highly organized. They view the task of tracking multiple, semi-annual statement credits not as a chore, but as a rewarding challenge. This "lifestyle architect" is willing and able to meticulously manage the card's complexities.</p>
                </section>

                <section id="section-2" className={styles.reviewSection}>
                  <h2>Deconstructing the Rewards: The New Points Earning Structure</h2>
                  <p>The rewards-earning framework of the Sapphire Reserve has been surgically altered. The changes shift focus heavily toward bookings made through Chase or directly with select travel providers, creating a more complex decision-making process for cardholders. The new earning rates reveal a strategic redirection of rewards:</p>
                   <DraggableTableWrapper>
                    <div className={styles.tableContainer}>
                      <table className={`${styles.statsTable} ${styles.earningRatesTable}`}>
                        <thead>
                          <tr>
                            <th>Spending Category</th>
                            <th>New Earning Rate</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr><td>All Travel via Chase Travel</td><td><strong>8x points</strong></td></tr>
                          <tr><td>Flights &amp; Hotels (Direct)</td><td><strong>4x points</strong></td></tr>
                          <tr><td>Chase Dining</td><td><strong>10x points</strong></td></tr>
                          <tr><td>General Dining</td><td><strong>3x points</strong></td></tr>
                          <tr><td>All Other Travel</td><td><strong>1x point</strong></td></tr>
                          <tr><td>All Other Purchases</td><td><strong>1x point</strong></td></tr>
                        </tbody>
                      </table>
                    </div>
                  </DraggableTableWrapper>
                  <p>This new structure presents a difficult "protection versus points" dilemma. The Sapphire Reserve is legendary for its comprehensive, best-in-class travel insurance. Check out our guide to the <Link href="/review/best-travel-insurance-cards-2025">best cards for travel insurance</Link> to see how it compares. Previously, you could book a complex cruise or a tour package through a travel agent, earn a solid 3x points, and know you were covered. Under the new system, that same booking now earns a paltry 1x point.</p>
                  <p>Suddenly, a traveler booking a $5,000 cruise is forced to choose: book with the Reserve for its unparalleled insurance but earn only 5,000 points, or use a different card to earn more rewards but accept inferior protection? This conflict fundamentally undermines the card's former status as the undisputed, all-in-one travel card.</p>
                </section>
                
                <section id="section-3" className={styles.reviewSection}>
                    <h2>Unlocking True Value: The Ultimate Rewards Ecosystem</h2>
                    <p>While the Sapphire Reserve is powerful on its own, its true potential has always been unlocked when it serves as the anchor of the "Chase Trifecta." That hasn't changed. This strategy involves pairing the Reserve with no-annual-fee cards that earn Ultimate Rewards points in different bonus categories.</p>
                    <ul className={styles.featureList}>
                        <li><strong>Chase Sapphire Reserve®:</strong> For premium travel benefits and bonuses on travel and dining.</li>
                        <li><strong>Chase Freedom Flex®:</strong> For its rotating quarterly categories that earn 5% cash back (which is equivalent to 5x points) (<a href={reviewDataNew.freedomFlexLink} target="_blank" rel="noopener noreferrer sponsored">Source: Chase.com, Freedom Flex Product Page</a>).</li>
                        <li><strong>Chase Freedom Unlimited®:</strong> For its baseline earning rate of 1.5% cash back (1.5x points) on all non-bonus category purchases.</li>
                    </ul>
                    <p>The magic of this system lies in the ability to pool points. Rewards earned on the Freedom cards can be transferred to the Sapphire Reserve account. Once there, they gain access to the Reserve's more valuable redemption options, most notably the 1:1 transfer to high-value airline and hotel partners. This synergy transforms the 1.5x points earned on the Freedom Unlimited into 1.5 transferable points per dollar—a remarkably strong earning rate for everyday spending.</p>
                </section>

                <section id="section-4" className={styles.reviewSection}>
                  <h2>Unpacking the &quot;Coupon Book&quot;: A Guide to the New Lifestyle Credits</h2>
                  <p>The justification for that hefty annual fee hinges on a cardholder's ability to maximize a new suite of lifestyle credits. Chase advertises over $1,500 in potential value, but each credit comes with terms that demand careful attention (<a href={reviewDataNew.officialBenefitsCreditsLink} target="_blank" rel="noopener noreferrer sponsored">Source: Chase.com, Guide to Sapphire Reserve Benefits</a>). Here’s the one-time breakdown:</p>
                  <ul className={styles.featureList}>
                      <li><strong>$500 The Edit Credit:</strong> For bookings at The Edit by Chase Travel, a luxury hotel collection. This is split into two $250 allotments (Jan-Jun and Jul-Dec) and requires navigating Chase's portal.</li>
                      <li><strong>$300 Sapphire Dining Credit:</strong> For restaurants in the "Sapphire Reserve Exclusive Tables" program. This is also split into two $150 semi-annual credits and is redeemable via OpenTable.</li>
                      <li><strong>$300 StubHub Credit:</strong> For event tickets, delivered as two $150 semi-annual credits.</li>
                      <li><strong>$250 Apple Credit:</strong> Toward subscriptions for Apple TV+ and Apple Music.</li>
                      <li><strong>$120 Peloton Credit:</strong> Provided as a $10 monthly statement credit.</li>
                  </ul>
                  <p>The structure of these benefits reveals a core component of the card's new business model: "breakage." This term refers to the value of rewards or credits that go unused. By implementing semi-annual expiration dates and specific merchant restrictions, Chase maximizes the probability that cardholders will not use the full face value of every credit.</p>
                </section>

                <section id="section-5" className={styles.reviewSection}>
                  <h2>The Protections: Why Many Loyalists Stay</h2>
                  <p>One of the most compelling features of the Chase Sapphire Reserve is its comprehensive suite of travel and purchase insurance (<a href={reviewDataNew.officialTravelShoppingProtectionsLink} target="_blank" rel="noopener noreferrer sponsored">Source: Chase.com, Sapphire Reserve Guide to Benefits</a>). These protections are among the best in the industry.</p>
                  <ul className={styles.featureList}>
                    <li><strong>Primary Auto Rental Collision Damage Waiver:</strong> A superstar benefit providing reimbursement up to $75,000. It means you can confidently decline the rental agency’s expensive insurance without having to file with your personal insurance first.</li>
                    <li><strong>Trip Cancellation/Interruption Insurance:</strong> Another heavyweight, covering up to $10,000 per person if your trip is cut short for a covered reason.</li>
                    <li><strong>Other Key Protections:</strong> The card also includes Trip Delay Reimbursement, Baggage Delay Insurance, Lost Luggage Reimbursement, and Emergency Medical and Evacuation coverage.</li>
                    <li><strong>Shopping Protections:</strong> You get excellent Purchase Protection against damage or theft, Extended Warranty Protection, and Return Protection.</li>
                  </ul>
                   <p>For many cardholders, this insurance suite alone justifies a significant portion of the annual fee. See how these protections stack up in our <Link href="/review/chase-vs-capital-one-travel-cards-2025">Chase vs. Capital One</Link> comparison.</p>
                </section>

                {/* Mid-Review CTA Section */}
                <section id="section-cta" className={styles.ctaSection}>
                    <h2>Is The Reserve The Right Card For You?</h2>
                    <p>The Chase Sapphire Reserve® is a complex card with huge potential, but it's not for everyone. See how it stacks up against other top-tier travel cards before you decide.</p>
                    <div className={styles.ctaButtonContainer}>
                        <Link href="/compare" legacyBehavior>
                            <a className={styles.ctaButton}>Compare Top Travel Cards</a>
                        </Link>
                    </div>
                </section>

                <section id="section-6" className={styles.reviewSection}>
                  <h2>A First-Person Test Drive: Using the &quot;Edit&quot; Portal</h2>
                  <p>To understand what using these new benefits feels like, I decided to test-drive the '$500 The Edit' credit for a hypothetical weekend trip to Boston. Finding the portal itself was easy enough through the Chase dashboard (<a href={reviewDataNew.chaseTravelPortalLink} target="_blank" rel="noopener noreferrer sponsored">Source: Chase Travel, The Edit by Chase Portal</a>). The interface was clean, but the search functionality felt a bit clunky compared to booking directly with a major hotel chain.</p>
                  <p>I priced out a two-night stay at a well-known luxury hotel. The Edit portal showed a rate of $650 per night. A quick search on the hotel's own website showed the exact same public rate. So, the credit isn't a discount. It's a rebate on a purchase you have to make through their specific system. It’s valuable, absolutely, but only if your plans already align perfectly with their curated offerings at their specified prices. It cemented the "lifestyle architect" idea for me—you have to be willing to build your plans around the card's rules to win.</p>
                </section>

                <section id="section-7" className={styles.reviewSection}>
                  <h2>The Bottom Line: A Real-World Spending Example</h2>
                  <p>To understand the card's value, you have to run the numbers. Let's create a profile for "Alex," our ideal cardholder, and analyze a year of spending.</p>
                  <h3>Alex's Annual Spending Profile:</h3>
                  <ul className={styles.featureList}>
                      <li>Flights: $4,000 (booked directly)</li>
                      <li>Hotels: $3,000 total ($2,000 via Chase Travel portal, $1,000 at a hotel from The Edit)</li>
                      <li>Dining: $6,000 total ($1,000 at Sapphire Reserve Exclusive Tables restaurants)</li>
                      <li>And Alex fully uses the full suite of lifestyle and partner credits.</li>
                  </ul>
                  <h3>Net Value Calculation:</h3>
                  <DraggableTableWrapper>
                    <div className={styles.tableContainer}>
                      <table className={`${styles.statsTable}`}>
                        <tbody>
                            <tr><td>Rewards Earned:</td><td>84,500 Ultimate Rewards points</td></tr>
                            <tr><td>Value of Points (at 1.5 cpp):</td><td>$1,267.50</td></tr>
                            <tr><td>Value of Credits Used:</td><td>$1,970</td></tr>
                            <tr><td><strong>Total Gross Annual Value:</strong></td><td><strong>$3,237.50</strong></td></tr>
                            <tr><td>Less Annual Fee:</td><td>-$795</td></tr>
                            <tr><td><strong>Net Annual Value for Alex:</strong></td><td><strong className={styles.positiveValue}>$2,442.50</strong></td></tr>
                        </tbody>
                      </table>
                    </div>
                  </DraggableTableWrapper>
                  <p>For Alex, who perfectly aligns with the card's intended user profile, the Chase Sapphire Reserve® delivers an outstanding net positive value of over $2,400 per year. This demonstrates that while the card is not for everyone, it can be immensely profitable for the right person.</p>
                </section>

                <section id="section-8" className={styles.reviewSection}>
                  <h2>The Premium Gauntlet: How the Sapphire Reserve Stacks Up</h2>
                  <p>No card exists in a vacuum. Here’s how the Sapphire Reserve stacks up against its two main competitors in the premium space (<a href={reviewDataNew.officialOverviewLink} target="_blank" rel="noopener noreferrer sponsored">Source: Chase.com, Sapphire Reserve Card Details</a>).</p>
                  <DraggableTableWrapper>
                    <div className={styles.tableContainer}>
                      <table className={`${styles.statsTable} ${styles.comparisonTable}`}>
                        <thead>
                          <tr>
                            <th>Feature</th>
                            <th><Link href="/review/chase-sapphire-reserve-2025">Chase Sapphire Reserve®</Link></th>
                            <th><Link href="/review/amex-platinum-review-2025">The Platinum Card® from Amex</Link></th>
                            <th><Link href="/cards/capital-one-venture-x">Capital One Venture X</Link></th>
                          </tr>
                        </thead>
                        <tbody>
                            <tr><td data-label="Feature">Annual Fee</td><td data-label="CSR">$795</td><td data-label="Amex Plat">$695</td><td data-label="Venture X">$395</td></tr>
                            <tr><td data-label="Feature">Authorized User Fee</td><td data-label="CSR">$195</td><td data-label="Amex Plat">$195 (for 3)</td><td data-label="Venture X">$0 (for 4)</td></tr>
                            <tr><td data-label="Feature">Key Earning Rates</td><td data-label="CSR">8x on Chase Travel; 4x on direct flights/hotels</td><td data-label="Amex Plat">5x on direct flights & AmexTravel hotels</td><td data-label="Venture X">10x on Cap One Travel hotels; 2x everywhere else</td></tr>
                            <tr><td data-label="Feature">Key Credits</td><td data-label="CSR">Complex suite of lifestyle credits</td><td data-label="Amex Plat">Complex suite of travel & shopping credits</td><td data-label="Venture X">Simple travel credit & anniversary miles</td></tr>
                            <tr><td data-label="Feature">Lounge Access</td><td data-label="CSR">Priority Pass, Sapphire Lounges</td><td data-label="Amex Plat">Centurion, Delta Sky Club, Priority Pass (Most extensive)</td><td data-label="Venture X">Priority Pass, Capital One Lounges</td></tr>
                            <tr><td data-label="Feature">Travel Insurance</td><td data-label="CSR">Industry-leading</td><td data-label="Amex Plat">Strong</td><td data-label="Venture X">Good</td></tr>
                        </tbody>
                      </table>
                    </div>
                  </DraggableTableWrapper>
                </section>

                <section id="section-9" className={styles.reviewSection}>
                    <h2>The Verdict: A Balanced Look at Pros and Cons</h2>
                    <p>The reimagined Chase Sapphire Reserve® presents a compelling but polarizing value proposition.</p>
                    <div className={styles.prosConsContainer}>
                        <div className={styles.prosBox}>
                            <h3 className={styles.prosConsTitle}>The Bright Side: Key Strengths</h3>
                            <ul className={styles.featureList}>
                                <li><strong>Massive Potential Value:</strong> For the cardholder who can organically use the new suite of lifestyle credits, the potential value is enormous.</li>
                                <li><strong>High Earning on Key Travel:</strong> The 8x multiplier on Chase Travel and 4x on direct flights and hotels are lucrative rates.</li>
                                <li><strong>Industry-Leading Protections:</strong> The card retains its best-in-class travel and purchase protections.</li>
                                <li><strong>Premium Proprietary Lounges:</strong> The growing network of high-quality Chase Sapphire Lounges provides a superior airport experience (<a href={reviewDataNew.loungeAccessLink} target="_blank" rel="noopener noreferrer sponsored">Source: Chase.com, Airport Lounge Access</a>).</li>
                            </ul>
                        </div>
                        <div className={styles.consBox}>
                            <h3 className={styles.prosConsTitle}>The Reality Check: Major Drawbacks</h3>
                            <ul className={styles.featureList}>
                                <li><strong>Extremely High Annual Fee:</strong> That $795 figure creates a high barrier to entry and requires significant work to justify.</li>
                                <li><strong>Complex "Coupon Book" Model:</strong> Maximizing the card's value requires actively tracking numerous credits with specific restrictions.</li>
                                <li><strong>Devalued General Travel Category:</strong> The reduction of rewards on "other travel" (like cruises and tours) from 3x to 1x is a major blow.</li>
                                <li><strong>Costly for Families:</strong> The steep $195 authorized user fee makes it an expensive proposition for those who want to share benefits.</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section id="section-10" className={styles.reviewSection}>
                  <h2>Final Verdict: Who Should Get the Chase Sapphire Reserve in 2025?</h2>
                  <p>The new Chase Sapphire Reserve® is a powerful, complex, and highly specialized financial instrument. Its worth is no longer a simple calculation but a personalized assessment of your lifestyle, spending habits, and organizational diligence.</p>
                  <h3>Get this card if:</h3>
                  <p>You are the "Ideal Cardholder" profiled in this review. You live in a major city, spend heavily on travel and dining, and are an existing user of the card's new partner services. You have done the math, and those piecemeal credits represent real, organic savings, not forced spending. You value the peace of mind from best-in-class travel insurance and will frequent the high-quality Sapphire Lounges. You are the kind of person who enjoys the challenge of maximizing a complex system.</p>
                  <h3>Consider another card if:</h3>
                  <p>You are a more budget-conscious traveler, your primary travel spend is on cruises or tour packages, or you simply dislike the hassle of that high-stakes scavenger hunt for rebates. If you need to add family members as authorized users affordably, this card is no longer a good fit. For these individuals, the <Link href="/review/chase-sapphire-preferred-2025">Chase Sapphire Preferred® Card</Link>, with its lower $95 fee, or the <Link href="/cards/capital-one-venture-x">Capital One Venture X® Rewards Credit Card</Link>, with its simple and effective credits, will almost certainly provide better and more straightforward value (<a href={reviewDataNew.sapphirePreferredLink} target="_blank" rel="noopener noreferrer sponsored">Source: Chase.com, Sapphire Preferred Product Page</a>). For another strong alternative, see our <Link href="/review/citi-strata-premier-2025">Citi Strata Premier review</Link>.</p>
                  <p>In conclusion, the Chase Sapphire Reserve® is no longer a simple travel tool for the masses. It is an intricate lifestyle architecture. For the select few who can master its design, the rewards are immense. For everyone else, the golden age of the Sapphire Reserve is over, and it's time to look elsewhere.</p>
                </section>
                
                <section id="section-faq" className={`${styles.reviewSection} ${styles.faqSection}`}>
                  <h2>Frequently Asked Questions (FAQs)</h2>
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

                <section id="section-eat" className={`${styles.reviewSection} ${styles.eatSection}`}>
                    <h2 dangerouslySetInnerHTML={{ __html: `Our Commitment to E-A-T: Expertise, Authority &amp; Trustworthiness`}}></h2>
                    <p>At <strong>{siteName}</strong>, we are committed to providing content that exemplifies Expertise, Authoritativeness, and Trustworthiness (E-A-T). This review of the <strong>{reviewDataNew.cardName}</strong> has been meticulously researched and crafted. We've analyzed the card's features, benefits, rewards structure, and fees, referencing official issuer documentation from Chase and considering real-world user experiences and data points from the travel rewards community. Our goal is to present a balanced, comprehensive, and reliable guide to help you make an informed decision. All information is current as of <strong>{new Date(updateDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</strong>, but we always recommend verifying details directly with the issuer as terms can change.</p>
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
                        See Pricing & Terms
                    </a>
                </div>
            </div>
      </div>
    </>
  );
}

export default ChaseSapphireReserveReviewPage;