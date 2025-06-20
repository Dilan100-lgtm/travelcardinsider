// File: pages/reviews/best-credit-cards-for-cruise-travelers-2025.js
"use client"; // 👈 Add this line at the very top

// ❗ Replace image src paths (in cruiseCardData and constants) with your optimised, WebP‑or‑AVIF images.
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
const PAGE_PATH = '/reviews/best-credit-cards-for-cruise-travelers-2025';
const PAGE_URL = `${SITE_BASE_URL}${PAGE_PATH}`;
const SITE_NAME = 'Travel Card Insider';
const HERO_IMAGE_SRC = '/pexels-s-n-b-m-827240-1703909.webp'; // ❗ Replace with your optimised hero image for cruise cards
const HERO_IMAGE_ALT = 'View from a cruise ship deck at sunset, overlooking the ocean, symbolizing a rewarding cruise vacation.';
const DATE_PUBLISHED = '2025-06-20'; // ✏️ Adjust to your actual publish date
const DATE_MODIFIED = '2025-06-20'; // ✏️ Update whenever you edit copy

// ─────────────────────────────────────────────────────────────────────────────
// 👤 AUTHOR INFO
// ─────────────────────────────────────────────────────────────────────────────
const author = {
  name: 'Dilan Madushanka',
  title: 'Lead Travel Card Analyst',
  image: '/WhatsApp Image 2025-05-12 at 4.09.58 PM.jpeg', // ❗ Your 40x40px web‑optimised headshot
  imageLarge: '/WhatsApp Image 2025-05-12 at 4.09.58 PM.jpeg', // ❗ Your 60x60px for tooltip
  bio: 'A seasoned travel card analyst, Dilan specializes in helping cruisers maximize rewards and travel protections to get the most value out of every voyage.',
  expertise: [
    'Cruise Line Rewards Programs',
    'Travel Rewards Optimisation',
    'Credit Card Travel Insurance',
    'Premium Card Benefits',
  ],
  social: {
    linkedin: 'https://www.linkedin.com/in/dilan-madushanka-b65293365',
    twitter: 'https://x.com/team_dilan',
    email: 'team@travelcardinsider.com',
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// 💳 CRUISE CARD DATA
// ─────────────────────────────────────────────────────────────────────────────
const cruiseCardData = [
  {
    id: 'chaseSapphirePreferred',
    name: 'Chase Sapphire Preferred® Card',
    category: 'Mid-Tier',
    imageSrc: '/sapphire_preferred_card.png', // ❗ Replace
    imageAlt: 'Chase Sapphire Preferred® Card',
    annualFee: '$95',
    officialCardPageLink: 'https://creditcards.chase.com/rewards-credit-cards/sapphire/preferred',
    ourTake: "Arguably the single best starting point for any U.S. cruise traveler, offering a fantastic blend of rewards, benefits, and crucial travel protections for a reasonable annual fee.",
    feature: 'Comprehensive trip cancellation/interruption insurance up to $20,000 per trip.',
    rewards: 'Earns 2x points on all general travel (including cruises) and 5x on travel booked through the Chase portal. The welcome bonus is typically worth $750 in travel via the Chase portal.',
    applyLink: 'https://creditcards.chase.com/rewards-credit-cards/sapphire/preferred',
    ratesFeesLink: 'https://sites.chase.com/services/creatives/pricingandterms.html/content/dam/pricingandterms/LGC56014.html', // Find and link to terms
    learnMoreLink: '/cards/chase-sapphire-preferred', // ✏️ Create this internal page later
    ratingValue: 8.2, // ✏️ Add rating
    ratingStars: 4.1,   // ✏️ Add rating
  },
  {
    id: 'capitalOneVentureX',
    name: 'Capital One Venture X Rewards Credit Card',
    category: 'Premium',
    imageSrc: '/venturex-cg-static-card-1000x630-2.avif', // ❗ Replace
    imageAlt: 'Capital One Venture X Rewards Credit Card',
    annualFee: '$395',
    officialCardPageLink: 'https://www.capitalone.com/credit-cards/venture-x/',
    ourTake: "A favorite for its high-end perks at a reasonable price. Its superpower is a simple, flat 2 miles per dollar on every purchase, making it a great earner for your cruise booking.",
    feature: 'The $395 annual fee is effectively canceled out by a $300 annual travel credit and a 10,000-mile anniversary bonus (worth at least $100).',
    rewards: 'Earn a solid 2x miles on every purchase, including cruise bookings. Use the travel credit for flights or hotels, and pay for the cruise itself to earn a high flat rate.',
    applyLink: 'https://www.capitalone.com/credit-cards/venture-x/',
    ratesFeesLink: 'https://www.capitalone.com/credit-cards/venture-x/',
    learnMoreLink: '/cards/capital-one-venture-x', // ✏️ Create this internal page later
    ratingValue: 9.0,
    ratingStars: 4.5,
  },
  {
    id: 'chaseSapphireReserve',
    name: 'Chase Sapphire Reserve®',
    category: 'Premium',
    imageSrc: '/sapphire_reserve_card.png', // ❗ Replace
    imageAlt: 'Chase Sapphire Reserve® Card',
    annualFee: '$550',
    officialCardPageLink: 'https://creditcards.chase.com/rewards-credit-cards/sapphire/reserve',
    ourTake: "A top contender for cruisers due to its unparalleled travel protections, providing peace of mind that is critical when at sea.",
    feature: 'Robust trip cancellation insurance (up to $20,000 per trip) and up to $100,000 in emergency evacuation coverage—a key benefit for any cruiser.',
    rewards: 'Earn 3x points on travel (after using the $300 travel credit) and dining. The $300 annual travel credit is simple to use and applies to most travel purchases, including cruises.',
    applyLink: 'https://creditcards.chase.com/rewards-credit-cards/sapphire/reserve',
    ratesFeesLink: 'https://sites.chase.com/services/creatives/pricingandterms.html/content/dam/pricingandterms/LGC56007.html',
    learnMoreLink: '/cards/chase-sapphire-reserve', // ✏️ Create this internal page later
    ratingValue: 9.2,
    ratingStars: 4.6,
  },
  {
    id: 'amexPlatinum',
    name: 'The Platinum Card® from American Express',
    category: 'Premium',
    imageSrc: '/NUS000000237_480x304_straight_withname.avif', // ❗ Replace
    imageAlt: 'The Platinum Card® from American Express',
    annualFee: '$695',
    officialCardPageLink: 'https://www.americanexpress.com/us/credit-cards/card/platinum/',
    ourTake: "This card is all about elevating your entire travel experience, offering exclusive perks that directly benefit cruisers.",
    feature: 'Access the American Express Cruise Privileges Program. Booking an eligible cruise of five nights or more through Amex Travel gets you up to $300 in onboard credit per stateroom.',
    rewards: 'Earn 5x points on flights booked directly with airlines or on amextravel.com. The strategy is to book your cruise via Amex Travel for the credits and enjoy luxury benefits like Centurion Lounge access.',
    applyLink: 'https://www.americanexpress.com/us/credit-cards/card/platinum/',
    ratesFeesLink: 'https://www.americanexpress.com/us/credit-cards/card-application/apply/prospect/terms/platinum-card/25330-10-0#FeeTable',
    learnMoreLink: '/cards/amex-platinum', // ✏️ Create this internal page later
    ratingValue: 9.4,
    ratingStars: 4.7,
  },
    {
    id: 'carnivalMastercard',
    name: 'Carnival® World Mastercard®',
    category: 'Co-Branded',
    imageSrc: '/SMC_NewMC_card_angled_359x246_L.png', // ❗ Replace
    imageAlt: 'Carnival® World Mastercard®',
    annualFee: '$0',
    officialCardPageLink: 'https://www.carnival.com/credit-card',
    ourTake: "While most co-branded cards lack key protections, this one is worth watching due to upcoming changes in Carnival's loyalty program.",
    feature: "Carnival is overhauling its loyalty program in 2026, which will tie elite status earning directly to credit card spending. This could transform the card into a fast track to valuable onboard perks.",
    rewards: "Typically offers a small onboard credit bonus and 2x-3x points on Carnival purchases. Lacks the comprehensive insurance of general travel cards.",
    applyLink: 'https://www.carnival.com/credit-card',
    ratesFeesLink: 'https://applications.barclaysus.com/serv/eterms/CCTerms?appId=12345&prodidreq=CCVVS63261', // Note: Find the most stable link
    learnMoreLink: '/cards/carnival-world-mastercard', // ✏️ Create this internal page later
    ratingValue: 6.5,
    ratingStars: 3.3,
  }
];

// ─────────────────────────────────────────────────────────────────────────────
// 📊 COMPARISON TABLE DATA
// ─────────────────────────────────────────────────────────────────────────────
const comparisonCruiseTableData = [
  { feature: 'Annual Fee', chaseSapphirePreferred: '$95', capitalOneVentureX: '$395', chaseSapphireReserve: '$550', amexPlatinum: '$695' },
  { feature: 'Primary Cruise Perk', chaseSapphirePreferred: 'Excellent Travel Insurance', capitalOneVentureX: 'Flat 2x Miles on Booking', chaseSapphireReserve: 'Elite Travel Protections', amexPlatinum: 'Up to $300 Onboard Credit' },
  { feature: 'Trip Cancellation Insurance', chaseSapphirePreferred: 'Up to $20,000', capitalOneVentureX: 'Yes', chaseSapphireReserve: 'Up to $20,000', amexPlatinum: 'Yes' },
  { feature: 'Emergency Evacuation', chaseSapphirePreferred: 'Yes', capitalOneVentureX: 'Yes', chaseSapphireReserve: 'Up to $100,000', amexPlatinum: 'Yes' },
  { feature: 'Earning on Cruises', chaseSapphirePreferred: '2x Points', capitalOneVentureX: '2x Miles', chaseSapphireReserve: '3x Points', amexPlatinum: '1x Point' },
];


// ─────────────────────────────────────────────────────────────────────────────
// 🧠 HELPERS - JSON-LD SCHEMA
// ─────────────────────────────────────────────────────────────────────────────
function generateJsonLD() {
    const itemListElements = cruiseCardData.map((card, i) => ({
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
                  card.name.includes('Carnival') ? 'Carnival Cruise Line' :
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
          { '@type': 'ListItem', position: 3, name: 'Best Credit Cards for Cruise Travelers 2025', item: PAGE_URL, },
        ],
      };

    const articleSchema = {
        '@type': 'ReviewNewsArticle',
        mainEntityOfPage: { "@type": "WebPage", "@id": PAGE_URL },
        headline: 'Best Credit Cards for Cruise Travelers 2025: Earn More Than Just a Tan',
        description: 'Our expert guide to the best credit cards for cruise travelers in 2025. Compare premium vs. co-branded cards to maximize rewards, get travel insurance, and enjoy onboard perks.',
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
            { '@type': 'ItemList', name: 'Best Credit Cards for Cruise Travelers 2025', url: PAGE_URL, numberOfItems: cruiseCardData.length, itemListElement: itemListElements, mainEntityOfPage: PAGE_URL },
          ],
        },
        null,
        2
      );
}

// ─────────────────────────────────────────────────────────────────────────────
// 🌐 COMPONENT
// ─────────────────────────────────────────────────────────────────────────────
function BestCruiseCardsPage2025() {
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
                <title>Best Credit Cards for Cruises (June 2025) | {SITE_NAME}</title>
                <meta
                name="description"
                content="Our expert guide to the best credit cards for cruise travelers in 2025. Compare premium vs. co-branded cards to maximize rewards, get travel insurance, and enjoy onboard perks."
                />
                <meta name="viewport" content="width=device-width,initial-scale=1" />
                <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
                <meta name="keywords" content="best credit cards for cruises, cruise credit card, travel rewards, cruise insurance, chase sapphire preferred, capital one venture x, amex platinum, chase sapphire reserve, carnival mastercard" />
                <link rel="canonical" href={PAGE_URL} />

                {/* Open Graph */}
                <meta property="og:type" content="article" />
                <meta property="og:title" content={`Best Credit Cards for Cruise Travelers (June 2025) | ${SITE_NAME}`} />
                <meta property="og:description" content="Choosing the right credit card for your cruise can unlock flights, travel insurance, and valuable onboard perks. See our top picks for 2025." />
                <meta property="og:url" content={PAGE_URL} />
                <meta property="og:site_name" content={SITE_NAME} />
                <meta property="og:image" content={`${SITE_BASE_URL}${HERO_IMAGE_SRC}`} />
                <meta property="og:image:alt" content={HERO_IMAGE_ALT} />
                <meta property="og:locale" content="en_US" />
                <meta property="article:published_time" content={DATE_PUBLISHED} />
                <meta property="article:modified_time" content={DATE_MODIFIED} />
                <meta property="article:author" content={author.name} />
                <meta property="article:section" content="Credit Card Reviews" />
                <meta property="article:tag" content="Cruises" />
                <meta property="article:tag" content="Travel Rewards" />
                <meta property="article:tag" content="Credit Cards" />
                <meta property="article:tag" content="2025" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={`Best Credit Cards for Cruises (2025) - ${SITE_NAME}`} />
                <meta name="twitter:description" content="Maximize your next cruise vacation. Our guide breaks down the best travel rewards cards for booking cruises, from top-tier insurance to onboard credits." />
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
                  <h1>Best Credit Cards for Cruise Travelers 2025: Earn More Than Just a Tan</h1>
                  
                  {/* --- AUTHOR SECTION (CORRECTED) --- */}
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
                  {/* --- END OF CORRECTION --- */}

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
                        <h2>Charting Your Course to Maximum Value</h2>
                        <p>The moment you book a cruise, the vacation daydreams begin. But for the savvy traveler, the first strategic decision—the credit card used for that initial deposit—can shape the value of the entire journey. The right travel rewards credit card can mean the difference between simply paying for your trip and earning flights, receiving reimbursement for delays, and being protected by robust travel insurance.</p>
                        <p>So, where do you start? The world of travel rewards presents two main routes for cruisers: the incredible flexibility of general travel rewards cards versus the loyalty-focused perks of co-branded cruise line cards. This guide is your map to navigating these choices, ensuring your next voyage is not just memorable, but maximally rewarding.</p>
                    </section>
                    
                    <section id="general-vs-cobranded" className={styles.reviewSection}>
                        <h2>Part I: General Travel Cards vs. Co-Branded Cards</h2>
                        <p>Before picking a card, you must decide: Are you a travel free agent seeking value across all your adventures, or a dedicated loyalist to a single cruise line?</p>
                        
                        <h3>The Generalist's Advantage (The Multi-Tool)</h3>
                        <p>Think of general travel rewards cards from issuers like Chase, American Express, and Capital One as the Swiss Army knives of your wallet. Their power is in their flexibility. You earn points that can be transferred to dozens of airline and hotel partners, unlocking amazing value for flights or pre-cruise stays.</p>
                        <p>But their key strengths go beyond just points. We're talking about huge welcome bonuses (often worth over $1,000), faster earning on everyday spending like dining, and—most critically for anyone at sea—<Link href="/review/best-travel-insurance-cards-2025"><a>superior travel protections</a></Link> that can literally save you thousands if things go wrong.</p>
                        
                        <h3>The Loyalist's Proposition (The Specialist's Wrench)</h3>
                        <p>Co-branded cards, a partnership between a cruise line and a bank, reward loyalty with brand-specific perks. These cards typically have no annual fee, offer a modest sign-up bonus for onboard credit, and provide accelerated earnings on purchases with that cruise line.</p>
                        <p>Many are lured in by the siren song of a <Link href="/review/The-Best-Travel-Cards-with-No-Annual-Fee-Get-Big-Rewards-for-Free"><a>'$0 annual fee,'</a></Link> but this can be an illusion. The real cost is the opportunity cost of the benefits you're giving up. Most co-branded cards offer a meager 1 point per dollar on non-cruise spending. Why settle for that when a card like the Capital One Venture X gives a flat 2 miles per dollar on *everything*?</p>
                        <p>Here's where it gets real: last year, I used my Chase Sapphire Preferred® on a Royal Caribbean trip. Not for the points, but for the peace of mind. Its trip cancellation insurance (up to $20,000) is a safety net that co-branded cards just don't offer. A single canceled cruise could save you thousands—a protection absent from its 'free' counterparts.</p>
                    </section>
                    
                    <section id="top-picks" className={styles.reviewSection}>
                        <h2>Our Top Recommended Cruise Cards for 2025</h2>
                        <p>Ready to go all-in? For travelers who prioritize maximum comfort, protection, and a touch of luxury, premium cards offer compelling options. While their annual fees are higher, the perks can easily justify the cost, transforming your entire travel experience.</p>
                        
                        {cruiseCardData.map((card, index) => (
                          <div key={card.id} className={`${styles.cardDetailSection} ${index < cruiseCardData.length - 1 ? styles.cardSeparator : ''}`}>
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
                                    {card.id === 'amexPlatinum' ? (
                                        <Link href="/review/amex-platinum-review-2025"><a>{card.name}</a></Link>
                                    ) : card.id === 'chaseSapphirePreferred' ? (
                                        <Link href="/review/chase-sapphire-preferred-2025"><a>{card.name}</a></Link>
                                    ) : (
                                        card.name
                                    )}
                                    {' - '}
                                    <span className={styles.categoryLabel}>{card.category}</span>
                                  </h3>
                                  {card.ratingStars && <StarRating rating={card.ratingStars} />} 
                                  {card.ratingValue && <span className={styles.ratingValue}>Our Rating: {card.ratingValue.toFixed(1)}/10</span>}
                                </div>
                            </div>
                            <ul>
                              <li><strong>Our Take:</strong> {card.ourTake}</li>
                              <li><strong>Key Feature for Cruisers:</strong> {card.feature}</li>
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
                    
                    <section id="co-branded-deep-dive" className={styles.reviewSection}>
                        <h2>Part IV: The Cruise Line's Own Fleet – A Deeper Dive</h2>
                        <p>For the die-hard loyalist, a dedicated cruise line card seems like a no-brainer. But let's look closer. These cards often have mediocre rewards and lack the critical protections of the general travel cards we love. They follow a familiar script: no annual fee, a little onboard credit, and a small points bonus on their own cruises. That's fine, but they're missing the comprehensive insurance that gives you true peace of mind. And let’s be honest—nobody wants to discover their insurance is flimsy after their third Mai Tai on the lido deck.</p>
                        <p>One to watch is the **Carnival® World Mastercard®**. Carnival is overhauling its loyalty program in 2026, which will tie elite status earning directly to credit card spending. This could transform the card from a simple discount tool into a fast track to valuable onboard perks (Source: <a href="https://www.carnival.com/credit-card" target="_blank" rel="noopener noreferrer">Carnival Cruise Line Official Site</a>).</p>
                    </section>

                    <section id="user-reviews" className={styles.reviewSection}>
                        <h2>Part V: Real Voices from the High Seas – User Testimonials</h2>
                        <p>Real-world experiences offer invaluable context:</p>
                        <blockquote className={styles.quote}>
                            <p>"I've been a Venture X holder for two years, and it's my go-to for all my travel bookings. The $300 travel credit and 10,000 anniversary miles basically pay the annual fee for me. Last year, the miles I earned from booking our Alaska cruise covered our flights to Seattle."</p>
                            <footer>— Sarah L., from a Reddit r/CreditCards discussion</footer>
                        </blockquote>
                        <blockquote className={styles.quote}>
                            <p>"I'll never cruise without my Sapphire Preferred again. We had to cancel a repositioning cruise last minute due to a family emergency, and the trip cancellation insurance saved us over $4,000. The peace of mind is worth way more than the $95 annual fee."</p>
                            <footer>— Mark T., from a Cruise Critic forum</footer>
                        </blockquote>
                    </section>
                    
                    <section id="expert-strategy" className={styles.reviewSection}>
                        <h2>Part VI: The Expert's Log – Strategic Recommendations & Final Verdict</h2>
                        <p>Alright, let's bring it all home. Choosing the right card isn't about finding a single 'best' card—it's about <Link href="/learn/credit-card-basics"><a>matching one to *your* specific travel style</a></Link>.</p>
                        <ul>
                          <li><strong>The "One-Card" Cruiser Strategy:</strong> For simplicity and power, the Chase Sapphire Preferred® Card is the top pick. Its robust travel insurance and flexible rewards make it a reliable choice.</li>
                          <li><strong>The "Maximizer's" Two-Card Strategy:</strong> For the points enthusiast, combine the Capital One Venture X for cruise bookings with the American Express® Gold Card for its 4x points on dining and U.S. supermarkets to create a powerhouse earning duo.</li>
                          <li><strong>The "Luxury Voyager" Playbook:</strong> For those who prioritize perks, pair The Platinum Card® from American Express (to book the cruise for the onboard credit) with the Chase Sapphire Reserve® (for its best-in-class insurance). This provides the ultimate in luxury and protection.</li>
                        </ul>

                        <h3>Final Verdict</h3>
                        <p>The tides of the credit card market are clear. For the vast majority of US cruise travelers in 2025, a general travel rewards card offers a sea of value that co-branded cards just can't navigate. The combination of flexible points, higher earning rates, and—I can't say this enough—comprehensive travel protections provides a level of financial security that's priceless. Choose your strategy wisely, and your credit card will become a powerful tool that enhances every aspect of your voyage, from booking to Bon Voyage!</p>
                    </section>
                </article>
            </main>
        </>
    );
}

export default BestCruiseCardsPage2025;