/* ------------------------------------------------------------------
    File:  pages/reviews/citi-strata-premier-review.js
    Route: https://www.travelcardinsider.com/reviews/citi-strata-premier-review
------------------------------------------------------------------- */

// !!! WARNING: THIS FILE CONTAINS PLACEHOLDER DATA/URLs/DIMENSIONS !!!
// !!! YOU MUST REPLACE ALL PLACEHOLDERS MARKED WITH '!!!' BEFORE DEPLOYMENT !!!
// !!! VERIFY ALL CARD DETAILS & SCHEMA VALUES AGAINST OFFICIAL ISSUER INFO !!!

import React, { useState, useEffect, useCallback, useRef } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import styles from '../../styles/ReviewPage.module.css'; // Using the established REVIEW CSS module

// Import shared components & icons
import TableOfContents from '../../components/TableOfContents';
import IconGift from '../../components/icons/icon-gift.svg'; 
import IconStar from '../../components/icons/icon-star.svg'; 
import IconCheck from '../../components/icons/icon-Credit Card.svg'; 
import IconPlus from '../../components/icons/icon-target.svg'; 
import IconPlane from '../../components/icons/icon-plane.svg';  
import IconDollar from '../../components/icons/icon-dollar.svg'; 

const RatingTooltip = dynamic(() => import('../../components/RatingTooltip'), { ssr: false, loading: () => null });

/* ──────────────────────────────
    CONSTANTS & STATIC DATA
    ────────────────────────────── */
const siteName = 'Travelcardinsider'; 
const siteUrl = 'https://www.travelcardinsider.com'; 
const pagePath = '/reviews/citi-strata-premier-review'; 
const pageUrlFull = `${siteUrl}${pagePath}`;
const publishDate = '2025-06-25'; 
const updateDate = '2025-06-25'; 

const reviewData = {
  cardName        : 'Citi Strata Premier℠ Card',
  title           : 'Citi Strata Premier℠ Card Review (2025): The Ultimate Everyday Workhorse?',
  description     : "Is the Citi Strata Premier card worth its $95 fee? Our 2025 review covers the 60k bonus, 3X on gas & groceries, the Citi Trifecta strategy, transfer partners, and the reinstated travel protections.",
  keywords        : 'citi strata premier review, thank you points, citi trifecta, travel credit card, 3x points groceries, 10x travel portal, citi premier review 2025',
  author: { // Using template's placeholder author info
      name: 'Dilan Madushanka',
      title: 'Founder & Lead Editor', 
      imageUrl: '/WhatsApp Image 2025-05-12 at 4.09.58 PM.jpeg', // !!! Placeholder
      imageWidth: 40,
      imageHeight: 40,
      tooltipImageUrl: '/WhatsApp Image 2025-05-12 at 4.09.58 PM.jpeg', // !!! Placeholder
      tooltipImageWidth: 60,
      tooltipImageHeight: 60,
      expertise: [
          'Flexible Point Currencies (ThankYou, UR, MR)',
          'Credit Card Stacking & Optimization (e.g., Citi Trifecta)',
          'Airline & Hotel Transfer Partners',
          'Mid-Tier Travel Credit Cards',
          'Citi Credit Cards'
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
  imageUrl        : '/CardArt-Strata.png.webp', // !!! Placeholder: Replace with actual card image URL
  imageWidth      : 1290, 
  imageHeight     : 812,  
  ratingValue     : 8.5,  // !!! Placeholder - Based on focus for everyday spenders
  ratingCount     : 450,  // !!! Placeholder - UPDATE AS NEEDED
  reviewBody      : 'Our editors evaluate the Citi Strata Premier Card based on its rewards structure (3X on everyday spend, 10X on portal), the $100 hotel credit, valuable transfer partners, the Citi Trifecta strategy, annual fee, and overall value for travelers who want to earn on daily purchases.',
  aprRange        : '20.24% - 28.24% (Variable)',
  annualFee       : 95, 
  applyLink       : 'https://www.citi.com/credit-cards/citi-strata-premier-credit-card', 
  ratesLink       : 'https://www.citi.com/credit-cards/compare-credit-cards/CMA-PIT', 
  sku             : 'CITI-STRATA-PREM-TCI-2025',
  mpn             : 'CITISTRATAPREM', 
  h1Content       : "Citi Strata Premier℠ Card: Your Everyday Workhorse for World-Class Travel", 
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
      name           : reviewData.cardName,
      image          : `${siteUrl}${reviewData.imageUrl}`,
      description    : reviewData.description,
      sku            : reviewData.sku,
      mpn            : reviewData.mpn,
      brand          : { '@type': 'Brand', name: 'Citi' },
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
        seller: { '@type': 'Organization', name: 'Citi' },
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
      },
      author          : {
          '@type': 'Person',
          'name': reviewData.author.name,
          'url': reviewData.author.fullBioLink ? `${siteUrl}${reviewData.author.fullBioLink}` : undefined,
      },
      publisher       : {
        '@type' : 'Organization',
        name    : siteName,
        logo    : { '@type': 'ImageObject', url: `${siteUrl}/images/logo/your-logo-schema.png` }, // !!! Placeholder
      },
      datePublished   : publishDate,
      dateModified    : updateDate,
    },
    {
      '@type'            : 'WebPage',
      '@id'              : pageUrlFull,
      url                : pageUrlFull,
      name               : reviewData.title,
      description        : reviewData.description,
      inLanguage         : 'en-US',
      isPartOf           : { '@id': `${siteUrl}#website` },
      primaryImageOfPage : { '@id': `${pageUrlFull}#primaryImage` },
      breadcrumb         : { '@id': `${pageUrlFull}#breadcrumbs` },
    },
    {
      '@type'   : 'ImageObject',
      '@id'     : `${pageUrlFull}#primaryImage`,
      url       : `${siteUrl}${reviewData.imageUrl}`,
      width     : reviewData.imageWidth,
      height    : reviewData.imageHeight,
      caption   : reviewData.cardName,
    },
    {
      '@type'        : 'BreadcrumbList',
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
      mainEntity: [ // Populated from the review text
        {
          '@type': 'Question',
          name: 'What credit score do I need for the Citi Strata Premier℠ Card?',
          acceptedAnswer: { '@type': 'Answer', text: "Approval typically requires a Good to Excellent score (FICO 670+), but Citi considers multiple factors. For more tips, see our guide on improving your credit score for premium cards." }
        },
        {
          '@type': 'Question',
          name: 'Can I get the bonus if I had the old Citi Premier® Card?',
          acceptedAnswer: { '@type': 'Answer', text: "Only if you haven't received a new account bonus for either the Citi Premier® or the Citi Strata Premier℠ in the past 48 months." }
        },
        {
          '@type': 'Question',
          name: 'Is the $100 hotel credit easy to use?',
          acceptedAnswer: { '@type': 'Answer', text: "It can be challenging. It requires a single, prepaid hotel booking of $500 or more made through the CitiTravel.com portal, which may not fit everyone's travel patterns." }
        },
        {
          '@type': 'Question',
          name: 'Does the Citi Strata Premier card have airport lounge access?',
          acceptedAnswer: { '@type': 'Answer', text: "No, the Citi Strata Premier℠ Card does not include any complimentary airport lounge access benefits." }
        }
      ],
    },
    {
      '@type' : 'Organization',
      '@id'   : `${siteUrl}#website`,
      name    : siteName,
      url     : siteUrl,
      logo    : { '@type': 'ImageObject', url: `${siteUrl}/images/logo/your-logo-schema.png` }, // !!! Placeholder
      sameAs  : [ 
        "https://www.facebook.com/YourTravelCardInsiderFacebookPage", // !!! Placeholder
        "https://twitter.com/YourTravelCardInsiderTwitterHandle", // !!! Placeholder
      ],
    },
  ],
};

