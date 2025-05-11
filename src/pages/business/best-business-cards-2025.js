// File: pages/business/best-business-cards-2025.js

// !!! WARNING: THIS FILE CONTAINS PLACEHOLDER DATA/URLs/DIMENSIONS !!!
// !!! YOU MUST REPLACE ALL PLACEHOLDERS MARKED WITH '!!!' BEFORE DEPLOYMENT !!!
// !!! VERIFY ALL CARD DETAILS AGAINST OFFICIAL ISSUER INFO !!!

import React, { useState, useEffect, useCallback, useRef } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/ZeroAprIndex.module.css'; // Using same CSS module as Zero APR page
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import schemaOrg from '@/schemas/organization.json'; // Assuming a base Organization schema
import schemaWebsite from '@/schemas/website.json';   // Assuming a base Website schema
import schemaCard1 from '@/schemas/business/1-ink-business-preferred.json';
import schemaCard2 from '@/schemas/business/2-amex-business-platinum.json';
import schemaCard3 from '@/schemas/business/3-capital-one-venture-x-business.json';
import schemaCard4 from '@/schemas/business/4-delta-reserve-business.json';
import schemaCard5 from '@/schemas/business/5-united-business.json';
import schemaCard6 from '@/schemas/business/6-capital-one-spark-miles.json';
import schemaCard7 from '@/schemas/business/7-boa-business-advantage.json';
import schemaCard8 from '@/schemas/business/8-amex-business-gold.json';
import schemaCard9 from '@/schemas/business/9-hilton-honors-business.json';
import schemaCard10 from '@/schemas/business/10-hyatt-business.json';


