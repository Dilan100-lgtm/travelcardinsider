/* ------------------------------------------------------------------
    File:  pages/reviews/delta-skymiles-platinum-amex-review.js
    Route: https://www.travelcardinsider.com/reviews/delta-skymiles-platinum-amex-review
------------------------------------------------------------------- */

import React, { useState, useEffect, useCallback, useRef } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import styles from '../../styles/ReviewPage.module.css'; // Assuming same CSS module as the Gold card review

// Helper icons - You would replace these with your actual SVG component imports
const IconGift = () => '🎁';
const IconStar = () => '⭐';
const IconCheck = () => '✔️';
const IconPlus = () => '🎯';
const IconPlane = () => '✈️';
const IconDollar = () => '$';
const IconX = () => '❌';


// DYNAMIC COMPONENT IMPORTS
const RatingTooltip = dynamic(() => import('../../components/RatingTooltip'), { ssr: false, loading: () => null });
const TableOfContents = dynamic(() => import('../../components/TableOfContents'), { ssr: false });


/* ------------------------------------------------------------------
    COMPONENT: DraggableTableWrapper for mobile-friendly tables
------------------------------------------------------------------- */
function DraggableTableWrapper({ children }) {
  const containerRef = useRef(null);
  useEffect(() => {
    if (typeof window === 'undefined' || window.innerWidth >= 768) return;
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
    CONSTANTS & STATIC DATA
    ────────────────────────────── */
const siteName = 'Travelcardinsider';
const siteUrl = 'https://www.travelcardinsider.com'; // Replace with your actual site URL
const pagePath = '/reviews/delta-skymiles-platinum-amex-review';
const pageUrlFull = `${siteUrl}${pagePath}`;
const publishDate = '2025-07-11'; // Current date or actual publish date
const updateDate = '2025-07-11';  // Current date or actual update date

const reviewDataNew = {
  cardName        : 'Delta SkyMiles® Platinum American Express Card',
  title           : 'Delta Platinum Amex Review (2025): The Ultimate Delta Loyalist Card?',
  description     : 'In-depth 2025 review of the Delta SkyMiles® Platinum Amex. Explore the Companion Certificate, MQD Headstart, TakeOff 15, statement credits, and the $350 annual fee. Is it the best card for Delta flyers?',
  keywords        : 'Delta Platinum Amex review, Delta SkyMiles Platinum, Amex Delta Platinum, Companion Certificate, MQD Headstart, TakeOff 15, Delta credit card, airline credit card review 2025',
  author: { // Placeholder: UPDATE ALL AUTHOR DETAILS AS NEEDED
      name: 'Dilan Madushanka',
      title: 'Founder & Lead Editor',
      imageUrl: '/WhatsApp Image 2025-05-12 at 4.09.58 PM.jpeg',
      imageWidth: 40,
      imageHeight: 40,
      tooltipImageUrl: '/WhatsApp Image 2025-05-12 at 4.09.58 PM.jpeg',
      tooltipImageWidth: 60,
      tooltipImageHeight: 60,
      expertise: [
          'Airline Co-branded Cards',
          'Airline & Hotel Loyalty Programs',
          'Credit Card Rewards Optimization',
          'Delta SkyMiles Program',
          'American Express Cards'
      ],
      bioSnippet: 'Dilan Madushanka is the founder and lead editor of Travelcardinsider, dedicated to demystifying credit cards and uncovering their real-world value for smarter travel and rewards.',
      fullBioLink: '/author/dilan-madushanka',
      socialLinks: {
          linkedin: 'https://www.linkedin.com/in/dilan-madushanka-b65293365',
          twitter: 'https://x.com/team_dilan',
          email: 'team@travelcardinsider.com'
      }
  },
  siteName: siteName,
  imageUrl        : '/delta-platinum-card.png', // Placeholder: Replace with actual Delta Platinum card image URL
  imageWidth      : 1024,
  imageHeight     : 644,
  ratingValue     : 8.5,  // Placeholder - UPDATE AS NEEDED based on your methodology
  ratingCount     : 312,  // Placeholder - UPDATE AS NEEDED
  reviewBody      : 'Our editors evaluate the Delta SkyMiles® Platinum American Express Card based on its core airline loyalty benefits, including the annual Companion Certificate, MQD Headstart for elite status, TakeOff 15 discount, rewards structure, statement credits, the annual fee, and its overall value for dedicated Delta Air Lines flyers.',
  aprRange        : '20.24% to 29.24% variable', // From your text
  annualFee       : 350,
  applyLink       : 'https://www.americanexpress.com/us/credit-cards/card/delta-skymiles-platinum-american-express-card/',
  ratesLink       : 'https://www.americanexpress.com/us/credit-cards/card/delta-skymiles-platinum-american-express-card/rates-and-fees',
  officialLinks: {
    cardPage: 'https://www.americanexpress.com/us/credit-cards/card/delta-skymiles-platinum-american-express-card/',
    companionCertificate: 'https://www.delta.com/us/en/skymiles/airline-credit-cards/companion-certificate',
    medallionProgram: 'https://www.delta.com/us/en/skymiles/medallion-program/how-to-qualify',
    takeOff15: 'https://www.delta.com/us/en/skymiles/airline-credit-cards/takeoff-15',
    cardRewards: 'https://www.americanexpress.com/us/credit-cards/card/delta-skymiles-platinum-american-express-card/benefits',
    benefitsGuide: 'https://www.americanexpress.com/us/credit-cards/card/delta-skymiles-platinum-american-express-card/benefits',
    baggageInfo: 'https://www.delta.com/us/en/baggage/overview',
    globalEntryPreCheck: 'https://global.americanexpress.com/card-benefits/detail/global-entry-or-tsa-precheck-fee-credit/delta-platinum',
    skyClubAccess: 'https://www.delta.com/us/en/delta-sky-club/access',
    businessCard: 'https://www.americanexpress.com/us/credit-cards/business/business-credit-cards/delta-skymiles-platinum-business-american-express-card/'
  },
  sku             : 'AMEX-DELTA-PLAT-TCI-2025',
  mpn             : 'AMEXDELTAPLAT',
  h1Content       : "Delta Platinum Amex: A Deep Dive into the Ultimate Delta Loyalist's Card",
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
        reviewCount : '1',
      },
      offers: {
        '@type'            : 'Offer',
        url                : reviewDataNew.applyLink,
        priceCurrency      : 'USD',
        price              : reviewDataNew.annualFee.toString(),
        priceValidUntil    : '2026-12-31',
        itemCondition      : 'https://schema.org/NewCondition',
        availability       : 'https://schema.org/InStock',
        seller: { '@type': 'Organization', name: 'American Express' },
      },
      review: { '@id': `${pageUrlFull}#editorReview` },
    },
    {
      '@type'         : 'Review',
      '@id'           : `${pageUrlFull}#editorReview`,
      name            : reviewDataNew.title,
      itemReviewed    : { '@id': `${pageUrlFull}#product` },
      reviewBody      : reviewDataNew.reviewBody,
      reviewRating    : {
        '@type'    : 'Rating',
        ratingValue : reviewDataNew.ratingValue.toString(),
        bestRating  : '10',
        worstRating : '1',
      },
      author          : { '@type': 'Person', 'name': reviewDataNew.author.name, 'url': `${siteUrl}${reviewDataNew.author.fullBioLink}` },
      publisher       : { '@type' : 'Organization', name: siteName, logo    : { '@type': 'ImageObject', url: `${siteUrl}/images/logo/your-logo-schema.png` } },
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
       author: { '@type': 'Person', 'name': reviewDataNew.author.name, 'url': `${siteUrl}${reviewDataNew.author.fullBioLink}` },
    },
    { '@type': 'ImageObject', '@id': `${pageUrlFull}#primaryImage`, url: `${siteUrl}${reviewDataNew.imageUrl}`, width: reviewDataNew.imageWidth, height: reviewDataNew.imageHeight, caption: reviewDataNew.cardName, },
    {
      '@type': 'BreadcrumbList', '@id': `${pageUrlFull}#breadcrumbs`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: siteName, item: siteUrl },
        { '@type': 'ListItem', position: 2, name: 'Credit Card Reviews', item: `${siteUrl}/reviews` },
        { '@type': 'ListItem', position: 3, name: `${reviewDataNew.cardName} Review`, item: pageUrlFull },
      ],
    },
    {
      '@type'    : 'FAQPage', '@id'      : `${pageUrlFull}#faqs`,
      mainEntity: [
        { '@type': 'Question', name: 'When do I get my first Companion Certificate?', acceptedAnswer: { '@type': 'Answer', text: "You receive your first Companion Certificate after your first card anniversary, upon renewal. It is not available in the first year of card membership." } },
        { '@type': 'Question', name: 'Does the Delta Platinum Amex get me into the Sky Club?', acceptedAnswer: { '@type': 'Answer', text: "No. The Delta SkyMiles® Platinum American Express Card does not offer complimentary Delta Sky Club access. This perk is reserved for the more premium Delta SkyMiles® Reserve American Express Card." } },
        { '@type': 'Question', name: 'Is the $350 annual fee worth it?', acceptedAnswer: { '@type': 'Answer', text: "It can be highly worth it, but only if you are a frequent Delta flyer who can consistently maximize the annual Companion Certificate. Additional value from statement credits and the free checked bag benefit also helps offset the fee." } },
        { '@type': 'Question', name: 'How much are Delta SkyMiles worth?', acceptedAnswer: { '@type': 'Answer', text: "Valuations typically hover around 1.2 to 1.3 cents per mile. However, the card's TakeOff 15 benefit effectively increases their value by 15% when you redeem them for Delta-operated award flights." } },
        { '@type': 'Question', name: 'Can I get complimentary upgrades with this card?', acceptedAnswer: { '@type': 'Answer', text: "Cardholders are added to the complimentary upgrade list, but their priority is below all Delta Medallion members and Delta SkyMiles® Reserve cardholders. Therefore, the chances of receiving an upgrade are generally low but not impossible on less popular routes." } }
      ],
    },
    { '@type' : 'Organization', '@id'   : `${siteUrl}#website`, name    : siteName, url     : siteUrl, logo: { '@type': 'ImageObject', url: `${siteUrl}/images/logo/your-logo-schema.png` }, sameAs: ["https://twitter.com/YourTravelCardInsiderTwitterHandle"] },
  ],
};


