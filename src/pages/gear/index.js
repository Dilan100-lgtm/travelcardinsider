// File: pages/gear/index.js
"use client";

import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../../styles/NoFTFCardsReview.module.css'; // We can reuse styles you already have

// This is where you will list all your gear reviews.
// For now, we'll add one for "Best Travel Backpacks".
const gearReviews = [
  {
    title: 'Best Travel Backpacks 2025: Your Guide to the Perfect Pack',
    description: 'We review top picks for versatility, carry-on compliance, and urban exploration to help you find the perfect travel companion.',
    link: '/gear/best-travel-backpacks-2025',
    image: '/pexels-olly-837358.webp', // ❗ You will replace this with a real image later
  },
  // ✏️ When you write more gear reviews, you will add them here.
];

function TravelGearPage() {
  return (
    <>
      <Head>
        <title>Travel Gear Reviews | Travel Card Insider</title>
        <meta name="description" content="Expert reviews and guides on the best travel gear, from backpacks and luggage to tech and accessories." />
        <link rel="canonical" href="https://www.travelcardinsider.com/gear" />
      </Head>

      {/* I'm reusing the main container style from your other pages to keep the look consistent. */}
      <main className={styles.reviewContainer} style={{maxWidth: '900px', margin: '0 auto'}}>
        <header className={styles.reviewHeader}>
          <h1>Travel Gear Reviews</h1>
          <p style={{fontSize: '1.1rem', color: '#555'}}>Expert analysis of the gear that makes your journey smoother. We test so you can travel smarter.</p>
        </header>

        {/* This section will display each review as a clickable card. */}
        <div className="gear-list" style={{marginTop: '2rem'}}>
          {gearReviews.map((review) => (
            <Link key={review.link} href={review.link} passHref>
              <a style={{textDecoration: 'none', color: 'inherit', display: 'block', marginBottom: '2.5rem', border: '1px solid #e0e0e0', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 4px 12px rgba(0,0,0,0.08)', transition: 'transform 0.2s ease, box-shadow 0.2s ease'}}>
                <div style={{ position: 'relative', width: '100%', paddingTop: '50%' /* This creates a 2:1 aspect ratio for the image container */ }}>
                    <Image
                        src={review.image}
                        alt={`Hero image for ${review.title}`}
                        layout="fill"
                        objectFit="cover"
                    />
                </div>
                <div style={{padding: '1.5rem'}}>
                    <h2 style={{marginTop: '0', marginBottom: '0.5rem'}}>{review.title}</h2>
                    <p style={{margin: '0', color: '#555'}}>{review.description}</p>
                    <span style={{display: 'inline-block', marginTop: '1rem', fontWeight: 'bold', color: '#007bff'}}>Read More →</span>
                </div>
              </a>
            </Link>
          ))}
        </div>
      </main>
    </>
  );
}

export default TravelGearPage;