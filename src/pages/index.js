// File: pages/index.js

import React from 'react';
import Head from "next/head";
import Image from 'next/image';
import Header from "../components/Header"; // Assuming path is correct
import Footer from "../components/Footer"; // Assuming path is correct

export default function HomePage() {
  return (
    <>
      <Head>
        <title>TravelCardInsider - Best Travel Credit Cards 2025</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* ✅ Meta description for SEO */}
        <meta
          name="description"
          content="Compare the best travel credit cards of 2025. Earn more rewards, travel perks, and exclusive bonuses."
        />

        {/* ✅ Preload images for LCP optimization */}
        {/* Ensure this path is correct relative to your public folder */}
        <link
          rel="preload"
          as="image"
          href="/AdobeStock_299190080_result.webp"
          type="image/webp"
        />
        <link
          rel="preload"
          as="image"
          href="/sapphire_preferred_card.png" // Ensure path is correct
          type="image/png"
        />

        {/* ✅ Preload only critical fonts */}
        <link
          rel="preload"
          href="/fonts/Roboto_Condensed-Regular.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/Roboto_Condensed-bold.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/playfair-display-regular.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/playfair-display-bold.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />

        {/* Schema Markup */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "WebSite",
                "@id": "https://www.travelcardinsider.com/#website",
                "url": "https://www.travelcardinsider.com/",
                "name": "TravelCardInsider",
                "description": "Explore the best U.S. travel credit cards in 2025. Compare rewards, benefits, and find your perfect travel companion.",
                "publisher": {
                  "@id": "https://www.travelcardinsider.com/#organization"
                },
                "inLanguage": "en-US"
              },
              {
                "@type": "Organization",
                "@id": "https://www.travelcardinsider.com/#organization",
                "name": "TravelCardInsider",
                "url": "https://www.travelcardinsider.com/",
                "logo": {
                  "@type": "ImageObject",
                  "@id": "https://www.travelcardinsider.com/#logo",
                  "url": "https://www.travelcardinsider.com/6.jpg", // UPDATE LOGO URL
                  "width": 600,
                  "height": 60,
                  "caption": "TravelCardInsider Logo"
                },
                "sameAs": [
                  "https://www.facebook.com/YourPage", // UPDATE SOCIAL LINKS
                  "https://www.instagram.com/YourProfile" // UPDATE SOCIAL LINKS
                ]
              },
              {
                "@type": "WebPage",
                "@id": "https://www.travelcardinsider.com/#webpage",
                "url": "https://www.travelcardinsider.com/",
                "name": "TravelCardInsider - Best Travel Credit Cards 2025",
                "isPartOf": {
                  "@id": "https://www.travelcardinsider.com/#website"
                },
                "about": {
                  "@id": "https://www.travelcardinsider.com/#organization"
                },
                "primaryImageOfPage": {
                  // Maybe use the hero image URL here?
                  "@id": "https://www.travelcardinsider.com/AdobeStock_299190080_result.webp"
                },
                "datePublished": "2025-01-01T00:00:00+00:00", // UPDATE DATES
                "dateModified": "2025-04-04T00:00:00+00:00", // UPDATE DATES
                "inLanguage": "en-US"
              },
              {
                "@type": "Article", // This might be better suited for actual article pages, but okay for homepage summary
                "@id": "https://www.travelcardinsider.com/#article",
                "mainEntityOfPage": {
                  "@id": "https://www.travelcardinsider.com/#webpage"
                },
                "headline": "Top Travel Credit Cards for 2025",
                "description": "Compare top travel credit cards, learn about rewards, perks, and how to maximize your points in 2025.",
                "image": {
                  "@type": "ImageObject",
                   // Use a relevant image URL, maybe hero or logo?
                  "url": "https://www.travelcardinsider.com/AdobeStock_299190080_result.webp",
                  "width": 1200,
                  "height": 630
                },
                "author": { "@id": "https://www.travelcardinsider.com/#organization" },
                "publisher": { "@id": "https://www.travelcardinsider.com/#organization" },
                "datePublished": "2025-01-01T00:00:00+00:00", // UPDATE DATES
                "dateModified": "2025-04-04T00:00:00+00:00", // UPDATE DATES
                "inLanguage": "en-US"
              },
              // Product Schemas (Keep updated with real data/links)
              {
                "@type": "Product",
                "@id": "https://www.travelcardinsider.com/#chaseSapphirePreferred",
                "name": "Chase Sapphire Preferred",
                "image": "https://www.travelcardinsider.com/sapphire_preferred_card.png", // UPDATE IMAGE URL
                "description": "Travel rewards card with 60,000-point welcome bonus, 2X on travel & dining, $95 annual fee.",
                "brand": { "@type": "Brand", "name": "Chase" },
                "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.8", "reviewCount": "250" }, // UPDATE RATINGS
                "offers": { "@type": "Offer", "price": "95", "priceCurrency": "USD", "url": "https://www.chase.com/apply?partner=YOUR_AFFILIATE_ID", "description": "Annual fee" } // UPDATE URL
              },
              {
                "@type": "Product",
                "@id": "https://www.travelcardinsider.com/#amexPlatinum",
                "name": "Amex Platinum",
                "image": "https://www.travelcardinsider.com/ntb-amex-platinum-card.png", // UPDATE IMAGE URL
                "description": "Luxury travel card with 5X points on flights, lounge access, and premium benefits. High annual fee.",
                "brand": { "@type": "Brand", "name": "American Express" },
                "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.6", "reviewCount": "180" }, // UPDATE RATINGS
                "offers": { "@type": "Offer", "price": "695", "priceCurrency": "USD", "url": "https://www.americanexpress.com/apply?partner=YOUR_AFFILIATE_ID", "description": "Annual fee" } // UPDATE URL
              },
              {
                "@type": "Product",
                "@id": "https://www.travelcardinsider.com/#ventureX",
                "name": "Capital One Venture X",
                "image": "https://www.travelcardinsider.com/venturex-cg-static-card-1000x630-2.avif", // UPDATE IMAGE URL
                "description": "Earn unlimited 2X miles, $300 travel credit, and lounge access with a mid-tier annual fee.",
                "brand": { "@type": "Brand", "name": "Capital One" },
                "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.7", "reviewCount": "95" }, // UPDATE RATINGS
                "offers": { "@type": "Offer", "price": "395", "priceCurrency": "USD", "url": "https://www.capitalone.com/apply?partner=YOUR_AFFILIATE_ID", "description": "Annual fee" } // UPDATE URL
              }
            ]
          }
          `}
        </script>
      </Head>

      <Header />

      <main>
        {/* Section for Hero Background Image */}
        <section id="product-overview">
          <div className="img"></div> {/* Styled via CSS background */}
        </section>

        {/* Hero Text Section(s) */}
        <section className="hero">
          <div className="container">
            <h1>Unlock the Best Travel Credit Cards for 2025</h1>
            <p>
              Compare top travel credit cards and start earning rewards for
              your next adventure.
            </p>
            {/* Link points to the comparison section below */}
            <a href="#compare" className="cta-button">
              Compare Now
            </a>
          </div>

          {/* Consider integrating these next two blocks differently if needed */}
          {/* e.g., smaller feature blocks below hero or link to separate tools */}
          <div className="container">
            <h1>Calculate Your Travel Rewards</h1>
            <p>
              Enter your monthly spending to see how many points you can earn
              with top travel credit cards.
            </p>
            {/* Ensure you have an element with id="Calculate" or link to a tool page */}
            <a href="#Calculate" className="cta-button">
              Calculate
            </a>
          </div>

          <div className="container">
            <h1>Find Best Travel Credit Cards for You</h1>
            <p>
              Find the perfect travel credit card tailored to your spending
              habits and travel goals.
            </p>
             {/* Ensure you have an element with id="Find" or link to a tool page */}
            <a href="#Find" className="cta-button">
              Find
            </a>
          </div>
        </section>

        {/* Featured Cards Section */}
        {/* Uses new .featured-card classes */}
        <section id="featured-cards">
          <h1 className="H2_featured-cards">Top Travel Credit Cards</h1>
          {/* Added .card-grid container div */}
          <div className="card-grid">
            {/* Card 1 */}
            <div className="featured-card">
              <Image
                className="featured-card__image" // Updated class
                src="/sapphire_preferred_card.png" // Ensure path is correct
                alt="Chase Sapphire Preferred Card"
                width={400} // Adjust as needed based on CSS/design
                height={250} // Adjust as needed based on CSS/design
                loading="lazy"
              />
              <div className="featured-card__description"> {/* Updated class */}
                <h3>Chase Sapphire Preferred</h3>
                <p>
                  Earn 60,000 points after spending $4,000 in the first 3
                  months. (Example text - keep updated!)
                </p>
                {/* UPDATE hrefs to actual review/affiliate links */}
                <a href="/reviews/chase-sapphire-preferred" className="cta-button">
                  Learn More
                </a>
                <a href="https://www.chase.com/apply?partner=YOUR_AFFILIATE_ID" className="Apply-button" target="_blank" rel="noopener sponsored">
                  Apply Now
                </a>
              </div>
            </div>

            {/* Card 2 */}
            <div className="featured-card">
              <Image
                className="featured-card__image" // Updated class
                src="/ntb-amex-platinum-card.png" // Ensure path is correct
                alt="Amex Platinum Card"
                width={400}
                height={250}
                loading="lazy"
              />
              <div className="featured-card__description"> {/* Updated class */}
                <h3>Amex Platinum</h3>
                <p>
                  Enjoy 5x points on flights and luxury lounge access
                  worldwide. (Example text - keep updated!)
                </p>
                 {/* UPDATE hrefs to actual review/affiliate links */}
                <a href="/reviews/amex-platinum" className="cta-button">
                  Learn More
                </a>
                <a href="https://www.americanexpress.com/apply?partner=YOUR_AFFILIATE_ID" className="Apply-button" target="_blank" rel="noopener sponsored">
                  Apply Now
                </a>
              </div>
            </div>

            {/* Card 3 */}
            <div className="featured-card">
              <Image
                className="featured-card__image" // Updated class
                src="/venturex-cg-static-card-1000x630-2.avif" // Ensure path is correct
                alt="Capital One Venture X"
                width={400}
                height={250}
                loading="lazy"
              />
              <div className="featured-card__description"> {/* Updated class */}
                <h3>Capital One Venture X</h3>
                <p>
                  Earn unlimited 2x miles and receive a $300 travel credit
                  annually. (Example text - keep updated!)
                </p>
                 {/* UPDATE hrefs to actual review/affiliate links */}
                <a href="/reviews/capital-one-venture-x" className="cta-button">
                  Learn More
                </a>
                <a href="https://www.capitalone.com/apply?partner=YOUR_AFFILIATE_ID" className="Apply-button" target="_blank" rel="noopener sponsored">
                  Apply Now
                </a>
              </div>
            </div>
          </div> {/* End of .card-grid */}
        </section>

        {/* Comparison Tool */}
        <section id="compare" className="comparison">
          {/* Added container for better structure/centering if needed */}
          <div className="container">
            <h2 className="H2_comparison">Compare Travel Credit Cards</h2>
            {/* Remember to implement the compareCards logic */}
            <form
              data-onsubmit="compareCards(event)" // Consider using React state/handlers
              onSubmit={(e) => {
                  e.preventDefault();
                  // Add your comparison logic here or call a function
                  console.log("Comparison form submitted");
                  // Example: Update result text
                  const resultText = document.getElementById('result-text');
                  if (resultText) {
                      resultText.textContent = "Comparison logic needs implementation.";
                  }
              }}
            >
              <label htmlFor="card1">Select Card 1:</label>
              <select id="card1" name="card1"> {/* Added name attribute */}
                <option value="chase">Chase Sapphire Preferred</option>
                <option value="amex">Amex Platinum</option>
                <option value="venture">Capital One Venture X</option>
                {/* Add more card options dynamically if needed */}
              </select>

              <label htmlFor="card2">Select Card 2:</label>
              <select id="card2" name="card2"> {/* Added name attribute */}
                {/* Ensure default selection prevents comparing same card? */}
                <option value="chase">Chase Sapphire Preferred</option>
                <option value="amex">Amex Platinum</option>
                <option value="venture">Capital One Venture X</option>
                 {/* Add more card options dynamically if needed */}
              </select>

              <button className="submit" type="submit">
                Compare
              </button>
            </form>

            {/* Area to display comparison results */}
            <div id="comparison-result" className="comparison-result">
              <h3>Comparison Result</h3>
              {/* This paragraph will be updated by your compareCards logic */}
              <p id="result-text">Select two cards to compare.</p>
              {/* You might render a table or comparison list here */}
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        {/* Uses updated structure with .card-content */}
        <section className="reviews-container">
          <h2>Top Credit Card Reviews & News (2025)</h2>
          <div className="reviews-grid">
            {[
              // Ensure image paths and links are correct and updated
               {
                 img: "/AdobeStock_560041735_result.webp",
                 alt: "Top New Travel Credit Card Offers of 2025",
                 title: "Top New Travel Credit Card Offers of 2025",
                 desc: "Breaking news on the latest card launches and exclusive sign-up bonuses.",
                 link: "/review/top-new-travel-credit-card-offers-2025",
               },
               {
                 img: "/AdobeStock_758160258_result.webp",
                 alt: "The Ultimate Guide to Lounge Access in 2025",
                 title: "VIP Airport Lounge Access in 2025",
                 desc: "How to get premium perks and comfort while traveling.",
                 link: "/review/The-Ultimate-Guide-to-Lounge-Access-in-2025-How-to-Get-VIP-Treatment-at-Airports",
               },
               {
                 img: "/AdobeStock_947404358_result.webp",
                 alt: "Top 5 Family-Friendly Travel Cards for 2025",
                 title: "5 Family-Friendly Travel Cards for 2025",
                 desc: "Kid-friendly perks and money-saving benefits for your family vacations.",
                 link: "/review/Top-5-Family-Friendly-Travel-Cards-for-2025-Maximize-Points-&-Perks-with-Kids-in-Tow",
               },
               {
                 img: "/AdobeStock_964630446_result.webp",
                 alt: "Improve Your Credit Score Fast for Premium Cards",
                 title: "Boost Your Credit Score for Premium Cards",
                 desc: "Actionable tips to qualify for the best travel rewards cards.",
                 link: "/review/How-to-Improve-Your-Credit-Score-Fast-for-Premium-Travel-Cards",
               },
               {
                 img: "/alex-bertha-Jyg7xHRmXiU-unsplash (1).jpg",
                 alt: "Redeeming Points for Luxury Travel on a Budget",
                 title: "Redeem for Luxury Travel on a Budget",
                 desc: "Stretch your points and miles for a premium travel experience.",
                 link: "/review/2025-Points-&-Miles-Trends-Best-Ways-to-Redeem-for-Luxury-Travel-on-a-Budget",
               },
               {
                 img: "/AdobeStock_265601656_result.webp",
                 alt: "Hidden Perks: Secret Travel Card Benefits",
                 title: "Secret Travel Card Benefits",
                 desc: "Little-known perks you might already have but never used.",
                 link: "/review/Hidden-Perks-Secret-Travel-Card-Benefits-You-Probably-Didnt-Know-About-in-2025",
               },
               {
                 img: "/AdobeStock_446734479.webp",
                 alt: "The Best No Annual Fee Travel Cards",
                 title: "The Best No Annual Fee Travel Cards",
                 desc: "Earn rewards without worrying about recurring charges.",
                 link: "/review/The-Best-Travel-Cards-with-No-Annual-Fee-Get-Big-Rewards-for-Free",
               },
               {
                 img: "/AdobeStock_241382254_result.webp",
                 alt: "Is Paying a $500+ Annual Fee Really Worth It?",
                 title: "Is a $500+ Annual Fee Worth It?",
                 desc: "A cost-benefit breakdown of premium travel credit cards.",
                 link: "/review/Premium-vs-Budget-Travel-Cards-Is-Paying-a-$500+Annual-Fee-Really-Worth-It",
               },
            ].map((review, index) => (
              // Using the general .card class for reviews
              <div className="card" key={index}>
                <Image
                  className="review_img" // Keep specific class for review images
                  src={review.img}
                  alt={review.alt}
                  width={500} // Adjust dimensions as needed
                  height={300} // Adjust dimensions as needed
                  loading="lazy"
                  objectFit="cover" // Explicitly set objectFit if needed
                />
                {/* Added .card-content wrapper */}
                <div className="card-content">
                  <h3>{review.title}</h3>
                  <p>{review.desc}</p>
                  {/* Render link only if it exists */}
                  {review.link && (
                    <a href={review.link} className="cta-button">
                      Read Review
                    </a>
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