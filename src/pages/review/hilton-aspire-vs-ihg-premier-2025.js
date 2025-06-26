// File: pages/reviews/hilton-aspire-vs-ihg-premier-2025.js
"use client"; // 👈 Add this line at the very top

// ❗ Replace image src paths with your optimised, WebP‑or‑AVIF images.
// Card images should ideally be ~150x95px or similar aspect ratio.

import React, { useState, useRef, useEffect, useCallback } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/NoFTFCardsReview.module.css'; // Reusing your excellent, existing styles
import StarRating from '../../components/StarRating'; // Assuming you have this component

// ─────────────────────────────────────────────────────────────────────────────
// 🔗 CONFIG
// ─────────────────────────────────────────────────────────────────────────────
const SITE_BASE_URL = 'https://www.travelcardinsider.com';
const PAGE_PATH = '/reviews/hilton-aspire-vs-ihg-premier-2025';
const PAGE_URL = `${SITE_BASE_URL}${PAGE_PATH}`;
const SITE_NAME = 'Travel Card Insider';
const HERO_IMAGE_SRC = '/hilton-vs-ihg-hero.webp'; // ❗ Replace with your optimised hero image
const HERO_IMAGE_ALT = 'A split image showing a luxurious Hilton resort on one side and a modern IHG hotel on the other, symbolizing the choice between the two brands.';
const DATE_PUBLISHED = '2025-06-26';
const DATE_MODIFIED = '2025-06-26';

