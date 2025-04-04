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


  const cardsData = [
      {
          id: 'chase-freedom-unlimited',
          name: 'Chase Freedom Unlimited®',
          tciRating: '8.1',
          applyUrl: '#', // Replace with ACTUAL affiliate link
          learnMoreUrl: '/reviews/chase-freedom-unlimited', // Example internal link
          ratesFeesUrl: 'https://sites.chase.com/services/creatives/pricingandterms.html/content/dam/pricingandterms/LGC56029.html',
          imageUrl: '/images/freedom_unlimited_card_alt (1).png', // Path relative to public folder
          imageAlt: 'Chase Freedom Unlimited® Card',
          imageWidth: 250, // *** REPLACE WITH ACTUAL WIDTH ***
          imageHeight: 158, // *** REPLACE WITH ACTUAL HEIGHT ***
          bonus: 'Earn an additional 1.5% cash back on everything you buy (up to $20,000 spent in the first year). That’s up to $300 in extra cash back!',
          earningRates: [
              '5% cash back on travel purchased through Chase Ultimate Rewards®.',
              '3% cash back on dining at restaurants and drugstores.',
              '1.5% cash back on all other purchases.',
          ],
          keyFeatures: [
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
          tciRating: '8.2',
          applyUrl: '#', // Replace with ACTUAL affiliate link
          learnMoreUrl: '/reviews/us-bank-altitude-connect', // Example internal link
          ratesFeesUrl: 'https://onboarding.usbank.com/consumer/cards/8BB5BD89H1/18569/87702/start',
          imageUrl: '/images/photo-altitude-connect-consumer.png',
          imageAlt: 'U.S. Bank Altitude® Connect Visa Signature® Card',
          imageWidth: 250, // *** REPLACE WITH ACTUAL WIDTH ***
          imageHeight: 158, // *** REPLACE WITH ACTUAL HEIGHT ***
          bonus: 'Earn 50,000 bonus points after spending $2,000 in the first 120 days. (Valued at $500 in travel or statement credits).',
          earningRates: [
              '5X points on prepaid hotels and car rentals booked directly in the Altitude Rewards Center.',
              '4X points on travel and gas station purchases.',
              '2X points on dining, grocery stores, and streaming services.',
              '1X points on all other purchases.',
          ],
          keyFeatures: [
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
           annualFee: '$0', // Note: Card description mentions $95 fee, table says $0. Verify!
      },
      // --- ADD ALL OTHER CARD DATA OBJECTS HERE (Citi Custom Cash, BoFA Travel, Discover it Miles, WF Active Cash, Blue Cash, Citi Diamond, WF Reflect, US Bank Cash+) ---
      {
          id: 'citi-custom-cash',
          name: 'Citi Custom Cash® Card',
          tciRating: '7.5',
          applyUrl: '#',
          learnMoreUrl: '/reviews/citi-custom-cash',
          ratesFeesUrl: 'https://online.citi.com/US/ag/cards/displayterms?app=UNSOL&HKOP=541175b33e25f6837a0d7af4ba29114f264447b80dcde5f6be6db7d02fed5901',
          imageUrl: '/images/download.png',
          imageAlt: 'Citi Custom Cash® Card',
          imageWidth: 250, // *** REPLACE ***
          imageHeight: 158, // *** REPLACE ***
          bonus: 'Earn $200 cash back after spending $1,500 on purchases in the first 3 months of account opening.',
          earningRates: [
              '5% cash back on your top eligible spend category each billing cycle (up to $500 in spending).',
              '1% cash back on all other purchases.',
          ],
          keyFeatures: [
              'No annual fee, making it ideal for cost-conscious users.',
              '0% intro APR on balance transfers and purchases for the first 15 months. After that, a variable APR applies.',
              'Redeem cash back as a statement credit or direct deposit.',
          ],
          additionalPerks: [
               'Automatic category adjustment ensures you maximize cash back in the category you spend the most on each cycle.',
               'Access to Citi Entertainment® for exclusive events and ticket presales.',
               'No foreign transaction fees, perfect for travel and international purchases.', // Verify this perk for this card
          ],
          bestFor: 'Individuals who want flexible rewards based on their spending habits and prefer a no-annual-fee card with a strong cash-back program.',
          // Table Data
          introApr: '0% for 15 months',
          balanceTransferFee: '5% (min $5)',
          rewards: '5% on top category (up to $500/month), 1% all else',
          annualFee: '$0',
      },
      // ... Add BoFA Travel Rewards Data ...
      // ... Add Discover it Miles Data ...
      // ... Add Wells Fargo Active Cash Data ...
      // ... Add Blue Cash Everyday Data ...
      // ... Add Citi Diamond Preferred Data ...
      // ... Add Wells Fargo Reflect Data ...
      // ... Add U.S. Bank Cash+ Data ...
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
                                  src="/images/AdobeStock_446734479.webp" // Relative to /public
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