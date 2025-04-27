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
        <title>Advanced Personalized Travel Card Finder | TravelCardInsider</title>
        <meta
          name="description"
          content="Instantly find the best travel rewards card with advanced filters, value calculations, and AI-powered expert explanations." // Updated description slightly
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.travelcardinsider.com/card-finder" /> {/* Replace with your actual URL */}
        {/* Add other relevant meta tags like Open Graph, Twitter Cards if needed */}
        <link rel="icon" href="/favicon.ico" /> {/* Ensure you have a favicon */}
      </Head>
      {/* Use CSS modules or Tailwind for main layout */}
      <main className="card-finder-page-main">
        <div className="card-finder-page-container">
          <CardFinder />
        </div>
      </main>
      <Footer />
      {/* Add Schema.org for WebPage if desired */}
      <style jsx global>{`
        /* Minimal global styles - primary styles are in CardFinder.module.css */
        .card-finder-page-main {
          padding-top: 4rem; // Adjust if header height differs
          background-color: var(--bg-light-gray, #f9fafb); /* Use CSS var or default */
          min-height: calc(100vh - 4rem); // Adjust if header/footer heights differ
          padding-bottom: 3rem; /* Add padding at the bottom */
        }
        .card-finder-page-container {
           max-width: 1200px; /* Adjust max-width as needed */
           margin: 0 auto;
           padding: 2rem 1rem; /* Responsive padding */
         }

         /* Ensure fonts are loaded (example using Google Fonts) */
         @import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Playfair+Display:wght@700&display=swap');

         /* Define CSS Variables globally or ensure they are defined elsewhere */
         :root {
            --bg-light-gray: #f9fafb;
            --primary-blue: #2563eb;
            --primary-blue-dark: #1d4ed8;
            --primary-blue-text-dark: #1e3a8a;
            --primary-blue-light-bg: #eff6ff;
            --primary-blue-light-border: #bfdbfe;
            --primary-blue-focus: rgba(59, 130, 246, 0.3); /* Updated focus color */
            --text-dark: #111827;
            --text-medium: #374151;
            --text-light: #6b7280;
            --border-color: #d1d5db;
            --border-color-light: #e5e7eb;
            --bg-white: #ffffff;
            --danger-color: #dc2626;
            --danger-bg: rgba(220, 38, 38, 0.05); /* Lighter danger bg */
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

         body {
           font-family: 'Lato', sans-serif; /* Default font */
           color: var(--text-medium);
           line-height: 1.6;
         }
       `}</style>
    </>
  );
}

// Keep getServerSideProps for dynamic rendering needs
export async function getServerSideProps(context) {
  // You could potentially pre-fetch some data here if needed in the future
  return {
    props: {}, // Page needs to be rendered dynamically based on user input
  };
}