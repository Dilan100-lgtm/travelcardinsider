// File: /pages/card-finder.js

import React from 'react';
import Head from 'next/head';
import Header from '@/components/Header'; // Verify path
import Footer from '@/components/Footer'; // Verify path
import CardFinder from '@/components/CardFinder'; // Verify path
import { useRouter } from 'next/router';
import RequireAuth from '@/components/RequireAuth'; // <-- 1. Import RequireAuth

export default function CardFinderPage() {
  const router = useRouter();
  const canonicalUrl = `https://www.travelcardinsider.com${router.asPath}`;

  const lastDataUpdate = "April 27, 2025"; // Update this monthly or dynamically if needed

  /** ------------  JSON-LD Structured Data ------------- **/
  const jsonLdWebPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Advanced Travel Credit Card Finder",
    "url": canonicalUrl,
    "description": "Find your best travel rewards card in seconds. Our advanced, AI-powered card finder recommends the best options based on your spending and travel preferences.",
    "inLanguage": "en-US",
    "isPartOf": {
      "@type": "Website",
      "name": "TravelCardInsider",
      "url": "https://www.travelcardinsider.com"
    },
    "breadcrumb": {
      "@id": `${canonicalUrl}#breadcrumb`
    }
  };

  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${canonicalUrl}#breadcrumb`,
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.travelcardinsider.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Card Finder",
        "item": canonicalUrl
      }
    ]
  };

  const jsonLdFAQ = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How does the Card Finder work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We analyze your estimated monthly spending, travel habits, and preferences to recommend the top 2-3 travel credit cards personalized for you. AI logic considers real-time rewards values, fees, perks, and your selected strategy."
        }
      },
      {
        "@type": "Question",
        "name": "How often is the card data updated?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Our card database is reviewed and updated at least monthly. Last update: ${lastDataUpdate}. Always verify latest offers directly with card issuers.`
        }
      }
    ]
  };

  return (
    <>
      

      <Head>
        {/* ---------- Primary SEO Meta ---------- */}
        <title>Find Your Best Travel Credit Card | Personalized Card Finder - TravelCardInsider</title>
        <meta
          name="description"
          content="Instantly find the perfect travel rewards card. Our advanced Card Finder uses AI-powered personalization based on your spending habits and travel goals."
        />
        <meta name="keywords" content="travel credit card finder, best travel credit card 2025, personalized card finder, rewards card recommendation" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <link rel="canonical" href={canonicalUrl} />

        {/* ---------- Open Graph for Facebook ---------- */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Find Your Best Travel Credit Card | Card Finder Tool" />
        <meta property="og:description" content="Answer a few quick questions and get personalized travel card recommendations instantly." />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content="https://www.travelcardinsider.com/og/card-finder-1200x630.jpg" />
        <meta property="og:site_name" content="TravelCardInsider" />
        <meta property="og:locale" content="en_US" />

        {/* ---------- Twitter Card ---------- */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Travel Card Finder | Personalized Recommendations" />
        <meta name="twitter:description" content="Discover your perfect travel rewards card tailored to your spending and lifestyle." />
        <meta name="twitter:image" content="https://www.travelcardinsider.com/og/card-finder-1200x630.jpg" />

        {/* ---------- Favicon / Theme Color ---------- */}
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#2563eb" />

        {/* ---------- Structured Data ---------- */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebPage) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFAQ) }}
        />
      </Head>

      {/* --- 2. Wrap the main content area with RequireAuth --- */}
      <RequireAuth>
        <main className="card-finder-page-main">
          <div className="card-finder-page-container">
            {/* The CardFinder component is now protected by the auth gate */}
            <CardFinder />
          </div>
        </main>
      </RequireAuth>
      {/* --- End RequireAuth wrapper --- */}

      

      {/* --- Basic Styles (Optional, already in your CSS globally probably) --- */}
      <style jsx global>{`
        .card-finder-page-main {
          padding-top: 4rem;
          background-color: var(--bg-light-gray, #f9fafb);
          min-height: calc(100vh - 4rem);
        }
        .card-finder-page-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 2rem 1rem;
        }
      `}</style>
    </>
  );
}

// Note: getServerSideProps might have limited utility now for the core CardFinder
// component itself since it requires client-side authentication first.
// Keep it if you need server-side data for other parts of the page *before* auth,
// otherwise, you might consider removing it or switching to getStaticProps if
// the non-gated parts are static. For now, leaving it as is.
export async function getServerSideProps(context) {
  // This runs before the client-side auth check happens.
  // You might fetch general page data here, but not user-specific data.
  return {
    props: {}, // Pass any non-user-specific props needed by the page shell
  };
}