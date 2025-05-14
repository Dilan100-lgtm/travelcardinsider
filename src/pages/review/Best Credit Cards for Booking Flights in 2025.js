import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/NoFTFCardsReview.module.css'; // Assuming a generic name for your review CSS module

// Import your existing Header and Footer components if available
// import Header from '../../components/Header'; // Adjust path if necessary
// import Footer from '../../components/Footer'; // Adjust path if necessary
// import StarRating from '../../components/StarRating'; // Adjust path if necessary

// Function to remove superscripts (®, ™, and trailing citation numbers)
const removeSuperscripts = (text) => {
  if (typeof text !== 'string') return text;
  // Remove common superscript symbols
  let cleanedText = text.replace(/®|™/g, '');
  // Remove trailing numbers that act as citations (e.g., "text.1", "text.22")
  // This regex looks for a word boundary, then digits, then a period or end of string.
  // It's a bit more specific to avoid removing numbers within text like "5x points".
  // For more complex cases or if numbers are embedded differently, this might need adjustment.
  cleanedText = cleanedText.replace(/(\w)\.(\d+)(\s|$|\.)/g, '$1$3'); // example.1 -> example
  cleanedText = cleanedText.replace(/\s(\d+)(\s|$|\.|,)/g, (match, p1, p2) => ` ${p2}`); // "Perks.2 " -> "Perks. "
  // Specific cleanup for dangling numbers at the end of sentences or phrases that were likely citations
  const commonCitationPattern = /\s+\d+$/;
  if (commonCitationPattern.test(cleanedText)) {
      cleanedText = cleanedText.replace(commonCitationPattern, '');
  }
  return cleanedText;
};


