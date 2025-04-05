// File: pages/zeroapr/best-zero-apr-cards-2025.js

// !!! WARNING: THIS FILE CONTAINS PLACEHOLDER DATA/URLs/DIMENSIONS !!!
// !!! YOU MUST REPLACE ALL PLACEHOLDERS MARKED WITH '!!!' BEFORE DEPLOYMENT !!!
// !!! VERIFY ALL CARD DETAILS AGAINST OFFICIAL ISSUER INFO !!!

import React, { useState, useEffect, useCallback, useRef } from 'react'; // Import React hooks
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/ZeroAprIndex.module.css'; // !!! Ensure path is correct !!!
import Header from '../../components/Header'; // Ensure path is correct
import Footer from '../../components/Footer'; // Ensure path is correct


// --- COMPLETE Card Data (VERIFY ALL DETAILS & REPLACE PLACEHOLDERS!) ---
const cardsData = [
    // Example entry structure (PASTE ALL 10 CARD OBJECTS HERE):
     {
        id: 'chase-freedom-unlimited',
        name: 'Chase Freedom Unlimited®',
        tciRating: '7.5',
        applyUrl: '#', // *** REPLACE: Affiliate Link ***
        learnMoreUrl: '/reviews/chase-freedom-unlimited', // *** REPLACE: Internal Link ***
        ratesFeesUrl: 'https://sites.chase.com/services/creatives/pricingandterms.html/content/dam/pricingandterms/LGC56029.html',
        imageUrl: '/images/freedom_unlimited_card_alt (1).png', // *** Ensure image exists in /public/images ***
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
        imageUrl: '/images/photo-altitude-connect-consumer.png', // *** Ensure image exists in /public/images ***
        imageAlt: 'U.S. Bank Altitude® Connect Visa Signature® Card',
        imageWidth: 250, // *** REPLACE: Actual Width ***
        imageHeight: 158, // *** REPLACE: Actual Height ***
        bonus: 'Earn 50,000 bonus points after spending $2,000 in the first 120 days. <em>(Valued at $500 in travel or statement credits).</em>',
        earningRates: [ '5X points on prepaid hotels and car rentals booked directly in the Altitude Rewards Center.', '4X points on travel and gas station purchases.', '2X points on dining, grocery stores, and streaming services.', '1X points on all other purchases.' ],
        keyFeatures: [ '0% Intro APR for 12 months on balance transfers.', 'Points never expire as long as the account remains open and in good standing.', 'No foreign transaction fees.', 'Automatic $30 annual credit for streaming services like Netflix and Spotify.' ],
        additionalPerks: [ 'Cell phone protection when you pay your monthly bill with the card.', 'Travel and emergency assistance services.', 'Visa Signature® concierge services.' ],
        bestFor: 'Travelers and commuters who want high rewards on travel, gas, and streaming services, with no foreign transaction fees.',
        introApr: '0% for 12 billing cycles', balanceTransferFee: '3% (min $5)', rewards: '5x hotels & car rentals, 4x travel & gas, 2x dining', annualFee: '$0',
    },
    // ... (PASTE ALL 10 CARD OBJECTS HERE) ...
    { id: 'citi-custom-cash', name: 'Citi Custom Cash® Card', tciRating: '7.5', applyUrl: '#', learnMoreUrl: '/reviews/citi-custom-cash', ratesFeesUrl: '...', imageUrl: '/images/download.png', imageAlt: '...', imageWidth: 250, imageHeight: 158, bonus: '...', earningRates: [], keyFeatures: [], additionalPerks: [], bestFor: '...', introApr: '0% for 15 months', balanceTransferFee: '...', rewards: '...', annualFee: '$0' },
    { id: 'bofa-travel-rewards', name: 'Bank of America® Travel Rewards Credit Card', tciRating: '7.4', applyUrl: '#', learnMoreUrl: '/reviews/bofa-travel-rewards', ratesFeesUrl: '...', imageUrl: '/images/8blm_trvsigcm_v_250x158.png', imageAlt: '...', imageWidth: 250, imageHeight: 158, bonus: '...', earningRates: [], keyFeatures: [], additionalPerks: [], bestFor: '...', introApr: '0% for 15 billing cycles', balanceTransferFee: '...', rewards: '...', annualFee: '$0' },
    { id: 'discover-it-miles', name: 'Discover it® Miles', tciRating: '7.0', applyUrl: '#', learnMoreUrl: '/reviews/discover-it-miles', ratesFeesUrl: '...', imageUrl: '/images/cardart-travel-beachcard-620-382.webp', imageAlt: '...', imageWidth: 620, imageHeight: 382, bonus: '...', earningRates: [], keyFeatures: [], additionalPerks: [], bestFor: '...', introApr: '0% for 15 months', balanceTransferFee: '...', rewards: '...', annualFee: '$0' },
    { id: 'wells-fargo-active-cash', name: 'Wells Fargo Active Cash® Card', tciRating: '7.8', applyUrl: '#', learnMoreUrl: '/reviews/wells-fargo-active-cash', ratesFeesUrl: '...', imageUrl: '/images/WF_ActiveCash_VS_Collateral_Front_RGB.png', imageAlt: '...', imageWidth: 250, imageHeight: 158, bonus: '...', earningRates: [], keyFeatures: [], additionalPerks: [], bestFor: '...', introApr: '0% for 15 months', balanceTransferFee: '...', rewards: '...', annualFee: '$0' },
    { id: 'blue-cash-everyday', name: 'Blue Cash Everyday® Card from American Express', tciRating: '7.7', applyUrl: '#', learnMoreUrl: '/reviews/blue-cash-everyday', ratesFeesUrl: '...', imageUrl: '/images/NUS000000305_480x304_straight_withname.avif', imageAlt: '...', imageWidth: 480, imageHeight: 304, bonus: '...', earningRates: [], keyFeatures: [], additionalPerks: [], bestFor: '...', introApr: '0% for 15 months', balanceTransferFee: '...', rewards: '...', annualFee: '$0' },
    { id: 'citi-diamond-preferred', name: 'Citi® Diamond Preferred® Card', tciRating: '6.5', applyUrl: '#', learnMoreUrl: '/reviews/citi-diamond-preferred', ratesFeesUrl: '...', imageUrl: '/images/download (1).png', imageAlt: '...', imageWidth: 250, imageHeight: 158, bonus: '...', earningRates: [], keyFeatures: [], additionalPerks: [], bestFor: '...', introApr: '0% for 21 months', balanceTransferFee: '...', rewards: '...', annualFee: '$0' },
    { id: 'wells-fargo-reflect', name: 'Wells Fargo Reflect® Card', tciRating: '6.6', applyUrl: '#', learnMoreUrl: '/reviews/wells-fargo-reflect', ratesFeesUrl: '...', imageUrl: '/images/Reflect_homepage_m.png', imageAlt: '...', imageWidth: 250, imageHeight: 158, bonus: '...', earningRates: [], keyFeatures: [], additionalPerks: [], bestFor: '...', introApr: '0% for 18 months (extendable by 3 months)', balanceTransferFee: '...', rewards: '...', annualFee: '$0' },
    { id: 'us-bank-cash-plus', name: 'U.S. Bank Cash+® Visa Signature® Card', tciRating: '7.4', applyUrl: '#', learnMoreUrl: '/reviews/us-bank-cash-plus', ratesFeesUrl: '...', imageUrl: '/images/Cash+_Front_Angle_Reflection.png', imageAlt: '...', imageWidth: 250, imageHeight: 158, bonus: '...', earningRates: [], keyFeatures: [], additionalPerks: [], bestFor: '...', introApr: '0% for 15 months', balanceTransferFee: '...', rewards: '...', annualFee: '$0' }
];


