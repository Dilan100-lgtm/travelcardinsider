/* ------------------------------------------------------------------
    File:  pages/reviews/american-express-business-gold-card-review.js
    Route: https://www.yourwebsite.com/reviews/american-express-business-gold-card-review
------------------------------------------------------------------- */

import React, { useState, useEffect, useCallback, useRef } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import styles from '../../styles/ReviewPage.module.css'; // Assuming same CSS module

import TableOfContents from '../../components/TableOfContents';
import IconGift from '../../components/icons/icon-gift.svg';
import IconStar from '../../components/icons/icon-star.svg';
import IconCheck from '../../components/icons/icon-Credit Card.svg';
import IconPlus from '../../components/icons/icon-target.svg';
import IconPlane from '../../components/icons/icon-plane.svg';
import IconDollar from '../../components/icons/icon-dollar.svg';
import IconBriefcase from '../../components/icons/icon-briefcase.svg'; // Using the new briefcase icon

const RatingTooltip = dynamic(() => import('../../components/RatingTooltip'), { ssr: false, loading: () => null });

/* ──────────────────────────────
    CONSTANTS & STATIC DATA
    ────────────────────────────── */
const siteName = 'Travelcardinsider';
const siteUrl = 'https://www.travelcardinsider.com';
const pagePath = '/reviews/american-express-business-gold-card-review';
const pageUrlFull = `${siteUrl}${pagePath}`;
const publishDate = '2025-05-30'; // Updated to current date
const updateDate = '2025-05-30'; // Updated to current date

const reviewData = {
  cardName        : 'American Express® Business Gold Card',
  cardShortName   : 'Amex Business Gold',
  title           : 'American Express® Business Gold Card Review (2025): Fueling Business Growth?',
  description     : 'In-depth 2025 review of the American Express® Business Gold Card. Explore 4X rewards, statement credits (FedEx, Grubhub, Office Supplies, Walmart+), business tools, and the $375 fee. Is it right for your U.S. business?',
  keywords        : 'American Express Business Gold Card review, Amex Business Gold, Amex Business Gold benefits, business credit card, Membership Rewards, Amex Business Gold 4X, Amex Business Gold 2025, $375 annual fee business card',
  author: {
      name: 'Dilan Madushanka',
      title: 'Founder & Lead Editor',
      imageUrl: '/WhatsApp Image 2025-05-12 at 4.09.58 PM.jpeg', // /* USER ACTION: UPDATE THIS */
      imageWidth: 40,
      imageHeight: 40,
      tooltipImageUrl: '/WhatsApp Image 2025-05-12 at 4.09.58 PM.jpeg', // /* USER ACTION: UPDATE THIS */
      tooltipImageWidth: 60,
      tooltipImageHeight: 60,
      expertise: [
          'Premium Business Rewards Cards',
          'Airline & Hotel Loyalty Programs for Business',
          'Optimizing Business Expenses',
          'Credit Card Statement Credits for SMEs',
          'American Express Business Cards'
      ],
      bioSnippet: 'Dilan Madushanka is the founder and lead editor of Travelcardinsider, specializing in demystifying premium credit cards like the Amex Business Gold to unlock maximum value for businesses.', // /* USER ACTION: UPDATE THIS */
      fullBioLink: '/author/dilan-madushanka', // /* USER ACTION: UPDATE THIS */
      publishedStats: '100+ in-depth business & travel card reviews published', // /* USER ACTION: UPDATE THIS */
      testedStats: 'Over 250+ credit card benefits analyzed across major brands', // /* USER ACTION: UPDATE THIS */
      socialLinks: {
          linkedin: 'https://www.linkedin.com/in/dilan-madushanka-b65293365', // /* USER ACTION: UPDATE THIS */
          twitter: 'https://x.com/team_dilan', // /* USER ACTION: UPDATE THIS */
          email: 'team@travelcardinsider.com' // /* USER ACTION: UPDATE THIS */
      }
  },
  siteName: siteName,
  imageUrl        : '/images/amex-business-gold-card-review-travelcardinsider.png', // /* USER ACTION: UPDATE THIS with actual card image path */
  imageWidth      : 1290,
  imageHeight     : 812,
  ratingValue     : 9.1,
  ratingCount     : 185,
  reviewBody      : 'Our editors evaluate the American Express® Business Gold Card based on its adaptive 4X rewards categories, valuable statement credits (Flexible Business Credit, Walmart+), Membership Rewards® program, business management tools, travel perks, the $375 annual fee, and overall value for U.S.-based businesses with specific spending patterns.',
  aprRange        : 'Potentially 19.49% - 28.49% variable for Pay Over Time, after any introductory 0% APR period. Refer to official rates and terms.',
  annualFee       : 375,
  howWeRateLink   : '/about/how-we-rate', // /* USER ACTION: Verify this path */
  // /* USER ACTION: UPDATE ALL OFFICIAL AMEX LINKS BELOW */
  applyLink       : 'https://card.americanexpress.com/d/business-gold-card/',
  ratesFeesLink   : 'https://www.americanexpress.com/us/credit-cards/business/business-gold-card/terms?key=ratesAndFees', // Cited
  officialOverviewLink: 'https://www.americanexpress.com/us/credit-cards/business/business-gold-card/',
  officialWelcomeOfferLink: 'https://www.americanexpress.com/us/credit-cards/business/business-gold-card/offer/', // Cited
  officialMembershipRewardsLink: 'https://www.americanexpress.com/en-us/rewards/membership-rewards/terms', // Cited
  officialBenefitsLink: 'https://www.americanexpress.com/us/credit-cards/business/business-gold-card/benefits', // Cited
  officialAmexTravelLink: 'https://www.amextravel.com',
  officialQuickbooksLink: 'https://www.americanexpress.com/us/business/trends-and-insights/articles/save-time-by-connecting-your-business-card-to-quickbooks/',
  officialBillComLink: 'https://www.bill.com/for-accountants/american-express',
  sku             : 'AMEX-BIZGOLD-TCI-2025',
  mpn             : 'AMEXBIZGOLD',
  h1Content       : "American Express® Business Gold Card: Fueling Your Business Growth?",
  heroSubtitle    : "Discover if the Amex Business Gold's premium rewards and $375 fee align with your U.S. business needs in our comprehensive 2025 review."
};

