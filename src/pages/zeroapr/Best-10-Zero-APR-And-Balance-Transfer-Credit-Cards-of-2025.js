// File: pages/zeroapr/index.js

// !!! WARNING: THIS FILE CONTAINS PLACEHOLDER DATA/URLs/DIMENSIONS !!!
// !!! YOU MUST REPLACE ALL PLACEHOLDERS MARKED WITH '!!!' BEFORE DEPLOYMENT !!!
// !!! Other PageSpeed issues require fixes in CSS, layout files, Header component, etc. !!!
import React, { useState, useEffect, useCallback, useRef } from 'react';
import React from 'react';
import Head from 'next/head';
import Image from 'next/image'; // Using Next.js Image component
import Link from 'next/link';   // Using Next.js Link component
// !!! Adjust path if your CSS Module file is located elsewhere !!!
import styles from '../../styles/ZeroAprIndex.module.css';
import Header from '../../components/Header'; // Assuming path is correct
import Footer from '../../components/Footer'; // Assuming path is correct


// --- COMPLETE Card Data (VERIFY ALL DETAILS & REPLACE PLACEHOLDERS!) ---
const cardsData = [
    {
        id: 'chase-freedom-unlimited',
        name: 'Chase Freedom Unlimited®',
        tciRating: '7.5',
        applyUrl: '#', // *** REPLACE: Affiliate Link ***
        learnMoreUrl: '/reviews/chase-freedom-unlimited', // *** REPLACE: Internal Link ***
        ratesFeesUrl: 'https://sites.chase.com/services/creatives/pricingandterms.html/content/dam/pricingandterms/LGC56029.html',
        imageUrl: '/freedom_unlimited_card_alt (1).png',
        imageAlt: 'Chase Freedom Unlimited® Card',
        imageWidth: 250, // *** REPLACE: Actual Width ***
        imageHeight: 158, // *** REPLACE: Actual Height ***
        bonus: 'Earn an additional 1.5% cash back on everything you buy (up to $20,000 spent in the first year). That’s up to $300 in extra cash back!',
        earningRates: [ '5% cash back on travel purchased through Chase Ultimate Rewards®.', '3% cash back on dining at restaurants and drugstores.', '1.5% cash back on all other purchases.' ],
        keyFeatures: [ '0% Intro APR for 15 months on purchases and balance transfers.', 'Points are worth 25% more when redeemed for travel through Chase Ultimate Rewards®.', 'No annual fee.' ],
        additionalPerks: [ 'Trip cancellation/interruption insurance.', 'Purchase protection for new purchases.', 'Free access to your credit score with Credit Journey.' ],
        bestFor: 'Everyday spenders looking for versatile cash-back rewards and those planning large purchases or balance transfers.',
        introApr: '0% for 15 months', balanceTransferFee: '3% (within 60 days), 5% thereafter', rewards: '5% travel, 3% dining & drugstores, 1.5% on all else', annualFee: '$0',
    },
    {
        id: 'us-bank-altitude-connect',
        name: 'U.S. Bank Altitude® Connect Visa Signature® Card',
        tciRating: '8.2',
        applyUrl: '#', // *** REPLACE: Affiliate Link ***
        learnMoreUrl: '/reviews/us-bank-altitude-connect', // *** REPLACE: Internal Link ***
        ratesFeesUrl: 'https://onboarding.usbank.com/consumer/cards/8BB5BD89H1/18569/87702/start',
        imageUrl: '/photo-altitude-connect-consumer.png',
        imageAlt: 'U.S. Bank Altitude® Connect Visa Signature® Card',
        imageWidth: 250, // *** REPLACE: Actual Width ***
        imageHeight: 158, // *** REPLACE: Actual Height ***
        bonus: 'Earn 50,000 bonus points after spending $2,000 in the first 120 days. <em>(Valued at $500 in travel or statement credits).</em>', // Keep <em> tag for styling
        earningRates: [ '5X points on prepaid hotels and car rentals booked directly in the Altitude Rewards Center.', '4X points on travel and gas station purchases.', '2X points on dining, grocery stores, and streaming services.', '1X points on all other purchases.' ],
        keyFeatures: [ '0% Intro APR for 12 months on balance transfers.', 'Points never expire as long as the account remains open and in good standing.', 'No foreign transaction fees.', 'Automatic $30 annual credit for streaming services like Netflix and Spotify.' ],
        additionalPerks: [ 'Cell phone protection when you pay your monthly bill with the card.', 'Travel and emergency assistance services.', 'Visa Signature® concierge services.' ],
        bestFor: 'Travelers and commuters who want high rewards on travel, gas, and streaming services, with no foreign transaction fees.',
        introApr: '0% for 12 billing cycles', balanceTransferFee: '3% (min $5)', rewards: '5x hotels & car rentals, 4x travel & gas, 2x dining', annualFee: '$0',
    },
    {
        id: 'citi-custom-cash',
        name: 'Citi Custom Cash® Card',
        tciRating: '7.5',
        applyUrl: '#', // *** REPLACE: Affiliate Link ***
        learnMoreUrl: '/reviews/citi-custom-cash', // *** REPLACE: Internal Link ***
        ratesFeesUrl: 'https://online.citi.com/US/ag/cards/displayterms?app=UNSOL&HKOP=541175b33e25f6837a0d7af4ba29114f264447b80dcde5f6be6db7d02fed5901',
        imageUrl: '/download.png',
        imageAlt: 'Citi Custom Cash® Card',
        imageWidth: 250, // *** REPLACE: Actual Width ***
        imageHeight: 158, // *** REPLACE: Actual Height ***
        bonus: 'Earn $200 cash back after spending $1,500 on purchases in the first 3 months of account opening.',
        earningRates: [ '5% cash back on your top eligible spend category each billing cycle (up to $500 in spending).', '1% cash back on all other purchases.' ],
        keyFeatures: [ 'No annual fee, making it ideal for cost-conscious users.', '0% intro APR on balance transfers and purchases for the first 15 months. After that, a variable APR applies.', 'Redeem cash back as a statement credit or direct deposit.' ],
        additionalPerks: [ 'Automatic category adjustment ensures you maximize cash back in the category you spend the most on each cycle.', 'Access to Citi Entertainment® for exclusive events and ticket presales.', 'No foreign transaction fees, perfect for travel and international purchases.' ],
        bestFor: 'Individuals who want flexible rewards based on their spending habits and prefer a no-annual-fee card with a strong cash-back program.',
        introApr: '0% for 15 months', balanceTransferFee: '5% (min $5)', rewards: '5% on top category (up to $500/month), 1% all else', annualFee: '$0',
    },
    {
        id: 'bofa-travel-rewards',
        name: 'Bank of America® Travel Rewards Credit Card',
        tciRating: '7.4',
        applyUrl: '#', // *** REPLACE: Affiliate Link ***
        learnMoreUrl: '/reviews/bofa-travel-rewards', // *** REPLACE: Internal Link ***
        ratesFeesUrl: 'https://www.bankofamerica.com/credit-cards/terms-and-conditions/?campaignid=4071156&productoffercode=MG&locale=en_US',
        imageUrl: '/8blm_trvsigcm_v_250x158.png',
        imageAlt: 'Bank of America® Travel Rewards Credit Card',
        imageWidth: 250, // *** REPLACE: Actual Width ***
        imageHeight: 158, // *** REPLACE: Actual Height ***
        bonus: 'Earn 25,000 online bonus points after making at least $1,000 in purchases in the first 90 days of account opening. <em>(Valued at $250 as a statement credit toward travel purchases).</em>',
        earningRates: [ '1.5 points per dollar on every purchase, with no caps or expiration.', 'Preferred Rewards members can earn up to 2.62 points per dollar.' ],
        keyFeatures: [ 'No annual fee, making it ideal for budget-conscious travelers.', '0% intro APR on purchases for the first 18 billing cycles (variable APR applies thereafter).', 'No foreign transaction fees, perfect for international travel.' ],
        additionalPerks: [ 'Redeem points for travel expenses like flights, hotels, vacation packages, or car rentals.', 'Travel insurance and protections, including trip cancellation and delay coverage.', 'Access to Bank of America’s Preferred Rewards program for increased earning potential.' ],
        bestFor: 'Travelers looking for a no-annual-fee card with flexible, easy-to-redeem rewards and no foreign transaction fees.',
        introApr: '0% for 15 billing cycles', balanceTransferFee: '3% (min $10)', rewards: '1.5 points per $1 on all purchases', annualFee: '$0',
    },
    {
        id: 'discover-it-miles',
        name: 'Discover it® Miles',
        tciRating: '7.0',
        applyUrl: '#', // *** REPLACE: Affiliate Link ***
        learnMoreUrl: '/reviews/discover-it-miles', // *** REPLACE: Internal Link ***
        ratesFeesUrl: 'https://www.discovercard.com/application/website/ratesrewards?srcCde=GJX4&adobe_mc=TS%3D1740315096%7CMCMID%3D39379935660807998981588704922154453327%7CMCORGID%3D0D6C4673527839230A490D45%2540AdobeOrg&sv_session_undefined=true&_gl=1*p1s8lx*_gcl_au*MTYyMTU5ODAxMS4xNzQwMzE1MDcw*_ga*MTk0MTA3MDUwOC4xNzQwMzE1MDcx*_ga_3MJNPV4VSE*MTc0MDMxNTA3MC4xLjEuMTc0MDMxNTA5NC4zNi4wLjA.',
        imageUrl: '/cardart-travel-beachcard-620-382.webp',
        imageAlt: 'Discover it® Miles',
        imageWidth: 620, // *** REPLACE: Actual Width ***
        imageHeight: 382, // *** REPLACE: Actual Height ***
        bonus: 'Discover will automatically match all the miles you’ve earned at the end of your first year. <em>(For example, if you earn 35,000 miles, you’ll get 70,000 miles total).</em>',
        earningRates: [ '1.5 miles per dollar on every purchase, with no limit on how much you can earn.', 'Bonus miles matched at the end of the first year, effectively doubling your earnings.' ],
        keyFeatures: [ 'No annual fee, making it a cost-effective travel card.', '0% intro APR on purchases for the first 15 months (variable APR applies thereafter).', 'No foreign transaction fees, perfect for international travel.' ],
        additionalPerks: [ 'Redeem miles for travel expenses like flights, hotels, rideshares, and more.', 'Flexible redemption: $1 in travel credit = 100 miles.', 'Free access to your FICO® Credit Score online.', 'Identity Theft Protection alerts and Freeze It® feature to instantly stop new account activity.' ],
        bestFor: 'Travelers who value simplicity, no annual fees, and flexible mile redemption options with a first-year earning boost.',
        introApr: '0% for 15 months', balanceTransferFee: '3% (then up to 5%)', rewards: '1.5x miles on every purchase', annualFee: '$0',
    },
     {
        id: 'wells-fargo-active-cash',
        name: 'Wells Fargo Active Cash® Card',
        tciRating: '7.8',
        applyUrl: '#', // *** REPLACE: Affiliate Link ***
        learnMoreUrl: '/reviews/wells-fargo-active-cash', // *** REPLACE: Internal Link ***
        ratesFeesUrl: 'https://www.wellsfargo.com/credit-cards/active-cash/terms/?FPID=0126D7I6F40000&product_code=CC&subproduct_code=AC&cx_nm=CXNAME_CSMPD&sub_channel=SEO&vendor_code=G&refdmn=www.google.com&_gl=1*1isihgp*_gcl_au*OTk5NTUyMzU3LjE3NDAzMTU0NDM.*_ga*NjU1MzIyNC4xNzQwMzE1NDQz*_ga_7JXJJ2JF12*MTc0MDMxNTQ0My4xLjAuMTc0MDMxNTQ0My42MC4wLjA.',
        imageUrl: '/WF_ActiveCash_VS_Collateral_Front_RGB.png',
        imageAlt: 'Wells Fargo Active Cash® Card',
        imageWidth: 250, // *** REPLACE: Actual Width ***
        imageHeight: 158, // *** REPLACE: Actual Height ***
        bonus: 'Earn a $200 cash rewards bonus after spending $1,000 in purchases in the first 3 months.',
        earningRates: [ 'Unlimited 2% cash rewards on all purchases.', 'No categories or caps to worry about – consistent earnings across all spending.' ],
        keyFeatures: [ '0% intro APR for 15 months from account opening on purchases and qualifying balance transfers (3% intro balance transfer fee, then up to 5%).', 'Variable APR applies after the intro period (currently 20.24%, 25.24%, or 29.99%).', 'No annual fee, offering excellent value for everyday spenders.', 'Cell phone protection: Get up to $600 in coverage against damage or theft (subject to a $25 deductible) when you pay your monthly cell phone bill with the card.' ],
        additionalPerks: [ 'Access to Wells Fargo’s Rewards platform for redeeming cash rewards.', 'Enjoy a seamless and secure digital wallet experience with tap-to-pay technology.', 'No foreign transaction fees.', 'Zero Liability Protection for unauthorized transactions.' ],
        bestFor: 'Consumers looking for a simple, no-hassle card with unlimited cash rewards and added benefits like cell phone protection.',
        introApr: '0% for 15 months', balanceTransferFee: '3% (first 120 days), then up to 5%', rewards: '2% cash rewards on every purchase', annualFee: '$0',
    },
    {
        id: 'blue-cash-everyday',
        name: 'Blue Cash Everyday® Card from American Express',
        tciRating: '7.7',
        applyUrl: '#', // *** REPLACE: Affiliate Link ***
        learnMoreUrl: '/reviews/blue-cash-everyday', // *** REPLACE: Internal Link ***
        ratesFeesUrl: 'https://www.americanexpress.com/us/credit-cards/card-application/apply/prospect/terms/blue-cash-everyday-credit-card/25330-10-0#FeeTable',
        imageUrl: '/NUS000000305_480x304_straight_withname.avif',
        imageAlt: 'Blue Cash Everyday® Card from American Express',
        imageWidth: 480, // *** REPLACE: Actual Width ***
        imageHeight: 304, // *** REPLACE: Actual Height ***
        bonus: 'Earn a $200 statement credit after spending $2,000 in purchases in the first 6 months.',
        earningRates: [ '3% cash back at U.S. supermarkets (up to $6,000 per year in purchases, then 1%).', '3% cash back at U.S. gas stations (up to $6,000 per year in purchases, then 1%).', '3% cash back on U.S. online retail purchases (up to $6,000 per year in purchases, then 1%).', '1% cash back on other purchases.' ],
        keyFeatures: [ '0% intro APR on purchases and balance transfers for 15 months (variable APR applies thereafter: 19.24% - 29.99%).', 'No annual fee, making it a cost-effective rewards card.', 'Earn cash back in the form of Reward Dollars that can be redeemed as a statement credit.' ],
        additionalPerks: [ 'Purchase protection for eligible items purchased with the card.', 'Car rental loss and damage insurance for eligible rentals.', 'Plan It®: Pay for large purchases over time with no interest, only a fixed fee.', 'Access to exclusive American Express Experiences and events.' ],
        bestFor: 'Individuals seeking a no-annual-fee card with competitive cash back rewards on groceries, gas, and online shopping.',
        introApr: '0% for 15 months', balanceTransferFee: '$5 or 3% of the transfer', rewards: '3% at supermarkets, gas, and online retail', annualFee: '$0',
    },
    {
        id: 'citi-diamond-preferred',
        name: 'Citi® Diamond Preferred® Card',
        tciRating: '6.5',
        applyUrl: '#', // *** REPLACE: Affiliate Link ***
        learnMoreUrl: '/reviews/citi-diamond-preferred', // *** REPLACE: Internal Link ***
        ratesFeesUrl: 'https://online.citi.com/US/ag/cards/displayterms?app=UNSOL&HKOP=608d295cca6a832d9455f97709fe858e684350d1359860de82b2b8a07336a954',
        imageUrl: '/download (1).png',
        imageAlt: 'Citi® Diamond Preferred® Card',
        imageWidth: 250, // *** REPLACE: Actual Width ***
        imageHeight: 158, // *** REPLACE: Actual Height ***
        bonus: 'Enjoy 0% Intro APR on balance transfers for 21 months from the date of first transfer and 0% Intro APR on purchases for 12 months from account opening. After that, a variable APR of 17.99% - 28.74% applies.',
        earningRates: [ 'No rewards program (ideal for those focused on balance transfers or low interest rates).' ],
        keyFeatures: [ '0% Intro APR on balance transfers for 21 months, giving ample time to pay off transferred balances.', 'No annual fee, helping you save even more.', 'Access to the Citi Entertainment program for exclusive event and concert ticket access.', 'Balance transfer fee: $5 or 5% of each transfer, whichever is greater.' ],
        additionalPerks: [ 'Contactless pay for quick and secure transactions.', '24/7 customer service for any issues or questions.', 'Protection benefits like $0 liability for unauthorized charges.', 'Free access to your FICO® Score online.' ],
        bestFor: 'Consumers looking for a long 0% intro APR on balance transfers to pay off debt without rewards or added costs.',
        introApr: '0% for 21 months', balanceTransferFee: '5% (min $5)', rewards: 'No rewards program', annualFee: '$0',
    },
    {
        id: 'wells-fargo-reflect',
        name: 'Wells Fargo Reflect® Card',
        tciRating: '6.6',
        applyUrl: '#', // *** REPLACE: Affiliate Link ***
        learnMoreUrl: '/reviews/wells-fargo-reflect', // *** REPLACE: Internal Link ***
        ratesFeesUrl: 'https://www.wellsfargo.com/credit-cards/reflect-visa/terms/?FPID=013000IGF80000&product_code=CC&subproduct_code=VV&cx_nm=CXNAME_CSMPD&sub_channel=SEO&vendor_code=G&refdmn=www.google.com&_gl=1*z7r3eu*_gcl_au*OTk5NTUyMzU3LjE3NDAzMTU0NDM.*_ga*NjU1MzIyNC4xNzQwMzE1NDQz*_ga_7JXJJ2JF12*MTc0MDMxNTQ0My4xLjEuMTc0MDMxNTgwNS42MC4wLjA.',
        imageUrl: '/Reflect_homepage_m.png',
        imageAlt: 'Wells Fargo Reflect® Card',
        imageWidth: 250, // *** REPLACE: Actual Width ***
        imageHeight: 158, // *** REPLACE: Actual Height ***
        bonus: 'Enjoy an introductory 0% APR for up to 21 months from account opening on purchases and qualifying balance transfers (0% intro APR for 18 months, with the possibility of extending to 21 months with on-time minimum payments).',
        earningRates: [],
        keyFeatures: [ '0% Intro APR for up to 21 months on purchases and balance transfers.', 'Variable APR of 17.99% - 29.74% applies after the intro period.', 'Balance transfer fee: $5 or 3% of the amount transferred, whichever is greater, for 120 days. After that, up to 5%.', 'No annual fee, making it a cost-effective option for managing debt.' ],
        additionalPerks: [ 'Cell phone protection when you pay your monthly bill with the card.', 'Access to My Wells Fargo Deals for cash back opportunities at popular retailers.', 'Zero Liability Protection for unauthorized transactions.', '24/7 customer service for support and inquiries.' ],
        bestFor: 'Individuals looking for one of the longest 0% APR intro periods on the market for balance transfers and purchases.',
        introApr: '0% for 18 months (extendable by 3 months)', balanceTransferFee: '3% (first 120 days), then up to 5%', rewards: 'No rewards program', annualFee: '$0',
    },
     {
        id: 'us-bank-cash-plus',
        name: 'U.S. Bank Cash+® Visa Signature® Card',
        tciRating: '7.4',
        applyUrl: '#', // *** REPLACE: Affiliate Link ***
        learnMoreUrl: '/reviews/us-bank-cash-plus', // *** REPLACE: Internal Link ***
        ratesFeesUrl: 'https://onboarding.usbank.com/consumer/cards/WRH8D23H2R/8069/86937/start',
        imageUrl: '/Cash+_Front_Angle_Reflection.png',
        imageAlt: 'U.S. Bank Cash+® Visa Signature® Card',
        imageWidth: 250, // *** REPLACE: Actual Width ***
        imageHeight: 158, // *** REPLACE: Actual Height ***
        bonus: 'Earn $200 after spending $1,000 in eligible purchases within the first 120 days of account opening.',
        earningRates: [ '5% cash back on your first $2,000 in combined eligible purchases each quarter in two categories you choose.', '2% cash back on one everyday category, like gas stations, grocery stores, or restaurants.', '1% unlimited cash back on all other purchases.' ],
        keyFeatures: [ 'No annual fee, making it a cost-effective option for maximizing rewards.', '0% introductory APR for 15 months on purchases and balance transfers, followed by a variable APR of 19.24% - 29.24%.', 'Customizable cash-back categories for maximum flexibility.' ],
        additionalPerks: [ 'Zero fraud liability for unauthorized transactions.', 'Roadside assistance and travel accident insurance.', 'Extended warranty protection and purchase security.', 'Access to the U.S. Bank Mobile App for account management and rewards tracking.' ],
        bestFor: 'Customers who want to customize their cash-back rewards and maximize savings on categories that matter most to them.',
        introApr: '0% for 15 months', balanceTransferFee: '3% (min $5)', rewards: '5% cash back on two chosen categories', annualFee: '$0',
    }
];


