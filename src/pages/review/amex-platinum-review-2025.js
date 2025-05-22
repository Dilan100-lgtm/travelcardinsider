// File: pages/review/amex-platinum-2025.js

import React, { useState, useRef, useEffect, useCallback } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/reviews2025.module.css';

const siteUrl = 'https://www.yourtravelcardreviewsite.com'; // IMPORTANT: Update this to your actual site URL

const reviewDataNew = {
  cardName: "The Platinum Card® from American Express",
  shortCardName: "Amex Platinum", // For brevity in elements like the trust bar
  issuerName: "American Express",
  issuerLogoUrl: "/images/issuer-logo-amex.svg", // IMPORTANT: Update with actual Amex logo path
  welcomeOfferHeadline: "Earn 80,000 Pts", // IMPORTANT: Keep this concise and current
  title: "Amex Platinum 2025 Review: Are Premium Travel Perks Worth $695?",
  description: "In-depth 2025 review of The Platinum Card® from American Express. Explore its $695 annual fee, extensive travel credits, unparalleled lounge access, elite hotel status, and robust insurance protections. Is this premium card the right investment for your travel style?",
  keywords: [
    "Amex Platinum review 2025",
    "American Express Platinum Card",
    "premium travel credit card",
    "$695 annual fee card",
    "Centurion Lounge access",
    "Amex Membership Rewards",
    "luxury credit card US",
    "Amex travel credits",
    "Amex FHR",
    "travel insurance credit card"
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
          'Premium Credit Cards',
          'Travel Rewards Programs',
          'Luxury Travel Benefits',
          'Maximizing Card Credits',
          'Credit Card Analysis'
      ],
      bioSnippet: 'Dilan Madushanka is the founder and lead editor of TravelCardInsider.com, dedicated to demystifying credit cards and uncovering their real-world value for smarter travel.',
      fullBioLink: '/author/dilan-madushanka',
      socialLinks: {
          linkedin: 'https://www.linkedin.com/in/dilan-madushanka-b65293365',
          twitter: 'https://x.com/team_dilan',
          email: 'team@travelcardinsider.com'
      }
  },
  siteName: "Your Travel Card Review Site", // IMPORTANT: Update this
  pagePath: "/review/amex-platinum-2025",
  // Suggestion from feedback: custom, high-resolution Centurion-Lounge shot
  imageUrl: "/savvas-kalimeris-hO3do8FKJkQ-unsplash.webp", // IMPORTANT: Update this path to your high-res WebP lounge image (<150kB)
  imageWidth: 1600, // Example, adjust to your hero image's aspect ratio
  imageHeight: 900, // Example, adjust to your hero image's aspect ratio
  siteLogoUrl: "/images/logo.png",
  publishDate: "2025-05-17", // Keep this as the original publish date
  updateDate: "2025-05-22", // IMPORTANT: This should reflect the "Updated May 2025" badge
  ratingValue: 4.6,
  annualFee: 695,
  applyLink: "https://www.yourlink.com/apply-amex-platinum", // IMPORTANT: Update this with your affiliate link
  learnMoreLink: "/cards/amex-platinum-details",
  ratesLink: "https://www.yourlink.com/amex-platinum-rates-fees", // IMPORTANT: Update this with the official rates and fees link
  h1Content: "The Amex Platinum Card 2025: A Deep Dive into its $695 Value", // Retained for main article title
  // H1 for hero section might be slightly different if needed, e.g., more aspirational
  heroH1Content: "Amex Platinum 2025: Is The Iconic $695 Card Still The Key To Luxury Travel?",
  reviewBody: "Our comprehensive 2025 analysis of The Platinum Card® from American Express. Uncover its value through travel credits, lounge access, elite perks, and whether the $695 fee is justified for you.",
  sku: "AMEX-PLATINUM-TCI-2025",
  mpn: "AMEXPLATINUM",
  brandName: "American Express Platinum",
  credits: [ // Data for the new credit cards section
    { id: "airline", name: "$200 Airline Fee Credit", frequency: "Annual", details: "For incidental fees on one pre-selected airline. Enrollment required.", icon: <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="premiumGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0052D4;stop-opacity:1" /> <stop offset="100%" style="stop-color:#65C7F7;stop-opacity:1" /> </linearGradient>
    <linearGradient id="wingGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#B0B0B0;stop-opacity:1" /> <stop offset="100%" style="stop-color:#E0E0E0;stop-opacity:1" /> </linearGradient>
  </defs>

  <rect x="15" y="30" width="70" height="45" rx="8" fill="url(#premiumGradient)" stroke="#0033A0" stroke-width="2"/>

  <rect x="25" y="38" width="15" height="10" rx="2" fill="#FFD700" opacity="0.8"/> <path d="M 50 15 L 50 30 L 85 30 Q 90 45, 75 55 L 60 45 Q 55 30, 50 15 Z" fill="url(#wingGradient)" stroke="#909090" stroke-width="1.5" transform="rotate(10 65 35)"/>

  <path d="M 50 15 L 50 30 L 85 30 Q 90 45, 75 55 L 60 45 Q 55 30, 50 15 Z" fill="black" opacity="0.15" transform="translate(2 2) rotate(10 65 35)"/>
  <rect x="15" y="30" width="70" height="45" rx="8" fill="black" opacity="0.1" transform="translate(2 2)"/>


</svg>
 },
    { id: "hotel", name: "$200 Hotel Credit", frequency: "Annual", details: "On prepaid FHR or The Hotel Collection (2-night min) bookings via Amex Travel.", icon: "/icons/credit-hotel.svg" },
    { id: "uber", name: "$200 Uber Cash", frequency: "Monthly", details: "$15/month + $20 Dec bonus for U.S. rides or Uber Eats. Card must be linked.", icon: "/icons/credit-uber.svg" },
    { id: "digital", name: "$240 Digital Ent. Credit", frequency: "Monthly", details: "$20/month for select services (Disney+, Hulu, etc.). Enrollment required.", icon: "/icons/credit-digital.svg" },
    { id: "clear", name: "$189 CLEAR® Plus Credit", frequency: "Benefit", details: "Covers annual CLEAR Plus membership. Enrollment required.", icon: "/icons/credit-clear.svg" },
    { id: "saks", name: "$100 Saks Fifth Ave Credit", frequency: "Semi-Annual", details: "$50 Jan-June & $50 July-Dec. Enrollment required.", icon: "/icons/credit-saks.svg" },
    { id: "walmart", name: "$155 Walmart+ Credit", frequency: "Monthly", details: "Covers monthly Walmart+ membership fee (approx. $155 annually). Enrollment required.", icon: "/icons/credit-walmart.svg" },
    { id: "equinox", name: "$300 Equinox Credit", frequency: "Annual", details: "For Equinox memberships or Equinox+ app. Enrollment required.", icon: "/icons/credit-equinox.svg" },
    { id: "globalentry", name: "Global Entry / TSA PreCheck® Credit", frequency: "Benefit", details: "Fee credit up to $100 for Global Entry or up to $85 for TSA PreCheck®.", icon: "/icons/credit-globalentry.svg" }
    // IMPORTANT: Update icon paths with your actual icon files
  ]
};

