// File: pages/review/hilton-honors-surpass-card-2025.js

import React, { useState, useRef, useEffect, useCallback } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/reviews2025.module.css'; // Ensure this path is correct

const siteUrl = 'https://www.travelcardinsider.com'; // Your actual site URL

const reviewDataNew = {
  cardName: "Hilton Honors American Express Surpass® Card",
  shortCardName: "Hilton Surpass",
  issuerName: "American Express",
  issuerLogoUrl: "/images/issuer-logo-amex.svg", // IMPORTANT: Update with actual American Express logo path
  welcomeOfferHeadline: "130K Bonus Points", // Example: "130,000 Hilton Honors Bonus Points after meeting spend"
  title: "Hilton Honors Surpass Card Review (2025): Key to Elite Travel?",
  description: "Is the Hilton Honors American Express Surpass® Card ($150 fee) worth it in 2025? Our review covers Gold status, $200 credit, free night reward, and points earning for Hilton loyalists.",
  keywords: [
    "Hilton Honors American Express Surpass Card review 2025",
    "Hilton Surpass card",
    "American Express hotel card",
    "$150 annual fee card",
    "Hilton Honors points",
    "Hilton Gold status",
    "Hilton free night reward",
    "travel rewards credit card US",
    "best hotel credit card"
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
          'Hotel Co-brand Cards',
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
  pagePath: "/review/hilton-honors-surpass-card-2025",
  imageUrl: "/images/hilton-surpass-hero-2025.jpg", // IMPORTANT: Update with a relevant hero image for Hilton Surpass
  heroImageObjectPosition: "center center",
  imageWidth: 1600,
  imageHeight: 900,
  siteLogoUrl: "/images/logo.png", // IMPORTANT: Update
  publishDate: "2025-05-29", // Adjust as needed
  updateDate: "2025-05-29", 
  ratingValue: 4.5, // IMPORTANT: Set your own rating
  annualFee: 150,
  applyLink: "https://www.americanexpress.com/us/credit-cards/card/hilton-honors-surpass/",
  ratesLink: "https://www.americanexpress.com/us/credit-cards/card/hilton-honors-surpass/", // Amex page has "Rates & Fees" links
  learnMoreLink: "/cards/hilton-surpass-card", // IMPORTANT: Create this page or adjust
  h1Content: "Hilton Honors Surpass® Card 2025: In-Depth Review",
  heroH1Content: "Hilton Surpass® Card Review (2025): Maximize Your Hilton Stays?",
  reviewBody: "Our 2025 deep dive into the Amex Hilton Honors Surpass Card. For a $150 fee, does it provide enough value through Gold status, credits, and points for dedicated Hilton travelers?",
  sku: "AMEX-HILTONSURPASS-TCI-2025",
  mpn: "HILTONSURPASSCARD",
  brandName: "Hilton Honors American Express Surpass® Card",
  keyPerks: [
    { id: "goldStatus", name: "Hilton Honors™ Gold Status", details: "Complimentary Gold status with benefits like 80% points bonus on stays, space-available room upgrades, and daily Food & Beverage credit (U.S. hotels) or Continental Breakfast (non-U.S. hotels).", frequency: "Benefit" },
    { id: "hiltonCredit", name: "$200 Annual Hilton Credit", details: "Receive up to $50 in statement credits each quarter for eligible Hilton purchases charged to your Card.", frequency: "Annual (Quarterly)" },
    { id: "freeNightReward", name: "Earnable Free Night Reward", details: "Earn a Free Night Reward from Hilton Honors after you spend $15,000 on eligible purchases on your Card in a calendar year.", frequency: "Benefit (Annual Spend)" },
    { id: "earn12x", name: "12X Hilton Points", details: "For each dollar of eligible purchases charged directly with a hotel or resort within the Hilton portfolio.", frequency: "Benefit" },
    { id: "earn6x", name: "6X Points (U.S. Categories)", details: "At U.S. restaurants, U.S. supermarkets, and U.S. gas stations.", frequency: "Benefit" },
    { id: "earn4x", name: "4X Points (U.S. Online Retail)", details: "On U.S. online retail purchases.", frequency: "Benefit" },
    { id: "noFtF", name: "No Foreign Transaction Fees", details: "Make purchases abroad without incurring foreign transaction fees.", frequency: "Benefit" },
    { id: "diamondPath", name: "Path to Diamond Status", details: "Spend $40,000 on eligible purchases on your Card in a calendar year and get upgraded to Hilton Honors Diamond status.", frequency: "Benefit (Annual Spend)" },
    { id: "nationalStatus", name: "National Car Rental® Status", details: "Enjoy complimentary Emerald Club Executive® status (enrollment in the Emerald Club is required).", frequency: "Benefit" }
  ]
};

const pageUrlFull = `${siteUrl}${reviewDataNew.pagePath}`;

const competitorCardsData = [
  {
    id: "hiltonNoFee",
    name: "Hilton Honors American Express Card (No Annual Fee)",
    annualFee: "$0",
    keyFeaturesNotes: "Offers basic Silver status and fewer perks. Suited for very infrequent Hilton guests who want to earn some points without an annual commitment.",
    comparisonToHiltonSurpass: "The Surpass offers significantly better value for regular Hilton guests due to Gold status (worth much more than Silver), the $200 Hilton credit, and the potential for a Free Night Reward. The higher earning rates on Surpass also accelerate rewards.",
    officialLinkText: "Compare on Amex Site", // IMPORTANT: Update link if a direct comparison page exists
    officialLink: "https://www.americanexpress.com/us/credit-cards/card/hilton-honors/" // Link to no-fee card
  },
  {
    id: "hiltonAspire",
    name: "Hilton Honors Aspire Card from American Express",
    annualFee: "$550", // As per typical data, verify current
    keyFeaturesNotes: "Premium card offering automatic Diamond status, multiple statement credits (e.g., airline fee, Hilton resort), and an annual Free Night Reward upon renewal.",
    comparisonToHiltonSurpass: "The Aspire is for the ultimate Hilton loyalist who can maximize its extensive credits to offset the higher annual fee. The Surpass is the mid-tier sweet spot, offering strong Gold status and valuable perks without the Aspire's premium price tag.",
    officialLinkText: "Details on Amex Site",
    officialLink: "https://www.americanexpress.com/us/credit-cards/card/hilton-honors-aspire/"
  },
  {
    id: "marriottBrilliant",
    name: "Marriott Bonvoy Brilliant® American Express® Card",
    annualFee: "$650", // As per typical data, verify current
    keyFeaturesNotes: "Offers Marriott Bonvoy Platinum Elite status, annual Free Night Award (up to 85K points), dining credits, and other premium travel perks.",
    comparisonToHiltonSurpass: "A direct competitor for Marriott loyalists. The choice depends on hotel brand preference. Both offer strong elite status and property credits relative to their fees.",
    officialLinkText: "Details on Amex Site",
    officialLink: "https://www.americanexpress.com/us/credit-cards/card/marriott-bonvoy-brilliant/"
  },
  {
    id: "chaseSapphirePreferred",
    name: "Chase Sapphire Preferred® Card",
    annualFee: "$95",
    keyFeaturesNotes: "Offers flexible Chase Ultimate Rewards® points transferable to various airline and hotel partners. Includes a $50 annual hotel credit through Chase Travel.",
    comparisonToHiltonSurpass: "Better for travelers seeking flexibility across brands rather than deep loyalty to Hilton. Lacks Hilton-specific elite benefits and higher Hilton earning rates offered by Surpass.",
    officialLinkText: "Official Chase Page",
    officialLink: "https://creditcards.chase.com/rewards-credit-cards/sapphire/preferred"
  }
];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Review",
  "itemReviewed": {
    "@type": "Product", // Changed from FinancialProduct as Product is more common for credit card reviews
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
    "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": reviewDataNew.ratingValue.toString(),
        "bestRating": "5",
        "worstRating": "1",
        "reviewCount": "1" // IMPORTANT: Update with actual number of reviews if you aggregate them
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
  "description": reviewDataNew.description, // Redundant with itemReviewed.description but often included
  "keywords": reviewDataNew.keywords.join(', '),
  "mainEntityOfPage": { "@type": "WebPage", "@id": pageUrlFull },
  "image": [ `${siteUrl}${reviewDataNew.imageUrl}` ] // Can list multiple images if available
};

const TocLinks = [
  { href: "#introduction", label: "Introduction" },
  { href: "#decoding-surpass", label: "Decoding Surpass: Costs & Offer" },
  { href: "#unpacking-perks", label: "Unpacking Perks: Real Value" },
  { href: "#earning-points", label: "Earning Hilton Points" }, // Added for clarity as it's a core aspect
  { href: "#real-voices", label: "Real Voices: Cardholder Feedback" },
  { href: "#surpass-us-international", label: "Surpass: US & International Use" },
  { href: "#competitor-comparison", label: "Competitor Comparison" },
  { href: "#pros-cons", label: "Pros & Cons" },
  { href: "#verdict", label: "The 2025 Verdict" },
  { href: "#final-thoughts", label: "Final Thoughts" },
];

export default function HiltonSurpassCardReview2025() {
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

    const sections = TocLinks.map(link => document.getElementById(link.href.substring(1)));
    sections.forEach(section => {
      if (section) observer.observe(section);
    });

    const handleScroll = () => {
      const heroImageEl = document.querySelector(`.${styles.heroImageContainer}`);
      const heroImageHeight = heroImageEl ? heroImageEl.offsetHeight : 400; // Default height if element not found
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
  }, []); // Empty dependency array means this effect runs once on mount and cleanup on unmount

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
        {/* IMPORTANT: Update Facebook profile URL if you have one */}
        <meta property="article:publisher" content={`https://www.facebook.com/yourtravelcardinsiderprofile`} /> 
        <meta property="article:published_time" content={reviewDataNew.publishDate} />
        <meta property="article:modified_time" content={reviewDataNew.updateDate} />
        <meta property="article:author" content={reviewDataNew.author.name} /> {/* Or a link to author profile */}
        <meta name="twitter:card" content="summary_large_image" />
        {/* IMPORTANT: Update Twitter site handle */}
        <meta name="twitter:site" content="@TravelCardInsid" /> 
        <meta name="twitter:title" content={`${reviewDataNew.cardName} (2025): Is the $${reviewDataNew.annualFee} Fee Justified for Hilton Fans?`} />
        <meta name="twitter:description" content={`Hilton Surpass deep dive: Gold status, $200 credit, FNR & up to 12X points. Our ${new Date(reviewDataNew.publishDate).getFullYear()} verdict on this $${reviewDataNew.annualFee} hotel card.`} />
        <meta name="twitter:image" content={`${siteUrl}${reviewDataNew.imageUrl}`} />
        <meta name="twitter:creator" content={reviewDataNew.author.socialLinks.twitter ? reviewDataNew.author.socialLinks.twitter.replace('https://x.com/', '@') : '@DilanMadushanka'} /> {/* Assumes Twitter handle format */}
        <meta name="geo.region" content="US" /> {/* Appropriate as it's a US-focused card review */}
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
          src={reviewDataNew.imageUrl} // IMPORTANT: Update path
          alt={`${reviewDataNew.cardName} from ${reviewDataNew.issuerName} - benefits and rewards review 2025`}
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
                tabIndex={0} // Makes it focusable
            >
                <Image 
                    src={reviewDataNew.author.imageUrl} // IMPORTANT: Update path
                    alt={`${reviewDataNew.author.name} headshot`} 
                    width={reviewDataNew.author.imageWidth} 
                    height={reviewDataNew.author.imageHeight} 
                    className={styles.authorImageSmall} 
                    priority // If above the fold or critical
                />
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
                    {/* Simplified Social Links - Add more SVGs as needed */}
                    {reviewDataNew.author.socialLinks && (
                        <div className={styles.authorSocialLinks}>
                            {reviewDataNew.author.socialLinks.linkedin && ( <a href={reviewDataNew.author.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`${reviewDataNew.author.name} on LinkedIn`} className={styles.socialIconLink}><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg></a>)}
                            {reviewDataNew.author.socialLinks.twitter && ( <a href={reviewDataNew.author.socialLinks.twitter} target="_blank" rel="noopener noreferrer" aria-label={`${reviewDataNew.author.name} on Twitter`} className={styles.socialIconLink}><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-.422.724-.665 1.56-.665 2.452 0 1.697.864 3.198 2.18 4.078-.8-.025-1.555-.247-2.227-.616v.054c0 2.37 1.683 4.333 3.91 4.78-.426.116-.874.174-1.337.174-.31 0-.611-.03-.904-.085.622 1.936 2.421 3.338 4.553 3.377-1.672 1.309-3.781 2.088-6.072 2.088-.394 0-.784-.023-1.169-.069 2.16 1.389 4.723 2.202 7.482 2.202 8.979 0 13.897-7.446 13.897-13.898 0-.21 0-.42-.015-.63.953-.689 1.778-1.56 2.433-2.525z"/></svg></a>)}
                            {reviewDataNew.author.socialLinks.email && ( <a href={`mailto:${reviewDataNew.author.socialLinks.email}`} aria-label={`Email ${reviewDataNew.author.name}`} className={styles.socialIconLink}><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"/></svg></a>)}
                        </div>
                    )}
                </div>
                {showAuthorBioTooltip && ( // Ensure this tooltip is styled and positioned correctly via CSS
                    <div className={styles.authorTooltip} ref={authorTooltipRef} role="tooltip" onMouseEnter={handleTooltipMouseEnter} onMouseLeave={handleAuthorMouseLeave} onFocus={handleTooltipMouseEnter} onBlur={handleAuthorMouseLeave}>
                         <div className={styles.authorTooltipHeader}>
                             <Image 
                                src={reviewDataNew.author.tooltipImageUrl} // IMPORTANT: Update path
                                alt={`${reviewDataNew.author.name} headshot`} 
                                width={reviewDataNew.author.tooltipImageWidth} 
                                height={reviewDataNew.author.tooltipImageHeight} 
                                className={styles.authorTooltipImage}
                              />
                             <div className={styles.authorTooltipInfo}>
                                 <span className={styles.authorTooltipName}>{reviewDataNew.author.name}</span>
                                 <span className={styles.authorTooltipTitle}>{reviewDataNew.author.title}</span>
                             </div>
                           </div>
                           {reviewDataNew.author.expertise && reviewDataNew.author.expertise.length > 0 && ( <div className={styles.authorTooltipExpertise}><strong>Expertise</strong><ul>{reviewDataNew.author.expertise.map(area => <li key={area}>{area}</li>)}</ul></div>)}
                           <p className={styles.authorTooltipBioSnippet}>{reviewDataNew.author.bioSnippet}</p>
                           {reviewDataNew.author.fullBioLink && ( <Link href={reviewDataNew.author.fullBioLink} legacyBehavior><a className={styles.authorTooltipBioLink}>See full bio</a></Link>)}
                           {/* Re-add social icons for tooltip if design includes them */}
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
            <h2 style={{textAlign:'center'}}>{reviewDataNew.h1Content}</h2>
            <p>Navigating the world of travel rewards can be daunting, but the right hotel credit card can unlock significant value. For US travelers eyeing the Hilton brand, the {reviewDataNew.cardName} is a prominent option, especially after its 2024 refresh which adjusted its annual fee and benefits. For 2025, the key question is: does this mid-tier card deliver the best hotel value for you?</p>
            <p>"Best" is always personal, depending on your travel frequency, brand loyalty, spending habits, and desired perks. This review offers a genuine breakdown of the Surpass card for US-based travelers. We'll cover its core features, the real-world value of its benefits like automatic Hilton Honors Gold status, the revamped credits, and what actual users are saying. With its increased focus on direct Hilton benefits, let's see if it’s the right fit for your 2025 travel strategy.</p>
          </section>

          <section id="decoding-surpass" className={styles.reviewSection}>
            <h2>I. Decoding the Surpass: What You Get and What It Costs (2025)</h2>
            <p>Let's break down the essentials of the {reviewDataNew.cardName}.</p>
            <h3>The Welcome Offer:</h3>
            <p>New Card Members can currently earn <strong>{reviewDataNew.welcomeOfferHeadline} Hilton Honors Bonus Points</strong> after spending $3,000 on eligible purchases on the Card within the first 6 months. (Welcome offers can change, so always verify current terms on the <a href={reviewDataNew.applyLink} target="_blank" rel="noopener noreferrer sponsored">official {reviewDataNew.issuerName} offer page</a>). Valuing Hilton points around 0.5-0.6 cents each, this bonus is roughly $650-$780 towards stays—a solid start.</p>
            
            <h3>The Annual Fee:</h3>
            <p>The {reviewDataNew.shortCardName} Card has a <strong>${reviewDataNew.annualFee} annual fee</strong>. (See <a href={reviewDataNew.ratesLink} target="_blank" rel="noopener noreferrer sponsored">official {reviewDataNew.issuerName} card details, rates and fees</a>). This increased from $95, with new benefits intended to offset the higher cost.</p>

            <h3>Key Fees:</h3>
            <ul>
                <li><strong>APR:</strong> Variable 20.24% to 29.24% for purchases (always check current rates).</li>
                <li><strong>Foreign Transaction Fees:</strong> None. Essential for international travel.</li>
                <li><strong>Late/Returned Payment Fees:</strong> Up to $40.</li>
            </ul>
            <p>The card is clearly geared towards US consumers. The absence of foreign transaction fees is standard for a travel card, but Amex acceptance abroad can vary.</p>
          </section>

          <section id="cta-hilton-surpass-1" className={styles.ctaSection}>
              <h2>Considering the <b>{reviewDataNew.cardName}</b>?</h2>
              <p>Unlock elite Hilton perks, valuable statement credits, and a generous points bonus with this popular travel card.</p>
              <div className={styles.ctaButtons}>
                <a href={reviewDataNew.applyLink} className={`${styles.btn} ${styles.btnApply}`} title={`Apply for the ${reviewDataNew.cardName} on ${reviewDataNew.issuerName}'s secure site`} target="_blank" rel="noopener noreferrer sponsored">Apply Now</a>
                <a href={reviewDataNew.ratesLink} className={`${styles.btn} ${styles.btnRates}`} title={`See rates and fees for the ${reviewDataNew.cardName}`} target="_blank" rel="noopener noreferrer sponsored">See Rates & Fees</a>
              </div>
          </section>

          <section id="earning-points" className={styles.reviewSection}>
            <h2>II. Earning Points with the Hilton Surpass</h2>
            <p>The {reviewDataNew.shortCardName} Card features the following U.S.-centric bonus categories, great for accumulating points on everyday spending:</p>
            <ul className={styles.earningRatesList}> {/* Add styling for this list */}
              <li><strong>12X Hilton Honors Bonus Points</strong> per dollar spent directly with a hotel or resort within the Hilton portfolio.</li>
              <li><strong>6X Points</strong> at U.S. restaurants, U.S. supermarkets, and U.S. gas stations.</li>
              <li><strong>4X Points</strong> on U.S. online retail purchases.</li>
              <li><strong>3X Points</strong> on all other eligible purchases.</li>
            </ul>
          </section>
          
          <section id="unpacking-perks" className={styles.reviewSection}>
            <h2>III. Unpacking the Perks: The Real Value of Surpass Benefits</h2>
            <p>The ${reviewDataNew.annualFee} annual fee is measured against the card’s benefits, which are heavily focused on enhancing Hilton stays.</p>
            
            <h3>Complimentary Hilton Honors™ Gold Status:</h3>
            <p>This is a major perk, automatically granted. (See <a href="https://www.hilton.com/en/hilton-honors/member-benefits/" target="_blank" rel="noopener noreferrer">Hilton Honors Gold Benefits</a>). Gold status typically includes:</p>
            <ul>
              <li><strong>80% Points Bonus on Stays:</strong> Earn 18 points per dollar on most Hilton stays (10 base + 8 bonus). With the 12X from the card, that’s up to 30 points per dollar.</li>
              <li><strong>Space-Available Room Upgrades.</strong></li>
              <li><strong>Daily Food & Beverage Credit</strong> (U.S. hotels) / Continental Breakfast (non-U.S. hotels): A significant money-saver. In the U.S., this is a daily credit per person (e.g., $10-$25, varies by brand) for the member and a guest. Internationally, it's often free breakfast. This can quickly offset a large part of the annual fee.</li>
              <li><strong>Fifth Night Free on Reward Stays:</strong> Get the 5th night free when booking 5+ nights with points.</li>
            </ul>

            <h3>$200 Annual Hilton Credit (Quarterly):</h3>
            <p>Receive up to $200 back in statement credits annually for eligible Hilton purchases, distributed as up to $50 per quarter. (See <a href="https://global.americanexpress.com/card-benefits/detail/hilton-credit/hilton-surpass" target="_blank" rel="noopener noreferrer sponsored">official {reviewDataNew.issuerName} benefit terms</a>). This applies to room rates and incidentals charged to your Card. If maximized, this credit alone makes the annual fee a net positive ($50 gain). However, it’s "use-it-or-lose-it" quarterly, requiring a Hilton spend every three months to get the full amount.</p>

            <h3>Earnable Free Night Reward:</h3>
            <p>Spend $15,000 on eligible purchases on your Card in a calendar year to earn a Free Night Reward from Hilton Honors. This can be used at most Hilton properties worldwide and is especially valuable at luxury hotels, potentially worth $500+. The $15k spend is substantial, but achievable with the bonus categories.</p>

            <h3>Path to Diamond Status:</h3>
            <p>Spend $40,000 on eligible purchases on your Card in a calendar year to get upgraded to Hilton's top-tier Diamond status through the end of the next calendar year.</p>

            <h3>National Car Rental® Emerald Club Executive® Status:</h3>
            <p>Enjoy complimentary Executive status with National (enrollment in the Emerald Club is required via an Amex link, typically found in your online account benefits section) for perks like upgrades.</p>
            
            <p>The card also includes standard Amex travel protections like secondary car rental insurance and purchase protection. Notably, Priority Pass lounge access was removed, emphasizing the card's Hilton focus.</p>
          </section>

          <section id="real-voices" className={styles.reviewSection}>
            <h2>IV. Real Voices: What Cardholders Are Saying</h2>
            <p>Features are one thing; real-world experience is key. Augusta Stone from The Points Guy found the Gold status and its F&B credits compelling, using the quarterly $50 credits to enhance trips. She redeemed her Free Night Reward in Rome for a room valued at nearly $629. Her view: the card can fit into a broader strategy even if you're not fiercely loyal.</p>
            <p>Online, Reddit user "StantheMansicle" called Surpass their "favorite card," highlighting great returns if you aim for the $15k spend for the Free Night Certificate (FNC), which they valued at $600+.</p>
            <h4>Common Praises:</h4>
            <ul>
              <li>$200 Hilton credit often negates or beats the annual fee.</li>
              <li>Automatic Gold status is highly valued.</li>
              <li>The Free Night Reward offers significant potential value.</li>
              <li>Strong U.S. everyday spend bonus categories.</li>
            </ul>
            <h4>Common Gripes:</h4>
            <ul>
              <li>Quarterly $50 credit can be cumbersome for infrequent Hilton guests.</li>
              <li>Hilton point values can fluctuate.</li>
              <li>Loss of Priority Pass.</li>
              <li>$15k spend for the Free Night Reward is a high bar for some.</li>
            </ul>
          </section>

          <section id="surpass-us-international" className={styles.reviewSection}>
            <h2>V. The Surpass for US Travelers: Strengths & International Use</h2>
            <p>For US-based travelers, the Surpass is strong. The 6X bonus categories on U.S. essentials and 4X on U.S. online retail align perfectly with domestic spending. With thousands of Hilton properties in the US (Hilton has over 7,000 properties globally, see more on the <a href="https://stories.hilton.com/media-kit-hilton-corporate" target="_blank" rel="noopener noreferrer">Hilton Corporate Media Kit</a>), opportunities to use benefits are plentiful.</p>
            <p>Internationally, no foreign transaction fees are a plus. However, American Express acceptance can be less consistent than Visa or Mastercard in some regions. Always have a backup card when traveling abroad.</p>
          </section>

          <section id="competitor-comparison" className={styles.reviewSection}>
            <h2>VI. Head-to-Head: {reviewDataNew.shortCardName} vs. The Competition</h2>
            <p>How does the {reviewDataNew.shortCardName} stack up?</p>
            <div className={styles.comparisonTableContainer}>
              {competitorCardsData.map(card => (
                <div key={card.id} className={styles.competitorRow}>
                  <h4 className={styles.competitorName}>Vs. {card.name} ({card.annualFee} fee)</h4>
                  <p><strong>Key Features/Notes:</strong> {card.keyFeaturesNotes}</p>
                  <p><strong>Comparison to {reviewDataNew.shortCardName}:</strong> {card.comparisonToHiltonSurpass}
                    {card.officialLink && (
                      <> <a href={card.officialLink} target="_blank" rel="noopener noreferrer sponsored">{card.officialLinkText || "Official Details"}</a></>
                    )}
                  </p>
                </div>
              ))}
            </div>
            <p style={{marginTop: '1rem'}}>The {reviewDataNew.shortCardName} excels for those committed to Hilton who want solid mid-tier benefits without a top-tier fee.</p>
          </section>

          <section id="pros-cons" className={styles.reviewSection}>
            <h2>VII. {reviewDataNew.shortCardName} Pros & Cons</h2>
            <div className={styles.prosConsContainer}>
              <div className={styles.prosSection}>
                <h3>Pros: Clear Advantages</h3>
                <ul>
                  <li><span className={styles.bulletIcon}>👍</span>Highly Valuable Hilton Honors Gold Status: Automatic upgrade with strong perks.</li>
                  <li><span className={styles.bulletIcon}>👍</span>$200 Annual Hilton Credit: Effectively reduces annual fee if maximized ($50 per quarter).</li>
                  <li><span className={styles.bulletIcon}>👍</span>Earnable Free Night Reward: Significant value with $15k annual spend.</li>
                  <li><span className={styles.bulletIcon}>👍</span>Strong Points Earning: 12x at Hilton, 6x on U.S. groceries, dining, gas, 4x U.S. online retail.</li>
                  <li><span className={styles.bulletIcon}>👍</span>No Foreign Transaction Fees.</li>
                  <li><span className={styles.bulletIcon}>👍</span>Path to Diamond Status via card spend.</li>
                </ul>
              </div>
              <div className={styles.consSection}>
                <h3>Cons: Potential Drawbacks</h3>
                <ul>
                  <li><span className={styles.bulletIcon}>👎</span>$150 Annual Fee: Not waived, benefits must be utilized.</li>
                  <li><span className={styles.bulletIcon}>👎</span>Quarterly Credit Structure: Requires consistent Hilton spend to maximize $200 credit.</li>
                  <li><span className={styles.bulletIcon}>👎</span>Amex Acceptance: Can be less prevalent internationally than Visa/Mastercard.</li>
                  <li><span className={styles.bulletIcon}>👎</span>High Spend for Free Night/Diamond: $15k for FNR and $40k for Diamond can be steep.</li>
                  <li><span className={styles.bulletIcon}>👎</span>No Airport Lounge Access (Priority Pass removed).</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="verdict" className={styles.reviewSection}>
            <h2>VIII. The 2025 Verdict: Is the Hilton Surpass Your Best Bet?</h2>
            <p>Is the {reviewDataNew.cardName} the top hotel card for US travelers in 2025? This card is a strong contender if:</p>
            <ul>
              <li>You're a Hilton loyalist who can use Gold benefits and quarterly credits.</li>
              <li>You value mid-tier elite status (Hilton Gold is excellent).</li>
              <li>You can strategically spend $15k annually for the valuable Free Night Reward.</li>
            </ul>
            <p>Consider alternatives if:</p>
            <ul>
              <li>You rarely stay at Hilton properties.</li>
              <li>The quarterly credit structure feels too restrictive.</li>
              <li>You prioritize maximum point flexibility with transferable currencies.</li>
              <li>You need universal card acceptance abroad with a single card.</li>
            </ul>
          </section>

          <section id="final-thoughts" className={styles.reviewSection}>
            <h2>IX. Final Thoughts</h2>
            <p>The {reviewDataNew.cardName} isn't for everyone. But for the right US traveler—one who frequently stays with Hilton, values Gold status, and can leverage the credits and spending bonuses—it offers a compelling package. The $200 in Hilton credits can more than offset the $150 annual fee, and the Free Night Reward is a significant bonus if earned.</p>
            <p>It's a card that rewards engagement with the Hilton portfolio. If this aligns with your travel style, the Surpass could indeed be your key to more rewarding stays in 2025. Always weigh its benefits against your personal spending and travel habits by checking the latest terms on the <a href={reviewDataNew.applyLink} target="_blank" rel="noopener noreferrer sponsored">official {reviewDataNew.issuerName} website</a>.</p>
          </section>
          
          <section className={`${styles.reviewSection} ${styles.finalCtaSection}`}>
            <h2>Ready to elevate your Hilton stays with the {reviewDataNew.cardName}?</h2>
            <p>If Gold status, generous credits, and high points earning at Hilton properties sound good, this card deserves your attention.</p>
            <div className={styles.ctaButtons}>
              <a href={reviewDataNew.applyLink} className={`${styles.btn} ${styles.btnApply} ${styles.btnLarge}`} target="_blank" rel="noopener noreferrer sponsored" title={`Apply for The ${reviewDataNew.cardName} on ${reviewDataNew.issuerName}'s secure site`}>
                Apply for The {reviewDataNew.cardName}
              </a>
              <a href={reviewDataNew.ratesLink} className={`${styles.btn} ${styles.btnRates} ${styles.btnLarge}`} target="_blank" rel="noopener noreferrer sponsored" title={`See rates and fees for The ${reviewDataNew.cardName} on ${reviewDataNew.issuerName}'s site`}>
                See Rates & Fees
              </a>
            </div>
            <p className={styles.smallPrintTerms}>Terms Apply. Click links for details. Enrollment may be required for select benefits. Images & Trademarks © American Express Company.</p>
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