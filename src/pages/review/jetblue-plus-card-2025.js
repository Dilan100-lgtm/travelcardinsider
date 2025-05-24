// File: pages/review/jetblue-plus-card-2025.js

import React, { useState, useRef, useEffect, useCallback } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/reviews2025.module.css'; // Ensure this path is correct

const siteUrl = 'https://www.travelcardinsider.com'; // Your actual site URL

const reviewDataNew = {
  cardName: "JetBlue Plus Card",
  shortCardName: "JetBlue Plus",
  issuerName: "Barclays",
  issuerLogoUrl: "/images/issuer-logo-barclays.svg", // IMPORTANT: Update with actual Barclays logo path
  welcomeOfferHeadline: "70,000 Bonus Pts", // Example: "70,000 bonus TrueBlue points after meeting spend"
  // SEO OPTIMIZATION: Refined title and description
  title: "JetBlue Plus Card Review (2025): $99 Fee, Perks & Is It Worth It?",
  description: "Is the JetBlue Plus Card ($99 fee) worth it in 2025? Our review covers its 6X points, free bags, Mosaic status, 5K anniversary bonus, and key travel benefits for JetBlue flyers.",
  // SEO OPTIMIZATION: Expanded keywords slightly
  keywords: [
    "JetBlue Plus Card review 2025",
    "JetBlue credit card",
    "Barclays airline card",
    "$99 annual fee card",
    "TrueBlue points",
    "Mosaic status",
    "JetBlue free checked bag",
    "travel rewards credit card US",
    "best airline credit card"
  ],
  author: { // Using the same author details as your example
      name: 'Dilan Madushanka',
      title: 'Founder & Lead Editor',
      imageUrl: '/WhatsApp Image 2025-05-12 at 4.09.58 PM.jpeg', // IMPORTANT: Update
      imageWidth: 40,
      imageHeight: 40,
      tooltipImageUrl: '/WhatsApp Image 2025-05-12 at 4.09.58 PM.jpeg', // IMPORTANT: Update
      tooltipImageWidth: 60,
      tooltipImageHeight: 60,
      expertise: [
          'Airline Co-brand Cards',
          'Travel Rewards Programs',
          'Loyalty Program Analysis',
          'Maximizing Point Redemptions',
          'Credit Card Benefits'
      ],
      bioSnippet: 'Dilan Madushanka is the founder and lead editor of TravelCardInsider.com, dedicated to demystifying credit cards and uncovering their real-world value for smarter travel.',
      fullBioLink: '/author/dilan-madushanka', // IMPORTANT: Update
      socialLinks: {
          linkedin: 'https://www.linkedin.com/in/dilan-madushanka-b65293365',
          twitter: 'https://x.com/team_dilan',
          email: 'team@travelcardinsider.com'
      }
  },
  siteName: "TravelCardInsider.com",
  pagePath: "/review/jetblue-plus-card-2025",
  imageUrl: "/brandon-karaca-zMPKX6Ws3Sc-unsplash.webp", // IMPORTANT: Update
  heroImageObjectPosition: "center center",
  imageWidth: 1600,
  imageHeight: 900,
  siteLogoUrl: "/images/logo.png", // IMPORTANT: Update
  publishDate: "2025-05-24",
  updateDate: "2025-05-24", // SEO: Keep updateDate current
  ratingValue: 4.3, // IMPORTANT: Set your own rating
  annualFee: 99,
  applyLink: "https://www.jetblue.com/trueblue/credit-cards/jetblue-card-comparison",
  ratesLink: "https://www.jetblue.com/trueblue/credit-cards/jetblue-card-comparison", // Users find "Rates & Fees" or "Terms" link here
  learnMoreLink: "/cards/jetblue-plus-card", // IMPORTANT: Create this page or adjust
  // SEO OPTIMIZATION: Ensured H1s are keyword-rich
  h1Content: "JetBlue Plus Card 2025: Full Review & Value Analysis",
  heroH1Content: "JetBlue Plus Card Review (2025): Is It Your Best Bet for JetBlue Travel?",
  // SEO OPTIMIZATION: Concise summary for reviewBody metadata
  reviewBody: "Our 2025 deep dive into the Barclays JetBlue Plus Card. For a $99 fee, does it deliver enough value with its points, free bags, and Mosaic perks for loyal JetBlue flyers?",
  sku: "BARCLAYS-JETBLUEPLUS-TCI-2025",
  mpn: "JETBLUEPLUSCARD",
  brandName: "JetBlue Plus Card",
  // CONTENT PRESERVATION: Original keyPerk details maintained
  keyPerks: [
    { id: "earning6x", name: "6X TrueBlue Points", details: "On eligible JetBlue purchases (flights, JetBlue Vacations, Paisly).", frequency: "Benefit" },
    { id: "earning2x", name: "2X TrueBlue Points", details: "At restaurants and eligible grocery stores.", frequency: "Benefit" },
    { id: "freeBag", name: "First Checked Bag Free", details: "For the primary cardmember and up to 3 companions on the same JetBlue reservation.", frequency: "Benefit" },
    { id: "anniversaryBonus", name: "5,000 Anniversary Points", details: "Receive 5,000 bonus TrueBlue points each year after your account anniversary.", frequency: "Annual" },
    { id: "vacationsCredit", name: "$100 Vacations Credit", details: "Annual $100 statement credit on JetBlue Vacations packages of $100+.", frequency: "Annual" },
    { id: "pointsRebate", name: "10% Points Back", details: "Get 10% of your points back when you redeem for JetBlue-operated award flights.", frequency: "Benefit" },
    { id: "mosaicPath", name: "Path to Mosaic Status", details: "Earn 1 Tile towards Mosaic status for every $1,000 spent.", frequency: "Benefit" },
    { id: "inflightSavings", name: "50% Inflight Savings", details: "On eligible inflight food and cocktail purchases on JetBlue flights.", frequency: "Benefit" },
    { id: "noFtF", name: "No Foreign Transaction Fees", details: "Make purchases abroad without incurring foreign transaction fees.", frequency: "Benefit" }
  ]
};

