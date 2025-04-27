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
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}> {/* Increased max-width for wider layout */}

{/* E-E-A-T: Clear Title & Introduction */}
<h1 style={{ textAlign: 'center', fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', marginBottom: '1rem', color: '#111827', fontFamily: "'Playfair Display', serif" }}>
  Compare Credit Card Rewards & Value
</h1>
<p style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 2.5rem auto', color: '#374151', lineHeight: 1.6 }}>
  Select up to 3 cards and enter your estimated monthly spending to see which cards offer the best estimated value for *you*. Our calculator considers rewards, perks, fees, and bonuses.
</p>

{/* The Calculator Component */}
<RewardsCompareCalculator />

{/* E-E-A-T: Methodology / How We Calculate */}
<section style={{ maxWidth: '900px', margin: '3rem auto', padding: '1.5rem', background: '#fff', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
  <h2 style={{ fontFamily: "'Playfair Display', serif", marginBottom: '1rem', borderBottom: '1px solid #eee', paddingBottom: '0.5rem' }}>
    How We Calculate Estimated Value
  </h2>
  <p>This calculator estimates annual rewards by:</p>
  <ul style={{ paddingLeft: '20px', lineHeight: 1.7, margin: '1rem 0' }}>
    <li>Annualizing your monthly spending inputs ($ Input × 12).</li>
    <li>Applying the card's reward multipliers for each category, referencing detailed card data.</li>
    <li>Accounting for annual spending caps on specific reward categories where applicable.</li>
    <li>Calculating the monetary value of points based on estimated Cents Per Point (CPP) for the selected redemption strategy (e.g., cash back, travel portal, transfer partners). You can change the strategy above the spending inputs.</li>
    <li>Estimating the annual value of key card perks like travel credits or anniversary points.</li>
    <li>Subtracting the card's annual fee.</li>
    <li>Adding the estimated value of the sign-up bonus for the "1st Year Net Value" calculation.</li>
  </ul>
  <p style={{ marginTop: '1rem', fontSize: '0.9rem', color: '#6b7280' }}>
    These are estimates designed for comparison. Your actual value depends on precise spending and redemption choices.
  </p>
</section>

{/* E-E-A-T: Data Source & Accuracy */}
<section style={{ maxWidth: '900px', margin: '3rem auto', padding: '1.5rem', background: '#fff', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
   <h2 style={{ fontFamily: "'Playfair Display', serif", marginBottom: '1rem', borderBottom: '1px solid #eee', paddingBottom: '0.5rem' }}>
    Data Source & Accuracy
  </h2>
  <p>
     Card details, including rewards, fees, perks, and bonus offers, are sourced from our internal database and publicly available issuer data. We strive for accuracy, but details can change frequently.
  </p>
  <p>
    <strong>Last Data Refresh: {lastDataUpdate}.</strong> Always verify current offers, rates, fees, and benefits directly with the card issuer before applying. Links are provided above each card comparison column.
  </p>
</section>

{/* E-E-A-T: Author/Expertise Info (Example Structure) */}
{/*
<section style={{ maxWidth: '900px', margin: '3rem auto', padding: '1.5rem', background: '#fff', borderRadius: '8px', boxShadow:'0 2px 8px rgba(0,0,0,0.05)' }}>
    <h2 style={{ fontFamily: "'Playfair Display', serif", marginBottom: '1rem', borderBottom: '1px solid #eee', paddingBottom: '0.5rem' }}>
        About the Analysis
    </h2>
    <p>
        This tool and the underlying data analysis are maintained by [Author Name/Team Name], experts in credit card rewards and travel hacking with [X] years of experience... [Link to About Page]
    </p>
</section>
*/}

{/* E-E-A-T: Disclaimers (Can be here or in a global footer) */}
<section style={{ maxWidth: '900px', margin: '3rem auto', fontSize: '0.85rem', color: '#6b7280', lineHeight: 1.5, textAlign: 'center' }}>
  <p><strong>Disclaimer:</strong> The information provided by this calculator is for informational and comparison purposes only and does not constitute financial advice. Estimated values are based on data and user inputs and are not guaranteed. Credit card offers, rates, fees, and benefits change frequently; verify all information directly with the issuer. </p>
  {/* Update with your specific disclosure */}
  <p><strong>Advertiser Disclosure:</strong> TravelCardInsider may receive compensation through affiliate links when users apply and are approved for credit cards through links on this site. This compensation may impact how and where products appear. We strive to provide accurate comparisons, but this site does not include all available credit card offers.</p>
</section>

</div>
      </main>

      <Footer />
    </>
  );
}
