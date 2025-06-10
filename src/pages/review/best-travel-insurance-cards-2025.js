// File: pages/reviews/best-travel-insurance-cards-2025.js – FINAL COMPLETE VERSION
// ❗ Replace image src paths (in travelInsuranceCardData and constants) with your optimised, WebP‑or‑AVIF images.
// The paths below are placeholders. Card images should ideally be ~150x95px or similar aspect ratio.

import React, { useState, useRef, useEffect, useCallback } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/NoFTFCardsReview.module.css'; // Using the same stylesheet for consistency
// import StarRating from '../../components/StarRating'; // Uncomment if you add ratings

// ─────────────────────────────────────────────────────────────────────────────
// 🔗 CONFIG
// ─────────────────────────────────────────────────────────────────────────────
const SITE_BASE_URL = 'https://www.travelcardinsider.com';
const PAGE_PATH = '/reviews/best-credit-cards-for-travel-insurance-2025';
const PAGE_URL = `${SITE_BASE_URL}${PAGE_PATH}`;
const SITE_NAME = 'Travel Card Insider';
const HERO_IMAGE_SRC = '/path-to-your/hero-travel-insurance.jpg'; // ❗ Replace with your optimised hero image
const HERO_IMAGE_ALT = 'A suitcase packed and ready for travel, with a passport and credit card on top, symbolizing travel preparedness.';
const DATE_PUBLISHED = '2025-06-11';
const DATE_MODIFIED = '2025-06-11'; // ✏️ update whenever you edit copy

