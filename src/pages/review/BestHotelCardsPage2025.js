// File: pages/reviews/BestHotelCardsPage2025.js

import React, { useState, useRef, useEffect, useCallback } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/NoFTFCardsReview.module.css'; // Uses the provided CSS
import StarRating from '../../components/StarRating';

// Author Data (Customize this with actual information)
const authorData = {
  name: 'Dilan Madushanka',
  title: 'Lead Travel Card Analyst',
  imageUrl: '/WhatsApp Image 2025-05-12 at 4.09.58 PM.jpeg', // IMPORTANT: Ensure this path is correct
  imageWidth: 40,
  imageHeight: 40,
  tooltipImageUrl: '/WhatsApp Image 2025-05-12 at 4.09.58 PM.jpeg', // IMPORTANT: Ensure this path is correct
  tooltipImageWidth: 60,
  tooltipImageHeight: 60,
  expertise: [
      'Hotel Rewards Programs',
      'Airline Miles Strategy',
      'Travel Hacking',
      'Maximizing Card Benefits',
      'Credit Card Analysis'
  ],
  bioSnippet: 'Dilan is a seasoned travel card analyst, focused on helping readers find the best hotel rewards and travel perks.',
  fullBioLink: '/author/dilan-madushanka',
  socialLinks: {
      linkedin: 'https://www.linkedin.com/in/dilan-madushanka-b65293365',
      twitter: 'https://x.com/team_dilan',
      email: 'team@travelcardinsider.com'
  },
  updateDate: "2025-05-20"
};

