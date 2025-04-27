// File: /pages/card-finder.js
import React from 'react';
import Head from 'next/head';
import Header from '@/components/Header'; // Make sure this path is correct (src/components?)
import Footer from '@/components/Footer'; // Make sure this path is correct (src/components?)
import CardFinder from '@/components/CardFinder'; // Make sure this path is correct (src/components?)

export default function CardFinderPage() {
  return (
    <>
      <Header />
      <Head>
        <title>Personalized Travel Card Finder | TravelCardInsider</title>
        <meta
          name="description"
          content="Find the best travel rewards card tailored to your spending and preferences instantly with AI assistance."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.travelcardinsider.com/card-finder" />
      </Head>
      {/* Use CSS Modules or Tailwind classes instead of inline styles if possible */}
      <main style={{ paddingTop: '4rem', backgroundColor: '#f9fafb', minHeight: 'calc(100vh - 4rem)' }}>
         <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem 1rem' }}> {/* Added padding here */}
          <CardFinder />
        </div>
      </main>
      <Footer />
    </>
  );
}

// Add this function to disable SSG and enable SSR for this page
export async function getServerSideProps(context) {
  // You could potentially pre-fetch some default data here if needed,
  // but for now, just returning empty props is enough to trigger SSR.
  return {
    props: {}, // Will be passed to the page component as props
  };
}