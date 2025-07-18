// File: pages/reviews/best-credit-cards-with-dining-credits-2025.js
"use client"; // 👈 Add this line at the very top

// ❗ Replace image src paths (in diningCardData) with your optimised, WebP‑or‑AVIF images.
// The paths below are placeholders. Card images should ideally be ~150x95px or similar aspect ratio.

import React, { useState, useRef, useEffect, useCallback } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/NoFTFCardsReview.module.css'; // Reusing your excellent, existing styles
import StarRating from '../../components/StarRating'; // Assuming you have this component for ratings

// ─────────────────────────────────────────────────────────────────────────────
// 🔗 CONFIG
// ─────────────────────────────────────────────────────────────────────────────
const SITE_BASE_URL = 'https://www.travelcardinsider.com';
const PAGE_PATH = '/reviews/best-credit-cards-with-dining-credits-2025';
const PAGE_URL = `${SITE_BASE_URL}${PAGE_PATH}`;
const SITE_NAME = 'Travel Card Insider';
const HERO_IMAGE_SRC = '/using-credit-card.webp'; // ❗ Replace with your optimised hero image for dining cards
const HERO_IMAGE_ALT = 'A couple enjoying a fine dining meal at a restaurant, symbolizing the rewards of dining credit cards.';
const DATE_PUBLISHED = '2025-07-18';
const DATE_MODIFIED = '2025-07-18'; // ✏️ Update whenever you edit copy

