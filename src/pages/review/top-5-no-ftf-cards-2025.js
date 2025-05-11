import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link'; // Import Link for internal navigation
import styles from '../../styles/NoFTFCardsReview.module.css';

// Import your existing Header and Footer components
import Header from '../../components/Header'; // Adjust path if necessary
import Footer from '../../components/Footer'; // Adjust path if necessary
import StarRating from '../../components/StarRating'; // Import the star component

// Card Data including links extracted/assumed from finalcreditcard.json
const cardData = [
  {
    id: 'csp',
    name: 'Chase Sapphire Preferred® Card',
    imageSrc: '/sapphire_preferred_card.png',
    imageAlt: 'Chase Sapphire Preferred Card image',
    ratingValue: 8.4,
    ratingStars: 4.0,
    applyLink: 'https://creditcards.chase.com/rewards-credit-cards/sapphire/preferred', // Replace with actual
    ratesFeesLink: 'https://sites.chase.com/services/creatives/pricingandterms.html/content/dam/pricingandterms/LGC56014.html', // Replace with actual
    learnMoreLink: '/cards/chase-sapphire-preferred', // Replace with actual internal link if different
    bestFor: 'Travelers seeking great overall value, flexible rewards, solid travel protections, and a moderate annual fee.',
    annualFee: '$95',
    welcomeBonus: 'Earn 100,000 bonus points after $5,000 spend in 3 months (verify current offer).',
    ftf: 'None',
    rewards: '5x points on travel via Chase Travel℠ (excluding $50 hotel credit purchases), 3x on dining worldwide, select streaming, and online groceries (exclusions apply), 2x on other travel worldwide, 1x on everything else. Plus, a 10% Anniversary Points Boost.',
    perks: '$50 Annual Chase Travel Hotel Credit; Comprehensive Travel Insurance including Trip Cancellation/Interruption, primary Auto Rental CDW, Baggage Delay, and Trip Delay Reimbursement.',
    excelsAbroad: 'No FTFs save money. Strong rewards on global travel and dining. Valuable travel insurance, especially the primary rental car coverage. Points transfer 1:1 to valuable airline/hotel partners (e.g., British Airways, Hyatt, United).',
    rewardsInsights: 'Points worth 25% more (1.25 cents each) via Chase Travel℠ portal. Flexible redemption (cash back, gift cards, transfers). The $95 fee is effectively $45 if the $50 hotel credit is used. Strong value proposition for many international travelers.',
    considerations: 'Good/excellent credit needed. Hotel credit requires booking via Chase Travel℠.'
  },
  {
    id: 'c1vx',
    name: 'Capital One Venture X Rewards Credit Card',
    imageSrc: '/venturex-cg-static-card-1000x630-2.avif',
    imageAlt: 'Capital One Venture X Rewards Card image',
    ratingValue: 9.0,
    ratingStars: 4.5,
    applyLink: 'https://www.capitalone.com/credit-cards/venture-x/', // Replace with actual
    ratesFeesLink: 'https://www.capitalone.com/credit-cards/venture-x/', // Replace with actual
    learnMoreLink: '/cards/capital-one-venture-x', // Replace with actual internal link if different
    bestFor: 'Travelers wanting premium airport experiences, easy-to-use credits offsetting the annual fee, and high rewards via the issuer\'s portal.',
    annualFee: '$395',
    welcomeBonus: '75,000 miles after $4,000 spend in 3 months.',
    ftf: 'None',
    rewards: '10x miles on hotels/rental cars via Capital One Travel, 5x on flights via Capital One Travel, 2x miles on all other purchases.',
    perks: '$300 Annual Capital One Travel Credit; 10,000 Anniversary Bonus Miles (worth $100+ toward travel); Unlimited access to Capital One Lounges & Priority Pass™ Select network for cardholder + 2 guests; Global Entry/TSA PreCheck® credit; Hertz President\'s Circle® status.',
    excelsAbroad: 'No FTFs. Extensive lounge access enhances travel comfort. Simple 2x miles on all non-portal spending abroad. Global Entry credit speeds up U.S. customs return. Hertz status improves rental experiences.',
    rewardsInsights: 'Redeem miles easily for travel statement credits (1 cent/mile) or via portal. Transfer miles to 15+ partners. The $395 fee is effectively covered by the $300 travel credit and 10,000 anniversary miles ($100+ value) for those using the portal, making premium perks accessible at low net cost.',
    considerations: 'Highest rewards require using Capital One Travel portal. Annual fee justification relies on using the travel credit. Excellent credit needed.'
  },
  {
    id: 'csr',
    name: 'Chase Sapphire Reserve®',
    imageSrc: '/sapphire_reserve_card.png',
    imageAlt: 'Chase Sapphire Reserve Card image',
    ratingValue: 9.2,
    ratingStars: 5.0,
    applyLink: 'https://creditcards.chase.com/rewards-credit-cards/sapphire/reserve', // Replace with actual
    ratesFeesLink: 'https://sites.chase.com/services/creatives/pricingandterms.html/content/dam/pricingandterms/LGC56007.html', // Replace with actual
    learnMoreLink: '/cards/chase-sapphire-reserve', // Replace with actual internal link if different
    bestFor: 'Frequent luxury travelers prioritizing top-tier insurance, extensive lounge access, high travel/dining rewards, and premium perks.',
    annualFee: '$550 ($75/authorized user)',
    welcomeBonus: '60,000 points after $5,000 spend in 3 months.',
    ftf: 'None',
    rewards: 'Post-$300 travel credit: 10x points on hotels/cars via Chase Travel℠, 5x on flights via Chase Travel℠, 3x on other travel/dining worldwide. 10x on Chase Dining. 1x on everything else.',
    perks: 'Easy-to-use $300 Annual Travel Credit (broadly applies); Priority Pass™ Select & Chase Sapphire Lounge access (cardholder + 2 guests); Global Entry/TSA PreCheck®/NEXUS credit; Premium Travel Insurance Suite (primary Auto Rental CDW, Trip Cancellation/Interruption, 6-hr Trip Delay, Lost Luggage, Baggage Delay, Emergency Medical/Dental, Emergency Evacuation).',
    excelsAbroad: 'No FTFs. Flexible $300 travel credit offsets costs easily. Superior lounge access. Best-in-class travel insurance provides maximum protection, especially emergency medical/evacuation coverage. NEXUS credit useful for Canada travel.',
    rewardsInsights: 'Points worth 50% more (1.5 cents each) via Chase Travel℠ portal. Same valuable 1:1 transfer partners as Preferred. Access to exclusive events. High $550 fee requires frequent travel and perk utilization to justify over Sapphire Preferred. $300 credit brings effective cost to $250, covered by lounge/insurance value for the right user.',
    considerations: 'High $550 annual fee + $75/authorized user. Excellent credit needed. Value depends on maximizing premium benefits.'
  },
   {
    id: 'c1v',
    name: 'Capital One Venture Rewards Credit Card',
    imageSrc: '/venture_cardart_prim_323x203-1.avif',
    imageAlt: 'Capital One Venture Rewards Card image',
    ratingValue: 8.2,
    ratingStars: 4.0,
    applyLink: 'https://www.capitalone.com/credit-cards/venture/', // Replace with actual
    ratesFeesLink: 'https://www.capitalone.com/credit-cards/venture/', // Replace with actual
    learnMoreLink: '/cards/capital-one-venture', // Replace with actual internal link if different
    bestFor: 'Travelers preferring simplicity with a solid flat earning rate, a moderate annual fee, and essential perks like Global Entry credit.',
    annualFee: '$95',
    welcomeBonus: '75,000 miles after $4,000 spend in 3 months (verify current offer).',
    ftf: 'None',
    rewards: 'Unlimited 2x miles per dollar on every purchase; 5x miles on hotels/rentals via Capital One Travel.',
    perks: 'Global Entry/TSA PreCheck® credit; Hertz Five Star® status; Two complimentary lounge visits per year (Capital One or Plaza Premium - verify terms).',
    excelsAbroad: 'No FTFs. Simple 2x miles on all spending is great for diverse international purchases. Global Entry credit aids airport return. 5x miles available for pre-trip portal bookings.',
    rewardsInsights: 'Redeem miles easily for travel statement credits (1 cent/mile) or transfer to partners. Predictable 2x earning is its strength. $95 fee offset in years Global Entry credit is used. A reliable workhorse card.',
    considerations: 'Base 2x rate lower than category bonuses on other cards. Fewer premium perks than Venture X or Sapphire Reserve. Limited lounge access.'
  },
   {
    id: 'csprem',
    name: 'Citi Strata Premier℠ Card',
    imageSrc: '/download1.png',
    imageAlt: 'Citi Strata Premier Card image',
    ratingValue: 7.7,
    ratingStars: 4.0,
    applyLink: 'https://www.citi.com/credit-cards/citi-strata-premier-credit-card', // Replace with actual
    ratesFeesLink: 'https://www.citi.com/credit-cards/citi-strata-premier-credit-card', // Replace with actual
    learnMoreLink: '/cards/citi-strata-premier', // Replace with actual internal link if different
    bestFor: 'Travelers spending across diverse categories (air, hotels, dining, supermarkets, gas) who value point transfers.',
    annualFee: '$95',
    welcomeBonus: '60,000 ThankYou® Points after $4,000 spend in 3 months (verify current).',
    ftf: 'None',
    rewards: '10x points on Hotels/Cars/Attractions via CitiTravel.com; 3x points on Air Travel, Other Hotels, Restaurants worldwide, Supermarkets, Gas/EV Stations; 1x point elsewhere.',
    perks: '$100 Annual Hotel Savings Benefit ($100 off $500+ hotel stay via CitiTravel.com); Points transfer to airline partners (e.g., Virgin Atlantic, Singapore Airlines); Travel Protections (Trip Delay/Cancellation/Interruption, Lost Luggage, MasterRental).',
    excelsAbroad: 'No FTFs. Broad 3x categories cover common international spending like restaurants, supermarkets (great for longer stays), and gas. Point transfers offer award flight options. Standard travel protections included.',
    rewardsInsights: 'Redeem points via portal, transfer, gift cards, cash back, Shop with Points. $100 hotel benefit can offset the $95 fee if used, making the broad 3x earning categories very appealing for those whose spending aligns.',
    considerations: 'Hotel credit requires $500+ booking via CitiTravel.com. Transfer partner list differs from Chase/Capital One; value depends on preferred airlines.'
  }
];

