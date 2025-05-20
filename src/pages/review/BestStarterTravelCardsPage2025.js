// File: pages/reviews/BestStarterTravelCardsPage2025.js – FINAL COMPLETE VERSION (with user corrections)
// ❗ CRITICAL: Replace ALL placeholder URLs (applyLink, ratesFeesLink, learnMoreLink) and image paths (imageSrc, HERO_IMAGE_SRC)
// with your live, tracked URLs and optimised WebP/AVIF image assets.

import React, { useState, useRef, useEffect, useCallback } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/NoFTFCardsReview.module.css'; // Ensure this path is correct
import StarRating from '../../components/StarRating'; // Ensure this component exists and path is correct

// ─────────────────────────────────────────────────────────────────────────────
// 🔗 CONFIG
// ─────────────────────────────────────────────────────────────────────────────
const SITE_BASE_URL = 'https://www.travelcardinsider.com'; // ✏️ Adjust if different
const PAGE_PATH = '/reviews/best-starter-travel-credit-cards-2025';
const PAGE_URL = `${SITE_BASE_URL}${PAGE_PATH}`;
const SITE_NAME = 'Travel Card Insider';
const HERO_IMAGE_SRC = '/eddy-billard-JOoOPt8tTPY-unsplash.webp'; // ✏️ CRITICAL UPDATE REQUIRED: Replace with your optimised hero image path
const HERO_IMAGE_ALT = 'Montage of travel scenes and credit cards, symbolizing accessible travel with starter rewards cards in 2025.';
const DATE_PUBLISHED = '2025-05-21'; // ✏️ Adjust if needed
const DATE_MODIFIED = '2025-05-21'; // ✏️ Update whenever you edit copy significantly

// ─────────────────────────────────────────────────────────────────────────────
// 👤 AUTHOR INFO (Reused from example, update as needed)
// ─────────────────────────────────────────────────────────────────────────────
const author = {
  name: 'Dilan Madushanka',
  title: 'Lead Travel Card Analyst',
  image: '/WhatsApp Image 2025-05-12 at 4.09.58 PM.jpeg',  // ✏️ CRITICAL UPDATE REQUIRED: Replace with author's 40x40px optimised headshot
  imageLarge: '/WhatsApp Image 2025-05-12 at 4.09.58 PM.jpeg', // ✏️ CRITICAL UPDATE REQUIRED: Replace with author's 60x60px optimised headshot
  bio: 'Seasoned travel‑card analyst helping readers unlock elite travel perks & maximise rewards, starting with their very first card.',
  expertise: [
    'Beginner Credit Cards',
    'Travel Rewards Strategy',
    'Airline Miles Optimisation',
    'Credit Card Analytics',
    'Financial Literacy for Travelers',
  ],
  social: {
    linkedin: 'https://www.linkedin.com/in/dilan-madushanka-b65293365',
    twitter: 'https://x.com/team_dilan',
    email: 'team@travelcardinsider.com',
  },
  // fullBioLink: '/about/dilan-madushanka' // Example: Add this if you have a full bio page for the author
};