const ratingCriteriaOriginal = [
    'Value of Companion Certificate',
    'Effectiveness of MQD Headstart & Boost for Status',
    'TakeOff 15 Benefit Value',
    'Rewards Earning Rates (Delta/Hotels/Restaurants)',
    'Utility of Statement Credits (Delta Stays, Rideshare, Resy)',
    'Welcome Offer Value & Attractiveness',
    'Annual Fee ($350) vs. Overall Benefits',
    'Day-of-Travel Perks (Checked Bags, Boarding)',
    'Absence of Airport Lounge Access',
    'Overall Value for a Delta-Loyal Traveler',
];

const tocSections = [
    { id: 'section-intro', title: 'Is This the Ultimate Card for the Delta Devotee?' },
    { id: 'section-1', title: '1. Card Snapshot & "Best For" Tagline' },
    { id: 'section-2', title: '2. The Current Welcome Offer: A 90,000-Mile Head Start' },
    { id: 'section-3', title: '3. The Crown Jewel: Unlocking the Annual Companion Certificate' },
    { id: 'section-4', title: '4. The Status Chaser’s Secret Weapon: MQD Headstart & Boost' },
    { id: 'section-5', title: '5. TakeOff 15: A Permanent 15% Discount on Award Flights' },
    { id: 'section-6', title: '6. Earning SkyMiles: A Deep-Dive into the Rewards Structure' },
    { id: 'section-7', title: '7. Statement-Credit Strategy: Offsetting the Annual Fee' },
    { id: 'section-8', title: '8. Real-World Value: A Calculated Example' },
    { id: 'section-9', title: '9. Elevating Your Journey: Day-of-Travel Perks' },
    { id: 'section-10', title: '10. Essential Travel & Purchase Protections' },
    { id: 'section-11', title: '11. The Missing Piece: What About Airport Lounge Access?' },
    { id: 'section-12', title: '12. Detailed User Profiling: Who Should Get This Card?' },
    { id: 'section-13', title: '13. A Balanced View: The Definitive Pros and Cons' },
    { id: 'section-14', title: '14. How It Stacks Up: Competitive Card Comparison' },
    { id: 'section-15', title: '15. Voices from the Real World: User Testimonials' },
    { id: 'section-16', title: '16. The Full Spectrum of Rates & Fees' },
    { id: 'section-17', title: '17. Card-Specific Frequently Asked Questions (FAQs)' },
    { id: 'section-18', title: '18. The Business Traveler\'s Angle' },
    { id: 'section-19', title: '19. Final Verdict: Is the Delta Platinum Your Ticket to More?' },
    { id: 'section-eat', title: 'Our E-A-T Commitment' },
];