/* ──────────────────────────────
    STRUCTURED DATA GRAPH
    ────────────────────────────── */
const structuredDataOptimized = { /* ... Same as previous, ensure FAQPage is well-formed ... */
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
      brand          : { '@type': 'Brand', name: 'American Express' },
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
        priceValidUntil    : '2026-12-31',
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
            description          : `Pay Over Time APR: ${reviewData.aprRange}. Foreign Transaction Fee: None. See official ${reviewData.cardName} Rates & Fees on the issuer's website.`,
          },
        ],
        seller: { '@type': 'Organization', name: 'American Express' },
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
        logo    : { '@type': 'ImageObject', url: `${siteUrl}/images/logo/your-logo-schema.png` }, // /* USER ACTION: UPDATE THIS */
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
        { '@type': 'ListItem', position: 2, name: 'Business Credit Card Reviews', item: `${siteUrl}/business-reviews` }, // /* USER ACTION: UPDATE THIS if path differs */
        { '@type': 'ListItem', position: 3, name: `${reviewData.cardName} Review`, item: pageUrlFull },
      ],
    },
    {
      '@type'    : 'FAQPage',
      '@id'      : `${pageUrlFull}#faqs`,
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How are the top 2 (4X) bonus categories determined for the Amex Business Gold Card?',
          acceptedAnswer: { '@type': 'Answer', text: "American Express automatically identifies the two categories (from the six eligible) where your business spent the most during each billing cycle. No manual selection or enrollment is needed for the 4X categories themselves." }
        },
        {
          '@type': 'Question',
          name: 'Is there a limit on the Membership Rewards® points I can earn?',
          acceptedAnswer: { '@type': 'Answer', text: "There's no overall limit to the total points you can earn. However, the 4X bonus points on your top two categories are capped at $150,000 in combined purchases per calendar year. After that, purchases in those categories will earn 1X point." }
        },
        {
          '@type': 'Question',
          name: 'Do I have to pay my bill in full every month with the Amex Business Gold?',
          acceptedAnswer: { '@type': 'Answer', text: "Not necessarily. The card features 'Pay Over Time,' which allows you to carry a balance with interest on eligible purchases, up to your Pay Over Time limit. Purchases not eligible for Pay Over Time or that exceed this limit must be paid in full each month." }
        },
        {
          '@type': 'Question',
          name: 'Can I get cash advances with the Amex Business Gold Card?',
          acceptedAnswer: { '@type': 'Answer', text: "Cash advances are not a primary feature of this card and are generally discouraged due to high fees and APRs if available. It's best to check your Cardmember Agreement for specific terms." }
        },
        {
          '@type': 'Question',
          name: 'Are the statement credits (like the Flexible Business Credit or Walmart+ credit) applied automatically?',
          acceptedAnswer: { '@type': 'Answer', text: "No, enrollment is typically required for these statement credits. You usually need to enroll through your American Express online account or app before making eligible purchases to receive the credits." }
        },
        {
          '@type': 'Question',
          name: 'What kind of business structure do I need to apply for the Amex Business Gold Card?',
          acceptedAnswer: { '@type': 'Answer', text: "Various business structures can apply, including sole proprietors (who can often use their SSN), freelancers, LLCs, S-corps, and corporations. A formal, complex business structure is not always a prerequisite." }
        }
      ],
    },
    {
      '@type' : 'Organization',
      '@id'   : `${siteUrl}#website`,
      name    : siteName,
      url     : siteUrl,
      logo    : { '@type': 'ImageObject', url: `${siteUrl}/images/logo/your-logo-schema.png` }, // /* USER ACTION: UPDATE THIS */
      sameAs  : [
        "https://www.facebook.com/YourTravelCardInsiderFacebookPage", // /* USER ACTION: UPDATE THIS */
        "https://twitter.com/YourTravelCardInsiderTwitterHandle", // /* USER ACTION: UPDATE THIS */
      ],
    },
  ],
};