// --- Fully Optimized Structured Data (Schema) ---
// *** Replace yourdomain.com and verify/update all URLs ***
const siteUrl = "https://www.travelcardinsider.com";
const pageUrl = `${siteUrl}/premium-zero-apr-balance-transfer`; // *** Adjust if path is different ***
const logoUrl = `${siteUrl}/logo-optimized.png`; // *** Use your actual logo URL ***
const heroImageUrl = `${siteUrl}/0apr-hero.jpg`; // *** Use your actual hero image URL ***

// Get current date in ISO format (using context provided)
const dateModifiedISO = new Date("2025-04-05T11:46:44+05:30").toISOString();

const schemaData = {
    "@context": "https://schema.org",
    "@graph": [ // Use @graph for multiple top-level entities
        {
            "@type": "Organization",
            "@id": `${siteUrl}/#organization`, // Define Organization once
            "name": "TravelCardInsider",
            "url": siteUrl,
            "logo": { "@type": "ImageObject", "url": logoUrl, "width": 600, "height": 60 }, // Adjust dimensions if needed
            "sameAs": [ // *** Add your actual social media URLs ***
                "https://www.facebook.com/YourPage",
                "https://twitter.com/YourHandle",
                "https://www.instagram.com/YourProfile"
            ]
        },
        {
            "@type": "WebSite",
            "@id": `${siteUrl}/#website`, // Define WebSite once
            "url": siteUrl,
            "name": "TravelCardInsider",
            "publisher": { "@id": `${siteUrl}/#organization` }
            // Add SearchAction if applicable
        },
        {
            "@type": "CollectionPage", // The main entity for this specific page
            "@id": pageUrl, // Use the page URL as the ID
            "url": pageUrl,
            "name": "Premier 0% APR & Balance Transfer Credit Cards 2025 | TravelCardInsider",
            "headline": "Discover the Best 10 0% APR And Balance Transfer Credit Cards of 2025",
            "description": "Discover expertly curated 0% APR and balance transfer credit cards for 2025. Compare interest-free offers, rewards, and benefits to save money.",
            "inLanguage": "en-US",
            "isPartOf": { "@id": `${siteUrl}/#website` },
            "mainEntityOfPage": { "@type": "WebPage", "@id": pageUrl },
            "datePublished": "2025-01-15", // *** Set your initial publication date ***
            "dateModified": dateModifiedISO, // Use current ISO date
            "author": { "@id": `${siteUrl}/#organization` },
            "publisher": { "@id": `${siteUrl}/#organization` },
            "image": heroImageUrl, // Main image for the page
            "mainEntity": {
                "@type": "ItemList",
                "name": "Featured 0% APR & Balance Transfer Credit Cards",
                "numberOfItems": cardsData.length,
                "itemListOrder": "https://schema.org/ItemListOrderUnordered",
                "itemListElement": cardsData.map((card, index) => {
                    let offerDesc = `${card.introApr} on purchases & balance transfers.`;
                    if (card.bonus?.toLowerCase().includes('bonus') || card.bonus?.toLowerCase().includes('offer')) {
                        const bonusSentence = (card.bonus.split('.')[0] || card.bonus.split('!')[0] || card.bonus).replace(/<[^>]*>/g, ''); // Strip potential HTML tags for description
                        offerDesc += ` ${bonusSentence}.`;
                    }
                    if (card.annualFee === '$0') { offerDesc += " $0 annual fee."; }
                     else { offerDesc += ` ${card.annualFee} annual fee.`; }

                    // Basic brand extraction - refine if needed
                    const brandName = card.name.includes('American Express') ? 'American Express' : card.name.includes('Chase') ? 'Chase' : card.name.includes('Citi') ? 'Citi' : card.name.includes('U.S. Bank') ? 'U.S. Bank' : card.name.includes('Discover') ? 'Discover' : card.name.includes('Bank of America') ? 'Bank of America' : card.name.includes('Wells Fargo') ? 'Wells Fargo' : 'Financial Institution';

                    return {
                        "@type": "ListItem",
                        "position": index + 1,
                        "item": {
                            "@type": "CreditCard",
                            "name": card.name,
                            // More concise description for list view
                            "description": `Offers ${card.introApr} intro APR. ${card.rewards ? 'Key reward: ' + card.rewards + '.' : ''} ${card.bestFor.split('.')[0]}.`,
                            "url": `${siteUrl}${card.learnMoreUrl}`, // URL to YOUR details page
                            "image": `${siteUrl}${card.imageUrl}`,
                            "brand": { "@type": "Organization", "name": brandName },
                            "feesAndCommissionsSpecification": [
                                { "@type": "CompoundPriceSpecification", "name": "Annual Fee", "price": card.annualFee === '$0' ? "0.00" : card.annualFee.replace('$', ''), "priceCurrency": "USD" },
                                { "@type": "CompoundPriceSpecification", "name": "Balance Transfer Fee", "description": card.balanceTransferFee }
                            ],
                            "offers": {
                                "@type": "Offer",
                                "name": `${card.name} - 0% Intro APR Offer`,
                                "description": offerDesc.trim(),
                                "url": card.applyUrl, // *** ACTUAL AFFILIATE APPLY LINK ***
                                "price": card.annualFee === '$0' ? "0.00" : card.annualFee.replace('$', ''),
                                "priceCurrency": "USD",
                                "category": "Consumer credit card",
                                "areaServed": { "@type": "Country", "name": "US" },
                                "availability": "https://schema.org/OnlineOnly",
                                "eligibleCustomerType": "https://schema.org/Person",
                                "offeredBy": { "@type": "Organization", "name": brandName }
                            }
                        }
                    };
                })
            }
        }
    ]
};
const ratingCriteria = [
    'Rewards & multipliers',
    'Fees & sign-up bonus',
    'Travel perks & lounge access', // Adjust if not relevant to 0% APR cards
    'Redemption flexibility',      // Adjust if not relevant
    'User experience & synergy' // Adjust if not relevant
];


