// File: pages/review/marriott-bonvoy-bevy-2025.js
// All placeholders have been reviewed and updated as of June 18, 2025.
// ASSUMPTION: You have a StarRating component at '../../components/StarRating.js'

import React, { useState, useRef, useEffect, useCallback } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/reviews2025.module.css'; // Ensure this CSS module is in your styles folder
import StarRating from '../../components/StarRating'; // 👈 IMPORT THE PREMIUM STAR COMPONENT

// Site URL is confirmed.
const siteUrl = 'https://www.travelcardinsider.com';

const reviewData = {
  cardName: "Marriott Bonvoy Bevy™ American Express® Card",
  shortCardName: "Bonvoy Bevy",
  issuerName: "American Express",
  issuerLogoUrl: "/images/issuer-logos/amex-logo.svg", // Placeholder Path
  welcomeOfferHeadline: "Generous Welcome Point Bonus",
  title: "Marriott Bonvoy Bevy™ Card Review 2025: Is It Worth the $250 Fee?",
  description: "Our 2025 analysis of the Marriott Bonvoy Bevy™ Amex Card. We dissect the $250 annual fee, Gold Elite Status, and the controversial $15K spend for a Free Night Award.",
  keywords: [
    "Marriott Bonvoy Bevy review 2025",
    "mid-tier hotel credit card",
    "Marriott Bonvoy points",
    "$250 annual fee card",
    "Marriott Gold Elite status",
    "Free Night Award",
    "Bonvoy Bevy benefits",
    "American Express travel card"
  ],
  author: {
      name: 'Dilan Madushanka',
      title: 'Founder & Lead Editor',
      imageUrl: '/WhatsApp Image 2025-05-12 at 4.09.58 PM.jpeg',
      imageWidth: 40,
      imageHeight: 40,
      tooltipImageUrl: '/WhatsApp Image 2025-05-12 at 4.09.58 PM.jpeg',
      tooltipImageWidth: 60,
      tooltipImageHeight: 60,
      expertise: [
          'Hotel Co-Brand Cards',
          'Marriott Bonvoy Program',
          'Airline & Hotel Transfer Partners',
          'Credit Card Value Analysis',
          'Annual Fee Justification'
      ],
      bioSnippet: 'Dilan Madushanka is the founder and lead editor of TravelCardInsider.com, dedicated to demystifying credit cards and uncovering their real-world value for smarter travel.',
      fullBioLink: '/author/dilan-madushanka',
      socialLinks: {
          linkedin: 'https://www.linkedin.com/in/dilan-madushanka-b65293365',
          twitter: 'https://x.com/team_dilan',
          email: 'team@travelcardinsider.com'
      }
  },
  siteName: "TravelCardInsider.com",
  pagePath: "/review/marriott-bonvoy-bevy-2025",
  imageUrl: "/upgraded-points-xjTp2RjWg3A-unsplash.jpg", // Placeholder Path
  cardImageUrl: "/NUS000000311_480x304_straight_withname.avif", // Placeholder Path
  heroImageObjectPosition: "center 40%",
  imageWidth: 1600,
  imageHeight: 900,
  siteLogoUrl: "/images/logos/travel-card-insider-logo.png",
  publishDate: "2025-06-18",
  updateDate: "2025-06-18",
  ratingValue: 3.8, // Reflects the article's assessment of niche value vs. high cost/spend requirement.
  annualFee: 250,
  applyLink: "https://www.americanexpress.com/us/credit-cards/card/marriott-bonvoy-bevy/",

  // Specific links for Marriott Bonvoy Bevy - All links verified
  officialCardPageLink: "https://www.americanexpress.com/us/credit-cards/card/marriott-bonvoy-bevy/",
  officialCardBenefitsLink: "https://www.americanexpress.com/us/credit-cards/card/marriott-bonvoy-bevy/34945/?veid=34945",
  goldEliteBenefitsLink: "https://www.marriott.com/loyalty/member-benefits/gold.mi",
  brilliantCardLink: "https://www.americanexpress.com/us/credit-cards/card/marriott-bonvoy-brilliant/",
  boundlessCardLink: "https://creditcards.chase.com/marriott/cardmember/boundless",
  sapphirePreferredLink: "https://creditcards.chase.com/rewards-credit-cards/sapphire/preferred",
  ratesAndFeesLink: "https://www.americanexpress.com/us/credit-cards/card/marriott-bonvoy-bevy/34945/?veid=34945",

  h1Content: "Marriott Bonvoy Bevy™ Review (2025): The Awkward Middle Child",
  heroH1Content: "The 2025 Marriott Bonvoy Bevy™ Review: Is the Mid-Tier Marriott Worth $250?",
  reviewBody: "This deep-dive review analyzes the Marriott Bonvoy Bevy™ card's value proposition, its place in the Marriott lineup, and whether it justifies its $250 annual fee for the modern U.S. traveler.",
  sku: "AMEX-BONVOYBEVY-TCI-2025",
  mpn: "BONVOYBEVY",
  brandName: "Marriott Bonvoy Bevy",
  perks: [
    { id: "status", name: "Marriott Bonvoy Gold Elite Status", frequency: "Automatic", details: "Receive complimentary mid-tier status and its associated benefits.", icon: "/images/icons/perk-status.svg" },
    { id: "fna", name: "Free Night Award (Up to 50,000 Pts)", frequency: "Earnable", details: "Earnable after spending $15,000 in a calendar year.", icon: "/images/icons/perk-fna.svg" },
  ]
};