const pageUrlFull = `${siteUrl}${reviewDataNew.pagePath}`;

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Review",
  "itemReviewed": {
    "@type": "Product",
    "name": reviewDataNew.cardName,
    "brand": { "@type": "Brand", "name": reviewDataNew.brandName },
    "description": reviewDataNew.description,
    "image": `${siteUrl}${reviewDataNew.imageUrl}`,
    "sku": reviewDataNew.sku,
    "mpn": reviewDataNew.mpn,
    "offers": {
        "@type": "Offer", "url": reviewDataNew.applyLink, "priceCurrency": "USD", "price": reviewDataNew.annualFee.toString(),
        "priceSpecification": { "@type": "PriceSpecification", "price": reviewDataNew.annualFee, "priceCurrency": "USD", "valueAddedTaxIncluded": "false", "billingIncrement": "1", "unitText": "ANNUAL" },
        "seller": { "@type": "Organization", name: reviewDataNew.issuerName }
    },
    "aggregateRating": { "@type": "AggregateRating", "ratingValue": reviewDataNew.ratingValue.toString(), "bestRating": "5", "worstRating": "1", "reviewCount": "1" }
  },
  "reviewRating": { "@type": "Rating", "ratingValue": reviewDataNew.ratingValue.toString(), "bestRating": "5", "worstRating": "1" },
  "headline": reviewDataNew.title,
  "author": { "@type": "Person", "name": reviewDataNew.author.name },
  "publisher": { "@type": "Organization", "name": reviewDataNew.siteName, "logo": { "@type": "ImageObject", "url": `${siteUrl}${reviewDataNew.siteLogoUrl}` }},
  "datePublished": reviewDataNew.publishDate,
  "dateModified": reviewDataNew.updateDate,
  "description": reviewDataNew.description,
  "keywords": reviewDataNew.keywords.join(', '),
  "mainEntityOfPage": { "@type": "WebPage", "@id": pageUrlFull },
  "image": [ `${siteUrl}${reviewDataNew.imageUrl}` ]
};

