// File: pages/reviews/citi-strata-premier-vs-amex-gold-2025.js
"use client"; // 👈 Add this line at the very top

// ❗ Replace image src paths with your optimised, WebP‑or‑AVIF images.
// Card images should ideally be ~250x158px or a similar aspect ratio.

import React, { useState, useRef, useCallback } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/NoFTFCardsReview.module.css'; // Reusing your excellent styles
import StarRating from '../../components/StarRating'; // Optional: for visual flair

// ─────────────────────────────────────────────────────────────────────────────
// 🔗 CONFIG
// ─────────────────────────────────────────────────────────────────────────────
const SITE_BASE_URL = 'https://www.travelcardinsider.com';
const PAGE_PATH = '/reviews/citi-strata-premier-vs-amex-gold-2025';
const PAGE_URL = `${SITE_BASE_URL}${PAGE_PATH}`;
const SITE_NAME = 'Travel Card Insider';
const HERO_IMAGE_SRC = '/alex-guillaume-2VxHR3BkacM-unsplash.webp'; // ❗ Replace with a unique, optimised hero image for this showdown
const HERO_IMAGE_ALT = 'Split-screen image showing a bustling city street for Amex Gold and a scenic mountain road for Citi Strata Premier, symbolizing their different strengths';
const DATE_PUBLISHED = '2025-06-14';
const DATE_MODIFIED = '2025-06-14';

