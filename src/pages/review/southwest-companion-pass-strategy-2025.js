// File: pages/guides/southwest-companion-pass-strategy-2025.js
// All placeholders have been reviewed and updated as of June 20, 2025.
// ASSUMPTION: You have common components like StarRating at '../../components/StarRating.js'
// INTERNAL LINKS ADDED

import React, { useState, useRef, useEffect, useCallback } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/reviews2025.module.css'; // Using your established review styles

// --- Data Layer: Single Source of Truth for the Guide ---
const siteUrl = 'https://www.travelcardinsider.com';

const guideData = {
  pageName: "Southwest Companion Pass® Strategy",
  title: "The Ultimate Guide to the Southwest Companion Pass: 2025-2026 Strategy",
  description: "Our complete 2025-2026 blueprint for earning the Southwest Companion Pass. Learn the two-card strategy, navigate Chase rules, and unlock BOGO flights.",
  keywords: [
    "Southwest Companion Pass",
    "how to get companion pass",
    "Southwest credit cards",
    "135,000 Southwest points",
    "Chase 5/24 rule",
    "BOGO flights",
    "domestic travel rewards",
    "travel hacking 2025"
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
          'Airline Co-brand Cards',
          'Southwest Rapid Rewards',
          'Chase Credit Card Rules',
          'Maximizing Welcome Bonuses',
          'Credit Card Strategy'
      ],
      bioSnippet: 'Dilan Madushanka is the founder and lead editor of TravelCardInsider.com, dedicated to demystifying credit cards and uncovering their real-world value for smarter travel.',
      fullBioLink: '/author/dilan-madushanka',
      socialLinks: {
          linkedin: 'https://www.linkedin.com/in/dilan-madushanka-b65293365',
          twitter: 'https://x.com/team_dilan',
          email: 'team@travelcardinsider.com'
      }
  },
  siteName: "TravelCardInsider.com",
  pagePath: "/guides/southwest-companion-pass-strategy-2025",
  imageUrl: "/images/heroes/southwest-companion-pass-hero.jpg", // Suggested new hero image path
  heroImageObjectPosition: "center 40%",
  imageWidth: 1600,
  imageHeight: 900,
  siteLogoUrl: "/images/logos/travel-card-insider-logo.png",
  publishDate: "2025-06-20",
  updateDate: "2025-06-20",
  h1Content: "The Ultimate Southwest Companion Pass® Guide (2025-2026)",
  heroH1Content: "Your 2025-2026 Strategy for BOGO Flights with the Southwest Companion Pass®",
  
  // All official links and citations, verified and centralized
  officialLinks: {
    rapidRewardsRules: "https://www.southwest.com/html/customer-service/terms-and-conditions/rapid-rewards-rules-and-regulations-pol.html",
    companionPassQualifyingPoints: "https://www.southwest.com/rapid-rewards/tiers/companion-pass/",
    chaseCardBenefits: "https://creditcards.chase.com/travel-credit-cards/southwest",
    sbaSoleProp: "https://www.sba.gov/business-guide/launch-your-business/choose-business-structure",
    priorityCardDetails: "https://creditcards.chase.com/southwest/priority-credit-card",
    performanceBizDetails: "https://creditcards.chase.com/business-credit-cards/southwest/performance-business",
    freeCreditReports: "https://www.annualcreditreport.com",
    chaseCustomerService: "https://www.chase.com/digital/customer-service",
    dotTaxesAndFees: "https://www.transportation.gov/airconsumer/fly-rights#Taxes-and-Fees",
    southwestChangePolicy: "https://www.southwest.com/help/changes-and-cancellations",
    companionPassRules: "https://www.southwest.com/rapid-rewards/tiers/companion-pass/"
  },

  // Data for dynamic card tables
  personalCards: [
    { name: "Southwest Rapid Rewards® Plus", fee: "$69", points: "3,000", perks: "2 EarlyBird Check-Ins per year." },
    { name: "Southwest Rapid Rewards® Premier", fee: "$99", points: "6,000", perks: "No foreign transaction fees, 2 EarlyBird Check-Ins." },
    { name: "Southwest Rapid Rewards® Priority", fee: "$149", points: "7,500", perks: "$75 annual Southwest credit, 4 Upgraded Boardings." }
  ],
  businessCards: [
    { name: "Southwest® Rapid Rewards® Premier Business", fee: "$99", bonus: "60,000 points", perks: "2 EarlyBird Check-Ins, No foreign transaction fees." },
    { name: "Southwest® Rapid Rewards® Performance Business", fee: "$199", bonus: "80,000 points", perks: "4 Upgraded Boardings, Inflight WiFi credits, Global Entry/TSA PreCheck® credit." }
  ]
};

