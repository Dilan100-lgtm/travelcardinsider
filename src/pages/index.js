import React from 'react';
import Head from "next/head";
import Image from 'next/image';
import Link from 'next/link';
// import { getFeaturedReviews } from '@/utils/getAllReviews'; // Keep if you fetch reviews dynamically

// --- Placeholder Data (Replace with dynamic fetching if needed) ---
const featuredCardsData = [
  {
    id: 'csp',
    img: '/sapphire_preferred_card.png', // Replace with actual path
    alt: 'Chase Sapphire Preferred Card',
    title: 'Chase Sapphire Preferred® Card',
    desc: 'Top pick for travel rewards beginners. Excellent points value.',
    bonus: 'Earn 60,000 bonus points after spending $4,000 in 3 months.',
    reviewLink: '/reviews/chase-sapphire-preferred', // Replace
    applyLink: 'YOUR_AFFILIATE_LINK_CSP' // Replace
  },
  {
    id: 'amexplat',
    img: '/ntb-amex-platinum-card.png', // Replace
    alt: 'The Platinum Card® from American Express',
    title: 'The Platinum Card® from Amex',
    desc: 'Premium travel perks & extensive lounge access worldwide.',
    bonus: 'Earn 80,000 Membership Rewards® points after $6,000 spend in 6 months.',
    reviewLink: '/reviews/amex-platinum', // Replace
    applyLink: 'YOUR_AFFILIATE_LINK_AMEXPLAT' // Replace
  },
  {
    id: 'venturex',
    img: '/venturex-cg-static-card-1000x630-2.avif', // Replace
    alt: 'Capital One Venture X Rewards Credit Card',
    title: 'Capital One Venture X',
    desc: 'Simple, powerful rewards with premium travel credits.',
    bonus: 'Earn 75,000 bonus miles after spending $4,000 in 3 months.',
    reviewLink: '/reviews/capital-one-venture-x', // Replace
    applyLink: 'YOUR_AFFILIATE_LINK_VENTUREX' // Replace
  },
    {
    id: 'amexgold',
    img: '/placeholder-card-image.png', // Replace with actual path
    alt: 'American Express Gold Card',
    title: 'American Express® Gold Card',
    desc: 'Excellent rewards on dining and groceries globally.',
    bonus: 'Earn 60,000 Membership Rewards® points after $4,000 spend in 6 months.',
    reviewLink: '/reviews/amex-gold', // Replace
    applyLink: 'YOUR_AFFILIATE_LINK_AMEXGOLD' // Replace
  },
];

// Your original 8 reviews data preserved
const reviewsData = [
    { img: "/AdobeStock_560041735_result.webp", alt: "Credit cards fanned out on desk showing various offers", title: "Top New Travel Credit Card Offers of 2025", desc: "Breaking news on the latest card launches and exclusive sign-up bonuses.", link: "/review/top-new-travel-credit-card-offers-2025" },
    { img: "/AdobeStock_758160258_result.webp", alt: "Traveler relaxing comfortably in an airport lounge chair", title: "VIP Airport Lounge Access in 2025", desc: "How to get premium perks and comfort while traveling.", link: "/review/The-Ultimate-Guide-to-Lounge-Access-in-2025-How-to-Get-VIP-Treatment-at-Airports" },
    { img: "/AdobeStock_947404358_result.webp", alt: "Happy family with luggage smiling at airport departure gate", title: "5 Family-Friendly Travel Cards for 2025", desc: "Kid-friendly perks and money-saving benefits for your family vacations.", link: "/review/Top-5-Family-Friendly-Travel-Cards-for-2025-Maximize-Points-&-Perks-with-Kids-in-Tow" },
    { img: "/AdobeStock_964630446_result.webp", alt: "Upward trending graph overlaid on a credit report document", title: "Boost Your Credit Score for Premium Cards", desc: "Actionable tips to qualify for the best travel rewards cards.", link: "/review/How-to-Improve-Your-Credit-Score-Fast-for-Premium-Travel-Cards" },
    { img: "/alex-bertha-Jyg7xHRmXiU-unsplash (1).jpg", alt: "Airplane window view overlooking clouds and plane wing during flight", title: "Redeem for Luxury Travel on a Budget", desc: "Stretch your points and miles for a premium travel experience.", link: "/review/2025-Points-&-Miles-Trends-Best-Ways-to-Redeem-for-Luxury-Travel-on-a-Budget" },
    { img: "/AdobeStock_265601656_result.webp", alt: "Magnifying glass hovering over fine print details of a credit card", title: "Secret Travel Card Benefits", desc: "Little-known perks you might already have but never used.", link: "/review/Hidden-Perks-Secret-Travel-Card-Benefits-You-Probably-Didnt-Know-About-in-2025" },
    { img: "/AdobeStock_446734479.webp", alt: "Open wallet showing several credit cards and a zero dollar bill", title: "The Best No Annual Fee Travel Cards", desc: "Earn rewards without worrying about recurring charges.", link: "/review/The-Best-Travel-Cards-with-No-Annual-Fee-Get-Big-Rewards-for-Free" },
    { img: "/AdobeStock_241382254_result.webp", alt: "Balancing scale weighing money against credit card perks symbol", title: "Is a $500+ Annual Fee Worth It?", desc: "A cost-benefit breakdown of premium travel credit cards.", link: "/review/Premium-vs-Budget-Travel-Cards-Is-Paying-a-$500+Annual-Fee-Really-Worth-It" },
];


