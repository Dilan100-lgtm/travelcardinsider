// src/pages/about/who-we-are.js
import React from 'react';
import Head from 'next/head';
import Image from 'next/image'; // Import Next.js Image component
import Header from '@/components/Header'; // Use your existing Header
import Footer from '@/components/Footer'; // Use your existing Footer
import styles from '@/styles/OurMission.module.css'; // Import CSS Module for this page

const WhoWeArePage = () => {
  return (
    <>
      <Head>
        <title>Who We Are | TravelCardInsider</title>
        <meta
          name="description"
          content="Meet the team at TravelCardInsider - passionate travelers and finance experts dedicated to helping you master travel rewards and credit card strategies."
        />
        {/* Add other relevant meta tags if needed */}
      </Head>

      <Header /> {/* Render the shared header */}

      {/* Main Content Wrapper */}
      <main className={styles.pageContainer}>
        {/* Replicating the <section> from HTML */}
        <section id="who-we-are" className={styles.aboutSection}>
          {/* Replicating the container div */}
          <div className={styles.container}>
            <h2 className={styles.title}>Who We Are</h2>
            {/* Container for image and text */}
            <div className={styles.aboutContent}>
              {/* Image */}
              <div className={styles.aboutImageWrapper}>
                <Image
                  // ** Important: Ensure this image exists in your /public directory **
                  src="/campaign-creators-gMsnXqILjp4-unsplash (1).jpg"
                  alt="TravelCardInsider Team or Brand Representation" // Descriptive alt text
                  width={600} // Provide appropriate width
                  height={400} // Provide appropriate height
                  layout="responsive"
                  className={styles.aboutImage} // Apply styling via class
                />
              </div>

              {/* Text */}
              <div className={styles.aboutText}>
                <p>
                  At <strong>TravelCardInsider</strong>, we’re a team of passionate travelers, finance experts, and points-and-miles enthusiasts dedicated to
                  helping you discover the best credit cards and travel rewards strategies. Our mission is simple:
                  <em> turn your everyday spending into unforgettable journeys</em>.
                </p>
                <p>
                  Whether you’re planning a quick weekend getaway or a month-long family adventure, we’ll guide you through
                  the ins and outs of loyalty programs, sign-up bonuses, and redemption sweet spots—so you can spend less
                  money and more time exploring the world. Ready to earn more points, unlock amazing perks, and enjoy
                  stress-free travel? Stick with us, and we’ll show you how.
                </p>
                <p>
                  <strong>We believe</strong> that luxury travel doesn’t have to come with a luxury price tag.
                  By combining the right credit cards, loyalty programs, and strategic planning, you can elevate every trip
                  without blowing your budget. If you’re ready to <em>max out your rewards</em> and experience life-changing
                  destinations, you’ve come to the right place.
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

export default WhoWeArePage;