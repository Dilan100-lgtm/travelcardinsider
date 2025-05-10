// src/pages/about/our-mission.js
import React from 'react';
import Head from 'next/head';
import Image from 'next/image'; // Import Next.js Image component
import Header from '@/components/Header'; // Use your existing Header
import Footer from '@/components/Footer'; // Use your existing Footer
import styles from '@/styles/OurMission.module.css'; // Import CSS Module

const OurMissionPage = () => {
  return (
    <>
      <Head>
        <title>Our Mission | TravelCardInsider</title>
        <meta
          name="description"
          content="Learn about the mission of TravelCardInsider: to demystify points and miles, offer clear advice, and help you explore the world affordably using travel rewards."
        />
        {/* Add other relevant meta tags if needed */}
      </Head>

      <Header /> {/* Render the shared header */}

      {/* Main Content Wrapper */}
      <main className={styles.pageContainer}>
        {/* Replicating the <section> from HTML */}
        <section id="our-mission" className={styles.missionSection}>
          {/* Replicating the container div */}
          <div className={styles.container}>
            <h2 className={styles.title}>Our Mission</h2>
            {/* Container for image and text */}
            <div className={styles.missionContent}>
              {/* Image */}
              <div className={styles.missionImageWrapper}>
                <Image
                  // Ensure this image exists in your /public directory
                  src="/fabio-comparelli-uq2E2V4LhCY-unsplash (1).jpg"
                  alt="Inspiring Travel Scene - Mountains and Sky" // More descriptive alt text
                  width={600} // Provide appropriate width
                  height={400} // Provide appropriate height
                  layout="responsive"
                  className={styles.missionImage} // Apply styling via class
                />
              </div>

              {/* Text */}
              <div className={styles.missionText}>
                <p>
                  At <strong>TravelCardInsider</strong>, we’re dedicated to helping you turn everyday purchases into{' '}
                  <em>extraordinary journeys</em>. By focusing on the powerful synergy between travel rewards, loyalty{' '}
                  programs, and credit card strategies, we believe everyone can access luxury experiences without{' '}
                  breaking the bank.
                </p>
                <p>
                  Our <strong>mission</strong> is to demystify points and miles, offering clear, honest advice so you{' '}
                  can <em>earn more, spend less</em>, and explore the world in comfort. We’re here to connect you with{' '}
                  expert tips, fresh insights, and a supportive community that ensures every trip is just as{' '}
                  unforgettable as the last.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

       {/* Render the shared footer */}
    </>
  );
};

export default OurMissionPage;