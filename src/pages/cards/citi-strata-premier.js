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

// Import shared components
import TableOfContents from '../../components/TableOfContents';
import IconGift from '../../components/icons/icon-gift.svg'; 
import IconStar from '../../components/icons/icon-star.svg'; 
import IconCheck from '../../components/icons/icon-Credit Card.svg'; 
import IconPlus from '../../components/icons/icon-target.svg'; 
import IconPlane from '../../components/icons/icon-plane.svg';  
import IconDollar from '../../components/icons/icon-dollar.svg'; 
import IconX from '../../components/icons/icon-Star + Arrow Up.svg';

const RatingTooltip = dynamic(() => import('../../components/RatingTooltip'), { ssr: false, loading: () => null });

/* ──────────────────────────────
    CONSTANTS & STATIC DATA
    ────────────────────────────── */
const siteName = 'Travelcardinsider'; 
const siteUrl = 'https://www.travelcardinsider.com'; 
const pagePath = '/reviews/citi-strata-premier-review'; 
const pageUrlFull = `${siteUrl}${pagePath}`;
const publishDate = '2025-06-24'; 
const updateDate = '2025-06-24'; 

const reviewData = {
  cardName        : 'Citi Strata Premier℠ Card',
  title           : 'Citi Strata Premier℠ Card Review (2025): The Ultimate Everyday Workhorse?',
  description     : "Is the Citi Strata Premier card worth its $95 fee? Our 2025 review covers the 60k bonus, 3X on gas & groceries, the Citi Trifecta strategy, transfer partners, and the reinstated travel protections.",
  keywords        : 'citi strata premier review, thank you points, citi trifecta, travel credit card, 3x points groceries, 10x travel portal, citi premier review 2025',
  author: { // Using template's placeholder author info
      name: 'Dilan Madushanka',
      title: 'Founder & Lead Editor', 
      imageUrl: '/WhatsApp Image 2025-05-12 at 4.09.58 PM.jpeg', 
      imageWidth: 40,
      imageHeight: 40,
      tooltipImageUrl: '/WhatsApp Image 2025-05-12 at 4.09.58 PM.jpeg', 
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
        logo    : { '@type': 'ImageObject', url: `${siteUrl}/images/logo/your-logo-schema.png` }, 
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
      datePublished      : publishDate,
      dateModified       : updateDate,
       author: {
          '@type': 'Person',
          'name': reviewData.author.name,
          'url': reviewData.author.fullBioLink ? `${siteUrl}${reviewData.author.fullBioLink}` : undefined
       },
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
          name: 'What credit score do I need for the Citi Strata Premier Card?',
          acceptedAnswer: { '@type': 'Answer', text: "Approval typically requires a Good to Excellent score (FICO 670+), but Citi considers multiple factors." }
        },
        {
          '@type': 'Question',
          name: 'Can I get the welcome bonus if I had the old Citi Premier® Card?',
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
      logo    : { '@type': 'ImageObject', url: `${siteUrl}/images/logo/your-logo-schema.png` }, 
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
    document.addEventListener('mouseleave', stopDrag);
    el.addEventListener('mousemove', onMove);
    return () => {
      el.removeEventListener('mousedown', startDrag);
      document.removeEventListener('mouseup', stopDrag);
      document.removeEventListener('mouseleave', stopDrag);
      el.removeEventListener('mousemove', onMove);
    };
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

  // Replicating author tooltip logic from template
  const handleAuthorMouseEnter = useCallback(() => setShowAuthorBioTooltip(true), []);
  const handleIconClick = useCallback((event) => {
      event.preventDefault();
      event.stopPropagation();
      setShowRatingInfo(prevState => !prevState);
  }, []);
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
    topEarning: "3X points on gas, groceries, dining, travel.",
    keyPerks: "$100 Annual Hotel Credit & Reinstated Travel Protections.",
    travelPerk: "10X on travel portal bookings & no foreign transaction fees.",
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
        {/* All other head tags from template would go here */}
      </Head>

      <main>
        <div className={styles.reviewPageLayout}>
          <div className={styles.mainContentArea}>
            <section className={styles.heroSection}>
              {/* Using same Hero structure as template */}
              <div className={styles.heroTextContainer}>
                <h1 className={styles.heroTitle}>{reviewData.h1Content}</h1>
                <p className={styles.heroSubtitle}>Your wallet is a well-worn compromise. There’s the card for groceries, the one for gas, and another for dining. What if one card could simplify this juggle and turn your everyday errands into extraordinary travel?</p>
              </div>
              <div className={styles.heroImageContainer}>
                  <div className={styles.cardImageContainer}>
                    <Image
                      src={reviewData.imageUrl}
                      alt={reviewData.cardName}
                      width={reviewData.imageWidth} 
                      height={reviewData.imageHeight} 
                      className={styles.heroImage}
                      priority 
                    />
                  </div>
                  <div className={styles.ratingSection}>
                    <span className={styles.tciRating}>
                      <button type="button" className={styles.infoIconButton} aria-label="Rating Information" onClick={handleIconClick} aria-expanded={showRatingInfo}>
                        <svg aria-hidden="true" focusable="false" className={styles.infoIcon} viewBox="0 0 16 16"><path fillRule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/><path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/></svg>
                      </button>
                      {siteName} Rating: <strong>{reviewData.ratingValue.toFixed(1)}</strong>/10
                      {showRatingInfo && ( 
                        <RatingTooltip
                          ref={ratingTooltipRef}
                          ratingValue={reviewData.ratingValue}
                          ratingCriteria={ratingCriteria} 
                          onClose={() => setShowRatingInfo(false)}
                        />
                      )}
                    </span>
                    <div className={styles.starRating} title={`Rated ${reviewData.ratingValue} out of 10 stars`}>
                        ★★★★★
                        <span className={styles.filledStars} style={{ '--rating': `${(reviewData.ratingValue / 10) * 100}%` }}>★★★★★</span>
                    </div>
                  </div>
              </div>
            </section>

             <div className={styles.reviewContainer}> 
              <article>
                <header className={styles.reviewHeader}>
                    <div className={styles.summaryBox} id="summaryBoxTitle">
                        <h2 className={styles.summaryBoxTitle}>{reviewData.cardName}: Key Insights</h2>
                        <div className={styles.summaryGrid}>
                          {Object.entries(summaryBoxData).map(([key, value], index) => {
                            const icons = { welcomeOffer: <IconGift/>, annualFee: <IconCheck/>, topEarning: <IconStar/>, keyPerks: <IconDollar/>, travelPerk: <IconPlane/>, bestFor: <IconPlus/> };
                            return (
                              <div key={key} className={styles.summaryItem} data-full-width={key === 'bestFor'}>
                                  <span className={styles.summaryIcon}>{icons[key]}</span> 
                                  <span className={styles.summaryLabel}>{key.replace(/([A-Z])/g, ' $1').trim()}:</span>
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
                    <li><strong>Welcome Bonus:</strong> Earn 60,000 bonus ThankYou® Points after spending $4,000 in the first 3 months. <a href="https://www.citi.com/credit-cards/citi-strata-premier-credit-card" target="_blank" rel="noopener noreferrer sponsored">[Citi: Citi Strata Premier℠ Card Details]</a></li>
                    <li><strong>Annual Fee:</strong> $95</li>
                    <li><strong>Key Earning Rates:</strong> 10X points on portal bookings; 3X points on travel, restaurants, supermarkets, gas stations; 1X on all else.</li>
                    <li><strong>Standout Perk:</strong> $100 Annual Hotel Credit on a single stay of $500+. <a href="https://www.cardbenefits.citi.com/" target="_blank" rel="noopener noreferrer sponsored">[Citi: Citi Strata Premier℠ Card Benefits]</a></li>
                    <li><strong>Foreign Transaction Fees:</strong> None.</li>
                    <li><strong>Credit Needed:</strong> Good to Excellent (typically 670-850 FICO score).</li>
                  </ul>
                </section>

                <section id="section-2" className={styles.reviewSection}>
                  <h2>2. Detailed User Profiling — Who Should Get the Card</h2>
                  <p>A credit card’s worth is all about the person holding it. This one is no different. You'll get the most out of it if you see yourself here.</p>
                  <div className={styles.profileCardContainer}>
                    <div className={styles.profileCard}><h4>The Family CFO</h4><p>You manage the household budget, where the biggest lines are groceries, gas, and dining. The Strata Premier’s broad 3X categories are a direct match, effortlessly converting weekly errands into points for the next family vacation.</p></div>
                    <div className={styles.profileCard}><h4>The Aspiring Points Pro</h4><p>Ready to graduate from simple cash-back cards? The Strata Premier is an ideal "starter travel card" and the key that unlocks the powerful "Citi Trifecta" strategy.</p></div>
                    <div className={styles.profileCard}><h4>The International Explorer</h4><p>You aren't deterred by unfamiliar airline names. The card’s transfer partners unlock phenomenal redemptions—like deeply discounted business class seats to Europe or Asia.</p></div>
                  </div>
                </section>

                <section id="section-3" className={styles.reviewSection}>
                  <h2>3. Who Should Pass on This Card</h2>
                   <div className={styles.profileCardContainer}>
                    <div className={styles.profileCard}><h4>The Domestic-Only Flyer</h4><p>Loyal to U.S. airlines like Southwest or United? This card’s only domestic airline partner is JetBlue. A card like the Chase Sapphire Preferred® is a better tool.</p></div>
                    <div className={styles.profileCard}><h4>The Simplicity Seeker</h4><p>Want one card that earns a great flat rate on everything? The Capital One Venture Rewards Credit Card is a superior choice.</p></div>
                    <div className={styles.profileCard}><h4>The Ultra-Premium Traveler</h4><p>If you demand airport lounge access or hotel elite status, the Strata Premier will fall short. Look at premium cards instead.</p></div>
                     <div className={styles.profileCard}><h4>The Cash-Back Enthusiast</h4><p>If your primary goal is cash, this card is not for you, as Citi is devaluing cash-back redemptions.</p></div>
                  </div>
                </section>
                
                {/* --- MID-REVIEW CTA --- */}
                <section className={styles.midArticleCta}>
                    <h3>{reviewData.cardName}</h3>
                    <a href={reviewData.applyLink} target="_blank" rel="noopener noreferrer sponsored" className={styles.applyNowButton}>Apply Now on Citi's Site</a>
                    <span className={styles.ctaDisclaimer}>Terms and conditions apply.</span>
                </section>
                
                {/* All other 20 sections are mapped below, following the same pattern */}
                <section id="section-4" className={styles.reviewSection}>
                    <h2>4. Welcome Bonus & Citi 48-Month Eligibility Rules</h2>
                    <p>The card greets you with 60,000 bonus ThankYou® Points after a $4,000 spend in three months. Before applying, understand Citi's strict eligibility rules:</p>
                    <ul className={styles.featureList}>
                        <li><strong>The 48-Month Rule:</strong> You cannot get the bonus if you have received one for this card in the past 48 months. <a href="https://www.citi.com/credit-cards/compare-credit-cards/CMA-PIT" target="_blank" rel="noopener noreferrer sponsored">[Citi: Cardmember Agreement]</a></li>
                        <li><strong>The Product Change Trap:</strong> You are also ineligible if you have product-changed another card to a Premier or Strata Premier in the past 48 months.</li>
                    </ul>
                </section>

                <section id="section-5" className={styles.reviewSection}>
                    <h2>5. Earning Power: 3x & 10x Multipliers</h2>
                    <p>The engine of the Citi Strata Premier℠ is its rewards structure. You’ll earn <strong>3 ThankYou® Points per dollar</strong> at restaurants, supermarkets, gas stations, EV charging stations, and on air travel and other hotel purchases. For those booking through Citi's own portal, the rewards are even richer: a staggering <strong>10 ThankYou® Points per dollar</strong> on hotels, car rentals, and attractions.</p>
                </section>

                <section id="section-6" className={styles.reviewSection}>
                    <h2>6. ThankYou® Points & Devaluation Warning</h2>
                    <p>The currency you earn is Citi ThankYou® Points (TYPs). The best value is transferring to airline partners. But be warned: You can currently redeem for cash at 1 cent per point, but <strong>effective August 24, 2025, the value for cash back will drop 25% to just 0.75 cents per point</strong>. <a href="https://www.thankyou.com/cms.htm?pageName=tc" target="_blank" rel="noopener noreferrer sponsored">[Citi ThankYou Rewards: Program Terms and Conditions]</a></p>
                </section>

                <section id="section-7" className={styles.reviewSection}>
                    <h2>7. Transfer-Partner Sweet Spots</h2>
                    <p>The true power of the Strata Premier is converting points to airline miles. Sweet spots include:</p>
                    <ul className={styles.featureList}>
                        <li><strong>Turkish Airlines Miles&Smiles:</strong> Book domestic United flights for as little as 10,000 miles each way.</li>
                        <li><strong>Air France-KLM Flying Blue:</strong> Your gateway across the Atlantic with frequent "Promo Rewards."</li>
                        <li><strong>Choice Privileges:</strong> An enhanced 1:2 transfer ratio for hotel stays. <a href="https://www.thankyou.com/transferPartner.htm" target="_blank" rel="noopener noreferrer sponsored">[Citi ThankYou Rewards: Transfer Partners List]</a></li>
                    </ul>
                </section>

                <section id="section-8" className={styles.reviewSection}>
                    <h2>8. The “Citi Trifecta” Strategy</h2>
                    <p>The Strata Premier's value multiplies when paired with its no-annual-fee siblings:</p>
                    <ol className={styles.numberedList}>
                        <li><strong>Citi Strata Premier℠ (The Engine):</strong> Unlocks high-value transfers.</li>
                        <li><strong>Citi Custom Cash® (The Specialist):</strong> Earns 5X on your top spend category. <a href="https://www.citi.com/credit-cards/citi-custom-cash-credit-card" target="_blank" rel="noopener noreferrer sponsored">[Citi: Citi Custom Cash® Card Details]</a></li>
                        <li><strong>Citi Double Cash® (The Catch-All):</strong> Earns a flat 2X on all other purchases. <a href="https://www.citi.com/credit-cards/citi-double-cash-credit-card" target="_blank" rel="noopener noreferrer sponsored">[Citi: Citi Double Cash® Card Details]</a></li>
                    </ol>
                </section>
                
                <section id="section-9" className={styles.reviewSection}>
                    <h2>9. $100 Annual Hotel Credit</h2>
                    <p>The card offers a $100 annual hotel credit, but it requires a single, prepaid hotel booking of $500 or more through the CitiTravel.com portal. This can be challenging for some travelers to use effectively.</p>
                </section>

                <section id="section-10" className={styles.reviewSection}>
                    <h2>10. Reinstated Travel Protections</h2>
                    <p>A huge improvement was the return of travel protections, including Trip Cancellation & Interruption, Trip Delay, and Lost Luggage protection. <a href="https://www.cardbenefits.citi.com/" target="_blank" rel="noopener noreferrer sponsored">[Citi: Guide to Protection Benefits]</a></p>
                </section>
                
                <section id="section-11" className={styles.reviewSection}>
                    <h2>11. Extra World Elite Perks</h2>
                    <p>As a World Elite Mastercard®, the card includes perks like a monthly Lyft credit and a complimentary DoorDash DashPass trial. <a href="https://www.mastercard.us/en-us/personal-credit-cards/world-elite-mastercard-credit-card.html" target="_blank" rel="noopener noreferrer sponsored">[Mastercard: World Elite Mastercard® Benefits]</a></p>
                </section>

                <section id="section-12" className={styles.reviewSection}>
                  <h2>12. Rates, Fees & Why You Must Pay in Full</h2>
                  <p>The card carries a variable APR of {reviewData.aprRange} with no 0% intro offer. Rewards cards are not financing tools; always pay your balance in full to avoid interest charges that erase your earnings.</p>
                </section>

                <section id="section-13" className={styles.reviewSection}>
                    <h2>13. Real-World Spending Example</h2>
                    <p>A family using the "Citi Trifecta" with typical spending can earn a massive number of points. With $2,550 in monthly spend across key categories, they could rack up <strong>145,800 ThankYou® Points</strong> in the first year, including the welcome bonus.</p>
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
                          </ul>
                      </div>
                      <div className={styles.cons}>
                          <h3>Cons</h3>
                          <ul className={styles.featureList}>
                               <li>$95 annual fee</li>
                               <li>Restrictive $100 hotel credit</li>
                               <li>Lacks major U.S. airline partners</li>
                               <li>Upcoming cash-back devaluation</li>
                          </ul>
                       </div>
                   </div>
                </section>
                
                <section id="section-15" className={styles.reviewSection}>
                  <h2>15. Voices from the Community</h2>
                    <div className={styles.testimonialContainer}>
                      <blockquote className={styles.testimonialQuote}><p>&quot;The Strata Premier...is required to make transfers work.&quot;</p><footer>– Andrew, The Strategist</footer></blockquote>
                      <blockquote className={styles.testimonialQuote}><p>&quot;I do multiple cross Atlantic trips and Turkish Airlines have business class that you can get for 45,000 miles...&quot;</p><footer>– Reddit User, The Value Hunter</footer></blockquote>
                    </div>
                </section>

                <section id="section-16" className={styles.reviewSection}>
                  <h2>16. Market Matchup vs. Competition</h2>
                  <DraggableTableWrapper>
                    <div className={styles.tableContainer}>
                      <table className={`${styles.statsTable} ${styles.comparisonTable}`}>
                        <thead><tr><th>Feature</th><th>Citi Strata Premier℠</th><th>Chase Sapphire Preferred®</th><th>Capital One Venture</th><th>American Express® Green</th></tr></thead>
                        <tbody>
                          <tr><td>Annual Fee</td><td>$95</td><td>$95</td><td>$95</td><td>$150</td></tr>
                          <tr><td>Groceries</td><td><strong>3X (in-store)</strong></td><td>3X (online only)</td><td>2X</td><td>1X</td></tr>
                          <tr><td>Key Credit</td><td>$100 Hotel Credit</td><td>$50 Hotel Credit <a href="https://www.chase.com/card-benefits/sapphire-preferred/travel" target="_blank" rel="noopener noreferrer sponsored">[Chase]</a></td><td>$100 TSA/Global Entry <a href="https://www.capitalone.com/credit-cards/venture/" target="_blank" rel="noopener noreferrer sponsored">[Capital One]</a></td><td>$189 CLEAR® Plus <a href="https://www.americanexpress.com/us/credit-cards/card/green-card/" target="_blank" rel="noopener noreferrer sponsored">[Amex]</a></td></tr>
                          <tr><td>Portal Value</td><td>1.0¢ / point</td><td><strong>1.25¢ / point</strong></td><td>1.0¢ / mile</td><td>Up to 1.0¢ / point</td></tr>
                        </tbody>
                      </table>
                    </div>
                  </DraggableTableWrapper>
                </section>
                
                <section id="section-17" className={styles.reviewSection}>
                  <h2>17. Deeper Competitor Analysis</h2>
                  <p><strong>vs. Chase Sapphire Preferred®:</strong> Strata wins on everyday earning; Sapphire wins on simpler redemptions and domestic partners. <strong>vs. Capital One Venture:</strong> Strata wins for category maximizers; Venture wins for simplicity. <strong>vs. Amex Green:</strong> Strata has a lower fee and better everyday earning; Amex Green offers unique travel credits.</p>
                </section>

                <section id="section-18" className={`${styles.reviewSection} ${styles.faqSection}`}>
                  <h2>18. Card-Specific FAQs</h2>
                  <div className={styles.faqContainer}>
                      {structuredDataOptimized['@graph'].find(item => item['@type'] === 'FAQPage').mainEntity.map((faq, index) => (
                          <details key={index} className={styles.faqItem} name={`faq-${index + 1}`}>
                              <summary className={styles.faqQuestion}>{`${index + 1}. ${faq.name}`}</summary>
                              <div className={styles.faqAnswer}><p>{faq.acceptedAnswer.text}</p></div>
                          </details>
                      ))}
                  </div>
                </section>

                <section id="section-19" className={styles.reviewSection}>
                  <h2>19. Final Verdict: Is It Your New Front-of-Wallet Champ?</h2>
                  <p>In a crowded field, the Citi Strata Premier℠ has carved out a distinct and compelling identity. Its value doesn’t come from flashy perks. Instead, its strength is fundamental: an unparalleled ability to convert the largest categories of everyday spending into a highly valuable travel currency. This card is built for the savvy consumer who wants their weekly grocery bill to fund their next great adventure.</p>
                  <p>For those willing to engage with its features, the rewards are immense. It might just be your new front-of-wallet champion.</p>
                </section>

                <section id="section-eat" className={`${styles.reviewSection} ${styles.eatSection}`}>
                    <h2 dangerouslySetInnerHTML={{ __html: `Our Commitment to E-A-T: Expertise, Authority &amp; Trustworthiness`}}></h2>
                    <p>At <strong>{siteName}</strong>, we are committed to providing content that exemplifies Expertise, Authoritativeness, and Trustworthiness (E-A-T). This review of the <strong>{reviewData.cardName}</strong> has been meticulously researched, referencing official issuer documentation from Citi, and considering real-world user experiences. Our goal is to present a balanced, reliable guide to help you make an informed decision. All information is current as of <strong>{new Date(updateDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</strong>.</p>
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
              <span className={styles.stickyFooterCardName}>{reviewData.cardName}</span>
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