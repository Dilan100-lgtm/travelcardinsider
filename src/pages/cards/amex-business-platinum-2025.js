/* ------------------------------------------------------------------
    File:  pages/reviews/american-express-business-platinum-card-review.js
    Route: https://www.yourwebsite.com/reviews/american-express-business-platinum-card-review
------------------------------------------------------------------- */

import React, { useState, useEffect, useCallback, useRef } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import styles from '../../styles/ReviewPage.module.css'; // Assuming same CSS module

import TableOfContents from '../../components/TableOfContents'; // Assuming same TOC component
// UPDATE ICON PATHS AS NEEDED - These are examples based on the Gold card
import IconGift from '../../components/icons/icon-gift.svg';
import IconStar from '../../components/icons/icon-star.svg'; // For rewards/rating
import IconCheck from '../../components/icons/icon-Credit Card.svg'; // For fee/checkmark
import IconPlus from '../../components/icons/icon-target.svg'; // For 'Best For'
import IconPlane from '../../components/icons/icon-plane.svg'; // For travel perks
import IconDollar from '../../components/icons/icon-dollar.svg'; // For credits
import IconBuilding from '../../components/icons/icon-building.svg'; // EXAMPLE: For business features
import IconShield from '../../components/icons/icon-shield.svg'; // EXAMPLE: For protections
// Add any other icons you deem relevant for Business Platinum

const RatingTooltip = dynamic(() => import('../../components/RatingTooltip'), { ssr: false, loading: () => null });

/* ──────────────────────────────
    CONSTANTS & STATIC DATA
    ────────────────────────────── */
const siteName = 'Travelcardinsider'; // UPDATE AS NEEDED if different
const siteUrl = 'https://www.travelcardinsider.com'; // UPDATE AS NEEDED: Replace with your actual site URL
const pagePath = '/reviews/american-express-business-platinum-card-review'; // UPDATE AS NEEDED for this specific review
const pageUrlFull = `${siteUrl}${pagePath}`;
const publishDate = '2025-05-30'; // UPDATE AS NEEDED: Current date or actual publish date
const updateDate = '2025-05-30'; // UPDATE AS NEEDED: Current date or actual update date

