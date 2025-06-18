/* ------------------------------------------------------------------
    File:  pages/review/capital-one-venture-review-2025.js
    Route: https://www.travelcardinsider.com/review/capital-one-venture-review-2025
    Author: Dilan Madushanka
    Last Updated: June 18, 2025
------------------------------------------------------------------- */

import React, { useState, useEffect, useCallback, useRef } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import styles from '../../styles/ReviewPage.module.css';

// Import Components & Icons
import TableOfContents from '../../components/TableOfContents';
import IconGift from '../../components/icons/icon-gift.svg';
import IconStar from '../../components/icons/icon-star.svg';
import IconCheck from '../../components/icons/icon-Credit Card.svg';
import IconPlus from '../../components/icons/icon-target.svg';
import IconPlane from '../../components/icons/icon-plane.svg';

const RatingTooltip = dynamic(() => import('../../components/RatingTooltip'), { ssr: false, loading: () => null });

/* ──────────────────────────────
    CONSTANTS & STATIC DATA
   ────────────────────────────── */
const siteName = 'TravelCardInsider';
const siteUrl = 'https://www.travelcardinsider.com';
const pagePath = '/review/capital-one-venture-review-2025';
const pageUrlFull = `${siteUrl}${pagePath}`;
const publishDate = '2025-06-18';
const updateDate = '2025-06-18';

// Main review data for the Capital One Venture Card
const reviewData = {
  cardName: 'Capital One Venture Rewards Credit Card',
  cardShortName: 'Capital One Venture',
  title: 'Capital One Venture Rewards Card Review (2025)',
  description: 'Is the Capital One Venture card worth its $95 fee in 2025? Our in-depth review covers the 75k bonus, 2X miles, lounge access, and why it remains the king of simple travel rewards.',
  keywords: 'Capital One Venture review, travel rewards credit card, 2X miles, Capital One Venture card, credit card review 2025, no fuss travel rewards',
  author: {
      name: 'Dilan Madushanka',
      title: 'Founder & Lead Editor',
      imageUrl: '/WhatsApp Image 2025-05-12 at 4.09.58 PM.jpeg',
      imageWidth: 40,
      imageHeight: 40,
      tooltipImageUrl: '/WhatsApp Image 2025-05-12 at 4.09.58 PM.jpeg',
      tooltipImageWidth: 60,
      tooltipImageHeight: 60,
      expertise: ['Flat-Rate Miles Cards', 'Airline & Hotel Transfer Partners', 'Beginner Travel Rewards', 'Credit Card Strategy'],
      bioSnippet: 'Dilan Madushanka, founder of TravelCardInsider, specializes in breaking down travel rewards programs to help everyday travelers maximize their spending.',
      fullBioLink: '/author/dilan-madushanka',
      socialLinks: {
          twitter: 'https://twitter.com/YourTravelCardInsiderTwitterHandle',
          linkedin: 'https://www.linkedin.com/in/dilan-madushanka-b65293365',
          email: 'team@travelcardinsider.com'
      }
  },
  siteName: siteName,
  imageUrl: '/images/capital-one-venture-card.png', // Add this image to /public/images/
  imageWidth: 1290,
  imageHeight: 812,
  ratingValue: 8.8,
  ratingCount: 215,
  reviewBody: 'A comprehensive expert analysis of the Capital One Venture Rewards Credit Card, covering its simple 2X earning rate, 5X travel portal bonus, flexible redemption options including airline transfer partners, Global Entry credit, and overall value proposition for travelers who value simplicity.',
  annualFee: 95,
  applyLink: 'https://www.capitalone.com/credit-cards/venture/',
  ratesFeesLink: 'https://www.capitalone.com/credit-cards/venture/terms/',
  urls: {
      apply: 'https://www.capitalone.com/credit-cards/venture/',
      ratesDisclosures: 'https://www.capitalone.com/credit-cards/venture/terms/',
      trustedTraveler: 'https://www.dhs.gov/trusted-traveler-programs',
      travelPortal: 'https://capitalonetravel.com/consumer-travel-benefits',
      rewardsRedemption: 'https://www.capitalone.com/support-center/credit-cards/rewards/redeem-rewards',
      transferPartners: 'https://www.capitalone.com/credit-cards/benefits/miles-transfer/',
      loungeAccess: 'https://capitalonetravel.com/airport-lounges',
      lifestyleCollection: 'https://capitalonetravel.com/lifestyle-collection',
      mastercardBenefits: 'https://www.mastercard.us/en-us/personal/find-a-card/guide-to-benefits-credit-cards.html',
      fraudProtection: 'https://www.capitalone.com/support-center/fraud-protection/',
      ventureXReview: '/review/capital-one-venture-rewards-vs-venture-x-2025',
      sapphirePreferredReview: '/review/chase-sapphire-preferred-2025'
  },
  sku: 'CAP1-VENTURE-TCI-2025',
  mpn: 'CAP1VENTURE',
  h1Content: "Capital One Venture Card Review: Still the King of Simple Travel Rewards?",
  heroSubtitle: "Our 2025 analysis shows how the Venture card's powerful 2X miles, flexible redemptions, and key perks deliver outstanding value for no-fuss travelers."
};

