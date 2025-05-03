// src/pages/index.js
import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

// Optional: Import dynamic components if sections become very heavy
// import dynamic from 'next/dynamic';
// const FeaturedCardsSection = dynamic(() => import('../components/FeaturedCardsSection'));

// Assume data is fetched or defined here. Replace with actual data fetching (getStaticProps/getServerSideProps)
// For demonstration, using placeholder data structures.
const featuredCards = [
    { id: 'csp', name: 'Chase Sapphire Preferred®', img: '/images/placeholder-card-csp.png', alt: 'Chase Sapphire Preferred Card', desc: 'Best for points beginners & flexible rewards.', offer: 'Earn 60,000 bonus points after spending $4,000 in 3 months.', applyLink: 'YOUR_AFFILIATE_LINK_CSP', reviewLink: '/reviews/chase-sapphire-preferred', offerBg: 'bg-blue-50' },
    { id: 'amexplat', name: 'The Platinum Card®', img: '/images/placeholder-card-amex-plat.png', alt: 'Amex Platinum Card', desc: 'Best for luxury travel perks & lounge access.', offer: 'Earn 80,000 points after spending $6,000 in 6 months.', applyLink: 'YOUR_AFFILIATE_LINK_AMEXPLAT', reviewLink: '/reviews/amex-platinum', offerBg: 'bg-green-50' },
    { id: 'venturex', name: 'Capital One Venture X', img: '/images/placeholder-card-venture-x.png', alt: 'Capital One Venture X Card', desc: 'Best for simple rewards & premium travel credits.', offer: 'Earn 75,000 miles after spending $4,000 in 3 months.', applyLink: 'YOUR_AFFILIATE_LINK_VENTUREX', reviewLink: '/reviews/capital-one-venture-x', offerBg: 'bg-indigo-50' },
    { id: 'citi', name: 'Citi Premier® Card', img: '/images/placeholder-card-citi-premier.png', alt: 'Citi Premier Card', desc: 'Best for everyday spending rewards.', offer: 'Earn 60,000 ThankYou® Points after spending $4,000 in 3 months.', applyLink: 'YOUR_AFFILIATE_LINK_CITI', reviewLink: '/reviews/citi-premier', offerBg: 'bg-orange-50' },
];

const recentReviews = [
    { slug: 'top-new-travel-credit-card-offers-2025', title: 'Top New Travel Credit Card Offers of 2025', img: '/images/placeholder-review-1.jpg', alt: 'Credit cards fanned out', excerpt: 'Breaking news on the latest card launches and exclusive sign-up bonuses you won\'t want to miss...' },
    { slug: 'The-Ultimate-Guide-to-Lounge-Access-in-2025-How-to-Get-VIP-Treatment-at-Airports', title: 'Ultimate Guide to Lounge Access in 2025', img: '/images/placeholder-review-2.jpg', alt: 'Airport lounge', excerpt: 'How to get premium perks and comfort while traveling, covering Priority Pass, Centurion Lounges, and more...' },
    { slug: 'Top-5-Family-Friendly-Travel-Cards-for-2025-Maximize-Points-&-Perks-with-Kids-in-Tow', title: '5 Best Family-Friendly Travel Cards', img: '/images/placeholder-review-3.jpg', alt: 'Family traveling', excerpt: 'Discover kid-friendly perks and money-saving benefits for your family vacations, from bonus points to free bags...' },
];

const trustLogos = [
    { src: "/images/logo-placeholder-forbes.svg", alt: "Forbes logo" },
    { src: "/images/logo-placeholder-cnbc.svg", alt: "CNBC logo" },
    { src: "/images/logo-placeholder-wsj.svg", alt: "Wall Street Journal logo" },
    { src: "/images/logo-placeholder-nerdwallet.svg", alt: "NerdWallet logo" },
    { src: "/images/logo-placeholder-thepointsquy.svg", alt: "The Points Guy logo" },
];


