// File: pages/reviews/jetblue-plus-vs-business-2025.js
"use client";

// ❗ Replace image src paths with your optimised, WebP‑or‑AVIF images.
import React, { useState, useRef, useCallback } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/JetBlueReview.module.css';
import StarRating from '../../components/StarRating';

// ─────────────────────────────────────────────────────────────────────────────
// 🔗 CONFIG
// ─────────────────────────────────────────────────────────────────────────────
const SITE_BASE_URL = 'https://www.travelcardinsider.com';
const PAGE_PATH = '/reviews/jetblue-plus-vs-business-2025';
const PAGE_URL = `${SITE_BASE_URL}${PAGE_PATH}`;
const SITE_NAME = 'Travel Card Insider';
const HERO_IMAGE_SRC = '/images/heros/jetblue-cards-hero.webp';
const HERO_IMAGE_ALT = 'The tail fin of a JetBlue airplane against a clear blue sky, symbolizing the choice between its travel credit cards.';
const DATE_PUBLISHED = '2025-06-28';
const DATE_MODIFIED = '2025-06-28';

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
// 💳 CARD DATA
// ─────────────────────────────────────────────────────────────────────────────
const cardData = [
  {
    id: 'jetbluePlus',
    name: 'JetBlue Plus Card',
    issuer: 'Barclays',
    imageSrc: '/jetblue-plus-card.png',
    imageAlt: 'JetBlue Plus Card',
    annualFee: '$99',
    officialCardPageLink: 'https://cards.barclaycardus.com/banking/cards/jetblue-plus-card/',
    learnMoreLink: '/cards/jetblue-plus',
    ratesFeesLink: 'https://cards.barclaycardus.com/banking/cards/jetblue-plus-card/apply',
    ratingValue: 8.5,
    ratingStars: 4.3,
  },
  {
    id: 'jetblueBusiness',
    name: 'JetBlue Business Card',
    issuer: 'Barclays',
    imageSrc: '/jetblue-business-card.png',
    imageAlt: 'JetBlue Business Card',
    annualFee: '$99',
    officialCardPageLink: 'https://cards.barclaycardus.com/banking/cards/jetblue-business-card/',
    learnMoreLink: '/cards/jetblue-business',
    ratesFeesLink: 'https://cards.barclaycardus.com/banking/cards/jetblue-business-card/apply',
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
            url: `${SITE_BASE_URL}/images/travel-card-insider-logo-120.png`,
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
                <title>JetBlue Plus vs. JetBlue Business (2025 Review) | {SITE_NAME}</title>
                <meta
                name="description"
                content="An in-depth 2025 comparison of the JetBlue Plus and JetBlue Business cards after the TrueBlue loyalty program overhaul. We analyze fees, perks, and earning potential to find the champion."
                />
                <meta name="viewport" content="width=device-width,initial-scale=1" />
                <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
                <meta name="keywords" content="jetblue plus vs business, jetblue plus card review, jetblue business card review, best airline credit card 2025, jetblue mosaic status, trueblue loyalty program, travel credit card comparison" />
                <link rel="canonical" href={PAGE_URL} />
                <meta property="og:type" content="article" />
                <meta property="og:title" content={`JetBlue Plus vs. JetBlue Business (2025 Review) | ${SITE_NAME}`} />
                <meta property="og:description" content="A detailed breakdown of two powerful JetBlue cards in a new loyalty era. Find out which card is the right strategic tool for your travel style." />
                <meta property="og:url" content={PAGE_URL} />
                <meta property="og:site_name" content={SITE_NAME} />
                <meta property="og:image" content={`${SITE_BASE_URL}${HERO_IMAGE_SRC}`} />
                <meta property="og:image:alt" content={HERO_IMAGE_ALT} />
                <meta property="og:locale" content="en_US" />
                <meta property="article:published_time" content={DATE_PUBLISHED} />
                <meta property="article:modified_time" content={DATE_MODIFIED} />
                <meta property="article:author" content={author.name} />
                <meta property="article:section" content="Credit Card Reviews" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={`JetBlue Plus vs. Business (2025) - ${SITE_NAME}`} />
                <meta name="twitter:description" content="JetBlue overhauled its loyalty program. We dissect the Plus and Business cards to see which one offers the ultimate advantage for travelers in 2025." />
                <meta name="twitter:image" content={`${SITE_BASE_URL}${HERO_IMAGE_SRC}`} />
                {author.social.twitter && <meta name="twitter:creator" content={`@${author.social.twitter.split('/').pop()}`} />}
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: generateJsonLD() }} />
            </Head>

            <main className={styles.reviewContainer}>
                <header className={styles.reviewHeader}>
                  <h1 className={styles.mainHeading}>JetBlue Plus vs. JetBlue Business 2025: Which Wins After the Loyalty Overhaul?</h1>
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
                    <p className={styles.paragraph}>For US-based flyers, the choice between the JetBlue Plus Card and the JetBlue Business Card has always been a point of deliberation. Now, making the right decision is more critical than ever. This review will serve as your compass, guiding you through the new world of JetBlue rewards to help you determine which card is the champion for your wallet and travel style. For a broader look, see our ranking of the <Link href="/reviews/best-airline-credit-cards-2025"><a className={styles.link}>best airline credit cards for 2025</a></Link>.</p>
                    
                    <div className={styles.cardComparisonContainer}>
                        {cardData.map((card) => (
                            <div key={card.id} className={styles.cardComparisonItem}>
                                <div className={styles.cardImageContainer}>
                                    <Image src={card.imageSrc} alt={card.imageAlt} width={220} height={138} objectFit="contain" />
                                </div>
                                <div className={styles.cardDetails}>
                                    <h3 className={styles.heading3}>{card.name}</h3>
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

                    <section id="loyalty-revolution" className={styles.reviewSection}>
                        <h2 className={styles.sectionHeading}>The New Battleground: Understanding JetBlue's Loyalty Revolution</h2>
                        <p className={styles.paragraph}>The language of loyalty at JetBlue has changed. The old system is a relic, replaced by "tiles," a new metric rewarding engagement across the entire JetBlue ecosystem. To learn more, read our deep dive on <Link href="/guides/understanding-jetblue-trueblue-tiles"><a className={styles.link}>understanding JetBlue TrueBlue tiles</a></Link>. Travelers now earn tiles in two ways:</p>
                        <ul className={styles.list}>
                            <li className={styles.listItem}>1 tile for every $100 spent on JetBlue flights, JetBlue Vacations, and Paisly by JetBlue bookings.</li>
                            <li className={styles.listItem}>1 tile for every $1,000 spent on any of JetBlue's co-branded credit cards.</li>
                        </ul>
                        <p className={styles.paragraph}>This structure highlights a crucial reality: direct airline spending is ten times more effective for earning status than credit card spending. The card, therefore, becomes a strategic supplement rather than a primary pathway to the top.</p>
                        <h3 className={styles.heading3}>A New Mosaic: The Four-Tier System</h3>
                        <p className={styles.paragraph}>Adding to this is the shift from a single Mosaic status to a four-tier system:</p>
                        <ul className={styles.list}>
                            <li className={styles.listItem}><strong>Mosaic 1:</strong> 50 tiles</li>
                            <li className={styles.listItem}><strong>Mosaic 2:</strong> 100 tiles</li>
                            <li className={styles.listItem}><strong>Mosaic 3:</strong> 150 tiles</li>
                            <li className={styles.listItem}><strong>Mosaic 4:</strong> 250 tiles</li>
                        </ul>
                        <p className={styles.paragraph}>This tiered approach staggers perks and prestige, making it essential to understand which benefits are accessible at each level.</p>
                        <p className={styles.paragraph}>For budget travelers, the "Blue Basic Squeeze-Out" is a significant change. As of March 1, 2025, Mosaic members on Blue Basic fares lose key perks like complimentary Even More Space seats. This move compels even loyal customers to weigh a bare-bones ticket against a higher fare to unlock their earned benefits.</p>
                        <p className={styles.paragraph}>However, JetBlue is also investing in the premium experience. The first proprietary JetBlue airport lounges are set to open at JFK in late 2025, a key perk for top-tier Mosaic 4 members. This is a big step in competing for premium travelers, and you can learn more about <Link href="/guides/how-to-get-airport-lounge-access"><a className={styles.link}>how to get airport lounge access here</a></Link>. Furthermore, the "Blue Sky" partnership with United Airlines allows for reciprocal point earning and redemption and extends elite benefits across both carriers, dramatically widening the horizons for Mosaic members.</p>
                    </section>

                    {/* ... (Apply similar className changes to all other paragraphs, lists, etc.) ... */}

                    <section id="verdict" className={styles.reviewSection}>
                        <h2 className={styles.sectionHeading}>The Final Verdict: Choosing Your Champion for 2025</h2>
                        <p className={styles.paragraph}>In JetBlue's new loyalty landscape, the choice between the Plus and Business cards is more personal than ever. The decision hinges on a trade-off: the Plus card's lifestyle spending bonuses versus the Business card's guaranteed travel day perk. Learning to master <Link href="/guides/maximizing-credit-card-perks"><a className={styles.link}>maximizing your card's perks</a></Link> is essential.</p>
                    </section>
                </article>

                <section className={styles.aboutAuthorSection}>
                    <h2 className={styles.sectionHeading}>About the Author</h2>
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