// ─────────────────────────────────────────────────────────────────────────────
// 🃏 STARTER CARD DATA
// ─────────────────────────────────────────────────────────────────────────────
const starterCardData = [
  {
    id: 'chaseSapphirePreferred',
    name: 'Chase Sapphire Preferred® Card',
    imageSrc: '/sapphire_preferred_card.png', // ✏️ CRITICAL UPDATE REQUIRED: Path to optimised card image
    imageAlt: 'Chase Sapphire Preferred Card',
    ratingValue: 8.4, // ✏️ Adjust placeholder rating
    ratingStars: 4.2, // ✏️ Adjust placeholder rating
    annualFee: '$95',
    welcomeOffer: '60,000 points after $5,000 spend in 3 months (worth $750 towards travel via Chase Travel℠). (Info as of May 2025)',
    apr: '19.99% - 28.24% Variable.',
    rewards: '5x points on travel purchased through Chase Travel℠, 3x points on dining (including eligible delivery services, takeout and dining out), 3x points on online grocery purchases (excluding Target, Walmart and wholesale clubs), 3x points on select streaming services, 2x points on all other travel purchases, and 1x point on all other purchases.',
    whyGreat: 'A taste of premium rewards with a manageable fee. Excellent travel protections, valuable 1:1 point transfers to airline and hotel partners (like United, Southwest, Hyatt). $50 annual hotel credit via Chase Travel℠ effectively lowers the fee. No foreign transaction fees.',
    headsUp: 'The $95 annual fee and higher spending requirement for the bonus might be a consideration for absolute beginners.',
    ftf: 'None',
    applyLink: 'https://creditcards.chase.com/rewards-credit-cards/sapphire/preferred', // ✏️ CRITICAL UPDATE REQUIRED: Replace with actual APPLY link
    ratesFeesLink: 'https://sites.chase.com/services/creatives/pricingandterms.html/content/dam/pricingandterms/LGC56014.html', // ✏️ CRITICAL UPDATE REQUIRED: Replace with actual RATES & FEES PDF/link
    learnMoreLink: '/cards/chase-sapphire-preferred', // ✏️ CRITICAL UPDATE REQUIRED: Path to your review page
  },
  {
    id: 'capitalOneVentureOne',
    name: 'Capital One VentureOne Rewards Credit Card',
    imageSrc: '/ventureone_cardart_prim_323x203.avif', // ✏️ CRITICAL UPDATE REQUIRED: Path to optimised card image
    imageAlt: 'Capital One VentureOne Rewards Credit Card',
    ratingValue: 7.2, // ✏️ Adjust placeholder rating
    ratingStars: 3.5, // ✏️ Adjust placeholder rating
    annualFee: '$0',
    welcomeOffer: '20,000 bonus miles once you spend $500 on purchases within 3 months from account opening. (Info as of May 2025)',
    apr: '0% Intro APR on purchases and balance transfers for 15 months; 19.24% - 29.24% variable APR after that.',
    rewards: 'Unlimited 1.25 miles per $1 on every purchase, every day. Earn 5 miles per $1 on hotels and rental cars booked through Capital One Travel.',
    whyGreat: 'The epitome of simplicity with no annual fee. Miles are easy to earn and redeem for any travel expense. Good for those who want straightforward rewards without tracking categories. No foreign transaction fees.',
    headsUp: 'The base earning rate of 1.25 miles per $1 is lower than some other cards.',
    ftf: 'None',
    applyLink: 'https://www.capitalone.com/credit-cards/ventureone/', // ✏️ CRITICAL UPDATE REQUIRED
    ratesFeesLink: 'https://www.capitalone.com/credit-cards/ventureone/', // ✏️ CRITICAL UPDATE REQUIRED
    learnMoreLink: '/cards/capital-one-ventureone', // ✏️ CRITICAL UPDATE REQUIRED
  },
  {
    id: 'wellsFargoAutograph',
    name: 'Wells Fargo Autograph℠ Card',
    imageSrc: '/Autograph-No-Fee-Card-RGB_d.png', // ✏️ CRITICAL UPDATE REQUIRED
    imageAlt: 'Wells Fargo Autograph Card',
    ratingValue: 7.1, // ✏️ Adjust
    ratingStars: 3.0, // ✏️ Adjust
    annualFee: '$0',
    welcomeOffer: '20,000 bonus points when you spend $1,000 in purchases in the first 3 months ($200 value). (Info as of May 2025)',
    apr: '0% Intro APR for 12 months from account opening on purchases. 19.24%, 24.24%, or 29.24% variable APR thereafter.',
    rewards: 'Unlimited 3X points on restaurants, travel, gas stations, transit, popular streaming services, and phone plans.',
    whyGreat: 'Excellent for everyday spending with broad 3x bonus categories covering common expenses. Also includes cell phone protection when you pay your monthly bill with the card. No foreign transaction fees.',
    headsUp: 'Points are generally redeemed at 1 cent each towards travel; fewer direct high-value airline/hotel transfer partners compared to Chase or Amex.',
    ftf: 'None',
    applyLink: 'https://creditcards.wellsfargo.com/autograph-visa-credit-card/?SGNTST=SHINYLP&sub_channel=SEO&vendor_code=G', // ✏️ CRITICAL UPDATE REQUIRED
    ratesFeesLink: 'https://www.wellsfargo.com/credit-cards/autograph-visa/terms/?FPID=012988I6P10000&product_code=CC&subproduct_code=AU&cx_nm=CXNAME_CSMPD&sub_channel=SEO&vendor_code=G&refdmn=www.google.com&_gl=1*1qpj6ry*_gcl_au*OTk5NTUyMzU3LjE3NDAzMTU0NDM.*_ga*NjU1MzIyNC4xNzQwMzE1NDQz*_ga_7JXJJ2JF12*MTc0MTQ1MzE2Ny41LjAuMTc0MTQ1MzIyMy40LjAuMA..', // ✏️ CRITICAL UPDATE REQUIRED
    learnMoreLink: '/cards/wells-fargo-autograph', // ✏️ CRITICAL UPDATE REQUIRED
  },
  {
    id: 'biltMastercard',
    name: 'Bilt Mastercard®',
    imageSrc: '/Bilt_card_D.png', // ✏️ CRITICAL UPDATE REQUIRED
    imageAlt: 'Bilt Mastercard',
    ratingValue: 8.5, // ✏️ Adjust
    ratingStars: 4.5, // ✏️ Adjust
    annualFee: '$0',
    welcomeOffer: 'Primary ongoing perk: Earn 1x points on rent payments (up to 100,000 points each calendar year) without transaction fees when you make at least 5 card transactions per statement period. (Info as of May 2025)',
    apr: '20.49%, 23.49%, or 28.49% Variable.',
    rewards: '1x points on rent (see conditions), 3x points on dining, 2x points on travel. 1x point on other purchases.',
    whyGreat: 'Revolutionary for renters, allowing them to earn valuable points on their largest monthly expense without fees. Points transfer 1:1 to excellent partners like American Airlines AAdvantage® and World of Hyatt®. Strong travel and purchase protections. No foreign transaction fees.',
    headsUp: 'You must use the card for at least 5 transactions (rent payment excluded) each statement period to earn points.',
    ftf: 'None',
    applyLink: 'https://www.biltrewards.com/card', // ✏️ CRITICAL UPDATE REQUIRED
    ratesFeesLink: 'https://www.biltrewards.com/card', // ✏️ CRITICAL UPDATE REQUIRED
    learnMoreLink: '/cards/bilt-mastercard-review', // ✏️ CRITICAL UPDATE REQUIRED
  },
  {
    id: 'discoverItMiles',
    name: 'Discover it® Miles',
    imageSrc: '/cardart-travel-beachcard-620-382.webp', // ✏️ CRITICAL UPDATE REQUIRED
    imageAlt: 'Discover it Miles card',
    ratingValue: 7.0, // ✏️ Adjust
    ratingStars: 3.5, // ✏️ Adjust
    annualFee: '$0',
    welcomeOffer: 'Unlimited Cashback Match – Discover will automatically match all the Miles you’ve earned at the end of your first year. (Info as of May 2025)',
    apr: '0% Intro APR for 15 months on purchases and balance transfers. Then 18.24% - 27.24% Variable APR.',
    rewards: 'Unlimited 1.5 Miles per $1 on every purchase.',
    whyGreat: 'The first-year Miles Match effectively means earning 3 Miles per $1 on all purchases for the first year, which is fantastic. Simple earning and redemption. No foreign transaction fees.',
    headsUp: 'After the first year, the 1.5 Miles per $1 earning rate is standard. It offers fewer travel-specific insurance perks compared to some other travel cards.',
    ftf: 'None',
    applyLink: 'https://www.discover.com/credit-cards/travel/', // ✏️ CRITICAL UPDATE REQUIRED
    ratesFeesLink: 'https://www.discovercard.com/application/website/ratesrewards?srcCde=GJX4&adobe_mc=TS%3D1741447882%7CMCMID%3D39379935660807998981588704922154453327%7CMCORGID%3D0D6C4673527839230A490D45%2540AdobeOrg&sv_session_undefined=true&_gl=1*1ec64ug*_gcl_au*MTYyMTU5ODAxMS4xNzQwMzE1MDcw*_ga*MTk0MTA3MDUwOC4xNzQwMzE1MDcx*_ga_3MJNPV4VSE*MTc0MTQ0Nzg3NS40LjAuMTc0MTQ0Nzg3NS42MC4wLjA.', // ✏️ CRITICAL UPDATE REQUIRED
    learnMoreLink: '/cards/discover-it-miles', // ✏️ CRITICAL UPDATE REQUIRED
  },
  {
    id: 'chaseFreedomUnlimited',
    name: 'Chase Freedom Unlimited®',
    imageSrc: '/freedom_unlimited_card_alt (1).png', // ✏️ CRITICAL UPDATE REQUIRED
    imageAlt: 'Chase Freedom Unlimited card',
    ratingValue: 9.0, // ✏️ Adjust
    ratingStars: 4.5, // ✏️ Adjust
    annualFee: '$0',
    welcomeOffer: 'Earn an extra 1.5% on everything you buy (on up to $20,000 spent in the first year) - worth up to $300 cash back. That’s 6.5% on travel purchased through Chase Travel℠, 4.5% on dining and drugstores, and 3% on all other purchases. (Info as of May 2025, verify current offer)',
    apr: '0% Intro APR for 15 months from account opening on purchases and balance transfers. After the intro period, a variable APR of 18.99%–28.49%.',
    rewards: 'Enjoy 5% cash back on travel purchased through Chase Travel℠, 3% cash back on drugstore purchases and dining at restaurants, including takeout and eligible delivery service, and 1.5% on all other purchases. Points are Chase Ultimate Rewards® points.',
    whyGreat: 'A cash-back hero whose points can become powerful travel rewards. Strong everyday earning rates. When paired with a Chase Sapphire card, points can be transferred to travel partners for potentially higher value.',
    headsUp: 'This card has a 3% foreign transaction fee, making it less ideal for international travel on its own.',
    ftf: '3%',
    applyLink: 'https://creditcards.chase.com/cash-back-credit-cards/freedom/unlimited', // ✏️ CRITICAL UPDATE REQUIRED
    ratesFeesLink: 'https://sites.chase.com/services/creatives/pricingandterms.html/content/dam/pricingandterms/LGC56029.html', // ✏️ CRITICAL UPDATE REQUIRED
    learnMoreLink: '/cards/chase-freedom-unlimited', // ✏️ CRITICAL UPDATE REQUIRED
  },
  {
    id: 'bofaTravelRewards',
    name: 'Bank of America® Travel Rewards credit card',
    imageSrc: '/8blm_trvsigcm_v_250x158.png', // ✏️ CRITICAL UPDATE REQUIRED
    imageAlt: 'Bank of America Travel Rewards credit card',
    ratingValue: 7.4, // ✏️ Adjust
    ratingStars: 4.0, // ✏️ Adjust
    annualFee: '$0',
    welcomeOffer: '25,000 online bonus points after you make at least $1,000 in purchases in the first 90 days of account opening - that can be a $250 statement credit toward travel and dining purchases. (Info as of May 2025)',
    apr: '0% Intro APR for 15 billing cycles for purchases, and for any balance transfers made in the first 60 days. After the Intro APR offer ends, a Variable APR that’s currently 18.24% - 28.24% will apply.',
    rewards: 'Earn unlimited 1.5 points per $1 spent on all purchases. Points can be boosted by 25%-75% if you are a Bank of America Preferred Rewards® member (up to 2.62 points per $1).',
    whyGreat: 'Simple flat-rate earning makes it easy to accumulate points. No foreign transaction fees. Becomes significantly more valuable if you have banking/investment accounts with Bank of America to qualify for Preferred Rewards tiers.',
    headsUp: 'The base 1.5 points per $1 earning rate is standard; the card truly shines only with the Preferred Rewards boost.',
    ftf: 'None',
    applyLink: 'https://www.bankofamerica.com/credit-cards/products/travel-rewards-credit-card/', // ✏️ CRITICAL UPDATE REQUIRED
    ratesFeesLink: 'https://www.bankofamerica.com/credit-cards/products/travel-rewards-credit-card/', // ✏️ CRITICAL UPDATE REQUIRED
    learnMoreLink: '/cards/boa-travel-rewards', // ✏️ CRITICAL UPDATE REQUIRED
  }
];

