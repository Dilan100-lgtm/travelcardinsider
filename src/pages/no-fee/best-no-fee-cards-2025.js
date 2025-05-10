// File: pages/no-fee/best-no-fee-cards-2025.js

// !!! WARNING: THIS FILE CONTAINS PLACEHOLDER DATA/URLs/DIMENSIONS !!!
// !!! YOU MUST REPLACE ALL PLACEHOLDERS MARKED WITH '!!!' BEFORE DEPLOYMENT !!!
// !!! VERIFY ALL CARD DETAILS & SCHEMA FILES AGAINST OFFICIAL ISSUER INFO !!!
// !!! USER MUST CREATE THE IMPORTED .json SCHEMA FILES !!!

import React, { useState, useEffect, useCallback, useRef } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/ZeroAprIndex.module.css'; // Using same CSS module
import Header from '../../components/Header';
import Footer from '../../components/Footer';

// --- Schema Imports (!!! USER MUST CREATE THESE JSON FILES !!!) ---
// --- Place these in e.g., src/schemas/no-fee/ ---
import schemaOrg from '@/schemas/organization.json';
import schemaWebsite from '@/schemas/website.json';
import schemaCard1 from '@/schemas/no-fee/capital-one-ventureone.json';
import schemaCard2 from '@/schemas/no-fee/bofa-travel-rewards.json';
import schemaCard3 from '@/schemas/no-fee/wells-fargo-autograph.json';
import schemaCard4 from '@/schemas/no-fee/delta-skymiles-blue.json';
import schemaCard5 from '@/schemas/no-fee/hilton-honors-amex.json';
import schemaCard6 from '@/schemas/no-fee/united-gateway-card.json';
import schemaCard7 from '@/schemas/no-fee/aadvantage-mileup-card.json';
import schemaCard8 from '@/schemas/no-fee/discover-it-miles.json';
import schemaCard9 from '@/schemas/no-fee/capital-one-quicksilverone.json'; // Note: Changed from quicksilver
import schemaCard10 from '@/schemas/no-fee/citi-custom-cash.json';


