// File: pages/reviews/cards-that-earn-bonus-points-on-ev-charging-2025.js
"use client"; // 👈 Add this line at the very top

// ❗ Replace image src paths with your optimised, WebP‑or‑AVIF images.
// The paths below are placeholders. Card images should ideally be ~150x95px or similar aspect ratio.

import React, { useState, useRef, useEffect, useCallback } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/NoFTFCardsReview.module.css'; // Reusing your site's existing review styles
import StarRating from '../../components/StarRating'; // Assuming you have this component for ratings

// ─────────────────────────────────────────────────────────────────────────────
// 🔗 CONFIG
// ─────────────────────────────────────────────────────────────────────────────
const SITE_BASE_URL = 'https://www.travelcardinsider.com';
const PAGE_PATH = '/reviews/cards-that-earn-bonus-points-on-ev-charging-2025';
const PAGE_URL = `${SITE_BASE_URL}${PAGE_PATH}`;
const SITE_NAME = 'Travel Card Insider';
const HERO_IMAGE_SRC = '/images/reviews/ev-charging-at-scenic-overlook.webp'; // ❗ Replace with your optimised hero image
const HERO_IMAGE_ALT = 'An electric car plugged into a charging station with a scenic mountain landscape in the background.';
const DATE_PUBLISHED = '2025-07-02'; // ✏️ Adjust to your actual publish date
const DATE_MODIFIED = '2025-07-02'; // ✏️ Update whenever you edit copy