const reviewDataNew = {
  cardName        : 'The Business Platinum Card® from American Express',
  // SEO Optimized Title
  title           : 'Amex Business Platinum Card Review (2025): Maximize Travel & Business Perks',
  // Meta Description
  description     : 'In-depth 2025 review of The Business Platinum Card® from American Express. Explore unparalleled lounge access, elite hotel status, $1500+ in credits (Dell, Airline, CLEAR®), 35% airline bonus & the $695 fee. Is it the ultimate US business travel partner?',
  // Keywords
  keywords        : 'American Express Business Platinum Card review, Amex Business Platinum, Amex Business Platinum benefits, Membership Rewards, Amex business travel card, luxury business card, Amex lounge access, Amex Dell credit, Amex airline fee credit, American Express review 2025',
  author: { // Placeholder: UPDATE ALL AUTHOR DETAILS AS NEEDED (Copied from Gold, update for accuracy)
      name: 'Dilan Madushanka',
      title: 'Founder & Lead Editor',
      imageUrl: '/WhatsApp Image 2025-05-12 at 4.09.58 PM.jpeg', // Placeholder - UPDATE
      imageWidth: 40,
      imageHeight: 40,
      tooltipImageUrl: '/WhatsApp Image 2025-05-12 at 4.09.58 PM.jpeg', // Placeholder - UPDATE
      tooltipImageWidth: 60,
      tooltipImageHeight: 60,
      expertise: [
          'Premium Business Credit Cards',
          'Luxury Travel Perks & Benefits',
          'Airline & Hotel Loyalty Programs for Businesses',
          'Maximizing Statement Credits',
          'American Express Business Cards'
      ],
      bioSnippet: 'Dilan Madushanka is the founder and lead editor of Travelcardinsider, specializing in demystifying premium business and travel credit cards to unlock maximum value for entrepreneurs and frequent flyers.', // UPDATE
      fullBioLink: '/author/dilan-madushanka', // Placeholder - UPDATE
      fullBio: `Dilan Madushanka is the founder and lead editor of Travelcardinsider, a platform dedicated to helping business owners and savvy travelers make smarter decisions with premium credit cards. [MORE BIO DETAILS TO BE ADDED BY USER]`, // UPDATE
      publishedStats: 'X+ in-depth business card reviews', // Placeholder - UPDATE
      testedStats: 'Over Y+ credit card benefits across major business brands', // Placeholder - UPDATE
      socialLinks: {
          linkedin: 'https://www.linkedin.com/in/dilan-madushanka-b65293365',
          twitter: 'https://x.com/team_dilan',
          email: 'team@travelcardinsider.com'
      }
  },
  siteName: siteName,
  imageUrl        : '/platinum-card-image-alt.avif', // /* UPDATE THIS */ Placeholder: Replace with actual Amex Business Platinum card image URL
  imageWidth      : 1290, // Placeholder - UPDATE if image dimensions differ
  imageHeight     : 812,  // Placeholder - UPDATE if image dimensions differ
  ratingValue     : 9.0,  // /* UPDATE THIS */ Placeholder - Example rating
  ratingCount     : 310,  // /* UPDATE THIS */ Placeholder - Example rating count
  reviewBody      : 'Our editors evaluate The Business Platinum Card® from American Express based on its extensive travel benefits (Global Lounge Collection®, Fine Hotels + Resorts®, elite status), comprehensive statement credits (Dell, Airline, Hilton, Indeed, Adobe, Wireless, CLEAR®), Membership Rewards® earning (including 5X on travel, 1.5X on large purchases), the 35% Airline Bonus, business-centric features, purchase protections, the annual fee, and its overall value proposition for U.S.-based businesses with significant travel and operational expenses.',
  aprRange        : 'Pay Over Time APR: See Pay Over Time APR Rate & Fee Information on issuer\'s site (e.g., Prime Rate + 10.99% to Prime Rate + 19.99%, not to exceed 29.99%, subject to change).',
  annualFee       : 695,
  // IMPORTANT: REPLACE WITH YOUR ACTUAL AFFILIATE LINK FOR AMEX BUSINESS PLATINUM
  applyLink       : 'https://www.americanexpress.com/us/credit-cards/business/business-platinum/', // /* UPDATE THIS */
  // Official rates link - Main page usually has a "Rates and Fees" link
  ratesLink       : 'https://www.americanexpress.com/us/credit-cards/card-application/apply/prospect/terms/business-platinum-charge-card/45094-9-0?key=tncBody', // /* UPDATE THIS */ Users click "Rates and Fees" on this page. More direct: card-application/apply/prospect/terms/...
  officialOverviewLink: 'https://www.americanexpress.com/us/credit-cards/business/business-platinum/',
  officialWelcomeOfferLink: 'https://www.americanexpress.com/us/credit-cards/business/business-platinum/', // Welcome offer is on main page
  officialBenefitsCreditsLink: 'https://www.americanexpress.com/us/credit-cards/business/business-platinum/', // Refer to "Offer & Benefit Terms"
  officialTravelShoppingProtectionsLink: 'https://www.americanexpress.com/us/credit-cards/features-benefits/insurance-benefits/business-cards/', // More specific to business
  officialMembershipRewardsPartnersLink: 'https://global.americanexpress.com/rewards/transfer',
  officialHiltonHonorsSite: 'https://www.hilton.com/en/hilton-honors/',
  officialMarriottBonvoySite: 'https://www.marriott.com/loyalty.mi',
  // Competitor Links (from previous response)
  officialChaseInkPreferredSite: 'https://creditcards.chase.com/business-credit-cards/ink/business-preferred',
  officialCapitalOneVentureXBusinessSite: 'https://www.capitalone.com/small-business/credit-cards/venture-x-business/',
  officialDeltaReserveBusinessSite: 'https://www.americanexpress.com/us/business/credit-cards/delta-skymiles-reserve/',

  sku             : 'AMEX-BIZPLAT-TCI-2025', // Placeholder - Example SKU
  mpn             : 'AMEXBIZPLAT', // Placeholder - Example MPN
  // SEO Optimized H1
  h1Content       : "American Express Business Platinum Review (2025): Is It Your Ultimate US Business Travel Partner?",
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
      image          : `${siteUrl}${reviewDataNew.imageUrl}`, // /* UPDATE THIS */
      description    : reviewDataNew.description,
      sku            : reviewDataNew.sku,
      mpn            : reviewDataNew.mpn,
      brand          : { '@type': 'Brand', name: 'American Express' },
      aggregateRating: {
        '@type'    : 'AggregateRating',
        ratingValue : reviewDataNew.ratingValue.toString(), // /* UPDATE THIS */
        bestRating  : '10',
        worstRating : '1',
        ratingCount : reviewDataNew.ratingCount.toString(), // /* UPDATE THIS */
        reviewCount : '1', // Assuming 1 editor review for this page
      },
      offers: {
        '@type'            : 'Offer',
        url                : reviewDataNew.applyLink, // /* UPDATE THIS */ Your affiliate link
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
            description          : `Pay Over Time APR: ${reviewDataNew.aprRange}. Foreign Transaction Fee: None. See official ${reviewDataNew.cardName} Rates & Fees on the issuer's website. Additional Card Fee: $195 for each Additional Business Platinum Card.`,
          },
        ],
        seller: { '@type': 'Organization', name: 'American Express National Bank' },
      },
      review: { '@id': `${pageUrlFull}#editorReview` },
    },
    {
      '@type'         : 'Review',
      '@id'           : `${pageUrlFull}#editorReview`,
      name            : `${reviewDataNew.cardName} – Expert Review Updated ${new Date(updateDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}`,
      itemReviewed    : { '@id': `${pageUrlFull}#product` },
      reviewBody      : reviewDataNew.reviewBody,
      reviewRating    : {
        '@type'    : 'Rating',
        ratingValue : reviewDataNew.ratingValue.toString(), // /* UPDATE THIS */
        bestRating  : '10',
        worstRating : '1',
        description: `${siteName} editorial rating based on a 10.0 scale, as of ${new Date(updateDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}.`
      },
      author          : {
          '@type': 'Person',
          'name': reviewDataNew.author.name, // /* UPDATE THIS */
          'url': reviewDataNew.author.fullBioLink ? `${siteUrl}${reviewDataNew.author.fullBioLink}` : undefined, // /* UPDATE THIS */
      },
      publisher       : {
        '@type' : 'Organization',
        name    : siteName,
        logo    : { '@type': 'ImageObject', url: `${siteUrl}/images/logo/your-logo-schema.png` }, // /* UPDATE THIS */ path to your logo for schema
      },
      datePublished   : publishDate, // /* UPDATE THIS */
      dateModified    : updateDate, // /* UPDATE THIS */
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
      datePublished      : publishDate, // /* UPDATE THIS */
      dateModified       : updateDate, // /* UPDATE THIS */
       author: {
          '@type': 'Person',
          'name': reviewDataNew.author.name, // /* UPDATE THIS */
          'url': reviewDataNew.author.fullBioLink ? `${siteUrl}${reviewDataNew.author.fullBioLink}` : undefined // /* UPDATE THIS */
       },
    },
    {
      '@type'   : 'ImageObject',
      '@id'     : `${pageUrlFull}#primaryImage`,
      url       : `${siteUrl}${reviewDataNew.imageUrl}`, // /* UPDATE THIS */
      width     : reviewDataNew.imageWidth, // /* UPDATE THIS */
      height    : reviewDataNew.imageHeight, // /* UPDATE THIS */
      caption   : reviewDataNew.cardName,
    },
    {
      '@type'        : 'BreadcrumbList',
      '@id'          : `${pageUrlFull}#breadcrumbs`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: siteName, item: siteUrl },
        { '@type': 'ListItem', position: 2, name: 'Business Credit Card Reviews', item: `${siteUrl}/business-reviews` }, // /* UPDATE AS NEEDED */ if review category path is different
        { '@type': 'ListItem', position: 3, name: `${reviewDataNew.cardName} Review`, item: pageUrlFull },
      ],
    },
    { // Populated from Section 18 of your text
      '@type'    : 'FAQPage',
      '@id'      : `${pageUrlFull}#faqs`,
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How does the $200 Annual Airline Fee Credit work with the Amex Business Platinum?',
          acceptedAnswer: { '@type': 'Answer', text: "Select one qualifying airline annually. You'll receive up to $200 in statement credits for incidental fees charged by that airline to your Business Platinum Card®. This typically covers checked bags, in-flight refreshments, and seat selection fees, but not airline tickets, upgrades, or gift cards. Enrollment required." }
        },
        {
          '@type': 'Question',
          name: 'How do I enroll for complimentary Hilton Honors Gold and Marriott Bonvoy Gold Elite status?',
          acceptedAnswer: { '@type': 'Answer', text: "Enrollment is required through the Benefits section of your American Express online account after Card approval. Status is not automatically granted." }
        },
        {
          '@type': 'Question',
          name: 'Which purchases qualify for 1.5X Membership Rewards® points and what is the cap?',
          acceptedAnswer: { '@type': 'Answer', text: "You earn 1.5X points on eligible purchases in key U.S. business categories like construction/hardware, electronic goods retailers, software & cloud service providers, and shipping providers. Additionally, you earn 1.5X points on any single eligible U.S. purchase of $5,000 or more. This 1.5X earning is capped at $2 million in these combined purchase categories per calendar year, then 1X points apply." }
        },
        {
          '@type': 'Question',
          name: 'Can Amex Business Platinum statement credits be combined with Amex Offers?',
          acceptedAnswer: { '@type': 'Answer', text: "Generally, yes. Statement credits from card benefits (like the Dell or Hilton credits) are separate from Amex Offers, which are targeted deals you must add to your card. You can often leverage both if the purchase qualifies for both a card benefit credit and an Amex Offer." }
        },
        {
          '@type': 'Question',
          name: 'What happens to unused portions of periodic statement credits (e.g., quarterly Hilton credit)?',
          acceptedAnswer: { '@type': 'Answer', text: "Unused portions of periodic statement credits, such as the quarterly Hilton credit or semi-annual Dell credit, are typically forfeited if not used within the specified period. They do not roll over." }
        },
        {
          '@type': 'Question',
          name: 'How can I track my Business Platinum credit usage and benefit enrollment status?',
          acceptedAnswer: { '@type': 'Answer', text: "You can track your credit usage and enroll in benefits primarily through your American Express online account, usually under a 'Benefits' or 'Rewards & Benefits' tab. The Amex Business Blueprint™ platform may also offer tools for tracking." }
        },
        {
          '@type': 'Question',
          name: 'Is the Amex Business Platinum a charge card or a credit card?',
          acceptedAnswer: { '@type': 'Answer', text: "The Business Platinum Card® is traditionally a charge card, meaning the balance is typically due in full each month. However, it also includes a 'Pay Over Time' feature that allows you to carry a balance with interest on eligible purchases of $100 or more, similar to a credit card. Understand the APRs if using this feature." }
        },
        {
          '@type': 'Question',
          name: 'Can I get airport lounge access for guests with the Business Platinum Card?',
          acceptedAnswer: { '@type': 'Answer', text: "Guest access policies vary by lounge program within the American Express Global Lounge Collection®. For Centurion® Lounges, guest access typically incurs a fee per guest (exceptions may apply). Priority Pass™ Select membership guest policies vary by individual lounge. For Delta Sky Clubs, access is for the Card Member only when flying Delta (up to 10 visits per year); guest access must be purchased separately. Always check specific lounge terms." }
        },
        {
            '@type': 'Question',
            name: 'How does the 35% Airline Bonus work if I pay for a flight partially with points and partially with cash?',
            acceptedAnswer: { '@type': 'Answer', text: "The 35% points rebate for the Airline Bonus applies only to the portion of the flight fare that was paid for using Membership Rewards® points, provided the booking is eligible (First or Business class on any airline, or any class on your selected qualifying airline, booked via Amex Travel). You can get up to 1,000,000 points back per calendar year." }
        },
        {
            '@type': 'Question',
            name: 'What are considered "eligible purchases" for earning Membership Rewards® points with the Business Platinum Card?',
            acceptedAnswer: { '@type': 'Answer', text: "Eligible purchases are generally purchases for goods and services minus returns and other credits. Eligible purchases do NOT include fees or interest charges, cash advances, person-to-person payments, purchases of travelers checks, purchases or reloading of prepaid cards, or purchases of other cash equivalents. Refer to Membership Rewards® program terms for full details." }
        }
      ],
    },
    {
      '@type' : 'Organization',
      '@id'   : `${siteUrl}#website`,
      name    : siteName,
      url     : siteUrl,
      logo    : { '@type': 'ImageObject', url: `${siteUrl}/images/logo/your-logo-schema.png` }, // /* UPDATE THIS */
      sameAs  : [ // /* UPDATE THESE */ Add actual social links for your organization
        "https://www.facebook.com/YourTravelCardInsiderFacebookPage",
        "https://twitter.com/YourTravelCardInsiderTwitterHandle",
        // "https://www.linkedin.com/company/YourTravelCardInsiderLinkedIn"
      ],
    },
  ],
};

// UPDATE AS NEEDED: Tailor these to your specific rating methodology for this card
const ratingCriteriaOriginal = [ // /* UPDATE THIS for Business Platinum */
    'Value & Breadth of Airport Lounge Access (Global Lounge Collection)',
    'Effectiveness of Annual Statement Credits (Airline, Dell, Hilton, CLEAR, etc.)',
    'Membership Rewards® Earning Rates (5X Travel, 1.5X Key Business Categories & Large Purchases)',
    'Value of 35% Airline Bonus (Pay with Points)',
    'Complimentary Hotel Elite Status (Hilton Gold, Marriott Gold)',
    'Welcome Offer Attractiveness & Terms',
    'Annual Fee ($695) vs. Overall Business & Travel Benefits Package',
    'Quality of Travel Perks (FHR, The Hotel Collection)',
    'Comprehensiveness of Business-Specific Benefits (Indeed, Adobe, Wireless Credits)',
    'Travel & Purchase Protections Suite',
    'Clarity and Accessibility of Benefits for Businesses',
    'Customer Service & Amex Business App Experience',
];

