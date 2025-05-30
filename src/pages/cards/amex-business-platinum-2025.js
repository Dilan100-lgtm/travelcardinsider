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
// Using existing icons from your Platinum/Gold example; update if new ones are needed
import IconGift from '../../components/icons/icon-gift.svg';
import IconStar from '../../components/icons/icon-star.svg';
import IconCheck from '../../components/icons/icon-Credit Card.svg'; // Represents fee or card feature
import IconPlus from '../../components/icons/icon-target.svg'; // Represents 'Best For' or 'Key Benefit'
import IconPlane from '../../components/icons/icon-plane.svg'; // Represents Travel Perks
import IconDollar from '../../components/icons/icon-dollar.svg'; // Represents credits
import IconBriefcase from '../../components/icons/icon-briefcase.svg'; // Example for Business Perk
import IconLounge from '../../components/icons/icon-lounge.svg'; // /* USER ACTION: Create or ensure this icon exists for Lounge Access */
import IconHotel from '../../components/icons/icon-hotel.svg'; // /* USER ACTION: Create or ensure this icon exists for Hotel Benefits */


const RatingTooltip = dynamic(() => import('../../components/RatingTooltip'), { ssr: false, loading: () => null });

/* ──────────────────────────────
    CONSTANTS & STATIC DATA
    ────────────────────────────── */
const siteName = 'Travelcardinsider'; // /* USER ACTION: UPDATE THIS IF DIFFERENT */
const siteUrl = 'https://www.travelcardinsider.com'; // /* USER ACTION: UPDATE THIS IF DIFFERENT */
const pagePath = '/reviews/american-express-business-platinum-card-review';
const pageUrlFull = `${siteUrl}${pagePath}`;
const publishDate = '2025-05-30'; // /* USER ACTION: UPDATE THIS */ Current date or actual publish date
const updateDate = '2025-05-30'; // /* USER ACTION: UPDATE THIS */ Current date or actual update date

