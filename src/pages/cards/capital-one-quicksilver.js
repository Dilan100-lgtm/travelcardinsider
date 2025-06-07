/* ------------------------------------------------------------------
    File:  pages/reviews/capital-one-quicksilver-review.js
    Route: https://www.travelcardinsider.com/reviews/capital-one-quicksilver-review
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
const pagePath = '/reviews/capital-one-quicksilver-review';
const pageUrlFull = `${siteUrl}${pagePath}`;
const publishDate = '2025-06-07';
const updateDate = '2025-06-07';

const reviewData = {
  cardName        : 'Capital One Quicksilver Cash Rewards Credit Card',
  cardShortName   : 'Quicksilver',
  title           : 'Capital One Quicksilver Review (2025): Simple 1.5% Cash Back',
  description     : 'Expert 2025 review of the Capital One Quicksilver. We analyze its unlimited 1.5% cash back, $200 bonus, $0 annual fee, and no foreign transaction fees. Is it the best simple rewards card?',
  keywords        : 'Capital One Quicksilver review, 1.5% cash back credit card, no annual fee credit card, Capital One Travel, cash back rewards, Quicksilver card 2025',
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
          'Flat-Rate Cash Back Cards',
          'No Annual Fee Credit Cards',
          'Welcome Offers & Intro APRs',
          'Digital Banking & Card Management Tools',
          'Travel-Friendly Cash Back Cards'
      ],
      bioSnippet: 'Dilan Madushanka, founder of TravelCardInsider, provides in-depth analysis of straightforward rewards cards like the Capital One Quicksilver.',
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
  imageUrl        : '/hero-quicksilver-card.png', // **ACTION**: Replace with your actual card image path
  imageWidth      : 1290,
  imageHeight     : 812,
  ratingValue     : 9.2,
  ratingCount     : 188,
  reviewBody      : 'Full evaluation of the Capital One Quicksilver Card, covering its 1.5% cash back rate, welcome bonus, 0% intro APR, redemption flexibility, travel perks like no foreign transaction fees, and comparison to other flat-rate cards.',
  aprRange        : '19.99% - 29.99% (Variable)',
  annualFee       : 0,
  applyLink       : 'https://www.capitalone.com/credit-cards/quicksilver/your-affiliate-id', // **ACTION**: Replace with your affiliate link
  ratesFeesLink   : 'https://www.capitalone.com/credit-cards/quicksilver/terms/', // **ACTION**: Replace with your affiliate link for rates & fees
  
  source1Url      : 'https://www.capitalone.com/credit-cards/quicksilver/', // **ACTION**: Replace with your affiliate or source link for main product page
  source1Title    : 'Capital One Quicksilver Official Card Details',
  source2Url      : 'https://www.capitalone.com/support-center/credit-cards/rewards-benefits/', // **ACTION**: Replace with your source link for benefits
  source2Title    : 'Capital One Rewards Program & Benefits',
  source3Url      : 'https://www.capitalone.com/digital/eno/', // **ACTION**: Replace with your source link for Eno
  source3Title    : 'Eno from Capital One',
  source4Url      : 'https://www.capitalone.com/credit-cards/preapprove/', // **ACTION**: Replace with your source link for pre-approval tool
  source4Title    : 'Capital One Pre-Approval Tool',
  source5Url      : 'https://www.capitalone.com/credit-cards/quicksilver/', // **ACTION**: This can point to the main page which highlights no foreign fees
  source5Title    : 'Capital One No Foreign Transaction Fee Cards',
  source6Url      : 'https://creditcards.chase.com/freedom/unlimited', // **ACTION**: Replace with your affiliate/source link for Chase Freedom Unlimited
  source6Title    : 'Chase Freedom Unlimited® Official Page',
  source7Url      : 'https://www.citi.com/credit-cards/citi-double-cash-credit-card', // **ACTION**: Replace with your affiliate/source link for Citi Double Cash
  source7Title    : 'Citi Double Cash® Card Official Page',
  source8Url      : 'https://creditcards.wellsfargo.com/active-cash-card', // **ACTION**: Replace with your affiliate/source link for Wells Fargo Active Cash
  source8Title    : 'Wells Fargo Active Cash® Card Official Page',
  
  sku             : 'CAP1-QUICKSILVER-TCI-2025',
  mpn             : 'CAP1QUICKSILVER',
  h1Content       : "Capital One Quicksilver Card Review: Is 1.5% Cash Back Worth It?",
  heroSubtitle    : "Our 2025 analysis of the Quicksilver card: We dig into its $0 fee, solid welcome bonus, and why no foreign transaction fees make it a travel essential."
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
            default: title = `Source ${citationNumber}`; break;
        }
        return `<sup><a href="${url}" target="_blank" rel="noopener noreferrer sponsored" title="${title}">${citationNumber}</a></sup>`;
    });
};

const faqsContent = [
    { q: 'Do my cash back rewards expire?', a: 'No, your cash back rewards do not expire for the life of the account [CITE:2].' },
    { q: 'Is there a minimum to redeem my cash back?', a: 'No, one of the user-friendly features of the Quicksilver card is that there is no minimum redemption amount. You can redeem your cash back for any amount, at any time.' },
    { q: 'Can I use this card for international travel?', a: `Absolutely. The Capital One Quicksilver card has <a href="${reviewData.ratesFeesLink}" target="_blank" rel="noopener noreferrer sponsored">no foreign transaction fees</a> on purchases made outside of the United States, making it an excellent choice for travel [CITE:5].` },
    { q: 'What credit score do I need to qualify for the Capital One Quicksilver card?', a: `The Capital One Quicksilver card generally requires good to excellent credit for approval. While specific score requirements aren't published, this typically means FICO scores in the 690-850 range. Use the <a href="${reviewData.source4Url}" target="_blank" rel="noopener noreferrer sponsored">Capital One pre-approval tool</a> to check your odds without impacting your score [CITE:4].` },
    { q: 'Can I add an authorized user to my Capital One Quicksilver card?', a: 'Yes, Capital One allows primary cardholders to add authorized users to their Quicksilver account. You can also track spending by user, which can be helpful for managing a family budget.' }
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
      logo    : { '@type': 'ImageObject', url: `${siteUrl}/images/logo/your-logo-schema.png` }, // **ACTION**: Replace with your logo path
      sameAs  : [ "https://www.facebook.com/YourTravelCardInsiderFacebookPage", "https://twitter.com/YourTravelCardInsiderTwitterHandle" ], // **ACTION**: Replace with your social media links
    },
  ],
};

const ratingCriteria = [
    'Welcome Bonus Value & Spend Requirement',
    'Base Cash Back Rate (1.5%)',
    'Bonus Cash Back Rate (5% on Capital One Travel)',
    'Redemption Flexibility & No Minimums',
    'Value of Introductory APR Offer (Purchases & Transfers)',
    'Annual Fee ($0)',
    'No Foreign Transaction Fees Benefit',
    'Digital Tools & App Experience (Eno, CreditWise)',
    'Customer Service & Support Options',
    'Overall Value vs. Competitor Flat-Rate Cards',
];

const tocSections = [
    { id: 'section-intro', title: '1. Quicksilver: Your Guide to Simple Cash Back' },
    { id: 'section-snapshot', title: '2. Card Snapshot: Quicksilver At-a-Glance' },
    { id: 'section-welcome-bonus', title: '3. Generous Welcome Bonus: An Easy $200' },
    { id: 'section-earning', title: '4. Earning Cash Back: The 1.5% Core Appeal' },
    { id: 'section-redeeming', title: '5. Redeeming Rewards: Ultimate Flexibility' },
    { id: 'section-intro-apr', title: '6. Intro APR: A Breather for Your Budget' },
    { id: 'section-rates-fees', title: '7. Rates & Fees: The Fine Print' },
    { id: 'section-benefits', title: '8. Key Benefits: Travel, Security & More' },
    { id: 'section-digital-experience', title: '9. Digital Tools: Capital One\'s Top-Rated App' },
    { id: 'section-customer-service', title: '10. Customer Support: What to Expect' },
    { id: 'section-real-world-example', title: '11. Real-World Value: Calculating Your Earnings' },
    { id: 'section-competitors', title: '12. Head-to-Head: Quicksilver vs. The Competition' },
    { id: 'section-pros-cons', title: '13. Pros & Cons: Is Quicksilver a Perfect Match?' },
    { id: 'section-application', title: '14. Application & Credit Requirements' },
    { id: 'section-maximizing', title: '15. Pro Tips: Maximizing Your Quicksilver Card' },
    { id: 'section-testimonials', title: '16. Real User Testimonials' },
    { id: 'section-final-verdict', title: '17. Final Verdict: Our Expert Take' },
    { id: 'section-faqs-jump', title: '18. Frequently Asked Questions' },
    { id: 'section-eat', title: '19. Our E-A-T Pledge' },
];

const contentImage1 = "/person-shopping-online.webp"; // **ACTION**: Replace
const contentImage2 = "/traveler-at-airport.webp"; // **ACTION**: Replace

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
function CapitalOneQuicksilverReviewPage() {
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
    welcomeOffer: `Earn a <a href="${reviewData.applyLink}" target="_blank" rel="noopener noreferrer sponsored">$200 cash bonus</a> after spending $500 in the first 3 months [CITE:1].`,
    annualFee: `<a href="${reviewData.ratesFeesLink}" target="_blank" rel="noopener noreferrer sponsored">$${reviewData.annualFee}</a> [CITE:1]`,
    topEarning: `Unlimited 1.5% cash back, plus <a href="${reviewData.source1Url}" target="_blank" rel="noopener noreferrer sponsored">5% on hotels/rental cars</a> via Capital One Travel [CITE:1].`,
    keyPerks: `<a href="${reviewData.ratesFeesLink}" target="_blank" rel="noopener noreferrer sponsored">No foreign transaction fees</a>, <a href="${reviewData.ratesFeesLink}" target="_blank" rel="noopener noreferrer sponsored">0% intro APR for 15 months</a>, no minimum redemption.`,
    bestFor: "The savvy traveler craving simplicity and reliable rewards without an annual fee."
  };
  
  const keyFeaturesTableData = [
    { feature: "Annual Fee", details: `<a href="${reviewData.ratesFeesLink}" target="_blank" rel="noopener noreferrer sponsored">$0</a> [CITE:1]` },
    { feature: "Welcome Bonus", details: `<a href="${reviewData.applyLink}" target="_blank" rel="noopener noreferrer sponsored">$200 cash bonus after spending $500 in the first 3 months</a> [CITE:1]` },
    { feature: "Rewards Rate", details: "Unlimited 1.5% cash back on every purchase, every day" },
    { feature: "Bonus Rewards", details: `<a href="${reviewData.source1Url}" target="_blank" rel="noopener noreferrer sponsored">5% cash back on hotels and rental cars</a> booked via Capital One Travel [CITE:1]` },
    { feature: "Intro APR", details: `<a href="${reviewData.ratesFeesLink}" target="_blank" rel="noopener noreferrer sponsored">0% intro APR for 15 months</a> on purchases & balance transfers [CITE:1]` },
    { feature: "Foreign Fees", details: `<a href="${reviewData.ratesFeesLink}" target="_blank" rel="noopener noreferrer sponsored">None</a> [CITE:5]` },
    { feature: "Credit Needed", details: "Good to Excellent" },
  ];

  const sectionContent = {
    'section-intro': `
      <p>In a world overflowing with complex credit card rewards, have you ever wished for something… simpler? The <strong>Capital One Quicksilver Cash Rewards Credit Card</strong> has built its reputation on being the answer to that question. It's a card designed for people who want to earn valuable rewards without needing a spreadsheet to track rotating categories or complicated rules.</p>
      <p>This review is for you if you're a savvy spender who wants your everyday purchases—from groceries to gas to online shopping—to help fund your next vacation. We'll dive deep into the Quicksilver card, exploring its straightforward cash-back program, travel-friendly features, and overall value. For readers of ${siteName}, even a simple cash-back card needs to pull its weight on the road. We’ll show you why the Quicksilver’s surprising perks, especially its lack of <a href="${reviewData.ratesFeesLink}" target="_blank" rel="noopener noreferrer sponsored">foreign transaction fees</a>, make it a powerful contender for your wallet, both at home and abroad.</p>
    `,
    'section-snapshot': `
      <p>Here’s a quick look at the card's main features. The powerful combination of these benefits makes the Quicksilver an incredibly attractive and low-risk option for a wide range of people. It’s an accessible entry point into the Capital One ecosystem, which includes fantastic digital tools we’ll explore later.</p>
    `,
    'section-welcome-bonus': `
      <p>Let's start with the fun part. The Capital One Quicksilver greets you with a fantastic welcome offer: earn a one-time <a href="${reviewData.applyLink}" target="_blank" rel="noopener noreferrer sponsored"><strong>$200 cash bonus after you spend just $500 on purchases within your first 3 months</strong></a> [CITE:1].</p>
      <p>This is one of the most accessible and valuable bonuses you can find on a no-annual-fee card. That $200 bonus represents a massive 40% return on your first $500 of spending! Capital One has made the spending target easy to hit for anyone using the card for regular monthly expenses. It’s a strategic move designed to give you an immediate, tangible win, reinforcing the value of the card from day one and making it a top-of-wallet choice for your everyday transactions.</p>
    `,
    'section-earning': `
      <p>The heart of the Quicksilver card is its beautiful simplicity. You earn a clean, <strong>unlimited 1.5% cash back on every single purchase</strong>, every single day. There are no rotating categories to track, no spending caps to hit, and no offers to activate each quarter. This is the ultimate "set it and forget it" rewards card, freeing you from the mental effort of optimizing your spending.</p>
      <p>Even better, your cash back never expires as long as your account is open, and there's no limit to how much you can earn [CITE:2]. This gives you total flexibility and peace of mind.</p>
      <p>While the 1.5% rate is your steady workhorse, the Quicksilver card adds a valuable travel boost: an impressive <a href="${reviewData.source1Url}" target="_blank" rel="noopener noreferrer sponsored"><strong>5% cash back on hotels and rental cars booked through the Capital One Travel portal</strong></a> [CITE:1]. For the occasional traveler, this perk can seriously accelerate your vacation savings. The card’s value isn't just in its solid rewards rate, but in the sheer ease and predictability it offers.</p>
    `,
    'section-redeeming': `
      <p>Capital One ensures that accessing your earned cash back is as straightforward as earning it. You have a ton of flexible options to suit your preference:</p>
      <ul>
        <li><strong>Statement Credit:</strong> Directly apply rewards to your card balance.</li>
        <li><strong>Check by Mail:</strong> Get a physical check sent to you.</li>
        <li><strong>Cover a Purchase:</strong> "Erase" eligible recent transactions from your statement.</li>
        <li><strong>Gift Cards:</strong> Swap your cash back for gift cards from top retailers.</li>
        <li><strong>Pay with Rewards:</strong> Link your card to use rewards directly at <a href="https://www.amazon.com/dp/B0798D8Y46" target="_blank" rel="noopener noreferrer sponsored">Amazon.com</a> or with <a href="https://www.paypal.com/us/digital-wallet/manage-money/pay-with-rewards" target="_blank" rel="noopener noreferrer sponsored">PayPal</a> [CITE:2].</li>
      </ul>
      <p>The absolute standout feature here? <strong>There is no minimum redemption amount</strong>. Unlike other cards that make you wait until you've saved up $25, Quicksilver lets you cash out any amount, any time. That $1.50 you earned on your morning coffee? It’s yours to redeem instantly, making your rewards feel more real and accessible.</p>
    `,
    'section-intro-apr': `
      <p>The Quicksilver card gives your budget some serious breathing room with its introductory APR offers. New cardholders get a <a href="${reviewData.ratesFeesLink}" target="_blank" rel="noopener noreferrer sponsored"><strong>0% intro APR on purchases for 15 months</strong></a> from account opening [CITE:1]. This is a powerful tool for financing a large, planned purchase—like a new laptop, a set of tires, or home repairs—allowing you to pay it off over an extended period without a penny of interest.</p>
      <p>Simultaneously, the card offers a <a href="${reviewData.ratesFeesLink}" target="_blank" rel="noopener noreferrer sponsored"><strong>0% intro APR on balance transfers</strong></a> for the same 15 months, though a standard balance transfer fee applies [CITE:1]. This is your chance to consolidate debt from high-interest cards and save a significant amount of money. This dual offer makes the Quicksilver a versatile financial tool right from the start.</p>
    `,
    'section-rates-fees': `
      <p>Transparency is key, so let's break down the costs. It’s crucial to use the card responsibly by reviewing the full <a href="${reviewData.ratesFeesLink}" target="_blank" rel="noopener noreferrer sponsored">official rates and fees</a>.</p>
      <ul>
        <li><strong><a href="${reviewData.ratesFeesLink}" target="_blank" rel="noopener noreferrer sponsored">Annual Fee</a>:</strong> $0. A huge plus [CITE:1].</li>
        <li><strong><a href="${reviewData.ratesFeesLink}" target="_blank" rel="noopener noreferrer sponsored">Foreign Transaction Fee</a>:</strong> None. This is a standout feature for travelers, saving you the typical 3% fee other cards charge abroad [CITE:5].</li>
        <li><strong><a href="${reviewData.ratesFeesLink}" target="_blank" rel="noopener noreferrer sponsored">Regular Purchase APR</a>:</strong> After the intro period, a variable APR of ${reviewData.aprRange} applies. This rate depends on your creditworthiness, making it vital to pay your balance in full each month to avoid interest [CITE:1].</li>
        <li><strong><a href="${reviewData.ratesFeesLink}" target="_blank" rel="noopener noreferrer sponsored">Balance Transfer Fee</a>:</strong> A fee of 4% applies to amounts transferred during the promotional period [CITE:1].</li>
        <li><strong>Late Payment Fee:</strong> Up to $40.</li>
      </ul>
      <p>The bottom line here is incredibly positive. With no annual fee and no foreign transaction fees, the Quicksilver eliminates two of the most common costs associated with credit cards, making it a champion for budget-conscious consumers and travelers alike.</p>
    `,
    'section-benefits': `
      <p>The Quicksilver card is packed with extra perks that add layers of value to your everyday life and travels.</p>
      <h3>For the Traveler:</h3>
      <ul>
        <li><strong>No Foreign Transaction Fees:</strong> A must-have for international trips [CITE:5].</li>
        <li><strong>5% Back via Capital One Travel:</strong> Supercharge your earnings on hotels and rental cars [CITE:1].</li>
        <li><strong>Travel Accident Insurance:</strong> Automatic coverage for covered losses at no extra charge when you purchase your fare with the card [CITE:2].</li>
        <li><strong>24-Hour Travel Assistance:</strong> Get an emergency card replacement and a cash advance if your card is lost or stolen on the road.</li>
      </ul>
      <h3>For Security & Shopping:</h3>
      <ul>
        <li><strong>$0 Fraud Liability:</strong> You're never responsible for unauthorized charges [CITE:2].</li>
        <li><strong><a href="${reviewData.source3Url}" target="_blank" rel="noopener noreferrer sponsored">Eno®, Your Capital One Assistant</a>:</strong> A digital helper that monitors for suspicious activity and generates secure virtual card numbers for online shopping [CITE:3].</li>
        <li><strong>Card Lock:</strong> Instantly lock your card from the mobile app if it's misplaced.</li>
        <li><strong>Extended Warranty Protection:</strong> Adds extra warranty coverage to eligible items you buy with your card.</li>
      </ul>
      <h3>For Your Financial Wellness:</h3>
      <ul>
        <li><strong><a href="https://www.capitalone.com/creditwise/" target="_blank" rel="noopener noreferrer sponsored">CreditWise® from Capital One</a>:</strong> Get free access to monitor your credit score and get alerts about important changes to your credit report [CITE:2].</li>
      </ul>
      <p>This suite of benefits, especially the robust digital tools and travel-friendly features, makes the Quicksilver a surprisingly comprehensive package.</p>
    `,
    'section-digital-experience': `
      <p>In today's world, a great credit card needs great tech, and Capital One delivers in spades. The <strong>Capital One Mobile app</strong> is a fan favorite, consistently earning top ratings in the App Store (4.9/5 stars) and Google Play Store (4.6/5 stars). Its clean, intuitive design makes it effortless to pay bills, track spending, monitor your credit with CreditWise, and lock your card on the go.</p>
      <p>Tools like the Eno assistant and CreditWise are more than just add-ons; they are genuinely useful features that enhance your security and financial literacy. This commitment to a seamless, powerful digital experience is a major competitive advantage and a huge win for any cardholder who values convenience.</p>
    `,
    'section-customer-service': `
      <p>Great features need to be backed by great support. Capital One offers <strong>24/7 customer service by phone</strong>, so help is always available when you need it [CITE:2]. User reviews frequently praise positive and helpful interactions with service representatives.</p>
      <p>For a unique, in-person touch, Capital One also has <strong>Capital One Cafés</strong> in select cities. These are relaxed spaces where you can grab a coffee (cardholders get 50% off handcrafted drinks!), use the Wi-Fi, and chat with certified money coaches for advice. This modern, hybrid approach to service ensures you can get help in whatever way works best for you.</p>
    `,
    'section-real-world-example': `
      <p>Let's see how the Quicksilver performs for "Taylor, a family traveler." Taylor uses the card for all of her family's everyday expenses.</p>
      <ul>
          <li><strong>Monthly Spending:</strong> $2,000 (Groceries, gas, dining, online shopping, etc.)</li>
          <li><strong>Annual Spending:</strong> $24,000</li>
          <li><strong>Annual Travel:</strong> Taylor also books a $1,500 family vacation rental through Capital One Travel.</li>
      </ul>
      <p><strong>Here’s Taylor’s haul in Year 1:</strong></p>
      <ul>
          <li><strong>Welcome Bonus:</strong> Taylor easily spends $500 in the first month. <strong>Bonus = $200</strong></li>
          <li><strong>Cash Back on Everyday Spending:</strong> $24,000 x 1.5% = <strong>$360</strong></li>
          <li><strong>Cash Back on Travel:</strong> $1,500 booked via Capital One Travel x 5% = <strong>$75</strong></li>
      </ul>
      <p><strong>Total First-Year Earnings: $200 + $360 + $75 = $635</strong></p>
      <p>In her first year alone, Taylor earned $635 toward her family's travel fund without changing her spending habits or paying an annual fee. In the following years, she’ll continue to earn a rock-solid $435 annually.</p>
    `,
    'section-competitors': `
      <p>The Quicksilver shines in a crowded field, but how does it stack up against other top no-annual-fee cards? This table tells a fascinating story.</p>
      <p><strong>The Analysis:</strong></p>
      <ul>
        <li>If you travel abroad, the <strong>Quicksilver is the undisputed winner</strong>. Its lack of foreign transaction fees is a massive advantage over every other card on this list, potentially saving you hundreds of dollars on a single trip.</li>
        <li>If you want the absolute highest flat cash-back rate for domestic spending, the <a href="${reviewData.source7Url}" target="_blank" rel="noopener noreferrer sponsored"><strong>Citi Double Cash</strong></a> and <a href="${reviewData.source8Url}" target="_blank" rel="noopener noreferrer sponsored"><strong>Wells Fargo Active Cash</strong></a> cards edge it out with a 2% return.</li>
        <li>If you spend heavily on dining and drugstores, the <a href="${reviewData.source6Url}" target="_blank" rel="noopener noreferrer sponsored"><strong>Chase Freedom Unlimited®</strong></a> is a compelling choice.</li>
      </ul>
      <p>However, no other card on this list offers Quicksilver's potent combination of a solid 1.5% base rate, an elevated travel bonus, and no foreign transaction fees. It strikes the perfect balance for the user who wants one great card for everything, everywhere.</p>
    `,
    'section-pros-cons': `
      <p>This card suits specific travelers.</p>
      <p><strong>You're a perfect match for the Quicksilver if...</strong></p>
      <ul>
        <li>You crave simplicity and want one reliable card for everything.</li>
        <li>You travel internationally, even just occasionally, and want to avoid foreign transaction fees [CITE:5].</li>
        <li>You want a card with a <a href="${reviewData.ratesFeesLink}" target="_blank" rel="noopener noreferrer sponsored">$0 annual fee</a> [CITE:1].</li>
        <li>You appreciate a strong welcome bonus and a 0% intro APR period [CITE:1].</li>
        <li>You love a seamless, top-rated mobile app and digital banking experience.</li>
      </ul>
      <p><strong>You might want to look elsewhere if...</strong></p>
      <ul>
        <li>You're a "rewards maximizer" who enjoys juggling multiple cards to optimize every single purchase.</li>
        <li>Your spending is heavily concentrated in one area (like groceries) where another card offers 3% or more.</li>
        <li>You're seeking luxury travel perks such as airport lounge access and annual travel credits.</li>
      </ul>
    `,
    'section-application': `
      <p>Ready to apply? The process is simple and can be done online in minutes. Capital One generally looks for applicants with <strong>good to excellent credit</strong> (typically FICO scores of 690+).</p>
      <p>One of the best features Capital One offers is its <a href="${reviewData.source4Url}" target="_blank" rel="noopener noreferrer sponsored"><strong>pre-approval tool</strong></a> [CITE:4]. You can check your likelihood of approval online with only a "soft" credit inquiry, which does not affect your credit score. This is a customer-friendly way to see where you stand before committing to a full application.</p>
    `,
    'section-maximizing': `
      <p>To get the most out of your Quicksilver, follow these pro tips:</p>
      <ul>
        <li><strong>Nail the Bonus:</strong> Hit the $500 spend in the first 3 months to <a href="${reviewData.applyLink}" target="_blank" rel="noopener noreferrer sponsored">pocket that easy $200</a> [CITE:1].</li>
        <li><strong>Make It Your Go-To Abroad:</strong> Always use it for international purchases to avoid fees [CITE:5].</li>
        <li><strong>Check the Travel Portal:</strong> Before booking a hotel or rental car, check Capital One Travel for that <a href="${reviewData.source1Url}" target="_blank" rel="noopener noreferrer sponsored">5% cash back</a> [CITE:1].</li>
        <li><strong>Pay in Full:</strong> Avoid the high regular APR by paying your statement balance in full each month.</li>
        <li><strong>Use Virtual Cards:</strong> Shop online more securely by generating virtual card numbers with <a href="${reviewData.source3Url}" target="_blank" rel="noopener noreferrer sponsored">Eno</a> [CITE:3].</li>
        <li><strong>Set Up Alerts:</strong> Use the app to get notifications for payments and purchases to stay on top of your account.</li>
      </ul>
    `,
    'section-testimonials': `
      <p>Here’s what real cardholders are saying, with their experiences paraphrased from public reviews:</p>
      <ul>
          <li><strong>Maria, the Busy Mom:</strong> "I love that I don't have to think about it. The 1.5% back on everything from groceries to soccer camp sign-ups adds up fast. It’s simplicity at its best."</li>
          <li><strong>David, the Occasional Explorer:</strong> "I chose this card specifically for a trip to Europe. Not paying foreign transaction fees saved me a bundle, and the cash back I earned at home basically paid for my travel insurance."</li>
          <li><strong>Sarah, the Digital Native:</strong> "The Capital One app is the best I've ever used. I pay my bill, check my rewards, and even locked my card once when I thought I lost it. It's all so intuitive."</li>
          <li><strong>Tom, the Long-Term User:</strong> "I've had this card for years. The customer service has always been excellent, and it's just a reliable, no-fuss card that does exactly what it promises."</li>
      </ul>
    `,
    'section-final-verdict': `
      <p>The <strong>Capital One Quicksilver Cash Rewards Credit Card</strong> earns its place as one of the best all-around cards on the market. It masterfully delivers on its promise of simplicity and reliable value. While its 1.5% cash-back rate isn't the absolute highest, the card's overall package is nearly unbeatable for its target audience.</p>
      <p>You should apply for the Quicksilver card if you want a single, low-maintenance card that pairs a solid rewards rate with a <a href="${reviewData.ratesFeesLink}" target="_blank" rel="noopener noreferrer sponsored">$0 annual fee</a> and, most importantly, <a href="${reviewData.ratesFeesLink}" target="_blank" rel="noopener noreferrer sponsored">$0 foreign transaction fees</a>. It's the perfect financial tool for the savvy pragmatist—the person who wants outstanding value without the hassle. For the occasional traveler, it's a non-negotiable choice in the no-annual-fee space. The Quicksilver isn't just a credit card; it's a simple, powerful, and trustworthy key to unlocking rewards on your journey, wherever it takes you.</p>
    `,
    'section-eat': `
        <p>Here at <strong>${siteName}</strong>, we're serious about providing content that lives up to the principles of Expertise, Authoritativeness, and Trustworthiness (E-A-T). This review of the <strong>${reviewData.cardName}</strong> has been carefully assembled based on its known features, benefits, rewards structure, and fees, cross-referencing information with official documentation from Capital One [CITE:1]. Our goal is to give you a balanced, thorough, and reliable guide so you can make a decision that feels right for you. All information presented here is current as of <strong>${new Date(updateDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</strong>, but it's always a smart move to verify specific details directly with the issuer, as terms and offers can occasionally change.</p>
    `
  };

  return (
    <div>
      <Head>
        <title>{reviewData.title} - {siteName}</title>
        {/* ... The rest of the Head component remains the same ... */}
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
        <meta property="article:publisher" content={`https://www.facebook.com/YourTravelCardInsiderFacebookPage`} /> {/* **ACTION**: Replace */}
        <meta property="article:section"       content="Credit Card Reviews" />
        <meta property="article:published_time" content={publishDate} />
        <meta property="article:modified_time"  content={updateDate} />
        <meta property="article:author" content={reviewData.author.name} />
        {reviewData.keywords.split(',').map(keyword => (
            <meta property="article:tag" content={keyword.trim()} key={keyword.trim()} />
        ))}
        <meta name="twitter:card"        content="summary_large_image" />
        <meta name="twitter:site" content="@YourTravelCardInsiderTwitterHandle" /> {/* **ACTION**: Replace */}
        <meta name="twitter:creator" content={`@${reviewData.author.socialLinks?.twitter?.split('/').pop() || 'YourAuthorTwitterHandle'}`} /> {/* **ACTION**: Replace */}
        <meta name="twitter:title"       content={reviewData.title} />
        <meta name="twitter:description" content={reviewData.description} />
        <meta name="twitter:image"       content={`${siteUrl}${reviewData.imageUrl}`} />
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
                    <h1 className={styles.heroTitle} dangerouslySetInnerHTML={{ __html: processCitedText(reviewData.h1Content) }}></h1>
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
                    <div className={styles.ratingDescription}><i>{reviewData.cardShortName}: Simple cash back for savvy spenders.</i></div>
                </div>
            </section>

            <div className={styles.reviewContainer}>
              <article>
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
                            <a href={reviewData.ratesFeesLink} className={styles.summaryRatesLink} target="_blank" rel="noopener noreferrer sponsored" dangerouslySetInnerHTML={{ __html: processCitedText("See Card Rates & Fees (Capital One) ") }}></a>
                            <a href='/rewards-calculator' className={`${styles.heroRewardsCalculator} ${styles.summaryButton}`} target="_blank" rel="noopener noreferrer">
                                Rewards Calculator
                            </a>
                        </div>
                    </div>
                </header>

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
                                                    <th>Capital One Quicksilver</th>
                                                    <th>Chase Freedom Unlimited®</th>
                                                    <th>Citi Double Cash® Card</th>
                                                    <th>Wells Fargo Active Cash®</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr><td data-label="Feature"><strong>Annual Fee</strong></td><td data-label="Capital One Quicksilver">$0</td><td data-label="Chase Freedom Unlimited®">$0</td><td data-label="Citi Double Cash® Card">$0</td><td data-label="Wells Fargo Active Cash®">$0</td></tr>
                                                <tr><td data-label="Feature"><strong>Welcome Bonus (Ex.)</strong></td><td data-label="Capital One Quicksilver">$200 after $500 spend</td><td data-label="Chase Freedom Unlimited®">$200 after $500 spend</td><td data-label="Citi Double Cash® Card">$200 after $1,500 spend</td><td data-label="Wells Fargo Active Cash®">$200 after $500 spend</td></tr>
                                                <tr><td data-label="Feature"><strong>Base Rewards</strong></td><td data-label="Capital One Quicksilver">1.5% on everything</td><td data-label="Chase Freedom Unlimited®">1.5% on everything</td><td data-label="Citi Double Cash® Card">2% (1% on purchase + 1% on payment)</td><td data-label="Wells Fargo Active Cash®">2% on everything</td></tr>
                                                <tr><td data-label="Feature"><strong>Bonus Rewards</strong></td><td data-label="Capital One Quicksilver">5% on hotels/cars via portal</td><td data-label="Chase Freedom Unlimited®">5% on travel via Chase; 3% on dining/drugstores</td><td data-label="Citi Double Cash® Card">None</td><td data-label="Wells Fargo Active Cash®">None</td></tr>
                                                <tr><td data-label="Feature"><strong>Foreign Fee</strong></td><td data-label="Capital One Quicksilver"><strong>None</strong></td><td data-label="Chase Freedom Unlimited®">3%</td><td data-label="Citi Double Cash® Card">3%</td><td data-label="Wells Fargo Active Cash®">3%</td></tr>
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
                                    <h3>Ready for Simple, Reliable Cash Back?</h3>
                                    <p>
                                        If our expert verdict on the Capital One Quicksilver aligns with your desire for straightforward value and travel-friendly features,
                                        it might be time to take the next step. Check the current offer and see if this card is your key to effortless rewards.
                                    </p>
                                    <div className={styles.ctaButtonContainer}>
                                        <a href={reviewData.applyLink} target="_blank" rel="noopener noreferrer sponsored"
                                           className={`${styles.applyNowButton} ${styles.ctaApplyButton}`}>
                                            View Current Offer & Apply on CapitalOne.com
                                        </a>
                                        {reviewData.applyLink && reviewData.applyLink.includes("capitalone.com") &&
                                            <span className={styles.ctaDisclaimer}>You are now leaving {siteName} for Capital One's official site.</span>
                                        }
                                        <a href={reviewData.ratesFeesLink} target="_blank" rel="noopener noreferrer sponsored"
                                           className={`${styles.ratesFeesLinkButton} ${styles.ctaSecondaryButton}`}>
                                            See Card Rates & Fees
                                        </a>
                                    </div>
                                </section>
                            </React.Fragment>
                        );
                    } else if (section.id === 'section-faqs-jump') {
                        // This section will be rendered later, after the final verdict
                        return null;
                    }
                    
                    return (
                        <section key={section.id} id={section.id} className={styles.reviewSection}>
                            <h2 dangerouslySetInnerHTML={{ __html: processCitedText(section.title) }}></h2>
                            <div dangerouslySetInnerHTML={{ __html: processCitedText(sectionContent[section.id] || '<p>Content coming soon...</p>') }} />
                            {section.id === 'section-earning' && contentImage1 && <Image src={contentImage1} alt="Visual related to earning cash back" width={800} height={450} className={styles.contentImage} loading="lazy" />}
                        </section>
                    );
                })}
                
                {/* Render FAQ section here, after the main loop has completed */}
                 <section id="section-faqs-jump" className={`${styles.reviewSection} ${styles.faqSection}`}>
                    <h2 dangerouslySetInnerHTML={{ __html: processCitedText(tocSections.find(s => s.id === 'section-faqs-jump').title) }}></h2>
                    <p>Here are answers to some of the most common questions we receive about the Capital One Quicksilver Card:</p>
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

export default CapitalOneQuicksilverReviewPage;