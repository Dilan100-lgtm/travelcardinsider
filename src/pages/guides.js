// /pages/guides.js
import Head from 'next/head';
import Link from 'next/link'; // IMPROVEMENT: Import Link for internal linking
import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ReviewCard from '@/components/ReviewCard';
import { getAllReviewsSorted, getUniqueFilterValues } from '@/utils/getAllReviews';
import styles from '@/styles/GuidesPage.module.css';

export default function GuidesPage({ reviews: initialReviews, filterOptions }) {
  // --- State for Filters ---
  const [selectedBank, setSelectedBank] = useState('');
  const [selectedCardType, setSelectedCardType] = useState('');
  const [showTopPicks, setShowTopPicks] = useState(false);

  // --- State for Displayed Reviews ---
  const [filteredReviews, setFilteredReviews] = useState(initialReviews);

  // --- Filtering Logic ---
  useEffect(() => {
    let currentReviews = [...initialReviews];

    if (selectedBank) {
      currentReviews = currentReviews.filter(review => review.issuer === selectedBank);
    }

    if (selectedCardType) {
      currentReviews = currentReviews.filter(review => review.tags && review.tags.includes(selectedCardType));
    }

    if (showTopPicks) {
       currentReviews = currentReviews.filter(review => review.featured === true);
    }

    setFilteredReviews(currentReviews);

  }, [selectedBank, selectedCardType, showTopPicks, initialReviews]);


  // --- Event Handlers ---
  const handleBankChange = (event) => {
    setSelectedBank(event.target.value);
    setShowTopPicks(false);
  };

  const handleCardTypeChange = (event) => {
    setSelectedCardType(event.target.value);
    setShowTopPicks(false);
  };

   const handleTopPicksToggle = () => {
       const activatingTopPicks = !showTopPicks;
       setShowTopPicks(activatingTopPicks);
       if (activatingTopPicks) {
           setSelectedBank('');
           setSelectedCardType('');
       }
   };


  // IMPROVEMENT: Updated schema to include Breadcrumbs using a @graph
  const generateSchema = () => {
     const schema = {
       "@context": "https://schema.org",
       // Using @graph allows us to define multiple, distinct schema types on one page.
       "@graph": [
        {
            "@type": "CollectionPage",
            "name": "Travel Credit Card Guides & Reviews",
            "description": "Explore in-depth reviews and guides for the best travel credit cards available in 2025.",
            "url": "https://www.travelcardinsider.com/guides",
            "mainEntity": {
                "@type": "ItemList",
                "itemListElement": initialReviews.map((review, index) => ({
                    "@type": "ListItem",
                    "position": index + 1,
                    "item": {
                        "@type": "Review",
                        "name": review.title,
                        "url": `https://www.travelcardinsider.com/cards/${review.slug}`,
                        "datePublished": review.publishedAt,
                        "author": { "@type": "Organization", "name": "TravelCardInsider" },
                        ...(review.rating && {
                            "reviewRating": {
                                "@type": "Rating",
                                "ratingValue": review.rating.toString(),
                                "bestRating": "10",
                                "worstRating": "1"
                            }
                        }),
                        "publisher": { "@type": "Organization", "name": "TravelCardInsider" }
                    }
                }))
            }
        },
        {
            "@type": "BreadcrumbList",
            "itemListElement": [
                {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Home",
                    "item": "https://www.travelcardinsider.com/"
                },
                {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Guides",
                    "item": "https://www.travelcardinsider.com/guides"
                }
            ]
        }
       ]
     };
     return JSON.stringify(schema);
   };


  return (
    <>
      <Head>
        <title>Travel Credit Card Guides & Reviews 2025 - TravelCardInsider</title>
        <meta
          name="description"
          content="Find the best travel credit card for your needs. Explore comprehensive guides, reviews, and comparisons from TravelCardInsider."
        />
        
        {/* --- IMPROVEMENT: Canonical Tag --- */}
        {/* This tells Google the "preferred" version of this page, preventing duplicate content issues from URL parameters. */}
        <link rel="canonical" href="https://www.travelcardinsider.com/guides" />

        {/* --- IMPROVEMENT: Open Graph / Social Media Tags --- */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Travel Credit Card Guides & Reviews 2025" />
        <meta property="og:description" content="Explore our expert reviews and find the perfect travel credit card for your adventures." />
        <meta property="og:url" content="https://www.travelcardinsider.com/guides" />
        {/* Replace with a high-quality image URL for social previews (e.g., 1200x630px) */}
        <meta property="og:image" content="https://www.travelcardinsider.com/images/social-guides-preview.jpg" /> 

        {/* --- IMPROVEMENT: Twitter Card Tags --- */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Travel Credit Card Guides & Reviews 2025" />
        <meta name="twitter:description" content="Explore our expert reviews and find the perfect travel credit card for your adventures." />
        {/* Make sure this image URL is the same as your og:image */}
        <meta name="twitter:image" content="https://www.travelcardinsider.com/images/social-guides-preview.jpg" />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: generateSchema() }}
        />
      </Head>

      <main className={styles.guidesContainer}>
        <h1 className={styles.pageTitle}>Travel Card Guides & Reviews</h1>
        
        {/* --- IMPROVEMENT: Internal Linking --- */}
        {/* Added internal links to popular pages to pass link equity and improve user navigation. */}
        <p className={styles.pageDescription}>
          Explore our expert reviews and find the perfect travel credit card for your adventures. 
          We break down top-tier cards like the{' '}
          <Link href="/cards/amex-platinum-review" legacyBehavior><a>Amex Platinum</a></Link> or the{' '}
          <Link href="/cards/chase-sapphire-reserve-guide" legacyBehavior><a>Chase Sapphire Reserve</a></Link>{' '}
          to help you choose.
        </p>

        {/* --- Filters Section --- */}
        <div className={styles.filters}>
          <h2 className={styles.filterTitle}>Filter By:</h2>
           <select
             className={styles.filterSelect}
             value={selectedBank}
             onChange={handleBankChange}
            >
               <option value="">Bank (All)</option>
               {filterOptions.issuers?.map(issuer => <option key={issuer} value={issuer}>{issuer}</option>)}
           </select>
           <select
             className={styles.filterSelect}
             value={selectedCardType}
             onChange={handleCardTypeChange}
            >
               <option value="">Card Type (All)</option>
               {filterOptions.cardTypes?.map(type => <option key={type} value={type}>{type}</option>)}
           </select>
            <button
                className={`${styles.filterButton} ${showTopPicks ? styles.activeFilter : ''}`}
                onClick={handleTopPicksToggle}
            >
                Top Picks
            </button>
        </div>

        {/* --- IMPROVEMENT: Added a content-rich H2 --- */}
        <h2 className={styles.contentHeading}>
            {showTopPicks ? 'Our Top Travel Card Picks' : 'All Travel Card Reviews'}
        </h2>

        {/* --- Reviews Grid --- */}
        <div className={styles.reviewsGrid}>
          {filteredReviews.map((review) => (
            <ReviewCard key={review.slug} review={review} />
          ))}
        </div>
         {filteredReviews.length === 0 && (
             <p className={styles.noReviewsMessage}>No reviews match the selected filters.</p>
         )}
      </main>
    </>
  );
}

// Fetch data at build time
export async function getStaticProps() {
  const reviews = getAllReviewsSorted();
  const issuers = getUniqueFilterValues('issuer');
  const cardTypes = getUniqueFilterValues('tags');

  return {
    props: {
      reviews,
       filterOptions: {
           issuers: issuers,
           cardTypes: cardTypes
       }
    },
  };
}