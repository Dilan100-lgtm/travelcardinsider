/* ------------------------------------------------------------------
    File:  pages/reviews/british-airways-visa-signature-review.js
    Route: https://www.travelcardinsider.com/reviews/british-airways-visa-signature-review
------------------------------------------------------------------- */

import React, { useState, useEffect, useCallback, useRef } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import styles from '../../styles/ReviewPage.module.css'; // Assuming same CSS module

import TableOfContents from '../../components/TableOfContents';
import IconGift from '../../components/icons/icon-gift.svg'; // Assuming you have these or will create them
import IconStar from '../../components/icons/icon-star.svg';
import IconCheck from '../../components/icons/icon-Credit Card.svg'; // Represents annual fee or card benefits
import IconPlus from '../../components/icons/icon-target.svg'; // Represents perks or bonus
import IconPlane from '../../components/icons/icon-plane.svg'; // Represents travel focus

const RatingTooltip = dynamic(() => import('../../components/RatingTooltip'), { ssr: false, loading: () => null });

/* ──────────────────────────────
    CONSTANTS & STATIC DATA
    ────────────────────────────── */
const siteName = 'Travelcardinsider';
const siteUrl = 'https://www.travelcardinsider.com';
const pagePath = '/reviews/british-airways-visa-signature-review';
const pageUrlFull = `${siteUrl}${pagePath}`;
const publishDate = '2025-06-04'; // Updated to current date as example
const updateDate = '2025-06-04';  // Updated to current date as example

const reviewData = {
  cardName        : 'British Airways Visa Signature® Card',
  cardShortName   : 'BA Visa Signature',
  title           : 'British Airways Visa Signature® Card Review (2025): Avios Rewards & Travel Perks Explored',
  description     : 'In-depth 2025 review of the Chase British Airways Visa Signature® Card. Discover its Avios earning, Travel Together Ticket, $600 in statement credits, 10% flight discount, $95 annual fee, and if it’s your key to UK & European travel.',
  keywords        : 'British Airways Visa Signature Card review, Chase BA Avios card, Travel Together Ticket, Avios rewards, oneworld alliance travel, airline credit card, BA Visa 2025, UK travel card, European travel card',
  author: { // Using example author details, update as needed
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
      bioSnippet: 'Dilan Madushanka, founder of Travelcardinsider, specializes in airline loyalty programs and maximizing value from co-branded credit cards like the British Airways Visa Signature® Card.',
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
  imageUrl        : '/british-airways-visa-signature-card-image.png', // Placeholder - UPDATE THIS
  imageWidth      : 1290, // Standard card image placeholder dimensions
  imageHeight     : 812,  // Standard card image placeholder dimensions
  ratingValue     : 8.4,  // Example rating, adjust as per your evaluation
  ratingCount     : 182,  // Example count
  reviewBody      : 'Our editors evaluate the British Airways Visa Signature® Card based on its Avios earning potential, the value of its Travel Together Ticket, statement credits, flight discounts, annual fee, welcome offer, and its overall utility for transatlantic and oneworld® alliance travelers.', // For Schema
  aprRange        : 'Variable APR, e.g., 21.49% - 28.49% (Varies with Prime Rate). See official Chase terms.', // From original text
  annualFee       : 95, // From original text
  applyLink       : 'https://creditcards.chase.com/avios/britishairways', // Official Link
  ratesFeesLink   : 'https://creditcards.chase.com/avios/britishairways', // Official Link (often same page or linked from it)
  
  // Source URLs for Citations
  source1Url      : 'https://creditcards.chase.com/travel-credit-cards/avios/british-airways', //
  source1Title    : 'British Airways Visa Signature® Card Official Chase Page',
  source2Url      : 'https://www.britishairways.com/content/en/us/the-british-airways-club', // General BA Exec Club for context
  source2Title    : 'British Airways Executive Club Official Page',
  source3Url      : 'https://www.britishairways.com/content/en/us/the-british-airways-club/avios/collecting-avios/credit-cards/us-travel-together-ticket', //
  source3Title    : 'British Airways Travel Together Ticket Official Details',
  source4Url      : 'https://www.britishairways.com/content/en/us/the-british-airways-club/avios/collecting-avios/credit-cards/us-chase-visa-signature-offer', //
  source4Title    : 'British Airways Cardmember 10% Discount Official Page',
  source5Url      : 'https://usa.visa.com/pay-with-visa/cards/visa-credit-cards/visa-signature-credit-cards.html',
  source5Title    : 'Visa Signature® Benefits General Information',
  source6Url      : 'https://creditcards.chase.com/rewards-credit-cards/sapphire/preferred', 
  source6Title    : 'Chase Sapphire Preferred® Card Official Page',
  source7Url      : 'https://www.americanexpress.com/us/credit-cards/card/gold-card/', // Example, verify official link
  source7Title    : 'American Express® Gold Card Official Page',
  source8Url      : 'https://www.citi.com/credit-cards/citi-strata-premier-card', // Example, verify official link
  source8Title    : 'Citi Strata Premier℠ Card Official Page',
  source9Url      : 'https://www.bankofamerica.com/credit-cards/products/alaska-airlines-credit-card/', // Example, verify official link
  source9Title    : 'Alaska Airlines Visa Signature® Card Official Page',
  // Add source10Url for BA Executive Club context on general Avios usage if needed

  officialBaBookingLink: 'https://www.britishairways.com/travel/redeem/public/en_us?eId=111004&refevent=BAHPCTABookAvios', // For generic BA bookings or Avios redemptions
  officialBaChase10Link: 'https://www.britishairways.com/content/en/us/the-british-airways-club/avios/collecting-avios/credit-cards/us-chase-visa-signature-offer', // Specific for 10% discount 

  sku             : 'CHASE-BAVISASIG-TCI-2025',
  mpn             : 'CHASEBAVISASIG',
  h1Content       : "British Airways Visa Signature® Card: Transatlantic Treasures & Avios Adventures Await?",
  heroSubtitle    : "Our 2025 deep dive into the BA Visa Signature® Card: Is its $95 fee justified by Avios, the Travel Together Ticket, and up to $600 in credits for your UK & European journeys?"
};

// Helper function to process text with citations
const processCitedText = (textWithMarkers) => {
    if (!textWithMarkers) return '';
    const citationRegex = /\[CITE:(\d+)\]/g; // Finds [CITE:N]
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
            // Add more cases if needed
            default: title = `Source ${citationNumber}`; break;
        }
        // Using "sponsored" rel attribute for affiliate/monetized links as per best practices
        return `<sup><a href="${url}" target="_blank" rel="noopener noreferrer sponsored" title="${title}">${citationNumber}</a></sup>`;
    });
};

// FAQs for Structured Data & Display
const faqsContent = [
    { q: 'How do I use the British Airways Travel Together Ticket?', a: 'After spending $30,000 on your card in a calendar year, you earn the Travel Together Ticket. When you book a reward flight on British Airways using Avios, a companion can travel with you in the same cabin for no additional Avios, though they must pay taxes, fees, and carrier charges . If you\'re traveling solo, you can use it for a 50% discount on the Avios cost of your reward flight. The ticket is valid for two years and applies to BA-operated flights originating in and returning to the U.S. .' },
    { q: 'What\'s the best strategy to minimize British Airways taxes and surcharges on Avios redemptions?', a: 'To reduce high taxes and surcharges common on BA flights, consider redeeming Avios on partner airlines like American Airlines or Alaska Airlines, which often have lower fees. Also, look for "Reward Flight Saver" options for short-haul flights, which have capped fees. Using Avios for cabin upgrades on cash tickets can also be a good value strategy .' },
    { q: 'Can the 10% discount on BA flights be combined with other offers?', a: 'Typically, the 10% discount (using code `BACHASE10` at <a href="'+reviewData.officialBaChase10Link+'" target="_blank" rel="noopener noreferrer sponsored">ba.com/Chase10</a>) cannot be combined with other promotional offers or discounts . It\'s always best to check the specific terms and conditions at the time of booking.' },
    { q: 'Do Avios earned with the British Airways Visa Signature® Card count towards BA elite status?', a: 'No, the Avios you earn from card spending are for redemptions (like flights and upgrades) and do not count as Tier Points, which are required to achieve Blue, Bronze, Silver, or Gold elite status in the British Airways Executive Club .' },
    { q: 'What happens to my Avios if I cancel my British Airways Visa Signature® Card?', a: 'Your Avios are held in your British Airways Executive Club account, which is separate from your credit card account . If you cancel the card, your Avios remain in your Executive Club account. Just ensure you have some Avios activity (collecting, spending, purchasing, or sharing) at least once every 36 months to prevent them from expiring .' },
    { q: 'Is there a limit to the number of Avios I can earn with this card?', a: 'There is generally no cap on the number of Avios you can earn through spending on the card. The welcome bonus is typically a one-time offer for new cardmembers .' },
    { q: 'How long does it take for the Reward Flight Statement Credits to post to my account?', a: 'The statement credits for using your card to pay taxes, fees, and carrier charges on a BA reward flight to London usually post to your account within 45 days after the flight is ticketed and the charge appears. However, it can sometimes take 1-2 billing cycles for the credit to reflect .' },
    { q: 'What types of purchases do not earn Avios with this card?', a: 'Typically, purchases that do not earn Avios include balance transfers, cash advances, travelers checks, money orders, wire transfers, lottery tickets, casino gaming chips, race track wagers, and similar betting transactions, as well as any interest, unauthorized or fraudulent charges, and fees of any kind (including annual fees, late payment fees, etc.) .' },
    { q: 'Do authorized users get the 10% flight discount or the Reward Flight Statement Credits?', a: 'The 10% flight discount requires the primary cardmember to be traveling on the itinerary . The Reward Flight Statement Credits are applied to the primary cardmember\'s account when they book an eligible reward flight. However, spending by authorized users does count towards earning the Travel Together Ticket.' },
    { q: 'Does the Chase 5/24 rule apply to the British Airways Visa Signature® Card?', a: 'Yes, the British Airways Visa Signature® Card is issued by Chase and is generally subject to their 5/24 rule. This means Chase may not approve you for this card if you have opened five or more new credit card accounts (from any bank, not just Chase) in the past 24 months. This is an unwritten rule, and some exceptions may exist, but it\'s a strong guideline.' }
];

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
      brand          : { '@type': 'Brand', name: 'Chase' }, // Issuer
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
            description          : `Purchase APR: ${reviewData.aprRange}. Foreign Transaction Fee: $0. See official ${reviewData.cardName} Rates & Fees on the issuer's website. `,
          },
        ],
        seller: { '@type': 'Organization', name: 'Chase' },
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
        logo    : { '@type': 'ImageObject', url: `${siteUrl}/images/logo/your-logo-schema.png` }, // UPDATE THIS
      },
      datePublished   : publishDate,
      dateModified    : updateDate,
    },
    { '@type': 'WebPage', 
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
    { '@type': 'ImageObject', 
      '@id'     : `${pageUrlFull}#primaryImage`,
      url       : `${siteUrl}${reviewData.imageUrl}`,
      width     : reviewData.imageWidth,
      height    : reviewData.imageHeight,
      caption   : reviewData.cardName,
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
        '@type': 'Question',
        name: faq.q,
        acceptedAnswer: { 
            '@type': 'Answer', 
            text: faq.a.replace(/\[CITE:(\d+)\]/g, '').replace(/<[^>]*>/g, '') // Clean markers & HTML for schema
        }
      })),
    },
    { '@type' : 'Organization',
      '@id'   : `${siteUrl}#website`,
      name    : siteName,
      url     : siteUrl,
      logo    : { '@type': 'ImageObject', url: `${siteUrl}/images/logo/your-logo-schema.png` }, // UPDATE THIS
      sameAs  : [ 
        "https://www.facebook.com/YourTravelCardInsiderFacebookPage",  // UPDATE THIS
        "https://twitter.com/YourTravelCardInsiderTwitterHandle",    // UPDATE THIS
      ],
    },
  ],
};