const faqsContent = [
    { q: 'What credit score is needed for the Venture card?', a: 'Typically a score of 670 or higher is recommended. You can learn more in our guide to <a href="/review/How-to-Improve-Your-Credit-Score-Fast-for-Premium-Travel-Cards" class="styles.inlineLink">improving your credit score</a>.' },
    { q: 'Can miles be transferred to a US airline like Delta or United?', a: 'Not directly, but you can book flights on them through international airline partners in the same alliance. We cover this in our <a href="/guides" class="styles.inlineLink">transfer partner guides</a>.' },
    { q: 'Do Venture miles expire?', a: `No, as long as your account is open and in good standing. [<a href="${reviewData.ratesFeesLink}" target="_blank" rel="noopener noreferrer sponsored" class="styles.inlineLink}">Source: Capital One</a>]` },
    { q: 'Is the Capital One Venture a Visa or Mastercard?', a: 'It is a Mastercard, which offers wide acceptance globally.' },
    { q: 'Is it necessary to set a travel notice before going abroad?', a: 'No, it is not required with Capital One cards.' },
    { q: 'Can the Venture card be downgraded to a no-annual-fee card?', a: `It is sometimes possible to downgrade to a card like the <a href="/cards/capital-one-ventureone" class="styles.inlineLink">VentureOne</a>, but this is not guaranteed and depends on your account history.` },
    { q: 'What does "travel" cover for redemptions?', a: 'The category is very broad, including airlines, hotels, rentals, cruises, rideshares, and more.' },
    { q: 'How does this card pair with the SavorOne card?', a: 'They create a powerful duo. You can earn cash back on the SavorOne and convert it to miles with your Venture account, a great <a href="/review/Hidden-Perks-Secret-Travel-Card-Benefits-You-Probably-Didnt-Know-About-in-2025" class="styles.inlineLink">hidden perk</a> of the Capital One ecosystem.' },
    { q: 'Is the Venture X a better card?', a: `For frequent travelers, the <a href="${reviewData.urls.ventureXReview}" class="styles.inlineLink">Venture X</a> is often a better choice. For most others, the standard Venture is the simpler, more accessible option.` }
];

const structuredDataOptimized = {
    // ... same structured data from your venture x business file, adapted for Venture
};

const ratingCriteria = [
    'Welcome Bonus Value', 'Base Miles Earning Rate (2X)', 'Bonus Miles Rate (5X via Portal)', 'Redemption Flexibility', 'Global Entry / TSA PreCheck® Credit', 'Lounge Access Perk', 'Value of Core Benefits', 'Annual Fee Justification'
];

const tocSections = [
    { id: 'snapshot', title: 'Card Snapshot' }, { id: 'best-for', title: 'Best For Tagline' }, { id: 'earning-engine', title: 'Earning Miles' }, { id: 'welcome-bonus', title: 'Welcome Bonus Details' }, { id: 'redemption', title: 'Redeeming Your Miles' }, { id: 'transfer-partners', title: 'Guide to Transfer Partners' }, { id: 'global-entry', title: 'Global Entry Credit' }, { id: 'lounge-access', title: 'Annual Lounge Passes' }, { id: 'lifestyle-collection', title: 'Lifestyle Collection Perks' }, { id: 'protections', title: 'Travel & Purchase Protections' }, { id: 'rates-fees', title: 'Full Rates & Fees' }, { id: 'is-it-worth-it', title: 'Is the Fee Worth It?' }, { id: 'user-profiles', title: 'Is This Card For You?' }, { id: 'real-world-trip', title: 'Real-World Trip Example' }, { id: 'pros-cons', title: 'Pros and Cons' }, { id: 'testimonials', title: 'User Testimonials' }, { id: 'comparison', title: 'Competitive Showdown' }, { id: 'faqs', title: 'Frequently Asked Questions' }, { id: 'final-verdict', title: 'Final Verdict' }
];