// --- COMPLETE Business Card Data (Extracted from HTML - VERIFY ALL DETAILS & REPLACE PLACEHOLDERS!) ---
const cardsData = [
    {
        id: 'ink-business-preferred',
        name: 'Ink Business Preferred® Credit Card',
        tciRating: '8.6', // From HTML rating span
        applyUrl: 'https://creditcards.chase.com/business-credit-cards/ink/business-preferred', // *** REPLACE: Affiliate Link ***
        learnMoreUrl: '/cards/ink-business-preferred', // *** REPLACE: Internal Link ***
        ratesFeesUrl: 'https://sites.chase.com/services/creatives/pricingandterms.html/content/dam/pricingandterms/LGC60250.html',
        imageUrl: '/ink_preferred_card.png', // *** VERIFY PATH & FORMAT ***
        imageAlt: 'Ink Business Preferred® Credit Card',
        imageWidth: 250, // *** REPLACE: Actual Width ***
        imageHeight: 158, // *** REPLACE: Actual Height ***
        bonus: '<strong>Welcome Bonus:</strong> 100,000 Ultimate Rewards® points after spending $8,000 in the first 3 months <br><em>($1,250 value toward travel via Chase Ultimate Rewards).</em>',
        earningRatesList: [
             '3X points on travel, shipping, internet, cable, phone, and advertising (first $150,000 annually)',
             '1X on other purchases'
        ],
        keyFeatures: [ // Using "Business Features" from HTML as Key Features
            'Employee cards at no extra cost',
            'Transfer points to airline/hotel partners for higher redemption',
            'No foreign transaction fees'
         ],
        additionalPerks: [
             'Cell phone protection up to $1,000 per claim',
             'Trip cancellation/interruption insurance',
             'Extended warranty, purchase protection'
         ],
        bestFor: 'Businesses spending heavily on travel/ads seeking high-value UR points.',
        // Table Data
        welcomeBonusTable: '$1,250 (100,000 points)',
        annualFeeTable: '$95',
        earningRatesTable: '3x on travel, shipping, internet, and ads (up to $150,000/year)',
        bestForTable: 'High travel and advertising expenses', // Using table 'Best For'
        schemaCard1
    },
    {
        id: 'business-amex-platinum',
        name: 'The Business Platinum Card® from American Express',
        tciRating: '9.0',                                  // unchanged
        applyUrl: 'https://www.americanexpress.com/us/credit-cards/business/business-platinum/',  // current public landing page
        learnMoreUrl: '/cards/amex-business-platinum',     // internal link unchanged
        ratesFeesUrl: 'https://www.americanexpress.com/us/credit-cards/card-application/apply/prospect/terms/business-platinum-charge-card/45094-9-0?key=tncBody',
        imageUrl: '/platinum-card-image-alt.avif',
        imageAlt: 'The Business Platinum Card® from American Express',
        imageWidth: 480,                                   // actual hero image width
        imageHeight: 302,                                  // actual hero image height
    
        // *** refreshed welcome‑bonus wording & amount ***
        bonus: '<strong>WelcomeBonus:</strong>150,000MR® points after $20,000 in 3months<br><em>(≈$2,300 value with smart travel redemptions).</em>',
    
        // *** earning rates brought in line with 2025 terms ***
        earningRatesList: [
            '5X on flights & prepaid hotels via AmexTravel',
            '1.5X on U.S. hardware, software/cloud, shipping & construction merchants (up to $2M/yr)',
            '1.5X on any individual purchase of $5,000+ (shared $2M cap)',
            '1X on all other eligible spend'
        ],
    
        keyFeatures: [
            'Complimentary lounge access (Centurion, Delta Sky Club, Priority Pass)',
            'Fine Hotels + Resorts® perks',
            '$200 airline fee credit'
        ],
    
        // *** updated credit highlights & new cell‑phone protection kept ***
        additionalPerks: [
            '$400 Dell credit',
            '$360 Indeed credit',
            '$189 CLEAR® Plus credit',
            '$150 Adobe credit',
            '$120 wireless service credit',
            'Cell‑phone protection',
            'Global Entry/TSAPreCheck credit'
        ],
    
        bestFor: 'Luxury business travelers wanting top‑tier lounge perks and rich big‑spend multipliers.',
    
        // ========== table display values ==========
        welcomeBonusTable: '$2,300 (150,000 points)',
        annualFeeTable: '$695',
        earningRatesTable: '5× flights & prepaid hotels (AmexTravel); 1.5× select categories & $5k+ purchases',
        bestForTable: 'Luxury travelers',
    
        schemaCard2
    },
    
    {
        id: 'capital-one-venture-x-business',
        name: 'Capital One Venture X Business',
        tciRating: '8.8', // From HTML rating span
        applyUrl: 'https://www.capitalone.com/small-business/credit-cards/venture-x-business/', // *** REPLACE: Affiliate Link ***
        learnMoreUrl: '/cards/capital-one-venture-x-business', // *** REPLACE: Internal Link ***
        ratesFeesUrl: 'http://capitalone.com/small-business/credit-cards/venture-x-business/',
        imageUrl: '/vxb-card-alt-at-2x.avif', // *** VERIFY PATH & FORMAT ***
        imageAlt: 'Capital One Venture X Business',
        imageWidth: 250, // *** REPLACE: Actual Width ***
        imageHeight: 158, // *** REPLACE: Actual Height ***
        bonus: '<strong>Welcome Bonus:</strong> 150,000 miles after $10,000 in 3 months<br><em>(~$1,500 value, more with transfer partners).</em>',
        earningRatesList: [
            '10X on hotels/rentals via CapOne Travel',
            '5X on flights via CapOne Travel',
            '2X on other purchases'
         ],
        keyFeatures: [ // Using "Luxury Features" from HTML
            'Lounge Access: Capital One Lounges + Priority Pass',
            '$300 annual travel credit (CapOne Travel)',
            'Exclusive hotel perks'
        ],
        additionalPerks: [
            'Cell phone protection',
            'Travel insurance & trip protection',
            'Miles transfer to 15+ programs'
        ],
        bestFor: 'Frequent flyers wanting lounge access and high-value travel redemptions.',
         // Table Data
        welcomeBonusTable: '$1,500 (150,000 miles)',
        annualFeeTable: '$395',
        earningRatesTable: '10x hotels/rentals, 5x flights, 2x on all other purchases',
        bestForTable: 'Frequent business travelers',
        schemaCard3
    },
    {
        id: 'delta-skymiles-reserve-business',
        name: 'Delta SkyMiles® Reserve Business American Express Card',
        tciRating: '8.7', // From HTML rating span
        applyUrl: 'https://www.americanexpress.com/en-us/business/credit-cards/delta-skymiles-reserve/', // *** REPLACE: Affiliate Link ***
        learnMoreUrl: '/cards/delta-reserve-business', // *** REPLACE: Internal Link ***
        ratesFeesUrl: 'https://www.americanexpress.com/us/credit-cards/card-application/apply/prospect/terms/delta-skymiles-reserve/45094-9-0?key=tncBody&rwdFlag=rwd',
        imageUrl: '/delta-reserve-business.avif', // *** VERIFY PATH & FORMAT ***
        imageAlt: 'Delta SkyMiles® Reserve Business American Express Card',
        imageWidth: 250, // *** REPLACE: Actual Width ***
        imageHeight: 158, // *** REPLACE: Actual Height ***
        bonus: '<strong>Welcome Bonus:</strong> 80,000 miles after $4,000 in 3 months<br><em>(~$1,000 value on Delta award flights).</em>',
        earningRatesList: [
            '3X miles on Delta',
            '1.5X miles on all purchases after $150,000/year',
            '1X on other purchases'
        ],
        keyFeatures: [ // Using "Luxury Features" from HTML
            'Complimentary Sky Club & Centurion Lounge access (when flying Delta)',
            'Annual Companion Certificate (First Class, Comfort+, Main Cabin)',
            'Priority Upgrades with Medallion Status'
         ],
        additionalPerks: [
            'Free first checked bag',
            'Global Entry/TSA PreCheck credit',
            '20% inflight savings on Delta'
        ],
        bestFor: 'Delta-centric businesses seeking premium lounge access and faster elite status.',
         // Table Data
        welcomeBonusTable: '$1,000 (80,000 miles)',
        annualFeeTable: '$695', // Note: HTML table missing this fee, but detailed section implies it
        earningRatesTable: '3x miles on Delta purchases',
        bestForTable: 'Delta loyalists',
        schemaCard4
    },
    {
        id: 'united-business-card',
        name: 'United℠ Business Card',
        tciRating: '7.9', // From HTML rating span
        applyUrl: 'https://creditcards.chase.com/business-credit-cards/united/united-business-card', // *** REPLACE: Affiliate Link ***
        learnMoreUrl: '/cards/united-business-card', // *** REPLACE: Internal Link ***
        ratesFeesUrl: 'https://sites.chase.com/services/creatives/pricingandterms.html/content/dam/pricingandterms/LGC57969.html',
        imageUrl: '/united_biz_card.png', // *** VERIFY PATH & FORMAT ***
        imageAlt: 'United℠ Business Card',
        imageWidth: 250, // *** REPLACE: Actual Width ***
        imageHeight: 158, // *** REPLACE: Actual Height ***
        bonus: '<strong>Welcome Bonus:</strong> 75,000 miles after $5,000 in 3 months<br><em>(~$1,050 on United award travel).</em>',
        earningRatesList: [
            '2X miles on United',
            '2X dining, gas, local transit',
            '1X on everything else'
        ],
        keyFeatures: [ // Using "Luxury Features" from HTML
            'Two United Club℠ passes yearly',
            'Priority boarding',
            'First bag free on United (cardholder + companion)'
         ],
        additionalPerks: [
             'No foreign transaction fees',
             '25% back on in-flight purchases',
             '$100 United travel credit after $10K annual spend'
        ],
        bestFor: 'United flyers wanting free bags, lounge passes, and straightforward rewards.',
         // Table Data
        welcomeBonusTable: '$1,050 (75,000 miles)',
        annualFeeTable: '$0 intro, then $99',
        earningRatesTable: '2x on United, dining, gas stations, and transit',
        bestForTable: 'United travelers',
        schemaCard5
    },
    {
        id: 'capital-one-spark-miles',
        name: 'Capital One Spark Miles for Business',
        tciRating: '8.0', // From HTML rating span
        applyUrl: 'https://www.capitalone.com/small-business/credit-cards/spark-miles/', // *** REPLACE: Affiliate Link ***
        learnMoreUrl: '/cards/capital-one-spark-miles', // *** REPLACE: Internal Link ***
        ratesFeesUrl: 'https://www.capitalone.com/small-business/credit-cards/spark-miles/',
        imageUrl: '/miles_new_2021.avif', // *** VERIFY PATH & FORMAT ***
        imageAlt: 'Capital One Spark Miles for Business',
        imageWidth: 250, // *** REPLACE: Actual Width ***
        imageHeight: 158, // *** REPLACE: Actual Height ***
        bonus: '<strong>Welcome Bonus:</strong> 50,000 miles after $4,500 in 3 months <br><em>(~$500 travel value).</em>',
        earningRatesList: [
            '2X on every purchase',
            '5X on hotels/rentals via Capital One Travel'
        ],
        keyFeatures: [ // Using "Travel Perks" from HTML
            'Miles transfer to 15+ travel partners',
            'Redeem for flights, hotels, etc.',
            'No blackout dates'
        ],
        additionalPerks: [
            'Global Entry/TSA PreCheck credit',
            'No foreign transaction fees',
            'Extended warranty/purchase protection'
         ],
        bestFor: 'Straightforward unlimited rewards, easy redemption, moderate annual fee.',
         // Table Data
        welcomeBonusTable: '$500 (50,000 miles)',
        annualFeeTable: '$0 intro, then $95',
        earningRatesTable: '2x miles on every purchase',
        bestForTable: 'Straightforward rewards',
        schemaCard6
    },
    {
        id: 'boa-business-advantage-travel-rewards',
        name: 'Bank of America® Business Advantage Travel Rewards Card',
        tciRating: '7.3', // From HTML rating span
        applyUrl: 'https://www.bankofamerica.com/smallbusiness/credit-cards/products/travel-rewards-business-credit-card/', // *** REPLACE: Affiliate Link ***
        learnMoreUrl: '/cards/boa-business-advantage-travel', // *** REPLACE: Internal Link ***
        ratesFeesUrl: 'https://www.bankofamerica.com/smallbusiness/credit-cards/products/travel-rewards-business-credit-card/',
        imageUrl: '/assets-images-site-sb-credit-cards-card-arts-en-bofa_trvbuswldcm_mc-CSX44dee15a.png', // *** VERIFY PATH & FORMAT ***
        imageAlt: 'Bank of America® Business Advantage Travel Rewards Card',
        imageWidth: 250, // *** REPLACE: Actual Width ***
        imageHeight: 158, // *** REPLACE: Actual Height ***
        bonus: '<strong>Welcome Bonus:</strong> 30,000 points after $3,000 in 90 days <br><em>($300 statement credit or travel credit).</em>',
        earningRatesList: [
             '1.5X on all purchases',
             '3X on travel booked via BoA Travel Center'
        ],
        keyFeatures: [ // Using "Travel Perks" from HTML
            'No annual fee',
            'No foreign transaction fees',
            'Flexible redemption on flights, hotels, etc.'
        ],
        additionalPerks: [
            'Fraud protection & alerts',
            'Access to BoA Small Business Specialists',
            'Overdraft protection if linked to BoA checking'
         ],
        bestFor: 'Small businesses needing a no-fee card with decent travel rewards and BoA relationship benefits.',
         // Table Data
        welcomeBonusTable: '$300 (30,000 points)',
        annualFeeTable: '$0',
        earningRatesTable: '3x on travel via Bank of America Travel Center, 1.5x everywhere',
        bestForTable: 'Small business travel',
        schemaCard7
    },
    {
        id: 'amex-business-gold',
        name: 'American Express® Business Gold Card',
        tciRating: '8.4', // From HTML rating span
        applyUrl: '#', // *** REPLACE: Affiliate Link ***
        learnMoreUrl: '/cards/amex-business-gold', // *** REPLACE: Internal Link ***
        ratesFeesUrl: 'https://www.americanexpress.com/us/credit-cards/card-application/apply/prospect/terms/businessgold-card/45094-9-0?key=tncBody&rwdFlag=rwd',
        imageUrl: '/business-gold.avif', // *** VERIFY PATH & FORMAT ***
        imageAlt: 'American Express® Business Gold Card',
        imageWidth: 250, // *** REPLACE: Actual Width ***
        imageHeight: 158, // *** REPLACE: Actual Height ***
        bonus: '<strong>Welcome Bonus:</strong> 70,000 MR points after $10,000 in 3 months<br><em>(~$1,400 if optimally transferred).</em>',
        earningRatesList: [
             '4X on top 2 categories each month (up to $150K/year)',
             '1X on all else'
        ],
        keyFeatures: [ // Using "Travel Perks" from HTML - needs verification if these are the 'key' features vs business ones
            '25% Airline Bonus on award redemptions',
            'Transfer points to airlines like Delta, BA, etc.'
         ],
        additionalPerks: [
             'Global Assist® Hotline',
             'Purchase protection, extended warranty',
             'Employee cards with spending controls'
        ],
        bestFor: 'Versatile spending (top 2 categories) and robust travel redemption with MR points.',
         // Table Data
        welcomeBonusTable: '$1,050 (70,000 points)', // Value from HTML table differs slightly from description
        annualFeeTable: '$295',
        earningRatesTable: '4x on top 2 spending categories (up to $150,000/year)',
        bestForTable: 'Diverse spending categories',
        schemaCard8
    },
    {
        id: 'hilton-honors-business',
        name: 'Hilton Honors American Express Business Card',
        tciRating: '7.8', // From HTML rating span
        applyUrl: 'https://www.americanexpress.com/us/credit-cards/business/business-credit-cards/hilton-honors/', // *** REPLACE: Affiliate Link ***
        learnMoreUrl: '/cards/hilton-honors-amex-business', // *** REPLACE: Internal Link ***
        ratesFeesUrl: 'https://www.americanexpress.com/us/credit-cards/card-application/apply/prospect/terms/hilton-honors-american-express-business-credit-card/45094-9-0?key=tncBody&rwdFlag=rwd',
        imageUrl: '/hilton-honors.avif', // *** VERIFY PATH & FORMAT ***
        imageAlt: 'Hilton Honors American Express Business Card',
        imageWidth: 250, // *** REPLACE: Actual Width ***
        imageHeight: 158, // *** REPLACE: Actual Height ***
        bonus: '<strong>Welcome Bonus:</strong> 130,000 Hilton Honors points after $5,000 in 3 months <br><em>(Up to 26 nights at Category 1 properties).</em>',
        earningRatesList: [
             '12X at Hilton',
             '6X at U.S. restaurants, gas, wireless services',
             '3X on other purchases'
        ],
        keyFeatures: [ // Using "Travel Perks" from HTML
            'Complimentary Hilton Gold status',
            'Weekend Night Reward after certain spend',
            'No foreign transaction fees'
        ],
        additionalPerks: [
            'Car rental loss/damage coverage',
            'Purchase protection, extended warranty',
            '24/7 customer support'
        ],
        bestFor: 'Frequent Hilton stays, wanting Gold status and boosted earning on Hilton stays.',
         // Table Data
        welcomeBonusTable: '$780 (130,000 Hilton Honors points)', // Value from HTML table
        annualFeeTable: '$95',
        earningRatesTable: '12x on Hilton, 6x on select categories, 3x elsewhere',
        bestForTable: 'Hilton hotel enthusiasts',
        schemaCard9
    },
    {
        id: 'world-of-hyatt-business',
        name: 'World of Hyatt Business Credit Card',
        tciRating: '8.5', // From HTML rating span
        applyUrl: 'https://creditcards.chase.com/travel-credit-cards/world-of-hyatt-credit-card', // *** REPLACE: Affiliate Link ***
        learnMoreUrl: '/cards/world-of-hyatt-business', // *** REPLACE: Internal Link ***
        ratesFeesUrl: 'https://sites.chase.com/services/creatives/pricingandterms.html/content/dam/pricingandterms/LGC60386.html',
        imageUrl: '/HYCOM-090821-WOH-Business-Card.webp', // *** VERIFY PATH & FORMAT ***
        imageAlt: 'World of Hyatt Business Credit Card',
        imageWidth: 250, // *** REPLACE: Actual Width ***
        imageHeight: 158, // *** REPLACE: Actual Height ***
        bonus: '<strong>Welcome Bonus:</strong> Up to 75,000 Bonus Points (60k after $5k in 3 months + 15k after $12k total in 6 months)<br><em>(Potentially 15 free nights at Category 1 hotels).</em>',
        earningRatesList: [
            '9X at Hyatt (4X card + 5X as a member)',
            '2X in your top 3 spend categories each quarter',
            '1X on other purchases'
        ],
        keyFeatures: [ // Using "Travel Perks" from HTML
            'Discoverist status automatically',
            '2 free nights after $50k annual spend',
            'No foreign transaction fees'
         ],
        additionalPerks: [
            'Cell phone protection',
            'Purchase protection, extended warranty',
            'Elevated path to higher Hyatt status'
        ],
        bestFor: 'Hyatt devotees wanting to earn status faster and enjoy high-value hotel redemptions.',
         // Table Data
        welcomeBonusTable: '$1,125 (75,000 points)', // Value from HTML table
        annualFeeTable: '$199',
        earningRatesTable: '9x on Hyatt stays, 2x on business categories',
        bestForTable: 'Frequent Hyatt travelers',
        schemaCard10
    }
];