const pageUrlFull = `${siteUrl}${reviewDataNew.pagePath}`;

// VISUAL AIDS: Data structure for competitor comparison table (Content preserved from original list)
const competitorCardsData = [
  {
    id: "noFeeJetBlue",
    name: "No-Annual-Fee JetBlue Card",
    annualFee: "$0",
    keyFeaturesNotes: "Offers fewer points and crucially lacks the free checked bag benefit, the 5,000 anniversary points, the $100 Vacations credit, and the 10% points back on redemptions.",
    comparisonToJetBluePlus: "For anyone who checks bags even once or twice a year with a companion, or uses JetBlue Vacations, the Plus Card's $99 fee is easily recouped, making it the superior choice for most regular JetBlue flyers.",
    officialLinkText: "Compare on Barclays Site",
    officialLink: "https://www.jetbluecard.com/"
  },
  {
    id: "otherAirlineCards",
    name: "Other Mid-Tier Airline Cards (e.g., Delta SkyMiles Gold, United Explorer)",
    annualFee: "~$99-$150",
    keyFeaturesNotes: "Many competitor airline cards in this fee range also offer a free first checked bag and 2x earning on their respective airline.",
    comparisonToJetBluePlus: "The JetBlue Plus Card's 6x points on JetBlue purchases is typically higher. Furthermore, the combination of the 5,000 anniversary points AND the $100 JetBlue Vacations credit often provides a clearer path to offsetting the annual fee. The 10% points back on award redemptions is also a unique and valuable differentiator. Some competitors might offer perks like limited lounge passes or broader travel credits, which the JetBlue Plus Card lacks.",
    officialLinkText: null,
    officialLink: null
  },
  {
    id: "chaseSapphirePreferred",
    name: "Chase Sapphire Preferred®",
    annualFee: "$95",
    keyFeaturesNotes: "Offers points that can be transferred to multiple airline and hotel partners, including JetBlue TrueBlue (often 1:1). Boasts broad travel and dining bonus categories.",
    comparisonToJetBluePlus: "Lacks JetBlue-specific perks like the free checked bags on JetBlue, the 50% inflight discount, the $100 Vacations credit, or a direct path to Mosaic status. For a dedicated JetBlue flyer, the airline-specific benefits of the Plus Card often outweigh the transfer flexibility if JetBlue is consistently their airline of choice.",
    officialLinkText: "Official Chase Page",
    officialLink: "https://creditcards.chase.com/rewards-credit-cards/sapphire/preferred"
  }
];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Review",
  "itemReviewed": {
    "@type": "Product",
    "name": reviewDataNew.cardName,
    "brand": { "@type": "Brand", "name": reviewDataNew.issuerName },
    "description": reviewDataNew.description, // SEO: Uses updated description
    "image": `${siteUrl}${reviewDataNew.imageUrl}`,
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
        "seller": { "@type": "Organization", name: reviewDataNew.issuerName }
    },
    "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": reviewDataNew.ratingValue.toString(),
        "bestRating": "5",
        "worstRating": "1",
        "reviewCount": "1" // IMPORTANT: Update with actual number of reviews
    }
  },
  "reviewRating": {
    "@type": "Rating",
    "ratingValue": reviewDataNew.ratingValue.toString(),
    "bestRating": "5",
    "worstRating": "1"
  },
  "headline": reviewDataNew.title, // SEO: Uses updated title
  "author": { "@type": "Person", "name": reviewDataNew.author.name },
  "publisher": {
    "@type": "Organization",
    "name": reviewDataNew.siteName,
    "logo": { "@type": "ImageObject", "url": `${siteUrl}${reviewDataNew.siteLogoUrl}` }
  },
  "datePublished": reviewDataNew.publishDate,
  "dateModified": reviewDataNew.updateDate, // SEO: Important to keep current
  "description": reviewDataNew.description, // SEO: Uses updated description
  "keywords": reviewDataNew.keywords.join(', '),
  "mainEntityOfPage": { "@type": "WebPage", "@id": pageUrlFull },
  "image": [ `${siteUrl}${reviewDataNew.imageUrl}` ]
};

