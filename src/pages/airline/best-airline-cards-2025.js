// File: pages/airline/best-airline-cards-2025.js

// !!! WARNING: THIS FILE CONTAINS PLACEHOLDER DATA/URLs/DIMENSIONS !!!
// !!! YOU MUST REPLACE ALL PLACEHOLDERS MARKED WITH '!!!' BEFORE DEPLOYMENT !!!
// !!! VERIFY ALL CARD DETAILS AGAINST OFFICIAL ISSUER INFO !!!

import React, { useState, useEffect, useCallback, useRef } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/ZeroAprIndex.module.css'; // Using the same CSS
import Header from '../../components/Header';
import Footer from '../../components/Footer';


import schema1 from '@/schemas/airlines/delta-skymiles-platinum.json';
import schema2 from '@/schemas/airlines/aa-advantage-executive.json';
import schema3 from '@/schemas/airlines/united-explorer.json';
import schema4 from '@/schemas/airlines/alaska-airlines-visa-signature.json';
import schema5 from '@/schemas/airlines/jetblue-plus-card.json';
import schema6 from '@/schemas/airlines/southwest-priority-card.json';
import schema7 from '@/schemas/airlines/aeroplan-credit-card.json';
import schema8 from '@/schemas/airlines/british-airways-visa-signature.json';
import schema9 from '@/schemas/airlines/hawaiian-airlines-world-elite.json';
import schema10 from '@/schemas/airlines/citi-aadvantage-platinum-select.json';


// --- Schema Imports (Placeholder - User needs to create/verify these JSON files) ---
const schemaOrg = { "@type": "Organization", "@id": "https://www.travelcardinsider.com/#organization", /* ... more details */ };
const schemaWebsite = { "@type": "WebSite", "@id": "https://www.travelcardinsider.com/#website", /* ... more details */ };