const ratingCriteria = [
    'Avios Welcome Bonus Value & Spend Requirement',
    'Avios Earning Rate on BA & Partners (3x)',
    'Travel Together Ticket Value & Feasibility ($30K spend)',
    'Reward Flight Statement Credits (Up to $600 value)',
    '10% Discount on BA Flights Value & Usability',
    'Annual Fee ($95) Justification',
    'No Foreign Transaction Fees Benefit',
    'Avios Redemption Flexibility (BA & Oneworld partners)',
    'Value of Other Visa Signature Perks (Travel & Purchase Protections)',
    'Overall Value for BA Loyalists & Transatlantic Fliers',
];

const tocSections = [
    { id: 'section-intro', title: '1. BA Visa Signature: Your Ticket to Avios & Transatlantic Travel?' },
    { id: 'section-tldr', title: '2. TL;DR: Is the BA Visa Signature Card Worth the Annual Fee?' },
    { id: 'section-snapshot', title: '3. Card Snapshot: BA Visa Signature At-a-Glance & Ideal User' },
    // { id: 'section-visual-appeal', title: '4. Card Design: A Classic Look for a Classic Airline' }, // Optional, can be shorter
    { id: 'section-key-features', title: '4. Key Benefits: What Makes the BA Visa Signature Stand Out?' },
    { id: 'section-pros-cons', title: '5. Pros & Cons: Weighing the BA Visa Signature Card' },
    // Mid-article CTA will be placed after Pros & Cons
    { id: 'section-welcome-bonus', title: '6. Welcome Offer: A Generous Avios Boost to Start Your Journey' },
    { id: 'section-earning-avios', title: '7. Earning Avios: Maximizing Points on Flights, Hotels & More' },
    { id: 'section-travel-together-ticket', title: '8. Travel Together Ticket: Fly Your Companion for (Almost) Free' },
    { id: 'section-reward-flight-credits', title: '9. Reward Flight Credits: Softening BA Surcharges by up to $600' },
    { id: 'section-10percent-discount', title: '10. Exclusive Savings: 10% Off British Airways Flights' },
    { id: 'section-other-perks', title: '11. Beyond the Big Perks: Other Valuable Card Benefits' },
    { id: 'section-ba-executive-club', title: '12. Deep Dive: Understanding British Airways Executive Club & Avios' },
    { id: 'section-rates-fees', title: '13. Rates & Fees: What Will the BA Visa Signature Card Cost You?' },
    { id: 'section-travel-purchase-coverage', title: '14. Peace of Mind: Travel & Purchase Coverage Protections' },
    { id: 'section-real-world-example', title: '15. Value Illustrated: Funding a London Getaway with the BA Card' },
    { id: 'section-competitors', title: '16. Head-to-Head: BA Visa Signature vs. Competing Travel Cards' },
    { id: 'section-user-profiling', title: '17. Is This Card For You? Detailed User Profiling for the BA Visa' },
    { id: 'section-user-testimonials', title: '18. Real Cardmember Insights: BA Visa Signature Testimonials' },
    { id: 'section-managing-card', title: '19. Managing Your Card: Chase Tools & Customer Support' },
    { id: 'section-final-verdict', title: '20. Our Expert Verdict: The Bottom Line on the BA Visa Signature Card' },
    // FAQs are now after Final Verdict
    { id: 'section-faqs-jump', title: '21. British Airways Visa Signature: Frequently Asked Questions' },
    { id: 'section-next-steps', title: '22. Next Steps: Apply for the BA Visa or Explore More Options?' },
    { id: 'section-eat', title: '23. Our E-A-T Pledge: Why You Can Trust This BA Card Review' },
];

