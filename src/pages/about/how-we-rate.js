// src/pages/about/how-we-rate.js
import React from 'react';
import Head from 'next/head';
import Header from '@/components/Header'; // Use your existing Header
import Footer from '@/components/Footer'; // Use your existing Footer
import styles from '@/styles/AffiliateDisclosure.module.css'; // Import CSS Module

const HowWeRatePage = () => {
  return (
    <>
      <Head>
        <title>How We Rate Credit Cards | TravelCardInsider</title>
        <meta
          name="description"
          content="Learn about TravelCardInsider's unbiased, multi-factor rating system for evaluating travel credit cards based on rewards, perks, fees, flexibility, and user experience."
        />
        {/* Add other relevant meta tags if needed */}
      </Head>

       {/* Render the shared header */}

      {/* Main Content Wrapper */}
      <main className={styles.pageContainer}>
        {/* Replicating the <section> from HTML */}
        <section id="how-we-rate-cards" className={styles.ratingSection}>
          {/* Replicating the container div */}
          <div className={styles.container}>
            <h2 className={styles.title}>How We Rate Credit Cards</h2>

            {/* INTRO TEXT */}
            <div className={styles.intro}>
              <p>
                At <strong>TravelCardInsider</strong>, we believe in evaluating every travel credit card
                through a clear, unbiased lens. Our mission is to demystify complex perks, highlight
                real costs, and spotlight unique benefits—so you can confidently pick the card that best
                aligns with your travel style and goals.
              </p>
            </div>

            {/* RATING SYSTEM METHOD */}
            <div className={styles.method}>
              <h3 className={styles.subHeading}>Our Rating Method</h3>
              <p>
                We’ve developed an <em>advanced, multi-factor rating system</em> covering
                everything from everyday earning rates to real-world user experiences.
                Each card’s final score (0–10) comes from weighted category ratings:
              </p>
              <ul className={styles.list}>
                <li><strong>Rewards &amp; Earning Potential (30%):</strong> Points per dollar, bonus categories, sign-up offers.</li>
                <li><strong>Travel Perks &amp; Protections (25%):</strong> Lounge access, insurance, baggage perks, statement credits.</li>
                <li><strong>Fees &amp; Overall Value (20%):</strong> Annual fee, foreign transaction fees, how quickly you offset costs.</li>
                <li><strong>Redemption Flexibility (15%):</strong> Transfer partners, booking ease, dynamic vs. fixed rates.</li>
                <li><strong>Customer Experience &amp; Support (10%):</strong> Issuer reputation, mobile app, dispute resolution.</li>
              </ul>
              <p>
                By scoring each category from 1–10 and applying the percentages above,
                we generate a final composite score. This transparent approach reveals
                each card’s strengths and weaknesses, so you see exactly where it excels
                or falls short.
              </p>
            </div>

            {/* TRANSPARENCY & INTEGRITY */}
            <div className={styles.transparency}>
              <h3 className={styles.subHeading}>Transparency &amp; Integrity</h3>
              <p>
                While we may receive compensation if you apply for a card through certain links,
                we <strong>never</strong> let affiliate partnerships skew our ratings. Our editorial
                process prioritizes honest reporting of each card’s features, ensuring you can
                trust our final verdict.
              </p>
              <p>
                We regularly revisit and update each card’s score if major changes occur—like
                new rewards structures, lounge expansions, or changes in redemption policies.
                That way, you’ll always find the most accurate, up-to-date information
                on <em>TravelCardInsider</em>.
              </p>
            </div>

            {/* EXAMPLE BREAKDOWN */}
            <div className={styles.example}>
              <h3 className={styles.subHeading}>Example: How a Score Is Calculated</h3>
              <p>
                Suppose a hypothetical card scores:
              </p>
              <ul className={styles.list}>
                <li>Rewards &amp; Earning: <strong>8/10</strong></li>
                <li>Travel Perks &amp; Protections: <strong>9/10</strong></li>
                <li>Fees &amp; Overall Value: <strong>7/10</strong></li>
                <li>Redemption Flexibility: <strong>8/10</strong></li>
                <li>Customer Support: <strong>8/10</strong></li>
              </ul>
              <p>
                Factoring in the weights—30%, 25%, 20%, 15%, and 10%—we sum the
                weighted scores to produce an overall rating (e.g., ~8.2/10).
                This final figure provides an at-a-glance snapshot, while category breakdown
                shows you <em>exactly</em> why it earned that score.
              </p>
            </div>

            {/* WRAP-UP / CTA */}
            <div className={styles.wrapUp}>
              <p>
                We hope our transparent methodology helps you compare travel credit cards
                confidently. By revealing each card’s true value—beyond the flashy sign-up bonus
                or premium lounge perks—you can invest in the card that genuinely delivers for
                your everyday spending and travel dreams.
              </p>
            </div>
          </div>
        </section>
      </main>

       {/* Render the shared footer */}
    </>
  );
};

export default HowWeRatePage;