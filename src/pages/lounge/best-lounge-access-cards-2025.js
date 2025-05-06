// File: pages/lounge/best-lounge-access-cards-2025.js

// !!! WARNING: THIS FILE CONTAINS PLACEHOLDER DATA/URLs/DIMENSIONS !!!
// !!! YOU MUST REPLACE ALL PLACEHOLDERS MARKED WITH '!!!' BEFORE DEPLOYMENT !!!
// !!! VERIFY ALL CARD DETAILS & SCHEMA FILES AGAINST OFFICIAL ISSUER INFO !!!

import React, { useState, useEffect, useCallback, useRef } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/ZeroAprIndex.module.css'; // Using same CSS module
import Header from '../../components/Header';
import Footer from '../../components/Footer';

// --- Schema Imports (!!! USER MUST CREATE THESE JSON FILES !!!) ---
import schemaOrg from '@/schemas/organization.json';
import schemaWebsite from '@/schemas/website.json';
import schemaCard1 from '@/schemas/lounge/amex-platinum.json';
import schemaCard2 from '@/schemas/lounge/capital-one-venture-x.json';
import schemaCard3 from '@/schemas/lounge/chase-sapphire-reserve.json';
import schemaCard4 from '@/schemas/lounge/delta-skymiles-reserve.json';
import schemaCard5 from '@/schemas/lounge/united-club-infinite.json';
import schemaCard6 from '@/schemas/lounge/citi-aadvantage-executive.json';
import schemaCard7 from '@/schemas/lounge/hilton-honors-aspire.json';
import schemaCard8 from '@/schemas/lounge/marriott-bonvoy-brilliant.json';
import schemaCard9 from '@/schemas/lounge/mastercard-black-card.json';
import schemaCard10 from '@/schemas/lounge/hsbc-premier-world-elite.json';


