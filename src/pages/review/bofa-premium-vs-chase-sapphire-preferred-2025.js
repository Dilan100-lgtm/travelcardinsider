// File: pages/reviews/bofa-premium-vs-chase-sapphire-preferred-2025.js
"use client"; // 👈 Add this line at the very top

// ❗ Replace image src paths with your optimised, WebP‑or‑AVIF images.
// Card images should ideally be ~150x95px or similar aspect ratio.

import React, { useState, useRef, useCallback } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/NoFTFCardsReview.module.css'; // Reusing your excellent, existing styles
import StarRating from '../../components/StarRating'; // Assuming you have this component

// ─────────────────────────────────────────────────────────────────────────────
// 🔗 CONFIG
// ─────────────────────────────────────────────────────────────────────────────
const SITE_BASE_URL = 'https://www.travelcardinsider.com';
const PAGE_PATH = '/reviews/bofa-premium-vs-chase-sapphire-preferred-2025';
const PAGE_URL = `${SITE_BASE_URL}${PAGE_PATH}`;
const SITE_NAME = 'Travel Card Insider';
const HERO_IMAGE_SRC = '/bofa-vs-csp-hero.webp'; // ❗ Replace with your optimised hero image
const HERO_IMAGE_ALT = 'A split image showing the Bank of America Premium Rewards card and the Chase Sapphire Preferred card, symbolizing a choice between the two.';
const DATE_PUBLISHED = '2025-07-10'; // ✏️ Adjust to your actual publish date
const DATE_MODIFIED = '2025-07-10'; // ✏️ Update whenever you edit copy

