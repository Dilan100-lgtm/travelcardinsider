// File: pages/reviews/best-amex-gold-card-pairings-2025.js
"use client"; // 👈 Add this line at the very top

// ❗ Replace image src paths (in card data and constants) with your optimised, WebP‑or‑AVIF images.
// Card images should ideally be ~150x95px or similar aspect ratio. Hero image aspect ratio around 2:1.

import React, { useState, useRef, useEffect, useCallback } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/NoFTFCardsReview.module.css'; // Assuming general styles can be reused
import StarRating from '../../components/StarRating'; // Assuming you have this component

// ─────────────────────────────────────────────────────────────────────────────
// 🔗 CONFIG
// ─────────────────────────────────────────────────────────────────────────────
const SITE_BASE_URL = 'https://www.travelcardinsider.com';
const PAGE_PATH = '/reviews/best-amex-gold-card-pairings-2025';
const PAGE_URL = `${SITE_BASE_URL}${PAGE_PATH}`;
const SITE_NAME = 'Travel Card Insider';
const HERO_IMAGE_SRC = '/cardmapr-nl-EjAkfNQb46k-unsplash.webp'; // ❗ Replace with your optimised hero image
const HERO_IMAGE_ALT = 'Stylized image of Amex Gold card alongside other complementary credit cards, symbolizing strategic pairing.';
const DATE_PUBLISHED = '2025-06-03'; // ✏️ Adjust to your actual publish date
const DATE_MODIFIED = '2025-06-03'; // ✏️ Update whenever you edit copy

