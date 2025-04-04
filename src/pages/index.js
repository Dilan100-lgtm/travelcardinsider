// File: pages/index.js

// Note: Issues like contrast ratio (CSS), missing lang attribute (layout/_document),
// focusable elements in aria-hidden (Header component/CSS logic),
// unused JS (code splitting/optimization), optimizing the true LCP element (often hero image/text),
// and blurry logo (asset replacement) need to be addressed in their respective files/areas.
// This file incorporates fixes for descriptive links and uses Next.js Image best practices.

import React from 'react';
import Head from "next/head";
import Image from 'next/image'; // Using Next.js Image component
import Link from 'next/link';   // Using Next.js Link for internal routing
import Header from "../components/Header"; // Assuming path is correct
import Footer from "../components/Footer"; // Assuming path is correct

export default function HomePage() {
  return (
    <>
      <Head>
        {/* Add lang="en" in your root layout file (e.g., layout.js or _document.js) */}
        {/* <html lang="en"> */}
        <title>TravelCardInsider - Best Travel Credit Cards 2025</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* SEO: Meta description */}
        <meta
          name="description"
          content="Compare the best travel credit cards of 2025. Find top rewards, travel perks, lounge access, and sign-up bonuses to maximize your trips." // Slightly enhanced description
        />
        {/* SEO: Add Keywords if desired (less impact now, but can include) */}
        {/* <meta name="keywords" content="travel credit cards, rewards points, airline miles, hotel points, best credit cards 2025, credit card comparison" /> */}

        {/* Performance: Preload critical assets */}
        {/* LCP Candidate? Preloading the hero background image */}
        <link
          rel="preload"
          as="image"
          href="/AdobeStock_299190080_result.webp" // Ensure this is optimized WebP/AVIF
          type="image/webp" // Use correct type
          // fetchpriority="high" // Optional: hint browser its high priority
        />
        {/* Preloading the first card image */}
        <link
          rel="preload"
          as="image"
          href="/sapphire_preferred_card.png" // Consider converting to WebP/AVIF
          type="image/png" // Use correct type
        />

        {/* Preload critical fonts */}
        <link rel="preload" href="/fonts/Roboto_Condensed-Regular.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/Roboto_Condensed-bold.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/playfair-display-regular.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/playfair-display-bold.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />

        {/* Schema Markup (Ensure accuracy and completeness) */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "WebSite",
                "@id": "https://www.travelcardinsider.com/#website", // Use actual domain
                "url": "https://www.travelcardinsider.com/", // Use actual domain
                "name": "TravelCardInsider",
                "description": "Explore the best U.S. travel credit cards in 2025. Compare rewards, benefits, and find your perfect travel companion.",
                "publisher": {"@id": "https://www.travelcardinsider.com/#organization"},
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
                    // Replace with actual URL to high-res or SVG logo
                    "url": "https://www.travelcardinsider.com/logo-optimized.png",
                    "width": 600, // Adjust to actual logo dimensions if possible
                    "height": 60,
                    "caption": "TravelCardInsider Logo"
                },
                // Add actual social media profile URLs
                "sameAs": [
                    "https://www.facebook.com/YourPage",
                    "https://www.instagram.com/YourProfile",
                    "https://twitter.com/YourHandle" // Add others
                ]
              },
              {
                 "@type": "WebPage",
                 "@id": "https://www.travelcardinsider.com/#webpage",
                 "url": "https://www.travelcardinsider.com/",
                 "name": "TravelCardInsider - Best Travel Credit Cards 2025 | Compare Rewards & Perks", // Enhanced title
                 "isPartOf": {"@id": "https://www.travelcardinsider.com/#website"},
                 "about": {"@id": "https://www.travelcardinsider.com/#organization"},
                 "primaryImageOfPage": { // Use a relevant, high-quality image URL
                    "@id": "https://www.travelcardinsider.com/AdobeStock_299190080_result.webp" // Example
                 },
                 "datePublished": "2025-01-01T00:00:00+00:00", // Set actual publication date
                 "dateModified": "${new Date().toISOString()}", // Dynamically set modified date? Or update manually.
                 "inLanguage": "en-US",
                 "potentialAction": { // Help search engines understand search functionality
                    "@type": "SearchAction",
                    "target": "https://www.travelcardinsider.com/search?q={search_term_string}", // Adjust URL
                    "query-input": "required name=search_term_string"
                 }
              },
              // Product Schemas (Essential to keep accurate and detailed)
              {
                "@type": "Product",
                "@id": "https://www.travelcardinsider.com/#chaseSapphirePreferred", // Use actual URL if card has dedicated page
                "name": "Chase Sapphire Preferred® Card", // Use official name
                "image": "https://www.travelcardinsider.com/sapphire_preferred_card.png", // Optimized image URL
                "description": "Popular travel rewards card known for valuable points on travel & dining. Offers 60,000 bonus points after meeting spending requirements. $95 annual fee.", // More descriptive
                "brand": { "@type": "Brand", "name": "Chase" },
                "sku": "CSP001", // Example unique identifier
                "mpn": "CSP2025", // Example manufacturer part number
                // Get real rating data if possible
                "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.8", "reviewCount": "250" },
                // Use actual AFFILIATE link
                "offers": { "@type": "Offer", "price": "95", "priceCurrency": "USD", "url": "https://www.chase.com/apply?partner=YOUR_ID", "priceValidUntil": "2025-12-31", "availability": "https://schema.org/OnlineOnly", "description": "Annual fee" }
              },
              // --- Add similar detailed schemas for Amex Platinum and Venture X ---
              {
                "@type": "Product",
                "@id": "https://www.travelcardinsider.com/#amexPlatinum",
                "name": "The Platinum Card® from American Express", // Official name
                "image": "https://www.travelcardinsider.com/ntb-amex-platinum-card.png", // Optimized image URL
                "description": "Premium luxury travel card offering 5X points on flights & hotels booked through Amex, extensive lounge access, and various statement credits. High annual fee ($695).",
                "brand": { "@type": "Brand", "name": "American Express" },
                "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.6", "reviewCount": "180" },
                "offers": { "@type": "Offer", "price": "695", "priceCurrency": "USD", "url": "https://www.americanexpress.com/apply?partner=YOUR_ID", "priceValidUntil": "2025-12-31", "availability": "https://schema.org/OnlineOnly", "description": "Annual fee" }
              },
              {
                "@type": "Product",
                "@id": "https://www.travelcardinsider.com/#ventureX",
                "name": "Capital One Venture X Rewards Credit Card", // Official name
                "image": "https://www.travelcardinsider.com/venturex-cg-static-card-1000x630-2.avif", // Optimized image URL
                "description": "Premium travel card earning unlimited 2X miles on all purchases. Includes $300 annual travel credit via Capital One Travel, lounge access (Priority Pass & Plaza Premium), and 10,000 bonus miles annually. $395 annual fee.",
                "brand": { "@type": "Brand", "name": "Capital One" },
                "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.7", "reviewCount": "95" },
                "offers": { "@type": "Offer", "price": "395", "priceCurrency": "USD", "url": "https://www.capitalone.com/apply?partner=YOUR_ID", "priceValidUntil": "2025-12-31", "availability": "https://schema.org/OnlineOnly", "description": "Annual fee" }
              }
            ]
          }
          `}
        </script>
      </Head>

      {/* Header Component - Ensure ARIA/focus issues are fixed within Header.js */}
      <Header />

      <main>
        {/* Section for Hero Background Image */}
        {/* LCP Optimization: Preloaded above. Image itself needs optimization. */}
        <section id="product-overview" aria-labelledby="hero-heading"> {/* Added aria-label */}
          <div className="img"></div> {/* Styled via CSS background */}
        </section>

        {/* Hero Text Section(s) */}
        <section className="hero">
          <div className="container">
            <h1 id="hero-heading">Unlock the Best Travel Credit Cards for 2025</h1> {/* Linked via aria-labelledby */}
            <p>
              Compare top travel credit cards and start earning rewards for
              your next adventure.
            </p>
            {/* Consider adding aria-label if "Compare Now" isn't descriptive enough out of context */}
            <a href="#compare" className="cta-button">
              Compare Now
            </a>
          </div>

          {/* These could potentially be combined or restyled for clarity */}
          <div className="container">
            <h2>Calculate Your Travel Rewards</h2> {/* Changed to H2 */}
            <p>
              Enter your monthly spending to see how many points you can earn
              with top travel credit cards.
            </p>
            <a href="#Calculate" className="cta-button" aria-label="Calculate potential travel rewards"> {/* Added aria-label */}
              Calculate
            </a>
          </div>

          <div className="container">
            <h2>Find Best Travel Credit Cards for You</h2> {/* Changed to H2 */}
            <p>
              Find the perfect travel credit card tailored to your spending
              habits and travel goals.
            </p>
            <a href="#Find" className="cta-button" aria-label="Find recommended travel credit cards"> {/* Added aria-label */}
              Find
            </a>
          </div>
        </section>

        {/* Featured Cards Section */}
        <section id="featured-cards" aria-labelledby="featured-cards-heading">
          <h2 id="featured-cards-heading" className="H2_featured-cards">Top Travel Credit Cards</h2> {/* Changed to H2 */}
          <div className="card-grid">
            {/* Card 1 */}
            <div className="featured-card">
              {/* Performance: Using Next Image, priority set */}
              <Image
                className="featured-card__image"
                src="/sapphire_preferred_card.png" // Consider converting to .webp or .avif
                alt="Chase Sapphire Preferred Card shown on a blue background" // More descriptive alt text
                width={400} // Ensure aspect ratio matches source
                height={250} // Ensure aspect ratio matches source
                priority={true} // Prioritize if above the fold
              />
              <div className="featured-card__description">
                <h3>Chase Sapphire Preferred</h3>
                <p>
                  Earn 60,000 points after spending $4,000 in the first 3
                  months. (Keep updated!)
                </p>
                {/* SEO & A11y FIXED: Descriptive Link Text */}
                <Link href="/reviews/chase-sapphire-preferred" className="cta-button">
                  Learn More: Chase Sapphire Preferred
                </Link>
                {/* Ensure affiliate links have rel="noopener sponsored" */}
                <a href="https://www.chase.com/apply?partner=YOUR_AFFILIATE_ID" className="Apply-button" target="_blank" rel="noopener sponsored">
                  Apply Now
                </a>
              </div>
            </div>

            {/* Card 2 */}
            <div className="featured-card">
              <Image
                className="featured-card__image"
                src="/ntb-amex-platinum-card.png" // Convert to .webp/.avif?
                alt="American Express Platinum Card on gradient background" // More descriptive alt text
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
                 {/* SEO & A11y FIXED: Descriptive Link Text */}
                <Link href="/reviews/amex-platinum" className="cta-button">
                   Learn More: Amex Platinum
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
                src="/venturex-cg-static-card-1000x630-2.avif" // Already AVIF - good! Check compression.
                alt="Capital One Venture X card with abstract background" // More descriptive alt text
                width={400}
                height={250} // Check aspect ratio vs source (1000x630) - recalculate? (e.g., width={400} height={252})
                loading="lazy"
              />
              <div className="featured-card__description">
                <h3>Capital One Venture X</h3>
                <p>
                  Earn unlimited 2x miles and receive a $300 travel credit
                  annually. (Keep updated!)
                </p>
                 {/* SEO & A11y FIXED: Descriptive Link Text */}
                <Link href="/reviews/capital-one-venture-x" className="cta-button">
                   Learn More: Capital One Venture X
                </Link>
                <a href="https://www.capitalone.com/apply?partner=YOUR_AFFILIATE_ID" className="Apply-button" target="_blank" rel="noopener sponsored">
                  Apply Now
                </a>
              </div>
            </div>
          </div> {/* End of .card-grid */}
        </section>

        {/* Comparison Tool */}
        <section id="compare" className="comparison" aria-labelledby="comparison-heading">
          {/* Check contrast issues via CSS */}
          <div className="container">
            <h2 id="comparison-heading" className="H2_comparison">Compare Travel Credit Cards</h2>
            {/* TODO: Implement accessible form handling with React state */}
            <form
              onSubmit={(e) => { e.preventDefault(); /* Add logic */ }}
              aria-describedby="comparison-result" // Associate form with results area
            >
              <label htmlFor="card1">Select Card 1:</label>
              <select id="card1" name="card1">
                <option value="chase">Chase Sapphire Preferred</option>
                <option value="amex">Amex Platinum</option>
                <option value="venture">Capital One Venture X</option>
              </select>

              <label htmlFor="card2">Select Card 2:</label>
              <select id="card2" name="card2">
                <option value="chase">Chase Sapphire Preferred</option>
                <option value="amex">Amex Platinum</option>
                <option value="venture">Capital One Venture X</option>
              </select>

              <button className="submit" type="submit">
                Compare Cards
              </button>
            </form>

            <div id="comparison-result" className="comparison-result" aria-live="polite"> {/* Announce changes */}
              <h3>Comparison Result</h3>
              <p id="result-text">Select two cards to compare.</p>
              {/* Results table/list will be rendered here */}
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        <section className="reviews-container" aria-labelledby="reviews-heading">
          {/* Check contrast issues via CSS */}
          <h2 id="reviews-heading">Top Credit Card Reviews & News (2025)</h2>
          <div className="reviews-grid">
            {[
               // Ensure all required data is present and correct
               { img: "/AdobeStock_560041735_result.webp", alt: "Credit cards fanned out on desk", title: "Top New Travel Credit Card Offers of 2025", desc: "Breaking news on the latest card launches and exclusive sign-up bonuses.", link: "/review/top-new-travel-credit-card-offers-2025", },
               { img: "/AdobeStock_758160258_result.webp", alt: "Traveler relaxing in airport lounge chair", title: "VIP Airport Lounge Access in 2025", desc: "How to get premium perks and comfort while traveling.", link: "/review/The-Ultimate-Guide-to-Lounge-Access-in-2025-How-to-Get-VIP-Treatment-at-Airports", },
               { img: "/AdobeStock_947404358_result.webp", alt: "Family with luggage smiling at airport gate", title: "5 Family-Friendly Travel Cards for 2025", desc: "Kid-friendly perks and money-saving benefits for your family vacations.", link: "/review/Top-5-Family-Friendly-Travel-Cards-for-2025-Maximize-Points-&-Perks-with-Kids-in-Tow", },
               { img: "/AdobeStock_964630446_result.webp", alt: "Upward trending graph over credit report", title: "Boost Your Credit Score for Premium Cards", desc: "Actionable tips to qualify for the best travel rewards cards.", link: "/review/How-to-Improve-Your-Credit-Score-Fast-for-Premium-Travel-Cards", },
               { img: "/alex-bertha-Jyg7xHRmXiU-unsplash (1).jpg", alt: "Airplane window view of clouds and wing", title: "Redeem for Luxury Travel on a Budget", desc: "Stretch your points and miles for a premium travel experience.", link: "/review/2025-Points-&-Miles-Trends-Best-Ways-to-Redeem-for-Luxury-Travel-on-a-Budget", },
               { img: "/AdobeStock_265601656_result.webp", alt: "Magnifying glass over credit card details", title: "Secret Travel Card Benefits", desc: "Little-known perks you might already have but never used.", link: "/review/Hidden-Perks-Secret-Travel-Card-Benefits-You-Probably-Didnt-Know-About-in-2025", },
               { img: "/AdobeStock_446734479.webp", alt: "Wallet with several credit cards, zero dollar bill shown", title: "The Best No Annual Fee Travel Cards", desc: "Earn rewards without worrying about recurring charges.", link: "/review/The-Best-Travel-Cards-with-No-Annual-Fee-Get-Big-Rewards-for-Free", },
               { img: "/AdobeStock_241382254_result.webp", alt: "Scale weighing money against credit card perks", title: "Is a $500+ Annual Fee Worth It?", desc: "A cost-benefit breakdown of premium travel credit cards.", link: "/review/Premium-vs-Budget-Travel-Cards-Is-Paying-a-$500+Annual-Fee-Really-Worth-It", },
             ].map((review, index) => (
               <div className="card" key={review.link || index}> {/* Use link as key if unique */}
                 {/* Use Next/Image for optimization */}
                 <Image
                   className="review_img"
                   src={review.img}
                   alt={review.alt} // Ensure alt text is descriptive & unique
                   width={500} // Adjust dimensions for aspect ratio & design
                   height={300} // Adjust dimensions for aspect ratio & design
                   loading="lazy" // Correctly lazy load review images
                   objectFit="cover"
                 />
                 <div className="card-content">
                   <h3>
                     {/* Link the heading for better SEO/A11y */}
                     {review.link ? (
                       <Link href={review.link}>{review.title}</Link>
                     ) : (
                       review.title
                     )}
                   </h3>
                   <p>{review.desc}</p>
                   {/* Consider making this link text more descriptive too */}
                   {review.link && (
                     <Link href={review.link} className="cta-button">
                       Read: {review.title} {/* More descriptive text */}
                     </Link>
                   )}
                 </div>
               </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer Component */}
      <Footer />
    </>
  );
}