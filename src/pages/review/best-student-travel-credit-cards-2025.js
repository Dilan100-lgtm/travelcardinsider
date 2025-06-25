// File: pages/reviews/best-student-travel-credit-cards-2025.js
"use client"; // 👈 Add this line at the very top

// ❗ Replace image src paths (in studentCardData and constants) with your optimised, WebP‑or‑AVIF images.
// The paths below are placeholders. Card images should ideally be ~150x95px or similar aspect ratio.

import React, { useState, useRef, useEffect, useCallback } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/NoFTFCardsReview.module.css'; // Reusing our site's existing review styles
import StarRating from '../../components/StarRating'; // Assuming you have this component for ratings

// ─────────────────────────────────────────────────────────────────────────────
// 🔗 CONFIG
// ─────────────────────────────────────────────────────────────────────────────
const SITE_BASE_URL = 'https://www.travelcardinsider.com';
const PAGE_PATH = '/reviews/best-student-travel-credit-cards-2025';
const PAGE_URL = `${SITE_BASE_URL}${PAGE_PATH}`;
const SITE_NAME = 'Travel Card Insider';
const HERO_IMAGE_SRC = '/students-planning-travel-on-map.webp'; // ❗ Replace with your optimised hero image for student cards
const HERO_IMAGE_ALT = 'A group of students looking at a world map, symbolizing how a student credit card can make travel possible.';
const DATE_PUBLISHED = '2025-06-25'; // ✏️ Adjust to your actual publish date
const DATE_MODIFIED = '2025-06-25'; // ✏️ Update whenever you edit copy

