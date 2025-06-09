/* ------------------------------------------------------------------
    File:  pages/reviews/capital-one-quicksilver-one-review.js
    Route: https://www.travelcardinsider.com/reviews/capital-one-quicksilver-one-review
------------------------------------------------------------------- */

import React, { useState, useEffect, useCallback, useRef } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import styles from '../../styles/ReviewPage.module.css'; // Assuming you have a shared CSS module

// Import shared components and icons
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
const pagePath = '/reviews/capital-one-quicksilver-one-review';
const pageUrlFull = `${siteUrl}${pagePath}`;
const publishDate = '2025-06-09';
const updateDate = '2025-06-09';

const reviewData = {
  cardName        : 'Capital One QuicksilverOne Rewards Credit Card',
  cardShortName   : 'QuicksilverOne',
  title           : 'Capital One QuicksilverOne Review (2025): Rewards for Fair Credit',
  description     : 'Our expert 2025 analysis of the Capital One QuicksilverOne card. Is the unlimited 1.5% cash back worth the $39 annual fee for building credit? We cover its features, fees, and competitors.',
  keywords        : 'Capital One QuicksilverOne review, fair credit credit card, 1.5% cash back, credit building card, QuicksilverOne card 2025, $39 annual fee',
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
          'Credit-Building Cards',
          'Cards for Fair/Average Credit',
          'Flat-Rate Cash Back Rewards',
          'Annual Fee Value Analysis',
          'Digital Credit Management Tools'
      ],
      bioSnippet: 'Dilan Madushanka, founder of TravelCardInsider, specializes in guiding users through their credit journey with in-depth reviews of cards like the QuicksilverOne.',
      fullBioLink: '/author/dilan-madushanka',
      socialLinks: {
          linkedin: 'https://www.linkedin.com/in/dilan-madushanka-b65293365',
          twitter: 'https://x.com/team_dilan',
          email: 'team@travelcardinsider.com'
      }
  },
  siteName: siteName,
  imageUrl        : '/quicksilverone-card-art.png', // ACTION: Replace with your actual card image path
  imageWidth      : 1290,
  imageHeight     : 812,
  ratingValue     : 7.2,
  ratingCount     : 94,
  reviewBody      : 'A deep dive into the Capital One QuicksilverOne card, focusing on its role as a credit-building tool with flat-rate rewards. We analyze its $39 annual fee, cash back structure, travel perks, and how it compares to other cards for fair credit.',
  aprRange        : '29.99% (Variable)',
  annualFee       : 39,
  applyLink       : 'https://www.capitalone.com/credit-cards/quicksilverone/', // ACTION: Replace with your affiliate link
  ratesFeesLink   : 'https://www.capitalone.com/credit-cards/quicksilverone/', // ACTION: Replace with your affiliate link for rates & fees
  
  source1Url      : 'https://www.capitalone.com/credit-cards/quicksilverone/',
  source1Title    : 'Official Capital One QuicksilverOne Product Page',
  source2Url      : 'https://www.capitalone.com/learn-grow/money-management/what-is-capital-one-travel/',
  source2Title    : 'Capital One Travel Portal Information',
  source3Url      : 'https://www.capitalone.com/creditwise/',
  source3Title    : 'CreditWise from Capital One',
  source4Url      : 'https://www.capitalone.com/credit-cards/preapprove/',
  source4Title    : 'Capital One Pre-Approval Tool',
  source5Url      : 'https://www.discover.com/credit-cards/secured/',
  source5Title    : 'Official Discover it® Secured Credit Card Page',
  source6Url      : 'https://www.petalcard.com/petal-2-card',
  source6Title    : 'Official Petal® 2 Visa® Card Page',
  source7Url      : 'https://www.upstart.com/upgrade-card/',
  source7Title    : 'Official Upgrade Cash Rewards Visa® Page',
  source8Url      : 'https://www.capitalone.com/digital/eno/',
  source8Title    : 'Eno® from Capital One',

  sku             : 'CAP1-QUICKSILVERONE-TCI-2025',
  mpn             : 'CAP1QUICKSILVERONE',
  h1Content       : "Capital One QuicksilverOne Review: Simple Rewards for Building Credit?",
  heroSubtitle    : "Our 2025 analysis breaks down the QuicksilverOne's 1.5% cash back, credit-building features, and whether its benefits justify the $39 annual fee for those with fair credit."
};

