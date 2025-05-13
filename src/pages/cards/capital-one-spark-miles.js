/* ------------------------------------------------------------------
    File:  pages/reviews/capital-one-spark-miles-for-business.js
    Route: https://www.travelcardinsider.com/reviews/capital-one-spark-miles-for-business
------------------------------------------------------------------- */

import React, { useState, useEffect, useCallback, useRef } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import styles from '../../styles/ReviewPage.module.css'; // Assuming same CSS module

import TableOfContents    from '../../components/TableOfContents'; // Assuming same TOC component
import IconGift from '../../components/icons/icon-gift.svg'; // Assuming you have these or similar icons
import IconStar from '../../components/icons/icon-star.svg';
import IconCheck from '../../components/icons/icon-Credit Card.svg';
import IconX from '../../components/icons/icon-Star + Arrow Up.svg';
import IconPlus from '../../components/icons/icon-target.svg';

const RatingTooltip = dynamic(() => import('../../components/RatingTooltip'), { ssr: false, loading: () => null });

/* ──────────────────────────────
    CONSTANTS & STATIC DATA
    ────────────────────────────── */
const siteName    = 'TravelCardInsider';
const siteUrl     = 'https://www.travelcardinsider.com';
const pagePath    = '/reviews/capital-one-spark-miles-for-business';
const pageUrlFull = `${siteUrl}${pagePath}`;
const publishDate = '2025-05-13'; // Update as needed
const updateDate  = '2025-05-13'; // Update as needed

const reviewDataNew = {
  cardName        : 'Capital One Spark Miles for Business',
  title           : 'Capital One Spark Miles for Business Review: Straightforward Travel Rewards (2025)',
  description     : 'Expert 2025 review of the Capital One Spark Miles for Business card: unlimited 2X miles, 5X on Capital One Travel, Global Entry/TSA PreCheck credit, and no foreign transaction fees. Ideal for US businesses seeking simple travel rewards.',
  keywords        : 'Capital One Spark Miles for Business review, Spark Miles, business credit card, travel rewards credit card, Capital One business, 2X miles, no foreign transaction fee card, Global Entry credit',
  author: { // Using Dilan Madushanka's details from the template as a placeholder
      name: 'Dilan Madushanka',
      title: 'Founder & Lead Editor',
      imageUrl: '/WhatsApp Image 2025-05-12 at 4.09.58 PM.jpeg',
      imageWidth: 40,
      imageHeight: 40,
      tooltipImageUrl: '/WhatsApp Image 2025-05-12 at 4.09.58 PM.jpeg',
      tooltipImageWidth: 60,
      tooltipImageHeight: 60,
      expertise: [
          'Travel Credit Cards',
          'Rewards Programs',
          'Financial Literacy for Travel',
          'Maximizing Card Benefits',
          'Credit Card Analysis'
      ],
      bioSnippet: 'Dilan Madushanka is the founder and lead editor of TravelCardInsider.com, dedicated to demystifying credit cards and uncovering their real-world value for smarter travel.',
      fullBioLink: '/author/dilan-madushanka',
      fullBio: `Dilan Madushanka is the founder and lead editor of TravelCardInsider.com, a platform dedicated to helping everyday people make smarter decisions with travel and rewards credit cards. With a background in medicine and a deep passion for financial literacy, Dilan turned his real-world experience—navigating travel, budgeting, and rewards programs—into a mission: demystify credit cards and uncover their real-world value.\n\nAfter years of studying the fine print, testing travel benefits firsthand, and comparing hundreds of card offers, Dilan has built a site that goes beyond generic advice. He combines research, real spending scenarios, and hands-on card analysis to help readers maximize rewards and avoid costly mistakes.\n\nExperience matters—and Dilan brings a unique one. A Sri Lankan doctor by training, he took a bold leap into digital entrepreneurship to build a transparent, user-focused credit card resource from scratch. Every guide and review you read is written or edited by him with accuracy, integrity, and a deep sense of purpose.`,
      publishedStats: '6+ in-depth card reviews per week',
      testedStats: 'Over 50 credit card benefits across major brands',
      socialLinks: {
          linkedin: 'www.linkedin.com/in/dilan-madushanka-b65293365',
          twitter: 'https://x.com/team_dilan',
          email: 'team@travelcardinsider.com'
      }
  },
  siteName: 'TravelCardInsider',
  imageUrl        : '/miles_new_2021.avif', // Placeholder: Replace with actual card image URL
  imageWidth      : 1290, // Adjust if your image is different
  imageHeight     : 812,  // Adjust if your image is different
  ratingValue     : 8.0, // Converted from 4.2/5.0
  ratingCount     : 300, // Placeholder - update as needed, e.g., based on external ratings mentioned
  reviewBody      : 'Our editors evaluate the Capital One Spark Miles for Business card based on its rewards structure, fees, travel benefits, business features, and overall value for US-based small businesses seeking straightforward travel rewards.',
  aprRange        : '25.24% variable (example, check terms)', // From review text (example)
  annualFee       : 95, // $0 intro first year, then $95
  applyLink       : 'https://www.capitalone.com/small-business/credit-cards/spark-miles/', // Example apply link, update
  ratesLink       : 'https://www.capitalone.com/small-business/credit-cards/spark-miles/', // Example rates link, update
  sku             : 'CAP1-SPARKMILES-TCI-2025', // Placeholder
  mpn             : 'CAP1SPARKMILES', // Placeholder
  h1Content       : "Capital One Spark Miles for Business: Simple Travel Rewards for Entrepreneurs",
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
      image          : reviewDataNew.imageUrl,
      description    : reviewDataNew.description,
      sku            : reviewDataNew.sku,
      mpn            : reviewDataNew.mpn,
      brand          : { '@type': 'Brand', name: 'Capital One' },
      aggregateRating: {
        '@type'    : 'AggregateRating',
        ratingValue : reviewDataNew.ratingValue.toString(),
        bestRating  : '10',
        worstRating : '1',
        ratingCount : reviewDataNew.ratingCount.toString(),
        reviewCount : '1', // Represents this editor's review
      },
      offers: {
        '@type'            : 'Offer',
        url                : reviewDataNew.applyLink,
        priceCurrency      : 'USD',
        price              : reviewDataNew.annualFee.toString(), // This is the fee after the first year
        priceValidUntil    : '2026-12-31', // Placeholder
        itemCondition      : 'https://schema.org/NewCondition',
        availability       : 'https://schema.org/InStock',
        priceSpecification: [
          {
            '@type'              : 'PriceSpecification',
            priceCurrency        : 'USD',
            price                : '0', // For the first year
            valueAddedTaxIncluded: 'false',
            description          : 'Annual fee: $0 intro for the first year, then $95.',
          },
          {
            '@type'              : 'PriceSpecification',
            priceCurrency        : 'USD',
            description          : `Purchase APR: ${reviewDataNew.aprRange}`,
          },
        ],
        seller: { '@type': 'Organization', name: 'Capital One' },
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
        description: `TravelCardInsider editorial rating based on 5.0 scale (4.2/5.0 from text) converted to 10.0 scale, as of ${updateDate}.`
      },
      author          : {
          '@type': 'Person',
          'name': reviewDataNew.author.name,
          'url': reviewDataNew.author.fullBioLink ? `${siteUrl}${reviewDataNew.author.fullBioLink}` : undefined
      },
      publisher       : {
        '@type' : 'Organization',
        name    : siteName,
        logo    : { '@type': 'ImageObject', url: `${siteUrl}/images/logo/tci-logo-schema.png` }, // Ensure this logo exists
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
      url       : reviewDataNew.imageUrl,
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
    { // Updated FAQPage with Spark Miles specific FAQs
      '@type'    : 'FAQPage',
      '@id'      : `${pageUrlFull}#faqs`,
      mainEntity: [
        {
          '@type': 'Question',
          name   : 'How exactly do I get the 5X miles on travel, and is it always the best option?',
          acceptedAnswer: { '@type': 'Answer', text: "You earn 5X miles per dollar when you book hotels and rental cars through the Capital One Travel portal. While this is a great earning rate, it's wise to compare prices on the portal with other booking sites. If the portal price is significantly higher, the extra 3X miles (compared to the standard 2X) might not offset the higher cost. Always do a quick comparison to ensure you're getting the best overall value." },
        },
        {
          '@type': 'Question',
          name   : "What's the most flexible way to redeem my Spark Miles for travel if I don't want to use the Capital One portal?",
          acceptedAnswer: { '@type': 'Answer', text: 'The "Purchase Eraser" feature is your best bet for maximum flexibility. You can book travel through any airline, hotel, or travel agency you prefer, pay with your Spark Miles card, and then, within 90 days, redeem your miles as a statement credit against that travel purchase at a value of 1 cent per mile. This lets you hunt for the best deals anywhere.' },
        },
        {
          '@type': 'Question',
          name   : 'Is the $95 annual fee (after the first year) worth it if I only travel a couple of times a year?',
          acceptedAnswer: { '@type': 'Answer', text: "It can be. The $95 fee can be offset by several benefits even with moderate travel. The Global Entry or TSA PreCheck credit is worth up to $120 every four years (annualized value of $25-$30). If you make any international purchases, the no foreign transaction fees save you money. Two Capital One Lounge passes add comfort and potential savings. If your annual spending on the card is at least $4,750, the 2X miles earned (worth $95 at 1 cent/mile) will cover the fee by themselves. Evaluate your typical spending and use of these perks." },
        },
        {
          '@type': 'Question',
          name   : 'If my business already has an EIN, do I still need to provide my SSN and agree to a personal guarantee?',
          acceptedAnswer: { '@type': 'Answer', text: "Yes, typically. When applying for most small business credit cards, including likely the Spark Miles card, you'll need to provide your business's EIN (or your SSN if you're a sole proprietor without an EIN) and the SSN of the business owner(s). Furthermore, a personal guarantee is usually required, meaning the owner is personally liable for the debt if the business cannot pay." },
        },
        {
          '@type': 'Question',
          name   : 'How does the "unlimited" 2X miles really benefit my business compared to cards with higher bonus categories?',
          acceptedAnswer: { '@type': 'Answer', text: "The \"unlimited\" 2X miles on every purchase means you don't have to worry about spending caps or tracking specific bonus categories. For businesses with diverse spending that doesn't always align with typical bonus categories (like office supplies or dining), the Spark Miles card ensures a solid 2% return (when miles are valued at 1 cent each for travel) on all expenditures, from inventory and contractor payments to software and utilities. This simplicity and broad applicability can be more valuable than chasing higher rates in narrow categories, especially if you might exceed spending caps on other cards." },
        },
        {
            '@type': 'Question',
            name: 'Are there any hidden limits or caps on the miles I can earn or the benefits I can use with this card?',
            acceptedAnswer: { '@type': 'Answer', text: "The miles earning is genuinely unlimited for the 2X on all purchases and 5X on Capital One Travel bookings. Miles also don't expire as long as the account is in good standing. Some benefits have natural limits: the Global Entry/TSA PreCheck credit is once every four years, and lounge access is typically two visits per year. Always refer to the card's terms for specific details on each benefit." }
        },
        {
            '@type': 'Question',
            name: 'What are some specific examples of airline partners I can transfer my Spark Miles to, and why would I do that?',
            acceptedAnswer: { '@type': 'Answer', text: "You can transfer miles to over 15 partners, including airlines like Air Canada Aeroplan, Air France/KLM Flying Blue, British Airways Avios, and Turkish Airlines Miles&Smiles. You'd transfer miles because partner programs sometimes offer better redemption rates for specific flights (especially international business or first class) than the standard 1 cent per mile value, potentially giving your miles a value of 1.5, 2 cents, or even more. For example, Turkish Miles&Smiles has a sweet spot for domestic U.S. flights on United, including to Hawaii." }
        },
        {
            '@type': 'Question',
            name: 'Besides the Global Entry/TSA PreCheck credit, what other travel perks directly save my business money?',
            acceptedAnswer: { '@type': 'Answer', text: "The most significant is the no foreign transaction fees. If your business makes purchases in foreign currencies (either while traveling or from international suppliers online), you'll save the typical 1-3% fee other cards might charge. Additionally, the two complimentary Capital One Lounge visits can save money on airport food and drinks. If you use the Lifestyle Collection for hotel bookings, the $50 experience credit can also be a direct saving." }
        },
        {
            '@type': 'Question',
            name: 'My business spending varies a lot month to month. How can I ensure I meet the welcome bonus spending requirement (e.g., $4,500 in 3 months)?',
            acceptedAnswer: { '@type': 'Answer', text: "Plan ahead. Identify larger, predictable business expenses that will occur during the first three months and try to time them or shift them onto the new card. This could include paying annual software subscriptions, purchasing inventory, pre-paying for advertising, or booking planned business travel. Avoid making unnecessary purchases; focus on channeling existing, necessary spending through the card." }
        },
        {
            '@type': 'Question',
            name: 'If I have both a personal Capital One Venture card and this Spark Miles for Business card, can I combine my miles?',
            acceptedAnswer: { '@type': 'Answer', text: "Yes, Capital One generally allows you to combine or transfer miles between your eligible Capital One miles-earning cards, including from a Spark Miles for Business card to a personal Venture card, or vice-versa. This can be very useful for consolidating miles to reach a specific redemption goal faster. You can typically do this online through your Capital One account." }
        }
      ],
    },
    {
      '@type' : 'Organization',
      '@id'   : `${siteUrl}#website`,
      name    : siteName,
      url     : siteUrl,
      logo    : { '@type': 'ImageObject', url: `${siteUrl}/images/logo/tci-logo-schema.png` }, // Ensure this logo exists
      sameAs  : [
        // Add actual social links here
      ],
    },
  ],
};