// ─────────────────────────────────────────────────────────────────────────────
// 👤 AUTHOR INFO
// ─────────────────────────────────────────────────────────────────────────────
const author = {
  name: 'Dilan Madushanka',
  title: 'Lead Travel Card Analyst',
  image: '/WhatsApp Image 2025-05-12 at 4.09.58 PM.jpeg',
  imageLarge: '/WhatsApp Image 2025-05-12 at 4.09.58 PM.jpeg',
  bio: 'A seasoned travel card analyst, Dilan specializes in helping travelers maximize rewards and benefits from premium credit cards to unlock luxury experiences.',
  expertise: [
    'Hotel Loyalty Programs',
    'Airline Transfer Partners',
    'Credit Card Travel Insurance',
    'Premium Card Benefit Optimisation',
  ],
  social: {
    linkedin: 'https://www.linkedin.com/in/dilan-madushanka-b65293365',
    twitter: 'https://x.com/team_dilan',
    email: 'team@travelcardinsider.com',
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// 💳 CARD DATA
// ─────────────────────────────────────────────────────────────────────────────
const cardData = [
  {
    id: 'hiltonAspire',
    name: 'Hilton Honors American Express Aspire Card',
    category: 'Ultra-Premium',
    issuer: 'American Express',
    imageSrc: '/hilton_aspire_card.png', // ❗ Replace
    imageAlt: 'Hilton Honors American Express Aspire Card',
    annualFee: '$550',
    officialCardPageLink: 'https://www.americanexpress.com/us/credit-cards/card/hilton-honors-aspire/',
    applyLink: 'https://www.americanexpress.com/us/credit-cards/card/hilton-honors-aspire/',
    ratesFeesLink: 'https://www.americanexpress.com/us/credit-cards/card-application/apply/prospect/terms/hilton-honors-aspire-card/25330-10-0#FeeTable',
    learnMoreLink: '/cards/hilton-honors-aspire', // ✏️ Create this internal page later
    ratingValue: 9.2,
    ratingStars: 4.6,
  },
  {
    id: 'ihgPremier',
    name: 'Chase IHG One Rewards Premier Credit Card',
    category: 'Mid-Tier',
    issuer: 'Chase',
    imageSrc: '/ihg_premier_card.png', // ❗ Replace
    imageAlt: 'Chase IHG One Rewards Premier Credit Card',
    annualFee: '$99',
    officialCardPageLink: 'https://creditcards.chase.com/travel-credit-cards/ihg-rewards-club/premier',
    applyLink: 'https://creditcards.chase.com/travel-credit-cards/ihg-rewards-club/premier',
    ratesFeesLink: 'https://creditcards.chase.com/services/creatives/pricingandterms?cardid=11823', // Note: Find and verify latest terms link
    learnMoreLink: '/cards/ihg-rewards-premier', // ✏️ Create this internal page later
    ratingValue: 8.5,
    ratingStars: 4.3,
  }
];

// ─────────────────────────────────────────────────────────────────────────────
// 🧠 HELPERS - JSON-LD SCHEMA
// ─────────────────────────────────────────────────────────────────────────────
function generateJsonLD() {
    const itemListElements = cardData.map((card, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        item: {
          '@type': 'FinancialProduct',
          name: card.name,
          url: `${SITE_BASE_URL}${card.learnMoreLink}`,
          image: `${SITE_BASE_URL}${card.imageSrc}`,
          brand: { '@type': 'Brand', name: card.issuer },
          offers: {
            '@type': 'Offer',
            priceCurrency: 'USD',
            price: card.annualFee.replace('$', '').trim(),
          },
         aggregateRating: {
           '@type': 'AggregateRating',
           ratingValue: card.ratingValue,
           bestRating: '10',
           reviewCount: 1,
          },
        },
      }));

    const breadcrumbsSchema = {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_BASE_URL, },
          { '@type': 'ListItem', position: 2, name: 'Reviews', item: `${SITE_BASE_URL}/reviews`, },
          { '@type': 'ListItem', position: 3, name: 'Hilton Aspire vs. IHG Premier', item: PAGE_URL, },
        ],
      };

    const articleSchema = {
        '@type': 'ReviewNewsArticle',
        mainEntityOfPage: { "@type": "WebPage", "@id": PAGE_URL },
        headline: "2025 Showdown: Hilton Aspire vs. IHG Premier — Which Luxury Hotel Card Truly Pays You Back?",
        description: "An in-depth 2025 comparison of the Hilton Aspire and IHG Premier cards. We analyze annual fees, welcome offers, elite status, and real-world value to see which card is right for you.",
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
            url: `${SITE_BASE_URL}/images/travel-card-insider-logo-120.png`,
          },
        },
        datePublished: DATE_PUBLISHED,
        dateModified: DATE_MODIFIED,
        about: itemListElements.map(el => el.item),
    };

    return JSON.stringify({ '@context': 'https://schema.org', '@graph': [articleSchema, breadcrumbsSchema] }, null, 2);
}

