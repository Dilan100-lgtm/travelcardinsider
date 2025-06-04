/* ------------------------------------------------------------------
    File:  pages/reviews/british-airways-visa-signature-review-concise.js
    Route: https://www.travelcardinsider.com/reviews/british-airways-visa-signature-review-concise
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

const RatingTooltip = dynamic(() => import('../../components/RatingTooltip'), { ssr: false, loading: () => null });

/* ──────────────────────────────
    CONSTANTS & STATIC DATA
    ────────────────────────────── */
const siteName = 'Travelcardinsider';
const siteUrl = 'https://www.travelcardinsider.com';
// Using a different path to distinguish from the previous, more verbose version if needed
const pagePath = '/reviews/british-airways-visa-signature-review-concise';
const pageUrlFull = `${siteUrl}${pagePath}`;
const publishDate = '2025-06-04';
const updateDate = '2025-06-04';

const reviewData = {
  cardName        : 'British Airways Visa Signature® Card',
  cardShortName   : 'BA Visa Signature',
  title           : 'British Airways Visa Signature® Card Review (2025): Avios, Perks & Value', // Concise Title
  description     : 'Concise 2025 review of the Chase British Airways Visa Signature® Card. Key features: Avios earning, Travel Together Ticket, statement credits, 10% flight discount, $95 fee. Is it for you?', // Concise Description
  keywords        : 'British Airways Visa Signature Card review, Chase BA Avios card, Travel Together Ticket, Avios rewards, oneworld, airline credit card, BA Visa 2025',
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
          'Airline Co-Branded Credit Cards',
          'Travel Rewards Programs (Avios, Oneworld)',
          'Premium Cabin Redemptions',
          'Credit Card Welcome Offers',
          'Maximizing Travel Statement Credits'
      ],
      bioSnippet: 'Dilan Madushanka, founder of Travelcardinsider, analyzes airline loyalty programs and co-branded credit cards like the British Airways Visa Signature® Card.',
      fullBioLink: '/author/dilan-madushanka',
      publishedStats: 'X+ card reviews published',
      testedStats: 'Over Y+ card benefits analyzed',
      socialLinks: {
          linkedin: 'https://www.linkedin.com/in/dilan-madushanka-b65293365',
          twitter: 'https://x.com/team_dilan',
          email: 'team@travelcardinsider.com'
      }
  },
  siteName: siteName,
  imageUrl        : '/hero_Card.png', // Placeholder - UPDATE THIS
  imageWidth      : 1290,
  imageHeight     : 812,
  ratingValue     : 7.7,  // Example rating
  ratingCount     : 175,  // Example count
  reviewBody      : 'Evaluation of the British Airways Visa Signature® Card based on its Avios earning, Travel Together Ticket, statement credits, flight discounts, annual fee, welcome offer, and utility for transatlantic and oneworld® travelers.', // Concise for Schema
  aprRange        : 'Variable APR, e.g., 21.49% - 28.49% (Varies with Prime Rate). See official Chase terms.',
  annualFee       : 95,
  applyLink       : 'https://creditcards.chase.com/avios/britishairways',
  ratesFeesLink   : 'https://creditcards.chase.com/avios/britishairways',
  
  source1Url      : 'https://creditcards.chase.com/travel-credit-cards/avios/british-airways',
  source1Title    : 'British Airways Visa Signature® Card Official Chase Page',
  source2Url      : 'https://www.britishairways.com/content/en/us/the-british-airways-club',
  source2Title    : 'British Airways Executive Club Official Page',
  source3Url      : 'https://www.britishairways.com/content/en/us/the-british-airways-club/avios/collecting-avios/credit-cards/us-travel-together-ticket',
  source3Title    : 'British Airways Travel Together Ticket Official Details',
  source4Url      : 'https://www.britishairways.com/content/en/us/the-british-airways-club/avios/collecting-avios/credit-cards/us-chase-visa-signature-offer',
  source4Title    : 'British Airways Cardmember 10% Discount Official Page',
  source5Url      : 'https://usa.visa.com/pay-with-visa/cards/visa-credit-cards/visa-signature-credit-cards.html',
  source5Title    : 'Visa Signature® Benefits General Information',
  source6Url      : 'https://creditcards.chase.com/rewards-credit-cards/sapphire/preferred', 
  source6Title    : 'Chase Sapphire Preferred® Card Official Page',
  source7Url      : 'https://www.americanexpress.com/us/credit-cards/card/gold-card/',
  source7Title    : 'American Express® Gold Card Official Page',
  source8Url      : 'https://www.citi.com/credit-cards/citi-strata-premier-card',
  source8Title    : 'Citi Strata Premier℠ Card Official Page',
  source9Url      : 'https://www.bankofamerica.com/credit-cards/products/alaska-airlines-credit-card/',
  source9Title    : 'Alaska Airlines Visa Signature® Card Official Page',

  officialBaChase10Link: 'https://www.britishairways.com/content/en/us/the-british-airways-club/avios/collecting-avios/credit-cards/us-chase-visa-signature-offer',

  sku             : 'CHASE-BAVISASIG-TCI-2025-CONCISE',
  mpn             : 'CHASEBAVISASIGCONCISE',
  h1Content       : "British Airways Visa Signature® Card: Avios & Travel Perks Review", // Concise H1
  heroSubtitle    : "Our 2025 review of the BA Visa Signature®: Analyzing its $95 fee against Avios, the Travel Together Ticket, & travel credits." // Concise Subtitle
};

const processCitedText = (textWithMarkers) => {
    if (!textWithMarkers) return '';
    const citationRegex = /\[CITE:(\d+)\]/g;
    return textWithMarkers.replace(citationRegex, (match, citationNumberStr) => {
        const citationNumber = parseInt(citationNumberStr, 10);
        let url = '#'; 
        let title = 'View Source'; 
        switch (citationNumber) {
            case 1: url = reviewData.source1Url; title = reviewData.source1Title; break;
            case 2: url = reviewData.source2Url; title = reviewData.source2Title; break;
            case 3: url = reviewData.source3Url; title = reviewData.source3Title; break;
            case 4: url = reviewData.source4Url; title = reviewData.source4Title; break;
            case 5: url = reviewData.source5Url; title = reviewData.source5Title; break;
            case 6: url = reviewData.source6Url; title = reviewData.source6Title; break;
            case 7: url = reviewData.source7Url; title = reviewData.source7Title; break;
            case 8: url = reviewData.source8Url; title = reviewData.source8Title; break;
            case 9: url = reviewData.source9Url; title = reviewData.source9Title; break;
            default: title = `Source ${citationNumber}`; break;
        }
        return `<sup><a href="${url}" target="_blank" rel="noopener noreferrer sponsored" title="${title}">${citationNumber}</a></sup>`;
    });
};