// --- COMPLETE No-Annual-Fee Card Data (Extracted from HTML - VERIFY ALL DETAILS!) ---
const cardsData = [
    {
        id: 'capital-one-ventureone',
        name: 'Capital One VentureOne Rewards Credit Card',
        tciRating: '7.2', // From HTML rating span
        applyUrl: 'https://www.capitalone.com/credit-cards/ventureone/', // *** REPLACE ***
        learnMoreUrl: '/cards/capital-one-ventureone', // *** REPLACE ***
        ratesFeesUrl: 'https://www.capitalone.com/credit-cards/ventureone/',
        imageUrl: '/ventureone_cardart_prim_323x203.avif', // *** VERIFY PATH ***
        imageAlt: 'Capital One VentureOne Rewards Credit Card',
        imageWidth: 323, // *** REPLACE ***
        imageHeight: 203, // *** REPLACE ***
        bonus: '<strong>Welcome Bonus:</strong> Earn 20,000 miles after spending $500 in the first 3 months.<br><em>(Valued at $200 in travel credits).</em>',
        earningRatesList: [
            '1.25x miles on every purchase, every day.',
            '5x miles on hotels and rental cars booked through Capital One Travel.'
        ],
        keyFeatures: [
            'No blackout dates for redeeming miles.',
            'Transfer miles to 15+ travel loyalty programs.',
            'No foreign transaction fees.'
        ],
        additionalPerks: [
            'Travel accident insurance and 24-hour travel assistance.',
            'Extended warranty on eligible items.',
            'Fraud coverage and alerts for secure travel transactions.'
        ],
        bestFor: 'Travelers wanting a no-fee card with flexible miles and steady rewards on all purchases.',
        // Table Data
        annualFeeTable: '$0',
        welcomeBonusTable: '20,000 miles after $500 in 3 months',
        rewardsRatesTable: '1.25x on all, 5x on Capital One Travel',
        bestForTable: 'Flexible rewards with no annual fee',
        schema: schemaCard1
    },
    {
        id: 'bofa-travel-rewards',
        name: 'Bank of America® Travel Rewards Credit Card',
        tciRating: '7.4', // From HTML rating span
        applyUrl: 'https://www.bankofamerica.com/credit-cards/products/travel-rewards-credit-card/', // *** REPLACE ***
        learnMoreUrl: '/cards/boa-travel-rewards', // *** REPLACE ***
        ratesFeesUrl: 'https://www.bankofamerica.com/credit-cards/products/travel-rewards-credit-card/',
        imageUrl: '/8blm_trvsigcm_v_250x158.png', // *** VERIFY PATH ***
        imageAlt: 'Bank of America® Travel Rewards Credit Card',
        imageWidth: 250, // *** REPLACE ***
        imageHeight: 158, // *** REPLACE ***
        bonus: '<strong>Welcome Bonus:</strong> 25,000 online bonus points after $1,000 in purchases in the first 90 days.<br><em>(Valued at $250 in travel credits).</em>',
        earningRatesList: [
            '1.5x points on every purchase, every day.',
            'Up to 2.62x if you\'re a Preferred Rewards member.'
        ],
        keyFeatures: [
            'No points expiration or blackout dates.',
            'Redeem for flights, hotels, vacation packages, and more.',
            'No foreign transaction fees.'
        ],
        additionalPerks: [
            'Preferred Rewards for higher earning potential.',
            'Travel and emergency assistance services.',
            'Overdraft protection if linked to BoA checking.'
        ],
        bestFor: 'Travelers wanting a no-fee card with straightforward earning and flexible travel redemption.',
        // Table Data
        annualFeeTable: '$0',
        welcomeBonusTable: '25,000 points after $1,000 in 90 days',
        rewardsRatesTable: '1.5x on all purchases',
        bestForTable: 'Simple rewards redemption',
        schema: schemaCard2
    },
    {
        id: 'wells-fargo-autograph',
        name: 'Wells Fargo Autograph℠ Card',
        tciRating: '7.1', // From HTML rating span
        applyUrl: 'https://creditcards.wellsfargo.com/autograph-visa-credit-card/?SGNTST=SHINYLP&sub_channel=SEO&vendor_code=G', // *** REPLACE ***
        learnMoreUrl: '/cards/wells-fargo-autograph', // *** REPLACE ***
        ratesFeesUrl: 'https://www.wellsfargo.com/credit-cards/autograph-visa/terms/?FPID=012988I6P10000&product_code=CC&subproduct_code=AU&cx_nm=CXNAME_CSMPD&sub_channel=SEO&vendor_code=G&refdmn=www.google.com&_gl=1*y4ke8y*_gcl_au*OTk5NTUyMzU3LjE3NDAzMTU0NDM.*_ga*NjU1MzIyNC4xNzQwMzE1NDQz*_ga_7JXJJ2JF12*MTc0MTI1MzUxOS40LjAuMTc0MTI1MzUzMi40Ny4wLjA.',
        imageUrl: '/Autograph-No-Fee-Card-RGB_d.png', // *** VERIFY PATH ***
        imageAlt: 'Wells Fargo Autograph℠ Card',
        imageWidth: 250, // *** REPLACE ***
        imageHeight: 158, // *** REPLACE ***
        bonus: '<strong>Welcome Bonus:</strong> 20,000 bonus points after $1,000 in the first 3 months.<br><em>(Valued at $200 in travel or statement credits).</em>',
        earningRatesList: [
            '3x points on travel, dining, gas stations, transit, streaming, and phone plans.',
            '1x points on everything else.'
        ],
        keyFeatures: [
            'No annual fee, perfect for everyday use.',
            'Cell phone protection up to $600.',
            'Redeem for travel, cash, or gift cards.'
        ],
        additionalPerks: [
             '0% intro APR for 12 months on purchases.', // Verify current offer
             'No foreign transaction fees.',
             'Access to Wells Fargo’s Rewards portal.'
        ],
        bestFor: 'Everyday spenders seeking no-fee, multi-category rewards for travel and beyond.',
        // Table Data
        annualFeeTable: '$0',
        welcomeBonusTable: '20,000 points after $1,000 in 3 months',
        rewardsRatesTable: '3x on travel, dining, gas, etc.',
        bestForTable: 'Broad category rewards',
        schema: schemaCard3
    },
    {
        id: 'delta-skymiles-blue',
        name: 'Delta SkyMiles® Blue American Express Card',
        tciRating: '6.3', // From HTML rating span
        applyUrl: 'https://www.americanexpress.com/us/credit-cards/card/delta-skymiles-blue-american-express-card/', // *** REPLACE ***
        learnMoreUrl: '/cards/delta-skymiles-blue', // *** REPLACE ***
        ratesFeesUrl: 'https://www.americanexpress.com/us/credit-cards/card-application/apply/prospect/terms/delta-skymiles-blue-american-express-card/25330-10-0#FeeTable',
        imageUrl: '/NUS000000267_480x304_straight_withname.webp', // *** VERIFY PATH ***
        imageAlt: 'Delta SkyMiles® Blue American Express Card',
        imageWidth: 480, // *** REPLACE ***
        imageHeight: 304, // *** REPLACE ***
        bonus: '<strong>Welcome Bonus:</strong> Earn 10,000 bonus miles after $1,000 in 6 months.<br><em>(Valued at ~$100 toward award travel on Delta).</em>',
        earningRatesList: [
            '2x miles on Delta and restaurants worldwide.',
            '1x miles on other purchases.'
        ],
        keyFeatures: [
             'No annual fee, great for casual flyers.',
             'No foreign transaction fees.',
             'Straightforward SkyMiles earning.'
        ],
        additionalPerks: [
            '20% inflight savings on Delta purchases.',
            'Amex Offers for extra deals/savings.',
            'Global acceptance and contactless payments.'
        ],
        bestFor: 'Occasional Delta travelers wanting basic SkyMiles earning and no annual fee.',
        // Table Data
        annualFeeTable: '$0',
        welcomeBonusTable: '10,000 SkyMiles after $1,000 in 6 months', // Corrected spend amount from HTML
        rewardsRatesTable: '2x miles on dining & Delta',
        bestForTable: 'Occasional Delta flyers',
        schema: schemaCard4
    },
    {
        id: 'hilton-honors-amex',
        name: 'Hilton Honors American Express Card',
        tciRating: '6.8', // From HTML rating span
        applyUrl: 'https://www.americanexpress.com/us/credit-cards/card/hilton-honors/', // *** REPLACE ***
        learnMoreUrl: '/cards/hilton-honors-amex', // *** REPLACE ***
        ratesFeesUrl: 'https://www.americanexpress.com/us/credit-cards/card-application/apply/prospect/terms/hilton-honors-credit-card/25330-10-0#FeeTable',
        imageUrl: '/NUS000000327_480x304_straight_withname.avif', // *** VERIFY PATH ***
        imageAlt: 'Hilton Honors American Express Card',
        imageWidth: 480, // *** REPLACE ***
        imageHeight: 304, // *** REPLACE ***
        bonus: '<strong>Welcome Bonus:</strong> 80,000 Hilton Honors points after $1,000 in 3 months.<br><em>(Valued at ~$400 toward Hilton stays).</em>',
        earningRatesList: [
            '7x points on Hilton hotels/resorts.',
            '5x points at U.S. restaurants, supermarkets, gas stations.',
            '3x points on all other purchases.'
        ],
        keyFeatures: [
            'No annual fee, excellent for casual Hilton stays.',
            'Silver Status automatically, potential Gold upgrade with spending.',
            'Flexible points redemption for free nights/upgrades.'
        ],
        additionalPerks: [
            'Free Night Reward after $15,000 annual spend.', // Verify current offer
            'Amex Offers for discounts and rewards.',
            'No foreign transaction fees.'
        ],
        bestFor: 'Hilton fans who want to earn points on everyday spending without an annual fee.',
        // Table Data
        annualFeeTable: '$0',
        welcomeBonusTable: '80,000 points after $1,000 in 3 months',
        rewardsRatesTable: '7x Hilton, 5x dining/groceries/gas',
        bestForTable: 'Hilton guests',
        schema: schemaCard5
    },
    {
        id: 'united-gateway-card',
        name: 'United Gateway℠ Card',
        tciRating: '6.1', // From HTML rating span
        applyUrl: 'https://creditcards.chase.com/travel-credit-cards/united/united-gateway', // *** REPLACE ***
        learnMoreUrl: '/cards/united-gateway', // *** REPLACE ***
        ratesFeesUrl: 'https://sites.chase.com/services/creatives/pricingandterms.html/content/dam/pricingandterms/LGC56764.html',
        imageUrl: '/united_gateway_card.png', // *** VERIFY PATH ***
        imageAlt: 'United Gateway℠ Card',
        imageWidth: 250, // *** REPLACE ***
        imageHeight: 158, // *** REPLACE ***
        bonus: '<strong>Welcome Bonus:</strong> 20,000 miles after $1,000 in 3 months.<br><em>(Valued at ~$200 for United award travel).</em>',
        earningRatesList: [
             '2x miles on United, gas stations, and transit.',
             '1x on other purchases.'
        ],
        keyFeatures: [
             'No annual fee.',
             '25% back on inflight purchases (food, beverages, Wi-Fi).',
             'Exclusive United events/offers.'
        ],
        additionalPerks: [
            'No blackout dates on United award tickets.',
            'MileagePlus® program for family/friend mile pooling.',
            'No foreign transaction fees.'
        ],
        bestFor: 'Occasional United flyers who want miles without an annual fee.',
        // Table Data
        annualFeeTable: '$0',
        welcomeBonusTable: '20,000 miles after $1,000 in 3 months',
        rewardsRatesTable: '2x miles on United, gas, transit',
        bestForTable: 'United travelers',
        schema: schemaCard6
    },
    {
        id: 'aadvantage-mileup-card',
        name: 'American Airlines AAdvantage® MileUp® Card',
        tciRating: '6.1', // From HTML rating span
        applyUrl: 'https://creditcards.aa.com/credit-cards/citi-mileup-card-american-airlines-direct/', // *** REPLACE ***
        learnMoreUrl: '/cards/aadvantage-mileup', // *** REPLACE ***
        ratesFeesUrl: 'https://creditcards.aa.com/credit-cards/citi-mileup-card-american-airlines-direct/#pricing',
        imageUrl: '/CardArt-7.webp', // *** VERIFY PATH ***
        imageAlt: 'American Airlines AAdvantage® MileUp® Card',
        imageWidth: 250, // *** REPLACE ***
        imageHeight: 158, // *** REPLACE ***
        bonus: '<strong>Welcome Bonus:</strong> 10,000 AAdvantage® miles & $50 statement credit after $500 in 3 months.',
        earningRatesList: [
            '2x miles at grocery stores and AA purchases.',
            '1x mile elsewhere.'
        ],
        keyFeatures: [
            'No annual fee; an easy way to earn AA miles.',
            'Miles never expire as long as the account remains active.',
            'Participate in the AAdvantage® loyalty program.'
        ],
        additionalPerks: [
             'Redeem miles for flights on American and oneworld® partners.',
             'Contactless payment for quick, secure checkout.',
             'No foreign transaction fees for international travel.' // Verify this perk
        ],
        bestFor: 'Budget-minded travelers who want to earn AA miles on everyday grocery and airline spend.',
        // Table Data
        annualFeeTable: '$0',
        welcomeBonusTable: '10,000 miles + $50 after $500',
        rewardsRatesTable: '2x on groceries and AA',
        bestForTable: 'Grocery + travel spend',
        schema: schemaCard7
    },
    {
        id: 'discover-it-miles',
        name: 'Discover it® Miles',
        tciRating: '7.0', // From HTML rating span
        applyUrl: 'https://www.discover.com/credit-cards/travel/', // *** REPLACE ***
        learnMoreUrl: '/cards/discover-it-miles', // *** REPLACE ***
        ratesFeesUrl: 'https://www.discovercard.com/application/website/ratesrewards?srcCde=GJX4&adobe_mc=...', // Shortened URL
        imageUrl: '/cardart-travel-beachcard-620-382.webp', // *** VERIFY PATH ***
        imageAlt: 'Discover it® Miles Credit Card',
        imageWidth: 620, // *** REPLACE ***
        imageHeight: 382, // *** REPLACE ***
        bonus: '<strong>Welcome Bonus:</strong> Unlimited Mile Match at the end of your first year.',
        earningRatesList: [
            '1.5x miles on every purchase, with no cap.',
            'Redeem miles for travel or as statement credit.'
        ],
        keyFeatures: [
            'No annual fee, simple earning structure.',
            'No blackout dates or restrictions when redeeming miles.',
            'Freeze It® feature to lock your card instantly if lost/stolen.'
        ],
        additionalPerks: [
            'No foreign transaction fees.',
            'Free FICO® Credit Score monitoring.',
            'Discover match all miles after first year.'
        ],
        bestFor: 'Those wanting a no-fee, no-category, unlimited-mile card with a unique first-year match.',
        // Table Data
        annualFeeTable: '$0',
        welcomeBonusTable: 'Miles matched end of first year',
        rewardsRatesTable: '1.5x miles on all purchases',
        bestForTable: 'Straightforward rewards',
        schema: schemaCard8
    },
    {
        id: 'capital-one-quicksilverone', // Changed ID from quicksilver to quicksilverone
        name: 'Capital One Quicksilver Cash Rewards Credit Card', // HTML used QuicksilverOne - Check if this is correct card
        tciRating: '7.8', // From HTML rating span
        applyUrl: 'https://www.capitalone.com/credit-cards/quicksilver/', // *** REPLACE ***
        learnMoreUrl: '/cards/capital-one-quicksilver', // *** REPLACE ***
        ratesFeesUrl: 'https://www.capitalone.com/credit-cards/quicksilverone/',
        imageUrl: '/qs1_cardart_prim_1290x812.avif', // *** VERIFY PATH ***
        imageAlt: 'Capital One Quicksilver Cash Rewards Credit Card',
        imageWidth: 1290, // *** REPLACE ***
        imageHeight: 812, // *** REPLACE ***
        bonus: '<strong>Welcome Bonus:</strong> Typically a $200 cash bonus after spending $500 in first 3 months (offer may vary), but unlimited 1.5% cash back on every purchase.',
        earningRatesList: [
            '1.5% cash back on all purchases, every day.',
            'Redeem for travel, statement credits, or gift cards.'
        ],
        keyFeatures: [
            'Designed for people with average credit to build/improve scores.', // Note: Quicksilver is typically for good/excellent credit, QuicksilverOne for average. Verify which card is intended.
            'Access to CreditWise for monitoring credit.',
            'No foreign transaction fees.'
        ],
        additionalPerks: [
            'Automatic credit line reviews after 6 months.',
            'Fraud coverage if lost or stolen.',
            'Contactless payments for quick, secure checkout.'
         ],
        bestFor: 'Individuals with average credit seeking a steady cash-back card and no annual fee.', // Matches QuicksilverOne better
        // Table Data
        annualFeeTable: '$0',
        welcomeBonusTable: 'Typically a $200 cash bonus after spending $500 in first 3 months', // Matches Quicksilver, not One
        rewardsRatesTable: '1.5x cash back on all purchases',
        bestForTable: 'Simple cash-back rewards',
        schema: schemaCard9
    },
    {
        id: 'citi-custom-cash',
        name: 'Citi Custom Cash℠ Card',
        tciRating: '7.5', // From HTML rating span
        applyUrl: 'https://www.citi.com/credit-cards/citi-custom-cash-credit-card', // *** REPLACE ***
        learnMoreUrl: '/cards/citi-custom-cash', // *** REPLACE ***
        ratesFeesUrl: 'https://online.citi.com/US/ag/cards/displayterms?app=UNSOL&HKOP=541175b33e25f6837a0d7af4ba29114f264447b80dcde5f6be6db7d02fed5901',
        imageUrl: '/download.png', // *** VERIFY PATH ***
        imageAlt: 'Citi Custom Cash℠ Card',
        imageWidth: 250, // *** REPLACE ***
        imageHeight: 158, // *** REPLACE ***
        bonus: '<strong>Welcome Bonus:</strong> $200 cash back after spending $1,500 in 3 months.',
        earningRatesList: [
            '5% cash back on your top eligible category each billing cycle (up to $500 spend).',
            '1% cash back on all other purchases.'
        ],
        keyFeatures: [
             'Automatically adapts to your highest spending category.',
             'Eligible categories include restaurants, gas, groceries, travel, and more.',
             'No annual fee.'
        ],
        additionalPerks: [
            '0% Intro APR on purchases/balance transfers for 15 months.', // Verify current offer
            'Access to Citi Entertainment® events.',
            'No rotating categories to activate manually.'
        ],
        bestFor: 'Anyone wanting a no-fee card that automatically rewards their top spending category each cycle.',
        // Table Data
        annualFeeTable: '$0',
        welcomeBonusTable: '$200 cash back after $1,500 in 3 months',
        rewardsRatesTable: '5% in top category, 1% elsewhere',
        bestForTable: 'Customizable rewards',
        schema: schemaCard10
    }
];

