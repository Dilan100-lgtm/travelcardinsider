/* ------------------------------------------------------------------
    File:  pages/reviews/chase-aeroplan-card.js
    Route: https://www.yourwebsite.com/reviews/chase-aeroplan-card
------------------------------------------------------------------- */

import React, { useState, useEffect, useCallback, useRef } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import styles from '../../styles/ReviewPage.module.css'; // Assuming same CSS module

import TableOfContents    from '../../components/TableOfContents'; // Assuming same TOC component
import IconGift from '../../components/icons/icon-gift.svg'; // UPDATE AS NEEDED (path to your icon)
import IconStar from '../../components/icons/icon-star.svg'; // UPDATE AS NEEDED (path to your icon)
import IconCheck from '../../components/icons/icon-Credit Card.svg'; // UPDATE AS NEEDED (path to your icon, e.g. a checkmark or fee icon)
// import IconX from '../../components/icons/icon-Star + Arrow Up.svg'; // Not explicitly used in Aeroplan summary, but available
import IconPlus from '../../components/icons/icon-target.svg'; // UPDATE AS NEEDED (path to your icon, represents 'Best For' or 'Key Benefit')

const RatingTooltip = dynamic(() => import('../../components/RatingTooltip'), { ssr: false, loading: () => null });

/* ──────────────────────────────
    CONSTANTS & STATIC DATA
    ────────────────────────────── */
const siteName    = 'YourCreditCardSite'; // UPDATE AS NEEDED
const siteUrl     = 'https://www.yourwebsite.com'; // UPDATE AS NEEDED: Replace with your actual site URL
const pagePath    = '/reviews/chase-aeroplan-card'; // UPDATE AS NEEDED: if path differs
const pageUrlFull = `${siteUrl}${pagePath}`;
const publishDate = '2025-05-23'; // UPDATE AS NEEDED: Current date or actual publish date
const updateDate  = '2025-05-23'; // UPDATE AS NEEDED: Current date or actual update date

