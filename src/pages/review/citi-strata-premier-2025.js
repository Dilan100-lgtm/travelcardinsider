// File: pages/review/citi-strata-premier-2025.js
// IMPORTANT: Review and update all placeholders, especially siteUrl, image paths, affiliate links, author details, and site-specific info.

import React, { useState, useRef, useEffect, useCallback } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/reviews2025.module.css'; // Ensure this CSS module is in your styles folder

// IMPORTANT: Update this to your actual site URL
const siteUrl = 'https://www.yourtravelcardreviewsite.com';

const reviewDataNew = {
  cardName: "Citi Strata Premier℠ Card",
  shortCardName: "Citi Strata Premier",
  issuerName: "Citi",
  issuerLogoUrl: "/images/issuer-logo-citi.svg", // IMPORTANT: Update with actual Citi logo path
  welcomeOfferHeadline: "60,000 Bonus Pts", // Based on "60,000 points for a $4,000 spend in 3 months"
  title: "Citi Strata Premier℠ Review 2025: Does It Truly Elevate Your Travel Game?",
  description: "This 2025 review dissects the Citi Strata Premier℠ Card for US travelers. Explore its $95 fee, 10X ThankYou® Points on CitiTravel.com, 3X everyday categories, $100 hotel credit, and reinstated travel protections. Is it a stronger pick for your wallet?",
  keywords: [
    "Citi Strata Premier review 2025",
    "Citi ThankYou Rewards",
    "travel rewards credit card",
    "$95 annual fee card",
    "Citi travel portal",
    "Citi Strata Premier benefits",
    "Citi credit card review",
    "EV charging rewards"
  ],
  author: { // IMPORTANT: Update with your actual author details or use from Amex example if intended
      name: 'Dilan Madushanka', // Placeholder from Amex example
      title: 'Founder & Lead Editor', // Placeholder from Amex example
      imageUrl: '/WhatsApp Image 2025-05-12 at 4.09.58 PM.jpeg', // Placeholder from Amex example
      imageWidth: 40, // Placeholder from Amex example
      imageHeight: 40, // Placeholder from Amex example
      tooltipImageUrl: '/WhatsApp Image 2025-05-12 at 4.09.58 PM.jpeg', // Placeholder from Amex example
      tooltipImageWidth: 60, // Placeholder from Amex example
      tooltipImageHeight: 60, // Placeholder from Amex example
      expertise: [ // Placeholder from Amex example, update for Citi Strata Premier context
          'Mid-Tier Credit Cards',
          'Travel Rewards Programs',
          'Citi ThankYou Points',
          'Maximizing Card Benefits',
          'Credit Card Analysis'
      ],
      bioSnippet: 'Dilan Madushanka is the founder and lead editor of TravelCardInsider.com, dedicated to demystifying credit cards and uncovering their real-world value for smarter travel.', // Placeholder from Amex example
      fullBioLink: '/author/dilan-madushanka', // Placeholder from Amex example
      socialLinks: { // Placeholder from Amex example
          linkedin: 'https://www.linkedin.com/in/dilan-madushanka-b65293365',
          twitter: 'https://x.com/team_dilan',
          email: 'team@travelcardinsider.com'
      }
  },
  siteName: "Your Travel Card Review Site", // IMPORTANT: Update this
  pagePath: "/review/citi-strata-premier-2025",
  imageUrl: "/images/citi-strata-premier-hero.webp", // IMPORTANT: Update with an actual image path for Citi Strata Premier
  heroImageObjectPosition: "center center", // Control image focus here, e.g., "center 30%"
  imageWidth: 1600, // Recommended image width
  imageHeight: 900, // Recommended image height
  siteLogoUrl: "/images/logo.png", // IMPORTANT: Update this
  publishDate: "2025-05-28", // IMPORTANT: Update with actual publish date
  updateDate: "2025-06-01", // IMPORTANT: Update with actual update date (e.g., today's date)
  ratingValue: 4.4, // Based on positive review tone, adjust as needed
  annualFee: 95,
  applyLink: "https://www.yourlink.com/apply-citi-strata-premier", // IMPORTANT: Update this with your affiliate link
  learnMoreLink: "/cards/citi-strata-premier-details", // IMPORTANT: Update if you have a details page
  
  // Official Links for citations
  thankYouRewardsProgramLink: "https://www.thankyou.com/",
  guideToBenefitsLink: "https://www.citi.com/credit-cards/citi-strata-premier-credit-card", // Main card page, benefits guide usually linked
  thankYouPartnersListLink: "https://www.thankyou.com/partnerProgramsListing.htm",
  mastercardWorldEliteBenefitsLink: "https://www.mastercard.com/content/mastercardcom/us/en/personal/find-a-card/world-elite-mastercard-credit.html",
  officialCardAgreementLink: "https://www.citi.com/credit-cards/compare-credit-cards/assets/pdf/citi-strata-premier-cardmember-agreement.pdf",
  // Use officialCardAgreementLink also for general ratesLink if specific one isn't different
  ratesLink: "https://www.citi.com/credit-cards/compare-credit-cards/assets/pdf/citi-strata-premier-cardmember-agreement.pdf",


  h1Content: "Citi Strata Premier℠ Review (2025): A $95 Powerhouse?", // Adjusted for conciseness
  heroH1Content: "Citi Strata Premier℠ 2025: Does It Truly Elevate Your Travel Game?", // From review text
  reviewBody: "This 2025 review dissects the Strata Premier℠ for US travelers to see if it’s a stronger pick for your wallet.", // From review text
  sku: "CITI-STRATA-PREMIER-TCI-2025",
  mpn: "CITISTRATAPREMIER",
  brandName: "Citi Strata Premier",
  credits: [ // Citi Strata Premier has one primary credit mentioned
    { id: "hotel", name: "$100 Annual Hotel Credit", frequency: "Annual", details: "For a single portal-booked hotel stay of $500+ (pre-tax) via CitiTravel.com.", icon: "/icons/credit-hotel.svg" } // IMPORTANT: Create/update icon path if using icons like Amex example
  ]
};