// --- COMPLETE Airline Card Data (VERIFY ALL DETAILS & REPLACE PLACEHOLDERS!) ---
const cardsData = [
    {
        id: 'delta-skymiles-platinum',
        name: 'Delta SkyMiles® Platinum Amex',
        tciRating: '8.3',
        applyUrl: 'https://www.americanexpress.com/us/credit-cards/card/delta-skymiles-platinum-american-express-card/', // *** REPLACE ***
        learnMoreUrl: '/cards/delta-skymiles-platinum', // *** REPLACE ***
        ratesFeesUrl: 'https://www.americanexpress.com/us/credit-cards/card-application/apply/prospect/terms/delta-skymiles-platinum-american-express-card/25330-10-0#FeeTable',
        imageUrl: '/NUS000000269_480x304_straight_withname.avif', // *** VERIFY PATH ***
        imageAlt: 'Delta SkyMiles® Platinum American Express Card',
        imageWidth: 480, // *** REPLACE ***
        imageHeight: 304, // *** REPLACE ***
        bonus: '50,000 SkyMiles after spending $3,000 in the first 3 months. <br><em>(Valued at ~$700 toward award travel on Delta flights).</em>',
        earningRatesList: [ '3X miles on Delta purchases.', '2X miles on restaurants and groceries.', '1X miles on all other purchases.' ],
        keyFeatures: [ 'Companion Certificate: Annual certificate for a domestic First Class, Delta Comfort+, or Main Cabin round-trip ticket.', 'SkyMiles Flash Sales: Exclusive award flight deals starting at 5,000 miles.', 'Lounge Access: Discounted entry to Delta Sky Club lounges.', 'Priority Upgrades: Higher upgrade priority for Medallion Status holders.' ],
        additionalPerks: [ 'Free first checked bag for you and up to 8 travel companions.', '$100 Global Entry or TSA PreCheck credit.', 'No foreign transaction fees.', 'In-flight savings: 20% back on onboard purchases.', 'Exclusive Promotion: Discounted award tickets on international Delta One suites for SkyMiles cardholders.' ],
        bestFor: 'Delta loyalists seeking premium travel perks and exclusive SkyMiles promotions.',
        welcomeBonusTable: '50,000 SkyMiles after spending $3,000 in 3 months (~$700 value).',
        annualFeeTable: '$250',
        earningRatesTable: '3x Delta purchases, 2x dining, groceries, 1x other purchases',
        luxuryFeaturesTable: 'Companion certificate, Discounted lounge access, Free checked bags',
        schema: schema1
    },
    {
        id: 'aa-advantage-executive',
        name: 'American Airlines AAdvantage® Executive World Elite Mastercard®',
        tciRating: '8.6',
        applyUrl: 'https://creditcards.aa.com/credit-cards/citi-executive-card-american-airlines-direct/', // *** REPLACE ***
        learnMoreUrl: '/cards/citi-aadvantage-executive', // *** REPLACE ***
        ratesFeesUrl: 'https://creditcards.aa.com/exec_standard/',
        imageUrl: '/executive-credit-card.png.webp', // *** VERIFY PATH ***
        imageAlt: 'American Airlines AAdvantage® Executive World Elite Mastercard®',
        imageWidth: 250, // *** REPLACE ***
        imageHeight: 158, // *** REPLACE ***
        bonus: '50,000 AAdvantage® miles after spending $5,000 in the first 3 months. <br><em>(Valued at ~$750 for award travel on American Airlines).</em>',
        earningRatesList: [ '2X miles on American Airlines purchases.', '1X mile on all other purchases.' ],
        keyFeatures: [ 'Admirals Club® Membership: Unlimited lounge access for you and your immediate family or up to two guests.', 'Priority Perks: Priority check-in, boarding, and security screening at select airports.', 'Elite Qualifying Miles (EQMs): Earn EQMs toward AAdvantage® status with eligible spending.' ],
        additionalPerks: [ 'Free first checked bag for you and up to 8 companions on the same reservation.', '$100 credit for Global Entry or TSA PreCheck application fee.', 'No foreign transaction fees.', '25% savings on in-flight food and beverage purchases on American Airlines flights.' ],
        bestFor: 'American Airlines loyalists seeking premium travel benefits and Admirals Club access.',
        welcomeBonusTable: '50,000 AAdvantage® miles after spending $5,000 in 3 months (~$750 value).',
        annualFeeTable: '$450',
        earningRatesTable: '2x AA purchases, 1x other purchases',
        luxuryFeaturesTable: 'Admirals Club access, Free checked bags, Priority boarding',
        schema: schema2
    },
    {
        id: 'united-explorer',
        name: 'United℠ Explorer Card',
        tciRating: '8.1',
        applyUrl: 'https://creditcards.chase.com/travel-credit-cards/united/united-explorer', // *** REPLACE ***
        learnMoreUrl: '/cards/united-explorer', // *** REPLACE ***
        ratesFeesUrl: 'https://sites.chase.com/services/creatives/pricingandterms.html/content/dam/pricingandterms/LGC56768.html',
        imageUrl: '/united_explorer_card (1).png', // *** VERIFY PATH ***
        imageAlt: 'United℠ Explorer Card',
        imageWidth: 250, // *** REPLACE ***
        imageHeight: 158, // *** REPLACE ***
        bonus: '50,000 miles after spending $3,000 in the first 3 months. <br><em>(Valued at ~$750 for award travel with United Airlines).</em>',
        earningRatesList: [ '2X miles on United purchases.', '2X miles on dining and hotel stays.', '1X mile on all other purchases.' ],
        keyFeatures: [ 'Lounge Access: Two United Club℠ one-time passes annually.', 'Priority Boarding: Enjoy Group 2 boarding privileges.', 'Free Checked Bags: First checked bag free for you and one companion.' ],
        additionalPerks: [ '25% back on in-flight purchases like food and beverages.', '$100 credit for Global Entry or TSA PreCheck application fee.', 'No foreign transaction fees.', 'Access to expanded award availability on United flights.' ],
        bestFor: 'United Airlines frequent flyers looking for added travel perks and savings.',
        welcomeBonusTable: '60,000 miles after spending $3,000 in 3 months (~$750 value).', // Note: Table HTML had 60k, detailed had 50k. Using table value. VERIFY!
        annualFeeTable: '$95 (waived first year)',
        earningRatesTable: '2x United, dining, hotels, 1x other purchases',
        luxuryFeaturesTable: 'Free checked bags, Lounge access passes, Exclusive saver awards',
        schema: schema3
    },
    {
        id: 'alaska-airlines-visa-signature',
        name: 'Alaska Airlines Visa® Signature Card',
        tciRating: '7.9',
        applyUrl: 'https://www.alaskaair.com/content/credit-card/visa-signature?srsltid=AfmBOopDXeo80pVEogV9HD0vekWjZ37Oa5Q3QSVRkVZWNhEaMZKv7F68', // *** REPLACE ***
        learnMoreUrl: '/cards/alaska-visa-signature', // *** REPLACE ***
        ratesFeesUrl: 'https://www.alaskaair.com/content/credit-card/visa-signature?srsltid=AfmBOopRjS5VKfje2-mby3CJcznrhaxPFXnNnp4T6_IwXmkK7jBSkIc4',
        imageUrl: '/1bbt_sigcm_v_mileageplan_250x158.png', // *** VERIFY PATH ***
        imageAlt: 'Alaska Airlines Visa® Signature Card',
        imageWidth: 250, // *** REPLACE ***
        imageHeight: 158, // *** REPLACE ***
        bonus: '50,000 bonus miles and Alaska\'s Famous Companion Fare™ after spending $2,000 in the first 3 months. <br><em>(Companion Fare starts at $122 [$99 fare + taxes and fees starting at $23]).</em>',
        earningRatesList: [ '3X miles on Alaska Airlines purchases.', '1X mile on all other purchases.' ],
        keyFeatures: [ 'Alaska\'s Famous Companion Fare™: Book one round-trip companion ticket annually starting at $122.', 'Free Checked Bag: First checked bag free for you and up to 6 companions on the same reservation.', 'Priority Boarding: Enjoy earlier boarding for a seamless travel experience.' ],
        additionalPerks: [ '20% back on in-flight purchases, including food and beverages.', 'No foreign transaction fees.', 'Share Miles: Transfer HawaiianMiles to friends and family without a fee.', 'Discounted award travel between the mainland U.S. and Hawaii.' ], // Note: Some perks seem Hawaiian-related in HTML? Verify perks.
        bestFor: 'Travelers who frequently fly with Alaska Airlines and value companion tickets and flexible redemption options.',
        welcomeBonusTable: '70,000 miles and companion fare after spending $4,000 in 3 months (~$1,200 value).', // Note: Table HTML had different bonus. Using table value. VERIFY!
        annualFeeTable: '$95',
        earningRatesTable: '3x Alaska Airlines, 1x other purchases',
        luxuryFeaturesTable: 'Companion fare, Free checked bags, Lounge discounts',
        schema: schema4
    },
    {
        id: 'jetblue-plus-card',
        name: 'JetBlue Plus Card',
        tciRating: '7.8',
        applyUrl: 'https://www.jetblue.com/trueblue/credit-cards/jetblue-card-comparison', // *** REPLACE ***
        learnMoreUrl: '/cards/jetblue-plus', // *** REPLACE ***
        ratesFeesUrl: 'https://www.barclaycardus.com/applycontent/TnCs.jsp?tc46682',
        imageUrl: '/JBE_JB3_LP_Card_Plus_WE_360x227.png', // *** VERIFY PATH ***
        imageAlt: 'JetBlue Plus Card',
        imageWidth: 360, // *** REPLACE ***
        imageHeight: 227, // *** REPLACE ***
        bonus: '60,000 bonus points after spending $1,000 in the first 90 days. <br><em>(Valued at ~$840 toward JetBlue flights).</em>',
        earningRatesList: [ '6X points on JetBlue purchases.', '2X points at restaurants and grocery stores.', '1X point on all other purchases.' ],
        keyFeatures: [ 'Free first checked bag for you and up to 3 companions on the same reservation.', '50% savings on eligible in-flight purchases like food and beverages.', 'Earn Mosaic Status: Spend $50,000 annually to unlock elite benefits like extra-legroom seats and expedited boarding.' ],
        additionalPerks: [ 'Annual $100 statement credit for JetBlue Vacations packages.', '10% points refund on JetBlue redemptions.', 'No foreign transaction fees.', 'Points never expire as long as your account is open.' ],
        bestFor: 'Frequent JetBlue travelers looking for high rewards on flights and valuable in-flight perks.',
        welcomeBonusTable: '60,000 points after spending $1,000 in 3 months (~$750 value).', // Note: Table value slightly different. Using detailed. VERIFY!
        annualFeeTable: '$99',
        earningRatesTable: '6x JetBlue, 2x dining, groceries, 1x other purchases',
        luxuryFeaturesTable: 'Mosaic perks, In-flight discounts, Points pooling',
        schema: schema5
    },
    {
        id: 'southwest-priority-card',
        name: 'Southwest Rapid Rewards® Priority Card',
        tciRating: '8.0',
        applyUrl: 'https://creditcards.chase.com/travel-credit-cards/southwest/priority', // *** REPLACE ***
        learnMoreUrl: '/cards/southwest-priority', // *** REPLACE ***
        ratesFeesUrl: 'https://creditcards.chase.com/southwest/priority-credit-card',
        imageUrl: '/banner_card_art_priority.png', // *** VERIFY PATH ***
        imageAlt: 'Southwest Rapid Rewards® Priority Card',
        imageWidth: 250, // *** REPLACE ***
        imageHeight: 158, // *** REPLACE ***
        bonus: 'Earn 75,000 points after spending $3,000 in the first 3 months. <br><em>(Valued at ~$1,125 toward Southwest flights).</em>',
        earningRatesList: [ '3X points on Southwest purchases.', '2X points on local transit, commuting, including rideshares, internet, cable, and phone services.', '1X point on all other purchases.' ],
        keyFeatures: [ '$75 annual Southwest travel credit.', 'Four upgraded boardings per year when available.', '7,500 anniversary points annually.', 'No blackout dates or seat restrictions when booking flights with points.' ],
        additionalPerks: [ '25% back on in-flight purchases for WiFi, drinks, and food.', 'No foreign transaction fees.', 'Earn towards the Southwest Companion Pass® with every purchase.', 'Points don’t expire as long as the account is open.' ],
        bestFor: 'Southwest Airlines loyalists who want to maximize travel perks and earn rewards for future flights.',
        welcomeBonusTable: '75,000 points after spending $3,000 in 3 months (~$1,125 value).',
        annualFeeTable: '$149',
        earningRatesTable: '3x Southwest, 2x transit, rideshare, 1x other purchases',
        luxuryFeaturesTable: 'Companion Pass eligibility, Priority boarding, Annual travel credit',
        schema: schema6
    },
    {
        id: 'aeroplan-credit-card',
        name: 'Aeroplan® Credit Card (Chase)',
        tciRating: '8.0',
        applyUrl: 'https://creditcards.chase.com/travel-credit-cards/aircanada/aeroplan', // *** REPLACE ***
        learnMoreUrl: '/cards/aeroplan-card', // *** REPLACE ***
        ratesFeesUrl: 'https://sites.chase.com/services/creatives/pricingandterms.html/content/dam/pricingandterms/LGC60518.html',
        imageUrl: '/aeroplan_card.png', // *** VERIFY PATH ***
        imageAlt: 'Aeroplan® Credit Card (Chase)',
        imageWidth: 250, // *** REPLACE ***
        imageHeight: 158, // *** REPLACE ***
        bonus: 'Earn up to 100,000 points: <ul><li>60,000 points after spending $4,000 in the first 3 months.</li><li>Additional 40,000 points after spending $20,000 in the first 12 months.</li></ul><br><em>(Valued at ~$1,250 toward flights and travel with Air Canada).</em>',
        earningRatesList: [ '3X points on dining, grocery stores, and Air Canada purchases.', '1X points on all other purchases.' ],
        keyFeatures: [ 'Companion Benefit: Free companion pass on Air Canada after spending $25,000 annually.', 'Preferred Pricing: Discounts on Air Canada award flight redemptions.', 'Lounge Access: Complimentary Maple Leaf Lounge access with Aeroplan Elite Status.', 'Free first checked bag for the cardholder and up to 8 travel companions on Air Canada flights.' ],
        additionalPerks: [ 'No foreign transaction fees.', 'Global Entry/TSA PreCheck fee reimbursement (up to $100).', '25K Elite Status for the first year after spending $15,000 annually.', 'Earn toward Aeroplan Elite Status with everyday purchases.' ],
        bestFor: 'Frequent Air Canada flyers and Aeroplan loyalty program members seeking rewards and travel benefits.',
        welcomeBonusTable: '70,000 points after spending $4,000 in 3 months (~$1,050 value).', // Note: Table HTML had different bonus. Using detailed. VERIFY!
        annualFeeTable: '$95',
        earningRatesTable: '3x dining, groceries, Air Canada, 1x other purchases',
        luxuryFeaturesTable: 'Buddy Pass, Free checked bags, No fuel surcharges',
        schema: schema7
    },
    {
        id: 'british-airways-visa-signature',
        name: 'British Airways Visa Signature® Card',
        tciRating: '7.7',
        applyUrl: 'https://creditcards.chase.com/avios/britishairways', // *** REPLACE ***
        learnMoreUrl: '/cards/british-airways-visa', // *** REPLACE ***
        ratesFeesUrl: 'https://creditcards.chase.com/avios/britishairways',
        imageUrl: '/6fe3de90-24a1-11e9-8960-b116b27e9fa4.webp', // *** VERIFY PATH ***
        imageAlt: 'British Airways Visa Signature® Card',
        imageWidth: 250, // *** REPLACE ***
        imageHeight: 158, // *** REPLACE ***
        bonus: 'Earn up to 100,000 Avios: <ul><li>75,000 Avios after spending $5,000 in the first 3 months.</li><li>Additional 25,000 Avios after spending $20,000 in the first 12 months.</li></ul><br><em>(Valued at ~$1,300 for flights with British Airways and partner airlines).</em>',
        earningRatesList: [ '3X Avios on purchases with British Airways, Aer Lingus, Iberia, and LEVEL.', '2X Avios on hotel accommodations booked directly.', '1X Avios on all other purchases.' ],
        keyFeatures: [ 'Travel Together Ticket: Earn a companion pass after spending $30,000 annually, valid for British Airways flights.', '10% Discount: Save 10% on British Airways flights when booked through the official website.', 'Seat Selection: Complimentary seat selection on reward flights for primary cardholders.' ],
        additionalPerks: [ 'No foreign transaction fees.', 'Global Entry/TSA PreCheck fee reimbursement (up to $100).', 'Exclusive access to British Airways Executive Club benefits.', 'Reward Flight Redemption Fee Discounts for cardholders.' ],
        bestFor: 'Frequent British Airways travelers and Avios enthusiasts seeking travel rewards and exclusive perks.',
        welcomeBonusTable: '100,000 Avios after spending $5,000 in 3 months (~$1,200 value).', // Note: Table HTML had different bonus structure. Using detailed. VERIFY!
        annualFeeTable: '$95',
        earningRatesTable: '3x British Airways, 2x airfare, hotels, 1x other purchases',
        luxuryFeaturesTable: 'Companion ticket, Premium cabin discounts, Seat selection perks',
        schema: schema8
    },
    {
        id: 'hawaiian-airlines-world-elite',
        name: 'Hawaiian Airlines® World Elite Mastercard®',
        tciRating: '7.6',
        applyUrl: 'https://cards.barclaycardus.com/banking/cards/hawaiian-airlines-world-elite-mastercard/', // *** REPLACE ***
        learnMoreUrl: '/cards/hawaiian-airlines-mastercard', // *** REPLACE ***
        ratesFeesUrl: 'https://www.barclaycardus.com/applycontent/TnCs.jsp?tc46491',
        imageUrl: '/20181128-landing-cardArt.png', // *** VERIFY PATH ***
        imageAlt: 'Hawaiian Airlines® World Elite Mastercard®',
        imageWidth: 250, // *** REPLACE ***
        imageHeight: 158, // *** REPLACE ***
        bonus: 'Earn 70,000 HawaiianMiles after spending $2,000 in the first 90 days.<br><em>(Valued at ~$700 toward award flights with Hawaiian Airlines).</em>',
        earningRatesList: [ '3X miles on eligible Hawaiian Airlines purchases.', '2X miles on gas, dining, and grocery store purchases.', '1X mile on all other purchases.' ],
        keyFeatures: [ 'Companion Discount: One-time 50% off companion discount for round-trip travel between Hawaii and North America.', 'Annual Companion Ticket: Receive an annual $100 companion discount.', 'Exclusive Cardholder Benefits: Priority boarding and discounted award flights for cardholders.' ],
        additionalPerks: [ 'First checked bag free for the primary cardholder and one companion.', 'No foreign transaction fees.', 'Share Miles: Transfer HawaiianMiles to friends and family without a fee.', 'Discounted award travel between the mainland U.S. and Hawaii.' ],
        bestFor: 'Travelers looking to earn miles for Hawaiian Airlines flights and enjoy exclusive perks for Hawaii travel.',
        welcomeBonusTable: '60,000 miles after spending $2,000 in 3 months (~$900 value).', // Note: Table HTML had different bonus. Using detailed. VERIFY!
        annualFeeTable: '$99',
        earningRatesTable: '3x Hawaiian Airlines, 2x dining, groceries, 1x other purchases',
        luxuryFeaturesTable: 'Companion fare discounts, Free checked bags, Priority perks',
        schema: schema9
    },
    {
        id: 'citi-aadvantage-platinum-select',
        name: 'Citi® / AAdvantage® Platinum Select® World Elite Mastercard®',
        tciRating: '7.8',
        applyUrl: 'https://www.citi.com/credit-cards/citi-aadvantage-platinum-elite-credit-card', // *** REPLACE ***
        learnMoreUrl: '/cards/citi-aadvantage-platinum', // *** REPLACE ***
        ratesFeesUrl: 'https://creditcards.aa.com/plat_standard/',
        imageUrl: '/CardArt.png.webp', // *** VERIFY PATH ***
        imageAlt: 'Citi® / AAdvantage® Platinum Select® World Elite Mastercard®',
        imageWidth: 250, // *** REPLACE ***
        imageHeight: 158, // *** REPLACE ***
        bonus: 'Earn 50,000 AAdvantage® miles after spending $2,500 in the first 3 months.<br><em>(Valued at ~$750 toward American Airlines award flights).</em>',
        earningRatesList: [ '2X miles on American Airlines purchases.', '2X miles at restaurants and gas stations.', '1X mile on all other purchases.' ],
        keyFeatures: [ 'Preferred Boarding: Enjoy preferred boarding on American Airlines flights.', '25% Savings: Receive 25% savings on in-flight food and beverage purchases.', 'Exclusive Flight Benefits: Redeem miles for travel with no blackout dates on American Airlines.' ],
        additionalPerks: [ 'Free first checked bag for you and up to 4 travel companions on the same reservation.', '$125 American Airlines Flight Discount after spending $20,000 annually.', 'No foreign transaction fees.', 'Global AAdvantage® Program Benefits: Earn miles for use across American Airlines and its Oneworld® alliance partners.' ],
        bestFor: 'American Airlines travelers who want to save on flights and earn miles on everyday purchases.',
        welcomeBonusTable: '50,000 miles after spending $2,500 in 3 months (~$750 value).',
        annualFeeTable: '$99 (waived first year)',
        earningRatesTable: '2x AA, dining, gas, 1x other purchases',
        luxuryFeaturesTable: 'Free checked bags, Preferred pricing, Group 1 boarding',
        schema: schema10
    }
];