const cardData = [
  {
    id: 'chase-sapphire-reserve',
    name: 'Chase Sapphire Reserve',
    imageSrc: '/sapphire_reserve_card.png', // Replace with actual image path
    imageAlt: 'Chase Sapphire Reserve Card',
    ratingValue: 9.2, // Replace with actual rating
    ratingStars: 5, // Replace with actual rating
    applyLink: 'https://creditcards.chase.com/rewards-credit-cards/sapphire/reserve', // Replace with actual apply link
    ratesFeesLink: 'https://sites.chase.com/services/creatives/pricingandterms.html/content/dam/pricingandterms/LGC56007.html', // Replace with actual rates & fees link
    learnMoreLink: '/cards/chase-sapphire-reserve', // Replace with actual internal link
    annualFee: '$550',
    welcomeBonus: '60,000 points ($5k spend/3mo), worth $900 for travel.',
    flightBookingProwess: 'Earn 5x total points on flights via Chase Travel (after $300 annual travel spend), and 3x on other travel. Points are worth 50% more (1.5 cents each) redeemed for travel via Chase Travel. Transfer 1:1 to partners like United, Southwest, and British Airways.',
    travelerProtections: 'Coverage includes trip cancellation ($10k/traveler), baggage delay ($100/day), lost luggage ($3k), primary auto CDW ($75k), and travel accident ($1M).',
    flightFocusedPerks: 'Complimentary Priority Pass Select membership and access to Chase Sapphire Lounge by The Club locations. Flexible $300 Annual Travel Credit. Global Entry/TSA PreCheck/NEXUS credit (up to $120). No foreign transaction fees.',
    bottomLine: 'Ideal for frequent travelers maximizing the travel credit, lounge access, robust insurance, and Ultimate Rewards for flights.',
    ftf: 'None',
  },
  {
    id: 'amex-platinum',
    name: 'The Platinum Card from American Express',
    imageSrc: '/NUS000000237_480x304_straight_withname.avif', // Replace with actual image path
    imageAlt: 'The Platinum Card from American Express',
    ratingValue: 9.4, // Replace with actual rating
    ratingStars: 5, // Replace with actual rating
    applyLink: 'https://www.americanexpress.com/us/credit-cards/card/platinum/',
    ratesFeesLink: 'https://www.americanexpress.com/us/credit-cards/card-application/apply/prospect/terms/platinum-card/25330-10-0#FeeTable',
    learnMoreLink: '/cards/amex-platinum',
    annualFee: '$695',
    welcomeBonus: '80,000 points ($8k spend/6mo).',
    flightBookingProwess: 'Earn 5X Membership Rewards points on flights booked directly with airlines or through American Express Travel (up to $500,000/year). Points are valuable transferred to partners like Delta, British Airways, and Emirates for premium flights.',
    travelerProtections: 'Trip cancellation ($10k/trip), baggage insurance ($2k checked, $3k carry-on), trip delay ($500), secondary auto CDW ($75k) offer solid safeguards.',
    flightFocusedPerks: 'Unmatched access via The American Express Global Lounge Collection (Centurion Lounges, Priority Pass, Delta Sky Club when flying Delta). Annual $200 airline fee credit for incidentals. Global Entry or TSA PreCheck fee credit. CLEAR Plus credit. No foreign transaction fees.',
    bottomLine: 'Best for luxury travelers prioritizing extensive lounge access and utilizing the various statement credits to enhance their flight journeys.',
    ftf: 'None',
  },
  {
    id: 'capital-one-venture-x',
    name: 'Capital One Venture X Rewards Credit Card',
    imageSrc: '/venturex-cg-static-card-1000x630-2.avif',
    imageAlt: 'Capital One Venture X Rewards Credit Card',
    ratingValue: 9.0,
    ratingStars: 4.5,
    applyLink: 'https://www.capitalone.com/credit-cards/venture-x/',
    ratesFeesLink: 'https://www.capitalone.com/credit-cards/venture-x/',
    learnMoreLink: '/cards/capital-one-venture-x',
    annualFee: '$395',
    welcomeBonus: '75,000 bonus miles after spending $4,000 in 3 months, equating to $750 toward travel.',
    flightBookingProwess: 'Earn unlimited 2X miles on every purchase, boosted to 5X miles on flights when booked through Capital One Travel. Miles are generally valued at 1 cent each when redeemed for travel, usable for any flight. Transfer miles to over 15 travel loyalty programs like British Airways and Air Canada.',
    travelerProtections: 'Offers robust travel insurance benefits; includes cell phone protection up to $800. (Cardholders should consult the official guide for specifics on flight-related coverage).',
    flightFocusedPerks: 'Complimentary Priority Pass Select membership and unlimited access to Capital One Lounges. A $300 annual travel credit for bookings via Capital One Travel. Global Entry or TSA PreCheck credit. 10,000 bonus miles (equal to $100 toward travel) every anniversary. No foreign transaction fees.',
    bottomLine: 'Ideal for travelers seeking premium travel benefits like lounge access and valuable travel credits with a lower effective annual fee, enhancing overall travel value.',
    ftf: 'None',
  },
  {
    id: 'chase-sapphire-preferred',
    name: 'Chase Sapphire Preferred Card',
    imageSrc: '/sapphire_preferred_card.png',
    imageAlt: 'Chase Sapphire Preferred Card',
    ratingValue: 8.4,
    ratingStars: 4.5,
    applyLink: 'https://creditcards.chase.com/rewards-credit-cards/sapphire/preferred',
    ratesFeesLink: 'https://sites.chase.com/services/creatives/pricingandterms.html/content/dam/pricingandterms/LGC56014.html',
    learnMoreLink: '/cards/chase-sapphire-preferred',
    annualFee: '$95',
    welcomeBonus: 'An attractive 100,000 bonus points after spending $5,000 in 3 months, worth $1,250 toward travel via Chase Travel.',
    flightBookingProwess: 'Earn 5x total points on travel purchased through Chase Travel (excluding hotel purchases qualifying for the $50 hotel credit) and 2x points on other travel purchases. Points are worth 25% more (1.25 cents each) when redeemed for travel via Chase Travel. Features the same valuable 1:1 airline transfer partners as the Sapphire Reserve, such as United, Southwest, and British Airways.',
    travelerProtections: 'Includes trip cancellation/interruption up to $10,000 per traveler; baggage delay insurance up to $100 a day for 5 days; primary auto rental CDW up to $60,000; and trip delay reimbursement up to $500.',
    flightFocusedPerks: 'Provides a $50 Annual Chase Travel Hotel Credit. Each account anniversary, cardmembers earn a 10% points bonus on total purchases from the previous year. No foreign transaction fees. (Does not offer direct lounge access).',
    bottomLine: 'Excellent for travelers newer to rewards or preferring a lower fee while still gaining access to valuable point transfers for flights and good insurance.',
    ftf: 'None',
  },
  {
    id: 'delta-skymiles-reserve-amex',
    name: 'Delta SkyMiles Reserve American Express Card',
    imageSrc: '/NUS000000270_480x304_straight_withname.avif',
    imageAlt: 'Delta SkyMiles Reserve American Express Card',
    ratingValue: 8.8,
    ratingStars: 4.5,
    applyLink: 'https://www.americanexpress.com/us/credit-cards/card/delta-skymiles-reserve-american-express-card/',
    ratesFeesLink: 'https://www.americanexpress.com/us/credit-cards/card-application/apply/prospect/terms/delta-skymiles-reserve-american-express-card/25330-10-0#FeeTable',
    learnMoreLink: '/cards/delta-skymiles-reserve',
    annualFee: '$650',
    welcomeBonus: '70,000 Bonus Miles after spending $5,000 in 6 months.',
    flightBookingProwess: 'Earn 3X Miles on Delta purchases made directly with Delta. The "TakeOff 15" benefit allows Card Members to save 15% when using miles to book Award Travel on Delta flights for Delta loyalists.',
    travelerProtections: 'Includes trip cancellation and interruption insurance up to $10,000 per trip; trip delay insurance (6+ hours) up to $500; plus baggage insurance plan and car rental loss and damage insurance (verify specific coverage limits).',
    flightFocusedPerks: 'Complimentary access to Delta Sky Club locations (15 visits per year; unlimited after $75k spend) and The Centurion Lounge when purchasing a Delta flight with the card. First Checked Bag Free on Delta flights. 20% Back on In-Flight Purchases. Global Entry or TSA PreCheck fee credit. Annual Companion Certificate for flights. MQD Headstart & MQD Boost to help achieve Medallion Status faster. Priority Boarding. No foreign transaction fees.',
    bottomLine: 'Ideal for frequent Delta flyers who highly value Sky Club access, the annual companion certificate, and are pursuing Medallion status.',
    ftf: 'None',
  }
];

