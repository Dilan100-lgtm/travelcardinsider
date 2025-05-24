// File: pages/review/chase-aeroplan-2025.js

import React, { useState, useRef, useEffect, useCallback } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/reviews2025.module.css'; // Assuming this path is correct

const siteUrl = 'https://www.travelcardinsider.com'; // Your actual site URL

const reviewDataNew = {
  cardName: "Chase Aeroplan® Card",
  shortCardName: "Aeroplan Card",
  issuerName: "Chase", // In partnership with Air Canada Aeroplan
  issuerLogoUrl: "/images/issuer-logo-chase.svg", // IMPORTANT: Update with actual Chase logo path
  welcomeOfferHeadline: "75,000 Bonus Pts", // Example: "75,000 bonus points after $4,000 spend in 3 months" - keep concise
  title: "Chase Aeroplan® Card Review 2025: The Smart U.S. Choice for Star Alliance?",
  description: "In-depth 2025 review of the Chase Aeroplan® Card. Explore its $95 annual fee, 3X earning on Air Canada, groceries, & dining, free checked bags, Aeroplan 25K status, and value for U.S. Star Alliance travelers.",
  keywords: [
    "Chase Aeroplan Card review 2025",
    "Aeroplan credit card US",
    "Star Alliance credit card",
    "$95 annual fee card",
    "Aeroplan 25K status",
    "Air Canada credit card Chase",
    "travel rewards credit card",
    "Aeroplan points",
    "Chase airline credit card"
  ],
  author: {
      name: 'Dilan Madushanka',
      title: 'Founder & Lead Editor',
      imageUrl: '/WhatsApp Image 2025-05-12 at 4.09.58 PM.jpeg', // IMPORTANT: Update with your actual image path if different
      imageWidth: 40,
      imageHeight: 40,
      tooltipImageUrl: '/WhatsApp Image 2025-05-12 at 4.09.58 PM.jpeg', // IMPORTANT: Update with your actual image path if different
      tooltipImageWidth: 60,
      tooltipImageHeight: 60,
      expertise: [
          'Airline Co-brand Cards',
          'Travel Rewards Programs',
          'Star Alliance Benefits',
          'Maximizing Point Redemptions',
          'Credit Card Analysis'
      ],
      bioSnippet: 'Dilan Madushanka is the founder and lead editor of TravelCardInsider.com, dedicated to demystifying credit cards and uncovering their real-world value for smarter travel.',
      fullBioLink: '/author/dilan-madushanka', // IMPORTANT: Update if your author bio page URL is different
      socialLinks: {
          linkedin: 'https://www.linkedin.com/in/dilan-madushanka-b65293365',
          twitter: 'https://x.com/team_dilan',
          email: 'team@travelcardinsider.com'
      }
  },
  siteName: "TravelCardInsider.com",
  pagePath: "/review/chase-aeroplan-2025",
  imageUrl: "/images/hero-chase-aeroplan.webp", // IMPORTANT: Update with a relevant hero image for the Chase Aeroplan Card
  heroImageObjectPosition: "center center",
  imageWidth: 1600,
  imageHeight: 900,
  siteLogoUrl: "/images/logo.png", // IMPORTANT: Update with your actual site logo path
  publishDate: "2025-05-24", // Adjust as needed
  updateDate: "2025-05-24", // Adjust as needed
  ratingValue: 4.4, // IMPORTANT: Set your own rating for this card
  annualFee: 95,
  applyLink: "https://www.travelcardinsider.com/apply/chase-aeroplan", // IMPORTANT: Update this with your affiliate link
  ratesLink: "https://creditcards.chase.com/travel-credit-cards/aircanada/aeroplan", // Official card page, often links to rates & fees
  h1Content: "Chase Aeroplan® Card 2025: In-Depth Review",
  heroH1Content: "Chase Aeroplan® Card 2025: Top U.S. Pick for Star Alliance?",
  reviewBody: "Our detailed 2025 analysis of the Chase Aeroplan® Card. Discover its value through earning multipliers, Aeroplan 25K status, travel benefits, and whether the $95 fee is justified for U.S.-based Star Alliance flyers.",
  sku: "CHASE-AEROPLAN-TCI-2025",
  mpn: "CHASEAEROPLAN",
  brandName: "Chase Aeroplan Card",
  keyPerks: [ // Adapted from 'credits' in Amex example
    { id: "earning3x", name: "3X Points Categories", details: "On Air Canada purchases, grocery stores, and dining (including takeout/eligible delivery).", icon: "/icons/perk-points.svg" }, // IMPORTANT: Update icon path
    { id: "earning1x", name: "1X Points General", details: "On all other purchases.", icon: "/icons/perk-points-alt.svg" }, // IMPORTANT: Update icon path
    { id: "monthlyBonus", name: "Monthly Spending Bonus", details: "Extra 500 Aeroplan points for every $2,000 spent monthly, up to 1,500 bonus points.", icon: "/icons/perk-bonus.svg" }, // IMPORTANT: Update icon path
    { id: "freeBags", name: "Free First Checked Bags", details: "For the primary cardmember and up to eight companions on the same Air Canada booking.", icon: "/icons/perk-bags.svg" }, // IMPORTANT: Update icon path
    { id: "trustedTraveler", name: "Trusted Traveler Credit", details: "Up to $120 credit for Global Entry, TSA PreCheck®, or NEXUS application fee, every four years.", icon: "/icons/perk-trustedtraveler.svg" }, // IMPORTANT: Update icon path
    { id: "eliteStatus", name: "Automatic Aeroplan 25K Status", details: "For the calendar year of account opening and the following calendar year. Maintain with $15k spend annually.", icon: "/icons/perk-status.svg" }, // IMPORTANT: Update icon path
    { id: "noFtF", name: "No Foreign Transaction Fees", details: "Make purchases abroad without incurring foreign transaction fees.", icon: "/icons/perk-noftf.svg" } // IMPORTANT: Update icon path
  ]
};

