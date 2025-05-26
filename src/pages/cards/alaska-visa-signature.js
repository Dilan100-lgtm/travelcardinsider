/* ------------------------------------------------------------------
    File:  pages/reviews/alaska-airlines-visa-signature-review.js
    Route: https://www.yourwebsite.com/reviews/alaska-airlines-visa-signature-review
------------------------------------------------------------------- */

import React, { useState, useEffect, useCallback, useRef } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import styles from '../../styles/ReviewPage.module.css'; // Assuming same CSS module as aadvantage-mileup.js

import TableOfContents    from '../../components/TableOfContents'; // Assuming same TOC component
import IconGift from '../../components/icons/icon-gift.svg'; // UPDATE AS NEEDED (path to your icon)
import IconStar from '../../components/icons/icon-star.svg'; // UPDATE AS NEEDED (path to your icon)
import IconCheck from '../../components/icons/icon-Credit Card.svg'; // UPDATE AS NEEDED (path to your icon, e.g. a checkmark or fee icon)
// import IconX from '../../components/icons/icon-Star + Arrow Up.svg'; // Not explicitly used in Aeroplan summary, but available
import IconPlus from '../../components/icons/icon-target.svg'; // UPDATE AS NEEDED (path to your icon, represents 'Best For' or 'Key Benefit')
// ...existing code...
import IconBag from '../../components/icons/icon-bag.svg';      // Add this line
import IconPlane from '../../components/icons/icon-plane.svg';  // Add this line
import IconX from '../../components/icons/icon-Star\ +\ Arrow\ Up.svg'; // Add this line (update path if needed)
// ...existing code...

const RatingTooltip = dynamic(() => import('../../components/RatingTooltip'), { ssr: false, loading: () => null });

/* ──────────────────────────────
    CONSTANTS & STATIC DATA
    ────────────────────────────── */
const siteName    = 'Travelcardinsider'; // UPDATE AS NEEDED
const siteUrl     = 'https://www.travelcardinsider.com'; // UPDATE AS NEEDED: Replace with your actual site URL
const pagePath    = '/reviews/alaska-airlines-visa-signature-review'; // UPDATE AS NEEDED
const pageUrlFull = `${siteUrl}${pagePath}`;
const publishDate = '2025-05-25'; // UPDATE AS NEEDED: Current date or actual publish date
const updateDate  = '2025-05-25'; // UPDATE AS NEEDED: Current date or actual update date