/* ──────────────────────────────
    MAIN PAGE COMPONENT
    ────────────────────────────── */
function DeltaPlatinumAmexReviewPage() {
  const [showRatingInfo, setShowRatingInfo] = useState(false);
  const authorRef = useRef(null);
  const ratingTooltipRef = useRef(null);

  // Simplified handlers for tooltips
  const handleIconClick = useCallback((event) => {
      event.preventDefault();
      event.stopPropagation();
      setShowRatingInfo(prevState => !prevState);
  }, []);

  useEffect(() => {
      function handleClickOutside(event) {
          if (showRatingInfo && ratingTooltipRef.current && !ratingTooltipRef.current.contains(event.target) && !event.target.closest(`.${styles.infoIconButton}`)) {
               setShowRatingInfo(false);
          }
      }
      if (showRatingInfo) { document.addEventListener("mousedown", handleClickOutside); }
      return () => { document.removeEventListener("mousedown", handleClickOutside); };
  }, [showRatingInfo, ratingTooltipRef]);

  const summaryBoxData = {
    welcomeOffer: "Earn 90,000 Bonus Miles after you spend $4,000 in eligible purchases on your new Card in your first 6 months.",
    annualFee: `$${reviewDataNew.annualFee}`,
    topEarning: "3X on Delta & hotels, 2X on restaurants & U.S. supermarkets.",
    keyPerk: "Annual Main Cabin Companion Certificate upon renewal.",
    statusBoost: "Annual $2,500 MQD Headstart toward Medallion Status.",
    bestFor: "The Delta-loyal duo or family traveler who values a shortcut to Medallion Status and can consistently leverage the annual Companion Certificate."
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
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content={siteName} />
        <meta property="og:title" content={reviewDataNew.title} />
        <meta property="og:description" content={reviewDataNew.description} />
        <meta property="og:url" content={pageUrlFull} />
        <meta property="og:image" content={`${siteUrl}${reviewDataNew.imageUrl}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@TravelInsider" />
        <meta name="twitter:creator" content={`@${reviewDataNew.author.socialLinks.twitter.split('/').pop()}`} />
        <meta name="twitter:title" content={reviewDataNew.title} />
        <meta name="twitter:description" content={reviewDataNew.description} />
        <meta name="twitter:image" content={`${siteUrl}${reviewDataNew.imageUrl}`} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredDataOptimized) }} />
      </Head>

      <main>
        <div className={styles.reviewPageLayout}>
          <div className={styles.mainContentArea}>
            <section className={styles.heroSection}>
              <div className={styles.heroTextContainer}>
                <h1 className={styles.heroTitle}>{reviewDataNew.h1Content}</h1>
                 <div className={styles.authorBioContainer} ref={authorRef}>
                    <Image src={reviewDataNew.author.imageUrl} alt={`${reviewDataNew.author.name} headshot`} width={reviewDataNew.author.imageWidth} height={reviewDataNew.author.imageHeight} className={styles.authorImageSmall} priority />
                    <div className={styles.authorInfoBlock}>
                        <div className={styles.authorNameLine}><span className={styles.authorPrefix}>By</span> <span className={styles.authorName}>{reviewDataNew.author.name}</span></div>
                        <span className={styles.authorTitle}>{reviewDataNew.author.title}</span>
                        <time dateTime={updateDate} className={styles.authorLastEdited}>Last updated: {new Date(updateDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
                    </div>
                </div>
                <p className={styles.heroSubtitle}>
                  In the crowded skies of travel rewards, airline-specific cards must prove their worth. The Delta Platinum Amex presents a fundamental question: is it the perfect co-pilot for the dedicated Delta traveler, or does it get lost in the clouds? Let's dive deep.
                </p>
                <div className={styles.heroCtaContainer}>
                  <div>
                    <a href={reviewDataNew.applyLink} target="_blank" rel="noopener noreferrer sponsored" className={`${styles.applyNowButton} ${styles.heroApplyButton}`}>Apply Securely Now</a>
                    <span className={styles.heroApplyButtonDisclaimer}>on American Express's official site</span>
                  </div>
                  <Link href="#section-1" legacyBehavior><a className={styles.heroSecondaryLink}>View Key Features</a></Link>
                </div>
              </div>
              <div className={styles.heroImageContainer}>
                <div className={styles.cardImageContainer}>
                  <Image src={reviewDataNew.imageUrl} alt={reviewDataNew.cardName} width={reviewDataNew.imageWidth} height={reviewDataNew.imageHeight} className={styles.heroImage} priority />
                </div>
                <div className={styles.ratingSection}>
                  <span className={styles.tciRating}>
                    <button type="button" className={styles.infoIconButton} aria-label="Rating Information" onClick={handleIconClick} aria-expanded={showRatingInfo}>
                      <svg aria-hidden="true" focusable="false" className={styles.infoIcon} viewBox="0 0 16 16"><path fillRule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/><path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/></svg>
                    </button>
                    {siteName} Rating: <strong>{reviewDataNew.ratingValue.toFixed(1)}</strong>/10
                    {showRatingInfo && (
                      <RatingTooltip ref={ratingTooltipRef} ratingValue={reviewDataNew.ratingValue} ratingCriteria={ratingCriteriaOriginal} onClose={() => setShowRatingInfo(false)} />
                    )}
                  </span>
                  <div className={styles.starRating} title={`Rated ${reviewDataNew.ratingValue} out of 10 stars`}>★★★★★<span className={styles.filledStars} style={{ '--rating': `${(reviewDataNew.ratingValue / 10) * 100}%` }}>★★★★★</span></div>
                </div>
              </div>
            </section>

             <div className={styles.reviewContainer}>
              <article>
                <header className={styles.reviewHeader}>
                    <div className={styles.summaryBox}>
                        <h2 className={styles.summaryBoxTitle}>{reviewDataNew.cardName}: Key Insights</h2>
                        <div className={styles.summaryGrid}>
                            <div className={styles.summaryItem}><span className={styles.summaryIcon}><IconGift /></span> <span className={styles.summaryLabel}>Welcome Offer:</span> <span className={styles.summaryValue}>{summaryBoxData.welcomeOffer}</span></div>
                            <div className={styles.summaryItem}><span className={styles.summaryIcon}><IconDollar /></span> <span className={styles.summaryLabel}>Annual Fee:</span> <span className={styles.summaryValue}>{summaryBoxData.annualFee}</span></div>
                            <div className={styles.summaryItem}><span className={styles.summaryIcon}><IconStar /></span> <span className={styles.summaryLabel}>Top Earning:</span> <span className={styles.summaryValue}>{summaryBoxData.topEarning}</span></div>
                            <div className={styles.summaryItem}><span className={styles.summaryIcon}><IconPlane /></span> <span className={styles.summaryLabel}>Key Perk:</span> <span className={styles.summaryValue}>{summaryBoxData.keyPerk}</span></div>
                            <div className={styles.summaryItem}><span className={styles.summaryIcon}><IconPlus /></span> <span className={styles.summaryLabel}>Status Boost:</span> <span className={styles.summaryValue}>{summaryBoxData.statusBoost}</span></div>
                            <div className={styles.summaryItem} data-full-width="true"><span className={styles.summaryIcon}><IconPlus /></span> <span className={styles.summaryLabel}>Best For:</span> <span className={styles.summaryValue}>{summaryBoxData.bestFor}</span></div>
                        </div>
                        <div className={styles.summaryBoxActions}>
                            <a href={reviewDataNew.ratesLink} className={styles.summaryRatesLink} target="_blank" rel="noopener noreferrer sponsored">See Card Rates & Fees</a>
                            {/* You can add a rewards calculator link here if you have one */}
                        </div>
                    </div>
                </header>

                <section id="section-intro" className={styles.reviewSection}>
                  <h2>Is This the Ultimate Card for the Delta Devotee?</h2>
                  <p>In the crowded skies of travel rewards credit cards, airline-specific cards often face a difficult flight path. They must prove their worth against more flexible competitors that offer points transferable to a dozen different partners. The {reviewDataNew.cardName} occupies a unique space in the market. It’s a clear step up from entry-level options but doesn't quite play in the ultra-premium leagues. With a notable ${reviewDataNew.annualFee} annual fee, it presents a fundamental question to any potential cardholder: is this the perfect co-pilot for the dedicated Delta traveler, or does it get lost in the clouds?</p>
                  <p>This card isn't just a piece of plastic; it's a key that promises to unlock a more rewarding travel lifestyle, but one that is tied almost exclusively to the Delta ecosystem. It's designed for a specific kind of traveler—one who values tangible, airline-specific perks like a free travel companion, a clear runway to elite status, and discounts on award flights over the boundless, but often complex, world of transferable points. In this deep dive, we'll navigate every aspect of the Delta Platinum card—from its celebrated perks to its glaring omissions—to help you decide if it deserves a place in your wallet.</p>
                </section>

                <section id="section-1" className={styles.reviewSection}>
                    <h2>1. Card Snapshot &amp; &quot;Best For&quot; Tagline</h2>
                    <p>Here’s a quick look at the essential details for the {reviewDataNew.cardName}:</p>
                    <DraggableTableWrapper>
                        <div className={styles.tableContainer}>
                            <table className={`${styles.statsTable} ${styles.highlightTable}`}>
                                <tbody>
                                    <tr><td>Card Name:</td><td><strong>{reviewDataNew.cardName}</strong></td></tr>
                                    <tr><td>Welcome Offer:</td><td>{summaryBoxData.welcomeOffer}</td></tr>
                                    <tr><td>Annual Fee:</td><td><strong>${reviewDataNew.annualFee}</strong> (<a href={reviewDataNew.officialLinks.cardPage} target="_blank" rel="noopener noreferrer sponsored">Source</a>)</td></tr>
                                    <tr><td>Key Rewards:</td><td>3X Miles on Delta purchases and hotels. 2X Miles at restaurants worldwide and U.S. supermarkets. 1X on all other eligible purchases.</td></tr>
                                    <tr><td>Standout Perk:</td><td>Annual Main Cabin Companion Certificate upon card renewal.</td></tr>
                                    <tr><td>Credit Needed:</td><td>Good to Excellent.</td></tr>
                                    <tr><td>&quot;Best For&quot; Tagline:</td><td>{summaryBoxData.bestFor}</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </DraggableTableWrapper>
                </section>

                <section id="section-2" className={styles.reviewSection}>
                    <h2>2. The Current Welcome Offer: A 90,000-Mile Head Start</h2>
                    <p>For those considering this card, the journey begins with a compelling welcome offer. New cardmembers can earn 90,000 bonus miles after spending $4,000 on eligible purchases within the first six months of membership. This offer provides a substantial initial boost to your SkyMiles balance.</p>
                    <blockquote className={styles.highlightQuote}>
                        To put this bonus into perspective, leading points and miles valuation sites peg its worth quite high. The Points Guy estimates the 90,000-mile bonus is worth approximately $1,125, valuing each SkyMile at 1.25 cents. Other analyses place the value even higher at $1,170, or 1.3 cents per mile.
                    </blockquote>
                    <p>This upfront value is significant because it effectively covers the card's ${reviewDataNew.annualFee} annual fee for over three years. This generous cushion makes the first year of card membership a low-risk proposition, giving you ample time to explore the card's benefits and determine if it’s a good long-term fit before the annual fee becomes a true out-of-pocket cost.</p>
                </section>

                <section id="section-3" className={styles.reviewSection}>
                    <h2>3. The Crown Jewel: Unlocking the Annual Companion Certificate</h2>
                    <p>At the heart of the Delta Platinum Amex's value proposition lies its most celebrated and potentially lucrative perk: the annual Companion Certificate. This benefit is the primary reason many loyal Delta flyers choose and keep this card year after year.</p>
                    <p>Each year upon renewal (starting in your second year), you receive a certificate for a round-trip Main Cabin flight for a companion traveling with you on the same itinerary. The certificate is valid for flights within the 48 contiguous United States. For residents of Hawaii, Alaska, Puerto Rico, or the U.S. Virgin Islands, it can be used for travel originating from those locations to the contiguous U.S. As a significant enhancement, the certificate is also valid for travel to Mexico, the Caribbean, or Central America. (<a href={reviewDataNew.officialLinks.companionCertificate} target="_blank" rel="noopener noreferrer sponsored">Source: Delta Air Lines, Companion Certificate Terms & Conditions</a>)</p>
                    <p>Of course, it's not entirely free. You are responsible for paying government-imposed taxes and fees on the companion's ticket, capped at $80 for domestic round-trips and up to $250 for round-trip international itineraries. Even with these fees, the potential savings are immense. Using it for a last-minute flight from New York to Los Angeles during a peak travel week, which might cost $700, would save you over $600 after fees. This single use would more than double the value of the card's annual fee.</p>
                </section>

                <section id="section-4" className={styles.reviewSection}>
                  <h2>4. The Status Chaser’s Secret Weapon: MQD Headstart &amp; Boost</h2>
                  <p>Beyond the Companion Certificate, the card's most strategic benefit is its ability to accelerate your journey toward coveted Delta Medallion elite status. The Delta Platinum Amex offers two powerful tools to help you get there faster.</p>
                  <ul className={styles.featureList}>
                    <li><strong>MQD Headstart:</strong> Each year, cardholders automatically receive $2,500 Medallion Qualification Dollars (MQDs) deposited into their SkyMiles account. With Silver Medallion, the first rung of elite status, requiring $5,000 MQDs, this benefit instantly gets you halfway there without setting foot on a plane. (<a href={reviewDataNew.officialLinks.medallionProgram} target="_blank" rel="noopener noreferrer sponsored">Source: Delta Air Lines, SkyMiles Medallion Program</a>)</li>
                    <li><strong>MQD Boost:</strong> For every $20 you spend on your card, you earn $1 MQD. This feature creates a compelling reason to use the card for significant spending. To earn the remaining 2,500 MQDs for Silver status, for instance, a cardholder would need to spend $50,000 on the card.</li>
                  </ul>
                  <p>Furthermore, even without Medallion status, holding the Delta Platinum Amex gets you on the Complimentary Upgrade list, though you will be prioritized after all Medallion Members and Delta SkyMiles® Reserve Card Members.</p>
                </section>

                <section id="section-5" className={styles.reviewSection}>
                    <h2>5. TakeOff 15: A Permanent 15% Discount on Award Flights</h2>
                    <p>For years, travelers have dubbed Delta SkyMiles "SkyPesos," criticizing their unpredictable value. The TakeOff 15 benefit is a direct and powerful counterargument to that narrative.</p>
                    <p>This perk provides a straightforward 15% discount whenever you use miles to book a Delta-operated award flight through delta.com or the Fly Delta app. The discount is applied automatically at checkout. (<a href={reviewDataNew.officialLinks.takeOff15} target="_blank" rel="noopener noreferrer sponsored">Source: American Express, TakeOff 15 Benefit Details</a>) The only caveat is that it doesn't apply to partner-operated flights or the cash portion of a ticket (taxes and fees).</p>
                    <p>The impact of this benefit is more significant than it first appears. It effectively increases the purchasing power of every SkyMile you own, transforming the card from just a tool to earn miles into a tool that makes those miles inherently more valuable.</p>
                </section>
                
                <section id="section-6" className={styles.reviewSection}>
                  <h2>6. Earning SkyMiles: A Deep-Dive into the Rewards Structure</h2>
                   <p>The Delta Platinum Amex features a tiered rewards structure designed to reward spending in key travel and lifestyle categories.</p>
                  <DraggableTableWrapper>
                    <div className={styles.tableContainer}>
                      <table className={`${styles.statsTable} ${styles.earningRatesTable}`}>
                        <thead>
                          <tr>
                            <th>Miles per $1</th>
                            <th>Eligible Purchase Categories</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td data-label="Miles"><strong>3X</strong></td>
                            <td data-label="Categories">On Delta purchases and purchases made directly with hotels.</td>
                          </tr>
                          <tr>
                            <td data-label="Miles"><strong>2X</strong></td>
                            <td data-label="Categories">At restaurants worldwide (including U.S. takeout/delivery) and at U.S. supermarkets.</td>
                          </tr>
                          <tr>
                            <td data-label="Miles"><strong>1X</strong></td>
                            <td data-label="Categories">On all other eligible purchases. (<a href={reviewDataNew.officialLinks.cardRewards} target="_blank" rel="noopener noreferrer sponsored">Source</a>)</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </DraggableTableWrapper>
                  <p>The primary weakness is the base earning rate of 1X mile. This suggests that for optimal value, the Delta Platinum Amex is best used as part of a multi-card strategy: use it for its bonus categories and pair it with a high-yield, flat-rate rewards card for all other spending.</p>
                </section>

                <section id="section-7" className={styles.reviewSection}>
                    <h2>7. Statement-Credit Strategy: Offsetting the Annual Fee</h2>
                    <p>The Delta Platinum Amex offers a suite of annual statement credits that function like a coupon book. If fully maximized, they can provide up to $390 in value each year, more than covering the annual fee. (<a href={reviewDataNew.officialLinks.benefitsGuide} target="_blank" rel="noopener noreferrer sponsored">Source: American Express, Delta SkyMiles Platinum Benefits Guide</a>)</p>
                    <ul className={styles.featureList}>
                        <li><strong>$150 Delta Stays Credit:</strong> Receive up to $150 back annually on prepaid hotels or vacation rentals booked through the Delta Stays portal.</li>
                        <li><strong>$120 Rideshare Credit:</strong> Earn up to $10 back each month on U.S. rideshare purchases with select providers like Uber and Lyft (enrollment required).</li>
                        <li><strong>$120 Resy Credit:</strong> Earn up to $10 back each month on eligible purchases at U.S. restaurants that partner with Resy (enrollment required).</li>
                    </ul>
                    <p>The monthly credits for rideshare and Resy are "use-it-or-lose-it," meaning they don't roll over. Their value depends entirely on your lifestyle.</p>
                </section>
                
                <section id="section-8" className={styles.reviewSection}>
                    <h2>8. Real-World Value: A Calculated Example for the "Savvy Traveler"</h2>
                    <p>To make the card's value tangible, consider a hypothetical year-one scenario for "The Savvy Couple." They live near a Delta hub, take two domestic trips per year, and use the Companion Certificate for one of them.</p>
                    <DraggableTableWrapper>
                        <div className={styles.tableContainer}>
                            <table className={`${styles.statsTable} ${styles.highlightTable}`}>
                                <thead><tr><th>Benefit/Cost</th><th>Calculation</th><th>Year-One Value</th></tr></thead>
                                <tbody>
                                    <tr><td><strong>Value Gained</strong></td><td></td><td></td></tr>
                                    <tr><td>Welcome Offer Value</td><td>90,000 miles @ 1.25 cents/mile</td><td>+$1,125</td></tr>
                                    <tr><td>Companion Certificate Savings</td><td>Based on a $500 flight</td><td>+$500</td></tr>
                                    <tr><td>Free Checked Bags</td><td>2 people x 2 round trips x 1 bag @ $35/bag</td><td>+$140</td></tr>
                                    <tr><td>Delta Stays Credit</td><td>Used for one hotel booking</td><td>+$150</td></tr>
                                    <tr><td>Rideshare Credits</td><td>80% utilization ($10 x 12 mo x 0.8)</td><td>+$96</td></tr>
                                    <tr><td>Resy Credits</td><td>50% utilization ($10 x 12 mo x 0.5)</td><td>+$60</td></tr>
                                    <tr><td><strong>Costs</strong></td><td></td><td></td></tr>
                                    <tr><td>Annual Fee</td><td></td><td>-$350</td></tr>
                                    <tr><td>Companion Ticket Taxes & Fees</td><td>Max domestic fee</td><td>-$80</td></tr>
                                    <tr className={styles.totalRow}><td><strong>Net Year-One Value</strong></td><td></td><td><strong>$1,641</strong></td></tr>
                                </tbody>
                            </table>
                        </div>
                    </DraggableTableWrapper>
                </section>
                
                <section id="section-9" className={styles.reviewSection}>
                    <h2>9. Elevating Your Journey: Day-of-Travel Perks</h2>
                    <p>Beyond the marquee benefits, the card includes practical day-of-travel perks designed to make the airport experience smoother.</p>
                     <ul className={styles.featureList}>
                        <li><strong>First Checked Bag Free:</strong> The primary cardmember and up to eight other passengers on the same reservation get their first checked bag free on Delta flights. (<a href={reviewDataNew.officialLinks.baggageInfo} target="_blank" rel="noopener noreferrer sponsored">Source</a>) For a family of four, this saves $280 on a single round trip.</li>
                        <li><strong>Zone 5 Priority Boarding:</strong> This priority access generally ensures you can find overhead bin space for your carry-on luggage.</li>
                        <li><strong>Fee Credit for Global Entry or TSA PreCheck®:</strong> Receive a statement credit to cover the application fee for Global Entry (up to $120) or TSA PreCheck® (up to $85). (<a href={reviewDataNew.officialLinks.globalEntryPreCheck} target="_blank" rel="noopener noreferrer sponsored">Source</a>)</li>
                        <li><strong>20% Back on In-Flight Purchases:</strong> Receive a 20% savings as a statement credit on eligible in-flight purchases like food and drinks.</li>
                    </ul>
                </section>

                <section id="section-10" className={styles.reviewSection}>
                  <h2>10. Essential Travel & Purchase Protections</h2>
                  <p>Holding the Delta Platinum Amex also provides a safety net of insurance-like benefits that offer significant peace of mind. Key coverages include:</p>
                  <ul className={styles.featureList}>
                      <li>Trip Delay Insurance</li>
                      <li>Baggage Insurance Plan</li>
                      <li>Car Rental Loss and Damage Insurance</li>
                      <li>Purchase Protection</li>
                      <li>Extended Warranty</li>
                      <li>Premium Global Assist® Hotline</li>
                  </ul>
                  <p><small>Coverage is determined by the terms, conditions, and exclusions of the policy and is subject to change. Refer to your Guide to Benefits for details.</small></p>
                </section>

                <section id="section-11" className={styles.reviewSection}>
                    <h2>11. The Missing Piece: What About Airport Lounge Access?</h2>
                    <p>For a card with "Platinum" in its name and a ${reviewDataNew.annualFee} annual fee, its most conspicuous omission is complimentary airport lounge access. The {reviewDataNew.cardName} <strong>does not</strong> provide access to Delta Sky Clubs or any other lounge network. (<a href={reviewDataNew.officialLinks.skyClubAccess} target="_blank" rel="noopener noreferrer sponsored">Source: Delta Air Lines, Sky Club Access Policy</a>)</p>
                    <p>This is a deliberate product segmentation strategy. If complimentary lounge access is a must-have, the Delta Platinum is not the right card for you; the Delta SkyMiles® Reserve American Express Card would be the appropriate choice.</p>
                </section>

                <section id="section-12" className={styles.reviewSection}>
                  <h2>12. Detailed User Profiling: Who Should Get This Card (and Who Shouldn't)</h2>
                   <div className={styles.prosConsContainer}>
                      <div className={styles.prosBox}>
                         <h4 className={styles.shouldConsiderTitle}>Ideal Profiles:</h4>
                          <ul className={styles.featureList}>
                              <li><strong>The Delta Duo:</strong> A couple or pair of friends who fly Delta at least twice a year and can use the Companion Certificate to justify the annual fee.</li>
                              <li><strong>The Status-Seeking Family:</strong> A family living near a Delta hub. The checked bag savings alone are massive, and the MQD boosts help the primary cardholder earn status for the family's benefit.</li>
                              <li><strong>The Aspiring Medallion Member:</strong> A frequent solo traveler close to the next Medallion tier. The MQD Headstart and Boost can be the deciding factor that pushes them over the threshold.</li>
                          </ul>
                      </div>
                      <div className={styles.consBox}>
                         <h4 className={styles.exploreOptionsTitle}>Who Should Pass:</h4>
                          <ul className={styles.featureList}>
                              <li><strong>The Free Agent Flyer:</strong> If you are loyal only to the lowest price, a co-branded card is too restrictive.</li>
                              <li><strong>The Solo Traveler on a Budget:</strong> If you rarely travel with a companion, the card's most valuable perk is rendered useless, making the ${reviewDataNew.annualFee} annual fee very difficult to justify.</li>
                              <li><strong>The Luxury Seeker:</strong> Travelers who consider lounge access a non-negotiable part of the travel experience will be disappointed.</li>
                              <li><strong>The International Road Warrior:</strong> American Express is not as widely accepted internationally as Visa or Mastercard, so you may need a different card for purchases abroad.</li>
                          </ul>
                      </div>
                  </div>
                </section>
                
                <section id="section-13" className={styles.reviewSection}>
                  <h2>13. A Balanced View: The Definitive Pros and Cons</h2>
                  <DraggableTableWrapper>
                    <div className={styles.tableContainer}>
                        <table className={`${styles.statsTable} ${styles.comparisonTable}`}>
                            <thead><tr><th>Pros</th><th>Cons</th></tr></thead>
                            <tbody>
                                <tr><td>Annual Companion Certificate can provide value far exceeding the annual fee.</td><td>$350 annual fee is high for a card without top-tier perks like lounge access.</td></tr>
                                <tr><td>Excellent pathway to Delta Medallion Status via MQD Headstart & MQD Boost.</td><td>No complimentary airport lounge access is a major drawback.</td></tr>
                                <tr><td>Generous welcome offer provides significant upfront value.</td><td>Delta SkyMiles can have unpredictable redemption values due to dynamic pricing.</td></tr>
                                <tr><td>Up to $390 in annual statement credits can offset the fee.</td><td>Monthly statement credits are "use-it-or-lose-it" and may not align with spending.</td></tr>
                                <tr><td>First Checked Bag Free offers substantial savings for groups.</td><td>The base rewards rate of 1X mile on non-bonus spending is uncompetitive.</td></tr>
                                <tr><td>TakeOff 15 provides a 15% discount on Delta award flights.</td><td>The Companion Certificate is only available after the first year, upon renewal.</td></tr>
                            </tbody>
                        </table>
                    </div>
                  </DraggableTableWrapper>
                </section>

                <section id="section-14" className={styles.reviewSection}>
                  <h2>14. How It Stacks Up: Competitive Card Comparison</h2>
                  <p>No card exists in a vacuum. Here’s how the Delta Platinum Amex compares to key competitors.</p>
                    <DraggableTableWrapper>
                        <div className={styles.tableContainer}>
                          <table className={`${styles.statsTable} ${styles.comparisonTable}`}>
                            <thead><tr><th>Feature</th><th>Delta Platinum Amex</th><th>Chase Sapphire Preferred®</th><th>Capital One Venture X</th><th>United℠ Explorer Card</th></tr></thead>
                            <tbody>
                              <tr><td>Annual Fee</td><td><strong>$350</strong></td><td>$95</td><td>$395</td><td>$0 intro, then $95</td></tr>
                              <tr><td>Primary Perk</td><td>Annual Companion Certificate</td><td>$50 annual hotel credit</td><td>$300 annual travel credit</td><td>2 United Club passes/year</td></tr>
                              <tr><td>Status/Lounge</td><td>MQD Headstart & Boost</td><td>Points transfer 1:1</td><td>Unlimited Lounge Access</td><td>Free first checked bag</td></tr>
                            </tbody>
                          </table>
                        </div>
                    </DraggableTableWrapper>
                </section>

                <section id="section-15" className={styles.reviewSection}>
                    <h2>15. Voices from the Real World: User Testimonials</h2>
                    <p>Here’s what real cardholders are saying on public forums, giving you a glimpse into their firsthand experiences.</p>
                     <div className={styles.testimonialContainer}>
                      <blockquote className={styles.testimonialQuote}>
                          <p>&quot;I've been using the Delta SkyMiles Platinum Amex for a short time, and I'm already impressed... The standout benefit for me is the free checked bag perk, which saves me and my husband money every time we fly.&quot;</p>
                          <footer>– The Satisfied Family Traveler</footer>
                      </blockquote>
                      <blockquote className={styles.testimonialQuote}>
                          <p>&quot;Fast forward ten years, and I'm wondering if it still makes sense... the miles are watered down... The Amex card is worthless internationally. Hardly anyone takes it other than major hotel chains.&quot;</p>
                          <footer>– The Skeptical Long-Term User</footer>
                      </blockquote>
                       <blockquote className={styles.testimonialQuote}>
                          <p>&quot;I have it for the companion certificate and I do use the stays credit and monthly rideshare credit. Other than that I never use it... if you do use those 3 benefits then you come out ahead of the annual fee.&quot;</p>
                          <footer>– The Value-Maximizer</footer>
                      </blockquote>
                      <blockquote className={styles.testimonialQuote}>
                          <p>&quot;The recent changes... have made it incredibly easy to get silver... Before applying, I'd determine if it's really going to lift you to the next level or not.&quot;</p>
                          <footer>– The Status Chaser</footer>
                      </blockquote>
                    </div>
                </section>
                
                <section id="section-16" className={styles.reviewSection}>
                    <h2>16. The Full Spectrum of Rates &amp; Fees</h2>
                    <p>This is a rewards card designed for people who pay their balance in full each month; its high APR makes it a poor choice for carrying debt. For full details, see the official <a href={reviewDataNew.ratesLink} target="_blank" rel="noopener noreferrer sponsored">Delta SkyMiles Platinum Card Rates and Fees</a>.</p>
                    <DraggableTableWrapper>
                        <div className={styles.tableContainer}>
                            <table className={`${styles.statsTable} ${styles.ratesFeesTable}`}>
                                <tbody>
                                    <tr><td>Annual Fee</td><td><strong>$350</strong></td></tr>
                                    <tr><td>Purchase APR</td><td>{reviewDataNew.aprRange} variable</td></tr>
                                    <tr><td>Cash Advance APR</td><td>29.49% variable</td></tr>
                                    <tr><td>Foreign Transaction Fee</td><td><strong>None</strong></td></tr>
                                    <tr><td>Late/Returned Payment Fee</td><td>Up to $39</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </DraggableTableWrapper>
                </section>

                <section id="section-17" className={`${styles.reviewSection} ${styles.faqSection}`}>
                  <h2>17. Card-Specific Frequently Asked Questions (FAQs)</h2>
                  <div className={styles.faqContainer}>
                      {structuredDataOptimized['@graph'].find(item => item['@type'] === 'FAQPage').mainEntity.map((faq, index) => (
                          <details key={index} className={styles.faqItem}>
                              <summary className={styles.faqQuestion}>{`${index + 1}. ${faq.name}`}</summary>
                              <div className={styles.faqAnswer}><p>{faq.acceptedAnswer.text}</p></div>
                          </details>
                      ))}
                  </div>
                </section>
                
                <section id="section-18" className={styles.reviewSection}>
                    <h2>18. The Business Traveler's Angle: A Note on the Platinum Business Version</h2>
                    <p>For small business owners, American Express offers the <a href={reviewDataNew.officialLinks.businessCard} target="_blank" rel="noopener noreferrer sponsored">Delta SkyMiles® Platinum Business American Express Card</a>. It carries the same ${reviewDataNew.annualFee} annual fee and shares core benefits like the Companion Certificate, MQD Headstart, and TakeOff 15. The primary difference lies in its rewards structure, which is tailored to business expenses (e.g., 1.5X miles on transit and large purchases). It’s a compelling alternative for the self-employed Delta loyalist.</p>
                </section>

                <section id="section-19" className={styles.reviewSection}>
                  <h2>19. Final Verdict: Is the Delta SkyMiles Platinum Your Ticket to More?</h2>
                  <p>After a comprehensive flight check, the {reviewDataNew.cardName} lands firmly in a specific, well-defined territory. Its value is not built on universal appeal; instead, it is forged in unwavering loyalty to a single airline. The worth of its ${reviewDataNew.annualFee} annual fee hinges almost entirely on two factors: your commitment to flying Delta and your ability to strategically use the annual Companion Certificate.</p>
                  <p>This is not a card for the occasional traveler or the bargain hunter who hops between carriers. It is a purpose-built instrument for the dedicated Delta flyer. The ideal cardholder is part of a pair or family who can turn the Companion Certificate into an annual travel subsidy that makes the fee an afterthought. They are the traveler who sees real savings in free checked bags and views the path to Medallion status as a tangible goal.</p>
                  <blockquote className={styles.highlightQuote}>
                    If you bleed Delta blue, fly with a plus-one, and see Medallion Status as a worthy pursuit, the Delta Platinum Amex isn't just a good card—it's arguably the most logical and value-packed tool for your travel wallet.
                  </blockquote>
                  <p>For everyone else, the skies are wider, and your wallet may be better served by more flexible options. If this profile resonates with you, we recommend confirming the latest details on the <a href={reviewDataNew.applyLink} target="_blank" rel="noopener noreferrer sponsored">official American Express website</a> before applying.</p>
                </section>

                <section id="section-eat" className={`${styles.reviewSection} ${styles.eatSection}`}>
                    <h2>Our Commitment to E-A-T: Expertise, Authority &amp; Trustworthiness</h2>
                    <p>At <strong>{siteName}</strong>, we are committed to providing content that exemplifies Expertise, Authoritativeness, and Trustworthiness. This review of the {reviewDataNew.cardName} has been meticulously researched by analyzing the card's features, benefits, and fees, referencing official documentation from American Express and Delta Air Lines. Our goal is to present a balanced and reliable guide to help you make an informed decision. All information is current as of <strong>{new Date(updateDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</strong>, but we always recommend verifying details directly with the issuer.</p>
                </section>

              </article>
            </div>
            <aside className={styles.sidebarArea}>
                <TableOfContents sections={tocSections} />
            </aside>
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
                    <a href={reviewDataNew.applyLink} className={`${styles.stickyFooterBtn} ${styles.stickyFooterBtnApply}`} target="_blank" rel="noopener noreferrer sponsored">Apply Now</a>
                    <a href={reviewDataNew.ratesLink} className={`${styles.stickyFooterBtn} ${styles.stickyFooterBtnRates}`} target="_blank" rel="noopener noreferrer sponsored">See Rates & Fees</a>
                </div>
            </div>
        </div>
    </>
  );
}

export default DeltaPlatinumAmexReviewPage;