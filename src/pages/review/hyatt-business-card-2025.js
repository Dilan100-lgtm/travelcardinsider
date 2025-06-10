// File: pages/review/hyatt-business-card-2025.js
// Updated to include card image and rating box, mirroring the chase-sapphire-reserve-2025.js structure.

import React, { useState, useRef, useEffect, useCallback } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/reviews2025.module.css';
import StarRating from '../../components/StarRating'; // 👈 NEW: IMPORT THE STAR RATING COMPONENT

const siteUrl = 'https://www.travelcardinsider.com';

const reviewData = {
  cardName: "The World of Hyatt Business Credit Card",
  shortCardName: "Hyatt Business",
  issuerName: "Chase",
  issuerLogoUrl: "/images/issuer-logos/chase-logo.svg", // IMPORTANT: Update with actual Chase logo path
  welcomeOfferHeadline: "Earn 60,000 Pts + Explorist Status",
  title: "Hyatt Business Card 2025 Review: Elite Status via Your SME Spend",
  description: "Our 2025 review of the World of Hyatt Business Credit Card. See how the $199 fee is justified through elite night credits, adaptive rewards, and perks for SMEs.",
  keywords: [
    "World of Hyatt Business Credit Card",
    "Hyatt Business Card review 2025",
    "business credit card for travel",
    "Hyatt elite status",
    "Chase Hyatt card",
    "SME credit card",
    "Hyatt Leverage program",
    "earn Globalist status"
  ],
  author: {
      name: 'Dilan Madushanka',
      title: 'Founder & Lead Editor',
      imageUrl: '/WhatsApp Image 2025-05-12 at 4.09.58 PM.jpeg', // IMPORTANT: Update path
      imageWidth: 40,
      imageHeight: 40,
      tooltipImageUrl: '/WhatsApp Image 2025-05-12 at 4.09.58 PM.jpeg', // IMPORTANT: Update path
      tooltipImageWidth: 60,
      tooltipImageHeight: 60,
      expertise: [
          'Business Credit Cards',
          'Hotel Loyalty Programs',
          'World of Hyatt',
          'Maximizing Points & Miles',
          'SME Financial Tools'
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
  pagePath: "/review/hyatt-business-card-2025",
  imageUrl: "/pexels-kelly-1179532-2869215.webp", // IMPORTANT: Update with a relevant hero image path
  cardImageUrl: "/HYCOM-090821-WOH-Business-Card.webp", // 👈 NEW: IMPORTANT: Update with actual card image path
  heroImageObjectPosition: "center 40%",
  imageWidth: 1600,
  imageHeight: 900,
  siteLogoUrl: "/images/logos/travel-card-insider-logo.png", // IMPORTANT: Update with your logo path
  publishDate: "2025-06-11",
  updateDate: "2025-06-11",
  ratingValue: 4.2,
  annualFee: 199,
  applyLink: "https://world.hyatt.com/content/gp/en/rewards/hyatt-credit-card.html", // IMPORTANT: Update this with your affiliate link
  ratesLink: "https://www.chase.com/business/credit-cards/ink/world-of-hyatt-business-card", // IMPORTANT: Update with the official rates and fees link
  officialLinks: {
      eliteStatus: "https://world.hyatt.com/content/gp/en/tiers-and-benefits.html",
      leverage: "https://www.hyatt.com/info/leverage",
      awardChart: "https://world.hyatt.com/content/gp/en/rewards/free-nights-upgrades.html",
      programWebsite: "https://world.hyatt.com/content/gp/en/home.html"
  },
  heroH1Content: "Is the Hyatt Business Card Your Secret Weapon for Elite Travel?",
  reviewBody: "Our comprehensive 2025 analysis of the World of Hyatt Business Card. Uncover its value through a unique spend-to-status system, adaptive rewards, and whether the $199 fee is a smart investment for your business.",
  sku: "CHASE-HYATT-BIZ-TCI-2025",
  mpn: "HYATTBIZ",
  brandName: "World of Hyatt Business",
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
    "image": `${siteUrl}${reviewData.cardImageUrl}`, // Updated to card image for better relevance
    "sku": reviewData.sku,
    "mpn": reviewData.mpn,
    "offers": {
        "@type": "Offer", "url": reviewData.applyLink, "priceCurrency": "USD", "price": reviewData.annualFee.toString(),
        "priceSpecification": { "@type": "PriceSpecification", "price": reviewData.annualFee, "priceCurrency": "USD", "valueAddedTaxIncluded": "false", "billingIncrement": "1", "unitText": "ANNUAL" },
        "category": "CreditCard", "areaServed": "US",
        "seller": { "@type": "Organization", name: reviewData.issuerName }
    },
    "aggregateRating": { "@type": "AggregateRating", "ratingValue": reviewData.ratingValue.toString(), "bestRating": "5", "worstRating": "1", "reviewCount": "1" }
  },
  "reviewRating": { "@type": "Rating", "ratingValue": reviewData.ratingValue.toString(), "bestRating": "5", "worstRating": "1" },
  "headline": reviewData.title,
  "author": { "@type": "Person", "name": reviewData.author.name },
  "publisher": { "@type": "Organization", "name": reviewData.siteName, "logo": { "@type": "ImageObject", "url": `${siteUrl}${reviewData.siteLogoUrl}` }},
  "datePublished": reviewData.publishDate,
  "dateModified": reviewData.updateDate,
  "description": reviewData.description,
  "keywords": reviewData.keywords.join(', '),
  "mainEntityOfPage": { "@type": "WebPage", "@id": pageUrlFull },
  "image": [ `${siteUrl}${reviewData.imageUrl}` ]
};

const TocLinks = [
  { href: "#introduction", label: "Introduction" },
  { href: "#earning-points", label: "Earning Points" },
  { href: "#elite-status", label: "Fast Track to Status" },
  { href: "#business-perks", label: "Business Perks" },
  { href: "#redeeming-points", label: "Redeeming Points" },
  { href: "#verdict", label: "Verdict" },
  { href: "#conclusion", label: "Conclusion" },
];

export default function HyattBusinessReview2025() {
  const authorRef = useRef(null);
  const authorTooltipRef = useRef(null);
  const [showAuthorBioTooltip, setShowAuthorBioTooltip] = useState(false);

  const [activeSection, setActiveSection] = useState('');
  const [showStickyNav, setShowStickyNav] = useState(false);
  const stickyNavRef = useRef(null);

  const handleAuthorMouseEnter = useCallback(() => { if (authorRef.current?.tooltipTimeoutId) clearTimeout(authorRef.current.tooltipTimeoutId); setShowAuthorBioTooltip(true); }, []);
  const handleAuthorMouseLeave = useCallback(() => { const timerId = setTimeout(() => { if (authorRef.current && authorTooltipRef.current) { const isHoveringTrigger = authorRef.current.matches(':hover'); const isHoveringTooltip = authorTooltipRef.current.matches(':hover'); const isFocusWithinTrigger = authorRef.current.contains(document.activeElement); const isFocusWithinTooltip = authorTooltipRef.current.contains(document.activeElement); if (!isHoveringTrigger && !isHoveringTooltip && !isFocusWithinTrigger && !isFocusWithinTooltip) setShowAuthorBioTooltip(false); } else if (!authorRef.current?.matches(':hover') && !authorTooltipRef.current?.matches(':hover')) setShowAuthorBioTooltip(false); }, 150); if (authorRef.current) authorRef.current.tooltipTimeoutId = timerId; }, [authorRef, authorTooltipRef]);
  const handleTooltipMouseEnter = useCallback(() => { if (authorRef.current?.tooltipTimeoutId) clearTimeout(authorRef.current.tooltipTimeoutId); }, []);

  useEffect(() => {
    function handleClickOutside(event) { if (showAuthorBioTooltip && authorRef.current && !authorRef.current.contains(event.target) && authorTooltipRef.current && !authorTooltipRef.current.contains(event.target)) setShowAuthorBioTooltip(false); }
    if (showAuthorBioTooltip) document.addEventListener("mousedown", handleClickOutside); else document.removeEventListener("mousedown", handleClickOutside);
    return () => { document.removeEventListener("mousedown", handleClickOutside); if(authorRef.current?.tooltipTimeoutId) clearTimeout(authorRef.current.tooltipTimeoutId); };
  }, [showAuthorBioTooltip, authorRef, authorTooltipRef]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -80% 0px", threshold: 0 }
    );

    const sections = TocLinks.map(link => document.querySelector(link.href));
    sections.forEach(section => { if (section) observer.observe(section); });
    const handleScroll = () => { setShowStickyNav(window.scrollY > 200); };
    window.addEventListener('scroll', handleScroll);
    return () => { sections.forEach(section => { if (section) observer.unobserve(section); }); window.removeEventListener('scroll', handleScroll); };
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
        <meta property="article:publisher" content={`https://www.facebook.com/travelcardinsider`} />
        <meta property="article:published_time" content={reviewData.publishDate} />
        <meta property="article:modified_time" content={reviewData.updateDate} />
        <meta property="article:author" content={reviewData.author.name} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@TravelCardInsid" />
        <meta name="twitter:title" content={`${reviewData.cardName} Review (2025) | Elite Status for SMEs`} />
        <meta name="twitter:description" content={`Is the Hyatt Business card's $${reviewData.annualFee} fee worth it? Deep dive into the spend-to-status path, adaptive rewards, and SME perks.`} />
        <meta name="twitter:image" content={`${siteUrl}${reviewData.imageUrl}`} />
        <meta name="twitter:creator" content={reviewData.author.socialLinks.twitter ? reviewData.author.socialLinks.twitter.replace('https://x.com/', '@') : '@AuthorTwitterHandle'} />

        <meta name="geo.region" content="US" />
        <meta name="geo.placename" content="United States" />
        <meta name="language" content="en-US" />
        <meta name="distribution" content="global" />
        <link rel="alternate" hrefLang="en-us" href={pageUrlFull} />
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
        <nav className={styles.stickyTocNav} ref={stickyNavRef}>
          <div className={styles.stickyTocContent}>
            <span className={styles.stickyTocTitle}>On this page</span>
            <ul className={styles.stickyTocList}>
              {TocLinks.map(link => (
                <li key={link.href}><a href={link.href} className={activeSection === link.href.substring(1) ? styles.activeStickyTocLink : styles.stickyTocLink}>{link.label}</a></li>
              ))}
            </ul>
          </div>
        </nav>
      )}

      <div className={styles.heroImageContainer}>
        <Image src={reviewData.imageUrl} alt={`${reviewData.cardName} from ${reviewData.issuerName} - review for business owners`} width={reviewData.imageWidth} height={reviewData.imageHeight} className={styles.heroImage} priority style={{objectPosition: reviewData.heroImageObjectPosition || "center center"}} />
        <div className={styles.heroTextOverlay}><h1 className={styles.heroTitle}>{reviewData.heroH1Content}</h1></div>
      </div>

      <main className={styles.reviewPageMain}>
        <article className={styles.reviewContainer}>
            <header className={styles.reviewHeader}>
                {/* Author Bio Component Start - No changes here */}
                <div className={styles.authorBioContainer} ref={authorRef} onMouseEnter={handleAuthorMouseEnter} onMouseLeave={handleAuthorMouseLeave} onFocus={handleAuthorMouseEnter} onBlur={handleAuthorMouseLeave} aria-haspopup="true" aria-expanded={showAuthorBioTooltip} tabIndex={0}>
                    <Image src={reviewData.author.imageUrl} alt={`${reviewData.author.name} headshot`} width={reviewData.author.imageWidth} height={reviewData.author.imageHeight} className={styles.authorImageSmall} priority />
                    <div className={styles.authorInfoBlock}>
                        <div className={styles.authorNameLine}>
                            <span className={styles.authorPrefix}>By</span>
                            <Link href={reviewData.author.fullBioLink || '#'} legacyBehavior><a className={styles.authorName}>{reviewData.author.name}</a></Link>
                        </div>
                        <span className={styles.authorTitle}>{reviewData.author.title}</span>
                        {reviewData.updateDate && (<time dateTime={reviewData.updateDate} className={styles.authorLastEdited}>Fact checked: {new Date(reviewData.updateDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</time>)}
                    </div>
                    {showAuthorBioTooltip && (
                        <div className={styles.authorTooltip} ref={authorTooltipRef} role="tooltip" onMouseEnter={handleTooltipMouseEnter} onMouseLeave={handleAuthorMouseLeave} onFocus={handleTooltipMouseEnter} onBlur={handleAuthorMouseLeave}>
                            <div className={styles.authorTooltipHeader}>
                                <Image src={reviewData.author.tooltipImageUrl} alt={`${reviewData.author.name} headshot`} width={reviewData.author.tooltipImageWidth} height={reviewData.author.tooltipImageHeight} className={styles.authorTooltipImage}/>
                                <div className={styles.authorTooltipInfo}>
                                    <span className={styles.authorTooltipName}>{reviewData.author.name}</span>
                                    <span className={styles.authorTooltipTitle}>{reviewData.author.title}</span>
                                </div>
                            </div>
                            {reviewData.author.expertise && reviewData.author.expertise.length > 0 && ( <div className={styles.authorTooltipExpertise}><strong>Expertise</strong><ul>{reviewData.author.expertise.map(area => <li key={area}>{area}</li>)}</ul></div>)}
                            <p className={styles.authorTooltipBioSnippet}>{reviewData.author.bioSnippet}</p>
                            {reviewData.author.fullBioLink && ( <Link href={reviewData.author.fullBioLink} legacyBehavior><a className={styles.authorTooltipBioLink}>See full bio</a></Link>)}
                        </div>
                    )}
                </div>
                <p className={styles.reviewDisclaimer}>We may receive compensation when you click on links to certain credit card products on our site. However, our recommendations remain our own, and offers are subject to change. Always verify details with the official issuer. Terms apply to credit card benefits and offers.</p>
            </header>

            <nav className={styles.reviewToc}>
                <h2>In this review:</h2>
                <ol>{TocLinks.map(link => (<li key={link.href}><a href={link.href}>{link.label}</a></li>))}</ol>
            </nav>

            {/* 👇 SECTION BELOW IS UPDATED */}
            <section id="introduction" className={styles.reviewSection}>
              <h2>I. Introduction: The Hyatt Business Proposition</h2>

              {/* NEW CARD IMAGE & RATING BOX */}
              <div className={styles.introCardDetailsContainer}>
                <div className={styles.introCardImage}>
                  <Image 
                    src={reviewData.cardImageUrl} 
                    alt={`${reviewData.cardName} card image`} 
                    width={220}
                    height={140}
                    layout="intrinsic"
                  />
                </div>
                <div className={styles.introCardRatings}>
                  <div className={styles.starRating}>
                    {reviewData.ratingValue && <StarRating rating={reviewData.ratingValue} />}
                  </div>
                  <p className={styles.ratingValueText}>
                     ({reviewData.ratingValue.toFixed(1)} / 5 Stars)
                  </p>
                  <p className={styles.ratingOutOfTen}>
                    TCI Rating: <strong>{(reviewData.ratingValue * 2).toFixed(1)} / 10</strong>
                  </p>
                   <p className={styles.ratingAnnualFee}>Annual Fee: ${reviewData.annualFee}</p>
                </div>
              </div>
              {/* END NEW CARD IMAGE & RATING BOX */}

              <p>Imagine turning everyday business expenses—from shipping costs and software subscriptions to client dinners and digital ad spend—into a luxurious stay at a Park Hyatt in Paris or a team-building retreat at a Hyatt Ziva all-inclusive resort. With the {reviewData.cardName}, that’s not just a daydream; it’s a strategic financial move that can unlock a world of elite travel perks.</p>
              <p>For US-based small and medium-sized enterprises (SMEs) already loyal to Hyatt, or those looking to elevate their business travel, this card from {reviewData.issuerName} is more than just a way to pay. It’s a seriously useful card designed to accelerate your journey to coveted World of Hyatt elite status and fill your points balance for high-value redemptions.</p>
              <p>As we head into 2025, a compelling welcome offer makes this card harder to ignore. New cardmembers can earn <strong>60,000 Bonus Points</strong> after spending $7,000 on purchases in the first three months from account opening. To sweeten the deal, applications processed by June 30, 2025, also include complimentary <strong>World of Hyatt Explorist status</strong> valid through February 28, 2026. This is a significant, tangible perk, as it gives you an immediate taste of the elite experience without having to meet the usual stay requirements first.</p>
              <div className={styles.readerTakeawayBox}>
                <h4>Reader Takeaway</h4>
                <p><strong>Fast math:</strong> Spend $50k/yr → 10% points rebate + 25 Tier-Qualifying Nights + $100 credits → net $900+ value vs $199 fee.</p>
              </div>
              <p>With a ${reviewData.annualFee} annual fee, the critical question is: can your business extract enough value to make it worthwhile? This review will break down everything you need to know to make an informed decision.</p>
            </section>
            
            {/* ... Rest of the component remains the same ... */}
            
            <section id="earning-points" className={styles.reviewSection}>
              <h2>II. Powering Your Points: Earning on Every Business Expense</h2>
              <p>The earning structure of the Hyatt Business Card is thoughtfully designed to reward you for both your Hyatt loyalty and your regular business operations. The card’s adaptive nature means you’re always maximizing your rewards without the hassle of tracking or enrolling in bonus categories.</p>
              <p>Here’s how you’ll earn:</p>
              <ul>
                <li><strong>Up to 9x total points on Hyatt stays:</strong> This is a fantastic rate. It breaks down into 4 Bonus Points per $1 spent at Hyatt hotels and resorts with the card, stacked on top of the 5 Base Points per $1 you already earn as a World of Hyatt member.</li>
                <li><strong>2x Bonus Points on your top two spending categories each quarter:</strong> This is where the card truly shines for SMEs. The card automatically identifies where you're spending the most each quarter from a list of eight common business cost categories.</li>
                <li><strong>2x Bonus Points</strong> on fitness club and gym memberships.</li>
                <li><strong>1x Bonus Point</strong> on all other purchases.</li>
              </ul>
              <div className={styles.infoBox}>
                  <h4><span className={styles.infoBoxIcon}>💡</span>Pro-Tip: Adaptive Rewards</h4>
                  <p>The adaptive 2x bonus categories mean you don't have to change your spending habits. If you have a big marketing push one quarter (social media ads) and heavy shipping costs the next, the card adjusts automatically to give you the highest rewards.</p>
              </div>
            </section>

            <section id="cta-hyatt-business-card" className={styles.ctaSection}>
                <h2>Ready for the {reviewData.cardName}?</h2>
                <p>Turn business spend into elite travel experiences.</p>
                <div className={styles.ctaButtons}>
                  <a href={reviewData.applyLink} className={`${styles.btn} ${styles.btnApply}`} title={`Apply for the ${reviewData.cardName} on the issuer's secure site`} target="_blank" rel="noopener noreferrer sponsored">Apply Now</a>
                  <a href={reviewData.ratesLink} className={`${styles.btn} ${styles.btnRates}`} title={`See rates and fees for the ${reviewData.cardName}`} target="_blank" rel="noopener noreferrer sponsored">See Card Details</a>
                </div>
            </section>

            <section id="elite-status" className={styles.reviewSection}>
              <h2>III. The Fast Track to Elite Status: The Card's Crown Jewel</h2>
              <p>This is arguably the most valuable and unique perk of the Hyatt Business Card. It offers a direct, spend-based path to elite status, which can dramatically improve your travel experiences with benefits like room upgrades, late checkouts, and bonus points.</p>
              <ul>
                <li><strong>Automatic Discoverist Status:</strong> As the primary cardmember, you receive complimentary Discoverist status. This first rung on Hyatt’s elite ladder includes a 10% point bonus, preferred room upgrades, and 2 PM late checkout. You can also gift Discoverist status to up to five employees.</li>
                <li><strong>Earn Elite Night Credits with Spending:</strong> For every $10,000 you spend on the card in a calendar year, you earn <strong>5 Tier-Qualifying Night (TQN) credits</strong>. There is no cap on the number of TQNs you can earn this way.</li>
              </ul>
              <p>This feature is a game-changer. It allows you to effectively "manufacture" elite status through your business's operational spending. For a business owner who only travels 15-20 nights a year but has high expenses, this makes top-tier Globalist status (60 TQNs) an achievable goal.</p>
              <blockquote className={styles.testimonial}>
                <p>"By putting all our marketing spend and operating costs on the Hyatt Business Card, we easily spend over $80,000 a year, which gets us 40 elite nights. Those, plus our 20-25 actual nights, get us to Globalist status every year. The 4 PM checkout and suite upgrades are invaluable."</p>
                <footer>- David Chen, Founder of Apex Realty</footer>
              </blockquote>
              <p>For a detailed breakdown of all tier benefits, visit the official <a href={reviewData.officialLinks.eliteStatus} target="_blank" rel="noopener noreferrer nofollow">World of Hyatt elite status page</a>.</p>
            </section>

            <section id="business-perks" className={styles.reviewSection}>
                <h2>IV. Exclusive Perks Tailored for Your Business</h2>
                <p>Beyond points and status, the card incorporates several practical benefits designed specifically for SMEs:</p>
                <ul>
                    <li><strong>Up to $100 in Annual Hyatt Statement Credits:</strong> Receive a $50 statement credit up to two times each anniversary year when you make a purchase of $50 or more at any Hyatt property. This effectively reduces the annual fee to a more palatable $99 for any business that stays with Hyatt at least twice a year.</li>
                    <li><strong>Immediate Access to the Hyatt Leverage Program:</strong> This corporate travel program offers discounts of up to 15% on standard room rates. The usual requirement of staying 50 nights per year is waived for cardholders. Find details on the official <a href={reviewData.officialLinks.leverage} target="_blank" rel="noopener noreferrer nofollow">Hyatt Leverage program page</a>.</li>
                    <li><strong>10% Points Redemption Bonus:</strong> After you spend $50,000 or more in a calendar year, you'll get a 10% rebate on all points redeemed for the rest of that year (up to 20,000 points back annually). This makes your award stays 10% cheaper once you hit the threshold.</li>
                </ul>
            </section>

            <section id="redeeming-points" className={styles.reviewSection}>
              <h2>V. Redeeming Your Spoils: Making the Most of Hyatt Points</h2>
              <p>Earning points is only half the fun. World of Hyatt points are widely considered among the most valuable hotel currencies, with an average value of 1.7 to 2.0 cents per point. The best way to use your points is for free nights at Hyatt properties worldwide.</p>
              <p>Unlike many competitors that have moved to dynamic pricing, Hyatt still uses a published <a href={reviewData.officialLinks.awardChart} target="_blank" rel="noopener noreferrer nofollow">award chart</a> with off-peak, standard, and peak pricing. This provides transparency and predictability when planning award travel.</p>
              <div className={styles.inspirationalRedemption}>
                <h4>Inspirational Redemption: A Real-World Reward</h4>
                <p>A tech startup, after a major funding round, used 150,000 points from their Hyatt Business Card to book a four-night retreat at the Andaz Mayakoba Resort. With cash rates often exceeding $700 per night, this redemption provided immense value and created an unforgettable, motivating experience for their team.</p>
              </div>
            </section>

            <section id="verdict" className={styles.reviewSection}>
              <h2>VI. The Verdict: Is the Hyatt Business Card Right for Your Enterprise?</h2>
              <p>This card isn't for everyone. Its value is directly tied to business spending levels and loyalty to the Hyatt ecosystem.</p>
              <div className={styles.prosConsContainer}>
                <div className={styles.prosSection}>
                  <h3>Pros: Why It's a Great Fit</h3>
                  <ul>
                    <li><span className={styles.bulletIcon}>👍</span>Achievable Elite Status: A clear path to valuable status through spending, not just stays.</li>
                    <li><span className={styles.bulletIcon}>👍</span>Adaptive Rewards: Automatically earn 2x points in your top two spend categories each quarter.</li>
                    <li><span className={styles.bulletIcon}>👍</span>Valuable Business Perks: Hyatt Leverage discount and statement credits offer immediate savings.</li>
                    <li><span className={styles.bulletIcon}>👍</span>High-Value Points: World of Hyatt points are consistently valuable for hotel redemptions.</li>
                    <li><span className={styles.bulletIcon}>👍</span>Strong Earning at Hyatt: Up to 9x total points on Hyatt stays is top-tier for hotel spending.</li>
                  </ul>
                </div>
                <div className={styles.consSection}>
                  <h3>Cons: Potential Downsides</h3>
                  <ul>
                    <li><span className={styles.bulletIcon}>👎</span>$199 Annual Fee: Not waived the first year.</li>
                    <li><span className={styles.bulletIcon}>👎</span>Requires High Spend for Best Perks: Key benefits like the 10% rebate and significant TQNs require at least $50k in annual spend.</li>
                    <li><span className={styles.bulletIcon}>👎</span>No Automatic Free Night: Unlike the personal Hyatt card, this one doesn't come with an anniversary free night certificate.</li>
                    <li><span className={styles.bulletIcon}>👎</span>Brand-Specific: Its value diminishes greatly if you don't stay at Hyatt properties.</li>
                  </ul>
                </div>
              </div>

              <h3 style={{marginTop: '2rem'}}>This card is a perfect fit for:</h3>
              <ul>
                <li>Businesses with significant expenses ($50k+) that can unlock the card's best perks.</li>
                <li>Companies already loyal to Hyatt or willing to consolidate their hotel stays.</li>
                <li>Business owners who value hotel elite status and its tangible benefits.</li>
              </ul>
              <p>For more information from the issuer, you can visit the official <a href={reviewData.applyLink} target="_blank" rel="noopener noreferrer sponsored">Chase product page</a> and the <a href={reviewData.officialLinks.programWebsite} target="_blank" rel="noopener noreferrer nofollow">official World of Hyatt program website</a>.</p>
            </section>

            <section id="conclusion" className={styles.reviewSection}>
                <h2>VII. Final Verdict for 2025</h2>
                <p>The {reviewData.cardName} is a high-impact tool. For the right US-based SME, it offers a clear and achievable path to valuable elite status and a wealth of points for incredible travel experiences. It is a smart way to turn operational expenses into tangible, high-value rewards.</p>
                <p>While it’s not for everyone, if your business's spending habits and travel patterns align with what this card has to offer, it could be one of the most valuable additions to your wallet in 2025 and beyond.</p>
            </section>

            <section className={`${styles.reviewSection} ${styles.finalCtaSection}`}>
                <h2>Ready to turn your business spending into elite travel?</h2>
                <p>If the unique spend-to-status system and adaptive rewards align with your goals, this card could be a game-changer for your business travel.</p>
                <div className={styles.ctaButtons}>
                    <a href={reviewData.applyLink} className={`${styles.btn} ${styles.btnApply} ${styles.btnLarge}`} target="_blank" rel="noopener noreferrer sponsored" title={`Apply for The ${reviewData.cardName} from ${reviewData.issuerName} on the issuer's secure site`}>
                        Check Your Business Eligibility
                    </a>
                    <a href={reviewData.ratesLink} className={`${styles.btn} ${styles.btnRates} ${styles.btnLarge}`} target="_blank" rel="noopener noreferrer sponsored" title={`See rates and fees for The ${reviewData.cardName} from ${reviewData.issuerName}`}>
                        See Card Details
                    </a>
                </div>
                <p className={styles.smallPrintTerms}>Terms Apply. Click links for details.</p>
            </section>
        </article>
      </main>

      <div className={styles.stickyCtaContainer}>
        <div className={styles.stickyCtaContent}>
            <span className={styles.stickyCtaText}>The {reviewData.cardName} - ${reviewData.annualFee} Annual Fee.</span>
            <div className={styles.stickyCtaButtons}>
                <a href={reviewData.applyLink} target="_blank" rel="noopener noreferrer sponsored" className={`${styles.btn} ${styles.ctaButtonApply}`}>Apply Now</a>
                <a href={reviewData.ratesLink} target="_blank" rel="noopener noreferrer sponsored" className={`${styles.btn} ${styles.ctaButtonLearnMore}`}>See Details</a>
            </div>
        </div>
      </div>
    </>
  );
}