// ─────────────────────────────────────────────────────────────────────────────
// 👤 AUTHOR INFO (Adapted for this article's context)
// ─────────────────────────────────────────────────────────────────────────────
const author = {
  name: 'Dilan Madushanka',
  title: 'Lead Rewards Strategist',
  image: '/images/authors/dilan-madushanka-40px.jpeg', // ❗ Your 40x40px web‑optimised headshot
  imageLarge: '/images/authors/dilan-madushanka-60px.jpeg', // ❗ Your 60x60px for tooltip
  bio: 'Seasoned rewards strategist dedicated to helping travelers maximize their credit card benefits and build powerful card pairings.',
  expertise: [
    'Amex Membership Rewards®',
    'Credit Card Pairing Strategies',
    'Travel Rewards Optimisation',
    'Maximizing Card Credits & Perks',
  ],
  social: {
    linkedin: 'https://www.linkedin.com/in/dilan-madushanka-b65293365',
    twitter: 'https://x.com/team_dilan',
    email: 'team@travelcardinsider.com',
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// 💳 AMEX GOLD CARD DATA
// ─────────────────────────────────────────────────────────────────────────────
const amexGoldCardData = {
  id: 'amexGoldBase',
  name: 'The American Express® Gold Card',
  imageSrc: '/NUS000000174_480x304_straight_withname.avif', // ❗ Replace with actual Amex Gold image
  imageAlt: 'American Express Gold Card',
  officialCardPageLink: 'https://www.americanexpress.com/us/credit-cards/card/gold-card/',
  annualFeeText: '$325',
  rewardsHighlights: [
    "<strong>4X Membership Rewards® points</strong> at Restaurants worldwide (up to $50,000 per calendar year in purchases, then 1X).",
    "<strong>4X Membership Rewards® points</strong> at U.S. supermarkets (on up to $25,000 per calendar year in purchases, then 1X).",
    "<strong>3X Membership Rewards® points</strong> on flights booked directly with airlines or on amextravel.com."
  ],
  creditsSummary: [
    "Up to <strong>$120 Uber Cash</strong> annually ($10 per month for U.S. Uber rides or Uber Eats orders; enrollment required).",
    "Up to <strong>$120 Dining Credit</strong> annually ($10 per month statement credit for purchases at Grubhub, The Cheesecake Factory, Goldbelly, Wine.com, Milk Bar, and select Shake Shack locations; enrollment required).",
    "Up to <strong>$100 Resy Credit</strong> ($50 semi-annually, U.S. Resy; enrollment required).",
    "Up to <strong>$84 Dunkin' Credit</strong> ($7/month, U.S. Dunkin'; enrollment required).",
  ],
  keyTravelerPerks: "No Foreign Transaction Fees; $100 The Hotel Collection credit (for qualifying 2+ night stays booked through Amex Travel); Baggage Insurance Plan; Trip Delay Insurance; Car Rental Loss and Damage Insurance (secondary); Purchase Protection & Extended Warranty."
  // Note: No ratingValue/ratingStars for the base card as it's the reference, not a "pairing option" itself.
};

// ─────────────────────────────────────────────────────────────────────────────
// 💳 COMPANION CARD DATA
// ─────────────────────────────────────────────────────────────────────────────
const companionCardData = [
  {
    id: 'capitalOneVentureXPairing',
    name: 'Capital One Venture X Rewards Credit Card',
    imageSrc: '/venturex-cg-static-card-1000x630-2.avif', // ❗ Replace
    imageAlt: 'Capital One Venture X Rewards Credit Card',
    annualFee: '$395',
    officialCardPageLink: 'https://www.capitalone.com/credit-cards/venture-x/',
    rewards: '2X miles on every purchase, everywhere; 5X miles on flights and 10X miles on hotels and rental cars when booked through Capital One Travel.',
    goldSynergy: "Covers Gold's 1X spending gaps with a simple 2X miles on all purchases. Key perks include a $300 annual travel credit (for bookings through Capital One Travel), 10,000 bonus miles every account anniversary (equal to $100 toward travel), and a credit for Global Entry or TSA PreCheck® application fee.",
    loungeAlert: "Note: Capital One Lounge guest access policies are changing. Effective early 2025 for new cardholders and after the first renewal in 2025 for existing cardholders, primary cardholders will no longer receive complimentary guest access to Capital One Lounges unless they meet a $75,000 annual spend requirement. Authorized users may also see changes to their complimentary lounge access privileges. Priority Pass guesting privileges may also be impacted.",
    bestFor: 'Travelers wanting high flat-rate earnings on non-category spend and premium perks, comfortable with portal bookings for some redemptions.',
    userTip: 'Sarah K. says, "Gold for food, Venture X for everything else. The $300 credit is easy to use. Watching those lounge changes, though."',
    applyLink: 'https://www.capitalone.com/credit-cards/venture-x/',
    ratesFeesLink: 'https://www.capitalone.com/credit-cards/venture-x/',
    learnMoreLink: '/reviews/credit-cards/capital-one-venture-x-rewards-credit-card',
    ratingValue: 9.0,
    ratingStars: 4.5,
  },
  {
    id: 'chaseSapphirePreferredPairing',
    name: 'Chase Sapphire Preferred® Card',
    imageSrc: '/sapphire_preferred_card.png', // ❗ Replace
    imageAlt: 'Chase Sapphire Preferred Card',
    annualFee: '$95',
    officialCardPageLink: 'https://creditcards.chase.com/rewards-credit-cards/sapphire/preferred',
    rewards: '5X total points on travel purchased through Chase Travel℠; 3X points on dining, online grocery purchases (excluding Target, Walmart and wholesale clubs), and select streaming services; 2X points on all other travel purchases. Points are worth 25% more when redeemed for travel through Chase Travel℠.',
    goldSynergy: 'Provides access to valuable non-Amex transfer partners like World of Hyatt, Southwest, and United. The 3X on online groceries fills a useful niche. Includes a $50 Annual Chase Travel Hotel Credit, primary auto rental Collision Damage Waiver (CDW), and a 10% anniversary points boost based on your total purchases made the previous year.',
    bestFor: 'Those looking to diversify into Chase Ultimate Rewards® points (especially for Hyatt) and who value robust travel insurance and a lower annual fee companion.',
    userTip: 'Mark T. notes, "CSP is key for my online groceries and that primary rental car insurance. Transferring to Hyatt for family trips offers incredible value."',
    applyLink: 'https://creditcards.chase.com/rewards-credit-cards/sapphire/preferred',
    ratesFeesLink: 'https://creditcards.chase.com/rewards-credit-cards/sapphire/preferred',
    learnMoreLink: '/reviews/credit-cards/chase-sapphire-preferred-card',
    ratingValue: 8.4,
    ratingStars: 4.0, // Representing 4.6 as 4.5 for standard star display
  },
  {
    id: 'amexBlueBusinessPlusPairing',
    name: 'American Express® Blue Business® Plus Credit Card',
    imageSrc: '/images/cards/amex-blue-business-plus-card-art.webp', // ❗ Replace
    imageAlt: 'American Express Blue Business Plus Credit Card',
    annualFee: '$0',
    officialCardPageLink: 'https://www.americanexpress.com/us/credit-cards/business/business-credit-cards/american-express-blue-business-plus-credit-card-amex/',
    rewards: '2X Membership Rewards® points on the first $50,000 in eligible purchases each calendar year, then 1X point per dollar thereafter.',
    goldSynergy: "Elevates earnings to 2X MR points on Gold's 1X categories (up to the $50k annual cap). All points pool directly into your existing Membership Rewards® account, simplifying your points strategy.",
    drawback: 'Foreign Transaction Fee: 2.7% of each transaction after conversion to US dollars. This makes it less ideal for international spending.',
    bestFor: 'US-based individuals or small business owners focused on maximizing Membership Rewards® points on everyday domestic spending without an additional annual fee.',
    userTip: 'Lisa P. shares, "Gold + BBP is a domestic dream team. BBP ensures all my miscellaneous U.S. spending earns 2X MR, supercharging my points for no extra annual fee."',
    applyLink: 'https://www.americanexpress.com/us/credit-cards/business/business-credit-cards/american-express-blue-business-plus-credit-card-amex/',
    ratesFeesLink: 'https://www.americanexpress.com/us/credit-cards/business/business-credit-cards/american-express-blue-business-plus-credit-card-amex/terms',
    learnMoreLink: '/reviews/credit-cards/amex-blue-business-plus-card',
    ratingValue: 8.8,
    ratingStars: 4.5,
  },
  {
    id: 'citiStrataPremierPairing',
    name: 'Citi Strata Premier℠ Card',
    imageSrc: '/images/cards/citi-strata-premier-card-art.webp', // ❗ Replace
    imageAlt: 'Citi Strata Premier Card',
    annualFee: '$95',
    officialCardPageLink: 'https://www.citi.com/credit-cards/citi-strata-premier-card',
    rewards: '10X points on hotels, rental cars, and attractions booked through CitiTravel.com; 3X points on air travel and other hotel purchases, at restaurants, supermarkets, gas stations, and EV charging stations.',
    goldSynergy: "Its 3X points on gas and EV charging is a significant advantage over Amex Gold's typical 1X on fuel. The broad 3X on supermarkets can supplement Gold's U.S. supermarket cap or cover international grocery spend. Diversifies points into Citi ThankYou® Rewards. Offers a $100 annual hotel savings benefit on a single hotel stay of $500 or more (excluding taxes and fees) booked through CitiTravel.com.",
    bestFor: 'Travelers with high gas station expenditure, who value broad 3X category coverage, and can effectively use the CitiTravel.com portal for the hotel benefit.',
    userTip: '"My go-to for gas. The hotel credit can be a bit specific to use, but the 3X on gas, travel, and supermarkets is solid for the $95 fee." - Community Feedback',
    applyLink: 'https://www.citi.com/credit-cards/citi-strata-premier-card',
    ratesFeesLink: 'https://www.citi.com/credit-cards/citi-strata-premier-card',
    learnMoreLink: '/reviews/credit-cards/citi-strata-premier-card',
    ratingValue: 8.9,
    ratingStars: 4.5,
  }
];

// ─────────────────────────────────────────────────────────────────────────────
// 📊 COMPARISON TABLE DATA
// ─────────────────────────────────────────────────────────────────────────────
const comparisonPairingTableData = [
  { feature: 'Annual Fee', amexGold: '$325', ventureX: '$395', sapphirePreferred: '$95', blueBusinessPlus: '$0', strataPremier: '$95' },
  { feature: 'Foreign Trans. Fee', amexGold: 'None', ventureX: 'None', sapphirePreferred: 'None', blueBusinessPlus: '2.7%', strataPremier: 'None' },
  { feature: 'General Spend Rewards', amexGold: '1X MR', ventureX: '2X Miles', sapphirePreferred: '1X UR', blueBusinessPlus: '2X MR (to $50k/yr)', strataPremier: '1X TYP' },
  { feature: 'Gas Rewards (Typical)', amexGold: '1X MR', ventureX: '2X Miles', sapphirePreferred: '1X UR (unless specific promo)', blueBusinessPlus: '2X MR (to $50k/yr)', strataPremier: '3X TYP' },
  { feature: 'Key Travel Credit', amexGold: '$100 Hotel Collection', ventureX: '$300 Annual Travel Credit (Capital One Travel)', sapphirePreferred: '$50 Annual Hotel Credit (Chase Travel℠)', blueBusinessPlus: 'None', strataPremier: '$100 Annual Hotel Savings Benefit (CitiTravel.com)' },
];

// ─────────────────────────────────────────────────────────────────────────────
// 🧠 HELPERS - JSON-LD SCHEMA
// ─────────────────────────────────────────────────────────────────────────────
function generateJsonLD() {
  // For schema, we can include Amex Gold as the primary item and pairings as related or reviewed items.
  // Or list all as products reviewed in the article. Let's list all.
  const allCardsForSchema = [
    { ...amexGoldCardData, learnMoreLink: PAGE_URL }, // Amex Gold points to the current review page
    ...companionCardData
  ];

  const itemListElements = allCardsForSchema.map((card, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    item: {
      '@type': 'Product',
      name: card.name,
      url: card.learnMoreLink ? `${SITE_BASE_URL}${card.learnMoreLink}` : card.officialCardPageLink,
      image: `${SITE_BASE_URL}${card.imageSrc}`,
      description: card.goldSynergy || `Key benefits include: ${(card.rewardsHighlights || ["American Express Gold Card benefits"]).join(', ').substring(0,150)}... and annual credits.`,
      brand: {
        '@type': 'Brand',
        name: card.name.includes('American Express') || card.name.includes('Amex') ? 'American Express' :
              card.name.includes('Chase') ? 'Chase' :
              card.name.includes('Capital One') ? 'Capital One' :
              card.name.includes('Citi') ? 'Citi' :
              'Various Issuers',
      },
      manufacturer: {
        '@type': 'Organization',
        name: card.name.includes('American Express') || card.name.includes('Amex') ? 'American Express' :
              card.name.includes('Chase') ? 'Chase Bank' :
              card.name.includes('Capital One') ? 'Capital One' :
              card.name.includes('Citi') ? 'Citibank' :
              'Card Issuer',
      },
      offers: {
        '@type': 'Offer',
        priceCurrency: 'USD',
        price: (card.annualFee || card.annualFeeText || '0').replace(/\$|(\s*\(.*\))/g, '').trim(),
        url: card.applyLink || card.officialCardPageLink,
      },
      ...(card.ratingValue && { // Add aggregateRating if ratingValue exists
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: card.ratingValue,
          bestRating: '10', // Assuming your ratings are out of 10
          ratingCount: 1, // Indicates this is "Our Rating" or a single review source
        },
      })
    },
  }));

  const breadcrumbsSchema = {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Credit Card Reviews', item: `${SITE_BASE_URL}/reviews` },
      { '@type': 'ListItem', position: 3, name: 'Maximizing Your Wallet: Best Amex Gold Card Pairings 2025', item: PAGE_URL },
    ],
  };

  const articleSchema = {
    '@type': 'ReviewNewsArticle',
    mainEntityOfPage: { "@type": "WebPage", "@id": PAGE_URL },
    headline: 'Maximizing Your Wallet in 2025: Smartest Cards to Pair with Amex Gold',
    description: 'Unlock maximum value from your Amex Gold by pairing it with the right card. Our 2025 guide covers top companions to fill spending gaps & boost rewards.',
    image: [`${SITE_BASE_URL}${HERO_IMAGE_SRC}`],
    author: {
      '@type': 'Person',
      name: author.name,
      url: author.social.linkedin || SITE_BASE_URL,
      image: `${SITE_BASE_URL}${author.imageLarge || author.image}`,
      jobTitle: author.title,
      description: author.bio.substring(0, 250),
      sameAs: Object.values(author.social).filter(Boolean)
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_BASE_URL}/images/logos/travel-card-insider-logo-120.png`, // ❗ Ensure this logo (e.g., 120x60px) exists
      },
    },
    datePublished: DATE_PUBLISHED,
    dateModified: DATE_MODIFIED,
    about: itemListElements.map(el => el.item).filter(item => item.name !== amexGoldCardData.name), // Linking the reviewed companion cards
    mainEntity: itemListElements.find(el => el.item.name === amexGoldCardData.name)?.item, // Amex Gold as the main entity being reviewed in context of pairing
    speakable: {
        "@type": "SpeakableSpecification",
        "xpath": [
          "/html/head/title",
          "/html/head/meta[@name='description']/@content",
        ]
    }
  };

  return JSON.stringify(
    {
      '@context': 'https://schema.org',
      '@graph': [
        articleSchema,
        { '@type': 'ItemList', name: 'Best Amex Gold Card Pairings 2025', url: PAGE_URL, numberOfItems: itemListElements.length, itemListElement: itemListElements, mainEntityOfPage: PAGE_URL },
        breadcrumbsSchema,
      ],
    },
    null,
    2
  );
}


// ─────────────────────────────────────────────────────────────────────────────
// 🌐 COMPONENT
// ─────────────────────────────────────────────────────────────────────────────
function BestAmexGoldPairingsPage2025() {
  const [showTooltip, setShowTooltip] = useState(false);
  const triggerRef = useRef(null);
  const tooltipRef = useRef(null);
  const tooltipTimeoutIdRef = useRef(null);

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
        <title>Best Amex Gold Pairings 2025: Maximize Rewards | {SITE_NAME}</title>
        <meta
          name="description"
          content="Discover the smartest credit cards to pair with your American Express® Gold Card in 2025. Boost earnings, enhance travel perks, and optimize your wallet strategy."
        />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="keywords" content="amex gold pairing, best companion card for amex gold, american express gold, credit card strategy 2025, travel rewards, capital one venture x, chase sapphire preferred, amex blue business plus, citi strata premier, maximize membership rewards" />
        <link rel="canonical" href={PAGE_URL} />

        {/* Open Graph (for social sharing) */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content={`Maximizing Your Wallet in 2025: Smartest Cards to Pair with Amex Gold | ${SITE_NAME}`} />
        <meta property="og:description" content="Turn your Amex Gold into a rewards powerhouse! Explore top companion cards for 2025 to cover all spending and unlock elite travel benefits." />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:site_name" content={SITE_NAME} />
        <meta property="og:image" content={`${SITE_BASE_URL}${HERO_IMAGE_SRC}`} />
        <meta property="og:image:alt" content={HERO_IMAGE_ALT} />
        <meta property="og:locale" content="en_US" />
        <meta property="article:published_time" content={DATE_PUBLISHED} />
        <meta property="article:modified_time" content={DATE_MODIFIED} />
        <meta property="article:author" content={author.name} />
        <meta property="article:section" content="Credit Card Strategy" />
        <meta property="article:tag" content="Amex Gold" />
        <meta property="article:tag" content="Credit Card Pairing" />
        <meta property="article:tag" content="Travel Rewards" />
        <meta property="article:tag" content="2025" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`Best Amex Gold Card Pairings (2025) - ${SITE_NAME}`} />
        <meta name="twitter:description" content="Find the perfect partner for your Amex Gold in 2025. We break down the top cards to maximize your rewards and travel perks." />
        <meta name="twitter:image" content={`${SITE_BASE_URL}${HERO_IMAGE_SRC}`} />
        {author.social.twitter && <meta name="twitter:creator" content={`@${author.social.twitter.split('/').pop()}`} />}

        {/* Geo‑targeting & Language */}
        <meta name="geo.region" content="US" />
        <meta name="geo.placename" content="United States" />
        <meta name="language" content="en-US" />
        <meta name="distribution" content="global" />
        <link rel="alternate" hrefLang="en-us" href={PAGE_URL} />

        {/* Preloads & Preconnects */}
        <link rel="preload" href={HERO_IMAGE_SRC} as="image" />
        {/* ❗ Add preloads for critical fonts if not already globally handled */}

        {/* JSON‑LD Schema */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: generateJsonLD() }} />
      </Head>

      <main className={styles.reviewContainer}>
        <header className={styles.reviewHeader}>
          <h1>Maximizing Your Wallet in 2025: Smartest Cards to Pair with Amex Gold</h1>
          
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
                  src={author.image}
                  alt={`${author.name} headshot`} 
                  width={40} 
                  height={40} 
                  className={styles.authorImageSmall}
                  priority
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
                              src={author.imageLarge}
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
                                  {Object.entries(author.social).map(([key, value]) => value && (
                                      <a key={key} href={key === 'email' ? `mailto:${value}` : value} target="_blank" rel="noopener noreferrer" aria-label={`${author.name} on ${key.charAt(0).toUpperCase() + key.slice(1)}`} className={styles.socialIconLink}>
                                          {key === 'linkedin' && <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>}
                                          {key === 'twitter' && <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-.422.724-.665 1.56-.665 2.452 0 1.697.864 3.198 2.18 4.078-.8-.025-1.555-.247-2.227-.616v.054c0 2.37 1.683 4.333 3.91 4.78-.426.116-.874.174-1.337.174-.31 0-.611-.03-.904-.085.622 1.936 2.421 3.338 4.553 3.377-1.672 1.309-3.781 2.088-6.072 2.088-.394 0-.784-.023-1.169-.069 2.16 1.389 4.723 2.202 7.482 2.202 8.979 0 13.897-7.446 13.897-13.898 0-.21 0-.42-.015-.63.953-.689 1.778-1.56 2.433-2.525z"/></svg>}
                                          {key === 'email' && <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"/></svg>}
                                      </a>
                                  ))}
                              </div>
                          )}
                  </div>
              )}
          </div>
        </header>

        <div className={styles.heroSection}>
          <Image
            src={HERO_IMAGE_SRC}
            alt={HERO_IMAGE_ALT}
            layout="responsive"
            width={1200}
            height={600}
            objectFit="cover"
            priority
            className={styles.heroImage}
          />
        </div>
        
        <p className={styles.disclaimer}>
          <strong>Disclaimer:</strong> Card offers, terms, benefits, and annual fees are subject to change and are accurate as of {new Date(DATE_MODIFIED).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}. Please verify all details directly with the card issuer before applying. This page may contain affiliate links; if you apply through our links, we may earn a commission at no additional cost to you. This supports TravelCardInsider.
        </p>

        <article>
          <section className={styles.reviewSection}>
            <p>Welcome, savvy US travelers! The American Express® Gold Card is likely on your radar, famed for rewarding dining and flight spending. But at TravelCardInsider, we aim for phenomenal. Pairing your Amex Gold strategically in 2025 is key to unlocking maximum value from every dollar.</p>
            <p>This review dives into the Amex Gold’s 2025 strengths and pinpoints the best companion cards. We'll show you how to fill spending gaps, boost travel perks, and master your points game. Let's build your ultimate card duo!</p>
          </section>

          <section id="amex-gold-foundation" className={styles.reviewSection}>
            <h2>1. The American Express® Gold Card: Your Rewards Foundation (2025)</h2>
            <div className={styles.cardDetailSection}>
                <div className={styles.cardHeader}>
                    <div className={styles.cardImageContainer}>
                      <Image
                        src={amexGoldCardData.imageSrc}
                        alt={amexGoldCardData.imageAlt}
                        width={150} 
                        height={95}  
                        objectFit="contain"
                        loading="eager"
                      />
                    </div>
                    <div className={styles.cardTitleRating}>
                      <h3>{amexGoldCardData.name}</h3>
                      {/* No rating display for the base Amex Gold card in this context */}
                    </div>
                </div>
                <p>The Amex Gold is a strong base, especially for food and travel enthusiasts.</p>
                <h3>Core Strengths: Food and Flights</h3>
                <ul>
                  {amexGoldCardData.rewardsHighlights.map((perk, index) => (
                    <li key={`gold-perk-${index}`} dangerouslySetInnerHTML={{ __html: perk }}></li>
                  ))}
                </ul>
                <p><em><small>Refer to the <a href={amexGoldCardData.officialCardPageLink} target="_blank" rel="noopener noreferrer sponsored">official American Express Gold Card page</a> for full rewards terms and to see offers & benefits.</small></em></p>
                <p>Elsewhere, it’s 1X point. This 1X rate is where a partner card steps in. (Note: U.S. Amex Gold typically earns 1X on fuel).</p>
                
                <h3>Value Check: {amexGoldCardData.annualFeeText} Annual Fee vs. Credits</h3>
                <p>The {amexGoldCardData.annualFeeText} annual fee (see <a href={amexGoldCardData.officialCardPageLink} target="_blank" rel="noopener noreferrer sponsored">rates and fees</a>) is offset by up to $424+ in annual statement credits (enrollment may be needed):</p>
                <ul>
                    {amexGoldCardData.creditsSummary.map((credit, index) => (
                        <li key={`gold-credit-${index}`} dangerouslySetInnerHTML={{ __html: credit }}></li>
                    ))}
                </ul>
                <p className={styles.editorialNote}><em>[Suggestion: Consider inserting a screenshot here of the Amex account interface showing how credits like Uber Cash or Dining Credits are tracked/applied.]</em></p>
                <p>These credits offer value if they match your organic spending. If you force usage, their worth diminishes. The 4X on U.S. groceries doesn't apply internationally, a key point for global travelers.</p>
                <h3>Key Traveler Perks:</h3>
                <p>{amexGoldCardData.keyTravelerPerks}</p>
                 <div className={styles.cardButtonsContainer}>
                    <a
                      href={amexGoldCardData.officialCardPageLink}
                      target="_blank"
                      rel="noopener noreferrer sponsored" 
                      className={`${styles.cardButton} ${styles.applyButton}`}
                      aria-label={`Learn more or apply for ${amexGoldCardData.name}`}
                    >
                      Learn More / Apply
                    </a>
                </div>
            </div>
          </section>

          <section id="why-pair-cards" className={styles.reviewSection}>
            <h2>2. Why Pair a Card with Your Amex Gold? The Strategy</h2>
            <p>Pairing strategically covers the Amex Gold's 1X categories and enhances benefits.</p>
            <ul>
              <li><strong>Cover Spending Gaps:</strong> Gas, general retail, non-direct hotel bookings often earn just 1X. A partner can offer 2X+ or category bonuses here.</li>
              <li><strong>Enhance Travel Perks:</strong> Gain broader airport lounge access or flexible travel credits the Gold lacks.</li>
              <li><strong>Diversify/Consolidate Points:</strong> Access different transfer partners (e.g., Chase for World of Hyatt) or pool all points into Membership Rewards® with another Amex.</li>
              <li><strong>Optimize Fee Value:</strong> A no-fee card boosts earnings cost-effectively. A premium partner can offer credits that, with Gold's, outweigh total fees if benefits fit.</li>
            </ul>
            <p>The challenge: managing multiple cards. Also, ensure your international companion lacks foreign transaction fees.</p>
          </section>

          <section id="top-pairings" className={styles.reviewSection}>
            <h2>3. Top Contenders: Best Amex Gold Pairings for 2025</h2>
            <p>Here are smart pairings for your Amex Gold, presented more concisely:</p>
            
            {companionCardData.map((card, index) => (
              <div key={card.id} className={`${styles.cardDetailSection} ${index < companionCardData.length -1 ? styles.cardSeparator : ''}`}>
                <div className={styles.cardHeader}>
                    <div className={styles.cardImageContainer}>
                      <Image
                        src={card.imageSrc}
                        alt={card.imageAlt}
                        width={150} 
                        height={95}  
                        objectFit="contain"
                        loading={index > 0 ? "lazy" : "eager"}
                      />
                    </div>
                    <div className={styles.cardTitleRating}>
                      <h3>{index + 1}. {card.name}</h3>
                      {card.ratingStars && <StarRating rating={card.ratingStars} />} 
                      {card.ratingValue && <span className={styles.ratingValue}>Our Rating: {card.ratingValue.toFixed(1)}/10</span>}
                    </div>
                </div>
                <ul>
                  <li><strong>Rewards:</strong> {card.rewards}</li>
                  <li><strong>Annual Fee:</strong> {card.annualFee} (<a href={card.officialCardPageLink} target="_blank" rel="noopener noreferrer sponsored">Official Card Page</a>) No Foreign Transaction Fees (unless specified, like with BBP).</li>
                  {card.drawback && <li><strong>Important Note:</strong> {card.drawback}</li>}
                  <li><strong>Gold Synergy:</strong> {card.goldSynergy}</li>
                  {card.loungeAlert && <li className={styles.alertText}><strong>Lounge Access Alert:</strong> {card.loungeAlert}</li>}
                  <li><strong>Ideal For:</strong> {card.bestFor}</li>
                  {card.userTip && <li><strong>User Tip / Wisdom:</strong> <em>{card.userTip}</em></li>}
                </ul>
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
          </section>
          
          <section id="quick-comparison" className={styles.reviewSection}>
            <h2>Quick Comparison Table</h2>
            <div className={styles.tableContainer}>
              <table className={styles.comparisonTable}>
                <thead>
                  <tr>
                    <th scope="col">Feature</th>
                    <th scope="col">Amex Gold</th>
                    <th scope="col">Venture X</th>
                    <th scope="col">Sapphire Preferred</th>
                    <th scope="col">Blue Business Plus</th>
                    <th scope="col">Strata Premier</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonPairingTableData.map((row) => (
                    <tr key={row.feature}>
                      <th scope="row">{row.feature}</th>
                      <td>{row.amexGold}</td>
                      <td>{row.ventureX}</td>
                      <td>{row.sapphirePreferred}</td>
                      <td>{row.blueBusinessPlus}</td>
                      <td>{row.strataPremier}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className={styles.tableNote}><em>Venture X lounge benefits change significantly for some cardholders in 2025/2026. Always verify current benefits with card issuers. MR=Membership Rewards®, UR=Ultimate Rewards®, TYP=ThankYou® Points.</em></p>
          </section>

          <section id="pairing-scenarios" className={styles.reviewSection}>
            <h2>4. Crafting Your Perfect Pair: Scenarios</h2>
            <ul>
              <li><strong>Domestic MR Maximizer:</strong> Amex Gold + Amex Blue Business® Plus. (Gold for 4X U.S. dining/groceries; BBP for 2X MR on other domestic spend).</li>
              <li><strong>International Comfort Seeker:</strong> Amex Gold + Capital One Venture X. (Gold for 4X global dining/U.S. groceries; Venture X for 2X miles on other global spend, plus perks. Mind lounge access changes).</li>
              <li><strong>Foodie & Rewards Diversifier:</strong> Amex Gold + Chase Sapphire Preferred. (Gold for 4X U.S. dining/groceries; CSP for 3X online groceries, streaming, access to Hyatt).</li>
            </ul>
            <p><strong>Credits Tip:</strong> Set reminders for Gold's monthly credits. Consider gift cards from eligible merchants if direct use is hard but ensure this aligns with terms.</p>
          </section>

          <section id="decision-checklist" className={`${styles.reviewSection} ${styles.eetaSection || ''}`}>
            <h2>5. Making the Decision: Your 2025 Checklist</h2>
             <ul>
              <li><strong>Max MR Points (Domestic):</strong> Amex Gold + Blue Business® Plus.</li>
              <li><strong>Premium Travel & No FTFs:</strong> Amex Gold + Capital One Venture X (weigh lounge changes).</li>
              <li><strong>Rewards Diversification & Protections:</strong> Amex Gold + Chase Sapphire Preferred.</li>
              <li><strong>Broad Categories (Gas) & No FTFs:</strong> Amex Gold + Citi Strata Premier.</li>
            </ul>
            <h3>Before Applying:</h3>
            <ul>
              <li><strong>Analyze Spending:</strong> Where does your money really go? This is crucial.</li>
              <li><strong>Travel Goals:</strong> Preferred airlines/hotels? This guides ecosystem choice. For general planning, resources like the <a href="https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories.html/" target="_blank" rel="noopener noreferrer">U.S. Department of State travel advisories</a> or <a href="https://www.lonelyplanet.com/plan-your-trip" target="_blank" rel="noopener noreferrer">Lonely Planet</a> can be helpful.</li>
              <li><strong>Fee Tolerance:</strong> Can you offset combined fees with organic credit use and rewards earned?</li>
              <li><strong>Application Rules:</strong> Note issuer-specific rules like Chase’s 5/24, Amex’s once-per-lifetime welcome offer language, etc.</li>
            </ul>
            <p>Re-evaluate Annually: Card benefits and your habits change. Stay sharp.</p>
          </section>

          <section id="final-thoughts" className={styles.reviewSection}>
            <h2>Conclusion: Your Best Wallet Awaits</h2>
            <p>The Amex Gold is a strong earner for dining and U.S. groceries. But strategic pairing unlocks its full potential. The "best" companion is personal—align it with your spending, travel goals, and fee comfort. Whether consolidating Membership Rewards with the Blue Business® Plus, diversifying with Chase Sapphire Preferred or Capital One Venture X, or covering gas spend with the Citi Strata Premier, an informed choice is key. Craft your card duo wisely for a more rewarding 2025.</p>
          </section>

        </article>
      </main>
    </>
  );
}

export default BestAmexGoldPairingsPage2025;