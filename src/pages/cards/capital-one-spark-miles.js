/* ------------------------------------------------------------------
    File:  pages/reviews/capital-one-spark-miles-review.js
    Route: https://www.travelcardinsider.com/reviews/capital-one-spark-miles-review
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
const pagePath = '/reviews/capital-one-spark-miles-review';
const pageUrlFull = `${siteUrl}${pagePath}`;
const publishDate = '2025-06-12';
const updateDate = '2025-06-12';

const reviewData = {
  cardName        : 'Capital One Spark Miles for Business',
  cardShortName   : 'Spark Miles for Business',
  title           : 'Capital One Spark Miles for Business Review (2025)',
  description     : 'In-depth 2025 review of the Capital One Spark Miles for Business card. We analyze its 2X miles, 50k bonus, Global Entry credit, and travel benefits for entrepreneurs.',
  keywords        : 'Capital One Spark Miles for Business review, business travel credit card, 2X miles, Global Entry credit, no foreign transaction fee business card, Capital One business cards 2025',
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
          'Business Travel Rewards',
          'Flat-Rate Miles Cards',
          'Airline & Hotel Transfer Partners',
          'Small Business Expense Management',
          'Travel Perks & Benefits Analysis'
      ],
      bioSnippet: 'Dilan Madushanka, founder of TravelCardInsider, specializes in breaking down travel rewards programs to help business owners maximize every dollar spent.',
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
  imageUrl        : '/spark_miles_card_art.png', // **ACTION**: Replace with your actual card image path
  imageWidth      : 1290,
  imageHeight     : 812,
  ratingValue     : 8.8,
  ratingCount     : 215,
  reviewBody      : 'A comprehensive expert analysis of the Capital One Spark Miles for Business card, covering its powerful 2X earning rate, 5X travel portal bonus, flexible redemption options including airline transfer partners, Global Entry credit, and tools for business expense management.',
  aprRange        : '25.99% (Variable)',
  annualFee       : 95,
  annualFeeIntro  : 0,
  applyLink       : 'https://www.capitalone.com/small-business/credit-cards/spark-miles/',
  ratesFeesLink   : 'https://www.capitalone.com/small-business/credit-cards/spark-miles/',

  source1Url      : 'https://www.capitalone.com/small-business/credit-cards/spark-miles/',
  source1Title    : 'Capital One Spark Miles for Business Official Details',
  source2Url      : 'https://www.capitalone.com/credit-cards/rewards/',
  source2Title    : 'Capital One Rewards Redemption Options',
  source3Url      : 'https://www.capitalone.com/small-business/credit-cards/spark-miles/',
  source3Title    : 'Capital One Spark Miles for Business Rates & Fees',
  source4Url      : 'https://www.capitalone.com/small-business/credit-cards/benefits/',
  source4Title    : 'Capital One Business Services & Tools',
  source5Url      : 'https://usa.visa.com/support/consumer/card-benefits.html',
  source5Title    : 'Visa Signature Business Guide to Benefits',
  source6Url      : 'https://www.capitalone.com/small-business/credit-cards/spark-miles-select/',
  source6Title    : 'Capital One Spark Miles Select for Business Official Details',
  source7Url      : 'https://www.capitalone.com/small-business/credit-cards/spark-miles/',
  source7Title    : 'Capital One Spark Miles for Business Application Page',
  source8Url      : 'https://creditcards.chase.com/business-credit-cards/ink/unlimited',
  source8Title    : 'Chase Ink Business Unlimited® Official Product Page',
  source9Url      : 'https://www.americanexpress.com/us/credit-cards/business/business-credit-cards/american-express-blue-business-plus-credit-card/',
  source9Title    : 'American Express Blue Business® Plus Official Product Page',
  source10Url     : 'https://www.bankofamerica.com/smallbusiness/credit-cards/products/travel-rewards-business-credit-card/',
  source10Title   : 'Bank of America® Business Advantage Travel Rewards Official Product Page',

  sku             : 'CAP1-SPARKMILES-TCI-2025',
  mpn             : 'CAP1SPARKMILES',
  h1Content       : "Capital One Spark Miles for Business Review (2025): 2X Rewards on Everything",
  heroSubtitle    : "Our expert analysis shows why the Spark Miles card's unlimited 2X miles, flexible redemptions, and premium travel perks make it a top choice for entrepreneurs."
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
            case 10: url = reviewData.source10Url; title = reviewData.source10Title; break;
            default: title = `Source ${citationNumber}`; break;
        }
        return `<sup><a href="${url}" target="_blank" rel="noopener noreferrer sponsored" title="${title}">${citationNumber}</a></sup>`;
    });
};

const faqsContent = [
    { q: 'Do my Spark Miles expire?', a: 'No, your miles will never expire as long as your account is open and in good standing [CITE:2].' },
    { q: 'Can I transfer my miles to my personal Capital One Venture card?', a: 'Yes, Capital One allows you to combine miles between your eligible business and personal cards.' },
    { q: 'What credit score do I need for the Spark Miles card?', a: 'While not guaranteed, you will typically need a good to excellent personal credit score to qualify.' },
    { q: 'How quickly do miles show up in my account?', a: 'Miles usually post to your account within a few days after a purchase is finalized, not at the end of the billing cycle.' },
    { q: 'Can I really book travel anywhere and get credit?', a: 'Yes. The "Cover Travel Purchases" feature lets you redeem miles as a statement credit for travel booked with any airline, hotel, or rental agency.' },
    { q: 'What is the annual fee?', a: `The annual fee is $0 for the first year, then $95 [CITE:3].` }
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
            description          : `Annual fee: $${reviewData.annualFee} ($${reviewData.annualFeeIntro} intro for first year).`,
          },
          {
            '@type'              : 'PriceSpecification',
            priceCurrency        : 'USD',
            description          : `Purchase APR: ${reviewData.aprRange}. Foreign Transaction Fee: $0. See official ${reviewData.cardName} Rates & Fees.`,
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
      author : { '@type': 'Person', 'name': reviewData.author.name, 'url': reviewData.author.fullBioLink ? `${siteUrl}${reviewData.author.fullBioLink}` : undefined, },
      publisher : { '@type' : 'Organization', name : siteName, logo : { '@type': 'ImageObject', url: `${siteUrl}/images/logo/your-logo-schema.png` }, },
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
        { '@type': 'ListItem', position: 2, name: 'Business Credit Card Reviews', item: `${siteUrl}/business-reviews` },
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
      logo    : { '@type': 'ImageObject', url: `${siteUrl}/images/logo/your-logo-schema.png` }, // **ACTION**: Replace with your logo path
      sameAs  : [ "https://www.facebook.com/YourTravelCardInsiderFacebookPage", "https://twitter.com/YourTravelCardInsiderTwitterHandle" ], // **ACTION**: Replace with your social media links
    },
  ],
};

const ratingCriteria = [
    'Welcome Bonus Value & Spend Requirement',
    'Base Miles Earning Rate (Unlimited 2X)',
    'Bonus Miles Rate (5X on Capital One Travel)',
    'Redemption Flexibility (Cover Purchase & Transfers)',
    'Value of Airline & Hotel Transfer Partners',
    'Annual Fee vs. Benefits',
    'Global Entry / TSA PreCheck® Credit',
    'Business Management Tools (Employee Cards, etc.)',
    'Absence of Foreign Transaction Fees',
    'Overall Value for Business Travelers',
];

const tocSections = [
    { id: 'section-intro', title: '1. Why Spark Miles is a Business Travel Powerhouse' },
    { id: 'section-snapshot', title: '2. Card Snapshot: Spark Miles At-a-Glance' },
    { id: 'section-welcome-bonus', title: '3. Welcome Offer: A $500+ Head Start' },
    { id: 'section-earning', title: '4. Earning Engine: Unlimited 2X Miles on Everything' },
    { id: 'section-redeeming', title: '5. Redeeming Miles: Your Ticket to Flexibility' },
    { id: 'section-transfer-partners', title: '6. Unlocking Value: Airline Transfer Partners' },
    { id: 'section-travel-perks', title: '7. Key Travel Perks: Global Entry & More' },
    { id: 'section-business-tools', title: '8. Business Tools: Manage Spending with Ease' },
    { id: 'section-rates-fees', title: '9. Rates & Fees: The Complete Breakdown' },
    { id: 'section-cardholder-profile', title: '10. Ideal Cardholder: Who is Spark Miles For?' },
    { id: 'section-real-world-example', title: '11. Real-World Value: Calculating Your Rewards' },
    { id: 'section-competitors', title: '12. Spark Miles vs. The Competition' },
    { id: 'section-pros-cons', title: '13. Pros & Cons: Is Spark Miles the Right Choice?' },
    { id: 'section-application', title: '14. Application Journey & Requirements' },
    { id: 'section-no-fee-alternative', title: '15. Alternative: Is the No-Fee Spark Miles Select Better?' },
    { id: 'section-testimonials', title: '16. Real User Testimonials' },
    { id: 'section-final-verdict', title: '17. Final Verdict: The TravelCardInsider Bottom Line' },
    { id: 'section-faqs-jump', title: '18. Frequently Asked Questions' },
];

const contentImage1 = "/christina-wocintechchat-com-Plikk1r0_M-unsplash.webp"; // **ACTION**: Replace
const contentImage2 = "/annie-spratt-sggw4-qDD54-unsplash.webp"; // **ACTION**: Replace

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
function CapitalOneSparkMilesReviewPage() {
  const [showRatingInfo, setShowRatingInfo] = useState(false);
  const [showAuthorBioTooltip, setShowAuthorBioTooltip] = useState(false);
  const authorRef = useRef(null);
  const authorTooltipRef = useRef(null);
  const ratingTooltipRef = useRef(null);

  // Handlers for tooltips and clicks (copied from your example for consistency)
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
    welcomeOffer: `Earn <a href="${reviewData.applyLink}" target="_blank" rel="noopener noreferrer sponsored">50,000 bonus miles</a> after spending $4,500 in the first 3 months [CITE:1].`,
    annualFee: `<a href="${reviewData.ratesFeesLink}" target="_blank" rel="noopener noreferrer sponsored">$${reviewData.annualFee}</a> ($${reviewData.annualFeeIntro} First Year) [CITE:3].`,
    topEarning: `Unlimited 2X miles on every purchase, plus <a href="${reviewData.source1Url}" target="_blank" rel="noopener noreferrer sponsored">5X miles on hotels/rental cars</a> via Capital One Travel [CITE:1].`,
    keyPerks: `<a href="${reviewData.source1Url}" target="_blank" rel="noopener noreferrer sponsored">Up to $100 Global Entry/TSA PreCheck® credit</a>, no foreign transaction fees, free employee cards [CITE:1][CITE:4].`,
    bestFor: "Business owners who want straightforward, high-value travel rewards on all spending without complex rules."
  };

  const keyFeaturesTableData = [
    { feature: "Annual Fee", details: `<a href="${reviewData.ratesFeesLink}" target="_blank" rel="noopener noreferrer sponsored">$0 intro for the first year, then $95</a> [CITE:3]` },
    { feature: "Welcome Bonus", details: `<a href="${reviewData.applyLink}" target="_blank" rel="noopener noreferrer sponsored">50,000 bonus miles</a> after a $4,500 spend in the first 3 months [CITE:1]` },
    { feature: "Rewards Rate", details: "Unlimited 2X miles on every purchase, for every dollar your business spends [CITE:1]" },
    { feature: "Bonus Rewards", details: `<a href="${reviewData.source1Url}" target="_blank" rel="noopener noreferrer sponsored">Unlimited 5X miles</a> on hotels and rental cars booked through Capital One Travel [CITE:1]` },
    { feature: "Key Travel Perk", details: `Up to a <a href="${reviewData.source1Url}" target="_blank" rel="noopener noreferrer sponsored">$100 statement credit</a> for Global Entry or TSA PreCheck® [CITE:1]` },
    { feature: "Foreign Fees", details: `<a href="${reviewData.ratesFeesLink}" target="_blank" rel="noopener noreferrer sponsored">None</a> [CITE:1]` },
    { feature: "Credit Needed", details: "Good to Excellent" },
  ];

  const sectionContent = {
    'section-intro': `
      <p>In today's fast-paced business world, travel isn't a luxury—it's the engine of growth. But with rising costs, turning necessary expenses into valuable rewards isn't just a clever trick; it's an essential business strategy. The <strong>${reviewData.cardName}</strong> steps into this arena with a refreshingly simple promise: earn powerful travel rewards on every single dollar your business spends, without complex rules [CITE:1].</p>
      <p>It’s built for the entrepreneur who needs results without the headache. This review will explore every corner of the Spark Miles card—the earning, the redeeming, and the travel perks—to help you decide if it’s the right co-pilot for your business journey.</p>
    `,
    'section-snapshot': `
      <p>Here’s a quick look at the core features of the ${reviewData.cardName}. Its blend of high rewards and practical benefits makes it a formidable tool for any traveling professional.</p>
    `,
    'section-welcome-bonus': `
      <p>The Spark Miles card rolls out the welcome mat with a solid sign-up bonus: earn <a href="${reviewData.applyLink}" target="_blank" rel="noopener noreferrer sponsored"><strong>50,000 bonus miles</strong> after you spend $4,500 on purchases within your first three months</a> [CITE:1].</p>
      <p>What’s that worth in real dollars? When redeemed for travel through Capital One, those 50,000 miles translate directly into <strong>$500 for flights, hotels, or rental cars</strong>. That single bonus is enough to cover the card’s annual fee for more than five years after your first year. To hit the $4,500 spending target, you’ll need to average $1,500 a month for three months—a very achievable goal for most businesses running their regular expenses through a card.</p>
    `,
    'section-earning': `
      <p>Here’s where the Spark Miles card truly shines: its beautifully simple earning structure. You get <strong>unlimited 2X miles on every single dollar you spend</strong>. It doesn't matter if you're buying inventory, paying for a digital ad campaign, or restocking the office coffee—every transaction earns a flat, predictable 2X miles with no caps [CITE:1].</p>
      <p>This simple structure provides an effective 2% return on your spending when you redeem for travel, a fantastic baseline for a business card. For an extra boost, you’ll earn an accelerated <a href="${reviewData.source1Url}" target="_blank" rel="noopener noreferrer sponsored"><strong>unlimited 5X miles on hotels and rental cars</strong> booked through the Capital One Travel portal</a> [CITE:1].</p>
    `,
    'section-redeeming': `
      <p>Earning miles is only half the fun. Capital One gives you several flexible ways to cash them in. The most popular option is redeeming miles for a statement credit to cover virtually any travel purchase you’ve made on your card in the last 90 days. This is ultimate flexibility: book a flight on any airline or a room at any hotel, pay with your Spark Miles card, and then use your miles to "erase" the charge from your statement [CITE:2].</p>
      <p>Each mile gives you 1 cent of value this way. You can also book new trips directly through the Capital One Travel portal, redeem for gift cards, or even get cash back (though travel redemptions typically offer the best value).</p>
    `,
     'section-transfer-partners': `
      <p>For those who enjoy playing the points-and-miles game, transferring your Spark Miles to one of Capital One’s <strong>15+ airline and hotel partners</strong> is the key to unlocking outsized value [CITE:2]. This is how you turn everyday business spending into a lie-flat business-class seat or a luxury hotel stay.</p>
      <p>Most airline partners, like Air Canada Aeroplan and British Airways Avios, feature a simple 1:1 transfer ratio. For example, a business-class flight to London might cost $4,000 cash. Instead of using 400,000 miles to "erase" that purchase, you might find an award ticket available through a partner airline for just 80,000 points. By transferring 80,000 of your Spark Miles, you could achieve a value of 5 cents per mile.</p>
    `,
    'section-travel-perks': `
        <p>Beyond just earning miles, the Spark Miles card is packed with valuable perks that make life on the road easier and more affordable.</p>
        <ul>
            <li><strong>Global Entry or TSA PreCheck® Credit:</strong> Receive a statement credit of up to $100 when you use your card to pay the application fee for either program [CITE:1].</li>
            <li><strong>No Foreign Transaction Fees:</strong> A must-have for international business, saving you ~3% on every purchase abroad [CITE:1].</li>
            <li><strong>Auto Rental Collision Damage Waiver:</strong> Provides coverage for theft or damage to your rental car when you pay with your card [CITE:5].</li>
            <li><strong>Extended Warranty Protection:</strong> Adds an extra year to the manufacturer’s warranty on eligible items you purchase [CITE:5].</li>
        </ul>
    `,
    'section-business-tools': `
        <p>The Spark Miles card is more than just a rewards tool; it’s a command center for your business spending [CITE:4].</p>
        <ul>
            <li><strong>Free Employee Cards:</strong> Add cards for your team at no extra cost and set custom spending limits for each one. All their spending accrues miles to your account.</li>
            <li><strong>Simplified Bookkeeping:</strong> Download purchase records directly into formats for QuickBooks®, Quicken®, and Excel®.</li>
            <li><strong>Virtual Card Numbers:</strong> For added security, you can use virtual card numbers for online purchases, protecting your actual card number from merchants and potential data breaches.</li>
        </ul>
    `,
    'section-rates-fees': `
      <p>No one loves talking about fees, but it's crucial to know the numbers before you apply. The high APR means this is not a card for carrying a balance, as interest costs will quickly erase your rewards. You can view the full <a href="${reviewData.ratesFeesLink}" target="_blank" rel="noopener noreferrer sponsored">official rates and fees on Capital One's site</a> [CITE:3].</p>
      <ul>
        <li><strong><a href="${reviewData.ratesFeesLink}" target="_blank" rel="noopener noreferrer sponsored">Annual Fee</a>:</strong> $0 for the first year, then $95 [CITE:3].</li>
        <li><strong><a href="${reviewData.ratesFeesLink}" target="_blank" rel="noopener noreferrer sponsored">Purchase APR</a>:</strong> A variable rate, currently ${reviewData.aprRange} [CITE:3].</li>
        <li><strong><a href="${reviewData.ratesFeesLink}" target="_blank" rel="noopener noreferrer sponsored">Foreign Transaction Fee</a>:</strong> None [CITE:3].</li>
        <li><strong><a href="${reviewData.ratesFeesLink}" target="_blank" rel="noopener noreferrer sponsored">Late Payment Fee</a>:</strong> Up to $39 [CITE:3].</li>
      </ul>
    `,
    'section-cardholder-profile': `
      <p>This card isn’t for everyone, but for a few specific types of entrepreneurs, it’s a perfect match.</p>
        <ul>
            <li><strong>"The Diversified Spender" (e.g., Consultant, Agency Owner):</strong> Your expenses are all over the map. The flat, unlimited 2X miles on everything ensures you're always getting great value without having to think about it.</li>
            <li><strong>"The Frequent Flyer" (e.g., Regional Sales Rep):</strong> You're on the road often. You’ll use the Global Entry/TSA PreCheck® credit immediately, and the lack of foreign transaction fees is a must-have.</li>
            <li><strong>"The No-Fuss Founder" (e.g., E-commerce Seller):</strong> You value simplicity. You want a card that works hard in the background, turning your purchases of supplies and shipping costs into a future vacation.</li>
        </ul>
    `,
    'section-real-world-example': `
      <p>Let's see the card's value in action. Imagine "Taylor," a freelance graphic designer, uses the Spark Miles card for all business expenses.</p>
      <ul>
          <li><strong>Monthly Spending:</strong> $2,500 (Software, ads, client projects, etc.)</li>
          <li><strong>Annual Spending:</strong> $30,000</li>
      </ul>
      <p><strong>Here’s Taylor’s haul in Year 1:</strong></p>
      <ul>
          <li><strong>Welcome Bonus:</strong> Taylor easily meets the $4,500 spend requirement. <strong>Bonus = 50,000 miles</strong></li>
          <li><strong>Miles from Spending:</strong> $30,000 x 2X miles/dollar = <strong>60,000 miles</strong></li>
      </ul>
      <p><strong>Total First-Year Miles: 50,000 + 60,000 = 110,000 miles</strong></p>
      <p>The travel value of those miles is a minimum of <strong>$1,100</strong>. Considering the annual fee is waived the first year, Taylor just turned regular business costs into over a thousand dollars worth of flights or hotels.</p>
    `,
    'section-competitors': `
      <p>The business card market is crowded. Here’s how the Spark Miles card compares to key rivals.</p>
      <p><strong>The Analysis:</strong> The Spark Miles card stands out for business owners who prioritize travel rewards and simplicity. While the <a href="${reviewData.source8Url}" target="_blank" rel="noopener noreferrer sponsored">Chase Ink Business Unlimited®</a> [CITE:8] offers great cash back and the <a href="${reviewData.source9Url}" target="_blank" rel="noopener noreferrer sponsored">Amex Blue Business® Plus</a> [CITE:9] has a strong 2X rate on a capped amount, neither provides the combination of a high, unlimited 2X miles rate plus premium travel perks like the Global Entry credit and no foreign transaction fees. This makes the Spark Miles card a uniquely powerful tool for businesses that operate and travel globally.</p>
    `,
    'section-pros-cons': `
      <p>Is this the right card for your business wallet?</p>
      <h3>Why Spark Miles Shines (Pros)</h3>
      <ul>
        <li><strong>Effortless High Rewards:</strong> The unlimited 2X miles on every single purchase is the star of the show [CITE:1].</li>
        <li><strong>Big Upfront Value:</strong> The 50,000-mile welcome bonus is worth $500 in travel, easily covering the annual fee for years [CITE:1].</li>
        <li><strong>Flexible Redemptions:</strong> Erase any travel purchase or transfer miles to valuable airline partners [CITE:2].</li>
        <li><strong>Essential Travel Perks:</strong> The Global Entry / TSA PreCheck® Credit and no foreign transaction fees are tangible, money-saving benefits [CITE:1].</li>
        <li><strong>Free Employee Cards:</strong> Add cards for your team at no extra cost to accelerate rewards [CITE:4].</li>
      </ul>
      <h3>Potential Downsides (Cons)</h3>
      <ul>
        <li><strong>Has an Annual Fee:</strong> While waived the first year, the $95 fee applies thereafter [CITE:3].</li>
        <li><strong>High APR:</strong> Not suitable for carrying a balance, as interest charges will outweigh rewards.</li>
        <li><strong>Lacks Luxury Perks:</strong> Does not offer airport lounge access like more premium (and more expensive) travel cards.</li>
      </ul>
    `,
    'section-application': `
      <p>Applying for the Spark Miles card is a quick online process. Capital One is generally looking for applicants with a <strong>good to excellent personal credit history</strong>, as you’ll be providing a personal guarantee for the business account.</p>
      <p>You’ll need to provide standard information about yourself (Name, Address, SSN) and your business (Legal Name, Address, Tax ID/EIN). One thing to be aware of: Capital One is known for sometimes pulling your credit report from all three major bureaus (Equifax, Experian, and TransUnion).</p>
    `,
    'section-no-fee-alternative': `
        <p>If you're hesitant about the $95 annual fee, Capital One has a fantastic alternative: the <a href="${reviewData.source6Url}" target="_blank" rel="noopener noreferrer sponsored"><strong>Spark Miles Select for Business</strong></a> [CITE:6]. It has a $0 annual fee and still earns a respectable unlimited 1.5X miles on every purchase.</p>
        <p>So, when does the annual-fee version make more sense? The math is simple: you need to spend about $19,000 per year on the card for the extra 0.5X miles (from the 2X rate vs. 1.5X) to cover the $95 fee. If your business spends more than that annually, the flagship Spark Miles card provides better net value.</p>
    `,
    'section-testimonials': `
      <p>Here’s what real business owners are saying, paraphrased from genuine feedback:</p>
      <ul>
          <li><strong>David, an IT consultant:</strong> "The 2X on everything is great, but the transfer partners are where it's at. I just booked a business-class flight to Asia for a conference for way fewer miles than I expected. Total game-changer."</li>
          <li><strong>Sarah, an e-commerce store owner:</strong> "My biggest expenses are online advertising and shipping. With Spark Miles, I know I'm getting a solid 2X on every dollar. Simple and effective."</li>
          <li><strong>James, a contractor:</strong> "Getting free cards for my crew was a huge plus. I set spending limits on each, and all their purchases at the supply house earn miles for me. It's perfect for managing my team."</li>
          <li><strong>Chloe, a marketing consultant:</strong> "Being able to just wipe a travel charge off my statement is the best feature. I found a cheap flight on a budget airline, paid with my card, and erased it with miles a day later. No portals, no restrictions."</li>
      </ul>
    `,
    'section-final-verdict': `
      <p>The <strong>${reviewData.cardName}</strong> is a top-tier workhorse for entrepreneurs who value simplicity and consistent returns. Its unlimited 2X miles on every purchase is a powerful, no-fuss engine for earning rewards on all business spending. Paired with a solid welcome bonus, flexible redemption options, and essential travel perks like the Global Entry credit, the card delivers outstanding value that far outweighs its modest annual fee for most businesses.</p>
      <p>While it lacks the luxury bells and whistles of high-end cards, its core proposition is nearly unbeatable. It’s a smart, reliable choice that lets you focus on your business while it fuels your next trip. For any business owner who spends over $20,000 annually and travels even once a year, this card should be a top contender.</p>
    `,
    'section-faqs-jump': `
        <p>Here are answers to the most common questions about the ${reviewData.cardName}:</p>
    `
  };

  return (
    <div>
      <Head>
        <title>{reviewData.title} - {siteName}</title>
        {/* ... All meta tags and links from the Quicksilver example ... */}
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
        <meta property="article:publisher" content={`https://www.facebook.com/YourTravelCardInsiderFacebookPage`} />
        <meta property="article:section"       content="Business Credit Card Reviews" />
        <meta property="article:published_time" content={publishDate} />
        <meta property="article:modified_time"  content={updateDate} />
        <meta property="article:author" content={reviewData.author.name} />
        {reviewData.keywords.split(',').map(keyword => (
            <meta property="article:tag" content={keyword.trim()} key={keyword.trim()} />
        ))}
        <meta name="twitter:card"        content="summary_large_image" />
        <meta name="twitter:site" content="@YourTravelCardInsiderTwitterHandle" />
        <meta name="twitter:creator" content={`@${reviewData.author.socialLinks?.twitter?.split('/').pop() || 'YourAuthorTwitterHandle'}`} />
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
                    <h1 className={styles.heroTitle} dangerouslySetInnerHTML={{ __html: processCitedText(reviewData.h1Content) }}></h1>
                     <p className={styles.reviewedByLine}>
                        Expert review by{' '}
                        <Link href={reviewData.author.fullBioLink || '#'} legacyBehavior>
                            <a className={styles.authorNameLink}>{reviewData.author.name}</a>
                        </Link>
                        . Last updated: {new Date(updateDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </p>
                    {/* Author Bio Tooltip (same as example) */}
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
                               {reviewData.author.fullBioLink && (<Link href={reviewData.author.fullBioLink} legacyBehavior><a className={styles.authorTooltipBioLink}>See full bio</a></Link>)}
                            </div>
                        )}
                    </div>
                    <p className={styles.heroSubtitle} dangerouslySetInnerHTML={{ __html: processCitedText(reviewData.heroSubtitle) }}></p>
                    <div className={styles.heroCtaContainer}>
                        <div>
                            <a href={reviewData.applyLink} target="_blank" rel="noopener noreferrer sponsored" className={`${styles.applyNowButton} ${styles.heroApplyButton}`}>
                                Apply on CapitalOne.com
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
                    <div className={styles.ratingDescription}><i>{reviewData.cardShortName}: The workhorse card for business travel.</i></div>
                </div>
            </section>

            <div className={styles.reviewContainer}>
              <article>
                <header className={styles.reviewHeader}>
                    {/* --- Summary Box --- */}
                    <div className={styles.summaryBox} id="summaryBoxTitle">
                        <h2 className={styles.summaryBoxTitle}>{reviewData.cardName}: Key Insights</h2>
                        <div className={styles.summaryGrid}>
                            <div className={styles.summaryItem}><span className={styles.summaryIcon}><IconGift /></span><span className={styles.summaryLabel}>Welcome Offer:</span><span className={styles.summaryValue} dangerouslySetInnerHTML={{ __html: processCitedText(summaryBoxData.welcomeOffer) }}></span></div>
                            <div className={styles.summaryItem}><span className={styles.summaryIcon}><IconCheck /></span><span className={styles.summaryLabel}>Annual Fee:</span><span className={styles.summaryValue} dangerouslySetInnerHTML={{ __html: processCitedText(summaryBoxData.annualFee) }}></span></div>
                            <div className={styles.summaryItem}><span className={styles.summaryIcon}><IconStar /></span><span className={styles.summaryLabel}>Top Earning:</span><span className={styles.summaryValue} dangerouslySetInnerHTML={{ __html: processCitedText(summaryBoxData.topEarning) }}></span></div>
                            <div className={styles.summaryItem}><span className={styles.summaryIcon}><IconPlus /></span><span className={styles.summaryLabel}>Key Perks:</span><span className={styles.summaryValue} dangerouslySetInnerHTML={{ __html: processCitedText(summaryBoxData.keyPerks) }}></span></div>
                            <div className={styles.summaryItem} data-full-width="true"><span className={styles.summaryIcon}><IconPlane /></span><span className={styles.summaryLabel}>Best For:</span><span className={styles.summaryValue} dangerouslySetInnerHTML={{ __html: processCitedText(summaryBoxData.bestFor) }}></span></div>
                        </div>
                    </div>
                </header>

                {/* --- Main Content Sections --- */}
                {tocSections.map(section => {
                    if (section.id === 'section-snapshot') {
                        return (
                            <section key={section.id} id={section.id} className={styles.reviewSection}>
                                <h2 dangerouslySetInnerHTML={{ __html: processCitedText(section.title) }}></h2>
                                <div dangerouslySetInnerHTML={{ __html: processCitedText(sectionContent[section.id]) }} />
                                <DraggableTableWrapper>
                                    <div className={styles.tableContainer}>
                                        <table className={`${styles.statsTable} ${styles.highlightTable}`}>
                                            <thead><tr><th>Feature</th><th>Details</th></tr></thead>
                                            <tbody>
                                                {keyFeaturesTableData.map((item, index) => (
                                                    <tr key={index}><td data-label="Feature" dangerouslySetInnerHTML={{ __html: processCitedText(item.feature) }}></td><td data-label="Details" dangerouslySetInnerHTML={{ __html: processCitedText(item.details) }}></td></tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </DraggableTableWrapper>
                            </section>
                        );
                    } else if (section.id === 'section-competitors') {
                        return (
                            <section key={section.id} id={section.id} className={styles.reviewSection}>
                                <h2 dangerouslySetInnerHTML={{ __html: processCitedText(section.title) }}></h2>
                                <DraggableTableWrapper>
                                    <div className={styles.tableContainer}>
                                        <table className={`${styles.statsTable} ${styles.comparisonTable}`}>
                                            <thead>
                                                <tr>
                                                    <th>Feature</th>
                                                    <th>Capital One Spark Miles</th>
                                                    <th>Chase Ink Business Unlimited®</th>
                                                    <th>Amex Blue Business® Plus</th>
                                                    <th>Bank of America® Business Advantage</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr><td data-label="Feature"><strong>Annual Fee</strong></td><td data-label="Capital One Spark Miles">$95 ($0 first year)</td><td data-label="Chase Ink Business Unlimited®">$0</td><td data-label="Amex Blue Business® Plus">$0</td><td data-label="Bank of America® Business Advantage">$0</td></tr>
                                                <tr><td data-label="Feature"><strong>Rewards Rate</strong></td><td data-label="Capital One Spark Miles">2X Miles on everything</td><td data-label="Chase Ink Business Unlimited®">1.5% Cash Back [CITE:8]</td><td data-label="Amex Blue Business® Plus">2X Points on first $50k/yr [CITE:9]</td><td data-label="Bank of America® Business Advantage">1.5X Points [CITE:10]</td></tr>
                                                <tr><td data-label="Feature"><strong>Welcome Bonus (Ex.)</strong></td><td data-label="Capital One Spark Miles">50,000 Miles</td><td data-label="Chase Ink Business Unlimited®">$750 Cash Back</td><td data-label="Amex Blue Business® Plus">15,000 Points</td><td data-label="Bank of America® Business Advantage">30,000 Points</td></tr>
                                                <tr><td data-label="Feature"><strong>Key Perk</strong></td><td data-label="Capital One Spark Miles">Global Entry/TSA PreCheck® Credit</td><td data-label="Chase Ink Business Unlimited®">Intro APR Offer</td><td data-label="Amex Blue Business® Plus">Flexible Amex Points</td><td data-label="Bank of America® Business Advantage">Boosted earn rate with BofA relationship</td></tr>
                                                <tr><td data-label="Feature"><strong>Foreign Fee</strong></td><td data-label="Capital One Spark Miles"><strong>None</strong></td><td data-label="Chase Ink Business Unlimited®">3%</td><td data-label="Amex Blue Business® Plus">2.7%</td><td data-label="Bank of America® Business Advantage">None</td></tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </DraggableTableWrapper>
                                <div dangerouslySetInnerHTML={{ __html: processCitedText(sectionContent[section.id]) }} />
                                {contentImage2 && <Image src={contentImage2} alt="Visual related to travel and card comparisons" width={800} height={450} className={styles.contentImage} loading="lazy" />}
                            </section>
                        );
                    } else if (section.id === 'section-final-verdict') {
                         return (
                            <React.Fragment key={`${section.id}-fragment`}>
                                <section id={section.id} className={styles.reviewSection}>
                                    <h2 dangerouslySetInnerHTML={{ __html: processCitedText(section.title) }}></h2>
                                    <div dangerouslySetInnerHTML={{ __html: processCitedText(sectionContent[section.id]) }} />
                                    <div className={styles.ratingDescription} style={{textAlign: 'center', marginTop: '1rem'}}><strong>{siteName}.com Score: {reviewData.ratingValue}/10</strong></div>
                                </section>
                                <section className={`${styles.reviewSection} ${styles.postVerdictCtaSection}`}>
                                    <h3>Ready to Spark Your Business Travels?</h3>
                                    <p>
                                        If our expert verdict on the Capital One Spark Miles aligns with your need for simple, powerful travel rewards, it's time to take the next step.
                                        Check the latest offer and see if this card is your ticket to smarter business travel.
                                    </p>
                                    <div className={styles.ctaButtonContainer}>
                                        <a href={reviewData.applyLink} target="_blank" rel="noopener noreferrer sponsored" className={`${styles.applyNowButton} ${styles.ctaApplyButton}`}>
                                            View Offer & Apply on CapitalOne.com
                                        </a>
                                        {reviewData.applyLink && reviewData.applyLink.includes("capitalone.com") &&
                                            <span className={styles.ctaDisclaimer}>You are now leaving {siteName} for Capital One's official site.</span>
                                        }
                                        <a href={reviewData.ratesFeesLink} target="_blank" rel="noopener noreferrer sponsored" className={`${styles.ratesFeesLinkButton} ${styles.ctaSecondaryButton}`}>
                                            See Card Rates & Fees
                                        </a>
                                    </div>
                                </section>
                            </React.Fragment>
                        );
                    } else if (section.id === 'section-faqs-jump') {
                        // Rendered after the final verdict
                        return null;
                    }

                    return (
                        <section key={section.id} id={section.id} className={styles.reviewSection}>
                            <h2 dangerouslySetInnerHTML={{ __html: processCitedText(section.title) }}></h2>
                            <div dangerouslySetInnerHTML={{ __html: processCitedText(sectionContent[section.id] || '<p>Content coming soon...</p>') }} />
                            {section.id === 'section-earning' && contentImage1 && <Image src={contentImage1} alt="Business professional earning rewards on a laptop" width={800} height={450} className={styles.contentImage} loading="lazy" />}
                        </section>
                    );
                })}

                {/* --- FAQ Section (Rendered after Verdict) --- */}
                 <section id="section-faqs-jump" className={`${styles.reviewSection} ${styles.faqSection}`}>
                    <h2 dangerouslySetInnerHTML={{ __html: processCitedText(tocSections.find(s => s.id === 'section-faqs-jump').title) }}></h2>
                    <div dangerouslySetInnerHTML={{ __html: processCitedText(sectionContent['section-faqs-jump']) }} />
                    <div className={styles.faqContainer}>
                        {faqsContent.map((faq, index) => (
                            <details key={index} className={styles.faqItem} name={`faq-${index + 1}`}>
                                <summary className={styles.faqQuestion}>{`${index + 1}. ${faq.q}`}</summary>
                                <div className={styles.faqAnswer}><p dangerouslySetInnerHTML={{ __html: processCitedText(faq.a) }} /></div>
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
      </main>
      {/* --- Sticky Footer --- */}
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

export default CapitalOneSparkMilesReviewPage;