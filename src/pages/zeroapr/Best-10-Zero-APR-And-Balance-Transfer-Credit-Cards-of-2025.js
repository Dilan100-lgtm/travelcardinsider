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

export default function ZeroAprIndexPage() {
  // Placeholder function for info icon - Implement tooltip/modal logic
  const handleInfoClick = (e) => {
    e.preventDefault();
    console.log('Info icon clicked for:', e.currentTarget.getAttribute('aria-label'));
    // Implement tooltip/modal display here
  };

  // Use a fixed date or fetch dynamically server-side if possible for accuracy
  const lastModifiedDate = "2025-04-05"; // !!! UPDATE MANUALLY or replace with dynamic logic !!!

  // Card Data (Using placeholders - REPLACE ALL with actual data)
  // !!! IMPORTANT: Provide ACTUAL image widths/heights for Next/Image !!!
  const cardData = [
    { id: "chase-freedom-unlimited", name: "Chase Freedom Unlimited®", rating: "8.1", imgPath: "/freedom_unlimited_card_alt (1).png", imgWidth: 300, imgHeight: 189, bonus: "Earn an additional 1.5% cash back...", earning: ["5% cash back on travel...","3% cash back...","1.5% cash back..."], features: ["0% Intro APR for 15 months...","Points worth 25% more...","No annual fee."], perks: ["Trip cancellation...","Purchase protection...","Free credit score..."], bestFor: "Everyday spenders...", applyLink: "/apply/chase-freedom-unlimited-placeholder", reviewLink: "/reviews/chase-freedom-unlimited-placeholder", ratesLink: "https://sites.chase.com/..." },
    { id: "us-bank-altitude-connect", name: "U.S. Bank Altitude® Connect Visa Signature® Card", rating: "8.2", imgPath: "/photo-altitude-connect-consumer.png", imgWidth: 300, imgHeight: 189, bonus: "Earn 50,000 bonus points...", earning: ["5X points on prepaid hotels...","4X points on travel...","2X points on dining...","1X points..."], features: ["0% Intro APR for 12 months...","Points never expire...","No foreign transaction fees.","$30 annual streaming credit."], perks: ["Cell phone protection...","Travel assistance...","Concierge services."], bestFor: "Travelers and commuters...", applyLink: "/apply/us-bank-altitude-connect-placeholder", reviewLink: "/reviews/us-bank-altitude-connect-placeholder", ratesLink: "https://onboarding.usbank.com/..." },
    { id: "citi-custom-cash", name: "Citi Custom Cash® Card", rating: "7.5", imgPath: "/download.png", imgWidth: 300, imgHeight: 189, bonus: "Earn $200 cash back...", earning: ["5% cash back on top category...","1% cash back..."], features: ["No annual fee.","0% intro APR for 15 months...","Redeem as statement credit..."], perks: ["Automatic category adjustment.","Citi Entertainment® access.","No foreign transaction fees."], bestFor: "Individuals wanting flexible rewards...", applyLink: "/apply/citi-custom-cash-placeholder", reviewLink: "/reviews/citi-custom-cash-placeholder", ratesLink: "https://online.citi.com/..." },
    { id: "bofa-travel-rewards", name: "Bank of America® Travel Rewards Credit Card", rating: "7.4", imgPath: "/8blm_trvsigcm_v_250x158.png", imgWidth: 250, imgHeight: 158, bonus: "Earn 25,000 online bonus points...", earning: ["1.5 points per dollar...","Preferred Rewards members earn more..."], features: ["No annual fee.","0% intro APR on purchases for 18 cycles...","No foreign transaction fees."], perks: ["Redeem for travel expenses...","Travel insurance...","Preferred Rewards access."], bestFor: "Budget-conscious travelers...", applyLink: "/apply/bofa-travel-rewards-placeholder", reviewLink: "/reviews/bofa-travel-rewards-placeholder", ratesLink: "https://www.bankofamerica.com/..." },
    { id: "discover-it-miles", name: "Discover it® Miles", rating: "7.0", imgPath: "/cardart-travel-beachcard-620-382.webp", imgWidth: 310, imgHeight: 191, bonus: "Unlimited Mileage Match...", earning: ["1.5 miles per dollar...","Bonus miles matched..."], features: ["No annual fee.","0% intro APR on purchases for 15 months...","No foreign transaction fees."], perks: ["Redeem for travel...","Flexible redemption...","Free FICO® Score...","Identity Theft Protection..."], bestFor: "Travelers valuing simplicity...", applyLink: "/apply/discover-it-miles-placeholder", reviewLink: "/reviews/discover-it-miles-placeholder", ratesLink: "https://www.discovercard.com/..." },
    { id: "wells-fargo-active-cash", name: "Wells Fargo Active Cash® Card", rating: "7.8", imgPath: "/WF_ActiveCash_VS_Collateral_Front_RGB.png", imgWidth: 300, imgHeight: 189, bonus: "Earn a $200 cash rewards bonus...", earning: ["Unlimited 2% cash rewards...","No categories..."], features: ["0% intro APR for 15 months...","Variable APR applies...","No annual fee.","Cell phone protection..."], perks: ["Wells Fargo Rewards access.","Digital wallet compatible.","Zero Liability Protection."], bestFor: "Consumers wanting simple cash rewards...", applyLink: "/apply/wells-fargo-active-cash-placeholder", reviewLink: "/reviews/wells-fargo-active-cash-placeholder", ratesLink: "https://www.wellsfargo.com/..." },
    { id: "blue-cash-everyday", name: "Blue Cash Everyday® Card from American Express", rating: "7.7", imgPath: "/NUS000000305_480x304_straight_withname.avif", imgWidth: 380, imgHeight: 241, bonus: "Earn a $200 statement credit...", earning: ["3% cash back U.S. supermarkets...","3% U.S. gas stations...","3% U.S. online retail...","1% other..."], features: ["0% intro APR for 15 months...","No annual fee.","Redeem Reward Dollars..."], perks: ["Purchase protection.","Car rental insurance.","Plan It® feature.","Amex Experiences."], bestFor: "Individuals seeking rewards on groceries, gas, online shopping...", applyLink: "/apply/blue-cash-everyday-placeholder", reviewLink: "/reviews/blue-cash-everyday-placeholder", ratesLink: "https://www.americanexpress.com/..." },
    { id: "citi-diamond-preferred", name: "Citi® Diamond Preferred® Card", rating: "6.5", imgPath: "/download (1).png", imgWidth: 300, imgHeight: 189, bonus: "No specific cash bonus.", earning: ["No rewards program."], features: ["0% intro APR for 21 months on balance transfers.","0% intro APR for 12 months on purchases.","No annual fee."], perks: ["Citi Entertainment® access.","Choose payment due date."], bestFor: "Those prioritizing a long balance transfer period...", applyLink: "/apply/citi-diamond-preferred-placeholder", reviewLink: "/reviews/citi-diamond-preferred-placeholder", ratesLink: "https://online.citi.com/..." },
    { id: "wells-fargo-reflect", name: "Wells Fargo Reflect® Card", rating: "6.6", imgPath: "/Reflect_homepage_m.png", imgWidth: 300, imgHeight: 189, bonus: "No specific cash bonus.", earning: ["No rewards program."], features: ["0% intro APR for 21 months...","Intro APR can extend 3 months...","No annual fee.","Cell phone protection."], perks: ["My Wells Fargo Deals.","Zero Liability protection."], bestFor: "Maximum intro APR period for purchases or transfers...", applyLink: "/apply/wells-fargo-reflect-placeholder", reviewLink: "/reviews/wells-fargo-reflect-placeholder", ratesLink: "https://www.wellsfargo.com/..." },
    { id: "us-bank-cash-plus", name: "U.S. Bank Cash+® Visa Signature® Card", rating: "7.4", imgPath: "/Cash+_Front_Angle_Reflection.png", imgWidth: 300, imgHeight: 189, bonus: "Earn $200 after spending $1,000...", earning: ["5% cash back on two chosen categories...","2% cash back on one everyday category...","1% unlimited cash back..."], features: ["No annual fee.","0% introductory APR for 15 months...","Customizable cash-back."], perks: ["Zero fraud liability.","Roadside assistance.","Extended warranty."], bestFor: "Customizing cash-back rewards...", applyLink: "/apply/us-bank-cash-plus-placeholder", reviewLink: "/reviews/us-bank-cash-plus-placeholder", ratesLink: "https://onboarding.usbank.com/..." },
  ];


  return (
    <>
      <Head>
        {/* Basic Meta Tags */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* Add lang="en" in your root layout/document file */}

        {/* Primary SEO Tags */}
        <title>Best 0% APR and Balance Transfer Credit Cards for 2025 | TravelCardInsider</title>
        <meta
          name="description"
          content="Compare the top 0% APR and balance transfer credit cards of 2025. Maximize rewards, enjoy interest-free periods, and simplify your debt payoff with our handpicked selections."
        />
        <meta
          name="keywords"
          content="0% APR, balance transfer, credit cards, best credit cards, interest-free, debt consolidation, travelcardinsider"
        />

        {/* Canonical URL */}
        <link rel="canonical" href="https://www.travelcardinsider.com/zero-apr-balance-transfer-cards" />

        {/* Open Graph / Social Media */}
        <meta property="og:title" content="Best 0% APR and Balance Transfer Credit Cards for 2025 | TravelCardInsider" />
        <meta property="og:description" content="Explore our curated list of the top 0% APR and balance transfer credit cards for 2025." />
        <meta property="og:url" content="https://www.travelcardinsider.com/zero-apr-balance-transfer-cards" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.travelcardinsider.com/images/og-zero-apr-cards.jpg" /> {/* !!! REPLACE !!! */}
         <meta property="og:image:width" content="1200" />
         <meta property="og:image:height" content="630" />
         <meta property="og:site_name" content="TravelCardInsider" />

        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@TCardInsider" /> {/* !!! REPLACE !!! */}
        <meta name="twitter:title" content="Best 0% APR and Balance Transfer Credit Cards for 2025 | TravelCardInsider"/>
        <meta name="twitter:description" content="Zero in on interest-free credit card offers for 2025. Transfer balances, earn rewards, and save on interest." />
        <meta name="twitter:image" content="https://www.travelcardinsider.com/images/og-zero-apr-cards.jpg" /> {/* !!! REPLACE !!! */}

        {/* Favicons */}
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        {/* REMOVED redundant Google Font links */}

        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {`{
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.travelcardinsider.com/zero-apr-balance-transfer-cards" },
            "headline": "Best 0% APR and Balance Transfer Credit Cards for 2025",
            "description": "Compare the best 0% APR and balance transfer credit cards for 2025. Find the top cards offering interest-free financing, rewards, and balance transfer perks.",
            "author": { "@type": "Organization", "name": "TravelCardInsider" },
            "datePublished": "2025-01-01",
            "dateModified": "${lastModifiedDate}",
            "publisher": {
              "@type": "Organization",
              "name": "TravelCardInsider",
              "logo": { "@type": "ImageObject", "url": "https://www.travelcardinsider.com/images/logo-schema.png", "width": 600, "height": 60 }
            },
            "image": "https://www.travelcardinsider.com/images/hero-zero-apr-cards.jpg",
            "keywords": "0% APR, balance transfer, credit cards, best credit cards, interest-free, TravelCardInsider",
            "mainEntity": {
              "@type": "ItemList",
              "name": "Top 10 0% APR & Balance Transfer Credit Cards",
              "itemListOrder": "https://schema.org/ItemListOrderUnordered",
              "numberOfItems": ${cardData.length}, // Dynamic count
              "itemListElement": ${JSON.stringify(
                cardData.map((card, index) => ({
                  "@type": "ListItem",
                  "position": index + 1,
                  "item": {
                    "@type": "CreditCard",
                    "name": card.name,
                    "image": `https://www.travelcardinsider.com${card.imgPath}`, // !!! Update Base URL/Path if needed !!!
                    "url": `https://www.travelcardinsider.com${card.reviewLink}`, // !!! Update Base URL/Path !!!
                    "description": card.bonus, // Using bonus as description - adjust if needed
                    "brand": { "@type": "Organization", "name": card.name.split(' ')[0] }, // Simple brand guess
                    "aggregateRating": { "@type": "AggregateRating", "ratingValue": card.rating, "bestRating": "10" }, // Simple rating
                    "offers": { "@type": "Offer", "url": `https://www.travelcardinsider.com${card.applyLink}` } // !!! Update Base URL/Path !!!
                    // !!! Add more offer details (fees, APR) if available and accurate !!!
                  }
                }))
              )}
            }
          }`}
        </script>
      </Head>

      <Header />

      <main className={styles.mainWrapper} id="main-content">

        {/* HERO SECTION */}
        <section className={styles.hero} aria-labelledby="page-heading">
           {/* ... Hero content from previous version ... */}
           <div className={styles.container}>
            <h1 id="page-heading" className={styles.heroTitle}>
              Discover the Best 10 0% APR And Balance Transfer Credit Cards of 2025
            </h1>
            <p className={styles.heroDescription}>
              Compare top-rated travel credit cards, maximize rewards, and unlock exclusive perks for your next adventure. Whether you’re a frequent flyer, luxury traveler, or budget explorer, find the perfect card to suit your needs.
            </p>
            <div className={styles.heroCta}>
              <a href="#card-comparison-table" className={`${styles.ctaButton} ${styles.ctaPrimary}`}>
                Compare Cards Now
              </a>
            </div>
            <div className={styles.heroImage}>
               {/* !!! UPDATE src. REPLACE width/height with ACTUAL dimensions !!! */}
              <Image
                src="/AdobeStock_446734479.webp"
                alt="Wallet showing zero dollar bill next to credit cards"
                width={600}  // !!! REPLACE !!!
                height={400} // !!! REPLACE !!!
                priority={true}
              />
            </div>
            <p className={styles.disclaimer}>
              We may receive compensation when you click on links to certain credit card products on our site. However, our editorial opinions remain our own. Offers are subject to change. Always verify terms with the official issuer.
            </p>
          </div>
        </section>

        {/* REMOVED invalid script tag */}

        {/* TABLE SECTION */}
        <section className={styles.cardTableSection} id="card-comparison-table" aria-labelledby="table-heading">
           {/* ... Table structure from previous version ... */}
            <h2 id="table-heading" style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
             0% APR & Balance Transfer Card Comparison
          </h2>
          <div className={styles.tableResponsive}>
            <table className={styles.cardTable}>
              <thead>
                <tr>
                  <th scope="col">Card Name & Rating</th>
                  <th scope="col">Intro APR (Purchases / Balance Transfer)</th>
                  <th scope="col">Balance Transfer Fee</th>
                  <th scope="col">Key Rewards/Features</th>
                  <th scope="col">Annual Fee</th>
                </tr>
              </thead>
              <tbody>
                  {/* Table Rows Generated from Data */}
                  {/* Using simplified data from cardData for table - Adjust as needed */}
                  {cardData.slice(0, 5).map(card => ( // Example: Show first 5 in table
                      <tr key={card.id}>
                          <td data-label="Card Name & Rating">
                              <Link href={`#${card.id}`}>{card.name}</Link>
                              <div className={styles.rating}>
                                  <button type="button" className={styles.infoIcon} aria-label={`Rating Information for ${card.name}`} onClick={handleInfoClick} title="Our TCI rating info">
                                      <svg aria-hidden="true" focusable="false" fill="currentColor" width="15px" height="15px" viewBox="0 0 416.979 416.979"> <path d="M356.004,61.156c-81.37-81.47-213.377-81.551-294.848-0.182 c-81.47,81.371-81.552,213.379-0.181,294.85 c81.369,81.47,213.378,81.551,294.849,0.181 C437.293,274.636,437.375,142.626,356.004,61.156z M208.554,334.794 c-11.028,0-19.968-8.939-19.968-19.968s8.939-19.969,19.968-19.969 c11.028,0,19.968,8.939,19.968,19.969 C228.521,325.854,219.582,334.794,208.554,334.794z M241.018,214.566c-11.406,6.668-12.381,14.871-12.43,38.508 c-0.003,1.563-0.008,3.14-0.017,4.726 c-0.071,11.172-9.147,20.18-20.304,20.18 c-0.044,0-0.088,0-0.131,0 c-11.215-0.071-20.248-9.22-20.178-20.436 c0.01-1.528,0.013-3.047,0.016-4.552 c0.05-24.293,0.111-54.524,32.547-73.484 c26.026-15.214,29.306-25.208,26.254-38.322 c-3.586-15.404-17.653-19.396-28.63-18.141 c-3.686,0.423-22.069,3.456-22.069,21.642" /> </svg>
                                  </button>
                                  TCI Rating: <span className={styles.ratingValue}>{card.rating}</span>/10
                              </div>
                              <div>
                                  <a href={`https://www.travelcardinsider.com${card.applyLink}`} className={styles.applyBtn} target="_blank" rel="noopener sponsored">Apply Now</a>
                                  <p className={styles.aplyText}>On issuer's secure site</p>
                              </div>
                              <Link href={`#${card.id}`} className={styles.learnMoreBtn} aria-label={`Learn More about ${card.name}`}>Learn More</Link>
                              <a href={card.ratesLink} className={styles.rateFeesBtn} target="_blank" rel="noopener nofollow"> See Rates &amp; Fees </a>
                          </td>
                           {/* !!! ADD CORRECT DATA for these cells based on cardData !!! */}
                          <td data-label="Intro APR">0% Placeholder</td>
                          <td data-label="BT Fee">Placeholder Fee</td>
                          <td data-label="Rewards">{card.earning ? card.earning[0] : 'Placeholder'}</td>
                          <td data-label="Annual Fee">Placeholder Fee</td>
                      </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* DETAILED CARD SECTIONS - Generated from Data */}
        {cardData.map((card) => (
          <section className={styles.card} id={card.id} key={card.id} aria-labelledby={`heading-${card.id}`}>
            <div className={styles.cardImage}>
              {/* !!! UPDATE width/height with ACTUAL image dimensions !!! */}
              <Image
                src={card.imgPath} // !!! ENSURE PATH IS CORRECT in /public !!!
                alt={`${card.name} card image`} // Descriptive alt text
                width={card.imgWidth || 300}   // !!! REPLACE with actual width !!!
                height={card.imgHeight || 189} // !!! REPLACE with actual height !!!
                loading="lazy" // Lazy load detailed card images
              />
            </div>
            <div className={styles.cardContent}>
              <h3 id={`heading-${card.id}`} className={styles.cardTitle}>{card.name}</h3>
              <div className={styles.rating}>
                <button type="button" className={styles.infoIcon} aria-label={`Rating Information for ${card.name}`} onClick={handleInfoClick} title="Our TCI rating info">
                  <svg aria-hidden="true" focusable="false" fill="currentColor" width="15px" height="15px" viewBox="0 0 416.979 416.979"> <path d="M356.004,61.156c-81.37-81.47-213.377-81.551-294.848-0.182 c-81.47,81.371-81.552,213.379-0.181,294.85 c81.369,81.47,213.378,81.551,294.849,0.181 C437.293,274.636,437.375,142.626,356.004,61.156z M208.554,334.794 c-11.028,0-19.968-8.939-19.968-19.968s8.939-19.969,19.968-19.969 c11.028,0,19.968,8.939,19.968,19.969 C228.521,325.854,219.582,334.794,208.554,334.794z M241.018,214.566c-11.406,6.668-12.381,14.871-12.43,38.508 c-0.003,1.563-0.008,3.14-0.017,4.726 c-0.071,11.172-9.147,20.18-20.304,20.18 c-0.044,0-0.088,0-0.131,0 c-11.215-0.071-20.248-9.22-20.178-20.436 c0.01-1.528,0.013-3.047,0.016-4.552 c0.05-24.293,0.111-54.524,32.547-73.484 c26.026-15.214,29.306-25.208,26.254-38.322 c-3.586-15.404-17.653-19.396-28.63-18.141 c-3.686,0.423-22.069,3.456-22.069,21.642"></path> </svg>
                </button>
                TCI Rating: <span className={styles.ratingValue}>{card.rating}</span>/10 {/* !!! UPDATE RATING !!! */}
              </div>
              {card.bonus && <p className={styles.cardBonus}><strong>Welcome Bonus:</strong> {card.bonus}</p>}
              {card.earning && <div className={styles.cardEarning}><strong>Earning Rates:</strong><ul>{card.earning.map((rate, i) => <li key={i}>{rate}</li>)}</ul></div>}
              {card.features && <div className={styles.cardFeatures /* Correct class name if needed */}><strong>Key Features:</strong><ul>{card.features.map((feature, i) => <li key={i}>{feature}</li>)}</ul></div>}
              {card.perks && <div className={styles.cardPerks}><strong>Additional Perks:</strong><ul>{card.perks.map((perk, i) => <li key={i}>{perk}</li>)}</ul></div>}
              {card.bestFor && <div className={styles.cardBestFor}><strong>Best For:</strong> <p>{card.bestFor}</p></div>}
            </div>
            <div className={styles.cardActions}>
              {/* !!! REPLACE with actual affiliate link !!! */}
              <a href={`https://www.travelcardinsider.com${card.applyLink}`} className={`${styles.btn} ${styles.btnApply}`} target="_blank" rel="noopener sponsored">Apply Now</a>
              {/* Keep generic text as requested, add aria-label */}
               {/* !!! Assuming review links exist, replace path !!! */}
              <Link href={`https://www.travelcardinsider.com${card.reviewLink}`} className={`${styles.btn} ${styles.btnLearnMore}`} aria-label={`Learn More about ${card.name}`}>Learn More</Link>
              {/* !!! REPLACE with actual Rates & Fees link !!! */}
              <a href={card.ratesLink} target="_blank" rel="noopener nofollow" className={`${styles.btn} ${styles.btnRatesFees}`}> See Rates &amp; Fees </a>
            </div>
          </section>
        ))}

      </main>
      <Footer />
    </>
  );
}