// ─────────────────────────────────────────────────────────────────────────────
// 📊 COMPARISON TABLE DATA
// ─────────────────────────────────────────────────────────────────────────────
const comparisonStarterCardData = [
  { name: 'Chase Sapphire Preferred®', fee: '$95', bonus: '60k pts ($5k/3mo)', perk: '5x travel (Chase), 3x dining, $50 hotel credit, 1:1 transfers', apr: '19.99% - 28.24% Variable', ftf: 'None' },
  { name: 'Capital One VentureOne', fee: '$0', bonus: '20k miles ($500/3mo)', perk: '1.25x miles all, 5x (C1 Travel)', apr: '0% Intro APR for 15 months, then 19.24% - 29.24% Variable', ftf: 'None' },
  { name: 'Wells Fargo Autograph℠', fee: '$0', bonus: '20k pts ($1k/3mo)', perk: '3x travel, dining, gas, transit, streaming, phone', apr: '0% Intro APR for 12 months, then 19.24%, 24.24%, or 29.24% Variable', ftf: 'None' },
  { name: 'Bilt Mastercard®', fee: '$0', bonus: '1x rent (5 txn/mo req.)', perk: '3x dining, 2x travel, 1:1 transfers', apr: '20.49%, 23.49%, or 28.49% Variable', ftf: 'None' },
  { name: 'Discover it® Miles', fee: '$0', bonus: 'Miles Match (Yr1)', perk: '1.5 Miles per $1 all (3x Yr1 eff.)', apr: '0% Intro APR for 15 months, then 18.24% - 27.24% Variable', ftf: 'None' },
  { name: 'Chase Freedom Unlimited®', fee: '$0', bonus: 'Extra 1.5% up to $20k spend (Yr1) (verify)', perk: '5x travel (Chase), 3x dining/drugstores, 1.5x all', apr: '0% Intro APR for 15 months, then 18.99%–28.49% Variable', ftf: '3%' },
  { name: 'Bank of America® Travel Rewards', fee: '$0', bonus: '25k pts ($1k/90d)', perk: '1.5x all (up to 2.62x w/ Preferred Rewards)', apr: '0% Intro APR for 15 billing cycles, then 18.24% - 28.24% Variable', ftf: 'None' },
];

