/* ------------------------------------------------------------------
    File:  pages/reviews/capital-one-venture-x-business-review.js
    Route: https://www.travelcardinsider.com/reviews/capital-one-venture-x-business-review
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
const siteName = 'TravelCardInsider';
const siteUrl = 'https://www.travelcardinsider.com';
const pagePath = '/reviews/capital-one-venture-x-business-review';
const pageUrlFull = `${siteUrl}${pagePath}`;
const publishDate = '2025-06-12';
const updateDate = '2025-06-12';

const reviewData = {
  cardName        : 'Capital One Venture X Business',
  cardShortName   : 'Venture X Business',
  title           : 'Capital One Venture X Business Review (2025)',
  description     : 'In-depth 2025 review of the Capital One Venture X Business card. We analyze its 2X miles, 150k bonus, $300 travel credit, lounge access, and value for high-spending businesses.',
  keywords        : 'Capital One Venture X Business review, premium business travel card, 2X miles, $300 travel credit, airport lounge access, Capital One business cards 2025',
  author: {
      name: 'Dilan Madushanka',
      title: 'Founder & Lead Editor',
      imageUrl: '/WhatsApp Image 2025-05-12 at 4.09.58 PM.jpeg', // **ACTION**: Use your actual image path
      imageWidth: 40,
      imageHeight: 40,
      tooltipImageUrl: '/WhatsApp Image 2025-05-12 at 4.09.58 PM.jpeg', // **ACTION**: Use your actual image path
      tooltipImageWidth: 60,
      tooltipImageHeight: 60,
      expertise: [
          'Premium Business Travel',
          'Flat-Rate Miles Cards',
          'Airline & Hotel Transfer Partners',
          'Small Business Expense Management',
          'Travel Perks & Benefits Analysis'
      ],
      bioSnippet: 'Dilan Madushanka, founder of TravelCardInsider, specializes in breaking down travel rewards programs to help business owners maximize every dollar spent.',
      fullBioLink: '/author/dilan-madushanka',
      socialLinks: {
          twitter: 'https://twitter.com/YourTravelCardInsiderTwitterHandle', // **ACTION**: Update URL
          instagram: 'https://www.instagram.com/YourTravelCardInsiderInstaHandle', // **ACTION**: Update URL
          facebook: 'https://www.facebook.com/YourTravelCardInsiderFacebookPage', // **ACTION**: Update URL
          linkedin: 'https://www.linkedin.com/in/dilan-madushanka-b65293365', // **ACTION**: Update URL
          email: 'team@travelcardinsider.com' // **ACTION**: Update Email
      }
  },
  siteName: siteName,
  imageUrl        : '/venture-x-business-card-hero.avif', // **ACTION**: Replace with your actual card image path
  imageWidth      : 1290,
  imageHeight     : 812,
  ratingValue     : 9.2,
  ratingCount     : 188,
  reviewBody      : 'A comprehensive expert analysis of the Capital One Venture X Business card, covering its powerful 2X earning rate, 10X travel portal bonus, flexible redemption options including airline transfer partners, $300 travel credit, airport lounge access, and overall value proposition for businesses.',
  aprRange        : 'N/A (Pay-in-full card)',
  annualFee       : 395,
  applyLink       : 'https://www.capitalone.com/small-business/credit-cards/venture-x-business/',
  ratesFeesLink   : 'https://www.capitalone.com/small-business/credit-cards/venture-x-business/',
  urls: {
      offerDetails: 'https://thepointsguy.com/credit-cards/capital-one/venture-x-business-card/',
      rewardsProgram: 'https://www.capitalone.com/small-business/credit-cards/venture-x-business/',
      cardholderAgreement: 'https://www.capitalone.com/credit-cards/lp/credit-card-agreements/',
      travelPortalBenefits: 'https://www.capitalone.com/help-center/capital-one-travel/learn-about-capital-one-travel-benefits/',
      rewardsRedemption: 'https://www.capitalone.com/help-center/credit-cards/manage-your-rewards/',
      transferPartners: 'https://frequentmiler.com/capital-one-miles-transfer-partners/',
      loungeAccess: 'https://thepointsguy.com/guide/capital-one-lounges/',
      benefitsGuide: 'https://www.capitalone.com/small-business/credit-cards/venture-x-business/benefits-guide/',
      accountManagement: 'https://www.capitalone.com/small-business/bank/services/online-banking/',
      amexPlatinum: 'https://www.americanexpress.com/us/credit-cards/business/business-platinum-card/',
      chaseInkPreferred: 'https://creditcards.chase.com/business-credit-cards/ink/preferred',
      sparkCashPlus: 'https://www.capitalone.com/small-business/credit-cards/spark-cash-plus/',
  },
  sku             : 'CAP1-VENTUREXBIZ-TCI-2025',
  mpn             : 'CAP1VENTUREXBIZ',
  h1Content       : "Capital One Venture X Business Review: Is It the Ultimate Travel Card?",
  heroSubtitle    : "Our 2025 analysis shows how the Venture X Business card's premium perks, 2X miles, and $400 in annual credits create unmatched value for traveling entrepreneurs."
};

const faqsContent = [
    { q: 'Is the $395 annual fee worth it?', a: 'For most businesses that travel, yes. The $300 annual travel credit and 10,000 anniversary miles provide a direct return of $400 in value each year, effectively paying you to hold the card.' },
    { q: 'Is this a charge card or a credit card?', a: 'It is a pay-in-full card, often called a charge card. This means you are generally required to pay your balance in full each month. This structure helps avoid interest charges but is not suitable for carrying a balance.' },
    { q: 'How hard is it to use the $300 travel credit?', a: `It's incredibly simple. The credit is automatically applied to any travel booking (flights, hotels, rental cars) you make through the Capital One Travel portal. <a href="${reviewData.urls.travelPortalBenefits}" target="_blank" rel="noopener noreferrer sponsored" class="${styles.inlineLink}">(Source)</a>` },
    { q: 'Can I add employee cards?', a: `Yes, you can add employee cards for free. A key benefit is that you will earn miles on all of their business spending. <a href="${reviewData.urls.accountManagement}" target="_blank" rel="noopener noreferrer sponsored" class="${styles.inlineLink}">(Details)</a>` },
    { q: 'What credit score do I need for the Venture X Business?', a: 'You will generally need an excellent credit score to qualify, which is typically considered a FICO score of 740 or higher.' },
    { q: 'Are the miles hard to redeem?', a: `No, they are very flexible. You can easily redeem them at a value of 1 cent each as a statement credit against any travel purchase you make, or you can transfer them to airline and hotel partners for potentially even greater value. <a href="${reviewData.urls.rewardsRedemption}" target="_blank" rel="noopener noreferrer sponsored" class="${styles.inlineLink}">(Learn More)</a>` },
    { q: 'Is the airport lounge access really unlimited?', a: `Yes, your access is complimentary and unlimited for yourself and up to two guests at Capital One Lounges and participating Priority Pass lounges worldwide. <a href="${reviewData.urls.loungeAccess}" target="_blank" rel="noopener noreferrer sponsored" class="${styles.inlineLink}">(Policy Details)</a>` }
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
      brand          : { '@type': 'Brand', name: 'Capital One' },
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
            description          : `This is a pay-in-full card with no ongoing purchase APR. Foreign Transaction Fee: $0. See official ${reviewData.cardName} Rates & Fees.`,
          },
        ],
        seller: { '@type': 'Organization', name: 'Capital One' },
      },
      review: { '@id': `${pageUrlFull}#editorReview` },
    },
    {
      '@type'         : 'Review',
      '@id'           : `${pageUrlFull}#editorReview`,
      name            : `${reviewData.cardName} – Expert Review ${new Date(updateDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}`,
      itemReviewed    : { '@id': `${pageUrlFull}#product` },
      reviewBody      : reviewData.reviewBody,
      reviewRating    : {
        '@type'    : 'Rating',
        ratingValue : reviewData.ratingValue.toString(),
        bestRating  : '10',
        worstRating : '1',
        description: `${siteName} editorial rating as of ${new Date(updateDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}.`
      },
      author : { '@type': 'Person', 'name': reviewData.author.name, 'url': `${siteUrl}${reviewData.author.fullBioLink}` },
      publisher : { '@type' : 'Organization', name : siteName, logo : { '@type': 'ImageObject', url: `${siteUrl}/images/logo/your-logo-schema.png` } },
      datePublished   : publishDate,
      dateModified    : updateDate,
    },
    { '@type': 'WebPage',
      '@id'              : pageUrlFull, url : pageUrlFull, name : reviewData.title, description : reviewData.description,
      inLanguage : 'en-US', isPartOf : { '@id': `${siteUrl}#website` }, primaryImageOfPage : { '@id': `${pageUrlFull}#primaryImage` },
      breadcrumb : { '@id': `${pageUrlFull}#breadcrumbs` }, datePublished : publishDate, dateModified : updateDate,
      author: { '@type': 'Person', 'name': reviewData.author.name, 'url': `${siteUrl}${reviewData.author.fullBioLink}` },
    },
    { '@type': 'ImageObject',
      '@id'     : `${pageUrlFull}#primaryImage`, url : `${siteUrl}${reviewData.imageUrl}`,
      width : reviewData.imageWidth, height : reviewData.imageHeight, caption : reviewData.cardName,
    },
    { '@type': 'BreadcrumbList',
      '@id'          : `${pageUrlFull}#breadcrumbs`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: siteName, item: siteUrl },
        { '@type': 'ListItem', position: 2, name: 'Business Credit Card Reviews', item: `${siteUrl}/business-reviews` },
        { '@type': 'ListItem', position: 3, name: `${reviewData.cardName} Review`, item: pageUrlFull },
      ],
    },
    {
      '@type'    : 'FAQPage',
      '@id'      : `${pageUrlFull}#faqs`,
      mainEntity: faqsContent.map(faq => ({
        '@type': 'Question', name: faq.q,
        acceptedAnswer: {  '@type': 'Answer', text: faq.a.replace(/<[^>]*>/g, '') }
      })),
    },
    { '@type' : 'Organization',
      '@id'   : `${siteUrl}#website`, name : siteName, url : siteUrl,
      logo    : { '@type': 'ImageObject', url: `${siteUrl}/images/logo/your-logo-schema.png` }, // **ACTION**: Replace with your actual logo
      sameAs  : [ "https://www.facebook.com/YourTravelCardInsiderFacebookPage", "https://twitter.com/YourTravelCardInsiderTwitterHandle", "https://www.instagram.com/YourTravelCardInsiderInstaHandle" ], // **ACTION**: Replace
    },
  ],
};

const ratingCriteria = [
    'Welcome Bonus Value & Spend Requirement',
    'Base Miles Earning Rate (Unlimited 2X)',
    'Bonus Miles Rate (5X/10X via Portal)',
    'Redemption Flexibility & Transfer Partner Value',
    'Annual Credits Value ($300 Travel + 10k Miles)',
    'Airport Lounge Access Policy (Capital One + Priority Pass)',
    'Value of Core Benefits (Cell Phone Protection, etc.)',
    'Annual Fee Justification',
    'Business Management Tools',
    'Overall Value for High-Spending Businesses',
];

const tocSections = [
    { id: 'section-intro', title: '1. Why Venture X Business is More Than a Card' },
    { id: 'section-snapshot', title: '2. Card Snapshot: Venture X Business At-a-Glance' },
    { id: 'section-philosophy', title: '3. The Philosophy: Simplicity Meets Premium Travel' },
    { id: 'section-welcome-bonus', title: '4. Welcome Bonus: A Powerful Infusion of Capital' },
    { id: 'section-earning-engine', title: '5. The Rewards Engine: Earning Your Miles' },
    { id: 'section-redeeming-value', title: '6. Redeeming Miles: A World of Possibilities' },
    { id: 'section-transfer-partners', title: '7. The Art of the Transfer: Maximizing Value' },
    { id: 'section-lounge-access', title: '8. Premium Perk: Your Oasis at the Airport' },
    { id: 'section-annual-fee', title: '9. The $395 Annual Fee: Cost or Investment?' },
    { id: 'section-user-profile', title: '10. Ideal Cardholder: Who is This Card For?' },
    { id: 'section-real-world-example', title: '11. Real-World Value: A Case Study' },
    { id: 'section-competitors', title: '12. How It Compares: Venture X vs. The Titans' },
    { id: 'section-testimonials', title: '13. Real User Testimonials: Voices from the Community' },
    { id: 'section-understated-perks', title: '14. Understated Perks You Shouldn’t Ignore' },
    { id: 'section-final-verdict', title: '15. Final Verdict: The TravelCardInsider Bottom Line' },
    { id: 'section-faqs-jump', title: '16. Frequently Asked Questions' },
];

const contentImage1 = "/business-travel-planning.webp"; // **ACTION**: Replace with a relevant image
const contentImage2 = "/airport-lounge-working.webp"; // **ACTION**: Replace with a relevant image


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
    MAIN COMPONENT
    ────────────────────────────── */
