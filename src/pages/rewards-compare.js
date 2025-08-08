import React from 'react';
import Head from 'next/head';
import RewardsCompareCalculator from '@/components/RewardsCompareCalculator';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useRouter } from 'next/router';

export default function RewardsComparePage() {
  const router = useRouter();
  const canonicalUrl = `https://www.travelcardinsider.com${router.asPath}`;

  const lastDataUpdate = "August 8, 2025"; // Updated to current date

  /** ------------ JSON-LD STRUCTURED DATA ------------- **/
  const jsonLdWebPage = {
    '@context': 'https://schema.org',
    '@type'   : 'WebPage',
    name      : 'Credit Card Points & Rewards Value Calculator',
    url       : canonicalUrl,
    description:
      'Use our free credit card points calculator to compare rewards from top cards. Enter your spending to see the estimated dollar value of points, perks, and bonuses.',
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
        name      : 'Points & Rewards Calculator',
        item      : canonicalUrl
      }
    ]
  };

  // SEO ENHANCEMENT: Expanded the FAQ schema with new questions from Semrush data.
  const jsonLdFAQ = {
    '@context': 'https://schema.org',
    '@type'   : 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name   : 'How does this credit card points calculator work?',
        acceptedAnswer: {
          '@type': 'Answer',
          text   :
            'Our calculator estimates value by matching your monthly spending to each card’s bonus categories, applying the point multiplier, and converting points to a dollar value using our latest Cents-Per-Point valuations. It also includes perk values and subtracts annual fees.'
        }
      },
       {
        '@type': 'Question',
        name   : 'How do you calculate credit card points value?',
        acceptedAnswer: {
          '@type': 'Answer',
          text   : 'The value of credit card points is calculated with a simple formula: Total Points × Cents Per Point (CPP) Value = Total Value. Our tool automates this by using our researched CPP valuations for redemption options like cash back, travel portals, or transfer partners.'
        }
      },
      {
        '@type': 'Question',
        name   : 'How do I calculate how many reward points I will earn?',
        acceptedAnswer: {
          '@type': 'Answer',
          text   : 'You can estimate the reward points you will earn by multiplying your spending in a specific category (e.g., $500 on dining) by the card\'s points multiplier for that category (e.g., 3x points). Our calculator does this for all spending categories automatically.'
        }
      },
      {
        '@type': 'Question',
        name   : 'Which credit cards are included in the comparison tool?',
        acceptedAnswer: {
          '@type': 'Answer',
          text   :
            'The tool covers 50+ of the most popular U.S. travel, airline, hotel, and premium cash-back cards. Our database is updated weekly from issuers’ official sites to ensure accuracy.'
        }
      }
    ]
  };

  return (
    <>
      <Head>
        {/* ---------- Primary Meta ---------- */}
        <title>Credit Card Points Calculator & Rewards Comparison | TravelCardInsider</title>
        <meta
          name="description"
          content="Use our free credit card points calculator to compare rewards from top cards. Enter your spending to see the estimated dollar value of points, perks, and bonuses in 2025."
        />
        {/* SEO ENHANCEMENT: Added keyword variations to meta keywords. */}
        <meta name="keywords" content="credit card points calculator, rewards calculator, credit card points value calculator, points calculator credit card, how to calculate credit card points, credit card points to cash calculator" />
        <link rel="canonical" href={canonicalUrl} />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />

        {/* ---------- Open Graph / Twitter (no changes needed from previous version) ---------- */}
        <meta property="og:type"        content="website" />
        <meta property="og:title"       content="Credit Card Points & Rewards Calculator" />
        <meta property="og:description" content="Find the best card for your lifestyle. Our free calculator instantly shows you the real-world value of points, perks, and bonuses based on your spending." />
        <meta property="og:url"         content={canonicalUrl} />
        <meta property="og:image"       content="https://www.travelcardinsider.com/og/rewards-compare-1200x630.jpg" />
        <meta name="twitter:card"       content="summary_large_image" />
        {/* ... other meta tags ... */}
        <meta name="viewport" content="width=device-width,initial-scale=1" />

        {/* ---------- Structured Data Scripts ---------- */}
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

      <Header />

      <main>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '1rem 2rem' }}>
          <h1 style={{ textAlign: 'center' }}>
            Credit Card Points &amp; Rewards Value Calculator
          </h1>
          
          {/* SEO ENHANCEMENT: Integrated a keyword variation into the H2. */}
          <h2 style={{ textAlign: 'center', margin: '0 auto 2.5rem auto', fontSize: '1.125rem', fontWeight: 'normal', maxWidth: '800px' }}>
             Which card is best for you? Our free credit card points value calculator uses your spending to compare the real-world value of rewards, perks, and bonuses from top cards.
          </h2>
          
          <RewardsCompareCalculator />

          {/* --- E-E-A-T & CONTENT SECTIONS --- */}
          <section style={{ maxWidth: '900px', margin: '4rem auto' }}>
            <h2 style={{ fontSize: '1.5rem' }}>How We Calculate Estimated Value</h2>
            {/* SEO ENHANCEMENT: Added variations to the descriptive text. */}
            <p>
              This tool acts as a comprehensive **points calculator for your credit card** options. It provides an estimated annual value by processing your personal spending against each card's specific rules. We consider everything from simple **credit card points to cash** conversions to complex travel redemptions.
            </p>
            <ul>
              <li>Annualizing your monthly spending inputs ($ Input × 12).</li>
              {/* ... other list items ... */}
            </ul>
          </section>

          {/* SEO ENHANCEMENT: Added a visible FAQ section that matches the JSON-LD schema. */}
          <section style={{ maxWidth: '900px', margin: '4rem auto' }}>
            <h2 style={{ fontSize: '1.5rem' }}>Frequently Asked Questions</h2>
            <div>
              <h3>How does this credit card points calculator work?</h3>
              <p>Our calculator estimates value by matching your monthly spending to each card’s bonus categories, applying the point multiplier, and converting points to a dollar value using our latest Cents-Per-Point valuations. It also includes perk values and subtracts annual fees.</p>
            </div>
            <div style={{marginTop: '1rem'}}>
              <h3>How do you calculate credit card points value?</h3>
              <p>The value of credit card points is calculated with a simple formula: Total Points × Cents Per Point (CPP) Value = Total Value. Our tool automates this by using our researched CPP valuations for redemption options like cash back, travel portals, or transfer partners.</p>
            </div>
            <div style={{marginTop: '1rem'}}>
              <h3>How do I calculate how many reward points I will earn?</h3>
              <p>You can estimate the reward points you will earn by multiplying your spending in a specific category (e.g., $500 on dining) by the card's points multiplier for that category (e.g., 3x points). Our calculator does this for all spending categories automatically.</p>
            </div>
             <div style={{marginTop: '1rem'}}>
                <h3>Which credit cards are included in the comparison tool?</h3>
                <p>The tool covers 50+ of the most popular U.S. travel, airline, hotel, and premium cash-back cards. Our database is updated weekly from issuers’ official sites to ensure accuracy.</p>
            </div>
          </section>
          
          {/* ... Other sections like Data Source, Disclaimers etc. ... */}

        </div>
      </main>

      <Footer />
    </>
  );
}