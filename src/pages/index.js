// File: src/pages/index.js
// Updated ratings scale, added premium SVG stars, ensured description alignment setup.

import React from 'react';
import Head from "next/head";
import Image from 'next/image';
import Link from 'next/link';
// Import SVG star icons from react-icons
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

 import { getFeaturedNews } from '@/utils/newsUtils'; // Import for featured news
 import NewsCard from '@/components/NewsCard'; // Import the NewsCard component


import { getFeaturedReviews } from '@/utils/getAllReviews'; // Import the data fetching function


// --- Helper Function to Render Premium SVG Stars (Handles 10-point scale) ---
function RenderStars({ ratingOutOf10, maxStars = 5 }) {
  // Normalize the 10-point rating to a 5-star scale
  const normalizedRating = ratingOutOf10 / 2;
  const stars = [];

  for (let i = 1; i <= maxStars; i++) {
    if (normalizedRating >= i) {
      // Full star
      stars.push(<FaStar key={`star-${i}`} className="star filled" aria-hidden="true" />);
    } else if (normalizedRating >= i - 0.5) {
      // Half star
      stars.push(<FaStarHalfAlt key={`star-${i}`} className="star filled half" aria-hidden="true" />);
    } else {
      // Empty star
      stars.push(<FaRegStar key={`star-${i}`} className="star empty" aria-hidden="true" />);
    }
  }
  // Add screen reader text for accessibility
  return (
    <>
      {stars}
      <span className="sr-only">Rating: {ratingOutOf10} out of 10</span>
    </>
  );
}
// --- End Helper Function ---