// --- Construct Schema Data from Imports ---
const siteUrl = "https://www.travelcardinsider.com"; // *** REPLACE IF NEEDED ***
const pageUrl = `${siteUrl}/no-fee/best-no-fee-cards-2025`; // *** USE CORRECT PAGE PATH ***
const logoUrl = `${siteUrl}/logo-optimized.png`; // *** Use your actual logo URL ***
const heroImageUrl = `${siteUrl}/AdobeStock_560041735.jpeg`; // *** Use correct hero image ***
const dateModifiedISO = new Date().toISOString();

// Combine imported schemas into the graph structure
// Ensure schemaOrg, schemaWebsite, and schemaCard1-10 are correctly defined in their JSON files
const schemaImports = [
    schemaCard1, schemaCard2, schemaCard3, schemaCard4, schemaCard5,
    schemaCard6, schemaCard7, schemaCard8, schemaCard9, schemaCard10
];

const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
        schemaOrg,    // Defined in '@/schemas/organization.json'
        schemaWebsite, // Defined in '@/schemas/website.json'
        { // CollectionPage specific to this page
            "@type": "CollectionPage",
            "@id": pageUrl,
            "url": pageUrl,
            "name": "TravelCardInsider - Best No-Annual-Fee Travel Credit Cards 2025",
            "headline": "Discover the Best 10 No Annual Fee Travel Credit Cards of 2025",
            "description": "Compare the top 10 no-annual-fee travel credit cards of 2025. Earn miles, points, or cash back without extra costs. Ideal for budget explorers and occasional travelers.",
            "inLanguage": "en-US",
            "isPartOf": { "@id": `${siteUrl}/#website` },
            "mainEntityOfPage": { "@type": "WebPage", "@id": pageUrl },
            "datePublished": "2025-01-15", // *** Set initial publication date ***
            "dateModified": dateModifiedISO,
            "author": { "@id": `${siteUrl}/#organization` },
            "publisher": { "@id": `${siteUrl}/#organization` },
            "image": heroImageUrl,
            "mainEntity": {
                "@type": "ItemList",
                "name": "Top 10 No-Annual-Fee Travel Credit Cards 2025",
                "numberOfItems": cardsData.length,
                "itemListOrder": "https://schema.org/ItemListOrderUnordered",
                 "itemListElement": cardsData.map((card, index) => ({
                    "@type": "ListItem",
                    "position": index + 1,
                    // Assumes each imported schema (card.schema) has a valid '@id' property
                    "item": { "@id": card.schema?.['@id'] || `${pageUrl}#${card.id}` } // Fallback ID
                 }))
            }
        },
        // Include all individual card schemas from imports
        ...schemaImports
    ]
};