// --- COMPLETE Lounge Access Card Data (Extracted from HTML - VERIFY ALL!) ---
const cardsData = [
     {
            // --- START AMEX PLATINUM CARD DATA ---
             id: 'amex-platinum',
             name: 'The Platinum Card® from American Express',
             tciRating: '9.4', // Not verified/updated
             applyUrl: 'https://www.americanexpress.com/us/credit-cards/card/platinum/', // Original URL, not verified/updated
             learnMoreUrl: '/cards/amex-platinum', // Original path, not verified/updated
             ratesFeesUrl: 'https://www.americanexpress.com/us/credit-cards/card-application/apply/prospect/terms/platinum-card/25330-10-0#FeeTable', // Original URL, not verified/updated
             imageUrl: '/NUS000000237_480x304_straight_withname.avif', // Original path, not verified/updated
             imageAlt: 'The Platinum Card® from American Express',
             imageWidth: 480, // Original value, not verified/updated
             imageHeight: 304, // Original value, not verified/updated
             // UPDATED Welcome Bonus Spending Requirement
             bonus: '<strong>Welcome Bonus:</strong> 80,000 Membership Rewards® Points after spending $8,000 in the first 6 months.<br><em>(Valued at ~$1,200 when transferred to partners - user valuation, not verified).</em>',
             // UPDATED Earning Rates to include flight cap
             earningRatesList: [
                 '5X points on flights booked directly with airlines or via Amex Travel (on up to $500,000 per calendar year).',
                 '5X points on prepaid hotels booked through Amex Travel.',
                 '1X points on other purchases.'
             ],
             // UPDATED Key Features (Uber Cash December amount)
             keyFeatures: [ // Luxury Features from HTML (user comment)
                 'Lounge Access: 1,400+ lounges worldwide (Centurion, Delta Sky Clubs® when flying Delta, Priority Pass™ Select - enrollment required).', // Clarified Delta access & enrollment
                 'Fine Hotels + Resorts® Program: Room upgrades (when available), late checkout (when available), daily breakfast for two.', // Added detail/clarification
                 'Uber Cash: Up to $15/month in Uber credits plus a $20 bonus in December (enrollment required).', // Updated December amount
                 '$200 Hotel Credit: On prepaid Fine Hotels + Resorts® or The Hotel Collection bookings with Amex Travel (min. 2-night stay for The Hotel Collection).' // Added as specific perk found
                 // Removed vague 'Exclusive Travel Benefits' as specific perks are listed
             ],
             // UPDATED Additional Perks (Global Entry/TSA amount, added CLEAR Plus)
             additionalPerks: [
                 '$200 airline fee credit annually (enrollment required, for incidental fees on selected airline).', // Added detail
                 '$120 credit for Global Entry or up to $85 credit for TSA PreCheck® (fee credit applied every 4-4.5 years).', // Updated credit amounts/details
                 '$199 CLEAR® Plus Credit annually (enrollment required).', // Added new perk
                 'Complimentary Hilton Honors Gold and Marriott Bonvoy Gold Elite status (enrollment required).', // Added enrollment note
                 'No foreign transaction fees.'
             ],
             bestFor: 'Luxury travelers seeking VIP treatment and top-tier travel experiences.', // Original value, not verified/updated
             // Table Data (kept brief as per original structure)
             annualFeeTable: '$695', // Matches current
             welcomeBonusTable: '80,000 points', // Matches current points
             rewardsRatesTable: '5X points on flights & prepaid hotels via Amex Travel', // Matches current summary
             bestForTable: 'Luxury travelers seeking VIP treatment', // Original value, not verified/updated
             schema: schemaCard1 // Original value, assuming 'schemaCard1' is defined elsewhere
           }, // --- END AMEX PLATINUM CARD DATA ---
    {
        id: 'capital-one-venture-x',
        name: 'Capital One Venture X Rewards Credit Card',
        tciRating: '9.0',
        applyUrl: 'https://www.capitalone.com/credit-cards/venture-x/', // *** REPLACE ***
        learnMoreUrl: '/cards/capital-one-venture-x', // *** REPLACE ***
        ratesFeesUrl: 'https://www.capitalone.com/credit-cards/venture-x/',
        imageUrl: '/venturex-cg-static-card-1000x630-2.avif', // *** VERIFY PATH ***
        imageAlt: 'Capital One Venture X Rewards Credit Card',
        imageWidth: 1000, // *** REPLACE ***
        imageHeight: 630, // *** REPLACE ***
        bonus: '<strong>Welcome Bonus:</strong> 75,000 miles after spending $4,000 in 3 months.<br><em>(Valued at ~$750 for travel).</em>',
        earningRatesList: [
             '10X miles on hotels & rental cars via Capital One Travel',
             '5X miles on flights via Capital One Travel',
             '2X miles on all other purchases'
        ],
        keyFeatures: [
            '$300 Annual Travel Credit via Capital One Travel.',
            'Lounge Access: Priority Pass™ lounges + Capital One Lounges.',
            'Travel Protections: Trip delay/cancellation coverage.',
            'Concierge services for seamless travel.'
         ],
        additionalPerks: [
             '10,000 bonus miles every account anniversary.',
             'Global Entry or TSA PreCheck fee credit.',
             'Cell phone protection up to $800 per claim.',
             'No foreign transaction fees.'
        ],
        bestFor: 'Frequent travelers seeking premium lounge access and competitive rewards.',
        // Table Data
        annualFeeTable: '$395',
        loungeAccessTable: 'Unlimited Priority Pass and Capital One Lounges',
        welcomeBonusTable: '75,000 miles',
        bestForTable: 'Frequent travelers seeking premium perks',
        schema: schemaCard2
    },
     {
        id: 'chase-sapphire-reserve',
        name: 'Chase Sapphire Reserve®',
        tciRating: '9.2',
        applyUrl: 'https://creditcards.chase.com/rewards-credit-cards/sapphire/reserve', // *** REPLACE ***
        learnMoreUrl: '/cards/chase-sapphire-reserve', // *** REPLACE ***
        ratesFeesUrl: 'https://sites.chase.com/services/creatives/pricingandterms.html/content/dam/pricingandterms/LGC56007.html',
        imageUrl: '/cd4e1a20-ca7b-11ee-9db9-8dd34998ba1a.webp', // *** VERIFY PATH ***
        imageAlt: 'Chase Sapphire Reserve®',
        imageWidth: 250, // *** REPLACE ***
        imageHeight: 158, // *** REPLACE ***
        bonus: '<strong>Welcome Bonus:</strong> 60,000 points after $4,000 in 3 months.<br /><em>(Valued at $900 via Chase Ultimate Rewards).</em>',
        earningRatesList: [
            '10x on hotels & car rentals via Chase UR',
            '3x travel & dining',
            '1x on all other purchases'
        ],
        keyFeatures: [
            '$300 annual travel credit',
            'Priority Pass lounge access',
            'Luxury Hotel & Resort perks like room upgrades and daily breakfast.' // Combined from other cards for consistency
        ],
        additionalPerks: [
             'Points worth 50% more through Chase Ultimate Rewards.',
             'DoorDash DashPass and Lyft Pink memberships.',
             'Comprehensive travel insurance.',
             'No foreign transaction fees.'
        ],
        bestFor: 'Premium travelers looking for flexible redemptions and top-tier perks.',
         // Table Data
        annualFeeTable: '$550',
        loungeAccessTable: 'Priority Pass Select membership',
        welcomeBonusTable: '60,000 points',
        bestForTable: 'High spenders seeking flexibility',
        schema: schemaCard3
    },
    {
        id: 'delta-skymiles-reserve',
        name: 'Delta SkyMiles® Reserve American Express Card',
        tciRating: '8.8',
        applyUrl: 'https://www.americanexpress.com/us/credit-cards/card/delta-skymiles-reserve-american-express-card/', // *** REPLACE ***
        learnMoreUrl: '/cards/delta-skymiles-reserve', // *** REPLACE ***
        ratesFeesUrl: 'https://www.americanexpress.com/us/credit-cards/card-application/apply/prospect/terms/delta-skymiles-reserve/45094-9-0?key=tncBody&rwdFlag=rwd',
        imageUrl: '/card-deltareserve-d.avif', // *** VERIFY PATH ***
        imageAlt: 'Delta SkyMiles® Reserve American Express Card',
        imageWidth: 250, // *** REPLACE ***
        imageHeight: 158, // *** REPLACE ***
        bonus: '<strong>Welcome Bonus:</strong> 50,000 miles after $5,000 in the first 3 months.', // Adjusted based on similar cards, verify
        earningRatesList: [
            '3X miles on Delta purchases.'
        ],
        keyFeatures: [
            'Complimentary Delta Sky Club® access and two guest passes annually.',
            'Centurion Lounge access when flying Delta.',
            'Annual Companion Certificate (domestic First, Comfort+, or Main Cabin).',
            'Priority boarding on Delta flights.'
         ],
        additionalPerks: [
             'Free first checked bag on Delta.',
             'Medallion® Qualification Miles boost with card spend.',
             'Global Entry/TSA PreCheck credit.',
             'No foreign transaction fees.'
        ],
        bestFor: 'Delta loyalists seeking elite benefits, lounge access, and faster Medallion status.',
        // Table Data
        annualFeeTable: '$550', // Updated based on current Amex site
        loungeAccessTable: 'Delta Sky Clubs and Centurion Lounges',
        welcomeBonusTable: '50,000 miles',
        bestForTable: 'Delta loyalists',
        schema: schemaCard4
    },
    {
        id: 'united-club-infinite',
        name: 'United Club℠ Infinite Card',
        tciRating: '8.9',
        applyUrl: 'https://creditcards.chase.com/travel-credit-cards/united/club-infinite', // *** REPLACE ***
        learnMoreUrl: '/cards/united-club-infinite', // *** REPLACE ***
        ratesFeesUrl: 'https://sites.chase.com/services/creatives/pricingandterms.html/content/dam/pricingandterms/LGC57973.html',
        imageUrl: '/united_club_infinite_card.png', // *** VERIFY PATH ***
        imageAlt: 'United Club℠ Infinite Card',
        imageWidth: 250, // *** REPLACE ***
        imageHeight: 158, // *** REPLACE ***
        bonus: '<strong>Welcome Bonus:</strong> 80,000 miles after spending $5,000 in the first 3 months.<br><em>(Valued at ~$1,000 in United award travel).</em>',
        earningRatesList: [
             '4X miles on United purchases.',
             '2X miles on dining and eligible travel.',
             '1X mile on all other purchases.'
        ],
        keyFeatures: [
            'Unlimited United Club℠ lounge access for you and two guests.',
            'Premier Access® priority services.',
            'Free first and second checked bags on United-operated flights.'
        ],
        additionalPerks: [
            '25% back on in-flight purchases.',
            'Earn Premier Qualifying Points with card spend.',
            'Global Entry/TSA PreCheck credit.',
            'No foreign transaction fees.'
        ],
        bestFor: 'United frequent flyers valuing lounge access and enhanced travel perks.',
         // Table Data
        annualFeeTable: '$525',
        loungeAccessTable: 'United Club and Star Alliance lounges',
        welcomeBonusTable: '80,000 miles',
        bestForTable: 'United travelers',
        schema: schemaCard5
    },
    {
        id: 'citi-aadvantage-executive',
        name: 'Citi® / AAdvantage® Executive World Elite Mastercard®',
        tciRating: '8.6',
        applyUrl: 'https://creditcards.aa.com/credit-cards/citi-executive-card-american-airlines-direct/', // *** REPLACE ***
        learnMoreUrl: '/cards/citi-aadvantage-executive', // *** REPLACE ***
        ratesFeesUrl: 'https://creditcards.aa.com/exec_standard/',
        imageUrl: '/CardArt-8.webp', // *** VERIFY PATH ***
        imageAlt: 'Citi® / AAdvantage® Executive World Elite Mastercard®',
        imageWidth: 250, // *** REPLACE ***
        imageHeight: 158, // *** REPLACE ***
        bonus: '<strong>Welcome Bonus:</strong> 50,000 AAdvantage® miles after spending $5,000 in the first 3 months.<br><em>(Valued at ~$750 toward American Airlines award travel).</em>',
        earningRatesList: [
            '2X miles on American Airlines purchases.',
            '1X mile on all other purchases.'
        ],
        keyFeatures: [
             'Admirals Club® membership for the primary cardholder and authorized users.',
             'Priority boarding, check-in, and screening (where available).',
             'First checked bag free on AA flights for you + up to 8 companions.',
             'Earn 10,000 EQMs after $40,000 annual spend.'
        ],
        additionalPerks: [
            '25% savings on inflight food and beverage purchases on AA flights.',
            'Global Entry/TSA PreCheck credit.',
            'No foreign transaction fees.'
        ],
        bestFor: 'American Airlines frequent flyers who want Admirals Club access and priority services.',
         // Table Data
        annualFeeTable: '$595', // Updated based on current Citi site
        loungeAccessTable: 'Admirals Club membership',
        welcomeBonusTable: '50,000 miles',
        bestForTable: 'American Airlines loyalists',
        schema: schemaCard6
    },
    {
        id: 'hilton-aspire', // Duplicate ID, should be unique. Using 'hilton-honors-aspire' based on name
        name: 'Hilton Honors American Express Aspire Card',
        tciRating: '9.0',
        applyUrl: 'https://www.americanexpress.com/us/credit-cards/card/hilton-honors-aspire/', // *** REPLACE ***
        learnMoreUrl: '/cards/hilton-honors-aspire', // *** REPLACE ***
        ratesFeesUrl: 'https://www.americanexpress.com/us/credit-cards/card-application/apply/prospect/terms/hilton-honors-aspire-credit-card/25330-10-0#FeeTablef', // 'f' at end is typo?
        imageUrl: '/NUS000000329_480x304_straight_withname.avif', // *** VERIFY PATH ***
        imageAlt: 'Hilton Honors American Express Aspire Card',
        imageWidth: 480, // *** REPLACE ***
        imageHeight: 304, // *** REPLACE ***
        bonus: '<strong>Welcome Bonus:</strong> 150,000 Hilton Honors points after spending $4,000 in the first 3 months.', // Bonus from detailed section
        earningRatesList: [
            '14X points on eligible Hilton purchases.',
            '7X points on flights booked directly with airlines or Amex Travel, plus car rentals and U.S. restaurants.',
            '3X points on all other eligible purchases.'
        ],
        keyFeatures: [
            'Complimentary Hilton Honors Diamond Status.',
            '$250 annual Hilton Resort Credit.',
            'Annual Free Night Reward.',
            'Unlimited Priority Pass™ Select lounge access.'
        ],
        additionalPerks: [
             '$250 Airline Fee Credit.',
             '$100 on-property credit at Waldorf Astoria or Conrad with 2+ night stays.',
             'Global Entry/TSA PreCheck credit.',
             'No foreign transaction fees.'
        ],
        bestFor: 'Frequent Hilton guests and luxury travelers seeking top-tier status and lounge access.',
        // Table Data
        annualFeeTable: '$450',
        loungeAccessTable: 'Priority Pass Select membership',
        welcomeBonusTable: '150,000 points',
        bestForTable: 'Hilton enthusiasts',
        schema: schemaCard7
    },
    {
        id: 'marriott-bonvoy-brilliant-2', // Duplicate ID - needs differentiation
        name: 'Marriott Bonvoy Brilliant® American Express® Card',
        tciRating: '8.9',
        applyUrl: 'https://www.americanexpress.com/us/credit-cards/card/marriott-bonvoy-brilliant/', // *** REPLACE ***
        learnMoreUrl: '/cards/marriott-bonvoy-brilliant', // *** REPLACE ***
        ratesFeesUrl: 'https://www.americanexpress.com/us/credit-cards/card-application/apply/prospect/terms/marriott-bonvoy-brilliant-card/25330-10-0#FeeTable',
        imageUrl: '/NUS000000313_480x304_straight_withname.avif', // *** VERIFY PATH ***
        imageAlt: 'Marriott Bonvoy Brilliant® American Express® Card',
        imageWidth: 480, // *** REPLACE ***
        imageHeight: 304, // *** REPLACE ***
        bonus: '<strong>Welcome Bonus:</strong> 125,000 Marriott Bonvoy points after spending $5,000 in the first 3 months.', // Bonus from detailed
        earningRatesList: [
            '6X points at Marriott hotels',
            '3X points on dining and airfare',
            '2X points on other purchases'
        ],
        keyFeatures: [
            'Platinum Elite Status: Complimentary upgrades, late checkout, and more.',
            '$300 annual dining or Marriott statement credit (varies by version).',
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
        loungeAccessTable: 'Priority Pass access and Platinum Elite status',
        welcomeBonusTable: '125,000 points',
        bestForTable: 'Marriott loyalists',
        schema: schemaCard8
    },
    {
        id: 'mastercard-black-card',
        name: 'Mastercard® Black Card™',
        tciRating: '7.0',
        applyUrl: 'https://www.luxurycard.com/blackcard', // *** REPLACE ***
        learnMoreUrl: '/cards/mastercard-black-card', // *** REPLACE ***
        ratesFeesUrl: 'https://www.luxurycard.com/blackcard',
        imageUrl: '/BC_Front_480x303.png', // *** VERIFY PATH ***
        imageAlt: 'Mastercard® Black Card™',
        imageWidth: 480, // *** REPLACE ***
        imageHeight: 303, // *** REPLACE ***
        bonus: '<strong>Welcome Bonus:</strong> None — focuses on exclusive luxury benefits over upfront bonuses.',
        earningRatesList: [
            '1.5% Cash Back when redeemed for cash.',
            '2% Value for airfare redemptions.',
            'Unlimited points with no cap.'
        ],
        keyFeatures: [
            '24/7 Luxury Card Concierge® service.',
            'Complimentary Priority Pass™ lounge access.',
            'Metal card design (stainless steel + carbon).',
            'Exclusive VIP event access and partner offers.'
        ],
        additionalPerks: [
            '$100 annual airline credit for qualifying travel purchases.',
            'Global Entry/TSA PreCheck fee credit.',
            'No foreign transaction fees.'
        ],
        bestFor: 'Luxury travelers seeking unique concierge service and premium lounge access.',
         // Table Data
        annualFeeTable: '$495',
        loungeAccessTable: 'Priority Pass Select membership',
        welcomeBonusTable: 'No bonus',
        bestForTable: 'Exclusive luxury seekers',
        schema: schemaCard9
    },
    {
        id: 'hsbc-premier-world-elite',
        name: 'HSBC Premier World Elite Mastercard®',
        tciRating: '8.0',
        applyUrl: 'https://www.us.hsbc.com/credit-cards/products/elite/', // *** REPLACE ***
        learnMoreUrl: '/cards/hsbc-premier-world-elite', // *** REPLACE ***
        ratesFeesUrl: 'https://www.hsbc.co.uk/credit-cards/products/premier-world-elite/', // UK Link? Verify US link if applicable
        imageUrl: '/14785-hsbc-world-elite-credit-card-hex-1600x900.jpg', // *** VERIFY PATH ***
        imageAlt: 'HSBC Premier World Elite Mastercard®',
        imageWidth: 1600, // *** REPLACE ***
        imageHeight: 900, // *** REPLACE ***
        bonus: '<strong>Welcome Bonus:</strong> 50,000 Rewards Points after spending $4,000 in the first 3 months.<br><em>(Valued at ~$750 toward travel rewards).</em>',
        earningRatesList: [
            '3X points on travel purchases (airfare, hotels, car rentals).',
            '2X points on dining and entertainment.',
            '1X point on all other purchases.'
        ],
        keyFeatures: [
            'LoungeKey™ access to 1,300+ lounges worldwide.',
            'Complimentary Boingo Wi-Fi at hotspots globally.',
            'Upgraded travel benefits via the Luxury Hotel & Resort Collection.',
            'Exclusive travel concierge service.'
        ],
        additionalPerks: [
            '$100 annual travel credit for airline tickets/baggage fees.',
            'Global Entry/TSA PreCheck credit.',
            'No foreign transaction fees.',
            'Comprehensive travel/purchase protection.'
        ],
        bestFor: 'Global travelers wanting broad lounge access, strong earning on travel, and no foreign fees.',
        // Table Data
        annualFeeTable: '$395',
        loungeAccessTable: 'LoungeKey lounges',
        welcomeBonusTable: '50,000 points',
        bestForTable: 'International travelers',
        schema: schemaCard10
    }
];


// --- Schema Data (Inline for Lounge Access Cards Page) ---
const siteUrl = "https://www.travelcardinsider.com"; // *** REPLACE IF NEEDED ***
const pageUrl = `${siteUrl}/lounge/best-lounge-access-cards-2025`; // *** USE CORRECT PAGE PATH ***
const logoUrl = `${siteUrl}/logo-optimized.png`; // *** Use your actual logo URL ***
const heroImageUrl = `${siteUrl}/pexels-connor-danylenko-534256-2612117.jpg`; // *** Use correct hero image ***
const dateModifiedISO = new Date().toISOString();

// Define schema array using imported schemas (placeholders, user must create these)
const schemaImports = [
    schemaCard1, schemaCard2, schemaCard3, schemaCard4, schemaCard5,
    schemaCard6, schemaCard7, schemaCard8, schemaCard9, schemaCard10
];

const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
        schemaOrg,    // Assuming schemaOrg defined in '@/schemas/organization.json'
        schemaWebsite, // Assuming schemaWebsite defined in '@/schemas/website.json'
        { // CollectionPage specific to this page
            "@type": "CollectionPage",
            "@id": pageUrl,
            "url": pageUrl,
            "name": "TravelCardInsider - Best Lounge Access Travel Credit Cards 2025",
            "headline": "Discover the Best 10 Lounge Access Travel Credit Cards of 2025",
            "description": "Compare top travel credit cards with premium lounge access for 2025. Enjoy Priority Pass, Centurion Lounges, and airline-specific lounge benefits.",
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
                "name": "Top 10 Lounge Access Travel Credit Cards 2025",
                "numberOfItems": cardsData.length, // Use cardsData length
                "itemListOrder": "https://schema.org/ItemListOrderUnordered",
                "itemListElement": cardsData.map((card, index) => ({
                    "@type": "ListItem",
                    "position": index + 1,
                    // Assume each imported schema has an @id, or generate one
                    "item": { "@id": schemaImports[index]?.['@id'] || `${pageUrl}#${card.id}` }
                 }))
            }
        },
        // Spread all imported schemas into the graph
        ...schemaImports
    ]
};