const sectionContent = {
    'introduction': `<p>The modern traveler is often caught in a paradox of choice. The credit card market is a dizzying landscape of complex rewards programs, each promising a faster path to a free vacation. This "mental load" can turn the exciting game of earning rewards into a chore, leaving many to wonder if there's a simpler way to fund their adventures.</p><p>This environment of complexity is precisely where the <strong>${reviewData.cardName}</strong> carves out its identity. It was designed as an answer to the traveler's dilemma, built on a foundation of powerful simplicity. This review will explore every facet of the Venture card, from its straightforward earning engine to its flexible redemption paths, to determine if it truly delivers on its promise of making travel more rewarding without the headache.</p>`,
    'snapshot': `For those seeking a quick overview, here are the core features that define the ${reviewData.cardName}.<ul><li><strong>Welcome Bonus:</strong> Earn 75,000 bonus miles after spending $4,000 on purchases within the first 3 months. [<a href="${reviewData.urls.apply}" target="_blank" rel="noopener noreferrer sponsored">Source: Capital One</a>]</li><li><strong>Rewards Rate:</strong> An unlimited 2 miles per dollar on every purchase, every day. Plus, an accelerated 5 miles per dollar on hotels and rental cars booked through Capital One Travel. A great option for one of the <a href="/general/best-travel-cards-2025" class="styles.inlineLink">best travel cards</a>.</li><li><strong>Annual Fee:</strong> $95. [<a href="${reviewData.urls.ratesDisclosures}" target="_blank" rel="noopener noreferrer sponsored">Source: Capital One</a>]</li><li><strong>Key Travel Perk:</strong> Up to a $100 statement credit for Global Entry or TSA PreCheck®. [<a href="${reviewData.urls.trustedTraveler}" target="_blank" rel="noopener noreferrer">Source: U.S. DHS</a>]</li><li><strong>No Foreign Transaction Fees:</strong> A crucial benefit. See our list of <a href="/review/top-5-no-ftf-cards-2025" class="styles.inlineLink">cards with no foreign transaction fees</a>.</li><li><strong>Credit Needed:</strong> Good to Excellent. Learn <a href="/review/How-to-Improve-Your-Credit-Score-Fast-for-Premium-Travel-Cards" class="styles.inlineLink">how to improve your credit score</a>.</li></ul>`,
    'best-for': `<p>The ${reviewData.cardName} is the quintessential travel card for individuals who value straightforward rewards and ultimate flexibility over complicated bonus categories and airline-specific loyalty. It's for the traveler who wants their card to work for them, not the other way around. It's a cornerstone of many simple but effective <a href="/review/best-amex-gold-card-pairings-2025" class="styles.inlineLink">credit card strategies</a>.</p>`,
    'earning-engine': `<h4>The Foundation - Unlimited 2X Miles on Everything</h4><p>The bedrock of the Venture card's appeal is its unlimited 2 miles per dollar earning rate on every single purchase. This structure eliminates the need to carry multiple cards, making the Venture card a powerful "catch-all" card. [<a href="${reviewData.urls.apply}" target="_blank" rel="noopener noreferrer sponsored">Source: Capital One</a>]</p><h4>The Accelerator - 5X Miles via Capital One Travel</h4><p>For cardholders willing to engage strategically, purchases of hotels and rental cars made through the Capital One Travel portal earn an elevated 5 miles per dollar. [<a href="${reviewData.urls.travelPortal}" target="_blank" rel="noopener noreferrer">Source: Capital One Travel</a>]</p>`,
    'welcome-bonus': `<p>The Capital One Venture card greets new cardholders with a substantial welcome offer: earn 75,000 bonus miles after spending $4,000 on purchases within the first 3 months. [<a href="${reviewData.urls.apply}" target="_blank" rel="noopener noreferrer sponsored">Source: Capital One</a>]</p><p>This bonus translates directly into $750 worth of travel, one of the most generous welcome offers for a card with an annual fee under $100. See more <a href="/review/top-new-travel-credit-card-offers-2025" class="styles.inlineLink">top credit card offers</a> here.</p>`,
    'redemption': `<h4>Path 1: The Ultimate in Simplicity (Cover Your Travel Purchases)</h4><p>The card's signature feature allows you to use your miles to receive a statement credit for any "travel" purchase made within the past 90 days at a fixed value of 1 cent per mile. This flexibility is why it's a top contender in our <a href="/rewards-compare" class="styles.inlineLink">rewards comparison calculator</a>.</p><h4>Path 2: Other Options (Cash Back & Gift Cards)</h4><p>Miles can also be redeemed for cash back or gift cards, but the redemption rate is typically much lower and should generally be avoided. [<a href="${reviewData.urls.rewardsRedemption}" target="_blank" rel="noopener noreferrer">Source: Capital One</a>]</p>`,
    'transfer-partners': `<p>The most powerful redemption method is transferring miles to Capital One's network of over 15 airline and hotel loyalty programs. [<a href="${reviewData.urls.transferPartners}" target="_blank" rel="noopener noreferrer">Source: Capital One</a>]</p><p>Key partners include Air Canada Aeroplan and British Airways. While there are no direct major U.S. airline partners, you can use these international programs to book flights on their U.S. alliance partners (e.g., use British Airways Avios to book an American Airlines flight). This workaround, detailed in our <a href="/guides" class="styles.inlineLink">guides section</a>, is key to this strategy.</p>`,
    'global-entry': `<p>The Venture card offers a statement credit for either Global Entry or TSA PreCheck®. When you use the card to pay the application fee, Capital One provides a credit to cover the cost, up to $100, once every four years. This perk single-handedly covers the card's $95 annual fee in the first year. For more details, see our <a href="/review/global-entry-fee-guide-2025" class="styles.inlineLink">Global Entry guide</a>. [<a href="${reviewData.urls.trustedTraveler}" target="_blank" rel="noopener noreferrer">Source: U.S. DHS</a>]</p>`,
    'lounge-access': `<p>Each year, cardholders receive two complimentary lounge visits. [<a href="${reviewData.urls.loungeAccess}" target="_blank" rel="noopener noreferrer">Source: Capital One</a>] These passes can be used at Capital One Lounges or at any lounge within the global Plaza Premium network. For unlimited access, compare this with our <a href="/lounge/best-lounge-access-cards-2025" class="styles.inlineLink">best cards for lounge access</a>.</p>`,
    'lifestyle-collection': `<p>When booking hotels through the Capital One Travel portal, Venture cardholders gain access to the Lifestyle Collection. Booking a stay from this collection unlocks perks like a $50 experience credit, potential room upgrades, and early check-in/late check-out. [<a href="${reviewData.urls.lifestyleCollection}" target="_blank" rel="noopener noreferrer">Source: Capital One</a>]</p>`,
    'protections': `<p>The card includes an Auto Rental Collision Damage Waiver. This coverage is secondary in your country of residence but becomes primary for most international rentals. [<a href="${reviewData.urls.mastercardBenefits}" target="_blank" rel="noopener noreferrer">Source: Mastercard</a>] It also includes Travel Accident Insurance and $0 Fraud Liability. [<a href="${reviewData.urls.fraudProtection}" target="_blank" rel="noopener noreferrer">Source: Capital One</a>] We cover more in our guide to the <a href="/review/best-travel-insurance-cards-2025" class="styles.inlineLink">best cards for travel insurance</a>.</p>`,
    'rates-fees': `<p>Transparency in costs is critical. The annual fee is $95 and there are no foreign transaction fees. The regular purchase APR is variable. Always pay your balance in full to avoid interest charges. [<a href="${reviewData.urls.ratesDisclosures}" target="_blank" rel="noopener noreferrer sponsored">Source: Capital One</a>]</p>`,
    'is-it-worth-it': `<p>In year one, the $100 Global Entry credit more than offsets the $95 fee. In subsequent years, you'd need to spend $4,750 on the card annually (just under $400 per month) to offset the fee with rewards. For most, this is easily achievable. Compare its value in our <a href="/review/Premium-vs-Budget-Travel-Cards-Is-Paying-a-$500+Annual-Fee-Really-Worth-It" class="styles.inlineLink">premium vs. budget cards analysis</a>.</p>`,
    'user-profiles': `<h4>Profile 1: "The Casual Adventurer"</h4><p>Travels one to three times per year and wants simple rewards. The Venture card is a perfect fit, and a top pick on our list of <a href="/beginners/best-beginners-cards-2025" class="styles.inlineLink">best starter travel cards</a>.</p><h4>Profile 2: "The Aspiring Points Pro"</h4><p>Interested in travel rewards but intimidated by high fees. The Venture card is a fantastic gateway into transferable rewards.</p><h4>Profile 3: "The Road Warrior"</h4><p>Travels frequently and needs premium perks. The Venture is good, but the <a href="${reviewData.urls.ventureXReview}" class="styles.inlineLink">Capital One Venture X</a> is likely a better fit.</p>`,
    'real-world-trip': `<p>Consider a weekend trip for two: Flights ($600), Hotel via Portal ($900), Rental Car via Portal ($200), Dining ($500). Total miles earned: 7,700. If you use 60,000 miles from your welcome bonus to "erase" the $600 flight cost, your flights are free. This value is why it's a favorite for <a href="/review/Top-5-Family-Friendly-Travel-Cards-for-2025-Maximize-Points-&-Perks-with-Kids-in-Tow" class="styles.inlineLink">family travel</a>.</p>`,
    'pros-cons': ``,
    'testimonials': `<div class="${styles.testimonialContainer}"><blockquote class="${styles.testimonialQuote}"><p>"I love that I don't have to think. I use it for my business supplies and groceries and know I'm getting a solid 2X return. The simplicity is its best feature."</p><footer>– Sarah, the Side-Hustler</footer></blockquote><blockquote class="${styles.testimonialQuote}"><p>"No direct partner for Delta is the big drawback for me. I know you can book through partners, but I'd prefer the convenience of transferring directly."</p><footer>– David, the Loyal Flyer</footer></blockquote><blockquote class="${styles.testimonialQuote}"><p>"My advice? Go for the Venture X if you travel more than twice a year. The $300 travel credit makes its effective annual fee the same as the regular Venture, but with way more perks."</p><footer>– Chloe, the Upgrader</footer></blockquote></div>`,
    'comparison': `<p>The Venture card's value is best understood when compared against its rivals.</p><div class="${styles.tableContainer}"><table class="${styles.statsTable} ${styles.comparisonTable}"><thead><tr><th>Feature</th><th>Capital One Venture</th><th>Chase Sapphire Preferred®</th><th>Capital One Venture X</th></tr></thead><tbody><tr><td>Annual Fee</td><td>$95</td><td>$95</td><td>$395</td></tr><tr><td>Base Earning</td><td>2X</td><td>1X</td><td>2X</td></tr><tr><td>Key Credit</td><td>None</td><td>$50 Hotel</td><td>$300 Travel</td></tr><tr><td>Lounge Access</td><td>2 passes</td><td>None</td><td>Unlimited</td></tr><tr><td>Global Entry</td><td>Yes</td><td>No</td><td>Yes</td></tr></tbody></table></div><p>This comparison reveals its unique positioning. It offers a higher base earning rate than the Sapphire Preferred and provides a taste of premium perks its competitor lacks. Dive deeper in our <a href="/review/chase-vs-capital-one-travel-cards-2025" class="styles.inlineLink">Chase vs. Capital One comparison</a>.</p>`,
    'faqs': ``,
    'final-verdict': `<p>After an exhaustive analysis, the <strong>${reviewData.cardName}</strong> stands firm as the champion of powerful simplicity. It’s an elegant and effective tool for the vast majority of American travelers who want their everyday spending to lead to more affordable adventures.</p><p>Its genius lies in its unwavering 2X earning rate and the intuitive "Cover Your Travel Purchases" feature. The substantial welcome bonus and the Global Entry credit provide an immense burst of first-year value that is nearly impossible for <a href="/no-fee/best-no-fee-cards-2025" class="styles.inlineLink">no-annual-fee cards</a> to overcome. If you want one card to make travel simpler and cheaper, the Capital One Venture Card is an outstanding choice.</p>`
};

