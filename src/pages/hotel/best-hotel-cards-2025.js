// File: pages/hotel/best-hotel-cards-2025.js

// !!! WARNING: THIS FILE CONTAINS PLACEHOLDER DATA/URLs/DIMENSIONS !!!
// !!! YOU MUST REPLACE ALL PLACEHOLDERS MARKED WITH '!!!' BEFORE DEPLOYMENT !!!
// !!! VERIFY ALL CARD DETAILS AGAINST OFFICIAL ISSUER INFO !!!

import React, { useState, useEffect, useCallback, useRef } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/ZeroAprIndex.module.css'; // Using same CSS module
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import schemaOrg from '@/schemas/organization.json'; // Assuming a base Organization schema
import schemaWebsite from '@/schemas/website.json';   // Assuming a base Website schema
import schemaCard1 from '@/schemas/hotel/schema-card-1.json';
import schemaCard2 from '@/schemas/hotel/schema-card-2.json';
import schemaCard3 from '@/schemas/hotel/schema-card-3.json';
import schemaCard4 from '@/schemas/hotel/schema-card-4.json';
import schemaCard5 from '@/schemas/hotel/schema-card-5.json';
import schemaCard6 from '@/schemas/hotel/schema-card-6.json';
import schemaCard7 from '@/schemas/hotel/schema-card-7.json';
import schemaCard8 from '@/schemas/hotel/schema-card-8.json';
import schemaCard9 from '@/schemas/hotel/schema-card-9.json';

