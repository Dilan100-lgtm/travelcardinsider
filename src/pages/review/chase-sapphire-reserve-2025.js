// File: pages/review/chase-sapphire-reserve-2025.js
// IMPORTANT: Review and update all placeholders, especially siteUrl, image paths, affiliate links, author details, and site-specific info.
// ASSUMPTION: You have a StarRating component at '../../components/StarRating.js'

import React, { useState, useRef, useEffect, useCallback } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/reviews2025.module.css'; // Ensure this CSS module is in your styles folder
import StarRating from '../../components/StarRating'; // 👈 IMPORT THE PREMIUM STAR COMPONENT

// IMPORTANT: Update this to your actual site URL if different
const siteUrl = 'https://www.travelcardinsider.com';

const reviewDataNew = {
  cardName: "Chase Sapphire Reserve®",
  shortCardName: "Sapphire Reserve",
  issuerName: "Chase",
  issuerLogoUrl: "/images/issuer-logos/chase-logo.svg", // IMPORTANT: Update with actual Chase logo path
  welcomeOfferHeadline: "60,000 Bonus Points",
  title: "The 2025 Chase Sapphire Reserve Review: Navigating Value and Luxury",
  description: "Our definitive 2025 review of the Chase Sapphire Reserve. Explore its $550 annual fee, $300 travel credit, lounge access, point transfers, and whether it's the right premium card for you.",
  keywords: [
    "Chase Sapphire Reserve review 2025",
    "premium travel credit card",
    "Chase Ultimate Rewards",
    "$550 annual fee card",
    "airport lounge access",
    "travel insurance",
    "Sapphire Reserve benefits",
    "Chase travel portal"
  ],
  author: {
      name: 'Dilan Madushanka',
      title: 'Founder & Lead Editor',
      imageUrl: '/WhatsApp Image 2025-05-12 at 4.09.58 PM.jpeg', // Placeholder, update
      imageWidth: 40,
      imageHeight: 40,
      tooltipImageUrl: '/WhatsApp Image 2025-05-12 at 4.09.58 PM.jpeg', // Placeholder, update
      tooltipImageWidth: 60,
      tooltipImageHeight: 60,
      expertise: [
          'Premium Travel Cards',
          'Chase Ultimate Rewards',
          'Airline & Hotel Transfer Partners',
          'Maximizing Travel Credits',
          'Credit Card Strategy'
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
  pagePath: "/review/chase-sapphire-reserve-2025",
  imageUrl: "/reviews/chase-sapphire-reserve-hero.webp", // IMPORTANT: Update with actual hero image path
  cardImageUrl: "/cards/chase-sapphire-reserve.png", // IMPORTANT: Update with actual card face image path
  heroImageObjectPosition: "center 30%",
  imageWidth: 1600,
  imageHeight: 900,
  siteLogoUrl: "/images/logo.png", // IMPORTANT: Update with your site logo path
  publishDate: "2025-05-22",
  updateDate: "2025-06-05", // Current date or last review update
  ratingValue: 4.7, // Based on review tone: Strong card with future uncertainties
  annualFee: 550,
  applyLink: "https://creditcards.chase.com/rewards-credit-cards/sapphire/reserve", // Official Link
  
  // Specific links for Chase Sapphire Reserve
  officialCardPageLink: "https://creditcards.chase.com/rewards-credit-cards/sapphire/reserve",
  benefitsGuideLink: "https://www.chasecardbenefits.com/",
  ultimateRewardsPartnersLink: "https://www.chase.com/personal/credit-cards/ultimate-rewards",
  sapphireLoungeLink: "https://account.chase.com/sapphire-airport-lounge",
  dailyDropLink: "https://www.dailydrop.com/",
  priorityPassLink: "https://www.prioritypass.com/",
  ratesAndFeesLink: "https://creditcards.chase.com/rewards-credit-cards/sapphire/reserve", // Often same as apply link for details

  h1Content: "Chase Sapphire Reserve® Review (2025): Still the King of Premium Travel?",
  heroH1Content: "2025 Chase Sapphire Reserve®: Navigating the Crossroads of Value and Luxury",
  reviewBody: "This definitive, no-nonsense review cuts through the noise to show where the Chase Sapphire Reserve stands today, where it might be going, and who it’s truly for in 2025.",
  sku: "CHASE-SAPPHIRERESERVE-TCI-2025",
  mpn: "SAPPHIRERESERVE",
  brandName: "Chase Sapphire Reserve",
  credits: [
    { id: "travel", name: "$300 Annual Travel Credit", frequency: "Annual", details: "Automatic statement credit for nearly any travel purchase.", icon: "/icons/credit-travel.svg" }, // IMPORTANT: Update icon path
  ]
};

const pageUrlFull = `${siteUrl}${reviewDataNew.pagePath}`;

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Review",
  "itemReviewed": {
    "@type": "FinancialProduct",
    "name": reviewDataNew.cardName,
    "brand": { "@type": "Brand", "name": reviewDataNew.issuerName },
    "description": reviewDataNew.description,
    "image": `${siteUrl}${reviewDataNew.cardImageUrl}`,
    "sku": reviewDataNew.sku,
    "mpn": reviewDataNew.mpn,
    "offers": {
        "@type": "Offer",
        "url": reviewDataNew.applyLink,
        "priceCurrency": "USD",
        "price": reviewDataNew.annualFee.toString(),
        "priceSpecification": {
            "@type": "PriceSpecification",
            "price": reviewDataNew.annualFee,
            "priceCurrency": "USD",
            "valueAddedTaxIncluded": "false",
            "billingIncrement": "1",
            "unitText": "ANNUAL"
        },
        "category": "CreditCard",
        "areaServed": "US",
        "eligibleCustomerType": "https://schema.org/Person", // For Personal cards
        "seller": { "@type": "Organization", name: reviewDataNew.issuerName }
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": reviewDataNew.ratingValue.toString(),
      "bestRating": "5",
      "worstRating": "1",
      "reviewCount": "1"
    },
    "feesAndCommissionsSpecification": reviewDataNew.ratesAndFeesLink,
  },
  "reviewRating": {
    "@type": "Rating",
    "ratingValue": reviewDataNew.ratingValue.toString(),
    "bestRating": "5",
    "worstRating": "1"
  },
  "headline": reviewDataNew.title,
  "author": { "@type": "Person", "name": reviewDataNew.author.name },
  "publisher": {
    "@type": "Organization",
    "name": reviewDataNew.siteName,
    "logo": { "@type": "ImageObject", "url": `${siteUrl}${reviewDataNew.siteLogoUrl}` }
  },
  "datePublished": reviewDataNew.publishDate,
  "dateModified": reviewDataNew.updateDate,
  "description": reviewDataNew.description,
  "keywords": reviewDataNew.keywords.join(', '),
  "mainEntityOfPage": { "@type": "WebPage", "@id": pageUrlFull },
  "image": [`${siteUrl}${reviewDataNew.imageUrl}`]
};

const TocLinks = [
  { href: "#introduction", label: "Introduction" },
  { href: "#bedrock-benefits", label: "Today's Core Benefits" },
  { href: "#earning-redeeming", label: "Earning & Redeeming Points" },
  { href: "#lounge-spotlight", label: "Spotlight: Airport Lounges" },
  { href: "#refresh-rumors", label: "The '2025 Refresh' Rumors" },
  { href: "#real-world-value", label: "Real-World Value & Protections" },
  { href: "#verdict", label: "The Verdict for 2025" },
  { href: "#recommendations", label: "Final Recommendations" },
];

export default function ChaseSapphireReserveReview2025() {
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
    sections.forEach(section => {
      if (section) observer.observe(section);
    });

    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowStickyNav(true);
      } else {
        setShowStickyNav(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      sections.forEach(section => {
        if (section) observer.unobserve(section);
      });
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const formattedUpdateDate = new Date(reviewDataNew.updateDate).toLocaleDateString('en-US', { month: 'long', year: 'numeric' });

  return (
    <>
      <Head>
        <title>{reviewDataNew.title}</title>
        <meta name="description" content={reviewDataNew.description} />
        <meta name="keywords" content={reviewDataNew.keywords.join(', ')} />
        <meta name="author" content={reviewDataNew.author.name} />
        <meta name="robots" content="index,follow" />
        <link rel="canonical" href={pageUrlFull} />

        <meta property="og:type" content="article" />
        <meta property="og:title" content={reviewDataNew.title} />
        <meta property="og:description" content={reviewDataNew.description} />
        <meta property="og:url" content={pageUrlFull} />
        <meta property="og:image" content={`${siteUrl}${reviewDataNew.imageUrl}`} />
        <meta property="og:image:width" content={String(reviewDataNew.imageWidth)} />
        <meta property="og:image:height" content={String(reviewDataNew.imageHeight)} />
        <meta property="og:site_name" content={reviewDataNew.siteName} />
        <meta property="article:publisher" content={`https://www.facebook.com/yourtravelcardinsiderprofile`} /> 
        <meta property="article:published_time" content={reviewDataNew.publishDate} />
        <meta property="article:modified_time" content={reviewDataNew.updateDate} />
        <meta property="article:author" content={reviewDataNew.author.name} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@TravelCardInsid" /> 
        <meta name="twitter:title" content={`${reviewDataNew.cardName} Review (2025) | Is the $${reviewDataNew.annualFee} Fee Worth It?`} />
        <meta name="twitter:description" content={`Our ${reviewDataNew.shortCardName} review: $${reviewDataNew.annualFee} fee, $300 travel credit, lounge access, and "2025 Refresh" rumors.`} />
        <meta name="twitter:image" content={`${siteUrl}${reviewDataNew.imageUrl}`} />
        <meta name="twitter:creator" content={reviewDataNew.author.socialLinks.twitter ? reviewDataNew.author.socialLinks.twitter.replace('https://x.com/', '@') : '@DilanMadushanka'} />

        <meta name="geo.region" content="US" />
        <meta name="geo.placename" content="United States" />
        <meta name="language" content="en-US" />
        <meta name="distribution" content="global" />
        <link rel="alternate" hrefLang="en-us" href={pageUrlFull} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </Head>

      <div className={styles.trustSignalBar}>
        <div className={styles.trustSignalContent}>
          {reviewDataNew.issuerLogoUrl && (
            <Image src={reviewDataNew.issuerLogoUrl} alt={`${reviewDataNew.issuerName} logo`} width={24} height={24} className={styles.issuerLogoSmall} />
          )}
          <span>{reviewDataNew.shortCardName}</span>
          <span className={styles.trustSignalDivider}>·</span>
          <span>${reviewDataNew.annualFee} AF</span>
          <span className={styles.trustSignalDivider}>·</span>
          <span>{reviewDataNew.welcomeOfferHeadline}</span>
          <span className={styles.trustSignalBadge}>Updated {formattedUpdateDate}</span>
        </div>
      </div>

      {showStickyNav && (
        <nav className={styles.stickyTocNav} ref={stickyNavNavRef}>
          <div className={styles.stickyTocContent}>
            <span className={styles.stickyTocTitle}>On this page</span>
            <ul className={styles.stickyTocList}>
              {TocLinks.map(link => (
                <li key={link.href}>
                  <a href={link.href} className={activeSection === link.href.substring(1) ? styles.activeStickyTocLink : styles.stickyTocLink}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      )}

      <div className={styles.heroImageContainer}>
        <Image
          src={reviewDataNew.imageUrl}
          alt={`${reviewDataNew.cardName} - 2025 Review for US Travelers`}
          width={reviewDataNew.imageWidth}
          height={reviewDataNew.imageHeight}
          className={styles.heroImage}
          priority
          style={{ objectPosition: reviewDataNew.heroImageObjectPosition || "center center" }}
        />
        <div className={styles.heroTextOverlay}>
          <h1 className={styles.heroTitle}>{reviewDataNew.heroH1Content}</h1>
        </div>
      </div>

      <main className={styles.reviewPageMain}>
        <article className={styles.reviewContainer}>
          <header className={styles.reviewHeader}>
             <div
                className={styles.authorBioContainer}
                ref={authorRef}
                onMouseEnter={handleAuthorMouseEnter}
                onMouseLeave={handleAuthorMouseLeave}
                onFocus={handleAuthorMouseEnter}
                onBlur={handleAuthorMouseLeave}
                aria-haspopup="true"
                aria-expanded={showAuthorBioTooltip}
                tabIndex={0}
            >
                <Image src={reviewDataNew.author.imageUrl} alt={`${reviewDataNew.author.name} headshot`} width={reviewDataNew.author.imageWidth} height={reviewDataNew.author.imageHeight} className={styles.authorImageSmall} priority />
                <div className={styles.authorInfoBlock}>
                    <div className={styles.authorNameLine}>
                        <span className={styles.authorPrefix}>By</span>
                        <Link href={reviewDataNew.author.fullBioLink || '#'} legacyBehavior>
                          <a className={styles.authorName}>{reviewDataNew.author.name}</a>
                        </Link>
                    </div>
                    <span className={styles.authorTitle}>{reviewDataNew.author.title}</span>
                    {reviewDataNew.updateDate && (
                        <time dateTime={reviewDataNew.updateDate} className={styles.authorLastEdited}>
                            Fact checked: {new Date(reviewDataNew.updateDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                        </time>
                    )}
                </div>
                {showAuthorBioTooltip && (
                    <div className={styles.authorTooltip} ref={authorTooltipRef} role="tooltip" id="author-tooltip" onMouseEnter={handleTooltipMouseEnter} onMouseLeave={handleAuthorMouseLeave} onFocus={handleTooltipMouseEnter} onBlur={handleAuthorMouseLeave}>
                         <div className={styles.authorTooltipHeader}>
                             <Image src={reviewDataNew.author.tooltipImageUrl} alt={`${reviewDataNew.author.name} headshot`} width={reviewDataNew.author.tooltipImageWidth} height={reviewDataNew.author.tooltipImageHeight} className={styles.authorTooltipImage}/>
                             <div className={styles.authorTooltipInfo}>
                                 <span className={styles.authorTooltipName}>{reviewDataNew.author.name}</span>
                                 <span className={styles.authorTooltipTitle}>{reviewDataNew.author.title}</span>
                             </div>
                           </div>
                           {reviewDataNew.author.expertise && reviewDataNew.author.expertise.length > 0 && ( <div className={styles.authorTooltipExpertise}><strong>Expertise</strong><ul>{reviewDataNew.author.expertise.map(area => <li key={area}>{area}</li>)}</ul></div>)}
                           <p className={styles.authorTooltipBioSnippet}>{reviewDataNew.author.bioSnippet}</p>
                           {reviewDataNew.author.fullBioLink && ( <Link href={reviewDataNew.author.fullBioLink} legacyBehavior><a className={styles.authorTooltipBioLink}>See full bio</a></Link>)}
                    </div>
                )}
            </div>

            <p className={styles.reviewDisclaimer}>
              We may receive compensation when you click on links to certain credit card products
              on our site. However, our recommendations remain our own, and offers are subject to
              change. Always verify details with the official issuer. Terms apply to credit card benefits and offers.
            </p>
          </header>

          <nav className={styles.reviewToc}>
            <h2>In this review:</h2>
            <ol>
              {TocLinks.map(link => (
                <li key={link.href}><a href={link.href}>{link.label}</a></li>
              ))}
            </ol>
          </nav>

          <section id="introduction" className={styles.reviewSection}>
            <h2>I. Introduction: A Premium Card at a Crossroads</h2>
            
            <div className={styles.introCardDetailsContainer}>
              <div className={styles.introCardImage}>
                <Image 
                  src={reviewDataNew.cardImageUrl} 
                  alt={`${reviewDataNew.cardName} card image`} 
                  width={220}
                  height={140}
                  layout="intrinsic"
                />
              </div>
              <div className={styles.introCardRatings}>
                <div className={styles.starRating}>
                  {reviewDataNew.ratingValue && <StarRating rating={reviewDataNew.ratingValue} />}
                </div>
                <p className={styles.ratingValueText}>
                   ({reviewDataNew.ratingValue.toFixed(1)} / 5 Stars)
                </p>
                <p className={styles.ratingOutOfTen}>
                  TCI Rating: <strong>{(reviewDataNew.ratingValue * 2).toFixed(1)} / 10</strong>
                </p>
                 <p className={styles.ratingAnnualFee}>Annual Fee: ${reviewDataNew.annualFee}</p>
              </div>
            </div>

            <p>As your dedicated adviser at Travel Card Insider, I know that choosing a premium travel card is a major decision. For years, the {reviewDataNew.cardName} has been a top contender for serious U.S. travelers, a reliable tool for turning spending into extraordinary journeys. But the world of rewards is changing. As we move through 2025, whispers of a major "2025 Refresh" are growing louder, just as Chase unveils jaw-dropping new airport lounges. This signals a major shift is on the horizon. So, the critical question for you is this: Does the Sapphire Reserve still hold the crown? And is its potential future worth an even higher price? Let’s cut through the noise. This is the definitive, no-nonsense review of where the Chase Sapphire Reserve stands today, where it might be going, and who it’s truly for in 2025.</p>
          </section>

          <section id="bedrock-benefits" className={styles.reviewSection}>
            <h2>II. The Bedrock: What the Sapphire Reserve Delivers Today</h2>
            <p>Before we dive into rumors, let's focus on the confirmed, official benefits. Despite a ${reviewDataNew.annualFee} annual fee, the card’s value is refreshingly straightforward, which has always been its core strength. The first, and arguably best, perk is the $300 Annual Travel Credit. This is an easy-to-use, automatic statement credit that applies to nearly any travel purchase you make—flights, hotels, Ubers, even parking. For anyone spending at least $300 a year on travel, this effectively drops the annual fee’s real cost to a much more palatable $250. It’s the gold standard for simplicity. (See the <a href={reviewDataNew.officialCardPageLink} target="_blank" rel="noopener noreferrer sponsored">Official Chase Website</a> for details).</p>
          </section>

          <section id="cta-sapphire-reserve-1" className={styles.ctaSection}>
              <h2>Is the <b>{reviewDataNew.cardName}</b> Right for You?</h2>
              <p>Explore its powerful travel credits, bonus points, and premium perks.</p>
              <div className={styles.ctaButtons}>
                <a href={reviewDataNew.applyLink} className={`${styles.btn} ${styles.btnApply}`} title={`Apply for the ${reviewDataNew.cardName} on Chase's secure site`} target="_blank" rel="noopener noreferrer sponsored">Apply Now</a>
                <a href={reviewDataNew.ratesAndFeesLink} className={`${styles.btn} ${styles.btnRates}`} title={`See rates and fees for the ${reviewDataNew.cardName}`} target="_blank" rel="noopener noreferrer sponsored">See Rates & Fees</a>
              </div>
          </section>

          <section id="earning-redeeming" className={styles.reviewSection}>
            <h2>III. Earning and Redeeming Ultimate Rewards®</h2>
            <p>Of course, the heart of the card is earning valuable Ultimate Rewards points. Here’s the current earning structure:</p>
            <ul className={styles.featureList}>
                <li><strong>10x points</strong> on hotels and car rentals booked via the Chase Travel portal.</li>
                <li><strong>5x points</strong> on flights booked via the Chase Travel portal.</li>
                <li><strong>3x points</strong> on all other travel worldwide (after the $300 credit is used).</li>
                <li><strong>3x points</strong> on dining worldwide, including takeout.</li>
                <li><strong>1x point</strong> on everything else.</li>
            </ul>
            <p>Redeeming these points is where the magic happens. For simplicity, you can use them in the Chase Travel portal where they are worth a powerful 1.5 cents each. This means a 60,000-point sign-up bonus is worth a guaranteed $900 in travel. However, the path to truly outsized value is through Chase's 1:1 airline and hotel transfer partners. Moving points to programs like World of Hyatt, United MileagePlus, or Southwest Rapid Rewards can unlock luxury travel—like international business class flights—that would otherwise cost thousands. This flexibility is what makes the card so powerful. Explore the options on the <a href={reviewDataNew.ultimateRewardsPartnersLink} target="_blank" rel="noopener noreferrer">Chase Ultimate Rewards Partners Page</a>.</p>
          </section>

          <section id="lounge-spotlight" className={styles.reviewSection}>
            <h2>IV. Spotlight on LaGuardia: A New Standard in Airport Luxury</h2>
            <p>Chase isn't just tweaking a card; it's elevating the entire travel experience. Nowhere is this clearer than at New York's LaGuardia Airport (LGA). The Chase Sapphire Lounge by The Club in Terminal B is spectacular. As a Sapphire Reserve cardholder, you and two guests get complimentary access to this spacious, beautifully designed oasis. Inside, you'll find made-to-order meals, a craft cocktail bar, and even unique wellness amenities like private rest pods and complimentary 30-minute facials. It’s a genuine destination within the airport.</p>
             <blockquote className={styles.testimonialBlock}>
                <p>"Just made my first visit there the other day... and wow, extremely impressed with the food, drinks, ambiance and service. The staff was what really puts this lounge in a league of its own... Going to find any excuse to fly through LGA from now on."</p>
                <footer>- Reddit User Testimonial</footer>
            </blockquote>
            <p>For those seeking ultimate privacy, Chase also introduced The Reserve Suites—private, bookable suites within the lounge offering a dedicated host, caviar service, and an exclusive menu. With a price tag between $2,200 and $3,000 for three hours, this is an ultra-niche perk, but it signals Chase’s ambition to lead in the luxury space. For more information, visit the <a href={reviewDataNew.sapphireLoungeLink} target="_blank" rel="noopener noreferrer">Chase Sapphire Lounge Official Page</a>.</p>
          </section>
          
          <section id="refresh-rumors" className={styles.reviewSection}>
            <h2>V. The Word on the Street: Decoding the "2025 Refresh" Rumors</h2>
            <p><strong className={styles.disclaimerText}>Disclaimer: The following is based entirely on unconfirmed online speculation. Chase has not officially announced these changes.</strong></p>
            <p>Now, for the part that has the travel community buzzing. Rumors suggest the Sapphire Reserve is heading for a major overhaul. The most talked-about change is a potential annual fee hike to $795. To justify this, Chase would supposedly introduce a "coupon book" of new statement credits, potentially including credits for:</p>
            <ul className={styles.featureList}>
                <li>The Edit by Chase Travel (their luxury hotel program)</li>
                <li>A specific Chase Dining program</li>
                <li>StubHub</li>
                <li>DoorDash and Apple services</li>
            </ul>
            <p>If this happens, the card’s identity would shift. It would move from a card with broad, simple benefits to one requiring active management to maximize value from specific partners. This approach can be great if your spending aligns with the credits, but it can also be frustrating if you’re paying for perks you don’t use. It’s a move that could alienate some fans while attracting a new type of "maximizer."</p>
          </section>
          
          <section id="real-world-value" className={styles.reviewSection}>
            <h2>VI. Real-World Value & Why It Matters</h2>
            <p>Let's ground this in reality. The card’s true worth comes from its protections and practical value.</p>
            <ul className={styles.featureList}>
                <li><strong>Aspirational Travel:</strong> You save up 120,000 points. Through the portal, that's $1,800 for travel. But by transferring them to an airline partner, you snag a business class seat to Europe that was selling for $4,500. This is how you unlock next-level travel.</li>
                <li><strong>Peace of Mind:</strong> Your flight is cancelled, forcing an overnight stay. Instead of panicking about the cost, you remember you paid with your Sapphire Reserve. You keep your receipts, file a claim for Trip Delay Reimbursement, and get your money back for the hotel and meals. This insurance benefit is priceless when you need it. You can review all protections in the <a href={reviewDataNew.benefitsGuideLink} target="_blank" rel="noopener noreferrer">Chase Card Benefits Guide</a>.</li>
            </ul>
             <blockquote className={styles.testimonialBlock}>
                <p>"...this card also comes with a full Priority Pass airport lounge membership and excellent travel insurance, it's a great 'one-stop shop' for a credit card that does it all."</p>
                <footer>- Mike Dodge, DailyDrop (<a href={reviewDataNew.dailyDropLink} target="_blank" rel="noopener noreferrer">Source: DailyDrop Website</a>)</footer>
            </blockquote>
          </section>

          <section id="verdict" className={styles.reviewSection}>
            <h2>VII. The Verdict: Is the Sapphire Reserve Right for You in 2025?</h2>
            <p>The Chase Sapphire Reserve is at a fascinating crossroads. As it stands today, it remains one of the best all-around premium travel cards. The rumored refresh, with its higher fee and specific credits, seems targeted at the "lifestyle maximizer." This is someone whose spending naturally aligns with partners like DoorDash and StubHub, and who enjoys the challenge of tracking multiple benefits to squeeze every last drop of value from a high annual fee.</p>
          </section>

          <section id="recommendations" className={styles.reviewSection}>
            <h2>VIII. Final Recommendations: Making the Right Choice</h2>
            <div className={styles.prosConsContainer}>
              <div className={styles.prosSection}>
                <h3>Who the Current Card is For:</h3>
                <ul>
                  <li><span className={styles.bulletIcon}>👍</span>Travelers who value simplicity and flexibility.</li>
                  <li><span className={styles.bulletIcon}>👍</span>Those who will easily use the $300 travel credit.</li>
                  <li><span className={styles.bulletIcon}>👍</span>Point maximizers who use airline/hotel transfer partners.</li>
                  <li><span className={styles.bulletIcon}>👍</span>Frequent travelers wanting robust insurance and lounge access.</li>
                </ul>
              </div>
              <div className={styles.consSection}>
                <h3>Who a Refreshed Card Might Be For:</h3>
                <ul>
                  <li><span className={styles.bulletIcon}>🤔</span>"Lifestyle maximizers" whose spending aligns with specific partners (e.g., DoorDash, StubHub).</li>
                  <li><span className={styles.bulletIcon}>🤔</span>Users who enjoy tracking multiple benefits and credits.</li>
                  <li><span className={styles.bulletIcon}>🤔</span>Those who are not deterred by a potentially higher annual fee.</li>
                </ul>
              </div>
            </div>
             <p><strong>My Final Recommendation:</strong> Evaluate the card based on the outstanding benefits it officially offers right now. Do not act on rumors. If and when a refresh is announced, audit your own spending and ask honestly, "How many of these new credits will I actually use?" The "best" card is deeply personal. The Sapphire Reserve's current strength is its blend of power and simplicity. A potential shift towards a more complex, "coupon-book" model means you'll need to be sure that new model fits your lifestyle before committing.</p>
             <p>The Chase Sapphire Reserve is a phenomenal travel tool. In addition to Chase's own lounges, it includes access to over 1,300 lounges worldwide through its complimentary Priority Pass Select membership. You can learn more at the <a href={reviewDataNew.priorityPassLink} target="_blank" rel="noopener noreferrer">Priority Pass Official Website</a>. Whether its next chapter is a continuation of its straightforward value or a pivot into complex luxury, we at Travel Card Insider will be here to help you decide if it still deserves that prime spot in your wallet.</p>
          </section>

          <section className={`${styles.reviewSection} ${styles.finalCtaSection}`}>
            <h2>Ready to Add the {reviewDataNew.cardName} to Your Wallet?</h2>
            <p>If the straightforward travel credit, powerful points, and robust protections align with your travel style, this card remains a top contender.</p>
            <div className={styles.ctaButtons}>
              <a href={reviewDataNew.applyLink} className={`${styles.btn} ${styles.btnApply} ${styles.btnLarge}`} target="_blank" rel="noopener noreferrer sponsored" title={`Apply for The ${reviewDataNew.cardName} on Chase's secure site`}>
                Apply for the {reviewDataNew.shortCardName}
              </a>
              <a href={reviewDataNew.ratesAndFeesLink} className={`${styles.btn} ${styles.btnRates} ${styles.btnLarge}`} target="_blank" rel="noopener noreferrer sponsored" title={`See rates and fees for The ${reviewDataNew.cardName}`}>
                See Rates & Fees
              </a>
            </div>
            <p className={styles.smallPrintTerms}>Terms Apply. Click links for details. Always check the issuer's official website for the most current information, terms, and conditions.</p>
          </section>
        </article>
      </main>

      <div className={styles.stickyCtaContainer}>
        <div className={styles.stickyCtaContent}>
            <span className={styles.stickyCtaText}>{reviewDataNew.cardName} - ${reviewDataNew.annualFee} Annual Fee.</span>
            <div className={styles.stickyCtaButtons}>
                <a href={reviewDataNew.applyLink} target="_blank" rel="noopener noreferrer sponsored" className={`${styles.btn} ${styles.ctaButtonApply}`}>Apply Now</a>
                <a href={reviewDataNew.ratesAndFeesLink} target="_blank" rel="noopener noreferrer sponsored" className={`${styles.btn} ${styles.ctaButtonLearnMore}`}>See Rates & Fees</a>
            </div>
        </div>
      </div>
    </>
  );
}