const faqsContent = [ // Directly from user's FAQ text
    { q: 'How to use the Travel Together Ticket?', a: 'Spend $30K/calendar year. Book a BA reward flight with Avios; companion joins for 0 Avios (pays taxes/fees). Solo, get 50% Avios discount. Valid 2 years, BA flights from/to U.S. ' },
    { q: 'Best way to minimize BA taxes/surcharges?', a: 'Redeem Avios on partners (AA, Alaska) for often lower fees. Use "Reward Flight Saver" for short-haul. Upgrades on cash tickets can be good value. ' },
    { q: 'Can 10% flight discount combine with other BA offers?', a: 'Usually no. Code `BACHASE10` terms typically exclude other offers. Check at booking. ' },
    { q: 'Do card Avios count for BA elite status?', a: 'No. Card Avios are for redemptions, not Tier Points for elite status. ' },
    { q: 'What if I cancel the card – what about my Avios?', a: 'Avios are in your BA Executive Club account, separate from the card. Ensure Avios activity every 36 months to prevent expiry. ' },
    { q: 'Limit on Avios earned?', a: 'No general limit from spending. Welcome bonus is one-time. ' },
    { q: 'How long for Reward Flight Credits to post?', a: 'Usually within 45 days after flight ticketing/payment, then 1-2 billing cycles. ' },
    { q: 'What purchases don\'t earn Avios?', a: 'Typically balance transfers, cash advances, money orders, gambling, interest, fees. ' },
    { q: 'Authorized users get 10% discount/credits?', a: '10% discount requires primary cardmember traveling. Credits apply to primary account. Their spend counts for Travel Together Ticket.' },
    { q: 'Does Chase 5/24 rule apply?', a: 'Yes, generally. Chase may deny if you\'ve opened 5+ new cards (any bank) in 24 months.' }
];

const structuredDataOptimized = { /* ... Same as before, but ensure text snippets are concise ... */
  '@context': 'https://schema.org',
  '@graph'  : [
    {
      '@type'        : 'Product',
      '@id'          : `${pageUrlFull}#product`,
      name           : reviewData.cardName,
      image          : `${siteUrl}${reviewData.imageUrl}`,
      description    : reviewData.description, // Uses concise description
      sku            : reviewData.sku,
      mpn            : reviewData.mpn,
      brand          : { '@type': 'Brand', name: 'Chase' },
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
            description          : `Purchase APR: ${reviewData.aprRange}. Foreign Transaction Fee: $0. See official ${reviewData.cardName} Rates & Fees. `,
          },
        ],
        seller: { '@type': 'Organization', name: 'Chase' },
      },
      review: { '@id': `${pageUrlFull}#editorReview` },
    },
    {
      '@type'         : 'Review',
      '@id'           : `${pageUrlFull}#editorReview`,
      name            : `${reviewData.cardName} – Review (Concise) ${new Date(updateDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}`,
      itemReviewed    : { '@id': `${pageUrlFull}#product` },
      reviewBody      : reviewData.reviewBody, // Uses concise reviewBody
      reviewRating    : {
        '@type'    : 'Rating',
        ratingValue : reviewData.ratingValue.toString(),
        bestRating  : '10',
        worstRating : '1',
        description: `${siteName} editorial rating (concise review) as of ${new Date(updateDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}.`
      },
      author : { '@type': 'Person', 'name': reviewData.author.name, 'url': reviewData.author.fullBioLink ? `${siteUrl}${reviewData.author.fullBioLink}` : undefined, },
      publisher : { '@type' : 'Organization', name : siteName, logo : { '@type': 'ImageObject', url: `${siteUrl}/images/logo/your-logo-schema.png` }, }, // UPDATE THIS
      datePublished   : publishDate,
      dateModified    : updateDate,
    },
    { '@type': 'WebPage', 
      '@id'              : pageUrlFull, url : pageUrlFull, name : reviewData.title, description : reviewData.description,
      inLanguage : 'en-US', isPartOf : { '@id': `${siteUrl}#website` }, primaryImageOfPage : { '@id': `${pageUrlFull}#primaryImage` },
      breadcrumb : { '@id': `${pageUrlFull}#breadcrumbs` }, datePublished : publishDate, dateModified : updateDate,
      author: { '@type': 'Person', 'name': reviewData.author.name, 'url': reviewData.author.fullBioLink ? `${siteUrl}${reviewData.author.fullBioLink}` : undefined },
    },
    { '@type': 'ImageObject', 
      '@id'     : `${pageUrlFull}#primaryImage`, url : `${siteUrl}${reviewData.imageUrl}`,
      width : reviewData.imageWidth, height : reviewData.imageHeight, caption : reviewData.cardName,
    },
    { '@type': 'BreadcrumbList',
      '@id'          : `${pageUrlFull}#breadcrumbs`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: siteName, item: siteUrl },
        { '@type': 'ListItem', position: 2, name: 'Credit Card Reviews', item: `${siteUrl}/reviews` }, 
        { '@type': 'ListItem', position: 3, name: `${reviewData.cardName} Review`, item: pageUrlFull },
      ],
    },
    {
      '@type'    : 'FAQPage',
      '@id'      : `${pageUrlFull}#faqs`,
      mainEntity: faqsContent.map(faq => ({
        '@type': 'Question', name: faq.q,
        acceptedAnswer: {  '@type': 'Answer', text: faq.a.replace(/\[CITE:(\d+)\]/g, '').replace(/<[^>]*>/g, '') }
      })),
    },
    { '@type' : 'Organization',
      '@id'   : `${siteUrl}#website`, name : siteName, url : siteUrl,
      logo    : { '@type': 'ImageObject', url: `${siteUrl}/images/logo/your-logo-schema.png` }, // UPDATE THIS
      sameAs  : [ "https://www.facebook.com/YourTravelCardInsiderFacebookPage", "https://twitter.com/YourTravelCardInsiderTwitterHandle", ], // UPDATE THESE
    },
  ],
};

const ratingCriteria = [ // These remain as they describe evaluation points, not prose length
    'Avios Welcome Bonus Value & Spend Requirement',
    'Avios Earning Rate on BA & Partners (3x)',
    'Travel Together Ticket Value & Feasibility ($30K spend)',
    'Reward Flight Statement Credits (Up to $600 value)',
    '10% Discount on BA Flights Value & Usability',
    'Annual Fee ($95) Justification',
    'No Foreign Transaction Fees Benefit',
    'Avios Redemption Flexibility (BA & Oneworld partners)',
    'Value of Other Visa Signature Perks',
    'Overall Value for BA Loyalists & Transatlantic Fliers',
];

const tocSections = [ // SEO-friendly titles for sections
    { id: 'section-intro', title: '1. BA Visa Card: Intro to Avios & Transatlantic Perks' },
    { id: 'section-snapshot', title: '2. Card Snapshot & Best For' }, // Combined for brevity
    { id: 'section-welcome-bonus', title: '3. Unpacking the Welcome Offer' },
    { id: 'section-earning-avios', title: '4. Earning Avios: Flights, Hotels, Everyday Spend' },
    { id: 'section-travel-together-ticket', title: '5. Travel Together Ticket Explained' },
    { id: 'section-reward-flight-credits', title: '6. $600 Reward Flight Statement Credits' },
    { id: 'section-10percent-discount', title: '7. 10% Discount on BA Flights' },
    { id: 'section-other-perks', title: '8. Other Valuable Card Benefits' },
    { id: 'section-ba-executive-club', title: '9. Deep Dive: BA Executive Club & Avios' },
    { id: 'section-rates-fees', title: '10. Rates & Fees: Card Costs' },
    { id: 'section-travel-purchase-coverage', title: '11. Travel & Purchase Protections' },
    { id: 'section-real-world-example', title: '12. Real-World Example: London Getaway' },
    { id: 'section-competitors', title: '13. Head-to-Head: BA Card vs. Competitors' },
    { id: 'section-user-profiling', title: '14. User Profiling: Is This Card Right for You?' },
    { id: 'section-user-testimonials', title: '15. Real Cardmember Testimonials' },
    { id: 'section-managing-card', title: '16. Managing the Card: Chase Tools & Support' },
    { id: 'section-final-verdict', title: '17. Final Verdict: Our Expert Take' },
    { id: 'section-faqs-jump', title: '18. Card-Specific Frequently Asked Questions' }, // FAQs after verdict
    { id: 'section-next-steps', title: '19. Next Steps: Apply or Learn More?' },
    { id: 'section-eat', title: '20. Our E-A-T Pledge' }, // Kept EAT for trust
];

