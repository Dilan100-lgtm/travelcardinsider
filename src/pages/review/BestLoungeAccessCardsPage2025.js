// File: pages/reviews/BestLoungeAccessCardsPage2025.js
"use client"; // 👈 Add this line at the very top

// ❗ Replace image src paths (in loungeCardData and constants) with your optimised, WebP‑or‑AVIF images.
// The paths below are placeholders. Card images should ideally be ~150x95px or similar aspect ratio.

import React, { useState, useRef, useEffect, useCallback } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/NoFTFCardsReview.module.css'; // Ensure this path is correct
 import StarRating from '../../components/StarRating'; 
// ... rest of your file content

// ─────────────────────────────────────────────────────────────────────────────
// 🔗 CONFIG
// ─────────────────────────────────────────────────────────────────────────────
const SITE_BASE_URL = 'https://www.travelcardinsider.com'; // As per your example file
const PAGE_PATH = '/reviews/best-lounge-access-credit-cards-2025';
const PAGE_URL = `${SITE_BASE_URL}${PAGE_PATH}`;
const SITE_NAME = 'Travel Card Insider'; // As per your example file
const HERO_IMAGE_SRC = '/cardmapr-nl-EjAkfNQb46k-unsplash.webp'; // ❗ Replace with your optimised hero image for lounge access
const HERO_IMAGE_ALT = 'Comfortable airport lounge seating area – symbolizing top credit cards for airport lounge access in 2025';
const DATE_PUBLISHED = '2025-06-01'; // ✏️ Adjust to your actual publish date
const DATE_MODIFIED = '2025-06-01'; // ✏️ update whenever you edit copy