// --- COMPLETE Hotel Card Data (Extracted from HTML - VERIFY ALL DETAILS!) ---
const cardsData = [
    {
        id: 'marriott-bonvoy-brilliant',
        name: 'Marriott Bonvoy Brilliant® American Express® Card',
        tciRating: '9.0',
        applyUrl: 'https://www.americanexpress.com/us/credit-cards/card/marriott-bonvoy-brilliant/', // *** REPLACE ***
        learnMoreUrl: '/cards/marriott-bonvoy-brilliant', // *** REPLACE ***
        ratesFeesUrl: 'https://www.americanexpress.com/us/credit-cards/card-application/apply/prospect/terms/marriott-bonvoy-brilliant-card/25330-10-0#FeeTable',
        imageUrl: '/NUS000000313_480x304_straight_withname.avif', // *** VERIFY PATH ***
        imageAlt: 'Marriott Bonvoy Brilliant® American Express® Card',
        imageWidth: 480, // *** REPLACE ***
        imageHeight: 304, // *** REPLACE ***
        bonus: '<strong>Welcome Bonus:</strong> Earn 125,000 Marriott Bonvoy points after spending $5,000 in the first 3 months. <br><em>(Valued at ~$1,050 for Marriott stays).</em>',
        earningRatesList: [
            '6X points at Marriott hotels',
            '3X points on dining and airfare',
            '2X points on other purchases'
        ],
        keyFeatures: [ // Combined Luxury & Perks from HTML
             'Platinum Elite Status: Complimentary upgrades, late checkout, and more.',
             '$300 annual dining credit (up to $25/month in statement credits).', // Updated credit description
             'Priority Pass™ Select Membership: Access 1,300+ airport lounges worldwide.',
             'Free Night Award: Annual certificate worth up to 85,000 points.'
        ],
        additionalPerks: [
             '$100 credit for Global Entry or TSA PreCheck',
             'No foreign transaction fees',
             'Complimentary premium internet at Marriott properties'
        ],
        bestFor: 'Luxury travelers and Marriott loyalists seeking high-value rewards and premium perks.',
        // Table Data
        annualFeeTable: '$650',
        welcomeBonusTable: '125,000 points',
        rewardsRatesTable: '6X at Marriott; 3X on dining and airfare',
        bestForTable: 'Luxury Marriott stays',
        schemaCard1
    },
    {
        id: 'hilton-honors-aspire',
        name: 'Hilton Honors American Express Aspire Card',
        tciRating: '9.0',
        applyUrl: 'https://www.americanexpress.com/us/credit-cards/card/hilton-honors-aspire/', // *** REPLACE ***
        learnMoreUrl: '/cards/hilton-honors-aspire', // *** REPLACE ***
        ratesFeesUrl: 'https://www.americanexpress.com/us/credit-cards/card-application/apply/prospect/terms/hilton-honors-aspire-credit-card/25330-10-0#FeeTable',
        imageUrl: '/NUS000000329_480x304_straight_withname.avif', // *** VERIFY PATH ***
        imageAlt: 'Hilton Honors American Express Aspire Card',
        imageWidth: 480, // *** REPLACE ***
        imageHeight: 304, // *** REPLACE ***
        bonus: '<strong>Welcome Bonus:</strong> Earn 150,000 Hilton Honors points after spending $4,000 in the first 3 months.<br><em>(Valued at ~$900 for Hilton stays).</em>',
        earningRatesList: [
             '14X points on eligible Hilton purchases',
             '7X points on flights booked directly with airlines, car rentals, and dining',
             '3X points on all other purchases'
        ],
        keyFeatures: [ // Combined Luxury & Perks
             'Hilton Diamond Status: Complimentary upgrades and executive lounge access',
             'Weekend Night Reward: Annual free weekend night certificate',
             '$250 Hilton Resort Credit',
             'Priority Pass™ Select Membership: Unlimited lounge access'
        ],
        additionalPerks: [
            '$250 Airline Fee Credit',
            'No foreign transaction fees',
            'Travel and purchase protection benefits'
        ],
        bestFor: 'Hilton enthusiasts seeking top-tier perks and high-value rewards for luxury travel experiences.',
        // Table Data
        annualFeeTable: '$450',
        welcomeBonusTable: '150,000 points',
        rewardsRatesTable: '14X at Hilton; 7X on travel/dining',
        bestForTable: 'Hilton luxury perks',
        schemaCard2
    },
    {
        id: 'ihg-rewards-premier',
        name: 'IHG® Rewards Premier Credit Card',
        tciRating: '7.5',
        applyUrl: 'https://creditcards.chase.com/travel-credit-cards/ihg-rewards-club/premier', // *** REPLACE ***
        learnMoreUrl: '/cards/ihg-one-rewards-premier', // *** REPLACE ***
        ratesFeesUrl: 'https://sites.chase.com/services/creatives/pricingandterms.html/content/dam/pricingandterms/LGC60417.html',
        imageUrl: '/PremierCard_Hero_D.png', // *** VERIFY PATH ***
        imageAlt: 'IHG® Rewards Premier Credit Card',
        imageWidth: 250, // *** REPLACE ***
        imageHeight: 158, // *** REPLACE ***
        bonus: '<strong>Welcome Bonus:</strong> Earn 175,000 bonus points after spending $3,000 on purchases in the first 3 months.<br><em>(Valued at ~$875 for IHG stays).</em>',
        earningRatesList: [
             '10X points on IHG purchases',
             '5X points on travel, dining, and gas',
             '3X points on other purchases'
        ],
        keyFeatures: [ // Combined Luxury & Perks
             'Anniversary Free Night (up to 40,000 points)',
             '4th Night Free on award stays',
             'Global Entry/TSA PreCheck fee credit',
             'Platinum Elite Status'
        ],
        additionalPerks: [
             'No foreign transaction fees',
             '25% points discount for 3+ night reward stays (promo dependent)',
             'Trip cancellation/interruption insurance'
        ],
        bestFor: 'Frequent IHG travelers looking to maximize value and enjoy free night rewards.',
        // Table Data
        annualFeeTable: '$99',
        welcomeBonusTable: '175,000 points',
        rewardsRatesTable: '10X at IHG; 5X on travel/dining',
        bestForTable: 'IHG frequent stays',
        schemaCard3
    },
     {
        id: 'world-of-hyatt-card',
        name: 'World of Hyatt Credit Card',
        tciRating: '8.5',
        applyUrl: 'https://creditcards.chase.com/travel-credit-cards/world-of-hyatt-credit-card', // *** REPLACE ***
        learnMoreUrl: '/cards/world-of-hyatt-business', // *** REPLACE ***
        ratesFeesUrl: 'https://sites.chase.com/services/creatives/pricingandterms.html/content/dam/pricingandterms/LGC60391.html',
        imageUrl: '/world_of_hyatt_card.png', // *** VERIFY PATH ***
        imageAlt: 'World of Hyatt Credit Card',
        imageWidth: 250, // *** REPLACE ***
        imageHeight: 158, // *** REPLACE ***
        bonus: '<strong>Welcome Bonus:</strong> Earn up to 60,000 Bonus Points: <br> • 30,000 Bonus Points after $3,000 in 3 months <br> • Up to 30,000 more Bonus Points (2 Bonus Points per $1 in first 6 months, up to $15,000)',
        earningRatesList: [
             '9X total on Hyatt stays (4X with card + 5X as a member)',
             '2X on dining, flights, local transit',
             '1X on all other purchases'
        ],
        keyFeatures: [ // Combined Luxury & Perks
            'Free Night Award (Category 1-4) each card anniversary',
            'Second Free Night after $15,000 spend yearly',
            'Automatic Discoverist status',
            '2 elite night credits per $5,000 spend'
        ],
        additionalPerks: [
            'No foreign transaction fees',
            'Travel and purchase protections',
            'Promotional points rebates'
        ],
        bestFor: 'Hyatt enthusiasts seeking free nights, elite benefits, and fast status accrual.',
        // Table Data
        annualFeeTable: '$95',
        welcomeBonusTable: '60,000 points',
        rewardsRatesTable: '9X at Hyatt; 2X on dining/travel',
        bestForTable: 'Hyatt luxury seekers',
        schemaCard4
    },
    {
        id: 'marriott-bonvoy-boundless',
        name: 'Marriott Bonvoy Boundless® Credit Card',
        tciRating: '8.4',
        applyUrl: 'https://creditcards.chase.com/travel-credit-cards/marriott-bonvoy/boundless', // *** REPLACE ***
        learnMoreUrl: '/cards/marriott-bonvoy-boundless', // *** REPLACE ***
        ratesFeesUrl: 'https://sites.chase.com/services/creatives/pricingandterms.html/content/dam/pricingandterms/LGC60502.html',
        imageUrl: '/Boundless_cardArt.png', // *** VERIFY PATH ***
        imageAlt: 'Marriott Bonvoy Boundless® Credit Card',
        imageWidth: 250, // *** REPLACE ***
        imageHeight: 158, // *** REPLACE ***
        bonus: '<strong>Welcome Bonus:</strong> 100,000 Marriott Bonvoy points after $3,000 in the first 3 months.<br /><em>(Valued at ~$850 for Marriott stays).</em>',
        earningRatesList: [
            '6X points on Marriott purchases',
            '2X on all other purchases'
        ],
        keyFeatures: [ // Combined Redemption & Perks
             'Redeem points for Marriott hotels, experiences',
             'Transfer points to 40+ airline partners',
             'Free annual night award (up to 35,000 points)',
             'Automatic Silver Elite status'
        ],
        additionalPerks: [
            'No foreign transaction fees',
            'Trip delay and baggage delay insurance'
        ],
        bestFor: 'Marriott enthusiasts wanting free nights and status benefits.',
        // Table Data
        annualFeeTable: '$95',
        welcomeBonusTable: '100,000 points',
        rewardsRatesTable: '6x Marriott, 2x all else',
        bestForTable: 'Occasional Marriott guests',
        schemaCard5
    },
    {
        id: 'hilton-honors-surpass',
        name: 'Hilton Honors Surpass® Card',
        tciRating: '7.8',
        applyUrl: 'https://www.americanexpress.com/us/credit-cards/card/hilton-honors-surpass/', // *** REPLACE ***
        learnMoreUrl: '/cards/hilton-honors-surpass', // *** REPLACE ***
        ratesFeesUrl: 'https://www.americanexpress.com/us/credit-cards/card-application/apply/prospect/terms/hilton-honors-surpass-credit-card/25330-10-0#FeeTable',
        imageUrl: '/NUS000000328_480x304_straight_withname.avif', // *** VERIFY PATH ***
        imageAlt: 'Hilton Honors American Express Surpass® Card',
        imageWidth: 480, // *** REPLACE ***
        imageHeight: 304, // *** REPLACE ***
        bonus: '<strong>Welcome Bonus:</strong> 130,000 Hilton Honors points after $2,000 in 3 months.<br /><em>(Valued at ~$780 for Hilton stays).</em>',
        earningRatesList: [
            '12x points on Hilton purchases',
            '6x on dining, groceries, gas',
            '3x on all other purchases'
        ],
        keyFeatures: [ // Combined Luxury & Perks
             'Complimentary Hilton Honors Gold Status',
             'Weekend Night Reward after $15,000 annual spend',
             'Priority Pass™ Select: 10 free lounge visits/year'
        ],
        additionalPerks: [
            'No foreign transaction fees',
            'Potential Diamond Status after $40,000 spend',
            'Purchase and extended warranty protection'
        ],
        bestFor: 'Hilton loyalists seeking mid-tier perks, strong earning rates, and an upgrade path to Diamond.',
        // Table Data
        annualFeeTable: '$95',
        welcomeBonusTable: '130,000 points',
        rewardsRatesTable: '12X at Hilton; 6X on dining/gas',
        bestForTable: 'Hilton mid-tier rewards',
        schemaCard6
    },
     {
        id: 'wyndham-rewards-earner-plus',
        name: 'Wyndham Rewards Earner® Plus Card',
        tciRating: '7.2',
        applyUrl: 'https://www.wyndhamrewardscreditcard.com/earner-plus-card/', // *** REPLACE ***
        learnMoreUrl: '/cards/wyndham-rewards-earner-plus', // *** REPLACE ***
        ratesFeesUrl: 'https://www.barclaycardus.com/applycontent/TnCs.jsp?tc46850',
        imageUrl: '/Earner_plus.svg', // *** VERIFY/REPLACE PATH *** Assuming placeholder
        imageAlt: 'Wyndham Rewards Earner® Plus Card',
        imageWidth: 250, // *** REPLACE ***
        imageHeight: 158, // *** REPLACE ***
        bonus: '<strong>Welcome Bonus:</strong> Earn 45,000 Wyndham Rewards Points after spending $1,000 in the first 90 days.<br><em>(Enough for up to 6 free nights at participating properties).</em>',
        earningRatesList: [
            '6X points on Wyndham stays and gas',
            '4X points on dining and grocery stores',
            '1X points on all other purchases'
        ],
        keyFeatures: [ // Combined Luxury & Perks
             'Complimentary Wyndham Rewards Gold Status',
             '15% off on Wyndham bookings',
             'Flexible point redemptions for free nights'
        ],
        additionalPerks: [
            'No foreign transaction fees',
            'Annual 7,500 points bonus each card anniversary',
            'Extended warranty and purchase protection'
        ],
        bestFor: 'Wyndham guests looking to maximize rewards on hotel stays, dining, and everyday spending.',
        // Table Data
        annualFeeTable: '$75',
        welcomeBonusTable: '45,000 points',
        rewardsRatesTable: '6X at Wyndham; 4X on dining/groceries',
        bestForTable: 'Wyndham regulars',
        schemaCard7
    },
   
    {
        id: 'ritz-carlton-card',
        name: 'The Ritz-Carlton™ Credit Card',
        tciRating: '8.3',
         // *** REPLACE (Note: Legacy Card) ***
        learnMoreUrl: '/cards/ritz-carlton-card', // *** REPLACE ***
        ratesFeesUrl: 'https://creditcards.chase.com/marriott/cardmember/ritz-carlton',
        imageUrl: '/hero_card_art_ritz.png', // *** VERIFY PATH ***
        imageAlt: 'The Ritz-Carlton™ Credit Card',
        imageWidth: 250, // *** REPLACE ***
        imageHeight: 158, // *** REPLACE ***
        bonus: '<strong>Welcome Bonus:</strong> N/A (Legacy product; no longer open to new applicants)',
        earningRatesList: [
             '10X points at Ritz-Carlton and Marriott properties',
             '2X on other select categories',
             '1X elsewhere'
        ],
        keyFeatures: [ // Combined Luxury & Perks
            '$300 annual travel credit',
            'Complimentary Priority Pass™ lounge membership',
            'Marriott Bonvoy elite status boosts',
            'No foreign transaction fees',
            'Global Entry/TSA PreCheck statement credit',
            'Premium travel and purchase protections'
         ],
        additionalPerks: [],
        bestFor: 'High-end Marriott/Ritz fans who obtained this legacy card for premium perks.',
        // Table Data
        annualFeeTable: '$450',
        welcomeBonusTable: 'N/A (Legacy)',
        rewardsRatesTable: '$300 travel credit; 10X at Ritz-Carlton',
        bestForTable: 'High-end stays',
        schemaCard8
    },
    {
        id: 'capital-one-venture-x', // Note: Also on general travel card list
        name: 'Capital One Venture X Rewards Credit Card',
        tciRating: '9.0',
        applyUrl: 'https://www.capitalone.com/credit-cards/venture-x/', // *** REPLACE ***
        learnMoreUrl: '/cards/capital-one-venture-x', // *** REPLACE ***
        ratesFeesUrl: 'https://www.capitalone.com/credit-cards/venture-x/',
        imageUrl: '/venturex-cg-static-card-1000x630-2.avif', // *** VERIFY PATH ***
        imageAlt: 'Capital One Venture X Rewards Credit Card',
        imageWidth: 1000, // *** REPLACE ***
        imageHeight: 630, // *** REPLACE ***
        bonus: '<strong>Welcome Bonus:</strong> 75,000 miles after spending $4,000 in 3 months.<br /><em>(Valued at ~$750 for travel).</em>',
        earningRatesList: [
             '10X miles on hotels & rental cars via Capital One Travel',
             '5X miles on flights via Capital One Travel',
             '2X miles on all other purchases'
        ],
        keyFeatures: [ // Combined Redemption & Perks
            'Redeem miles for statement credits toward travel',
            'Transfer to 15+ travel partners for higher-value redemptions',
            '$300 travel credit through Capital One Travel',
            'Unlimited access to Capital One Lounges and Priority Pass',
            'Cell phone insurance coverage'
        ],
        additionalPerks: [],
        bestFor: 'Frequent travelers wanting luxury perks at a lower annual fee than other top premium cards.',
        // Table Data
        annualFeeTable: '$395',
        welcomeBonusTable: '75,000 miles',
        rewardsRatesTable: '10X on hotels; 5X on flights',
        bestForTable: 'Flexible hotel stays',
        schemaCard9
    }
];

