// File: pages/review/alaska-airlines-visa-signature-2025.js

import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../../styles/reviews2025.module.css'; // Using the same CSS module

// Assuming you might have Header and Footer components
// import Header from '../../components/Header';
// import Footer from '../../components/Footer';

export default function AlaskaAirlinesVisaSignatureReview2025() {
  // Customize these details for your site and this specific review
  const pageUrl = "https://www.yourtravelcardreviewsite.com/review/alaska-airlines-visa-signature-2025"; // IMPORTANT: Update this to your actual page URL
  const imageUrl = "/images/alaska-airlines-visa-signature-card-2025.webp"; // IMPORTANT: Replace with your actual card image URL
  const siteLogoUrl = "https://www.yourtravelcardreviewsite.com/images/logo.png"; // IMPORTANT: Replace with your actual site logo URL
  const siteName = "Your Travel Card Review Site"; // IMPORTANT: Customize your site name
  const authorName = "Your Name / Credit Card Expert"; // IMPORTANT: Customize author name
  const publishDate = "2025-05-17"; // Update to your publish date
  const cardName = "Alaska Airlines Visa Signature Card";
  const issuerName = "Bank of America";

  const reviewRatingValue = 4.4; // Example rating (1-5), adjust as needed
  const annualFee = 95;

  // URLs for CTA buttons - replace with your actual links
  const applyNowUrl = "https://www.yourlink.com/apply-alaska-visa"; // IMPORTANT: Replace with your affiliate/application link
  const learnMoreUrl = "#sweet-spot-redemptions"; // Example: links to a section on the page, or an external page

  return (
    <>
      <Head>
        <title>{cardName} 2025 Review: Top Pick for West Coasters?</title>
        <meta
          name="description"
          content={`In-depth 2025 review of the ${cardName} from ${issuerName}. Explore miles, Companion Fare, checked bags, elite perks, and the $${annualFee} annual fee. Is it the top choice for US West Coast travelers?`}
        />
        <meta name="robots" content="index,follow" />
        <link rel="canonical" href={pageUrl} />

        {/* ---- Open Graph (for Facebook, Pinterest, etc.) ---- */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content={`${cardName} 2025 Review: Maximize Your West Coast Travel`} />
        <meta property="og:description" content={`Our comprehensive 2025 analysis of the ${cardName}. Uncover its value for West Coast flyers, from the Companion Fare to earning miles.`} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:site_name" content={siteName} />
        <meta property="article:publisher" content={`https://www.facebook.com/yourfbprofile`} /> {/* Optional: Link to your Facebook page */}
        <meta property="article:published_time" content={publishDate} />
        <meta property="article:modified_time" content={publishDate} />
        <meta property="article:author" content={authorName} /> {/* You can link to an author's Facebook profile if desired */}


        {/* ---- Twitter Card ---- */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@YourTwitterHandle" /> {/* Optional: Your Twitter handle */}
        <meta name="twitter:title" content={`${cardName} Review (2025) | $${annualFee} Fee Justified for West Coast Flyers?`} />
        <meta name="twitter:description" content={`Detailed 2025 review: ${cardName}. Companion Fare, free checked bags, EQMs, and overall value proposition for Alaska Airlines loyalists in the US.`} />
        <meta name="twitter:image" content={imageUrl} />
        <meta name="twitter:creator" content="@AuthorTwitterHandle" /> {/* Optional: Author's Twitter handle */}

        {/* ---- Geo-targeting and Language ---- */}
        <meta name="geo.region" content="US" />
        <meta name="geo.placename" content="United States" />
        <meta name="language" content="en-US" />
        <meta name="distribution" content="US" /> {/* You can also use "global" if applicable */}
        <link rel="alternate" hrefLang="en-us" href={pageUrl} />
        

        {/* ---- JSON-LD Structured Data for Google Rich Snippets ---- */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `{
              "@context": "https://schema.org",
              "@type": "Review",
              "itemReviewed": {
                "@type": "Product",
                "name": "${cardName}",
                "brand": {
                  "@type": "Brand",
                  "name": "${issuerName} Alaska Airlines"
                },
                "description": "The ${cardName} is a co-branded airline credit card by ${issuerName} targeted at US travelers, especially those on the West Coast, offering benefits like Alaska's Famous Companion Fare, free checked bags, and accelerated mile earning with Alaska Airlines.",
                "image": "${imageUrl}",
                "offers": {
                    "@type": "Offer",
                    "priceCurrency": "USD",
                    "price": "${annualFee}",
                    "priceSpecification": {
                       "@type": "PriceSpecification",
                       "price": ${annualFee},
                       "priceCurrency": "USD",
                       "valueAddedTaxIncluded": "false",
                       "billingIncrement": "1",
                       "unitText": "ANNUAL"
                    }
                },
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
                  "bestRating": "5",
                  "worstRating": "1",
                  "reviewCount": "1" 
                }
              },
              "reviewRating": {
                "@type": "Rating",
                "ratingValue": ${reviewRatingValue},
                "bestRating": "5",
                "worstRating": "1"
              },
              "headline": "${cardName} 2025 Review: Is the $${annualFee} Fee Worth It for West Coasters?",
              "author": {
                "@type": "Person",
                "name": "${authorName}"
              },
              "publisher": {
                "@type": "Organization",
                "name": "${siteName}",
                "logo": {
                  "@type": "ImageObject",
                  "url": "${siteLogoUrl}"
                }
              },
              "datePublished": "${publishDate}",
              "dateModified": "${publishDate}",
              "keywords": [
                "${cardName} review",
                "Alaska Airlines credit card 2025",
                "West Coast airline card",
                "Alaska Companion Fare",
                "Alaska Airlines miles",
                "travel credit card $${annualFee} fee",
                "${issuerName} Alaska card",
                "EQM credit card",
                "best airline card West Coast",
                "credit card review US"
              ],
              "mainEntityOfPage": {
                 "@type": "WebPage",
                 "@id": "${pageUrl}"
              },
              "image": [
                 "${imageUrl}"
               ]
            }`
          }}
        />
      </Head>

       {/* <Header /> */} {/* Uncomment if you have a Header component */}

      <main style={{ fontFamily: 'Arial, sans-serif' }}> {/* Example font */}
        <article className={styles.reviewContainer}>
          <header className={styles.reviewHeader}>
            <h1 className={styles.reviewTitle}>
              The {cardName}: My Honest Take for West Coasters in 2025
            </h1>
            <b>
              <u>By {authorName}</u>
            </b>

            <div style={{ marginTop: '1rem', marginBottom: '1rem' }}>
              <Image
                src={imageUrl}
                alt={`${cardName} from ${issuerName}`}
                width={760}
                height={480}
                style={{ width: '100%', maxWidth: '700px', height: 'auto', display: 'block', margin: '0 auto' }} 
                priority 
              />
            </div>

            <p className={styles.reviewDisclaimer}>
              We may receive compensation when you click on links to certain credit card products
              on our site. However, our recommendations remain our own, and offers are subject to
              change. Always verify details with the official issuer. Terms apply to credit card benefits and offers.
            </p>
          </header>

          {/* Table of Contents */}
          <nav className={styles.reviewToc}>
            <h2>Table of Contents</h2>
            <ol>
              <li><a href="#introduction">Introduction: The {cardName} for West Coasters</a></li>
              <li><a href="#annual-fee-interest">Annual Fee and Interest: Is It Worth It?</a></li>
              <li><a href="#welcome-offer">Welcome Offer in 2025: What You Get</a></li>
              <li><a href="#earning-miles">Earning Miles: Alaska, Gas, Streaming & More</a></li>
              <li><a href="#companion-fare">The Companion Fare Explained</a></li>
              <li><a href="#travel-benefits">Travel Benefits That Add Real Value</a></li>
              <li><a href="#elite-status-perks">Elite Status Perks in 2025</a></li>
              <li><a href="#mileage-plan-changes">What Changed in Alaska Mileage Plan for 2025?</a></li>
              <li><a href="#sweet-spot-redemptions">Sweet Spot Redemptions with Alaska Miles</a></li>
              <li><a href="#card-shortcomings">Where This Card Falls Short (Card Protections)</a></li>
              <li><a href="#final-verdict">Final Verdict: Who Should Get the Alaska Visa?</a></li>
            </ol>
          </nav>

          <section id="introduction" className={styles.reviewSection}>
            <h2>I. Introduction: The {cardName} for West Coasters</h2>
            <p>If you're eyeing the {cardName}, especially as a West Coaster, you want the real story. Is it still a top-tier travel companion in 2025, or are there better options? This review breaks down exactly what you get, what it costs, and who this card genuinely makes sense for – all to help you decide if it deserves a spot in your wallet.</p>
          </section>

          <section id="annual-fee-interest" className={styles.reviewSection}>
            <h2>II. Annual Fee and Interest: Is It Worth It?</h2>
            <p>The {cardName} comes with a ${annualFee} annual fee. This is pretty standard for an airline rewards card. The big question is always: will the benefits you use outweigh this yearly cost? If you can save more than $95 through perks like the Companion Fare or free checked bags, then yes, it can definitely be worth it.</p>
            <p>Now, a crucial heads-up on interest: if you carry a balance, the Annual Percentage Rate (APR) on purchases is a variable 20.24% to 28.24%. Honestly, to get true value from any rewards card, including this one, you should aim to pay your balance in full each month. Interest charges can quickly wipe out the value of any miles you earn. Balance transfers also fall into this APR range, plus a 4% fee. Cash advances? Best to avoid them due to higher APRs and fees.</p>
            <p>One solid gold perk: no foreign transaction fees. This is essential for international travel, saving you around 3% on purchases made abroad. Just be mindful of potential late payment fees (up to $40) and a higher penalty APR if you miss a due date.</p>
          </section>

          <section id="welcome-offer" className={styles.reviewSection}>
            <h2>III. Welcome Offer in 2025: What You Get</h2>
            <p>As of early 2025, the typical welcome offer for new {cardName} cardholders is quite appealing. You can usually expect to earn 60,000 bonus miles plus Alaska's Famous Companion Fare (this initial one lets a companion fly with you from $99 plus taxes/fees, starting around $23). To qualify, you'll generally need to spend $3,000 or more on purchases within the first 90 days of opening your account.</p>
            <p>Those 60,000 bonus miles are valuable – travel experts often value Alaska miles at 1.3 to 1.5 cents each, making the miles alone worth potentially $780 to $900 towards flights. Getting the Companion Fare upfront is a significant perk, offering immediate savings. Some offers may also include a percentage-off discount code for a future flight, but these often come with specific booking windows, travel dates, and fare restrictions, so its actual value can vary greatly depending on your flexibility.</p>
          </section>

          <section id="earning-miles" className={styles.reviewSection}>
            <h2>IV. Earning Miles: Alaska, Gas, Streaming & More</h2>
            <p>This card lets you rack up miles in a few key ways:</p>
            <ul>
              <li>On Alaska Airlines purchases: Earn a generous 3 miles for every $1 spent on eligible flights, in-flight purchases, and vacation packages.</li>
              <li>On everyday spending: Get 2 miles for every $1 spent on eligible gas, EV charging, cable, streaming services, and local transit (including rideshares, trains, and ferries).</li>
              <li>On all other purchases: Earn 1 mile for every $1 spent.</li>
            </ul>
            <p>If you have an eligible Bank of America checking, savings, or investment account, you can get a 10% relationship bonus on all miles earned from card purchases, boosting your earning rates slightly. A significant enhancement for 2025 is the ability to earn 1 Elite Qualifying Mile (EQM) for every $3 spent on your card, up to 30,000 EQMs annually. This offers a tangible way to help you reach Alaska Airlines elite status through your card spending.</p>
             <div className={styles.tableResponsive}>
                <h4 style={{textAlign: 'center'}}>Table 1: Earning Miles with the {cardName}</h4>
                <table className={styles.comparisonTable}>
                    <thead>
                        <tr>
                            <th>Spending Category</th>
                            <th>Miles per $1</th>
                            <th>Notes</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Eligible Alaska Airlines purchases (flights, in-flight, vacation packages)</td>
                            <td>3X</td>
                            <td>Core earning for loyal flyers</td>
                        </tr>
                        <tr>
                            <td>Eligible gas, EV charging, cable, streaming services, local transit (rideshares, trains, ferries)</td>
                            <td>2X</td>
                            <td>Broad everyday categories</td>
                        </tr>
                        <tr>
                            <td>All other purchases</td>
                            <td>1X</td>
                            <td>Base earn rate</td>
                        </tr>
                        <tr>
                            <td>Relationship Bonus</td>
                            <td>+10% on earned miles</td>
                            <td>Requires eligible Bank of America account</td>
                        </tr>
                         <tr>
                            <td>Elite Qualifying Miles (EQMs)</td>
                            <td>1 EQM per $3 spent</td>
                            <td>Up to 30,000 EQMs annually; helps achieve elite status</td>
                        </tr>
                    </tbody>
                </table>
            </div>
          </section>

          <section id="companion-fare" className={styles.reviewSection}>
            <h2>V. The Companion Fare Explained</h2>
            <p>The Famous Companion Fare is a standout perk of the Alaska Visa. Here's the deal: after your first year's welcome bonus fare, you can earn another one each year around your account anniversary. The main catch? You need to have spent $6,000 or more on the card in the prior year (that’s an average of $500 a month).</p>
            <p>If you meet that spend, you get a discount code. This lets your travel buddy fly with you on a round-trip Alaska Airlines coach ticket for just a $99 base fare, plus taxes and fees (which start from about $23). So, they could be flying for as little as $122 – a huge potential saving, easily offsetting the annual fee.</p>
            <p>The code usually shows up in your Alaska Mileage Plan account a bit after your card anniversary. You'll typically have 12 months to book the travel, though the trip itself can be later. Plus, there are no blackout dates on Alaska-operated flights when using the code.</p>
            <p>Big news for 2025: starting mid-summer, this Companion Fare will also be usable on select Hawaiian Airlines flights! This is a fantastic boost, especially for West Coast to Hawaii trips. Remember, the cardholder must be traveling or purchasing, and you can’t use miles for the companion’s ticket, but you both earn miles on the flight, and these tickets are eligible for upgrades.</p>
          </section>

          <section id="travel-benefits" className={styles.reviewSection}>
            <h2>VI. Travel Benefits That Add Real Value</h2>
            <p>Beyond the Companion Fare, the card offers other perks that can genuinely save you money and hassle:</p>
            <ul>
              <li><strong>First Free Checked Bag:</strong> This is a big one. The primary cardholder and up to six other guests on the same reservation each get their first checked bag free on flights marketed and operated by Alaska Airlines (and now Hawaiian Airlines, when purchased with the card). With bag fees typically $35 each way, a couple saves $140 on a single roundtrip – easily covering the annual fee.</li>
              <li><strong>Priority Boarding:</strong> Cardholders and those on their reservation (when the flight is paid for with the card) get to board earlier, making it easier to find overhead bin space.</li>
              <li><strong>20% Back on Inflight Purchases:</strong> Receive a 20% statement credit on purchases of food, beverages, and Wi-Fi aboard Alaska Airlines flights when paying with your card.</li>
              <li><strong>Alaska Lounge+ Discount:</strong> Get a $100 discount on an annual Alaska Lounge+ Membership when purchased with the card. This is most valuable for very frequent flyers.</li>
            </ul>
            <p>The free checked bag benefit, in particular, delivers consistent, easily quantifiable value trip after trip.</p>
             <div className={styles.tableResponsive}>
                <h4 style={{textAlign: 'center'}}>Table 2: Key Travel Perks</h4>
                <table className={styles.comparisonTable}>
                    <thead>
                        <tr>
                            <th>Benefit</th>
                            <th>Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>First Free Checked Bag</td>
                            <td>For cardholder + up to 6 guests on same reservation (Alaska & Hawaiian flights). Potential $35+ savings per person, each way.</td>
                        </tr>
                        <tr>
                            <td>Priority Boarding</td>
                            <td>For cardholder and travel companions on the same reservation.</td>
                        </tr>
                         <tr>
                            <td>Inflight Purchase Rebate</td>
                            <td>20% back as statement credit on food, beverages, Wi-Fi on Alaska flights.</td>
                        </tr>
                        <tr>
                            <td>Alaska Lounge+ Discount</td>
                            <td>$100 off annual membership.</td>
                        </tr>
                        <tr>
                            <td>No Foreign Transaction Fees</td>
                            <td>Saves ~3% on purchases abroad.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
          </section>

          <section id="elite-status-perks" className={styles.reviewSection}>
            <h2>VII. Elite Status Perks in 2025</h2>
            <p>Reaching elite status with Alaska Airlines (MVP, MVP Gold, etc.) unlocks valuable benefits like upgrades, bonus miles, and priority services. For 2025, the {cardName} plays a more direct role:</p>
            <ul>
              <li><strong>Earn EQMs with Card Spend:</strong> As mentioned, earning 1 EQM for every $3 spent (up to 30,000 EQMs annually) is a significant pathway to help you qualify or requalify for status. For example, MVP status requires 20,000 EQMs.</li>
              <li><strong>Mileage Plan Enhancements:</strong> Alaska's loyalty program itself has seen upgrades for 2025 that benefit elite members and those aspiring to be. This includes earning EQMs on award tickets (based on distance flown on Alaska and partners), and new Milestone Rewards that offer choices of perks at various EQM thresholds (starting at 10,000 EQMs), even between traditional elite tiers.</li>
              <li><strong>Upgrade Prioritization:</strong> For 2025, upgrade waitlists are prioritized based on elite tier and EQMs earned, and MVP members are now eligible for complimentary space-available upgrades for a companion.</li>
            </ul>
            <p>These changes make achieving and enjoying elite status more accessible and rewarding.</p>
          </section>

          <section id="mileage-plan-changes" className={styles.reviewSection}>
            <h2>VIII. What Changed in Alaska Mileage Plan for 2025?</h2>
            <p>Beyond the elite-specific enhancements, Alaska Airlines has made its Mileage Plan more robust overall for 2025:</p>
            <ul>
              <li><strong>Partner Integration:</strong> Alaska's membership in the oneworld Alliance continues to provide global reach. The deepening integration with Hawaiian Airlines (set to join oneworld in 2026) is a major plus, expanding options, especially for West Coast travelers. Remember, the Companion Fare will be usable on select Hawaiian flights from mid-summer 2025.</li>
              <li><strong>Multi-Carrier Redemptions:</strong> A significant upcoming improvement (launching winter 2025, starting with US-Europe) is the ability to combine flights from different global partners on a single award itinerary. This will simplify booking complex international trips using miles.</li>
              <li><strong>Simplified Partner Earning:</strong> When booking flights with many direct partners through alaskaair.com, members earn 100% of the miles flown, with increased mileage bonuses for premium cabin travel on partners in 2025.</li>
            </ul>
            <p>These changes aim to make Mileage Plan more flexible and powerful for redeeming your hard-earned miles globally.</p>
          </section>

          <section id="sweet-spot-redemptions" className={styles.reviewSection}>
            <h2>IX. Sweet Spot Redemptions with Alaska Miles</h2>
            <p>Alaska Mileage Plan miles are widely considered some of the most valuable airline miles, often valued at 1.3 to 1.5 cents apiece. There are several ways to get great value:</p>
            <ul>
              <li><strong>No Blackout Dates on Alaska Flights:</strong> When redeeming miles for Alaska's own flights, you benefit from no blackout dates.</li>
              <li><strong>Partner Awards:</strong> Mileage Plan truly shines with its diverse range of airline partners, especially for international premium cabin travel. Savvy travelers find "sweet spots" on airlines like Starlux to Asia, or LATAM to South America.</li>
              <li><strong>Free Stopovers:</strong> A unique and fantastic feature is the ability to add a free stopover on most one-way award tickets, even on international partner awards. This essentially lets you visit two destinations for the miles of one. For example, you could fly from the US to London on British Airways, have a stopover for a few days, and then continue to another European city, all as part of one award.</li>
            </ul>
            <p>Exploring partner awards and utilizing stopovers are key to maximizing your Alaska miles.</p>
          </section>

          <section id="card-shortcomings" className={styles.reviewSection}>
            <h2>X. Where This Card Falls Short (Card Protections)</h2>
            <p>Now, for an area where this card, frankly, doesn't shine: built-in travel and purchase protections. The personal {cardName} appears to lack comprehensive, issuer-provided travel insurance benefits like trip cancellation/interruption coverage, significant lost luggage reimbursement, or an auto rental collision damage waiver (CDW). Many other travel cards in the same $95 annual fee range typically include these as standard.</p>
            <p>While you get $0 liability for fraudulent transactions and free FICO score access, the absence of robust travel protections is a notable drawback for a card marketed towards travelers. Alaska Airlines does promote travel insurance you can purchase separately, but this is an added cost and not an automatic card benefit. If strong, automatic travel insurance is a high priority for you, this card likely isn't your best primary option for travel bookings.</p>
          </section>

          <section id="final-verdict" className={styles.reviewSection}>
            <h2>XI. Final Verdict: Who Should Get the Alaska Visa?</h2>
            <p>So, after breaking it all down, who is the {cardName} genuinely a good fit for in 2025?</p>
            
            <section id="ideal-cardholder" className={styles.reviewSubSection}>
              <h3>A. This card is likely a great choice if:</h3>
              <ul>
                <li>You're a loyal Alaska Airlines flyer, especially if you live on the West Coast.</li>
                <li>You frequently travel with at least one other person and can maximize the annual Companion Fare (and are comfortable with the $6,000 annual spend to earn it after the first year).</li>
                <li>You value free checked bags – the savings here alone can easily offset the annual fee for individuals, couples, or families.</li>
                <li>You're aiming for Alaska Airlines elite status and can leverage the EQMs earned through card spending.</li>
                <li>You appreciate the value and flexibility of Alaska Mileage Plan miles, especially for partner awards and stopovers.</li>
              </ul>
            </section>

            <section id="consider-alternatives" className={styles.reviewSubSection}>
              <h3>B. You might want to reconsider, or look at other options, if:</h3>
              <ul>
                <li>Comprehensive travel insurance and purchase protections baked into your card are essential for your peace of mind. This card is weak here.</li>
                <li>You rarely fly Alaska Airlines or its partners.</li>
                <li>You typically travel solo (the Companion Fare won't be as valuable).</li>
                <li>You don't anticipate spending $6,000 annually on the card to earn the anniversary Companion Fare.</li>
                <li>You tend to carry a credit card balance – the interest charges will likely outweigh the rewards.</li>
              </ul>
            </section>
            
            <section id="editors-essential-takeaways" className={`${styles.reviewSubSection} ${styles.eetaSection}`}> {/* Added new class for EETA styling */}
              <h3>C. Editor's Essential Takeaways (EETA)</h3>
              <p>Ultimately, the {cardName} continues to offer significant, tangible value for its target audience, particularly with the 2025 enhancements. The Companion Fare and free checked bags are powerful money-savers. Just be sure its strengths align with your travel habits and that you're comfortable with its shortcomings, especially regarding travel protections. For the right West Coast traveler, it remains a very compelling co-branded airline card.</p>
            </section>
          </section>

        </article>
      </main>

      {/* Sticky Call-to-Action Section */}
      <div style={{
          position: 'sticky',
          bottom: '0',
          left: '0',
          width: '100%',
          backgroundColor: '#f0f0f0', // Example background
          padding: '15px 20px',
          borderTop: '1px solid #ccc',
          boxShadow: '0 -2px 10px rgba(0,0,0,0.1)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 1000,
          gap: '15px', // Space between buttons
        }}
        className={styles.stickyCtaContainer} // You can create this class in your CSS module
      >
        {/* It's better to define styles for buttons in your CSS module */}
        <a 
          href={applyNowUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          className={styles.ctaButtonApply} // Example class
          style={{ 
            padding: '10px 20px', 
            backgroundColor: '#007bff', 
            color: 'white', 
            textDecoration: 'none', 
            borderRadius: '5px',
            fontWeight: 'bold',
          }}
        >
          Apply Now
        </a>
        <a 
          href={learnMoreUrl} 
          className={styles.ctaButtonLearnMore} // Example class
          style={{ 
            padding: '10px 20px', 
            backgroundColor: '#6c757d', 
            color: 'white', 
            textDecoration: 'none', 
            borderRadius: '5px',
          }}
        >
          Learn More
        </a>
      </div>

       {/* <Footer /> */} {/* Uncomment if you have a Footer component */}
    </>
  );
}