// ─────────────────────────────────────────────────────────────────────────────
// 👤 AUTHOR INFO
// ─────────────────────────────────────────────────────────────────────────────
const author = {
  name: 'Dilan Madushanka',
  title: 'Lead Travel Card Analyst',
  image: '/WhatsApp Image 2025-05-12 at 4.09.58 PM.jpeg', // ❗ Your 40x40px web‑optimised headshot
  imageLarge: '/WhatsApp Image 2025-05-12 at 4.09.58 PM.jpeg', // ❗ Your 60x60px for tooltip
  bio: 'Seasoned travel-card analyst specializing in head-to-head comparisons of premium rewards cards to help US travelers maximize value.',
  expertise: [
    'Premium Card Analysis',
    'Rewards Program Valuation (Amex, Citi)',
    'Credit Card Strategy',
    'Travel Hacking & Optimization',
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
const citiStrataPremierData = {
    id: 'citiStrataPremier',
    name: 'Citi Strata Premier℠ Card',
    imageSrc: '/download1.png', // ❗ Replace with actual card image
    imageAlt: 'Citi Strata Premier℠ Card',
    officialCardPageLink: 'https://www.citi.com/credit-cards/citi-strata-premier-credit-card',
    applyLink: 'https://www.citi.com/credit-cards/citi-strata-premier-credit-card', // Replace with affiliate link if available
    ratesFeesLink: 'https://www.citi.com/credit-cards/citi-strata-premier-credit-card', // Find direct rates/fees link
    learnMoreLink: '/cards/citi-strata-premier', // ✏️ Create this internal page later
};

const amexGoldData = {
    id: 'amexGold',
    name: 'American Express® Gold Card',
    imageSrc: '/NUS000000174_480x304_straight_withname.avif', // ❗ Replace with actual card image
    imageAlt: 'American Express® Gold Card',
    officialCardPageLink: 'https://www.americanexpress.com/us/credit-cards/card/gold-card/',
    applyLink: 'https://www.americanexpress.com/us/credit-cards/card/gold-card/', // Replace with affiliate link
    ratesFeesLink: 'https://www.americanexpress.com/us/credit-cards/card-applications/apply/gold-card/ep-3642#offer-terms',
    learnMoreLink: '/cards/american-express-gold', // ✏️ Create this internal page later
};

// ─────────────────────────────────────────────────────────────────────────────
// 📊 COMPARISON TABLE DATA
// ─────────────────────────────────────────────────────────────────────────────
const comparisonTableData = [
  { feature: 'Annual Fee', citi: '$95', amex: '$325' },
  { feature: 'Welcome Bonus', citi: '60,000 ThankYou® Points (after $4,000 spend in 3 months)', amex: '60,000 Membership Rewards® Points (after $6,000 spend in 6 months)' },
  { feature: 'Dining Rewards', citi: '3X Points', amex: '4X Points' },
  { feature: 'Gas Station Rewards', citi: '3X Points (includes EV charging)', amex: '1X Point' },
  { feature: 'U.S. Supermarket Rewards', citi: '3X Points (no annual cap)', amex: '4X Points (on up to $25,000 per year)' },
  { feature: 'Air Travel Rewards', citi: '3X Points on air travel', amex: '3X Points on flights booked directly or on AmexTravel.com' },
  { feature: 'Key Annual Credits', citi: '$100 Annual Hotel Credit (on a single stay of $500+ booked via CitiTravel.com)', amex: 'Up to $240: $120 Uber Cash & $120 Dining Credit' },
  { feature: 'Foreign Transaction Fees', citi: 'None', amex: 'None' },
];

// ─────────────────────────────────────────────────────────────────────────────
// 🧠 HELPERS - JSON-LD SCHEMA
// ─────────────────────────────────────────────────────────────────────────────
function generateJsonLD() {
    const citiProduct = {
        '@type': 'Product',
        name: citiStrataPremierData.name,
        url: `${SITE_BASE_URL}${citiStrataPremierData.learnMoreLink}`,
        image: `${SITE_BASE_URL}${citiStrataPremierData.imageSrc}`,
        description: "A versatile travel card with 3X points on restaurants, supermarkets, gas stations, air travel, and hotels.",
        brand: { '@type': 'Brand', name: 'Citi' },
        manufacturer: { '@type': 'Organization', name: 'Citibank' },
        offers: { '@type': 'Offer', priceCurrency: 'USD', price: '95', url: citiStrataPremierData.applyLink }
    };

    const amexProduct = {
        '@type': 'Product',
        name: amexGoldData.name,
        url: `${SITE_BASE_URL}${amexGoldData.learnMoreLink}`,
        image: `${SITE_BASE_URL}${amexGoldData.imageSrc}`,
        description: "A premium card for foodies, offering 4X points at restaurants worldwide and at U.S. supermarkets.",
        brand: { '@type': 'Brand', name: 'American Express' },
        manufacturer: { '@type': 'Organization', name: 'American Express' },
        offers: { '@type': 'Offer', priceCurrency: 'USD', price: '250', url: amexGoldData.applyLink }
    };

    const breadcrumbsSchema = {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_BASE_URL },
          { '@type': 'ListItem', position: 2, name: 'Reviews', item: `${SITE_BASE_URL}/reviews` },
          { '@type': 'ListItem', position: 3, name: `Citi Strata Premier vs. Amex Gold (June 2025)`, item: PAGE_URL },
        ],
      };

    const articleSchema = {
        '@type': 'ReviewNewsArticle',
        mainEntityOfPage: { "@type": "WebPage", "@id": PAGE_URL },
        headline: 'Citi Strata Premier vs. Amex Gold (2025): The Ultimate Showdown',
        description: 'A deep-dive comparison of the Citi Strata Premier and Amex Gold cards for US travelers. We analyze rewards on dining, gas, and travel to find the best fit for your wallet.',
        image: [`${SITE_BASE_URL}${HERO_IMAGE_SRC}`],
        author: {
          '@type': 'Person',
          name: author.name,
          url: author.social.linkedin || SITE_BASE_URL,
          image: `${SITE_BASE_URL}${author.imageLarge || author.image}`,
          jobTitle: author.title,
        },
        publisher: {
          '@type': 'Organization',
          name: SITE_NAME,
          logo: { '@type': 'ImageObject', url: `${SITE_BASE_URL}/images/travel-card-insider-logo-120.png` }, // ❗ Ensure logo exists
        },
        datePublished: DATE_PUBLISHED,
        dateModified: DATE_MODIFIED,
        about: [citiProduct, amexProduct],
        itemReviewed: [citiProduct, amexProduct],
    };

    return JSON.stringify({ '@context': 'https://schema.org', '@graph': [articleSchema, breadcrumbsSchema] }, null, 2);
}