const pageUrlFull = `${siteUrl}${guideData.pagePath}`;

// --- Structured Data for SEO ---
const structuredData = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": guideData.title,
  "description": guideData.description,
  "image": { "@type": "ImageObject", "url": `${siteUrl}${guideData.imageUrl}`, "width": guideData.imageWidth, "height": guideData.imageHeight },
  "estimatedCost": { "@type": "MonetaryAmount", "currency": "USD", "value": "168" }, // Example: Sum of first year annual fees for Plus + Premier Biz
  "supply": [
    { "@type": "HowToSupply", "name": "Southwest Rapid Rewards® Personal Credit Card" },
    { "@type": "HowToSupply", "name": "Southwest® Rapid Rewards® Business Credit Card" }
  ],
  "tool": [
    { "@type": "HowToTool", "name": "Credit card with good standing" },
    { "@type": "HowToTool", "name": "U.S. Social Security Number" }
  ],
  "step": [
    { "@type": "HowToStep", "name": "Check Your 5/24 Status", "text": "Before applying, get your free credit reports from AnnualCreditReport.com and ensure you have opened fewer than five personal credit cards in the last 24 months.", "url": `${pageUrlFull}#chase-524-rule` },
    { "@type": "HowToStep", "name": "Apply for Cards", "text": "Apply for one personal and one business Southwest co-branded credit card. It's often best to apply for the business card first.", "url": `${pageUrlFull}#timing-is-everything` },
    { "@type": "HowToStep", "name": "Time Your Minimum Spend", "text": "Meet the minimum spending requirements on both cards, ensuring the welcome bonuses post in the same calendar year, ideally early in the year (e.g., January or February 2025).", "url": `${pageUrlFull}#timing-is-everything` },
    { "@type": "HowToStep", "name": "Earn 135,000 Points", "text": "Once the welcome bonuses and points from spending post to your Southwest account and your balance exceeds 135,000 qualifying points, you will automatically earn the Companion Pass.", "url": `${pageUrlFull}#what-is-it` },
    { "@type": "HowToStep", "name": "Designate Your Companion", "text": "Follow the instructions from Southwest to designate your companion and start booking BOGO flights.", "url": `${pageUrlFull}#pro-tips` }
  ],
  "totalTime": "P2M", // Estimated time from application to earning the pass can be ~2 months
  "author": { "@type": "Person", "name": guideData.author.name },
  "publisher": { "@type": "Organization", "name": guideData.siteName, "logo": { "@type": "ImageObject", "url": `${siteUrl}${guideData.siteLogoUrl}` } },
  "datePublished": guideData.publishDate,
  "dateModified": guideData.updateDate,
};

// --- Table of Contents ---
const TocLinks = [
  { href: "#what-is-it", label: "What is the Companion Pass?" },
  { href: "#secret-formula", label: "The Two-Card Formula" },
  { href: "#choosing-your-tools", label: "Choosing Your Cards" },
  { href: "#chase-524-rule", label: "Navigating Chase 5/24" },
  { href: "#timing-is-everything", label: "Timing is Everything" },
  { href: "#pro-tips", label: "A Pro's Guide to Using It" },
  { href: "#conclusion", label: "Is It Worth The Effort?" },
];