// ─────────────────────────────────────────────────────────────────────────────
// 👤 AUTHOR INFO
// ─────────────────────────────────────────────────────────────────────────────
const author = {
  name: 'Dilan Madushanka',
  title: 'Lead Travel Card Analyst',
  image: '/WhatsApp Image 2025-05-12 at 4.09.58 PM.jpeg', // ❗ Your 40x40px web‑optimised headshot
  imageLarge: '/WhatsApp Image 2025-05-12 at 4.09.58 PM.jpeg', // ❗ Your 60x60px for tooltip
  bio: 'A seasoned travel card analyst, Dilan specializes in helping travelers maximize rewards from everyday spending to fund their next great adventure.',
  expertise: [
    'Dining & Travel Rewards Programs',
    'Credit Card Statement Credits',
    'Points & Miles Valuation',
    'Premium Card Benefits',
  ],
  social: {
    linkedin: 'https://www.linkedin.com/in/dilan-madushanka-b65293365',
    twitter: 'https://x.com/team_dilan',
    email: 'team@travelcardinsider.com',
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// 💳 DINING CARD DATA
// ─────────────────────────────────────────────────────────────────────────────
const diningCardData = [
  {
    id: 'amexGold',
    name: 'American Express® Gold Card',
    category: 'Foodie Powerhouse',
    imageSrc: '/NUS000000174_480x304_straight_withname.avif', // ❗ Replace
    imageAlt: 'American Express® Gold Card',
    annualFee: '$250',
    officialCardPageLink: 'https://www.americanexpress.com/us/credit-cards/card/gold-card/',
    ourTake: "The undisputed champion for anyone whose spending is heavily weighted toward food. This isn't just a travel card with some dining benefits; it's a food-centric card that also happens to offer excellent travel rewards.",
    feature: 'Up to $240 in annual statement credits ($120 for dining, $120 for Uber) that can effectively erase the annual fee for an engaged user.',
    rewards: 'Earn a massive 4X points at restaurants worldwide and at U.S. supermarkets (on up to $25,000 per year). The strategy is to master the monthly credits to maximize value.',
    applyLink: 'https://www.americanexpress.com/us/credit-cards/card/gold-card/',
    ratesFeesLink: 'https://www.americanexpress.com/us/credit-cards/card-application/apply/prospect/terms/gold-card/25330-10-0',
    learnMoreLink: '/cards/amex-gold-card-review',
    ratingValue: 8.8,
    ratingStars: 4.4,
  },
  {
    id: 'chaseSapphireReserve',
    name: 'Chase Sapphire Reserve®',
    category: 'Luxury Insider',
    imageSrc: '/sapphire_reserve_card.png', // ❗ Replace
    imageAlt: 'Chase Sapphire Reserve® Card',
    annualFee: '$550',
    officialCardPageLink: 'https://creditcards.chase.com/rewards-credit-cards/sapphire/reserve',
    ourTake: 'Engineered for the high-spending, luxury-focused traveler. This card is less about saving money on food and more about unlocking elevated access and exclusive moments.',
    feature: 'Special access to reservations at sought-after restaurants through Chase Dining and a broad, easy-to-use $300 Annual Travel Credit.',
    rewards: 'Earn 3X points on dining worldwide. Its value is derived from a complex matrix of benefits including travel credits and premium partnerships like DoorDash.',
    applyLink: 'https://creditcards.chase.com/rewards-credit-cards/sapphire/reserve',
    ratesFeesLink: 'https://sites.chase.com/services/creatives/pricingandterms.html/content/dam/pricingandterms/LGC56007.html',
    learnMoreLink: '/cards/chase-sapphire-reserve-review',
    ratingValue: 9.2,
    ratingStars: 4.6,
  },
  {
    id: 'chaseSapphirePreferred',
    name: 'Chase Sapphire Preferred® Card',
    category: 'Smart Starter',
    imageSrc: '/sapphire_preferred_card.png', // ❗ Replace
    imageAlt: 'Chase Sapphire Preferred® Card',
    annualFee: '$95',
    officialCardPageLink: 'https://creditcards.chase.com/rewards-credit-cards/sapphire/preferred',
    ourTake: 'The quintessential entry point into the world of strategic travel rewards, striking a perfect balance between a manageable annual fee and a powerful rewards engine.',
    feature: 'The incredible flexibility of its Ultimate Rewards points. The value isn\'t found in a monthly credit; it\'s realized when you redeem your points for high-value travel.',
    rewards: 'A solid 3X points on dining, select streaming services, and online groceries. Its strength is turning those points into outsized value by transferring to partners like Hyatt or United.',
    applyLink: 'https://creditcards.chase.com/rewards-credit-cards/sapphire/preferred',
    ratesFeesLink: 'https://sites.chase.com/services/creatives/pricingandterms.html/content/dam/pricingandterms/LGC56014.html',
    learnMoreLink: '/cards/chase-sapphire-preferred-review',
    ratingValue: 8.4,
    ratingStars: 4.2,
  },
    {
    id: 'marriottBonvoyBrilliant',
    name: 'Marriott Bonvoy Brilliant® American Express® Card',
    category: 'Hotel Loyalist',
    imageSrc: '/NUS000000313_480x304_straight_withname.avif', // ❗ Replace
    imageAlt: 'Marriott Bonvoy Brilliant American Express Card',
    annualFee: '$650',
    officialCardPageLink: 'https://www.americanexpress.com/us/credit-cards/card/marriott-bonvoy-brilliant/',
    ourTake: 'This card is for the traveler devoted to the Marriott Bonvoy portfolio. The dining benefit is a clever secondary perk that helps justify the high annual fee.',
    feature: 'Up to $300 in annual dining credits (delivered as up to $25 each month), making it easy to recoup a large portion of the annual fee.',
    rewards: 'Earn 3X points at restaurants worldwide. The main draw is hotel perks like an annual Free Night Award and Platinum Elite status, with the dining credit as a valuable bonus.',
    applyLink: 'https://www.americanexpress.com/us/credit-cards/card/marriott-bonvoy-brilliant/',
    ratesFeesLink: 'https://www.americanexpress.com/us/credit-cards/card-application/apply/prospect/terms/marriott-bonvoy-brilliant-card/36181-10-0',
    learnMoreLink: '/cards/marriott-bonvoy-brilliant-review',
    ratingValue: 8.9,
    ratingStars: 4.1,
  },
  {
    id: 'capitalOneSavorOne',
    name: 'Capital One SavorOne Cash Rewards Credit Card',
    category: 'Pragmatic Maximizer',
    imageSrc: '/new-savor-card-art.avifs', // ❗ Replace
    imageAlt: 'Capital One SavorOne Cash Rewards Credit Card',
    annualFee: '$0',
    officialCardPageLink: 'https://www.capitalone.com/credit-cards/savorone-rewards/',
    ourTake: 'For the traveler who values simplicity and tangible cash rewards with no annual fee, this card is a straightforward workhorse for dining and entertainment.',
    feature: 'Its true power is unlocked when paired with a miles-earning card like the Venture X, allowing you to convert cash back from dining into high-value Venture Miles.',
    rewards: 'Unlimited 3% cash back on dining, entertainment, popular streaming services, and at grocery stores. No annual fee and no complex credits to track.',
    applyLink: 'https://www.capitalone.com/credit-cards/savorone-rewards/',
    ratesFeesLink: 'https://www.capitalone.com/credit-cards/savorone-rewards/terms-prequalify/v1/',
    learnMoreLink: '/cards/capital-one-savorone-review',
    ratingValue: 8.0,
    ratingStars: 4.0,
  }
];

// ─────────────────────────────────────────────────────────────────────────────
// 📊 COMPARISON TABLE DATA
// ─────────────────────────────────────────────────────────────────────────────
const comparisonDiningTableData = [
  { feature: 'Card Name', id: 'cardName', amexGold: 'Amex Gold Card', chaseSapphireReserve: 'Chase Sapphire Reserve®', chaseSapphirePreferred: 'Chase Sapphire Preferred®', marriottBonvoyBrilliant: 'Marriott Bonvoy Brilliant®', capitalOneSavorOne: 'Capital One SavorOne' },
  { feature: 'Annual Fee', id: 'annualFee', amexGold: '$250', chaseSapphireReserve: '$550', chaseSapphirePreferred: '$95', marriottBonvoyBrilliant: '$650', capitalOneSavorOne: '$0' },
  { feature: 'Dining Rewards', id: 'diningRewards', amexGold: '4X points', chaseSapphireReserve: '3X points', chaseSapphirePreferred: '3X points', marriottBonvoyBrilliant: '3X points', capitalOneSavorOne: '3% cash back' },
  { feature: 'Annual Dining Credit (Value & Structure)', id: 'diningCredit', amexGold: '$120 ($10/mo at select partners)', chaseSapphireReserve: '$300 Annual Travel Credit (applies to dining)', chaseSapphirePreferred: 'None', marriottBonvoyBrilliant: '$300 ($25/mo at restaurants worldwide)', capitalOneSavorOne: 'None' },
  { feature: 'Ideal User Profile', id: 'idealUser', amexGold: 'The Lifestyle Optimizer: Organized and spends heavily on both dining and groceries.', chaseSapphireReserve: 'The Luxury Experience Seeker: Values access and premium perks over simple rebates.', chaseSapphirePreferred: 'The Aspiring Points Pro: Ready to learn the travel rewards game with a low-risk, high-potential card.', marriottBonvoyBrilliant: 'The Dedicated Brand Loyalist: Primarily motivated by hotel perks, with dining as a bonus.', capitalOneSavorOne: 'The Pragmatic Maximizer: Values simplicity and tangible returns, with an eye on future travel strategies.' },
];


// ─────────────────────────────────────────────────────────────────────────────
// 🧠 HELPERS - JSON-LD SCHEMA
// ─────────────────────────────────────────────────────────────────────────────
function generateJsonLD() {
    const itemListElements = diningCardData.map((card, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        item: {
          '@type': 'Product',
          name: card.name,
          url: `${SITE_BASE_URL}${card.learnMoreLink}`,
          image: `${SITE_BASE_URL}${card.imageSrc}`,
          description: card.ourTake,
          brand: {
            '@type': 'Brand',
            name: card.name.includes('Chase') ? 'Chase' :
                  card.name.includes('Capital One') ? 'Capital One' :
                  card.name.includes('American Express') ? 'American Express' :
                  'Various Issuers',
          },
          offers: {
            '@type': 'Offer',
            priceCurrency: 'USD',
            price: card.annualFee.replace('$', '').trim(),
            url: card.applyLink,
          },
         ...(card.ratingValue && {
           aggregateRating: {
             '@type': 'AggregateRating',
             ratingValue: card.ratingValue,
             bestRating: '10',
             ratingCount: 1, // Represents our single review rating
            },
         })
        },
      }));

    const breadcrumbsSchema = {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_BASE_URL, },
          { '@type': 'ListItem', position: 2, name: 'Reviews', item: `${SITE_BASE_URL}/reviews`, },
          { '@type': 'ListItem', position: 3, name: 'Best Credit Cards With Dining Credits 2025', item: PAGE_URL, },
        ],
      };

    const articleSchema = {
        '@type': 'ReviewNewsArticle',
        mainEntityOfPage: { "@type": "WebPage", "@id": PAGE_URL },
        headline: 'Best Credit Cards With Dining Credits for 2025: Eat Out, Earn Your Next Trip',
        description: 'Our expert guide to the best credit cards for dining in 2025. Compare top cards from Amex, Chase, and Capital One to maximize rewards on restaurants, groceries, and takeout.',
        image: [`${SITE_BASE_URL}${HERO_IMAGE_SRC}`],
        author: {
          '@type': 'Person',
          name: author.name,
          url: author.social.linkedin || SITE_BASE_URL,
          image: `${SITE_BASE_URL}${author.imageLarge || author.image}`,
          jobTitle: author.title,
          description: author.bio,
          sameAs: Object.values(author.social).filter(Boolean)
        },
        publisher: {
          '@type': 'Organization',
          name: SITE_NAME,
          logo: {
            '@type': 'ImageObject',
            url: `${SITE_BASE_URL}/images/travel-card-insider-logo-120.png`, // ❗ Ensure this logo exists
          },
        },
        datePublished: DATE_PUBLISHED,
        dateModified: DATE_MODIFIED,
        about: itemListElements.map(el => el.item),
    };

    return JSON.stringify(
        {
          '@context': 'https://schema.org',
          '@graph': [
            articleSchema,
            breadcrumbsSchema,
            { '@type': 'ItemList', name: 'Best Credit Cards With Dining Credits 2025', url: PAGE_URL, numberOfItems: diningCardData.length, itemListElement: itemListElements, mainEntityOfPage: PAGE_URL },
          ],
        },
        null,
        2
      );
}