// ─────────────────────────────────────────────────────────────────────────────
// 🌐 COMPONENT
// ─────────────────────────────────────────────────────────────────────────────
function CitiVsAmexShowdownPage2025() {
    // Tooltip logic from your template
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
            if (triggerRef.current?.matches(':hover')) isStillHovering = true;
            if (tooltipRef.current?.matches(':hover')) isStillHovering = true;
            if (!isStillHovering) setShowTooltip(false);
        }, 150);
    }, []);

    return (
        <>
            <Head>
                {/* Core SEO */}
                <title>Citi Strata Premier vs. Amex Gold (June 2025) | {SITE_NAME}</title>
                <meta name="description" content="The ultimate showdown for US travelers. Compare rewards, credits, and fees of the Citi Strata Premier vs. the Amex Gold to see which card wins in 2025." />
                <meta name="viewport" content="width=device-width,initial-scale=1" />
                <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
                <meta name="keywords" content="citi strata premier vs amex gold, amex gold vs citi premier, best travel card 2025, citi thankyou points, amex membership rewards, travel credit card comparison" />
                <link rel="canonical" href={PAGE_URL} />

                {/* Open Graph */}
                <meta property="og:type" content="article" />
                <meta property="og:title" content={`Citi Strata Premier vs. Amex Gold (2025 Showdown) | ${SITE_NAME}`} />
                <meta property="og:description" content="Is the versatile Citi Strata Premier or the foodie-focused Amex Gold right for you? Our deep dive breaks it all down." />
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
                <meta name="twitter:title" content="Citi Strata Premier vs. Amex Gold (2025) - Travel Card Insider" />
                <meta name="twitter:description" content="We compare the two heaviest hitters in travel rewards. See who wins the showdown for dining, gas, and points flexibility." />
                <meta name="twitter:image" content={`${SITE_BASE_URL}${HERO_IMAGE_SRC}`} />
                {author.social.twitter && <meta name="twitter:creator" content={`@${author.social.twitter.split('/').pop()}`} />}
                
                {/* JSON‑LD Schema */}
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: generateJsonLD() }} />
            </Head>

            <main className={styles.reviewContainer}>
                 <header className={styles.reviewHeader}>
                  <h1>Citi Strata Premier vs. Amex Gold (2025): The Ultimate Showdown for the US Traveler</h1>
                   {/* Author Bio Section (from your template) */}
                   <div className={styles.authorBioContainer} ref={triggerRef} onMouseEnter={handleMouseEnterTriggerOrTooltip} onMouseLeave={handleMouseLeaveTriggerOrTooltip} onFocus={handleMouseEnterTriggerOrTooltip} onBlur={handleMouseLeaveTriggerOrTooltip} aria-haspopup="true" aria-expanded={showTooltip} tabIndex={0}>
                       <Image src={author.image} alt={`${author.name} headshot`} width={40} height={40} className={styles.authorImageSmall} priority />
                       <div className={styles.authorInfo}>
                           <span className={styles.authorName}>{author.name}</span> 
                           <span className={styles.authorTitle}>{author.title}</span> 
                           <time dateTime={DATE_MODIFIED} className={styles.authorLastEdited}>Last updated: {new Date(DATE_MODIFIED).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
                       </div>
                       {showTooltip && (<div className={styles.authorTooltip} ref={tooltipRef} role="tooltip" onMouseEnter={handleMouseEnterTriggerOrTooltip} onMouseLeave={handleMouseLeaveTriggerOrTooltip}>
                           <div className={styles.authorTooltipHeader}><Image src={author.imageLarge} alt={`${author.name} headshot`} width={60} height={60} className={styles.authorTooltipImage} /><div className={styles.authorTooltipInfo}><span className={styles.authorTooltipName}>{author.name}</span><span className={styles.authorTooltipTitle}>{author.title}</span></div></div>
                           <div className={styles.authorTooltipExpertise}><strong>Expertise</strong><ul>{author.expertise.map(area => <li key={area}>{area}</li>)}</ul></div>
                           <p className={styles.authorTooltipBioSnippet}>{author.bio}</p>
                           <div className={styles.authorTooltipFooter}><div className={styles.authorTooltipSocials}>{author.social.linkedin && (<a href={author.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`${author.name} on LinkedIn`} className={styles.socialIconLink}><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg></a>)}{author.social.twitter && (<a href={author.social.twitter} target="_blank" rel="noopener noreferrer" aria-label={`${author.name} on Twitter`} className={styles.socialIconLink}><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-.422.724-.665 1.56-.665 2.452 0 1.697.864 3.198 2.18 4.078-.8-.025-1.555-.247-2.227-.616v.054c0 2.37 1.683 4.333 3.91 4.78-.426.116-.874.174-1.337.174-.31 0-.611-.03-.904-.085.622 1.936 2.421 3.338 4.553 3.377-1.672 1.309-3.781 2.088-6.072 2.088-.394 0-.784-.023-1.169-.069 2.16 1.389 4.723 2.202 7.482 2.202 8.979 0 13.897-7.446 13.897-13.898 0-.21 0-.42-.015-.63.953-.689 1.778-1.56 2.433-2.525z"/></svg></a>)}{author.social.email && (<a href={`mailto:${author.social.email}`} aria-label={`Email ${author.name}`} className={styles.socialIconLink}><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"/></svg></a>)}</div><Link href={`/author/${author.name.toLowerCase().replace(' ', '-')}`} legacyBehavior><a className={styles.authorBioLink}>See Full Bio</a></Link></div>
                       </div>)}
                   </div>
                </header>

                <div className={styles.heroSection}>
                    <Image src={HERO_IMAGE_SRC} alt={HERO_IMAGE_ALT} layout="responsive" width={900} height={450} objectFit="cover" priority className={styles.heroImage} />
                </div>
                 <p className={styles.disclaimer}>
                  <strong>Disclaimer:</strong> Card offers, terms, and rewards are subject to change and are accurate as of {new Date(DATE_MODIFIED).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}. Please verify all details directly with the card issuer. This page may contain affiliate links.
                </p>

                <article>
                    <section className={styles.reviewSection}>
                        <p>For US travelers, picking the right credit card in 2025 can feel like navigating a maze. Every card promises a world of rewards, but the truth is, the "best" card is deeply personal. It's the one that clicks with your spending, your travel dreams, and your lifestyle.</p>
                        <p>Two of the heaviest hitters in the premium travel card space are the Citi Strata Premier℠ Card and the American Express® Gold Card. They both command a loyal following and are vying for that top spot in your wallet. But they play the game very differently. One is a versatile workhorse with broad appeal, while the other is a specialist designed for a specific kind of spender.</p>
                        <p>This showdown will break down exactly what each card offers in 2025. We'll dive deep into the categories that matter most to US travelers: rewards on dining and gas, and the power of their flexible points programs. Let's find the right card for you.</p>
                    </section>

                    <section id="quick-facts" className={styles.reviewSection}>
                        <h2>Quick Facts: Citi Strata Premier vs. Amex Gold</h2>
                        <p>Before we get into the weeds, here’s a high-level look at how these two cards stack up.</p>
                        <div className={styles.tableContainer}>
                            <table className={styles.comparisonTable}>
                                <thead>
                                    <tr>
                                        <th scope="col">Feature</th>
                                        <th scope="col">{citiStrataPremierData.name}</th>
                                        <th scope="col">{amexGoldData.name}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {comparisonTableData.map((row) => (
                                        <tr key={row.feature}>
                                            <th scope="row">{row.feature}</th>
                                            <td>{row.citi}</td>
                                            <td>{row.amex}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <p>This table immediately highlights the core trade-off. The Citi Strata Premier has a low annual fee and strong, broad bonus categories, especially for gas. The Amex Gold has a higher fee but offers elite earning rates for foodies and a suite of monthly credits designed to offset the cost.</p>
                    </section>

                    {/* --- CITI STRATA PREMIER SECTION --- */}
                    <section id="citi-strata-premier" className={styles.reviewSection}>
                        <div className={styles.cardDetailSection}>
                             <div className={styles.cardHeader}>
                                <div className={styles.cardImageContainer}>
                                    <Image src={citiStrataPremierData.imageSrc} alt={citiStrataPremierData.imageAlt} width={250} height={158} objectFit="contain" />
                                </div>
                                <div className={styles.cardTitleRating}>
                                  <h3>The Citi Strata Premier℠ Card: The All-Around Value King</h3>
                                </div>
                            </div>
                            <p>The Citi Strata Premier is for the traveler who wants straightforward, high-value rewards across a wide range of everyday spending without a hefty annual fee. It’s a versatile and powerful tool.</p>
                            
                            <h4>Earning Power: The 3X Workhorse</h4>
                            <p>The beauty of the Strata Premier is its simplicity and breadth. You earn a solid 3X ThankYou® Points per dollar on a huge list of common expenses:</p>
                            <ul>
                                <li>Restaurants</li>
                                <li>Supermarkets</li>
                                <li>Gas Stations and EV Charging</li>
                                <li>Air Travel</li>
                                <li>Hotels</li>
                            </ul>
                            <p>The inclusion of gas stations at 3X is a massive differentiator and a huge win for commuters and road-trippers. For those willing to use the bank's travel portal, the card offers an incredible 10X points per dollar on hotels, car rentals, and attractions booked through <a href="https://www.cititravel.com/" target="_blank" rel="noopener noreferrer sponsored">CitiTravel.com</a>.</p>

                            <h4>The $100 Annual Hotel Perk</h4>
                            <p>Each year, you get a $100 credit off a single hotel stay of $500 or more (before taxes) booked through the Citi travel portal. If you use this perk—and for most travelers, that’s not hard to do on a multi-night stay—you’ve already made back your annual fee and then some. This effectively makes the card’s annual fee a net negative $5.</p>

                            <h4>Citi ThankYou® Points: A Flexible & Underrated Program</h4>
                            <p>Citi's ThankYou Points are incredibly flexible. You can redeem them for cash back or travel, but the best value comes from transferring them to airline partners. The program covers all three major airline alliances, giving you global reach.</p>
                            <p>Key airline partners include <a href="https://www.lifemiles.com/" target="_blank" rel="noopener noreferrer">Avianca LifeMiles</a> (great for Star Alliance flights like United), <a href="https://www.flyingblue.us/en/" target="_blank" rel="noopener noreferrer">Flying Blue</a> (Air France/KLM), and <a href="https://www.virginatlantic.com/us/en/flying-club.html" target="_blank" rel="noopener noreferrer">Virgin Atlantic Flying Club</a> (a fantastic way to book Delta flights). It also partners with a key US carrier, <a href="https://www.jetblue.com/trueblue" target="_blank" rel="noopener noreferrer">JetBlue TrueBlue®</a>. See the full list on the <a href="https://www.citi.com/citi-partner/thankyou/logga" target="_blank" rel="noopener noreferrer sponsored">Official ThankYou Rewards site</a>.</p>
                            
                             <blockquote className={styles.quote}>
                                <p>"As a dad with two kids, the Strata Premier is my go-to card. We do a couple of road trips a year, so the 3X on gas is unbeatable. Plus, the 3X on groceries with no spending cap is a huge help. I use the $100 hotel credit for our annual summer vacation, which basically pays the annual fee for me. It’s just a simple, no-fuss card that delivers real value on our family's biggest expenses."</p>
                                <footer>— David R., Suburban Parent</footer>
                            </blockquote>

                             <div className={styles.cardButtonsContainer}>
                                <a href={citiStrataPremierData.applyLink} target="_blank" rel="noopener noreferrer sponsored" className={`${styles.cardButton} ${styles.applyButton}`}>Visit Official Site</a>
                                <a href={citiStrataPremierData.ratesFeesLink} target="_blank" rel="noopener noreferrer sponsored" className={`${styles.cardButton} ${styles.secondaryButton}`}>Rates & Fees</a>
                            </div>
                        </div>
                    </section>

                     {/* --- AMEX GOLD SECTION --- */}
                    <section id="amex-gold" className={styles.reviewSection}>
                        <div className={styles.cardDetailSection}>
                             <div className={styles.cardHeader}>
                                <div className={styles.cardImageContainer}>
                                    <Image src={amexGoldData.imageSrc} alt={amexGoldData.imageAlt} width={250} height={158} objectFit="contain" />
                                </div>
                                <div className={styles.cardTitleRating}>
                                  <h3>The American Express® Gold Card: The Foodie's and Lifestyle Specialist's Card</h3>
                                </div>
                            </div>
                            <p>The Amex Gold Card is designed for a specific type of US traveler: one whose budget is heavily weighted towards dining and groceries and who can master the card's "coupon book" of monthly credits to unlock massive value.</p>
                            
                            <h4>Earning Power: The 4X Food-Focused Machine</h4>
                            <p>The Amex Gold is a legend in the dining category for a reason. You earn:</p>
                             <ul>
                                <li><strong>4X Membership Rewards® Points</strong> at restaurants worldwide.</li>
                                <li><strong>4X Membership Rewards® Points</strong> at U.S. supermarkets (on up to $25,000 in spending per year).</li>
                                <li><strong>3X Membership Rewards® Points</strong> on flights booked directly with airlines or on <a href="https://www.amextravel.com/" target="_blank" rel="noopener noreferrer sponsored">AmexTravel.com</a>.</li>
                             </ul>
                             <p>That 4X multiplier on dining and groceries is best-in-class and can rack up points at an incredible rate for those who spend heavily in these areas.</p>

                            <h4>The Credit System: Your Key to Unlocking Value</h4>
                            <p>The card's $250 annual fee is offset by a collection of monthly statement credits. To win with this card, you need to use them.</p>
                             <ul>
                                 <li><strong>$120 Uber Cash:</strong> You get $10 in Uber Cash each month, good for Uber rides or Uber Eats orders in the U.S.</li>
                                 <li><strong>$120 Dining Credit:</strong> You get $10 in statement credits each month when you use your card at Grubhub, The Cheesecake Factory, and other select partners.</li>
                             </ul>
                             <p>If you are already a regular user of these services, these credits provide $240 in annual value, bringing your effective annual fee down. For the right person, this is an amazing deal. However, if you have to go out of your way to use them, their value diminishes.</p>

                            <h4>Amex Membership Rewards®: The Premium Points Powerhouse</h4>
                            <p>Membership Rewards are widely considered one of the most valuable points currencies. The program has an extensive list of transfer partners, giving you incredible redemption options.</p>
                            <p>The key advantage for many US flyers is the 1:1 transfer partnership with <a href="https://www.delta.com/us/en/skymiles/" target="_blank" rel="noopener noreferrer">Delta SkyMiles®</a>. It also features powerhouse international programs like <a href="https://www.aircanada.com/ca/en/aco/home/aeroplan.html" target="_blank" rel="noopener noreferrer">Air Canada Aeroplan</a>, <a href="https://www.ana.co.jp/en/us/amc/" target="_blank" rel="noopener noreferrer">ANA Mileage Club</a> (known for amazing award deals), and <a href="https://www.britishairways.com/en-us/executive-club" target="_blank" rel="noopener noreferrer">British Airways Executive Club</a>. Explore your options on the <a href="https://global.americanexpress.com/rewards/transfer" target="_blank" rel="noopener noreferrer sponsored">Official Membership Rewards site</a>.</p>

                             <blockquote className={styles.quote}>
                                <p>"I live in Chicago and my Amex Gold is my secret weapon. I easily use the $10 Uber credit for my rides and the $10 dining credit on my weekly Grubhub order. The 4X points I earn from dining out with friends and on my groceries is just insane. Last year, I transferred my points to Delta and booked a round-trip flight to visit my family in Florida, completely on points. For my lifestyle, no other card comes close."</p>
                                <footer>— Jessica L., Urban Professional</footer>
                            </blockquote>

                             <div className={styles.cardButtonsContainer}>
                                <a href={amexGoldData.applyLink} target="_blank" rel="noopener noreferrer sponsored" className={`${styles.cardButton} ${styles.applyButton}`}>Visit Official Site</a>
                                <a href={amexGoldData.ratesFeesLink} target="_blank" rel="noopener noreferrer sponsored" className={`${styles.cardButton} ${styles.secondaryButton}`}>Rates & Fees</a>
                            </div>
                        </div>
                    </section>
                    
                    <section id="head-to-head" className={styles.reviewSection}>
                        <h2>Head-to-Head: Where It Matters Most</h2>

                        <h3>The Dining Duel</h3>
                        <p><strong>Winner: American Express Gold</strong></p>
                        <p>Why: You simply can't beat 4X points on dining worldwide. When you add in the Dining and Uber Eats credits, the Amex Gold is built for those who love food. The Strata Premier’s 3X is strong, but Amex wins the category.</p>

                        <h3>The Gas & Groceries Gauntlet</h3>
                        <p><strong>Winner: It's a Split Decision</strong></p>
                        <ul>
                            <li><strong>For Gas:</strong> The <strong>Citi Strata Premier</strong> is the decisive winner with 3X points. The Amex Gold only earns a meager 1X, making it a poor choice for this category.</li>
                            <li><strong>For Groceries:</strong> The <strong>Amex Gold</strong> has the higher earning rate at 4X. However, its bonus is capped at $25,000 in spending per year, and it only applies to U.S. supermarkets. The <strong>Citi Strata Premier</strong> earns a solid 3X with no annual cap, which could make it more rewarding for families with very high grocery bills.</li>
                        </ul>

                        <h3>The Transfer Partner Tussle</h3>
                        <p><strong>Winner: Too Close to Call – It Depends on You</strong></p>
                        <p>Why: Both programs are excellent. The "best" one depends entirely on your travel goals.</p>
                        <ul>
                            <li>If you're a loyal Delta flyer, the <strong>Amex Gold</strong> has a clear edge with its direct 1:1 transfer partnership. It also has a slightly larger network of airline partners overall.</li>
                            <li>The <strong>Citi Strata Premier</strong> holds its own with fantastic partners like Virgin Atlantic (for booking Delta awards), Avianca LifeMiles (for Star Alliance awards), and JetBlue. It's a powerful and flexible program for the savvy traveler.</li>
                        </ul>
                    </section>

                    <section id="final-verdict" className={styles.reviewSection}>
                        <h2>The Final Verdict: Which Card is Your 2025 Travel Companion?</h2>
                        <p>There is no single winner here. The right card is the one that aligns with your life.</p>
                        <p><strong>Choose the Citi Strata Premier℠ Card if:</strong> You want a versatile, low-cost workhorse. If you spend a significant amount on gas, value strong, uncapped rewards on groceries and dining, and want a simple annual credit that makes the card practically free, this is your card. It's for the traveler who prizes straightforward value across a broad range of spending.</p>
                        <p><strong>Choose the American Express® Gold Card if:</strong> You are a foodie and a frequent U.S. grocery shopper. If your spending is heavily concentrated in those two areas and you can naturally use the monthly Uber and Dining credits, this card will reward you handsomely. It’s for the optimizer who is willing to engage with the card's benefits to unlock its full, premium potential. You can <a href="https://www.americanexpress.com/us/credit-cards/compare/gold-card-vs-platinum-card-vs-green-card/" target="_blank" rel="noopener noreferrer sponsored">Compare Cards on the Amex Official Site</a>.</p>
                    </section>

                    <section id="next-steps" className={styles.reviewSection}>
                        <h2>Your Next Step</h2>
                        <p>Before you apply, do this:</p>
                        <ol>
                            <li><strong>Look at Your Last Two Months of Spending:</strong> Where does your money actually go? Be honest. Let the numbers guide you to the card that offers the best return on your actual spending habits.</li>
                            <li><strong>Assess the Credits:</strong> Will you genuinely use the Amex Gold's monthly credits without changing your habits? If not, their value is zero.</li>
                            <li><strong>Check Your Airline Loyalty:</strong> Do you have a preferred airline? Check which card partners with them to make your dream trip a reality. (Example: <a href="https://www.delta.com/us/en/skymiles/how-to-earn-miles/airline-partners" target="_blank" rel="noopener noreferrer">Delta SkyMiles Partners Page</a>).</li>
                        </ol>
                        <p>Ultimately, whether you choose the versatile power of the Citi Strata Premier or the specialized rewards of the American Express Gold, you’re getting a fantastic tool. Choose wisely, and you’ll be turning your everyday purchases into incredible travel memories for years to come.</p>
                    </section>
                </article>
            </main>
        </>
    );
}

export default CitiVsAmexShowdownPage2025;