const contentImage1 = "/belinda-fewings-47MjlWS6lpU-unsplash.webp"; // Placeholder - UPDATE THIS
const contentImage2 = "/lydia-matzal-1cB1ie1SoDo-unsplash.webp"; // Placeholder - UPDATE THIS

function DraggableTableWrapper({ children }) { /* ... Same DraggableTableWrapper as before ... */
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
    MAIN COMPONENT
    ────────────────────────────── */
function BritishAirwaysVisaSignatureReviewConcisePage() {
  const [showRatingInfo, setShowRatingInfo] = useState(false);
  const [showAuthorBioTooltip, setShowAuthorBioTooltip] = useState(false);
  const authorRef = useRef(null);
  const authorTooltipRef = useRef(null);
  const ratingTooltipRef = useRef(null);

  // Event handlers (handleIconClick, handleAuthorMouseEnter, etc.) remain the same as before
  const handleIconClick = useCallback((event) => {
      event.preventDefault(); event.stopPropagation(); setShowRatingInfo(prevState => !prevState);
  }, []);
  const handleAuthorMouseEnter = useCallback(() => setShowAuthorBioTooltip(true), []);
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
      if (authorRef.current?.tooltipTimeoutId) clearTimeout(authorRef.current.tooltipTimeoutId);
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

  const summaryBoxData = { // Concise summaries from original text
    welcomeOffer: "Earn 75,000 Avios after $5,000 spend in first 3 months . (Verify current offer.)",
    annualFee: `$${reviewData.annualFee} `,
    topEarning: "3 Avios/$1 on BA group; 2 Avios/$1 direct hotels; 1 Avios/$1 others .",
    keyPerks: "Travel Together Ticket, up to $600 Reward Flight Credits, 10% off BA flights from U.S.",
    bestFor: "BA Loyalists & Transatlantic Voyagers Seeking Premium Perks."
  };
  
  const keyFeaturesTableData = [ // Directly from original text's "Card Snapshot & 'Best For' Tagline" and key perks list
    { feature: "Card Name", description: "British Airways Visa Signature® Card" },
    { feature: "Issuer", description: "Chase" },
    { feature: "Network", description: "Visa Signature" },
    { feature: "Annual Fee", description: "$95 " },
    { feature: "Welcome Offer (Example)", description: "Earn 75,000 Avios after $5,000 spend in first 3 months . (Verify current offer.)" },
    { feature: "Rewards", description: "Avios" },
    { feature: "Key Perk: Travel Together Ticket", description: "Earn after $30K annual spend; companion flies for Avios (pays fees) or 50% solo Avios discount ." },
    { feature: "Key Perk: Reward Flight Credits", description: "Up to $600 annually for surcharges on BA reward flights to London ." },
    { feature: "Key Perk: 10% Off BA Flights", description: "On BA flights from U.S. with code `BACHASE10` ." },
    { feature: "Key Perk: No Foreign Transaction Fees", description: "Yes ." },
  ];

  // Original text content mapped to sections
  // Note: HTML structure (p, ul, li, strong) will be added here based on original text.
  // Citations [N] are replaced with [CITE:N] for processCitedText.

  const sectionContent = {
    'section-intro': `
      <p>For U.S. travelers eyeing the UK and Europe, airline co-branded credit cards offer a direct path to loyalty perks. The <strong>British Airways Visa Signature® Card</strong>, from Chase, is a prime contender for those looking to maximize travel on British Airways and its partners using Avios, the currency of the British Airways Executive Club .</p>
      <p>Let’s break down what this card really offers — the good, the bad, and whether it’s worth your wallet in 2025. We'll assess its overall value, particularly for transatlantic journeys and oneworld® alliance travel, helping you decide if it’s your ideal travel companion. Is this card the key to your travel dreams? Let's explore.</p>
    `,
    'section-snapshot': `
      <ul>
        <li><strong>Card Name:</strong> British Airways Visa Signature® Card</li>
        <li><strong>Issuer:</strong> Chase</li>
        <li><strong>Network:</strong> Visa Signature</li>
        <li><strong>Annual Fee:</strong> $95 </li>
        <li><strong>Welcome Offer:</strong> Earn 75,000 Avios after $5,000 spend in first 3 months . (Verify current offer.)</li>
        <li><strong>Rewards:</strong> Avios</li>
        <li><strong>Key Perks:</strong> Travel Together Ticket , up to $600 in Reward Flight Statement Credits , 10% off BA flights from U.S. </li>
        <li><strong>'Best For':</strong> BA Loyalists & Transatlantic Voyagers Seeking Premium Perks.</li>
      </ul>
    `,
    'section-welcome-bonus': `
      <p>The British Airways Visa Signature® Card typically features an attractive welcome offer. Currently, new cardmembers can earn 75,000 bonus Avios after spending $5,000 on purchases within the first three months . Always check the latest offer with Chase before applying.</p>
      <p>That 75k Avios haul can easily get you a round-trip to Europe — or score you a lie-flat seat if you’re smart about redemptions. Avios are usable not just on British Airways but also with oneworld® alliance partners like American Airlines, offering flexibility, especially for short-haul North American flights .</p>
      <p>Meeting the $5,000 spend in three months (around $1,667 monthly) is a standard threshold for such cards. Regular spending or planned large purchases can help achieve this. A key benefit: Avios in your British Airways Executive Club account don't expire if you collect, spend, purchase, or share at least one Avios every 36 months . Using this card ensures that activity.</p>
    `,
    'section-earning-avios': `
      <p>Understanding the Avios earning rate is key to this card's long-term value. It’s structured to reward spending with British Airways, its partner airlines, and direct hotel bookings.</p>
      <p>You’ll earn :</p>
      <ul>
        <li><strong>3 Avios per $1</strong> on British Airways, Iberia, Aer Lingus, and LEVEL purchases.</li>
        <li><strong>2 Avios per $1</strong> on hotel accommodations booked directly with the hotel.</li>
        <li><strong>1 Avios per $1</strong> on all other purchases.</li>
      </ul>
      <p>The 3x rate on IAG airline purchases is competitive. The 2x on direct hotel bookings is also strong, but remember "direct booking" excludes most third-party travel agencies. For all other spending, the card earns 1 Avios per $1. You’ll still earn on everything, but it’s not the best return on everyday spending. If your spending is mainly outside travel, consider pairing this with another card that better rewards your daily categories. If you're new to the BA loyalty program, this card automatically enrolls you in the British Airways Executive Club, so Avios deposit seamlessly .</p>
    `,
    'section-travel-together-ticket': `
      <p>A standout benefit of the British Airways Visa Signature® Card is the <strong>Travel Together Ticket</strong> , offering significant potential savings, especially on premium travel, though it requires substantial spend.</p>
      <p><strong>Earning It:</strong> Make $30,000 in purchases on your card within a calendar year.</p>
      <p><strong>What it Offers:</strong> When you redeem Avios for a BA reward flight, a companion can join you in the same cabin for no extra Avios. Solo travelers get a 50% Avios discount on their reward flight . It's valid for two years.</p>
      <p><strong>Key Conditions:</strong></p>
      <ul>
        <li><strong>Taxes & Fees:</strong> Your companion pays all taxes, fees, and carrier charges, which can be hefty on BA long-haul, especially in premium cabins.</li>
        <li><strong>Availability:</strong> Subject to reward seat availability on BA flights.</li>
        <li><strong>Restrictions:</strong> Valid on BA-operated flights originating in and returning to the U.S.</li>
      </ul>
      <p>The Travel Together Ticket shines for long-haul Business (Club World) or First Class, where Avios savings can be thousands of dollars, easily justifying the annual fee and even the associated charges. This perk is best for dedicated, high-spending BA loyalists.</p>
    `,
    'section-reward-flight-credits': `
      <p>British Airways often has significant carrier-imposed surcharges on its award flights. This card helps offset that with its Reward Flight Statement Credit benefit .</p>
      <p><strong>The Perk:</strong> Receive statement credits when booking a BA reward flight to London and using your card for taxes, fees, and carrier charges.</p>
      <p><strong>Credit Amounts</strong> (up to three times per year, max $600 annually) :</p>
      <ul>
        <li><strong>$100 credit</strong> for an Economy (World Traveller) or Premium Economy (World Traveller Plus) seat.</li>
        <li><strong>$200 credit</strong> for a Business (Club World) or First Class seat.</li>
      </ul>
      <p>This is a major value, directly reducing a key drawback of the Avios program for BA flights. For instance, three Business Class reward trips to London in a year could yield $600 in credits, covering the $95 annual fee over six times. This makes BA redemptions more attractive.</p>
    `,
    'section-10percent-discount': `
      <p>The card also offers a direct cash-saving perk: a <strong>10% discount on British Airways operated flights</strong> originating in the U.S. </p>
      <p><strong>Details:</strong></p>
      <ul>
        <li>Applies to the total round-trip or one-way fare (including taxes/fees) on BA-operated flights from the U.S. to any BA destination.</li>
        <li>Valid for any cabin.</li>
        <li>Covers the cardmember and up to eight others on the same itinerary.</li>
        <li>Book via <a href="${reviewData.officialBaChase10Link}" target="_blank" rel="noopener noreferrer sponsored">ba.com/Chase10</a> using code <code>BACHASE10</code>; cardmember must travel .</li>
      </ul>
      <p>A 10% discount on a $1,000 fare saves $100, covering the annual fee. This benefits anyone regularly buying BA cash fares from the U.S., not just Avios collectors.</p>
    `,
    'section-other-perks': `
      <p>A few underrated perks round out the package — stuff that adds real value if you travel often:</p>
      <ul>
        <li><strong>No Foreign Transaction Fees</strong> .</li>
        <li><strong>Automatic BA Executive Club Membership:</strong> Streamlines Avios earning for new members .</li>
        <li><strong>Contactless Payment:</strong> "Tap to pay" for secure checkouts.</li>
        <li><strong>Travel and Purchase Coverage:</strong> Includes Visa Signature protections like Baggage Delay Insurance, Lost Luggage Reimbursement, Purchase Protection, and Extended Warranty Protection (terms apply) .</li>
        <li><strong>DoorDash Benefits:</strong> Potential for a complimentary DashPass membership for a limited time, offering delivery perks (enrollment may be required).</li>
      </ul>
      <p>These add everyday convenience and savings, complementing the main travel advantages.</p>
    `,
    'section-ba-executive-club': `
      <p>This card’s value is linked to the British Airways Executive Club and Avios .</p>
      <p><strong>The BA Executive Club:</strong> BA's free loyalty program. Earn Avios flying BA/oneworld® partners, via hotels, car rentals, retail. Tiers (Blue, Bronze, Silver, Gold) based on Tier Points from flying unlock benefits like lounge access. Card-earned Avios *don't* grant Tier Points. Household Accounts let up to seven people pool Avios.</p>
      <p><strong>Avios Redemptions:</strong> Versatile:</p>
      <ul>
        <li><strong>Reward Flights:</strong> On BA/oneworld®. "Reward Flight Saver" for short-haul.</li>
        <li><strong>Cabin Upgrades:</strong> On BA, Iberia, Aer Lingus cash bookings.</li>
        <li><strong>Hotels, Cars, Experiences.</strong></li>
        <li><strong>Part Payment:</strong> Reduce cash price of flights.</li>
      </ul>
      <p><strong>Maximizing Avios:</strong> Value varies. BA long-haul awards have high fees. Maximize by:</p>
      <ul>
        <li><strong>Partner Redemptions:</strong> Often lower fees on AA, Alaska Airlines.</li>
        <li><strong>Short-Haul:</strong> Good value with Reward Flight Savers.</li>
        <li><strong>Upgrades:</strong> Can be very worthwhile.</li>
      </ul>
      <p>Avios are valid with activity every 36 months (card use counts). Transfer Avios between BA, Iberia, Aer Lingus, Qatar Airways programs.</p>
    `,
    'section-rates-fees': `
      <p>Always check the current Cardmember Agreement for exact figures .</p>
      <ul>
        <li><strong>Annual Fee:</strong> $95</li>
        <li><strong>Purchase APR:</strong> Variable, e.g., 21.49% - 28.49%. (Varies with Prime Rate.)</li>
        <li><strong>Balance Transfer Fee:</strong> $5 or 5% of transfer amount, whichever is greater.</li>
        <li><strong>Cash Advance APR:</strong> Higher variable APR.</li>
        <li><strong>Cash Advance Fee:</strong> $10 or 5% of advance, whichever is greater.</li>
        <li><strong>Foreign Transaction Fee:</strong> $0</li>
        <li><strong>Late/Returned Payment Fee:</strong> Up to $40.</li>
        <li><strong>Penalty APR:</strong> Up to 29.99% variable.</li>
      </ul>
      <p>The $95 annual fee is moderate. No foreign transaction fees is key for travelers. High APRs mean it's best to pay balances in full monthly to avoid interest negating rewards.</p>
    `,
    'section-travel-purchase-coverage': `
      <p>This Visa Signature® card includes travel and purchase protections (terms apply) :</p>
      <ul>
        <li><strong>Baggage Delay Insurance:</strong> Reimburses essentials if checked bags are delayed over 6 hours (e.g., up to $100/day for 3 days).</li>
        <li><strong>Lost Luggage Reimbursement:</strong> Covers lost/damaged/stolen baggage by a carrier (typically up to $3,000/traveler).</li>
        <li><strong>Purchase Protection:</strong> Covers new eligible items against damage/theft for 120 days from purchase (up to $500/claim).</li>
        <li><strong>Extended Warranty Protection:</strong> Adds an extra year to eligible U.S. manufacturer's warranties of three years or less.</li>
      </ul>
      <p>Refer to your Chase Guide to Benefits for full details and claim procedures.</p>
    `,
    'section-real-world-example': `
      <p>Take Taylor, for example — she’s planning a premium economy getaway to London with her partner.</p>
      <p><strong>Strategy:</strong></p>
      <ol>
        <li>Taylor gets the BA Visa, spends $5,000 in 3 months for <strong>75,000 bonus Avios</strong> .</li>
        <li>Spends $30,000 total in a year for the <strong>Travel Together Ticket</strong> . Assuming:
          <ul>
            <li>$3K on BA flights: $3,000 x 3 Avios = 9,000 Avios .</li>
            <li>$2K on direct hotels: $2,000 x 2 Avios = 4,000 Avios .</li>
            <li>$25K other: $25,000 x 1 Avios = 25,000 Avios .</li>
          </ul>
        </li>
      </ol>
      <p><strong>Total Avios:</strong> 75,000 (bonus) + 38,000 (spend) = <strong>113,000 Avios</strong>.</p>
      <p><strong>Redemption (Off-Peak Premium Economy):</strong></p>
      <ul>
        <li>Assume 80,000 Avios/person round-trip.</li>
        <li>With Travel Together Ticket: 80,000 Avios for Taylor; partner 0 Avios (pays fees) .</li>
        <li>Taxes/fees: ~$500/person = $1,000 total.</li>
      </ul>
      <p><strong>Card Benefits Applied:</strong></p>
      <ul>
        <li>Travel Together Ticket: Saves 80,000 Avios.</li>
        <li>Reward Flight Credits: Two $100 credits for premium economy to London = $200 back .</li>
      </ul>
      <p><strong>Net Cost:</strong></p>
      <ul>
        <li>Avios: 80,000</li>
        <li>Cash (Taxes/Fees): $1,000 - $200 = $800</li>
        <li>Annual Fee: $95</li>
        <li><strong>Total Cash:</strong> $895 for two premium economy tickets, plus Avios. This demonstrates significant savings.</li>
      </ul>
    `,
    'section-competitors': `
      <p>How does the BA Visa compare to other travel cards with similar annual fees?</p>
      <p><strong>Discussion:</strong> The BA card excels with BA-specific perks. <strong>Chase Sapphire Preferred®</strong>  offers flexibility. <strong>American Express® Gold</strong>  rewards dining/groceries. <strong>Citi Strata Premier℠</strong>  has broad categories. <strong>Alaska Airlines Visa Signature®</strong>  is great for its loyalists with its Companion Fare™. Choose based on your travel habits and which airline’s perks you value most.</p>
    `,
    'section-user-profiling': `
      <p>This card suits specific travelers.</p>
      <p><strong>Perfect For You If:</strong></p>
      <ul>
        <li>You fly BA or partners often (3x Avios on BA group ).</li>
        <li>You spend $30K+ annually for the Travel Together Ticket .</li>
        <li>You travel to/through London (to use Reward Flight Credits ).</li>
        <li>You aim for premium cabin travel (maximizes Travel Together Ticket).</li>
        <li>You're Avios-savvy (can navigate partner awards, use 10% flight discount ).</li>
      </ul>
      <p><strong>Not the Best Fit If:</strong></p>
      <ul>
        <li>You want maximum points flexibility across many unrelated programs.</li>
        <li>You can't meet the $30K spend for the Travel Together Ticket.</li>
        <li>You're highly averse to any award surcharges, even with credits.</li>
        <li>You rarely fly BA/oneworld® or need general perks like free checked bags from your card.</li>
      </ul>
      <p>Weigh these against your travel and spending to see if it’s a match.</p>
    `,
    'section-user-testimonials': `
      <p>Illustrative scenarios based on common card uses:</p>
      <ol>
        <li><strong>Sarah, Transatlantic Commuter:</strong> "The 10% BA flight discount  saves my company money, and 3x Avios  on those work flights boost my holiday fund!"
          <ul><li><em>Profile:</em> Regular BA business traveler. <em>Summary:</em> Values cash savings and Avios boost.</li></ul>
        </li>
        <li><strong>David & Lisa, Anniversary Trip:</strong> "Hitting $30K spend for the Travel Together Ticket  let us fly Business to Italy via London – my wife only paid fees on her ticket. Incredible savings!"
          <ul><li><em>Profile:</em> Couple targeting luxury redemption. <em>Summary:</em> Leveraged high spend for premium travel.</li></ul>
        </li>
        <li><strong>Maria, Points Strategist:</strong> "I love using Avios for short AA flights in the U.S. . The BA card tops up my Avios, and statement credits  help with occasional BA flights to family."
          <ul><li><em>Profile:</em> Understands Avios and partner awards. <em>Summary:</em> Values partner redemptions and surcharge offsets.</li></ul>
        </li>
        <li><strong>Tom, Hotel Booker:</strong> "Earning 2 Avios/$  on direct hotel bookings with the BA card is a nice extra on top of my hotel points."
          <ul><li><em>Profile:</em> Frequent traveler booking hotels directly. <em>Summary:</em> Benefits from bonus Avios on hotels.</li></ul>
        </li>
        <li><strong>Priya, Occasional UK Visitor:</strong> "The welcome bonus  was great. The 10% discount  or Reward Flight Credits  make UK visits more affordable. No foreign fees  is key."
          <ul><li><em>Profile:</em> Periodic UK traveler. <em>Summary:</em> Appreciates cost-saving perks for important trips.</li></ul>
        </li>
      </ol>
    `,
    'section-managing-card': `
      <p>The card is issued by Chase, offering robust account management.</p>
      <p><strong>Digital Tools:</strong></p>
      <ul>
        <li><strong>Chase Online/Mobile® App:</strong> View activity, manage rewards, make payments, set alerts .</li>
        <li><strong>Account Alerts:</strong> For transactions, payment dues, spending limits.</li>
      </ul>
      <p><strong>Customer Service:</strong></p>
      <p>Support via phone and secure online messaging. For BA Executive Club or Avios issues, contact British Airways . Chase also offers Credit Journey® for free credit score access.</p>
    `,
    'section-final-verdict': `
      <p>The British Airways Visa Signature® Card offers a specific, strong value for certain U.S. travelers.</p>
      <p><strong>Strongest Points:</strong> The <strong>Travel Together Ticket</strong> (after $30K annual spend ) is a massive potential saver, especially for premium cabins. Up to <strong>$600 annually in Reward Flight Statement Credits</strong>  significantly offsets BA's London flight surcharges. The <strong>10% discount on BA cash fares</strong> from the U.S.  adds immediate value. Earning 3 Avios/$ on BA group airlines  is good for loyalists.</p>
      <p><strong>Considerations:</strong> The $30K spend for the Travel Together Ticket is high. BA award surcharges persist, though credits help. It's less flexible than general travel cards and lacks perks like free bags as a direct card benefit.</p>
      <p><strong>Recommendation:</strong> The $95 fee  is justified if you:</p>
      <ul>
        <li>Fly BA/partners consistently.</li>
        <li>Can spend $30K+ annually on the card.</li>
        <li>Redeem Avios for London flights often.</li>
        <li>Regularly buy BA cash fares.</li>
      </ul>
      <p>For others, a general travel card might be better. This is a specialist card; its value unlocks via BA loyalty and using its specific perks.</p>
    `,
    'section-next-steps': `
      <p>If this card’s unique offerings—Travel Together Ticket , Reward Flight Credits , 10% BA flight discount , and solid Avios earning—align with your travel and spending, it could be a great asset. The 75,000 Avios welcome bonus  is a strong start. Applying might be your next step to enhance BA journeys.</p>
      <p>If you're undecided, or need more flexibility or different perks, explore further. ${siteName} has many reviews to help find your perfect travel card.</p>
    `,
    'section-eat': `
        <p>Here at <strong>${siteName}</strong>, we're serious about providing content that lives up to the principles of Expertise, Authoritativeness, and Trustworthiness (E-A-T). This review of the <strong>${reviewData.cardName}</strong> has been carefully assembled based on its known features, benefits, rewards structure, and fees, cross-referencing information with official documentation from Chase  and British Airways . Our goal is to give you a balanced, thorough, and reliable guide so you can make a decision that feels right for you. All information presented here is current as of <strong>${new Date(updateDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</strong>, but it's always a smart move to verify specific details directly with the issuer, as terms and offers can occasionally change.</p>
    `
  };


  return (
    <div>
      <Head>
        {/* ... Head section from previous detailed response ... */}
        <title>{reviewData.title} - {siteName}</title>
        <meta name="description" content={reviewData.description} />
        <meta name="keywords" content={reviewData.keywords} />
        <meta name="author" content={reviewData.author.name} />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="robots" content="index,follow,max-image-preview:large" />
        <link rel="canonical" href={pageUrlFull} />
        <link rel="alternate" href={pageUrlFull} hreflang="en-us" />
        <link rel="preload" as="image" href={`${siteUrl}${reviewData.imageUrl}`} />
        {reviewData.author.imageUrl && <link rel="preload" as="image" href={reviewData.author.imageUrl} />}
        {reviewData.author.tooltipImageUrl && <link rel="preload" as="image" href={reviewData.author.tooltipImageUrl} />}
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
        <meta property="article:publisher" content={`https://www.facebook.com/YourTravelCardInsiderFacebookPage`} />  {/* UPDATE THIS */}
        <meta property="article:section"       content="Credit Card Reviews" />
        <meta property="article:published_time" content={publishDate} />
        <meta property="article:modified_time"  content={updateDate} />
        <meta property="article:author" content={reviewData.author.name} />
        {reviewData.keywords.split(',').map(keyword => (
            <meta property="article:tag" content={keyword.trim()} key={keyword.trim()} />
        ))}
        <meta name="twitter:card"        content="summary_large_image" />
        <meta name="twitter:site" content="@YourTravelCardInsiderTwitterHandle" /> {/* UPDATE THIS */}
        <meta name="twitter:creator" content={`@${reviewData.author.socialLinks?.twitter?.split('/').pop() || 'YourAuthorTwitterHandle'}`} /> {/* UPDATE THIS */}
        <meta name="twitter:title"       content={reviewData.title} />
        <meta name="twitter:description" content={reviewData.description} />
        <meta name="twitter:image"       content={`${siteUrl}${reviewData.imageUrl}`} />
        <link rel="icon" href="/favicon.ico" /> {/* UPDATE THESE PATHS AS NEEDED */}
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredDataOptimized) }} />
      </Head>

      <main>
        <div className={styles.reviewPageLayout}>
          <div className={styles.mainContentArea}>
            {/* Hero Section (similar to previous, using concise reviewData.h1Content & heroSubtitle) */}
            <section className={styles.heroSection}>
                <div className={styles.heroTextContainer}>
                    <h1 className={styles.heroTitle} dangerouslySetInnerHTML={{ __html: processCitedText(reviewData.h1Content) }}></h1>
                     <p className={styles.reviewedByLine}>
                        Expert review by{' '}
                        <Link href={reviewData.author.fullBioLink || '#'} legacyBehavior>
                            <a className={styles.authorNameLink}>{reviewData.author.name}</a>
                        </Link>
                        . Last updated: {new Date(updateDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </p>
                    {/* Author bio tooltip can be simplified or use the existing structure */}
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
                            <div className={styles.authorNameLine}><span className={styles.authorName}>{reviewData.author.name}</span></div>
                            <span className={styles.authorTitle}>{reviewData.author.title}</span>
                        </div>
                        {showAuthorBioTooltip && reviewData.author.bioSnippet && (
                            <div className={styles.authorTooltip} ref={authorTooltipRef} role="tooltip"
                                 onMouseEnter={handleAuthorClearTimeout} onMouseLeave={handleAuthorMouseLeave}
                                 onFocus={handleAuthorMouseEnter} onBlur={handleAuthorMouseLeave}>
                               <div className={styles.authorTooltipHeader}>
                                 <Image src={reviewData.author.tooltipImageUrl} alt={`${reviewData.author.name} large headshot`}
                                        width={reviewData.author.tooltipImageWidth} height={reviewData.author.tooltipImageHeight}
                                        className={styles.authorTooltipImage} />
                                 <div className={styles.authorTooltipInfo}>
                                     <span className={styles.authorTooltipName}>{reviewData.author.name}</span>
                                     <span className={styles.authorTooltipTitle}>{reviewData.author.title}</span>
                                 </div>
                               </div>
                               {reviewData.author.expertise && reviewData.author.expertise.length > 0 && (
                                 <div className={styles.authorTooltipExpertise}><strong>Expertise</strong><ul>{reviewData.author.expertise.map(area => <li key={area}>{area}</li>)}</ul></div>
                               )}
                               <p className={styles.authorTooltipBioSnippet}>{reviewData.author.bioSnippet}</p>
                               {reviewData.author.fullBioLink && (<Link href={reviewData.author.fullBioLink} legacyBehavior><a className={styles.authorTooltipBioLink}>See full bio</a></Link>)}
                            </div>
                        )}
                    </div>
                    <p className={styles.heroSubtitle} dangerouslySetInnerHTML={{ __html: processCitedText(reviewData.heroSubtitle) }}></p>
                    <div className={styles.heroCtaContainer}>
                        <div>
                            <a href={reviewData.applyLink} target="_blank" rel="noopener noreferrer sponsored" className={`${styles.applyNowButton} ${styles.heroApplyButton}`}>
                                Apply on Chase.com
                            </a>
                            <span className={styles.heroApplyButtonDisclaimer}>on Chase's official site</span>
                        </div>
                        <Link href="#section-snapshot" legacyBehavior><a className={styles.heroSecondaryLink}>Card Snapshot</a></Link>
                    </div>
                </div>
                <div className={styles.heroImageContainer}>
                    <div className={styles.cardImageContainer}><Image src={reviewData.imageUrl} alt={reviewData.cardName} width={reviewData.imageWidth} height={reviewData.imageHeight} className={styles.heroImage} priority /></div>
                    <div className={styles.ratingSection}>
                        <span className={styles.tciRating}>
                            <button type="button" className={styles.infoIconButton} aria-label="Rating Information" onClick={handleIconClick} aria-expanded={showRatingInfo}>
                                <svg aria-hidden="true" focusable="false" className={styles.infoIcon} viewBox="0 0 16 16"><path fillRule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/><path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/></svg>
                            </button>
                            {siteName} Rating: <strong>{reviewData.ratingValue.toFixed(1)}</strong>/10
                            {showRatingInfo && (<RatingTooltip ref={ratingTooltipRef} ratingValue={reviewData.ratingValue} ratingCriteria={ratingCriteria} onClose={() => setShowRatingInfo(false)} />)}
                        </span>
                        <div className={styles.starRating} title={`Rated ${reviewData.ratingValue} out of 10 stars`}>★★★★★<span className={styles.filledStars} style={{ '--rating': `${(reviewData.ratingValue / 10) * 100}%` }}>★★★★★</span></div>
                    </div>
                    <div className={styles.ratingDescription}><i>{reviewData.cardShortName}: Key benefits for BA flyers.</i></div>
                </div>
            </section>

            <div className={styles.reviewContainer}>
              <article>
                {/* Summary Box */}
                <header className={styles.reviewHeader}>
                    <div className={styles.summaryBox} id="summaryBoxTitle">
                        <h2 className={styles.summaryBoxTitle}>{reviewData.cardName}: Key Insights</h2>
                        <div className={styles.summaryGrid}>
                            <div className={styles.summaryItem}><span className={styles.summaryIcon}><IconGift /></span><span className={styles.summaryLabel}>Welcome Offer:</span><span className={styles.summaryValue} dangerouslySetInnerHTML={{ __html: processCitedText(summaryBoxData.welcomeOffer) }}></span></div>
                            <div className={styles.summaryItem}><span className={styles.summaryIcon}><IconCheck /></span><span className={styles.summaryLabel}>Annual Fee:</span><span className={styles.summaryValue} dangerouslySetInnerHTML={{ __html: processCitedText(summaryBoxData.annualFee) }}></span></div>
                            <div className={styles.summaryItem}><span className={styles.summaryIcon}><IconStar /></span><span className={styles.summaryLabel}>Top Earning:</span><span className={styles.summaryValue} dangerouslySetInnerHTML={{ __html: processCitedText(summaryBoxData.topEarning) }}></span></div>
                            <div className={styles.summaryItem}><span className={styles.summaryIcon}><IconPlus /></span><span className={styles.summaryLabel}>Key Perks:</span><span className={styles.summaryValue} dangerouslySetInnerHTML={{ __html: processCitedText(summaryBoxData.keyPerks) }}></span></div>
                            <div className={styles.summaryItem} data-full-width="true"><span className={styles.summaryIcon}><IconPlane /></span><span className={styles.summaryLabel}>Best For:</span><span className={styles.summaryValue} dangerouslySetInnerHTML={{ __html: processCitedText(summaryBoxData.bestFor) }}></span></div>
                        </div>
                        <div className={styles.summaryBoxActions}>
                            <a href={reviewData.ratesFeesLink} className={styles.summaryRatesLink} target="_blank" rel="noopener noreferrer sponsored" dangerouslySetInnerHTML={{ __html: processCitedText("See Rates & Fees (Chase) ") }}></a>
                            {/* Optional: Rewards Calculator Button */}
                        </div>
                    </div>
                </header>

                {/* Main Review Sections - using sectionContent for preserved text */}
                {tocSections.map(section => {
                    if (section.id === 'section-competitors') { // Handle table section separately
                        return (
                            <section key={section.id} id={section.id} className={styles.reviewSection}>
                                <h2 dangerouslySetInnerHTML={{ __html: processCitedText(section.title) }}></h2>
                                <div dangerouslySetInnerHTML={{ __html: processCitedText(sectionContent[section.id]?.split('')[0] || '') }} />
                                <DraggableTableWrapper>
                                    <div className={styles.tableContainer}>
                                        <table className={`${styles.statsTable} ${styles.comparisonTable}`}>
                                            <thead>
                                                <tr>
                                                    <th>Feature</th>
                                                    <th>British Airways Visa Signature® </th>
                                                    <th>Chase Sapphire Preferred® </th>
                                                    <th>American Express® Gold </th>
                                                    <th>Citi Strata Premier℠ </th>
                                                    <th>Alaska Airlines Visa Signature® </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr><td data-label="Feature"><strong>Annual Fee</strong></td><td data-label="British Airways Visa Signature®">$95</td><td data-label="Chase Sapphire Preferred®">$95</td><td data-label="American Express® Gold">$250 (See Rates & Fees)</td><td data-label="Citi Strata Premier℠">$95</td><td data-label="Alaska Airlines Visa Signature®">$95</td></tr>
                                                <tr><td data-label="Feature"><strong>Sign-up Bonus (Ex.)</strong></td><td data-label="British Airways Visa Signature®">75,000 Avios</td><td data-label="Chase Sapphire Preferred®">60k UR points</td><td data-label="American Express® Gold">60k MR points</td><td data-label="Citi Strata Premier℠">70k TYP points</td><td data-label="Alaska Airlines Visa Signature®">60k Alaska Miles + Comp. Fare</td></tr>
                                                <tr><td data-label="Feature"><strong>Top Earning</strong></td><td data-label="British Airways Visa Signature®">3x Avios on BA group</td><td data-label="Chase Sapphire Preferred®">5x travel via Chase</td><td data-label="American Express® Gold">4x restaurants/U.S. supmkts</td><td data-label="Citi Strata Premier℠">3x air, hotel, dining</td><td data-label="Alaska Airlines Visa Signature®">3x miles on Alaska</td></tr>
                                                <tr><td data-label="Feature"><strong>Rewards Value</strong></td><td data-label="British Airways Visa Signature®">Strong for BA premium</td><td data-label="Chase Sapphire Preferred®">High via transfers</td><td data-label="American Express® Gold">High via transfers</td><td data-label="Citi Strata Premier℠">Good via transfers</td><td data-label="Alaska Airlines Visa Signature®">Strong for Alaska/oneworld</td></tr>
                                                <tr><td data-label="Feature"><strong>Key Travel Perk</strong></td><td data-label="British Airways Visa Signature®">Travel Together Tkt</td><td data-label="Chase Sapphire Preferred®">$50 Hotel Credit</td><td data-label="American Express® Gold">Airline/Dining Credits</td><td data-label="Citi Strata Premier℠">$100 Hotel Credit</td><td data-label="Alaska Airlines Visa Signature®">Companion Fare™; Free Bag</td></tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </DraggableTableWrapper>
                                <div dangerouslySetInnerHTML={{ __html: processCitedText(sectionContent[section.id]?.split('')[1] || '') }} />
                            </section>
                        );
                    } else if (section.id === 'section-key-features') {
                         return (
                            <section key={section.id} id={section.id} className={styles.reviewSection}>
                                <h2 dangerouslySetInnerHTML={{ __html: processCitedText(section.title) }}></h2>
                                <p>This card is packed with features designed to enhance your British Airways travel. Here’s a closer look at the standout benefits:</p>
                                <DraggableTableWrapper>
                                    <div className={styles.tableContainer}>
                                        <table className={`${styles.statsTable} ${styles.highlightTable}`}>
                                            <thead><tr><th>Feature</th><th>Description</th></tr></thead>
                                            <tbody>
                                                {keyFeaturesTableData.map((item, index) => (
                                                    <tr key={index}><td data-label="Feature" dangerouslySetInnerHTML={{ __html: processCitedText(item.feature) }}></td><td data-label="Description" dangerouslySetInnerHTML={{ __html: processCitedText(item.description) }}></td></tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </DraggableTableWrapper>
                            </section>
                        );
                    } else if (section.id === 'section-pros-cons') { // Assuming you want to structure Pros/Cons from original text
                        return (
                            <section key={section.id} id={section.id} className={styles.reviewSection}>
                                <h2 dangerouslySetInnerHTML={{ __html: processCitedText(section.title) }}></h2>
                                <p>Every financial product has its strengths and weaknesses. Here’s a balanced view of the British Airways Visa Signature® Card:</p>
                                <div className={styles.prosConsContainer}>
                                    <div className={styles.prosList}>
                                        <h3>The Bright Sides (Pros):</h3>
                                        <ul dangerouslySetInnerHTML={{ __html: processCitedText(`
                                            <li>Significant Welcome Bonus: Typically offers a large Avios bonus that can kickstart your reward travel .</li>
                                            <li>Travel Together Ticket: A highly valuable perk for couples or solo travelers who meet the annual spend, potentially saving thousands on companion fares or Avios .</li>
                                            <li>Reward Flight Statement Credits: Up to $600 annually helps offset high BA surcharges on reward flights to London .</li>
                                            <li>10% Off BA Flights: Direct cash savings on BA flights booked from the U.S. can quickly cover the annual fee .</li>
                                            <li>Strong Avios Earning on IAG Airlines: 3 Avios per $1 spent on BA, Iberia, Aer Lingus, and LEVEL is competitive for loyalists .</li>
                                            <li>No Foreign Transaction Fees: Essential for international travelers, saving ~3% on purchases abroad .</li>
                                            <li>Good Hotel Earning Rate: 2 Avios per $1 on direct hotel bookings is a nice bonus .</li>
                                            <li>Access to Oneworld Partner Redemptions: Avios can be used on partner airlines like American Airlines, sometimes offering better value or lower fees .</li>
                                        `)}}></ul>
                                    </div>
                                    <div className={styles.consList}>
                                        <h3>Points to Consider (Cons):</h3>
                                        <ul dangerouslySetInnerHTML={{ __html: processCitedText(`
                                            <li>$95 Annual Fee: While moderate, you need to use the benefits to justify it .</li>
                                            <li>High Spend for Travel Together Ticket: $30,000 in a calendar year can be a stretch for many .</li>
                                            <li>BA Surcharges Persist: Even with credits, BA's own reward flights can have significant taxes, fees, and carrier charges .</li>
                                            <li>Avios Value Can Vary: Maximizing Avios requires some knowledge of the BA Executive Club program and sweet spots .</li>
                                            <li>Less Flexible Rewards: Unlike general travel cards, Avios are primarily tied to airline redemptions within the BA ecosystem.</li>
                                            <li>1 Avios Per $1 on General Spend: Not the best rate for everyday purchases outside of bonus categories .</li>
                                            <li>No Automatic Elite Perks: The card doesn't grant BA elite status benefits like lounge access or priority boarding directly (these come from flying and earning Tier Points).</li>
                                        `)}}></ul>
                                    </div>
                                </div>
                                {/* Mid-Article CTA from original text */}
                                <div className={styles.midArticleCta}>
                                  <h3>Intrigued by the Avios Potential?</h3>
                                  <p>Welcome bonuses and specific card terms can change. It's always a good idea to check the latest offer directly with Chase before you apply for the British Airways Visa Signature® Card.</p>
                                  <a href={reviewData.applyLink} target="_blank" rel="noopener noreferrer sponsored" className={`${styles.applyNowButton} ${styles.midCtaButton}`}>
                                    Check Current Offer on Chase.com 
                                  </a>
                                  <span className={styles.ctaDisclaimer}>on Chase's official site</span>
                                </div>
                            </section>
                        );
                    } else if (section.id === 'section-faqs-jump') {
                        return (
                            <section key={section.id} id={section.id} className={`${styles.reviewSection} ${styles.faqSection}`}>
                                <h2 dangerouslySetInnerHTML={{ __html: processCitedText(section.title) }}></h2>
                                <p>Here are answers to some of the most common questions we receive about the British Airways Visa Signature® Card:</p>
                                <div className={styles.faqContainer}>
                                    {faqsContent.map((faq, index) => (
                                        <details key={index} className={styles.faqItem} name={`faq-${index + 1}`}>
                                            <summary className={styles.faqQuestion}>{`${index + 1}. ${faq.q}`}</summary>
                                            <div className={styles.faqAnswer}><p dangerouslySetInnerHTML={{ __html: processCitedText(faq.a) }} /></div>
                                        </details>
                                    ))}
                                </div>
                            </section>
                        );
                    } else if (sectionContent[section.id]) {
                        return (
                            <section key={section.id} id={section.id} className={styles.reviewSection}>
                                <h2 dangerouslySetInnerHTML={{ __html: processCitedText(section.title) }}></h2>
                                <div dangerouslySetInnerHTML={{ __html: processCitedText(sectionContent[section.id]) }} />
                                {/* Add content images if applicable to the section, e.g., after section-earning-avios */}
                                {section.id === 'section-earning-avios' && reviewData.imageUrl && <Image src={contentImage1} alt="Visual related to earning Avios" width={800} height={450} className={styles.contentImage} loading="lazy" />}
                                {section.id === 'section-competitors' && reviewData.imageUrl && <Image src={contentImage2} alt="Visual related to Travel Together Ticket" width={800} height={450} className={styles.contentImage} loading="lazy" />}
                            </section>
                        );
                    }
                    return null; // Or some default rendering for sections without specific content
                })}
              </article>
            </div>
          </div>
          <aside className={styles.sidebarArea}>
                <TableOfContents sections={tocSections} />
          </aside>
        </div>
      </main>
      {/* Sticky Footer (similar to previous) */}
      <div className={styles.stickyFooterContainer}>
        <div className={styles.stickyFooterContent}>
            <Image src={reviewData.imageUrl} alt={`${reviewData.cardShortName} card image`} width={60} height={38} className={styles.stickyFooterCardImage} />
            <div className={styles.stickyFooterText}>
              <span className={styles.stickyFooterCardName}>{reviewData.cardShortName}</span>
              <span className={styles.stickyFooterRating}>{siteName} Rating: {reviewData.ratingValue.toFixed(1)}/10</span>
            </div>
            <div className={styles.stickyFooterButtons}>
                <a href={reviewData.applyLink} className={`${styles.stickyFooterBtn} ${styles.stickyFooterBtnApply}`} target="_blank" rel="noopener noreferrer sponsored">Apply Now</a>
                <a href={reviewData.ratesFeesLink} className={`${styles.stickyFooterBtn} ${styles.stickyFooterBtnRates}`} target="_blank" rel="noopener noreferrer sponsored">See Rates & Fees</a>
            </div>
        </div>
      </div>
    </div>
  );
}

export default BritishAirwaysVisaSignatureReviewConcisePage;