const ratingCriteriaOriginal = [ // Update criteria based on Spark Miles review focus
    'Base Miles Earning Rate (2X)',
    'Capital One Travel Bonus (5X)',
    'Welcome Offer Value',
    'Annual Fee ($0 intro, then $95)',
    'Travel Credits & Perks (Global Entry, Lounge Access)',
    'No Foreign Transaction Fees',
    'Redemption Flexibility & Value'
];

// Updated tocSections based on the Spark Miles review content
const tocSections = [
    { id: 'section-1', title: 'Card Snapshot & "Best For" Tagline' },
    { id: 'section-2', title: "Editor's Rating & Concise Verdict and High-Quality Card Image" },
    { id: 'section-3', title: 'Key Features and Full Spectrum of Rates & Fees (Transparency is Key) - Part 1: Core Features' },
    { id: 'section-4', title: 'Current Welcome Offer & Eligibility Deep Dive' },
    { id: 'section-5', title: 'Annual Fee: Cost vs. Value Analysis' },
    { id: 'section-6', title: 'Comprehensive Rewards Earning Structure' },
    { id: 'section-7', title: 'Redemption Strategies & Point/Mile Valuation' },
    { id: 'section-8', title: 'Loyalty Program Deep Dive & Partner Network Analysis' },
    { id: 'section-9', title: 'Travel-Specific Benefits & Credits (Maximization Guide)' },
    { id: 'section-10', title: 'Travel & Purchase Protections (Insurance Explained Simply)' },
    { id: 'section-11', title: 'Security, Convenience & Tech Features' },
    { id: 'section-12', title: 'Full Spectrum of Rates & Fees (Transparency is Key) - Part 2: Deeper Dive' },
    { id: 'section-13', title: 'Credit Score Guidance & Application Insights' },
    { id: 'section-14', title: '"Is This Card Your Perfect Travel Companion?" (Detailed User Profiling)' },
    { id: 'section-15', title: 'Unbiased Pros & Cons (Comprehensive & Balanced)' },
    { id: 'section-16', title: 'Head-to-Head: How It Stacks Up Against Key Competitors' },
    { id: 'section-17', title: 'Exclusive Expert Tips & Hidden Value Unlocked' },
    { id: 'section-18', title: 'Aggregated User Sentiment & Real-World Experiences and Real-Life Spend Examples / Estimated Value' },
    { id: 'section-19', title: '"The Final Takeaway": Authoritative Recommendation & Alternatives' },
    { id: 'section-20', title: 'Card-Specific Frequently Asked Questions (FAQs)' },
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
      e.preventDefault();
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
    el.addEventListener('touchstart', startDrag, { passive: false });
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
function CapitalOneSparkMilesReviewPage() {
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
      authorRef.current.tooltipTimeoutId = timerId;
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
      };
  }, [showAuthorBioTooltip, authorRef, authorTooltipRef, showRatingInfo, ratingTooltipRef]);

  return (
    <>
      <Head>
        <title>{reviewDataNew.title}</title>
        <meta name="description" content={reviewDataNew.description} />
        <meta name="keywords" content={reviewDataNew.keywords} />
        <meta name="author" content={reviewDataNew.author.name} />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="robots" content="index,follow,max-image-preview:large" />
        <link rel="canonical" href={pageUrlFull} />
        <link rel="alternate" href={pageUrlFull} hreflang="en-us" />
        <link rel="preload" as="image" href={reviewDataNew.imageUrl} />
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
          '/fonts/PlayfairDisplay-Regular.ttf',
          '/fonts/Playfair-Display-Bold.ttf',
        ].map((f) => (
          <link key={f} rel="preload" href={f} as="font" type={f.endsWith('woff2') ? 'font/woff2' : 'font/ttf'} crossOrigin="anonymous" />
        ))}
        <meta property="og:type"        content="article" />
        <meta property="og:locale"      content="en_US" />
        <meta property="og:site_name"   content={siteName} />
        <meta property="og:title"       content={reviewDataNew.title} />
        <meta property="og:description" content={reviewDataNew.description} />
        <meta property="og:url"         content={pageUrlFull} />
        <meta property="og:image"       content={reviewDataNew.imageUrl} />
        <meta property="og:image:width" content={String(reviewDataNew.imageWidth)} />
        <meta property="og:image:height" content={String(reviewDataNew.imageHeight)} />
        <meta property="article:publisher" content={`https://www.facebook.com/${siteName}`} />
        <meta property="article:section"       content="Credit Card Reviews" />
        <meta property="article:published_time" content={publishDate} />
        <meta property="article:modified_time"  content={updateDate} />
        <meta property="article:author" content={reviewDataNew.author.name} />
        {reviewDataNew.keywords.split(',').map(keyword => (
            <meta property="article:tag" content={keyword.trim()} key={keyword.trim()} />
        ))}
        <meta name="twitter:card"        content="summary_large_image" />
        {/* <meta name="twitter:site" content="@YourTwitterHandle" /> */}
        <meta name="twitter:title"       content={reviewDataNew.title} />
        <meta name="twitter:description" content={reviewDataNew.description} />
        <meta name="twitter:image"       content={reviewDataNew.imageUrl} />
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
                                    <a href={reviewDataNew.author.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={styles.socialIconLink}>
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                                    </a>
                                )}
                                {reviewDataNew.author.socialLinks.twitter && (
                                    <a href={reviewDataNew.author.socialLinks.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter" className={styles.socialIconLink}>
                                         <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-.422.724-.665 1.56-.665 2.452 0 1.697.864 3.198 2.18 4.078-.8-.025-1.555-.247-2.227-.616v.054c0 2.37 1.683 4.333 3.91 4.78-.426.116-.874.174-1.337.174-.31 0-.611-.03-.904-.085.622 1.936 2.421 3.338 4.553 3.377-1.672 1.309-3.781 2.088-6.072 2.088-.394 0-.784-.023-1.169-.069 2.16 1.389 4.723 2.202 7.482 2.202 8.979 0 13.897-7.446 13.897-13.898 0-.21 0-.42-.015-.63.953-.689 1.778-1.56 2.433-2.525z"/></svg>
                                    </a>
                                )}
                                {reviewDataNew.author.socialLinks.email && (
                                    <a href={`mailto:${reviewDataNew.author.socialLinks.email}`} aria-label="Email" className={styles.socialIconLink}>
                                         <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"/></svg>
                                    </a>
                                )}
                            </div>
                        )}
                    </div>
                    {showAuthorBioTooltip && (
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
                                             <a href={reviewDataNew.author.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={styles.socialIconLink}>
                                                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                                             </a>
                                         )}
                                         {reviewDataNew.author.socialLinks.twitter && (
                                             <a href={reviewDataNew.author.socialLinks.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter" className={styles.socialIconLink}>
                                                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-.422.724-.665 1.56-.665 2.452 0 1.697.864 3.198 2.18 4.078-.8-.025-1.555-.247-2.227-.616v.054c0 2.37 1.683 4.333 3.91 4.78-.426.116-.874.174-1.337.174-.31 0-.611-.03-.904-.085.622 1.936 2.421 3.338 4.553 3.377-1.672 1.309-3.781 2.088-6.072 2.088-.394 0-.784-.023-1.169-.069 2.16 1.389 4.723 2.202 7.482 2.202 8.979 0 13.897-7.446 13.897-13.898 0-.21 0-.42-.015-.63.953-.689 1.778-1.56 2.433-2.525z"/></svg>
                                             </a>
                                         )}
                                         {reviewDataNew.author.socialLinks.email && (
                                             <a href={`mailto:${reviewDataNew.author.socialLinks.email}`} aria-label="Email" className={styles.socialIconLink}>
                                                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"/></svg>
                                             </a>
                                         )}
                                    </div>
                                )}
                        </div>
                    )}
                </div>
                <p className={styles.heroSubtitle}>
                  An expert analysis of the Capital One Spark Miles for Business card, focusing on its real-world applicability for U.S. business owners.
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
                      on Capital One's official site
                    </span>
                  </div>
                  <Link href="#section-3" legacyBehavior>
                    <a className={styles.heroSecondaryLink}>View Key Features</a>
                  </Link>
                </div>
              </div>
              <div className={styles.heroImageContainer}>
                <div className={styles.cardImageContainer}>
                  <Image
                    src={reviewDataNew.imageUrl} // Ensure this image path is correct and exists in /public
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
                                <span className={styles.summaryValue}>50,000 miles after $4,500 spend in 3 months.</span>
                            </div>
                            <div className={styles.summaryItem}>
                                <span className={styles.summaryIcon}><IconStar /></span>
                                <span className={styles.summaryLabel}>Annual Fee:</span>
                                <span className={styles.summaryValue}>$0 intro first year, then $95.</span>
                            </div>
                            <div className={styles.summaryItem}>
                                <span className={styles.summaryIcon}><IconX /></span>
                                <span className={styles.summaryLabel}>Top Earning:</span>
                                <span className={styles.summaryValue}>2X miles on all purchases; 5X on hotels/cars via Capital One Travel.</span>
                            </div>
                            <div className={styles.summaryItem}>
                                <span className={styles.summaryIcon}><IconCheck /></span>
                                <span className={styles.summaryLabel}>Key Benefit:</span>
                                <span className={styles.summaryValue}>Global Entry or TSA PreCheck credit.</span>
                            </div>
                            <div className={styles.summaryItem} data-full-width="true">
                                <span className={styles.summaryIcon}><IconPlus /></span>
                                <span className={styles.summaryLabel}>Best For:</span>
                                <span className={styles.summaryValue}>US-based small businesses seeking straightforward, flat-rate travel rewards with valuable perks.</span>
                            </div>
                        </div>
                        <div className={styles.summaryBoxActions}>
                            <a href={reviewDataNew.ratesLink} className={styles.summaryRatesLink} target="_blank" rel="noopener noreferrer sponsored">
                                See Card Rates & Fees
                            </a>
                             <a href='/rewards-compare' className={`${styles.heroRewardsCalculator} ${styles.summaryButton}`} target="_blank" rel="noopener noreferrer sponsored">
                                Rewards Calculator
                            </a>
                        </div>
                    </div>
                    <p className={styles.introParagraph}>Navigating the world of business credit cards can be challenging for busy U.S. business owners. The Capital One Spark Miles for Business card is often associated with straightforward travel rewards. This review offers an expert analysis with a human touch, focusing on real-world applicability to help you decide if this card suits your business.</p>
                </header>

                <section id="section-1" className={styles.reviewSection}>
                  <h2>1. Card Snapshot &amp; "Best For" Tagline</h2>
                  <ul className={styles.featureList}>
                    <li><strong>Card Name:</strong> Capital One Spark Miles for Business</li>
                    <li><strong>Issuer:</strong> Capital One</li>
                    <li><strong>Network:</strong> Visa</li>
                    <li><strong>"Best For" Tagline:</strong> Best for US-based small businesses seeking straightforward, flat-rate travel rewards with valuable perks and no first-year annual fee, ideal for those who value simplicity and solid returns on all spending.</li>
                    <li><strong>Core Proposition:</strong> Earn unlimited 2X miles on every dollar your business spends, with no need to track bonus categories or worry about caps. Earn 5X miles on hotels and rental cars booked through Capital One Travel.</li>
                    <li><strong>Initial Thoughts:</strong> This card appeals to entrepreneurs needing simple, reliable value on all expenditures. The $0 introductory annual fee for the first year offers a low-risk entry.</li>
                  </ul>
                </section>

                <section id="section-2" className={styles.reviewSection}>
                  <h2>2. Editor's Rating &amp; Concise Verdict and High-Quality Card Image</h2>
                  {/* Image placeholder note from review text: (Image: A current, high-quality image of the Capital One Spark Miles for Business card would be placed here.) */}
                  {/* You should replace reviewDataNew.imageUrl with the actual image path in /public */}
                  <div className={styles.cardImageContainer2}>
                    <Image
                        src={reviewDataNew.imageUrl} // Replace with actual image
                        alt={`${reviewDataNew.cardName} visual`}
                        width={645} // Adjust as needed
                        height={406} // Adjust as needed
                        className={styles.inlineCardImage}
                    />
                  </div>
                  <ul className={styles.featureList}>
                    <li><strong>Editor's Rating:</strong> {reviewDataNew.ratingValue.toFixed(1)} / 10.0 Stars (Derived from 4.2 / 5.0)
                        <ul className={styles.subList}>
                            <li>This rating reflects a strong, dependable card excelling in uncomplicated rewards and good value. It aligns with external ratings like 4.2/5 from CreditCards.com and 4.4/5 from Forbes Advisor.</li>
                        </ul>
                    </li>
                    <li><strong>Concise Verdict:</strong> The Capital One Spark Miles for Business is a commendable workhorse card for businesses prioritizing uncomplicated travel rewards. Its consistent 2X miles on every purchase, no foreign transaction fees, and a Global Entry or TSA PreCheck credit make it highly functional. The $95 annual fee (after the first year) is offset by benefits like the $0 introductory fee and 5X miles via Capital One Travel.</li>
                    <li><strong>Expert Perspective:</strong> This card delivers straightforward value without excessive complexity, focusing on steady, reliable rewards accumulation.</li>
                  </ul>
                </section>
                
                <section id="cta-spark-miles" className={styles.ctaSection}>
                  <h2>Interested in the <b>{reviewDataNew.cardName}</b>?</h2>
                  <div className={styles.ctaButtons}>
                    <a href={reviewDataNew.applyLink} className={`${styles.btn} ${styles.btnApply}`} title="From card issuer's secure site" target="_blank" rel="noopener noreferrer sponsored">Apply Now</a>
                    <a href={reviewDataNew.ratesLink} className={`${styles.btn} ${styles.btnRates}`} target="_blank" rel="noopener noreferrer sponsored">See Rates & Fees</a>
                  </div>
                </section>

                <section id="section-3" className={styles.reviewSection}>
                  <h2>3. Key Features and Full Spectrum of Rates &amp; Fees (Transparency is Key) - Part 1: Core Features</h2>
                  <p>Understanding the card's features and costs is essential.</p>
                  <h3>Key Features Overview:</h3>
                  <ul className={styles.featureList}>
                    <li><strong>Unlimited 2X Miles:</strong> Earn 2 miles per dollar on every purchase, without limits.</li>
                    <li><strong>Enhanced Travel Rewards:</strong> Earn unlimited 5X miles on hotels and rental cars via Capital One Travel.</li>
                    <li><strong>Welcome Offer:</strong> Typically 50,000 miles after spending $4,500 in the first 3 months.</li>
                    <li><strong>Annual Fee:</strong> $0 intro for the first year, then $95.</li>
                    <li><strong>Global Entry or TSA PreCheck Credit:</strong> Up to $120 credit every four years.</li>
                    <li><strong>No Foreign Transaction Fees:</strong> Save on international purchases.</li>
                    <li><strong>Free Employee Cards:</strong> Earn rewards on employee spending with custom limits.</li>
                    <li><strong>Business Management Tools:</strong> Year-end summaries, account manager assignments, and accounting software integration (QuickBooks, Quicken, Excel).</li>
                  </ul>
                  <h3>Initial Rates &amp; Fees Mention:</h3>
                  <p>The primary costs are the $95 annual fee (after year one) and a variable purchase APR (e.g., 25.24%). Carrying a balance can negate rewards.</p>
                  <h3>Capital One Spark Miles for Business: Key Rates &amp; Fees Summary</h3>
                  <DraggableTableWrapper>
                    <div className={styles.tableContainer}>
                        <table className={`${styles.statsTable} ${styles.ratesFeesTable}`}>
                            <thead>
                                <tr>
                                    <th>Fee/Rate Type</th>
                                    <th>Amount/Percentage</th>
                                    <th>Notes/Source</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td data-label="Fee/Rate Type">Annual Fee</td>
                                    <td data-label="Amount/Percentage">$0 intro first year, then $95</td>
                                    <td data-label="Notes/Source">Per Capital One terms</td>
                                </tr>
                                <tr>
                                    <td data-label="Fee/Rate Type">Purchase APR</td>
                                    <td data-label="Amount/Percentage">Variable, e.g., 25.24%</td>
                                    <td data-label="Notes/Source">Based on creditworthiness; check official terms</td>
                                </tr>
                                <tr>
                                    <td data-label="Fee/Rate Type">Foreign Transaction Fee</td>
                                    <td data-label="Amount/Percentage">None</td>
                                    <td data-label="Notes/Source">Per Capital One terms</td>
                                </tr>
                                <tr>
                                    <td data-label="Fee/Rate Type">Late Payment Fee</td>
                                    <td data-label="Amount/Percentage">Up to $39 (Check official terms)</td>
                                    <td data-label="Notes/Source">Standard fee</td>
                                </tr>
                                <tr>
                                    <td data-label="Fee/Rate Type">Cash Advance Fee &amp; APR</td>
                                    <td data-label="Amount/Percentage">Typically higher (Check official terms)</td>
                                    <td data-label="Notes/Source">Generally expensive</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                  </DraggableTableWrapper>
                </section>

                <section id="section-4" className={styles.reviewSection}>
                  <h2>4. Current Welcome Offer &amp; Eligibility Deep Dive</h2>
                  <h3>The Alluring Welcome Mat: Current Offer</h3>
                  <ul className={styles.featureList}>
                    <li>Earn a one-time bonus of <strong>50,000 miles</strong> after spending $4,500 on purchases within 3 months of account opening.</li>
                    <li><strong>Value Unpacked:</strong> These 50,000 miles are worth $500 for travel (1 cent/mile). This bonus covers the annual fee (after year one) for over five years.</li>
                  </ul>
                  <h3>Meeting the Threshold: $4,500 in 3 Months</h3>
                  <ul className={styles.featureList}>
                    <li>This averages $1,500 in business expenses per month. Plan to meet this through regular, planned business costs.</li>
                  </ul>
                  <h3>Who's Invited? Eligibility Insights</h3>
                  <ul className={styles.featureList}>
                    <li><strong>Credit Score:</strong> Requires "Excellent" credit, generally a FICO score in the mid-700s or higher (often 750+).</li>
                    <li><strong>Application Essentials:</strong> Provide business information (legal name, address, TIN) and personal information for owners (names, addresses, SSNs).</li>
                    <li><strong>The Process:</strong> The online application takes about 10 minutes, often with an instant decision.</li>
                  </ul>
                  <p>The welcome offer significantly enhances first-year value. The "excellent" credit requirement targets businesses with strong financial track records.</p>
                </section>

                <section id="section-5" className={styles.reviewSection}>
                  <h2>5. Annual Fee: Cost vs. Value Analysis</h2>
                  <h3>The Tale of Two Fees: $0 then $95</h3>
                  <ul className={styles.featureList}>
                    <li>The fee structure is $0 for the first year, then $95 annually.</li>
                  </ul>
                  <h3>Year One: The Free Pass</h3>
                  <ul className={styles.featureList}>
                    <li>The $0 intro year allows businesses to evaluate the card's benefits without commitment.</li>
                  </ul>
                  <h3>Year Two and Beyond: Making the $95 Worth It</h3>
                  <ul className={styles.featureList}>
                    <li>To justify the $95 fee, derived value should exceed this.
                        <ul className={styles.subList}>
                            <li><strong>Rewards Breakeven:</strong> Spending $4,750 annually (at 2X miles, 1 cent/mile) offsets the fee.</li>
                            <li><strong>Global Entry/TSA PreCheck Perk:</strong> Adds ~$25-$30 in annual value.</li>
                            <li><strong>No Foreign Transaction Fee Savings:</strong> Spending $3,200 internationally could save $96 (vs. 3% fee), covering the annual fee.</li>
                            <li><strong>Capital One Travel's 5X Boost:</strong> Booking $1,000 in hotels/rental cars via the portal yields an extra 3,000 miles (worth $30) compared to 2X earning.</li>
                            <li><strong>Capital One Lounge Access:</strong> Two complimentary visits per year could be worth $50-$60+.</li>
                        </ul>
                    </li>
                    <li><strong>The Verdict on the Fee:</strong> For businesses that spend moderately, travel, and use perks, the $95 fee is often easily justified.</li>
                  </ul>
                </section>

                <section id="section-6" className={styles.reviewSection}>
                  <h2>6. Comprehensive Rewards Earning Structure</h2>
                  <h3>The Engine Room: How You Earn Miles</h3>
                  <ul className={styles.featureList}>
                    <li><strong>Core Earning: Unlimited 2X Miles:</strong> Earn 2 miles per dollar on all purchases, everywhere, without limits or category restrictions.</li>
                    <li><strong>Accelerated Earning: Unlimited 5X Miles via Capital One Travel:</strong> Booking hotels and rental cars through Capital One Travel earns 5 miles per dollar.</li>
                  </ul>
                  <h3>Temporary Boosts:</h3>
                  <ul className={styles.featureList}>
                    <li>Occasional limited-time promotions, like a past offer of 5X miles on Capital One Entertainment purchases through 2025, can add value.</li>
                  </ul>
                  <h3>Miles That Last:</h3>
                  <ul className={styles.featureList}>
                    <li>Miles do not expire with an open, good-standing account, and there's no limit on accumulation.</li>
                  </ul>
                  <h3>Team Effort: Earning on Employee Cards:</h3>
                  <ul className={styles.featureList}>
                    <li>Purchases on free employee cards earn miles pooled into the primary account.</li>
                  </ul>
                  <p>The unlimited 2X base earning is a key differentiator. The 5X rate via Capital One Travel encourages platform use.</p>
                </section>

                <section id="section-7" className={styles.reviewSection}>
                  <h2>7. Redemption Strategies &amp; Point/Mile Valuation</h2>
                  <h3>The Value of a Spark Mile: The Baseline</h3>
                  <ul className={styles.featureList}>
                      <li>Each mile is worth 1 cent when redeemed for travel.</li>
                  </ul>
                  <h3>Unlocking Your Miles: Key Redemption Paths</h3>
                  <ol className={styles.orderedList}>
                      <li><strong>Booking New Travel via Capital One Travel:</strong> Use miles directly for flights, hotels, and rental cars.</li>
                      <li><strong>The Flexible Favorite: Purchase Eraser:</strong> Book travel anywhere, pay with your card, then apply miles as a statement credit against the travel purchase within 90 days at 1 cent/mile.</li>
                      <li><strong>Transferring Miles to Travel Partners:</strong> Transfer miles to over 15 airline and hotel partners (e.g., Air Canada Aeroplan, British Airways Avios, Wyndham Rewards) for potentially higher value. Transfer ratios are often 1:1.</li>
                      <li><strong>Other Redemptions (Lower Value):</strong> Cash back, non-travel statement credits, or gift cards typically yield around 0.5 cents per mile. Focus on travel redemptions.</li>
                  </ol>
                  <p>Purchase Eraser and partner transfers offer significant flexibility and value.</p>
                </section>

                <section id="section-8" className={styles.reviewSection}>
                  <h2>8. Loyalty Program Deep Dive &amp; Partner Network Analysis</h2>
                  <h3>The Capital One Miles Ecosystem</h3>
                  <ul className={styles.featureList}>
                    <li>Spark Miles are part of the broader Capital One Miles program, interoperable with miles from personal cards like Venture and Venture X.</li>
                  </ul>
                  <h3>Transfer Partner Network: Quality over Quantity?</h3>
                  <ul className={styles.featureList}>
                    <li>Over 15 airline and hotel partners. While fewer than some competitors, it includes valuable options.</li>
                    <li><strong>Key Airline Partners:</strong> Air Canada Aeroplan, Air France/KLM Flying Blue, British Airways Avios, Emirates Skywards, Singapore Airlines KrisFlyer, Turkish Airlines Miles&Smiles, providing access to all three major alliances.</li>
                    <li><strong>Key Hotel Partners:</strong> Accor Live Limitless, Choice Privileges, Wyndham Rewards.</li>
                    <li><strong>Transfer Ratios:</strong> Mostly 1:1 for airlines. Verify current ratios before transferring.</li>
                  </ul>
                  <h3>Strategic Value of Partners:</h3>
                  <ul className={styles.featureList}>
                    <li>Partners like Aeroplan (Star Alliance access, no fuel surcharges on many), Flying Blue (transatlantic awards), British Airways Avios (short-haul), and Turkish Miles&Smiles (U.S. domestic sweet spots) offer strong redemption opportunities.</li>
                  </ul>
                  <h3>Analysis:</h3>
                  <p>Capital One's curated partner network offers significant strategic value, especially for those willing to learn partner program nuances to maximize mile value beyond 1 cent each.</p>
                </section>

                <section id="section-9" className={styles.reviewSection}>
                  <h2>9. Travel-Specific Benefits &amp; Credits (Maximization Guide)</h2>
                  <p>Actively using these perks maximizes the card's return.</p>
                  <h3>Global Entry or TSA PreCheck Credit:</h3>
                  <ul className={styles.featureList}>
                    <li><strong>Benefit:</strong> Up to $120 statement credit for the application fee once every four years.</li>
                    <li><strong>Maximization:</strong> Choose the program best for your travel (Global Entry for international, includes PreCheck). Pay with your Spark Miles card.</li>
                  </ul>
                  <h3>No Foreign Transaction Fees:</h3>
                  <ul className={styles.featureList}>
                    <li><strong>Benefit:</strong> $0 in foreign transaction fees.</li>
                    <li><strong>Maximization:</strong> Use the card for all international purchases to save ~1-3%.</li>
                  </ul>
                  <h3>Capital One Travel Portal Access &amp; 5X Miles:</h3>
                  <ul className={styles.featureList}>
                    <li><strong>Benefit:</strong> Earn 5X miles on hotels/rental cars via Capital One Travel, which also offers price prediction/drop protection.</li>
                    <li><strong>Maximization:</strong> Compare prices; if competitive, book via the portal for 5X miles.</li>
                  </ul>
                  <h3>Capital One Lounge Access:</h3>
                  <ul className={styles.featureList}>
                    <li><strong>Benefit:</strong> Typically two complimentary visits per year to Capital One Lounges.</li>
                    <li><strong>Maximization:</strong> Use passes at available lounge locations (DFW, IAD, DEN, etc.).</li>
                  </ul>
                  <h3>Lifestyle Collection Hotel Benefits:</h3>
                  <ul className={styles.featureList}>
                    <li><strong>Benefit:</strong> Perks like a $50 experience credit, room upgrades (when available) at participating hotels booked via Capital One Travel.</li>
                    <li><strong>Maximization:</strong> Check this collection for boutique/lifestyle hotel stays; these bookings also earn 5X miles.</li>
                  </ul>
                </section>

                <section id="section-10" className={styles.reviewSection}>
                  <h2>10. Travel &amp; Purchase Protections (Insurance Explained Simply)</h2>
                  <p>These built-in protections offer peace of mind.</p>
                  <h3>Auto Rental Collision Damage Waiver (Secondary):</h3>
                  <ul className={styles.featureList}>
                    <li>Covers damage/theft for eligible rental vehicles paid with the card. Typically secondary in the U.S., primary abroad. Decline rental company's CDW. Check terms.</li>
                  </ul>
                  <h3>Travel Accident Insurance:</h3>
                  <ul className={styles.featureList}>
                    <li>Accidental death/dismemberment coverage for common carrier travel paid with the card. Not comprehensive medical insurance.</li>
                  </ul>
                  <h3>Extended Warranty Protection:</h3>
                  <ul className={styles.featureList}>
                    <li>Can extend manufacturer's U.S. warranty (usually up to one additional year for warranties of three years or less) on eligible items. Keep receipts.</li>
                  </ul>
                  <h3>Purchase Protection (May Vary - Check Guide):</h3>
                  <ul className={styles.featureList}>
                    <li>Some cards offer short-term protection against damage/theft for new purchases. Consult your guide to benefits for current Spark Miles offerings.</li>
                  </ul>
                  <h3>Roadside Assistance:</h3>
                  <ul className={styles.featureList}>
                    <li>Access to dispatch services for roadside issues; you typically pay service provider fees.</li>
                  </ul>
                  <p>The card offers a baseline of protections. For comprehensive coverage, consider supplemental insurance. Always refer to the official Guide to Benefits.</p>
                </section>

                <section id="section-11" className={styles.reviewSection}>
                  <h2>11. Security, Convenience &amp; Tech Features</h2>
                  <p>Modern features enhance security and streamline operations.</p>
                  <h3>Security Features:</h3>
                  <ul className={styles.featureList}>
                    <li><strong>$0 Fraud Liability:</strong> No responsibility for unauthorized charges.</li>
                    <li><strong>Virtual Card Numbers:</strong> For secure online shopping without exposing your physical card number.</li>
                    <li><strong>Security Alerts:</strong> For unusual activity, large purchases, etc.</li>
                    <li><strong>Card Lock:</strong> Instantly lock your card via app/website if misplaced.</li>
                  </ul>
                  <h3>Convenience Features:</h3>
                  <ul className={styles.featureList}>
                    <li><strong>Mobile App:</strong> Highly-rated app for account management.</li>
                    <li><strong>Automatic Payments (AutoPay):</strong> Avoid late fees by setting up automatic payments.</li>
                    <li><strong>Year-End Summaries:</strong> Itemized annual spending report for taxes/budgeting.</li>
                    <li><strong>Account Managers:</strong> Assign trusted individuals with specific permissions.</li>
                    <li><strong>Free Employee Cards with Controls:</strong> Add cards, set limits, track spending.</li>
                  </ul>
                  <h3>Tech Features:</h3>
                  <ul className={styles.featureList}>
                    <li><strong>Accounting Software Integration:</strong> Download records for Quicken, QuickBooks, Excel.</li>
                    <li><strong>Enhanced Transaction Details:</strong> Merchant logos, maps, categorization.</li>
                    <li><strong>Recurring Transaction View:</strong> Manage subscriptions easily.</li>
                    <li><strong>Contactless Payment:</strong> Tap-to-pay technology.</li>
                  </ul>
                  <p>These features improve user experience, security, and financial management efficiency.</p>
                </section>

                <section id="section-12" className={styles.reviewSection}>
                  <h2>12. Full Spectrum of Rates &amp; Fees (Transparency is Key) - Part 2: Deeper Dive</h2>
                  <p>A closer look at potential costs. Always consult official Capital One terms for current information.</p>
                  <ul className={styles.featureList}>
                    <li><strong>Annual Fee:</strong> $0 intro for the first year, then $95.</li>
                    <li><strong>Purchase APR:</strong> Variable rate (e.g., 25.24%). High; pay balance in full monthly.</li>
                    <li><strong>Balance Transfer APR &amp; Fee:</strong> Standard APR usually applies, plus a transfer fee (often 3-5%). Promotional offers may vary.</li>
                    <li><strong>Cash Advance APR &amp; Fee:</strong> Very high APR and an upfront fee. Avoid unless absolutely necessary.</li>
                    <li><strong>Foreign Transaction Fee:</strong> $0.</li>
                    <li><strong>Late Payment Fee:</strong> Up to $39. Can trigger penalty APR and hurt credit.</li>
                    <li><strong>Over-Limit Fee:</strong> Generally not charged by Capital One.</li>
                    <li><strong>Returned Payment Fee:</strong> May apply if a payment is returned.</li>
                  </ul>
                  <p>Key costs are the annual fee (after year one) and high APR if carrying a balance. No foreign transaction fees is a major saving.</p>
                </section>

                <section id="section-13" className={styles.reviewSection}>
                  <h2>13. Credit Score Guidance &amp; Application Insights</h2>
                  <h3>Target Credit Profile: Excellent</h3>
                  <ul className={styles.featureList}>
                    <li>Capital One targets applicants with "Excellent" credit, typically FICO scores 750+.</li>
                  </ul>
                  <h3>Business Factors:</h3>
                  <ul className={styles.featureList}>
                    <li>Provide legal business name, address, and TIN (EIN or SSN for sole proprietors). Established businesses may be viewed more favorably.</li>
                  </ul>
                  <h3>Personal Guarantee:</h3>
                  <ul className={styles.featureList}>
                    <li>Most small business cards, likely including Spark Miles, require a personal guarantee, making the owner personally liable for debt.</li>
                  </ul>
                  <h3>Application Process:</h3>
                  <ul className={styles.featureList}>
                    <li>Online application takes ~10 minutes; instant decisions are common.</li>
                    <li>Use Capital One's pre-approval tools if available to check likelihood without a hard inquiry.</li>
                  </ul>
                  <h3>Impact on Personal Credit:</h3>
                  <ul className={styles.featureList}>
                    <li>Some business card activity, especially negative, may report to personal credit bureaus. Manage responsibly.</li>
                  </ul>
                  <p>Check your credit score, gather information, and understand the personal guarantee before applying.</p>
                </section>

                <section id="section-14" className={styles.reviewSection}>
                  <h2>14. "Is This Card Your Perfect Travel Companion?" (Detailed User Profiling)</h2>
                  <p>The Spark Miles card suits specific business types:</p>
                  <ul className={styles.featureList}>
                    <li><strong>The Simplicity Seeker:</strong> Values straightforward 2X miles on everything.</li>
                    <li><strong>The Moderate-to-Frequent Business Traveler:</strong> Appreciates Global Entry/TSA PreCheck credit, lounge access, and 5X miles via Capital One Travel.</li>
                    <li><strong>The International Operator:</strong> Benefits from $0 foreign transaction fees.</li>
                    <li><strong>The Business with Diverse Spending:</strong> Earns 2X miles on all expense types.</li>
                    <li><strong>The Delegator with Employee Spenders:</strong> Leverages free employee cards for pooled rewards.</li>
                    <li><strong>The Value-Conscious Optimizer:</strong> Ensures benefits offset the $95 fee (after year one).</li>
                    <li><strong>The Flexible Redeemer:</strong> Likes simple Purchase Eraser and partner transfer options.</li>
                  </ul>
                  <h3>Who Might Look Elsewhere?</h3>
                  <ul className={styles.featureList}>
                    <li><strong>Ultra-Premium Perks Seeker:</strong> May prefer cards like Capital One Venture X Business for more extensive lounge access or credits.</li>
                    <li><strong>Category Spending Maximizer:</strong> Might earn more with cards offering higher bonuses in specific categories.</li>
                    <li><strong>Cash Back Purist:</strong> Should consider Capital One Spark Cash Plus or Spark Cash Select.</li>
                    <li><strong>Businesses Needing 0% Intro APR:</strong> This card isn't focused on financing.</li>
                  </ul>
                  <p>The card excels for businesses wanting reliable, easy travel rewards with practical perks.</p>
                </section>

                <section id="section-15" className={styles.reviewSection}>
                  <h2>15. Unbiased Pros &amp; Cons (Comprehensive &amp; Balanced)</h2>
                  <DraggableTableWrapper>
                    <div className={styles.tableContainer}>
                        <table className={`${styles.statsTable} ${styles.prosConsTable}`}> {/* Added prosConsTable class for potential specific styling */}
                            <thead>
                                <tr>
                                    <th>Pros</th>
                                    <th>Cons</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td data-label="Pros">
                                        <ul className={styles.featureListSimple}>
                                            <li>Simple, unlimited 2X miles on all purchases.</li>
                                            <li>5X miles on hotels/rental cars via Capital One Travel.</li>
                                            <li>Valuable welcome offer (e.g., 50,000 miles).</li>
                                            <li>$0 introductory annual fee for the first year.</li>
                                            <li>Global Entry or TSA PreCheck credit.</li>
                                            <li>No foreign transaction fees.</li>
                                            <li>Flexible redemptions: Purchase Eraser, portal bookings, partner transfers.</li>
                                            <li>Free employee cards with spending controls.</li>
                                            <li>Useful business management tools.</li>
                                            <li>Two annual Capital One Lounge visits.</li>
                                        </ul>
                                    </td>
                                    <td data-label="Cons">
                                        <ul className={styles.featureListSimple}>
                                            <li>$95 annual fee after the first year.</li>
                                            <li>"Excellent" credit required (often 750+ FICO).</li>
                                            <li>Best rewards rate (5X) requires using Capital One Travel portal.</li>
                                            <li>Fewer premium travel perks than higher-tier cards.</li>
                                            <li>Transfer partner network is good but smaller than some rivals.</li>
                                            <li>Low value for non-travel redemptions (e.g., cash back at ~0.5 cents/mile).</li>
                                            <li>High standard purchase APR.</li>
                                        </ul>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                  </DraggableTableWrapper>
                  <p>The card offers strong value for its target user but isn't ideal for everyone.</p>
                </section>

                <section id="section-16" className={styles.reviewSection}>
                  <h2>16. Head-to-Head: How It Stacks Up Against Key Competitors</h2>
                  <DraggableTableWrapper>
                    <div className={styles.tableContainer}>
                        <table className={`${styles.statsTable} ${styles.ratesFeesTable}`}>
                            <thead>
                                <tr>
                                    <th>Feature</th>
                                    <th>Capital One Spark Miles for Business</th>
                                    <th>Chase Ink Business Preferred</th>
                                    <th>Amex Business Gold Card</th>
                                    <th>Capital One Spark Cash Plus</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td data-label="Feature">Annual Fee</td>
                                    <td data-label="Capital One Spark Miles for Business">$0 intro, then $95</td>
                                    <td data-label="Chase Ink Business Preferred">$95</td>
                                    <td data-label="Amex Business Gold Card">$375</td>
                                    <td data-label="Capital One Spark Cash Plus">$150</td>
                                </tr>
                                <tr>
                                    <td data-label="Feature">Welcome Offer (Typical)</td>
                                    <td data-label="Capital One Spark Miles for Business">50,000 miles</td>
                                    <td data-label="Chase Ink Business Preferred">100,000 points*</td>
                                    <td data-label="Amex Business Gold Card">70,000 points*</td>
                                    <td data-label="Capital One Spark Cash Plus">$1,200 bonus*</td>
                                </tr>
                                <tr>
                                    <td data-label="Feature">Rewards</td>
                                    <td data-label="Capital One Spark Miles for Business">2X miles all; 5X hotels/cars via portal</td>
                                    <td data-label="Chase Ink Business Preferred">3X select categories (first $150k/yr); 1X else</td>
                                    <td data-label="Amex Business Gold Card">4X top 2 categories (first $150k/yr); 1X else*</td>
                                    <td data-label="Capital One Spark Cash Plus">2% cash back all; 5% hotels/cars via portal</td>
                                </tr>
                                <tr>
                                    <td data-label="Feature">Point/Mile Value</td>
                                    <td data-label="Capital One Spark Miles for Business">1 cent/travel; potential &gt;1 cent via transfer</td>
                                    <td data-label="Chase Ink Business Preferred">1.25 cents/Chase Travel; potential &gt;1 cent via transfer</td>
                                    <td data-label="Amex Business Gold Card">~1 cent; potential &gt;1 cent via transfer</td>
                                    <td data-label="Capital One Spark Cash Plus">1 cent = 1 cent</td>
                                </tr>
                                <tr>
                                    <td data-label="Feature">Key Travel Perk</td>
                                    <td data-label="Capital One Spark Miles for Business">Global Entry/TSA PreCheck credit</td>
                                    <td data-label="Chase Ink Business Preferred">Cell phone protection; Trip insurance</td>
                                    <td data-label="Amex Business Gold Card">Business/Walmart+ Credits*</td>
                                    <td data-label="Capital One Spark Cash Plus">N/A</td>
                                </tr>
                                <tr>
                                    <td data-label="Feature">Foreign Fee</td>
                                    <td data-label="Capital One Spark Miles for Business">None</td>
                                    <td data-label="Chase Ink Business Preferred">None</td>
                                    <td data-label="Amex Business Gold Card">None</td>
                                    <td data-label="Capital One Spark Cash Plus">None</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                  </DraggableTableWrapper>
                  <p><small>*Competitor offers/details illustrative &amp; subject to change.</small></p>
                  <p><strong>Analysis:</strong> Spark Miles is simpler than category-focused cards like Ink Preferred or Amex Gold. It offers travel rewards unlike the cash-back Spark Cash Plus. It holds a strong middle-ground position.</p>
                </section>

                <section id="section-17" className={styles.reviewSection}>
                  <h2>17. Exclusive Expert Tips &amp; Hidden Value Unlocked</h2>
                  <ul className={styles.featureList}>
                    <li><strong>Strategic Purchase Eraser:</strong> Use for best travel deals found outside the portal.</li>
                    <li><strong>Monitor Transfer Bonuses:</strong> Capital One occasionally offers bonuses to specific partners.</li>
                    <li><strong>Combine with Personal Capital One Cards:</strong> Pool miles if you have Venture/Venture X.</li>
                    <li><strong>Maximize Employee Card Pooling:</strong> Encourage use for all business expenses.</li>
                    <li><strong>Virtual Cards for Subscriptions:</strong> Use for easy management/cancellation of online services.</li>
                    <li><strong>Check Lifestyle Collection:</strong> For potential perks even at some chain hotels.</li>
                    <li><strong>Maximize First Year ($0 Fee):</strong> Hit welcome bonus, use Global Entry credit.</li>
                    <li><strong>Negotiate Retention Offers:</strong> After year one, call to ask about offers to keep the card.</li>
                  </ul>
                  <p>These tips help extract more nuanced value.</p>
                </section>

                <section id="section-18" className={styles.reviewSection}>
                  <h2>18. Aggregated User Sentiment &amp; Real-World Experiences and Real-Life Spend Examples / Estimated Value</h2>
                  <h3>Positive Sentiment:</h3>
                  <p>Users praise the simple 2X earning, welcome bonus, no foreign fees, Global Entry/TSA PreCheck credit, and Purchase Eraser flexibility. Capital One's app is generally well-regarded.</p>
                  <h3>Negative Sentiment:</h3>
                  <p>Some desire higher category bonuses, dislike the $95 fee (if benefits aren't maximized), or find the partner list less extensive than some competitors.</p>
                  <h3>Real-Life Spend Example: "Innovate Solutions" (Annual Spend: $33,000)</h3>
                  <ul className={styles.featureList}>
                    <li>$5,000 on hotels/rental cars via Capital One Travel (5X miles) = 25,000 miles</li>
                    <li>$28,000 on other expenses (2X miles) = 56,000 miles</li>
                    <li><strong>Total Annual Miles: 81,000 miles</strong></li>
                  </ul>
                  <h3>Estimated Annual Value (Year 2+, $95 fee paid):</h3>
                  <ul className={styles.featureList}>
                    <li>Miles Value (@1 cent): $810</li>
                    <li>Global Entry Credit (annualized): $30</li>
                    <li>No Foreign Fee Savings (on $3k @3%): $90</li>
                    <li>Lounge Passes (2 @$30): $60</li>
                    <li><strong>Total Value: $990</strong></li>
                    <li><strong>Net Value (after $95 fee): $895</strong></li>
                  </ul>
                  <h3>First Year Value (includes 50k bonus miles, $0 fee):</h3>
                  <p>$990 (base) + $500 (bonus) = <strong>$1,490</strong></p>
                  <p>This example shows significant value, easily justifying the fee for this business profile.</p>
                </section>

                <section id="section-19" className={styles.reviewSection}>
                  <h2>19. "The Final Takeaway": Authoritative Recommendation &amp; Alternatives</h2>
                  <p>The Capital One Spark Miles for Business card is a highly competent, straightforward travel rewards card for many US small businesses. Its unlimited 2X miles on every purchase, $0 introductory fee, valuable welcome bonus, Global Entry/TSA PreCheck credit, and no foreign transaction fees make it compelling. The 5X miles on hotels/rental cars via Capital One Travel and flexible redemption (Purchase Eraser, partner transfers) add further appeal.</p>
                  <h3>Highly Recommended For:</h3>
                  <ul className={styles.featureList}>
                    <li>Businesses wanting simple, predictable rewards.</li>
                    <li>Those with diverse spending and moderate international travel/transactions.</li>
                    <li>Users who can leverage perks to offset the moderate annual fee ($95 after year one).</li>
                  </ul>
                  <h3>Consider Alternatives If:</h3>
                  <ul className={styles.featureList}>
                    <li>Spending is heavily in specific bonus categories (Chase Ink Business Preferred, Amex Business Gold).</li>
                    <li>You need premium travel perks (Capital One Venture X Business).</li>
                    <li>Cash back is preferred (Capital One Spark Cash Plus or Spark Cash Select).</li>
                    <li>A 0% intro APR is needed.</li>
                    <li>You don't meet the "Excellent" credit requirement (explore Spark Classic).</li>
                  </ul>
                  <p>The Spark Miles for Business is a reliable choice for easy-to-manage travel rewards.</p>
                </section>

                <section id="section-20" className={`${styles.reviewSection} ${styles.faqSection}`}>
                  <h2>20. Card-Specific Frequently Asked Questions (FAQs)</h2>
                  <div className={styles.faqContainer}>
                    <details className={styles.faqItem}>
                        <summary className={styles.faqQuestion}>Q1: How exactly do I get the 5X miles on travel, and is it always the best option?</summary>
                        <div className={styles.faqAnswer}><p>A: You earn 5X miles per dollar when you book hotels and rental cars through the Capital One Travel portal. While this is a great earning rate, it's wise to compare prices on the portal with other booking sites. If the portal price is significantly higher, the extra 3X miles (compared to the standard 2X) might not offset the higher cost. Always do a quick comparison to ensure you're getting the best overall value.</p></div>
                    </details>
                    <details className={styles.faqItem}>
                        <summary className={styles.faqQuestion}>Q2: What's the most flexible way to redeem my Spark Miles for travel if I don't want to use the Capital One portal?</summary>
                        <div className={styles.faqAnswer}><p>A: The "Purchase Eraser" feature is your best bet for maximum flexibility. You can book travel through any airline, hotel, or travel agency you prefer, pay with your Spark Miles card, and then, within 90 days, redeem your miles as a statement credit against that travel purchase at a value of 1 cent per mile. This lets you hunt for the best deals anywhere.</p></div>
                    </details>
                    <details className={styles.faqItem}>
                        <summary className={styles.faqQuestion}>Q3: Is the $95 annual fee (after the first year) worth it if I only travel a couple of times a year?</summary>
                        <div className={styles.faqAnswer}><p>A: It can be. The $95 fee can be offset by several benefits even with moderate travel. The Global Entry or TSA PreCheck credit is worth up to $120 every four years (annualized value of $25-$30). If you make any international purchases, the no foreign transaction fees save you money. Two Capital One Lounge passes add comfort and potential savings. If your annual spending on the card is at least $4,750, the 2X miles earned (worth $95 at 1 cent/mile) will cover the fee by themselves. Evaluate your typical spending and use of these perks.</p></div>
                    </details>
                    <details className={styles.faqItem}>
                        <summary className={styles.faqQuestion}>Q4: If my business already has an EIN, do I still need to provide my SSN and agree to a personal guarantee?</summary>
                        <div className={styles.faqAnswer}><p>A: Yes, typically. When applying for most small business credit cards, including likely the Spark Miles card, you'll need to provide your business's EIN (or your SSN if you're a sole proprietor without an EIN) and the SSN of the business owner(s). Furthermore, a personal guarantee is usually required, meaning the owner is personally liable for the debt if the business cannot pay.</p></div>
                    </details>
                    <details className={styles.faqItem}>
                        <summary className={styles.faqQuestion}>Q5: How does the "unlimited" 2X miles really benefit my business compared to cards with higher bonus categories?</summary>
                        <div className={styles.faqAnswer}><p>A: The "unlimited" 2X miles on every purchase means you don't have to worry about spending caps or tracking specific bonus categories. For businesses with diverse spending that doesn't always align with typical bonus categories (like office supplies or dining), the Spark Miles card ensures a solid 2% return (when miles are valued at 1 cent each for travel) on all expenditures, from inventory and contractor payments to software and utilities. This simplicity and broad applicability can be more valuable than chasing higher rates in narrow categories, especially if you might exceed spending caps on other cards.</p></div>
                    </details>
                    <details className={styles.faqItem}>
                        <summary className={styles.faqQuestion}>Q6: Are there any hidden limits or caps on the miles I can earn or the benefits I can use with this card?</summary>
                        <div className={styles.faqAnswer}><p>A: The miles earning is genuinely unlimited for the 2X on all purchases and 5X on Capital One Travel bookings. Miles also don't expire as long as the account is in good standing. Some benefits have natural limits: the Global Entry/TSA PreCheck credit is once every four years, and lounge access is typically two visits per year. Always refer to the card's terms for specific details on each benefit.</p></div>
                    </details>
                    <details className={styles.faqItem}>
                        <summary className={styles.faqQuestion}>Q7: What are some specific examples of airline partners I can transfer my Spark Miles to, and why would I do that?</summary>
                        <div className={styles.faqAnswer}><p>A: You can transfer miles to over 15 partners, including airlines like Air Canada Aeroplan, Air France/KLM Flying Blue, British Airways Avios, and Turkish Airlines Miles&Smiles. You'd transfer miles because partner programs sometimes offer better redemption rates for specific flights (especially international business or first class) than the standard 1 cent per mile value, potentially giving your miles a value of 1.5, 2 cents, or even more. For example, Turkish Miles&Smiles has a sweet spot for domestic U.S. flights on United, including to Hawaii.</p></div>
                    </details>
                    <details className={styles.faqItem}>
                        <summary className={styles.faqQuestion}>Q8: Besides the Global Entry/TSA PreCheck credit, what other travel perks directly save my business money?</summary>
                        <div className={styles.faqAnswer}><p>A: The most significant is the no foreign transaction fees. If your business makes purchases in foreign currencies (either while traveling or from international suppliers online), you'll save the typical 1-3% fee other cards might charge. Additionally, the two complimentary Capital One Lounge visits can save money on airport food and drinks. If you use the Lifestyle Collection for hotel bookings, the $50 experience credit can also be a direct saving.</p></div>
                    </details>
                    <details className={styles.faqItem}>
                        <summary className={styles.faqQuestion}>Q9: My business spending varies a lot month to month. How can I ensure I meet the welcome bonus spending requirement (e.g., $4,500 in 3 months)?</summary>
                        <div className={styles.faqAnswer}><p>A: Plan ahead. Identify larger, predictable business expenses that will occur during the first three months and try to time them or shift them onto the new card. This could include paying annual software subscriptions, purchasing inventory, pre-paying for advertising, or booking planned business travel. Avoid making unnecessary purchases; focus on channeling existing, necessary spending through the card.</p></div>
                    </details>
                    <details className={styles.faqItem}>
                        <summary className={styles.faqQuestion}>Q10: If I have both a personal Capital One Venture card and this Spark Miles for Business card, can I combine my miles?</summary>
                        <div className={styles.faqAnswer}><p>A: Yes, Capital One generally allows you to combine or transfer miles between your eligible Capital One miles-earning cards, including from a Spark Miles for Business card to a personal Venture card, or vice-versa. This can be very useful for consolidating miles to reach a specific redemption goal faster. You can typically do this online through your Capital One account.</p></div>
                    </details>
                  </div>
                </section>

                <section id="eat-expertise-authority-trustworthiness" className={`${styles.reviewSection} ${styles.eatSection}`}>
                    <h2 dangerouslySetInnerHTML={{ __html: "Our Commitment to E-A-T: Expertise, Authority &amp; Trustworthiness"}}></h2>
                    <p>At <strong>{siteName}</strong>, we ensure our content meets the highest standards. This review of the <strong>{reviewDataNew.cardName}</strong> is based on thorough research of the card's features, terms, and conditions as of {updateDate}, as well as comparisons to other cards in the market, to provide you with a reliable and comprehensive guide.</p>
                </section>

              </article>
            </div>
          </div>

          <aside className={styles.sidebarArea}>
            <TableOfContents sections={tocSections} />
          </aside>
        </div>
      </main>
    </>
  );
}

export default CapitalOneSparkMilesReviewPage;