const ratingCriteria = [
    '3X & 10X Earning Structure',
    'Value of ThankYou® Points',
    'Transfer Partner Quality & Sweet Spots',
    '$100 Annual Hotel Credit',
    'Citi Trifecta Synergy',
    'Welcome Bonus Value',
    'Reinstated Travel Protections',
    'Annual Fee ($95) vs. Benefits',
];

const tocSections = [ 
    { id: 'section-1', title: '1. Card Snapshot & “Best For” Tagline' },
    { id: 'section-2', title: '2. Detailed User Profiling' },
    { id: 'section-3', title: '3. Who Should Pass on This Card' },
    { id: 'section-4', title: '4. Welcome Bonus & Eligibility Rules' },
    { id: 'section-5', title: '5. Earning Power: 3x & 10x Multipliers' },
    { id: 'section-6', title: '6. ThankYou® Points & Devaluation Warning' },
    { id: 'section-7', title: '7. Transfer-Partner Sweet Spots' },
    { id: 'section-8', title: '8. The “Citi Trifecta” Strategy' },
    { id: 'section-9', title: '9. $100 Annual Hotel Credit' },
    { id: 'section-10', title: '10. Reinstated Travel Protections' },
    { id: 'section-11', title: '11. Extra World Elite Perks' },
    { id: 'section-12', title: '12. Rates, Fees & Why You Must Pay in Full' },
    { id: 'section-13', title: '13. Real-World Spending Example' },
    { id: 'section-14', title: '14. Pros & Cons One-Look Table' },
    { id: 'section-15', title: '15. Voices from the Community' },
    { id: 'section-16', title: '16. Market Matchup vs. Competition' },
    { id: 'section-17', title: '17. Deeper Competitor Analysis' },
    { id: 'section-18', title: '18. Card-Specific FAQs' },
    { id: 'section-19', title: '19. Final Verdict: Your New Champ?' },
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
    el.addEventListener('mouseleave', stopDrag);
    el.addEventListener('mousemove', onMove);
    return () => { /* cleanup */ };
  }, []);
  return (<div ref={containerRef} className={styles.draggableScrollContainer}>{children}</div>);
}

/* ──────────────────────────────
    COMPONENT
    ────────────────────────────── */
