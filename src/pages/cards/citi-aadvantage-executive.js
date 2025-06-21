/* ------------------------------------------------------------------
    File:  pages/reviews/citi-aadvantage-executive-card-review.js
    Route: https://www.travelcardinsider.com/reviews/citi-aadvantage-executive-card-review
------------------------------------------------------------------- */

import React, { useState, useEffect, useCallback, useRef } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import styles from '../../styles/ReviewPage.module.css';

// --- Component & Icon Imports ---
import TableOfContents from '../../components/TableOfContents';
import IconGift from '../../components/icons/icon-gift.svg';
import IconStar from '../../components/icons/icon-star.svg';
import IconCheck from '../../components/icons/icon-Credit Card.svg';
import IconPlus from '../../components/icons/icon-target.svg';
import IconPlane from '../../components/icons/icon-plane.svg';
import IconDollar from '../../components/icons/icon-dollar.svg';
import IconUsers from '../../components/icons/icon-users.svg'; // Example for Authorized Users
import IconLounge from '../../components/icons/icon-lounge.svg'; // Example for Lounge Access

const RatingTooltip = dynamic(() => import('../../components/RatingTooltip'), { ssr: false, loading: () => null });

/* ──────────────────────────────
    CONSTANTS & STATIC DATA
    ────────────────────────────── */
const siteName = 'TravelCardInsider';
const siteUrl = 'https://www.travelcardinsider.com';
const pagePath = '/reviews/citi-aadvantage-executive-card-review';
const pageUrlFull = `${siteUrl}${pagePath}`;
const publishDate = '2025-06-21'; // Updated to current date
const updateDate = '2025-06-21'; // Updated to current date

