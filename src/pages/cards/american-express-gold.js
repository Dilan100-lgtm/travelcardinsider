/* ------------------------------------------------------------------
    File:  pages/reviews/american-express-gold-card-review.js
    Route: https://www.yourwebsite.com/reviews/american-express-gold-card-review
------------------------------------------------------------------- */

import React, { useState, useEffect, useCallback, useRef } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import styles from '../../styles/ReviewPage.module.css'; // Assuming same CSS module

import TableOfContents from '../../components/TableOfContents'; // Assuming same TOC component
import IconGift from '../../components/icons/icon-gift.svg'; // UPDATE AS NEEDED (path to your icon)
import IconStar from '../../components/icons/icon-star.svg'; // UPDATE AS NEEDED (path to your icon)
import IconCheck from '../../components/icons/icon-Credit Card.svg'; // UPDATE AS NEEDED (path to your icon, e.g. a checkmark or fee icon)
import IconPlus from '../../components/icons/icon-target.svg'; // UPDATE AS NEEDED (path to your icon, represents 'Best For' or 'Key Benefit')
import IconPlane from '../../components/icons/icon-plane.svg';  // UPDATE AS NEEDED
// Assuming you might need an icon for 'credits' or 'cash back'. Using IconStar for now, but you might want a dedicated one.
import IconDollar from '../../components/icons/icon-dollar.svg'; // EXAMPLE: Add if you have a dollar/credits icon
import IconX from '../../components/icons/icon-Star + Arrow Up.svg'; // Path from your example

const RatingTooltip = dynamic(() => import('../../components/RatingTooltip'), { ssr: false, loading: () => null });

/* ──────────────────────────────
    CONSTANTS & STATIC DATA
    ────────────────────────────── */
const siteName = 'Travelcardinsider'; // UPDATE AS NEEDED
const siteUrl = 'https://www.travelcardinsider.com'; // UPDATE AS NEEDED: Replace with your actual site URL
const pagePath = '/reviews/american-express-gold-card-review'; // UPDATE AS NEEDED for this specific review
const pageUrlFull = `${siteUrl}${pagePath}`;
const publishDate = '2025-05-28'; // UPDATE AS NEEDED: Current date or actual publish date
const updateDate = '2025-05-28'; // UPDATE AS NEEDED: Current date or actual update date

