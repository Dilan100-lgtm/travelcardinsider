/* ------------------------------------------------------------------
    File:  pages/reviews/chase-sapphire-preferred-card-review.js
    Route: https://www.travelcardinsider.com/reviews/chase-sapphire-preferred-card-review
------------------------------------------------------------------- */

import React, { useState, useEffect, useCallback, useRef } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import styles from '../../styles/ReviewPage.module.css'; // Assuming same CSS module as Amex Gold

// --- Import your custom components. Ensure paths are correct. ---
import TableOfContents from '../../components/TableOfContents';
import IconGift from '../../components/icons/icon-gift.svg'; // UPDATE AS NEEDED
import IconStar from '../../components/icons/icon-star.svg'; // UPDATE AS NEEDED
import IconCheck from '../../components/icons/icon-Credit Card.svg'; // UPDATE AS NEEDED (e.g., fee icon)
import IconPlus from '../../components/icons/icon-target.svg'; // UPDATE AS NEEDED (e.g., 'Best For' icon)
import IconPlane from '../../components/icons/icon-plane.svg'; // UPDATE AS NEEDED
import IconDollar from '../../components/icons/icon-dollar.svg'; // UPDATE AS NEEDED (e.g., credits icon)
import IconShield from '../../components/icons/icon-shield.svg'; // EXAMPLE: for insurance/protections

const RatingTooltip = dynamic(() => import('../../components/RatingTooltip'), { ssr: false, loading: () => null });

/* ──────────────────────────────
    CONSTANTS & STATIC DATA
    ────────────────────────────── */
const siteName = 'Travelcardinsider'; // UPDATE AS NEEDED
const siteUrl = 'https://www.travelcardinsider.com'; // UPDATE AS NEEDED
const pagePath = '/reviews/chase-sapphire-preferred-card-review'; // UPDATE AS NEEDED
const pageUrlFull = `${siteUrl}${pagePath}`;
const publishDate = '2025-06-20'; // UPDATE AS NEEDED
const updateDate = '2025-06-20'; // UPDATE AS NEEDED

const reviewDataNew = {
  cardName        : 'Chase Sapphire Preferred® Card',
  title           : 'Chase Sapphire Preferred® Card Review (2025): The Ultimate Travel Starter Kit?',
  description     : 'In-depth 2025 review of the Chase Sapphire Preferred®. Explore the 60,000 point bonus, 5x travel rewards, $50 hotel credit, and the best ways to use Ultimate Rewards®. Is this the best travel card for you?',
  keywords        : 'Chase Sapphire Preferred review, CSP, Ultimate Rewards, Chase travel portal, best travel credit card, Chase Sapphire benefits, Chase points, travel rewards card',
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
          'Beginner Travel Rewards Cards',
          'Airline & Hotel Loyalty Programs',
          'Credit Card Rewards Optimization',
          'Chase Ultimate Rewards®',
          'Mid-tier Travel Cards'
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
  imageUrl        : '/chase-sapphire-preferred-card-hero.png', // Placeholder: Replace with actual CSP card image URL
  imageWidth      : 1290,
  imageHeight     : 812,
  ratingValue     : 9.2,  // Placeholder - UPDATE AS NEEDED
  ratingCount     : 310,  // Placeholder - UPDATE AS NEEDED
  reviewBody      : 'Our editors evaluate the Chase Sapphire Preferred® Card based on its valuable Ultimate Rewards® earning structure (5X on Chase Travel℠, 3X on dining), powerful welcome bonus, flexible redemption options including 1:1 partner transfers, comprehensive travel protections like primary auto rental insurance, and its overall value proposition for travelers new to rewards.',
  aprRange        : '21.49%–28.49% variable APR.', // From your text, updated
  annualFee       : 95,
  // IMPORTANT: REPLACE WITH YOUR ACTUAL AFFILIATE LINK
  applyLink       : 'https://creditcards.chase.com/rewards-credit-cards/sapphire/preferred', //
  // Official links from your citations
  ratesLink       : 'https://creditcards.chase.com/rewards-credit-cards/sapphire/preferred', // Users find "Pricing & Terms" here
  officialOverviewLink: 'https://creditcards.chase.com/rewards-credit-cards/sapphire/preferred', //
  officialWelcomeOfferLink: 'https://creditcards.chase.com/rewards-credit-cards/sapphire/preferred', //
  officialBenefitsLink: 'https://www.chase.com/personal/credit-cards/sapphire/preferred/benefits', //
  officialUltimateRewardsLink: 'https://www.chase.com/personal/credit-cards/ultimate-rewards', //
  officialTransferPartnersLink: 'https://www.chase.com/personal/credit-cards/ultimate-rewards/transfer-partners', //
  officialDoorDashLink: 'https://www.chase.com/personal/credit-cards/doordash', //
  officialGuideToBenefitsLink: 'https://www.chase.com/card-benefits/sapphire-preferred/travel', // General link
  sku             : 'CHASE-CSP-TCI-2025', // Placeholder
  mpn             : 'CSPREF', // Placeholder
  h1Content       : "Chase Sapphire Preferred® Review: The Perennial Favorite for Aspiring Travelers",
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
            description          : `Purchase APR: ${reviewDataNew.aprRange}. Foreign Transaction Fee: $0. See official ${reviewDataNew.cardName} Pricing & Terms on the issuer's website.`,
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
      author          : { '@type': 'Person', 'name': reviewDataNew.author.name, 'url': reviewDataNew.author.fullBioLink ? `${siteUrl}${reviewDataNew.author.fullBioLink}` : undefined },
      publisher       : { '@type' : 'Organization', name: siteName, logo: { '@type': 'ImageObject', url: `${siteUrl}/images/logo/your-logo-schema.png` } }, // /* UPDATE THIS */
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
       author: { '@type': 'Person', 'name': reviewDataNew.author.name, 'url': reviewDataNew.author.fullBioLink ? `${siteUrl}${reviewDataNew.author.fullBioLink}` : undefined },
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
        { '@type': 'ListItem', position: 2, name: 'Credit Card Reviews', item: `${siteUrl}/reviews` }, // UPDATE AS NEEDED
        { '@type': 'ListItem', position: 3, name: `${reviewDataNew.cardName} Review`, item: pageUrlFull },
      ],
    },
    { // Populated from Section 18 of your text
      '@type'    : 'FAQPage',
      '@id'      : `${pageUrlFull}#faqs`,
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What credit score do I need?',
          acceptedAnswer: { '@type': 'Answer', text: "Generally, a good to excellent FICO score of 690 or higher is required." }
        },
        {
          '@type': 'Question',
          name: 'Is the annual fee waived the first year?',
          acceptedAnswer: { '@type': 'Answer', text: "No, the $95 fee appears on your first billing statement." }
        },
        {
          '@type': 'Question',
          name: 'Can I have this card and the Chase Sapphire Reserve?',
          acceptedAnswer: { '@type': 'Answer', text: "No, Chase's rules permit you to hold only one personal Sapphire card at a time." }
        },
        {
          '@type': 'Question',
          name: 'Do my points expire?',
          acceptedAnswer: { '@type': 'Answer', text: "No, as long as your account remains open and in good standing." }
        },
        {
          '@type': 'Question',
          name: 'Does it charge foreign transaction fees?',
          acceptedAnswer: { '@type': 'Answer', text: "No, it has no foreign transaction fees." }
        },
        {
          '@type': 'Question',
          name: 'How much is the bonus worth?',
          acceptedAnswer: { '@type': 'Answer', text: "A minimum of $750 for travel via the Chase portal, and potentially $1,200 or more with transfer partners." }
        },
        {
          '@type': 'Question',
          name: 'Is it hard to get approved?',
          acceptedAnswer: { '@type': 'Answer', text: 'It can be. You need a strong credit score and must be under Chase\'s "5/24 rule."' }
        }
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

