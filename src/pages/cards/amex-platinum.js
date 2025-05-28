/* ------------------------------------------------------------------
    File:  pages/reviews/american-express-platinum-card-review.js
    Route: https://www.yourwebsite.com/reviews/american-express-platinum-card-review
------------------------------------------------------------------- */

import React, { useState, useEffect, useCallback, useRef } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import styles from '../../styles/ReviewPage.module.css'; // Assuming same CSS module

import TableOfContents from '../../components/TableOfContents'; // Assuming same TOC component
// UPDATE ICON PATHS AS NEEDED - these are from your Gold example
import IconGift from '../../components/icons/icon-gift.svg';
import IconStar from '../../components/icons/icon-star.svg';
import IconCheck from '../../components/icons/icon-Credit Card.svg'; // Represents fee or card feature
import IconPlus from '../../components/icons/icon-target.svg'; // Represents 'Best For' or 'Key Benefit'
import IconPlane from '../../components/icons/icon-plane.svg';
import IconDollar from '../../components/icons/icon-dollar.svg'; // Represents credits
import IconX from '../../components/icons/icon-Star + Arrow Up.svg'; // Example icon

const RatingTooltip = dynamic(() => import('../../components/RatingTooltip'), { ssr: false, loading: () => null });

/* ──────────────────────────────
    CONSTANTS & STATIC DATA
    ────────────────────────────── */
const siteName = 'Travelcardinsider'; // /* UPDATE THIS */ with your site name
const siteUrl = 'https://www.travelcardinsider.com'; // /* UPDATE THIS */ with your actual site URL
const pagePath = '/reviews/american-express-platinum-card-review'; // Path for this specific review
const pageUrlFull = `${siteUrl}${pagePath}`;
const publishDate = '2025-05-28'; // /* UPDATE THIS */ Current date or actual publish date
const updateDate = '2025-05-28'; // /* UPDATE THIS */ Current date or actual update date

