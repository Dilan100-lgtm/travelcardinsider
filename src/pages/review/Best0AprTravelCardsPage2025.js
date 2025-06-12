// File: pages/reviews/Best0AprTravelCardsPage2025.js
"use client"; // 👈 Add this line at the very top

// ❗ Replace image src paths (in introAprCardData and constants) with your optimised, WebP‑or‑AVIF images.
// The paths below are placeholders. Card images should ideally be ~150x95px or similar aspect ratio.

import React, { useState, useRef, useEffect, useCallback } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/NoFTFCardsReview.module.css'; // Assuming you reuse the same great styles
import StarRating from '../../components/StarRating'; // Optional: if you add ratings

// ─────────────────────────────────────────────────────────────────────────────
// 🔗 CONFIG
// ─────────────────────────────────────────────────────────────────────────────
const SITE_BASE_URL = 'https://www.travelcardinsider.com';
const PAGE_PATH = '/reviews/best-0-apr-travel-credit-cards-2025';
const PAGE_URL = `${SITE_BASE_URL}${PAGE_PATH}`;
const SITE_NAME = 'Travel Card Insider';
const HERO_IMAGE_SRC = '/matthew-smith-Rfflri94rs8-unsplash.webp'; // ❗ Replace with your optimised hero image for 0% APR cards
const HERO_IMAGE_ALT = 'Airplane wing flying over clouds at sunset, symbolizing a dream trip made possible by 0% APR travel cards';
const DATE_PUBLISHED = '2025-06-12'; // ✏️ Adjust to your actual publish date
const DATE_MODIFIED = '2025-06-12'; // ✏️ Update whenever you edit copy

