// File: pages/guides/global-entry-fee-guide-2025.js
// All placeholders have been reviewed and updated as of June 8, 2025.
// ASSUMPTION: You have a StarRating component at '../../components/StarRating.js' (if needed, though not used in this guide).

import React, { useState, useRef, useEffect, useCallback } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/reviews2025.module.css'; // Using the same styles for consistency

// Site URL is confirmed.
const siteUrl = 'https://www.travelcardinsider.com';

const reviewDataNew = {
  // Page & SEO Metadata
  title: "Global Entry's $120 Fee: A 2025 Guide to Credit Card Perks",
  description: "Our 2025 guide to the new $120 Global Entry fee. Learn how to get it for free with credit card statement credits, understand its benefits like TSA PreCheck, and apply on the official site.",
  keywords: [
    "Global Entry fee",
    "Global Entry credit card",
    "Trusted Traveler Program",
    "TSA PreCheck",
    "NEXUS vs Global Entry",
    "Mobile Passport Control",
    "Global Entry application",
    "travel perks 2025"
  ],
  pagePath: "/guides/global-entry-fee-guide-2025",
  imageUrl: "/images/guides/global-entry-hero-2025.jpg", // Suggested Path: Create an engaging hero image
  heroImageObjectPosition: "center 40%",
  imageWidth: 1600,
  imageHeight: 900,
  siteName: "TravelCardInsider.com",
  siteLogoUrl: "/images/logos/travel-card-insider-logo.png",
  publishDate: "2025-06-08",
  updateDate: "2025-06-08",

  // Author details
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
          'Trusted Traveler Programs',
          'Credit Card Benefits',
          'Airline & Hotel Loyalty',
          'Airport Experience',
          'Family Travel Strategy'
      ],
      bioSnippet: 'Dilan Madushanka is the founder and lead editor of TravelCardInsider.com, dedicated to helping travelers maximize perks like Global Entry to journey smarter.',
      fullBioLink: '/author/dilan-madushanka',
      socialLinks: {
          linkedin: 'https://www.linkedin.com/in/dilan-madushanka-b65293365',
          twitter: 'https://x.com/team_dilan',
          email: 'team@travelcardinsider.com'
      }
  },
  
  // Official Links for the Article - Verified June 2025
  officialTtpSite: "https://ttp.dhs.gov/", // [1], [6]
  cbpPreclearanceLink: "https://www.cbp.gov/travel/preclearance", // [4]
  globalEntryMobileAppLink: "https://www.cbp.gov/travel/trusted-traveler-programs/global-entry/global-entry-mobile-application", // [3]
  mobilePassportControlLink: "https://www.cbp.gov/travel/us-citizens/mobile-passport-control",
  nexusProgramLink: "https://www.cbp.gov/travel/trusted-traveler-programs/nexus",
  
  // Content Headings
  h1Content: "Navigating the New $120 Global Entry Fee: Your 2025 Guide",
  heroH1Content: "Global Entry's New $120 Fee: A Traveler's Guide to Credit Card Perks & Seamless Journeys",
};

const pageUrlFull = `${siteUrl}${reviewDataNew.pagePath}`;

// SEO-optimized Structured Data for a guide/article
const structuredData = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  "headline": reviewDataNew.title,
  "image": [
    `${siteUrl}${reviewDataNew.imageUrl}`
   ],
  "datePublished": reviewDataNew.publishDate,
  "dateModified": reviewDataNew.updateDate,
  "author": [{
      "@type": "Person",
      "name": reviewDataNew.author.name,
      "url": `${siteUrl}${reviewDataNew.author.fullBioLink}`
    }],
  "publisher": {
    "@type": "Organization",
    "name": reviewDataNew.siteName,
    "logo": {
      "@type": "ImageObject",
      "url": `${siteUrl}${reviewDataNew.siteLogoUrl}`
    }
  },
  "description": reviewDataNew.description,
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": pageUrlFull
  }
};

const TocLinks = [
  { href: "#introduction", label: "The New Fee Structure" },
  { href: "#is-it-worth-it", label: "Is Global Entry Still Worth It?" },
  { href: "#family-benefits", label: "A Welcome Change for Families" },
  { href: "#credit-card-perks", label: "Your Wallet's Secret Weapon" },
  { href: "#warning-third-party", label: "Warning: Third-Party Sites" },
  { href: "#alternatives", label: "Exploring the Alternatives" },
  { href: "#verdict", label: "The Verdict for 2025" },
];