function CapitalOneVentureXBusinessReviewPage() {
  const [showRatingInfo, setShowRatingInfo] = useState(false);
  const [showAuthorBioTooltip, setShowAuthorBioTooltip] = useState(false);
  const authorRef = useRef(null);
  const authorTooltipRef = useRef(null);
  const ratingTooltipRef = useRef(null);

  const handleIconClick = useCallback((event) => {
      event.preventDefault(); event.stopPropagation(); setShowRatingInfo(prevState => !prevState);
  }, []);
  const handleAuthorMouseEnter = useCallback(() => setShowAuthorBioTooltip(true), []);
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

  const summaryBoxData = {
    welcomeOffer: `Earn <a href="${reviewData.urls.offerDetails}" target="_blank" rel="noopener noreferrer sponsored">150,000 bonus miles</a> after spending $30,000 in the first 3 months.`,
    annualFee: `<a href="${reviewData.ratesFeesLink}" target="_blank" rel="noopener noreferrer sponsored">$${reviewData.annualFee}</a>.`,
    topEarning: `Unlimited 2X miles on every purchase, plus <a href="${reviewData.urls.rewardsProgram}" target="_blank" rel="noopener noreferrer sponsored">5X on flights & 10X on hotels/cars</a> via Capital One Travel.`,
    keyPerks: `<a href="${reviewData.urls.rewardsProgram}" target="_blank" rel="noopener noreferrer sponsored">$300 annual travel credit</a>, 10,000 anniversary miles, and <a href="${reviewData.urls.loungeAccess}" target="_blank" rel="noopener noreferrer sponsored">lounge access</a>.`,
    bestFor: "High-spending businesses seeking simple, premium travel rewards with perks that effectively erase the annual fee."
  };

  const keyFeaturesTableData = [
    { feature: "Annual Fee", details: `<a href="${reviewData.ratesFeesLink}" target="_blank" rel="noopener noreferrer sponsored">$395</a>` },
    { feature: "Welcome Bonus", details: `<a href="${reviewData.urls.offerDetails}" target="_blank" rel="noopener noreferrer sponsored">150,000 bonus miles</a> after a $30,000 spend in the first 3 months` },
    { feature: "Base Rewards Rate", details: "Unlimited 2X miles on every purchase, for every dollar your business spends" },
    { feature: "Bonus Rewards", details: `<a href="${reviewData.urls.rewardsProgram}" target="_blank" rel="noopener noreferrer sponsored">5X miles on flights and 10X miles</a> on hotels & rental cars booked through Capital One Travel` },
    { feature: "Key Credits", details: `$300 annual travel credit & 10,000 anniversary miles (worth $100+)` },
    { feature: "Lounge Access", details: `<a href="${reviewData.urls.loungeAccess}" target="_blank" rel="noopener noreferrer sponsored">Capital One Lounges + Priority Pass™ Select</a>` },
    { feature: "Card Type", details: "Pay-in-Full" },
  ];

  const sectionContent = {
    'section-intro': `<p>For today’s business owner, every expense is a strategic decision. Imagine transforming necessary expenditures like airfare, software subscriptions, and supplier payments into your next rewarding travel experience. This is where a premium business travel card transcends its role as mere plastic and becomes a true partner in your growth.</p><p>Enter the <strong>${reviewData.cardName}</strong>. It’s designed not just for businesses that travel, but for those that value simplicity as much as luxury. This card aims to serve entrepreneurs who seek straightforward, high-value rewards without the complex spreadsheets often required by other premium cards. This review will explore its features, dissect its value, and help you decide if it’s the genuine partner your business deserves.</p>`,
    'section-snapshot': `<p>Here’s a quick look at the core features of the ${reviewData.cardName}. Its blend of high rewards and practical benefits makes it a formidable tool for any traveling professional.</p>`,
    'section-philosophy': `<p>In a market crowded with complex rewards programs, the ${reviewData.cardName} stands out with a clear philosophy: blend the ease of a flat-rate earning structure with the tangible benefits of a premium travel card. The card’s foundational <strong>unlimited 2X miles on every purchase</strong> is refreshingly easy to track, yet it doesn’t skimp on the perks that genuinely improve the travel experience, like airport lounge access and valuable annual credits. <a href="${reviewData.urls.rewardsProgram}" target="_blank" rel="noopener noreferrer sponsored" class="${styles.inlineLink}">(Program Terms)</a></p><p>This dual appeal is the cornerstone of its design. It’s engineered to make its $395 annual fee feel less like a cost and more like a prepaid investment in travel, as the benefits are designed to return at least <strong>$400 in value each year</strong>. This strategic positioning makes it a powerful contender for businesses that demand both performance and simplicity.</p>`,
    'section-welcome-bonus': `<p>A card’s welcome offer is its first handshake, and the Venture X Business makes a strong impression. The standard bonus is <a href="${reviewData.urls.offerDetails}" target="_blank" rel="noopener noreferrer sponsored"><strong>150,000 miles after you spend $30,000 on purchases</strong> within the first three months</a> of account opening. Capital One values these miles at a straightforward <strong>$1,500 when redeemed for travel</strong>, giving you a clear and immediate return on your initial spending.</p><p>The $30,000 spending requirement is undeniably substantial and acts as a filter, positioning the card for businesses with significant and consistent cash flow. For companies that can comfortably meet this through regular operational costs—like inventory, ad campaigns, or software investments—the bonus is a massive head start.</p>`,
    'section-earning-engine': `<p>At the heart of the Venture X Business card is its refreshingly simple rewards engine: an <strong>unlimited 2X miles on every dollar you spend</strong>. There are no rotating categories to track for your everyday business purchases and no caps on how many miles you can earn. <a href="${reviewData.urls.rewardsProgram}" target="_blank" rel="noopener noreferrer sponsored" class="${styles.inlineLink}">(Rewards Page)</a></p><h3>Elevating Your Travel: The 5X and 10X Bonus Categories</h3><p>While the 2X base rate is a solid foundation, the card truly accelerates your earnings when you book through the Capital One Travel portal. This is where your rewards strategy kicks into high gear:</p><ul><li><strong>10X miles</strong> on hotels and rental cars</li><li><strong>5X miles</strong> on flights</li></ul><p>A 10X return on hotels is exceptionally competitive and can lead to a massive accumulation of miles from your business travel. To make the portal more attractive, Capital One includes features like price-drop protection and a price-match guarantee. <a href="${reviewData.urls.travelPortalBenefits}" target="_blank" rel="noopener noreferrer sponsored" class="${styles.inlineLink}">(Portal Benefits)</a></p>`,
    'section-redeeming-value': `<p>Earning miles is only half the fun; redeeming them is where the value comes home. The Venture X Business offers flexible options to suit your preferences.</p><ul><li><strong>Cover Travel Purchases:</strong> This is the simplest method. Book travel anywhere and use your miles to "erase" the purchase from your statement within 90 days at a value of 1 cent per mile. <a href="${reviewData.urls.rewardsRedemption}" target="_blank" rel="noopener noreferrer sponsored" class="${styles.inlineLink}">(Redemption Options)</a></li><li><strong>Book via Capital One Travel:</strong> Use your miles directly in the portal to book flights, hotels, and rental cars, also at a rate of 1 cent per mile.</li><li><strong>Transfer to Partners:</strong> This is where you can find incredible value by transferring miles to Capital One’s 15+ airline and hotel partners.</li><li><strong>Other Options:</strong> You can also redeem for cash back or gift cards, but the value is typically lower than travel redemptions and is generally not recommended.</li></ul>`,
    'section-transfer-partners': `<p>For those willing to do a little research, transferring Capital One miles to airline and hotel partners is the key to unlocking outsized value. Most of Capital One’s 15+ partners, which include Air Canada Aeroplan, British Airways, and Air France-KLM Flying Blue, feature a simple 1:1 transfer ratio. <a href="${reviewData.urls.transferPartners}" target="_blank" rel="noopener noreferrer sponsored" class="${styles.inlineLink}">(See Partner List)</a></p><p>Here’s a real-world example: A business-class ticket to Europe might cost $5,000 in cash or 500,000 miles through the portal. By transferring just <strong>120,000 miles</strong> to a partner like Air Canada Aeroplan, you could book that same flight on a Star Alliance partner like United or Lufthansa, more than quadrupling the value of your miles. This transforms your rewards from simple rebates into truly aspirational travel experiences.</p>`,
    'section-lounge-access': `<p>A key premium perk, airport lounge access can turn a stressful travel day into a productive and relaxing one. The Venture X Business card offers a powerful two-pronged approach:</p><ul><li><strong>Capital One Lounges:</strong> Enjoy complimentary access for yourself and two guests to the growing network of Capital One Lounges, known for their premium food and modern design.</li><li><strong>Priority Pass™ Select:</strong> This membership grants you and two guests access to over 1,300 airport lounges worldwide, ensuring you have an option in most major airports you visit. <a href="${reviewData.urls.loungeAccess}" target="_blank" rel="noopener noreferrer sponsored" class="${styles.inlineLink}">(Lounge Policy)</a></li></ul>`,
    'section-annual-fee': `<p>For the right business, the <strong>$395 annual fee</strong> on the Venture X Business card functions more like a prepaid travel investment than a sunken cost. The card’s value proposition hinges on two key benefits that, when used, provide a direct return of <strong>$400 each year</strong>.</p><ul><li><strong>$300 Annual Travel Credit:</strong> Received for bookings made through the Capital One Travel portal. For any business that spends at least this amount on travel annually, this credit is as good as cash.</li><li><strong>10,000 Anniversary Bonus Miles:</strong> Starting on your first anniversary, you receive these bonus miles every year. Valued at a minimum of $100 toward travel, this bonus brings the total direct value to $400.</li></ul><p>This means that a business actively using the card for travel effectively has its annual fee covered. This "cost-neutral" framework is a powerful part of its appeal.</p>`,
    'section-user-profile': `<p>This card shines brightest for a specific type of business. The ideal cardholder is a high-spending entrepreneur or a small to medium-sized enterprise with consistent cash flow that can handle the <strong>pay-in-full requirement</strong>.</p><p>They travel several times a year, ensuring they can easily use the $300 travel credit and benefit from lounge access. They value simplicity and appreciate earning a high, flat rate of 2X miles on all their diverse business expenses without having to track categories. This card is for the business that sees travel perks as a necessity, not just a luxury.</p>`,
    'section-real-world-example': `<p>Let's imagine "Innovate Solutions LLC," a marketing agency that spends $120,000 annually on its card. Their breakdown is:</p><ul><li>$20,000 on flights and hotels (booked via Capital One Travel)</li><li>$100,000 on other expenses (ads, software, supplies)</li></ul><p><strong>Here’s their rewards haul in Year 1:</strong></p><ul><li><strong>Welcome Bonus:</strong> 150,000 miles</li><li><strong>Rewards from Travel:</strong> ($10k flights x 5X) + ($10k hotels x 10X) = 150,000 miles</li><li><strong>Rewards from Other Spend:</strong> $100,000 x 2X = 200,000 miles</li></ul><p><strong>Total First-Year Miles: 500,000 miles</strong>. The total value is immense: <strong>$5,000</strong> from miles + <strong>$300</strong> from the travel credit. After the $395 fee, the net value is a staggering <strong>$4,905</strong>.</p>`,
    'section-competitors': `<p>No card exists in a vacuum. Here’s how the Venture X Business stacks up against the titans of the industry.</p>`,
    'section-testimonials': `<div class="${styles.testimonialContainer}"><blockquote class="${styles.testimonialQuote}"><p>"The flat 2X miles on everything is a lifesaver. I spend a ton on ads and inventory, and I don't have time to track categories. The miles add up incredibly fast."</p><footer>– Sarah, E-commerce Owner</footer></blockquote><blockquote class="${styles.testimonialQuote}"><p>"I travel constantly. The lounge access is non-negotiable, and the $300 credit and anniversary miles completely offset the annual fee. It’s a no-brainer."</p><footer>– Mark, Management Consultant</footer></blockquote><blockquote class="${styles.testimonialQuote}"><p>"We used the welcome bonus to fund our team's flights for our annual retreat. Meeting the spend threshold was easy by timing it with our quarterly tax payment."</p><footer>– Jenna, Agency Founder</footer></blockquote><blockquote class="${styles.testimonialQuote}"><p>"I love the simplicity. I book my travel through the portal to get the 10X on hotels, use the $300 credit, and the card pays for itself. So much easier than the Amex Platinum."</p><footer>– David, Tech Startup CEO</footer></blockquote></div>`,
    'section-understated-perks': `<p>Beyond the big-ticket items, the Venture X Business offers a suite of valuable protections that you can explore in the official <a href="${reviewData.urls.benefitsGuide}" target="_blank" rel="noopener noreferrer sponsored" class="${styles.inlineLink}">Guide to Benefits</a>.</p><ul><li><strong>Cell Phone Protection:</strong> Pay your wireless bill with the card and get up to $800 in coverage per claim if your phone is stolen or damaged (deductible applies).</li><li><strong>Primary Auto Rental Insurance:</strong> Can save you money and hassle when renting cars for business.</li><li><strong>Extended Warranty Protection:</strong> Doubles the manufacturer's warranty for up to one additional year on eligible purchases.</li><li><strong>Free Employee Cards:</strong> Add employees at no extra cost and earn rewards on all their business spending. <a href="${reviewData.urls.accountManagement}" target="_blank" rel="noopener noreferrer sponsored" class="${styles.inlineLink}">(Management Features)</a></li><li><strong>No Foreign Transaction Fees:</strong> A must-have for international business.</li></ul>`,
    'section-final-verdict': `<p>The <strong>${reviewData.cardName}</strong> is a formidable tool for the right kind of business. It masterfully blends straightforward, high-value rewards with the premium travel perks that truly matter, all while making its annual fee remarkably easy to justify. The simple foundation of unlimited 2X miles, supercharged by the 5X and 10X portal bonuses, creates a powerful rewards engine.</p><p>This card is tailor-made for high-spending businesses with stable cash flow that can manage a pay-in-full card. It successfully carves out a unique space, offering premium benefits with an unbeatable effective cost. If your business values simplicity, powerful rewards, and tangible travel benefits, the Venture X Business isn’t just a good choice—it’s a brilliant one.</p>`,
    'section-faqs-jump': `<p>Here are answers to the most common questions about the ${reviewData.cardName}:</p>`
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
        {reviewData.author.imageUrl && <link rel="preload" as="image" href={reviewData.author.imageUrl} />}
        {reviewData.author.tooltipImageUrl && <link rel="preload" as="image" href={reviewData.author.tooltipImageUrl} />}
        <meta property="og:type"        content="article" />
        <meta property="og:locale"      content="en_US" />
        <meta property="og:site_name"   content={siteName} />
        <meta property="og:title"       content={reviewData.title} />
        <meta property="og:description" content={reviewData.description} />
        <meta property="og:url"         content={pageUrlFull} />
        <meta property="og:image"       content={`${siteUrl}${reviewData.imageUrl}`} />
        <meta property="og:image:width" content={String(reviewData.imageWidth)} />
        <meta property="og:image:height" content={String(reviewData.imageHeight)} />
        <meta property="article:publisher" content={reviewData.author.socialLinks.facebook} />
        <meta property="article:section"       content="Business Credit Card Reviews" />
        <meta property="article:published_time" content={publishDate} />
        <meta property="article:modified_time"  content={updateDate} />
        <meta property="article:author" content={reviewData.author.name} />
        {reviewData.keywords.split(',').map(keyword => (
            <meta property="article:tag" content={keyword.trim()} key={keyword.trim()} />
        ))}
        <meta name="twitter:card"        content="summary_large_image" />
        <meta name="twitter:site" content={`@${reviewData.author.socialLinks.twitter.split('/').pop()}`} />
        <meta name="twitter:creator" content={`@${reviewData.author.socialLinks.twitter.split('/').pop()}`} />
        <meta name="twitter:title"       content={reviewData.title} />
        <meta name="twitter:description" content={reviewData.description} />
        <meta name="twitter:image"       content={`${siteUrl}${reviewData.imageUrl}`} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredDataOptimized) }} />
      </Head>

      <main>
        <div className={styles.reviewPageLayout}>
          <div className={styles.mainContentArea}>
            {/* --- Hero Section --- */}
            <section className={styles.heroSection}>
                <div className={styles.heroTextContainer}>
                    <h1 className={styles.heroTitle} dangerouslySetInnerHTML={{ __html: reviewData.h1Content }}></h1>
                     <p className={styles.reviewedByLine}>
                        Expert review by{' '}
                        <Link href={reviewData.author.fullBioLink || '#'} legacyBehavior>
                            <a className={styles.authorNameLink}>{reviewData.author.name}</a>
                        </Link>
                        . Last updated: {new Date(updateDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
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
                        <Image src={reviewData.author.imageUrl} alt={`${reviewData.author.name} headshot`} width={reviewData.author.imageWidth} height={reviewData.author.imageHeight} className={styles.authorImageSmall} priority />
                        <div className={styles.authorInfoBlock}>
                            <div className={styles.authorNameLine}><span className={styles.authorName}>{reviewData.author.name}</span></div>
                            <span className={styles.authorTitle}>{reviewData.author.title}</span>
                            {reviewData.author.socialLinks && (
                                <div className={styles.authorSocialLinks}>
                                    {reviewData.author.socialLinks.twitter && (
                                        <a href={reviewData.author.socialLinks.twitter} target="_blank" rel="noopener noreferrer me" aria-label={`${reviewData.author.name} on Twitter`} className={styles.socialIconLink}>
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-.422.724-.665 1.56-.665 2.452 0 1.697.864 3.198 2.18 4.078-.8-.025-1.555-.247-2.227-.616v.054c0 2.37 1.683 4.333 3.91 4.78-.426.116-.874.174-1.337.174-.31 0-.611-.03-.904-.085.622 1.936 2.421 3.338 4.553 3.377-1.672 1.309-3.781 2.088-6.072 2.088-.394 0-.784-.023-1.169-.069 2.16 1.389 4.723 2.202 7.482 2.202 8.979 0 13.897-7.446 13.897-13.898 0-.21 0-.42-.015-.63.953-.689 1.778-1.56 2.433-2.525z"/></svg>
                                        </a>
                                    )}
                                    {reviewData.author.socialLinks.instagram && (
                                        <a href={reviewData.author.socialLinks.instagram} target="_blank" rel="noopener noreferrer me" aria-label={`${reviewData.author.name} on Instagram`} className={styles.socialIconLink}>
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.584.069-4.85c.149-3.225 1.664-4.771 4.919-4.919 1.266-.057 1.644-.069 4.85-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.059-1.281.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.281-.058-1.689-.072-4.948-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44 1.441-.645 1.441-1.44-.645-1.44-1.441-1.44z"/></svg>
                                        </a>
                                    )}
                                    {reviewData.author.socialLinks.facebook && (
                                        <a href={reviewData.author.socialLinks.facebook} target="_blank" rel="noopener noreferrer me" aria-label={`${reviewData.author.name} on Facebook`} className={styles.socialIconLink}>
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v2.385z"/></svg>
                                        </a>
                                    )}
                                </div>
                            )}
                        </div>
                        {showAuthorBioTooltip && reviewData.author.bioSnippet && (
                            <div className={styles.authorTooltip} ref={authorTooltipRef} role="tooltip" onMouseEnter={handleAuthorClearTimeout} onMouseLeave={handleAuthorMouseLeave} onFocus={handleAuthorMouseEnter} onBlur={handleAuthorMouseLeave}>
                               <div className={styles.authorTooltipHeader}>
                                 <Image src={reviewData.author.tooltipImageUrl} alt={`${reviewData.author.name} large headshot`} width={reviewData.author.tooltipImageWidth} height={reviewData.author.tooltipImageHeight} className={styles.authorTooltipImage} />
                                 <div className={styles.authorTooltipInfo}>
                                     <span className={styles.authorTooltipName}>{reviewData.author.name}</span>
                                     <span className={styles.authorTooltipTitle}>{reviewData.author.title}</span>
                                 </div>
                               </div>
                               {reviewData.author.expertise && reviewData.author.expertise.length > 0 && (
                                 <div className={styles.authorTooltipExpertise}><strong>Expertise</strong><ul>{reviewData.author.expertise.map(area => <li key={area}>{area}</li>)}</ul></div>
                               )}
                               <p className={styles.authorTooltipBioSnippet}>{reviewData.author.bioSnippet}</p>
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
                               {reviewData.author.fullBioLink && (<Link href={reviewData.author.fullBioLink} legacyBehavior><a className={styles.authorTooltipBioLink}>See full bio</a></Link>)}
                            </div>
                        )}
                    </div>
                    <p className={styles.heroSubtitle} dangerouslySetInnerHTML={{ __html: reviewData.heroSubtitle }}></p>
                    <div className={styles.heroCtaContainer}>
                        <div>
                            <a href={reviewData.applyLink} target="_blank" rel="noopener noreferrer sponsored" className={`${styles.applyNowButton} ${styles.heroApplyButton}`}>
                                Apply Now
                            </a>
                            <span className={styles.heroApplyButtonDisclaimer}>on Capital One's official site</span>
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
                    <div className={styles.ratingDescription}><i>{reviewData.cardShortName}: A powerhouse for business travel.</i></div>
                </div>
            </section>
            
            {/* **NEW**: Hero Disclaimer Section */}
            <div className={styles.heroDisclaimer}>
                <p>We may receive a commission from our partners for products mentioned in this review, but our opinions are our own. The information provided is for informational purposes only and does not constitute financial advice. Card details, including offers and fees, are subject to change; always verify with the issuer.</p>
            </div>

            <div className={styles.reviewContainer}>
              <article>
                <header className={styles.reviewHeader}>
                    <div className={styles.summaryBox} id="summaryBoxTitle">
                        <h2 className={styles.summaryBoxTitle}>{reviewData.cardName}: Key Insights</h2>
                        <div className={styles.summaryGrid}>
                            <div className={styles.summaryItem}><span className={styles.summaryIcon}><IconGift /></span><span className={styles.summaryLabel}>Welcome Offer:</span><span className={styles.summaryValue} dangerouslySetInnerHTML={{ __html: summaryBoxData.welcomeOffer }}></span></div>
                            <div className={styles.summaryItem}><span className={styles.summaryIcon}><IconCheck /></span><span className={styles.summaryLabel}>Annual Fee:</span><span className={styles.summaryValue} dangerouslySetInnerHTML={{ __html: summaryBoxData.annualFee }}></span></div>
                            <div className={styles.summaryItem}><span className={styles.summaryIcon}><IconStar /></span><span className={styles.summaryLabel}>Top Earning:</span><span className={styles.summaryValue} dangerouslySetInnerHTML={{ __html: summaryBoxData.topEarning }}></span></div>
                            <div className={styles.summaryItem}><span className={styles.summaryIcon}><IconPlus /></span><span className={styles.summaryLabel}>Key Perks:</span><span className={styles.summaryValue} dangerouslySetInnerHTML={{ __html: summaryBoxData.keyPerks }}></span></div>
                            <div className={styles.summaryItem} data-full-width="true"><span className={styles.summaryIcon}><IconPlane /></span><span className={styles.summaryLabel}>Best For:</span><span className={styles.summaryValue} dangerouslySetInnerHTML={{ __html: summaryBoxData.bestFor }}></span></div>
                        </div>
                    </div>
                </header>

                {/* --- Main Content Sections --- */}
                {tocSections.map(section => {
                    // Manual render for sections needing special components
                    if (['section-snapshot', 'section-competitors', 'section-testimonials', 'section-final-verdict', 'section-faqs-jump'].includes(section.id)) {
                        return null;
                    }

                    return (
                        <React.Fragment key={section.id}>
                            <section id={section.id} className={styles.reviewSection}>
                                <h2 dangerouslySetInnerHTML={{ __html: section.title }}></h2>
                                <div dangerouslySetInnerHTML={{ __html: (sectionContent[section.id] || '<p>Content coming soon...</p>') }} />
                            </section>
                            {section.id === 'section-transfer-partners' && contentImage1 && <Image src={contentImage1} alt="Business professional planning travel rewards on a laptop" width={800} height={450} className={styles.contentImage} loading="lazy" />}
                            {section.id === 'section-lounge-access' && contentImage2 && <Image src={contentImage2} alt="Business traveler working comfortably in an airport lounge" width={800} height={450} className={styles.contentImage} loading="lazy" />}
                        </React.Fragment>
                    );
                })}

                {/* Manually render special sections in correct order */}
                <section id="section-snapshot" className={styles.reviewSection}>
                    <h2 dangerouslySetInnerHTML={{ __html: tocSections.find(s => s.id === 'section-snapshot').title }}></h2>
                    <div dangerouslySetInnerHTML={{ __html: sectionContent['section-snapshot'] }} />
                    <DraggableTableWrapper>
                        <div className={styles.tableContainer}>
                            <table className={`${styles.statsTable} ${styles.highlightTable}`}>
                                <thead><tr><th>Feature</th><th>Details</th></tr></thead>
                                <tbody>
                                    {keyFeaturesTableData.map((item, index) => (
                                        <tr key={index}><td data-label="Feature" dangerouslySetInnerHTML={{ __html: item.feature }}></td><td data-label="Details" dangerouslySetInnerHTML={{ __html: item.details }}></td></tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </DraggableTableWrapper>
                </section>

                <section id="section-competitors" className={styles.reviewSection}>
                    <h2 dangerouslySetInnerHTML={{ __html: tocSections.find(s => s.id === 'section-competitors').title }}></h2>
                    <div dangerouslySetInnerHTML={{ __html: sectionContent['section-competitors'] }} />
                    <DraggableTableWrapper>
                        <div className={styles.tableContainer}>
                            <table className={`${styles.statsTable} ${styles.comparisonTable}`}>
                                <thead>
                                    <tr>
                                        <th>Feature</th>
                                        <th>Capital One Venture X Business</th>
                                        <th>Amex Business Platinum®</th>
                                        <th>Chase Ink Business Preferred®</th>
                                        <th>Capital One Spark Cash Plus</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr><td data-label="Feature"><strong>Annual Fee</strong></td><td data-label="Venture X Business">$395</td><td data-label="Amex Business Platinum">$695</td><td data-label="Chase Ink Preferred">$95</td><td data-label="Spark Cash Plus">$150</td></tr>
                                    <tr><td data-label="Feature"><strong>Base Rewards</strong></td><td data-label="Venture X Business">2X Miles</td><td data-label="Amex Business Platinum">1X Points</td><td data-label="Chase Ink Preferred">1X Points</td><td data-label="Spark Cash Plus">2% Cash Back</td></tr>
                                    <tr><td data-label="Feature"><strong>Key Credits</strong></td><td data-label="Venture X Business">$300 Travel + 10k Miles</td><td data-label="Amex Business Platinum">$200 Airline Fee, Dell, etc.</td><td data-label="Chase Ink Preferred">None</td><td data-label="Spark Cash Plus">Annual Fee Refund</td></tr>
                                    <tr><td data-label="Feature"><strong>Lounge Access</strong></td><td data-label="Venture X Business"><strong>Capital One + Priority Pass</strong></td><td data-label="Amex Business Platinum"><strong>Global Lounge Collection</strong></td><td data-label="Chase Ink Preferred">No</td><td data-label="Spark Cash Plus">No</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </DraggableTableWrapper>
                </section>

                <section id="section-testimonials" className={styles.reviewSection}>
                    <h2 dangerouslySetInnerHTML={{ __html: tocSections.find(s => s.id === 'section-testimonials').title }}></h2>
                    <div dangerouslySetInnerHTML={{ __html: sectionContent['section-testimonials'] }} />
                </section>

                <section id="section-final-verdict" className={styles.reviewSection}>
                    <h2 dangerouslySetInnerHTML={{ __html: tocSections.find(s => s.id === 'section-final-verdict').title }}></h2>
                    <div dangerouslySetInnerHTML={{ __html: sectionContent['section-final-verdict'] }} />
                    <div className={styles.ratingDescription} style={{textAlign: 'center', marginTop: '1rem'}}><strong>{siteName}.com Score: {reviewData.ratingValue}/10</strong></div>
                </section>
                
                <section className={`${styles.reviewSection} ${styles.postVerdictCtaSection}`}>
                    <h3>Ready to Elevate Your Business Travel?</h3>
                    <p>If our expert verdict on the Capital One Venture X Business aligns with your need for simple, powerful travel rewards, it's time to take the next step. Check the latest offer and see if this card is your ticket to smarter business travel.</p>
                    <div className={styles.ctaButtonContainer}>
                        <a href={reviewData.applyLink} target="_blank" rel="noopener noreferrer sponsored" className={`${styles.applyNowButton} ${styles.ctaApplyButton}`}>View Offer & Apply Now</a>
                        <span className={styles.ctaDisclaimer}>You are now leaving {siteName} for Capital One's official site.</span>
                    </div>
                </section>

                 <section id="section-faqs-jump" className={`${styles.reviewSection} ${styles.faqSection}`}>
                    <h2 dangerouslySetInnerHTML={{ __html: tocSections.find(s => s.id === 'section-faqs-jump').title }}></h2>
                    <div dangerouslySetInnerHTML={{ __html: sectionContent['section-faqs-jump'] }} />
                    <div className={styles.faqContainer}>
                        {faqsContent.map((faq, index) => (
                            <details key={index} className={styles.faqItem} name={`faq-${index + 1}`}>
                                <summary className={styles.faqQuestion}>{`${index + 1}. ${faq.q}`}</summary>
                                <div className={styles.faqAnswer}><p dangerouslySetInnerHTML={{ __html: faq.a }} /></div>
                            </details>
                        ))}
                    </div>
                </section>
              </article>
            </div>
          </div>
          <aside className={styles.sidebarArea}>
                <TableOfContents sections={tocSections} />
          </aside>
        </div>
        
        {/* **NEW**: Full-width Disclaimer at bottom of page */}
        <div className={styles.fullWidthDisclaimer}>
            <h3>Advertiser & Editorial Disclosure</h3>
            <p>DISCLAIMER: TravelCardInsider is an independent, advertising-supported comparison service. The card offers that appear on this site are from companies from which TravelCardInsider receives compensation. This compensation may impact how and where products appear on this site (including, for example, the order in which they appear). This site does not include all credit card companies or all available credit card offers. Please view our advertising policy page for more information.</p>
            <p>Editorial Note: The opinions expressed here are the author's alone, not those of any bank, credit card issuer, airline or hotel chain, and have not been reviewed, approved or otherwise endorsed by any of these entities.</p>
        </div>

      

      </main>
      
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

export default CapitalOneVentureXBusinessReviewPage;