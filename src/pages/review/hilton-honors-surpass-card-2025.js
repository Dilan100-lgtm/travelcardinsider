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
  title: "Hilton Honors Surpass Card Review (2025): Your Ticket to Elite Hilton Perks?",
  description: "Is the $150 Hilton Honors Surpass Card your best bet for 2025? We dig into real-world value: Gold status, $200 credit, free night potential, and how those points actually add up.",
  keywords: [
    "Hilton Honors American Express Surpass Card review 2025",
    "Hilton Surpass card",
    "American Express hotel card",
    "$150 annual fee card",
    "Hilton Honors points",
    "Hilton Gold status",
    "Hilton free night reward",
    "travel rewards credit card US",
    "best hotel credit card",
    "Amex Hilton Surpass review"
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
  imageUrl: "/frugal-flyer-eALtkVMTCZ4-unsplash.webp", // IMPORTANT: Update with a relevant hero image for Hilton Surpass
  cardImageUrl: "/NUS000000328_480x304_straight_withname.avif", // IMPORTANT: Update with path to a smaller card image for the CTA
  heroImageObjectPosition: "center center",
  imageWidth: 1600,
  imageHeight: 900,
  siteLogoUrl: "/images/logo.png", // IMPORTANT: Update
  publishDate: "2025-05-29", 
  updateDate: "2025-05-29", 
  ratingValue: 4.6, // IMPORTANT: Set your own rating, slightly adjusted to reflect more nuanced review
  annualFee: 150,
  applyLink: "https://www.americanexpress.com/us/credit-cards/card/hilton-honors-surpass/",
  ratesLink: "https://www.americanexpress.com/us/credit-cards/card/hilton-honors-surpass/", 
  learnMoreLink: "/cards/hilton-surpass-card", // IMPORTANT: Create this page or adjust
  h1Content: "Hilton Honors Surpass® Card 2025: A Traveler's Honest Look",
  heroH1Content: "Hilton Surpass® Card (2025): Is It *Really* Worth the $150 Fee?",
  reviewBody: "Our 2025 hands-on review of the Amex Hilton Honors Surpass Card. We explore if the $150 annual fee genuinely pays off with Gold status, credits, and point-earning for real-world Hilton travelers.",
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
    officialLinkText: "Compare on Amex Site", 
    officialLink: "https://www.americanexpress.com/us/credit-cards/card/hilton-honors/" 
  },
  {
    id: "hiltonAspire",
    name: "Hilton Honors Aspire Card from American Express",
    annualFee: "$550", 
    keyFeaturesNotes: "Premium card offering automatic Diamond status, multiple statement credits (e.g., airline fee, Hilton resort), and an annual Free Night Reward upon renewal.",
    comparisonToHiltonSurpass: "The Aspire is for the ultimate Hilton loyalist who can maximize its extensive credits to offset the higher annual fee. The Surpass is the mid-tier sweet spot, offering strong Gold status and valuable perks without the Aspire's premium price tag.",
    officialLinkText: "Details on Amex Site",
    officialLink: "https://www.americanexpress.com/us/credit-cards/card/hilton-honors-aspire/"
  },
  {
    id: "marriottBrilliant",
    name: "Marriott Bonvoy Brilliant® American Express® Card",
    annualFee: "$650", 
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
  "description": reviewDataNew.description, 
  "keywords": reviewDataNew.keywords.join(', '),
  "mainEntityOfPage": { "@type": "WebPage", "@id": pageUrlFull },
  "image": [ `${siteUrl}${reviewDataNew.imageUrl}` ] 
};

