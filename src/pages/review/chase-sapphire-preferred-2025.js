// File: pages/review/chase-sapphire-preferred-2025.js

import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../../styles/reviews2025.module.css'; // Assuming same CSS module

// Assuming you have Header and Footer components
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function ChaseSapphirePreferredReview2025() {
  const pageUrl = "https://www.travelcardinsider.com/review/chase-sapphire-preferred-2025"; // Customize this
  // Suggestion: Replace with an actual, high-quality image URL for Chase Sapphire Preferred
  const imageUrl = "https://www.chase.com/content/dam/chase-ux/card-art/sapphire/preferred/bg_cardart_preferred_666x420.png"; // Example URL, please verify or replace
  const logoUrl = "https://www.travelcardinsider.com/logo.png"; // Replace with your actual site logo URL
  const siteName = "YourCreditCardReviewSite"; // Customize this
  const authorName = "Travelcardinsider"; // Customize this (or use a different author)
  const publishDate = "2025-05-11"; // Current Date or your publish date
  
  const reviewRatingValue = 5.0; // Based on Forbes Advisor rating mentioned in text
  const annualFee = 95;

  // Function to remove superscripts (handles common ones, can be expanded)
  const removeSuperscripts = (text) => {
    if (typeof text !== 'string') return text;
    return text.replace(/®|℠|™|[¹²³⁴⁵⁶⁷⁸⁹⁰]+/g, '');
  };

  const cardName = "Chase Sapphire Preferred Card";
  const cardBrand = "Chase";

  return (
    <>
      <Head>
        <title>{removeSuperscripts(`Chase Sapphire Preferred Review 2025: Still the Traveler's Sweetheart for $${annualFee}?`)}</title>
        <meta
          name="description"
          content={removeSuperscripts(`In-depth 2025 review of the Chase Sapphire Preferred Card. Is this $${annualFee} card still the top choice for US travelers? Explore rewards, benefits, travel protections & more.`)}
        />
        <meta name="robots" content="index,follow" />
        <link rel="canonical" href={pageUrl} />

        {/* ---- Open Graph ---- */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content={removeSuperscripts(`Chase Sapphire Preferred Card 2025 Review - $${annualFee} Value for US Travelers`)} />
        <meta property="og:description" content={removeSuperscripts(`Our comprehensive 2025 analysis of the Chase Sapphire Preferred. See if its Ultimate Rewards, travel credits, and insurance make it a must-have for US-based travelers.`)} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:site_name" content={siteName} />

        {/* ---- Twitter Card ---- */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={removeSuperscripts(`Chase Sapphire Preferred (2025) - Is it Worth the $${annualFee} Annual Fee for US Travel?`)} />
        <meta name="twitter:description" content={removeSuperscripts(`Detailed 2025 review of the Chase Sapphire Preferred card. We cover points, perks, partner transfers, and compare it for the US travel market.`)} />
        <meta name="twitter:image" content={imageUrl} />

        <meta name="geo.region" content="US" />
        <meta name="geo.placename" content="United States" />
        <meta name="language" content="en-US" />
        <meta name="distribution" content="US" />
        <link rel="alternate" hrefLang="en-us" href={pageUrl} />
        

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: removeSuperscripts(`{
              "@context": "https://schema.org",
              "@type": "Review",
              "itemReviewed": {
                "@type": "Product",
                "name": "${cardName}",
                "brand": {
                  "@type": "Brand",
                  "name": "${cardBrand}"
                },
                "description": "The Chase Sapphire Preferred Card is a popular travel rewards credit card for US travelers, known for its flexible Ultimate Rewards points, travel protections, and a moderate $${annualFee} annual fee.",
                "feesAndCommissionsSpecification": {
                  "@type": "CompoundPriceSpecification",
                  "priceComponent": [
                    {
                      "@type": "UnitPriceSpecification",
                      "priceCurrency": "USD",
                      "price": ${annualFee},
                      "name": "Annual Fee",
                      "referenceQuantity": {
                         "@type": "QuantitativeValue",
                         "value": 1,
                         "unitCode": "ANN"
                      }
                    }
                  ]
                },
                "aggregateRating": {
                  "@type": "AggregateRating",
                  "ratingValue": ${reviewRatingValue}, 
                  "bestRating": 5,
                  "worstRating": 1,
                  "reviewCount": 1 
                }
              },
              "reviewRating": {
                "@type": "Rating",
                "ratingValue": ${reviewRatingValue},
                "bestRating": 5,
                "worstRating": 1
              },
              "headline": "Chase Sapphire Preferred Card Review 2025: Still the Traveler's Sweetheart for $${annualFee}?",
              "author": {
                "@type": "Person",
                "name": "${authorName}"
              },
              "publisher": {
                "@type": "Organization",
                "name": "${siteName}",
                "logo": {
                  "@type": "ImageObject",
                  "url": "${logoUrl}"
                }
              },
              "datePublished": "${publishDate}",
              "dateModified": "${publishDate}",
              "keywords": [
                "Chase Sapphire Preferred",
                "Chase credit card review",
                "travel rewards US 2025",
                "Ultimate Rewards",
                "$95 annual fee card",
                "travel credit card",
                "credit card points",
                "airline transfer partners",
                "hotel transfer partners",
                "Chase Ultimate Rewards review",
                "US travel rewards"
              ],
              "mainEntityOfPage": {
                 "@type": "WebPage",
                 "@id": "${pageUrl}"
              },
              "image": [
                 "${imageUrl}"
               ]
            }`)
          }}
        />
      </Head>

     

      <main style={{ fontFamily: 'Roboto, sans-serif' }}>
        <article className={styles.reviewContainer}>
          <header className={styles.reviewHeader}>
            <h1 className={styles.reviewTitle}>
              {removeSuperscripts(`Chase Sapphire Preferred® in 2025: Still the Traveler's Sweetheart for $95?`)}
            </h1>
            <b>
              <u>By {authorName}</u>
            </b>

            <div style={{ marginTop: '1rem', marginBottom: '1rem' }}>
              <Image
                src={'/peter-hansen-MeGmdPNe36w-unsplash.webp'} // Use the defined imageUrl variable
                alt={removeSuperscripts(`${cardName}`)}
                width={666} // Adjust width as per original image aspect ratio or your design
                height={420} // Adjust height as per original image aspect ratio or your design
                style={{ width: '100%', maxWidth: '1200px', height: 'auto', display: 'block', margin: '0 auto' }} 
                priority 
              />
            </div>

            <p className={styles.reviewDisclaimer}>
              {/* You can customize this disclaimer */}
              Opinions expressed here are author's alone, not those of any bank, credit card issuer, hotel, airline, or other entity. This content has not been reviewed, approved or otherwise endorsed by any of the entities included within the post.
            </p>
          </header>

          {/* Optional: Table of Contents (Generate based on H2/H3 tags below if needed) */}
          <nav className={styles.reviewToc}>
            <h2>Table of Contents</h2>
            <ol>
              <li><a href="#introduction">Introduction</a></li>
              <li><a href="#key-features">Key Features at a Glance (2025)</a></li>
              <li><a href="#earning-power">Earning Power: Racking Up Ultimate Rewards</a></li>
              <li><a href="#unlocking-value">Unlocking Value: How to Spend Your Points Wisely</a></li>
              <li><a href="#beyond-points">Beyond Points: Travel & Lifestyle Perks</a></li>
              <li><a href="#calculating-worth">The $95 Question: Calculating Worth in 2025</a></li>
              <li><a href="#who-should-not-get">Who Shouldn't Get This Card?</a></li>
              <li><a href="#competition">How the Sapphire Preferred Stacks Up</a></li>
              <li><a href="#application-tips">Navigating the Application</a></li>
              <li><a href="#verdict">The 2025 Verdict</a></li>
            </ol>
          </nav>

          <section id="introduction" className={styles.reviewSection}>
            {/* Using H2 for main section titles as per example structure */}
            <h2>{removeSuperscripts(`Introduction`)}</h2>
            <p>{removeSuperscripts(`The allure of turning everyday spending into travel rewards remains strong for US travelers. The Chase Sapphire Preferred Card, a long-standing favorite with a $95 annual fee, faces the question of its continued value in 2025. Its reputation for flexible Ultimate Rewards points, travel protections, and strong transfer partners is well-established, earning it accolades like a 5.0 rating from Forbes Advisor and NerdWallet's Best All-Purpose Travel Rewards Credit Card for 2025. The card occupies a "sweet spot," offering premium benefits without the hefty fees of cards like the Chase Sapphire Reserve ($550 annual fee).`)}</p>
            <p>{removeSuperscripts(`A compelling factor in 2025 is the welcome bonus: 100,000 bonus points after spending $5,000 in the first three months. This offer, potentially expiring May 15, 2025, is described as the best in years and is worth $1,250 via Chase Travel or more if transferred. This significantly boosts its first-year appeal.`)}</p>
          </section>

          <section id="key-features" className={styles.reviewSection}>
            <h2>{removeSuperscripts(`Table 1: Chase Sapphire Preferred: Key Features at a Glance (2025)`)}</h2>
            <div className={styles.tableResponsive}>
              <table className={styles.comparisonTable}>
                <thead>
                  <tr>
                    <th>{removeSuperscripts(`Feature`)}</th>
                    <th>{removeSuperscripts(`Details`)}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{removeSuperscripts(`Annual Fee`)}</td>
                    <td>{removeSuperscripts(`$95`)}</td>
                  </tr>
                  <tr>
                    <td>{removeSuperscripts(`Current Welcome Bonus`)}</td>
                    <td>{removeSuperscripts(`Earn 100,000 bonus points after spending $5,000 on purchases in the first 3 months from account opening (limited-time offer).`)}</td>
                  </tr>
                  <tr>
                    <td>{removeSuperscripts(`Points Value via Chase Travel`)}</td>
                    <td>{removeSuperscripts(`1.25 cents per point (e.g., 100,000 points = $1,250 towards travel).`)}</td>
                  </tr>
                  <tr>
                    <td>{removeSuperscripts(`Key Earning Rates`)}</td>
                    <td>{removeSuperscripts(`5x points on travel purchased through Chase Travel; 3x points on dining, select streaming services, and online grocery purchases (exclusions apply); 2x points on all other travel purchases; 1x point on all other purchases.`)}</td>
                  </tr>
                  <tr>
                    <td>{removeSuperscripts(`$50 Annual Hotel Credit`)}</td>
                    <td>{removeSuperscripts(`Statement credit for hotel stays purchased through Chase Travel each account anniversary year.`)}</td>
                  </tr>
                  <tr>
                    <td>{removeSuperscripts(`Foreign Transaction Fees`)}</td>
                    <td>{removeSuperscripts(`None.`)}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section id="earning-power" className={styles.reviewSection}>
            <h2>{removeSuperscripts(`Earning Power: Racking Up Ultimate Rewards with the Sapphire Preferred`)}</h2>
            <p>{removeSuperscripts(`The Chase Sapphire Preferred offers several ways to earn Ultimate Rewards points. Cardholders get 5x total points on travel purchased through Chase Travel (excluding hotel purchases qualifying for the $50 hotel credit). Dining, including takeout and eligible delivery services, earns 3x points. Select streaming services and online grocery purchases (excluding Target, Walmart, and wholesale clubs) also earn 3x points.`)}</p>
            <p>{removeSuperscripts(`For travel booked outside the Chase portal, the card offers 2x points on all other travel purchases, covering a broad range of expenses like direct airline/hotel bookings, rideshares, and public transit. All other purchases earn 1x point per dollar.`)}</p>
            <p>{removeSuperscripts(`A 10% Anniversary Points Bonus is awarded annually, equaling 10% of total purchases from the previous year. For $25,000 spent, this means 2,500 bonus points, valued at $31.25 via Chase Travel or potentially $52 with partner transfers.`)}</p>
            <p>{removeSuperscripts(`Partnerships in 2025 include:`)}</p>
            <ul>
              <li>{removeSuperscripts(`Lyft: 5x total points on Lyft rides (April 1, 2025 - September 30, 2027).`)}</li>
              <li>{removeSuperscripts(`Peloton: 5x total points on eligible Peloton equipment/accessory purchases over $150 (max 25,000 bonus points, through December 31, 2027).`)}</li>
            </ul>
            <p>{removeSuperscripts(`The earning structure encourages using the Chase portal but still rewards direct bookings, appealing to a wider range of travelers.`)}</p>
          </section>

          <section id="unlocking-value" className={styles.reviewSection}>
            <h2>{removeSuperscripts(`Unlocking Value: How to Spend Your Sapphire Preferred Points Wisely`)}</h2>
            <p>{removeSuperscripts(`Strategic redemption is key to maximizing the Sapphire Preferred's value.`)}</p>
            <p>{removeSuperscripts(`Redeeming through the Chase Travel portal gives points a value of 1.25 cents each for travel. The 100,000-point bonus equals $1,250 here.`)}</p>
            <p>{removeSuperscripts(`Transferring points 1:1 to airline and hotel partners often yields greater value.`)}</p>
            <ul>
              <li>{removeSuperscripts(`Airline Partners for US travelers: United MileagePlus, Southwest Airlines Rapid Rewards, JetBlue TrueBlue, British Airways Executive Club (for Oneworld/American Airlines), Air Canada Aeroplan, Flying Blue AIR FRANCE KLM, Emirates Skywards, Singapore Airlines KrisFlyer, Virgin Atlantic Flying Club, Iberia Plus, Aer Lingus AerClub.`)}</li>
              <li>{removeSuperscripts(`Hotel Partners: World of Hyatt, Marriott Bonvoy, IHG Rewards Club. World of Hyatt is often cited for exceptional value. Experts value transferred points higher, around 1.6 to 2.05 cents each.`)}</li>
            </ul>
            
            <h3 className={styles.reviewSubHeader}>{removeSuperscripts(`Table 2: Maximizing Your Chase Ultimate Rewards Points with Sapphire Preferred (2025)`)}</h3>
            <div className={styles.tableResponsive}>
              <table className={styles.comparisonTable}>
                <thead>
                  <tr>
                    <th>{removeSuperscripts(`Redemption Method`)}</th>
                    <th>{removeSuperscripts(`Value per Point (cpp)`)}</th>
                    <th>{removeSuperscripts(`Example (100,000 points)`)}</th>
                    <th>{removeSuperscripts(`Best For (US Traveler Context)`)}</th>
                    <th>{removeSuperscripts(`Key Partners (if applicable)`)}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{removeSuperscripts(`Chase Travel Portal`)}</td>
                    <td>{removeSuperscripts(`1.25 cpp`)}</td>
                    <td>{removeSuperscripts(`$1,250 towards travel`)}</td>
                    <td>{removeSuperscripts(`Simplicity, good fixed value for flights, hotels, car rentals, cruises.`)}</td>
                    <td>{removeSuperscripts(`N/A`)}</td>
                  </tr>
                  <tr>
                    <td>{removeSuperscripts(`Transfer to Airline Partners`)}</td>
                    <td>{removeSuperscripts(`Variable (often 1.6-2.05+ cpp)`)}</td>
                    <td>{removeSuperscripts(`Potentially $1,600-$2,050+ in flights`)}</td>
                    <td>{removeSuperscripts(`Maximizing value for domestic & international flights, premium cabin experiences.`)}</td>
                    <td>{removeSuperscripts(`United, Southwest, JetBlue, British Airways (for AA), Air Canada, Flying Blue, Emirates, Singapore, Virgin Atlantic`)}</td>
                  </tr>
                  <tr>
                    <td>{removeSuperscripts(`Transfer to Hotel Partners`)}</td>
                    <td>{removeSuperscripts(`Variable (Hyatt often high)`)}</td>
                    <td>{removeSuperscripts(`Potentially $1,600+ in hotel stays`)}</td>
                    <td>{removeSuperscripts(`Luxury hotel stays, good value at specific properties, especially with Hyatt.`)}</td>
                    <td>{removeSuperscripts(`World of Hyatt, Marriott Bonvoy, IHG Rewards Club`)}</td>
                  </tr>
                  <tr>
                    <td>{removeSuperscripts(`Pay Yourself Back`)}</td>
                    <td>{removeSuperscripts(`1.25 cpp (current categories)`)}</td>
                    <td>{removeSuperscripts(`$1,250 (for eligible charities)`)}</td>
                    <td>{removeSuperscripts(`Offsetting specific purchases; currently limited for CSP to select charities through June 30, 2025.`)}</td>
                    <td>{removeSuperscripts(`Select Charities (e.g., American Red Cross, Habitat for Humanity)`)}</td>
                  </tr>
                  <tr>
                    <td>{removeSuperscripts(`Cash Back/Statement Credit`)}</td>
                    <td>{removeSuperscripts(`1.0 cpp`)}</td>
                    <td>{removeSuperscripts(`$1,000 cash`)}</td>
                    <td>{removeSuperscripts(`Ultimate flexibility, non-travel needs.`)}</td>
                    <td>{removeSuperscripts(`N/A`)}</td>
                  </tr>
                  <tr>
                    <td>{removeSuperscripts(`Gift Cards`)}</td>
                    <td>{removeSuperscripts(`Variable (often ~1.0 cpp)`)}</td>
                    <td>{removeSuperscripts(`~$1,000 in gift cards`)}</td>
                    <td>{removeSuperscripts(`Specific merchant needs, but generally lower value than travel.`)}</td>
                    <td>{removeSuperscripts(`Various retailers`)}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>{removeSuperscripts(`The Pay Yourself Back (PYB) feature for Sapphire Preferred is currently limited to donations to select charities at 1.25 cents per point through June 30, 2025. This is narrower than past PYB options.`)}</p>
            <p>{removeSuperscripts(`Cash back or statement credits yield 1 cent per point. Gift cards are similar. These are less optimal than travel redemptions.`)}</p>
          </section>

          <section id="beyond-points" className={styles.reviewSection}>
            <h2>{removeSuperscripts(`Beyond Points: The Sapphire Preferred's Arsenal of Travel & Lifestyle Perks`)}</h2>
            <p>{removeSuperscripts(`The Sapphire Preferred offers valuable benefits beyond points.`)}</p>
            <p>{removeSuperscripts(`The $50 Annual Hotel Credit for hotel stays purchased through Chase Travel effectively reduces the annual fee to $45 for many.`)}</p>
            <p>{removeSuperscripts(`Key travel protections include:`)}</p>
            <ul>
              <li>{removeSuperscripts(`Primary Auto Rental Collision Damage Waiver (CDW): Covers theft/collision for most rentals up to the vehicle's cash value when the rental company's insurance is declined.`)}</li>
              <li>{removeSuperscripts(`Trip Cancellation/Interruption Insurance: Up to $10,000 per person/$20,000 per trip for non-refundable expenses due to covered situations.`)}</li>
              <li>{removeSuperscripts(`Baggage Delay Insurance: Up to $100/day for 5 days for essentials if baggage is delayed over 6 hours.`)}</li>
              <li>{removeSuperscripts(`Lost Luggage Reimbursement: Up to $3,000 per passenger if luggage is lost/damaged by the carrier.`)}</li>
              <li>{removeSuperscripts(`Trip Delay Reimbursement: Up to $500/ticket if delayed 12+ hours or requiring an overnight stay.`)}</li>
              <li>{removeSuperscripts(`Travel Accident Insurance: Coverage for specific losses during travel.`)}</li>
              <li>{removeSuperscripts(`Travel and Emergency Assistance Services: Hotline for referrals (cardholder pays for services).`)}</li>
              <li>{removeSuperscripts(`No Foreign Transaction Fees.`)}</li>
            </ul>

            <h3 className={styles.reviewSubHeader}>{removeSuperscripts(`Table 3: Chase Sapphire Preferred: Travel & Purchase Protections (2025)`)}</h3>
            <div className={styles.tableResponsive}>
              <table className={styles.comparisonTable}>
                <thead>
                  <tr>
                    <th>{removeSuperscripts(`Benefit Type`)}</th>
                    <th>{removeSuperscripts(`Coverage Limit/Details`)}</th>
                    <th>{removeSuperscripts(`How it Benefits a US Traveler`)}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{removeSuperscripts(`Primary Auto Rental CDW`)}</td>
                    <td>{removeSuperscripts(`Covers theft/collision up to actual cash value for most rentals when rental company's CDW is declined & paid with card.`)}</td>
                    <td>{removeSuperscripts(`Saves money on rental insurance; avoids claims on personal auto insurance.`)}</td>
                  </tr>
                  <tr>
                    <td>{removeSuperscripts(`Trip Cancellation/Interruption`)}</td>
                    <td>{removeSuperscripts(`Up to $10,000/person, $20,000/trip for non-refundable expenses due to covered reasons.`)}</td>
                    <td>{removeSuperscripts(`Peace of mind for unexpected trip changes or cancellations.`)}</td>
                  </tr>
                  <tr>
                    <td>{removeSuperscripts(`Baggage Delay Insurance`)}</td>
                    <td>{removeSuperscripts(`Up to $100/day for 5 days for essentials if baggage delayed over 6 hours.`)}</td>
                    <td>{removeSuperscripts(`Covers costs for necessities during frustrating baggage delays.`)}</td>
                  </tr>
                  <tr>
                    <td>{removeSuperscripts(`Lost Luggage Reimbursement`)}</td>
                    <td>{removeSuperscripts(`Up to $3,000/passenger if luggage lost/damaged by carrier.`)}</td>
                    <td>{removeSuperscripts(`Financial protection against a major travel mishap.`)}</td>
                  </tr>
                  <tr>
                    <td>{removeSuperscripts(`Trip Delay Reimbursement`)}</td>
                    <td>{removeSuperscripts(`Up to $500/ticket for expenses if delayed 12+ hours or overnight.`)}</td>
                    <td>{removeSuperscripts(`Covers unexpected costs like meals and lodging during significant delays.`)}</td>
                  </tr>
                   <tr>
                    <td>{removeSuperscripts(`Travel Accident Insurance`)}</td>
                    <td>{removeSuperscripts(`Coverage for specific losses due to accidents during covered travel.`)}</td>
                    <td>{removeSuperscripts(`Provides a financial safety net for severe travel accidents.`)}</td>
                  </tr>
                  <tr>
                    <td>{removeSuperscripts(`No Foreign Transaction Fees`)}</td>
                    <td>{removeSuperscripts(`Saves ~3% on purchases made in foreign currency.`)}</td>
                    <td>{removeSuperscripts(`Direct cost savings for international travel and overseas online purchases.`)}</td>
                  </tr>
                  <tr>
                    <td>{removeSuperscripts(`Purchase Protection`)}</td>
                    <td>{removeSuperscripts(`Covers new purchases for 120 days against damage/theft up to $500/claim, $50,000/account.`)}</td>
                    <td>{removeSuperscripts(`Protects recent purchases, especially valuable for electronics or fragile items.`)}</td>
                  </tr>
                  <tr>
                    <td>{removeSuperscripts(`Extended Warranty Protection`)}</td>
                    <td>{removeSuperscripts(`Extends eligible U.S. manufacturer's warranties of 3 years or less by an additional year.`)}</td>
                    <td>{removeSuperscripts(`Saves money on repairs or replacements after the original warranty expires.`)}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>{removeSuperscripts(`Everyday benefits and partnerships:`)}</p>
            <ul>
              <li>{removeSuperscripts(`DoorDash: Complimentary DashPass for at least one year (activate by Dec 31, 2027) providing $0 delivery fees and lower service fees. Plus, up to $10 off one eligible non-restaurant DoorDash order monthly. This can offer significant annual savings.`)}</li>
              <li>{removeSuperscripts(`Purchase Protection: Covers new purchases for 120 days against damage/theft (up to $500/item, $50,000/account).`)}</li>
              <li>{removeSuperscripts(`Extended Warranty Protection: Adds an extra year to U.S. manufacturer's warranties of 3 years or less.`)}</li>
              <li>{removeSuperscripts(`Instacart: While broader Chase partnerships exist, specific complimentary Instacart+ or monthly credits for Sapphire Preferred are not consistently listed beyond the 3x points on online groceries.`)}</li>
              <li>{removeSuperscripts(`Chase Offers: Access to targeted merchant discounts.`)}</li>
            </ul>
          </section>

          <section id="calculating-worth" className={styles.reviewSection}>
            <h2>{removeSuperscripts(`The $95 Question: Calculating the Chase Sapphire Preferred's Worth in 2025`)}</h2>
            <p>{removeSuperscripts(`First-Year Windfall: The 100,000-point welcome bonus is worth at least $1,250 for travel via Chase Travel, potentially $1,600-$2,050 with partners. Combined with the $50 hotel credit and DoorDash savings, the first-year value is substantial.`)}</p>
            <p>{removeSuperscripts(`Year-Over-Year Value:`)}</p>
            <ul>
              <li>{removeSuperscripts(`$50 Annual Hotel Credit: Effectively makes the fee $45.`)}</li>
              <li>{removeSuperscripts(`10% Anniversary Points Bonus: Value depends on spend (e.g., $25k spend ≈ $31.25-$52 value).`)}</li>
              <li>{removeSuperscripts(`DoorDash Perks: DashPass (~$120/year) + monthly credit (up to $120/year) can total up to $240 annually.`)}</li>
              <li>{removeSuperscripts(`Travel Insurance Savings: Significant if a claim is made (e.g., primary CDW saving hundreds). The breakeven point is low if credits are used. The $50 hotel credit and modest DoorDash use can cover the fee.`)}</li>
            </ul>

            <h3 className={styles.reviewSubHeader}>{removeSuperscripts(`Table 4: Is the $95 Annual Fee Worth It? A Breakeven Analysis (Year 2 Onwards)`)}</h3>
            <div className={styles.tableResponsive}>
              <table className={styles.comparisonTable}>
                <thead>
                  <tr>
                    <th>{removeSuperscripts(`Benefit/Earning Category`)}</th>
                    <th>{removeSuperscripts(`Potential Annual Value ($)`)}</th>
                    <th>{removeSuperscripts(`Notes/Assumptions for US Traveler`)}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{removeSuperscripts(`$50 Annual Hotel Credit`)}</td>
                    <td>{removeSuperscripts(`$50`)}</td>
                    <td>{removeSuperscripts(`Assumes at least one hotel booking via Chase Travel annually.`)}</td>
                  </tr>
                  <tr>
                    <td>{removeSuperscripts(`10% Anniversary Bonus`)}</td>
                    <td>{removeSuperscripts(`$18.75 (for $15k spend) to $50 (for $40k spend) @ 1.25 cpp`)}</td>
                    <td>{removeSuperscripts(`Value increases with higher annual spend. (e.g., $25k spend = 2,500 points ≈ $31.25-$52)`)}</td>
                  </tr>
                  <tr>
                    <td>{removeSuperscripts(`DoorDash DashPass Membership`)}</td>
                    <td>{removeSuperscripts(`$120`)}</td>
                    <td>{removeSuperscripts(`Assumes user would otherwise pay for DashPass or values the convenience at this level.`)}</td>
                  </tr>
                  <tr>
                    <td>{removeSuperscripts(`DoorDash Monthly Credit`)}</td>
                    <td>{removeSuperscripts(`Up to $120 ($10/month)`)}</td>
                    <td>{removeSuperscripts(`Assumes full utilization on eligible non-restaurant orders.`)}</td>
                  </tr>
                  <tr>
                    <td>{removeSuperscripts(`Value from Travel Insurance`)}</td>
                    <td>{removeSuperscripts(`Qualitative; potentially $100s-$1000s if a claim is made.`)}</td>
                    <td>{removeSuperscripts(`Example: Avoiding rental car CDW fees for a week could save $150-$200. Peace of mind value.`)}</td>
                  </tr>
                  <tr>
                    <td>{removeSuperscripts(`Value from Ongoing Points Earn`)}</td>
                    <td>{removeSuperscripts(`Variable (depends on spend & redemption)`)}</td>
                    <td>{removeSuperscripts(`Example: $10,000 spend in 3x categories = 30,000 points ≈ $375-$615 value.`)}</td>
                  </tr>
                  <tr>
                    <td>{removeSuperscripts(`Subtotal of Direct Credits/Perks`)}</td>
                    <td>{removeSuperscripts(`$290+ (Hotel Credit + full DoorDash value)`)}</td>
                    <td>{removeSuperscripts(`---`)}</td>
                  </tr>
                  <tr>
                    <td>{removeSuperscripts(`Net Value vs. $95 Annual Fee`)}</td>
                    <td>{removeSuperscripts(`Significantly Positive (if key benefits are utilized)`)}</td>
                    <td>{removeSuperscripts(`---`)}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section id="who-should-not-get" className={styles.reviewSection}>
            <h2>{removeSuperscripts(`Who shouldn't get this card?`)}</h2>
            <p>{removeSuperscripts(`Not ideal for those who won't use the $50 hotel credit, prefer simple cash back, have very low annual spend, are subject to Chase's 5/24 rule, ineligible for the bonus (received one in the past 48 months), or need premium perks like lounge access (found on Sapphire Reserve).`)}</p>
          </section>

          <section id="competition" className={styles.reviewSection}>
            <h2>{removeSuperscripts(`How the Sapphire Preferred Stacks Up: A Look at the Competition`)}</h2>
            <h3 className={styles.reviewSubHeader}>{removeSuperscripts(`Chase Sapphire Preferred vs. Chase Sapphire Reserve`)}</h3>
            <p>{removeSuperscripts(`The Preferred ($95 fee) offers a $50 hotel credit (via Chase Travel) and 1.25 cpp in the portal. The Reserve ($550 fee) has a $300 general travel credit, 1.5 cpp in the portal, lounge access, and a Global Entry/TSA PreCheck credit. The Reserve's effective fee is $250 vs. Preferred's $45. Many find the Preferred a better value unless Reserve's premium perks are fully utilized.`)}</p>
            
            <h3 className={styles.reviewSubHeader}>{removeSuperscripts(`Head-to-Head with Key Competitors (Sub-$100 Annual Fee Category):`)}</h3>
            <ul>
              <li>{removeSuperscripts(`Capital One Venture Rewards Credit Card ($95 fee): Offers 2x miles on everything and a Global Entry/TSA PreCheck credit. Sapphire Preferred has better bonus categories, a 1.25 cpp portal value, the $50 hotel credit, stronger US transfer partners (Hyatt, United), and primary auto CDW (Venture's is secondary).`)}</li>
            </ul>

            <h4 className={styles.reviewSubHeader}>{removeSuperscripts(`Table 5: Chase Sapphire Preferred vs. Capital One Venture Rewards (2025 Snapshot)`)}</h4>
            <div className={styles.tableResponsive}>
              <table className={styles.comparisonTable}>
                <thead>
                  <tr>
                    <th>{removeSuperscripts(`Feature`)}</th>
                    <th>{removeSuperscripts(`Chase Sapphire Preferred`)}</th>
                    <th>{removeSuperscripts(`Capital One Venture Rewards Credit Card`)}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{removeSuperscripts(`Annual Fee`)}</td>
                    <td>{removeSuperscripts(`$95`)}</td>
                    <td>{removeSuperscripts(`$95`)}</td>
                  </tr>
                  <tr>
                    <td>{removeSuperscripts(`Welcome Bonus`)}</td>
                    <td>{removeSuperscripts(`100,000 points (after $5k spend/3mo)`)}</td>
                    <td>{removeSuperscripts(`Typically 75,000 miles (after $4k spend/3mo)`)}</td>
                  </tr>
                  <tr>
                    <td>{removeSuperscripts(`Key Earning Rates`)}</td>
                    <td>{removeSuperscripts(`5x Chase Travel; 3x dining/online grocery/streaming; 2x other travel`)}</td>
                    <td>{removeSuperscripts(`2x miles on all purchases; 5x miles on hotels/rental cars via Capital One Travel`)}</td>
                  </tr>
                  <tr>
                    <td>{removeSuperscripts(`Value in Portal`)}</td>
                    <td>{removeSuperscripts(`1.25 cents per point`)}</td>
                    <td>{removeSuperscripts(`1.0 cent per mile (for travel statement credits or via portal)`)}</td>
                  </tr>
                  <tr>
                    <td>{removeSuperscripts(`Key Travel Credit(s)`)}</td>
                    <td>{removeSuperscripts(`$50 annual hotel credit (via Chase Travel)`)}</td>
                    <td>{removeSuperscripts(`Up to $100 Global Entry/TSA PreCheck credit`)}</td>
                  </tr>
                  <tr>
                    <td>{removeSuperscripts(`Transfer Partners (Key US ones)`)}</td>
                    <td>{removeSuperscripts(`United, Southwest, JetBlue, Hyatt, Marriott, IHG`)}</td>
                    <td>{removeSuperscripts(`Fewer direct major US airline partners; includes British Airways, Air Canada, Wyndham, Choice`)}</td>
                  </tr>
                  <tr>
                    <td>{removeSuperscripts(`Travel Insurance Highlight`)}</td>
                    <td>{removeSuperscripts(`Primary Auto Rental CDW`)}</td>
                    <td>{removeSuperscripts(`Secondary Auto Rental CDW`)}</td>
                  </tr>
                  <tr>
                    <td>{removeSuperscripts(`Foreign Transaction Fees`)}</td>
                    <td>{removeSuperscripts(`None`)}</td>
                    <td>{removeSuperscripts(`None`)}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <ul>
              <li>{removeSuperscripts(`American Express Green Card ($150 fee): Offers CLEAR Plus and LoungeBuddy credits, 3x on travel, transit, restaurants. Sapphire Preferred has a lower fee, $50 hotel credit, primary CDW, and a stronger hotel partner (Hyatt).`)}</li>
              <li>{removeSuperscripts(`Bank of America Travel Rewards credit card ($0 fee): 1.5 points per dollar (boostable for Preferred Rewards members). Sapphire Preferred offers a larger bonus, better category earnings, point transfers, travel protections, and the hotel credit.`)}</li>
              <li>{removeSuperscripts(`Wells Fargo Autograph Journey Card ($95 fee): Strong hotel (5x) and airline (4x) earn rates without a portal, cell phone protection. Sapphire Preferred has more valuable transfer partners, 1.25 cpp portal redemption, $50 hotel credit, and DoorDash perks.`)}</li>
            </ul>
          </section>

          <section id="application-tips" className={styles.reviewSection}>
            <h2>{removeSuperscripts(`Navigating the Application: What to Know Before You Apply`)}</h2>
            <p>{removeSuperscripts(`Chase's 5/24 rule is key: likely denial if you've opened 5+ credit cards (any bank) in 24 months.`)}</p>
            <p>{removeSuperscripts(`Sapphire welcome bonus eligibility: Not for current Sapphire cardholders or those who received a Sapphire bonus in the last 48 months.`)}</p>
            <p>{removeSuperscripts(`A "Good" to "Excellent" credit score (often 670+, more commonly 700s+) is recommended.`)}</p>
          </section>

          <section id="verdict" className={styles.reviewSection}>
            <h2>{removeSuperscripts(`The 2025 Verdict: Is the Chase Sapphire Preferred Still a Must-Have for US Travelers?`)}</h2>
            <p>{removeSuperscripts(`The Chase Sapphire Preferred largely justifies its $95 fee in 2025.`)}</p>
            <h3 className={styles.reviewSubHeader}>{removeSuperscripts(`Strengths in the 2025 Landscape:`)}</h3>
            <p>{removeSuperscripts(`The 100,000-point welcome bonus is exceptional. Strong earning rates (5x Chase Travel, 3x dining/online grocery/streaming, 2x other travel). Valuable redemptions (1.25 cpp via Chase Travel, 1:1 transfers to partners like Hyatt, United, Southwest). The $50 annual hotel credit effectively makes the fee $45. Comprehensive travel insurance (primary auto CDW). Valuable DoorDash benefits and 5x on Lyft. No foreign transaction fees.`)}</p>
            <h3 className={styles.reviewSubHeader}>{removeSuperscripts(`Weaknesses or Considerations:`)}</h3>
            <p>{removeSuperscripts(`The $95 annual fee is a factor. Top 5x travel earn requires using the Chase Travel portal. Lacks airport lounge access. Pay Yourself Back is currently limited to charities for CSP. Strict application rules (5/24, 48-month bonus).`)}</p>
            <h3 className={styles.reviewSubHeader}>{removeSuperscripts(`Final Expert Recommendation:`)}</h3>
            <p>{removeSuperscripts(`YES, the Chase Sapphire Preferred is still worth its $95 annual fee in 2025 for many US travelers. It's highly recommended for:`)}</p>
            <ul>
              <li>{removeSuperscripts(`New applicants who can meet the 100,000-point bonus spend.`)}</li>
              <li>{removeSuperscripts(`Those who travel and can use the $50 hotel credit.`)}</li>
              <li>{removeSuperscripts(`Travelers maximizing rewards via partner transfers (especially Hyatt, United, Southwest).`)}</li>
              <li>{removeSuperscripts(`Those valuing comprehensive travel insurance (primary auto CDW).`)}</li>
              <li>{removeSuperscripts(`Regular DoorDash users.`)}</li>
              <li>{removeSuperscripts(`People seeking a strong "starter" premium travel card.`)}</li>
            </ul>
            <p>{removeSuperscripts(`NO, it might not be the best fit for:`)}</p>
            <ul>
              <li>{removeSuperscripts(`Infrequent travelers unlikely to use travel benefits.`)}</li>
              <li>{removeSuperscripts(`Those wanting simple cash back.`)}</li>
              <li>{removeSuperscripts(`Very low annual spenders.`)}</li>
              <li>{removeSuperscripts(`Travelers prioritizing lounge access (consider Sapphire Reserve).`)}</li>
              <li>{removeSuperscripts(`Applicants ineligible due to Chase rules.`)}</li>
            </ul>
            <p>{removeSuperscripts(`The Sapphire Preferred's strength lies in its overall package of rewards, credits, and robust insurance at an effective $45 fee (after hotel credit), making it a versatile and compelling choice. Recent benefit enhancements have kept it competitive.`)}</p>
          </section>

        </article>
      </main>

     
    </>
  );
}