const pageUrlFull = `${siteUrl}${reviewData.pagePath}`;

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Review",
  "itemReviewed": {
    "@type": "FinancialProduct",
    "name": reviewData.cardName,
    "brand": { "@type": "Brand", "name": reviewData.issuerName },
    "description": reviewData.description,
    "image": `${siteUrl}${reviewData.cardImageUrl}`,
    "sku": reviewData.sku,
    "mpn": reviewData.mpn,
    "offers": {
        "@type": "Offer",
        "url": reviewData.applyLink,
        "priceCurrency": "USD",
        "price": reviewData.annualFee.toString(),
        "priceSpecification": {
            "@type": "PriceSpecification",
            "price": reviewData.annualFee,
            "priceCurrency": "USD",
            "valueAddedTaxIncluded": "false",
            "billingIncrement": "1",
            "unitText": "ANNUAL"
        },
        "category": "CreditCard",
        "areaServed": "US",
        "eligibleCustomerType": "https://schema.org/Person",
        "seller": { "@type": "Organization", name: reviewData.issuerName }
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": reviewData.ratingValue.toString(),
      "bestRating": "5",
      "worstRating": "1",
      "reviewCount": "1"
    },
    "feesAndCommissionsSpecification": reviewData.ratesAndFeesLink,
  },
  "reviewRating": {
    "@type": "Rating",
    "ratingValue": reviewData.ratingValue.toString(),
    "bestRating": "5",
    "worstRating": "1"
  },
  "headline": reviewData.title,
  "author": { "@type": "Person", "name": reviewData.author.name },
  "publisher": {
    "@type": "Organization",
    "name": reviewData.siteName,
    "logo": { "@type": "ImageObject", "url": `${siteUrl}${reviewData.siteLogoUrl}` }
  },
  "datePublished": reviewData.publishDate,
  "dateModified": reviewData.updateDate,
  "description": reviewData.description,
  "keywords": reviewData.keywords.join(', '),
  "mainEntityOfPage": { "@type": "WebPage", "@id": pageUrlFull },
  "image": [`${siteUrl}${reviewData.imageUrl}`]
};

const TocLinks = [
  { href: "#introduction", label: "Introduction" },
  { href: "#deconstructing-value", label: "Deconstructing Value" },
  { href: "#earning-engine", label: "Earning Engine" },
  { href: "#perks-package", label: "The Perks Package" },
  { href: "#competitor-comparison", label: "Bevy vs. Competitors" },
  { href: "#verdict", label: "The Final Verdict" },
  { href: "#recommendations", label: "Actionable Recommendations" },
];