// ─────────────────────────────────────────────────────────────────────────────
// 👤 AUTHOR INFO
// ─────────────────────────────────────────────────────────────────────────────
const author = {
  name: 'Dilan Madushanka',
  title: 'Lead EV & Travel Rewards Analyst',
  image: '/WhatsApp Image 2025-05-12 at 4.09.58 PM.jpeg', // ❗ Your 40x40px web‑optimised headshot
  imageLarge: '/WhatsApp Image 2025-05-12 at 4.09.58 PM.jpeg', // ❗ Your 60x60px for tooltip
  bio: 'A seasoned financial analyst, Dilan specializes in helping drivers maximize rewards on EV charging and travel expenses.',
  expertise: [
    'EV Charging Rewards',
    'Travel Credit Cards',
    'Cash Back Strategies',
    'Rewards Program Analysis',
  ],
  social: {
    linkedin: 'https://www.linkedin.com/in/dilan-madushanka-b65293365',
    twitter: 'https://x.com/team_dilan',
    email: 'team@travelcardinsider.com',
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// 💳 EV CHARGING CARD DATA
// ─────────────────────────────────────────────────────────────────────────────
const evCardData = [
  {
    id: 'penfedPlatinumRewards',
    name: 'PenFed Platinum Rewards Visa Signature® Card',
    category: 'High-Octane Earner',
    imageSrc: '/images/cards/penfed-platinum-rewards.png', // ❗ Replace
    imageAlt: 'PenFed Platinum Rewards Visa Signature® Card',
    officialCardPageLink: 'https://www.penfed.org/credit-cards/platinum-rewards-visa',
    ourTake: "The PenFed Platinum Rewards card is a showstopper with its offer of 5 points per dollar at EV charging stations and gas pumps, with no spending cap. This is on top of a solid 3 points per dollar on groceries, restaurants, and streaming services, all for a $0 annual fee.",
    rewards: "The impressive 5x multiplier comes with a catch: the value of PenFed's points. They’re worth about 0.85 cents each when redeemed for gift cards or merchandise. This means the 5x rate is effectively a 4.25% cash-back equivalent. While still great, it's an important distinction. This card is best for high-volume chargers who are happy to redeem rewards for travel through PenFed's portal or for gift cards.",
    applyLink: 'https://www.penfed.org/credit-cards/platinum-rewards-visa',
    ratesFeesLink: 'https://www.penfed.org/credit-cards/platinum-rewards-visa',
    learnMoreLink: '/cards/penfed-platinum-rewards', // ✏️ Create this internal page later
    ratingValue: 9.0,
    ratingStars: 4.5,
  },
  {
    id: 'usbankCashPlus',
    name: 'U.S. Bank Cash+® Visa Signature® Card (The Home Charging Champion)',
    category: 'High-Octane Earner',
    imageSrc: '/images/cards/us-bank-cash-plus.png', // ❗ Replace
    imageAlt: 'U.S. Bank Cash+ Visa Signature Card',
    officialCardPageLink: 'https://www.usbank.com/credit-cards/cash-plus-visa-signature-credit-card.html',
    ourTake: "The U.S. Bank Cash+® card is a game-changer for the majority of EV owners who charge at home. It lets you choose two categories each quarter to earn 5% cash back on up to $2,000 in combined spending. Crucially, 'Home Utilities' is a permanent 5% category choice. By selecting this, you can get 5% back on your monthly electricity bill, which includes your primary EV 'fueling' cost.",
    rewards: "You can also select an 'everyday' category for 2% cash back, which includes 'Gas Stations and EV Charging Stations.' This creates a powerful combo: 5% back on home charging and 2% back for the occasional public charge on a road trip. The card does require quarterly activation, so it’s for the more engaged consumer.",
    applyLink: 'https://www.usbank.com/credit-cards/cash-plus-visa-signature-credit-card.html',
    ratesFeesLink: 'https://www.usbank.com/credit-cards/cash-plus-visa-signature-credit-card.html',
    learnMoreLink: '/cards/us-bank-cash-plus', // ✏️ Create this internal page later
    ratingValue: 8.8,
    ratingStars: 4.4,
  },
   {
    id: 'usbankAltitudeConnect',
    name: 'U.S. Bank Altitude® Connect Visa Signature® Card',
    category: 'Versatile Cruiser',
    imageSrc: '/images/cards/us-bank-altitude-connect.png', // ❗ Replace
    imageAlt: 'U.S. Bank Altitude Connect Visa Signature Card',
    officialCardPageLink: 'https://www.usbank.com/credit-cards/altitude-connect-visa-signature-credit-card.html',
    ourTake: "The U.S. Bank Altitude® Connect card has become a standout in the no-annual-fee travel space. It offers a generous 4x points on a broad travel category that includes airfare, hotels, gas, and EV charging stations. You also get 2x points on groceries and dining.",
    rewards: "What really sets it apart are the perks usually reserved for premium cards: a statement credit for TSA PreCheck or Global Entry and four complimentary Priority Pass airport lounge visits per year.",
    applyLink: 'https://www.usbank.com/credit-cards/altitude-connect-visa-signature-credit-card.html',
    ratesFeesLink: 'https://www.usbank.com/credit-cards/altitude-connect-visa-signature-credit-card.html',
    learnMoreLink: '/cards/us-bank-altitude-connect', // ✏️ Create this internal page later
    ratingValue: 8.7,
    ratingStars: 4.3,
  },
  {
    id: 'wellsFargoAutograph',
    name: 'Wells Fargo Autograph℠ Card',
    category: 'Versatile Cruiser',
    imageSrc: '/images/cards/wells-fargo-autograph.png', // ❗ Replace
    imageAlt: 'Wells Fargo Autograph Card',
    officialCardPageLink: 'https://www.wellsfargo.com/credit-cards/autograph-visa/',
    ourTake: "The Wells Fargo Autograph℠ Card is the definition of a simple, effective workhorse. It offers an unlimited 3x points across a wide range of practical categories: restaurants, travel, transit, gas stations, EV charging, popular streaming services, and phone plans.",
    rewards: "There are no caps to track and no categories to activate. For a road-tripper, this single card can cover almost every expense at a solid 3x rate.",
    applyLink: 'https://www.wellsfargo.com/credit-cards/autograph-visa/',
    ratesFeesLink: 'https://www.wellsfargo.com/credit-cards/autograph-visa/terms/',
    learnMoreLink: '/cards/wells-fargo-autograph', // ✏️ Create this internal page later
    ratingValue: 8.9,
    ratingStars: 4.5,
  },
  {
    id: 'costcoAnywhereVisa',
    name: 'Costco Anywhere Visa® Card by Citi',
    category: 'Versatile Cruiser',
    imageSrc: '/images/cards/costco-anywhere-visa.png', // ❗ Replace
    imageAlt: 'Costco Anywhere Visa Card by Citi',
    officialCardPageLink: 'https://www.costco.com/my-life-benefits-costco-anywhere-visa.html',
    ourTake: "For the millions of dedicated Costco members, the Costco Anywhere Visa® Card by Citi is a rewards powerhouse. It delivers 4% cash back on eligible EV charging and gas purchases worldwide, 3% cash back on restaurants and eligible travel, and 2% cash back on all purchases from Costco and Costco.com.",
    rewards: "However, its value is intrinsically tied to the Costco ecosystem, and its rewards are paid out only once per year in the form of a reward certificate.",
    applyLink: 'https://www.costco.com/my-life-benefits-costco-anywhere-visa.html',
    ratesFeesLink: 'https://www.costco.com/my-life-benefits-costco-anywhere-visa.html',
    learnMoreLink: '/cards/costco-anywhere-visa', // ✏️ Create this internal page later
    ratingValue: 8.5,
    ratingStars: 4.2,
  },
  {
    id: 'bofaCustomizedCash',
    name: 'Bank of America® Customized Cash Rewards',
    category: 'Versatile Cruiser',
    imageSrc: '/images/cards/bofa-customized-cash.png', // ❗ Replace
    imageAlt: 'Bank of America Customized Cash Rewards Card',
    officialCardPageLink: 'https://promotions.bankofamerica.com/preferredrewards/en',
    ourTake: "On the surface, this card offers a solid 3% cash back in a category of your choice, including 'Gas and EV Charging Stations.' Its true potential, however, is unlocked through the Bank of America Preferred Rewards program.",
    rewards: "Clients with significant balances can receive a rewards bonus of 25% to 75%, potentially turning the 3% cash back into an industry-leading 5.25%.",
    applyLink: 'https://www.bankofamerica.com/credit-cards/products/cash-back-credit-card/',
    ratesFeesLink: 'https://www.bankofamerica.com/credit-cards/products/cash-back-credit-card/',
    learnMoreLink: '/cards/bofa-customized-cash', // ✏️ Create this internal page later
    ratingValue: 8.6,
    ratingStars: 4.3,
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// 📊 COMPARISON TABLE DATA
// ─────────────────────────────────────────────────────────────────────────────
const comparisonEVTableData = [
    { name: 'PenFed Platinum Rewards', reward: '5x Points', fee: '$0', perks: 'No Foreign Transaction Fee', caps: 'None on EV charging', profile: 'The high-volume charger' },
    { name: 'U.S. Bank Altitude Connect', reward: '4x Points', fee: '$0', perks: 'No FTF, Priority Pass, TSA PreCheck', caps: '$1,000/qtr on travel, gas, & EV', profile: 'The budget road-tripper' },
    { name: 'Wells Fargo Autograph', reward: '3x Points', fee: '$0', perks: 'No FTF, Cell Phone Protection', caps: 'None on EV charging', profile: 'The simple single-card user' },
    { name: 'Costco Anywhere Visa', reward: '4% Cash Back', fee: '$0 (w/ membership)', perks: 'No Foreign Transaction Fee', caps: '$7,000/year on gas & EV', profile: 'The dedicated Costco member' },
    { name: 'Citi Strata Premier', reward: '3x Transferable Points', fee: '$95', perks: 'No FTF, Travel Protections', caps: 'None on EV charging', profile: 'The travel hacker' },
    { name: 'Bank of America Customized', reward: '3% - 5.25% Cash Back', fee: '$0', perks: 'Customizable Categories', caps: '$2,500/qtr combined cap', profile: 'The BofA Preferred client' },
    { name: 'U.S. Bank Cash+', reward: '5% Home / 2% EV', fee: '$0', perks: 'Customizable Categories', caps: '$2,000/qtr on 5%', profile: 'The home charger' },
    { name: 'Chase Freedom Flex', reward: '5% Cash Back (Rotating)', fee: '$0', perks: 'Rotating Categories', caps: '$1,500/qtr on bonus', profile: 'The strategic maximizer' },
    { name: 'FutureCard Visa Debit', reward: '10% Cash Back', fee: '$0', perks: 'No Credit Check', caps: '$150/month cashback limit', profile: 'The early adopter' },
];

// ─────────────────────────────────────────────────────────────────────────────
// 🧠 HELPERS - JSON-LD SCHEMA
// ─────────────────────────────────────────────────────────────────────────────
function generateJsonLD() {
    // This function remains largely the same, but we update the content it uses
    const itemListElements = evCardData.map((card, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'Product',
        name: card.name,
        url: `${SITE_BASE_URL}${card.learnMoreLink}`,
        image: `${SITE_BASE_URL}${card.imageSrc}`,
        description: card.ourTake,
        brand: { '@type': 'Brand', name: card.name.split(' ')[0].replace('®', '') },
        offers: { '@type': 'Offer', priceCurrency: 'USD', price: card.officialCardPageLink.includes('95') ? '95' : '0', url: card.applyLink },
        ...(card.ratingValue && { aggregateRating: { '@type': 'AggregateRating', ratingValue: card.ratingValue, bestRating: '10', ratingCount: 1 }})
      },
    }));

    const breadcrumbsSchema = {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_BASE_URL },
        { '@type': 'ListItem', position: 2, name: 'Reviews', item: `${SITE_BASE_URL}/reviews` },
        { '@type': 'ListItem', position: 3, name: 'Best EV Charging Credit Cards 2025', item: PAGE_URL },
      ],
    };

    const articleSchema = {
      '@type': 'ReviewNewsArticle',
      mainEntityOfPage: { "@type": "WebPage", "@id": PAGE_URL },
      headline: 'Cards That Earn Bonus Points on EV Charging in 2025: Your Ultimate Guide',
      description: 'Discover the best credit cards for EV charging in 2025. Maximize your rewards on both home and public charging with our expert review and comparison.',
      image: [`${SITE_BASE_URL}${HERO_IMAGE_SRC}`],
      author: { '@type': 'Person', name: author.name, url: author.social.linkedin, jobTitle: author.title },
      publisher: { '@type': 'Organization', name: SITE_NAME, logo: { '@type': 'ImageObject', url: `${SITE_BASE_URL}/images/travel-card-insider-logo-120.png` }},
      datePublished: DATE_PUBLISHED,
      dateModified: DATE_MODIFIED,
      about: itemListElements.map(el => el.item),
    };

    return JSON.stringify({ '@context': 'https://schema.org', '@graph': [articleSchema, breadcrumbsSchema, { '@type': 'ItemList', name: 'Best EV Charging Credit Cards 2025', url: PAGE_URL, numberOfItems: evCardData.length, itemListElement: itemListElements, mainEntityOfPage: PAGE_URL }] }, null, 2);
}

