import React from 'react';
import Head from 'next/head';
import RewardsCompareCalculator from '@/components/RewardsCompareCalculator'; // Use the updated component path

export default function RewardsComparePage() {
  return (
    <>
      <Head>
        <title>Compare Credit Card Rewards - TravelCardInsider</title>
        <meta name="description" content="Compare up to 3 travel credit cards and calculate estimated yearly rewards based on your spending habits." />
        {/* Add any other head elements like favicon links */}
      </Head>
      {/* Ensure your main layout handles the fixed header spacing */}
      <main style={{ marginTop: '4rem', padding: '2rem 1rem', backgroundColor: '#f9fafb', minHeight: '100vh' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}> {/* Increased max-width for wider layout */}
          <h1 style={{ textAlign: 'center', fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', marginBottom: '2.5rem', color: '#111827' }}>
            Compare Credit Card Rewards & Value
          </h1>
          <RewardsCompareCalculator />
        </div>
      </main>
    </>
  );
}