const reviewDataNew = {
  cardName        : 'The Platinum Card® from American Express',
  title           : 'The American Express Platinum Card®: Comprehensive U.S. Traveler Review (2025)', // SEO Optimized Title
  description     : 'In-depth 2025 review of The Platinum Card® from American Express. Explore luxury travel perks, $1500+ in credits (Airline, Hotel, Uber, CLEAR & more), lounge access, and the $695 fee. Ideal for U.S. frequent flyers.', // Meta Description
  keywords        : 'American Express Platinum Card review, Amex Platinum, Amex Platinum benefits, Amex travel credits, Centurion Lounge, FHR, Membership Rewards, Amex Platinum 2025', // Keywords
  author: { // /* UPDATE ALL AUTHOR DETAILS AS NEEDED */ - Copied from Gold, update for Platinum context if different
      name: 'Dilan Madushanka',
      title: 'Founder & Lead Editor',
      imageUrl: '/WhatsApp Image 2025-05-12 at 4.09.58 PM.jpeg', // /* UPDATE THIS */
      imageWidth: 40,
      imageHeight: 40,
      tooltipImageUrl: '/WhatsApp Image 2025-05-12 at 4.09.58 PM.jpeg', // /* UPDATE THIS */
      tooltipImageWidth: 60,
      tooltipImageHeight: 60,
      expertise: [
          'Premium Travel Rewards Cards',
          'Airline & Hotel Loyalty Programs',
          'Luxury Travel Benefits',
          'Credit Card Statement Credits Optimization',
          'American Express Platinum & Centurion Cards'
      ],
      bioSnippet: 'Dilan Madushanka is the founder and lead editor of Travelcardinsider, specializing in demystifying premium credit cards like The Platinum Card® to unlock maximum travel and lifestyle value.', // /* UPDATE THIS */
      fullBioLink: '/author/dilan-madushanka', // /* UPDATE THIS */
      fullBio: `Dilan Madushanka is the founder and lead editor of Travelcardinsider... [MORE BIO DETAILS TO BE ADDED BY USER]`, // /* UPDATE THIS */
      publishedStats: 'X+ in-depth premium card reviews published', // /* UPDATE THIS */
      testedStats: 'Over Y+ credit card benefits across major luxury brands', // /* UPDATE THIS */
      socialLinks: { // /* UPDATE THIS */
          linkedin: 'https://www.linkedin.com/in/dilan-madushanka-b65293365',
          twitter: 'https://x.com/team_dilan',
          email: 'team@travelcardinsider.com'
      }
  },
  siteName: siteName,
  imageUrl        : '/NUS000000237_480x304_straight_withname.avif', // /* UPDATE THIS */ Placeholder path for Amex Platinum card image
  imageWidth      : 1290, // /* UPDATE THIS */ if image dimensions differ
  imageHeight     : 812,  // /* UPDATE THIS */ if image dimensions differ
  ratingValue     : 9.4,  // /* UPDATE THIS */ Example rating (out of 10)
  ratingCount     : 310,  // /* UPDATE THIS */ Example review count
  reviewBody      : 'Our editors evaluate The Platinum Card® from American Express based on its extensive suite of luxury travel benefits (Global Lounge Collection, Fine Hotels + Resorts), comprehensive statement credits (Airline, Hotel, Uber, Digital Ent., Walmart+, Saks, CLEAR), Membership Rewards® earning (5X on flights & prepaid hotels), travel & purchase protections, the $695 annual fee, and overall value for U.S.-based frequent luxury travelers.',
  aprRange        : 'See Pay Over Time APR. For the Pay Over Time feature, APRs such as 21.24%-29.24% variable have been noted (subject to change). Refer to official rates.', // From your text
  annualFee       : 695, // From your text
  applyLink       : 'https://www.americanexpress.com/us/credit-cards/card/platinum/', // /* UPDATE THIS with your affiliate link if available, else official */
  ratesLink       : 'https://www.americanexpress.com/us/credit-cards/card-application/apply/prospect/terms/platinum-card/25330-10-0#FeeTable', // Users click "Rates and Fees" on this page
  officialOverviewLink: 'https://www.americanexpress.com/us/credit-cards/card/platinum/',
  officialWelcomeOfferLink: 'https://www.americanexpress.com/us/credit-cards/card/platinum/', // Welcome offer is on main page
  officialMembershipRewardsLink: 'https://www.americanexpress.com/en-us/benefits/rewards/membership-rewards/',
  officialAirlineFeeCreditLink: 'https://global.americanexpress.com/card-benefits/detail/airline-fee-credit/platinum',
  officialClearWebsiteLink: 'https://www.clearme.com/',
  officialGlobalEntryTSALink: 'https://ttp.dhs.gov/',
  officialTravelProtectionsLink: 'https://www.americanexpress.com/us/credit-cards/features-benefits/policies/trip-cancellation-terms.html', // Leads to Guide to Benefits
  officialGeneralRatesFeesLink: 'https://www.americanexpress.com/us/credit-cards/card/platinum/', // Main page, find "Rates & Fees"
  sku             : 'AMEX-PLAT-TCI-2025', // /* UPDATE THIS */ Example SKU
  mpn             : 'AMEXPLATINUM', // /* UPDATE THIS */ Example MPN
  h1Content       : "The American Express Platinum Card®: Ultimate Review for U.S. Luxury Travelers (2025)", // Derived from your text
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
      brand          : { '@type': 'Brand', name: 'American Express' },
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
            description          : `Pay Over Time APR: ${reviewDataNew.aprRange}. Foreign Transaction Fee: None. See official ${reviewDataNew.cardName} Rates & Fees on the issuer's website.`,
          },
        ],
        seller: { '@type': 'Organization', name: 'American Express' },
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
        { '@type': 'ListItem', position: 2, name: 'Credit Card Reviews', item: `${siteUrl}/reviews` }, // /* UPDATE THIS */ if review category path is different
        { '@type': 'ListItem', position: 3, name: `${reviewDataNew.cardName} Review`, item: pageUrlFull },
      ],
    },
    { // Populated from Section 20 of your text
      '@type'    : 'FAQPage',
      '@id'      : `${pageUrlFull}#faqs`,
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How do I select my airline for the $200 airline fee credit?',
          acceptedAnswer: { '@type': 'Answer', text: "You must select one qualifying U.S. airline annually through your American Express online account. Changes to your selected airline mid-year are generally not allowed. This credit is for incidental fees like baggage, seat selection, not airfare itself." }
        },
        {
          '@type': 'Question',
          name: 'Does the monthly Uber Cash roll over if unused?',
          acceptedAnswer: { '@type': 'Answer', text: "No, the Uber Cash provided (typically $15 per month, with a $35 bonus in December for U.S. use) expires at the end of each month if not used. It does not roll over." }
        },
        {
          '@type': 'Question',
          name: 'What is the guest policy for Centurion Lounges?',
          acceptedAnswer: { '@type': 'Answer', text: "U.S. Platinum Card® Members may bring up to two guests into The Centurion® Lounge for a fee (e.g., $50 per adult, $30 per child aged 2-17, subject to change). This fee may be waived if you meet a significant annual spending threshold on the card (e.g., $75,000 in prior calendar year purchases)." }
        },
        {
          '@type': 'Question',
          name: 'Do all Platinum Card benefits require enrollment?',
          acceptedAnswer: { '@type': 'Answer', text: "Many benefits require enrollment. This includes the airline fee credit, digital entertainment credit, Saks Fifth Avenue credit, Priority Pass™ Select membership, Hilton Honors Gold status, Marriott Bonvoy Gold Elite status, and Amex Offers. Always check your American Express account for enrollment requirements." }
        },
        {
          '@type': 'Question',
          name: 'How does the $200 Hotel Credit work?',
          acceptedAnswer: { '@type': 'Answer', text: "You receive up to $200 back in statement credits each year on prepaid Fine Hotels + Resorts® (FHR) or The Hotel Collection (THC) bookings made through American Express Travel. The Hotel Collection bookings require a minimum two-night stay." }
        },
        {
          '@type': 'Question',
          name: 'What are the 5X Membership Rewards® points categories?',
          acceptedAnswer: { '@type': 'Answer', text: "You earn 5X Membership Rewards® points on flights booked directly with airlines or through American Express Travel (on up to $500,000 in purchases per calendar year, then 1X), and 5X points on prepaid hotels booked on AmexTravel.com. All other eligible purchases earn 1X point." }
        },
        {
          '@type': 'Question',
          name: 'Is the Platinum Card a charge card or a credit card?',
          acceptedAnswer: { '@type': 'Answer', text: "The Platinum Card® is traditionally a charge card, meaning the balance is typically due in full each month. However, it also includes a 'Pay Over Time' feature, allowing Card Members to carry a balance with interest on eligible charges." }
        },
        {
          '@type': 'Question',
          name: 'What is the best way to redeem Membership Rewards® points?',
          acceptedAnswer: { '@type': 'Answer', text: "The highest potential value for Membership Rewards® points is often achieved by transferring them to Amex's airline and hotel partners for premium travel redemptions. Booking flights via AmexTravel.com using 'Pay with Points' can also offer good value. Other redemptions like statement credits or merchandise usually yield lower value." }
        },
        {
            '@type': 'Question',
            name: 'How does the Cell Phone Protection benefit work?',
            acceptedAnswer: { '@type': 'Answer', text: "If you pay your monthly wireless bill with your eligible Platinum Card®, you can be reimbursed for the repair or replacement of your damaged or stolen cell phone. Coverage is typically up to $800 per claim, with a $50 deductible per claim, and a maximum of two approved claims per 12-month period. Terms and exclusions apply." }
        },
        {
            '@type': 'Question',
            name: 'Can the $695 annual fee for the Platinum Card be waived?',
            acceptedAnswer: { '@type': 'Answer', text: "Generally, the annual fee is not waived. However, active-duty U.S. military personnel may be eligible for fee waivers under the Servicemembers Civil Relief Act (SCRA). Certain co-branded versions of the card (e.g., through Morgan Stanley or Charles Schwab) may offer ways to offset the fee based on other financial relationships with those institutions." }
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
      ],
    },
  ],
};

const ratingCriteriaOriginal = [ // /* UPDATE AS NEEDED */ Tailored for Amex Platinum
    'Value & Utilization of Annual Travel Credits (Airline, Hotel, Uber)',
    'Value & Utilization of Lifestyle Credits (Digital Ent., Walmart+, Saks)',
    'Airport Lounge Access Quality & Network (Global Lounge Collection®, Centurion®)',
    'Fine Hotels + Resorts® (FHR) & The Hotel Collection Benefits Value',
    'Membership Rewards® Earning Rate (5X on Flights/Prepaid Hotels)',
    'Welcome Offer Attractiveness & Terms',
    'Comprehensive Travel & Purchase Protections (including Cell Phone Protection)',
    'Value of Elite Hotel Status (Hilton Honors Gold, Marriott Bonvoy Gold)',
    'Annual Fee ($695) vs. Overall Premium Benefits Package',
    'Ease of Benefit Use & Management (Enrollment, Specific Terms)',
    'Quality of Premium Services (Concierge, Premium Global Assist®)',
];