// ─────────────────────────────────────────────────────────────────────────────
// 🌐 COMPONENT
// ─────────────────────────────────────────────────────────────────────────────
function BestEvChargingCardsPage2025() {
    const [showTooltip, setShowTooltip] = useState(false);
    const triggerRef = useRef(null);
    const tooltipRef = useRef(null);
    const tooltipTimeoutIdRef = useRef(null);

    const handleMouseEnterTriggerOrTooltip = useCallback(() => { if (tooltipTimeoutIdRef.current) clearTimeout(tooltipTimeoutIdRef.current); setShowTooltip(true); }, []);
    const handleMouseLeaveTriggerOrTooltip = useCallback(() => { tooltipTimeoutIdRef.current = setTimeout(() => { if (triggerRef.current && !triggerRef.current.matches(':hover') && tooltipRef.current && !tooltipRef.current.matches(':hover')) { setShowTooltip(false); } }, 150); }, []);
    
    useEffect(() => { const currentTimeoutId = tooltipTimeoutIdRef.current; return () => { if (currentTimeoutId) clearTimeout(currentTimeoutId); }; }, []);

    return (
        <>
            <Head>
                {/* Core SEO */}
                <title>Best EV Charging Credit Cards (July 2025) | {SITE_NAME}</title>
                <meta name="description" content="Maximize rewards on every charge. We review the top credit cards for both public fast charging and charging at home to save you money on your electric road trip."/>
                <meta name="viewport" content="width=device-width,initial-scale=1" />
                <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
                <meta name="keywords" content="best ev charging credit cards, ev rewards, credit cards for electric vehicles, charging rewards, wells fargo autograph, us bank cash plus, penfed platinum, citi, bank of america" />
                <link rel="canonical" href={PAGE_URL} />

                {/* Open Graph & Twitter */}
                <meta property="og:title" content={`Best EV Charging Credit Cards (July 2025) | ${SITE_NAME}`} />
                <meta property="og:description" content="Turn your charging costs into valuable rewards. Our guide breaks down the top cards for EV drivers in 2025." />
                <meta property="og:url" content={PAGE_URL} />
                <meta property="og:image" content={`${SITE_BASE_URL}${HERO_IMAGE_SRC}`} />
                <meta name="twitter:card" content="summary_large_image" />
                
                {/* JSON‑LD Schema */}
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: generateJsonLD() }} />
            </Head>

            <main className={styles.reviewContainer}>
                <header className={styles.reviewHeader}>
                    <h1>Cards That Earn Bonus Points on EV Charging in 2025: Your Ultimate Road-Trip Ready Wallet</h1>
                    <div className={styles.authorBioContainer} ref={triggerRef} onMouseEnter={handleMouseEnterTriggerOrTooltip} onMouseLeave={handleMouseLeaveTriggerOrTooltip}>
                        <Image src={author.image} alt={`${author.name} headshot`} width={40} height={40} className={styles.authorImageSmall} priority />
                        <div className={styles.authorInfo}><span className={styles.authorName}>{author.name}</span><span className={styles.authorTitle}>{author.title}</span><time dateTime={DATE_MODIFIED} className={styles.authorLastEdited}>Last updated: {new Date(DATE_MODIFIED).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</time></div>
                        {showTooltip && (
                            <div className={styles.authorTooltip} ref={tooltipRef} role="tooltip" onMouseEnter={handleMouseEnterTriggerOrTooltip} onMouseLeave={handleMouseLeaveTriggerOrTooltip}>
                                {/* Full author tooltip can be implemented here based on the student card file */}
                                <p>{author.bio}</p>
                            </div>
                        )}
                    </div>
                </header>
                
                <div className={styles.heroSection}><Image src={HERO_IMAGE_SRC} alt={HERO_IMAGE_ALT} layout="responsive" width={900} height={450} objectFit="cover" priority className={styles.heroImage} /></div>
                
                <p className={styles.disclaimer}><strong>Disclaimer:</strong> Card offers are accurate as of publish date. Please verify all details with the issuer.</p>

                <article>
                    <section className={styles.reviewSection}>
                        <h2>The New Road-Trip Reality: Fueling Up on Electrons and Rewards</h2>
                        <p>The great American road trip is getting an electric makeover. Picture this: a family cruising down the scenic Blue Ridge Parkway in a sleek Rivian R1S. They pull into a charging station, not with the familiar dread of "range anxiety," but with an exciting sense of "rewards anticipation."</p>
                        <p>The old ritual of wrestling with greasy gas pumps is being replaced by a clean, tech-savvy pause. You plug in your car, tap your credit card, and watch your battery climb, knowing that every kilowatt-hour is earning you valuable points or cash back.</p>
                        <p>This is the new reality for electric vehicle (EV) drivers. As the nation's charging infrastructure rapidly expands, the question is no longer if an electric road trip is possible, but how to make it financially smart. The right credit card can transform a necessary expense into a rewarding part of your journey.</p>
                    </section>

                    <section className={styles.reviewSection}>
                        <h2>Why Your Wallet Needs an EV-Specific Strategy</h2>
                        <p>For decades, we’ve optimized our gas spending with fuel-centric credit cards. Today's EV owners face a more complex "refueling" landscape, and that demands a new financial game plan. The biggest issue is the massive cost difference between charging at home and charging on the road. Most EV owners do the bulk of their charging at home with a Level 2 charger, where electricity rates are relatively low—often under $0.17 per kilowatt-hour (kWh). <a href="https://www.eia.gov/electricity/monthly/epm_table_grapher.php?t=epmt_5_6_a" target="_blank" rel="noopener noreferrer">[Citation Placeholder 1]</a> Public DC fast charging, the lifeblood of any long-distance adventure, is a different beast altogether. Costs can be three to seven times higher, sometimes soaring past $0.60 per kWh, making a single "fill-up" a $10 to $30 expense. <a href="https://www.electrifyamerica.com/pricing/" target="_blank" rel="noopener noreferrer">[Citation Placeholder 2]</a></p>
                        <p>This financial gap created a golden opportunity for credit card issuers. A game-changing development was the creation of a specific Merchant Category Code (MCC), 5552, for EV charging stations by Visa and Mastercard. This allows banks to separate EV charging purchases from your regular utility bills or gas station spending. Since 2022, major players like U.S. Bank, Wells Fargo, Citi, and Bank of America have rolled out new cards or updated existing ones to offer high-yield bonus rewards for this specific category.</p>
                        <p>As a result, the best credit card strategy isn’t a one-size-fits-all solution. It needs to mirror how you fuel your EV. It must tackle two distinct challenges: maximizing rewards on your frequent, low-cost home charging bills and offsetting the less frequent but high-cost expense of public fast charging during your travels. Where you live—whether you're a homeowner with a garage or an apartment dweller relying on public infrastructure—is now the single most important factor in choosing the right credit card.</p>
                    </section>
                    
                    <section id="top-picks" className={styles.reviewSection}>
                        <h2>The 2025 Power Players: Top Credit Cards for EV Charging</h2>
                        <p>Navigating the growing market of EV-friendly credit cards can be overwhelming. To help you out, here’s a breakdown of the top contenders for 2025, highlighting the best options for different types of drivers.</p>
                        
                        <div id="comparison-table" className={`${styles.reviewSection} ${styles.comparisonTableContainer}`}>
                            <h3>The 2025 EV Charging Card Showdown</h3>
                            <div className={styles.tableWrapper}>
                                <table>
                                    <thead><tr><th>Card Name</th><th>EV Charging Reward Rate & Type</th><th>Annual Fee</th><th>Key Travel Perks</th><th>Spending Caps/Limitations</th><th>Ideal Driver Profile</th></tr></thead>
                                    <tbody>{comparisonEVTableData.map((card) => (<tr key={card.name}><td>{card.name}</td><td>{card.reward}</td><td>{card.fee}</td><td>{card.perks}</td><td>{card.caps}</td><td>{card.profile}</td></tr>))}</tbody>
                                </table>
                            </div>
                        </div>
                    </section>

                    <section className={styles.reviewSection}>
                        <h2>The High-Octane Earners (Maximum Rewards Rate)</h2>
                        <p>For drivers whose main goal is to earn the absolute highest rate on every charge, a few specialized cards really shine.</p>
                        {evCardData.filter(c => c.category === 'High-Octane Earner').map((card, index) => (
                          <div key={card.id} className={`${styles.cardDetailSection} ${styles.cardSeparator}`}>
                            <div className={styles.cardHeader}>
                                <div className={styles.cardImageContainer}><Image src={card.imageSrc} alt={card.imageAlt} width={150} height={95} objectFit="contain" /></div>
                                <div className={styles.cardTitleRating}><h3><Link href={card.learnMoreLink}><a>{card.name}</a></Link></h3><StarRating rating={card.ratingStars} /></div>
                            </div>
                            <p><strong>Expert Verdict:</strong> {card.ourTake}</p>
                            <p><strong>Rewards Breakdown:</strong> {card.rewards}</p>
                            <div className={styles.cardButtonsContainer}><a href={card.applyLink} target="_blank" rel="noopener noreferrer sponsored" className={`${styles.cardButton} ${styles.applyButton}`}>Apply Now</a><a href={card.ratesFeesLink} target="_blank" rel="noopener noreferrer sponsored" className={`${styles.cardButton} ${styles.secondaryButton}`}>See Rates & Fees</a></div>
                          </div>
                        ))}
                    </section>

                    <section className={styles.reviewSection}>
                        <h2>The Versatile Cruisers (Strong, Flexible Rewards)</h2>
                        <p>This category is for drivers who want more than just a high rate on charging. These cards offer a balanced blend of strong rewards across multiple road-trip categories, valuable travel perks, and user-friendly structures.</p>
                        {evCardData.filter(c => c.category === 'Versatile Cruiser').map((card, index) => (
                          <div key={card.id} className={`${styles.cardDetailSection} ${index < evCardData.filter(c=>c.category === 'Versatile Cruiser').length - 1 ? styles.cardSeparator : ''}`}>
                             <div className={styles.cardHeader}>
                                <div className={styles.cardImageContainer}><Image src={card.imageSrc} alt={card.imageAlt} width={150} height={95} objectFit="contain" /></div>
                                <div className={styles.cardTitleRating}><h3><Link href={card.learnMoreLink}><a>{card.name}</a></Link></h3><StarRating rating={card.ratingStars} /></div>
                            </div>
                            <p><strong>Expert Verdict:</strong> {card.ourTake}</p>
                            <p><strong>Rewards Breakdown:</strong> {card.rewards}</p>
                             <div className={styles.cardButtonsContainer}><a href={card.applyLink} target="_blank" rel="noopener noreferrer sponsored" className={`${styles.cardButton} ${styles.applyButton}`}>Apply Now</a><a href={card.ratesFeesLink} target="_blank" rel="noopener noreferrer sponsored" className={`${styles.cardButton} ${styles.secondaryButton}`}>See Rates & Fees</a></div>
                          </div>
                        ))}
                    </section>

                    <section id="user-reviews" className={styles.reviewSection}>
                        <h2>Voices from the Road: User Testimonials and Insights</h2>
                        <p>To give you the full picture, let's hear from actual cardholders. These testimonials offer valuable perspectives on how these cards perform in the real world.</p>
                        <blockquote className={styles.quote}>
                            <p>"I’ve had this card for a little over a year now, and it has quickly become my go-to for almost everything. The 3x points on dining, travel, and my EV charging is just fantastic. I took a road trip up the coast, and it was so satisfying to know I was earning solid rewards on my charging stops, my hotel stays, and all the great food I was eating. It’s so simple, I don’t have to think about it."</p>
                            <footer>— "RoadWarrior22" on the Wells Fargo Autograph℠ Card (Source: Wells Fargo Website)</footer>
                        </blockquote>
                        <blockquote className={styles.quote}>
                            <p>"As an EV owner who mostly charges at home, the U.S. Bank Cash+ has been a revelation. I set my 5% category to 'Home Utilities' and I'm basically getting a 5% discount on 'fueling' my car. I was a little hesitant about having to remember to activate the categories each quarter, but my calendar reminders make it a breeze. It's a bit of effort for a big payoff."</p>
                            <footer>— "EVEnthusiast88" on the U.S. Bank Cash+® Card (Source: Reddit r/CreditCards)</footer>
                        </blockquote>
                    </section>
                    
                    <section id="final-verdict" className={styles.reviewSection}>
                        <h2>Building Your Road-Trip Ready Wallet: A Strategic Conclusion</h2>
                        <p>As the EV market continues to grow, so do the financial tools available to owners. Choosing the right credit card is no longer just about convenience; it’s a key financial decision that can seriously impact your total cost of ownership and turn every mile you drive into real value.</p>
                        
                        <h3>The Final Checklist: Choosing Your Champion</h3>
                        <p>The best card for you depends entirely on your habits and financial goals. Ask yourself these four key questions:</p>
                        <ol>
                            <li><strong>What's your primary charging profile?</strong> Are you an apartment dweller who relies on public chargers? A card like the Wells Fargo Autograph℠ with its broad, uncapped 3x rewards is perfect. Are you a homeowner who charges overnight? The U.S. Bank Cash+® with its 5% back on home utilities is your best bet.</li>
                            <li><strong>What's your rewards philosophy?</strong> Do you prefer the simplicity of cash back? The Costco Anywhere Visa® or Bank of America® Customized Cash Rewards are strong choices. Are you a travel maximizer who loves turning points into premium flights? The Citi Strata Premier℠ is made for you.</li>
                            <li><strong>What's your tolerance for complexity?</strong> Are you willing to track and activate quarterly categories to earn 5% with the Chase Freedom Flex℠? Or do you prefer a single, "set-it-and-forget-it" solution like the Wells Fargo Autograph℠?</li>
                            <li><strong>What's your risk appetite?</strong> Are you an early adopter willing to try a fintech debit card to get a massive, but potentially temporary, 10% reward with the FutureCard? <a href="https://www.future.green/futurecard" target="_blank" rel="noopener noreferrer">[Citation Placeholder 10]</a></li>
                        </ol>

                        <h3>Final Verdict</h3>
                        <p>The era of the electric road trip is here, and with it comes a new world of financial opportunities. The days of settling for 1% or 2% back on your charging expenses are over. By carefully considering your personal charging habits and rewards goals, every EV driver in the U.S. can now arm their wallet with a specialized tool that turns the cost of plugging in into a valuable stream of rewards. This makes every journey more efficient, both on the road and on your balance sheet.</p>
                    </section>
                </article>
            </main>
        </>
    );
}

export default BestEvChargingCardsPage2025;