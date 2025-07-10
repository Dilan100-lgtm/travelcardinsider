// File: pages/guides/chase-duo-strategy-2025.js – FINAL COMPLETE VERSION
// ❗ Replace image src paths (in cardData and constants) with your optimised, WebP‑or‑AVIF images.
// The paths below are placeholders. Card images should ideally be ~150x95px or similar aspect ratio.

import React, { useState, useRef, useEffect, useCallback } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/NoFTFCardsReview.module.css'; // Assuming you reuse the same styles

// ─────────────────────────────────────────────────────────────────────────────
// 🔗 CONFIG
// ─────────────────────────────────────────────────────────────────────────────
const SITE_BASE_URL = 'https://www.travelcardinsider.com'; // Your website's base URL
const PAGE_PATH = '/guides/chase-duo-strategy-2025'; // ✏️ SEO-friendly URL for this page
const PAGE_URL = `${SITE_BASE_URL}${PAGE_PATH}`;
const SITE_NAME = 'Travel Card Insider';
const HERO_IMAGE_SRC = '/pexels-freestockpro-322819.jpg'; // ❗ Replace with your optimised hero image
const HERO_IMAGE_ALT = 'The Chase Sapphire Preferred and Chase Freedom Unlimited cards side-by-side, representing the Chase Duo strategy.';
const DATE_PUBLISHED = '2025-07-11'; // ✏️ Update as per actual publish date
const DATE_MODIFIED = '2025-07-11'; // ✏️ Update whenever you edit copy

