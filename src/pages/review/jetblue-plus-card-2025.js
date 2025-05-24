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
  title: "JetBlue Plus Card Review 2025: Still the Go-To for JetBlue Loyalists?",
  description: "In-depth 2025 review of the JetBlue Plus Card. Explore its $99 annual fee, 6X TrueBlue points on JetBlue, free checked bags, 5K anniversary bonus, $100 Vacations credit, and path to Mosaic status.",
  keywords: [
    "JetBlue Plus Card review 2025",
    "JetBlue credit card",
    "Barclays airline card",
    "$99 annual fee card",
    "TrueBlue points",
    "Mosaic status",
    "JetBlue free checked bag",
    "travel rewards credit card US"
  ],
  author: { // Using the same author details as your example
      name: 'Dilan Madushanka',
      title: 'Founder & Lead Editor',
      imageUrl: '/WhatsApp Image 2025-05-12 at 4.09.58 PM.jpeg', // IMPORTANT: Update with your actual image path
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
      fullBioLink: '/author/dilan-madushanka', // IMPORTANT: Update if different
      socialLinks: {
          linkedin: 'https://www.linkedin.com/in/dilan-madushanka-b65293365',
          twitter: 'https://x.com/team_dilan',
          email: 'team@travelcardinsider.com'
      }
  },
  siteName: "TravelCardInsider.com",
  pagePath: "/review/jetblue-plus-card-2025", // IMPORTANT: Adjust if your URL structure is different
  imageUrl: "/brandon-karaca-zMPKX6Ws3Sc-unsplash.webp", // IMPORTANT: Update with a relevant hero image for the JetBlue Plus Card
  heroImageObjectPosition: "center center",
  imageWidth: 1600,
  imageHeight: 900,
  siteLogoUrl: "/images/logo.png", // IMPORTANT: Update with your actual site logo path
  publishDate: "2025-05-24", // Adjust as needed
  updateDate: "2025-05-24", // Adjust as needed
  ratingValue: 4.3, // IMPORTANT: Set your own rating for this card
  annualFee: 99,
  applyLink: "https://www.jetbluepluscard.com/", // Official Card Page Link
  ratesLink: "https://www.jetbluepluscard.com/", // Official Card Page (users will find "Rates & Fees" or "Terms" link here)
  learnMoreLink: "/cards/jetblue-plus-card", // IMPORTANT: Create this internal page or adjust
  h1Content: "JetBlue Plus Card 2025: In-Depth Review",
  heroH1Content: "JetBlue Plus Card Review 2025: The JetBlue Loyalist's Top Pick?",
  reviewBody: "Our detailed 2025 analysis of the Barclays JetBlue Plus Card. Is its $99 annual fee justified by its rich rewards, free bags, anniversary bonus, and Mosaic status benefits for frequent JetBlue flyers?",
  sku: "BARCLAYS-JETBLUEPLUS-TCI-2025",
  mpn: "JETBLUEPLUSCARD",
  brandName: "JetBlue Plus Card",
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

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Review",
  "itemReviewed": {
    "@type": "Product",
    "name": reviewDataNew.cardName,
    "brand": { "@type": "Brand", "name": reviewDataNew.issuerName },
    "description": reviewDataNew.description,
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
    "aggregateRating": { // IMPORTANT: Update reviewCount based on actual reviews if you implement them
        "@type": "AggregateRating",
        "ratingValue": reviewDataNew.ratingValue.toString(),
        "bestRating": "5",
        "worstRating": "1",
        "reviewCount": "1" // Placeholder: Update with actual number of reviews
    }
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
  "image": [ `${siteUrl}${reviewDataNew.imageUrl}` ]
};