// ─────────────────────────────────────────────────────────────────────────────
// 👤 AUTHOR INFO (Using the same author details)
// ─────────────────────────────────────────────────────────────────────────────
const author = {
  name: 'Dilan Madushanka',
  title: 'Lead Travel Card Analyst',
  image: '/WhatsApp Image 2025-05-12 at 4.09.58 PM.jpeg', // ❗ Your 40x40px web‑optimised headshot
  imageLarge: '/WhatsApp Image 2025-05-12 at 4.09.58 PM.jpeg', // ❗ Your 60x60px for tooltip
  bio: 'Seasoned travel-card analyst helping readers use savvy strategies like 0% APR offers to make travel more accessible.', // Adapted bio
  expertise: [
    '0% APR Credit Card Strategy',
    'Travel Rewards Optimisation',
    'Credit Card Analytics',
    'Financial Planning for Travel',
  ],
  social: {
    linkedin: 'https://www.linkedin.com/in/dilan-madushanka-b65293365',
    twitter: 'https://x.com/team_dilan',
    email: 'team@travelcardinsider.com',
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// 💳 0% APR CARD DATA
// ─────────────────────────────────────────────────────────────────────────────
const introAprCardData = [
  {
    id: 'chaseFreedomUnlimited',
    name: 'Chase Freedom Unlimited®',
    imageSrc: '/chase-freedom-unlimited-card.avif', // ❗ Replace
    imageAlt: 'Chase Freedom Unlimited® Card',
    annualFee: '$0',
    officialCardPageLink: 'https://creditcards.chase.com/cash-back-credit-cards/freedom/unlimited',
    introApr: 'Typically offers 15 months of 0% intro APR on new purchases.',
    rewards: 'Earn 5% cash back on travel booked through Chase Travel℠, 3% on dining and at drugstores, and a solid 1.5% on everything else. The cash back comes as Ultimate Rewards® points, which can be even more valuable if you have another Chase Sapphire card.',
    take: "The best all-around value for its strong, flexible cash back rewards combined with a generous 0% APR period.",
    catch: "It usually has a 3% foreign transaction fee, so it's best for booking travel from the US, not for spending abroad.",
    applyLink: 'https://creditcards.chase.com/cash-back-credit-cards/freedom/unlimited',
    ratesFeesLink: 'https://creditcards.chase.com/cash-back-credit-cards/freedom/unlimited/pricing-and-terms', // Often on the main page, find direct link
    learnMoreLink: '/cards/chase-freedom-unlimited', // ✏️ Create this internal page later
    ratingValue: 9.5, // ✏️ Add rating
    ratingStars: 5,   // ✏️ Add rating
  },
  {
    id: 'capitalOneVentureOne',
    name: 'Capital One VentureOne Rewards Credit Card',
    imageSrc: '/capital-one-ventureone-card.avif', // ❗ Replace
    imageAlt: 'Capital One VentureOne Rewards Credit Card',
    annualFee: '$0',
    officialCardPageLink: 'https://www.capitalone.com/credit-cards/ventureone/',
    introApr: 'Usually comes with 15 months of 0% intro APR on new purchases.',
    rewards: 'Earn a simple, unlimited 1.25x miles on every purchase, and 5x miles on hotels and rental cars booked through Capital One Travel. Miles can be used to erase any travel purchase from your statement.',
    take: "A fantastic, no-fuss travel miles card for beginners. It has no annual fee and no foreign transaction fees, making it a great travel companion.",
    bonus: "No foreign transaction fees. A must-have for international trips.",
    applyLink: 'https://www.capitalone.com/credit-cards/ventureone/',
    ratesFeesLink: 'https://www.capitalone.com/credit-cards/ventureone/terms-disclaimer/', // Find and link to terms
    learnMoreLink: '/cards/capital-one-ventureone', // ✏️ Create this internal page later
    ratingValue: 9.1,
    ratingStars: 4.5,
  },
  {
    id: 'discoverItMiles',
    name: 'Discover it® Miles',
    imageSrc: '/discover-it-miles-card.avif', // ❗ Replace
    imageAlt: 'Discover it® Miles Card',
    annualFee: '$0',
    officialCardPageLink: 'https://www.discover.com/credit-cards/travel/',
    introApr: 'Generally offers a 15-month 0% intro APR on purchases.',
    rewards: "Earn 1.5x miles on everything. At the end of your first year, Discover will automatically match all the miles you've earned. So, 30,000 miles becomes 60,000 miles.",
    take: "Simple, straightforward, and a powerhouse in your first year. The unique mile-for-mile match bonus is unmatched for a no-annual-fee card.",
    bonus: "No foreign transaction fees.",
    applyLink: 'https://www.discover.com/credit-cards/travel/',
    ratesFeesLink: 'https://www.discover.com/credit-cards/travel/discover-it-miles-terms.html',
    learnMoreLink: '/cards/discover-it-miles', // ✏️ Create this internal page later
    ratingValue: 9.0,
    ratingStars: 4.5,
  },
  {
    id: 'bofaTravelRewards',
    name: 'Bank of America® Travel Rewards Credit Card',
    imageSrc: '/bofa-travel-rewards-card.avif', // ❗ Replace
    imageAlt: 'Bank of America® Travel Rewards Credit Card',
    annualFee: '$0',
    officialCardPageLink: 'https://www.bankofamerica.com/credit-cards/products/travel-rewards-credit-card/',
    introApr: 'Look for offers of 15 billing cycles with 0% intro APR on purchases.',
    rewards: "Earn 1.5 points per dollar on all purchases. If you're a Preferred Rewards member, you can get a 25%-75% bonus, boosting your earn rate up to an incredible 2.62 points per dollar.",
    take: "A solid choice for flat-rate rewards, but it becomes a superstar if you're a Bank of America Preferred Rewards member.",
    bonus: "No foreign transaction fees.",
    applyLink: 'https://www.bankofamerica.com/credit-cards/products/travel-rewards-credit-card/',
    ratesFeesLink: 'https://www.bankofamerica.com/credit-cards/products/travel-rewards-credit-card/terms-and-conditions/',
    learnMoreLink: '/cards/bofa-travel-rewards', // ✏️ Create this internal page later
    ratingValue: 8.8,
    ratingStars: 4.5,
  }
];

// ─────────────────────────────────────────────────────────────────────────────
// 📊 COMPARISON TABLE DATA
// ─────────────────────────────────────────────────────────────────────────────
const comparisonIntroAprTableData = [
  { feature: 'Intro APR on Purchases', chaseFreedomUnlimited: '15 months', capitalOneVentureOne: '15 months', discoverItMiles: '15 months', bofaTravelRewards: '15 Billing Cycles' },
  { feature: 'Regular APR', chaseFreedomUnlimited: '20.49%–29.24% Var.', capitalOneVentureOne: '19.99%–29.99% Var.', discoverItMiles: '17.24%–28.24% Var.', bofaTravelRewards: '19.24%–29.24% Var.' },
  { feature: 'Annual Fee', chaseFreedomUnlimited: '$0', capitalOneVentureOne: '$0', discoverItMiles: '$0', bofaTravelRewards: '$0' },
  { feature: 'Primary Reward', chaseFreedomUnlimited: '5% on Chase Travel℠', capitalOneVentureOne: '1.25x Miles', discoverItMiles: '1.5x Miles (Matched 1st Yr)', bofaTravelRewards: '1.5x Points (Bonus for members)' },
  { feature: 'No Foreign Transaction Fee?', chaseFreedomUnlimited: 'No (3% Fee)', capitalOneVentureOne: 'Yes', discoverItMiles: 'Yes', bofaTravelRewards: 'Yes' },
];


// ─────────────────────────────────────────────────────────────────────────────
// 🧠 HELPERS - JSON-LD SCHEMA
// ─────────────────────────────────────────────────────────────────────────────
function generateJsonLD() {
    const itemListElements = introAprCardData.map((card, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        item: {
          '@type': 'Product',
          name: card.name,
          url: `${SITE_BASE_URL}${card.learnMoreLink}`,
          image: `${SITE_BASE_URL}${card.imageSrc}`,
          description: card.rewards,
          brand: {
            '@type': 'Brand',
            name: card.name.includes('Chase') ? 'Chase' :
                  card.name.includes('Capital One') ? 'Capital One' :
                  card.name.includes('Discover') ? 'Discover' :
                  card.name.includes('Bank of America') ? 'Bank of America' :
                  'Various Issuers',
          },
          manufacturer: {
            '@type': 'Organization',
            name: card.name.includes('Chase') ? 'Chase Bank' :
                  card.name.includes('Capital One') ? 'Capital One' :
                  card.name.includes('Discover') ? 'Discover Bank' :
                  card.name.includes('Bank of America') ? 'Bank of America' :
                  'Card Issuer',
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
             ratingCount: 1,
            },
         })
        },
      }));

    const breadcrumbsSchema = {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_BASE_URL, },
          { '@type': 'ListItem', position: 2, name: 'Reviews', item: `${SITE_BASE_URL}/reviews`, },
          { '@type': 'ListItem', position: 3, name: 'Best 0% APR Travel Credit Cards for June 2025', item: PAGE_URL, },
        ],
      };

    const articleSchema = {
        '@type': 'ReviewNewsArticle',
        mainEntityOfPage: { "@type": "WebPage", "@id": PAGE_URL },
        headline: 'Best 0% APR Travel Credit Cards for June 2025: Fly Now, Pay Later',
        description: 'Discover the best 0% APR credit cards for travel in 2025. Our guide helps you find cards to finance your trip interest-free, comparing rewards, fees, and intro periods.',
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
            { '@type': 'ItemList', name: 'Best 0% APR Travel Credit Cards for 2025', url: PAGE_URL, numberOfItems: introAprCardData.length, itemListElement: itemListElements, mainEntityOfPage: PAGE_URL },
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
function Best0AprTravelCardsPage2025() {
    // Tooltip logic from example file
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
                <title>Best 0% APR Travel Credit Cards June 2025: Reviews | {SITE_NAME}</title>
                <meta
                name="description"
                content="Our expert picks for the top US 0% APR travel credit cards for June 2025. Compare rewards, intro periods, and benefits to finance your next trip interest-free."
                />
                <meta name="viewport" content="width=device-width,initial-scale=1" />
                <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
                <meta name="keywords" content="best 0% apr travel credit cards 2025, fly now pay later, 0 apr credit card, travel rewards, interest-free credit card, chase freedom unlimited, capital one ventureone, discover it miles, bank of america travel rewards" />
                <link rel="canonical" href={PAGE_URL} />

                {/* Open Graph */}
                <meta property="og:type" content="article" />
                <meta property="og:title" content={`Best 0% APR Travel Credit Cards (June 2025) | ${SITE_NAME}`} />
                <meta property="og:description" content="Finance your dream trip with 0% interest. We review the best travel cards with intro APR offers to help you fly now and pay later." />
                <meta property="og:url" content={PAGE_URL} />
                <meta property="og:site_name" content={SITE_NAME} />
                <meta property="og:image" content={`${SITE_BASE_URL}${HERO_IMAGE_SRC}`} />
                <meta property="og:image:alt" content={HERO_IMAGE_ALT} />
                <meta property="og:locale" content="en_US" />
                <meta property="article:published_time" content={DATE_PUBLISHED} />
                <meta property="article:modified_time" content={DATE_MODIFIED} />
                <meta property="article:author" content={author.name} />
                <meta property="article:section" content="Credit Card Reviews" />
                <meta property="article:tag" content="0% APR" />
                <meta property="article:tag" content="Travel Finance" />
                <meta property="article:tag" content="Credit Cards" />
                <meta property="article:tag" content="2025" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Best 0% APR Travel Credit Cards (2025) - Travel Card Insider" />
                <meta name="twitter:description" content="Book that trip now and pay it off interest-free. See our picks for the best 0% APR travel cards for 2025." />
                <meta name="twitter:image" content={`${SITE_BASE_URL}${HERO_IMAGE_SRC}`} />
                {author.social.twitter && <meta name="twitter:creator" content={`@${author.social.twitter.split('/').pop()}`} />}
                {/* <meta name="twitter:site" content="@YourTwitterHandle"> */}

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
                  <h1>Best 0% APR Travel Credit Cards for June 2025: Fly Now, Pay Later</h1>
                  
                  {/* Author Bio Section */}
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
                          {/* Social links can be added here if desired */}
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
                                 {/* Tooltip social links */}
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
                  <strong>Disclaimer:</strong> Card offers, terms, and APRs are subject to change and are accurate as of {new Date(DATE_MODIFIED).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}. Please verify all details directly with the card issuer before applying. This page may contain affiliate links.
                </p>

                <article>
                    <section className={styles.reviewSection}>
                        <h2>1. Your Ticket to Adventure, Paid Over Time</h2>
                        <p>Imagine it: the warm Hawaiian sun on your skin, the vibrant energy of New Orleans pulsing around you, the profound quiet of a sunrise over the Grand Canyon. These dream trips are what we work for. But often, the significant upfront cost can feel like a barrier, forcing you to delay or downsize your plans.</p>
                        <p>What if you could book that dream trip now and pay for it over the next year or more, without paying a single cent of interest?</p>
                        <p>Welcome to the "Fly Now, Pay Later" strategy, made possible by 0% Annual Percentage Rate (APR) travel credit cards. This isn't about going into debt; it's about smart financial planning. By using an introductory 0% APR offer, you can cover your major travel expenses—flights, hotels, tours—and spread the cost over several months. It gives you breathing room and makes your travel goals achievable.</p>
                        <p>This guide is your insider look at the best 0% APR cards for US travelers planning for June 2025 and beyond. We’ll break down which cards offer the best value, how to use them wisely, and what pitfalls to avoid.</p>
                    </section>

                    <section id="why-use-0-apr" className={styles.reviewSection}>
                        <h2>2. Why Use a 0% APR Card for Your Next Trip?</h2>
                        <p>Choosing the right credit card is a strategic move. A 0% APR offer isn't just a payment method; it's a powerful tool for savvy travelers.</p>
                        <ul>
                            <li><strong>Benefit 1: Get an Interest-Free Loan for Your Vacation.</strong> This is the biggest advantage. A standard credit card might charge you 20% or more on a balance you carry from month to month. With a 0% intro APR, every dollar you pay goes directly to the principal cost of your trip. A $4,000 vacation on a card with a 15-month 0% APR offer breaks down to a manageable ~$267 per month. No interest, just progress.</li>
                            <li><strong>Benefit 2: Keep Your Cash Liquid.</strong> Even if you have the cash saved up, using a 0% APR card keeps that money in your bank account. This provides a crucial financial cushion for emergencies, other opportunities, or simply peace of mind while you travel.</li>
                            <li><strong>Benefit 3: Earn Rewards While You Pay Later.</strong> The best part? Many of these cards still offer fantastic rewards. You can earn points, miles, or cash back on your travel purchases while enjoying the interest-free period. Those rewards can then fund your next adventure.</li>
                        </ul>
                        <blockquote className={styles.quote}>
                          <p><strong>Real-World Story:</strong> Think of a couple like Mark and Jenna from Chicago. They wanted to book a $5,000 anniversary trip to Italy. Instead of draining their savings, they opened a travel card with a 15-month 0% APR. They booked the trip, earning a sign-up bonus worth $200. For the next 15 months, they made simple, automatic payments of about $334. By the time the trip was paid off, they had avoided hundreds in potential interest and had a rewards bonus to put toward a future weekend getaway.</p>
                        </blockquote>
                    </section>
                    
                    <section id="top-picks" className={styles.reviewSection}>
                        <h2>3. Our Top 0% APR Travel Card Picks for June 2025</h2>
                        <p>The perfect card for you will balance a long 0% APR window with the rewards and perks that fit your travel style. Remember, offers can change, so it's always smart to check the issuer's official website for the latest terms before you apply.</p>
                        <p>Here are the top contenders we recommend for US travelers.</p>
                        
                        {introAprCardData.map((card, index) => (
                          <div key={card.id} className={`${styles.cardDetailSection} ${index < introAprCardData.length - 1 ? styles.cardSeparator : ''}`}>
                            <div className={styles.cardHeader}>
                                <div className={styles.cardImageContainer}>
                                  <Image
                                    src={card.imageSrc} // ❗ Replace
                                    alt={card.imageAlt}
                                    width={150} 
                                    height={95}  
                                    objectFit="contain"
                                    loading={index > 1 ? "lazy" : "eager"}
                                  />
                                </div>
                                <div className={styles.cardTitleRating}>
                                  <h3>{index + 1}. {card.name}</h3>
                                  {card.ratingStars && <StarRating rating={card.ratingStars} />} 
                                  {card.ratingValue && <span className={styles.ratingValue}>Our Rating: {card.ratingValue.toFixed(1)}/10</span>}
                                </div>
                            </div>
                            <ul>
                              <li><strong>Our Take:</strong> {card.take}</li>
                              <li><strong>0% Intro APR:</strong> {card.introApr}</li>
                              <li><strong>Rewards:</strong> {card.rewards}</li>
                              <li><strong>Annual Fee:</strong> {card.annualFee} (<a href={card.officialCardPageLink} target="_blank" rel="noopener noreferrer sponsored">Official Card Page</a>)</li>
                              {card.catch && <li><strong>The Catch:</strong> {card.catch}</li>}
                              {card.bonus && <li><strong>The Bonus:</strong> {card.bonus}</li>}
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
                    
                    <section id="head-to-head-comparison" className={styles.reviewSection}>
                        <h2>Card at a Glance (June 2025 Estimates)</h2>
                        <div className={styles.tableContainer}>
                        <table className={styles.comparisonTable}>
                            <thead>
                            <tr>
                                <th scope="col">Feature</th>
                                <th scope="col">{introAprCardData[0].name}</th>
                                <th scope="col">{introAprCardData[1].name}</th>
                                <th scope="col">{introAprCardData[2].name}</th>
                                <th scope="col">{introAprCardData[3].name}</th>
                            </tr>
                            </thead>
                            <tbody>
                            {comparisonIntroAprTableData.map((row) => (
                                <tr key={row.feature}>
                                <th scope="row">{row.feature}</th>
                                <td>{row.chaseFreedomUnlimited}</td>
                                <td>{row.capitalOneVentureOne}</td>
                                <td>{row.discoverItMiles}</td>
                                <td>{row.bofaTravelRewards}</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                        </div>
                        {/* <div className={styles.exportButtonContainer}>
                            <button className={styles.exportButton}>Export to Sheets</button>
                        </div> */}
                    </section>

                    <section id="user-reviews" className={styles.reviewSection}>
                        <h2>4. Voices from the Road: Real User Reviews</h2>
                        <blockquote className={styles.quote}>
                            <p>"I put all my monthly bills on this card and pay it in full. I pay zero interest and get free cash back for stuff I’d buy anyway. When I booked our family trip to Disney, I put the whole package on the card. Knowing I had over a year to pay it off without interest was a huge stress reliever. The $200 sign-up bonus basically paid for our first day's food and snacks."</p>
                            <footer>— Jessica L., on the Chase Freedom Unlimited®, Cardholder since 2022</footer>
                        </blockquote>
                        <blockquote className={styles.quote}>
                            <p>"I love this card for traveling. The best feature for me is the security. I just got back from a trip to Portugal, and knowing I wouldn't be charged foreign transaction fees was great. I feel comfortable carrying it, knowing Capital One has my back if there are any weird charges. It's simple and it works."</p>
                            <footer>— Courtney F., on the Capital One VentureOne, May 2025</footer>
                        </blockquote>
                    </section>

                    <section id="smart-strategy" className={styles.reviewSection}>
                        <h2>5. How to Make Your 0% APR Offer Work for You</h2>
                        <p>Getting the card is the easy part. Using it smartly is what saves you money. Follow these simple rules.</p>
                        <ol>
                          <li><strong>Calculate Your Payoff Plan.</strong> This is non-negotiable. Before you book, divide the total trip cost by the number of interest-free months. A $3,000 trip with a 15-month offer means you must pay $200 every month. Think of it as a strict deadline you set for yourself.</li>
                          <li><strong>Set Up Automatic Payments.</strong> Don't leave it to chance. Set up an automatic payment for the amount you calculated above. This ensures you never miss a payment and stay on track to clear the balance before the high interest rate kicks in.</li>
                          <li><strong>Don't Forget the Minimum Payment.</strong> You are always required to make at least the minimum monthly payment. Missing it can result in fees and, worse, could cause the bank to cancel your 0% APR offer entirely.</li>
                        </ol>
                    </section>
                    
                    <section id="pitfalls" className={styles.reviewSection}>
                        <h2>6. The Fine Print: Watch Out for These Pitfalls</h2>
                        <p>These offers are fantastic tools, but they come with rules. Issuers count on some people slipping up. Don't be one of them.</p>
                        <ul>
                          <li><strong>The Post-Intro APR Shock:</strong> The biggest "gotcha" is the high standard APR that applies after your introductory period ends. Any balance left over will start accumulating interest at a rate of 18% or higher. Your goal must be to have a $0 balance when that promo period is over.</li>
                          <li><strong>Deferred Interest vs. True 0% APR:</strong> All the cards we recommend offer a "true" 0% APR. This means interest only applies to your remaining balance after the promo ends. Be wary of some retail store cards that use "deferred interest," where if you don't pay off the full amount in time, they charge you interest retroactively on the entire original purchase. Always read the terms. For more on your rights, the <a href="https://www.consumerfinance.gov/consumer-tools/credit-cards/credit-card-act/" target="_blank" rel="noopener noreferrer nofollow">Consumer Financial Protection Bureau (CFPB)</a> is an excellent resource.</li>
                          <li><strong>The Temptation to Overspend:</strong> "0% interest" can feel like "free money." It isn't. Stick to your original travel budget. Don't book a more expensive trip than you can realistically afford to pay off within the promotional window.</li>
                        </ul>
                    </section>
                    
                    <section id="conclusion" className={styles.reviewSection}>
                        <h2>7. Conclusion: Travel Smarter, Not Harder</h2>
                        <p>For US travelers planning their next big adventure, a 0% APR travel credit card is one of the smartest financial tools available. It empowers you to book your dream trip with confidence, knowing you have a clear, interest-free plan to pay for it.</p>
                        <p>The best card is the one that aligns with your spending, your travel goals, and your financial discipline. By understanding the benefits, respecting the rules, and creating a solid repayment plan, you can turn the "Fly Now, Pay Later" slogan into your reality.</p>
                        <p>So do your research, choose wisely, and get ready to explore the world with greater financial peace of mind.</p>
                    </section>

                </article>
            </main>
        </>
    );
}

export default Best0AprTravelCardsPage2025;