export default function GlobalEntryFeeGuide2025() {
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
      if (window.scrollY > 200) {
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
        <meta property="article:publisher" content="https://www.facebook.com/travelcardinsider" /> 
        <meta property="article:published_time" content={reviewDataNew.publishDate} />
        <meta property="article:modified_time" content={reviewDataNew.updateDate} />
        <meta property="article:author" content={reviewDataNew.author.name} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@TravelCardInsid" /> 
        <meta name="twitter:title" content="Global Entry's New $120 Fee: Is It Still Worth It in 2025?" />
        <meta name="twitter:description" content="The Global Entry application fee is now $120. Our guide breaks down the benefits and shows you how your credit card can cover the cost." />
        <meta name="twitter:image" content={`${siteUrl}${reviewDataNew.imageUrl}`} />
        <meta name="twitter:creator" content={reviewDataNew.author.socialLinks.twitter ? reviewDataNew.author.socialLinks.twitter.replace('https://x.com/', '@') : '@DilanMadushanka'} />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </Head>

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
          src={reviewDataNew.imageUrl}
          alt="Traveler walking through a modern airport terminal, symbolizing a seamless journey with Global Entry."
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
                    </div>
                )}
            </div>
          </header>

          <nav className={styles.reviewToc}>
            <h2>In this guide:</h2>
            <ol>
              {TocLinks.map(link => (
                <li key={link.href}><a href={link.href}>{link.label}</a></li>
              ))}
            </ol>
          </nav>

          <section id="introduction" className={styles.reviewSection}>
            <h2>I. The New Fee Structure: What's Changed?</h2>
            <p>The familiar dread of the international arrivals hall: long, slow-moving arrival lines. For savvy US travelers, Global Entry has long been the golden ticket to bypassing this travel purgatory. However, a recent price hike in the program's application fee has many questioning its value. The good news? Your travel credit card might just be the key to keeping this popular perk "free."</p>
            <p>U.S. Customs and Border Protection (CBP) has increased the application fee for Global Entry, its popular Trusted Traveler Program (TTP), from $100 to $120 for a five-year membership. This 20% increase is part of a broader fee harmonization across several TTPs, including NEXUS (for U.S.-Canada travel) and SENTRI (for U.S.-Mexico travel), which now also have a $120 application fee for adults. You can always find the latest fee information on the <a href={reviewDataNew.officialTtpSite} target="_blank" rel="noopener noreferrer">official Trusted Traveler Programs website</a>.</p>
            <p>This change naturally begs the question: is Global Entry still worth the investment? And, for the budget-conscious traveler, are there ways to avoid paying the higher fee? Fortunately, many premium travel credit cards have already updated their benefits to cover the new, higher fee, ensuring that for many, the program remains an essential, and effectively free, travel tool.</p>
          </section>

          <section id="is-it-worth-it" className={styles.reviewSection}>
            <h2>II. The Gold Standard of Travel: Is It Still Worth It at $120?</h2>
            <p>Even with the price increase, the comprehensive benefits of Global Entry continue to present a strong argument for its value, especially for those who frequently fly internationally.</p>
            <h3>The Unbeatable Benefits</h3>
             <ul className={styles.featureList}>
                <li><strong>Expedited U.S. Customs Clearance:</strong> Members bypass the often lengthy customs lines, instead using designated Global Entry kiosks or advanced facial recognition technology at over 75 major U.S. airports. This can turn a potential hour-long wait into a swift, minutes-long process. The program continues to evolve, with many airports now offering "paperless entry" through facial scans and a <a href={reviewDataNew.globalEntryMobileAppLink} target="_blank" rel="noopener noreferrer">mobile app</a> that allows travelers to submit their information via smartphone at a growing number of locations.</li>
                <li><strong>TSA PreCheck® Included:</strong> A significant value-add is that Global Entry membership automatically includes TSA PreCheck® benefits. This means expedited security screening on domestic flights and international departures from the U.S. at over 200 airports with more than 85 participating airlines. Travelers can keep their shoes, belts, and light jackets on, and leave laptops and liquids in their bags.</li>
                <li><strong>Beyond the Airport:</strong> The perks extend to land travel as well. Global Entry members can use expedited SENTRI lanes when entering the U.S. from Mexico and NEXUS lanes when coming from Canada. Additionally, preclearance facilities at <a href={reviewDataNew.cbpPreclearanceLink} target="_blank" rel="noopener noreferrer">15 international locations</a> allow members to complete U.S. customs and immigration before boarding their flight to the United States.</li>
            </ul>
          </section>
          
          <section id="family-benefits" className={styles.reviewSection}>
            <h2>III. A Welcome Change for Families</h2>
            <p>In a significant and welcome move for families, CBP now waives the application fee for individuals under 18 whose application is submitted at the same time as a parent or legal guardian who is also applying, or if the parent or guardian is already a member of a Trusted Traveler Program. For a family of four with two children, this represents an immediate saving of $240 under the new fee structure, making it far more affordable to ensure a smoother airport experience for the whole family.</p>
          </section>

          <section id="credit-card-perks" className={styles.reviewSection}>
            <h2>IV. Your Wallet's Secret Weapon: Credit Cards That Cover the Cost</h2>
            <p>The most effective way to offset the new $120 Global Entry fee is through a statement credit offered by a wide range of travel rewards credit cards. Cardholders simply pay the application fee with their eligible card, and the issuer provides a statement credit for the amount, typically up to $120. This credit is generally available every four to five years, aligning perfectly with Global Entry's five-year membership.</p>
            <p>Several premium travel credit cards, such as <strong>The Platinum Card® from American Express, Chase Sapphire Reserve®, and the Capital One Venture X Rewards Credit Card</strong>, offer a statement credit that fully covers the new $120 fee. While these cards often have higher annual fees, they also come packed with other valuable travel perks like airport lounge access, annual travel credits, and robust rewards programs.</p>
            <p>Beyond the top-tier cards, numerous other credit cards with more moderate annual fees also provide a Global Entry fee credit, making this "free" perk accessible to a broader range of travelers.</p>
            <blockquote className={styles.importantNote}>
              <strong>Important Note:</strong> While the Global Entry statement credit is a fantastic perk, it's crucial to evaluate a credit card based on its entire benefits package in relation to its annual fee and how it aligns with your personal spending and travel habits.
            </blockquote>
          </section>

          <section id="warning-third-party" className={styles.reviewSection}>
            <div className={styles.warningBox}>
                <h2>V. A Word of Warning: Avoid Third-Party Application Services</h2>
                <p>A critical piece of advice for all prospective Global Entry applicants: <strong>apply only through the official U.S. Customs and Border Protection Trusted Traveler Programs (TTP) website</strong>. Numerous third-party websites exist that appear to offer application assistance but often charge exorbitant fees for services that provide little to no real value.</p>
                <div className={styles.ctaButtons}>
                   <a href={reviewDataNew.officialTtpSite} className={`${styles.btn} ${styles.btnApply}`} target="_blank" rel="noopener noreferrer" title="Go to the Official TTP Application Website">Apply on the Official Site</a>
                </div>
                 <p className={styles.smallPrintTerms}>The official and only correct URL is: <a href={reviewDataNew.officialTtpSite} target="_blank" rel="noopener noreferrer">{reviewDataNew.officialTtpSite}</a></p>
            </div>
          </section>
          
          <section id="alternatives" className={styles.reviewSection}>
            <h2>VI. Exploring the Alternatives</h2>
            <p>While Global Entry is a comprehensive solution, it may not be the perfect fit for everyone.</p>
            <ul className={styles.featureList}>
                <li><strong>Mobile Passport Control (MPC):</strong> This <a href={reviewDataNew.mobilePassportControlLink} target="_blank" rel="noopener noreferrer">free app from CBP</a> allows eligible travelers to submit their passport and customs declaration information digitally upon arrival, using dedicated MPC lanes for faster processing. It’s a great option for those who travel internationally less frequently.</li>
                <li><strong>NEXUS:</strong> For those who often travel between the U.S. and Canada, the <a href={reviewDataNew.nexusProgramLink} target="_blank" rel="noopener noreferrer">NEXUS program</a> is an excellent choice. It provides expedited processing at airports and land borders in both countries and includes Global Entry and TSA PreCheck® benefits. The application fee for NEXUS has also been standardized at $120.</li>
            </ul>
          </section>

          <section id="verdict" className={styles.reviewSection}>
            <h2>VII. The Verdict: An Investment in Smoother Travels</h2>
            <p>Despite the fee increase, Global Entry remains a top-tier program for U.S. international travelers. The combination of expedited customs clearance and the inclusion of TSA PreCheck® offers significant time savings and a noticeable reduction in travel stress. The new policy waiving fees for minors makes it an even more attractive option for families.</p>
            <p>The key to unlocking this value without the direct cost lies in the many travel rewards credit cards that now offer statement credits covering the full $120 fee. For travelers who can take advantage of such a benefit, Global Entry becomes a compelling investment in a more efficient and enjoyable travel experience.</p>
            <h3>Before your next international trip, we encourage you to:</h3>
             <div className={styles.prosConsContainer}>
               <div className={styles.prosSection}>
                  <ul>
                    <li><span className={styles.bulletIcon}>👍</span>Assess your travel frequency to determine if Global Entry is the right fit for you.</li>
                    <li><span className={styles.bulletIcon}>👍</span>Review your current credit card benefits to see if a Global Entry or TTP fee credit is already available to you.</li>
                    <li><span className={styles.bulletIcon}>👍</span>When considering a new travel credit card, factor in the Global Entry statement credit as a tangible perk that can enhance the card's overall value.</li>
                    <li><span className={styles.bulletIcon}>👍</span><strong>Always apply for Trusted Traveler Programs directly through the official government website.</strong></li>
                  </ul>
               </div>
             </div>
            <p>In the end, nothing feels longer than a customs line when you’re jet-lagged. Global Entry, especially when its cost is covered by a credit card, is a smart way to reclaim precious time and ensure your journeys begin and end on a high note.</p>
          </section>
        </article>
      </main>
    </>
  );
}