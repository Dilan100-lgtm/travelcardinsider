/* ------------------------------------------------------------------
    File:  pages/reviews/american-express-blue-cash-everyday-card-review.js
    Route: https://www.yourwebsite.com/reviews/american-express-blue-cash-everyday-card-review
------------------------------------------------------------------- */

import React, { useState, useEffect, useCallback, useRef } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import styles from '../../styles/ReviewPage.module.css'; // Assuming same CSS module as Biz Plat

import TableOfContents from '../../components/TableOfContents'; // Assuming same TOC component

// UPDATE ICON PATHS AS NEEDED - These are examples
import IconGift from '../../components/icons/icon-gift.svg'; // For welcome offer
import IconStar from '../../components/icons/icon-star.svg'; // For rewards/rating
import IconCheck from '../../components/icons/icon-Credit Card.svg'; // For fee/checkmark
import IconPlus from '../../components/icons/icon-target.svg'; // For 'Best For'
import IconDollar from '../../components/icons/icon-dollar.svg'; // For credits/cash back
import IconCalendar from '../../components/icons/icon-calendar.svg'; // For APR/terms
import IconNoFee from '../../components/icons/icon-no-fee.svg'; // Placeholder for No Annual Fee
import IconPercent from '../../components/icons/icon-percent.svg'; // Placeholder for Cash Back %
import IconCart from '../../components/icons/icon-cart.svg'; // Placeholder for Shopping
import IconGas from '../../components/icons/icon-gas.svg'; // Placeholder for Gas
import IconGroceries from '../../components/icons/icon-groceries.svg'; // Placeholder for Groceries

const RatingTooltip = dynamic(() => import('../../components/RatingTooltip'), { ssr: false, loading: () => null });

/* ──────────────────────────────
    CONSTANTS & STATIC DATA
    ────────────────────────────── */
const siteName = 'Travelcardinsider'; // UPDATE AS NEEDED
const siteUrl = 'https://www.travelcardinsider.com'; // UPDATE AS NEEDED: Replace with your actual site URL
const pagePath = '/reviews/american-express-blue-cash-everyday-card-review'; // UPDATE AS NEEDED
const pageUrlFull = `${siteUrl}${pagePath}`;
const publishDate = '2025-05-30'; // UPDATE AS NEEDED: Current date or actual publish date
const updateDate = '2025-05-30'; // UPDATE AS NEEDED: Current date or actual update date

const reviewDataBCE = {
  cardName        : 'Blue Cash Everyday® Card from American Express',
  // SEO Optimized Title
  title           : 'Amex Blue Cash Everyday Card Review (2025): $0 Fee, 3% Cash Back & Credits',
  // Meta Description
  description     : 'In-depth 2025 review of the Amex Blue Cash Everyday® Card. Explore 3% cash back on U.S. supermarkets, gas & online retail, $0 annual fee, Disney Bundle & Home Chef credits, and 0% intro APR. Is it your best everyday card?',
  // Keywords
  keywords        : 'American Express Blue Cash Everyday Card review, Amex Blue Cash Everyday, BCE benefits, Amex cash back, no annual fee credit card, Amex Disney credit, Amex Home Chef credit, 0% intro APR credit card, American Express review 2025',
  author: { // Placeholder: UPDATE ALL AUTHOR DETAILS AS NEEDED
      name: 'Dilan Madushanka',
      title: 'Founder & Lead Editor',
      imageUrl: '/WhatsApp Image 2025-05-12 at 4.09.58 PM.jpeg', // Placeholder - UPDATE
      imageWidth: 40,
      imageHeight: 40,
      tooltipImageUrl: '/WhatsApp Image 2025-05-12 at 4.09.58 PM.jpeg', // Placeholder - UPDATE
      tooltipImageWidth: 60,
      tooltipImageHeight: 60,
      expertise: [
          'No Annual Fee Credit Cards',
          'Cash Back Rewards Programs',
          'Maximizing Statement Credits',
          'Introductory APR Offers',
          'American Express Everyday Cards'
      ],
      bioSnippet: 'Dilan Madushanka is the founder and lead editor of Travelcardinsider, specializing in demystifying everyday credit cards to help consumers maximize cash back and value from their daily spending.', // UPDATE
      fullBioLink: '/author/dilan-madushanka', // Placeholder - UPDATE
      fullBio: `Dilan Madushanka is the founder and lead editor of Travelcardinsider, a platform dedicated to helping consumers make smarter decisions with credit cards. [MORE BIO DETAILS TO BE ADDED BY USER]`, // UPDATE
      publishedStats: 'X+ everyday card reviews', // Placeholder - UPDATE
      testedStats: 'Over Y+ credit card features focused on consumer value', // Placeholder - UPDATE
      socialLinks: {
          linkedin: 'https://www.linkedin.com/in/dilan-madushanka-b65293365',
          twitter: 'https://x.com/team_dilan',
          email: 'team@travelcardinsider.com'
      }
  },
  siteName: siteName,
  imageUrl        : '/blue-cash-everyday-card-image.png', // /* UPDATE THIS */ Placeholder: Replace with actual Amex BCE card image URL
  imageWidth      : 1024, // Placeholder - UPDATE if image dimensions differ (typical card images are wider than tall)
  imageHeight     : 648,  // Placeholder - UPDATE if image dimensions differ
  ratingValue     : 8.8,  // /* UPDATE THIS */ Placeholder - Example rating for BCE
  ratingCount     : 250,  // /* UPDATE THIS */ Placeholder - Example rating count for BCE
  reviewBody      : 'Our editors evaluate the Blue Cash Everyday® Card from American Express based on its cash back earning rates (U.S. supermarkets, U.S. gas stations, U.S. online retail), statement credits (Disney Bundle, Home Chef), welcome offer, $0 annual fee, introductory APR, and overall value proposition for U.S. consumers focused on everyday spending.',
  aprRange        : '0% intro APR on purchases and balance transfers for 15 months from the date of account opening, then a variable APR, 19.24% - 29.99%.', // From your text
  annualFee       : 0,
  // IMPORTANT: REPLACE WITH YOUR ACTUAL AFFILIATE LINK FOR AMEX BLUE CASH EVERYDAY
  applyLink       : 'https://www.americanexpress.com/us/credit-cards/card/blue-cash-everyday/', // /* UPDATE THIS */
  // Official links based on previous turn's findings
  ratesLink       : 'https://www.americanexpress.com/us/credit-cards/card/blue-cash-everyday/', // Users click "Rates and Fees" on this page
  officialOverviewLink: 'https://www.americanexpress.com/us/credit-cards/card/blue-cash-everyday/',
  officialWelcomeOfferLink: 'https://www.americanexpress.com/us/credit-cards/card/blue-cash-everyday/', // Welcome offer is on main page
  officialBenefitsCreditsLink: 'https://www.americanexpress.com/us/credit-cards/card/blue-cash-everyday/', // Refer to "Offer & Benefit Terms"
  officialProtectionsLink: 'https://www.americanexpress.com/us/credit-cards/features-benefits/', // General benefits guide
  officialExtendedWarrantyLink: 'https://www.americanexpress.com/us/credit-cards/features-benefits/policies/extended-warranty-terms.html',
  officialRewardRedemptionLink: 'https://global.americanexpress.com/rewards/hub', // General rewards hub, or specific BCE redemption info on main page
  officialPlanItPayItLink: 'https://www.americanexpress.com/us/credit-cards/features-benefits/plan-it/', // Pay It is usually via Amex App
  officialAmexOffersLink: 'https://www.americanexpress.com/us/credit-cards/features-benefits/amex-offers/', // General info

  // Competitor Links (from your text)
  officialChaseFreedomFlexSite: 'https://creditcards.chase.com/cash-back-credit-cards/freedom/flex', // Example, verify exact link
  officialCitiCustomCashSite: 'https://www.citi.com/credit-cards/citi-custom-cash-credit-card', // Example, verify exact link
  officialBofACustomizedCashSite: 'https://www.bankofamerica.com/credit-cards/products/customized-cash-rewards-credit-card/', // Example, verify exact link
  officialDiscoverItCashBackSite: 'https://www.discover.com/credit-cards/cash-back/it-card.html', // Example, verify exact link
  officialBlueCashPreferredSite: 'https://www.americanexpress.com/us/credit-cards/card/blue-cash-preferred/',


  sku             : 'AMEX-BCE-TCI-2025', // Placeholder - Example SKU
  mpn             : 'AMEXBCE', // Placeholder - Example MPN
  // SEO Optimized H1
  h1Content       : "Amex Blue Cash Everyday® Review (2025): Maximize Cash Back & Credits, $0 Annual Fee",
};

/* ──────────────────────────────
    STRUCTURED DATA GRAPH
    ────────────────────────────── */
