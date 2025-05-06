// File: pages/general/best-travel-cards-2025.js

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
import schemaCard1 from '@/schemas/general/schema-chase-sapphire-preferred.json';
import schemaCard2 from '@/schemas/general/schema-amex-gold.json';
import schemaCard3 from '@/schemas/general/schema-capital-one-venture-rewards-credit-card.json';
import schemaCard4 from '@/schemas/general/schema-chase-sapphire-reserve.json';
import schemaCard5 from '@/schemas/general/schema-citi-premier.json';
import schemaCard6 from '@/schemas/general/schema-delta-skymiles-platinum-american-express-card.json';
import schemaCard7 from '@/schemas/general/schema-united-explorer-card.json';
import schemaCard8 from '@/schemas/general/schema-hilton-honors-american-express-surpass-card.json';
import schemaCard9 from '@/schemas/general/schema-marriott-bonvoy-boundless.json';
import schemaCard10 from '@/schemas/general/schema-capital-one-venture-x-rewards-credit-card.json';



// --- COMPLETE Card Data (Extracted from HTML - VERIFY ALL DETAILS!) ---
const cardsData = [
    {
        id: 'chase-sapphire-preferred',
        name: 'Chase Sapphire Preferred®',
        tciRating: '8.4', // From HTML rating span
        applyUrl: 'https://creditcards.chase.com/rewards-credit-cards/sapphire/preferred', // *** REPLACE ***
        learnMoreUrl: '/cards/chase-sapphire-preferred', // *** REPLACE ***
        ratesFeesUrl: 'https://sites.chase.com/services/creatives/pricingandterms.html/content/dam/pricingandterms/LGC56014.html',
        imageUrl: '/sapphire_preferred_card.png', // *** VERIFY PATH ***
        imageAlt: 'Chase Sapphire Preferred® Card',
        imageWidth: 400, // *** REPLACE ***
        imageHeight: 250, // *** REPLACE ***
        bonus: '<strong>Welcome Bonus:</strong> 60,000 points after spending $4,000 in the first 3 months.<br /><em>(Valued at $750 through Chase Ultimate Rewards).</em>',
        earningRatesList: [
            '5x points on travel booked via Chase Ultimate Rewards',
            '3x points on dining, including takeout and delivery',
            '2x points on all other travel purchases',
            '1x on all other purchases' // Added base rate
        ],
        keyFeatures: [ // Combined Redemption & Perks from HTML
             'Points worth 25% more when redeemed for travel via Chase Ultimate Rewards',
             'Transfer points to airline/hotel partners like United, Southwest, Hyatt',
             'Primary rental car insurance',
             'Trip cancellation/interruption coverage',
             'No foreign transaction fees'
         ],
        additionalPerks: [], // Merged into keyFeatures
        bestFor: 'Beginners and budget travelers wanting flexible rewards and strong travel/dining bonuses.',
        // Table Data
        annualFeeTable: '$95',
        welcomeBonusTableValue: '$750', // Value derived from bonus text
        rewardsRatesTable: '5x travel (Chase UR), 3x dining, 2x travel',
        bestForTable: 'Beginners & budget travelers',
        schemaCard1
    },
    {
        id: 'amex-gold',
        name: 'American Express® Gold Card',
        tciRating: '8.8', // From HTML rating span
        applyUrl: 'https://www.americanexpress.com/us/credit-cards/card/gold-card/', // *** REPLACE ***
        learnMoreUrl: '/cards/american-express-gold', // *** REPLACE ***
        ratesFeesUrl: 'https://www.americanexpress.com/us/credit-cards/card-application/apply/prospect/terms/gold-card/25330-10-0#FeeTable',
        imageUrl: '/NUS000000174_480x304_straight_withname.avif', // *** VERIFY PATH ***
        imageAlt: 'American Express® Gold Card',
        imageWidth: 480, // *** REPLACE ***
        imageHeight: 304, // *** REPLACE ***
        bonus: '<strong>Welcome Bonus:</strong> 60,000 Membership Rewards points after spending $4,000 in 6 months.<br /><em>(Valued at ~$900 via travel partners).</em>',
        earningRatesList: [
            '4x points on dining at restaurants',
            '4x points at U.S. supermarkets (up to $25,000/year)',
            '3x points on flights booked via Amex Travel',
            '1x on all else'
        ],
        keyFeatures: [ // Combined Redemption & Perks
             'Transfer points to 20+ travel partners (e.g., Delta, Hilton, Marriott)',
             'Redeem points for flights, hotels, or statement credits',
             'Up to $120/year in dining credits ($10/month at select partners)',
             'No foreign transaction fees',
             'Exclusive Amex Experiences'
        ],
        additionalPerks: [],
        bestFor: 'Foodies and frequent travelers who spend heavily on dining and groceries.',
        // Table Data
        annualFeeTable: '$250',
        welcomeBonusTableValue: '$900',
        rewardsRatesTable: '4x dining/groceries, 3x flights',
        bestForTable: 'Foodies & frequent travelers',
        schemaCard2
    },
    {
        id: 'capital-one-venture',
        name: 'Capital One Venture Rewards Credit Card',
        tciRating: '8.2', // From HTML rating span
        applyUrl: 'https://www.capitalone.com/credit-cards/venture/', // *** REPLACE ***
        learnMoreUrl: '/cards/capital-one-venture', // *** REPLACE ***
        ratesFeesUrl: 'https://www.capitalone.com/credit-cards/venture/',
        imageUrl: '/venture_cardart_prim_323x203-1.avif', // *** VERIFY PATH ***
        imageAlt: 'Capital One Venture Rewards Credit Card',
        imageWidth: 323, // *** REPLACE ***
        imageHeight: 203, // *** REPLACE ***
        bonus: '<strong>Welcome Bonus:</strong> 75,000 miles after spending $4,000 in the first 3 months.<br /><em>(Valued at ~$500 for travel statement credits).</em>',
        earningRatesList: [
            '2x miles on every purchase',
            '5x miles on hotels and rental cars via Capital One Travel'
        ],
        keyFeatures: [ // Combined Redemption & Perks
            'Redeem miles as statement credits for travel purchases',
            'Transfer to airline/hotel partners for potential higher value',
            'Global Entry or TSA PreCheck fee credit',
            'No foreign transaction fees',
            'Visa Signature travel and purchase protections'
        ],
        additionalPerks: [],
        bestFor: 'Flat-rate rewards seekers desiring simplicity and flexibility.',
        // Table Data
        annualFeeTable: '$95',
        welcomeBonusTableValue: '$500',
        rewardsRatesTable: '2x miles on every purchase',
        bestForTable: 'Flat-rate rewards seekers',
        schemaCard3
    },
    {
        id: 'chase-sapphire-reserve',
        name: 'Chase Sapphire Reserve®',
        tciRating: '9.2', // From HTML rating span
        applyUrl: 'https://creditcards.chase.com/rewards-credit-cards/sapphire/reserve', // *** REPLACE ***
        learnMoreUrl: '/cards/chase-sapphire-reserve', // *** REPLACE ***
        ratesFeesUrl: 'https://sites.chase.com/services/creatives/pricingandterms.html/content/dam/pricingandterms/LGC56007.html',
        imageUrl: '/sapphire_reserve_card.png', // *** VERIFY PATH ***
        imageAlt: 'Chase Sapphire Reserve®',
        imageWidth: 250, // *** REPLACE ***
        imageHeight: 158, // *** REPLACE ***
        bonus: '<strong>Welcome Bonus:</strong> 60,000 points after $4,000 in 3 months.<br /><em>(Valued at $900 via Chase Ultimate Rewards).</em>',
        earningRatesList: [
            '10x on hotels & car rentals via Chase UR',
            '3x travel & dining',
            '1x on all other purchases'
        ],
        keyFeatures: [ // Combined Redemption & Perks
            'Points worth 50% more for travel in Chase Ultimate Rewards',
            'Transfer to partners like United, Southwest, Hyatt',
            '$300 annual travel credit',
            'Priority Pass lounge access',
            'Special benefits with DoorDash, Lyft, and more'
         ],
        additionalPerks: [],
        bestFor: 'Premium travelers seeking top-tier perks and flexible redemptions.',
         // Table Data
        annualFeeTable: '$550',
        welcomeBonusTableValue: '$900',
        rewardsRatesTable: '10x hotels (Chase UR), 3x travel & dining',
        bestForTable: 'Premium travelers',
        schemaCard4
    },
    {
        id: 'citi-premier',
        name: 'Citi Premier®',
        tciRating: '8.1', // From HTML rating span
        applyUrl: 'https://www.citi.com/credit-cards/citi-strata-premier-credit-card', // *** REPLACE ***
        learnMoreUrl: '/cards/citi-strata-premier', // *** REPLACE ***
        ratesFeesUrl: 'https://online.citi.com/US/ag/cards/displayterms?app=UNSOL&HKOP=ad561bce96f91f539367c3ebc5b3a53805d95c5a480b0151b40b76df0ec13bb2',
        imageUrl: '/Premier-Card-400x252-pixl.webp', // *** VERIFY PATH ***
        imageAlt: 'Citi Premier® Card',
        imageWidth: 400, // *** REPLACE ***
        imageHeight: 252, // *** REPLACE ***
        bonus: '<strong>Welcome Bonus:</strong> 60,000 ThankYou® Points after $4,000 in 3 months.<br /><em>(Valued at ~$600 for travel or gift cards).</em>',
        earningRatesList: [
            '3x on travel, hotels, dining',
            '1x on all other purchases'
        ],
        keyFeatures: [ // Combined Redemption & Perks
             'Transfer to 15+ airline partners',
             'Redeem points for travel, gift cards, or statement credits',
             '$100 annual hotel credit on $500+ bookings via Citi Travel',
             'No foreign transaction fees'
        ],
        additionalPerks: [],
        bestFor: 'Budget-conscious travelers seeking strong category bonuses and flexible redemption.',
         // Table Data
        annualFeeTable: '$95',
        welcomeBonusTableValue: '$600',
        rewardsRatesTable: '3x travel, hotels, dining',
        bestForTable: 'Budget-conscious travelers',
        schemaCard5
    },
    {
        id: 'delta-skymiles-platinum',
        name: 'Delta SkyMiles® Platinum American Express Card',
        tciRating: '8.3', // From HTML rating span
        applyUrl: 'https://www.americanexpress.com/us/credit-cards/card/delta-skymiles-platinum-american-express-card/', // *** REPLACE ***
        learnMoreUrl: '/cards/delta-skymiles-platinum', // *** REPLACE ***
        ratesFeesUrl: 'https://www.americanexpress.com/us/credit-cards/card-application/apply/prospect/terms/delta-skymiles-platinum-american-express-card/25330-10-0#FeeTable',
        imageUrl: '/NUS000000269_480x304_straight_withname.avif', // *** VERIFY PATH ***
        imageAlt: 'Delta SkyMiles® Platinum American Express Card',
        imageWidth: 480, // *** REPLACE ***
        imageHeight: 304, // *** REPLACE ***
        bonus: '<strong>Welcome Bonus:</strong> 50,000 SkyMiles after $3,000 in 3 months.<br /><em>(Worth ~$700 in Delta award flights).</em>',
        earningRatesList: [
            '3x miles on Delta purchases and hotels',
            '2x miles on dining and groceries',
            '1x miles on all other purchases'
        ],
        keyFeatures: [ // Combined Redemption & Perks
             'Redeem miles for Delta flights, seat upgrades, SkyClub memberships',
             'Dynamic award pricing on Delta',
             'Free first checked bag and priority boarding',
             '$100 Global Entry/TSA PreCheck credit',
             'Companion certificate upon renewal (domestic main cabin)'
        ],
        additionalPerks: [],
        bestFor: 'Delta loyalists looking to earn extra miles and enjoy valuable travel perks.',
         // Table Data
        annualFeeTable: '$250',
        welcomeBonusTableValue: '$700',
        rewardsRatesTable: '3x Delta/hotels, 2x dining/groceries',
        bestForTable: 'Delta loyalists',
        schemaCard6
    },
    {
        id: 'united-explorer',
        name: 'United℠ Explorer Card',
        tciRating: '8.0', // From HTML rating span
        applyUrl: 'https://creditcards.chase.com/travel-credit-cards/united/united-explorer', // *** REPLACE ***
        learnMoreUrl: '/cards/united-explorer', // *** REPLACE ***
        ratesFeesUrl: 'https://sites.chase.com/services/creatives/pricingandterms.html/content/dam/pricingandterms/LGC56768.html',
        imageUrl: '/united_explorer_card.png', // *** VERIFY PATH ***
        imageAlt: 'United℠ Explorer Card',
        imageWidth: 250, // *** REPLACE ***
        imageHeight: 158, // *** REPLACE ***
        bonus: '<strong>Welcome Bonus:</strong> 50,000 miles after $3,000 in 3 months.<br /><em>(Worth ~$750 for United flights).</em>',
        earningRatesList: [
            '2x miles on United purchases, dining, and hotels',
            '1x miles on all other purchases'
        ],
        keyFeatures: [ // Combined Redemption & Perks
             'Redeem miles for United or Star Alliance flights',
             'No blackout dates on award travel',
             'Free first checked bag for you and a companion',
             'Two United Club passes annually',
             'Priority boarding'
        ],
        additionalPerks: [],
        bestFor: 'United Airlines loyalists wanting extra baggage, lounge perks, and miles acceleration.',
        // Table Data
        annualFeeTable: '$95',
        welcomeBonusTableValue: '$750',
        rewardsRatesTable: '2x United, dining, hotels',
        bestForTable: 'United Airlines loyalists',
        schemaCard7
    },
    {
        id: 'hilton-honors-surpass',
        name: 'Hilton Honors American Express Surpass® Card',
        tciRating: '7.8', // From HTML rating span
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
        keyFeatures: [ // Combined Redemption & Perks
            'Redeem points for Hilton stays, experiences',
            'Use points+cash for flexible bookings',
            'Complimentary Hilton Gold status',
            'Weekend night reward after $15,000 annual spend',
            'No foreign transaction fees'
        ],
        additionalPerks: [],
        bestFor: 'Hilton loyalists wanting to accelerate points and enjoy elite-like perks.',
        // Table Data
        annualFeeTable: '$95',
        welcomeBonusTableValue: '$780',
        rewardsRatesTable: '12x Hilton, 6x dining/gas/groceries',
        bestForTable: 'Hilton hotel enthusiasts',
        schemaCard8
    },
    {
        id: 'marriott-bonvoy-boundless',
        name: 'Marriott Bonvoy Boundless®',
        tciRating: '7.8', // From HTML rating span
        applyUrl: 'https://creditcards.chase.com/travel-credit-cards/marriott-bonvoy/boundless', // *** REPLACE ***
        learnMoreUrl: '/cards/marriott-bonvoy-boundless', // *** REPLACE ***
        ratesFeesUrl: 'https://sites.chase.com/services/creatives/pricingandterms.html/content/dam/pricingandterms/LGC60502.html',
        imageUrl: '/Boundless_cardArt.png', // *** VERIFY PATH ***
        imageAlt: 'Marriott Bonvoy Boundless® Credit Card',
        imageWidth: 250, // *** REPLACE ***
        imageHeight: 158, // *** REPLACE ***
        bonus: '<strong>Welcome Bonus:</strong> 100,000 Marriott Bonvoy points after $3,000 in 3 months.<br /><em>(Valued at ~$850 for Marriott stays).</em>',
        earningRatesList: [
            '6x points on Marriott purchases',
            '2x on all other purchases'
        ],
        keyFeatures: [ // Combined Redemption & Perks
            'Redeem points for Marriott hotels, experiences',
            'Transfer points to 40+ airline partners',
            'Free annual night award (up to 35,000 points)',
            'Automatic Silver Elite status',
            'No foreign transaction fees'
        ],
        additionalPerks: [],
        bestFor: 'Marriott enthusiasts wanting free nights and status benefits.',
        // Table Data
        annualFeeTable: '$95',
        welcomeBonusTableValue: '$850',
        rewardsRatesTable: '6x Marriott, 2x all else',
        bestForTable: 'Marriott enthusiasts',
        schemaCard9
    },
    {
        id: 'capital-one-venture-x',
        name: 'Capital One Venture X Rewards Credit Card',
        tciRating: '9.0', // From HTML rating span
        applyUrl: 'https://www.capitalone.com/credit-cards/venture-x/', // *** REPLACE ***
        learnMoreUrl: '/cards/capital-one-venture-x', // *** REPLACE ***
        ratesFeesUrl: 'https://www.capitalone.com/credit-cards/venture-x/',
        imageUrl: '/venturex-cg-static-card-1000x630-2.avif', // *** VERIFY PATH ***
        imageAlt: 'Capital One Venture X Rewards Credit Card',
        imageWidth: 1000, // *** REPLACE ***
        imageHeight: 630, // *** REPLACE ***
        bonus: '<strong>Welcome Bonus:</strong> 75,000 miles after spending $4,000 in 3 months.<br /><em>(Valued at ~$750 for travel).</em>',
        earningRatesList: [
            '10x miles on hotels & rental cars via Capital One Travel',
            '5x miles on flights via Capital One Travel',
            '2x miles on all other purchases'
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
        welcomeBonusTableValue: '$750',
        rewardsRatesTable: '10x hotels/rentals, 5x flights, 2x all else',
        bestForTable: 'Frequent travelers',
        schemaCard10
    }
];


// --- Schema Data (Inline for General Travel Cards Page) ---
const siteUrl = "https://www.travelcardinsider.com"; // *** REPLACE IF NEEDED ***
const pageUrl = `${siteUrl}/general/best-travel-cards-2025`; // *** USE CORRECT PAGE PATH ***
const logoUrl = `${siteUrl}/logo-optimized.png`; // *** Use your actual logo URL ***
const heroImageUrl = `${siteUrl}/jeshoots-com-mSESwdMZr-A-unsplash.jpg`; // *** Use correct hero image ***
const dateModifiedISO = new Date().toISOString();

const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
        schemaOrg,    // Assuming schemaOrg is defined in '@/schemas/organization.json'
        schemaWebsite, // Assuming schemaWebsite is defined in '@/schemas/website.json'
        { // Define the CollectionPage specifically
            "@type": "CollectionPage",
            "@id": pageUrl,
            "url": pageUrl,
            "name": "Best 10 Travel Credit Cards of 2025 | TravelCardInsider",
            "headline": "Best 10 Travel Credit Cards of 2025",
            "description": "Discover the top 10 travel credit cards of 2025. Whether you’re a frequent flyer, luxury traveler, or budget explorer, compare the best cards for maximizing rewards, perks, and benefits.",
            "inLanguage": "en-US",
            "isPartOf": { "@id": `${siteUrl}/#website` },
            "mainEntityOfPage": { "@type": "WebPage", "@id": pageUrl },
            "datePublished": "2025-01-15", // *** Set your initial publication date ***
            "dateModified": dateModifiedISO,
            "author": { "@id": `${siteUrl}/#organization` },
            "publisher": { "@id": `${siteUrl}/#organization` },
            "image": `${siteUrl}/jeshoots-com-mSESwdMZr-A-unsplash.jpg`, // *** Use correct hero image path ***
            "mainEntity": {
                "@type": "ItemList",
                "name": "Top 10 Travel Credit Cards",
                "numberOfItems": cardsData.length,
                "itemListOrder": "https://schema.org/ItemListOrderUnordered",
                "itemListElement": cardsData.map((card, index) => ({
                        "@type": "ListItem",
                        "position": index + 1,
                        // Link ListItem to the @id within the imported schema if possible
                        // Ensure card.schema and card.schema['@id'] exist and are correct in your data/JSON files
                        "item": { "@id": card.schema ? (card.schema['@id'] || `#${card.id}`) : `#${card.id}` }
                    }))
            }
        },
        // Include all imported card schemas in the graph
        schemaCard1, schemaCard2, schemaCard3, schemaCard4, schemaCard5,
        schemaCard6, schemaCard7, schemaCard8, schemaCard9, schemaCard10
    ]
};