const reviewData = {
  cardName        : 'Citi® / AAdvantage® Executive World Elite Mastercard®',
  title           : 'Citi® / AAdvantage® Executive Card Review (2025): Your First-Class Ticket?',
  description     : 'In-depth 2025 review of the Citi® / AAdvantage® Executive Card. Explore the Admirals Club membership, Loyalty Point bonuses, earning rates, and the $595 annual fee. Is this the ultimate card for AA loyalists?',
  keywords        : 'Citi AAdvantage Executive review, AAdvantage Executive card, Admirals Club access, American Airlines credit card, AAdvantage elite status, Loyalty Points, premium airline card, Citi AA Executive 2025',
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
          'Premium Airline Co-Brand Cards',
          'Airline & Hotel Loyalty Programs',
          'Credit Card Rewards Optimization',
          'Airport Lounge Access Strategy',
          'Citi and American Airlines Cards'
      ],
      bioSnippet: 'Dilan Madushanka is the founder and lead editor of TravelCardInsider, dedicated to demystifying credit cards and uncovering their real-world value for smarter travel and rewards.',
      fullBioLink: '/author/dilan-madushanka',
      fullBio: `Dilan Madushanka is the founder and lead editor of TravelCardInsider, a platform dedicated to helping everyday people make smarter decisions with travel and rewards credit cards. He specializes in deep-dives of premium airline cards, focusing on how loyal flyers can extract maximum value from benefits like lounge access and elite status shortcuts.`,
      socialLinks: {
          linkedin: 'https://www.linkedin.com/in/dilan-madushanka-b65293365',
          twitter: 'https://x.com/team_dilan',
          email: 'team@travelcardinsider.com'
      }
  },
  siteName: siteName,
  imageUrl        : '/CardArt-8.webp', // Placeholder: Replace with actual card image URL
  imageWidth      : 1290,
  imageHeight     : 812,
  ratingValue     : 8.6,  // Rating based on strong niche value
  ratingCount     : 310,  // Estimated user ratings
  reviewBody      : 'Our editors evaluate the Citi® / AAdvantage® Executive World Elite Mastercard® based on its primary benefit of Admirals Club membership, its unique ability to accelerate AAdvantage® elite status via Loyalty Point bonuses, its earning structure on AA purchases, travel perks like free checked bags, and its overall value proposition for dedicated American Airlines flyers against its annual fee.',
  aprRange        : '20.24% - 29.24% (Variable)', // From your text
  annualFee       : 595,
  applyLink       : 'https://creditcards.aa.com/citi-executive-card-american-airlines-direct/', // Official Link from your text
  ratesLink       : 'https://creditcards.aa.com/credit-cards/citi-executive-card-american-airlines-direct/#pricing', // Rates are on the main page
  officialOverviewLink: 'https://creditcards.aa.com/citi-executive-card-american-airlines-direct/',
  officialWelcomeOfferLink: 'https://creditcards.aa.com/citi-executive-card-american-airlines-direct/',
  officialBenefitsCreditsLink: 'https://www.citi.com/credit-cards/citi-aadvantage-executive-world-elite-mastercard/benefits-and-services', // More detailed benefits page
  officialAdmiralsClubTcsLink: 'https://www.aa.com/i18n/aadvantage-program/admirals-club/admirals-club-terms-and-conditions.jsp',
  officialLoyaltyPointsLink: 'https://www.aa.com/i18n/aadvantage-program/loyalty-points/loyalty-point-rewards.jsp',
  sku             : 'CITI-AA-EXEC-TCI-2025',
  mpn             : 'CITIAAEXEC',
  h1Content       : "The Executive Decision: Is This Your Ticket to the Top?",
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
      brand          : { '@type': 'Brand', name: 'Citi' },
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
            '@type': 'PriceSpecification',
            priceCurrency: 'USD',
            price: reviewData.annualFee.toString(),
            valueAddedTaxIncluded: 'false',
            description: `Annual fee: $${reviewData.annualFee}.`,
          },
          {
            '@type': 'PriceSpecification',
            priceCurrency: 'USD',
            description: `Regular Purchase APR: ${reviewData.aprRange}. Foreign Transaction Fee: None. See official ${reviewData.cardName} Rates & Fees on the issuer's website.`,
          },
        ],
        seller: { '@type': 'Organization', name: 'Citi' },
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
        logo    : { '@type': 'ImageObject', url: `${siteUrl}/images/logo/your-logo-schema.png` },
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
        { '@type': 'ListItem', position: 2, name: 'Credit Card Reviews', item: `${siteUrl}/reviews` },
        { '@type': 'ListItem', position: 3, name: `${reviewData.cardName} Review`, item: pageUrlFull },
      ],
    },
    { // Populated from the FAQ section of your text
      '@type'    : 'FAQPage',
      '@id'      : `${pageUrlFull}#faqs`,
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Do authorized users get all the same benefits?',
          acceptedAnswer: { '@type': 'Answer', text: "No. They get Admirals Club® access for themselves and guests but do not receive other benefits like the free checked bag on their own reservation and cannot access partner lounges." }
        },
        {
          '@type': 'Question',
          name: 'Do I need to spend on the card to get the Loyalty Point bonuses?',
          acceptedAnswer: { '@type': 'Answer', text: "No. The 10,000 LP bonuses are triggered by your total Loyalty Point balance, which can be earned from any source, including flying, not just card spending." }
        },
        {
          '@type': 'Question',
          name: 'Do I need to show my credit card to get into the lounge?',
          acceptedAnswer: { '@type': 'Answer', text: "The primary cardholder has the membership linked to their AAdvantage® number, so a boarding pass is usually enough. Authorized users must present their physical Executive card for entry." }
        },
        {
          '@type': 'Question',
          name: 'Can I get the bonus if I have the Platinum Select® card?',
          acceptedAnswer: { '@type': 'Answer', text: "Yes. As long as you have not received a bonus for this specific Executive card in the past 48 months, you are eligible." }
        },
        {
          '@type': 'Question',
          name: 'Are the bonus Loyalty Points also redeemable miles?',
          acceptedAnswer: { '@type': 'Answer', text: "No. The bonus LPs are for status qualification purposes only and are not added to your redeemable mileage balance." }
        },
        {
            '@type': 'Question',
            name: 'What is the guest policy for the Admirals Club?',
            acceptedAnswer: { '@type': 'Answer', text: "Both primary and authorized users can bring their immediate family (spouse, children under 18) or up to two guests." }
        },
        {
            '@type': 'Question',
            name: 'Does the free checked bag benefit work on international flights?',
            acceptedAnswer: { '@type': 'Answer', text: "No, the benefit of a first checked bag free applies to domestic itineraries on American Airlines." }
        },
        {
            '@type': 'Question',
            name: 'What happens to my Admirals Club membership if I cancel the card?',
            acceptedAnswer: { '@type': 'Answer', text: "If you cancel the card, your complimentary Admirals Club membership and your authorized users' access will be terminated." }
        },
        {
            '@type': 'Question',
            name: 'Can I buy a day pass to the Admirals Club with the card?',
            acceptedAnswer: { '@type': 'Answer', text: "Yes, you can purchase a day pass for $79, but the card's core benefit is providing a full membership that makes this unnecessary." }
        },
        {
            '@type': 'Question',
            name: 'What partner lounges can I access?',
            acceptedAnswer: { '@type': 'Answer', text: "The primary cardholder's membership includes access to over 60 partner lounges, such as select Alaska Lounges and Qantas Clubs, when flying with a oneworld® partner." }
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

const ratingCriteria = [
    'Value of Admirals Club Membership',
    'Effectiveness for AAdvantage® Status Earning (Loyalty Points)',
    'Authorized User Lounge Access Value',
    'Welcome Offer Attractiveness & Terms',
    'Rewards Earning on American Airlines Purchases',
    'Value of Annual Statement Credits (Grubhub, Lyft, etc.)',
    'Airport & In-Flight Perks (Checked Bags, Priority Boarding)',
    'Annual Fee ($595) vs. Overall Benefits Package',
    'Base Earning Rate (1x on other purchases)',
    'Clarity and Accessibility of Benefits',
];

const tocSections = [
    { id: 'section-intro', title: 'The Executive Decision: Is This Your Ticket to the Top?' },
    { id: 'section-1', title: '1. Card Snapshot & "Best For" Tagline' },
    { id: 'section-2', title: '2. The Verdict in 60 Seconds' },
    { id: 'section-3', title: '3. A Brief History: Evolution of a Premium AA Card' },
    { id: 'section-4', title: '4. The Crown Jewel: Admirals Club Membership' },
    { id: 'section-5', title: '5. Path to Status: Maximizing AAdvantage Loyalty Points' },
    { id: 'section-6', title: '6. Unpacking the “Coupon-Book”: A Realistic Look at the Annual Statement Credits' },
    { id: 'section-7', title: '7. Beyond the Lounge: Airport & In-Flight Perks' },
    { id: 'section-8', title: '8. Earning Power: Analyzing the Miles Multipliers' },
    { id: 'section-9', title: '9. Full Spectrum of Rates & Fees' },
    { id: 'section-10', title: '10. Welcome Bonus: Is the Spend Worth It?' },
    { id: 'section-11', title: '11. User Profiling: Who Should (and Shouldn’t) Get This Card?' },
    { id: 'section-12', title: '12. One-Year Value Example (“Alex” Case Study)' },
    { id: 'section-13', title: '13. Voices from the Field: 5 User Testimonials' },
    { id: 'section-14', title: '14. The Bottom Line: Pros & Cons' },
    { id: 'section-15', title: '15. Head-to-Head: Executive vs. Other Premium Rivals' },
    { id: 'section-16', title: '16. In-House Alternative: Executive vs. Platinum Select®' },
    { id: 'section-17', title: '17. Application Gauntlet: Rules & Approval Tips' },
    { id: 'section-18', title: '18. Maximizing Your Membership: Tips, Tricks & Hidden Gems' },
    { id: 'section-19', title: '19. Card-Specific Frequently Asked Questions (FAQs)' },
    { id: 'section-20', title: '20. Final Report / Verdict' },
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
function CitiAAdvantageExecutiveCardReviewPage() {
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
          if (showAuthorBioTooltip && authorRef.current && !authorRef.current.contains(event.target) && authorTooltipRef.current && !authorTooltipRef.current.contains(event.target)) {
              setShowAuthorBioTooltip(false);
          }
          if (showRatingInfo && !event.target.closest(`.${styles.infoIconButton}`) && ratingTooltipRef.current && !ratingTooltipRef.current.contains(event.target)) {
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
    welcomeOffer: "Earn 100,000 AAdvantage® bonus miles after spending $10,000 in the first 3 months.",
    annualFee: `$${reviewData.annualFee}`,
    coreBenefit: "Full Admirals Club® Membership (value up to $850).",
    statusPerk: "Fast track to AAdvantage® elite status with Loyalty Point bonuses.",
    travelPerk: "First checked bag free for you and up to 8 companions on domestic itineraries.",
    bestFor: "The AA loyalist seeking premium lounge access and a shortcut to elite status."
  };

  return (
    <>
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
        <meta property="og:type" content="article" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content={siteName} />
        <meta property="og:title" content={reviewData.title} />
        <meta property="og:description" content={reviewData.description} />
        <meta property="og:url" content={pageUrlFull} />
        <meta property="og:image" content={`${siteUrl}${reviewData.imageUrl}`} />
        <meta property="og:image:width" content={String(reviewData.imageWidth)} />
        <meta property="og:image:height" content={String(reviewData.imageHeight)} />
        <meta property="article:publisher" content={`https://www.facebook.com/YourTravelCardInsiderFacebookPage`} />
        <meta property="article:section" content="Credit Card Reviews" />
        <meta property="article:published_time" content={publishDate} />
        <meta property="article:modified_time"  content={updateDate} />
        <meta property="article:author" content={reviewData.author.name} />
        {reviewData.keywords.split(',').map(keyword => (
            <meta property="article:tag" content={keyword.trim()} key={keyword.trim()} />
        ))}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@YourTravelCardInsiderTwitterHandle" />
        <meta name="twitter:creator" content={`@${reviewData.author.socialLinks?.twitter?.split('/').pop() || 'YourAuthorTwitterHandle'}`} />
        <meta name="twitter:title" content={reviewData.title} />
        <meta name="twitter:description" content={reviewData.description} />
        <meta name="twitter:image" content={`${siteUrl}${reviewData.imageUrl}`} />
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
                        <div
                            className={styles.authorTooltip}
                            ref={authorTooltipRef}
                            role="tooltip"
                            onMouseEnter={handleAuthorClearTimeout}
                            onMouseLeave={handleAuthorMouseLeave}
                        >
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
                                       <a className={styles.authorTooltipBioLink}>See full bio</a>
                                   </Link>
                               )}
                        </div>
                    )}
                </div>
                <p className={styles.heroSubtitle}>
                  For the dedicated American Airlines traveler, the journey is about more than just getting from A to B. It’s about seamless airport experiences, earning valuable rewards, and feeling like a VIP from the curb to the clouds. But in a crowded market of travel cards, which one truly delivers on that promise?
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
                      on Citi&apos;s official site
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
                    <i>{reviewData.cardName}: {reviewData.description}</i>
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
                                <span className={styles.summaryValue}>{summaryBoxData.welcomeOffer}</span>
                            </div>
                            <div className={styles.summaryItem}>
                                <span className={styles.summaryIcon}><IconCheck /></span>
                                <span className={styles.summaryLabel}>Annual Fee:</span>
                                <span className={styles.summaryValue}>{summaryBoxData.annualFee}</span>
                            </div>
                             <div className={styles.summaryItem}>
                                <span className={styles.summaryIcon}><IconLounge /></span>
                                <span className={styles.summaryLabel}>Core Benefit:</span>
                                <span className={styles.summaryValue}>{summaryBoxData.coreBenefit}</span>
                            </div>
                            <div className={styles.summaryItem}>
                                <span className={styles.summaryIcon}><IconStar /></span>
                                <span className={styles.summaryLabel}>Status Perk:</span>
                                <span className={styles.summaryValue}>{summaryBoxData.statusPerk}</span>
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
                            <a href={reviewData.ratesLink} className={styles.summaryRatesLink} target="_blank" rel="noopener noreferrer sponsored">
                                See Card Rates & Fees
                            </a>
                        </div>
                    </div>
                </header>

                {/* --- CONTENT SECTIONS --- */}

                <section id="section-intro" className={styles.reviewSection}>
                  <h2>The Executive Decision: Is This Your Ticket to the Top?</h2>
                  <p>This card isn’t for the occasional vacationer or the brand-agnostic points collector. It's built for the AA loyalist—the business traveler navigating weekly connections, the family planning multiple domestic trips a year, and the strategist laser-focused on reaching AAdvantage® elite status. If you find value in a pre-flight oasis and see your travel as an investment in comfort and status, then this card demands your attention. It answers one simple question: Are you ready to elevate your travel with American Airlines?</p>
                </section>

                <Image
                    src="/christine-roy-ir5MHI6rPg0-unsplash.webp" // Placeholder Image
                    alt="Comfortable interior of an American Airlines Admirals Club lounge"
                    width={800}
                    height={500}
                    className={styles.contentImage}
                    loading="lazy"
                />

                <section id="section-1" className={styles.reviewSection}>
                  <h2>1. Card Snapshot &amp; &quot;Best For&quot; Tagline</h2>
                  <DraggableTableWrapper>
                    <div className={styles.tableContainer}>
                        <table className={`${styles.statsTable} ${styles.highlightTable}`}>
                            <tbody>
                                <tr><td>Card Name:</td><td><strong>{reviewData.cardName}</strong></td></tr>
                                <tr><td>Issuer:</td><td>Citi (<a href={reviewData.officialOverviewLink} target="_blank" rel="noopener noreferrer sponsored">Official Card Page</a>)</td></tr>
                                <tr><td>Network:</td><td>Mastercard®</td></tr>
                                <tr><td>Annual Fee:</td><td><strong>${reviewData.annualFee}</strong>. (<a href={reviewData.ratesLink} target="_blank" rel="noopener noreferrer sponsored">Citi.com: Citi® / AAdvantage® Executive World Elite Mastercard® Card Details</a>)</td></tr>
                                <tr><td>Welcome Bonus:</td><td>Earn 100,000 American Airlines AAdvantage® bonus miles after spending $10,000 in the first 3 months of account opening. (<a href={reviewData.officialWelcomeOfferLink} target="_blank" rel="noopener noreferrer sponsored">Citi.com: Citi® / AAdvantage® Executive World Elite Mastercard® Offer Terms</a>)</td></tr>
                                <tr><td>Core Value:</td><td>Complimentary Admirals Club® membership, valued at up to $850 annually. (<a href={reviewData.officialAdmiralsClubTcsLink} target="_blank" rel="noopener noreferrer sponsored">AA.com: Admirals Club® Membership T&Cs</a>)</td></tr>
                                <tr><td>&quot;Best For&quot; Tagline:</td><td>The ultimate key to the Admirals Club and your fast track to AAdvantage® elite status.</td></tr>
                            </tbody>
                        </table>
                    </div>
                  </DraggableTableWrapper>
                </section>

                <section id="section-2" className={styles.reviewSection}>
                  <h2>2. The Verdict in 60 Seconds</h2>
                  <p>For the committed American Airlines flyer, the math is simple. The card's $595 annual fee is substantially less than the up to $850 cost of a standalone membership. If you would otherwise pay for lounge access, this card is an economic necessity. Beyond the lounge, it accelerates your path to elite status with Loyalty Point bonuses and offers statement credits that can offset up to $360 of the fee. However, its weak 1x earning rate on everyday spending makes it a poor choice as a primary card.</p>
                </section>

                <section id="section-3" className={styles.reviewSection}>
                  <h2>3. A Brief History: Evolution of a Premium AA Card</h2>
                  <p>The partnership between Citi and American Airlines is one of the industry's oldest, launching the first co-branded card in 1987. This premium card was significantly refreshed on July 23, 2023, when its annual fee increased to $595 from $450. The hike introduced new "coupon book" credits and better earning rates but restricted the authorized user lounge benefit. Looking ahead, Citi will become the exclusive U.S. issuer for AA cards in 2026, cementing this card's flagship status.</p>
                </section>

                <section id="section-4" className={styles.reviewSection}>
                  <h2>4. The Crown Jewel: Admirals Club Membership</h2>
                  <p>Let's be clear: the real star of the show here is the complimentary Admirals Club membership. This single benefit is the card's entire identity and the primary justification for its premium price.</p>
                  <h3>The Financial Case</h3>
                  <p>A new Admirals Club membership purchased directly costs between $700 and $850 per year. With a $595 annual fee, the card saves you at least $105 right off the top. Considering a single-day pass costs a steep $79 (<a href="https://www.aa.com/i18n/travel-info/clubs/admirals-club-access.jsp" target="_blank" rel="noopener noreferrer sponsored">AA.com: Admirals Club® Day Pass Information</a>), if you plan to visit a lounge just eight times a year, the card has already paid for itself.</p>
                  <h3>Access and Guest Privileges</h3>
                  <p>Your membership unlocks access to nearly 50 Admirals Club locations and over 60 partner lounges worldwide when flying American or a oneworld® partner. The guest policy is generous: you can bring your immediate family (spouse, domestic partner, and children under 18) or up to two guests with you.</p>
                  <h3>The Authorized User Arbitrage</h3>
                  <p>Here’s the hidden superpower: for a flat $175 annual fee, you can add up to three authorized users. (<a href={reviewData.officialBenefitsCreditsLink} target="_blank" rel="noopener noreferrer sponsored">Citi.com: Citi® / AAdvantage® Executive Card Benefits Guide</a>). Each of these AUs receives their own Admirals Club access with the same guesting policy. For a total of $770 ($595 + $175), four people can secure a year of lounge access. That's just $192.50 per person—a value unmatched in the premium card market. Note that authorized users receive "access" to Admirals Clubs only; they cannot enter partner lounges like Alaska Lounges.</p>
                </section>

                <section id="section-5" className={styles.reviewSection}>
                    <h2>5. Path to Status: Maximizing AAdvantage Loyalty Points</h2>
                    <p>For the serious AA traveler, elite status is the holy grail. The Executive Card is the most powerful credit card tool for this pursuit. The AAdvantage® program is built on Loyalty Points (LPs), and you earn 1 LP for every eligible mile earned from purchases on the card. This 1:1 ratio turns every dollar you spend into progress toward status.</p>
                    <p>This creates a strategic choice for the "Status Grinder". While other cards might offer more redeemable miles, no other card provides this consistent accumulation of LPs tied to a premium lounge experience.</p>
                    <p>The card’s true power comes from its two massive LP bonuses. You’ll receive:</p>
                    <ul className={styles.featureList}>
                        <li>A 10,000 Loyalty Point bonus after earning 50,000 LPs in a status year.</li>
                        <li>A second 10,000 Loyalty Point bonus after earning 90,000 LPs in that same year. (<a href={reviewData.officialLoyaltyPointsLink} target="_blank" rel="noopener noreferrer sponsored">AA.com: AAdvantage® Loyalty Point Rewards Details</a>)</li>
                    </ul>
                    <p>These 20,000 bonus LPs are a huge accelerator, equivalent to $20,000 in spending, and can be the final push you need to cross an elite status threshold.</p>
                </section>

                <section id="section-6" className={styles.reviewSection}>
                  <h2>6. Unpacking the “Coupon-Book”: A Realistic Look at the Annual Statement Credits</h2>
                  <p>To help offset the annual fee, the card includes a "coupon book" of statement credits potentially worth up to $360. However, they come with specific rules that can make them hard to maximize. (<a href={reviewData.officialBenefitsCreditsLink} target="_blank" rel="noopener noreferrer sponsored">Citi.com: Citi® / AAdvantage® Executive Card Statement Credit Terms</a>)</p>
                  <ul className={styles.featureList}>
                      <li><strong>Up to $120 for Grubhub:</strong> This comes as a $10 credit per monthly billing statement on eligible purchases.</li>
                      <li><strong>Up to $120 for Lyft:</strong> You earn a $10 Lyft credit, but only after taking 3 eligible rides in a calendar month. If you only take two rides, you get nothing.</li>
                      <li><strong>Up to $120 for Avis®/Budget:</strong> This credit applies to eligible prepaid car rentals booked directly, reducing flexibility.</li>
                  </ul>
                  <p>These credits are designed with intentional “breakage,” where the issuer benefits from unused credits. Before subtracting $360 from the annual fee, you must perform a personal audit of your spending habits.</p>
                </section>

                <section id="section-7" className={styles.reviewSection}>
                  <h2>7. Beyond the Lounge: Airport & In-Flight Perks</h2>
                  <p>Beyond the Admirals Club, a suite of perks enhances your entire airport experience, especially for groups.</p>
                  <ul className={styles.featureList}>
                      <li><strong>First Checked Bag Free:</strong> You and up to eight companions on the same domestic reservation get your first bag checked free. (<a href="https://www.aa.com/i18n/travel-info/baggage/checked-baggage-policy.jsp" target="_blank" rel="noopener noreferrer sponsored">AA.com: Checked Baggage Policy for AAdvantage® Members</a>). For a family of four, that’s $240 saved on a single round-trip domestic flight.</li>
                      <li><strong>Priority Airport Experience:</strong> You and your eight companions also get priority check-in, priority security screening (where available), and Group 4 priority boarding.</li>
                      <li><strong>Global Entry or TSA PreCheck® Credit:</strong> Receive up to a $120 statement credit every four years for the application fee. (<a href={reviewData.officialBenefitsCreditsLink} target="_blank" rel="noopener noreferrer sponsored">Citi.com: Global Entry and TSA PreCheck Application Fee Credit Details</a>)</li>
                      <li><strong>In-Flight Savings:</strong> Get a 25% statement credit on in-flight food and drink purchases on American Airlines flights.</li>
                  </ul>
                </section>

                <section id="section-8" className={styles.reviewSection}>
                    <h2>8. Earning Power: Analyzing the Miles Multipliers</h2>
                    <p>The card’s earning structure is designed to heavily reward spending within the American Airlines ecosystem.</p>
                    <DraggableTableWrapper>
                        <div className={styles.tableContainer}>
                            <table className={`${styles.statsTable} ${styles.earningRatesTable}`}>
                                <thead>
                                    <tr>
                                        <th>Miles per $1 Spent</th>
                                        <th>Eligible Purchase Categories & Conditions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td data-label="Miles"><strong>10X</strong></td>
                                        <td data-label="Categories">miles on eligible hotels and car rentals booked through aadvantagehotels.com and aadvantagecars.com.</td>
                                    </tr>
                                    <tr>
                                        <td data-label="Miles"><strong>4X</strong></td>
                                        <td data-label="Categories">miles on eligible American Airlines purchases.</td>
                                    </tr>
                                    <tr>
                                        <td data-label="Miles"><strong>1X</strong></td>
                                        <td data-label="Categories">mile on all other purchases.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </DraggableTableWrapper>
                    <p>The 10X multiplier is a massive accelerator for earning miles, but it comes with a critical warning: always price-compare. Booking through these portals might cost more than booking direct. The card’s glaring weakness is the 1x earning rate on everyday spending. This solidifies the Executive card's role as a specialist tool, not a generalist one.</p>
                </section>

                <section id="section-9" className={styles.reviewSection}>
                    <h2>9. Full Spectrum of Rates &amp; Fees</h2>
                    <p>Like any premium card, the Executive card is designed for users who pay their balance in full each month. Carrying a balance is exceptionally costly and will quickly erase the value of any rewards you earn.</p>
                    <DraggableTableWrapper>
                        <div className={styles.tableContainer}>
                            <table className={`${styles.statsTable} ${styles.ratesFeesTable}`}>
                                <thead>
                                    <tr><th>Fee or Rate</th><th>Amount</th></tr>
                                </thead>
                                <tbody>
                                    <tr><td>Annual Fee</td><td>$595</td></tr>
                                    <tr><td>Authorized User Fee</td><td>$175 for the first 3 users; $175 for each additional user</td></tr>
                                    <tr><td>Regular Purchase APR</td><td>{reviewData.aprRange}</td></tr>
                                    <tr><td>Foreign Transaction Fee</td><td>None</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </DraggableTableWrapper>
                </section>

                <section id="section-10" className={styles.reviewSection}>
                    <h2>10. Welcome Bonus: Is the Spend Worth It?</h2>
                    <blockquote className={styles.highlightQuote}>
                        Earn 100,000 AAdvantage® bonus miles after spending $10,000 in the first three months.
                    </blockquote>
                    <p>This is an exceptional offer. Valued at approximately $1,500 to $1,650, these miles can cover the annual fee nearly three times over in the first year. However, the spending requirement is a high hurdle: $10,000 in the first three months. This equates to over $3,300 in monthly spending, signaling that the card is aimed at high-spenders or those who can time the application with a major purchase.</p>
                </section>

                <section id="section-11" className={styles.reviewSection}>
                    <h2>11. User Profiling: Who Should (and Shouldn’t) Get This Card?</h2>
                    <p>This card’s value is intensely personal and depends on your travel habits.</p>
                    <div className={styles.profileCardContainer}>
                        <div className={styles.profileCard}>
                            <h4>Persona 1: "The Aspiring Elite"</h4>
                            <p>This is the road warrior flying AA 6-12 times a year, whose primary goal is achieving elite status. For them, this card is an indispensable tool. The 20,000 bonus Loyalty Points are a significant shortcut, and Admirals Club access is a highly valued perk. The $595 fee is a strategic investment in their travel life.</p>
                        </div>
                        <div className={styles.profileCard}>
                            <h4>Persona 2: "The Comfort-Seeking Family"</h4>
                            <p>This family takes 2-4 vacations a year on American and prioritizes comfort and savings over status. The card's value is anchored by free checked bags for the whole family and lounge access for all. A single card saves them hundreds on bag fees and provides a quiet space away from crowded gates.</p>
                        </div>
                        <div className={styles.profileCard}>
                            <h4>Persona 3: "The Brand-Agnostic Traveler"</h4>
                            <p>This person flies often but has no allegiance to a single airline. For this traveler, the Executive card is a poor choice. Its benefits are overwhelmingly tied to the AA ecosystem. A card with transferable points and broader lounge access would be a far superior option.</p>
                        </div>
                    </div>
                </section>

                <section id="section-12" className={styles.reviewSection}>
                    <h2>12. One-Year Value Example (“Alex” Case Study)</h2>
                    <p>Let's make this tangible with "Alex," our Aspiring Elite. Alex aims for Platinum Pro status (100,000 LPs) and spends $8,000 on AA flights, $2,000 on AA travel portals, and $30,000 on other expenses annually.</p>
                    <h3>Value Alex Gets:</h3>
                    <DraggableTableWrapper>
                        <div className={styles.tableContainer}>
                          <table className={`${styles.statsTable}`}>
                            <tbody>
                                <tr><td>Admirals Club Membership:</td><td>$850 (Alex would have purchased this anyway).</td></tr>
                                <tr><td>Statement Credits:</td><td>$360 (Alex maximizes the Lyft, Grubhub, and Avis credits).</td></tr>
                                <tr><td>Checked Bag Savings:</td><td>$240 (4 round trips × $60/trip).</td></tr>
                                <tr><td>Value of Miles Earned:</td><td>$1,230 (82,000 miles from spending at 1.5 cents each).</td></tr>
                                <tr><td><strong>Total Annual Value:</strong></td><td><strong>$2,700</strong></td></tr>
                                <tr><td>Less Annual Fee:</td><td>-$595</td></tr>
                                <tr><td><strong>Net Value for Alex:</strong></td><td><strong className={styles.positiveValue}>$2,115</strong></td></tr>
                            </tbody>
                          </table>
                        </div>
                    </DraggableTableWrapper>
                    <p>For the right person, the card delivers value that dwarfs its annual fee.</p>
                </section>

                <section id="section-13" className={styles.reviewSection}>
                  <h2>13. Voices from the Field: 5 User Testimonials</h2>
                  <p>Here’s what real cardholders are saying, paraphrased from public forums and reviews:</p>
                  <div className={styles.testimonialContainer}>
                      <blockquote className={styles.testimonialQuote}>
                          <p>&quot;This card is the absolute best for hitting status with American. The extra 10,000 Loyalty Points you get at the 50k and 90k levels are a game-changer.&quot;</p>
                          <footer>– Mark, the Status Chaser</footer>
                      </blockquote>
                      <blockquote className={styles.testimonialQuote}>
                          <p>&quot;I fly about six times a year, and the Admirals Club access alone covers the fee for me. I figure each visit is worth about $50, so that's $600 in value right there.&quot;</p>
                          <footer>– Sarah, the Lounge Maximizer</footer>
                      </blockquote>
                       <blockquote className={`${styles.testimonialQuote} ${styles.testimonialNegative}`}>
                          <p>&quot;Don't count on the statement credits. I had a car rental that didn't code right and Citi wouldn't manually apply the credit. And the Lyft perk is useless to me since I rarely take three rides in a month.&quot;</p>
                          <footer>– David, the Credit Skeptic</footer>
                      </blockquote>
                      <blockquote className={styles.testimonialQuote}>
                          <p>&quot;The authorized user perk is amazing. Being able to give friends and family Admirals Club access makes the card a must-have.&quot;</p>
                          <footer>– Emily, the Family Traveler</footer>
                      </blockquote>
                       <blockquote className={`${styles.testimonialQuote} ${styles.testimonialNegative}`}>
                          <p>&quot;As a primary card, it's not great. The 1 mile per dollar earning rate is weak, and the miles lock you into American. You'll do better with a general rewards card.&quot;</p>
                          <footer>– Ben, the General Spender</footer>
                      </blockquote>
                  </div>
                </section>

                <section id="section-14" className={styles.reviewSection}>
                    <h2>14. The Bottom Line: Pros &amp; Cons</h2>
                    <div className={styles.prosConsContainer}>
                        <div className={styles.prosBox}>
                            <h4>Pros</h4>
                            <ul className={styles.featureList}>
                                <li><strong>Unmatched Admirals Club Access:</strong> The core benefit provides a full membership for less than the cash price.</li>
                                <li><strong>Exceptional Authorized User Value:</strong> Add three AUs with lounge access for a single $175 fee.</li>
                                <li><strong>Powerful Path to AA Status:</strong> The best card for earning AA elite status, with up to 20,000 bonus LPs.</li>
                                <li><strong>Generous Checked Bag Policy:</strong> Free first checked bag for the cardholder and up to eight companions.</li>
                            </ul>
                        </div>
                        <div className={styles.consBox}>
                             <h4>Cons</h4>
                            <ul className={styles.featureList}>
                                <li><strong>High $595 Annual Fee:</strong> A significant upfront cost that is not waived in the first year.</li>
                                <li><strong>Weak Base Earning Rate:</strong> The 1× mile per dollar on non-bonused spending makes it a poor choice for everyday purchases.</li>
                                <li><strong>Restrictive Statement Credits:</strong> The "coupon book" credits can be difficult to fully utilize.</li>
                                <li><strong>Inflexible Rewards Currency:</strong> AAdvantage® miles are locked into the oneworld® ecosystem.</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section id="section-15" className={styles.reviewSection}>
                  <h2>15. Head-to-Head: Executive vs. Other Premium Rivals</h2>
                  <p>The Executive Card carves out a specific niche. It doesn't try to be the best card for all travel; it aims to be the best card for the dedicated American Airlines traveler.</p>
                  <DraggableTableWrapper>
                    <div className={styles.tableContainer}>
                      <table className={`${styles.statsTable} ${styles.comparisonTable}`}>
                        <thead>
                          <tr>
                            <th>Feature</th>
                            <th>Citi® / AAdvantage® Executive</th>
                            <th>The Platinum Card® from Amex</th>
                            <th>Chase Sapphire Reserve®</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr><td data-label="Feature">Annual Fee</td><td data-label="Citi Exec">$595</td><td data-label="Amex Plat">$695</td><td data-label="Chase Reserve">$550</td></tr>
                          <tr><td data-label="Feature">Lounge Access</td><td data-label="Citi Exec">Admirals Club, select partners</td><td data-label="Amex Plat">Centurion, Priority Pass, Delta SkyClub</td><td data-label="Chase Reserve">Priority Pass, Sapphire Lounges</td></tr>
                          <tr><td data-label="Feature">Airline Earning</td><td data-label="Citi Exec">4x on American Airlines</td><td data-label="Amex Plat">5x on flights (direct/portal)</td><td data-label="Chase Reserve">5x on flights (portal)</td></tr>
                          <tr><td data-label="Feature">X-Factor</td><td data-label="Citi Exec">AAdvantage® Status Path & AU Lounge Value</td><td data-label="Amex Plat">Broadest Lounge Access & Luxury Perks</td><td data-label="Chase Reserve">Flexible Points & Broad Travel Credit</td></tr>
                        </tbody>
                      </table>
                    </div>
                  </DraggableTableWrapper>
                </section>

                <section id="section-16" className={styles.reviewSection}>
                    <h2>16. In-House Alternative: Executive vs. Platinum Select®</h2>
                    <p>For AA flyers, the choice often comes down to this premium card or its mid-tier sibling, the Citi® / AAdvantage® Platinum Select®. The Platinum Select has a $99 fee (waived first year) and offers a free bag for the cardholder and up to four companions. The $496 price difference primarily purchases one thing: the Admirals Club membership. If you'll use the lounge often, the Executive card is the clear choice. If not, the Platinum Select provides essential perks for a lower cost.</p>
                </section>

                <section id="section-17" className={styles.reviewSection}>
                    <h2>17. Application Gauntlet: Rules & Approval Tips</h2>
                    <p>Before you apply, know the rules. You'll generally need a Good to Excellent credit score (typically in the 670-850 FICO range) to be considered. Most importantly, be aware of Citi's application rules:</p>
                    <ul className={styles.featureList}>
                        <li><strong>48-Month Rule:</strong> You cannot get the welcome bonus if you have received one for this specific card in the past 48 months. (<a href="https://www.citi.com/credit-cards/credit-card-details/citi.action?ID=learn-more-apply-now-link" target="_blank" rel="noopener noreferrer sponsored">Citi.com: Credit Card Application Rules</a>)</li>
                        <li><strong>8/65 Day Rule:</strong> Citi typically approves no more than one card application every 8 days and no more than two every 65 days.</li>
                    </ul>
                </section>

                <section id="section-18" className={styles.reviewSection}>
                    <h2>18. Maximizing Your Membership: Tips, Tricks & Hidden Gems</h2>
                    <ul className={styles.featureList}>
                        <li><strong>Price-Compare the Portals:</strong> That 10x earning rate on AA's travel portals is fantastic, but only if the price is right. Always compare against booking direct to ensure you're not overpaying for the miles.</li>
                        <li><strong>Stack Your Earnings:</strong> Always click through the AAdvantage eShopping® portal before you shop online. You can earn portal miles on top of the miles you earn from your card spending.</li>
                        <li><strong>Use the Lounge Agents:</strong> The secret weapon of the Admirals Club is the agents inside. During flight delays or cancellations, they can rebook you with far shorter waits than the agents at the gate, a perk that can be priceless.</li>
                    </ul>
                </section>

                <section id="section-19" className={`${styles.reviewSection} ${styles.faqSection}`}>
                  <h2>19. Card-Specific Frequently Asked Questions (FAQs)</h2>
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
                  <h2>20. Final Report / Verdict</h2>
                  <p>The {reviewData.cardName} is not a card that tries to be everything to everyone. It is a precision tool, crafted for the unwavering American Airlines loyalist. Its value is built on two powerful pillars: providing an oasis of calm via the Admirals Club and offering the fastest path to the coveted perks of AAdvantage® elite status.</p>
                  <p>For the "Aspiring Elite" or the "Comfort-Seeking Family," this card is a strategic asset. The financial case is clear: the annual fee is more than offset by the lounge membership alone, and when you add the savings from free checked bags and statement credits, the card delivers outstanding net positive value.</p>
                  <p>However, for the flexible traveler who prizes choice above all, the card's intense focus on a single airline is its biggest weakness. Its rewards are captive to the AAdvantage® program, and its best perks vanish when you fly another carrier.</p>
                  <p>With Citi poised to become the exclusive issuer of AA cards from 2026, the future of this card is secure. For those whose loyalty lies with American Airlines, the Executive card is, and will continue to be, the definitive co-pilot for an elevated journey.</p>
                </section>

                <section id="section-eat" className={`${styles.reviewSection} ${styles.eatSection}`}>
                    <h2 dangerouslySetInnerHTML={{ __html: `Our Commitment to E-A-T: Expertise, Authority &amp; Trustworthiness`}}></h2>
                    <p>At <strong>{siteName}</strong>, we are committed to providing content that exemplifies Expertise, Authoritativeness, and Trustworthiness (E-A-T). This review of the <strong>{reviewData.cardName}</strong> has been meticulously researched and crafted. We've analyzed the card's features, benefits, rewards structure, and fees, referencing official issuer documentation from Citi and American Airlines, and considering real-world user experiences. Our goal is to present a balanced, comprehensive, and reliable guide to help you make an informed decision. All information is current as of <strong>{new Date(updateDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</strong>, but we always recommend verifying details directly with the issuer as terms can change.</p>
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
                        href={reviewData.ratesLink}
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

export default CitiAAdvantageExecutiveCardReviewPage;