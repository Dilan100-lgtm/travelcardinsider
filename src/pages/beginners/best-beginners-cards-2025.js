// File: pages/beginners/best-beginners-cards-2025.js

// !!! WARNING: THIS FILE CONTAINS PLACEHOLDER DATA/URLs/DIMENSIONS !!!
// !!! YOU MUST REPLACE ALL PLACEHOLDERS MARKED WITH '!!!' BEFORE DEPLOYMENT !!!
// !!! VERIFY ALL CARD DETAILS AGAINST OFFICIAL ISSUER INFO !!!

import React, { useState, useEffect, useCallback, useRef } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/ZeroAprIndex.module.css'; // Reusing the same CSS module
import Header from '../../components/Header';
import Footer from '../../components/Footer';

// --- Schema Imports (!!! Adjust paths/filenames as needed !!!) ---
import schemaOrg from '@/schemas/organization.json';
import schemaWebsite from '@/schemas/website.json';
import schemaCard1 from '@/schemas/beginners/1-chase-sapphire-preferred.json';
import schemaCard2 from '@/schemas/beginners/2-capital-one-venture.json';
import schemaCard3 from '@/schemas/beginners/3-amex-gold.json';
import schemaCard4 from '@/schemas/beginners/4-discover-it-miles.json';
import schemaCard5 from '@/schemas/beginners/5-bofa-travel-rewards.json';
import schemaCard6 from '@/schemas/beginners/6-capital-one-quicksilverone.json';
import schemaCard7 from '@/schemas/beginners/7-wells-fargo-autograph.json';
import schemaCard8 from '@/schemas/beginners/8-delta-skymiles-blue.json';
import schemaCard9 from '@/schemas/beginners/9-united-gateway.json';
import schemaCard10 from '@/schemas/beginners/10-citi-custom-cash.json';


