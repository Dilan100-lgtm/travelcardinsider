// File: /pages/card-finder.js
import React from 'react';
import Head from 'next/head';
import Header from '@/components/Header'; // Verify path
import Footer from '@/components/Footer'; // Verify path
import CardFinder from '@/components/CardFinder'; // Verify path

export default function CardFinderPage() {
  return (
    <>
      <Header />
      <Head>
        <title>Advanced Personalized Travel Card Finder | TravelCardInsider</title>
        <meta
          name="description"
          content="Instantly find the best travel rewards card with advanced filters, value calculations, and AI-powered explanations."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.travelcardinsider.com/card-finder" />
        {/* Add other relevant meta tags */}
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
        .card-finder-page-main {
          padding-top: 4rem; // Assuming fixed header height
          background-color: var(--bg-light-gray, #f9fafb);
          min-height: calc(100vh - 4rem); // Adjust if footer height is known
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

// Keep getServerSideProps to ensure SSR and prevent build errors
export async function getServerSideProps(context) {
  return {
    props: {}, // Page needs to be rendered dynamically
  };
}