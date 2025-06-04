// File: pages/review/capital-one-venture-x-business-2025.js
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
  cardName: "Capital One Venture X Business Card",
  shortCardName: "Venture X Business",
  issuerName: "Capital One",
  issuerLogoUrl: "/images/issuer-logos/capital-one-logo.svg", // IMPORTANT: Update with actual Capital One logo path
  welcomeOfferHeadline: "Up to 350K Bonus Miles", // Adjusted based on content
  title: "Capital One Venture X Business Review 2025: Is the 350K-Mile Bonus Too Good to Ignore?",
  description: "Our 2025 review of the Capital One Venture X Business card. Explore its 350K bonus miles offer, $395 annual fee, travel credits, lounge access, and robust earning rates for US businesses.",
  keywords: [
    "Capital One Venture X Business review 2025",
    "Capital One business credit card",
    "travel rewards business card",
    "$395 annual fee card",
    "Capital One Travel portal",
    "Venture X Business benefits",
    "Capital One miles",
    "business travel perks"
  ],
  author: { // Reusing structure from your example, update as needed
      name: 'Dilan Madushanka',
      title: 'Founder & Lead Editor',
      imageUrl: '/WhatsApp Image 2025-05-12 at 4.09.58 PM.jpeg', // Placeholder, update
      imageWidth: 40,
      imageHeight: 40,
      tooltipImageUrl: '/WhatsApp Image 2025-05-12 at 4.09.58 PM.jpeg', // Placeholder, update
      tooltipImageWidth: 60,
      tooltipImageHeight: 60,
      expertise: [
          'Business Credit Cards',
          'Premium Travel Rewards',
          'Capital One Miles Program',
          'Maximizing Business Expenses',
          'Airline & Hotel Transfer Partners'
      ],
      bioSnippet: 'Dilan Madushanka is the founder and lead editor of TravelCardInsider.com, dedicated to demystifying credit cards and uncovering their real-world value for smarter travel.',
      fullBioLink: '/author/dilan-madushanka', // Assuming this path exists
      socialLinks: {
          linkedin: 'https://www.linkedin.com/in/dilan-madushanka-b65293365',
          twitter: 'https://x.com/team_dilan', // Update with your site's Twitter
          email: 'team@travelcardinsider.com'
      }
  },
  siteName: "TravelCardInsider.com", // Updated to your site name
  pagePath: "/review/capital-one-venture-x-business-2025",
  imageUrl: "/bruce-mars-S8ffHr_dxHo-unsplash (1).webp", // IMPORTANT: Update with actual hero image path
  cardImageUrl: "/vxb-card-alt-at-2x.avif", // IMPORTANT: Update with actual card face image path
  heroImageObjectPosition: "center center",
  imageWidth: 1600,
  imageHeight: 900,
  siteLogoUrl: "/images/logo.png", // IMPORTANT: Update with your site logo path
  publishDate: "2025-05-20", // Example date
  updateDate: "2025-06-04", // Current date or last review update
  ratingValue: 4.3, // Example Rating: Out of 5, based on review tone
  annualFee: 395,
  applyLink: "http://capitalone.com/small-business/credit-cards/venture-x-business/", // Official Link
  learnMoreLink: "/cards/capital-one-venture-x-business", // Example internal learn more link
  
  // Specific links for Venture X Business
  officialCardPageLink: "https://www.capitalone.com/small-business/credit-cards/venture-x-business/",
  benefitsGuideLink: "https://www.capitalone.com/credit-cards/benefits-guide/", // General guide, specific may vary
  milesTransferPartnersListLink: "https://www.capitalone.com/learn-grow/money-management/venture-miles-transfer-partnerships/",
  loungeAccessPolicyLink: "https://www.capitalone.com/learn-grow/more-than-money/airport-lounge-access/",
  tsaPrecheckLink: "https://www.tsa.gov/precheck",
  smallBusinessSpotlightLink_Quantious: "https://www.capitalone.com/about/newsroom/small-business-spotlight-quantious/",
  ratesAndFeesLink: "https://www.capitalone.com/small-business/credit-cards/venture-x-business/", // Often same as apply link for details

  h1Content: "Capital One Venture X Business Review (2025): Is the 350K Bonus Worth It?",
  heroH1Content: "Capital One Venture X Business 2025: 350K Miles – Too Good to Ignore?",
  reviewBody: "This 2025 review digs into the Venture X Business card to see if its massive bonus and perks deliver unmatched value for US enterprises.", // Extracted from intro
  sku: "CAP1-VENTUREXBIZ-TCI-2025",
  mpn: "VENTUREXBUSINESS",
  brandName: "Capital One Venture X Business",
  credits: [
    { id: "travel", name: "$300 Annual Travel Credit", frequency: "Annual", details: "Statement credit for bookings via Capital One Travel.", icon: "/icons/credit-travel.svg" }, // IMPORTANT: Update icon path
    { id: "anniversary_miles", name: "10,000 Anniversary Bonus Miles", frequency: "Annual", details: "Awarded each year from first anniversary (worth $100 towards travel).", icon: "/icons/credit-miles.svg" } // IMPORTANT: Update icon path
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
    "image": `${siteUrl}${reviewDataNew.imageUrl}`, // Main hero image for the review
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
        "eligibleCustomerType": "https://schema.org/Organization", // For Business cards
        "seller": { "@type": "Organization", name: reviewDataNew.issuerName }
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": reviewDataNew.ratingValue.toString(),
      "bestRating": "5",
      "worstRating": "1",
      "reviewCount": "1" // Assuming this is the first review version for this schema
    },
    "feesAndCommissionsSpecification": reviewDataNew.ratesAndFeesLink,
    "interestRate": "Refer to issuer's terms and conditions as this is a pay-in-full card"
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
  "image": [`${siteUrl}${reviewDataNew.imageUrl}`] // Array of images, hero image primary
};

