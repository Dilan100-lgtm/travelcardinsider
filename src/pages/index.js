// File: src/pages/index.js
// Optimizations for SEO, Performance, and suggestions for Premium Look incorporated

import React from 'react';
import Head from "next/head";
import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic'; // <-- Dynamic import for lazy loading

// Import static components directly (Assuming these are light or needed above-the-fold)
// Removed Header/Footer imports as they are likely handled in _app.js layout
// import Header from "../components/Header";
// import Footer from "../components/Footer";
import { getFeaturedReviews } from '@/utils/getAllReviews'; // Ensure this path is correct

// --- Dynamic Imports for Below-the-Fold Components ---
// Lazy load components that appear further down the page for better initial load time
const TopReviewsSection = dynamic(() => import('@/components/TopReviewsSection'), {
  // Optional: Add a loading skeleton component for better UX
  // loading: () => <div className="container mx-auto px-4 py-16"><p>Loading top reviews...</p></div>,
});
// Example dynamic imports for other sections if you extract them:
// const ComparisonToolSection = dynamic(() => import('@/components/ComparisonToolSection'), {
//  loading: () => <div className="container mx-auto px-4 py-16"><p>Loading comparison tool...</p></div>,
// });
// const ReviewsGridSection = dynamic(() => import('@/components/ReviewsGridSection'), {
//  loading: () => <div className="container mx-auto px-4 py-16"><p>Loading latest articles...</p></div>,
// });
// --- End Dynamic Imports ---


