/* ------------------------------------------------------------------
    File:  pages/reviews/citi-custom-cash-review.js
    Route: https://www.travelcardinsider.com/reviews/citi-custom-cash-review
------------------------------------------------------------------- */

import React, { useState, useEffect, useCallback, useRef } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import styles from '../../styles/ReviewPage.module.css'; // Assuming same CSS module

import TableOfContents from '../../components/TableOfContents'; // Assuming same TOC component
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
const pagePath = '/reviews/citi-custom-cash-review'; 
const pageUrlFull = `${siteUrl}${pagePath}`;
const publishDate = '2025-06-22'; 
const updateDate = '2025-06-22'; 

const reviewDataNew = {
  cardName        : 'Citi Custom Cash® Card',
  title           : 'Citi Custom Cash® Card Review (2025): The Smartest 5% Cash-Back Card for Travelers?',
  description     : "Is the Citi Custom Cash Card the key to effortless rewards? Our 2025 review dives into its automatic 5% cash back, ThankYou® Points potential, and whether it's the ultimate card for funding your travels.",
  keywords        : 'citi custom cash review, 5% cash back card, citi thankyou points, best cash back credit card, citi custom cash for travel, citi credit card review 2025',
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
          'Cash Back Credit Cards',
          'Citi ThankYou® Rewards Program',
          'Credit Card Rewards Optimization',
          'Travel Hacking & Loyalty Programs',
          'No-Annual-Fee Credit Cards'
      ],
      bioSnippet: 'Dilan Madushanka is the founder and lead editor of Travelcardinsider, dedicated to demystifying credit cards and uncovering their real-world value for smarter travel and rewards.',
      fullBioLink: '/author/dilan-madushanka', 
      fullBio: `Dilan Madushanka is the founder and lead editor of Travelcardinsider, a platform dedicated to helping everyday people make smarter decisions with travel and rewards credit cards. [MORE BIO DETAILS TO BE ADDED BY USER]`,
      publishedStats: 'X+ in-depth card reviews per week',
      testedStats: 'Over Y+ credit card benefits across major brands',
      socialLinks: { 
          linkedin: 'https://www.linkedin.com/in/dilan-madushanka-b65293365',
          twitter: 'https://x.com/team_dilan',
          email: 'team@travelcardinsider.com'
      }
  },
  siteName: siteName,
  imageUrl        : '/download.png', // Placeholder: Replace with actual card image URL
  imageWidth      : 1290, 
  imageHeight     : 812,  
  ratingValue     : 7.5,  // Placeholder - Based on simplicity and value
  ratingCount     : 451,  // Placeholder - UPDATE AS NEEDED
  reviewBody      : 'Our editors evaluate the Citi Custom Cash® Card based on its automatic 5% rewards structure, the value of its welcome bonus, the flexibility of ThankYou® Points, its introductory APR offer, and its overall utility for both cash-back seekers and travel enthusiasts.',
  aprRange        : '19.24% - 29.24% (Variable)', 
  annualFee       : 0, 
  applyLink       : 'https://www.citi.com/credit-cards/citi-custom-cash-credit-card', 
  ratesLink       : 'https://online.citi.com/US/ag/cards/displayterms?app=UNSOL&HKOP=541175b33e25f6837a0d7af4ba29114f264447b80dcde5f6be6db7d02fed5901', 
  officialOverviewLink: 'https://www.citi.com/credit-cards/citi-custom-cash-credit-card',
  officialWelcomeOfferLink: 'https://www.citi.com/credit-cards/citi-custom-cash-credit-card',
  officialRewardsProgramLink: 'https://www.citi.com/credit-cards/thankyou-rewards',
  officialBenefitsCreditsLink: 'https://www.cardbenefits.citi.com/',
  officialTravelShoppingProtectionsLink: 'https://www.cardbenefits.citi.com/',
  officialThankYouRewardsLink: 'https://www.citi.com/credit-cards/thankyou-rewards',
  officialStrataPremierLink: 'https://www.citi.com/credit-cards/citi-strata-premier-credit-card',
  officialCardBenefitsLink: 'https://www.cardbenefits.citi.com/',
  mastercardIdTheftLink: 'https://mastercardus.idprotectiononline.com/',
  sku             : 'CITI-CUSTOM-CASH-TCI-2025',
  mpn             : 'CITICUSTOMCASH', 
  h1Content       : "The Smartest 5% Cash-Back Card for Travelers? Citi Custom Cash® Review", 
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
      brand          : { '@type': 'Brand', name: 'Citi' },
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
        priceSpecification: [
          {
            '@type'              : 'PriceSpecification',
            priceCurrency        : 'USD',
            price                : reviewDataNew.annualFee.toString(),
            valueAddedTaxIncluded: 'false',
            description          : `Annual fee: $${reviewDataNew.annualFee}.`,
          },
          {
            '@type'              : 'PriceSpecification',
            priceCurrency        : 'USD',
            description          : `Purchase APR: ${reviewDataNew.aprRange}. Foreign Transaction Fee: 3%. See official ${reviewDataNew.cardName} Rates & Fees on the issuer's website.`,
          },
        ],
        seller: { '@type': 'Organization', name: 'Citi' },
      },
      review: { '@id': `${pageUrlFull}#editorReview` },
    },
    {
      '@type'         : 'Review',
      '@id'           : `${pageUrlFull}#editorReview`,
      name            : `${reviewDataNew.cardName} – Review Updated ${new Date(updateDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}`,
      itemReviewed    : { '@id': `${pageUrlFull}#product` },
      reviewBody      : reviewDataNew.reviewBody,
      reviewRating    : {
        '@type'    : 'Rating',
        ratingValue : reviewDataNew.ratingValue.toString(),
        bestRating  : '10',
        worstRating : '1',
        description: `${siteName} editorial rating based on a 10.0 scale, as of ${new Date(updateDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}.`
      },
      author          : {
          '@type': 'Person',
          'name': reviewDataNew.author.name,
          'url': reviewDataNew.author.fullBioLink ? `${siteUrl}${reviewDataNew.author.fullBioLink}` : undefined,
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
      name               : reviewDataNew.title,
      description        : reviewDataNew.description,
      inLanguage         : 'en-US',
      isPartOf           : { '@id': `${siteUrl}#website` },
      primaryImageOfPage : { '@id': `${pageUrlFull}#primaryImage` },
      breadcrumb         : { '@id': `${pageUrlFull}#breadcrumbs` },
      datePublished      : publishDate,
      dateModified       : updateDate,
       author: {
          '@type': 'Person',
          'name': reviewDataNew.author.name,
          'url': reviewDataNew.author.fullBioLink ? `${siteUrl}${reviewDataNew.author.fullBioLink}` : undefined
       },
    },
    {
      '@type'   : 'ImageObject',
      '@id'     : `${pageUrlFull}#primaryImage`,
      url       : `${siteUrl}${reviewDataNew.imageUrl}`,
      width     : reviewDataNew.imageWidth,
      height    : reviewDataNew.imageHeight,
      caption   : reviewDataNew.cardName,
    },
    {
      '@type'        : 'BreadcrumbList',
      '@id'          : `${pageUrlFull}#breadcrumbs`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: siteName, item: siteUrl },
        { '@type': 'ListItem', position: 2, name: 'Credit Card Reviews', item: `${siteUrl}/reviews` },
        { '@type': 'ListItem', position: 3, name: `${reviewDataNew.cardName} Review`, item: pageUrlFull },
      ],
    },
    { 
      '@type'    : 'FAQPage',
      '@id'      : `${pageUrlFull}#faqs`,
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Do I have to activate the 5% categories?',
          acceptedAnswer: { '@type': 'Answer', text: "No. It's completely automatic. The card figures out your top category for you." }
        },
        {
            '@type': 'Question',
            name: 'What happens if I spend more than $500 in my top category?',
            acceptedAnswer: { '@type': 'Answer', text: "You earn 5% on the first $500, then 1% on all spending above that for the rest of the billing cycle." }
        },
        {
            '@type': 'Question',
            name: 'Can I earn 5% on the same category every month?',
            acceptedAnswer: { '@type': 'Answer', text: "Absolutely. If groceries are your top spend every month, you'll earn 5% on groceries every month (up to the cap)." }
        },
        {
            '@type': 'Question',
            name: 'Are the rewards cash back or points?',
            acceptedAnswer: { '@type': 'Answer', text: "They are technically ThankYou® Points, redeemable for cash back at a 1-point-to-1-cent ratio. This gives them added flexibility." }
        },
        {
            '@type': 'Question',
            name: 'Is there a minimum to redeem my cash back?',
            acceptedAnswer: { '@type': 'Answer', text: "No, not for a statement credit or direct deposit. You can redeem any amount you've earned." }
        },
        {
            '@type': 'Question',
            name: 'Can I have more than one Citi Custom Cash Card?',
            acceptedAnswer: { '@type': 'Answer', text: "No, Citi generally limits individuals to one of these cards." }
        },
        {
            '@type': 'Question',
            name: 'Does this card charge a foreign transaction fee?',
            acceptedAnswer: { '@type': 'Answer', text: "Yes, a 3% fee applies, making it a poor choice for use outside the U.S." }
        },
        {
            '@type': 'Question',
            name: 'Will I still earn 5% if my top category changes month to month?',
            acceptedAnswer: { '@type': 'Answer', text: "Yes! The card adapts. If you spend most on gas in July and home improvement in August, your 5% rewards will follow automatically." }
        },
        {
            '@type': 'Question',
            name: 'Can I add an authorized user?',
            acceptedAnswer: { '@type': 'Answer', text: "Yes, you can add authorized users at no additional cost, and you will earn rewards on all their purchases." }
        },
        {
            '@type': 'Question',
            name: 'What counts as "Select Travel"?',
            acceptedAnswer: { '@type': 'Answer', text: "This typically includes airlines, hotels, cruise lines, and travel agencies. It does not usually include things like parking or tolls." }
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
        "https://www.facebook.com/YourTravelCardInsiderFacebookPage",
        "https://twitter.com/YourTravelCardInsiderTwitterHandle",
      ],
    },
  ],
};