const tocSections = [ // Generated from your 20 sections for Amex Business Platinum
    // SEO Optimized Section Titles
    { id: 'section-intro', title: 'Amex Business Platinum: Decoding the Ultimate US Business Travel Card' },
    { id: 'section-1', title: '1. Card Snapshot: Is Business Platinum Your Ultimate Travel Partner?' },
    { id: 'section-2', title: '2. Welcome Offer: Unlocking Initial Value for Your Business' },
    { id: 'section-3', title: '3. Core Travel Benefits: Elevating Every Business Trip' },
    { id: 'section-4', title: '4. Statement Credits Power: Offsetting the Annual Fee Effectively' },
    { id: 'section-5', title: '5. Earning Membership Rewards®: Strategies for Maximum Point Accumulation' },
    { id: 'section-6', title: '6. Redeeming Membership Rewards®: A World of Business Flexibility' },
    { id: 'section-7', title: '7. The 35% Airline Bonus: Maximizing Pay with Points Value' },
    { id: 'section-8', title: '8. Beyond Travel: Essential Benefits for Business Operations' },
    { id: 'section-9', title: '9. Complimentary Elite Hotel Status: Keys to Upgraded Stays' },
    { id: 'section-10', title: '10. Seamless Airports: Lounge Access & Expedited Security Benefits' },
    { id: 'section-11', title: '11. Travel & Purchase Protections: Your Business Safety Net' },
    { id: 'section-12', title: '12. Financials Deep Dive: Understanding Rates, Fees & Terms' },
    { id: 'section-13', title: '13. Competitive Analysis: Amex Business Platinum vs. The Field' },
    { id: 'section-14', title: '14. Real-World Value Example: A US Business Traveler\'s ROI' },
    { id: 'section-15', title: '15. Ideal Cardholder Profile: Who Benefits Most from Business Platinum?' },
    { id: 'section-16', title: '16. User Testimonials: Insights From Business Platinum Cardholders' },
    { id: 'section-17', title: '17. Application Guide: What Your Business Needs to Know' },
    { id: 'section-18', title: '18. Business Platinum FAQs: Your Questions Answered' },
    { id: 'section-19', title: '19. Expert Strategies: Maximizing Every Business Platinum Perk' },
    { id: 'section-20', title: '20. Final Verdict: Is The Business Platinum Card a Worthwhile Investment?' },
    { id: 'section-eat', title: 'Our E-A-T Commitment to Business Reviews' },
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
function AmericanExpressBusinessPlatinumCardReviewPage() {
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

  const summaryBoxData = { // /* UPDATE THIS with specific, compelling values */
    welcomeOffer: "Typically 150,000 MR® points after $20,000 spend in 3 months (offers vary).",
    annualFee: `$${reviewDataNew.annualFee}`,
    topEarning: "5X on flights & prepaid hotels (AmexTravel.com); 1.5X on $5k+ purchases & key biz categories.",
    keyCredits: "$200 Airline, $200 Hilton, $400 Dell, $199 CLEAR® Plus, $360 Indeed, $150 Adobe, $120 Wireless (enrollment required).",
    travelPerk: "Global Lounge Collection®, Hilton & Marriott Gold, 35% Airline Bonus, FHR & Hotel Collection.",
    bestFor: "US-based frequent business travelers & SMBs seeking luxury travel perks, extensive credits, and robust rewards."
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
        {[ /* UPDATE AS NEEDED with your actual font paths */
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
        <meta property="article:section"       content="Business Credit Card Reviews" /> 
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
                        src={reviewDataNew.author.imageUrl} // /* UPDATE THIS */
                        alt={`${reviewDataNew.author.name} headshot`} // /* UPDATE THIS */
                        width={reviewDataNew.author.imageWidth} // /* UPDATE THIS */
                        height={reviewDataNew.author.imageHeight} // /* UPDATE THIS */
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
                        {reviewDataNew.author.socialLinks && ( // /* UPDATE THIS */
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
                    {showAuthorBioTooltip && reviewDataNew.author.bioSnippet && ( // Author Tooltip
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
                                    src={reviewDataNew.author.tooltipImageUrl} // /* UPDATE THIS */
                                    alt={`${reviewDataNew.author.name} large headshot`} // /* UPDATE THIS */
                                    width={reviewDataNew.author.tooltipImageWidth} // /* UPDATE THIS */
                                    height={reviewDataNew.author.tooltipImageHeight} // /* UPDATE THIS */
                                    className={styles.authorTooltipImage}
                                 />
                                 <div className={styles.authorTooltipInfo}>
                                     <span className={styles.authorTooltipName}>{reviewDataNew.author.name}</span> 
                                     <span className={styles.authorTooltipTitle}>{reviewDataNew.author.title}</span> 
                                 </div>
                               </div>
                               {reviewDataNew.author.expertise && reviewDataNew.author.expertise.length > 0 && ( // /* UPDATE THIS */
                                 <div className={styles.authorTooltipExpertise}>
                                     <strong>Expertise</strong>
                                     <ul>
                                         {reviewDataNew.author.expertise.map(area => <li key={area}>{area}</li>)}
                                     </ul>
                                 </div>
                               )}
                               <p className={styles.authorTooltipBioSnippet}>{reviewDataNew.author.bioSnippet}</p> 
                               {reviewDataNew.author.fullBioLink && ( // /* UPDATE THIS */
                                   <Link href={reviewDataNew.author.fullBioLink} legacyBehavior>
                                       <a className={styles.authorTooltipBioLink}>See full bio</a>
                                   </Link>
                               )}
                               {reviewDataNew.author.socialLinks && ( // /* UPDATE THIS */
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
                  The Amex Business Platinum offers US frequent business travelers luxury perks: unparalleled lounge access, hotel status, $1500+ credits, and flexible points with a 35% airline bonus. Is it your ultimate companion?
                </p>
                <div className={styles.heroCtaContainer}>
                  <div>
                    <a
                      href={reviewDataNew.applyLink} // /* UPDATE THIS */
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
                  <Link href="#section-1" legacyBehavior>
                    <a className={styles.heroSecondaryLink}>View Key Features</a>
                  </Link>
                </div>
              </div>
              <div className={styles.heroImageContainer}>
                <div className={styles.cardImageContainer}>
                  <Image
                    src={reviewDataNew.imageUrl} // /* UPDATE THIS */
                    alt={reviewDataNew.cardName}
                    width={reviewDataNew.imageWidth} // /* UPDATE THIS */
                    height={reviewDataNew.imageHeight} // /* UPDATE THIS */
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
                        ratingValue={reviewDataNew.ratingValue} // /* UPDATE THIS */
                        ratingCriteria={ratingCriteriaOriginal} // /* UPDATE THIS */
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
                    <i>{reviewDataNew.description}</i> {/* Using full description for this example, can be shortened */}
                 </div>
              </div>
            </section>

             <div className={styles.reviewContainer}>
                <article>
                <header className={styles.reviewHeader}>
                    <div className={styles.summaryBox} id="summaryBoxTitle">
                        <h2 className={styles.summaryBoxTitle}>{reviewDataNew.cardName}: Key Insights for Businesses</h2>
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
                                <span className={styles.summaryLabel}>Top Rewards:</span>
                                <span className={styles.summaryValue}>{summaryBoxData.topEarning}</span> 
                            </div>
                             <div className={styles.summaryItem}>
                                <span className={styles.summaryIcon}><IconDollar /></span> 
                                <span className={styles.summaryLabel}>Key Credits:</span>
                                <span className={styles.summaryValue}>{summaryBoxData.keyCredits}</span> 
                            </div>
                            <div className={styles.summaryItem}>
                                <span className={styles.summaryIcon}><IconPlane /></span> 
                                <span className={styles.summaryLabel}>Top Travel Perks:</span>
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
                             <a href='/business-rewards-calculator' /* UPDATE LINK IF EXISTS */ className={`${styles.heroRewardsCalculator} ${styles.summaryButton}`} target="_blank" rel="noopener noreferrer">
                                Business Rewards Calculator
                            </a>
                        </div>
                    </div>
                </header>

                {/* CONTENT SECTIONS START HERE */}

                <section id="section-intro" className={styles.reviewSection}>
                  <h2>Amex Business Platinum: Decoding the Ultimate US Business Travel Card</h2>
                  <p>The American Express Business Platinum Card® is a premier choice for US-based frequent business travelers seeking luxury perks. It offers unparalleled airport lounge access, complimentary Hilton and Marriott Gold status, and over $1,500 in potential annual statement credits for services like Dell, airline fees, and CLEAR®. Membership Rewards points offer flexible, high-value redemptions, including a 35% airline bonus.</p>
                  <p>While the $695 annual fee is substantial, it’s offset if you actively manage and maximize its comprehensive benefits. Ideal for businesses with significant travel and aligned spending, this card elevates your travel experience and offers robust purchase protections. It’s a powerful tool for those willing to engage with its features, but less suited for infrequent travelers or those preferring simplicity. Explore the full details on the <a href={reviewDataNew.officialOverviewLink} target="_blank" rel="noopener noreferrer sponsored">official American Express Business Platinum Card page</a>.</p>
                </section>

                
                <Image
                    src="/anete-lusina-rFKBUwLg_WQ-unsplash.webp" // Example path
                    alt="Business executive working in an airport lounge, symbolizing Amex Business Platinum perks"
                    width={800}
                    height={500}
                    className={styles.contentImage}
                    loading="lazy"
                />

                <section id="section-1" className={styles.reviewSection}>
                  <h2>1. Card Snapshot: Is Business Platinum Your Ultimate Travel Partner?</h2>
                  <DraggableTableWrapper>
                    <div className={styles.tableContainer}>
                        <table className={`${styles.statsTable} ${styles.highlightTable}`}>
                            <tbody>
                                <tr><td>Card Name:</td><td><strong>{reviewDataNew.cardName}</strong></td></tr>
                                <tr><td>Issuer:</td><td>American Express National Bank (<a href={reviewDataNew.officialOverviewLink} target="_blank" rel="noopener noreferrer sponsored">Official Card Page</a>)</td></tr>
                                <tr><td>Network:</td><td>American Express</td></tr>
                                <tr><td>Annual Fee:</td><td><strong>${reviewDataNew.annualFee}</strong> (Refer to <a href={reviewDataNew.ratesLink} target="_blank" rel="noopener noreferrer sponsored">Rates & Fees</a>)</td></tr>
                                <tr><td>Primary Focus:</td><td>Premium travel rewards and business benefits for US-based businesses.</td></tr>
                                <tr><td>Best For:</td><td>US-based frequent business travelers and established small to medium-sized businesses seeking unparalleled lounge access, extensive travel credits, elite hotel statuses, and robust rewards on travel and large business expenditures, who are prepared to actively manage benefits to maximize value against a premium annual fee.</td></tr>
                            </tbody>
                        </table>
                    </div>
                  </DraggableTableWrapper>
                  <p>The Business Platinum Card® is undeniably a top-tier offering. Its prestige is well-established, but its true worth demands active engagement. The array of statement credits, covering everything from airline fees to Dell purchases, often requires enrollment and specific spending. This means it’s most advantageous for organized businesses willing to learn the Amex ecosystem.</p>
                </section>

                <section id="section-2" className={styles.reviewSection}>
                  <h2>2. Welcome Offer: Unlocking Initial Value for Your Business</h2>
                  <p>The welcome offer is a significant draw. Typically, new applicants can earn a substantial number of Membership Rewards® points after meeting a specific spending threshold on eligible purchases within the first three months. For example, a common offer might be:</p>
                  <blockquote className={styles.highlightQuote}>
                    <strong>150,000 Membership Rewards® points</strong> after spending $20,000 on eligible purchases with the Business Platinum Card® within the first 3 months of Card Membership.
                    (<a href={reviewDataNew.officialWelcomeOfferLink} target="_blank" rel="noopener noreferrer sponsored">See current welcome offer details and terms on the official Amex site</a>). Offers can vary.
                  </blockquote>
                  <p>Valuing Membership Rewards points can depend on redemption, but travel enthusiasts often aim for 1.5 to 2 cents per point, making 150,000 points worth $2,250 to $3,000 in potential travel. This initial windfall can significantly offset the card's ${reviewDataNew.annualFee} annual fee in the first year.</p>
                  <p>However, the spending requirement can be a hurdle. Businesses should time their application with large planned expenditures. Eligibility for the welcome offer is also subject to Amex's "once per lifetime" language for each specific card product, underscoring the importance of careful planning.</p>
                </section>

                <section id="section-3" className={styles.reviewSection}>
                  <h2>3. Core Travel Benefits: Elevating Every Business Trip</h2>
                  <p>The Business Platinum Card® is synonymous with premium travel experiences. Key benefits include:</p>
                  <ul className={styles.featureList}>
                    <li>
                        <strong>American Express Global Lounge Collection®:</strong> Access over 1,400 airport lounges across 140 countries. This includes the coveted Centurion® Lounges, Delta Sky Clubs® (when flying Delta, with annual visit limits on Basic Economy tickets from 2/1/25, and 10 annual visits for other tickets), Priority Pass™ Select lounges (enrollment required), Escape Lounges – The Centurion Studio Partner, Plaza Premium Lounges, and select Lufthansa Lounges. For business travelers, this means a productive oasis with Wi-Fi, quiet workspaces, and refreshments.
                    </li>
                    <li>
                        <strong>Fine Hotels + Resorts® (FHR) Program:</strong> When booking through American Express Travel, receive benefits like daily breakfast for two, room upgrades (when available), a unique property amenity (often a $100 credit for dining, spa, or resort activities), guaranteed 4 PM late check-out, and noon check-in (when available). Amex states an average total value of $600 on stays of two nights. Prepaid FHR stays also earn 5X Membership Rewards® points.
                    </li>
                    <li>
                        <strong>The Hotel Collection:</strong> For bookings of two consecutive nights or more made with American Express Travel, Card Members get up to a $100 hotel credit to spend on qualifying dining, spa, and resort activities, and a room upgrade (if available) at eligible properties. These prepaid bookings also earn 5X points.
                    </li>
                  </ul>
                  <p>Maximizing these travel benefits typically requires booking through <a href="https://www.amextravel.com" target="_blank" rel="noopener noreferrer sponsored">AmexTravel.com</a> or with Platinum Travel service, which may be a trade-off if your business has preferred rates or booking channels elsewhere. Always compare to ensure the best overall value.</p>
                </section>

                <section id="section-4" className={styles.reviewSection}>
                  <h2>4. Statement Credits Power: Offsetting the Annual Fee Effectively</h2>
                  <p>The ${reviewDataNew.annualFee} annual fee can be significantly offset by a suite of statement credits, provided they align with your business spending and you enroll where required. (<a href={reviewDataNew.officialBenefitsCreditsLink} target="_blank" rel="noopener noreferrer sponsored">See official benefit terms on Amex's site</a>). These include:</p>
                  
                  <DraggableTableWrapper>
                    <div className={styles.tableContainer}>
                      <table className={`${styles.statsTable} ${styles.earningRatesTable}`}> {/* Reusing earningRatesTable style for now */}
                        <thead>
                          <tr>
                            <th>Credit Name</th>
                            <th>Annual Value (Up to)</th>
                            <th>Frequency/Distribution</th>
                            <th>Enrollment Required?</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr><td>$200 Airline Fee Credit</td><td>$200</td><td>Annually (Calendar Year, for one selected qualifying airline)</td><td>Yes (Airline Selection)</td></tr>
                          <tr><td>$200 Hilton Statement Credit</td><td>$200</td><td>Up to $50 per Quarter (for eligible purchases with Hilton, enrollment and Hilton for Business membership required)</td><td>Yes</td></tr>
                          <tr><td>$199 CLEAR® Plus Credit</td><td>$199</td><td>Annually (Calendar Year)</td><td>No (Automatic for CLEAR Plus membership charged to card)</td></tr>
                          <tr><td>Up to $400 Dell Technologies Credit</td><td>$400</td><td>Up to $200 semi-annually (Jan-June, July-Dec) for U.S. purchases</td><td>Yes</td></tr>
                          <tr><td>Up to $360 Indeed Credit</td><td>$360</td><td>Up to $90 per quarter for Indeed hiring and recruiting products/services</td><td>Yes</td></tr>
                          <tr><td>Up to $150 Adobe Credit</td><td>$150</td><td>For select annual prepaid auto-renewing Adobe business subscriptions (e.g., Creative Cloud All Apps for teams, Acrobat Pro DC with e-sign for teams). Enrollment required. Benefit ends June 30, 2025.</td><td>Yes</td></tr>
                          <tr><td>Up to $120 Wireless Credit</td><td>$120</td><td>Up to $10 per month for U.S. wireless telephone services</td><td>Yes</td></tr>
                          <tr><td>Fee Credit for Global Entry or TSA PreCheck®</td><td>$120 (GE) / $85 (TSA)</td><td>Every 4 years for Global Entry or every 4.5 years for TSA PreCheck®</td><td>No (Automatic when application fee charged to card)</td></tr>
                          <tr><td><strong>Total Potential Value</strong></td><td><strong>~$1,654+</strong></td><td></td><td></td></tr>
                        </tbody>
                      </table>
                    </div>
                  </DraggableTableWrapper>
                  <p>These credits are mostly "use it or lose it" per period and demand active management and alignment with your business's actual spending needs to realize their full value.</p>
                </section>

                <section id="section-5" className={styles.reviewSection}>
                  <h2>5. Earning Membership Rewards®: Strategies for Maximum Point Accumulation</h2>
                  <p>The Business Platinum Card® offers several ways to accumulate valuable Membership Rewards® points:</p>
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
                            <td data-label="Categories">Membership Rewards® points on flights and prepaid hotels booked through <a href="https://www.amextravel.com" target="_blank" rel="noopener noreferrer sponsored">AmexTravel.com</a>.</td>
                          </tr>
                          <tr>
                            <td data-label="Points"><strong>1.5X</strong></td>
                            <td data-label="Categories">Membership Rewards® points on eligible purchases in key U.S. business categories: U.S. construction material & hardware suppliers, U.S. electronic goods retailers, U.S. software & cloud system providers, and U.S. shipping providers. Also, 1.5X points on any single eligible U.S. purchase of $5,000 or more. This 1.5X earning is capped at $2 million in these combined purchase categories per calendar year (then 1X).</td>
                          </tr>
                          <tr>
                            <td data-label="Points"><strong>1X</strong></td>
                            <td data-label="Categories">Membership Rewards® point on all other eligible purchases.</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </DraggableTableWrapper>
                  <p>The 5X rate is tied to using AmexTravel.com, which requires price comparisons against other booking channels. The 1.5X on large purchases of $5,000+ and in specified business categories is a valuable accelerator for businesses with substantial individual transactions or spending in those sectors. Remember to check the <a href={reviewDataNew.officialBenefitsCreditsLink} target="_blank" rel="noopener noreferrer sponsored">official terms</a> for category definitions and exclusions.</p>
                </section>

                <section id="section-6" className={styles.reviewSection}>
                  <h2>6. Redeeming Membership Rewards®: A World of Business Flexibility</h2>
                  <p>Membership Rewards® points don't expire as long as your account is in good standing and offer diverse redemption options. Visit the <a href={reviewDataNew.officialMembershipRewardsPartnersLink} target="_blank" rel="noopener noreferrer sponsored">Membership Rewards® Program official page</a> for full details.</p>
                  <ul className={styles.featureList}>
                    <li><strong>Transfer to Airline and Hotel Partners:</strong> One of the most powerful uses. American Express has a broad portfolio of airline partners (e.g., Delta SkyMiles®, British Airways Executive Club, Air Canada Aeroplan) and hotel partners (e.g., Hilton Honors™, Marriott Bonvoy®). Value varies but can be exceptional for premium international flights or luxury hotel stays, often exceeding 1.5-2 cents per point.</li>
                    <li><strong>Pay with Points via Amex Travel:</strong> Generally, points are worth 1 cent each when used to book flights through Amex Travel. The Business Platinum Card® offers a <strong>35% Airline Bonus</strong> (see next section) which enhances this value significantly for eligible flights. Points can also be used for hotels, car rentals, and cruises, though the value may vary.</li>
                    <li><strong>Other Options:</strong> Statement credits (typically poor value, around 0.6 cents per point), gift cards (value varies), and shopping at checkout with select retailers (value varies).</li>
                  </ul>
                  <p>Strategic transfers to airline and hotel partners, or leveraging the 35% Airline Bonus, usually yield the highest value for Membership Rewards® points but require research and planning.</p>
                </section>

                <section id="section-7" className={styles.reviewSection}>
                  <h2>7. The 35% Airline Bonus: Maximizing Pay with Points Value</h2>
                  <p>A standout feature of The Business Platinum Card® is the 35% Airline Bonus. When you use Membership Rewards® Pay with Points for all or part of an eligible flight booked through American Express Travel, you can get 35% of those points back, up to 1,000,000 points back per calendar year. This applies to:</p>
                  <ul className={styles.featureList}>
                    <li>A First or Business Class ticket on any airline.</li>
                    <li>An Economy Class ticket on your pre-selected qualifying airline (the same airline you choose for your $200 Airline Fee Credit).</li>
                  </ul>
                  <p>This feature effectively boosts your point value to approximately 1.54 cents each for these specific flight redemptions (1 cent / (1 - 0.35) ≈ 1.54 cents). Crucially, flights booked this way typically earn airline miles and elite-qualifying credits with the operating airline, unlike many award tickets booked directly with airline programs. This makes your annual airline selection for the fee credit even more critical if you plan to utilize this bonus for economy flights.</p>
                </section>

                <section id="section-8" className={styles.reviewSection}>
                  <h2>8. Beyond Travel: Essential Benefits for Business Operations</h2>
                  <p>The Business Platinum Card® also supports broader business needs with benefits and credits that go beyond travel. Full terms are available on the <a href={reviewDataNew.officialBenefitsCreditsLink} target="_blank" rel="noopener noreferrer sponsored">official Amex benefits page</a>.</p>
                  <ul className={styles.featureList}>
                    <li><strong>Dell, Indeed, Adobe, Wireless Credits:</strong> As detailed in section 4, these statement credits directly subsidize common business expenses for technology, hiring, software, and wireless services.</li>
                    <li>
                        <strong>Cellphone Protection:</strong> Get reimbursed for the repair or replacement of your eligible cell phone (and those listed on your wireless plan paid with the card) for damage or theft, up to $800 per claim, with a $50 deductible per claim. Limited to two approved claims per eligible Card Account per 12-month period. Your monthly wireless bill must be paid with your Business Platinum Card®.
                    </li>
                    <li>
                        <strong>Expense Management Tools:</strong> Access robust online tools, year-end summaries, and integration capabilities with accounting software (e.g., QuickBooks, Xero). American Express® Business App and American Express Business Blueprint™ offer enhanced account overview, cash flow insights, and expense tracking.
                    </li>
                    <li>
                        <strong>No Preset Spending Limit (NPSL) & Pay Over Time:</strong> NPSL means your spending capacity can be flexible and adapt based on your purchasing behavior, payment history, credit record, and financial resources known to Amex. It does not mean unlimited spending. The "Pay Over Time" option allows eligible purchases of $100 or more to be paid over time with interest, distinct from the "Pay In Full" balance typically due monthly for a charge card. Be sure to understand the applicable APRs if you intend to use this feature.
                    </li>
                  </ul>
                </section>

                <section id="section-9" className={styles.reviewSection}>
                  <h2>9. Complimentary Elite Hotel Status: Keys to Upgraded Stays</h2>
                  <p>Enrollment is required for these valuable complimentary hotel elite statuses via your Amex online account (<a href={reviewDataNew.officialBenefitsCreditsLink} target="_blank" rel="noopener noreferrer sponsored">see benefit terms</a>):</p>
                  <ul className={styles.featureList}>
                    <li>
                        <strong>Hilton Honors™ Gold Status:</strong> Perks typically include space-available room upgrades, an 80% points bonus on paid stays, daily food and beverage credit (U.S. hotels) or continental breakfast (non-U.S. hotels), and the 5th night free on reward stays of 5+ nights. (<a href={reviewDataNew.officialHiltonHonorsSite} target="_blank" rel="noopener noreferrer sponsored">Visit Hilton Honors Official Site</a> for full Gold status benefits).
                    </li>
                    <li>
                        <strong>Marriott Bonvoy® Gold Elite Status:</strong> Benefits generally include a 25% points bonus on paid stays, enhanced room upgrades (subject to availability at check-in), 2 PM late check-out (subject to availability), and a welcome gift of points at check-in. (<a href={reviewDataNew.officialMarriottBonvoySite} target="_blank" rel="noopener noreferrer sponsored">Visit Marriott Bonvoy Official Site</a> for full Gold Elite status benefits).
                    </li>
                    <li>
                        <strong>Car Rental Privileges:</strong> Complimentary premium status with Avis Preferred® Plus, Hertz Gold Plus Rewards® President's Circle, and National Car Rental® Emerald Club Executive® (enrollment required). These can provide vehicle upgrades, expedited service, and other perks.
                    </li>
                  </ul>
                  <p>These mid-tier hotel statuses can significantly upgrade your travel experience with perks that enhance comfort and can save money.</p>
                </section>

                <section id="section-10" className={styles.reviewSection}>
                  <h2>10. Seamless Airports: Lounge Access & Expedited Security Benefits</h2>
                  <p>The Business Platinum Card® aims to transform your airport time from a hassle into a productive or relaxing experience:</p>
                  <ul className={styles.featureList}>
                    <li><strong>American Express Global Lounge Collection®:</strong> As mentioned earlier, this provides access to an extensive network including Centurion® Lounges, Priority Pass™ Select lounges (enrollment required), Delta Sky Clubs® (when flying Delta, with visit limits), and more.</li>
                    <li><strong>$199 CLEAR® Plus Credit:</strong> Receive an annual statement credit of up to $199 for a CLEAR® Plus membership, which uses biometrics for expedited security screening at participating U.S. airports and stadiums.</li>
                    <li><strong>Global Entry or TSA PreCheck® Fee Credit:</strong> Receive a statement credit for the application fee for either Global Entry (up to $120, typically every 4 years) or TSA PreCheck® (up to $85, typically every 4.5 years). Global Entry includes TSA PreCheck®.</li>
                  </ul>
                  <p>The combination of CLEAR® Plus and TSA PreCheck® (often obtained via Global Entry) offers one of the fastest and most efficient paths through U.S. airport security checkpoints.</p>
                </section>

                 <section id="section-11" className={styles.reviewSection}>
                  <h2>11. Travel & Purchase Protections: Your Business Safety Net</h2>
                  <p>Provided the eligible purchase is made entirely with The Business Platinum Card®, you receive a suite of travel and purchase protections. For full details, coverage limits, and exclusions, refer to the <a href={reviewDataNew.officialTravelShoppingProtectionsLink} target="_blank" rel="noopener noreferrer sponsored">official Amex Guide to Benefits</a>.</p>
                  <ul className={styles.featureList}>
                    <li><strong>Trip Delay Insurance:</strong> If your covered round-trip is delayed by more than 6 hours due to a covered reason, you can be reimbursed up to $500 per covered trip for reasonable additional expenses (max 2 claims per eligible Card per 12 consecutive month period).</li>
                    <li><strong>Trip Cancellation and Interruption Insurance:</strong> Can provide reimbursement for non-refundable travel expenses paid with your card if your trip is canceled or interrupted for a covered reason.</li>
                    <li><strong>Baggage Insurance Plan:</strong> Can cover eligible lost, damaged, or stolen baggage when your entire fare for a common carrier ticket is charged to your Card (or using Membership Rewards points from your Card).</li>
                    <li><strong>Car Rental Loss and Damage Insurance:</strong> Provides secondary coverage for damage to or theft of most rental vehicles when you use your Card to reserve and pay for the entire rental and decline the rental company's collision damage waiver (CDW). For rentals primarily for business purposes, coverage may be primary.</li>
                    <li><strong>Purchase Protection:</strong> Covers your eligible new purchases against accidental damage or theft for 90 days from the date of purchase (up to $10,000 per occurrence, $50,000 per Card Member account per calendar year).</li>
                    <li><strong>Extended Warranty:</strong> Can add up to one additional year to U.S. manufacturer warranties of 5 years or less on eligible purchases made with your Card.</li>
                    <li><strong>Return Protection:</strong> If a merchant in the U.S. won’t accept a return of an eligible item within 90 days of purchase, American Express may refund the full purchase price (excluding shipping and handling), up to $300 per item, and up to a maximum of $1,000 per Card Member account per calendar year based on the date of purchase.</li>
                    <li><strong>No Foreign Transaction Fees:</strong> Essential for international business, saving you around 2-3% on purchases made outside the U.S.</li>
                  </ul>
                </section>

                <section id="section-12" className={styles.reviewSection}>
                  <h2>12. Financials Deep Dive: Understanding Rates, Fees & Terms</h2>
                  <p>Understanding the complete financial picture of The Business Platinum Card® is crucial for any business. Always consult the official <a href={reviewDataNew.ratesLink} target="_blank" rel="noopener noreferrer sponsored">Rates and Fees schedule and Cardmember Agreement</a> from American Express for the most current and detailed information.</p>
                  <DraggableTableWrapper>
                    <div className={styles.tableContainer}>
                      <table className={`${styles.statsTable} ${styles.ratesFeesTable}`}>
                        <thead>
                          <tr>
                            <th>Fee/Rate Category</th>
                            <th>Details (Subject to Change - Verify with Issuer)</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr><td>Annual Membership Fee:</td><td><strong>${reviewDataNew.annualFee}</strong></td></tr>
                          <tr><td>Additional Card Fees:</td><td>$195 for each Additional Business Platinum Card®. (Employee Business Expense Cards may be available with different fee structures and fewer benefits).</td></tr>
                          <tr><td>Pay Over Time APR:</td><td>Variable, e.g., based on Prime Rate + a margin (such as Prime Rate + 10.99% to Prime Rate + 19.99% as stated in your original text, but always check current terms). This APR will not exceed 29.99%. Applies to eligible charges you choose to pay over time.</td></tr>
                          <tr><td>Penalty APR:</td><td>Variable, often higher (e.g., Prime Rate + 25.99% as stated in your original text). May apply if you make a late payment or a payment is returned.</td></tr>
                          <tr><td>Late Payment Fee:</td><td>$39 or 2.99% of any past due Pay In Full amount, whichever is greater.</td></tr>
                          <tr><td>Returned Payment Fee:</td><td>$39.</td></tr>
                          <tr><td>Foreign Transaction Fee:</td><td><strong>None.</strong></td></tr>
                        </tbody>
                      </table>
                    </div>
                  </DraggableTableWrapper>
                  <p>This card is primarily a charge card, meaning that for purchases not placed in a Pay Over Time balance, payment is due in full each month. Utilizing the Pay Over Time feature extensively can lead to significant interest charges, potentially negating the value of earned rewards. Responsible financial management is key.</p>
                </section>

                <section id="section-13" className={styles.reviewSection}>
                  <h2>13. Competitive Analysis: Amex Business Platinum vs. The Field</h2>
                  <p>How does The Business Platinum Card® stack up against other leading business cards? Here’s a comparative glance (annual fees, welcome offers, and specific benefits are subject to change; verify with issuers):</p>
                  <DraggableTableWrapper>
                    <div className={styles.tableContainer}>
                      <table className={`${styles.statsTable} ${styles.comparisonTable}`}>
                        <thead>
                          <tr>
                            <th>Feature</th>
                            <th>Amex Business Platinum</th>
                            <th>Chase Ink Business Preferred®</th>
                            <th>Capital One Venture X Business</th>
                            <th>Delta SkyMiles® Reserve Business Amex</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td data-label="Feature">Annual Fee</td>
                            <td data-label="Amex Biz Plat"><strong>${reviewDataNew.annualFee}</strong></td>
                            <td data-label="Chase Ink Pref"><a href={reviewDataNew.officialChaseInkPreferredSite} target="_blank" rel="noopener noreferrer sponsored">$95</a></td>
                            <td data-label="CapOne VX Biz"><a href={reviewDataNew.officialCapitalOneVentureXBusinessSite} target="_blank" rel="noopener noreferrer sponsored">$395</a></td>
                            <td data-label="Delta Reserve Biz"><a href={reviewDataNew.officialDeltaReserveBusinessSite} target="_blank" rel="noopener noreferrer sponsored">$650</a></td>
                          </tr>
                          <tr>
                            <td data-label="Feature">Typical Welcome Offer</td>
                            <td data-label="Amex Biz Plat">150,000 MR points (example, varies) + potential credits</td>
                            <td data-label="Chase Ink Pref">90,000 UR points (example, varies)</td>
                            <td data-label="CapOne VX Biz">150,000 miles (example, varies)</td>
                            <td data-label="Delta Reserve Biz">80,000 SkyMiles (example, varies)</td>
                          </tr>
                          <tr>
                            <td data-label="Feature">Key Earning Rates</td>
                            <td data-label="Amex Biz Plat">5X flights/hotels (AmexTravel); 1.5X on $5k+ purchases/select biz cats; 1X other</td>
                            <td data-label="Chase Ink Pref">3X travel, shipping, ads, internet/cable/phone (on $150k/yr combined); 1X other</td>
                            <td data-label="CapOne VX Biz">Unlimited 2X miles everywhere; 5X flights & 10X hotels/rental cars (CapOne Travel)</td>
                            <td data-label="Delta Reserve Biz">3X on Delta purchases; 1.5X on U.S. transit, U.S. shipping, and all eligible purchases over $5,000 (up to $100k/yr for 1.5X on non-Delta); 1X other</td>
                          </tr>
                          <tr>
                            <td data-label="Feature">Primary Lounge Access</td>
                            <td data-label="Amex Biz Plat">Amex Global Lounge Collection (Centurion, Priority Pass Select*, Delta Sky Club*)</td>
                            <td data-label="Chase Ink Pref">None direct</td>
                            <td data-label="CapOne VX Biz">Priority Pass Select*</td>
                            <td data-label="Delta Reserve Biz">Delta Sky Club*, Centurion Lounge* (with Delta flight)</td>
                          </tr>
                          <tr>
                            <td data-label="Feature">Key Travel Credits</td>
                            <td data-label="Amex Biz Plat">$200 Airline, $200 Hilton, $199 CLEAR, GE/TSA</td>
                            <td data-label="Chase Ink Pref">None direct</td>
                            <td data-label="CapOne VX Biz">$300 annual travel credit (via Capital One Travel); 10,000 anniversary bonus miles</td>
                            <td data-label="Delta Reserve Biz">$250 Delta Stays Credit, $120 Rideshare Credit, $240 Resy Credit, GE/TSA</td>
                          </tr>
                          <tr>
                            <td data-label="Feature">Hotel Elite Status</td>
                            <td data-label="Amex Biz Plat">Hilton Gold, Marriott Gold (enrollment req.)</td>
                            <td data-label="Chase Ink Pref">None direct</td>
                            <td data-label="CapOne VX Biz">Premier Collection benefits (similar to FHR)</td>
                            <td data-label="Delta Reserve Biz">None direct (but helps earn Delta Medallion Status)</td>
                          </tr>
                          <tr>
                            <td data-label="Feature">Unique Feature 1</td>
                            <td data-label="Amex Biz Plat">35% Airline Bonus (Pay with Points)</td>
                            <td data-label="Chase Ink Pref">Points 25% more valuable for travel via Chase Travel portal</td>
                            <td data-label="CapOne VX Biz">Simple flat-rate 2X miles on all purchases</td>
                            <td data-label="Delta Reserve Biz">Annual Companion Certificate (domestic/select int'l First Class, Comfort+, Main Cabin)</td>
                          </tr>
                          <tr>
                            <td data-label="Feature">Unique Feature 2</td>
                            <td data-label="Amex Biz Plat">Extensive business service credits (Dell, Indeed, Adobe, Wireless)</td>
                            <td data-label="Chase Ink Pref">Primary auto rental CDW (when renting for business purposes)</td>
                            <td data-label="CapOne VX Biz">No preset spending limit; Free employee cards</td>
                            <td data-label="Delta Reserve Biz">MQD Headstart & MQD Boost for Delta Medallion Status</td>
                          </tr>
                        </tbody>
                      </table>
                      <p><small>*Enrollment required. Delta Sky Club access requires flying Delta same-day. Centurion Lounge access with Delta flight for Delta Reserve. Priority Pass Select offer may vary.</small></p>
                    </div>
                  </DraggableTableWrapper>
                  <p>The Amex Business Platinum stands out for its sheer breadth of luxury travel benefits and extensive statement credits aimed at business expenses, but this comes at a premium annual fee and requires active management to maximize value.</p>
                </section>

                <section id="section-14" className={styles.reviewSection}>
                  <h2>14. Real-World Value Example: A US Business Traveler's ROI</h2>
                  <p>Meet "Sarah," a marketing consultant from your example, traveling twice a month, primarily flying United (her selected airline for the fee credit) and staying at Hilton/Marriott properties. Her business spending aligns well with several Business Platinum credits.</p>
                  <h3>Sarah's Annual Business Spending & Benefit Utilization:</h3>
                  <ul className={styles.featureList}>
                    <li>Dell Technologies: $5,000 (uses $400 credit)</li>
                    <li>Indeed: $300 (uses $300 of $360 credit)</li>
                    <li>Adobe: $720 (uses $150 credit)</li>
                    <li>Wireless Services: $1,200 (uses $120 credit)</li>
                    <li>Flights (booked via AmexTravel for 5X or direct): $10,000</li>
                    <li>Hotels (booked via AmexTravel for 5X/FHR/Hotel Collection or direct): $8,000</li>
                    <li>Incidental Airline Fees (United): Uses $200 credit</li>
                    <li>Hilton Stays: Uses $200 credit</li>
                    <li>CLEAR® Plus Membership: Uses $199 credit</li>
                    <li>Global Entry: Has this, annualized value $24 (120/5 years, typically)</li>
                    <li>Several software purchases {'>'}$5,000 (earning 1.5X)</li>
                  </ul>
                  <h3>Estimated Annual Benefit Value (Year 2 Onwards, excluding welcome offer):</h3>
                   <DraggableTableWrapper>
                    <div className={styles.tableContainer}>
                      <table className={`${styles.statsTable}`}>
                        <tbody>
                            <tr><td>Statement Credits Fully Used (as per example):</td><td>~$1,599</td></tr>
                            <tr><td>Points Earned (blend of 5X, 1.5X, 1X):</td><td>~99,500 MR points (as per example)</td></tr>
                            <tr><td>Value of Points (@1.5 cents per point):</td><td>~$1,492</td></tr>
                            <tr><td>Other Perks Value (Lounge visits, Hotel Status benefits, FHR credits, etc. - estimated):</td><td>~$1,500 (as per example)</td></tr>
                            <tr><td><strong>Total Ongoing Value:</strong></td><td><strong>$1,599 + $1,492 + $1,500 = $4,591</strong></td></tr>
                            <tr><td>Less Annual Fee:</td><td>-${reviewDataNew.annualFee}</td></tr>
                            <tr><td><strong>Net Annual Value for Sarah's Business:</strong></td><td><strong>$4,591 - $695 = $3,896</strong></td></tr>
                        </tbody>
                      </table>
                    </div>
                  </DraggableTableWrapper>
                  <p>For Sarah, whose business spending and travel habits closely align with the card's benefits and credit structure, the Amex Business Platinum Card® delivers substantial net value, far outweighing its annual fee. If her spending differed (e.g., no Dell purchases, infrequent travel), the value proposition would change accordingly.</p>
                </section>

                <section id="section-15" className={styles.reviewSection}>
                  <h2>15. Ideal Cardholder Profile: Who Benefits Most from Business Platinum?</h2>
                  <p>This card is best suited for:</p>
                  <div className={styles.profileCardContainer}>
                      <div className={styles.profileCard}>
                          <h4>Frequent Business Travelers</h4>
                          <p>Businesses whose principals or employees travel extensively and will maximize benefits like the Global Lounge Collection®, Fine Hotels + Resorts®, The Hotel Collection, and complimentary hotel elite status.</p>
                      </div>
                      <div className={styles.profileCard}>
                          <h4>Businesses Valuing Premium Experiences</h4>
                          <p>Those who appreciate and utilize luxury travel perks, airport lounge oases for productivity, and enhanced hotel stays that can improve travel efficiency and comfort.</p>
                      </div>
                      <div className={styles.profileCard}>
                          <h4>Businesses with Significant, Aligned Expenditures</h4>
                          <p>Companies that regularly spend in categories covered by the statement credits (Dell, Indeed, Adobe, wireless, airline incidentals, Hilton) and/or make large purchases over $5,000, or book significant travel through AmexTravel.com.</p>
                      </div>
                      <div className={styles.profileCard}>
                          <h4>Organized and Proactive Benefit Managers</h4>
                          <p>Individuals or teams willing to learn the Amex ecosystem, track statement credits, enroll in benefits where required, and strategically use card features to maximize ROI.</p>
                      </div>
                      <div className={styles.profileCard}>
                          <h4>Rewards-Savvy Businesses</h4>
                          <p>Those who understand the value of flexible Membership Rewards® points and aim for high-value redemptions, such as through airline/hotel transfer partners or the 35% Airline Bonus.</p>
                      </div>
                       <div className={styles.profileCard}>
                          <h4>Established Businesses with Solid Cash Flow</h4>
                          <p>Companies that can comfortably meet spending requirements for welcome offers and manage the cash flow of a charge card where many balances are due in full monthly.</p>
                      </div>
                  </div>
                  <h3>This card is likely NOT the best fit for:</h3>
                  <ul className={styles.featureList}>
                    <li>Businesses with infrequent travel or low overall spending.</li>
                    <li>Those who prefer utmost simplicity and a low (or no) annual fee without needing to manage multiple credits.</li>
                    <li>Passive cardholders who are unlikely to enroll in benefits or track credits.</li>
                    <li>Businesses needing to carry long-term balances at low APRs for most of their expenses (though the Pay Over Time feature offers some flexibility).</li>
                  </ul>
                </section>

                <section id="section-16" className={styles.reviewSection}>
                  <h2>16. User Testimonials: Insights From Business Platinum Cardholders</h2>
                  <p>Hearing directly from business professionals who actively use The Business Platinum Card® offers invaluable real-world perspective:</p>
                  <div className={styles.testimonialContainer}>
                      <blockquote className={styles.testimonialQuote}>
                          <p>"The initial sign-up bonus was a huge draw and definitely made the first year's fee a no-brainer, especially as we could meet the spend with our usual business expenses. Beyond that, the lounge access is consistently my most valued perk. Having a quiet place to work or relax during travel is essential for productivity."</p>
                          <footer>– Mark Chen, Founder of a Tech Startup</footer>
                      </blockquote>
                      <blockquote className={styles.testimonialQuote}>
                          <p>"I use the Fine Hotels + Resorts program extensively. On a recent trip to Las Vegas, I booked through FHR and received a fantastic suite upgrade, significant spa credits, and that invaluable 4 PM late checkout. It genuinely elevated the entire stay for what was only a marginal price difference compared to booking direct. For me, those FHR benefits alone make the Business Platinum card a keeper."</p>
                          <footer>– Sarah Miller, Independent Management Consultant</footer>
                      </blockquote>
                      <blockquote className={styles.testimonialQuote}>
                          <p>"We channel a lot of our business spending through Amex cards to pool Membership Rewards points. The 35% points rebate when booking flights through Pay with Points is phenomenal. We often find great fares on Amex Travel, and getting over a third of our points back on those redemptions, especially for business or first class, provides incredible ongoing value for our travel budget."</p>
                          <footer>– David Lee, Owner of an E-commerce Business</footer>
                      </blockquote>
                  </div>
                  <p>These experiences highlight the tangible benefits appreciated by active users who align their business activities with the card's strengths.</p>
                </section>

                <section id="section-17" className={styles.reviewSection}>
                  <h2>17. Application Guide: What Your Business Needs to Know</h2>
                  <p>Applying for The Business Platinum Card® involves providing information about your business and yourself as the authorizing officer.</p>
                  <ul className={styles.featureList}>
                    <li><strong>Eligibility:</strong> Generally available to U.S.-based businesses, including sole proprietorships, partnerships, LLCs, and corporations. You'll typically need to provide your business's Employer Identification Number (EIN) or your Social Security Number (SSN) if applying as a sole proprietor without an EIN. A personal guarantee from the applicant is standard.</li>
                    <li><strong>Credit Score:</strong> While Amex doesn't publish a minimum score, good to excellent personal credit (typically FICO 700+) for the guaranteeing individual is generally expected for approval. Business credit history, if established, may also be considered.</li>
                    <li><strong>American Express Application Rules:</strong>
                        <ul>
                            <li><strong>Once Per Lifetime Welcome Offer Rule:</strong> American Express has a policy where you are generally eligible to receive a welcome offer for a specific card product only once in your lifetime. If you've had this exact card before, you likely won't qualify for a new welcome bonus.</li>
                            <li><strong>Card Limits:</strong> Amex may have limits on the number of American Express cards you can hold or be approved for within a certain period (e.g., often cited as a soft limit of 5 Amex credit cards, though The Business Platinum is a charge card which may have different considerations).</li>
                        </ul>
                    </li>
                    <li><strong>Application Process:</strong> Applications are typically submitted online via the American Express website. You'll need to provide personal details (name, address, SSN, income) and business details (legal business name, business address, industry type, years in business, annual business revenue, EIN). Amex might offer an "Apply with Confidence™" feature for some cards, allowing you to see if you're approved without an initial impact on your credit score (a hard inquiry only occurs if you accept the card after approval).</li>
                  </ul>
                  <p>It's advisable to have all necessary personal and business information ready before starting the application. Ensure all information is accurate to avoid delays.</p>
                </section>

                <section id="section-18" className={`${styles.reviewSection} ${styles.faqSection}`}>
                  <h2>18. Business Platinum FAQs: Your Questions Answered</h2>
                  <div className={styles.faqContainer}>
                      {structuredDataOptimized['@graph'].find(item => item['@type'] === 'FAQPage').mainEntity.map((faq, index) => (
                          <details key={index} className={styles.faqItem} name={`faq-${index + 1}`}>
                              <summary className={styles.faqQuestion}>{`${index + 1}. ${faq.name}`}</summary>
                              <div className={styles.faqAnswer}>
                                <p dangerouslySetInnerHTML={{ __html:
                                  faq.acceptedAnswer.text
                                    .replace("Membership Rewards® program terms", `<a href="${reviewDataNew.officialMembershipRewardsPartnersLink}" target="_blank" rel="noopener noreferrer sponsored">Membership Rewards® program terms</a>`) // Example
                                    // Add more replacements if needed for other dynamic links within FAQ answers
                                }} />
                              </div>
                          </details>
                      ))}
                  </div>
                </section>

                <Image
                    src="/rebe-adelaida-zunQwMy5B6M-unsplash.webp" // Example path
                    alt="Business executive working in an airport lounge, symbolizing Amex Business Platinum perks"
                    width={800}
                    height={500}
                    className={styles.contentImage}
                    loading="lazy"
                />

                <section id="section-19" className={styles.reviewSection}>
                  <h2>19. Expert Strategies: Maximizing Every Business Platinum Perk</h2>
                  <p>To truly get the most from The Business Platinum Card®, consider these expert strategies:</p>
                  <ul className={styles.featureList}>
                    <li><strong>Enroll Immediately:</strong> Upon approval, log into your Amex account and enroll in all eligible benefits and statement credits (Dell, Hilton, Indeed, Adobe, Wireless, Priority Pass™, hotel statuses, etc.). Don't assume they are automatic.</li>
                    <li><strong>Calendarize Credits:</strong> Set reminders for monthly (Wireless), quarterly (Hilton, Indeed), and semi-annual (Dell) credits to ensure you use them before they expire. Track your airline fee credit usage.</li>
                    <li><strong>Strategic Airline Selection:</strong> Choose your one qualifying airline for the $200 incidental fee credit wisely. This same airline will be your eligible choice for the 35% Airline Bonus on economy Pay with Points tickets. Consider your most frequent carrier or one with high incidental fees.</li>
                    <li><strong>Stack Dell Credits:</strong> Combine your semi-annual Dell credits with Dell sales events or Amex Offers for Dell to maximize savings on tech purchases.</li>
                    <li><strong>Leverage Fine Hotels + Resorts (FHR):</strong> Ideal for shorter luxury stays where the FHR benefits (breakfast, property credit, upgrades) provide outsized value. Always compare the FHR rate against other available rates.</li>
                    <li><strong>Use AmexTravel.com for 5X Points (Wisely):</strong> For flights and prepaid hotels, the 5X points are a strong incentive. However, always compare prices with booking direct or via other portals to ensure the points premium doesn't outweigh cash savings elsewhere.</li>
                    <li><strong>Maximize the 35% Airline Bonus:</strong> This is a top-tier redemption. Prioritize using Pay with Points for first/business class tickets on any airline or economy on your selected airline booked via Amex Travel.</li>
                    <li><strong>Avoid Low-Value Redemptions:</strong> Generally, prioritize transferring points to airline/hotel partners or using the 35% Airline Bonus over redeeming for statement credits or merchandise, which often yield lower value.</li>
                    <li><strong>Pay Business Cell Phone Bills with the Card:</strong> This activates the valuable cellphone protection benefit for eligible phones on the plan.</li>
                    <li><strong>Utilize for Large Purchases ($5,000+):</strong> Channel significant U.S. business purchases of $5,000 or more (and those in specified 1.5X categories) through the card to earn 1.5X points, up to the annual cap.</li>
                    <li><strong>Check Amex Offers Regularly:</strong> Log into your account or use the Amex app to add targeted Amex Offers for extra statement credits or bonus points at various merchants.</li>
                    <li><strong>Optimize Additional Cards:</strong> Assign Additional Business Platinum Cards ($195 fee each) to key employees who travel frequently to share lounge access and other travel benefits. Consider no-annual-fee Employee Business Expense Cards for other expense management.</li>
                  </ul>
                </section>

                <section id="section-20" className={styles.reviewSection}>
                  <h2>20. Final Verdict: Is The Business Platinum Card a Worthwhile Investment?</h2>
                  <p>The American Express Business Platinum Card® is unequivocally a powerhouse of premium travel perks and business-focused statement credits. Its substantial $695 annual fee is certainly an investment, but for many U.S.-based businesses with frequent travelers and aligned spending, the potential return can far exceed this cost.</p>
                  <p>Realizing its exceptional value, however, demands active engagement. Businesses must be prepared to enroll in benefits, diligently track and utilize the various statement credits (Dell, Hilton, Airline, Indeed, Adobe, Wireless, CLEAR®), and strategically use features like the 35% Airline Bonus and the American Express Global Lounge Collection®. It is not a card for passive users or businesses seeking utmost simplicity with minimal annual fees.</p>
                  <p>For companies that can navigate its complexities, align their spending with its numerous credit opportunities, and whose travelers will fully leverage the extensive airport lounge access and elite hotel statuses, the Business Platinum Card® transforms from a mere payment tool into a strategic asset. It offers tangible financial returns through credits, enhanced travel experiences that can boost productivity and morale, and robust purchase and travel protections that provide peace of mind.</p>
                  <p>If your business operates with significant travel, invests in technology and business services covered by the credits, and values premium comfort and efficiency on the road, The Business Platinum Card® is more than just a status symbol—it's a robust financial and travel instrument that can deliver substantial ongoing value, making it an ideal choice for the optimizing, road-warrior professional and their enterprise.</p>

                  <div className={styles.prosConsContainer}>
                      <div className={styles.prosBox}>
                          <h3 className={styles.prosConsTitle}>Key Advantages (Pros)</h3>
                          <ul className={styles.featureList}>
                              <li><strong>Unparalleled Airport Lounge Access:</strong> Extensive American Express Global Lounge Collection®.</li>
                              <li><strong>Significant Statement Credit Potential:</strong> Over $1,500+ annually across Dell, airline fees, Hilton, CLEAR®, Indeed, Adobe, wireless, if fully maximized.</li>
                              <li><strong>Valuable Membership Rewards® Program:</strong> Flexible points with high-value transfer partners and the unique 35% Airline Bonus for Pay with Points.</li>
                              <li><strong>Complimentary Hotel Elite Status:</strong> Hilton Honors™ Gold and Marriott Bonvoy® Gold Elite status (enrollment required).</li>
                              <li><strong>Robust Travel and Purchase Protections:</strong> Comprehensive suite of insurance coverage for travel and business purchases.</li>
                              <li><strong>Premium Travel Experiences:</strong> Benefits through Fine Hotels + Resorts® and The Hotel Collection.</li>
                              <li><strong>Generous Welcome Offer Potential:</strong> Provides substantial initial value to new Card Members who meet spending requirements.</li>
                              <li><strong>Business-Specific Benefits:</strong> Credits for Indeed, Adobe, and robust expense management tools.</li>
                          </ul>
                      </div>
                      <div className={styles.consBox}>
                          <h3 className={styles.prosConsTitle}>Key Considerations (Cons)</h3>
                          <ul className={styles.featureList}>
                              <li><strong>High Annual Fee:</strong> $695 requires significant benefit utilization to justify.</li>
                              <li><strong>Active Management Required:</strong> Not a "set it and forget it" card; credits and benefits often require enrollment and tracking.</li>
                              <li><strong>Bonus Points Primarily via AmexTravel.com:</strong> The highest 5X earning rate for travel is mostly tied to their portal, which may not always offer the lowest prices.</li>
                              <li><strong>Modest Base Earning Rate:</strong> 1X points on non-bonused U.S. purchases under $5,000.</li>
                              <li><strong>Complexity:</strong> The sheer number of benefits, credits, and their specific terms can be daunting to learn and manage.</li>
                              <li><strong>U.S. Focus for Some Benefits:</strong> Some credits (e.g., Dell U.S., U.S. Supermarkets for other cards but relevant here for some biz categories) are U.S.-centric.</li>
                          </ul>
                      </div>
                  </div>
                  <h3>Concluding Recommendation:</h3>
                  <p>The Business Platinum Card® from American Express can be an exceptionally valuable investment for the <em>right</em> U.S. business. If your company's spending patterns and travel habits align with its rich suite of benefits, and you are committed to proactive management of its features, the potential to deliver value far exceeding its annual fee is clear. It’s more than a payment tool; it’s an entry into an enhanced travel and business lifestyle, designed to provide both tangible financial rebates and intangible experiential upgrades. Carefully assess your business's needs and ability to leverage the card's offerings before applying. Always refer to the <a href={reviewDataNew.officialOverviewLink} target="_blank" rel="noopener noreferrer sponsored">official American Express website</a> for the latest terms and to apply.</p>
                </section>


                <section id="section-eat" className={`${styles.reviewSection} ${styles.eatSection}`}>
                    <h2 dangerouslySetInnerHTML={{ __html: `Our Commitment to E-A-T: Expertise, Authority &amp; Trustworthiness in Business Card Reviews`}}></h2>
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
                    href={reviewDataNew.applyLink} // /* UPDATE THIS with your affiliate link */
                    className={`${styles.stickyFooterBtn} ${styles.stickyFooterBtnApply}`}
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                >
                    Apply Now
                </a>
                <a
                    href={reviewDataNew.ratesLink} // Links to official Amex page where "Rates & Fees" can be found
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

export default AmericanExpressBusinessPlatinumCardReviewPage;