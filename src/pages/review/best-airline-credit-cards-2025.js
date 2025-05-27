// File: pages/reviews/BestAirlineCardsPage2025.js – FINAL COMPLETE VERSION
// ❗ Replace image src paths (in airlineCardData and constants) with your optimised, WebP‑or‑AVIF images.
// The paths below are placeholders. Card images should ideally be ~150x95px or similar aspect ratio.

import React, { useState, useRef, useEffect, useCallback } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/NoFTFCardsReview.module.css'; // Ensure this path is correct
import StarRating from '../../components/StarRating'; // Ensure this component exists and path is correct

// ─────────────────────────────────────────────────────────────────────────────
// 🔗 CONFIG
// ─────────────────────────────────────────────────────────────────────────────
const SITE_BASE_URL = 'https://www.travelcardinsider.com'; // As per your hotel file
const PAGE_PATH = '/reviews/best-airline-credit-cards-2025';
const PAGE_URL = `${SITE_BASE_URL}${PAGE_PATH}`;
const SITE_NAME = 'Travel Card Insider'; // As per your hotel file
const HERO_IMAGE_SRC = '/placeholder-airline-hero-sky-view.webp'; // ❗ Replace with your optimised hero image
const HERO_IMAGE_ALT = 'Airplane window view of a wing flying above the clouds – symbolizing airline travel rewards in 2025';
const DATE_PUBLISHED = '2025-05-26'; // Assuming today as publish date
const DATE_MODIFIED = '2025-05-26'; // ✏️ update whenever you edit copy