// Updated component definition to accept props
export default function HomePage({ featuredReviews, latestNews }) {

  // --- Define featured card data including ratings (OUT OF 10) ---
  // Example: Doubled the previous ratings (4.8*2=9.6, 4.6*2=9.2, 4.7*2=9.4)
  const featuredCardsData = [
    {
      slug: "chase-sapphire-preferred",
      title: "Chase Sapphire Preferred®",
      description: "Earn 60,000 points after spending $4,000 in the first 3 months.* A top choice for travel rewards.", // Example slight change for alignment demo
      imageSrc: "/sapphire_preferred_card.png",
      imageAlt: "Chase Sapphire Preferred Card",
      imageWidth: 400,
      imageHeight: 250,
      applyUrl: "https://www.chase.com/apply?partner=YOUR_AFFILIATE_ID",
      rating: 8.4, // Rating out of 10
      priority: true,
    },
    {
      slug: "amex-platinum",
      title: "The Platinum Card® from American Express",
      description: "Enjoy 5x points on flights & hotels booked via Amex Travel, plus luxury lounge access worldwide.*",
      imageSrc: "/ntb-amex-platinum-card.png",
      imageAlt: "American Express Platinum Card",
      imageWidth: 400,
      imageHeight: 250,
      applyUrl: "https://www.americanexpress.com/apply?partner=YOUR_AFFILIATE_ID",
      rating: 9.4, // Rating out of 10
      priority: false,
    },
    {
      slug: "capital-one-venture-x",
      title: "Capital One Venture X",
      description: "Earn unlimited 2x miles and receive a $300 travel credit annually via Capital One Travel portal.*",
      imageSrc: "/venturex-cg-static-card-1000x630-2.avif",
      imageAlt: "Capital One Venture X Card",
      imageWidth: 400,
      imageHeight: 252,
      applyUrl: "https://www.capitalone.com/credit-cards/venture-x/",
      rating: 9.0, // Rating out of 10
      priority: false,
    },
  ];
  // --- End featured card data ---


  return (
    <>
      <Head>
        {/* --- Keep all existing Head content --- */}
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
        <link rel="preload" href="/fonts/Roboto_Condensed-Bold.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/PlayfairDisplay-Regular.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/Playfair-Display-Bold.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />

        {/* Screen reader only class */}
        <style>{`.sr-only { position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0, 0, 0, 0); white-space: nowrap; border-width: 0; }`}</style>

        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              // --- Keep your entire existing LD+JSON schema here, ENSURE ratingValue reflects 10-point scale if used by schema ---
               {
                 "@type": "WebSite",
                 "@id": "https://www.travelcardinsider.com/#website",
                 // ... rest of schema
               },
               {
                 "@type": "Organization",
                 "@id": "https://www.travelcardinsider.com/#organization",
                 // ... rest of schema
               },
               {
                 "@type": "WebPage",
                 "@id": "https://www.travelcardinsider.com/#webpage",
                 // ... rest of schema
               },
               {
                 "@type": "Product",
                 "@id": "https://www.travelcardinsider.com/#chaseSapphirePreferred",
                 "name": "Chase Sapphire Preferred® Card",
                 "image": "https://www.travelcardinsider.com/sapphire_preferred_card.png",
                 "description": "Popular travel rewards card known for valuable points on travel & dining. Offers 60,000 bonus points after meeting spending requirements. $95 annual fee.",
                 "brand": { "@type": "Brand", "name": "Chase" },
                 "sku": "CSP001",
                 "mpn": "CSP2025",
                 "aggregateRating": {
                   "@type": "AggregateRating",
                   "ratingValue": "9.6", // RATING OUT OF 10
                   "bestRating": "10",   // Specify scale max
                   "reviewCount": "250"
                 },
                  // ... rest of schema
               },
               {
                 "@type": "Product",
                 "@id": "https://www.travelcardinsider.com/#amexPlatinum",
                 "name": "The Platinum Card® from American Express",
                  // ... other properties
                 "aggregateRating": {
                   "@type": "AggregateRating",
                   "ratingValue": "9.2", // RATING OUT OF 10
                   "bestRating": "10",
                   "reviewCount": "180"
                 },
                  // ... rest of schema
               },
               {
                 "@type": "Product",
                 "@id": "https://www.travelcardinsider.com/#ventureX",
                 "name": "Capital One Venture X Rewards Credit Card",
                  // ... other properties
                 "aggregateRating": {
                   "@type": "AggregateRating",
                   "ratingValue": "9.4", // RATING OUT OF 10
                   "bestRating": "10",
                   "reviewCount": "95"
                 },
                  // ... rest of schema
               }
              // --- End LD+JSON schema ---
            ]
          })
        }} />
        {/* --- End of Head content --- */}
      </Head>

      {/* Header Component (Unchanged) */}
      

      <main className="main-content">
        {/* Hero Section Wrapper (Unchanged) */}
        <section className="hero-section" aria-labelledby="hero-heading">
            {/* ... hero content ... */}
             <div className="hero-background">
                <Image
                src="/AdobeStock_299190080_result.webp"
                alt="Scenic travel background representing adventure"
                layout="fill"
                objectFit="cover"
                quality={85}
                priority
                placeholder="blur"
                blurDataURL="/AdobeStock_299190080_result_low_quality.webp"
                />
                <div className="hero-overlay"></div>
            </div>
            <div className="hero-content-container container">
                <h1 id="hero-heading">Unlock the Best Travel Credit Cards for 2025</h1>
                <p className="hero-subheading">
                Compare top travel rewards, find cards tailored to your spending,
                and calculate potential earnings for your next adventure.
                </p>
                <div className="hero-actions">
                <Link href="/rewards-compare" className="cta-button hero-cta">
                    Compare Cards Now
                </Link>
                <Link href="/rewards" className="cta-button hero-cta secondary-cta">
                    Rewards Calculator
                </Link>
                <Link href="/card-finder" className="cta-button hero-cta secondary-cta">
                    Find Your Card
                </Link>
                </div>
            </div>
        </section>

        {/* Featured Cards Section -- MODIFIED WITH NEW STARS & RATINGS */}
        <section id="featured-cards" className="content-section" aria-labelledby="featured-cards-heading">
          <div className="container">
            <h2 id="featured-cards-heading" className="section-title">Top Travel Credit Cards</h2>
            {/* Ensure grid layout forces equal height for items */}
            <div className="card-grid featured-cards-grid">

              {/* Map over the featured cards data */}
              {featuredCardsData.map((card) => (
                // Ensure the card itself uses flex column to allow content stretching
                <div className="featured-card" key={card.slug}>
                  <div className="featured-card__image-wrapper">
                    <Image
                      className="featured-card__image"
                      src={card.imageSrc}
                      alt={card.imageAlt}
                      width={card.imageWidth}
                      height={card.imageHeight}
                      priority={card.priority}
                      objectFit="contain"
                    />
                  </div>
                  {/* Ensure description uses flex column and grows */}
                  <div className="featured-card__description">
                    <h3>{card.title}</h3>

                    {/* === Star Rating Display (Updated) === */}
                    <div className="star-rating" title={`Rating: ${card.rating} out of 10`}>
                      {/* Display numerical rating out of 10 */}
                      <span className="rating-value">{card.rating.toFixed(1)} / 10</span>
                      {/* Render 5 SVG star icons based on normalized rating */}
                      <RenderStars ratingOutOf10={card.rating} />
                    </div>
                    {/* === End Star Rating Display === */}

                    {/* Paragraph now relies on flexbox to determine height for alignment */}
                    <p className="featured-card__text">{card.description}</p>

                    {/* Actions pushed to the bottom */}
                    <div className="featured-card__actions">
                       <Link href={`/cards/${card.slug}`} className="cta-button learn-more-button">
                         Learn More
                       </Link>
                       <a href={card.applyUrl} className="Apply-button" target="_blank" rel="noopener sponsored">
                         Apply Now
                       </a>
                     </div>
                  </div>
                </div>
              ))}
              {/* End Map */}

               <p className="card-footnote">*Offers subject to change. See issuer's website for current details & terms.</p>
            </div> {/* End of .card-grid */}
          </div> {/* End of .container */}
        </section>
        {/* === End Featured Cards Section === */}


       

        {/* Comparison Tool Section (Unchanged) */}
        <section id="compare" className="content-section comparison-section" aria-labelledby="comparison-heading">
            {/* ... comparison content ... */}
            <div className="container" style={{ textAlign: 'center' }}>
                <h2 id="comparison-heading" className="section-title">Compare Travel Credit Cards</h2>
                <p className="section-description">
                Ready to see how your favorite cards stack up side-by-side? Use our tool to compare features, rewards, and fees.
                </p>
                <Link href="/compare" className="cta-button submit" style={{display: 'inline-block', marginTop: '1rem'}}>
                Go to Comparison Tool
                </Link>
            </div>
         </section>

         {/* Latest News Section */}
       <section id="latest-news" className="content-section" aria-labelledby="latest-news-heading">
         <div className="container">
           <h2 id="latest-news-heading" className="section-title">Latest News</h2>
           <div className="news-grid-homepage"> {/* New CSS class for homepage layout */}
             {latestNews && latestNews.length > 0 ? (
               latestNews.map((newsItem) => (
                 <NewsCard key={newsItem.slug} newsItem={newsItem} />
   ))
 ) : (
   <p>No news available at the moment.</p>
 )}
           </div>
           <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <Link href="/news" className="cta-button view-all-news-button">
                View All News
            </Link>
           </div>
         </div>
       </section>

        {/* Reviews & News Section (Unchanged) */}
        <section className="content-section reviews-news-section" aria-labelledby="reviews-heading">
            {/* ... reviews content ... */}
             <div className="container">
                <h2 id="reviews-heading" className="section-title">Latest Insights & Card Reviews (2025)</h2>
                <div className="reviews-grid">
                {[
                    // Keep your existing array of review objects
                    { img: "/pexels-rdne-5778466.jpg", alt: "Citi Custom Cash Card", title: "Citi Custom Cash Card Review 2025: A Secret Weapon for Everyday Rewards?", desc: "Discover its adaptive 5% cash back, $0 annual fee, welcome bonus, and if it's the top choice for US consumers' everyday spending.", link: "/review/citi-custom-cash-2025" },
                    { img: "/jordan-ryskamp-kxI7siCTAyY-unsplash.webp", alt: "Marriott Bonvoy Boundless Credit Card", title: "Marriott Bonvoy Boundless 2025 Review", desc: "Is its $95 annual fee justified by its hotel loyalty perks for US travelers?", link: "/review/marriott-bonvoy-boundless-2025" },
                    { img: "/pexels-railgunbreaker-32008325.webp", alt: "Airplane wing with a credit card and passport", title: "Top Airline Credit Cards for Miles & Perks in 2025", desc: "Unlock free flights and luxury travel with 2025's best airline rewards credit cards.", link: "/review/Best Credit Cards for Booking Flights in 2025", },
                    { img: "/peter-hansen-MeGmdPNe36w-unsplash.webp", alt: "Chase Sapphire Preferred credit card art", title: "Chase Sapphire Preferred Review (2025)", desc: "Is the Chase Sapphire Preferred still the traveler's sweetheart for $95 in 2025? Our in-depth analysis.", link: "/review/chase-sapphire-preferred-2025" },
                    { img: "/simon-english-48nerZQCHgo-unsplash.webp", alt: "Wells Fargo Autograph Journey℠ Card", title: "Wells Fargo Autograph Journey Review 2025: Premium Travel Contender?", desc: "In-depth 2025 review of the Wells Fargo Autograph Journey℠ Card. Explore rewards, benefits, fees, and see if it's the right premium travel card for US travelers.", link: "/review/wells-fargo-autograph-journey-2025" },
                    { img: "/618ad46b23745d001825bd89.webp", alt: "Capital One Venture and Venture X Cards", title: "Capital One Venture Rewards vs. Venture X: Which Travel Card Wins in 2025?", desc: "A comprehensive review comparing Capital One Venture and Venture X rewards, benefits, fees, and overall value to determine the best fit for US travelers in 2025", link: "/review/capital-one-venture-rewards-vs-venture-x-2025", date: "2025-05-07" },
                    { img: "/vitaly-gariev-1JnN9QhmTGU-unsplash (1).jpg", alt: "American Express Platinum, Gold, and Green cards representing the Amex Trifecta", title: "Amex Trifecta 2025: Max Rewards?", desc: "Reviewing the Platinum, Gold & Green combo for US travelers.", link: "/review/amex-trifecta-2025" },
                    { img: "/ChatGPT Image May 5, 2025, 09_36_30 PM (1).png", alt: "U.S. Bank Altitude Connect Visa Signature Card", title: "Altitude® Connect: $0 Fee Travel Gem?", desc: "Reviewing the $0 fee card with lounge visits & travel credits.", link: "/review/us-bank-altitude-connect-2025", },
                    { img: "/damaris-isenschmid-k1LIMMsm8bg-unsplash.webp", alt: "Traveler using a credit card internationally with scenic background", title: "Top 5 No Foreign Transaction Fee Cards (2025)", desc: "Avoid extra fees and maximize rewards on your international adventures.", link: "/review/top-5-no-ftf-cards-2025" },
                   
                    
                    
                    
                   
                    
                    
                ].map((review, index) => (
                    <div className="card review-card" key={review.link || index}>
                    <Link href={review.link || '#'} className="review-card__image-link">
                        <Image
                        className="review-card__image"
                        src={review.img}
                        alt={review.alt}
                        width={500}
                        height={300}
                        loading="lazy"
                        objectFit="cover"
                        />
                    </Link>
                    <div className="card-content review-card__content">
                        <h3>
                        {review.link ? (
                            <Link href={review.link}>{review.title}</Link>
                        ) : (
                            review.title
                        )}
                        </h3>
                        <p>{review.desc}</p>
                        {review.link && (
                        <Link href={review.link} className="cta-button read-more-button">
                            Read More
                        </Link>
                        )}
                    </div>
                    </div>
                ))}
                </div>
            </div>
        </section>
      </main>

      {/* Footer Component (Unchanged) */}
      

      {/* Add screen reader only style if not already global */}
      {/* <style>{`.sr-only{...}`}</style> */}
    </>
  );
}

// getStaticProps (Unchanged)
export async function getStaticProps() {
  const featuredReviews = getFeaturedReviews(8);
  const latestNews = getFeaturedNews(4); // Get 4 latest news items

  return {
    props: {
      featuredReviews,
    },
    // revalidate: 3600,
  };
}