// --- COMPLETE Card Data for Beginners Page (VERIFY ALL DETAILS & REPLACE PLACEHOLDERS!) ---
const cardsData = [
    {
        id: 'chase-sapphire-preferred',
        name: 'Chase Sapphire Preferred®',
        tciRating: '8.4', // From HTML
        applyUrl: 'https://creditcards.chase.com/rewards-credit-cards/sapphire/preferred', // *** REPLACE ***
        learnMoreUrl: '/cards/chase-sapphire-preferred', // *** REPLACE ***
        ratesFeesUrl: 'https://sites.chase.com/services/creatives/pricingandterms.html/content/dam/pricingandterms/LGC56014.html',
        imageUrl: '/sapphire_preferred_card.png', // *** VERIFY PATH ***
        imageAlt: 'Chase Sapphire Preferred® Card',
        imageWidth: 250, // *** REPLACE ***
        imageHeight: 158, // *** REPLACE ***
        bonus: '<strong>Welcome Bonus:</strong> 60,000 points after spending $4,000 in the first 3 months. <br><em>(Valued at $750 when redeemed through Chase Ultimate Rewards).</em>', // From detailed
        earningRatesList: [ // From detailed
            '5x points on travel purchased through Chase Ultimate Rewards.',
            '3x points on dining, including takeout and eligible delivery services.',
            '2x points on all other travel purchases.',
            '1x points on all other purchases.',
        ],
        redemptionOptionsList: [ // Added from detailed
             'Points are worth 25% more when redeemed for travel through Chase Ultimate Rewards.',
             'Transfer points to over 10 airline and hotel loyalty programs for potentially higher value.',
        ],
        additionalPerks: [ // From detailed
            'Primary car rental insurance.',
            'Trip cancellation/interruption insurance.',
            'No foreign transaction fees.',
            'Complimentary access to DashPass for DoorDash for 12 months.',
        ],
        bestFor: 'Travelers looking for flexible rewards, valuable travel perks, and affordable annual fees.', // From detailed
        // Table Data
        annualFeeTable: '$95',
        welcomeBonusValueTable: '$750',
        rewardsRatesTable: '5x travel (via Chase Ultimate Rewards), 3x dining, 2x travel',
        bestForTable: 'Flexible rewards and beginners.',
        schema: schemaCard1
    },
    {
        id: 'capital-one-venture',
        name: 'Capital One Venture Rewards Credit Card',
        tciRating: '8.2', // From HTML
        applyUrl: 'https://www.capitalone.com/credit-cards/venture/', // *** REPLACE ***
        learnMoreUrl: '/cards/capital-one-venture', // *** REPLACE ***
        ratesFeesUrl: 'https://www.capitalone.com/credit-cards/venture/',
        imageUrl: '/venture_cardart_prim_323x203-1.avif', // *** VERIFY PATH ***
        imageAlt: 'Capital One Venture Rewards Credit Card',
        imageWidth: 323, // *** REPLACE ***
        imageHeight: 203, // *** REPLACE ***
        bonus: '<strong>Welcome Bonus:</strong> 75,000 miles after spending $4,000 in the first 3 months.<br><em>(Valued at ~$750 for travel).</em>', // From detailed
        earningRatesList: [ // From detailed
            '2x miles on every purchase, every day.',
            '5x miles on hotels and rental cars booked through Capital One Travel.',
        ],
         redemptionOptionsList: [ // From detailed
            'Redeem miles for travel purchases, including flights, hotels, rental cars, and more.',
            'Transfer miles to 15+ travel loyalty programs for potentially higher value.',
        ],
        additionalPerks: [ // From detailed
            'Global Entry or TSA PreCheck fee credit (up to $100).',
            'No foreign transaction fees.',
            'Travel accident insurance and 24-hour travel assistance services.',
        ],
        bestFor: 'Frequent travelers who want a simple, flat-rate rewards structure with flexible redemption options.', // From detailed
        // Table Data
        annualFeeTable: '$95',
        welcomeBonusValueTable: '$750',
        rewardsRatesTable: '2x miles on every purchase',
        bestForTable: 'Flat-rate rewards seekers.',
        schema: schemaCard2
    },
    {
        id: 'amex-gold',
        name: 'American Express® Gold Card',
        tciRating: '8.8', // From HTML
        applyUrl: 'https://www.americanexpress.com/us/credit-cards/card/gold-card/', // *** REPLACE ***
        learnMoreUrl: '/cards/american-express-gold', // *** REPLACE ***
        ratesFeesUrl: 'https://www.americanexpress.com/us/credit-cards/card-application/apply/prospect/terms/gold-card/91190-10-0/?pznOfferCode=3RBT-3TCK3H-2852-1BK#FeeTable',
        imageUrl: '/NUS000000174_480x304_straight_withname.avif', // *** VERIFY PATH ***
        imageAlt: 'American Express® Gold Card',
        imageWidth: 480, // *** REPLACE ***
        imageHeight: 304, // *** REPLACE ***
        bonus: '<strong>Welcome Bonus:</strong> 60,000 Membership Rewards® Points after spending $4,000 in the first 6 months.<br><em>(Valued at ~$600 when redeemed for travel or transferred to airline partners).</em>', // From detailed
        earningRatesList: [ // From detailed
            '4x points at restaurants, including takeout and delivery.',
            '4x points at U.S. supermarkets (on up to $25,000 annually, then 1x).',
            '3x points on flights booked directly with airlines or through Amex Travel.',
            '1x points on all other purchases.',
        ],
         redemptionOptionsList: [ // From detailed
             'Redeem points for flights, hotels, and other travel expenses through Amex Travel.',
             'Transfer points to over 20 airline and hotel partners for potentially higher value.',
             'Use points for statement credits or gift cards.',
         ],
        additionalPerks: [ // From detailed
            'Up to $120 in dining credits annually ($10/month at participating restaurants).',
            'Up to $120 in Uber Cash annually ($10/month for rides or Uber Eats).',
            'Access to exclusive events and entertainment offers through Amex Experiences.',
            'No foreign transaction fees.',
        ],
        bestFor: 'Foodies and travelers who spend significantly on dining and groceries and want premium rewards.', // From detailed
        // Table Data
        annualFeeTable: '$250',
        welcomeBonusValueTable: '$600',
        rewardsRatesTable: '4x dining, 4x groceries, 3x flights',
        bestForTable: 'Foodies and frequent travelers.',
        schema: schemaCard3
    },
    {
        id: 'discover-it-miles',
        name: 'Discover it® Miles',
        tciRating: '7.0', // From HTML
        applyUrl: 'https://www.discover.com/credit-cards/travel/', // *** REPLACE ***
        learnMoreUrl: '/cards/discover-it-miles', // *** REPLACE ***
        ratesFeesUrl: 'https://www.discovercard.com/application/website/ratesrewards?srcCde=GJX4...', // Shortened for brevity
        imageUrl: '/cardart-travel-beachcard-620-382.webp', // *** VERIFY PATH ***
        imageAlt: 'Discover it® Miles Card',
        imageWidth: 620, // *** REPLACE ***
        imageHeight: 382, // *** REPLACE ***
        bonus: '<strong>Welcome Bonus:</strong> Unlimited Cashback Match at the end of your first year. <br><em>(Example: Earn $300 in rewards, Discover will match it to $600).</em>', // From detailed
        earningRatesList: [ // From detailed
            '1.5x Miles on every dollar spent on all purchases.'
        ],
         redemptionOptionsList: [ // From detailed
            'Redeem miles for travel purchases like flights, hotels, and car rentals.',
            'Cash redemption as a statement credit or deposit to your bank account.',
            'No minimum redemption thresholds.',
        ],
        additionalPerks: [ // From detailed
            'No annual fee.',
            'No foreign transaction fees.',
            'Free Social Security number alerts to help prevent identity theft.',
            'FICO® Credit Score for free, updated monthly.',
            '24/7 customer service based in the U.S.',
        ],
        bestFor: 'Travelers seeking a simple and straightforward rewards structure with no annual fee and the flexibility to redeem miles for any travel expense.', // From detailed
        // Table Data
        annualFeeTable: '$0',
        welcomeBonusValueTable: 'Match first year miles',
        rewardsRatesTable: '1.5x miles on every purchase',
        bestForTable: 'No annual fee travel beginners.',
        schema: schemaCard4 // Schema link
    },
     {
        id: 'bofa-travel-rewards',
        name: 'Bank of America® Travel Rewards Credit Card',
        tciRating: '7.4', // From HTML
        applyUrl: 'https://www.bankofamerica.com/credit-cards/products/travel-rewards-credit-card/', // *** REPLACE ***
        learnMoreUrl: '/cards/boa-travel-rewards', // *** REPLACE ***
        ratesFeesUrl: 'https://www.bankofamerica.com/credit-cards/terms-and-conditions/?campaignid=4071156&productoffercode=MG&locale=en_US',
        imageUrl: '/8blm_trvsigcm_v_250x158.png', // *** VERIFY PATH ***
        imageAlt: 'Bank of America® Travel Rewards Credit Card',
        imageWidth: 250, // *** REPLACE ***
        imageHeight: 158, // *** REPLACE ***
        bonus: '<strong>Welcome Bonus:</strong> 25,000 online bonus points after you make at least $1,000 in purchases in the first 90 days of account opening. <br><em>(Valued at $250 when redeemed for travel).</em>', // From detailed
        earningRatesList: [ // From detailed
            '1.5 points for every $1 spent on all purchases.',
            'No limit to the number of points you can earn.',
        ],
        redemptionOptionsList: [ // From detailed
            'Redeem points for statement credits to cover travel purchases, such as flights, hotels, vacation packages, and car rentals.',
            'No blackout dates when booking travel.',
            'Flexible redemption options for gift cards and cash back.',
        ],
        additionalPerks: [ // From detailed
            'No annual fee.',
            'No foreign transaction fees.',
            '0% Intro APR on purchases for the first 18 billing cycles, then a variable APR applies.',
            'Preferred Rewards clients earn 25%-75% more points on every purchase.',
            'Travel accident insurance and emergency assistance services.',
        ],
        bestFor: 'Travelers looking for a no-annual-fee card with a flat rewards structure and flexibility to redeem points for travel expenses.', // From detailed
        // Table Data
        annualFeeTable: '$0',
        welcomeBonusValueTable: '25,000 points',
        rewardsRatesTable: '1.5x points on every purchase',
        bestForTable: 'No annual fee and flexibility.',
        schema: schemaCard5 // Schema link
    },
    {   // Card 6: Capital One QuicksilverOne - ONLY Table data available in HTML
        id: 'capital-one-quicksilverone',
        name: 'Capital One QuicksilverOne Rewards Credit Card',
        tciRating: '5.4', // From HTML table rating
        applyUrl: 'https://www.capitalone.com/credit-cards/quicksilverone/', // *** REPLACE ***
        learnMoreUrl: '/cards/capital-one-quicksilverone', // *** REPLACE ***
        ratesFeesUrl: 'https://www.capitalone.com/credit-cards/quicksilverone/', // From HTML
        imageUrl: '/qs1_cardart_prim_1290x812.avif', // *** VERIFY PATH & ADD TO PUBLIC ***
        imageAlt: 'Capital One QuicksilverOne Rewards Credit Card',
        imageWidth: 323, // Placeholder - REPLACE
        imageHeight: 203, // Placeholder - REPLACE
        // Table Data Only
        annualFeeTable: '$39',
        welcomeBonusValueTable: 'None', // Explicitly none from table
        rewardsRatesTable: '1.5% cashback on all purchases',
        bestForTable: 'Low annual fee and cashback beginners.',
        // No detailed sections from HTML
        bonus: null, earningRatesList: null, redemptionOptionsList: null, additionalPerks: null, keyFeatures: null, bestFor: 'Beginners looking for simple cashback with a low annual fee, suitable for average credit.',
        schema: schemaCard6
    },
     {  // Card 7: Wells Fargo Autograph - ONLY Table data available in HTML
        id: 'wells-fargo-autograph',
        name: 'Wells Fargo Autograph℠ Card',
        tciRating: '7.1', // From HTML table rating
        applyUrl: 'https://creditcards.wellsfargo.com/autograph-visa-credit-card/?SGNTST=SHINYLP&sub_channel=SEO&vendor_code=G', // *** REPLACE ***
        learnMoreUrl: '/cards/wells-fargo-autograph', // *** REPLACE ***
        ratesFeesUrl: 'https://www.wellsfargo.com/credit-cards/autograph-visa/terms/?FPID=012988I6P10000...', // Shortened for brevity
        imageUrl: '/Autograph-No-Fee-Card-RGB_d.png', // *** VERIFY PATH & ADD TO PUBLIC ***
        imageAlt: 'Wells Fargo Autograph℠ Card',
        imageWidth: 250, // Placeholder - REPLACE
        imageHeight: 158, // Placeholder - REPLACE
        // Table Data Only
        annualFeeTable: '$0',
        welcomeBonusValueTable: '20,000 points',
        rewardsRatesTable: '3x points on travel, dining, and more',
        bestForTable: 'Everyday purchases and rewards beginners.',
         // No detailed sections from HTML
        bonus: 'Earn 20,000 bonus points when you spend $1,000 in purchases in the first 3 months.', // Add based on common offer
        earningRatesList: ['3x points on restaurants, travel, gas stations, transit, popular streaming services, and phone plans.', '1x points on other purchases.'],
        additionalPerks: ['No annual fee.', 'Cell phone protection.', 'No foreign transaction fees.'],
        keyFeatures: null, redemptionOptionsList: null,
        bestFor: 'Beginners wanting strong bonus categories (travel, dining, gas, transit, streaming) with no annual fee.',
        schema: schemaCard7
    },
    { // Card 8: Delta Blue - ONLY Table data available in HTML
        id: 'delta-skymiles-blue',
        name: 'Delta SkyMiles® Blue American Express Card',
        tciRating: '6.3', // From HTML table rating
        applyUrl: 'https://www.americanexpress.com/us/credit-cards/card/delta-skymiles-blue-american-express-card/', // *** REPLACE ***
        learnMoreUrl: '/cards/delta-skymiles-blue', // *** REPLACE ***
        ratesFeesUrl: 'https://www.americanexpress.com/us/credit-cards/card-application/apply/prospect/terms/delta-skymiles-blue-american-express-card/25330-10-0#FeeTable',
        imageUrl: '/NUS000000267_480x304_straight_withname.webp', // *** VERIFY PATH & ADD TO PUBLIC ***
        imageAlt: 'Delta SkyMiles® Blue American Express Card',
        imageWidth: 480, // Placeholder - REPLACE
        imageHeight: 304, // Placeholder - REPLACE
        // Table Data Only
        annualFeeTable: '$0',
        welcomeBonusValueTable: '10,000 miles',
        rewardsRatesTable: '2x miles on dining and Delta purchases',
        bestForTable: 'Delta beginners with no annual fee.',
        // No detailed sections from HTML
        bonus: 'Earn 10,000 bonus miles after you spend $1,000 in purchases on your new Card in your first 6 months.', // Add based on common offer
        earningRatesList: ['2X Miles on Delta purchases.', '2X Miles at restaurants worldwide, plus takeout and delivery in the U.S.', '1X Mile on all other eligible purchases.'],
        additionalPerks: ['No Annual Fee.', 'No foreign transaction fees.', 'Pay with Miles flexibility.', '20% back on in-flight purchases.'],
        keyFeatures: null, redemptionOptionsList: null,
        bestFor: 'Casual Delta flyers who want to earn SkyMiles on dining and Delta purchases without an annual fee.',
        schema: schemaCard8
    },
    { // Card 9: United Gateway - ONLY Table data available in HTML
        id: 'united-gateway-card',
        name: 'United Gateway℠ Card',
        tciRating: '6.1', // From HTML table rating
        applyUrl: 'https://creditcards.chase.com/travel-credit-cards/united/united-gateway', // *** REPLACE ***
        learnMoreUrl: '/cards/united-gateway', // *** REPLACE ***
        ratesFeesUrl: 'https://sites.chase.com/services/creatives/pricingandterms.html/content/dam/pricingandterms/LGC56764.html_rates_fees.pdf',
        imageUrl: '/united_gateway_card.png', // *** VERIFY PATH & ADD TO PUBLIC ***
        imageAlt: 'United Gateway℠ Card',
        imageWidth: 250, // Placeholder - REPLACE
        imageHeight: 158, // Placeholder - REPLACE
        // Table Data Only
        annualFeeTable: '$0',
        welcomeBonusValueTable: '20,000 miles',
        rewardsRatesTable: '2x miles on United and transit',
        bestForTable: 'United Airlines beginners.',
         // No detailed sections from HTML
        bonus: 'Earn 20,000 bonus miles after you spend $1,000 on purchases in the first 3 months your account is open.', // Add based on common offer
        earningRatesList: ['2 miles per $1 spent on United® purchases.', '2 miles per $1 spent at gas stations.', '2 miles per $1 spent on local transit and commuting.', '1 mile per $1 spent on all other purchases.'],
        additionalPerks: ['No annual fee.', 'No foreign transaction fees.', '25% back on United inflight purchases.'],
        keyFeatures: null, redemptionOptionsList: null,
        bestFor: 'Beginners looking to earn United MileagePlus miles on everyday spending like gas and transit, with no annual fee.',
        schema: schemaCard9
    },
     { // Card 10: Citi Custom Cash - ONLY Table data available in HTML
        id: 'citi-custom-cash-table', // Different ID from detailed list version if needed
        name: 'Citi Custom Cash℠ Card',
        tciRating: '7.5', // From HTML table rating
        applyUrl: 'https://www.citi.com/credit-cards/citi-custom-cash-credit-card', // *** REPLACE ***
        learnMoreUrl: '/cards/citi-custom-cash', // *** REPLACE ***
        ratesFeesUrl: 'https://online.citi.com/US/ag/cards/displayterms?app=UNSOL&HKOP=541175b33e25f6837a0d7af4ba29114f264447b80dcde5f6be6db7d02fed5901',
        imageUrl: '/download.png', // *** VERIFY PATH *** (Duplicate image name?)
        imageAlt: 'Citi Custom Cash® Card',
        imageWidth: 250, // Placeholder - REPLACE
        imageHeight: 158, // Placeholder - REPLACE
        // Table Data Only
        annualFeeTable: '$0',
        welcomeBonusValueTable: '$200 cashback',
        rewardsRatesTable: '5% cashback in top spending category',
        bestForTable: 'Customizable cashback beginners.',
         // No detailed sections from HTML, use data from Zero APR page if applicable
        bonus: 'Earn $200 cash back after spending $1,500 on purchases in the first 3 months of account opening.',
        earningRatesList: [ '5% cash back on your top eligible spend category each billing cycle (up to $500 in spending).', '1% cash back on all other purchases.' ],
        additionalPerks: [ 'No annual fee.', 'Automatically adapts to your spending.', 'Access to Citi Entertainment®.'],
        keyFeatures: null, redemptionOptionsList: null,
        bestFor: 'Beginners seeking high automatic cash back in one category each month with no annual fee.',
        schema: schemaCard10 // Use schemaCard3? Need distinct schema if content differs
    }
];