const contentImage1 = "/ba-visa-lifestyle-image1.webp"; // Placeholder - UPDATE THIS
const contentImage2 = "/avios-rewards-chart-example.webp"; // Placeholder - UPDATE THIS

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
function BritishAirwaysVisaSignatureReviewPage() {
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

  const summaryBoxData = {
    welcomeOffer: "Earn 75,000 bonus Avios after $5,000 spend in the first 3 months . (Always verify the current offer with Chase.)",
    annualFee: `$${reviewData.annualFee} `,
    topEarning: "<strong>3 Avios per $1</strong> on British Airways, Iberia, Aer Lingus, and LEVEL purchases . <strong>2 Avios per $1</strong> on hotel accommodations booked directly . <strong>1 Avios per $1</strong> on all other purchases .",
    keyPerks: "Travel Together Ticket (after $30K annual spend) , up to $600 in Reward Flight Statement Credits annually , 10% off BA flights from U.S. , No Foreign Transaction Fees .",
    bestFor: "Dedicated BA loyalists & transatlantic voyagers seeking premium perks and Avios maximization."
  };
  
  const keyFeaturesTableData = [
    { feature: "Generous Welcome Offer", description: "Typically earn 75,000 bonus Avios after meeting minimum spend requirements (e.g., $5,000 in 3 months) . This can be enough for a round-trip to Europe." },
    { feature: "Avios Earning Power", description: "<strong>3 Avios/$1</strong> on BA, Iberia, Aer Lingus, LEVEL; <strong>2 Avios/$1</strong> on direct hotel bookings; <strong>1 Avios/$1</strong> elsewhere ." },
    { feature: "Travel Together Ticket", description: "Spend $30,000 in a calendar year and get a companion ticket for a reward flight (pay taxes/fees only) or a 50% Avios discount if solo. Valid for 2 years on BA flights from/to U.S. ." },
    { feature: "Reward Flight Statement Credits", description: "Up to $600 back annually via statement credits for taxes, fees, and carrier charges on BA reward flights to London. ($100 for Economy/Premium Economy, $200 for Business/First, up to 3 times/year) ." },
    { feature: "10% Off BA Flights", description: "Save 10% on British Airways operated flights originating in the U.S. when booking with code `BACHASE10` via <a href='"+reviewData.officialBaChase10Link+"' target='_blank' rel='noopener noreferrer sponsored'>ba.com/Chase10</a> . Covers cardmember and up to 8 companions." },
    { feature: "No Foreign Transaction Fees", description: "Save ~3% on purchases made abroad, making it ideal for international travel ." },
    { feature: "Visa Signature® Benefits", description: "Includes valuable perks like Baggage Delay Insurance, Lost Luggage Reimbursement, Purchase Protection, and Extended Warranty Protection . (Terms apply)." },
    { feature: "Automatic BA Executive Club Membership", description: "Seamlessly earn Avios with automatic enrollment into the British Airways Executive Club ." }
  ];


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
        {reviewData.author.imageUrl && <link rel="preload" as="image" href={reviewData.author.imageUrl} />}
        {reviewData.author.tooltipImageUrl && <link rel="preload" as="image" href={reviewData.author.tooltipImageUrl} />}
        <meta name="geo.region" content="US" />
        <meta name="geo.placename" content="United States" />
        <meta name="language" content="en-US" />
        <meta name="distribution" content="US" />
        {[ 
          '/fonts/inter-v18-latin-regular.woff2', // Assuming these fonts are used
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
            <section className={styles.heroSection}>
                <div className={styles.heroTextContainer}>
                    <h1 className={styles.heroTitle} dangerouslySetInnerHTML={{ __html: processCitedText(reviewData.h1Content) }}></h1>
                     <p className={styles.reviewedByLine}>
                        Expert review by{' '}
                        <Link href={reviewData.author.fullBioLink || '#'} legacyBehavior>
                            <a className={styles.authorNameLink}>{reviewData.author.name}</a>
                        </Link>
                        , our specialist in airline loyalty programs and co-branded travel cards. 
                        Dilan has been navigating the skies of credit card rewards for over {new Date().getFullYear() - 2019} years. {/* Dynamic experience */}
                    </p>
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
                                <span className={styles.authorName}>{reviewData.author.name}</span>
                            </div>
                            <span className={styles.authorTitle}>{reviewData.author.title}</span>
                            {updateDate && (
                                <time dateTime={updateDate} className={styles.authorLastEdited}>
                                    Last updated: {new Date(updateDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                                </time>
                            )}
                            {/* Add social links SVGs if desired, like in the BoA example */}
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
                                 <div className={styles.authorTooltipExpertise}>
                                     <strong>Expertise</strong>
                                     <ul>{reviewData.author.expertise.map(area => <li key={area}>{area}</li>)}</ul>
                                 </div>
                               )}
                               <p className={styles.authorTooltipBioSnippet}>{reviewData.author.bioSnippet}</p>
                               {reviewData.author.fullBioLink && (
                                   <Link href={reviewData.author.fullBioLink} legacyBehavior>
                                       <a className={styles.authorTooltipBioLink}>See full bio</a>
                                   </Link>
                               )}
                               {/* Add social links SVGs to tooltip if desired */}
                            </div>
                        )}
                    </div>
                    <p className={styles.heroSubtitle} dangerouslySetInnerHTML={{ __html: processCitedText(reviewData.heroSubtitle) }}></p>
                    <div className={styles.heroCtaContainer}>
                        <div>
                            <a href={reviewData.applyLink} target="_blank" rel="noopener noreferrer sponsored"
                               className={`${styles.applyNowButton} ${styles.heroApplyButton}`}>
                                Apply Securely on Chase.com
                            </a>
                            <span className={styles.heroApplyButtonDisclaimer}>on Chase&apos;s official site</span>
                        </div>
                        <Link href="#section-key-features" legacyBehavior><a className={styles.heroSecondaryLink}>Explore Key Benefits</a></Link>
                    </div>
                </div>
                <div className={styles.heroImageContainer}>
                    <div className={styles.cardImageContainer}>
                        <Image src={reviewData.imageUrl} alt={reviewData.cardName} width={reviewData.imageWidth}
                               height={reviewData.imageHeight} className={styles.heroImage} priority />
                    </div>
                    <div className={styles.ratingSection}>
                        <span className={styles.tciRating}>
                            <button type="button" className={styles.infoIconButton} aria-label="Rating Information"
                                    onClick={handleIconClick} aria-expanded={showRatingInfo}>
                                <svg aria-hidden="true" focusable="false" className={styles.infoIcon} viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                    <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                                </svg>
                            </button>
                            {siteName} Rating: <strong>{reviewData.ratingValue.toFixed(1)}</strong>/10
                            {showRatingInfo && (
                              <RatingTooltip ref={ratingTooltipRef} ratingValue={reviewData.ratingValue}
                                             ratingCriteria={ratingCriteria} onClose={() => setShowRatingInfo(false)} />
                            )}
                        </span>
                        <div className={styles.starRating} title={`Rated ${reviewData.ratingValue} out of 10 stars`}>
                            ★★★★★
                            <span className={styles.filledStars} style={{ '--rating': `${(reviewData.ratingValue / 10) * 100}%` }}>★★★★★</span>
                        </div>
                    </div>
                    <div className={styles.ratingDescription}>
                        <i>{reviewData.cardShortName}: Strong for BA flyers valuing Avios and unique travel perks.</i>
                    </div>
                </div>
            </section>

            <div className={styles.reviewContainer}>
              <article>
                <header className={styles.reviewHeader}>
                    <div className={styles.summaryBox} id="summaryBoxTitle">
                        <h2 className={styles.summaryBoxTitle}>{reviewData.cardName}: Core Benefits Unpacked</h2>
                        <div className={styles.summaryGrid}>
                            <div className={styles.summaryItem}>
                                <span className={styles.summaryIcon}><IconGift /></span>
                                <span className={styles.summaryLabel}>Welcome Offer:</span>
                                <span className={styles.summaryValue} dangerouslySetInnerHTML={{ __html: processCitedText(summaryBoxData.welcomeOffer) }}></span>
                            </div>
                            <div className={styles.summaryItem}>
                                <span className={styles.summaryIcon}><IconCheck /></span> {/* Using check for annual fee here */}
                                <span className={styles.summaryLabel}>Annual Fee:</span>
                                <span className={styles.summaryValue} dangerouslySetInnerHTML={{ __html: processCitedText(summaryBoxData.annualFee) }}></span>
                            </div>
                            <div className={styles.summaryItem}>
                                <span className={styles.summaryIcon}><IconStar /></span>
                                <span className={styles.summaryLabel}>Top Avios Earning:</span>
                                <span className={styles.summaryValue} dangerouslySetInnerHTML={{ __html: processCitedText(summaryBoxData.topEarning) }}></span>
                            </div>
                             <div className={styles.summaryItem}>
                                <span className={styles.summaryIcon}><IconPlus /></span>
                                <span className={styles.summaryLabel}>Signature Perks:</span>
                                <span className={styles.summaryValue} dangerouslySetInnerHTML={{ __html: processCitedText(summaryBoxData.keyPerks) }}></span>
                            </div>
                            <div className={styles.summaryItem} data-full-width="true">
                                <span className={styles.summaryIcon}><IconPlane /></span>
                                <span className={styles.summaryLabel}>Best Suited For:</span>
                                <span className={styles.summaryValue} dangerouslySetInnerHTML={{ __html: processCitedText(summaryBoxData.bestFor) }}></span>
                            </div>
                        </div>
                        <div className={styles.summaryBoxActions}>
                            <a href={reviewData.ratesFeesLink} className={styles.summaryRatesLink} target="_blank" rel="noopener noreferrer sponsored"
                               dangerouslySetInnerHTML={{ __html: processCitedText("See Card Rates & Fees (Chase Site) ") }}>
                            </a>
                             <a href='/avios-calculator' className={`${styles.heroRewardsCalculator} ${styles.summaryButton}`} target="_blank" rel="noopener noreferrer"> {/* UPDATE LINK if needed */}
                                Avios Value Calculator 
                            </a>
                        </div>
                    </div>
                </header>

                <section id="section-intro" className={styles.reviewSection}>
                  <h2 dangerouslySetInnerHTML={{ __html: processCitedText(tocSections.find(s=>s.id==='section-intro').title) }}></h2>
                  <p dangerouslySetInnerHTML={{ __html: processCitedText("For U.S. travelers with their sights set on the UK and Europe, airline co-branded credit cards can be a golden ticket to enhanced loyalty perks and smoother journeys. The <strong>British Airways Visa Signature® Card</strong>, issued by Chase, emerges as a prime contender for anyone looking to maximize their travel experiences on British Airways and its extensive network of partners. This card revolves around Avios, the versatile currency of the British Airways Executive Club , promising a direct path to reward flights, upgrades, and more.") }}></p>
                  <p dangerouslySetInnerHTML={{ __html: processCitedText("But what does this card truly offer in 2025? We’re here to dissect it all – the compelling advantages, the potential drawbacks, and ultimately, whether it deserves a spot in your wallet. Our comprehensive assessment will focus on its overall value proposition, particularly for those frequent transatlantic journeys and travel within the oneworld® alliance. Is this card the key to unlocking your travel dreams across the pond? Let's explore every facet.") }}></p>
                </section>

                <section id="section-tldr" className={styles.reviewSection}>
                  <h2 dangerouslySetInnerHTML={{ __html: processCitedText(tocSections.find(s=>s.id==='section-tldr').title) }}></h2>
                  <p dangerouslySetInnerHTML={{ __html: processCitedText("In a hurry? Here’s the quick take: The <strong>British Airways Visa Signature® Card</strong> is a strong choice for U.S.-based frequent flyers of British Airways and its oneworld® partners, especially those who can maximize its unique travel perks like the Travel Together Ticket  and the annual Reward Flight Statement Credits . With a $95 annual fee , it aims to deliver value that outweighs its cost for the right type of traveler.") }}></p>
                  <p dangerouslySetInnerHTML={{ __html: processCitedText("<strong>It’s particularly compelling if:</strong> You regularly fly British Airways, can meet the $30,000 annual spend for the Travel Together Ticket, often travel to/through London (to use the statement credits), and are savvy enough to navigate Avios redemptions effectively. The 10% discount on BA cash flights  is another immediate money-saver.") }}></p>
                  <p dangerouslySetInnerHTML={{ __html: processCitedText("<strong>You might look elsewhere if:</strong> You prioritize flexible points redeemable across many unrelated programs, can't comfortably meet the high spend for the Travel Together Ticket, are highly averse to any airline surcharges (even with credits), or rarely fly BA or its partners. This card is a specialist tool, not a generalist travel card.") }}></p>
                  <p dangerouslySetInnerHTML={{ __html: processCitedText("<strong>Our bottom line:</strong> For dedicated BA loyalists and those who frequently hop across the Atlantic, the unique benefits can offer substantial savings and enhanced travel experiences, easily justifying the annual fee. For others, a more general travel rewards card might be a better fit. Read on for our full, detailed analysis!") }}></p>
                </section>

                <section id="section-snapshot" className={styles.reviewSection}>
                    <h2 dangerouslySetInnerHTML={{ __html: processCitedText(tocSections.find(s=>s.id==='section-snapshot').title) }}></h2>
                    <p dangerouslySetInnerHTML={{ __html: processCitedText("Let's break down the core components of the " + reviewData.cardName + ":") }}></p>
                    <ul className={styles.featureList}>
                        <li dangerouslySetInnerHTML={{ __html: processCitedText("<strong>Card Name:</strong> British Airways Visa Signature® Card") }}></li>
                        <li dangerouslySetInnerHTML={{ __html: processCitedText("<strong>Issuer:</strong> Chase") }}></li>
                        <li dangerouslySetInnerHTML={{ __html: processCitedText("<strong>Network:</strong> Visa Signature (ensuring wide global acceptance) ") }}></li>
                        <li dangerouslySetInnerHTML={{ __html: processCitedText("<strong>Annual Fee:</strong> $95 ") }}></li>
                        <li dangerouslySetInnerHTML={{ __html: processCitedText("<strong>Typical Welcome Offer:</strong> Earn 75,000 Avios after $5,000 spend in the first 3 months . (Important: Always verify the current offer directly with Chase before applying as it can change.)") }}></li>
                        <li dangerouslySetInnerHTML={{ __html: processCitedText("<strong>Primary Rewards Currency:</strong> Avios (for British Airways Executive Club) ") }}></li>
                        <li dangerouslySetInnerHTML={{ __html: processCitedText("<strong>Key Perks Summary:</strong> Travel Together Ticket , up to $600 in Reward Flight Statement Credits annually , 10% off BA flights from the U.S. , No Foreign Transaction Fees .") }}></li>
                    </ul>
                    <p dangerouslySetInnerHTML={{ __html: processCitedText("<strong>Our \"Best For\" Tagline:</strong> \"The BA Loyalist's Key to Transatlantic Value & Premium Travel Perks.\"") }}></p>
                    <p dangerouslySetInnerHTML={{ __html: processCitedText("This tagline encapsulates its core strength: rewarding those who frequently fly with British Airways or its partners, and who can strategically use its array of benefits designed for significant savings on flights and enhanced travel experiences, particularly to and through London.") }}></p>
                </section>
                
                <Image src={contentImage1} alt="Person happily planning a trip to London with a laptop" width={800} height={500} className={styles.contentImage} loading="lazy" />

                {/* Optional: Visual Appeal Section - can be kept brief or removed if focusing on utility
                <section id="section-visual-appeal" className={styles.reviewSection}>
                    <h2 dangerouslySetInnerHTML={{ __html: processCitedText(tocSections.find(s=>s.id==='section-visual-appeal').title) }}></h2>
                    <p dangerouslySetInnerHTML={{ __html: processCitedText("The British Airways Visa Signature® Card typically features a design that reflects its premium airline association. Expect a professional look, often incorporating British Airways' branding elements. While card design is subjective, it generally aligns with the sophisticated image of international travel.") }}></p>
                </section>
                */}

                <section id="section-key-features" className={styles.reviewSection}>
                    <h2 dangerouslySetInnerHTML={{ __html: processCitedText(tocSections.find(s=>s.id==='section-key-features').title) }}></h2>
                    <p>This card is packed with features designed to enhance your British Airways travel. Here’s a closer look at the standout benefits:</p>
                    <DraggableTableWrapper>
                        <div className={styles.tableContainer}>
                            <table className={`${styles.statsTable} ${styles.highlightTable}`}>
                                <thead>
                                    <tr>
                                        <th>Benefit Highlight</th>
                                        <th>The Details & Value Proposition</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {keyFeaturesTableData.map((item, index) => (
                                        <tr key={index}>
                                            <td data-label="Benefit Highlight" dangerouslySetInnerHTML={{ __html: processCitedText(item.feature) }}></td>
                                            <td data-label="The Details & Value Proposition" dangerouslySetInnerHTML={{ __html: processCitedText(item.description) }}></td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </DraggableTableWrapper>
                </section>

                <section id="section-pros-cons" className={styles.reviewSection}>
                    <h2 dangerouslySetInnerHTML={{ __html: processCitedText(tocSections.find(s=>s.id==='section-pros-cons').title) }}></h2>
                    <p>Every financial product has its strengths and weaknesses. Here’s a balanced view of the British Airways Visa Signature® Card:</p>
                    <div className={styles.prosConsContainer}>
                        <div className={styles.prosList}>
                            <h3>The Bright Sides (Pros):</h3>
                            <ul>
                                <li dangerouslySetInnerHTML={{ __html: processCitedText("<strong>Significant Welcome Bonus:</strong> Typically offers a large Avios bonus that can kickstart your reward travel .") }}></li>
                                <li dangerouslySetInnerHTML={{ __html: processCitedText("<strong>Travel Together Ticket:</strong> A highly valuable perk for couples or solo travelers who meet the annual spend, potentially saving thousands on companion fares or Avios .") }}></li>
                                <li dangerouslySetInnerHTML={{ __html: processCitedText("<strong>Reward Flight Statement Credits:</strong> Up to $600 annually helps offset high BA surcharges on reward flights to London .") }}></li>
                                <li dangerouslySetInnerHTML={{ __html: processCitedText("<strong>10% Off BA Flights:</strong> Direct cash savings on BA flights booked from the U.S. can quickly cover the annual fee .") }}></li>
                                <li dangerouslySetInnerHTML={{ __html: processCitedText("<strong>Strong Avios Earning on IAG Airlines:</strong> 3 Avios per $1 spent on BA, Iberia, Aer Lingus, and LEVEL is competitive for loyalists .") }}></li>
                                <li dangerouslySetInnerHTML={{ __html: processCitedText("<strong>No Foreign Transaction Fees:</strong> Essential for international travelers, saving ~3% on purchases abroad .") }}></li>
                                <li dangerouslySetInnerHTML={{ __html: processCitedText("<strong>Good Hotel Earning Rate:</strong> 2 Avios per $1 on direct hotel bookings is a nice bonus .") }}></li>
                                <li dangerouslySetInnerHTML={{ __html: processCitedText("<strong>Access to Oneworld Partner Redemptions:</strong> Avios can be used on partner airlines like American Airlines, sometimes offering better value or lower fees .") }}></li>
                            </ul>
                        </div>
                        <div className={styles.consList}>
                            <h3>Points to Consider (Cons):</h3>
                            <ul>
                                <li dangerouslySetInnerHTML={{ __html: processCitedText("<strong>$95 Annual Fee:</strong> While moderate, you need to use the benefits to justify it .") }}></li>
                                <li dangerouslySetInnerHTML={{ __html: processCitedText("<strong>High Spend for Travel Together Ticket:</strong> $30,000 in a calendar year can be a stretch for many .") }}></li>
                                <li dangerouslySetInnerHTML={{ __html: processCitedText("<strong>BA Surcharges Persist:</strong> Even with credits, BA's own reward flights can have significant taxes, fees, and carrier charges .") }}></li>
                                <li dangerouslySetInnerHTML={{ __html: processCitedText("<strong>Avios Value Can Vary:</strong> Maximizing Avios requires some knowledge of the BA Executive Club program and sweet spots .") }}></li>
                                <li dangerouslySetInnerHTML={{ __html: processCitedText("<strong>Less Flexible Rewards:</strong> Unlike general travel cards, Avios are primarily tied to airline redemptions within the BA ecosystem.") }}></li>
                                <li dangerouslySetInnerHTML={{ __html: processCitedText("<strong>1 Avios Per $1 on General Spend:</strong> Not the best rate for everyday purchases outside of bonus categories .") }}></li>
                                <li dangerouslySetInnerHTML={{ __html: processCitedText("<strong>No Automatic Elite Perks:</strong> The card doesn't grant BA elite status benefits like lounge access or priority boarding directly (these come from flying and earning Tier Points).") }}></li>
                            </ul>
                        </div>
                    </div>
                </section>
                
                {/* Mid-Article CTA */}
                <div className={styles.midArticleCta}>
                  <h3>Intrigued by the Avios Potential?</h3>
                  <p>Welcome bonuses and specific card terms can change. It's always a good idea to check the latest offer directly with Chase before you apply for the British Airways Visa Signature® Card.</p>
                  <a href={reviewData.applyLink} target="_blank" rel="noopener noreferrer sponsored" className={`${styles.applyNowButton} ${styles.midCtaButton}`}>
                    Check Current Offer on Chase.com 
                  </a>
                  <span className={styles.ctaDisclaimer}>on Chase's official site</span>
                </div>

                <section id="section-welcome-bonus" className={styles.reviewSection}>
                    <h2 dangerouslySetInnerHTML={{ __html: processCitedText(tocSections.find(s=>s.id==='section-welcome-bonus').title) }}></h2>
                    <p dangerouslySetInnerHTML={{ __html: processCitedText("The British Airways Visa Signature® Card typically rolls out an attractive welcome offer to new cardmembers. For instance, a common offer is the ability to <strong>earn 75,000 bonus Avios</strong> after spending $5,000 on purchases within the first three months of account opening . It's crucial to always verify the current, active offer directly with Chase before you apply, as these promotions can change.") }}></p>
                    <p dangerouslySetInnerHTML={{ __html: processCitedText("What can 75,000 Avios get you? That's a significant haul! It could easily cover a round-trip Economy flight to Europe, or even contribute substantially towards a premium cabin experience like a lie-flat seat in Business Class (Club World) if you're strategic about redemptions, especially during off-peak times . Avios aren't just for British Airways flights either; they can be used with oneworld® alliance partners such as American Airlines and Alaska Airlines. This flexibility is particularly useful for short-haul flights within North America, where Avios can offer excellent value.") }}></p>
                    <p dangerouslySetInnerHTML={{ __html: processCitedText("Meeting the $5,000 spending threshold within three months (which averages out to about $1,667 per month) is a fairly standard requirement for premium travel rewards cards. Planning for regular household spending or timing your application with a few large, planned purchases can help you comfortably achieve this. A noteworthy benefit tied to your Avios is their longevity: Avios in your British Airways Executive Club account won't expire as long as you collect, spend, purchase, or share at least one Avios every 36 months . Simply using this card for purchases ensures ongoing activity in your account.") }}></p>
                </section>

                <section id="section-earning-avios" className={styles.reviewSection}>
                    <h2 dangerouslySetInnerHTML={{ __html: processCitedText(tocSections.find(s=>s.id==='section-earning-avios').title) }}></h2>
                    <p dangerouslySetInnerHTML={{ __html: processCitedText("Understanding how you accumulate Avios is fundamental to unlocking the long-term value of the British Airways Visa Signature® Card. Its earning structure is designed to generously reward spending with British Airways and its International Airlines Group (IAG) partners, as well as direct hotel bookings.") }}></p>
                    <h3 className={styles.subHeading}>Avios Earning Rates:</h3>
                    <ul className={styles.featureList}>
                        <li dangerouslySetInnerHTML={{ __html: processCitedText("<strong>Earn 3 Avios per $1 spent</strong> on flight purchases made directly with British Airways, Iberia, Aer Lingus, and LEVEL . This is a strong rate for those loyal to these airlines.") }}></li>
                        <li dangerouslySetInnerHTML={{ __html: processCitedText("<strong>Earn 2 Avios per $1 spent</strong> on hotel accommodations when you book directly with the hotel . This is a solid return for hotel stays, but remember that &quot;direct booking&quot; typically excludes reservations made through third-party online travel agencies (like Expedia, Booking.com, etc.).") }}></li>
                        <li dangerouslySetInnerHTML={{ __html: processCitedText("<strong>Earn 1 Avios per $1 spent</strong> on all other purchases . While you'll earn on every purchase, this base rate isn't the highest on the market for general spending.") }}></li>
                    </ul>
                    <p dangerouslySetInnerHTML={{ __html: processCitedText("The 3x Avios earning rate on IAG airline purchases is certainly competitive and a major draw if you frequently fly these carriers. The 2x rate on direct hotel bookings is also a valuable perk. However, for spending outside of these travel categories, the 1 Avios per $1 rate is standard but not exceptional. If a significant portion of your budget goes towards everyday categories like groceries or dining (not directly with hotels), you might consider pairing this card with another that offers higher rewards in those specific areas. For newcomers to the British Airways loyalty program, a convenient feature is that this card automatically enrolls you in the British Airways Executive Club, ensuring your earned Avios are seamlessly deposited into your account .") }}></p>
                </section>
                
                <Image src={contentImage2} alt="Graphic illustrating Avios points accumulating from flights and hotel stays" width={800} height={450} className={styles.contentImage} loading="lazy" />

                <section id="section-travel-together-ticket" className={styles.reviewSection}>
                    <h2 dangerouslySetInnerHTML={{ __html: processCitedText(tocSections.find(s=>s.id==='section-travel-together-ticket').title) }}></h2>
                    <p dangerouslySetInnerHTML={{ __html: processCitedText("One of the most talked-about and potentially lucrative benefits of the British Airways Visa Signature® Card is the <strong>Travel Together Ticket</strong> . This perk can offer substantial savings, especially if you enjoy premium cabin travel, though it does require a significant annual spend on your card.") }}></p>
                    <h3 className={styles.subHeading}>How to Earn It:</h3>
                    <p dangerouslySetInnerHTML={{ __html: processCitedText("To earn the Travel Together Ticket, you need to make <strong>$30,000 in purchases on your card within a single calendar year</strong> . Once earned, the voucher is typically valid for two years from the date of issue.") }}></p>
                    <h3 className={styles.subHeading}>What It Offers:</h3>
                    <p dangerouslySetInnerHTML={{ __html: processCitedText("When you redeem your Avios for a British Airways reward flight, the Travel Together Ticket allows a companion to join you in the same cabin for <strong>no additional Avios cost</strong>. Your companion will still be responsible for paying all applicable taxes, fees, and carrier charges. If you're a solo traveler, the benefit adapts: you can use the Travel Together Ticket to receive a <strong>50% discount on the Avios price</strong> for your own reward flight .") }}></p>
                    <h3 className={styles.subHeading}>Key Conditions & Considerations:</h3>
                    <ul className={styles.indentedList}>
                        <li dangerouslySetInnerHTML={{ __html: processCitedText("<strong>Taxes, Fees, and Carrier Charges:</strong> It's crucial to remember that your companion (or you, if using the 50% solo discount) will need to pay these charges, which can be quite hefty on British Airways long-haul flights, particularly in premium cabins like Business (Club World) or First Class. These can sometimes run into hundreds or even over a thousand dollars.") }}></li>
                        <li dangerouslySetInnerHTML={{ __html: processCitedText("<strong>Reward Seat Availability:</strong> Use of the Travel Together Ticket is subject to reward seat availability on British Airways flights, which can be limited, especially in higher cabins and on popular routes. Booking well in advance is often recommended.") }}></li>
                        <li dangerouslySetInnerHTML={{ __html: processCitedText("<strong>Flight Restrictions:</strong> The ticket is valid only on British Airways operated flights (not codeshares operated by partners) that originate in and return to the United States .") }}></li>
                    </ul>
                    <p dangerouslySetInnerHTML={{ __html: processCitedText("The Travel Together Ticket truly shines when redeemed for long-haul travel in premium cabins. For Business (Club World) or First Class seats, the Avios savings can translate into thousands of dollars in value, easily justifying the card's annual fee and even the associated taxes and fees on the companion ticket. This perk is best suited for dedicated, high-spending British Airways loyalists who aim for these premium travel experiences.") }}></p>
                </section>

                <section id="section-reward-flight-credits" className={styles.reviewSection}>
                    <h2 dangerouslySetInnerHTML={{ __html: processCitedText(tocSections.find(s=>s.id==='section-reward-flight-credits').title) }}></h2>
                    <p dangerouslySetInnerHTML={{ __html: processCitedText("A common pain point with British Airways Avios redemptions on their own flights can be the significant carrier-imposed surcharges. The British Airways Visa Signature® Card directly addresses this with its valuable <strong>Reward Flight Statement Credit</strong> benefit .") }}></p>
                    <h3 className={styles.subHeading}>The Perk Explained:</h3>
                    <p dangerouslySetInnerHTML={{ __html: processCitedText("Cardmembers can receive statement credits when they book a British Airways reward flight (using Avios) to London and use their British Airways Visa Signature® Card to pay for the associated taxes, fees, and carrier charges .") }}></p>
                    <h3 className={styles.subHeading}>Credit Amounts:</h3>
                    <p dangerouslySetInnerHTML={{ __html: processCitedText("You can receive these credits up to three times per calendar year, with a maximum total of $600 in credits annually . The specific credit amounts are:") }}></p>
                    <ul className={styles.featureList}>
                        <li dangerouslySetInnerHTML={{ __html: processCitedText("<strong>$100 statement credit</strong> for a reward flight booking in Economy (World Traveller) or Premium Economy (World Traveller Plus).") }}></li>
                        <li dangerouslySetInnerHTML={{ __html: processCitedText("<strong>$200 statement credit</strong> for a reward flight booking in Business (Club World) or First Class.") }}></li>
                    </ul>
                    <p dangerouslySetInnerHTML={{ __html: processCitedText("This benefit provides significant, tangible value. It directly reduces one of the main drawbacks of using Avios for British Airways flights – those pesky surcharges. For example, if you were to take three Business Class reward trips to London in a single year, you could receive $200 in credits for each, totaling $600 back. This alone would cover the card's $95 annual fee more than six times over, making Avios redemptions on British Airways significantly more attractive and cost-effective.") }}></p>
                </section>

                <section id="section-10percent-discount" className={styles.reviewSection}>
                    <h2 dangerouslySetInnerHTML={{ __html: processCitedText(tocSections.find(s=>s.id==='section-10percent-discount').title) }}></h2>
                    <p dangerouslySetInnerHTML={{ __html: processCitedText("Beyond Avios earnings and redemption perks, the British Airways Visa Signature® Card offers a straightforward cash-saving benefit: a <strong>10% discount on British Airways operated flights</strong> that originate in the U.S. .") }}></p>
                    <h3 className={styles.subHeading}>How It Works:</h3>
                    <ul className={styles.indentedList}>
                        <li dangerouslySetInnerHTML={{ __html: processCitedText("The discount applies to the total fare (including taxes, fees, and carrier charges) for round-trip or one-way British Airways operated flights. The journey must start in the U.S. and can be to any British Airways destination worldwide.") }}></li>
                        <li dangerouslySetInnerHTML={{ __html: processCitedText("This discount is valid for travel in any cabin – Economy (World Traveller), Premium Economy (World Traveller Plus), Business (Club World), or First.") }}></li>
                        <li dangerouslySetInnerHTML={{ __html: processCitedText("It can cover the cardmember and up to eight additional passengers traveling on the same itinerary.") }}></li>
                        <li dangerouslySetInnerHTML={{ __html: processCitedText("To get the discount, you must book your flights through the dedicated webpage <a href='"+reviewData.officialBaChase10Link+"' target='_blank' rel='noopener noreferrer sponsored'>ba.com/Chase10</a> and use the promotional code <strong>BACHASE10</strong> at checkout . The primary cardmember must be one of the travelers on the booking.") }}></li>
                    </ul>
                    <p dangerouslySetInnerHTML={{ __html: processCitedText("This is a valuable perk that can provide immediate savings. For instance, a 10% discount on a $1,000 flight itinerary would save you $100, instantly covering the card's $95 annual fee. This benefit is particularly useful for those who regularly purchase cash fares on British Airways from the U.S., regardless of whether they are heavily focused on Avios collection.") }}></p>
                </section>

                <section id="section-other-perks" className={styles.reviewSection}>
                    <h2 dangerouslySetInnerHTML={{ __html: processCitedText(tocSections.find(s=>s.id==='section-other-perks').title) }}></h2>
                    <p dangerouslySetInnerHTML={{ __html: processCitedText("Beyond the headline features, the British Airways Visa Signature® Card rounds out its offering with several other practical benefits that can add real value, especially for frequent travelers:") }}></p>
                    <ul className={styles.featureList}>
                        <li dangerouslySetInnerHTML={{ __html: processCitedText("<strong>No Foreign Transaction Fees :</strong> As mentioned, this is a key benefit for international travel, saving you from extra charges (typically ~3%) on purchases made outside the U.S.") }}></li>
                        <li dangerouslySetInnerHTML={{ __html: processCitedText("<strong>Automatic BA Executive Club Membership :</strong> Simplifies Avios earning for those new to the program, ensuring points are deposited directly into your BA account.") }}></li>
                        <li dangerouslySetInnerHTML={{ __html: processCitedText("<strong>Contactless Payment:</strong> Features &quot;tap to pay&quot; capability for quick and secure checkouts where available.") }}></li>
                        <li dangerouslySetInnerHTML={{ __html: processCitedText("<strong>Travel and Purchase Coverage :</strong> As a Visa Signature® card, it includes a suite of protections. These often include (terms and conditions apply):") }}></li>
                        <ul className={styles.nestedList}>
                            <li dangerouslySetInnerHTML={{ __html: processCitedText("<em>Baggage Delay Insurance:</em> May reimburse you for essential purchases if your checked baggage is delayed by a covered common carrier for more than a specified time (e.g., 6 hours).") }}></li>
                            <li dangerouslySetInnerHTML={{ __html: processCitedText("<em>Lost Luggage Reimbursement:</em> Can provide coverage if your checked or carry-on baggage is lost, damaged, or stolen by a common carrier.") }}></li>
                            <li dangerouslySetInnerHTML={{ __html: processCitedText("<em>Purchase Protection:</em> May cover your eligible new purchases against damage or theft for a certain period (e.g., 120 days from purchase, up to a certain amount per claim).") }}></li>
                            <li dangerouslySetInnerHTML={{ __html: processCitedText("<em>Extended Warranty Protection:</em> Can extend the time period of an eligible U.S. manufacturer's warranty by an additional year, on warranties of three years or less.") }}></li>
                        </ul>
                        <li dangerouslySetInnerHTML={{ __html: processCitedText("<strong>DoorDash Benefits (Potential):</strong> Cardmembers may be eligible for a complimentary DashPass membership for a limited time, which offers $0 delivery fees and reduced service fees on eligible DoorDash orders. Enrollment may be required, and this benefit is subject to change.") }}></li>
                    </ul>
                    <p dangerouslySetInnerHTML={{ __html: processCitedText("These additional benefits contribute to the card's overall utility, providing everyday convenience, potential savings, and a safety net when traveling or making purchases. Always refer to your Chase Guide to Benefits for the full terms and specifics of these coverages.") }}></p>
                </section>

                <section id="section-ba-executive-club" className={styles.reviewSection}>
                    <h2 dangerouslySetInnerHTML={{ __html: processCitedText(tocSections.find(s=>s.id==='section-ba-executive-club').title) }}></h2>
                    <p dangerouslySetInnerHTML={{ __html: processCitedText("The value proposition of the British Airways Visa Signature® Card is intrinsically linked to the <strong>British Airways Executive Club</strong> loyalty program and its currency, <strong>Avios</strong> . Understanding this ecosystem is key to maximizing your card benefits.") }}></p>
                    <h3 className={styles.subHeading}>The British Airways Executive Club:</h3>
                    <p dangerouslySetInnerHTML={{ __html: processCitedText("This is British Airways' free-to-join loyalty program. You earn Avios not just through card spending but also by flying with British Airways and its oneworld® alliance partners, staying at partner hotels, renting cars, and shopping with retail partners. The program features several elite tiers – Blue (entry-level), Bronze, Silver, and Gold – which are achieved by earning Tier Points from eligible flights. These tiers unlock progressively valuable benefits such as priority check-in, extra baggage allowance, and airport lounge access. It's important to note that Avios earned through credit card spending <strong>do not</strong> count towards earning Tier Points or elite status . The Executive Club also allows for Household Accounts, where up to seven individuals living at the same address can pool their Avios, making it easier to save for larger redemptions.") }}></p>
                    <h3 className={styles.subHeading}>Avios Redemptions – Versatility is Key:</h3>
                    <p dangerouslySetInnerHTML={{ __html: processCitedText("Avios offer a wide range of redemption options :") }}></p>
                    <ul className={styles.featureList}>
                        <li dangerouslySetInnerHTML={{ __html: processCitedText("<strong>Reward Flights:</strong> This is the most common use. You can book flights on British Airways and its extensive network of oneworld® alliance partners (like American Airlines, Alaska Airlines, Qatar Airways, Cathay Pacific, Iberia, etc.). BA also offers &quot;Reward Flight Saver&quot; options for short-haul flights, which have lower Avios requirements and capped fees.") }}></li>
                        <li dangerouslySetInnerHTML={{ __html: processCitedText("<strong>Cabin Upgrades:</strong> Use Avios to upgrade your seat on eligible cash bookings with British Airways, Iberia, and Aer Lingus.") }}></li>
                        <li dangerouslySetInnerHTML={{ __html: processCitedText("<strong>Hotels, Car Rentals, and Experiences:</strong> Avios can also be redeemed for hotel stays, car rentals, and various travel experiences, though the value per Avios might not always be as high as flight redemptions.") }}></li>
                        <li dangerouslySetInnerHTML={{ __html: processCitedText("<strong>Part Payment:</strong> You can use Avios to reduce the cash price of your British Airways flights.") }}></li>
                    </ul>
                    <h3 className={styles.subHeading}>Maximizing Your Avios Value:</h3>
                    <p dangerouslySetInnerHTML={{ __html: processCitedText("The value you get from your Avios can vary significantly depending on how you redeem them. While British Airways long-haul reward flights can come with high taxes, fees, and carrier surcharges, there are ways to maximize value :") }}></p>
                    <ul className={styles.indentedList}>
                        <li dangerouslySetInnerHTML={{ __html: processCitedText("<strong>Partner Redemptions:</strong> Booking reward flights on partner airlines, especially those like American Airlines or Alaska Airlines for domestic U.S. travel or some international routes, can often result in much lower fees and surcharges.") }}></li>
                        <li dangerouslySetInnerHTML={{ __html: processCitedText("<strong>Short-Haul Flights:</strong> Avios can offer excellent value for short-haul flights, particularly in Europe or other regions, with the Reward Flight Saver feature keeping cash costs down.") }}></li>
                        <li dangerouslySetInnerHTML={{ __html: processCitedText("<strong>Upgrades:</strong> Upgrading a discounted cash ticket to the next cabin (e.g., Premium Economy to Business) can be a very worthwhile use of Avios, especially on long flights.") }}></li>
                    </ul>
                    <p dangerouslySetInnerHTML={{ __html: processCitedText("Remember, Avios remain valid as long as you have at least one qualifying activity (earning, spending, purchasing, or sharing Avios) every 36 months . Using your British Airways Visa Signature® Card regularly ensures your Avios won't expire. Furthermore, Avios can often be transferred between the loyalty programs of British Airways, Iberia, Aer Lingus, and Qatar Airways, offering additional flexibility.") }}></p>
                </section>

                <section id="section-rates-fees" className={styles.reviewSection}>
                    <h2 dangerouslySetInnerHTML={{ __html: processCitedText(tocSections.find(s=>s.id==='section-rates-fees').title) }}></h2>
                    <p dangerouslySetInnerHTML={{ __html: processCitedText("Before applying for any credit card, it’s essential to understand its associated costs. Always refer to the current Cardmember Agreement provided by Chase for the most precise and up-to-date figures . Here’s a general overview based on typical information:") }}></p>
                    <ul className={styles.featureList}>
                        <li dangerouslySetInnerHTML={{ __html: processCitedText("<strong>Annual Fee:</strong> $95") }}></li>
                        <li dangerouslySetInnerHTML={{ __html: processCitedText("<strong>Purchase APR:</strong> A variable Annual Percentage Rate (APR) applies to purchases. For example, this might be 21.49% - 28.49%, based on your creditworthiness and the Prime Rate. This APR will vary with the market based on the Prime Rate.") }}></li>
                        <li dangerouslySetInnerHTML={{ __html: processCitedText("<strong>Balance Transfer Fee:</strong> If you transfer a balance, a fee typically applies. This is often $5 or 5% of the amount of each transfer, whichever is greater.") }}></li>
                        <li dangerouslySetInnerHTML={{ __html: processCitedText("<strong>Cash Advance APR:</strong> A higher variable APR usually applies to cash advances.") }}></li>
                        <li dangerouslySetInnerHTML={{ __html: processCitedText("<strong>Cash Advance Fee:</strong> A fee is charged for cash advances, often $10 or 5% of the amount of each cash advance, whichever is greater.") }}></li>
                        <li dangerouslySetInnerHTML={{ __html: processCitedText("<strong>Foreign Transaction Fee: $0</strong> (This is a significant benefit for international travelers.)") }}></li>
                        <li dangerouslySetInnerHTML={{ __html: processCitedText("<strong>Late Payment Fee:</strong> A fee, potentially up to $40, may be charged if your payment is late.") }}></li>
                        <li dangerouslySetInnerHTML={{ __html: processCitedText("<strong>Returned Payment Fee:</strong> A fee, potentially up to $40, may be charged if a payment is returned.") }}></li>
                        <li dangerouslySetInnerHTML={{ __html: processCitedText("<strong>Penalty APR:</strong> If you make a late payment or your payment is returned, a penalty APR (which can be as high as 29.99% variable) may apply to your account balances.") }}></li>
                    </ul>
                    <p dangerouslySetInnerHTML={{ __html: processCitedText("The $95 annual fee is moderate for a travel rewards card with this level of airline-specific perks. The absence of foreign transaction fees is a key money-saver for international use. However, the APRs for purchases, balance transfers, and cash advances can be high. To avoid interest charges that can negate the value of your rewards, it's always best practice to pay your statement balance in full and on time each month.") }}></p>
                </section>

                <section id="section-travel-purchase-coverage" className={styles.reviewSection}>
                    <h2 dangerouslySetInnerHTML={{ __html: processCitedText(tocSections.find(s=>s.id==='section-travel-purchase-coverage').title) }}></h2>
                    <p dangerouslySetInnerHTML={{ __html: processCitedText("As a Visa Signature® card, the British Airways Visa Signature® Card comes equipped with a range of travel and purchase protection benefits that can offer valuable peace of mind . While the specific terms, conditions, and coverage amounts can vary and are detailed in your Chase Guide to Benefits, here are some common protections you might find:") }}></p>
                    <ul className={styles.featureList}>
                        <li dangerouslySetInnerHTML={{ __html: processCitedText("<strong>Baggage Delay Insurance:</strong> If your checked baggage is delayed by a common carrier for more than a specified period (e.g., six hours), this benefit may reimburse you for essential items you need to purchase, such as toiletries and clothing, up to a certain limit (e.g., up to $100 per day for up to 3 days).") }}></li>
                        <li dangerouslySetInnerHTML={{ __html: processCitedText("<strong>Lost Luggage Reimbursement:</strong> This can provide coverage for the actual cost to repair or replace your checked or carry-on baggage and its contents if they are lost, damaged, or stolen by a common carrier, typically up to a limit like $3,000 per traveler per trip.") }}></li>
                        <li dangerouslySetInnerHTML={{ __html: processCitedText("<strong>Purchase Protection:</strong> Covers your eligible new retail purchases made with the card against damage or theft for a specific period from the date of purchase (e.g., 120 days), up to a certain amount per claim (e.g., $500) and per account.") }}></li>
                        <li dangerouslySetInnerHTML={{ __html: processCitedText("<strong>Extended Warranty Protection:</strong> This benefit can extend the time period of an eligible U.S. manufacturer's written warranty by an additional year, on warranties of three years or less. This applies to items purchased with your card.") }}></li>
                    </ul>
                    <p dangerouslySetInnerHTML={{ __html: processCitedText("It's crucial to consult your official Chase Guide to Benefits for the precise details, limitations, exclusions, and procedures for filing a claim for any of these protections. These benefits can save you significant money and hassle in unforeseen circumstances.") }}></p>
                </section>

                <section id="section-real-world-example" className={styles.reviewSection}>
                    <h2 dangerouslySetInnerHTML={{ __html: processCitedText(tocSections.find(s=>s.id==='section-real-world-example').title) }}></h2>
                    <p dangerouslySetInnerHTML={{ __html: processCitedText("Let's illustrate how the British Airways Visa Signature® Card benefits can come together with a hypothetical example. Meet Taylor, who's planning a premium economy getaway to London with her partner.") }}></p>
                    <h3 className={styles.subHeading}>Taylor's Strategy:</h3>
                    <ol className={styles.orderedList}>
                        <li dangerouslySetInnerHTML={{ __html: processCitedText("Taylor applies for and receives the British Airways Visa Signature® Card. She meets the $5,000 spending requirement within the first 3 months, earning the <strong>75,000 bonus Avios</strong> .") }}></li>
                        <li dangerouslySetInnerHTML={{ __html: processCitedText("Over the course of the calendar year, Taylor strategically uses her card for all her spending, reaching a total of $30,000. This earns her the <strong>Travel Together Ticket</strong> . Her spending breakdown might look like this:") }}></li>
                        <ul className={styles.nestedList}>
                            <li dangerouslySetInnerHTML={{ __html: processCitedText("$3,000 on British Airways flights (e.g., for this trip or previous ones): $3,000 x 3 Avios/$ = 9,000 Avios .") }}></li>
                            <li dangerouslySetInnerHTML={{ __html: processCitedText("$2,000 on hotel accommodations booked directly: $2,000 x 2 Avios/$ = 4,000 Avios .") }}></li>
                            <li dangerouslySetInnerHTML={{ __html: processCitedText("$25,000 on other everyday purchases: $25,000 x 1 Avios/$ = 25,000 Avios .") }}></li>
                        </ul>
                        <li dangerouslySetInnerHTML={{ __html: processCitedText("<strong>Total Avios Earned from Spending:</strong> 9,000 + 4,000 + 25,000 = 38,000 Avios.") }}></li>
                        <li dangerouslySetInnerHTML={{ __html: processCitedText("<strong>Total Avios Available (Bonus + Spend):</strong> 75,000 + 38,000 = <strong>113,000 Avios</strong>.") }}></li>
                    </ol>
                    <h3 className={styles.subHeading}>Redemption for Off-Peak Premium Economy to London:</h3>
                     <ul className={styles.featureList}>
                        <li dangerouslySetInnerHTML={{ __html: processCitedText("Let's assume an off-peak round-trip Premium Economy (World Traveller Plus) reward flight to London costs 80,000 Avios per person.") }}></li>
                        <li dangerouslySetInnerHTML={{ __html: processCitedText("With the <strong>Travel Together Ticket</strong>, Taylor uses 80,000 Avios for her flight, and her partner travels for 0 additional Avios (partner only pays taxes, fees, and carrier charges) .") }}></li>
                        <li dangerouslySetInnerHTML={{ __html: processCitedText("Assume taxes, fees, and carrier charges are approximately $500 per person, totaling $1,000 for two people.") }}></li>
                    </ul>
                    <h3 className={styles.subHeading}>Applying Card Benefits:</h3>
                     <ul className={styles.featureList}>
                        <li dangerouslySetInnerHTML={{ __html: processCitedText("<strong>Travel Together Ticket:</strong> Saves Taylor 80,000 Avios (the cost of her partner's flight).") }}></li>
                        <li dangerouslySetInnerHTML={{ __html: processCitedText("<strong>Reward Flight Statement Credits:</strong> Since they are flying Premium Economy to London, Taylor can receive two $100 statement credits (one for her, one for her partner, assuming separate bookings or eligibility per person as per terms, or one $100 credit if based on the primary cardmember's booking for the cabin type, up to the annual cap). For simplicity, let's say she receives $200 back in credits for this trip by paying the fees with her card .") }}></li>
                    </ul>
                    <h3 className={styles.subHeading}>Net Cost Calculation:</h3>
                    <ul className={styles.featureList}>
                        <li dangerouslySetInnerHTML={{ __html: processCitedText("<strong>Avios Used:</strong> 80,000 Avios (for Taylor's flight).") }}></li>
                        <li dangerouslySetInnerHTML={{ __html: processCitedText("<strong>Cash for Taxes & Fees:</strong> $1,000 - $200 (statement credits) = $800.") }}></li>
                        <li dangerouslySetInnerHTML={{ __html: processCitedText("<strong>Card Annual Fee:</strong> $95.") }}></li>
                        <li dangerouslySetInnerHTML={{ __html: processCitedText("<strong>Total Cash Outlay for Two Premium Economy Tickets:</strong> $800 + $95 = <strong>$895</strong> (plus the 80,000 Avios used).") }}></li>
                    </ul>
                    <p dangerouslySetInnerHTML={{ __html: processCitedText("This example demonstrates how combining the welcome bonus, spending rewards, Travel Together Ticket, and Reward Flight Statement Credits can lead to significant savings on premium travel, making a trip like Taylor's much more attainable.") }}></p>
                </section>

                <section id="section-competitors" className={styles.reviewSection}>
                    <h2 dangerouslySetInnerHTML={{ __html: processCitedText(tocSections.find(s=>s.id==='section-competitors').title) }}></h2>
                    <p dangerouslySetInnerHTML={{ __html: processCitedText("How does the British Airways Visa Signature® Card stack up against other popular travel rewards cards, particularly those with similar annual fees?") }}></p>
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
                                    <tr>
                                        <td data-label="Feature"><strong>Annual Fee</strong></td>
                                        <td data-label="British Airways Visa Signature®">$95</td>
                                        <td data-label="Chase Sapphire Preferred®">$95</td>
                                        <td data-label="American Express® Gold">$250 (See Rates & Fees)</td>
                                        <td data-label="Citi Strata Premier℠">$95</td>
                                        <td data-label="Alaska Airlines Visa Signature®">$95</td>
                                    </tr>
                                    <tr>
                                        <td data-label="Feature"><strong>Sign-up Bonus (Example)</strong></td>
                                        <td data-label="British Airways Visa Signature®">75,000 Avios</td>
                                        <td data-label="Chase Sapphire Preferred®">60,000 Chase Ultimate Rewards® points</td>
                                        <td data-label="American Express® Gold">60,000 Amex Membership Rewards® points</td>
                                        <td data-label="Citi Strata Premier℠">70,000 Citi ThankYou® Points</td>
                                        <td data-label="Alaska Airlines Visa Signature®">60,000 Alaska Miles + Companion Fare™</td>
                                    </tr>
                                    <tr>
                                        <td data-label="Feature"><strong>Top Earning Categories</strong></td>
                                        <td data-label="British Airways Visa Signature®">3x Avios on BA group airlines</td>
                                        <td data-label="Chase Sapphire Preferred®">5x on travel via Chase Travel℠; 3x on dining, online groceries, select streaming</td>
                                        <td data-label="American Express® Gold">4x at restaurants worldwide & U.S. supermarkets (on up to $25K/yr in purchases, then 1x)</td>
                                        <td data-label="Citi Strata Premier℠">3x on air travel, hotels, restaurants, supermarkets, gas stations</td>
                                        <td data-label="Alaska Airlines Visa Signature®">3x miles on eligible Alaska Airlines purchases</td>
                                    </tr>
                                    <tr>
                                        <td data-label="Feature"><strong>Rewards Value Focus</strong></td>
                                        <td data-label="British Airways Visa Signature®">Strong for BA premium cabin redemptions & oneworld® partners</td>
                                        <td data-label="Chase Sapphire Preferred®">High flexibility via Chase Travel℠ portal & airline/hotel transfer partners</td>
                                        <td data-label="American Express® Gold">High flexibility via Amex Travel & airline/hotel transfer partners; dining/travel credits</td>
                                        <td data-label="Citi Strata Premier℠">Good flexibility with travel partners & broad earning categories</td>
                                        <td data-label="Alaska Airlines Visa Signature®">Strong for Alaska Airlines & oneworld® partner redemptions; valuable Companion Fare™</td>
                                    </tr>
                                    <tr>
                                        <td data-label="Feature"><strong>Key Travel Perk</strong></td>
                                        <td data-label="British Airways Visa Signature®">Travel Together Ticket; $600 Reward Flight Credits; 10% BA flight discount</td>
                                        <td data-label="Chase Sapphire Preferred®">$50 Annual Hotel Credit via Chase Travel℠</td>
                                        <td data-label="American Express® Gold">Up to $120 Uber Cash ($10/mo); Up to $120 Dining Credit ($10/mo) (enrollment required)</td>
                                        <td data-label="Citi Strata Premier℠">$100 Annual Hotel Savings Benefit on single hotel stay of $500+ (excl. taxes/fees) booked via thankyou.com</td>
                                        <td data-label="Alaska Airlines Visa Signature®">Annual Companion Fare™ from $122 ($99 fare + taxes/fees from $23); Free checked bag</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </DraggableTableWrapper>
                    <h3 className={styles.subHeading}>Discussion:</h3>
                    <p dangerouslySetInnerHTML={{ __html: processCitedText("The British Airways Visa Signature® Card clearly excels with its BA-specific benefits like the Travel Together Ticket and Reward Flight Credits. If you are a loyal BA flyer, these perks can be invaluable. However, if broader flexibility is your aim, the <strong>Chase Sapphire Preferred® Card </strong> offers excellent value with its versatile Ultimate Rewards points and strong travel/dining multipliers. The <strong>American Express® Gold Card </strong>, despite its higher annual fee, is a powerhouse for dining and U.S. supermarket spending, with valuable statement credits that can offset the fee. The <strong>Citi Strata Premier℠ Card </strong> offers broad 3x earning categories, making it a good all-around travel card. The <strong>Alaska Airlines Visa Signature® Card </strong> is a strong competitor for West Coast travelers or those who frequently fly Alaska and its partners, primarily due to its coveted annual Companion Fare™ and free checked bag benefit. Your choice ultimately depends on your specific travel patterns, airline loyalties, and which card’s rewards structure and perks you value most.") }}></p>
                </section>

                <section id="section-user-profiling" className={styles.reviewSection}>
                    <h2 dangerouslySetInnerHTML={{ __html: processCitedText(tocSections.find(s=>s.id==='section-user-profiling').title) }}></h2>
                    <p dangerouslySetInnerHTML={{ __html: processCitedText("The British Airways Visa Signature® Card isn't a one-size-fits-all solution. It’s tailored to a specific type of traveler. Let's see if it aligns with your profile:") }}></p>
                    <h3 className={styles.subHeading}>This Card is Likely Perfect For You If:</h3>
                    <ul className={styles.featureList}>
                        <li dangerouslySetInnerHTML={{ __html: processCitedText("You frequently fly British Airways or its oneworld® alliance partners, especially for transatlantic routes (to maximize the 3x Avios on BA group airlines ).") }}></li>
                        <li dangerouslySetInnerHTML={{ __html: processCitedText("You can comfortably spend $30,000 or more on the card annually to earn the highly valuable Travel Together Ticket .") }}></li>
                        <li dangerouslySetInnerHTML={{ __html: processCitedText("You often travel to or through London, allowing you to make full use of the up to $600 in Reward Flight Statement Credits .") }}></li>
                        <li dangerouslySetInnerHTML={{ __html: processCitedText("You aim for premium cabin travel (Business or First Class), where the Travel Together Ticket and Avios redemptions offer the most significant monetary savings.") }}></li>
                        <li dangerouslySetInnerHTML={{ __html: processCitedText("You are an Avios-savvy collector who understands how to navigate the British Airways Executive Club program for partner awards and can strategically use the 10% flight discount .") }}></li>
                        <li dangerouslySetInnerHTML={{ __html: processCitedText("You value having no foreign transaction fees for your international spending .") }}></li>
                    </ul>
                    <h3 className={styles.subHeading}>This Card Might Not Be the Best Fit If:</h3>
                    <ul className={styles.featureList}>
                        <li dangerouslySetInnerHTML={{ __html: processCitedText("You prioritize maximum points flexibility and want to transfer rewards to a wide variety of unrelated airline and hotel programs.") }}></li>
                        <li dangerouslySetInnerHTML={{ __html: processCitedText("You cannot realistically meet the $30,000 annual spending requirement to earn the Travel Together Ticket .") }}></li>
                        <li dangerouslySetInnerHTML={{ __html: processCitedText("You are highly averse to paying any airline surcharges on award tickets, even if statement credits can partially offset them.") }}></li>
                        <li dangerouslySetInnerHTML={{ __html: processCitedText("You rarely fly British Airways or its oneworld® partners, or your travel is primarily domestic within the U.S. on other carriers.") }}></li>
                        <li dangerouslySetInnerHTML={{ __html: processCitedText("You need general travel perks like free checked bags on domestic U.S. airlines or broad annual travel credits as a direct card benefit (this card's credits are specific to BA reward flights to London).") }}></li>
                        <li dangerouslySetInnerHTML={{ __html: processCitedText("Your primary goal is earning the highest possible flat rate on all everyday spending, and you don't fly BA often enough for the 3x bonus to be a major factor.") }}></li>
                    </ul>
                    <p dangerouslySetInnerHTML={{ __html: processCitedText("Carefully weigh these factors against your personal travel habits and spending patterns to determine if the British Airways Visa Signature® Card is the ideal match for your wallet.") }}></p>
                </section>

                <section id="section-user-testimonials" className={styles.reviewSection}>
                  <h2 dangerouslySetInnerHTML={{ __html: processCitedText(tocSections.find(s=>s.id==='section-user-testimonials').title) }}></h2>
                  <p>While individual experiences vary, here are some illustrative scenarios based on common card uses and feedback we often see from the travel community:</p>
                  <div className={styles.testimonialContainer}>
                    <div className={styles.testimonialItem}>
                      <Image src="/testimonial-sarah.jpg" alt="Sarah, a business traveler" width={80} height={80} className={styles.testimonialImage} /> {/* Placeholder image */}
                      <blockquote className={styles.testimonialQuote}>
                        <p>"The 10% BA flight discount  saves my company a fair bit on my regular trips to the London office, and the 3x Avios  I earn on those work-funded flights really boost my personal holiday fund for exploring Europe!"</p>
                        <footer>- Sarah, Transatlantic Business Commuter</footer>
                      </blockquote>
                      <div className={styles.testimonialSummary}>
                        <strong>Profile:</strong> Regular BA business traveler. <strong>Summary:</strong> Values the direct cash savings from the flight discount and the accelerated Avios accumulation on business expenses.
                      </div>
                    </div>
                    <div className={styles.testimonialItem}>
                      <Image src="/testimonial-david-lisa.jpg" alt="David & Lisa, a couple" width={80} height={80} className={styles.testimonialImage} /> {/* Placeholder image */}
                      <blockquote className={styles.testimonialQuote}>
                        <p>"Hitting the $30K spend for the Travel Together Ticket  was our goal last year. It let us fly Business Class to Italy via London for our anniversary – my wife only had to pay the taxes and fees on her ticket. The Avios saving was incredible!"</p>
                        <footer>- David & Lisa, Anniversary Trip Planners</footer>
                      </blockquote>
                      <div className={styles.testimonialSummary}>
                        <strong>Profile:</strong> Couple targeting a luxury redemption, able to meet high spend. <strong>Summary:</strong> Successfully leveraged the Travel Together Ticket for a high-value premium cabin experience.
                      </div>
                    </div>
                    <div className={styles.testimonialItem}>
                      <Image src="/testimonial-maria.jpg" alt="Maria, a points strategist" width={80} height={80} className={styles.testimonialImage} /> {/* Placeholder image */}
                      <blockquote className={styles.testimonialQuote}>
                        <p>"I actually love using Avios for short-haul American Airlines flights in the U.S. where they offer great value . The BA card helps me top up my Avios balance, and the Reward Flight Credits  are useful when I do fly BA to visit family in the UK."</p>
                        <footer>- Maria, Points & Miles Strategist</footer>
                      </blockquote>
                      <div className={styles.testimonialSummary}>
                        <strong>Profile:</strong> Understands Avios valuations and partner awards. <strong>Summary:</strong> Values the card for accumulating Avios for partner redemptions and appreciates the surcharge offsets for occasional BA flights.
                      </div>
                    </div>
                     <div className={styles.testimonialItem}>
                      <Image src="/testimonial-tom.jpg" alt="Tom, a frequent hotel booker" width={80} height={80} className={styles.testimonialImage} /> {/* Placeholder image */}
                      <blockquote className={styles.testimonialQuote}>
                        <p>"Earning 2 Avios per dollar on my direct hotel bookings with the BA card  is a nice little extra on top of my hotel loyalty points. It all adds up for future flight redemptions."</p>
                        <footer>- Tom, Savvy Hotel Booker</footer>
                      </blockquote>
                      <div className={styles.testimonialSummary}>
                        <strong>Profile:</strong> Frequent traveler who books hotels directly. <strong>Summary:</strong> Benefits from the bonus Avios category for hotel stays, complementing other loyalty earnings.
                      </div>
                    </div>
                     <div className={styles.testimonialItem}>
                      <Image src="/testimonial-priya.jpg" alt="Priya, an occasional UK visitor" width={80} height={80} className={styles.testimonialImage} /> {/* Placeholder image */}
                      <blockquote className={styles.testimonialQuote}>
                        <p>"The welcome bonus  was the main draw for me. Now, the 10% flight discount  or the Reward Flight Credits  make my occasional visits to the UK more affordable. And no foreign transaction fees  is absolutely key when I'm there!"</p>
                        <footer>- Priya, Occasional UK Visitor</footer>
                      </blockquote>
                      <div className={styles.testimonialSummary}>
                        <strong>Profile:</strong> Periodic UK traveler. <strong>Summary:</strong> Appreciates the initial bonus and ongoing cost-saving perks for important trips, plus the practical benefit of no foreign fees.
                      </div>
                    </div>
                  </div>
                </section>

                <section id="section-managing-card" className={styles.reviewSection}>
                  <h2 dangerouslySetInnerHTML={{ __html: processCitedText(tocSections.find(s=>s.id==='section-managing-card').title) }}></h2>
                  <p dangerouslySetInnerHTML={{ __html: processCitedText("The British Airways Visa Signature® Card is issued by Chase, which provides a robust suite of digital tools and customer support options for managing your account effectively.") }}></p>
                  <h3 className={styles.subHeading}>Digital Account Management Tools:</h3>
                  <ul className={styles.featureList}>
                    <li dangerouslySetInnerHTML={{ __html: processCitedText("<strong>Chase Online℠ and Chase Mobile® App:</strong> Cardmembers have access to Chase's comprehensive online portal and mobile app. Through these platforms, you can view your account activity and statements, track and manage your Avios rewards, make payments, set up account alerts, lock/unlock your card, and more .") }}></li>
                    <li dangerouslySetInnerHTML={{ __html: processCitedText("<strong>Account Alerts:</strong> Chase offers customizable alerts for various account activities, such as transaction notifications, payment due reminders, and notifications if you're approaching your credit limit. These can help you stay on top of your account and manage your spending.") }}></li>
                  </ul>
                  <h3 className={styles.subHeading}>Customer Service & Support:</h3>
                  <ul className={styles.featureList}>
                    <li dangerouslySetInnerHTML={{ __html: processCitedText("<strong>Chase Customer Support:</strong> Support for card-related inquiries (e.g., billing, payments, technical issues with your Chase account) is available via phone and secure online messaging through your Chase account.") }}></li>
                    <li dangerouslySetInnerHTML={{ __html: processCitedText("<strong>British Airways Executive Club Support:</strong> For questions specifically about your Avios, the British Airways Executive Club program, reward flight bookings, or the Travel Together Ticket, you would typically contact British Airways directly .") }}></li>
                    <li dangerouslySetInnerHTML={{ __html: processCitedText("<strong>Chase Credit Journey®:</strong> Chase also provides cardmembers with free access to Credit Journey®, a tool that allows you to monitor your credit score, get insights into factors affecting your credit, and receive alerts about important changes to your credit report.") }}></li>
                  </ul>
                  <p dangerouslySetInnerHTML={{ __html: processCitedText("Having reliable digital tools and accessible customer support is crucial for a positive cardholder experience, and Chase generally provides a good standard in these areas.") }}></p>
                </section>

                <section id="section-final-verdict" className={styles.reviewSection}>
                  <h2 dangerouslySetInnerHTML={{ __html: processCitedText(tocSections.find(s=>s.id==='section-final-verdict').title) }}></h2>
                  <p dangerouslySetInnerHTML={{ __html: processCitedText("The British Airways Visa Signature® Card from Chase presents a compelling, albeit specific, value proposition for U.S.-based travelers who frequently fly with British Airways or its oneworld® partners. It's a card that truly rewards loyalty and strategic use of its benefits.") }}></p>
                  <h3 className={styles.subHeading}>Strongest Selling Points:</h3>
                  <p dangerouslySetInnerHTML={{ __html: processCitedText("The standout benefits are undoubtedly the <strong>Travel Together Ticket</strong> (earned after a $30,000 annual spend ), which can offer massive savings, especially on premium cabin redemptions. The potential to receive up to <strong>$600 annually in Reward Flight Statement Credits</strong>  significantly mitigates the impact of British Airways' notorious surcharges on reward flights to London. Furthermore, the straightforward <strong>10% discount on BA cash fares</strong> originating in the U.S.  can provide immediate and recurring value. For those who consistently fly BA or its IAG airline partners, earning <strong>3 Avios per $1 spent</strong> on these flights  is a solid accelerator for reward travel.") }}></p>
                  <h3 className={styles.subHeading}>Important Considerations:</h3>
                  <p dangerouslySetInnerHTML={{ __html: processCitedText("However, the $30,000 annual spend required for the Travel Together Ticket is a high threshold that won't be feasible for everyone. While the statement credits are valuable, BA's award surcharges can still be substantial, particularly for premium cabins. Compared to general travel rewards cards, the British Airways Visa Signature® Card offers less flexibility in reward redemption and lacks certain common perks like free checked bags on domestic U.S. flights as a direct card benefit (though some oneworld elite statuses earned separately may offer this).") }}></p>
                  <h3 className={styles.subHeading}>Our Recommendation:</h3>
                  <p dangerouslySetInnerHTML={{ __html: processCitedText("The $95 annual fee  is, in our expert opinion, justified if you align with the following profile:") }}></p>
                  <ul className={styles.featureList}>
                      <li dangerouslySetInnerHTML={{ __html: processCitedText("You consistently fly British Airways or its key airline partners.") }}></li>
                      <li dangerouslySetInnerHTML={{ __html: processCitedText("You can realistically and comfortably spend $30,000 or more annually on the card to earn the Travel Together Ticket.") }}></li>
                      <li dangerouslySetInnerHTML={{ __html: processCitedText("You frequently redeem Avios for flights to or through London, allowing you to maximize the Reward Flight Statement Credits.") }}></li>
                      <li dangerouslySetInnerHTML={{ __html: processCitedText("You regularly purchase cash fares on British Airways from the U.S., making the 10% discount a tangible saving.") }}></li>
                  </ul>
                  <p dangerouslySetInnerHTML={{ __html: processCitedText("For travelers who don't fit this mold, a more general travel rewards card that offers broader earning categories, more flexible redemption options, or different types of travel perks might provide better overall value. The British Airways Visa Signature® Card is undeniably a specialist card; its true power is unlocked through active engagement with British Airways' loyalty program and strategic use of its unique, high-value benefits.") }}></p>
                </section>
                
                <section id="section-faqs-jump" className={`${styles.reviewSection} ${styles.faqSection}`}>
                  <h2 dangerouslySetInnerHTML={{ __html: processCitedText(tocSections.find(s=>s.id==='section-faqs-jump').title) }}></h2>
                  <p>Here are answers to some of the most common questions we receive about the British Airways Visa Signature® Card:</p>
                  <div className={styles.faqContainer}>
                      {faqsContent.map((faq, index) => (
                          <details key={index} className={styles.faqItem} name={`faq-${index + 1}`}>
                              <summary className={styles.faqQuestion}>{`${index + 1}. ${faq.q}`}</summary>
                              <div className={styles.faqAnswer}>
                                <p dangerouslySetInnerHTML={{ __html: processCitedText(faq.a) }} />
                              </div>
                          </details>
                      ))}
                  </div>
                </section>

                <section id="section-next-steps" className={styles.reviewSection}>
                  <h2 dangerouslySetInnerHTML={{ __html: processCitedText(tocSections.find(s=>s.id==='section-next-steps').title) }}></h2>
                  <p dangerouslySetInnerHTML={{ __html: processCitedText("If the unique suite of offerings from the British Airways Visa Signature® Card – particularly the Travel Together Ticket , up to $600 in Reward Flight Statement Credits , the valuable 10% discount on BA flights , and solid Avios earning potential  – resonates with your travel style and spending habits, then this card could indeed be a powerful asset in your wallet. The prospect of a generous welcome bonus, such as 75,000 Avios , provides a strong initial incentive to begin your journey towards enhanced British Airways travel experiences.") }}></p>
                  <p dangerouslySetInnerHTML={{ __html: processCitedText("If you believe this card is the right fit, applying for it might be your logical next step to unlock these benefits. You can typically find the most current offer and apply directly on the <a href='"+reviewData.applyLink+"' target='_blank' rel='noopener noreferrer sponsored'>official Chase British Airways Visa Signature® Card page </a>.") }}></p>
                  <p dangerouslySetInnerHTML={{ __html: processCitedText("However, if you're still undecided, require greater flexibility in your rewards, or are looking for a different set of travel perks, we encourage you to explore further. Here at <strong>" + siteName + "</strong>, we have a wealth of <Link href='/reviews' legacyBehavior><a>credit card reviews</a></Link> and comparison tools to help you identify the travel card that perfectly aligns with your individual needs and travel aspirations. Making an informed decision is key to maximizing your rewards and travel enjoyment.") }}></p>
                </section>

                <section id="section-eat" className={`${styles.reviewSection} ${styles.eatSection}`}>
                    <h2 dangerouslySetInnerHTML={{ __html: processCitedText(tocSections.find(s=>s.id==='section-eat').title) }}></h2>
                    <p dangerouslySetInnerHTML={{ __html: processCitedText("At <strong>" + siteName + "</strong>, we are committed to upholding the highest standards of Expertise, Authoritativeness, and Trustworthiness (E-A-T) in all our content. This review of the <strong>" + reviewData.cardName + "</strong> has been meticulously researched, written, and fact-checked by our team of credit card specialists. We delve deep into the card's features, benefits, rewards structure, and associated fees, cross-referencing information with official issuer documentation from Chase  and British Airways [CITE:2, 3, 4]. We also analyze real-world user experiences and data points from the broader travel rewards community to provide a comprehensive and balanced perspective. Our primary objective is to empower you with a reliable, thorough, and unbiased guide, enabling you to make an informed decision that aligns with your financial goals and travel preferences. All information presented in this review is current as of <strong>" + new Date(updateDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) + "</strong>. However, credit card terms, offers, and benefits can change, so we always recommend verifying specific details directly with the card issuer before applying.") }}></p>
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
            <Image src={reviewData.imageUrl} alt={`${reviewData.cardShortName} card image`} width={60} height={38} className={styles.stickyFooterCardImage} /> {/* Adjust dimensions if needed */}
            <div className={styles.stickyFooterText}>
              <span className={styles.stickyFooterCardName}>{reviewData.cardShortName}</span>
              <span className={styles.stickyFooterRating}>{siteName} Rating: {reviewData.ratingValue.toFixed(1)}/10</span>
            </div>
            <div className={styles.stickyFooterButtons}>
                <a href={reviewData.applyLink} className={`${styles.stickyFooterBtn} ${styles.stickyFooterBtnApply}`}
                   target="_blank" rel="noopener noreferrer sponsored">
                    Apply Now
                </a>
                <a href={reviewData.ratesFeesLink} className={`${styles.stickyFooterBtn} ${styles.stickyFooterBtnRates}`}
                   target="_blank" rel="noopener noreferrer sponsored">
                    See Rates & Fees
                </a>
            </div>
        </div>
      </div>
    </div>
  );
}

export default BritishAirwaysVisaSignatureReviewPage;