function CitiStrataPremierReviewPage() {
  const [showRatingInfo, setShowRatingInfo] = useState(false);
  const [showAuthorBioTooltip, setShowAuthorBioTooltip] = useState(false);
  const authorRef = useRef(null);
  const authorTooltipRef = useRef(null);
  const ratingTooltipRef = useRef(null);

  // Replicating all tooltip logic from the template
  const handleIconClick = useCallback((event) => {
      event.preventDefault(); event.stopPropagation();
      setShowRatingInfo(prevState => !prevState);
  }, []);
  const handleAuthorMouseEnter = useCallback(() => setShowAuthorBioTooltip(true), []);
  const handleAuthorMouseLeave = useCallback(() => {
      const timerId = setTimeout(() => {
          if (authorRef.current && authorTooltipRef.current && !authorRef.current.matches(':hover') && !authorTooltipRef.current.matches(':hover')) {
             setShowAuthorBioTooltip(false);
          }
      }, 150);
      if (authorRef.current) authorRef.current.tooltipTimeoutId = timerId;
  }, []);
   const handleAuthorClearTimeout = useCallback(() => {
      if (authorRef.current?.tooltipTimeoutId) clearTimeout(authorRef.current.tooltipTimeoutId);
   }, []);
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
      return () => {
          document.removeEventListener("mousedown", handleClickOutside);
          if (authorRef.current?.tooltipTimeoutId) clearTimeout(authorRef.current.tooltipTimeoutId);
      };
  }, [showAuthorBioTooltip, showRatingInfo]);

  const summaryBoxData = {
    welcomeOffer: "60,000 bonus points after $4,000 spend in first 3 months.",
    annualFee: `$${reviewData.annualFee}`,
    topEarning: "3X points on gas, groceries, dining, & travel.",
    keyPerks: "$100 Annual Hotel Credit & Travel Protections.",
    travelPerk: "10X on travel portal bookings & no FTFs.",
    bestFor: "Everyday spenders wanting to turn groceries & gas into premium travel."
  };

  return (
    <>
      <Head>
        <title>{reviewData.title} - {siteName}</title>
        <meta name="description" content={reviewData.description} />
        <meta name="keywords" content={reviewData.keywords} />
        <meta name="author" content={reviewData.author.name} />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <link rel="canonical" href={pageUrlFull} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredDataOptimized) }} />
        {/* All other meta tags from template (OG, Twitter, etc.) would be included here */}
      </Head>

      <main>
        <div className={styles.reviewPageLayout}>
          <div className={styles.mainContentArea}>
            <section className={styles.heroSection}>
              <div className={styles.heroTextContainer}>
                <h1 className={styles.heroTitle}>{reviewData.h1Content}</h1>
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
                            <span className={styles.authorPrefix}>By</span>
                            <span className={styles.authorName}>{reviewData.author.name}</span>
                        </div>
                        <span className={styles.authorTitle}>{reviewData.author.title}</span>
                        {updateDate && (
                            <time dateTime={updateDate} className={styles.authorLastEdited}>
                                Last updated: {new Date(updateDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                            </time>
                        )}
                    </div>
                    {showAuthorBioTooltip && reviewData.author.bioSnippet && ( 
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
                                    src={reviewData.author.tooltipImageUrl} 
                                    alt={`${reviewData.author.name} large headshot`}
                                    width={reviewData.author.tooltipImageWidth}
                                    height={reviewData.author.tooltipImageHeight}
                                    className={styles.authorTooltipImage}
                                 />
                                 <div className={styles.authorTooltipInfo}>
                                     <span className={styles.authorTooltipName}>{reviewData.author.name}</span>
                                     <span className={styles.authorTooltipTitle}>{reviewData.author.title}</span>
                                 </div>
                               </div>
                               {reviewData.author.expertise && reviewData.author.expertise.length > 0 && (
                                 <div className={styles.authorTooltipExpertise}>
                                     <strong>Expertise</strong>
                                     <ul>
                                         {reviewData.author.expertise.map(area => <li key={area}>{area}</li>)}
                                     </ul>
                                 </div>
                               )}
                               <p className={styles.authorTooltipBioSnippet}>{reviewData.author.bioSnippet}</p>
                               {reviewData.author.fullBioLink && (
                                   <Link href={reviewData.author.fullBioLink} legacyBehavior>
                                       <a className={styles.authorTooltipBioLink}>See full bio</a>
                                   </Link>
                               )}
                        </div>
                    )}
                </div>
                <p className={styles.heroSubtitle}>Your wallet is a well-worn compromise. There’s the card for groceries, the one for gas, and another for dining. What if one card could simplify this juggle and turn your everyday errands into extraordinary travel?</p>
              </div>
              <div className={styles.heroImageContainer}>
                  <div className={styles.cardImageContainer}>
                    <Image src={reviewData.imageUrl} alt={reviewData.cardName} width={reviewData.imageWidth} height={reviewData.imageHeight} className={styles.heroImage} priority />
                  </div>
                  <div className={styles.ratingSection}>
                    <span className={styles.tciRating}>
                      <button type="button" className={styles.infoIconButton} aria-label="Rating Information" onClick={handleIconClick} aria-expanded={showRatingInfo}>
                        <svg aria-hidden="true" focusable="false" className={styles.infoIcon} viewBox="0 0 16 16"><path fillRule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/><path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/></svg>
                      </button>
                      {siteName} Rating: <strong>{reviewData.ratingValue.toFixed(1)}</strong>/10
                      {showRatingInfo && <RatingTooltip ref={ratingTooltipRef} ratingValue={reviewData.ratingValue} ratingCriteria={ratingCriteria} onClose={() => setShowRatingInfo(false)} />}
                    </span>
                    <div className={styles.starRating} title={`Rated ${reviewData.ratingValue} out of 10 stars`}>
                        ★★★★★<span className={styles.filledStars} style={{ '--rating': `${(reviewData.ratingValue / 10) * 100}%` }}>★★★★★</span>
                    </div>
                  </div>
              </div>
            </section>

             <div className={styles.reviewContainer}> 
              <article>
                <header className={styles.reviewHeader}>
                    <div className={styles.summaryBox} id="summaryBoxTitle">
                        <h2 className={styles.summaryBoxTitle} dangerouslySetInnerHTML={{ __html: `${reviewData.cardName}: Key Insights`}}/>
                        <div className={styles.summaryGrid}>
                          {Object.entries(summaryBoxData).map(([key, value]) => {
                            const icons = { welcomeOffer: <IconGift/>, annualFee: <IconCheck/>, topEarning: <IconStar/>, keyPerks: <IconDollar/>, travelPerk: <IconPlane/>, bestFor: <IconPlus/> };
                            const label = key.replace(/([A-Z])/g, ' $1').trim();
                            return (
                              <div key={key} className={styles.summaryItem} data-full-width={key === 'bestFor'}>
                                  <span className={styles.summaryIcon}>{icons[key]}</span> 
                                  <span className={styles.summaryLabel}>{label}:</span>
                                  <span className={styles.summaryValue}>{value}</span>
                              </div>
                            );
                          })}
                        </div>
                    </div>
                </header>
                
                <section id="introduction" className={styles.reviewSection}>
                  <p dangerouslySetInnerHTML={{ __html: "Enter the <strong>Citi Strata Premier℠ Card</strong>. In May 2024, Citi strategically refreshed its respected Premier® Card, relaunching it as the Strata Premier℠. This wasn't just a name change; it was a response. Citi listened, bringing back crucial travel protections that had vanished years prior, signaling a renewed commitment to the serious traveler." }}></p>
                  <p dangerouslySetInnerHTML={{ __html: "The result is a formidable <strong>&quot;workhorse&quot; card</strong>. It’s designed to excel at turning your largest household budget items—supermarket runs, gas fill-ups, and family dinners—into a powerful stash of flexible travel points. It’s built for the everyday spender with global ambitions, offering a pathway to premium travel without the premium price tag. This review will dissect every facet of the card to help you decide if it’s the new champion your wallet deserves." }}></p>
                </section>
                
                <section id="section-1" className={styles.reviewSection}>
                  <h2>1. Card Snapshot & “Best For” Tagline</h2>
                  <p><strong>Best For: The Everyday Spender with Global Ambitions.</strong></p>
                  <ul className={styles.featureList}>
                    <li><strong>Welcome Bonus:</strong> Earn 60,000 bonus ThankYou® Points after spending $4,000 in the first 3 months of account opening. <a href="https://www.citi.com/credit-cards/citi-strata-premier-credit-card" target="_blank" rel="noopener noreferrer sponsored">[Citi: Citi Strata Premier℠ Card Details]</a></li>
                    <li><strong>Annual Fee:</strong> $95</li>
                    <li><strong>Key Earning Rates:</strong> 10X points on hotels, car rentals, and attractions booked through CitiTravel.com; 3X points on air travel, other hotels, restaurants, supermarkets, gas stations, and EV charging stations; 1X point on all other purchases.</li>
                    <li><strong>Standout Perk:</strong> $100 Annual Hotel Credit on a single hotel stay of $500 or more (before taxes) booked via CitiTravel.com. <a href="https://www.cardbenefits.citi.com/" target="_blank" rel="noopener noreferrer sponsored">[Citi: Citi Strata Premier℠ Card Benefits]</a></li>
                    <li><strong>Foreign Transaction Fees:</strong> None.</li>
                    <li><strong>Credit Needed:</strong> Good to Excellent (typically 670-850 FICO score).</li>
                  </ul>
                </section>

                <section id="section-2" className={styles.reviewSection}>
                  <h2>2. Detailed User Profiling — Who Should Get the Card</h2>
                  <p>A credit card is only as good as its fit for your lifestyle. The Citi Strata Premier℠ isn't for everyone, but for these specific profiles, it’s nearly perfect.</p>
                  <div className={styles.profileCardContainer}>
                    <div className={styles.profileCard}><h4>The Family CFO</h4><p>You manage the household budget, where the biggest lines are groceries, gas, and dining. The Strata Premier’s broad 3X categories are a direct match, effortlessly converting weekly errands into points for the next family vacation. Adding authorized users for no extra cost consolidates the family's spending, accelerating rewards even faster. See our list of <Link href="/review/Top-5-Family-Friendly-Travel-Cards-for-2025-Maximize-Points-&-Perks-with-Kids-in-Tow">Top Family-Friendly Travel Cards</Link> for more ideas.</p></div>
                    <div className={styles.profileCard}><h4>The Aspiring Points Pro</h4><p>Ready to graduate from simple cash-back cards? The Strata Premier is an ideal "starter travel card." It’s a manageable entry into the world of transferable points without the intimidating fee of a premium card. More importantly, it’s the essential key that unlocks the powerful "Citi Trifecta" strategy.</p></div>
                    <div className={styles.profileCard}><h4>The International Explorer</h4><p>You aren't deterred by unfamiliar airline names. You know the true value of points lies in loyalty program alliances. The card’s transfer partners, rich with international powerhouses like Turkish Airlines and Air France-KLM, unlock phenomenal redemptions—like deeply discounted business class seats to Europe or Asia. Explore how to maximize these in our guide to <Link href="/review/2025-Points-&-Miles-Trends-Best-Ways-to-Redeem-for-Luxury-Travel-on-a-Budget">redeeming miles for luxury travel</Link>.</p></div>
                  </div>
                </section>

                <section id="section-3" className={styles.reviewSection}>
                  <h2>3. Who Should Pass on This Card</h2>
                   <div className={styles.profileCardContainer}>
                    <div className={styles.profileCard}><h4>The Domestic-Only Flyer</h4><p>Loyal to U.S. airlines like Southwest or United? The card’s only domestic airline partner is JetBlue. A card like the <Link href="/review/chase-sapphire-preferred-2025">Chase Sapphire Preferred®</Link> is a much more effective tool.</p></div>
                    <div className={styles.profileCard}><h4>The Simplicity Seeker</h4><p>If you want one card that earns a great flat rate on everything, this isn't it. The Capital One Venture Rewards Credit Card, earning 2 miles per dollar on every purchase, is a superior choice.</p></div>
                    <div className={styles.profileCard}><h4>The Ultra-Premium Traveler</h4><p>If you demand airport lounge access, hotel elite status, or flexible travel credits, the Strata Premier will fall short. High-end travelers should look at premium cards and our <Link href="/review/The-Ultimate-Guide-to-Lounge-Access-in-2025-How-to-Get-VIP-Treatment-at-Airports">Ultimate Guide to Lounge Access</Link>.</p></div>
                     <div className={styles.profileCard}><h4>The Dedicated Cash-Back Enthusiast</h4><p>If your primary goal is cash, this card is not for you. Citi is devaluing cash-back redemptions, cementing this card's identity as a travel-first product.</p></div>
                  </div>
                </section>
                
                <section className={styles.midArticleCta}>
                    <h3 dangerouslySetInnerHTML={{ __html: reviewData.cardName }}/>
                    <a href={reviewData.applyLink} target="_blank" rel="noopener noreferrer sponsored" className={styles.applyNowButton}>Apply Now on Citi's Site</a>
                    <span className={styles.ctaDisclaimer}>Terms and conditions apply.</span>
                </section>
                
                <section id="section-4" className={styles.reviewSection}>
                    <h2>4. Welcome Bonus & Citi 48-Month Eligibility Rules</h2>
                    <p>The Citi Strata Premier℠ greets new cardholders with 60,000 bonus ThankYou® Points after a $4,000 spend in the first three months. At a minimum, that's worth $600 for travel or gift cards. Through transfer partners, however, that bonus could easily be worth $1,000 or more in airfare.</p>
                    <p>Before applying, you must understand Citi's strict eligibility rules:</p>
                    <ul className={styles.featureList}>
                        <li><strong>The 48-Month Rule:</strong> You cannot get the welcome bonus if you have received one for the Citi Premier® or Strata Premier® in the past 48 months. <a href="https://www.citi.com/credit-cards/compare-credit-cards/CMA-PIT" target="_blank" rel="noopener noreferrer sponsored">[Citi: Cardmember Agreement]</a></li>
                        <li><strong>The Product Change Trap:</strong> You are also ineligible if you have product-changed a different Citi card to a Premier or Strata Premier in the past 48 months. This prevents users from upgrading a no-fee card and then applying for a new one to get the bonus.</li>
                        <li><strong>Application Velocity:</strong> While unwritten, a common rule of thumb is to apply for no more than one Citi card every 8 days and no more than two every 65 days.</li>
                    </ul>
                </section>

                <section id="section-5" className={styles.reviewSection}>
                    <h2>5. Earning Power: 3x & 10x Multipliers</h2>
                    <p>The engine of the Citi Strata Premier℠ is its rewards structure, led by its expansive 3X bonus categories. You’ll earn 3 ThankYou® Points per dollar at restaurants, supermarkets, gas stations, EV charging stations, and on air travel and other hotel purchases.</p>
                    <p>This collection is the card's superpower. It’s rare for a single card to offer an elevated rate across the three pillars of a typical household budget—groceries, gas, and dining. Note that the supermarket category excludes warehouse clubs like Costco and superstores like Target or Walmart.</p>
                    <p>For those booking through Citi's own portal, the rewards are even richer: a staggering 10 ThankYou® Points per dollar on hotels, car rentals, and attractions booked via CitiTravel.com.</p>
                    <p>This creates a brilliant strategic choice. The 10X portal rate is fantastic for value-maximizers at independent hotels. But if you have elite status with a major chain like Marriott or Hyatt, booking direct is key. The card’s 3X category for "Other Hotel Purchases" acts as a valuable escape hatch, letting you book direct, secure your elite benefits, and still earn a highly competitive 3X points.</p>
                </section>

                <section id="section-6" className={styles.reviewSection}>
                    <h2 dangerouslySetInnerHTML={{ __html: "6. ThankYou® Points Basics & Cash-Back Devaluation" }}/>
                    <p>The currency you earn is Citi ThankYou® Points (TYPs), but not all redemptions are created equal.</p>
                    <ul className={styles.featureList}>
                      <li><strong>Poor Value (&lt;1¢/point):</strong> Using points at checkout with retailers like Amazon yields a low value of just 0.8 cents per point.</li>
                      <li><strong>Standard Value (1¢/point):</strong> This is the baseline. Redeem points for 1 cent each for gift cards or travel booked through the Citi Travel portal.</li>
                      <li><strong>The Big Warning—Cash Back Devaluation:</strong> You can currently redeem points for cash at the standard 1-cent rate. However, effective August 24, 2025, the value of points redeemed for cash back will drop 25% to just 0.75 cents per point. <a href="https://www.thankyou.com/cms.htm?pageName=tc" target="_blank" rel="noopener noreferrer sponsored">[Citi ThankYou Rewards: Program Terms and Conditions]</a></li>
                      <li><strong>Best Value (1.5¢+/point):</strong> The undisputed best way to use TYPs is by transferring them to Citi's airline and hotel partners, where it’s possible to achieve values of 2, 5, or even 10 cents per point.</li>
                    </ul>
                </section>

                <section id="section-7" className={styles.reviewSection}>
                    <h2>7. Transfer-Partner Sweet Spots (Airline & Hotel)</h2>
                    <p>The true power of the Strata Premier lies in converting points to airline miles. While the partner list appears heavy on international carriers, this is a feature, not a bug. Here are some of the most valuable "sweet spot" redemptions:</p>
                    <ul className={styles.featureList}>
                        <li><strong>Turkish Airlines Miles&Smiles:</strong> This is arguably the program's crown jewel. You can book round-trip domestic flights on its Star Alliance partner, United Airlines, for as little as 10,000 miles each way—a fraction of what United often charges.</li>
                        <li><strong>Air France-KLM Flying Blue:</strong> As your gateway across the Atlantic, Flying Blue frequently runs "Promo Rewards" that discount award tickets by 25-50%, making it possible to book one-way business class to Europe for as low as 50,000 miles.</li>
                        <li><strong>Avianca LifeMiles:</strong> Another Star Alliance partner, LifeMiles is prized for offering premium cabin redemptions with no fuel surcharges, which can save you hundreds of dollars on award tickets.</li>
                        <li><strong>Choice Privileges (The Hidden Gem):</strong> This hotel partner is a best-kept secret. The Strata Premier offers an enhanced 1:2 transfer ratio (10,000 Citi points become 20,000 Choice points). <a href="https://www.thankyou.com/transferPartner.htm" target="_blank" rel="noopener noreferrer sponsored">[Citi ThankYou Rewards: Transfer Partners List]</a> While known for budget hotels, its portfolio includes high-end collections, making it fantastic for luxury stays and trips to expensive regions like Scandinavia and Japan.</li>
                    </ul>
                </section>

                <section id="section-8" className={styles.reviewSection}>
                    <h2 dangerouslySetInnerHTML={{ __html: "8. The “Citi Trifecta” Strategy (Premier + Custom Cash + Double Cash)" }}/>
                    <p>While strong on its own, the Strata Premier's value multiplies when paired with its no-annual-fee siblings in a strategy known as the "Citi Trifecta." This three-card combo maximizes every dollar spent.</p>
                    <ol className={styles.numberedList}>
                        <li><strong>Citi Strata Premier℠ Card ($95 annual fee): The Engine.</strong> Use it for its broad 3X categories. Most importantly, it's the key that unlocks transfers to high-value travel partners.</li>
                        <li><strong>Citi Custom Cash® Card ($0 annual fee): The Specialist.</strong> It earns 5X points on your single highest eligible spending category each month (on up to $500). <a href="https://www.citi.com/credit-cards/citi-custom-cash-credit-card" target="_blank" rel="noopener noreferrer sponsored">[Citi: Citi Custom Cash® Card Details]</a> Use it for your top spend to get 5X, then switch to the Strata for 3X.</li>
                        <li><strong>Citi Double Cash® Card ($0 annual fee): The Catch-All.</strong> This earns a flat 2X points on all other purchases (1X when you buy, 1X when you pay). <a href="https://www.citi.com/credit-cards/citi-double-cash-credit-card" target="_blank" rel="noopener noreferrer sponsored">[Citi: Citi Double Cash® Card Details]</a></li>
                    </ol>
                    <p>The magic is pooling all points into your Strata Premier account, transforming them into a high-value, transferable currency. The $95 fee becomes the investment that elevates the earnings from two free cards.</p>
                </section>
                
                <section id="section-9" className={styles.reviewSection}>
                    <h2>9. $100 Annual Hotel Credit – Use-Case & Limits</h2>
                    <p>One of the card's headline benefits is its $100 annual hotel credit. You receive a $100 discount on a single, prepaid hotel stay of $500 or more (excluding taxes) booked through CitiTravel.com. However, this perk can be a puzzle:</p>
                    <ul className={styles.featureList}>
                        <li><strong>The $500 Minimum:</strong> Many stays won't reach this threshold.</li>
                        <li><strong>Portal Booking Requirement:</strong> Booking via a portal means forfeiting hotel loyalty points and elite benefits.</li>
                        <li><strong>Potentially Higher Prices:</strong> Portal prices can sometimes be higher than booking direct, negating the savings.</li>
                    </ul>
                    <p>View this credit as a bonus, not the core justification for the annual fee. If it fits your plans, it's a fantastic perk that puts you ahead.</p>
                </section>

                <section id="section-10" className={styles.reviewSection}>
                    <h2>10. Reinstated Travel Protections (Trip Delay, Luggage, Rental Car)</h2>
                    <p>A huge improvement with the Strata Premier rebrand was the return of travel protections. Their absence was a deal-breaker for many; their comeback makes the card a viable contender again. <a href="https://www.cardbenefits.citi.com/" target="_blank" rel="noopener noreferrer sponsored">[Citi: Guide to Protection Benefits]</a> While welcome, it's important to compare them against the market. See our guide to the <Link href="/review/best-travel-insurance-cards-2025">best cards for travel insurance</Link> to learn more. Key protections include:</p>
                    <ul className={styles.featureList}>
                        <li>Trip Cancellation & Interruption Protection</li>
                        <li>Trip Delay Protection (after a 6-hour delay)</li>
                        <li>Lost or Damaged Luggage Protection</li>
                        <li>MasterRental® Coverage (secondary in the U.S., primary abroad)</li>
                    </ul>
                </section>
                
                <section id="section-11" className={styles.reviewSection}>
                    <h2>11. Extra World Elite/Amex-Style Perks</h2>
                    <p>As a World Elite Mastercard®, the Strata Premier includes a collection of often-overlooked perks that add real value: <a href="https://www.mastercard.us/en-us/personal-credit-cards/world-elite-mastercard-credit-card.html" target="_blank" rel="noopener noreferrer sponsored">[Mastercard: World Elite Mastercard® Benefits]</a></p>
                    <ul className={styles.featureList}>
                        <li>$5 Lyft credit each month after taking three rides.</li>
                        <li>Complimentary trial membership to DoorDash DashPass.</li>
                        <li>Complimentary ShopRunner membership for free two-day shipping at dozens of retailers.</li>
                        <li>Citi Entertainment access for presale tickets and exclusive experiences.</li>
                        <li>Points Sharing with another ThankYou® member (up to 100k per year).</li>
                    </ul>
                </section>

                <section id="section-12" className={styles.reviewSection}>
                  <h2>12. Rates, Fees & Why You Must Pay in Full</h2>
                  <p>Understanding the card's full cost structure is essential. This is a rewards card, not a financing tool.</p>
                   <ul className={styles.featureList}>
                        <li><strong>Annual Fee:</strong> $95</li>
                        <li><strong>Purchase APR:</strong> A variable {reviewData.aprRange}. There is no 0% introductory APR offer.</li>
                        <li><strong>Other Fees:</strong> Balance Transfer and Cash Advance fees are 5% ($5 or $10 minimum, respectively).</li>
                    </ul>
                  <p>The high interest rates underscore the golden rule of rewards cards: always pay your balance in full and on time. The value of any rewards earned is quickly erased by interest charges.</p>
                </section>

                <section id="section-13" className={styles.reviewSection}>
                    <h2>13. Real-World Spending Example (Family Budget Math)</h2>
                    <p>Let's see how the points add up for "Taylor, a family traveler," with a typical monthly budget.</p>
                    <p><strong>Monthly Spending:</strong></p>
                    <ul className={styles.featureList}>
                        <li>Groceries: $500</li>
                        <li>Gas/EV Charging: $250</li>
                        <li>Dining: $300</li>
                        <li>Other Non-Bonus Spending: $1,500</li>
                    </ul>
                    <div className={styles.tableContainer}>
                    <table className={styles.statsTable}>
                        <thead><tr><th>Annual Points Earned with the "Citi Trifecta"</th><th>Points</th></tr></thead>
                        <tbody>
                            <tr><td data-label="Source">Groceries (on Citi Custom Cash®)</td><td data-label="Points">30,000</td></tr>
                            <tr><td data-label="Source">Gas (on Citi Strata Premier℠)</td><td data-label="Points">9,000</td></tr>
                            <tr><td data-label="Source">Dining (on Citi Strata Premier℠)</td><td data-label="Points">10,800</td></tr>
                            <tr><td data-label="Source">Other (on Citi Double Cash®)</td><td data-label="Points">36,000</td></tr>
                            <tr style={{fontWeight: 'bold'}}><td>Annual Earning from Spending</td><td>85,800</td></tr>
                            <tr style={{fontWeight: 'bold'}}><td>Welcome Bonus (Year 1)</td><td>+60,000</td></tr>
                            <tr style={{fontWeight: 'bold', backgroundColor: '#f0f8ff'}}><td>Total Year 1 Points</td><td>145,800</td></tr>
                        </tbody>
                    </table>
                    </div>
                    <p>That's enough for three round-trip business class tickets to Europe during a Flying Blue promo or over a dozen domestic round-trip flights on United (booked via Turkish Airlines).</p>
                </section>

                <section id="section-14" className={styles.reviewSection}>
                  <h2>14. Pros & Cons One-Look Table</h2>
                   <div className={styles.prosCons}>
                      <div className={styles.pros}>
                          <h3>Pros</h3>
                          <ul className={styles.featureList}>
                              <li>Excellent 3X on groceries, gas, dining</li>
                              <li>Powerful 10X portal earning rate</li>
                              <li>Valuable international transfer partners</li>
                              <li>Reinstated travel protections</li>
                              <li>Unlocks the powerful "Citi Trifecta"</li>
                          </ul>
                      </div>
                      <div className={styles.cons}>
                          <h3>Cons</h3>
                          <ul className={styles.featureList}>
                               <li>$95 annual fee</li>
                               <li>Restrictive $100 hotel credit</li>
                               <li>Lacks major U.S. airline partners</li>
                               <li>Upcoming cash-back devaluation</li>
                               <li>No airport lounge access</li>
                          </ul>
                       </div>
                   </div>
                </section>
                
                <section id="section-15" className={styles.reviewSection}>
                  <h2>15. Voices from the Community – 5 Mini-Testimonials</h2>
                    <div className={styles.testimonialContainer}>
                      <blockquote className={styles.testimonialQuote}><p>"The Strata Premier...is required to make transfers work," highlighting its role as the key to his Trifecta system with the Double Cash and Custom Cash cards.</p><footer>– The Strategist (Andrew, One Mile at a Time)</footer></blockquote>
                      <blockquote className={styles.testimonialQuote}><p>"I do multiple cross Atlantic trips and Turkish Airlines have business class that you can get for 45,000 miles, meaning that I will get a free business class flight on every $15,000 I spend."</p><footer>– The International Value Hunter (Reddit user)</footer></blockquote>
                      <blockquote className={styles.testimonialQuote}><p>On the hotel credit: "I would not count on being able to use this benefit... Most likely you'll break even at best."</p><footer>– The Realist (TMagee, One Mile at a Time)</footer></blockquote>
                      <blockquote className={styles.testimonialQuote}><p>"I will start using my Citi Premier more often as it also gets 3x on...restaurants, groceries and gas. And I will use my Venture X for everything else."</p><footer>– The Everyday Earner (alexarauz, Reddit)</footer></blockquote>
                      <blockquote className={styles.testimonialQuote}><p>Detailed a struggle to get his bonus due to a "disconnect between the marketing department's offer...and the back-end terms."</p><footer>– The Frustrated Applicant (Jake Z., Frequent Miler)</footer></blockquote>
                    </div>
                </section>

                <section id="section-16" className={styles.reviewSection}>
                  <h2>16. Market Matchup Table vs. Competition</h2>
                  <DraggableTableWrapper>
                    <div className={styles.tableContainer}>
                      <table className={`${styles.statsTable} ${styles.comparisonTable}`}>
                        <thead>
                          <tr>
                            <th>Feature</th>
                            <th>Citi Strata Premier℠</th>
                            <th><a href="https://www.chase.com/personal/credit-cards/sapphire/preferred" target="_blank" rel="noopener noreferrer sponsored">Chase Sapphire Preferred®</a></th>
                            <th><a href="https://www.capitalone.com/credit-cards/venture/" target="_blank" rel="noopener noreferrer sponsored">Capital One Venture</a></th>
                            <th><a href="https://www.americanexpress.com/us/credit-cards/card/green-card/" target="_blank" rel="noopener noreferrer sponsored">American Express® Green</a></th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr><td data-label="Feature">Annual Fee</td><td>$95</td><td>$95</td><td>$95</td><td>$150</td></tr>
                          <tr><td data-label="Feature">Welcome Bonus</td><td>60k points ($4k spend)</td><td>60k points ($4k spend)</td><td>75k miles ($4k spend)</td><td>40k points ($3k spend)</td></tr>
                          <tr><td data-label="Feature">Groceries</td><td><strong>3X (in-store)</strong></td><td>3X (online only)</td><td>2X</td><td>1X</td></tr>
                          <tr><td data-label="Feature">Gas</td><td><strong>3X</strong></td><td>1X</td><td>2X</td><td>1X</td></tr>
                          <tr><td data-label="Feature">Dining</td><td><strong>3X</strong></td><td><strong>3X</strong></td><td>2X</td><td><strong>3X</strong></td></tr>
                          <tr><td data-label="Feature">Key Credit</td><td>$100 Hotel Credit</td><td>$50 Hotel Credit <a href="https://www.chase.com/card-benefits/sapphire-preferred/travel" target="_blank" rel="noopener noreferrer sponsored">[Chase]</a></td><td>$100 TSA/Global Entry <a href="https://www.capitalone.com/credit-cards/venture/" target="_blank" rel="noopener noreferrer sponsored">[Capital One]</a></td><td>$189 CLEAR® Plus <a href="https://www.americanexpress.com/us/credit-cards/card/green-card/" target="_blank" rel="noopener noreferrer sponsored">[Amex]</a></td></tr>
                          <tr><td data-label="Feature">Portal Value</td><td>1.0¢ / point</td><td><strong>1.25¢ / point</strong></td><td>1.0¢ / mile</td><td>Up to 1.0¢ / point</td></tr>
                          <tr><td data-label="Feature">Top Partners</td><td>Int'l Focus (Turkish)</td><td>Domestic Focus (United, Hyatt)</td><td>Good Mix</td><td>Excellent Mix (Delta)</td></tr>
                        </tbody>
                      </table>
                    </div>
                  </DraggableTableWrapper>
                </section>
                
                <section id="section-17" className={styles.reviewSection}>
                  <h2>17. Deeper Competitor Analysis – When Strata Wins/Loses</h2>
                  <ul className={styles.featureList}>
                    <li><strong>vs. Chase Sapphire Preferred®:</strong> The choice is spending vs. redeeming. Strata Premier is superior for earning on groceries and gas. Sapphire Preferred wins with its 25% portal points boost and its invaluable transfer partnerships with United, Southwest, and World of Hyatt. Choose Strata for everyday spending; choose Sapphire for simple redemptions and domestic travel.</li>
                    <li><strong>vs. Capital One Venture Rewards:</strong> This is maximization vs. simplicity. Strata's 3X categories will out-earn Venture's flat 2X for most. But Venture is a "set it and forget it" card with a valuable Global Entry/TSA PreCheck credit. Choose Strata if you're a category maximizer; choose Venture for simplicity.</li>
                    <li><strong>vs. American Express® Green Card:</strong> The Amex Green has a higher fee ($150) and weaker earning on essentials. Its strength is a broader definition of "travel" and unique credits for CLEAR Plus. It also unlocks the Amex ecosystem, including Delta. Choose Strata for its lower fee and stronger everyday earning; choose Amex Green if you value its specific credits.</li>
                  </ul>
                </section>

                <section id="section-18" className={`${styles.reviewSection} ${styles.faqSection}`}>
                  <h2>18. Card-Specific FAQs (Top 5–7 Questions)</h2>
                  <div className={styles.faqContainer}>
                      <details className={styles.faqItem} name="faq-1">
                          <summary className={styles.faqQuestion}>1. What credit score do I need?</summary>
                          <div className={styles.faqAnswer}><p>Approval typically requires a Good to Excellent score (FICO 670+), but Citi considers multiple factors. You can learn more in our <Link href="/review/How-to-Improve-Your-Credit-Score-Fast-for-Premium-Travel-Cards">guide on improving your credit score</Link>.</p></div>
                      </details>
                      <details className={styles.faqItem} name="faq-2">
                          <summary className={styles.faqQuestion}>2. Can I get the bonus if I had the old Citi Premier®?</summary>
                          <div className={styles.faqAnswer}><p>Only if you haven't received a bonus for either the Premier or Strata Premier in the past 48 months.</p></div>
                      </details>
                      <details className={styles.faqItem} name="faq-3">
                          <summary className={styles.faqQuestion}>3. Do my ThankYou® Points expire?</summary>
                          <div className={styles.faqAnswer}><p>No, as long as your account is open. However, shared points expire 90 days after transfer.</p></div>
                      </details>
                      <details className={styles.faqItem} name="faq-4">
                          <summary className={styles.faqQuestion}>4. Is the $100 hotel credit easy to use?</summary>
                          <div className={styles.faqAnswer}><p>It can be challenging. It requires a single, prepaid booking of $500+ through the Citi portal, which may not fit everyone's plans.</p></div>
                      </details>
                       <details className={styles.faqItem} name="faq-5">
                          <summary className={styles.faqQuestion}>5. What is the best way to redeem my points?</summary>
                          <div className={styles.faqAnswer}><p>Transferring to airline partners offers the highest potential value. Avoid redeeming for cash after August 2025, when the value drops significantly.</p></div>
                      </details>
                       <details className={styles.faqItem} name="faq-6">
                          <summary className={styles.faqQuestion}>6. Does this card have airport lounge access?</summary>
                          <div className={styles.faqAnswer}><p>No, the Citi Strata Premier℠ does not include lounge access.</p></div>
                      </details>
                  </div>
                </section>
                
                <section id="section-19" className={styles.reviewSection}>
                  <h2>19. Final Verdict: Is It Your New Front-of-Wallet Champ?</h2>
                  <p>In a crowded field, the Citi Strata Premier℠ has carved out a distinct and compelling identity. Its value doesn’t come from flashy perks like lounge access. Instead, its strength is more fundamental: an unparalleled ability to convert the largest, most common categories of everyday spending into a highly valuable travel currency.</p>
                  <p>This card is built for the savvy consumer who looks beyond the surface. It is for the household that wants its weekly grocery bill and daily commute to fund its next great adventure. It's the perfect centerpiece for a low-cost, high-reward "Citi Trifecta," transforming two no-annual-fee cards into a point-earning powerhouse.</p>
                  <p>The card is not without flaws. The hotel credit is restrictive, and the lack of major U.S. airline partners requires a learning curve. This card demands engagement from its holder to unlock its maximum potential.</p>
                  <p>But for those willing to meet it halfway, the rewards are immense. If you’re looking for a card that works as hard as you do at the supermarket and gas pump—and then rewards that hard work with business class flights to Paris or a family trip to Hawaii—the Citi Strata Premier℠ isn't just a contender. It might just be your new front-of-wallet champion.</p>
                </section>

                <section id="section-eat" className={`${styles.reviewSection} ${styles.eatSection}`}>
                    <h2 dangerouslySetInnerHTML={{ __html: `Our Commitment to E-A-T: Expertise, Authority &amp; Trustworthiness`}}></h2>
                    <p>At <strong>{siteName}</strong>, we are committed to providing content that exemplifies Expertise, Authoritativeness, and Trustworthiness (E-A-T). This review of the <strong>{reviewData.cardName}</strong> has been meticulously researched and crafted. We've analyzed the card's features, benefits, rewards structure, and fees, referencing official issuer documentation from Citi and considering real-world user experiences and data points from the travel rewards community. Our goal is to present a balanced, comprehensive, and reliable guide to help you make an informed decision. All information is current as of <strong>{new Date(updateDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</strong>, but we always recommend verifying details directly with the issuer as terms can change.</p>
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
            <Image src={reviewData.imageUrl} alt={`${reviewData.cardName} small image`} width={60} height={38} className={styles.stickyFooterCardImage} /> 
            <div className={styles.stickyFooterText}>
              <span className={styles.stickyFooterCardName} dangerouslySetInnerHTML={{ __html: reviewData.cardName }}/>
              <span className={styles.stickyFooterRating}>{siteName} Rating: {reviewData.ratingValue.toFixed(1)}/10</span>
            </div>
            <div className={styles.stickyFooterButtons}>
                <a href={reviewData.applyLink} className={`${styles.stickyFooterBtn} ${styles.stickyFooterBtnApply}`} target="_blank" rel="noopener noreferrer sponsored">Apply Now</a>
                <a href={reviewData.ratesLink} className={`${styles.stickyFooterBtn} ${styles.stickyFooterBtnRates}`} target="_blank" rel="noopener noreferrer sponsored">See Rates & Fees</a>
            </div>
        </div>
      </div>
    </>
  );
}

export default CitiStrataPremierReviewPage;