const reviewDataNew = {
  cardName        : 'Chase Aeroplan Card',
  title           : 'Chase Aeroplan Card Review (2025): US Guide to Star Alliance Rewards', // SEO Optimized Title
  description     : 'In-depth 2025 review of the Chase Aeroplan Card for US travelers. Explore 3X rewards, Aeroplan 25K status, Pay Yourself Back, Star Alliance benefits, and $95 annual fee.', // SEO Optimized Description
  keywords        : 'Chase Aeroplan review, Aeroplan card US, Star Alliance credit card, travel rewards card, Pay Yourself Back, Aeroplan 25K status, Air Canada credit card US, Chase credit card review',
  author: { // Placeholder: UPDATE ALL AUTHOR DETAILS AS NEEDED
      name: 'Your Name',
      title: 'Founder & Lead Editor',
      imageUrl: '/WhatsApp Image 2025-05-12 at 4.09.58 PM.jpeg', // Placeholder - UPDATE
      imageWidth: 40,
      imageHeight: 40,
      tooltipImageUrl: '/WhatsApp Image 2025-05-12 at 4.09.58 PM.jpeg', // Placeholder - UPDATE
      tooltipImageWidth: 60,
      tooltipImageHeight: 60,
      expertise: [
          'Airline Credit Cards',
          'Rewards Programs',
          'Star Alliance',
          'Points Strategy',
          'Credit Card Analysis for US Travelers'
      ],
      bioSnippet: 'Your Name is the founder and lead editor of YourCreditCardSite.com, dedicated to demystifying credit cards and uncovering their real-world value for smarter travel.',
      fullBioLink: '/author/your-name', // Placeholder - UPDATE
      fullBio: `Your Name is the founder and lead editor of YourCreditCardSite.com, a platform dedicated to helping everyday people make smarter decisions with travel and rewards credit cards. [MORE BIO DETAILS TO BE ADDED BY USER]`,
      publishedStats: 'X+ in-depth card reviews per week', // Placeholder - UPDATE
      testedStats: 'Over Y+ credit card benefits across major brands', // Placeholder - UPDATE
      socialLinks: { // Placeholder - UPDATE
          linkedin: 'https://www.linkedin.com/in/dilan-madushanka-b65293365',
          twitter: 'https://x.com/team_dilan',
          email: 'team@travelcardinsider.com'
      }
  },
  siteName: siteName,
  imageUrl        : '/aeroplan_card.png', // Placeholder: Replace with actual card image URL
  imageWidth      : 1290, // Placeholder - UPDATE if image dimensions differ (use actual dimensions for your image)
  imageHeight     : 812,  // Placeholder - UPDATE if image dimensions differ
  ratingValue     : 7.8,  // Placeholder - UPDATE AS NEEDED (e.g. 3.9/5 * 2) - Based on a ~4-star concept
  ratingCount     : 162,  // Placeholder - UPDATE AS NEEDED
  reviewBody      : 'Our editors evaluate the Chase Aeroplan Card based on its rewards structure (3X on Air Canada, groceries, dining), welcome offer, annual fee, Aeroplan 25K Elite Status benefits, Pay Yourself Back flexibility, Star Alliance partner access, and overall value for US-based travelers seeking international rewards.',
  aprRange        : '20.49% to 28.99% variable',
  annualFee       : 95,
  applyLink       : 'https://creditcards.chase.com/travel-credit-cards/aircanada/aeroplan', // Placeholder - UPDATE with actual, trackable affiliate link
  ratesLink       : 'https://sites.chase.com/services/creatives/pricingandterms.html/content/dam/pricingandterms/LGC60518.html', // Placeholder - UPDATE with official rates and fees link from Chase
  sku             : 'CHASE-AEROPLAN-YCCS-2025', // Placeholder - Example SKU
  mpn             : 'CHASEAEROPLAN', // Placeholder - Example MPN
  h1Content       : "Chase Aeroplan Card Review: Your US Ticket to Global Travel Rewards?",
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
      image          : reviewDataNew.imageUrl, // Relative path is fine if base URL is correctly set elsewhere for schema, or use full URL
      description    : reviewDataNew.description,
      sku            : reviewDataNew.sku,
      mpn            : reviewDataNew.mpn,
      brand          : { '@type': 'Brand', name: 'Aeroplan' }, // The loyalty program brand
      aggregateRating: {
        '@type'    : 'AggregateRating',
        ratingValue : reviewDataNew.ratingValue.toString(),
        bestRating  : '10', // Assuming a 1-10 scale
        worstRating : '1',
        ratingCount : reviewDataNew.ratingCount.toString(),
        reviewCount : '1', // Number of editorial reviews this schema refers to
      },
      offers: {
        '@type'            : 'Offer',
        url                : reviewDataNew.applyLink,
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
            description          : `Annual fee: $${reviewDataNew.annualFee}.`,
          },
          {
            '@type'              : 'PriceSpecification',
            priceCurrency        : 'USD',
            description          : `Purchase APR: ${reviewDataNew.aprRange}. Foreign Transaction Fee: $0.`,
          },
        ],
        seller: { '@type': 'Organization', name: 'Chase' }, // The card issuer
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
        description: `${siteName} editorial rating based on 10.0 scale, as of ${updateDate}.`
      },
      author          : {
          '@type': 'Person',
          'name': reviewDataNew.author.name,
          'url': reviewDataNew.author.fullBioLink ? `${siteUrl}${reviewDataNew.author.fullBioLink}` : undefined
      },
      publisher       : {
        '@type' : 'Organization',
        name    : siteName,
        logo    : { '@type': 'ImageObject', url: `${siteUrl}/images/logo/your-logo-schema.png` }, // UPDATE AS NEEDED
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
      url       : reviewDataNew.imageUrl, // Use relative or full path as appropriate for your setup
      width     : reviewDataNew.imageWidth,
      height    : reviewDataNew.imageHeight,
      caption   : reviewDataNew.cardName,
    },
    {
      '@type'        : 'BreadcrumbList',
      '@id'          : `${pageUrlFull}#breadcrumbs`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: siteName, item: siteUrl },
        { '@type': 'ListItem', position: 2, name: 'Credit Card Reviews', item: `${siteUrl}/reviews` }, // UPDATE AS NEEDED if review category path is different
        { '@type': 'ListItem', position: 3, name: `${reviewDataNew.cardName} Review`, item: pageUrlFull },
      ],
    },
    {
      '@type'    : 'FAQPage',
      '@id'      : `${pageUrlFull}#faqs`,
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Do I get free checked bags on Air Canada with the Chase Aeroplan Card?',
          acceptedAnswer: { '@type': 'Answer', text: "Yes, the primary cardmember and up to 8 companions on the same reservation get their first checked bag free when flying Air Canada. Ensure your Aeroplan number is on the booking." }
        },
        {
          '@type': 'Question',
          name: 'What is the best way to use Aeroplan points earned with this card?',
          acceptedAnswer: { '@type': 'Answer', text: "The best value often comes from redeeming points for international business or first-class flights on Air Canada or Star Alliance partner airlines. Using Pay Yourself Back for travel purchases at 1.25 cents per point is also a strong, flexible option." }
        },
        {
          '@type': 'Question',
          name: 'Are there limits to the Pay Yourself Back feature?',
          acceptedAnswer: { '@type': 'Answer', text: "For travel purchases, you can redeem points at 1.25 cents each, up to 200,000 points ($2,500 in statement credits) per year. You can also redeem 7,600 points for a $95 statement credit against the card's annual fee." }
        },
        {
          '@type': 'Question',
          name: 'Is the Chase Aeroplan Card good if I don’t fly Air Canada often?',
          acceptedAnswer: { '@type': 'Answer', text: "Yes, it can still be very valuable. You can earn 3X points on groceries and dining, redeem points on over 45 partner airlines (including Star Alliance members like United), and use Pay Yourself Back for various travel expenses. The 10% bonus on Chase Ultimate Rewards transfers of 50,000+ points also adds value." }
        },
        {
          '@type': 'Question',
          name: 'What is the value of the NEXUS credit?',
          acceptedAnswer: { '@type': 'Answer', text: "The card offers a statement credit of up to $120 every four years for Global Entry, TSA PreCheck, or NEXUS application fees. Since NEXUS costs $50 and includes Global Entry and TSA PreCheck benefits, this credit fully covers the NEXUS fee, offering excellent value for frequent US-Canada travelers." }
        }
      ],
    },
    {
      '@type' : 'Organization',
      '@id'   : `${siteUrl}#website`,
      name    : siteName,
      url     : siteUrl,
      logo    : { '@type': 'ImageObject', url: `${siteUrl}/images/logo/your-logo-schema.png` }, // UPDATE AS NEEDED
      sameAs  : [ // UPDATE AS NEEDED: Add actual social links for your organization
        // "https://www.facebook.com/YourPage",
        // "https://twitter.com/YourHandle",
        // "https://www.linkedin.com/company/YourCompany"
      ],
    },
  ],
};

const ratingCriteriaOriginal = [ // UPDATE AS NEEDED: Tailor these to your specific rating methodology for this card
    'Welcome Bonus Value & Accessibility',
    'Earning Rates: Groceries, Dining, Air Canada (3X)',
    'Monthly Spend Bonus Value',
    'Aeroplan 25K Elite Status Benefits (Initial Year)',
    'Pay Yourself Back Flexibility & Value (1.25cpp)',
    'Star Alliance Partner Redemption Value',
    'Travel & Purchase Protections',
    'Annual Fee Justification ($95)',
    'Foreign Transaction Fee ($0)',
    'Overall Value for US-Based Star Alliance Travelers'
];