// ─────────────────────────────────────────────────────────────────────────────
// 👤 AUTHOR INFO (Reused from your hotel file)
// ─────────────────────────────────────────────────────────────────────────────
const author = {
  name: 'Dilan Madushanka',
  title: 'Lead Travel Card Analyst',
  image: '/WhatsApp Image 2025-05-12 at 4.09.58 PM.jpeg', // ❗ Your 40x40px web‑optimised headshot
  imageLarge: '/WhatsApp Image 2025-05-12 at 4.09.58 PM.jpeg', // ❗ Your 60x60px for tooltip
  bio: 'Seasoned travel‑card analyst helping readers unlock elite travel perks & maximise airline rewards.', // Slightly adapted bio
  expertise: [
    'Airline Rewards Strategy',
    'Hotel Points Optimisation', // Adapted from original
    'Travel Hacking',
    'Credit Card Analytics',
  ],
  social: {
    linkedin: 'https://www.linkedin.com/in/dilan-madushanka-b65293365',
    twitter: 'https://x.com/team_dilan',
    email: 'team@travelcardinsider.com',
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// ✈️ AIRLINE CARD DATA
// ❗ Review and update placeholder ratings (ratingValue, ratingStars) if you decide to use a rating system.
// ─────────────────────────────────────────────────────────────────────────────
const airlineCardData = [
  {
    id: 'amexPlatinum',
    name: 'The Platinum Card® from American Express',
    imageSrc: '/NUS000000237_480x304_straight_withname.avif', // ❗ Replace
    imageAlt: 'The Platinum Card from American Express',
    ratingValue: 9.4, // ✏️ Add rating
    ratingStars: 5.0, // ✏️ Add rating
    annualFee: '$695',
    officialCardPageLink: 'https://www.americanexpress.com/us/credit-cards/card/platinum/',
    loungeAccess: "Amex Global Lounge Collection: Centurion Lounges, Priority Pass Select (enrollment required, typically no restaurant credits), Delta Sky Clubs (when flying Delta, with visit limits from Feb 1, 2025, unless you hit $75k annual spend), and more. Guest Policy: Centurion guests typically $50/adult. Priority Pass guests usually incur a fee. Delta Sky Club guests are $50/person.",
    freeCheckedBags: "Indirectly, via the up to $200 annual airline fee credit. You pick one airline, and the credit covers incidentals like bag fees.",
    flightRewards: "5X points on flights booked directly with airlines or Amex Travel (up to $500k/year) and on prepaid hotels via Amex Travel. Points transfer to many partners (Delta, Air Canada, BA, etc.).",
    keyCredits: "Up to $200 Uber Cash, $200 hotel credit (specific bookings), $240 digital entertainment, $100 Saks, CLEAR Plus credit, Global Entry/TSA PreCheck credit.",
    userTake: "My family flies a couple of times a year, and that $200 Amex credit usually covers bag fees for one or two of us on at least one round trip. It's not 'free bags' exactly, but it helps!",
    vibe2025: "Lounge crowding, especially Centurion, is a real pain point. The \"coupon book\" of credits is fantastic if you use them all, but many find it hard to maximize. The Delta Sky Club visit cap is a new factor to consider.",
    applyLink: 'https://www.americanexpress.com/us/credit-cards/card/platinum/', // Official link
    ratesFeesLink: 'https://www.americanexpress.com/us/credit-cards/card-application/apply/prospect/terms/platinum-card/25330-10-0#FeeTable', // Often on the same page or linked from it
    learnMoreLink: '/cards/amex-platinum', // Internal link
  },
  {
    id: 'chaseSapphireReserve',
    name: 'Chase Sapphire Reserve®',
    imageSrc: '/sapphire_reserve_card.png', // ❗ Replace
    imageAlt: 'Chase Sapphire Reserve Card',
    ratingValue: 9.2, // ✏️ Add rating
    ratingStars: 4.6, // ✏️ Add rating
    annualFee: '$550',
    loungeAccess: "Priority Pass Select (cardholder + 2 guests free!) and access to the growing Chase Sapphire Lounge network.",
    freeCheckedBags: "No direct perk, but the super-flexible $300 annual travel credit automatically reimburses travel purchases, including bag fees.",
    flightRewards: "5X points on flights and 10X on hotels/cars through Chase Travel (after the $300 credit is used). 3X on other travel/dining. Points are worth 50% more via Chase Travel or transfer 1:1 to partners (United, Southwest, Hyatt, etc.).",
    keyCredits: "The $300 travel credit is king. Global Entry/TSA PreCheck/NEXUS credit.",
    userTake: "I love how easy the Sapphire Reserve's $300 credit is. Last year, it covered checked bags, an Uber, and part of a hotel stay without me lifting a finger.",
    vibe2025: "Justifying the fee often comes down to how easily you use that $300 credit. Priority Pass lounges can still get crowded. The choice of redeeming via the portal or transferring points is a fun strategy game.",
    applyLink: 'https://creditcards.chase.com/rewards-credit-cards/sapphire/reserve', // Official link
    ratesFeesLink: 'https://sites.chase.com/services/creatives/pricingandterms.html/content/dam/pricingandterms/LGC56007.html', // Typically found on product page
    learnMoreLink: '/cards/chase-sapphire-reserve',
  },
  {
    id: 'capitalOneVentureX',
    name: 'Capital One Venture X Rewards Credit Card',
    imageSrc: '/venturex-cg-static-card-1000x630-2.avif', // ❗ Replace
    imageAlt: 'Capital One Venture X Rewards Credit Card',
    ratingValue: 9.0, // ✏️ Add rating
    ratingStars: 4.5, // ✏️ Add rating
    annualFee: '$395',
    loungeAccess: "Capital One Lounges (DFW, DEN, IAD – and growing) and Priority Pass Select. Guest Policy: Capital One Lounges: cardholder + 2 guests free. Priority Pass: cardholder + unlimited guests free (subject to lounge capacity)! Authorized users (free to add!) also get their own full lounge access.",
    freeCheckedBags: "Via the $300 annual travel credit for bookings through Capital One Travel.",
    flightRewards: "Simple 2X miles on everything. 5X on flights and 10X on hotels/cars via Capital One Travel. Miles transfer to 15+ partners (BA, Air Canada, Flying Blue, etc.).",
    keyCredits: "$300 annual travel credit (Capital One Travel), 10,000 anniversary bonus miles ($100 value), Global Entry/TSA PreCheck credit.",
    userTake: "My partner and I each got a Venture X. Adding each other as free authorized users, both getting Priority Pass with unlimited guests, is incredible for family trips. The $300 travel credit and 10,000 anniversary miles make the fee tiny.",
    vibe2025: "Hugely positive. The effective annual fee can be tiny ($395 - $300 credit - $100 anniversary miles = effectively -$5!). The authorized user lounge benefit is unmatched for families/groups.",
    applyLink: 'https://www.capitalone.com/credit-cards/venture-x/', // Official link
    ratesFeesLink: 'https://www.capitalone.com/credit-cards/venture-x/', // Typically found on product page
    learnMoreLink: '/cards/capital-one-venture-x',
  },
  {
    id: 'deltaSkyMilesReserve',
    name: 'Delta SkyMiles® Reserve American Express Card',
    imageSrc: '/NUS000000270_480x304_straight_withname.avif', // ❗ Replace
    imageAlt: 'Delta SkyMiles Reserve American Express Card',
    ratingValue: 8.8, // ✏️ Add rating
    ratingStars: 4.4, // ✏️ Add rating
    annualFee: '$650',
    officialCardPageLink: 'https://www.americanexpress.com/us/credit-cards/card/delta-skymiles-reserve-american-express-card/',
    loungeAccess: "Delta Sky Club (15 visits/year from Feb 1, 2025, or unlimited with $75k spend; 4 guest passes/year). Centurion Lounge access (when flying Delta).",
    freeCheckedBags: "First bag free for you and up to 8 companions on Delta flights.",
    flightRewardsAndPerks: "Annual round-trip companion certificate (First/Comfort+/Main), $2,500 MQD Headstart + MQD Boost (earn $1 MQD per $10 spent), 15% off award flights (TakeOff 15).",
    userTake: "I fly Delta for work almost exclusively. The Reserve's Sky Club access is key, though the 15-visit limit is a new wrinkle. The companion pass alone often saves more than the annual fee for our anniversary trip.",
    applyLink: 'https://www.americanexpress.com/us/credit-cards/card/delta-skymiles-reserve-american-express-card/', // Official Link
    ratesFeesLink: 'https://www.americanexpress.com/us/credit-cards/card-application/apply/prospect/terms/delta-skymiles-reserve-american-express-card/25330-10-0#FeeTable', // Check Amex site
    learnMoreLink: '/cards/delta-skymiles-reserve',
  },
  {
    id: 'unitedClubInfinite',
    name: 'United Club℠ Infinite Card',
    imageSrc: '/united_club_infinite_card.png', // ❗ Replace
    imageAlt: 'United Club Infinite Card',
    ratingValue: 8.9, // ✏️ Add rating
    ratingStars: 4.5, // ✏️ Add rating
    annualFee: '$525', // User text mentions "official United site often shows $525 - confirm current fee"
    loungeAccess: "United Club membership for you and eligible guests.",
    freeCheckedBags: "First and second checked bags free for you and one companion on United flights.",
    flightRewardsAndPerks: "Premier Access (priority services), PQP earning towards status (1 PQP per $15 spent), award discounts.",
    userTake: "Flying United out of a hub, the Club Infinite is a lifesaver. Lounge access, two free bags each for me and my wife – it adds up. Sometimes I use points with 'Pay Yourself Back' to cover part of the fee.",
    applyLink: 'https://creditcards.chase.com/travel-credit-cards/united/club-infinite', // Usually issued by Chase for United
    ratesFeesLink: 'https://sites.chase.com/services/creatives/pricingandterms.html/content/dam/pricingandterms/LGC57973.html',
    learnMoreLink: '/cards/united-club-infinite',
  },
  {
    id: 'citiAAdvantageExecutive',
    name: 'Citi® / AAdvantage® Executive World Elite Mastercard®',
    imageSrc: '/CardArt-8.webp', // ❗ Replace
    imageAlt: 'Citi AAdvantage Executive World Elite Mastercard',
    ratingValue: 8.6, // ✏️ Add rating
    ratingStars: 4.3, // ✏️ Add rating
    annualFee: '$595',
    loungeAccess: "Admirals Club membership for you and immediate family or up to two guests. Authorized users also get access (for a fee).",
    freeCheckedBags: "First checked bag free for you and up to 8 companions on domestic AA flights.",
    flightRewardsAndPerks: "Loyalty Point bonuses for status, enhanced airport experience (priority boarding, etc.).",
    userTake: "I fly AA a few times a year. Admirals Club access pretty much covers the fee if I value each visit. Plus, the Loyalty Points from card spend help me hit Gold status.",
    applyLink: 'https://creditcards.aa.com/credit-cards/citi-executive-card-american-airlines-direct/', // Official Citi link
    ratesFeesLink: 'https://creditcards.aa.com/credit-cards/citi-executive-card-american-airlines-direct/#pricing',
    learnMoreLink: '/cards/citi-aadvantage-executive',
  },
  {
    id: 'southwestPriority',
    name: 'Southwest Rapid Rewards® Priority Credit Card',
    imageSrc: '/banner_card_art_priority.png', // ❗ Replace
    imageAlt: 'Southwest Rapid Rewards Priority Credit Card',
    ratingValue: 8.0, // ✏️ Add rating
    ratingStars: 4.0, // ✏️ Add rating
    annualFee: '$149',
    loungeAccess: "None (Southwest doesn't have lounges).",
    freeCheckedBags: "Crucial 2025 Update: Southwest is changing its \"Bags Fly Free.\" From May 28, 2025, for new bookings, it's not universal. Cardholders like those with the Priority Card will get a credit for one checked bag, essentially keeping it free.",
    flightRewardsAndPerks: "$75 Southwest annual travel credit, 7,500 anniversary bonus points, four Upgraded Boardings/year, points count towards the coveted Companion Pass.",
    userTake: "With Southwest's new bag policy, our Priority card is suddenly even more vital. That free first bag per person will save us a ton, and the $75 credit makes the fee easy to swallow. We're always aiming for that Companion Pass!",
    applyLink: 'https://creditcards.chase.com/travel-credit-cards/southwest/priority', // Usually issued by Chase for Southwest
    ratesFeesLink: 'https://creditcards.chase.com/southwest/priority-credit-card',
    learnMoreLink: '/cards/southwest-priority',
  }
];

const comparisonAirlineData = [
  { name: 'Amex Platinum', fee: '$695', keyLounge: 'Amex Global Collection (Centurion etc.)', bagPerk: '$200 Airline Fee Credit', standoutCredit: 'Multiple lifestyle/travel credits' },
  { name: 'Chase Sapphire Reserve', fee: '$550', keyLounge: 'Priority Pass Select, Sapphire Lounges', bagPerk: '$300 Annual Travel Credit', standoutCredit: '$300 flexible Travel Credit' },
  { name: 'Capital One Venture X', fee: '$395', keyLounge: 'Capital One Lounges, Priority Pass Select', bagPerk: '$300 Annual Travel Credit (portal)', standoutCredit: '$300 Travel Credit + 10k Anniv. Miles' },
];

const coBrandedComparisonAirlineData = [
    { cardName: 'Delta SkyMiles Reserve', airline: 'Delta', annualFee: '$650', primaryLounge: 'Delta Sky Club (limit*)', freeBag: '1st Free', keyLoyaltyPerk: 'Companion Cert, MQD Boost' },
    { cardName: 'United Club Infinite', airline: 'United', annualFee: '$525-$695', primaryLounge: 'United Club', freeBag: '1st & 2nd Free', keyLoyaltyPerk: 'Premier Access, PQPs' }, // Fee range from user text
    { cardName: 'Citi AAdvantage Executive', airline: 'American', annualFee: '$595', primaryLounge: 'Admirals Club', freeBag: '1st Free', keyLoyaltyPerk: 'Loyalty Point Bonuses' },
    { cardName: 'Southwest Priority', airline: 'Southwest', annualFee: '$149', primaryLounge: 'N/A', freeBag: '1st Free (via credit)', keyLoyaltyPerk: '$75 Credit, Anniv. Pts' },
];


// ─────────────────────────────────────────────────────────────────────────────
// 🧠 HELPERS
// ─────────────────────────────────────────────────────────────────────────────
function generateJsonLD() {
  const itemListElements = airlineCardData.map((card, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    item: {
      '@type': 'Product', // Could also be 'Service' if focused on the service of having the card
      name: card.name,
      url: `${SITE_BASE_URL}${card.learnMoreLink}`,
      image: `${SITE_BASE_URL}${card.imageSrc}`,
      description: card.loungeAccess || card.flightRewardsAndPerks || card.flightRewards, // Pick a prominent feature
      brand: {
        '@type': 'Brand',
        name:
          card.name.includes('American Express') || card.name.includes('Amex') ? 'American Express' :
          card.name.includes('Chase') ? 'Chase' :
          card.name.includes('Capital One') ? 'Capital One' :
          card.name.includes('Citi') ? 'Citi' :
          card.name.includes('Delta') ? 'Delta Air Lines' : // Airline is the brand here
          card.name.includes('United') ? 'United Airlines' :
          card.name.includes('Southwest') ? 'Southwest Airlines' :
          'Various Issuers',
      },
      ...(card.name.includes('American Express') && { manufacturer: { '@type': 'Organization', name: 'American Express' } }),
      ...(card.name.includes('Chase') && { manufacturer: { '@type': 'Organization', name: 'Chase Bank' } }),
      ...(card.name.includes('Capital One') && { manufacturer: { '@type': 'Organization', name: 'Capital One' } }),
      ...(card.name.includes('Citi') && { manufacturer: { '@type': 'Organization', name: 'Citibank' } }),
      offers: {
        '@type': 'Offer',
        priceCurrency: 'USD',
        price: card.annualFee.replace('$', '').replace('-',''), // Basic cleaning for price
      },
      // Add aggregateRating if you implement a rating system for these cards
      ...(card.ratingValue > 0 && {
        aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: card.ratingValue,
            bestRating: '10', // Assuming a 1-10 scale if you add ratings
            ratingCount: 1, // Indicates "Our Rating" or a single review source
        },
      })
    },
  }));

  const breadcrumbsSchema = {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_BASE_URL, },
      { '@type': 'ListItem', position: 2, name: 'Reviews', item: `${SITE_BASE_URL}/reviews`, },
      { '@type': 'ListItem', position: 3, name: 'Best Airline Credit Cards 2025', item: PAGE_URL, },
    ],
  };

  const articleSchema = {
    '@type': 'Article',
    mainEntityOfPage: { "@type": "WebPage", "@id": PAGE_URL },
    headline: 'Best Airline Credit Cards of 2025: Lounge Access, Free Bags & Flight Rewards', // From user text
    description: 'Discover the best airline credit cards for US travelers in 2025. Compare lounge access, free checked bags, flight rewards, and crucial perks to maximize your travel value.', // Crafted meta description
    image: [`${SITE_BASE_URL}${HERO_IMAGE_SRC}`],
    author: {
      '@type': 'Person',
      name: author.name,
      url: author.social.linkedin,
      image: `${SITE_BASE_URL}${author.imageLarge || author.image}`,
      jobTitle: author.title,
      description: author.bio.substring(0, 200),
      sameAs: Object.values(author.social).filter(Boolean)
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_BASE_URL}/images/logo-120.png`, // ❗ Ensure this logo exists
      },
    },
    datePublished: DATE_PUBLISHED,
    dateModified: DATE_MODIFIED,
  };

  return JSON.stringify(
    {
      '@context': 'https://schema.org',
      '@graph': [
        articleSchema,
        { '@type': 'ItemList', name: 'Top Airline Credit Cards 2025', url: PAGE_URL, numberOfItems: airlineCardData.length, itemListElement: itemListElements, mainEntityOfPage: PAGE_URL },
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
function BestAirlineCardsPage2025() {
  const [showTooltip, setShowTooltip] = useState(false);
  const triggerRef = useRef(null);
  const tooltipRef = useRef(null);
  const tooltipTimeoutIdRef = useRef(null);

  const handleMouseEnterTriggerOrTooltip = useCallback(() => {
    if (tooltipTimeoutIdRef.current) {
      clearTimeout(tooltipTimeoutIdRef.current);
    }
    setShowTooltip(true);
  }, []);

  const handleMouseLeaveTriggerOrTooltip = useCallback(() => {
    tooltipTimeoutIdRef.current = setTimeout(() => {
      let isStillHovering = false;
      if (triggerRef.current && triggerRef.current.matches(':hover')) isStillHovering = true;
      if (tooltipRef.current && tooltipRef.current.matches(':hover')) isStillHovering = true;
      
      if (!isStillHovering) {
          setShowTooltip(false);
      }
    }, 150);
  }, []);
  
  useEffect(() => {
    const currentTimeoutId = tooltipTimeoutIdRef.current;
    return () => {
      if (currentTimeoutId) {
        clearTimeout(currentTimeoutId);
      }
    };
  }, []);

  useEffect(() => {
    function handleClickOutside(event) {
      if (showTooltip &&
          triggerRef.current && !triggerRef.current.contains(event.target) &&
          tooltipRef.current && !tooltipRef.current.contains(event.target)) {
        setShowTooltip(false);
      }
    }
    if (showTooltip) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showTooltip]);


  return (
    <>
      <Head>
        {/* Core */}
        <title>Best Airline Credit Cards 2025: Perks & Rewards | {SITE_NAME}</title>
        <meta
          name="description"
          content="Discover the best airline credit cards for US travelers in 2025. Compare lounge access, free checked bags, flight rewards, and crucial perks to maximize travel value."
        />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="keywords" content="best airline credit cards 2025, airline rewards, lounge access, free checked bags, flight rewards, travel credit cards, Amex Platinum, Chase Sapphire Reserve, Capital One Venture X, Delta SkyMiles, United Club, AAdvantage, Southwest Rapid Rewards" />
        <link rel="canonical" href={PAGE_URL} />

        {/* Open Graph */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Best Airline Credit Cards 2025: Lounge Access, Free Bags & Flight Rewards | Travel Card Insider" />
        <meta property="og:description" content="Our expert picks for the top US airline credit cards in 2025. Unlock elite perks, maximise rewards, and travel smarter." />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:site_name" content={SITE_NAME} />
        <meta property="og:image" content={`${SITE_BASE_URL}${HERO_IMAGE_SRC}`} />
        <meta property="og:locale" content="en_US" />
        <meta property="article:published_time" content={DATE_PUBLISHED} />
        <meta property="article:modified_time" content={DATE_MODIFIED} />
        <meta property="article:author" content={author.name} />
        {/* ✏️ Add article:tag for relevant keywords */}
        <meta property="article:tag" content="Airline Credit Cards" />
        <meta property="article:tag" content="Travel Rewards" />
        <meta property="article:tag" content="2025" />


        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Best Airline Credit Cards 2025 – Which Gives Max Value?" />
        <meta name="twitter:description" content="Lounge access, free bags, bonus miles! We break down 2025's top airline cards for US travelers." />
        <meta name="twitter:image" content={`${SITE_BASE_URL}${HERO_IMAGE_SRC}`} />
        {author.social.twitter && <meta name="twitter:creator" content={`@${author.social.twitter.split('/').pop()}`} />}


        {/* Geo‑targeting & Language */}
        <meta name="geo.region" content="US" />
        <meta name="geo.placename" content="United States" />
        <meta name="language" content="en-US" />
        <meta name="distribution" content="US" /> {/* Or global if applicable */}
        <link rel="alternate" hrefLang="en-us" href={PAGE_URL} />


        {/* Preloads - ❗ Update font paths if different from hotel page */}
        <link rel="preload" href={HERO_IMAGE_SRC} as="image" />
        <link rel="preload" href="/fonts/roboto-condensed-v25-latin-regular.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        {/* Add preloads for other critical fonts used above the fold if any */}

        {/* JSON‑LD */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: generateJsonLD() }} />
      </Head>

      <main className={styles.reviewContainer}>
        <header className={styles.reviewHeader}>
          <h1>Best Airline Credit Cards of 2025: Lounge Access, Free Bags & Flight Rewards</h1>
          
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
                         {/* Add fullBioLink to author object if you have a dedicated author page */}
                         {author.social && ( 
                              <div className={styles.authorTooltipSocials}>
                                  {/* Repeating SVG paths for brevity in this example. Consider making SVGs components. */}
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
            width={900} // Example intrinsic width, adjust
            height={450} // Example intrinsic height, adjust
            objectFit="cover"
            priority // Hero image should be priority
            className={styles.heroImage}
          />
        </div>
        
        {/* You can add a disclaimer similar to the hotel page if needed */}
        <p className={styles.disclaimer}>
          Disclaimer: Card offers, terms, and benefits are subject to change and are accurate as of {DATE_MODIFIED}. Please verify all details directly with the card issuer before applying. This page may contain affiliate links which help support our work.
        </p>

        <article>
          <section className={styles.reviewSection}>
            <p>The dream of travel is alive and well, but for US travelers in 2025, the landscape of rewards, perks, and loyalty programs is more like a shifting sand dune than solid ground. Dynamic award pricing, fierce competition for those coveted premium seats, and evolving expectations for comfort mean your choice of airline credit card isn't just important—it's crucial. We're all looking for real, sustained value, not just flashy sign-up bonuses that fade away.</p>
            <p>Card issuers are constantly trying to outdo each other, which can be a double-edged sword. New perks are exciting, but they can also turn your card's benefits guide into a "coupon book" nightmare – lots of offers, but many are niche or a pain to actually use. Even standbys like lounge access can get watered down by overcrowding. And as we've seen with recent shifts, like Southwest Airlines tweaking its long-standing free bag policy (see their official information on <a href="https://www.southwest.com/help/baggage" target="_blank" rel="noopener noreferrer sponsored">baggage policies</a> and <a href="https://swamedia.com/" target="_blank" rel="noopener noreferrer sponsored">news updates</a>), nothing is set in stone. This means we need to be smarter than ever about what's in our wallets.</p>
          </section>

          <section className={styles.reviewSection}>
            <h2>The Big Three: What Really Matters in an Airline Card?</h2>
            <p>For most US travelers, three perks consistently rise to the top:</p>
            <ul>
              <li><strong>Airport Lounge Access:</strong> An oasis in the chaos of the terminal. It's a place to relax, work, grab a bite, and use Wi-Fi, turning a dreaded layover into a welcome break.</li>
              <li><strong>Free Checked Bags:</strong> With airlines increasingly charging for luggage, this can save you serious cash, especially for families or longer trips.</li>
              <li><strong>Flight Rewards:</strong> The core promise – earning points or miles for free or upgraded flights. Getting the most out of this is often the name of the game.</li>
            </ul>
            <p>These pillars can dramatically upgrade your travel and save you money, making your card choice a key financial and lifestyle decision. For 2025, with ongoing tweaks to lounge rules, baggage fees, and loyalty program values, an up-to-date look is essential.</p>
          </section>

          <section className={styles.reviewSection}>
            <h2>The Titans of Travel: Best Premium Cards for All-Around Airline Perks</h2>
            <p>If you fly various airlines and want top-tier perks with flexibility, premium travel rewards cards are your champions. They offer points transferable to multiple partners and a suite of benefits to upgrade your entire journey. The trick is ensuring the annual fee is justified by the real-world value you get.</p>
            
            {airlineCardData.filter(card => ['amexPlatinum', 'chaseSapphireReserve', 'capitalOneVentureX'].includes(card.id)).map((card, index) => (
              <div key={card.id} className={`${styles.cardDetailSection} ${styles.cardSeparator}`}>
                <div className={styles.cardHeader}>
                    <div className={styles.cardImageContainer}>
                      <Image
                        src={card.imageSrc} // ❗ Replace
                        alt={card.imageAlt}
                        width={150} 
                        height={95}  
                        objectFit="contain"
                        loading={index > 1 ? "lazy" : undefined} // Lazy load later images
                      />
                    </div>
                    <div className={styles.cardTitleRating}>
                      <h3>{index + 1}. {card.name}</h3>
                      {/* ✏️ Add StarRating component here if you implement ratings */}
                      {/* Example: card.ratingStars > 0 && <StarRating rating={card.ratingStars} /> */}
                      {/* card.ratingValue > 0 && <span className={styles.ratingValue}>Our Rating: {card.ratingValue.toFixed(1)}/10</span> */}
                    </div>
                </div>
                <ul>
                  <li><strong>Annual Fee:</strong> {card.annualFee} {(card.id === 'amexPlatinum' || card.id === 'deltaSkyMilesReserve') && <a href={card.officialCardPageLink} target="_blank" rel="noopener noreferrer sponsored">(Official Card Page)</a>}</li>
                  <li><strong>Lounge Access:</strong> {card.loungeAccess}</li>
                  <li><strong>Free Checked Bags:</strong> {card.freeCheckedBags}</li>
                  <li><strong>Flight Rewards:</strong> {card.flightRewards || card.flightRewardsAndPerks}</li>
                  {card.keyCredits && <li><strong>Key Credits:</strong> {card.keyCredits}</li>}
                  {card.userTake && <li><strong>User Take:</strong> "{card.userTake}"</li>}
                  {card.vibe2025 && <li><strong>2025 Vibe:</strong> {card.vibe2025}</li>}
                </ul>
                <div className={styles.cardButtonsContainer}>
                    <a
                      href={card.applyLink}
                      target="_blank"
                      rel="noopener noreferrer sponsored" 
                      className={`${styles.cardButton} ${styles.applyButton}`}
                    >
                      Apply Now
                    </a>
                     <a
                      href={card.ratesFeesLink}
                      target="_blank"
                      rel="noopener noreferrer sponsored" 
                      className={`${styles.cardButton} ${styles.secondaryButton}`}
                    >
                      Rates & Fees
                    </a>
                     <Link href={card.learnMoreLink} legacyBehavior>
                       <a className={`${styles.cardButton} ${styles.secondaryButton}`}>
                         Learn More
                       </a>
                    </Link>
                </div>
              </div>
            ))}
          </section>

          <section className={styles.reviewSection}>
            <h2>Premium Card Quick Look</h2>
            <div className={styles.tableContainer}>
              <table className={styles.comparisonTable}>
                  <thead>
                    <tr>
                      <th scope="col">Feature</th>
                      <th scope="col">Amex Platinum</th>
                      <th scope="col">Chase Sapphire Reserve</th>
                      <th scope="col">Capital One Venture X</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td>Annual Fee</td><td>$695</td><td>$550</td><td>$395</td></tr>
                    <tr><td>Key Lounge</td><td>Amex Global Collection (Centurion etc.)</td><td>Priority Pass Select, Sapphire Lounges</td><td>Capital One Lounges, Priority Pass Select</td></tr>
                    <tr><td>Free Bag Perk</td><td>$200 Airline Fee Credit</td><td>$300 Annual Travel Credit</td><td>$300 Annual Travel Credit (portal)</td></tr>
                    <tr><td>Standout Credit</td><td>Multiple lifestyle/travel credits</td><td>$300 flexible Travel Credit</td><td>$300 Travel Credit + 10k Anniv. Miles</td></tr>
                </tbody>
              </table>
            </div>
          </section>
          
          <section className={styles.reviewSection}>
            <h2>Loyalty Pays: Top Co-Branded Cards for Dedicated Flyers</h2>
            <p>If you stick with one airline, a co-branded card can unlock serious perks tailored to that carrier.</p>

            {airlineCardData.filter(card => ['deltaSkyMilesReserve', 'unitedClubInfinite', 'citiAAdvantageExecutive', 'southwestPriority'].includes(card.id)).map((card, index) => (
              <div key={card.id} className={`${styles.cardDetailSection} ${styles.cardSeparator}`}>
                 <div className={styles.cardHeader}>
                    <div className={styles.cardImageContainer}>
                      <Image
                        src={card.imageSrc} // ❗ Replace
                        alt={card.imageAlt}
                        width={150} 
                        height={95}  
                        objectFit="contain"
                        loading="lazy"
                      />
                    </div>
                    <div className={styles.cardTitleRating}>
                      <h3>For the {
                        card.id === 'deltaSkyMilesReserve' ? 'Delta Devotee' :
                        card.id === 'unitedClubInfinite' ? 'United Enthusiast' :
                        card.id === 'citiAAdvantageExecutive' ? 'American Airlines Advocate' :
                        card.id === 'southwestPriority' ? 'Southwest Aficionado' : ''
                        }: {card.name}
                      </h3>
                       {/* ✏️ Add StarRating component here if you implement ratings */}
                    </div>
                </div>
                <ul>
                  <li><strong>Annual Fee:</strong> {card.annualFee} {card.id === 'deltaSkyMilesReserve' && <a href={card.officialCardPageLink} target="_blank" rel="noopener noreferrer sponsored">(Official Card Page)</a>}
                    {card.id === 'unitedClubInfinite' && " (Note: Provided text mentioned $695, but official United site often shows $525 - confirm current fee via official links.)"}
                  </li>
                  <li><strong>Lounge Access:</strong> {card.loungeAccess}</li>
                  <li><strong>Free Checked Bags:</strong> {card.freeCheckedBags}</li>
                  <li><strong>Flight Rewards & Perks:</strong> {card.flightRewardsAndPerks || card.flightRewards}</li>
                  {card.userTake && <li><strong>User Take:</strong> "{card.userTake}"</li>}
                </ul>
                 <div className={styles.cardButtonsContainer}>
                    <a
                      href={card.applyLink}
                      target="_blank"
                      rel="noopener noreferrer sponsored" 
                      className={`${styles.cardButton} ${styles.applyButton}`}
                    >
                      Apply Now
                    </a>
                     <a
                      href={card.ratesFeesLink}
                      target="_blank"
                      rel="noopener noreferrer sponsored" 
                      className={`${styles.cardButton} ${styles.secondaryButton}`}
                    >
                      Rates & Fees
                    </a>
                     <Link href={card.learnMoreLink} legacyBehavior>
                       <a className={`${styles.cardButton} ${styles.secondaryButton}`}>
                         Learn More
                       </a>
                    </Link>
                </div>
              </div>
            ))}
          </section>

          <section className={styles.reviewSection}>
            <h2>Co-Branded Card Quick Look</h2>
            <div className={styles.tableContainer}>
              <table className={styles.comparisonTable}>
                  <thead>
                    <tr>
                      <th scope="col">Card Name</th>
                      <th scope="col">Airline</th>
                      <th scope="col">Annual Fee</th>
                      <th scope="col">Primary Lounge</th>
                      <th scope="col">Free Bag (Cardholder)</th>
                      <th scope="col">Key Loyalty Perk</th>
                    </tr>
                </thead>
                <tbody>
                    {coBrandedComparisonAirlineData.map(row => (
                    <tr key={row.cardName}>
                        <td>{row.cardName}</td>
                        <td>{row.airline}</td>
                        <td>{row.annualFee}</td>
                        <td>{row.primaryLounge}</td>
                        <td>{row.freeBag}</td>
                        <td>{row.keyLoyaltyPerk}</td>
                    </tr>
                    ))}
                </tbody>
              </table>
            </div>
            <p className={styles.tableNote}>*Unlimited with $75k spend for Delta SkyMiles Reserve Sky Club access.</p>
          </section>

          <section className={styles.reviewSection}>
            <h2>Decoding the Perks: What's Really Behind the Promises?</h2>
            <h3>Lounge Access: Sanctuary or Squeeze?</h3>
            <p>Overcrowding is the big story. Priority Pass offers wide access but variable quality. Centurion Lounges are premium but often packed, with recent service tweaks. Airline-specific clubs (Sky Club, United Club, Admirals Club) offer benefits for loyalists but face their own capacity issues and access rule changes (like Delta's new visit limits detailed on the <a href="https://www.delta.com/us/en/delta-sky-club/access" target="_blank" rel="noopener noreferrer sponsored">Delta Air Lines Official Sky Club Access Page</a>). Capital One Lounges are a bright spot – high quality and, so far, better crowd management. The Venture X's authorized user lounge benefit is a standout.</p>
            <h3>Free Checked Bags: Real Savings?</h3>
            <p>Absolutely, especially for families. Co-branded cards are usually the most direct route. Premium cards can cover fees via travel credits. Southwest's 2025 bag policy change makes their co-branded cards almost essential for bag-checkers.</p>
            <h3>Flight Rewards: Maximizing Your Miles</h3>
            <p>It's not just about earning; it's about smart redeeming. Flexible points (Amex Membership Rewards, Chase Ultimate Rewards, Capital One Miles) are gold because they transfer to many airlines, protecting you from any single program's devaluation and opening up sweet spot redemptions (like international business class). Be aware of changing transfer partner values or partnerships. For the latest on such changes, it's best to consult the official newsrooms or program updates from the specific airlines you are interested in, such as those from <a href="https://news.aa.com/" target="_blank" rel="noopener noreferrer">American Airlines</a>, <a href="https://news.delta.com/" target="_blank" rel="noopener noreferrer">Delta Air Lines</a>, <a href="https://www.united.com/en/us/newsroom" target="_blank" rel="noopener noreferrer">United Airlines</a>, or <a href="https://swamedia.com/" target="_blank" rel="noopener noreferrer">Southwest Airlines</a>.</p>
          </section>

          <section className={styles.reviewSection}>
            <h2>Making the Cut: Choosing Your 2025 Airline Card</h2>
            <ul>
              <li><strong>Know Your Travel Style:</strong> Are you loyal to one airline or a free agent? How often do you fly? What perks matter most – luxury or practical savings?</li>
              <li><strong>Do the Annual Fee Math:</strong> Calculate the "effective annual fee" by subtracting the real value of credits you'll actually use. Don't fall for the "coupon book" trap of valuing credits you wouldn't normally spend.
                <blockquote className={styles.quote}>"I nearly got a super-premium card for its 'value,' then realized I wouldn't use half the niche credits. A simpler card with a straightforward travel credit made more sense for my actual spending." - Real Talk from a savvy traveler.</blockquote>
              </li>
              <li><strong>Read the Fine Print:</strong> Understand sign-up bonus rules (like Chase's 5/24), foreign transaction fees (most good travel cards waive these), and travel protections. Authorized user fees and benefits can also be a big deal.</li>
            </ul>
            <p>The "best" card is personal. What works for a frequent solo business traveler might not suit a family taking one big vacation a year.</p>
          </section>

          <section id="editors-essential-takeaways" className={`${styles.reviewSection} ${styles.eetaSection || ''}`}>
            <h2>Editor's Essential Takeaways (EETA) / Final Recommendations for 2025</h2>
            <ul>
                <li><strong>Luxury Seeker (Lounges & Top Perks):</strong> <Link href="/cards/amex-platinum" passHref><a>The Platinum Card® from American Express</a></Link>. If you can maximize its credits, the lounge network is hard to beat. Runner-up: <Link href="/cards/chase-sapphire-reserve" passHref><a>Chase Sapphire Reserve®</a></Link> for its simpler travel credit and growing Sapphire Lounge network.</li>
                <li><strong>Dedicated Airline Loyalist:</strong>
                    <ul>
                        <li>Delta: <Link href="/cards/delta-skymiles-reserve" passHref><a>Delta SkyMiles® Reserve American Express Card</a></Link>.</li>
                        <li>United: <Link href="/cards/united-club-infinite" passHref><a>United Club℠ Infinite Card</a></Link>.</li>
                        <li>American: <Link href="/cards/citi-aadvantage-executive" passHref><a>Citi® / AAdvantage® Executive World Elite Mastercard®</a></Link>.</li>
                        <li>Southwest: <Link href="/cards/southwest-priority" passHref><a>Southwest Rapid Rewards® Priority Credit Card</a></Link> (especially with the new bag rules!).</li>
                    </ul>
                </li>
                <li><strong>Free Checked Bags Priority:</strong> Usually a co-branded airline card for your preferred carrier. The United Club Infinite is great for two bags. Southwest Priority is now key.</li>
                <li><strong>Points & Miles Maximizer (Flexibility):</strong> <Link href="/cards/chase-sapphire-reserve" passHref><a>Chase Sapphire Reserve®</a></Link> (or Preferred® for lower fee). Ultimate Rewards are incredibly versatile. Runner-up: <Link href="/cards/capital-one-venture-x" passHref><a>Capital One Venture X</a></Link> for simple earning, great authorized user perks, and solid transfer options.</li>
            </ul>
            <p>Many savvy travelers use a combination – perhaps a premium flexible card plus a co-branded card for their most-flown airline. The key is to align your card with your travel, make sure the value outweighs the cost for you, and be ready to re-evaluate as your needs and the card landscape change. Happy travels in 2025!</p>
          </section>
        </article>
      </main>
    </>
  );
}

export default BestAirlineCardsPage2025;