// ─────────────────────────────────────────────────────────────────────────────
// 🌐 COMPONENT
// ─────────────────────────────────────────────────────────────────────────────
function BestDiningCreditCardsPage2025() {
    // Tooltip logic for author section
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
                <title>Best Dining Credit Cards (July 2025) | {SITE_NAME}</title>
                <meta
                name="description"
                content="Our expert guide to the best credit cards for dining in 2025. Compare top cards from Amex, Chase, and Capital One to maximize rewards on restaurants, groceries, and takeout."
                />
                <meta name="viewport" content="width=device-width,initial-scale=1" />
                <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
                <meta name="keywords" content="best dining credit cards, restaurant rewards, foodie credit card, dining credits, amex gold, chase sapphire reserve, chase sapphire preferred, capital one savorone" />
                <link rel="canonical" href={PAGE_URL} />

                {/* Open Graph */}
                <meta property="og:type" content="article" />
                <meta property="og:title" content={`Best Credit Cards With Dining Credits (July 2025) | ${SITE_NAME}`} />
                <meta property="og:description" content="Turn every meal into your next trip. Our guide breaks down the best credit cards for dining rewards, from massive points multipliers to valuable statement credits." />
                <meta property="og:url" content={PAGE_URL} />
                <meta property="og:site_name" content={SITE_NAME} />
                <meta property="og:image" content={`${SITE_BASE_URL}${HERO_IMAGE_SRC}`} />
                <meta property="og:image:alt" content={HERO_IMAGE_ALT} />
                <meta property="og:locale" content="en_US" />
                <meta property="article:published_time" content={DATE_PUBLISHED} />
                <meta property="article:modified_time" content={DATE_MODIFIED} />
                <meta property="article:author" content={author.name} />
                <meta property="article:section" content="Credit Card Reviews" />
                <meta property="article:tag" content="Dining" />
                <meta property="article:tag" content="Travel Rewards" />
                <meta property="article:tag" content="Credit Cards" />
                <meta property="article:tag" content="2025" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={`Best Dining Credit Cards (2025) - ${SITE_NAME}`} />
                <meta name="twitter:description" content="Maximize rewards on every food purchase. Our guide breaks down the best credit cards for restaurants, groceries, and food delivery." />
                <meta name="twitter:image" content={`${SITE_BASE_URL}${HERO_IMAGE_SRC}`} />
                {author.social.twitter && <meta name="twitter:creator" content={`@${author.social.twitter.split('/').pop()}`} />}
                
                {/* Geo‑targeting & Language */}
                <meta name="geo.region" content="US" />
                <meta name="geo.placename" content="United States" />
                <meta name="language" content="en-US" />
                <meta name="distribution" content="global" />
                <link rel="alternate" hrefLang="en-us" href={PAGE_URL} />
                
                {/* JSON‑LD Schema */}
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: generateJsonLD() }} />
            </Head>

            <main className={styles.reviewContainer}>
                <header className={styles.reviewHeader}>
                  <h1>Best Credit Cards With Dining Credits for 2025: Eat Out, Earn Your Next Trip</h1>
                  
                  {/* --- AUTHOR SECTION (This is the interactive tooltip structure) --- */}
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
                      </div>
                      
                      {showTooltip && (
                          <div 
                              className={styles.authorTooltip}
                              ref={tooltipRef}
                              role="tooltip"
                              onMouseEnter={handleMouseEnterTriggerOrTooltip} 
                              onMouseLeave={handleMouseLeaveTriggerOrTooltip}
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
                                 
                                 <div className={styles.authorTooltipFooter}>
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
                                     <Link href={`/author/${author.name.toLowerCase().replace(' ', '-')}`} legacyBehavior>
                                        <a className={styles.authorBioLink}>See Full Bio</a>
                                     </Link>
                                 </div>
                          </div>
                      )}
                  </div>

                </header>
                
                <div className={styles.heroSection}>
                    <Image
                        src={HERO_IMAGE_SRC}
                        alt={HERO_IMAGE_ALT}
                        layout="responsive"
                        width={900}
                        height={450}
                        objectFit="cover"
                        priority
                        className={styles.heroImage}
                    />
                </div>
                
                <p className={styles.disclaimer}>
                  <strong>Disclaimer:</strong> Card offers, terms, and benefits are subject to change and are accurate as of {new Date(DATE_MODIFIED).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}. Please verify all details directly with the card issuer. This page may contain affiliate links.
                </p>

                <article>
                    <section className={styles.reviewSection}>
                        <h2>The New Currency of Culinary Travel</h2>
                        <p>The memory of a great meal often defines a journey. Think of that perfectly flaky croissant from a bustling Parisian bistro or the unexpected delight of a street-side taco from a hidden cart in Mexico City. These moments are as vital to the travel experience as any landmark or museum.</p>
                        <p>For the modern U.S. traveler, dining is no longer just a line item in a budget; it's a central part of the adventure. Financial institutions have taken notice. In 2025, the savviest travelers understand that the path to their next great escape is paved not just with points from flights and hotels, but with every restaurant bill, grocery run, and takeout order.</p>
                        <p>Credit card rewards have evolved far beyond a simple points-per-dollar game. They are now intricate ecosystems of statement credits, exclusive perks, and curated access. This guide is your insider look at navigating this landscape. We’ll break down the premier offerings from issuers like American Express, Chase, and Capital One, giving you the strategic intelligence to turn your culinary spending into a powerful engine for future travel.</p>
                    </section>
                    
                    <section id="top-picks" className={styles.reviewSection}>
                        <h2>Our Top Recommended Dining Cards for 2025</h2>
                        <p>From dedicated foodies to luxury travelers, these cards represent the best options for turning your dining expenses into valuable rewards.</p>
                        
                        {diningCardData.map((card, index) => (
                          <div key={card.id} className={`${styles.cardDetailSection} ${index < diningCardData.length - 1 ? styles.cardSeparator : ''}`}>
                            <div className={styles.cardHeader}>
                                <div className={styles.cardImageContainer}>
                                  <Image
                                    src={card.imageSrc}
                                    alt={card.imageAlt}
                                    width={150} 
                                    height={95}  
                                    objectFit="contain"
                                    loading={index > 1 ? "lazy" : "eager"}
                                  />
                                </div>
                                <div className={styles.cardTitleRating}>
                                  <h3>
                                    <Link href={card.learnMoreLink}><a>{card.name}</a></Link>
                                    {' - '}
                                    <span className={styles.categoryLabel}>{card.category}</span>
                                  </h3>
                                  {card.ratingStars && <StarRating rating={card.ratingStars} />} 
                                  {card.ratingValue && <span className={styles.ratingValue}>Our Rating: {card.ratingValue.toFixed(1)}/10</span>}
                                </div>
                            </div>
                            <ul>
                              <li><strong>Our Take:</strong> {card.ourTake}</li>
                              <li><strong>Key Feature for Diners:</strong> {card.feature}</li>
                              <li><strong>Rewards Strategy:</strong> {card.rewards}</li>
                              <li><strong>Annual Fee:</strong> {card.annualFee} (<a href={card.officialCardPageLink} target="_blank" rel="noopener noreferrer sponsored">Official Card Page</a>)</li>
                            </ul>
                            <div className={styles.cardButtonsContainer}>
                                <a href={card.applyLink} target="_blank" rel="noopener noreferrer sponsored" className={`${styles.cardButton} ${styles.applyButton}`}>Apply Now</a>
                                <a href={card.ratesFeesLink} target="_blank" rel="noopener noreferrer sponsored" className={`${styles.cardButton} ${styles.secondaryButton}`}>Rates & Fees</a>
                                <Link href={card.learnMoreLink} legacyBehavior><a className={`${styles.cardButton} ${styles.secondaryButton}`}>Learn More</a></Link>
                            </div>
                          </div>
                        ))}
                    </section>
                    
                     <section id="comparison-table" className={styles.reviewSection}>
                        <h2>Match Your Wallet to Your Travel Style</h2>
                        <div className={styles.comparisonTableContainer}>
                            <table className={styles.comparisonTable}>
                                <thead>
                                    <tr>
                                        {comparisonDiningTableData.map(header => (
                                          <th key={header.id}>{header.feature}</th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                      <td><strong>Amex Gold Card</strong></td>
                                      <td>$250</td>
                                      <td>4X points</td>
                                      <td>$120 ($10/mo at select partners)</td>
                                      <td>The Lifestyle Optimizer: Organized and spends heavily on both dining and groceries.</td>
                                    </tr>
                                    <tr>
                                      <td><strong>Chase Sapphire Reserve®</strong></td>
                                      <td>$550</td>
                                      <td>3X points</td>
                                      <td>$300 Annual Travel Credit (applies to dining)</td>
                                      <td>The Luxury Experience Seeker: Values access and premium perks over simple rebates.</td>
                                    </tr>
                                    <tr>
                                      <td><strong>Chase Sapphire Preferred®</strong></td>
                                      <td>$95</td>
                                      <td>3X points</td>
                                      <td>None</td>
                                      <td>The Aspiring Points Pro: Ready to learn the travel rewards game with a low-risk, high-potential card.</td>
                                    </tr>
                                     <tr>
                                      <td><strong>Marriott Bonvoy Brilliant®</strong></td>
                                      <td>$650</td>
                                      <td>3X points</td>
                                      <td>$300 ($25/mo at restaurants worldwide)</td>
                                      <td>The Dedicated Brand Loyalist: Primarily motivated by hotel perks, with dining as a bonus.</td>
                                    </tr>
                                     <tr>
                                      <td><strong>Capital One SavorOne</strong></td>
                                      <td>$0</td>
                                      <td>3% cash back</td>
                                      <td>None</td>
                                      <td>The Pragmatic Maximizer: Values simplicity and tangible returns, with an eye on future travel strategies.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>
                    
                    <section id="final-verdict" className={styles.reviewSection}>
                        <h2>Your Next Meal, Your Next Trip</h2>
                        <p>In the sophisticated world of 2025 travel rewards, the right credit card does more than just pay for a meal—it transforms that expense into a direct investment in your next adventure. There is no single "best" card—as we detail in our <Link href="/reviews/best-premium-travel-credit-cards-2025"><a>Best Premium Travel Credit Cards 2025 guide</a></Link>—only the best card for your spending habits, travel goals, and tolerance for complexity. By conducting a quick audit of your own spending and using this guide as your framework, you can confidently select the card that will turn your 2025 dining experiences into your 2026 travel dreams.</p>
                    </section>
                </article>
            </main>
        </>
    );
}

export default BestDiningCreditCardsPage2025;