export default function HomePage() {
  // Assuming you might fetch reviews dynamically later
  // const featuredReviews = getFeaturedReviews(8); // Fetch 8 reviews if needed

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <title>Best Travel Credit Cards 2025 | Compare Rewards | TravelCardInsider</title>
        <meta name="description" content="Find & compare the best travel credit cards of 2025. Maximize rewards, points, lounge access & perks. Expert reviews & tools from TravelCardInsider."/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* Use Inter and Playfair Display from Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@700&display=swap" rel="stylesheet" />

        <link rel="canonical" href="https://www.travelcardinsider.com/" /> {/* CONFIRM URL */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" /> {/* Add sizes */}
        <meta property="og:title" content="Best Travel Credit Cards 2025 | TravelCardInsider" />
        <meta property="og:description" content="Compare top travel credit cards. Find the best rewards, perks, lounge access & bonuses to maximize your 2025 trips." />
        <meta property="og:image" content="https://www.travelcardinsider.com/og-image-homepage-premium.jpg" /> {/* UPDATE OG image */}
        <meta property="og:url" content="https://www.travelcardinsider.com/" /> {/* CONFIRM URL */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="TravelCardInsider" />
        <meta name="twitter:card" content="summary_large_image" />
        {/* Add other meta tags: Twitter, Schema.org (JSON-LD), etc. following best practices */}
         <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@graph": [ /* ADD YOUR SCHEMA HERE */ ] })}} />
      </Head>

      {/* Main content area - pt-14 assumes 3.5rem header height */}
      <main className="pt-14"> {/* Adjust pt value based on your final header height */}

        {/* --- 1. Hero Section --- */}
        <section id="hero" className="relative w-full h-[70vh] min-h-[500px] flex items-center justify-center text-white overflow-hidden">
          {/* Background Image */}
          <Image
            src="/AdobeStock_299190080_result.webp" // Replace with your premium travel background
            alt="Scenic travel destination background"
            layout="fill"
            objectFit="cover"
            quality={85}
            priority // Load hero image first
            className="z-0"
            placeholder="blur"
            blurDataURL="/AdobeStock_299190080_result_low_quality.webp" // Low quality placeholder
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/50 z-10"></div>

          {/* Hero Content */}
          <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 style={{ fontFamily: 'var(--font-family-hero-heading)' }} className="text-4xl sm:text-5xl lg:text-6xl font-bold !leading-tight mb-4 text-shadow-md">
              Unlock Your Next Adventure
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl max-w-3xl mx-auto mb-8 text-gray-200 text-shadow-sm">
              Compare the best travel credit cards of 2025. Find exclusive rewards, perks, and bonuses tailored for you.
            </p>
            <Link href="/compare" className="inline-block bg-[#B8860B] hover:bg-[#a0740a] text-white text-lg font-semibold py-3 px-8 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#B8860B]">
                Compare Travel Cards
            </Link>
          </div>
        </section>

        {/* --- Optional: Trust Badges / Featured In --- */}
        <section id="featured-in" className="py-12 bg-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-6">
              Trusted by savvy travelers & featured in
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 md:gap-x-12 lg:gap-x-16">
              {/* Replace with actual logos */}
              <img src="/placeholder-logo-1.svg" alt="Featured Publication 1" className="h-6 md:h-7 featured-logo" />
              <img src="/placeholder-logo-2.svg" alt="Featured Publication 2" className="h-6 md:h-7 featured-logo" />
              <img src="/placeholder-logo-3.svg" alt="Featured Publication 3" className="h-6 md:h-7 featured-logo" />
              <img src="/placeholder-logo-4.svg" alt="Featured Publication 4" className="h-6 md:h-7 featured-logo" />
              <img src="/placeholder-logo-5.svg" alt="Featured Publication 5" className="h-6 md:h-7 featured-logo" />
            </div>
          </div>
        </section>

        {/* --- 2. Top 4 Featured Travel Credit Cards --- */}
        <section id="featured-cards" className="py-16 lg:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#0F2A4B]">
              Editor's Top Travel Card Picks
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {featuredCardsData.map((card) => (
                <div key={card.id} className="bg-white border border-gray-200 rounded-xl shadow-soft hover:shadow-large transition-shadow duration-300 flex flex-col overflow-hidden">
                  <div className="p-6 flex justify-center">
                    <Image
                      src={card.img}
                      alt={card.alt}
                      width={280}
                      height={176} // Adjust aspect ratio as needed
                      objectFit="contain"
                      quality={75}
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow bg-gray-50/50">
                    <h3 className="text-lg font-semibold mb-2 text-[#1A3F7A]">{card.title}</h3>
                    <p className="text-sm text-gray-600 mb-3 flex-grow">{card.desc}</p>
                    <div className="text-sm text-gray-800 bg-yellow-100/50 border border-yellow-200 rounded p-2 mb-4">
                       <span className="font-medium">Bonus:</span> {card.bonus}
                    </div>
                    <div className="mt-auto flex flex-col sm:flex-row gap-3">
                      <Link href={card.reviewLink} className="w-full sm:w-1/2 text-center bg-white border border-[#1A3F7A] text-[#1A3F7A] hover:bg-blue-50 text-sm font-medium py-2 px-4 rounded-md transition duration-200">
                          Learn More
                      </Link>
                      <a href={card.applyLink} target="_blank" rel="noopener sponsored" className="w-full sm:w-1/2 text-center bg-[#1A3F7A] hover:bg-[#0F2A4B] text-white text-sm font-medium py-2 px-4 rounded-md transition duration-200">
                          Apply Now
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
             <div className="text-center mt-12">
                <Link href="/cards" className="text-[#1A3F7A] hover:text-[#0F2A4B] font-medium group">
                    View All Top Cards <span aria-hidden="true" className="inline-block transition-transform group-hover:translate-x-1">→</span>
                </Link>
            </div>
          </div>
        </section>

        {/* --- 3. Comparison Tool Preview --- */}
        <section id="comparison-tool" className="py-16 lg:py-24 bg-[#0F2A4B] text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
             <svg className="mx-auto h-12 w-auto text-[#B8860B] mb-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
               <path strokeLinecap="round" strokeLinejoin="round" d="M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5" />
             </svg>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Find Your Perfect Match Instantly
            </h2>
            <p className="text-lg max-w-2xl mx-auto mb-8 text-gray-300">
              Compare benefits, fees, and rewards side-by-side. Our tool makes it easy to choose the best travel card for your spending habits and goals.
            </p>
            <Link href="/compare" className="inline-block bg-[#B8860B] hover:bg-[#a0740a] text-white text-lg font-semibold py-3 px-8 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#B8860B]">
                Start Comparing Cards
            </Link>
          </div>
        </section>

        {/* --- 4. AI Tools Preview --- */}
        <section id="ai-tools" className="py-16 lg:py-24 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                 <span className="inline-block bg-[#E7F0FF] text-[#1A3F7A] text-xs font-semibold px-3 py-1 rounded-full mb-2">Powered by AI</span>
                 <h2 className="text-3xl md:text-4xl font-bold text-[#0F2A4B]">
                    Smarter Travel Rewards
                 </h2>
                 <p className="mt-3 text-lg max-w-xl mx-auto text-gray-600">
                    Leverage our intelligent tools to maximize your points and find personalized card recommendations.
                 </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
               {/* Tool 1 */}
               <div className="ai-tool-card text-center md:text-left">
                 <div className="flex justify-center md:justify-start mb-4">
                    {/* Placeholder Icon */}
                    <svg className="h-10 w-10 text-[#1A3F7A]" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L1.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L24 5.25l-.813 2.846a4.5 4.5 0 0 0-3.09 3.09L18.25 12ZM18.25 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09L12 18.75l.813-2.846a4.5 4.5 0 0 0 3.09-3.09L18.25 12Z" /></svg>
                 </div>
                 <h3 className="text-xl font-semibold mb-2 text-[#1A3F7A]">Personalized Card Finder</h3>
                 <p className="text-gray-600 mb-4">Answer a few questions, and our AI suggests the best cards based on your unique travel style and spending.</p>
                 <Link href="/card-finder" className="font-medium text-[#1A3F7A] hover:text-[#0F2A4B] group">
                    Find My Card <span aria-hidden="true" className="inline-block transition-transform group-hover:translate-x-1">→</span>
                 </Link>
               </div>
               {/* Tool 2 */}
               <div className="ai-tool-card text-center md:text-left">
                  <div className="flex justify-center md:justify-start mb-4">
                    {/* Placeholder Icon */}
                    <svg className="h-10 w-10 text-[#1A3F7A]" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" /></svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-[#1A3F7A]">RewardMax Optimizer</h3>
                  <p className="text-gray-600 mb-4">Connect your cards (securely) to see how to maximize points on every purchase and track redemption values.</p>
                  <Link href="/reward-max" className="font-medium text-[#1A3F7A] hover:text-[#0F2A4B] group">
                    Maximize Rewards <span aria-hidden="true" className="inline-block transition-transform group-hover:translate-x-1">→</span>
                  </Link>
               </div>
            </div>
          </div>
        </section>

        {/* --- 5. Recent Reviews Section (Grid of 8) --- */}
        <section id="recent-reviews" className="py-16 lg:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#0F2A4B]">
              Latest Insights & Guides
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
              {reviewsData.map((review, index) => (
                 <div key={review.link || index} className="review-card bg-white border border-gray-200 rounded-xl overflow-hidden flex flex-col shadow-soft">
                    <Link href={review.link || '#'} className="block">
                       <Image
                         className="w-full h-48 object-cover" // Fixed height, object-cover
                         src={review.img}
                         alt={review.alt}
                         width={500} // Provide appropriate base width
                         height={281} // Provide height based on 16:9 aspect ratio (500/16*9)
                         sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                         quality={75}
                       />
                    </Link>
                    <div className="p-5 flex flex-col flex-grow">
                       <h3 className="text-md font-semibold mb-2 leading-snug text-[#1A3F7A] hover:text-[#0F2A4B] transition duration-200">
                         <Link href={review.link || '#'}>{review.title}</Link>
                       </h3>
                       <p className="text-sm text-gray-600 mb-4 flex-grow line-clamp-3">{review.desc}</p>
                       {review.link && (
                         <div className="mt-auto">
                           <Link href={review.link} className="text-sm font-medium text-[#1A3F7A] hover:text-[#0F2A4B] group">
                              Read More <span aria-hidden="true" className="inline-block transition-transform group-hover:translate-x-1">→</span>
                           </Link>
                         </div>
                       )}
                    </div>
                 </div>
               ))}
            </div>
             <div className="text-center mt-12">
                <Link href="/reviews" className="text-[#1A3F7A] hover:text-[#0F2A4B] font-medium group">
                    Explore All Reviews & Guides <span aria-hidden="true" className="inline-block transition-transform group-hover:translate-x-1">→</span>
                </Link>
            </div>
          </div>
        </section>

        {/* --- 6. Subscribe CTA --- */}
        <section id="subscribe" className="py-16 lg:py-20 bg-gradient-to-r from-[#1A3F7A] to-[#0F2A4B]">
           <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-xl mx-auto text-center">
                 <h2 className="text-3xl font-bold text-white mb-3">
                    Stay Ahead of the Curve
                 </h2>
                 <p className="text-lg text-gray-300 mb-6">
                    Get the latest travel card news, deals, and strategies delivered straight to your inbox.
                 </p>
                 <form className="subscribe-form flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                   <label htmlFor="email-subscribe" className="sr-only">Email address</label>
                   <input
                     type="email"
                     name="email"
                     id="email-subscribe"
                     required
                     className="flex-grow px-4 py-2.5 rounded-md border border-gray-300 focus:ring-2 focus:ring-[#B8860B] focus:border-[#B8860B] outline-none text-gray-900 placeholder-gray-500"
                     placeholder="Enter your email address"
                   />
                   <button
                     type="submit"
                     className="bg-[#B8860B] hover:bg-[#a0740a] text-white font-medium py-2.5 px-6 rounded-md transition duration-300 shrink-0"
                   >
                     Subscribe
                   </button>
                 </form>
                 <p className="text-xs text-gray-400 mt-3">We respect your privacy. Unsubscribe anytime.</p>
              </div>
           </div>
        </section>

      </main>
    </>
  );
}

// --- Optional: Add getStaticProps if fetching data dynamically ---
// export async function getStaticProps() {
//   const featuredReviews = getFeaturedReviews(8); // Example: fetch 8 reviews
//   // Fetch other data as needed
//   return {
//     props: {
//       reviewsData: featuredReviews,
//       // featuredCardsData: fetchedFeaturedCards,
//     },
//     // revalidate: 3600, // Optional: Enable ISR
//   };
// }