// ─────────────────────────────────────────────────────────────────────────────
// 👤 AUTHOR INFO (Reused from your example file, assuming same author)
// ─────────────────────────────────────────────────────────────────────────────
const author = {
  name: 'Dilan Madushanka',
  title: 'Lead Travel Card Analyst',
  image: '/WhatsApp Image 2025-05-12 at 4.09.58 PM.jpeg', // ❗ Your 40x40px web‑optimised headshot
  imageLarge: '/WhatsApp Image 2025-05-12 at 4.09.58 PM.jpeg', // ❗ Your 60x60px for tooltip
  bio: 'Seasoned travel‑card analyst helping readers unlock elite travel perks & maximise lounge access and rewards.', // Adapted bio
  expertise: [
    'Airport Lounge Access Strategy',
    'Premium Credit Card Benefits',
    'Travel Rewards Optimisation',
    'Credit Card Analytics',
  ],
  social: {
    linkedin: 'https://www.linkedin.com/in/dilan-madushanka-b65293365',
    twitter: 'https://x.com/team_dilan',
    email: 'team@travelcardinsider.com',
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// 💳 LOUNGE ACCESS CARD DATA
// ─────────────────────────────────────────────────────────────────────────────
const loungeCardData = [
  {
    id: 'amexPlatinumLounge',
    name: 'The Platinum Card® from American Express',
    imageSrc: '/NUS000000237_480x304_straight_withname.avif', // ❗ Replace with actual card image
    imageAlt: 'The Platinum Card from American Express',
    annualFee: '$695',
    officialCardPageLink: 'https://www.americanexpress.com/us/credit-cards/card/platinum/',
    loungeAccess: "Centurion® Lounges (guest fees apply unless $75k annual spend is met for two free guests), Priority Pass Select membership upon enrollment* (note: Priority Pass memberships obtained through US American Express cards typically do not include credits for Priority Pass airport restaurants), Delta Sky Clubs® (when flying Delta; complimentary access will be limited to 10 visits per Card Member per year starting Feb 1, 2025, unless $75k annual spend is met for unlimited access), plus access to Lufthansa, Escape Lounges - The Centurion® Studio Partner, and Plaza Premium Lounges.",
    valueProposition: "Boasts over $1,500 in potential annual statement credits, including hotel credits, airline fee credits, Uber Cash, Saks Fifth Avenue credits, digital entertainment credits, Walmart+ membership credit, and a CLEAR® Plus credit, which can significantly offset the annual fee if fully utilized.",
    bestFor: "Luxury travelers who frequently visit Centurion Lounges and can effectively maximize the diverse array of statement credits.",
    userQuote: "User Sarah says, \"Centurion access saves me on meals; the credits make the fee worth it.\"",
    applyLink: 'https://www.americanexpress.com/us/credit-cards/card/platinum/', // Official link
    ratesFeesLink: 'https://www.americanexpress.com/us/credit-cards/card-application/apply/prospect/terms/platinum-card/25330-10-0#FeeTable', // Official link
    learnMoreLink: '/cards/amex-platinum', // ✏️ Create this internal page later
     ratingValue: 9.4, // ✏️ Add rating if you implement this
     ratingStars: 5, // ✏️ Add rating if you implement this
  },
  {
    id: 'chaseSapphireReserveLounge',
    name: 'Chase Sapphire Reserve®',
    imageSrc: '/sapphire_reserve_card.png', // ❗ Replace
    imageAlt: 'Chase Sapphire Reserve Card',
    annualFee: '$550 ($75 for each authorized user)',
    officialCardPageLink: 'https://creditcards.chase.com/rewards-credit-cards/sapphire/reserve',
    loungeAccess: "Priority Pass Select membership upon enrollment* (cardholder + 2 guests free; note: as of July 2024, Priority Pass memberships obtained through Chase cards generally do not include credits for Priority Pass airport restaurants). Access to the growing 'Chase Sapphire Lounge by The Club' network (cardholder + 2 guests).",
    valueProposition: "Features a straightforward $300 annual travel credit that effectively reduces the annual fee to $250. Offers robust travel insurance protections and provides 50% more value for points when redeemed for travel through Chase Travel℠.",
    bestFor: "Travelers looking for a balance of broad Priority Pass access, high-quality proprietary Chase lounges, and an easy-to-use annual travel credit.",
    userQuote: "Mark & Lisa note, \"The $300 credit is easy; Priority Pass and Chase lounges are great for our family.\"",
    applyLink: 'https://creditcards.chase.com/rewards-credit-cards/sapphire/reserve', // Official link
    ratesFeesLink: 'https://sites.chase.com/services/creatives/pricingandterms.html/content/dam/pricingandterms/LGC56007.html', // Official link
    learnMoreLink: '/cards/chase-sapphire-reserve', // ✏️ Create this internal page later
    ratingValue: 9.2,
    ratingStars: 4.5,
  },
  {
    id: 'capitalOneVentureXLounge',
    name: 'Capital One Venture X Rewards Credit Card',
    imageSrc: '/venturex-cg-static-card-1000x630-2.avif', // ❗ Replace
    imageAlt: 'Capital One Venture X Rewards Credit Card',
    annualFee: '$395 (Authorized Users can be added for no additional annual fee)',
    officialCardPageLink: 'https://www.capitalone.com/credit-cards/venture-x/',
    loungeAccess: "Priority Pass Select membership upon enrollment* (note: Priority Pass memberships obtained through Capital One cards typically do not include credits for Priority Pass airport restaurants). Unlimited access to Capital One Lounges (cardholder + 2 guests). Authorized users also receive their own full lounge access benefits.",
    valueProposition: "Provides a $300 annual travel credit for bookings through Capital One Travel and a 10,000 anniversary bonus miles (worth $100 towards travel), which can effectively lower the annual fee to $0 or less.",
    bestFor: "Overall value, particularly for families or groups, thanks to its generous authorized user policy for lounge access and a low effective annual cost.",
    userQuote: "The Chens add an AU for their teen: \"Our family of four gets lounge access; the card pays for itself!\"",
    applyLink: 'https://www.capitalone.com/credit-cards/venture-x/', // Official link
    ratesFeesLink: 'https://www.capitalone.com/credit-cards/venture-x/', // Official link (often found under 'View all rates and terms')
    learnMoreLink: '/cards/capital-one-venture-x', // ✏️ Create this internal page later
     ratingValue: 9.0,
     ratingStars: 4.5,
  },
  {
    id: 'amexBusinessPlatinumLounge',
    name: 'The Business Platinum Card® from American Express',
    imageSrc: '/platinum-card-image-alt.avif', // ❗ Replace
    imageAlt: 'The Business Platinum Card from American Express',
    annualFee: '$695',
    officialCardPageLink: 'https://www.americanexpress.com/us/credit-cards/business/business-platinum-card/',
    loungeAccess: "Access to the American Express Global Lounge Collection®, which is the same comprehensive access as the personal Platinum Card®.",
    valueProposition: "Offers a suite of business-centric credits (e.g., Dell Technologies, Indeed, Adobe, wireless telephone service credits) in addition to the airline fee credit and CLEAR® Plus credit. The $75,000 annual spend requirement for Centurion Lounge guest privileges may be more attainable with business expenditures.",
    bestFor: "Business owners who can maximize both the business-specific credits and the premium travel and lounge perks.",
    applyLink: 'https://www.americanexpress.com/us/credit-cards/business/business-platinum/', // Official link
    ratesFeesLink: 'https://www.americanexpress.com/us/credit-cards/card-application/apply/prospect/terms/business-platinum-charge-card/45094-9-0?key=tncBody', // Official link
    learnMoreLink: '/cards/amex-business-platinum', // ✏️ Create this internal page later
     ratingValue: 9.0,
     ratingStars: 4.5,
  },
  {
    id: 'marriottBonvoyBrilliantLounge',
    name: 'Marriott Bonvoy Brilliant® American Express® Card',
    imageSrc: '/NUS000000313_480x304_straight_withname.avif', // ❗ Replace
    imageAlt: 'Marriott Bonvoy Brilliant American Express Card',
    annualFee: '$650',
    officialCardPageLink: 'https://www.americanexpress.com/us/credit-cards/card/marriott-bonvoy-brilliant/',
    loungeAccess: "Priority Pass Select membership upon enrollment* (note: Priority Pass memberships obtained through US American Express cards typically do not include credits for Priority Pass airport restaurants).",
    valueProposition: "Primary benefits include up to $300 in Brilliant Dining Credits (up to $25 per month at restaurants worldwide), an Annual Free Night Award (worth up to 85,000 Marriott Bonvoy points), and complimentary Marriott Bonvoy Platinum Elite status.",
    bestFor: "Dedicated Marriott loyalists who prioritize hotel benefits such as elite status and free nights, with Priority Pass access as a valuable secondary perk.",
    userQuote: "David, a Marriott loyalist, says, \"Platinum status and the free night are key; dining credits help. Priority Pass is a nice bonus.\"",
    applyLink: 'https://www.americanexpress.com/us/credit-cards/card/marriott-bonvoy-brilliant/', // Official link
    ratesFeesLink: 'https://www.americanexpress.com/us/credit-cards/card-application/apply/prospect/terms/marriott-bonvoy-brilliant-card/25330-10-0#FeeTable', // Official link
    learnMoreLink: '/cards/marriott-bonvoy-brilliant', // ✏️ Create this internal page later
     ratingValue: 8.9,
     ratingStars: 4.5,
  }
];

// ─────────────────────────────────────────────────────────────────────────────
// 📊 COMPARISON TABLE DATA
// ─────────────────────────────────────────────────────────────────────────────
const comparisonLoungeTableData = [
  { feature: 'Annual Fee', amexPlatinum: '$695', chaseSapphireReserve: '$550 ($75/AU)', capitalOneVentureX: '$395 (AUs Free)', businessPlatinumAmex: '$695', marriottBonvoyBrilliant: '$650' },
  { feature: 'Primary Lounge Access', amexPlatinum: 'Centurion, PP Select*, Delta Sky Club, etc.', chaseSapphireReserve: 'PP Select*, Chase Sapphire Lounges', capitalOneVentureX: 'PP Select*, Capital One Lounges', businessPlatinumAmex: 'Centurion, PP Select*, Delta Sky Club, etc.', marriottBonvoyBrilliant: 'PP Select*' },
  { feature: 'Priority Pass Guest Allowance (Cardholder +)', amexPlatinum: '2 Free', chaseSapphireReserve: '2 Free', capitalOneVentureX: '2 Free', businessPlatinumAmex: '2 Free', marriottBonvoyBrilliant: '2 Free' },
  { feature: 'Centurion Guest Waiver ($75k Spend)', amexPlatinum: 'Yes', chaseSapphireReserve: 'N/A', capitalOneVentureX: 'N/A', businessPlatinumAmex: 'Yes', marriottBonvoyBrilliant: 'N/A' },
  { feature: 'Key Annual Credits (Approx.)', amexPlatinum: '$1500+ (Lifestyle/Travel)', chaseSapphireReserve: '$300 (Broad Travel)', capitalOneVentureX: '$300 Travel + $100 miles', businessPlatinumAmex: '$1000+ (Business/Travel)', marriottBonvoyBrilliant: '$300 Dining + Free Night' },
  { feature: 'Effective Fee (Potential)', amexPlatinum: 'Variable (Low if credits used)', chaseSapphireReserve: '~ $250', capitalOneVentureX: '~ $0 or less', businessPlatinumAmex: 'Variable (Low if credits used)', marriottBonvoyBrilliant: 'Variable (Low if credits used)' },
];


// ─────────────────────────────────────────────────────────────────────────────
// 🧠 HELPERS - JSON-LD SCHEMA
// ─────────────────────────────────────────────────────────────────────────────
function generateJsonLD() {
  const itemListElements = loungeCardData.map((card, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    item: {
      '@type': 'Product',
      name: card.name,
      url: `${SITE_BASE_URL}${card.learnMoreLink}`, // Link to your internal review page for the card
      image: `${SITE_BASE_URL}${card.imageSrc}`,
      description: card.loungeAccess, // Focus on lounge access as the key feature
      brand: {
        '@type': 'Brand',
        name: card.name.includes('American Express') || card.name.includes('Amex') ? 'American Express' :
              card.name.includes('Chase') ? 'Chase' :
              card.name.includes('Capital One') ? 'Capital One' :
              card.name.includes('Marriott') ? 'Marriott Bonvoy' : // Brand can be the program
              'Various Issuers',
      },
      manufacturer: { // The card issuer
        '@type': 'Organization',
        name: card.name.includes('American Express') || card.name.includes('Amex') ? 'American Express' :
              card.name.includes('Chase') ? 'Chase Bank' :
              card.name.includes('Capital One') ? 'Capital One' :
              'Card Issuer',
      },
      offers: {
        '@type': 'Offer',
        priceCurrency: 'USD',
        price: card.annualFee.replace(/\$|(\s*\(.*\))/g, '').trim(), // Basic cleaning for price
        url: card.applyLink, // Direct link to apply
      },
     ...(card.ratingValue && {
       aggregateRating: {
         '@type': 'AggregateRating',
         ratingValue: card.ratingValue,
           bestRating: '10',
          ratingCount: 1, // Indicates "Our Rating"
        },
     })
    },
  }));

  const breadcrumbsSchema = {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_BASE_URL, },
      { '@type': 'ListItem', position: 2, name: 'Reviews', item: `${SITE_BASE_URL}/reviews`, }, // Assuming a general reviews category page
      { '@type': 'ListItem', position: 3, name: 'Best Credit Cards for Airport Lounge Access 2025', item: PAGE_URL, },
    ],
  };

  const articleSchema = {
    '@type': 'ReviewNewsArticle', // More specific type for a review article
    mainEntityOfPage: { "@type": "WebPage", "@id": PAGE_URL },
    headline: 'Elevating the Journey: Top Credit Cards for Airport Lounge Access in 2025',
    description: 'Discover the top credit cards offering airport lounge access in 2025. Compare Priority Pass, Centurion Lounges, and other network benefits to find your sanctuary.',
    image: [`${SITE_BASE_URL}${HERO_IMAGE_SRC}`], // You can add more images here if relevant
    author: {
      '@type': 'Person',
      name: author.name,
      url: author.social.linkedin || SITE_BASE_URL, // Link to author's LinkedIn or a profile page
      image: `${SITE_BASE_URL}${author.imageLarge || author.image}`,
      jobTitle: author.title,
      description: author.bio.substring(0, 250), // Keep it concise
      sameAs: Object.values(author.social).filter(Boolean)
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_BASE_URL}/images/travel-card-insider-logo-120.png`, // ❗ Ensure this logo (e.g., 120x60px) exists
      },
    },
    datePublished: DATE_PUBLISHED,
    dateModified: DATE_MODIFIED,
    about: itemListElements.map(el => el.item), // Linking the reviewed products
    speakable: { // For voice search
        "@type": "SpeakableSpecification",
        "xpath": [
          "/html/head/title",
          "/html/head/meta[@name='description']/@content",
          // Define more xpaths to cover the main textual content if desired
        ]
    }
  };

  return JSON.stringify(
    {
      '@context': 'https://schema.org',
      '@graph': [
        articleSchema,
        { '@type': 'ItemList', name: 'Top Credit Cards for Airport Lounge Access 2025', url: PAGE_URL, numberOfItems: loungeCardData.length, itemListElement: itemListElements, mainEntityOfPage: PAGE_URL },
        breadcrumbsSchema,
      ],
    },
    null,
    2 // Indentation for readability
  );
}


// ─────────────────────────────────────────────────────────────────────────────
// 🌐 COMPONENT
// ─────────────────────────────────────────────────────────────────────────────
function BestLoungeAccessCardsPage2025() {
  const [showTooltip, setShowTooltip] = useState(false);
  const triggerRef = useRef(null);
  const tooltipRef = useRef(null);
  const tooltipTimeoutIdRef = useRef(null);

  // Tooltip hover logic (copied from your example)
  const handleMouseEnterTriggerOrTooltip = useCallback(() => {
    if (tooltipTimeoutIdRef.current) clearTimeout(tooltipTimeoutIdRef.current);
    setShowTooltip(true);
  }, []);

  const handleMouseLeaveTriggerOrTooltip = useCallback(() => {
    tooltipTimeoutIdRef.current = setTimeout(() => {
      let isStillHovering = false;
      if (triggerRef.current && triggerRef.current.matches(':hover')) isStillHovering = true;
      if (tooltipRef.current && tooltipRef.current.matches(':hover')) isStillHovering = true;
      if (!isStillHovering) setShowTooltip(false);
    }, 150);
  }, []);
  
  useEffect(() => {
    const currentTimeoutId = tooltipTimeoutIdRef.current;
    return () => { if (currentTimeoutId) clearTimeout(currentTimeoutId); };
  }, []);

  useEffect(() => {
    function handleClickOutside(event) {
      if (showTooltip && triggerRef.current && !triggerRef.current.contains(event.target) && tooltipRef.current && !tooltipRef.current.contains(event.target)) {
        setShowTooltip(false);
      }
    }
    if (showTooltip) document.addEventListener("mousedown", handleClickOutside);
    else document.removeEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showTooltip]);


  return (
    <>
      <Head>
        {/* Core SEO */}
        <title>Best Lounge Access Credit Cards 2025: Perks & Reviews | {SITE_NAME}</title>
        <meta
          name="description"
          content="Our expert picks for the top US credit cards for airport lounge access in 2025. Compare Centurion, Priority Pass, Capital One Lounges, and more to maximize your travel comfort."
        />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="keywords" content="best lounge access credit cards 2025, airport lounge access, Priority Pass, Centurion Lounge, Chase Sapphire Lounge, Capital One Lounge, Amex Platinum lounge, Chase Sapphire Reserve lounge, Capital One Venture X lounge, travel rewards" />
        <link rel="canonical" href={PAGE_URL} />

        {/* Open Graph (for social sharing) */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content={`Elevating the Journey: Top Credit Cards for Airport Lounge Access in 2025 | ${SITE_NAME}`} />
        <meta property="og:description" content="Find your airport oasis! We review the best credit cards for lounge access, comparing key networks and cardholder perks for 2025 travel." />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:site_name" content={SITE_NAME} />
        <meta property="og:image" content={`${SITE_BASE_URL}${HERO_IMAGE_SRC}`} />
        <meta property="og:image:alt" content={HERO_IMAGE_ALT} />
        <meta property="og:locale" content="en_US" />
        <meta property="article:published_time" content={DATE_PUBLISHED} />
        <meta property="article:modified_time" content={DATE_MODIFIED} />
        <meta property="article:author" content={author.name} />
        <meta property="article:section" content="Credit Card Reviews" />
        {/* ✏️ Add more article:tag for relevant keywords */}
        <meta property="article:tag" content="Airport Lounges" />
        <meta property="article:tag" content="Credit Cards" />
        <meta property="article:tag" content="Travel Perks" />
        <meta property="article:tag" content="2025" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Best Airport Lounge Access Credit Cards (2025) - Travel Card Insider" />
        <meta name="twitter:description" content="Escape terminal crowds! See which credit cards unlock the best airport lounges in 2025: Amex Platinum, Chase Sapphire Reserve, Venture X & more." />
        <meta name="twitter:image" content={`${SITE_BASE_URL}${HERO_IMAGE_SRC}`} />
        {author.social.twitter && <meta name="twitter:creator" content={`@${author.social.twitter.split('/').pop()}`} />}
        {/* <meta name="twitter:site" content="@YourTwitterHandle"> */}


        {/* Geo‑targeting & Language */}
        <meta name="geo.region" content="US" /> {/* Assuming US focus */}
        <meta name="geo.placename" content="United States" />
        <meta name="language" content="en-US" />
        <meta name="distribution" content="global" />
        <link rel="alternate" hrefLang="en-us" href={PAGE_URL} />


        {/* Preloads & Preconnects - ❗ Update font paths if different */}
        <link rel="preload" href={HERO_IMAGE_SRC} as="image" />
        <link rel="preload" href="/fonts/roboto-condensed-v25-latin-regular.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        {/* Add preloads for other critical fonts used above the fold */}
        {/* <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" /> */}

        {/* JSON‑LD Schema */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: generateJsonLD() }} />
      </Head>

      <main className={styles.reviewContainer}>
        <header className={styles.reviewHeader}>
          <h1>Elevating the Journey: Top Credit Cards for Airport Lounge Access in 2025</h1>
          
          {/* Author Bio Section - Copied from your example */}
          <div
              className={styles.authorBioContainer}
              ref={triggerRef}
              onMouseEnter={handleMouseEnterTriggerOrTooltip}
              onMouseLeave={handleMouseLeaveTriggerOrTooltip}
              onFocus={handleMouseEnterTriggerOrTooltip} 
              onBlur={handleMouseLeaveTriggerOrTooltip} 
              aria-haspopup="true"
              aria-expanded={showTooltip}
              tabIndex={0} 
          >
              <Image
                  src={author.image} // ❗ Replace
                  alt={`${author.name} headshot`} 
                  width={40} 
                  height={40} 
                  className={styles.authorImageSmall}
                  priority // Prioritize author image if it's above the fold
              />
              <div className={styles.authorInfo}>
                  <span className={styles.authorName}>{author.name}</span> 
                  <span className={styles.authorTitle}>{author.title}</span> 
                  {DATE_MODIFIED && (
                      <time dateTime={DATE_MODIFIED} className={styles.authorLastEdited}>
                          Last updated: {new Date(DATE_MODIFIED).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                      </time>
                  )}
                  {author.social && ( 
                      <div className={styles.authorSocialLinks}>
                          {author.social.linkedin && ( 
                              <a href={author.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`${author.name} on LinkedIn`} className={styles.socialIconLink}>
                                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                              </a>
                          )}
                          {author.social.twitter && ( 
                              <a href={author.social.twitter} target="_blank" rel="noopener noreferrer" aria-label={`${author.name} on Twitter`} className={styles.socialIconLink}>
                                   <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-.422.724-.665 1.56-.665 2.452 0 1.697.864 3.198 2.18 4.078-.8-.025-1.555-.247-2.227-.616v.054c0 2.37 1.683 4.333 3.91 4.78-.426.116-.874.174-1.337.174-.31 0-.611-.03-.904-.085.622 1.936 2.421 3.338 4.553 3.377-1.672 1.309-3.781 2.088-6.072 2.088-.394 0-.784-.023-1.169-.069 2.16 1.389 4.723 2.202 7.482 2.202 8.979 0 13.897-7.446 13.897-13.898 0-.21 0-.42-.015-.63.953-.689 1.778-1.56 2.433-2.525z"/></svg>
                              </a>
                          )}
                          {author.social.email && ( 
                              <a href={`mailto:${author.social.email}`} aria-label={`Email ${author.name}`} className={styles.socialIconLink}>
                                   <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"/></svg>
                              </a>
                          )}
                      </div>
                  )}
              </div>
              {showTooltip && (
                  <div 
                      className={styles.authorTooltip}
                      ref={tooltipRef}
                      role="tooltip"
                      onMouseEnter={handleMouseEnterTriggerOrTooltip} 
                      onMouseLeave={handleMouseLeaveTriggerOrTooltip}
                      onFocus={handleMouseEnterTriggerOrTooltip}
                      onBlur={handleMouseLeaveTriggerOrTooltip}
                  >
                       <div className={styles.authorTooltipHeader}>
                           <Image
                              src={author.imageLarge} // ❗ Replace
                              alt={`${author.name} headshot`} 
                              width={60} 
                              height={60} 
                              className={styles.authorTooltipImage}
                           />
                           <div className={styles.authorTooltipInfo}>
                               <span className={styles.authorTooltipName}>{author.name}</span> 
                               <span className={styles.authorTooltipTitle}>{author.title}</span> 
                           </div>
                         </div>
                         {author.expertise && author.expertise.length > 0 && ( 
                           <div className={styles.authorTooltipExpertise}>
                               <strong>Expertise</strong>
                               <ul>
                                   {author.expertise.map(area => <li key={area}>{area}</li>)} 
                               </ul>
                           </div>
                         )}
                         <p className={styles.authorTooltipBioSnippet}>{author.bio}</p> 
                         {author.social && ( 
                              <div className={styles.authorTooltipSocials}>
                                  {author.social.linkedin && ( 
                                       <a href={author.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`${author.name} on LinkedIn`} className={styles.socialIconLink}>
                                          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                                       </a>
                                   )}
                                   {author.social.twitter && ( 
                                       <a href={author.social.twitter} target="_blank" rel="noopener noreferrer" aria-label={`${author.name} on Twitter`} className={styles.socialIconLink}>
                                          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-.422.724-.665 1.56-.665 2.452 0 1.697.864 3.198 2.18 4.078-.8-.025-1.555-.247-2.227-.616v.054c0 2.37 1.683 4.333 3.91 4.78-.426.116-.874.174-1.337.174-.31 0-.611-.03-.904-.085.622 1.936 2.421 3.338 4.553 3.377-1.672 1.309-3.781 2.088-6.072 2.088-.394 0-.784-.023-1.169-.069 2.16 1.389 4.723 2.202 7.482 2.202 8.979 0 13.897-7.446 13.897-13.898 0-.21 0-.42-.015-.63.953-.689 1.778-1.56 2.433-2.525z"/></svg>
                                       </a>
                                   )}
                                   {author.social.email && ( 
                                       <a href={`mailto:${author.social.email}`} aria-label={`Email ${author.name}`} className={styles.socialIconLink}>
                                          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"/></svg>
                                       </a>
                                   )}
                              </div>
                          )}
                  </div>
              )}
          </div>
        </header>

        <div className={styles.heroSection}>
          <Image
            src={HERO_IMAGE_SRC} // ❗ Replace
            alt={HERO_IMAGE_ALT}
            layout="responsive"
            width={900} // Example intrinsic width, adjust to your image's aspect ratio
            height={450} // Example intrinsic height, adjust
            objectFit="cover"
            priority // Hero image should be priority
            className={styles.heroImage}
          />
        </div>
        
        <p className={styles.disclaimer}>
          <strong>Disclaimer:</strong> Card offers, terms, benefits, and annual fees are subject to change and are accurate as of {new Date(DATE_MODIFIED).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}. Please verify all details directly with the card issuer before applying. This page may contain affiliate links; if you apply through our links, we may earn a commission at no additional cost to you. This supports our work.
        </p>

        <article>
          <section className={styles.reviewSection}>
            <p>Air travel in 2025 often means crowded terminals. Airport lounges offer a strategic escape, providing not just comfort but also potential savings and productivity boosts, transforming your travel day.</p>
          </section>

          <section id="why-lounge-access-matters" className={styles.reviewSection}>
            <h2>I. The Modern Traveler's Sanctuary: Why Lounge Access Matters</h2>
            <p>Lounges offer tangible benefits. Complimentary food, drinks, and Wi-Fi can save $20-$40 per visit, potentially offsetting card fees over a year. For business travelers, the quiet and connectivity turn wait times into productive hours. Beyond economics, lounges provide a calm oasis, reducing stress. As one traveler, Barbara P.M., reportedly told Priority Pass, her lounge access is an "invaluable haven" for safety and assistance (General information and member experiences can be found on the <a href="https://www.prioritypass.com/" target="_blank" rel="noopener noreferrer sponsored">Priority Pass Official Website</a>).</p>
          </section>

          <section id="navigating-networks" className={styles.reviewSection}>
            <h2>II. Navigating the Networks: Priority Pass vs. Centurion</h2>
            <p>Two main players dominate: Priority Pass and American Express's Centurion Collection. <a href="https://www.prioritypass.com/" target="_blank" rel="noopener noreferrer sponsored">Priority Pass</a> is a vast independent network, with access to over 1,500+ global lounges (as per their website, with some reports citing over 1,700), typically accessed via premium credit cards. Its strength is broad coverage, though quality varies and overcrowding can be an issue. The <a href="https://www.thecenturionlounge.com/" target="_blank" rel="noopener noreferrer sponsored">Centurion Lounge Network</a> is Amex's smaller, exclusive offering, known for consistent luxury—chef-inspired food, premium bars, and dedicated workspaces. Access is mainly for Platinum cardholders. Both networks face crowding challenges, leading to stricter access policies.</p>
          </section>

          <section id="priority-pass-in-depth" className={styles.reviewSection}>
            <h2>III. Priority Pass In-Depth: Global Havens</h2>
            <p>Most US travelers access Priority Pass through "Priority Pass Select" memberships via credit cards, often including two free guests. Amenities like food, drinks, and Wi-Fi are standard, but quality varies. The Priority Pass app helps check specific lounge details. The key downsides are overcrowding, potentially leading to denied entry, and a critical detail for US cardholders: memberships from American Express, Capital One, and (as of July 2024) Chase generally exclude credits for Priority Pass airport restaurants and non-lounge experiences. This is a widely reported policy, and specific terms should always be confirmed with the card issuer.</p>
          </section>

          <section id="centurion-experience" className={styles.reviewSection}>
            <h2>IV. The Centurion Experience: Premium Retreats</h2>
            <p>Amex's Centurion Lounges promise an upscale pre-flight experience with gourmet food, premium bars, and work-friendly Wi-Fi. Many offer showers and unique local touches. Locations span major US hubs like DFW, JFK, LAX, with international spots like LHR and HKG, and ongoing expansion (see the <a href="https://www.thecenturionlounge.com/locations/" target="_blank" rel="noopener noreferrer sponsored">American Express Centurion Lounge Directory</a> for current locations). Access is mainly for Platinum Card® members (free entry). Guests typically cost $50 per adult and $30 per child (ages 2-17), unless you meet a $75,000 annual card spend requirement on eligible Platinum Cards to receive complimentary guest access for up to two guests. Entry is usually limited to three hours pre-departure, and waitlists via the Amex App are common due to popularity.</p>
          </section>

          <section id="top-cards-lounge-bliss" className={styles.reviewSection}>
            <h2>V. Top Cards for Lounge Bliss in 2025</h2>
            <p>Choosing the right card involves balancing annual fees, the type and breadth of lounge access, and the real value of any included credits or perks.</p>
            
            {loungeCardData.map((card, index) => (
              <div key={card.id} className={`${styles.cardDetailSection} ${index < loungeCardData.length -1 ? styles.cardSeparator : ''}`}>
                <div className={styles.cardHeader}>
                    <div className={styles.cardImageContainer}>
                      <Image
                        src={card.imageSrc} // ❗ Replace
                        alt={card.imageAlt}
                        width={150} 
                        height={95}  
                        objectFit="contain"
                        loading={index > 1 ? "lazy" : "eager"} // Eager load first few, lazy load others
                      />
                    </div>
                    <div className={styles.cardTitleRating}>
                      <h3>{index + 1}. {card.name}</h3>
                      {card.ratingStars && <StarRating rating={card.ratingStars} />} 
                      {card.ratingValue && <span className={styles.ratingValue}>Our Rating: {card.ratingValue.toFixed(1)}/10</span>}
                    </div>
                </div>
                <ul>
                  <li><strong>Annual Fee:</strong> {card.annualFee} (<a href={card.officialCardPageLink} target="_blank" rel="noopener noreferrer sponsored">Official Card Page</a>)</li>
                  <li><strong>Lounge Access:</strong> {card.loungeAccess}</li>
                  <li><strong>Value Proposition:</strong> {card.valueProposition}</li>
                  <li><strong>Best For:</strong> {card.bestFor}</li>
                  {card.userQuote && <li><strong>User Take:</strong> <em>{card.userQuote}</em></li>}
                </ul>
                <p className={styles.cardFinePrint}><em>*Enrollment required for Priority Pass Select. Terms and limitations apply.</em></p>
                <div className={styles.cardButtonsContainer}>
                    <a
                      href={card.applyLink}
                      target="_blank"
                      rel="noopener noreferrer sponsored" 
                      className={`${styles.cardButton} ${styles.applyButton}`}
                      aria-label={`Apply now for ${card.name}`}
                    >
                      Apply Now
                    </a>
                     <a
                      href={card.ratesFeesLink}
                      target="_blank"
                      rel="noopener noreferrer sponsored" 
                      className={`${styles.cardButton} ${styles.secondaryButton}`}
                      aria-label={`See rates and fees for ${card.name}`}
                    >
                      Rates & Fees
                    </a>
                     <Link href={card.learnMoreLink} legacyBehavior>
                       <a className={`${styles.cardButton} ${styles.secondaryButton}`} aria-label={`Learn more about ${card.name}`}>
                         Learn More
                       </a>
                    </Link>
                </div>
              </div>
            ))}
             <p className={styles.generalDisclaimer}><em>*Priority Pass Select memberships obtained through these U.S. credit cards generally exclude credits for airport restaurants, cafes, and bars. Always verify current benefits with the card issuer.</em></p>
          </section>

          <section id="traveler-testimonials" className={styles.reviewSection}>
            <h2>VI. Voices from the Gates: Traveler Testimonials</h2>
            <blockquote className={styles.quote}>
              <p>"Centurion Lounges are my airport 'Shangri-La' – worth the Amex Platinum fee for the quality."</p>
              <footer>- Frequent Flyer (commenter)</footer>
            </blockquote>
            <blockquote className={styles.quote}>
              <p>"My Priority Pass is a 'haven' for solo international travel – safe, with essential amenities."</p>
              <footer>- Barbara P.M. (as reportedly told to Priority Pass)</footer>
            </blockquote>
            <blockquote className={styles.quote}>
              <p>"Waited an hour for Centurion. Frustrating."</p>
              <footer>- Amex User, Reddit (paraphrased)</footer>
            </blockquote>
            <blockquote className={styles.quote}>
              <p>"Priority Pass denied 80% of the time due to capacity."</p>
              <footer>- Blog Commentator (paraphrased)</footer>
            </blockquote>
            <p>These varying experiences show that while lounges offer great potential, overcrowding can impact access. Setting realistic expectations is key.</p>
          </section>

          <section id="smart-card-strategies" className={styles.reviewSection}>
            <h2>VII. Financial Wisdom: Smart Card Strategies</h2>
            <ul>
              <li><strong>Match to Your Travel:</strong> Frequent flyers benefit most. Consider your typical companions (solo vs. family) and common airports/airlines to align with lounge networks.</li>
              <li><strong>Calculate True Cost:</strong> Subtract the real value of credits you'll <em>actually</em> use from the annual fee to find the "effective annual fee." Don't overvalue credits you won't redeem.</li>
              <li><strong>Look Beyond Lounges:</strong> Assess points earning rates, redemption values, travel insurance, and other perks like hotel elite status or free checked bags if those are important to you.</li>
            </ul>
          </section>

          <section id="verdict-best-cards" className={`${styles.reviewSection} ${styles.eetaSection || ''}`}>
            <h2>VIII. The Verdict: Best Cards for Your Airport Sanctuary in 2025</h2>
            <ul>
              <li><strong>Amex Platinum:</strong> Best for luxury seekers maximizing broad lounge access (especially Centurion) & a wide array of statement credits. <Link href="/reviews/lounge-cards/amex-platinum"><a>Learn More</a></Link>.</li>
              <li><strong>Chase Sapphire Reserve:</strong> Ideal for those seeking balanced premium access with Priority Pass & growing Chase Sapphire Lounges, plus a strong travel credit and insurance. <Link href="/reviews/lounge-cards/chase-sapphire-reserve"><a>Learn More</a></Link>.</li>
              <li><strong>Capital One Venture X:</strong> Top pick for overall value & family travel due to its low effective annual fee, excellent authorized user perks (including lounge access), and access to Capital One Lounges and Priority Pass. <Link href="/reviews/lounge-cards/capital-one-venture-x"><a>Learn More</a></Link>.</li>
              <li><strong>Business Platinum Amex:</strong> Suited for business owners who can leverage specific business credits alongside comprehensive premium lounge access. <Link href="/reviews/lounge-cards/amex-business-platinum"><a>Learn More</a></Link>.</li>
              <li><strong>Marriott Bonvoy Brilliant Amex:</strong> For dedicated Marriott loyalists wanting strong hotel perks (like Platinum Elite status and dining credits) with Priority Pass as a valuable secondary benefit. <Link href="/reviews/lounge-cards/marriott-bonvoy-brilliant"><a>Learn More</a></Link>.</li>
            </ul>
          </section>
          
          <section id="head-to-head-comparison" className={styles.reviewSection}>
            <h2>Head-to-Head: Top Airport Lounge Access Cards (2025)</h2>
            <div className={styles.tableContainer}>
              <table className={styles.comparisonTable}>
                <thead>
                  <tr>
                    <th scope="col">Feature</th>
                    <th scope="col">Amex Platinum</th>
                    <th scope="col">Chase Sapphire Reserve</th>
                    <th scope="col">Capital One Venture X</th>
                    <th scope="col">Business Platinum Amex</th>
                    <th scope="col">Marriott Bonvoy Brilliant Amex</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonLoungeTableData.map((row) => (
                    <tr key={row.feature}>
                      <th scope="row">{row.feature}</th>
                      <td>{row.amexPlatinum}</td>
                      <td>{row.chaseSapphireReserve}</td>
                      <td>{row.capitalOneVentureX}</td>
                      <td>{row.businessPlatinumAmex}</td>
                      <td>{row.marriottBonvoyBrilliant}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className={styles.tableNote}><em>*Priority Pass Select via these U.S. cards typically excludes restaurant/non-lounge credits. Guest policies and access rules can vary by lounge and card. Always verify current benefits.</em></p>
            {/* <div className={styles.exportButtonContainer}> // Optional: If you have functionality for this
              <button className={styles.exportButton}>Export to Sheets</button>
            </div> */}
          </section>

          <section id="final-thoughts" className={styles.reviewSection}>
            <h2>Final Thoughts from TravelCardInsider</h2>
            <p>The airport lounge scene is dynamic, with card issuers innovating, sometimes by building their own lounge networks (like Chase Sapphire Lounges and Capital One Lounges). This competition offers travelers more choices but also necessitates staying updated on ever-evolving benefits and access rules. Choose the card that best aligns with your individual travel patterns, airport preferences, and spending habits to truly maximize its value and transform your airport experience.</p>
          </section>

        </article>
      </main>
    </>
  );
}

export default BestLoungeAccessCardsPage2025;