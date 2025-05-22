/* ------------------------------------------------------------------
    File:  pages/reviews/american-airlines-aadvantage-mileup.js
    Route: https://www.yourwebsite.com/reviews/american-airlines-aadvantage-mileup
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
import IconX from '../../components/icons/icon-Star + Arrow Up.svg'; // UPDATE AS NEEDED (path to your icon, or choose another appropriate one)
import IconPlus from '../../components/icons/icon-target.svg'; // UPDATE AS NEEDED (path to your icon, represents 'Best For' or 'Key Benefit')

const RatingTooltip = dynamic(() => import('../../components/RatingTooltip'), { ssr: false, loading: () => null });

/* ──────────────────────────────
    CONSTANTS & STATIC DATA
    ────────────────────────────── */
const siteName    = 'YourCreditCardSite'; // UPDATE AS NEEDED
const siteUrl     = 'https://www.yourcreditcardsite.com'; // UPDATE AS NEEDED: Replace with your actual site URL
const pagePath    = '/reviews/american-airlines-aadvantage-mileup';
const pageUrlFull = `${siteUrl}${pagePath}`;
const publishDate = '2025-05-22'; // UPDATE AS NEEDED: Current date or actual publish date
const updateDate  = '2025-05-22'; // UPDATE AS NEEDED: Current date or actual update date

const reviewDataNew = {
  cardName        : 'American Airlines AAdvantage® MileUp® Card',
  title           : 'American Airlines AAdvantage® MileUp® Card Review (2025): No-Fee AA Miles & Loyalty Points',
  description     : 'In-depth 2025 review of the $0 annual fee American Airlines AAdvantage® MileUp® Card: 15,000 bonus miles, 2x on AA & groceries, Loyalty Points, and 25% in-flight savings for U.S. travelers.',
  keywords        : 'AAdvantage MileUp review, no annual fee airline card, American Airlines credit card, earn AA miles, MileUp card, Citi AAdvantage MileUp, grocery rewards credit card, Loyalty Points, Citibank',
  author: { // Placeholder: UPDATE ALL AUTHOR DETAILS AS NEEDED
      name: 'Dilan Madushanka',
      title: 'Founder & Lead Editor',
      imageUrl: '/images/authors/dilan-madushanka-placeholder.jpg', // Placeholder - UPDATE
      imageWidth: 40,
      imageHeight: 40,
      tooltipImageUrl: '/images/authors/dilan-madushanka-tooltip-placeholder.jpg', // Placeholder - UPDATE
      tooltipImageWidth: 60,
      tooltipImageHeight: 60,
      expertise: [
          'Airline Credit Cards',
          'Rewards Programs',
          'No-Annual-Fee Cards',
          'Loyalty Points Strategy',
          'Credit Card Analysis'
      ],
      bioSnippet: 'Dilan Madushanka is the founder and lead editor of YourCreditCardSite.com, dedicated to demystifying credit cards and uncovering their real-world value for smarter travel.',
      fullBioLink: '/author/dilan-madushanka', // Placeholder - UPDATE
      fullBio: `Dilan Madushanka is the founder and lead editor of YourCreditCardSite.com, a platform dedicated to helping everyday people make smarter decisions with travel and rewards credit cards. [MORE BIO DETAILS TO BE ADDED BY USER]`,
      publishedStats: 'X+ in-depth card reviews per week', // Placeholder - UPDATE
      testedStats: 'Over Y+ credit card benefits across major brands', // Placeholder - UPDATE
      socialLinks: { // Placeholder - UPDATE
          linkedin: 'https://www.linkedin.com/in/yourprofile',
          twitter: 'https://x.com/yourhandle',
          email: 'contact@yourcreditcardsite.com'
      }
  },
  siteName: siteName,
  imageUrl        : '/CardArt-7.webp', // Placeholder: Replace with actual card image URL
  imageWidth      : 1290, // Placeholder - UPDATE if image dimensions differ
  imageHeight     : 812,  // Placeholder - UPDATE if image dimensions differ
  ratingValue     : 6.1,  // Placeholder - UPDATE AS NEEDED (e.g. 3.9/5 * 2)
  ratingCount     : 185,  // Placeholder - UPDATE AS NEEDED
  reviewBody      : 'Our editors evaluate the American Airlines AAdvantage® MileUp® Card based on its rewards structure (especially on groceries and AA purchases), welcome offer, lack of annual fee, Loyalty Point earning capability, in-flight benefits, and overall value for U.S.-based American Airlines flyers.',
  aprRange        : '20.24% – 29.24% variable',
  annualFee       : 0,
  applyLink       : 'https://creditcards.aa.com/credit-cards/citi-mileup-card-american-airlines-direct/', // Placeholder - UPDATE with actual, trackable affiliate link if applicable
  ratesLink       : 'https://creditcards.aa.com/credit-cards/citi-mileup-card-american-airlines-direct/', // Placeholder - UPDATE with official rates and fees link
  sku             : 'CITI-AA-MILEUP-YCCS-2025', // Placeholder - Example SKU
  mpn             : 'CITIAAMILEUP', // Placeholder - Example MPN
  h1Content       : "American Airlines AAdvantage® MileUp® Card: A Fee-Free Flight Path for U.S. Travelers?",
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
      brand          : { '@type': 'Brand', name: 'American Airlines' }, // Or 'AAdvantage'
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
            description          : `Purchase APR: ${reviewDataNew.aprRange}. Foreign Transaction Fee: 3%.`,
          },
        ],
        seller: { '@type': 'Organization', name: 'Citibank' },
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
          name: 'What is the annual fee for the AAdvantage® MileUp® Card?',
          acceptedAnswer: { '@type': 'Answer', text: "The AAdvantage® MileUp® Card has a $0 annual fee." }
        },
        {
          '@type': 'Question',
          name: 'What is the current welcome bonus and how do I earn it?',
          acceptedAnswer: { '@type': 'Answer', text: "New cardmembers can typically earn 15,000 AAdvantage® bonus miles after spending $500 on purchases within the first 3 months of account opening. (Offer subject to change and Citi's terms)." }
        },
        {
          '@type': 'Question',
          name: 'How many AAdvantage® miles do I earn on purchases?',
          acceptedAnswer: { '@type': 'Answer', text: "You earn 2 AAdvantage® miles per $1 spent on eligible American Airlines purchases, 2 AAdvantage® miles per $1 spent at grocery stores (including grocery delivery services), and 1 AAdvantage® mile per $1 spent on all other purchases." }
        },
        {
          '@type': 'Question',
          name: 'Do my AAdvantage® miles expire with this card?',
          acceptedAnswer: { '@type': 'Answer', text: "For primary AAdvantage® credit cardholders, AAdvantage® miles do not expire as long as their card account remains open and in good standing." }
        },
        {
          '@type': 'Question',
          name: 'Can I earn AAdvantage® Loyalty Points and elite status with the MileUp® Card?',
          acceptedAnswer: { '@type': 'Answer', text: "Yes, you earn 1 Loyalty Point for every 1 eligible AAdvantage® base mile earned from purchases made with the card. These Loyalty Points count towards AAdvantage® elite status and Loyalty Point Rewards." }
        },
        {
          '@type': 'Question',
          name: 'What types of stores count as "grocery stores" for the 2x miles, and are there exclusions like Walmart or Target?',
          acceptedAnswer: { '@type': 'Answer', text: "Grocery stores generally include supermarkets, freezer/meat locker provisioners, dairy product stores, miscellaneous food/convenience stores, markets, specialty vendors, and bakeries; this also includes grocery delivery services. Purchases at general merchandise/discount superstores (like Walmart, Target) and wholesale/warehouse clubs (like Costco, Sam's Club) typically do not qualify for the 2x grocery miles." }
        },
        {
          '@type': 'Question',
          name: 'Does the AAdvantage® MileUp® Card have foreign transaction fees?',
          acceptedAnswer: { '@type': 'Answer', text: "Yes, the AAdvantage® MileUp® Card charges a foreign transaction fee, which is typically 3% of the U.S. dollar amount of each purchase made outside the United States." }
        },
        {
          '@type': 'Question',
          name: 'Does the MileUp® Card offer a free checked bag benefit on American Airlines?',
          acceptedAnswer: { '@type': 'Answer', text: "No, the AAdvantage® MileUp® Card does not include a free checked bag benefit." }
        },
        {
          '@type': 'Question',
          name: 'What are AAdvantage® miles generally worth, and what are the best ways to redeem them?',
          acceptedAnswer: { '@type': 'Answer', text: "The value of AAdvantage® miles varies, but a common valuation is around 1.0 to 1.8 cents per mile (e.g., The Points Guy estimates ~1.65 cents) when redeemed strategically. Flights, particularly on American Airlines and its partner airlines, generally offer the best redemption value. Domestic short-haul flights (starting as low as 7,500 miles one-way with MileSAAver awards) and some international economy awards can be good value." }
        },
        {
          '@type': 'Question',
          name: 'What credit score is typically needed to qualify for the AAdvantage® MileUp® Card?',
          acceptedAnswer: { '@type': 'Answer', text: "The AAdvantage® MileUp® Card is generally recommended for applicants with good to excellent credit, often corresponding to a FICO score of 670-690 or higher, though other factors are considered." }
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
    'Welcome Offer Accessibility & Value',
    'Grocery Rewards Rate (2X)',
    'American Airlines Purchase Rewards (2X)',
    'Base Rewards Rate (1X)',
    'Annual Fee ($0)',
    'AAdvantage® Loyalty Point Earning',
    'In-Flight Purchase Discount (25%)',
    'Foreign Transaction Fee (Impact)',
    'Redemption Options & Mile Value',
    'Cardholder Protections & Benefits'
];