// ─────────────────────────────────────────────────────────────────────────────
// ❓ FAQ DATA (Plain text for JSON-LD, enhanced rendering in JSX)
// ─────────────────────────────────────────────────────────────────────────────
const faqData = [
    {
        id: "faq1",
        question: "What credit score do I need for a starter travel credit card?",
        answer: "Most starter travel credit cards require a good to excellent credit score, generally a FICO score of 670 or higher. Some cards may be accessible with a slightly lower score, but a good score significantly improves your approval odds and the quality of cards you can get. For detailed information on understanding your credit score, resources like the Consumer Financial Protection Bureau (CFPB) can be very helpful."
        // Link will be added in JSX for this specific FAQ
    },
    {
        id: "faq2",
        question: "Is it worth getting a travel credit card if I only travel once or twice a year?",
        answer: "Yes, it can be! Many starter travel cards have no annual fee and offer rewards on everyday spending (like dining or gas) in addition to travel. The points you earn can still offset costs for those trips. Plus, perks like travel insurance or no foreign transaction fees can be valuable even for infrequent travelers."
    },
    {
        id: "faq3",
        question: "How do I earn a welcome bonus without overspending?",
        answer: "Plan to apply for a card when you have a large, planned expense coming up (like paying taxes, insurance premiums, or making a significant purchase you've already budgeted for). Shift your regular, everyday spending (groceries, gas, bills you can pay with a card) to the new card until you meet the threshold. Avoid buying things you don't need just to hit the bonus."
    },
    {
        id: "faq4",
        question: "What’s more important: a low annual fee or high rewards for a beginner?",
        answer: "For beginners, a low or no annual fee is often a higher priority. This allows you to learn how travel rewards work without pressure. As you travel more or your spending increases, a card with an annual fee might make sense if its benefits (higher rewards, statement credits, premium perks) genuinely outweigh the fee for your specific situation."
    },
    {
        id: "faq5",
        question: "Can I really get free flights with a travel credit card?",
        answer: "Yes, it's possible! By accumulating points or miles through a welcome bonus and ongoing spending, you can redeem them for flights. Sometimes you might still need to pay taxes and fees on the \"free\" flight, but the base fare can be covered by your rewards."
    }
    // ✏️ Adjust: User can add more authoritative outbound links to other FAQ answers in the JSX rendering part if desired.
];