// --- Fully Optimized Structured Data (Schema - Define based on full cardsData) ---
// *** Replace yourdomain.com and verify/update all URLs ***
const siteUrl = "https://www.travelcardinsider.com";
const pageUrl = `${siteUrl}/zeroapr/best-zero-apr-cards-2025`; // *** Use correct, renamed page path ***
const logoUrl = `${siteUrl}/images/logo-optimized.png`; // *** Use your actual logo URL ***
const heroImageUrl = `${siteUrl}/images/0apr-hero.jpg`; // *** Use your actual hero image URL ***
const dateModifiedISO = new Date().toISOString();

const schemaData = {
    "@context": "https://schema.org",
    "@graph": [ /* ... (Paste the full schemaData.@graph array here) ... */ ]
};


// --- Rating Tooltip Content ---
const ratingCriteria = [ 'Rewards & multipliers', 'Fees & sign-up bonus', 'Travel perks & lounge access', 'Redemption flexibility', 'User experience & synergy' ];


// *** ENSURE THIS IS THE ONLY 'export default' in the file ***
export default function BestZeroAprCardsPage() {
    // --- Tooltip State and Logic ---
    const [activeTooltip, setActiveTooltip] = useState(null);
    const tooltipRef = useRef(null);

    const handleIconClick = useCallback((event, card) => {
        console.log('Icon clicked! Card ID:', card.id); // DEBUG LOG 1
        event.preventDefault();
        event.stopPropagation();
        if (activeTooltip && activeTooltip.id === card.id) {
            setActiveTooltip(null);
        } else {
            const rect = event.currentTarget.getBoundingClientRect();
            const top = window.scrollY + rect.bottom + 5;
            const left = window.scrollX + rect.left;
             console.log('Setting activeTooltip state:', { id: card.id, rating: card.tciRating, top: top, left: left }); // DEBUG LOG 2
            setActiveTooltip({ id: card.id, rating: card.tciRating, top: top, left: left });
        }
    }, [activeTooltip]);

    const closeTooltip = useCallback(() => {
        setActiveTooltip(null);
    }, []);

    useEffect(() => {
        if (!activeTooltip) return;
        const handleClickOutside = (event) => {
            const isInfoButton = event.target.closest(`.${styles.infoIconButton}`);
            if (tooltipRef.current && !tooltipRef.current.contains(event.target) && !isInfoButton) {
                 closeTooltip();
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => { document.removeEventListener('mousedown', handleClickOutside); };
    }, [activeTooltip, closeTooltip]);
    // --- End Tooltip State and Logic ---

    console.log('Rendering component, current activeTooltip state:', activeTooltip); // DEBUG LOG 3

    return (
        <>
             <Header />
            <Head>
                 <title>Premier 0% APR & Balance Transfer Cards 2025 | TravelCardInsider</title>
                 <meta name="description" content="Discover expertly curated 0% APR and balance transfer credit cards for 2025. Compare interest-free offers, rewards, and benefits to save money."/>
                 <link rel="canonical" href={pageUrl}/>
                 {/* Add other meta/link tags */}
                 <link rel="preconnect" href="https://fonts.googleapis.com" />
                 <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                 <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&family=Playfair+Display:wght@700&display=swap" rel="stylesheet" />
                 {/* Ensure schemaData is defined */}
                 {schemaData && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />}
            </Head>

            <main className={styles.pageWrapper}>

                {/* --- Hero Section --- */}
                <section className={styles.hero}>
                    <div className={styles.heroContent}>
                        <h1 className={styles.heroTitle}>Unlock 0% APR & Balance Transfer Savings in 2025</h1>
                        <p className={styles.heroDescription}>Eliminate interest charges and simplify debt. Explore our premier selection of credit cards offering introductory 0% APR periods for purchases and balance transfers.</p>
                        <div className={styles.heroCta}><a href="#comparison-table" className={`${styles.ctaButton} ${styles.ctaPrimary}`}>Compare Top Cards</a></div>
                        <p className={styles.heroDisclaimer}>Advertiser Disclosure: We may receive compensation via links on this page. Opinions are our own. Offers are subject to change; verify terms with the issuer.</p>
                    </div>
                </section>

                {/* --- Comparison Table Section --- */}
                <section id="comparison-table" className={styles.comparisonSection}>
                    <h2 className={styles.sectionTitle}>Quick Card Comparison</h2>
                    <div className={styles.tableResponsive}>
                        <table className={styles.comparisonTable}>
                            <thead>
                                <tr>
                                    <th>Credit Card</th><th>Intro APR Offer</th><th>Balance Transfer Fee</th>
                                    <th>Key Reward/Feature</th><th>Annual Fee</th><th>Apply / Details</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cardsData.map((card) => (
                                    <tr key={`${card.id}-table`}>
                                        <td data-label="Credit Card">
                                            <span className={styles.cardTableName}>{card.name}</span>
                                            <div className={styles.tableRating}>
                                                {/* Tooltip Trigger Button */}
                                                <button type="button" className={styles.infoIconButton} onClick={(e) => handleIconClick(e, card)} aria-label={`Show rating details for ${card.name}`} title="Our TCI rating info">
                                                    <svg aria-hidden="true" focusable="false" className={styles.infoIcon} width="13" height="13" viewBox="0 0 416.979 416.979"><path d="M356 61.1c-81.4-81.5-213.4-81.6-294.8-.2 -81.5 81.4-81.6 213.4-.2 294.8 81.4 81.5 213.4 81.6 294.8.2C437.3 274.6 437.4 142.6 356 61.1zM208.6 334.8c-11 0-20-9-20-20s9-20 20-20 20 9 20 20-9 20-20 20zm32.4-120.2c-11.4 6.7-12.4 14.9-12.4 38.5 -.003 1.6-.008 3.1-.017 4.7 -0.07 11.2-9.1 20.2-20.3 20.2 -0.04 0-.09 0-.13 0 -11.2-0.07-20.2-9.2-20.2-20.4 0.01-1.5 0.01-3 0.02-4.6 0.05-24.3 0.1-54.5 32.5-73.5 26-15.2 29.3-25.2 26.3-38.3 -3.6-15.4-17.7-19.4-28.6-18.1 -3.7.4-22.1 3.5-22.1 21.6 0 11.2-9.1 20.3-20.3 20.3s-20.3-9.1-20.3-20.3c0-32.6 23.9-58.1 58-62 35.2-4 65.1 16.2 72.8 49.3C297.8 181.4 256.6 205.5 241 214.6z"></path></svg>
                                                 </button>
                                                 TCI Rating: <strong>{card.tciRating}</strong>/10
                                             </div>
                                         </td>
                                         <td data-label="Intro APR Offer">{card.introApr}</td>
                                         <td data-label="BT Fee">{card.balanceTransferFee}</td>
                                         <td data-label="Key Reward/Feature">{card.rewards || 'N/A'}</td>
                                         <td data-label="Annual Fee">{card.annualFee}</td>
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
                                            {/* Tooltip Trigger Button */}
                                            <button type="button" className={styles.infoIconButton} onClick={(e) => handleIconClick(e, card)} aria-label={`Show rating details for ${card.name}`} title="Our TCI rating info">
                                                <svg aria-hidden="true" focusable="false" className={styles.infoIcon} width="15" height="15" viewBox="0 0 416.979 416.979"><path d="M356 61.1c-81.4-81.5-213.4-81.6-294.8-.2 -81.5 81.4-81.6 213.4-.2 294.8 81.4 81.5 213.4 81.6 294.8.2C437.3 274.6 437.4 142.6 356 61.1zM208.6 334.8c-11 0-20-9-20-20s9-20 20-20 20 9 20 20-9 20-20 20zm32.4-120.2c-11.4 6.7-12.4 14.9-12.4 38.5 -.003 1.6-.008 3.1-.017 4.7 -0.07 11.2-9.1 20.2-20.3 20.2 -0.04 0-.09 0-.13 0 -11.2-0.07-20.2-9.2-20.2-20.4 0.01-1.5 0.01-3 0.02-4.6 0.05-24.3 0.1-54.5 32.5-73.5 26-15.2 29.3-25.2 26.3-38.3 -3.6-15.4-17.7-19.4-28.6-18.1 -3.7.4-22.1 3.5-22.1 21.6 0 11.2-9.1 20.3-20.3 20.3s-20.3-9.1-20.3-20.3c0-32.6 23.9-58.1 58-62 35.2-4 65.1 16.2 72.8 49.3C297.8 181.4 256.6 205.5 241 214.6z"></path></svg>
                                             </button>
                                             TCI Rating: <strong>{card.tciRating}</strong>/10
                                         </div>
                                     </div>
                                </div>
                                <div className={styles.cardBody}>
                                     {card.bonus && ( <div className={`${styles.cardFeatureBlock} ${styles.bonusBlock}`}><h4 tabIndex={-1}>Welcome Offer</h4><p dangerouslySetInnerHTML={{ __html: card.bonus }}></p></div>)}
                                     {card.earningRates?.length > 0 && ( <div className={styles.cardFeatureBlock}><h4 tabIndex={-1}>Earning Rewards</h4><ul className={styles.featureList}>{card.earningRates.map((rate, i) => <li key={`earn-${i}`}>{rate}</li>)}</ul></div>)}
                                     {card.keyFeatures?.length > 0 && ( <div className={styles.cardFeatureBlock}><h4 tabIndex={-1}>Key 0% APR & Card Features</h4><ul className={styles.featureList}>{card.keyFeatures.map((feature, i) => <li key={`feature-${i}`}>{feature}</li>)}</ul></div>)}
                                     {card.additionalPerks?.length > 0 && ( <div className={styles.cardFeatureBlock}><h4 tabIndex={-1}>Additional Perks</h4><ul className={styles.featureList}>{card.additionalPerks.map((perk, i) => <li key={`perk-${i}`}>{perk}</li>)}</ul></div>)}
                                     <div className={styles.cardFeatureBlock}><h4 tabIndex={-1}>Best For</h4><p>{card.bestFor}</p></div>
                                 </div>
                                <div className={styles.cardActions}>
                                     <a href={card.applyUrl} className={`${styles.ctaButton} ${styles.ctaApply}`} target="_blank" rel="noopener noreferrer sponsored">Apply Now<span className={styles.ctaSubtext}>on issuer's secure site</span></a>
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
                <div
                    ref={tooltipRef}
                    className={styles.ratingTooltip}
                    style={{ position: 'absolute', top: `${activeTooltip.top}px`, left: `${activeTooltip.left}px` }}
                    role="tooltip"
                    aria-live="polite"
                >
                    <strong>TCI Rating: {activeTooltip.rating}/10</strong>
                    <p className={styles.tooltipIntro}>This rating is based on:</p>
                    <ul className={styles.tooltipList}>
                         {ratingCriteria.map((criterion, index) => <li key={index}>{criterion}</li>)}
                    </ul>
                </div>
            )}

             <Footer />
        </>
    );
}