const tocSections = [ // Generated from your Platinum review structure
    { id: 'section-intro', title: 'Introduction: The Amex Platinum Experience' },
    { id: 'section-part1-1', title: '1. More Than Just Metal' },
    { id: 'section-part1-2', title: '2. Quick Look: Card Snapshot & Who It’s Best For' },
    { id: 'section-part2-3', title: '3. Welcome Offer: Your New Card Member Bonus' },
    { id: 'section-part2-4', title: '4. Earning Membership Rewards®: Points Breakdown' },
    { id: 'section-part3-5', title: '5. Travel Credits: Airline, Hotel & Uber Deep Dive' },
    { id: 'section-part3-6', title: '6. Lifestyle Credits: Digital, Walmart+, Saks' },
    { id: 'section-part3-7', title: '7. Airport Expedited: CLEAR Plus & Global Entry/TSA' },
    { id: 'section-part3-8', title: '8. Global Lounge Collection®: Airport Sanctuaries' },
    { id: 'section-part3-9', title: '9. Luxury Stays: FHR® & Hotel Collection Perks' },
    { id: 'section-part3-10', title: '10. Instant Hotel Elite Status: Hilton & Marriott' },
    { id: 'section-part3-11', title: '11. Beyond Credits: Global Dining & Amex Offers' },
    { id: 'section-part4-12', title: '12. Travel Insurance Suite' },
    { id: 'section-part4-13', title: '13. Purchase, Warranty & Cell Phone Protections' },
    { id: 'section-part4-14', title: '14. Platinum Concierge & Premium Global Assist®' },
    { id: 'section-part5-15', title: '15. Understanding Costs: Fees & APRs' },
    { id: 'section-part6-16', title: '16. Value Equation: Real-World Calculation' },
    { id: 'section-part6-17', title: '17. Is The Platinum For You? User Profiling' },
    { id: 'section-part6-18', title: '18. Platinum vs. The Pack: Competitor Comparison' },
    { id: 'section-part7-19', title: '19. User Testimonials: From the Source' },
    // FAQ section is rendered from structured data, not a separate ToC item for main flow
    { id: 'section-part7-21', title: '21. The Final Take: Your Golden Ticket?' },
    { id: 'section-faqs-jump', title: 'Card-Specific FAQs' }, // Added jump link for visible FAQs
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
function AmericanExpressPlatinumCardReviewPage() {
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


  const summaryBoxData = { // Derived from your Platinum review text (Section 2 primarily)
    welcomeOffer: "Typically: Earn 80,000 Membership Rewards® points after $8,000 spend in 6 months. Offers vary.",
    annualFee: `$${reviewDataNew.annualFee}`,
    topEarning: "5X on flights (direct/Amex Travel, up to $500k/yr); 5X on prepaid hotels (AmexTravel.com).",
    keyCredits: "Up to $200 Airline Fee, $200 Hotel, $200 Uber Cash annually. Plus credits for CLEAR®, Digital Entertainment, Walmart+, Saks. (Enrollment required for some).",
    travelPerk: "Global Lounge Collection® (Centurion®, Priority Pass™ Select, etc.), FHR Benefits, Elite Hotel Status (Hilton, Marriott), No Foreign Tx Fees.",
    bestFor: "Frequent U.S.-based luxury travelers & perks maximizers leveraging premium credits and benefits."
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
        <meta property="article:publisher" content={`https://www.facebook.com/YourTravelCardInsiderFacebookPage`} />  {/* /* UPDATE THIS */ }
        <meta property="article:section"       content="Credit Card Reviews" />
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
                                    src={reviewDataNew.author.tooltipImageUrl} // /* UPDATE THIS */
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
                <p className={styles.heroSubtitle}> {/* Intro text for Amex Platinum Review */}
                  For the U.S. traveler seeking unparalleled luxury, extensive benefits, and a statement of prestige, The Platinum Card® from American Express has long been a benchmark. At TravelCardInsider, we dive deep into its 2025 offerings: from the coveted Global Lounge Collection® and Fine Hotels + Resorts® perks to over $1,500 in potential statement credits. But does its hefty $695 annual fee translate to real-world value for you? Let's unravel the Amex Platinum experience.
                </p>
                <div className={styles.heroCtaContainer}>
                  <div>
                    <a
                      href={reviewDataNew.applyLink} // /* UPDATE THIS with your affiliate link */
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
                  <Link href="#section-part1-2" legacyBehavior> {/* Link to Card Snapshot */}
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
                                <span className={styles.summaryLabel}>Travel Perks:</span>
                                <span className={styles.summaryValue}>{summaryBoxData.travelPerk}</span>
                            </div>
                            <div className={styles.summaryItem} data-full-width="true">
                                <span className={styles.summaryIcon}><IconPlus /></span>
                                <span className={styles.summaryLabel}>Best For:</span>
                                <span className={styles.summaryValue}>{summaryBoxData.bestFor}</span>
                            </div>
                        </div>
                        <div className={styles.summaryBoxActions}>
                            <a href={reviewDataNew.officialGeneralRatesFeesLink} className={styles.summaryRatesLink} target="_blank" rel="noopener noreferrer sponsored">
                                See Card Rates & Fees (Amex Site)
                            </a>
                             <a href='/rewards-calculator' className={`${styles.heroRewardsCalculator} ${styles.summaryButton}`} target="_blank" rel="noopener noreferrer">
                                Rewards Calculator
                            </a>
                        </div>
                    </div>
                </header>

                {/* CONTENT SECTIONS START HERE - Based on your Amex Platinum review text */}

                <section id="section-intro" className={styles.reviewSection}>
                  <h2>Introduction: The Amex Platinum Experience</h2>
                  {/* Content from Part 1 Introduction of your review text */}
                </section>

                <section id="section-part1-1" className={styles.reviewSection}>
                  <h2>1. The American Express Platinum Card®: More Than Just Metal</h2>
                  <p>The American Express Platinum Card® aims to be more than a payment tool; it positions itself as a key to a world of curated travel and lifestyle benefits. With a significant history, it’s long been associated with luxury and exclusivity, designed for consumers who value enhanced experiences and are willing to invest in a product promising to deliver them. This established "iconic status" can subtly influence service interactions, an intangible layer of value. However, unlocking its full potential requires active engagement with its diverse suite of benefits—a recurring theme in evaluating its fit for an individual.</p>
                  <p><strong>Example:</strong> Arriving at a Fine Hotels + Resorts® property, stated benefits are concrete, but Platinum status might also encourage staff to accommodate special requests, a subtle aspect of the card's aura.</p>
                  <p><strong>User Recommendation:</strong> Before applying, assess your travel and spending. Do they align with the Platinum Card’s offerings, or would it lead to uneconomical spending changes?</p>
                </section>
                
                {/* Optional: Illustrative Image */}
                <Image
                    src="/placeholder-luxury-travel-image.webp" // /* UPDATE THIS */ path and alt text
                    alt="Illustrative image of luxury travel or premium service"
                    width={800}
                    height={500}
                    className={styles.contentImage}
                    loading="lazy"
                />

                <section id="section-part1-2" className={styles.reviewSection}>
                    <h2>2. Quick Look: Card Snapshot &amp; Who It’s Best For</h2>
                    <p><strong>Best For:</strong> Frequent U.S.-based luxury travelers and dedicated perks maximizers who can consistently leverage its premium credits and benefits.</p>
                    <p><strong>Not Ideal For:</strong> Occasional or budget travelers, or those preferring straightforward rewards without managing multiple credits.</p>
                    <p>The Platinum Card® suits individuals whose spending and travel naturally align with its reward categories and credits. It’s about a lifestyle that benefits from its distinct offerings. A frequent flyer using major airlines and high-end hotels will find more value than one using low-cost carriers. The $695 annual fee (<a href={reviewDataNew.officialGeneralRatesFeesLink} target="_blank" rel="noopener noreferrer sponsored">see rates and fees</a>) necessitates proactive benefit use to avoid it becoming a net expense.</p>
                    
                    <DraggableTableWrapper>
                        <div className={styles.tableContainer}>
                            <table className={`${styles.statsTable} ${styles.highlightTable}`}>
                                <thead>
                                    <tr>
                                        <th>Feature</th>
                                        <th>Details</th>
                                        <th>Notes</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td data-label="Feature">Annual Fee</td>
                                        <td data-label="Details"><strong>$695</strong></td>
                                        <td data-label="Notes">Justifies careful consideration of your usage.</td>
                                    </tr>
                                    <tr>
                                        <td data-label="Feature">Welcome Offer</td>
                                        <td data-label="Details">Typically: Earn 80,000 Membership Rewards® points after $8,000 spend in 6 months.</td>
                                        <td data-label="Notes">Offers vary. <a href={reviewDataNew.officialWelcomeOfferLink} target="_blank" rel="noopener noreferrer sponsored">Check current</a>. Significant spend requirement.</td>
                                    </tr>
                                    <tr>
                                        <td data-label="Feature">Primary Rewards</td>
                                        <td data-label="Details">5X points on flights (direct/Amex Travel, up to $500k/year). 5X points on prepaid hotels (AmexTravel.com). 1X on other purchases.</td>
                                        <td data-label="Notes">Powerful but specific 5X categories. $500k flight cap is generous.</td>
                                    </tr>
                                    <tr>
                                        <td data-label="Feature">Key Travel Credits</td>
                                        <td data-label="Details">Up to $200 Airline Fee Credit. Up to $200 Hotel Credit. Up to $200 Uber Cash. (Enrollment required for some)</td>
                                        <td data-label="Notes">Core to offsetting the fee but have terms. Airline credit for incidentals (one airline). Hotel credit for FHR/THC via Amex Travel.</td>
                                    </tr>
                                    <tr>
                                        <td data-label="Feature">Airport Lounge Access</td>
                                        <td data-label="Details">American Express Global Lounge Collection® (Centurion®, Priority Pass™ Select, Delta Sky Club® etc. Enrollment for Priority Pass)</td>
                                        <td data-label="Notes">Flagship benefit. Quality varies. Guest access policies are more restrictive.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </DraggableTableWrapper>
                </section>

                <section id="section-part2-3" className={styles.reviewSection}>
                    <h2>3. Your Welcome Aboard: The Current New Card Member Offer</h2>
                    <p>New Platinum Card® holders often receive a welcome offer like 80,000 Membership Rewards® points after an $8,000 spend in six months. These points can be valuable, potentially covering flights or upgrades, especially when transferred to airline partners. (<a href={reviewDataNew.officialMembershipRewardsLink} target="_blank" rel="noopener noreferrer sponsored">Learn more about Membership Rewards®</a>).</p>
                    <blockquote className={styles.highlightQuote}>
                        Current Welcome Offer: Typically <strong>Earn 80,000 Membership Rewards® points after you spend $8,000</strong> on purchases on your new Card in your first 6 months of Card Membership. 
                        (<a href={reviewDataNew.officialWelcomeOfferLink} target="_blank" rel="noopener noreferrer sponsored">See official welcome offer details and terms</a>)
                    </blockquote>
                    <p>Be aware of Amex's "once per lifetime" rule for welcome offers: if you've had the card, you might be ineligible for the bonus again. The $8,000 spend requirement in six months orients the card towards higher spenders or those timing it with large purchases. This rule encourages careful application timing to maximize value.</p>
                    <p><strong>User Recommendation:</strong> Evaluate if you can meet the spending threshold organically. Avoid manufactured spend that negates point value.</p>
                </section>

                <section id="section-part2-4" className={styles.reviewSection}>
                    <h2>4. Earning Membership Rewards®: The Points Breakdown</h2>
                    <p>The Platinum Card® offers 5X Membership Rewards® points on flights booked directly with airlines or via Amex Travel (up to $500,000 yearly, then 1X), and 5X on prepaid hotels via AmexTravel.com. Other purchases earn 1X.</p>
                    <p>Membership Rewards® points are flexible, especially valuable when transferred to airline/hotel partners for premium travel. They can also book travel via AmexTravel.com, cover charges, or buy gift cards, though often at lower value. The 5X categories guide users to Amex Travel or direct airline bookings, which might mean forgoing better deals elsewhere—a trade-off between points and lowest price. The $500,000 flight cap suits high spenders. Understanding how Merchant Category Codes (MCCs) affect rewards is also useful, as Amex uses them to determine if a purchase qualifies for bonuses.</p>
                    <p><strong>Real-World Example:</strong> Sarah finds a flight on Airline X for $400, or $385 on a third-party site. Booking direct earns 2,000 MR points; the third-party site (not Amex Travel) earns 385 points but saves $15. She must weigh 1,615 extra points against $15.</p>
                </section>

                {/* Part 3 Sections */}
                <section id="section-part3-5" className={styles.reviewSection}>
                    <h2>5. Travel Credits Unveiled: Airline, Hotel & Uber Deep Dive</h2>
                    <p>The Platinum Card’s® value often lies in its statement credits and travel benefits, valued by Amex at over $1,500 annually. Maximizing these requires understanding terms and often, enrollment.</p>
                    <ul className={styles.featureList}>
                        <li><strong>Up to $200 Airline Fee Credit:</strong> For incidental fees (baggage, seat selection, in-flight purchases—not airfare) on one pre-selected qualifying airline annually. Changing airlines mid-year is restricted.
                            <br/><small><em>User Insight: Its restrictiveness is a common issue. Choose your airline carefully. (<a href={reviewDataNew.officialAirlineFeeCreditLink} target="_blank" rel="noopener noreferrer sponsored">See Airline Fee Credit Terms</a>)</em></small>
                        </li>
                        <li><strong>Up to $200 Hotel Credit:</strong> For prepaid Fine Hotels + Resorts® (FHR) or The Hotel Collection (THC) bookings via Amex Travel. THC requires a minimum two-night stay.
                            <br/><small><em>User Insight: Compare Amex Travel rates (post-credit) with other sites. Best used when FHR/THC offers overall best value.</em></small>
                        </li>
                        <li><strong>Up to $200 Uber Cash:</strong> $15 monthly ($35 in Dec.) for U.S. Uber rides/Eats. Expires monthly if unused.
                            <br/><small><em>User Insight: Automatic if card is linked to Uber. "Use-it-or-lose-it." Less valuable if you don't use Uber or are often outside the U.S.</em></small>
                        </li>
                    </ul>
                </section>

                <section id="section-part3-6" className={styles.reviewSection}>
                    <h2>6. Everyday & Lifestyle Credits: Digital Entertainment, Walmart+, Saks</h2>
                    <p>Enrollment typically required.</p>
                    <ul className={styles.featureList}>
                        <li><strong>Up to $240 Digital Entertainment Credit:</strong> Up to $20 monthly for direct purchases with partners like Disney+, Hulu, Peacock, NYT, WSJ (partners subject to change).
                            <br/><small><em>User Insight: Direct saving if you already subscribe. Otherwise, it might induce spending.</em></small>
                        </li>
                        <li><strong>Up to $155 Walmart+ Monthly Membership Credit:</strong> Covers monthly Walmart+ membership ($12.95+tax, excluding add-ons). Benefits: free shipping/delivery, Paramount+ Essential.
                            <br/><small><em>User Insight: Valuable for regular Walmart shoppers. Paramount+ adds value if used.</em></small>
                        </li>
                        <li><strong>Up to $100 Saks Credit:</strong> $50 for Jan-June, $50 for July-Dec at Saks/saks.com. No minimum purchase. Enrollment needed.
                            <br/><small><em>User Insight: Use it each period; it doesn’t roll over. Good for small gifts or offsetting larger purchases.</em></small>
                        </li>
                    </ul>
                    <p>Value depends on existing habits. If credits align with your spending, they're direct offsets. Otherwise, the "coupon book" effect might diminish their true value.</p>
                </section>

                <section id="section-part3-7" className={styles.reviewSection}>
                    <h2>7. Airport Expedited: CLEAR Plus & Global Entry/TSA PreCheck Credits</h2>
                    <ul className={styles.featureList}>
                        <li><strong>Up to $189 CLEAR® Plus Credit:</strong> Annual credit for CLEAR Plus membership (biometric ID verification).
                           <br/><small><em>User Insight: Check CLEAR availability at your airports. Works with TSA PreCheck. (<a href={reviewDataNew.officialClearWebsiteLink} target="_blank" rel="noopener noreferrer sponsored">Visit Official CLEAR Website</a>)</em></small>
                        </li>
                        <li><strong>Global Entry or TSA PreCheck® Credit:</strong> Covers application fee for Global Entry (approx. $100-$120/4 yrs) or TSA PreCheck® (approx. $78-$85/4.5 yrs). Global Entry includes PreCheck.
                            <br/><small><em>User Insight: Global Entry offers broader value. Credit is for the application; approval needed. (<a href={reviewDataNew.officialGlobalEntryTSALink} target="_blank" rel="noopener noreferrer sponsored">Official Global Entry/TSA PreCheck Info</a>)</em></small>
                        </li>
                    </ul>
                    <p>These are valuable for frequent travelers who’d pay anyway. Less so for infrequent travelers.</p>
                </section>

                <section id="section-part3-8" className={styles.reviewSection}>
                    <h2>8. The Acclaimed Global Lounge Collection®: Your Airport Sanctuaries</h2>
                    <p>Access to over 1,400 airport lounges worldwide, including:</p>
                    <ul className={styles.featureList}>
                        <li>The Centurion® Lounge: Amex's premium proprietary lounges.</li>
                        <li>Priority Pass™ Select: Wide network of third-party lounges (enrollment required; Amex version usually excludes restaurant credits).</li>
                        <li>Delta Sky Club®: Access when flying Delta (10 visits/year from Feb 2025, unless $75k annual spend met).</li>
                        <li>Escape Lounges - The Centurion Studio Partner, Plaza Premium Lounges, Select Lufthansa Lounges.</li>
                    </ul>
                    <p><strong>Access Policies & Considerations:</strong> Rules can be complex. Centurion access is usually within 3 hours of departure. Guest fees apply (e.g., $50/adult for Centurion) unless a high annual spend threshold is met. Value depends on lounge availability at your airports. Centurion Lounges can be crowded; Priority Pass quality varies.</p>
                    <p><strong>User Recommendation:</strong> Research lounges on your typical routes. Be aware of guest policies.</p>
                </section>

                <section id="section-part3-9" className={styles.reviewSection}>
                    <h2>9. Luxury Stays: Fine Hotels + Resorts® & The Hotel Collection Perks</h2>
                    <ul className={styles.featureList}>
                        <li><strong>Fine Hotels + Resorts® (FHR):</strong> Book via Amex Travel for benefits at 1,300+ luxury properties: daily breakfast for two, room upgrade (when available), $100 minimum unique property credit, guaranteed 4 p.m. late check-out, noon check-in (when available), Wi-Fi. The $200 hotel credit applies to prepaid FHR bookings.</li>
                        <li><strong>The Hotel Collection:</strong> 700+ upscale hotels. Book 2+ nights via Amex Travel for a $100 hotel credit and room upgrade (if available). The $200 hotel credit also applies.</li>
                    </ul>
                    <p><strong>User Insight:</strong> FHR often offers higher value, even on one-night stays. Compare Amex rates with others to ensure overall value.</p>
                </section>

                <section id="section-part3-10" className={styles.reviewSection}>
                    <h2>10. Instant Hotel Elite Status: Hilton Honors & Marriott Bonvoy Gold</h2>
                    <p>Complimentary Hilton Honors™ Gold & Marriott Bonvoy® Gold Elite status (enrollment required).</p>
                    <ul className={styles.featureList}>
                        <li><strong>Hilton Honors™ Gold:</strong> Space-available upgrades, bonus points, daily food/beverage credit (U.S.) or continental breakfast (outside U.S.).</li>
                        <li><strong>Marriott Bonvoy® Gold Elite:</strong> Space-available upgrades (to enhanced rooms), 2 p.m. late check-out (subject to availability), bonus points, welcome gift of points.</li>
                    </ul>
                    <p><strong>User Insight:</strong> Value depends on frequency of stays with these chains and if you'd achieve status otherwise. Good mid-tier perks, but top-tier benefits (suite upgrades, lounge access) are usually higher.</p>
                </section>

                <section id="section-part3-11" className={styles.reviewSection}>
                    <h2>11. Beyond Credits: Global Dining Access by Resy & Amex Offers</h2>
                    <ul className={styles.featureList}>
                        <li><strong>Global Dining Access by Resy:</strong> Add Platinum Card to Resy profile for potential exclusive reservations/experiences.
                            <br/><small><em>User Insight: Subjective value, best for foodies near participating venues.</em></small>
                        </li>
                        <li><strong>Amex Offers:</strong> Targeted discounts or bonus points with specific merchants (enrollment required before purchase).
                            <br/><small><em>User Insight: Can offer significant savings/points but require active monitoring. Opportunistic value.</em></small>
                        </li>
                    </ul>
                </section>

                {/* Part 4 Sections */}
                <section id="section-part4-12" className={styles.reviewSection}>
                    <h2>12. Travel Confidently: A Look at Amex Platinum’s Insurance Suite</h2>
                    <p>When eligible travel is charged to the card:</p>
                    <ul className={styles.featureList}>
                        <li><strong>Trip Cancellation and Interruption Insurance:</strong> Reimburses non-refundable expenses (up to limits like $10k/trip, $20k/year) for covered reasons.</li>
                        <li><strong>Trip Delay Insurance:</strong> If delayed 6+ hours for a covered reason, reimburses expenses (meals, lodging) up to $500/trip (max 2 claims/year).</li>
                        <li><strong>Baggage Insurance Plan:</strong> Covers lost, damaged, or stolen baggage on common carriers (limits apply).</li>
                        <li><strong>Car Rental Loss and Damage Insurance:</strong> Covers damage/theft of rental when declining CDW (secondary in U.S., primary elsewhere often; liability not included; exclusions apply).
                             <br/><small><em>User Insight: Secondary U.S. coverage is key. Check terms. (<a href={reviewDataNew.officialTravelProtectionsLink} target="_blank" rel="noopener noreferrer sponsored">See Amex Travel Protections Guide</a>)</em></small>
                        </li>
                    </ul>
                    <p>These insurances are invaluable when issues arise.</p>
                </section>

                <section id="section-part4-13" className={styles.reviewSection}>
                    <h2>13. Shop Securely: Purchase, Warranty, and Cell Phone Protections</h2>
                    <ul className={styles.featureList}>
                        <li><strong>Purchase Protection:</strong> Covers eligible new purchases against damage, theft, loss for 90 days (up to $10k/occurrence, $50k/year).</li>
                        <li><strong>Extended Warranty:</strong> Adds up to one year to U.S. manufacturer's warranties of 5 years or less.</li>
                        <li><strong>Return Protection:</strong> If a U.S. merchant won't take back an eligible new item in 90 days, Amex may refund up to $300/item ($1k/year).</li>
                        <li><strong>Cell Phone Protection:</strong> If you pay your monthly cell bill with the Platinum Card®, get reimbursed for repair/replacement if phone is damaged/stolen (up to $800/claim, $50 deductible, 2 claims/12 months).
                            <br/><small><em>User Insight: Can be very valuable. Paying cell bill with card is essential.</em></small>
                        </li>
                    </ul>
                    <p>Amex's purchase and cell phone protections are often highlighted as significant benefits.</p>
                </section>

                <section id="section-part4-14" className={styles.reviewSection}>
                    <h2>14. At Your Service: Platinum Card Concierge & Premium Global Assist®</h2>
                    <ul className={styles.featureList}>
                        <li><strong>Platinum Card® Concierge:</strong> Personalized assistance for dining, tickets, gifts.
                            <br/><small><em>User Insight: Helpful for time-consuming tasks or unique requests.</em></small>
                        </li>
                        <li><strong>Premium Global Assist® Hotline:</strong> 24/7 help (medical, legal, financial) when 100+ miles from home. Coordination is free; third-party costs apply (some emergency medical transport may be covered if coordinated by them).
                            <br/><small><em>User Insight: Invaluable safety net. Save the number before travel.</em></small>
                        </li>
                    </ul>
                    <p>These "soft" benefits provide intangible, but potentially immense, value.</p>
                </section>
                
                {/* Part 5 Section */}
                <section id="section-part5-15" className={styles.reviewSection}>
                    <h2>15. Understanding the Costs: Annual Fee, APRs, and Other Charges</h2>
                    <p>Understanding the cost structure is crucial. The Platinum Card® is a charge card (balance typically due monthly) but has "Pay Over Time," allowing carried balances with interest on eligible charges. Interest can negate rewards, so pay in full. Additional Platinum Cards cost $195 each; no-fee Companion Cards (Gold/Green with fewer benefits) are an option. (<a href={reviewDataNew.officialGeneralRatesFeesLink} target="_blank" rel="noopener noreferrer sponsored">Refer to Amex General Rates & Fees</a>).</p>
                     <DraggableTableWrapper>
                        <div className={styles.tableContainer}>
                            <table className={`${styles.statsTable} ${styles.ratesFeesTable}`}>
                                <thead>
                                    <tr>
                                        <th>Fee/Rate Category</th>
                                        <th>Details</th>
                                        <th>Notes</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr><td>Annual Fee</td><td>$695</td><td>Primary cost.</td></tr>
                                    <tr><td>Additional Platinum Card Fee</td><td>$195 per card</td><td>For sharing full perks.</td></tr>
                                    <tr><td>Companion Card Fee</td><td>$0 (typically Amex Gold/Green)</td><td>For authorized users needing fewer perks.</td></tr>
                                    <tr><td>APR for Pay Over Time</td><td>Variable, e.g., 21.24%-29.24% (subject to change)</td><td>Avoid by paying in full. Check Cardmember Agreement.</td></tr>
                                    <tr><td>APR for Cash Advances</td><td>Variable, e.g., 29.99% (subject to change)</td><td>Very expensive; fees also apply.</td></tr>
                                    <tr><td>Penalty APR</td><td>Up to 29.99% (variable) if payments are late/returned.</td><td>Increases interest costs significantly.</td></tr>
                                    <tr><td>Late/Returned Payment Fee</td><td>Up to $40 each.</td><td>Standard fees.</td></tr>
                                    <tr><td>Foreign Transaction Fee</td><td>None</td><td>Key benefit for international travel.</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </DraggableTableWrapper>
                    <p><small>Note: APRs are variable. Confirm specifics in Cardmember Agreement.</small></p>
                </section>

                {/* Part 6 Sections */}
                <section id="section-part6-16" className={styles.reviewSection}>
                    <h2>16. The Platinum Value Equation: A Real-World Calculation Example</h2>
                    <p>Consider "Alex," a frequent U.S. traveler: 6 domestic, 2 international flights; prefers Delta; 3-4 FHR stays/year; uses Uber weekly; subscribes to WSJ/Disney Bundle; shops at Saks; uses Walmart+; values lounges/CLEAR.</p>
                    <ul className={styles.featureList}>
                        <li>Annual Fee: -$695</li>
                        <li>Statement Credits Utilized Total: (Airline $200 + Hotel $200 + Uber $200 + Digital $240 + Walmart+ $155 + Saks $100 + CLEAR $189 + Global Entry (annualized) $30) = +$1,314</li>
                        <li>Net from Credits: $1,314 - $695 = +$619</li>
                        <li>Points Value (Example): (51,000 MR points earned * $0.015/point) = +$765</li>
                        <li>Intangible/Situational Value (Estimates):
                            <ul>
                                <li>Lounge Access (15 visits * $40): +$600</li>
                                <li>FHR Benefits (beyond $200 credit; breakfast, upgrades): +$670</li>
                                <li>Hotel Elite Status: +$100</li>
                                <li>Travel/Purchase Protection (one minor claim): +$200</li>
                            </ul>
                        </li>
                        <li><strong>Alex's Total Estimated Net Annual Value: $619 + $765 + $600 + $670 + $100 + $200 = $2,954</strong></li>
                    </ul>
                    <p>Alex's value is maximized through organic spending. Induced spending (buying unneeded items for credits) diminishes true value.</p>
                </section>

                <section id="section-part6-17" className={styles.reviewSection}>
                    <h2>17. Is the Amex Platinum For You? Detailed User Profiling</h2>
                    <div className={styles.profileCardContainer}>
                        <div className={styles.profileCard}>
                            <h4>Persona 1: The Frequent Luxury Voyager (Ideal User)</h4>
                            <p>Travels often (10+ trips, international), prefers premium cabins/hotels, values comfort/convenience, uses lounges/FHR.</p>
                            <p><strong>Fits because:</strong> Organically maximizes travel benefits (credits, FHR perks, lounges, points). $695 fee easily recouped.</p>
                        </div>
                        <div className={styles.profileCard}>
                            <h4>Persona 2: The Savvy Perks Maximizer (Optimizer)</h4>
                            <p>Organized, views card as a system to optimize, extracts maximum value from every credit/offer.</p>
                            <p><strong>Fits because:</strong> Meticulously uses all credits (Uber, digital, Saks, Walmart+), leverages Amex Offers. Focus is net positive financial outcome.</p>
                        </div>
                        <div className={styles.profileCard}>
                            <h4>Persona 3: The Occasional/Budget Traveler (Poor Fit)</h4>
                            <p>Travels infrequently (1-2 budget trips/year), doesn't use services covered by credits (Uber, Saks, specific subscriptions), finds tracking cumbersome.</p>
                            <p><strong>Fits because:</strong> $695 fee is a burden with limited offset. Credits/perks are irrelevant or hard to use. A lower-fee/no-fee card is better.</p>
                        </div>
                    </div>
                    <p>The key is lifestyle/spending alignment with benefits or a dedicated effort to maximize them.</p>
                </section>

                <section id="section-part6-18" className={styles.reviewSection}>
                    <h2>18. Platinum vs. The Pack: Competitor Card Comparison Table</h2>
                    <p>The Platinum Card® faces strong competition. Others may offer simpler travel credits or different reward structures. The "best" card depends on individual habits and preferences.</p>
                    <DraggableTableWrapper>
                        <div className={styles.tableContainer}>
                            <table className={`${styles.statsTable} ${styles.comparisonTable}`}>
                                <thead>
                                    <tr>
                                        <th>Feature</th>
                                        <th>The Platinum Card® from American Express</th>
                                        <th>Chase Sapphire Reserve®</th>
                                        <th>Capital One Venture X Rewards Credit Card</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td data-label="Feature">Annual Fee</td>
                                        <td data-label="Amex Platinum">$695</td>
                                        <td data-label="Chase Reserve">$550</td>
                                        <td data-label="Venture X">$395</td>
                                    </tr>
                                    <tr>
                                        <td data-label="Feature">Key Travel Credits</td>
                                        <td data-label="Amex Platinum">$200 Airline Incidental, $200 Hotel (FHR/THC), $200 Uber, $189 CLEAR, Global Entry/TSA PreCheck</td>
                                        <td data-label="Chase Reserve">$300 Annual Travel Credit (flexible), Global Entry/TSA PreCheck/NEXUS</td>
                                        <td data-label="Venture X">$300 Annual Travel Credit (Capital One Travel), 10k Anniversary Miles, Global Entry/TSA PreCheck</td>
                                    </tr>
                                    <tr>
                                        <td data-label="Feature">Lounge Access</td>
                                        <td data-label="Amex Platinum">Amex Global Lounge Collection®</td>
                                        <td data-label="Chase Reserve">Priority Pass Select (incl. some restaurant credits)</td>
                                        <td data-label="Venture X">Priority Pass Select, Capital One Lounges, Plaza Premium</td>
                                    </tr>
                                    <tr>
                                        <td data-label="Feature">Primary Rewards (Travel)</td>
                                        <td data-label="Amex Platinum">5X flights (direct/Amex Travel), 5X prepaid hotels (Amex Travel)</td>
                                        <td data-label="Chase Reserve">5X flights/10X hotels/cars (Chase Travel), 3X other travel</td>
                                        <td data-label="Venture X">5X flights/10X hotels/cars (Capital One Travel), 2X other travel</td>
                                    </tr>
                                    <tr>
                                        <td data-label="Feature">Unique Perks</td>
                                        <td data-label="Amex Platinum">FHR benefits, Centurion Lounges, Hilton/Marriott Gold</td>
                                        <td data-label="Chase Reserve">Points 50% more value (Chase Travel), DoorDash benefits</td>
                                        <td data-label="Venture X">Simple 2X rewards, lower effective fee, cell phone protection</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </DraggableTableWrapper>
                    <p><small>Note: Offers/benefits subject to change. Check issuer terms.</small></p>
                </section>

                {/* Part 7 Sections */}
                <section id="section-part7-19" className={styles.reviewSection}>
                    <h2>19. From the Source: Real User Testimonials</h2>
                    <div className={styles.testimonialContainer}>
                        <blockquote className={styles.testimonialQuote}>
                            <p>"Flight cancelled, Amex rebooked on another airline quickly. Worth 10 years of annual fee."</p>
                            <footer>– Reddit - justaguyfixinteeth (Positive - Customer Support)</footer>
                            <p className={styles.testimonialHighlight}><em>Insight: Shows potential of Amex travel assistance.</em></p>
                        </blockquote>
                        <blockquote className={styles.testimonialQuote}>
                            <p>"Used FHR for concert trip, received credit, birthday gift, and massive room upgrade. Kind of cool."</p>
                            <footer>– Reddit - Anonymous (Positive - FHR Benefit)</footer>
                            <p className={styles.testimonialHighlight}><em>Insight: Highlights aspirational value of FHR (though huge upgrades aren't guaranteed).</em></p>
                        </blockquote>
                        <blockquote className={styles.testimonialQuote}>
                            <p>"Issues with large payment posting, refund delay, and subsequent account freeze/financial review. Never have I had so much aggravation."</p>
                            <footer>– ConsumerAffairs - Bill from Memphis, TN (Negative - Customer Service)</footer>
                            <p className={styles.testimonialHighlight}><em>Insight: Even premium service can have frustrations, especially with large transactions/security protocols.</em></p>
                        </blockquote>
                         <blockquote className={styles.testimonialQuote}>
                            <p>"Hated preferred airline rule, switched to competitor for simpler credit."</p>
                            <footer>– TravelUpdate - "BD" (Criticism - Airline Fee Credit Flexibility)</footer>
                            <p className={styles.testimonialHighlight}><em>Insight: Reflects common desire for more flexible travel credits.</em></p>
                        </blockquote>
                         <blockquote className={styles.testimonialQuote}>
                            <p>"Loves card for lounge access/perks if maximized, but notes 'coupon book' nature and U.S.-only Uber Cash as annoying for international travel."</p>
                            <footer>– Nomadic Matt (Balanced Positive - Frequent Traveler/Reviewer)</footer>
                            <p className={styles.testimonialHighlight}><em>Insight: Max value requires effort; some restrictions are drawbacks.</em></p>
                        </blockquote>
                    </div>
                </section>
                
                <section id="section-faqs-jump" className={`${styles.reviewSection} ${styles.faqSection}`}>
                  <h2>20. Your Platinum Questions Answered: Card-Specific FAQs</h2>
                  <div className={styles.faqContainer}>
                      {structuredDataOptimized['@graph'].find(item => item['@type'] === 'FAQPage').mainEntity.map((faq, index) => (
                          <details key={index} className={styles.faqItem} name={`faq-${index + 1}`}>
                              <summary className={styles.faqQuestion}>{`${index + 1}. ${faq.name}`}</summary>
                              <div className={styles.faqAnswer}>
                                <p dangerouslySetInnerHTML={{ __html:
                                  faq.acceptedAnswer.text
                                    .replace("American Express online account", `<a href="${reviewDataNew.officialOverviewLink}" target="_blank" rel="noopener noreferrer sponsored">American Express online account</a>`)
                                    .replace("American Express Travel", `<a href="https://www.amextravel.com" target="_blank" rel="noopener noreferrer sponsored">American Express Travel</a>`) // /* UPDATE THIS */ if Amex Travel has a more specific link
                                }} />
                              </div>
                          </details>
                      ))}
                  </div>
                </section>

                <section id="section-part7-21" className={styles.reviewSection}>
                  <h2>21. The Final Take: Is the Amex Platinum Your Golden Ticket to Premium Travel?</h2>
                  <p>The American Express Platinum Card®, with its $695 annual fee, is a significant investment, not for the casual cardholder. For the right U.S. traveler—frequent, luxury-oriented, and adept at navigating benefits—it can indeed be a "golden ticket," justifying its cost.</p>
                  <p>It excels for those who regularly use its core benefits: extensive Global Lounge Collection® (especially Centurion Lounges), valuable Fine Hotels + Resorts® program (credits, breakfast, upgrades, late check-out), and the suite of statement credits (airline, Uber, digital, Walmart+, Saks, CLEAR). These can offset much of the fee if spending aligns organically. Robust travel and purchase protections (including cell phone coverage) add significant peace of mind.</p>
                  <p>However, it's not for everyone. Value plummets for infrequent/budget travelers or those who don't use its specific credited services. The "coupon book" nature requires active management, which can feel like a chore or induce unwanted spending. The airline fee credit is less flexible than some competitors'.</p>
                  <p>The decision hinges on self-assessment: your travel style, ability to maximize credits naturally, and value placed on premium perks versus simplicity. If your habits align and you'll actively engage, the Amex Platinum can deliver exceptional value and elevate travel. Otherwise, a lower-fee or simpler rewards card might be wiser.</p>
                  <p>Given the evolving card landscape, even current holders should periodically re-evaluate its worth against their needs and competitor offerings. For more details or to apply, visit the <a href={reviewDataNew.officialOverviewLink} target="_blank" rel="noopener noreferrer sponsored">official American Express Platinum Card page</a>.</p>
                </section>


                <section id="section-eat" className={`${styles.reviewSection} ${styles.eatSection}`}>
                    <h2 dangerouslySetInnerHTML={{ __html: `Our Commitment to E-A-T: Expertise, Authority &amp; Trustworthiness`}}></h2>
                    <p>At <strong>{siteName}</strong>, we are committed to providing content that exemplifies Expertise, Authoritativeness, and Trustworthiness (E-A-T). This review of the <strong>{reviewDataNew.cardName}</strong> has been meticulously researched and crafted. We've analyzed the card's features, benefits, rewards structure, and fees, referencing official issuer documentation from American Express and considering real-world user experiences and data points from the travel rewards community. Our goal is to present a balanced, comprehensive, and reliable guide to help you make an informed decision. All information is current as of <strong>{new Date(updateDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</strong>, but we always recommend verifying details directly with the issuer as terms can change.</p>
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
                        href={reviewDataNew.officialGeneralRatesFeesLink} 
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

export default AmericanExpressPlatinumCardReviewPage;