// Comparison Table Data (Verify details)
const comparisonData = [
  { name: 'Chase Sapphire Preferred® Card', fee: '$95', bonus: '100,000 pts / $5k/3mo (verify)', earn: '5x Travel (Portal), 3x Dining, 2x Travel (Other)', perk: '$50 Hotel Credit (Portal), Comp. Insurance', ftf: 'None' },
  { name: 'Capital One Venture X Rewards Card', fee: '$395', bonus: '75,000 miles / $4k/3mo', earn: '10x Hotels/Cars (Portal), 5x Flights (Portal), 2x Else', perk: '$300 Travel Credit (Portal), 10k Miles, Lounge (C1 + PP)', ftf: 'None' },
  { name: 'Chase Sapphire Reserve®', fee: '$550', bonus: '60,000 pts / $5k/3mo', earn: '10x/5x Travel (Portal, post-$300), 3x Travel/Dining', perk: '$300 Travel Credit (Flex), Lounge (Chase + PP), Premium Insurance', ftf: 'None' },
  { name: 'Capital One Venture Rewards Card', fee: '$95', bonus: '75,000 miles / $4k/3mo (verify)', earn: '5x Hotels/Rentals (Portal), 2x Else', perk: 'Global Entry Credit, 2 Lounge Visits', ftf: 'None' },
  { name: 'Citi Strata Premier℠ Card', fee: '$95', bonus: '60,000 pts / $4k/3mo (verify)', earn: '10x Hotels/Cars (Portal), 3x Air/Hotels/Dining/Grocery/Gas', perk: '$100 Hotel Credit (Portal, $500+ stay)', ftf: 'None' },
];