// Data specific to the American Express Business Platinum Card® Review
const reviewData = {
  cardName        : 'The American Express® Business Platinum Card®',
  cardShortName   : 'Amex Business Platinum',
  title           : 'American Express® Business Platinum Card® Review (2025): Is It Your Next Power Move?',
  description     : 'In-depth 2025 review of The American Express® Business Platinum Card®. Explore 5X rewards, $1000+ in credits (Dell, Airline, Hotel, etc.), lounge access, hotel status, and the $695 fee. Is it the ultimate card for your U.S. business?',
  keywords        : 'American Express Business Platinum Card review, Amex Business Platinum, Amex Business Platinum benefits, business credit card, Membership Rewards, Amex Business Platinum 5X, Amex Business Platinum 2025, $695 annual fee business card, airport lounge access, premium travel card',
  author: { // /* USER ACTION: UPDATE ALL AUTHOR DETAILS AS NEEDED */
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
          'Luxury Travel Perks & Benefits',
          'Airline & Hotel Loyalty Programs for Business',
          'Optimizing High Annual Fee Cards',
          'American Express Business Cards Portfolio'
      ],
      bioSnippet: 'Dilan Madushanka is the founder and lead editor of Travelcardinsider, specializing in demystifying premium credit cards like the Amex Business Platinum to unlock maximum value for businesses.', // /* USER ACTION: UPDATE THIS */
      fullBioLink: '/author/dilan-madushanka', // /* USER ACTION: UPDATE THIS */
      publishedStats: 'X+ in-depth premium card reviews published', // /* USER ACTION: UPDATE THIS */
      testedStats: 'Over Y+ premium card benefits analyzed', // /* USER ACTION: UPDATE THIS */
      socialLinks: { // /* USER ACTION: UPDATE THESE */
          linkedin: 'https://www.linkedin.com/in/dilan-madushanka-b65293365',
          twitter: 'https://x.com/team_dilan',
          email: 'team@travelcardinsider.com'
      }
  },
  siteName: siteName,
  imageUrl        : '/business-platinum-card.png', // /* USER ACTION: UPDATE THIS with actual card image path, e.g., /images/cards/amex-biz-plat.png */
  imageWidth      : 1290, // /* USER ACTION: UPDATE THIS if image dimensions differ */
  imageHeight     : 812,  // /* USER ACTION: UPDATE THIS if image dimensions differ */
  ratingValue     : 9.0,  // /* USER ACTION: UPDATE THIS */ Example rating for Business Platinum (out of 10)
  ratingCount     : 250,  // /* USER ACTION: UPDATE THIS */ Example review count for Business Platinum
  reviewBody      : 'Our editors evaluate The American Express® Business Platinum Card® based on its premium travel benefits (lounges, hotel status, FHR), extensive statement credits (Airline, Dell, Hilton, Adobe, Indeed, Wireless, CLEAR® Plus), Membership Rewards® program (5X on travel), business management tools, the $695 annual fee, and overall value proposition for U.S.-based businesses that travel frequently and can maximize its diverse perks.', // For Schema
  aprRange        : 'Potentially 19.49% - 28.49% variable for Pay Over Time. Refer to official rates and terms.', // From content
  annualFee       : 695,  // From content

  // Official Amex Links for Business Platinum Card (U.S.)
  applyLink       : 'https://www.americanexpress.com/us/credit-cards/business/business-credit-cards/american-express-business-platinum-credit-card-amex/',
  ratesFeesLink   : 'https://www.americanexpress.com/us/credit-cards/card-application/apply/prospect/terms/business-platinum-card/ep-3007?key=tncBody&rwdFlag=rwd', // /* USER ACTION: Verify this link is the most direct for Rates & Fees table */
  officialOverviewLink: 'https://www.americanexpress.com/us/credit-cards/business/business-credit-cards/american-express-business-platinum-credit-card-amex/',
  officialWelcomeOfferLink: 'https://www.americanexpress.com/us/credit-cards/business/business-credit-cards/american-express-business-platinum-credit-card-amex/', // Often on the main page
  officialMembershipRewardsLink: 'https://www.americanexpress.com/us/rewards/membership-rewards/terms',
  officialBenefitsLink: 'https://global.americanexpress.com/card-benefits/view-all/business-platinum',
  officialAmexTravelLink: 'https://www.amextravel.com',

  // Links for specific benefits mentioned in text
  officialLoungeCollectionLink: 'https://global.americanexpress.com/card-benefits/detail/the-lounge-collection/business-platinum',
  officialFHRLink: 'https://www.americanexpress.com/en-us/travel/fine-hotels-and-resorts/',
  officialHotelStatusHiltonLink: 'https://global.americanexpress.com/card-benefits/detail/hilton-honors-gold-status/business-platinum',
  officialHotelStatusMarriottLink: 'https://global.americanexpress.com/card-benefits/detail/marriott-bonvoy-gold-elite/business-platinum',
  officialCreditsDellLink: 'https://global.americanexpress.com/card-benefits/detail/dell-technologies-statement-credit/business-platinum', // Example, specific credit links are good
  officialCreditsAirlineFeeLink: 'https://global.americanexpress.com/card-benefits/detail/airline-fee-credit/business-platinum', // Example
  officialTravelCreditsLink: 'https://www.americanexpress.com/en-us/account/get-started/platinumbusiness/for-travel', // For Global Entry, TSA Pre, CLEAR
  officialProtectionBenefitsLink: 'https://www.americanexpress.com/us/credit-cards/features-benefits/policies/terms.html', // General terms, specific PDFs often in account

  sku             : 'AMEX-BIZPLAT-TCI-2025', // /* USER ACTION: UPDATE THIS */ Example SKU
  mpn             : 'AMEXBIZPLATINUM', // /* USER ACTION: UPDATE THIS */ Example MPN
  h1Content       : "American Express® Business Platinum Card®: Your Next Power Move?",
  heroSubtitle    : "Our 2025 deep-dive review explores if the Amex Business Platinum's elite travel perks, extensive credits, and $695 fee make it an indispensable asset for your U.S. business."
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
        priceValidUntil    : '2026-12-31', // /* USER ACTION: UPDATE THIS AS NEEDED */
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
        // FAQs will be populated from user's text below
        {
          "@type": "Question",
          "name": "How does the $200 Annual Airline Fee Credit work?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Select one qualifying airline annually. Get up to $200 in statement credits for incidental fees like checked bags or in-flight refreshments (not tickets) on that airline. Enrollment and airline selection via your Amex account are required. [Check Amex for full terms]"
          }
        },
        {
          "@type": "Question",
          "name": "How do I enroll for Hilton Honors™ Gold and Marriott Bonvoy® Gold Elite status?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Enrollment isn't automatic. You must activate these complimentary hotel elite statuses through the Benefits section of your American Express online account."
          }
        },
        {
          "@type": "Question",
          "name": "Which purchases qualify for 1.5X Membership Rewards® points and what's the cap?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Earn 1.5X points on eligible U.S. purchases of $5,000+ and in key business categories (e.g., U.S. construction, electronics, software, shipping). This is capped at $2 million in such purchases per year."
          }
        },
        {
          "@type": "Question",
          "name": "Can statement credits (Dell, Indeed, etc.) be combined with Amex Offers?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, generally. Amex Offers are separate targeted promotions that can often be \"stacked\" with the card's standard statement credits for greater savings."
          }
        },
        {
          "@type": "Question",
          "name": "What happens to unused portions of periodic statement credits?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Unused portions of credits distributed monthly, quarterly, or semi-annually (e.g., wireless, Hilton, Dell) are typically forfeited. They don't roll over, so timely use is key."
          }
        },
        {
          "@type": "Question",
          "name": "How can I track my credit usage and benefit enrollment?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Monitor your benefit enrollments and credit utilization progress through your online American Express account, usually under the \"Benefits\" or \"Rewards & Benefits\" tab."
          }
        },
        {
          "@type": "Question",
          "name": "Is the Amex Business Platinum a charge card or a credit card?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It's primarily a charge card (balance typically due in full monthly) but includes a \"Pay Over Time\" feature for eligible purchases, allowing you to carry a balance with interest."
          }
        },
        {
          "@type": "Question",
          "name": "Can I get airport lounge access for guests?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Guest policies vary by lounge network. For Centurion® Lounges, guests usually incur a fee. Priority Pass™ guest access depends on the individual lounge. Always check current policies."
          }
        },
        {
          "@type": "Question",
          "name": "How does the 35% Airline Bonus (Pay with Points rebate) work?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Get 35% of your points back (up to 1 million points/year) when using Pay with Points for First/Business Class flights on any airline, or Economy on your pre-selected airline, via Amex Travel. Applies to points redeemed."
          }
        },
        {
          "@type": "Question",
          "name": "What are \"eligible purchases\" for earning points?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Generally, purchases for goods and services, minus returns. Excludes fees, interest, cash advances, balance transfers, and purchases of cash equivalents. [Refer to Amex MR terms]"
          }
        }
      ],
    },
    { 
      '@type' : 'Organization',
      '@id'   : `${siteUrl}#website`,
      name    : siteName,
      url     : siteUrl,
      logo    : { '@type': 'ImageObject', url: `${siteUrl}/images/logo/your-logo-schema.png` }, // /* USER ACTION: UPDATE THIS */
      sameAs  : [ // /* USER ACTION: UPDATE THESE */
        "https://www.facebook.com/YourTravelCardInsiderFacebookPage",
        "https://twitter.com/YourTravelCardInsiderTwitterHandle",
      ],
    },
  ],
};

// Rating criteria adapted for a premium business travel card
const ratingCriteria = [
    'Value & Breadth of Airport Lounge Access (Centurion, Priority Pass, etc.)',
    'Effectiveness & Total Value of Statement Credits (Airline, Dell, Hotel, Business Services)',
    'Membership Rewards® Program: 5X/1.5X Earning Rates & High-Value Redemption Options (incl. 35% Airline Bonus)',
    'Welcome Offer: Point Value vs. Spending Requirement & Lifetime Rule Impact',
    'Premium Travel Perks: Fine Hotels + Resorts®, Hotel Elite Status (Hilton, Marriott)',
    'Business-Specific Benefits: Large Purchase Bonus, Business Tools, Protections (e.g., Cell Phone)',
    'Annual Fee ($695) Justification: Overall Benefit Package vs. High Cost & Management Effort',
    'Travel & Purchase Protections: Scope and Value for Business Travelers',
    'Clarity of Terms and Ease of Benefit Enrollment & Utilization',
    'Customer Support & Premium Account Management Services',
];

