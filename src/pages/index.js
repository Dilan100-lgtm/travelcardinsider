// File: src/pages/index.js
// FINAL - Adjusted for background image covering content sections

import React from 'react';
import Head from "next/head";
import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';

import { getFeaturedReviews } from '@/utils/getAllReviews'; // Ensure this path is correct

// --- Dynamic Imports ---
const TopReviewsSection = dynamic(() => import('@/components/TopReviewsSection'), {
  // loading: () => <div className="container mx-auto px-4 py-16"><p>Loading top reviews...</p></div>,
});
// const ComparisonToolSection = dynamic(() => import('@/components/ComparisonToolSection'), {});
// const ReviewsGridSection = dynamic(() => import('@/components/ReviewsGridSection'), {});

export default function HomePage({ featuredReviews }) {

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
        <meta charSet="UTF-8" />
        <title>Best Travel Credit Cards 2025 | TravelCardInsider</title>
        <meta name="description" content="Compare the best travel credit cards of 2025. Find top rewards, points, travel perks, lounge access, and sign-up bonuses. Maximize your trips with TravelCardInsider."/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://www.travelcardinsider.com/" /> {/* TODO: Update URL */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" /> {/* TODO: Add sizes */}
        <link rel="preload" as="image" href="/AdobeStock_299190080_result.webp"/> {/* TODO: Verify image path */}
        <link rel="preload" href="/fonts/Roboto_Condensed-Regular.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/Roboto_Condensed-Bold.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/PlayfairDisplay-Regular.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <meta property="og:title" content="Best Travel Credit Cards 2025 | TravelCardInsider" />
        <meta property="og:description" content="Compare top travel credit cards. Find the best rewards, perks, lounge access & bonuses to maximize your 2025 trips." />
        <meta property="og:image" content="https://www.travelcardinsider.com/og-image-homepage.jpg" /> {/* TODO: Update OG image */}
        <meta property="og:url" content="https://www.travelcardinsider.com/" /> {/* TODO: Update URL */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="TravelCardInsider" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Best Travel Credit Cards 2025 | TravelCardInsider" />
        <meta name="twitter:description" content="Compare top travel rewards and lounge cards. Find the best bonuses & perks for 2025." />
        <meta name="twitter:image" content="https://www.travelcardinsider.com/twitter-image-homepage.jpg" /> {/* TODO: Update Twitter image */}
        {/* <meta name="twitter:site" content="@YourTwitterHandle" /> */}{/* TODO: Add Twitter handle */}
        <meta name="geo.region" content="US" /> {/* TODO: Update region */}
        <meta name="geo.placename" content="United States" /> {/* TODO: Update placename */}
        <meta name="language" content="en-US" />
        <meta name="distribution" content="US" /> {/* TODO: Update distribution */}
        <link rel="alternate" href="https://www.travelcardinsider.com" hrefLang="en-us" /> {/* TODO: Update URL/lang */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@graph": [ { "@type": "WebSite", "@id": "https://www.travelcardinsider.com/#website", "url": "https://www.travelcardinsider.com/", "name": "TravelCardInsider", "description": "Explore the best U.S. travel credit cards in 2025. Compare rewards, benefits, and find your perfect travel companion.", "publisher": { "@id": "https://www.travelcardinsider.com/#organization" }, "inLanguage": "en-US", "potentialAction": { "@type": "SearchAction", "target": "https://www.travelcardinsider.com/search?q={search_term_string}", "query-input": "required name=search_term_string" } }, { "@type": "Organization", "@id": "https://www.travelcardinsider.com/#organization", "name": "TravelCardInsider", "url": "https://www.travelcardinsider.com/", "logo": { "@type": "ImageObject", "@id": "https://www.travelcardinsider.com/#logo", "url": "https://www.travelcardinsider.com/logo-for-schema.png", "width": 180, "height": 30, "caption": "TravelCardInsider Logo" }, "sameAs": [ /* TODO: Add social links */ ] }, { "@type": "WebPage", "@id": "https://www.travelcardinsider.com/#webpage", "url": "https://www.travelcardinsider.com/", "name": "TravelCardInsider – Best Travel Credit Cards 2025", "isPartOf": { "@id": "https://www.travelcardinsider.com/#website" }, "about": { "@id": "https://www.travelcardinsider.com/#organization" }, "primaryImageOfPage": { "@type": "ImageObject", "@id": "https://www.travelcardinsider.com/#heroImage", "url": "https://www.travelcardinsider.com/AdobeStock_299190080_result.webp", "width": 1920, "height": 1080, "caption": "Scenic travel background representing adventure and rewards through travel credit cards" }, "datePublished": "2025-01-01T00:00:00+00:00", "dateModified": new Date().toISOString(), "inLanguage": "en-US", }, { "@type": "Product", "@id": "https://www.travelcardinsider.com/reviews/chase-sapphire-preferred/#product", "name": "Chase Sapphire Preferred® Card", "image": "https://www.travelcardinsider.com/sapphire_preferred_card.png", "description": "Top pick for travel rewards beginners. Earn valuable Chase Ultimate Rewards® points on travel & dining. Bonus: 60,000 points after $4,000 spend in 3 months. $95 annual fee.", "brand": { "@type": "Brand", "name": "Chase" }, "sku": "CSP-001", "mpn": "CSP2025", "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.8", "reviewCount": "255" /* TODO: Update dynamically */ }, "offers": { "@type": "Offer", "url": "YOUR_AFFILIATE_LINK_CSP" /* TODO: Add link */, "price": "95", "priceCurrency": "USD", "priceValidUntil": "2025-12-31", "availability": "https://schema.org/OnlineOnly", "description": "$95 Annual Fee" }, "category": "Travel Credit Card" }, /* TODO: Add other product schemas */ ] })}} />
      </Head>

      {/* Assumes Header/Footer are in _app.js Layout */}
      <main className="relative"> {/* Sets positioning context for children */}

        {/* --- Background Image Container --- */}
        {/* Positioned fixed behind all content via CSS */}
        <div className="page-background-image-container">
            <Image
                src="/AdobeStock_299190080_result.webp" // TODO: Verify image path
                alt="" // Decorative background image
                layout="fill"
                objectFit="cover"
                quality={80}
                priority
                placeholder="blur"
                blurDataURL="/AdobeStock_299190080_result_low_quality.webp" // TODO: Verify placeholder path
                aria-hidden="true"
            />
        </div>

        {/* --- Main Content Wrapper --- */}
        {/* Sits above the background image (z-index: 1) */}
        <div className="main-content-wrapper">

            {/* --- Hero Content Section (Over the Background) --- */}
            <div className="hero-content-container text-white text-center">
                 <div className="hero-content-overlay"> {/* Optional inner overlay */}
                    <h1 id="hero-heading" className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight font-playfair">
                        Unlock the Best Travel Credit Cards for 2025
                    </h1>
                    <p className="text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto mb-8">
                        Compare top travel cards effortlessly. Start earning valuable points & miles for your next adventure.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Link href="/compare" className="cta-button text-lg px-8 py-3">
                          Compare Cards Now
                      </Link>
                      <Link href="/card-finder" className="cta-button-secondary text-lg px-8 py-3" aria-label="Find recommended travel credit cards using our tool">
                          Find Your Perfect Card
                      </Link>
                    </div>
                </div>
            </div>

            {/* --- Featured Cards Section --- */}
            {/* Requires a solid background color (e.g., bg-gray-50) */}
            <section id="featured-cards" className="relative z-10 py-16 lg:py-24 bg-gray-50" aria-labelledby="featured-cards-heading">
                <div className="container mx-auto px-4">
                    <h2 id="featured-cards-heading" className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
                        Top Travel Credit Card Picks
                    </h2>
                    <div className="card-grid">
                        {/* Card 1: Chase Sapphire Preferred */}
                        <div className="featured-card">
                            <Image className="featured-card__image" src="/sapphire_preferred_card.png" alt="Chase Sapphire Preferred Card" width={400} height={252} loading="lazy" quality={75} />
                            <div className="featured-card__description">
                                <h3 className="text-xl font-semibold mb-2">Chase Sapphire Preferred®</h3>
                                <p className="text-sm text-gray-600 mb-4">Great for beginners! Earn 60k bonus points after $4k spend in 3 months. Strong travel & dining rewards.</p>
                                <div className="flex flex-col sm:flex-row gap-2 w-full justify-center mt-auto">
                                    <Link href="/reviews/chase-sapphire-preferred" className="cta-button w-full sm:w-auto">Learn More</Link>
                                    <a href="YOUR_AFFILIATE_LINK_CSP" className="Apply-button w-full sm:w-auto" target="_blank" rel="noopener sponsored">Apply Now</a> {/* TODO: Add link */}
                                </div>
                            </div>
                        </div>
                        {/* Card 2: Amex Platinum */}
                        <div className="featured-card">
                            <Image className="featured-card__image" src="/ntb-amex-platinum-card.png" alt="The Platinum Card® from American Express" width={400} height={252} loading="lazy" quality={75} />
                            <div className="featured-card__description">
                                <h3 className="text-xl font-semibold mb-2">The Platinum Card® from Amex</h3>
                                <p className="text-sm text-gray-600 mb-4">Premium travel perks! 5x points on flights, extensive lounge access, and valuable statement credits.</p>
                                <div className="flex flex-col sm:flex-row gap-2 w-full justify-center mt-auto">
                                    <Link href="/reviews/amex-platinum" className="cta-button w-full sm:w-auto">Learn More</Link>
                                    <a href="YOUR_AFFILIATE_LINK_AMEXPLAT" className="Apply-button w-full sm:w-auto" target="_blank" rel="noopener sponsored">Apply Now</a> {/* TODO: Add link */}
                                </div>
                            </div>
                        </div>
                        {/* Card 3: Capital One Venture X */}
                        <div className="featured-card">
                            <Image className="featured-card__image" src="/venturex-cg-static-card-1000x630-2.avif" alt="Capital One Venture X Rewards Credit Card" width={400} height={252} loading="lazy" quality={75} />
                            <div className="featured-card__description">
                                <h3 className="text-xl font-semibold mb-2">Capital One Venture X</h3>
                                <p className="text-sm text-gray-600 mb-4">Simple & rewarding! Unlimited 2x miles on everything, $300 annual travel credit, and lounge access.</p>
                                <div className="flex flex-col sm:flex-row gap-2 w-full justify-center mt-auto">
                                    <Link href="/reviews/capital-one-venture-x" className="cta-button w-full sm:w-auto">Learn More</Link>
                                    <a href="YOUR_AFFiliate_LINK_VENTUREX" className="Apply-button w-full sm:w-auto" target="_blank" rel="noopener sponsored">Apply Now</a> {/* TODO: Add link */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Top Reviews Section --- */}
            {/* Needs background color defined in its component or wrapper CSS */}
            <div className="relative z-10 top-reviews-section-wrapper"> {/* Add wrapper class for styling */}
                <TopReviewsSection reviews={featuredReviews} />
            </div>

            {/* --- Comparison Tool Section --- */}
            {/* Requires a solid background color (e.g., bg-blue-50) */}
            <section id="compare" className="relative z-10 py-16 lg:py-24 bg-blue-50" aria-labelledby="comparison-heading">
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

            {/* --- Latest Reviews & Guides Section --- */}
            {/* Requires a solid background color (e.g., bg-white) */}
            <section className="reviews-container relative z-10 py-16 lg:py-24 bg-white" aria-labelledby="reviews-heading">
                <div className="container mx-auto px-4">
                    <h2 id="reviews-heading" className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
                        Latest Reviews & Guides
                    </h2>
                    <div className="reviews-grid">
                        {staticReviewsData.map((review, index) => (
                        <div className="card" key={review.link || index}>
                            <Image className="review_img" src={review.img} alt={review.alt} width={500} height={300} sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" loading="lazy" quality={75} />
                            <div className="card-content flex flex-col flex-grow p-4">
                                <h3 className="text-lg font-semibold mb-2 hover:text-blue-600 transition-colors">
                                    {review.link ? (<Link href={review.link}>{review.title}</Link>) : (review.title)}
                                </h3>
                                <p className="text-sm text-gray-600 mb-4 flex-grow line-clamp-3">{review.desc}</p>
                                {review.link && (
                                    <div className="mt-auto pt-2 self-start">
                                        <Link href={review.link} className="cta-button-secondary text-sm px-4 py-2">Read More</Link>
                                    </div>
                                )}
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
            </section>

        </div> {/* End .main-content-wrapper */}
      </main>
    </>
  );
}

// --- Data Fetching ---
export async function getStaticProps() {
  // Ensure getFeaturedReviews only fetches needed data
  const featuredReviews = getFeaturedReviews(3); // Fetch top 3 reviews
  return {
    props: {
      featuredReviews,
    },
    // revalidate: 3600, // Optional: Enable ISR if content updates frequently
  };
}