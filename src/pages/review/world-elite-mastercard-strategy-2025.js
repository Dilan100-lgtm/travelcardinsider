// File: pages/guides/world-elite-mastercard-strategy-2025.js – FINAL COMPLETE VERSION
// ❗ Replace image src paths (in cardData and constants) with your optimised, WebP‑or‑AVIF images.
// The paths below are placeholders. Card images should ideally be ~150x95px or similar aspect ratio.

import React, { useState, useRef, useEffect, useCallback } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/NoFTFCardsReview.module.css'; // Reusing the same proven styles

// ─────────────────────────────────────────────────────────────────────────────
// 🔗 CONFIG
// ─────────────────────────────────────────────────────────────────────────────
const SITE_BASE_URL = 'https://www.travelcardinsider.com'; // Your website's base URL
const PAGE_PATH = '/guides/world-elite-mastercard-strategy-2025'; // ✏️ SEO-friendly URL for this page
const PAGE_URL = `${SITE_BASE_URL}${PAGE_PATH}`;
const SITE_NAME = 'Travel Card Insider';
const HERO_IMAGE_SRC = '/ross-sneddon-Kf7hX64kLw0-unsplash.webp'; // ❗ Replace with your optimised hero image
const HERO_IMAGE_ALT = 'A World Elite Mastercard on a travel-themed desk, highlighting the card\'s hidden benefits.';
const DATE_PUBLISHED = '2025-07-12'; // ✏️ As per article date
const DATE_MODIFIED = '2025-07-12'; // ✏️ Update whenever you edit copy

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
// 💳 WORLD ELITE CARD DATA
// ❗ Review and update placeholder imageSrc.
// ❗ ENSURE all links are the most current and official versions.
// ─────────────────────────────────────────────────────────────────────────────
const worldEliteCardData = [
  {
    id: 'citiAAdvantageExecutive',
    name: 'Citi® / AAdvantage® Executive Card',
    issuer: 'Citi',
    imageSrc: '/CardArt-8.webp', // ❗ Replace
    imageAlt: 'Citi / AAdvantage Executive World Elite Mastercard',
    annualFee: '$595',
    officialCardPageLink: 'https://www.citi.com/credit-cards/citi-aa-exec-card',
    applyLink: 'https://www.citi.com/credit-cards/citi-aa-exec-card',
    ratesFeesLink: 'https://www.citi.com/credit-cards/citi-aa-exec-card', // Direct deep links are often unavailable; linking to the main page is standard practice.
    learnMoreLink: '/cards/citi-aadvantage-executive',
    valueProposition: 'For the Airline Loyalist:',
    coreFeatures: [
      "Admirals Club® Membership (valued by AA at up to $850 per year).",
      "First checked bag free for you and up to eight companions on domestic itineraries.",
      "Enhanced earning on American Airlines purchases.",
    ],
  },
  {
    id: 'bofaPremiumRewardsElite',
    name: 'Bank of America® Premium Rewards® Elite Card',
    issuer: 'Bank of America',
    imageSrc: '/prmeltcm_v_infinite_250px.png', // ❗ Replace
    imageAlt: 'Bank of America Premium Rewards Elite Card',
    annualFee: '$550',
    officialCardPageLink: 'https://www.bankofamerica.com/credit-cards/products/premium-rewards-elite-credit-card/',
    applyLink: 'https://www.bankofamerica.com/credit-cards/products/premium-rewards-elite-credit-card/',
    ratesFeesLink: 'https://www.bankofamerica.com/credit-cards/products/premium-rewards-elite-credit-card/',
    learnMoreLink: '/cards/bank-of-america-premium-rewards-elite',
    valueProposition: 'For the Flexible High-Spender:',
    coreFeatures: [
      "$300 in annual Airline Incidental Statement Credits.",
      "$150 in annual Lifestyle Credits (for streaming, food delivery, etc.).",
      "Priority Pass™ Select lounge access.",
      "Boosted rewards earnings of up to 75% for Preferred Rewards members.",
    ],
  },
  {
    id: 'biltMastercard',
    name: 'Bilt Mastercard®',
    issuer: 'Bilt Rewards / Wells Fargo',
    imageSrc: '/Bilt_card_D.png', // ❗ Replace
    imageAlt: 'Bilt Mastercard',
    annualFee: '$0',
    officialCardPageLink: 'https://www.biltrewards.com/card',
    applyLink: 'https://www.biltrewards.com/card',
    ratesFeesLink: 'https://www.wellsfargo.com/credit-cards/bilt/terms/', // Specific link available for Bilt
    learnMoreLink: '/cards/bilt-mastercard',
    valueProposition: 'The Ultimate Proof (for $0):',
    coreFeatures: [
        "Earn points on rent payments without transaction fees (on 1 trip per calendar month).",
        "Access to the full World Elite Mastercard benefits package for no annual fee.",
        "1:1 point transfers to top airline and hotel partners.",
    ],
  }
];