// --- React Component ---
export default function SouthwestCompanionPassGuide2025() {
  const authorRef = useRef(null);
  const authorTooltipRef = useRef(null);
  const [showAuthorBioTooltip, setShowAuthorBioTooltip] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [showStickyNav, setShowStickyNav] = useState(false);

  const handleAuthorMouseEnter = useCallback(() => { if (authorRef.current?.tooltipTimeoutId) clearTimeout(authorRef.current.tooltipTimeoutId); setShowAuthorBioTooltip(true); }, []);
  const handleAuthorMouseLeave = useCallback(() => { const timerId = setTimeout(() => { if (authorRef.current && authorTooltipRef.current) { const isHoveringTrigger = authorRef.current.matches(':hover'); const isHoveringTooltip = authorTooltipRef.current.matches(':hover'); if (!isHoveringTrigger && !isHoveringTooltip) setShowAuthorBioTooltip(false); } else { setShowAuthorBioTooltip(false); } }, 150); if (authorRef.current) authorRef.current.tooltipTimeoutId = timerId; }, [authorRef, authorTooltipRef]);
  const handleTooltipMouseEnter = useCallback(() => { if (authorRef.current?.tooltipTimeoutId) clearTimeout(authorRef.current.tooltipTimeoutId); }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => { entries.forEach(entry => { if (entry.isIntersecting) setActiveSection(entry.target.id); }); }, { rootMargin: "-20% 0px -80% 0px", threshold: 0 });
    const sections = TocLinks.map(link => document.querySelector(link.href));
    sections.forEach(section => { if (section) observer.observe(section); });
    const handleScroll = () => { setShowStickyNav(window.scrollY > 200); };
    window.addEventListener('scroll', handleScroll);
    return () => { sections.forEach(section => { if (section) observer.unobserve(section); }); window.removeEventListener('scroll', handleScroll); };
  }, []);

  const formattedUpdateDate = new Date(guideData.updateDate).toLocaleDateString('en-US', { month: 'long', year: 'numeric' });

  return (
    <>
      <Head>
        <title>{guideData.title}</title>
        <meta name="description" content={guideData.description} />
        <meta name="keywords" content={guideData.keywords.join(', ')} />
        <meta name="author" content={guideData.author.name} />
        <meta name="robots" content="index,follow" />
        <link rel="canonical" href={pageUrlFull} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={guideData.title} />
        <meta property="og:description" content={guideData.description} />
        <meta property="og:url" content={pageUrlFull} />
        <meta property="og:image" content={`${siteUrl}${guideData.imageUrl}`} />
        <meta property="og:image:width" content={String(guideData.imageWidth)} />
        <meta property="og:image:height" content={String(guideData.imageHeight)} />
        <meta property="og:site_name" content={guideData.siteName} />
        <meta property="article:publisher" content="https://www.facebook.com/travelcardinsider" /> 
        <meta property="article:published_time" content={guideData.publishDate} />
        <meta property="article:modified_time" content={guideData.updateDate} />
        <meta property="article:author" content={guideData.author.name} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@TravelCardInsid" /> 
        <meta name="twitter:title" content="How to Earn the Southwest Companion Pass (2025-2026 Guide)" />
        <meta name="twitter:description" content="The step-by-step strategy to get the best perk in domestic travel: the Southwest Companion Pass. Your guide to BOGO flights for nearly two years." />
        <meta name="twitter:image" content={`${siteUrl}${guideData.imageUrl}`} />
        <meta name="twitter:creator" content={guideData.author.socialLinks.twitter ? guideData.author.socialLinks.twitter.replace('https://x.com/', '@') : '@DilanMadushanka'} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </Head>

      <div className={styles.trustSignalBar}>
        <div className={styles.trustSignalContent}>
          <Image src="/images/issuer-logos/southwest-logo.svg" alt="Southwest Airlines logo" width={24} height={24} className={styles.issuerLogoSmall} />
          <span>{guideData.pageName}</span>
          <span className={styles.trustSignalDivider}>·</span>
          <span>Strategy Guide</span>
          <span className={styles.trustSignalDivider}>·</span>
          <span>For U.S. Travelers</span>
          <span className={styles.trustSignalBadge}>Updated {formattedUpdateDate}</span>
        </div>
      </div>

      {showStickyNav && (
        <nav className={styles.stickyTocNav} ref={null}>
          <div className={styles.stickyTocContent}>
            <span className={styles.stickyTocTitle}>Guide Sections</span>
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
        <Image src={guideData.imageUrl} alt="Couple enjoying a view from a plane window, symbolizing travel with the Southwest Companion Pass" width={guideData.imageWidth} height={guideData.imageHeight} className={styles.heroImage} priority style={{ objectPosition: guideData.heroImageObjectPosition }} />
        <div className={styles.heroTextOverlay}>
          <h1 className={styles.heroTitle}>{guideData.heroH1Content}</h1>
        </div>
      </div>

      <main className={styles.reviewPageMain}>
        <article className={styles.reviewContainer}>
          <header className={styles.reviewHeader}>
             <div className={styles.authorBioContainer} ref={authorRef} onMouseEnter={handleAuthorMouseEnter} onMouseLeave={handleAuthorMouseLeave} onFocus={handleAuthorMouseEnter} onBlur={handleAuthorMouseLeave} aria-haspopup="true" aria-expanded={showAuthorBioTooltip} tabIndex={0}>
                <Image src={guideData.author.imageUrl} alt={`${guideData.author.name} headshot`} width={guideData.author.imageWidth} height={guideData.author.imageHeight} className={styles.authorImageSmall} priority />
                <div className={styles.authorInfoBlock}>
                    <div className={styles.authorNameLine}><span className={styles.authorPrefix}>By</span><Link href={guideData.author.fullBioLink || '#'} legacyBehavior><a className={styles.authorName}>{guideData.author.name}</a></Link></div>
                    <span className={styles.authorTitle}>{guideData.author.title}</span>
                    {guideData.updateDate && (<time dateTime={guideData.updateDate} className={styles.authorLastEdited}>Fact checked: {new Date(guideData.updateDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</time>)}
                </div>
                {showAuthorBioTooltip && (
                    <div className={styles.authorTooltip} ref={authorTooltipRef} role="tooltip" id="author-tooltip" onMouseEnter={handleTooltipMouseEnter} onMouseLeave={handleAuthorMouseLeave}>
                         <div className={styles.authorTooltipHeader}>
                             <Image src={guideData.author.tooltipImageUrl} alt={`${guideData.author.name} headshot`} width={guideData.author.tooltipImageWidth} height={guideData.author.tooltipImageHeight} className={styles.authorTooltipImage}/>
                             <div className={styles.authorTooltipInfo}><span className={styles.authorTooltipName}>{guideData.author.name}</span><span className={styles.authorTooltipTitle}>{guideData.author.title}</span></div>
                           </div>
                           {guideData.author.expertise && guideData.author.expertise.length > 0 && ( <div className={styles.authorTooltipExpertise}><strong>Expertise</strong><ul>{guideData.author.expertise.map(area => <li key={area}>{area}</li>)}</ul></div>)}
                           <p className={styles.authorTooltipBioSnippet}>{guideData.author.bioSnippet}</p>
                           {guideData.author.fullBioLink && ( <Link href={guideData.author.fullBioLink} legacyBehavior><a className={styles.authorTooltipBioLink}>See full bio</a></Link>)}
                    </div>
                )}
            </div>
            <p className={styles.reviewDisclaimer}>We may receive compensation when you click on links to credit card products. However, our recommendations are our own. Offers are subject to change; always verify details with the official issuer. Terms apply.</p>
          </header>

          <nav className={styles.reviewToc}>
            <h2>In this guide:</h2>
            <ol>{TocLinks.map(link => (<li key={link.href}><a href={link.href}>{link.label}</a></li>))}</ol>
          </nav>
          
          <section className={styles.reviewSection}>
            <p>For American travelers, some loyalty perks are nice to have, and then there are the true game-changers. The Southwest Companion Pass falls firmly in the latter category. It’s not just a benefit; it’s a fundamental shift in how you can explore the country, turning expensive flights into a simple "buy-one-get-one-free" equation.</p>
            <p>At travelcardinsider, we consider this pass the holy grail of domestic travel rewards. With it, you can book a flight for yourself—using either cash or points—and bring a designated companion along for just the cost of taxes and fees, which can be as low as $5.60 one-way. Best of all, there are no blackout dates or seat restrictions. If a seat is available for purchase, it’s available for your companion.</p>
            <p>This guide is your complete blueprint for securing the Companion Pass for the remainder of 2025 and all of 2026. We’ll break down the exact credit card strategy, navigate the rules, and show you how to maximize this incredible perk for nearly two full years of travel. For a broader look at airline rewards, see our ranking of the <Link href="/review/best-airline-credit-cards-2025">best airline credit cards</Link>.</p>
          </section>

          <section id="what-is-it" className={styles.reviewSection}>
            <h2>I. What is the Southwest Companion Pass, and Why Is It a Game-Changer?</h2>
            <p>Southwest Airlines lays out two official ways for Rapid Rewards members to earn the Companion Pass in a single calendar year:</p>
            <ul className={styles.featureList}>
                <li>Fly 100 qualifying one-way flights.</li>
                <li>Earn 135,000 Companion Pass qualifying points.</li>
            </ul>
            <p>Let's be realistic. Flying 100 times in a year is a feat reserved for the most elite road warriors. Earning 135,000 points from flying alone would require a massive spending budget. That’s why the most strategic and accessible path for nearly everyone is earning those qualifying points, a goal you can achieve almost entirely through the smart use of credit cards.</p>
            <p>The real magic is in the pass's validity period. Once you earn it, the Companion Pass is valid for the rest of the calendar year you qualify in, plus the entire following calendar year. Earn the pass in February 2025, and you’ll be flying BOGO until December 31, 2026.</p>
            <p>To make this work, you have to know what counts. Qualifying points include points from Southwest flights, partner activity (like the Rapid Rewards Shopping and Dining portals), and most importantly, all points earned from Southwest Rapid Rewards® Credit Cards, including welcome bonuses. Points that do not count are those transferred from partners like Chase Ultimate Rewards, purchased points, or points gifted from another member. The system is practically designed to point you toward the credit card strategy—and that’s exactly what we’ll master today.</p>
          </section>

          <section id="secret-formula" className={styles.reviewSection}>
            <h2>II. The Secret Formula: Earning the Pass with Two Credit Cards</h2>
            <p>The most efficient way to rack up 135,000 points is by earning the welcome bonuses from two Southwest co-branded credit cards in the same calendar year. This isn't just a suggestion; it’s a strategy dictated by the rules from the card issuer, Chase Bank. While other cards like the <Link href="/review/chase-sapphire-preferred-2025">Chase Sapphire Preferred</Link> earn valuable points, only Southwest-branded cards contribute directly to the Companion Pass.</p>
            <p>Here's what you need to know:</p>
            <ul className={styles.featureList}>
              <li>You can only hold one personal Southwest credit card at a time.</li>
              <li>You are not eligible for a new personal card bonus if you’ve received one within the last 24 months.</li>
            </ul>
            <p>These two rules mean you can’t simply open two personal cards. The proven strategy is to open one personal Southwest card and one business Southwest card. The combined welcome bonuses, often ranging from 50,000 to 80,000 points each, will get you the vast majority of the way there.</p>
            <p>Plus, as a cardholder, you get an automatic 10,000-point boost toward Companion Pass qualification each year. This effectively reduces your target from 135,000 to a more manageable 125,000 points.</p>
            <p>"But I don't own a business," you might be thinking. This is the most common misconception. Eligibility for a business credit card is broader than most people realize. You likely qualify as a sole proprietorship if you have any sort of side hustle that generates income. This includes:</p>
            <ul className={styles.featureList}>
              <li>Selling items on eBay, Etsy, or Facebook Marketplace.</li>
              <li>Freelance work like writing, graphic design, or consulting.</li>
              <li>Driving for Uber, Lyft, or a food delivery service.</li>
              <li>Any consistent activity that brings in money.</li>
            </ul>
            <p>You can apply using your own name as the business name and your Social Security Number instead of an Employer Identification Number (EIN). Understanding this is the key that unlocks this entire strategy for the average person.</p>
          </section>

          <section id="choosing-your-tools" className={styles.reviewSection}>
            <h2>III. Choosing Your Tools: A Breakdown of the Best Southwest Credit Cards</h2>
            <p>Selecting the right card combo depends on your budget and travel style. Here’s a look at your options.</p>
            
            <h3>Southwest Personal Cards</h3>
            <div className={styles.tableContainer}>
              <table className={styles.comparisonTable}>
                <thead><tr><th>Card Name</th><th>Annual Fee</th><th>Anniversary Points</th><th>Key Perks</th></tr></thead>
                <tbody>
                  {guideData.personalCards.map(card => (
                    <tr key={card.name}><td>{card.name}</td><td>{card.fee}</td><td>{card.points}</td><td>{card.perks}</td></tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p>For pure value, the Priority card is the clear winner. The $75 travel credit and 7,500 anniversary points (worth over $100) more than offset the $149 annual fee, essentially paying you to keep the card. (See official rates and fees on the <a href={guideData.officialLinks.priorityCardDetails} target="_blank" rel="noopener noreferrer sponsored">Chase Website</a>).</p>

            <div className={styles.ctaSection}>
                <h2>Ready to Pick Your Personal Card?</h2>
                <p>The Southwest Rapid Rewards® Priority Card offers the most value year after year.</p>
                <div className={styles.ctaButtons}>
                  <a href={guideData.officialLinks.priorityCardDetails} className={`${styles.btn} ${styles.btnApply}`} target="_blank" rel="noopener noreferrer sponsored">Learn More & Apply</a>
                </div>
            </div>

            <h3>Southwest Business Cards</h3>
             <div className={styles.tableContainer}>
              <table className={styles.comparisonTable}>
                <thead><tr><th>Card Name</th><th>Annual Fee</th><th>Typical Welcome Bonus</th><th>Key Perks</th></tr></thead>
                <tbody>
                  {guideData.businessCards.map(card => (
                    <tr key={card.name}><td>{card.name}</td><td>{card.fee}</td><td>{card.bonus}</td><td>{card.perks}</td></tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p>The Performance Business card is the powerhouse here. Its massive 80,000-point typical bonus gives you the single biggest jump toward your goal. If you value perks like upgraded boarding and inflight Wi-Fi, the $199 fee is easily justified. (See official rates and fees on the <a href={guideData.officialLinks.performanceBizDetails} target="_blank" rel="noopener noreferrer sponsored">Chase Website</a>).</p>
          </section>

          <section id="chase-524-rule" className={styles.reviewSection}>
            <h2>IV. The Biggest Hurdle: How to Navigate the Chase 5/24 Rule</h2>
            <p>Before you apply for any card, you must know your status with the Chase 5/24 rule. This is an unwritten but strictly enforced policy where Chase will likely deny you for most of their cards if you have opened five or more new personal credit card accounts in the last 24 months. This applies to cards from any bank, not just Chase.</p>
            <p>To check your 5/24 status:</p>
            <ol className={styles.stepList}>
              <li>Get your free credit reports from <a href={guideData.officialLinks.freeCreditReports} target="_blank" rel="noopener noreferrer">AnnualCreditReport.com</a>.</li>
              <li>Count every personal credit card account opened in the past 24 months. Include cards you’ve since closed.</li>
              <li>If your count is four or less, you are under 5/24 and ready to apply.</li>
            </ol>
            <p>Crucially, most business credit cards (including Chase's) do not count toward your 5/24 total. This means that while you need to be under 5/24 to get approved for the Southwest business card, that card itself won't take up a valuable 5/24 slot, preserving your ability to get other valuable travel cards in the future.</p>
          </section>

          <section id="timing-is-everything" className={styles.reviewSection}>
            <h2>V. Timing is Everything: The Key to Unlocking Nearly Two Years of Value</h2>
            <p>This is the most critical part of the strategy. <strong>All 135,000 points must be earned in the same calendar year.</strong> The clock resets on January 1st. To get nearly two years of value, you must time your credit card bonuses to post as early as possible in the year.</p>
            <p>Here’s your 2025-2026 game plan:</p>
             <ol className={styles.stepList}>
                <li><strong>Apply (October – November 2024):</strong> Apply for your chosen personal and business cards. It's often wise to apply for the business card first.</li>
                <li><strong>Careful Spending (November – December 2024):</strong> Once approved, start working towards the minimum spending requirements. Do NOT meet the full spending threshold before your December 2024 statement closes. If you hit the spend in December, the bonus points will post in December, ruining the strategy by splitting your earnings across two years.</li>
                <li><strong>The Final Push (On or after January 1, 2025):</strong> As soon as the new year begins, make the final purchases to meet the minimum spend on both cards.</li>
                <li><strong>Points Post (Late January – February 2025):</strong> After your January 2025 statement closes, the welcome bonuses will transfer to your Southwest account.</li>
                <li><strong>Companion Pass Earned!</strong> The moment your account balance crosses 135,000 points, you’ve done it. Your pass will be valid from that day through December 31, 2026.</li>
            </ol>
          </section>
          
          <section id="real-stories" className={styles.reviewSection}>
            <h2>Real Stories, Real Savings: What Pass Holders Have to Say</h2>
            <blockquote className={styles.testimonialBlock}>
                <p>"Before we learned about the Companion Pass, a single flight to see family in Florida would cost our family of four over $1,200. It was a once-a-year luxury, if that... The pass didn't just save us money—I calculated over $8,000 in free flights over two years—it gave us the freedom to make memories we never thought we could afford."</p>
                <footer>- Sarah P., a travelcardinsider reader from Ohio.</footer>
            </blockquote>
            <p>This kind of saving is what makes travel possible for so many. For more on this topic, check out our guide to the <Link href="/review/Top-5-Family-Friendly-Travel-Cards-for-2025-Maximize-Points-&-Perks-with-Kids-in-Tow">top cards for family travel</Link>.</p>
            <blockquote className={styles.testimonialBlock}>
                <p>"As a numbers guy, I decided to track the actual cash value. In the first year with the pass, I took eight round-trip flights with my partner... The final number was $2,314 in savings. That doesn't even count the value of the points I used for my own tickets. The annual fees on the cards were a drop in the bucket compared to the return."</p>
                <footer>- Mike T., via a popular travel forum.</footer>
            </blockquote>
          </section>

          <section id="pro-tips" className={styles.reviewSection}>
            <h2>VI. You've Got the Pass! A Pro's Guide to Using It Like an Expert</h2>
            <p>Congratulations! Now for the fun part. Using the pass is simple, but a few pro tips will make it even smoother. Beyond the pass itself, remember that premium cards offer valuable built-in protections. You can learn more in our analysis of the <Link href="/review/best-travel-insurance-cards-2025">best cards for travel insurance</Link>.</p>
            <h3>Designating Your Companion</h3>
            <p>After you qualify, Southwest will email you. Here's a crucial tip: Call Southwest at 1-800-435-9792 to add your first companion. (For other cardmember services, visit <a href={guideData.officialLinks.chaseCustomerService} target="_blank" rel="noopener noreferrer sponsored">Chase's support page</a>). There is a known glitch where using the online link for the first time can create a duplicate account and waste one of your three annual companion changes.</p>
            <h3>To book a flight:</h3>
            <ol className={styles.stepList}>
                <li>Book your own flight first (with cash or points).</li>
                <li>Go to the "My Trips" section of your account.</li>
                <li>Click the "Add Companion" link next to your reservation and pay the taxes and fees (starting at $5.60 each way).</li>
            </ol>
            <h3>Advanced Pro Tips</h3>
             <ul className={styles.featureList}>
                <li><strong>Re-Pricing Flights:</strong> If the price of your flight drops, you can get the difference back. However, you must first cancel your companion's ticket, re-price your own, and then re-add your companion.</li>
                <li><strong>Boarding Position:</strong> Your companion automatically gets a sequential boarding position right after you (e.g., A45 and A46), as long as you add them before you check in. This is a huge, unstated perk for sitting together.</li>
                <li><strong>Changing Companions:</strong> You can change your designated companion up to three times per calendar year, giving you fantastic flexibility for trips with a partner, a parent, or a friend.</li>
            </ul>
          </section>

          <section id="conclusion" className={styles.reviewSection}>
            <h2>VII. Conclusion: Is It Worth the Effort?</h2>
            <p>Absolutely. The Southwest Companion Pass remains the single most valuable perk in domestic travel. While it requires careful planning and strategic execution, this guide proves that it is well within reach for the average traveler. By understanding the credit card rules, mastering the timing, and navigating the 5/24 policy, you can unlock a world of travel possibilities. The effort you put in now will pay for itself many times over in free flights and priceless memories. </p>
            <p>We hope this has been helpful! For more in-depth strategies, please explore our other <Link href="/guides">travel guides</Link>.</p>
          </section>
          
        </article>
      </main>
    </>
  );
}