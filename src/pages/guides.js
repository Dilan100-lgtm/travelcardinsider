// pages/guides.js – **build‑safe version**
// Fixes: rating.toFixed crash during SSG by coercing every `review.rating` to a Number
// and guarding JSON‑LD generation.

import Head from 'next/head';
import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ReviewCard from '@/components/ReviewCard';
import { getAllReviewsSorted, getUniqueFilterValues } from '@/utils/getAllReviews';
import styles from '@/styles/GuidesPage.module.css';

export default function GuidesPage({ reviews: initialReviews, filterOptions }) {
  /* -------------------- Filter state -------------------- */
  const [selectedBank, setSelectedBank] = useState('');
  const [selectedCardType, setSelectedCardType] = useState('');
  const [showTopPicks, setShowTopPicks] = useState(false);

  /* -------------------- Display state ------------------- */
  const [filteredReviews, setFilteredReviews] = useState(initialReviews);

  /* -------------------- Filtering logic ----------------- */
  useEffect(() => {
    let current = [...initialReviews];

    if (selectedBank) {
      current = current.filter(r => r.issuer === selectedBank);
    }
    if (selectedCardType) {
      current = current.filter(r => r.tags?.includes(selectedCardType));
    }
    if (showTopPicks) {
      current = current.filter(r => r.featured === true);
    }
    setFilteredReviews(current);
  }, [selectedBank, selectedCardType, showTopPicks, initialReviews]);

  /* -------------------- Handlers ------------------------ */
  const handleBankChange = e => {
    setSelectedBank(e.target.value);
    setShowTopPicks(false);
  };
  const handleCardTypeChange = e => {
    setSelectedCardType(e.target.value);
    setShowTopPicks(false);
  };
  const handleTopPicksToggle = () => {
    const next = !showTopPicks;
    setShowTopPicks(next);
    if (next) {
      setSelectedBank('');
      setSelectedCardType('');
    }
  };

  /* -------------------- JSON‑LD ------------------------- */
  const generateSchema = () => {
    return JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: 'Travel Credit Card Guides & Reviews',
      description:
        'Explore in-depth reviews and guides for the best travel credit cards available in 2025.',
      url: 'https://www.travelcardinsider.com/guides',
      mainEntity: {
        '@type': 'ItemList',
        itemListElement: initialReviews.map((r, idx) => ({
          '@type': 'ListItem',
          position: idx + 1,
          item: {
            '@type': 'Review',
            name: r.title,
            url: `https://www.travelcardinsider.com/cards/${r.slug}`,
            datePublished: r.publishedAt,
            author: { '@type': 'Organization', name: 'TravelCardInsider' },
            ...(isFinite(r.rating) && {
              reviewRating: {
                '@type': 'Rating',
                ratingValue: r.rating.toString(),
                bestRating: '10',
                worstRating: '1'
              }
            }),
            publisher: { '@type': 'Organization', name: 'TravelCardInsider' }
          }
        }))
      }
    });
  };

  /* -------------------- Render -------------------------- */
  return (
    <>
      <Head>
        <title>Travel Credit Card Guides & Reviews 2025 - TravelCardInsider</title>
        <meta
          name="description"
          content="Find the best travel credit card for your needs. Explore comprehensive guides, reviews, and comparisons from TravelCardInsider."
        />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: generateSchema() }} />
      </Head>

      <Header />

      <main className={styles.guidesContainer}>
        <h1 className={styles.pageTitle}>Travel Card Guides & Reviews</h1>
        <p className={styles.pageDescription}>
          Explore our expert reviews and find the perfect travel credit card for your adventures.
        </p>

        {/* Filters */}
        <div className={styles.filters}>
          <h2 className={styles.filterTitle}>Filter By:</h2>
          <select className={styles.filterSelect} value={selectedBank} onChange={handleBankChange}>
            <option value="">Bank (All)</option>
            {filterOptions.issuers?.map(i => (
              <option key={i} value={i}>
                {i}
              </option>
            ))}
          </select>

          <select className={styles.filterSelect} value={selectedCardType} onChange={handleCardTypeChange}>
            <option value="">Card Type (All)</option>
            {filterOptions.cardTypes?.map(t => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>

          <button
            className={`${styles.filterButton} ${showTopPicks ? styles.activeFilter : ''}`}
            onClick={handleTopPicksToggle}
          >
            Top Picks
          </button>
        </div>

        {/* Review grid */}
        <div className={styles.reviewsGrid}>
          {filteredReviews.map(r => (
            <ReviewCard key={r.slug} review={r} />
          ))}
        </div>
        {filteredReviews.length === 0 && <p className={styles.noReviewsMessage}>No reviews match the selected filters.</p>}
      </main>

      <Footer />
    </>
  );
}

/* -------------------- SSG ----------------------------- */
export async function getStaticProps() {
  // Ensure every rating is a number to avoid toFixed crash
  const rawReviews = getAllReviewsSorted();
  const reviews = rawReviews.map(r => ({ ...r, rating: Number(r.rating) || 0 }));

  return {
    props: {
      reviews,
      filterOptions: {
        issuers: getUniqueFilterValues('issuer'),
        cardTypes: getUniqueFilterValues('tags')
      }
    }
  };
}