export default function HomePage() {
    // TODO: Replace hardcoded data above with data fetched via getStaticProps or getServerSideProps

    return (
        <>
            <Head>
                <title>Travel Card Insider - Best Travel Credit Cards 2025</title>
                <meta name="description" content="Compare the best travel credit cards of 2025. Find top rewards, points, travel perks, lounge access, and sign-up bonuses. Maximize your trips with TravelCardInsider."/>
                {/* Add other essential meta tags, links (favicon, canonical), fonts, and structured data here */}
                {/* Example Font Links */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@700&display=swap" rel="stylesheet" />
                 {/* Add Preload for LCP image if known */}
                <link rel="preload" as="image" href="/images/placeholder-hero-travel.jpg" />
                 {/* Favicons, Canonical, etc. */}
                <link rel="icon" href="/favicon.ico" />
                {/* <link rel="canonical" href="https://www.travelcardinsider.com/" /> */}
                 {/* Add JSON-LD Schema here */}

            </Head>

            {/* Assumes Header is part of a Layout component in _app.js */}
            {/* Ensure the main content has padding-top equal to header height */}
            <main className="pt-[/* Add height of your fixed header here, e.g., pt-16 */]">

                {/* 1. Hero Section */}
                <section className="relative bg-navy-900 text-white overflow-hidden min-h-[75vh] md:min-h-[85vh] flex items-center">
                    {/* Background Image */}
                    <Image
                        src="/images/placeholder-hero-travel.jpg" // TODO: Replace with actual hero image path
                        alt="" // Decorative background
                        layout="fill"
                        objectFit="cover"
                        className="absolute inset-0 z-0 opacity-30"
                        priority // Load this image first (LCP candidate)
                        quality={85}
                        aria-hidden="true"
                    />
                    {/* Optional Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/70 to-transparent z-10"></div>

                    {/* Content */}
                    <div className="relative z-20 container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-24 md:py-32">
                        <h1 className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4">
                            Find Your Perfect <span className="text-gold-500">Travel Card</span> for 2025
                        </h1>
                        <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto mb-8">
                            Unlock maximum rewards, points, and perks. Compare the best travel credit cards side-by-side and elevate your journeys.
                        </p>
                        <Link href="/compare" legacyBehavior>
                           <a className="inline-block bg-gold-500 text-navy-900 font-bold py-3 px-8 rounded-lg text-lg hover:bg-opacity-90 transition duration-200">
                                Compare Travel Cards
                           </a>
                        </Link>
                    </div>
                </section>

                {/* 2. Top 4 Featured Travel Credit Cards */}
                <section id="featured-cards" className="py-16 lg:py-24 bg-gray-50">
                    <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-12">
                            Top Travel Card Picks for May 2025
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            {featuredCards.map((card) => (
                                <div key={card.id} className="bg-white rounded-lg shadow-md border border-gray-100 p-6 flex flex-col hover:shadow-lg transition-shadow duration-200">
                                    <div className="relative h-40 w-full mb-4"> {/* Added relative container for Image */}
                                       <Image
                                            src={card.img} // TODO: Replace placeholder
                                            alt={card.alt}
                                            layout="fill" // Fill the container
                                            objectFit="contain" // Fit card image without stretching
                                            className="mx-auto"
                                        />
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">{card.name}</h3>
                                    <p className="text-sm text-slate-500 mb-3 text-center">{card.desc}</p>
                                    <p className={`text-sm font-medium text-gray-700 p-2 rounded text-center mb-4 ${card.offerBg}`}>
                                        {card.offer}
                                    </p>
                                    <div className="mt-auto flex flex-col sm:flex-row gap-3 justify-center">
                                        {/* External link - use <a> */}
                                        <a href={card.applyLink} target="_blank" rel="noopener sponsored" className="w-full sm:w-auto text-center bg-blue-600 text-white text-sm font-semibold py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200">
                                            Apply Now
                                        </a>
                                         {/* Internal link - use <Link> */}
                                        <Link href={card.reviewLink} legacyBehavior>
                                            <a className="w-full sm:w-auto text-center bg-white text-blue-600 border border-blue-600 text-sm font-semibold py-2 px-4 rounded-md hover:bg-blue-50 transition duration-200">
                                                Learn More
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 3. Comparison Tool Preview */}
                <section id="compare-preview" className="py-16 lg:py-24 bg-white">
                    <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <svg className="mx-auto h-12 w-12 text-blue-600 mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.092 1.21-.138 2.43-.138 3.662 0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.092-1.21.138-2.43.138-3.662z M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0z" /></svg>
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                            Compare Cards Side-by-Side
                        </h2>
                        <p className="text-lg text-slate-500 mb-8">
                            Unsure which card fits your travel style? Our comparison tool breaks down fees, rewards, perks, and more. Find your perfect match in minutes.
                        </p>
                        <Link href="/compare" legacyBehavior>
                           <a className="inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-blue-700 transition duration-200">
                                Start Comparing
                           </a>
                        </Link>
                    </div>
                </section>

                {/* 4. AI Tools Preview */}
                <section id="ai-tools" className="py-16 lg:py-24 bg-gray-50">
                    <div className="container max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-4">
                            Smarter Travel Starts Here
                        </h2>
                        <p className="text-lg text-slate-500 text-center mb-12 max-w-2xl mx-auto">
                            Leverage our AI-powered tools to get personalized card recommendations and maximize your reward earnings.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                            {/* Tool 1: Personalized Finder */}
                            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100 text-center hover:shadow-lg transition-shadow duration-200">
                                <svg className="mx-auto h-12 w-12 text-blue-600 mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L1.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L24 5.25l-.813 2.846a4.5 4.5 0 0 0-3.09 3.09L18.25 12ZM18.25 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09L12 18.75l.813-2.846a4.5 4.5 0 0 0 3.09-3.09L18.25 12Z" /></svg>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">Personalized Card Finder</h3>
                                <p className="text-slate-500 mb-6">Answer a few questions about your spending and travel habits, and our AI will recommend the best cards for you.</p>
                                <Link href="/card-finder" legacyBehavior>
                                   <a className="font-semibold text-blue-600 hover:text-blue-800 transition duration-200">Find My Match &rarr;</a>
                                </Link>
                            </div>
                            {/* Tool 2: RewardMax */}
                            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100 text-center hover:shadow-lg transition-shadow duration-200">
                                <svg className="mx-auto h-12 w-12 text-blue-600 mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.75A.75.75 0 0 1 3 4.5h.75m0 0H21m-18 0h18M3 9v.75A.75.75 0 0 0 3.75 10.5h16.5a.75.75 0 0 0 .75-.75V9M3.75 15a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 .75.75v.75a.75.75 0 0 1-.75.75H4.5a.75.75 0 0 1-.75-.75V15Z" /></svg>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">RewardMax™ Optimizer</h3>
                                <p className="text-slate-500 mb-6">Connect your cards (securely) and let RewardMax tell you the optimal card to use for every purchase to maximize points.</p>
                                <Link href="/reward-max" legacyBehavior>
                                    <a className="font-semibold text-blue-600 hover:text-blue-800 transition duration-200">Maximize Rewards &rarr;</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 5. Recent Reviews Section */}
                <section id="reviews" className="py-16 lg:py-24 bg-white">
                    <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between items-center mb-12">
                            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                                Latest Insights & Reviews
                            </h2>
                             <Link href="/reviews" legacyBehavior>
                               <a className="font-semibold text-blue-600 hover:text-blue-800 transition duration-200 hidden sm:block">View All Reviews &rarr;</a>
                            </Link>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                           {recentReviews.map((review) =>(
                                <div key={review.slug} className="bg-white rounded-lg shadow-md border border-gray-100 overflow-hidden group hover:shadow-lg transition-shadow duration-200">
                                    <Link href={`/review/${review.slug}`} legacyBehavior>
                                        <a className="block aspect-w-16 aspect-h-9"> {/* Aspect ratio container */}
                                            <Image
                                                src={review.img} // TODO: Replace placeholder
                                                alt={review.alt}
                                                layout="fill" // Fill aspect ratio container
                                                objectFit="cover" // Cover the area
                                                className="group-hover:opacity-90 transition-opacity duration-200"
                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            />
                                        </a>
                                    </Link>
                                    <div className="p-6">
                                        <h3 className="text-lg font-semibold text-gray-900 mb-2 hover:text-blue-700 transition duration-200">
                                            <Link href={`/review/${review.slug}`} legacyBehavior><a>{review.title}</a></Link>
                                        </h3>
                                        <p className="text-sm text-slate-500 mb-4 line-clamp-3">{review.excerpt}</p>
                                        <Link href={`/review/${review.slug}`} legacyBehavior>
                                           <a className="text-sm font-semibold text-blue-600 hover:text-blue-800 transition duration-200">Read More &rarr;</a>
                                        </Link>
                                    </div>
                                </div>
                           ))}
                        </div>
                        <Link href="/reviews" legacyBehavior>
                           <a className="mt-8 block sm:hidden text-center font-semibold text-blue-600 hover:text-blue-800 transition duration-200">View All Reviews &rarr;</a>
                        </Link>
                    </div>
                </section>

                {/* 7. Trust Badges / Featured In */}
                <section id="trust-elements" className="py-12 lg:py-16 bg-gray-50">
                    <div className="container max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h3 className="text-center text-lg font-semibold text-slate-500 mb-8">
                            As Featured In
                        </h3>
                        <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 md:gap-x-12 lg:gap-x-16">
                            {trustLogos.map((logo) => (
                                <div key={logo.alt} className="relative h-8 sm:h-9 lg:h-10 aspect-[3/1] opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition duration-200"> {/* Adjust aspect ratio/height */}
                                    <Image
                                        src={logo.src} // TODO: Replace placeholder
                                        alt={logo.alt}
                                        layout="fill"
                                        objectFit="contain"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                 {/* 6. Subscribe CTA */}
                <section id="subscribe" className="py-16 lg:py-20 bg-navy-700 text-white">
                    <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                            Stay Ahead of the Curve
                        </h2>
                        <p className="text-lg text-slate-300 mb-8">
                            Get the latest travel card deals, news, and strategies delivered straight to your inbox.
                        </p>
                        <form action="#" method="POST" className="max-w-lg mx-auto"> {/* TODO: Update form action */}
                            <div className="flex flex-col sm:flex-row gap-4">
                                <label htmlFor="email-subscribe" className="sr-only">Email address</label>
                                <input
                                    type="email"
                                    name="email-subscribe"
                                    id="email-subscribe"
                                    required
                                    className="flex-grow px-4 py-3 rounded-md text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                                    placeholder="Enter your email address"
                                />
                                <button type="submit" className="bg-gold-500 text-navy-900 font-bold py-3 px-6 rounded-md text-lg hover:bg-opacity-90 transition duration-200 shrink-0">
                                    Subscribe
                                </button>
                            </div>
                        </form>
                    </div>
                </section>

            </main>

            {/* Assumes Footer is part of a Layout component in _app.js */}
        </>
    );
}

// Optional: Add getStaticProps or getServerSideProps for data fetching
// export async function getStaticProps() {
//   // Fetch featuredCardsData, recentReviewsData, etc.
//   // const featuredCards = await fetchFeaturedCards();
//   // const recentReviews = await fetchRecentReviews(3);
//   return {
//     props: {
//       // featuredCards,
//       // recentReviews,
//     },
//     revalidate: 3600, // Optional: Revalidate every hour
//   };
// }