// ─────────────────────────────────────────────────────────────────────────────
// 🧠 HELPERS
// ─────────────────────────────────────────────────────────────────────────────
function generateJsonLD() {
 const itemListElements = worldEliteCardData.map((card, i) => ({
  '@type': 'ListItem',
  position: i + 1,
  item: {
   '@type': 'Product',
   name: card.name,
   url: `${SITE_BASE_URL}${card.learnMoreLink}`,
   image: `${SITE_BASE_URL}${card.imageSrc}`,
   description: card.coreFeatures.join(' '),
   brand: { '@type': 'Brand', name: card.issuer },
   offers: {
    '@type': 'Offer',
    priceCurrency: 'USD',
    price: card.annualFee.replace('$', ''),
        availability: 'https://schema.org/OnlineOnly',
        url: card.applyLink,
   },
      // ✅ FIX STARTS HERE: Added a "review" property to each product
      review: {
        '@type': 'Review',
        author: {
          '@type': 'Person',
          name: author.name
        },
        publisher: {
          '@type': 'Organization',
          name: SITE_NAME
        },
        datePublished: DATE_PUBLISHED,
        reviewBody: card.coreFeatures.join(' '), // Using core features as a summary
        name: `Analysis of the ${card.name}`,
        reviewRating: {
            '@type': 'Rating',
            ratingValue: '4.7', // ✏️ Adjust this rating based on your expert opinion
            bestRating: '5',
            worstRating: '1'
        }
      }
      // ✅ FIX ENDS HERE
  },
 }));

 const breadcrumbsSchema = {
  '@type': 'BreadcrumbList',
  itemListElement: [
   { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_BASE_URL, },
   { '@type': 'ListItem', position: 2, name: 'Guides', item: `${SITE_BASE_URL}/guides`, },
   { '@type': 'ListItem', position: 3, name: 'Your World Elite Mastercard Has Hidden Perks Worth Hundreds', item: PAGE_URL, },
  ],
 };

 const articleSchema = {
  '@type': 'ReviewNewsArticle',
  mainEntityOfPage: { "@type": "WebPage", "@id": PAGE_URL },
  headline: 'Your World Elite Mastercard Has Hidden Perks Worth Hundreds. Here’s How to Find Them.',
  description: 'That premium card in your wallet is more than just a piece of metal. But the most valuable benefits aren\'t from Mastercard—they\'re from your bank. We break down the hidden value almost everyone misses.',
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
    name: 'World Elite Mastercard Benefits & Issuer Differences',
    description: 'An analysis of the core World Elite Mastercard network benefits versus the high-value perks provided by issuing banks like Citi, Bank of America, and Wells Fargo.'
  }
 };

 return JSON.stringify(
  {
   '@context': 'https://schema.org',
   '@graph': [
    articleSchema,
    { 
      '@type': 'ItemList', 
      name: 'Compared World Elite Mastercard Cards',
      itemListElement: itemListElements
    }
   ]
  }
 );
}