const structuredDataOptimizedBCE = {
  '@context': 'https://schema.org',
  '@graph'  : [
    {
      '@type'        : 'Product',
      '@id'          : `${pageUrlFull}#product`,
      name           : reviewDataBCE.cardName,
      image          : `${siteUrl}${reviewDataBCE.imageUrl}`,
      description    : reviewDataBCE.description,
      sku            : reviewDataBCE.sku,
      mpn            : reviewDataBCE.mpn,
      brand          : { '@type': 'Brand', name: 'American Express' },
      aggregateRating: {
        '@type'    : 'AggregateRating',
        ratingValue : reviewDataBCE.ratingValue.toString(),
        bestRating  : '10',
        worstRating : '1',
        ratingCount : reviewDataBCE.ratingCount.toString(),
        reviewCount : '1', // Assuming 1 editor review for this page
      },
      offers: {
        '@type'            : 'Offer',
        url                : reviewDataBCE.applyLink, // Your affiliate link
        priceCurrency      : 'USD',
        price              : reviewDataBCE.annualFee.toString(), // Should be "0"
        priceValidUntil    : '2026-12-31', // UPDATE AS NEEDED
        itemCondition      : 'https://schema.org/NewCondition',
        availability       : 'https://schema.org/InStock',
        priceSpecification: [
          {
            '@type'              : 'PriceSpecification',
            priceCurrency        : 'USD',
            price                : reviewDataBCE.annualFee.toString(),
            valueAddedTaxIncluded: 'false',
            description          : `Annual fee: $${reviewDataBCE.annualFee}.`,
          },
          {
            '@type'              : 'PriceSpecification',
            priceCurrency        : 'USD',
            description          : `Intro APR: ${reviewDataBCE.aprRange}. Foreign Transaction Fee: 2.7%. See official ${reviewDataBCE.cardName} Rates & Fees on the issuer's website. Cash Advance Fee: Either $10 or 5% of the amount of each cash advance, whichever is greater. Late Payment Fee: Up to $40. Returned Payment Fee: Up to $40.`,
          },
        ],
        seller: { '@type': 'Organization', name: 'American Express National Bank' },
      },
      review: { '@id': `${pageUrlFull}#editorReview` },
    },
    {
      '@type'         : 'Review',
      '@id'           : `${pageUrlFull}#editorReview`,
      name            : `${reviewDataBCE.cardName} – Expert Review Updated ${new Date(updateDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}`,
      itemReviewed    : { '@id': `${pageUrlFull}#product` },
      reviewBody      : reviewDataBCE.reviewBody,
      reviewRating    : {
        '@type'    : 'Rating',
        ratingValue : reviewDataBCE.ratingValue.toString(),
        bestRating  : '10',
        worstRating : '1',
        description: `${siteName} editorial rating based on a 10.0 scale, as of ${new Date(updateDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}.`
      },
      author          : {
          '@type': 'Person',
          'name': reviewDataBCE.author.name,
          'url': reviewDataBCE.author.fullBioLink ? `${siteUrl}${reviewDataBCE.author.fullBioLink}` : undefined,
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
      name               : reviewDataBCE.title,
      description        : reviewDataBCE.description,
      inLanguage         : 'en-US',
      isPartOf           : { '@id': `${siteUrl}#website` },
      primaryImageOfPage : { '@id': `${pageUrlFull}#primaryImage` },
      breadcrumb         : { '@id': `${pageUrlFull}#breadcrumbs` },
      datePublished      : publishDate,
      dateModified       : updateDate,
       author: {
          '@type': 'Person',
          'name': reviewDataBCE.author.name,
          'url': reviewDataBCE.author.fullBioLink ? `${siteUrl}${reviewDataBCE.author.fullBioLink}` : undefined
       },
    },
    {
      '@type'   : 'ImageObject',
      '@id'     : `${pageUrlFull}#primaryImage`,
      url       : `${siteUrl}${reviewDataBCE.imageUrl}`,
      width     : reviewDataBCE.imageWidth,
      height    : reviewDataBCE.imageHeight,
      caption   : reviewDataBCE.cardName,
    },
    {
      '@type'        : 'BreadcrumbList',
      '@id'          : `${pageUrlFull}#breadcrumbs`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: siteName, item: siteUrl },
        { '@type': 'ListItem', position: 2, name: 'Credit Card Reviews', item: `${siteUrl}/reviews` }, // /* UPDATE AS NEEDED */
        { '@type': 'ListItem', position: 3, name: `${reviewDataBCE.cardName} Review`, item: pageUrlFull },
      ],
    },
    { // Populated from Section "Got Questions? Your Blue Cash Everyday® FAQs Answered"
      '@type'    : 'FAQPage',
      '@id'      : `${pageUrlFull}#faqs`,
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is the annual fee for the Blue Cash Everyday® Card?',
          acceptedAnswer: { '@type': 'Answer', text: "The Blue Cash Everyday® Card from American Express has a $0 annual fee. You can find more details on the <a href='" + reviewDataBCE.officialOverviewLink + "' target='_blank' rel='noopener noreferrer sponsored'>official American Express website</a>." }
        },
        {
          '@type': 'Question',
          name: 'What credit score is needed for the Blue Cash Everyday® Card?',
          acceptedAnswer: { '@type': 'Answer', text: "Generally, good to excellent credit is recommended for approval (often a FICO score of 670+). However, American Express considers various factors in their decision." }
        },
        {
          '@type': 'Question',
          name: 'How is cash back earned with the Blue Cash Everyday® Card?',
          acceptedAnswer: { '@type': 'Answer', text: "You earn 3% cash back at U.S. supermarkets, on U.S. online retail purchases, and at U.S. gas stations (on up to $6,000 per year in purchases in each category, then 1%). You earn 1% cash back on all other eligible purchases. Terms and limitations apply. See <a href='" + reviewDataBCE.officialBenefitsCreditsLink + "' target='_blank' rel='noopener noreferrer sponsored'>official reward terms</a>." }
        },
        {
          '@type': 'Question',
          name: 'Are there spending caps on the 3% cash back categories?',
          acceptedAnswer: { '@type': 'Answer', text: "Yes, the 3% cash back for U.S. supermarkets, U.S. online retail purchases, and U.S. gas stations is each limited to the first $6,000 in purchases per calendar year for that category. After that, you'll earn 1% cash back in that category. Full details are available on the <a href='" + reviewDataBCE.officialBenefitsCreditsLink + "' target='_blank' rel='noopener noreferrer sponsored'>issuer's site</a>." }
        },
        {
          '@type': 'Question',
          name: 'How are Blue Cash Everyday® rewards redeemed?',
          acceptedAnswer: { '@type': 'Answer', text: "Rewards are earned as Reward Dollars that can be redeemed for statement credits. You can also use them at Amazon.com checkout. Redemption options are subject to terms, viewable on the <a href='" + reviewDataBCE.officialRewardRedemptionLink + "' target='_blank' rel='noopener noreferrer sponsored'>American Express rewards page</a>." }
        },
        {
          '@type': 'Question',
          name: 'Does the Blue Cash Everyday® Card have foreign transaction fees?',
          acceptedAnswer: { '@type': 'Answer', text: "Yes, the Blue Cash Everyday® Card has a foreign transaction fee of 2.7% of each transaction after conversion to U.S. dollars. This is detailed in the <a href='" + reviewDataBCE.ratesLink + "' target='_blank' rel='noopener noreferrer sponsored'>card's rates and fees</a>." }
        },
        {
            '@type': 'Question',
            name: 'What qualifies as "U.S. online retail purchases" for 3% cash back?',
            acceptedAnswer: { '@type': 'Answer', text: "This category applies to purchases of physical goods made through a U.S. retail merchant's website or app. It generally excludes services like travel bookings, event tickets, or food delivery. Merchant categorization is key. Refer to <a href='" + reviewDataBCE.officialBenefitsCreditsLink + "' target='_blank' rel='noopener noreferrer sponsored'>Amex's terms</a> for specific exclusions." }
        },
        {
            '@type': 'Question',
            name: 'Do purchases at Walmart or Target count for the 3% U.S. supermarket cash back rate?',
            acceptedAnswer: { '@type': 'Answer', text: "Typically, no. Superstores like Walmart and Target, as well as warehouse clubs (e.g., Costco, Sam's Club), are usually excluded from the 3% U.S. supermarket category and would earn 1% cash back. See the <a href='" + reviewDataBCE.officialBenefitsCreditsLink + "' target='_blank' rel='noopener noreferrer sponsored'>reward terms</a> for precise definitions." }
        },
        {
            '@type': 'Question',
            name: 'How does The Disney Bundle credit work with the Blue Cash Everyday® Card?',
            acceptedAnswer: { '@type': 'Answer', text: "Card Members can receive a $7 statement credit each month (up to $84 annually) after spending $9.99 or more on an eligible subscription to The Disney Bundle using their enrolled Blue Cash Everyday® Card. Enrollment is required via your Amex account. Check the <a href='" + reviewDataBCE.officialBenefitsCreditsLink + "' target='_blank' rel='noopener noreferrer sponsored'>benefit terms on Amex's site</a>." }
        },
        {
            '@type': 'Question',
            name: 'Can cash back from the Blue Cash Everyday® Card be transferred to Amex Membership Rewards® points?',
            acceptedAnswer: { '@type': 'Answer', text: "No, the Blue Cash Everyday® Card earns Reward Dollars, which are redeemable for statement credits or at Amazon.com checkout. They cannot be converted or transferred to the American Express Membership Rewards® points program." }
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

// UPDATE AS NEEDED: Tailor these to BCE
const ratingCriteriaBCE = [
    'Value of 3% Cash Back Categories (U.S. Supermarkets, Gas, Online Retail)',
    'Effectiveness & Value of Statement Credits (Disney Bundle, Home Chef)',
    'Attractiveness of Welcome Offer & Spending Requirement',
    'Annual Fee ($0) - Overall Affordability & Accessibility',
    'Introductory APR Offer on Purchases & Balance Transfers',
    'Clarity of Reward Program & Redemption Simplicity (Reward Dollars)',
    'Impact of Spending Caps on 3% Categories',
    'Usefulness of Additional Amex Perks (Amex Offers, Protections)',
    'Foreign Transaction Fee Impact for Travelers',
    'Customer Service & Amex App Experience',
    'Ease of Meeting Welcome Offer Spend',
    'Overall Value for Target Audience (e.g., U.S. families, everyday spenders)',
];

const tocSectionsBCE = [
    { id: 'section-intro', title: 'BCE Unlocked: Everyday Value for Your Next Adventure' },
    { id: 'section-1', title: '1. Amex Blue Cash Everyday®: Snapshot of a $0 Fee Powerhouse' },
    { id: 'section-2', title: '2. Real-World Rewards: How "Taylor" Maxed Out First-Year Value' },
    { id: 'section-3', title: '3. Competitive Edge: BCE vs. Other No-Annual-Fee Cash Back Cards' },
    { id: 'section-4', title: '4. Pros & Cons: Weighing the Blue Cash Everyday® Benefits' },
    { id: 'section-5', title: '5. Welcome Offer: A Closer Look at the Initial $200 Bonus' },
    { id: 'section-6', title: '6. Earning Power: Mastering 3% Cash Back & Understanding Caps' },
    { id: 'section-7', title: '7. Cashing In: Redeeming Your Blue Cash Everyday® Reward Dollars' },
    { id: 'section-8', title: '8. Statement Credits: Disney Bundle & Home Chef Perks Detailed' },
    { id: 'section-9', title: '9. Beyond Basics: Amex Offers, Protections, and Financial Tools' },
    { id: 'section-10', title: '10. The Fine Print: Blue Cash Everyday® Rates & Fees Explained' },
    { id: 'section-11', title: '11. Is BCE Your Perfect Travel-Funding Partner? Ideal User Profile' },
    { id: 'section-12', title: '12. Amex Showdown: Blue Cash Everyday® or Blue Cash Preferred®?' },
    { id: 'section-13', title: '13. From Real Users: Authentic Blue Cash Everyday® Testimonials' },
    { id: 'section-14', title: '14. Blue Cash Everyday® FAQs: Your Key Questions Answered' },
    { id: 'section-15', title: '15. Expert Verdict: Should BCE Be Your Next Everyday Card?' },
    { id: 'section-eat', title: `Our E-A-T Commitment to ${reviewDataBCE.cardName} Reviews` },
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
function AmericanExpressBlueCashEverydayCardReviewPage() {
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

  const summaryBoxDataBCE = {
    welcomeOffer: "Earn a $200 statement credit after $2,000 spend in first 6 months.",
    annualFee: `$${reviewDataBCE.annualFee} (No Annual Fee!)`,
    topEarning: "3% cash back on U.S. Supermarkets, U.S. Gas Stations, & U.S. Online Retail (up to $6k/yr each, then 1%).",
    keyCredits: "$84/yr Disney Bundle, $180/yr Home Chef (enrollment required).",
    introAPR: "0% for 15 months on purchases & balance transfers.", // From your text
    bestFor: "U.S. consumers seeking strong cash back on everyday essentials with no annual fee, plus useful statement credits & intro APR."
  };


  return (
    <>
      <Head>
        <title>{reviewDataBCE.title} - {siteName}</title>
        <meta name="description" content={reviewDataBCE.description} />
        <meta name="keywords" content={reviewDataBCE.keywords} />
        <meta name="author" content={reviewDataBCE.author.name} /> 
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="robots" content="index,follow,max-image-preview:large" />
        <link rel="canonical" href={pageUrlFull} />
        <link rel="alternate" href={pageUrlFull} hreflang="en-us" />
        <link rel="preload" as="image" href={`${siteUrl}${reviewDataBCE.imageUrl}`} /> 
        <link rel="preload" as="image" href={reviewDataBCE.author.imageUrl} /> 
        <link rel="preload" as="image" href={reviewDataBCE.author.tooltipImageUrl} />  
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
        <meta property="og:title"       content={reviewDataBCE.title} />
        <meta property="og:description" content={reviewDataBCE.description} />
        <meta property="og:url"         content={pageUrlFull} />
        <meta property="og:image"       content={`${siteUrl}${reviewDataBCE.imageUrl}`} /> 
        <meta property="og:image:width" content={String(reviewDataBCE.imageWidth)} /> 
        <meta property="og:image:height" content={String(reviewDataBCE.imageHeight)} /> 
        <meta property="article:publisher" content={`https://www.facebook.com/YourTravelCardInsiderFacebookPage`} />  
        <meta property="article:section"       content="Credit Card Reviews" /> 
        <meta property="article:published_time" content={publishDate} /> 
        <meta property="article:modified_time"  content={updateDate} /> 
        <meta property="article:author" content={reviewDataBCE.author.name} /> 
        {reviewDataBCE.keywords.split(',').map(keyword => (
            <meta property="article:tag" content={keyword.trim()} key={keyword.trim()} />
        ))}
        <meta name="twitter:card"        content="summary_large_image" />
        <meta name="twitter:site" content="@YourTravelCardInsiderTwitterHandle" />  
        <meta name="twitter:creator" content={`@${reviewDataBCE.author.socialLinks?.twitter?.split('/').pop() || 'YourAuthorTwitterHandle'}`} /> 
        <meta name="twitter:title"       content={reviewDataBCE.title} />
        <meta name="twitter:description" content={reviewDataBCE.description} />
        <meta name="twitter:image"       content={`${siteUrl}${reviewDataBCE.imageUrl}`} /> 
        <link rel="icon" href="/favicon.ico" /> 
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" /> 
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" /> 
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" /> 
        <link rel="manifest" href="/site.webmanifest" /> 
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredDataOptimizedBCE) }} />
      </Head>

      <main>
        <div className={styles.reviewPageLayout}>
          <div className={styles.mainContentArea}>
            <section className={styles.heroSection}>
              <div className={styles.heroTextContainer}>
                <h1 className={styles.heroTitle}>
                  {reviewDataBCE.h1Content}
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
                        src={reviewDataBCE.author.imageUrl}
                        alt={`${reviewDataBCE.author.name} headshot`}
                        width={reviewDataBCE.author.imageWidth}
                        height={reviewDataBCE.author.imageHeight}
                        className={styles.authorImageSmall}
                        priority
                    />
                    <div className={styles.authorInfoBlock}>
                        <div className={styles.authorNameLine}>
                            <span className={styles.authorPrefix}>By</span>
                            <span className={styles.authorName}>{reviewDataBCE.author.name}</span> 
                        </div>
                        <span className={styles.authorTitle}>{reviewDataBCE.author.title}</span> 
                        {updateDate && (
                            <time dateTime={updateDate} className={styles.authorLastEdited}>
                                Last updated: {new Date(updateDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })} 
                            </time>
                        )}
                        {reviewDataBCE.author.socialLinks && (
                            <div className={styles.authorSocialLinks}>
                                {reviewDataBCE.author.socialLinks.linkedin && (
                                    <a href={reviewDataBCE.author.socialLinks.linkedin} target="_blank" rel="noopener noreferrer me" aria-label={`${reviewDataBCE.author.name} on LinkedIn`} className={styles.socialIconLink}>
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                                    </a>
                                )}
                                {reviewDataBCE.author.socialLinks.twitter && (
                                    <a href={reviewDataBCE.author.socialLinks.twitter} target="_blank" rel="noopener noreferrer me" aria-label={`${reviewDataBCE.author.name} on Twitter`} className={styles.socialIconLink}>
                                         <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-.422.724-.665 1.56-.665 2.452 0 1.697.864 3.198 2.18 4.078-.8-.025-1.555-.247-2.227-.616v.054c0 2.37 1.683 4.333 3.91 4.78-.426.116-.874.174-1.337.174-.31 0-.611-.03-.904-.085.622 1.936 2.421 3.338 4.553 3.377-1.672 1.309-3.781 2.088-6.072 2.088-.394 0-.784-.023-1.169-.069 2.16 1.389 4.723 2.202 7.482 2.202 8.979 0 13.897-7.446 13.897-13.898 0-.21 0-.42-.015-.63.953-.689 1.778-1.56 2.433-2.525z"/></svg>
                                    </a>
                                )}
                                {reviewDataBCE.author.socialLinks.email && (
                                    <a href={`mailto:${reviewDataBCE.author.socialLinks.email}`} aria-label={`Email ${reviewDataBCE.author.name}`} className={styles.socialIconLink}>
                                         <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"/></svg>
                                    </a>
                                )}
                            </div>
                        )}
                    </div>
                    {showAuthorBioTooltip && reviewDataBCE.author.bioSnippet && (
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
                                    src={reviewDataBCE.author.tooltipImageUrl}
                                    alt={`${reviewDataBCE.author.name} large headshot`}
                                    width={reviewDataBCE.author.tooltipImageWidth}
                                    height={reviewDataBCE.author.tooltipImageHeight}
                                    className={styles.authorTooltipImage}
                                 />
                                 <div className={styles.authorTooltipInfo}>
                                     <span className={styles.authorTooltipName}>{reviewDataBCE.author.name}</span> 
                                     <span className={styles.authorTooltipTitle}>{reviewDataBCE.author.title}</span> 
                                 </div>
                               </div>
                               {reviewDataBCE.author.expertise && reviewDataBCE.author.expertise.length > 0 && (
                                 <div className={styles.authorTooltipExpertise}>
                                     <strong>Expertise</strong>
                                     <ul>
                                         {reviewDataBCE.author.expertise.map(area => <li key={area}>{area}</li>)}
                                     </ul>
                                 </div>
                               )}
                               <p className={styles.authorTooltipBioSnippet}>{reviewDataBCE.author.bioSnippet}</p> 
                               {reviewDataBCE.author.fullBioLink && (
                                   <Link href={reviewDataBCE.author.fullBioLink} legacyBehavior>
                                       <a className={styles.authorTooltipBioLink}>See full bio</a>
                                   </Link>
                               )}
                               {reviewDataBCE.author.socialLinks && (
                                    <div className={styles.authorTooltipSocials}>
                                        {reviewDataBCE.author.socialLinks.linkedin && (
                                             <a href={reviewDataBCE.author.socialLinks.linkedin} target="_blank" rel="noopener noreferrer me" aria-label={`${reviewDataBCE.author.name} on LinkedIn`} className={styles.socialIconLink}>
                                                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                                             </a>
                                         )}
                                         {reviewDataBCE.author.socialLinks.twitter && (
                                             <a href={reviewDataBCE.author.socialLinks.twitter} target="_blank" rel="noopener noreferrer me" aria-label={`${reviewDataBCE.author.name} on Twitter`} className={styles.socialIconLink}>
                                                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-.422.724-.665 1.56-.665 2.452 0 1.697.864 3.198 2.18 4.078-.8-.025-1.555-.247-2.227-.616v.054c0 2.37 1.683 4.333 3.91 4.78-.426.116-.874.174-1.337.174-.31 0-.611-.03-.904-.085.622 1.936 2.421 3.338 4.553 3.377-1.672 1.309-3.781 2.088-6.072 2.088-.394 0-.784-.023-1.169-.069 2.16 1.389 4.723 2.202 7.482 2.202 8.979 0 13.897-7.446 13.897-13.898 0-.21 0-.42-.015-.63.953-.689 1.778-1.56 2.433-2.525z"/></svg>
                                             </a>
                                         )}
                                         {reviewDataBCE.author.socialLinks.email && (
                                             <a href={`mailto:${reviewDataBCE.author.socialLinks.email}`} aria-label={`Email ${reviewDataBCE.author.name}`} className={styles.socialIconLink}>
                                                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"/></svg>
                                             </a>
                                         )}
                                    </div>
                                )}
                        </div>
                    )}
                </div>
                <p className={styles.heroSubtitle}>
                 Discover how the Amex Blue Cash Everyday® turns daily U.S. purchases into real savings with 3% cash back, valuable credits, and no annual fee – perfect for funding your next adventure.
                </p>
                <div className={styles.heroCtaContainer}>
                  <div>
                    <a
                      href={reviewDataBCE.applyLink} 
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
                    src={reviewDataBCE.imageUrl} 
                    alt={reviewDataBCE.cardName}
                    width={reviewDataBCE.imageWidth} 
                    height={reviewDataBCE.imageHeight} 
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
                    {siteName} Rating: <strong>{reviewDataBCE.ratingValue.toFixed(1)}</strong>/10 
                    {showRatingInfo && (
                      <RatingTooltip
                        ref={ratingTooltipRef}
                        ratingValue={reviewDataBCE.ratingValue}
                        ratingCriteria={ratingCriteriaBCE}
                        onClose={() => setShowRatingInfo(false)}
                      />
                    )}
                  </span>
                  <div className={styles.starRating} title={`Rated ${reviewDataBCE.ratingValue} out of 10 stars`}> 
                      ★★★★★
                      <span className={styles.filledStars} style={{ '--rating': `${(reviewDataBCE.ratingValue / 10) * 100}%` }}>
                        ★★★★★
                      </span>
                  </div>
                </div>
                 <div className={styles.ratingDescription}>
                    <i>{reviewDataBCE.description}</i>
                 </div>
              </div>
            </section>

             <div className={styles.reviewContainer}>
                <article>
                <header className={styles.reviewHeader}>
                    <div className={styles.summaryBox} id="summaryBoxTitle">
                        <h2 className={styles.summaryBoxTitle}>{reviewDataBCE.cardName}: Key Everyday Value Insights</h2>
                        <div className={styles.summaryGrid}>
                            <div className={styles.summaryItem}>
                                <span className={styles.summaryIcon}><IconGift /></span> 
                                <span className={styles.summaryLabel}>Welcome Offer:</span>
                                <span className={styles.summaryValue}>{summaryBoxDataBCE.welcomeOffer}</span> 
                            </div>
                            <div className={styles.summaryItem}>
                                <span className={styles.summaryIcon}><IconNoFee /></span> 
                                <span className={styles.summaryLabel}>Annual Fee:</span>
                                <span className={styles.summaryValue}>{summaryBoxDataBCE.annualFee}</span> 
                            </div>
                            <div className={styles.summaryItem}>
                                <span className={styles.summaryIcon}><IconPercent /></span> 
                                <span className={styles.summaryLabel}>Top Cash Back:</span>
                                <span className={styles.summaryValue}>{summaryBoxDataBCE.topEarning}</span> 
                            </div>
                             <div className={styles.summaryItem}>
                                <span className={styles.summaryIcon}><IconDollar /></span> 
                                <span className={styles.summaryLabel}>Key Credits:</span>
                                <span className={styles.summaryValue}>{summaryBoxDataBCE.keyCredits}</span> 
                            </div>
                            <div className={styles.summaryItem}>
                                <span className={styles.summaryIcon}><IconCalendar /></span> 
                                <span className={styles.summaryLabel}>Intro APR:</span>
                                <span className={styles.summaryValue}>{summaryBoxDataBCE.introAPR}</span> 
                            </div>
                            <div className={styles.summaryItem} data-full-width="true">
                                <span className={styles.summaryIcon}><IconPlus /></span> 
                                <span className={styles.summaryLabel}>Best For:</span>
                                <span className={styles.summaryValue}>{summaryBoxDataBCE.bestFor}</span> 
                            </div>
                        </div>
                        <div className={styles.summaryBoxActions}>
                            <a href={reviewDataBCE.ratesLink} className={styles.summaryRatesLink} target="_blank" rel="noopener noreferrer sponsored"
                             onClick={() => window.open(reviewDataBCE.officialOverviewLink + '#rates-and-fees', '_blank')} // Directs to rates on main page
                            >
                                See Card Rates & Fees
                            </a>
                             <a href='/rewards-calculator/blue-cash-everyday' /* UPDATE LINK IF EXISTS */ className={`${styles.heroRewardsCalculator} ${styles.summaryButton}`} target="_blank" rel="noopener noreferrer">
                                Cash Back Calculator
                            </a>
                        </div>
                    </div>
                </header>

                {/* CONTENT SECTIONS START HERE */}

                <section id="section-intro" className={styles.reviewSection}>
                  <h2>BCE Unlocked: Everyday Value for Your Next Adventure</h2>
                  <p>Navigating the credit card world can feel like a treasure hunt, right? So many promise the moon, but finding one that actually aligns with your daily spending—without a hefty annual fee—that's the real quest. If you're a U.S. traveler, maybe like "Taylor," our savvy family adventurer, you want everyday expenses to fuel those anticipated trips. Enter the <a href={reviewDataBCE.officialOverviewLink} target="_blank" rel="noopener noreferrer sponsored">{reviewDataBCE.cardName}</a>. A compelling contender, for sure.</p>
                  <p>This card isn't about complex travel points; nope, it’s a practical powerhouse. Designed to put cash back into your pocket from groceries, gas, and, yeah, those inevitable online shopping sprees. Think of it as your stealthy travel fund builder. Savings on home-front expenses can quietly accumulate, paving the way for your next domestic getaway or significantly contributing to a bigger travel dream. And with no annual fee to worry about (<a href={reviewDataBCE.ratesLink} target="_blank" rel="noopener noreferrer sponsored">see Rates & Fees</a>), the pressure is totally off. So, let's see if the Blue Cash Everyday® Card is the right fit to fuel your everyday life and, ultimately, your travel aspirations.</p>
                </section>

                
                <Image
                    src="/images/blue-cash-everyday-lifestyle-1.jpg" // Placeholder - UPDATE THIS IMAGE
                    alt="Family enjoying a day out, funded by Blue Cash Everyday savings"
                    width={800}
                    height={500}
                    className={styles.contentImage}
                    loading="lazy"
                />

                <section id="section-1" className={styles.reviewSection}>
                  <h2>1. Amex Blue Cash Everyday®: Snapshot of a $0 Fee Powerhouse</h2>
                  <p>Here’s the quick lowdown on what the Blue Cash Everyday® Card offers:</p>
                  <DraggableTableWrapper>
                    <div className={styles.tableContainer}>
                        <table className={`${styles.statsTable} ${styles.highlightTable}`}>
                            <tbody>
                                <tr><td>Card Name:</td><td><strong>{reviewDataBCE.cardName}</strong></td></tr>
                                <tr><td>Issuer:</td><td>American Express National Bank (<a href={reviewDataBCE.officialOverviewLink} target="_blank" rel="noopener noreferrer sponsored">Official Card Page</a>)</td></tr>
                                <tr><td>Annual Fee:</td><td><strong>${reviewDataBCE.annualFee}</strong> (Refer to <a href={reviewDataBCE.ratesLink} target="_blank" rel="noopener noreferrer sponsored" onClick={() => window.open(reviewDataBCE.officialOverviewLink + '#rates-and-fees', '_blank')}>Rates & Fees</a>)</td></tr>
                                <tr>
                                    <td>Welcome Offer:</td>
                                    <td>Earn a $200 statement credit after you spend $2,000 in purchases on your new Card within the first 6 months. (<a href={reviewDataBCE.officialWelcomeOfferLink} target="_blank" rel="noopener noreferrer sponsored">Terms Apply</a>)</td>
                                </tr>
                                <tr>
                                    <td>Core Rewards:</td>
                                    <td>
                                        <ul className={styles.compactList}>
                                            <li><IconGroceries className={styles.inlineIcon} /> 3% Cash Back at U.S. supermarkets (on up to $6,000 per year in purchases, then 1%).</li>
                                            <li><IconCart className={styles.inlineIcon} /> 3% Cash Back on U.S. online retail purchases (on up to $6,000 per year, then 1%).</li>
                                            <li><IconGas className={styles.inlineIcon} /> 3% Cash Back at U.S. gas stations (on up to $6,000 per year, then 1%).</li>
                                            <li>1% Cash Back on other eligible purchases. (<a href={reviewDataBCE.officialBenefitsCreditsLink} target="_blank" rel="noopener noreferrer sponsored">See reward terms</a>)</li>
                                        </ul>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Valuable Statement Credits:</td>
                                    <td>
                                        <ul className={styles.compactList}>
                                            <li>Up to $84/year for The Disney Bundle (enrollment required; $7 monthly credit on eligible subscriptions of $9.99 or more).</li>
                                            <li>Up to $180/year for Home Chef (enrollment required; up to $15 monthly credit). (<a href={reviewDataBCE.officialBenefitsCreditsLink} target="_blank" rel="noopener noreferrer sponsored">See benefit terms</a>)</li>
                                        </ul>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Introductory APR:</td>
                                    <td>{reviewDataBCE.aprRange} (See <a href={reviewDataBCE.ratesLink} target="_blank" rel="noopener noreferrer sponsored" onClick={() => window.open(reviewDataBCE.officialOverviewLink + '#rates-and-fees', '_blank')}>Rates and Fees</a>)</td>
                                </tr>
                                <tr><td>Foreign Transaction Fee:</td><td>2.7% of each transaction after conversion to U.S. dollars.</td></tr>
                                <tr><td>{siteName} "Best For" Tagline:</td><td>"The Blue Cash Everyday® Card: Your no-fee partner for turning U.S. groceries, gas, and online shopping into your next travel fund."</td></tr>
                            </tbody>
                        </table>
                    </div>
                  </DraggableTableWrapper>
                  <p>This snapshot highlights the card's core appeal: strong rewards in common U.S. spending categories without an annual fee, sweetened by useful statement credits. That foreign transaction fee? Definitely positions it for domestic savings.</p>
                </section>

                <section id="section-2" className={styles.reviewSection}>
                  <h2>2. Real-World Rewards: How "Taylor" Maxed Out First-Year Value</h2>
                  <p>Let's see how the Blue Cash Everyday® Card could perform for "Taylor," our family traveler who's all about maximizing rewards from everyday spending for those domestic trips.</p>
                  <h3>Taylor's Assumed Monthly Spending:</h3>
                  <ul className={styles.featureList}>
                    <li>U.S. Supermarket Purchases: $550</li>
                    <li>U.S. Gas Station Purchases: $250</li>
                    <li>U.S. Online Retail Purchases: $300</li>
                    <li>Other Purchases (1% cash back): $400</li>
                  </ul>
                  <h4>Monthly Cash Back Calculation:</h4>
                   <ul className={styles.featureList}>
                    <li>U.S. Supermarket Spending: $550 x 3% = $16.50</li>
                    <li>U.S. Gas Station Spending: $250 x 3% = $7.50</li>
                    <li>U.S. Online Retail Spending: $300 x 3% = $9.00</li>
                    <li>Other Purchases: $400 x 1% = $4.00</li>
                    <li><strong>Total Monthly Cash Back from Spending: A cool $37.00</strong></li>
                  </ul>
                  <h4>Annual Cash Back and Credits for Taylor:</h4>
                  <p>Adjusted Annual Cash Back from Spending: Taylor's $550/month supermarket spend ($6,600/year) hits that $6,000 cap. So...</p>
                  <ul className={styles.featureList}>
                    <li>Supermarkets: ($6,000 x 3%) + ($600 x 1%) = $180 + $6 = $186</li>
                    <li>Gas ($3,000/year): $3,000 x 3% = $90</li>
                    <li>Online Retail ($3,600/year): $3,600 x 3% = $108</li>
                    <li>Other ($4,800/year): $4,800 x 1% = $48</li>
                    <li><strong>Corrected Annual Cash Back: $186 + $90 + $108 + $48 = $432.00</strong></li>
                    <li>Disney Bundle Credit: +$84.00 (assuming full use)</li>
                    <li>Home Chef Credit: +$180.00 (assuming full use)</li>
                    <li><strong>Total Annual Value (Cash Back + Credits): $432.00 + $84.00 + $180.00 = $696.00.</strong> Not bad, Taylor.</li>
                  </ul>
                  <h4>Taylor's Total First-Year Value (Including Welcome Bonus):</h4>
                   <ul className={styles.featureList}>
                    <li>Welcome Bonus: +$200.00 (Taylor nailed that spend requirement)</li>
                    <li><strong>Total First-Year Value for Taylor: $696.00 + $200.00 = $896.00</strong></li>
                  </ul>
                  <p>For Taylor, this card delivers nearly $900 in first-year value. All from everyday spending, no annual fee. That's a serious boost to their travel fund!</p>
                </section>

                <section id="section-3" className={styles.reviewSection}>
                  <h2>3. Competitive Edge: BCE vs. Other No-Annual-Fee Cash Back Cards</h2>
                  <p>The no-annual-fee cash-back market? It's crowded. Here’s how the Blue Cash Everyday® (BCE) squares up against some popular alternatives. For the latest details, check the official sites: 
                  <a href={reviewDataBCE.officialChaseFreedomFlexSite} target="_blank" rel="noopener noreferrer sponsored">Chase Freedom Flex℠</a>, 
                  <a href={reviewDataBCE.officialCitiCustomCashSite} target="_blank" rel="noopener noreferrer sponsored">Citi Custom Cash® Card</a>, 
                  <a href={reviewDataBCE.officialBofACustomizedCashSite} target="_blank" rel="noopener noreferrer sponsored">Bank of America® Customized Cash Rewards</a>, and 
                  <a href={reviewDataBCE.officialDiscoverItCashBackSite} target="_blank" rel="noopener noreferrer sponsored">Discover it® Cash Back</a>.
                  </p>
                  <DraggableTableWrapper>
                    <div className={styles.tableContainer}>
                      <table className={`${styles.statsTable} ${styles.comparisonTable}`}>
                        <thead>
                          <tr>
                            <th>Feature</th>
                            <th>Blue Cash Everyday® Card</th>
                            <th>Chase Freedom Flex℠</th>
                            <th>Citi Custom Cash® Card</th>
                            <th>Bank of America® Customized Cash Rewards</th>
                            <th>Discover it® Cash Back</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td data-label="Feature">Annual Fee</td>
                            <td data-label="BCE"><strong>$0</strong></td>
                            <td data-label="Chase FF">$0</td>
                            <td data-label="Citi CC">$0</td>
                            <td data-label="BofA CCR">$0</td>
                            <td data-label="Discover it CB">$0</td>
                          </tr>
                          <tr>
                            <td data-label="Feature">Typical Signup Bonus</td>
                            <td data-label="BCE">$200 (after $2k spend/6mo)</td>
                            <td data-label="Chase FF">$200 (after $500 spend/3mo)</td>
                            <td data-label="Citi CC">$200 (after $1.5k spend/6mo)</td>
                            <td data-label="BofA CCR">$200 (after $1k spend/3mo)</td>
                            <td data-label="Discover it CB">Match all cash back 1st year</td>
                          </tr>
                          <tr>
                            <td data-label="Feature">Top Earning Categories</td>
                            <td data-label="BCE">3% U.S. Supermarkets, U.S. Gas, U.S. Online Retail (up to $6k/yr each, then 1%)</td>
                            <td data-label="Chase FF">5% on rotating categories (up to $1.5k/qtr), 5% on Chase Travel, 3% Dining & Drugstores</td>
                            <td data-label="Citi CC">5% on top eligible spend category (up to $500 spend/billing cycle, then 1%)</td>
                            <td data-label="BofA CCR">3% in choice category (e.g., gas, online shopping, dining), 2% at grocery stores & wholesale clubs (up to $2.5k/qtr combined for 3%/2%)</td>
                            <td data-label="Discover it CB">5% on rotating categories (up to $1.5k/qtr)</td>
                          </tr>
                           <tr>
                            <td data-label="Feature">Flat Rate on Other Purchases</td>
                            <td data-label="BCE">1%</td>
                            <td data-label="Chase FF">1%</td>
                            <td data-label="Citi CC">1%</td>
                            <td data-label="BofA CCR">1%</td>
                            <td data-label="Discover it CB">1%</td>
                          </tr>
                          <tr>
                            <td data-label="Feature">Foreign Transaction Fee</td>
                            <td data-label="BCE"><strong>2.7%</strong></td>
                            <td data-label="Chase FF">3%</td>
                            <td data-label="Citi CC">3%</td>
                            <td data-label="BofA CCR">3%</td>
                            <td data-label="Discover it CB">No</td>
                          </tr>
                          <tr>
                            <td data-label="Feature">Key Domestic Travel Value</td>
                            <td data-label="BCE">Cash back funds travel; <a href={reviewDataBCE.officialAmexOffersLink} target="_blank" rel="noopener noreferrer sponsored">Amex Offers</a>. Simple.</td>
                            <td data-label="Chase FF">Cash back funds travel; Chase Travel portal bonus.</td>
                            <td data-label="Citi CC">Cash back funds travel.</td>
                            <td data-label="BofA CCR">Cash back funds travel; Potential Preferred Rewards bonus.</td>
                            <td data-label="Discover it CB">Cash back funds travel; No foreign transaction fee.</td>
                          </tr>
                           <tr>
                            <td data-label="Feature">Standout Perk(s)</td>
                            <td data-label="BCE">$84 Disney Bundle credit, $180 Home Chef credit (enrollment req.)</td>
                            <td data-label="Chase FF">Rotating 5% categories, cell phone protection.</td>
                            <td data-label="Citi CC">Automatic 5% in highest spend category.</td>
                            <td data-label="BofA CCR">Customizable 3% category; Preferred Rewards bonuses.</td>
                            <td data-label="Discover it CB">Cashback Match first year; Rotating 5% categories.</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </DraggableTableWrapper>
                  <p><strong>Brief Analysis:</strong> The BCE carves its niche with three consistent 3% U.S. bonus categories and those valuable statement credits. Others might offer rotating or single higher-rate categories, but BCE gives you broader, stable earning. Its domestic travel value? Pure cash back fueling trips, plus <a href={reviewDataBCE.officialAmexOffersLink} target="_blank" rel="noopener noreferrer sponsored">Amex Offers</a>.</p>
                </section>

                <section id="section-4" className={styles.reviewSection}>
                    <h2>4. Pros & Cons: Weighing the Blue Cash Everyday® Benefits</h2>
                    <div className={styles.prosConsContainer}>
                        <div className={styles.prosBox}>
                            <h3 className={styles.prosConsTitle}>Advantages (Pros)</h3>
                            <ul className={styles.featureList}>
                                <li><strong>No Annual Fee:</strong> Accessible and pressure-free. (<a href={reviewDataBCE.ratesLink} target="_blank" rel="noopener noreferrer sponsored" onClick={() => window.open(reviewDataBCE.officialOverviewLink + '#rates-and-fees', '_blank')}>See Rates & Fees</a>)</li>
                                <li><strong>Strong Everyday Rewards:</strong> Competitive 3% cash back in three common U.S. spending categories (U.S. Supermarkets, U.S. Gas Stations, U.S. Online Retail Purchases - up to $6k/yr each, then 1%).</li>
                                <li><strong>Generous Welcome Offer:</strong> $200 statement credit provides immediate value. (<a href={reviewDataBCE.officialWelcomeOfferLink} target="_blank" rel="noopener noreferrer sponsored">Terms Apply</a>)</li>
                                <li><strong>Valuable Statement Credits:</strong> The Disney Bundle ($84/year) and Home Chef ($180/year) credits can effectively "pay you" if you use these services (enrollment required).</li>
                                <li><strong>Introductory 0% APR:</strong> Handy for large purchases or balance transfers for 15 months. (<a href={reviewDataBCE.ratesLink} target="_blank" rel="noopener noreferrer sponsored" onClick={() => window.open(reviewDataBCE.officialOverviewLink + '#rates-and-fees', '_blank')}>See Rates & Fees</a>)</li>
                                <li><strong>Amex Perks:</strong> Access to <a href={reviewDataBCE.officialAmexOffersLink} target="_blank" rel="noopener noreferrer sponsored">Amex Offers</a>, purchase protection, and <a href={reviewDataBCE.officialExtendedWarrantyLink} target="_blank" rel="noopener noreferrer sponsored">extended warranty</a>.</li>
                                <li><strong>Flexible Payment Options:</strong> Features like <a href={reviewDataBCE.officialPlanItPayItLink} target="_blank" rel="noopener noreferrer sponsored">Plan It®</a> and Pay It® (via Amex App) offer modern ways to manage your finances.</li>
                            </ul>
                        </div>
                        <div className={styles.consBox}>
                            <h3 className={styles.prosConsTitle}>Considerations (Cons)</h3>
                            <ul className={styles.featureList}>
                                <li><strong>Spending Caps on 3% Categories:</strong> $6,000 annual cap per category means big spenders will see rewards drop to 1%.</li>
                                <li><strong>Foreign Transaction Fee:</strong> The 2.7% fee makes it less ideal for purchases outside the U.S. (<a href={reviewDataBCE.ratesLink} target="_blank" rel="noopener noreferrer sponsored" onClick={() => window.open(reviewDataBCE.officialOverviewLink + '#rates-and-fees', '_blank')}>See Rates & Fees</a>)</li>
                                <li><strong>Specific Merchant Definitions:</strong> Exclusions for "U.S. supermarkets" (e.g., Walmart, Target don't count) and "U.S. online retail" mean you must pay attention to merchant coding.</li>
                                <li><strong>Good to Excellent Credit Typically Required:</strong> Might not be accessible for everyone.</li>
                                <li><strong>Cash Back Only:</strong> Rewards are straightforward Reward Dollars; no transferring to Amex Membership Rewards points.</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <Image
                    src="/images/blue-cash-everyday-lifestyle-2.jpg" // Placeholder - UPDATE THIS IMAGE
                    alt="Couple planning a trip using a laptop, with Blue Cash Everyday card nearby"
                    width={800}
                    height={500}
                    className={styles.contentImage}
                    loading="lazy"
                />

                <section id="section-5" className={styles.reviewSection}>
                  <h2>5. Welcome Offer: A Closer Look at the Initial $200 Bonus</h2>
                  <p>American Express rolls out the welcome mat for new Blue Cash Everyday® cardmembers with an attractive sign-up bonus: <strong>Earn a $200 statement credit after spending $2,000 in purchases on your new Card within the first 6 months of account opening.</strong> (<a href={reviewDataBCE.officialWelcomeOfferLink} target="_blank" rel="noopener noreferrer sponsored">Terms Apply</a>). That's a solid 10% return on that initial spend. Sweet.</p>
                  <p>Meeting the $2,000 threshold over six months (around $334 per month) is generally doable for many by just channeling regular expenses. This bonus is definitely competitive for no-annual-fee cards. Just remember Amex's "once-per-lifetime" rule for welcome offers on a specific card; Amex often lets you know if you're eligible during the application before a hard credit check. Helpful! (Refer to offer terms on the <a href={reviewDataBCE.officialWelcomeOfferLink} target="_blank" rel="noopener noreferrer sponsored">Amex site</a> for specifics on this rule).</p>
                </section>

                <section id="section-6" className={styles.reviewSection}>
                  <h2>6. Earning Power: Mastering 3% Cash Back & Understanding Caps</h2>
                  <p>The heart of the Blue Cash Everyday® Card's earning potential? Its three 3% cash back categories. Knowing the details is key. All are subject to <a href={reviewDataBCE.officialBenefitsCreditsLink} target="_blank" rel="noopener noreferrer sponsored">reward terms and conditions</a>.</p>
                  <div className={styles.earningCategories}>
                    <div className={styles.categoryItem}>
                        <IconGroceries className={styles.categoryIcon}/>
                        <h3>3% Cash Back at U.S. Supermarkets</h3>
                        <p>For your grocery hauls at traditional U.S. supermarkets (think Kroger, Safeway, ALDI). Important: excludes superstores (Walmart, Target), warehouse clubs (Costco), convenience stores, and meal-kit services. This 3% is on up to $6,000 in purchases per calendar year, then it drops to 1%.</p>
                    </div>
                    <div className={styles.categoryItem}>
                        <IconCart className={styles.categoryIcon}/>
                        <h3>3% Cash Back on U.S. Online Retail Purchases</h3>
                        <p>For physical goods bought via a U.S. retail merchant's website or app (like Amazon.com for tangible goods, department store sites). Generally excludes online services (travel, tickets, food delivery). Merchant categorization is the name of the game here. Also capped at $6,000 per calendar year, then 1%.</p>
                    </div>
                    <div className={styles.categoryItem}>
                        <IconGas className={styles.categoryIcon}/>
                        <h3>3% Cash Back at U.S. Gas Stations</h3>
                        <p>Fill 'er up at U.S. gas stations and get 3% back. Usually includes major brands and many independents. But, similar to supermarkets, gas bought at superstores, supermarkets, and warehouse clubs typically earns 1%, not 3%. Capped at $6,000 per calendar year, then 1%.</p>
                    </div>
                  </div>
                  <p>And remember, "U.S." means U.S.-based merchants. The $6,000 annual spending limit for the 3% rate is individual to each of these categories. Spend over $6,000 in one of those categories in a calendar year, and further purchases in that specific category earn 1%. So, that's a maximum of $180 cash back from each bonus category annually ($6,000 x 3%). You can usually track your progress in your Amex online account. Easy peasy.</p>
                  <h3>Steady Earnings: The Value of 1% Cash Back on Everything Else</h3>
                  <p>While the 3% categories are the stars, the Blue Cash Everyday® Card also hooks you up with 1% cash back on all other eligible purchases. This applies outside bonus categories or within them after you hit that $6,000 cap. This unlimited 1% rate ensures every eligible purchase contributes. A decent "catch-all."</p>
                </section>

                <section id="section-7" className={styles.reviewSection}>
                  <h2>7. Cashing In: Redeeming Your Blue Cash Everyday® Reward Dollars</h2>
                  <p>Earning rewards is great. Redeeming them easily? Just as important. The Blue Cash Everyday® Card keeps it simple with "Reward Dollars." For full redemption options and terms, visit the <a href={reviewDataBCE.officialRewardRedemptionLink} target="_blank" rel="noopener noreferrer sponsored">Amex rewards section</a> of their website.</p>
                  <p>Main ways to redeem:</p>
                  <ul className={styles.featureList}>
                    <li><strong>Statement Credits:</strong> Apply 'em directly against your card balance. Often, no minimum. Boom.</li>
                    <li><strong>Amazon.com Checkout:</strong> Use your Reward Dollars to pay at Amazon.com. Click, done.</li>
                  </ul>
                  <p>Your Reward Dollars generally don't expire as long as your account remains open and in good standing. But know this: they are not Amex Membership Rewards® points and can't be converted. Pure cash back, folks.</p>
                </section>

                <section id="section-8" className={styles.reviewSection}>
                  <h2>8. Statement Credits: Disney Bundle & Home Chef Perks Detailed</h2>
                  <p>Beyond the core cash back, the BCE offers valuable statement credits that can further offset your spending if they align with your lifestyle. Enrollment is required for these via your Amex online account. Check <a href={reviewDataBCE.officialBenefitsCreditsLink} target="_blank" rel="noopener noreferrer sponsored">benefit terms on Amex's site</a>.</p>
                  <div className={styles.creditsContainer}> {/* You might want a specific style for this */}
                      <div className={styles.creditItem}>
                          <h4>Entertainment Perk: Unpacking the $84 Disney Bundle Credit</h4>
                          <p>Standout perk alert! Get a $7 statement credit each month after using your enrolled Blue Cash Everyday® Card to spend $9.99 or more on an eligible Disney Bundle subscription (can include Disney+, Hulu, ESPN+). That’s up to $84 in credits per year. If you subscribe, that's just direct savings.</p>
                      </div>
                      <div className={styles.creditItem}>
                          <h4>Culinary Perk: Savoring the $180 Home Chef Credit</h4>
                          <p>Foodies and busy families, listen up! The Blue Cash Everyday® Card offers up to $15 in statement credits per month when you use your enrolled card to pay for a Home Chef meal kit subscription. This can add up to $180 per year. A hefty saving if meal kits are your jam.</p>
                      </div>
                  </div>
                </section>

                 <section id="section-9" className={styles.reviewSection}>
                  <h2>9. Beyond Basics: Amex Offers, Protections, and Financial Tools</h2>
                  <p>More Amex goodness comes with your Blue Cash Everyday® Card. For full details on these benefits, visit the <a href={reviewDataBCE.officialProtectionsLink} target="_blank" rel="noopener noreferrer sponsored">American Express benefits page</a>.</p>
                  <ul className={styles.featureList}>
                    <li><strong><a href={reviewDataBCE.officialAmexOffersLink} target="_blank" rel="noopener noreferrer sponsored">Amex Offers</a>:</strong> Targeted discounts and extra statement credits at a variety of merchants. Check your account often to add these to your card!</li>
                    <li><strong>Shopping Protections:</strong>
                        <ul>
                            <li><em>Purchase Protection:</em> Covers eligible new purchases against accidental damage or theft for up to 90 days from the purchase date (limits apply).</li>
                            <li><em><a href={reviewDataBCE.officialExtendedWarrantyLink} target="_blank" rel="noopener noreferrer sponsored">Extended Warranty</a>:</em> Can add up to one additional year to U.S. manufacturer's warranties of 5 years or less on eligible items.</li>
                        </ul>
                    </li>
                    <li><strong>Travel-Related Perks (U.S. Travelers):</strong>
                        <ul>
                            <li><em>Car Rental Loss and Damage Insurance:</em> Provides secondary coverage for damage to or theft of most rental vehicles when you use your Card to reserve and pay for the entire rental and decline the rental company’s collision damage waiver (CDW).</li>
                            <li><em>Global Assist® Hotline:</em> Provides 24/7 coordination and assistance services when you travel more than 100 miles from home (you pay for third-party service costs).</li>
                        </ul>
                    </li>
                     <li><strong>American Express Experiences:</strong> Access to ticket presales and cardmember-only events.</li>
                     <li><strong>Managing Your Money with <a href={reviewDataBCE.officialPlanItPayItLink} target="_blank" rel="noopener noreferrer sponsored">Plan It®</a> & Pay It®:</strong>
                        <ul>
                            <li><em>Plan It®:</em> Split eligible purchases of $100 or more into fixed-fee monthly installments (you still earn rewards on the purchase).</li>
                            <li><em>Pay It®:</em> Make quick payments on small purchase amounts via the Amex App.</li>
                            <li><em>Send & Split®:</em> Share expenses with Venmo or PayPal users directly from the Amex App; you earn rewards on the full purchase amount charged to your card.</li>
                        </ul>
                    </li>
                  </ul>
                </section>

                <section id="section-10" className={styles.reviewSection}>
                  <h2>10. The Fine Print: Blue Cash Everyday® Rates & Fees Explained</h2>
                  <p>It's crucial to know the rates and fees associated with any credit card. For the most current information, always check the official <a href={reviewDataBCE.ratesLink} target="_blank" rel="noopener noreferrer sponsored" onClick={() => window.open(reviewDataBCE.officialOverviewLink + '#rates-and-fees', '_blank')}>American Express Blue Cash Everyday® Card Rates & Fees document</a>.</p>
                  <DraggableTableWrapper>
                    <div className={styles.tableContainer}>
                      <table className={`${styles.statsTable} ${styles.ratesFeesTable}`}>
                        <thead>
                          <tr>
                            <th>Fee/Rate Category</th>
                            <th>Details (Verify with Issuer)</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr><td>Annual Fee:</td><td><strong>$0</strong></td></tr>
                          <tr><td>Introductory Purchase APR:</td><td>0% for 15 months from date of account opening.</td></tr>
                          <tr><td>Regular Purchase APR:</td><td>19.24% - 29.99% Variable.</td></tr>
                          <tr><td>Introductory Balance Transfer APR:</td><td>0% for 15 months from date of account opening (balance transfers must be requested within 60 days of account opening).</td></tr>
                          <tr><td>Balance Transfer Fee:</td><td>Either $5 or 3% of the amount of each transfer, whichever is greater.</td></tr>
                          <tr><td>Foreign Transaction Fee:</td><td><strong>2.7%</strong> of each transaction after conversion to U.S. dollars.</td></tr>
                          <tr><td>Late Payment Fee:</td><td>Up to $40.</td></tr>
                          <tr><td>Returned Payment Fee:</td><td>Up to $40.</td></tr>
                           <tr><td>Cash Advance Fee:</td><td>Either $10 or 5% of the amount of each cash advance, whichever is greater.</td></tr>
                        </tbody>
                      </table>
                    </div>
                  </DraggableTableWrapper>
                  <p>(APRs are variable and based on the Prime Rate. Always check official Amex docs for current info). Pay balances in full each month whenever possible. Seriously. Avoid interest that eats away at your hard-earned rewards.</p>
                </section>
                
                <section id="section-11" className={styles.reviewSection}>
                  <h2>11. Is BCE Your Perfect Travel-Funding Partner? Ideal User Profile</h2>
                  <p>The Blue Cash Everyday® shines for specific U.S. folks.</p>
                  <h3>This Card is a Strong Fit If You Are:</h3>
                   <div className={styles.profileCardContainer}>
                        <div className={styles.profileCard}>
                            <h4>A Budget-Conscious U.S. Family/Individual</h4>
                            <p>All that spending at U.S. supermarkets and U.S. gas stations? Ka-ching with 3% cash back!</p>
                        </div>
                        <div className={styles.profileCard}>
                            <h4>A Savvy U.S. Online Shopper</h4>
                            <p>If you frequently buy physical goods from U.S. retail merchants online, the 3% back is a great perk.</p>
                        </div>
                        <div className={styles.profileCard}>
                            <h4>Seeking Simple, Good Rewards with No Annual Fee</h4>
                            <p>No complex tracking, no annual fee eating into your earnings. Just straightforward cash back.</p>
                        </div>
                        <div className={styles.profileCard}>
                            <h4>Needing a 0% Intro APR Period</h4>
                            <p>Plan a large purchase or want to transfer a balance? The 15-month 0% intro APR is very useful.</p>
                        </div>
                        <div className={styles.profileCard}>
                            <h4>An Amex Newcomer with Good Credit</h4>
                            <p>A solid entry point into the American Express ecosystem without an annual fee commitment.</p>
                        </div>
                    </div>

                  <h3>This Card Might Not Be the Best Choice If You Are:</h3>
                  <ul className={styles.featureList}>
                    <li><strong>A Frequent International Traveler:</strong> That 2.7% foreign transaction fee will add up.</li>
                    <li><strong>A Really High Spender in Bonus Categories:</strong> Those $6,000 annual caps per 3% category mean rewards drop to 1% eventually.</li>
                    <li><strong>Focused on Travel Points/Miles:</strong> This is a cash back card, plain and simple. Reward Dollars don't transfer to airline/hotel partners.</li>
                    <li><strong>Primarily a Warehouse Club/Superstore Grocery Shopper:</strong> Purchases at places like Costco, Sam's Club, Walmart, or Target for groceries typically don't qualify for the 3% U.S. supermarket rate.</li>
                  </ul>
                  <p>Good to excellent credit (often a FICO score of 670 or higher) is generally the word on the street for approval, but Amex considers multiple factors.</p>
                </section>

                <section id="section-12" className={styles.reviewSection}>
                  <h2>12. Amex Showdown: Blue Cash Everyday® or Blue Cash Preferred®?</h2>
                  <p>The eternal question for Amex cash back seekers: the Blue Cash Everyday® (BCE) or its sibling, the <a href={reviewDataBCE.officialBlueCashPreferredSite} target="_blank" rel="noopener noreferrer sponsored">Blue Cash Preferred® Card (BCP)</a>? The BCP typically has a $95 annual fee (though a $0 intro annual fee for the first year is common for new Card Members).</p>
                  <DraggableTableWrapper>
                    <div className={styles.tableContainer}>
                      <table className={`${styles.statsTable} ${styles.comparisonTable}`}>
                        <thead>
                          <tr>
                            <th>Feature</th>
                            <th>Blue Cash Everyday® (BCE)</th>
                            <th>Blue Cash Preferred® (BCP)</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td data-label="Feature">Annual Fee</td>
                            <td data-label="BCE"><strong>$0</strong></td>
                            <td data-label="BCP">$95 ($0 intro annual fee for first year common)</td>
                          </tr>
                          <tr>
                            <td data-label="Feature">U.S. Supermarkets</td>
                            <td data-label="BCE">3% (up to $6,000/yr, then 1%)</td>
                            <td data-label="BCP"><strong>6%</strong> (up to $6,000/yr, then 1%)</td>
                          </tr>
                           <tr>
                            <td data-label="Feature">U.S. Online Retail Purchases</td>
                            <td data-label="BCE"><strong>3%</strong> (up to $6,000/yr, then 1%)</td>
                            <td data-label="BCP">1%</td>
                          </tr>
                          <tr>
                            <td data-label="Feature">U.S. Gas Stations</td>
                            <td data-label="BCE">3% (up to $6,000/yr, then 1%)</td>
                            <td data-label="BCP">3% (uncapped)</td>
                          </tr>
                          <tr>
                            <td data-label="Feature">Select U.S. Streaming Subscriptions</td>
                            <td data-label="BCE">1% (plus The Disney Bundle Credit if eligible)</td>
                            <td data-label="BCP"><strong>6%</strong> (uncapped)</td>
                          </tr>
                           <tr>
                            <td data-label="Feature">Transit</td>
                            <td data-label="BCE">1%</td>
                            <td data-label="BCP">3% (uncapped)</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </DraggableTableWrapper>
                  <p><strong>The Break-Even:</strong> BCP's big gun is 6% at U.S. supermarkets. Generally, if you spend over ~$3,172 per year (around $61 per week) at U.S. supermarkets, the BCP's higher cash back can overcome its annual fee compared to the BCE. This doesn't factor in the BCE's U.S. online retail 3% category or differing values one might place on the credits.</p>
                  <ul className={styles.featureList}>
                      <li><strong>Choose BCE for:</strong> Moderate spending, if you hate annual fees, or if you really value that 3% on U.S. online retail purchases and the specific BCE credits (Disney, Home Chef) are a good fit.</li>
                      <li><strong>Choose BCP for:</strong> High U.S. supermarket spending (typically over $3,200/year), or if you have significant spending on select U.S. streaming services or transit. The BCP also comes with different credits (e.g., an Equinox credit, terms apply).</li>
                  </ul>
                </section>

                <section id="section-13" className={styles.reviewSection}>
                  <h2>13. From Real Users: Authentic Blue Cash Everyday® Testimonials</h2>
                  <p>Real talk from actual cardholders offers valuable perspective:</p>
                  <div className={styles.testimonialContainer}>
                      <blockquote className={styles.testimonialQuote}>
                          <p>"Reapplied for BCE after past Amex issues, got $2K approval! So grateful Amex gave me a second chance & honored my original 'Member Since' date."</p>
                          <footer>– Maria, Comeback Queen (Summary: Amex might offer second chances.)</footer>
                      </blockquote>
                      <blockquote className={styles.testimonialQuote}>
                          <p>"Over a decade with BCE. No annual fee, 3% on essentials, Disney credit. Still my go-to. Great no-AF card."</p>
                          <footer>– James, Long-Term Loyalist (Summary: Enduring value, solid rewards, useful credits.)</footer>
                      </blockquote>
                      <blockquote className={styles.testimonialQuote}>
                          <p>"Was excited for 3% at my grocery store, but some trips only got 1%. Heads up: merchant coding really matters for rewards. My local 'market' codes as a convenience store sometimes."</p>
                          <footer>– Chloe, Category Detective (Summary: Gotta understand those merchant category definitions.)</footer>
                      </blockquote>
                       <blockquote className={styles.testimonialQuote}>
                          <p>"BCE quickly became my main card. The Amex app is super easy for tracking rewards and payments, and their fraud protection is top-notch. Had an issue once, resolved fast."</p>
                          <footer>– David, App Appreciator (Summary: Praises Amex digital experience and security.)</footer>
                      </blockquote>
                       <blockquote className={styles.testimonialQuote}>
                          <p>"Good credit, good income, low utilization. Amex approved me for BCE... but only for $1,000. Felt like a joke compared to my other cards. Disappointed with the starting limit, but the rewards are decent for what it is."</p>
                          <footer>– Priya, Credit Limit Questioner (Summary: Credit limits can be a wild card, sometimes lower than expected.)</footer>
                      </blockquote>
                  </div>
                </section>
                
                <section id="section-14" className={`${styles.reviewSection} ${styles.faqSection}`}>
                  <h2>14. Blue Cash Everyday® FAQs: Your Key Questions Answered</h2>
                  <div className={styles.faqContainer}>
                      {structuredDataOptimizedBCE['@graph'].find(item => item['@type'] === 'FAQPage').mainEntity.map((faq, index) => (
                          <details key={index} className={styles.faqItem} name={`faq-${index + 1}`}>
                              <summary className={styles.faqQuestion}>{`${index + 1}. ${faq.name}`}</summary>
                              <div className={styles.faqAnswer} dangerouslySetInnerHTML={{ __html: faq.acceptedAnswer.text }} />
                          </details>
                      ))}
                  </div>
                </section>


                <section id="section-15" className={styles.reviewSection}>
                  <h2>15. Expert Verdict: Should BCE Be Your Next Everyday Card?</h2>
                  <p>So, the Blue Cash Everyday® Card from American Express. It confidently carves out its space as a top-tier player in the no-annual-fee credit card game. Its real strength? Delivering straightforward, robust cash back on U.S. spending categories that are, let's face it, the backbone of many household budgets. An intelligent choice for savvy consumers looking to make their money work a bit harder.</p>
                  <p>The combo of a <a href={reviewDataBCE.ratesLink} target="_blank" rel="noopener noreferrer sponsored" onClick={() => window.open(reviewDataBCE.officialOverviewLink + '#rates-and-fees', '_blank')}>$0 annual fee</a> with 3% cash back at U.S. supermarkets, U.S. gas stations, and on U.S. online retail purchases (up to $6,000 per year in each category, then 1%) – that's compelling. Then you layer on those genuinely useful statement credits: up to $84 annually for The Disney Bundle and up to $180 for Home Chef (enrollment required, <a href={reviewDataBCE.officialBenefitsCreditsLink} target="_blank" rel="noopener noreferrer sponsored">terms apply</a>). The card’s value just keeps looking better. Toss in the 0% introductory APR on purchases and balance transfers for 15 months (<a href={reviewDataBCE.ratesLink} target="_blank" rel="noopener noreferrer sponsored" onClick={() => window.open(reviewDataBCE.officialOverviewLink + '#rates-and-fees', '_blank')}>see Rates & Fees</a>), and you've got a card offering both earning power and financial flexibility right out of the gate.</p>
                  <p>But, it’s not a magic wand for everyone. Those $6,000 annual spending caps in bonus categories mean super-high spenders might hit a rewards ceiling. And that 2.7% foreign transaction fee? Makes it a definite "no" for international adventures. But for its target audience – U.S. consumers like our "Taylor" who want to maximize rewards on domestic everyday spending to fuel their travel dreams – these are often totally acceptable trade-offs.</p>
                  <blockquote className={styles.highlightQuote}>
                    <strong>Bottom line:</strong> The Blue Cash Everyday® Card is an excellent choice for U.S.-based individuals and families whose spending aligns with its bonus categories and who can actually use those statement credits.
                  </blockquote>
                  <p>If you’re seeking a reliable, rewarding, no-annual-fee card from a reputable issuer to manage everyday U.S. expenses and help fund those cherished domestic trips, the Blue Cash Everyday® Card from American Express absolutely deserves a prime spot in your wallet. It’s a smart, practical tool for turning daily purchases into future adventures. Boom.</p>
                   <div className={styles.ctaButtonContainer}>
                        <a href={reviewDataBCE.applyLink} target="_blank" rel="noopener noreferrer sponsored" className={styles.applyNowButton}>
                            Apply for the Blue Cash Everyday® Card
                        </a>
                        <p className={styles.applyDisclaimer}>Review rates, fees, and terms on the <a href={reviewDataBCE.officialOverviewLink} target="_blank" rel="noopener noreferrer sponsored">official American Express site</a> before applying.</p>
                    </div>
                </section>


                <section id="section-eat" className={`${styles.reviewSection} ${styles.eatSection}`}>
                    <h2 dangerouslySetInnerHTML={{ __html: `Our Commitment to E-A-T: Expertise, Authority &amp; Trustworthiness in ${reviewDataBCE.cardName} Reviews`}}></h2>
                    {/* Add your E-A-T statement here, similar to the Business Platinum example if you have one, or create one */}
                    <p>At {siteName}, we are committed to providing reviews that adhere to the highest standards of Expertise, Authoritativeness, and Trustworthiness (E-A-T). Our analysis of the {reviewDataBCE.cardName} is based on thorough research of its features, benefits, terms, and conditions, alongside comparative market analysis and consideration of real-world user experiences. We strive to present clear, accurate, and actionable information to help you make informed financial decisions. Our editorial content is independent, and our opinions are our own. While we may receive compensation from partner links, this does not influence our ratings or reviews. Please refer to the official American Express website for the most current card details and to apply.</p>
                </section>

                </article>
            </div>
          </div>
          <aside className={styles.sidebarArea}>
            <TableOfContents sections={tocSectionsBCE} />
             {/* You can add other sidebar elements here, like "Other Cards to Consider" or "Quick Tips" */}
            <div className={styles.sidebarWidget}>
                <h3 className={styles.sidebarTitle}>Quick Card Facts</h3>
                <ul className={styles.quickFactsList}>
                    <li><strong>Annual Fee:</strong> $0</li>
                    <li><strong>Welcome Offer:</strong> $200 Credit (spend $2k/6mo)</li>
                    <li><strong>Top Cash Back:</strong> 3% (US Supermarkets, Gas, Online Retail - $6k caps)</li>
                    <li><strong>Key Credits:</strong> Disney Bundle, Home Chef</li>
                    <li><strong>Intro APR:</strong> Yes, 15 months</li>
                    <li><strong>Foreign Fee:</strong> 2.7%</li>
                </ul>
                <a href={reviewDataBCE.applyLink} target="_blank" rel="noopener noreferrer sponsored" className={`${styles.applyNowButton} ${styles.sidebarApplyButton}`}>Learn More & Apply</a>
            </div>
          </aside>

        </div>
      </main>
        <div className={styles.stickyFooterContainer}>
        <div className={styles.stickyFooterContent}>
            <Image src={reviewDataBCE.imageUrl} alt={`${reviewDataBCE.cardName} small image`} width={60} height={38} className={styles.stickyFooterCardImage} /> 
            <div className={styles.stickyFooterText}>
              <span className={styles.stickyFooterCardName}>{reviewDataBCE.cardName}</span>
              <span className={styles.stickyFooterRating}>{siteName} Rating: {reviewDataBCE.ratingValue.toFixed(1)}/10</span> 
            </div>
            <div className={styles.stickyFooterButtons}>
                <a
                    href={reviewDataBCE.applyLink}
                    className={`${styles.stickyFooterBtn} ${styles.stickyFooterBtnApply}`}
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                >
                    Apply Now
                </a>
                <a
                    href={reviewDataBCE.ratesLink} 
                    onClick={() => window.open(reviewDataBCE.officialOverviewLink + '#rates-and-fees', '_blank')}
                    className={`${styles.stickyFooterBtn} ${styles.stickyFooterBtnRates}`}
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                >
                    See Rates & Fees
                </a>
            </div>
        </div>
      </div>
       <div className={styles.disclaimerSection}>
            <p><strong>Disclaimer:</strong> Information is accurate as of {new Date(updateDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })} but is subject to change. Offers and terms may vary. Please refer to the <a href={reviewDataBCE.officialOverviewLink} target="_blank" rel="noopener noreferrer sponsored">official American Express website</a> for the most current details before applying. {siteName} may be compensated through third-party advertisers. Editorial content is not provided or commissioned by the credit card issuers. Opinions expressed here are the author's alone, not those of the credit card issuers, and have not been reviewed, approved or otherwise endorsed by the credit card issuers.</p>
      </div>
    </>
  );
}

export default AmericanExpressBlueCashEverydayCardReviewPage;