const TocLinks = [
  { href: "#introduction", label: "Introduction" },
  { href: "#welcome-bonus", label: "Decoding the Welcome Bonus" },
  { href: "#annual-fee", label: "Understanding the Annual Fee" },
  { href: "#earning-power", label: "Earning Power" },
  { href: "#maximizing-miles", label: "Maximizing Venture X Miles" },
  { href: "#premium-perks", label: "Premium Perks" },
  { href: "#business-features", label: "Business-Focused Features" },
  { href: "#real-world-scenarios", label: "Real-World Scenarios" },
  { href: "#user-testimonials", label: "User Testimonials" },
  { href: "#verdict", label: "The Verdict for US Travelers" },
  { href: "#recommendations", label: "Final Recommendations" },
  { href: "#final-thoughts", label: "Final Thoughts" },
];

export default function CapitalOneVentureXBusinessReview2025() {
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
      if (window.scrollY > 200) { // Show sticky nav after scrolling 200px
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
  const ratingOutOf10 = (reviewDataNew.ratingValue * 2).toFixed(1); // Example for a 10-point scale if needed

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
        {/* IMPORTANT: Update with your actual Facebook page URL */}
        <meta property="article:publisher" content={`https://www.facebook.com/yourtravelcardinsiderprofile`} /> 
        <meta property="article:published_time" content={reviewDataNew.publishDate} />
        <meta property="article:modified_time" content={reviewDataNew.updateDate} />
        <meta property="article:author" content={reviewDataNew.author.name} /> {/* Or a link to author's FB profile if preferred */}

        <meta name="twitter:card" content="summary_large_image" />
        {/* IMPORTANT: Update with your site's Twitter handle */}
        <meta name="twitter:site" content="@TravelCardInsid" /> 
        <meta name="twitter:title" content={`${reviewDataNew.cardName} Review (2025) | Is the $${reviewDataNew.annualFee} Fee Worth It for Businesses?`} />
        <meta name="twitter:description" content={`Our 2025 ${reviewDataNew.shortCardName} review: ${reviewDataNew.welcomeOfferHeadline}, $${reviewDataNew.annualFee} fee, travel credits, and more for US businesses.`} />
        <meta name="twitter:image" content={`${siteUrl}${reviewDataNew.imageUrl}`} />
        <meta name="twitter:creator" content={reviewDataNew.author.socialLinks.twitter ? reviewDataNew.author.socialLinks.twitter.replace('https://x.com/', '@') : '@DilanMadushanka'} />


        <meta name="geo.region" content="US" />
        <meta name="geo.placename" content="United States" />
        <meta name="language" content="en-US" />
        <meta name="distribution" content="US" />
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
          src={reviewDataNew.imageUrl} // Ensure this is a compelling, high-quality image
          alt={`${reviewDataNew.cardName} by ${reviewDataNew.issuerName} - 2025 Review for US Businesses`}
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
             {/* Author Bio - Reusing structure from your example */}
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
            <h2>I. Introduction: The Allure of a Massive Miles Haul for US Business Travelers</h2>
            
            <div className={styles.introCardDetailsContainer}>
              <div className={styles.introCardImage}>
                <Image 
                  src={reviewDataNew.cardImageUrl} 
                  alt={`${reviewDataNew.cardName} card image`} 
                  width={220} // Adjust as per your image aspect ratio
                  height={140} // Adjust as per your image aspect ratio
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

            <p>For US business travelers looking to turn hefty operational costs into valuable travel, the {reviewDataNew.cardName} is making serious waves. Its standout feature? A limited-time welcome offer of up to 350,000 bonus miles – a figure designed to grab attention in the crowded premium business card space (see <a href={reviewDataNew.officialCardPageLink} target="_blank" rel="noopener noreferrer sponsored">Capital One Venture X Business Official Offer Details</a>). But this isn't just about a flashy number. For businesses that can strategically meet the spending goals, these miles represent tangible travel opportunities. This review will dig into the 2025 {reviewDataNew.cardName} to see if this massive bonus, and the card itself, truly deliver unmatched value for your US-based enterprise.</p>
          </section>

          <section id="welcome-bonus" className={styles.reviewSection}>
            <h2>II. Decoding the 350,000-Mile Welcome Bonus: A Golden Opportunity or a Stretch?</h2>
            <p>The headline act for the {reviewDataNew.shortCardName} is its impressive up to 350,000-mile welcome bonus, but earning it requires significant spending and a clear understanding of its two-tiered structure.</p>
            <ul className={styles.featureList}>
                <li><strong>Tier 1:</strong> Earn 150,000 bonus miles after spending $30,000 in the first 3 months.</li>
                <li><strong>Tier 2:</strong> Earn an additional 200,000 bonus miles by spending a total of $200,000 (including the initial $30,000) within the first 6 months.</li>
            </ul>
            <p>It's crucial to note this "last chance offer" is slated to end on June 9, 2025, adding urgency. Meeting the full $200,000 spend in six months is a tall order, best suited for businesses with substantial, regular expenses like inventory, advertising, or major operational costs. This card is a "pay-in-full" product, so consistent cash flow to settle the balance each month is essential. While the 350,000 miles (worth $3,500 for travel, or potentially more with transfer partners) are tempting, even the 150,000-mile bonus offers solid value for businesses that can hit the first tier.</p>
          </section>

          <section id="cta-venturex-biz-1" className={styles.ctaSection}>
              <h2>Considering the <b>{reviewDataNew.cardName}</b> for Your Business?</h2>
              <p>Unlock significant travel rewards with its powerful welcome offer and earning rates.</p>
              <div className={styles.ctaButtons}>
                <a href={reviewDataNew.applyLink} className={`${styles.btn} ${styles.btnApply}`} title={`Apply for the ${reviewDataNew.cardName} on Capital One's secure site`} target="_blank" rel="noopener noreferrer sponsored">Apply Now</a>
                <a href={reviewDataNew.ratesAndFeesLink} className={`${styles.btn} ${styles.btnRates}`} title={`See rates and fees for the ${reviewDataNew.cardName}`} target="_blank" rel="noopener noreferrer sponsored">See Rates & Fees</a>
              </div>
          </section>

          <section id="annual-fee" className={styles.reviewSection}>
            <h2>III. The Price of Premium: Understanding the ${reviewDataNew.annualFee} Annual Fee</h2>
            <p>The {reviewDataNew.shortCardName} card carries a ${reviewDataNew.annualFee} annual fee (see <a href={reviewDataNew.benefitsGuideLink} target="_blank" rel="noopener noreferrer sponsored">Capital One Venture X Business Benefits Guide</a>). However, two key benefits effectively offset this:</p>
            <ul className={styles.featureList}>
                <li><strong>$300 Annual Travel Credit:</strong> Applied as a statement credit for bookings through Capital One Travel.</li>
                <li><strong>10,000 Anniversary Bonus Miles:</strong> Awarded each year starting from your first anniversary (worth $100 towards travel).</li>
            </ul>
            <p>Utilize both, and your effective annual fee drops to a -$5, meaning the card essentially pays you to keep it. The main condition is your willingness to use the Capital One Travel portal for at least $300 in bookings. While the portal is competitive, businesses with rigid direct booking policies might find this less appealing.</p>
          </section>

          <section id="earning-power" className={styles.reviewSection}>
            <h2>IV. Earning Power: How Your Business Spending Fuels Your Travels</h2>
            <p>The {reviewDataNew.shortCardName} offers a straightforward and rewarding earning structure:</p>
            <ul className={styles.featureList}>
                <li><strong>Unlimited 2X Miles on Every Purchase:</strong> No caps, no complex categories.</li>
                <li><strong>Accelerated Earnings via Capital One Travel:</strong>
                    <ul className={styles.nestedList}>
                        <li>Unlimited 10X Miles on hotels and rental cars.</li>
                        <li>Unlimited 5X Miles on flights.</li>
                    </ul>
                </li>
            </ul>
            <p>Imagine a business spending $5,000 monthly via Capital One Travel ($2k on flights, $3k on hotels) and $15,000 on other expenses. Monthly earnings: (2,000 x 5X) + (3,000 x 10X) + (15,000 x 2X) = 10,000 + 30,000 + 30,000 = 70,000 miles. Annually, that’s 840,000 miles, not counting the welcome or anniversary bonuses. This showcases the card's potential for businesses that can leverage the portal.</p>
          </section>

          <section id="maximizing-miles" className={styles.reviewSection}>
            <h2>V. Unlocking Value: Maximizing Your Venture X Miles Like a Pro</h2>
            <p>Earning miles is one thing; redeeming them wisely is another. You can redeem miles via the Capital One Travel portal or use Purchase Eraser for travel statement credits, both at 1 cent per mile. However, the real magic often lies in transferring miles to Capital One's 15+ airline and hotel partners (see the <a href={reviewDataNew.milesTransferPartnersListLink} target="_blank" rel="noopener noreferrer">Capital One Miles Transfer Partners List</a>). Many are international carriers but belong to major alliances (Star Alliance, Oneworld, SkyTeam), opening up vast domestic and international options. Popular choices include Air Canada Aeroplan (for United flights), British Airways Executive Club (for American Airlines), and Air France-KLM Flying Blue (for Delta and European trips).</p>
            <p>Think about it: 350,000 miles transferred to a partner like Aeroplan could potentially cover a round-trip business class ticket to Asia, which might cost $5,000-$10,000 out of pocket – far exceeding the $3,500 direct redemption value. This "sweet spot" hunting is where the big bonuses truly shine.</p>
          </section>

          <section id="premium-perks" className={styles.reviewSection}>
            <h2>VI. Beyond the Miles: Premium Perks for the US Business Traveler</h2>
            <p>The {reviewDataNew.shortCardName} isn't just about miles; it's packed with perks:</p>
            <ul className={styles.featureList}>
                <li><strong>$300 Annual Travel Credit & 10,000 Anniversary Miles:</strong> Key to that negative effective annual fee.</li>
                <li><strong>Airport Lounge Access:</strong> Access to Capital One Lounges and over 1,300 Priority Pass lounges.
                    <ul className={styles.nestedList}>
                        <li><strong>Important Note:</strong> Lounge access policies for guests and authorized users are changing effective February 1, 2026. Primary cardholders may need to pay for guests at Capital One Lounges unless a $75,000 annual account spend is met. Authorized users (AUs) can get lounge access for a $125 annual fee per AU, which is an improvement as AUs previously had no access path. For details, refer to the <a href={reviewDataNew.loungeAccessPolicyLink} target="_blank" rel="noopener noreferrer">Capital One Lounge Access Policy</a>.</li>
                    </ul>
                </li>
                <li><strong>Global Entry or TSA PreCheck Credit:</strong> Up to $120 statement credit for the application fee (visit the <a href={reviewDataNew.tsaPrecheckLink} target="_blank" rel="noopener noreferrer">TSA PreCheck Official Site</a>).</li>
                <li><strong>No Foreign Transaction Fees:</strong> Essential for international business.</li>
                <li><strong>Premier Collection:</strong> Access to luxury hotel bookings with potential perks.</li>
                <li><strong>Robust Travel and Purchase Protections:</strong> As a Visa Infinite Business card, it typically includes primary Auto Rental CDW, Lost Luggage Reimbursement, Trip Cancellation/Interruption Insurance, Trip Delay Reimbursement, Travel Accident Insurance, Purchase Security, and Extended Warranty Protection. These offer significant peace of mind and financial safeguards.</li>
            </ul>
          </section>

          <section id="business-features" className={styles.reviewSection}>
            <h2>VII. Business-Focused Features: Streamlining Your Operations</h2>
            <p>This card also understands business needs:</p>
            <ul className={styles.featureList}>
                <li><strong>No Preset Spending Limit (Flexible Spend Capacity):</strong> Adapts to your spending, payment history, and credit profile. Remember, it's a pay-in-full card.</li>
                <li><strong>Free Employee Cards with Spending Controls:</strong> Consolidate spending and set custom limits for employees.</li>
                <li><strong>Virtual Card Numbers:</strong> Enhance security for online purchases.</li>
                <li><strong>Account Management Tools:</strong> Year-end summaries and potential integration with accounting software simplify financial admin.</li>
                <li><strong>Dedicated Business Support:</strong> Access to representatives trained for business accounts.</li>
            </ul>
            <p>These features contribute to smoother operations and better expense management.</p>
          </section>
          
          <section id="real-world-scenarios" className={styles.reviewSection}>
            <h2>VIII. Real-World Scenarios & Anecdotes: Venture X Business in Action</h2>
            <p>Consider Quantious, a fully remote B2B marketing agency. They use their {reviewDataNew.shortCardName} card to fund "Camp Quantious," an annual in-person team retreat, "almost entirely with miles." Founder Lisa Larson-Kelley charges recurring business expenses (subscriptions, software) to the card. She highlights using miles for airport lounges for employees, stating, "it’s something we wouldn't have been able to do otherwise," enhancing travel comfort and team morale. This shows strategic use aligned with company culture and employee well-being.</p>
          </section>

          <section id="user-testimonials" className={styles.reviewSection}>
            <h2>IX. Voices from the Road: Real User Testimonials</h2>
            <p>Direct from a business owner using the card for her team:</p>
            <blockquote className={styles.testimonialBlock}>
                <p>"The company has funded major trip costs almost entirely with miles... After each retreat, we've already earned miles toward the next one... With Capital One, we can book airport lounges to make the travel a little more comfortable for employees when they have long layovers or flight delays, which is something we wouldn't have been able to do otherwise."</p>
                <footer>- Lisa Larson-Kelley, Founder of Quantious (<a href={reviewDataNew.smallBusinessSpotlightLink_Quantious} target="_blank" rel="noopener noreferrer">Source: Capital One Small Business Spotlight</a>)</footer>
            </blockquote>
            <p>This testimonial underscores how businesses can leverage the card's rewards for significant company benefits and employee perks, not just individual travel.</p>
          </section>

          <section id="verdict" className={styles.reviewSection}>
            <h2>X. The Verdict for US Travelers: Is the 350K Bonus a Game-Changer in 2025?</h2>
            <p>So, is the {reviewDataNew.cardName}'s 350,000-mile bonus (expiring June 9, 2025) an unmissable opportunity? It truly depends on your business.</p>
            <h3>Key Strengths:</h3>
            <ul className={styles.prosList}> {/* Using a different style for pros/cons list if available */}
                <li>Potentially massive welcome bonus if you can meet the high spend.</li>
                <li>Effectively negative annual fee when credits are maximized.</li>
                <li>Simple, strong 2X base earning rate, with 5X/10X via Capital One Travel.</li>
                <li>Valuable travel perks like lounge access and insurance.</li>
                <li>Useful business management features.</li>
            </ul>
            <h3>Important Considerations:</h3>
            <ul className={styles.consList}> {/* Using a different style for pros/cons list if available */}
                <li>The $200,000 spend in six months for the full bonus is substantial.</li>
                <li>It's a pay-in-full card, requiring excellent cash flow.</li>
                <li>Maximizing some benefits leans on the Capital One Travel portal.</li>
                <li>Lounge access rules are changing in 2026.</li>
            </ul>
            <p>For businesses with high, consistent spending that align with the card's travel ecosystem, the bonus is indeed a powerful draw. For others, it might be an overreach. The card excels for those who can integrate its high-spend, high-reward structure into their operations.</p>
          </section>

          <section id="recommendations" className={styles.reviewSection}>
            <h2>XI. Final Recommendations: Making the Right Choice for Your Business</h2>
            <div className={styles.prosConsContainer}> {/* Reusing pros/cons container style from example */}
              <div className={styles.prosSection}>
                <h3>This Card Is Likely a Strong Fit For:</h3>
                <ul>
                  <li><span className={styles.bulletIcon}>👍</span>High-Spending US Businesses: Those who can comfortably meet bonus spending thresholds.</li>
                  <li><span className={styles.bulletIcon}>👍</span>Frequent Travelers Using Online Portals: To maximize travel credits and 5X/10X miles.</li>
                  <li><span className={styles.bulletIcon}>👍</span>Organizations Valuing Premium Perks: And are adaptable to the 2026 lounge changes.</li>
                  <li><span className={styles.bulletIcon}>👍</span>Financially Disciplined Companies: Comfortable with a pay-in-full charge card.</li>
                  <li><span className={styles.bulletIcon}>👍</span>Rewards-Savvy Operations: Willing to learn and use transfer partners.</li>
                </ul>
              </div>
              <div className={styles.consSection}>
                <h3>This Card May Not Be Optimal For:</h3>
                <ul>
                  <li><span className={styles.bulletIcon}>👎</span>Businesses with Lower or Unpredictable Spending.</li>
                  <li><span className={styles.bulletIcon}>👎</span>Those Requiring Direct Travel Bookings Exclusively.</li>
                  <li><span className={styles.bulletIcon}>👎</span>Companies Needing to Revolve a Balance.</li>
                  <li><span className={styles.bulletIcon}>👎</span>Businesses Seeking Simpler, No-Frills Rewards.</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="final-thoughts" className={styles.reviewSection}>
            <h2>XII. Final Thoughts</h2>
            <p>The {reviewDataNew.cardName}, with its current hefty bonus, offers a compelling package for the right US business. Assess your spending, cash flow, and travel style carefully. Beyond the bonus, its core features promise ongoing value. However, the evolving benefits landscape means it’s a tool that requires periodic review to ensure it continues to serve your business effectively.</p>
          </section>

          <section className={`${styles.reviewSection} ${styles.finalCtaSection}`}>
            <h2>Ready to Power Your Business Travel with the {reviewDataNew.cardName}?</h2>
            <p>If the robust rewards, travel credits, and premium perks align with your business's spending and travel patterns, this card could be a game-changer.</p>
            <div className={styles.ctaButtons}>
              <a href={reviewDataNew.applyLink} className={`${styles.btn} ${styles.btnApply} ${styles.btnLarge}`} target="_blank" rel="noopener noreferrer sponsored" title={`Apply for The ${reviewDataNew.cardName} from ${reviewDataNew.issuerName} on the issuer's secure site`}>
                Apply for the {reviewDataNew.shortCardName}
              </a>
              <a href={reviewDataNew.ratesAndFeesLink} className={`${styles.btn} ${styles.btnRates} ${styles.btnLarge}`} target="_blank" rel="noopener noreferrer sponsored" title={`See rates and fees for The ${reviewDataNew.cardName} from ${reviewDataNew.issuerName}`}>
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