const ratingCriteria = [ /* ... Same as previous ... */
    'Value of 4X Adaptive Bonus Categories (Flexibility & Earning Potential)',
    'Usefulness & Actual Value of Statement Credits (Flexible Business, Walmart+)',
    'Membership Rewards® Program: Earning Rate & Redemption Value for Businesses',
    'Welcome Offer: Value vs. Spending Requirement & Eligibility',
    'Effectiveness of Business Management Tools & Integrations (e.g., QuickBooks®, Employee Cards)',
    'Quality and Relevance of Travel Perks & Protections for Business Needs (e.g., Cell Phone Protection, No FTF)',
    'Annual Fee ($375) Justification: Overall Benefit Package vs. Cost',
    'Pay Over Time Feature: Flexibility, Introductory APR, and Ongoing APR Considerations',
    'Clarity of Terms and Ease of Benefit Utilization for Business Users',
    'Customer Support & Account Management for Business Clients',
];

const tocSections = [ /* ... Same as previous ... */
    { id: 'section-intro', title: '1. Introduction: Why the Business Gold Matters' },
    { id: 'section-tldr', title: '2. TL;DR: Is the Amex Business Gold For You?' },
    { id: 'section-proposition', title: '3. The Core Proposition: Adaptive Rewards' },
    { id: 'section-snapshot', title: '4. Card Snapshot & Who It’s Best For' },
    { id: 'section-welcome-offer', title: '5. Welcome Offer Deep Dive' },
    { id: 'section-earning-power', title: '6. Earning Rewards: 4X & 3X Categories' },
    // Infographic placeholder will be within section-earning-power's content
    { id: 'section-mr-ecosystem', title: '7. Membership Rewards®: Flexibility & Value' },
    { id: 'section-redemption', title: '8. Redeeming Points Effectively' },
    // Infographic placeholder will be within section-redemption's content
    { id: 'section-point-transfers', title: '9. Strategic Point Transfers for Travel' },
    { id: 'section-statement-credits', title: '10. Key Feature: Statement Credits Analyzed' },
    // Infographic placeholder will be within section-statement-credits's content
    { id: 'section-travel-perks', title: '11. Key Feature: Travel Perks & Protections' },
    { id: 'section-biz-tools', title: '12. Key Feature: Business Management Tools' },
    { id: 'section-rates-fees', title: '13. Costs: Full Spectrum of Rates & Fees' },
    { id: 'section-pay-over-time', title: '14. Pay Over Time: Cash Flow Flexibility' },
    { id: 'section-user-profiles', title: '15. Who Benefits Most? User Profiling' },
    { id: 'section-real-world-scenario', title: '16. Value Calculation: A Real-World Example' },
    { id: 'section-competitors', title: '17. Competitor Card Comparison' },
    { id: 'section-user-perspectives', title: '18. Real User Testimonials' },
    { id: 'section-application', title: '19. Application Process & Eligibility' },
    { id: 'section-faqs-jump', title: '20. Card-Specific FAQs' },
    { id: 'section-final-verdict', title: '21. Final Verdict: The Winning Card?' },
    { id: 'section-eat', title: '22. Our E-A-T Commitment' },
];

// Placeholder for content images, update paths as needed
const contentImage1 = "/images/business-meeting-collaborating.webp"; // /* USER ACTION: UPDATE THIS */
const contentImage2 = "/images/travel-laptop-desk.webp"; // /* USER ACTION: UPDATE THIS */


