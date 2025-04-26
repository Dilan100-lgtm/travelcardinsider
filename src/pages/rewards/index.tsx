// File: src/pages/rewards/index.tsx

import Head from 'next/head';
import RewardsCalculator from '@/components/RewardsCalculator';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import styles from '@/styles/rewards.module.css'; // Make sure you create this CSS module

export default function RewardsPage() {
  return (
    <>
      <Head>
        <title>Travel Credit Card Rewards Calculator | TravelCardInsider</title>
        <meta
          name="description"
          content="Get a personalized ranking of the best travel credit cards based on your actual spending habits. Instantly estimate first-year value, rewards, and perks using real-world data."
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="AI Travel Rewards Calculator | TravelCardInsider" />
        <meta property="og:description" content="Find the most valuable travel credit card for you. Our AI-based calculator analyzes your monthly spend and shows top cards by estimated value." />
        <meta property="og:url" content="https://www.travelcardinsider.com/rewards" />
        <meta property="og:type" content="website" />
         {/* Preload critical fonts */}
         <link rel="preload" href="/fonts/Roboto_Condensed-Regular.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/Roboto_Condensed-bold.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/playfair-display-regular.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/playfair-display-bold.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
        <meta name="geo.region" content="US" />
        <meta name="geo.placename" content="United States" />
        <meta name="language" content="en-US" />
        <meta name="distribution" content="US" />
        <link rel="alternate" href="https://www.travelcardinsider.com" hrefLang="en-us" />
      </Head>

      <Header />

      <main className={styles.calculatorContainer}>
        

        <RewardsCalculator />
        <small className={styles.heroNote}>
            Updated for 2025. Covers 100+ U.S. travel credit cards with accurate rewards logic.
          </small>
      </main>

      <Footer />
    </>
  );
}
