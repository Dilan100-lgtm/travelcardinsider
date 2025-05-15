// File: pages/review/citi-custom-cash-2025.js

import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../../styles/reviews2025.module.css'; // Assuming same CSS module as your example

// Assuming you have Header and Footer components
// import Header from '../../components/Header';
// import Footer from '../../components/Footer';

export default function CitiCustomCashReview2025() {
  const pageUrl = "https://www.travelcardinsider.com/review/citi-custom-cash-2025"; // Customize this URL
  const imageUrl = "/pexels-donaldtong94-189296.webp"; // Replace with your actual card image URL
  const logoUrl = "https://www.travelcardinsider.com/images/your-logo.png"; // Replace with your actual site logo URL
  const siteName = "YourCreditCardReviewSite"; // Customize this
  const authorName = "Dilan Madushanka"; // Customize this
  const publishDate = new Date().toISOString().split('T')[0]; // Current Date
  
  const reviewRatingValue = 4.7; // Example Rating - Adjust as needed
  const annualFee = 0; // Citi Custom Cash has a $0 annual fee

  // Function to remove superscripts (like ℠, ®, ™, and footnote numbers)
  const removeSuperscripts = (text) => {
    if (typeof text !== 'string') return text;
    // Removes common superscript symbols and numbers that might be used as superscripts
    return text.replace(/℠|®|™|\u00B9|\u00B2|\u00B3|[\u2070-\u209F]/g, '');
  };

  const reviewTitle = "Citi Custom Cash Card Review 2025: A \"Secret Weapon\" for Everyday Rewards?";
  const metaDescription = "In-depth 2025 review of the Citi Custom Cash Card. Discover its adaptive 5% cash back, $0 annual fee, welcome bonus, and if it's the top choice for US consumers' everyday spending.";

  return (
    <>
      <Head>
        <title>{reviewTitle}</title>
        <meta
          name="description"
          content={removeSuperscripts(metaDescription)}
        />
        <meta name="robots" content="index,follow" />
        <link rel="canonical" href={pageUrl} />

        {/* ---- Open Graph (for social media sharing) ---- */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content={removeSuperscripts(reviewTitle)} />
        <meta property="og:description" content={removeSuperscripts(metaDescription)} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:site_name" content={siteName} />

        {/* ---- Twitter Card (for Twitter sharing) ---- */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={removeSuperscripts(reviewTitle) + " | US Rewards"} />
        <meta name="twitter:description" content={removeSuperscripts(metaDescription)} />
        <meta name="twitter:image" content={imageUrl} />
        {/* Optional: <meta name="twitter:site" content="@yourtwitterhandle" /> */}
        {/* Optional: <meta name="twitter:creator" content="@authortwitterhandle" /> */}

        {/* ---- US Targeted SEO ---- */}
        <meta name="geo.region" content="US" />
        <meta name="geo.placename" content="United States" />
        <meta name="language" content="en-US" />
        <meta name="distribution" content="US" />
        <link rel="alternate" hrefLang="en-us" href={pageUrl} />
        

        {/* JSON-LD Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: removeSuperscripts(`{
              "@context": "https://schema.org",
              "@type": "Review",
              "itemReviewed": {
                "@type": "FinancialProduct",
                "name": "Citi Custom Cash Card",
                "brand": {
                  "@type": "Brand",
                  "name": "Citi"
                },
                "description": "The Citi Custom Cash Card offers 5% cash back on your top eligible spend category each billing cycle up to $500, then 1% back. It has no annual fee and targets US consumers looking for flexible everyday rewards.",
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
              "headline": "${reviewTitle}",
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
                "Citi Custom Cash review",
                "Citi Custom Cash Card 2025",
                "cash back credit card US",
                "5% rewards card",
                "no annual fee credit card",
                "Citi rewards",
                "ThankYou Points",
                "credit card for groceries",
                "credit card for gas",
                "everyday spending rewards",
                "US credit cards"
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

      {/* <Header /> */}

      <main style={{ fontFamily: 'Arial, sans-serif' }}> {/* Example font */}
        <article className={styles.reviewContainer}>
          <header className={styles.reviewHeader}>
            <h1 className={styles.reviewTitle}>
              {removeSuperscripts(reviewTitle)}
            </h1>
            <p>
              <strong>By {authorName}</strong> | Last Updated: {publishDate}
            </p>
            
            {/* Replace with an actual image of the card or relevant graphic */}
            <div style={{ marginTop: '1rem', marginBottom: '1rem' }}>
              <Image
                src={imageUrl} // Replace with your card image path
                alt="Citi Custom Cash Card"
                width={380} 
                height={240}  
                style={{ width: '100%', maxWidth: '600px', height: 'auto', display: 'block', margin: '0 auto' }} 
                priority 
              />
            </div>

            <p className={styles.reviewDisclaimer}>
              Our content is not provided or commissioned by the credit card issuer. Opinions expressed here are the author's alone, not those of the credit card issuer, and have not been reviewed, approved or otherwise endorsed by the credit card issuer. This site may be compensated through the credit card issuer Affiliate Program.
            </p>
          </header>

          {/* Table of Contents */}
          <nav className={styles.reviewToc}>
            <h2>Table of Contents</h2>
            <ol>
              <li><a href="#introduction">Introduction: The Hunt for an Effortless Rewards Card</a></li>
              <li>
                <a href="#features">What Makes the Citi Custom Cash Card Tick: 2025 Features</a>
                <ul>
                  <li><a href="#cash-back">The 5% Cash Back That Follows Your Spending</a></li>
                  <li><a href="#eligible-categories-table">Table 1: 2025 Citi Custom Cash 5% Eligible Spending Categories</a></li>
                  <li><a href="#welcome-bonus">Welcome Bonus and That Sweet $0 Annual Fee</a></li>
                  <li><a href="#intro-apr">0% Intro APR: A Little Breathing Room</a></li>
                  <li><a href="#foreign-transaction-fees">A Catch for International Travelers: Foreign Transaction Fees</a></li>
                </ul>
              </li>
              <li>
                <a href="#rewards-points">Getting Your Rewards: Understanding ThankYou Points</a>
                <ul>
                  <li><a href="#earning-using-points">Earning and Using Your Points</a></li>
                  <li><a href="#pairing-card">The Real Travel Power: Pairing Your Card</a></li>
                </ul>
              </li>
              <li>
                <a href="#extra-perks">More Than Just Cash Back: Extra Perks</a>
                <ul>
                  <li><a href="#citi-travel-bonus">Citi Travel Portal Bonus</a></li>
                  <li><a href="#world-elite-mastercard-benefits">World Elite Mastercard Benefits</a></li>
                  <li><a href="#standard-citi-perks">Standard Citi Perks</a></li>
                </ul>
              </li>
              <li>
                <a href="#good-not-so-good">The Citi Custom Cash for US Travelers: The Good and The Not-So-Good</a>
                <ul>
                  <li><a href="#good-for-domestic">Great for Domestic Trips and Everyday US Life</a></li>
                  <li><a href="#not-good-for-international">Not Your Go-To for International Travel or Big Spenders</a></li>
                </ul>
              </li>
              <li><a href="#comparison">Where It Fits in the Credit Card World</a></li>
              <li><a href="#strategy">Using the Citi Custom Cash Smartly in 2025</a></li>
              <li><a href="#verdict">The Verdict: Is It Your Everyday Rewards Secret Weapon for 2025?</a></li>
            </ol>
          </nav>

          <section id="introduction" className={styles.reviewSection}>
            <h2>{removeSuperscripts("I. Introduction: The Hunt for an Effortless Rewards Card")}</h2>
            <p>{removeSuperscripts("For most of us US travelers and savvy spenders, finding a credit card that dishes out great rewards without a ton of hassle or a big annual fee feels like searching for a unicorn. The Citi Custom Cash Card steps into this crowded scene with a pretty unique promise: cash back that actually adapts to how you spend. So, is it the \"secret weapon\" for everyday rewards in 2025 we've all been looking for? Let's dig in.")}</p>
            <p>{removeSuperscripts("This review will break down what the Citi Custom Cash Card offers in 2025, using the latest info to see if its promise of high rewards with no annual fee and automatic bonus categories really makes it a standout choice for your wallet.")}</p>
          </section>

          <section id="features" className={styles.reviewSection}>
            <h2>{removeSuperscripts("II. What Makes the Citi Custom Cash Card Tick: 2025 Features")}</h2>
            
            <section id="cash-back" className={styles.reviewSubSection}>
              <h3>{removeSuperscripts("A. The 5% Cash Back That Follows Your Spending")}</h3>
              <p>{removeSuperscripts("The coolest thing about the Citi Custom Cash Card is how it handles rewards. You don't have to sign up for special categories each quarter. Instead, the card automatically figures out where you spent the most in an eligible category that billing cycle and gives you 5% cash back on those purchases. This 5% is good for the first $500 you spend in that top category each billing cycle. After you hit $500, or for any other spending, you get a solid 1% cash back on everything else. That $500 cap means you can get up to $25 back at the 5% rate each month.")}</p>
              <p>{removeSuperscripts("Here are the 2025 categories where you can snag that 5%:")}</p>
              <ul>
                <li>{removeSuperscripts("Restaurants")}</li>
                <li>{removeSuperscripts("Gas Stations")}</li>
                <li>{removeSuperscripts("Grocery Stores")}</li>
                <li>{removeSuperscripts("Select Travel (airlines, hotels, cruise lines, travel agencies)")}</li>
                <li>{removeSuperscripts("Select Transit (includes rental cars, commuter trains, taxis, tolls, EV charging, but not bike/scooter rentals)")}</li>
                <li>{removeSuperscripts("Select Streaming Services (like Netflix, Spotify, Disney+)")}</li>
                <li>{removeSuperscripts("Drugstores")}</li>
                <li>{removeSuperscripts("Home Improvement Stores")}</li>
                <li>{removeSuperscripts("Fitness Clubs")}</li>
                <li>{removeSuperscripts("Live Entertainment")}</li>
              </ul>
              <p>{removeSuperscripts("These categories cover a lot of ground, especially things like gas, travel, and transit, which are big for US travelers.")}</p>
            </section>

            <section id="eligible-categories-table" className={styles.reviewSubSection}>
                <h4>{removeSuperscripts("Table 1: 2025 Citi Custom Cash 5% Eligible Spending Categories")}</h4>
                <div className={styles.tableResponsive}>
                    <table className={styles.comparisonTable}>
                        <thead>
                            <tr>
                                <th>{removeSuperscripts("Category")}</th>
                                <th>{removeSuperscripts("Examples for US Travelers")}</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr><td>{removeSuperscripts("Restaurants")}</td><td>{removeSuperscripts("Most dining out.")}</td></tr>
                            <tr><td>{removeSuperscripts("Gas Stations")}</td><td>{removeSuperscripts("Filling up the tank.")}</td></tr>
                            <tr><td>{removeSuperscripts("Grocery Stores")}</td><td>{removeSuperscripts("Your weekly food haul.")}</td></tr>
                            <tr><td>{removeSuperscripts("Select Travel")}</td><td>{removeSuperscripts("Flights, hotels, cruises, travel agent bookings.")}</td></tr>
                            <tr><td>{removeSuperscripts("Select Transit")}</td><td>{removeSuperscripts("Rental cars, train tickets, ride-shares, tolls, parking, EV charging.")}</td></tr>
                            <tr><td>{removeSuperscripts("Select Streaming Services")}</td><td>{removeSuperscripts("Your favorite streaming subscriptions.")}</td></tr>
                            <tr><td>{removeSuperscripts("Drugstores")}</td><td>{removeSuperscripts("Pharmacy and personal items.")}</td></tr>
                            <tr><td>{removeSuperscripts("Home Improvement Stores")}</td><td>{removeSuperscripts("DIY project supplies.")}</td></tr>
                            <tr><td>{removeSuperscripts("Fitness Clubs")}</td><td>{removeSuperscripts("Gym memberships.")}</td></tr>
                            <tr><td>{removeSuperscripts("Live Entertainment")}</td><td>{removeSuperscripts("Concerts, shows, games.")}</td></tr>
                        </tbody>
                    </table>
                </div>
            </section>

            <section id="welcome-bonus" className={styles.reviewSubSection}>
              <h3>{removeSuperscripts("B. Welcome Bonus and That Sweet $0 Annual Fee")}</h3>
              <p>{removeSuperscripts("New folks signing up in 2025 can usually grab a welcome bonus: $200 cash back after spending $1,500 in the first 6 months. This comes as 20,000 ThankYou Points, which you can trade for $200. Just a heads-up: you can't get this bonus if you've had one for this card in the last 48 months or if you switched another Citi card (that had a bonus) to this one recently. Citi also only lets you have one Custom Cash card per person.")}</p>
              <p>{removeSuperscripts("One of the best parts? A $0 annual fee. This means every reward dollar you earn (after the welcome bonus spend) is pure gain, making it a great long-term card.")}</p>
            </section>

            <section id="intro-apr" className={styles.reviewSubSection}>
              <h3>{removeSuperscripts("C. 0% Intro APR: A Little Breathing Room")}</h3>
              <p>{removeSuperscripts("Often, the Citi Custom Cash Card offers a 0% intro APR for 15 months on new purchases and balance transfers (from when you open the account). For balance transfers, you need to make them within 4 months of opening your card to get the deal. This 15-month interest-free window can be a big help for paying off a large purchase, like a US vacation, or tackling some existing debt.")}</p>
              <p>{removeSuperscripts("After the intro period, the regular variable APR kicks in (recently 18.24% - 28.24%). If you do a balance transfer, there's a fee: $5 or 5% of the transfer amount, whichever is more. Keep that fee in mind, as it can eat into your interest savings.")}</p>
            </section>

            <section id="foreign-transaction-fees" className={styles.reviewSubSection}>
              <h3>{removeSuperscripts("D. A Catch for International Travelers: Foreign Transaction Fees")}</h3>
              <p>{removeSuperscripts("While the $0 annual fee is great, if you travel outside the US, watch out: the Citi Custom Cash Card charges a 3% foreign transaction fee. This can wipe out your rewards on international purchases. If you stick to domestic travel, no worries. But for trips abroad, this isn't your card.")}</p>
            </section>
          </section>

          <section id="rewards-points" className={styles.reviewSection}>
            <h2>{removeSuperscripts("III. Getting Your Rewards: Understanding ThankYou Points")}</h2>
            <section id="earning-using-points" className={styles.reviewSubSection}>
              <h3>{removeSuperscripts("A. Earning and Using Your Points")}</h3>
              <p>{removeSuperscripts("The rewards you earn come as Citi ThankYou Points. For cash back, 1 point usually equals 1 cent. So, 5% back means 5 points per dollar (up to that $500 monthly cap), and 1% back is 1 point per dollar everywhere else.")}</p>
              <p>{removeSuperscripts("Redeeming is pretty easy:")}</p>
              <ul>
                <li>{removeSuperscripts("Direct deposit to your bank (no minimum).")}</li>
                <li>{removeSuperscripts("Statement credit (no minimum).")}</li>
                <li>{removeSuperscripts("Check by mail (usually $5 or 500 points minimum).")}</li>
                <li>{removeSuperscripts("Gift cards.")}</li>
                <li>{removeSuperscripts("Travel through the Citi ThankYou portal.")}</li>
                <li>{removeSuperscripts("\"Shop with Points\" at Amazon.com and other sites.")}</li>
              </ul>
            </section>
            <section id="pairing-card" className={styles.reviewSubSection}>
              <h3>{removeSuperscripts("B. The Real Travel Power: Pairing Your Card")}</h3>
              <p>{removeSuperscripts("Here’s where the \"secret weapon\" idea really comes into play for travelers. On its own, the ThankYou Points from the Custom Cash are pretty basic – you generally can't transfer them directly to airlines or hotels.")}</p>
              <p>{removeSuperscripts("But, if you also have a premium Citi ThankYou card (like the Citi Strata Premier Card), you can pool your points. Once pooled, those points can be transferred to Citi's airline and hotel partners, often at a 1:1 ratio. This can make your points way more valuable than just 1 cent each. Think about it: 5% cash back becomes 5 airline miles or a good chunk of hotel points per dollar in your top category. You can also share up to 100,000 points a year with another ThankYou member, but those shared points expire in 90 days, so use them fast.")}</p>
              <p>{removeSuperscripts("Some good airline partners include Air France KLM Flying Blue, Avianca LifeMiles, and JetBlue. For hotels, Choice Privileges (often 1 ThankYou Point to 2 Choice points with a premium card) and Wyndham Rewards can be great deals, especially for US travel. This transfer ability is what can turn this simple cash-back card into a travel rewards powerhouse.")}</p>
            </section>
          </section>

          <section id="extra-perks" className={styles.reviewSection}>
            <h2>{removeSuperscripts("IV. More Than Just Cash Back: Extra Perks")}</h2>
            <section id="citi-travel-bonus" className={styles.reviewSubSection}>
                <h3>{removeSuperscripts("A. Citi Travel Portal Bonus")}</h3>
                <p>{removeSuperscripts("Through June 30, 2026, you can get an extra 4% cash back on hotels, car rentals, and attractions booked through the Citi Travel portal.")}</p>
                <ul>
                    <li>{removeSuperscripts("If \"Select Travel\" is your 5% category for the month and you book through the portal, you could get 5% (up to the $500 cap) plus the extra 4%, for a total of 9% back!")}</li>
                    <li>{removeSuperscripts("If your 5% category is something else (like groceries), portal bookings will get 1% plus the 4% portal bonus, for a total of 5% back. This is a fantastic, though temporary, perk that can make this card a winner for certain travel bookings.")}</li>
                </ul>
            </section>
            <section id="world-elite-mastercard-benefits" className={styles.reviewSubSection}>
                <h3>{removeSuperscripts("B. World Elite Mastercard Benefits")}</h3>
                <p>{removeSuperscripts("Being a World Elite Mastercard, the Custom Cash comes with some nice extras:")}</p>
                <ul>
                    <li>{removeSuperscripts("Citi Concierge: 24/7 help with travel, dining, etc.")}</li>
                    <li>{removeSuperscripts("ShopRunner Membership: Free 2-day shipping at many online stores.")}</li>
                    <li>{removeSuperscripts("Lyft Credit: Potentially a $5 Lyft credit each month if you take three rides (this offer was noted to expire Sept. 30, 2025).")}</li>
                    <li>{removeSuperscripts("Hotel Guarantees: Like a Lowest Hotel Rate Guarantee.")}</li>
                    <li>{removeSuperscripts("Mastercard ID Theft Protection: Monitoring and alerts (enrollment needed).")}</li>
                </ul>
                <p>{removeSuperscripts("For things like trip insurance or extended warranty, Citi cards often include Damage & Theft Purchase Protection (covering new items against damage/theft for 90 days, up to $1,000 per incident) and an Extended Warranty (adding up to 24 months to manufacturer warranties). But, it's super important to check your specific card's Guide to Protection Benefits or call Citi to confirm exactly what coverage you have.")}</p>
            </section>
            <section id="standard-citi-perks" className={styles.reviewSubSection}>
                <h3>{removeSuperscripts("C. Standard Citi Perks")}</h3>
                <p>{removeSuperscripts("You also get standard Citi benefits:")}</p>
                <ul>
                    <li>{removeSuperscripts("$0 Liability on Unauthorized Charges.")}</li>
                    <li>{removeSuperscripts("Free FICO Score access.")}</li>
                    <li>{removeSuperscripts("Citi Entertainment: Presale tickets and exclusive experiences.")}</li>
                    <li>{removeSuperscripts("Travel Notice feature.")}</li>
                </ul>
            </section>
          </section>

          <section id="good-not-so-good" className={styles.reviewSection}>
            <h2>{removeSuperscripts("V. The Citi Custom Cash for US Travelers: The Good and The Not-So-Good")}</h2>
            <section id="good-for-domestic" className={styles.reviewSubSection}>
                <h3>{removeSuperscripts("A. Great for Domestic Trips and Everyday US Life")}</h3>
                <p>{removeSuperscripts("This card really shines for travel and spending within the US:")}</p>
                <ul>
                    <li>{removeSuperscripts("$0 Annual Fee: Pure savings.")}</li>
                    <li>{removeSuperscripts("Flexible 5% Rewards: Categories like Gas, Select Travel, Select Transit, and Restaurants are perfect for domestic trips.")}</li>
                    <li>{removeSuperscripts("Citi Travel Portal Bonus: That extra 4% (making it 5% or even 9% back) on portal bookings for hotels, cars, and attractions is a big win until June 30, 2026.")}</li>
                    <li>{removeSuperscripts("0% Intro APR on Purchases: Helpful for financing big domestic trips interest-free for 15 months.")}</li>
                    <li>{removeSuperscripts("ThankYou Points Power (When Paired): If you have a premium Citi card, this becomes a great way to earn points for domestic flights and hotels.")}</li>
                </ul>
            </section>
            <section id="not-good-for-international" className={styles.reviewSubSection}>
                <h3>{removeSuperscripts("B. Not Your Go-To for International Travel or Big Spenders")}</h3>
                <ul>
                    <li>{removeSuperscripts("Foreign Transaction Fee: That 3% fee makes it a bad choice for spending abroad.")}</li>
                    <li>{removeSuperscripts("$500 Monthly Cap on 5%: If you spend way more than $500 a month in one category, you only get 5% on the first $500. After that, it's 1%.")}</li>
                    <li>{removeSuperscripts("\"Basic\" Points Alone: Without a premium Citi card, your ThankYou points are mostly just for cash back or portal bookings, not high-value travel transfers.")}</li>
                </ul>
            </section>
          </section>

          <section id="comparison" className={styles.reviewSection}>
            <h2>{removeSuperscripts("VI. Where It Fits in the Credit Card World")}</h2>
            <p>{removeSuperscripts("The Citi Custom Cash Card stands out because it automatically gives you 5% back in your top eligible spending category (up to $500 a month).")}</p>
            <ul>
                <li>{removeSuperscripts("It beats flat-rate 2% cash back cards (like Citi Double Cash or Wells Fargo Active Cash) for that first $500 in your top category.")}</li>
                <li>{removeSuperscripts("It’s easier than traditional 5% rotating category cards (like Chase Freedom Flex or Discover it Cash Back) because you don’t have to activate categories, and it adapts to your spending. With no annual fee, it's a strong contender for anyone looking to boost rewards without paying extra.")}</li>
            </ul>
          </section>

          <section id="strategy" className={styles.reviewSection}>
            <h2>{removeSuperscripts("VII. Using the Citi Custom Cash Smartly in 2025")}</h2>
            <ul>
                <li>{removeSuperscripts("Focus on One Category: Pick one of the 5% categories where you spend a good amount and try to put about $500 of that spending on this card each month.")}</li>
                <li>{removeSuperscripts("Use the Citi Travel Portal Bonus: For hotels, rental cars, and attractions, check the Citi Travel portal for that extra 4% back (until June 30, 2026) – but always compare prices first!")}</li>
                <li>{removeSuperscripts("Pair It Up: If you’re serious about travel rewards, pair this with a premium Citi ThankYou card (like the Citi Strata Premier) to transfer points to airlines and hotels.")}</li>
                <li>{removeSuperscripts("Leverage the 0% Intro APR: Use the 15-month 0% intro APR on purchases to finance big domestic trips or other large buys without paying interest right away.")}</li>
            </ul>
          </section>

          <section id="verdict" className={styles.reviewSection}>
            <h2>{removeSuperscripts("VIII. The Verdict: Is It Your Everyday Rewards Secret Weapon for 2025?")}</h2>
            <p>{removeSuperscripts("So, is the Citi Custom Cash Card the \"secret weapon\" for US travelers in 2025? It’s a yes, but with a few conditions.")}</p>
            <p>{removeSuperscripts("It’s a fantastic card if:")}</p>
            <ul>
                <li>{removeSuperscripts("You spend around $500 a month in one of its 5% categories (like gas, groceries, or restaurants).")}</li>
                <li>{removeSuperscripts("You mostly travel within the US.")}</li>
                <li>{removeSuperscripts("You use the Citi Travel Portal for its bonus (until June 2026).")}</li>
                <li>{removeSuperscripts("And especially if you pair it with a premium Citi card to unlock those valuable ThankYou Point transfers for travel. That’s its real superpower.")}</li>
            </ul>
            <p>{removeSuperscripts("It’s not the secret weapon if:")}</p>
            <ul>
                <li>{removeSuperscripts("You travel internationally a lot (that 3% foreign transaction fee stings).")}</li>
                <li>{removeSuperscripts("You spend way more than $500 a month in one category and want 5% on all of it.")}</li>
            </ul>
            <p>{removeSuperscripts("The Citi Custom Cash Card isn't a one-size-fits-all solution. But for the savvy US traveler who understands its strengths – especially its automatic 5% back on your top domestic spend category and its potential when paired with another Citi card – it can be a seriously rewarding part of your wallet, all with no annual fee.")}</p>
          </section>

        </article>
      </main>

      {/* <Footer /> */}
    </>
  );
}