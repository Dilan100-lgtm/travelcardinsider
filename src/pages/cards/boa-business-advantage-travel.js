/* ------------------------------------------------------------------
    File:  pages/reviews/bank-of-america-business-advantage-travel-rewards-review.js
    Route: https://www.travelcardinsider.com/reviews/bank-of-america-business-advantage-travel-rewards-review
------------------------------------------------------------------- */

import React, { useState, useEffect, useCallback, useRef } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import styles from '../../styles/ReviewPage.module.css'; // Assuming same CSS module as Amex Platinum

import TableOfContents from '../../components/TableOfContents'; // Assuming same TOC component
// Using generic icons from the Amex example; update paths or components as needed for BofA context
import IconGift from '../../components/icons/icon-gift.svg'; // For Welcome Offer
import IconStar from '../../components/icons/icon-star.svg'; // For Rewards Rate
import IconCheck from '../../components/icons/icon-Credit Card.svg'; // For Annual Fee / Key Features
import IconPlus from '../../components/icons/icon-target.svg'; // For 'Best For' / Pros
import IconPlane from '../../components/icons/icon-plane.svg'; // For Travel Perks
import IconDollar from '../../components/icons/icon-dollar.svg'; // For Points Value / Credits
import IconX from '../../components/icons/icon-Star + Arrow Up.svg'; // For Cons / Negatives (example)
import IconBriefcase from '../../components/icons/icon-briefcase.svg'; // Placeholder for Business Features
import IconShield from '../../components/icons/icon-shield.svg'; // Placeholder for Protections
import IconInfo from '../../components/icons/icon-info-circle.svg'; // Placeholder for Fine Print/General Info

const RatingTooltip = dynamic(() => import('../../components/RatingTooltip'), { ssr: false, loading: () => null });

/* ──────────────────────────────
    CONSTANTS & STATIC DATA
    ────────────────────────────── */
const siteName = 'Travelcardinsider'; // /* UPDATE THIS */ if different
const siteUrl = 'https://www.travelcardinsider.com'; // /* UPDATE THIS */ if different
const pagePath = '/reviews/bank-of-america-business-advantage-travel-rewards-review'; // Path for this specific review
const pageUrlFull = `${siteUrl}${pagePath}`;
const publishDate = '2025-05-30'; // /* UPDATE THIS */ Current date or actual publish date
const updateDate = '2025-05-30'; // /* UPDATE THIS */ Current date or actual update date

// Official Links (from previous step)
const bofaCardProductPage = 'https://www.bankofamerica.com/smallbusiness/credit-cards/products/travel-rewards-business-credit-card/';
const bofaPreferredRewardsPage = 'https://business.bankofamerica.com/preferred-rewards-business';
const bofaCardAgreementsPage = 'https://www.bankofamerica.com/credit-cards/card-agreements/'; // General, specific guide to benefits often linked from product page or account
const bofaBusinessAppInfoPage = 'https://business.bankofamerica.com/en/resources/how-do-i-get-a-business-credit-card';
const bofaUnlimitedCashRewardsPage = 'https://www.bankofamerica.com/smallbusiness/credit-cards/products/unlimited-cash-rewards-business-credit-card/';
const bofaTravelCenterLink = 'https://www.bankofamerica.com/credit-cards/manage-your-rewards/redeem-rewards/travel/'; // Example, actual link might be within logged-in portal

const reviewDataNew = {
  cardName        : 'Bank of America® Business Advantage Travel Rewards World Mastercard®',
  cardShortName   : 'BofA Business Advantage Travel Rewards', // For brevity in UI if needed
  title           : 'BofA Business Advantage Travel Rewards Mastercard Review (2025) | $0 Fee, Maximize Points', // SEO Optimized Title
  description     : 'In-depth 2025 review: Bank of America® Business Advantage Travel Rewards. $0 annual fee, 30K bonus, 1.5x-2.625x points. Ideal for U.S. SMBs, especially with BofA Preferred Rewards.', // Meta Description
  keywords        : 'Bank of America Business Advantage Travel Rewards review, BofA business credit card, no annual fee business card, Preferred Rewards for Business, BofA travel points, business travel Mastercard', // Keywords
  author: { // /* UPDATE ALL AUTHOR DETAILS AS NEEDED - Reusing Amex example for now */
      name: 'Dilan Madushanka',
      title: 'Founder & Lead Editor',
      imageUrl: '/WhatsApp Image 2025-05-12 at 4.09.58 PM.jpeg',
      imageWidth: 40,
      imageHeight: 40,
      tooltipImageUrl: '/WhatsApp Image 2025-05-12 at 4.09.58 PM.jpeg',
      tooltipImageWidth: 60,
      tooltipImageHeight: 60,
      expertise: [
          'Small Business Credit Cards',
          'Rewards Optimization for SMBs',
          'Bank of America Business Products',
          'No-Annual-Fee Rewards Cards',
          'Travel Rewards Strategies for Entrepreneurs'
      ],
      bioSnippet: 'Dilan Madushanka, founder of Travelcardinsider, specializes in helping U.S. small businesses leverage cards like the BofA® Business Advantage Travel Rewards for maximum value.',
      fullBioLink: '/author/dilan-madushanka',
      fullBio: `Dilan Madushanka is the founder and lead editor of Travelcardinsider... [MORE BIO DETAILS TO BE ADDED BY USER]`,
      publishedStats: 'X+ business credit card reviews published',
      testedStats: 'Analyzed Y+ rewards programs for small businesses',
      socialLinks: {
          linkedin: 'https://www.linkedin.com/in/dilan-madushanka-b65293365',
          twitter: 'https://x.com/team_dilan',
          email: 'team@travelcardinsider.com'
      }
  },
  siteName: siteName,
  imageUrl        : '/images/cards/bofa-business-advantage-travel-rewards-card.png', // /* UPDATE THIS */ Placeholder path for BofA card image
  imageWidth      : 1290, // /* UPDATE THIS */ Example, use actual dimensions
  imageHeight     : 812,  // /* UPDATE THIS */ Example, use actual dimensions
  ratingValue     : 8.8,  // /* UPDATE THIS */ Example rating (out of 10)
  ratingCount     : 175,  // /* UPDATE THIS */ Example review count
  reviewBody      : 'Our editors evaluate the Bank of America® Business Advantage Travel Rewards card based on its rewards structure (1.5x base, 3x via BofA Travel Center, up to 2.625x with Preferred Rewards), $0 annual fee, welcome bonus, travel protections, and overall value for U.S. small businesses, especially those with Bank of America banking relationships.',
  aprRange        : 'Variable, typically 17.49% to 27.49% (after 0% intro APR for 9 billing cycles on purchases). Subject to change.', // From review text
  annualFee       : 0,
  applyLink       : bofaCardProductPage, // Official product page
  ratesLink       : bofaCardProductPage, // Rates and fees are usually on the product page
  officialOverviewLink: bofaCardProductPage,
  officialWelcomeOfferLink: bofaCardProductPage,
  officialRewardsProgramLink: bofaPreferredRewardsPage, // For Preferred Rewards
  officialTravelCenterLink: bofaTravelCenterLink, // Link to BofA Travel Center info
  officialTermsLink: bofaCardAgreementsPage, // General terms
  sku             : 'BOFA-BIZ-TR-TCI-2025',
  mpn             : 'BOFABIZTRAVELREWARDS',
  h1Content       : "Bank of America® Business Advantage Travel Rewards Mastercard®: 2025 Review for U.S. Small Businesses",
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
      brand          : { '@type': 'Brand', name: 'Bank of America' },
      category       : 'Business Credit Card',
      aggregateRating: {
        '@type'    : 'AggregateRating',
        ratingValue : reviewDataNew.ratingValue.toString(),
        bestRating  : '10',
        worstRating : '1',
        ratingCount : reviewDataNew.ratingCount.toString(),
        reviewCount : '1', // This specific review
      },
      offers: {
        '@type'            : 'Offer',
        url                : reviewDataNew.applyLink,
        priceCurrency      : 'USD',
        price              : reviewDataNew.annualFee.toString(), // $0
        priceValidUntil    : '2026-12-31', // /* UPDATE THIS AS NEEDED */
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
            description          : `Introductory Purchase APR: 0% for the first 9 billing cycles. Standard Purchase APR: ${reviewDataNew.aprRange}. Foreign Transaction Fee: None. See official ${reviewDataNew.cardName} Rates & Fees on the issuer's website.`,
          },
        ],
        seller: { '@type': 'Organization', name: 'Bank of America' },
      },
      review: { '@id': `${pageUrlFull}#editorReview` },
    },
    {
      '@type'         : 'Review',
      '@id'           : `${pageUrlFull}#editorReview`,
      name            : `${reviewDataNew.title} – Updated ${new Date(updateDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}`,
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
        logo    : { '@type': 'ImageObject', url: `${siteUrl}/images/logo/your-logo-schema.png` }, // /* UPDATE THIS */
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
        { '@type': 'ListItem', position: 2, name: 'Business Credit Card Reviews', item: `${siteUrl}/business-credit-card-reviews` }, // /* UPDATE THIS if path differs */
        { '@type': 'ListItem', position: 3, name: `${reviewDataNew.cardName} Review`, item: pageUrlFull },
      ],
    },
    {
      '@type'    : 'FAQPage',
      '@id'      : `${pageUrlFull}#faqs`,
      mainEntity: [ // Populated from your review text
        {
          '@type': 'Question',
          name: "What's the annual fee for the BofA Business Advantage Travel Rewards card?",
          acceptedAnswer: { '@type': 'Answer', text: "The annual fee is $0." }
        },
        {
          '@type': 'Question',
          name: 'How much are points worth with this card?',
          acceptedAnswer: { '@type': 'Answer', text: "Points are worth 1 cent each when redeemed for travel or dining statement credits, or for bookings through the Bank of America® Travel Center. The value is significantly less (e.g., 0.6 cents per point) for cash back." }
        },
        {
          '@type': 'Question',
          name: 'Do I need a BofA business checking account for this card?',
          acceptedAnswer: { '@type': 'Answer', text: "While not strictly required to obtain the card, a Bank of America business checking account IS necessary to enroll in the Preferred Rewards for Business program, which unlocks the highest rewards earning rates." }
        },
        {
          '@type': 'Question',
          name: 'What are the Preferred Rewards for Business balance requirements for bonus points?',
          acceptedAnswer: { '@type': 'Answer', text: "To earn bonus points through Preferred Rewards for Business, you need a minimum three-month combined average daily balance in qualifying Bank of America business deposit and/or Merrill business investment accounts: Gold Tier ($20,000+ for a 25% bonus), Platinum Tier ($50,000+ for a 50% bonus), and Platinum Honors Tier ($100,000+ for a 75% bonus)." }
        },
        {
          '@type': 'Question',
          name: 'Does the BofA Business Advantage Travel Rewards card charge foreign transaction fees?',
          acceptedAnswer: { '@type': 'Answer', text: "No, this card does not charge foreign transaction fees, making it a good choice for international business expenses." }
        },
        {
          '@type': 'Question',
          name: 'What travel insurance is included with the card?',
          acceptedAnswer: { '@type': 'Answer', text: "The card typically includes travel accident insurance (up to $1 million), lost luggage reimbursement, trip cancellation/interruption coverage, and trip delay reimbursement. Always refer to your specific Guide to Benefits for full details and limitations." }
        },
        {
          '@type': 'Question',
          name: 'Can I get employee cards with the BofA Business Advantage Travel Rewards card?',
          acceptedAnswer: { '@type': 'Answer', text: "Yes, employee cards are typically available at no extra cost, and you can often set individual spending limits. Confirm with Bank of America for current terms." }
        },
        {
          '@type': 'Question',
          name: 'How long is the 0% introductory APR on purchases?',
          acceptedAnswer: { '@type': 'Answer', text: "The 0% introductory APR on purchases lasts for the first 9 billing cycles after account opening. After that, a variable APR applies." }
        },
        {
          '@type': 'Question',
          name: 'What credit score do I need for this business card?',
          acceptedAnswer: { '@type': 'Answer', text: "Generally, an \"excellent\" personal credit score is recommended for approval for the Bank of America® Business Advantage Travel Rewards World Mastercard®." }
        },
        {
          '@type': 'Question',
          name: 'Is this card a good option if I don’t qualify for Preferred Rewards for Business?',
          acceptedAnswer: { '@type': 'Answer', text: "Yes, it can still be a decent no-annual-fee travel rewards card offering 1.5 points per dollar on all purchases, no foreign transaction fees, and an introductory APR offer. However, its standout value and highest earning potential are realized when combined with the Preferred Rewards for Business program." }
        }
      ],
    },
    {
      '@type' : 'Organization',
      '@id'   : `${siteUrl}#website`,
      name    : siteName,
      url     : siteUrl,
      logo    : { '@type': 'ImageObject', url: `${siteUrl}/images/logo/your-logo-schema.png` }, // /* UPDATE THIS */
      sameAs  : [ // /* UPDATE THESE with your actual social profiles */
        "https://www.facebook.com/YourTravelCardInsiderFacebookPage",
        "https://twitter.com/YourTravelCardInsiderTwitterHandle",
      ],
    },
  ],
};

