// File: /pages/card-finder.js

import React from 'react';
import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CardFinder from '@/components/CardFinder';

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
      <main style={{ marginTop: '4rem', padding: '2rem 1rem', backgroundColor: '#f9fafb', minHeight: '100vh' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <CardFinder />
        </div>
      </main>
      <Footer />
    </>
  );
}