function NoFTFReviewPage() {
  const heroImageSrc = '/images/reviews/no-ftf-hero.jpg'; // IMPORTANT: Replace with your actual image path
  const heroImageAlt = 'Traveler using a credit card internationally with scenic background'; // Descriptive alt text

  return (
    <> {/* Use Fragment to avoid extra div */}
      <Head>
      <title>Top 5 No Foreign Transaction Fee Credit Cards (2025) | Travel Card Insider</title>
  <meta name="description" content="Review of the best credit cards with no foreign transaction fees for international travel in 2025, including Chase Sapphire, Capital One Venture X, and more." />
  <link rel="canonical" href="https://www.travelcardinsider.com/review/top-5-no-ftf-cards-2025" />
  <meta property="og:title" content="Top 5 No Foreign Transaction Fee Credit Cards (2025)" />
  <meta property="og:description" content="Avoid costly foreign transaction fees in 2025. Compare the best travel credit cards with no FTFs, rewards, and lounge access." />
  <meta property="og:url" content="https://www.travelcardinsider.com/review/top-5-no-ftf-cards-2025" />
  <meta property="og:image" content="https://www.travelcardinsider.com/images/reviews/no-ftf-hero.jpg" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Top 5 No FTF Credit Cards for 2025" />
  <meta name="twitter:description" content="Compare 2025’s top credit cards with no foreign transaction fees for international travel and savings." />
  <meta name="twitter:image" content="https://www.travelcardinsider.com/images/reviews/no-ftf-hero.jpg" />
  <link rel="preload" href={heroImageSrc} as="image" />
        <script type="application/ld+json">
    {`
      {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "Top 5 No Foreign Transaction Fee Cards 2025",
        "url": "https://www.travelcardinsider.com/review/top-5-no-ftf-cards-2025",
        "description": "A detailed review of the top 5 no foreign transaction fee travel credit cards in 2025.",
        "numberOfItems": 5,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "url": "https://www.travelcardinsider.com/cards/chase-sapphire-preferred"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "url": "https://www.travelcardinsider.com/cards/capital-one-venture-x"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "url": "https://www.travelcardinsider.com/cards/chase-sapphire-reserve"
          },
          {
            "@type": "ListItem",
            "position": 4,
            "url": "https://www.travelcardinsider.com/cards/capital-one-venture"
          },
          {
            "@type": "ListItem",
            "position": 5,
            "url": "https://www.travelcardinsider.com/cards/citi-strata-premier"
          }
        ]
      }
    `}
    <meta name="geo.region" content="US" />
        <meta name="geo.placename" content="United States" />
        <meta name="language" content="en-US" />
        <meta name="distribution" content="US" />
        <link rel="alternate" href="https://www.travelcardinsider.com" hreflang="en-us" />
        <link rel="preload" href="/fonts/Roboto_Condensed-Regular.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/Roboto_Condensed-Bold.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/PlayfairDisplay-Regular.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/Playfair-Display-Bold.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
  </script>
      </Head>

       {/* Include Header component */}

      {/* Main content container */}
      <main className={styles.reviewContainer}>

      <header className={styles.reviewHeader}>
          <h1>Top 5 No Foreign Transaction Fee Credit Cards for International Travelers (2025)</h1>
        </header>

        <div className={styles.heroSection}>
          <Image
            src={'/damaris-isenschmid-k1LIMMsm8bg-unsplash.webp'}
            alt={heroImageAlt}
            layout="responsive"
            width={900}
            height={400}
            objectFit="cover"
            priority
            className={styles.heroImage}
          />
        </div>

        {/* Disclaimer moved below hero */}
        <p className={styles.disclaimer}>
          Disclaimer: Information is based on sources available up to early 2025. Offers and terms change frequently. Verify all details directly with the card issuer before applying. Affiliate links may be present.
        </p>

        

        <article>
          <section className={styles.reviewSection}>
            <h2>I. Introduction: Travel Smarter in 2025</h2>
            <p>International travel continues to be a goal for many in 2025. A key aspect of smart travel budgeting is avoiding unnecessary costs like foreign transaction fees, typically 1% to 3% charged on purchases made outside the U.S.</p>
            <p>Choosing a credit card with no foreign transaction fees offers direct savings, freeing up funds for experiences rather than bank charges. The best cards for international travelers, however, go beyond just fee elimination. They bundle valuable travel rewards, statement credits, lounge access, insurance, and other perks that can significantly enhance your journey and often outweigh any annual fee.</p>
            <p>This review focuses on the Top 5 No Foreign Transaction Fee Credit Cards for International Travelers in 2025, selected based on current data from official sources and reputable reviews. We aim for an objective comparison to help you find the best financial tool for your global adventures.</p>
          </section>

          <section className={styles.reviewSection}>
            <h2>II. Understanding Foreign Transaction Fees (FTFs)</h2>
            <h3>What Are They?</h3>
            <p>FTFs are charges applied by card issuers to transactions processed outside the U.S., including purchases made while traveling or online from international merchants. These fees usually range from 1% to 3% of the purchase amount.</p>
            <h3>Budget Impact</h3>
            <p>While seemingly small, these fees add up. Spending $5,000 internationally could incur $50-$150 in FTFs. A no-FTF card ensures you avoid this extra cost, providing predictable savings. This applies not just to travel but also to international online shopping.</p>
          </section>

          <section className={styles.reviewSection}>
            <h2>III. Our Picks: The 5 Best No Foreign Transaction Fee Cards (2025)</h2>
            <p>Here are five standout cards offering no foreign transaction fees alongside strong rewards and travel benefits.</p>


            
            {/* Updated card rendering loop */}
            {cardData.map((card, index) => (
              // Added cardSeparator class for visual distinction
              <div key={card.id} className={`${styles.cardDetailSection} ${styles.cardSeparator}`}>
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
                     <div className={styles.ratingContainer}>
                       <StarRating rating={card.ratingStars} />
                       {/* Added "TCI Rating: " prefix */}
                       <span className={styles.ratingValue}>TCI Rating: {card.ratingValue.toFixed(1)}/10</span>
                     </div>
                   </div>
                 </div>

                <ul>
                  <li><strong>Best For:</strong> {card.bestFor}</li>
                  <li><strong>Card Snapshot:</strong>
                    <ul className={styles.snapshotList}>
                      <li>Annual Fee: {card.annualFee}</li>
                      <li>Welcome Bonus: {card.welcomeBonus}</li>
                      <li>Foreign Transaction Fee: {card.ftf}</li>
                      <li>Key Rewards: {card.rewards}</li>
                      <li>Standout Perks: {card.perks}</li>
                    </ul>
                  </li>
                  <li><strong>Why It Excels Abroad:</strong> {card.excelsAbroad}</li>
                  <li><strong>Rewards Program Insights:</strong> {card.rewardsInsights}</li>
                  <li><strong>Things to Consider:</strong> {card.considerations}</li>
                </ul>

                {/* Buttons Section */}
                <div className={styles.cardButtonsContainer}>
                    <a
                        href={card.applyLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${styles.cardButton} ${styles.applyButton}`} // Primary button style
                    >
                        Apply Now
                    </a>
                     <a
                        href={card.ratesFeesLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${styles.cardButton} ${styles.secondaryButton}`} // Secondary button style
                    >
                        Rates & Fees
                    </a>
                     {/* Use Next Link for internal page navigation */}
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
            <h2>IV. Comparison at a Glance: Top 5 No FTF Travel Cards (2025)</h2>
            <div className={styles.tableContainer}>
              <table className={styles.comparisonTable}>
                 <thead>
                    <tr>
                    <th>Card Name</th>
                    <th>Annual Fee</th>
                    <th>Current Welcome Bonus (Points/Miles + Spend Req.)</th>
                    <th>Key Travel/Dining Earn Rate</th>
                    <th>Top Annual Credit/Perk</th>
                    <th>Foreign Transaction Fee</th>
                    </tr>
                </thead>
                <tbody>
                    {comparisonData.map(row => (
                    <tr key={row.name}>
                        <td>{row.name}</td>
                        <td>{row.fee}</td>
                        <td>{row.bonus}</td>
                        <td>{row.earn}</td>
                        <td>{row.perk}</td>
                        <td>{row.ftf}</td>
                    </tr>
                    ))}
                </tbody>
              </table>
            </div>
            <p className={styles.tableNote}>Note: Offers and terms change. Verify directly with issuers. "PP" = Priority Pass™ Select.</p>
          </section>

           <section className={styles.reviewSection}>
              <h2>V. Honorable Mentions</h2>
              <p>Other no-FTF cards worth considering:</p>
              <ul>
                  <li><strong>Discover it® Miles:</strong> No annual fee, no FTF. Unlimited 1.5x miles on everything. Unlimited Cashback Match first year. Flexible redemption. Lacks perks/insurance of fee cards. Great for beginners or budget travelers.</li>
                  <li><strong>Capital One VentureOne Rewards Credit Card:</strong> No annual fee, no FTF. Unlimited 1.25x miles (5x on hotels/rentals via portal). Allows partner transfers. Lower earn rate than Venture; lacks Global Entry credit. Good for occasional travelers avoiding fees.</li>
                  <li><strong>American Express® Cards (Platinum/Gold):</strong> Premium travel/dining cards, typically no FTF. Platinum known for lounge access; Gold for dining/U.S. supermarket rewards. Specific current U.S. offer details (bonuses, fees, credits) were not confirmed in sources for this report, preventing direct comparison here. Check Amex directly for current U.S. terms.</li>
              </ul>
          </section>

          <section className={styles.reviewSection}>
            <h2>VI. Choosing Your Ideal Card</h2>
            <p>Select based on your:</p>
            <ul>
              <li><strong>Travel Frequency:</strong> Frequent travel justifies premium card fees (Venture X, Sapphire Reserve). Occasional travel suits mid-tier or no-fee cards.</li>
              <li><strong>Spending Habits:</strong> Match card bonus categories to your spending (e.g., Sapphire for travel/dining, Citi for supermarkets/gas, Venture for simplicity).</li>
              <li><strong>Perk Value:</strong> Prioritize lounges, credits, insurance? Premium cards offer most. If not essential, mid-tier suffices.</li>
              <li><strong>Fee Tolerance:</strong> Can credits/benefits offset the fee? Venture X has clear offset path; Sapphire Reserve needs more perk use. Mid-tier fees are lower.</li>
              <li><strong>Simplicity vs. Optimization:</strong> Prefer flat rewards (Venture) or maximizing via categories/portals (Sapphire, Citi)?</li>
            </ul>
          </section>

          <section className={styles.reviewSection}>
              <h2>VII. Final Thoughts</h2>
              <p>A no-foreign-transaction-fee credit card is essential for international travelers in 2025. It eliminates unnecessary costs on every overseas purchase.</p>
              <p>However, the best cards offer significant value beyond fee savings, including rewards, credits, lounge access, and insurance, making travel cheaper, more comfortable, and safer.</p>
              <p>Always perform due diligence. Offers and terms change; verify details directly with the issuer before applying. By matching your needs to the right card, you can travel with greater financial confidence and enjoy enhanced rewards and experiences in 2025.</p>
          </section>

        </article>
      </main> {/* Close main content container */}

       {/* Include Footer component */}
    </>
  );
}

export default NoFTFReviewPage;