// --- Rating Tooltip Content (Adjusted for lounge access focus) ---
const ratingCriteria = [
    'Lounge Access Quality & Network',
    'Welcome Bonus & Value',
    'Travel Credits & Perks',
    'Annual Fee & Justification',
    'Earning Rates & Redemption'
 ];

// *** Component Function ***
export default function BestLoungeAccessCardsPage() { // Renamed component function
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
                 <title>Best 10 Lounge Access Travel Credit Cards of 2025 | TravelCardInsider</title>
                 <meta name="description" content="Compare the top travel credit cards with lounge access for 2025. Maximize rewards, enjoy premium perks, and unlock exclusive lounge privileges."/>
                 <link rel="canonical" href={pageUrl}/>
                 <link
                     rel="preload"
                         as="image"
                     href="/pexels-connor-danylenko-534256-2612117.webp"
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
                     <Image alt="Airport lounge view" src="/pexels-janetrangdoan-1024248.webp" layout="fill" objectFit="cover" objectPosition="center center" quality={80} priority className={styles.heroBackgroundImage} />
                    <div className={styles.heroOverlay}></div>
                    <div className={styles.heroContent}>
                        <h1 className={styles.heroTitle}>Discover the Best 10 Lounge Access Travel Credit Cards of 2025</h1>
                        <p className={styles.heroDescription}>Compare top-rated travel credit cards, maximize rewards, and unlock exclusive lounge access for your next adventure. Whether you’re a frequent flyer, luxury traveler, or budget explorer, find the perfect card to suit your needs.</p>
                        <div className={styles.heroCta}><a href="/compare" className={`${styles.ctaButton} ${styles.ctaPrimary}`}>Compare Now</a></div>
                        {/* Add disclaimer if needed */}
                    </div>
                </section>

                {/* --- Comparison Table Section --- */}
                <section id="comparison-table" className={styles.comparisonSection}>
                     <h2 className={styles.sectionTitle}>Top 10 Lounge Access Credit Cards Comparison</h2>
                    <div className={styles.tableResponsive}>
                        <table className={styles.comparisonTable}>
                            <thead>
                                <tr>
                                    {/* Headers from HTML */}
                                    <th>Card Name</th>
                                    <th>Annual Fee</th>
                                    <th>Lounge Access</th>
                                    <th>Welcome Bonus</th>
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
                                         <td data-label="Lounge Access">{card.loungeAccessTable}</td>
                                         <td data-label="Welcome Bonus">{card.welcomeBonusTable}</td>
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
                             // Added conditional rendering for the Radisson card which was missing details
                             card.id !== 'radisson-rewards-premier' ? (
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
                             ) : null // Don't render detailed section if card data was missing in source
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