// --- Schema Data (Inline for Hotel Cards Page) ---
const siteUrl = "https://www.travelcardinsider.com"; // *** REPLACE IF NEEDED ***
const pageUrl = `${siteUrl}/hotel/best-hotel-cards-2025`; // *** USE CORRECT PAGE PATH ***
const logoUrl = `${siteUrl}/logo-optimized.png`; // *** Use your actual logo URL ***
const heroImageUrl = `${siteUrl}/christian-lambert-vmIWr0NnpCQ-unsplash.jpg`; // *** Use correct hero image ***
const dateModifiedISO = new Date().toISOString();


// Define schema array at top level
const schemaArray = [
    schemaCard1, schemaCard2, schemaCard3, schemaCard4, schemaCard5,
    schemaCard6, schemaCard7, schemaCard8, schemaCard9
  ];
  
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      schemaOrg,
      schemaWebsite,
      {
        "@type": "CollectionPage",
        "@id": pageUrl,
        "url": pageUrl,
        "name": "Best Hotel Travel Credit Cards 2025 | TravelCardInsider",
        "headline": "Discover the Best 10 Hotel Travel Credit Cards of 2025",
        "description": "Compare the top 10 hotel-focused travel credit cards for 2025. Maximize points, enjoy elite perks, and get free nights with Marriott, Hilton, Hyatt, IHG, Wyndham, and more.",
        "inLanguage": "en-US",
        "isPartOf": { "@id": `${siteUrl}/#website` },
        "mainEntityOfPage": { "@type": "WebPage", "@id": pageUrl },
        "datePublished": "2025-01-15",
        "dateModified": dateModifiedISO,
        "author": { "@id": `${siteUrl}/#organization` },
        "publisher": { "@id": `${siteUrl}/#organization` },
        "mainEntity": {
          "@type": "ItemList",
          "name": "Top 10 Hotel Travel Credit Cards 2025",
          "numberOfItems": schemaArray.length,
          "itemListOrder": "https://schema.org/ItemListOrderUnordered",
          "itemListElement": schemaArray.map((schema, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "item": { "@id": schema["@id"] }
          }))
        }
      },
      ...schemaArray // Spread the schema cards into @graph
    ]
  };
  