// --- Construct Schema Data from Imports ---
const siteUrl = "https://www.travelcardinsider.com"; // *** REPLACE if needed ***
const pageUrl = `${siteUrl}/airline/best-airline-cards-2025`; // *** Use CORRECT page path ***
const dateModifiedISO = new Date().toISOString();

// Combine imported schemas into the graph structure
const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
        schemaOrg, schemaWebsite, // Base site/org schemas
        { // CollectionPage specific schema
            "@type": "CollectionPage", "@id": pageUrl, "url": pageUrl,
            "name": "Discover the Best 10 Airline Travel Credit Cards of 2025 | TravelCardInsider",
            "headline": "Discover the Best 10 Airline Travel Credit Cards of 2025",
            "description": "Compare top-rated airline travel credit cards for 2025, maximize miles, free bags, lounge access, and unlock exclusive perks for your next adventure.",
            "inLanguage": "en-US", "isPartOf": { "@id": `${siteUrl}/#website` },
            "mainEntityOfPage": { "@type": "WebPage", "@id": pageUrl },
            "datePublished": "2025-01-15", "dateModified": dateModifiedISO, // Update dates
            "author": { "@id": `${siteUrl}/#organization` }, "publisher": { "@id": `${siteUrl}/#organization` },
            "image": `${siteUrl}/AdobeStock_604745576.jpeg`, // *** Use correct hero image path ***
            "mainEntity": {
                "@type": "ItemList", "name": "Top 10 Airline Travel Credit Cards",
                "numberOfItems": cardsData.length, "itemListOrder": "https://schema.org/ItemListOrderUnordered",
                "itemListElement": cardsData.map((card, index) => ({
                    "@type": "ListItem", "position": index + 1,
                    "item": { "@id": card.schema['@id'] || `#${card.id}` } // Link to full schema definition below
                }))
            }
        },
        // Include all individual card schemas
        schema1,
        schema2,
        schema3,
        schema4,
        schema5,
        schema6,
        schema7,
        schema8,
        schema9,
        schema10
    ]
};