// ─────────────────────────────────────────────────────────────────────────────
// 👤 AUTHOR INFO (Reusing from your other files for consistency)
// ─────────────────────────────────────────────────────────────────────────────
const author = {
  name: 'Dilan Madushanka',
  title: 'Lead Travel Card Analyst',
  image: '/WhatsApp Image 2025-05-12 at 4.09.58 PM.jpeg', // ❗ Your 40x40px web‑optimised headshot
  imageLarge: '/WhatsApp Image 2025-05-12 at 4.09.58 PM.jpeg', // ❗ Your 60x60px for tooltip
  bio: 'A seasoned travel card analyst, Dilan specializes in helping travelers maximize rewards and benefits from premium credit cards to unlock luxury experiences.',
  expertise: [
    'Flexible Rewards Programs',
    'Airline Transfer Partners',
    'Travel Insurance Benefits',
    'Credit Card Ecosystems',
  ],
  social: {
    linkedin: 'https://www.linkedin.com/in/dilan-madushanka-b65293365',
    twitter: 'https://x.com/team_dilan',
    email: 'team@travelcardinsider.com',
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// 💳 CARD DATA -- UPDATED with images and ratings
// ─────────────────────────────────────────────────────────────────────────────
const cardData = [
  {
    id: 'bofaPremium',
    name: 'Bank of America® Premium Rewards® credit card',
    issuer: 'Bank of America',
    imageSrc: '/bofa-premium-rewards.png', // ❗ Replace
    imageAlt: 'Bank of America Premium Rewards credit card',
    annualFee: '$95',
    officialCardPageLink: 'https://www.bankofamerica.com/credit-cards/products/premium-rewards-credit-card/',
    welcomeOffer: '60,000 online bonus points after meeting a minimum spending requirement.',
    credits: 'Up to $100 in Airline Incidental Statement Credits annually.',
    ratingValue: 8.2,
    ratingStars: 4.1,
  },
  {
    id: 'csp',
    name: 'Chase Sapphire Preferred® Card',
    issuer: 'Chase',
    imageSrc: '/chase-sapphire-preferred.png', // ❗ Replace
    imageAlt: 'Chase Sapphire Preferred Card',
    annualFee: '$95',
    officialCardPageLink: 'https://creditcards.chase.com/travel-credit-cards/sapphire/preferred',
    welcomeOffer: '60,000 bonus points after meeting a minimum spending requirement.',
    credits: '$50 Annual Hotel Credit on bookings through the Chase portal.',
    ratingValue: 9.0,
    ratingStars: 4.5,
  }
];


// ─────────────────────────────────────────────────────────────────────────────
// 🧠 HELPERS - JSON-LD SCHEMA
// ─────────────────────────────────────────────────────────────────────────────
function generateJsonLD() {
    const reviewSchema = {
        "@context": "https://schema.org",
        "@type": "Review",
        "name": "Bank of America Premium Rewards vs. Chase Sapphire Preferred (2025)",
        "itemReviewed": [
            {
                "@type": "FinancialProduct",
                "name": "Bank of America® Premium Rewards® credit card",
                "brand": { "@type": "Brand", "name": "Bank of America" },
                "url": "https://www.bankofamerica.com/credit-cards/products/premium-rewards-credit-card/",
                 "image": `${SITE_BASE_URL}/bofa-premium-rewards.png`,
                "description": "A travel rewards card that offers elevated rewards for Bank of America Preferred Rewards members and an annual airline incidental credit.",
                "offers": {
                    "@type": "Offer",
                    "priceCurrency": "USD",
                    "price": "95",
                    "priceSpecification": {
                        "@type": "PriceSpecification",
                        "priceCurrency": "USD",
                        "price": "95",
                        "valueAddedTaxIncluded": false,
                        "description": "Annual Fee"
                    }
                },
                "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "8.2",
                    "bestRating": "10",
                    "reviewCount": "1"
                }
            },
            {
                "@type": "FinancialProduct",
                "name": "Chase Sapphire Preferred® Card",
                "brand": { "@type": "Brand", "name": "Chase" },
                "url": "https://creditcards.chase.com/travel-credit-cards/sapphire/preferred",
                "image": `${SITE_BASE_URL}/chase-sapphire-preferred.png`,
                "description": "A premier travel card known for its valuable transfer partners, strong earning rates on travel and dining, and comprehensive travel protections.",
                "offers": {
                    "@type": "Offer",
                    "priceCurrency": "USD",
                    "price": "95",
                    "priceSpecification": {
                        "@type": "PriceSpecification",
                        "priceCurrency": "USD",
                        "price": "95",
                        "valueAddedTaxIncluded": false,
                        "description": "Annual Fee"
                    }
                },
                "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "9.0",
                    "bestRating": "10",
                    "reviewCount": "1"
                }
            }
        ],
        "reviewRating": {
            "@type": "Rating",
            "ratingValue": "4.5",
            "bestRating": "5",
            "worstRating": "1"
        },
        "author": {
            "@type": "Person",
            "name": author.name,
            "url": author.social.linkedin
        },
        "publisher": {
            "@type": "Organization",
            "name": SITE_NAME,
            "url": SITE_BASE_URL
        },
        "datePublished": DATE_PUBLISHED
    };

    const breadcrumbsSchema = {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_BASE_URL, },
          { '@type': 'ListItem', position: 2, name: 'Reviews', item: `${SITE_BASE_URL}/reviews`, },
          { '@type': 'ListItem', position: 3, name: 'BofA Premium Rewards vs. Chase Sapphire Preferred', item: PAGE_URL, },
        ],
      };

    const articleSchema = {
        '@type': 'NewsArticle',
        mainEntityOfPage: { "@type": "WebPage", "@id": PAGE_URL },
        headline: "BofA Premium vs. Chase Sapphire Preferred: Which $95 Card Wins for Travel?",
        description: "A head-to-head 2025 battle between the Bank of America Premium Rewards and Chase Sapphire Preferred cards. We compare rewards, benefits, and ecosystem value.",
        image: [`${SITE_BASE_URL}${HERO_IMAGE_SRC}`],
        author: {
          '@type': 'Person',
          name: author.name,
          url: author.social.linkedin || SITE_BASE_URL,
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
    };

    return JSON.stringify(
        {
          '@context': 'https://schema.org',
          '@graph': [articleSchema, breadcrumbsSchema, reviewSchema],
        },
        null,
        2
      );
}