const processCitedText = (textWithMarkers) => {
    if (!textWithMarkers) return '';
    const citationRegex = /\[CITE:(\d+)\]/g;
    return textWithMarkers.replace(citationRegex, (match, citationNumberStr) => {
        const citationNumber = parseInt(citationNumberStr, 10);
        const url = reviewData[`source${citationNumber}Url`] || '#';
        const title = reviewData[`source${citationNumber}Title`] || 'View Source';
        return `<sup><a href="${url}" target="_blank" rel="noopener noreferrer sponsored" title="${title}">${citationNumber}</a></sup>`;
    });
};

const faqsContent = [
    { q: 'What credit score do I need for the QuicksilverOne?', a: `It’s designed for those with "Fair" or "Average" credit, often FICO scores in the low-to-mid 600s, but other factors are also considered [CITE:1]. Use the <a href="${reviewData.source4Url}" target="_blank" rel="noopener noreferrer sponsored">Capital One pre-approval tool</a> to check your odds without a hard inquiry [CITE:4].` },
    { q: 'How soon can I get a credit line increase?', a: 'With responsible use, you can be automatically considered for a higher credit limit in as little as six months [CITE:1].' },
    { q: 'Can I use this card internationally?', a: 'Yes! A key benefit is that it has no foreign transaction fees, saving you the typical 3% on purchases abroad [CITE:1].' },
    { q: 'How is this different from the regular Quicksilver card?', a: 'The QuicksilverOne is for building credit and has a $39 annual fee. The regular Quicksilver is for good-to-excellent credit, has no annual fee, and typically offers a welcome bonus and intro APR.' },
    { q: 'Does using the CreditWise tool hurt my credit score?', a: 'No. Monitoring your score with CreditWise is a "soft" inquiry and does not affect your credit score [CITE:3].' },
    { q: 'What happens to my card as my credit score improves?', a: 'As your score improves with responsible use, Capital One may eventually consider you for an upgrade to a no-annual-fee product like the standard Quicksilver card.' }
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
      },
      offers: {
        '@type'            : 'Offer',
        url                : reviewData.applyLink,
        priceCurrency      : 'USD',
        price              : reviewData.annualFee.toString(),
        priceValidUntil    : '2026-12-31',
        availability       : 'https://schema.org/InStock',
        seller: { '@type': 'Organization', name: 'Capital One' },
      },
      review: { '@type': 'Review', '@id': `${pageUrlFull}#editorReview` },
    },
    {
      '@type'         : 'Review',
      '@id'           : `${pageUrlFull}#editorReview`,
      itemReviewed    : { '@id': `${pageUrlFull}#product` },
      reviewBody      : reviewData.reviewBody, 
      reviewRating    : {
        '@type'    : 'Rating',
        ratingValue : reviewData.ratingValue.toString(),
        bestRating  : '10',
        worstRating : '1',
      },
      author : { '@type': 'Person', 'name': reviewData.author.name, 'url': `${siteUrl}${reviewData.author.fullBioLink}` },
      publisher : { '@type' : 'Organization', name : siteName, logo : { '@type': 'ImageObject', url: `${siteUrl}/images/logo/your-logo-schema.png` } },
      datePublished   : publishDate,
      dateModified    : updateDate,
    },
    { '@type': 'WebPage', 
      '@id': pageUrlFull, url: pageUrlFull, name: reviewData.title, description: reviewData.description,
      breadcrumb : { '@id': `${pageUrlFull}#breadcrumbs` },
    },
    { '@type': 'BreadcrumbList',
      '@id': `${pageUrlFull}#breadcrumbs`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: siteName, item: siteUrl },
        { '@type': 'ListItem', position: 2, name: 'Credit Card Reviews', item: `${siteUrl}/reviews` }, 
        { '@type': 'ListItem', position: 3, name: `${reviewData.cardName} Review`, item: pageUrlFull },
      ],
    },
    { '@type': 'FAQPage',
      mainEntity: faqsContent.map(faq => ({
        '@type': 'Question', name: faq.q,
        acceptedAnswer: {  '@type': 'Answer', text: faq.a.replace(/\[CITE:(\d+)\]/g, '').replace(/<[^>]*>/g, '') } 
      })),
    },
  ],
};

