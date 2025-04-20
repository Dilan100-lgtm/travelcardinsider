// File: pages/index.js

import React, { useState } from 'react'; // Added useState
import Head from "next/head";
import Image from 'next/image';
import Link from 'next/link';
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useCreditCards } from '@/hooks/useCreditCards';
import CardComparison from '@/components/CardComparison';


export default function HomePage() {
  // --- Comparison Logic Integration ---
  const { cards } = useCreditCards(); // Fetch card data using the hook
  const [selectedCards, setSelectedCards] = useState([]); // State for selected cards

  const handleCardSelect = (card) => {
    // Logic to handle selecting/deselecting cards (up to 3)
    if (selectedCards.some(selected => selected['Card Name'] === card['Card Name'])) { // Compare by a unique identifier like 'Card Name'
      setSelectedCards(selectedCards.filter((c) => c['Card Name'] !== card['Card Name']));
    } else if (selectedCards.length < 3) {
      setSelectedCards([...selectedCards, card]);
    }
    // Optional: Add feedback if trying to select more than 3
    else {
       console.log("You can only compare up to 3 cards at a time.");
       // Or display a user-friendly message
    }
  };
  // --- End Comparison Logic Integration ---

  return (
    <>
      <Head>
        {/* Keep all your existing Head content here... */}
        <title>TravelCardInsider - Best Travel Credit Cards 2025</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Compare the best travel credit cards of 2025. Find top rewards, travel perks, lounge access, and sign-up bonuses to maximize your trips."
        />
        <link
          rel="preload"
          as="image"
          href="/AdobeStock_299190080_result.webp"
          type="image/webp"
        />
        <link
          rel="preload"
          as="image"
          href="/sapphire_preferred_card.png"
          type="image/png"
        />
        <link rel="canonical" href="https://www.travelcardinsider.com/" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta property="og:title" content="Best Travel Credit Cards 2025 | TravelCardInsider" />
        <meta property="og:description" content="Compare the best travel credit cards of 2025..." />
        <meta property="og:image" content="https://www.travelcardinsider.com/hero-thumbnail.jpg" />
        <meta property="og:url" content="https://www.travelcardinsider.com/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Best Travel Credit Cards 2025" />
        <meta name="twitter:description" content="Compare travel rewards and lounge cards." />
        <meta name="twitter:image" content="https://www.travelcardinsider.com/hero-thumbnail.jpg" />
        <meta name="geo.region" content="US" />
        <meta name="geo.placename" content="United States" />
        <meta name="language" content="en-US" />
        <meta name="distribution" content="US" />
        <link rel="alternate" href="https://www.travelcardinsider.com" hreflang="en-us" />
        <link rel="preload" href="/fonts/Roboto_Condensed-Regular.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/Roboto_Condensed-bold.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/playfair-display-regular.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/playfair-display-bold.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({ /* Keep your existing LD+JSON schema here */ })
        }} />
      </Head>

      <Header />

      <main>
        {/* Section for Hero Background Image */}
        <section id="product-overview" aria-labelledby="hero-heading">
          <Image
            src="/AdobeStock_299190080_result.webp"
            alt="A scenic travel background representing adventure"
            width={1920}
            height={1080}
            priority
            placeholder="blur"
            className="hero-image"
          />
        </section>

        {/* Hero Text Section(s) */}
        <section className="hero">
          <div className="container">
            <h1 id="hero-heading">Unlock the Best Travel Credit Cards for 2025</h1>
            <p>
              Compare top travel credit cards and start earning rewards for
              your next adventure.
            </p>
            <a href="#compare" className="cta-button">
              Compare Now
            </a>
          </div>

          <div className="container">
            <h2>Calculate Your Travel Rewards</h2>
            <p>
              Enter your monthly spending to see how many points you can earn
              with top travel credit cards.
            </p>
             <a href="#Calculate" className="cta-button" aria-label="Calculate potential travel rewards">
               Calculate
             </a>
           </div>

           <div className="container">
             <h2>Find Best Travel Credit Cards for You</h2>
             <p>
               Find the perfect travel credit card tailored to your spending
               habits and travel goals.
             </p>
             <a href="#Find" className="cta-button" aria-label="Find recommended travel credit cards">
               Find
             </a>
           </div>
        </section>

        {/* Featured Cards Section */}
        <section id="featured-cards" aria-labelledby="featured-cards-heading">
          <h2 id="featured-cards-heading" className="H2_featured-cards">Top Travel Credit Cards</h2>
           <div className="card-grid">
             {/* Keep your existing featured card divs here... */}
             {/* Card 1 */}
             <div className="featured-card">
               <Image
                 className="featured-card__image"
                 src="/sapphire_preferred_card.png"
                 alt="Chase Sapphire Preferred Card shown on a blue background"
                 width={400}
                 height={250}
                 priority={true} // Changed from loading="lazy" if it's often above the fold
               />
               <div className="featured-card__description">
                 <h3>Chase Sapphire Preferred</h3>
                 <p>
                   Earn 60,000 points after spending $4,000 in the first 3
                   months. (Keep updated!)
                 </p>
                 <Link href="/reviews/chase-sapphire-preferred" className="cta-button">
                    Learn More
                 </Link>
                 <a href="https://www.chase.com/apply?partner=YOUR_AFFILIATE_ID" className="Apply-button" target="_blank" rel="noopener sponsored">
                   Apply Now
                 </a>
               </div>
             </div>
             {/* Card 2 */}
             <div className="featured-card">
               <Image
                 className="featured-card__image"
                 src="/ntb-amex-platinum-card.png"
                 alt="American Express Platinum Card on gradient background"
                 width={400}
                 height={250}
                 loading="lazy"
               />
               <div className="featured-card__description">
                 <h3>Amex Platinum</h3>
                 <p>
                   Enjoy 5x points on flights and luxury lounge access
                   worldwide. (Keep updated!)
                 </p>
                 <Link href="/reviews/amex-platinum" className="cta-button">
                    Learn More
                 </Link>
                 <a href="https://www.americanexpress.com/apply?partner=YOUR_AFFILIATE_ID" className="Apply-button" target="_blank" rel="noopener sponsored">
                   Apply Now
                 </a>
               </div>
             </div>
             {/* Card 3 */}
              <div className="featured-card">
                <Image
                  className="featured-card__image"
                  src="/venturex-cg-static-card-1000x630-2.avif"
                  alt="Capital One Venture X card with abstract background"
                  width={400}
                  height={252} // Adjusted height for 1000x630 aspect ratio
                  loading="lazy"
                />
                <div className="featured-card__description">
                  <h3>Capital One Venture X</h3>
                  <p>
                    Earn unlimited 2x miles and receive a $300 travel credit
                    annually. (Keep updated!)
                  </p>
                  <Link href="/reviews/capital-one-venture-x" className="cta-button">
                     Learn More
                  </Link>
                  <a href="https://www.capitalone.com/apply?partner=YOUR_AFFILIATE_ID" className="Apply-button" target="_blank" rel="noopener sponsored">
                    Apply Now
                  </a>
                </div>
              </div>
           </div> {/* End of .card-grid */}
         </section>


        {/* Comparison Tool - REPLACED with CardComparison component */}
        <section id="compare" className="comparison" aria-labelledby="comparison-heading">
          <div className="container">
            <h2 id="comparison-heading" className="H2_comparison">Compare Travel Credit Cards</h2>

            {/* --- Integrated Comparison Component --- */}
            <CardComparison
              cards={cards} // Pass the fetched cards data
              selectedCards={selectedCards} // Pass the current selection
              onCardSelect={handleCardSelect} // Pass the handler function
            />
            {/* --- End Integrated Comparison Component --- */}

          </div>
        </section>

        {/* Reviews Section */}
        <section className="reviews-container" aria-labelledby="reviews-heading">
          <h2 id="reviews-heading">Top Credit Card Reviews & News (2025)</h2>
          <div className="reviews-grid">
            {/* Keep your existing reviews mapping logic here... */}
             {[
                 { img: "/AdobeStock_560041735_result.webp", alt: "Credit cards fanned out on desk", title: "Top New Travel Credit Card Offers of 2025", desc: "Breaking news on the latest card launches and exclusive sign-up bonuses.", link: "/review/top-new-travel-credit-card-offers-2025", },
                 { img: "/AdobeStock_758160258_result.webp", alt: "Traveler relaxing in airport lounge chair", title: "VIP Airport Lounge Access in 2025", desc: "How to get premium perks and comfort while traveling.", link: "/review/The-Ultimate-Guide-to-Lounge-Access-in-2025-How-to-Get-VIP-Treatment-at-Airports", },
                 { img: "/AdobeStock_947404358_result.webp", alt: "Family with luggage smiling at airport gate", title: "5 Family-Friendly Travel Cards for 2025", desc: "Kid-friendly perks and money-saving benefits for your family vacations.", link: "/review/Top-5-Family-Friendly-Travel-Cards-for-2025-Maximize-Points-&-Perks-with-Kids-in-Tow", },
                 { img: "/AdobeStock_964630446_result.webp", alt: "Upward trending graph over credit report", title: "Boost Your Credit Score for Premium Cards", desc: "Actionable tips to qualify for the best travel rewards cards.", link: "/review/How-to-Improve-Your-Credit-Score-Fast-for-Premium-Travel-Cards", },
                 { img: "/alex-bertha-Jyg7xHRmXiU-unsplash (1).jpg", alt: "Airplane window view of clouds and wing", title: "Redeem for Luxury Travel on a Budget", desc: "Stretch your points and miles for a premium travel experience.", link: "/review/2025-Points-&-Miles-Trends-Best-Ways-to-Redeem-for-Luxury-Travel-on-a-Budget", },
                 { img: "/AdobeStock_265601656_result.webp", alt: "Magnifying glass over credit card details", title: "Secret Travel Card Benefits", desc: "Little-known perks you might already have but never used.", link: "/review/Hidden-Perks-Secret-Travel-Card-Benefits-You-Probably-Didnt-Know-About-in-2025", },
                 { img: "/AdobeStock_446734479.webp", alt: "Wallet with several credit cards, zero dollar bill shown", title: "The Best No Annual Fee Travel Cards", desc: "Earn rewards without worrying about recurring charges.", link: "/review/The-Best-Travel-Cards-with-No-Annual-Fee-Get-Big-Rewards-for-Free", },
                 { img: "/AdobeStock_241382254_result.webp", alt: "Scale weighing money against credit card perks", title: "Is a $500+ Annual Fee Worth It?", desc: "A cost-benefit breakdown of premium travel credit cards.", link: "/review/Premium-vs-Budget-Travel-Cards-Is-Paying-a-$500+Annual-Fee-Really-Worth-It", },
               ].map((review, index) => (
                 <div className="card" key={review.link || index}>
                   <Image
                     className="review_img"
                     src={review.img}
                     alt={review.alt}
                     width={500}
                     height={300}
                     loading="lazy"
                     objectFit="cover" // Consider if this is the desired behavior
                   />
                   <div className="card-content">
                     <h3>
                       {review.link ? (
                         <Link href={review.link}>{review.title}</Link>
                       ) : (
                         review.title
                       )}
                     </h3>
                     <p>{review.desc}</p>
                     {review.link && (
                       <Link href={review.link} className="cta-button">
                         Read Review
                       </Link>
                     )}
                   </div>
                 </div>
               ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}