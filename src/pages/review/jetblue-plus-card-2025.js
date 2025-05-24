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
  welcomeOfferHeadline: "70,000 Bonus Pts", // Example: "70,000 bonus TrueBlue points after meeting spend" - keep concise
  // SEO OPTIMIZATION: Refined title and description for conciseness and keyword relevance
  title: "JetBlue Plus Card Review (2025): $99 Fee, Perks & Is It Worth It?",
  description: "Is the JetBlue Plus Card ($99 fee) worth it in 2025? Our review covers its 6X points, free bags, Mosaic status, 5K anniversary bonus, and key travel benefits for JetBlue flyers.",
  keywords: [
    "JetBlue Plus Card review 2025",
    "JetBlue credit card",
    "Barclays airline card",
    "$99 annual fee card",
    "TrueBlue points",
    "Mosaic status",
    "JetBlue free checked bag",
    "travel rewards credit card US",
    "best airline credit card" // Added broader keyword
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
          'Airline Co-brand Cards',
          'Travel Rewards Programs',
          'Loyalty Program Analysis',
          'Maximizing Point Redemptions',
          'Credit Card Benefits'
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
  pagePath: "/review/jetblue-plus-card-2025",
  imageUrl: "/images/jetblue-plus-hero-2025.jpg", // IMPORTANT: Update
  heroImageObjectPosition: "center center",
  imageWidth: 1600,
  imageHeight: 900,
  siteLogoUrl: "/images/logo.png", // IMPORTANT: Update
  publishDate: "2025-05-24",
  updateDate: "2025-05-24", // SEO: Keep updateDate current
  ratingValue: 4.3, // IMPORTANT: Set your own rating
  annualFee: 99,
  applyLink: "https://www.jetbluepluscard.com/",
  ratesLink: "https://www.jetbluepluscard.com/",
  learnMoreLink: "/cards/jetblue-plus-card",
  // SEO OPTIMIZATION: Ensured H1s are keyword-rich
  h1Content: "JetBlue Plus Card 2025: Full Review & Value Analysis",
  heroH1Content: "JetBlue Plus Card Review (2025): Is It Your Best Bet for JetBlue Travel?",
  reviewBody: "Our 2025 deep dive into the Barclays JetBlue Plus Card. For a $99 fee, does it deliver enough value with its points, free bags, and Mosaic perks for loyal JetBlue flyers?", // SEO: Concise summary
  sku: "BARCLAYS-JETBLUEPLUS-TCI-2025",
  mpn: "JETBLUEPLUSCARD",
  brandName: "JetBlue Plus Card",
  keyPerks: [ // Data for perks display, can be used for visual elements
    { id: "earning6x", name: "6X TrueBlue Points", details: "On eligible JetBlue purchases (flights, JetBlue Vacations, Paisly).", frequency: "Benefit" },
    { id: "earning2x", name: "2X TrueBlue Points", details: "At restaurants and eligible grocery stores.", frequency: "Benefit" },
    { id: "freeBag", name: "First Checked Bag Free", details: "For primary cardmember + 3 companions on JetBlue flights.", frequency: "Benefit" },
    { id: "anniversaryBonus", name: "5,000 Anniversary Points", details: "Annual bonus, effectively reducing net annual fee.", frequency: "Annual" },
    { id: "vacationsCredit", name: "$100 Vacations Credit", details: "Annual credit on JetBlue Vacations packages ($100+).", frequency: "Annual" },
    { id: "pointsRebate", name: "10% Points Back", details: "On JetBlue-operated award flight redemptions.", frequency: "Benefit" },
    { id: "mosaicPath", name: "Path to Mosaic Status", details: "Earn 1 Tile per $1,000 spent towards elite status.", frequency: "Benefit" },
    { id: "inflightSavings", name: "50% Inflight Savings", details: "On eligible inflight food & cocktail purchases.", frequency: "Benefit" },
    { id: "noFtF", name: "No Foreign Transaction Fees", details: "Save on purchases made abroad.", frequency: "Benefit" }
  ]
};

const pageUrlFull = `${siteUrl}${reviewDataNew.pagePath}`;