const tocSections = [ // Derived from your content structure
    { id: 'section-intro', title: 'Introduction: The Aeroplan Card in the US' },
    { id: 'section-1', title: 'I. Card Snapshot & Key Details' },
    { id: 'section-2', title: 'II. Understanding the Aeroplan Program for US Travelers' },
    { id: 'section-3', title: 'III. Core Features: Earning Power and Travel Benefits' },
    { id: 'section-4', title: 'IV. Deep Dive: Travel Perks & Protections' },
    { id: 'section-5', title: 'V. Rates, Fees, and Overall Costs' },
    { id: 'section-6', title: 'VI. Welcome Bonus and Ongoing Value' },
    { id: 'section-7', title: 'VII. Earning Aeroplan Points: A US Cardholder\'s Guide' },
    { id: 'section-8', title: 'VIII. Redeeming Aeroplan Points: Maximizing Your Rewards' },
    { id: 'section-9', title: 'IX. The True Value of an Aeroplan Point for US Travelers' },
    { id: 'section-10', title: 'X. Aeroplan Sweet Spots from the US' },
    { id: 'section-11', title: 'XI. Aeroplan Elite Status with the Chase Card' },
    { id: 'section-12', title: 'XII. The Pay Yourself Back Feature Explained' },
    { id: 'section-13', title: 'XIII. Real-World Redemption Example for US Spenders' },
    { id: 'section-14', title: 'XIV. Aeroplan Card vs. US Competitors' },
    { id: 'section-15', title: 'XV. Who Should Get This Card in the US?' },
    { id: 'section-16', title: 'XVI. Cardholder Experiences: Pros & Cons' },
    { id: 'section-17', title: 'XVII. Potential Drawbacks to Consider' },
    { id: 'section-faq', title: 'XVIII. Top 5 FAQs for the Chase Aeroplan Card' },
    { id: 'section-verdict', title: 'XIX. Conclusion: Is the Aeroplan Card a Good Co-Pilot for US Travelers?' },
  ];