const comparisonData = [
  { name: 'Chase Sapphire Reserve', fee: '$550', bonus: '60,000 points ($5k spend/3mo)', directAirlineEarn: '3x points (after $300 travel credit)', portalEarn: '5x points (after $300 travel credit)', partners: 'United, Southwest, BA, Flying Blue, etc.', tripCancel: '$10,000/traveler, $20,000/trip', lostLuggage: '$3,000', lounge: 'Priority Pass Select, Chase Sapphire Lounges', credit: '$300 Annual Travel Credit', geTsa: 'Yes (up to $120)', ftf: '$0' },
  { name: 'The Platinum Card from American Express', fee: '$695', bonus: '80,000 points ($8k spend/6mo)', directAirlineEarn: '5x points (up to $500k/yr)', portalEarn: '5x points (AmexTravel.com)', partners: 'Delta, BA, Air Canada, Emirates, etc.', tripCancel: '$10,000/trip', lostLuggage: '$3,000 (carry-on), $2,000 (checked)', lounge: 'Amex Global Lounge Collection (Centurion, Priority Pass, etc.)', credit: '$200 Airline Fee Credit', geTsa: 'Yes (up to $120 GE / $85 TSA)', ftf: '$0' },
  { name: 'Capital One Venture X Rewards Credit Card', fee: '$395', bonus: '75,000 miles ($4k spend/3mo)', directAirlineEarn: '2x miles', portalEarn: '5x miles (Capital One Travel)', partners: 'BA, Air Canada, Flying Blue, Qantas, etc.', tripCancel: 'Verify Guide to Benefits', lostLuggage: 'Verify Guide to Benefits', lounge: 'Priority Pass Select, Capital One Lounges', credit: '$300 Annual Travel Credit (Capital One Travel)', geTsa: 'Yes (up to $120)', ftf: '$0' },
  { name: 'Chase Sapphire Preferred Card', fee: '$95', bonus: '100,000 points ($5k spend/3mo)', directAirlineEarn: '2x points', portalEarn: '5x points (Chase Travel)', partners: 'United, Southwest, BA, Flying Blue, etc.', tripCancel: '$10,000/traveler, $20,000/trip', lostLuggage: 'Verify Guide to Benefits', lounge: 'None', credit: '$50 Annual Hotel Credit (Chase Travel)', geTsa: 'No', ftf: '$0' },
  { name: 'Delta SkyMiles Reserve American Express Card', fee: '$650', bonus: '70,000 miles ($5k spend/6mo)', directAirlineEarn: '3x miles (on Delta purchases)', portalEarn: 'N/A (Direct Delta earning is primary)', partners: 'Airline Specific (Delta SkyMiles)', tripCancel: '$10,000/trip', lostLuggage: 'Verify Guide to Benefits', lounge: 'Delta Sky Club, Centurion (flying Delta)', credit: 'First Bag Free (Delta), 20% In-flight Discount', geTsa: 'Yes (up to $120 GE / $85 TSA)', ftf: '$0' },
];