export default function ZeroAprPremiumPage() {
    // State for the currently active tooltip
    const [activeTooltip, setActiveTooltip] = useState(null); // null or { id: string, rating: string, top: number, left: number }
    const tooltipRef = useRef(null); // Ref for the tooltip element

    // Function to handle info icon click
    const handleIconClick = (event, card) => {
        event.preventDefault(); // Prevent default anchor behavior if using <a>
        event.stopPropagation(); // Stop click from immediately closing tooltip

        // If clicking the *same* icon that's already open, close it
        if (activeTooltip && activeTooltip.id === card.id) {
            setActiveTooltip(null);
        } else {
            // Position near the click event coordinates
            // NOTE: This simple pageX/Y might have issues with complex layouts or scrolling.
            // A library or getBoundingClientRect calculation is more robust.
            const top = event.pageY + 10;
            const left = event.pageX + 10;

            setActiveTooltip({
                id: card.id,
                rating: card.tciRating,
                top: top,
                left: left,
            });
        }
    };

    // Function to close tooltip
    const closeTooltip = useCallback(() => {
        setActiveTooltip(null);
    }, []);

    // Effect to add/remove global click listener for closing tooltip
    useEffect(() => {
        // Only add listener if tooltip is visible
        if (!activeTooltip) {
            return;
        }

        const handleClickOutside = (event) => {
            // Check if the click is outside the tooltip element itself
            if (tooltipRef.current && !tooltipRef.current.contains(event.target)) {
                 closeTooltip();
            }
        };

        // Add listener
        document.addEventListener('mousedown', handleClickOutside);

        // Cleanup function: remove listener when component unmounts or tooltip closes
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
        }, [activeTooltip, closeTooltip]); // Dependency array
    }