// VISUAL AIDS: Data structure for competitor comparison table
const competitorCardsData = [
  {
    id: "noFeeJetBlue",
    name: "No-Annual-Fee JetBlue Card",
    annualFee: "$0",
    keyFeatures: "3X on JetBlue, 2X dining/groceries.",
    comparisonPoint: "Lacks free bags, anniversary points, Vacations credit, and 10% points back. Plus Card offers significantly more value for regular flyers.",
    officialLink: "https://www.jetbluecard.com/" // Link to comparison or specific card page
  },
  {
    id: "otherAirlineCards",
    name: "Other Mid-Tier Airline Cards (e.g., Delta Gold, United Explorer)",
    annualFee: "~$99-$150",
    keyFeatures: "Typically 1 free checked bag, ~2X on airline spend.",
    comparisonPoint: "JetBlue Plus often has higher 6X earn on JetBlue. Its combined anniversary points & Vacations credit can offer clearer fee offset. 10% points back is a unique perk.",
    officialLink: null // Generic category, specific links can be added if comparing one-on-one
  },
  {
    id: "chaseSapphirePreferred",
    name: "Chase Sapphire Preferred®",
    annualFee: "$95",
    keyFeatures: "Flexible points transferable to partners (incl. JetBlue), broad travel/dining categories.",
    comparisonPoint: "Lacks JetBlue-specific perks (free bags, inflight savings, direct Mosaic path). JetBlue Plus is better for dedicated JetBlue flyers maximizing airline-specific benefits.",
    officialLink: "https://creditcards.chase.com/rewards-credit-cards/sapphire/preferred"
  }
];