// --- Rating Tooltip Content (Adjusted for hotel cards) ---
const ratingCriteria = [ 'Hotel Points Earning Rate', 'Welcome Bonus & Value', 'Hotel Perks (Status, Free Nights)', 'Annual Fee & Credits', 'Points Flexibility / Transfer Options' ];

// *** Component Function ***
export default function BestHotelCardsPage() { // Renamed component function
    // --- Tooltip State and Logic ---
    const [activeTooltip, setActiveTooltip] = useState(null);
    const tooltipRef = useRef(null);

    const handleIconClick = useCallback((event, card) => {
        event.preventDefault(); event.stopPropagation();
        if (activeTooltip && activeTooltip.id === card.id) { setActiveTooltip(null); }
        else { const rect = event.currentTarget.getBoundingClientRect(); const top = window.scrollY + rect.bottom + 5; const left = window.scrollX + rect.left; setActiveTooltip({ id: card.id, rating: card.tciRating, top: top, left: left }); }
    }, [activeTooltip]);
    const closeTooltip = useCallback(() => { setActiveTooltip(null); }, []);
    useEffect(() => { if (!activeTooltip) return; const handleClickOutside = (event) => { const isInfoButton = event.target.closest(`.${styles.infoIconButton}`); if (tooltipRef.current && !tooltipRef.current.contains(event.target) && !isInfoButton) { closeTooltip(); } }; document.addEventListener('mousedown', handleClickOutside); return () => { document.removeEventListener('mousedown', handleClickOutside); }; }, [activeTooltip, closeTooltip]);
    // --- End Tooltip State and Logic ---

    return (
        <>
             <Header />
            <Head>
                 <title>Best 10 Hotel Travel Credit Cards of 2025 | TravelCardInsider</title>
                 <meta name="description" content="Compare the top 10 hotel-focused travel credit cards for 2025. Maximize points, enjoy elite perks, and get free nights with Marriott, Hilton, Hyatt, and more."/>
                 <link rel="canonical" href={pageUrl}/>
                 <link
                     rel="preload"
                         as="image"
                     href="/christian-lambert-vmIWr0NnpCQ-unsplash.webp"
                     type="image/webp"
                />

                 {/* Preload critical fonts */}
        <link rel="preload" href="/fonts/Roboto_Condensed-Regular.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/Roboto_Condensed-Bold.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/PlayfairDisplay-Regular.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/Playfair-Display-Bold.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
                 {schemaData && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />}
                 <meta name="geo.region" content="US" />
<meta name="geo.placename" content="United States" />
<meta name="language" content="en-US" />
<meta name="distribution" content="US" />
<link rel="alternate" href="https://www.travelcardinsider.com" hreflang="en-us" />
            </Head>

            <main className={styles.pageWrapper}>

                {/* --- Hero Section --- */}
                <section className={styles.hero}>
                     <Image alt="Luxury hotel lobby" src="/christian-lambert-vmIWr0NnpCQ-unsplash.webp" layout="fill" objectFit="cover" objectPosition="center center" quality={80} priority className={styles.heroBackgroundImage} />
                    <div className={styles.heroOverlay}></div>
                    <div className={styles.heroContent}>
                        <h1 className={styles.heroTitle}>Discover the Best Hotel Travel Credit Cards of 2025</h1>
                        <p className={styles.heroDescription}>Compare top-rated travel credit cards, maximize rewards, and unlock exclusive perks for your next adventure. Whether you’re a frequent flyer, luxury traveler, or budget explorer, find the perfect card to suit your needs.</p>
                        <div className={styles.heroCta}><a href="/compare" className={`${styles.ctaButton} ${styles.ctaPrimary}`}>Compare Now</a></div>
                        {/* Add disclaimer if needed */}
                    </div>
                </section>

                {/* --- Comparison Table Section --- */}
                <section id="comparison-table" className={styles.comparisonSection}>
                     <h2 className={styles.sectionTitle}>Top 10 Hotel Travel Credit Cards</h2>
                    <div className={styles.tableResponsive}>
                        <table className={styles.comparisonTable}>
                            <thead>
                                <tr>
                                    {/* Headers from HTML */}
                                    <th>Card Name</th>
                                    <th>Annual Fee</th>
                                    <th>Welcome Bonus</th> {/* Changed Header from HTML */}
                                    <th>Rewards Rates</th>
                                    <th>Best For</th>
                                    <th>Apply / Details</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cardsData.map((card) => (
                                    <tr key={`${card.id}-table`}>
                                        <td data-label="Credit Card">
                                            <span className={styles.cardTableName}>{card.name}</span>
                                            <div className={styles.tableRating}>
                                                <button type="button" className={styles.infoIconButton} onClick={(e) => handleIconClick(e, card)} aria-label={`Show rating details for ${card.name}`} title="Our TCI rating info">
                                                    <svg aria-hidden="true" focusable="false" className={styles.infoIcon} width="13" height="13" viewBox="0 0 416.979 416.979"><path d="M356 61.1c-81.4-81.5-213.4-81.6-294.8-.2 -81.5 81.4-81.6 213.4-.2 294.8 81.4 81.5 213.4 81.6 294.8.2C437.3 274.6 437.4 142.6 356 61.1zM208.6 334.8c-11 0-20-9-20-20s9-20 20-20 20 9 20 20-9 20-20 20zm32.4-120.2c-11.4 6.7-12.4 14.9-12.4 38.5 -.003 1.6-.008 3.1-.017 4.7 -0.07 11.2-9.1 20.2-20.3 20.2 -0.04 0-.09 0-.13 0 -11.2-0.07-20.2-9.2-20.2-20.4 0.01-1.5 0.01-3 0.02-4.6 0.05-24.3 0.1-54.5 32.5-73.5 26-15.2 29.3-25.2 26.3-38.3 -3.6-15.4-17.7-19.4-28.6-18.1 -3.7.4-22.1 3.5-22.1 21.6 0 11.2-9.1 20.3-20.3 20.3s-20.3-9.1-20.3-20.3c0-32.6 23.9-58.1 58-62 35.2-4 65.1 16.2 72.8 49.3C297.8 181.4 256.6 205.5 241 214.6z"></path></svg>
                                                 </button>
                                                 TCI Rating: <strong>{card.tciRating}</strong>/10
                                             </div>
                                         </td>
                                         {/* Map correct data fields for table */}
                                         <td data-label="Annual Fee">{card.annualFeeTable}</td>
                                         <td data-label="Welcome Bonus">{card.welcomeBonusTable || card.bonus?.split('<br>')[0].replace(/<[^>]*>/g, '')}</td> {/* Use table value or extract */}
                                         <td data-label="Rewards Rates">{card.rewardsRatesTable}</td>
                                         <td data-label="Best For">{card.bestForTable}</td>
                                         <td data-label="Apply / Details">
                                            <div className={styles.tableActionGroup}>
                                                 <a href={card.applyUrl} className={`${styles.ctaButtonSmall} ${styles.ctaApply}`} target="_blank" rel="noopener noreferrer sponsored">Apply Now</a>
                                                 <Link href={card.learnMoreUrl} legacyBehavior><a className={styles.detailsLink}>Learn More</a></Link>
                                                 <a href={card.ratesFeesUrl} className={styles.ratesFeesLink} target="_blank" rel="noopener noreferrer sponsored">Rates & Fees</a>
                                             </div>
                                         </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                 </section>

                 {/* --- Detailed Card Section --- */}
                 <section className={styles.detailedCardsSection}>
                     <h2 className={styles.sectionTitle}>Featured Card Details</h2>
                    <div className={styles.cardsGrid}>
                         {cardsData.map(card => (
                             <div className={styles.detailedCard} key={card.id} id={card.id}>
                                 <div className={styles.cardHeader}>
                                     <div className={styles.cardImageContainer}><Image src={card.imageUrl} alt={card.imageAlt} width={card.imageWidth} height={card.imageHeight} loading='lazy' className={styles.cardImage} /></div>
                                     <div className={styles.cardTitleGroup}>
                                         <h3 className={styles.cardTitle}>{card.name}</h3>
                                         <div className={styles.rating}>
                                             <button type="button" className={styles.infoIconButton} onClick={(e) => handleIconClick(e, card)} aria-label={`Show rating details for ${card.name}`} title="Our TCI rating info">
                                                 <svg aria-hidden="true" focusable="false" className={styles.infoIcon} width="15" height="15" viewBox="0 0 416.979 416.979"><path d="M356 61.1c-81.4-81.5-213.4-81.6-294.8-.2 -81.5 81.4-81.6 213.4-.2 294.8 81.4 81.5 213.4 81.6 294.8.2C437.3 274.6 437.4 142.6 356 61.1zM208.6 334.8c-11 0-20-9-20-20s9-20 20-20 20 9 20 20-9 20-20 20zm32.4-120.2c-11.4 6.7-12.4 14.9-12.4 38.5 -.003 1.6-.008 3.1-.017 4.7 -0.07 11.2-9.1 20.2-20.3 20.2 -0.04 0-.09 0-.13 0 -11.2-0.07-20.2-9.2-20.2-20.4 0.01-1.5 0.01-3 0.02-4.6 0.05-24.3 0.1-54.5 32.5-73.5 26-15.2 29.3-25.2 26.3-38.3 -3.6-15.4-17.7-19.4-28.6-18.1 -3.7.4-22.1 3.5-22.1 21.6 0 11.2-9.1 20.3-20.3 20.3s-20.3-9.1-20.3-20.3c0-32.6 23.9-58.1 58-62 35.2-4 65.1 16.2 72.8 49.3C297.8 181.4 256.6 205.5 241 214.6z"></path></svg>
                                             </button>
                                             TCI Rating: <strong>{card.tciRating}</strong>/10
                                         </div>
                                     </div>
                                 </div>
                                 <div className={styles.cardBody}>
                                      {card.bonus && ( <div className={`${styles.cardFeatureBlock} ${styles.bonusBlock}`}><h4 tabIndex={-1}>Welcome Bonus</h4><p dangerouslySetInnerHTML={{ __html: card.bonus }}></p></div>)}
                                      {card.earningRatesList?.length > 0 && ( <div className={styles.cardFeatureBlock}><h4 tabIndex={-1}>Earning Rates</h4><ul className={styles.featureList}>{card.earningRatesList.map((rate, i) => <li key={`earn-${i}`}>{rate}</li>)}</ul></div>)}
                                      {card.keyFeatures?.length > 0 && ( <div className={styles.cardFeatureBlock}><h4 tabIndex={-1}>Key Features</h4><ul className={styles.featureList}>{card.keyFeatures.map((feature, i) => <li key={`feature-${i}`}>{feature}</li>)}</ul></div>)}
                                      {card.additionalPerks?.length > 0 && ( <div className={styles.cardFeatureBlock}><h4 tabIndex={-1}>Additional Perks</h4><ul className={styles.featureList}>{card.additionalPerks.map((perk, i) => <li key={`perk-${i}`}>{perk}</li>)}</ul></div>)}
                                      <div className={styles.cardFeatureBlock}><h4 tabIndex={-1}>Best For</h4><p>{card.bestFor}</p></div>
                                 </div>
                                 <div className={styles.cardActions}>
                                     <a href={card.applyUrl} className={`${styles.ctaButton} ${styles.ctaApply}`} target="_blank" rel="noopener noreferrer sponsored" title="From card issuer's secure site">Apply Now<span className={styles.ctaSubtext}></span></a>
                                     <Link href={card.learnMoreUrl} legacyBehavior><a className={`${styles.ctaButton} ${styles.ctaSecondary}`}>Learn More</a></Link>
                                     <a href={card.ratesFeesUrl} className={styles.ratesFeesLink} target="_blank" rel="noopener noreferrer sponsored">See Rates & Fees</a>
                                 </div>
                             </div>
                         ))}
                    </div>
                 </section>
            </main>

             {/* --- Conditionally Rendered Tooltip --- */}
             {activeTooltip && (
                <div ref={tooltipRef} className={styles.ratingTooltip} style={{ position: 'absolute', top: `${activeTooltip.top}px`, left: `${activeTooltip.left}px` }} role="tooltip" aria-live="polite">
                    <strong>TCI Rating: {activeTooltip.rating}/10</strong>
                    <p className={styles.tooltipIntro}>This rating is based on:</p>
                    <ul className={styles.tooltipList}> {ratingCriteria.map((criterion, index) => <li key={index}>{criterion}</li>)} </ul>
                </div>
            )}

             <Footer />
        </>
    );
}