export default function ZeroAprPremiumPage() {
    // Add state/effect hooks here if calculator or other JS interactivity is needed

    return (
        <>
        <Header /> {/* Assuming Header component is set up correctly */}
            <Head>
                 {/* --- Standard Meta/Link/Schema Tags --- */}
                 <title>Premier 0% APR & Balance Transfer Cards 2025 | TravelCardInsider</title>
                 <meta name="description" content="Discover expertly curated 0% APR and balance transfer credit cards for 2025. Compare interest-free offers, rewards, and benefits to save money."/>
                 <link rel="canonical" href={pageUrl}/>
                 {/* Add other relevant meta tags (OG, Twitter) */}
                  <meta property="og:title" content="Discover the Best 10 0% APR And Balance Transfer Credit Cards of 2025 | TravelCardInsider" />
                  <meta property="og:description" content="Discover expertly curated 0% APR and balance transfer credit cards for 2025. Compare interest-free offers, rewards, and benefits to save money." />
                  <meta property="og:url" content={pageUrl} />
                  <meta property="og:image" content={heroImageUrl} /> {/* *** Use actual hero image *** */}
                  <meta property="og:type" content="website" />
                  {/* Add Twitter card meta tags */}
                 {/* Add Favicons if not global */}
                  {/* Preload critical fonts */}
        <link rel="preload" href="/fonts/Roboto_Condensed-Regular.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/Roboto_Condensed-bold.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/playfair-display-regular.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/playfair-display-bold.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />

                 <script
                     type="application/ld+json"
                     dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
                 />
                 {/* --- End Standard Meta/Link/Schema Tags --- */}
            </Head>

            <main className={styles.pageWrapper}>

                {/* --- Hero Section --- */}
                <section className={styles.hero}>
                     <div className={styles.heroContent}>
                        <h1 className={styles.heroTitle}>
                            Unlock 0% APR & Balance Transfer Savings in 2025
                        </h1>
                        <p className={styles.heroDescription}>
                            Eliminate interest charges and simplify debt. Explore our premier selection of credit cards offering introductory 0% APR periods for purchases and balance transfers.
                        </p>
                        <div className={styles.heroCta}>
                            <a href="#comparison-table" className={`${styles.ctaButton} ${styles.ctaPrimary}`}>
                                Compare Top Cards
                            </a>
                        </div>
                        <p className={styles.heroDisclaimer}>
                            Advertiser Disclosure: We may receive compensation via links on this page. Opinions are our own. Offers are subject to change; verify terms with the issuer.
                        </p>
                    </div>
                </section>

                {/* --- Comparison Table Section --- */}
                <section id="comparison-table" className={styles.comparisonSection}>
                     <h2 className={styles.sectionTitle}>Best 10 0% APR And Balance Transfer Credit Cards of 2025</h2>
                    <div className={styles.tableResponsive}>
                        <table className={styles.comparisonTable}>
                            <thead>
                                <tr>
                                    <th>Credit Card</th>
                                    <th>Intro APR Offer</th>
                                    <th>Balance Transfer Fee</th>
                                    <th>Key Reward/Feature</th>
                                    <th>Annual Fee</th>
                                    <th>Apply / Details</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cardsData.map((card) => (
                                    <tr key={`${card.id}-table`}>
                                        <td data-label="Credit Card">
                                            <span className={styles.cardTableName}>{card.name}</span>
                                            <div className={styles.tableRating}>
                                                <svg aria-hidden="true" focusable="false" className={styles.infoIcon} width="13" height="13" viewBox="0 0 416.979 416.979"><path d="M356 61.1c-81.4-81.5-213.4-81.6-294.8-.2 -81.5 81.4-81.6 213.4-.2 294.8 81.4 81.5 213.4 81.6 294.8.2C437.3 274.6 437.4 142.6 356 61.1zM208.6 334.8c-11 0-20-9-20-20s9-20 20-20 20 9 20 20-9 20-20 20zm32.4-120.2c-11.4 6.7-12.4 14.9-12.4 38.5 -.003 1.6-.008 3.1-.017 4.7 -0.07 11.2-9.1 20.2-20.3 20.2 -0.04 0-.09 0-.13 0 -11.2-0.07-20.2-9.2-20.2-20.4 0.01-1.5 0.01-3 0.02-4.6 0.05-24.3 0.1-54.5 32.5-73.5 26-15.2 29.3-25.2 26.3-38.3 -3.6-15.4-17.7-19.4-28.6-18.1 -3.7.4-22.1 3.5-22.1 21.6 0 11.2-9.1 20.3-20.3 20.3s-20.3-9.1-20.3-20.3c0-32.6 23.9-58.1 58-62 35.2-4 65.1 16.2 72.8 49.3C297.8 181.4 256.6 205.5 241 214.6z"></path></svg>
                                                TCI Rating: <strong>{card.tciRating}</strong>/10
                                            </div>
                                        </td>
                                        <td data-label="Intro APR Offer">{card.introApr}</td>
                                        <td data-label="BT Fee">{card.balanceTransferFee}</td>
                                        <td data-label="Key Reward/Feature">{card.rewards || 'N/A'}</td>
                                        <td data-label="Annual Fee">{card.annualFee}</td>
                                        <td data-label="Apply / Details">
                                            {/* Add this wrapper div */}
                                         <div className={styles.tableActionGroup}>
                                            <a href={card.applyUrl} className={`${styles.ctaButtonSmall} ${styles.ctaApply}`} target="_blank" rel="noopener noreferrer sponsored">Apply Now</a>
                                        {/* Use actual internal link in href */}
                                                 <Link href={card.learnMoreUrl} legacyBehavior>
                                                <a className={styles.detailsLink}>Details</a>
        </Link>
         {/* Use actual rates link in href */}
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
                                     <div className={styles.cardImageContainer}>
                                         <Image
                                             src={card.imageUrl}
                                             alt={card.imageAlt}
                                             width={card.imageWidth}  // *** USE ACTUAL WIDTH ***
                                             height={card.imageHeight} // *** USE ACTUAL HEIGHT ***
                                             loading='lazy'
                                             className={styles.cardImage}
                                         />
                                     </div>
                                     <div className={styles.cardTitleGroup}>
                                        <h3 className={styles.cardTitle}>{card.name}</h3>
                                        <div className={styles.rating}>
                                            TCI Rating: <strong>{card.tciRating}</strong>/10
                                         </div>
                                     </div>
                                </div>
                                 <div className={styles.cardBody}>
                                     {/* Render bonus with dangerouslySetInnerHTML to parse <em> tag */}
                                     {card.bonus && ( <div className={`${styles.cardFeatureBlock} ${styles.bonusBlock}`}><h4>Welcome Offer</h4><p dangerouslySetInnerHTML={{ __html: card.bonus }}></p></div>)}
                                     {card.earningRates && card.earningRates.length > 0 && ( <div className={styles.cardFeatureBlock}><h4>Earning Rewards</h4><ul className={styles.featureList}>{card.earningRates.map((rate, i) => <li key={`earn-${i}`}>{rate}</li>)}</ul></div>)}
                                     {card.keyFeatures && card.keyFeatures.length > 0 && ( <div className={styles.cardFeatureBlock}><h4>Key 0% APR & Card Features</h4><ul className={styles.featureList}>{card.keyFeatures.map((feature, i) => <li key={`feature-${i}`}>{feature}</li>)}</ul></div>)}
                                     {card.additionalPerks && card.additionalPerks.length > 0 && ( <div className={styles.cardFeatureBlock}><h4>Additional Perks</h4><ul className={styles.featureList}>{card.additionalPerks.map((perk, i) => <li key={`perk-${i}`}>{perk}</li>)}</ul></div>)}
                                     <div className={styles.cardFeatureBlock}><h4>Best For</h4><p>{card.bestFor}</p></div>
                                 </div>
                                <div className={styles.cardActions}>
                                     {/* *** Use actual affiliate link in href *** */}
                                    <a href={card.applyUrl} className={`${styles.ctaButton} ${styles.ctaApply}`} target="_blank" rel="noopener noreferrer sponsored">Apply Now<span className={styles.ctaSubtext}>on issuer's secure site</span></a>
                                     {/* *** Use actual internal link in href *** */}
                                    <Link href={card.learnMoreUrl} legacyBehavior><a className={`${styles.ctaButton} ${styles.ctaSecondary}`}>Learn More</a></Link>
                                     {/* *** Use actual rates link in href *** */}
                                    <a href={card.ratesFeesUrl} className={styles.ratesFeesLink} target="_blank" rel="noopener noreferrer sponsored">See Rates & Fees</a>
                                </div>
                            </div>
                        ))}
                    </div>
                 </section>
                    <Footer /> {/* *** Add your footer component here *** */}
            </main>
        </>
    );
}