// For Sticky "On This Page" Nav
const TocLinks = [
  { href: "#introduction", label: "Introduction" },
  { href: "#core-economics", label: "Core Economics" },
  { href: "#platinum-credits", label: "Platinum Credits" },
  { href: "#travel-benefits", label: "Travel Benefits" },
  { href: "#travel-protections", label: "Protections" },
  { href: "#lifestyle-perks", label: "Lifestyle Perks" },
  { href: "#verdict", label: "Verdict" },
  { href: "#conclusion", label: "Conclusion" },
];

export default function AmexPlatinumReview2025() {
  const authorRef = useRef(null);
  const authorTooltipRef = useRef(null);
  const [showAuthorBioTooltip, setShowAuthorBioTooltip] = useState(false);

  // Sticky Nav state
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

  // Effect for sticky nav and active section highlighting
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -80% 0px", threshold: 0 } // Adjust rootMargin to control when section becomes active
    );

    const sections = TocLinks.map(link => document.querySelector(link.href));
    sections.forEach(section => {
      if (section) observer.observe(section);
    });

    const handleScroll = () => {
      // Show sticky nav after scrolling 200px (or height of hero/trust bar)
      if (window.scrollY > 200) { // IMPORTANT: Adjust this value based on your hero/header height
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
        <meta name="twitter:site" content="@YourSiteTwitterHandle" />
        <meta name="twitter:title" content={`${reviewDataNew.cardName} Review (2025) | Is the $${reviewDataNew.annualFee} Fee Justified?`} />
        <meta name="twitter:description" content={`Deep dive into the 2025 Amex Platinum: $${reviewDataNew.annualFee} fee, credits, lounge access, travel perks. Who benefits most?`} />
        <meta name="twitter:image" content={`${siteUrl}${reviewDataNew.imageUrl}`} />
        <meta name="twitter:creator" content={reviewDataNew.author.socialLinks.twitter ? reviewDataNew.author.socialLinks.twitter.replace('https://x.com/', '@') : '@AuthorTwitterHandle'} />

        <meta name="geo.region" content="US" />
        <meta name="geo.placename" content="United States" />
        <meta name="language" content="en-US" />
        <meta name="distribution" content="US" />
        <link rel="alternate" hrefLang="en-us" href={pageUrlFull} />
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

      {/* Sticky "On This Page" Nav */}
      {showStickyNav && (
        <nav className={styles.stickyTocNav} ref={stickyNavRef}>
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

      {/* Hero Section with Overlay */}
      <div className={styles.heroImageContainer}>
        <Image
          src={reviewDataNew.imageUrl}
          alt={`${reviewDataNew.cardName} from ${reviewDataNew.issuerName} - premium travel insights`}
          width={reviewDataNew.imageWidth}
          height={reviewDataNew.imageHeight}
          className={styles.heroImage}
          priority
        />
        <div className={styles.heroTextOverlay}>
          <h1 className={styles.heroTitle}>{reviewDataNew.heroH1Content}</h1>
        </div>
      </div>

      <main className={styles.reviewPageMain}> {/* Changed from style={{ fontFamily... }} to use class */}
        <article className={styles.reviewContainer}>
          <header className={styles.reviewHeader}>
            {/* Main H1 for the article content itself, if different from Hero H1 */}
            {/* <h1 className={styles.reviewTitle}>{reviewDataNew.h1Content}</h1> */}
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
                            {reviewDataNew.author.socialLinks.linkedin && ( <a href={reviewDataNew.author.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={styles.socialIconLink}><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg></a>)}
                            {reviewDataNew.author.socialLinks.twitter && ( <a href={reviewDataNew.author.socialLinks.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter" className={styles.socialIconLink}><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-.422.724-.665 1.56-.665 2.452 0 1.697.864 3.198 2.18 4.078-.8-.025-1.555-.247-2.227-.616v.054c0 2.37 1.683 4.333 3.91 4.78-.426.116-.874.174-1.337.174-.31 0-.611-.03-.904-.085.622 1.936 2.421 3.338 4.553 3.377-1.672 1.309-3.781 2.088-6.072 2.088-.394 0-.784-.023-1.169-.069 2.16 1.389 4.723 2.202 7.482 2.202 8.979 0 13.897-7.446 13.897-13.898 0-.21 0-.42-.015-.63.953-.689 1.778-1.56 2.433-2.525z"/></svg></a>)}
                            {reviewDataNew.author.socialLinks.email && ( <a href={`mailto:${reviewDataNew.author.socialLinks.email}`} aria-label="Email" className={styles.socialIconLink}><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"/></svg></a>)}
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
              on our site. However, our recommendations remain our own, and offers are subject to
              change. Always verify details with the official issuer. Terms apply to credit card benefits and offers.
              Enrollment may be required for select American Express benefits and offers.
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
            <h2>I. Introduction: The Platinum Promise in 2025</h2>
            <p>Imagine gliding through a dedicated airport security line, then settling into a serene Centurion Lounge with a gourmet snack, the terminal's usual chaos a world away. This is the experience the {reviewDataNew.cardName} hints at. For decades, it’s been a beacon of premium travel, synonymous with status and a hefty suite of benefits. But as travel evolves and the card's ${reviewDataNew.annualFee} annual fee remains significant, the big question for US travelers in 2025 is: does this iconic card still deliver real value? This review dives deep, blending a traveler's insights with a practical financial eye, all based on the latest 2025 details from {reviewDataNew.issuerName}, to help you decide.</p>
          </section>

          <section id="core-economics" className={styles.reviewSection}>
            <h2>II. The Price of Prestige: Understanding Platinum's Core Economics</h2>
            <p>Your journey with the {reviewDataNew.cardName} starts with its financial structure. That ${reviewDataNew.annualFee} annual fee is prominent. While {reviewDataNew.issuerName} might break it down to about ${Math.round(reviewDataNew.annualFee / 12)} a month, it’s a yearly investment that needs to pay off.</p>
            <p>For new cardmembers, a welcome offer can soften that initial outlay. A typical 2025 offer might be earning 80,000 Membership Rewards® Points after spending $8,000 in the first six months. Valuing these points at around 2 cents each when transferred to travel partners (see how we value points <a href="/your-valuation-methodology-article-link" target="_blank" rel="noopener">here</a>) means this bonus could be worth roughly $1,600 – easily covering the first year's fee. However, remember this is a one-time boost. Long-term value depends on consistently using the card’s ongoing benefits. The $8,000 spending threshold also signals that this card is geared towards those with significant purchasing power.</p>
            <p>Beyond the welcome bonus, here’s how you earn points:</p>
            <ul>
              <li><strong>5X Points:</strong> On flights booked directly with airlines or via American Express Travel (on up to $500,000 of these purchases per calendar year). This also applies to prepaid hotels booked on AmexTravel.com.</li>
              <li><strong>1X Points:</strong> On all other eligible purchases.</li>
            </ul>
            <p>For frequent travelers, that 5X multiplier is compelling. However, the card is clearly a travel-focused product, not an all-around rewards earner, as the 1X rate on everyday spending isn't best-in-class.</p>

            <div className={`${styles.tableResponsive} ${styles.valueTableContainer}`}>
              <h4 style={{textAlign: 'center', marginBottom: '0.5rem'}}>Quick Look: Offsetting the ${reviewDataNew.annualFee} Fee</h4>
              <table className={`${styles.comparisonTable} ${styles.noStickyFirstCol} ${styles.valueTable}`}>
                <thead>
                  <tr>
                    <th>Feature</th>
                    <th>Annual Value</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td data-label="Feature"><strong>Annual Fee</strong></td>
                    <td data-label="Annual Value"><strong>${reviewDataNew.annualFee}</strong></td>
                  </tr>
                  <tr>
                    <td data-label="Feature" colSpan={2} style={{fontStyle: 'italic', background: '#f9f9f9' }}>Potential Offsets:</td>
                  </tr>
                  <tr>
                    <td data-label="Feature">$200 Uber Cash</td>
                    <td data-label="Annual Value">$200</td>
                  </tr>
                  <tr>
                    <td data-label="Feature">$240 Digital Ent. Credit</td>
                    <td data-label="Annual Value">$240</td>
                  </tr>
                  <tr>
                    <td data-label="Feature">$200 Airline Fee Credit</td>
                    <td data-label="Annual Value">$200</td>
                  </tr>
                  <tr>
                    <td data-label="Feature">$189 CLEAR® Plus Credit</td>
                    <td data-label="Annual Value">$189</td>
                  </tr>
                  <tr className={styles.subtotalHighlightRow}>
                    <td data-label="Feature"><strong>Subtotal of these 4 Credits</strong></td>
                    <td data-label="Annual Value"><strong>$829</strong></td>
                  </tr>
                </tbody>
              </table>
              <p className={styles.tableCaption}>This simple example shows how utilizing just a few key credits you'd likely use anyway can more than cover the annual fee. The full list offers even more potential. Enrollment required for select benefits.</p>
            </div>
          </section>

          <section id="cta-amex-platinum-card" className={styles.ctaSection}>
              <h2>Interested in the <b>{reviewDataNew.cardName}</b>?</h2>
              <p>Unlock premium travel perks and valuable statement credits.</p>
              <div className={styles.ctaButtons}>
                <a href={reviewDataNew.applyLink} className={`${styles.btn} ${styles.btnApply}`} title={`Apply for the ${reviewDataNew.cardName} on the issuer's secure site`} target="_blank" rel="noopener noreferrer sponsored">Apply Now</a>
                <a href={reviewDataNew.ratesLink} className={`${styles.btn} ${styles.btnRates}`} title={`See rates and fees for the ${reviewDataNew.cardName}`} target="_blank" rel="noopener noreferrer sponsored">See Rates & Fees</a>
              </div>
          </section>

          <section id="platinum-credits" className={styles.reviewSection}>
            <h2>III. Decoding the Dollars: Your 2025 Guide to Platinum Credits</h2>
            <p>The array of statement credits is where many cardholders look to justify the ${reviewDataNew.annualFee} fee. {reviewDataNew.issuerName} claims "over $1,500 in value" here. Let’s see how that breaks down in 2025, keeping in mind that maximizing these often requires aligning them with your existing spending. Enrollment is required for many benefits.</p>
            <div className={styles.creditGrid}>
              {reviewDataNew.credits.map(credit => (
                <div key={credit.id} className={styles.creditCard}>
                  <div className={styles.creditCardHeader}>
                    {credit.icon && <Image src={credit.icon} alt="" width={24} height={24} className={styles.creditIcon} />}
                    <h5 className={styles.creditName}>{credit.name}</h5>
                    <span className={`${styles.creditPill} ${styles['pill' + credit.frequency]}`}>{credit.frequency}</span>
                  </div>
                  <p className={styles.creditDetails}>{credit.details}</p>
                </div>
              ))}
            </div>
            <p style={{marginTop: '1rem'}}><strong>Total Potential Value:</strong> Around $1,800+ if you can use every credit. Many of these are "use-it-or-lose-it," encouraging regular engagement. This sometimes leads to the "coupon book" critique – you need to be organized to get the full value. The actual worth of these credits truly hinges on whether they cover expenses you'd have anyway.</p>
          </section>
          
          {/* Placeholder for custom infographic or image */}
          {/* <div className={styles.customImageSection}>
            <Image src="/path-to-your-credits-pie-chart.webp" alt="Amex Platinum Credits Breakdown Infographic" width={600} height={400} layout="responsive" />
            <p className={styles.tableCaption}>Visual breakdown of available statement credits.</p>
          </div>
          */}

          <section id="travel-benefits" className={styles.reviewSection}>
            <h2>IV. The Globetrotter's Toolkit: Elite Travel Benefits in 2025</h2>
            {/* ... content from your previous version ... */}
            <p>Beyond direct credits, the {reviewDataNew.cardName} is packed with travel-enhancing perks. Enrollment may be required.</p>
            <h3>The American Express Global Lounge Collection®:</h3>
            <p>This is a crown jewel, offering access to over 1,400 airport lounges worldwide, including:</p>
            <ul>
              <li><strong>The Centurion® Lounges:</strong> Amex's premium lounges. Guest access policies apply and may involve fees or spending requirements for complimentary guest access.</li>
              <li><strong>Priority Pass™ Select Lounges:</strong> Broad network (enrollment required).</li>
              <li><strong>Delta Sky Club®:</strong> Access when flying Delta. Note: Card Members will receive a limited number of complimentary visits each year unless certain annual spending thresholds are met for unlimited access.</li>
              <li>Other partners like Escape Lounges and select Lufthansa lounges. While recent changes to guest policies tie unrestricted access more to higher spending or may involve fees, this network remains a travel game-changer for many.</li>
            </ul>
            <h3>Elevated Stays: Hotel Elite Status:</h3>
            <ul>
              <li><strong>Hilton Honors™ Gold Status</strong></li>
              <li><strong>Marriott Bonvoy® Gold Elite Status</strong> (Enrollment required for both). These offer benefits like potential room upgrades, bonus points, and late check-out. While good, very frequent travelers might already hold higher status through direct loyalty.</li>
            </ul>
            <h3>Fine Hotels + Resorts® (FHR) and The Hotel Collection (THC):</h3>
            <p>Booking through these Amex Travel programs (and using the $200 hotel credit) unlocks extra perks like daily breakfast for two (FHR), room upgrades (when available), a $100 experience credit (FHR/THC), and late check-out. These are particularly valuable for luxury stays.</p>
            <h3>Car Rental Privileges:</h3>
            <p>Complimentary premium status with programs like Avis Preferred®, Hertz Gold Plus Rewards®, and National Car Rental® Emerald Club Executive® (enrollment required), offering upgrades and priority service.</p>
            <h3>No Foreign Transaction Fees:</h3>
            <p>A must for international travel, saving you ~3% on overseas purchases.</p>
          </section>

          <section id="travel-protections" className={styles.reviewSection}>
            <h2>V. Travel Confidently: Platinum's Suite of Protections in 2025</h2>
            {/* ... content from your previous version ... */}
            <p>The {reviewDataNew.cardName} offers valuable insurance and protections, providing peace of mind. Terms, conditions, and limitations apply. Coverage is often contingent on paying for the entire fare or rental with your card.</p>
            <ul>
              <li><strong>Trip Cancellation and Interruption Insurance:</strong> Reimburses non-refundable travel expenses if your trip (paid entirely with the card) is cancelled or interrupted for a covered reason.</li>
              <li><strong>Trip Delay Insurance:</strong> If your trip (paid entirely with the card) is delayed for a covered reason (often 6+ hours), this may cover reasonable extra expenses like meals and lodging.</li>
              <li><strong>Baggage Insurance Plan:</strong> Coverage for lost, damaged, or stolen baggage when your common carrier ticket was paid entirely with the card.</li>
              <li><strong>Car Rental Loss and Damage Insurance:</strong> Typically secondary coverage for damage or theft of a rental vehicle when you pay with the card and decline the rental company's CDW. (Not available in all countries; some vehicle exclusions).</li>
              <li><strong>Cell Phone Protection:</strong> Up to $800 per claim (two claims per 12-month period, $50 deductible per claim) for repair or replacement of a damaged/stolen phone if your prior month's wireless bill was paid with the {reviewDataNew.cardName}.</li>
              <li><strong>Purchase Protection:</strong> Protects eligible new purchases against accidental damage or theft for 90 days (up to $10,000 per occurrence, $50,000 per Card Member account per calendar year).</li>
              <li><strong>Extended Warranty:</strong> Adds up to one extra year to original U.S. manufacturer's warranties of 5 years or less.</li>
            </ul>
            <p>These protections add a significant layer of security, extending the card’s value beyond just travel perks.</p>
          </section>

          <section id="lifestyle-perks" className={styles.reviewSection}>
            <h2>VI. Beyond the Airport: Lifestyle Perks</h2>
            {/* ... content from your previous version ... */}
            <p>The {reviewDataNew.cardName}'s appeal isn't limited to travel.</p>
            <ul>
              <li><strong>Global Dining Access by Resy:</strong> Add your card to your Resy profile to unlock exclusive reservations at sought-after restaurants and invitations to special dining events. This is a nice touch for foodies.</li>
              <li><strong>Amex Offers & Events:</strong> Access to targeted discounts or bonus points at various merchants, plus presales or preferred seating for concerts and shows. These vary but can offer ongoing value.</li>
            </ul>
            <p>These perks contribute to a "Platinum Lifestyle," adding a touch of luxury and exclusivity to everyday life, not just when you're on the road.</p>
          </section>

          <section id="verdict" className={styles.reviewSection}>
            <h2>VII. The Verdict: Is the Amex Platinum a Smart Investment for You in 2025?</h2>
            {/* ... content from your previous version, ensure ul for pros/cons are used ... */}
            <p>So, is the ${reviewDataNew.annualFee} {reviewDataNew.cardName} worth it in 2025? It truly depends on you. If you can leverage many of the statement credits (potentially $1,800+ in value, enrollment required for some), the annual fee is more than covered. Add the value of lounge access, hotel statuses, and travel protections, and the financial case can be strong.</p>
            <div className={styles.prosConsContainer}>
              <div className={styles.prosSection}>
                <h3>Pros: Why It's a Great Fit</h3>
                <ul>
                  <li><span className={styles.bulletIcon}>👍</span>Unmatched Lounge Access: The Global Lounge Collection is a top-tier benefit for frequent flyers.</li>
                  <li><span className={styles.bulletIcon}>👍</span>Substantial Credit Potential: If the credits align with your spending, they can significantly offset the fee. Enrollment required for some benefits.</li>
                  <li><span className={styles.bulletIcon}>👍</span>Valuable Hotel Perks: Elite status with Hilton and Marriott Bonvoy and FHR/THC benefits elevate stays. Enrollment required.</li>
                  <li><span className={styles.bulletIcon}>👍</span>Robust Protections: Comprehensive travel and purchase insurance provides peace of mind. Terms apply.</li>
                  <li><span className={styles.bulletIcon}>👍</span>Generous Welcome Offer: Often offsets the first year's fee and then some.</li>
                  <li><span className={styles.bulletIcon}>👍</span>5X Points on Flights & Prepaid Hotels: Excellent for these specific bookings through Amex Travel or directly with airlines.</li>
                </ul>
              </div>
              <div className={styles.consSection}>
                <h3>Cons: Potential Downsides</h3>
                <ul>
                  <li><span className={styles.bulletIcon}>👎</span>Steep ${reviewDataNew.annualFee} Annual Fee: It's a big commitment.</li>
                  <li><span className={styles.bulletIcon}>👎</span>"Coupon Book" Management: Maximizing benefits requires enrollment and tracking for various credits and offers.</li>
                  <li><span className={styles.bulletIcon}>👎</span>Niche Credits: Some credits (like Equinox for non-members) may not fit everyone.</li>
                  <li><span className={styles.bulletIcon}>👎</span>Low 1X Base Rewards: Not the best for general, non-bonused spending.</li>
                  <li><span className={styles.bulletIcon}>👎</span>Less Value for Infrequent Travelers: Core benefits are travel-centric.</li>
                  <li><span className={styles.bulletIcon}>👎</span>Lounge Access Changes: Recent modifications to guest access and Delta Sky Club visits might reduce value for some.</li>
                </ul>
              </div>
            </div>
            <h3 style={{marginTop: '2rem'}}>Who Gains the Most?</h3>
            <ul>
              <li>The Frequent Luxury Traveler: Values lounges, premium hotels (using FHR/THC), and their spending naturally uses many credits (Uber, entertainment, CLEAR®). Enrollment required for some benefits.</li>
              <li>The Consistent Business Traveler: Values comfort, efficiency, and status perks, especially if they can utilize credits personally.</li>
              <li>The Digitally Savvy, US-Based Consumer: Can easily maximize domestic perks like Uber Cash, Walmart+, CLEAR®, and digital entertainment credits. Enrollment required for some benefits.</li>
            </ul>
            <h3>Who Might Look Elsewhere?</h3>
            <ul>
              <li>The Budget-Focused Traveler: If minimizing costs is key, the high fee and luxury focus won't align.</li>
              <li>The Very Infrequent Traveler: Won't get enough value from travel perks.</li>
              <li>Fans of Simplicity: If you prefer straightforward rewards without tracking multiple credits.</li>
              <li>Those Unwilling to Actively Manage Benefits: The "coupon book" will feel like a burden.</li>
            </ul>
            <p>{reviewDataNew.issuerName}’s claim of "over $1,500 in value" from credits is achievable if you use most credits for things you'd buy anyway. The card is increasingly blending travel perks with "premium lifestyle" benefits for high-spenders. For those who master its intricacies, the {reviewDataNew.cardName} can feel like a win.</p>
          </section>

          <section id="conclusion" className={styles.reviewSection}>
            <h2>VIII. Conclusion: Crafting Your Platinum Journey in 2025</h2>
            {/* ... content from your previous version ... */}
            <p>The 2025 {reviewDataNew.cardName} isn't for everyone. Its ${reviewDataNew.annualFee} fee demands a lifestyle and spending pattern that can consistently extract superior value. It’s for the proactive cardholder who will actively manage benefits (enrollment required for some) to enhance experiences they already seek.</p>
            <p>Ask yourself: How often do I fly? Do I value lounges and hotel perks? Does my spending align with credits for Uber, entertainment, Walmart+, or Saks? Am I willing to track these and enroll where needed?</p>
            <p>If your answers align, the {reviewDataNew.cardName} can be a powerful key to a world of elevated travel and convenience. But remember, the true value of any premium card is only realized if you manage it responsibly, paying your balance in full to avoid interest charges that negate your hard-earned perks.</p>
          </section>

          <section className={`${styles.reviewSection} ${styles.finalCtaSection}`}>
            <h2>Ready to elevate your travels with the {reviewDataNew.cardName}?</h2>
            <p>If the premium benefits and credits align with your travel and spending habits, this card could unlock significant value.</p>
            <div className={styles.ctaButtons}>
              <a href={reviewDataNew.applyLink} className={`${styles.btn} ${styles.btnApply} ${styles.btnLarge}`} target="_blank" rel="noopener noreferrer sponsored" title={`Apply for The ${reviewDataNew.cardName} from ${reviewDataNew.issuerName} on the issuer's secure site`}>
                Apply for The Platinum Card®
              </a>
              <a href={reviewDataNew.ratesLink} className={`${styles.btn} ${styles.btnRates} ${styles.btnLarge}`} target="_blank" rel="noopener noreferrer sponsored" title={`See rates and fees for The ${reviewDataNew.cardName} from ${reviewDataNew.issuerName}`}>
                See Rates & Fees
              </a>
            </div>
            <p className={styles.smallPrintTerms}>Terms Apply. Click links for details. Enrollment required for select American Express benefits and offers.</p>
          </section>
        </article>
      </main>

      <div className={styles.stickyCtaContainer}>
        <div className={styles.stickyCtaContent}>
            <span className={styles.stickyCtaText}>The {reviewDataNew.cardName} - ${reviewDataNew.annualFee} Annual Fee.</span>
            <div className={styles.stickyCtaButtons}>
                <a href={reviewDataNew.applyLink} target="_blank" rel="noopener noreferrer sponsored" className={styles.ctaButtonApply}>Apply Now</a>
                <a href={reviewDataNew.ratesLink} target="_blank" rel="noopener noreferrer sponsored" className={styles.ctaButtonLearnMore}>See Rates & Fees</a>
            </div>
        </div>
      </div>
    </>
  );
}