function FlightBookingCardsReviewPage() {
  const pageTitle = "Best Credit Cards for Booking Flights in 2025: Points, Protections & Perks";
  const metaDescription = "Discover the top US credit cards for booking flights in 2025. Maximize points, enjoy travel protections, and unlock premium perks for your next journey.";
  const canonicalUrl = "https://www.travelcardinsider.com/reviews/best-flight-booking-cards-2025"; // Replace with your actual URL
  const heroImageSrc = '/pexels-railgunbreaker-32008325.webp'; // Replace with your actual hero image path
  const heroImageAlt = 'Traveler planning a trip with a laptop and credit card, with an airplane in the background';
  const siteName = "Your Awesome Travel Site"; // Replace with your site name

  return (
    <>
      <Head>
        <title>{`${pageTitle} | ${siteName}`}</title>
        <meta name="description" content={metaDescription} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={`https://www.travelcardinsider.com${heroImageSrc}`} /> {/* Ensure full URL for OG image */}
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content={siteName} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:image" content={`https://www.travelcardinsider.com${heroImageSrc}`} /> {/* Ensure full URL for Twitter image */}
        {/* <meta name="twitter:site" content="@yourtwitterhandle" /> Replace with your Twitter handle */}
        
        <meta name="geo.region" content="US" />
        <meta name="geo.placename" content="United States" />
        <meta name="language" content="en-US" />
        <meta name="distribution" content="US" />
        <link rel="alternate" href={canonicalUrl} hreflang="en-us" />

        {/* Preload fonts if you use them, similar to the example */}
        {/* <link rel="preload" href="/fonts/Roboto_Condensed-Regular.ttf" as="font" type="font/ttf" crossOrigin="anonymous" /> */}

        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Article",
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "${canonicalUrl}"
              },
              "headline": "${pageTitle}",
              "description": "${metaDescription}",
              "image": "${`https://www.travelcardinsider.com${heroImageSrc}`}",
              "author": {
                "@type": "Organization",
                "name": "${siteName}" 
              },
              "publisher": {
                "@type": "Organization",
                "name": "${siteName}",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://www.travelcardinsider.com/images/logo.png" // Replace with your logo URL
                }
              },
              "datePublished": "2025-01-15", // Update with actual publication date
              "dateModified": "${new Date().toISOString().split('T')[0]}" 
            }
          `}
        </script>
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "ItemList",
              "name": "Top Credit Cards for Booking Flights 2025",
              "description": "A list of the top credit cards recommended for booking flights in 2025.",
              "itemListElement": [
                ${cardData.map((card, index) => `{
                  "@type": "ListItem",
                  "position": ${index + 1},
                  "item": {
                    "@type": "Product",
                    "name": "${removeSuperscripts(card.name)}",
                    "description": "${removeSuperscripts(card.bottomLine)}",
                    "url": "https://www.travelcardinsider.com${card.learnMoreLink}", // Replace with actual card page URL
                    "image": "https://www.travelcardinsider.com${card.imageSrc}", // Replace with actual card image URL
                    "offers": {
                      "@type": "Offer",
                      "priceCurrency": "USD",
                      "price": "${card.annualFee.replace('$', '')}" // Extract numeric value
                    },
                    "brand": {
                        "@type": "Brand",
                        "name": "${removeSuperscripts(card.name).split(' ')[0]}" // Basic brand extraction
                    }
                  }
                }`).join(',\n')}
              ]
            }
          `}
        </script>
      </Head>

      {/* <Header /> */}

      <main className={styles.reviewContainer}>
        <header className={styles.reviewHeader}>
          <h1>{removeSuperscripts("Best Credit Cards for Booking Flights in 2025: Points, Protections & Perks")}</h1>
        </header>

        <div className={styles.heroSection}>
          <Image
            src={heroImageSrc}
            alt={heroImageAlt}
            layout="responsive"
            width={900}
            height={400}
            objectFit="cover"
            priority
            className={styles.heroImage}
          />
        </div>
        
        <p className={styles.disclaimer}>
          Disclaimer: Information is based on data available as of early 2025 and is subject to change. Offers and terms may vary. Please verify all details directly with the card issuer before applying. This content may contain affiliate links.
        </p>

        <article>
          <section className={styles.reviewSection}>
            <h2>{removeSuperscripts("1. Taking Flight in 2025 – Is Your Wallet Ready?")}</h2>
            <p>{removeSuperscripts("The allure of 2025 travel, from vibrant cities to tranquil escapes, necessitates careful planning. Beyond destinations, a key element is your credit card, which can be a strategic tool for booking flights. The right card helps manage travel finances, unlocking rewards for future trips and providing a safety net against unforeseen issues. This guide focuses on travel rewards credit cards for US travelers in 2025, dissecting how to maximize Points for affordable flights or upgrades, scrutinize Protections against disruptions, and uncover Perks enhancing the travel experience. The goal is to empower travelers to select a card aligning with spending habits and travel ambitions, ensuring intelligent and efficient funding and protection. As travelers seek value and security, understanding these financial instruments, especially their protective benefits like travel insurance, is crucial for flying smarter and with greater confidence.")}</p>
          </section>

          <section className={styles.reviewSection}>
            <h2>{removeSuperscripts("2. Decoding the Essentials: What Makes a Great Flight Booking Card?")}</h2>
            <p>{removeSuperscripts("Choosing the right credit card for booking flights involves looking beyond flashy sign-up bonuses. It requires a deeper understanding of how different card features translate into real-world value, from earning rewards efficiently to safeguarding your journey and enhancing your comfort.")}</p>
            
            <h3 className={styles.subHeading}>{removeSuperscripts("Points Power – Fueling Your Next Adventure")}</h3>
            <p>{removeSuperscripts("A travel rewards card's core is accumulating points/miles for future travel. For flights, this \"points power\" includes:")}</p>
            <ul>
              <li><strong>{removeSuperscripts("Earning Rates:")}</strong> {removeSuperscripts("Cards offer base rates and accelerated rates for categories like flights (2x-5x points/dollar). Some offer higher rates for booking directly with airlines, while others incentivize using proprietary travel portals (Chase Travel, Amex Travel, etc.), which can yield 5x-10x points. This presents a choice: maximize points via a portal or book direct for potentially simpler changes or better airline status recognition.")}</li>
              <li><strong>{removeSuperscripts("Airline Transfer Partners:")}</strong> {removeSuperscripts("Transferring points to airline loyalty programs (often 1:1) can unlock exceptional value, especially for premium international tickets. Access to major alliances (Star Alliance, oneworld, SkyTeam) is common.")}</li>
              <li><strong>{removeSuperscripts("Redemption Values:")}</strong> {removeSuperscripts("Points can be redeemed for statement credits, gift cards, or travel. Value varies; some Chase cards offer 25%-50% bonuses when redeeming through Chase Travel, making points worth 1.25-1.5 cents each.")}</li>
            </ul>

            <h3 className={styles.subHeading}>{removeSuperscripts("Peace of Mind Protections – Your Travel Safety Net")}</h3>
            <p>{removeSuperscripts("Credit card travel insurance provides a vital safety net, with premium cards typically offering more comprehensive coverage.")}</p>
            <ul>
              <li><strong>{removeSuperscripts("Trip Cancellation/Interruption Insurance:")}</strong> {removeSuperscripts("Reimburses non-refundable expenses (airfare, hotels) if a trip is canceled/cut short due to covered reasons like sickness or weather, often up to $10,000 per trip.")}</li>
              <li><strong>{removeSuperscripts("Baggage Delay/Loss Insurance:")}</strong> {removeSuperscripts("Reimburses essential purchases for delayed baggage (e.g., $100/day) or covers lost/damaged luggage up to limits like $3,000.")}</li>
              <li><strong>{removeSuperscripts("Common Carrier Travel Accident Insurance:")}</strong> {removeSuperscripts("Provides coverage for severe incidents during travel on common carriers, sometimes up to $1,000,000.")}</li>
              <li><strong>{removeSuperscripts("Auto Rental Collision Damage Waiver (CDW):")}</strong> {removeSuperscripts("Covers theft/damage to rental vehicles, with primary or secondary coverage up to $75,000.")}</li>
            </ul>

            <h3 className={styles.subHeading}>{removeSuperscripts("Premium Perks for the Savvy Flyer – Elevating Your Journey")}</h3>
            <p>{removeSuperscripts("Travel cards offer perks to enhance air travel.")}</p>
            <ul>
              <li><strong>{removeSuperscripts("Airport Lounge Access:")}</strong> {removeSuperscripts("A hallmark of premium cards, via programs like Priority Pass Select or exclusive lounges (Amex Centurion, Capital One Lounges, airline clubs).")}</li>
              <li><strong>{removeSuperscripts("Airline Fee Credits:")}</strong> {removeSuperscripts("Annual credits for incidental fees (checked bags, seat selection).")}</li>
              <li><strong>{removeSuperscripts("Global Entry/TSA PreCheck Credits:")}</strong> {removeSuperscripts("Statement credits for application fees.")}</li>
              <li><strong>{removeSuperscripts("No Foreign Transaction Fees:")}</strong> {removeSuperscripts("Essential for international travel, avoiding ~3% charges.")}</li>
              <li><strong>{removeSuperscripts("Other Benefits:")}</strong> {removeSuperscripts("Priority boarding, free checked bags (especially on co-branded cards), in-flight discounts. Effective premium cards bundle various statement credits, potentially offsetting the annual fee through \"benefit stacking.\"")}</li>
            </ul>
          </section>

          <section className={styles.reviewSection}>
            <h2>{removeSuperscripts("3. The 2025 Flight Path: Top Contenders for Your Wallet")}</h2>
            <p>{removeSuperscripts("Navigating the skies of 2025 requires a credit card that not only earns valuable rewards but also provides robust protections and enhances the journey. Here are some of the top contenders for US travelers focused on booking flights.")}</p>

            {cardData.map((card) => (
              <div key={card.id} className={`${styles.cardDetailSection} ${styles.cardSeparator}`}>
                <div className={styles.cardHeader}>
                   <div className={styles.cardImageContainer}>
                     <Image
                       src={card.imageSrc}
                       alt={card.imageAlt}
                       width={150} // Adjust as per your CSS
                       height={95}  // Adjust as per your CSS
                       objectFit="contain"
                     />
                   </div>
                   <div className={styles.cardTitleRating}>
                     <h3>{removeSuperscripts(card.name)}</h3>
                     {/* Conditionally render StarRating if you have rating values 
                     {card.ratingStars > 0 && (
                        <div className={styles.ratingContainer}>
                        <StarRating rating={card.ratingStars} /> 
                        <span className={styles.ratingValue}>Rating: {card.ratingValue.toFixed(1)}/10</span>
                        </div>
                     )}
                     */}
                   </div>
                 </div>

                <ul>
                  <li><strong>Annual Fee:</strong> {removeSuperscripts(card.annualFee)}</li>
                  <li><strong>Welcome Bonus:</strong> {removeSuperscripts(card.welcomeBonus)}</li>
                  <li><strong>Flight Booking Prowess:</strong> {removeSuperscripts(card.flightBookingProwess)}</li>
                  <li><strong>Traveler Protections:</strong> {removeSuperscripts(card.travelerProtections)}</li>
                  <li><strong>Flight-Focused Perks:</strong> {removeSuperscripts(card.flightFocusedPerks)}</li>
                  <li><strong>The Bottom Line:</strong> {removeSuperscripts(card.bottomLine)}</li>
                  <li><strong>Foreign Transaction Fee:</strong> {card.ftf}</li>
                </ul>

                <div className={styles.cardButtonsContainer}>
                    <a
                        href={card.applyLink}
                        target="_blank"
                        rel="noopener noreferrer nofollow" // Added nofollow for external links
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
            <h2>{removeSuperscripts("4. Head-to-Head: Choosing Your Co-Pilot for 2025")}</h2>
            <p>{removeSuperscripts("A direct comparison clarifies which card best suits individual travel and financial styles. The table below summarizes key features for booking flights in 2025.")}</p>
            
            <h3 className={styles.subHeading}>{removeSuperscripts("2025 Flight Booking Card Showdown")}</h3>
            <div className={styles.tableContainer}>
              <table className={styles.comparisonTable}>
                 <thead>
                    <tr>
                    <th>{removeSuperscripts("Feature")}</th>
                    <th>{removeSuperscripts("Chase Sapphire Reserve")}</th>
                    <th>{removeSuperscripts("The Platinum Card from American Express")}</th>
                    <th>{removeSuperscripts("Capital One Venture X Rewards Credit Card")}</th>
                    <th>{removeSuperscripts("Chase Sapphire Preferred Card")}</th>
                    <th>{removeSuperscripts("Delta SkyMiles Reserve American Express Card")}</th>
                    </tr>
                </thead>
                <tbody>
                  <tr><td>Annual Fee</td>{comparisonData.map(c => <td key={`${c.name}-fee`}>{removeSuperscripts(c.fee)}</td>)}</tr>
                  <tr><td>Current Welcome Bonus</td>{comparisonData.map(c => <td key={`${c.name}-bonus`}>{removeSuperscripts(c.bonus)}</td>)}</tr>
                  <tr><td>Flight Earning (Direct Airline)</td>{comparisonData.map(c => <td key={`${c.name}-direct`}>{removeSuperscripts(c.directAirlineEarn)}</td>)}</tr>
                  <tr><td>Flight Earning (Via Card Portal)</td>{comparisonData.map(c => <td key={`${c.name}-portal`}>{removeSuperscripts(c.portalEarn)}</td>)}</tr>
                  <tr><td>Key Airline Transfer Partners</td>{comparisonData.map(c => <td key={`${c.name}-partners`}>{removeSuperscripts(c.partners)}</td>)}</tr>
                  <tr><td>Trip Cancellation (Max $/Trip)</td>{comparisonData.map(c => <td key={`${c.name}-trip`}>{removeSuperscripts(c.tripCancel)}</td>)}</tr>
                  <tr><td>Lost Luggage (Max $/Person)</td>{comparisonData.map(c => <td key={`${c.name}-luggage`}>{removeSuperscripts(c.lostLuggage)}</td>)}</tr>
                  <tr><td>Airport Lounge Access (Primary)</td>{comparisonData.map(c => <td key={`${c.name}-lounge`}>{removeSuperscripts(c.lounge)}</td>)}</tr>
                  <tr><td>Airline Fee/Travel Credit</td>{comparisonData.map(c => <td key={`${c.name}-credit`}>{removeSuperscripts(c.credit)}</td>)}</tr>
                  <tr><td>Global Entry/TSA PreCheck Credit</td>{comparisonData.map(c => <td key={`${c.name}-ge`}>{removeSuperscripts(c.geTsa)}</td>)}</tr>
                  <tr><td>Foreign Transaction Fee</td>{comparisonData.map(c => <td key={`${c.name}-ftf`}>{removeSuperscripts(c.ftf)}</td>)}</tr>
                </tbody>
              </table>
            </div>
            <p className={styles.tableNote}>{removeSuperscripts("(Data as of early 2025, based on available research. Always verify current terms and offers with the issuer.)")}</p>

            <h3 className={styles.subHeading}>{removeSuperscripts("Discussion on Traveler Profiles & Priorities:")}</h3>
            <p>{removeSuperscripts("The \"best\" card depends on individual priorities and how one values different flight-related benefits.")}</p>
            <ul>
              <li><strong>{removeSuperscripts("Luxury Seekers:")}</strong> {removeSuperscripts("The Platinum Card from American Express is a natural fit, with its unparalleled lounge access (including Centurion Lounges), Fine Hotels + Resorts benefits, and statement credits for airline fees and Uber, which enhance travel.")}</li>
              <li><strong>{removeSuperscripts("Points Maximizers/Strategists:")}</strong> {removeSuperscripts("Chase Sapphire Reserve or Preferred excel with valuable Ultimate Rewards transfers to high-value airline partners and portal bonuses for flights. The choice often hinges on annual fee tolerance and desire for premium perks like the Reserve's lounge access.")}</li>
              <li><strong>{removeSuperscripts("Value-Conscious Premium Travelers:")}</strong> {removeSuperscripts("Capital One Venture X provides premium benefits like lounge access and substantial travel credits with a low effective annual fee, for savvy flyers.")}</li>
              <li><strong>{removeSuperscripts("Airline Loyalists:")}</strong> {removeSuperscripts("For those predominantly flying one airline, a co-branded card like the Delta SkyMiles Reserve offers unmatched value with airline-specific perks like lounge access, companion tickets, and status boosts. Similar top-tier cards exist for United (e.g., United Club Infinite Card).")}</li>
              <li><strong>{removeSuperscripts("Occasional Travelers (Solid Value):")}</strong> {removeSuperscripts("Chase Sapphire Preferred or Citi Strata Premier Card offer good rewards and protections for a modest fee, ideal for good flight value.")}</li>
            </ul>
            <p>{removeSuperscripts("Calculating the \"net annual fee\" by subtracting easily usable credits is crucial for assessing a premium card's true annual cost.")}</p>
          </section>

          <section className={styles.reviewSection}>
            <h2>{removeSuperscripts("5. Final Approach: Landing the Perfect Card for Your 2025 Travels")}</h2>
            <p>{removeSuperscripts("Choosing the ideal credit card for 2025 flights is personal, influencing travel. Top cards offer unique blends of points, protections, and perks. Match to your needs.")}</p>
            <p>{removeSuperscripts("To land the perfect card:")}</p>
            <ul>
              <li><strong>{removeSuperscripts("Assess Your Travel Style:")}</strong> {removeSuperscripts("Consider flight frequency, domestic/international focus, airline loyalty, and preferred cabin class.")}</li>
              <li><strong>{removeSuperscripts("Analyze Your Spending:")}</strong> {removeSuperscripts("Align your primary spending categories with a card’s bonus earning rates to maximize rewards.")}</li>
              <li><strong>{removeSuperscripts("Evaluate Perk Preferences:")}</strong> {removeSuperscripts("Determine which perks like lounge access, free checked bags, or Global Entry/TSA PreCheck credits enhance travel.")}</li>
              <li><strong>{removeSuperscripts("Calculate \"Net Annual Fee\":")}</strong> {removeSuperscripts("For premium cards, subtract the value of statement credits you'll realistically use from the annual fee to find its true cost.")}</li>
              <li><strong>{removeSuperscripts("Look Beyond Welcome Bonuses:")}</strong> {removeSuperscripts("Prioritize long-term value from ongoing rewards, perks, and protections relative to the annual fee, over the initial bonus.")}</li>
            </ul>
            <p>{removeSuperscripts("The credit card landscape evolves; always verify current terms with issuers. This knowledge empowers US travelers to make informed choices for rewarding and secure 2025 travel. May your journeys be enriching and financial strategies savvy.")}</p>
          </section>
        </article>
      </main>

      {/* <Footer /> */}
    </>
  );
}

export default FlightBookingCardsReviewPage;