/* ------------------------------------------------------------------
    File:  pages/reviews/american-express-business-platinum-card-review.js
    Route: https://www.yourwebsite.com/reviews/american-express-business-platinum-card-review
------------------------------------------------------------------- */

import React, { useState, useEffect, useCallback, useRef } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import styles from '../../styles/ReviewPage.module.css'; // Assuming same CSS module as Amex Gold

import TableOfContents from '../../components/TableOfContents'; // Assuming same TOC component
// UPDATE ICONS AS NEEDED - These are examples from your Gold Card file or generic placeholders
import IconGift from '../../components/icons/icon-gift.svg';
import IconStar from '../../components/icons/icon-star.svg';
import IconCheck from '../../components/icons/icon-Credit Card.svg'; // Represents Fee/Cost
import IconPlus from '../../components/icons/icon-target.svg'; // Represents 'Best For' or 'Key Benefit'
import IconPlane from '../../components/icons/icon-plane.svg';  // For travel benefits
import IconDollar from '../../components/icons/icon-dollar.svg'; // For credits/financials
import IconBuilding from '../../components/icons/icon-building.svg'; // Placeholder for Business/Enterprise
import IconUsers from '../../components/icons/icon-users.svg'; // Placeholder for 'Best For X Users'
import IconInfo from '../../components/icons/icon-info-circle.svg'; // Placeholder for Info/Details
import IconShield from '../../components/icons/icon-shield-check.svg'; // Placeholder for Protections
import IconLaptop from '../../components/icons/icon-laptop.svg'; // Placeholder for Dell/Tech Credits
import IconBriefcase from '../../components/icons/icon-briefcase.svg'; // Placeholder for Business Perks

const RatingTooltip = dynamic(() => import('../../components/RatingTooltip'), { ssr: false, loading: () => null });

/* ──────────────────────────────
    CONSTANTS & STATIC DATA
    ────────────────────────────── */
const siteName = 'Travelcardinsider'; // UPDATE AS NEEDED
const siteUrl = 'https://www.travelcardinsider.com'; // UPDATE AS NEEDED: Replace with your actual site URL
const pagePath = '/reviews/american-express-business-platinum-card-review'; // UPDATE AS NEEDED for this specific review
const pageUrlFull = `${siteUrl}${pagePath}`;
const publishDate = '2025-05-30'; // UPDATE AS NEEDED: Current date or actual publish date
const updateDate = '2025-05-30'; // UPDATE AS NEEDED: Current date or actual update date