const TocLinks = [
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

    const sections = TocLinks.map(link => document.querySelector(link.href));
    sections.forEach(section => {
      if (section) observer.observe(section);
    });

    const handleScroll = () => {
      const heroImageHeight = document.querySelector(`.${styles.heroImageContainer}`)?.offsetHeight || 400;
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
        {/* IMPORTANT: Update with your actual Facebook profile URL or remove */}
        <meta property="article:publisher" content={`https://www.facebook.com/yourtravelcardinsiderprofile`} />
        <meta property="article:published_time" content={reviewDataNew.publishDate} />
        <meta property="article:modified_time" content={reviewDataNew.updateDate} />
        <meta property="article:author" content={reviewDataNew.author.name} />
        <meta name="twitter:card" content="summary_large_image" />
        {/* IMPORTANT: Update with your actual Twitter handle */}
        <meta name="twitter:site" content="@TravelCardInsid" /> 
        <meta name="twitter:title" content={`${reviewDataNew.cardName} Review (${new Date(reviewDataNew.publishDate).getFullYear()}) | $${reviewDataNew.annualFee} Fee Deep Dive`} />
        <meta name="twitter:description" content={`Is the ${new Date(reviewDataNew.publishDate).getFullYear()} ${reviewDataNew.cardName} worth its $${reviewDataNew.annualFee} fee? Explore 6X points, free bags, Mosaic perks & more.`} />
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
          src={reviewDataNew.imageUrl} // Ensure this is a high-quality, relevant image
          alt={`${reviewDataNew.cardName} from ${reviewDataNew.issuerName} - benefits and rewards review`}
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
                tabIndex={0} // Make it focusable
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
                                {reviewDataNew.author.socialLinks.linkedin && ( <a href={reviewDataNew.author.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={styles.socialIconLink}><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg></a>)}
                                {reviewDataNew.author.socialLinks.twitter && ( <a href={reviewDataNew.author.socialLinks.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter" className={styles.socialIconLink}><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-.422.724-.665 1.56-.665 2.452 0 1.697.864 3.198 2.18 4.078-.8-.025-1.555-.247-2.227-.616v.054c0 2.37 1.683 4.333 3.91 4.78-.426.116-.874.174-1.337.174-.31 0-.611-.03-.904-.085.622 1.936 2.421 3.338 4.553 3.377-1.672 1.309-3.781 2.088-6.072 2.088-.394 0-.784-.023-1.169-.069 2.16 1.389 4.723 2.202 7.482 2.202 8.979 0 13.897-7.446 13.897-13.898 0-.21 0-.42-.015-.63.953-.689 1.778-1.56 2.433-2.525z"/></svg></a>)}
                                {reviewDataNew.author.socialLinks.email && ( <a href={`mailto:${reviewDataNew.author.socialLinks.email}`} aria-label="Email" className={styles.socialIconLink}><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"/></svg></a>)}
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

          <section id="introduction" className={styles.reviewSection}>
            <h2>I. Introduction: The {reviewDataNew.cardName} in 2025</h2>
            <p>JetBlue has carved out a unique space in the U.S. airline market, praised for its customer-centric service and comfortable cabin experiences. For travelers frequently flying JetBlue, their co-branded credit cards, especially the {reviewDataNew.cardName} from {reviewDataNew.issuerName}, have long been a popular way to enhance journeys and maximize rewards. But as the TrueBlue loyalty program continues to evolve and the travel rewards landscape shifts in 2025, is this mid-tier card still the undisputed champion for JetBlue enthusiasts?</p>
            <p>This isn't just a rundown of features; at {reviewDataNew.siteName}, we go deeper. We'll meticulously analyze the 2025 iteration of the {reviewDataNew.cardName}, its ${reviewDataNew.annualFee} annual fee, the real value of its acclaimed benefits like free checked bags and 6x points, its pathway to Mosaic status, and how it stacks up in a competitive market. Let’s determine if this card truly takes off for the savvy U.S. traveler.</p>
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

          <section id="travel-lifestyle-perks" className={styles.reviewSection}>
            <h2>IV. Key Travel & Lifestyle Perks: More Than Just Points?</h2>
            <p>Beyond the points, the {reviewDataNew.cardName} packs a suite of benefits that provide tangible value and enhance your travel experience (enrollment may be required for some benefits):</p>
             <div className={styles.creditGrid}>
              {reviewDataNew.keyPerks.filter(perk => ["freeBag", "anniversaryBonus", "vacationsCredit", "inflightSavings", "noFtF"].includes(perk.id)).map(perk => (
                <div key={perk.id} className={styles.creditCard}>
                  <div className={styles.creditCardHeader}>
                    <h5 className={styles.creditName}>{perk.name}</h5>
                    {perk.frequency && (
                      <span className={`${styles.creditPill} ${styles['pill' + perk.frequency.replace(/\s+/g, '')]}`}>
                        {perk.frequency}
                      </span>
                    )}
                  </div>
                  <p className={styles.creditDetails}>{perk.details}
                    {perk.id === "freeBag" && (
                      <> For current bag fee information, see <a href="https://www.jetblue.com/legal/fees" target="_blank" rel="noopener noreferrer">JetBlue's official baggage fee page</a>.</>
                    )}
                  </p>
                </div>
              ))}
            </div>
            <p style={{marginTop: '1rem'}}>
              The First Checked Bag Free perk is a standout. The primary cardmember and up to three companions on the same reservation get their first checked bag free on all JetBlue-operated flights. With JetBlue's first checked bag fees typically ranging from $35-$45 per bag each way domestically, a family of four could save $280-$360 on a single round-trip. This perk alone can justify the ${reviewDataNew.annualFee} annual fee after just one or two trips.
            </p>
            <p>
              Points Payback & Pooling: The card offers flexibility with "Points Payback," allowing redemption of TrueBlue points for statement credits (though typically at a lower value than flights). You can also pool points with up to seven friends and family members, making it easier to reach award thresholds. For pooling rules, check the <a href="https://www.jetblue.com/trueblue/points-pooling" target="_blank" rel="noopener noreferrer">TrueBlue Points Pooling details</a>.
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

          <section id="competitor-comparison" className={styles.reviewSection}>
            <h2>VI. {reviewDataNew.cardName} vs. Key Competitors in 2025</h2>
            <p>How does the {reviewDataNew.cardName} hold its own against other travel rewards cards?</p>
            <ul>
              <li>
                <strong>Vs. The No-Annual-Fee JetBlue Card:</strong> The basic JetBlue Card offers fewer points and lacks the free checked bag benefit, anniversary points, Vacations credit, and 10% points back. For most regular JetBlue flyers, the Plus Card's ${reviewDataNew.annualFee} fee is easily recouped. Compare cards on the <a href="https://www.jetbluecard.com/" target="_blank" rel="noopener noreferrer sponsored">official Barclays JetBlue card page</a>.
              </li>
              <li>
                <strong>Vs. Other Mid-Tier Airline Cards:</strong> Many competitor airline cards (~$99-$150 fee) offer a free checked bag and 2x earning. However, the {reviewDataNew.cardName}'s 6x on JetBlue is typically higher. The combo of 5,000 anniversary points AND the $100 Vacations credit often provides a clearer path to offsetting the annual fee. The 10% points back is also a unique differentiator.
              </li>
              <li>
                <strong>Vs. Flexible Travel Rewards Cards (e.g., Chase Sapphire Preferred®):</strong> Cards like the Chase Sapphire Preferred® ($95 fee, see <a href="https://creditcards.chase.com/rewards-credit-cards/sapphire/preferred" target="_blank" rel="noopener noreferrer sponsored">official Chase Sapphire Preferred page</a>) offer points transferable to multiple partners, including JetBlue. However, they lack JetBlue-specific perks like free checked bags on JetBlue, inflight discounts, or a direct path to Mosaic. For a dedicated JetBlue flyer, the airline-specific benefits often outweigh transfer flexibility.
              </li>
            </ul>
            <p>The best card depends on your loyalty. If JetBlue is your primary airline, the Plus Card is built to reward that loyalty directly and substantially.</p>
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
                  <li><span className={styles.bulletIcon}>👍</span>$100 Vacations Credit & 5,000 Anniversary Points: Can make the card "profitable" annually.</li>
                  <li><span className={styles.bulletIcon}>👍</span>10% Points Back on Award Redemptions: Stretches TrueBlue point value significantly.</li>
                  <li><span className={styles.bulletIcon}>👍</span>Accelerated Path to Mosaic Status & Potential $99 Annual Fee Credit.</li>
                  <li><span className={styles.bulletIcon}>👍</span>50% Inflight Savings & No Foreign Transaction Fees.</li>
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
            <h2>VIII. The {reviewDataNew.siteName} Verdict for 2025: Who Should Get the {reviewDataNew.cardName}?</h2>
            <p>So, is the {reviewDataNew.cardName} your best bet for smarter JetBlue travel in 2025? If you're an infrequent traveler or prioritize ultimate redemption flexibility across various programs, this probably isn't your primary card. Its strength lies in its deep integration with JetBlue.</p>
            <h3>Who Should Seriously Consider This Card:</h3>
            <ul>
              <li><strong>The JetBlue Loyalist Family/Group Traveler:</strong> If you fly JetBlue multiple times a year and check bags, the math is overwhelmingly in favor.</li>
              <li><strong>The JetBlue Vacations Enthusiast:</strong> The $100 statement credit combined with anniversary points effectively pays you to hold the card.</li>
              <li><strong>The Aspiring (or Current) Mosaic Member:</strong> The tile-earning and potential $99 annual fee credit at Mosaic 1 are game-changers.</li>
              <li><strong>The Value-Conscious Points Optimizer:</strong> For straightforward, strong value within JetBlue (6x earning, 10% points back), this card delivers.</li>
            </ul>
            <h3>Who Might Want to Explore Other Options:</h3>
            <ul>
              <li><strong>The Airline-Agnostic Traveler:</strong> A flexible points card (e.g., Chase Sapphire Preferred®) might be better if JetBlue isn't your main airline.</li>
              <li><strong>The "Never Checks Bags, Never Buys Vacations" Flyer:</strong> You'll miss out on easy ways to recoup the annual fee. The no-annual-fee JetBlue Card might suffice.</li>
              <li><strong>The Ultra-Budget Blue Basic Flyer with Mosaic Hopes (Post-2025 Changes):</strong> Carefully evaluate the reduced Mosaic benefits on Blue Basic fares.</li>
            </ul>
            <p>The {reviewDataNew.cardName} remains a powerful tool for the right type of traveler. Its value is maximized by actively engaging with its benefits and the JetBlue ecosystem. For U.S. travelers who frequently fly JetBlue and can leverage its core perks, this card continues to offer a compelling blend of savings and rewards in 2025.</p>
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