// --- Construct Schema Data from Imports ---
const siteUrl = "https://www.travelcardinsider.com"; // *** REPLACE if needed ***
const pageUrl = `${siteUrl}/business/best-business-cards-2025`; // *** Use NEW page path ***
const logoUrl = `${siteUrl}/logo-optimized.png`; // *** Use your actual logo URL ***
const heroImageUrl = `${siteUrl}/artem-zhukov-EzTeYrDT4hc-unsplash.jpg`; // *** Use correct hero image ***
const dateModifiedISO = new Date().toISOString();

// Build Schema based on data
const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
        // Assuming schemaOrg and schemaWebsite are correctly defined in JSON files
        schemaOrg,
        schemaWebsite,
        { // CollectionPage specific to this page
            "@type": "CollectionPage",
            "@id": pageUrl,
            "url": pageUrl,
            "name": "Discover the Best 10 Business Travel Credit Cards of 2025 | TravelCardInsider",
            "headline": "Discover the Best 10 Business Travel Credit Cards of 2025",
            "description": "Compare the top 10 business travel credit cards of 2025. Maximize travel rewards, enjoy premium perks, and streamline your company’s expenses with these curated picks.",
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
                "name": "Top 10 Business Travel Credit Cards",
                "numberOfItems": cardsData.length,
                "itemListOrder": "https://schema.org/ItemListOrderUnordered",
                "itemListElement": cardsData.map((card, index) => {
                    // Assuming each imported schema (schemaCard1, etc.) has a top-level '@id'
                    // If not, generate one like `#${card.id}`
                    const itemId = card.schema?.['@id'] || `${pageUrl}#${card.id}`;
                    return {
                        "@type": "ListItem",
                        "position": index + 1,
                        "item": { "@id": itemId } // Reference the card schema by its ID
                    };
                })
            }
        },
        // Include all individual card schemas from imports
        schemaCard1, schemaCard2, schemaCard3, schemaCard4, schemaCard5,
        schemaCard6, schemaCard7, schemaCard8, schemaCard9, schemaCard10
    ]
};

