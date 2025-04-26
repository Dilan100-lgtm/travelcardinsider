// File: /pages/rewards-compare.js
import React from 'react';
import Head from 'next/head';
import RewardsCompareCalculator from '@/components/RewardsCompareCalculator';

export default function RewardsComparePage() {
  return (
    <>
      <Head>
        <title>Compare Credit Card Rewards - TravelCardInsider</title>
        <meta name="description" content="Compare up to 3 travel credit cards and calculate estimated yearly rewards based on your spending habits." />
      </Head>
      <main style={{ marginTop: '4rem', padding: '2rem 1rem', backgroundColor: '#f9fafb', minHeight: '100vh' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h1 style={{ textAlign: 'center', fontSize: 'clamp(2rem, 5vw, 3rem)', marginBottom: '2rem' }}>
            Compare Rewards for Top Travel Cards
          </h1>
          <RewardsCompareCalculator />
        </div>
      </main>
    </>
  );
}