// ─────────────────────────────────────────────────────────────────────────────
// 🧠 HELPERS
// ─────────────────────────────────────────────────────────────────────────────
function generateJsonLD() {
  const itemListElements = starterCardData.map((card, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    item: {
      '@type': 'Product',
      name: card.name,
      url: `${SITE_BASE_URL}${card.learnMoreLink}`, // ✏️ CRITICAL: ensure learnMoreLink is correct
      image: `${SITE_BASE_URL}${card.imageSrc}`,     // ✏️ CRITICAL: ensure imageSrc is correct
      description: card.whyGreat,
      brand: {
        '@type': 'Brand',
        name:
          card.name.match(/Chase/) ? 'Chase' :
          card.name.match(/Capital One/) ? 'Capital One' :
          card.name.match(/Wells Fargo/) ? 'Wells Fargo' :
          card.name.match(/Bilt/) ? 'Bilt Rewards' :
          card.name.match(/Discover/) ? 'Discover' :
          card.name.match(/Bank of America/) ? 'Bank of America' :
          'Various Issuers',
      },
      offers: {
        '@type': 'Offer',
        priceCurrency: 'USD',
        price: card.annualFee.replace('$', '').replace('Free', '0').replace('*', ''),
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: card.ratingValue,
        bestRating: '10',
        reviewCount: 1, 
      },
    },
  }));

  const breadcrumbsSchema = {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_BASE_URL, },
      { '@type': 'ListItem', position: 2, name: 'Reviews', item: `${SITE_BASE_URL}/reviews`, }, // ✏️ Adjust if your review category path is different
      { '@type': 'ListItem', position: 3, name: 'Best Starter Travel Credit Cards 2025', item: PAGE_URL, },
    ],
  };

  const articleSchema = {
    '@type': 'Article',
    mainEntityOfPage: { "@type": "WebPage", "@id": PAGE_URL },
    headline: 'Best Starter Travel Credit Cards for 2025',
    description: 'Your guide to the top beginner travel rewards cards in the US for 2025. Find cards with low fees, simple rewards, and great perks to start your travel journey.',
    image: [`${SITE_BASE_URL}${HERO_IMAGE_SRC}`], // ✏️ CRITICAL: ensure HERO_IMAGE_SRC is correct
    author: {
      '@type': 'Person',
      name: author.name,
      url: author.social.linkedin || (author.fullBioLink ? `${SITE_BASE_URL}${author.fullBioLink}` : SITE_BASE_URL),
      image: `${SITE_BASE_URL}${author.imageLarge || author.image}`, // ✏️ CRITICAL: ensure author images are correct
      jobTitle: author.title,
      description: author.bio.substring(0, 200),
      sameAs: Object.values(author.social).filter(Boolean)
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_BASE_URL}/images/logo-120.png`, // ✏️ CRITICAL UPDATE REQUIRED: Ensure this logo exists and path is correct
      },
    },
    datePublished: DATE_PUBLISHED,
    dateModified: DATE_MODIFIED,
  };

  const faqPageSchema = {
    // "@context" removed from here to avoid duplication
    "@type": "FAQPage",
    mainEntity: faqData.map(faqItem => ({
      "@type": "Question",
      name: faqItem.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faqItem.answer 
      }
    }))
  };

  return JSON.stringify(
    {
      '@context': 'https://schema.org', // Single context at the top level of the graph
      '@graph': [
        articleSchema,
        { '@type': 'ItemList', name: 'Top Starter Travel Credit Cards 2025', url: PAGE_URL, numberOfItems: starterCardData.length, itemListElement: itemListElements, mainEntityOfPage: PAGE_URL },
        breadcrumbsSchema,
        faqPageSchema,
      ],
    },
    null,
    2
  );
}


// ─────────────────────────────────────────────────────────────────────────────
// 🌐 COMPONENT
// ─────────────────────────────────────────────────────────────────────────────
function BestStarterTravelCardsPage2025() {
  const [showTooltip, setShowTooltip] = useState(false);
  const triggerRef = useRef(null);
  const tooltipRef = useRef(null);
  const tooltipTimeoutIdRef = useRef(null);

  const handleMouseEnterTriggerOrTooltip = useCallback(() => {
    if (tooltipTimeoutIdRef.current) {
      clearTimeout(tooltipTimeoutIdRef.current);
    }
    setShowTooltip(true);
  }, []);

  const handleMouseLeaveTriggerOrTooltip = useCallback(() => {
    tooltipTimeoutIdRef.current = setTimeout(() => {
      let isStillHovering = false;
      if (triggerRef.current && triggerRef.current.matches(':hover')) isStillHovering = true;
      if (tooltipRef.current && tooltipRef.current.matches(':hover')) isStillHovering = true;
      
      if (!isStillHovering) {
          setShowTooltip(false);
      }
    }, 150);
  }, []);
  
  useEffect(() => {
    const currentTimeoutId = tooltipTimeoutIdRef.current;
    return () => {
      if (currentTimeoutId) {
        clearTimeout(currentTimeoutId);
      }
    };
  }, []);

  useEffect(() => {
    function handleClickOutside(event) {
      if (showTooltip &&
          triggerRef.current && !triggerRef.current.contains(event.target) &&
          tooltipRef.current && !tooltipRef.current.contains(event.target)) {
        setShowTooltip(false);
      }
    }
    if (showTooltip) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showTooltip]);


  return (
    <>
      <Head>
        {/* Core */}
        <title>Best Starter Travel Credit Cards 2025 | {SITE_NAME}</title>
        <meta
          name="description"
          content="Your guide to the top beginner travel rewards cards in the US for 2025. Find cards with low fees, simple rewards, and great perks to start your travel journey."
        />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="keywords" content="best starter travel credit cards 2025, beginner travel rewards, no annual fee travel cards, Chase Sapphire Preferred, Capital One VentureOne, Bilt Mastercard, Wells Fargo Autograph, Discover it Miles, travel points for beginners" />
        <link rel="canonical" href={PAGE_URL} />

        {/* Open Graph */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content={`Best Starter Travel Credit Cards 2025 | ${SITE_NAME}`} />
        <meta property="og:description" content="Discover the ideal first travel credit card to earn rewards and enjoy perks. Compare top options for US beginners in 2025." />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:site_name" content={SITE_NAME} />
        <meta property="og:image" content={`${SITE_BASE_URL}${HERO_IMAGE_SRC}`} /> 
        <meta property="og:locale" content="en_US" />
        <meta property="article:published_time" content={DATE_PUBLISHED} />
        <meta property="article:modified_time" content={DATE_MODIFIED} />
        <meta property="article:author" content={author.name} />


        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`Best Starter Travel Credit Cards 2025 | ${SITE_NAME}`} /> {/* Updated to match OG Title */}
        <meta name="twitter:description" content="Navigate the world of travel rewards with our expert picks for beginner-friendly credit cards in 2025." />
        <meta name="twitter:image" content={`${SITE_BASE_URL}${HERO_IMAGE_SRC}`} />
        {author.social.twitter && <meta name="twitter:creator" content={`@${author.social.twitter.split('/').pop()}`} />}


        {/* Geo‑targeting & Language */}
        <meta name="geo.region" content="US" />
        <meta name="geo.placename" content="United States" />
        <meta name="language" content="en-US" />
        <meta name="distribution" content="US" />
        <link rel="alternate" hrefLang="en-us" href={PAGE_URL} />


        {/* Preloads */}
        {/* ✏️ CRITICAL UPDATE REQUIRED: Ensure HERO_IMAGE_SRC is the correct path to your *optimised* hero image */}
        <link rel="preload" href={HERO_IMAGE_SRC} as="image" />
        {/* ✏️ Add preloads for critical fonts if not already globally handled in _app.js or similar */}
        {/* Example:
        <link rel="preload" href="/fonts/YourCriticalFont-Regular.woff2" as="font" type="font/woff2" crossOrigin="anonymous" /> 
        */}

        {/* JSON‑LD */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: generateJsonLD() }} />
      </Head>

      <main className={styles.reviewContainer}>
        <header className={styles.reviewHeader}>
          <h1>Best Starter Travel Credit Cards for 2025</h1>
          
          <div
              className={styles.authorBioContainer}
              ref={triggerRef}
              onMouseEnter={handleMouseEnterTriggerOrTooltip}
              onMouseLeave={handleMouseLeaveTriggerOrTooltip}
              onFocus={handleMouseEnterTriggerOrTooltip} 
              onBlur={handleMouseLeaveTriggerOrTooltip} 
              aria-haspopup="true"
              aria-expanded={showTooltip}
              tabIndex={0} 
          >
              <Image
                  src={author.image} // ✏️ CRITICAL: Ensure this is the correct path
                  alt={`${author.name} headshot`} 
                  width={40} 
                  height={40} 
                  className={styles.authorImageSmall}
                  priority // Keep priority for LCP if this image is above the fold and critical
              />
              <div className={styles.authorInfo}>
                  <span className={styles.authorName}>{author.name}</span> 
                  <span className={styles.authorTitle}>{author.title}</span> 
                  {DATE_MODIFIED && (
                      <time dateTime={DATE_MODIFIED} className={styles.authorLastEdited}>
                          Last updated: {new Date(DATE_MODIFIED).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                      </time>
                  )}
                  {author.social && ( 
                      <div className={styles.authorSocialLinks}>
                          {author.social.linkedin && ( 
                              <a href={author.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`${author.name} on LinkedIn`} className={styles.socialIconLink}>
                                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                              </a>
                          )}
                          {author.social.twitter && ( 
                              <a href={author.social.twitter} target="_blank" rel="noopener noreferrer" aria-label={`${author.name} on Twitter`} className={styles.socialIconLink}>
                                   <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-.422.724-.665 1.56-.665 2.452 0 1.697.864 3.198 2.18 4.078-.8-.025-1.555-.247-2.227-.616v.054c0 2.37 1.683 4.333 3.91 4.78-.426.116-.874.174-1.337.174-.31 0-.611-.03-.904-.085.622 1.936 2.421 3.338 4.553 3.377-1.672 1.309-3.781 2.088-6.072 2.088-.394 0-.784-.023-1.169-.069 2.16 1.389 4.723 2.202 7.482 2.202 8.979 0 13.897-7.446 13.897-13.898 0-.21 0-.42-.015-.63.953-.689 1.778-1.56 2.433-2.525z"/></svg>
                              </a>
                          )}
                          {author.social.email && ( 
                              <a href={`mailto:${author.social.email}`} aria-label={`Email ${author.name}`} className={styles.socialIconLink}>
                                   <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"/></svg>
                              </a>
                          )}
                      </div>
                  )}
              </div>
              {showTooltip && (
                  <div 
                      className={styles.authorTooltip}
                      ref={tooltipRef}
                      role="tooltip"
                      onMouseEnter={handleMouseEnterTriggerOrTooltip} 
                      onMouseLeave={handleMouseLeaveTriggerOrTooltip}
                      onFocus={handleMouseEnterTriggerOrTooltip}
                      onBlur={handleMouseLeaveTriggerOrTooltip}
                  >
                       <div className={styles.authorTooltipHeader}>
                           <Image
                              src={author.imageLarge} // ✏️ CRITICAL: Ensure this is the correct path
                              alt={`${author.name} headshot`} 
                              width={60} 
                              height={60} 
                              className={styles.authorTooltipImage}
                           />
                           <div className={styles.authorTooltipInfo}>
                               <span className={styles.authorTooltipName}>{author.name}</span> 
                               <span className={styles.authorTooltipTitle}>{author.title}</span> 
                           </div>
                         </div>
                         {author.expertise && author.expertise.length > 0 && ( 
                           <div className={styles.authorTooltipExpertise}>
                               <strong>Expertise</strong>
                               <ul>
                                   {author.expertise.map(area => <li key={area}>{area}</li>)} 
                               </ul>
                           </div>
                         )}
                         <p className={styles.authorTooltipBioSnippet}>{author.bio}</p> 
                         {author.fullBioLink && ( 
                             <Link href={author.fullBioLink} legacyBehavior>
                                 <a className={styles.authorTooltipBioLink}>
                                     See full bio
                                 </a>
                             </Link>
                         )}
                         {author.social && ( 
                              <div className={styles.authorTooltipSocials}>
                                  {Object.entries(author.social).map(([platform, link]) => link && (
                                    <a key={platform} href={link.startsWith('mailto:') ? link : link} target={link.startsWith('mailto:') ? '_self' : '_blank'} rel="noopener noreferrer" aria-label={`${author.name} on ${platform.charAt(0).toUpperCase() + platform.slice(1)}`} className={styles.socialIconLink}>
                                      {platform === 'linkedin' && <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>}
                                      {platform === 'twitter' && <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-.422.724-.665 1.56-.665 2.452 0 1.697.864 3.198 2.18 4.078-.8-.025-1.555-.247-2.227-.616v.054c0 2.37 1.683 4.333 3.91 4.78-.426.116-.874.174-1.337.174-.31 0-.611-.03-.904-.085.622 1.936 2.421 3.338 4.553 3.377-1.672 1.309-3.781 2.088-6.072 2.088-.394 0-.784-.023-1.169-.069 2.16 1.389 4.723 2.202 7.482 2.202 8.979 0 13.897-7.446 13.897-13.898 0-.21 0-.42-.015-.63.953-.689 1.778-1.56 2.433-2.525z"/></svg>}
                                      {platform === 'email' && <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"/></svg>}
                                    </a>
                                  ))}
                              </div>
                          )}
                  </div>
              )}
          </div>
        </header>

        <div className={styles.heroSection}>
          <Image
            src={HERO_IMAGE_SRC} // ✏️ CRITICAL: Ensure this is the correct path
            alt={HERO_IMAGE_ALT}
            layout="responsive"
            width={900} // Adjust to your actual image's aspect ratio
             // Adjust to your actual image's aspect ratio
            objectFit="cover"
            priority // Keep for LCP
            className={styles.heroImage}
          />
        </div>
        
        <p className={styles.disclaimer}>
          <strong>Disclaimer:</strong> Information, including APRs and bonus offers, is based on sources available up to May 2025 and is subject to change. Verify all details directly with the card issuer before applying. Card issuer terms apply.
        </p>
        
        <article>
            <p className={styles.affiliateDisclosureShort}>
                <em>(<b>Disclosure:</b> We may earn a commission if you apply for cards through links on this page. Our recommendations are independent and based on our own research. This helps support our work but does not influence our evaluations. Thank you for your support!)</em>
            </p>
          <section className={styles.reviewSection}>
            <p>The call of adventure, the thrill of new cities, the joy of reconnecting—travel in 2025 is buzzing with possibility. If you're ready to explore, the right travel credit card can be your golden ticket, turning travel dreams into reality without breaking the bank. Think of it as your savvy travel companion, making journeys more affordable, rewarding, and memorable. This guide will help you, the aspiring US traveler, choose wisely from the top beginner travel rewards cards, blending smart financial planning with the sheer excitement of exploration.</p>
          </section>

          <section className={styles.reviewSection}>
            <h2>The Dawn of Your Adventure: Why a Starter Travel Card in 2025?</h2>
            <p>In 2025, your first travel credit card is more than just plastic; it’s a key unlocking new experiences. But let's be real, travel costs money. That's where smart rewards come in. By using a travel credit card strategically, you can earn points or miles that cut down on flight and hotel costs, letting you travel more often, more comfortably, or to those bucket-list destinations.</p>
            
            <h3>The Travel & Credit Scene in 2025</h3>
            <p>The world of travel credit cards is booming. For beginners, this means more choices and tempting introductory offers. However, it can also feel overwhelming.</p>
            <p>A quick heads-up: be aware of "pointflation." While cards might offer lots of points, airlines and hotels can increase the points needed for redemptions. So, it’s not just about the number of points, but their real-world value. Learning this early will help you play the rewards game smartly.</p>
            <p>Despite this, now is a fantastic time to start. A beginner-friendly card helps build a positive credit history—essential for bigger financial goals. Starter cards are designed for simplicity, offering an easier introduction to earning and redeeming rewards responsibly.</p>
          </section>

          <section className={styles.reviewSection}>
            <h2>Your Perfect Travel Sidekick: Decoding the Ideal Starter Card</h2>
            <p>Imagine a travel buddy who smooths out the bumps and makes every trip better. Your first travel credit card should feel like that—helpful and exciting, not confusing.</p>

            <h3>Must-Have Features for New Travelers</h3>
            <ul>
              <li><strong>Low or No Annual Fee:</strong> Many great starter travel credit cards have a $0 annual fee.</li>
              <li><strong>Simple Rewards:</strong> Look for flexible rewards and easy-to-use benefits.</li>
              <li><strong>Achievable Welcome Bonus:</strong> Ensure you can meet spending requirements without overspending.</li>
              <li><strong>No Foreign Transaction Fees (for global explorers):</strong> Crucial if you plan international trips (check each card's details!).</li>
              <li><strong>Useful Entry-Level Perks:</strong> Basic travel insurance (trip cancellation, auto rental waivers) can be very valuable.</li>
            </ul>

            <h3>Quick Self-Check Before You Apply</h3>
            <ul>
                <li><strong>Your Travel Dreams?</strong> Domestic or international? Flexibility is often key for beginners.</li>
                <li><strong>Your Credit Score?</strong> Most travel cards require good to excellent credit (FICO 670+).</li>
                <li><strong>Your Spending Habits?</strong> Pick a card rewarding your common spending.</li>
                <li><strong>Ready for Responsibility?</strong> Always pay your bill in full and on time. Interest charges negate rewards.</li>
            </ul>
          </section>

          <section className={styles.reviewSection}>
            <h2>The 2025 Honor Roll: Top Starter Travel Credit Cards</h2>
            <p>Here’s our curated list of top starter travel credit cards for 2025. We'll break down the key details for each.</p>
            

            {starterCardData.map((card, index) => (
              <div key={card.id} className={`${styles.cardDetailSection} ${styles.cardSeparator}`}>
                <div className={styles.cardHeader}>
                    <div className={styles.cardImageContainer}>
                      <Image
                        src={card.imageSrc} // ✏️ CRITICAL: Ensure this is the correct path
                        alt={card.imageAlt}
                        width={150} 
                        height={95}  
                        objectFit="contain"
                        loading={index > 2 ? "lazy" : undefined} 
                      />
                    </div>
                    <div className={styles.cardTitleRating}>
                      <h3>{`${index + 1}. ${card.name}`}</h3>
                      {card.ratingStars && card.ratingValue && (
                        <div className={styles.ratingContainer}>
                            <StarRating rating={card.ratingStars} />
                            <span className={styles.ratingValue}>Our Rating: {card.ratingValue.toFixed(1)}/10</span>
                        </div>
                      )}
                    </div>
                  </div>

                <ul>
                  <li><strong>Annual Fee:</strong> {card.annualFee}</li>
                  <li><strong>Welcome Offer:</strong> {card.welcomeOffer}</li>
                  <li><strong>APR:</strong> {card.apr} (Always check current rates & fees directly with the issuer)</li>
                  <li><strong>Rewards Structure:</strong> {card.rewards}</li>
                  <li><strong>Why It’s Great for Starters:</strong> {card.whyGreat}</li>
                  <li><strong>Heads Up:</strong> {card.headsUp}</li>
                  <li><strong>Foreign Transaction Fees:</strong> {card.ftf}</li>
                </ul>

                <div className={styles.cardButtonsContainer}>
                    <a
                      href={card.applyLink} // ✏️ CRITICAL UPDATE REQUIRED
                      target="_blank"
                      rel="nofollow sponsored noopener noreferrer" // Updated rel attribute
                      className={`${styles.cardButton} ${styles.applyButton}`}
                      aria-label={`Apply Now for ${card.name}`} // Specific ARIA label
                    >
                      Apply Now
                    </a>
                     <a
                      href={card.ratesFeesLink} // ✏️ CRITICAL UPDATE REQUIRED
                      target="_blank"
                      rel="nofollow sponsored noopener noreferrer" // Updated rel attribute
                      className={`${styles.cardButton} ${styles.secondaryButton}`}
                      aria-label={`See Rates & Fees for ${card.name}`} // Specific ARIA label
                    >
                      See Rates & Fees
                    </a>
                     <Link href={card.learnMoreLink} legacyBehavior>
                       <a 
                         className={`${styles.cardButton} ${styles.secondaryButton}`}
                         aria-label={`Read our Full Review of ${card.name}`} // Specific ARIA label
                       >
                         Full Review
                       </a>
                    </Link>
                </div>
              </div>
            ))}
          </section>

          <section className={styles.reviewSection}>
            <h2>Table 1: Top Starter Travel Credit Cards for 2025: Cheat Sheet</h2>
            <div className={styles.tableContainer}>
              <table className={styles.comparisonTable}>
                  <thead>
                    <tr>
                      <th scope="col">Card Name</th>
                      <th scope="col">Annual Fee</th>
                      <th scope="col">Welcome Bonus (Example)</th>
                      <th scope="col">Key Perk / Earning</th>
                      <th scope="col">APR (Variable, check issuer)</th>
                      <th scope="col">Foreign Transaction Fee</th>
                    </tr>
                </thead>
                <tbody>
                    {comparisonStarterCardData.map(row => (
                    <tr key={row.name}>
                        <td>{row.name}</td>
                        <td>{row.fee}</td>
                        <td>{row.bonus}</td>
                        <td>{row.perk}</td>
                        <td>{row.apr}</td> {/* Displays full APR string */}
                        <td>{row.ftf}</td>
                    </tr>
                    ))}
                </tbody>
              </table>
            </div>
            <p className={styles.tableNote}>Note: Offers, terms, APRs, and FTF details can change. Verify directly with issuers. "pts" = points; "Var." = Variable; "eff." = effectively.</p>
          </section>

          <section className={styles.reviewSection}>
            <h2>Mastering Your Miles: Smart Use of Beginner Travel Rewards Cards</h2>
            <p>Getting the card is just the start. Using it wisely turns spending into adventures.</p>
            <h3>Your Quick-Start Playbook</h3>
            <ul>
                <li><strong>Nail the Welcome Bonus (Responsibly!):</strong> Plan spending naturally. Don’t overspend just to get the bonus.</li>
                <li><strong>The Golden Rule: Pay in Full, Always:</strong> Avoid high interest rates that wipe out any rewards you earn. This is crucial.</li>
                <li><strong>Know Basic Fees & APRs:</strong> Familiarize yourself with your card's terms and conditions.</li>
                <li><strong>Boost Your Credit Score:</strong> Consistent on-time payments and keeping balances low (ideally under 30% of your credit limit) will help improve your credit score.</li>
                <li><strong>Maximize Everyday Earning:</strong> Use your card for regular purchases, especially in its bonus categories (e.g., dining, travel, gas).</li>
                <li><strong>Redeem Wisely:</strong> For travel cards, redeeming for travel or transferring to airline/hotel partners (if available) usually offers the best value.</li>
                <li><strong>Use Your Perks!</strong> Don't forget any included benefits like travel credits, purchase protections, or rental car insurance.</li>
            </ul>
            <p><strong>The #1 rule:</strong> carrying a balance and paying interest will likely cost more than your rewards are worth. Always aim to pay your statement balance in full, every month.</p>
          </section>

          <section id="editors-essential-takeaways" className={`${styles.reviewSection} ${styles.eetaSection || ''}`}> {/* Ensure eetaSection style is defined if used */}
            <h2>Editor's Essential Takeaways (EETA)</h2>
            <p>You're now equipped to pick a great starter travel credit card for 2025. The "best" card ultimately fits your individual travel dreams, spending habits, and financial situation.</p>
             <h3>Quick Decision Guide:</h3>
            <ul>
                <li><strong>Zero Annual Fee & Simplicity?</strong> Consider Capital One VentureOne or Wells Fargo Autograph℠.</li>
                <li><strong>Renter Wanting Points on Rent (No Fee)?</strong> Bilt Mastercard® is unique and powerful.</li>
                <li><strong>Modest Fee for Premium Perks & Transfers?</strong> Chase Sapphire Preferred® is a long-time favorite for good reason.</li>
                <li><strong>Strong Everyday Rewards (No Fee) & Future Travel Power with Pairing?</strong> Chase Freedom Unlimited® is a solid choice, especially if you plan to get a Sapphire card later.</li>
                <li><strong>Biggest First-Year Miles & Simple Redemptions?</strong> Discover it® Miles offers an impressive first-year match.</li>
                <li><strong>Bank of America Customer (especially Preferred Rewards)?</strong> Bank of America® Travel Rewards card offers enhanced value.</li>
            </ul>
            <p>Your first travel credit card is a launchpad. Choose wisely, use it responsibly, and get ready to explore the world. Happy travels!</p>
          </section>

          <section className={styles.reviewSection}>
            <h2>Frequently Asked Questions about Starter Travel Credit Cards</h2>
            {faqData.map((faqItem) => (
                <div key={faqItem.id} className={styles.faqItem}>
                    <h3>{faqItem.question}</h3>
                    {faqItem.id === "faq1" ? (
                        <p>
                            Most starter travel credit cards require a good to excellent credit score, generally a FICO score of 670 or higher. 
                            Some cards may be accessible with a slightly lower score, but a good score significantly improves your approval odds and the quality of cards you can get. 
                            For detailed information on understanding your credit score, resources like the <a href="https://www.consumerfinance.gov/consumer-tools/credit-reports-and-scores/" target="_blank" rel="noopener noreferrer external">Consumer Financial Protection Bureau (CFPB)</a> can be very helpful.
                            {/* ✏️ Adjust: User can add more authoritative outbound links to other FAQ answers here or by enhancing the faqData structure and rendering logic if preferred. */}
                        </p>
                    ) : (
                        <p>{faqItem.answer}</p>
                    )}
                </div>
            ))}
          </section>

        </article>
      </main>
    </>
  );
}

export default BestStarterTravelCardsPage2025;