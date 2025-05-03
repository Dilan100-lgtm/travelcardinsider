// File: src/pages/index.js
// Optimizations for SEO, Performance, and suggestions for Premium Look

import React from 'react';
import Head from "next/head";
import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic'; // <-- Import dynamic for lazy loading

// Import static components directly
import Header from "../components/Header";
import Footer from "../components/Footer";
import { getFeaturedReviews } from '@/utils/getAllReviews';

// --- Dynamic Imports for Below-the-Fold Components ---
// These components will only be loaded when they are needed/scrolled into view
const TopReviewsSection = dynamic(() => import('@/components/TopReviewsSection'), {
  // Optional: Add a loading skeleton component
  // loading: () => <p>Loading reviews...</p>,
});
const ComparisonToolSection = dynamic(() => import('@/components/ComparisonToolSection'), { // <-- Assuming you create/extract this
  // loading: () => <p>Loading comparison...</p>,
});
const ReviewsGridSection = dynamic(() => import('@/components/ReviewsGridSection'), { // <-- Assuming you create/extract this
  // loading: () => <p>Loading articles...</p>,
});
// --- End Dynamic Imports ---


// Updated component definition to accept props
export default function HomePage({ featuredReviews }) {
  // Define data for the static reviews grid here or pass as props if dynamic
  // (Extracting this to a separate component is recommended)
  const staticReviewsData = [
      { img: "/AdobeStock_560041735_result.webp", alt: "Credit cards fanned out on desk showing various offers", title: "Top New Travel Credit Card Offers of 2025", desc: "Breaking news on the latest card launches and exclusive sign-up bonuses.", link: "/review/top-new-travel-credit-card-offers-2025", },
      { img: "/AdobeStock_758160258_result.webp", alt: "Traveler relaxing comfortably in an airport lounge chair", title: "VIP Airport Lounge Access in 2025", desc: "How to get premium perks and comfort while traveling.", link: "/review/The-Ultimate-Guide-to-Lounge-Access-in-2025-How-to-Get-VIP-Treatment-at-Airports", },
      { img: "/AdobeStock_947404358_result.webp", alt: "Happy family with luggage smiling at airport departure gate", title: "5 Family-Friendly Travel Cards for 2025", desc: "Kid-friendly perks and money-saving benefits for your family vacations.", link: "/review/Top-5-Family-Friendly-Travel-Cards-for-2025-Maximize-Points-&-Perks-with-Kids-in-Tow", },
      { img: "/AdobeStock_964630446_result.webp", alt: "Upward trending graph overlaid on a credit report document", title: "Boost Your Credit Score for Premium Cards", desc: "Actionable tips to qualify for the best travel rewards cards.", link: "/review/How-to-Improve-Your-Credit-Score-Fast-for-Premium-Travel-Cards", },
      { img: "/alex-bertha-Jyg7xHRmXiU-unsplash (1).jpg", alt: "Airplane window view overlooking clouds and plane wing during flight", title: "Redeem for Luxury Travel on a Budget", desc: "Stretch your points and miles for a premium travel experience.", link: "/review/2025-Points-&-Miles-Trends-Best-Ways-to-Redeem-for-Luxury-Travel-on-a-Budget", },
      { img: "/AdobeStock_265601656_result.webp", alt: "Magnifying glass hovering over fine print details of a credit card", title: "Secret Travel Card Benefits", desc: "Little-known perks you might already have but never used.", link: "/review/Hidden-Perks-Secret-Travel-Card-Benefits-You-Probably-Didnt-Know-About-in-2025", },
      { img: "/AdobeStock_446734479.webp", alt: "Open wallet showing several credit cards and a zero dollar bill", title: "The Best No Annual Fee Travel Cards", desc: "Earn rewards without worrying about recurring charges.", link: "/review/The-Best-Travel-Cards-with-No-Annual-Fee-Get-Big-Rewards-for-Free", },
      { img: "/AdobeStock_241382254_result.webp", alt: "Balancing scale weighing money against credit card perks symbol", title: "Is a $500+ Annual Fee Worth It?", desc: "A cost-benefit breakdown of premium travel credit cards.", link: "/review/Premium-vs-Budget-Travel-Cards-Is-Paying-a-$500+Annual-Fee-Really-Worth-It", },
    ];


  return (
    <>
      <Head>
        {/* SEO: Title is concise and includes primary keyword + brand */}
        <title>Best Travel Credit Cards 2025 | TravelCardInsider</title>

        {/* SEO: Good description, includes keywords */}
        <meta
          name="description"
          content="Compare the best travel credit cards of 2025. Find top rewards, points, travel perks, lounge access, and sign-up bonuses. Maximize your trips with TravelCardInsider."
        />
        {/* Performance: Preconnect to Google Fonts if used heavily (optional) */}
        {/* <link rel="preconnect" href="https://fonts.googleapis.com" /> */}
        {/* <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" /> */}

        {/* Performance: Preload Largest Contentful Paint (LCP) image */}
        <link
          rel="preload"
          as="image"
          href="/AdobeStock_299190080_result.webp" // Ensure this is the main hero image URL
          // Optional: Add imagesizes and srcset if using responsive images manually,
          // but next/image handles this if configured correctly.
          // imagesrcset="..."
          // imagesizes="..."
        />
        {/* Performance: Preload other critical resources (fonts) */}
        {/* Preload WOFF2 format first if available, it's smaller */}
        <link rel="preload" href="/fonts/Roboto_Condensed-Regular.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/Roboto_Condensed-Bold.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/PlayfairDisplay-Regular.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        {/* Add other critical font weights/styles if needed */}

        {/* SEO: Other essential meta tags */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://www.travelcardinsider.com/" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />{/* Add sizes if available */}
        {/* SEO: Open Graph Tags (ensure content is accurate and compelling) */}
        <meta property="og:title" content="Best Travel Credit Cards 2025 | TravelCardInsider" />
        <meta property="og:description" content="Compare top travel credit cards. Find the best rewards, perks, lounge access & bonuses to maximize your 2025 trips." />
        <meta property="og:image" content="https://www.travelcardinsider.com/og-image-homepage.jpg" /> {/* SEO: Use a dedicated, optimized OG image */}
        <meta property="og:url" content="https://www.travelcardinsider.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="TravelCardInsider" /> {/* SEO: Add site name */}
        {/* SEO: Twitter Card Tags (ensure content is accurate) */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Best Travel Credit Cards 2025 | TravelCardInsider" />
        <meta name="twitter:description" content="Compare top travel rewards and lounge cards. Find the best bonuses & perks for 2025." />
        <meta name="twitter:image" content="https://www.travelcardinsider.com/twitter-image-homepage.jpg" /> {/* SEO: Use a dedicated Twitter image */}
        {/* <meta name="twitter:site" content="@YourTwitterHandle" /> */} {/* SEO: Add twitter handle if available */}

        {/* SEO: Location/Language - Good */}
        <meta name="geo.region" content="US" />
        <meta name="geo.placename" content="United States" />
        <meta name="language" content="en-US" />
        <meta name="distribution" content="US" />
        <link rel="alternate" href="https://www.travelcardinsider.com" hreflang="en-us" />

        {/* SEO: Structured Data (JSON-LD) - Ensure it's accurate and complete */}
        {/* TODO: Validate this schema, update placeholder URLs/IDs/ratings */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              // --- Review and update existing schema ---
              // Website Schema (Seems OK)
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
              // Organization Schema (Seems OK, ensure logo URL is valid, add real sameAs links)
              {
                "@type": "Organization",
                "@id": "https://www.travelcardinsider.com/#organization",
                "name": "TravelCardInsider",
                "url": "https://www.travelcardinsider.com/",
                "logo": {
                  "@type": "ImageObject",
                  "@id": "https://www.travelcardinsider.com/#logo",
                  "url": "https://www.travelcardinsider.com/6.jpg", // Make sure this logo exists and is optimized
                  "width": 180, // Use actual dimensions
                  "height": 30, // Use actual dimensions
                  "caption": "TravelCardInsider Logo"
                },
                "sameAs": [
                  // "https://www.facebook.com/YourPage", // Add real social links
                  // "https://www.instagram.com/YourProfile",
                  // "https://twitter.com/YourHandle"
                ]
              },
              // WebPage Schema (Seems OK)
              {
                "@type": "WebPage",
                "@id": "https://www.travelcardinsider.com/#webpage",
                "url": "https://www.travelcardinsider.com/",
                "name": "TravelCardInsider – Best Travel Credit Cards 2025", // Consistent with title
                "isPartOf": { "@id": "https://www.travelcardinsider.com/#website" },
                "about": { "@id": "https://www.travelcardinsider.com/#organization" },
                "primaryImageOfPage": {
                  "@type": "ImageObject",
                  "@id": "https://www.travelcardinsider.com/#heroImage",
                  "url": "https://www.travelcardinsider.com/AdobeStock_299190080_result.webp", // Ensure URL is correct
                  "width": 1920, // Use actual dimensions
                  "height": 1080, // Use actual dimensions
                  "caption": "Scenic travel background representing adventure and rewards" // More descriptive caption
                },
                "datePublished": "2025-01-01T00:00:00+00:00", // Adjust if needed
                "dateModified": new Date().toISOString(),
                "inLanguage": "en-US",
                 // SEO: Add breadcrumbs if applicable for deeper pages, maybe not needed for homepage
                 // "breadcrumb": { "@id": "https://www.travelcardinsider.com/#breadcrumb" }
              },
              // Product Schemas (Ensure all details are accurate, replace placeholders)
              {
                "@type": "Product", // Changed from FinancialProduct for broader compatibility, check if FinancialProduct suits better
                "@id": "https://www.travelcardinsider.com/reviews/chase-sapphire-preferred/#product", // Link to review page + #product
                "name": "Chase Sapphire Preferred® Card",
                "image": "https://www.travelcardinsider.com/sapphire_preferred_card.png", // Ensure valid URL
                "description": "Top pick for travel rewards beginners. Earn valuable Chase Ultimate Rewards® points on travel & dining. Bonus: 60,000 points after $4,000 spend in 3 months. $95 annual fee.", // More benefit-driven description
                "brand": { "@type": "Brand", "name": "Chase" },
                "sku": "CSP-001", // Example SKU
                "mpn": "CSP2025", // Example MPN
                // SEO: Include review schema if you have reviews on the *product page*
                // "review": { ... },
                "aggregateRating": { // Ensure ratingValue/reviewCount are updated regularly
                  "@type": "AggregateRating",
                  "ratingValue": "4.8",
                  "reviewCount": "255" // Keep updated
                },
                "offers": {
                  "@type": "Offer",
                  "url": "https://www.chase.com/apply?partner=YOUR_AFFILIATE_ID", // IMPORTANT: Replace with your real affiliate link
                  "price": "95",
                  "priceCurrency": "USD",
                  "priceValidUntil": "2025-12-31",
                  "availability": "https://schema.org/OnlineOnly", // More specific availability
                  "description": "$95 Annual Fee" // Clearer description
                },
                // SEO: Add identifier (e.g., category) if relevant
                // "category": "Travel Credit Card"
              },
              // Add similar updated schemas for Amex Platinum and Venture X
              // Ensure "@id" is unique and descriptive for each product
              // Ensure all placeholder URLs/IDs are replaced
              // ... Other product schemas ...
            ]
          })
        }} />
        {/* Note: Consider adding HTML lang="en" attribute in a custom _document.js file */}
      </Head>

      {/* Use layout component from _app.js which includes Header */}
      {/* Removed explicit <Header /> and <Footer /> calls here */}

      {/* -------- Main Content -------- */}
      <main>
        {/* --- Hero Section --- */}
        {/* SEO: Use appropriate heading levels. h1 is primary for the page. */}
        {/* Premium Look: Ensure text is readable over background. Consider overlay/container */}
        <section className="hero-section relative text-white text-center overflow-hidden" aria-labelledby="hero-heading">
            {/* Background Image - Using next/image for optimization */}
            <Image
              src="/AdobeStock_299190080_result.webp"
              alt="Scenic tropical beach with palm trees and mountains, representing travel rewards" // SEO: More descriptive alt text
              layout="fill"
              objectFit="cover"
              quality={80} // Slightly reduced quality for faster load
              priority // LCP Element
              placeholder="blur"
              blurDataURL="/AdobeStock_299190080_result_low_quality.webp" // Ensure this low quality placeholder exists
              className="z-0" // Ensure image is background
            />
            {/* Overlay for text readability */}
            <div className="relative z-10 bg-black bg-opacity-40 min-h-[60vh] md:min-h-[70vh] flex flex-col items-center justify-center p-6">
                {/* SEO: Only ONE H1 per page. */}
                <h1 id="hero-heading" className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight font-playfair"> {/* Use Playfair for heading? Check globals.css */}
                    Unlock the Best Travel Credit Cards for 2025
                </h1>
                <p className="text-lg md:text-xl lg:text-2xl max-w-3xl mb-8">
                    Compare top travel cards effortlessly. Start earning valuable points & miles for your next adventure.
                </p>
                {/* Premium Look: Ensure buttons stand out */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/compare" className="cta-button text-lg px-8 py-3"> {/* Adjusted class, check globals.css */}
                      Compare Cards Now
                  </Link>
                   <Link href="/card-finder" className="cta-button-secondary text-lg px-8 py-3" aria-label="Find recommended travel credit cards"> {/* Added secondary style */}
                      Find Your Perfect Card
                  </Link>
                </div>
            </div>
        </section>


        {/* --- Featured Cards Section --- */}
        {/* Premium Look: Improve card styling (padding, shadow, hover effects in globals.css) */}
        <section id="featured-cards" className="py-16 lg:py-24 bg-gray-50" aria-labelledby="featured-cards-heading">
          <div className="container mx-auto px-4">
            {/* SEO: Use H2 for section headings */}
            <h2 id="featured-cards-heading" className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
                Top Travel Credit Card Picks
            </h2>
            {/* Premium Look: Use card-grid class from globals.css, ensure it provides good spacing/layout */}
            <div className="card-grid">
              {/* Card 1: Chase Sapphire Preferred */}
              {/* Premium Look: Use featured-card class. Ensure consistency. */}
              <div className="featured-card">
                {/* Performance: Add sizes prop if layout causes different image sizes */}
                <Image
                  className="featured-card__image"
                  src="/sapphire_preferred_card.png"
                  alt="Chase Sapphire Preferred Card" // SEO: Simpler, descriptive alt
                  width={400} height={252} // Use correct aspect ratio
                  priority={false} // Likely below the fold unless grid is 1 column on mobile
                  loading="lazy" // Lazy load images below the fold
                />
                <div className="featured-card__description">
                  <h3 className="text-xl font-semibold mb-2">Chase Sapphire Preferred®</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Great for beginners! Earn 60k bonus points after $4k spend in 3 months. Strong travel & dining rewards.
                  </p>
                  {/* Premium Look: Ensure buttons are well-styled and spaced */}
                  <div className="flex flex-col sm:flex-row gap-2 w-full justify-center">
                    <Link href="/reviews/chase-sapphire-preferred" className="cta-button w-full sm:w-auto">
                        Learn More
                    </Link>
                    {/* SEO: Add rel="noopener sponsored" if it's an affiliate link */}
                    <a href="YOUR_AFFILIATE_LINK_CSP" className="Apply-button w-full sm:w-auto" target="_blank" rel="noopener sponsored">
                      Apply Now
                    </a>
                  </div>
                </div>
              </div>

              {/* Card 2: Amex Platinum */}
              <div className="featured-card">
                <Image
                  className="featured-card__image"
                  src="/ntb-amex-platinum-card.png"
                  alt="The Platinum Card® from American Express" // SEO: Use full card name
                  width={400} height={252} // Use correct aspect ratio
                  loading="lazy"
                />
                <div className="featured-card__description">
                  <h3 className="text-xl font-semibold mb-2">The Platinum Card® from Amex</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Premium travel perks! 5x points on flights, extensive lounge access, and valuable statement credits.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-2 w-full justify-center">
                    <Link href="/reviews/amex-platinum" className="cta-button w-full sm:w-auto">
                       Learn More
                    </Link>
                    <a href="YOUR_AFFILIATE_LINK_AMEXPLAT" className="Apply-button w-full sm:w-auto" target="_blank" rel="noopener sponsored">
                      Apply Now
                    </a>
                  </div>
                </div>
              </div>

              {/* Card 3: Capital One Venture X */}
              <div className="featured-card">
                <Image
                  className="featured-card__image"
                  src="/venturex-cg-static-card-1000x630-2.avif"
                  alt="Capital One Venture X Rewards Credit Card" // SEO: Use full card name
                  width={400} height={252} // Use correct aspect ratio
                  loading="lazy"
                />
                <div className="featured-card__description">
                  <h3 className="text-xl font-semibold mb-2">Capital One Venture X</h3>
                   <p className="text-sm text-gray-600 mb-4">
                     Simple & rewarding! Unlimited 2x miles on everything, $300 annual travel credit, and lounge access.
                  </p>
                   <div className="flex flex-col sm:flex-row gap-2 w-full justify-center">
                      <Link href="/reviews/capital-one-venture-x" className="cta-button w-full sm:w-auto">
                         Learn More
                      </Link>
                      <a href="YOUR_AFFILIATE_LINK_VENTUREX" className="Apply-button w-full sm:w-auto" target="_blank" rel="noopener sponsored">
                        Apply Now
                      </a>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </section>

         {/* --- Top Reviews Section (Dynamically Imported) --- */}
         {/* Performance: This component is lazy-loaded */}
         <TopReviewsSection reviews={featuredReviews} />

        {/* --- Comparison Tool Section (Dynamically Imported) --- */}
        {/* Performance: This component is lazy-loaded */}
        {/* TODO: Create this component if not already done */}
        {/* <ComparisonToolSection /> */}
         <section id="compare" className="py-16 lg:py-24 bg-blue-50" aria-labelledby="comparison-heading">
           <div className="container mx-auto px-4 text-center">
             <h2 id="comparison-heading" className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
                Compare Your Favorite Cards
             </h2>
             <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                 Ready to see how your top picks stack up side-by-side? Dive into detailed comparisons.
             </p>
             <Link href="/compare" className="cta-button text-lg px-8 py-3 inline-block">
                Go to Comparison Tool
             </Link>
           </div>
         </section>

        {/* --- Reviews Section (Dynamically Imported) --- */}
        {/* Performance: This component is lazy-loaded */}
        {/* TODO: Create this component if not already done, pass data */}
        {/* <ReviewsGridSection reviews={staticReviewsData} /> */}
        <section className="py-16 lg:py-24 reviews-container" aria-labelledby="reviews-heading">
           <div className="container mx-auto px-4">
              <h2 id="reviews-heading" className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
                  Latest Reviews & Guides
              </h2>
              {/* Premium Look: Use reviews-grid class. Ensure cards have good styling */}
              <div className="reviews-grid">
                  {staticReviewsData.map((review, index) => (
                    // Premium Look: Use card class with consistent styling
                    <div className="card" key={review.link || index}>
                      {/* Performance: Lazy load these images */}
                      <Image
                        className="review_img" // Ensure this class handles aspect ratio / object-fit
                        src={review.img}
                        alt={review.alt} // SEO: Alt text already provided, ensure descriptive
                        width={500} // Provide appropriate default width
                        height={300} // Provide appropriate default height
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Performance: Example sizes, adjust based on grid layout
                        loading="lazy"
                      />
                      <div className="card-content">
                        {/* SEO: Use H3 for card titles within the section */}
                        <h3 className="text-lg font-semibold mb-2 hover:text-blue-600 transition-colors">
                          {review.link ? (
                            <Link href={review.link}>{review.title}</Link>
                          ) : (
                            review.title // Should ideally always have a link
                          )}
                        </h3>
                        <p className="text-sm text-gray-600 mb-4 line-clamp-3">{review.desc}</p> {/* Ensure line-clamp works or use JS */}
                        {review.link && (
                          <div className="mt-auto pt-2"> {/* Push button to bottom */}
                             <Link href={review.link} className="cta-button-secondary text-sm px-4 py-2">
                              Read More
                            </Link>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
              </div>
           </div>
        </section>
      </main>

      {/* Footer is rendered via _app.js */}
    </>
  );
}

// Fetch featured reviews at build time (Good for performance/SEO)
export async function getStaticProps() {
  // Ensure getFeaturedReviews is efficient and fetches necessary data
  const featuredReviews = getFeaturedReviews(8); // Get top 8 featured reviews

  return {
    props: {
      featuredReviews, // Pass reviews to the component
    },
    // Optional: Set revalidation interval if content changes frequently
    // revalidate: 3600, // Rebuild page every hour (example)
  };
}