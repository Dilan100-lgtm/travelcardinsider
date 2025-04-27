// File: /pages/card-finder.js
import React from 'react';
import Head from 'next/head';
import Header from '@/components/Header'; // Verify path is correct
import Footer from '@/components/Footer'; // Verify path is correct
import CardFinder from '@/components/CardFinder'; // Verify path is correct

export default function CardFinderPage() {
  return (
    <>
      <Header />
      <Head>
        {/* SEO Meta Tags */}
        <title>Advanced Personalized Travel Card Finder | TravelCardInsider</title>
        <meta
          name="description"
          content="Instantly find the best travel rewards card with advanced filters, value calculations, and AI-powered expert explanations."
        />
        <meta name="robots" content="index, follow" /> {/* Or noindex, follow if preferred during development */}
        <link rel="canonical" href="https://www.travelcardinsider.com/card-finder" /> {/* Replace with your actual URL */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" /> {/* Ensure you have a favicon */}
        {/* Add other meta tags like Open Graph, Twitter Cards if needed */}
        {/* <meta property="og:title" content="Advanced Personalized Travel Card Finder | TravelCardInsider" /> */}
        {/* <meta property="og:description" content="..." /> */}
        {/* <meta property="og:image" content="..." /> */}
        {/* <meta property="og:url" content="..." /> */}
        {/* <meta name="twitter:card" content="summary_large_image" /> */}

      </Head>

      {/* Main Layout */}
      <main className="card-finder-page-main">
        <div className="card-finder-page-container">
          <CardFinder />
        </div>
      </main>

      <Footer />

      {/* Global Styles (Minimal - primary styles in modules) */}
      <style jsx global>{`
        /* Ensure base HTML and body styles are set if not done elsewhere */
        html, body {
          padding: 0;
          margin: 0;
          font-family: 'Lato', sans-serif; /* Ensure default font is set */
        }

        /* Load Fonts (Example: Google Fonts) */
        @import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Playfair+Display:wght@700&display=swap');

        /* CSS Variables Definition (ensure these are available globally or defined here) */
        :root {
            --bg-light-gray: #f9fafb;
            --primary-blue: #2563eb;
            --primary-blue-dark: #1d4ed8;
            --primary-blue-text-dark: #1e3a8a;
            --primary-blue-light-bg: #eff6ff;
            --primary-blue-light-border: #bfdbfe;
            --primary-blue-focus: rgba(59, 130, 246, 0.3);
            --text-dark: #111827;
            --text-medium: #374151;
            --text-light: #6b7280;
            --border-color: #d1d5db;
            --border-color-light: #e5e7eb;
            --bg-white: #ffffff;
            --danger-color: #b91c1c; /* Darker Red for errors */
            --danger-bg: rgba(220, 38, 38, 0.05);
            --danger-border: rgba(220, 38, 38, 0.2);
            --info-bg: #eff6ff;
            --info-heading: #1e40af;
            --info-border: #bfdbfe;
            --secondary-gray: #6b7280;
            --secondary-gray-dark: #4b5563;
            --ai-button-bg: #10b981;
            --ai-button-hover-bg: #059669;
            --ai-button-disabled-bg: #9ca3af;
            --icon-best-pick: #eab308; /* Gold */
            --icon-runner-up-1: #a8a29e; /* Silver */
            --icon-runner-up-2: #a16207; /* Bronze */
        }

        /* Page Layout Styles */
        .card-finder-page-main {
          padding-top: 4rem; /* Adjust if header height differs */
          background-color: var(--bg-light-gray);
          min-height: calc(100vh - 8rem); /* Example: Adjust based on combined header/footer height */
          padding-bottom: 3rem;
        }
        .card-finder-page-container {
           max-width: 1200px;
           margin: 0 auto;
           padding: 2rem 1rem;
         }

         /* Basic link styling (optional) */
         a {
           color: var(--primary-blue);
           text-decoration: none;
         }
         a:hover {
           text-decoration: underline;
         }

         /* Box sizing */
         *, *::before, *::after {
           box-sizing: border-box;
         }
       `}</style>
    </>
  );
}

// Keep getServerSideProps for dynamic rendering needs (SSR or preventing build errors)
export async function getServerSideProps(context) {
  // No data fetching needed here for the page shell itself
  return {
    props: {}, // Ensures page is treated as dynamic
  };
}