const TocLinks = [ // CONTENT PRESERVATION: Original TOC Links
  { href: "#introduction", label: "Introduction" },
  { href: "#core-features", label: "Core Features & Financials" },
  { href: "#earning-points", label: "Earning TrueBlue Points" },
  { href: "#travel-lifestyle-perks", label: "Key Travel & Lifestyle Perks" },
  { href: "#trueblue-program-mosaic", label: "Navigating TrueBlue & Mosaic" },
  { href: "#competitor-comparison", label: "Competitor Comparison" },
  { href: "#pros-cons", label: "Pros & Cons" },
  { href: "#verdict", label: "The Verdict" },
];

export default function JetBluePlusCardReview2025() {
  const authorRef = useRef(null);
  const authorTooltipRef = useRef(null);
  const [showAuthorBioTooltip, setShowAuthorBioTooltip] = useState(false);

  const [activeSection, setActiveSection] = useState('');
  const [showStickyNav, setShowStickyNav] = useState(false);
  const stickyNavRef = useRef(null);

  // Author tooltip handlers (copied from your example)
  const handleAuthorMouseEnter = useCallback(() => { if (authorRef.current?.tooltipTimeoutId) clearTimeout(authorRef.current.tooltipTimeoutId); setShowAuthorBioTooltip(true); }, []);
  const handleAuthorMouseLeave = useCallback(() => { const timerId = setTimeout(() => { if (authorRef.current && authorTooltipRef.current) { const isHoveringTrigger = authorRef.current.matches(':hover'); const isHoveringTooltip = authorTooltipRef.current.matches(':hover'); const isFocusWithinTrigger = authorRef.current.contains(document.activeElement); const isFocusWithinTooltip = authorTooltipRef.current.contains(document.activeElement); if (!isHoveringTrigger && !isHoveringTooltip && !isFocusWithinTrigger && !isFocusWithinTooltip) setShowAuthorBioTooltip(false); } else if (!authorRef.current?.matches(':hover') && !authorTooltipRef.current?.matches(':hover')) setShowAuthorBioTooltip(false); }, 150); if (authorRef.current) authorRef.current.tooltipTimeoutId = timerId; }, [authorRef, authorTooltipRef]);
  const handleTooltipMouseEnter = useCallback(() => { if (authorRef.current?.tooltipTimeoutId) clearTimeout(authorRef.current.tooltipTimeoutId); }, []);

  useEffect(() => {
    function handleClickOutside(event) { if (showAuthorBioTooltip && authorRef.current && !authorRef.current.contains(event.target) && authorTooltipRef.current && !authorTooltipRef.current.contains(event.target)) setShowAuthorBioTooltip(false); }
    if (showAuthorBioTooltip) document.addEventListener("mousedown", handleClickOutside); else document.removeEventListener("mousedown", handleClickOutside);
    return () => { document.removeEventListener("mousedown", handleClickOutside); if(authorRef.current?.tooltipTimeoutId) clearTimeout(authorRef.current.tooltipTimeoutId); };
  }, [showAuthorBioTooltip, authorRef, authorTooltipRef]);
  
  // Sticky Nav and TOC Active Section handlers (copied from your example)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -80% 0px", threshold: 0.1 }
    );

    const sections = TocLinks.map(link => document.getElementById(link.href.substring(1)));
    sections.forEach(section => {
      if (section) observer.observe(section);
    });

    const handleScroll = () => {
      const heroImageEl = document.querySelector(`.${styles.heroImageContainer}`);
      const heroImageHeight = heroImageEl ? heroImageEl.offsetHeight : 400;
      if (window.scrollY > heroImageHeight * 0.8) {
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
        <meta property="article:publisher" content={`https://www.facebook.com/yourtravelcardinsiderprofile`} /> {/* IMPORTANT: Update */}
        <meta property="article:published_time" content={reviewDataNew.publishDate} />
        <meta property="article:modified_time" content={reviewDataNew.updateDate} />
        <meta property="article:author" content={reviewDataNew.author.name} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@TravelCardInsid" />  {/* IMPORTANT: Update */}
        {/* SEO OPTIMIZATION: More engaging Twitter title & description */}
        <meta name="twitter:title" content={`${reviewDataNew.cardName} (2025): Is the $${reviewDataNew.annualFee} Fee Justified?`} />
        <meta name="twitter:description" content={`JetBlue Plus Card deep dive: 6X points, free bags, $100 credit & Mosaic. Our ${new Date(reviewDataNew.publishDate).getFullYear()} verdict on this $${reviewDataNew.annualFee} airline card.`} />
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
        <nav className={styles.stickyTocNav} ref={stickyNavRef}>
          <div className={styles.stickyTocContent}>
            <span className={styles.stickyTocTitle}>On this page: {reviewDataNew.shortCardName}</span>
            <ul className={styles.stickyTocList}>
              {TocLinks.map(link => (
                <li key={link.href}>
                  <a href={link.href} className={activeSection === link.href.substring(1) ? styles.activeStickyTocLink : styles.stickyTocLink}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
             <a href={reviewDataNew.applyLink} target="_blank" rel="noopener noreferrer sponsored" className={`${styles.stickyTocApplyBtn}`}>Apply Now</a>
          </div>
        </nav>
      )}

      <div className={styles.heroImageContainer}>
        <Image
          src={reviewDataNew.imageUrl}
          alt={`${reviewDataNew.cardName} from ${reviewDataNew.issuerName} - benefits and rewards review 2025`} // SEO: Alt text
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
                    {reviewDataNew.author.socialLinks && (
                        <div className={styles.authorSocialLinks}>
                            {reviewDataNew.author.socialLinks.linkedin && ( <a href={reviewDataNew.author.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`${reviewDataNew.author.name} on LinkedIn`} className={styles.socialIconLink}><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg></a>)}
                            {reviewDataNew.author.socialLinks.twitter && ( <a href={reviewDataNew.author.socialLinks.twitter} target="_blank" rel="noopener noreferrer" aria-label={`${reviewDataNew.author.name} on Twitter`} className={styles.socialIconLink}><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-.422.724-.665 1.56-.665 2.452 0 1.697.864 3.198 2.18 4.078-.8-.025-1.555-.247-2.227-.616v.054c0 2.37 1.683 4.333 3.91 4.78-.426.116-.874.174-1.337.174-.31 0-.611-.03-.904-.085.622 1.936 2.421 3.338 4.553 3.377-1.672 1.309-3.781 2.088-6.072 2.088-.394 0-.784-.023-1.169-.069 2.16 1.389 4.723 2.202 7.482 2.202 8.979 0 13.897-7.446 13.897-13.898 0-.21 0-.42-.015-.63.953-.689 1.778-1.56 2.433-2.525z"/></svg></a>)}
                            {reviewDataNew.author.socialLinks.email && ( <a href={`mailto:${reviewDataNew.author.socialLinks.email}`} aria-label={`Email ${reviewDataNew.author.name}`} className={styles.socialIconLink}><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"/></svg></a>)}
                        </div>
                    )}
                </div>
                {showAuthorBioTooltip && (
                    <div className={styles.authorTooltip} ref={authorTooltipRef} role="tooltip" onMouseEnter={handleTooltipMouseEnter} onMouseLeave={handleAuthorMouseLeave} onFocus={handleTooltipMouseEnter} onBlur={handleAuthorMouseLeave}>
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
                           {reviewDataNew.author.socialLinks && ( <div className={styles.authorTooltipSocials}>
                                {/* ... social icons ... */}
                           </div>)}
                    </div>
                )}
            </div>
            <p className={styles.reviewDisclaimer}>
              We may receive compensation when you click on links to certain credit card products
              on our site. Our recommendations are based on our independent research and analysis.
              Offers are subject to change and may have changed since the time of publication.
              Please verify all terms and conditions with the issuer. Terms apply to credit card benefits and offers.
              Enrollment may be required for select benefits.
            </p>
          </header>

          <nav className={styles.reviewToc}>
            <h2>In this {reviewDataNew.shortCardName} review:</h2>
            <ol>
              {TocLinks.map(link => (
                <li key={link.href}><a href={link.href}>{link.label}</a></li>
              ))}
            </ol>
          </nav>

          {/* CONTENT PRESERVATION: Prose and structure below matches the original full JS file */}
          <section id="introduction" className={styles.reviewSection}>
            <h2>I. Introduction: The {reviewDataNew.cardName} in 2025</h2>
            <p>JetBlue has carved out a unique space in the U.S. airline market, praised for its customer-centric service and comfortable cabin experiences. For travelers frequently flying JetBlue, their co-branded credit cards, especially the {reviewDataNew.cardName} from {reviewDataNew.issuerName}, have long been a popular way to enhance journeys and maximize rewards. But as the TrueBlue loyalty program continues to evolve and the travel rewards landscape shifts in 2025, is this mid-tier card still the undisputed champion for JetBlue enthusiasts?</p>
            <p>This isn't just a rundown of features; at TravelCardInsider, we go deeper. We'll meticulously analyze the 2025 iteration of the {reviewDataNew.cardName}, its ${reviewDataNew.annualFee} annual fee, the real value of its acclaimed benefits like free checked bags and 6x points, its pathway to Mosaic status, and how it stacks up in a competitive market. Let’s determine if this card truly takes off for the savvy U.S. traveler.</p>
          </section>

          <section id="core-features" className={styles.reviewSection}>
            <h2>II. {reviewDataNew.cardName}: Core Features & Financials Unpacked</h2>
            <p>Understanding the fundamentals—the upfront value, ongoing costs, and how you rack up points—is key to assessing any travel card.</p>
            <h3>Annual Fee & Welcome Offer:</h3>
            <p>The {reviewDataNew.cardName} comes with a ${reviewDataNew.annualFee} annual fee, positioning it squarely in the mid-tier airline card category. New cardmembers are often greeted with a substantial welcome offer, for instance, {reviewDataNew.welcomeOfferHeadline} after meeting an initial spending requirement (e.g., $1,000 in purchases) and paying the annual fee within the first 90 days. Always check the current offer details and terms directly with {reviewDataNew.issuerName} on the <a href={reviewDataNew.applyLink} target="_blank" rel="noopener noreferrer sponsored">official {reviewDataNew.cardName} page</a>.</p>
            <p>
              What are these points worth? While {reviewDataNew.issuerName} and JetBlue do not assign a fixed cash value to TrueBlue points (see details on the <a href="https://www.jetblue.com/trueblue/using-points" target="_blank" rel="noopener noreferrer">official TrueBlue redemption page</a>), reputable third-party sources typically value TrueBlue points around 1.3 to 1.5 cents each. This means a 70,000-point bonus could translate to $910 to $1,050 in travel value – a significant initial return that can cover the annual fee many times over in the first year.
            </p>
            <h3>Interest Rates & Other Financials:</h3>
            <p>
              The card features a variable Annual Percentage Rate (APR) for purchases, typically ranging from around 20% to 30%, based on creditworthiness. You can find the current APRs and other terms by visiting the <a href={reviewDataNew.ratesLink} target="_blank" rel="noopener noreferrer sponsored">official {reviewDataNew.cardName} page</a> and navigating to the 'Rates and Fees' or 'Terms & Conditions' section. It may also offer a 0% introductory APR on balance transfers for a limited time after account opening. However, carrying a balance on purchases at the standard APRs can quickly negate the value of rewards earned. We always advise paying your balance in full each month.
            </p>
            <p>The {reviewDataNew.cardName} aims to be a primary card for those deeply invested in flying JetBlue, offering robust earnings where it counts most for them.</p>
          </section>
          
          <section id="cta-jetblue-plus-1" className={styles.ctaSection}>
              <h2>Considering the <b>{reviewDataNew.cardName}</b>?</h2>
              <p>Unlock substantial TrueBlue points, free checked bags, and valuable travel credits with JetBlue's premium card.</p>
              <div className={styles.ctaButtons}>
                <a href={reviewDataNew.applyLink} className={`${styles.btn} ${styles.btnApply}`} title={`Apply for the ${reviewDataNew.cardName} on ${reviewDataNew.issuerName}'s secure site`} target="_blank" rel="noopener noreferrer sponsored">Apply Now</a>
                <a href={reviewDataNew.ratesLink} className={`${styles.btn} ${styles.btnRates}`} title={`See rates and fees for the ${reviewDataNew.cardName}`} target="_blank" rel="noopener noreferrer sponsored">See Rates & Fees</a>
              </div>
          </section>

          <section id="earning-points" className={styles.reviewSection}>
            <h2>III. Earning TrueBlue Points: The Power of 6x</h2>
            <p>The card's earning structure is heavily skewed towards rewarding your spending within the JetBlue ecosystem:</p>
            <ul>
              <li><strong>6X POINTS:</strong> On eligible JetBlue purchases. This includes flights booked directly with JetBlue and purchases made through JetBlue Vacations and JetBlue's Paisly travel portal (for cars, stays, etc.). This is a highly competitive earning rate for airline-specific spend. For more on Paisly, visit the <a href="https://www.paisly.com/" target="_blank" rel="noopener noreferrer">official Paisly website</a>.</li>
              <li><strong>2X POINTS:</strong> At restaurants (including takeout and eligible delivery services) and eligible grocery stores. This adds solid everyday value.</li>
              <li><strong>1X POINTS:</strong> On all other purchases.</li>
            </ul>
            <p>A critical detail: TrueBlue points earned with the card do not expire as long as your TrueBlue account remains open, allowing for stress-free accumulation. (See <a href="https://www.jetblue.com/trueblue" target="_blank" rel="noopener noreferrer">TrueBlue Program Details</a>).</p>
          </section>

          {/* CONTENT PRESERVATION: Original structure for displaying Key Perks */}
          <section id="travel-lifestyle-perks" className={styles.reviewSection}>
            <h2>IV. Key Travel & Lifestyle Perks: More Than Just Points?</h2>
            <p>Beyond the points, the {reviewDataNew.cardName} packs a suite of benefits that provide tangible value and enhance your travel experience (enrollment may be required for some benefits):</p>
             <div className={styles.creditGrid}> {/* Assuming creditGrid is styled to show these as cards/distinct blocks */}
              {reviewDataNew.keyPerks.filter(perk => ["anniversaryBonus", "vacationsCredit", "inflightSavings", "noFtF"].includes(perk.id)).map(perk => (
                <div key={perk.id} className={styles.creditCard}>
                  <div className={styles.creditCardHeader}>
                    <h5 className={styles.creditName}>{perk.name}</h5>
                    {perk.frequency && (
                      <span className={`${styles.creditPill} ${styles['pill' + perk.frequency.replace(/\s+/g, '')]}`}>
                        {perk.frequency}
                      </span>
                    )}
                  </div>
                  <p className={styles.creditDetails}>{perk.details}</p>
                </div>
              ))}
            </div>
            <h3 style={{marginTop: '1.5rem'}}>First Checked Bag Free – A Core Saver:</h3>
            <p>
              This is a standout benefit. The primary cardmember and up to three companions on the same reservation get their first checked bag free on all JetBlue-operated flights. With JetBlue's first checked bag fees typically ranging from $35-$45 per bag each way domestically (and potentially more for last-minute or peak travel - see <a href="https://www.jetblue.com/legal/fees" target="_blank" rel="noopener noreferrer">JetBlue's official baggage fee page</a>), a family of four could save $280-$360 on a single round-trip. This perk alone can justify the ${reviewDataNew.annualFee} annual fee after just one or two trips.
            </p>
            <h3 style={{marginTop: '1.5rem'}}>Points Payback & Pooling:</h3>
            <p>
              The card offers flexibility with "Points Payback," allowing redemption of TrueBlue points for statement credits (though typically at a lower value than flights). You can also pool points with up to seven friends and family members, making it easier to reach award thresholds. For pooling rules, check the <a href="https://www.jetblue.com/trueblue/points-pooling" target="_blank" rel="noopener noreferrer">TrueBlue Points Pooling details</a>.
            </p>
            <p>These combined benefits create a strong value proposition, especially for regular JetBlue flyers who can maximize the bag fee waivers and statement credits.</p>
          </section>

          <section id="trueblue-program-mosaic" className={styles.reviewSection}>
            <h2>V. Navigating the TrueBlue Program & Mosaic Status with Your Card</h2>
            <p>The {reviewDataNew.cardName} is your key to unlocking more from the TrueBlue loyalty program, including a faster path to Mosaic elite status.</p>
            <h3>TrueBlue Point Value & Redemption:</h3>
            <p>As mentioned, TrueBlue points are revenue-based, meaning the number of points needed for an award flight is tied to the current cash price – no traditional award charts or blackout dates on JetBlue flights. This offers simplicity. For official details on using your points, visit <a href="https://www.jetblue.com/trueblue/using-points" target="_blank" rel="noopener noreferrer">JetBlue's guide to using TrueBlue points</a>.</p>
            <p><strong>10% Points Back:</strong> A fantastic cardholder perk! When you redeem TrueBlue points for a JetBlue-operated award flight and complete the travel, you receive 10% of the redeemed points back into your account. This effectively makes your points more valuable for JetBlue flights.</p>
            <p><strong>Cash + Points:</strong> Offers flexibility by allowing bookings with as few as 500 TrueBlue points, with the remainder paid in cash.</p>
            <h3>Accelerated Path to Mosaic Elite Status:</h3>
            <p>The {reviewDataNew.cardName} helps you earn "Tiles" towards TrueBlue's four-tiered Mosaic elite status. Cardmembers earn 1 Tile for every $1,000 in qualifying spend on their card. This complements tiles earned from flying.</p>
            <p>Mosaic Tiers (2025): Mosaic 1 (50 tiles), Mosaic 2 (100), Mosaic 3 (150), Mosaic 4 (250). Key Mosaic Benefits vary by tier but generally include free first two checked bags, priority boarding/security, complimentary alcoholic beverages, and more. For the latest benefits, visit the <a href="https://www.jetblue.com/trueblue/mosaic" target="_blank" rel="noopener noreferrer">official JetBlue Mosaic benefits page</a>.</p>
            <p><strong>$99 Mosaic 1 Statement Credit Perk:</strong> Crucially, upon reaching Mosaic 1, one of the "Perks You Pick" options is a $99 statement credit applicable to your {reviewDataNew.cardName} or JetBlue Business Card annual fee. If chosen, this makes the card effectively free for that qualifying year.</p>
            <p>While achieving Mosaic solely through card spend is a high bar ($50,000 for Mosaic 1), the card undeniably accelerates progress for those who combine flying with significant card usage. However, be aware of the 2025 changes that reduce some Mosaic benefits on JetBlue's most basic fare (Blue Basic), which might affect the perceived value for some budget-conscious elite members.</p>
            <p>The card’s integration with TrueBlue, especially the points rebate and Mosaic tile earning, are significant draws for those committed to the JetBlue ecosystem.</p>
          </section>

          {/* VISUAL AID UPGRADE: Using structured data for competitor comparison */}
          <section id="competitor-comparison" className={styles.reviewSection}>
            <h2>VI. {reviewDataNew.cardName} vs. Key Competitors in 2025</h2>
            <p>How does the {reviewDataNew.cardName} hold its own against other travel rewards cards?</p>
            <div className={styles.comparisonTableContainer}>
              {/* VISUAL AIDS SUGGESTION: 
                You would ideally style the .comparisonTableContainer and .competitorRow 
                elements with CSS to look like a table or distinct comparison cards. 
                This structure provides the data in a way that's easy to style.
              */}
              {competitorCardsData.map(card => (
                <div key={card.id} className={styles.competitorRow}>
                  <h4 className={styles.competitorName}>Vs. {card.name} ({card.annualFee} fee)</h4>
                  <p><strong>Key Features/Notes:</strong> {card.keyFeaturesNotes}</p>
                  <p><strong>Comparison to {reviewDataNew.shortCardName}:</strong> {card.comparisonToJetBluePlus}
                    {card.officialLink && (
                      <> <a href={card.officialLink} target="_blank" rel="noopener noreferrer sponsored">{card.officialLinkText || "Official Details"}</a></>
                    )}
                  </p>
                </div>
              ))}
            </div>
            <p style={{marginTop: '1rem'}}>The best card depends on your loyalty. If JetBlue is your primary airline, the Plus Card is built to reward that loyalty directly and substantially.</p>
          </section>

          <section id="pros-cons" className={styles.reviewSection}>
            <h2>VII. The Final Tally: {reviewDataNew.cardName} Pros & Cons</h2>
            <div className={styles.prosConsContainer}>
              <div className={styles.prosSection}>
                <h3>Pros: Why It Takes Off</h3>
                <ul>
                  <li><span className={styles.bulletIcon}>👍</span>High Value Welcome Offer: Often provides immediate travel value far exceeding the annual fee.</li>
                  <li><span className={styles.bulletIcon}>👍</span>Exceptional 6x Points on JetBlue: Supercharges earnings within the JetBlue ecosystem.</li>
                  <li><span className={styles.bulletIcon}>👍</span>Free First Checked Bag (Self + 3 Companions): A massive money-saver.</li>
                  <li><span className={styles.bulletIcon}>👍</span>$100 JetBlue Vacations Credit & 5,000 Anniversary Points: These two perks alone can make the card "profitable" annually.</li>
                  <li><span className={styles.bulletIcon}>👍</span>10% Points Back on Award Redemptions: Stretches TrueBlue point value significantly.</li>
                  <li><span className={styles.bulletIcon}>👍</span>Accelerated Path to Mosaic Status & Potential $99 Annual Fee Credit.</li>
                  <li><span className={styles.bulletIcon}>👍</span>50% Inflight Savings & No Foreign Transaction Fees: Nice additional comforts and savings.</li>
                </ul>
              </div>
              <div className={styles.consSection}>
                <h3>Cons: Potential Turbulence</h3>
                <ul>
                  <li><span className={styles.bulletIcon}>👎</span>$99 Annual Fee: Not waived the first year; benefits must be used.</li>
                  <li><span className={styles.bulletIcon}>👎</span>JetBlue-Centricity: Value diminishes if not primarily flying JetBlue.</li>
                  <li><span className={styles.bulletIcon}>👎</span>Paisly Portal Caveat: While Paisly purchases earn 6x, always compare prices. For Paisly help, see <a href="https://www.paisly.com/shop/why-paisly/helpful-humans/" target="_blank" rel="noopener noreferrer">Paisly's support page</a>.</li>
                  <li><span className={styles.bulletIcon}>👎</span>Mosaic on Blue Basic Changes: Reduced benefits on Blue Basic fares from 2025 for Mosaic members.</li>
                  <li><span className={styles.bulletIcon}>👎</span>No Luxury Travel Perks: Lacks airport lounge access or premium travel credits of higher-fee cards.</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="verdict" className={styles.reviewSection}>
            <h2>VIII. The travelcardinsider Verdict for 2025: Who Should Get the {reviewDataNew.cardName}?</h2>
            <p>So, is the {reviewDataNew.cardName} your best bet for smarter JetBlue travel in 2025? If you're an infrequent traveler, hop between many airlines, or prioritize ultimate redemption flexibility across various programs above all else, this probably isn't your primary card. Its strength lies in its deep integration with JetBlue.</p>
            <h3>Who Should Seriously Consider This Card:</h3>
            <ul>
              <li><strong>The JetBlue Loyalist Family/Group Traveler:</strong> If you fly JetBlue multiple times a year and regularly check bags for yourself and companions, the math is overwhelmingly in favor.</li>
              <li><strong>The JetBlue Vacations Enthusiast:</strong> If you book at least one JetBlue Vacations package annually, the $100 statement credit combined with the 5,000 anniversary points effectively pays you to hold the card.</li>
              <li><strong>The Aspiring (or Current) Mosaic Member:</strong> If you value JetBlue elite status, the card's tile-earning capability provides a significant boost, and the potential $99 annual fee credit at Mosaic 1 is a game-changer.</li>
              <li><strong>The Value-Conscious Points Optimizer:</strong> If you appreciate straightforward ways to extract strong value within a specific airline program (like the 6x earning, 10% points back, and anniversary bonus), this card delivers clear returns.</li>
            </ul>
            <h3>Who Might Want to Explore Other Options:</h3>
            <ul>
              <li><strong>The Airline-Agnostic Traveler:</strong> If you don't have a strong preference for JetBlue and want points that can be used across a wider range of airlines and hotels, a flexible points card (e.g., Chase Sapphire Preferred®) would likely be a better fit.</li>
              <li><strong>The "Never Checks Bags, Never Buys Vacations" Flyer:</strong> If you consistently travel light and don't use JetBlue Vacations, you'll miss out on two of the card's easiest ways to recoup the annual fee. The no-annual-fee JetBlue Card might suffice.</li>
              <li><strong>The Ultra-Budget Blue Basic Flyer with Mosaic Hopes (Post-2025 Changes):</strong> If your main reason for chasing Mosaic is to enhance Blue Basic travel, carefully evaluate the reduced benefits on these fares from March 2025. The card still saves on Blue Basic bag fees, but the elite experience on these fares is diminished.</li>
            </ul>
            <p>The {reviewDataNew.cardName} remains a powerful tool for the right type of traveler. Its value is maximized by actively engaging with its benefits and the JetBlue ecosystem. For U.S. travelers who frequently fly JetBlue and can leverage its core perks, this card continues to offer a compelling blend of savings and rewards in 2025, solidifying its place as a top contender among airline co-branded cards. Always check the latest terms and offers directly with {reviewDataNew.issuerName} and JetBlue before applying.</p>
          </section>
          
          <section className={`${styles.reviewSection} ${styles.finalCtaSection}`}>
            <h2>Ready to enhance your JetBlue travel with the {reviewDataNew.cardName}?</h2>
            <p>If the substantial point earnings, free bag benefits, and path to Mosaic status align with your travel style, this card is worth a serious look.</p>
            <div className={styles.ctaButtons}>
              <a href={reviewDataNew.applyLink} className={`${styles.btn} ${styles.btnApply} ${styles.btnLarge}`} target="_blank" rel="noopener noreferrer sponsored" title={`Apply for The ${reviewDataNew.cardName} on ${reviewDataNew.issuerName}'s secure site`}>
                Apply for The {reviewDataNew.cardName}
              </a>
              <a href={reviewDataNew.ratesLink} className={`${styles.btn} ${styles.btnRates} ${styles.btnLarge}`} target="_blank" rel="noopener noreferrer sponsored" title={`See rates and fees for The ${reviewDataNew.cardName} on ${reviewDataNew.issuerName}'s site`}>
                See Rates & Fees
              </a>
            </div>
            <p className={styles.smallPrintTerms}>Terms Apply. Click links for details. Enrollment may be required for select benefits. Images © Barclays Bank Delaware.</p>
          </section>
        </article>
      </main>

      <div className={styles.stickyCtaContainer}>
        <div className={styles.stickyCtaContent}>
            <span className={styles.stickyCtaText}>The {reviewDataNew.cardName} - ${reviewDataNew.annualFee} Annual Fee.</span>
            <div className={styles.stickyCtaButtons}>
                <a href={reviewDataNew.applyLink} target="_blank" rel="noopener noreferrer sponsored" className={`${styles.btn} ${styles.btnApply} ${styles.ctaButtonApply}`}>Apply Now</a>
                <Link href={reviewDataNew.learnMoreLink} legacyBehavior>
                    <a className={`${styles.btn} ${styles.btnRates} ${styles.ctaButtonLearnMore}`}>Learn More</a>
                </Link>
            </div>
        </div>
      </div>
    </>
  );
}