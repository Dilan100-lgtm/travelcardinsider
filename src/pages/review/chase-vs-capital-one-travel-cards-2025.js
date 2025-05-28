// File: pages/reviews/chase-vs-capital-one-travel-cards-2025.js – FINAL COMPLETE VERSION
// ❗ Replace image src paths (in cardData and constants) with your optimised, WebP‑or‑AVIF images.
// The paths below are placeholders. Card images should ideally be ~150x95px or similar aspect ratio.

import React, { useState, useRef, useEffect, useCallback } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/NoFTFCardsReview.module.css'; // Ensure this path is correct and styles are appropriate
// import StarRating from '../../components/StarRating'; // Uncomment if you implement a star rating system

// ─────────────────────────────────────────────────────────────────────────────
// 🔗 CONFIG
// ─────────────────────────────────────────────────────────────────────────────
const SITE_BASE_URL = 'https://www.travelcardinsider.com'; // Your website's base URL
const PAGE_PATH = '/reviews/chase-vs-capital-one-travel-cards-2025';
const PAGE_URL = `${SITE_BASE_URL}${PAGE_PATH}`;
const SITE_NAME = 'Travel Card Insider';
const HERO_IMAGE_SRC = '/ian-dooley-3NCA3tbaE5I-unsplash (2).webp'; // ❗ Replace with your optimised hero image
const HERO_IMAGE_ALT = 'Chase and Capital One credit cards side-by-side, symbolizing a comparison for travel rewards in 2025.';
const DATE_PUBLISHED = '2025-05-27'; // ✏️ Update as per actual publish date
const DATE_MODIFIED = '2025-05-27'; // ✏️ Update whenever you edit copy