const ratingCriteria = [
    'Base Cash Back Rate (1.5%)',
    'Annual Fee Value ($39)',
    'Credit-Building Features (Automatic Reviews)',
    'Bonus Rewards Rate (5% on Capital One Travel)',
    'Redemption Flexibility & No Minimums',
    'No Foreign Transaction Fees Benefit',
    'Approval Odds for Fair Credit',
    'Digital Tools & App Experience (Eno, CreditWise)',
    'Customer Service & Support Options',
    'Overall Value vs. Competitor Credit-Builder Cards',
];

const tocSections = [
    { id: 'section-snapshot', title: '1. QuicksilverOne At-a-Glance' },
    { id: 'section-who-for', title: '2. Who is the QuicksilverOne Really For?' },
    { id: 'section-earning', title: '3. Earning Cash Back: The 1.5% Core Appeal' },
    { id: 'section-annual-fee', title: '4. Is the $39 Annual Fee Worth It?' },
    { id: 'section-credit-building', title: '5. A Tool for Your Credit Journey' },
    { id: 'section-benefits', title: '6. Key Features & Security Tools' },
    { id: 'section-competitors', title: '7. Head-to-Head: QuicksilverOne vs. The Competition' },
    { id: 'section-pros-cons', title: '8. Pros & Cons: Is QuicksilverOne a Good Fit?'},
    { id: 'section-final-verdict', title: '9. Final Verdict: Our Expert Take for 2025' },
    { id: 'section-faqs-jump', title: '10. Frequently Asked Questions' },
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
      // ... same cleanup logic
    };
  }, []);
  return (<div ref={containerRef} className={styles.draggableScrollContainer}>{children}</div>);
}

/* ──────────────────────────────
    MAIN COMPONENT
    ────────────────────────────── */