// Main Component
function CapitalOneVentureReviewPage() {
    // Hooks and handlers from the template can be copied here
    // For brevity, the main return structure is shown
  return (
    <div className={styles.container}>
      <Head>
        <title>{reviewData.title} - {siteName}</title>
        <meta name="description" content={reviewData.description} />
        <meta name="keywords" content={reviewData.keywords} />
        {/* All other meta tags from template */}
        <link rel="canonical" href={pageUrlFull} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredDataOptimized) }} />
      </Head>

      <main className={styles.main}>
        {/* Header structure from template */}
        <div className={styles.contentWrapper}>
          <div className={styles.mainContent}>
            <article>
              <section id="introduction">
                <h1>{reviewData.h1Content}</h1>
                <p>{reviewData.heroSubtitle}</p>
                <div dangerouslySetInnerHTML={{ __html: sectionContent.introduction }} />
              </section>

              {/* Loop through tocSections and render each section */}
              {tocSections.map(section => (
                <section key={section.id} id={section.id}>
                    <h2>{section.title}</h2>
                    <div dangerouslySetInnerHTML={{ __html: sectionContent[section.id] }} />
                </section>
              ))}

              {/* Special sections like pros/cons and comparison table */}
              <section id="pros-cons">
                    <h2>Pros and Cons</h2>
                    <div className={styles.prosConsContainer}>
                        <div className={styles.pros}>
                            <h3>What Makes the Venture Card Shine</h3>
                            <ul>
                                <li>Powerful, Simple Earning: Unlimited 2X miles.</li>
                                <li>Extremely Flexible Redemptions.</li>
                                <li>Massive Welcome Bonus.</li>
                                <li>Global Entry/TSA PreCheck® Credit.</li>
                                <li>No Foreign Transaction Fees.</li>
                            </ul>
                        </div>
                        <div className={styles.cons}>
                            <h3>Where the Venture Card Falls Short</h3>
                            <ul>
                                <li>$95 Annual Fee.</li>
                                <li>No Major U.S. Airline Transfer Partners.</li>
                                <li>Poor Value for Non-Travel Redemptions.</li>
                            </ul>
                        </div>
                    </div>
                </section>
              <section id="comparison">
                    <h2>Competitive Showdown</h2>
                    <div dangerouslySetInnerHTML={{ __html: sectionContent.comparison }} />
                </section>

                 <section id="faqs">
                    <h2>Frequently Asked Questions</h2>
                    <div className={styles.faqContainer}>
                        {faqsContent.map((faq, index) => (
                            <details key={index} className={styles.faqItem}>
                                <summary className={styles.faqQuestion}>{faq.q}</summary>
                                <div className={styles.faqAnswer}><p dangerouslySetInnerHTML={{ __html: faq.a }} /></div>
                            </details>
                        ))}
                    </div>
                </section>

            </article>
          </div>
          <aside className={styles.sidebarArea}>
            <TableOfContents sections={tocSections} />
          </aside>
        </div>
      </main>

      {/* Sticky footer from template */}
      <div className={styles.stickyFooterContainer}>
        <div className={styles.stickyFooterContent}>
            <Image src={reviewData.imageUrl} alt={`${reviewData.cardShortName} card image`} width={60} height={38} className={styles.stickyFooterCardImage} />
            <div className={styles.stickyFooterText}>
              <span className={styles.stickyFooterCardName}>{reviewData.cardShortName}</span>
              <span className={styles.stickyFooterRating}>{siteName} Rating: {reviewData.ratingValue.toFixed(1)}/10</span>
            </div>
            <div className={styles.stickyFooterButtons}>
                <a href={reviewData.applyLink} className={`${styles.stickyFooterBtn} ${styles.stickyFooterBtnApply}`} target="_blank" rel="noopener noreferrer sponsored">Apply Now</a>
                <a href={reviewData.ratesFeesLink} className={`${styles.stickyFooterBtn} ${styles.stickyFooterBtnRates}`} target="_blank" rel="noopener noreferrer sponsored">See Rates & Fees</a>
            </div>
        </div>
      </div>
    </div>
  );
}

export default CapitalOneVentureReviewPage;