// File: pages/zeroapr/index.js

// !!! WARNING: THIS FILE CONTAINS PLACEHOLDER DATA/URLs/DIMENSIONS !!!
// !!! YOU MUST REPLACE ALL PLACEHOLDERS MARKED WITH '!!!' BEFORE DEPLOYMENT !!!
// !!! Other PageSpeed issues require fixes in CSS, layout files, Header component, etc. !!!

import React from 'react';
import Head from 'next/head';
import Image from 'next/image'; // Using Next.js Image component
import Link from 'next/link';   // Using Next.js Link component
// !!! Adjust path if your CSS Module file is located elsewhere !!!
import styles from '../../styles/ZeroAprIndex.module.css';
import Header from '../../components/Header'; // Assuming path is correct
import Footer from '../../components/Footer'; // Assuming path is correct


  
     // --- Card Data (Fully Populated - VERIFY DETAILS & REPLACE PLACEHOLDERS) ---
const cardsData = [
    {
        id: 'chase-freedom-unlimited',
        name: 'Chase Freedom Unlimited®',
        tciRating: '7.5', // Rating from detailed card section
        applyUrl: '#', // *** REPLACE with ACTUAL affiliate link ***
        learnMoreUrl: '/reviews/chase-freedom-unlimited', // *** REPLACE with actual internal link ***
        ratesFeesUrl: 'https://sites.chase.com/services/creatives/pricingandterms.html/content/dam/pricingandterms/LGC56029.html',
        imageUrl: '/freedom_unlimited_card_alt (1).png', // Path relative to public folder
        imageAlt: 'Chase Freedom Unlimited®',
        imageWidth: 250, // *** REPLACE WITH ACTUAL WIDTH ***
        imageHeight: 158, // *** REPLACE WITH ACTUAL HEIGHT ***
        bonus: 'Earn an additional 1.5% cash back on everything you buy (up to $20,000 spent in the first year). That’s up to $300 in extra cash back!',
        earningRates: [
            '5% cash back on travel purchased through Chase Ultimate Rewards®.',
            '3% cash back on dining at restaurants and drugstores.',
            '1.5% cash back on all other purchases.',
        ],
        keyFeatures: [ // Data from .card-luxury-features
            '0% Intro APR for 15 months on purchases and balance transfers.',
            'Points are worth 25% more when redeemed for travel through Chase Ultimate Rewards®.',
            'No annual fee.',
        ],
        additionalPerks: [
            'Trip cancellation/interruption insurance.',
            'Purchase protection for new purchases.',
            'Free access to your credit score with Credit Journey.',
        ],
        bestFor: 'Everyday spenders looking for versatile cash-back rewards and those planning large purchases or balance transfers.',
        // Table Data
        introApr: '0% for 15 months',
        balanceTransferFee: '3% (within 60 days), 5% thereafter',
        rewards: '5% travel, 3% dining & drugstores, 1.5% on all else',
        annualFee: '$0',
    },
    {
        id: 'us-bank-altitude-connect',
        name: 'U.S. Bank Altitude® Connect Visa Signature® Card',
        tciRating: '8.2', // Rating from detailed card section
        applyUrl: '#', // *** REPLACE with ACTUAL affiliate link ***
        learnMoreUrl: '/reviews/us-bank-altitude-connect', // *** REPLACE with actual internal link ***
        ratesFeesUrl: 'https://onboarding.usbank.com/consumer/cards/8BB5BD89H1/18569/87702/start',
        imageUrl: '/images/photo-altitude-connect-consumer.png',
        imageAlt: 'U.S. Bank Altitude® Connect Visa Signature® Card',
        imageWidth: 250, // *** REPLACE WITH ACTUAL WIDTH ***
        imageHeight: 158, // *** REPLACE WITH ACTUAL HEIGHT ***
        bonus: 'Earn 50,000 bonus points after spending $2,000 in the first 120 days. \n<em>(Valued at $500 in travel or statement credits).</em>', // Added line break from HTML structure
        earningRates: [
            '5X points on prepaid hotels and car rentals booked directly in the Altitude Rewards Center.',
            '4X points on travel and gas station purchases.',
            '2X points on dining, grocery stores, and streaming services.',
            '1X points on all other purchases.',
        ],
        keyFeatures: [ // Data from .card-luxury-features
            '0% Intro APR for 12 months on balance transfers.',
            'Points never expire as long as the account remains open and in good standing.',
            'No foreign transaction fees.',
            'Automatic $30 annual credit for streaming services like Netflix and Spotify.',
        ],
        additionalPerks: [
            'Cell phone protection when you pay your monthly bill with the card.',
            'Travel and emergency assistance services.',
            'Visa Signature® concierge services.',
        ],
        bestFor: 'Travelers and commuters who want high rewards on travel, gas, and streaming services, with no foreign transaction fees.',
         // Table Data
         introApr: '0% for 12 billing cycles',
         balanceTransferFee: '3% (min $5)',
         rewards: '5x hotels & car rentals, 4x travel & gas, 2x dining',
         annualFee: '$0', // Table says $0, detailed mentions perks that imply a fee - VERIFY
    },
    {
        id: 'citi-custom-cash',
        name: 'Citi Custom Cash® Card',
        tciRating: '7.5', // Rating from detailed card section
        applyUrl: '#', // *** REPLACE with ACTUAL affiliate link ***
        learnMoreUrl: '/reviews/citi-custom-cash', // *** REPLACE with actual internal link ***
        ratesFeesUrl: 'https://online.citi.com/US/ag/cards/displayterms?app=UNSOL&HKOP=541175b33e25f6837a0d7af4ba29114f264447b80dcde5f6be6db7d02fed5901',
        imageUrl: '/images/download.png', // Assuming this is the correct image for Citi Custom Cash
        imageAlt: 'Citi Custom Cash® Card',
        imageWidth: 250, // *** REPLACE WITH ACTUAL WIDTH ***
        imageHeight: 158, // *** REPLACE WITH ACTUAL HEIGHT ***
        bonus: 'Earn $200 cash back after spending $1,500 on purchases in the first 3 months of account opening.',
        earningRates: [
            '5% cash back on your top eligible spend category each billing cycle (up to $500 in spending).',
            '1% cash back on all other purchases.',
        ],
        keyFeatures: [ // Data from .card-luxury-features
            'No annual fee, making it ideal for cost-conscious users.',
            '0% intro APR on balance transfers and purchases for the first 15 months. After that, a variable APR applies.',
            'Redeem cash back as a statement credit or direct deposit.',
        ],
        additionalPerks: [
             'Automatic category adjustment ensures you maximize cash back in the category you spend the most on each cycle.',
             'Access to Citi Entertainment® for exclusive events and ticket presales.',
             'No foreign transaction fees, perfect for travel and international purchases.', // VERIFY this perk for this specific card
        ],
        bestFor: 'Individuals who want flexible rewards based on their spending habits and prefer a no-annual-fee card with a strong cash-back program.',
        // Table Data
        introApr: '0% for 15 months',
        balanceTransferFee: '5% (min $5)',
        rewards: '5% on top category (up to $500/month), 1% all else',
        annualFee: '$0',
    },
    {
        id: 'bofa-travel-rewards',
        name: 'Bank of America® Travel Rewards Credit Card',
        tciRating: '7.4', // Rating from detailed card section
        applyUrl: '#', // *** REPLACE with ACTUAL affiliate link ***
        learnMoreUrl: '/reviews/bofa-travel-rewards', // *** REPLACE with actual internal link ***
        ratesFeesUrl: 'https://www.bankofamerica.com/credit-cards/terms-and-conditions/?campaignid=4071156&productoffercode=MG&locale=en_US',
        imageUrl: '/images/8blm_trvsigcm_v_250x158.png',
        imageAlt: 'Bank of America® Travel Rewards Credit Card',
        imageWidth: 250, // *** REPLACE WITH ACTUAL WIDTH ***
        imageHeight: 158, // *** REPLACE WITH ACTUAL HEIGHT ***
        bonus: 'Earn 25,000 online bonus points after making at least $1,000 in purchases in the first 90 days of account opening.\n<em>(Valued at $250 as a statement credit toward travel purchases).</em>',
        earningRates: [
            '1.5 points per dollar on every purchase, with no caps or expiration.',
            'Preferred Rewards members can earn up to 2.62 points per dollar.',
        ],
        keyFeatures: [ // Data from .card-luxury-features
            'No annual fee, making it ideal for budget-conscious travelers.',
            '0% intro APR on purchases for the first 18 billing cycles (variable APR applies thereafter).', // Note: This differs from table
            'No foreign transaction fees, perfect for international travel.',
        ],
        additionalPerks: [
            'Redeem points for travel expenses like flights, hotels, vacation packages, or car rentals.',
            'Travel insurance and protections, including trip cancellation and delay coverage.',
            'Access to Bank of America’s Preferred Rewards program for increased earning potential.',
        ],
        bestFor: 'Travelers looking for a no-annual-fee card with flexible, easy-to-redeem rewards and no foreign transaction fees.',
         // Table Data
        introApr: '0% for 15 billing cycles', // Note: Different from detailed section
        balanceTransferFee: '3% (min $10)',
        rewards: '1.5 points per $1 on all purchases',
        annualFee: '$0',
    },
    {
        id: 'discover-it-miles',
        name: 'Discover it® Miles',
        tciRating: '7.0', // Rating from detailed card section
        applyUrl: '#', // *** REPLACE with ACTUAL affiliate link ***
        learnMoreUrl: '/reviews/discover-it-miles', // *** REPLACE with actual internal link ***
        ratesFeesUrl: 'https://www.discovercard.com/application/website/ratesrewards?srcCde=GJX4&adobe_mc=TS%3D1740315096%7CMCMID%3D39379935660807998981588704922154453327%7CMCORGID%3D0D6C4673527839230A490D45%2540AdobeOrg&sv_session_undefined=true&_gl=1*p1s8lx*_gcl_au*MTYyMTU5ODAxMS4xNzQwMzE1MDcw*_ga*MTk0MTA3MDUwOC4xNzQwMzE1MDcx*_ga_3MJNPV4VSE*MTc0MDMxNTA3MC4xLjEuMTc0MDMxNTA5NC4zNi4wLjA.',
        imageUrl: '/images/cardart-travel-beachcard-620-382.webp',
        imageAlt: 'Discover it® Miles',
        imageWidth: 620, // *** REPLACE WITH ACTUAL WIDTH *** (Using filename hint)
        imageHeight: 382, // *** REPLACE WITH ACTUAL HEIGHT *** (Using filename hint)
        bonus: 'Discover will automatically match all the miles you’ve earned at the end of your first year.\n<em>(For example, if you earn 35,000 miles, you’ll get 70,000 miles total).</em>',
        earningRates: [
            '1.5 miles per dollar on every purchase, with no limit on how much you can earn.',
            'Bonus miles matched at the end of the first year, effectively doubling your earnings.',
        ],
        keyFeatures: [ // Data from .card-luxury-features
             'No annual fee, making it a cost-effective travel card.',
             '0% intro APR on purchases for the first 15 months (variable APR applies thereafter).',
             'No foreign transaction fees, perfect for international travel.',
        ],
        additionalPerks: [
            'Redeem miles for travel expenses like flights, hotels, rideshares, and more.',
            'Flexible redemption: $1 in travel credit = 100 miles.',
            'Free access to your FICO® Credit Score online.',
            'Identity Theft Protection alerts and Freeze It® feature to instantly stop new account activity.',
        ],
        bestFor: 'Travelers who value simplicity, no annual fees, and flexible mile redemption options with a first-year earning boost.',
         // Table Data
        introApr: '0% for 15 months',
        balanceTransferFee: '3% (then up to 5%)',
        rewards: '1.5x miles on every purchase',
        annualFee: '$0',
    },
     {
        id: 'wells-fargo-active-cash',
        name: 'Wells Fargo Active Cash® Card',
        tciRating: '7.8', // Rating from detailed card section
        applyUrl: '#', // *** REPLACE with ACTUAL affiliate link ***
        learnMoreUrl: '/reviews/wells-fargo-active-cash', // *** REPLACE with actual internal link ***
        ratesFeesUrl: 'https://www.wellsfargo.com/credit-cards/active-cash/terms/?FPID=0126D7I6F40000&product_code=CC&subproduct_code=AC&cx_nm=CXNAME_CSMPD&sub_channel=SEO&vendor_code=G&refdmn=www.google.com&_gl=1*1isihgp*_gcl_au*OTk5NTUyMzU3LjE3NDAzMTU0NDM.*_ga*NjU1MzIyNC4xNzQwMzE1NDQz*_ga_7JXJJ2JF12*MTc0MDMxNTQ0My4xLjAuMTc0MDMxNTQ0My42MC4wLjA.',
        imageUrl: '/images/WF_ActiveCash_VS_Collateral_Front_RGB.png',
        imageAlt: 'Wells Fargo Active Cash® Card',
        imageWidth: 250, // *** REPLACE WITH ACTUAL WIDTH ***
        imageHeight: 158, // *** REPLACE WITH ACTUAL HEIGHT ***
        bonus: 'Earn a $200 cash rewards bonus after spending $1,000 in purchases in the first 3 months.',
        earningRates: [
            'Unlimited 2% cash rewards on all purchases.',
            'No categories or caps to worry about – consistent earnings across all spending.',
        ],
        keyFeatures: [ // Data from .card-luxury-features
            '0% intro APR for 15 months from account opening on purchases and qualifying balance transfers (3% intro balance transfer fee, then up to 5%).',
            'Variable APR applies after the intro period (currently 20.24%, 25.24%, or 29.99%).', // VERIFY CURRENT RATES
            'No annual fee, offering excellent value for everyday spenders.',
            'Cell phone protection: Get up to $600 in coverage against damage or theft (subject to a $25 deductible) when you pay your monthly cell phone bill with the card.',
        ],
        additionalPerks: [
            'Access to Wells Fargo’s Rewards platform for redeeming cash rewards.',
            'Enjoy a seamless and secure digital wallet experience with tap-to-pay technology.',
            'No foreign transaction fees.', // VERIFY THIS PERK
            'Zero Liability Protection for unauthorized transactions.',
        ],
        bestFor: 'Consumers looking for a simple, no-hassle card with unlimited cash rewards and added benefits like cell phone protection.',
        // Table Data
        introApr: '0% for 15 months',
        balanceTransferFee: '3% (first 120 days), then up to 5%',
        rewards: '2% cash rewards on every purchase',
        annualFee: '$0',
    },
    {
        id: 'blue-cash-everyday',
        name: 'Blue Cash Everyday® Card from American Express',
        tciRating: '7.7', // Rating from detailed card section
        applyUrl: '#', // *** REPLACE with ACTUAL affiliate link ***
        learnMoreUrl: '/reviews/blue-cash-everyday', // *** REPLACE with actual internal link ***
        ratesFeesUrl: 'https://www.americanexpress.com/us/credit-cards/card-application/apply/prospect/terms/blue-cash-everyday-credit-card/25330-10-0#FeeTable',
        imageUrl: '/images/NUS000000305_480x304_straight_withname.avif',
        imageAlt: 'Blue Cash Everyday® Card from American Express',
        imageWidth: 480, // *** REPLACE WITH ACTUAL WIDTH *** (Using filename hint)
        imageHeight: 304, // *** REPLACE WITH ACTUAL HEIGHT *** (Using filename hint)
        bonus: 'Earn a $200 statement credit after spending $2,000 in purchases in the first 6 months.',
        earningRates: [
            '3% cash back at U.S. supermarkets (up to $6,000 per year in purchases, then 1%).',
            '3% cash back at U.S. gas stations (up to $6,000 per year in purchases, then 1%).',
            '3% cash back on U.S. online retail purchases (up to $6,000 per year in purchases, then 1%).',
            '1% cash back on other purchases.',
        ],
        keyFeatures: [ // Data from .card-luxury-features
            '0% intro APR on purchases and balance transfers for 15 months (variable APR applies thereafter: 19.24% - 29.99%).', // VERIFY CURRENT RATES
            'No annual fee, making it a cost-effective rewards card.',
            'Earn cash back in the form of Reward Dollars that can be redeemed as a statement credit.',
        ],
        additionalPerks: [
            'Purchase protection for eligible items purchased with the card.',
            'Car rental loss and damage insurance for eligible rentals.',
            'Plan It®: Pay for large purchases over time with no interest, only a fixed fee.',
            'Access to exclusive American Express Experiences and events.',
        ],
        bestFor: 'Individuals seeking a no-annual-fee card with competitive cash back rewards on groceries, gas, and online shopping.',
        // Table Data
        introApr: '0% for 15 months',
        balanceTransferFee: '$5 or 3% of the transfer',
        rewards: '3% at supermarkets, gas, and online retail',
        annualFee: '$0',
    },
    {
        id: 'citi-diamond-preferred',
        name: 'Citi® Diamond Preferred® Card',
        tciRating: '6.5', // Rating from detailed card section
        applyUrl: '#', // *** REPLACE with ACTUAL affiliate link ***
        learnMoreUrl: '/reviews/citi-diamond-preferred', // *** REPLACE with actual internal link ***
        ratesFeesUrl: 'https://online.citi.com/US/ag/cards/displayterms?app=UNSOL&HKOP=608d295cca6a832d9455f97709fe858e684350d1359860de82b2b8a07336a954',
        imageUrl: '/images/download (1).png', // Assuming this is the correct image
        imageAlt: 'Citi® Diamond Preferred® Card',
        imageWidth: 250, // *** REPLACE WITH ACTUAL WIDTH ***
        imageHeight: 158, // *** REPLACE WITH ACTUAL HEIGHT ***
        bonus: 'Enjoy 0% Intro APR on balance transfers for 21 months from the date of first transfer and 0% Intro APR on purchases for 12 months from account opening. After that, a variable APR of 17.99% - 28.74% applies.', // Bonus section used for intro offer text
        earningRates: [
            'No rewards program (ideal for those focused on balance transfers or low interest rates).',
        ],
        keyFeatures: [ // Data from .card-luxury-features
            '0% Intro APR on balance transfers for 21 months, giving ample time to pay off transferred balances.',
            'No annual fee, helping you save even more.',
            'Access to the Citi Entertainment program for exclusive event and concert ticket access.',
            'Balance transfer fee: $5 or 5% of each transfer, whichever is greater.',
        ],
        additionalPerks: [
            'Contactless pay for quick and secure transactions.',
            '24/7 customer service for any issues or questions.',
            'Protection benefits like $0 liability for unauthorized charges.',
            'Free access to your FICO® Score online.',
        ],
        bestFor: 'Consumers looking for a long 0% intro APR on balance transfers to pay off debt without rewards or added costs.',
        // Table Data
        introApr: '0% for 21 months',
        balanceTransferFee: '5% (min $5)',
        rewards: 'No rewards program',
        annualFee: '$0',
    },
    {
        id: 'wells-fargo-reflect',
        name: 'Wells Fargo Reflect® Card',
        tciRating: '6.6', // Rating from detailed card section
        applyUrl: '#', // *** REPLACE with ACTUAL affiliate link ***
        learnMoreUrl: '/reviews/wells-fargo-reflect', // *** REPLACE with actual internal link ***
        ratesFeesUrl: 'https://www.wellsfargo.com/credit-cards/reflect-visa/terms/?FPID=013000IGF80000&product_code=CC&subproduct_code=VV&cx_nm=CXNAME_CSMPD&sub_channel=SEO&vendor_code=G&refdmn=www.google.com&_gl=1*z7r3eu*_gcl_au*OTk5NTUyMzU3LjE3NDAzMTU0NDM.*_ga*NjU1MzIyNC4xNzQwMzE1NDQz*_ga_7JXJJ2JF12*MTc0MDMxNTQ0My4xLjEuMTc0MDMxNTgwNS42MC4wLjA.',
        imageUrl: '/Reflect_homepage_m.png',
        imageAlt: 'Wells Fargo Reflect® Card',
        imageWidth: 250, // *** REPLACE WITH ACTUAL WIDTH ***
        imageHeight: 158, // *** REPLACE WITH ACTUAL HEIGHT ***
        bonus: 'Enjoy an introductory 0% APR for up to 21 months from account opening on purchases and qualifying balance transfers (0% intro APR for 18 months, with the possibility of extending to 21 months with on-time minimum payments).', // Bonus section used for intro offer text
        earningRates: [], // No earning rates section in HTML
        keyFeatures: [ // Data from .card-luxury-features
             '0% Intro APR for up to 21 months on purchases and balance transfers.',
             'Variable APR of 17.99% - 29.74% applies after the intro period.', // VERIFY CURRENT RATES
             'Balance transfer fee: $5 or 3% of the amount transferred, whichever is greater, for 120 days. After that, up to 5%.',
             'No annual fee, making it a cost-effective option for managing debt.',
        ],
        additionalPerks: [
            'Cell phone protection when you pay your monthly bill with the card.',
            'Access to My Wells Fargo Deals for cash back opportunities at popular retailers.',
            'Zero Liability Protection for unauthorized transactions.',
            '24/7 customer service for support and inquiries.',
        ],
        bestFor: 'Individuals looking for one of the longest 0% APR intro periods on the market for balance transfers and purchases.',
        // Table Data
        introApr: '0% for 18 months (extendable by 3 months)',
        balanceTransferFee: '3% (first 120 days), then up to 5%', // Note: Different from detailed section
        rewards: 'No rewards program',
        annualFee: '$0',
    },
     {
        id: 'us-bank-cash-plus',
        name: 'U.S. Bank Cash+® Visa Signature® Card',
        tciRating: '7.4', // Rating from detailed card section
        applyUrl: '#', // *** REPLACE with ACTUAL affiliate link ***
        learnMoreUrl: '/reviews/us-bank-cash-plus', // *** REPLACE with actual internal link ***
        ratesFeesUrl: 'https://onboarding.usbank.com/consumer/cards/WRH8D23H2R/8069/86937/start',
        imageUrl: '/images/Cash+_Front_Angle_Reflection.png',
        imageAlt: 'U.S. Bank Cash+® Visa Signature® Card',
        imageWidth: 250, // *** REPLACE WITH ACTUAL WIDTH ***
        imageHeight: 158, // *** REPLACE WITH ACTUAL HEIGHT ***
        bonus: 'Earn $200 after spending $1,000 in eligible purchases within the first 120 days of account opening.',
        earningRates: [
            '5% cash back on your first $2,000 in combined eligible purchases each quarter in two categories you choose.',
            '2% cash back on one everyday category, like gas stations, grocery stores, or restaurants.',
            '1% unlimited cash back on all other purchases.',
        ],
        keyFeatures: [ // Data from .card-luxury-features
            'No annual fee, making it a cost-effective option for maximizing rewards.',
            '0% introductory APR for 15 months on purchases and balance transfers, followed by a variable APR of 19.24% - 29.24%.', // VERIFY CURRENT RATES
            'Customizable cash-back categories for maximum flexibility.',
        ],
        additionalPerks: [
             'Zero fraud liability for unauthorized transactions.',
             'Roadside assistance and travel accident insurance.',
             'Extended warranty protection and purchase security.',
             'Access to the U.S. Bank Mobile App for account management and rewards tracking.',
        ],
        bestFor: 'Customers who want to customize their cash-back rewards and maximize savings on categories that matter most to them.',
        // Table Data
        introApr: '0% for 15 months',
        balanceTransferFee: '3% (min $5)',
        rewards: '5% cash back on two chosen categories',
        annualFee: '$0',
    }
];
  
  
  // --- Schema Data ---
  // Replace 'yourdomain.com' with your actual domain
  const schemaData = {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://www.travelcardinsider.com/0apr-balance-transfer-cards" // Use actual final URL
      },
      "headline": "Best 0% APR and Balance Transfer Credit Cards for 2025",
      "description": "Compare the best 0% APR and balance transfer credit cards for 2025. Find the top cards offering interest-free financing, rewards, and balance transfer perks.",
      "author": {
          "@type": "Organization",
          "name": "TravelCardInsider"
      },
      "datePublished": "2025-01-01", // Adjust as needed
      "dateModified": "2025-04-05", // Update with current date or dynamically
      "publisher": {
          "@type": "Organization",
          "name": "TravelCardInsider",
          "logo": {
              "@type": "ImageObject",
              "url": "https://www.travelcardinsider.com/images/logo.png", // Use actual logo URL
              "width": 600, // Adjust if needed
              "height": 60  // Adjust if needed
          }
      },
      "image": "https://www.travelcardinsider.com/images/0apr-hero.jpg", // Use actual hero image URL
      "keywords": "0% APR, balance transfer, credit cards, best credit cards, interest-free, TravelCardInsider",
      "articleSection": "Finance, Travel, Credit Cards",
      "mainEntity": {
          "@type": "ItemList",
          "name": "Top 10 Best 0% APR & Balance Transfer Credit Cards", // Adjust count if needed
          "itemListOrder": "Unordered", // Or "ItemListOrderAscending" / "ItemListOrderDescending" if ordered
          "itemListElement": cardsData.map((card, index) => ({ // Dynamically generate from data
              "@type": "ListItem",
              "position": index + 1,
              "item": {
                  "@type": "CreditCard",
                  "name": card.name,
                  "image": `https://www.travelcardinsider.com${card.imageUrl}`, // Assuming image path starts from root
                  "url": `https://www.travelcardinsider.com${card.learnMoreUrl}`, // Assuming internal page URL
                  "brand": card.name.split(' ')[0], // Simple brand extraction, improve if needed
                  "description": card.keyFeatures.join(' ') + card.bonus, // Combine key info
                  "offers": {
                      "@type": "Offer",
                      "priceCurrency": "USD",
                      "price": card.annualFee === '$0' ? "0.00" : card.annualFee.replace('$', ''), // Extract numeric fee
                      "url": card.applyUrl.startsWith('http') ? card.applyUrl : `https://www.travelcardinsider.com${card.applyUrl}`, // Use full URL
                      "availability": "https://schema.org/OnlineOnly", // Assuming online only
                      "eligibleCustomerType": "https://schema.org/Person", // More specific than EndUser
                      "interestRate": card.introApr.includes('0%') ? "0%" : undefined, // Basic check
                      // "annualPercentageRate": "19.99%", // NOTE: APR varies, hard to put static value here. Omit or use range?
                      "annualFee": card.annualFee === '$0' ? "0.00" : card.annualFee.replace('$', ''),
                      // Add aggregateRating if you have actual user ratings
                      // "aggregateRating": {
                      //   "@type": "AggregateRating",
                      //   "ratingValue": "4.6",
                      //   "reviewCount": "1520"
                      // }
                  }
              }
          }))
      }
  };
  
  
  export default function ZeroAprBalanceTransferPage() {
  
      // TODO: Add state and useEffect hooks here to handle any JS logic
      //       from the original '0% APR Index.js' (e.g., calculator, ratings popups).
  
      return (
          <>
              <Head>
                  {/* Basic Meta Tags */}
                  <meta charSet="UTF-8" />
                  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  
                  {/* Primary SEO Tags */}
                  <title>Best 0% APR and Balance Transfer Credit Cards for 2025 | TravelCardInsider</title>
                  <meta
                      name="description"
                      content="Compare the top 0% APR and balance transfer credit cards of 2025. Maximize rewards, enjoy interest-free periods, and simplify your debt payoff with our handpicked selections."
                  />
                  <meta name="keywords" content="0% APR, balance transfer, credit cards, best credit cards, interest-free" />
  
                  {/* Canonical URL (Adjust to your final page URL) */}
                  <link rel="canonical" href="https://www.travelcardinsider.com/0apr-balance-transfer-cards" />
  
                  {/* Open Graph / Social Media */}
                  <meta property="og:title" content="Best 0% APR and Balance Transfer Credit Cards for 2025 | TravelCardInsider" />
                  <meta
                      property="og:description"
                      content="Explore our curated list of the top 0% APR and balance transfer credit cards for 2025. Whether you're looking to reduce high-interest debt or enjoy an interest-free vacation, we've got you covered."
                  />
                  <meta property="og:url" content="https://www.travelcardinsider.com/0apr-balance-transfer-cards" />
                  <meta property="og:type" content="article" />
                  <meta property="og:image" content="https://www.travelcardinsider.com/images/0apr-hero.jpg" /> {/* Use actual image */}
  
                  {/* Twitter Cards */}
                  <meta name="twitter:card" content="summary_large_image" />
                  <meta name="twitter:title" content="Best 0% APR and Balance Transfer Credit Cards for 2025 | TravelCardInsider" />
                  <meta
                      name="twitter:description"
                      content="Zero in on interest-free credit card offers for 2025. Transfer balances, earn rewards, and save on interest with our expert picks."
                  />
                  <meta name="twitter:image" content="https://www.travelcardinsider.com/images/0apr-hero.jpg" /> {/* Use actual image */}
  
                  {/* Favicons (Assuming these are linked globally in _document.js or layout.js) */}
                  {/* <link rel="icon" href="/favicon.ico" type="image/x-icon" /> */}
                  {/* <link rel="apple-touch-icon" href="/images/apple-touch-icon.png" /> */}
  
                  {/* Google Fonts Preconnect - handled by next/font usually, but kept here for direct conversion */}
                  <link rel="preconnect" href="https://fonts.googleapis.com" />
                  <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                  <link
                      href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&family=Playfair+Display:wght@400..900&display=swap"
                      rel="stylesheet"
                  />
  
                  {/* JSON-LD Structured Data */}
                  <script
                      type="application/ld+json"
                      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
                  />
              </Head>
  
              {/* Header Component would typically go here in a Layout file */}
  
              <main>
                  <section className={styles.hero}>
                      <div className={styles.container}>
                          <h1 className={styles.heroTitle}>
                              Discover the Best 10 0% APR And Balance Transfer Credit Cards of 2025
                          </h1>
                          <p className={styles.heroDescription}>
                              Compare top-rated travel credit cards, maximize rewards, and unlock exclusive perks for your next adventure. Whether you’re a frequent flyer, luxury traveler, or budget explorer, find the perfect card to suit your needs.
                          </p>
                          <div className={styles.heroCta}>
                              {/* Assuming #compare links to an element on *this* page */}
                              <a href="#card-table" className={`${styles.ctaButton} ${styles.ctaPrimary}`}>Compare Now</a>
                          </div>
                          <div className={styles.heroImage}>
                              {/* *** REPLACE width/height with actual dimensions *** */}
                              <Image
                                  src="/AdobeStock_446734479.webp" // Relative to /public
                                  alt="Travel Credit Cards - Unlock Rewards for Your Journey"
                                  width={600} // Placeholder
                                  height={400} // Placeholder
                                  priority // Prioritize hero image
                              />
                          </div>
                           <p className={styles.Disclaimer}>
                               We may receive compensation when you click on links to certain credit card products on our site. However, our editorial opinions remain our own. Offers are subject to change. Always verify terms with the official issuer.
                           </p>
                      </div>
                  </section>
  
                   {/* TODO: Implement Rewards Calculator Component based on original JS logic if needed */}
                   {/* <section className={styles.rewardsCalculator}> ... </section> */}
  
  
                  <section id="card-table" className={styles.cardTableSection}>
                      <div className={styles.tableResponsive}>
                          <table className={styles.cardTable}>
                              <thead>
                                  <tr>
                                      <th>Card Name</th>
                                      <th>Intro APR</th>
                                      <th>Balance Transfer Fee</th>
                                      <th>Rewards</th>
                                      <th>Annual Fee</th>
                                  </tr>
                              </thead>
                              <tbody>
                                  {cardsData.map((card) => (
                                      <tr key={card.id}>
                                          <td>
                                              {card.name}
                                              <div className={styles.rating}>
                                                  {/* TODO: Make info icon interactive (tooltip/modal) */}
                                                  <a href="#" className={styles.infoIcon} title="Our TCI rating info" onClick={(e)=>e.preventDefault()}>
                                                      <svg fill="#000000" width="15px" height="15px" viewBox="0 0 416.979 416.979"> <g> <path d="M356.004,61.156c-81.37-81.47-213.377-81.551-294.848-0.182 c-81.47,81.371-81.552,213.379-0.181,294.85 c81.369,81.47,213.378,81.551,294.849,0.181 C437.293,274.636,437.375,142.626,356.004,61.156z M208.554,334.794 c-11.028,0-19.968-8.939-19.968-19.968s8.939-19.969,19.968-19.969 c11.028,0,19.968,8.939,19.968,19.969 C228.521,325.854,219.582,334.794,208.554,334.794z M241.018,214.566c-11.406,6.668-12.381,14.871-12.43,38.508 c-0.003,1.563-0.008,3.14-0.017,4.726 c-0.071,11.172-9.147,20.18-20.304,20.18 c-0.044,0-0.088,0-0.131,0 c-11.215-0.071-20.248-9.22-20.178-20.436 c0.01-1.528,0.013-3.047,0.016-4.552 c0.05-24.293,0.111-54.524,32.547-73.484 c26.026-15.214,29.306-25.208,26.254-38.322 c-3.586-15.404-17.653-19.396-28.63-18.141 c-3.686,0.423-22.069,3.456-22.069,21.642 c0,11.213-9.092,20.306-20.307,20.306 c-11.215,0-20.306-9.093-20.306-20.306 c0-32.574,23.87-58.065,58.048-61.989 c35.2-4.038,65.125,16.226,72.816,49.282 C297.824,181.361,256.555,205.485,241.018,214.566z"/> </g> </svg>
                                                  </a>
                                                  {' '}TCI Rating: <span>{card.tciRating}</span>/10 {/* Use data */}
                                              </div>
                                              <div>
                                                  <a href={card.applyUrl} className={styles.applyBtn} target="_blank" rel="noopener noreferrer sponsored">Apply Now</a>
                                                  <p className={styles.APly}>From card issuer's secure site</p>
                                              </div>
                                              <Link href={card.learnMoreUrl} legacyBehavior>
                                                  <a className={styles.learnMoreBtn}>Learn More</a>
                                              </Link>
                                              <a href={card.ratesFeesUrl} className={styles.rateFeesBtn} target="_blank" rel="noopener noreferrer sponsored">See Rates & Fees</a>
                                          </td>
                                          <td>{card.introApr}</td>
                                          <td>{card.balanceTransferFee}</td>
                                          <td>{card.rewards}</td>
                                          <td>{card.annualFee}</td>
                                      </tr>
                                  ))}
                              </tbody>
                          </table>
                      </div>
                  </section>
  
                  {/* Detailed Card Sections - Generated Dynamically */}
                  {cardsData.map((card) => (
                       <div className={styles.card} id={card.id} key={card.id}>
                           <div className={styles.cardImage}>
                               <Image
                                   src={card.imageUrl}
                                   alt={card.imageAlt}
                                   width={card.imageWidth} // *** USE ACTUAL WIDTH ***
                                   height={card.imageHeight} // *** USE ACTUAL HEIGHT ***
                                   loading="lazy" // Lazy load images below the fold
                               />
                           </div>
                           <div className={styles.cardContent}>
                               <h2 className={styles.cardTitle}>{card.name}</h2>
                               <div className={styles.rating}>
                                   {/* TODO: Make info icon interactive */}
                                   <a href="#" className={styles.infoIcon} title="Our TCI rating info" onClick={(e)=>e.preventDefault()}>
                                      <svg fill="#000000" width="20px" height="20px" viewBox="0 0 416.979 416.979"> <g> <path d="M356.004,61.156c-81.37-81.47-213.377-81.551-294.848-0.182 c-81.47,81.371-81.552,213.379-0.181,294.85 c81.369,81.47,213.378,81.551,294.849,0.181 C437.293,274.636,437.375,142.626,356.004,61.156z M208.554,334.794 c-11.028,0-19.968-8.939-19.968-19.968s8.939-19.969,19.968-19.969 c11.028,0,19.968,8.939,19.968,19.969 C228.521,325.854,219.582,334.794,208.554,334.794z M241.018,214.566c-11.406,6.668-12.381,14.871-12.43,38.508 c-0.003,1.563-0.008,3.14-0.017,4.726 c-0.071,11.172-9.147,20.18-20.304,20.18 c-0.044,0-0.088,0-0.131,0 c-11.215-0.071-20.248-9.22-20.178-20.436 c0.01-1.528,0.013-3.047,0.016-4.552 c0.05-24.293,0.111-54.524,32.547-73.484 c26.026-15.214,29.306-25.208,26.254-38.322 c-3.586-15.404-17.653-19.396-28.63-18.141 c-3.686,0.423-22.069,3.456-22.069,21.642 c0,11.213-9.092,20.306-20.307,20.306 c-11.215,0-20.306-9.093-20.306-20.306 c0-32.574,23.87-58.065,58.048-61.989 c35.2-4.038,65.125,16.226,72.816,49.282 C297.824,181.361,256.555,205.485,241.018,214.566z"/> </g> </svg>
                                   </a>
                                   {' '}TCI Rating: <span>{card.tciRating}</span>/10
                               </div>
                               <p className={styles.cardBonus}>
                                   <strong>Welcome Bonus:</strong> {card.bonus}
                               </p>
                                <div className={styles.cardEarning}>
                                   <strong>Earning Rates:</strong>
                                   <ul>{card.earningRates.map((rate, i) => <li key={i}>{rate}</li>)}</ul>
                               </div>
                                <div className={styles.cardLuxuryFeatures}> {/* Renamed class, but using for Key Features */}
                                   <strong>Key Features:</strong>
                                   <ul>{card.keyFeatures.map((feature, i) => <li key={i}>{feature}</li>)}</ul>
                               </div>
                                <div className={styles.cardPerks}>
                                   <strong>Additional Perks:</strong>
                                   <ul>{card.additionalPerks.map((perk, i) => <li key={i}>{perk}</li>)}</ul>
                               </div>
                                <div className={styles.cardBestFor}>
                                   <strong>Best For:</strong>
                                   <p>{card.bestFor}</p>
                               </div>
                           </div>
                           <div className={styles.cardActions}>
                                <a href={card.applyUrl} className={`${styles.btn} ${styles.btnApply}`} data-card={card.name} title="From card issuer's secure site" target="_blank" rel="noopener noreferrer sponsored">Apply Now</a>
                               <Link href={card.learnMoreUrl} legacyBehavior>
                                  <a className={`${styles.btn} ${styles.btnLearnMore}`} data-card={card.name}>Learn More</a>
                                </Link>
                                <a href={card.ratesFeesUrl} target="_blank" className={`${styles.btn} ${styles.btnRatesFees}`} data-card={card.name} rel="noopener noreferrer sponsored">See Rates & Fees</a>
                           </div>
                       </div>
                   ))}
  
              </main>
  
              {/* Footer Component would typically go here in a Layout file */}
  
               {/* Example of loading external script IF NEEDED and logic can't be ported to React easily */}
               {/* <Script src="/path/to/your/0% APR Index.js" strategy="lazyOnload" /> */}
          </>
      );
  }