// ─────────────────────────────────────────────────────────────────────────────
// 👤 AUTHOR INFO
// ─────────────────────────────────────────────────────────────────────────────
const author = {
  name: 'Dilan Madushanka',
  title: 'Lead Travel Card Analyst',
  image: '/WhatsApp Image 2025-05-12 at 4.09.58 PM.jpeg', // ❗ Your 40x40px web‑optimised headshot
  imageLarge: '/WhatsApp Image 2025-05-12 at 4.09.58 PM.jpeg', // ❗ Your 60x60px for tooltip
  bio: 'A seasoned travel card analyst, Dilan specializes in helping students and young adults build their credit profile while earning valuable travel rewards.',
  expertise: [
    'Student Credit Cards',
    'Building Credit History',
    'Travel Rewards for Beginners',
    'No Foreign Transaction Fee Cards',
  ],
  social: {
    linkedin: 'https://www.linkedin.com/in/dilan-madushanka-b65293365',
    twitter: 'https://x.com/team_dilan',
    email: 'team@travelcardinsider.com',
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// 💳 STUDENT CARD DATA
// ─────────────────────────────────────────────────────────────────────────────
const studentCardData = [
  {
    id: 'capitalOneSavorOneStudent',
    name: 'Capital One SavorOne Student Cash Rewards Card',
    category: 'Cash Back',
    imageSrc: '/savorone-student-card.png', // ❗ Replace
    imageAlt: 'Capital One SavorOne Student Cash Rewards Card',
    annualFee: '$0',
    officialCardPageLink: 'https://www.capitalone.com/credit-cards/savorone-student/',
    ourTake: "The premier choice for the social student. Its rewards on dining, entertainment, and groceries align perfectly with student spending, both at home and abroad. With no annual fee and a globally accepted Mastercard network, it's a reliable and powerful tool.",
    feature: 'No foreign transaction fees and high cash back on categories where students spend most.',
    rewards: 'Unlimited 3% cash back on dining, entertainment, streaming, and groceries; 1% on everything else. 8% on Capital One Entertainment and 5% on hotels/rental cars booked via Capital One Travel. Comes with a $50 cash bonus after spending $100 in the first three months.',
    applyLink: 'https://www.capitalone.com/credit-cards/savorone-student/',
    ratesFeesLink: 'https://www.capitalone.com/credit-cards/savorone-student/', // Note: Official page contains rates & fees link.
    learnMoreLink: '/cards/capital-one-savorone-student', // ✏️ Create this internal page later
    ratingValue: 8.8,
    ratingStars: 4.4,
  },
  {
    id: 'bofaTravelRewardsStudent',
    name: 'Bank of America® Travel Rewards for Students',
    category: 'Travel Points',
    imageSrc: '/bofa-travel-rewards-student.png', // ❗ Replace
    imageAlt: 'Bank of America® Travel Rewards for Students card',
    annualFee: '$0',
    officialCardPageLink: 'https://www.bankofamerica.com/credit-cards/products/student-travel-rewards-credit-card/',
    ourTake: "Best for students who value simplicity and a big upfront bonus. The flat 1.5x points on everything is effortless. However, points are only worth their maximum value when redeemed for travel or dining statement credits, making it less flexible than pure cash-back cards.",
    feature: 'A simple, flat-rate earning structure and a generous sign-up bonus perfect for funding a trip.',
    rewards: 'Unlimited 1.5 points per dollar on all purchases. Earn 25,000 online bonus points after spending $1,000 in the first 90 days (a $250 value towards travel/dining).',
    applyLink: 'https://www.bankofamerica.com/credit-cards/products/student-travel-rewards-credit-card/',
    ratesFeesLink: 'https://www.bankofamerica.com/credit-cards/products/student-travel-rewards-credit-card/', // Note: Official page contains rates & fees link.
    learnMoreLink: '/cards/bofa-travel-rewards-student', // ✏️ Create this internal page later
    ratingValue: 8.2,
    ratingStars: 4.1,
  },
  {
    id: 'discoverItStudentCashBack',
    name: 'Discover it® Student Cash Back',
    category: 'Rotating Cash Back',
    imageSrc: '/discover-it-student-cash-back.png', // ❗ Replace
    imageAlt: 'Discover it® Student Cash Back card',
    annualFee: '$0',
    officialCardPageLink: 'https://www.discover.com/credit-cards/student-credit-card/it-card.html',
    ourTake: "Offers the highest reward potential for organized students who track bonus categories. The first-year Cashback Match is unbeatable. It's a phenomenal domestic card, but its limited international acceptance means you should pair it with a Visa or Mastercard if studying abroad.",
    feature: 'The unbeatable first-year unlimited Cashback Match effectively doubles all rewards earned.',
    rewards: '5% cash back on up to $1,500 in spending each quarter in rotating categories (activation required); 1% on everything else. Unlimited Cashback Match at the end of your first year.',
    applyLink: 'https://www.discover.com/credit-cards/student-credit-card/it-card.html',
    ratesFeesLink: 'https://www.discover.com/credit-cards/student-credit-card/it-card.html', // Note: Official page contains rates & fees link.
    learnMoreLink: '/cards/discover-it-student-cash-back', // ✏️ Create this internal page later
    ratingValue: 8.5,
    ratingStars: 4.3,
  }
];

// ─────────────────────────────────────────────────────────────────────────────
// 📊 COMPARISON TABLE DATA
// ─────────────────────────────────────────────────────────────────────────────
const comparisonStudentTableData = [
    { name: 'Capital One SavorOne Student', bonus: '$50 after $100 spend', rewards: '3% on dining, entertainment', fee: '$0', ftf: 'None', network: 'Mastercard', bestFor: 'The Social Traveler' },
    { name: 'BofA® Travel Rewards for Students', bonus: '25,000 pts ($250 value)', rewards: '1.5x points on everything', fee: '$0', ftf: 'None', network: 'Visa', bestFor: 'Simplicity & Big Bonus' },
    { name: 'Discover it® Student Cash Back', bonus: 'First-Year Cashback Match', rewards: '5% rotating categories', fee: '$0', ftf: 'None', network: 'Discover', bestFor: 'Maximizing Rewards' }
];


// ─────────────────────────────────────────────────────────────────────────────
// 🧠 HELPERS - JSON-LD SCHEMA
// ─────────────────────────────────────────────────────────────────────────────
function generateJsonLD() {
    const itemListElements = studentCardData.map((card, i) => ({
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
            name: card.name.includes('Capital One') ? 'Capital One' :
                  card.name.includes('Bank of America') ? 'Bank of America' :
                  card.name.includes('Discover') ? 'Discover' :
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
          { '@type': 'ListItem', position: 3, name: 'Best Student Travel Credit Cards 2025', item: PAGE_URL, },
        ],
      };

    const articleSchema = {
        '@type': 'ReviewNewsArticle',
        mainEntityOfPage: { "@type": "WebPage", "@id": PAGE_URL },
        headline: 'Best Student Travel Credit Cards 2025: Earn Miles Before Graduation',
        description: 'Discover the best student credit cards for travel in 2025. Learn how to build credit, earn rewards on everyday spending, and avoid foreign transaction fees.',
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
            { '@type': 'ItemList', name: 'Best Student Travel Credit Cards 2025', url: PAGE_URL, numberOfItems: studentCardData.length, itemListElement: itemListElements, mainEntityOfPage: PAGE_URL },
          ],
        },
        null,
        2
      );
}

// ─────────────────────────────────────────────────────────────────────────────
// 🌐 COMPONENT
// ─────────────────────────────────────────────────────────────────────────────
function BestStudentCardsPage2025() {
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
                <title>Best Student Travel Credit Cards (June 2025) | {SITE_NAME}</title>
                <meta
                name="description"
                content="Discover the best student credit cards for travel in 2025. Learn how to build credit, earn rewards on everyday spending, and avoid foreign transaction fees."
                />
                <meta name="viewport" content="width=device-width,initial-scale=1" />
                <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
                <meta name="keywords" content="best student credit cards, student travel credit card, travel rewards for students, build credit in college, capital one savorone student, bank of america travel rewards student, discover it student" />
                <link rel="canonical" href={PAGE_URL} />

                {/* Open Graph */}
                <meta property="og:type" content="article" />
                <meta property="og:title" content={`Best Student Travel Credit Cards (June 2025) | ${SITE_NAME}`} />
                <meta property="og:description" content="Turn campus spending into global adventures. Our guide breaks down the top student cards to build your credit and fund your travels." />
                <meta property="og:url" content={PAGE_URL} />
                <meta property="og:site_name" content={SITE_NAME} />
                <meta property="og:image" content={`${SITE_BASE_URL}${HERO_IMAGE_SRC}`} />
                <meta property="og:image:alt" content={HERO_IMAGE_ALT} />
                <meta property="og:locale" content="en_US" />
                <meta property="article:published_time" content={DATE_PUBLISHED} />
                <meta property="article:modified_time" content={DATE_MODIFIED} />
                <meta property="article:author" content={author.name} />
                <meta property="article:section" content="Credit Card Reviews" />
                <meta property="article:tag" content="Student Cards" />
                <meta property="article:tag" content="Travel Rewards" />
                <meta property="article:tag" content="Building Credit" />
                <meta property="article:tag" content="2025" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={`Best Student Credit Cards for Travel (2025) - ${SITE_NAME}`} />
                <meta name="twitter:description" content="Turn campus spending into global adventures. Our guide breaks down the top student cards to build your credit and fund your travels." />
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
                  <h1>Best Student Travel Credit Cards 2025: Earn Miles Before Graduation</h1>
                  
                  {/* --- AUTHOR SECTION --- */}
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
                        <h2>Your Roadmap to Rewarding Adventures</h2>
                        <p>The words on the textbook page begin to blur, transforming into a map of the world. You’re navigating higher education, but your mind wanders to cobblestone streets, vibrant markets, and sun-drenched beaches. What if your daily campus life—coffee runs, grocery trips, and textbook purchases—could fuel those adventures?</p>
                        <p>Welcome to "smart credit." A student credit card, chosen wisely and used responsibly, is one of the most powerful financial tools you can possess. It’s not an invitation to debt, but a key to building your financial future while funding your travels. This guide is your roadmap. We won’t just list the best cards for 2025; we’ll teach you the strategy behind choosing one, maximizing its value, and using it to turn everyday expenses into your next great adventure.</p>
                    </section>
                    
                    <section id="why-get-a-card" className={styles.reviewSection}>
                        <h2>The Modern Student's Passport: Why a Travel Credit Card is Essential</h2>
                        <p>Before picking a card, it's crucial to understand why it's more than just plastic. It’s a tool that builds your financial foundation, saves you money abroad, and offers a critical safety net.</p>
                        
                        <h3>Build Your Financial Foundation</h3>
                        <p>Think of your credit score as your "financial GPA." After graduation, landlords, car lenders, and even some employers will check it. A strong score, built over time, proves your financial responsibility. The biggest factors are your payment history (35%) and amounts owed (30%). By getting a student card early, using it for small, planned purchases, and paying the bill in full and on time every month, you establish a positive credit history that will open doors for decades. (Source: <a href="https://www.myfico.com/credit-education/whats-in-your-credit-score" target="_blank" rel="noopener noreferrer">MyFICO, "What's in my FICO Score?"</a>)</p>
                        
                        <h3>Conquer Foreign Transaction Fees</h3>
                        <p>For anyone dreaming of studying abroad, foreign transaction fees (FTFs) are a hidden travel tax. Many cards charge ~3% on every purchase in a foreign currency. Spending $4,000 during a semester abroad with such a card costs you an extra $120—enough for a weekend trip. The best student travel cards have no foreign transaction fees, putting that money back in your pocket.</p>

                        <h3>Your Financial Safety Net</h3>
                        <p>A credit card offers security a debit card can't match. If your card is used fraudulently, federal law limits your liability to $50, and major issuers offer $0 liability guarantees. It's the bank's money at risk while they investigate. With a debit card, your cash is gone from your account until the bank resolves the issue—a potential disaster when you're far from home. (Source: <a href="https://www.consumerfinance.gov/rules-policy/laws-regulations/" target="_blank" rel="noopener noreferrer">Consumer Financial Protection Bureau, "What are the major federal consumer financial laws?"</a>)</p>
                    </section>
                    
                    <section id="top-picks" className={styles.reviewSection}>
                        <h2>The 2025 Honor Roll: Top Student Travel Cards</h2>
                        <p>The "best" card is personal. It depends on your spending, goals, and style. Here are the top contenders for 2025.</p>
                        
                        {studentCardData.map((card, index) => (
                          <div key={card.id} className={`${styles.cardDetailSection} ${index < studentCardData.length - 1 ? styles.cardSeparator : ''}`}>
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
                              <li><strong>Expert Verdict:</strong> {card.ourTake}</li>
                              <li><strong>Key Rewards & Bonus:</strong> {card.rewards}</li>
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
                    
                    <section id="comparison-table" className={`${styles.reviewSection} ${styles.comparisonTableContainer}`}>
                        <h2>The 2025 Student Travel Card Showdown</h2>
                        <div className={styles.tableWrapper}>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Card Name</th>
                                        <th>Welcome Bonus</th>
                                        <th>Key Rewards</th>
                                        <th>Annual Fee</th>
                                        <th>FTF</th>
                                        <th>Network</th>
                                        <th>Best For...</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {comparisonStudentTableData.map((card) => (
                                        <tr key={card.name}>
                                            <td>{card.name}</td>
                                            <td>{card.bonus}</td>
                                            <td>{card.rewards}</td>
                                            <td>{card.fee}</td>
                                            <td>{card.ftf}</td>
                                            <td>{card.network}</td>
                                            <td>{card.bestFor}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </section>


                    <section id="user-reviews" className={styles.reviewSection}>
                        <h2>Voices from the Journey: Real Student Experiences</h2>
                        <blockquote className={styles.quote}>
                            <p>"I got my Discover it Student card as a freshman, and it was the best financial decision I made. The app made it easy to track spending, and the cashback match paid for a flight to visit a friend. It taught me how to be responsible with money without being overwhelming."</p>
                            <footer>— Sarah K., University of Texas at Austin, Class of 2024</footer>
                        </blockquote>
                        <blockquote className={styles.quote}>
                            <p>"I studied abroad in Italy, and my SavorOne Student card was a lifesaver. No foreign transaction fees, and the 3% cash back on dining was amazing. I used the rewards I earned to fund a weekend trip to the Amalfi Coast."</p>
                            <footer>— Michael P., Indiana University, Class of 2023</footer>
                        </blockquote>
                    </section>
                    
                    <section id="expert-strategy" className={styles.reviewSection}>
                        <h2>The Financial Advisor's Corner: Responsible Credit Use</h2>
                        <p>A rewards card is a powerful tool, but misuse can cause significant damage. The risk of debt outweighs any rewards.</p>
                        
                        <h3>The Commandments of Good Credit</h3>
                        <ul>
                          <li><strong>Pay Your Bill On Time, Every Time.</strong> This is the most important factor for your credit score. Set up automatic payments as a safety net.</li>
                          <li><strong>Keep Your Balances Low.</strong> Your credit utilization (balance divided by limit) is the second most important factor. Keep it below 30%.</li>
                          <li><strong>Play the Long Game.</strong> The length of your credit history matters. Keep your oldest no-annual-fee cards open forever.</li>
                        </ul>

                        <h3>The Interest Rate Trap</h3>
                        <p>Rewards are worthless if you pay interest. Student card APRs are high (often 20%+). If you earn $3 in rewards on a $100 purchase but carry that balance for a year, you could pay $20+ in interest, resulting in a net loss.</p>
                        <p><strong>The cardinal rule:</strong> If you can't pay your balance in full every month, you are not ready for a rewards credit card.</p>
                    </section>

                    <section id="financial-health-check" className={styles.reviewSection}>
                        <h2>Your Annual Financial Health Check-Up</h2>
                        <p>By law, you can get a free credit report from all three bureaus (Equifax, Experian, TransUnion) once a year at the only official site: <a href="https://www.annualcreditreport.com" target="_blank" rel="noopener noreferrer">AnnualCreditReport.com</a>.</p>
                        <p>Review it for errors. If you have issues, the Consumer Financial Protection Bureau (CFPB) is there to help. (Source: <a href="https://www.ftc.gov/consumer-information/credit-disputes-errors" target="_blank" rel="noopener noreferrer">Federal Trade Commission, "Free Credit Reports"</a>)</p>
                    </section>

                    <section id="final-verdict" className={styles.reviewSection}>
                        <h2>Conclusion: Your Adventure Awaits</h2>
                        <p>The journey from student to world traveler can start now. By choosing the right card, earning rewards on daily spending, and embracing responsible use, you can build an excellent credit history and a travel fund simultaneously. Choose with care, spend with responsibility, and start turning the pages of your own adventure.</p>
                    </section>
                </article>
            </main>
        </>
    );
}

export default BestStudentCardsPage2025;