const structuredData = { /* ... (structured data remains largely the same, ensure ratingValue and reviewCount are accurate) ... */
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

const TocLinks = [
  { href: "#introduction", label: "Introduction" },
  { href: "#core-features", label: "Core Features & Financials" },
  { href: "#earning-points", label: "Earning TrueBlue Points" },
  { href: "#key-perks", label: "Key Travel & Lifestyle Perks" }, // Renamed for clarity
  { href: "#trueblue-mosaic", label: "TrueBlue Program & Mosaic Status" }, // Renamed
  { href: "#competitors", label: "Competitor Comparison" }, // Renamed
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
      { rootMargin: "-20% 0px -80% 0px", threshold: 0.1 }
    );

    const sections = TocLinks.map(link => document.getElementById(link.href.substring(1))); // Ensure getElementById is used if IDs are unique
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
        {/* ... other head tags from your original file, ensure they use reviewDataNew ... */}
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

      {/* ... TrustSignalBar, StickyNav, HeroImageContainer ... (markup remains similar, ensure it uses reviewDataNew) */}
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
          {/* ... Header with AuthorBio ... (markup remains similar) ... */}
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
              {/* ... disclaimer ... */}
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

          {/* CONCISENESS: Sections below use more bullet points and shorter paragraphs */}
          <section id="introduction" className={styles.reviewSection}>
            <h2>I. Introduction: The {reviewDataNew.cardName} in 2025</h2>
            <p>JetBlue has carved a unique niche in the U.S. airline market with its customer-first service and comfortable cabins. For frequent JetBlue flyers, co-branded cards like the {reviewDataNew.cardName} from {reviewDataNew.issuerName} offer enhanced travel and rewards. As the TrueBlue program and travel landscape evolve in 2025, is this mid-tier card still the top choice for JetBlue loyalists?</p>
            <p>At {reviewDataNew.siteName}, we provide more than a feature list. This review meticulously analyzes the 2025 {reviewDataNew.cardName}: its ${reviewDataNew.annualFee} fee, the true value of benefits like free bags and 6X points, the path to Mosaic status, and its competitive standing. Let's see if it’s the savvy U.S. traveler's best bet.</p>
          </section>

          <section id="core-features" className={styles.reviewSection}>
            <h2>II. {reviewDataNew.cardName}: Core Features & Financials</h2>
            <p>Understanding the fundamentals – upfront value, ongoing costs, and point accumulation – is vital for assessing any travel card.</p>
            
            <h3>Annual Fee & Welcome Offer</h3>
            <ul>
              <li><strong>Annual Fee:</strong> ${reviewDataNew.annualFee}, typical for mid-tier airline cards.</li>
              <li><strong>Welcome Offer:</strong> Often substantial, e.g., {reviewDataNew.welcomeOfferHeadline} after meeting initial spend (e.g., $1,000 in 90 days).
                <ul><li><em>Always check current terms on the <a href={reviewDataNew.applyLink} target="_blank" rel="noopener noreferrer sponsored">official {reviewDataNew.cardName} page</a>.</em></li></ul>
              </li>
              <li><strong>Point Value:</strong> While not fixed by JetBlue (see <a href="https://www.jetblue.com/trueblue/using-points" target="_blank" rel="noopener noreferrer">TrueBlue redemption info</a>), third-party sites often value TrueBlue points at 1.3-1.5 cents each. A 70,000-point bonus could mean $910-$1,050 in travel.</li>
            </ul>

            <h3>Interest Rates & Other Financials</h3>
            <ul>
              <li><strong>Purchase APR:</strong> Variable, typically ~20%-30%, based on creditworthiness.</li>
              <li><strong>Introductory APR:</strong> May offer 0% intro APR on balance transfers for a limited time.</li>
              <li><strong>Recommendation:</strong> Pay your balance in full monthly to avoid interest negating reward value.</li>
              <li><em>For current APRs and full terms, visit the <a href={reviewDataNew.ratesLink} target="_blank" rel="noopener noreferrer sponsored">official {reviewDataNew.cardName} page</a> and look for "Rates and Fees" or "Terms & Conditions."</em></li>
            </ul>
            <p>This card is designed for those deeply integrated into the JetBlue flying experience.</p>
             {/* VISUAL AIDS Suggestion: Could add a small infographic here summarizing fees and key bonus value */}
          </section>
          
          <section id="cta-jetblue-plus-1" className={styles.ctaSection}>
              {/* ... CTA remains the same ... */}
          </section>

          <section id="earning-points" className={styles.reviewSection}>
            <h2>III. Earning TrueBlue Points: The Power of 6X</h2>
            <p>The {reviewDataNew.cardName} heavily rewards spending within the JetBlue ecosystem:</p>
            <ul>
              <li><strong>6X POINTS:</strong> On eligible JetBlue purchases (flights, JetBlue Vacations, <a href="https://www.paisly.com/" target="_blank" rel="noopener noreferrer">Paisly by JetBlue</a>). This is a top-tier earning rate for airline spend.</li>
              <li><strong>2X POINTS:</strong> At restaurants (including takeout/eligible delivery) and eligible grocery stores.</li>
              <li><strong>1X POINTS:</strong> On all other purchases.</li>
            </ul>
            <p><strong>Key Detail:</strong> TrueBlue points earned via the card don't expire as long as your TrueBlue account is open (<a href="https://www.jetblue.com/trueblue" target="_blank" rel="noopener noreferrer">TrueBlue Program Details</a>).</p>
            {/* VISUAL AIDS Suggestion: A simple bar chart showing earning rates by category would be effective here. */}
          </section>

          <section id="key-perks" className={styles.reviewSection}>
            <h2>IV. Key Travel & Lifestyle Perks</h2>
            <p>The {reviewDataNew.cardName} offers tangible benefits beyond points (enrollment may be required):</p>
            {/* Using the keyPerks array to generate a list of perks - more concise */}
            <ul className={styles.perkList}>
                {reviewDataNew.keyPerks.map(perk => (
                    <li key={perk.id}>
                        <strong>{perk.name}:</strong> {perk.details} 
                        {perk.id === "freeBag" && (
                          <> (Typically saves $35-$45 per bag each way. Check current fees on <a href="https://www.jetblue.com/legal/fees" target="_blank" rel="noopener noreferrer">JetBlue's baggage fee page</a>.)</>
                        )}
                        {perk.id === "anniversaryBonus" && " This $65-$75 value (at 1.3-1.5 cpp) helps offset the annual fee."}
                        {perk.id === "vacationsCredit" && " This alone can make the card profitable if you use JetBlue Vacations."}
                    </li>
                ))}
            </ul>
            <p><strong>Points Payback & Pooling:</strong> Redeem points for statement credits (usually lower value) or pool points with up to 7 others (see <a href="https://www.jetblue.com/trueblue/points-pooling" target="_blank" rel="noopener noreferrer">TrueBlue Points Pooling rules</a>).</p>
            <p>These perks provide a strong value, especially for frequent JetBlue flyers who maximize bag fee waivers and credits.</p>
          </section>

          <section id="trueblue-mosaic" className={styles.reviewSection}>
            <h2>V. TrueBlue Program & Mosaic Status</h2>
            <p>This card enhances your TrueBlue experience and offers a shortcut to Mosaic elite status.</p>
            <h3>TrueBlue Point Value & Redemption</h3>
            <ul>
              <li><strong>Revenue-Based Redemptions:</strong> Points needed for flights tie to cash prices (no traditional award charts/blackouts). Simplicity is key. (Official redemption guide: <a href="https://www.jetblue.com/trueblue/using-points" target="_blank" rel="noopener noreferrer">Using TrueBlue Points</a>).</li>
              <li><strong>10% Points Back:</strong> Excellent cardholder perk; get 10% of redeemed points back on JetBlue-operated award flights.</li>
              <li><strong>Cash + Points:</strong> Book with as few as 500 points + cash.</li>
            </ul>

            <h3>Accelerated Path to Mosaic Elite Status</h3>
            <ul>
              <li><strong>Tile Earning:</strong> 1 Tile per $1,000 spent on the card.</li>
              <li><strong>Mosaic Tiers (2025):</strong> Mosaic 1 (50 tiles), Mosaic 2 (100), Mosaic 3 (150), Mosaic 4 (250).</li>
              <li><strong>Key Mosaic Benefits:</strong> Free first two checked bags, priority services, complimentary alcoholic beverages, etc. (Full details: <a href="https://www.jetblue.com/trueblue/mosaic" target="_blank" rel="noopener noreferrer">Official JetBlue Mosaic Page</a>).</li>
              <li><strong>$99 Mosaic 1 Statement Credit:</strong> A "Perk You Pick" upon reaching Mosaic 1 can be a $99 credit towards this card's annual fee, making it effectively free for that year.</li>
              <li><strong>Note on Blue Basic:</strong> Be aware of 2025 changes reducing some Mosaic benefits on Blue Basic fares.</li>
            </ul>
            <p>The card's TrueBlue integration (points rebate, Mosaic tiles) is a major draw for JetBlue loyalists.</p>
          </section>

          <section id="competitors" className={styles.reviewSection}>
            <h2>VI. Competitor Comparison</h2>
            <p>How does the {reviewDataNew.cardName} compare in 2025?</p>
            {/* VISUAL AIDS: Implementing a structured list that can be styled as a table */}
            <div className={styles.comparisonTableContainer}>
              {/* You would ideally create a <table> element here or a component that renders one */}
              {/* For now, a structured div list for easier styling: */}
              {competitorCardsData.map(card => (
                <div key={card.id} className={styles.competitorRow}>
                  <div className={styles.competitorName}><strong>{card.name}</strong> ({card.annualFee} fee)</div>
                  <div className={styles.competitorFeatures}><em>Key Features:</em> {card.keyFeatures}</div>
                  <div className={styles.competitorComparison}><em>vs. JetBlue Plus:</em> {card.comparisonPoint}
                    {card.officialLink && (
                      <> (<a href={card.officialLink} target="_blank" rel="noopener noreferrer sponsored">Official Details</a>)</>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <p style={{marginTop: '1rem'}}>The best card depends on your loyalty. The JetBlue Plus Card is purpose-built to substantially reward primary JetBlue flyers.</p>
            {/* VISUAL AIDS Suggestion: The above structure can be styled into a responsive table.
                For a more visual approach, consider a feature comparison chart infographic linking to individual reviews. */}
          </section>

          <section id="pros-cons" className={styles.reviewSection}>
            <h2>VII. Pros & Cons: {reviewDataNew.cardName}</h2>
            {/* This section is already well-structured with bullet points */}
            <div className={styles.prosConsContainer}>
              <div className={styles.prosSection}>
                <h3>Pros: Why It Takes Off</h3>
                <ul>
                  <li><span className={styles.bulletIcon}>👍</span><strong>High-Value Welcome Offer:</strong> Often far exceeds the annual fee in initial travel value.</li>
                  <li><span className={styles.bulletIcon}>👍</span><strong>Exceptional 6X Points on JetBlue:</strong> Maximizes rewards in the JetBlue ecosystem.</li>
                  <li><span className={styles.bulletIcon}>👍</span><strong>Free First Checked Bag (Self + 3):</strong> Significant savings for individuals and families.</li>
                  <li><span className={styles.bulletIcon}>👍</span><strong>Annual Value Boosters:</strong> $100 Vacations Credit & 5,000 Anniversary Points effectively lower or negate the net annual fee.</li>
                  <li><span className={styles.bulletIcon}>👍</span><strong>10% Points Back on Awards:</strong> Increases the value of TrueBlue points.</li>
                  <li><span className={styles.bulletIcon}>👍</span><strong>Mosaic Status Shortcut:</strong> Tile earning plus a potential $99 annual fee credit at Mosaic 1.</li>
                  <li><span className={styles.bulletIcon}>👍</span><strong>Extra Perks:</strong> 50% inflight savings & no foreign transaction fees.</li>
                </ul>
              </div>
              <div className={styles.consSection}>
                <h3>Cons: Potential Turbulence</h3>
                <ul>
                  <li><span className={styles.bulletIcon}>👎</span><strong>$99 Annual Fee:</strong> Not waived initially; requires benefit utilization to justify.</li>
                  <li><span className={styles.bulletIcon}>👎</span><strong>JetBlue-Focused:</strong> Value diminishes if not primarily flying JetBlue.</li>
                  <li><span className={styles.bulletIcon}>👎</span><strong>Paisly Portal Pricing:</strong> Always compare prices despite 6X earn. (Paisly help: <a href="https://www.paisly.com/shop/why-paisly/helpful-humans/" target="_blank" rel="noopener noreferrer">Paisly Support</a>).</li>
                  <li><span className={styles.bulletIcon}>👎</span><strong>Mosaic on Blue Basic Changes:</strong> Reduced elite benefits on basic fares from 2025.</li>
                  <li><span className={styles.bulletIcon}>👎</span><strong>No Luxury Travel Perks:</strong> Lacks airport lounge access or premium travel credits found on higher-tier cards.</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="verdict" className={styles.reviewSection}>
            <h2>VIII. The {reviewDataNew.siteName} Verdict for 2025</h2>
            <p>Is the {reviewDataNew.cardName} the top choice for JetBlue travel in 2025? If you're an infrequent flyer or demand universal program flexibility, it might not be your primary card. Its strength is its deep JetBlue integration.</p>
            
            <h3>This Card Shines For:</h3>
            <ul>
              <li><strong>JetBlue Loyalist Families/Groups:</strong> Significant savings from free checked bags.</li>
              <li><strong>JetBlue Vacations Users:</strong> The $100 credit + anniversary points can mean net profit.</li>
              <li><strong>Aspiring/Current Mosaic Members:</strong> Tile earning & potential annual fee credit are key.</li>
              <li><strong>Value-Driven Points Optimizers:</strong> Strong, clear returns within the JetBlue program (6X points, 10% rebate).</li>
            </ul>

            <h3>Consider Other Options If You Are:</h3>
            <ul>
              <li><strong>An Airline-Agnostic Traveler:</strong> A flexible points card (e.g., Chase Sapphire Preferred®) may offer broader utility.</li>
              <li><strong>A "No Frills" Flyer:</strong> If you don't check bags or use JetBlue Vacations, easier value propositions are lost. The no-fee JetBlue Card could be enough.</li>
              <li><strong>An Ultra-Budget Blue Basic Flyer (Post-2025 Mosaic Changes):</strong> Carefully weigh the diluted Mosaic benefits on these fares.</li>
            </ul>
            <p>The {reviewDataNew.cardName} is a powerful tool when actively used. For U.S. travelers loyal to JetBlue who can leverage its core perks, it remains a top contender in 2025, offering a strong mix of savings and rewards.</p>
          </section>
          
          <section className={`${styles.reviewSection} ${styles.finalCtaSection}`}>
            {/* ... Final CTA remains the same ... */}
          </section>
        </article>
      </main>

      <div className={styles.stickyCtaContainer}>
        {/* ... Sticky CTA remains the same ... */}
      </div>
    </>
  );
}