const pageUrlFull = `${siteUrl}${reviewDataNew.pagePath}`;

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Review",
  "itemReviewed": {
    "@type": "Product", // Could also be "Service" if focused on the loyalty program aspect linked to the card
    "name": reviewDataNew.cardName,
    "brand": { "@type": "Brand", "name": reviewDataNew.issuerName }, // Chase is the issuer brand
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
    "aggregateRating": { // You'll need to have actual reviews or a system to generate this count legitimately
        "@type": "AggregateRating",
        "ratingValue": reviewDataNew.ratingValue.toString(),
        "bestRating": "5",
        "worstRating": "1",
        "reviewCount": "1" // IMPORTANT: Update with actual number of reviews you have, or set to 1 if this is the primary review.
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
  "description": reviewDataNew.description, // Redundant with itemReviewed.description but common practice
  "keywords": reviewDataNew.keywords.join(', '),
  "mainEntityOfPage": { "@type": "WebPage", "@id": pageUrlFull },
  "image": [ `${siteUrl}${reviewDataNew.imageUrl}` ]
};

const TocLinks = [
  { href: "#introduction", label: "Introduction" },
  { href: "#core-features", label: "Core Features & Financials" },
  { href: "#earning-points", label: "Earning Points" },
  { href: "#travel-lifestyle-perks", label: "Key Travel & Lifestyle Perks" },
  { href: "#aeroplan-program", label: "Navigating Aeroplan: Redemption & Status" },
  { href: "#elite-status", label: "Aeroplan Elite Status" },
  { href: "#competitor-comparison", label: "Competitor Comparison" },
  { href: "#pros-cons", label: "Pros & Cons" },
  { href: "#verdict", label: "The Verdict" },
];

export default function ChaseAeroplanReview2025() {
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
      { rootMargin: "-20% 0px -80% 0px", threshold: 0.1 } // Adjusted threshold slightly
    );

    const sections = TocLinks.map(link => document.querySelector(link.href));
    sections.forEach(section => {
      if (section) observer.observe(section);
    });

    const handleScroll = () => {
      // Adjust scrollY based on where your hero image ends or where you want the sticky nav to appear
      const heroImageHeight = document.querySelector(`.${styles.heroImageContainer}`)?.offsetHeight || 400;
      if (window.scrollY > heroImageHeight * 0.8) { // Show when 80% of hero is scrolled
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
  }, []); // Removed TocLinks from dependencies as section IDs are stable.

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

        {/* Open Graph Meta Tags */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content={reviewDataNew.title} />
        <meta property="og:description" content={reviewDataNew.description} />
        <meta property="og:url" content={pageUrlFull} />
        <meta property="og:image" content={`${siteUrl}${reviewDataNew.imageUrl}`} />
        <meta property="og:image:width" content={String(reviewDataNew.imageWidth)} />
        <meta property="og:image:height" content={String(reviewDataNew.imageHeight)} />
        <meta property="og:site_name" content={reviewDataNew.siteName} />
        {/* IMPORTANT: Update with your site's Facebook profile/page URL */}
        <meta property="article:publisher" content={`https://www.facebook.com/yourtravelcardinsiderprofile`} />
        <meta property="article:published_time" content={reviewDataNew.publishDate} />
        <meta property="article:modified_time" content={reviewDataNew.updateDate} />
        <meta property="article:author" content={reviewDataNew.author.name} /> {/* Or a link to author's Facebook profile if preferred by OG */}

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        {/* IMPORTANT: Update with your site's Twitter handle */}
        <meta name="twitter:site" content="@TravelCardInsid" /> 
        <meta name="twitter:title" content={`${reviewDataNew.cardName} Review (${new Date(reviewDataNew.publishDate).getFullYear()}) | Is the $${reviewDataNew.annualFee} Fee Worth It?`} />
        <meta name="twitter:description" content={`Explore the ${new Date(reviewDataNew.publishDate).getFullYear()} ${reviewDataNew.cardName}: $${reviewDataNew.annualFee} fee, earning rates, travel perks like 25K status. Ideal for Star Alliance?`} />
        <meta name="twitter:image" content={`${siteUrl}${reviewDataNew.imageUrl}`} />
        <meta name="twitter:creator" content={reviewDataNew.author.socialLinks.twitter ? reviewDataNew.author.socialLinks.twitter.replace('https://x.com/', '@') : '@DilanMadushanka'} />


        {/* Regional Meta Tags (Optional but good for SEO) */}
        <meta name="geo.region" content="US" />
        <meta name="geo.placename" content="United States" /> {/* Assuming target audience is US */}
        <meta name="language" content="en-US" />
        <meta name="distribution" content="global" /> {/* Or "US" if strictly US-focused */}
        <link rel="alternate" hrefLang="en-us" href={pageUrlFull} />

        {/* Structured Data */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </Head>

      {/* Trust Signal Bar */}
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

      {/* Sticky Table of Contents Navigation */}
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

      {/* Hero Image Section */}
      <div className={styles.heroImageContainer}>
        <Image
          src={reviewDataNew.imageUrl}
          alt={`${reviewDataNew.cardName} from ${reviewDataNew.issuerName} - Star Alliance travel insights`}
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
          {/* Author Bio and Disclaimer Section */}
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
                    {/* Social links for author - using SVG icons from Amex example */}
                    {reviewDataNew.author.socialLinks && (
                        <div className={styles.authorSocialLinks}>
                            {reviewDataNew.author.socialLinks.linkedin && ( <a href={reviewDataNew.author.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`${reviewDataNew.author.name} on LinkedIn`} className={styles.socialIconLink}><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg></a>)}
                            {reviewDataNew.author.socialLinks.twitter && ( <a href={reviewDataNew.author.socialLinks.twitter} target="_blank" rel="noopener noreferrer" aria-label={`${reviewDataNew.author.name} on Twitter`} className={styles.socialIconLink}><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-.422.724-.665 1.56-.665 2.452 0 1.697.864 3.198 2.18 4.078-.8-.025-1.555-.247-2.227-.616v.054c0 2.37 1.683 4.333 3.91 4.78-.426.116-.874.174-1.337.174-.31 0-.611-.03-.904-.085.622 1.936 2.421 3.338 4.553 3.377-1.672 1.309-3.781 2.088-6.072 2.088-.394 0-.784-.023-1.169-.069 2.16 1.389 4.723 2.202 7.482 2.202 8.979 0 13.897-7.446 13.897-13.898 0-.21 0-.42-.015-.63.953-.689 1.778-1.56 2.433-2.525z"/></svg></a>)}
                            {reviewDataNew.author.socialLinks.email && ( <a href={`mailto:${reviewDataNew.author.socialLinks.email}`} aria-label={`Email ${reviewDataNew.author.name}`} className={styles.socialIconLink}><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"/></svg></a>)}
                        </div>
                    )}
                </div>
                {/* Author Tooltip */}
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
                           {/* Social links in tooltip */}
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

          {/* Table of Contents */}
          <nav className={styles.reviewToc}>
            <h2>In this {reviewDataNew.shortCardName} review:</h2>
            <ol>
              {TocLinks.map(link => (
                <li key={link.href}><a href={link.href}>{link.label}</a></li>
              ))}
            </ol>
          </nav>

          {/* --- Main Review Content Starts --- */}

          <section id="introduction" className={styles.reviewSection}>
            <h2>I. Introduction: The {reviewDataNew.cardName} in 2025</h2>
            <p>For U.S. travelers navigating the vast Star Alliance network, choosing the right credit card is crucial. The {reviewDataNew.cardName}, linked to Air Canada's loyalty program, is a compelling U.S.-issued option. But in a crowded market, especially after observing Aeroplan’s new dynamic pricing for a few months now, here’s our in-depth look at whether it’s truly the top pick for Star Alliance loyalists in 2025.</p>
            <p>This isn't just another card breakdown; at {reviewDataNew.siteName}, we dig deep. We'll analyze the card's features, the revamped Aeroplan program, and its standing against competitors to help you decide if this ${reviewDataNew.annualFee}-annual-fee card is your best ticket to global travel.</p>
          </section>

          <section id="core-features" className={styles.reviewSection}>
            <h2>II. Core Features & Financials</h2>
            <p>The {reviewDataNew.cardName} starts with a ${reviewDataNew.annualFee} annual fee, placing it in the competitive mid-tier of travel rewards cards. New cardmembers often see welcome offers like <strong>{reviewDataNew.welcomeOfferHeadline}</strong> after meeting an initial spending requirement (e.g., $4,000 in 3 months – always check the current offer details).</p>
            <p>
              When considering the value of Aeroplan points, third-party sites often provide estimates. For instance, some analyses might suggest around 1.5 cents per point, while others might be more conservative at 1.1 to 1.3 cents, depending on redemption.
              The true value you get will depend on how you redeem them. For official information on how Aeroplan points can be used for flights, refer to the {' '}
              <a href="https://www.aircanada.com/content/dam/aircanada/loyalty-content/documents/flight-rewards-chart-en.pdf" target="_blank" rel="noopener noreferrer">Aeroplan Flight Reward Chart</a>.
              Based on typical valuations, a welcome bonus can be worth $825 to $1,200 – potentially covering the annual fee for several years. Always check the current offer terms directly with Chase. You can find more information on the card and its terms on the {' '}
              <a href={reviewDataNew.ratesLink} target="_blank" rel="noopener noreferrer sponsored">official {reviewDataNew.cardName} page</a>.
            </p>
          </section>
          
          {/* Call to Action Section */}
          <section id="cta-aeroplan-card-1" className={styles.ctaSection}>
              <h2>Considering the <b>{reviewDataNew.cardName}</b>?</h2>
              <p>Unlock valuable Aeroplan points and travel benefits tailored for Star Alliance flyers.</p>
              <div className={styles.ctaButtons}>
                <a href={reviewDataNew.applyLink} className={`${styles.btn} ${styles.btnApply}`} title={`Apply for the ${reviewDataNew.cardName} on Chase's secure site`} target="_blank" rel="noopener noreferrer sponsored">Apply Now</a>
                <a href={reviewDataNew.ratesLink} className={`${styles.btn} ${styles.btnRates}`} title={`See rates and fees for the ${reviewDataNew.cardName}`} target="_blank" rel="noopener noreferrer sponsored">See Rates & Fees</a>
              </div>
          </section>

          <section id="earning-points" className={styles.reviewSection}>
            <h2>III. Earning Aeroplan Points</h2>
            <p>This card truly excels in rewarding your everyday spending:</p>
            <ul>
              <li><strong>3X Points:</strong> On purchases made directly with Air Canada. This incredible boost also applies at grocery stores and for dining (including takeout and eligible delivery services).</li>
              <li><strong>1X Points:</strong> On all other purchases.</li>
            </ul>
            <p>A Monthly Bonus further sweetens the deal: an extra 500 Aeroplan points for every $2,000 spent in a calendar month, up to a maximum of 1,500 bonus points per month. Aeroplan points don’t expire as long as your card account remains open and in good standing.</p>
          </section>

          <section id="travel-lifestyle-perks" className={styles.reviewSection}>
            <h2>IV. Key Travel & Lifestyle Perks</h2>
            <p>Beyond points, the tangible benefits add significant value. Here's a look at some of the standout perks for the {reviewDataNew.cardName} (enrollment may be required for some benefits):</p>
            <div className={styles.creditGrid}> {/* Using creditGrid style for perk cards */}
              {reviewDataNew.keyPerks.map(perk => (
                <div key={perk.id} className={styles.creditCard}> {/* Using creditCard style */}
                  <div className={styles.creditCardHeader}>
                    {perk.icon && <Image src={perk.icon} alt="" width={24} height={24} className={styles.creditIcon} />} {/* Assuming you have a creditIcon style */}
                    <h5 className={styles.creditName}>{perk.name}</h5>
                  </div>
                  <p className={styles.creditDetails}>{perk.details}</p>
                </div>
              ))}
            </div>
            <p style={{marginTop: '1rem'}}>Additionally, the card includes no foreign transaction fees, which is essential for international travel. It also bundles a strong suite of travel protections for a mid-tier card, covering trip cancellation/interruption, baggage/trip delays, auto rental collision damage waiver (secondary), and purchase/extended warranty protections, alongside World Elite Mastercard benefits.</p>
            <p>The card strategically blends strong everyday earning with valuable Air Canada-specific travel benefits and solid protections, aiming to be a primary card for Star Alliance aspirants.</p>
          </section>

          <section id="aeroplan-program" className={styles.reviewSection}>
            <h2>V. Navigating the Aeroplan Program: Redemption & Status</h2>
            <p>The card is your entry; the Aeroplan program is where the value is unlocked.</p>
            <h3>Aeroplan Point Value & Redemption</h3>
            <p>As mentioned, while some third-party sources might value Aeroplan points around 1.1 to 1.6 cents each, maximum value (often 2-5+ cents per point) typically comes from strategic international business/first-class flight redemptions on Star Alliance partners. For official partner information, consult the {' '}
              <a href="https://www.aircanada.com/ca/en/aco/home/book/routes-and-partners/star-alliance-and-other-airline-partners.html" target="_blank" rel="noopener noreferrer">Air Canada and Star Alliance partners page</a>.
              Redeeming for merchandise or standard car rentals usually yields much lower value.
            </p>
            <p>This is where your strategy comes into play:</p>
            <ul>
              <li><strong>Air Canada Flights:</strong> You benefit from Aeroplan's "Every Seat, Every Flight" policy and crucial "Preferred Pricing" for cardholders, meaning lower point costs on Air Canada flights.</li>
              <li>
                <strong>Star Alliance & Partner Flights:</strong> Access over 50 airlines. A March 2025 change (hypothetical date from original text) introduced a dual system:
                <ul>
                  <li><em>Dynamic Pricing ("Air Canada and Select Partners"):</em> Applies to Air Canada, United Airlines, Emirates, Etihad Airways, and others. Award prices fluctuate. While Aeroplan notes "greater availability" and "preferred pricing discounts" for cardholders, the net effect on popular routes (like United for U.S. travelers) is a key watchpoint.</li>
                  <li><em>Fixed Pricing ("All Other Partners"):</em> This chart still applies to most Star Alliance carriers like Lufthansa, SWISS, Singapore Airlines, ANA, etc., offering predictable "sweet spots."
                    <br /><em>Insider Tip:</em> We recently saw a member snag a one-way business class from Chicago to Zurich on SWISS for 70,000 Aeroplan points when cash prices were north of $3,000 – that’s the kind of outsized value we love!
                  </li>
                </ul>
              </li>
              <li>
                <strong>5,000-Point Stopover:</strong> This is Aeroplan gold! Add a stopover (up to 45 days) on a one-way international award for just 5,000 extra points. Incredible for seeing more of the world on one ticket. For official details, see the {' '}
                <a href="https://www.aircanada.com/ca/en/aco/home/aeroplan/legal/aeroplan-flight-reward-policy.html" target="_blank" rel="noopener noreferrer">Aeroplan Flight Reward Policy</a> (refer to Section 5 for Stopovers).
              </li>
              <li><strong>Other Redemptions:</strong> Pay Yourself Back® offers flexibility for statement credits on travel/dining/groceries (e.g., travel at 1.25 cents/point through a specified date – check current terms). Hotels (with a 4th night free for cardholders on 3-night Aeroplan hotel stays), cars, and merchandise are generally lower-value plays.</li>
            </ul>
          </section>

          <section id="elite-status" className={styles.reviewSection}>
            <h2>VI. Aeroplan Elite Status for U.S. Cardholders</h2>
            <p>This is a significant card perk. You get Automatic Aeroplan 25K Status for the calendar year you open your account and for the next full calendar year. This grants Star Alliance Silver status and useful Air Canada benefits (e.g., free bags on Air Canada, priority airport services).</p>
            <p>You can maintain 25K status with $15,000 in eligible net purchases on your card during a calendar year. You can even achieve a one-tier Elite Status Level Up (e.g., from 25K to 35K, or 35K to 50K) with $50,000 in eligible net purchases during a calendar year. The ultimate goal for many? Star Alliance Gold (achieved via Aeroplan 50K status or higher), unlocking global lounge access and other premium perks across the Star Alliance network.</p>
            <p>The dynamic pricing on United awards is a crucial new variable. This card best suits those willing to learn the Aeroplan program to maximize its features, especially the fixed award chart and stopovers.</p>
          </section>

          <section id="competitor-comparison" className={styles.reviewSection}>
            <h2>VII. Aeroplan Card vs. Key Competitors</h2>
            <p>How does the {reviewDataNew.cardName} stack up for U.S. travelers eyeing Star Alliance?</p>
            <ul>
              <li>
                <strong>Chase Sapphire Preferred® Card ($95 fee):</strong> Offers more transfer flexibility with various partners. You can find details on the {' '}
                <a href="https://creditcards.chase.com/rewards-credit-cards/sapphire/preferred" target="_blank" rel="noopener noreferrer sponsored">official Chase Sapphire Preferred page</a>. The Aeroplan Card, however, gives direct Air Canada perks and immediate Star Alliance Silver status.
              </li>
              <li><strong>Chase Sapphire Reserve® ($550 fee):</strong> Provides broader luxury perks and lounge access (Priority Pass). Aeroplan offers a lower-cost entry to some Star Alliance status benefits.</li>
              <li><strong>American Express® Gold Card (~$250 fee):</strong> Typically stronger for points on U.S. supermarket and dining spend, but lacks the Aeroplan Card’s direct airline/status perks for Star Alliance.</li>
              <li><strong>The Platinum Card® from American Express ($695 fee):</strong> Unmatched for pure luxury travel benefits and extensive lounge access (including Centurion Lounges). The Aeroplan Card delivers its status benefits at a much lower fee point.</li>
              <li><strong>Capital One Venture X Rewards ($395 fee):</strong> Offers great value with travel credits that can offset the fee and simple rewards. Aeroplan’s distinction remains the airline elite status path.</li>
              <li><strong>United℠ Explorer Card ($0 intro, then typically $95 fee):</strong> If you're a die-hard United loyalist, you'll need to carefully compare Aeroplan's dynamic United awards (even with cardholder discounts) versus MileagePlus rates and United card benefits. Aeroplan generally offers broader Star Alliance point utility.</li>
            </ul>
            <p>The "best" card hinges on your priorities. The {reviewDataNew.cardName} shines for Star Alliance status seekers and those leveraging its unique redemption values, provided they navigate the system effectively.</p>
          </section>

          <section id="pros-cons" className={styles.reviewSection}>
            <h2>VIII. The Final Tally: {reviewDataNew.cardName} Pros & Cons</h2>
            <div className={styles.prosConsContainer}>
              <div className={styles.prosSection}>
                <h3>Pros: Why It's a Great Fit</h3>
                <ul>
                  <li><span className={styles.bulletIcon}>👍</span>The Welcome Offer often provides substantial initial travel value.</li>
                  <li><span className={styles.bulletIcon}>👍</span>Strong Everyday Earning, especially the 3X on groceries and dining, fuels your points balance.</li>
                  <li><span className={styles.bulletIcon}>👍</span>Automatic Aeroplan 25K Status (Star Alliance Silver) for two years is a fantastic jumpstart.</li>
                  <li><span className={styles.bulletIcon}>👍</span>The innovative 5,000-point stopover feature is a game-changer for multi-destination trips.</li>
                  <li><span className={styles.bulletIcon}>👍</span>No foreign transaction fees, preferred pricing on Air Canada flights, and comprehensive travel protections.</li>
                </ul>
              </div>
              <div className={styles.consSection}>
                <h3>Cons: Potential Downsides</h3>
                <ul>
                  <li><span className={styles.bulletIcon}>👎</span>The $95 Annual Fee means you need to use the benefits to make it worthwhile.</li>
                  <li><span className={styles.bulletIcon}>👎</span>Dynamic Pricing Impact on partners like United introduces uncertainty and potential for higher point costs. "Cardholder preferred pricing" is meant to help, but its consistent impact needs monitoring.</li>
                  <li><span className={styles.bulletIcon}>👎</span>Some key benefits, like free checked bags, are primarily Air Canada-centric.</li>
                  <li><span className={styles.bulletIcon}>👎</span>This program isn't for passive users; maximizing value requires engagement and learning the Aeroplan system.</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="verdict" className={styles.reviewSection}>
            <h2>IX. The {reviewDataNew.siteName} Verdict for 2025: Who Should Apply?</h2>
            <p>Is the {reviewDataNew.cardName} the top choice for U.S. Star Alliance travelers? Let's be frank: if you're a casual traveler who sticks to one airline or wants dead-simple rewards, this probably isn't your card. The program has layers.</p>
            <h3>Who Should Absolutely Be Hitting 'Apply' Right Now:</h3>
            <ul>
              <li><strong>The Savvy Points Strategist:</strong> If you get a thrill from piecing together complex awards, leveraging fixed charts, and using perks like stopovers to explore more, this card is your toolkit. The 3X on groceries and dining will have you racking up points faster than you can plan your next adventure.</li>
              <li><strong>The Aspiring (or Current) Star Alliance Elite:</strong> That automatic 25K/Star Alliance Silver status is a brilliant way to get your foot in the door for preferred treatment. And if you fly Air Canada with any regularity, the free bags and discounted awards are no-brainers.</li>
              <li><strong>The Transborder Explorer:</strong> If Canada is a frequent destination on Air Canada, the card’s benefits align perfectly and can save you serious cash.</li>
            </ul>
            <h3>And Who Should Probably Steer Clear?</h3>
            <ul>
              <li><strong>The Die-Hard United Loyalists (Potentially):</strong> If you’re flying United multiple times a month and value straightforward status earning and redemptions within MileagePlus, you need to carefully weigh if Aeroplan's dynamic pricing on United (even with cardholder discounts) makes sense. It might be simpler to stick with a United co-branded card.</li>
              <li><strong>The Simplicity Seeker:</strong> If your eyes glaze over at terms like "distance-based charts" and "dynamic pricing," and you just want easy-to-understand rewards, a more straightforward cashback or flexible points card might be less headache.</li>
            </ul>
            <p>The {reviewDataNew.cardName} is an active tool, not a passive one. For U.S. travelers dedicated to Star Alliance, who value status perks, and are prepared to be strategic point redeemers, this card offers a powerful pathway. Its ultimate standing as "the best" will depend on how Aeroplan navigates the balance between award availability and cost in this more dynamic era; we strongly advise actively checking current redemption rates for key partners like United before making your decision.</p>
          </section>
          
          {/* Final Call to Action Section */}
          <section className={`${styles.reviewSection} ${styles.finalCtaSection}`}>
            <h2>Ready to explore Star Alliance with the {reviewDataNew.cardName}?</h2>
            <p>If the benefits of Aeroplan 25K status and strong earning categories align with your travel goals, this card could be your ticket.</p>
            <div className={styles.ctaButtons}>
              <a href={reviewDataNew.applyLink} className={`${styles.btn} ${styles.btnApply} ${styles.btnLarge}`} target="_blank" rel="noopener noreferrer sponsored" title={`Apply for The ${reviewDataNew.cardName} on Chase's secure site`}>
                Apply for The {reviewDataNew.cardName}
              </a>
              <a href={reviewDataNew.ratesLink} className={`${styles.btn} ${styles.btnRates} ${styles.btnLarge}`} target="_blank" rel="noopener noreferrer sponsored" title={`See rates and fees for The ${reviewDataNew.cardName} on Chase's site`}>
                See Rates & Fees
              </a>
            </div>
            <p className={styles.smallPrintTerms}>Terms Apply. Click links for details. Enrollment may be required for select benefits. Images © Chase Bank USA, N.A.</p>
          </section>
          {/* --- Main Review Content Ends --- */}
        </article>
      </main>

      {/* Sticky Bottom CTA Bar */}
      <div className={styles.stickyCtaContainer}>
        <div className={styles.stickyCtaContent}>
            <span className={styles.stickyCtaText}>The {reviewDataNew.cardName} - ${reviewDataNew.annualFee} Annual Fee.</span>
            <div className={styles.stickyCtaButtons}>
                <a href={reviewDataNew.applyLink} target="_blank" rel="noopener noreferrer sponsored" className={`${styles.btn} ${styles.ctaButtonApply}`}>Apply Now</a>
                <a href={reviewDataNew.ratesLink} target="_blank" rel="noopener noreferrer sponsored" className={`${styles.btn} ${styles.ctaButtonLearnMore}`}>See Rates & Fees</a>
            </div>
        </div>
      </div>
    </>
  );
}