const pageUrlFull = `${siteUrl}${reviewDataNew.pagePath}`;

const structuredData = { // Based on Amex example, adapted for Citi
  "@context": "https://schema.org",
  "@type": "Review",
  "itemReviewed": {
    "@type": "FinancialProduct", // More specific than "Product"
    "name": reviewDataNew.cardName,
    "brand": { "@type": "Brand", "name": reviewDataNew.issuerName }, // Issuer as brand
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
        "category": "CreditCard",
        "areaServed": "US",
        "eligibleCustomerType": "https://schema.org/Consumer",
        "seller": { "@type": "Organization", name: reviewDataNew.issuerName }
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": reviewDataNew.ratingValue.toString(),
      "bestRating": "5",
      "worstRating": "1",
      "reviewCount": "1" // IMPORTANT: Update if you aggregate reviews or this isn't the first
    },
    "feesAndCommissionsSpecification": reviewDataNew.ratesLink,
    "interestRate": "Refer to issuer's terms and conditions"
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

const TocLinks = [ // Based on the latest review text structure
  { href: "#introduction", label: "Introduction" },
  { href: "#what-it-packs", label: "What It Packs (Features)" },
  { href: "#whats-new", label: "What’s New & Better?" },
  { href: "#making-points-work", label: "Making Points Work" },
  { href: "#travel-safety-net", label: "Travel Safety Net" },
  { href: "#world-elite-benefits", label: "World Elite Benefits" },
  { href: "#cardholder-feedback", label: "Cardholder Feedback" },
  { href: "#advisors-angle", label: "Advisor's Angle" },
  { href: "#final-take", label: "Final Take (Conclusion)" },
];

export default function CitiStrataPremierReview2025() {
  // Hooks for author tooltip, sticky nav, active section are from Amex example
  const authorRef = useRef(null);
  const authorTooltipRef = useRef(null);
  const [showAuthorBioTooltip, setShowAuthorBioTooltip] = useState(false);

  const [activeSection, setActiveSection] = useState('');
  const [showStickyNav, setShowStickyNav] = useState(false);
  const stickyNavRef = useRef(null);

  // Callbacks and useEffect for author tooltip functionality
  const handleAuthorMouseEnter = useCallback(() => { if (authorRef.current?.tooltipTimeoutId) clearTimeout(authorRef.current.tooltipTimeoutId); setShowAuthorBioTooltip(true); }, []);
  const handleAuthorMouseLeave = useCallback(() => { const timerId = setTimeout(() => { if (authorRef.current && authorTooltipRef.current) { const isHoveringTrigger = authorRef.current.matches(':hover'); const isHoveringTooltip = authorTooltipRef.current.matches(':hover'); const isFocusWithinTrigger = authorRef.current.contains(document.activeElement); const isFocusWithinTooltip = authorTooltipRef.current.contains(document.activeElement); if (!isHoveringTrigger && !isHoveringTooltip && !isFocusWithinTrigger && !isFocusWithinTooltip) setShowAuthorBioTooltip(false); } else if (!authorRef.current?.matches(':hover') && !authorTooltipRef.current?.matches(':hover')) setShowAuthorBioTooltip(false); }, 150); if (authorRef.current) authorRef.current.tooltipTimeoutId = timerId; }, [authorRef, authorTooltipRef]);
  const handleTooltipMouseEnter = useCallback(() => { if (authorRef.current?.tooltipTimeoutId) clearTimeout(authorRef.current.tooltipTimeoutId); }, []);

  useEffect(() => {
    function handleClickOutside(event) { if (showAuthorBioTooltip && authorRef.current && !authorRef.current.contains(event.target) && authorTooltipRef.current && !authorTooltipRef.current.contains(event.target)) setShowAuthorBioTooltip(false); }
    if (showAuthorBioTooltip) document.addEventListener("mousedown", handleClickOutside); else document.removeEventListener("mousedown", handleClickOutside);
    return () => { document.removeEventListener("mousedown", handleClickOutside); if(authorRef.current?.tooltipTimeoutId) clearTimeout(authorRef.current.tooltipTimeoutId); };
  }, [showAuthorBioTooltip, authorRef, authorTooltipRef]);

  // useEffect for IntersectionObserver and sticky nav scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -80% 0px", threshold: 0 } // Adjust rootMargin as needed
    );

    const sections = TocLinks.map(link => document.querySelector(link.href));
    sections.forEach(section => {
      if (section) observer.observe(section);
    });

    const handleScroll = () => {
      if (window.scrollY > 200) { // Show sticky nav after 200px scroll
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
  }, []); // Empty dependency array ensures this runs only on mount and unmount

  const formattedUpdateDate = new Date(reviewDataNew.updateDate).toLocaleDateString('en-US', { month: 'long', year: 'numeric' });

  return (
    <>
      <Head> {/* SEO metadata from reviewDataNew, structure from Amex example */}
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
        <meta property="article:publisher" content={`https://www.facebook.com/yourtravelcardinsiderprofile`} /> {/* IMPORTANT: Update FB profile */}
        <meta property="article:published_time" content={reviewDataNew.publishDate} />
        <meta property="article:modified_time" content={reviewDataNew.updateDate} />
        <meta property="article:author" content={reviewDataNew.author.name} />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@YourSiteTwitterHandle" /> {/* IMPORTANT: Update Twitter handle */}
        <meta name="twitter:title" content={`${reviewDataNew.cardName} Review (2025) | Is the $${reviewDataNew.annualFee} Fee Worth It?`} /> {/* Tailored Twitter title */}
        <meta name="twitter:description" content={`Our 2025 Citi Strata Premier review: $${reviewDataNew.annualFee} fee, ThankYou® Points, travel credits, and more.`} /> {/* Tailored Twitter description */}
        <meta name="twitter:image" content={`${siteUrl}${reviewDataNew.imageUrl}`} />
        <meta name="twitter:creator" content={reviewDataNew.author.socialLinks.twitter ? reviewDataNew.author.socialLinks.twitter.replace('https://x.com/', '@') : '@AuthorTwitterHandle'} /> {/* IMPORTANT: Update Author Twitter handle */}

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

      {/* Sticky Table of Contents Navigation */}
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

      {/* Hero Image Section */}
      <div className={styles.heroImageContainer}>
        <Image
          src={reviewDataNew.imageUrl}
          alt={`${reviewDataNew.cardName} from ${reviewDataNew.issuerName} - travel rewards review`}
          width={reviewDataNew.imageWidth}
          height={reviewDataNew.imageHeight}
          className={styles.heroImage}
          priority
          style={{ objectPosition: reviewDataNew.heroImageObjectPosition || "center center" }} // Corrected objectPosition usage
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
                           {reviewDataNew.author.socialLinks && ( <div className={styles.authorTooltipSocials}>
                                {reviewDataNew.author.socialLinks.linkedin && ( <a href={reviewDataNew.author.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`${reviewDataNew.author.name} on LinkedIn`} className={styles.socialIconLink}><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg></a>)}
                                {reviewDataNew.author.socialLinks.twitter && ( <a href={reviewDataNew.author.socialLinks.twitter} target="_blank" rel="noopener noreferrer" aria-label={`${reviewDataNew.author.name} on Twitter`} className={styles.socialIconLink}><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-.422.724-.665 1.56-.665 2.452 0 1.697.864 3.198 2.18 4.078-.8-.025-1.555-.247-2.227-.616v.054c0 2.37 1.683 4.333 3.91 4.78-.426.116-.874.174-1.337.174-.31 0-.611-.03-.904-.085.622 1.936 2.421 3.338 4.553 3.377-1.672 1.309-3.781 2.088-6.072 2.088-.394 0-.784-.023-1.169-.069 2.16 1.389 4.723 2.202 7.482 2.202 8.979 0 13.897-7.446 13.897-13.898 0-.21 0-.42-.015-.63.953-.689 1.778-1.56 2.433-2.525z"/></svg></a>)}
                                {reviewDataNew.author.socialLinks.email && ( <a href={`mailto:${reviewDataNew.author.socialLinks.email}`} aria-label={`Email ${reviewDataNew.author.name}`} className={styles.socialIconLink}><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"/></svg></a>)}
                            </div>)}
                    </div>
                )}
            </div>

            <p className={styles.reviewDisclaimer}>
              We may receive compensation when you click on links to certain credit card products
              on our site. However, our recommendations remain our own, and offers are subject to
              change. Always verify details with the official issuer. Terms apply to credit card benefits and offers.
              {/* Citi specific: "Enrollment may be required for select Citi benefits and offers." - confirm if needed */}
            </p>
          </header>

          {/* In-Page Table of Contents */}
          <nav className={styles.reviewToc}>
            <h2>In this review:</h2>
            <ol>
              {TocLinks.map(link => (
                <li key={link.href}><a href={link.href}>{link.label}</a></li>
              ))}
            </ol>
          </nav>

          {/* --- Review Content Sections --- */}

          <section id="introduction" className={styles.reviewSection}>
            <h2>I. Introduction</h2>
            <p>Travelers are constantly seeking smarter reward strategies. Citi has refreshed a key offering: the Citi Premier® is now the {reviewDataNew.cardName}. But is this a genuine step up, or just a new name for an old favorite? This 2025 review dissects the Strata Premier℠ for US travelers to see if it’s a stronger pick for your wallet.</p>
            <p>The "Strata Premier" name, while keeping the ${reviewDataNew.annualFee} annual fee, suggests refinement. Citi may be building a "Strata" card family (<a href={reviewDataNew.thankYouRewardsProgramLink} target="_blank" rel="noopener noreferrer sponsored">Citi Official Website - ThankYou Rewards Program</a>), but this review focuses on the {reviewDataNew.cardName}.</p>
          </section>

          <section id="what-it-packs" className={styles.reviewSection}>
            <h2>II. What the Strata Premier℠ Packs: More Than Just a Fee</h2>
            <p>The {reviewDataNew.cardName} sticks to its accessible ${reviewDataNew.annualFee} annual fee while aiming to deliver significant value. New cardholders often find a hefty ThankYou® Points welcome bonus after meeting an initial spend (for instance, 60,000 points for a $4,000 spend in 3 months – but <a href={reviewDataNew.applyLink} target="_blank" rel="noopener noreferrer sponsored">always check current offers</a>). You'll generally want a "Good" to "Excellent" credit score (typically 670-850) to apply.</p>
            <p>When it comes to earning, the card offers a powerful mix: a whopping <strong>10X ThankYou® Points</strong> on hotels, car rentals, and attractions booked through CitiTravel.com, and a solid <strong>3X points</strong> in practical everyday categories like air travel, other hotel purchases (even direct bookings), restaurants, supermarkets, gas stations, and even EV charging. For everything else, it’s a standard 1X point. Add to this a <strong>$100 annual hotel credit</strong> (for a single portal-booked stay of $500+ pre-tax) and <strong>no foreign transaction fees</strong> – crucial for international adventures – and you have a compelling package. The main catch? Those top-tier 10X points and the hotel credit are tied to using Citi's travel portal, a key consideration if you prioritize direct bookings for loyalty or price.</p>
          </section>
          
          {/* Call to Action Section - Placed after core features */}
          <section id="cta-citi-strata-premier-1" className={styles.ctaSection}>
              <h2>Interested in the <b>{reviewDataNew.cardName}</b>?</h2>
              <p>Explore its earning potential and travel benefits.</p>
              <div className={styles.ctaButtons}>
                <a href={reviewDataNew.applyLink} className={`${styles.btn} ${styles.btnApply}`} title={`Apply for the ${reviewDataNew.cardName} on Citi's secure site`} target="_blank" rel="noopener noreferrer sponsored">Apply Now</a>
                <a href={reviewDataNew.ratesLink} className={`${styles.btn} ${styles.btnRates}`} title={`See rates and fees for the ${reviewDataNew.cardName}`} target="_blank" rel="noopener noreferrer sponsored">See Rates & Fees</a>
              </div>
          </section>

          <section id="whats-new" className={styles.reviewSection}>
            <h2>III. Premier vs. Strata Premier: What’s New and Better?</h2>
            <p>Compared to the old US Citi Premier®, the Strata Premier brings some familiar features but also key enhancements. The ${reviewDataNew.annualFee} fee, the ThankYou® Rewards ecosystem, many core 3X categories, and the $100 hotel credit are all carried over.</p>
            <p>But here’s where the Strata Premier pulls ahead:</p>
            <ul className={styles.featureList}>
              <li>EV Charging Stations now earn that valuable 3X.</li>
              <li>The impressive 10X bonus for bookings on CitiTravel.com is now an ongoing feature.</li>
              <li>Perhaps most importantly, a suite of crucial travel protections has been reinstated. This includes Trip Cancellation/Interruption, Trip Delay, Lost/Damaged Luggage coverage, and an Auto Rental Collision Damage Waiver (CDW) (<a href={reviewDataNew.guideToBenefitsLink} target="_blank" rel="noopener noreferrer">Citi Strata Premier Guide to Benefits</a>). This addresses a major shortcoming of its predecessor.</li>
            </ul>
            <p>For the US market, there are no glaring downgrades. The Strata Premier truly is a stronger card than the one it replaced, especially with the return of those travel protections for the same ${reviewDataNew.annualFee} annual fee.</p>
          </section>

          <section id="making-points-work" className={styles.reviewSection}>
            <h2>IV. Making Points Work: The Strata Premier's Value Sweet Spots</h2>
            <h3>Earning Smart:</h3>
            <p>The best strategy involves aligning your regular spending with those 3X categories – think groceries, gas, and dining – while strategically using the 3X on flights and considering the 10X portal bonus for hotels and cars if it fits your travel plans. Your points are unlimited and won’t expire as long as your account remains open and in good standing.</p>
            <h3>Redeeming Your Hard-Earned Points:</h3>
            <ul className={styles.featureList}>
              <li><strong>CitiTravel.com:</strong> Offers straightforward redemptions, typically at 1 cent per point for travel bookings or gift cards.</li>
              <li><strong>Transfer to Travel Partners:</strong> This is often where you'll find the highest potential value. Key airline partners like JetBlue, Air France-KLM Flying Blue, and Singapore Airlines can offer outsized returns. For hotel stays, transferring points to Choice Privileges (often at a 1 ThankYou Point to 2 Choice Points ratio) can be an excellent move (<a href={reviewDataNew.thankYouPartnersListLink} target="_blank" rel="noopener noreferrer sponsored">Citi ThankYou Rewards Transfer Partners List</a>).
                <ul className={styles.nestedList}>
                    <li><strong>Quick Tip:</strong> Transferring 80,000 points to an airline partner during a 25% bonus event could boost them to 100,000 miles. That might be enough for flights that would have cost far more than the $800 value you’d get redeeming directly through the portal.</li>
                </ul>
              </li>
            </ul>
            <h3>The $100 Hotel Credit Decoded:</h3>
            <p>This credit can effectively cover most of the annual fee if you use it for a portal-booked hotel stay of $500 or more. It’s particularly useful for independent hotels where you're not chasing specific brand loyalty. Just remember, booking through third-party portals like CitiTravel.com usually means you won't earn points or elite night credits directly with the hotel's own program. Always compare the final price after the credit with booking direct to ensure you’re getting a genuine deal.</p>
            <p>The card definitely nudges you towards using CitiTravel.com for its best perks, a factor to weigh carefully against the benefits of direct bookings.</p>
          </section>

          <section id="travel-safety-net" className={styles.reviewSection}>
            <h2>V. Your Travel Safety Net: Understanding the Protections</h2>
            <p>The return of travel protections adds significant peace of mind:</p>
            <ul className={styles.featureList}>
              <li><strong>Rental Car Coverage (CDW):</strong> Offers secondary coverage in the US (primary abroad).</li>
              <li><strong>Trip Cancellation/Interruption:</strong> Can reimburse non-refundable costs for covered reasons.</li>
              <li><strong>Trip Delay:</strong> May cover expenses for significant, covered travel delays.</li>
              <li><strong>Lost/Damaged Luggage:</strong> Offers reimbursement if a carrier mishandles your bags.</li>
            </ul>
            <p>For full details and exclusions, always refer to the official <a href={reviewDataNew.guideToBenefitsLink} target="_blank" rel="noopener noreferrer">Guide to Benefits</a>.</p>
          </section>

          <section id="world-elite-benefits" className={styles.reviewSection}>
            <h2>VI. Added Shine: World Elite Mastercard® Benefits</h2>
            <p>As a World Elite Mastercard®, the Strata Premier also comes with additional perks from Mastercard. These can include things like potential Lyft credits, access to luxury hotel benefits, a ShopRunner membership, and ID Theft Protection™ (<a href={reviewDataNew.mastercardWorldEliteBenefitsLink} target="_blank" rel="noopener noreferrer sponsored">Mastercard World Elite Benefits Overview</a>). While nice, these are fairly standard for this tier of Mastercard; the core Citi-provided benefits are what truly define this card's value.</p>
          </section>

          <section id="cardholder-feedback" className={styles.reviewSection}>
            <h2>VII. From the Horse's Mouth: Real Cardholder Feedback</h2>
            <div className={styles.infoBox}> {/* Using a simple div, can be styled further in CSS */}
                <p><strong>The Good:</strong> Many users praise the card's (and its predecessor's) solid earning rates and valuable international transfer partners, especially for a ${reviewDataNew.annualFee} fee. As Reddit user "techtrashbrogrammer" put it, the similar Citi Premier was "underrated."</p>
                <p><strong>The Not-So-Good:</strong> It’s not always smooth sailing. Some cardholders, like "Livid_Ad_300," have reported frustrating experiences with the Strata Premier frequently flagging legitimate purchases as fraudulent while traveling – even after setting travel notices.</p>
                <p><strong>The Reality:</strong> Experiences naturally vary. Many others report good earnings and have successfully redeemed points for significant travel without such hitches.</p>
            </div>
            <p style={{marginTop: '1rem'}}>While the reward structure is undoubtedly attractive, these anecdotal operational issues with fraud alerts are worth noting.</p>
          </section>

          <section id="advisors-angle" className={styles.reviewSection}>
            <h2>VIII. The Advisor's Angle: Is Strata Premier Your Ideal Travel Partner?</h2>
            <p>So, who gets the most from the {reviewDataNew.cardName}? It truly depends on your spending habits, travel style, and how you prefer to manage rewards.</p>
            <div className={styles.prosConsContainer}> {/* Structure from Amex example */}
              <div className={styles.prosSection}>
                <h3>This Card Could Be a Great Fit If You:</h3>
                <ul>
                  <li><span className={styles.bulletIcon}>👍</span>Are an "Everyday Rewards Maximizer" whose spending naturally hits those 3X categories like groceries, dining, and gas/EV.</li>
                  <li><span className={styles.bulletIcon}>👍</span>Are an "International Rewards Explorer" comfortable using airline alliances and transferring points to partners like Flying Blue or KrisFlyer.</li>
                  <li><span className={styles.bulletIcon}>👍</span>Are a "Portal Power-User" who doesn't mind booking through CitiTravel.com to maximize the 10X points and use the hotel credit.</li>
                  <li><span className={styles.bulletIcon}>👍</span>Are a "Safety-First Traveler" who values comprehensive travel insurance for a modest annual fee.</li>
                </ul>
              </div>
              <div className={styles.consSection}>
                <h3>But, You Might Want to Look Elsewhere If You:</h3>
                <ul>
                  <li><span className={styles.bulletIcon}>👎</span>Consider airport lounge access a must-have.</li>
                  <li><span className={styles.bulletIcon}>👎</span>Prefer the simplicity of straightforward cash back.</li>
                  <li><span className={styles.bulletIcon}>👎</span>Are fiercely loyal to US airlines not well-represented by Citi's direct transfer partners (and aren't keen on alliance bookings).</li>
                  <li><span className={styles.bulletIcon}>👎</span>Prioritize earning elite status and points directly with major hotel chains.</li>
                  <li><span className={styles.bulletIcon}>👎</span>Are particularly wary of potential hassles with fraud alert systems.</li>
                </ul>
              </div>
            </div>
            <h3 style={{marginTop: '2rem'}}>Meet Alex and Ben:</h3>
            <p>Alex travels internationally twice a year for work and pleasure, recently got an EV, and genuinely enjoys the puzzle of finding great award flight redemptions using airline partners. For Alex, the Strata Premier is a powerhouse, aligning perfectly with spending habits and redemption goals, making the $100 hotel credit easy to use for an airport hotel. Ben, on the other hand, takes one big family road trip each year and occasionally flies a specific domestic airline. Ben values simplicity and predictability over chasing maximum point values, so a straightforward 2% cash-back card is a better, less stressful fit for his financial style.</p>
            <p>The {reviewDataNew.cardName} truly shines for those willing to engage with its features. For ${reviewDataNew.annualFee}, it offers a robust package, but its full value is unlocked when its ecosystem aligns with your needs and you don't encounter the operational snags some users have mentioned.</p>
          </section>

          <section id="final-take" className={styles.reviewSection}>
            <h2>IX. So, Does Citi’s Refresh Actually Deliver for 2025 Travelers?</h2>
            <p>The {reviewDataNew.cardName} has stepped into the spotlight, clearly aiming to offer a more compelling package.</p>
            <h3>Its Strong Suits:</h3>
            <p>You're looking at excellent 3X ThankYou® Points on a broad and practical range of everyday spending (including those crucial supermarket, dining, gas, and now EV charging categories), plus air travel and other hotel purchases. The chance to earn a massive 10X points on hotels, car rentals, and attractions booked via CitiTravel.com is a big draw for portal users. The $100 annual hotel credit can easily offset the ${reviewDataNew.annualFee} annual fee for many. And, most significantly, the card now boasts a much-improved suite of travel protections. With no foreign transaction fees and some valuable international airline transfer partners (<a href={reviewDataNew.officialCardAgreementLink} target="_blank" rel="noopener noreferrer sponsored">Official Citi Card Agreement</a>), it’s a solid contender.</p>
            <h3>Points to Ponder:</h3>
            <p>The best rewards (that 10X earning and the hotel credit) are firmly tied to using CitiTravel.com. While international airline partners are a strength, direct high-value US airline transfer options are more limited (JetBlue being the main one). Some user reports highlight potentially disruptive fraud alerts. And, of course, there's no airport lounge access.</p>
            <h3>The Big Question: A Real Improvement?</h3>
            <p><strong>Absolutely.</strong> When you stack it up against its immediate US predecessor, the {reviewDataNew.cardName} is, without question, a better card. The reintroduction of comprehensive travel insurance alone marks a significant upgrade, addressing a major past weakness. Add the now-permanent 10X portal earning and the modern touch of including EV charging – all while keeping the annual fee at ${reviewDataNew.annualFee} – and the Strata Premier clearly emerges as a more complete and valuable travel companion on paper.</p>
            <p>However, "better on paper" doesn't always translate to the "best for everyone." The true worth of the {reviewDataNew.cardName} in 2025 really hinges on your individual travel style, your willingness to navigate its ecosystem (especially the CitiTravel.com portal and ThankYou® transfer partners), and, critically, a smooth and reliable experience when you're actually using the card. For US travelers whose spending aligns with the card’s strengths, who value its specific transfer partners and the hotel credit, and who want a good set of travel protections without a premium price tag, the {reviewDataNew.cardName} is indeed a very appealing upgrade and a formidable player in the mid-tier travel card field. It rewards those who are willing to learn its ins and outs to unlock truly valuable travel experiences.</p>
          </section>

          {/* Final Call to Action Section */}
          <section className={`${styles.reviewSection} ${styles.finalCtaSection}`}>
            <h2>Ready to elevate your travels with the {reviewDataNew.cardName}?</h2>
            <p>If the premium benefits and credits align with your travel and spending habits, this card could unlock significant value.</p>
            <div className={styles.ctaButtons}>
              <a href={reviewDataNew.applyLink} className={`${styles.btn} ${styles.btnApply} ${styles.btnLarge}`} target="_blank" rel="noopener noreferrer sponsored" title={`Apply for The ${reviewDataNew.cardName} from ${reviewDataNew.issuerName} on the issuer's secure site`}>
                Apply for the {reviewDataNew.shortCardName}
              </a>
              <a href={reviewDataNew.ratesLink} className={`${styles.btn} ${styles.btnRates} ${styles.btnLarge}`} target="_blank" rel="noopener noreferrer sponsored" title={`See rates and fees for The ${reviewDataNew.cardName} from ${reviewDataNew.issuerName}`}>
                See Rates & Fees
              </a>
            </div>
            <p className={styles.smallPrintTerms}>Terms Apply. Click links for details. Always check the issuer's official website for the most current information, terms, and conditions.</p>
          </section>
        </article>
      </main>

      {/* Sticky Bottom Call to Action */}
      <div className={styles.stickyCtaContainer}>
        <div className={styles.stickyCtaContent}>
            <span className={styles.stickyCtaText}>{reviewDataNew.cardName} - ${reviewDataNew.annualFee} Annual Fee.</span>
            <div className={styles.stickyCtaButtons}>
                <a href={reviewDataNew.applyLink} target="_blank" rel="noopener noreferrer sponsored" className={`${styles.btn} ${styles.ctaButtonApply}`}>Apply Now</a>
                <a href={reviewDataNew.ratesLink} target="_blank" rel="noopener noreferrer sponsored" className={`${styles.btn} ${styles.ctaButtonLearnMore}`}>See Rates & Fees</a>
            </div>
        </div>
      </div>
    </>
  );
}