// --- Construct Schema Data from Imports ---
const siteUrl = "https://www.travelcardinsider.com"; // *** REPLACE if needed ***
const pageUrl = `${siteUrl}/beginners/best-beginners-cards-2025`; // *** Use CORRECT page path ***
const dateModifiedISO = new Date().toISOString();

// Combine imported schemas into the graph structure
const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
        schemaOrg,    // Assuming schemaOrg is defined in '@/schemas/organization.json'
        schemaWebsite, // Assuming schemaWebsite is defined in '@/schemas/website.json'
        { // Define the CollectionPage specifically
            "@type": "CollectionPage",
            "@id": pageUrl,
            "url": pageUrl,
            "name": "Discover the Best 10 Beginners Travel Credit Cards of 2025 | TravelCardInsider",
            "headline": "Discover the Best 10 Beginners Travel Credit Cards of 2025",
            "description": "Compare top-rated beginners travel credit cards and unlock perks. From no annual fee to robust rewards, these are perfect for first-time or casual travelers.",
            "inLanguage": "en-US",
            "isPartOf": { "@id": `${siteUrl}/#website` },
            "mainEntityOfPage": { "@type": "WebPage", "@id": pageUrl },
            "datePublished": "2025-01-15", // *** Set your initial publication date ***
            "dateModified": dateModifiedISO,
            "author": { "@id": `${siteUrl}/#organization` },
            "publisher": { "@id": `${siteUrl}/#organization` },
            "image": `${siteUrl}/pexels-ninauhlikova-725255.jpg`, // *** Use correct hero image path ***
            "mainEntity": {
                "@type": "ItemList",
                "name": "Top 10 Beginners Travel Credit Cards",
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
const ratingCriteria = [ 'Ease of Use', 'Reward Value', 'Annual Fee', 'Welcome Bonus', 'Beginner Perks' ]; // Adapted for beginners


// *** Component Function ***
export default function BestBeginnerCardsPage() { // Changed function name
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
                 <title>Discover the Best 10 Beginners Travel Credit Cards of 2025 | TravelCardInsider</title>
                 <meta name="description" content="Compare top-rated beginners travel credit cards, maximize rewards, and unlock exclusive perks. Whether you’re a frequent flyer or a first-time explorer, find the perfect card to suit your travel needs for 2025."/>
                 <link rel="canonical" href={pageUrl}/>
                {/* Preload critical fonts */}
        <link rel="preload" href="/fonts/Roboto_Condensed-Regular.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/Roboto_Condensed-Bold.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/PlayfairDisplay-Regular.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/Playfair-Display-Bold.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
                 {schemaData && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />}
            </Head>

            <main className={styles.pageWrapper}>

                {/* --- Hero Section --- */}
                <section className={styles.hero}>
                     <Image alt="Beginner traveler looking at map" src="/pexels-ninauhlikova-725255.webp" layout="fill" objectFit="cover" objectPosition="center center" quality={80} priority className={styles.heroBackgroundImage} />
                    <div className={styles.heroOverlay}></div>
                    <div className={styles.heroContent}>
                        <h1 className={styles.heroTitle}>Discover the Best 10 Beginners Travel Credit Cards of 2025</h1>
                        <p className={styles.heroDescription}>Compare top-rated travel credit cards, maximize rewards, and unlock exclusive perks for your next adventure. Whether you’re a frequent flyer, luxury traveler, or budget explorer, find the perfect card to suit your needs.</p>
                        <div className={styles.heroCta}><a href="/compare" className={`${styles.ctaButton} ${styles.ctaPrimary}`}>Compare Now</a></div>
                        {/* Add disclaimer */}
                         <p className={styles.heroDisclaimer}>Advertiser Disclosure: We may receive compensation via links on this page. Opinions are our own. Offers are subject to change; verify terms with the issuer.</p>
                    </div>
                </section>

                {/* --- Comparison Table Section --- */}
                <section id="comparison-table" className={styles.comparisonSection}>
                    <h2 className={styles.sectionTitle}>Top 10 Beginners Travel Credit Cards</h2>
                    <div className={styles.tableResponsive}>
                        <table className={styles.comparisonTable}>
                            <thead>
                                <tr>
                                    {/* Adapted Headers */}
                                    <th>Card Name</th>
                                    <th>Annual Fee</th>
                                    <th>Welcome Bonus Value</th>
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
                                         {/* Use specific table data keys */}
                                         <td data-label="Annual Fee">{card.annualFeeTable}</td>
                                         <td data-label="Welcome Bonus Value">{card.welcomeBonusValueTable}</td>
                                         <td data-label="Rewards Rates">{card.rewardsRatesTable}</td>
                                         <td data-label="Best For">{card.bestForTable}</td>
                                         <td data-label="Apply / Details">
                                            <div className={styles.tableActionGroup}>
                                                 <a href={card.applyUrl} className={`${styles.ctaButton} ${styles.ctaApply}`} target="_blank" rel="noopener noreferrer sponsored" title="From card issuer's secure site">Apply Now<span className={styles.ctaSubtext}></span></a>
                                                 <Link href={card.learnMoreUrl} legacyBehavior><a className={styles.detailsLink}>Details</a></Link>
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
                         {/* Map over cards *that have detailed data* */}
                         {cardsData.filter(card => card.bonus).map(card => ( // Filter for cards with bonus/detailed data
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
                                      {/* Use optional chaining and check length for safety */}
                                      {card.bonus && ( <div className={`${styles.cardFeatureBlock} ${styles.bonusBlock}`}><h4 tabIndex={-1}>Welcome Bonus</h4><p dangerouslySetInnerHTML={{ __html: card.bonus }}></p></div>)}
                                      {card.earningRatesList?.length > 0 && ( <div className={styles.cardFeatureBlock}><h4 tabIndex={-1}>Earning Rates</h4><ul className={styles.featureList}>{card.earningRatesList.map((rate, i) => <li key={`earn-${i}`}>{rate}</li>)}</ul></div>)}
                                      {card.redemptionOptionsList?.length > 0 && ( <div className={styles.cardFeatureBlock}><h4 tabIndex={-1}>Redemption Options</h4><ul className={styles.featureList}>{card.redemptionOptionsList.map((opt, i) => <li key={`redeem-${i}`}>{opt}</li>)}</ul></div>)}
                                      {card.keyFeatures?.length > 0 && ( <div className={styles.cardFeatureBlock}><h4 tabIndex={-1}>Features</h4><ul className={styles.featureList}>{card.keyFeatures.map((feature, i) => <li key={`feature-${i}`}>{feature}</li>)}</ul></div>)}
                                      {card.additionalPerks?.length > 0 && ( <div className={styles.cardFeatureBlock}><h4 tabIndex={-1}>Additional Perks</h4><ul className={styles.featureList}>{card.additionalPerks.map((perk, i) => <li key={`perk-${i}`}>{perk}</li>)}</ul></div>)}
                                      {card.bestFor && ( <div className={styles.cardFeatureBlock}><h4 tabIndex={-1}>Best For</h4><p>{card.bestFor}</p></div>)}
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