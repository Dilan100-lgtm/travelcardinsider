// File: pages/reviews/credit-card-cell-phone-protection-guide-2025.js
"use client"; // 👈 Add this line at the very top

import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/NoFTFCardsReview.module.css'; // Reusing your excellent, existing styles
import StarRating from '../../components/StarRating'; // Assuming you have a StarRating component

// ─────────────────────────────────────────────────────────────────────────────
// 🔗 CONFIG
// ─────────────────────────────────────────────────────────────────────────────
const SITE_BASE_URL = 'https://www.travelcardinsider.com';
const PAGE_PATH = '/reviews/credit-card-cell-phone-protection-guide-2025';
const PAGE_URL = `${SITE_BASE_URL}${PAGE_PATH}`;
const SITE_NAME = 'Travel Card Insider';
const HERO_IMAGE_SRC = '/images/reviews/phone-passport-hero.webp'; // ❗ Replace with your optimised hero image
const HERO_IMAGE_ALT = 'A smartphone displaying a digital passport next to a physical passport, symbolizing modern travel.';
const DATE_PUBLISHED = '2025-07-07';
const DATE_MODIFIED = '2025-07-07';

// ─────────────────────────────────────────────────────────────────────────────
// 👤 AUTHOR INFO
// ─────────────────────────────────────────────────────────────────────────────
const author = {
  name: 'Dilan Madushanka',
  title: 'Lead Travel Tech Analyst',
  image: '/WhatsApp Image 2025-05-12 at 4.09.58 PM.jpeg', // ❗ Your 40x40px web‑optimised headshot
  bio: 'Dilan is a leading expert in the intersection of travel and technology, focusing on how digital tools and financial products can enhance the travel experience and provide critical safety nets for globetrotters.',
  social: {
    linkedin: 'https://www.linkedin.com/in/dilan-madushanka-b65293365',
    twitter: 'https://x.com/team_dilan',
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// 💳 CARD DATA
// ─────────────────────────────────────────────────────────────────────────────
const protectionCardData = [
  {
    id: 'amexPlatinum',
    name: 'The Platinum Card® from American Express',
    category: 'Luxury Globetrotter',
    imageSrc: '/images/cards/amex-platinum-card.png', // ❗ Replace
    imageAlt: 'The Platinum Card® from American Express',
    ratingValue: 9.2,
    ratingStars: 4.6,
    ourTake: "Its phone protection is robust, offering up to $800 per claim with a low $50 deductible. Its standout feature is its policy explicitly stating it covers a \"Cracked Screen\", removing the ambiguity found elsewhere.",
    applyLink: 'https://www.americanexpress.com/us/credit-cards/card/platinum/',
    ratesFeesLink: 'https://www.americanexpress.com/us/credit-cards/card-application/apply/prospect/terms/platinum-card/25330-10-0#FeeTable',
    learnMoreLink: '/reviews/cards/amex-platinum-review-2025',
    officialSourceLink: 'https://global.americanexpress.com/card-benefits/detail/cell-phone-protection/platinum',
  },
  {
    id: 'ventureX',
    name: 'Capital One Venture X Rewards Credit Card',
    category: 'Savvy Strategist',
    imageSrc: '/images/cards/venture-x-card.png', // ❗ Replace
    imageAlt: 'Capital One Venture X Rewards Credit Card',
    ratingValue: 9.5,
    ratingStars: 4.8,
    ourTake: "It matches the Amex Platinum’s coverage ($800 per claim, $50 deductible) but at a more accessible $395 annual fee. Its ace in the hole is the \"involuntary and accidental parting\" coverage, making it the top choice for adventurers.",
    applyLink: 'https://www.capitalone.com/credit-cards/venture-x/',
    ratesFeesLink: 'https://www.capitalone.com/credit-cards/venture-x/',
    learnMoreLink: '/reviews/cards/capital-one-venture-x-review-2025',
    officialSourceLink: 'https://www.capitalone.com/credit-cards/venture-x/',
  },
  {
    id: 'inkPreferred',
    name: 'Ink Business Preferred® Credit Card',
    category: 'Entrepreneur & Road Warrior',
    imageSrc: '/images/cards/ink-business-preferred-card.png', // ❗ Replace
    imageAlt: 'Ink Business Preferred® Credit Card',
    ratingValue: 9.8,
    ratingStars: 4.9,
    ourTake: "In a league of its own for business users, it boasts a market-leading $1,000 per claim, with up to three claims per year. The $100 deductible is a small price for such superior limits, and it earns 3X points on phone services.",
    applyLink: 'https://creditcards.chase.com/business-credit-cards/ink/business-preferred',
    ratesFeesLink: 'https://creditcards.chase.com/business-credit-cards/ink/business-preferred',
    learnMoreLink: '/reviews/cards/ink-business-preferred-review-2025', // ✏️ Create this internal page later
    officialSourceLink: 'https://creditcards.chase.com/business-credit-cards/ink/business-preferred',
  },
  {
    id: 'wellsFargo',
    name: 'Wells Fargo Autograph℠ Card',
    category: 'Budget-Conscious Adventurer',
    imageSrc: '/images/cards/wells-fargo-autograph-card.png', // ❗ Replace
    imageAlt: 'Wells Fargo Autograph℠ Card',
    ratingValue: 8.8,
    ratingStars: 4.4,
    ourTake: "This no-annual-fee powerhouse offers solid protection ($600 per claim) with the lowest deductible on the market at just $25. It also includes the valuable \"involuntary parting\" coverage.",
    applyLink: 'https://creditcards.wellsfargo.com/autograph-visa-credit-card/',
    ratesFeesLink: 'https://www.wellsfargo.com/credit-cards/autograph-visa/guide-to-benefits/',
    learnMoreLink: '/reviews/cards/wells-fargo-autograph-review-2025', // ✏️ Create this internal page later
    officialSourceLink: 'https://www.wellsfargo.com/credit-cards/autograph-visa/guide-to-benefits/',
  }
];


// ─────────────────────────────────────────────────────────────────────────────
// 🧠 HELPERS - JSON-LD SCHEMA
// ─────────────────────────────────────────────────────────────────────────────
function generateJsonLD() {
    const breadcrumbsSchema = {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_BASE_URL, },
          { '@type': 'ListItem', position: 2, name: 'Guides', item: `${SITE_BASE_URL}/guides`, },
          { '@type': 'ListItem', position: 3, name: 'Credit Card Cell Phone Protection Guide', item: PAGE_URL, },
        ],
      };

    const articleSchema = {
        '@type': 'NewsArticle',
        mainEntityOfPage: { "@type": "WebPage", "@id": PAGE_URL },
        headline: 'Your Phone is Your Passport: The Little-Known Credit Card Perk That Can Save Your Trip in 2025',
        description: 'Our 2025 guide to the best credit cards for cell phone insurance. See how this perk can save your trip and compare top cards from Amex, Capital One, Chase, and Wells Fargo.',
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

    return JSON.stringify({ '@context': 'https://schema.org', '@graph': [articleSchema, breadcrumbsSchema] }, null, 2);
}

// ─────────────────────────────────────────────────────────────────────────────
// 🌐 COMPONENT
// ─────────────────────────────────────────────────────────────────────────────
function CellPhoneProtectionGuidePage2025() {
    return (
        <>
            <Head>
                {/* Core SEO */}
                <title>Credit Card Cell Phone Protection: A Traveler's Guide (2025) | {SITE_NAME}</title>
                <meta name="description" content="Our 2025 guide to the best credit cards for cell phone insurance. See how this perk can save your trip and compare top cards from Amex, Capital One, Chase, and Wells Fargo." />
                <meta name="viewport" content="width=device-width,initial-scale=1" />
                <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
                <meta name="keywords" content="credit card cell phone protection, travel insurance, smartphone insurance, best credit cards for travel, chase ink preferred, amex platinum, capital one venture x, wells fargo autograph" />
                <link rel="canonical" href={PAGE_URL} />

                {/* Open Graph */}
                <meta property="og:type" content="article" />
                <meta property="og:title" content={`Your Phone is Your Passport: The Ultimate Guide to Credit Card Cell Phone Protection | ${SITE_NAME}`} />
                <meta property="og:description" content="A shattered phone can ruin your trip. Learn how the right credit card offers complimentary cell phone insurance, turning a catastrophe into an inconvenience." />
                <meta property="og:url" content={PAGE_URL} />
                <meta property="og:site_name" content={SITE_NAME} />
                <meta property="og:image" content={`${SITE_BASE_URL}${HERO_IMAGE_SRC}`} />
                <meta property="og:image:alt" content={HERO_IMAGE_ALT} />
                <meta property="article:published_time" content={DATE_PUBLISHED} />
                <meta property="article:modified_time" content={DATE_MODIFIED} />
                <meta property="article:author" content={author.name} />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                {author.social.twitter && <meta name="twitter:creator" content={`@${author.social.twitter.split('/').pop()}`} />}
                
                {/* JSON‑LD Schema */}
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: generateJsonLD() }} />
            </Head>

            <main className={styles.reviewContainer}>
                <header className={styles.reviewHeader}>
                  <h1>Your Phone is Your Passport: The Little-Known Credit Card Perk That Can Save Your Trip in 2025</h1>
                   <div className={styles.authorBioContainer}>
                      <Image
                          src={author.image}
                          alt={`${author.name} headshot`}
                          width={40}
                          height={40}
                          className={styles.authorImageSmall}
                      />
                      <div className={styles.authorInfo}>
                          <span className={styles.authorName}>{author.name}</span>
                          <span className={styles.authorTitle}>{author.title}</span>
                          <time dateTime={DATE_MODIFIED} className={styles.authorLastEdited}>
                              Last updated: {new Date(DATE_MODIFIED).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                          </time>
                      </div>
                  </div>
                </header>
                
                <div className={styles.heroSection}>
                    <Image
                        src={HERO_IMAGE_SRC}
                        alt={HERO_IMAGE_ALT}
                        layout="responsive"
                        width={900}
                        height={450}
                        priority
                        className={styles.heroImage}
                    />
                </div>
                
                 <p className={styles.disclaimer}>
                  <strong>Disclaimer:</strong> Card offers, terms, and benefits are subject to change. Please verify all details with the card issuer. This page may contain affiliate links.
                </p>

                <article>
                    <section className={styles.reviewSection}>
                        <h2>The Modern Traveler's Nightmare</h2>
                        <p>In the world of travel, some disasters are bigger than others. A missed flight is a headache. Bad weather is a disappointment. But a shattered or stolen smartphone? It’s a full-blown catastrophe.</p>
                        <p>Imagine you’re navigating the bustling streets of Tokyo, relying on your phone for maps, your train pass, and to translate the menu for dinner. One slip, one moment of distraction, and your $1,200 lifeline is gone. In an instant, you're not just disconnected; you're digitally stranded.</p>
                        <p>This single point of failure is the modern traveler’s nightmare. But what if a feature you already have could turn this into a mere inconvenience? Enter the hero of travel perks: complimentary cell phone protection. Check out our list of the <Link href="/reviews/best-travel-credit-cards-2025"><a>best travel credit cards for 2025</a></Link> to learn more.</p>
                    </section>
                    
                    <section id="how-it-works" className={styles.reviewSection}>
                        <h2>How It Really Works: The Rules of the Game</h2>
                        <p>Getting this "free" insurance isn't automatic. First and foremost, you must pay your monthly cell phone bill with the eligible credit card. This is the non-negotiable golden rule.</p>
                        <p>So, what’s covered? Generally, policies reimburse you for physical damage and outright theft. For a theft claim, you'll almost certainly need to file a police report, often within 48 hours.</p>
                        <p>What’s almost never covered is simply losing your phone. However, a crucial evolution in policy language has created a powerful exception. Some cards now cover "involuntary and accidental parting"—an unintended separation where the phone's location is known, but it's impractical to get it back. For adventurous travelers, this specific language provides a far superior safety net.</p>
                    </section>
                    
                    <section id="top-picks" className={styles.reviewSection}>
                        <h2>The 2025 Contenders: A Breakdown for Every Traveler</h2>
                        
                        {protectionCardData.map((card, index) => (
                          <div key={card.id} className={`${styles.cardDetailSection} ${index < protectionCardData.length - 1 ? styles.cardSeparator : ''}`}>
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
                                  <h3><Link href={card.learnMoreLink}><a>{card.name}</a></Link></h3>
                                  <StarRating rating={card.ratingStars} /> 
                                  <span className={styles.ratingValue}>Our Rating: {card.ratingValue.toFixed(1)}/10</span>
                                </div>
                            </div>
                            <ul>
                              <li><strong>Our Take:</strong> {card.ourTake} (<a href={card.officialSourceLink} target="_blank" rel="noopener noreferrer sponsored">Official Source</a>)</li>
                            </ul>
                            <div className={styles.cardButtonsContainer}>
                                <a href={card.applyLink} target="_blank" rel="noopener noreferrer sponsored" className={`${styles.cardButton} ${styles.applyButton}`}>Apply Now</a>
                                <a href={card.ratesFeesLink} target="_blank" rel="noopener noreferrer sponsored" className={`${styles.cardButton} ${styles.secondaryButton}`}>Rates & Fees</a>
                                <Link href={card.learnMoreLink} legacyBehavior><a className={`${styles.cardButton} ${styles.secondaryButton}`}>Learn More</a></Link>
                            </div>
                          </div>
                        ))}
                    </section>

                    <section id="filing-a-claim" className={styles.reviewSection}>
                        <h2>Navigating a Claim: From Disaster to Deposit</h2>
                        <p>Knowing you're covered is one thing; getting your money back is another. The claims process requires prompt action and meticulous documentation. Our <Link href="/guides/how-to-file-a-credit-card-insurance-claim"><a>guide on filing a claim</a></Link> walks you through the process step-by-step.</p>
                        <p>You will need to submit your credit card statement showing the phone bill payment, the phone bill itself, and a repair estimate or receipt. Real-world experiences show that a well-documented claim can be surprisingly smooth.</p>
                    </section>
                    
                    <section id="final-verdict" className={styles.reviewSection}>
                        <h2>The Final Verdict: Insure Your Lifeline Wisely</h2>
                        <p>In 2025, your smartphone is your most critical piece of travel gear. Credit card cell phone protection has become an essential, high-value benefit. To learn about other hidden benefits, check out our guide on <Link href="/learn/understanding-credit-card-perks"><a>understanding credit card perks</a></Link>.</p>
                        <p>Before your next trip, review your wallet. Are you paying your phone bill with the right card? If not, you’re leaving one of your most valuable travel benefits on the table. Make the switch, and travel with confidence.</p>
                    </section>
                </article>

                <footer className={styles.reviewFooter}>
                    <p className={styles.disclaimer}>
                      <strong>Disclaimer:</strong> Cardholders should always consult their official Guide to Benefits. General benefit information is on the official network pages for <a href="https://www.mastercard.us/en-us/personal/find-a-card/card-benefits.html" target="_blank" rel="noopener noreferrer sponsored">Mastercard</a> and <a href="https://usa.visa.com/support/consumer/card-benefits.html" target="_blank" rel="noopener noreferrer sponsored">Visa</a>.
                    </p>
                </footer>
            </main>
        </>
    );
}

export default CellPhoneProtectionGuidePage2025;