const TocLinks = [
  { href: "#introduction", label: "Introduction: Why Surpass?" },
  { href: "#decoding-surpass", label: "The Surpass Lowdown: Costs & Offer" },
  { href: "#unpacking-perks", label: "Perks Unpacked: Real-World Value" },
  { href: "#earning-points", label: "How You'll Rack Up Hilton Points" }, 
  { href: "#real-voices", label: "Beyond the Hype: Cardholder Takes" },
  { href: "#surpass-us-international", label: "Surpass: At Home & Abroad" },
  { href: "#competitor-comparison", label: "Surpass vs. The Field" },
  { href: "#pros-cons", label: "The Good, The Bad, The Surpass" },
  { href: "#verdict", label: "Our 2025 Verdict: Is It For You?" },
  { href: "#final-thoughts", label: "Final Takeaways" },
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
        <meta property="article:publisher" content={`https://www.facebook.com/yourtravelcardinsiderprofile`} /> 
        <meta property="article:published_time" content={reviewDataNew.publishDate} />
        <meta property="article:modified_time" content={reviewDataNew.updateDate} />
        <meta property="article:author" content={reviewDataNew.author.name} /> 
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@TravelCardInsid" /> 
        <meta name="twitter:title" content={`${reviewDataNew.shortCardName} (2025): Does $${reviewDataNew.annualFee} Unlock Real Hilton Value?`} />
        <meta name="twitter:description" content={`Our honest ${new Date(reviewDataNew.publishDate).getFullYear()} take on the Hilton Surpass: Gold status, $200 credit, Free Night perks & more. Is this $${reviewDataNew.annualFee} card a keeper?`} />
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
                tabIndex={0} 
            >
                <Image 
                    src={reviewDataNew.author.imageUrl} 
                    alt={`${reviewDataNew.author.name} headshot`} 
                    width={reviewDataNew.author.imageWidth} 
                    height={reviewDataNew.author.imageHeight} 
                    className={styles.authorImageSmall} 
                    priority 
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
                             <Image 
                                src={reviewDataNew.author.tooltipImageUrl} 
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
            <p>The world of hotel credit cards can feel like a maze, right? But if you're someone who often finds themselves checking into a Hilton, the {reviewDataNew.cardName} likely pops up on your radar. Especially with its 2024 refresh tinkering with the annual fee and benefits, you're probably wondering: for 2025, does this card *actually* make sense for my travel style and wallet?</p>
            <p>Let's be real, "best" is super personal. It hinges on how often you pack your bags, your loyalty to Hilton, your spending game, and what perks truly light you up. So, this isn't just another features list. We're giving you the genuine scoop on the Surpass card, specifically for US-based travelers like us. We’ll unpack everything from its core offerings to the tangible value of that automatic Gold status (it's pretty sweet, by the way), the updated credits, and what folks who actually *use* the card are chattering about. Hilton's clearly doubling down on direct benefits with this one, so let's see if it’s the ace up your sleeve for 2025 travels.</p>
          </section>

          <section id="decoding-surpass" className={styles.reviewSection}>
            <h2>I. The Surpass Lowdown: What You Get and What It Costs (2025)</h2>
            <p>Alright, let's get down to brass tacks with the {reviewDataNew.cardName}. What are you really looking at in terms of offers and fees?</p>
            <h3>The Welcome Offer: A Nice Kickstart</h3>
            <p>If you're new to the card, Amex is currently dangling a pretty enticing carrot: <strong>{reviewDataNew.welcomeOfferHeadline} Hilton Honors Bonus Points</strong>. To snag these, you'll need to spend $3,000 on eligible purchases within your first 6 months. (Just a heads-up, these offers can shift, so it's always smart to double-check the current terms directly on the <a href={reviewDataNew.applyLink} target="_blank" rel="noopener noreferrer sponsored">official {reviewDataNew.issuerName} offer page</a>). Now, what's that bonus *really* worth? Hilton points usually hover around 0.5 to 0.6 cents apiece in value. Do the math, and that's roughly $650 to $780 you can put towards future stays – a pretty solid hello from Amex.</p>
            
            <h3>The Annual Fee: The $150 Question</h3>
            <p>The {reviewDataNew.shortCardName} Card rolls with a <strong>${reviewDataNew.annualFee} annual fee</strong>. You can see all the nitty-gritty on the <a href={reviewDataNew.ratesLink} target="_blank" rel="noopener noreferrer sponsored">official {reviewDataNew.issuerName} card details, rates and fees page</a>. This did jump from its old $95 price tag, but Amex added some new goodies they hope will make up for the increase. We'll dig into whether that trade-off works out.</p>

            <h3>Other Key Fees to Watch:</h3>
            <ul>
                <li><strong>APR for Purchases:</strong> This can vary, typically sitting between 20.24% and 29.24% depending on your creditworthiness. As always, peek at the current rates before you leap. My advice? Try to pay it off monthly if you can.</li>
                <li><strong>Foreign Transaction Fees:</strong> Zero. Zip. Nada. That's a must-have for any travel card worth its salt if you plan on using it abroad.</li>
                <li><strong>Late/Returned Payment Fees:</strong> These can sting, potentially up to $40.</li>
            </ul>
            <p>No doubt, this card has U.S. travelers in its sights. And while no foreign transaction fees is a big plus, remember that Amex isn't *quite* as universally accepted overseas as Visa or Mastercard. Maybe pack a backup, just in case.</p>
          </section>

          <section id="cta-hilton-surpass-1" className={styles.ctaSection}>
              <h2>Thinking the <b>{reviewDataNew.cardName}</b> Might Be for You?</h2>
              <p>It could be your key to unlocking those coveted Hilton perks, statement credits that save you cash, and a hefty points bonus to get you started.</p>
              <div className={styles.ctaButtons}>
                <a href={reviewDataNew.applyLink} className={`${styles.btn} ${styles.btnApply}`} title={`Apply for the ${reviewDataNew.cardName} on ${reviewDataNew.issuerName}'s secure site`} target="_blank" rel="noopener noreferrer sponsored">Check Current Offer</a>
                <a href={reviewDataNew.ratesLink} className={`${styles.btn} ${styles.btnRates}`} title={`See rates and fees for the ${reviewDataNew.cardName}`} target="_blank" rel="noopener noreferrer sponsored">See Rates & Fees</a>
              </div>
          </section>

          <section id="earning-points" className={styles.reviewSection}>
            <h2>II. How You'll Rack Up Hilton Points with Surpass</h2>
            <p>Now for the fun part: earning those Hilton Honors points! The {reviewDataNew.shortCardName} Card is set up to reward your spending, especially here in the U.S., in some pretty common categories:</p>
            <ul className={styles.earningRatesList}> 
              <li>A hefty <strong>12X Hilton Honors Bonus Points</strong> for every dollar you charge directly with a Hilton hotel or resort. Booking straight through Hilton really pays off here.</li>
              <li>A very useful <strong>6X Points</strong> at U.S. restaurants (takeout counts!), U.S. supermarkets, and U.S. gas stations. Think about your weekly grocery run or filling up the tank – those points can accumulate quickly. I've heard of folks covering a good chunk of a weekend stay just from points earned on their regular U.S. supermarket and gas spending over a year!</li>
              <li>A solid <strong>4X Points</strong> on your U.S. online retail therapy.</li>
              <li>And <strong>3X Points</strong> on pretty much everything else you buy that's eligible.</li>
            </ul>
            <p>So, whether it's your morning coffee, your big weekly shop, or that Hilton stay you've been dreaming of, this card works to keep the points flowing.</p>
          </section>
          
          <section id="unpacking-perks" className={styles.reviewSection}>
            <h2>III. Perks Unpacked: What's the Real-World Value Here?</h2>
            <p>That ${reviewDataNew.annualFee} annual fee starts to look a lot more interesting when you weigh it against the perks. And let me tell you, the Surpass is laser-focused on making your Hilton stays better (and maybe even cheaper).</p>
            
            <h3>Complimentary Hilton Honors™ Gold Status: This is a Biggie.</h3>
            <p>You get Hilton Gold status just for holding the card, and frankly, it's one of the more valuable mid-tier hotel statuses out there. Don't just take my word for it; check out the full details on the <a href="https://www.hilton.com/en/hilton-honors/member-benefits/" target="_blank" rel="noopener noreferrer">Hilton Honors Gold Benefits page</a>. What does it usually get you?</p>
            <ul>
              <li><strong>80% Points Bonus on Stays:</strong> You're earning 18 points per dollar on most Hilton stays (that's 10 base points plus an 8-point bonus). Combine that with the 12X points from using your Surpass card, and you could be looking at up to 30 points per dollar. Sweet!</li>
              <li><strong>Space-Available Room Upgrades:</strong> Who doesn't love a surprise upgrade? It's not guaranteed, but Gold status puts you in the running.</li>
              <li><strong>Daily Food & Beverage Credit (U.S. hotels) / Continental Breakfast (non-U.S. hotels):</strong> This can be a *huge* money-saver. In the U.S., it’s a daily credit for you and a guest (often $10-$25 per person, depending on the brand). Traveling internationally? It’s typically a complimentary continental breakfast. This perk alone can chip away at that annual fee pretty quickly.</li>
              <li><strong>Fifth Night Free on Reward Stays:</strong> Booking a longer points stay? Your fifth night is on the house. Yes, please!</li>
            </ul>

            <h3>$200 Annual Hilton Credit (Paid Quarterly):</h3>
            <p>This is a newer perk designed to directly offset that annual fee. You can get up to $200 back in statement credits each year for Hilton purchases you charge to your Surpass. It's broken down into $50 per quarter. You can dive into the fine print on the <a href="https://global.americanexpress.com/card-benefits/detail/hilton-credit/hilton-surpass" target="_blank" rel="noopener noreferrer sponsored">official {reviewDataNew.issuerName} benefit terms page</a>. This applies to room rates and even things like charges to your room from the hotel restaurant. If you can max this out each quarter, you're already $50 ahead on the annual fee before anything else. The catch? It's a "use-it-or-lose-it" $50 each quarter, so you need to have some Hilton spending every three months to get the full $200 back.</p>

            <h3>That Coveted Free Night Reward (If You Spend Enough):</h3>
            <p>If you can channel $15,000 in eligible purchases onto your Surpass card in a calendar year, Hilton Honors will gift you a Free Night Reward. This isn't just for any old motel; it can be used at most Hilton properties worldwide. Think about those fancy resorts or city-center hotels – this reward could easily be worth $500 or more. That $15k spend might seem like a lot, but with those 6X bonus categories on everyday U.S. spending, it might be more doable than you think.</p>

            <h3>Want to Aim for Diamond? There's a Path:</h3>
            <p>For the truly dedicated Hilton fans, if you spend $40,000 on the card in a calendar year, Amex will bump you up to Hilton's top-tier Diamond status through the end of the *next* calendar year. That's some serious hotel cred.</p>

            <h3>Little Extra: National Car Rental® Status</h3>
            <p>You also get complimentary Emerald Club Executive® status with National Car Rental. You'll need to enroll (usually via a link in your Amex online benefits section), but it can mean car upgrades and a speedier rental process. Nice touch.</p>
            
            <p>Of course, you also get the standard Amex travel protections like secondary car rental coverage and purchase protection. One thing to note: the Priority Pass lounge access that some travel cards offer was removed from the Surpass, really homing in on Hilton-specific value.</p>
          </section>

          <section id="real-voices" className={styles.reviewSection}>
            <h2>IV. Beyond the Hype: What Are Real Cardholders Saying?</h2>
            <p>It's one thing to list features, but what's the word on the street from folks who actually have the Surpass in their wallet? We peeked at what travel experts and everyday users are saying.</p>
            <p>For instance, Augusta Stone over at The Points Guy seemed pretty keen on the Gold status and those food and beverage credits, mentioning how the quarterly $50 credits jazzed up her trips. She even cashed in her Free Night Reward in Rome for a room that would have cost nearly $629! Her take? Even if you're not a die-hard Hilton loyalist, this card can still play a smart role in your overall travel strategy.</p>
            <p>And scrolling through online forums like Reddit, you'll find users like "StantheMansicle" calling the Surpass their "favorite card." They highlighted the awesome returns, especially if you hit that $15k spend for the Free Night Certificate (FNC), which they valued at a cool $600 or more.</p>
            <h4>Here's a quick vibe check on common praises:</h4>
            <ul>
              <li>That $200 Hilton credit? Many feel it cancels out, or even beats, the annual fee.</li>
              <li>Automatic Gold status is a consistent crowd-pleaser. Seriously, people love it.</li>
              <li>The Free Night Reward, if you can earn it, offers seriously good bang for your buck.</li>
              <li>Those U.S. everyday spending bonus categories (groceries, gas, restaurants) get a lot of thumbs up.</li>
            </ul>
            <h4>And on the flip side, some common grumbles include:</h4>
            <ul>
              <li>The quarterly $50 credit can be a bit of a pain if you don't stay at Hiltons that often. You have to remember to use it.</li>
              <li>The value of Hilton points can feel a bit like a moving target sometimes.</li>
              <li>Some folks are still a bit salty about losing the Priority Pass lounge access.</li>
              <li>For some, hitting that $15k spend for the Free Night Reward feels like a stretch.</li>
            </ul>
            <p>So, it's a mixed bag of experiences, but generally, those who align their travel with Hilton seem to find good reasons to keep the card.</p>
          </section>

          <section id="surpass-us-international" className={styles.reviewSection}>
            <h2>V. The Surpass: How It Plays Out at Home & Abroad</h2>
            <p>If you're mostly a U.S.-based traveler, the Surpass lines up pretty nicely. Those 6X bonus categories on U.S. supermarkets, restaurants, and gas, plus the 4X on U.S. online retail, are tailored for domestic spending. And with a ton of Hilton properties across the U.S. (Hilton boasts over 7,000 properties worldwide – you can get a sense of their scale from the <a href="https://stories.hilton.com/media-kit-hilton-corporate" target="_blank" rel="noopener noreferrer">Hilton Corporate Media Kit</a>), you'll have plenty of chances to use those benefits.</p>
            <p>Heading overseas? The "no foreign transaction fees" is a definite win. However, it's worth remembering that American Express isn't always as widely accepted as Visa or Mastercard in every nook and cranny of the world. Smart move? Always have a Visa or Mastercard as a backup when you're traveling internationally, just in case.</p>
          </section>

          <section id="competitor-comparison" className={styles.reviewSection}>
            <h2>VI. Surpass vs. The Field: How Does It Stack Up?</h2>
            <p>Okay, no card lives in a vacuum. So, how does the Hilton Surpass look when you put it side-by-side with some of the other players in the travel card game?</p>
            <div className={styles.comparisonTableContainer}>
              {competitorCardsData.map(card => (
                <div key={card.id} className={styles.competitorRow}>
                  <h4 className={styles.competitorName}>Let's say, versus the {card.name} (which has a {card.annualFee} fee)...</h4>
                  <p><strong>What that card generally brings to the table:</strong> {card.keyFeaturesNotes}</p>
                  <p><strong>And how the Surpass compares:</strong> {card.comparisonToHiltonSurpass}
                    {card.officialLink && (
                      <> You can usually find out more on the <a href={card.officialLink} target="_blank" rel="noopener noreferrer sponsored">{card.officialLinkText || "Official Details Page"}</a>.</>
                    )}
                  </p>
                </div>
              ))}
            </div>
            <p style={{marginTop: '1rem'}}>Bottom line here? The Surpass really shines if you're already in the Hilton camp and want solid mid-tier perks without shelling out for a super-premium card.</p>
          </section>

          <section id="pros-cons" className={styles.reviewSection}>
            <h2>VII. The Good, The Bad, The Surpass: A Quick Rundown</h2>
            <div className={styles.prosConsContainer}>
              <div className={styles.prosSection}>
                <h3>Pros: Why You Might Love It</h3>
                <ul>
                  <li><span className={styles.bulletIcon}>👍</span><strong>Automatic Hilton Gold Status:</strong> This is a gem, seriously. Great perks without chasing stays.</li>
                  <li><span className={styles.bulletIcon}>👍</span><strong>$200 Annual Hilton Credit:</strong> If you use it, this quarterly credit ($50/quarter) can make the annual fee feel like a bargain.</li>
                  <li><span className={styles.bulletIcon}>👍</span><strong>Potential Free Night Reward:</strong> Spending $15k in a year gets you a free night that can be incredibly valuable.</li>
                  <li><span className={styles.bulletIcon}>👍</span><strong>Solid Points Earning:</strong> 12x at Hilton is great, and those 6x categories for U.S. groceries, dining, and gas are everyday winners. 4x for U.S. online retail is nice too.</li>
                  <li><span className={styles.bulletIcon}>👍</span><strong>No Pesky Foreign Transaction Fees.</strong></li>
                  <li><span className={styles.bulletIcon}>👍</span><strong>A Leg Up to Diamond Status:</strong> If you're a big spender, Diamond is within reach via card spend.</li>
                </ul>
              </div>
              <div className={styles.consSection}>
                <h3>Cons: Things to Consider</h3>
                <ul>
                  <li><span className={styles.bulletIcon}>👎</span><strong>That $150 Annual Fee:</strong> It's not waived the first year, so you need to be sure you'll use the benefits.</li>
                  <li><span className={styles.bulletIcon}>👎</span><strong>Quarterly Credit Juggling:</strong> You've got to make a Hilton purchase each quarter to get the full $200 credit. Can be a hassle if you don't travel that consistently.</li>
                  <li><span className={styles.bulletIcon}>👎</span><strong>Amex Acceptance Abroad:</strong> It's good, but not always as universal as Visa or Mastercard.</li>
                  <li><span className={styles.bulletIcon}>👎</span><strong>High Spend for Top Perks:</strong> That $15k for the Free Night Reward and $40k for Diamond are significant spending thresholds.</li>
                  <li><span className={styles.bulletIcon}>👎</span><strong>No Airport Lounge Pass:</strong> If Priority Pass was your jam, it's gone from this card.</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="verdict" className={styles.reviewSection}>
            <h2>VIII. Our 2025 Verdict: Is the Hilton Surpass the Right Card for *You*?</h2>
            <p>So, after all that, is the {reviewDataNew.cardName} the ultimate hotel card for U.S. travelers in 2025? Well, like any good travel companion, it depends on where you're going and what you value.</p>
            <p><strong>This card could be a fantastic fit if:</strong></p>
            <ul>
              <li>You're pretty loyal to Hilton and can actually *use* those Gold benefits and the quarterly credits. Think free breakfast or F&B credits, potential room upgrades...</li>
              <li>You appreciate solid mid-tier elite status. Hilton Gold, as we've said, packs a decent punch.</li>
              <li>You're someone who can strategically put about $15,000 of your annual spending on this card to snag that valuable Free Night Reward. Maybe you're renovating, or you have significant U.S. grocery, gas, and dining expenses.</li>
            </ul>
            <p><strong>However, you might want to look at other options if:</strong></p>
            <ul>
              <li>You rarely find yourself at Hilton properties. The value just won't be there.</li>
              <li>That quarterly credit system feels more like a chore than a benefit. If you don't want to track it, it's lost money.</li>
              <li>You're all about maximum point flexibility and want a currency you can transfer to a bunch of different airlines and hotels.</li>
              <li>You absolutely need one card that's accepted everywhere when you travel internationally.</li>
            </ul>
          </section>

          <section id="final-thoughts" className={styles.reviewSection}>
            <h2>IX. Final Takeaways on the Surpass</h2>
            <p>Look, the {reviewDataNew.cardName} isn't going to be everyone's cup of tea. And that's okay! But for a specific type of U.S. traveler – the one who's frequently booking with Hilton, genuinely values what Gold status offers, and can make those credits and spending bonuses work for them – this card lays out a pretty attractive proposition.</p>
            <p>If you play your cards right (pun intended!), that $200 in Hilton credits can more than wipe out the $150 annual fee, and if you hit the spend for the Free Night Reward, you're looking at a seriously nice bonus. It’s a card that definitely wants you to engage with the Hilton brand. If that sounds like your travel style, then yes, the Surpass could very well be your key to more rewarding stays in 2025. As always, though, take a good look at your own spending habits and travel plans, and peek at the latest terms on the <a href={reviewDataNew.applyLink} target="_blank" rel="noopener noreferrer sponsored">official {reviewDataNew.issuerName} website</a> before you make a decision.</p>
          </section>
          
          <section className={`${styles.reviewSection} ${styles.finalCtaSection}`}>
            <h2>Ready to Give Your Hilton Stays an Upgrade with the {reviewDataNew.cardName}?</h2>
            <p>If automatic Gold status, handy credits, and a solid points-earning setup at Hilton properties sound like a good deal for your travels, this card is definitely worth a closer look.</p>
            <div className={styles.ctaButtons}>
              <a href={reviewDataNew.applyLink} className={`${styles.btn} ${styles.btnApply} ${styles.btnLarge}`} target="_blank" rel="noopener noreferrer sponsored" title={`Apply for The ${reviewDataNew.cardName} on ${reviewDataNew.issuerName}'s secure site`}>
                Learn More & Apply for The {reviewDataNew.cardName}
              </a>
              <a href={reviewDataNew.ratesLink} className={`${styles.btn} ${styles.btnRates} ${styles.btnLarge}`} target="_blank" rel="noopener noreferrer sponsored" title={`See rates and fees for The ${reviewDataNew.cardName} on ${reviewDataNew.issuerName}'s site`}>
                See Current Rates & Fees
              </a>
            </div>
            <p className={styles.smallPrintTerms}>Terms Apply. Click links for details. Enrollment may be required for select benefits. Images & Trademarks © American Express Company.</p>
          </section>
        </article>
      </main>

      {/* STICKY CTA SECTION MODIFIED TO INCLUDE IMAGE */}
      <div className={styles.stickyCtaContainer}>
        <div className={styles.stickyCtaContent}>
            {reviewDataNew.cardImageUrl && (
              <div className={styles.stickyCtaImageContainer}>
                <Image
                  src={reviewDataNew.cardImageUrl} // IMPORTANT: Update this path
                  alt={`${reviewDataNew.shortCardName} card image`}
                  width={90} // Adjust as needed for your design
                  height={55} // Adjust as needed for your design (maintain aspect ratio)
                  className={styles.stickyCtaCardImage} // Add CSS for this class
                  priority // If you want it to load quickly
                />
              </div>
            )}
            <div className={styles.stickyCtaTextAndButtons}>
              <span className={styles.stickyCtaText}>The {reviewDataNew.shortCardName} - ${reviewDataNew.annualFee} Annual Fee.</span>
              <div className={styles.stickyCtaButtons}>
                  <a href={reviewDataNew.applyLink} target="_blank" rel="noopener noreferrer sponsored" className={`${styles.btn} ${styles.btnApply} ${styles.ctaButtonApply}`}>Apply Now</a>
                  <Link href={reviewDataNew.learnMoreLink} legacyBehavior>
                      <a className={`${styles.btn} ${styles.btnRates} ${styles.ctaButtonLearnMore}`}>Learn More</a>
                  </Link>
              </div>
            </div>
        </div>
      </div>
    </>
  );
}