// DraggableTableWrapper Component (copied from your example, ensure it's correctly imported or defined if not global)
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
function ChaseAeroplanReviewPage() {
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
        {/* UPDATE AS NEEDED: Preload actual card and author images */}
        <link rel="preload" as="image" href={reviewDataNew.imageUrl} />
        <link rel="preload" as="image" href={reviewDataNew.author.imageUrl} />
        <link rel="preload" as="image" href={reviewDataNew.author.tooltipImageUrl} />
        <meta name="geo.region" content="US" />
        <meta name="geo.placename" content="United States" />
        <meta name="language" content="en-US" />
        <meta name="distribution" content="US" />
        {/* UPDATE AS NEEDED: Preload your actual fonts */}
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
        <meta property="og:image"       content={`${siteUrl}${reviewDataNew.imageUrl}`} /> {/* Ensure full URL for OG image */}
        <meta property="og:image:width" content={String(reviewDataNew.imageWidth)} />
        <meta property="og:image:height" content={String(reviewDataNew.imageHeight)} />
        <meta property="article:publisher" content={`https://www.facebook.com/YourPage`} /> {/* UPDATE AS NEEDED: Your Facebook page URL */}
        <meta property="article:section"       content="Credit Card Reviews" /> {/* UPDATE AS NEEDED */}
        <meta property="article:published_time" content={publishDate} />
        <meta property="article:modified_time"  content={updateDate} />
        <meta property="article:author" content={reviewDataNew.author.name} />
        {reviewDataNew.keywords.split(',').map(keyword => (
            <meta property="article:tag" content={keyword.trim()} key={keyword.trim()} />
        ))}
        <meta name="twitter:card"        content="summary_large_image" />
        <meta name="twitter:site" content="@YourTwitterHandle" /> {/* UPDATE AS NEEDED: Your Twitter handle */}
        <meta name="twitter:title"       content={reviewDataNew.title} />
        <meta name="twitter:description" content={reviewDataNew.description} />
        <meta name="twitter:image"       content={`${siteUrl}${reviewDataNew.imageUrl}`} /> {/* Ensure full URL for Twitter image */}
        {/* UPDATE AS NEEDED: Favicon links */}
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
                        src={reviewDataNew.author.imageUrl} // UPDATE AS NEEDED
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
                        {reviewDataNew.author.socialLinks && ( // UPDATE AS NEEDED: Add actual social links for author
                            <div className={styles.authorSocialLinks}>
                                {reviewDataNew.author.socialLinks.linkedin && (
                                    <a href={reviewDataNew.author.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`${reviewDataNew.author.name} on LinkedIn`} className={styles.socialIconLink}>
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                                    </a>
                                )}
                                {reviewDataNew.author.socialLinks.twitter && (
                                    <a href={reviewDataNew.author.socialLinks.twitter} target="_blank" rel="noopener noreferrer" aria-label={`${reviewDataNew.author.name} on Twitter`} className={styles.socialIconLink}>
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
                                    src={reviewDataNew.author.tooltipImageUrl} // UPDATE AS NEEDED
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
                                             <a href={reviewDataNew.author.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`${reviewDataNew.author.name} on LinkedIn`} className={styles.socialIconLink}>
                                                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                                             </a>
                                         )}
                                         {reviewDataNew.author.socialLinks.twitter && (
                                             <a href={reviewDataNew.author.socialLinks.twitter} target="_blank" rel="noopener noreferrer" aria-label={`${reviewDataNew.author.name} on Twitter`} className={styles.socialIconLink}>
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
                  Is an Air Canada co-branded credit card a smart pick for US travelers? This review gets straight to the point: are its robust earnings, elite-style perks, and flexible features like Pay Yourself Back compelling enough for your US-based travel strategy?
                </p>
                <div className={styles.heroCtaContainer}>
                  <div>
                    <a
                      href={reviewDataNew.applyLink} // UPDATE AS NEEDED
                      target="_blank"
                      rel="noopener noreferrer sponsored" // Add 'sponsored' if it's an affiliate link
                      className={`${styles.applyNowButton} ${styles.heroApplyButton}`}
                    >
                      Apply Securely Now
                    </a>
                    <span className={styles.heroApplyButtonDisclaimer}>
                      on Chase's official site {/* UPDATE AS NEEDED if issuer is different or for clarity */}
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
                    src={reviewDataNew.imageUrl} // UPDATE AS NEEDED
                    alt={reviewDataNew.cardName}
                    width={reviewDataNew.imageWidth}
                    height={reviewDataNew.imageHeight}
                    className={styles.heroImage}
                    priority
                  />
                </div>
                <div className={styles.ratingSection}>
                  <span className={styles.tciRating}> {/* tciRating classname might need to be generic if siteName changes */}
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
                                <span className={styles.summaryLabel}>Welcome Bonus:</span>
                                <span className={styles.summaryValue}>Typically up to 70,000 points (tiered structure).</span>
                            </div>
                            <div className={styles.summaryItem}>
                                <span className={styles.summaryIcon}><IconCheck /></span>
                                <span className={styles.summaryLabel}>Annual Fee:</span>
                                <span className={styles.summaryValue}>${reviewDataNew.annualFee}.</span>
                            </div>
                            <div className={styles.summaryItem}>
                                <span className={styles.summaryIcon}><IconStar /></span>
                                <span className={styles.summaryLabel}>Top Earning:</span>
                                <span className={styles.summaryValue}>3X on Air Canada, groceries, dining; 1X elsewhere; Plus 500 bonus points per $2,000 monthly spend.</span>
                            </div>
                            <div className={styles.summaryItem}>
                                <span className={styles.summaryIcon}><IconPlus /></span>
                                <span className={styles.summaryLabel}>Key Benefit:</span>
                                <span className={styles.summaryValue}>Aeroplan 25K Status (initial); Free 1st checked bag (Air Canada); Global Entry/TSA/NEXUS credit; Pay Yourself Back.</span>
                            </div>
                            <div className={styles.summaryItem} data-full-width="true">
                                <span className={styles.summaryIcon}><IconPlus /></span>
                                <span className={styles.summaryLabel}>Best For:</span>
                                <span className={styles.summaryValue}>US travelers seeking strong rewards on everyday spending (groceries, dining), a fast track to elite-like travel benefits, and flexible points for Star Alliance adventures, all for a moderate annual fee.</span>
                            </div>
                        </div>
                        <div className={styles.summaryBoxActions}>
                            <a href={reviewDataNew.ratesLink} className={styles.summaryRatesLink} target="_blank" rel="noopener noreferrer sponsored">
                                See Card Rates & Fees
                            </a>
                             <a href='/rewards-calculator' className={`${styles.heroRewardsCalculator} ${styles.summaryButton}`} target="_blank" rel="noopener noreferrer"> {/* UPDATE link if needed */}
                                Rewards Calculator
                            </a>
                        </div>
                    </div>
                </header>

                <section id="section-intro" className={styles.reviewSection}>
                  <h2>Introduction: The Aeroplan Card in the US</h2>
                  <p>Is an Air Canada co-branded credit card a smart pick for US travelers? The Chase Aeroplan Card aims to be exactly that, offering a surprising gateway to global travel beyond just Canadian routes, thanks to a revamped Aeroplan program and its Star Alliance ties.</p>
                  <p>This review gets straight to the point: are its robust earnings, elite-style perks, and flexible features like Pay Yourself Back compelling enough for your US-based travel strategy? Let's find out.</p>
                </section>

                <section id="section-1" className={styles.reviewSection}>
                  <h2>I. Card Snapshot & Key Details</h2>
                  <p>The Chase Aeroplan Card packs a punch for US travelers valuing flexible rewards and Star Alliance access.</p>
                  <p><strong>'Best For' Tagline:</strong> Ideal for US travelers seeking strong rewards on everyday spending (groceries, dining), a fast track to elite-like travel benefits, and flexible points for Star Alliance adventures, all for a moderate annual fee.</p>
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
                                <tr><td data-label="Feature">Annual Fee</td><td data-label="Details">$95</td></tr>
                                <tr><td data-label="Feature">Welcome Bonus</td><td data-label="Details">Typically up to 70,000 points (tiered structure)</td></tr>
                                <tr><td data-label="Feature">Key Earning Rates</td><td data-label="Details">3X on Air Canada, groceries, dining; 1X elsewhere; Plus 500 bonus points per $2,000 monthly spend (up to 1,500 pts/mo).</td></tr>
                                <tr><td data-label="Feature">Standout Benefits</td><td data-label="Details">Aeroplan 25K Elite Status (initial); Free 1st checked bag on Air Canada (up to 8 companions); Global Entry/TSA PreCheck/NEXUS credit; Pay Yourself Back.</td></tr>
                            </tbody>
                        </table>
                    </div>
                  </DraggableTableWrapper>
                  <p>The monthly spend bonus effectively boosts earn rates (e.g., to 3.25X in 3X categories if spending $2k). The multi-part welcome bonus encourages longer-term cardholding.</p>
                </section>

                {/* Placeholder for a relevant image. UPDATE src, alt, width, height as needed. */}
                <Image
                    src="/ian-dooley-3NCA3tbaE5I-unsplash (1).jpg" // UPDATE PATH
                    alt="Scenic travel destination representing rewards" // UPDATE ALT TEXT
                    width={800} // UPDATE with actual image width
                    height={533} // UPDATE with actual image height
                    className={styles.contentImage}
                />

                <section id="section-2" className={styles.reviewSection}>
                    <h2>II. Understanding the Aeroplan Program for US Travelers</h2>
                    <p>Aeroplan has evolved far beyond a Canada-centric program into a global rewards powerhouse relevant to US travelers. Its Star Alliance membership unlocks award flights on over 45 airlines (like United, Lufthansa, Singapore Airlines) to 1,300+ destinations. Unique non-alliance partners like Emirates further expand this reach.</p>
                    <p>Key features that appeal to US travelers include:</p>
                    <ul className={styles.featureList}>
                        <li><strong>Aeroplan Family Sharing:</strong> Pool points with up to 8 members for free, accelerating award goals.</li>
                        <li><strong>Generous Stopover Policy:</strong> Add an international stopover for just 5,000 points, visiting two cities for nearly the price of one.</li>
                        <li><strong>No Carrier-Imposed Surcharges (Mostly):</strong> Huge savings on award tickets on Air Canada and most partners.</li>
                    </ul>
                    <p>These elements offer significant advantages over many US-based programs.</p>
                </section>
                
                <section id="cta-aeroplan-card" className={styles.ctaSection}>
                  <h2>Interested in the <b>{reviewDataNew.cardName}</b>?</h2>
                  <div className={styles.ctaButtons}>
                    <a href={reviewDataNew.applyLink} className={`${styles.btn} ${styles.btnApply}`} title="From card issuer's secure site" target="_blank" rel="noopener noreferrer sponsored">Apply Now</a>
                    <a href={reviewDataNew.ratesLink} className={`${styles.btn} ${styles.btnRates}`} target="_blank" rel="noopener noreferrer sponsored">See Rates & Fees</a>
                  </div>
                </section>

                <section id="section-3" className={styles.reviewSection}>
                    <h2>III. Core Features: Earning Power and Travel Benefits</h2>
                    <p>The Chase Aeroplan Card combines strong earning on US-centric categories with valuable travel perks.</p>
                    <h3>Earning Structure:</h3>
                    <ul className={styles.featureList}>
                        <li><strong>3X Points:</strong> Air Canada, groceries, dining (including takeout/delivery).</li>
                        <li><strong>1X Point:</strong> All other purchases.</li>
                        <li><strong>Monthly Spending Bonus:</strong> 500 bonus points per $2,000 spent monthly (up to 1,500 bonus points), effectively boosting 3X to 3.25X.</li>
                    </ul>
                    <h3>Core Travel Benefits:</h3>
                    <ul className={styles.featureList}>
                        <li><strong>Automatic Aeroplan 25K Elite Status:</strong> For your first year and the subsequent calendar year.</li>
                        <li><strong>First Checked Bag Free:</strong> On Air Canada for you and up to 8 companions.</li>
                        <li><strong>Global Entry, TSA PreCheck, or NEXUS Fee Credit:</strong> Up to $120 every four years.</li>
                        <li><strong>No Foreign Transaction Fees.</strong></li>
                        <li><strong>Preferred Pricing on Flight Rewards:</strong> Potential for lower point costs on Air Canada awards.</li>
                        <li><strong>Pay Yourself Back:</strong> Redeem points for statement credits against travel, annual fee, and sometimes other categories.</li>
                        <li><strong>10% Bonus on Chase Ultimate Rewards Transfers:</strong> For single transfers of 50,000+ UR points (up to 25k bonus Aeroplan pts/yr).</li>
                    </ul>
                    <p>These features reward both travel and significant everyday US spending.</p>
                </section>

                <section id="section-4" className={styles.reviewSection}>
                    <h2>IV. Deep Dive: Travel Perks & Protections</h2>
                    <p>Beyond the headlines, this card offers valuable protections:</p>
                    <h3>Travel Benefits (Detailed):</h3>
                     <p>The free checked bag on Air Canada (up to 23kg/50lbs each) can save a family hundreds. The NEXUS credit is especially useful for US-Canada travel as NEXUS includes Global Entry/TSA PreCheck benefits.</p>
                    <h3>Purchase Protections & Insurance:</h3>
                    <ul className={styles.featureList}>
                        <li><strong>Trip Cancellation/Interruption:</strong> Up to $1,500 per person, $6,000 per trip.</li>
                        <li><strong>Baggage Delay:</strong> Up to $100/day for 3 days (delays over 6 hours).</li>
                        <li><strong>Trip Delay:</strong> Up to $500 per ticket (delays over 12 hours/overnight).</li>
                        <li><strong>Auto Rental CDW:</strong> Secondary in the U.S., potentially primary internationally.</li>
                        <li><strong>Purchase Protection:</strong> Covers new purchases against damage/theft for 120 days ($500/claim).</li>
                        <li><strong>Extended Warranty Protection.</strong></li>
                    </ul>
                    <p>These benefits reduce travel risks and enhance purchase security, adding considerable peace of mind for US travelers.</p>
                </section>

                <section id="section-5" className={styles.reviewSection}>
                    <h2>V. Rates, Fees, and Overall Costs</h2>
                    <p>Knowing the costs is vital for maximizing value.</p>
                    <DraggableTableWrapper>
                        <div className={styles.tableContainer}>
                            <table className={`${styles.statsTable} ${styles.ratesFeesTable}`}>
                                <thead>
                                    <tr><th>Fee Type</th><th>Amount/Rate</th><th>Notes</th></tr>
                                </thead>
                                <tbody>
                                    <tr><td data-label="Fee Type">Annual Fee</td><td data-label="Amount/Rate">$95</td><td data-label="Notes">Standard for its category.</td></tr>
                                    <tr><td data-label="Fee Type">Purchase APR</td><td data-label="Amount/Rate">{reviewDataNew.aprRange}</td><td data-label="Notes">Pay in full to avoid.</td></tr>
                                    <tr><td data-label="Fee Type">Foreign Transaction</td><td data-label="Amount/Rate">$0 (None)</td><td data-label="Notes">Essential for international travel.</td></tr>
                                    <tr><td data-label="Fee Type">Late/Returned Payment</td><td data-label="Amount/Rate">Up to $40</td><td data-label="Notes">Can trigger penalty APR.</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </DraggableTableWrapper>
                    <p>The $95 annual fee is easily offset by benefits like free checked bags or using Pay Yourself Back for the fee. No foreign transaction fees is a key saving for travel. Avoid interest by paying balances in full.</p>
                </section>
                
                {/* Placeholder for another relevant image. UPDATE src, alt, width, height as needed. */}
                <Image
                    src="/eva-darron-oCdVtGFeDC0-unsplash (1).jpg" // UPDATE PATH
                    alt="People enjoying a travel experience enabled by rewards" // UPDATE ALT TEXT
                    width={800} // UPDATE with actual image width
                    height={533} // UPDATE with actual image height
                    className={styles.contentImage}
                />

                <section id="section-6" className={styles.reviewSection}>
                    <h2>VI. Welcome Bonus and Ongoing Value</h2>
                    <p>The welcome bonus offers a significant head start.</p>
                    <ul className={styles.featureList}>
                        <li><strong>Current Welcome Offer:</strong> Typically up to 70,000 bonus points, with a large portion after initial spend (e.g., 60,000 after $3,000 in 3 months) and the rest after the first annual renewal.</li>
                        <li><strong>Valuation:</strong> 70,000 points can be worth $875 via Pay Yourself Back (travel @ 1.25 cpp) or potentially $980-$1,050+ towards flights.</li>
                        <li><strong>Chase 5/24 Rule:</strong> Likely applies, so check your eligibility.</li>
                        <li><strong>Ongoing Promotions:</strong> The 10% bonus on single Chase Ultimate Rewards transfers of 50,000+ points to Aeroplan (up to 25k bonus Aeroplan pts/yr) is a standout ongoing perk.</li>
                    </ul>
                    <p>The bonus structure encourages retention, while strategic UR transfers can significantly boost point value.</p>
                </section>

                <section id="section-7" className={styles.reviewSection}>
                    <h2>VII. Earning Aeroplan Points: A US Cardholder's Guide</h2>
                    <p>US cardholders can earn efficiently:</p>
                    <ul className={styles.featureList}>
                        <li><strong>Credit Card Spending:</strong> Maximize 3X on groceries, dining, and Air Canada. Aim for the monthly $2,000 spend thresholds for 500 bonus points.</li>
                        <li><strong>Flying:</strong> Earn on Air Canada and Star Alliance partner flights.</li>
                        <li><strong>Transferring from Other Programs:</strong> Aeroplan is a partner of Chase Ultimate Rewards (10% cardholder bonus on 50k+ transfers), Amex Membership Rewards, Capital One Miles, and Bilt Rewards. This is a powerful way for US members to accumulate points.</li>
                        <li><strong>Aeroplan eStore:</strong> Earn points shopping online.</li>
                    </ul>
                    <p>Strategic credit card spending and point transfers are often the most effective earning paths for US cardholders.</p>
                </section>

                <section id="section-8" className={styles.reviewSection}>
                    <h2>VIII. Redeeming Aeroplan Points: Maximizing Your Rewards</h2>
                    <p>Aeroplan offers diverse redemptions, with flights providing top value.</p>
                    <h3>Flight Rewards:</h3>
                    <ul className={styles.featureList}>
                        <li><strong>Air Canada Flights:</strong> "Every seat, every flight" available (dynamically priced), no carrier surcharges, just taxes/fees.</li>
                        <li><strong>Partner Airlines:</strong> Access 45+ partners (Star Alliance included). Mostly distance-based charts, though dynamic pricing is expanding. Most have no carrier surcharges.</li>
                        <li><strong>Cardholder Preferred Pricing:</strong> Potential for better point rates on AC.</li>
                        <li><strong>Stopovers:</strong> Add an international stopover for only 5,000 points – a fantastic value.</li>
                    </ul>
                    <h3>Other Redemptions:</h3>
                    <ul className={styles.featureList}>
                        <li><strong>Upgrades (eUpgrades):</strong> For Aeroplan Elite members on Air Canada.</li>
                        <li><strong>Pay Yourself Back:</strong> Redeem points for statement credits against travel (1.25 cpp), annual fee (1.25 cpp), and sometimes dining/groceries (0.8 cpp). This offers US cardholders excellent flexibility.</li>
                        <li><strong>Other:</strong> Hotels, car rentals, gift cards generally offer lower value.</li>
                        <li><strong>Family Sharing:</strong> Pool points with up to 8 family members for free.</li>
                    </ul>
                    <p>Prioritize flight redemptions (especially with stopovers) or Pay Yourself Back for travel to maximize value.</p>
                </section>

                <section id="section-9" className={styles.reviewSection}>
                    <h2>IX. The True Value of an Aeroplan Point for US Travelers</h2>
                    <p>Aeroplan point value varies by use.</p>
                     <ul className={styles.featureList}>
                        <li><strong>Independent Valuations:</strong> Experts often peg Aeroplan points around 1.4-1.5 cents per point (cpp) for good flight redemptions. Sweet spots can yield much more (3-5+ cpp).</li>
                        <li><strong>Card-Specific Value:</strong> Pay Yourself Back offers a fixed 1.25 cpp for travel and the annual fee – a solid baseline for US users.</li>
                        <li><strong>Lower Tier:</strong> Merchandise or gift cards yield &lt;1 cpp.</li>
                    </ul>
                    <p>Aim for flight redemptions exceeding 1.4 cpp, or use PYB for travel at 1.25 cpp. This card gives US travelers clear pathways to good value.</p>
                </section>

                <section id="section-10" className={styles.reviewSection}>
                    <h2>X. Aeroplan Sweet Spots from the US</h2>
                     <p>Aeroplan "sweet spots" offer high value, often on partner airlines from the US:</p>
                     <ul className={styles.featureList}>
                        <li><strong>US to Europe (Business):</strong> ~60,000-70,000 points one-way on partners (e.g., Lufthansa, SWISS).</li>
                        <li><strong>US to Asia (Business/First):</strong> ~75,000+ points one-way to North Asia (e.g., ANA, EVA Air), or ~87,500+ to Southeast Asia.</li>
                        <li><strong>Intra-North America (Economy):</strong> Short-hauls from 6,000 points; West Coast to Hawaii on United for ~12,500 points one-way.</li>
                        <li><strong>Leveraging Stopovers:</strong> Add an international stopover for just 5,000 points to enhance any long-haul award.</li>
                    </ul>
                    <p>Finding these requires flexibility but offers incredible returns for US-based explorers.</p>
                </section>

                <section id="section-11" className={styles.reviewSection}>
                    <h2>XI. Aeroplan Elite Status with the Chase Card</h2>
                    <p>The card gives a strong start to Aeroplan Elite Status.</p>
                     <ul className={styles.featureList}>
                        <li><strong>Automatic Aeroplan 25K Status:</strong> For new cardholders (year of opening + next full year). This grants Star Alliance Silver.</li>
                        <li><strong>Maintain 25K via Card Spend:</strong> $15,000 spend in a calendar year.</li>
                        <li><strong>Status Boost:</strong> One-level boost with $50,000 annual spend (e.g., 25K to 35K).</li>
                        <li><strong>Aeroplan 25K Benefits (on Air Canada):</strong> Includes 2 free checked bags (combining card/status perks), priority check-in/boarding (Zone 3), eUpgrade credits, and a chance to select Maple Leaf Lounge passes. Star Alliance Silver offers modest priority benefits on partners like United.</li>
                    </ul>
                    <p>For US travelers, 25K is most useful when flying Air Canada. The $50k spend boost is strategic if targeting a higher, more globally beneficial tier like 50K (Star Gold).</p>
                </section>

                <section id="section-12" className={styles.reviewSection}>
                    <h2>XII. The Pay Yourself Back Feature Explained</h2>
                    <p>Pay Yourself Back (PYB) is a key benefit for US cardholders, offering superb flexibility.</p>
                     <ul className={styles.featureList}>
                        <li><strong>How it Works:</strong> Charge eligible expenses, then redeem Aeroplan points within 90 days for a statement credit.</li>
                        <li><strong>Eligible Categories & Rates:</strong>
                            <ul className={styles.nestedList}>
                                <li>Travel Purchases (any airline, hotel, etc.): 1.25 cents per point. (Annual redemption limit: 200,000 points / $2,500 credit).</li>
                                <li>Card Annual Fee: 1.25 cents per point (7,600 points for $95).</li>
                                <li>Dining/Groceries (occasionally): 0.8 cents per point.</li>
                            </ul>
                        </li>
                        <li><strong>Source of Points:</strong> Includes points from card spend and Chase Ultimate Rewards transfers.</li>
                        <li><strong>Stacking Value:</strong> Combine the card's 10% UR transfer bonus with PYB for travel to get effective UR point values of ~1.375 cpp or higher.</li>
                    </ul>
                    <p>PYB at 1.25 cpp for travel makes Aeroplan points a highly flexible and valuable travel currency for US users.</p>
                </section>

                <section id="section-13" className={styles.reviewSection}>
                    <h2>XIII. Real-World Redemption Example for US Spenders</h2>
                    <p>Let's simplify: A US-based cardholder, "Alex," focuses spending on the card's 3X grocery/dining categories and meets the welcome bonus. Within a year, including leveraging the monthly spend bonuses, Alex could easily accumulate over 100,000 Aeroplan points.</p>
                     <ul className={styles.featureList}>
                        <li><strong>Redemption Goal:</strong> A round-trip business class flight from the US to Europe during a less busy period, potentially using a partner airline.</li>
                        <li><strong>Point Cost:</strong> Could find options for around 120,000-140,000 points round-trip if flexible. Alex might be close or could top off with a Chase UR transfer.</li>
                        <li><strong>Value:</strong> If a similar cash ticket costs $4,000, and Alex pays $200 in fees, the ~130,000 points used would yield over 3 cents per point – excellent value from everyday US spending. Alternatively, 100,000 points provide $1,250 in travel credits via Pay Yourself Back.</li>
                    </ul>
                    <p>This demonstrates achievable high value for US travelers.</p>
                </section>

                <section id="section-14" className={styles.reviewSection}>
                    <h2>XIV. Aeroplan Card vs. US Competitors</h2>
                    <p>How does the Chase Aeroplan Card stack up for US travelers?</p>
                    <DraggableTableWrapper>
                        <div className={styles.tableContainer}>
                            <table className={`${styles.statsTable} ${styles.ratesFeesTable}`}>
                                <thead>
                                    <tr>
                                        <th>Feature</th>
                                        <th>Chase Aeroplan Card</th>
                                        <th>Chase Sapphire Preferred</th>
                                        <th>Amex Gold Card</th>
                                        <th>Capital One Venture Rewards</th>
                                        <th>United Explorer Card</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr><td data-label="Feature">Annual Fee</td><td data-label="Chase Aeroplan Card">$95</td><td data-label="Chase Sapphire Preferred">$95</td><td data-label="Amex Gold Card">$250</td><td data-label="Capital One Venture Rewards">$95</td><td data-label="United Explorer Card">$95 (after intro)</td></tr>
                                    <tr><td data-label="Feature">Primary Rewards</td><td data-label="Chase Aeroplan Card">3X Aeroplan pts (AC, grocery, dining)</td><td data-label="Chase Sapphire Preferred">2X-5X UR pts (travel, dining, online grocery)</td><td data-label="Amex Gold Card">4X MR pts (dining, US supermarket)</td><td data-label="Capital One Venture Rewards">2X miles (all)</td><td data-label="United Explorer Card">2X United miles (United, dining, hotels)</td></tr>
                                    <tr><td data-label="Feature">Key Airline Perk</td><td data-label="Chase Aeroplan Card">Aeroplan 25K Status (initial), AC bags</td><td data-label="Chase Sapphire Preferred">$50 Hotel Credit</td><td data-label="Amex Gold Card">Airline Fee Credit (select)</td><td data-label="Capital One Venture Rewards">Travel eraser</td><td data-label="United Explorer Card">United bags, Club passes</td></tr>
                                    <tr><td data-label="Feature">Point Flexibility</td><td data-label="Chase Aeroplan Card">Aeroplan (Star Alliance), PYB</td><td data-label="Chase Sapphire Preferred">Chase UR (many partners)</td><td data-label="Amex Gold Card">Amex MR (many partners)</td><td data-label="Capital One Venture Rewards">Capital One Miles (partners)</td><td data-label="United Explorer Card">United MileagePlus</td></tr>
                                    <tr><td data-label="Feature">Foreign Transaction Fee</td><td data-label="Chase Aeroplan Card">$0</td><td data-label="Chase Sapphire Preferred">$0</td><td data-label="Amex Gold Card">$0</td><td data-label="Capital One Venture Rewards">$0</td><td data-label="United Explorer Card">$0</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </DraggableTableWrapper>
                    <p><strong>Aeroplan's Niche:</strong> It combines initial elite status, strong 3X everyday earning for valuable Aeroplan points, unique PYB flexibility, and a sub-$100 fee, making it a strong contender for US-based Star Alliance explorers and points optimizers.</p>
                </section>

                <section id="section-15" className={styles.reviewSection}>
                    <h2>XV. Who Should Get This Card in the US?</h2>
                    <p>This card shines for specific US travelers:</p>
                     <ul className={styles.featureList}>
                        <li><strong>The Savvy Star Alliance Explorer:</strong> US-based, travels internationally on Star Alliance, seeks premium cabin sweet spots, maximizes 3X categories and monthly bonuses. Fit: Excellent.</li>
                        <li><strong>The Practical Points Optimizer:</strong> Mix of travel, values flexible rewards (especially PYB @ 1.25cpp for travel), focuses on 3X grocery/dining. Fit: Good to Excellent.</li>
                        <li><strong>The Chase UR Collector:</strong> Uses the Aeroplan card to enhance UR point value via the 10% transfer bonus and PYB. Fit: Good (as companion card).</li>
                        <li><strong>"Could Be Okay" User:</strong> Infrequent traveler, prefers simple cash back, modest spender. Other cards might be better.</li>
                    </ul>
                    <p>It's less compelling for those strictly loyal to other alliances or who won't engage with program features.</p>
                </section>

                <section id="section-16" className={styles.reviewSection}>
                    <h2>XVI. Cardholder Experiences: Pros & Cons</h2>
                    <p>Cardholders offer practical insights:</p>
                     <ul className={styles.featureList}>
                        <li><strong>Positive:</strong> Love Pay Yourself Back (PYB) for flexibility/value (1.25 cpp travel); strong 3X grocery/dining earn; free checked bags on AC; helpful for UR point maximization.</li>
                        <li><strong>Mixed/Negative:</strong> Utility of 25K status (Star Silver) seen as marginal on partners; partner award availability can be tough; eUpgrade success variable.</li>
                    </ul>
                    <p>Satisfied users often leverage PYB, fly Air Canada, or are savvy points hobbyists. Partner award availability is a key pain point.</p>
                </section>

                <section id="section-17" className={styles.reviewSection}>
                    <h2>XVII. Potential Drawbacks to Consider</h2>
                    <p>Be aware of these for a balanced view:</p>
                     <ul className={styles.featureList}>
                        <li><strong>$95 Annual Fee:</strong> Needs to be offset by benefits.</li>
                        <li><strong>Program Complexity:</strong> Aeroplan has a learning curve.</li>
                        <li><strong>Partner Award Availability:</strong> Can be challenging.</li>
                        <li><strong>Marginal 25K Status Value (if not flying AC):</strong> Star Silver benefits are limited.</li>
                        <li><strong>Chase 5/24 Rule:</strong> Likely applies.</li>
                        <li><strong>Low Value Non-Flight Redemptions:</strong> Avoid merchandise/gift cards.</li>
                    </ul>
                    <p>These don't negate the card's value but highlight areas where it might not be optimal.</p>
                </section>
                
                <section id="section-faq" className={`${styles.reviewSection} ${styles.faqSection}`}>
                    <h2>XVIII. {reviewDataNew.cardName}: Top 5 FAQs (Card Specific)</h2>
                    <div className={styles.faqContainer}>
                        {structuredDataOptimized['@graph'].find(item => item['@type'] === 'FAQPage').mainEntity.map((faq, index) => (
                            <details key={index} className={styles.faqItem}>
                                <summary className={styles.faqQuestion}>{`${index + 1}. ${faq.name}`}</summary>
                                <div className={styles.faqAnswer}><p>{faq.acceptedAnswer.text}</p></div>
                            </details>
                        ))}
                    </div>
                </section>

                <section id="section-verdict" className={styles.reviewSection}>
                    <h2>XIX. Conclusion: Is the Aeroplan Card a Good Co-Pilot for US Travelers?</h2>
                    <p>For US travelers, the Chase Aeroplan Card is a surprisingly robust offering. Its strength lies in strong 3X earning on groceries/dining, flexible Pay Yourself Back at 1.25 cpp for travel, initial Aeroplan 25K status, and a 10% bonus on Chase Ultimate Rewards transfers. The NEXUS credit is a distinct plus for US-Canada travel.</p>
                    <p>While maximizing award flights requires some savvy, the card provides clear value paths. It's best for:</p>
                    <ul className={styles.featureList}>
                        <li>US-based Star Alliance enthusiasts.</li>
                        <li>Strategic points collectors, especially with Chase Ultimate Rewards.</li>
                        <li>Those with high grocery/dining spend.</li>
                        <li>Frequent US-Canada travelers.</li>
                    </ul>
                    <p>For others, simpler cards might be better. But for the right US traveler, the Chase Aeroplan Card, with its reasonable $95 annual fee, is a powerful tool for more rewarding journeys and a worthy contender for a spot in your wallet.</p>
                </section>


                <section id="eat-expertise-authority-trustworthiness" className={`${styles.reviewSection} ${styles.eatSection}`}>
                    <h2 dangerouslySetInnerHTML={{ __html: `Our Commitment to E-A-T: Expertise, Authority &amp; Trustworthiness`}}></h2>
                    <p>At <strong>{siteName}</strong>, we ensure our content meets the highest standards. This review of the <strong>{reviewDataNew.cardName}</strong> is based on thorough research of the card's features, terms, and conditions as of {new Date(updateDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}, as well as comparisons to other cards in the market, to provide you with a reliable and comprehensive guide.</p>
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

export default ChaseAeroplanReviewPage;