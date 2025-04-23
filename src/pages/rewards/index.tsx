import Head from 'next/head';
import RewardsCalculator from '@/components/RewardsCalculator';
import Header from '@/components/Header'; // optional if you use global layout
import Footer from '@/components/Footer'; // optional if you use global layout

export default function RewardsPage() {
  return (
    <>
      <Head>
        <title>Travel Card Rewards Calculator | TravelCardInsider</title>
        <meta
          name="description"
          content="Use our AI-powered calculator to estimate your total yearly rewards across all travel credit cards. Compare and find the best card for your real spending."
        />
        <meta name="robots" content="index, follow" />
      </Head>

      <main style={{ padding: '2rem 1rem', maxWidth: '900px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>
          Travel Credit Card Rewards Calculator
        </h1>
        <p style={{ marginBottom: '2rem' }}>
          Enter your average monthly spend to see how much each travel card on our site could earn you
          in rewards per year—instantly calculated using real reward rates and values.
        </p>

        <RewardsCalculator />
        return <RewardsCalculator />
      </main>

      {/* Footer is optional here */}
    </>
  );
}
