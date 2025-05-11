// src/pages/affiliate-disclosure.js
import React from 'react';
import Head from 'next/head';
import Link from 'next/link'; // Import Link for internal navigation
import Header from '@/components/Header'; // Use your existing Header
import Footer from '@/components/Footer'; // Use your existing Footer
import styles from '@/styles/AffiliateDisclosure.module.css'; // Import CSS Module

const AffiliateDisclosurePage = () => {
  return (
    <>
      <Head>
        <title>Affiliate Disclosure | TravelCardInsider</title>
        <meta
          name="description"
          content="Learn about TravelCardInsider's affiliate disclosure, our commitment to transparency, and how we earn commissions through partner links."
        />
        {/* Add other relevant meta tags if needed */}
      </Head>

       {/* Render the shared header */}

      {/* Main Content Wrapper */}
      {/* Using <main> tag semantically, styled by pageContainer */}
      <main className={styles.pageContainer}>
        {/* Replicating the <section> from HTML */}
        <section id="affiliate-disclosure" className={styles.disclosureSection}>
          {/* Replicating the container div */}
          <div className={styles.container}>
            <h2 className={styles.title}>Affiliate Disclosure</h2>

            <p>
              At <strong>TravelCardInsider</strong>, we believe in complete transparency.
              We may earn a commission if you click on or apply for certain credit card offers
              mentioned on our site. This comes at no additional cost to you—it’s simply how
              we fund our operations and continue bringing you quality travel and rewards
              content.
            </p>

            <h3 className={styles.subHeading}>Why Do We Use Affiliate Links?</h3>
            <p>
              Affiliate links allow us to receive compensation whenever a user clicks or
              applies for a product we’ve recommended, such as a credit card.
              We only partner with reputable issuers and programs that align with our
              mission of helping travelers save money and enhance their journeys.
            </p>

            <h3 className={styles.subHeading}>Our Promise</h3>
            <p>
              Although we may receive compensation from certain partners, our editorial
              integrity remains paramount. Each recommendation is based on <em>objective
              research</em>, <em>hands-on testing</em>, and <em>real-world user experiences</em>.
              If a card doesn’t meet our standards, we won’t endorse it—compensation or not.
            </p>

            <h3 className={styles.subHeading}>How Commissions Affect You</h3>
            <p>
              Clicking on an affiliate link or applying for a product through our site is
              voluntary. You’ll never be charged extra. On the contrary, sometimes exclusive
              deals or higher sign-up bonuses are provided to our readers through these links.
              If you prefer, you can access card offers directly from the issuer’s website and
              still enjoy our guides and resources.
            </p>

            <h3 className={styles.subHeading}>Continuous Updates</h3>
            <p>
              We work hard to keep our information accurate and up to date. Credit card
              offers can change frequently, so we encourage you to double-check terms and
              conditions with the official issuer before applying. Our site strives to
              reflect the most recent data, but issuers may alter bonuses, fees, or other
              details without advance notice.
            </p>

            <h3 className={styles.subHeading}>Contact Us</h3>
            <p>
              If you have any questions about our affiliate relationships or want more
              details about a specific offer, feel free to reach out via our{' '}
              {/* Use Next.js Link component */}
              <Link href="/about/contact">
                Contact page
              </Link>
              . We value your trust and appreciate you choosing{' '}
              <strong>TravelCardInsider</strong> as your guide in the world of points, miles,
              and travel rewards.
            </p>

            <p className={styles.wrapUp}>
              Thank you for supporting our work. Your clicks and applications help sustain
              this platform, allowing us to continue delivering top-notch resources, tips,
              and travel advice.
            </p>
          </div>
        </section>
      </main>

       {/* Render the shared footer */}
    </>
  );
};

export default AffiliateDisclosurePage;