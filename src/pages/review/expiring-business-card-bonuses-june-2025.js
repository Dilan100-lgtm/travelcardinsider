// File: pages/reviews/expiring-business-card-bonuses-june-2025.js – FINAL COMPLETE VERSION
// ❗ Replace image src paths with your optimised, WebP‑or‑AVIF images.
// The paths below are placeholders. Card images should ideally be ~150x95px or similar aspect ratio.

import React, { useState, useRef, useEffect, useCallback } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/NoFTFCardsReview.module.css'; // Assuming you reuse the same excellent styles

// ─────────────────────────────────────────────────────────────────────────────
// 🔗 CONFIG
// ─────────────────────────────────────────────────────────────────────────────
const SITE_BASE_URL = 'https://www.travelcardinsider.com';
const PAGE_PATH = '/reviews/expiring-business-card-bonuses-june-2025';
const PAGE_URL = `${SITE_BASE_URL}${PAGE_PATH}`;
const SITE_NAME = 'Travel Card Insider';
const HERO_IMAGE_SRC = '/benjamin-voros-phIFdC6lA4E-unsplash.jpg'; // ❗ Replace with a relevant, optimised hero image
const HERO_IMAGE_ALT = 'An hourglass with sand running out, set against a backdrop of a travel map and airplane, symbolizing expiring travel offers.';
const DATE_PUBLISHED = '2025-06-08'; // Published just before the first expiry
const DATE_MODIFIED = '2025-06-08';