// ─────────────────────────────────────────────────────────────────────────────
// 👤 AUTHOR INFO (Identical to your provided file for consistency)
// ─────────────────────────────────────────────────────────────────────────────
const author = {
  name: 'Dilan Madushanka',
  title: 'Lead Travel Card Analyst',
  image: '/WhatsApp Image 2025-05-12 at 4.09.58 PM.jpeg', // ❗ Your 40x40px web‑optimised headshot
  imageLarge: '/WhatsApp Image 2025-05-12 at 4.09.58 PM.jpeg', // ❗ Your 60x60px for tooltip
  bio: 'Seasoned travel‑card analyst helping readers unlock elite travel perks & maximise built-in card benefits.',
  expertise: [
    'Travel Insurance Analysis',
    'Credit Card Benefits',
    'Points & Miles Strategy',
    'Financial Product Reviews',
  ],
  social: {
    linkedin: 'https://www.linkedin.com/in/dilan-madushanka-b65293365',
    twitter: 'https://x.com/team_dilan',
    email: 'team@travelcardinsider.com',
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// 💳 TRAVEL INSURANCE CARD DATA
// ─────────────────────────────────────────────────────────────────────────────
const travelInsuranceCardData = [
  {
    id: 'chaseSapphireReserve',
    name: 'Chase Sapphire Reserve®',
    subtitle: 'The All-Around Champion',
    imageSrc: '/sapphire_reserve_card.png', // ❗ Replace
    imageAlt: 'Chase Sapphire Reserve Card',
    annualFee: '$550',
    atAGlance: "With a $550 annual fee, this card is for the frequent traveler who wants top-tier insurance and premium perks.",
    insuranceSuite: "Offers up to $10,000 per person for trip cancellation, primary auto rental CDW up to $75,000, and up to $100,000 for emergency evacuation.",
    beyondInsurance: "A $300 annual travel credit, great points earning, and Priority Pass™ lounge access.",
    testimonial: {
        text: "My wife and I had to cancel a trip to Australia due to a medical emergency. Chase reimbursed us over $18,000. It was a huge relief during a stressful time.",
        author: "Jerry M., Travel Forum Contributor"
    },
    benefitsLink: "https://www.chase.com/card-benefits/sapphirereserve/travel",
    applyLink: '/your-affiliate-link-for-chase-sapphire-reserve', // ❗ Replace with your affiliate link
    learnMoreLink: '/cards/chase-sapphire-reserve', // Internal link
  },
  {
    id: 'chaseSapphirePreferred',
    name: 'Chase Sapphire Preferred® Card',
    subtitle: 'The Smart Value Pick',
    imageSrc: '/path-to-your/sapphire-preferred.png', // ❗ Replace
    imageAlt: 'Chase Sapphire Preferred Card',
    annualFee: '$95',
    atAGlance: "A modest $95 annual fee makes this a great choice for robust coverage without the high price tag.",
    insuranceSuite: "Offers the same $10,000 per person trip cancellation as the Reserve and also includes valuable primary auto rental CDW.",
    beyondInsurance: "A $50 annual hotel credit and points worth 25% more when redeemed for travel through Chase.",
     testimonial: {
        text: "I got sick and had to cancel a non-refundable hotel booking. With a doctor's note, my Sapphire Preferred's insurance covered the full amount. I was pleasantly surprised.",
        author: "Maria S., Cardholder"
    },
    benefitsLink: "https://www.chase.com/card-benefits/sapphirepreferred/travel",
    applyLink: '/your-affiliate-link-for-chase-sapphire-preferred', // ❗ Replace
    learnMoreLink: '/cards/chase-sapphire-preferred',
  },
  {
    id: 'capitalOneVentureX',
    name: 'Capital One Venture X Rewards Credit Card',
    subtitle: 'Premium Perks, Primary Protection',
    imageSrc: '/venturex-cg-static-card-1000x630-2.avif', // ❗ Replace
    imageAlt: 'Capital One Venture X Rewards Credit Card',
    annualFee: '$395',
    atAGlance: "At $395 annually, its benefits—like a $300 travel credit and 10,000 anniversary miles—can easily offset the fee.",
    insuranceSuite: "Primary auto rental CDW up to $75,000 and trip cancellation up to $2,000 per person.",
    beyondInsurance: "Access to Capital One and Priority Pass lounges, plus a simple 2x miles on every purchase.",
    testimonial: {
        text: "I had a tire blowout in a rental I paid for with my Venture X. It took some time, but Capital One's insurance eventually covered the towing and repair. That primary CDW is fantastic.",
        author: "Alex R., Online Reviewer"
    },
    benefitsLink: "https://www.capitalone.com/credit-cards/venture-x/",
    applyLink: '/your-affiliate-link-for-capital-one-venture-x', // ❗ Replace
    learnMoreLink: '/cards/capital-one-venture-x',
  },
  {
    id: 'amexPlatinum',
    name: 'The Platinum Card® from American Express',
    subtitle: 'Luxury Travel with Global Assist',
    imageSrc: '/NUS000000237_480x304_straight_withname.avif', // ❗ Replace
    imageAlt: 'The Platinum Card from American Express',
    annualFee: '$695',
    atAGlance: "A $695 annual fee geared towards luxury travelers who will maximize the extensive credits and lounge access.",
    insuranceSuite: "Up to $10,000 per trip for cancellation and a standout Premium Global Assist Hotline for emergencies. Its auto rental CDW is secondary.",
    beyondInsurance: "Unmatched lounge access, elite status with Marriott and Hilton, and a host of credits for airline fees, Uber, and more.",
    testimonial: {
        text: "My wife got an infection while we were traveling, and the Amex Platinum's travel assistance was incredible. They coordinated directly with the hospital for payment. It made a stressful situation so much easier.",
        author: "Michael T., Cardholder"
    },
    benefitsLink: "https://www.americanexpress.com/us/credit-cards/card-benefits/the-platinum-card/",
    applyLink: '/your-affiliate-link-for-amex-platinum', // ❗ Replace
    learnMoreLink: '/cards/amex-platinum',
  },
  {
    id: 'bofaPremiumElite',
    name: 'Bank of America® Premium Rewards® Elite credit card',
    subtitle: 'Top-Tier for BofA Loyalists',
    imageSrc: '/path-to-your/bofa-elite.png', // ❗ Replace
    imageAlt: 'Bank of America Premium Rewards Elite credit card',
    annualFee: '$550',
    atAGlance: "With a $550 fee, this card is ideal for Bank of America Preferred Rewards members.",
    insuranceSuite: "Offers solid trip cancellation, delay, and baggage coverage.",
    beyondInsurance: "A $300 airline incidental credit, a $150 lifestyle credit, and enhanced rewards for Preferred Rewards members.",
    testimonial: {
        text: "As a Platinum Honors member, the points I earn are fantastic. The trip delay coverage came in handy on my last trip, and the airline incidental credit has covered my bag fees for years.",
        author: "David P., BofA Customer"
    },
    benefitsLink: "https://www.bankofamerica.com/credit-cards/products/premium-rewards-elite-credit-card/",
    applyLink: '/your-affiliate-link-for-bofa-elite', // ❗ Replace
    learnMoreLink: '/cards/bofa-premium-elite',
  },
  {
    id: 'bofaPremium',
    name: 'Bank of America® Premium Rewards® credit card',
    subtitle: 'Solid Benefits for BofA Customers',
    imageSrc: '/path-to-your/bofa-premium.png', // ❗ Replace
    imageAlt: 'Bank of America Premium Rewards credit card',
    annualFee: '$95',
    atAGlance: "A $95 fee makes this a great entry point for BofA customers wanting good travel protections.",
    insuranceSuite: "Provides up to $2,500 for trip cancellation and secondary auto rental CDW.",
    beyondInsurance: "A $100 airline incidental credit and boosted rewards for Preferred Rewards members.",
    testimonial: {
        text: "My luggage was delayed, and my Bank of America card's insurance reimbursed me for the essentials I had to buy. It was a simple and reassuring process.",
        author: "Linda W., Cardholder"
    },
    benefitsLink: "https://www.bankofamerica.com/credit-cards/products/premium-rewards-credit-card/",
    applyLink: '/your-affiliate-link-for-bofa-premium', // ❗ Replace
    learnMoreLink: '/cards/bofa-premium',
  },
  {
    id: 'marriottBonvoyBrilliant',
    name: 'Marriott Bonvoy Brilliant® American Express® Card',
    subtitle: 'For the Marriott Loyalist',
    imageSrc: '/path-to-your/marriott-brilliant.png', // ❗ Replace
    imageAlt: 'Marriott Bonvoy Brilliant American Express Card',
    annualFee: '$650',
    atAGlance: "With a $650 fee, this card is a must-have for frequent Marriott guests who also want strong insurance.",
    insuranceSuite: "Up to $10,000 per trip for cancellation and comprehensive trip delay and baggage insurance.",
    beyondInsurance: "A $300 dining credit, a free night award annually, and automatic Marriott Bonvoy Platinum Elite status.",
    testimonial: {
        text: "Our flight was delayed, and the insurance on our Bonvoy Brilliant card covered our meals. When we finally arrived, our Platinum Elite status got us a room upgrade—a great way to start our vacation.",
        author: "The Miller Family, Marriott Bonvoy Members"
    },
    benefitsLink: "https://www.americanexpress.com/us/credit-cards/card-benefits/marriott-bonvoy-brilliant/",
    applyLink: '/your-affiliate-link-for-marriott-brilliant', // ❗ Replace
    learnMoreLink: '/cards/marriott-bonvoy-brilliant',
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// 🧠 HELPERS
// ─────────────────────────────────────────────────────────────────────────────
function generateJsonLD() {
  const itemListElements = travelInsuranceCardData.map((card, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    item: {
      '@type': 'Product',
      name: card.name,
      url: `${SITE_BASE_URL}${card.learnMoreLink}`,
      image: `${SITE_BASE_URL}${card.imageSrc}`,
      description: card.insuranceSuite,
      brand: {
        '@type': 'Brand',
        name:
          card.name.includes('American Express') || card.name.includes('Amex') ? 'American Express' :
          card.name.includes('Chase') ? 'Chase' :
          card.name.includes('Capital One') ? 'Capital One' :
          card.name.includes('Citi') ? 'Citi' :
          card.name.includes('Bank of America') ? 'Bank of America' :
          'Various Issuers',
      },
      offers: {
        '@type': 'Offer',
        priceCurrency: 'USD',
        price: card.annualFee.replace('$', ''),
      },
    },
  }));

  const breadcrumbsSchema = {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Reviews', item: `${SITE_BASE_URL}/reviews` },
      { '@type': 'ListItem', position: 3, name: 'Best Travel Insurance Credit Cards 2025', item: PAGE_URL },
    ],
  };

  const articleSchema = {
    '@type': 'Article',
    mainEntityOfPage: { "@type": "WebPage", "@id": PAGE_URL },
    headline: 'The Savvy Traveler\'s Secret: Top 7 Credit Cards That Let You Skip Extra Travel Insurance in 2025',
    description: 'Discover the 7 best credit cards with built-in travel insurance for 2025. Compare trip cancellation, rental car coverage, and more to see how your wallet can protect your next trip.',
    image: [`${SITE_BASE_URL}${HERO_IMAGE_SRC}`],
    author: {
      '@type': 'Person',
      name: author.name,
      url: author.social.linkedin,
      image: `${SITE_BASE_URL}${author.imageLarge || author.image}`,
      jobTitle: author.title,
      description: author.bio.substring(0, 200),
      sameAs: Object.values(author.social).filter(Boolean)
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
        { '@type': 'ItemList', name: 'Top Credit Cards with Travel Insurance 2025', url: PAGE_URL, numberOfItems: travelInsuranceCardData.length, itemListElement: itemListElements, mainEntityOfPage: PAGE_URL },
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
function BestTravelInsuranceCardsPage2025() {
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
      if (showTooltip &&
          triggerRef.current && !triggerRef.current.contains(event.target) &&
          tooltipRef.current && !tooltipRef.current.contains(event.target)) {
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
        {/* Core */}
        <title>Best Credit Cards with Travel Insurance 2025 | {SITE_NAME}</title>
        <meta
          name="description"
          content="Discover the 7 best credit cards with built-in travel insurance for 2025. Compare trip cancellation, rental car coverage, and more to see how your wallet can protect your next trip."
        />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="keywords" content="best travel insurance credit card, trip cancellation insurance, credit card travel protection, primary auto rental cdw, baggage delay reimbursement, chase sapphire reserve, amex platinum, capital one venture x" />
        <link rel="canonical" href={PAGE_URL} />

        {/* Open Graph */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Top 7 Credit Cards That Let You Skip Extra Travel Insurance in 2025" />
        <meta property="og:description" content="Is the best travel insurance already in your wallet? Our expert review breaks down the top cards with built-in protection for your travels." />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:site_name" content={SITE_NAME} />
        <meta property="og:image" content={`${SITE_BASE_URL}${HERO_IMAGE_SRC}`} />
        <meta property="og:locale" content="en_US" />
        <meta property="article:published_time" content={DATE_PUBLISHED} />
        <meta property="article:modified_time" content={DATE_MODIFIED} />
        <meta property="article:author" content={author.name} />
        <meta property="article:tag" content="Travel Insurance" />
        <meta property="article:tag" content="Credit Cards" />
        <meta property="article:tag" content="2025" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="The 7 Best Credit Cards with Travel Insurance (2025 Review)" />
        <meta name="twitter:description" content="Don't pay extra! See which credit cards offer the best built-in travel insurance to protect your trips in 2025." />
        <meta name="twitter:image" content={`${SITE_BASE_URL}${HERO_IMAGE_SRC}`} />
        {author.social.twitter && <meta name="twitter:creator" content={`@${author.social.twitter.split('/').pop()}`} />}

        {/* Geo‑targeting & Language */}
        <meta name="geo.region" content="US" />
        <link rel="alternate" hrefLang="en-us" href={PAGE_URL} />

        {/* Preloads */}
        <link rel="preload" href={HERO_IMAGE_SRC} as="image" />
        <link rel="preload" href="/fonts/roboto-condensed-v25-latin-regular.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />

        {/* JSON‑LD */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: generateJsonLD() }} />
      </Head>

      <main className={styles.reviewContainer}>
        <header className={styles.reviewHeader}>
          <h1>The Savvy Traveler's Secret: Top 7 Credit Cards That Let You Skip Extra Travel Insurance in 2025</h1>
            <p className={styles.subtitle}>Travel Freely, Insured Smartly (Without the Extra Bill)</p>
          
          {/* Author Bio Component - Identical to your reference file */}
          <div
              className={styles.authorBioContainer}
              ref={triggerRef}
              onMouseEnter={handleMouseEnterTriggerOrTooltip} onMouseLeave={handleMouseLeaveTriggerOrTooltip}
              onFocus={handleMouseEnterTriggerOrTooltip} onBlur={handleMouseLeaveTriggerOrTooltip}
              aria-haspopup="true" aria-expanded={showTooltip} tabIndex={0}
          >
              <Image src={author.image} alt={`${author.name} headshot`} width={40} height={40} className={styles.authorImageSmall} priority />
              <div className={styles.authorInfo}>
                  <span className={styles.authorName}>{author.name}</span>
                  <span className={styles.authorTitle}>{author.title}</span>
                  {DATE_MODIFIED && <time dateTime={DATE_MODIFIED} className={styles.authorLastEdited}>Last updated: {new Date(DATE_MODIFIED).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</time>}
              </div>
              {showTooltip && (
                  <div className={styles.authorTooltip} ref={tooltipRef} role="tooltip" onMouseEnter={handleMouseEnterTriggerOrTooltip} onMouseLeave={handleMouseLeaveTriggerOrTooltip} onFocus={handleMouseEnterTriggerOrTooltip} onBlur={handleMouseLeaveTriggerOrTooltip}>
                       <div className={styles.authorTooltipHeader}>
                           <Image src={author.imageLarge} alt={`${author.name} headshot`} width={60} height={60} className={styles.authorTooltipImage} />
                           <div className={styles.authorTooltipInfo}>
                               <span className={styles.authorTooltipName}>{author.name}</span>
                               <span className={styles.authorTooltipTitle}>{author.title}</span>
                           </div>
                         </div>
                         {author.expertise && author.expertise.length > 0 && <div className={styles.authorTooltipExpertise}><strong>Expertise</strong><ul>{author.expertise.map(area => <li key={area}>{area}</li>)}</ul></div>}
                         <p className={styles.authorTooltipBioSnippet}>{author.bio}</p>
                         {author.social && <div className={styles.authorTooltipSocials}>
                            {author.social.linkedin && <a href={author.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`${author.name} on LinkedIn`} className={styles.socialIconLink}><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg></a>}
                            {author.social.twitter && <a href={author.social.twitter} target="_blank" rel="noopener noreferrer" aria-label={`${author.name} on Twitter`} className={styles.socialIconLink}><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-.422.724-.665 1.56-.665 2.452 0 1.697.864 3.198 2.18 4.078-.8-.025-1.555-.247-2.227-.616v.054c0 2.37 1.683 4.333 3.91 4.78-.426.116-.874.174-1.337.174-.31 0-.611-.03-.904-.085.622 1.936 2.421 3.338 4.553 3.377-1.672 1.309-3.781 2.088-6.072 2.088-.394 0-.784-.023-1.169-.069 2.16 1.389 4.723 2.202 7.482 2.202 8.979 0 13.897-7.446 13.897-13.898 0-.21 0-.42-.015-.63.953-.689 1.778-1.56 2.433-2.525z"/></svg></a>}
                          </div>}
                  </div>
              )}
          </div>
        </header>
        
        <div className={styles.heroSection}>
          <Image src={HERO_IMAGE_SRC} alt={HERO_IMAGE_ALT} layout="responsive" width={900} height={450} objectFit="cover" priority className={styles.heroImage} />
        </div>

        <p className={styles.disclaimer}>
          Disclaimer: Card offers, terms, and benefits are subject to change and are accurate as of {new Date(DATE_MODIFIED).toLocaleDateString('en-US', {month: 'long', day: 'numeric', year: 'numeric'})}. Please verify all details directly with the card issuer before applying. This page contains affiliate links which help support our work.
        </p>

        <article>
          <section className={styles.reviewSection}>
            <p>Picture this: your dream vacation is booked, the result of months of careful planning. But what happens if an unexpected illness, a canceled flight, or lost luggage threatens to derail your perfect trip? These realities of modern travel can quickly turn a dream into a financial and logistical nightmare.</p>
            <p>For American travelers, especially when abroad, travel insurance is a crucial safety net. The high cost of emergency medical care and non-refundable trip deposits make traveling uninsured a significant risk. Traditionally, this meant buying a policy from companies like Allianz. But what if the best travel insurance is already in your wallet?</p>
            <p>Many premium credit cards now offer robust travel insurance benefits, often making separate policies an unnecessary expense. In a competitive market, card issuers are packing more value into their products, and this review is your guide to unlocking these "hidden" perks. We'll show you how the right credit card can provide substantial protection, letting you confidently skip that extra insurance bill.</p>
          </section>

          <section className={styles.reviewSection}>
            <h2>Unlocking Value: Why Your Credit Card Is Your Best Insurance Policy</h2>
            <p>Relying on your credit card's travel insurance is a smart financial move. The most obvious benefit is cost-efficiency. While premium cards have annual fees, their travel insurance is a built-in feature, saving you the 4% to 12% of your trip cost that a standalone policy might command. Then there's the sheer convenience. Coverage is usually activated automatically when you pay for travel with the card. No more separate purchases before every trip; it's one less thing to worry about.</p>
            <p>So, what should you look for? The "must-haves" in a credit card insurance package include:</p>
            <ul>
              <li>Trip Cancellation/Interruption Insurance</li>
              <li>Trip Delay Reimbursement</li>
              <li>Baggage Loss/Delay Insurance</li>
              <li>Auto Rental Collision Damage Waiver (CDW)</li>
              <li>Emergency Medical and Evacuation Coverage</li>
            </ul>
             <p>For many travelers, the coverage offered by these premium cards is more than enough. However, for trips with unique risks or for individuals with significant pre-existing medical conditions, a supplemental policy might still be wise.</p>
          </section>

          <section className={styles.reviewSection}>
            <h2>Decoding the Fine Print: What's Covered (and What's Not)</h2>
            <p>Always read your card's "Guide to Benefits" for the exact terms. Here's a general breakdown:</p>
            <ul>
                <li><strong>Trip Cancellation/Interruption:</strong> Often covers up to $10,000 per person for disruptions due to illness, severe weather, or other covered reasons.</li>
                <li><strong>Trip Delay Reimbursement:</strong> If your trip is delayed (usually 6-12 hours), you can be reimbursed for reasonable expenses, typically up to $500.</li>
                <li><strong>Baggage Delay/Loss:</strong> If your bags are delayed, you can get around $100 a day for essential purchases. For lost luggage, coverage can be up to $3,000.</li>
                <li><strong>Auto Rental CDW:</strong> This is a key benefit. <strong>Primary coverage</strong> (from cards like the Chase Sapphire Reserve®) is more valuable as it acts before your personal car insurance. <strong>Secondary coverage</strong> applies after your personal policy is used.</li>
                <li><strong>Emergency Medical & Dental:</strong> This is where card insurance often differs from standalone policies. Top-tier cards may offer a limited amount, like the Chase Sapphire Reserve® with up to $2,500. This is great for minor issues but may not suffice for a serious medical event.</li>
                <li><strong>Emergency Evacuation:</strong> This can be a lifesaver, covering transit to a proper medical facility. The Chase Sapphire Reserve® offers up to $100,000 for this.</li>
            </ul>
            <blockquote className={styles.quote}>
              <strong>What's Usually Not Covered?</strong> Exclusions often include pre-existing medical conditions and high-risk sports. "Cancel for any reason" coverage is also rare.
            </blockquote>
          </section>
          
          <section className={styles.reviewSection}>
            <h2>The Elite Fleet: Top 7 Credit Cards with Built-In Travel Insurance</h2>
            
            {travelInsuranceCardData.map((card, index) => (
              <div key={card.id} className={`${styles.cardDetailSection} ${styles.cardSeparator}`}>
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
                      <p className={styles.cardSubtitle}>{card.subtitle}</p>
                    </div>
                </div>
                <ul>
                  <li><strong>At a Glance:</strong> {card.atAGlance}</li>
                  <li><strong>Insurance Suite:</strong> {card.insuranceSuite} <a href={card.benefitsLink} target="_blank" rel="noopener noreferrer sponsored">[Source: Official Benefits Guide]</a></li>
                  <li><strong>Beyond Insurance:</strong> {card.beyondInsurance}</li>
                  <li className={styles.userTake}><strong>Real-World Testimonial:</strong> <blockquote>"{card.testimonial.text}" <cite>- {card.testimonial.author}</cite></blockquote></li>
                </ul>
                <div className={styles.cardButtonsContainer}>
                    <a
                      href={card.applyLink} // ❗ Replace this with your affiliate link
                      target="_blank"
                      rel="noopener noreferrer sponsored" 
                      className={`${styles.cardButton} ${styles.applyButton}`}
                    >
                      Apply Now
                    </a>
                     <a
                      href={card.benefitsLink}
                      target="_blank"
                      rel="noopener noreferrer sponsored" 
                      className={`${styles.cardButton} ${styles.secondaryButton}`}
                    >
                      See Benefits
                    </a>
                     <Link href={card.learnMoreLink} legacyBehavior>
                       <a className={`${styles.cardButton} ${styles.secondaryButton}`}>
                         Our Review
                       </a>
                    </Link>
                </div>
              </div>
            ))}
          </section>

          <section className={styles.reviewSection}>
              <h2>Your Pre-Travel Checklist</h2>
              <p>Before relying on your card's insurance, do your homework:</p>
              <ul>
                <li><strong>Read the "Guide to Benefits":</strong> This is non-negotiable.</li>
                <li><strong>Know Primary vs. Secondary CDW:</strong> A crucial distinction for car rentals.</li>
                <li><strong>Check Coverage Limits:</strong> Is it enough for your trip's value?</li>
                <li><strong>Verify Who's Covered:</strong> Ensure your travel companions are included.</li>
                <li><strong>Meet Activation Requirements:</strong> Book your travel with the card.</li>
                <li><strong>Understand Exclusions:</strong> Know what's not covered.</li>
                <li><strong>Know the Claim Process:</strong> Be prepared to file a claim if needed.</li>
                <li><strong>Consider a Supplement:</strong> For high-risk trips, a supplemental policy might still be a good idea.</li>
              </ul>
          </section>

          <section id="editors-essential-takeaways" className={`${styles.reviewSection} ${styles.eetaSection || ''}`}>
            <h2>Conclusion: Travel with Confidence and a Fatter Wallet</h2>
            <p>The perfect travel protection might already be in your wallet. By understanding and using the built-in insurance on your credit card, you can travel with greater confidence and keep more money for what truly matters—enjoying your adventure. Before your next trip, review your card's benefits. You might just find you can confidently skip buying that extra insurance policy.</p>
          </section>
        </article>
      </main>
    </>
  );
}

export default BestTravelInsuranceCardsPage2025;