// UPDATE AS NEEDED: Tailor these to your rating methodology for this card
const ratingCriteriaOriginal = [
    'Welcome Bonus Value & Attainability',
    'Rewards on Travel (Chase Portal & Other)',
    'Rewards on Dining & Online Groceries',
    'Ultimate Rewards® Program Flexibility (Transfers)',
    'Value of $50 Annual Hotel Credit',
    'Travel Protections (Primary Auto Rental CDW)',
    'Annual Fee ($95) vs. Overall Benefits',
    '10% Anniversary Points Boost',
    'Clarity and Accessibility of Benefits',
    'Customer Service & App Experience (General Chase)',
];

const tocSections = [ // Generated from your 20 sections for CSP
    { id: 'section-intro', title: 'Introduction: The Perennial Favorite' },
    { id: 'section-1', title: '1. Card Snapshot & "Best For" Tagline' },
    { id: 'section-2', title: '2. Is This Card for You? A Quick Litmus Test' },
    { id: 'section-3', title: '3. The Welcome Bonus: Your Ticket to Free Travel' },
    { id: 'section-4', title: '4. Earning Power: A Deep Dive into Rewards' },
    { id: 'section-5', title: '5. The 10% Anniversary Boost: A Loyalty Reward' },
    { id: 'section-6', title: '6. Redemption Masterclass: Maximizing Points' },
    { id: 'section-7', title: '7. Transfer Sweet Spots: Unlocking Value' },
    { id: 'section-8', title: '8. The $50 Hotel Credit: Reducing Your Fee' },
    { id: 'section-9', title: '9. Lifestyle & Partner Perks: DoorDash to Lyft' },
    { id: 'section-10', title: '10. The Travel Insurance Safety Net' },
    { id: 'section-11', title: '11. The Fine Print: Rates and Fees' },
    { id: 'section-12', title: '12. Detailed User Profiling: Who Should Apply?' },
    { id: 'section-13', title: '13. A Real-World Example: Calculating Value' },
    { id: 'section-14', title: '14. Pros and Cons: A Balanced View' },
    { id: 'section-15', title: '15. Voices from the Community: User Testimonials' },
    { id: 'section-16', title: '16. How It Stacks Up: CSP vs. The Competition' },
    { id: 'section-17', title: '17. The Chase Ecosystem: The Power of the Trifecta' },
    { id: 'section-18', title: '18. Card-Specific Frequently Asked Questions (FAQs)' },
    { id: 'section-19', title: '19. Final Verdict: Why the Sapphire Preferred Remains a Top Choice' },
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
function ChaseSapphirePreferredCardReviewPage() {
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
          if (showAuthorBioTooltip && authorRef.current && !authorRef.current.contains(event.target) && authorTooltipRef.current && !authorTooltipRef.current.contains(event.target)) {
              setShowAuthorBioTooltip(false);
          }
          if (showRatingInfo && !event.target.closest(`.${styles.infoIconButton}`) && ratingTooltipRef.current && !ratingTooltipRef.current.contains(event.target)) {
               setShowRatingInfo(false);
          }
      }
      if (showAuthorBioTooltip || showRatingInfo) document.addEventListener("mousedown", handleClickOutside);
      else document.removeEventListener("mousedown", handleClickOutside);
      return () => {
          document.removeEventListener("mousedown", handleClickOutside);
          if (authorRef.current?.tooltipTimeoutId) clearTimeout(authorRef.current.tooltipTimeoutId);
      };
  }, [showAuthorBioTooltip, authorRef, authorTooltipRef, showRatingInfo, ratingTooltipRef]);

  const summaryBoxData = {
    welcomeOffer: "60,000 bonus points after spending $4,000 in the first 3 months.",
    annualFee: `$${reviewDataNew.annualFee}`,
    topEarning: "5x on travel via Chase Travel℠; 3x on dining & online groceries.",
    keyCredits: "$50 Annual Hotel Credit (via Chase Travel℠).",
    travelPerk: "Primary Auto Rental Insurance; No Foreign Transaction Fees.",
    bestFor: "The ultimate travel rewards starter kit for aspiring travelers."
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
                <h1 className={styles.heroTitle}>{reviewDataNew.h1Content}</h1>
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
                                       <a className={styles.authorTooltipBioLink}>See full bio</a>
                                   </Link>
                               )}
                        </div>
                    )}
                </div>
                <p className={styles.heroSubtitle}>
                  The Chase Sapphire Preferred® isn’t just a starter travel card—it’s a longtime favorite for a reason. With a perfect mix of value, flexibility, and ease of use, it’s a smart choice for both beginners and seasoned points pros alike.
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
                      <svg aria-hidden="true" focusable="false" className={styles.infoIcon} viewBox="0 0 16 16"><path fillRule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/><path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/></svg>
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
                                <span className={styles.summaryLabel}>Top Earning Rates:</span>
                                <span className={styles.summaryValue}>{summaryBoxData.topEarning}</span>
                            </div>
                             <div className={styles.summaryItem}>
                                <span className={styles.summaryIcon}><IconDollar /></span>
                                <span className={styles.summaryLabel}>Key Credit:</span>
                                <span className={styles.summaryValue}>{summaryBoxData.keyCredits}</span>
                            </div>
                            <div className={styles.summaryItem}>
                                <span className={styles.summaryIcon}><IconShield /></span>
                                <span className={styles.summaryLabel}>Top Travel Perk:</span>
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

                <section id="section-intro" className={styles.reviewSection}>
                  <h2>Introduction: The Perennial Favorite for Aspiring Travelers</h2>
                  <p>This card's true genius lies in its ability to be an educational tool. It masterfully guides users from simple redemptions to high-value strategies involving airline and hotel partners. It doesn't just give you points; it provides a curriculum in travel rewards, making it the perfect launchpad for anyone aspiring to see the world for less. For many, it's the first step into a larger world of <Link href="/review/2025-Points-&-Miles-Trends-Best-Ways-to-Redeem-for-Luxury-Travel-on-a-Budget"><a>redeeming points for luxury travel</a></Link>.</p>
                </section>

                <Image
                    src="/pexels-leeloo-thefirst-5428830.webp" // UPDATE THIS with a relevant image
                    alt="A person studying a world map and planning a trip, symbolizing travel rewards education"
                    width={800}
                    height={500}
                    className={styles.contentImage}
                    loading="lazy"
                />

                <section id="section-1" className={styles.reviewSection}>
                  <h2>1. Card Snapshot &amp; &quot;Best For&quot; Tagline</h2>
                  <p>Here are the vital statistics that define the {reviewDataNew.cardName}:</p>
                  <DraggableTableWrapper>
                    <div className={styles.tableContainer}>
                        <table className={`${styles.statsTable} ${styles.highlightTable}`}>
                            <tbody>
                                <tr><td>Card Name:</td><td><strong>{reviewDataNew.cardName}</strong></td></tr>
                                <tr><td>Issuer:</td><td>Chase (<a href={reviewDataNew.officialOverviewLink} target="_blank" rel="noopener noreferrer sponsored">Official Card Page</a>)</td></tr>
                                <tr><td>Network:</td><td>Visa</td></tr>
                                <tr><td>Annual Fee:</td><td><strong>${reviewDataNew.annualFee}</strong></td></tr>
                                <tr><td>Welcome Bonus:</td><td>{summaryBoxData.welcomeOffer} <a href={reviewDataNew.officialWelcomeOfferLink} target="_blank" rel="noopener noreferrer sponsored"></a></td></tr>
                                <tr><td>Primary Rewards Currency:</td><td>Ultimate Rewards® points</td></tr>
                                <tr><td>Key Rewards Rates:</td><td>5x on travel via Chase Travel℠, 3x on dining, select streaming, & online groceries, 2x on all other travel.</td></tr>
                                <tr><td>Key Perk:</td><td>$50 Annual Hotel Credit for stays booked through Chase Travel℠.</td></tr>
                                <tr><td>Recommended Credit:</td><td>Good to Excellent (generally a FICO score of 690+).</td></tr>
                                <tr><td>&quot;Best For&quot; Tagline:</td><td>The Ultimate Travel Rewards Starter Kit.</td></tr>
                            </tbody>
                        </table>
                    </div>
                  </DraggableTableWrapper>
                  <p>This tagline captures the card's dual nature. It is a "starter" product, ideal for those graduating from simple cash-back cards, yet it is also a complete "kit," providing all essential tools: a valuable points currency, accelerated earning, a clear path to redemption, and a strong safety net of travel protections.</p>
                </section>

                <section id="section-2" className={styles.reviewSection}>
                    <h2>2. Is This Card for You? A Quick Litmus Test</h2>
                    <div className={styles.prosConsContainer}>
                        <div className={styles.prosBox}>
                            <h4 className={styles.shouldConsiderTitle}>This card is an excellent choice if:</h4>
                            <ul className={styles.featureList}>
                                <li>You are new to travel rewards and want a card with a reasonable annual fee.</li>
                                <li>Your budget includes significant spending on dining, travel, and online groceries.</li>
                                <li>You value travel protections like primary car rental insurance.</li>
                                <li>You are willing to learn the basics of transferring points to partners.</li>
                                <li>You have good-to-excellent credit and are under the <Link href="/guides/chase-5-24-rule-explained"><a>"5/24 rule."</a></Link></li>
                            </ul>
                        </div>
                        <div className={styles.consBox}>
                           <h4 className={styles.exploreOptionsTitle}>You should reconsider if:</h4>
                            <ul className={styles.featureList}>
                                <li>You are strictly opposed to an annual fee.</li>
                                <li>You do not travel and have no plans to start.</li>
                                <li>Your primary goal is simple, flat-rate cash back.</li>
                                <li>Premium perks like airport lounge access are a top priority.</li>
                                <li>You tend to carry a credit card balance.</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section id="section-3" className={styles.reviewSection}>
                  <h2>3. The Welcome Bonus: Your First-Class Ticket to Free Travel</h2>
                  <p>The journey begins with a powerful incentive. Eligible new cardmembers can:</p>
                  <blockquote className={styles.highlightQuote}>
                    Earn 60,000 bonus points after spending $4,000 on purchases in the first 3 months from account opening. <a href={reviewDataNew.officialWelcomeOfferLink} target="_blank" rel="noopener noreferrer sponsored"></a>
                  </blockquote>
                  <p>This bonus is the single largest infusion of value. When redeemed through the Chase Travel℠ portal, points are worth 1.25 cents each, making the bonus worth a minimum of $750 toward travel. <a href={reviewDataNew.officialUltimateRewardsLink} target="_blank" rel="noopener noreferrer sponsored"></a> This alone covers the $95 annual fee more than seven times over. By transferring points to partners like World of Hyatt, it’s common to achieve a value of 2 cents per point or higher, potentially making the bonus worth $1,200 or more.</p>
                </section>

                <section id="section-4" className={styles.reviewSection}>
                  <h2>4. Earning Power: A Deep Dive into the Rewards Structure</h2>
                  <p>The card's long-term value is driven by its multi-tiered rewards structure:</p>
                  <DraggableTableWrapper>
                    <div className={styles.tableContainer}>
                      <table className={`${styles.statsTable} ${styles.earningRatesTable}`}>
                        <thead>
                          <tr>
                            <th>Points per $1 Spent</th>
                            <th>Eligible Purchase Categories & Conditions</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td data-label="Points"><strong>5X</strong></td>
                            <td data-label="Categories">Points on travel purchased through Chase Travel℠.</td>
                          </tr>
                          <tr>
                            <td data-label="Points"><strong>3X</strong></td>
                            <td data-label="Categories">Points on dining, select streaming services, and online groceries (excluding Target, Walmart, and wholesale clubs).</td>
                          </tr>
                          <tr>
                            <td data-label="Points"><strong>2X</strong></td>
                            <td data-label="Categories">Points on all other travel purchases (includes airfare, hotels, taxis, tolls).</td>
                          </tr>
                          <tr>
                            <td data-label="Points"><strong>1X</strong></td>
                            <td data-label="Categories">Point on all other eligible purchases. <a href={reviewDataNew.ratesLink} target="_blank" rel="noopener noreferrer sponsored"></a></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </DraggableTableWrapper>
                </section>

                <section id="section-5" className={styles.reviewSection}>
                    <h2>5. The 10% Anniversary Boost: A Reward for Your Loyalty</h2>
                    <p>A unique feature is the annual relationship bonus. Each year on your account anniversary, you receive bonus points equal to 10% of the total points earned from purchases during the preceding year. <a href={reviewDataNew.officialBenefitsLink} target="_blank" rel="noopener noreferrer sponsored"></a> For example, spending $25,000 on the card in a year earns a bonus of 2,500 Ultimate Rewards® points. This is pure, incremental value—worth at least $31.25 for travel—that serves as a clever retention tool, reinforcing the card's worth around the time the annual fee is due.</p>
                </section>

                <section id="section-6" className={styles.reviewSection}>
                  <h2>6. Redemption Masterclass: Maximizing Your Ultimate Rewards® Points</h2>
                  <p>Earning points is half the equation; redeeming them wisely is key.</p>
                    <ul className={styles.featureList}>
                        <li><strong>Good Value (The Easy Way):</strong> The simplest way to get enhanced value is by booking travel through the Chase Travel℠ portal, where points are worth a fixed 1.25 cents each—a 25% uplift over cash back.</li>
                        <li><strong>Best Value (The Pro Move):</strong> The highest potential value lies in transferring points on a 1:1 basis to Chase's airline and hotel partners, such as World of Hyatt, British Airways, and United MileagePlus®. <a href={reviewDataNew.officialTransferPartnersLink} target="_blank" rel="noopener noreferrer sponsored"></a> This allows you to access loyalty programs directly, often leading to redemptions worth far more.</li>
                    </ul>
                </section>

                <Image
                    src="/pexels-george-dolgikh-1303098.webp" // UPDATE THIS with a relevant image
                    alt="Collage of airline and hotel logos like Hyatt and United, symbolizing transfer partners"
                    width={800}
                    height={450}
                    className={styles.contentImage}
                    loading="lazy"
                />

                <section id="section-7" className={styles.reviewSection}>
                    <h2>7. Transfer Sweet Spots: Unlocking Outsized Value</h2>
                    <p>To truly grasp the power of transferring points, let's look at two specific "sweet spot" examples highlighted by rewards experts. Mastering these can be the difference between a good redemption and a great one, a topic we cover in our guide to <Link href="/review/best-airline-credit-cards-2025"><a>the best airline credit cards</a></Link>.</p>
                     <div className={styles.profileCardContainer}>
                        <div className={styles.profileCard}>
                            <h4>The Hyatt Hack for Luxury Stays</h4>
                            <p>World of Hyatt is consistently lauded as the premier transfer partner for outsized value. A prime example is booking a luxury hotel during peak season. A ski-in/ski-out room at the Park Hyatt Beaver Creek could cost over $1,400 per night if paid in cash. However, that same room can be booked for just 45,000 points transferred from your Sapphire Preferred account. This single redemption yields a spectacular value of over 3 cents per point—more than double the value you'd get from the Chase portal.</p>
                        </div>
                        <div className={styles.profileCard}>
                            <h4>The Aeroplan Hack for Business Class Flights</h4>
                            <p>Air Canada's Aeroplan program is another valuable transfer partner. Because Aeroplan is part of the Star Alliance, you can use its points to book flights on partner airlines like United. For instance, a one-way business class ticket from the U.S. to Europe might cost $4,000-$6,000 in cash. Using the Aeroplan award chart, that same seat could be booked for as few as 70,000 points, turning your 60,000-point welcome bonus into the lion's share of a lie-flat seat across the Atlantic.</p>
                        </div>
                    </div>
                </section>

                <section id="section-8" className={styles.reviewSection}>
                    <h2>8. The $50 Annual Hotel Credit: Instantly Reducing Your Annual Fee</h2>
                    <p>Each account anniversary year, cardholders receive up to $50 in statement credits for hotel accommodations purchased through Chase Travel℠. <a href={reviewDataNew.officialBenefitsLink} target="_blank" rel="noopener noreferrer sponsored"></a> For any traveler who books at least one hotel stay per year, this benefit effectively reduces the card's $95 annual fee to a much more manageable $45. This perk also nudges users toward the Chase portal, deepening their engagement with the ecosystem.</p>
                </section>

                <section id="section-9" className={styles.reviewSection}>
                  <h2>9. Lifestyle &amp; Partner Perks: From DoorDash to Lyft</h2>
                  <p>The Sapphire Preferred extends its value with a suite of lifestyle benefits:</p>
                    <ul className={styles.featureList}>
                        <li><strong>DoorDash & Caviar:</strong> Receive a complimentary DashPass membership for at least one year, providing $0 delivery fees on eligible orders. <a href={reviewDataNew.officialDoorDashLink} target="_blank" rel="noopener noreferrer sponsored"></a></li>
                        <li><strong>Lyft:</strong> Through March 2025, all Lyft rides earn an accelerated rate of 5x total points.</li>
                        <li><strong>Peloton:</strong> Earn 5x total points on Peloton equipment and accessory purchases of $150 or more (valid through March 2025).</li>
                        <li><strong>Other Programs:</strong> Access Chase Offers for targeted statement credits and Chase Dining℠ for exclusive culinary experiences.</li>
                    </ul>
                </section>

                <section id="section-10" className={styles.reviewSection}>
                  <h2>10. The Travel Insurance Safety Net</h2>
                  <p>A significant advantage is the comprehensive suite of travel and purchase protections. You can see how these compare in our roundup of the <Link href="/review/best-travel-insurance-cards-2025"><a>best cards for travel insurance</a></Link>. Refer to the <a href={reviewDataNew.officialGuideToBenefitsLink} target="_blank" rel="noopener noreferrer sponsored">official Guide to Benefits</a> for full details.</p>
                    <ul className={styles.featureList}>
                        <li><strong>Primary Auto Rental Collision Damage Waiver:</strong> A standout benefit. When you use the card to pay for a rental car, this covers theft and collision damage. <a href={reviewDataNew.officialGuideToBenefitsLink} target="_blank" rel="noopener noreferrer sponsored"></a></li>
                        <li><strong>Trip Cancellation/Interruption Insurance:</strong> Reimburses up to $10,000 per person for non-refundable expenses if a trip is canceled or cut short for covered reasons. <a href={reviewDataNew.officialGuideToBenefitsLink} target="_blank" rel="noopener noreferrer sponsored"></a></li>
                        <li><strong>Trip Delay Reimbursement:</strong> If your travel is delayed by more than 12 hours, you can be reimbursed up to $500 per ticket for meals and lodging.</li>
                        <li><strong>Baggage Delay & Lost Luggage Insurance:</strong> Reimburses for essential purchases if your bag is delayed and covers lost or damaged luggage.</li>
                    </ul>
                </section>

                <section id="section-11" className={styles.reviewSection}>
                  <h2>11. The Fine Print: A Full Spectrum of Rates &amp; Fees</h2>
                  <p>A responsible review requires full transparency on costs:</p>
                  <DraggableTableWrapper>
                    <div className={styles.tableContainer}>
                        <table className={`${styles.statsTable} ${styles.ratesFeesTable}`}>
                            <thead>
                                <tr>
                                    <th>Fee/Rate Category</th>
                                    <th>Details (Verify with <a href={reviewDataNew.ratesLink} target="_blank" rel="noopener noreferrer sponsored">Issuer</a>)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td>Annual Fee:</td><td><strong>${reviewDataNew.annualFee}</strong></td></tr>
                                <tr><td>Purchase APR:</td><td>A variable APR, currently {reviewDataNew.aprRange} <a href={reviewDataNew.ratesLink} target="_blank" rel="noopener noreferrer sponsored"></a> This card is meant to be paid in full each month.</td></tr>
                                <tr><td>Balance Transfer Fee:</td><td>The greater of $5 or 5% of the transfer amount.</td></tr>
                                <tr><td>Cash Advance Fee:</td><td>The greater of $10 or 5% of the advance amount.</td></tr>
                                <tr><td>Foreign Transaction Fee:</td><td><strong>$0.</strong></td></tr>
                            </tbody>
                        </table>
                    </div>
                  </DraggableTableWrapper>
                </section>

                <section id="section-12" className={styles.reviewSection}>
                  <h2>12. Detailed User Profiling: Who Should (and Shouldn&apos;t) Get This Card?</h2>
                  <p>This card is built for a specific type of user. Here's who benefits most.</p>
                  <h3>The Ideal Cardholder:</h3>
                   <ul className={styles.featureList}>
                        <li><strong>The Aspiring Traveler:</strong> Plans one to three significant trips per year and wants to use points to offset costs.</li>
                        <li><strong>The Foodie & Urbanite:</strong> Spends significantly on dining, delivery, and rideshares.</li>
                        <li><strong>The Rewards Optimizer in Training:</strong> Eager to learn about pooling points and leveraging transfer partners.</li>
                    </ul>
                  <h3>Who Should Pass:</h3>
                    <ul className={styles.featureList}>
                        <li><strong>The Ultra-Premium Traveler:</strong> Requires airport lounge access and other elite benefits found on more expensive cards.</li>
                        <li><strong>The Die-Hard Cash-Back Devotee:</strong> Values simplicity above all else and is uncomfortable with points.</li>
                        <li><strong>The Financially Strained Individual:</strong> Anyone who would struggle to meet the spending requirement or might carry a balance.</li>
                    </ul>
                </section>

                <section id="section-13" className={styles.reviewSection}>
                    <h2>13. A Real-World Example: Calculating a Year of Value</h2>
                    <p>Let's make the card's value concrete with "Alex," a professional who enjoys dining out and takes several trips per year. Alex puts $25,000 in annual spending on the card across various categories like dining ($4,800), online groceries ($3,600), and travel ($2,000).</p>
                    <h3>Calculating the Rewards:</h3>
                    <ol className={styles.featureList}>
                        <li><strong>Points from Spending:</strong> Through the card's bonus categories, Alex's spending generates 48,780 points.</li>
                        <li><strong>10% Anniversary Bonus:</strong> Alex receives a loyalty bonus of 2,500 points.</li>
                        <li><strong>Total Annual Points:</strong> 48,780 + 2,500 = 51,280 points.</li>
                    </ol>
                    <h3>Net Annual Value:</h3>
                    <DraggableTableWrapper>
                        <div className={styles.tableContainer}>
                          <table className={`${styles.statsTable}`}>
                            <tbody>
                                <tr><td>Value from Points (via Chase portal at 1.25 cpp):</td><td>$641</td></tr>
                                <tr><td>Value from $50 Hotel Credit:</td><td>$50</td></tr>
                                <tr><td><strong>Total Gross Annual Value:</strong></td><td><strong>$691</strong></td></tr>
                                <tr><td>Less Annual Fee:</td><td>-${reviewDataNew.annualFee}</td></tr>
                                <tr><td><strong>Net Annual Value for Alex:</strong></td><td><strong>$596</strong></td></tr>
                                <tr><td><strong>First-Year Net Value (with $750 bonus):</strong></td><td><strong className={styles.strongHighlight}>$1,346</strong></td></tr>
                            </tbody>
                          </table>
                        </div>
                    </DraggableTableWrapper>
                </section>

                <section id="section-14" className={styles.reviewSection}>
                    <h2>14. Pros and Cons: A Balanced View</h2>
                    <p>Every financial product has its strengths and weaknesses. Here is a balanced assessment for an informed decision.</p>
                    <div className={styles.prosConsContainer}>
                        <div className={styles.prosBox}>
                            <h4 className={styles.shouldConsiderTitle}>Pros:</h4>
                            <ul className={styles.featureList}>
                                <li><strong>Lucrative Welcome Bonus:</strong> Worth at least $750 for travel.</li>
                                <li><strong>Strong Bonus Categories:</strong> Earns accelerated rewards on dining, online groceries, and travel.</li>
                                <li><strong>Flexible, High-Value Redemptions:</strong> 25% portal bonus and 1:1 transfers offer outstanding value.</li>
                                <li><strong>Comprehensive Travel Protections:</strong> Best-in-class insurance for this price point.</li>
                                <li><strong>Reasonable Annual Fee:</strong> The $95 fee is effectively $45 for many.</li>
                            </ul>
                        </div>
                        <div className={styles.consBox}>
                           <h4 className={styles.exploreOptionsTitle}>Cons:</h4>
                            <ul className={styles.featureList}>
                                <li><strong>Annual Fee:</strong> A hurdle for those accustomed to no-fee cards.</li>
                                <li><strong>No Airport Lounge Access:</strong> A key premium perk is missing.</li>
                                <li><strong>Weak Base Earning Rate:</strong> Uncompetitive 1x point on non-bonus spending.</li>
                                <li><strong>Potentially Frustrating Service:</strong> User reports suggest challenges with the travel portal.</li>
                                <li><strong>Strict Approval Requirements:</strong> Requires good credit and being under the 5/24 rule.</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section id="section-15" className={styles.reviewSection}>
                  <h2>15. Voices from the Community: User Testimonials</h2>
                  <p>Direct user experiences provide authentic insights. Here are some synthesized testimonials:</p>
                  <div className={styles.testimonialContainer}>
                      <blockquote className={styles.testimonialQuote}>
                          <p>&quot;CSP is one of, if not the best, entry level travel rewards card... Most use the CFF and CFU for their everyday spending and the CSP for the travel benefits.&quot;</p>
                          <footer>– The Maximizer (Positive)</footer>
                      </blockquote>
                      <blockquote className={styles.testimonialQuote}>
                          <p>&quot;At a $95 AF... the trip delay insurance is a huge benefit (I was reimbursed $500 last year for a weather-cancelled flight...).&quot;</p>
                          <footer>– The Insurance Believer (Positive)</footer>
                      </blockquote>
                       <blockquote className={styles.testimonialQuote}>
                          <p>&quot;If I didn't have the CSP, I wouldn't have been able to book a $3,000 Hyatt stay in Hawaii last week for free.&quot;</p>
                          <footer>– The Transfer Partner Pro (Positive)</footer>
                      </blockquote>
                      <blockquote className={styles.testimonialQuote}>
                          <p>&quot;I've been on the phone for over an hour trying to make a hotel reservation... I was transferred six times.&quot;</p>
                          <footer>– The Frustrated Portal User (Negative)</footer>
                      </blockquote>
                      <blockquote className={styles.testimonialQuote}>
                          <p>&quot;The catch is the card has a $95 annual fee and poor multipliers... to justify keeping it long term you should be using transfer partners and combining it with other Chase cards.&quot;</p>
                          <footer>– The Skeptic (Neutral/Critical)</footer>
                      </blockquote>
                  </div>
                </section>

                <section id="section-16" className={styles.reviewSection}>
                  <h2>16. How It Stacks Up: CSP vs. The Competition</h2>
                  <p>To understand its place in the market, the Sapphire Preferred must be compared against its direct rivals. It offers a uniquely balanced package, differentiated by the quality of its transfer partners and superior travel insurance for its price.</p>
                  <DraggableTableWrapper>
                    <div className={styles.tableContainer}>
                      <table className={`${styles.statsTable} ${styles.comparisonTable}`}>
                        <thead>
                          <tr>
                            <th>Feature</th>
                            <th>Chase Sapphire Preferred®</th>
                            <th>Capital One Venture Rewards</th>
                            <th>American Express® Gold Card</th>
                            <th>Citi Strata Premier℠ Card</th>
                            <th>Chase Sapphire Reserve®</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td data-label="Feature">Annual Fee</td>
                            <td data-label="CSP"><strong>$95</strong></td>
                            <td data-label="Venture">$95</td>
                            <td data-label="Amex Gold">$250</td>
                            <td data-label="Citi Premier">$95</td>
                            <td data-label="CSR">$550</td>
                          </tr>
                          <tr>
                             <td data-label="Feature">Card Link</td>
                             <td data-label="CSP"><strong>Current Page</strong></td>
                             <td data-label="Venture"><Link href="/cards/capital-one-venture"><a>Read Review</a></Link></td>
                             <td data-label="Amex Gold"><Link href="/cards/american-express-gold"><a>Read Review</a></Link></td>
                             <td data-label="Citi Premier"><Link href="/cards/citi-strata-premier"><a>Read Review</a></Link></td>
                             <td data-label="CSR"><Link href="/cards/chase-sapphire-reserve"><a>Read Review</a></Link></td>
                          </tr>
                          <tr>
                            <td data-label="Feature">Welcome Bonus</td>
                            <td data-label="CSP"><strong>60,000 pts</strong></td>
                            <td data-label="Venture">75,000 mi</td>
                            <td data-label="Amex Gold">60,000 pts</td>
                            <td data-label="Citi Premier">70,000 pts</td>
                            <td data-label="CSR">60,000 pts</td>
                          </tr>
                          <tr>
                            <td data-label="Feature">Key Earning</td>
                            <td data-label="CSP"><strong>3x Dining</strong></td>
                            <td data-label="Venture">2x Everything</td>
                            <td data-label="Amex Gold">4x Dining</td>
                            <td data-label="Citi Premier">3x Gas</td>
                            <td data-label="CSR">3x Travel</td>
                          </tr>
                           <tr>
                            <td data-label="Feature">Key Credits</td>
                            <td data-label="CSP"><strong>$50 Hotel</strong></td>
                            <td data-label="Venture">$100 TSA PreCheck</td>
                            <td data-label="Amex Gold">$120 Dining</td>
                            <td data-label="Citi Premier">$100 Hotel</td>
                            <td data-label="CSR">$300 Travel</td>
                          </tr>
                          <tr>
                            <td data-label="Feature">Best For</td>
                            <td data-label="CSP"><strong>Rewards Beginners</strong></td>
                            <td data-label="Venture">Simple Rewards</td>
                            <td data-label="Amex Gold">Food Spenders</td>
                            <td data-label="Citi Premier">Broad Bonuses</td>
                            <td data-label="CSR">Premium Perks</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </DraggableTableWrapper>
                </section>

                <section id="section-17" className={styles.reviewSection}>
                  <h2>17. The Chase Ecosystem: Pairing with Freedom Cards for Maximum Power</h2>
                  <p>The true genius of the Sapphire Preferred is revealed when it is used not as a solo instrument, but as the conductor of an orchestra. By pairing it with no-annual-fee cards like the Chase Freedom Flex® (5x on rotating categories) and the <Link href="/cards/chase-freedom-unlimited"><a>Chase Freedom Unlimited®</a></Link> (1.5x on everything), cardholders create the "Chase Trifecta." Points from all three cards can be pooled into the Sapphire Preferred account, transforming them into full-fledged Ultimate Rewards® points eligible for the 25% portal bonus and 1:1 transfers to partners. This strategy addresses the Sapphire Preferred's main weakness—its low 1x base earning rate.</p>
                </section>

                <section id="section-18" className={`${styles.reviewSection} ${styles.faqSection}`}>
                  <h2>18. Card-Specific Frequently Asked Questions (FAQs)</h2>
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

                <section id="section-19" className={styles.reviewSection}>
                  <h2>19. Final Verdict: Why the Sapphire Preferred Remains a Top-Tier Choice</h2>
                  <p>The Chase Sapphire Preferred® unequivocally earns its place as a top-tier travel rewards card. It strikes a near-perfect balance between value, flexibility, and affordability that is unmatched in the mid-tier market. For a reasonable $95 annual fee—effectively just $45 for many—the card delivers a formidable package.</p>
                  <p>It starts with a welcome bonus powerful enough to fund a trip, continues with a robust rewards structure, and most importantly, provides access to the highly-valued Ultimate Rewards® program. While it lacks flashy perks like lounge access, its comprehensive travel insurance provides a tangible safety net. When you're ready to graduate, you can compare it to our list of the <Link href="/general/best-travel-cards-2025"><a>best travel cards</a></Link> to see your next move.</p>
                  <p>The Chase Sapphire Preferred® is more than a credit card; it's an investment in future experiences. It is the ideal instrument for the savvy value-seeker and powerful enough to be a long-term keeper. For those ready to turn their spending into adventures, there is simply no better place to start.</p>
                   <p>If this profile resonates with you, and you're ready to learn the rewarding game of points and miles, the Chase Sapphire Preferred is an outstanding choice. <strong>Always verify the current terms, benefits, and fees on the <a href={reviewDataNew.officialOverviewLink} target="_blank" rel="noopener noreferrer sponsored">official Chase website</a> before applying.</strong></p>
                </section>

                <section id="section-eat" className={`${styles.reviewSection} ${styles.eatSection}`}>
                    <h2 dangerouslySetInnerHTML={{ __html: `Our Commitment to E-A-T: Expertise, Authority &amp; Trustworthiness`}}></h2>
                    <p>At <strong>{siteName}</strong>, we are committed to providing content that exemplifies Expertise, Authoritativeness, and Trustworthiness (E-A-T). This review of the <strong>{reviewDataNew.cardName}</strong> has been meticulously researched and crafted. We've analyzed the card's features, benefits, rewards structure, and fees, referencing official issuer documentation from Chase and considering real-world user experiences. Our goal is to present a balanced, comprehensive, and reliable guide to help you make an informed decision. All information is current as of <strong>{new Date(updateDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</strong>, but we always recommend verifying details directly with the issuer as terms can change.</p>
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

export default ChaseSapphirePreferredCardReviewPage;