// Card Data for the 7 Best Hotel Credit Cards
const hotelCardData = [
  {
    id: 'marriottBrilliantAmex',
    name: 'Marriott Bonvoy Brilliant American Express Card',
    imageSrc: '/NUS000000313_480x304_straight_withname.avif',
    imageAlt: 'Marriott Bonvoy Brilliant American Express Card image',
    ratingValue: 8.9,
    ratingStars: 4.5,
    annualFee: '$650',
    welcomeOffer: 'Typically 150,000 points after $8,000 spend (verify current offer).',
    shinesFor: 'Annual 85,000-point Free Night Award, Automatic Marriott Platinum Elite status (upgrades, lounge access, late checkout, 50% bonus points).',
    creditsAndOffset: '$300 in dining credits ($25/month), $100 property credit for Ritz-Carlton or St. Regis (2-night min. stay). These can bring effective cost to $250. Also includes Priority Pass lounge access and Global Entry/TSA PreCheck credit.',
    whoShouldGet: 'Marriott loyalists who frequently stay at higher-end properties and can naturally use the dining and property credits.',
    whoShouldSkip: 'Those for whom the $650 annual fee is too high, occasional Marriott guests, or those who will struggle to maximize the credits.',
    applyLink: 'https://www.americanexpress.com/us/credit-cards/card/marriott-bonvoy-brilliant/',
    ratesFeesLink: 'https://www.americanexpress.com/us/credit-cards/card-application/apply/prospect/terms/marriott-bonvoy-brilliant-card/25330-10-0#FeeTable',
    learnMoreLink: '/cards/marriott-bonvoy-brilliant',
  },
  {
    id: 'hiltonAspireAmex',
    name: 'Hilton Honors American Express Aspire Card',
    imageSrc: '/NUS000000329_480x304_straight_withname.avif',
    imageAlt: 'Hilton Honors American Express Aspire Card image',
    ratingValue: 9.0,
    ratingStars: 4.5,
    annualFee: '$550',
    welcomeOffer: 'Typically 150,000 Hilton Honors points after $6,000 spend (verify current offer).',
    shinesFor: 'Automatic Hilton Diamond status (Hilton’s top published tier) providing suite upgrades (when available), lounge access, and daily Food & Beverage credit. Annual Free Night Reward valid at almost any Hilton worldwide.',
    creditsAndOffset: '$400 in Hilton Resort credits ($200 statement credits semi-annually), $200 in airline fee credits ($50 per quarter), and a $199 CLEAR Plus credit. If fully utilized, these credits ($799 value) can more than cover the annual fee.',
    whoShouldGet: 'Hilton loyalists who travel enough to organically use the resort and airline credits, effectively getting paid to have top-tier status and a free night.',
    whoShouldSkip: 'Travelers who don\'t frequently stay at Hilton resorts or cannot easily use the airline fee credits, making it harder to offset the annual fee.',
    applyLink: 'https://www.americanexpress.com/us/credit-cards/card/hilton-honors-aspire/',
    ratesFeesLink: 'https://www.americanexpress.com/us/credit-cards/card-application/apply/prospect/terms/hilton-honors-aspire-credit-card/25330-10-0#FeeTable',
    learnMoreLink: '/cards/hilton-honors-aspire',
  },
  {
    id: 'worldOfHyattChase',
    name: 'The World of Hyatt Credit Card',
    imageSrc: '/world_of_hyatt_card.png',
    imageAlt: 'The World of Hyatt Credit Card image',
    ratingValue: 9.5,
    ratingStars: 5.0,
    annualFee: '$95',
    welcomeOffer: 'Typically up to 60,000 Bonus Points (verify current offer).',
    shinesFor: 'Highly valuable Hyatt points. Annual Category 1-4 Free Night Award (can be worth $200-$300+). Earn an additional Cat 1-4 Free Night Award by spending $15,000 in a calendar year.',
    statusAndEarning: 'Automatic World of Hyatt Discoverist status. Earns 4x points at Hyatt, 2x on dining, flights booked directly with airlines, local transit/commuting, and fitness club/gym memberships.',
    whoShouldGet: 'Travelers who appreciate the quality of Hyatt hotels and want their points to go further. Excellent value for the annual fee due to the free night certificate.',
    whoShouldSkip: 'Those who do not have convenient access to Hyatt properties or prefer other hotel chains.',
    applyLink: 'https://creditcards.chase.com/rewards-credit-cards/world-of-hyatt',
    ratesFeesLink: 'https://creditcards.chase.com/rewards-credit-cards/world-of-hyatt/terms',
    learnMoreLink: '/cards/world-of-hyatt',
  },
  {
    id: 'ihgPremierChase',
    name: 'IHG One Rewards Premier Credit Card',
    imageSrc: '/ihg_premier_card.png',
    imageAlt: 'IHG One Rewards Premier Credit Card image',
    ratingValue: 7.5,
    ratingStars: 3.7,
    annualFee: '$99',
    welcomeOffer: 'Typically 140,000 IHG One Rewards points (verify current offer).',
    shinesFor: 'Fourth Reward Night Free perk when booking a four-night stay using points. Annual Anniversary Free Night (up to 40,000 points).',
    statusAndMore: 'Automatic IHG One Rewards Platinum Elite status. Global Entry, TSA PreCheck, or NEXUS application fee credit (up to $100 every 4 years). Up to $50 in United Airlines TravelBank Cash each calendar year.',
    whoShouldGet: 'Frequent guests of IHG brands (InterContinental, Kimpton, Holiday Inn, etc.), especially those taking 3-4+ night trips where the 4th night free offers significant savings.',
    whoShouldSkip: 'Occasional IHG guests or those whose travel patterns don\'t allow them to maximize the 4th night free or anniversary night perks.',
    applyLink: 'https://creditcards.chase.com/travel-credit-cards/ihg-rewards-club/premier',
    ratesFeesLink: 'https://sites.chase.com/services/creatives/pricingandterms.html/content/dam/pricingandterms/LGC60417.html',
    learnMoreLink: '/cards/ihg-one-rewards-premier',
  },
  {
    id: 'hiltonSurpassAmex',
    name: 'Hilton Honors American Express Surpass Card',
    imageSrc: '/NUS000000328_480x304_straight_withname.avif',
    imageAlt: 'Hilton Honors American Express Surpass Card image',
    ratingValue: 8.1,
    ratingStars: 4.0,
    annualFee: '$150',
    welcomeOffer: 'Typically 130,000 Hilton Honors points (verify current offer).',
    shinesFor: 'Automatic Hilton Gold status, offering free breakfast or a food/beverage credit and space-available upgrades. $200 in Hilton credits ($50 per quarter for eligible purchases charged directly with a Hilton property).',
    valueProposition: 'The $200 in Hilton credits can more than offset the $150 annual fee if used. Earn a Free Night Reward after spending $15,000 in a calendar year.',
    whoShouldGet: 'Hilton loyalists who find the Aspire card\'s fee too high but want valuable Gold status and can utilize the quarterly Hilton credits.',
    whoShouldSkip: 'Travelers who won\'t consistently use the Hilton credits or those who don\'t prioritize Hilton Gold status benefits.',
    applyLink: 'https://www.americanexpress.com/us/credit-cards/card/hilton-honors-surpass/',
    ratesFeesLink: 'https://www.americanexpress.com/us/credit-cards/card/hilton-honors-surpass/',
    learnMoreLink: '/cards/hilton-honors-surpass',
  },
  {
    id: 'marriottBoundlessChase',
    name: 'Marriott Bonvoy Boundless Credit Card',
    imageSrc: '/marriott_bonvoy_boundless_card.png',
    imageAlt: 'Marriott Bonvoy Boundless Credit Card image',
    ratingValue: 8.4,
    ratingStars: 4.0,
    annualFee: '$95',
    welcomeOffer: 'Often includes Free Night Awards and points (verify current offer).',
    shinesFor: 'Annual Free Night Award (up to 35,000 points), which can easily cover the annual fee. 15 Elite Night Credits annually, providing a jumpstart towards Marriott Gold or Platinum status.',
    realityCheck: 'Comes with Marriott Silver Elite status (basic). A solid entry-level card for Marriott rewards, offering a reliable free night and a boost to earning higher status through stays.',
    whoShouldGet: 'Individuals aiming for Marriott Gold or Platinum status through stays who want a card to accelerate that without a high fee, or those who simply want an annual free Marriott night.',
    whoShouldSkip: 'Those looking for immediate high-tier status or extensive premium perks from their credit card.',
    applyLink: 'https://creditcards.chase.com/travel-credit-cards/marriott-bonvoy/boundless',
    ratesFeesLink: 'https://sites.chase.com/services/creatives/pricingandterms.html/content/dam/pricingandterms/LGC58145.html',
    learnMoreLink: '/cards/marriott-bonvoy-boundless',
  },
  {
    id: 'choiceSelectMC',
    name: 'Choice Privileges Select Mastercard',
    imageSrc: '/choice_select_card.png',
    imageAlt: 'Choice Privileges Select Mastercard image',
    ratingValue: 8.2,
    ratingStars: 4.0,
    annualFee: '$95',
    welcomeOffer: 'Typically around 60,000 Choice Privileges points (verify current offer).',
    shinesFor: '30,000 bonus points every account anniversary year. With Choice free nights starting low (6,000-8,000 points), this can mean 3-5 free nights annually.',
    perks: 'Automatic Choice Privileges Platinum Elite status. Global Entry or TSA PreCheck application fee credit. Cell phone protection.',
    whoShouldGet: 'Budget-savvy travelers who frequently stay in areas where Choice Hotels (e.g., Comfort Inn, Quality Inn, Cambria, Radisson Americas) are prevalent and want to maximize free nights for a low fee.',
    whoShouldSkip: 'Travelers who prefer luxury hotel brands or primarily visit locations with limited Choice Hotel options.',
    applyLink: 'https://www.choicehotels.com/choice-privileges/credit-card',
    ratesFeesLink: 'https://www.choicehotels.com/choice-privileges/credit-card/terms',
    learnMoreLink: '/cards/choice-privileges-select',
  }
];

