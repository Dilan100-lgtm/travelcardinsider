// File: src/pages/index.js
// Refined Hero section structure and added container wrappers for better spacing control.

import React from 'react';
import Head from "next/head";
import Image from 'next/image';
import Link from 'next/link';
import Header from "../components/Header"; // Assuming path is correct
import Footer from "../components/Footer"; // Assuming path is correct
import TopReviewsSection from '@/components/TopReviewsSection'; // Import the new section
import { getFeaturedReviews } from '@/utils/getAllReviews'; // Import the data fetching function

// Updated component definition to accept props
export default function HomePage({ featuredReviews }) {
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

        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              // --- Keep your entire existing LD+JSON schema here ---
               {
                 "@type": "WebSite",
                 "@id": "https://www.travelcardinsider.com/#website",
                 "url": "https://www.travelcardinsider.com/",
                 "name": "TravelCardInsider",
                 "description": "Explore the best U.S. travel credit cards in 2025. Compare rewards, benefits, and find your perfect travel companion.",
                 "publisher": { "@id": "https://www.travelcardinsider.com/#organization" },
                 "inLanguage": "en-US",
                 "potentialAction": {
                   "@type": "SearchAction",
                   "target": "https://www.travelcardinsider.com/search?q={search_term_string}",
                   "query-input": "required name=search_term_string"
                 }
               },
               {
                 "@type": "Organization",
                 "@id": "https://www.travelcardinsider.com/#organization",
                 "name": "TravelCardInsider",
                 "url": "https://www.travelcardinsider.com/",
                 "logo": {
                   "@type": "ImageObject",
                   "@id": "https://www.travelcardinsider.com/#logo",
                   "url": "https://www.travelcardinsider.com/6.jpg",
                   "width": 600,
                   "height": 60,
                   "caption": "TravelCardInsider Logo"
                 },
                 "sameAs": [
                   "https://www.facebook.com/YourPage",
                   "https://www.instagram.com/YourProfile",
                   "https://twitter.com/YourHandle"
                 ]
               },
               {
                 "@type": "WebPage",
                 "@id": "https://www.travelcardinsider.com/#webpage",
                 "url": "https://www.travelcardinsider.com/",
                 "name": "TravelCardInsider – Best Travel Credit Cards 2025",
                 "isPartOf": { "@id": "https://www.travelcardinsider.com/#website" },
                 "about": { "@id": "https://www.travelcardinsider.com/#organization" },
                 "primaryImageOfPage": {
                   "@type": "ImageObject",
                   "@id": "https://www.travelcardinsider.com/#heroImage",
                   "url": "https://www.travelcardinsider.com/AdobeStock_299190080_result.webp",
                   "width": 1920,
                   "height": 1080,
                   "caption": "Travel Rewards Hero Banner"
                 },
                 "datePublished": "2025-01-01T00:00:00+00:00",
                 "dateModified": new Date().toISOString(),
                 "inLanguage": "en-US"
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
                   "ratingValue": "4.8",
                   "reviewCount": "250"
                 },
                 "offers": {
                   "@type": "Offer",
                   "price": "95",
                   "priceCurrency": "USD",
                   "url": "https://www.chase.com/apply?partner=YOUR_ID", // Replace with actual affiliate link if possible
                   "priceValidUntil": "2025-12-31",
                   "availability": "https://schema.org/InStock",
                   "description": "Annual fee"
                 }
               },
               {
                 "@type": "Product",
                 "@id": "https://www.travelcardinsider.com/#amexPlatinum",
                 "name": "The Platinum Card® from American Express",
                 "image": "https://www.travelcardinsider.com/ntb-amex-platinum-card.png",
                 "description": "Premium luxury travel card offering 5X points on flights & hotels booked through Amex, extensive lounge access, and various statement credits. High annual fee ($695).",
                 "brand": { "@type": "Brand", "name": "American Express" },
                 "sku": "AMEXPLAT001",
                 "mpn": "AMEXPLAT2025",
                 "aggregateRating": {
                   "@type": "AggregateRating",
                   "ratingValue": "4.6",
                   "reviewCount": "180"
                 },
                 "offers": {
                   "@type": "Offer",
                   "price": "695",
                   "priceCurrency": "USD",
                   "url": "https://www.americanexpress.com/apply?partner=YOUR_ID", // Replace with actual affiliate link
                   "priceValidUntil": "2025-12-31",
                   "availability": "https://schema.org/InStock",
                   "description": "Annual fee"
                 }
               },
               {
                 "@type": "Product",
                 "@id": "https://www.travelcardinsider.com/#ventureX",
                 "name": "Capital One Venture X Rewards Credit Card",
                 "image": "https://www.travelcardinsider.com/venturex-cg-static-card-1000x630-2.avif",
                 "description": "Premium travel card earning unlimited 2X miles on all purchases. Includes $300 annual travel credit via Capital One Travel, lounge access (Priority Pass & Plaza Premium), and 10,000 bonus miles annually. $395 annual fee.",
                 "brand": { "@type": "Brand", "name": "Capital One" },
                 "sku": "VTX001",
                 "mpn": "VTX2025",
                 "aggregateRating": {
                   "@type": "AggregateRating",
                   "ratingValue": "4.7",
                   "reviewCount": "95"
                 },
                 "offers": {
                   "@type": "Offer",
                   "price": "395",
                   "priceCurrency": "USD",
                   "url": "https://www.capitalone.com/apply?partner=YOUR_ID", // Replace with actual affiliate link
                   "priceValidUntil": "2025-12-31",
                   "availability": "https://schema.org/InStock",
                   "description": "Annual fee"
                 }
               }
              // --- End LD+JSON schema ---
            ]
          })
        }} />
        {/* --- End of Head content --- */}
      </Head>

      {/* Header Component (Unchanged) */}
      <Header />

      <main className="main-content"> {/* Added class for potential top margin */}
        {/* Hero Section Wrapper */}
        <section className="hero-section" aria-labelledby="hero-heading">
          {/* Background Image - Using fill and objectFit */}
          <div className="hero-background">
            <Image
              src="/AdobeStock_299190080_result.webp"
              alt="Scenic travel background representing adventure"
              layout="fill"
              objectFit="cover"
              quality={85}
              priority
              placeholder="blur"
              blurDataURL="/AdobeStock_299190080_result_low_quality.webp" // Ensure this placeholder exists
            />
            <div className="hero-overlay"></div> {/* Optional overlay */}
          </div>

          {/* Hero Content */}
          <div className="hero-content-container container"> {/* Added container class */}
            <h1 id="hero-heading">Unlock the Best Travel Credit Cards for 2025</h1>
            <p className="hero-subheading">
              Compare top travel rewards, find cards tailored to your spending,
              and calculate potential earnings for your next adventure.
            </p>
            <div className="hero-actions">
              {/* Consolidated CTAs */}
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

        {/* Featured Cards Section */}
        <section id="featured-cards" className="content-section" aria-labelledby="featured-cards-heading">
          <div className="container"> {/* Added container for max-width and padding */}
            <h2 id="featured-cards-heading" className="section-title">Top Travel Credit Cards</h2>
            <div className="card-grid featured-cards-grid">
              {/* Card 1 */}
              <div className="featured-card">
                <div className="featured-card__image-wrapper">
                  <Image
                    className="featured-card__image"
                    src="/sapphire_preferred_card.png"
                    alt="Chase Sapphire Preferred Card" // Simplified alt text
                    width={400} // Keep original dimensions
                    height={250}
                    priority={true}
                    objectFit="contain" // Use contain to avoid cropping card details
                  />
                </div>
                <div className="featured-card__description">
                  <h3>Chase Sapphire Preferred®</h3>
                  <p>
                    Earn 60,000 points after spending $4,000 in the first 3 months.*
                  </p>
                  <div className="featured-card__actions">
                     <Link href="/reviews/chase-sapphire-preferred" className="cta-button learn-more-button">
                       Learn More
                     </Link>
                     <a href="https://www.chase.com/apply?partner=YOUR_AFFILIATE_ID" className="Apply-button" target="_blank" rel="noopener sponsored">
                       Apply Now
                     </a>
                   </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="featured-card">
                <div className="featured-card__image-wrapper">
                  <Image
                    className="featured-card__image"
                    src="/ntb-amex-platinum-card.png"
                    alt="American Express Platinum Card"
                    width={400}
                    height={250}
                    loading="lazy"
                    objectFit="contain"
                  />
                </div>
                <div className="featured-card__description">
                  <h3>The Platinum Card® from American Express</h3>
                  <p>
                    Enjoy 5x points on flights & hotels booked via Amex Travel, plus luxury lounge access.*
                  </p>
                  <div className="featured-card__actions">
                     <Link href="/reviews/amex-platinum" className="cta-button learn-more-button">
                       Learn More
                     </Link>
                     <a href="https://www.americanexpress.com/apply?partner=YOUR_AFFILIATE_ID" className="Apply-button" target="_blank" rel="noopener sponsored">
                       Apply Now
                     </a>
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="featured-card">
                <div className="featured-card__image-wrapper">
                  <Image
                    className="featured-card__image"
                    src="/venturex-cg-static-card-1000x630-2.avif"
                    alt="Capital One Venture X Card"
                    width={400}
                    height={252} // Keep original aspect ratio
                    loading="lazy"
                    objectFit="contain"
                  />
                </div>
                <div className="featured-card__description">
                  <h3>Capital One Venture X</h3>
                  <p>
                    Earn unlimited 2x miles and receive a $300 travel credit annually via Capital One Travel.*
                  </p>
                   <div className="featured-card__actions">
                     <Link href="/reviews/capital-one-venture-x" className="cta-button learn-more-button">
                       Learn More
                     </Link>
                     <a href="https://www.capitalone.com/apply?partner=YOUR_AFFILIATE_ID" className="Apply-button" target="_blank" rel="noopener sponsored">
                       Apply Now
                     </a>
                  </div>
                </div>
              </div>
               {/* Add footnote indicator if needed */}
               <p className="card-footnote">*Offers subject to change. See issuer's website for current details.</p>
            </div> {/* End of .card-grid */}
          </div> {/* End of .container */}
        </section>

        {/* === ADDED Top Reviews Section (Unchanged) === */}
        <TopReviewsSection reviews={featuredReviews} />
        {/* ============================================ */}

        {/* Comparison Tool Section */}
        <section id="compare" className="content-section comparison-section" aria-labelledby="comparison-heading">
           <div className="container" style={{ textAlign: 'center' }}> {/* Keep inline style or move to CSS */}
             <h2 id="comparison-heading" className="section-title">Compare Travel Credit Cards</h2>
             <p className="section-description"> {/* Added class */}
               Ready to see how your favorite cards stack up side-by-side? Use our tool to compare features, rewards, and fees.
             </p>
             <Link href="/compare" className="cta-button submit" style={{display: 'inline-block', marginTop: '1rem'}}> {/* Keep inline style or move to CSS */}
               Go to Comparison Tool
             </Link>
           </div>
         </section>

        {/* Reviews & News Section */}
        <section className="content-section reviews-news-section" aria-labelledby="reviews-heading">
          <div className="container">
            <h2 id="reviews-heading" className="section-title">Latest Insights & Card Reviews (2025)</h2>
            <div className="reviews-grid">
              {[
                // Keep your existing array of review objects
                { img: "/AdobeStock_560041735_result.webp", alt: "Credit cards fanned out on desk", title: "Top New Travel Credit Card Offers of 2025", desc: "Breaking news on the latest card launches and exclusive sign-up bonuses.", link: "/review/top-new-travel-credit-card-offers-2025", },
                { img: "/AdobeStock_758160258_result.webp", alt: "Traveler relaxing in airport lounge chair", title: "VIP Airport Lounge Access in 2025", desc: "How to get premium perks and comfort while traveling.", link: "/review/The-Ultimate-Guide-to-Lounge-Access-in-2025-How-to-Get-VIP-Treatment-at-Airports", },
                { img: "/AdobeStock_947404358_result.webp", alt: "Family with luggage smiling at airport gate", title: "5 Family-Friendly Travel Cards for 2025", desc: "Kid-friendly perks and money-saving benefits for your family vacations.", link: "/review/Top-5-Family-Friendly-Travel-Cards-for-2025-Maximize-Points-&-Perks-with-Kids-in-Tow", },
                { img: "/AdobeStock_964630446_result.webp", alt: "Upward trending graph over credit report", title: "Boost Your Credit Score for Premium Cards", desc: "Actionable tips to qualify for the best travel rewards cards.", link: "/review/How-to-Improve-Your-Credit-Score-Fast-for-Premium-Travel-Cards", },
                { img: "/alex-bertha-Jyg7xHRmXiU-unsplash (1).jpg", alt: "Airplane window view of clouds and wing", title: "Redeem for Luxury Travel on a Budget", desc: "Stretch your points and miles for a premium travel experience.", link: "/review/2025-Points-&-Miles-Trends-Best-Ways-to-Redeem-for-Luxury-Travel-on-a-Budget", },
                { img: "/AdobeStock_265601656_result.webp", alt: "Magnifying glass over credit card details", title: "Secret Travel Card Benefits", desc: "Little-known perks you might already have but never used.", link: "/review/Hidden-Perks-Secret-Travel-Card-Benefits-You-Probably-Didnt-Know-About-in-2025", },
                { img: "/AdobeStock_446734479.webp", alt: "Wallet with several credit cards, zero dollar bill shown", title: "The Best No Annual Fee Travel Cards", desc: "Earn rewards without worrying about recurring charges.", link: "/review/The-Best-Travel-Cards-with-No-Annual-Fee-Get-Big-Rewards-for-Free", },
                { img: "/AdobeStock_241382254_result.webp", alt: "Scale weighing money against credit card perks", title: "Is a $500+ Annual Fee Worth It?", desc: "A cost-benefit breakdown of premium travel credit cards.", link: "/review/Premium-vs-Budget-Travel-Cards-Is-Paying-a-$500+Annual-Fee-Really-Worth-It", },
              ].map((review, index) => (
                <div className="card review-card" key={review.link || index}> {/* Added review-card class */}
                  <Link href={review.link || '#'} className="review-card__image-link">
                    <Image
                      className="review-card__image" // Changed class name
                      src={review.img}
                      alt={review.alt} // Keep descriptive alt text
                      width={500}
                      height={300}
                      loading="lazy"
                      objectFit="cover" // Ensure image covers the area nicely
                    />
                  </Link>
                  <div className="card-content review-card__content"> {/* Changed class name */}
                    <h3>
                      {review.link ? (
                        <Link href={review.link}>{review.title}</Link>
                      ) : (
                        review.title // Keep title clickable
                      )}
                    </h3>
                    <p>{review.desc}</p>
                    {review.link && (
                      <Link href={review.link} className="cta-button read-more-button"> {/* Changed class name */}
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
      <Footer />
    </>
  );
}

// Fetch featured reviews at build time for the homepage (Unchanged)
export async function getStaticProps() {
  const featuredReviews = getFeaturedReviews(8); // Get top 8 featured reviews

  return {
    props: {
      featuredReviews, // Pass reviews to the component
    },
    // Optional: Revalidate
    // revalidate: 3600,
  };
}