// --- Rating Tooltip Content ---
const ratingCriteria = [ 'Rewards Earning (Travel & Bonus)', 'Welcome Bonus Value', 'Travel Perks (Lounge, Credits)', 'Annual Fee & Justification', 'Redemption Flexibility / Partners' ]; // Adapted slightly

// *** Component Function ***
export default function BestTravelCardsPage() { // Changed function name
    // --- Tooltip State and Logic (Copied from Zero APR page) ---
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
                 <title>Best 10 Travel Credit Cards of 2025 | TravelCardInsider</title>
                 <meta name="description" content="Discover the top 10 travel credit cards of 2025. Whether you’re a frequent flyer, luxury traveler, or budget explorer, compare the best cards for maximizing rewards, perks, and benefits."/>
                 <link rel="canonical" href={pageUrl}/>
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
                     <Image alt="Travel Credit Cards - Unlock Rewards for Your Journey" src="/jeshoots-com-mSESwdMZr-A-unsplash.webp" layout="fill" objectFit="cover" objectPosition="top center" quality={80} priority className={styles.heroBackgroundImage} />
                    <div className={styles.heroOverlay}></div>
                    <div className={styles.heroContent}>
                        <h1 className={styles.heroTitle}>Discover the Best 10 Travel Credit Cards of 2025</h1>
                        <p className={styles.heroDescription}>Compare top-rated travel credit cards, maximize rewards, and unlock exclusive perks for your next adventure. Whether you’re a frequent flyer, luxury traveler, or budget explorer, find the perfect card to suit your needs.</p>
                        <div className={styles.heroCta}><a href="/compare" className={`${styles.ctaButton} ${styles.ctaPrimary}`}>Compare Now</a></div>
                        {/* Add disclaimer if present in source HTML */}
                    </div>
                </section>

                {/* --- Comparison Table Section --- */}
                <section id="comparison-table" className={styles.comparisonSection}>
                     <h2 className={styles.sectionTitle}>Top 10 Travel Credit Cards Comparison</h2> {/* Adjusted Title */}
                    <div className={styles.tableResponsive}>
                        <table className={styles.comparisonTable}>
                            <thead>
                                <tr>
                                    {/* Headers from HTML */}
                                    <th>Card Name</th>
                                    <th>Annual Fee</th>
                                    <th>Welcome Bonus Value</th>
                                    <th>Rewards Rates</th>
                                    <th>Best For</th>
                                    <th>Apply / Details</th>{/* Added this column */}
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
                                         {/* Map correct data fields */}
                                         <td data-label="Annual Fee">{card.annualFeeTable}</td>
                                         <td data-label="Welcome Bonus Value">{card.welcomeBonusTableValue}</td>
                                         <td data-label="Rewards Rates">{card.rewardsRatesTable}</td>
                                         <td data-label="Best For">{card.bestForTable}</td>
                                         <td data-label="Apply / Details">
                                            <div className={styles.tableActionGroup}>
                                                 <a href={card.applyUrl} className={`${styles.ctaButton} ${styles.ctaApply}`} target="_blank" rel="noopener noreferrer sponsored" title="From card issuer's secure site">Apply Now<span className={styles.ctaSubtext}></span></a>
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
                                      {card.keyFeatures?.length > 0 && ( <div className={styles.cardFeatureBlock}><h4 tabIndex={-1}>Key Features & Redemption</h4><ul className={styles.featureList}>{card.keyFeatures.map((feature, i) => <li key={`feature-${i}`}>{feature}</li>)}</ul></div>)}
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