// File: src/pages/rewards/index.tsx

import Head from 'next/head';
import RewardsCalculator from '@/components/RewardsCalculator';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import styles from '@/styles/rewards.module.css'; // Modular CSS

export default function RewardsPage() {
  return (
    <>
      <Head>
        <title>Travel Credit Card Rewards Calculator (2025) | TravelCardInsider</title>
        <meta
          name="description"
          content="Find the best travel credit card for you! Our AI-powered calculator instantly estimates your first-year value based on real spending — using 100+ top U.S. credit cards."
        />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="keywords" content="travel credit card rewards calculator, best travel credit cards, personalized credit card recommendation, 2025 travel credit cards, AI rewards calculator" />
        <meta property="og:title" content="AI Travel Credit Card Rewards Calculator (2025) | TravelCardInsider" />
        <meta property="og:description" content="Get a custom ranking of the best travel cards based on your real spending. AI-analyzed rewards, bonuses, perks — all calculated live." />
        <meta property="og:url" content="https://www.travelcardinsider.com/rewards" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.travelcardinsider.com/og-image/rewards-calculator-og.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Travel Credit Card Rewards Calculator | TravelCardInsider" />
        <meta name="twitter:description" content="Instantly find the top travel credit cards based on your spending habits. AI-powered analysis — only on TravelCardInsider." />
        <meta name="twitter:image" content="https://www.travelcardinsider.com/og-image/rewards-calculator-og.png" />
        <meta name="geo.region" content="US" />
        <meta name="geo.placename" content="United States" />
        <meta name="language" content="en-US" />
        <meta name="distribution" content="US" />
        <link rel="alternate" href="https://www.travelcardinsider.com" hrefLang="en-us" />
        {/* Preload critical fonts */}
        <link rel="preload" href="/fonts/Roboto_Condensed-Regular.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/Roboto_Condensed-Bold.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/playfair-display-regular.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/playfair-display-bold.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />

        {/* Add JSON-LD Structured Data */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Travel Credit Card Rewards Calculator | TravelCardInsider",
            "url": "https://www.travelcardinsider.com/rewards",
            "description": "Use our AI-powered calculator to estimate your total yearly travel rewards. Find the best credit cards tailored to your real spending habits.",
            "publisher": {
              "@type": "Organization",
              "name": "TravelCardInsider",
              "logo": {
                "@type": "ImageObject",
                "url": "https://www.travelcardinsider.com/logo.png"
              }
            },
            "mainEntity": {
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "How does the rewards calculator work?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Our AI-powered calculator analyzes your monthly spending across categories and estimates first-year rewards and perks from 100+ top U.S. travel credit cards."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What is First-Year Net Value?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "It's the estimated value you get after combining rewards, perks, bonuses, and subtracting annual fees — giving you a true measure of first-year benefit."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How accurate are the results?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We use real-world reward rates, sign-up bonus values, and updated 2025 credit card data to calculate highly realistic estimates for each user."
                  }
                }
              ]
            }
          })
        }} />
      </Head>

      <Header />

      <main className={styles.calculatorContainer}>
        <RewardsCalculator />
        <small className={styles.heroNote}>
          Updated for 2025. Analyzing 100+ U.S. travel credit cards with real-world rewards logic.
        </small>
      </main>

      <Footer />
    </>
  );
}
