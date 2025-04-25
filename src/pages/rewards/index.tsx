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
        <title>AI-Powered Travel Credit Card Rewards Calculator | TravelCardInsider</title>
        <meta
          name="description"
          content="Get a personalized ranking of the best travel credit cards based on your actual spending habits. Instantly estimate first-year value, rewards, and perks using real-world data."
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="AI Travel Rewards Calculator | TravelCardInsider" />
        <meta property="og:description" content="Find the most valuable travel credit card for you. Our AI-based calculator analyzes your monthly spend and shows top cards by estimated value." />
        <meta property="og:url" content="https://www.travelcardinsider.com/rewards" />
        <meta property="og:type" content="website" />
      </Head>

      <Header />

      <main className={styles.calculatorContainer}>
        <section className={styles.hero}>
          <h1 className={styles.heroTitle}>Travel Credit Card Rewards Calculator</h1>
          <p className={styles.heroDescription}>
            Discover which travel credit cards deliver the most value for your real-life spending.
            Our intelligent calculator analyzes your monthly expenses and ranks cards by estimated first-year value—
            factoring in bonuses, perks, and real-world reward redemptions.
          </p>
          
        </section>

        <RewardsCalculator />
        <small className={styles.heroNote}>
            Updated for 2025. Covers 100+ U.S. travel credit cards with accurate rewards logic.
          </small>
      </main>

      <Footer />
    </>
  );
}