const tocSections = [
    { id: 'section-intro', title: 'Introduction' },
    { id: 'section-1', title: 'I. The MileUp® Card at a Glance' },
    { id: 'section-2', title: 'II. Unpacking the Value: Rewards and Everyday Benefits' },
    { id: 'section-3', title: 'III. Beyond Miles: The AAdvantage® Program and Loyalty Points' },
    { id: 'section-4', title: 'IV. The Financial Blueprint: Rates, Fees, and Fine Print' },
    { id: 'section-5', title: 'V. Who Should Get This Card? Ideal User Profiles and Real-World Impact' },
    { id: 'section-6', title: 'VI. The Competitive Arena: MileUp® vs. Other No-Fee Options' },
    { id: 'section-7', title: 'VII. Key Considerations and Potential Drawbacks' },
    { id: 'section-verdict', title: 'IX. The Verdict: Is the MileUp® Card a Sound Choice for U.S. Travelers in 2025?' },
    { id: 'section-faq', title: 'VIII. Top 10 FAQs (Card Specific)' } // Based on your content structure
  ];

// DraggableTableWrapper Component (copied from your example, ensure it's correctly imported or defined)
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
      // e.preventDefault(); // Removed to allow text selection if needed, re-add if drag is jumpy
    };
    const stopDrag = () => { isDragging = false; el.classList.remove(styles.grabbing); };
    const onMove = (e) => {
      if (!isDragging) return; e.preventDefault(); // Prevent default only during move
      const x = e.pageX || e.touches?.[0]?.pageX;
      el.scrollLeft = scrollStart - (x - startX);
    };
    el.addEventListener('mousedown', startDrag);
    document.addEventListener('mouseup', stopDrag);
    document.addEventListener('mouseleave', stopDrag); // Stop drag if mouse leaves document
    el.addEventListener('mousemove', onMove);
    el.addEventListener('touchstart', startDrag, { passive: true }); // passive: true might be better for touch
    document.addEventListener('touchend', stopDrag);
    el.addEventListener('touchmove', onMove, { passive: false }); // passive: false if you need preventDefault
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
function AmericanAirlinesAadvantageMileupReviewPage() {
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
              !event.target.closest(`.${styles.infoIconButton}`) && // Check if click is on the icon button itself
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
          if (authorRef.current?.tooltipTimeoutId) { // Clear timeout on unmount
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
        <link rel="preload" as="image" href={reviewDataNew.imageUrl} />
        {/* UPDATE AS NEEDED: Preload actual author images */}
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
                    onFocus={handleAuthorMouseEnter} // Added for keyboard accessibility
                    onBlur={handleAuthorMouseLeave}  // Added for keyboard accessibility
                    aria-haspopup="true"
                    aria-expanded={showAuthorBioTooltip}
                    tabIndex={0} // Make it focusable
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
                    {showAuthorBioTooltip && reviewDataNew.author.bioSnippet && ( // Conditionally render tooltip
                        <div
                            className={styles.authorTooltip}
                            ref={authorTooltipRef}
                            role="tooltip"
                            onMouseEnter={handleAuthorClearTimeout} // Keep tooltip open if mouse enters it
                            onMouseLeave={handleAuthorMouseLeave}
                            onFocus={handleAuthorMouseEnter} // Keep tooltip open if focus enters it
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
                               {reviewDataNew.author.socialLinks && ( // UPDATE AS NEEDED: Add actual social links for author
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
                  An in-depth look at American Airlines' no-annual-fee card, examining its rewards, benefits, costs, and who truly stands to gain from adding it to their wallet in 2025.
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
                      on Citibank's official site {/* UPDATE AS NEEDED if issuer is different or for clarity */}
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
                        ratingCriteria={ratingCriteriaOriginal} // Ensure this is defined for MileUp card
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
                                <span className={styles.summaryValue}>15,000 AAdvantage® bonus miles (after $500 spend in 3 months).</span>
                            </div>
                            <div className={styles.summaryItem}>
                                <span className={styles.summaryIcon}><IconCheck /></span>
                                <span className={styles.summaryLabel}>Annual Fee:</span>
                                <span className={styles.summaryValue}>$0.</span>
                            </div>
                            <div className={styles.summaryItem}>
                                <span className={styles.summaryIcon}><IconStar /></span>
                                <span className={styles.summaryLabel}>Top Earning:</span>
                                <span className={styles.summaryValue}>2X miles on AA & groceries; 1X elsewhere.</span>
                            </div>
                            <div className={styles.summaryItem}>
                                <span className={styles.summaryIcon}><IconPlus /></span> {/* IconPlus or specific benefit icon */}
                                <span className={styles.summaryLabel}>Key Benefit:</span>
                                <span className={styles.summaryValue}>Earn Loyalty Points; 25% off in-flight food/bev.</span>
                            </div>
                            <div className={styles.summaryItem} data-full-width="true">
                                <span className={styles.summaryIcon}><IconPlus /></span> {/* IconPlus or icon-target */}
                                <span className={styles.summaryLabel}>Best For:</span>
                                <span className={styles.summaryValue}>Budget-savvy occasional AA U.S. travelers aiming to earn miles & Loyalty Points on everyday spending, especially groceries.</span>
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
                  <h2>Introduction</h2>
                  <p>In the bustling world of travel rewards, the allure of earning miles for future journeys without an upfront cost is a compelling proposition. The {reviewDataNew.cardName}, issued by Citibank, steps into this arena offering a no-annual-fee gateway to the expansive AAdvantage® program. But does this card truly offer a clear runway to rewards for the discerning U.S. traveler, or are there better options on the tarmac? This comprehensive analysis delves into the MileUp® card's features, its earning potential, the nuances of the AAdvantage® program, and the bottom-line costs to help you decide if it’s the right co-pilot for your financial strategy.</p>
                </section>

                <section id="section-1" className={styles.reviewSection}>
                  <h2>I. The MileUp® Card at a Glance: What's on Offer?</h2>
                  <p>The MileUp® card is strategically positioned as the most accessible entry point into the American Airlines AAdvantage® credit card lineup. It’s designed for individuals seeking a cost-effective way to accumulate AAdvantage® miles and the increasingly vital Loyalty Points, which count towards elite status.</p>
                  <p><strong>Core Proposition:</strong> The primary draw is its $0 annual fee, allowing cardholders to dip their toes into the AAdvantage® program without a yearly financial commitment. It aims to cultivate loyalty by offering a straightforward value exchange: earn miles on everyday spending, particularly on groceries and American Airlines purchases, and start your journey towards reward flights.</p>
                  <h3>Key Card Specifications: {reviewDataNew.cardName}</h3>
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
                                <tr><td data-label="Feature">Card Name</td><td data-label="Details">{reviewDataNew.cardName}</td></tr>
                                <tr><td data-label="Feature">Issuer</td><td data-label="Details">Citibank</td></tr>
                                <tr><td data-label="Feature">Network</td><td data-label="Details">Mastercard</td></tr>
                                <tr><td data-label="Feature">Annual Fee</td><td data-label="Details">${reviewDataNew.annualFee}</td></tr>
                                <tr><td data-label="Feature">Welcome Bonus (Current Offer)</td><td data-label="Details">New cardmembers can earn 15,000 AAdvantage® bonus miles after making $500 in purchases within the first 3 months of account opening. (This offer is subject to Citi’s terms, typically for those who haven't received a new account bonus for this card in the past 48 months.)</td></tr>
                                <tr><td data-label="Feature">Rewards Rate</td>
                                    <td data-label="Details">
                                        <ul className={styles.compactList}>
                                            <li>2 AAdvantage® miles per $1 spent on eligible American Airlines purchases.</li>
                                            <li>2 AAdvantage® miles per $1 spent at grocery stores (including grocery delivery services).</li>
                                            <li>1 AAdvantage® mile per $1 spent on all other purchases.</li>
                                        </ul>
                                    </td>
                                </tr>
                                <tr><td data-label="Feature">'Best For' Tagline</td><td data-label="Details">"The AAdvantage® MileUp® Card: Your No-Fee Launchpad for Earning American Airlines Miles and Loyalty Points on Everyday Spending, Especially Groceries."</td></tr>
                            </tbody>
                        </table>
                    </div>
                  </DraggableTableWrapper>
                  <p>The card's structure, particularly the dual 2x earning categories on a no-fee airline card, is notable. While most no-fee airline cards limit bonus earning to direct airline spending, the MileUp® card’s inclusion of groceries broadens its appeal, making it a relevant earning tool even when travel isn't immediately on the horizon.</p>
                </section>

                <section id="cta-mileup-card" className={styles.ctaSection}> {/* Ensure ctaSection styles are defined */}
                  <h2>Interested in the <b>{reviewDataNew.cardName}</b>?</h2>
                  <div className={styles.ctaButtons}>
                    <a href={reviewDataNew.applyLink} className={`${styles.btn} ${styles.btnApply}`} title="From card issuer's secure site" target="_blank" rel="noopener noreferrer sponsored">Apply Now</a>
                    <a href={reviewDataNew.ratesLink} className={`${styles.btn} ${styles.btnRates}`} target="_blank" rel="noopener noreferrer sponsored">See Rates & Fees</a>
                  </div>
                </section>

                <section id="section-2" className={styles.reviewSection}>
                    <h2>II. Unpacking the Value: Rewards and Everyday Benefits</h2>
                    <p>Beyond the headline features, the true worth of a rewards card lies in the tangible benefits it delivers. Let's break down what the MileUp® card brings to the table.</p>
                    <h3>The Welcome Mat: 15,000 AAdvantage® Bonus Miles</h3>
                    <p>The introductory offer of 15,000 AAdvantage® bonus miles, earned after a relatively modest $500 spend in three months, provides an initial taste of the program's potential. What's this worth? Industry valuations for AAdvantage® miles vary, but figures from The Points Guy (approximately 1.65 cents per mile as of May 2025) and NerdWallet (1.6 cents per mile, 2025 data) suggest this bonus could be valued around $240 to $248. This is potentially enough for a one-way domestic MileSAAver award flight, which can start as low as 7,500 miles, or a solid contribution towards a more ambitious redemption. The low spending threshold makes this bonus highly accessible, aligning with the card's entry-level appeal.</p>
                    <h3>Earning Harmony: The 2-2-1 Rhythm of Mile Accumulation</h3>
                    <p>The MileUp® card’s earning structure is straightforward:</p>
                    <ul className={styles.featureList}>
                        <li><strong>2x miles on eligible American Airlines purchases:</strong> This applies to items billed by American Airlines as the merchant of record, primarily flights bought directly from AA. It generally excludes ancillary purchases like car rentals or hotel bookings made via AA (unless specified) and AAdvantage® status boosts.</li>
                        <li><strong>2x miles at grocery stores:</strong> This is a key differentiator, including grocery delivery services. (A deeper dive into "grocery store" definitions is in Section IV).</li>
                        <li><strong>1x mile on all other purchases:</strong> The standard rate for everything else.</li>
                    </ul>
                    <p>AAdvantage® miles earned typically post to the primary cardmember's account within 8 to 10 weeks after the transaction. The 2x miles on groceries offer a consistent way to build miles through essential household spending, making the card useful even for infrequent flyers.</p>
                    <h3>Understanding Your AAdvantage® Miles: The Currency of Flight</h3>
                    <p>AAdvantage® miles are a flexible currency, but their value isn't static. As mentioned, valuations hover around 1.0 to 1.8 cents per mile, with a common target of 1.6 cents or higher for good redemptions. The actual value realized depends heavily on the redemption choice. Flights, especially international premium cabin awards on partner airlines, often yield the highest value. Conversely, using miles for merchandise, gift cards, or hotel stays usually results in a significantly lower per-mile value, often below 1 cent. Strategic redemption is key to maximizing the returns from your MileUp® spending.</p>
                    <h3>Unlocking Adventures: Redeeming Your Miles Effectively</h3>
                    <p>Cardholders have several ways to use their AAdvantage® miles:</p>
                    <ul className={styles.featureList}>
                        <li><strong>Flights on American Airlines:</strong> Main Cabin awards can start from 7,500 miles one-way for shorter domestic routes (MileSAAver awards). However, AA uses dynamic pricing, so mileage costs vary based on demand.</li>
                        <li><strong>Flights on Partner Airlines:</strong> Access to award travel on oneworld® alliance partners (e.g., British Airways, Qantas, Japan Airlines) and other non-alliance partners. These can sometimes offer more predictable value.</li>
                        <li><strong>Upgrades:</strong> Use miles for cabin upgrades on AA and select partners.</li>
                        <li><strong>Other Redemptions:</strong> Hotel stays (AAdvantage Hotels™), car rentals, vacation packages, experiences, Admirals Club® memberships, and charitable donations.</li>
                    </ul>
                    <p>For MileUp® users, "sweet spots" include domestic short-haul AA flights, flights to nearby international destinations (Mexico, Caribbean, Central America often starting from 10,000 miles one-way), and AA's "Web Special" awards, which can offer discounted rates. Flexibility with travel dates is crucial for securing the best value, especially with dynamic pricing.</p>
                    <h3>Elevated Bites: The 25% In-Flight Savings</h3>
                    <p>A tangible, if modest, perk is the 25% savings on eligible in-flight food and beverage purchases on American Airlines operated flights when using the MileUp® card. The discount is applied as a statement credit, typically posting within a few weeks to a couple of months. This does not apply to Wi-Fi purchases. For a family, this could mean a noticeable saving on snacks and drinks during their journey.</p>
                    <h3>Other Noteworthy Features:</h3>
                    <ul className={styles.featureList}>
                        <li><strong>No Mileage Cap:</strong> Earn an unlimited number of AAdvantage® miles.</li>
                        <li><strong>Miles Don't Expire (with card open):</strong> As long as the primary cardmember's MileUp® account is open and in good standing, their AAdvantage® miles will not expire – a valuable benefit for those saving for a big trip or who travel infrequently.</li>
                        <li><strong>Authorized Users:</strong> Can be added at no additional charge, and their purchases also earn miles for the primary cardmember.</li>
                        <li><strong>10% Discount on American Airlines Vacations℠ Packages:</strong> A potentially valuable, though less-publicized, discount on the non-flight components of qualifying packages booked via AAVacations.com with the card.</li>
                    </ul>
                </section>

                <section id="section-3" className={styles.reviewSection}>
                    <h2>III. Beyond Miles: The AAdvantage® Program and Loyalty Points</h2>
                    <p>A significant evolution in the AAdvantage® program is the role of Loyalty Points, and the MileUp® card directly contributes to earning them.</p>
                    <h3>The Loyalty Ledger: Earning AAdvantage® Loyalty Points</h3>
                    <p>Cardholders earn 1 Loyalty Point for every 1 eligible AAdvantage® base mile accrued from purchases on their MileUp® card. This means:</p>
                    <ul className={styles.featureList}>
                        <li>Spending in 2x categories (AA purchases, groceries) yields 2 Loyalty Points per dollar.</li>
                        <li>Spending in the 1x category yields 1 Loyalty Point per dollar.</li>
                    </ul>
                    <p>Crucially, bonus miles (like the welcome offer or special promotional accelerators) do not typically earn Loyalty Points. Loyalty Points are the sole metric for AAdvantage® elite status qualification and also unlock "Loyalty Point Rewards" at various thresholds. The AAdvantage® status qualification year runs from March 1st to the last day of February.</p>
                    <p>The MileUp® card's no-annual-fee pathway to earning Loyalty Points is a noteworthy feature, theoretically making elite status attainable through credit card spending alone—a departure from traditional models heavily reliant on flight activity.</p>
                    <h3>Climbing the Ladder: AAdvantage® Elite Status</h3>
                    <p>Loyalty Points contribute to the following AAdvantage® elite tiers:</p>
                    <ul className={styles.featureList}>
                        <li><strong>AAdvantage Gold®:</strong> 40,000 Loyalty Points. Benefits include a 40% status mileage bonus, Group 4 boarding, one free checked bag (domestic), complimentary space-available upgrades on eligible North American flights, and access to Main Cabin Extra/Preferred seats at certain times.</li>
                        <li><strong>AAdvantage Platinum®:</strong> 75,000 Loyalty Points. Benefits include a 60% mileage bonus, Group 3 boarding, two free checked bags, and enhanced upgrade priority.</li>
                        <li><strong>AAdvantage Platinum Pro®:</strong> 125,000 Loyalty Points.</li>
                        <li><strong>AAdvantage Executive Platinum®:</strong> 200,000 Loyalty Points.</li>
                    </ul>
                    <p>Beyond full status, "Loyalty Point Rewards" offer incremental benefits. An early milestone for MileUp® users is at 15,000 Loyalty Points, granting Group 5 boarding for the membership year and a choice of another reward (e.g., 1,000 bonus Loyalty Points, five Preferred Seat coupons, or Priority privileges and Group 4 boarding for one trip).</p>
                    <p>Realistically, achieving AAdvantage Gold® status with the MileUp® card alone requires substantial spending (e.g., $20,000 entirely in 2x categories or $40,000 in the 1x category within a year). However, the Loyalty Point Rewards provide tangible interim benefits.</p>
                </section>

                <section id="section-4" className={styles.reviewSection}>
                    <h2>IV. The Financial Blueprint: Rates, Fees, and Fine Print</h2>
                    <p>Transparency about costs is essential when evaluating any credit card.</p>
                    <h3>The Full Score: MileUp® Card Rates & Fees</h3>
                    <DraggableTableWrapper>
                        <div className={styles.tableContainer}>
                            <table className={`${styles.statsTable} ${styles.ratesFeesTable}`}>
                                <thead>
                                    <tr><th>Category</th><th>Details</th></tr>
                                </thead>
                                <tbody>
                                    <tr><td data-label="Category">Annual Fee</td><td data-label="Details">$0</td></tr>
                                    <tr><td data-label="Category">Purchase APR</td><td data-label="Details">20.24% – 29.24% variable (based on creditworthiness)</td></tr>
                                    <tr><td data-label="Category">Balance Transfer APR</td><td data-label="Details">20.24% – 29.24% variable</td></tr>
                                    <tr><td data-label="Category">Cash Advance APR</td><td data-label="Details">29.49% variable</td></tr>
                                    <tr><td data-label="Category">Penalty APR</td><td data-label="Details">Up to 29.99% variable (may apply for late or returned payments)</td></tr>
                                    <tr><td data-label="Category">Foreign Transaction Fee</td><td data-label="Details">3% of the U.S. dollar amount of each transaction.</td></tr>
                                    <tr><td data-label="Category">Balance Transfer Fee</td><td data-label="Details">Either $5 or 5% of the amount of each transfer, whichever is greater.</td></tr>
                                    <tr><td data-label="Category">Cash Advance Fee</td><td data-label="Details">Either $10 or 5% of the amount of each cash advance, whichever is greater.</td></tr>
                                    <tr><td data-label="Category">Minimum Interest Charge</td><td data-label="Details">$0.50 (if interest is charged)</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </DraggableTableWrapper>
                    <p><small>(Data based on latest available official sources as of {updateDate}; terms apply and are subject to change. APRs fluctuate with the Prime Rate.)</small></p>
                    <p>The APRs are typical for rewards cards and underscore that this card is best for those who pay their balance in full monthly. Carrying a balance will likely negate any miles earned due to interest charges.</p>
                    <p>The 3% foreign transaction fee is a significant drawback for an airline co-branded card. This makes the MileUp® card an expensive choice for international travel, eroding the value of miles earned on overseas purchases.</p>
                    <h3>The Grocery Gambit: Maximizing Rewards on Supermarket Spends</h3>
                    <p>The 2x miles at grocery stores is a major perk. According to Citibank's terms, "grocery stores" generally include supermarkets, freezer/meat lockers, dairy product stores, miscellaneous food/convenience stores, markets, specialty vendors, bakeries, and importantly, grocery delivery services.</p>
                    <p>However, exclusions are critical: purchases at general merchandise/discount superstores (like Walmart and Target), wholesale/warehouse clubs (Costco, Sam's Club), candy stores, cafes, bars, and fast-food restaurants do not earn 2x miles. Classification depends on Merchant Category Codes (MCCs), which Citi uses to identify qualifying purchases. If a store isn't coded as a "grocery store" by the payment network, you'll only earn 1x mile. New cardholders might consider a small test purchase at their preferred grocer to confirm bonus earning.</p>
                    <h3>Under the Hood: Standard Mastercard® Protections</h3>
                    <p>As a Mastercard, the MileUp® card usually includes:</p>
                    <ul className={styles.featureList}>
                        <li><strong>Zero Liability Protection:</strong> Protects against unauthorized purchases (Citi states "$0 Liability on Unauthorized Charges").</li>
                        <li><strong>Mastercard ID Theft Protection™:</strong> Offers credit file monitoring and identity theft resolution assistance (enrollment often required).</li>
                        <li><strong>Mastercard Global Service™:</strong> 24/7 emergency assistance for card-related needs while traveling.</li>
                    </ul>
                    <p>Citi also supports digital wallets (Apple Pay, Google Pay, Samsung Pay) and contactless-chip technology for the card. Specifics are detailed in the "Guide to Benefits" provided with the card.</p>
                </section>

                <section id="section-5" className={styles.reviewSection}>
                    <h2>V. Who Should Get This Card? Ideal User Profiles and Real-World Impact</h2>
                    <p>The MileUp® card isn't a one-size-fits-all solution.</p>
                    <h3>Excellent Fit For:</h3>
                    <ul className={styles.featureList}>
                        <li><strong>The Budget-Savvy Occasional AA Voyager:</strong> Flies American domestically a few times a year, dislikes annual fees, and values earning miles on everyday spend, especially groceries.</li>
                        <li><strong>The AAdvantage® Aspirant:</strong> New to the AAdvantage® program or seeking a low-cost way to start earning miles and Loyalty Points, potentially aiming for Gold status via regular spending.</li>
                        <li><strong>The Household Hero:</strong> Directs a large portion of their budget to groceries, turning essential spending into AAdvantage® miles for family travel.</li>
                    </ul>
                    <h3>Good Fit (with caveats):</h3>
                    <ul className={styles.featureList}>
                        <li><strong>The Strategic Optimizer:</strong> May hold other AA cards but uses MileUp® specifically for its 2x grocery earn rate.</li>
                        <li><strong>The Downgrader:</strong> Previously had a higher-fee Citi/AAdvantage® card but now prefers a no-fee option to keep miles active and continue earning.</li>
                    </ul>
                    <h3>Poor Fit For:</h3>
                    <ul className={styles.featureList}>
                        <li><strong>Frequent AA Flyers Seeking Premium Perks:</strong> Needs free checked bags, priority boarding, or lounge access (none offered by MileUp®).</li>
                        <li><strong>International Travelers:</strong> The 3% foreign transaction fee is a dealbreaker.</li>
                        <li><strong>Maximizers of General Travel Rewards:</strong> Prefers flexible transferable points programs or cards with broader travel credits and insurance.</li>
                        <li><strong>Those Who Carry a Balance:</strong> High APRs will outweigh rewards.</li>
                    </ul>
                    <p>The card is generally recommended for those with "Good to Excellent" credit (typically FICO 690+).</p>
                    <h3>A Mile in Their Shoes: Real-World Example</h3>
                    <p>Consider "Sarah," a Charlotte-based professional who flies AA domestically 2-3 times a year and is budget-conscious.</p>
                    <ul className={styles.featureList}>
                        <li>Monthly spending: $400 groceries (2x), $50 AA flights (2x average), $550 other (1x) = $1,000 total.</li>
                        <li>Monthly earnings: 800 (groceries) + 100 (AA) + 550 (other) = 1,450 miles/Loyalty Points.</li>
                        <li>Annual earnings from spending: 17,400 miles & 17,400 Loyalty Points.</li>
                        <li>Add the 15,000-mile welcome bonus (miles only): Total first-year miles = 32,400.</li>
                    </ul>
                    <p>With 32,400 miles, Sarah could book two domestic one-way MileSAAver awards or a round-trip to parts of Mexico/Caribbean. Her 17,400 Loyalty Points would also surpass the 15,000 LP threshold, giving her Group 5 boarding and another selectable perk. This illustrates how moderate, realistic spending can yield tangible travel rewards within a year.</p>
                    <h3>Voices from the Crowd: Cardholder Perspectives</h3>
                    <p>Online forums reflect varied user experiences:</p>
                    <ul className={styles.featureList}>
                        <li><strong>Optimizers ("Alex"):</strong> Value the $0 fee and strategically use the 2x categories and AAdvantage eShopping/Dining to accumulate miles steadily for occasional travel.</li>
                        <li><strong>Explorers ("Maria"):</strong> See it as a stepping stone for Loyalty Points and early perks like Group 5 boarding, potentially upgrading later. Aware of the foreign transaction fee.</li>
                        <li><strong>Pragmatists ("David"):</strong> Weigh the $0 fee against the lack of free checked bags (which can quickly offset savings) and the foreign transaction fee, sometimes questioning if a cash-back card might be better if AA travel isn't frequent enough.</li>
                    </ul>
                </section>

                <section id="section-6" className={styles.reviewSection}>
                    <h2>VI. The Competitive Arena: MileUp® vs. Other No-Fee Options</h2>
                    <p>The MileUp® card faces competition from other no-annual-fee travel cards.</p>
                    <h3>Key Table: No-Fee Travel Card Comparison</h3>
                    <DraggableTableWrapper>
                        <div className={styles.tableContainer}>
                            <table className={`${styles.statsTable} ${styles.ratesFeesTable}`}>
                                <thead>
                                    <tr>
                                        <th>Feature</th>
                                        <th>AAdvantage® MileUp® Card</th>
                                        <th>Delta SkyMiles® Blue Amex Card</th>
                                        <th>United Gateway℠ Card (Chase)</th>
                                        <th>Capital One VentureOne Rewards</th>
                                        <th>Bank of America® Travel Rewards</th>
                                        <th>Discover it® Miles</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr><td data-label="Feature">Annual Fee</td><td data-label="AAdvantage® MileUp® Card">$0</td><td data-label="Delta SkyMiles® Blue Amex Card">$0</td><td data-label="United Gateway℠ Card (Chase)">$0</td><td data-label="Capital One VentureOne Rewards">$0</td><td data-label="Bank of America® Travel Rewards">$0</td><td data-label="Discover it® Miles">$0</td></tr>
                                    <tr><td data-label="Feature">Welcome Bonus (Typical)</td><td data-label="AAdvantage® MileUp® Card">15,000 AA miles</td><td data-label="Delta SkyMiles® Blue Amex Card">10,000 Delta SkyMiles</td><td data-label="United Gateway℠ Card (Chase)">30,000 United miles (often higher/LTO)</td><td data-label="Capital One VentureOne Rewards">20,000 bonus miles</td><td data-label="Bank of America® Travel Rewards">25,000 bonus points ($250 value)</td><td data-label="Discover it® Miles">Unlimited Miles Match (1st year)</td></tr>
                                    <tr><td data-label="Feature">Rewards Structure</td><td data-label="AAdvantage® MileUp® Card">2x AA & groceries; 1x other</td><td data-label="Delta SkyMiles® Blue Amex Card">2x Delta & U.S. restaurants; 1x other</td><td data-label="United Gateway℠ Card (Chase)">2x United, gas, local transit; 1x other</td><td data-label="Capital One VentureOne Rewards">1.25x all; 5x hotels/cars via CapOne Travel</td><td data-label="Bank of America® Travel Rewards">1.5 points on all</td><td data-label="Discover it® Miles">1.5x miles on all</td></tr>
                                    <tr><td data-label="Feature">Key Airline/Travel Perk</td><td data-label="AAdvantage® MileUp® Card">25% off AA in-flight food/bev; Earns Loyalty Points</td><td data-label="Delta SkyMiles® Blue Amex Card">20% off Delta in-flight purchases</td><td data-label="United Gateway℠ Card (Chase)">25% off United in-flight; Trip Cancellation Ins.</td><td data-label="Capital One VentureOne Rewards">Miles transferable to partners</td><td data-label="Bank of America® Travel Rewards">Points for travel/dining credits</td><td data-label="Discover it® Miles">Redeem for travel credit or cash</td></tr>
                                    <tr><td data-label="Feature">Foreign Transaction Fee</td><td data-label="AAdvantage® MileUp® Card">3%</td><td data-label="Delta SkyMiles® Blue Amex Card">No</td><td data-label="United Gateway℠ Card (Chase)">No</td><td data-label="Capital One VentureOne Rewards">No</td><td data-label="Bank of America® Travel Rewards">No</td><td data-label="Discover it® Miles">No</td></tr>
                                    <tr><td data-label="Feature">Loyalty Program</td><td data-label="AAdvantage® MileUp® Card">American AAdvantage®</td><td data-label="Delta SkyMiles® Blue Amex Card">Delta SkyMiles®</td><td data-label="United Gateway℠ Card (Chase)">United MileagePlus®</td><td data-label="Capital One VentureOne Rewards">Capital One Miles</td><td data-label="Bank of America® Travel Rewards">Bank of America Travel Rewards</td><td data-label="Discover it® Miles">Discover Miles</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </DraggableTableWrapper>
                    <p><small>(Note: Welcome offers and some terms are subject to change. Information based on generally available data as of {updateDate}.)</small></p>
                    <p>This comparison highlights that MileUp®'s unique selling points in the no-fee airline card segment are its 2x AAdvantage® miles on groceries and its Loyalty Point earning capability. However, its 3% foreign transaction fee is a major competitive disadvantage, as all listed direct airline and general travel competitors waive this fee. The choice often boils down to primary airline loyalty, spending habits (groceries vs. dining/gas), and international travel frequency.</p>
                </section>

                <section id="section-7" className={styles.reviewSection}>
                    <h2>VII. Key Considerations and Potential Drawbacks</h2>
                    <p>While offering an accessible route to AAdvantage® miles, the MileUp® card has limitations:</p>
                    <ul className={styles.featureList}>
                        <li><strong>3% Foreign Transaction Fee:</strong> Its most significant drawback for international use.</li>
                        <li><strong>Lack of Core Airline Perks:</strong> No free checked bags or standard priority boarding. Bag fees on AA can quickly surpass the annual fee of a card offering this benefit.</li>
                        <li><strong>Modest Welcome Bonus:</strong> Relatively small compared to some other travel cards.</li>
                        <li><strong>Potentially High APRs:</strong> Interest charges from carrying a balance will erode reward value.</li>
                        <li><strong>Variable Mile Value & Redemption Complexity:</strong> Maximizing AAdvantage® mile value requires effort and understanding of dynamic pricing or partner charts.</li>
                        <li><strong>Dependency on MCCs for Grocery Bonus:</strong> Purchases at superstores or warehouse clubs won't earn 2x miles.</li>
                        <li><strong>Slow Loyalty Point Accumulation for Elite Status:</strong> Reaching higher status tiers requires very substantial spending.</li>
                    </ul>
                    <p>The $0 annual fee involves a trade-off: fewer expensive perks. Potential users must weigh this against out-of-pocket costs for things like checked bags or foreign transaction fees.</p>
                </section>

                <section id="section-verdict" className={styles.reviewSection}>
                    <h2>IX. The Verdict: Is the MileUp® Card a Sound Choice for U.S. Travelers in 2025?</h2>
                    <p>The {reviewDataNew.cardName} carves out a clear niche. It’s a straightforward, no-annual-fee entry into AAdvantage® rewards, particularly appealing for its 2x miles on groceries and eligible American Airlines purchases, plus its unique ability among no-fee AA cards to earn Loyalty Points.</p>
                    <p><strong>The MileUp® Card is likely a HIT if:</strong></p>
                    <ul className={styles.featureList}>
                        <li>You are an occasional domestic traveler primarily loyal to American Airlines.</li>
                        <li>A $0 annual fee is your top priority.</li>
                        <li>A significant portion of your household spending is on groceries.</li>
                        <li>You're new to AAdvantage® and want a low-commitment way to earn miles and Loyalty Points.</li>
                        <li>You understand and accept its limitations (foreign transaction fee, no premium perks) and have workarounds.</li>
                    </ul>
                    <p><strong>The MileUp® Card is likely a MISS if:</strong></p>
                    <ul className={styles.featureList}>
                        <li>You frequently check bags on American Airlines (bag fees could justify another card's annual fee).</li>
                        <li>You travel internationally regularly (the 3% foreign transaction fee is costly).</li>
                        <li>You seek premium travel benefits like lounge access or standard priority boarding.</li>
                        <li>You tend to carry a credit card balance (high APRs will negate rewards).</li>
                        <li>Your airline loyalty isn't tied to American, or you prefer more flexible rewards.</li>
                    </ul>
                    <p>Ultimately, the MileUp® card is a solid, if not spectacular, contender for the budget-conscious, AA-flying domestic traveler who can maximize the grocery bonus. It offers a low-risk method to engage with a major airline loyalty program. However, its value diminishes significantly for those with broader travel needs or expectations of premium benefits. A careful assessment of your personal spending habits, travel patterns, and financial discipline is crucial to determine if this card will be a harmonious addition to your wallet in the year ahead.</p>
                </section>

                <section id="section-faq" className={`${styles.reviewSection} ${styles.faqSection}`}>
                    <h2>VIII. {reviewDataNew.cardName}: Top 10 FAQs (Card Specific)</h2>
                    <div className={styles.faqContainer}>
                        {structuredDataOptimized['@graph'].find(item => item['@type'] === 'FAQPage').mainEntity.map((faq, index) => (
                            <details key={index} className={styles.faqItem}>
                                <summary className={styles.faqQuestion}>{`${index + 1}. ${faq.name}`}</summary>
                                <div className={styles.faqAnswer}><p>{faq.acceptedAnswer.text}</p></div>
                            </details>
                        ))}
                    </div>
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

export default AmericanAirlinesAadvantageMileupReviewPage;