// ─────────────────────────────────────────────────────────────────────────────
// 👤 AUTHOR INFO (Reused from your example file)
// ─────────────────────────────────────────────────────────────────────────────
const author = {
  name: 'Dilan Madushanka',
  title: 'Lead Travel Card Analyst',
  image: '/WhatsApp Image 2025-05-12 at 4.09.58 PM.jpeg', // ❗ Your 40x40px web‑optimised headshot
  imageLarge: '/WhatsApp Image 2025-05-12 at 4.09.58 PM.jpeg', // ❗ Your 60x60px for tooltip
  bio: 'Seasoned travel‑card analyst helping readers unlock elite travel perks & maximise credit card rewards.',
  expertise: [
    'Travel Credit Card Analysis',
    'Airline Rewards Strategy',
    'Hotel Points Optimisation',
    'Credit Card Analytics',
  ],
  social: {
    linkedin: 'https://www.linkedin.com/in/dilan-madushanka-b65293365',
    twitter: 'https://x.com/team_dilan',
    email: 'team@travelcardinsider.com',
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// 💳 CHASE & CAPITAL ONE CARD DATA
// ❗ Review and update placeholder imageSrc. Add ratings if desired.
// ❗ ENSURE all applyLink and ratesFeesLink are accurate and official.
// ─────────────────────────────────────────────────────────────────────────────
const chaseCapOneCardData = [
  {
    id: 'chaseSapphireReserve',
    name: 'Chase Sapphire Reserve®',
    issuer: 'Chase',
    imageSrc: '/sapphire_reserve_card.png', // ❗ Replace
    imageAlt: 'Chase Sapphire Reserve Card',
    annualFee: '$550',
    officialCardPageLink: 'https://creditcards.chase.com/rewards-credit-cards/sapphire/reserve',
    applyLink: 'https://creditcards.chase.com/rewards-credit-cards/sapphire/reserve',
    ratesFeesLink: 'https://sites.chase.com/services/creatives/pricingandterms.html/content/dam/pricingandterms/LGC56007.html', // Verify direct link to rates & fees
    learnMoreLink: '/cards/chase-sapphire-reserve', // Hypothetical internal link
    signUpBonus: "Typically around 60,000 points after meeting spending requirements (subject to Chase's 48-month rule).",
    earningRates: "5x points on flights and 10x on hotels/car rentals through Chase Travel℠ (after the first $300 annual travel spend); 3x on general travel and dining (also after the $300 spend).",
    flagshipBenefits: [
      "$300 Annual Travel Credit: Automatically applied to a broad range of travel purchases.",
      "Airport Lounge Access: Priority Pass™ Select membership and access to Chase Sapphire Lounges by The Club.",
      "Global Entry/TSA PreCheck®/NEXUS Credit: Up to $120 credit every four years.",
      "Enhanced Point Redemption: Points are worth 50% more (1.5 cents each) when redeemed for travel via Chase Travel℠.",
      "Robust Travel & Purchase Protections: Includes primary auto rental CDW, trip cancellation/interruption insurance."
    ],
    userTake: 'Users praise its ease of use for the $300 travel credit.',
  },
  {
    id: 'chaseSapphirePreferred',
    name: 'Chase Sapphire Preferred®',
    issuer: 'Chase',
    imageSrc: '/sapphire_preferred_card.png', // ❗ Replace
    imageAlt: 'Chase Sapphire Preferred Card',
    annualFee: '$95',
    officialCardPageLink: 'https://creditcards.chase.com/rewards-credit-cards/sapphire/preferred',
    applyLink: 'https://creditcards.chase.com/rewards-credit-cards/sapphire/preferred',
    ratesFeesLink: 'https://sites.chase.com/services/creatives/pricingandterms.html/content/dam/pricingandterms/LGC56014.html', // Verify direct link
    learnMoreLink: '/cards/chase-sapphire-preferred',
    signUpBonus: "Often 60,000 points, similar to the Reserve's initial spending requirement and 48-month rule.",
    earningRates: "5x points on travel via Chase Travel℠ (excluding hotel purchases qualifying for the $50 hotel credit), 2x on other travel, 3x on dining, online groceries (exclusions apply), and select streaming services.",
    valueProposition: [
      "$50 Annual Chase Travel Hotel Credit.",
      "Enhanced Point Redemption: Points are worth 25% more (1.25 cents each) for travel booked through Chase Travel℠.",
      "10% Anniversary Points Boost: Bonus points equal to 10% of total purchases made in points from the previous year.",
      "Strong Travel & Purchase Protections: Includes primary auto rental CDW."
    ]
  },
  {
    id: 'capitalOneVentureX',
    name: 'Capital One Venture X Rewards Credit Card',
    issuer: 'Capital One',
    imageSrc: '/venturex-cg-static-card-1000x630-2.avif', // ❗ Replace
    imageAlt: 'Capital One Venture X Rewards Credit Card',
    annualFee: '$395',
    officialCardPageLink: 'https://www.capitalone.com/credit-cards/venture-x/',
    applyLink: 'https://www.capitalone.com/credit-cards/venture-x/',
    ratesFeesLink: 'https://www.capitalone.com/credit-cards/venture-x/', // Verify direct link
    learnMoreLink: '/cards/capital-one-venture-x',
    signUpBonus: "Typically 75,000 miles after meeting spending requirements (worth $750 for travel).",
    earningRates: "Unlimited 2X miles on all purchases; 5X on flights and 10X on hotels/rental cars booked via Capital One Travel.",
    premiumPerks: [
      "$300 Annual Travel Credit: For bookings through Capital One Travel.",
      "10,000 Anniversary Bonus Miles: Worth $100 towards travel, starting the first anniversary.",
      "Airport Lounge Access: Unlimited access to Capital One Lounges and Priority Pass™ Select.",
      "Global Entry/TSA PreCheck® Credit.",
      "Cell Phone Protection."
    ],
    userTake: 'Users find Capital One Lounges "exceptional".',
  },
  {
    id: 'capitalOneVenture',
    name: 'Capital One Venture Rewards Credit Card',
    issuer: 'Capital One',
    imageSrc: '/venture_cardart_prim_323x203-1.avif', // ❗ Replace
    imageAlt: 'Capital One Venture Rewards Credit Card',
    annualFee: '$95',
    officialCardPageLink: 'https://www.capitalone.com/credit-cards/venture/',
    applyLink: 'https://www.capitalone.com/credit-cards/venture/',
    ratesFeesLink: 'https://www.capitalone.com/credit-cards/venture/', // Verify direct link
    learnMoreLink: '/cards/capital-one-venture',
    signUpBonus: "Often 75,000 miles (worth $750 for travel).",
    earningRates: "Unlimited 2X miles on every purchase; 5X on hotels and rental cars via Capital One Travel.",
    solidValue: [
      "Includes Global Entry/TSA PreCheck® credit."
    ],
    userTake: 'User Mike Dodge calls it a "great one-card wallet solution."',
  },
  {
    id: 'capitalOneVentureOne',
    name: 'Capital One VentureOne Rewards Credit Card',
    issuer: 'Capital One',
    imageSrc: '/ventureone_cardart_prim_323x203.avif', // ❗ Replace
    imageAlt: 'Capital One VentureOne Rewards Credit Card',
    annualFee: '$0', // No annual fee
    officialCardPageLink: 'https://www.capitalone.com/credit-cards/ventureone/', // Example link, verify
    applyLink: 'https://www.capitalone.com/credit-cards/ventureone/', // Example link, verify
    ratesFeesLink: 'https://www.capitalone.com/credit-cards/ventureone/', // Verify direct link
    learnMoreLink: '/cards/capital-one-ventureone',
    earningRates: "1.25X miles on all purchases; 5X on hotels/rental cars via Capital One Travel.",
    description: "A no-annual-fee option good for beginners."
  }
];

// ─────────────────────────────────────────────────────────────────────────────
// 🧠 HELPERS
// ─────────────────────────────────────────────────────────────────────────────
function generateJsonLD() {
  const itemListElements = chaseCapOneCardData.map((card, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    item: {
      '@type': 'Product',
      name: card.name,
      url: `${SITE_BASE_URL}${card.learnMoreLink}`,
      image: `${SITE_BASE_URL}${card.imageSrc}`,
      description: card.signUpBonus || card.earningRates, // Pick a prominent feature
      brand: {
        '@type': 'Brand',
        name: card.issuer,
      },
      manufacturer: { '@type': 'Organization', name: card.issuer === 'Chase' ? 'Chase Bank' : 'Capital One' },
      offers: {
        '@type': 'Offer',
        priceCurrency: 'USD',
        price: card.annualFee.replace('$', ''),
      },
      // aggregateRating: { // Uncomment and populate if you have ratings
      //   '@type': 'AggregateRating',
      //   ratingValue: card.ratingValue || '4.5', // Example
      //   bestRating: '5', // Example
      //   ratingCount: card.reviewCount || '1', // Example
      // },
    },
  }));

  const breadcrumbsSchema = {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_BASE_URL, },
      { '@type': 'ListItem', position: 2, name: 'Reviews', item: `${SITE_BASE_URL}/reviews`, },
      { '@type': 'ListItem', position: 3, name: 'Chase vs. Capital One Travel Cards 2025', item: PAGE_URL, },
    ],
  };

  const articleSchema = {
    '@type': 'ReviewNewsArticle', // More specific type for review articles
    mainEntityOfPage: { "@type": "WebPage", "@id": PAGE_URL },
    headline: 'Chase vs. Capital One: Best Travel Credit Cards in 2025',
    description: 'In-depth 2025 review comparing Chase and Capital One travel credit cards. Analyze rewards, benefits, fees, and user experiences to choose the best card for your travels.',
    image: [`${SITE_BASE_URL}${HERO_IMAGE_SRC}`], // You can add more images if relevant
    author: {
      '@type': 'Person',
      name: author.name,
      url: author.social.linkedin, // Link to a profile page if available
      image: `${SITE_BASE_URL}${author.imageLarge || author.image}`,
      jobTitle: author.title,
      description: author.bio.substring(0, 200), // Keep it concise
      sameAs: Object.values(author.social).filter(Boolean)
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_BASE_URL}/images/logo-120.png`, // ❗ Ensure this logo exists and path is correct
      },
    },
    datePublished: DATE_PUBLISHED,
    dateModified: DATE_MODIFIED,
    // For reviews, you can specify the item being reviewed
    itemReviewed: {
        '@type': 'ProductGroup', // Reviewing a group of products
        name: 'Chase and Capital One Travel Credit Cards',
        description: 'A comparison of leading travel credit cards from Chase and Capital One for 2025.'
        // You could list product IDs here if they have globally unique identifiers recognized by schema.org
    }
  };

  return JSON.stringify(
    {
      '@context': 'https://schema.org',
      '@graph': [
        articleSchema,
        { '@type': 'ItemList', name: 'Compared Travel Credit Cards 2025', url: PAGE_URL, numberOfItems: chaseCapOneCardData.length, itemListElement: itemListElements, mainEntityOfPage: PAGE_URL },
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
function ChaseVsCapitalOnePage2025() {
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


  const renderCardDetails = (cardId) => {
    const card = chaseCapOneCardData.find(c => c.id === cardId);
    if (!card) return null;

    return (
      <div key={card.id} className={`${styles.cardDetailSection} ${styles.cardSeparator}`}>
        <div className={styles.cardHeader}>
            <div className={styles.cardImageContainer}>
              <Image
                src={card.imageSrc}
                alt={card.imageAlt}
                width={150} 
                height={95}  
                objectFit="contain"
                // loading={index > 1 ? "lazy" : undefined} // Lazy load based on index if mapping multiple
              />
            </div>
            <div className={styles.cardTitleRating}>
              <h3>{card.name}</h3>
              {/* {card.ratingStars > 0 && <StarRating rating={card.ratingStars} />} */}
              {/* {card.ratingValue > 0 && <span className={styles.ratingValue}>Our Rating: {card.ratingValue.toFixed(1)}/10</span>} */}
            </div>
        </div>
        <ul>
          <li><strong>Annual Fee:</strong> {card.annualFee}</li>
          {card.signUpBonus && <li><strong>Sign-Up Bonus:</strong> {card.signUpBonus}</li>}
          {card.earningRates && <li><strong>Earning Rates:</strong> {card.earningRates}</li>}
          {card.flagshipBenefits && card.flagshipBenefits.length > 0 && (
            <li><strong>Flagship Benefits:</strong>
              <ul>{card.flagshipBenefits.map((benefit, i) => <li key={i}>{benefit}</li>)}</ul>
            </li>
          )}
          {card.premiumPerks && card.premiumPerks.length > 0 && (
            <li><strong>Premium Perks:</strong>
              <ul>{card.premiumPerks.map((perk, i) => <li key={i}>{perk}</li>)}</ul>
            </li>
          )}
          {card.valueProposition && card.valueProposition.length > 0 && (
            <li><strong>Value Proposition:</strong>
              <ul>{card.valueProposition.map((val, i) => <li key={i}>{val}</li>)}</ul>
            </li>
          )}
           {card.solidValue && card.solidValue.length > 0 && (
            <li><strong>Solid Value:</strong>
              <ul>{card.solidValue.map((val, i) => <li key={i}>{val}</li>)}</ul>
            </li>
          )}
          {card.description && <li>{card.description}</li>}
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
              href={card.ratesFeesLink} // Ensure this points to actual rates and fees
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
    );
  };


  return (
    <>
      <Head>
        {/* Core */}
        <title>Chase vs. Capital One: Best Travel Cards 2025 | {SITE_NAME}</title>
        <meta
          name="description"
          content="In-depth 2025 review comparing Chase and Capital One travel credit cards. Analyze rewards, benefits, fees, and user experiences to choose the best card."
        />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="keywords" content="chase vs capital one, travel credit cards 2025, chase sapphire reserve, chase sapphire preferred, capital one venture x, capital one venture, ultimate rewards, capital one miles, best travel rewards" />
        <link rel="canonical" href={PAGE_URL} />

        {/* Open Graph */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content={`Chase vs. Capital One: Which Offers the Best Travel Credit Cards in 2025? | ${SITE_NAME}`} />
        <meta property="og:description" content="Our expert analysis of Chase and Capital One's top travel cards for 2025. Compare rewards, lounge access, fees, and more." />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:site_name" content={SITE_NAME} />
        <meta property="og:image" content={`${SITE_BASE_URL}${HERO_IMAGE_SRC}`} />
        <meta property="og:locale" content="en_US" />
        <meta property="article:published_time" content={DATE_PUBLISHED} />
        <meta property="article:modified_time" content={DATE_MODIFIED} />
        <meta property="article:author" content={author.name} />
        <meta property="article:tag" content="Chase" />
        <meta property="article:tag" content="Capital One" />
        <meta property="article:tag" content="Travel Credit Cards" />
        <meta property="article:tag" content="2025 Review" />


        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Chase vs. Capital One: 2025's Top Travel Card Showdown" />
        <meta name="twitter:description" content="Ultimate Rewards or Capital One Miles? Sapphire or Venture? We break down which card issuer wins for your wallet in 2025." />
        <meta name="twitter:image" content={`${SITE_BASE_URL}${HERO_IMAGE_SRC}`} />
        {author.social.twitter && <meta name="twitter:creator" content={`@${author.social.twitter.split('/').pop()}`} />}


        {/* Geo‑targeting & Language */}
        <meta name="geo.region" content="US" />
        <meta name="geo.placename" content="United States" />
        <meta name="language" content="en-US" />
        <meta name="distribution" content="US" />
        <link rel="alternate" hrefLang="en-us" href={PAGE_URL} />


        {/* Preloads - ❗ Update font paths if different */}
        <link rel="preload" href={HERO_IMAGE_SRC} as="image" />
        <link rel="preload" href="/fonts/roboto-condensed-v25-latin-regular.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        {/* Add preloads for other critical fonts used above the fold if any */}

        {/* JSON‑LD */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: generateJsonLD() }} />
      </Head>

      <main className={styles.reviewContainer}>
        <header className={styles.reviewHeader}>
          <h1>Chase vs. Capital One: Which Issuer Offers the Best Travel Credit Cards in 2025?</h1>
          
          <div /* Author Bio Container */
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
              {showTooltip && ( /* Author Tooltip */
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
            src={HERO_IMAGE_SRC}
            alt={HERO_IMAGE_ALT}
            layout="responsive"
            width={900} // Example intrinsic width
            height={450} // Example intrinsic height
            objectFit="cover"
            priority
            className={styles.heroImage}
          />
        </div>
        
        <p className={styles.disclaimer}>
          Disclaimer: Card offers, terms, and benefits are subject to change and are accurate as of {new Date(DATE_MODIFIED).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}. 
          Please verify all details directly with the card issuer before applying by visiting their official website. 
          This page may contain affiliate links which help support our work at no extra cost to you. 
          The opinions expressed here are the author's alone, not those of any bank, credit card issuer, airlines or hotel chain, and have not been reviewed, approved or otherwise endorsed by any of these entities.
        </p>

        <article>
          <section className={styles.reviewSection}>
            <p>For the modern US traveler, a travel credit card is more than just a payment method; it’s a strategic tool. In 2025, with a keen eye for value-driven experiences, choosing the right card issuer is paramount. It can unlock significant savings and transform everyday spending into dream vacations. Among the leaders, Chase and Capital One stand out, each with a distinct approach to rewards and benefits. Chase, with its established Ultimate Rewards program and prestigious Sapphire cards, has long been a favorite. Capital One has gained serious traction with its straightforward Capital One Miles program and the popular Venture series. This review will dissect their offerings, incorporating real user experiences to help you decide which ecosystem best fits your travel aspirations.</p>
          </section>

          <section className={styles.reviewSection}>
            <h2>Meet the Contenders: Chase's Travel Card Arsenal</h2>
            <p>Chase offers a formidable lineup, anchored by the Sapphire brand and the versatile Ultimate Rewards program, catering to various traveler needs.</p>
            
            <h3>A. The Premium Powerhouse: Chase Sapphire Reserve®</h3>
            <p>Designed for frequent travelers valuing comprehensive benefits, the Chase Sapphire Reserve® carries a $550 annual fee. <a href="https://creditcards.chase.com/rewards-credit-cards/sapphire/reserve" target="_blank" rel="noopener noreferrer sponsored">(Official Chase Page)</a></p>
            {renderCardDetails('chaseSapphireReserve')}

            <h3>B. The Savvy Traveler's Choice: Chase Sapphire Preferred®</h3>
            <p>A popular mid-tier option with a $95 annual fee, the Chase Sapphire Preferred® offers a strong rewards-to-fee ratio. <a href="https://creditcards.chase.com/rewards-credit-cards/sapphire/preferred" target="_blank" rel="noopener noreferrer sponsored">(Official Chase Page)</a></p>
            {renderCardDetails('chaseSapphirePreferred')}

            <h3>C. The Engine Room: Chase Ultimate Rewards®</h3>
            <p>The Ultimate Rewards program is prized for flexibility and high-value redemption potential.</p>
            <h4>Earning Power:</h4>
            <p>Amplified by the "Chase Trifecta" strategy – combining a Sapphire card with Freedom and/or Ink cards, allowing pooled points from broader bonus categories.</p>
            <h4>Redemption Flexibility:</h4>
            <ul>
              <li><strong>Chase Travel Portal:</strong> Convenient, with boosted point values for Sapphire cardholders. However, user experiences vary, with some reporting "Chase Travel Nightmares" involving booking issues and refund delays. As one user, "AeroNoob333," found, "Booked a flight through the portal for 34k points when it would have cost 45k points via a partner transfer," highlighting occasional good value.</li>
              <li><strong>Transfer to Airline & Hotel Partners:</strong> Often the most lucrative. 1:1 transfers to partners like United, Southwest, JetBlue, British Airways, Air Canada, and notably, World of Hyatt (for exceptional hotel value). Marriott and IHG are also partners. 
                <a href="https://creditcards.chase.com/rewards-credit-cards/sapphire/preferred" target="_blank" rel="noopener noreferrer sponsored">(Official Chase Partner Info found on card pages)</a> {/* Update if a more direct general link is better */}
              </li>
              <li><strong>Cash Back/Pay Yourself Back:</strong> Points are worth 1 cent for cash back. "Pay Yourself Back" allows redemptions against purchases in rotating categories, sometimes at elevated rates.</li>
            </ul>
            <h4>Sweet Spot Examples:</h4>
            <p>Luxury Hyatt stays (e.g., Park Hyatt New York for 35-45k points/night), business class to Europe via Iberia Plus, or ANA premium cabins to Japan via Virgin Atlantic.</p>

            <h3>D. Real Traveler Voices: The Chase Experience</h3>
            <h4>The Good:</h4>
            <p>Successful travel insurance claims (e.g., $25,000 rental car damage coverage in Scotland, trip delay reimbursements). The $300 Sapphire Reserve travel credit is consistently lauded.</p>
            <h4>The Challenges:</h4>
            <p>Besides portal issues, some face arduous insurance claim processes requiring extensive documentation. A significant concern is point security, highlighted by a "200k points gone" fraud incident where users felt Chase's initial response was lacking. Customer service experiences are inconsistent. Some long-term Reserve users question its value relative to the high fee.</p>
          </section>

          <section className={styles.reviewSection}>
            <h2>Exploring the Capital One Travel Card Landscape</h2>
            <p>Capital One has significantly bolstered its travel offerings with the Venture card suite, emphasizing straightforward rewards and valuable credits.</p>

            <h3>A. The Premium Contender: Capital One Venture X Rewards</h3>
            <p>Capital One’s answer to premium travel, the Venture X Rewards Credit Card, has a $395 annual fee. <a href="https://www.capitalone.com/credit-cards/venture-x/" target="_blank" rel="noopener noreferrer sponsored">(Official Capital One Page)</a></p>
            {renderCardDetails('capitalOneVentureX')}

            <h3>B. The Workhorse: Capital One Venture Rewards</h3>
            <p>A well-regarded mid-tier card with a $95 annual fee. <a href="https://www.capitalone.com/credit-cards/venture/" target="_blank" rel="noopener noreferrer sponsored">(Official Capital One Page)</a></p>
            {renderCardDetails('capitalOneVenture')}
            
            <h3>C. The Entry Point: Capital One VentureOne Rewards</h3>
            <p>A no-annual-fee option earning 1.25X miles on all purchases (5X on hotels/rental cars via Capital One Travel), good for beginners.</p>
            {renderCardDetails('capitalOneVentureOne')}

            <h3>D. Unpacking Capital One Miles</h3>
            <h4>Earning Simplicity:</h4>
            <p>Flat 2X earning on Venture/Venture X is a key appeal.</p>
            <h4>Redemption Pathways:</h4>
            <ul>
              <li><strong>Capital One Travel Portal:</strong> Redeem miles at 1 cent each. Features price prediction and price drop protection (up to $50 travel credit). User "princeyellow" saved over $400 in 2025 using these features.</li>
              <li><strong>Transfer to Airline & Hotel Partners:</strong> Over 15 partners (mostly 1:1), including British Airways, Air Canada, Avianca LifeMiles, and Turkish Airlines. Fewer direct major US airline partners than Chase, but strong international options. 
                <a href="https://www.capitalone.com/learn-grow/money-management/venture-miles-transfer-partnerships/" target="_blank" rel="noopener noreferrer sponsored">(Official Capital One Partner Info)</a>
              </li>
              <li><strong>Cover Travel Purchases:</strong> Redeem miles as statement credits against any travel purchase at 1 cent per mile – highly flexible.</li>
            </ul>
            <h4>Sweet Spot Examples:</h4>
            <p>Avianca LifeMiles for Star Alliance flights (e.g., 6,500 miles for short-haul United), Turkish Airlines business class to Europe (e.g., SFO-IST for 105k miles + taxes, saving thousands vs. cash, as user "Not-Anne-Hathaway" experienced).</p>

            <h3>E. Real Traveler Voices: The Capital One Experience</h3>
            <h4>The Good:</h4>
            <p>Venture X portal benefits (price drop/match) provide tangible savings. Simple mile redemption for statement credits is popular. Capital One Lounges are well-received. Customer service successes reported (e.g., hotel booking issue resolved with credit).</p>
            <h4>The Challenges:</h4>
            <p>Some users, like "wlau," report significant Capital One Travel portal booking engine issues (ticketing delays, fare downgrades, misleading hotel photos) and inconsistent customer service. Navigating some international partner programs can be tricky. Compensation as "travel credit" isn't always preferred over refunds.</p>
          </section>

          <section className={styles.reviewSection}>
            <h2>Head-to-Head: Chase vs. Capital One for 2025</h2>
            <h3>A. Annual Fees & Welcome Offers:</h3>
            <p>Venture X ($395) is cheaper than Sapphire Reserve ($550). Mid-tier Venture and Sapphire Preferred are both $95. Capital One often has nominally larger mile bonuses, but Chase points can yield higher per-point value via transfers (e.g., TPG values 60k UR points ~$1230 vs. $750 for 75k Cap1 miles at 1 cpm). Sapphire Reserve's $300 travel credit is more flexible (broad application) than Venture X's (portal-only).</p>
            <h3>B. Earning Potential:</h3>
            <p>Chase excels with bonus categories (dining, travel, online groceries) and the "Trifecta" strategy for maximizing points. Capital One offers simpler flat 2X miles on Venture/Venture X. Both offer higher multipliers for portal bookings. Your spending habits dictate which is better.</p>
            <h3>C. Redemption Showdown:</h3>
            <ul>
              <li><strong>Travel Portals:</strong> Chase offers 1.25-1.5 cents per point; Capital One is 1 cent per mile but has price protection. Both have mixed user reviews regarding booking reliability.</li>
              <li><strong>Transfer Partners:</strong> Chase has strong US domestic airline partners (United, Southwest) and the high-value World of Hyatt. Capital One shines with diverse international airline partners offering unique sweet spots.</li>
              <li><strong>Sweet Spots:</strong> Chase: Hyatt stays, Iberia to Madrid. Capital One: Turkish Airlines business, Avianca for Star Alliance.</li>
            </ul>
            <h3>D. Core Travel Benefits:</h3>
            <p>Both offer Priority Pass on premium cards. Capital One Lounges are gaining an excellent reputation; Chase is expanding its Sapphire Lounge network. Both offer comprehensive travel/purchase protections on premium/mid-tier cards, but claim experiences vary. No foreign transaction fees on their main travel cards.</p>
            <h3>E. Card Ecosystem & Strategy:</h3>
            <p>Chase's "Trifecta" and co-branded card portfolio offer deep integration for optimizing Ultimate Rewards. Capital One's Savor/Venture pairing allows cash back to miles conversion. Chase’s ecosystem feels more layered for advanced optimizers.</p>
            <h3>F. User Sentiment & Problem Resolution:</h3>
            <p>Chase users love Ultimate Rewards flexibility (especially Hyatt) but cite "Chase Travel Nightmares" and point security concerns. Capital One users praise Venture X portal features and lounge quality but report booking errors. Both issuers face criticism for travel portal reliability, likely due to third-party providers.</p>
          </section>

          <section id="editors-essential-takeaways" className={`${styles.reviewSection} ${styles.eetaSection || ''}`}>
            <h2>Which Issuer Wins for Your Wallet in 2025?</h2>
            <p>The best choice is personal, depending on your travel habits, spending, and redemption preferences.</p>
            <ul>
              <li><strong>Luxury Traveler (Premium Perks & Lounges):</strong> Venture X for its lounges and lower fee. Sapphire Reserve if Chase Lounges are convenient and Ultimate Rewards (Hyatt) is prioritized.</li>
              <li><strong>Value-Conscious Traveler (Balancing Benefits & Fees):</strong> Sapphire Preferred (effectively $45 fee with hotel credit, strong UR value). Venture Rewards (simple 2X miles, Global Entry credit).</li>
              <li><strong>Points & Miles Strategist:</strong> Often Chase, for Hyatt transfers and "Trifecta" earning. Capital One for unique international airline sweet spots.</li>
              <li><strong>Simplicity Seekers:</strong> Capital One’s Venture cards with flat 2X earning and easy "cover travel purchases" redemption.</li>
              <li><strong>Concerned About Customer Service:</strong> Mixed reviews for both. Document everything if issues arise. Capital One's portal features proactively save money, potentially reducing service interactions. Chase's point fraud reports are a key concern for some.</li>
            </ul>
          </section>

          <section className={styles.reviewSection}>
            <h2>Conclusion: Your Journey, Your Card</h2>
            <p>There's no single winner in the 2025 Chase vs. Capital One matchup. Chase excels with the powerful Ultimate Rewards program, particularly for Hyatt transfers and optimized earning via its card ecosystem. However, its premium card has a higher fee, and its travel portal and point security have faced user criticism.</p>
            <p>Capital One, especially with Venture X, offers simplicity, innovative portal features delivering tangible savings, excellent proprietary lounges, and a competitive annual fee. Drawbacks include a less flexible travel credit on Venture X and occasional portal booking issues.</p>
            <p>Your optimal choice depends on your individual travel style and financial strategy. Do your research on the official Chase and Capital One websites for the latest terms before applying. This review provides a foundation, but thoughtful personal assessment will lead you to the card that best transforms your travel aspirations into rewarding realities.</p>
          </section>
        </article>
      </main>
    </>
  );
}

export default ChaseVsCapitalOnePage2025;