// Table of Contents sections based on the provided review structure
const tocSections = [
    { id: 'section-intro', title: '1. The Allure of the Amex Business Platinum: An Introduction' },
    { id: 'section-ideal-cardholder', title: '2. Profile of the Ideal Cardholder: Is This You?' },
    { id: 'section-annual-fee', title: '3. The Price of Premium: Annual Fee & Associated Costs' },
    { id: 'section-welcome-offer', title: '4. Kickstarting Your Journey: The Welcome Offer' },
    { id: 'section-earning-5x', title: '5. Accelerated Earnings: 5X Points on Flights & Prepaid Hotels' },
    { id: 'section-earning-1-5x', title: '6. Smart Business Spending: 1.5X Points on Large & Key Category Purchases' },
    { id: 'section-earning-1x', title: '7. The Baseline: 1X Points & What Doesn\'t Earn' },
    { id: 'section-mr-overview', title: '8. The Flexibility Advantage: Overview of Membership Rewards® Redemptions' },
    { id: 'section-mr-transfers', title: '9. Sweet Spots: Transferring Points to Airline & Hotel Partners' },
    { id: 'section-airline-bonus', title: '10. Exclusive Rebate: The 35% Airline Bonus Explained' },
    { id: 'section-mr-other-redemptions', title: '11. Other Avenues: Using Points via Amex Travel & For Statement Credits' },
    { id: 'section-lounge-collection', title: '12. Your Airport Sanctuary: The American Express Global Lounge Collection®' },
    { id: 'section-hotel-benefits', title: '13. Elevating Stays: Fine Hotels + Resorts® & The Hotel Collection Benefits' },
    { id: 'section-hotel-status', title: '14. Automatic Upgrades: Complimentary Hilton & Marriott Elite Status' },
    { id: 'section-statement-credits', title: '15. The Credit Arsenal: Offsetting the Annual Fee' },
    { id: 'section-expedited-travel', title: '16. Streamlined Journeys: Expedited Security & Travel Essentials' },
    { id: 'section-protections', title: '17. Peace of Mind: Key Business & Travel Protections' },
    { id: 'section-value-scenario', title: '18. Crunching the Numbers: A Real-World Value Scenario' },
    { id: 'section-pros-cons-alternatives', title: '19. Weighing Your Options: Pros, Cons & Top Alternatives' },
    { id: 'section-final-verdict', title: '20. The Final Verdict: Is the Amex Business Platinum Your Next Power Move?' },
    { id: 'section-user-testimonials', title: '21. User Testimonials' }, // Added for testimonials
    { id: 'section-faqs-jump', title: '22. Top 10 FAQs Summarized' }, // Matched to user's FAQ title
    { id: 'section-eat', title: '23. Our E-A-T Commitment' },
];