// ─────────────────────────────────────────────────────────────────────────────
// 👤 AUTHOR INFO (Reused for consistency)
// ─────────────────────────────────────────────────────────────────────────────
const author = {
  name: 'Dilan Madushanka',
  title: 'Lead Travel Card Analyst',
  image: '/WhatsApp Image 2025-05-12 at 4.09.58 PM.jpeg', // ❗ Your 40x40px web‑optimised headshot
  imageLarge: '/WhatsApp Image 2025-05-12 at 4.09.58 PM.jpeg', // ❗ Your 60x60px for tooltip
  bio: 'Seasoned travel‑card analyst helping readers unlock elite travel perks & maximise credit card rewards.',
  expertise: [
    'Travel Credit Card Analysis',
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
// 💳 CHASE DUO CARD DATA
// ❗ Review and update placeholder imageSrc.
// ❗ ENSURE all applyLink and ratesFeesLink are accurate and official.
// ─────────────────────────────────────────────────────────────────────────────
const chaseDuoCardData = [
  {
    id: 'chaseSapphirePreferred',
    name: 'Chase Sapphire Preferred® Card',
    issuer: 'Chase',
    imageSrc: '/sapphire_preferred_card.png', // ❗ Replace
    imageAlt: 'Chase Sapphire Preferred Card',
    annualFee: '$95',
    officialCardPageLink: 'https://creditcards.chase.com/rewards-credit-cards/sapphire/preferred',
    applyLink: 'https://creditcards.chase.com/rewards-credit-cards/sapphire/preferred',
    ratesFeesLink: 'https://sites.chase.com/services/creatives/pricingandterms.html/content/dam/pricingandterms/LGC56014.html', // ❗ Verify direct link
    learnMoreLink: '/cards/chase-sapphire-preferred', // Hypothetical internal link
    welcomeBonus: "Earn a substantial sign-up bonus, often enough to cover the annual fee for several years (e.g., 75,000 bonus points after meeting a spending threshold).",
    earningRates: "5x on travel via Chase Travel℠, 3x on dining, online groceries & select streaming, 2x on all other travel.",
    coreFeatures: [
      "$50 Annual Chase Travel Hotel Credit.",
      "10% Anniversary Points Bonus on total spending.",
      "Primary Auto Rental Collision Damage Waiver.",
      "Comprehensive Trip Cancellation & Baggage Delay Insurance.",
      "No Foreign Transaction Fees.",
      "1:1 Point Transfer to high-value airline and hotel partners like World of Hyatt, Southwest, and United."
    ]
  },
  {
    id: 'chaseFreedomUnlimited',
    name: 'Chase Freedom Unlimited® Card',
    issuer: 'Chase',
    imageSrc: '/freedom_unlimited_card_alt (1).png', // ❗ Replace
    imageAlt: 'Chase Freedom Unlimited Card',
    annualFee: '$0',
    officialCardPageLink: 'https://creditcards.chase.com/cash-back-credit-cards/freedom/unlimited',
    applyLink: 'https://creditcards.chase.com/cash-back-credit-cards/freedom/unlimited',
    ratesFeesLink: 'https://www.chase.com/personal/credit-cards/freedom-unlimited/pricing-and-terms-modal', // ❗ Verify direct link
    learnMoreLink: '/cards/chase-freedom-unlimited',
    earningRates: "5x on travel via Chase Travel℠, 3x on dining & drugstore purchases, and a powerful 1.5x on all other purchases.",
    coreFeatures: [
      "No annual fee.",
      "Points can be pooled with a Sapphire card to unlock 1:1 transfers.",
      "Often includes a sign-up bonus and a 0% introductory APR on new purchases."
    ],
    synergy: "The workhorse card that ensures every dollar spent outside of the Sapphire Preferred's bonus categories earns a minimum of 1.5x points."
  }
];

// ─────────────────────────────────────────────────────────────────────────────
// 🧠 HELPERS
// ─────────────────────────────────────────────────────────────────────────────
function generateJsonLD() {
  const itemListElements = chaseDuoCardData.map((card, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    item: {
      '@type': 'Product',
      name: card.name,
      url: `${SITE_BASE_URL}${card.learnMoreLink}`,
      image: `${SITE_BASE_URL}${card.imageSrc}`,
      description: card.earningRates,
      brand: { '@type': 'Brand', name: 'Chase' },
      manufacturer: { '@type': 'Organization', name: 'Chase Bank' },
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
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_BASE_URL, },
      { '@type': 'ListItem', position: 2, name: 'Guides', item: `${SITE_BASE_URL}/guides`, },
      { '@type': 'ListItem', position: 3, name: 'The Smart Traveler’s Playbook: Chase Duo Strategy 2025', item: PAGE_URL, },
    ],
  };

  const articleSchema = {
    '@type': 'ReviewNewsArticle',
    mainEntityOfPage: { "@type": "WebPage", "@id": PAGE_URL },
    headline: 'The Smart Traveler’s Playbook: Unlocking Maximum Rewards with Two Cards and Under $150 in Fees',
    description: 'Discover the "Chase Duo" strategy for 2025. Combine the Chase Sapphire Preferred and Freedom Unlimited to maximize rewards on every purchase for under $150 in fees.',
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
    itemReviewed: {
        '@type': 'ProductGroup',
        name: 'The "Chase Duo": Chase Sapphire Preferred and Chase Freedom Unlimited',
        description: 'A two-card strategy combining the Chase Sapphire Preferred and Chase Freedom Unlimited to maximize Chase Ultimate Rewards® points.'
    }
  };

  return JSON.stringify(
    {
      '@context': 'https://schema.org',
      '@graph': [
        articleSchema,
        { '@type': 'ItemList', name: 'Compared Travel Credit Cards in the Chase Duo Strategy', url: PAGE_URL, numberOfItems: chaseDuoCardData.length, itemListElement: itemListElements, mainEntityOfPage: PAGE_URL },
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
function ChaseDuoStrategyPage2025() {
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
    return () => { document.removeEventListener("mousedown", handleClickOutside); };
  }, [showTooltip]);


  const renderCardDetails = (cardId) => {
    const card = chaseDuoCardData.find(c => c.id === cardId);
    if (!card) return null;

    return (
      <div key={card.id} className={`${styles.cardDetailSection} ${styles.cardSeparator}`}>
        <div className={styles.cardHeader}>
            <div className={styles.cardImageContainer}>
              <Image
                src={card.imageSrc}
                alt={card.imageAlt}
                width={150} 
                height={95}  
                objectFit="contain"
              />
            </div>
            <div className={styles.cardTitleRating}>
              <h3>{card.name}</h3>
            </div>
        </div>
        <ul>
          <li><strong>Annual Fee:</strong> {card.annualFee}</li>
          {card.welcomeBonus && <li><strong>Welcome Bonus:</strong> {card.welcomeBonus}</li>}
          {card.earningRates && <li><strong>Earning Rates:</strong> {card.earningRates}</li>}
          {card.coreFeatures && card.coreFeatures.length > 0 && (
            <li><strong>Core Features:</strong>
              <ul>{card.coreFeatures.map((feature, i) => <li key={i}>{feature}</li>)}</ul>
            </li>
          )}
          {card.synergy && <li><strong>Role in Duo:</strong> {card.synergy}</li>}
        </ul>
        <div className={styles.cardButtonsContainer}>
            <a href={card.applyLink} target="_blank" rel="noopener noreferrer sponsored" className={`${styles.cardButton} ${styles.applyButton}`}>
              Apply Now
            </a>
             <a href={card.ratesFeesLink} target="_blank" rel="noopener noreferrer sponsored" className={`${styles.cardButton} ${styles.secondaryButton}`}>
              Rates & Fees
            </a>
             <Link href={card.learnMoreLink} legacyBehavior>
               <a className={`${styles.cardButton} ${styles.secondaryButton}`}>Learn More</a>
            </Link>
        </div>
      </div>
    );
  };


  return (
    <>
      <Head>
        {/* Core */}
        <title>Chase Duo Strategy 2025: Max Rewards Under $150 | {SITE_NAME}</title>
        <meta name="description" content="Discover the 'Chase Duo' strategy for 2025. Combine the Chase Sapphire Preferred and Freedom Unlimited to maximize rewards on every purchase for under $150 in fees." />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="keywords" content="chase duo, two-card strategy, chase sapphire preferred, chase freedom unlimited, best starter travel credit card, unlock maximum rewards, travel rewards 2025, ultimate rewards" />
        <link rel="canonical" href={PAGE_URL} />

        {/* Open Graph */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content={`The Smart Traveler’s Playbook for 2025: The Chase Duo | ${SITE_NAME}`} />
        <meta property="og:description" content="Learn how combining the Chase Sapphire Preferred® and Freedom Unlimited® creates a rewards powerhouse for under $150 in annual fees." />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:site_name" content={SITE_NAME} />
        <meta property="og:image" content={`${SITE_BASE_URL}${HERO_IMAGE_SRC}`} />
        <meta property="og:locale" content="en_US" />
        <meta property="article:published_time" content={DATE_PUBLISHED} />
        <meta property="article:modified_time" content={DATE_MODIFIED} />
        <meta property="article:author" content={author.name} />
        <meta property="article:tag" content="Chase" />
        <meta property="article:tag" content="Credit Card Strategy" />
        <meta property="article:tag" content="Travel Rewards" />
        <meta property="article:tag" content="2025 Guide" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="The Chase Duo: Max Travel Rewards for Minimal Fees in 2025" />
        <meta name="twitter:description" content="Stop leaving points on the table. Our 2025 guide to the Sapphire Preferred + Freedom Unlimited strategy shows you how to maximize every dollar." />
        <meta name="twitter:image" content={`${SITE_BASE_URL}${HERO_IMAGE_SRC}`} />
        {author.social.twitter && <meta name="twitter:creator" content={`@${author.social.twitter.split('/').pop()}`} />}

        {/* Geo‑targeting & Language */}
        <meta name="geo.region" content="US" />
        <meta name="geo.placename" content="United States" />
        <meta name="language" content="en-US" />
        <meta name="distribution" content="US" />
        <link rel="alternate" hrefLang="en-us" href={PAGE_URL} />

        {/* Preloads */}
        <link rel="preload" href={HERO_IMAGE_SRC} as="image" />
        <link rel="preload" href="/fonts/roboto-condensed-v25-latin-regular.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        
        {/* JSON‑LD */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: generateJsonLD() }} />
      </Head>

      <main className={styles.reviewContainer}>
        <header className={styles.reviewHeader}>
          <h1>The Smart Traveler’s Playbook: Unlocking Maximum Rewards with Two Cards and Under $150 in Fees</h1>
          
          {/* Author Bio Component - Identical to your other page */}
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
              <Image src={author.image} alt={`${author.name} headshot`} width={40} height={40} className={styles.authorImageSmall} priority />
              <div className={styles.authorInfo}>
                  <span className={styles.authorName}>{author.name}</span> 
                  <span className={styles.authorTitle}>{author.title}</span> 
                  {DATE_MODIFIED && (
                      <time dateTime={DATE_MODIFIED} className={styles.authorLastEdited}>
                          Last updated: {new Date(DATE_MODIFIED).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                      </time>
                  )}
                  {/* Social links can be added here if desired, following the pattern in the reference file */}
              </div>
              {showTooltip && (
                  <div className={styles.authorTooltip} ref={tooltipRef} role="tooltip" onMouseEnter={handleMouseEnterTriggerOrTooltip} onMouseLeave={handleMouseLeaveTriggerOrTooltip}>
                       <div className={styles.authorTooltipHeader}>
                           <Image src={author.imageLarge} alt={`${author.name} headshot`} width={60} height={60} className={styles.authorTooltipImage} />
                           <div className={styles.authorTooltipInfo}>
                               <span className={styles.authorTooltipName}>{author.name}</span> 
                               <span className={styles.authorTooltipTitle}>{author.title}</span> 
                           </div>
                         </div>
                         {author.expertise && author.expertise.length > 0 && ( 
                           <div className={styles.authorTooltipExpertise}>
                               <strong>Expertise</strong>
                               <ul>{author.expertise.map(area => <li key={area}>{area}</li>)}</ul>
                           </div>
                         )}
                         <p className={styles.authorTooltipBioSnippet}>{author.bio}</p> 
                         {/* Full social links can be added here for the tooltip */}
                  </div>
              )}
          </div>
        </header>

        <div className={styles.heroSection}>
          <Image src={HERO_IMAGE_SRC} alt={HERO_IMAGE_ALT} layout="responsive" width={900} height={450} objectFit="cover" priority className={styles.heroImage} />
        </div>
        
        <p className={styles.disclaimer}>
          Disclaimer: Card offers, terms, and benefits are subject to change and are accurate as of {new Date(DATE_MODIFIED).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}. 
          Please verify all details directly with the card issuer before applying. This page may contain affiliate links.
          The opinions expressed here are the author's alone and have not been reviewed or endorsed by any bank or credit card issuer.
        </p>

        <article>
            <section className={styles.reviewSection}>
                <p>For the modern American traveler, the world of credit card rewards can feel like a high-stakes game. On one side, you have premium travel cards offering luxurious perks like business-class flights and hotel suite upgrades, but they come with intimidating annual fees that can reach nearly $700. On the other, there are no-annual-fee cards that, while easy on the wallet, often leave significant value on the table through missed rewards and fewer travel protections. Many people settle for a middle-ground card but miss out on maximizing their earnings by using it for every purchase.</p>
                <p>There is, however, a smarter way. The "two-card wallet" is an expert-backed strategy that delivers a rewards-earning powerhouse rivaling many premium setups, all while keeping your total annual fees under $150. For 2025, the clear winners in this strategy are the Chase Sapphire Preferred® Card and the Chase Freedom Unlimited® Card. Together, this "Chase Duo" creates a system designed to maximize the rewards on every dollar you spend.</p>
            </section>
            
            <section className={styles.reviewSection}>
                <h2>The Anchor: Why the Chase Sapphire Preferred® is Your Gateway to Value</h2>
                <p>The Chase Sapphire Preferred® Card is the cornerstone of this system. With a modest $95 annual fee, it acts as your key to the entire Chase Ultimate Rewards® ecosystem, turning your points into a flexible and valuable travel currency. For the latest details, see the <a href="https://creditcards.chase.com/rewards-credit-cards/sapphire/preferred" target="_blank" rel="noopener noreferrer sponsored">official Chase website</a>.</p>
                {renderCardDetails('chaseSapphirePreferred')}
                <p>Beyond points, the CSP provides essential protections for any traveler. The primary auto rental collision damage waiver is a standout benefit, allowing you to decline the rental agency’s expensive insurance and potentially save you from filing a claim with your personal insurance. Additionally, it includes comprehensive trip cancellation and baggage delay insurance and, crucially, has no foreign transaction fees, making it the go-to card for all your international spending. You can find more details in the <a href="https://www.chase.com/card-benefits/sapphire-preferred/travel" target="_blank" rel="noopener noreferrer">Chase Card Benefits Guide</a>.</p>
                <p>The true power of the CSP, however, lies in its 1:1 point transfer capability. You can transfer your Ultimate Rewards® points to a host of high-value airline and hotel partners like World of Hyatt, Southwest Airlines, and United MileagePlus®. This is how you can turn everyday spending into extraordinary travel experiences, like a business-class flight to Europe or a luxury hotel stay, often achieving a value of 2 cents per point or more.</p>
            </section>

            <section className={styles.reviewSection}>
                <h2>The Workhorse: Maximizing Every Dollar with the Chase Freedom Unlimited®</h2>
                <p>If the CSP is your key, the Chase Freedom Unlimited® (CFU) is the engine. With no annual fee, its purpose is to ensure that every single purchase earns more than the standard 1 point per dollar. For current offers, check the <a href="https://creditcards.chase.com/cash-back-credit-cards/freedom/unlimited" target="_blank" rel="noopener noreferrer sponsored">official Chase website</a>.</p>
                {renderCardDetails('chaseFreedomUnlimited')}
                <p>That 1.5x on all other purchases is the most critical feature of the CFU in this strategy. For all the spending that falls outside the CSP’s bonus categories—like gas, utilities, retail shopping, and insurance—you’ll earn 50% more points than you would with the CSP alone. For a household spending $20,000 annually in these categories, that’s an extra 10,000 points per year.</p>
                <p>While marketed as a "cash back" card, the CFU actually earns Ultimate Rewards® points. This is the secret to its power within the Chase Duo.</p>
            </section>

            <section className={styles.reviewSection}>
                <h2>The "Chase Duo" Synergy: How 1 + 1 = 3</h2>
                <p>The magic happens when you combine the points earned on your CFU with your CSP account. This simple, instant online transfer elevates the value of every point you earn. Once pooled, your points from the CFU gain the same powerful redemption options as your CSP points: a 25% bonus when booking travel through the Chase portal and, most importantly, access to those valuable 1:1 transfer partners.</p>
                <h3>Your Simple Spending Strategy:</h3>
                <ul>
                    <li><strong>Use the Chase Sapphire Preferred® for:</strong> All dining, travel, online groceries, streaming, and any purchases made outside the U.S.</li>
                    <li><strong>Use the Chase Freedom Unlimited® for:</strong> Drugstore purchases and absolutely everything else.</li>
                </ul>
                <p>This straightforward approach ensures you’re always earning a minimum of 1.5x points, with many purchases earning 3x or even 5x.</p>
            </section>

            <section className={styles.reviewSection}>
                <h2>Real-World Value: From Daily Coffee to Dream Vacations</h2>
                <p>Consider a family that spends on groceries, dining, and other household needs. By using this two-card strategy, their everyday expenses can accumulate nearly 95,000 points in a year. Those points can be transferred to a partner like World of Hyatt to book a three-night stay at an all-inclusive resort—a vacation worth over $2,000, funded entirely by their regular spending. (Value based on analysis of the <a href="https://world.hyatt.com/content/gp/en/landing/award-charts.html" target="_blank" rel="noopener noreferrer">World of Hyatt Program Details</a>).</p>
            </section>
            
            <section id="editors-essential-takeaways" className={`${styles.reviewSection} ${styles.eetaSection || ''}`}>
                <h2>The Verdict for 2025: Is the Chase Duo Right for You?</h2>
                <p>This strategy is a perfect fit for the value-conscious U.S. traveler who takes a few trips a year and wants to maximize rewards without the complexity or high fees of ultra-premium cards. It’s for the everyday maximizer who wants their spending to work for them. For those just starting their points journey, this duo represents one of the <strong>Best Starter Travel Credit Card</strong> strategies for 2025.</p>
                <p>However, if you’re a road warrior who can leverage the extensive credits of a top-tier card, or if you’re fiercely loyal to a single airline or hotel brand, a different card might be a better fit. Other issuers also offer compelling ecosystems, which you can explore in our <Link href="/reviews/chase-vs-capital-one-travel-cards-2025"><a>Chase vs. Capital One travel card showdown</a></Link>.</p>
                <p>For the vast majority of American travelers, the conclusion is clear. The combination of the Chase Sapphire Preferred® and Chase Freedom Unlimited® is the most intelligent and accessible strategy for turning everyday spending into incredible travel experiences. It's the perfect financial co-pilot for your adventures in 2025 and beyond. (Analysis supported by data from sources like <a href="https://www.forbes.com/advisor/credit-cards/best-travel-rewards-credit-cards/" target="_blank" rel="noopener noreferrer nofollow">Forbes Advisor</a> and <a href="https://travel.usnews.com/rankings/travel-rewards-programs/" target="_blank" rel="noopener noreferrer nofollow">U.S. News & World Report Travel</a>).</p>
            </section>
        </article>
      </main>
    </>
  );
}

export default ChaseDuoStrategyPage2025;