// ─────────────────────────────────────────────────────────────────────────────
// 🌐 COMPONENT
// ─────────────────────────────────────────────────────────────────────────────
function WorldEliteStrategyPage2025() {
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
    const card = worldEliteCardData.find(c => c.id === cardId);
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
          {card.valueProposition && <li><strong>{card.valueProposition}</strong></li>}
          {card.coreFeatures && card.coreFeatures.length > 0 && (
            <li>
              <ul>{card.coreFeatures.map((feature, i) => <li key={i}>{feature}</li>)}</ul>
            </li>
          )}
        </ul>
        <div className={styles.cardButtonsContainer}>
            <a href={card.applyLink} target="_blank" rel="noopener noreferrer sponsored" className={`${styles.cardButton} ${styles.applyButton}`}>
              Official Site
            </a>
            <Link href={card.learnMoreLink} legacyBehavior>
               <a className={`${styles.cardButton} ${styles.secondaryButton}`}>Read Review</a>
            </Link>
             <a href={card.ratesFeesLink} target="_blank" rel="noopener noreferrer sponsored" className={`${styles.cardButton} ${styles.secondaryButton}`}>
              Rates & Fees
            </a>
        </div>
      </div>
    );
  };


  return (
    <>
      <Head>
        {/* Core */}
        <title>World Elite Mastercard Perks (2025): What Your Bank Hides | {SITE_NAME}</title>
        <meta name="description" content="Your World Elite Mastercard has hidden perks. Discover the difference between network benefits (like cell phone insurance) and bank-specific perks (like lounge access) to unlock hundreds in value." />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="keywords" content="world elite mastercard, mastercard benefits, citi aadvantage executive, bank of america premium rewards elite, bilt mastercard, travel credit cards 2025, credit card benefits, airport lounge access" />
        <link rel="canonical" href={PAGE_URL} />

        {/* Open Graph */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content={`The Hidden Value of Your World Elite Mastercard in 2025 | ${SITE_NAME}`} />
        <meta property="og:description" content="The logo is just the start. Learn why the real power of your World Elite card comes from the issuing bank, not the Mastercard network." />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:site_name" content={SITE_NAME} />
        <meta property="og:image" content={`${SITE_BASE_URL}${HERO_IMAGE_SRC}`} />
        <meta property="og:locale" content="en_US" />
        <meta property="article:published_time" content={DATE_PUBLISHED} />
        <meta property="article:modified_time" content={DATE_MODIFIED} />
        <meta property="article:author" content={author.name} />
        <meta property="article:tag" content="World Elite Mastercard" />
        <meta property="article:tag" content="Credit Card Strategy" />
        <meta property="article:tag" content="Travel Perks" />
        <meta property="article:tag" content="2025 Guide" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="World Elite Mastercard (2025): The Perks Your Bank Doesn't Advertise" />
        <meta name="twitter:description" content="Frustrated by your premium card? You're looking in the wrong place. Our guide shows you how to find the benefits that truly matter." />
        <meta name="twitter:image" content={`${SITE_BASE_URL}${HERO_IMAGE_SRC}`} />
        {author.social.twitter && <meta name="twitter:creator" content={`@${author.social.twitter.split('/').pop()}`} />}
        
        {/* JSON‑LD */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: generateJsonLD() }} />
      </Head>

      <main className={styles.reviewContainer}>
        <header className={styles.reviewHeader}>
          <h1>Your World Elite Mastercard Has Hidden Perks Worth Hundreds. Here’s How to Find Them.</h1>
          
          {/* Author Bio Component */}
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
<p className={styles.subheading}>That premium card in your wallet is more than just a piece of metal. But the most valuable benefits aren't from Mastercard—they're from your bank. We break down the hidden value almost everyone misses.</p>
          
        <article>
            <section className={styles.reviewSection}>
                <p>That shiny "World Elite Mastercard" in your wallet promises luxury and seamless travel. But many travelers face a confusing reality, like arriving at an airport lounge expecting free entry, only to be quoted a $35 fee. This frustration highlights the single most important truth about premium credit cards in 2025: The "World Elite" logo is a starting point, not the final destination.</p>
                <p>The real power of your card lies in the difference between the standard benefits from the Mastercard network and the high-impact perks added by your bank. This guide will show you what you're entitled to, how to find the hidden value, and how to choose the right card—potentially saving you hundreds a year.</p>
            </section>
            
            <section className={styles.reviewSection}>
                <h2>Part I: The Universal Toolkit – What Every World Elite Cardholder Gets</h2>
                <p>Every card with the World Elite logo comes with a foundational set of benefits from Mastercard itself. These core perks provide a powerful safety net for any traveler. For a complete overview, see our <Link href="/learn/world-elite-mastercard-benefits"><a>World Elite Mastercard perks guide</a></Link>.</p>
                
                <h3>Your Secret Weapon: The Mastercard Travel Portal</h3>
                <p>The Mastercard Travel & Lifestyle Services portal is more than a booking site; it’s a gateway to two powerful guarantees. The <strong>Lowest Hotel Rate Guarantee</strong> ensures that if you book a hotel and find it cheaper elsewhere, Mastercard will refund the difference. More importantly, the <strong>Hotel Stay Guarantee</strong> provides a 24/7 advocate who will intervene on your behalf if you have a major issue with a 3-star (or higher) hotel. They will work with the hotel to fix the problem or help find you a comparable stay, offering peace of mind that is hard to find elsewhere. <a href="https://travel.mastercard.com/product/terms" target="_blank" rel="noopener noreferrer nofollow">(Source)</a></p>

                <h3>Beyond Google: Making the Concierge Work for You</h3>
                <p>Mastercard’s 24/7 concierge shines with complex, international requests. While it may not be faster than Google for a simple dinner reservation, it's invaluable for overcoming language barriers or navigating tricky booking windows for a popular restaurant abroad. Use it for tasks you can't easily do yourself. <a href="https://concierge.mastercard.com/" target="_blank" rel="noopener noreferrer nofollow">(Source)</a></p>

                <h3>Your Digital Safety Net: Cell Phone Insurance and More</h3>
                <p>One of the most valuable overlooked perks is complimentary cell phone insurance. Simply pay your monthly cell bill with an eligible World Elite card, and you can get coverage for theft or damage (including cracked screens) up to $800 per claim. This can save you the $240+ per year that carriers charge for similar plans. Always verify your specific card includes this, as it's now offered at the bank's discretion. The platform also includes modern security tools like Mastercard ID Theft Protection and HealthLock.</p>
            </section>

            <section className={styles.reviewSection}>
                <h2>Part II: The Great Divide – Why Your Bank Matters Most</h2>
                <p>Here is the most critical takeaway: The high-value perks that define a premium travel experience—airport lounge access, large travel credits, and free checked bags—are controlled entirely by the issuing bank (like Citi or Bank of America), not by Mastercard.</p>
                <p>Think of it this way: Mastercard provides the basic framework. Your bank decides whether to build a palace on top of it. This is why a "World Elite" card from one bank can be packed with value for a $595 annual fee, while another offers only the basics for no fee at all.</p>
                <p>Let’s look at three distinct examples.</p>
                
                {renderCardDetails('citiAAdvantageExecutive')}
                {renderCardDetails('bofaPremiumRewardsElite')}
                {renderCardDetails('biltMastercard')}
            </section>

            <section className={`${styles.reviewSection} ${styles.eetaSection || ''}`}>
                <h2>Part III: The Final Verdict – Your 2025 World Elite Strategy</h2>
                <p>Choosing the right card isn’t about the logo; it’s about matching a bank’s offer to your life. For a deeper dive, compare the <Link href="/review/best-premium-travel-credit-cards-2025"><a>Best Premium Travel Credit Cards 2025</a></Link>. Ask yourself:</p>
                <ul>
                    <li><strong>Am I loyal to a specific airline?</strong> If yes, a co-branded card like the Citi AA Executive is your best bet.</li>
                    <li><strong>Do I fly various airlines and use statement credits?</strong> If yes, a flexible premium card from a major bank like the BofA Elite offers superior value.</li>
                    <li><strong>Do I just want the best protections for the lowest cost?</strong> If yes, a no-fee World Elite card like the Bilt Mastercard is the smartest choice.</li>
                </ul>
                <p>In 2025, mastering premium cards means looking past the branding. The greatest hidden benefit is knowing the power isn't in the network—it's in picking the specific card that perfectly reflects how you spend, travel, and live.</p>
            </section>
        </article>
      </main>
    </>
  );
}

export default WorldEliteStrategyPage2025;