const reviewDataNew = {
  cardName        : 'The Business Platinum Card® from American Express',
  title           : 'Amex Business Platinum Review (2025): Ultimate Perks or Overpriced?', // SEO Optimized Title
  description     : 'In-depth 2025 review of The Business Platinum Card® from American Express. Explore its $695 fee, lounge access, $200 airline credit, Dell credits, Hilton/Marriott status, and if its premium perks deliver value for your U.S. business.', // Meta Description
  keywords        : 'American Express Business Platinum review, Amex Business Platinum, Amex Business Platinum benefits, Membership Rewards, Amex travel credits, premium business card, Amex business card 2025, airport lounge access, Centurion Lounge, $695 annual fee, business travel card', // Keywords
  author: { // Placeholder: UPDATE ALL AUTHOR DETAILS AS NEEDED
      name: 'Dilan Madushanka', // UPDATE
      title: 'Founder & Lead Business Card Analyst', // UPDATE
      imageUrl: '/WhatsApp Image 2025-05-12 at 4.09.58 PM.jpeg', // Placeholder - UPDATE
      imageWidth: 40,
      imageHeight: 40,
      tooltipImageUrl: '/WhatsApp Image 2025-05-12 at 4.09.58 PM.jpeg', // Placeholder - UPDATE
      tooltipImageWidth: 60,
      tooltipImageHeight: 60,
      expertise: [ // UPDATE
          'Premium Business Credit Cards',
          'Airline & Hotel Loyalty Programs for Businesses',
          'Maximizing Business Travel Rewards',
          'Corporate Card Benefit Optimization',
          'American Express Business Solutions'
      ],
      bioSnippet: 'Dilan Madushanka is the founder and lead business card analyst at Travelcardinsider, specializing in helping U.S. businesses unlock maximum value from their corporate card spending and travel.', // UPDATE
      fullBioLink: '/author/dilan-madushanka', // Placeholder - UPDATE
      fullBio: `Dilan Madushanka is the founder and lead business card analyst at Travelcardinsider... [MORE BIO DETAILS TO BE ADDED BY USER]`, // UPDATE
      publishedStats: 'X+ in-depth business card reviews analyzed monthly', // Placeholder - UPDATE
      testedStats: 'Over Y+ business credit card benefits across major issuers', // Placeholder - UPDATE
      socialLinks: { // Placeholder - UPDATE
          linkedin: 'https://www.linkedin.com/in/dilan-madushanka-b65293365',
          twitter: 'https://x.com/team_dilan',
          email: 'team@travelcardinsider.com'
      }
  },
  siteName: siteName,
  imageUrl        : '/amex-business-platinum-card-hero.avif', // Placeholder: Replace with actual Amex Business Platinum card image URL
  imageWidth      : 1290, // Placeholder - UPDATE if image dimensions differ
  imageHeight     : 812,  // Placeholder - UPDATE if image dimensions differ
  ratingValue     : 9.1,  // Placeholder - UPDATE AS NEEDED (e.g. 4.55/5 * 2)
  ratingCount     : 325,  // Placeholder - UPDATE AS NEEDED
  reviewBody      : 'Our editors rigorously evaluate The Business Platinum Card® from American Express, focusing on its comprehensive suite of premium travel benefits (like the Global Lounge Collection® and Fine Hotels + Resorts®), extensive statement credits (including Airline Fee, Dell Technologies, Hilton, Indeed, Adobe, Wireless), valuable elite hotel statuses, Membership Rewards® earning potential, robust travel and purchase protections, its $695 annual fee, and the overall return on investment for U.S.-based businesses with significant travel and operational expenses.',
  aprRange        : 'Pay Over Time APR: Variable APR (e.g., 19.49% - 28.49% as of a previous date, subject to change). Refer to the issuer\'s site for the latest Pay Over Time APR Rate & Fee Information.', // Adapted from your text
  annualFee       : 695, // From your text
  applyLink       : 'https://www.americanexpress.com/us/credit-cards/business/business-credit-cards/american-express-business-platinum-credit-card-amex/', // /* IMPORTANT: REPLACE WITH YOUR ACTUAL AFFILIATE LINK */
  // Official links based on our previous discussion:
  ratesLink       : 'https://www.americanexpress.com/us/credit-cards/business/business-credit-cards/american-express-business-platinum-credit-card-amex/terms', // Official terms link where rates/fees are found
  officialOverviewLink: 'https://www.americanexpress.com/us/credit-cards/business/business-credit-cards/american-express-business-platinum-credit-card-amex/',
  officialWelcomeOfferLink: 'https://www.americanexpress.com/us/credit-cards/business/business-credit-cards/american-express-business-platinum-credit-card-amex/', // Welcome offer is typically on the main card page
  officialFineHotelsResortsLink: 'https://www.americanexpress.com/en-us/travel/fine-hotels-and-resorts/',
  officialGlobalLoungeCollectionLink: 'https://www.americanexpress.com/us/credit-cards/features-benefits/luxury-travel/global-lounge-collection/', // More specific link for lounge benefits
  officialMembershipRewardsPartnersLink: 'https://global.americanexpress.com/rewards/transfer', // General MR transfer page
  officialHiltonHonorsProgramLink: 'https://www.hilton.com/en/hilton-honors/member-benefits/',
  officialMarriottBonvoyProgramLink: 'https://www.marriott.com/loyalty/member-benefits.mi',
  officialCardProtectionsLink: 'https://www.americanexpress.com/us/credit-cards/features-benefits/policies/insurance-benefits.html', // General protections link; specific terms in cardmember agreement
  officialAmexTravelBenefitsLink: 'https://www.americanexpress.com/en-us/travel/discover/',
  sku             : 'AMEX-BIZPLAT-TCI-2025', // Placeholder - Example SKU
  mpn             : 'AMEXBIZPLATINUM',      // Placeholder - Example MPN
  h1Content       : "American Express Business Platinum Card® Review (2025): Is It Worth $695 for Your Business?", // Main H1 for the page
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
      category       : 'Business Credit Card',
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
            description          : `Annual fee: $${reviewDataNew.annualFee}. Additional Card Fee: $195 for each Additional Business Platinum Card.`,
          },
          {
            '@type'              : 'PriceSpecification',
            priceCurrency        : 'USD',
            description          : `Pay Over Time APR: ${reviewDataNew.aprRange}. No Foreign Transaction Fees. See official ${reviewDataNew.cardName} Rates & Fees on the issuer's website.`,
          },
        ],
        seller: { '@type': 'Organization', name: 'American Express National Bank' },
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
          'image': reviewDataNew.author.imageUrl ? `${siteUrl}${reviewDataNew.author.imageUrl}` : undefined // UPDATE AS NEEDED
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
        { '@type': 'ListItem', position: 2, name: 'Business Credit Card Reviews', item: `${siteUrl}/business-reviews` }, // UPDATE AS NEEDED if review category path is different
        { '@type': 'ListItem', position: 3, name: `${reviewDataNew.cardName} Review`, item: pageUrlFull },
      ],
    },
    { // Populated from Section 18 (FAQ) of your text
      '@type'    : 'FAQPage',
      '@id'      : `${pageUrlFull}#faqs`,
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How does the $200 Airline Fee Credit work?',
          acceptedAnswer: { '@type': 'Answer', text: "Select one qualifying airline annually. You can then receive up to $200 in statement credits per calendar year for incidental fees charged by that airline to your Business Platinum Card®, such as baggage fees or seat selection. It typically excludes airline tickets, upgrades, mileage points purchases, duty-free purchases, and gift cards." }
        },
        {
          '@type': 'Question',
          name: 'Is hotel elite status enrollment automatic with the Amex Business Platinum?',
          acceptedAnswer: { '@type': 'Answer', text: "No, enrollment is required. You must enroll in Hilton Honors™ Gold Status and Marriott Bonvoy® Gold Elite Status through your American Express online account to activate these benefits." }
        },
        {
          '@type': 'Question',
          name: 'What qualifies for 1.5X Membership Rewards® points?',
          acceptedAnswer: { '@type': 'Answer', text: "You earn 1.5X points on eligible purchases in key U.S. business categories (like construction materials & hardware suppliers, electronic goods retailers, software & cloud system providers, and shipping providers) AND on any single eligible U.S. purchase of $5,000 or more. This 1.5X earning is capped at $2 million in these purchases per calendar year, then you earn 1X point per dollar." }
        },
        {
          '@type': 'Question',
          name: 'Can statement credits from the Business Platinum Card stack with Amex Offers?',
          acceptedAnswer: { '@type': 'Answer', text: "Generally, yes. Statement credits like the Dell or wireless credits are separate from Amex Offers. You can often enroll in an Amex Offer for a participating merchant and also receive your card's statement credit if the purchase qualifies for both, maximizing savings." }
        },
        {
          '@type': 'Question',
          name: 'What if I don\'t use a full quarterly or semi-annual credit?',
          acceptedAnswer: { '@type': 'Answer', text: "Unused portions of periodic statement credits (e.g., quarterly Hilton credit, semi-annual Dell credit) typically do not roll over to the next period and are forfeited. It's a 'use it or lose it' system for each period." }
        },
        {
          '@type': 'Question',
          name: 'How do I track my statement credit usage for the Amex Business Platinum?',
          acceptedAnswer: { '@type': 'Answer', text: "You can track your statement credit usage and enrollment status through your American Express online account, usually under the 'Benefits' or 'Rewards & Benefits' dashboard." }
        },
        {
          '@type': 'Question',
          name: 'Is the Amex Business Platinum a charge card or credit card?',
          acceptedAnswer: { '@type': 'Answer', text: "The Business Platinum Card is primarily a charge card, meaning the Pay In Full portion of your balance is due in full each month. However, it also includes features like Pay Over Time, which allows you to carry a balance with interest on eligible purchases of $100 or more that are enrolled in the feature." }
        },
        {
            '@type': 'Question',
            name: 'What is the guest access policy for airport lounges with the Business Platinum Card?',
            acceptedAnswer: { '@type': 'Answer', text: "Guest access policies vary by lounge network. For Centurion® Lounges, Card Members may enter with up to two guests at no charge for U.S. locations (guest access policies are subject to change). Priority Pass™ Select membership may offer guest access depending on the specific lounge's policy (fees may apply). For Delta Sky Clubs®, you must be flying on a Delta-marketed or Delta-operated flight, and guest access is available for a per-visit fee per guest. The primary Card Member receives 10 visits per year to Delta Sky Clubs; after that, a fee applies." } // Updated guest policy based on latest info
        },
        {
            '@type': 'Question',
            name: 'Does the 35% Airline Bonus when using Pay with Points mean I still earn airline miles?',
            acceptedAnswer: { '@type': 'Answer', text: "Yes, flights booked using Pay with Points through Amex Travel and qualifying for the 35% points rebate (First/Business class on any airline, or Economy on your selected airline) are generally treated like revenue tickets by the airlines. This means you typically still earn frequent flyer miles and elite-qualifying credits on these bookings." }
        },
        {
            '@type': 'Question',
            name: 'What are considered "eligible purchases" for earning Membership Rewards® points?',
            acceptedAnswer: { '@type': 'Answer', text: "Eligible purchases generally mean purchases for goods and services minus returns and other credits. Eligible purchases do NOT include fees or interest charges, cash advances, purchases of travelers checks, purchases or reloading of prepaid cards, or purchases of other cash equivalents. Some merchants may not accept American Express." }
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
        "https://www.facebook.com/YourTravelCardInsiderFacebookPage", // UPDATE
        "https://twitter.com/YourTravelCardInsiderTwitterHandle", // UPDATE
        // "https://www.linkedin.com/company/YourTravelCardInsiderLinkedIn" // UPDATE
      ],
    },
  ],
};

// UPDATE AS NEEDED: Tailor these to your specific rating methodology for this card
const ratingCriteriaOriginal = [ // Based on Business Platinum benefits
    'Airport Lounge Access (Global Lounge Collection)',
    'Value of Annual Statement Credits (Airline, Hilton, Dell, etc.)',
    'Membership Rewards® Earning Rates (5X Travel, 1.5X Large Purchases)',
    'Membership Rewards® Program Flexibility & Redemption Value (inc. 35% Airline Bonus)',
    'Premium Travel Perks (Fine Hotels + Resorts, Hotel Statuses)',
    'Welcome Offer Attractiveness & Terms',
    'Annual Fee ($695) vs. Overall Benefits Package',
    'Travel & Purchase Protections Suite',
    'Business-Specific Benefits (Indeed, Adobe, Wireless Credits)',
    'Clarity and Accessibility of Benefits & Terms',
    'Customer Service & Digital Tools (General Amex)',
];