// Placeholder for content images, update paths as needed
const contentImage1 = "/airport-lounge-working.webp"; // /* USER ACTION: UPDATE THIS */ Example: a business person in a Centurion Lounge
const contentImage2 = "/luxury-hotel-checkin.webp"; // /* USER ACTION: UPDATE THIS */ Example: FHR hotel experience
const contentImage3 = "/business-team-meeting-tech.webp"; // /* USER ACTION: UPDATE THIS */ Example: Illustrating Dell/Adobe credits or business tools


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


  const summaryBoxData = { // /* USER ACTION: Review and refine these summaries for Platinum */
    welcomeOffer: "Typically 150,000 MR® points after $20,000 spend in 3 months (Verify current offer).",
    annualFee: `$${reviewData.annualFee}`,
    topEarning: "5X MR® points on flights & prepaid hotels via AmexTravel.com. 1.5X on U.S. purchases $5k+ & in key business categories (up to $2M/yr).",
    keyCredits: "Over $1,000+ in potential annual credits: $200 Airline Fee, $400 Dell, $200 Hilton, $120 Wireless, $360 Indeed, $150 Adobe, $199 CLEAR® Plus (Enrollment required for most).",
    travelPerks: "Global Lounge Collection® (Centurion, Priority Pass™), Fine Hotels + Resorts®, Hilton & Marriott Gold Status, No Foreign Transaction Fees.",
    businessPerks: "Purchase & Travel Protections, Cell Phone Protection, Expense Management Tools.",
    bestFor: "U.S. businesses with high travel and operational spend, valuing premium perks and able to maximize statement credits to offset the high annual fee."
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
        <link rel="icon" href="/favicon.ico" /> {/* /* USER ACTION: UPDATE THESE PATHS AS NEEDED */ }
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
                            onFocus={handleAuthorMouseEnter}
                            onBlur={handleAuthorMouseLeave}
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
                      on American Express&apos;s official site
                    </span>
                  </div>
                  <Link href="#section-annual-fee" legacyBehavior> {/* Link to a relevant starting section */}
                    <a className={styles.heroSecondaryLink}>View Key Features & Fee</a>
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
                    <i>{reviewData.cardName}: {reviewData.description}</i> {/* Using the main description for brevity here */}
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
                                <span className={styles.summaryIcon}><IconPlane /></span> {/* Changed to Plane for Travel Perks */}
                                <span className={styles.summaryLabel}>Travel Perks:</span>
                                <span className={styles.summaryValue}>{summaryBoxData.travelPerks}</span>
                            </div>
                            <div className={styles.summaryItem}>
                                <span className={styles.summaryIcon}><IconBriefcase /></span> 
                                <span className={styles.summaryLabel}>Business Perks:</span>
                                <span className={styles.summaryValue}>{summaryBoxData.businessPerks}</span>
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
                             <a href='/rewards-compare' className={`${styles.heroRewardsCalculator} ${styles.summaryButton}`} target="_blank" rel="noopener noreferrer"> {/* /* USER ACTION: UPDATE LINK if needed */ }
                                Business Rewards Calculator
                            </a>
                        </div>
                    </div>
                </header>

                {/* Content Sections Start Here */}

                <section id="section-intro" className={styles.reviewSection}>
                  <h2>1. The Allure of the Amex Business Platinum: An Introduction</h2>
                  <p>For the discerning U.S. business owner, {reviewData.cardName} isn't just a financial tool; it’s an emblem of ambition and a gateway to a world of premium travel experiences. Its iconic silver design hints at the luxury within—exclusive airport lounges, upgraded hotel stays, and a suite of benefits designed to streamline operations and reward significant expenditure. But with a notable annual fee, a crucial question arises: does the tangible value justify the investment, or is its prestige more aspirational than practical? This review delves deep, moving beyond the marketing gloss to offer a clear-eyed assessment. We’ll explore if this celebrated card is truly an indispensable asset for your business, or a complex offering best suited for those who can master its many nuances to unlock substantial rewards. Let’s determine if the Business Platinum is your next power move.</p>
                </section>

                <section id="section-ideal-cardholder" className={styles.reviewSection}>
                  <h2>2. Profile of the Ideal Cardholder: Is This You?</h2>
                  <p>{reviewData.cardName} isn't a universal fit; it’s tailored for a specific type of U.S. business and owner. Are you constantly on the move for client meetings or industry events? Do you value premium travel experiences that save time and enhance comfort, like airport lounge access and hotel upgrades? This card shines for established small to medium-sized businesses, or high-spending sole proprietors, who can strategically leverage its benefits. Crucially, the ideal cardholder is organized, detail-oriented, and proactive – ready to enroll in credits, track spending, and actively manage their account to maximize the rich rewards and offset the annual fee.</p>
                </section>

                <section id="section-annual-fee" className={styles.reviewSection}>
                  <h2>3. The Price of Premium: Annual Fee & Associated Costs</h2>
                  <p>The most prominent figure associated with {reviewData.cardName} is its <strong>${reviewData.annualFee} annual fee</strong>. (<a href={reviewData.ratesFeesLink} target="_blank" rel="noopener noreferrer sponsored">See Rates and Fees</a>). This positions it firmly in the premium category. If you plan to equip key employees with cards, an Additional Business Platinum Card® typically costs $395 annually per card (though less feature-rich Companion Cards may be available with no added fee). While the card offers a "Pay Over Time" feature for eligible purchases, allowing you to carry a balance with interest (APRs vary, e.g., {reviewData.aprRange} based on creditworthiness), it’s primarily designed for businesses that can manage their cash flow to pay significant portions of their balance monthly to avoid substantial interest charges. (Please note: APRs and fee structures are subject to change; always consult the official American Express terms and conditions for the most current information via the <a href={reviewData.officialOverviewLink} target="_blank" rel="noopener noreferrer sponsored">official card page</a>.)</p>
                </section>
                
                {/* USER ACTION: Consider adding an illustrative image here */}
                <div className={styles.contentImageContainer}>
                    <Image
                        src={contentImage1} 
                        alt="Business person working comfortably in an airport lounge, illustrating travel perks of Amex Business Platinum."
                        width={800} // /* USER ACTION: Adjust dimensions */
                        height={500} // /* USER ACTION: Adjust dimensions */
                        className={styles.contentImage}
                        loading="lazy"
                    />
                    <figcaption className={styles.imageCaption}>The Global Lounge Collection® offers a productive oasis for travelers.</figcaption>
                </div>


                <section id="section-welcome-offer" className={styles.reviewSection}>
                    <h2>4. Kickstarting Your Journey: The Welcome Offer</h2>
                    <p>⚠️ <strong>Important Welcome Offer Advisory:</strong> Credit card welcome offers change frequently. Always verify current terms directly on the <a href={reviewData.officialWelcomeOfferLink} target="_blank" rel="noopener noreferrer sponsored">official American Express website before applying</a>.</p>
                    <p>American Express typically rolls out the red carpet for new {reviewData.cardShortName} members with a substantial welcome offer. For instance, a common public offer might be <strong>150,000 Membership Rewards® points after spending $20,000</strong> on eligible purchases within the first three months of Card Membership. (This offer is an example and was noted as potentially ending June 30, 2025, in original source material; always verify the current public offer directly with American Express). This point haul can be incredibly valuable, potentially worth $1,500 to $3,000 or more when strategically redeemed for travel. However, meeting the $20,000 spending threshold requires careful planning. It's also critical to remember Amex's "once per lifetime" rule for welcome offers on a specific card product – securing this bonus is a one-time opportunity.</p>
                </section>

                <section id="section-earning-5x" className={styles.reviewSection}>
                  <h2>5. Accelerated Earnings: 5X Points on Flights & Prepaid Hotels</h2>
                  <p>The quickest way to amass Membership Rewards® points with {reviewData.cardName} is through its travel booking incentives. Your business will earn an impressive <strong>5 points for every dollar</strong> spent on flights and on prepaid hotel bookings made directly through <a href={reviewData.officialAmexTravelLink} target="_blank" rel="noopener noreferrer sponsored">AmexTravel.com</a>. (<a href={reviewData.officialMembershipRewardsLink} target="_blank" rel="noopener noreferrer sponsored">See Membership Rewards® Program Terms</a>). For companies with significant travel budgets that can be channeled through the American Express online travel portal, this 5X earning rate can lead to a substantial accumulation of points, rapidly accelerating your ability to redeem for high-value rewards. This makes <a href={reviewData.officialAmexTravelLink} target="_blank" rel="noopener noreferrer sponsored">AmexTravel.com</a> your primary pitstop for maximizing travel-related rewards.</p>
                </section>

                <section id="section-earning-1-5x" className={styles.reviewSection}>
                  <h2>6. Smart Business Spending: 1.5X Points on Large & Key Category Purchases</h2>
                  <p>Beyond the 5X travel bonus, {reviewData.cardName} offers a valuable <strong>1.5 points per dollar</strong> in two key scenarios: First, on any single eligible U.S. purchase of <strong>$5,000 or more</strong>, regardless of the category. This is a significant advantage for large-ticket items like equipment, software licenses, or substantial inventory orders. Second, this 1.5X rate also applies to everyday U.S. business spending in select categories, including <strong>construction materials and hardware, electronic goods retailers, software and cloud service providers, and shipping</strong>. (Note: This 1.5X earning is applicable on up to $2 million of these combined purchases per calendar year; then it reverts to 1X.)</p>
                </section>

                <section id="section-earning-1x" className={styles.reviewSection}>
                  <h2>7. The Baseline: 1X Points & What Doesn't Earn</h2>
                  <p>For all other eligible purchases that don't fall into the 5X or 1.5X bonus categories, your business will earn a standard <strong>1 Membership Rewards® point per dollar</strong> spent. While this base rate isn't the highest on the market, the strength of the bonus categories often compensates. It's important to note that "eligible purchases" typically exclude items like cash advances, balance transfers, traveler's checks, gift card purchases or reloads, and any fees or interest charges associated with your card account. Understanding these exclusions helps in accurately forecasting your points earnings.</p>
                </section>

                <section id="section-mr-overview" className={styles.reviewSection}>
                  <h2>8. The Flexibility Advantage: Overview of Membership Rewards® Redemptions</h2>
                  <p>The American Express Membership Rewards® program is renowned for its flexibility, offering a wide array of redemption options to suit your business needs. One of the program's key strengths is that your points generally <strong>do not expire</strong> as long as your {reviewData.cardName} account remains open and in good standing. This allows you to accumulate points over time for significant redemptions without the pressure of looming expiration dates, giving you the freedom to use them when they offer the most value to your business. (<a href={reviewData.officialMembershipRewardsLink} target="_blank" rel="noopener noreferrer sponsored">See Program Terms</a>).</p>
                </section>

                <section id="section-mr-transfers" className={styles.reviewSection}>
                  <h2>9. Sweet Spots: Transferring Points to Airline & Hotel Partners</h2>
                  <p>Often, the pathway to maximizing the value of your Membership Rewards® points is by transferring them to Amex's extensive network of airline and hotel loyalty program partners. These include major carriers like Delta, Air Canada, and British Airways, as well as hotel groups such as Hilton and Marriott. (<a href={reviewData.officialMembershipRewardsLink} target="_blank" rel="noopener noreferrer sponsored">View Transfer Partners</a>). While transfer ratios vary, strategic transfers can yield exceptional value, particularly for international business or first-class flights, or premium hotel stays. It’s always wise to check award availability with the partner program before initiating a transfer, as these transactions are typically irreversible. This method often unlocks per-point values significantly higher than other redemption options.</p>
                  {/* USER ACTION: Consider adding a small table of key transfer partners here if desired, similar to the Gold card example */}
                </section>

                <section id="section-airline-bonus" className={styles.reviewSection}>
                  <h2>10. Exclusive Rebate: The 35% Airline Bonus Explained</h2>
                  <p>A standout redemption feature unique to {reviewData.cardName} (and certain other premium Amex cards) is the <strong>35% Airline Bonus</strong>. When you use Membership Rewards® points to pay for eligible flights through American Express Travel, you can get 35% of those points back. This applies to:</p>
                  <ul className={styles.featureList}>
                    <li>Any First or Business Class ticket on any airline.</li>
                    <li>Any Economy Class ticket on the one qualifying airline you pre-selected for your annual $200 Airline Fee Credit.</li>
                  </ul>
                  <p>This rebate (up to 1,000,000 points back per calendar year) effectively boosts your points' value to approximately 1.54 cents each for these specific flight redemptions. Plus, flights booked this way often still earn airline miles and elite-qualifying credits.</p>
                </section>

                <section id="section-mr-other-redemptions" className={styles.reviewSection}>
                  <h2>11. Other Avenues: Using Points via Amex Travel & For Statement Credits</h2>
                  <p>Beyond partner transfers and the 35% rebate, you can redeem points directly through <a href={reviewData.officialAmexTravelLink} target="_blank" rel="noopener noreferrer sponsored">AmexTravel.com</a> using "Pay with Points" for flights, hotels, cruises, or rental cars. For flights, points are generally valued at 1 cent each here. However, redemptions for merchandise, gift cards, or using points to "Cover Your Card Charges" (as statement credits) typically offer lower value (often around 0.6 to 0.7 cents per point) and are generally not recommended if you're aiming for maximum return on your earned rewards.</p>
                </section>

                <section id="section-lounge-collection" className={styles.reviewSection}>
                  <h2>12. Your Airport Sanctuary: The American Express Global Lounge Collection®</h2>
                  <p>For the frequent business traveler, time at the airport can be transformed from a stressful interlude into a productive or restful pause with The American Express Global Lounge Collection®. This network provides access to over <strong>1,400 airport lounges across 140 countries</strong>. (<a href={reviewData.officialLoungeCollectionLink} target="_blank" rel="noopener noreferrer sponsored">Explore the Lounge Collection</a>). Highlights include the exclusive, high-quality Centurion® Lounges, known for their complimentary gourmet food, premium bar service, and dedicated workspaces. You also get access to Priority Pass™ Select lounges worldwide (enrollment required), Delta Sky Clubs® (when flying Delta, subject to visit limits), plus Escape Lounges – The Centurion® Studio Partner, Plaza Premium Lounges, and select Lufthansa lounges. This comprehensive access significantly enhances the travel experience, offering a quiet place to work, relax, and refresh.</p>
                </section>
                
                {/* USER ACTION: Consider adding an illustrative image here */}
                <div className={styles.contentImageContainer}>
                    <Image
                        src={contentImage2} 
                        alt="Luxurious hotel lobby or room, highlighting Fine Hotels + Resorts benefits."
                        width={800} // /* USER ACTION: Adjust dimensions */
                        height={500} // /* USER ACTION: Adjust dimensions */
                        className={styles.contentImage}
                        loading="lazy"
                    />
                    <figcaption className={styles.imageCaption}>Elevate your stays with Fine Hotels + Resorts® and The Hotel Collection benefits.</figcaption>
                </div>

                <section id="section-hotel-benefits" className={styles.reviewSection}>
                  <h2>13. Elevating Stays: Fine Hotels + Resorts® & The Hotel Collection Benefits</h2>
                  <p>Beyond the airport, {reviewData.cardName} unlocks premium benefits at hotels worldwide. Through the <strong>Fine Hotels + Resorts® (FHR)</strong> program, when you book through American Express Travel, you receive a suite of valuable perks. (<a href={reviewData.officialFHRLink} target="_blank" rel="noopener noreferrer sponsored">Discover FHR Program</a>). These typically include daily breakfast for two, a room upgrade upon arrival (when available), a unique property amenity (often a $100 credit for dining or spa services), guaranteed 4 PM late check-out, and noon check-in (when available). Similarly, <strong>The Hotel Collection</strong> (for bookings of two consecutive nights or more) offers up to a $100 hotel credit and a room upgrade if available, enhancing your comfort and overall stay experience.</p>
                </section>

                <section id="section-hotel-status" className={styles.reviewSection}>
                  <h2>14. Automatic Upgrades: Complimentary Hilton & Marriott Elite Status</h2>
                  <p>{reviewData.cardName} grants you valuable mid-tier elite status with two major hotel chains, enhancing every stay (enrollment required via your <a href={reviewData.officialBenefitsLink} target="_blank" rel="noopener noreferrer sponsored">Amex account</a>).</p>
                  <ul className={styles.featureList}>
                    <li><strong>Hilton Honors™ Gold Status:</strong> Typically includes benefits like space-available room upgrades, an 80% bonus on Hilton Honors Base Points earned, and a daily food and beverage credit (in the U.S.) or continental breakfast (at most non-U.S. brands). (<a href={reviewData.officialHotelStatusHiltonLink} target="_blank" rel="noopener noreferrer sponsored">Learn about Hilton Gold</a>)</li>
                    <li><strong>Marriott Bonvoy® Gold Elite Status:</strong> Offering perks such as a 25% bonus on Marriott Bonvoy points, enhanced room upgrades based on availability, and 2 PM late check-out (subject to availability). (<a href={reviewData.officialHotelStatusMarriottLink} target="_blank" rel="noopener noreferrer sponsored">Learn about Marriott Gold Elite</a>)</li>
                  </ul>
                  <p>These statuses provide consistent value and comfort during your business travels.</p>
                </section>

                <section id="section-statement-credits" className={styles.reviewSection}>
                  <h2>15. The Credit Arsenal: Offsetting the Annual Fee</h2>
                  <p>One of the most compelling aspects of {reviewData.cardName} is its extensive suite of annual statement credits, which, if fully utilized, can significantly offset – or even exceed – the ${reviewData.annualFee} annual fee. These credits require active management and often enrollment through your American Express account. (<a href={reviewData.officialBenefitsLink} target="_blank" rel="noopener noreferrer sponsored">View All Benefits & Enroll</a>). Key credits include (amounts are typically per calendar year unless noted):</p>
                  <DraggableTableWrapper> {/* Making this a table for better readability */}
                        <div className={styles.tableContainer}>
                            <table className={`${styles.statsTable} ${styles.highlightTable}`}>
                                <thead>
                                    <tr>
                                        <th>Credit Category</th>
                                        <th>Potential Annual Value</th>
                                        <th>Details & Enrollment Notes</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td data-label="Credit">Airline Fee Credit</td>
                                        <td data-label="Value">Up to $200</td>
                                        <td data-label="Details">Incidental charges on one pre-selected qualifying airline. Enrollment required.</td>
                                    </tr>
                                    <tr>
                                        <td data-label="Credit">Dell Technologies Credit</td>
                                        <td data-label="Value">Up to $400</td>
                                        <td data-label="Details">Typically $200 semi-annually for U.S. purchases. Enrollment required. (<a href={reviewData.officialCreditsDellLink} target="_blank" rel="noopener noreferrer sponsored">Details</a>)</td>
                                    </tr>
                                    <tr>
                                        <td data-label="Credit">Hilton Statement Credit</td>
                                        <td data-label="Value">Up to $200</td>
                                        <td data-label="Details">Typically $50 per quarter on eligible Hilton portfolio purchases. Enrollment required.</td>
                                    </tr>
                                    <tr>
                                        <td data-label="Credit">Wireless Credit</td>
                                        <td data-label="Value">Up to $120</td>
                                        <td data-label="Details">Typically $10 per month for U.S. wireless services. Enrollment required.</td>
                                    </tr>
                                    <tr>
                                        <td data-label="Credit">Indeed Credit</td>
                                        <td data-label="Value">Up to $360</td>
                                        <td data-label="Details">Typically $90 per quarter for hiring products. Enrollment required.</td>
                                    </tr>
                                     <tr>
                                        <td data-label="Credit">Adobe Credit</td>
                                        <td data-label="Value">Up to $150</td>
                                        <td data-label="Details">On select annual prepaid business subscriptions (verify current availability & terms). Enrollment required.</td>
                                    </tr>
                                    <tr>
                                        <td data-label="Credit">CLEAR® Plus Membership Credit</td>
                                        <td data-label="Value">Up to $199</td>
                                        <td data-label="Details">Annual statement credit for CLEAR® Plus. Enrollment required. (<a href={reviewData.officialTravelCreditsLink} target="_blank" rel="noopener noreferrer sponsored">Details</a>)</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </DraggableTableWrapper>
                  <p>Collectively, these and other potential credits represent <strong>over $1,000 in potential annual value</strong>, turning the annual fee into a manageable part of a much larger value equation for businesses that can align their spending.</p>
                </section>
                
                {/* USER ACTION: Consider adding an illustrative image here */}
                <div className={styles.contentImageContainer}>
                    <Image
                        src={contentImage3} 
                        alt="Business team collaborating using Dell laptops and Adobe software, illustrating credit usage."
                        width={800} // /* USER ACTION: Adjust dimensions */
                        height={500} // /* USER ACTION: Adjust dimensions */
                        className={styles.contentImage}
                        loading="lazy"
                    />
                    <figcaption className={styles.imageCaption}>Statement credits for Dell, Adobe, and Indeed can provide significant business value.</figcaption>
                </div>

                <section id="section-expedited-travel" className={styles.reviewSection}>
                  <h2>16. Streamlined Journeys: Expedited Security & Travel Essentials</h2>
                  <p>{reviewData.cardName} helps you navigate airports faster and save on international spending. (<a href={reviewData.officialTravelCreditsLink} target="_blank" rel="noopener noreferrer sponsored">See Travel Benefit Details</a>)</p>
                  <ul className={styles.featureList}>
                    <li><strong>Global Entry or TSA PreCheck® Credit:</strong> Receive a statement credit for the application fee (up to $120 for Global Entry or up to $85 for TSA PreCheck® every 4-4.5 years).</li>
                    <li><strong>CLEAR® Plus Membership Credit:</strong> Annual statement credit of up to $199 for a CLEAR® Plus Membership, which uses biometrics to speed you through security lines at many U.S. airports.</li>
                    <li><strong>No Foreign Transaction Fees:</strong> A crucial perk for international ventures, saving you the typical 2-3% charged by many other cards on purchases made abroad.</li>
                  </ul>
                </section>

                <section id="section-protections" className={styles.reviewSection}>
                  <h2>17. Peace of Mind: Key Business & Travel Protections</h2>
                  <p>Beyond perks and credits, {reviewData.cardName} provides a robust suite of insurance and protection benefits. (<a href={reviewData.officialProtectionBenefitsLink} target="_blank" rel="noopener noreferrer sponsored">Review Protection Terms</a>). When you pay with your card, key protections include:</p>
                  <ul className={styles.featureList}>
                    <li><strong>Purchase Protection:</strong> Eligible new purchases can be covered against accidental damage or theft for 90 days (up to $10,000 per occurrence).</li>
                    <li><strong>Extended Warranty:</strong> Can add up to an extra year to an original U.S. manufacturer's warranty of five years or less.</li>
                    <li><strong>Cellphone Protection:</strong> Against damage or theft (up to $800 per claim, with a $50 deductible, 2 claims per 12 months) when you pay your monthly wireless bill with the card.</li>
                    <li><strong>Trip Delay Insurance:</strong> Provides reimbursement for reasonable additional expenses.</li>
                    <li><strong>Trip Cancellation/Interruption Insurance:</strong> Offers protection for non-refundable travel expenses.</li>
                    <li><strong>Baggage Insurance Plan:</strong> Covers eligible lost, damaged, or stolen baggage.</li>
                  </ul>
                  <p><small>(Terms, conditions, and limitations apply to all protection benefits. Review your guide to benefits carefully.)</small></p>
                </section>

                <section id="section-value-scenario" className={styles.reviewSection}>
                  <h2>18. Crunching the Numbers: A Real-World Value Scenario</h2>
                  <p>To understand {reviewData.cardName}'s potential, consider "Sarah," a hypothetical U.S.-based marketing consultant who travels twice a month, prefers Hilton or Marriott, and uses Dell products, Indeed for freelance talent, and Adobe software. Assuming Sarah actively utilizes the card’s statement credits (like the $200 airline fee, $200 Hilton, $400 Dell, $360 Indeed, $150 Adobe, $120 wireless, and $199 CLEAR® Plus), she could recoup <strong>over $1,600 in direct value annually</strong>. Add to this the points earned from her business spend (especially 5X on travel via <a href={reviewData.officialAmexTravelLink} target="_blank" rel="noopener noreferrer sponsored">AmexTravel.com</a> and 1.5X on large purchases), the value of lounge access (e.g., 20 visits valued at ~$40 each = $800), and perks from hotel elite status and Fine Hotels + Resorts® bookings. Even conservatively valuing her earned points and perks, Sarah could easily see a net positive value well over <strong>$2,000-$3,000</strong> after subtracting the ${reviewData.annualFee} annual fee, especially in the first year with a welcome offer. This highlights that for a business whose spending aligns with the card’s benefits, the value proposition can be exceptionally strong.</p>
                </section>

                <section id="section-pros-cons-alternatives" className={styles.reviewSection}>
                    <h2>19. Weighing Your Options: Pros, Cons & Top Alternatives</h2>
                    <div className={styles.prosConsContainer}>
                        <div className={styles.prosList}>
                            <h3>Pros:</h3>
                            <ul>
                                <li><IconCheck /> Unparalleled airport lounge access (Centurion, Priority Pass, etc.).</li>
                                <li><IconDollar /> Significant statement credit potential (over $1000+) across travel and business categories.</li>
                                <li><IconStar /> Valuable Membership Rewards® program with flexible, high-value redemption options (incl. 35% airline bonus).</li>
                                <li><IconHotel /> Complimentary Hilton Honors Gold & Marriott Bonvoy Gold Elite status.</li>
                                <li><IconBriefcase /> Robust travel and purchase protections, including Cell Phone Protection.</li>
                                <li><IconPlane /> 5X points on flights and prepaid hotels via AmexTravel.com.</li>
                                <li><IconPlus /> 1.5X points on large purchases ($5k+) and key business categories.</li>
                                <li><IconCheck /> No Foreign Transaction Fees.</li>
                            </ul>
                        </div>
                        <div className={styles.consList}>
                            <h3>Cons:</h3>
                            <ul>
                                <li><IconCheck /> High $695 annual fee.</li>
                                <li><IconBriefcase /> Requires active management to maximize benefits and credits.</li>
                                <li><IconPlane /> Highest travel rewards (5X) primarily via AmexTravel.com.</li>
                                <li><IconStar /> Standard 1X base earning rate on non-bonus spend.</li>
                                <li><IconDollar /> Some credits are for specific vendors or have enrollment requirements.</li>
                            </ul>
                        </div>
                    </div>
                    <h3>Top Alternatives:</h3>
                    <p>If the Platinum’s fee or complexity seems daunting, consider these alternatives:</p>
                    <ul className={styles.featureList}>
                        <li><strong>Chase Ink Business Preferred® Credit Card:</strong> Offers strong 3X points in common business categories (travel, shipping, advertising, internet/cable/phone) for a lower $95 annual fee. Points transfer to valuable partners.</li>
                        <li><strong>Capital One Venture X Business Card:</strong> Provides unlimited 2X miles on every purchase with a $395 annual fee, simpler travel credits ($300 annual travel credit, 10,000 bonus miles annually), and airport lounge access (Priority Pass).</li>
                        <li><strong>American Express® Business Gold Card:</strong> A step down in fee ($375) with 4X points on 2 select categories where your business spends the most, plus valuable statement credits.</li>
                    </ul>
                    <p>The best card depends entirely on your business's specific spending patterns, travel frequency, and benefit priorities.</p>
                </section>

                <section id="section-final-verdict" className={styles.reviewSection}>
                  <h2>20. The Final Verdict: Is the Amex Business Platinum Your Next Power Move?</h2>
                  <p>{reviewData.cardName} is undeniably a powerhouse, packed with premium travel perks and valuable business credits that can deliver exceptional value – <strong>if you’re the right fit</strong>. This isn't a card for everyone; its ${reviewData.annualFee} annual fee demands that you actively engage with its benefits to make the math work in your favor. Many wonder if they can truly maximize the credits; success lies in aligning your existing business spending with categories like Dell, Adobe, Indeed, and your chosen airline, and diligently enrolling where needed.</p>
                  <p>So, who should take the plunge? If your U.S. business involves frequent travel, if you value and will use benefits like extensive lounge access, hotel elite status, and Fine Hotels + Resorts®, and if your company has significant expenditures that can leverage the 5X and 1.5X earning rates, the Business Platinum can be a remarkably rewarding investment. For those willing to treat it not just as a payment card but as a suite of strategic tools, the value extracted can far surpass its cost. While it functions primarily as a charge card (with Pay Over Time for flexibility), its strength isn't in carrying long-term debt but in maximizing rewards and travel comfort.</p>
                  <p>If this sounds like your business, {reviewData.cardShortName} could indeed be your next power move, transforming routine expenses into a more luxurious and rewarding journey.</p>
                  <p><em>(As a final step for your readers, always ensure they consult the <a href={reviewData.officialOverviewLink} target="_blank" rel="noopener noreferrer sponsored">official American Express website</a> for the most current terms, conditions, and offer details before applying.)</em></p>
                </section>

                <section id="section-user-testimonials" className={styles.reviewSection}>
                    <h2>21. User Testimonials</h2>
                    <div className={styles.testimonialContainer}>
                        <blockquote className={styles.testimonialQuote}>
                            <p>"For frequent flyers, the Business Platinum’s lounge access, especially Centurion Lounges, is invaluable. It saves money on airport food and provides a productive oasis. Paired with Fine Hotels + Resorts benefits like upgrades and credits, the card easily justifies its fee through enhanced travel experiences alone."</p>
                            <footer>– Frequent Traveler (forum sentiment, 2024/2025)</footer>
                        </blockquote>
                        <blockquote className={styles.testimonialQuote}>
                            <p>"Think of it as a 'coupon book' that needs active management. By setting reminders and strategically using the Dell, airline, and wireless credits, a significant portion of the annual fee can be offset. It takes effort, but for organized users, the savings are substantial."</p>
                            <footer>– Organized Business Owner (card benefit discussions, 2024/2025)</footer>
                        </blockquote>
                        <blockquote className={styles.testimonialQuote}>
                            <p>"The 35% points rebate for business class flights booked via Amex Travel, plus 5X points earning on those bookings, is a standout. This combination makes premium travel more accessible and helps rewards accumulate quickly for business trips."</p>
                            <footer>– Rewards-Savvy User (2024/2025)</footer>
                        </blockquote>
                         <blockquote className={styles.testimonialQuote}>
                            <p>"Even if you don't travel weekly, the card can still be worth it. Key international trips benefit from lounge access and Global Entry. Credits for Dell, combined with hotel elite status perks, add tangible value that helps balance out the annual fee."</p>
                            <footer>– Small Business Owner (moderate travel, 2024)</footer>
                        </blockquote>
                         <blockquote className={styles.testimonialQuote}>
                            <p>"While benefit-rich, some credits feel too specific for my business. Plus, popular perks like Centurion Lounges can get very crowded, diminishing their value. It's a constant evaluation whether the effort to maximize and the actual experience justify the high fee."</p>
                            <footer>– Balanced Perspective (user forums, 2024/2025)</footer>
                        </blockquote>
                    </div>
                </section>

                <section id="section-faqs-jump" className={`${styles.reviewSection} ${styles.faqSection}`}>
                  <h2>22. Top 10 FAQs Summarized</h2>
                  <div className={styles.faqContainer}>
                      {structuredDataOptimized['@graph'].find(item => item['@type'] === 'FAQPage').mainEntity.map((faq, index) => (
                          <details key={index} className={styles.faqItem} name={`faq-${index + 1}`}>
                              <summary className={styles.faqQuestion}>{`${index + 1}. ${faq.name}`}</summary>
                              <div className={styles.faqAnswer}>
                                <p dangerouslySetInnerHTML={{ __html:
                                  faq.acceptedAnswer.text
                                    .replace("American Express online account", `<a href="${reviewData.officialBenefitsLink}" target="_blank" rel="noopener noreferrer sponsored">American Express online account</a>`)
                                    .replace("Amex Travel", `<a href="${reviewData.officialAmexTravelLink}" target="_blank" rel="noopener noreferrer sponsored">Amex Travel</a>`)
                                    .replace("[Check Amex for full terms]", `(<a href="${reviewData.ratesFeesLink}" target="_blank" rel="noopener noreferrer sponsored">check Amex for full terms</a>)`)
                                    .replace("[Refer to Amex MR terms]", `(<a href="${reviewData.officialMembershipRewardsLink}" target="_blank" rel="noopener noreferrer sponsored">refer to Amex MR terms</a>)`)
                                }} />
                              </div>
                          </details>
                      ))}
                  </div>
                </section>


                <section id="section-eat" className={`${styles.reviewSection} ${styles.eatSection}`}>
                    <h2 dangerouslySetInnerHTML={{ __html: `Our Commitment to E-A-T: Expertise, Authority &amp; Trustworthiness`}}></h2>
                    <p>At <strong>{siteName}</strong>, we are committed to providing content that exemplifies Expertise, Authoritativeness, and Trustworthiness (E-A-T). This review of <strong>{reviewData.cardName}</strong> has been meticulously researched and crafted. We've analyzed the card's features, benefits, rewards structure, and fees, referencing official issuer documentation from American Express and considering real-world user experiences and data points from the business finance community. Our goal is to present a balanced, comprehensive, and reliable guide to help you make an informed decision. All information is current as of <strong>{new Date(updateDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</strong>, but we always recommend verifying details directly with the issuer as terms can change.</p>
                </section>

              </article>
            </div>
          </div>
          <aside className={styles.sidebarArea}>
                <TableOfContents sections={tocSections} />
                {/* USER ACTION: You can add other sidebar elements here, like CTAs or related articles */}
          </aside>
        </div>
      </main>
        <div className={styles.stickyFooterContainer}>
            <div className={styles.stickyFooterContent}>
                <Image src={reviewData.imageUrl} alt={`${reviewData.cardName} small image`} width={60} height={38} className={styles.stickyFooterCardImage} /> {/* /* USER ACTION: Ensure small image is suitable */ }
                <div className={styles.stickyFooterText}>
                  <span className={styles.stickyFooterCardName}>{reviewData.cardShortName}</span>
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

export default AmericanExpressBusinessPlatinumCardReviewPage;