const reviewDataNew = {
  cardName        : 'Alaska Airlines Visa Signature® Card',
  title           : 'Alaska Airlines Visa Signature® Card Review (2025): Is It Your Best West Coast Co-Pilot?',
  description     : 'In-depth 2025 review of the Alaska Airlines Visa Signature® Card: Companion Fare™, free checked bag, 3x miles on Alaska, oneworld® benefits, $95 fee. Ideal for West Coast travel & beyond.',
  keywords        : 'Alaska Airlines Visa Signature review, Alaska Airlines credit card, Companion Fare, Mileage Plan, oneworld alliance, travel rewards card, Bank of America credit card, airline miles, free checked bag',
  author: { // Placeholder: UPDATE ALL AUTHOR DETAILS AS NEEDED
      name: 'Dilan Madushanka', // UPDATE
      title: 'Founder & Lead Editor', // UPDATE
      imageUrl: '/WhatsApp Image 2025-05-12 at 4.09.58 PM.jpeg', // Placeholder - UPDATE
      imageWidth: 40,
      imageHeight: 40,
      tooltipImageUrl: '/WhatsApp Image 2025-05-12 at 4.09.58 PM.jpeg', // Placeholder - UPDATE
      tooltipImageWidth: 60,
      tooltipImageHeight: 60,
      expertise: [ // UPDATE
          'Airline Credit Cards',
          'Travel Rewards Programs',
          'Companion Passes',
          'Loyalty Program Analysis',
          'Credit Card Benefits Evaluation'
      ],
      bioSnippet: 'Dilan Madushanka is the founder and lead editor of Travelcardinsider, dedicated to demystifying credit cards and uncovering their real-world value for smarter travel.', // UPDATE
      fullBioLink: '/author/dilan-madushanka', // Placeholder - UPDATE
      fullBio: `Dilan Madushanka is the founder and lead editor of Travelcardinsider, a platform dedicated to helping everyday people make smarter decisions with travel and rewards credit cards. [MORE BIO DETAILS TO BE ADDED BY USER]`, // UPDATE
      publishedStats: 'X+ in-depth card reviews per week', // Placeholder - UPDATE
      testedStats: 'Over Y+ credit card benefits across major brands', // Placeholder - UPDATE
      socialLinks: { // Placeholder - UPDATE
          linkedin: 'https://www.linkedin.com/in/dilan-madushanka-b65293365',
          twitter: 'https://x.com/team_dilan',
          email: 'team@travelcardinsider.com'
      }
  },
  siteName: siteName,
  imageUrl        : '/1bbt_sigcm_v_mileageplan_250x158.png', // Placeholder: Replace with actual card image URL
  imageWidth      : 1290, // Placeholder - UPDATE if image dimensions differ
  imageHeight     : 812,  // Placeholder - UPDATE if image dimensions differ
  ratingValue     : 7.9,  // Placeholder - UPDATE AS NEEDED (e.g. 4.25/5 * 2)
  ratingCount     : 210,  // Placeholder - UPDATE AS NEEDED
  reviewBody      : 'Our editors evaluate the Alaska Airlines Visa Signature® Card based on its Companion Fare™, free checked bag benefit, mileage earning rates (especially on Alaska purchases), oneworld® Alliance access, annual fee, and overall value for U.S.-based travelers, particularly those on the West Coast.',
  aprRange        : '20.24% - 29.24% variable', // From your text
  annualFee       : 95, // From your text
  // IMPORTANT: REPLACE WITH YOUR ACTUAL AFFILIATE LINK
  applyLink       : 'https://www.alaskaair.com/content/credit-card/visa-signature?srsltid=AfmBOopDXeo80pVEogV9HD0vekWjZ37Oa5Q3QSVRkVZWNhEaMZKv7F68',
  // Official rates link from research
  ratesLink       : 'https://www.bankofamerica.com/credit-cards/products/alaska-airlines-credit-card/',
  sku             : 'BOFA-ALASKA-SIG-TCI-2025', // Placeholder - Example SKU
  mpn             : 'BOFAALASKASIG', // Placeholder - Example MPN
  h1Content       : "Alaska Airlines Visa Signature® Card: Your Co-Pilot for West Coast Adventures and Beyond?", // From your text
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
      image          : `${siteUrl}${reviewDataNew.imageUrl}`, // Ensure full URL
      description    : reviewDataNew.description,
      sku            : reviewDataNew.sku,
      mpn            : reviewDataNew.mpn,
      brand          : { '@type': 'Brand', name: 'Alaska Airlines' },
      aggregateRating: {
        '@type'    : 'AggregateRating',
        ratingValue : reviewDataNew.ratingValue.toString(),
        bestRating  : '10',
        worstRating : '1',
        ratingCount : reviewDataNew.ratingCount.toString(),
        reviewCount : '1', // Assuming 1 editor review for this page
      },
      offers: {
        '@type'            : 'Offer',
        url                : reviewDataNew.applyLink, // Your affiliate link
        priceCurrency      : 'USD',
        price              : reviewDataNew.annualFee.toString(),
        priceValidUntil    : '2026-12-31', // UPDATE AS NEEDED
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
            description          : `Purchase APR: ${reviewDataNew.aprRange}. Foreign Transaction Fee: None.`, // Updated from text
          },
        ],
        seller: { '@type': 'Organization', name: 'Bank of America' },
      },
      review: { '@id': `${pageUrlFull}#editorReview` },
    },
    {
      '@type'         : 'Review',
      '@id'           : `${pageUrlFull}#editorReview`,
      name            : `${reviewDataNew.cardName} – Review Updated ${updateDate}`,
      itemReviewed    : { '@id': `${pageUrlFull}#product` },
      reviewBody      : reviewDataNew.reviewBody,
      reviewRating    : {
        '@type'    : 'Rating',
        ratingValue : reviewDataNew.ratingValue.toString(),
        bestRating  : '10',
        worstRating : '1',
        description: `${siteName} editorial rating based on a 10.0 scale, as of ${updateDate}.`
      },
      author          : {
          '@type': 'Person',
          'name': reviewDataNew.author.name,
          'url': reviewDataNew.author.fullBioLink ? `${siteUrl}${reviewDataNew.author.fullBioLink}` : undefined
      },
      publisher       : {
        '@type' : 'Organization',
        name    : siteName,
        logo    : { '@type': 'ImageObject', url: `${siteUrl}/images/logo/your-logo-schema.png` }, // UPDATE AS NEEDED
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
      url       : `${siteUrl}${reviewDataNew.imageUrl}`, // Ensure full URL
      width     : reviewDataNew.imageWidth,
      height    : reviewDataNew.imageHeight,
      caption   : reviewDataNew.cardName,
    },
    {
      '@type'        : 'BreadcrumbList',
      '@id'          : `${pageUrlFull}#breadcrumbs`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: siteName, item: siteUrl },
        { '@type': 'ListItem', position: 2, name: 'Credit Card Reviews', item: `${siteUrl}/reviews` }, // UPDATE AS NEEDED if review category path is different
        { '@type': 'ListItem', position: 3, name: `${reviewDataNew.cardName} Review`, item: pageUrlFull },
      ],
    },
    { // Populated from Section 19 of your text
      '@type'    : 'FAQPage',
      '@id'      : `${pageUrlFull}#faqs`,
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How much are Alaska Airlines miles worth?',
          acceptedAnswer: { '@type': 'Answer', text: "Generally 1.3-1.5 cents each for economy, but can be 2-4+ cents for premium partner awards. You can find more details on the Alaska Airlines Mileage Plan™." }
        },
        {
          '@type': 'Question',
          name: "Can I use Alaska's Famous Companion Fare™ on partner airlines?",
          acceptedAnswer: { '@type': 'Answer', text: "No, it's only for flights marketed and operated by Alaska Airlines. Specific terms can be found on the Alaska Airlines website regarding their Companion Fare™." }
        },
        {
          '@type': 'Question',
          name: 'Do I need a Bank of America account for the 10% relationship miles bonus?',
          acceptedAnswer: { '@type': 'Answer', text: "Yes, an eligible Bank of America® consumer checking/savings or a Merrill investment account is required." }
        },
        {
          '@type': 'Question',
          name: 'What credit score do I typically need for the Alaska Airlines Visa Signature® Card?',
          acceptedAnswer: { '@type': 'Answer', text: "Generally good to excellent credit (typically FICO 670+, often 700-720+ for Visa Signature). Approval depends on various factors from Bank of America." }
        },
        {
          '@type': 'Question',
          name: 'Does the free checked bag apply if I only pay taxes on an award ticket with the card?',
          acceptedAnswer: { '@type': 'Answer', text: "Terms usually state 'purchase airfare' with the card. It's best to verify with Alaska Airlines for award tickets, as paying only taxes may not qualify according to their checked bag policy." }
        }
      ],
    },
    {
      '@type' : 'Organization',
      '@id'   : `${siteUrl}#website`,
      name    : siteName,
      url     : siteUrl,
      logo    : { '@type': 'ImageObject', url: `${siteUrl}/images/logo/your-logo-schema.png` }, // UPDATE AS NEEDED
      sameAs  : [ // UPDATE AS NEEDED: Add actual social links for your organization
        "https://www.facebook.com/YourFacebookPageURL", // UPDATE
        "https://twitter.com/YourTwitterHandle", // UPDATE
        // "https://www.linkedin.com/company/YourCompany" // UPDATE
      ],
    },
  ],
};

// UPDATE AS NEEDED: Tailor these to your specific rating methodology for this card
const ratingCriteriaOriginal = [
    'Companion Fare™ Value & Accessibility',
    'Free Checked Bag Benefit (Self + Companions)',
    'Alaska Airlines Purchase Rewards (3X Miles)',
    'Bonus Rewards Categories (Gas, EV, Transit, etc. - 2X Miles)',
    'Base Rewards Rate (1X Mile)',
    'Annual Fee ($95) vs. Benefits',
    'Welcome Offer & Initial Perks',
    'Oneworld® Alliance & Partner Redemptions Value',
    'Relationship Bonus with Bank of America®',
    'Travel & Purchase Protections (Visa Signature)',
    'Foreign Transaction Fee (None)',
    'EQM Earning Potential (If applicable)',
];