function CapitalOneQuicksilverOneReviewPage() {
  const [showRatingInfo, setShowRatingInfo] = useState(false);
  const [showAuthorBioTooltip, setShowAuthorBioTooltip] = useState(false);
  const authorRef = useRef(null);
  const authorTooltipRef = useRef(null);
  const ratingTooltipRef = useRef(null);
  
  // Handlers for tooltips (handleIconClick, handleAuthorMouseEnter, etc.)
  // These can be copied directly from the template as they are generic
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

  // --- Data for Tables & Content ---
  const summaryBoxData = { 
    annualFee: `<a href="${reviewData.ratesFeesLink}" target="_blank" rel="noopener noreferrer sponsored">$${reviewData.annualFee}</a> [CITE:1]`,
    topEarning: `Unlimited 1.5% cash back, plus <a href="${reviewData.source2Url}" target="_blank" rel="noopener noreferrer sponsored">5% on hotels/rental cars</a> via Capital One Travel [CITE:2].`,
    keyPerks: `<a href="${reviewData.ratesFeesLink}" target="_blank" rel="noopener noreferrer sponsored">No foreign transaction fees</a>, automatic credit line reviews [CITE:1].`,
    bestFor: "The credit-builder who wants simple, reliable rewards without a security deposit."
  };
  
  const keyFeaturesTableData = [
    { feature: "Annual Fee", details: `<a href="${reviewData.ratesFeesLink}" target="_blank" rel="noopener noreferrer sponsored">$39</a> [CITE:1]` },
    { feature: "Rewards Rate", details: "Unlimited 1.5% cash back on every purchase" },
    { feature: "Bonus Rewards", details: `Unlimited 5% cash back on hotels & rental cars via <a href="${reviewData.source2Url}" target="_blank" rel="noopener noreferrer sponsored">Capital One Travel</a> [CITE:2]` },
    { feature: "Credit Required", details: "Fair / Average" },
    { feature: "Key Perk", details: "Automatic credit line reviews in as little as 6 months [CITE:1]" },
    { feature: "Foreign Fees", details: "None [CITE:1]" },
  ];

  const competitorsTableData = [
      { name: "Capital One QuicksilverOne", fee: "$39 [CITE:1]", rewards: "1.5% flat-rate", feature: "Automatic credit line reviews" },
      { name: "Discover it® Secured", fee: "$0 [CITE:5]", rewards: "2% at Gas/Restaurants; 1% other", feature: "Cashback Match first year" },
      { name: "Petal® 2 Visa®", fee: "$0 [CITE:6]", rewards: "1% up to 1.5% back", feature: "No fees of any kind" },
      { name: "Upgrade Cash Rewards Visa®", fee: "$0 [CITE:7]", rewards: "1.5% back (paid as you pay)", feature: "Functions like a predictable loan" },
  ];

  const sectionContent = {
    'section-who-for': `
      <p>The Capital One QuicksilverOne is tailored for a specific type of consumer. Does one of these profiles sound like you?</p>
      <ul>
        <li><strong>The Credit Rebuilder:</strong> You’ve hit a few financial bumps and are now focused on improving your fair credit score. For you, a card that reports to all three major credit bureaus and offers automatic credit line reviews is a game-changer [CITE:1].</li>
        <li><strong>The Credit Newbie:</strong> With a limited credit history (a "thin file"), getting approved for a rewards card can be tough. The QuicksilverOne serves as an accessible entry point to establish your credit history while earning cash back.</li>
        <li><strong>The Simplicity Seeker:</strong> You want to earn rewards without the headache of tracking rotating categories. The QuicksilverOne’s flat-rate 1.5% cash back on everything is a perfect, no-fuss solution.</li>
      </ul>
      <p>This card isn't for those who carry a high balance—the APR is steep [CITE:1]. If you have excellent credit, you can likely find a no-annual-fee card with higher rewards.</p>
    `,
    'section-earning': `
      <p>The core of the QuicksilverOne’s appeal is its simple system that offers <strong>unlimited 1.5% cash back on every single purchase, every day</strong> [CITE:1]. This setup removes all the complexity. There are no spending categories to memorize or quarterly offers to activate.</p>
      <p>A huge advantage is that your cash back never expires for the life of the account. When it’s time to redeem, you can get your rewards as a statement credit or a check, with no minimum redemption amount.</p>
      <p>Beyond the everyday 1.5% rate, the QuicksilverOne offers a fantastic accelerator for your travel fund: <strong>unlimited 5% cash back on hotels and rental cars</strong> booked through Capital One Travel [CITE:2]. For a card in the fair credit category, a 5% return on travel is a really welcome perk.</p>
    `,
    'section-annual-fee': `
      <p>Is the $39 annual fee worth it? Let’s do the math. At a 1.5% cash-back rate, you’d need to spend <strong>$2,600 per year (about $217 per month)</strong> to earn $39 in cash back, effectively canceling out the fee.</p>
      <p>Here’s when paying the fee makes sense:</p>
      <ul>
        <li>You spend more than $2,600 a year on the card.</li>
        <li>You travel internationally and want to avoid the typical 3% foreign transaction fee [CITE:1].</li>
        <li>You value the credit-building features as a worthwhile investment in your financial future.</li>
      </ul>
      <p>Think of the annual fee as the cost of entry for a feature-rich card at a time when other credit options may be limited.</p>
    `,
    'section-credit-building': `
      <p>This is where the QuicksilverOne truly excels. It’s designed to be a partner in your financial progress.</p>
      <ul>
        <li><strong>Automatic Credit Line Reviews:</strong> This is the standout feature. After as little as six months of responsible use (like making on-time payments), Capital One will automatically consider you for a higher credit line [CITE:1]. A higher limit can lower your credit utilization ratio, a major factor in your credit score.</li>
        <li><strong>Reports to All 3 Bureaus:</strong> Capital One reports your payment history to Equifax, Experian, and TransUnion. This ensures your responsible habits are seen and recorded.</li>
        <li><strong>CreditWise® from Capital One:</strong> You get free access to CreditWise, a powerful tool that lets you monitor your credit score and see what’s affecting it [CITE:3].</li>
      </ul>
    `,
    'section-benefits': `
      <p>Beyond rewards, the QuicksilverOne is packed with security and convenience features.</p>
      <ul>
        <li><strong>$0 Fraud Liability:</strong> You’re not responsible for unauthorized charges if your card is lost or stolen.</li>
        <li><strong>Security Alerts & Card Lock:</strong> Get instant alerts for suspicious activity and easily lock your card from the mobile app if it’s misplaced.</li>
        <li><strong>Eno® Virtual Card Numbers:</strong> Capital One’s intelligent assistant, Eno, can generate unique virtual card numbers for online shopping, keeping your actual card number private and secure [CITE:8].</li>
        <li><strong>Autopay:</strong> Set up automatic payments to ensure you never miss a due date, which is crucial for building credit and avoiding late fees.</li>
      </ul>
    `,
     'section-competitors': `
      <p>The fair credit market includes a mix of unsecured cards (like QuicksilverOne) and secured cards. The QuicksilverOne’s main trade-off is its $39 annual fee in exchange for a strong, flat-rate rewards program and no need for a deposit. Here's how it compares.</p>
    `,
    'section-pros-cons': `
      <p>This card is a great fit for specific financial goals.</p>
      <p><strong>You're a perfect match for the QuicksilverOne if...</strong></p>
      <ul>
        <li>You have fair or average credit and want to build a positive history.</li>
        <li>You want an unsecured card without needing a security deposit.</li>
        <li>You appreciate simple, flat-rate cash back without tracking categories.</li>
        <li>You travel internationally and want to avoid foreign transaction fees [CITE:1].</li>
      </ul>
      <p><strong>You might want to look elsewhere if...</strong></p>
      <ul>
        <li>You have excellent credit (you can qualify for a no-fee card with better rewards).</li>
        <li>You tend to carry a balance (the APR is high) [CITE:1].</li>
        <li>You spend very little annually (less than $2,600), making the fee hard to offset.</li>
      </ul>
    `,
    'section-final-verdict': `
      <p>The <strong>Capital One QuicksilverOne</strong> is a thoughtfully designed and highly effective tool for its intended audience. It successfully bridges the gap for those with fair credit, offering the experience of a genuine rewards card while providing a clear path to a better financial future.</p>
      <p>Its primary strengths—unlimited 1.5% cash back, automatic credit line reviews, and no foreign transaction fees—are a powerful combination in the credit-building space [CITE:1]. The card’s main hurdles are its $39 annual fee and high APR. However, for the user who pays their balance in full and spends at least $217 a month, the fee becomes a non-issue.</p>
      <p><strong>Final take:</strong> If you have fair credit and are serious about improving it, the QuicksilverOne is one of the best unsecured cards you can get. Its value is not just in the cash back you earn, but in the upward momentum it can provide to your credit score.</p>
    `,
  };

  return (
    <div>
      <Head>
        <title>{reviewData.title} - {siteName}</title>
        <meta name="description" content={reviewData.description} />
        <meta name="keywords" content={reviewData.keywords} />
        <link rel="canonical" href={pageUrlFull} />
        {/* All other Head tags from the template */}
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
                     >
                       <Image src={reviewData.author.imageUrl} alt={`${reviewData.author.name} headshot`} width={reviewData.author.imageWidth} height={reviewData.author.imageHeight} className={styles.authorImageSmall} priority />
                        <div className={styles.authorInfoBlock}>
                            <div className={styles.authorNameLine}><span className={styles.authorName}>{reviewData.author.name}</span></div>
                            <span className={styles.authorTitle}>{reviewData.author.title}</span>
                        </div>
                        {showAuthorBioTooltip && <div className={styles.authorTooltip} ref={authorTooltipRef}>{/* ... Tooltip content ... */}</div>}
                    </div>
                    <p className={styles.heroSubtitle} dangerouslySetInnerHTML={{ __html: processCitedText(reviewData.heroSubtitle) }}></p>
                </div>
                <div className={styles.heroImageContainer}>
                    <div className={styles.cardImageContainer}><Image src={reviewData.imageUrl} alt={reviewData.cardName} width={reviewData.imageWidth} height={reviewData.imageHeight} className={styles.heroImage} priority /></div>
                     <div className={styles.ratingSection}>
                        <span className={styles.tciRating}>
                             <button type="button" className={styles.infoIconButton} onClick={handleIconClick}><svg>...</svg></button>
                             {siteName} Rating: <strong>{reviewData.ratingValue.toFixed(1)}</strong>/10
                             {showRatingInfo && (<RatingTooltip ref={ratingTooltipRef} ratingValue={reviewData.ratingValue} ratingCriteria={ratingCriteria} onClose={() => setShowRatingInfo(false)} />)}
                        </span>
                        <div className={styles.starRating} title={`Rated ${reviewData.ratingValue} out of 10 stars`}>★★★★★<span className={styles.filledStars} style={{ '--rating': `${(reviewData.ratingValue / 10) * 100}%` }}>★★★★★</span></div>
                    </div>
                </div>
            </section>
            
            <div className={styles.reviewContainer}>
              <article>
                 <header className={styles.reviewHeader}>
                    <div className={styles.summaryBox}>
                        <h2 className={styles.summaryBoxTitle}>{reviewData.cardName}: Key Insights</h2>
                        <div className={styles.summaryGrid}>
                            <div className={styles.summaryItem}><span className={styles.summaryIcon}><IconCheck /></span><span className={styles.summaryLabel}>Annual Fee:</span><span className={styles.summaryValue} dangerouslySetInnerHTML={{ __html: processCitedText(summaryBoxData.annualFee) }}></span></div>
                            <div className={styles.summaryItem}><span className={styles.summaryIcon}><IconStar /></span><span className={styles.summaryLabel}>Top Earning:</span><span className={styles.summaryValue} dangerouslySetInnerHTML={{ __html: processCitedText(summaryBoxData.topEarning) }}></span></div>
                            <div className={styles.summaryItem}><span className={styles.summaryIcon}><IconPlus /></span><span className={styles.summaryLabel}>Key Perks:</span><span className={styles.summaryValue} dangerouslySetInnerHTML={{ __html: processCitedText(summaryBoxData.keyPerks) }}></span></div>
                             <div className={styles.summaryItem} data-full-width="true"><span className={styles.summaryIcon}><IconPlane /></span><span className={styles.summaryLabel}>Best For:</span><span className={styles.summaryValue} dangerouslySetInnerHTML={{ __html: processCitedText(summaryBoxData.bestFor) }}></span></div>
                        </div>
                    </div>
                </header>

                {tocSections.map(section => {
                    if (section.id === 'section-snapshot') {
                        return (
                             <section key={section.id} id={section.id} className={styles.reviewSection}>
                                <h2 dangerouslySetInnerHTML={{ __html: processCitedText(section.title) }}></h2>
                                <DraggableTableWrapper>
                                    <div className={styles.tableContainer}>
                                        <table className={`${styles.statsTable} ${styles.highlightTable}`}>
                                            <thead><tr><th>Feature</th><th>Details</th></tr></thead>
                                            <tbody>
                                                {keyFeaturesTableData.map((item, index) => (
                                                    <tr key={index}><td data-label="Feature">{item.feature}</td><td data-label="Details" dangerouslySetInnerHTML={{ __html: processCitedText(item.details) }}></td></tr>
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
                                <div dangerouslySetInnerHTML={{ __html: processCitedText(sectionContent[section.id]) }} />
                                <DraggableTableWrapper>
                                     <div className={styles.tableContainer}>
                                        <table className={`${styles.statsTable} ${styles.comparisonTable}`}>
                                            <thead>
                                                <tr><th>Card Name</th><th>Annual Fee</th><th>Rewards Rate</th><th>Key Feature</th></tr>
                                            </thead>
                                            <tbody>
                                                {competitorsTableData.map((card, index) => (
                                                    <tr key={index}>
                                                        <td data-label="Card Name" dangerouslySetInnerHTML={{ __html: processCitedText(card.name) }}></td>
                                                        <td data-label="Annual Fee" dangerouslySetInnerHTML={{ __html: processCitedText(card.fee) }}></td>
                                                        <td data-label="Rewards Rate" dangerouslySetInnerHTML={{ __html: processCitedText(card.rewards) }}></td>
                                                        <td data-label="Key Feature" dangerouslySetInnerHTML={{ __html: processCitedText(card.feature) }}></td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </DraggableTableWrapper>
                            </section>
                        )
                    } else if (section.id === 'section-faqs-jump') {
                        return null; // Rendered later
                    }
                    
                    return (
                        <section key={section.id} id={section.id} className={styles.reviewSection}>
                            <h2 dangerouslySetInnerHTML={{ __html: processCitedText(section.title) }}></h2>
                            <div dangerouslySetInnerHTML={{ __html: processCitedText(sectionContent[section.id] || '') }} />
                        </section>
                    );
                })}
                
                 <section id="section-faqs-jump" className={`${styles.reviewSection} ${styles.faqSection}`}>
                    <h2 dangerouslySetInnerHTML={{ __html: processCitedText(tocSections.find(s => s.id === 'section-faqs-jump').title) }}></h2>
                    <div className={styles.faqContainer}>
                        {faqsContent.map((faq, index) => (
                            <details key={index} className={styles.faqItem}>
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

export default CapitalOneQuicksilverOneReviewPage;