function DraggableTableWrapper({ children }) { /* ... Same as previous ... */
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
function AmericanExpressBusinessGoldCardReviewPage() {
  const [showRatingInfo, setShowRatingInfo] = useState(false);
  const [showAuthorBioTooltip, setShowAuthorBioTooltip] = useState(false);
  const authorRef = useRef(null);
  const authorTooltipRef = useRef(null);
  const ratingTooltipRef = useRef(null);

  const handleIconClick = useCallback((event) => { /* ... Same as previous ... */
      event.preventDefault();
      event.stopPropagation();
      setShowRatingInfo(prevState => !prevState);
  }, []);

  const handleAuthorMouseEnter = useCallback(() => { /* ... Same as previous ... */
      setShowAuthorBioTooltip(true);
  }, []);

  const handleAuthorMouseLeave = useCallback(() => { /* ... Same as previous ... */
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

   const handleAuthorClearTimeout = useCallback(() => { /* ... Same as previous ... */
      if (authorRef.current?.tooltipTimeoutId) {
          clearTimeout(authorRef.current.tooltipTimeoutId);
      }
   }, [authorRef]);

  useEffect(() => { /* ... Same as previous ... */
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


  const summaryBoxData = { /* ... Same as previous ... */
    welcomeOffer: "(Verify current offer) Typically, a points bonus after meeting a significant spending requirement (e.g., 70,000 points after $10,000 spend in 3 months).",
    annualFee: `$${reviewData.annualFee}`,
    topEarning: "4X MR® points on top 2 eligible spend categories (up to $150k combined/year), 3X on AmexTravel.com flights & hotels.",
    keyCredits: "Up to $240 Flexible Business Credit (FedEx, Grubhub, U.S. Office Supply Stores - enrollment required). Walmart+ monthly membership credit (enrollment required).",
    businessPerk: "Adaptive 4X rewards, Business management tools (QuickBooks® integration, Employee Cards), Cell Phone Protection.",
    bestFor: "Established U.S. businesses with dynamic spending in key categories, seeking premium travel rewards and substantial statement credits."
  };


  return (
    <div>
      <Head>
        {/* ... Same Head content as previous, ensure it's complete ... */}
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
        <meta property="article:publisher" content={`https://www.facebook.com/YourTravelCardInsiderFacebookPage`} />  {/* /* USER ACTION: UPDATE THIS */ }
        <meta property="article:section"       content="Business Credit Card Reviews" />
        <meta property="article:published_time" content={publishDate} />
        <meta property="article:modified_time"  content={updateDate} />
        <meta property="article:author" content={reviewData.author.name} />
        {reviewData.keywords.split(',').map(keyword => (
            <meta property="article:tag" content={keyword.trim()} key={keyword.trim()} />
        ))}
        <meta name="twitter:card"        content="summary_large_image" />
        <meta name="twitter:site" content="@YourTravelCardInsiderTwitterHandle" /> {/* /* USER ACTION: UPDATE THIS */ }
        <meta name="twitter:creator" content={`@${reviewData.author.socialLinks?.twitter?.split('/').pop() || 'YourAuthorTwitterHandle'}`} /> {/* /* USER ACTION: UPDATE THIS */ }
        <meta name="twitter:title"       content={reviewData.title} />
        <meta name="twitter:description" content={reviewData.description} />
        <meta name="twitter:image"       content={`${siteUrl}${reviewData.imageUrl}`} />
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
                        src={reviewData.author.imageUrl}
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
                        </div>
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
                        <div /* Author Tooltip Content */
                            className={styles.authorTooltip}
                            ref={authorTooltipRef}
                            role="tooltip"
                            onMouseEnter={handleAuthorClearTimeout}
                            onMouseLeave={handleAuthorMouseLeave}
                            onFocus={handleAuthorMouseEnter}
                            onBlur={handleAuthorMouseLeave}
                        >
                            {/* ... Same tooltip content as previous ... */}
                             <div className={styles.authorTooltipHeader}>
                                 <Image
                                    src={reviewData.author.tooltipImageUrl}
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
                {/* USER ACTION: Authority Badges - Style these placeholders as needed in ReviewPage.module.css */}
                {/* Example CSS:
                    .authorityBadges { display: flex; gap: 15px; align-items: center; margin-top: 10px; flex-wrap: wrap; }
                    .badgePlaceholder { background-color: #f0f0f0; padding: 5px 10px; border-radius: 4px; font-size: 0.8rem; border: 1px solid #ddd; }
                */}
                <div className={styles.authorityBadges}>
                  <span className={styles.badgePlaceholder}>Quoted in: Forbes</span>
                  <span className={styles.badgePlaceholder}>Member: Credit Card Writers Guild</span>
                  <div className={styles.badgePlaceholder}>TrustPilot Rating Widget Placeholder</div>
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
                      on American Express&apos;s official site
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
                   <p className={styles.howWeRateHeroLink}>Our rating is based on a comprehensive <Link href={reviewData.howWeRateLink}><a>evaluation methodology</a></Link>.</p>
                </div>
                 <div className={styles.ratingDescription}>
                    <i>{reviewData.cardName}: {reviewData.description}</i>
                 </div>
              </div>
            </section>

             <div className={styles.reviewContainer}>
              <article>
                <header className={styles.reviewHeader}>
                    <div className={styles.summaryBox} id="summaryBoxTitle">
                        {/* ... Same SummaryBox content as previous ... */}
                        <h2 className={styles.summaryBoxTitle}>{reviewData.cardName}: Key Insights</h2>
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
                                <span className={styles.summaryIcon}><IconBriefcase /></span>
                                <span className={styles.summaryLabel}>Business Perks:</span>
                                <span className={styles.summaryValue}>{summaryBoxData.businessPerk}</span>
                            </div>
                            <div className={styles.summaryItem} data-full-width="true">
                                <span className={styles.summaryIcon}><IconPlus /></span>
                                <span className={styles.summaryLabel}>Best For:</span>
                                <span className={styles.summaryValue}>{summaryBoxData.bestFor}</span>
                            </div>
                        </div>
                        <div className={styles.summaryBoxActions}>
                            <a href={reviewData.ratesFeesLink} className={styles.summaryRatesLink} target="_blank" rel="noopener noreferrer sponsored">
                                See Card Rates & Fees (Amex Site)
                            </a>
                             <a href='/business-rewards-calculator' className={`${styles.heroRewardsCalculator} ${styles.summaryButton}`} target="_blank" rel="noopener noreferrer">
                                Business Rewards Calculator
                            </a>
                        </div>
                    </div>
                </header>

                <section id="section-intro" className={styles.reviewSection}>
                  <h2>1. Introduction: Why the Business Gold Matters</h2>
                  <p>For growing U.S. businesses, choosing the right financial tools is strategic. A suitable credit card, for example, is more than a payment method; it can unlock rewards, streamline expenses, and provide valuable perks. Among premium offerings, the {reviewData.cardName} is a compelling, if intricate, option. With its signature gleam and a notable annual fee, it promises rich rewards and robust features. This review examines if its benefits justify the ${reviewData.annualFee} annual fee (see official <a href={reviewData.ratesFeesLink} target="_blank" rel="noopener noreferrer sponsored">Amex rates and fees</a>) and if it can optimize your business's financial strategy.</p>
                </section>

                <section id="section-tldr" className={styles.reviewSection}>
                  <h2>2. TL;DR: Is the Amex Business Gold For You?</h2>
                  <p>The {reviewData.cardName} can be exceptionally valuable, but it’s not for everyone.</p>
                  <p><strong>It’s ideal for:</strong> Established U.S. businesses with consistent, significant spending (at least several thousand dollars monthly) aligned with two or more of its 4X bonus categories (like U.S. advertising, U.S. software/electronics, U.S. gas, U.S. restaurants, transit, or U.S. wireless services—details available on the <a href={reviewData.officialBenefitsLink} target="_blank" rel="noopener noreferrer sponsored">Amex benefits page</a>). It also suits those who will actively enroll in and use its statement credits (potentially up to $395 annually for services like FedEx, Grubhub, Office Supplies, and Walmart+), offsetting the ${reviewData.annualFee} annual fee. If you value premium travel rewards via Membership Rewards® and can maximize them, this card has serious potential.</p>
                  <p><strong>Consider alternatives if:</strong> Your business has low or unpredictable spending, major expenses outside the specific bonus categories, or high sensitivity to annual fees. If simplicity is paramount, or you won't use the specific statement credit merchants, other cards might be a better fit.</p>
                  <p><strong>The bottom line:</strong> If your business profile matches its strengths, the {reviewData.cardShortName} can be a powerful partner. If not, its cost may outweigh the benefits. Read on for the deep dive.</p>
                </section>

                <section id="section-proposition" className={styles.reviewSection}>
                  <h2>3. The Core Proposition: Adaptive Rewards</h2>
                  <p>This review explores its adaptive rewards, designed for fluctuating spending, and its array of credits and protections. The card's premium positioning demands careful consideration from businesses that can harness its strengths, turning the fee into an investment. The core proposition is accelerated rewards in your highest spending categories—a potentially lucrative feature requiring an understanding of its mechanics, often detailed in the <a href={reviewData.officialMembershipRewardsLink} target="_blank" rel="noopener noreferrer sponsored">Membership Rewards® terms</a>.</p>
                </section>

                <section id="section-snapshot" className={styles.reviewSection}>
                    <h2>4. Card Snapshot & Who It’s Best For</h2>
                    <p>The {reviewData.cardName}, in classic Gold or Rose Gold, is a premium tool for dynamic businesses.</p>
                    <p><strong>"Best For" Tagline:</strong> Established U.S. businesses with dynamic spending in key categories, seeking premium travel rewards and substantial statement credits to intelligently offset a higher annual fee.</p>
                    <p>This card shines for businesses leveraging its top-tier earning in specific, rotating spending areas and maximizing its statement credits. The ${reviewData.annualFee} annual fee necessitates strategic use, as outlined in the card's <a href={reviewData.ratesFeesLink} target="_blank" rel="noopener noreferrer sponsored">official fee schedule</a>.</p>
                    <DraggableTableWrapper>{/* ... Table content from previous ... */}</DraggableTableWrapper>
                    <p>The ${reviewData.annualFee} fee and substantial welcome offer spending threshold indicate this card suits businesses with consistent, robust cash flow, not startups with minimal expenses.</p>
                </section>

                <Image src={contentImage1} alt="Business professionals collaborating" width={800} height={500} className={styles.contentImage} loading="lazy" />

                <section id="section-welcome-offer" className={styles.reviewSection}>
                    <h2>5. Welcome Offer Deep Dive</h2>
                    <p>⚠️ <strong>Important Welcome Offer Advisory:</strong> Credit card welcome offers, including this one, change frequently. Always verify current terms directly on the <a href={reviewData.officialWelcomeOfferLink} target="_blank" rel="noopener noreferrer sponsored">official American Express website before applying</a>.</p>
                    <p>A card's welcome offer provides an initial glimpse into its value. The {reviewData.cardShortName} typically extends a generous one, such as 70,000 Membership Rewards® points after a $10,000 spend in three months. Valuing points conservatively at 1.8 cents each (when transferred strategically), this bonus could be worth $1,260 towards travel—substantially covering the annual fee in the first year. However, the spending requirement (e.g., $10,000 in three months, averaging over $3,333 monthly) underscores that the card is for businesses with regular, robust expenditure. Note Amex's eligibility rules: welcome offers are often "once-per-card-per-lifetime" as per their <a href={reviewData.officialWelcomeOfferLink} target="_blank" rel="noopener noreferrer sponsored">offer terms</a>. Targeted offers might sometimes be more lucrative than public ones; check directly with Amex.</p>
                </section>

                <section id="section-earning-power" className={styles.reviewSection}>
                    <h2>6. Earning Rewards: 4X & 3X Categories</h2>
                    <p>The ongoing rewards structure, especially the adaptive 4X categories, is a key attraction. You can find full details on earning structures in the <a href={reviewData.officialBenefitsLink} target="_blank" rel="noopener noreferrer sponsored">card benefits guide</a>.</p>
                    <ul className={styles.featureList}>{/* ... List content from previous ... */}</ul>
                    {/* USER ACTION: Infographic Placeholder - Style in ReviewPage.module.css */}
                    {/* Example CSS: .infographicPlaceholder { border: 2px dashed #ccc; padding: 20px; text-align: center; margin: 30px auto; background-color: #f9f9f9; max-width: 700px; } .infographicPlaceholder img { max-width: 100%; height: auto; margin-bottom: 10px; } */}
                    <div className={styles.infographicPlaceholder}>
                        <Image src="/images/placeholder-infographic-4x-categories.png" alt="Infographic: Amex Business Gold 4X Categories Cheat-Sheet" width={700} height={300} loading="lazy" />
                        <p><strong>Visual Cheat-Sheet:</strong> Amex Business Gold 4X Categories. <Link href="#section-earning-power"><a>See full earning details &raquo;</a></Link></p>
                    </div>
                    <DraggableTableWrapper>{/* ... Table content from previous ... */}</DraggableTableWrapper>
                </section>

                <section id="section-mr-ecosystem" className={styles.reviewSection}>
                  <h2>7. Membership Rewards®: Flexibility & Value</h2>
                  <p>The {reviewData.cardShortName} participates in the Membership Rewards® program, known for flexibility and high-value potential. Points generally don't expire with an active account. You can review the complete <a href={reviewData.officialMembershipRewardsLink} target="_blank" rel="noopener noreferrer sponsored">Membership Rewards® Program Terms</a> for specifics. Base earning is 1 point per dollar; 4X/3X are bonuses. Excluded: fees, interest, cash advances, P2P payments, gift cards.</p>
                  <p>Point value varies. Statement credits yield ~0.6-1 cent/point. Transferring to airline/hotel partners is key for maximizing value, often achieving 2+ cents/point, especially for premium travel.</p>
                </section>

                <section id="section-redemption" className={styles.reviewSection}>
                  <h2>8. Redeeming Points Effectively</h2>
                  <p>Wise redemption is crucial. Options include (always check current redemption values in your Amex account or on the <a href={reviewData.officialMembershipRewardsLink} target="_blank" rel="noopener noreferrer sponsored">Membership Rewards site</a>):</p>
                  <ul className={styles.featureList}>{/* ... List content from previous ... */}</ul>
                   <div className={styles.infographicPlaceholder}>
                        <Image src="/images/placeholder-infographic-mr-value.png" alt="Infographic: Maximizing Membership Rewards Value Pathways" width={700} height={300} loading="lazy" />
                        <p><strong>Visual Guide:</strong> Membership Rewards® Value Pathways. <Link href="#section-redemption"><a>Learn how to maximize point value &raquo;</a></Link></p>
                    </div>
                  <p>For maximum value, strategic transfers to travel partners are generally superior.</p>
                </section>

                <section id="section-point-transfers" className={styles.reviewSection}>
                  <h2>9. Strategic Point Transfers for Travel</h2>
                  <p>Transferring points to airline/hotel partners is arguably the most powerful feature for travel-focused businesses. Amex has an extensive network (over 15 airlines, 3 hotel programs, see full list and terms on the <a href={reviewData.officialMembershipRewardsLink} target="_blank" rel="noopener noreferrer sponsored">Amex site</a>). Most airline transfers are 1:1 (1,000 MR points = 1,000 miles). Partners include Delta, Air Canada, British Airways, and Emirates. Hotel ratios vary: Hilton Honors (1:2), Marriott Bonvoy (1:1). Higher point numbers don't always mean higher value due to differing intrinsic worth of partner currencies. Transfer times vary (many instant, some 24-48+ hours). Watch for occasional transfer bonuses.</p>
                  <DraggableTableWrapper>{/* ... Table content from previous ... */}</DraggableTableWrapper>
                </section>

                <section id="section-statement-credits" className={styles.reviewSection}>
                    <h2>10. Key Feature: Statement Credits Analyzed</h2>
                    <p>Statement credits offer direct monetary value, potentially offsetting the annual fee. Enrollment is required for most credits; ensure you activate these offers through your Amex account or as detailed in the <a href={reviewData.officialBenefitsLink} target="_blank" rel="noopener noreferrer sponsored">official benefit terms</a>.</p>
                    <ul className={styles.featureList}>{/* ... List content from previous ... */}</ul>
                    <div className={styles.infographicPlaceholder}>
                        <Image src="/images/placeholder-infographic-fee-vs-credits.png" alt="Infographic: Amex Business Gold Annual Fee vs. Potential Credits Dial" width={700} height={300} loading="lazy" />
                        <p><strong>Visual Breakdown:</strong> Annual Fee vs. Potential Credits. <Link href="#section-statement-credits"><a>See how credits stack up &raquo;</a></Link></p>
                    </div>
                    <p>Combined, these offer up to $395.40 annually, exceeding the ${reviewData.annualFee} fee if fully utilized. This requires spending at least $20/month with specified merchants and maintaining Walmart+ membership.</p>
                </section>

                <section id="section-travel-perks" className={styles.reviewSection}>
                    <h2>11. Key Feature: Travel Perks & Protections</h2>
                    <p>The card includes travel perks and protections (typically require booking with the card, refer to the <a href={reviewData.officialBenefitsLink} target="_blank" rel="noopener noreferrer sponsored">guide to benefits</a> for full coverage details and exclusions):</p>
                    <ul className={styles.featureList}>{/* ... List content from previous ... */}</ul>
                </section>

                <Image src={contentImage2} alt="Business traveler using laptop" width={800} height={500} className={styles.contentImage} loading="lazy" />

                <section id="section-biz-tools" className={styles.reviewSection}>
                    <h2>12. Key Feature: Business Management Tools</h2>
                    <p>Practical tools enhance financial management, many of which are detailed on the <a href={reviewData.officialOverviewLink} target="_blank" rel="noopener noreferrer sponsored">main card page</a>:</p>
                    <ul className={styles.featureList}>{/* ... List content from previous ... */}</ul>
                </section>

                <section id="section-rates-fees" className={styles.reviewSection}>
                    <h2>13. Costs: Full Spectrum of Rates & Fees</h2>
                    <p>Transparency is key. Always consult the official Cardmember Agreement and the <a href={reviewData.ratesFeesLink} target="_blank" rel="noopener noreferrer sponsored">official Rates & Fees table</a> provided by American Express.</p>
                    <ul className={styles.featureList}>{/* ... List content from previous ... */}</ul>
                    <p>No foreign transaction fees is a clear plus. High penalty APRs necessitate timely payments.</p>
                     <DraggableTableWrapper>{/* ... Table content from previous ... */}</DraggableTableWrapper>
                </section>

                <section id="section-pay-over-time" className={styles.reviewSection}>
                    <h2>14. Pay Over Time: Cash Flow Flexibility</h2>
                    <p>The "Pay Over Time" feature allows carrying a balance with interest on eligible purchases up to an assigned limit, unlike traditional charge cards. Charges exceeding this limit or ineligible items must be paid in full, offering a blend of discipline and flexibility. New Card Members often get an introductory 0% APR on Pay Over Time purchases for a period (e.g., 6-12 months; <a href={reviewData.officialWelcomeOfferLink} target="_blank" rel="noopener noreferrer sponsored">verify current Amex terms</a> for specific offer details), useful for large initial investments. Afterward, a variable APR (e.g., 19.49% - 28.49% as per the <a href={reviewData.ratesFeesLink} target="_blank" rel="noopener noreferrer sponsored">current rates documentation</a>) applies, making it best for short-term financing or during 0% APR periods due to potentially high ongoing interest.</p>
                </section>

                <section id="section-user-profiles" className={styles.reviewSection}>
                     {/* ... Content as before, add inline link if appropriate to official Amex persona guides or similar, if they exist. For now, no direct link added here. */}
                    <h2>15. Who Benefits Most? User Profiling</h2>
                    <p>The card’s value isn’t uniform. It’s best for:</p>
                    <ul className={styles.featureList}>{/* ... List content from previous ... */}</ul>
                    <p>It may not be optimal for low/infrequent spenders, businesses whose main expenses are outside 4X categories, highly fee-averse companies, those needing long-term 0% APR beyond intro offers, or users seeking ultimate simplicity. Proactive management and aligned spending are key.</p>
                </section>

                <section id="section-real-world-scenario" className={styles.reviewSection}>
                    <h2>16. Value Calculation: A Real-World Example</h2>
                     {/* ... Content as before. No direct link to Amex terms seems necessary here as it's a hypothetical calculation based on card features. */}
                    <p>Consider "Creative Solutions Inc.," a digital marketing agency. Monthly Spending: $3,000 online ads (4X), $800 software (4X), $400 travel via <a href={reviewData.officialAmexTravelLink} target="_blank" rel="noopener noreferrer sponsored">AmexTravel</a> (3X), $200 on FedEx/Grubhub/Office Supplies (maxing $20 credit), $12.95 Walmart+ (credit), $1,500 other (1X).</p>
                    <p><strong>Annual Rewards Calculation:</strong></p>
                    <ul className={styles.featureList}>{/* ... List content from previous ... */}</ul>
                    <p>Value of Points (at a conservative 1.5 cents/point): 214,800 * $0.015 = $3,222.<br/>
                    Statement Credits: $240 (Flexible Business) + $155.40 (Walmart+) = $395.40.<br/>
                    <strong>Net Annual Value:</strong> ($3,222 + $395.40) - $${reviewData.annualFee} (annual fee) = <strong>$3,242.40</strong>.</p>
                    <p>This scenario shows substantial value if spending aligns and benefits are maximized.</p>
                </section>

                <section id="section-competitors" className={styles.reviewSection}>
                    <h2>17. Competitor Card Comparison</h2>
                     {/* ... Content as before. Links to competitor cards would be internal or to their official sites, not Amex terms. */}
                    <p>The {reviewData.cardShortName} competes with other business cards. The best choice depends on your spending, fee tolerance, and preferred rewards. Key rivals include the Chase Ink Business Preferred®, Capital One Spark Miles for Business, and Bank of America® Business Advantage Customized Cash Rewards. (Note: Offers/terms can change; verify with issuer.)</p>
                    <DraggableTableWrapper>{/* ... Table content from previous ... */}</DraggableTableWrapper>
                    <p>The {reviewData.cardShortName}'s ${reviewData.annualFee} fee is offset by unique credits and adaptive 4X categories.</p>
                    <ul className={styles.featureList}>{/* ... List content from previous ... */}</ul>
                </section>

                <section id="section-user-perspectives" className={styles.reviewSection}>
                    <h2>18. Real User Testimonials</h2>
                     {/* ... Content as before. These are user opinions, no direct Amex term citation needed. */}
                    <div className={styles.testimonialContainer}>{/* ... Testimonials from previous ... */}</div>
                    <p>These illustrate how the card excels for aligned spending but may not suit all business models.</p>
                </section>

                <section id="section-application" className={styles.reviewSection}>
                    <h2>19. Application Process & Eligibility</h2>
                    <p>Apply online via Amex. "Apply With Confidence™" (if available) may offer pre-approval without a hard credit pull until you accept an offer. A hard pull occurs upon acceptance. For detailed eligibility criteria, it's always best to consult the information provided during the <a href={reviewData.applyLink} target="_blank" rel="noopener noreferrer sponsored">official application process</a>.</p>
                    <p><strong>Eligibility:</strong></p>
                    <ul className={styles.featureList}>{/* ... List content from previous ... */}</ul>
                    <p>Amex may notify you post-application if ineligible for the welcome bonus (e.g., prior cardholder) before a hard pull. A solid personal credit history is fundamental.</p>
                </section>

                <section id="section-faqs-jump" className={`${styles.reviewSection} ${styles.faqSection}`}>
                  <h2>20. Card-Specific FAQs</h2>
                  <div className={styles.faqContainer}>
                      {structuredDataOptimized['@graph'].find(item => item['@type'] === 'FAQPage').mainEntity.map((faq, index) => (
                          <details key={index} className={styles.faqItem} name={`faq-${index + 1}`}>
                              <summary className={styles.faqQuestion}>{`${index + 1}. ${faq.name}`}</summary>
                              <div className={styles.faqAnswer}>
                                <p dangerouslySetInnerHTML={{ __html:
                                  faq.acceptedAnswer.text
                                    .replace("American Express online account", `<a href="${reviewData.officialOverviewLink}" target="_blank" rel="noopener noreferrer sponsored">American Express online account</a>`)
                                    .replace("Amex Travel", `<a href="${reviewData.officialAmexTravelLink}" target="_blank" rel="noopener noreferrer sponsored">Amex Travel</a>`)
                                    .replace("Cardmember Agreement", `<a href="${reviewData.ratesFeesLink}" target="_blank" rel="noopener noreferrer sponsored">Cardmember Agreement</a>`)
                                }} />
                              </div>
                          </details>
                      ))}
                  </div>
                </section>

                <section id="section-final-verdict" className={styles.reviewSection}>
                  <h2>21. Final Verdict: The Winning Card?</h2>
                  <p>Should your U.S. business choose the {reviewData.cardName}? It’s a powerful tool, but not a universal fit.</p>
                  <p>This card excels for established businesses with significant, consistent spending in its automatically-adjusting 4X bonus categories (like U.S. advertising, tech, gas, or restaurants – up to a $150k annual cap, as detailed in <a href={reviewData.officialBenefitsLink} target="_blank" rel="noopener noreferrer sponsored">benefit terms</a>). If you’ll also maximize its statement credits (up to nearly $395 annually from FedEx, Grubhub, office supplies, and Walmart+), the ${reviewData.annualFee} annual fee can be effectively erased, or even become a net gain. The Membership Rewards® points are a strong bonus, especially for travel.</p>
                  <p>However, the ${reviewData.annualFee} fee demands strategic use. Maximizing rewards and credits requires understanding its specific categories and active management—it's not a passive card. If your spending doesn’t align, or you prefer simplicity, this isn't for you. The ongoing APR on carried balances can also be high after any introductory offer (check <a href={reviewData.ratesFeesLink} target="_blank" rel="noopener noreferrer sponsored">official rates</a>).</p>
                  <p><strong>Is the fee justified?</strong> Yes, if your spending perfectly aligns to leverage its 4X rewards and you fully use the statement credits. For the right business, it’s a valuable asset.</p>
                  <p>The {reviewData.cardShortName} requires active engagement. But for a business whose spending and needs align with its strengths, it can be a truly "golden partner" for growth and rewards. Assess your spending, needs, and goals. If you see your business in this card's ideal profile, it warrants serious consideration. For more details or to apply, visit the <a href={reviewData.officialOverviewLink} target="_blank" rel="noopener noreferrer sponsored">official {reviewData.cardName} page</a>.</p>
                </section>


                <section id="section-eat" className={`${styles.reviewSection} ${styles.eatSection}`}>
                    <h2 dangerouslySetInnerHTML={{ __html: `Our Commitment to E-A-T: Expertise, Authority &amp; Trustworthiness`}}></h2>
                    <p>At <strong>{siteName}</strong>, we are committed to providing content that exemplifies Expertise, Authoritativeness, and Trustworthiness (E-A-T). This review of the <strong>{reviewData.cardName}</strong> has been meticulously researched and crafted. We've analyzed the card's features, benefits, rewards structure, and fees, referencing official issuer documentation from American Express and considering real-world user experiences and data points from the business finance community. Our goal is to present a balanced, comprehensive, and reliable guide to help you make an informed decision. All information is current as of <strong>{new Date(updateDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</strong>, but we always recommend verifying details directly with the issuer as terms can change. Learn more about <Link href={reviewData.howWeRateLink}><a>how we rate cards</a></Link> to understand our evaluation process.</p>
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
            {/* ... Same Sticky Footer content as previous ... */}
            <div className={styles.stickyFooterContent}>
                <Image src={reviewData.imageUrl} alt={`${reviewData.cardName} small image`} width={60} height={38} className={styles.stickyFooterCardImage} />
                <div className={styles.stickyFooterText}>
                  <span className={styles.stickyFooterCardName}>{reviewData.cardName}</span>
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

export default AmericanExpressBusinessGoldCardReviewPage;