// --- Rating Tooltip Content ---
const ratingCriteria = [ 'Rewards Earning (Travel/Bonus Cats)', 'Welcome Bonus Value', 'Travel Perks (if any)', 'Value Proposition (No Fee)', 'Redemption Flexibility' ]; // Adapted for no-fee focus


// *** Component Function ***
export default function BestNoFeeCardsPage() { // Renamed component function
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
                 <title>Best 10 No-Annual-Fee Travel Credit Cards of 2025 | TravelCardInsider</title>
                 <meta name="description" content="Compare the top 10 no-annual-fee travel credit cards of 2025. Earn miles, points, or cash back without extra costs."/>
                 <link rel="canonical" href={pageUrl}/>
                 <link
                     rel="preload"
                         as="image"
                     href="/AdobeStock_560041735_result.webp"
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
                    <Image alt="Traveler with backpack looking at map" src="/AdobeStock_560041735_result.webp" layout="fill" objectFit="cover" objectPosition="center center" quality={80} priority className={styles.heroBackgroundImage} />
                    <div className={styles.heroOverlay}></div>
                    <div className={styles.heroContent}>
                        <h1 className={styles.heroTitle}>Discover the Best 10 No Annual Fee Travel Credit Cards of 2025</h1>
                        <p className={styles.heroDescription}>Compare top-rated travel credit cards, maximize rewards, and unlock exclusive perks for your next adventure. Whether you’re a frequent flyer, luxury traveler, or budget explorer, find the perfect card to suit your needs.</p>
                        <div className={styles.heroCta}><a href="/compare" className={`${styles.ctaButton} ${styles.ctaPrimary}`}>Compare Now</a></div>
                        <p className={styles.heroDisclaimer}>We may receive compensation when you click on links to certain credit card products on our site. However, our editorial opinions remain our own. Offers are subject to change. Always verify terms with the official issuer.</p>
                    </div>
                </section>

                {/* --- Comparison Table Section --- */}
                <section id="comparison-table" className={styles.comparisonSection}>
                     <h2 className={styles.sectionTitle}>Top 10 No-Annual-Fee Travel Cards</h2>
                    <div className={styles.tableResponsive}>
                        <table className={styles.comparisonTable}>
                            <thead>
                                <tr>
                                    {/* Headers from HTML */}
                                    <th>Card Name</th>
                                    <th>Annual Fee</th>
                                    <th>Welcome Bonus</th>
                                    <th>Earning Rates</th>
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
                                         <td data-label="Welcome Bonus">{card.welcomeBonusTable}</td>
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

             
        </>
    );
}