// --- Rating Tooltip Content (Adjusted slightly for business context) ---
const ratingCriteria = [ 'Business Earning Categories', 'Welcome Bonus & Value', 'Travel Perks (Lounge, Credits)', 'Annual Fee & Justification', 'Redemption Flexibility / Partners' ];

// *** Component Function ***
export default function BestBusinessCardsPage() { // Changed function name
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
             
            <Head>
                 <title>Discover the Best 10 Business Travel Credit Cards of 2025 | TravelCardInsider</title>
                 <meta name="description" content="Compare the top 10 business travel credit cards of 2025. Maximize travel rewards, enjoy premium perks, and streamline your company’s expenses."/>
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
                    {/* Corrected Hero Image Path */}
                     <Image alt="Business people planning travel" src="/artem-zhukov-EzTeYrDT4hc-unsplash.webp" layout="fill" objectFit="cover" objectPosition="center center" quality={80} priority className={styles.heroBackgroundImage} />
                    <div className={styles.heroOverlay}></div>
                    <div className={styles.heroContent}>
                        <h1 className={styles.heroTitle}>Discover the Best 10 Business Travel Credit Cards of 2025</h1>
                        <p className={styles.heroDescription}>Compare top-rated travel credit cards, maximize rewards, and unlock exclusive perks for your next adventure. Whether you’re a frequent flyer, luxury traveler, or budget explorer, find the perfect card to suit your needs.</p>
                        <div className={styles.heroCta}><a href="/compare" className={`${styles.ctaButton} ${styles.ctaPrimary}`}>Compare Now</a></div>
                        {/* Add disclaimer if needed */}
                    </div>
                </section>

                {/* --- Comparison Table Section --- */}
                <section id="comparison-table" className={styles.comparisonSection}>
                     <h2 className={styles.sectionTitle}>Top 10 Business Travel Credit Cards</h2>
                    <div className={styles.tableResponsive}>
                        <table className={styles.comparisonTable}>
                            <thead>
                                <tr>
                                    {/* Updated Headers */}
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
                                         {/* Map correct data fields */}
                                         <td data-label="Annual Fee">{card.annualFeeTable}</td>
                                         <td data-label="Welcome Bonus Value">{card.welcomeBonusTable}</td>
                                         <td data-label="Rewards Rates">{card.earningRatesTable}</td>
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
                                      {/* Use correct data keys for detailed view */}
                                      {card.bonus && ( <div className={`${styles.cardFeatureBlock} ${styles.bonusBlock}`}><h4 tabIndex={-1}>Welcome Bonus</h4><p dangerouslySetInnerHTML={{ __html: card.bonus }}></p></div>)}
                                      {card.earningRatesList?.length > 0 && ( <div className={styles.cardFeatureBlock}><h4 tabIndex={-1}>Earning Rates</h4><ul className={styles.featureList}>{card.earningRatesList.map((rate, i) => <li key={`earn-${i}`}>{rate}</li>)}</ul></div>)}
                                      {card.keyFeatures?.length > 0 && ( <div className={styles.cardFeatureBlock}><h4 tabIndex={-1}>Key/Luxury Features</h4><ul className={styles.featureList}>{card.keyFeatures.map((feature, i) => <li key={`feature-${i}`}>{feature}</li>)}</ul></div>)}
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