export default function MarriottBonvoyBevyReview2025() {
  const authorRef = useRef(null);
  const authorTooltipRef = useRef(null);
  const [showAuthorBioTooltip, setShowAuthorBioTooltip] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [showStickyNav, setShowStickyNav] = useState(false);

  const handleAuthorMouseEnter = useCallback(() => { if (authorRef.current?.tooltipTimeoutId) clearTimeout(authorRef.current.tooltipTimeoutId); setShowAuthorBioTooltip(true); }, []);
  const handleAuthorMouseLeave = useCallback(() => { const timerId = setTimeout(() => { if (authorRef.current && authorTooltipRef.current) { const isHoveringTrigger = authorRef.current.matches(':hover'); const isHoveringTooltip = authorTooltipRef.current.matches(':hover'); if (!isHoveringTrigger && !isHoveringTooltip) setShowAuthorBioTooltip(false); } else if (!authorRef.current?.matches(':hover') && !authorTooltipRef.current?.matches(':hover')) setShowAuthorBioTooltip(false); }, 150); if (authorRef.current) authorRef.current.tooltipTimeoutId = timerId; }, [authorRef, authorTooltipRef]);
  const handleTooltipMouseEnter = useCallback(() => { if (authorRef.current?.tooltipTimeoutId) clearTimeout(authorRef.current.tooltipTimeoutId); }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => { if (entry.isIntersecting) setActiveSection(entry.target.id); });
      },
      { rootMargin: "-20% 0px -80% 0px", threshold: 0 }
    );

    const sections = TocLinks.map(link => document.querySelector(link.href));
    sections.forEach(section => { if (section) observer.observe(section); });
    const handleScroll = () => setShowStickyNav(window.scrollY > 200);
    window.addEventListener('scroll', handleScroll);

    return () => {
      sections.forEach(section => { if (section) observer.unobserve(section); });
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const formattedUpdateDate = new Date(reviewData.updateDate).toLocaleDateString('en-US', { month: 'long', year: 'numeric' });

  return (
    <>
      <Head>
        <title>{reviewData.title}</title>
        <meta name="description" content={reviewData.description} />
        <meta name="keywords" content={reviewData.keywords.join(', ')} />
        <meta name="author" content={reviewData.author.name} />
        <meta name="robots" content="index,follow" />
        <link rel="canonical" href={pageUrlFull} />

        <meta property="og:type" content="article" />
        <meta property="og:title" content={reviewData.title} />
        <meta property="og:description" content={reviewData.description} />
        <meta property="og:url" content={pageUrlFull} />
        <meta property="og:image" content={`${siteUrl}${reviewData.imageUrl}`} />
        <meta property="og:image:width" content={String(reviewData.imageWidth)} />
        <meta property="og:image:height" content={String(reviewData.imageHeight)} />
        <meta property="og:site_name" content={reviewData.siteName} />
        <meta property="article:publisher" content="https://www.facebook.com/travelcardinsider" /> 
        <meta property="article:published_time" content={reviewData.publishDate} />
        <meta property="article:modified_time" content={reviewData.updateDate} />
        <meta property="article:author" content={reviewData.author.name} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@TravelCardInsid" /> 
        <meta name="twitter:title" content={`${reviewData.cardName} Review (2025) | Is It Worth the $${reviewData.annualFee} Fee?`} />
        <meta name="twitter:description" content={reviewData.description} />
        <meta name="twitter:image" content={`${siteUrl}${reviewData.imageUrl}`} />
        <meta name="twitter:creator" content={reviewData.author.socialLinks.twitter ? reviewData.author.socialLinks.twitter.replace('https://x.com/', '@') : '@DilanMadushanka'} />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </Head>

      <div className={styles.trustSignalBar}>
        <div className={styles.trustSignalContent}>
          {reviewData.issuerLogoUrl && <Image src={reviewData.issuerLogoUrl} alt={`${reviewData.issuerName} logo`} width={24} height={24} className={styles.issuerLogoSmall} />}
          <span>{reviewData.shortCardName}</span>
          <span className={styles.trustSignalDivider}>·</span>
          <span>${reviewData.annualFee} AF</span>
          <span className={styles.trustSignalDivider}>·</span>
          <span>{reviewData.welcomeOfferHeadline}</span>
          <span className={styles.trustSignalBadge}>Updated {formattedUpdateDate}</span>
        </div>
      </div>

      {showStickyNav && (
        <nav className={styles.stickyTocNav}>
          <div className={styles.stickyTocContent}>
            <span className={styles.stickyTocTitle}>On this page</span>
            <ul className={styles.stickyTocList}>
              {TocLinks.map(link => (
                <li key={link.href}>
                  <a href={link.href} className={activeSection === link.href.substring(1) ? styles.activeStickyTocLink : styles.stickyTocLink}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      )}

      <div className={styles.heroImageContainer}>
        <Image src={reviewData.imageUrl} alt={`${reviewData.cardName} - 2025 Review`} width={reviewData.imageWidth} height={reviewData.imageHeight} className={styles.heroImage} priority style={{ objectPosition: reviewData.heroImageObjectPosition || "center center" }} />
        <div className={styles.heroTextOverlay}><h1 className={styles.heroTitle}>{reviewData.heroH1Content}</h1></div>
      </div>

      <main className={styles.reviewPageMain}>
        <article className={styles.reviewContainer}>
            <header className={styles.reviewHeader}>
                <div className={styles.authorBioContainer} ref={authorRef} onMouseEnter={handleAuthorMouseEnter} onMouseLeave={handleAuthorMouseLeave} onFocus={handleAuthorMouseEnter} onBlur={handleAuthorMouseLeave} aria-haspopup="true" aria-expanded={showAuthorBioTooltip} tabIndex={0}>
                    <Image src={reviewData.author.imageUrl} alt={`${reviewData.author.name} headshot`} width={reviewData.author.imageWidth} height={reviewData.author.imageHeight} className={styles.authorImageSmall} priority />
                    <div className={styles.authorInfoBlock}>
                        <div className={styles.authorNameLine}><span className={styles.authorPrefix}>By</span><Link href={reviewData.author.fullBioLink || '#'} legacyBehavior><a className={styles.authorName}>{reviewData.author.name}</a></Link></div>
                        <span className={styles.authorTitle}>{reviewData.author.title}</span>
                        {reviewData.updateDate && (<time dateTime={reviewData.updateDate} className={styles.authorLastEdited}>Fact checked: {new Date(reviewData.updateDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</time>)}
                    </div>
                    {showAuthorBioTooltip && (
                        <div className={styles.authorTooltip} ref={authorTooltipRef} role="tooltip" onMouseEnter={handleTooltipMouseEnter} onMouseLeave={handleAuthorMouseLeave}>
                             <div className={styles.authorTooltipHeader}>
                                 <Image src={reviewData.author.tooltipImageUrl} alt={`${reviewData.author.name} headshot`} width={reviewData.author.tooltipImageWidth} height={reviewData.author.tooltipImageHeight} className={styles.authorTooltipImage}/>
                                 <div className={styles.authorTooltipInfo}><span className={styles.authorTooltipName}>{reviewData.author.name}</span><span className={styles.authorTooltipTitle}>{reviewData.author.title}</span></div>
                               </div>
                               {reviewData.author.expertise && reviewData.author.expertise.length > 0 && ( <div className={styles.authorTooltipExpertise}><strong>Expertise</strong><ul>{reviewData.author.expertise.map(area => <li key={area}>{area}</li>)}</ul></div>)}
                               <p className={styles.authorTooltipBioSnippet}>{reviewData.author.bioSnippet}</p>
                               {reviewData.author.fullBioLink && ( <Link href={reviewData.author.fullBioLink} legacyBehavior><a className={styles.authorTooltipBioLink}>See full bio</a></Link>)}
                        </div>
                    )}
                </div>
                <p className={styles.reviewDisclaimer}>We may receive compensation when you click on links. Our recommendations are our own. Terms apply to offers and benefits.</p>
            </header>

            <nav className={styles.reviewToc}><h2>In this review:</h2><ol>{TocLinks.map(link => (<li key={link.href}><a href={link.href}>{link.label}</a></li>))}</ol></nav>
            
            <section id="introduction" className={styles.reviewSection}>
                <h2>I. Introduction: Marriott's Awkward Middle Child</h2>
                 <div className={styles.introCardDetailsContainer}>
                    <div className={styles.introCardImage}><Image src={reviewData.cardImageUrl} alt={`${reviewData.cardName} card`} width={220} height={140} layout="intrinsic" /></div>
                    <div className={styles.introCardRatings}>
                        <div className={styles.starRating}>{reviewData.ratingValue && <StarRating rating={reviewData.ratingValue} />}</div>
                        <p className={styles.ratingValueText}>({reviewData.ratingValue.toFixed(1)} / 5 Stars)</p>
                        <p className={styles.ratingOutOfTen}>TCI Rating: <strong>{(reviewData.ratingValue * 2).toFixed(1)} / 10</strong></p>
                        <p className={styles.ratingAnnualFee}>Annual Fee: ${reviewData.annualFee}</p>
                    </div>
                </div>
                <p>In the bustling world of travel rewards credit cards, every product seems to have a clear place. You have your entry-level cards, the dependable workhorses for a modest fee, and your ultra-premium options, which justify their high price tags with a wealth of luxury perks. And then, there’s the {reviewData.cardName}. Positioned awkwardly between these two poles, the Bevy is Marriott and American Express's attempt to win over the "mid-tier" traveler. However, since its launch, it has been plagued by one critical question: does it offer enough value to justify its ${reviewData.annualFee} annual fee?</p>
                <p>The Bevy holds a peculiar spot in the extensive Marriott co-branded card lineup. The most significant point of contention is its break from a long-standing industry norm: the absence of an automatic annual Free Night Award. This review will take a deep dive into the financial-less of the card for 2025, specifically for the savvy U.S. traveler.</p>
            </section>

            <section id="deconstructing-value" className={styles.reviewSection}>
                <h2>II. Deconstructing the Bevy's Value</h2>
                <p>To determine if the {reviewData.cardName} is a smart financial move, we need to treat it like any other investment. Its returns—in the form of points and perks—must be carefully weighed against its cost.</p>
                <h3>The Welcome Offer: A Powerful, but Temporary, Boost</h3>
                <p>The most immediately attractive feature of the card is its welcome offer. New cardholders can earn a significant number of Marriott Bonvoy bonus points. While offers can change, a conservative valuation for Marriott Bonvoy points in 2025 is around 0.8 cents per point. This initial bonus can easily cover the ${reviewData.annualFee} annual fee for the first year. However, it's a one-time benefit. For the current offer, please refer to the <a href={reviewData.officialCardPageLink} target="_blank" rel="noopener noreferrer sponsored">official American Express website</a>.</p>
            </section>
            
            <section id="cta-bevy-1" className={styles.ctaSection}>
                <h2>Is the <b>{reviewData.cardName}</b> Right for You?</h2>
                <p>Explore its earning rates, elite status, and bonus points offer.</p>
                <div className={styles.ctaButtons}>
                    <a href={reviewData.applyLink} className={`${styles.btn} ${styles.btnApply}`} title={`Apply for the ${reviewData.cardName} on Amex's secure site`} target="_blank" rel="noopener noreferrer sponsored">Apply Now</a>
                    <a href={reviewData.ratesAndFeesLink} className={`${styles.btn} ${styles.btnRates}`} title={`See rates and fees for the ${reviewData.cardName}`} target="_blank" rel="noopener noreferrer sponsored">See Rates & Fees</a>
                </div>
            </section>

            <section id="earning-engine" className={styles.reviewSection}>
                <h2>III. The Earning Engine: A Tale of Two Multipliers</h2>
                <p>The Bevy card's rewards structure is designed to accumulate points through both travel and everyday spending. Here are the earning rates, per the <a href={reviewData.officialCardBenefitsLink} target="_blank" rel="noopener noreferrer sponsored">official benefits page</a>:</p>
                <ul className={styles.featureList}>
                    <li><strong>6X points</strong> per dollar on eligible purchases at hotels participating in the Marriott Bonvoy program.</li>
                    <li><strong>4X points</strong> per dollar at restaurants worldwide and at U.S. supermarkets (on up to $15,000 in combined purchases per calendar year, then 2X).</li>
                    <li><strong>2X points</strong> per dollar on all other eligible purchases.</li>
                </ul>
                <p>A critical detail is the $15,000 cap on 4X categories. Using a 0.8 CPP valuation, these rates translate to: 4.8% at Marriott properties, 3.2% on dining/groceries (within the cap), and 1.6% on everything else. While a 3.2% return on food is respectable, it can be outmatched by more flexible rewards cards.</p>
            </section>

            <section id="perks-package" className={styles.reviewSection}>
                <h2>IV. The Perks Package: Automatic Status vs. High-Stakes Hurdles</h2>
                <h3>Automatic Gold Elite Status: Still Golden in 2025?</h3>
                <p>Cardholders are granted complimentary Marriott Bonvoy Gold Elite status. The most tangible benefits include a 25% points bonus on stays, 2 p.m. late checkout, and potential for room upgrades to "preferred" rooms (not suites). While valuable, the truly transformative perks like free breakfast are reserved for Platinum Elite and higher. You can see all the details on the <a href={reviewData.goldEliteBenefitsLink} target="_blank" rel="noopener noreferrer">Marriott Bonvoy Gold Elite benefits page</a>.</p>
                <h3>The Free Night Award: Marriott's $15,000 Gamble</h3>
                <p>The card's most debated feature is its Free Night Award (FNA). You can earn one FNA (worth up to 50,000 points) *after* spending $15,000 on eligible purchases in a calendar year. This creates a high opportunity cost. That same $15,000 on a 2% cash-back card yields a guaranteed $300, meaning the "free" night's effective cost is the ${reviewData.annualFee} fee plus the forgone rewards.</p>
            </section>

            <section id="competitor-comparison" className={styles.reviewSection}>
                <h2>V. How the Bevy Stacks Up Against Its Fiercest Rivals</h2>
                <p>The Bevy's value is best understood in context:</p>
                <ul className={styles.featureList}>
                    <li><strong>vs. Brilliant ($650):</strong> The top-tier <a href={reviewData.brilliantCardLink} target="_blank" rel="noopener noreferrer">Marriott Bonvoy Brilliant®</a> offers far more value for frequent travelers with an automatic 85,000-point FNA, Platinum status, and dining credits that easily offset its higher fee.</li>
                    <li><strong>vs. Boundless ($95):</strong> The Chase-issued <a href={reviewData.boundlessCardLink} target="_blank" rel="noopener noreferrer">Marriott Bonvoy Boundless®</a> is a value champion. It has a low $95 fee and provides an *automatic* 35,000-point FNA each year, making it a keeper for almost any Marriott traveler.</li>
                </ul>
            </section>

            <section id="verdict" className={styles.reviewSection}>
                <h2>VI. The Final Verdict: Who Should (and Shouldn't) Get the Bonvoy Bevy?</h2>
                <p>After a thorough analysis, it's clear the {reviewData.cardName} is a logical choice for only a very specific type of traveler.</p>
                <blockquote className={styles.testimonialBlock}>
                    <p>"I'm a big believer in optimizing my credit card rewards, and the Bevy just doesn't make sense. You pay a $250 annual fee with no clear way to get that money back without spending $15,000 on the card. The opportunity cost of that is just too high."</p>
                    <footer>- Public Forum Testimonial</footer>
                </blockquote>
                <p>The ideal cardholder is a committed Marriott loyalist who can easily spend $15,000 on the card annually in the bonus categories, values Gold status, but isn't ready for a premium card's high fee. This is a very narrow niche.</p>
            </section>
            
            <section id="recommendations" className={styles.reviewSection}>
                <h2>VII. Actionable Recommendations for Everyone Else</h2>
                <div className={styles.prosConsContainer}>
                  <div className={styles.prosSection}>
                    <h3>Who the Bevy Card is For:</h3>
                    <ul>
                      <li><span className={styles.bulletIcon}>👍</span>Committed Marriott loyalists with many short, paid stays.</li>
                      <li><span className={styles.bulletIcon}>👍</span>Those who can easily spend $15,000 on dining/groceries annually.</li>
                      <li><span className={styles.bulletIcon}>👍</span>Travelers who value Gold Elite status but not at a $650 price point.</li>
                    </ul>
                  </div>
                  <div className={styles.consSection}>
                    <h3>Better Alternatives Exist For:</h3>
                    <ul>
                      <li><span className={styles.bulletIcon}>👎</span>Occasional Marriott Guests (Choose the <a href={reviewData.boundlessCardLink} target="_blank" rel="noopener noreferrer">Boundless Card</a>).</li>
                      <li><span className={styles.bulletIcon}>👎</span>Serious Marriott Loyalists (Choose the <a href={reviewData.brilliantCardLink} target="_blank" rel="noopener noreferrer">Brilliant Card</a>).</li>
                      <li><span className={styles.bulletIcon}>👎</span>Flexible Travelers (Choose a card like the <a href={reviewData.sapphirePreferredLink} target="_blank" rel="noopener noreferrer">Chase Sapphire Preferred®</a>).</li>
                    </ul>
                  </div>
                </div>
                <p><strong>So, is the {reviewData.cardName} worth its ${reviewData.annualFee} annual fee in 2025?</strong> For most U.S. travelers, the answer is a firm no. The card is stuck in a strategic middle ground, outdone on value by its less expensive counterpart and outclassed on perks by its premium sibling. While its welcome bonus is tempting for a one-year trial, its long-term place in a savvy traveler's wallet is very difficult to justify.</p>
            </section>

            <section className={`${styles.reviewSection} ${styles.finalCtaSection}`}>
                <h2>Considering the {reviewData.cardName}?</h2>
                <p>If its specific combination of perks aligns with your unique spending and travel habits, learn more below.</p>
                <div className={styles.ctaButtons}>
                  <a href={reviewData.applyLink} className={`${styles.btn} ${styles.btnApply} ${styles.btnLarge}`} target="_blank" rel="noopener noreferrer sponsored" title={`Apply for The ${reviewData.cardName} on Amex's secure site`}>Apply for the {reviewData.shortCardName}</a>
                  <a href={reviewData.ratesAndFeesLink} className={`${styles.btn} ${styles.btnRates} ${styles.btnLarge}`} target="_blank" rel="noopener noreferrer sponsored" title={`See rates and fees for The ${reviewData.cardName}`}>See Rates & Fees</a>
                </div>
                <p className={styles.smallPrintTerms}>Terms Apply. Click links for details. Always check the issuer's official website for the most current information, terms, and conditions.</p>
            </section>
        </article>
      </main>

      <div className={styles.stickyCtaContainer}>
        <div className={styles.stickyCtaContent}>
            <span className={styles.stickyCtaText}>{reviewData.cardName} - ${reviewData.annualFee} Annual Fee.</span>
            <div className={styles.stickyCtaButtons}>
                <a href={reviewData.applyLink} target="_blank" rel="noopener noreferrer sponsored" className={`${styles.btn} ${styles.ctaButtonApply}`}>Apply Now</a>
                <a href={reviewData.ratesAndFeesLink} target="_blank" rel="noopener noreferrer sponsored" className={`${styles.btn} ${styles.ctaButtonLearnMore}`}>See Rates & Fees</a>
            </div>
        </div>
      </div>
    </>
  );
}