const comparisonHotelData = [
  { name: 'Marriott Bonvoy Brilliant Amex Card', fee: '$650', bonus: '150k pts (verify)', perk: '85k Free Night, Platinum Status, $300 Dining Credit', ftf: 'None' },
  { name: 'Hilton Honors Aspire Amex Card', fee: '$550', bonus: '150k pts (verify)', perk: 'Annual Free Night, Diamond Status, $400 Resort Credit', ftf: 'None' },
  { name: 'The World of Hyatt Credit Card', fee: '$95', bonus: '60k pts (verify)', perk: 'Cat 1-4 Free Night, Discoverist Status', ftf: 'None' },
  { name: 'IHG One Rewards Premier Card', fee: '$99', bonus: '140k pts (verify)', perk: '4th Night Free, Anniversary Free Night, Platinum Status', ftf: 'None' },
  { name: 'Hilton Honors Surpass Amex Card', fee: '$150', bonus: '130k pts (verify)', perk: 'Gold Status, $200 Hilton Credits', ftf: 'None' },
  { name: 'Marriott Bonvoy Boundless Card', fee: '$95', bonus: 'FNAs + Pts (verify)', perk: '35k Free Night, 15 Elite Nights', ftf: 'None' },
  { name: 'Choice Privileges Select Mastercard', fee: '$95', bonus: '60k pts (verify)', perk: '30k Anniversary Pts, Platinum Status', ftf: 'None (verify with issuer)' },
];

