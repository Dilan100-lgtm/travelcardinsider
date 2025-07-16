// File: pages/compare.js

import React from 'react';
import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CardComparison from '@/components/CardComparison';
import { useCreditCards } from '@/hooks/useCreditCards';
import styles from '@/styles/ComparePage.module.css'; // Adjust path as needed

export default function ComparePage() {
  const { cards: allCards } = useCreditCards();

  return (
    <>
      <Head>
        <title>Compare Travel Credit Cards Side by Side | TravelCardInsider</title>
        <meta
          name="description"
          content="Easily compare top travel credit cards side-by-side by rewards, annual fees, lounge access, bonus offers, credit score, and more. Find your best match in seconds."
        />
        <meta
          name="keywords"
          content="compare travel credit cards, travel card comparison, best travel credit cards, side by side credit card comparison, 0% APR cards, rewards cards"
        />
        <meta name="author" content="TravelCardInsider" />
        <link rel="canonical" href="https://www.travelcardinsider.com/compare" />
        <meta name="robots" content="index, follow" />

        {/* Font Preloading */}
        <link rel="preload" href="/fonts/Roboto_Condensed-Regular.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/Roboto_Condensed-Bold.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/PlayfairDisplay-Regular.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/Playfair-Display-Bold.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/PlayfairDisplay-Italic.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Poppins:wght@500;600;700&display=swap"
          rel="stylesheet"
        />
        {/* Open Graph (Facebook, LinkedIn) */}
<meta property="og:title" content="Compare Travel Credit Cards Side by Side | TravelCardInsider" />
<meta property="og:description" content="Compare top travel credit cards instantly. See bonus offers, rewards rates, fees, and lounge access—side-by-side. Find the best travel card today!" />
<meta property="og:url" content="https://www.travelcardinsider.com/compare" />
<meta property="og:type" content="website" />
<meta property="og:image" content="https://www.travelcardinsider.com/og-images/compare-tool-preview.png" />
<meta property="og:image:alt" content="Compare travel credit cards side by side" />
<meta property="og:site_name" content="TravelCardInsider" />

{/* Twitter Card */}
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Compare Travel Credit Cards Side by Side | TravelCardInsider" />
<meta name="twitter:description" content="Side-by-side credit card comparison tool. Analyze top travel cards by rewards, fees, scores, and perks. Discover your perfect card." />
<meta name="twitter:image" content="https://www.travelcardinsider.com/og-images/compare-tool-preview.png" />
<meta name="twitter:image:alt" content="Travel Card Comparison Tool" />
<meta name="twitter:site" content="@TravelCardInsider" />

<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: `
{
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Travel Credit Card Comparison",
  "description": "Compare top travel credit cards side by side by rewards, fees, bonuses, lounge access, and more.",
  "url": "https://www.travelcardinsider.com/compare",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Chase Sapphire Reserve",
      "url": "https://www.travelcardinsider.com/cards/chase-sapphire-reserve"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Capital One Venture X",
      "url": "https://www.travelcardinsider.com/cards/capital-one-venture-x"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Amex Platinum Card",
      "url": "https://www.travelcardinsider.com/cards/amex-platinum-card"
    }
  ]
}
    `,
  }}
/>


      </Head>

      <Header />

      <main className={styles.pageContainer}>
  <h1 className={styles.title}>Compare Travel Credit Cards</h1>

  <p className={styles.subtitle}>
    Instantly compare up to <strong>three travel credit cards</strong> side by side to find the best fit for your travel lifestyle.
    Analyze annual fees, points and miles earning, lounge access, bonus offers, credit score needs, and much more—all in one place.
    Whether you're a frequent flyer, cashback seeker, or luxury traveler, our tool makes it easy to find your ideal card.
  </p>

  {allCards.length === 0 && (
    <p className={`${styles.loading} ${styles.fadeIn}`}>Loading card data...</p>
  )}

  {allCards.length > 0 && (
    <CardComparison cards={allCards} />
  )}
</main>

      
    </>
  );
}
