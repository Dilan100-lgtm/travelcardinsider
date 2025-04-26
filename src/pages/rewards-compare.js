// File: /src/pages/rewards-compare.js
import React from 'react';
import Head from 'next/head';
import RewardsCompareCalculator from '@/components/RewardsCompareCalculator';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useRouter } from 'next/router';

export default function RewardsComparePage() {
  const router = useRouter();
  const canonicalUrl = `https://www.travelcardinsider.com${router.asPath}`;

  /** ------------  JSON-LD STRUCTURED DATA ------------- **/
  const jsonLdWebPage = {
    '@context': 'https://schema.org',
    '@type'   : 'WebPage',
    name      : 'Credit-Card Rewards Comparison Calculator',
    url       : canonicalUrl,
    description:
      'Instantly compare the yearly rewards value of up to three top travel credit cards based on your own spending profile.',
    inLanguage: 'en-US',
    isPartOf  : {
      '@type': 'Website',
      name   : 'TravelCardInsider',
      url    : 'https://www.travelcardinsider.com'
    },
    breadcrumb: {
      '@id': `${canonicalUrl}#breadcrumb`
    }
  };

  const jsonLdBreadcrumb = {
    '@context': 'https://schema.org',
    '@type'   : 'BreadcrumbList',
    '@id'     : `${canonicalUrl}#breadcrumb`,
    itemListElement: [
      {
        '@type'   : 'ListItem',
        position  : 1,
        name      : 'Home',
        item      : 'https://www.travelcardinsider.com'
      },
      {
        '@type'   : 'ListItem',
        position  : 2,
        name      : 'Rewards Calculator',
        item      : canonicalUrl
      }
    ]
  };

  const jsonLdFAQ = {
    '@context': 'https://schema.org',
    '@type'   : 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name  : 'How does this calculator estimate rewards?',
        acceptedAnswer: {
          '@type': 'Answer',
          text  :
            'We match your monthly spending to each card’s bonus categories, multiply by 12 months, apply the card’s point multiplier and our latest cents-per-point valuations.'
        }
      },
      {
        '@type': 'Question',
        name  : 'Which cards are included?',
        acceptedAnswer: {
          '@type': 'Answer',
          text  :
            'The tool covers 50+ U.S. travel, airline, hotel and premium cash-back cards. We update the database weekly from issuers’ official sites.'
        }
      }
    ]
  };

  return (
    <>
      <Header />

      <Head>
        {/* ---------- Primary Meta ---------- */}
        <title>Compare Credit-Card Rewards & Annual Value | TravelCardInsider</title>
        <meta
          name="description"
          content="Instantly compare up to three travel credit cards. Enter your own monthly spend to see which card earns the most points and dollar value in 2025."
        />
        <meta name="keywords" content="travel credit card rewards calculator, compare credit cards, points calculator 2025" />
        <link rel="canonical" href={canonicalUrl} />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />

        {/* ---------- Open Graph ---------- */}
        <meta property="og:type"        content="website" />
        <meta property="og:title"       content="Compare Credit-Card Rewards & Annual Value" />
        <meta property="og:description" content="Find the best card for your travel lifestyle with our real-time rewards calculator." />
        <meta property="og:url"         content={canonicalUrl} />
        <meta property="og:image"       content="https://www.travelcardinsider.com/og/rewards-compare-1200x630.jpg" />
        <meta property="og:site_name"   content="TravelCardInsider" />
        <meta property="og:locale"      content="en_US" />

        {/* ---------- Twitter Card ---------- */}
        <meta name="twitter:card"        content="summary_large_image" />
        <meta name="twitter:title"       content="Compare Travel Credit-Card Rewards – Live Calculator" />
        <meta name="twitter:description" content="See which credit card earns you the most points based on your own spending." />
        <meta name="twitter:image"       content="https://www.travelcardinsider.com/og/rewards-compare-1200x630.jpg" />

        {/* ---------- Favicon / theme ---------- */}
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#2563eb" />
        {/* Preload critical fonts */}
        <link rel="preload" href="/fonts/Roboto_Condensed-Regular.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/Roboto_Condensed-bold.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/playfair-display-regular.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/playfair-display-bold.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
    

        {/* ---------- Viewport (for completeness) ---------- */}
        <meta name="viewport" content="width=device-width,initial-scale=1" />

        {/* ---------- Structured Data ---------- */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebPage) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFAQ) }}
        />
      </Head>

      {/* ---------- Visible Breadcrumb Nav ---------- */}
      <nav aria-label="Breadcrumb" className="breadcrumb-nav" style={{ background: '#f3f4f6', padding: '0.5rem 1rem' }}>
        <ol style={{ listStyle: 'none', display: 'flex', gap: '0.25rem', margin: 0, padding: 0, fontSize: '0.9rem' }}>
          <li><a href="/"   >Home</a> <span aria-hidden="true">›</span></li>
          <li>Rewards Calculator</li>
        </ol>
      </nav>

      {/* ---------- Main Content ---------- */}
      <main
        style={{
          marginTop: '4rem',
          padding  : '2rem 1rem',
          backgroundColor: 'var(--bg-light-gray, #f9fafb)',
          minHeight: '100vh'
        }}
      >
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <h1 style={{ textAlign: 'center', marginBottom: '2rem', color: '#111827' }}>
            Compare Credit-Card Rewards &amp; Annual Value
          </h1>

          {/* Accessible subtitle (H2) */}
          <h2 style={{ textAlign: 'center', margin: '0 0 2.5rem', fontSize: '1.125rem', color: '#374151' }}>
            Enter your monthly spending, pick up to three cards, and see real-time totals.
          </h2>

          <RewardsCompareCalculator />
        </div>
      </main>

      <Footer />
    </>
  );
}