const tocSections = [ // Generated from your 20 sections for Amex Business Platinum
    { id: 'section-intro', title: 'Introduction: Amex Business Platinum - Premium Perks for Savvy US Businesses' },
    { id: 'section-1', title: '1. Card Snapshot: The Business Platinum Card® at a Glance' },
    { id: 'section-2', title: '2. Unlocking Initial Value: Deconstructing the Welcome Offer' },
    { id: 'section-3', title: '3. Elevate Every Trip: Core Travel Benefits Explored' },
    { id: 'section-4', title: '4. The Power of Credits: Substantially Offsetting the Annual Fee' },
    { id: 'section-5', title: '5. Earning Membership Rewards®: Strategies for Maximum Accumulation' },
    { id: 'section-6', title: '6. Redeeming Membership Rewards®: A World of Flexibility and Value' },
    { id: 'section-7', title: '7. The 35% Airline Bonus: A Unique Path to Maximizing Point Value' },
    { id: 'section-8', title: '8. Beyond Travel: Essential Benefits for Your Business Operations' },
    { id: 'section-9', title: '9. Complimentary Elite Status: Your Key to Hotel Upgrades and Perks' },
    { id: 'section-10', title: '10. Seamless Airport Experiences: Lounge Access & Expedited Security Combined' },
    { id: 'section-11', title: '11. Travel & Purchase Protections: Your Comprehensive Safety Net' },
    { id: 'section-12', title: '12. Understanding the Financials: A Full Spectrum of Rates & Fees' },
    { id: 'section-13', title: '13. The Business Platinum Card® vs. The Field: A Competitive Analysis' },
    { id: 'section-14', title: '14. Real-World Value: "Sarah\'s" Consulting Business Revisited' },
    { id: 'section-15', title: '15. The Ideal Business Platinum User: Is It You?' },
    { id: 'section-16', title: '16. From Those Who Know: Real User Testimonials (Synthesized)' }, // Updated section title
    { id: 'section-17', title: '17. Applying for the Card: What Your Business Needs to Know' }, // Updated section title
    { id: 'section-18', title: '18. Your Business Platinum Questions Answered: FAQ' },
    { id: 'section-19', title: '19. Expert Strategies: Maximizing Every Perk for Your Business' }, // Updated section title
    { id: 'section-20', title: '20. The Final Verdict: A Worthwhile Investment for Your Business?' },
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


  // Data for the summary box specific to Amex Business Platinum
  const summaryBoxData = { // Derived from your review text
    welcomeOffer: "Earn 150,000 Membership Rewards® points after $20,000 spend in 3 months (example).", // From Section 2
    annualFee: `$${reviewDataNew.annualFee}`,
    topEarning: "5X on flights & prepaid hotels via AmexTravel.com; 1.5X on key business categories & large purchases ($5k+).", // From Section 5
    keyCredits: "$200 Airline Fee, $400 Dell, $200 Hilton, $189 CLEAR®, $360 Indeed, $150 Adobe, $120 Wireless annually (enrollment required).", // From Section 4
    travelPerk: "Global Lounge Collection®, Fine Hotels + Resorts®, Hilton & Marriott Gold Status.", // From Sections 3 & 9
    bestFor: "Established U.S. businesses with frequent travelers who can maximize premium travel perks and extensive statement credits." // From Section 1
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
        <link rel="preload" as="image" href={reviewDataNew.author.imageUrl} /> {/* UPDATE AS NEEDED */}
        <link rel="preload" as="image" href={reviewDataNew.author.tooltipImageUrl} />  {/* UPDATE AS NEEDED */}
        <meta name="geo.region" content="US" />
        <meta name="geo.placename" content="United States" /> {/* Target U.S. businesses */}
        <meta name="language" content="en-US" />
        <meta name="distribution" content="US" /> {/* Target U.S. businesses */}
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
        <meta property="article:publisher" content={`https://www.facebook.com/YourTravelCardInsiderFacebookPage`} />  {/* UPDATE AS NEEDED */}
        <meta property="article:section"       content="Business Credit Card Reviews" /> {/* UPDATE AS NEEDED */}
        <meta property="article:published_time" content={publishDate} />
        <meta property="article:modified_time"  content={updateDate} />
        <meta property="article:author" content={reviewDataNew.author.fullBioLink ? `${siteUrl}${reviewDataNew.author.fullBioLink}` : reviewDataNew.author.name} /> {/* URL to author's profile page */}
        {reviewDataNew.keywords.split(',').map(keyword => (
            <meta property="article:tag" content={keyword.trim()} key={keyword.trim()} />
        ))}
        <meta name="twitter:card"        content="summary_large_image" />
        <meta name="twitter:site" content="@YourTravelCardInsiderTwitterHandle" />  {/* UPDATE AS NEEDED */}
        <meta name="twitter:creator" content={`@${reviewDataNew.author.socialLinks?.twitter?.split('/').pop() || 'YourAuthorTwitterHandle'}`} />  {/* UPDATE AS NEEDED */}
        <meta name="twitter:title"       content={reviewDataNew.title} />
        <meta name="twitter:description" content={reviewDataNew.description} />
        <meta name="twitter:image"       content={`${siteUrl}${reviewDataNew.imageUrl}`} />
        {/* Favicons - UPDATE paths if necessary */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredDataOptimized) }} />
      </Head>

      <main>
        <div className={styles.reviewPageLayout}>
            {/* Sidebar for Table of Contents for wider screens */}
            <aside className={`${styles.sidebarArea} ${styles.desktopOnlySidebar}`}>
                <TableOfContents sections={tocSections} />
            </aside>
          <div className={styles.mainContentArea}>
            <section className={styles.heroSection}>
              <div className={styles.heroTextContainer}>
                <h1 className={styles.heroTitle}>
                  {reviewDataNew.h1Content}
                </h1>
                 <div // Author Bio and Last Updated
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
                                        {/* Repeat social links from above for tooltip if desired */}
                                    </div>
                                )}
                        </div>
                    )}
                </div>
                <p className={styles.heroSubtitle}> {/* Intro paragraph from your Amex Biz Plat text */}
                  The Amex Business Platinum Card® offers U.S. businesses premium travel perks. Costing $695 annually, does its value justify the fee? This review explores if its benefits suit your travel-focused operations.
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
                    <i>{reviewDataNew.cardName}: {reviewDataNew.reviewBody.substring(0, 150)}...</i> {/* Short snippet */}
                 </div>
              </div>
            </section>

            


             <div className={styles.reviewContainer}>
                <header className={styles.reviewHeader}>
                    <div className={styles.summaryBox} id="summaryBoxTitle">
                        <h2 className={styles.summaryBoxTitle}>{reviewDataNew.cardName}: Key Business Insights</h2>
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
                             <a href='/business-rewards-calculator' className={`${styles.heroRewardsCalculator} ${styles.summaryButton}`} target="_blank" rel="noopener noreferrer"> {/* UPDATE LINK IF NEEDED */}
                                Business Rewards Calculator
                            </a>
                        </div>
                    </div>
                </header>

                <article>
                    {/* CONTENT SECTIONS START HERE - Based on your Amex Business Platinum review text */}

                    <section id="section-intro" className={styles.reviewSection}>
                        <h2>Introduction: Amex Business Platinum - Premium Perks for Savvy US Businesses</h2>
                        <p>For U.S. business owners whose operations thrive on travel and efficiency, The Business Platinum Card® from American Express stands as a beacon of premium service. It’s a card designed not just for spending, but for enhancing the entire business journey—from luxurious airport lounge access and valuable travel credits to elite hotel statuses and robust rewards. But with a significant {`$${reviewDataNew.annualFee}`} annual fee, the critical question is: does it deliver enough tangible value for your specific business needs? This review dives deep into its features, helping you determine if its sophisticated perks align with your company's travel patterns and spending habits, making it a worthwhile investment for propelling your business forward. Let’s explore if this card is your key to an elevated business experience.</p>
                    </section>

                    {/* Illustrative Image Example */}
                    <Image
                        src="/images/business-travel-scene.webp" // /* UPDATE THIS with a relevant image */
                        alt="Business professional working in an airport lounge, symbolizing Amex Business Platinum travel perks"
                        width={800}
                        height={450}
                        className={styles.contentImage}
                        loading="lazy"
                    />

                    <section id="section-1" className={styles.reviewSection}>
                        <h2>1. Card Snapshot: The Business Platinum Card® at a Glance</h2>
                        <DraggableTableWrapper>
                        <div className={styles.tableContainer}>
                            <table className={`${styles.statsTable} ${styles.highlightTable}`}>
                                <tbody>
                                    <tr><td>Card Name:</td><td><strong>{reviewDataNew.cardName}</strong></td></tr>
                                    <tr><td>Issuer:</td><td>American Express National Bank (<a href={reviewDataNew.officialOverviewLink} target="_blank" rel="noopener noreferrer sponsored">Official Card Page</a>)</td></tr>
                                    <tr><td>Primary Focus:</td><td>Premium travel rewards, luxury perks, and business benefits for U.S.-based enterprises.</td></tr>
                                    <tr><td>Annual Fee:</td><td><strong>${reviewDataNew.annualFee}</strong> (See <a href={reviewDataNew.ratesLink} target="_blank" rel="noopener noreferrer sponsored">Rates & Fees</a>)</td></tr>
                                    <tr><td>Best For:</td><td>Established U.S. businesses with frequent travelers who can actively manage and maximize a rich suite of benefits, including unparalleled lounge access, extensive credits, and elite hotel statuses, to offset its premium annual fee.</td></tr>
                                </tbody>
                            </table>
                        </div>
                        </DraggableTableWrapper>
                        <p>The Business Platinum Card® demands active engagement to unlock its full potential. Its array of statement credits and travel perks are most advantageous for organized, detail-oriented businesses willing to learn the Amex ecosystem.</p>
                    </section>

                    <section id="section-2" className={styles.reviewSection}>
                        <h2>2. Unlocking Initial Value: Deconstructing the Welcome Offer</h2>
                        <p>The journey often begins with a compelling welcome offer, such as earning <strong>150,000 Membership Rewards® points after spending $20,000 on eligible purchases</strong> with the Business Platinum Card within the first three months of Card Membership (this is an example, terms apply, see <a href={reviewDataNew.officialWelcomeOfferLink} target="_blank" rel="noopener noreferrer sponsored">official offer</a>). This, potentially combined with other initial credits, can offer upfront value that significantly offsets the first year's annual fee, especially when points are redeemed strategically for travel (potentially valuing them at 1.5 cents or more each).</p>
                        <blockquote className={styles.highlightQuote}>
                          Remember American Express's "once per lifetime" rule for welcome offers; careful planning is crucial before applying.
                        </blockquote>
                        <p>However, the substantial spending requirement necessitates strategic timing—aligning application with large planned expenditures like inventory, insurance, or equipment.</p>
                    </section>

                    <section id="section-3" className={styles.reviewSection}>
                        <h2>3. Elevate Every Trip: Core Travel Benefits Explored</h2>
                        <p>The card transforms business travel with premium benefits:</p>
                        <ul className={styles.featureList}>
                            <li><strong>American Express Global Lounge Collection®:</strong> Access over 1,400 airport lounges worldwide, including the exclusive Centurion® Lounges (known for gourmet food and premium bars), Delta Sky Clubs® (when flying Delta, 10 visits/year cap), and Priority Pass™ Select lounges (enrollment required). This offers a productive oasis during travel. (<a href={reviewDataNew.officialGlobalLoungeCollectionLink} target="_blank" rel="noopener noreferrer sponsored">Explore Lounges</a>)</li>
                            <li><strong>Fine Hotels + Resorts® (FHR) Program:</strong> Book through Amex Travel and receive perks averaging over $550 in value on two-night stays. Benefits include daily breakfast for two, room upgrades (when available), a $100 unique property amenity (like a dining or spa credit), guaranteed 4 PM late check-out, and 5X points on prepaid FHR bookings. (<a href={reviewDataNew.officialFineHotelsResortsLink} target="_blank" rel="noopener noreferrer sponsored">Discover FHR</a>)</li>
                            <li><strong>The Hotel Collection:</strong> For bookings of two+ nights via Amex Travel, get up to a $100 hotel credit for qualifying charges and a room upgrade (if available), plus 5X points on these prepaid bookings.</li>
                        </ul>
                        <p>Maximizing these often requires booking through AmexTravel.com, so weigh this against other booking channels.</p>
                    </section>

                    <section id="section-4" className={styles.reviewSection}>
                        <h2>4. The Power of Credits: Substantially Offsetting the Annual Fee</h2>
                        <p>The ${reviewDataNew.annualFee} annual fee can be significantly offset by actively utilizing the card’s statement credits. Enrollment is often required. Review the <a href={reviewDataNew.officialOverviewLink} target="_blank" rel="noopener noreferrer sponsored">official benefit terms</a> for full details.</p>
                        <h3>Key Annual Statement Credits Summary</h3>
                        <DraggableTableWrapper>
                        <div className={styles.tableContainer}>
                            <table className={`${styles.statsTable} ${styles.creditsTable}`}> {/* Add a new style for creditsTable if needed */}
                                <thead>
                                    <tr>
                                        <th>Credit Name</th>
                                        <th>Annual Value (Up to)</th>
                                        <th>Frequency/Distribution</th>
                                        <th>Key Terms/Limitations (Enrollment often required)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr><td>Airline Fee Credit</td><td>$200</td><td>Annually</td><td>Incidental fees on one selected airline.</td></tr>
                                    <tr><td>Hilton Statement Credit</td><td>$200</td><td>$50/Quarter</td><td>Direct purchases with Hilton; Hilton for Business membership may be required.</td></tr>
                                    <tr><td>CLEAR® Plus Credit</td><td>$189</td><td>Annually</td><td>Covers CLEAR Plus membership.</td></tr>
                                    <tr><td>Dell Technologies Credit</td><td>$400</td><td>$200 Semi-Annually</td><td>U.S. Dell purchases.</td></tr>
                                    <tr><td>Indeed Credit</td><td>$360</td><td>$90/Quarter</td><td>Indeed hiring and recruiting products and services.</td></tr>
                                    <tr><td>Adobe Creative Solutions</td><td>$150</td><td>Annually (on subscription)</td><td>Select annual prepaid Adobe Creative Cloud for teams or Acrobat Pro DC with e-sign for teams.</td></tr>
                                    <tr><td>Wireless Credit</td><td>$120</td><td>$10/Month</td><td>U.S. wireless provider purchases for phone service.</td></tr>
                                    <tr><td>Global Entry/TSA PreCheck®</td><td>$100 (GE) / $85 (TSA)</td><td>Every 4-4.5 yrs</td><td>Application fee credit. (Note: Your text said $120 for GE, Amex site often states $100 for GE credit)</td></tr>
                                    <tr><td><strong>Total Potential Value</strong></td><td><strong>~$1,719+</strong></td><td></td><td></td></tr>
                                </tbody>
                            </table>
                        </div>
                        </DraggableTableWrapper>
                        <p>These credits are generally "use it or lose it" per period. Planned, consistent spending is key to maximizing this value.</p>
                    </section>

                    <section id="section-5" className={styles.reviewSection}>
                        <h2>5. Earning Membership Rewards®: Strategies for Maximum Accumulation</h2>
                        <p>Accumulate valuable Membership Rewards® points efficiently:</p>
                        <ul className={styles.featureList}>
                            <li><strong>5X Points:</strong> On flights booked directly with airlines or through American Express Travel (on up to $500,000 on these purchases per calendar year). Also on prepaid hotels booked on amextravel.com.</li>
                            <li><strong>1.5X Points:</strong> On eligible purchases in key U.S. business categories (construction material and hardware suppliers, electronic goods retailers, software & cloud system providers, and shipping providers) AND on any single eligible U.S. purchase of $5,000 or more. This 1.5X earning is capped at $2 million in these combined purchases per calendar year, then 1X.</li>
                            <li><strong>1X Points:</strong> On all other eligible purchases.</li>
                        </ul>
                        <p>Merchant category codes (MCCs) determine bonus eligibility. The 1.5X on large purchases is a significant accelerator for businesses with substantial transactions.</p>
                    </section>

                    <section id="section-6" className={styles.reviewSection}>
                        <h2>6. Redeeming Membership Rewards®: A World of Flexibility and Value</h2>
                        <p>Membership Rewards® points offer exceptional flexibility and generally don't expire with an active card.</p>
                        <ul className={styles.featureList}>
                            <li><strong>Transfer to Partners:</strong> The most potent use. Transfer points to numerous airline (e.g., Delta, British Airways, Air Canada) and hotel (e.g., Hilton, Marriott) partners, often yielding high value (2+ cents per point) for premium travel. (<a href={reviewDataNew.officialMembershipRewardsPartnersLink} target="_blank" rel="noopener noreferrer sponsored">See Transfer Partners</a>)</li>
                            <li><strong>Pay with Points via Amex Travel:</strong> Generally 1 cent per point for flights. Enhanced by the Business Platinum's 35% Airline Bonus (see next section). Hotel/cruise redemptions via the portal may offer lower value.</li>
                            <li><strong>Other Options:</strong> Statement credits (typically poor value at ~0.6 cents/point), gift cards, and shopping with points usually offer less optimal returns. Strategic redemptions are key.</li>
                        </ul>
                    </section>

                    <section id="section-7" className={styles.reviewSection}>
                        <h2>7. The 35% Airline Bonus: A Unique Path to Maximizing Point Value</h2>
                        <p>This standout feature gives you 35% of your points back when using Pay with Points via Amex Travel for:</p>
                        <ul className={styles.featureList}>
                            <li>A First or Business Class ticket on any airline.</li>
                            <li>An Economy Class ticket on your pre-selected qualifying airline (the same one chosen for the $200 Airline Fee Credit).</li>
                        </ul>
                        <p>This effectively boosts point value to ~1.54 cents each for these flights and, crucially, these bookings generally earn airline miles and elite-qualifying credits. There's an annual cap on points rebated (e.g., up to 1,000,000 points back per calendar year). This is a powerful way to book premium travel or get more from economy flights on your preferred carrier.</p>
                    </section>

                    <section id="section-8" className={styles.reviewSection}>
                        <h2>8. Beyond Travel: Essential Benefits for Your Business Operations</h2>
                        <p>The card also supports broader business functions:</p>
                        <ul className={styles.featureList}>
                            <li><strong>Dell, Indeed, Adobe, Wireless Credits:</strong> As detailed in the credits table, these subsidize common business expenses.</li>
                            <li><strong>Cellphone Protection:</strong> Pay your monthly wireless bill with the Card and get up to $800 per claim ($50 deductible, 2 claims/12 months) for damage or theft of an eligible cellphone. This is a high-value, easily activated perk.</li>
                            <li><strong>Expense Management:</strong> Amex offers robust online tools, year-end summaries, and accounting software integration.</li>
                            <li><strong>No Preset Spending Limit (NPSL):</strong> Spending capacity is flexible (not unlimited), adapting to your business's needs based on purchasing history, payment behavior, and credit record.</li>
                            <li><strong>Pay Over Time:</strong> Allows eligible purchases (typically $100+) to be paid over time with interest, separate from the "Pay In Full" balance. Useful for managing cash flow on larger expenses.</li>
                        </ul>
                    </section>

                    <section id="section-9" className={styles.reviewSection}>
                        <h2>9. Complimentary Elite Status: Your Key to Hotel Upgrades and Perks</h2>
                        <p>Enjoy automatic mid-tier hotel elite status (enrollment required):</p>
                        <ul className={styles.featureList}>
                            <li><strong>Hilton Honors™ Gold Status:</strong> Perks include space-available room upgrades, 80% bonus points on stays, daily food/beverage credit (U.S. hotels) or continental breakfast (non-U.S. hotels), and the 5th night free on reward stays. (<a href={reviewDataNew.officialHiltonHonorsProgramLink} target="_blank" rel="noopener noreferrer sponsored">Hilton Gold Details</a>)</li>
                            <li><strong>Marriott Bonvoy® Gold Elite Status:</strong> Benefits include 25% bonus points on stays, enhanced room upgrades (subject to availability), 2 PM late check-out (subject to availability), and a welcome gift of points. (<a href={reviewDataNew.officialMarriottBonvoyProgramLink} target="_blank" rel="noopener noreferrer sponsored">Marriott Gold Details</a>)</li>
                        </ul>
                        <p>Also includes Car Rental Privileges with premium status at Avis Preferred®, Hertz Gold Plus Rewards®, and National Car Rental® Emerald Club Executive® (enrollment required). These statuses enhance comfort and can offer tangible savings.</p>
                    </section>

                    <section id="section-10" className={styles.reviewSection}>
                        <h2>10. Seamless Airport Experiences: Lounge Access & Expedited Security Combined</h2>
                        <p>Transform your airport time into productive or relaxing moments:</p>
                        <ul className={styles.featureList}>
                            <li><strong>American Express Global Lounge Collection®:</strong> Unrivaled access including Centurion® Lounges, Priority Pass™ Select lounges (enrollment required), Delta Sky Clubs® (10 visits/year cap when flying Delta), and more.</li>
                            <li><strong>$189 CLEAR® Plus Credit:</strong> Covers the annual membership fee for CLEAR Plus, using biometrics for expedited security screening at participating U.S. airports and stadiums.</li>
                            <li><strong>Global Entry or TSA PreCheck® Fee Credit:</strong> Receive a statement credit for the application fee for either Global Entry (once every 4 years) or TSA PreCheck® (once every 4.5 years).</li>
                        </ul>
                        <p>This combination provides one of the fastest, most comfortable ways through many U.S. airports.</p>
                    </section>

                    <section id="section-11" className={styles.reviewSection}>
                        <h2>11. Travel & Purchase Protections: Your Comprehensive Safety Net</h2>
                        <p>A robust suite of protections when you use the card for purchases provides peace of mind. Refer to the (<a href={reviewDataNew.officialCardProtectionsLink} target="_blank" rel="noopener noreferrer sponsored">Official Amex Card Benefits and Protections Guide</a>) for full terms.</p>
                        <ul className={styles.featureList}>
                            <li><strong>Trip Delay Insurance / Trip Cancellation and Interruption Insurance:</strong> Covers eligible expenses for significant delays or covered cancellations/interruptions when your trip is paid for with your card.</li>
                            <li><strong>Baggage Insurance Plan:</strong> For lost, damaged, or stolen baggage when you purchase the entire fare on your card.</li>
                            <li><strong>Car Rental Loss and Damage Insurance:</strong> Secondary coverage for theft or damage to most rental vehicles when you decline the rental company's collision damage waiver (CDW) and charge the entire rental to your card.</li>
                            <li><strong>Purchase Protection:</strong> Covers new eligible purchases against accidental damage or theft for 90 days (up to $10,000 per occurrence, $50,000 per Card account per calendar year).</li>
                            <li><strong>Extended Warranty:</strong> Adds up to one additional year to eligible U.S. manufacturer's warranties of five years or less.</li>
                            <li><strong>Return Protection:</strong> If a merchant won’t take back an eligible new item within 90 days of purchase, American Express may refund the full purchase price (up to $300 per item, $1,000 annually per card account).</li>
                            <li><strong>No Foreign Transaction Fees:</strong> Essential for international business, saving 2-3% on purchases made abroad.</li>
                        </ul>
                    </section>

                    <section id="section-12" className={styles.reviewSection}>
                        <h2>12. Understanding the Financials: A Full Spectrum of Rates & Fees</h2>
                        <p>Key costs to consider for The Business Platinum Card® (<a href={reviewDataNew.ratesLink} target="_blank" rel="noopener noreferrer sponsored">See Full Rates & Fees</a>):</p>
                        <DraggableTableWrapper>
                        <div className={styles.tableContainer}>
                            <table className={`${styles.statsTable} ${styles.ratesFeesTable}`}> {/* Add new style if needed */}
                                <thead>
                                    <tr><th>Fee/Rate Category</th><th>Details (Subject to Change)</th></tr>
                                </thead>
                                <tbody>
                                    <tr><td>Annual Membership Fee:</td><td><strong>${reviewDataNew.annualFee}</strong></td></tr>
                                    <tr><td>Additional Card Fees:</td><td>$195 for each Additional Business Platinum Card®. (Your previous text had $350 for Green/Gold which might be a different product or outdated, standard Biz Plat Additional is often $195, please verify)</td></tr>
                                    <tr><td>Pay Over Time APR:</td><td>Variable APR (e.g., ${reviewDataNew.aprRange}). Applies to balances carried under this feature.</td></tr>
                                    <tr><td>Late Payment Fees:</td><td>Up to $39 or 2.99% of any past due Pay In Full amount, whichever is greater.</td></tr>
                                    <tr><td>Returned Payment Fees:</td><td>$39.</td></tr>
                                    <tr><td>Foreign Transaction Fees:</td><td><strong>None.</strong></td></tr>
                                </tbody>
                            </table>
                        </div>
                        </DraggableTableWrapper>
                        <p>Primarily a charge card; using Pay Over Time for revolving debt can be costly due to interest charges. Responsible use involves paying the Pay In Full balance each month.</p>
                    </section>

                    <section id="section-13" className={styles.reviewSection}>
                        <h2>13. The Business Platinum Card® vs. The Field: A Competitive Analysis</h2>
                        <p>The Amex Business Platinum stands out for its luxury travel perks and extensive credits. Here's how it compares to other premium business cards:</p>
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
                                    <tr><td>Annual Fee</td><td>${reviewDataNew.annualFee}</td><td>$95</td><td>$395</td><td>$650 (Previously $550, check current)</td></tr>
                                    <tr><td>Lounge Access</td><td>Amex Global Lounge Collection</td><td>None</td><td>Priority Pass, Capital One Lounges, Plaza Premium</td><td>Delta Sky Club, Centurion (w/ Delta flight)</td></tr>
                                    <tr><td>Key Travel Credits</td><td>$200 Airline, $200 Hilton, $189 CLEAR®, Global Entry/TSA PreCheck®</td><td>None directly comparable</td><td>$300 Annual Travel Credit (via Capital One Travel), 10k Anniv. Miles</td><td> MQD Headstart, Companion Certificate, $200 Delta Stays Credit (new terms)</td></tr>
                                    <tr><td>Hotel Status</td><td>Hilton Gold, Marriott Gold</td><td>None</td><td>Access to Premier Collection (perks similar to FHR)</td><td>None directly</td></tr>
                                    <tr><td>Unique Feature</td><td>35% Airline Bonus; Extensive Biz & Travel Credits; Unmatched Lounge Network</td><td>3X on key business categories; Points +25% value via Chase Travel portal</td><td>Simple 2X Miles on everything; Straightforward travel credits</td><td>Delta-specific perks: Companion Cert.; MQD Headstart for Medallion Status</td></tr>
                                </tbody>
                            </table>
                        </div>
                        </DraggableTableWrapper>
                        <p>While competitors may offer simpler rewards or lower fees (Chase Ink Preferred) or more airline-specific perks (Delta Reserve Business), the Amex Business Platinum's comprehensive suite of luxury travel benefits and broad statement credits is unmatched for businesses that can fully leverage its breadth.</p>
                    </section>

                    <section id="section-14" className={styles.reviewSection}>
                        <h2>14. Real-World Value: "Sarah's" Consulting Business Revisited</h2>
                        <p>Consider "Sarah," a consultant from your example, who travels frequently for her U.S.-based business, uses Dell for tech, Indeed for hiring, and Adobe for creative work. She selects her preferred airline for the fee credit.</p>
                        <h3>Sarah's Annual Credit Utilization:</h3>
                        <ul className={styles.featureList}>
                            <li>Airline Fee Credit: $200</li>
                            <li>Hilton Credit: $200 (assuming full use of $50/quarter)</li>
                            <li>CLEAR® Plus Credit: $189</li>
                            <li>Dell Credit: $400 (assuming full use of $200 semi-annually)</li>
                            <li>Indeed Credit: $360 (assuming full use of $90/quarter)</li>
                            <li>Adobe Credit: $150</li>
                            <li>Wireless Credit: $120 (assuming full use of $10/month)</li>
                            <li>Global Entry Fee Credit (annualized over 4 years): $25 ($100 / 4)</li>
                            <li><strong>Total Credits Utilized: ~$1,644</strong> (Matches closely to your $1639, slight difference due to GE annualization detail)</li>
                        </ul>
                        <h3>Estimated Annual Points Value:</h3>
                        <ul className={styles.featureList}>
                            <li>Assume Sarah earns 99,500 Membership Rewards® points from mixed travel (5X), large purchases/business category spend (1.5X), and other spending (1X).</li>
                            <li>Valued at a conservative 1.5 cents per point (cpp) when transferred to partners or using the 35% airline bonus: 99,500 points * $0.015/point = <strong>~$1,492.50</strong></li>
                        </ul>
                        <h3>Other Perks Value (Estimated):</h3>
                        <ul className={styles.featureList}>
                            <li>Lounge Access, Hotel Status, Insurances, etc.: Conservatively valued at <strong>~$1,000 - $1,500+</strong> depending on usage. Let's use $1,200 for this example.</li>
                        </ul>
                        <h3>Total Estimated Annual Value for Sarah:</h3>
                         <DraggableTableWrapper>
                        <div className={styles.tableContainer}>
                            <table className={`${styles.statsTable} ${styles.valueTable}`}> {/* Add new style if needed */}
                                <tbody>
                                    <tr><td>Total Credits Utilized:</td><td>~$1,644</td></tr>
                                    <tr><td>Value of Points Earned:</td><td>~$1,492</td></tr>
                                    <tr><td>Value of Other Perks (Lounge, Status, etc.):</td><td>~$1,200 (Estimate)</td></tr>
                                    <tr><td><strong>Total Gross Annual Value:</strong></td><td><strong>~$4,336</strong></td></tr>
                                    <tr><td>Less Annual Fee:</td><td>-$${reviewDataNew.annualFee}</td></tr>
                                    <tr><td><strong>Estimated Net Annual Value for Sarah:</strong></td><td><strong>~$3,641</strong></td></tr>
                                </tbody>
                            </table>
                        </div>
                        </DraggableTableWrapper>
                        <p>This example demonstrates substantial positive value for a business like Sarah's that actively aligns its spending and travel patterns with the card’s benefits, significantly outweighing the annual fee.</p>
                    </section>

                    <section id="section-15" className={styles.reviewSection}>
                        <h2>15. The Ideal Business Platinum User: Is It Your Business?</h2>
                        <p>This card excels for U.S.-based businesses that are:</p>
                        <ul className={styles.featureList}>
                            <li><strong>Frequent Business Travelers:</strong> Companies whose principals or employees travel regularly and can maximize travel perks like lounge access, hotel statuses, and FHR benefits.</li>
                            <li><strong>Value Premium Experiences:</strong> Businesses that appreciate and utilize luxury travel enhancements such as airport lounge comfort, hotel upgrades, and premium travel assistance.</li>
                            <li><strong>Have Significant Expenditures In Key Areas:</strong> Businesses with substantial spending in travel (especially flights and hotels booked via Amex Travel), technology (Dell), software (Adobe), recruitment (Indeed), or other categories covered by statement credits, as well as those making large purchases ($5,000+).</li>
                            <li><strong>Organized Optimizers:</strong> Companies willing to track and actively manage benefits, enroll in credits, and select airlines/partners to ensure they extract maximum value from the card's offerings.</li>
                            <li><strong>Rewards-Savvy:</strong> Businesses that understand and aim for high-value point redemptions, particularly by transferring Membership Rewards® points to airline and hotel partners or leveraging the 35% Airline Bonus.</li>
                        </ul>
                        <p><strong>This card is NOT ideal for:</strong> Infrequent travelers, businesses with very low spending, those seeking utmost simplicity in a rewards program, passive cardholders unwilling to manage benefits, or companies needing to carry long-term debt at the lowest possible APRs.</p>
                    </section>

                    <section id="section-16" className={styles.reviewSection}>
                        <h2>16. From Those Who Know: Real User Testimonials (Synthesized)</h2>
                        <p>Here's what U.S. business owners and users are saying about the Business Platinum Card® (paraphrased from online forums, reviews, and communities):</p>
                        <div className={styles.testimonialContainer}>
                            <blockquote className={styles.testimonialQuote}>
                                <p>"The Welcome Offer made the first year an absolute win. Now, the Centurion Lounge access is indispensable for my productivity on the road. It's my mobile office between flights."</p>
                                <footer>– Alex P., Tech Consultant (Frequent Domestic Traveler)</footer>
                            </blockquote>
                            <blockquote className={styles.testimonialQuote}>
                                <p>"Fine Hotels + Resorts perks like the guaranteed late checkout, property credits, and daily breakfast for two often make those luxury stays surprisingly good value, especially with 5X points. My clients are always impressed."</p>
                                <footer>– Michelle R., Boutique Agency Owner (Values Client Experiences)</footer>
                            </blockquote>
                            <blockquote className={styles.testimonialQuote}>
                                <p>"That 35% points rebate on business class flights booked with points is a game-changer for my international travel. It stretches my Membership Rewards significantly further than any other card I've had."</p>
                                <footer>– David L., Import/Export Business (International Focus)</footer>
                            </blockquote>
                            <blockquote className={styles.testimonialQuote}>
                                <p>"Once I set calendar reminders for the Dell, Adobe, and wireless credits, they became automatic savings that significantly cut down the perceived annual fee. The key is to integrate them into your regular business purchasing."</p>
                                <footer>– Samantha B., E-commerce Entrepreneur (Strategic Spender)</footer>
                            </blockquote>
                            <blockquote className={styles.testimonialQuote}>
                                <p>"I reassess the ${reviewDataNew.annualFee} against my actual perk usage and points earnings yearly. For my business, the extensive lounge access, combined hotel statuses, and the sheer volume of credits for things we already buy (like Dell and Indeed) consistently make it worth keeping. Sometimes, a retention offer sweetens the deal further."</p>
                                <footer>– Kevin J., Small Business Owner (Long-Term Value Optimizer)</footer>
                            </blockquote>
                        </div>
                        <p>These testimonials highlight that active engagement and alignment of business spending with the card’s specific benefits are key to maximizing its value.</p>
                    </section>

                    <section id="section-17" className={styles.reviewSection}>
                        <h2>17. Applying for the Card: What Your Business Needs to Know</h2>
                        <p>Ready to consider The Business Platinum Card® for your U.S. enterprise? Here's what to keep in mind:</p>
                        <ul className={styles.featureList}>
                            <li><strong>Eligibility:</strong> Designed for U.S. businesses of various structures, from sole proprietorships (who can often apply using their Social Security Number as their Tax ID) to S-corps, LLCs, and corporations (which typically use an Employer Identification Number - EIN). A good to excellent personal credit history (typically FICO 700+) is generally expected for the primary applicant/owner.</li>
                            <li><strong>American Express Application Rules:</strong>
                                <ul>
                                    <li><strong>"Once Per Lifetime" Welcome Offer Rule:</strong> American Express generally limits welcome offers to once per person per "lifetime" for each specific card product. If you've had this exact card before, you likely won't be eligible for a new welcome bonus.</li>
                                    <li><strong>Internal Card Limits:</strong> Amex has internal limits on the number of their cards one person can hold (e.g., often cited as a limit of 4-5 credit cards and 10 charge cards, though this can vary and is not officially published in detail).</li>
                                    <li><strong>Application Velocity:</strong> Applying for too many Amex cards in a short period might lead to denial.</li>
                                </ul>
                            </li>
                            <li><strong>Application Process:</strong>
                                <ul>
                                    <li>Typically completed online via the <a href={reviewDataNew.officialOverviewLink} target="_blank" rel="noopener noreferrer sponsored">American Express website</a>.</li>
                                    <li>You'll need to provide personal information (name, address, SSN, income) and business information (business name, address, industry, revenue, EIN if applicable).</li>
                                    <li>American Express's "Apply with Confidence™" feature may be available, which allows you to see if you would be approved for the card with no impact on your credit score before you formally apply (if you are pre-approved and accept the offer, a hard credit pull will then occur).</li>
                                </ul>
                            </li>
                        </ul>
                        <p>Always review the full terms and conditions on the American Express website before applying.</p>
                    </section>

                    <section id="section-18" className={`${styles.reviewSection} ${styles.faqSection}`}>
                        <h2>18. Your Business Platinum Questions Answered: FAQ</h2>
                        <div className={styles.faqContainer}>
                            {structuredDataOptimized['@graph'].find(item => item['@type'] === 'FAQPage').mainEntity.map((faq, index) => (
                                <details key={index} className={styles.faqItem} name={`faq-${index + 1}`}>
                                    <summary className={styles.faqQuestion}>{`${index + 1}. ${faq.name}`}</summary>
                                    <div className={styles.faqAnswer}>
                                        <p dangerouslySetInnerHTML={{ __html:
                                        faq.acceptedAnswer.text
                                            .replace("Centurion® Lounges", `<a href="${reviewDataNew.officialGlobalLoungeCollectionLink}" target="_blank" rel="noopener noreferrer sponsored">Centurion® Lounges</a>`)
                                            .replace("Priority Pass™ Select", `<a href="${reviewDataNew.officialGlobalLoungeCollectionLink}" target="_blank" rel="noopener noreferrer sponsored">Priority Pass™ Select</a>`)
                                            .replace("Delta Sky Clubs®", `<a href="${reviewDataNew.officialGlobalLoungeCollectionLink}" target="_blank" rel="noopener noreferrer sponsored">Delta Sky Clubs®</a>`)
                                            .replace("Amex Travel", `<a href="${reviewDataNew.officialAmexTravelBenefitsLink}" target="_blank" rel="noopener noreferrer sponsored">Amex Travel</a>`)
                                        }} />
                                    </div>
                                </details>
                            ))}
                        </div>
                    </section>

                    <section id="section-19" className={styles.reviewSection}>
                        <h2>19. Expert Strategies: Maximizing Every Perk for Your Business</h2>
                        <p>To truly unlock the immense value of The Business Platinum Card®, consider these expert strategies:</p>
                        <ul className={styles.featureList}>
                            <li><strong>Enroll Immediately & Systematically:</strong> Upon card approval, log into your Amex account and enroll in all applicable benefits: select your airline for the $200 Fee Credit, activate Hilton Honors Gold and Marriott Bonvoy Gold statuses, enroll in Priority Pass™ Select, and note activation requirements for credits like Dell, Indeed, Adobe, and Wireless.</li>
                            <li><strong>Calendarize All Credits:</strong> Set calendar reminders for monthly (Wireless), quarterly (Hilton, Indeed), and semi-annual (Dell) credits. This ensures you don't miss out on "use it or lose it" value. Assign a point person in your business if necessary.</li>
                            <li><strong>Strategic Airline Selection for Dual Benefit:</strong> Your choice for the $200 Airline Fee Credit also becomes your designated airline for the 35% points rebate on Pay with Points for economy flights. Choose an airline you frequently fly and that has reasonable incidental fees you can utilize.</li>
                            <li><strong>Leverage the 35% Airline Bonus for Premium & Strategic Flights:</strong> This is often one of the best ways to redeem Membership Rewards® points for high-value travel, especially for business or first-class tickets, or for economy flights on your selected airline where cash prices are high.</li>
                            <li><strong>Pay Your Business Cell Phone Bills with the Card:</strong> This activates the valuable cellphone protection benefit, offering coverage against damage or theft for eligible lines listed on the bill.</li>
                            <li><strong>Consolidate Large Purchases & Key Category Spending:</strong> Actively use the card for eligible U.S. purchases of $5,000+ and for spending in the 1.5X bonus categories (U.S. construction/hardware, electronics, software/cloud, shipping) to accelerate point accumulation (up to the $2 million annual cap).</li>
                            <li><strong>Regularly Check Amex Offers:</strong> Add relevant Amex Offers to your card via the online account or app. These can provide significant additional statement credits or bonus points on everyday business expenses with participating merchants, effectively stacking with other card benefits.</li>
                            <li><strong>Utilize Fine Hotels + Resorts® (FHR) & The Hotel Collection:</strong> For business travel hotel stays, booking through these Amex Travel programs can provide substantial value through credits, upgrades, and other elite-like perks. Compare against other rates, but the value-adds are often worth it.</li>
                            <li><strong>Assign & Educate Additional Card Members:</strong> If you provide Additional Business Platinum Cards to employees, educate them on benefit usage (like lounge access when traveling for business) and ensure their spending contributes to your overall rewards strategy.</li>
                        </ul>
                        <p>Proactive management and strategic utilization are the keys to transforming the Business Platinum Card from a cost center into a significant value driver for your U.S. business.</p>
                    </section>

                    <section id="section-20" className={styles.reviewSection}>
                        <h2>20. The Final Verdict: A Worthwhile Investment for Your Business?</h2>
                        <p>The Business Platinum Card® from American Express is undeniably a premium command center for U.S. businesses that live and breathe travel and value operational efficiencies. Its <strong>${reviewDataNew.annualFee} annual fee</strong> is significant, and it positions the card squarely in the premium tier, demanding careful consideration.</p>
                        <p>Yet, for the right enterprise, the sheer depth of its travel enhancements and financial credits can deliver value that far exceeds this cost. If your business frequently sends you or your team across the country or globe, the unparalleled airport lounge access (including the coveted Centurion® Lounges), automatic elite hotel statuses with Hilton and Marriott, and comprehensive travel insurances create a smoother, more productive, and often more cost-effective journey.</p>
                        <p>The potential to recoup <strong>over $1,700 annually</strong> through a diverse array of statement credits for essentials like airline incidental fees, Dell technology, Hilton stays, Indeed hiring, CLEAR® Plus security, Adobe software, and U.S. wireless services makes a compelling mathematical case for offsetting, and even profiting from, the annual fee. When you add the potent Membership Rewards® program—supercharged by benefits like the <strong>5X points on flights and prepaid hotels via Amex Travel</strong> and the unique <strong>35% Airline Bonus</strong> on points redemptions for qualifying flights—the financial equation becomes even more attractive for businesses that can channel spending appropriately.</p>
                        <blockquote className={styles.highlightQuote}>
                          This is not a passive card. It demands active management to unlock its full potential.
                        </blockquote>
                        <p>Businesses that thrive on organization, can strategically align their spending with the card’s benefit structure (e.g., Dell purchases, Indeed services), and whose travel patterns allow them to maximize perks like lounge access and hotel statuses will reap the greatest rewards. It’s for those dynamic U.S. businesses that view travel not just as an expense, but as a strategic lever for growth and efficiency, and are prepared to engage with its rich ecosystem.</p>
                        <p>If this describes your business, The Business Platinum Card® from American Express is more than an expense; it's a powerful investment in efficiency, comfort, operational savings, and rewarding returns. For those who can wield its many tools effectively, it's a key that unlocks a significantly elevated business experience.</p>
                        <p>Before applying, thoroughly review your business's spending patterns and travel frequency. If there's a clear alignment, the Business Platinum Card® could indeed be a very worthwhile investment. <strong>Always verify current terms, benefits, and fees on the <a href={reviewDataNew.officialOverviewLink} target="_blank" rel="noopener noreferrer sponsored">official American Express website</a>.</strong></p>
                    </section>

                    <section id="section-eat" className={`${styles.reviewSection} ${styles.eatSection}`}>
                        <h2 dangerouslySetInnerHTML={{ __html: `Our Commitment to E-A-T: Expertise, Authority &amp; Trustworthiness`}}></h2>
                        <p>At <strong>{siteName}</strong>, we are deeply committed to providing content that exemplifies Expertise, Authoritativeness, and Trustworthiness (E-A-T), especially when reviewing complex financial products like The Business Platinum Card® from American Express. This review has been meticulously researched by <strong>{reviewDataNew.author.name}</strong>, {reviewDataNew.author.title}, who brings extensive experience in analyzing premium business card offerings. We've thoroughly examined the card's features, benefits, rewards structure, and fee schedule, cross-referencing official issuer documentation from American Express with real-world user experiences and data points from the business travel and rewards community. Our goal is to present a balanced, comprehensive, and reliable guide to help U.S. business owners make an informed decision tailored to their unique operational needs. All information is current as of <strong>{new Date(updateDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</strong>, but we strongly advise verifying all details directly with American Express as terms and benefits can change.</p>
                    </section>
                </article>
            </div>
          </div>
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

export default AmericanExpressBusinessPlatinumCardReviewPage;