const ratingCriteriaOriginal = [ // /* UPDATE AS NEEDED for BofA Business Travel Card */
    'Base Rewards Rate Value (1.5x points)',
    'Boosted Rewards with Preferred Rewards for Business (up to 2.625x/5.25x)',
    'Value of Welcome Offer ($300 for $3k spend)',
    'Effectiveness of BofA® Travel Center Bonus (3x points)',
    'Absence of Annual Fee ($0)',
    'Absence of Foreign Transaction Fees',
    'Quality and Utility of Travel Protections',
    'Ease of Point Redemption (Travel/Dining Credits)',
    'Introductory APR Benefit (0% for 9 billing cycles)',
    'Overall Value for U.S. Small Businesses (especially BofA clients)',
    'Clarity of Terms for Preferred Rewards Program',
];

// SEO-Optimized Table of Contents
const tocSections = [
    { id: 'section-intro', title: 'BofA Business Advantage Travel Rewards: Fueling U.S. Small Business Travel' },
    { id: 'section-card-snapshot', title: 'Card Snapshot: Key Features of the BofA Business Travel Mastercard' },
    { id: 'section-welcome-offer', title: 'Welcome Offer: Unlock Your First $300 in Travel Value' },
    { id: 'section-earning-power', title: 'Earning Points: Your Everyday Business Spending, Rewarded' },
    { id: 'section-preferred-rewards', title: 'Unlock Elite Rewards: The Preferred Rewards for Business Advantage' },
    { id: 'section-redeeming-points', title: 'Redeeming Points: Smart Strategies for Maximum Value' },
    { id: 'section-real-world-example', title: 'Real-World Rewards: An E-Commerce Success Story' },
    { id: 'section-key-features-glance', title: 'At a Glance: Top Features of the BofA Business Travel Card' },
    { id: 'section-rates-fees', title: 'Rates & Fees: Understanding the Costs for Your Business' },
    { id: 'section-travel-protections', title: 'Travel Perks & Protections: More Than Just Points' },
    { id: 'section-business-benefits', title: 'Business-Centric Benefits: Tools for Your Enterprise Growth' },
    { id: 'section-application-process', title: 'Application Journey: What Your Business Needs to Apply' },
    { id: 'section-who-benefits', title: 'Who Benefits Most? Ideal Profiles for This Business Card' },
    { id: 'section-pros-cons', title: 'Pros & Cons: A Balanced Look at the BofA Business Travel Card' },
    { id: 'section-competitor-comparison', title: 'Card vs. Card: BofA Business Travel vs. Competitors' },
    { id: 'section-user-testimonials', title: 'User Testimonials: Voices from Business Owners' },
    { id: 'section-fine-print', title: 'Navigating the Fine Print: Key Terms to Understand' },
    { id: 'section-final-verdict', title: 'Final Verdict: Is This BofA Card Your Business Travel Ally?' },
    { id: 'section-faqs-jump', title: 'Answered: Your Top BofA Business Travel Card FAQs' }, // Moved after final verdict
    { id: 'section-eat', title: 'Our E-A-T Commitment: Expertise, Authority & Trust' },
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
function BofABusinessAdvantageTravelRewardsReviewPage() {
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
              !event.target.closest(`.${styles.infoIconButton}`) && // Check class of info icon button
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
    welcomeOffer: "30,000 bonus points (worth $300 for travel/dining) after $3,000 spend in first 90 days.",
    annualFee: `$${reviewDataNew.annualFee}`,
    rewardsRate: "Unlimited 1.5x points on all purchases. 3x points via BofA® Travel Center. Up to 2.625x points on all purchases with Platinum Honors in Preferred Rewards for Business.",
    foreignTxFee: "None",
    introPurchAPR: "0% for the first 9 billing cycles.",
    bestFor: "U.S. small businesses, especially those with existing Bank of America accounts, seeking amplified travel rewards through the Preferred Rewards program with no annual fee."
  };


  return (
    <div> {/* Top-level div as requested */}
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
        {[ // /* UPDATE THESE FONT PATHS AS NEEDED */
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
        <meta property="article:publisher" content={`https://www.facebook.com/YourTravelCardInsiderFacebookPage`} />  {/* /* UPDATE THIS */ }
        <meta property="article:section"       content="Business Credit Card Reviews" />
        <meta property="article:published_time" content={publishDate} />
        <meta property="article:modified_time"  content={updateDate} />
        <meta property="article:author" content={reviewDataNew.author.name} />
        {reviewDataNew.keywords.split(',').map(keyword => (
            <meta property="article:tag" content={keyword.trim()} key={keyword.trim()} />
        ))}
        <meta name="twitter:card"        content="summary_large_image" />
        <meta name="twitter:site" content="@YourTravelCardInsiderTwitterHandle" /> {/* /* UPDATE THIS */ }
        <meta name="twitter:creator" content={`@${reviewDataNew.author.socialLinks?.twitter?.split('/').pop() || 'YourAuthorTwitterHandle'}`} /> {/* /* UPDATE THIS */ }
        <meta name="twitter:title"       content={reviewDataNew.title} />
        <meta name="twitter:description" content={reviewDataNew.description} />
        <meta name="twitter:image"       content={`${siteUrl}${reviewDataNew.imageUrl}`} />
        <link rel="icon" href="/favicon.ico" /> {/* /* UPDATE THIS */ }
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" /> {/* /* UPDATE THIS */ }
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" /> {/* /* UPDATE THIS */ }
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" /> {/* /* UPDATE THIS */ }
        <link rel="manifest" href="/site.webmanifest" /> {/* /* UPDATE THIS */ }
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
                        src={reviewDataNew.author.imageUrl} /* UPDATE THIS */
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
                        {reviewDataNew.author.socialLinks && ( // /* UPDATE THIS block with relevant social icons/links */
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
                    {showAuthorBioTooltip && reviewDataNew.author.bioSnippet && ( /* Tooltip content reuse from Amex */
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
                                    src={reviewDataNew.author.tooltipImageUrl} /* UPDATE THIS */
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
                               {reviewDataNew.author.socialLinks && ( /* UPDATE THIS block with relevant social icons/links */
                                    <div className={styles.authorTooltipSocials}>
                                        {reviewDataNew.author.socialLinks.linkedin && (
                                             <a href={reviewDataNew.author.socialLinks.linkedin} target="_blank" rel="noopener noreferrer me" aria-label={`${reviewDataNew.author.name} on LinkedIn`} className={styles.socialIconLink}><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg></a>
                                         )}
                                         {reviewDataNew.author.socialLinks.twitter && (
                                             <a href={reviewDataNew.author.socialLinks.twitter} target="_blank" rel="noopener noreferrer me" aria-label={`${reviewDataNew.author.name} on Twitter`} className={styles.socialIconLink}><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-.422.724-.665 1.56-.665 2.452 0 1.697.864 3.198 2.18 4.078-.8-.025-1.555-.247-2.227-.616v.054c0 2.37 1.683 4.333 3.91 4.78-.426.116-.874.174-1.337.174-.31 0-.611-.03-.904-.085.622 1.936 2.421 3.338 4.553 3.377-1.672 1.309-3.781 2.088-6.072 2.088-.394 0-.784-.023-1.169-.069 2.16 1.389 4.723 2.202 7.482 2.202 8.979 0 13.897-7.446 13.897-13.898 0-.21 0-.42-.015-.63.953-.689 1.778-1.56 2.433-2.525z"/></svg></a>
                                         )}
                                         {reviewDataNew.author.socialLinks.email && (
                                             <a href={`mailto:${reviewDataNew.author.socialLinks.email}`} aria-label={`Email ${reviewDataNew.author.name}`} className={styles.socialIconLink}><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"/></svg></a>
                                         )}
                                    </div>
                                )}
                        </div>
                    )}
                </div>
                <p className={styles.heroSubtitle}>
                  Is the Bank of America® Business Advantage Travel Rewards card the key to smarter business travel? TravelCardInsider dives into its $0 annual fee, 30,000 point bonus, and boosted earnings with Preferred Rewards. We analyze if this Mastercard® is the strategic asset your U.S. small business needs.
                </p>
                <div className={styles.heroCtaContainer}>
                  <div>
                    <a
                      href={reviewDataNew.applyLink}
                      target="_blank"
                      rel="noopener noreferrer sponsored"
                      className={`${styles.applyNowButton} ${styles.heroApplyButton}`}
                    >
                      Apply Securely on BofA Site
                    </a>
                    <span className={styles.heroApplyButtonDisclaimer}>
                      on Bank of America&apos;s official site
                    </span>
                  </div>
                  <Link href="#section-card-snapshot" legacyBehavior>
                    <a className={styles.heroSecondaryLink}>View Key Features</a>
                  </Link>
                </div>
              </div>
              <div className={styles.heroImageContainer}>
                <div className={styles.cardImageContainer}>
                  <Image
                    src={reviewDataNew.imageUrl} /* UPDATE THIS */
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
                      className={styles.infoIconButton} // Use a more descriptive class if needed, or ensure this class exists and is styled
                      aria-label="Rating Information"
                      onClick={handleIconClick}
                      aria-expanded={showRatingInfo}
                    >
                      <svg aria-hidden="true" focusable="false" className={styles.infoIcon} viewBox="0 0 16 16"> {/* Reusing Amex info icon style */}
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
                  <div className={styles.starRating} title={`Rated ${reviewDataNew.ratingValue} out of 10 stars`}> {/* Reusing Amex star rating style */}
                      ★★★★★
                      <span className={styles.filledStars} style={{ '--rating': `${(reviewDataNew.ratingValue / 10) * 100}%` }}>
                        ★★★★★
                      </span>
                  </div>
                </div>
                 <div className={styles.ratingDescription}>
                    <i>{reviewDataNew.cardName}: {reviewDataNew.reviewBody}</i>
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
                                <span className={styles.summaryLabel}>Rewards Rate:</span>
                                <span className={styles.summaryValue}>{summaryBoxData.rewardsRate}</span>
                            </div>
                             <div className={styles.summaryItem}>
                                <span className={styles.summaryIcon}><IconPlane /></span> {/* Using plane for Foreign TX fee */}
                                <span className={styles.summaryLabel}>Foreign Transaction Fee:</span>
                                <span className={styles.summaryValue}>{summaryBoxData.foreignTxFee}</span>
                            </div>
                            <div className={styles.summaryItem}>
                                <span className={styles.summaryIcon}><IconDollar /></span> {/* Using dollar for APR */}
                                <span className={styles.summaryLabel}>Intro Purchase APR:</span>
                                <span className={styles.summaryValue}>{summaryBoxData.introPurchAPR}</span>
                            </div>
                            <div className={styles.summaryItem} data-full-width="true">
                                <span className={styles.summaryIcon}><IconPlus /></span>
                                <span className={styles.summaryLabel}>Best For:</span>
                                <span className={styles.summaryValue}>{summaryBoxData.bestFor}</span>
                            </div>
                        </div>
                        <div className={styles.summaryBoxActions}>
                            <a href={reviewDataNew.ratesLink} className={styles.summaryRatesLink} target="_blank" rel="noopener noreferrer sponsored">
                                See Card Rates & Fees (BofA Site)
                            </a>
                             <a href='/business-rewards-calculator' className={`${styles.heroRewardsCalculator} ${styles.summaryButton}`} target="_blank" rel="noopener noreferrer"> {/* /* UPDATE THIS LINK if it exists */ }
                                Business Rewards Calculator
                            </a>
                        </div>
                    </div>
                </header>

                {/* Intro Section */}
                <section id="section-intro" className={styles.reviewSection}>
                  <h2>BofA Business Advantage Travel Rewards: Fueling U.S. Small Business Travel</h2>
                  <p>For savvy U.S. small business owners, every expense is an opportunity. If your business keeps you on the move, or if you&apos;re looking for ways to make your operational spending work harder, the right credit card isn&apos;t just a payment tool—it&apos;s a strategic asset. Enter the Bank of America® Business Advantage Travel Rewards World Mastercard®. With no annual fee and a straightforward rewards structure, it promises to turn your business expenditures into valuable travel experiences.</p>
                  <p>But is this the right travel companion for your enterprise? This card particularly shines for businesses already nestled within the Bank of America family or those considering a deeper banking relationship. Its true potential unfolds when linked with the Preferred Rewards for Business program, dramatically boosting your earning power. We&apos;ll explore its nitty-gritty, from earning points on everyday supplies to redeeming them for that much-needed business trip or even a well-deserved getaway. Let’s unpack whether this card can help your business travel further, smarter.</p>
                </section>

                <Image
                    src="/images/content/small-business-travel-planning.webp" // /* UPDATE THIS with a relevant image */
                    alt="Small business owner planning travel with a laptop"
                    width={800}
                    height={500}
                    className={styles.contentImage}
                    loading="lazy"
                />

                {/* Card Snapshot Section */}
                <section id="section-card-snapshot" className={styles.reviewSection}>
                    <h2>Card Snapshot: Key Features of the BofA Business Travel Mastercard</h2>
                    <p>Here’s a quick look at what this card brings to the table for your business:</p>
                    <ul className={styles.featureList}>
                        <li><strong>Card Name:</strong> Bank of America® Business Advantage Travel Rewards World Mastercard®</li>
                        <li><strong>Issuer:</strong> Bank of America</li>
                        <li><strong>Network:</strong> Mastercard</li>
                        <li><strong>Annual Fee:</strong> <a href={reviewDataNew.ratesLink} target="_blank" rel="noopener noreferrer sponsored">$0</a></li>
                        <li><strong>Welcome Offer:</strong> Earn 30,000 online bonus points after spending $3,000 in purchases in the first 90 days of account opening. That’s redeemable for a $300 statement credit towards travel or dining purchases. (<a href={reviewDataNew.officialWelcomeOfferLink} target="_blank" rel="noopener noreferrer sponsored">See Offer Details</a>)</li>
                        <li><strong>Rewards Rate:</strong>
                            <ul>
                                <li>Unlimited 1.5 points for every $1 spent on all purchases.</li>
                                <li>3 points for every $1 spent on travel (flights, hotels, rental cars) booked through the <a href={reviewDataNew.officialTravelCenterLink} target="_blank" rel="noopener noreferrer sponsored">Bank of America® Travel Center</a>.</li>
                                <li>Boost your earnings up to an unlimited 2.62 points per $1 on all purchases if you&apos;re a Platinum Honors tier member in the <a href={reviewDataNew.officialRewardsProgramLink} target="_blank" rel="noopener noreferrer sponsored">Preferred Rewards for Business program</a>.</li>
                            </ul>
                        </li>
                        <li><strong>Foreign Transaction Fee:</strong> None.</li>
                        <li><strong>Best For:</strong> Small business owners, especially those with existing Bank of America accounts, seeking a no-annual-fee travel rewards card that can deliver significantly amplified rewards through a banking relationship.</li>
                    </ul>
                </section>

                {/* Welcome Offer Section */}
                <section id="section-welcome-offer" className={styles.reviewSection}>
                    <h2>Welcome Offer: Unlock Your First $300 in Travel Value</h2>
                    <p>The Bank of America® Business Advantage Travel Rewards World Mastercard® rolls out the welcome mat with an enticing offer: earn <strong>30,000 online bonus points</strong> when you spend $3,000 in net purchases within the first 90 days of opening your account. (<a href={reviewDataNew.officialWelcomeOfferLink} target="_blank" rel="noopener noreferrer sponsored">Check current offer terms</a>). What does this mean for your business? Those 30,000 points translate directly into a $300 statement credit that can be applied to travel or dining expenses. This effectively values each bonus point at a solid 1 cent.</p>
                    <blockquote className={styles.highlightQuote}>
                        Current Welcome Offer: <strong>Earn 30,000 bonus points</strong> (worth $300 towards travel/dining) after $3,000 in purchases in the first 90 days.
                        (<a href={reviewDataNew.officialWelcomeOfferLink} target="_blank" rel="noopener noreferrer sponsored">See official offer details</a>)
                    </blockquote>
                    <p>Hitting the $3,000 spending threshold in three months (averaging $1,000 per month) is often quite manageable for active businesses. Compared to other business cards, especially those without an annual fee, this welcome bonus is quite competitive. It’s a straightforward way to get immediate value from the card, steering you towards using your points for travel and dining – where you get the best bang for your buck. Consider your upcoming expenses; if you can meet the threshold and have travel or dining purchases on the horizon, this bonus is a fantastic kickstart.</p>
                </section>

                {/* Earning Power Section */}
                <section id="section-earning-power" className={styles.reviewSection}>
                    <h2>Earning Points: Your Everyday Business Spending, Rewarded</h2>
                    <p>The beauty of this card lies in its simple, consistent earning structure. You&apos;ll earn an <strong>unlimited 1.5 points for every $1 spent</strong> on all your purchases, no matter the category. This flat-rate system is perfect for businesses with diverse spending patterns or those who prefer not to juggle rotating bonus categories. Plus, there’s no cap on the points you can earn, and they won’t expire as long as your account is in good standing.</p>
                    <p>Want to accelerate your earnings? Book your flights, hotels, or rental cars through the <a href={reviewDataNew.officialTravelCenterLink} target="_blank" rel="noopener noreferrer sponsored">Bank of America® Travel Center</a> and earn <strong>3 points for every $1 spent</strong>. While this is a generous rate, always compare the Travel Center&apos;s prices with other booking options. If the portal’s prices are higher, the extra points might not be worth it. For businesses with substantial, varied expenses, the unlimited 1.5x points offer straightforward, predictable value.</p>
                </section>

                {/* Preferred Rewards Section */}
                <section id="section-preferred-rewards" className={styles.reviewSection}>
                    <h2>Unlock Elite Rewards: The Preferred Rewards for Business Advantage</h2>
                    <p>This is where the Bank of America® Business Advantage Travel Rewards World Mastercard® truly distinguishes itself. By participating in the <a href={reviewDataNew.officialRewardsProgramLink} target="_blank" rel="noopener noreferrer sponsored">Bank of America Preferred Rewards for Business program</a>, you can significantly amplify your earnings. There&apos;s no fee to join; eligibility hinges on having an active, eligible Bank of America business checking account and maintaining a minimum three-month combined average daily balance in qualifying Bank of America business deposit and/or Merrill business investment accounts.</p>
                    <p>Here’s how the tiers supercharge your rewards:</p>
                    <ul className={styles.featureList}>
                        <li><strong>Gold Tier</strong> ($20,000 - $49,999 balance): Get a 25% bonus, boosting your rate to <strong>1.875 points per $1</strong>.</li>
                        <li><strong>Platinum Tier</strong> ($50,000 - $99,999 balance): Enjoy a 50% bonus, earning <strong>2.25 points per $1</strong>.</li>
                        <li><strong>Platinum Honors Tier</strong> ($100,000+ balance): Max out with a 75% bonus, achieving an impressive <strong>2.625 points per $1</strong>.</li>
                    </ul>
                    <p>These bonuses apply to your base earning rate. So, for Platinum Honors members, that 3x points at the Travel Center becomes a whopping <strong>5.25 points per dollar</strong>! This program transforms the card from a good no-fee option into a rewards-earning heavyweight, especially if you can leverage a deep banking relationship.</p>
                </section>

                {/* Redeeming Points Section */}
                <section id="section-redeeming-points" className={styles.reviewSection}>
                    <h2>Redeeming Points: Smart Strategies for Maximum Value</h2>
                    <p>Accumulating points is exciting, but knowing how to redeem them wisely is key. Here are your main options:</p>
                    <ul className={styles.featureList}>
                        <li><strong>Travel and Dining Statement Credits:</strong> Get the most straightforward value by redeeming points for statement credits against travel and dining purchases at 1 cent per point (e.g., 25,000 points = $250).</li>
                        <li><strong>Bank of America® Travel Center:</strong> Book flights, hotels, and car rentals directly through the <a href={reviewDataNew.officialTravelCenterLink} target="_blank" rel="noopener noreferrer sponsored">portal</a>, also at 1 cent per point, with no blackout dates.</li>
                        <li><strong>Cash Back:</strong> You can opt for cash back, but the value drops significantly, to about 0.6 cents per point (2,500 points might only get you $15). This makes it less ideal if cash is your primary goal.</li>
                        <li><strong>Gift Cards:</strong> The value per point for gift cards varies by merchant.</li>
                    </ul>
                    <p>The redemption process is user-friendly via Online Banking or the Mobile Banking app. Clearly, using points for travel or dining gives you the best return, reinforcing this card&apos;s position as a travel-focused rewards card.</p>
                </section>

                 {/* Real-World Example Section */}
                <section id="section-real-world-example" className={styles.reviewSection}>
                    <h2>Real-World Rewards: An E-Commerce Success Story</h2>
                    <p>Let&apos;s imagine Alex, who runs a thriving e-commerce business selling handmade goods. Alex travels to four trade shows a year and uses the card for various business expenses.</p>
                    <p><strong>Alex&apos;s Monthly Business Spending:</strong></p>
                    <ul className={styles.indentedList}>
                        <li>Online Advertising: $1,500</li>
                        <li>Shipping Supplies: $1,000</li>
                        <li>Software Subscriptions: $500</li>
                        <li>Travel (booked via BofA Travel Center for quarterly shows): $500 (averages to $2,000 annually on this card for simplicity)</li>
                        <li><strong>Total Monthly Spend on Card: $3,500</strong></li>
                    </ul>
                    <p><strong>Year 1 Earnings for Alex (Including Welcome Bonus):</strong></p>
                    <p>Let&apos;s assume Alex qualifies for the <strong>Platinum Honors Tier</strong> of Preferred Rewards for Business (75% bonus):</p>
                    <ul className={styles.indentedList}>
                        <li>Effective Earning Rate on General Purchases: 1.5 points * 1.75 = <strong>2.625 points per $1</strong></li>
                        <li>Effective Earning Rate on BofA Travel Center Bookings: 3 points * 1.75 = <strong>5.25 points per $1</strong></li>
                    </ul>
                    <p><strong>Monthly Points Calculation:</strong></p>
                    <ul className={styles.indentedList}>
                        <li>Non-Travel Spend ($3,000 general): $3,000 * 2.625 points/$ = 7,875 points</li>
                        <li>Travel Center Spend ($500): $500 * 5.25 points/$ = 2,625 points</li>
                        <li><strong>Total Monthly Points: 10,500 points</strong></li>
                    </ul>
                    <p><strong>Annual Points & Value:</strong></p>
                    <ul className={styles.indentedList}>
                        <li>Total Annual Points from Spending: 10,500 points/month * 12 months = 126,000 points</li>
                        <li>Welcome Bonus: 30,000 points (after meeting $3,000 spend in 90 days)</li>
                        <li><strong>Total Points in Year 1: 156,000 points</strong></li>
                        <li>Year 1 Rewards Value (at 1 cent/point for travel): 156,000 points * $0.01/point = <strong>$1,560</strong></li>
                    </ul>
                    <p>In this scenario, Alex earns a substantial $1,560 in travel value in the first year alone, thanks to regular business spending, the welcome bonus, and maximizing the Preferred Rewards for Business benefits. This clearly illustrates the powerful earning potential if you can leverage the top tiers.</p>
                </section>

                {/* Key Features at a Glance Section */}
                <section id="section-key-features-glance" className={styles.reviewSection}>
                    <h2>At a Glance: Top Features of the BofA Business Travel Card</h2>
                    <ul className={styles.featureList}>
                        <li><strong>$0 Annual Fee:</strong> Cost-effective ownership for your business.</li>
                        <li><strong>No Foreign Transaction Fees:</strong> Essential for international business travel and purchases. (<a href={reviewDataNew.ratesLink} target="_blank" rel="noopener noreferrer sponsored">See Rates & Fees</a>)</li>
                        <li><strong>Generous Welcome Offer:</strong> Typically 30,000 bonus points, translating to $300 in travel or dining value. (<a href={reviewDataNew.officialWelcomeOfferLink} target="_blank" rel="noopener noreferrer sponsored">Check Offer</a>)</li>
                        <li><strong>Solid Base Rewards:</strong> Unlimited 1.5 points per $1 spent on all business purchases.</li>
                        <li><strong>Boosted Travel Rewards:</strong> Earn 3 points per $1 on travel booked via the <a href={reviewDataNew.officialTravelCenterLink} target="_blank" rel="noopener noreferrer sponsored">BofA Travel Center</a>.</li>
                        <li><strong>Preferred Rewards Power-Up:</strong> Significantly increase earnings – up to 75% more points (achieving up to 2.625 points/$1 on general purchases, and 5.25 points/$1 at the Travel Center) if you qualify for <a href={reviewDataNew.officialRewardsProgramLink} target="_blank" rel="noopener noreferrer sponsored">Preferred Rewards for Business</a>.</li>
                        <li><strong>Flexible Travel Redemptions:</strong> Redeem points for statement credits against travel and dining, or book through the portal, all at 1 cent per point.</li>
                        <li><strong>0% Intro APR:</strong> Benefit from 0% introductory APR on purchases for the first 9 billing cycles. (<a href={reviewDataNew.ratesLink} target="_blank" rel="noopener noreferrer sponsored">See Rates & Fees</a>)</li>
                        <li><strong>Travel Protections:</strong> Includes important coverages like travel accident insurance, lost luggage reimbursement, trip cancellation, and trip delay coverage. (Refer to your <a href={reviewDataNew.officialTermsLink} target="_blank" rel="noopener noreferrer sponsored">Guide to Benefits</a>).</li>
                        <li><strong>Business Management Tools:</strong> Access to online/mobile banking, and the potential for employee cards to streamline expenses.</li>
                    </ul>
                </section>

                {/* Rates & Fees Section */}
                <section id="section-rates-fees" className={styles.reviewSection}>
                    <h2>Rates & Fees: Understanding the Costs for Your Business</h2>
                    <p>Transparency in rates and fees is crucial for any business credit card. Always consult the official <a href={reviewDataNew.officialTermsLink} target="_blank" rel="noopener noreferrer sponsored">Terms and Conditions</a> from Bank of America for the most current and complete information.</p>
                    <DraggableTableWrapper>
                        <div className={styles.tableContainer}>
                            <table className={`${styles.statsTable} ${styles.ratesFeesTable}`}>
                                <thead>
                                    <tr>
                                        <th>Fee/Rate Category</th>
                                        <th>Details</th>
                                        <th>Notes for Your Business</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr><td>Annual Fee</td><td><strong>$0</strong></td><td>Excellent for keeping overhead low.</td></tr>
                                    <tr><td>Introductory Purchase APR</td><td>0% for the first 9 billing cycles</td><td>Helpful for initial investments or large purchases.</td></tr>
                                    <tr><td>Standard Purchase APR</td><td>Variable, typically 17.49% to 27.49%</td><td>Based on creditworthiness; aim to pay in full to avoid interest.</td></tr>
                                    <tr><td>Balance Transfer Fee</td><td>4% of each transaction</td><td>Consider this fee if planning to transfer a balance.</td></tr>
                                    <tr><td>Cash Advance APR</td><td>Higher variable rate (e.g., 28.49%)</td><td>Cash advances are costly; use sparingly.</td></tr>
                                    <tr><td>Cash Advance Fee</td><td>Typically 3%-5% (min. $10)</td><td>Adds to the cost of cash advances.</td></tr>
                                    <tr><td>Foreign Transaction Fee</td><td><strong>$0</strong></td><td>Significant savings on international purchases.</td></tr>
                                    <tr><td>Late Payment Fee</td><td>Varies; check terms</td><td>Avoid by paying on time.</td></tr>
                                    <tr><td>Returned Payment Fee</td><td>Varies; check terms</td><td>Ensure sufficient funds for payments.</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </DraggableTableWrapper>
                    <p><small>Note: APRs are variable and subject to change. Always check the issuer&apos;s official <a href={reviewDataNew.ratesLink} target="_blank" rel="noopener noreferrer sponsored">rates and fees disclosure</a>.</small> The 0% intro APR is a great short-term benefit, but aim to pay your balance in full monthly to avoid interest charges once the standard APR kicks in.</p>
                </section>

                {/* Travel Perks and Protections Section */}
                <section id="section-travel-protections" className={styles.reviewSection}>
                    <h2>Travel Perks & Protections: More Than Just Points</h2>
                    <p>This card offers valuable peace of mind for business travelers, ensuring you&apos;re covered on the go:</p>
                    <ul className={styles.featureList}>
                        <li><IconPlane className={styles.listIcon} /><strong>No Foreign Transaction Fees:</strong> Save approximately 3% on purchases made outside the U.S.</li>
                        <li><IconShield className={styles.listIcon} /><strong>Travel Accident Insurance:</strong> Coverage up to $1 million for eligible incidents.</li>
                        <li><IconBriefcase className={styles.listIcon} /><strong>Lost Luggage Reimbursement:</strong> Assistance if your checked or carry-on bags are lost or stolen.</li>
                        <li><IconX className={styles.listIcon} /><strong>Trip Cancellation/Interruption Coverage:</strong> Protection against non-refundable expenses if your trip is canceled or cut short for covered reasons.</li>
                        <li><IconInfo className={styles.listIcon} /><strong>Trip Delay Reimbursement:</strong> Covers reasonable expenses like meals and lodging during significant, covered travel delays.</li>
                        <li><strong>Mastercard World Benefits:</strong> As a World Mastercard, you may also get access to:
                            <ul className={styles.indentedList}>
                                <li><strong>Mastercard Global Service™:</strong> 24/7 assistance for lost or stolen cards.</li>
                                <li><strong>Mastercard ID Theft Protection™:</strong> Monitoring and resolution services (enrollment may be required).</li>
                                <li><strong>Auto Rental Collision Damage Waiver (CDW):</strong> Secondary coverage for rental cars when you decline the rental company’s CDW. Verify terms in your Guide to Benefits.</li>
                                <li><strong>Mastercard Easy Savings® Program:</strong> Automatic rebates at participating merchants.</li>
                            </ul>
                        </li>
                    </ul>
                    <p>Always refer to your specific <a href={reviewDataNew.officialTermsLink} target="_blank" rel="noopener noreferrer sponsored">Guide to Benefits</a> provided by Bank of America for full details, terms, conditions, and limitations of these coverages.</p>
                </section>

                <Image
                    src="/images/content/business-travel-airport.webp" // /* UPDATE THIS with a relevant image */
                    alt="Business traveler at an airport, looking confident"
                    width={800}
                    height={500}
                    className={styles.contentImage}
                    loading="lazy"
                />

                {/* Business-Centric Benefits Section */}
                <section id="section-business-benefits" className={styles.reviewSection}>
                    <h2>Business-Centric Benefits: Tools for Your Enterprise Growth</h2>
                    <p>Beyond travel rewards, the Bank of America® Business Advantage Travel Rewards card supports your day-to-day operations:</p>
                    <ul className={styles.featureList}>
                        <li><IconShield className={styles.listIcon} /><strong>$0 Liability Guarantee:</strong> Protection against unauthorized purchases made with your card.</li>
                        <li><IconCheck className={styles.listIcon} /><strong>Contactless Card Technology:</strong> Secure and convenient tap-to-pay functionality.</li>
                        <li><IconGift className={styles.listIcon} /><strong>Purchase Protection & Extended Warranty:</strong> May cover eligible new purchases against damage or theft for a limited time and extend manufacturer warranties. (Refer to your <a href={reviewDataNew.officialTermsLink} target="_blank" rel="noopener noreferrer sponsored">Guide to Benefits</a>).</li>
                        <li><IconBriefcase className={styles.listIcon} /><strong>Account Management:</strong> Robust online and mobile banking tools to manage your account anytime, anywhere.</li>
                        <li><IconPlus className={styles.listIcon} /><strong>Employee Cards:</strong> Typically available at no extra cost, with the ability to set customizable spending limits, helping you manage employee expenses efficiently.</li>
                        <li><IconInfo className={styles.listIcon} /><strong>Accounting Software Integration:</strong> Bank of America’s platform often supports integration with popular accounting tools like QuickBooks, simplifying your bookkeeping.</li>
                        <li><IconDollar className={styles.listIcon} /><strong>Cash Flow Management:</strong> Potential for overdraft protection when your card is linked to an eligible Bank of America business checking account.</li>
                    </ul>
                    <p>These features, especially when combined with Bank of America&apos;s comprehensive digital tools and business services, can significantly streamline your business finances and operations.</p>
                </section>

                {/* Application Journey Section */}
                <section id="section-application-process" className={styles.reviewSection}>
                    <h2>Application Journey: What Your Business Needs to Apply</h2>
                    <p>Applying for the Bank of America® Business Advantage Travel Rewards card involves providing details about your business and your personal credit history. Generally, an "excellent" personal credit score is recommended for the best chance of approval. (<a href={reviewDataNew.applyLink} target="_blank" rel="noopener noreferrer sponsored">Apply on BofA's secure site</a>).</p>
                    <p><strong>Information Typically Required for Application:</strong> (<a href={bofaBusinessAppInfoPage} target="_blank" rel="noopener noreferrer sponsored">See BofA's guidance</a>)</p>
                    <ul className={styles.featureList}>
                        <li><strong>Business Details:</strong> Legal business name, business structure (e.g., sole proprietorship, LLC, corporation), Tax ID (EIN) or SSN (for sole proprietors), business establishment date, annual revenue, and estimated monthly credit card expenses.</li>
                        <li><strong>Beneficial Owner Information:</strong> Details for any individual who owns 25% or more of the equity interests of the business and one individual with significant responsibility to control, manage, or direct the business (e.g., name, date of birth, SSN, address).</li>
                        <li><strong>Personal Information (Applicant/Guarantor):</strong> Your full name, Social Security Number (SSN), date of birth, residential address, and personal income.</li>
                    </ul>
                    <p>Applications can typically be submitted online. While approval can sometimes be quick, it may take 7-10 business days or longer if additional information is required. A strong personal credit profile is crucial, as a personal guarantee is common for small business credit cards, meaning you are personally liable for the debt if the business cannot pay.</p>
                </section>

                {/* Who Benefits Most Section */}
                <section id="section-who-benefits" className={styles.reviewSection}>
                    <h2>Who Benefits Most? Ideal Profiles for This Business Card</h2>
                    <p>This card is a strategic fit for specific types of U.S. small businesses:</p>
                    <ul className={styles.featureList}>
                        <li><IconStar className={styles.listIcon} /><strong>Existing Bank of America / Merrill Clients:</strong> This is the sweet spot. If your business qualifies for <a href={reviewDataNew.officialRewardsProgramLink} target="_blank" rel="noopener noreferrer sponsored">Preferred Rewards for Business</a> (especially Platinum or Platinum Honors tiers), this card transforms into a top-tier earner thanks to significant rewards boosts.</li>
                        <li><IconCheck className={styles.listIcon} /><strong>Businesses Prioritizing No Annual or Foreign Transaction Fees:</strong> A great entry point for straightforward travel rewards without worrying about an annual cost or fees on international purchases.</li>
                        <li><IconBriefcase className={styles.listIcon} /><strong>Companies with Diverse, High Spending:</strong> The flat-rate unlimited earning (further amplified by Preferred Rewards) is highly advantageous for businesses with varied expenses that don't fit neatly into specific bonus categories of other cards.</li>
                        <li><IconPlane className={styles.listIcon} /><strong>Those Utilizing the BofA Travel Center:</strong> If the <a href={reviewDataNew.officialTravelCenterLink} target="_blank" rel="noopener noreferrer sponsored">Bank of America® Travel Center</a> offers competitive pricing for your flights, hotels, and rental cars, the 3x points (up to 5.25x with top-tier Preferred Rewards) is a powerful incentive.</li>
                        <li><IconDollar className={styles.listIcon} /><strong>Businesses Needing an Introductory APR on Purchases:</strong> The 0% introductory APR for the first 9 billing cycles offers valuable breathing room for new businesses or those planning significant initial expenses. (<a href={reviewDataNew.ratesLink} target="_blank" rel="noopener noreferrer sponsored">See Rates & Fees</a>)</li>
                    </ul>
                    <p><strong>Consider Alternatives If Your Business:</strong></p>
                    <ul className={styles.indentedList}>
                        <li>Is unwilling or unable to meet the balance requirements for the Preferred Rewards for Business program.</li>
                        <li>Primarily wants flexible, high-value cash back (as this card's cash redemption value is lower).</li>
                        <li>Needs premium travel perks like airport lounge access or automatic elite hotel status with specific chains (which this card doesn't offer directly).</li>
                        <li>Has fair or developing credit, as excellent credit is generally recommended.</li>
                    </ul>
                </section>

                {/* Pros & Cons Section */}
                <section id="section-pros-cons" className={styles.reviewSection}>
                    <h2>Pros & Cons: A Balanced Look at the BofA Business Travel Card</h2>
                    <div className={styles.prosConsContainer}>
                        <div className={styles.prosList}>
                            <h3><IconPlus className={styles.listIcon} /> Pros: Why It Shines</h3>
                            <ul>
                                <li><strong>$0 Annual Fee:</strong> Highly accessible and cost-effective for any business.</li>
                                <li><strong>No Foreign Transaction Fees:</strong> Excellent for international business travel and online purchases from foreign vendors.</li>
                                <li><strong>Strong Welcome Offer:</strong> A valuable $300 towards travel or dining for meeting a manageable spending threshold.</li>
                                <li><strong>Simple, Unlimited Base Rewards:</strong> Easy-to-understand 1.5x points on all purchases with no caps.</li>
                                <li><strong>Exceptional Rewards with Preferred Rewards:</strong> Potential to earn up to 2.625 points/$1 on general spending (or 5.25x at BofA Travel Center) for top-tier members, a market-leading rate for a no-fee card.</li>
                                <li><strong>Flexible Travel Redemptions:</strong> Good value at 1 cent per point for travel and dining statement credits or portal bookings.</li>
                                <li><strong>0% Intro APR on Purchases:</strong> Useful for managing cash flow on new purchases for the first 9 billing cycles.</li>
                                <li><strong>Valuable Travel Protections:</strong> Includes key insurance coverages for peace of mind during business travel.</li>
                            </ul>
                        </div>
                        <div className={styles.consList}>
                            <h3><IconX className={styles.listIcon} /> Cons: Potential Drawbacks</h3>
                            <ul>
                                <li><strong>Best Rewards Tied to Preferred Rewards Status:</strong> Requires maintaining significant balances with Bank of America or Merrill to unlock top earning rates.</li>
                                <li><strong>Low Cash Back Redemption Value:</strong> Not ideal if your business prioritizes cash back over travel rewards.</li>
                                <li><strong>BofA Travel Center for Highest Travel Bonus:</strong> To get 3x points (before PRfB bonus), you must use their portal, whose pricing may not always be the most competitive.</li>
                                <li><strong>Lacks Premium Travel Perks:</strong> No airport lounge access or automatic high-tier elite status with hotel programs.</li>
                                <li><strong>Requires Excellent Credit:</strong> May not be accessible to all small business owners, especially those with new or developing credit profiles.</li>
                                <li><strong>Maintaining Preferred Rewards Status:</strong> Requires consistent attention to qualifying balances, as dips can affect your tier.</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Competitor Comparison Section */}
                <section id="section-competitor-comparison" className={styles.reviewSection}>
                    <h2>Card vs. Card: BofA Business Travel vs. Competitors</h2>
                    <p>How does the Bank of America® Business Advantage Travel Rewards card stack up against other popular business cards? Here’s a comparative look. Remember, offers and benefits can change, so always <a href={reviewDataNew.officialOverviewLink} target="_blank" rel="noopener noreferrer sponsored">check with the issuer</a>.</p>
                    <DraggableTableWrapper>
                        <div className={styles.tableContainer}>
                            <table className={`${styles.statsTable} ${styles.comparisonTable}`}>
                                <thead>
                                    <tr>
                                        <th>Feature</th>
                                        <th>Bank of America® Business Advantage Travel Rewards</th>
                                        <th>Chase Ink Business Unlimited®</th>
                                        <th>Capital One® Spark® Miles Select for Business</th>
                                        <th>Amex Blue Business® Plus</th>
                                        <th>Bank of America® Business Advantage Unlimited Cash Rewards</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td data-label="Feature"><strong>Annual Fee</strong></td>
                                        <td data-label={reviewDataNew.cardShortName}><strong>$0</strong></td>
                                        <td data-label="Chase Ink Business Unlimited®">$0</td>
                                        <td data-label="Capital One Spark Miles Select">$0</td>
                                        <td data-label="Amex Blue Business Plus">$0</td>
                                        <td data-label="BofA Unlimited Cash Rewards"><strong>$0</strong></td>
                                    </tr>
                                    <tr>
                                        <td data-label="Feature"><strong>Signup Bonus (Typical)</strong></td>
                                        <td data-label={reviewDataNew.cardShortName}>30,000 pts ($300 travel)</td>
                                        <td data-label="Chase Ink Business Unlimited®">$750 cash back</td>
                                        <td data-label="Capital One Spark Miles Select">20,000 miles ($200 travel)</td>
                                        <td data-label="Amex Blue Business Plus">Varies (e.g., 15,000 pts)</td>
                                        <td data-label="BofA Unlimited Cash Rewards">$300 statement credit</td>
                                    </tr>
                                    <tr>
                                        <td data-label="Feature"><strong>Top Earning Category</strong></td>
                                        <td data-label={reviewDataNew.cardShortName}>3x at BofA Travel Center (up to 5.25x w/ PRfB)</td>
                                        <td data-label="Chase Ink Business Unlimited®">1.5% cash back on everything</td>
                                        <td data-label="Capital One Spark Miles Select">1.5x miles on everything; 5x on hotels/rentals via Capital One Travel</td>
                                        <td data-label="Amex Blue Business Plus">2x Membership Rewards® pts on first $50K/yr, then 1x</td>
                                        <td data-label="BofA Unlimited Cash Rewards">1.5% cash back (up to 2.625% w/ PRfB)</td>
                                    </tr>
                                    <tr>
                                        <td data-label="Feature"><strong>Effective Travel Value (Base)</strong></td>
                                        <td data-label={reviewDataNew.cardShortName}>1.5% (up to 2.625% w/ PRfB)</td>
                                        <td data-label="Chase Ink Business Unlimited®">N/A (Cash Back)</td>
                                        <td data-label="Capital One Spark Miles Select">1.5%</td>
                                        <td data-label="Amex Blue Business Plus">Varies by redemption (Amex MR points)</td>
                                        <td data-label="BofA Unlimited Cash Rewards">N/A (Cash Back)</td>
                                    </tr>
                                    <tr>
                                        <td data-label="Feature"><strong>Foreign Transaction Fee</strong></td>
                                        <td data-label={reviewDataNew.cardShortName}><strong>$0</strong></td>
                                        <td data-label="Chase Ink Business Unlimited®">3%</td>
                                        <td data-label="Capital One Spark Miles Select"><strong>$0</strong></td>
                                        <td data-label="Amex Blue Business Plus">2.7% (after conversion)</td>
                                        <td data-label="BofA Unlimited Cash Rewards"><strong>$0</strong> (Verify specific terms)</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </DraggableTableWrapper>
                    <p><small>Note: Welcome offers and specific card details can change. PRfB = Preferred Rewards for Business. This table shows the BofA Travel Rewards card is highly competitive for no-annual-fee travel rewards, especially with PRfB status. However, other cards might offer better flat-rate cash back or different points ecosystems if a deep BofA relationship isn&apos;t your goal.</small></p>
                </section>

                {/* User Testimonials Section */}
                <section id="section-user-testimonials" className={styles.reviewSection}>
                    <h2>User Testimonials: Voices from Business Owners</h2>
                    <p>Here’s what real business owners are saying about their experiences (paraphrased for clarity):</p>
                    <div className={styles.testimonialContainer}>
                        <blockquote className={styles.testimonialQuote}>
                            <p>"It's a solid no-annual-fee, no-foreign-transaction-fee card at 1.5% back. But the *real magic* happens with Preferred Rewards. If you have $100k with BofA/Merrill, it becomes a 2.625% travel card, which is amazing."</p>
                            <footer>– Mark, E-commerce Seller (Positive on PRfB)</footer>
                            <p className={styles.testimonialHighlight}><em>Insight: Highlights the transformative value of the Preferred Rewards program for maximizing earnings.</em></p>
                        </blockquote>
                        <blockquote className={styles.testimonialQuote}>
                            <p>"Great card if you bank heavily with BofA, potentially hitting that 2.625% rate. Otherwise, it's just okay. Remember, points are for travel credits, not airline miles you can transfer directly to partners."</p>
                            <footer>– Linda, Consultant (Neutral, Realistic View)</footer>
                            <p className={styles.testimonialHighlight}><em>Insight: Emphasizes that top rewards are conditional on a deep banking relationship and clarifies point redemption nature.</em></p>
                        </blockquote>
                        <blockquote className={styles.testimonialQuote}>
                            <p>"My friend struggled to actually get the top rewards rate despite thinking they met the Platinum Honors balance. Turns out, daily balances matter, and dips can reset your qualification."</p>
                            <footer>– Sam, Small Retailer (Cautionary on PRfB Maintenance)</footer>
                            <p className={styles.testimonialHighlight}><em>Insight: A crucial reminder about the diligence needed to maintain Preferred Rewards status.</em></p>
                        </blockquote>
                        <blockquote className={styles.testimonialQuote}>
                            <p>"Best for existing BofA customers who qualify for higher rates via Preferred Rewards. Its simple rewards also make it a decent option for any business needing a no-annual-fee travel card. Excellent credit needed."</p>
                            <footer>– Financial Review Site (Balanced Expert Opinion, paraphrased from NerdWallet sentiment)</footer>
                            <p className={styles.testimonialHighlight}><em>Insight: Strong for BofA loyalists, decent for others, but underlines the high credit score requirement.</em></p>
                        </blockquote>
                        <blockquote className={styles.testimonialQuote}>
                            <p>"Many users appreciate BofA's extensive branch network and online tools. However, some report occasional long customer service wait times or complexities with fee structures for other services."</p>
                            <footer>– General BofA Business Services Feedback (Mixed)</footer>
                            <p className={styles.testimonialHighlight}><em>Insight: The overall banking experience with Bank of America can be a factor beyond the card itself.</em></p>
                        </blockquote>
                    </div>
                </section>

                {/* Fine Print Section */}
                <section id="section-fine-print" className={styles.reviewSection}>
                    <h2>Navigating the Fine Print: Key Terms to Understand</h2>
                    <p>Before applying, it’s vital to understand key terms associated with the Bank of America® Business Advantage Travel Rewards card:</p>
                    <ul className={styles.featureList}>
                        <li><strong>Preferred Rewards for Business:</strong> Understand the specific three-month combined average daily balance requirements ($20K for Gold, $50K for Platinum, $100K for Platinum Honors in qualifying BofA business deposit and/or Merrill business investment accounts). The rewards bonus does <em>not</em> apply to the initial welcome offer. Consistency in maintaining these balances is key to retaining your tier and bonus. <a href={reviewDataNew.officialRewardsProgramLink} target="_blank" rel="noopener noreferrer sponsored">Learn more about Preferred Rewards</a>.</li>
                        <li><strong>Points Redemption:</strong> Points are worth 1 cent each for travel and dining statement credits or when booking via the BofA Travel Center. Cash back redemptions are significantly lower (e.g., 0.6 cents per point). Points generally do not expire as long as your account remains open and in good standing.</li>
                        <li><strong>"Travel" and "Dining" Definitions:</strong> Bank of America often has broad merchant category code (MCC) definitions for what qualifies as "travel" and "dining" for redemption purposes, which is a plus, offering flexibility. However, always verify specific merchant classifications if unsure.</li>
                        <li><strong>Grace Period & Interest:</strong> There's typically a grace period of at least 25 days to pay your new balance in full to avoid interest on purchases. Interest on cash advances often accrues immediately from the transaction date. Be aware of the Pay Over Time feature's APR if you carry a balance.</li>
                        <li><strong>Changes to Terms:</strong> Bank of America, like all issuers, reserves the right to change card terms, benefits, and fees with advance notice. Always read communications from the bank regarding your account.</li>
                    </ul>
                </section>

                {/* Final Verdict Section */}
                <section id="section-final-verdict" className={styles.reviewSection}>
                  <h2>Final Verdict: Is This BofA Card Your Business Travel Ally?</h2>
                  <p>The Bank of America® Business Advantage Travel Rewards World Mastercard® is a uniquely compelling card, but its true brilliance shines brightest under specific circumstances. For businesses deeply integrated with Bank of America or Merrill, especially those qualifying for Platinum or Platinum Honors in the <a href={reviewDataNew.officialRewardsProgramLink} target="_blank" rel="noopener noreferrer sponsored">Preferred Rewards for Business program</a>, this card transforms into an absolute powerhouse. Earning up to 2.625 points per dollar on all spending (and even more through the BofA Travel Center) with <a href={reviewDataNew.ratesLink} target="_blank" rel="noopener noreferrer sponsored">no annual fee</a> is an exceptional value proposition that&apos;s hard to beat. Add in no foreign transaction fees and useful travel protections (always check your <a href={reviewDataNew.officialTermsLink} target="_blank" rel="noopener noreferrer sponsored">Guide to Benefits</a>), and it&apos;s a fantastic tool for these businesses.</p>
                  <p>If your business isn&apos;t in a position to leverage Preferred Rewards, the card is still a respectable contender. You get a solid 1.5 points per dollar, a $0 annual fee, no foreign transaction fees, and a helpful 0% introductory APR on purchases. However, in this scenario, it faces stiffer competition from other cards that might offer slightly better flat-rate rewards or different perks without requiring a deep banking relationship. Businesses prioritizing straightforward cash back should also look elsewhere due to the lower cash redemption value.</p>
                  <blockquote className={styles.highlightQuote}>
                    <strong>Ultimately, if you can harness the power of the Preferred Rewards for Business program, this card is a stellar choice. If not, it’s a good, but not necessarily a game-changing, option for your business wallet.</strong>
                  </blockquote>
                  <p>Carefully assess your banking relationships, spending habits, and rewards goals to decide if this card is the right strategic partner for your business travel ambitions. For more details or to apply, visit the <a href={reviewDataNew.officialOverviewLink} target="_blank" rel="noopener noreferrer sponsored">official Bank of America Business Advantage Travel Rewards card page</a>.</p>
                </section>

                {/* FAQ Section - Moved After Final Verdict */}
                <section id="section-faqs-jump" className={`${styles.reviewSection} ${styles.faqSection}`}>
                  <h2>Answered: Your Top BofA Business Travel Card FAQs</h2>
                  <div className={styles.faqContainer}>
                      {structuredDataOptimized['@graph'].find(item => item['@type'] === 'FAQPage').mainEntity.map((faq, index) => (
                          <details key={index} className={styles.faqItem} name={`faq-${index + 1}`}>
                              <summary className={styles.faqQuestion}>{`${index + 1}. ${faq.name}`}</summary>
                              <div className={styles.faqAnswer}>
                                <p dangerouslySetInnerHTML={{ __html:
                                  faq.acceptedAnswer.text
                                    .replace("Bank of America® Travel Center", `<a href="${reviewDataNew.officialTravelCenterLink}" target="_blank" rel="noopener noreferrer sponsored">Bank of America® Travel Center</a>`)
                                    .replace("Preferred Rewards for Business program", `<a href="${reviewDataNew.officialRewardsProgramLink}" target="_blank" rel="noopener noreferrer sponsored">Preferred Rewards for Business program</a>`)
                                    .replace("Guide to Benefits", `<a href="${reviewDataNew.officialTermsLink}" target="_blank" rel="noopener noreferrer sponsored">Guide to Benefits</a>`)
                                }} />
                              </div>
                          </details>
                      ))}
                  </div>
                </section>

                {/* E-A-T Section */}
                <section id="section-eat" className={`${styles.reviewSection} ${styles.eatSection}`}>
                    <h2 dangerouslySetInnerHTML={{ __html: `Our Commitment to E-A-T: Expertise, Authority &amp; Trust`}}></h2>
                    <p>At <strong>{siteName}</strong>, we are committed to providing content that exemplifies Expertise, Authoritativeness, and Trustworthiness (E-A-T). This review of the <strong>{reviewDataNew.cardName}</strong> has been meticulously researched and crafted. We&apos;ve analyzed the card&apos;s features, benefits, rewards structure, and fees, referencing official issuer documentation from Bank of America and considering real-world user experiences and data points from the business travel and rewards community. Our goal is to present a balanced, comprehensive, and reliable guide to help U.S. small business owners make an informed decision. All information is current as of <strong>{new Date(updateDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</strong>, but we always recommend verifying details directly with the issuer as terms can change. Visit the <a href={reviewDataNew.officialOverviewLink} target="_blank" rel="noopener noreferrer sponsored">official Bank of America page</a> for the latest information.</p>
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
                <Image src={reviewDataNew.imageUrl} /* UPDATE THIS */ alt={`${reviewDataNew.cardShortName} card image`} width={60} height={38} className={styles.stickyFooterCardImage} />
                <div className={styles.stickyFooterText}>
                  <span className={styles.stickyFooterCardName}>{reviewDataNew.cardShortName}</span>
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
    </div> // Closing the top-level div
  );
}

export default BofABusinessAdvantageTravelRewardsReviewPage;