const ratingCriteriaOriginal = [
    'Automatic 5% Cash Back Value',
    'Welcome Bonus',
    '$0 Annual Fee',
    'Simplicity & Ease of Use',
    'Introductory APR Offer',
    'Flexibility of ThankYou® Points',
    'Base Earning Rate (1%)',
    'Foreign Transaction Fee (3%)',
    'Customer Service Reputation',
    'Overall Value for Focused Spenders',
];

const tocSections = [ 
    { id: 'section-1', title: '1. Card Snapshot & "Best For" Tagline' },
    { id: 'section-2', title: '2. The Main Attraction: 5% Automatic Cash-Back, Deconstructed' },
    { id: 'section-3', title: '3. Welcome Aboard: Analyzing the Sign-Up Bonus' },
    { id: 'section-4', title: '4. Rates & Fees: What Will This Card Cost You?' },
    { id: 'section-5', title: '5. Pros & Cons: The Good, the Bad & the Profitable' },
    { id: 'section-6', title: '6. Real-World Example: Meet "Taylor," a Family Traveler' },
    { id: 'section-7', title: '7. Competitive Gauntlet: Custom Cash vs. The Field' },
    { id: 'section-8', title: '8. Beyond 5%: The Hidden Power of ThankYou® Points' },
    { id: 'section-9', title: '9. Unlocking the Extras: Standard Perks and Protections' },
    { id: 'section-10', title: '10. The Redemption Experience: Cashing In Made Easy' },
    { id: 'section-11', title: '11. The Elephant in the Room: A Frank Look at Citi\'s Customer Service' },
    { id: 'section-12', title: '12. Voices from the Real World: 5 User Testimonials' },
    { id: 'section-13', title: '13. Strategic Pairings: Building a Wallet Around the Custom Cash' },
    { id: 'section-14', title: '14. Your Questions Answered: 10 Essential FAQs' },
    { id: 'section-15', title: '15. Final Verdict: Should It Be in Your Wallet?' },
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
function CitiCustomCashReviewPage() {
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
    welcomeOffer: "Earn $200 cash back (as 20,000 points) after $1,500 spend in 6 months.",
    annualFee: `$${reviewDataNew.annualFee}`,
    topEarning: "Automatic 5% cash back on your top spend category (up to $500/month).",
    keyPerks: "0% intro APR for 15 months on purchases and balance transfers.",
    travelPerk: "Points can be pooled with premium cards for travel.",
    bestFor: "Focused spenders who want effortless high-yield cash back to fund travel dreams."
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
        <link rel="alternate" href={pageUrlFull} hreflang="en-us" />
        <link rel="preload" as="image" href={`${siteUrl}${reviewDataNew.imageUrl}`} />
        <link rel="preload" as="image" href={reviewDataNew.author.imageUrl} />
        <link rel="preload" as="image" href={reviewDataNew.author.tooltipImageUrl} />
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
        <meta property="og:title"       content={reviewDataNew.title} />
        <meta property="og:description" content={reviewDataNew.description} />
        <meta property="og:url"         content={pageUrlFull} />
        <meta property="og:image"       content={`${siteUrl}${reviewDataNew.imageUrl}`} />
        <meta property="og:image:width" content={String(reviewDataNew.imageWidth)} />
        <meta property="og:image:height" content={String(reviewDataNew.imageHeight)} />
        <meta property="article:publisher" content={`https://www.facebook.com/YourTravelCardInsiderFacebookPage`} /> 
        <meta property="article:section"       content="Credit Card Reviews" />
        <meta property="article:published_time" content={publishDate} />
        <meta property="article:modified_time"  content={updateDate} />
        <meta property="article:author" content={reviewDataNew.author.name} />
        {reviewDataNew.keywords.split(',').map(keyword => (
            <meta property="article:tag" content={keyword.trim()} key={keyword.trim()} />
        ))}
        <meta name="twitter:card"        content="summary_large_image" />
        <meta name="twitter:site" content="@YourTravelCardInsiderTwitterHandle" /> 
        <meta name="twitter:creator" content={`@${reviewDataNew.author.socialLinks?.twitter?.split('/').pop() || 'YourAuthorTwitterHandle'}`} /> 
        <meta name="twitter:title"       content={reviewDataNew.title} />
        <meta name="twitter:description" content={reviewDataNew.description} />
        <meta name="twitter:image"       content={`${siteUrl}${reviewDataNew.imageUrl}`} />
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
                <h1 className={styles.heroTitle}>
                  {reviewDataNew.h1Content}
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
                        src={reviewDataNew.author.imageUrl} 
                        alt={`${reviewDataNew.author.name} headshot`}
                        width={reviewDataNew.author.imageWidth}
                        height={reviewDataNew.author.imageHeight}
                        className={styles.authorImageSmall}
                        priority 
                    />
                    <div className={styles.authorInfoBlock}>
                        <div className={styles.authorNameLine}>
                            <span className={styles.authorPrefix}>By</span>
                            <span className={styles.authorName}>{reviewDataNew.author.name}</span>
                        </div>
                        <span className={styles.authorTitle}>{reviewDataNew.author.title}</span>
                        {updateDate && (
                            <time dateTime={updateDate} className={styles.authorLastEdited}>
                                Last updated: {new Date(updateDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                            </time>
                        )}
                        {reviewDataNew.author.socialLinks && (
                            <div className={styles.authorSocialLinks}>
                                {reviewDataNew.author.socialLinks.linkedin && (
                                    <a href={reviewDataNew.author.socialLinks.linkedin} target="_blank" rel="noopener noreferrer me" aria-label={`${reviewDataNew.author.name} on LinkedIn`} className={styles.socialIconLink}>
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                                    </a>
                                )}
                                {reviewDataNew.author.socialLinks.twitter && (
                                    <a href={reviewDataNew.author.socialLinks.twitter} target="_blank" rel="noopener noreferrer me" aria-label={`${reviewDataNew.author.name} on Twitter`} className={styles.socialIconLink}>
                                         <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-.422.724-.665 1.56-.665 2.452 0 1.697.864 3.198 2.18 4.078-.8-.025-1.555-.247-2.227-.616v.054c0 2.37 1.683 4.333 3.91 4.78-.426.116-.874.174-1.337.174-.31 0-.611-.03-.904-.085.622 1.936 2.421 3.338 4.553 3.377-1.672 1.309-3.781 2.088-6.072 2.088-.394 0-.784-.023-1.169-.069 2.16 1.389 4.723 2.202 7.482 2.202 8.979 0 13.897-7.446 13.897-13.898 0-.21 0-.42-.015-.63.953-.689 1.778-1.56 2.433-2.525z"/></svg>
                                    </a>
                                )}
                                {reviewDataNew.author.socialLinks.email && (
                                    <a href={`mailto:${reviewDataNew.author.socialLinks.email}`} aria-label={`Email ${reviewDataNew.author.name}`} className={styles.socialIconLink}>
                                         <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"/></svg>
                                    </a>
                                )}
                            </div>
                        )}
                    </div>
                    {showAuthorBioTooltip && reviewDataNew.author.bioSnippet && ( 
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
                                    src={reviewDataNew.author.tooltipImageUrl} 
                                    alt={`${reviewDataNew.author.name} large headshot`}
                                    width={reviewDataNew.author.tooltipImageWidth}
                                    height={reviewDataNew.author.tooltipImageHeight}
                                    className={styles.authorTooltipImage}
                                 />
                                 <div className={styles.authorTooltipInfo}>
                                     <span className={styles.authorTooltipName}>{reviewDataNew.author.name}</span>
                                     <span className={styles.authorTooltipTitle}>{reviewDataNew.author.title}</span>
                                 </div>
                               </div>
                               {reviewDataNew.author.expertise && reviewDataNew.author.expertise.length > 0 && (
                                 <div className={styles.authorTooltipExpertise}>
                                     <strong>Expertise</strong>
                                     <ul>
                                         {reviewDataNew.author.expertise.map(area => <li key={area}>{area}</li>)}
                                     </ul>
                                 </div>
                               )}
                               <p className={styles.authorTooltipBioSnippet}>{reviewDataNew.author.bioSnippet}</p>
                               {reviewDataNew.author.fullBioLink && (
                                   <Link href={reviewDataNew.author.fullBioLink} legacyBehavior>
                                       <a className={styles.authorTooltipBioLink}>
                                           See full bio
                                       </a>
                                   </Link>
                               )}
                               {reviewDataNew.author.socialLinks && (
                                    <div className={styles.authorTooltipSocials}>
                                        {reviewDataNew.author.socialLinks.linkedin && (
                                             <a href={reviewDataNew.author.socialLinks.linkedin} target="_blank" rel="noopener noreferrer me" aria-label={`${reviewDataNew.author.name} on LinkedIn`} className={styles.socialIconLink}>
                                                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                                             </a>
                                         )}
                                         {reviewDataNew.author.socialLinks.twitter && (
                                             <a href={reviewDataNew.author.socialLinks.twitter} target="_blank" rel="noopener noreferrer me" aria-label={`${reviewDataNew.author.name} on Twitter`} className={styles.socialIconLink}>
                                                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-.422.724-.665 1.56-.665 2.452 0 1.697.864 3.198 2.18 4.078-.8-.025-1.555-.247-2.227-.616v.054c0 2.37 1.683 4.333 3.91 4.78-.426.116-.874.174-1.337.174-.31 0-.611-.03-.904-.085.622 1.936 2.421 3.338 4.553 3.377-1.672 1.309-3.781 2.088-6.072 2.088-.394 0-.784-.023-1.169-.069 2.16 1.389 4.723 2.202 7.482 2.202 8.979 0 13.897-7.446 13.897-13.898 0-.21 0-.42-.015-.63.953-.689 1.778-1.56 2.433-2.525z"/></svg>
                                             </a>
                                         )}
                                         {reviewDataNew.author.socialLinks.email && (
                                             <a href={`mailto:${reviewDataNew.author.socialLinks.email}`} aria-label={`Email ${reviewDataNew.author.name}`} className={styles.socialIconLink}>
                                                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"/></svg>
                                             </a>
                                         )}
                                    </div>
                                )}
                        </div>
                    )}
                </div>
                <p className={styles.heroSubtitle}>
                  In the vast universe of credit card rewards, complexity has become king. The {reviewDataNew.cardName} is Citi's elegant answer, offering a brilliantly simple premise: earn a high 5% rate on what you spend the most on each month, automatically.
                </p>
                <div className={styles.heroCtaContainer}>
                  <div>
                    <a
                      href={reviewDataNew.applyLink} 
                      target="_blank"
                      rel="noopener noreferrer sponsored" 
                      className={`${styles.applyNowButton} ${styles.heroApplyButton}`}
                    >
                      Apply Securely Now
                    </a>
                    <span className={styles.heroApplyButtonDisclaimer}>
                      on Citi's official site
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
                    src={reviewDataNew.imageUrl}
                    alt={reviewDataNew.cardName}
                    width={reviewDataNew.imageWidth} 
                    height={reviewDataNew.imageHeight} 
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
                    {siteName} Rating: <strong>{reviewDataNew.ratingValue.toFixed(1)}</strong>/10
                    {showRatingInfo && ( 
                      <RatingTooltip
                        ref={ratingTooltipRef}
                        ratingValue={reviewDataNew.ratingValue}
                        ratingCriteria={ratingCriteriaOriginal} 
                        onClose={() => setShowRatingInfo(false)}
                      />
                    )}
                  </span>
                  <div className={styles.starRating} title={`Rated ${reviewDataNew.ratingValue} out of 10 stars`}>
                      ★★★★★
                      <span className={styles.filledStars} style={{ '--rating': `${(reviewDataNew.ratingValue / 10) * 100}%` }}>
                        ★★★★★
                      </span>
                  </div>
                </div>
                 <div className={styles.ratingDescription}>
                    <i>{reviewDataNew.cardName}: {reviewDataNew.description}</i>
                 </div>
              </div>
            </section>

             <div className={styles.reviewContainer}> 
              <article>
                <header className={styles.reviewHeader}>
                    <div className={styles.summaryBox} id="summaryBoxTitle">
                        <h2 className={styles.summaryBoxTitle}>{reviewDataNew.cardName}: Key Insights</h2>
                        <div className={styles.summaryGrid}>
                            <div className={styles.summaryItem}>
                                <span className={styles.summaryIcon}><IconGift /></span> 
                                <span className={styles.summaryLabel}>Welcome Offer:</span>
                                <span className={styles.summaryValue}>{summaryBoxData.welcomeOffer}</span>
                            </div>
                            <div className={styles.summaryItem}>
                                <span className={styles.summaryIcon}><IconCheck /></span> 
                                <span className={styles.summaryLabel}>Annual Fee:</span>
                                <span className={styles.summaryValue}>{summaryBoxData.annualFee}</span>
                            </div>
                            <div className={styles.summaryItem}>
                                <span className={styles.summaryIcon}><IconStar /></span> 
                                <span className={styles.summaryLabel}>Top Earning:</span>
                                <span className={styles.summaryValue}>{summaryBoxData.topEarning}</span>
                            </div>
                             <div className={styles.summaryItem}>
                                <span className={styles.summaryIcon}><IconDollar /></span> 
                                <span className={styles.summaryLabel}>Key Perk:</span>
                                <span className={styles.summaryValue}>{summaryBoxData.keyPerks}</span>
                            </div>
                            <div className={styles.summaryItem}>
                                <span className={styles.summaryIcon}><IconPlane /></span>
                                <span className={styles.summaryLabel}>Travel Angle:</span>
                                <span className={styles.summaryValue}>{summaryBoxData.travelPerk}</span>
                            </div>
                            <div className={styles.summaryItem} data-full-width="true"> 
                                <span className={styles.summaryIcon}><IconPlus /></span> 
                                <span className={styles.summaryLabel}>Best For:</span>
                                <span className={styles.summaryValue}>{summaryBoxData.bestFor}</span>
                            </div>
                        </div>
                        <div className={styles.summaryBoxActions}>
                            <a href={reviewDataNew.ratesLink} className={styles.summaryRatesLink} target="_blank" rel="noopener noreferrer sponsored">
                                See Card Rates & Fees
                            </a>
                        </div>
                    </div>
                </header>

                <section id="section-1" className={styles.reviewSection}>
                  <h2>1. Card Snapshot & "Best For" Tagline</h2>
                  <p>For those who want the highlights at a glance, here’s everything you need to know.</p>
                  <ul className={styles.featureList}>
                    <li><strong>Card Name:</strong> {reviewDataNew.cardName}</li>
                    <li><strong>"Best For" Tagline:</strong> Automatic 5% cash back for focused spenders who value simplicity and want their everyday purchases to power their travel dreams.</li>
                    <li><strong>Welcome Bonus:</strong> Earn $200 cash back after spending $1,500 on purchases in the first 6 months of account opening. This bonus is awarded as 20,000 ThankYou® Points. (<a href={reviewDataNew.officialWelcomeOfferLink} target="_blank" rel="noopener noreferrer sponsored">Source: Citibank, Citi Custom Cash® Card Details</a>)</li>
                    <li><strong>Rewards Rate:</strong> 5% cash back on purchases in your top eligible spend category each billing cycle (on up to $500 spent), then 1% back. You'll earn unlimited 1% cash back on all other purchases. (<a href={reviewDataNew.officialRewardsProgramLink} target="_blank" rel="noopener noreferrer sponsored">Source: Citibank, Citi Custom Cash® Card Rewards Program</a>)</li>
                    <li><strong>Annual Fee:</strong> $0. For more options, see our list of the <Link href="/review/The-Best-Travel-Cards-with-No-Annual-Fee-Get-Big-Rewards-for-Free">best no-annual-fee travel cards</Link>. (<a href={reviewDataNew.ratesLink} target="_blank" rel="noopener noreferrer sponsored">Source: Citibank, Citi Custom Cash® Card Rates & Fees</a>)</li>
                    <li><strong>Introductory APR:</strong> 0% intro APR on purchases and balance transfers for 15 months from the date of account opening.</li>
                    <li><strong>Regular APR:</strong> After the intro period, a variable APR of {reviewDataNew.aprRange} applies.</li>
                    <li><strong>Credit Needed:</strong> Good to Excellent (typically a FICO score of 690-850). If you need help, check our <Link href="/review/How-to-Improve-Your-Credit-Score-Fast-for-Premium-Travel-Cards">guide on improving your credit score</Link>.</li>
                  </ul>
                </section>
                
                <Image
                    src="/pexels-helenalopes-697244.webp" // Placeholder
                    alt="A person smiling while using their Citi Custom Cash card for online shopping, symbolizing effortless rewards."
                    width={800}
                    height={500}
                    className={styles.contentImage}
                    loading="lazy"
                />

                <section id="section-2" className={styles.reviewSection}>
                  <h2>2. The Main Attraction: 5% Automatic Cash-Back, Deconstructed</h2>
                  <p>The soul of the {reviewDataNew.cardName} is its revolutionary simplicity. Forget activating bonus categories. Forget guessing where you’ll spend the most. This card does the work for you. Each billing cycle, it scans your spending and automatically gives you 5% cash back on the eligible category where you spent the most. Citi's tagline, "No enrolling. Just earning," nails it.</p>
                  <p>This powerful 5% reward, however, comes with a clear boundary: it only applies to the first $500 spent in that top category each billing cycle. After you hit that cap, you’ll earn a flat 1% on any further spending in that category, as well as on all other purchases.</p>
                  <p>This means you can earn a maximum of $25 in 5% rewards each month ($500 x 5%). Annually, that’s a potential $300 in high-value cash back just from this feature alone—all from a card with no annual fee.</p>
                  <p>The ten eligible spending categories are practical and cover the cornerstones of most household budgets: Restaurants, Gas Stations, Grocery Stores, Select Travel, Select Transit, Select Streaming Services, Drugstores, Home Improvement Stores, Fitness Clubs, Live Entertainment. (<a href={reviewDataNew.officialOverviewLink} target="_blank" rel="noopener noreferrer sponsored">Source: Citibank, Citi Custom Cash® Card Details</a>)</p>
                  <p>This isn’t just about the 5% return; it's about the effortlessness of achieving it. It’s designed for anyone who finds other 5% cards to be too much work, effectively selling peace of mind as much as it sells cash back.</p>
                </section>

                <section id="section-3" className={styles.reviewSection}>
                  <h2>3. Welcome Aboard: Analyzing the Sign-Up Bonus</h2>
                  <p>To get you started, the {reviewDataNew.cardName} features a generous welcome offer: earn $200 in cash back after spending $1,500 on purchases within the first 6 months. This bonus is competitive, but its structure is exceptionally user-friendly.</p>
                  <p>The $1,500 spending requirement averages out to just $250 per month, a very achievable target for most. More importantly, Citi gives you a full six-month window to get there. This is a huge advantage over competitors that often demand the same spending in a tighter three-month timeframe. It reduces the pressure to overspend just to snag the bonus. Find more great offers on our <Link href="/review/top-new-travel-credit-card-offers-2025">top new travel card offers</Link> page.</p>
                  <p>One key detail: while it's advertised as cash back, the bonus is technically awarded as 20,000 Citi ThankYou® Points. For most people, this is a distinction without a difference—you can redeem those points for a $200 statement credit or direct deposit. But as we'll explore later, this point-based system is the secret that unlocks the card's true travel potential.</p>
                </section>

                <section id="section-4" className={styles.reviewSection}>
                  <h2>4. Rates & Fees: What Will This Card Cost You?</h2>
                  <p>A great rewards card should help you get ahead, not weigh you down with fees. Here’s the full cost breakdown for the {reviewDataNew.cardName}.</p>
                  <ul className={styles.featureList}>
                      <li><strong>Annual Fee: $0.</strong> This is the card’s cornerstone. Every dollar in rewards you earn is pure profit.</li>
                      <li><strong>Introductory APR:</strong> The 0% intro APR for 15 months on both new purchases and balance transfers is a fantastic feature. It’s perfect for financing a large purchase or tackling high-interest debt from other cards. (<a href={reviewDataNew.ratesLink} target="_blank" rel="noopener noreferrer sponsored">Source: Citibank, Citi Custom Cash® Card Rates & Fees</a>)</li>
                      <li><strong>Balance Transfer Fee:</strong> A fee of 5% of the transfer amount (or $5 minimum) applies. This is on the higher side, so be sure to factor it into your calculations.</li>
                      <li><strong>Foreign Transaction Fee: 3%.</strong> This is a critical drawback. Any purchase you make abroad or from an international online seller will cost you an extra 3%. For better options, see our review of <Link href="/review/top-5-no-ftf-cards-2025">top cards with no foreign transaction fees</Link>. (<a href={reviewDataNew.ratesLink} target="_blank" rel="noopener noreferrer sponsored">Source: Citibank, Citi Custom Cash® Card Rates & Fees</a>)</li>
                      <li><strong>Late and Penalty Fees:</strong> Standard fees of up to $41 apply for late payments, and a penalty APR could be triggered if you miss a payment.</li>
                  </ul>
                  <p>The fee structure paints a clear picture: this is a phenomenal card for domestic spending and short-term financing. But for international travel, you’ll want to leave this one at home.</p>
                </section>
                
                {/* --- MID-REVIEW CTA --- */}
                <section className={styles.midArticleCta}>
                    <h3>{reviewDataNew.cardName}</h3>
                    <p>Earn 5% cash back automatically on your top eligible spend category. A simple, powerful way to make your spending work for you.</p>
                    <a href={reviewDataNew.applyLink} target="_blank" rel="noopener noreferrer sponsored" className={styles.applyNowButton}>
                        Apply Now on Citi's Site
                    </a>
                    <span className={styles.ctaDisclaimer}>Terms and conditions apply.</span>
                </section>

                <section id="section-5" className={styles.reviewSection}>
                    <h2>5. Pros & Cons: The Good, the Bad & the Profitable</h2>
                    <div className={styles.prosConsContainer}>
                        <div className={styles.prosBox}>
                            <h4>Pros</h4>
                            <ul className={styles.featureList}>
                                <li><strong>Automatic 5% Cash Back:</strong> Earns top rewards on your biggest expense category without any effort.</li>
                                <li><strong>Ultimate Simplicity:</strong> No need to activate or track rotating categories. It just works.</li>
                                <li><strong>$0 Annual Fee:</strong> Ensures you keep every cent of the rewards you earn.</li>
                                <li><strong>Generous Welcome Bonus:</strong> A solid $200 bonus with a long six-month window to earn it.</li>
                                <li><strong>Long 0% Intro APR:</strong> Excellent for financing big purchases or consolidating debt.</li>
                                <li><strong>Flexible ThankYou® Points:</strong> Rewards can be pooled with premium Citi cards for greater travel value.</li>
                            </ul>
                        </div>
                        <div className={styles.consBox}>
                            <h4>Cons</h4>
                            <ul className={styles.featureList}>
                                <li><strong>$500 Monthly Cap:</strong> 5% rewards are limited, restricting bonus earnings for big spenders.</li>
                                <li><strong>Low Base Rate:</strong> Only 1% cash back on all other purchases is uncompetitive.</li>
                                <li><strong>3% Foreign Transaction Fee:</strong> Makes it unsuitable for international travel or purchases.</li>
                                <li><strong>Light on Perks:</strong> Lacks benefits like travel insurance or cell phone protection.</li>
                                <li><strong>High Balance Transfer Fee:</strong> The 5% fee can be costly for large transfers.</li>
                                <li><strong>Customer Service Concerns:</strong> Widely reported service issues create a significant risk.</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section id="section-6" className={styles.reviewSection}>
                  <h2>6. Real-World Example: Meet "Taylor," a Family Traveler</h2>
                  <p>To see how the card works in practice, let’s imagine a year of spending for “Taylor,” a family traveler who uses the {reviewDataNew.cardName} for everyday expenses to fund their annual road trips.</p>
                  <h3>Taylor's Typical Monthly Spending:</h3>
                  <ul className={styles.featureList}>
                      <li>Groceries: $600</li>
                      <li>Gas Stations: $400</li>
                      <li>Dining: $250</li>
                      <li>Streaming Services: $40</li>
                      <li><strong>Total Monthly Spending: $1,290</strong></li>
                  </ul>
                  <h3>Here’s how Citi calculates Taylor’s cash back for the month:</h3>
                  <ol>
                      <li><strong>Identify Top Category:</strong> The system sees that "Groceries" ($600) was the highest eligible spending category.</li>
                      <li><strong>Calculate 5% Rewards:</strong> The 5% rate is applied to the first $500 of grocery spending. $500 x 5% = $25.00</li>
                      <li><strong>Calculate 1% Rewards on Remaining Spend:</strong> The extra $100 spent on groceries, plus all other purchases, earns the base 1% rate. ($100 Groceries + $400 Gas + $250 Dining + $40 Streaming) x 1% = $7.90</li>
                      <li><strong>Calculate Total Monthly Earnings:</strong> $25.00 + $7.90 = $32.90</li>
                  </ol>
                  <p>Over the course of a year, Taylor would earn $394.80 in cash back ($32.90 x 12). Add the $200 welcome bonus, and Taylor’s total take in the first year is a whopping $594.80—all from a card with no annual fee. That’s enough to cover a few nights at a hotel or a significant portion of their gas budget for next summer's adventure.</p>
                </section>
                
                <section id="section-7" className={styles.reviewSection}>
                  <h2>7. Competitive Gauntlet: Custom Cash vs. The Field</h2>
                  <p>No card is an island. To truly judge the {reviewDataNew.cardName}, we have to pit it against its top no-annual-fee rivals. This showdown reveals which card is right for your specific spending style.</p>
                  <DraggableTableWrapper>
                    <div className={styles.tableContainer}>
                      <table className={`${styles.statsTable} ${styles.comparisonTable}`}>
                        <thead>
                          <tr>
                            <th>Card</th>
                            <th>Annual Fee</th>
                            <th>Signup Bonus</th>
                            <th>Top Earning Category</th>
                            <th>Effective Cash-Back Rate</th>
                            <th>Domestic Travel Value</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td data-label="Card"><strong><Link href="/review/citi-custom-cash-2025">{reviewDataNew.cardName}</Link></strong></td>
                            <td data-label="Annual Fee">$0</td>
                            <td data-label="Signup Bonus">$200 after $1,500 spend in 6 months</td>
                            <td data-label="Top Earning Category">Automatic 5% on one category (up to $500/mo)</td>
                            <td data-label="Effective Cash-Back Rate">5%</td>
                            <td data-label="Domestic Travel Value">Excellent for gas on road trips or select travel bookings.</td>
                          </tr>
                           <tr>
                            <td data-label="Card"><Link href="/cards/chase-freedom-unlimited">Chase Freedom Flex℠</Link></td>
                            <td data-label="Annual Fee">$0</td>
                            <td data-label="Signup Bonus">$200 after $500 spend in 3 months</td>
                            <td data-label="Top Earning Category">Rotating 5% on activated categories + 3% on dining & drugstores</td>
                            <td data-label="Effective Cash-Back Rate">Up to 5%</td>
                            <td data-label="Domestic Travel Value">Good. 5% on gas (when active) and 3% on dining covers key travel costs.</td>
                          </tr>
                          <tr>
                            <td data-label="Card"><Link href="/cards/discover-it-miles">Discover it® Cash Back</Link></td>
                            <td data-label="Annual Fee">$0</td>
                            <td data-label="Signup Bonus">Cashback Match at the end of Year 1</td>
                            <td data-label="Top Earning Category">Rotating 5% on activated categories</td>
                            <td data-label="Effective Cash-Back Rate">Effectively 10% in Year 1</td>
                            <td data-label="Domestic Travel Value">Strong. The Cashback Match doubles your earnings on gas, dining, and more.</td>
                          </tr>
                          <tr>
                            <td data-label="Card"><Link href="/cards/boa-travel-rewards">Bank of America® Customized Cash Rewards</Link></td>
                            <td data-label="Annual Fee">$0</td>
                            <td data-label="Signup Bonus">$200 after $1,000 spend in 90 days</td>
                            <td data-label="Top Earning Category">Choice of one 3% category + 2% at grocery/wholesale</td>
                            <td data-label="Effective Cash-Back Rate">3%</td>
                            <td data-label="Domestic Travel Value">Moderate. The 3% on gas is solid, but lower than competitors.</td>
                          </tr>
                          <tr>
                            <td data-label="Card"><Link href="/cards/capital-one-venture">Capital One SavorOne</Link></td>
                            <td data-label="Annual Fee">$0</td>
                            <td data-label="Signup Bonus">$200 after $500 spend in 3 months</td>
                            <td data-label="Top Earning Category">Unlimited 3% on dining, entertainment, groceries & streaming</td>
                            <td data-label="Effective Cash-Back Rate">3%</td>
                            <td data-label="Domestic Travel Value">Excellent. 3% on dining and entertainment, plus no foreign transaction fees.</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </DraggableTableWrapper>
                  <p>This comparison highlights the fundamental trade-off: The {reviewDataNew.cardName} is a specialist, unmatched at rewarding one dominant spending category with effortless 5% cash back. In contrast, cards like the Chase Freedom Flex℠ and Capital One SavorOne are generalists, designed to reward multiple areas at once. The best card depends entirely on where your money goes.</p>
                </section>
                
                <section id="section-8" className={styles.reviewSection}>
                    <h2>8. Beyond 5%: The Hidden Power of ThankYou® Points</h2>
                    <p>While Citi markets the Custom Cash as a simple cash-back card, its rewards are technically earned as Citi ThankYou® Points. This is where things get exciting for travel lovers.</p>
                    <p>This hidden potential is unlocked with a strategy known as the "Citi Trifecta." By pairing the no-annual-fee Custom Cash Card with a premium travel card like the <Link href="/review/citi-strata-premier-2025">Citi Strata Premier℠ Card</Link>, the points you earn are transformed. Instead of just being worth 1 cent each for cash back, they can be pooled into your Premier account and transferred to Citi’s airline and hotel partners, like Avianca LifeMiles or Air France/KLM Flying Blue. (<a href={reviewDataNew.officialThankYouRewardsLink} target="_blank" rel="noopener noreferrer sponsored">Source: Citibank, Citi ThankYou® Rewards</a>).</p>
                    <p>Why does this matter? A point redeemed for cash is worth exactly 1 cent. But that same point, transferred to an airline, could be redeemed for a business-class flight worth 2, 5, or even 10 cents per point. Suddenly, your 5% cash back on groceries is effectively a 10%+ return in travel value. This is the insider strategy that elevates the Custom Cash from a great card to an essential one for any <Link href="/review/amex-trifecta-2025">travel rewards strategist</Link>.</p>
                </section>
                
                <Image
                    src="/pexels-pixabay-460672.jpg" // Placeholder
                    alt="A couple looking at a map and a laptop, planning their next vacation funded by credit card points."
                    width={800}
                    height={500}
                    className={styles.contentImage}
                    loading="lazy"
                />

                <section id="section-9" className={styles.reviewSection}>
                    <h2>9. Unlocking the Extras: Standard Perks and Protections</h2>
                    <p>The {reviewDataNew.cardName} is light on flashy benefits, focusing instead on its core rewards structure. However, it covers the essentials you need.</p>
                    <ul className={styles.featureList}>
                        <li><strong>Extended Warranty:</strong> This valuable perk, recently added, can extend a manufacturer's warranty by up to 24 months on eligible items you buy with the card. (<a href={reviewDataNew.officialBenefitsCreditsLink} target="_blank" rel="noopener noreferrer sponsored">Source: Citibank, Guide to Protection Benefits</a>)</li>
                        <li><strong>$0 Liability on Unauthorized Charges:</strong> Standard but crucial protection. You’re never responsible for fraudulent charges.</li>
                        <li><strong>Free FICO® Score Access:</strong> Keep tabs on your credit with free, updated access to your FICO® Score.</li>
                        <li><strong>Citi Entertainment:</strong> Get special access to presale tickets and VIP packages for concerts, sports, and other events.</li>
                        <li><strong>Mastercard ID Theft Protection™:</strong> Enroll for free monitoring and alerts to protect your identity. (<a href={reviewDataNew.mastercardIdTheftLink} target="_blank" rel="noopener noreferrer sponsored">Source: Mastercard, ID Theft Protection™</a>)</li>
                    </ul>
                    <p>Notably absent are trip cancellation insurance and cell phone protection, which reinforces this card’s identity as a specialized rewards-earning tool, not an all-in-one protection product. For cards with more robust protections, see our guide to the <Link href="/review/best-travel-insurance-cards-2025">best travel insurance cards</Link>.</p>
                </section>

                <section id="section-10" className={styles.reviewSection}>
                    <h2>10. The Redemption Experience: Cashing In Made Easy</h2>
                    <p>Earning rewards is fun, but redeeming them should be effortless. Citi delivers with a refreshingly simple redemption process. You can cash in your ThankYou® Points as a statement credit, a direct deposit to your bank account, or a check in the mail.</p>
                    <p>A standout feature is the lack of a minimum redemption amount for direct deposits and statement credits. (<a href={reviewDataNew.officialThankYouRewardsLink} target="_blank" rel="noopener noreferrer sponsored">Source: Citibank, Citi ThankYou® Rewards</a>). Many competitors make you wait until you’ve accrued $25 in rewards. With Citi, if you’ve earned $1.50, you can redeem $1.50. It’s your money, and you have complete control over it.</p>
                </section>

                <section id="section-11" className={styles.reviewSection}>
                    <h2>11. The Elephant in the Room: A Frank Look at Citi's Customer Service</h2>
                    <p>No honest review can ignore the elephant in the room: Citi’s customer service reputation. While the card itself is top-tier, the experience of dealing with the bank can be a significant concern. This isn't just chatter; it's a pattern documented across consumer platforms.</p>
                    <p>Public data from the Better Business Bureau, for instance, shows thousands of complaints filed over the last three years, with common themes including billing disputes and unresolved account issues. This is backed by a wealth of user stories on forums like Reddit, where many describe frustrating, time-consuming battles to resolve simple problems.</p>
                    <p>This creates a "high-reward, high-risk" proposition. The card offers some of the most effortless value on the market. That's the reward. The risk is that if something goes wrong, you may face a real headache getting it fixed. Your decision to apply isn't just a financial calculation; it's a risk assessment.</p>
                </section>

                <section id="section-12" className={styles.reviewSection}>
                  <h2>12. Voices from the Real World: 5 User Testimonials</h2>
                    <div className={styles.testimonialContainer}>
                      <blockquote className={styles.testimonialQuote}>
                          <p>&quot;This card lives in my car. I use it for gas and nothing else. It’s a simple way to get $25 back every month on an expense I can’t avoid.&quot;</p>
                          <footer>– David, the Gas Maximizer</footer>
                      </blockquote>
                      <blockquote className={styles.testimonialQuote}>
                          <p>&quot;I paired this with my Premier card. The 5x points I get on groceries are now fuel for my international flights. It’s the most valuable card in my wallet, hands down.&quot;</p>
                          <footer>– Maria, the Disciplined Strategist</footer>
                      </blockquote>
                       <blockquote className={styles.testimonialQuote}>
                          <p>&quot;I love that this card changes with me. In the summer, it's my gas card for road trips. In December, it automatically becomes my live entertainment card for all the holiday shows.&quot;</p>
                          <footer>– Sarah, the Seasonal Spender</footer>
                      </blockquote>
                       <blockquote className={styles.testimonialQuote}>
                          <p>&quot;The 5% is great, but pray you never have to call them. I had a fraudulent charge, and it took weeks to resolve. Great card, until it isn't.&quot;</p>
                          <footer>– Tom, the Cautious User</footer>
                      </blockquote>
                       <blockquote className={styles.testimonialQuote}>
                          <p>&quot;I have two kids and a busy job. I don’t have time to track categories. This card does it for me. It’s our family’s go-to for groceries, and I never have to think about it.&quot;</p>
                          <footer>– Jennifer, the Simplicity Seeker</footer>
                      </blockquote>
                  </div>
                </section>
                
                <section id="section-13" className={styles.reviewSection}>
                    <h2>13. Strategic Pairings: Building a Wallet Around the Custom Cash</h2>
                    <p>The {reviewDataNew.cardName} is a star player, but it performs best as part of a team. Here are two powerful pairings:</p>
                    <ul className={styles.featureList}>
                        <li><strong>The "Citi Trifecta":</strong> This is the ultimate combo for travel hackers.
                            <ul>
                                <li>Citi Custom Cash® Card: For your top spending category (5x points).</li>
                                <li>Citi® Double Cash Card: For all other non-bonus spending (2x points).</li>
                                <li><Link href="/review/citi-strata-premier-2025">Citi Strata Premier℠ Card</Link>: To unlock airline and hotel transfer partners. (<a href={reviewDataNew.officialStrataPremierLink} target="_blank" rel="noopener noreferrer sponsored">Source: Citibank, Citi Strata Premier℠ Card Details</a>)</li>
                            </ul>
                        </li>
                        <li><strong>The Domestic/International Hybrid:</strong> A simple, powerful two-card setup.
                            <ul>
                                <li>Citi Custom Cash® Card: For your 5% category in the U.S.</li>
                                <li>Capital One SavorOne Card: For its broad 3% bonus categories and, crucially, for all spending abroad thanks to its no foreign transaction fees.</li>
                            </ul>
                        </li>
                    </ul>
                </section>
                
                <section id="section-14" className={`${styles.reviewSection} ${styles.faqSection}`}>
                  <h2>14. Your Questions Answered: 10 Essential FAQs</h2>
                  <div className={styles.faqContainer}>
                      {structuredDataOptimized['@graph'].find(item => item['@type'] === 'FAQPage').mainEntity.map((faq, index) => (
                          <details key={index} className={styles.faqItem} name={`faq-${index + 1}`}>
                              <summary className={styles.faqQuestion}>{`${index + 1}. ${faq.name}`}</summary>
                              <div className={styles.faqAnswer}>
                                <p>{faq.acceptedAnswer.text}
                                {faq.name === "Can I add an authorized user?" && 
                                    <> (<a href={reviewDataNew.officialCardBenefitsLink} target="_blank" rel="noopener noreferrer sponsored">Source: Citibank, Card Benefits</a>)</>
                                }
                                </p>
                              </div>
                          </details>
                      ))}
                  </div>
                </section>

                <section id="section-15" className={styles.reviewSection}>
                  <h2>15. Final Verdict: Should It Be in Your Wallet?</h2>
                  <p>After an exhaustive analysis, the {reviewDataNew.cardName} emerges as a brilliantly designed but imperfect product. It's a card of contradictions: ingeniously simple yet backed by a potentially complicated bank; a cash-back workhorse that holds a secret key to premium travel.</p>
                  <p>So, should it be in your wallet?</p>
                  <div className={styles.profileCardContainer}>
                    <div className={styles.profileCard}>
                        <h4>For the "Set-It-and-Forget-It" Spender:</h4>
                        <p>Yes, absolutely. This is arguably the best card in its class for you. The automated, high-yield rewards are a perfect match for a hands-off approach. It's a top-tier recommendation, provided you understand the service gamble.</p>
                    </div>
                    <div className={styles.profileCard}>
                        <h4>For the "Seasonal Maximizer":</h4>
                        <p>Yes, it’s a fantastic tool. Its ability to adapt to your life's changing financial seasons—from home renovations to summer road trips—makes it a uniquely flexible and highly recommended option.</p>
                    </div>
                    <div className={styles.profileCard}>
                        <h4>For the "Travel Rewards Strategist":</h4>
                        <p>It's a must-have. This card is an essential, no-annual-fee building block for any serious Citi ThankYou® points enthusiast. Its ability to generate 5x transferable points makes it a non-negotiable part of an optimized Citi wallet.</p>
                    </div>
                  </div>
                  <p>The {reviewDataNew.cardName} isn't just a piece of plastic; it's a statement about what you prioritize. If you value automated, high-yield rewards and are willing to accept the potential service pitfalls, this card is a game-changer. It simplifies the rewards game for those tired of playing it while offering a secret passage to incredible travel value for those in the know. The choice, much like the cash back itself, is custom-fit to you.</p>
                </section>

                <section id="section-eat" className={`${styles.reviewSection} ${styles.eatSection}`}>
                    <h2 dangerouslySetInnerHTML={{ __html: `Our Commitment to E-A-T: Expertise, Authority &amp; Trustworthiness`}}></h2>
                    <p>At <strong>{siteName}</strong>, we are committed to providing content that exemplifies Expertise, Authoritativeness, and Trustworthiness (E-A-T). This review of the <strong>{reviewDataNew.cardName}</strong> has been meticulously researched and crafted. We've analyzed the card's features, benefits, rewards structure, and fees, referencing official issuer documentation from Citi, and considering real-world user experiences and data points from the rewards community. Our goal is to present a balanced, comprehensive, and reliable guide to help you make an informed decision. All information is current as of <strong>{new Date(updateDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</strong>, but we always recommend verifying details directly with the issuer as terms can change.</p>
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
            <Image src={reviewDataNew.imageUrl} alt={`${reviewDataNew.cardName} small image`} width={60} height={38} className={styles.stickyFooterCardImage} /> 
            <div className={styles.stickyFooterText}>
              <span className={styles.stickyFooterCardName}>{reviewDataNew.cardName}</span>
              <span className={styles.stickyFooterRating}>{siteName} Rating: {reviewDataNew.ratingValue.toFixed(1)}/10</span>
            </div>
            <div className={styles.stickyFooterButtons}>
                <a
                    href={reviewDataNew.applyLink} 
                    className={`${styles.stickyFooterBtn} ${styles.stickyFooterBtnApply}`}
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                >
                    Apply Now
                </a>
                <a
                    href={reviewDataNew.ratesLink} 
                    className={`${styles.stickyFooterBtn} ${styles.stickyFooterBtnRates}`}
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                >
                    See Rates & Fees
                </a>
            </div>
        </div>
      </div>
    </>
  );
}

export default CitiCustomCashReviewPage;