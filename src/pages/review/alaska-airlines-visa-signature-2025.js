// File: pages/review/alaska-airlines-visa-signature-2025.js

import React, { useState, useRef, useEffect, useCallback } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/reviews2025.module.css'; // Using the same enhanced CSS module

const siteUrl = 'https://www.travelcardinsider.com'; // IMPORTANT: Update this

const reviewDataNew = {
  cardName: "Alaska Airlines Visa Signature Card",
  shortCardName: "Alaska Visa Sig.", // For Trust Bar
  issuerName: "Bank of America",
  issuerLogoUrl: "/images/issuer-logo-bofa.svg", // IMPORTANT: Update with actual BofA logo path
  welcomeOfferHeadline: "60k Miles + Companion Fare", // IMPORTANT: Keep this concise and current
  title: "Alaska Airlines Visa Signature Card 2025 Review: Top Pick for West Coasters?",
  description: "In-depth 2025 review of the Alaska Airlines Visa Signature Card from Bank of America. Explore miles, Companion Fare, checked bags, elite perks, and the $95 annual fee. Is it the top choice for US West Coast travelers?",
  keywords: [
    "Alaska Airlines Visa Signature review",
    "Alaska Airlines credit card 2025",
    "West Coast airline card",
    "Alaska Companion Fare",
    "Alaska Airlines miles",
    "travel credit card $95 fee",
    "Bank of America Alaska card",
    "EQM credit card",
    "best airline card West Coast",
    "credit card review US"
  ],
  author: { // Keep your existing author details
      name: 'Dilan Madushanka',
      title: 'Founder & Lead Editor',
      imageUrl: '/WhatsApp Image 2025-05-12 at 4.09.58 PM.jpeg',
      imageWidth: 40,
      imageHeight: 40,
      tooltipImageUrl: '/WhatsApp Image 2025-05-12 at 4.09.58 PM.jpeg',
      tooltipImageWidth: 60,
      tooltipImageHeight: 60,
      expertise: [
          'Travel Credit Cards',
          'Rewards Programs',
          'Financial Literacy for Travel',
          'Maximizing Card Benefits',
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
  pagePath: "/review/alaska-airlines-visa-signature-2025",
  imageUrl: "/darrin-henein-sREvt-W52Tc-unsplash.webp", // Your existing hero image for Alaska
  heroImageObjectPosition: "center center", // IMPORTANT: Adjust as needed for this image (e.g., "center 40%")
  imageWidth: 1600, // Updated to match hero image typical dimensions
  imageHeight: 900,  // Updated to match hero image typical dimensions
  siteLogoUrl: "/images/logo.png", // IMPORTANT: Update this path
  publishDate: "2025-05-17",
  updateDate: "2025-05-17", // IMPORTANT: Update if content is refreshed
  ratingValue: 4.4,
  annualFee: 95,
  applyLink: "https://www.alaskaair.com/content/credit-card/visa-signature?srsltid=AfmBOopDXeo80pVEogV9HD0vekWjZ37Oa5Q3QSVRkVZWNhEaMZKv7F68", // IMPORTANT: Update this link
  learnMoreLink: "/cards/alaska-visa-signature", // Used by old sticky CTA, can be repurposed or use ratesLink
  ratesLink: "https://www.bankofamerica.com/credit-cards/products/alaska-airlines-credit-card/", // IMPORTANT: Add actual rates & fees link
  // Original H1 content
  h1Content: "The Alaska Airlines Visa Signature Card: My Honest Take for West Coasters in 2025",
  // New Hero H1 content for the image overlay
  heroH1Content: "Alaska Airlines Visa Signature® 2025: Still the West Coast Traveler's Best Bet?",
  reviewBody: "Our comprehensive 2025 analysis of the Alaska Airlines Visa Signature Card. Uncover its value for West Coast flyers, from the Companion Fare to earning miles and elite status perks.",
  sku: "BOFA-ALASKA-TCI-2025",
  mpn: "BOFAALASKA",
  brandName: "Bank of America Alaska Airlines",
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
    "image": `${siteUrl}${reviewDataNew.imageUrl}`, // Ensure this is the hero image for schema
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
  "headline": reviewDataNew.title, // Main SEO title
  "author": { "@type": "Person", "name": reviewDataNew.author.name },
  "publisher": { "@type": "Organization", "name": reviewDataNew.siteName, "logo": { "@type": "ImageObject", "url": `${siteUrl}${reviewDataNew.siteLogoUrl}` }},
  "datePublished": reviewDataNew.publishDate,
  "dateModified": reviewDataNew.updateDate,
  "description": reviewDataNew.description,
  "keywords": reviewDataNew.keywords.join(', '),
  "mainEntityOfPage": { "@type": "WebPage", "@id": pageUrlFull },
  "image": [ `${siteUrl}${reviewDataNew.imageUrl}` ] // Hero image for schema
};

const TocLinks = [
  { href: "#introduction", label: "Introduction" },
  { href: "#annual-fee-interest", label: "Annual Fee & APR" },
  { href: "#welcome-offer", label: "Welcome Offer" },
  { href: "#earning-miles", label: "Earning Miles" },
  { href: "#companion-fare", label: "Companion Fare" },
  { href: "#travel-benefits", label: "Travel Benefits" },
  { href: "#elite-status-perks", label: "Elite Perks" },
  { href: "#mileage-plan-changes", label: "Mileage Plan Changes" },
  { href: "#sweet-spot-redemptions", label: "Redemptions" },
  { href: "#card-shortcomings", label: "Shortcomings" },
  { href: "#final-verdict", label: "Final Verdict" },
];


export default function AlaskaAirlinesVisaSignatureReview2025() {
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
    const observer = new IntersectionObserver( (entries) => { entries.forEach((entry) => { if (entry.isIntersecting) setActiveSection(entry.target.id); }); }, { rootMargin: "-20% 0px -80% 0px", threshold: 0 } );
    const sections = TocLinks.map(link => document.querySelector(link.href));
    sections.forEach(section => { if (section) observer.observe(section); });
    const handleScroll = () => { if (window.scrollY > 200) setShowStickyNav(true); else setShowStickyNav(false); };
    window.addEventListener('scroll', handleScroll);
    return () => { sections.forEach(section => { if (section) observer.unobserve(section); }); window.removeEventListener('scroll', handleScroll); };
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
        <meta property="article:publisher" content={`https://www.facebook.com/yourfbprofile`} />
        <meta property="article:published_time" content={reviewDataNew.publishDate} />
        <meta property="article:modified_time" content={reviewDataNew.updateDate} />
        <meta property="article:author" content={reviewDataNew.author.name} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@YourTwitterHandle" />
        <meta name="twitter:title" content={`${reviewDataNew.cardName} Review (2025) | $${reviewDataNew.annualFee} Fee Justified?`} />
        <meta name="twitter:description" content={`Detailed 2025 review: ${reviewDataNew.cardName}. Companion Fare, free checked bags, EQMs, and value for Alaska loyalists.`} />
        <meta name="twitter:image" content={`${siteUrl}${reviewDataNew.imageUrl}`} />
        <meta name="twitter:creator" content={reviewDataNew.author.socialLinks.twitter ? reviewDataNew.author.socialLinks.twitter.replace('https://x.com/', '@') : '@AuthorTwitterHandle'} />
        <meta name="geo.region" content="US" />
        <meta name="geo.placename" content="United States" />
        <meta name="language" content="en-US" />
        <meta name="distribution" content="US" />
        <link rel="alternate" hrefLang="en-us" href={pageUrlFull} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </Head>

      <div className={styles.trustSignalBar}>
        <div className={styles.trustSignalContent}>
          {reviewDataNew.issuerLogoUrl && ( <Image src={reviewDataNew.issuerLogoUrl} alt={`${reviewDataNew.issuerName} logo`} width={24} height={24} className={styles.issuerLogoSmall} /> )}
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
              {TocLinks.map(link => ( <li key={link.href}><a href={link.href} className={activeSection === link.href.substring(1) ? styles.activeStickyTocLink : styles.stickyTocLink}>{link.label}</a></li> ))}
            </ul>
          </div>
        </nav>
      )}

      <div className={styles.heroImageContainer}>
        <Image
          src={reviewDataNew.imageUrl}
          alt={`${reviewDataNew.cardName} - ${reviewDataNew.description}`}
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
            {/* The H1 for the article body, if different from hero, can go here. Otherwise, hero H1 is primary. */}
            {/* <h1 className={styles.reviewTitle}>{reviewDataNew.h1Content}</h1> */}
            <div className={styles.authorBioContainer} ref={authorRef} onMouseEnter={handleAuthorMouseEnter} onMouseLeave={handleAuthorMouseLeave} onFocus={handleAuthorMouseEnter} onBlur={handleAuthorMouseLeave} aria-haspopup="true" aria-expanded={showAuthorBioTooltip} tabIndex={0}>
                <Image src={reviewDataNew.author.imageUrl} alt={`${reviewDataNew.author.name} headshot`} width={reviewDataNew.author.imageWidth} height={reviewDataNew.author.imageHeight} className={styles.authorImageSmall} priority />
                <div className={styles.authorInfoBlock}>
                    <div className={styles.authorNameLine}><span className={styles.authorPrefix}>By</span><Link href={reviewDataNew.author.fullBioLink || '#'} legacyBehavior><a className={styles.authorName}>{reviewDataNew.author.name}</a></Link></div>
                    <span className={styles.authorTitle}>{reviewDataNew.author.title}</span>
                    {reviewDataNew.updateDate && (<time dateTime={reviewDataNew.updateDate} className={styles.authorLastEdited}>Fact checked: {new Date(reviewDataNew.updateDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</time>)}
                    {reviewDataNew.author.socialLinks && ( <div className={styles.authorSocialLinks}>
                        {reviewDataNew.author.socialLinks.linkedin && ( <a href={reviewDataNew.author.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={styles.socialIconLink}><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg></a>)}
                        {reviewDataNew.author.socialLinks.twitter && ( <a href={reviewDataNew.author.socialLinks.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter" className={styles.socialIconLink}><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-.422.724-.665 1.56-.665 2.452 0 1.697.864 3.198 2.18 4.078-.8-.025-1.555-.247-2.227-.616v.054c0 2.37 1.683 4.333 3.91 4.78-.426.116-.874.174-1.337.174-.31 0-.611-.03-.904-.085.622 1.936 2.421 3.338 4.553 3.377-1.672 1.309-3.781 2.088-6.072 2.088-.394 0-.784-.023-1.169-.069 2.16 1.389 4.723 2.202 7.482 2.202 8.979 0 13.897-7.446 13.897-13.898 0-.21 0-.42-.015-.63.953-.689 1.778-1.56 2.433-2.525z"/></svg></a>)}
                        {reviewDataNew.author.socialLinks.email && ( <a href={`mailto:${reviewDataNew.author.socialLinks.email}`} aria-label="Email" className={styles.socialIconLink}><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"/></svg></a>)}
                    </div>)}
                </div>
                {showAuthorBioTooltip && ( <div className={styles.authorTooltip} ref={authorTooltipRef} role="tooltip" onMouseEnter={handleTooltipMouseEnter} onMouseLeave={handleAuthorMouseLeave} onFocus={handleTooltipMouseEnter} onBlur={handleAuthorMouseLeave}>
                    <div className={styles.authorTooltipHeader}><Image src={reviewDataNew.author.tooltipImageUrl} alt={`${reviewDataNew.author.name} headshot`} width={reviewDataNew.author.tooltipImageWidth} height={reviewDataNew.author.tooltipImageHeight} className={styles.authorTooltipImage}/><div className={styles.authorTooltipInfo}><span className={styles.authorTooltipName}>{reviewDataNew.author.name}</span><span className={styles.authorTooltipTitle}>{reviewDataNew.author.title}</span></div></div>
                    {reviewDataNew.author.expertise && reviewDataNew.author.expertise.length > 0 && ( <div className={styles.authorTooltipExpertise}><strong>Expertise</strong><ul>{reviewDataNew.author.expertise.map(area => <li key={area}>{area}</li>)}</ul></div>)}
                    <p className={styles.authorTooltipBioSnippet}>{reviewDataNew.author.bioSnippet}</p>
                    {reviewDataNew.author.fullBioLink && ( <Link href={reviewDataNew.author.fullBioLink} legacyBehavior><a className={styles.authorTooltipBioLink}>See full bio</a></Link>)}
                    {reviewDataNew.author.socialLinks && ( <div className={styles.authorTooltipSocials}>
                        {reviewDataNew.author.socialLinks.linkedin && ( <a href={reviewDataNew.author.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={styles.socialIconLink}><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg></a>)}
                        {reviewDataNew.author.socialLinks.twitter && ( <a href={reviewDataNew.author.socialLinks.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter" className={styles.socialIconLink}><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-.422.724-.665 1.56-.665 2.452 0 1.697.864 3.198 2.18 4.078-.8-.025-1.555-.247-2.227-.616v.054c0 2.37 1.683 4.333 3.91 4.78-.426.116-.874.174-1.337.174-.31 0-.611-.03-.904-.085.622 1.936 2.421 3.338 4.553 3.377-1.672 1.309-3.781 2.088-6.072 2.088-.394 0-.784-.023-1.169-.069 2.16 1.389 4.723 2.202 7.482 2.202 8.979 0 13.897-7.446 13.897-13.898 0-.21 0-.42-.015-.63.953-.689 1.778-1.56 2.433-2.525z"/></svg></a>)}
                        {reviewDataNew.author.socialLinks.email && ( <a href={`mailto:${reviewDataNew.author.socialLinks.email}`} aria-label="Email" className={styles.socialIconLink}><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"/></svg></a>)}
                    </div>)}
                </div>)}
            </div>
            <p className={styles.reviewDisclaimer}>We may receive compensation when you click on links to certain credit card products on our site. However, our recommendations remain our own, and offers are subject to change. Always verify details with the official issuer. Terms apply to credit card benefits and offers.</p>
          </header>

          <nav className={styles.reviewToc}>
            <h2>In this review:</h2>
            <ol>{TocLinks.map(link => ( <li key={link.href}><a href={link.href}>{link.label}</a></li> ))}</ol>
          </nav>

          <section id="introduction" className={styles.reviewSection}>
            <h2>I. Introduction: The {reviewDataNew.cardName} for West Coasters</h2>
            <p>If you're eyeing the {reviewDataNew.cardName}, especially as a West Coaster, you want the real story. Is it still a top-tier travel companion in 2025, or are there better options? This review breaks down exactly what you get, what it costs, and who this card genuinely makes sense for – all to help you decide if it deserves a spot in your wallet.</p>
          </section>

          <section id="annual-fee-interest" className={styles.reviewSection}>
            <h2>II. Annual Fee and Interest: Is It Worth It?</h2>
            <p>The {reviewDataNew.cardName} comes with a ${reviewDataNew.annualFee} annual fee. This is pretty standard for an airline rewards card. The big question is always: will the benefits you use outweigh this yearly cost? If you can save more than ${reviewDataNew.annualFee} through perks like the Companion Fare or free checked bags, then yes, it can definitely be worth it.</p>
            <p>Now, a crucial heads-up on interest: if you carry a balance, the Annual Percentage Rate (APR) on purchases is a variable 20.24% to 28.24%. Honestly, to get true value from any rewards card, including this one, you should aim to pay your balance in full each month. Interest charges can quickly wipe out the value of any miles you earn. Balance transfers also fall into this APR range, plus a 4% fee. Cash advances? Best to avoid them due to higher APRs and fees.</p>
            <p>One solid gold perk: no foreign transaction fees. This is essential for international travel, saving you around 3% on purchases made abroad. Just be mindful of potential late payment fees (up to $40) and a higher penalty APR if you miss a due date.</p>
          </section>

          <section id="welcome-offer" className={styles.reviewSection}>
            <h2>III. Welcome Offer in 2025: What You Get</h2>
            <p>As of early 2025, the typical welcome offer for new {reviewDataNew.cardName} cardholders is quite appealing. You can usually expect to earn 60,000 bonus miles plus Alaska's Famous Companion Fare (this initial one lets a companion fly with you from $99 plus taxes/fees, starting around $23). To qualify, you'll generally need to spend $3,000 or more on purchases within the first 90 days of opening your account.</p>
            <p>Those 60,000 bonus miles are valuable – travel experts often value Alaska miles at 1.3 to 1.5 cents each, making the miles alone worth potentially $780 to $900 towards flights. Getting the Companion Fare upfront is a significant perk, offering immediate savings. Some offers may also include a percentage-off discount code for a future flight, but these often come with specific booking windows, travel dates, and fare restrictions, so its actual value can vary greatly depending on your flexibility.</p>
          </section>

          <section id="earning-miles" className={styles.reviewSection}>
            <h2>IV. Earning Miles: Alaska, Gas, Streaming & More</h2>
            <p>This card lets you rack up miles in a few key ways:</p>
            <ul>
              <li>On Alaska Airlines purchases: Earn a generous 3 miles for every $1 spent on eligible flights, in-flight purchases, and vacation packages.</li>
              <li>On everyday spending: Get 2 miles for every $1 spent on eligible gas, EV charging, cable, streaming services, and local transit (including rideshares, trains, and ferries).</li>
              <li>On all other purchases: Earn 1 mile for every $1 spent.</li>
            </ul>
            <p>If you have an eligible Bank of America checking, savings, or investment account, you can get a 10% relationship bonus on all miles earned from card purchases, boosting your earning rates slightly. A significant enhancement for 2025 is the ability to earn 1 Elite Qualifying Mile (EQM) for every $3 spent on your card, up to 30,000 EQMs annually. This offers a tangible way to help you reach Alaska Airlines elite status through your card spending.</p>
            <div className={`${styles.tableResponsive} ${styles.valueTableContainer}`}>
              <h4 style={{textAlign: 'center', marginBottom: '0.5rem'}}>Table 1: Earning Miles with the {reviewDataNew.cardName}</h4>
              <table className={`${styles.comparisonTable} ${styles.noStickyFirstCol} ${styles.valueTable}`}>
                <thead><tr><th>Spending Category</th><th>Miles per $1</th><th>Notes</th></tr></thead>
                <tbody>
                  <tr><td data-label="Spending Category">Eligible Alaska Airlines purchases (flights, in-flight, vacation packages)</td><td data-label="Miles per $1">3X</td><td data-label="Notes">Core earning for loyal flyers</td></tr>
                  <tr><td data-label="Spending Category">Eligible gas, EV charging, cable, streaming services, local transit (rideshares, trains, ferries)</td><td data-label="Miles per $1">2X</td><td data-label="Notes">Broad everyday categories</td></tr>
                  <tr><td data-label="Spending Category">All other purchases</td><td data-label="Miles per $1">1X</td><td data-label="Notes">Base earn rate</td></tr>
                  <tr><td data-label="Spending Category">Relationship Bonus</td><td data-label="Miles per $1">+10% on earned miles</td><td data-label="Notes">Requires eligible Bank of America account</td></tr>
                  <tr><td data-label="Spending Category">Elite Qualifying Miles (EQMs)</td><td data-label="Miles per $1">1 EQM per $3 spent</td><td data-label="Notes">Up to 30,000 EQMs annually; helps achieve elite status</td></tr>
                </tbody>
              </table>
              <p className={styles.tableCaption}>Mileage earning details for the {reviewDataNew.cardName}.</p>
            </div>
          </section>

          <section id="cta-Alaska-Airlines-Visa-Signature-Card" className={styles.ctaSection}>
            <h2>Interested in the <b>{reviewDataNew.cardName}</b>?</h2>
            <p>Unlock valuable miles, the famous Companion Fare, and more travel perks.</p>
            <div className={styles.ctaButtons}>
              <a href={reviewDataNew.applyLink} className={`${styles.btn} ${styles.btnApply}`} title={`Apply for the ${reviewDataNew.cardName} on the issuer's secure site`} target="_blank" rel="noopener noreferrer sponsored">Apply Now</a>
              <a href={reviewDataNew.ratesLink} className={`${styles.btn} ${styles.btnRates}`} title={`See rates and fees for the ${reviewDataNew.cardName}`} target="_blank" rel="noopener noreferrer sponsored">See Rates & Fees</a>
            </div>
          </section>

          <section id="companion-fare" className={styles.reviewSection}>
            <h2>V. The Companion Fare Explained</h2>
            <p>The Famous Companion Fare is a standout perk of the Alaska Visa. Here's the deal: after your first year's welcome bonus fare, you can earn another one each year around your account anniversary. The main catch? You need to have spent $6,000 or more on the card in the prior year (that’s an average of $500 a month).</p>
            <p>If you meet that spend, you get a discount code. This lets your travel buddy fly with you on a round-trip Alaska Airlines coach ticket for just a $99 base fare, plus taxes and fees (which start from about $23). So, they could be flying for as little as $122 – a huge potential saving, easily offsetting the ${reviewDataNew.annualFee} annual fee.</p>
            <p>The code usually shows up in your Alaska Mileage Plan account a bit after your card anniversary. You'll typically have 12 months to book the travel, though the trip itself can be later. Plus, there are no blackout dates on Alaska-operated flights when using the code.</p>
            <p>Big news for 2025: starting mid-summer, this Companion Fare will also be usable on select Hawaiian Airlines flights! This is a fantastic boost, especially for West Coast to Hawaii trips. Remember, the cardholder must be traveling or purchasing, and you can’t use miles for the companion’s ticket, but you both earn miles on the flight, and these tickets are eligible for upgrades.</p>
          </section>

          <section id="travel-benefits" className={styles.reviewSection}>
            <h2>VI. Travel Benefits That Add Real Value</h2>
            <p>Beyond the Companion Fare, the card offers other perks that can genuinely save you money and hassle:</p>
            <ul>
              <li><strong>First Free Checked Bag:</strong> This is a big one. The primary cardholder and up to six other guests on the same reservation each get their first checked bag free on flights marketed and operated by Alaska Airlines (and now Hawaiian Airlines, when purchased with the card). With bag fees typically $35 each way, a couple saves $140 on a single roundtrip – easily covering the ${reviewDataNew.annualFee} annual fee.</li>
              <li><strong>Priority Boarding:</strong> Cardholders and those on their reservation (when the flight is paid for with the card) get to board earlier, making it easier to find overhead bin space.</li>
              <li><strong>20% Back on Inflight Purchases:</strong> Receive a 20% statement credit on purchases of food, beverages, and Wi-Fi aboard Alaska Airlines flights when paying with your card.</li>
              <li><strong>Alaska Lounge+ Discount:</strong> Get a $100 discount on an annual Alaska Lounge+ Membership when purchased with the card. This is most valuable for very frequent flyers.</li>
            </ul>
            <p>The free checked bag benefit, in particular, delivers consistent, easily quantifiable value trip after trip.</p>
            <div className={`${styles.tableResponsive} ${styles.valueTableContainer}`}>
              <h4 style={{textAlign: 'center', marginBottom: '0.5rem'}}>Table 2: Key Travel Perks with the {reviewDataNew.cardName}</h4>
              <table className={`${styles.comparisonTable} ${styles.noStickyFirstCol} ${styles.valueTable}`}>
                <thead><tr><th>Benefit</th><th>Details</th></tr></thead>
                <tbody>
                  <tr><td data-label="Benefit">First Free Checked Bag</td><td data-label="Details">For cardholder + up to 6 guests on same reservation (Alaska & Hawaiian flights). Potential $35+ savings per person, each way.</td></tr>
                  <tr><td data-label="Benefit">Priority Boarding</td><td data-label="Details">For cardholder and travel companions on the same reservation.</td></tr>
                  <tr><td data-label="Benefit">Inflight Purchase Rebate</td><td data-label="Details">20% back as statement credit on food, beverages, Wi-Fi on Alaska flights.</td></tr>
                  <tr><td data-label="Benefit">Alaska Lounge+ Discount</td><td data-label="Details">$100 off annual membership.</td></tr>
                  <tr><td data-label="Benefit">No Foreign Transaction Fees</td><td data-label="Details">Saves ~3% on purchases abroad.</td></tr>
                </tbody>
              </table>
              <p className={styles.tableCaption}>Summary of valuable travel benefits.</p>
            </div>
          </section>

          <section id="elite-status-perks" className={styles.reviewSection}>
            <h2>VII. Elite Status Perks in 2025</h2>
            <p>Reaching elite status with Alaska Airlines (MVP, MVP Gold, etc.) unlocks valuable benefits like upgrades, bonus miles, and priority services. For 2025, the {reviewDataNew.cardName} plays a more direct role:</p>
            <ul>
              <li><strong>Earn EQMs with Card Spend:</strong> As mentioned, earning 1 EQM for every $3 spent (up to 30,000 EQMs annually) is a significant pathway to help you qualify or requalify for status. For example, MVP status requires 20,000 EQMs.</li>
              <li><strong>Mileage Plan Enhancements:</strong> Alaska's loyalty program itself has seen upgrades for 2025 that benefit elite members and those aspiring to be. This includes earning EQMs on award tickets (based on distance flown on Alaska and partners), and new Milestone Rewards that offer choices of perks at various EQM thresholds (starting at 10,000 EQMs), even between traditional elite tiers.</li>
              <li><strong>Upgrade Prioritization:</strong> For 2025, upgrade waitlists are prioritized based on elite tier and EQMs earned, and MVP members are now eligible for complimentary space-available upgrades for a companion.</li>
            </ul>
            <p>These changes make achieving and enjoying elite status more accessible and rewarding.</p>
          </section>

          <section id="mileage-plan-changes" className={styles.reviewSection}>
            <h2>VIII. What Changed in Alaska Mileage Plan for 2025?</h2>
            <p>Beyond the elite-specific enhancements, Alaska Airlines has made its Mileage Plan more robust overall for 2025:</p>
            <ul>
              <li><strong>Partner Integration:</strong> Alaska's membership in the oneworld Alliance continues to provide global reach. The deepening integration with Hawaiian Airlines (set to join oneworld in 2026) is a major plus, expanding options, especially for West Coast travelers. Remember, the Companion Fare will be usable on select Hawaiian flights from mid-summer 2025.</li>
              <li><strong>Multi-Carrier Redemptions:</strong> A significant upcoming improvement (launching winter 2025, starting with US-Europe) is the ability to combine flights from different global partners on a single award itinerary. This will simplify booking complex international trips using miles.</li>
              <li><strong>Simplified Partner Earning:</strong> When booking flights with many direct partners through alaskaair.com, members earn 100% of the miles flown, with increased mileage bonuses for premium cabin travel on partners in 2025.</li>
            </ul>
            <p>These changes aim to make Mileage Plan more flexible and powerful for redeeming your hard-earned miles globally.</p>
          </section>

          <section id="sweet-spot-redemptions" className={styles.reviewSection}>
            <h2>IX. Sweet Spot Redemptions with Alaska Miles</h2>
            <p>Alaska Mileage Plan miles are widely considered some of the most valuable airline miles, often valued at 1.3 to 1.5 cents apiece. There are several ways to get great value:</p>
            <ul>
              <li><strong>No Blackout Dates on Alaska Flights:</strong> When redeeming miles for Alaska's own flights, you benefit from no blackout dates.</li>
              <li><strong>Partner Awards:</strong> Mileage Plan truly shines with its diverse range of airline partners, especially for international premium cabin travel. Savvy travelers find "sweet spots" on airlines like Starlux to Asia, or LATAM to South America.</li>
              <li><strong>Free Stopovers:</strong> A unique and fantastic feature is the ability to add a free stopover on most one-way award tickets, even on international partner awards. This essentially lets you visit two destinations for the miles of one. For example, you could fly from the US to London on British Airways, have a stopover for a few days, and then continue to another European city, all as part of one award.</li>
            </ul>
            <p>Exploring partner awards and utilizing stopovers are key to maximizing your Alaska miles.</p>
          </section>

          <section id="card-shortcomings" className={styles.reviewSection}>
            <h2>X. Where This Card Falls Short (Card Protections)</h2>
            <p>Now, for an area where this card, frankly, doesn't shine: built-in travel and purchase protections. The personal {reviewDataNew.cardName} appears to lack comprehensive, issuer-provided travel insurance benefits like trip cancellation/interruption coverage, significant lost luggage reimbursement, or an auto rental collision damage waiver (CDW). Many other travel cards in the same ${reviewDataNew.annualFee} annual fee range typically include these as standard.</p>
            <p>While you get $0 liability for fraudulent transactions and free FICO score access, the absence of robust travel protections is a notable drawback for a card marketed towards travelers. Alaska Airlines does promote travel insurance you can purchase separately, but this is an added cost and not an automatic card benefit. If strong, automatic travel insurance is a high priority for you, this card likely isn't your best primary option for travel bookings.</p>
          </section>

          <section id="final-verdict" className={styles.reviewSection}>
            <h2>XI. Final Verdict: Who Should Get the Alaska Visa?</h2>
            <p>So, after breaking it all down, who is the {reviewDataNew.cardName} genuinely a good fit for in 2025?</p>
            <div className={styles.prosConsContainer}> {/* Using prosConsContainer for consistent layout if needed */}
              <div className={styles.prosSection}> {/* Re-using class, can be generic 'highlight-section' */}
                <h3>This card is likely a great choice if:</h3>
                <ul>
                  <li>You're a loyal Alaska Airlines flyer, especially if you live on the West Coast.</li>
                  <li>You frequently travel with at least one other person and can maximize the annual Companion Fare (and are comfortable with the $6,000 annual spend to earn it after the first year).</li>
                  <li>You value free checked bags – the savings here alone can easily offset the annual fee for individuals, couples, or families.</li>
                  <li>You're aiming for Alaska Airlines elite status and can leverage the EQMs earned through card spending.</li>
                  <li>You appreciate the value and flexibility of Alaska Mileage Plan miles, especially for partner awards and stopovers.</li>
                </ul>
              </div>
              <div className={styles.consSection}> {/* Re-using class, can be generic 'highlight-section' */}
                <h3>You might want to reconsider, or look at other options, if:</h3>
                <ul>
                  <li>Comprehensive travel insurance and purchase protections baked into your card are essential for your peace of mind. This card is weak here.</li>
                  <li>You rarely fly Alaska Airlines or its partners.</li>
                  <li>You typically travel solo (the Companion Fare won't be as valuable).</li>
                  <li>You don't anticipate spending $6,000 annually on the card to earn the anniversary Companion Fare.</li>
                  <li>You tend to carry a credit card balance – the interest charges will likely outweigh the rewards.</li>
                </ul>
              </div>
            </div>
            <div className={`${styles.reviewSubSection} ${styles.eetaSection || ''}`} style={{marginTop: 'var(--spacing-lg)'}}>
              <h3>Editor's Essential Takeaways</h3>
              <p>Ultimately, the {reviewDataNew.cardName} continues to offer significant, tangible value for its target audience, particularly with the 2025 enhancements. The Companion Fare and free checked bags are powerful money-savers. Just be sure its strengths align with your travel habits and that you're comfortable with its shortcomings, especially regarding travel protections. For the right West Coast traveler, it remains a very compelling co-branded airline card.</p>
            </div>
          </section>

           <section className={`${styles.reviewSection} ${styles.finalCtaSection}`}>
            <h2>Ready to Take Flight with the {reviewDataNew.cardName}?</h2>
            <p>If the Companion Fare, free checked bags, and Alaska miles align with your travel plans, this card could be a valuable addition to your wallet.</p>
            <div className={styles.ctaButtons}>
              <a href={reviewDataNew.applyLink} className={`${styles.btn} ${styles.btnApply} ${styles.btnLarge}`} target="_blank" rel="noopener noreferrer sponsored" title={`Apply for The ${reviewDataNew.cardName} on the issuer's secure site`}>
                Apply for the Alaska Airlines Card
              </a>
              <a href={reviewDataNew.ratesLink} className={`${styles.btn} ${styles.btnRates} ${styles.btnLarge}`} target="_blank" rel="noopener noreferrer sponsored" title={`See rates and fees for The ${reviewDataNew.cardName}`}>
                See Rates & Fees
              </a>
            </div>
            <p className={styles.smallPrintTerms}>Terms Apply. Click links for details.</p>
          </section>

        </article>
      </main>

      <div className={styles.stickyCtaContainer}>
        <div className={styles.stickyCtaContent}>
            <span className={styles.stickyCtaText}>{reviewDataNew.cardName} - ${reviewDataNew.annualFee} Annual Fee.</span>
            <div className={styles.stickyCtaButtons}>
                <a href={reviewDataNew.applyLink} target="_blank" rel="noopener noreferrer sponsored" className={`${styles.btn} ${styles.btnApply} ${styles.ctaButtonApply}`}>Apply Now</a>
                <a href={reviewDataNew.learnMoreLink} target="_blank" rel="noopener noreferrer sponsored" className={`${styles.btn} ${styles.btnRates} ${styles.ctaButtonLearnMore}`}>Learn More</a>
            </div>
        </div>
      </div>
    </>
  );
}