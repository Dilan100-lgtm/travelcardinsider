// File: pages/reviews/jetblue-plus-vs-business-2025.js
"use client";

// ❗ Replace image src paths with your optimised, WebP‑or‑AVIF images.
import React, { useState, useRef, useCallback } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
// 👇 UPDATE THIS LINE to import the new stylesheet
import styles from '../../styles/JetBlueReview.module.css'; 
import StarRating from '../../components/StarRating';

// ─────────────────────────────────────────────────────────────────────────────
// 🔗 CONFIG
// ─────────────────────────────────────────────────────────────────────────────
const SITE_BASE_URL = 'https://www.travelcardinsider.com';
const PAGE_PATH = '/reviews/jetblue-plus-vs-business-2025';
const PAGE_URL = `${SITE_BASE_URL}${PAGE_PATH}`;
const SITE_NAME = 'Travel Card Insider';
const HERO_IMAGE_SRC = '/images/heros/jetblue-cards-hero.webp'; // ❗ Replace with your optimised hero image
const HERO_IMAGE_ALT = 'The tail fin of a JetBlue airplane against a clear blue sky, symbolizing the choice between its travel credit cards.';
const DATE_PUBLISHED = '2025-06-28';
const DATE_MODIFIED = '2025-06-28';

// ─────────────────────────────────────────────────────────────────────────────
// 👤 AUTHOR INFO
// ─────────────────────────────────────────────────────────────────────────────
const author = {
  name: 'Dilan Madushanka',
  title: 'Lead Travel Card Analyst',
  image: '/WhatsApp Image 2025-05-12 at 4.09.58 PM.jpeg', // ❗ Your 40x40px web‑optimised headshot
  imageLarge: '/WhatsApp Image 2025-05-12 at 4.09.58 PM.jpeg', // ❗ Your 80x80px for author bio
  bio: 'A seasoned travel card analyst, Dilan specializes in helping travelers maximize rewards and benefits from premium credit cards to unlock luxury experiences.',
  expertise: [
    'Airline Loyalty Programs',
    'Co-Branded Credit Cards',
    'Credit Card Travel Insurance',
    'Business Card Benefit Optimisation',
  ],
  social: {
    linkedin: 'https://www.linkedin.com/in/dilan-madushanka-b65293365',
    twitter: 'https://x.com/team_dilan',
    email: 'team@travelcardinsider.com',
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// 💳 CARD DATA -- NOW INCLUDES LINKS FOR BUTTONS
// ─────────────────────────────────────────────────────────────────────────────
const cardData = [
  {
    id: 'jetbluePlus',
    name: 'JetBlue Plus Card',
    issuer: 'Barclays',
    imageSrc: '/jetblue-plus-card.png', // ❗ Replace
    imageAlt: 'JetBlue Plus Card',
    annualFee: '$99',
    officialCardPageLink: 'https://cards.barclaycardus.com/banking/cards/jetblue-plus-card/',
    learnMoreLink: '/cards/jetblue-plus', // Internal link to your review page
    ratesFeesLink: 'https://cards.barclaycardus.com/banking/cards/jetblue-plus-card/rates-and-fees', // Example link
    ratingValue: 8.5,
    ratingStars: 4.3,
  },
  {
    id: 'jetblueBusiness',
    name: 'JetBlue Business Card',
    issuer: 'Barclays',
    imageSrc: '/jetblue-business-card.png', // ❗ Replace
    imageAlt: 'JetBlue Business Card',
    annualFee: '$99',
    officialCardPageLink: 'https://cards.barclaycardus.com/banking/cards/jetblue-business-card/',
    learnMoreLink: '/cards/jetblue-business', // Internal link to your review page
    ratesFeesLink: 'https://cards.barclaycardus.com/banking/cards/jetblue-business-card/rates-and-fees', // Example link
    ratingValue: 8.8,
    ratingStars: 4.5,
  }
];

// ... (JSON-LD Schema function remains the same)
function generateJsonLD() {
    const reviewSchema = {
        "@context": "https://schema.org",
        "@type": "Review",
        "name": "JetBlue Plus vs. JetBlue Business 2025: Which Wins After the Loyalty Overhaul?",
        "itemReviewed": [
            {
                "@type": "FinancialProduct",
                "name": "JetBlue Plus Card",
                "brand": { "@type": "Brand", "name": "Barclays" },
                "url": "https://cards.barclaycardus.com/banking/cards/jetblue-plus-card/",
                 "image": `${SITE_BASE_URL}/jetblue-plus-card.png`,
                "description": "A personal airline co-branded card offering strong rewards on JetBlue purchases, a free checked bag, and bonus points on dining and groceries.",
                "offers": {
                    "@type": "Offer",
                    "priceCurrency": "USD",
                    "price": "99",
                    "priceSpecification": {
                        "@type": "PriceSpecification",
                        "priceCurrency": "USD",
                        "price": "99",
                        "valueAddedTaxIncluded": false,
                        "description": "Annual Fee"
                    }
                },
                "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "8.5",
                    "bestRating": "10",
                    "reviewCount": "1"
                }
            },
            {
                "@type": "FinancialProduct",
                "name": "JetBlue Business Card",
                "brand": { "@type": "Brand", "name": "Barclays" },
                "url": "https://cards.barclaycardus.com/banking/cards/jetblue-business-card/",
                "image": `${SITE_BASE_URL}/jetblue-business-card.png`,
                "description": "A business airline co-branded card featuring valuable perks like Group A boarding, bonus points on office supplies, and tools for expense management.",
                "offers": {
                    "@type": "Offer",
                    "priceCurrency": "USD",
                    "price": "99",
                    "priceSpecification": {
                        "@type": "PriceSpecification",
                        "priceCurrency": "USD",
                        "price": "99",
                        "valueAddedTaxIncluded": false,
                        "description": "Annual Fee"
                    }
                },
                "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "8.8",
                    "bestRating": "10",
                    "reviewCount": "1"
                }
            }
        ],
        "reviewRating": {
            "@type": "Rating",
            "ratingValue": "4.4",
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
          { '@type': 'ListItem', position: 3, name: 'JetBlue Plus vs. JetBlue Business', item: PAGE_URL, },
        ],
      };

    const articleSchema = {
        '@type': 'NewsArticle',
        mainEntityOfPage: { "@type": "WebPage", "@id": PAGE_URL },
        headline: "JetBlue Plus vs. JetBlue Business 2025: Which Wins After the Loyalty Overhaul?",
        description: "An in-depth 2025 comparison of the JetBlue Plus and JetBlue Business cards after the TrueBlue loyalty program overhaul. We analyze fees, perks, and earning potential to find the champion for your wallet.",
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
function JetBlueCardReviewPage2025() {
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
                {/* ... (Head content remains the same) ... */}
            </Head>

            <main className={styles.reviewContainer}>
                <header className={styles.reviewHeader}>
                  <h1>JetBlue Plus vs. JetBlue Business 2025: Which Wins After the Loyalty Overhaul?</h1>
                  <div className={styles.authorDateContainer}>
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
                        </div>
                    </div>
                     {DATE_MODIFIED && (
                        <time dateTime={DATE_MODIFIED} className={styles.lastEdited}>
                            Last updated: {new Date(DATE_MODIFIED).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                        </time>
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

                <article className={styles.articleContent}>
                    <p className={styles.introParagraph}>In the competitive skies of travel rewards, loyalty is a must, and in 2025, JetBlue is reminting its coin. The airline has launched the most significant overhaul of its TrueBlue loyalty program in a decade, a pivot that redefines the path to elite status. For travelers, this new landscape, with its "tiles" system and multi-layered elite status, demands a fresh look at its co-branded credit cards.</p>
                    <p>For US-based flyers, the choice between the JetBlue Plus Card and the JetBlue Business Card has always been a point of deliberation. Now, making the right decision is more critical than ever. This review will serve as your compass, guiding you through the new world of JetBlue rewards to help you determine which card is the champion for your wallet and travel style. For a broader look, see our ranking of the <Link href="/reviews/best-airline-credit-cards-2025">best airline credit cards for 2025</Link>.</p>
                    
                    {/* --- NEW Card Display Section with Buttons --- */}
                    <div className={styles.cardComparisonContainer}>
                        {cardData.map((card) => (
                            <div key={card.id} className={styles.cardComparisonItem}>
                                <div className={styles.cardImageContainer}>
                                    <Image src={card.imageSrc} alt={card.imageAlt} width={220} height={138} objectFit="contain" />
                                </div>
                                <div className={styles.cardDetails}>
                                    <h3>{card.name}</h3>
                                    <div className={styles.ratingContainer}>
                                        <StarRating rating={card.ratingStars} />
                                        <span>{card.ratingValue.toFixed(1)}/10</span>
                                    </div>
                                    <div className={styles.cardButtons}>
                                        <a href={card.officialCardPageLink} target="_blank" rel="noopener noreferrer sponsored" className={styles.applyButton}>Apply Now</a>
                                        <Link href={card.learnMoreLink} passHref>
                                            <a className={styles.secondaryButton}>Learn More</a>
                                        </Link>
                                        <a href={card.ratesFeesLink} target="_blank" rel="noopener noreferrer" className={styles.tertiaryButton}>See Rates & Fees</a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* ... (Rest of the article sections remain the same, wrapped in <section>) ... */}
                    <section id="loyalty-revolution" className={styles.reviewSection}>
                        <h2>The New Battleground: Understanding JetBlue's Loyalty Revolution</h2>
                        <p>The language of loyalty at JetBlue has changed. The old system is a relic, replaced by "tiles," a new metric rewarding engagement across the entire JetBlue ecosystem. To learn more, read our deep dive on <Link href="/guides/understanding-jetblue-trueblue-tiles"><a>understanding JetBlue TrueBlue tiles</a></Link>. Travelers now earn tiles in two ways:</p>
                        <ul>
                            <li>1 tile for every $100 spent on JetBlue flights, JetBlue Vacations, and Paisly by JetBlue bookings.</li>
                            <li>1 tile for every $1,000 spent on any of JetBlue's co-branded credit cards.</li>
                        </ul>
                        <p>This structure highlights a crucial reality: direct airline spending is ten times more effective for earning status than credit card spending. The card, therefore, becomes a strategic supplement rather than a primary pathway to the top.</p>
                        <h3>A New Mosaic: The Four-Tier System</h3>
                        <p>Adding to this is the shift from a single Mosaic status to a four-tier system:</p>
                        <ul>
                            <li><strong>Mosaic 1:</strong> 50 tiles</li>
                            <li><strong>Mosaic 2:</strong> 100 tiles</li>
                            <li><strong>Mosaic 3:</strong> 150 tiles</li>
                            <li><strong>Mosaic 4:</strong> 250 tiles</li>
                        </ul>
                        <p>This tiered approach staggers perks and prestige, making it essential to understand which benefits are accessible at each level.</p>
                        <p>For budget travelers, the "Blue Basic Squeeze-Out" is a significant change. As of March 1, 2025, Mosaic members on Blue Basic fares lose key perks like complimentary Even More Space seats. This move compels even loyal customers to weigh a bare-bones ticket against a higher fare to unlock their earned benefits.</p>
                        <p>However, JetBlue is also investing in the premium experience. The first proprietary JetBlue airport lounges are set to open at JFK in late 2025, a key perk for top-tier Mosaic 4 members. This is a big step in competing for premium travelers, and you can learn more about <Link href="/guides/how-to-get-airport-lounge-access"><a>how to get airport lounge access here</a></Link>. Furthermore, the "Blue Sky" partnership with United Airlines allows for reciprocal point earning and redemption and extends elite benefits across both carriers, dramatically widening the horizons for Mosaic members.</p>
                    </section>
                    
                    {/* ... Continue with all other article sections ... */}

                    <section id="verdict" className={styles.reviewSection}>
                        <h2>The Final Verdict: Choosing Your Champion for 2025</h2>
                        {/* ... Verdict content ... */}
                    </section>
                </article>

                {/* --- NEW Author Bio Section --- */}
                <section className={styles.aboutAuthorSection}>
                    <h2 className={styles.sectionTitle}>About the Author</h2>
                    <div className={styles.authorBox}>
                        <div className={styles.authorImageLargeContainer}>
                            <Image 
                                src={author.imageLarge} 
                                alt={`${author.name} headshot`}
                                width={80}
                                height={80}
                                className={styles.authorImageLarge}
                            />
                        </div>
                        <div className={styles.authorDetails}>
                           <h3 className={styles.authorNameLarge}>{author.name}</h3>
                           <p className={styles.authorBio}>
                               As the Lead Travel Card Analyst for Travel Card Insider, {author.name.split(' ')[0]} meticulously dissects loyalty programs and card benefits. With over a decade of experience in maximizing points and miles, he empowers readers to make smarter financial decisions and turn their travel dreams into reality with the right credit card.
                           </p>
                           <a href={`/author/${author.name.toLowerCase().replace(' ', '-')}`} className={styles.authorProfileLink}>
                               More from {author.name}
                           </a>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}

export default JetBlueCardReviewPage2025;