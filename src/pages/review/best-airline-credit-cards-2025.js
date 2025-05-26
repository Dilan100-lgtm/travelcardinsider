// File: pages/reviews/best-airline-credit-cards-2025.js

import React, { useState, useRef, useEffect, useCallback } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/reviews2025.module.css'; // Ensure this path is correct

const siteUrl = 'https://www.travelcardinsider.com'; // Your actual site URL

// Main data structure for this comprehensive review page
const pageData = {
  pageType: "Comprehensive Review",
  mainTitle: "Best Airline Credit Cards of 2025: Lounge Access, Free Bags & Flight Rewards",
  shortTitle: "Best Airline Cards 2025",
  // SEO OPTIMIZATION
  title: "Best Airline Credit Cards of 2025: Top Picks for Rewards & Perks",
  description: "Discover the best airline credit cards for US travelers in 2025. Reviews of top cards for lounge access, free checked bags, flight rewards, and overall travel value.",
  keywords: [
    "best airline credit cards 2025",
    "airline rewards cards",
    "travel credit cards US",
    "airport lounge access cards",
    "free checked bag credit card",
    "flight rewards",
    "Amex Platinum review",
    "Chase Sapphire Reserve review",
    "Capital One Venture X review",
    "Delta SkyMiles cards",
    "United MileagePlus cards",
    "American Airlines AAdvantage cards",
    "Southwest Rapid Rewards cards"
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
          'Premium Travel Rewards Cards',
          'Loyalty Program Analysis',
          'Maximizing Point Redemptions',
          'Credit Card Benefits Evaluation'
      ],
      bioSnippet: 'Dilan Madushanka is the founder and lead editor of TravelCardInsider.com, dedicated to demystifying credit cards and uncovering their real-world value for smarter travel.',
      fullBioLink: '/author/dilan-madushanka', // IMPORTANT: Update with your actual author bio page link
      socialLinks: {
          linkedin: 'https://www.linkedin.com/in/dilan-madushanka-b65293365', // IMPORTANT: Update
          twitter: 'https://x.com/team_dilan', // IMPORTANT: Update
          email: 'team@travelcardinsider.com' // IMPORTANT: Update
      }
  },
  siteName: "TravelCardInsider.com",
  pagePath: "/reviews/best-airline-credit-cards-2025", // IMPORTANT: Confirm this path
  imageUrl: "/images/best-airline-cards-2025-hero.webp", // IMPORTANT: Update with a relevant hero image
  heroImageObjectPosition: "center center",
  imageWidth: 1600,
  imageHeight: 900,
  siteLogoUrl: "/images/logo.png", // IMPORTANT: Update with your site logo path
  publishDate: "2025-05-26", // IMPORTANT: Set current date
  updateDate: "2025-05-26", // IMPORTANT: Keep updateDate current
  ratingValue: 4.7, // IMPORTANT: Set an overall rating for the quality/comprehensiveness of this guide
  // For a general review page, direct apply/rates links are less relevant at the top level
  // Individual cards will have their own links within the content.
  // Learn more could point to a general credit cards page or #introduction
  learnMoreLink: "#introduction", 
  heroH1Content: "Best Airline Credit Cards of 2025: Lounge, Bags & Rewards Guide",
  reviewBody: "Our comprehensive 2025 guide to the top airline credit cards for US travelers. We analyze the perks that matter: lounge access, free bags, and flight rewards, to help you choose the best card.",
  brandName: "Airline Credit Card Reviews", // General brand for this type of page
   // Key themes discussed in the article
  keyThemes: [
    { id: "loungeAccess", name: "Airport Lounge Access", details: "Evaluating cards offering access to various lounge networks like Centurion, Priority Pass, Sky Club, etc." },
    { id: "freeBags", name: "Free Checked Bags", details: "Analyzing how different cards provide savings on checked baggage fees." },
    { id: "flightRewards", name: "Flight Rewards & Points", details: "Comparing point earning, redemption values, and transfer partner flexibility." },
    { id: "premiumPerks", name: "Premium Travel Perks", details: "Covering luxury benefits and comprehensive travel credits." },
    { id: "coBrandLoyalty", name: "Co-Branded Card Loyalty", details: "Assessing cards tied to specific airlines like Delta, United, AA, and Southwest." }
  ]
};

const pageUrlFull = `${siteUrl}${pageData.pagePath}`;

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article", // Changed from Review to Article as it covers multiple products
  "headline": pageData.title,
  "description": pageData.description,
  "image": [`${siteUrl}${pageData.imageUrl}`],
  "datePublished": pageData.publishDate,
  "dateModified": pageData.updateDate,
  "author": {
    "@type": "Person",
    "name": pageData.author.name,
    "url": `${siteUrl}${pageData.author.fullBioLink}` // IMPORTANT: Update if fullBioLink is different
  },
  "publisher": {
    "@type": "Organization",
    "name": pageData.siteName,
    "logo": {
      "@type": "ImageObject",
      "url": `${siteUrl}${pageData.siteLogoUrl}`
    }
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": pageUrlFull
  },
  "keywords": pageData.keywords.join(', '),
  // If you want to list items reviewed, you can do so here.
  // This is more complex for an article reviewing many cards.
  // For simplicity, focusing on Article schema.
  // You could add "review" aspects if desired, detailing what is being "reviewed" (e.g., "the landscape of airline credit cards")
};