const tocSections = [ // Generated from your 20 sections
    { id: 'section-intro', title: 'Introduction: Alaska Airlines Card – Your West Coast Co-Pilot?' },
    { id: 'section-1', title: '1. Card Snapshot & "Best For" Tagline' },
    { id: 'section-2', title: '2. Deep Dive: Welcome Offer & Initial Perks' },
    { id: 'section-3', title: '3. Unpacking the Annual Fee: Is it Worth $95?' },
    { id: 'section-4', title: '4. Earning Power: How Your Miles Take Flight (3-2-1 Rewards)' },
    { id: 'section-5', title: "5. The Star: Alaska's Famous Companion Fare™ Explained" },
    { id: 'section-6', title: '6. Fly Lighter: The Free Checked Bag Benefit' },
    { id: 'section-7', title: '7. Board Sooner: Priority Boarding Perks' },
    { id: 'section-8', title: '8. Sweeten the Journey: Inflight Discounts & Lounge Access Discount' },
    { id: 'section-9', title: '9. Boost Your Earnings: The 10% Relationship Bonus' },
    { id: 'section-10', title: "10. Beyond the Flight: Understanding Alaska's Mileage Plan™" },
    { id: 'section-11', title: '11. The Fine Print: Full Spectrum of Rates & Fees' },
    { id: 'section-12', title: '12. Security and Account Management Features' },
    { id: 'section-13', title: "13. Travel & Purchase Protections: What's Covered?" },
    { id: 'section-14', title: '14. Detailed User Profiling: Who Should Get This Card?' },
    { id: 'section-15', title: '15. Real-World People Ideas: Meet Alex, Ben & Chloe, and David' },
    { id: 'section-16', title: '16. Show Me the Value: A Real-World Example' },
    { id: 'section-17', title: '17. Head-to-Head: Alaska Card vs. The Competition' },
    { id: 'section-18', title: '18. Pros & Cons: A Balanced View' },
    { id: 'section-19', title: '19. Card-Specific Frequently Asked Questions (FAQs)' },
    { id: 'section-20', title: '20. Conclusion: Charting Your Course with the Alaska Card' },
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
function AlaskaAirlinesVisaSignatureReviewPage() {
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
        <link rel="preload" as="image" href={reviewDataNew.author.imageUrl} /> {/* UPDATE AS NEEDED */}
        <link rel="preload" as="image" href={reviewDataNew.author.tooltipImageUrl} />  {/* UPDATE AS NEEDED */}
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
        <meta property="article:publisher" content={`https://www.facebook.com/YourFacebookPageURL`} /> {/* UPDATE AS NEEDED */}
        <meta property="article:section"       content="Credit Card Reviews" /> {/* UPDATE AS NEEDED */}
        <meta property="article:published_time" content={publishDate} />
        <meta property="article:modified_time"  content={updateDate} />
        <meta property="article:author" content={reviewDataNew.author.name} />
        {reviewDataNew.keywords.split(',').map(keyword => (
            <meta property="article:tag" content={keyword.trim()} key={keyword.trim()} />
        ))}
        <meta name="twitter:card"        content="summary_large_image" />
        <meta name="twitter:site" content="@YourTwitterHandle" /> {/* UPDATE AS NEEDED */}
        <meta name="twitter:creator" content={`@${reviewDataNew.author.socialLinks?.twitter?.split('/').pop() || 'YourAuthorTwitterHandle'}`} /> {/* UPDATE AS NEEDED */}
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
                        src={reviewDataNew.author.imageUrl} // UPDATE AS NEEDED
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
                                    src={reviewDataNew.author.tooltipImageUrl} // UPDATE AS NEEDED
                                    alt={`${reviewDataNew.author.name} headshot`}
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
                 Want more travel for less? If you're a U.S. explorer, especially with West Coast or global dreams, the Alaska Airlines Visa Signature® Card might be your ticket. Could it unlock more adventures and valuable perks?
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
                      on Bank of America's official site
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
                    src={reviewDataNew.imageUrl} // UPDATE AS NEEDED
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
                                <span className={styles.summaryValue}>E.g., 60,000 bonus miles + Companion Fare™ (after meeting spend).</span>
                            </div>
                            <div className={styles.summaryItem}>
                                <span className={styles.summaryIcon}><IconCheck /></span>
                                <span className={styles.summaryLabel}>Annual Fee:</span>
                                <span className={styles.summaryValue}>${reviewDataNew.annualFee}.</span>
                            </div>
                            <div className={styles.summaryItem}>
                                <span className={styles.summaryIcon}><IconStar /></span>
                                <span className={styles.summaryLabel}>Top Earning:</span>
                                <span className={styles.summaryValue}>3X miles on Alaska; 2X on gas, EV, transit, etc.</span>
                            </div>
                             <div className={styles.summaryItem}>
                                <span className={styles.summaryIcon}><IconPlane /></span> {/* CORRECTED: IconPlane is now imported */}
                                <span className={styles.summaryLabel}>Signature Perk:</span>
                                <span className={styles.summaryValue}>Alaska's Famous Companion Fare™ from $122.</span>
                            </div>
                            <div className={styles.summaryItem}>
                                <span className={styles.summaryIcon}><IconBag /></span> {/* CORRECTED: IconBag is now imported */}
                                <span className={styles.summaryLabel}>Bag Benefit:</span>
                                <span className={styles.summaryValue}>First checked bag free for you + up to 6 guests.</span>
                            </div>
                            <div className={styles.summaryItem} data-full-width="true">
                                <span className={styles.summaryIcon}><IconPlus /></span>
                                <span className={styles.summaryLabel}>Best For:</span>
                                <span className={styles.summaryValue}>West Coast loyalists, oneworld® explorers, and anyone who loves flying with a friend for less.</span>
                            </div>
                        </div>
                        <div className={styles.summaryBoxActions}>
                            <a href={reviewDataNew.ratesLink} className={styles.summaryRatesLink} target="_blank" rel="noopener noreferrer sponsored">
                                See Card Rates & Fees
                            </a>
                             <a href='/rewards-compare' className={`${styles.heroRewardsCalculator} ${styles.summaryButton}`} target="_blank" rel="noopener noreferrer"> {/* UPDATE link if needed */}
                                Rewards Calculator
                            </a>
                        </div>
                    </div>
                </header>

                <section id="section-intro" className={styles.reviewSection}>
                  <h2>Introduction: Alaska Airlines Card – Your West Coast Co-Pilot?</h2>
                  <p>Dreaming of new horizons but wondering how to make travel more affordable and rewarding? For savvy U.S. travelers, especially those with a soft spot for the West Coast or an eye on global adventures, the Alaska Airlines Visa Signature® Card often comes up. Is it just another piece of plastic, or is it a strategic key to unlocking more travel, perks, and memories? Let's dive in and see if this card is the ideal co-pilot for your journeys.</p>
                  <p>The appeal of this card stretches beyond Alaska Airlines itself. As part of the <a href="https://www.oneworld.com/" target="_blank" rel="noopener noreferrer sponsored">oneworld® Alliance</a>, the miles you earn become a passport to worldwide exploration, making it relevant even if you don't exclusively fly Alaska. This review will break down its features, benefits, and costs, connecting them not just to savings, but to the real experiences they can unlock.</p>
                </section>

                <Image
                    src="/miguel-angel-sanz-1tpJ00cSD4M-unsplash.webp" // UPDATE PATH: Example placeholder
                    alt="Scenic view of the U.S. West Coast, symbolizing Alaska Airlines' hub."
                    width={800}
                    height={500}
                    className={styles.contentImage}
                />

                <section id="section-1" className={styles.reviewSection}>
                  <h2>1. Card Snapshot &amp; &quot;Best For&quot; Tagline</h2>
                  <p>Here’s a quick look:</p>
                  <DraggableTableWrapper>
                    <div className={styles.tableContainer}>
                        <table className={`${styles.statsTable} ${styles.highlightTable}`}>
                            <tbody>
                                <tr><td>Card Name:</td><td><strong>Alaska Airlines Visa Signature® Card</strong></td></tr>
                                <tr><td>Issuer:</td><td>Bank of America (<a href="https://www.bankofamerica.com/credit-cards/products/alaska-airlines-credit-card/" target="_blank" rel="noopener noreferrer sponsored">Official Card Page</a>)</td></tr>
                                <tr><td>Network:</td><td>Visa Signature</td></tr>
                                <tr><td>Annual Fee:</td><td><strong>$95</strong></td></tr>
                                <tr><td>Primary Rewards:</td><td>Alaska Airlines Mileage Plan™ miles</td></tr>
                                <tr><td>Key Standout Perk:</td><td>Alaska's Famous Companion Fare™</td></tr>
                                <tr><td>&quot;Best For&quot; Tagline:</td><td>The Alaska Airlines Visa Signature® Card: Ideal for West Coast loyalists, oneworld® explorers, and anyone who loves flying with a friend for less.</td></tr>
                            </tbody>
                        </table>
                    </div>
                  </DraggableTableWrapper>
                  <p>The $95 annual fee positions this card in the mid-tier, aiming to offer benefits—like the Companion Fare™ or free checked bags—that easily justify the cost. The Visa Signature label also means you get a baseline of travel and purchase protections.</p>
                </section>

                <section id="section-2" className={styles.reviewSection}>
                  <h2>2. Deep Dive: The Current Welcome Offer &amp; Initial Perks</h2>
                  <p>New cardholders get an attractive welcome package after meeting a spending requirement (typically $3,000 in purchases within the first 90 days). The current offer often includes:</p>
                  <ul className={styles.featureList}>
                      <li><strong>Bonus Mileage Plan™ Miles:</strong> For example, 60,000 bonus miles. Alaska miles are generally valued around 1.5 cents each, making 60,000 miles worth roughly $900 towards flights, potentially more for premium partner redemptions.</li>
                      <li><strong>Alaska's Famous Companion Fare™:</strong> This allows a companion to fly with you from just $99 plus taxes and fees (starting from $23).</li>
                      <li><strong>Flight Discount Code:</strong> Often a percentage off a future flight booking.</li>
                  </ul>
                  <p>This multi-part bonus delivers immediate value, encouraging you to integrate the card into your spending habits to quickly unlock these upfront benefits. Make sure you can comfortably meet the spending threshold.</p>
                </section>

                <section id="section-3" className={styles.reviewSection}>
                  <h2>3. Unpacking the Annual Fee: Is it Worth $95?</h2>
                  <p>Is the $95 annual fee (details on the <a href="https://www.bankofamerica.com/credit-cards/products/alaska-airlines-credit-card/" target="_blank" rel="noopener noreferrer sponsored">Bank of America Alaska Airlines Card Page</a>) a good deal? For many, absolutely – often with just one or two perks:</p>
                  <ul className={styles.featureList}>
                      <li><strong>Free Checked Bag:</strong> Your first checked bag is free for you and up to six companions on the same Alaska Airlines reservation. With bag fees around $30-$35 each way, a single round-trip for two could save $120-$140, covering the annual fee in one go.</li>
                      <li><strong>Alaska's Famous Companion Fare™:</strong> After the welcome offer, you can earn another each account anniversary by spending $6,000 on the card annually. Using this on a moderately priced ticket (think cross-country or Hawaii) can easily save you $200+ on the second ticket.</li>
                  </ul>
                  <p>Your travel habits determine the value. If you fly Alaska often, travel with a companion, and check bags, the $95 fee is likely a small price for significant savings. The $6,000 annual spend for the anniversary Companion Fare™ is key for long-term value.</p>
                </section>

                <section id="section-4" className={styles.reviewSection}>
                  <h2>4. Earning Power: How Your Miles Take Flight (3-2-1 Rewards)</h2>
                  <p>The card’s tiered rewards accelerate mileage earning:</p>
                  <DraggableTableWrapper>
                    <div className={styles.tableContainer}>
                      <table className={`${styles.statsTable} ${styles.earningRatesTable}`}>
                        <thead>
                          <tr>
                            <th>Miles per $1 Spent</th>
                            <th>Eligible Purchase Categories</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td data-label="Miles per $1"><strong>3 miles</strong></td>
                            <td data-label="Categories">On eligible Alaska Airlines purchases (tickets, inflight food/beverages, lounge memberships, vacation packages booked directly).</td>
                          </tr>
                          <tr>
                            <td data-label="Miles per $1"><strong>2 miles</strong></td>
                            <td data-label="Categories">On eligible gas, EV charging, cable, streaming services, and local transit (rideshares, trains, buses, tolls, ferries).</td>
                          </tr>
                          <tr>
                            <td data-label="Miles per $1"><strong>1 mile</strong></td>
                            <td data-label="Categories">On all other purchases.</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </DraggableTableWrapper>
                  <p>There’s no cap on miles earned, and they don’t expire with an active account. The 2-mile categories cover common household expenses, turning everyday spending into faster award travel. This makes the card a consistent mile-generator, not just for booking flights.</p>
                </section>

                <section id="section-5" className={styles.reviewSection}>
                  <h2>5. The Star of the Show: Alaska&apos;s Famous Companion Fare™ Explained</h2>
                  <p>This is arguably the card&apos;s most celebrated perk. It lets the primary cardholder book a round-trip coach ticket for a companion on Alaska Airlines flights from $122 ($99 base fare + taxes/fees from $23) – see official <a href="https://www.alaskaair.com/content/mileage-plan/frequently-asked-questions/faq-companion-discount-code" target="_blank" rel="noopener noreferrer sponsored">Alaska Airlines Companion Fare Terms</a>. You both travel on the same paid published coach airfare, booked together on alaskaair.com.</p>
                  <h3>How to get it:</h3>
                  <ul className={styles.featureList}>
                      <li><strong>Welcome Offer:</strong> Meet the initial spending requirement.</li>
                      <li><strong>Anniversary Benefit:</strong> Spend $6,000 or more on net purchases annually by your card anniversary.</li>
                  </ul>
                  <p>Redeem your Companion Fare discount code via your Mileage Plan™ account on Alaska&apos;s website. Book travel within 12 months of issuance (travel can be later). You must use your Alaska Airlines credit card for the purchase. It’s valid only on Alaska-marketed and -operated flights (not partners) for coach travel, and both travelers earn miles. Savings can be substantial, especially on pricier routes, often far exceeding the annual fee.</p>
                </section>

                <section id="section-6" className={styles.reviewSection}>
                  <h2>6. Fly Lighter: The Free Checked Bag Benefit</h2>
                  <p>Baggage fees are a common travel pain point. This card offers relief: the primary cardholder and up to six guests on the same reservation each get their first standard bag checked free on qualifying Alaska Airlines flights. Refer to the official <a href="https://www.alaskaair.com/content/travel-info/baggage/checked-bags" target="_blank" rel="noopener noreferrer sponsored">Alaska Airlines Checked Bag Policy</a> for full details.</p>
                  <p>To qualify, purchase the airfare with your Alaska card and include your Mileage Plan™ number in the reservation. It applies to flights marketed and operated by Alaska Airlines, Horizon Air, or SkyWest (not codeshares with other carriers). For a couple, this saves $120-$140 per round trip; a family of four could save $240-$280. This perk alone can easily justify the annual fee.</p>
                </section>

                <section id="section-7" className={styles.reviewSection}>
                  <h2>7. Board Sooner: Priority Boarding Perks</h2>
                  <p>Enjoy a smoother boarding process with priority boarding for you and up to six guests on the same reservation. You&apos;ll board after elite members and First/Premium Class but before general boarding.</p>
                  <p>Like the bag benefit, you must buy the airfare with your Alaska card and include your Mileage Plan™ number. This &quot;soft perk&quot; means less waiting, more overhead bin space, and a calmer start to your flight – especially valued by families or those who prefer a less rushed experience.</p>
                </section>

                <section id="section-8" className={styles.reviewSection}>
                  <h2>8. Sweeten the Journey: Inflight Discounts &amp; Lounge Access Discount</h2>
                  <p>A couple of extra perks to enhance your travel:</p>
                  <ul className={styles.featureList}>
                      <li><strong>20% Inflight Rebate:</strong> Get 20% back as a statement credit on food, beverages, and Wi-Fi purchased onboard Alaska flights with your card. Credits typically post within seven days.</li>
                      <li><strong>$100 Off Alaska Lounge+ Membership:</strong> Get a $100 discount on an annual Alaska Lounge+ Membership when purchased with your card. This is best for those who already value or are considering lounge access, as it doesn&apos;t grant free entry.</li>
                  </ul>
                </section>

                <section id="section-9" className={styles.reviewSection}>
                  <h2>9. Boost Your Earnings: The 10% Relationship Bonus</h2>
                  <p>A unique perk: get a 10% bonus on miles earned from card purchases if you also have an eligible Bank of America® consumer checking/savings account or a Merrill investment account.</p>
                  <p>This effectively boosts your earning rates:</p>
                  <ul className={styles.featureList}>
                      <li>Alaska Airlines purchases: <strong>3.3 miles per dollar</strong></li>
                      <li>Gas, EV charging, cable, streaming, local transit: <strong>2.2 miles per dollar</strong></li>
                      <li>All other purchases: <strong>1.1 miles per dollar</strong></li>
                  </ul>
                  <p>A &quot;Qualifying Account&quot; is easy to maintain (e.g., an active checking account). This is a significant incentive for Bank of America/Merrill customers, enhancing the card&apos;s rewards without extra effort.</p>
                </section>

                <section id="section-10" className={styles.reviewSection}>
                  <h2>10. Beyond the Flight: Understanding Alaska&apos;s Mileage Plan™</h2>
                  <p>Miles earned go into Alaska Airlines&apos; highly-regarded Mileage Plan™ loyalty program. For comprehensive information, visit the official <a href="https://www.alaskaair.com/content/mileage-plan/my-account/my-account-overview" target="_blank" rel="noopener noreferrer sponsored">Alaska Airlines Mileage Plan Details</a> page.</p>
                  <ul className={styles.featureList}>
                      <li><strong>Earning:</strong> Fly Alaska (often distance-based), or use partners (airlines, hotels, car rentals, dining, shopping).</li>
                      <li><strong>Redeeming:</strong> For Alaska flights (no blackout dates touted), upgrades, or, powerfully, on partner airlines. Alaska is in the oneworld® Alliance (American, British Airways, Cathay Pacific, JAL, Qantas, Qatar Airways, etc.) and has other global partners (Aer Lingus, Condor, Korean Air, Singapore Airlines). This opens up over 1,000 destinations. You can often mix multiple oneworld® partners on one award ticket.</li>
                      <li><strong>Mile Value:</strong> Generally 1.3-1.5 cents each for economy, but can soar to 4+ cents for premium international partner awards.</li>
                      <li><strong>Elite Status:</strong> MVP®, MVP® Gold, MVP® Gold 75K/100K offer upgrades, bonus miles, etc. For 2025, card spending can earn Elite Qualifying Miles (EQMs): 1 EQM per $3 spent, up to 30,000 EQMs/year – a big help towards status.</li>
                  </ul>
                  <p>The strength of Mileage Plan™ lies in its partner network, transforming this card into a tool for global travel. Stay updated on program changes to maximize redemptions.</p>
                </section>

                <section id="section-11" className={styles.reviewSection}>
                  <h2>11. The Fine Print: Full Spectrum of Rates &amp; Fees</h2>
                  <p>Always understand the costs. Refer to Bank of America's official page for the most current terms.</p>
                  <DraggableTableWrapper>
                    <div className={styles.tableContainer}>
                      <table className={`${styles.statsTable} ${styles.ratesFeesTable}`}>
                        <thead>
                          <tr>
                            <th>Fee/Rate Category</th>
                            <th>Details</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr><td>Annual Fee:</td><td>$95</td></tr>
                          <tr><td>Purchase APR:</td><td>Variable, typically 20.24% - 29.24% based on creditworthiness. Avoid interest by paying your balance in full monthly.</td></tr>
                          <tr><td>Balance Transfer APR &amp; Fee:</td><td>Bank of America's official page lists a 4% fee. Verify current terms if considering.</td></tr>
                          <tr><td>Cash Advance APR &amp; Fee:</td><td>Higher APR (e.g., 28.24% - 29.24%) plus a 5% fee. Avoid cash advances.</td></tr>
                          <tr><td>Foreign Transaction Fee:</td><td><strong>None.</strong> This is excellent for international travel.</td></tr>
                          <tr><td>Late Payment Fee:</td><td>Up to $29 (first time), then up to $40.</td></tr>
                          <tr><td>Returned Payment Fee:</td><td>Check your cardmember agreement (often around $40).</td></tr>
                        </tbody>
                      </table>
                    </div>
                  </DraggableTableWrapper>
                  <p><small>APRs are variable. Paying in full each month is key to maximizing rewards. All rates and fees are subject to change; please refer to the issuer's official documentation for the latest information.</small></p>
                </section>

                <section id="section-12" className={styles.reviewSection}>
                  <h2>12. Security and Account Management Features</h2>
                  <p>Bank of America provides standard, robust features:</p>
                  <ul className={styles.featureList}>
                      <li><strong>$0 Liability Guarantee:</strong> For unauthorized fraudulent transactions.</li>
                      <li><strong>Contactless Chip Technology &amp; Digital Wallet Compatibility:</strong> Secure and convenient payments (Apple Pay®, Google Pay™, Samsung Pay®).</li>
                      <li><strong>Online &amp; Mobile Banking:</strong> Manage your account, pay bills, etc.</li>
                      <li><strong>Account Alerts:</strong> Customizable notifications.</li>
                      <li><strong>Free FICO® Score:</strong> Opt-in to monitor your credit health. Check <a href="https://www.bankofamerica.com/credit-cards/free-fico-credit-score/" target="_blank" rel="noopener noreferrer sponsored">Bank of America FICO Score Benefit Details</a>.</li>
                      <li><strong>Paperless Statement Option.</strong></li>
                      <li><strong>Balance Connect® for Overdraft Protection:</strong> Optional service linking to a BoA checking account (fees and interest may apply).</li>
                  </ul>
                  <p>These ensure a secure, user-friendly experience.</p>
                </section>

                <section id="section-13" className={styles.reviewSection}>
                  <h2>13. Travel &amp; Purchase Protections: What&apos;s Covered?</h2>
                  <p>Visa Signature cards include protections. Specifics are in your Guide to Benefits from Bank of America, but typically include:</p>
                  <ul className={styles.featureList}>
                      <li><strong>Auto Rental Collision Damage Waiver (CDW):</strong> Secondary coverage for damage/theft when you pay with the card and decline the rental company&apos;s CDW.</li>
                      <li><strong>Lost Luggage Reimbursement:</strong> For lost/stolen checked luggage.</li>
                      <li><strong>Trip Cancellation/Interruption Insurance:</strong> Reimbursement for non-refundable expenses for covered reasons.</li>
                      <li><strong>Trip Delay Reimbursement:</strong> For expenses like meals/lodging during significant covered delays.</li>
                      <li><strong>Baggage Delay Insurance:</strong> For essential item purchases if bags are delayed.</li>
                      <li><strong>Travel and Emergency Assistance Services:</strong> 24/7 referral service (you pay third-party costs).</li>
                      <li><strong>Roadside Dispatch®:</strong> Pay-per-use roadside assistance.</li>
                      <li><strong>Extended Warranty Protection:</strong> Extends manufacturer&apos;s U.S. warranty on eligible items.</li>
                      <li><strong>Purchase Security:</strong> May cover new retail purchases against theft/damage for a short period.</li>
                      <li><strong>Concierge Services:</strong> Assistance with bookings, reservations, etc.</li>
                  </ul>
                  <p>Always refer to your official Guide to Benefits for full terms and conditions. These can offer substantial value and peace of mind.</p>
                </section>

                <Image
                    src="/maryland-latulola-PcqH1iEKkjE-unsplash.webp" // UPDATE PATH: Example placeholder
                    alt="Montage of iconic oneworld Alliance destinations."
                    width={800}
                    height={450}
                    className={styles.contentImage}
                />

                <section id="section-14" className={styles.reviewSection}>
                  <h2>14. Detailed User Profiling: Who Should Get This Card?</h2>
                  <p>This card shines for specific travelers:</p>
                  <ul className={styles.featureList}>
                      <li><strong>The West Coast Wanderer:</strong> If you live on or frequently fly along the U.S. West Coast, Alaska&apos;s network and card perks are highly valuable.</li>
                      <li><strong>The Couple/Family Traveler (Companion Fare Maximizer):</strong> Regularly travel with a companion? The Companion Fare™ (if you meet the $6k annual spend for the anniversary one) and multi-person checked bag benefit offer huge savings.</li>
                      <li><strong>The Aspiring oneworld® Explorer:</strong> Aiming for international premium cabin travel? Alaska miles are great for high-value redemptions on renowned partner airlines.</li>
                      <li><strong>The Bank of America Customer:</strong> The 10% relationship bonus boosts all your mileage earnings.</li>
                      <li><strong>The Status Seeker (Especially for 2025):</strong> The EQM earning feature through card spend is a significant shortcut to elite perks.</li>
                  </ul>
                  <p>It might be less compelling if you rarely fly Alaska/partners, travel solo, don&apos;t check bags, prefer cash-back, or aren&apos;t near an Alaska hub.</p>
                </section>

                <section id="section-15" className={styles.reviewSection}>
                  <h2>15. Real-World People Ideas: Meet Alex, Ben &amp; Chloe, and David</h2>
                  <div className={styles.profileCardContainer}>
                    <div className={styles.profileCard}>
                        <h4>Alex, the Seattle-Based Tech Professional:</h4>
                        <p>Flies Alaska 4-5 times a year. The free checked bag saves him ~$250 annually, covering the fee. 3x miles on flights and priority boarding are sweet extras.</p>
                    </div>
                    <div className={styles.profileCard}>
                        <h4>Ben &amp; Chloe, the Portland-Based Adventure Couple:</h4>
                        <p>Their annual big trip (Hawaii, Mexico) becomes much cheaper with the Companion Fare™, saving $400-$600. Free bags for both save ~$120 per trip. As BoA customers, the 10% mileage bonus accelerates their next award.</p>
                    </div>
                    <div className={styles.profileCard}>
                        <h4>David, the Points &amp; Miles Strategist in Chicago:</h4>
                        <p>Uses Alaska miles for premium international travel on partners like JAL or Qatar. The 2x on gas/transit helps accumulate miles, and no foreign transaction fees are key. The 2025 EQM benefit helps his oneworld® status goals.</p>
                    </div>
                  </div>
                  <p>These examples show how different travelers find value by aligning perks with their habits.</p>
                </section>

                <section id="section-16" className={styles.reviewSection}>
                  <h2>16. Show Me the Value: A Real-World Example with Calculations</h2>
                  <p>Imagine the Miller family of four, flying from California to Maui on Alaska Airlines.</p>
                  <h3>Assumptions:</h3>
                  <ul className={styles.featureList}>
                      <li>Round-trip tickets $600/person.</li>
                      <li>They have the anniversary Companion Fare™ (met $6k spend).</li>
                      <li>Each checks one bag.</li>
                      <li>$50 inflight spend.</li>
                  </ul>
                  <h3>Calculations:</h3>
                  <p><strong>Without the Card:</strong> Flights ($2400) + Bag Fees ($280 based on $35/bag each way for 4 people) + Inflight ($50) = <strong>$2,730</strong></p>
                  <p><strong>With the Card:</strong></p>
                  <ul className={styles.featureList}>
                    <li>Flights: 1 full price ($600) + 1 Companion Fare™ (approx. $122 base + $37 taxes/fees = $159) + 2 full price ($1200) = $1959</li>
                    <li>Bag Fees: $0 (savings of $280)</li>
                    <li>Inflight: $50 - 20% rebate ($10) = $40</li>
                    <li>Annual Fee: +$95</li>
                    <li><strong>Total With Card: $1959 + $40 + $95 = $2,094</strong></li>
                  </ul>
                  <p><strong>Net Savings for this Trip: $2,730 - $2,094 = $636</strong></p>
                  <p><strong>Miles Earned (approximate):</strong></p>
                  <ul className={styles.featureList}>
                    <li>From Alaska purchases (flights for 3.265 tickets @ $600 equivalent before companion discount value, roughly $1959 spent on card for flights): $1959 x 3 miles/$ = 5,877 miles.</li>
                    <li>(Plus potential 10% BoA relationship bonus: 587 miles).</li>
                  </ul>
                  <p>This one trip shows substantial savings far exceeding the annual fee, plus thousands of miles earned.</p>
                </section>

                <section id="section-17" className={styles.reviewSection}>
                  <h2>17. Head-to-Head: Alaska Airlines Visa Signature® vs. The Competition</h2>
                  <p>How does it stack up? Key competitors include United Explorer℠, Delta SkyMiles® Gold Amex, Chase Sapphire Preferred®, and Citi® / AAdvantage® Platinum Select®.</p>
                  <DraggableTableWrapper>
                    <div className={styles.tableContainer}>
                      <table className={`${styles.statsTable} ${styles.comparisonTable}`}>
                        <thead>
                          <tr>
                            <th>Feature</th>
                            <th>Alaska Airlines Visa Signature®</th>
                            <th>United Explorer℠ Card</th>
                            <th>Delta SkyMiles® Gold Amex</th>
                            <th>Chase Sapphire Preferred®</th>
                            <th>Citi® / AAdvantage® Platinum Select®</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr><td data-label="Feature">Annual Fee</td><td data-label="Alaska">$95</td><td data-label="United">$0 intro, then $95</td><td data-label="Delta">$0 intro, then $150</td><td data-label="Chase">$95</td><td data-label="AA">$0 intro, then $99</td></tr>
                          <tr><td data-label="Feature">Typical Welcome Bonus</td><td data-label="Alaska">60k miles + Comp. Fare + Discount</td><td data-label="United">50-60k miles</td><td data-label="Delta">40-70k miles</td><td data-label="Chase">60k points</td><td data-label="AA">50k miles</td></tr>
                          <tr><td data-label="Feature">Airline Purchase</td><td data-label="Alaska">3x Alaska miles</td><td data-label="United">2x United miles</td><td data-label="Delta">2x Delta miles</td><td data-label="Chase">5x on travel via Chase; 2x other travel</td><td data-label="AA">2x AA miles</td></tr>
                          <tr><td data-label="Feature">Key Bonus Categories</td><td data-label="Alaska">2x (gas, EV, transit, cable, streaming)</td><td data-label="United">2x (dining, hotels directly with United)</td><td data-label="Delta">2x (dining, US Supermarkets)</td><td data-label="Chase">3x (dining, online grocery, streaming)</td><td data-label="AA">2x (dining, gas)</td></tr>
                          <tr><td data-label="Feature">Signature Perk</td><td data-label="Alaska">Annual Companion Fare™ (from $122, w/ $6k spend); Free bag for up to 7</td><td data-label="United">2 United Club passes/yr; Free first bag</td><td data-label="Delta">$200 Delta Flight Credit (w/ $10k spend)</td><td data-label="Chase">$50 annual hotel credit (Chase Travel)</td><td data-label="AA">$125 AA Flight Discount (w/ $20k spend)</td></tr>
                          <tr><td data-label="Feature">Foreign Trans. Fee</td><td data-label="Alaska">None</td><td data-label="United">None</td><td data-label="Delta">None</td><td data-label="Chase">None</td><td data-label="AA">None</td></tr>
                        </tbody>
                      </table>
                    </div>
                  </DraggableTableWrapper>
                  <p><small>(Note: Offers/perks vary and are subject to change. Table reflects typicals.)</small></p>
                  <h3>Quick Comparison:</h3>
                  <ul className={styles.featureList}>
                      <li><strong>vs. United/Delta/AA cards:</strong> Similar fees and basic perks (free bag). Alaska&apos;s Companion Fare™ is often more uniquely valuable than club passes or spend-based flight credits if you travel with someone. Alaska&apos;s broader 2x everyday categories (gas, transit, streaming) are strong. Choice depends on airline loyalty and route network.</li>
                      <li><strong>vs. Chase Sapphire Preferred®:</strong> Sapphire offers flexible points transferable to many partners (including some oneworld). It lacks airline-specific perks like Alaska&apos;s Companion Fare™ or primary free bag benefit with Alaska. Alaska card for Alaska loyalists; Sapphire for ultimate flexibility.</li>
                  </ul>
                  <p>The Alaska card stands out for its Companion Fare™ and generous everyday earning categories within its ecosystem.</p>
                </section>

                <section id="section-18" className={styles.reviewSection}>
                  <h2>18. Pros &amp; Cons: A Balanced View</h2>
                  <div className={styles.prosConsContainer}>
                    <div className={styles.prosBox}>
                      <h3>Pros <IconPlus className={styles.inlineIcon} /></h3>
                      <ul className={styles.featureList}>
                          <li>Valuable Companion Fare™: Huge savings potential.</li>
                          <li>Generous Free Checked Bag Policy: Saves money for individuals/groups.</li>
                          <li>Strong Earning on Alaska Purchases (3x) & Useful 2x Bonus Categories.</li>
                          <li>10% Relationship Bonus with Bank of America: Enhances mileage earning.</li>
                          <li>No Foreign Transaction Fees.</li>
                          <li>Access to Valuable oneworld® & Global Partner Redemptions.</li>
                          <li>Priority Boarding & Inflight Discounts.</li>
                          <li>Potential to Earn Elite Qualifying Miles (EQMs) (e.g., for 2025).</li>
                      </ul>
                    </div>
                    <div className={styles.consBox}>
                      <h3>Cons <IconX className={styles.inlineIcon} /></h3>
                      <ul className={styles.featureList}>
                          <li>$95 Annual Fee: Must justify with perk usage.</li>
                          <li>Anniversary Companion Fare™ Requires $6,000 Annual Spend.</li>
                          <li>Best for Those Who Fly Alaska or its Partners: Limited value otherwise.</li>
                          <li>Miles Tied to Mileage Plan™: Less flexible than transferable bank points.</li>
                          <li>Alaska&apos;s Route Network Focus: Primarily West Coast (though partners expand reach).</li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section id="section-19" className={`${styles.reviewSection} ${styles.faqSection}`}>
                  <h2>19. Card-Specific Frequently Asked Questions (FAQs)</h2>
                  <div className={styles.faqContainer}>
                      {structuredDataOptimized['@graph'].find(item => item['@type'] === 'FAQPage').mainEntity.map((faq, index) => (
                          <details key={index} className={styles.faqItem} name={`faq-${index + 1}`}>
                              <summary className={styles.faqQuestion}>{`${index + 1}. ${faq.name}`}</summary>
                              <div className={styles.faqAnswer}><p>
                                {faq.acceptedAnswer.text.includes("Alaska Airlines Mileage Plan™") ? <>Generally 1.3-1.5 cents each for economy, but can be 2-4+ cents for premium partner awards. You can find more details on the <a href="https://www.alaskaair.com/content/mileage-plan/my-account/my-account-overview" target="_blank" rel="noopener noreferrer sponsored">Alaska Airlines Mileage Plan™</a>.</> :
                                faq.acceptedAnswer.text.includes("Companion Fare™") ? <>No, it's only for flights marketed and operated by Alaska Airlines. Specific terms can be found on the <a href="https://www.alaskaair.com/content/mileage-plan/frequently-asked-questions/faq-companion-discount-code" target="_blank" rel="noopener noreferrer sponsored">Alaska Airlines website regarding their Companion Fare™</a>.</> :
                                faq.acceptedAnswer.text.includes("checked bag policy") ? <>Terms usually state 'purchase airfare' with the card. It's best to verify with Alaska Airlines for award tickets, as paying only taxes may not qualify according to their <a href="https://www.alaskaair.com/content/travel-info/baggage/checked-bags" target="_blank" rel="noopener noreferrer sponsored">checked bag policy</a>.</> :
                                faq.acceptedAnswer.text}
                              </p></div>
                          </details>
                      ))}
                  </div>
                </section>

                <section id="section-20" className={styles.reviewSection}>
                  <h2>20. Conclusion: Charting Your Course with the Alaska Card</h2>
                  <p>The Alaska Airlines Visa Signature® Card is a compelling choice for many U.S. travelers, especially if your travel patterns involve the West Coast, flying with a companion, or leveraging the oneworld® Alliance. Its standout perks like the Companion Fare™, free checked bags, and solid mileage earning can deliver substantial savings and richer travel experiences, particularly if you can maximize the $6,000 annual spend for the anniversary Companion Fare and qualify for the BoA relationship bonus.</p>
                  <p>The $95 annual fee is often easily offset. However, if you prioritize ultimate flexibility with points or rarely fly Alaska and its partners, a general travel rewards card might be a better fit.</p>
                  <p>Ultimately, assess your travel habits and spending. If this card’s unique benefits align with your style, it has great potential to be a rewarding co-pilot on your adventures.</p>
                </section>

                <section id="section-eat" className={`${styles.reviewSection} ${styles.eatSection}`}>
                    <h2 dangerouslySetInnerHTML={{ __html: `Our Commitment to E-A-T: Expertise, Authority &amp; Trustworthiness`}}></h2>
                    <p>At <strong>{siteName}</strong>, we ensure our content meets the highest standards. This review of the <strong>{reviewDataNew.cardName}</strong> is based on thorough research of the card&apos;s features, terms, and conditions as of {new Date(updateDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}, cross-referenced with official issuer documentation and datapoints from the travel rewards community, to provide you with a reliable and comprehensive guide.</p>
                </section>

              </article>
            </div>
          </div>

        
        </div>
      </main>
        <div className={styles.stickyFooterContainer}>
        <div className={styles.stickyFooterContent}>
            <Image src={`${siteUrl}${reviewDataNew.imageUrl}`} alt={`${reviewDataNew.cardName} small image`} width={60} height={38} className={styles.stickyFooterCardImage} />
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

export default AlaskaAirlinesVisaSignatureReviewPage;