// --- Rating Tooltip Content ---
const ratingCriteria = [ 'Airline Perks (Bags, Lounge)', 'Earning Rates (Airline & Bonus)', 'Welcome Bonus Value', 'Annual Fee & Credits', 'Redemption Options / Partners' ];


// *** Component Function ***
export default function BestAirlineCardsPage() {
    // --- Tooltip State and Logic ---
    const [activeTooltip, setActiveTooltip] = useState(null);
    const tooltipRef = useRef(null);
    const handleIconClick = useCallback((event, card) => { /* ... Same as before ... */ event.preventDefault(); event.stopPropagation(); if (activeTooltip && activeTooltip.id === card.id) { setActiveTooltip(null); } else { const rect = event.currentTarget.getBoundingClientRect(); const top = window.scrollY + rect.bottom + 5; const left = window.scrollX + rect.left; setActiveTooltip({ id: card.id, rating: card.tciRating, top: top, left: left }); } }, [activeTooltip]);
    const closeTooltip = useCallback(() => { setActiveTooltip(null); }, []);
    useEffect(() => { if (!activeTooltip) return; const handleClickOutside = (event) => { const isInfoButton = event.target.closest(`.${styles.infoIconButton}`); if (tooltipRef.current && !tooltipRef.current.contains(event.target) && !isInfoButton) { closeTooltip(); } }; document.addEventListener('mousedown', handleClickOutside); return () => { document.removeEventListener('mousedown', handleClickOutside); }; }, [activeTooltip, closeTooltip]);
    // --- End Tooltip State and Logic ---

    return (
        <>
             <Header />
            <Head>
                 <title>Discover the Best 10 Airline Travel Credit Cards of 2025 | TravelCardInsider</title>
                 <meta name="description" content="Compare top-rated airline travel credit cards for 2025, maximize miles, free bags, lounge access, and unlock exclusive perks for your next adventure."/>
                 <link rel="canonical" href={pageUrl}/>
                 {/* Add other relevant meta tags (OG, Twitter) */}
                 {/* Use next/font if configured in _app.js */}
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
                     {/* Use correct hero image */}
                     <Image alt="Planes and travel concept" src="/AdobeStock_604745576 (1).webp" layout="fill" objectFit="cover" objectPosition="center center" quality={80} priority className={styles.heroBackgroundImage} />
                    <div className={styles.heroOverlay}></div>
                    <div className={styles.heroContent}>
                        {/* Use content from Airline HTML */}
                        <h1 className={styles.heroTitle}>Discover the Best 10 Airline Travel Credit Cards of 2025</h1>
                        <p className={styles.heroDescription}>Compare top-rated travel credit cards, maximize rewards, and unlock exclusive perks for your next adventure. Whether you’re a frequent flyer, luxury traveler, or budget explorer, find the perfect card to suit your needs.</p>
                        <div className={styles.heroCta}><a href="#comparison-table" className={`${styles.ctaButton} ${styles.ctaPrimary}`}>Compare Now</a></div>
                        <p className={styles.heroDisclaimer}>Advertiser Disclosure: We may receive compensation via links on this page. Opinions are our own. Offers are subject to change; verify terms with the issuer.</p>
                         {/* Add disclaimer if present in source HTML */}
                    </div>
                </section>

                {/* --- Comparison Table Section --- */}
                <section id="comparison-table" className={styles.comparisonSection}>
                     <h2 className={styles.sectionTitle}>Top 10 Airline Travel Credit Cards</h2> {/* Title from Airline HTML */}
                    <div className={styles.tableResponsive}>
                        <table className={styles.comparisonTable}>
                            <thead>
                                <tr>
                                    {/* Airline Card Headers */}
                                    <th>Card Name</th>
                                    <th>Welcome Bonus</th>
                                    <th>Annual Fee</th>
                                    <th>Earning Rates</th>
                                    <th>Luxury Features</th>
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
                                         {/* Use data from the card object */}
                                         <td data-label="Welcome Bonus">{card.welcomeBonusTable}</td>
                                         <td data-label="Annual Fee">{card.annualFeeTable}</td>
                                         <td data-label="Earning Rates">{card.earningRatesTable}</td>
                                         <td data-label="Luxury Features">{card.luxuryFeaturesTable}</td>
                                         <td data-label="Apply / Details">
                                            <div className={styles.tableActionGroup}>
                                                 <a href={card.applyUrl} className={`${styles.ctaButtonSmall} ${styles.ctaApply}`} target="_blank" rel="noopener noreferrer sponsored">Apply Now</a>
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
                                      {/* Use data keys specific to airline cards */}
                                      {card.bonus && ( <div className={`${styles.cardFeatureBlock} ${styles.bonusBlock}`}><h4 tabIndex={-1}>Welcome Bonus</h4><p dangerouslySetInnerHTML={{ __html: card.bonus }}></p></div>)}
                                      {card.earningRatesList?.length > 0 && ( <div className={styles.cardFeatureBlock}><h4 tabIndex={-1}>Earning Rates</h4><ul className={styles.featureList}>{card.earningRatesList.map((rate, i) => <li key={`earn-${i}`}>{rate}</li>)}</ul></div>)}
                                      {card.keyFeatures?.length > 0 && ( <div className={styles.cardFeatureBlock}><h4 tabIndex={-1}>Luxury Features</h4><ul className={styles.featureList}>{card.keyFeatures.map((feature, i) => <li key={`feature-${i}`}>{feature}</li>)}</ul></div>)}
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
             {activeTooltip && ( <div ref={tooltipRef} className={styles.ratingTooltip} style={{ position: 'absolute', top: `${activeTooltip.top}px`, left: `${activeTooltip.left}px` }} role="tooltip" aria-live="polite"> <strong>TCI Rating: {activeTooltip.rating}/10</strong> <p className={styles.tooltipIntro}>This rating is based on:</p> <ul className={styles.tooltipList}> {ratingCriteria.map((criterion, index) => <li key={index}>{criterion}</li>)} </ul> </div> )}

             <Footer />
        </>
    );
}