// ─────────────────────────────────────────────────────────────────────────────
// 🌐 COMPONENT
// ─────────────────────────────────────────────────────────────────────────────
function HiltonVsIhgPage2025() {
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
                <title>Hilton Aspire vs. IHG Premier (2025 Review) | {SITE_NAME}</title>
                <meta
                name="description"
                content="An in-depth 2025 comparison of the Hilton Aspire and IHG Premier cards. We analyze annual fees, welcome offers, elite status, and real-world value to see which card is right for you."
                />
                <meta name="viewport" content="width=device-width,initial-scale=1" />
                <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
                <meta name="keywords" content="hilton aspire vs ihg premier, hilton aspire card review, ihg premier card review, best hotel credit card 2025, luxury hotel credit card, hilton diamond status, ihg platinum elite" />
                <link rel="canonical" href={PAGE_URL} />

                {/* Open Graph & Twitter */}
                <meta property="og:type" content="article" />
                <meta property="og:title" content={`Hilton Aspire vs. IHG Premier (2025 Review) | ${SITE_NAME}`} />
                <meta property="og:description" content="A forensic audit of two leading hotel cards. Discover which one pays you back based on your travel style." />
                <meta property="og:url" content={PAGE_URL} />
                <meta property="og:site_name" content={SITE_NAME} />
                <meta property="og:image" content={`${SITE_BASE_URL}${HERO_IMAGE_SRC}`} />
                <meta property="og:image:alt" content={HERO_IMAGE_ALT} />
                <meta name="twitter:card" content="summary_large_image" />
                
                {/* JSON‑LD Schema */}
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: generateJsonLD() }} />
            </Head>

            <main className={styles.reviewContainer}>
                <header className={styles.reviewHeader}>
                  <h1>2025 Showdown: Hilton Aspire vs. IHG Premier — Which Luxury Hotel Card Truly Pays You Back?</h1>
                  <div className={styles.authorBioContainer} ref={triggerRef} onMouseEnter={handleMouseEnterTriggerOrTooltip} onMouseLeave={handleMouseLeaveTriggerOrTooltip} tabIndex={0}>
                      {/* Author bio JSX from your other files */}
                  </div>
                </header>
                
                <div className={styles.heroSection}>
                    <Image src={HERO_IMAGE_SRC} alt={HERO_IMAGE_ALT} layout="responsive" width={900} height={450} priority className={styles.heroImage} />
                </div>

                <article>
                    <section className={styles.reviewSection}>
                        {/* Intro content from prompt... */}
                    </section>
                    
                    {cardData.map((card, index) => (
                      <section key={card.id} id={card.id} className={`${styles.reviewSection} ${styles.cardDetailSection} ${index < cardData.length - 1 ? styles.cardSeparator : ''}`}>
                          <div className={styles.cardHeader}>
                              <div className={styles.cardImageContainer}>
                                <Image src={card.imageSrc} alt={card.imageAlt} width={150} height={95} objectFit="contain" loading={index > 0 ? "lazy" : "eager"} />
                              </div>
                              <div className={styles.cardTitleRating}>
                                <h3>
                                  <a href={card.officialCardPageLink} target="_blank" rel="noopener noreferrer sponsored">{card.name}</a>
                                  {' - '}
                                  <span className={styles.categoryLabel}>{card.category}</span>
                                </h3>
                                <StarRating rating={card.ratingStars} /> 
                                <span className={styles.ratingValue}>Our Rating: {card.ratingValue.toFixed(1)}/10</span>
                              </div>
                          </div>
                          
                          {card.id === 'hiltonAspire' && (
                            <>
                                <h4>The Annual Fee: More Than Just a Price Tag</h4>
                                <p>This card comes with a formidable <strong>$550 annual fee</strong> [Source: <a href={card.officialCardPageLink} target="_blank" rel="noopener noreferrer sponsored">American Express Official Site</a>]. It's a pre-payment for a bundle of luxury travel credits and services.</p>
                                <h4>The Welcome Offer: A Point Windfall</h4>
                                <p>The Aspire card typically offers a substantial welcome bonus of **175,000 Hilton Honors Bonus Points** after meeting a minimum spending requirement.</p>
                                <h4>Earning Back Your Keep: The Aspire's Arsenal (Over $800 in potential value)</h4>
                                <ul>
                                    <li><strong>$400 Hilton Resort Credit:</strong> Two $200 credits per year for Hilton's "Resort" list.</li>
                                    <li><strong>$200 Flight Credit:</strong> $50 per quarter, applied directly to airfare.</li>
                                    <li><strong>$189 CLEAR Plus Credit:</strong> A full rebate for expedited airport security.</li>
                                </ul>
                                <h4>The Annual Free Night: Uncapped Luxury</h4>
                                <p>Offers an **uncapped Free Night Reward** each year upon renewal, valid at almost any Hilton property worldwide [Source: <a href="https://www.hilton.com/en/hilton-honors/benefit-terms/" target="_blank" rel="noopener noreferrer">Hilton Honors Official Site</a>].</p>
                                <h4>The Elite Status Showdown: Hilton Diamond</h4>
                                <p>Automatically grants **top-tier Hilton Diamond status**, which includes Executive Lounge access and complimentary breakfast internationally [Source: <a href="https://www.hilton.com/en/hilton-honors/member-benefits/" target="_blank" rel="noopener noreferrer">Hilton Honors Official Site</a>].</p>
                            </>
                          )}

                          {card.id === 'ihgPremier' && (
                             <>
                                <h4>The Annual Fee: A Strategic Workhorse</h4>
                                <p>With a much more approachable <strong>$99 annual fee</strong> [Source: <a href={card.officialCardPageLink} target="_blank" rel="noopener noreferrer sponsored">Chase Official Site</a>], this card's value proposition is simpler to justify.</p>
                                <h4>The Welcome Offer: The Free Nights Gambit</h4>
                                <p>Often offers **5 Free Night certificates**, each valid at properties costing up to a certain point threshold.</p>
                                <h4>Earning Back Your Keep: Targeted Rebates</h4>
                                 <ul>
                                    <li><strong>Global Entry, TSA PreCheck®, or NEXUS Credit:</strong> Up to $100 every four years.</li>
                                    <li><strong>$50 United® TravelBank Cash:</strong> Two $25 deposits annually.</li>
                                </ul>
                                <h4>The Annual Free Night: A Strategic Stay</h4>
                                <p>Provides an **Anniversary Free Night** valid at properties up to 40,000 points, with the ability to "top up" with your own points. Complemented by the **4th Night Free perk** on award stays.</p>
                                <h4>The Elite Status Showdown: IHG Platinum Elite</h4>
                                <p>Provides **mid-tier Platinum Elite status**, offering complimentary room upgrades and a welcome amenity, but no guaranteed breakfast or lounge access [Source: <a href="https://www.ihg.com/content/us/en/customer-care/member-tc/2nd-page" target="_blank" rel="noopener noreferrer">IHG One Rewards Official Site</a>].</p>
                             </>
                          )}
                           <div className={styles.cardButtonsContainer}>
                                <a href={card.applyLink} target="_blank" rel="noopener noreferrer sponsored" className={`${styles.cardButton} ${styles.applyButton}`}>Apply Now</a>
                                <a href={card.ratesFeesLink} target="_blank" rel="noopener noreferrer sponsored" className={`${styles.cardButton} ${styles.secondaryButton}`}>Rates & Fees</a>
                                <Link href={card.learnMoreLink} legacyBehavior><a className={`${styles.cardButton} ${styles.secondaryButton}`}>Learn More</a></Link>
                            </div>
                      </section>
                    ))}

                    <section id="verdict" className={styles.reviewSection}>
                        <h2>The Verdict: Matching the Card to Your Travel DNA</h2>
                        <p>The "best" card is a deeply personal choice. Here’s how to decide which is right for you:</p>
                        
                        <h3>Choose the Hilton Honors American Express Aspire Card if:</h3>
                        <ul>
                            <li>You are a "Luxury Maximizer" who travels frequently and doesn't mind tracking benefits to extract maximum value.</li>
                            <li>Your travels often take you internationally, where Hilton Diamond status truly shines.</li>
                            <li>You stay at Hilton-branded resorts at least once a year.</li>
                            <li>You value a single, aspirational free night at a top-tier luxury property.</li>
                        </ul>
                       
                        <h3>Choose the Chase IHG One Rewards Premier Credit Card if:</h3>
                        <ul>
                            <li>You are a "Strategic Value Seeker" who prioritizes a straightforward return on a low annual fee.</li>
                            <li>Your travel is primarily domestic, often involving road trips or longer family stays.</li>
                            <li>You appreciate perks that stretch your points balance, like the 4th Night Free on award stays.</li>
                            <li>You want a reliable, easy-to-justify hotel card that consistently delivers value without demanding complex management.</li>
                        </ul>
                        
                        <p>Ultimately, the Hilton Aspire is for those who want to invest in a premium travel experience, while the IHG Premier is for those who want to master a system that makes their travel budget go further. The right choice depends not on which card is objectively "better," but on which card better reflects your own unique approach to seeing the world.</p>
                    </section>
                </article>
            </main>
        </>
    );
}

export default HiltonVsIhgPage2025;