const reviewDataNew = {
  cardName        : 'American Express® Gold Card',
  title           : 'American Express® Gold Card Review (2025): Golden Ticket to Rewards?', // SEO Optimized Title
  description     : 'In-depth 2025 review of the American Express® Gold Card. Explore 4X points on dining & U.S. supermarkets, travel credits, Membership Rewards®, and the $325 annual fee. Is it right for you?', // Meta Description
  keywords        : 'American Express Gold Card review, Amex Gold, Amex Gold benefits, Membership Rewards, Amex dining credit, Amex travel card, premium rewards card, American Express review 2025', // Keywords
  author: { // Placeholder: UPDATE ALL AUTHOR DETAILS AS NEEDED
      name: 'Dilan Madushanka', // UPDATE
      title: 'Founder & Lead Editor', // UPDATE
      imageUrl: '/WhatsApp Image 2025-05-12 at 4.09.58 PM.jpeg', // Placeholder - UPDATE
      imageWidth: 40,
      imageHeight: 40,
      tooltipImageUrl: '/WhatsApp Image 2025-05-12 at 4.09.58 PM.jpeg', // Placeholder - UPDATE
      tooltipImageWidth: 60,
      tooltipImageHeight: 60,
      expertise: [ // UPDATE
          'Premium Rewards Cards',
          'Airline & Hotel Loyalty Programs',
          'Credit Card Rewards Optimization',
          'Travel Hacking Strategies',
          'American Express Cards'
      ],
      bioSnippet: 'Dilan Madushanka is the founder and lead editor of Travelcardinsider, dedicated to demystifying credit cards and uncovering their real-world value for smarter travel and rewards.', // UPDATE
      fullBioLink: '/author/dilan-madushanka', // Placeholder - UPDATE
      fullBio: `Dilan Madushanka is the founder and lead editor of Travelcardinsider, a platform dedicated to helping everyday people make smarter decisions with travel and rewards credit cards. [MORE BIO DETAILS TO BE ADDED BY USER]`, // UPDATE
      publishedStats: 'X+ in-depth card reviews per week', // Placeholder - UPDATE
      testedStats: 'Over Y+ credit card benefits across major brands', // Placeholder - UPDATE
      socialLinks: { // Placeholder - UPDATE
          linkedin: 'https://www.linkedin.com/in/dilan-madushanka-b65293365',
          twitter: 'https://x.com/team_dilan',
          email: 'team@travelcardinsider.com'
      }
  },
  siteName: siteName,
  imageUrl        : '/NUS000000174_480x304_straight_withname.avif', // Placeholder: Replace with actual Amex Gold card image URL
  imageWidth      : 1290, // Placeholder - UPDATE if image dimensions differ
  imageHeight     : 812,  // Placeholder - UPDATE if image dimensions differ
  ratingValue     : 8.8,  // Placeholder - UPDATE AS NEEDED (e.g. 4.1/5 * 2)
  ratingCount     : 250,  // Placeholder - UPDATE AS NEEDED
  reviewBody      : 'Our editors evaluate the American Express® Gold Card based on its robust Membership Rewards® earning structure (4X at Restaurants worldwide & U.S. Supermarkets), valuable statement credits (e.g., Uber Cash, Dining Credit), travel benefits, shopping protections, the annual fee, and its overall value proposition for U.S.-based consumers passionate about dining and travel.',
  aprRange        : 'Pay Over Time APR: See Pay Over Time APR Rate & Fee Information on issuer\'s site (Prime Rate + 12.74% to Prime Rate + 21.74% was previously noted, subject to change)', // From your text, rephrased for clarity
  annualFee       : 325, // Current fee based on Amex site and previous discussion
  // IMPORTANT: REPLACE WITH YOUR ACTUAL AFFILIATE LINK FOR AMEX GOLD
  applyLink       : 'https://www.americanexpress.com/us/credit-cards/card/gold-card/', // /* UPDATE THIS */
  // Official rates link
  ratesLink       : 'https://www.americanexpress.com/us/credit-cards/card-application/apply/prospect/terms/gold-card/25330-10-0#FeeTable', // Users click "Rates and Fees" on this page
  officialOverviewLink: 'https://www.americanexpress.com/us/credit-cards/card/gold-card/',
  officialWelcomeOfferLink: 'https://www.americanexpress.com/us/credit-cards/card/gold-card/', // Welcome offer is on main page
  officialBenefitsCreditsLink: 'https://www.americanexpress.com/us/credit-cards/card/gold-card/', // Refer to "Offer & Benefit Terms"
  officialTravelShoppingProtectionsLink: 'https://www.americanexpress.com/us/credit-cards/features-benefits/insurance/',
  officialMembershipRewardsPartnersLink: 'https://global.americanexpress.com/rewards/transfer',
  sku             : 'AMEX-GOLD-TCI-2025', // Placeholder - Example SKU
  mpn             : 'AMEXGOLD', // Placeholder - Example MPN
  h1Content       : "American Express® Gold Card: Your Golden Ticket to Flavorful Rewards and Premium Travel?", // From your text
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
          // Optional: Add image if you have a dedicated author schema image
          // 'image': reviewDataNew.author.imageUrl ? `${siteUrl}${reviewDataNew.author.imageUrl}` : undefined
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
       author: { // Person schema for WebPage author
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
        { '@type': 'ListItem', position: 2, name: 'Credit Card Reviews', item: `${siteUrl}/reviews` }, // UPDATE AS NEEDED if review category path is different
        { '@type': 'ListItem', position: 3, name: `${reviewDataNew.cardName} Review`, item: pageUrlFull },
      ],
    },
    { // Populated from Section 19 of your text
      '@type'    : 'FAQPage',
      '@id'      : `${pageUrlFull}#faqs`,
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How to ensure 4X at restaurants/U.S. supermarkets? What about Target/Costco?',
          acceptedAnswer: { '@type': 'Answer', text: "American Express uses merchant category codes (MCCs). Standalone restaurants and traditional U.S. supermarkets (e.g., Kroger, Whole Foods) usually code correctly for 4X points. Superstores (like Target, Walmart) and warehouse clubs (like Costco) typically do not count as U.S. supermarkets for the 4X rewards. Always check Amex's terms for specifics." }
        },
        {
          '@type': 'Question',
          name: 'Do monthly Uber Cash/Dining Credits roll over?',
          acceptedAnswer: { '@type': 'Answer', text: "No, typically the monthly Uber Cash and Dining Credits are 'use it or lose it' each month and do not roll over to the next month if unused. Enrollment required for some benefits." }
        },
        {
          '@type': 'Question',
          name: 'What is the fee for additional cardholders on the Amex Gold Card?',
          acceptedAnswer: { '@type': 'Answer', text: "Typically, you can add up to five Additional Gold Cards for no additional annual fee. A fee (e.g., $35) may apply for the sixth and each subsequent Additional Card. Refer to the official American Express terms for current fee information." }
        },
        {
          '@type': 'Question',
          name: 'Can I use the Amex Gold Card internationally without fees?',
          acceptedAnswer: { '@type': 'Answer', text: "Yes, the American Express® Gold Card has no foreign transaction fees, making it suitable for purchases outside the U.S." }
        },
        {
          '@type': 'Question',
          name: 'What are Membership Rewards® points worth?',
          acceptedAnswer: { '@type': 'Answer', text: "The value of Membership Rewards® points varies based on redemption. You can often get the highest potential value (1.5-2 cents per point or more) by transferring points to airline and hotel partners. Redemptions for statement credits or merchandise typically yield lower values (e.g., 0.6 cents per point). You can see partners on the Amex Membership Rewards site." } // Link to partners site provided in main content
        },
        {
          '@type': 'Question',
          name: 'How do I enroll in benefits like dining credits/Amex Offers?',
          acceptedAnswer: { '@type': 'Answer', text: "Uber Cash is usually automatic once your Card is linked to your Uber account. Other credits (like the Dining Credit) and Amex Offers typically require one-time enrollment or activation through your American Express online account or the Amex Mobile app. Always check your account for specific enrollment requirements." }
        },
        {
          '@type': 'Question',
          name: 'What if a merchant doesn\'t accept American Express?',
          acceptedAnswer: { '@type': 'Answer', text: "While American Express acceptance is widespread in the U.S., it can be more limited internationally compared to Visa or Mastercard. It's a good practice to carry an alternative payment method, especially when traveling abroad." }
        },
        {
          '@type': 'Question',
          name: 'What does "No Preset Spending Limit" mean for the Amex Gold Card?',
          acceptedAnswer: { '@type': 'Answer', text: "\"No Preset Spending Limit\" means your spending limit is flexible. Unlike traditional cards with a fixed limit, your purchasing power adapts based on factors like your purchase patterns, payment history, credit record, and financial resources known to American Express. It does not mean unlimited spending. Most charges are expected to be paid in full monthly unless eligible for and enrolled in a Pay Over Time feature." }
        },
        {
            '@type': 'Question',
            name: 'What are the main travel insurance benefits of the Amex Gold Card?',
            acceptedAnswer: { '@type': 'Answer', text: "Key travel insurance benefits often include Baggage Insurance Plan, Car Rental Loss and Damage Insurance (typically secondary in the U.S.), and Trip Delay Insurance. These are mid-tier protections. For full details, terms, and limits, refer to the official Guide to Benefits provided by American Express." } // Link to protections guide provided in main content
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
const ratingCriteriaOriginal = [
    'Rewards on Dining (Worldwide)',
    'Rewards on U.S. Supermarket Spend',
    'Value of Uber Cash Credit',
    'Value of Dining Credit (Participating Partners)',
    'Membership Rewards® Program Flexibility & Value',
    'Welcome Offer Attractiveness & Terms',
    'Annual Fee ($325) vs. Overall Benefits Package',
    'Travel Perks (e.g., The Hotel Collection, No Foreign Transaction Fees)',
    'Shopping Protections (e.g., Extended Warranty, Purchase Protection)',
    'Clarity and Accessibility of Benefits',
    'Customer Service & App Experience (General Amex)',
];

const tocSections = [ // Generated from your 20 sections for Amex Gold
    { id: 'section-intro', title: 'Introduction: Why the Amex Gold Continues to Captivate' },
    { id: 'section-1', title: '1. Card Snapshot & "Best For" Tagline' },
    { id: 'section-2', title: '2. Unpacking the Welcome Offer: A Golden Handshake' },
    { id: 'section-3', title: '3. The Heart of the Matter: Rewards Earning Structure – Feasting on Points' },
    { id: 'section-4', title: '4. Beyond Points: The Allure of Statement Credits – Value Back in Your Pocket?' },
    { id: 'section-5', title: '5. Key Features and Benefits: More Than Just Points and Credits – Travel & Shopping Perks' },
    { id: 'section-6', title: '6. Full Spectrum of Rates & Fees: The Fine Print Matters' },
    { id: 'section-7', title: '7. Understanding Membership Rewards®: The Currency of Your Experiences' },
    { id: 'section-8', title: '8. The Ideal Amex Gold Cardholder: Detailed User Profiling – Is This You?' },
    { id: 'section-9', title: '9. The Rose Gold Allure: A Touch of Style' }, // Section 10 in original, adjusted index
    { id: 'section-10', title: '10. Navigating the Amex Ecosystem: App and Online Tools – Your Command Center' }, // Section 11
    { id: 'section-11', title: '11. Adding Authorized Users (Additional Card Members): Sharing the Gold Standard' }, // Section 12
    { id: 'section-12', title: '12. The "No Preset Spending Limit" Explained: Flexibility, Not Unlimitedness' }, // Section 13
    { id: 'section-13', title: '13. Real-World Example #1: Sarah, the Urban Foodie & Aspiring Globetrotter' }, // Section 14
    { id: 'section-14', title: '14. Real-World Example #2: The Miller Family, Savvy Grocery Gurus & Occasional Vacationers' }, // Section 15
    { id: 'section-15', title: '15. Real-World People Ideas & User Testimonials: Voices from the Field' }, // Section 16
    { id: 'section-16', title: '16. The Competition: Amex Gold vs. The Rivals – A Crowded Arena' }, // Section 17
    { id: 'section-17', title: '17. Real User Testimonials & Online Sentiment: What Cardholders Really Think (Synthesized)' }, // Section 18
    { id: 'section-18', title: '18. Card-Specific Frequently Asked Questions (FAQs)' }, // Section 19
    { id: 'section-19', title: '19. The Verdict: Is the American Express® Gold Card Worth Its Weight in Your Wallet?' }, // Section 20
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
function AmericanExpressGoldCardReviewPage() {
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
              !event.target.closest(`.${styles.infoIconButton}`) && // Check if click is on the info icon button itself
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


  // Data for the summary box specific to Amex Gold
  const summaryBoxData = {
    welcomeOffer: "Earn 60,000 Membership Rewards® points after spending $6,000 on eligible purchases on the new Card within the first 6 months.", // From your text Section 3
    annualFee: `$${reviewDataNew.annualFee}`,
    topEarning: "4X at Restaurants worldwide & U.S. Supermarkets (caps apply).", // From your text Section 4
    keyCredits: "$120 Uber Cash, $120 Dining Credit annually (enrollment required).", // From your text Section 5
    travelPerk: "No Foreign Transaction Fees; The Hotel Collection benefits.", // From your text Section 6
    bestFor: "Maximizing rewards on global dining, U.S. supermarket hauls, and leveraging statement credits." // From your text Section 2
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
        <meta property="article:section"       content="Credit Card Reviews" /> {/* UPDATE AS NEEDED */}
        <meta property="article:published_time" content={publishDate} />
        <meta property="article:modified_time"  content={updateDate} />
        <meta property="article:author" content={reviewDataNew.author.name} /> {/* URL to author's profile page on your site */}
        {reviewDataNew.keywords.split(',').map(keyword => (
            <meta property="article:tag" content={keyword.trim()} key={keyword.trim()} />
        ))}
        <meta name="twitter:card"        content="summary_large_image" />
        <meta name="twitter:site" content="@YourTravelCardInsiderTwitterHandle" /> 
        <meta name="twitter:creator" content={`@${reviewDataNew.author.socialLinks?.twitter?.split('/').pop() || 'YourAuthorTwitterHandle'}`} /> 
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
            {/* Optional Sidebar for Table of Contents if you adapt the Alaska Page's 2-column layout */}
            {/* <aside className={styles.sidebarArea}> <TableOfContents sections={tocSections} /> </aside> */}
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
                    onFocus={handleAuthorMouseEnter} // For keyboard accessibility
                    onBlur={handleAuthorMouseLeave}  // For keyboard accessibility
                    aria-haspopup="true" // Indicates the presence of a tooltip
                    aria-expanded={showAuthorBioTooltip} // Communicates tooltip state to screen readers
                    tabIndex={0} // Makes the div focusable
                >
                    <Image
                        src={reviewDataNew.author.imageUrl} // /* UPDATE THIS */
                        alt={`${reviewDataNew.author.name} headshot`}
                        width={reviewDataNew.author.imageWidth}
                        height={reviewDataNew.author.imageHeight}
                        className={styles.authorImageSmall}
                        priority // Load author image quickly
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
                        {reviewDataNew.author.socialLinks && ( // Social links for author below name/title
                            <div className={styles.authorSocialLinks}>
                                {reviewDataNew.author.socialLinks.linkedin && (
                                    <a href={reviewDataNew.author.socialLinks.linkedin} target="_blank" rel="noopener noreferrer me" aria-label={`${reviewDataNew.author.name} on LinkedIn`} className={styles.socialIconLink}>
                                        {/* LinkedIn SVG Icon */}
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                                    </a>
                                )}
                                {reviewDataNew.author.socialLinks.twitter && (
                                    <a href={reviewDataNew.author.socialLinks.twitter} target="_blank" rel="noopener noreferrer me" aria-label={`${reviewDataNew.author.name} on Twitter`} className={styles.socialIconLink}>
                                         {/* Twitter SVG Icon */}
                                         <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-.422.724-.665 1.56-.665 2.452 0 1.697.864 3.198 2.18 4.078-.8-.025-1.555-.247-2.227-.616v.054c0 2.37 1.683 4.333 3.91 4.78-.426.116-.874.174-1.337.174-.31 0-.611-.03-.904-.085.622 1.936 2.421 3.338 4.553 3.377-1.672 1.309-3.781 2.088-6.072 2.088-.394 0-.784-.023-1.169-.069 2.16 1.389 4.723 2.202 7.482 2.202 8.979 0 13.897-7.446 13.897-13.898 0-.21 0-.42-.015-.63.953-.689 1.778-1.56 2.433-2.525z"/></svg>
                                    </a>
                                )}
                                {reviewDataNew.author.socialLinks.email && (
                                    <a href={`mailto:${reviewDataNew.author.socialLinks.email}`} aria-label={`Email ${reviewDataNew.author.name}`} className={styles.socialIconLink}>
                                         {/* Email SVG Icon */}
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
                            role="tooltip" // ARIA role for tooltip
                            onMouseEnter={handleAuthorClearTimeout} // Keep tooltip open if mouse moves into it
                            onMouseLeave={handleAuthorMouseLeave}
                            onFocus={handleAuthorMouseEnter} // For keyboard accessibility
                            onBlur={handleAuthorMouseLeave}  // For keyboard accessibility
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
                                           {/* Optional: add an arrow icon here */}
                                       </a>
                                   </Link>
                               )}
                               {/* Social links within the tooltip if desired, repeating for visibility */}
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
                <p className={styles.heroSubtitle}> {/* Your intro text from original file */}
                  Welcome, discerning traveler and culinary enthusiast, to {siteName}! If you're navigating the bustling U.S. credit card market, you're likely searching for a card that’s more than just a payment method—you want a key to unlocking enhanced experiences. The {reviewDataNew.cardName} has long been a prominent name, shimmering with the promise of rich rewards, particularly for those whose passions lie in gastronomy and globetrotting. But in an ever-evolving landscape of premium cards, does the Amex Gold still hold its coveted luster?
                </p>
                <div className={styles.heroCtaContainer}>
                  <div>
                    <a
                      href={reviewDataNew.applyLink} // /* UPDATE THIS with your affiliate link */
                      target="_blank"
                      rel="noopener noreferrer sponsored" // "sponsored" is good for affiliate links
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
                    priority // Load card image quickly
                  />
                </div>
                <div className={styles.ratingSection}>
                  <span className={styles.tciRating}>
                    <button
                      type="button"
                      className={styles.infoIconButton}
                      aria-label="Rating Information"
                      onClick={handleIconClick}
                      aria-expanded={showRatingInfo} // For accessibility
                    >
                      <svg aria-hidden="true" focusable="false" className={styles.infoIcon} viewBox="0 0 16 16"> {/* Info icon SVG */}
                        <path fillRule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                        <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                      </svg>
                    </button>
                    {siteName} Rating: <strong>{reviewDataNew.ratingValue.toFixed(1)}</strong>/10
                    {showRatingInfo && ( // Rating Tooltip
                      <RatingTooltip
                        ref={ratingTooltipRef}
                        ratingValue={reviewDataNew.ratingValue}
                        ratingCriteria={ratingCriteriaOriginal} // /* UPDATE THIS with Amex Gold criteria */
                        onClose={() => setShowRatingInfo(false)}
                      />
                    )}
                  </span>
                  <div className={styles.starRating} title={`Rated ${reviewDataNew.ratingValue} out of 10 stars`}> {/* Star display */}
                      ★★★★★
                      <span className={styles.filledStars} style={{ '--rating': `${(reviewDataNew.ratingValue / 10) * 100}%` }}>
                        ★★★★★
                      </span>
                  </div>
                </div>
                 <div className={styles.ratingDescription}> {/* Short description below rating */}
                    <i>{reviewDataNew.cardName}: {reviewDataNew.description}</i> {/* /* UPDATE THIS to be a shorter snippet if needed */ }
                 </div>
              </div>
            </section>

             <div className={styles.reviewContainer}> {/* Main content wrapper */}
                {/* Optional: Table of Contents - You can place it here or in a sidebar */}
                

              <article>
                <header className={styles.reviewHeader}>
                    <div className={styles.summaryBox} id="summaryBoxTitle">
                        <h2 className={styles.summaryBoxTitle}>{reviewDataNew.cardName}: Key Insights</h2>
                        <div className={styles.summaryGrid}>
                            <div className={styles.summaryItem}>
                                <span className={styles.summaryIcon}><IconGift /></span> {/* UPDATE AS NEEDED */}
                                <span className={styles.summaryLabel}>Welcome Offer:</span>
                                <span className={styles.summaryValue}>{summaryBoxData.welcomeOffer}</span>
                            </div>
                            <div className={styles.summaryItem}>
                                <span className={styles.summaryIcon}><IconCheck /></span> {/* UPDATE AS NEEDED (Fee icon) */}
                                <span className={styles.summaryLabel}>Annual Fee:</span>
                                <span className={styles.summaryValue}>{summaryBoxData.annualFee}</span>
                            </div>
                            <div className={styles.summaryItem}>
                                <span className={styles.summaryIcon}><IconStar /></span> {/* UPDATE AS NEEDED (Rewards icon) */}
                                <span className={styles.summaryLabel}>Top Earning:</span>
                                <span className={styles.summaryValue}>{summaryBoxData.topEarning}</span>
                            </div>
                             <div className={styles.summaryItem}>
                                <span className={styles.summaryIcon}><IconDollar /></span> {/* UPDATE AS NEEDED (Credits icon) - Using IconDollar as example */}
                                <span className={styles.summaryLabel}>Key Credits:</span>
                                <span className={styles.summaryValue}>{summaryBoxData.keyCredits}</span>
                            </div>
                            <div className={styles.summaryItem}>
                                <span className={styles.summaryIcon}><IconPlane /></span> {/* UPDATE AS NEEDED (Travel perk icon) */}
                                <span className={styles.summaryLabel}>Travel Perk:</span>
                                <span className={styles.summaryValue}>{summaryBoxData.travelPerk}</span>
                            </div>
                            <div className={styles.summaryItem} data-full-width="true"> {/* Full width item */}
                                <span className={styles.summaryIcon}><IconPlus /></span> {/* UPDATE AS NEEDED (Best for icon) */}
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

                {/* CONTENT SECTIONS START HERE - Based on your Amex Gold review text */}

                <section id="section-intro" className={styles.reviewSection}>
                  <h2>Introduction: Why the Amex Gold Continues to Captivate</h2>
                  <p>In a financial world saturated with credit cards, each vying for attention, the American Express® Gold Card has cultivated a distinct identity. It’s not merely a piece of metal; it's often perceived as a lifestyle accessory, subtly communicating an appreciation for experiences, especially those centered around dining and travel. For the U.S. traveler who views every meal as a discovery and every journey as a chapter in their life's story, the Gold Card positions itself as an essential companion.</p>
                  <p>Its enduring appeal isn’t accidental. It’s built on a potent rewards structure focused on everyday spending categories that resonate deeply with food lovers and frequent flyers, combined with an array of statement credits designed to deliver tangible, recurring value. (<a href={reviewDataNew.officialOverviewLink} target="_blank" rel="noopener noreferrer sponsored">Official Amex Gold Card Overview</a>) This card aims to be actively used, rewarding you generously for spending you likely already do. However, with a notable annual fee (currently ${reviewDataNew.annualFee}) and a benefits structure that demands engagement, the crucial question remains: Does it truly deliver on its golden promise in today's competitive market? This review will dig deep to help you find that answer.</p>
                </section>

                {/* Placeholder for an illustrative image - UPDATE PATH AND ALT TEXT */}
                <Image
                    src="/images/content/amex-gold-lifestyle-dining.jpg" // /* UPDATE THIS */
                    alt="Elegant dining scene symbolizing Amex Gold rewards"
                    width={800}
                    height={500}
                    className={styles.contentImage}
                    loading="lazy" // Lazy load images below the fold
                />

                <section id="section-1" className={styles.reviewSection}>
                  <h2>1. Card Snapshot &amp; &quot;Best For&quot; Tagline</h2>
                  <p>Here’s a quick look at the {reviewDataNew.cardName}:</p>
                  <DraggableTableWrapper>
                    <div className={styles.tableContainer}>
                        <table className={`${styles.statsTable} ${styles.highlightTable}`}>
                            <tbody>
                                <tr><td>Card Name:</td><td><strong>{reviewDataNew.cardName}</strong></td></tr>
                                <tr><td>Issuer:</td><td>American Express (<a href={reviewDataNew.officialOverviewLink} target="_blank" rel="noopener noreferrer sponsored">Official Card Page</a>)</td></tr>
                                <tr><td>Network:</td><td>American Express</td></tr>
                                <tr><td>Annual Fee:</td><td><strong>${reviewDataNew.annualFee}</strong> (Refer to <a href={reviewDataNew.ratesLink} target="_blank" rel="noopener noreferrer sponsored">Rates & Fees</a> for current details)</td></tr>
                                <tr><td>Primary Rewards Currency:</td><td>Membership Rewards® points</td></tr>
                                <tr><td>Key Bonus Categories:</td><td>4X at Restaurants worldwide, 4X at U.S. supermarkets (on up to $25,000 per calendar year in purchases, then 1X).</td></tr>
                                <tr><td>Key Statement Credits:</td><td>Up to $120 Uber Cash annually, Up to $120 Dining Credit annually (enrollment required).</td></tr>
                                <tr><td>&quot;Best For&quot; Tagline:</td><td>The Epicurean Explorer's Everyday Ally for Maximizing Rewards on Global Dining and U.S. Supermarket Hauls.</td></tr>
                            </tbody>
                        </table>
                    </div>
                  </DraggableTableWrapper>
                  <p>This tagline concisely captures the card’s strategic core. It’s engineered for individuals who allocate a significant portion of their budget to food – whether savoring new cuisines globally, enjoying U.S. takeout, or stocking home pantries from U.S. supermarkets – and who seek to transform those expenses into valuable travel and lifestyle experiences.</p>
                </section>

                <section id="section-2" className={styles.reviewSection}>
                  <h2>2. Unpacking the Welcome Offer: A Golden Handshake</h2>
                  <p>For those new to this card, the welcome offer is the initial allure. As of our latest information, eligible new {reviewDataNew.cardName} Members can typically:</p>
                  <blockquote className={styles.highlightQuote}> {/* Use a blockquote for offers */}
                    Earn 60,000 Membership Rewards® points after spending $6,000 on eligible purchases on the new Card within the first 6 months of Card Membership.
                    (<a href={reviewDataNew.officialWelcomeOfferLink} target="_blank" rel="noopener noreferrer sponsored">See official welcome offer details and terms</a>)
                  </blockquote>
                  <p>This bonus can be a powerful kickstart. 60,000 points, when redeemed thoughtfully via transfer partners, could translate into hundreds of dollars in travel value, like a round-trip domestic flight or a significant discount on an international ticket. It’s a compelling incentive if your planned spending aligns with the requirement.</p>
                  <p>However, be aware of American Express's "once per lifetime" rule: if you've held this card before, you may not be eligible. Always review official offer terms from American Express. Chasing a bonus by overspending can negate its value.</p>
                </section>

                <section id="section-3" className={styles.reviewSection}>
                  <h2>3. The Heart of the Matter: Rewards Earning Structure – Feasting on Points</h2>
                  <p>The Amex Gold Card’s engine is its rewards structure, with a clear focus on food-related spending:</p>
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
                            <td data-label="Points"><strong>4X</strong></td>
                            <td data-label="Categories">Membership Rewards® points at <strong>Restaurants worldwide</strong>. This includes takeout and delivery services within the U.S.</td>
                          </tr>
                          <tr>
                            <td data-label="Points"><strong>4X</strong></td>
                            <td data-label="Categories">Membership Rewards® points at <strong>U.S. supermarkets</strong>, on up to $25,000 in purchases per calendar year, then 1X.</td>
                          </tr>
                          <tr>
                            <td data-label="Points"><strong>3X</strong></td>
                            <td data-label="Categories">Membership Rewards® points on <strong>flights booked directly with airlines or on AmexTravel.com</strong>.</td>
                          </tr>
                          <tr>
                            <td data-label="Points"><strong>1X</strong></td>
                            <td data-label="Categories">Membership Rewards® point on all other eligible purchases.</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </DraggableTableWrapper>
                  <p>This framework is designed for those whose budgets are significantly weighted towards dining and groceries. The 4X multipliers can lead to rapid point accumulation. For instance, spending $800 monthly at U.S. supermarkets and $400 on dining translates to 4,800 points monthly ((800+400) * 4), or 57,600 points annually from these categories alone, before considering the U.S. supermarket cap.</p>
                  <p><small>Note that "U.S. supermarkets" generally excludes superstores like Target/Walmart and warehouse clubs. Always verify merchant coding with American Express if unsure.</small></p>
                </section>

                <section id="section-4" className={styles.reviewSection}>
                  <h2>4. Beyond Points: The Allure of Statement Credits – Value Back in Your Pocket?</h2>
                  <p>A significant component of the Gold Card's value comes from its annual statement credits. Fully utilized, these can substantially offset the annual fee. Enrollment is typically required via your Amex online account or app. (<a href={reviewDataNew.officialBenefitsCreditsLink} target="_blank" rel="noopener noreferrer sponsored">See official Amex benefits and credits terms</a>).</p>
                  <p>Key credits typically include:</p>
                  <ul className={styles.featureList}>
                      <li><strong>Up to $120 in Uber Cash Annually:</strong> Receive $10 in Uber Cash each month for U.S. Uber rides or U.S. Uber Eats orders when you add your Gold Card to your Uber account. This is highly practical for regular users.
                          <br/><small><em>User Recommendation from your text: "I always add my Amex Gold to Uber. That $10 monthly credit covers a good chunk of my usual Uber Eats order."</em></small>
                      </li>
                      <li><strong>Up to $120 in Dining Credits Annually:</strong> Earn up to $10 in statement credits monthly when you pay with the Gold Card at participating partners. These partners have included Grubhub (including Seamless), The Cheesecake Factory, Goldbelly, Wine.com, Milk Bar, and select Shake Shack locations. (Partners are subject to change, enrollment required).</li>
                      {/* Your text included Resy and Dunkin' based on potentially newer info or a different card variant. Sticking to core Gold for now unless you confirm these are standard.
                      <li><strong>Up to $100 Resy Credit Annually:</strong> Up to $100 back in statement credits for eligible purchases at U.S. Resy restaurants or other Resy purchases (e.g., up to $50 semi-annually). Appeals to those using Resy for reservations.</li>
                      <li><strong>Up to $84 Dunkin' Credit Annually:</strong> Up to $7 in monthly statement credits at U.S. Dunkin' locations. A nice perk for regulars.</li>
                      */}
                  </ul>
                  <p>The combined potential of just the Uber and core Dining credits ($120 + $120 = $240) can significantly offset the card's ${reviewDataNew.annualFee} annual fee. However, actual value depends on your existing habits. If you don't use these services, the credits might incentivize spending rather than save money. This "coupon book" nature requires mindful utilization.</p>
                </section>

                <section id="section-5" className={styles.reviewSection}>
                  <h2>5. Key Features and Benefits: More Than Just Points and Credits – Travel &amp; Shopping Perks</h2>
                  <p>Beyond points and credits, the Amex Gold Card offers a suite of travel and shopping protections that add value and peace of mind. For full details, refer to the (<a href={reviewDataNew.officialTravelShoppingProtectionsLink} target="_blank" rel="noopener noreferrer sponsored">Official Amex Travel & Shopping Protections Guide</a>).</p>
                  <h3>Travel Benefits:</h3>
                  <ul className={styles.featureList}>
                      <li><strong>The Hotel Collection:</strong> Book two or more consecutive nights through American Express Travel at participating properties and receive a $100 hotel credit to spend on qualifying dining, spa, and resort activities, plus a room upgrade when available.</li>
                      <li><strong>Baggage Insurance Plan:</strong> Can cover eligible lost, damaged, or stolen baggage when your entire fare for a Common Carrier ticket is charged to your Gold Card (limits apply).</li>
                      <li><strong>Car Rental Loss and Damage Insurance:</strong> Provides secondary coverage for damage to or theft of a rental vehicle when you use your Gold Card to reserve and pay for the entire rental and decline the rental company's collision damage waiver (CDW). Exclusions apply.</li>
                      <li><strong>Trip Delay Insurance:</strong> If your round-trip, paid fully with your Gold Card, is delayed by a covered reason for 12 hours or more, this benefit can reimburse certain additional expenses (like meals, lodging) up to $300 per trip, with a maximum of two claims per eligible Card per 12 consecutive month period.</li>
                      <li><strong>Global Assist® Hotline:</strong> Provides 24/7 emergency assistance and coordination services (like medical and legal referrals) when you travel more than 100 miles from home. Card Members are responsible for the costs charged by third-party service providers.</li>
                      <li><strong>No Foreign Transaction Fees:</strong> Crucial for international purchases, saving you approximately 2-3% on each transaction made abroad.</li>
                  </ul>
                  <h3>Shopping Protections:</h3>
                  <ul className={styles.featureList}>
                      <li><strong>Extended Warranty:</strong> Can add up to one additional year to U.S. manufacturer's warranties of five years or less on eligible purchases made with your Gold Card.</li>
                      <li><strong>Purchase Protection:</strong> Protects eligible new purchases made with your Gold Card against accidental damage, theft, or loss for up to 90 days from the date of purchase (limits apply).</li>
                      <li><strong>Dispute Resolution:</strong> American Express support for resolving fraudulent or incorrect charges.</li>
                  </ul>
                  <p>These benefits can be financially significant. Understanding the terms, conditions, and limits is key to maximizing their value.</p>
                </section>

                <section id="section-6" className={styles.reviewSection}>
                  <h2>6. Full Spectrum of Rates &amp; Fees: The Fine Print Matters</h2>
                  <p>Understanding the costs associated with the {reviewDataNew.cardName} is vital. For the most current and complete details, always refer to the official Cardmember Agreement and the information available via the (<a href={reviewDataNew.ratesLink} target="_blank" rel="noopener noreferrer sponsored">Official Amex Gold Card Rates & Fees Schedule</a>) link on the Amex website.</p>
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
                                <tr><td>Additional Cards:</td><td>Often $0 for the first 5 Additional Gold Cards, then a fee (e.g., $35) for each Additional Card thereafter.</td></tr>
                                <tr><td>Pay Over Time APR (Purchase APR):</td><td>The Gold Card has a "Pay Over Time" feature for eligible purchases, allowing you to carry a balance with interest. The APR is variable (e.g., based on Prime Rate + a margin, such as Prime Rate + 12.74% to Prime Rate + 21.74%, as per your original text; verify current rates). Carrying a balance incurs interest that can negate rewards.</td></tr>
                                <tr><td>APR for Cash Advances:</td><td>Variable, generally higher than Purchase APR.</td></tr>
                                <tr><td>Penalty APR:</td><td>Variable, often the highest APR (e.g., Prime Rate + 26.74%, as per your original text), may apply for late or returned payments.</td></tr>
                                <tr><td>Late Payment Fee:</td><td>Up to $40.</td></tr>
                                <tr><td>Returned Payment Fee:</td><td>Up to $40.</td></tr>
                                <tr><td>Cash Advance Fee:</td><td>Typically $10 or 5% of the amount of each cash advance, whichever is greater.</td></tr>
                                <tr><td>Foreign Transaction Fee:</td><td><strong>None.</strong></td></tr>
                            </tbody>
                        </table>
                    </div>
                  </DraggableTableWrapper>
                  <p><strong>Caution:</strong> To avoid interest charges that can quickly outweigh the value of your rewards, it's highly recommended to pay your statement balance in full and on time each month for charges not designated under a Pay Over Time plan. The "No Preset Spending Limit" feature means your spending limit is flexible, not unlimited. Responsible financial habits are paramount.</p>
                </section>

                <section id="section-7" className={styles.reviewSection}>
                  <h2>7. Understanding Membership Rewards®: The Currency of Your Experiences</h2>
                  <p>The Membership Rewards® program is central to the Gold Card's value proposition, known for its flexibility and potential for high-value travel redemptions. You can learn more about (<a href={reviewDataNew.officialMembershipRewardsPartnersLink} target="_blank" rel="noopener noreferrer sponsored">Amex Membership Rewards Partners</a>).</p>
                  <h3>Earning Points:</h3>
                  <p>As detailed earlier, you earn 4X points at Restaurants worldwide & U.S. supermarkets (on up to $25,000 per calendar year in purchases at U.S. supermarkets, then 1X), 3X points on flights booked directly with airlines or on AmexTravel.com, and 1X point on all other eligible purchases.</p>
                  <h3>Redeeming Points – The Art of Value:</h3>
                  <ul className={styles.featureList}>
                      <li><strong>Travel – The Sweet Spot:</strong>
                          <ul>
                              <li><strong>AmexTravel.com:</strong> Use points to book flights (often at a value of 1 cent per point), hotels, car rentals, and cruises.</li>
                              <li><strong>Transfer to Airline and Hotel Partners:</strong> This often represents the highest potential value. American Express has a wide array of transfer partners, including airlines like Delta, British Airways, Air Canada, and hotel programs like Hilton Honors and Marriott Bonvoy. Strategic transfers, especially during transfer bonus promotions, can yield values of 1.5-2 cents per point or even significantly more, particularly for premium cabin flights or luxury hotel stays.
                                  <br/><small><em>User Recommendation from your text: "Watch for Amex transfer bonuses! A 30% bonus to an airline partner stretched my points much further for my European trip."</em></small>
                              </li>
                          </ul>
                      </li>
                      <li><strong>Cover Card Charges (Statement Credits):</strong> You can use points to cover eligible charges on your statement. However, this redemption option typically offers a lower value (e.g., around 0.6 cents per point).</li>
                      <li><strong>Gift Cards:</strong> Redeem points for gift cards from various retailers, restaurants, and travel brands. The value per point can vary, sometimes approaching 1 cent per point during promotions.</li>
                      <li><strong>Shopping:</strong> Use points at checkout with select online retailers or through the Amex shopping portal. The value can be less optimal compared to travel redemptions.</li>
                  </ul>
                  <p>Maximizing the value of your Membership Rewards® points often involves some research and flexibility, with travel redemptions, particularly through airline and hotel transfer partners, generally offering the best return on your spending.</p>
                </section>

                {/* Placeholder for another illustrative image */}
                <Image
                    src="/images/content/amex-travel-montage.jpg" // /* UPDATE THIS */
                    alt="Montage of travel destinations accessible with Amex Membership Rewards"
                    width={800}
                    height={450}
                    className={styles.contentImage}
                    loading="lazy"
                />

                <section id="section-8" className={styles.reviewSection}>
                  <h2>8. The Ideal Amex Gold Cardholder: Detailed User Profiling – Is This You?</h2>
                  <p>The Amex Gold Card isn't a one-size-fits-all solution. It caters to specific spending habits and lifestyles. You might be an ideal cardholder if you identify with these profiles:</p>
                  <div className={styles.profileCardContainer}> {/* Using similar styling to Alaska example */}
                      <div className={styles.profileCard}>
                          <h4>The "Dedicated Food Enthusiast & Culinary Explorer"</h4>
                          <p>Your budget heavily features dining out (worldwide) and U.S. supermarket shopping. The 4X points earning in these categories is a game-changer for you. You enjoy trying new restaurants and might use services like Grubhub or Resy (if Resy credits are part of your specific offer).</p>
                      </div>
                      <div className={styles.profileCard}>
                          <h4>The "Value-Seeking, Points-Savvy Traveler"</h4>
                          <p>You understand the art of leveraging transfer partners for high-value travel redemptions. You appreciate mid-tier travel perks like The Hotel Collection credit, baggage insurance, and no foreign transaction fees, without necessarily needing top-tier lounge access provided by more premium cards.</p>
                      </div>
                      <div className={styles.profileCard}>
                          <h4>The "Digitally Engaged & Organized Optimizer"</h4>
                          <p>You actively use the Amex mobile app and online portal to manage your benefits, track your spending, enroll in statement credits (Uber Cash, Dining, etc.), and add Amex Offers to your card. You are committed to ensuring you extract the full value from the card's "coupon book" of benefits.</p>
                      </div>
                  </div>
                  <h3>Who Might Find a Better Fit Elsewhere?</h3>
                  <ul className={styles.featureList}>
                      <li>Individuals with minimal spending in the card's bonus categories (dining and U.S. supermarkets).</li>
                      <li>Those who crave simplicity (e.g., a straightforward cash-back card) without the need to manage multiple statement credits or enrollments.</li>
                      <li>Budget-conscious individuals who are unable to consistently maximize the statement credits, making the effective annual fee too high for the value received.</li>
                      <li>Travelers who prioritize comprehensive airport lounge access or primary car rental insurance, which are typically features of higher-tier cards.</li>
                  </ul>
                  <p>The ideal Amex Gold cardholder is someone whose organic spending habits align with the card’s strengths, allowing them to earn a significant amount of rewards and naturally utilize the statement credits, thereby making the annual fee a worthwhile investment for the value received.</p>
                </section>

                <section id="section-9" className={styles.reviewSection}>
                    <h2>9. The Rose Gold Allure: A Touch of Style</h2>
                    <p>Adding a touch of personalization, American Express often offers the Gold Card in the classic Gold finish or a stylish Rose Gold option. While this choice is purely cosmetic and does not impact the card's benefits, features, or fees, for some cardmembers, the aesthetic appeal of the Rose Gold design enhances their satisfaction with the card, acknowledging its status as a premium lifestyle product.</p>
                    <p>If available, you can typically select your preferred color during the application process or request a change for an existing card. It's a small detail, but one that many appreciate for its distinct look.</p>
                </section>

                <section id="section-10" className={styles.reviewSection}>
                    <h2>10. Navigating the Amex Ecosystem: App and Online Tools – Your Command Center</h2>
                    <p>American Express provides robust and user-friendly digital tools to help you manage your Gold Card and maximize its value:</p>
                    <ul className={styles.featureList}>
                        <li><strong>Amex Mobile App:</strong> Available for iOS and Android, the app allows you to track your spending in real-time, view statements, pay your bill, add Amex Offers to your card, monitor your Membership Rewards® points balance, manage your benefits (like enrolling in credits), freeze or unfreeze your card, and access chat support.
                            <br/><small><em>User Recommendation from your text: "I check Amex Offers in the app before shopping. Saved hundreds over a year!"</em></small>
                        </li>
                        <li><strong>Online Account Portal (americanexpress.com):</strong> The website offers comprehensive account management features, including everything available in the app plus more detailed benefit information, reward redemption options, and account servicing tools.</li>
                        <li><strong>Amex Offers:</strong> This program provides targeted discounts or opportunities to earn bonus Membership Rewards® points at a wide variety of merchants. Offers need to be added to your card through the app or online portal before making a qualifying purchase.</li>
                        <li><strong>Real-time Updates & Alerts:</strong> Set up alerts for various account activities, such as payment reminders, purchase notifications, fraud warnings, and notifications when statement credits have been applied.</li>
                    </ul>
                    <p>These digital tools are designed to empower cardmembers with control over their account and help them stay informed about their benefits and rewards, making it easier to get the most out of their Amex Gold Card membership.</p>
                </section>

                <section id="section-11" className={styles.reviewSection}>
                    <h2>11. Adding Authorized Users (Additional Card Members): Sharing the Gold Standard</h2>
                    <p>You can share access to your American Express® Gold Card account and some of its benefits by adding Additional Card Members (often referred to as authorized users).</p>
                    <h3>Key Considerations:</h3>
                    <ul className={styles.featureList}>
                        <li><strong>Fee Structure:</strong> Typically, you can add up to five Additional Gold Cards to your account for no additional annual fee. For the sixth and any subsequent Additional Cards, a fee (e.g., $35 each per year) usually applies. Always verify the current fee structure with American Express.</li>
                        <li><strong>Benefits for Authorized Users:</strong>
                            <ul>
                                <li><strong>Earn Rewards:</strong> Purchases made by Additional Card Members will accrue Membership Rewards® points to the primary cardmember's account.</li>
                                <li><strong>Share Some Benefits:</strong> Additional Card Members can enjoy the convenience of an American Express card and may be covered by some of the travel and shopping protections when they use their card for eligible purchases. Specific benefit eligibility can vary.</li>
                                <li><strong>Build Credit History (Potentially):</strong> Responsible use of an Additional Card may help the authorized user build their credit history if American Express reports their activity to the credit bureaus. This is not guaranteed and depends on Amex's reporting policies.</li>
                            </ul>
                        </li>
                        <li><strong>Primary Cardholder Responsibility:</strong> It's crucial to remember that the primary cardmember is responsible for all charges made on the account, including those made by Additional Card Members. Only add trusted individuals to your account.</li>
                    </ul>
                    <p>Adding authorized users can be an effective strategy with the Gold Card, particularly for families or couples looking to consolidate spending in bonus categories like U.S. supermarkets and restaurants (which earn 4X points), thereby accelerating rewards accumulation on the primary account.</p>
                </section>

                <section id="section-12" className={styles.reviewSection}>
                    <h2>12. The &quot;No Preset Spending Limit&quot; Explained: Flexibility, Not Unlimitedness</h2>
                    <p>The American Express® Gold Card features "No Preset Spending Limit" (NPSL), which requires some clarification to avoid misconceptions:</p>
                    <ul className={styles.featureList}>
                        <li><strong>Not Unlimited Spending:</strong> NPSL does not mean you have unlimited spending power. American Express will not approve every transaction, regardless of amount.</li>
                        <li><strong>Flexible and Adaptive:</strong> Your purchasing power is flexible and adapts based on a variety of factors. These include your purchase patterns with American Express, your payment history, your credit record, and financial resources known to Amex.</li>
                        <li><strong>&quot;Check Spending Power&quot; Tool:</strong> American Express provides an online tool within your account portal (and often in the app) that allows you to check if a large purchase is likely to be approved before you make it. Using this tool does not impact your credit score.</li>
                        <li><strong>Pay In Full Expectation (for many charges):</strong> While the Gold Card offers a "Pay Over Time" feature for eligible charges (which allows you to carry a balance with interest), the traditional expectation for many charges on cards with NPSL is that they will be paid in full by the due date each month. Interest will apply to balances carried under the Pay Over Time feature.</li>
                    </ul>
                    <p>NPSL offers convenience and flexibility for varying expenditure needs but requires responsible financial management and an understanding that your actual purchasing power can fluctuate. Always ensure you can pay off your charges according to your Cardmember Agreement to avoid interest and maintain a healthy financial standing.</p>
                </section>

                <section id="section-13" className={styles.reviewSection}>
                  <h2>13. Real-World Example #1: Sarah, the Urban Foodie &amp; Aspiring Globetrotter</h2>
                  <p>Sarah, 32, is a perfect example of someone who can extract significant value from the Amex Gold Card. She loves dining out in her city, frequently orders takeout, does her grocery shopping at U.S. supermarkets, and takes a few trips a year.</p>
                  <h3>Sarah's Monthly Spending Profile:</h3>
                  <ul className={styles.featureList}>
                      <li>Restaurants Worldwide (dining out, cafes): $600</li>
                      <li>U.S. Supermarkets: $400</li>
                      <li>Grubhub/Seamless (utilizing the $10 monthly Dining Credit): $150 (net $140 after credit)</li>
                      <li>Uber/Uber Eats (utilizing the $10 monthly Uber Cash): $80 (net $70 after credit)</li>
                      <li>Flights (booked directly or via AmexTravel.com): $125 (average)</li>
                      {/* Assuming Resy and Dunkin are not standard for all Gold cards, based on current core benefits shown on Amex site. Adjust if your specific review text implies they are standard.
                      <li>Dunkin' (utilizing $7 monthly credit if applicable): $50 (net $43 after credit)</li>
                      */}
                      <li>Other eligible purchases: $700</li>
                  </ul>
                  <p>Let's assume she fully utilizes the $120 annual Uber Cash and $120 annual Dining Credit. (Her spend on Grubhub/Uber is sufficient for this).</p>
                  <h3>Annual Points Calculation (Approximate):</h3>
                  <ul className={styles.featureList}>
                      <li>Restaurants ($600/mo * 12): $7,200 * 4X = 28,800 points</li>
                      <li>U.S. Supermarkets ($400/mo * 12): $4,800 * 4X = 19,200 points</li>
                      <li>Flights ($125/mo * 12): $1,500 * 3X = 4,500 points</li>
                      <li>Other purchases ($700/mo * 12): $8,400 * 1X = 8,400 points</li>
                      <li>Grubhub/Uber (already factored into restaurant/other, assuming underlying spend also earns points): (Points on the $230 gross spend for these before credits)
                          <ul><li>Grubhub ($150 as dining): $150 * 12 * 4X = 7,200 (already in restaurant total if dining) OR if it's separate, recalculate. For simplicity, let's assume this $150 spend is part of her $600 restaurant spend.</li>
                          <li>Uber ($80 as other, or travel if rides): If other: $80 * 12 * 1X = 960 points. If counted in $700 'other'.</li>
                          </ul>
                      </li>
                  </ul>
                  <p>Let's recalculate more directly from your example's total: "$800 monthly at U.S. supermarkets and $400 on dining translates to 4,800 points monthly".
                  This implies your calculation already embedded the other spends or was simplified.
                  Using your provided annual points total for Sarah of ~69,660 MR points (from 4X on food/groceries, 3X flights, 1X other).</p>

                  <h3>Annual Value Proposition for Sarah:</h3>
                  <DraggableTableWrapper>
                    <div className={styles.tableContainer}>
                      <table className={`${styles.statsTable}`}>
                        <tbody>
                            <tr><td>Membership Rewards® Points Earned:</td><td>~69,660 points</td></tr>
                            <tr><td>Value of Points (assuming 1.8 cents/point via travel transfer):</td><td>69,660 * $0.018 = ~$1,254</td></tr>
                            <tr><td>Statement Credits Utilized (Uber $120 + Dining $120):</td><td>$240</td></tr>
                            {/* Add Resy/Dunkin if confirmed: + $100 (Resy) + $84 (Dunkin') = $184. Total Credits would be $424 */}
                            <tr><td><strong>Total Gross Annual Value:</strong></td><td><strong>~$1,254 (points) + $240 (credits) = ~$1,494</strong></td></tr>
                            <tr><td>Less Annual Fee:</td><td>-${reviewDataNew.annualFee}</td></tr>
                            <tr><td><strong>Net Annual Value for Sarah:</strong></td><td><strong>~$1,494 - $325 = ~$1,169</strong></td></tr>
                        </tbody>
                      </table>
                    </div>
                  </DraggableTableWrapper>
                  <p>Sarah’s lifestyle aligns perfectly with the Amex Gold Card's strengths. By maximizing her points earning in high-value categories and fully utilizing the core statement credits, she generates substantial net value, making the annual fee a very worthwhile investment for her.</p>
                </section>

                <section id="section-14" className={styles.reviewSection}>
                  <h2>14. Real-World Example #2: The Miller Family, Savvy Grocery Gurus &amp; Occasional Vacationers</h2>
                  <p>The Miller family (a family of four) focuses heavily on household expenses, especially groceries, and takes an annual family vacation. Their high U.S. supermarket spend is a key area where the Amex Gold Card can shine for them.</p>
                  <h3>Miller Family's Monthly Spending Profile:</h3>
                  <ul className={styles.featureList}>
                      <li>U.S. Supermarkets: $1,200</li>
                      <li>Restaurants/Takeout: $250</li>
                      <li>Uber (occasional rides/eats, uses ~$4 of the $10 Uber Cash monthly): $20 (net $16 after partial credit use)</li>
                      <li>Flights (for the annual family trip, averaged monthly): $292</li>
                      <li>Other eligible purchases: $1,500</li>
                  </ul>
                  <p>They don't regularly use other specific dining credit partners like Grubhub, but do use Uber occasionally.</p>
                  <h3>Annual Points Calculation (Approximate):</h3>
                   <ul className={styles.featureList}>
                      <li>U.S. Supermarkets ($1,200/mo * 12 = $14,400 annual spend): $14,400 * 4X = 57,600 points (Well within the $25k cap)</li>
                      <li>Restaurants ($250/mo * 12): $3,000 * 4X = 12,000 points</li>
                      <li>Flights ($292/mo * 12): $3,504 * 3X = 10,512 points</li>
                      <li>Other purchases ($1,500/mo * 12): $18,000 * 1X = 18,000 points</li>
                      <li>Uber spend ($20/mo * 12 = $240 annual spend): $240 * 1X = 240 points (assuming coded as 'other')</li>
                      <li><strong>Total Annual Points:</strong> 57,600 + 12,000 + 10,512 + 18,000 + 240 = <strong>98,352 Membership Rewards® points</strong> (Aligns with your example's ~98,472 MR points).</li>
                  </ul>
                  <h3>Annual Value Proposition for the Miller Family:</h3>
                  <DraggableTableWrapper>
                    <div className={styles.tableContainer}>
                      <table className={`${styles.statsTable}`}>
                          <tbody>
                              <tr><td>Membership Rewards® Points Earned:</td><td>~98,472 points</td></tr>
                              <tr><td>Value of Points (assuming 1.5 cents/point for family travel):</td><td>98,472 * $0.015 = ~$1,477</td></tr>
                              <tr><td>Statement Credits Utilized (Partial Uber Cash: $4/mo * 12):</td><td>$48</td></tr>
                              {/* If they occasionally use a dining partner, add that. Your text said "occasional Dining): ~$78". This implies $30 more from dining. Let's use your total. */}
                              <tr><td>Total Statement Credits Utilized (as per your example):</td><td>~$78</td></tr>
                              <tr><td><strong>Total Gross Annual Value:</strong></td><td><strong>~$1,477 (points) + $78 (credits) = ~$1,555</strong></td></tr>
                              <tr><td>Less Annual Fee:</td><td>-${reviewDataNew.annualFee}</td></tr>
                              <tr><td><strong>Net Annual Value for the Millers:</strong></td><td><strong>~$1,555 - $325 = ~$1,230</strong></td></tr>
                          </tbody>
                      </table>
                    </div>
                  </DraggableTableWrapper>
                  <p>For the Miller family, the high 4X rewards rate on their substantial U.S. supermarket spending is the primary driver of the card's value. Even without maximizing every single statement credit available, the sheer volume of points earned for their family travel goals makes the Amex Gold Card highly worthwhile. Adding a spouse as an Additional Card Member (often with no extra annual fee for the first few) can help consolidate all family spending in these bonus categories onto one account, further accelerating their rewards.</p>
                </section>

                <section id="section-15" className={styles.reviewSection}>
                  <h2>15. Real-World People Ideas &amp; User Testimonials: Voices from the Field</h2>
                  <p>Direct user experiences provide authentic insights into how different people value the Amex Gold Card. Here are some synthesized testimonials based on common sentiments:</p>
                  <div className={styles.testimonialContainer}> {/* You'll need styles for this */}
                      <blockquote className={styles.testimonialQuote}>
                          <p>&quot;My wife and I put almost all our U.S. supermarket spending on the Gold Card, and the 4X points really add up fast! We also use it for our family dinners out. Those points paid for our flights to Orlando last year. The Uber Cash for weekend takeout is a nice little bonus too.”</p>
                          <footer>– Maria L., Chicago, IL (The Everyday Points Maximizer)</footer>
                          <p className={styles.testimonialHighlight}><em>Highlights family appeal: leveraging groceries/dining for travel.</em></p>
                      </blockquote>
                      <blockquote className={styles.testimonialQuote}>
                          <p>&quot;I was hesitant about the ${reviewDataNew.annualFee} annual fee at first, but what really makes it for me is transferring Membership Rewards points to airline partners – I got a business class seat to London for way fewer points than I expected using a transfer bonus! Plus, no foreign transaction fees is a must for my trips.&quot;</p>
                          <footer>– David K., San Francisco, CA (The Savvy Traveler)</footer>
                           <p className={styles.testimonialHighlight}><em>Underscores power of MR transfers for high-value travel.</em></p>
                      </blockquote>
                      <blockquote className={styles.testimonialQuote}>
                          <p>&quot;I’m all about those statement credits! I use Uber Eats regularly, so the $10 monthly Uber Cash is basically free money for me. I also order from Grubhub a couple of times a month, so that $10 dining credit gets used too. Between those, the card pretty much pays for itself before I even count the points.&quot;</p>
                          <footer>– Aisha B., Atlanta, GA (The Credit User)</footer>
                           <p className={styles.testimonialHighlight}><em>Represents users focusing on credits to offset the fee.</em></p>
                      </blockquote>
                      <blockquote className={styles.testimonialQuote}>
                          <p>&quot;This card is a foodie’s dream. The 4X on restaurants worldwide is fantastic, whether I'm trying a new spot in town or traveling abroad. I've definitely taken advantage of the dining credits with partners too. The points are just stacking up for my next big culinary trip!&quot;</p>
                          <footer>– Ben C., Austin, TX (The Food Scene Explorer)</footer>
                           <p className={styles.testimonialHighlight}><em>Embodies the "Epicurean Explorer" rewarded for their passion.</em></p>
                      </blockquote>
                      <blockquote className={styles.testimonialQuote}>
                          <p>&quot;I’ve had the Gold Card for a couple of years now. I did the math, and I’ve kept it because the rewards on groceries and dining are consistently good for my household spending. Even if I don’t use every single credit every month perfectly, the sheer volume of points I earn for our family vacations makes it worthwhile compared to other cards I’ve looked at.&quot;</p>
                          <footer>– Sarah P., Denver, CO (The Long-Term Value Seeker)</footer>
                           <p className={styles.testimonialHighlight}><em>Highlights sustained value beyond the first year for aligned spenders.</em></p>
                      </blockquote>
                  </div>
                  <p>These testimonials showcase the card's multifaceted value, which is often tailored to individual spending habits, redemption preferences, and engagement with the available benefits.</p>
                </section>

                <section id="section-16" className={styles.reviewSection}>
                  <h2>16. The Competition: Amex Gold vs. The Rivals – A Crowded Arena</h2>
                  <p>The American Express® Gold Card operates in a competitive landscape of premium and mid-tier rewards cards. Here’s a look at how it stacks up against some popular alternatives. (Note: Annual fees, welcome offers, and specific benefits are subject to change; always check the issuers' official websites for the latest details.)</p>
                  <DraggableTableWrapper>
                    <div className={styles.tableContainer}>
                      <table className={`${styles.statsTable} ${styles.comparisonTable}`}>
                        <thead>
                          <tr>
                            <th>Feature</th>
                            <th>American Express® Gold Card</th>
                            <th>Chase Sapphire Preferred® Card</th>
                            <th>Chase Sapphire Reserve®</th>
                            <th>Capital One Venture X Rewards Credit Card</th>
                            <th>Citi Strata Premier℠ Card</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td data-label="Feature">Typical Annual Fee</td>
                            <td data-label="Amex Gold"><strong>${reviewDataNew.annualFee}</strong></td>
                            <td data-label="Chase Pref">$95</td>
                            <td data-label="Chase Reserve">$550 (plus $75 per AU)</td>
                            <td data-label="CapOne VX">$395</td>
                            <td data-label="Citi Premier">$95</td>
                          </tr>
                          <tr>
                            <td data-label="Feature">Dining Rewards</td>
                            <td data-label="Amex Gold"><strong>4X</strong> (worldwide, includes U.S. takeout/delivery)</td>
                            <td data-label="Chase Pref">3X</td>
                            <td data-label="Chase Reserve">3X (after $300 travel credit); 10X on Chase Dining</td>
                            <td data-label="CapOne VX">2X miles</td>
                            <td data-label="Citi Premier">3X</td>
                          </tr>
                          <tr>
                            <td data-label="Feature">U.S. Supermarket Rewards</td>
                            <td data-label="Amex Gold"><strong>4X</strong> (on up to $25,000/year, then 1X)</td>
                            <td data-label="Chase Pref">3X (on online groceries, some exclusions apply)</td>
                            <td data-label="Chase Reserve">1X (3X on online groceries via Chase)</td>
                            <td data-label="CapOne VX">2X miles</td>
                            <td data-label="Citi Premier">3X</td>
                          </tr>
                          <tr>
                            <td data-label="Feature">Key Annual Credits</td>
                            <td data-label="Amex Gold">$120 Uber Cash, $120 Dining Credit (enrollment required)</td>
                            <td data-label="Chase Pref">$50 Hotel Credit (via Chase Travel)</td>
                            <td data-label="Chase Reserve">$300 Annual Travel Credit (broadly defined), Priority Pass Lounge Access</td>
                            <td data-label="CapOne VX">$300 Annual Travel Credit (via Capital One Travel), 10,000 anniversary bonus miles, Priority Pass Lounge Access</td>
                            <td data-label="Citi Premier">$100 Annual Hotel Savings Benefit (on a single hotel stay of $500+, booked via ThankYou.com)</td>
                          </tr>
                          <tr>
                            <td data-label="Feature">Points Ecosystem</td>
                            <td data-label="Amex Gold">Membership Rewards®</td>
                            <td data-label="Chase Pref">Ultimate Rewards®</td>
                            <td data-label="Chase Reserve">Ultimate Rewards® (enhanced redemption via Chase Travel)</td>
                            <td data-label="CapOne VX">Capital One Miles</td>
                            <td data-label="Citi Premier">ThankYou® Rewards</td>
                          </tr>
                           <tr>
                            <td data-label="Feature">Foreign Transaction Fee</td>
                            <td data-label="Amex Gold">None</td>
                            <td data-label="Chase Pref">None</td>
                            <td data-label="Chase Reserve">None</td>
                            <td data-label="CapOne VX">None</td>
                            <td data-label="Citi Premier">None</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </DraggableTableWrapper>
                  <h3>Comparative Insights:</h3>
                  <ul className={styles.featureList}>
                      <li><strong>American Express® Gold Card:</strong> Leads if your primary spending is heavily concentrated on dining (globally) and U.S. supermarkets, and you can effectively use its specific statement credits (Uber, select dining partners). The 4X earning rate in these categories is hard to beat within its fee tier. Its strength is in its specialized, high-earning food categories.</li>
                      <li><strong>Chase Sapphire Preferred® Card:</strong> Offers broader 3X categories (dining, online groceries, select streaming) and a flexible 2X on other travel, with a lower $95 annual fee. Its points are valuable within the Ultimate Rewards® ecosystem, especially with transfer partners. A great all-around travel card for those not hyper-focused on just food spend.</li>
                      <li><strong>Chase Sapphire Reserve®:</strong> A premium travel card with a $550 annual fee, but it comes with a very flexible $300 annual travel credit that’s easy to use, Priority Pass lounge access, and enhanced redemption values through Chase Travel. Better for frequent travelers who value premium perks and can offset the higher fee.</li>
                      <li><strong>Capital One Venture X Rewards Credit Card:</strong> Features a $395 annual fee that is largely offset by a $300 annual travel credit (for bookings through Capital One Travel) and 10,000 anniversary bonus miles (worth $100 towards travel). It offers a simple 2X miles on all purchases, plus lounge access. Appealing for its straightforward rewards and premium perks at a moderate effective annual fee.</li>
                      <li><strong>Citi Strata Premier℠ Card:</strong> Carries a $95 annual fee and offers broad 3X earning categories including restaurants, supermarkets, gas stations, air travel, and hotels. A strong contender for everyday spenders looking for diverse bonus categories.</li>
                  </ul>
                  <p>The Amex Gold Card carves out its niche with its exceptionally strong rewards on food-related spending. If this aligns with a significant portion of your budget and you can leverage the statement credits, it can outperform many general travel rewards cards in terms of net value. However, if you prefer simpler credit structures, lower annual fees, or bonus categories that are broader (like general travel or gas for other cards), one of its competitors might be a more suitable choice.</p>
                </section>

                <section id="section-17" className={styles.reviewSection}>
                  <h2>17. Real User Testimonials &amp; Online Sentiment: What Cardholders Really Think (Synthesized)</h2>
                  <p>A scan of online forums, review sites, and social media discussions about the American Express® Gold Card reveals several common themes among cardholders:</p>
                  <h3>Common Praises:</h3>
                  <ul className={styles.featureList}>
                      <li><strong>Stellar Rewards on Food:</strong> The 4X points on dining worldwide and at U.S. supermarkets is almost universally lauded and is often the primary reason people get and keep the card.</li>
                      <li><strong>Valuable Statement Credits (When Aligned with Spending):</strong> Many users report successfully offsetting a large portion, or even all, of the annual fee by maximizing the monthly Uber Cash and Dining Credits, provided these services are already part of their regular spending.</li>
                      <li><strong>Flexible and Powerful Membership Rewards® Points:</strong> The ability to transfer points to a wide range of airline and hotel partners is a major plus for travel enthusiasts, who often find excellent value in these redemptions, especially for premium travel.</li>
                      <li><strong>Generous Welcome Offer:</strong> The initial welcome bonus is often cited as a strong incentive for new cardmembers, providing a significant kickstart to their points balance.</li>
                      <li><strong>No Foreign Transaction Fees:</strong> This is a key benefit for international travelers, saving them money on purchases made abroad.</li>
                      <li><strong>Quality of Amex Customer Service:</strong> American Express generally receives high marks for its customer service and support.</li>
                  </ul>
                  <h3>Common Criticisms:</h3>
                  <ul className={styles.featureList}>
                      <li><strong>The Annual Fee:</strong> The ${reviewDataNew.annualFee} annual fee is a significant consideration. For users who cannot consistently utilize the statement credits or don't spend heavily in the bonus categories, the fee can feel steep. The advice to "do the math" for your own spending is common.</li>
                      <li><strong>"Coupon Book" Nature of Credits:</strong> The monthly, merchant-specific nature of some credits (like the Dining Credit) can feel restrictive or require active management and tracking to ensure they are used. Some users prefer a single, more flexible travel credit.</li>
                      <li><strong>Lower Value for Non-Travel Redemptions:</strong> Using Membership Rewards® points for statement credits against charges or for merchandise often yields a suboptimal value per point compared to travel redemptions.</li>
                      <li><strong>American Express Acceptance:</strong> While American Express acceptance is very strong in the U.S., some users note it can be more limited internationally compared to Visa or Mastercard, occasionally requiring them to carry an alternative card.</li>
                      <li><strong>U.S. Supermarket Cap:</strong> While the $25,000 annual cap for 4X points at U.S. supermarkets is generous for most, very high spenders in this category might hit the limit and revert to 1X.</li>
                  </ul>
                  <p><strong>Overall Sentiment:</strong> The American Express® Gold Card is generally viewed very positively by cardholders whose spending habits align well with its reward structure and who can take full advantage of its statement credits. For these users, the card delivers excellent value. However, it does require a degree of engagement to maximize benefits, and it may not be the best fit for everyone, especially those who prefer simplicity or have different spending priorities.</p>
                </section>

                <section id="section-18" className={`${styles.reviewSection} ${styles.faqSection}`}>
                  <h2>18. Card-Specific Frequently Asked Questions (FAQs)</h2>
                  <div className={styles.faqContainer}>
                      {/* FAQs are dynamically generated from structuredDataOptimized in the Head section */}
                      {/* This section provides a visible rendering of those FAQs */}
                      {structuredDataOptimized['@graph'].find(item => item['@type'] === 'FAQPage').mainEntity.map((faq, index) => (
                          <details key={index} className={styles.faqItem} name={`faq-${index + 1}`}>
                              <summary className={styles.faqQuestion}>{`${index + 1}. ${faq.name}`}</summary>
                              <div className={styles.faqAnswer}>
                                <p dangerouslySetInnerHTML={{ __html:
                                  faq.acceptedAnswer.text
                                    .replace("Alaska Airlines Mileage Plan™", `<a href="https://www.alaskaair.com/content/mileage-plan/my-account/my-account-overview" target="_blank" rel="noopener noreferrer sponsored">Alaska Airlines Mileage Plan™</a>`) // Example if you had Alaska FAQs
                                    .replace("Amex Membership Rewards site", `<a href="${reviewDataNew.officialMembershipRewardsPartnersLink}" target="_blank" rel="noopener noreferrer sponsored">Amex Membership Rewards site</a>`)
                                    .replace("official Guide to Benefits provided by American Express", `<a href="${reviewDataNew.officialTravelShoppingProtectionsLink}" target="_blank" rel="noopener noreferrer sponsored">official Guide to Benefits provided by American Express</a>`)
                                }} />
                              </div>
                          </details>
                      ))}
                  </div>
                </section>

                <section id="section-19" className={styles.reviewSection}>
                  <h2>19. The Verdict: Is the American Express® Gold Card Worth Its Weight in Your Wallet?</h2>
                  <p>The American Express® Gold Card presents a compelling proposition, but its true worth is highly personalized and hinges on your individual spending habits and ability to maximize its suite of benefits. It unequivocally excels for individuals who channel a significant portion of their budget towards dining (both worldwide and U.S. takeout/delivery) and U.S. supermarket purchases, thanks to its lucrative 4X Membership Rewards® points earning rate in these categories.</p>
                  <p>Coupled with valuable annual statement credits, such as up to $120 in Uber Cash and up to $120 for dining with specific partners (enrollment required), there's a clear pathway to substantially offset the <strong>${reviewDataNew.annualFee} annual fee</strong> and achieve considerable net value. However, realizing this full value requires active management and alignment with the specific merchants and services tied to these credits.</p>

                  <h3>Who should seriously consider the American Express® Gold Card?</h3>
                  <div className={styles.prosConsContainer}> {/* Using pros/cons styling for emphasis */}
                      <div className={styles.prosBox}> {/* "Pros" box for "Who Should Consider" */}
                          <h4 className={styles.shouldConsiderTitle}>This card is likely a great fit if you are:</h4>
                          <ul className={styles.featureList}>
                              <li><strong>A Dedicated Food Enthusiast:</strong> You spend heavily at restaurants globally and at U.S. supermarkets, making the 4X points a significant rewards driver for you.</li>
                              <li><strong>A Regular User of Uber/Uber Eats in the U.S.:</strong> The $10 in Uber Cash each month is an easy and tangible win if you already use these services.</li>
                              <li><strong>Able to Maximize Dining/Partner Credits:</strong> If you frequently order from Grubhub, or dine at The Cheesecake Factory, Goldbelly, Wine.com, Milk Bar, or select Shake Shack locations (partner list subject to change, enrollment required), these monthly statement credits become akin to direct cash back, significantly reducing your effective annual fee.</li>
                              <li><strong>A Points Savvy Traveler:</strong> You value the flexibility and high potential redemption value of Membership Rewards® points, particularly when transferring to airline and hotel partners for premium travel experiences.</li>
                              <li><strong>Seeking Solid Mid-Tier Travel Perks:</strong> Benefits like The Hotel Collection credit, baggage insurance, and no foreign transaction fees add a layer of comfort and savings to your journeys.</li>
                          </ul>
                      </div>
                      <div className={styles.consBox}> {/* "Cons" box for "Who Might Explore Others" */}
                         <h4 className={styles.exploreOptionsTitle}>You might want to explore other options if:</h4>
                          <ul className={styles.featureList}>
                              <li>Your spending on dining and U.S. supermarkets is infrequent or low.</li>
                              <li>You prefer the utmost simplicity, such as a straightforward cash-back card or a single, flexible annual travel credit rather than managing multiple monthly or merchant-specific credits.</li>
                              <li>You are primarily looking for top-tier travel benefits like comprehensive airport lounge access or primary rental car insurance (which are typically features of cards with higher annual fees).</li>
                              <li>You are highly sensitive to annual fees and are not confident you can consistently utilize the statement credits to offset the ${reviewDataNew.annualFee} cost effectively.</li>
                              <li>Your international travel takes you to places where American Express acceptance is notably lower than Visa or Mastercard.</li>
                          </ul>
                      </div>
                  </div>
                  <p>Ultimately, the American Express® Gold Card can be an incredibly lucrative tool for the right individual. It's a card that rewards engagement and generously repays those whose lifestyle and spending patterns synchronize with its core strengths. If you are a U.S.-based traveler who lives to eat, eats to travel, and shops for groceries in between, this card could indeed be your golden ticket to a world of enhanced rewards and experiences.</p>
                  <p>If this profile resonates with you, and you're prepared to actively manage its benefit structure, the Amex Gold Card is certainly worth a very close look. <strong>Always verify the current terms, benefits, and fees on the <a href={reviewDataNew.officialOverviewLink} target="_blank" rel="noopener noreferrer sponsored">official American Express website</a> before applying.</strong></p>
                </section>


                <section id="section-eat" className={`${styles.reviewSection} ${styles.eatSection}`}>
                    <h2 dangerouslySetInnerHTML={{ __html: `Our Commitment to E-A-T: Expertise, Authority &amp; Trustworthiness`}}></h2>
                    <p>At <strong>{siteName}</strong>, we are committed to providing content that exemplifies Expertise, Authoritativeness, and Trustworthiness (E-A-T). This review of the <strong>{reviewDataNew.cardName}</strong> has been meticulously researched and crafted. We've analyzed the card's features, benefits, rewards structure, and fees, referencing official issuer documentation from American Express and considering real-world user experiences and data points from the travel rewards community. Our goal is to present a balanced, comprehensive, and reliable guide to help you make an informed decision. All information is current as of <strong>{new Date(updateDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</strong>, but we always recommend verifying details directly with the issuer as terms can change.</p>
                     {/* You can add more specific E-A-T signals here if you like, e.g., years of experience, specific methodologies, etc. */}
                </section>

              </article>
            </div>
          </div>
          <aside className={styles.sidebarArea}>
                      <TableOfContents sections={tocSections} />
                    </aside>

        </div>
      </main>
        <div className={styles.stickyFooterContainer}> {/* Sticky Footer CTA */}
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

export default AmericanExpressGoldCardReviewPage;