function BestHotelCardsPage2025() {
  const heroImageSrc = '/manuel-moreno-DGa0LQ0yDPc-unsplash.webp';
  const heroImageAlt = 'Luxury hotel suite with a stunning city view, symbolizing elite travel perks';
  const siteBaseUrl = 'https://www.yourwebsite.com'; // Replace with your actual domain
  const pagePath = '/reviews/best-hotel-credit-cards-2025';
  const pageUrlFull = `${siteBaseUrl}${pagePath}`;
  const siteName = "Your Site Name"; // Define your site name here

  const authorRef = useRef(null);
  const authorTooltipRef = useRef(null);
  const [showAuthorBioTooltip, setShowAuthorBioTooltip] = useState(false);

  const handleAuthorMouseEnter = useCallback(() => {
    if (authorRef.current?.tooltipTimeoutId) {
        clearTimeout(authorRef.current.tooltipTimeoutId);
    }
    setShowAuthorBioTooltip(true);
  }, []);

  const handleAuthorMouseLeave = useCallback(() => {
    const timerId = setTimeout(() => {
        if (authorRef.current && authorTooltipRef.current) {
            const isHoveringTrigger = authorRef.current.matches(':hover');
            const isHoveringTooltip = authorTooltipRef.current.matches(':hover');
            const isFocusWithinTrigger = authorRef.current.contains(document.activeElement);
            const isFocusWithinTooltip = authorTooltipRef.current.contains(document.activeElement);
            if (!isHoveringTrigger && !isHoveringTooltip && !isFocusWithinTrigger && !isFocusWithinTooltip) {
               setShowAuthorBioTooltip(false);
            }
        } else if (!authorRef.current?.matches(':hover') && !authorTooltipRef.current?.matches(':hover')) {
             setShowAuthorBioTooltip(false);
        }
    }, 150); 
    if (authorRef.current) authorRef.current.tooltipTimeoutId = timerId;
  }, [authorRef, authorTooltipRef]);

  const handleTooltipMouseEnter = useCallback(() => {
    if (authorRef.current?.tooltipTimeoutId) {
        clearTimeout(authorRef.current.tooltipTimeoutId);
    }
  }, []);
  
  useEffect(() => {
    function handleClickOutside(event) {
        if (showAuthorBioTooltip &&
            authorRef.current && !authorRef.current.contains(event.target) &&
            authorTooltipRef.current && !authorTooltipRef.current.contains(event.target)) {
            setShowAuthorBioTooltip(false);
        }
    }
    if (showAuthorBioTooltip) {
        document.addEventListener("mousedown", handleClickOutside);
    } else {
        document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
        document.removeEventListener("mousedown", handleClickOutside);
        if(authorRef.current?.tooltipTimeoutId){ 
            clearTimeout(authorRef.current.tooltipTimeoutId);
        }
    };
  }, [showAuthorBioTooltip, authorRef, authorTooltipRef]);


  return (
    <>
      <Head>
        <title>Best Hotel Credit Cards 2025: Unlock Elite US Travel Perks | {siteName}</title>
        <meta name="description" content="Discover the top 7 hotel credit cards for US travelers in 2025. Get elite status, free nights, and valuable credits with Marriott, Hilton, Hyatt, IHG, and Choice." />
        <link rel="canonical" href={pageUrlFull} />
        <meta property="og:title" content={`Unlock Elite Travel: Best Hotel Credit Cards for US Travelers (2025) | ${siteName}`} />
        <meta property="og:description" content="Maximize your 2025 travels with our top hotel card picks for free nights, VIP status, and unbeatable perks. For US travelers." />
        <meta property="og:url" content={pageUrlFull} />
        <meta property="og:image" content={`${siteBaseUrl}${heroImageSrc}`} />
        <meta property="og:type" content="article" />
        <meta name="author" content={authorData.name} /> 
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Top Hotel Credit Cards 2025 for US Travelers | Elite Status & Free Nights" />
        <meta name="twitter:description" content="Which hotel card is best for you in 2025? Compare Marriott, Hilton, Hyatt & more for US travel perks." />
        <meta name="twitter:image" content={`${siteBaseUrl}${heroImageSrc}`} />
        
        <meta name="geo.region" content="US" />
        <meta name="geo.placename" content="United States" />
        <meta name="language" content="en-US" />
        <meta name="distribution" content="US" />
        <link rel="alternate" hrefLang="en-us" href={pageUrlFull} />

        <link rel="preload" href={heroImageSrc} as="image" />
        <link rel="preload" href="/fonts/Roboto_Condensed-Regular.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/Roboto_Condensed-Bold.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/PlayfairDisplay-Regular.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/Playfair-Display-Bold.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />

        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "ItemList", 
              "name": "Top 7 Hotel Credit Cards for US Travelers 2025",
              "url": "${pageUrlFull}",
              "description": "A detailed review of the top 7 hotel credit cards for US travelers in 2025, focusing on elite status, free nights, and overall value.",
              "numberOfItems": ${hotelCardData.length},
              "itemListElement": [
                ${hotelCardData.map((card, index) => `{
                  "@type": "ListItem",
                  "position": ${index + 1},
                  "item": {
                    "@type": "Product",
                    "name": "${card.name}",
                    "url": "${siteBaseUrl}${card.learnMoreLink}",
                    "image": "${siteBaseUrl}${card.imageSrc}",
                    "description": "${card.shinesFor}",
                    "brand": {
                        "@type": "Brand",
                        "name": "${card.name.includes('Marriott') ? 'Marriott' : card.name.includes('Hilton') ? 'Hilton' : card.name.includes('Hyatt') ? 'Hyatt' : card.name.includes('IHG') ? 'IHG' : card.name.includes('Choice') ? 'Choice Privileges' : card.name.includes('American Express') || card.name.includes('Amex') ? 'American Express' : card.name.includes('Chase') ? 'Chase' : 'Unknown Issuer'}"
                    },
                    "offers": {
                        "@type": "Offer",
                        "priceCurrency": "USD",
                        "price": "${card.annualFee.replace('$', '')}"
                    },
                    "aggregateRating": {
                        "@type": "AggregateRating",
                        "ratingValue": "${card.ratingValue}",
                        "bestRating": "10",
                        "reviewCount": "1" 
                      }
                  }
                }`).join(',\n')}
              ],
              "mainEntityOfPage": {
                 "@type": "WebPage",
                 "@id": "${pageUrlFull}"
              },
              "author": {
                "@type": "Person",
                "name": "${authorData.name}"
              },
              "publisher": {
                "@type": "Organization",
                "name": "${siteName}",
                "logo": { 
                  "@type": "ImageObject",
                  "url": "${siteBaseUrl}/images/logo.png" // IMPORTANT: Update this path
                }
              },
              "datePublished": "2025-05-20", 
              "dateModified": "${authorData.updateDate}"
            }
          `}
        </script>
      </Head>

      <main className={styles.reviewContainer}>
        <header className={styles.reviewHeader}>
          <h1>Unlock Elite Travel: The Hotel Credit Cards Real US Travelers Should Get in 2025 (And Which to Skip)</h1>
          
          <div
              className={styles.authorBioContainer}
              ref={authorRef}
              onMouseEnter={handleAuthorMouseEnter}
              onMouseLeave={handleAuthorMouseLeave}
              onFocus={handleAuthorMouseEnter} 
              onBlur={handleAuthorMouseLeave} 
              aria-haspopup="true"
              aria-expanded={showAuthorBioTooltip}
              tabIndex={0} 
          >
              <Image
                  src={authorData.imageUrl} 
                  alt={`${authorData.name} headshot`} 
                  width={authorData.imageWidth} 
                  height={authorData.imageHeight} 
                  className={styles.authorImageSmall}
                  priority
              />
              <div className={styles.authorInfo}> {/* Updated class name */}
                  <span className={styles.authorName}>{authorData.name}</span> 
                  <span className={styles.authorTitle}>{authorData.title}</span> 
                  {authorData.updateDate && (
                      <time dateTime={authorData.updateDate} className={styles.authorLastEdited}>
                          Last updated: {new Date(authorData.updateDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                      </time>
                  )}
                  {authorData.socialLinks && ( 
                      <div className={styles.authorSocialLinks}>
                          {authorData.socialLinks.linkedin && ( 
                              <a href={authorData.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={styles.socialIconLink}>
                                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                              </a>
                          )}
                          {authorData.socialLinks.twitter && ( 
                              <a href={authorData.socialLinks.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter" className={styles.socialIconLink}>
                                   <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-.422.724-.665 1.56-.665 2.452 0 1.697.864 3.198 2.18 4.078-.8-.025-1.555-.247-2.227-.616v.054c0 2.37 1.683 4.333 3.91 4.78-.426.116-.874.174-1.337.174-.31 0-.611-.03-.904-.085.622 1.936 2.421 3.338 4.553 3.377-1.672 1.309-3.781 2.088-6.072 2.088-.394 0-.784-.023-1.169-.069 2.16 1.389 4.723 2.202 7.482 2.202 8.979 0 13.897-7.446 13.897-13.898 0-.21 0-.42-.015-.63.953-.689 1.778-1.56 2.433-2.525z"/></svg>
                              </a>
                          )}
                          {authorData.socialLinks.email && ( 
                              <a href={`mailto:${authorData.socialLinks.email}`} aria-label="Email" className={styles.socialIconLink}>
                                   <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"/></svg>
                              </a>
                          )}
                      </div>
                  )}
              </div>
              {showAuthorBioTooltip && (
                  <div 
                      className={styles.authorTooltip}
                      ref={authorTooltipRef}
                      role="tooltip"
                      onMouseEnter={handleTooltipMouseEnter} 
                      onMouseLeave={handleAuthorMouseLeave}
                      onFocus={handleTooltipMouseEnter} 
                      onBlur={handleAuthorMouseLeave} 
                  >
                       <div className={styles.authorTooltipHeader}>
                           <Image
                              src={authorData.tooltipImageUrl} 
                              alt={`${authorData.name} headshot`} 
                              width={authorData.tooltipImageWidth} 
                              height={authorData.tooltipImageHeight} 
                              className={styles.authorTooltipImage}
                           />
                           <div className={styles.authorTooltipInfo}>
                               <span className={styles.authorTooltipName}>{authorData.name}</span> 
                               <span className={styles.authorTooltipTitle}>{authorData.title}</span> 
                           </div>
                         </div>
                         {authorData.expertise && authorData.expertise.length > 0 && ( 
                           <div className={styles.authorTooltipExpertise}>
                               <strong>Expertise</strong>
                               <ul>
                                   {authorData.expertise.map(area => <li key={area}>{area}</li>)} 
                               </ul>
                           </div>
                         )}
                         <p className={styles.authorTooltipBioSnippet}>{authorData.bioSnippet}</p> 
                         {authorData.fullBioLink && ( 
                             <Link href={authorData.fullBioLink} legacyBehavior>
                                 <a className={styles.authorTooltipBioLink}>
                                     See full bio
                                 </a>
                             </Link>
                         )}
                         {authorData.socialLinks && ( 
                              <div className={styles.authorTooltipSocials}>
                                  {authorData.socialLinks.linkedin && ( 
                                       <a href={authorData.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={styles.socialIconLink}>
                                          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                                       </a>
                                   )}
                                   {authorData.socialLinks.twitter && ( 
                                       <a href={authorData.socialLinks.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter" className={styles.socialIconLink}>
                                          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-.422.724-.665 1.56-.665 2.452 0 1.697.864 3.198 2.18 4.078-.8-.025-1.555-.247-2.227-.616v.054c0 2.37 1.683 4.333 3.91 4.78-.426.116-.874.174-1.337.174-.31 0-.611-.03-.904-.085.622 1.936 2.421 3.338 4.553 3.377-1.672 1.309-3.781 2.088-6.072 2.088-.394 0-.784-.023-1.169-.069 2.16 1.389 4.723 2.202 7.482 2.202 8.979 0 13.897-7.446 13.897-13.898 0-.21 0-.42-.015-.63.953-.689 1.778-1.56 2.433-2.525z"/></svg>
                                       </a>
                                   )}
                                   {authorData.socialLinks.email && ( 
                                       <a href={`mailto:${authorData.socialLinks.email}`} aria-label="Email" className={styles.socialIconLink}>
                                          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"/></svg>
                                       </a>
                                   )}
                              </div>
                          )}
                  </div>
              )}
          </div>
        </header>

        <div className={styles.heroSection}>
          <Image
            src={heroImageSrc}
            alt={heroImageAlt}
            layout="responsive"
            width={900}
            height={450}
            objectFit="cover"
            priority
            className={styles.heroImage}
          />
        </div>
        
        <p className={styles.disclaimer}>
          Disclaimer: Information is based on sources available up to early 2025. Offers, terms, and benefits change frequently. Verify all details directly with the card issuer before applying. This page may contain affiliate links.
        </p>

        <article>
          <section className={styles.reviewSection}>
            <p>Alright, let's cut through the noise. You want to travel better, spend smarter, and get treated like a VIP without selling a kidney, right? Then you need the right hotel credit card. Forget those dusty brochures – in 2025, the right card is your golden ticket, turning everyday coffees and groceries into dream vacations and serious hotel perks.</p>
            <p>But here’s the catch: not all hotel cards are created equal. Some are rockstars, some are just… okay. And some are actively trying to confuse you with "benefits" you'll never use. As 2025 travel heats up, we’re here to show you which cards actually deliver.</p>
          </section>

          <section className={styles.reviewSection}>
            <h2>Our Mission: Real Free Nights & Status That Matters</h2>
            <p>We're laser-focused on two things that genuinely change your travel game:</p>
            <ul>
              <li><strong>Legit Free Hotel Stays:</strong> We’re talking about significantly slashing your hotel bills by earning points that are easy to use.</li>
              <li><strong>Elite Status That Isn't Just Fluff:</strong> Perks like actual room upgrades (not just a "better view of the parking lot"), free breakfast that’s more than a stale croissant, lounge access for a quiet escape, and late checkouts that save your sanity.</li>
            </ul>
            <p>We’ve sifted through the marketing hype to pick cards that make sense for US travelers right now. With prices doing their crazy dance, hotel points can be your secret weapon, and those free night certificates? Lifesavers.</p>
          </section>

          <section className={styles.reviewSection}>
            <h2>Hotel Loyalty 101: Who's Who and Why Points Aren't All the Same</h2>
            <p>You know the big names: Marriott Bonvoy, Hilton Honors, World of Hyatt, IHG One Rewards, and the like. Here’s a pro tip: Hyatt points are king. They often stretch 2-3 times further than Hilton or IHG points. Keep these rough 2025 values in your back pocket:</p>
            <ul>
              <li>Marriott Bonvoy: ~0.7 cents/point</li>
              <li>Hilton Honors: ~0.6 cents/point</li>
              <li>World of Hyatt: ~1.7-2.2 cents/point (Seriously, these are gold!)</li>
              <li>IHG One Rewards: ~0.5 cents/point</li>
              <li>Wyndham Rewards: ~1.1-1.2 cents/point</li>
              <li>Choice Privileges: ~0.6-1.1 cents/point</li>
            </ul>
            <h3>Award Nights: Predictable vs. "Maybe" Pricing</h3>
            <p>Hyatt and Wyndham use award charts (mostly predictable point costs). Marriott, Hilton, and IHG? They’ve mostly jumped on the "dynamic pricing" train, meaning point costs can swing wildly. This makes those free night certificates with a fixed point cap a bit of a gamble sometimes – you might score a $700 room or find nothing but options in the boonies.</p>
          </section>

          <section className={styles.reviewSection}>
            <h2>How We Picked These Cards (The No-BS Version)</h2>
            <p>We looked for cards that offer genuine, easily usable value for US travelers, especially for free nights and status that actually improves your stay. We balanced fees against real-world benefits you'll use, not just a long list of "features." These are the cards we'd recommend to our own friends and family.</p>
          </section>

          <section className={styles.reviewSection}>
            <h2>Spotlight: The 7 Best Hotel Credit Cards for Real Value & Perks in 2025</h2>
            <p>Okay, "best" depends on you, but these seven cards are serious contenders. We’ll tell you straight up who should get them and why.</p>
            
            {hotelCardData.map((card, index) => (
              <div key={card.id} className={`${styles.cardDetailSection} ${styles.cardSeparator}`}> {/* cardSeparator class was noted as not needed if margin on cardDetailSection itself */}
                <div className={styles.cardHeader}>
                    <div className={styles.cardImageContainer}>
                      <Image
                        src={card.imageSrc}
                        alt={card.imageAlt}
                        width={150} 
                        height={95}  
                        objectFit="contain"
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
                  <li><strong>What Makes It Shine:</strong> {card.shinesFor}</li>
                  {card.creditsAndOffset && <li><strong>Credits & Fee Offsets:</strong> {card.creditsAndOffset}</li>}
                  {card.statusAndEarning && <li><strong>Status & Earning:</strong> {card.statusAndEarning}</li>}
                  {card.valueProposition && <li><strong>Value Proposition:</strong> {card.valueProposition}</li>}
                  {card.realityCheck && <li><strong>Reality Check:</strong> {card.realityCheck}</li>}
                  {card.perks && <li><strong>Key Perks:</strong> {card.perks}</li>}
                  <li><strong>Who Should Get It:</strong> {card.whoShouldGet}</li>
                  {card.whoShouldSkip && <li><strong>Who Should Skip:</strong> {card.whoShouldSkip}</li>}
                </ul>

                <div className={styles.cardButtonsContainer}>
                    <a
                      href={card.applyLink}
                      target="_blank"
                      rel="noopener noreferrer nofollow" 
                      className={`${styles.cardButton} ${styles.applyButton}`}
                    >
                      Apply Now
                    </a>
                     <a
                      href={card.ratesFeesLink}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className={`${styles.cardButton} ${styles.secondaryButton}`}
                    >
                      Rates & Fees
                    </a>
                     <Link href={card.learnMoreLink} legacyBehavior>
                       <a className={`${styles.cardButton} ${styles.secondaryButton}`}>
                         Learn More
                       </a>
                    </Link>
                </div>
              </div>
            ))}
          </section>

          <section className={styles.reviewSection}>
            <h2>Table 1: Top 7 Hotel Credit Cards for 2025: The Cheat Sheet</h2>
            <div className={styles.tableContainer}>
              <table className={styles.comparisonTable}>
                  <thead>
                    <tr>
                    <th>Card Name</th>
                    <th>Annual Fee</th>
                    <th>Welcome Bonus (Example)</th>
                    <th>Key Perk / Status</th>
                    <th>Foreign Transaction Fee (FTF)</th>
                    </tr>
                </thead>
                <tbody>
                    {comparisonHotelData.map(row => (
                    <tr key={row.name}>
                        <td>{row.name}</td>
                        <td>{row.fee}</td>
                        <td>{row.bonus}</td>
                        <td>{row.perk}</td>
                        <td>{row.ftf}</td>
                    </tr>
                    ))}
                </tbody>
              </table>
            </div>
            <p className={styles.tableNote}>Note: Offers, terms, and FTF details can change. Verify directly with issuers. "pts" = points; "FNA" = Free Night Award.</p>
          </section>

          <section className={styles.reviewSection}>
            <h2>So, Which Card Should YOU Actually Get?</h2>
            <p>Look, anyone can list card benefits. You want to know what we think.</p>
            <ul>
                <li><strong>If you’re a luxury traveler loyal to Marriott or Hilton and can use statement credits like a boss:</strong> The Marriott Bonvoy Brilliant or Hilton Honors Aspire are your power plays. The Aspire often edges out for the sheer ease of its Diamond status value if you are a Hilton regular.</li>
                <li><strong>If you want the absolute best points value and straightforward free nights without fee gimmickry:</strong> The World of Hyatt Credit Card is king. For $95, it’s tough to beat. I recommend this one constantly.</li>
                <li><strong>For solid mid-tier status and great perks in a specific program:</strong>
                    <ul>
                        <li><strong>IHG One Rewards Premier:</strong> That 4th night free is a unique, powerful benefit for IHG fans.</li>
                        <li><strong>Hilton Honors Surpass:</strong> Gold status for an effective $0-$50 (if you use the credits) is a steal.</li>
                    </ul>
                </li>
                <li><strong>If you need broad coverage and want to rack up free nights for a low fee:</strong> The Choice Privileges Select Mastercard is an unsung hero. That annual 30,000-point bonus is clutch.</li>
                <li><strong>The Marriott Bonvoy Boundless?</strong> It's fine. A good starter for Marriott if you're aiming for higher status through stays, but the other cards offer more immediate punch for their fee levels.</li>
            </ul>
          </section>

          <section id="editors-essential-takeaways" className={`${styles.reviewSection} ${styles.eetaSection || ''}`}>
            <h2>Editor's Essential Takeaways (EETA)</h2>
            <p>Choosing the right hotel credit card in 2025 boils down to matching your travel style and loyalty with the card's core strengths. Don't get swayed by massive point bonuses if the annual fee and perks don't align with your spending or travel habits.</p>
            <ul>
                <li><strong>For Premium Perks & Status:</strong> The Amex Hilton Aspire and Amex Marriott Brilliant lead the pack, but demand high annual fees that are best offset by frequent, specific types of travel and spending.</li>
                <li><strong>Best Overall Value (Under $100):</strong> The World of Hyatt card continues to offer exceptional value through its high-value points and solid free night certificate.</li>
                <li><strong>Strong Mid-Tier Options:</strong> The IHG Premier (with its 4th night free) and Hilton Surpass (with its Gold status and credits) provide excellent benefits for their respective loyalists at a more moderate fee.</li>
                <li><strong>Budget-Conscious Free Nights:</strong> The Choice Privileges Select card is a dark horse for maximizing free nights via its anniversary bonus if Choice Hotels fit your travel map.</li>
            </ul>
            <p>Always weigh the annual fee against benefits you will *actually* use. A card is only "worth it" if its perks provide more value to *you* than its cost.</p>
          </section>

          <section className={styles.reviewSection}>
            <h2>My Personal Take</h2>
            <p>For most people looking for the best bang-for-buck under $100, The World of Hyatt Credit Card is my top pick due to the incredible value of its points and the free night certificate. If you’re a serious Hilton traveler, the Aspire just makes too much sense, effectively paying you to hold it.</p>
          </section>

          <section className={styles.reviewSection}>
            <h2>Pro Tips: Using Your Hotel Card Like a Pro in 2025</h2>
            <p>Getting the card is just the start. Here’s how to squeeze every drop of value:</p>
            <ul>
              <li><strong>Activate EVERYTHING:</strong> Those credits and lounge passes? Most need you to click a button online. Do it day one.</li>
              <li><strong>Don't Be Shy with Status:</strong> Flash that elite status at check-in. Politely ask about upgrades. Use the lounge. Enjoy that free breakfast. It's why you got the card!</li>
              <li><strong>Know Your Free Night Certs:</strong> Expiration dates are real. Point caps are real. Insider Tip: Some programs (like Marriott) let you "top up" a certificate with a few thousand of your own points to snag a slightly pricier room. Always check!</li>
              <li><strong>Strategic Spending Isn't Just for Nerds:</strong> Use the card for its bonus categories. If you're close to a spending bonus for an extra free night, it might be worth shifting some spend.</li>
              <li><strong>The Landscape Changes:</strong> What's amazing today might be "meh" tomorrow. Keep an ear to the ground on travel blogs (like ours!) for major changes.</li>
            </ul>
          </section>

          <section className={styles.reviewSection}>
            <h2>Your Next Adventure Awaits – Powered by Smart Choices</h2>
            <p>Stop leaving free travel on the table! The right hotel credit card isn't just about luxury (though that's nice); it's about making your travel dreams more accessible and enjoyable. Pick the card that genuinely fits your travel style and spending, use its perks, and get out there.</p>
            <p>Ready to dive deeper? Click on any card name in the spotlight section to learn more or see current offers directly from the issuers (yes, these are often affiliate links, which helps us keep bringing you awesome free content like this!). Now go plan something amazing.</p>
          </section>

        </article>
      </main>
    </>
  );
}

export default BestHotelCardsPage2025;