// Component accepts featuredReviews fetched by getStaticProps
export default function HomePage({ featuredReviews }) {

  // Data for the static reviews grid (Consider fetching this if it changes often)
  // PREMIUM LOOK SUGGESTION: Ensure these images are high-resolution and stylistically consistent.
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
        {/* --- Essential SEO Meta Tags --- */}
        <meta charSet="UTF-8" />
        <title>Best Travel Credit Cards 2025 | TravelCardInsider</title>
        <meta
          name="description"
          content="Compare the best travel credit cards of 2025. Find top rewards, points, travel perks, lounge access, and sign-up bonuses. Maximize your trips with TravelCardInsider."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://www.travelcardinsider.com/" /> {/* TODO: Update URL if needed */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />{/* TODO: Add sizes if available */}

        {/* --- Performance Hints --- */}
        {/* Preconnect to third-party origins (optional, if heavily used) */}
        {/* <link rel="preconnect" href="https://fonts.googleapis.com" /> */}
        {/* <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" /> */}

        {/* Preload Largest Contentful Paint (LCP) image - Crucial for Core Web Vitals */}
        <link
          rel="preload"
          as="image"
          href="/AdobeStock_299190080_result.webp" // TODO: Ensure this is the correct hero image URL
          // next/image handles srcset/sizes automatically if configured, otherwise add manually:
          // imagesrcset="..."
          // imagesizes="..."
        />
        {/* Preload critical fonts (WOFF2 format preferred) */}
        <link rel="preload" href="/fonts/Roboto_Condensed-Regular.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/Roboto_Condensed-Bold.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/PlayfairDisplay-Regular.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        {/* TODO: Add other critical font weights/styles if used above the fold */}

        {/* --- Social Media / Open Graph Tags --- */}
        <meta property="og:title" content="Best Travel Credit Cards 2025 | TravelCardInsider" />
        <meta property="og:description" content="Compare top travel credit cards. Find the best rewards, perks, lounge access & bonuses to maximize your 2025 trips." />
        <meta property="og:image" content="https://www.travelcardinsider.com/og-image-homepage.jpg" /> {/* TODO: Create & Use a dedicated, optimized OG image (e.g., 1200x630) */}
        <meta property="og:url" content="https://www.travelcardinsider.com/" /> {/* TODO: Update URL if needed */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="TravelCardInsider" />

        {/* --- Twitter Card Tags --- */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Best Travel Credit Cards 2025 | TravelCardInsider" />
        <meta name="twitter:description" content="Compare top travel rewards and lounge cards. Find the best bonuses & perks for 2025." />
        <meta name="twitter:image" content="https://www.travelcardinsider.com/twitter-image-homepage.jpg" /> {/* TODO: Create & Use a dedicated Twitter image (e.g., 2:1 ratio) */}
        {/* <meta name="twitter:site" content="@YourTwitterHandle" /> */} {/* TODO: Add twitter handle if available */}

        {/* --- Localization / Language Tags --- */}
        <meta name="geo.region" content="US" /> {/* TODO: Adjust if target region differs */}
        <meta name="geo.placename" content="United States" /> {/* TODO: Adjust if target region differs */}
        <meta name="language" content="en-US" />
        <meta name="distribution" content="US" /> {/* TODO: Adjust if target region differs */}
        <link rel="alternate" href="https://www.travelcardinsider.com" hrefLang="en-us" /> {/* TODO: Update URL & lang if needed */}
        {/* TODO: Consider adding <html lang="en"> in _document.js */}

        {/* --- Structured Data (JSON-LD) --- */}
        {/* IMPORTANT: Validate schema, update ALL placeholder URLs/IDs/ratings/links/dimensions */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              // Website Schema
              {
                "@type": "WebSite",
                "@id": "https://www.travelcardinsider.com/#website", // TODO: Update URL
                "url": "https://www.travelcardinsider.com/", // TODO: Update URL
                "name": "TravelCardInsider",
                "description": "Explore the best U.S. travel credit cards in 2025. Compare rewards, benefits, and find your perfect travel companion.",
                "publisher": { "@id": "https://www.travelcardinsider.com/#organization" }, // TODO: Update URL
                "inLanguage": "en-US",
                "potentialAction": {
                  "@type": "SearchAction",
                  "target": "https://www.travelcardinsider.com/search?q={search_term_string}", // TODO: Update URL/search path
                  "query-input": "required name=search_term_string"
                }
              },
              // Organization Schema
              {
                "@type": "Organization",
                "@id": "https://www.travelcardinsider.com/#organization", // TODO: Update URL
                "name": "TravelCardInsider",
                "url": "https://www.travelcardinsider.com/", // TODO: Update URL
                "logo": {
                  "@type": "ImageObject",
                  "@id": "https://www.travelcardinsider.com/#logo", // TODO: Update URL
                  "url": "https://www.travelcardinsider.com/logo-for-schema.png", // TODO: Use a valid, optimized logo URL
                  "width": 180, // TODO: Use actual logo dimensions
                  "height": 30, // TODO: Use actual logo dimensions
                  "caption": "TravelCardInsider Logo"
                },
                "sameAs": [
                  // TODO: Add real social media profile links
                  // "https://www.facebook.com/YourPage",
                  // "https://twitter.com/YourHandle"
                ]
              },
              // WebPage Schema (Homepage)
              {
                "@type": "WebPage",
                "@id": "https://www.travelcardinsider.com/#webpage", // TODO: Update URL
                "url": "https://www.travelcardinsider.com/", // TODO: Update URL
                "name": "TravelCardInsider – Best Travel Credit Cards 2025", // Match title
                "isPartOf": { "@id": "https://www.travelcardinsider.com/#website" }, // TODO: Update URL
                "about": { "@id": "https://www.travelcardinsider.com/#organization" }, // TODO: Update URL
                "primaryImageOfPage": {
                  "@type": "ImageObject",
                  "@id": "https://www.travelcardinsider.com/#heroImage", // TODO: Update URL
                  "url": "https://www.travelcardinsider.com/AdobeStock_299190080_result.webp", // TODO: Ensure URL is correct
                  "width": 1920, // TODO: Use actual hero image dimensions
                  "height": 1080, // TODO: Use actual hero image dimensions
                  "caption": "Scenic travel background representing adventure and rewards through travel credit cards" // Descriptive caption
                },
                "datePublished": "2025-01-01T00:00:00+00:00", // TODO: Adjust publish date if needed
                "dateModified": new Date().toISOString(), // Automatically updates modification date
                "inLanguage": "en-US",
                // "breadcrumb": { "@id": "https://www.travelcardinsider.com/#breadcrumb" } // Optional: Add breadcrumbs if applicable
              },
              // Product Schemas for Featured Cards (Example for CSP)
              // TODO: Add schemas for Amex Platinum, Venture X, and others if featured prominently
              {
                "@type": "Product", // Or FinancialProduct if more appropriate and supported
                "@id": "https://www.travelcardinsider.com/reviews/chase-sapphire-preferred/#product", // TODO: Update URL to review page
                "name": "Chase Sapphire Preferred® Card",
                "image": "https://www.travelcardinsider.com/sapphire_preferred_card.png", // TODO: Ensure valid URL
                "description": "Top pick for travel rewards beginners. Earn valuable Chase Ultimate Rewards® points on travel & dining. Bonus: 60,000 points after $4,000 spend in 3 months. $95 annual fee.", // Benefit-driven
                "brand": { "@type": "Brand", "name": "Chase" },
                "sku": "CSP-001", // TODO: Use actual SKU if available
                "mpn": "CSP2025", // TODO: Use actual MPN if available
                // "review": { ... }, // Add Review schema *on the product review page* itself
                "aggregateRating": { // TODO: Update ratingValue/reviewCount regularly/dynamically
                  "@type": "AggregateRating",
                  "ratingValue": "4.8",
                  "reviewCount": "255"
                },
                "offers": {
                  "@type": "Offer",
                  "url": "YOUR_AFFILIATE_LINK_CSP", // TODO: IMPORTANT: Replace with your real affiliate link
                  "price": "95", // Represents the annual fee
                  "priceCurrency": "USD",
                  "priceValidUntil": "2025-12-31", // TODO: Update expiry date
                  "availability": "https://schema.org/OnlineOnly",
                  "description": "$95 Annual Fee" // Clear fee description
                },
                "category": "Travel Credit Card" // Add category
              },
              // TODO: Add similar updated schemas for Amex Platinum and Venture X
              // Ensure "@id" is unique for each product
              // Ensure all placeholder URLs/IDs/links are replaced
            ]
          })
        }} />
      </Head>

      {/* Header and Footer are typically rendered in a Layout component in _app.js */}
      {/* <Header /> */}

      {/* -------- Main Content -------- */}
      <main>
        {/* --- Hero Section --- */}
        {/* PREMIUM LOOK SUGGESTION: Ensure hero image is high-res and evokes luxury/premium travel. Refine overlay opacity/color for optimal text readability and aesthetic. */}
        <section className="hero-section relative text-white text-center overflow-hidden min-h-[60vh] md:min-h-[70vh]" aria-labelledby="hero-heading">
          {/* Background Image using next/image */}
          <Image
            src="/AdobeStock_299190080_result.webp" // TODO: Confirm this is the desired LCP image
            alt="Scenic tropical destination representing travel rewards attainable with premium credit cards" // SEO & Descriptive Alt Text
            layout="fill"
            objectFit="cover"
            quality={85} // Adjusted quality slightly higher for hero
            priority // Crucial for LCP performance
            placeholder="blur"
            blurDataURL="/AdobeStock_299190080_result_low_quality.webp" // TODO: Ensure this low-quality placeholder exists
            className="z-0" // Ensure image is background
          />
          {/* Overlay for Text Readability */}
          {/* PREMIUM LOOK SUGGESTION: Adjust bg-opacity-40 (or color) in CSS for the right balance */}
          <div className="relative z-10 bg-black bg-opacity-40 flex flex-col items-center justify-center p-6 min-h-[60vh] md:min-h-[70vh]">
             {/* SEO: Only ONE H1 per page */}
             {/* PREMIUM LOOK SUGGESTION: Ensure font-playfair renders correctly and adjust size/line-height in CSS for elegance */}
            <h1 id="hero-heading" className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight font-playfair">
                Unlock the Best Travel Credit Cards for 2025
            </h1>
            {/* PREMIUM LOOK SUGGESTION: Ensure font size and max-width provide good readability. Check text color contrast. */}
            <p className="text-lg md:text-xl lg:text-2xl max-w-3xl mb-8">
                Compare top travel cards effortlessly. Start earning valuable points & miles for your next adventure.
            </p>
            {/* PREMIUM LOOK SUGGESTION: Refine button styles (.cta-button, .cta-button-secondary) in globals.css for a premium feel (padding, border-radius, hover effects, color). Ensure good spacing with gap-4. */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/compare" className="cta-button text-lg px-8 py-3">
                  Compare Cards Now
              </Link>
              {/* PREMIUM LOOK SUGGESTION: Ensure cta-button-secondary provides a distinct but complementary style (e.g., outline). */}
              <Link href="/card-finder" className="cta-button-secondary text-lg px-8 py-3" aria-label="Find recommended travel credit cards using our tool"> {/* Added more descriptive aria-label */}
                  Find Your Perfect Card
              </Link>
            </div>
          </div>
        </section>

        {/* --- Featured Cards Section --- */}
        {/* PREMIUM LOOK SUGGESTION: Refine section background (bg-gray-50). Consider white or a very subtle off-white. Increase spacing via py-16 lg:py-24. Ensure H2 font (size/weight) provides clear hierarchy. */}
        <section id="featured-cards" className="py-16 lg:py-24 bg-gray-50" aria-labelledby="featured-cards-heading">
          <div className="container mx-auto px-4">
            {/* SEO: Use H2 for section headings */}
            <h2 id="featured-cards-heading" className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
                Top Travel Credit Card Picks
            </h2>
            {/* PREMIUM LOOK SUGGESTION: Refine .card-grid in globals.css (gap, column definition). Ensure .featured-card styles (padding, shadow, border-radius) are polished. */}
            <div className="card-grid"> {/* Ensure this class provides adequate grid styling via globals.css */}
              {/* Card 1: Chase Sapphire Preferred */}
              {/* PREMIUM LOOK SUGGESTION: Ensure .featured-card class provides consistent, premium styling (padding, shadow, border-radius, subtle hover effect). Ensure image quality is high. */}
              <div className="featured-card"> {/* Ensure this class provides card styling via globals.css */}
                {/* Performance: Lazy load images below the fold. Ensure width/height maintain aspect ratio. */}
                <Image
                  className="featured-card__image" // PREMIUM LOOK SUGGESTION: Style this class in CSS (e.g., max-width, margin, object-fit).
                  src="/sapphire_preferred_card.png" // TODO: Confirm path
                  alt="Chase Sapphire Preferred Card" // Concise alt text
                  width={400} height={252} // Maintain aspect ratio
                  loading="lazy" // Lazy load below-the-fold images
                  quality={75}
                />
                <div className="featured-card__description"> {/* PREMIUM LOOK SUGGESTION: Style this class in CSS (text alignment, padding). */}
                  {/* SEO: Use H3 for card titles within this section */}
                  <h3 className="text-xl font-semibold mb-2">Chase Sapphire Preferred®</h3>
                  {/* PREMIUM LOOK SUGGESTION: Adjust text size/color (text-sm text-gray-600) for readability and style. Ensure consistent height/line clamping if needed. */}
                  <p className="text-sm text-gray-600 mb-4">
                    Great for beginners! Earn 60k bonus points after $4k spend in 3 months. Strong travel & dining rewards.
                  </p>
                  {/* PREMIUM LOOK SUGGESTION: Refine button styles (.cta-button, .Apply-button) and layout (gap-2, flex behavior) in CSS for polish. */}
                  <div className="flex flex-col sm:flex-row gap-2 w-full justify-center mt-auto"> {/* mt-auto pushes buttons down */}
                    <Link href="/reviews/chase-sapphire-preferred" className="cta-button w-full sm:w-auto">
                        Learn More
                    </Link>
                    {/* SEO: Add rel="noopener sponsored" for affiliate links */}
                    {/* TODO: Replace placeholder link */}
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
                  src="/ntb-amex-platinum-card.png" // TODO: Confirm path
                  alt="The Platinum Card® from American Express" // Full card name
                  width={400} height={252} // Maintain aspect ratio
                  loading="lazy"
                  quality={75}
                />
                <div className="featured-card__description">
                  <h3 className="text-xl font-semibold mb-2">The Platinum Card® from Amex</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Premium travel perks! 5x points on flights, extensive lounge access, and valuable statement credits.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-2 w-full justify-center mt-auto">
                    <Link href="/reviews/amex-platinum" className="cta-button w-full sm:w-auto">
                       Learn More
                    </Link>
                    {/* TODO: Replace placeholder link */}
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
                  src="/venturex-cg-static-card-1000x630-2.avif" // TODO: Confirm path
                  alt="Capital One Venture X Rewards Credit Card" // Full card name
                  width={400} height={252} // Maintain aspect ratio
                  loading="lazy"
                  quality={75}
                />
                <div className="featured-card__description">
                  <h3 className="text-xl font-semibold mb-2">Capital One Venture X</h3>
                    <p className="text-sm text-gray-600 mb-4">
                       Simple & rewarding! Unlimited 2x miles on everything, $300 annual travel credit, and lounge access.
                  </p>
                    <div className="flex flex-col sm:flex-row gap-2 w-full justify-center mt-auto">
                        <Link href="/reviews/capital-one-venture-x" className="cta-button w-full sm:w-auto">
                            Learn More
                        </Link>
                        {/* TODO: Replace placeholder link */}
                        <a href="YOUR_AFFILIATE_LINK_VENTUREX" className="Apply-button w-full sm:w-auto" target="_blank" rel="noopener sponsored">
                           Apply Now
                        </a>
                    </div>
                </div>
              </div>
            </div> {/* End .card-grid */}
          </div>
        </section>

         {/* --- Top Reviews Section (Dynamically Imported) --- */}
         {/* Performance: This component is lazy-loaded. Ensure it has its own optimized structure and styling. */}
         {/* PREMIUM LOOK SUGGESTION: Ensure the TopReviewsSection component has premium styling consistent with the rest of the page. */}
         <TopReviewsSection reviews={featuredReviews} />

        {/* --- Comparison Tool Section --- */}
        {/* PREMIUM LOOK SUGGESTION: Use a clean background (bg-blue-50 is okay, could be subtler like bg-gray-50 or white). Ensure typography and button styles match the premium aesthetic. Add generous padding (py-16 lg:py-24). */}
        {/* TODO: Consider extracting this to its own lazy-loaded component: <ComparisonToolSection /> */}
        <section id="compare" className="py-16 lg:py-24 bg-blue-50" aria-labelledby="comparison-heading">
           <div className="container mx-auto px-4 text-center">
             <h2 id="comparison-heading" className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
               Compare Your Favorite Cards
             </h2>
             <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                 Ready to see how your top picks stack up side-by-side? Dive into detailed comparisons.
             </p>
             {/* PREMIUM LOOK SUGGESTION: Ensure .cta-button styles are applied correctly and look premium. */}
             <Link href="/compare" className="cta-button text-lg px-8 py-3 inline-block">
               Go to Comparison Tool
             </Link>
           </div>
         </section>

        {/* --- Latest Reviews & Guides Section --- */}
        {/* PREMIUM LOOK SUGGESTION: Use consistent padding (py-16 lg:py-24). Ensure .reviews-container class provides appropriate background/styling if needed. */}
        {/* TODO: Consider extracting this to its own lazy-loaded component: <ReviewsGridSection reviews={staticReviewsData} /> */}
        <section className="py-16 lg:py-24 reviews-container" aria-labelledby="reviews-heading"> {/* Ensure .reviews-container styles are suitable */}
           <div className="container mx-auto px-4">
             <h2 id="reviews-heading" className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
                 Latest Reviews & Guides
             </h2>
             {/* PREMIUM LOOK SUGGESTION: Refine .reviews-grid (gap, columns) and .card styles (padding, shadow, border-radius, hover effects) in globals.css. Ensure image quality and aspect ratio (.review_img). */}
             <div className="reviews-grid"> {/* Ensure this class provides adequate grid styling via globals.css */}
                 {staticReviewsData.map((review, index) => (
                   // PREMIUM LOOK SUGGESTION: Ensure .card class provides consistent, premium styling. Add subtle hover effects.
                   <div className="card" key={review.link || index}> {/* Ensure this class provides card styling via globals.css */}
                     {/* Performance: Lazy load these images. Add sizes prop for optimization based on grid layout. */}
                     <Image
                       className="review_img" // PREMIUM LOOK SUGGESTION: Style this class in CSS for aspect ratio, object-fit.
                       src={review.img}
                       alt={review.alt} // SEO: Alt text already provided
                       width={500} // Provide appropriate default width
                       height={300} // Provide appropriate default height (adjust for aspect ratio)
                       // Performance: Adjust sizes based on your grid layout columns at different breakpoints
                       sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                       loading="lazy"
                       quality={75}
                     />
                     {/* PREMIUM LOOK SUGGESTION: Style .card-content for padding and flex behavior. Ensure consistent vertical rhythm. */}
                     <div className="card-content flex flex-col flex-grow p-4"> {/* Added flex classes and padding */}
                       {/* SEO: Use H3 for card titles */}
                       {/* PREMIUM LOOK SUGGESTION: Refine H3 style (size, color, hover effect). */}
                       <h3 className="text-lg font-semibold mb-2 hover:text-blue-600 transition-colors">
                         {review.link ? (
                           <Link href={review.link}>{review.title}</Link>
                         ) : (
                           review.title // Fallback if no link, though link is expected
                         )}
                       </h3>
                       {/* PREMIUM LOOK SUGGESTION: Refine paragraph style. Ensure line-clamp works cross-browser or use JS alternative. */}
                       <p className="text-sm text-gray-600 mb-4 flex-grow line-clamp-3">{review.desc}</p> {/* Added flex-grow */}
                       {review.link && (
                         // mt-auto pushes button to bottom if card content heights vary
                         <div className="mt-auto pt-2 self-start"> {/* Changed to self-start for left alignment */}
                             {/* PREMIUM LOOK SUGGESTION: Ensure .cta-button-secondary looks good at text-sm */}
                             <Link href={review.link} className="cta-button-secondary text-sm px-4 py-2">
                                Read More
                             </Link>
                         </div>
                       )}
                     </div>
                   </div>
                 ))}
             </div> {/* End .reviews-grid */}
           </div>
        </section>
      </main>

      {/* <Footer /> */}
    </>
  );
}

// --- Data Fetching ---
// Fetch featured reviews at build time using getStaticProps for SSG (Static Site Generation)
// Good for performance and SEO as the page is pre-rendered HTML.
export async function getStaticProps() {
  // Ensure getFeaturedReviews is efficient and only fetches necessary data fields.
  // TODO: Make sure the path '@/' resolves correctly based on your jsconfig.json or tsconfig.json
  const featuredReviews = getFeaturedReviews(3); // Fetch top 3 featured reviews (Adjust count as needed)

  // Return data as props to the HomePage component
  return {
    props: {
      featuredReviews,
    },
    // Optional: Incremental Static Regeneration (ISR)
    // Re-generate the page at intervals (e.g., every hour) without rebuilding the entire site.
    // Useful if review content changes frequently but not constantly.
    // revalidate: 3600, // Rebuild page max once per hour (in seconds)
  };
}