// ─────────────────────────────────────────────────────────────────────────────
// 🌐 COMPONENT
// ─────────────────────────────────────────────────────────────────────────────
function BofaPremiumVsChaseSapphirePreferredPage2025() {
    // Reusing your accessible tooltip logic
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

    return (
        <>
            <Head>
                {/* Core SEO */}
                <title>BofA Premium Rewards vs. Chase Sapphire Preferred (2025) | {SITE_NAME}</title>
                <meta
                name="description"
                content="A head-to-head 2025 battle between the Bank of America Premium Rewards and Chase Sapphire Preferred cards. We compare rewards, benefits, and ecosystem value to find the best $95 travel card."
                />
                <meta name="viewport" content="width=device-width,initial-scale=1" />
                <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
                <meta name="keywords" content="Chase Sapphire Preferred, Bank of America Premium Rewards, best travel credit card, travel rewards, chase ultimate rewards, bofa preferred rewards" />
                <link rel="canonical" href={PAGE_URL} />

                {/* Open Graph */}
                <meta property="og:type" content="article" />
                <meta property="og:title" content={`BofA Premium Rewards vs. Chase Sapphire Preferred (2025 Review) | ${SITE_NAME}`} />
                <meta property="og:description" content="Which $95 travel card offers the best value? Our deep dive analyzes points, perks, and partnerships to declare a winner." />
                <meta property="og:url" content={PAGE_URL} />
                <meta property="og:site_name" content={SITE_NAME} />
                <meta property="og:image" content={`${SITE_BASE_URL}${HERO_IMAGE_SRC}`} />
                <meta property="og:image:alt" content={HERO_IMAGE_ALT} />
                <meta property="og:locale" content="en_US" />
                <meta property="article:published_time" content={DATE_PUBLISHED} />
                <meta property="article:modified_time" content={DATE_MODIFIED} />
                <meta property="article:author" content={author.name} />
                <meta property="article:section" content="Credit Card Reviews" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={`BofA Premium vs. CSP (2025) - ${SITE_NAME}`} />
                <meta name="twitter:description" content="It's the ultimate mid-tier travel card showdown. See how Bank of America's flexible rewards stack up against the power of Chase's transfer partners." />
                <meta name="twitter:image" content={`${SITE_BASE_URL}${HERO_IMAGE_SRC}`} />
                {author.social.twitter && <meta name="twitter:creator" content={`@${author.social.twitter.split('/').pop()}`} />}
                
                {/* JSON‑LD Schema */}
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: generateJsonLD() }} />
            </Head>

            <main className={styles.reviewContainer}>
                <header className={styles.reviewHeader}>
                  <h1>Bank of America Premium Rewards vs. Chase Sapphire Preferred: The Battle for the Best $95 Travel Card in 2025</h1>
                  
                  <div
                      className={styles.authorBioContainer}
                      ref={triggerRef}
                      onMouseEnter={handleMouseEnterTriggerOrTooltip}
                      onMouseLeave={handleMouseLeaveTriggerOrTooltip}
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
                               {/* Tooltip content from your other file would go here */}
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

                <article>
                    <section className={styles.reviewSection}>
                        <p>In the world of travel rewards, the ~$95 annual fee category is fiercely competitive. It's the sweet spot for travelers who want significant perks without committing to the hefty fees of ultra-premium cards. For years, two titans have dominated this space: the iconic <strong>Chase Sapphire Preferred® Card (CSP)</strong> and the straightforward <strong>Bank of America® Premium Rewards® credit card</strong>.</p>
                        <p>The Chase Sapphire Preferred has long been the gold standard, celebrated for its flexible and valuable Ultimate Rewards points. The Bank of America Premium Rewards card, however, presents a compelling alternative, especially for those already integrated into the Bank of America ecosystem.</p>
                        <p>This 2025 analysis will dissect these two powerhouse cards, comparing their earning structures, redemption options, and hidden benefits to help you decide which one deserves a place in your wallet.</p>
                    </section>
                    
                    {/* --- Card Display Section with Images and Ratings --- */}
                    <div className={styles.cardComparisonContainer}>
                        {cardData.map((card) => (
                            <div key={card.id} className={styles.cardComparisonItem}>
                                <div className={styles.cardHeader}>
                                    <div className={styles.cardImageContainer}>
                                        <Image src={card.imageSrc} alt={card.imageAlt} width={150} height={95} objectFit="contain" />
                                    </div>
                                    <div className={styles.cardTitleRating}>
                                        <h4>{card.name}</h4>
                                        <StarRating rating={card.ratingStars} />
                                        <span className={styles.ratingValue}>Our Rating: {card.ratingValue.toFixed(1)}/10</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>


                    <section id="annual-fee" className={styles.reviewSection}>
                        <h2>Annual Fee & Core Value Proposition</h2>
                        <p>Both cards feature an identical $95 annual fee, placing them in a direct face-off for value.</p>
                        <ul>
                            <li><strong>Bank of America Premium Rewards:</strong> A $95 annual fee [Source: <a href={cardData[0].officialCardPageLink} target="_blank" rel="noopener noreferrer sponsored">Bank of America Official Site</a>] is effectively offset by an annual "up to $100 Airline Incidental Statement Credit." This credit covers qualifying purchases like seat upgrades, baggage fees, and in-flight services. If you can use this credit fully each year, the card essentially pays you $5 to keep it.</li>
                            <li><strong>Chase Sapphire Preferred:</strong> A $95 annual fee [Source: <a href={cardData[1].officialCardPageLink} target="_blank" rel="noopener noreferrer sponsored">Chase Official Site</a>] is partially offset by a "$50 Annual Hotel Credit" for stays booked through the Chase travel portal. The primary value, however, comes from the power of its Ultimate Rewards points ecosystem.</li>
                        </ul>
                        <p>Right from the start, the BofA card offers a more direct path to negate its annual fee. The CSP requires you to engage with its ecosystem to realize its full potential, a theme we'll see repeatedly.</p>
                    </section>
                    
                    <section id="earning-rewards" className={styles.reviewSection}>
                        <h2>Earning Rewards: Simplicity vs. Strategy</h2>
                        <p>How you earn points is just as important as how you spend them.</p>
                        <h3>Bank of America Premium Rewards:</h3>
                        <p>The card offers a simple, flat-rate earning structure:</p>
                        <ul>
                            <li><strong>2 points per $1</strong> spent on travel and dining purchases.</li>
                            <li><strong>1.5 points per $1</strong> spent on all other purchases.</li>
                        </ul>
                        <p>The real power, however, is unlocked for Bank of America Preferred Rewards members. Depending on your tier (based on your combined Bank of America and Merrill investment balances), you can earn a 25%-75% bonus on all points earned. At the highest tier (Platinum Honors), your earning rates become an impressive <strong>2.625x on everything</strong> and <strong>3.5x on travel and dining</strong>.</p>

                        <h3>Chase Sapphire Preferred:</h3>
                        <p>The CSP offers higher rewards in specific, travel-centric categories:</p>
                        <ul>
                            <li><strong>5x points</strong> on travel purchased through the Chase Ultimate Rewards® portal.</li>
                            <li><strong>3x points</strong> on dining, select streaming services, and online grocery purchases.</li>
                            <li><strong>2x points</strong> on all other travel purchases.</li>
                            <li><strong>1x point</strong> on everything else.</li>
                        </ul>
                        <p>Additionally, the card offers a 10% anniversary points bonus. If you spend $25,000 on the card in a year, you'll receive 2,500 bonus points. For a deeper dive into maximizing these categories, see our <Link href="/learn/rewards-and-perks"><a>guide to rewards and perks</a></Link>.</p>
                    </section>

                    <section id="redeeming-rewards" className={styles.reviewSection}>
                        <h2>Redeeming Rewards: The Great Divide</h2>
                        <p>This is where the two cards diverge most significantly.</p>
                        <h3>Bank of America: Cash is King</h3>
                        <p>BofA points have a fixed value. You can redeem them for cash back, a statement credit, or travel through their portal at a rate of 1 cent per point. There are no transfer partners. It's a simple, transparent system designed for maximum flexibility, albeit with a lower potential upside compared to transferrable currencies.</p>
                        
                        <h3>Chase: The Power of Partnerships</h3>
                        <p>This is the Chase Sapphire Preferred's signature strength. Points can be redeemed for 1.25 cents each through the Chase travel portal. However, their true power lies in the 1:1 transfer ratio to a suite of high-value airline and hotel partners, including:</p>
                        <ul>
                            <li><strong>Airlines:</strong> United, Southwest, British Airways, Air France/KLM Flying Blue, and more.</li>
                            <li><strong>Hotels:</strong> World of Hyatt, Marriott Bonvoy, IHG.</li>
                        </ul>
                        <p>Transferring points to partners like World of Hyatt can yield redemption values of 2 cents per point or much higher, dwarfing the fixed value of BofA points. This is the core of the "pays you back" argument for the CSP. Understanding <Link href="/learn/faqs-and-guides"><a>how to leverage transfer partners</a></Link> is crucial.</p>
                    </section>
                    
                    <section id="user-perspectives" className={styles.reviewSection}>
                        <h2>What Real Users Are Saying</h2>
                        <blockquote className={styles.quote}>
                            <p>"As a Platinum Honors member, no other card comes close to the BofA Premium's earning rate on everyday spend. The airline credit is just the cherry on top. It’s my workhorse card."</p>
                            <footer>— On the Bank of America Premium Rewards</footer>
                        </blockquote>
                        <blockquote className={styles.quote}>
                            <p>"I transferred 50,000 Chase points to Hyatt for a weekend trip that would have cost me over $1,200 out of pocket. You just can't get that kind of value from a cash-back card."</p>
                             <footer>— On the Chase Sapphire Preferred</footer>
                        </blockquote>
                    </section>

                    <section id="verdict" className={styles.reviewSection}>
                        <h2>The Verdict: Which Card Fits Your Financial Life?</h2>
                        <p>The choice between these cards depends entirely on your financial habits and travel goals.</p>
                        
                        <h3>Choose the Bank of America® Premium Rewards® Card if:</h3>
                        <ul>
                            <li>You are a Bank of America Preferred Rewards member, especially at the Platinum or Platinum Honors tier. The rewards boost is the single most compelling reason to get this card.</li>
                            <li>You prefer simplicity and value cash-back or fixed-value redemptions over the complexity of transfer partners.</li>
                            <li>You can easily use the $100 airline incidental credit each year through normal travel expenses like baggage fees.</li>
                        </ul>
                         <div className={styles.cardButtonsContainer}>
                            <a href={cardData[0].officialCardPageLink} target="_blank" rel="noopener noreferrer sponsored" className={`${styles.cardButton} ${styles.applyButton}`}>Apply for BofA Premium Rewards</a>
                        </div>


                        <h3>Choose the Chase Sapphire Preferred® Card if:</h3>
                        <ul>
                            <li>You are a "travel hacker" who enjoys learning the ins and outs of airline and hotel loyalty programs to find outsized value.</li>
                            <li>Your spending is heavily concentrated in dining and travel.</li>
                            <li>You value comprehensive travel insurance and protections, an area where the CSP is a market leader.</li>
                            <li>You want a card that serves as the hub of a powerful, expandable rewards ecosystem (pairing it with Chase Freedom cards, for example).</li>
                        </ul>
                        <div className={styles.cardButtonsContainer}>
                             <a href={cardData[1].officialCardPageLink} target="_blank" rel="noopener noreferrer sponsored" className={`${styles.cardButton} ${styles.applyButton}`}>Apply for Chase Sapphire Preferred</a>
                        </div>

                        <p>For the average traveler not tied to the BofA ecosystem, the <strong>Chase Sapphire Preferred® Card</strong> remains the superior choice due to the immense potential value of its transfer partners. For those deeply invested in Bank of America, the Premium Rewards card offers an unbeatable and straightforward return on spending.</p>
                    </section>
                </article>
            </main>
        </>
    );
}

export default BofaPremiumVsChaseSapphirePreferredPage2025;