const TocLinks = [
  { href: "#introduction", label: "Why Your Card Choice Matters" },
  { href: "#big-three-perks", label: "The Big Three Perks" },
  { href: "#premium-cards", label: "Titans of Travel: Premium Cards" },
  { href: "#amex-platinum", label: "  Amex Platinum" },
  { href: "#chase-sapphire-reserve", label: "  Chase Sapphire Reserve" },
  { href: "#capital-one-venture-x", label: "  Capital One Venture X" },
  { href: "#co-branded-cards", label: "Loyalty Pays: Co-Branded Cards" },
  { href: "#delta-reserve", label: "  Delta Reserve" },
  { href: "#united-infinite", label: "  United Club Infinite" },
  { href: "#citi-aadvantage-executive", label: "  Citi AAdvantage Executive" },
  { href: "#southwest-priority", label: "  Southwest Priority" },
  { href: "#decoding-perks", label: "Decoding the Perks" },
  { href: "#making-the-cut", label: "Choosing Your 2025 Card" },
  { href: "#final-recommendations", label: "Final Recommendations" },
];

export default function BestAirlineCreditCards2025() {
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
      const heroImageEl = document.querySelector(`.${styles.heroImageContainer}`); // Make sure this class exists
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
  }, []); // Removed TocLinks from dependency array as it's constant

  const formattedUpdateDate = new Date(pageData.updateDate).toLocaleDateString('en-US', { month: 'long', year: 'numeric' });

  return (
    <>
      <Head>
        <title>{pageData.title}</title>
        <meta name="description" content={pageData.description} />
        <meta name="keywords" content={pageData.keywords.join(', ')} />
        <meta name="author" content={pageData.author.name} />
        <meta name="robots" content="index,follow" />
        <link rel="canonical" href={pageUrlFull} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={pageData.title} />
        <meta property="og:description" content={pageData.description} />
        <meta property="og:url" content={pageUrlFull} />
        <meta property="og:image" content={`${siteUrl}${pageData.imageUrl}`} />
        <meta property="og:image:width" content={String(pageData.imageWidth)} />
        <meta property="og:image:height" content={String(pageData.imageHeight)} />
        <meta property="og:site_name" content={pageData.siteName} />
        {/* IMPORTANT: Update with your actual Facebook profile/page URL for your site */}
        <meta property="article:publisher" content={`https://www.facebook.com/yourtravelcardinsiderprofile`} /> 
        <meta property="article:published_time" content={pageData.publishDate} />
        <meta property="article:modified_time" content={pageData.updateDate} />
        <meta property="article:author" content={pageData.author.name} /> {/* Or link to author FB profile if preferred */}
        <meta name="twitter:card" content="summary_large_image" />
        {/* IMPORTANT: Update with your site's Twitter handle */}
        <meta name="twitter:site" content="@TravelCardInsid" /> 
        <meta name="twitter:title" content={`Best Airline Cards 2025: Perks & Rewards Revealed`} />
        <meta name="twitter:description" content={`Our ${new Date(pageData.publishDate).getFullYear()} guide to top airline credit cards for lounge access, free bags, and maximizing flight rewards.`} />
        <meta name="twitter:image" content={`${siteUrl}${pageData.imageUrl}`} />
        <meta name="twitter:creator" content={pageData.author.socialLinks.twitter ? pageData.author.socialLinks.twitter.replace('https://x.com/', '@') : '@DilanMadushanka'} /> {/* IMPORTANT: Update */}
        <meta name="geo.region" content="US" />
        <meta name="geo.placename" content="United States" />
        <meta name="language" content="en-US" />
        <meta name="distribution" content="global" />
        <link rel="alternate" hrefLang="en-us" href={pageUrlFull} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </Head>

      <div className={styles.trustSignalBar}>
        <div className={styles.trustSignalContent}>
          {/* No single issuer logo for a multi-card review */}
          <span>{pageData.shortTitle}</span>
          <span className={styles.trustSignalDivider}>·</span>
          <span>Comprehensive Guide</span>
          <span className={styles.trustSignalBadge}>Updated {formattedUpdateDate}</span>
        </div>
      </div>

      {showStickyNav && (
        <nav className={styles.stickyTocNav} ref={stickyNavRef}>
          <div className={styles.stickyTocContent}>
            <span className={styles.stickyTocTitle}>On this page: {pageData.shortTitle}</span>
            <ul className={styles.stickyTocList}>
              {TocLinks.map(link => (
                <li key={link.href}>
                  <a href={link.href} className={activeSection === link.href.substring(1) ? styles.activeStickyTocLink : styles.stickyTocLink}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            {/* A general "View Cards" or "Learn More" could go here, linking to a relevant section or main cards page */}
             <a href="#final-recommendations" className={`${styles.stickyTocApplyBtn}`}>See Recommendations</a>
          </div>
        </nav>
      )}

      <div className={styles.heroImageContainer}> {/* Ensure this class is in your CSS */}
        <Image
          src={pageData.imageUrl} // IMPORTANT: Update this placeholder
          alt={`${pageData.mainTitle} - Hero Image`}
          width={pageData.imageWidth}
          height={pageData.imageHeight}
          className={styles.heroImage}
          priority
          style={{ objectPosition: pageData.heroImageObjectPosition || "center center" }}
        />
        <div className={styles.heroTextOverlay}>
          <h1 className={styles.heroTitle}>{pageData.heroH1Content}</h1>
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
                <Image src={pageData.author.imageUrl} alt={`${pageData.author.name} headshot`} width={pageData.author.imageWidth} height={pageData.author.imageHeight} className={styles.authorImageSmall} priority />
                <div className={styles.authorInfoBlock}>
                    <div className={styles.authorNameLine}>
                        <span className={styles.authorPrefix}>By</span>
                        <Link href={pageData.author.fullBioLink || '#'} legacyBehavior>
                          <a className={styles.authorName}>{pageData.author.name}</a>
                        </Link>
                    </div>
                    <span className={styles.authorTitle}>{pageData.author.title}</span>
                    {pageData.updateDate && (
                        <time dateTime={pageData.updateDate} className={styles.authorLastEdited}>
                            Fact checked: {new Date(pageData.updateDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                        </time>
                    )}
                    {pageData.author.socialLinks && (
                        <div className={styles.authorSocialLinks}>
                            {pageData.author.socialLinks.linkedin && ( <a href={pageData.author.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`${pageData.author.name} on LinkedIn`} className={styles.socialIconLink}><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg></a>)}
                            {pageData.author.socialLinks.twitter && ( <a href={pageData.author.socialLinks.twitter} target="_blank" rel="noopener noreferrer" aria-label={`${pageData.author.name} on Twitter`} className={styles.socialIconLink}><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-.422.724-.665 1.56-.665 2.452 0 1.697.864 3.198 2.18 4.078-.8-.025-1.555-.247-2.227-.616v.054c0 2.37 1.683 4.333 3.91 4.78-.426.116-.874.174-1.337.174-.31 0-.611-.03-.904-.085.622 1.936 2.421 3.338 4.553 3.377-1.672 1.309-3.781 2.088-6.072 2.088-.394 0-.784-.023-1.169-.069 2.16 1.389 4.723 2.202 7.482 2.202 8.979 0 13.897-7.446 13.897-13.898 0-.21 0-.42-.015-.63.953-.689 1.778-1.56 2.433-2.525z"/></svg></a>)}
                            {pageData.author.socialLinks.email && ( <a href={`mailto:${pageData.author.socialLinks.email}`} aria-label={`Email ${pageData.author.name}`} className={styles.socialIconLink}><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"/></svg></a>)}
                        </div>
                    )}
                </div>
                {showAuthorBioTooltip && (
                    <div className={styles.authorTooltip} ref={authorTooltipRef} role="tooltip" onMouseEnter={handleTooltipMouseEnter} onMouseLeave={handleAuthorMouseLeave} onFocus={handleTooltipMouseEnter} onBlur={handleAuthorMouseLeave}>
                         <div className={styles.authorTooltipHeader}>
                             <Image src={pageData.author.tooltipImageUrl} alt={`${pageData.author.name} headshot`} width={pageData.author.tooltipImageWidth} height={pageData.author.tooltipImageHeight} className={styles.authorTooltipImage}/>
                             <div className={styles.authorTooltipInfo}>
                                 <span className={styles.authorTooltipName}>{pageData.author.name}</span>
                                 <span className={styles.authorTooltipTitle}>{pageData.author.title}</span>
                             </div>
                           </div>
                           {pageData.author.expertise && pageData.author.expertise.length > 0 && ( <div className={styles.authorTooltipExpertise}><strong>Expertise</strong><ul>{pageData.author.expertise.map(area => <li key={area}>{area}</li>)}</ul></div>)}
                           <p className={styles.authorTooltipBioSnippet}>{pageData.author.bioSnippet}</p>
                           {pageData.author.fullBioLink && ( <Link href={pageData.author.fullBioLink} legacyBehavior><a className={styles.authorTooltipBioLink}>See full bio</a></Link>)}
                           {/* Social links can be added to tooltip if desired, similar to above */}
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
            <h2>In this {pageData.shortTitle} guide:</h2>
            <ol>
              {TocLinks.map(link => (
                <li key={link.href}><a href={link.href}>{link.label}</a></li>
              ))}
            </ol>
          </nav>

          {/* Content Sections */}
          <section id="introduction" className={styles.reviewSection}>
            <h2>I. Why Your Airline Card Choice is Crucial in 2025</h2>
            <p>The dream of travel is alive and well, but for US travelers in 2025, the landscape of rewards, perks, and loyalty programs is more like a shifting sand dune than solid ground. Dynamic award pricing, fierce competition for those coveted premium seats, and evolving expectations for comfort mean your choice of airline credit card isn&apos;t just important—it&apos;s crucial. We&apos;re all looking for real, sustained value, not just flashy sign-up bonuses that fade away.</p>
            <p>Card issuers are constantly trying to outdo each other, which can be a double-edged sword. New perks are exciting, but they can also turn your card&apos;s benefits guide into a &quot;coupon book&quot; nightmare – lots of offers, but many are niche or a pain to actually use. Even standbys like lounge access can get watered down by overcrowding. And as we&apos;ve seen with recent shifts, like Southwest Airlines tweaking its long-standing free bag policy (see official details on the <a href="https://www.southwest.com/help/baggage/checked-baggage-policy" target="_blank" rel="noopener noreferrer">Southwest Airlines Official Baggage Policy Page</a>), nothing is set in stone. This means we need to be smarter than ever about what&apos;s in our wallets.</p>
          </section>

          <section id="big-three-perks" className={styles.reviewSection}>
            <h2>II. The Big Three: What Really Matters in an Airline Card?</h2>
            <p>For most US travelers, three perks consistently rise to the top:</p>
            <ul>
                <li><strong>Airport Lounge Access:</strong> An oasis in the chaos of the terminal. It&apos;s a place to relax, work, grab a bite, and use Wi-Fi, turning a dreaded layover into a welcome break.</li>
                <li><strong>Free Checked Bags:</strong> With airlines increasingly charging for luggage, this can save you serious cash, especially for families or longer trips.</li>
                <li><strong>Flight Rewards:</strong> The core promise – earning points or miles for free or upgraded flights. Getting the most out of this is often the name of the game.</li>
            </ul>
            <p>These pillars can dramatically upgrade your travel and save you money, making your card choice a key financial and lifestyle decision. For 2025, with ongoing tweaks to lounge rules, baggage fees, and loyalty program values, an up-to-date look is essential.</p>
          </section>

          <section id="premium-cards" className={styles.reviewSection}>
            <h2>III. The Titans of Travel: Best Premium Cards for All-Around Airline Perks</h2>
            <p>If you fly various airlines and want top-tier perks with flexibility, premium travel rewards cards are your champions. They offer points transferable to multiple partners and a suite of benefits to upgrade your entire journey. The trick is ensuring the annual fee is justified by the real-world value you get.</p>
            
            <article id="amex-platinum" className={styles.cardMiniReview}>
              <h3>1. The Platinum Card® from American Express: Still the Luxury King?</h3>
              <ul>
                <li><strong>Annual Fee:</strong> $695. For full terms and to apply, visit the <a href="https://www.americanexpress.com/us/credit-cards/card/platinum/" target="_blank" rel="noopener noreferrer sponsored">American Express Official Card Page - The Platinum Card</a>.</li>
                <li><strong>Lounge Access:</strong> This is its signature. You get the Amex Global Lounge Collection: Centurion Lounges, Priority Pass Select (enrollment required, typically no restaurant credits), Delta Sky Clubs (when flying Delta, with visit limits from Feb 1, 2025, unless you hit $75k annual spend), and more.</li>
                <li><strong>Guest Policy:</strong> Centurion guests are typically $50/adult. Priority Pass guests also usually incur a fee. Delta Sky Club guests are $50/person.</li>
                <li><strong>Free Checked Bags:</strong> Indirectly, via the up to $200 annual airline fee credit. You pick one airline, and the credit covers incidentals like bag fees.</li>
                <li><strong>User Take:</strong> &quot;My family flies a couple of times a year, and that $200 Amex credit usually covers bag fees for one or two of us on at least one round trip. It&apos;s not &apos;free bags&apos; exactly, but it helps!&quot;</li>
                <li><strong>Flight Rewards:</strong> 5X points on flights booked directly with airlines or Amex Travel (up to $500k/year) and on prepaid hotels via Amex Travel. Points transfer to many partners (Delta, Air Canada, BA, etc.).</li>
                <li><strong>Key Credits:</strong> Up to $200 Uber Cash, $200 hotel credit (specific bookings), $240 digital entertainment, $100 Saks, CLEAR Plus credit, Global Entry/TSA PreCheck credit.</li>
                <li><strong>2025 Vibe:</strong> Lounge crowding, especially Centurion, is a real pain point. The &quot;coupon book&quot; of credits is fantastic if you use them all, but many find it hard to maximize. The Delta Sky Club visit cap is a new factor to consider.</li>
              </ul>
              <div className={styles.ctaButtonsMini}>
                <a href="https://www.americanexpress.com/us/credit-cards/card/platinum/" className={`${styles.btn} ${styles.btnApply}`} target="_blank" rel="noopener noreferrer sponsored">Apply for Amex Platinum</a>
              </div>
            </article>

            <article id="chase-sapphire-reserve" className={styles.cardMiniReview}>
              <h3>2. Chase Sapphire Reserve®: The Versatile Voyager?</h3>
              <ul>
                <li><strong>Annual Fee:</strong> $550. (For official details and to apply, please visit the Chase website).</li>
                <li><strong>Lounge Access:</strong> Priority Pass Select (cardholder + 2 guests free!) and access to the growing Chase Sapphire Lounge network.</li>
                <li><strong>Free Checked Bags:</strong> No direct perk, but the super-flexible $300 annual travel credit automatically reimburses travel purchases, including bag fees.</li>
                <li><strong>User Take:</strong> &quot;I love how easy the Sapphire Reserve&apos;s $300 credit is. Last year, it covered checked bags, an Uber, and part of a hotel stay without me lifting a finger.&quot;</li>
                <li><strong>Flight Rewards:</strong> 5X points on flights and 10X on hotels/cars through Chase Travel (after the $300 credit is used). 3X on other travel/dining. Points are worth 50% more via Chase Travel or transfer 1:1 to partners (United, Southwest, Hyatt, etc.).</li>
                <li><strong>Key Credits:</strong> The $300 travel credit is king. Global Entry/TSA PreCheck/NEXUS credit.</li>
                <li><strong>2025 Vibe:</strong> Justifying the fee often comes down to how easily you use that $300 credit. Priority Pass lounges can still get crowded. The choice of redeeming via the portal or transferring points is a fun strategy game.</li>
              </ul>
               {/* IMPORTANT: You'll need to find the official Chase Sapphire Reserve page link for "Apply" and "Rates & Fees" if you want these buttons here. 
                  Example: <a href="CHASE_SAPPHIRE_RESERVE_OFFICIAL_LINK" className={`${styles.btn} ${styles.btnApply}`} target="_blank" rel="noopener noreferrer sponsored">Apply for Sapphire Reserve</a> 
               */}
            </article>

            <article id="capital-one-venture-x" className={styles.cardMiniReview}>
              <h3>3. Capital One Venture X Rewards Credit Card: The Smart Challenger?</h3>
              <ul>
                <li><strong>Annual Fee:</strong> $395. (For official details and to apply, please visit the Capital One website).</li>
                <li><strong>Lounge Access:</strong> Capital One Lounges (DFW, DEN, IAD – and growing) and Priority Pass Select.</li>
                <li><strong>Guest Policy:</strong> Capital One Lounges: cardholder + 2 guests free. Priority Pass: cardholder + unlimited guests free (subject to lounge capacity)! Authorized users (free to add!) also get their own full lounge access.</li>
                <li><strong>Free Checked Bags:</strong> Via the $300 annual travel credit for bookings through Capital One Travel.</li>
                <li><strong>User Take:</strong> &quot;My partner and I each got a Venture X. Adding each other as free authorized users, both getting Priority Pass with unlimited guests, is incredible for family trips. The $300 travel credit and 10,000 anniversary miles make the fee tiny.&quot;</li>
                <li><strong>Flight Rewards:</strong> Simple 2X miles on everything. 5X on flights and 10X on hotels/cars via Capital One Travel. Miles transfer to 15+ partners (BA, Air Canada, Flying Blue, etc.).</li>
                <li><strong>Key Credits:</strong> $300 annual travel credit (Capital One Travel), 10,000 anniversary bonus miles ($100 value), Global Entry/TSA PreCheck credit.</li>
                <li><strong>2025 Vibe:</strong> Hugely positive. The effective annual fee can be tiny ($395 - $300 credit - $100 anniversary miles = effectively -$5!). The authorized user lounge benefit is unmatched for families/groups.</li>
              </ul>
              {/* IMPORTANT: You'll need to find the official Capital One Venture X page link.
                  Example: <a href="CAPITAL_ONE_VENTURE_X_OFFICIAL_LINK" className={`${styles.btn} ${styles.btnApply}`} target="_blank" rel="noopener noreferrer sponsored">Apply for Venture X</a> 
              */}
            </article>

            <h4>Premium Card Quick Look</h4>
            <div className={styles.tableContainer}> {/* You'll need CSS for this class */}
                <table className={styles.comparisonTable}>
                    <thead>
                        <tr>
                            <th>Feature</th>
                            <th>Amex Platinum</th>
                            <th>Chase Sapphire Reserve</th>
                            <th>Capital One Venture X</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Annual Fee</td>
                            <td>$695</td>
                            <td>$550</td>
                            <td>$395</td>
                        </tr>
                        <tr>
                            <td>Key Lounge</td>
                            <td>Amex Global Collection (Centurion etc.)</td>
                            <td>Priority Pass Select, Sapphire Lounges</td>
                            <td>Capital One Lounges, Priority Pass Select</td>
                        </tr>
                        <tr>
                            <td>Free Bag Perk</td>
                            <td>$200 Airline Fee Credit</td>
                            <td>$300 Annual Travel Credit</td>
                            <td>$300 Annual Travel Credit (portal)</td>
                        </tr>
                        <tr>
                            <td>Standout Credit</td>
                            <td>Multiple lifestyle/travel credits</td>
                            <td>$300 flexible Travel Credit</td>
                            <td>$300 Travel Credit + 10k Anniv. Miles</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            {/* <button className={styles.exportButton}>Export to Sheets</button> {/* Optional */}
          </section>

          <section id="co-branded-cards" className={styles.reviewSection}>
            <h2>IV. Loyalty Pays: Top Co-Branded Cards for Dedicated Flyers</h2>
            <p>If you stick with one airline, a co-branded card can unlock serious perks tailored to that carrier.</p>

            <article id="delta-reserve" className={styles.cardMiniReview}>
                <h3>For the Delta Devotee: Delta SkyMiles® Reserve American Express Card</h3>
                <ul>
                    <li><strong>Annual Fee:</strong> $650. For details and to apply, visit the <a href="https://www.americanexpress.com/us/credit-cards/card/delta-skymiles-reserve-american-express-card/" target="_blank" rel="noopener noreferrer sponsored">Delta Amex Official Card Page - Reserve Card</a>.</li>
                    <li><strong>Lounge Access:</strong> Delta Sky Club (15 visits/year from Feb 1, 2025, or unlimited with $75k spend; 4 guest passes/year). Centurion Lounge access (when flying Delta). See <a href="https://www.delta.com/us/en/delta-sky-club/access" target="_blank" rel="noopener noreferrer">Delta Air Lines Official Sky Club Access Page</a> for current rules.</li>
                    <li><strong>Free Checked Bags:</strong> First bag free for you and up to 8 companions on Delta flights.</li>
                    <li><strong>Flight Rewards & Perks:</strong> Annual round-trip companion certificate (First/Comfort+/Main), $2,500 MQD Headstart + MQD Boost (earn $1 MQD per $10 spent), 15% off award flights (TakeOff 15).</li>
                    <li><strong>User Take:</strong> &quot;I fly Delta for work almost exclusively. The Reserve&apos;s Sky Club access is key, though the 15-visit limit is a new wrinkle. The companion pass alone often saves more than the annual fee for our anniversary trip.&quot;</li>
                </ul>
                 <div className={styles.ctaButtonsMini}>
                    <a href="https://www.americanexpress.com/us/credit-cards/card/delta-skymiles-reserve-american-express-card/" className={`${styles.btn} ${styles.btnApply}`} target="_blank" rel="noopener noreferrer sponsored">Apply for Delta Reserve</a>
                </div>
            </article>

            <article id="united-infinite" className={styles.cardMiniReview}>
                <h3>For the United Enthusiast: United Club℠ Infinite Card</h3>
                <ul>
                    <li><strong>Annual Fee:</strong> $695 (Confirm current fee on the official site). To learn more and apply, visit the <a href="https://creditcards.chase.com/travel-credit-cards/united/club-infinite" target="_blank" rel="noopener noreferrer sponsored">official United Club Infinite Card page from Chase</a>.</li>
                    <li><strong>Lounge Access:</strong> United Club membership for you and eligible guests.</li>
                    <li><strong>Free Checked Bags:</strong> First and second checked bags free for you and one companion on United flights.</li>
                    <li><strong>Flight Rewards & Perks:</strong> Premier Access (priority services), PQP earning towards status (check current earning rates), award discounts.</li>
                    <li><strong>User Take:</strong> &quot;Flying United out of a hub, the Club Infinite is a lifesaver. Lounge access, two free bags each for me and my wife – it adds up. Sometimes I use points with &apos;Pay Yourself Back&apos; to cover part of the fee.&quot;</li>
                </ul>
                <div className={styles.ctaButtonsMini}>
                    <a href="https://creditcards.chase.com/travel-credit-cards/united/club-infinite" className={`${styles.btn} ${styles.btnApply}`} target="_blank" rel="noopener noreferrer sponsored">Apply for United Infinite</a>
                </div>
            </article>

            <article id="citi-aadvantage-executive" className={styles.cardMiniReview}>
                <h3>For the American Airlines Advocate: Citi® / AAdvantage® Executive World Elite Mastercard®</h3>
                <ul>
                    <li><strong>Annual Fee:</strong> $595. For official terms and to apply, visit the <a href="https://creditcards.aa.com/citi-aadvantage-executive-world-elite-mastercard/" target="_blank" rel="noopener noreferrer sponsored">Citi / AAdvantage Executive World Elite Mastercard official page</a> or <a href="https://www.citi.com/credit-cards/citi-aadvantage-executive-world-elite-mastercard" target="_blank" rel="noopener noreferrer sponsored">Citi's official page</a>.</li>
                    <li><strong>Lounge Access:</strong> Admirals Club membership for you and immediate family or up to two guests. Authorized users also get access (for a fee).</li>
                    <li><strong>Free Checked Bags:</strong> First checked bag free for you and up to 8 companions on domestic AA flights.</li>
                    <li><strong>Flight Rewards & Perks:</strong> Loyalty Point bonuses for status, enhanced airport experience (priority boarding, etc.).</li>
                    <li><strong>User Take:</strong> &quot;I fly AA a few times a year. Admirals Club access pretty much covers the fee if I value each visit. Plus, the Loyalty Points from card spend help me hit Gold status.&quot;</li>
                </ul>
                <div className={styles.ctaButtonsMini}>
                     <a href="https://creditcards.aa.com/citi-aadvantage-executive-world-elite-mastercard/" className={`${styles.btn} ${styles.btnApply}`} target="_blank" rel="noopener noreferrer sponsored">Apply for Citi AAdvantage Exec</a>
                </div>
            </article>

            <article id="southwest-priority" className={styles.cardMiniReview}>
                <h3>For the Southwest Aficionado: Southwest Rapid Rewards® Priority Credit Card</h3>
                <ul>
                    <li><strong>Annual Fee:</strong> $149. To see current offers and apply, visit the <a href="https://creditcards.chase.com/southwest/priority-card" target="_blank" rel="noopener noreferrer sponsored">Southwest Rapid Rewards Priority Credit Card official page from Chase</a>.</li>
                    <li><strong>Lounge Access:</strong> None (Southwest doesn&apos;t have lounges).</li>
                    <li><strong>Free Checked Bags:</strong> Crucial 2025 Update: Southwest is changing its &quot;Bags Fly Free.&quot; From May 28, 2025, for new bookings, it&apos;s not universal. Cardholders like those with the Priority Card will get a credit for one checked bag, essentially keeping it free. See <a href="https://www.southwest.com/help/baggage/checked-baggage-policy" target="_blank" rel="noopener noreferrer">Southwest Airlines Official Baggage Policy Page</a>.</li>
                    <li><strong>Flight Rewards & Perks:</strong> $75 Southwest annual travel credit, 7,500 anniversary bonus points, four Upgraded Boardings/year, points count towards the coveted Companion Pass.</li>
                    <li><strong>User Take:</strong> &quot;With Southwest&apos;s new bag policy, our Priority card is suddenly even more vital. That free first bag per person will save us a ton, and the $75 credit makes the fee easy to swallow. We&apos;re always aiming for that Companion Pass!&quot;</li>
                </ul>
                 <div className={styles.ctaButtonsMini}>
                    <a href="https://creditcards.chase.com/southwest/priority-card" className={`${styles.btn} ${styles.btnApply}`} target="_blank" rel="noopener noreferrer sponsored">Apply for Southwest Priority</a>
                </div>
            </article>
            
            <h4>Co-Branded Card Quick Look</h4>
            <div className={styles.tableContainer}>
                <table className={styles.comparisonTable}>
                    <thead>
                        <tr>
                            <th>Card Name</th>
                            <th>Airline</th>
                            <th>Annual Fee</th>
                            <th>Primary Lounge</th>
                            <th>Free Bag (Cardholder)</th>
                            <th>Key Loyalty Perk</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Delta SkyMiles Reserve</td>
                            <td>Delta</td>
                            <td>$650</td>
                            <td>Delta Sky Club (limit*)</td>
                            <td>1st Free</td>
                            <td>Companion Cert, MQD Boost</td>
                        </tr>
                        <tr>
                            <td>United Club Infinite</td>
                            <td>United</td>
                            <td>$695</td>
                            <td>United Club</td>
                            <td>1st & 2nd Free</td>
                            <td>Premier Access, PQPs</td>
                        </tr>
                        <tr>
                            <td>Citi AAdvantage Executive</td>
                            <td>American</td>
                            <td>$595</td>
                            <td>Admirals Club</td>
                            <td>1st Free</td>
                            <td>Loyalty Point Bonuses</td>
                        </tr>
                        <tr>
                            <td>Southwest Priority</td>
                            <td>Southwest</td>
                            <td>$149</td>
                            <td>N/A</td>
                            <td>1st Free (via credit)</td>
                            <td>$75 Credit, Anniv. Pts</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <p><small>*Unlimited with $75k spend on the Delta SkyMiles Reserve.</small></p>
            {/* <button className={styles.exportButton}>Export to Sheets</button> {/* Optional */}
          </section>

          <section id="decoding-perks" className={styles.reviewSection}>
            <h2>V. Decoding the Perks: What&apos;s Really Behind the Promises?</h2>
            <h3>Lounge Access: Sanctuary or Squeeze?</h3>
            <p>Overcrowding is the big story. Priority Pass offers wide access but variable quality. Centurion Lounges are premium but often packed, with recent service tweaks. Airline-specific clubs (Sky Club, United Club, Admirals Club) offer benefits for loyalists but face their own capacity issues and access rule changes (like Delta&apos;s new visit limits - see the <a href="https://www.delta.com/us/en/delta-sky-club/access" target="_blank" rel="noopener noreferrer">Delta Air Lines Official Sky Club Access Page</a>). Capital One Lounges are a bright spot – high quality and, so far, better crowd management. The Venture X&apos;s authorized user lounge benefit is a standout.</p>
            <h3>Free Checked Bags: Real Savings?</h3>
            <p>Absolutely, especially for families. Co-branded cards are usually the most direct route. Premium cards can cover fees via travel credits. Southwest&apos;s 2025 bag policy change makes their co-branded cards almost essential for bag-checkers (refer to the <a href="https://www.southwest.com/help/baggage/checked-baggage-policy" target="_blank" rel="noopener noreferrer">Southwest Baggage Policy</a>).</p>
            <h3>Flight Rewards: Maximizing Your Miles</h3>
            <p>It&apos;s not just about earning; it&apos;s about smart redeeming. Flexible points (Amex Membership Rewards, Chase Ultimate Rewards, Capital One Miles) are gold because they transfer to many airlines, protecting you from any single program&apos;s devaluation and opening up sweet spot redemptions (like international business class). Be aware of changing transfer partner values or partnerships by regularly checking the official news or loyalty program sections of the airlines and card issuers you use, as well as advisories from bodies like the U.S. Department of Transportation or the Consumer Financial Protection Bureau for broader trends. {/* Replaced placeholder with advice per user instruction */} </p>
          </section>

          <section id="making-the-cut" className={styles.reviewSection}>
            <h2>VI. Making the Cut: Choosing Your 2025 Airline Card</h2>
            <ul>
                <li><strong>Know Your Travel Style:</strong> Are you loyal to one airline or a free agent? How often do you fly? What perks matter most – luxury or practical savings?</li>
                <li><strong>Do the Annual Fee Math:</strong> Calculate the &quot;effective annual fee&quot; by subtracting the real value of credits you&apos;ll actually use. Don&apos;t fall for the &quot;coupon book&quot; trap of valuing credits you wouldn&apos;t normally spend.</li>
                <li><strong>Real Talk:</strong> &quot;I nearly got a super-premium card for its &apos;value,&apos; then realized I wouldn&apos;t use half the niche credits. A simpler card with a straightforward travel credit made more sense for my actual spending.&quot;</li>
                <li><strong>Read the Fine Print:</strong> Understand sign-up bonus rules (like Chase&apos;s 5/24), foreign transaction fees (most good travel cards waive these), and travel protections. Authorized user fees and benefits can also be a big deal.</li>
            </ul>
            <p>The &quot;best&quot; card is personal. What works for a frequent solo business traveler might not suit a family taking one big vacation a year.</p>
          </section>

          <section id="final-recommendations" className={styles.reviewSection}>
            <h2>VII. Final Recommendations for 2025</h2>
            <h3>Luxury Seeker (Lounges & Top Perks):</h3>
            <p><a href="#amex-platinum">The Platinum Card® from American Express</a>. If you can maximize its credits, the lounge network is hard to beat. Runner-up: <a href="#chase-sapphire-reserve">Chase Sapphire Reserve®</a> for its simpler travel credit and growing Sapphire Lounge network.</p>
            
            <h3>Dedicated Airline Loyalist:</h3>
            <ul>
                <li><strong>Delta:</strong> <a href="#delta-reserve">Delta SkyMiles® Reserve American Express Card</a>.</li>
                <li><strong>United:</strong> <a href="#united-infinite">United Club℠ Infinite Card</a>.</li>
                <li><strong>American:</strong> <a href="#citi-aadvantage-executive">Citi® / AAdvantage® Executive World Elite Mastercard®</a>.</li>
                <li><strong>Southwest:</strong> <a href="#southwest-priority">Southwest Rapid Rewards® Priority Credit Card</a> (especially with the new bag rules!).</li>
            </ul>

            <h3>Free Checked Bags Priority:</h3>
            <p>Usually a co-branded airline card for your preferred carrier. The <a href="#united-infinite">United Club Infinite</a> is great for two bags. <a href="#southwest-priority">Southwest Priority</a> is now key.</p>

            <h3>Points & Miles Maximizer (Flexibility):</h3>
            <p><a href="#chase-sapphire-reserve">Chase Sapphire Reserve®</a> (or Preferred® for lower fee). Ultimate Rewards are incredibly versatile. Runner-up: <a href="#capital-one-venture-x">Capital One Venture X</a> for simple earning, great authorized user perks, and solid transfer options.</p>
            
            <p>Many savvy travelers use a combination – perhaps a premium flexible card plus a co-branded card for their most-flown airline. The key is to align your card with your travel, make sure the value outweighs the cost for you, and be ready to re-evaluate as your needs and the card landscape change. Happy travels in 2025!</p>
          </section>

        </article>
      </main>

      {/* No single card sticky CTA for a general review page like this 
          You might have a general CTA to "Explore All Card Reviews" or similar.
          For now, removing the sticky CTA from the JetBlue example.
      */}
    </>
  );
}