// ─────────────────────────────────────────────────────────────────────────────
// 👤 AUTHOR INFO (Using existing author info from your airline card file)
// ─────────────────────────────────────────────────────────────────────────────
const author = {
  name: 'Dilan Madushanka',
  title: 'Lead Travel Card Analyst',
  image: '/WhatsApp Image 2025-05-12 at 4.09.58 PM.jpeg', // ❗ Your 40x40px web‑optimised headshot
  imageLarge: '/WhatsApp Image 2025-05-12 at 4.09.58 PM.jpeg', // ❗ Your 60x60px for tooltip
  bio: 'Seasoned travel‑card analyst helping readers unlock elite travel perks & maximise airline rewards.',
  expertise: [
    'Business Credit Card Strategy',
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
// 💳 EXPIRING CARD DATA
// ─────────────────────────────────────────────────────────────────────────────
const expiringCardData = [
  {
    id: 'capitalOneVentureXBusiness',
    name: 'Capital One Venture X Business',
    imageSrc: '/venturex-business-card.png', // ❗ Replace with actual card image
    imageAlt: 'Capital One Venture X Business Card',
    annualFee: '$395',
    offer: 'Earn a massive bonus of up to 350,000 miles. You’ll get 150,000 miles after spending $30,000 in the first 3 months and another 200,000 miles if you spend a total of $200,000 in the first 6 months.',
    expirationDate: 'June 9, 2025',
    valueProposition: 'At a bare minimum, 350,000 miles are worth $3,500 for travel via Capital One. Strategically transferred to partners, their value could exceed $6,475 (based on 1.85¢/mile).',
    keyPerks: [
      '$300 Annual Travel Credit for bookings via Capital One Travel.',
      '10,000 Anniversary Miles (worth at least $100) every year.',
      'Complimentary access to Capital One Lounges and a Priority Pass Select membership.',
      'Up to $100 credit for Global Entry or TSA PreCheck.',
      'No Foreign Transaction Fees.'
    ],
    whoIsItFor: 'Established businesses with significant planned expenditures that can comfortably meet the tiered minimum spend and pay their balance in full monthly.',
    applyLink: 'https://www.capitalone.com/small-business/credit-cards/venture-x-business/', // Official Link
    ratesFeesLink: 'https://www.capitalone.com/small-business/credit-cards/venture-x-business/', // Terms are usually on the main page
    learnMoreLink: '/cards/capital-one-venture-x-business', // Internal link
  },
  {
    id: 'amexBusinessGold',
    name: 'American Express Business Gold Card',
    imageSrc: '/amex-business-gold-card.png', // ❗ Replace with actual card image
    imageAlt: 'American Express Business Gold Card',
    annualFee: '$375',
    offer: 'Earn 100,000 Membership Rewards® points after spending $15,000 on eligible purchases in the first three months. This offer also includes a $500 statement credit after you spend $2,500 on flights booked directly with airlines or through Amex Travel in the first three months.',
    expirationDate: 'June 30, 2025',
    valueProposition: 'The 100,000 points are worth around $2,000 when transferred to airline partners. Add the $500 flight credit, and the total value is approximately $2,500 to $2,700 from the welcome offer alone.',
    keyPerks: [
      '4X points on your top 2 eligible spending categories (up to $150k/year).',
      'Up to $240 in flexible business credits annually ($20/month at select vendors).',
      'Monthly statement credit for a Walmart+ membership (enrollment required).',
      'No Foreign Transaction Fees.'
    ],
    whoIsItFor: 'U.S. businesses with diverse spending in bonus categories like marketing, consulting, or e-commerce, who can leverage the 4X points multiplier.',
    applyLink: 'https://www.americanexpress.com/us/credit-cards/business/business-gold-card/', // Official Link
    ratesFeesLink: 'https://www.americanexpress.com/us/credit-cards/card-application/apply/prospect/terms/business-gold-card/63345-10-0', // Official Terms Link
    learnMoreLink: '/cards/amex-business-gold', // Internal link
  }
];

const comparisonData = [
    { feature: 'Sign-Up Bonus', ventureX: 'Up to 350,000 miles', amexGold: '100k MR pts + $500 flight credit' },
    { feature: 'Minimum Spend', ventureX: '$200,000 in 6 months (tiered)', amexGold: '$15,000 in 3 months (+ flight spend)' },
    { feature: 'Estimated Value', ventureX: '$3,500 - $6,475+', amexGold: '~$2,500 - $2,700' },
    { feature: 'Expiration Date', ventureX: 'June 9, 2025', amexGold: 'June 30, 2025' },
    { feature: 'Annual Fee', ventureX: '$395', amexGold: '$375' },
    { feature: 'Key Perk', ventureX: '$300 travel credit + 10k miles', amexGold: '4X pts on top 2 spend categories' }
];


// ─────────────────────────────────────────────────────────────────────────────
// 🧠 HELPERS
// ─────────────────────────────────────────────────────────────────────────────
function generateJsonLD() {
  const itemListElements = expiringCardData.map((card, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    item: {
      '@type': 'Product',
      name: card.name,
      url: `${SITE_BASE_URL}${card.learnMoreLink}`,
      image: `${SITE_BASE_URL}${card.imageSrc}`,
      description: card.offer,
      brand: {
        '@type': 'Brand',
        name: card.name.includes('Capital One') ? 'Capital One' : 'American Express',
      },
      manufacturer: {
        '@type': 'Organization',
        name: card.name.includes('Capital One') ? 'Capital One' : 'American Express',
      },
      offers: {
        '@type': 'Offer',
        priceCurrency: 'USD',
        price: card.annualFee.replace('$', ''),
        availability: 'https://schema.org/LimitedAvailability',
        validThrough: card.expirationDate === 'June 9, 2025' ? '2025-06-09T23:59:59-05:00' : '2025-06-30T23:59:59-05:00',
        url: card.applyLink,
      },
    },
  }));

  const breadcrumbsSchema = {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Reviews', item: `${SITE_BASE_URL}/reviews` },
      { '@type': 'ListItem', position: 3, name: 'Expiring Business Card Bonuses June 2025', item: PAGE_URL },
    ],
  };

  const articleSchema = {
    '@type': 'NewsArticle', // More specific for timely content
    mainEntityOfPage: { "@type": "WebPage", "@id": PAGE_URL },
    headline: 'Final Call: Snag Over $1,000 in Travel with Premier Credit Card Bonuses Expiring in June 2025!',
    description: 'Act now! Don’t miss out on premier, high-value business credit card bonuses from Capital One and American Express, expiring by the end of June 2025.',
    image: [`${SITE_BASE_URL}${HERO_IMAGE_SRC}`],
    author: {
      '@type': 'Person',
      name: author.name,
      url: author.social.linkedin,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_BASE_URL}/images/logo-120.png`, // ❗ Ensure this logo exists
      },
    },
    datePublished: DATE_PUBLISHED,
    dateModified: DATE_MODIFIED,
  };

  return JSON.stringify(
    {
      '@context': 'https://schema.org',
      '@graph': [
        articleSchema,
        { '@type': 'ItemList', name: 'Expiring Business Credit Card Offers June 2025', url: PAGE_URL, numberOfItems: expiringCardData.length, itemListElement: itemListElements },
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
function ExpiringBusinessBonusesPage2025() {
  const [showTooltip, setShowTooltip] = useState(false);
  const triggerRef = useRef(null);
  const tooltipRef = useRef(null);
  
  // Tooltip handler logic from your other file
  const handleMouseEnterTriggerOrTooltip = useCallback(() => setShowTooltip(true), []);
  const handleMouseLeaveTriggerOrTooltip = useCallback(() => setShowTooltip(false), []);


  return (
    <>
      <Head>
        {/* Core */}
        <title>Expiring June 2025: Last Chance for $1,000+ Biz Card Bonuses | {SITE_NAME}</title>
        <meta
          name="description"
          content="Final Call! Don't miss premier business credit card bonuses from Capital One & Amex, expiring in June 2025. Secure over $1,000 in travel value before they're gone."
        />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
        <meta name="keywords" content="expiring credit card bonus, business credit card offers, capital one venture x business, american express business gold, travel rewards, limited time offer, june 2025" />
        <link rel="canonical" href={PAGE_URL} />

        {/* Open Graph */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Final Call: Over $1,000 in Travel Bonuses Expiring in June 2025!" />
        <meta property="og:description" content="The clock is ticking on these high-value business card offers. See our expert breakdown before they disappear." />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:site_name" content={SITE_NAME} />
        <meta property="og:image" content={`${SITE_BASE_URL}${HERO_IMAGE_SRC}`} />
        <meta property="og:locale" content="en_US" />
        <meta property="article:published_time" content={DATE_PUBLISHED} />
        <meta property="article:modified_time" content={DATE_MODIFIED} />
        <meta property="article:author" content={author.name} />
        <meta property="article:tag" content="Business Credit Cards" />
        <meta property="article:tag" content="Limited Time Offer" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="These $1,000+ Business Travel Bonuses Vanish This Month" />
        <meta name="twitter:description" content="Last chance to act on huge offers from Venture X Business and Amex Business Gold. Our review shows you how." />
        <meta name="twitter:image" content={`${SITE_BASE_URL}${HERO_IMAGE_SRC}`} />
        {author.social.twitter && <meta name="twitter:creator" content={`@${author.social.twitter.split('/').pop()}`} />}
        
        {/* JSON‑LD */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: generateJsonLD() }} />
      </Head>

      <main className={styles.reviewContainer}>
        <header className={styles.reviewHeader}>
          <h1>Final Call: Snag Over $1,000 in Travel with These Premier Credit Card Bonuses Expiring in June 2025!</h1>
          <div className={styles.authorBioContainer} ref={triggerRef} onMouseEnter={handleMouseEnterTriggerOrTooltip} onMouseLeave={handleMouseLeaveTriggerOrTooltip}>
              <Image src={author.image} alt={`${author.name} headshot`} width={40} height={40} className={styles.authorImageSmall} priority />
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
          <Image src={HERO_IMAGE_SRC} alt={HERO_IMAGE_ALT} layout="responsive" width={900} height={450} objectFit="cover" priority className={styles.heroImage} />
        </div>
        
        <p className={styles.disclaimer}>
          Disclaimer: Card offers, terms, and benefits are subject to change and are accurate as of {DATE_MODIFIED}. Please verify all details directly with the card issuer before applying. This page may contain affiliate links which help support our work.
        </p>

        <article>
            <section className={styles.reviewSection}>
                <p>As your dedicated travel and finance insider, I’ve seen countless travel reward offers come and go. The truly exceptional ones—the deals that can single-handedly fund a dream vacation—are part of a rare window of opportunity. Right now, we’re in one of those windows, but it’s closing fast.</p>
                <p>The clock is ticking on a handful of premier credit card bonuses, each valued at well over $1,000. These aren't your run-of-the-mill deals; they are peak opportunities that can turn those travel plans into booked seats. By the end of June 2025, they’ll be gone. My mission is to ensure you don’t miss out. Let's dive in and see if one of these is the key to your next great adventure.</p>
            </section>

            <section className={styles.reviewSection}>
                <h2>Why You Need to Act Now</h2>
                <p>Premium welcome bonuses of this magnitude are not a regular occurrence. Card issuers use them strategically for short periods to attract savvy customers. Once they expire, there's no guarantee they will ever return at the same level. Think of it as a limited-edition release for the travel world.</p>
                <p>Acting now means you’re not just getting a new credit card; you're securing future experiences. Imagine flying business class on a long-haul flight, staying in a luxury hotel that was previously out of reach, or funding a family trip almost entirely on points. This is what's at stake. These expiring offers provide a strategic advantage, giving you a massive head start on your travel goals.</p>
            </section>

            <section className={styles.reviewSection}>
                <h2>Spotlight on June 2025’s Hottest Expiring Travel Bonuses</h2>
                <p>For US-based travelers, especially business owners who can leverage their expenses, two offers stand out from the pack. They are both exceptional, and both are disappearing this month.</p>

                {expiringCardData.map((card, index) => (
                    <div key={card.id} className={`${styles.cardDetailSection} ${styles.cardSeparator}`}>
                        <div className={styles.cardHeader}>
                            <div className={styles.cardImageContainer}>
                                <Image src={card.imageSrc} alt={card.imageAlt} width={150} height={95} objectFit="contain" loading={index > 0 ? "lazy" : "eager"} />
                            </div>
                            <div className={styles.cardTitleRating}>
                                <h3>{card.id === 'capitalOneVentureXBusiness' ? 'The High-Spend Standout' : 'The Flexible Powerhouse'}: {card.name}</h3>
                            </div>
                        </div>
                        <ul>
                            <li><strong>The Offer:</strong> {card.offer}</li>
                            <li><strong>Expiration Date:</strong> <strong style={{color: '#c00'}}>{card.expirationDate}</strong></li>
                            <li><strong>Annual Fee:</strong> {card.annualFee}</li>
                            <li><strong>Unpacking the Value:</strong> {card.valueProposition}</li>
                            <li><strong>Key Perks for US Travelers:</strong>
                                <ul className={styles.nestedList}>
                                    {card.keyPerks.map(perk => <li key={perk}>{perk}</li>)}
                                </ul>
                            </li>
                            <li><strong>Who is this card for?</strong> {card.whoIsItFor}</li>
                        </ul>
                        <div className={styles.cardButtonsContainer}>
                            <a href={card.applyLink} target="_blank" rel="noopener noreferrer sponsored" className={`${styles.cardButton} ${styles.applyButton}`}>
                                See Offer Details
                            </a>
                            <a href={card.ratesFeesLink} target="_blank" rel="noopener noreferrer sponsored" className={`${styles.cardButton} ${styles.secondaryButton}`}>
                                Rates & Fees
                            </a>
                        </div>
                        <p className={styles.finePrint}>Terms apply; issuer can change or end the offer at any time. Check the official application page for current details.</p>
                    </div>
                ))}
            </section>
            
            <section className={styles.reviewSection}>
                <h2>At a Glance: June 2025's Premier Expiring Offers</h2>
                <div className={styles.tableContainer}>
                    <table className={styles.comparisonTable}>
                        <thead>
                            <tr>
                                <th scope="col">Feature</th>
                                <th scope="col">Capital One Venture X Business</th>
                                <th scope="col">American Express Business Gold</th>
                            </tr>
                        </thead>
                        <tbody>
                            {comparisonData.map(row => (
                                <tr key={row.feature}>
                                    <td>{row.feature}</td>
                                    <td>{row.ventureX}</td>
                                    <td>{row.amexGold}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>
            
            <section className={styles.reviewSection}>
                <h2>From Points to Paradise: Making Your Rewards Work for You</h2>
                <p>Earning the bonus is the first victory; redeeming your points for maximum value is the championship...</p>
                <blockquote className={styles.quote}>
                    <p>"[Sarah] transferred 110,000 miles to Virgin Atlantic and booked a one-way First Class ticket on ANA from New York to Tokyo—a flight that often costs over $15,000... getting well over $10,000 in real travel value from a single bonus."</p>
                    <cite>– Story from a savvy consultant</cite>
                </blockquote>
                <blockquote className={styles.quote}>
                    <p>"The points from the bonus and my 4X spending on software and ads paid for a flight I could only have dreamed of. It's completely changed how I think about my business expenses."</p>
                    <cite>– Michael, a graphic designer with the Amex Business Gold</cite>
                </blockquote>
            </section>

            <section className={styles.reviewSection}>
                <h2>Voices from Savvy Travelers</h2>
                <p>On a popular travel forum, a Venture X cardholder recently shared: "The card is basically free if you travel at all. The $300 credit and the 10k anniversary miles completely cover the annual fee. Everything else is pure profit. It's a no-brainer."</p>
                <p>In a discussion about the Amex Business Gold offer, one small business owner wrote: "I was hesitant because of the fee, but the 4X points on my ad spend are piling up so fast. I've earned more rewards in three months than I did in two years with my old card. The welcome bonus is just the cherry on top."</p>
            </section>

            <section id="editors-essential-takeaways" className={`${styles.reviewSection} ${styles.eetaSection || ''}`}>
                <h2>Before You Click "Apply": A Word of Advice</h2>
                <ul>
                    <li><strong>Spend Responsibly:</strong> Never spend more than you normally would just to hit a bonus. Align the minimum spend with your natural business or personal cash flow.</li>
                    <li><strong>Check Your Credit:</strong> These are premium cards, and you’ll generally need a good to excellent credit score (typically 670+, but often higher).</li>
                    <li><strong>Know the Rules:</strong> American Express has a "once in a lifetime" rule. Capital One can be sensitive to recent credit applications.</li>
                    <li><strong>Plan for the Future:</strong> Make sure the card's ongoing benefits will justify the annual fee for you in year two and beyond.</li>
                    <li><strong>Avoid Interest:</strong> These are rewards cards, not tools for carrying debt. The high-interest rates will quickly erase the value of your points if you carry a balance.</li>
                </ul>
            </section>

            <section className={styles.reviewSection} style={{textAlign: 'center', border: '2px solid #c00', padding: '20px', borderRadius: '8px'}}>
                <h2>Your Final Boarding Call</h2>
                <p>The <strong>Capital One Venture X Business</strong> offer disappears after <strong>June 9, 2025.</strong></p>
                <p>The special <strong>American Express Business Gold</strong> deal is gone after <strong>June 30, 2025.</strong></p>
                <p>These are not just credit card offers; they are tickets to trips you might normally skip. For the savvy traveler or business owner who can act responsibly, this is a rare chance to lock in thousands of dollars in travel value. The time to analyze is over. It's time to act before these incredible opportunities take off without you.</p>
            </section>

        </article>
      </main>
    </>
  );
}

export default ExpiringBusinessBonusesPage2025;