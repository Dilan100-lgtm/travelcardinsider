// /pages/guides.js
import Head from 'next/head';
import { useState, useEffect } from 'react'; // Import hooks
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ReviewCard from '@/components/ReviewCard';
import { getAllReviewsSorted, getUniqueFilterValues } from '@/utils/getAllReviews';
import styles from '@/styles/GuidesPage.module.css';

export default function GuidesPage({ reviews: initialReviews, filterOptions }) {
  // --- State for Filters ---
  const [selectedBank, setSelectedBank] = useState('');
  const [selectedCardType, setSelectedCardType] = useState('');
  const [showTopPicks, setShowTopPicks] = useState(false); // State for Top Picks button

  // --- State for Displayed Reviews ---
  const [filteredReviews, setFilteredReviews] = useState(initialReviews);

  // --- Filtering Logic ---
  useEffect(() => {
    let currentReviews = [...initialReviews]; // Start with all reviews

    // Apply Bank filter
    if (selectedBank) {
      currentReviews = currentReviews.filter(review => review.issuer === selectedBank);
    }

    // Apply Card Type filter (assuming type is in 'tags')
    if (selectedCardType) {
      currentReviews = currentReviews.filter(review => review.tags && review.tags.includes(selectedCardType));
    }

    // Apply Top Picks filter (assuming 'featured' field exists)
    if (showTopPicks) {
        // Toggle behavior: If already showing top picks, clicking again shows all that match other filters
        // If not showing top picks, filter down to only featured ones that match other filters.
        // For simplicity here, we'll just filter *down* if showTopPicks is true.
        // You might want more complex toggle logic.
       currentReviews = currentReviews.filter(review => review.featured === true);
    }


    setFilteredReviews(currentReviews); // Update the displayed reviews

  }, [selectedBank, selectedCardType, showTopPicks, initialReviews]); // Re-run effect when filters or initial reviews change


  // --- Event Handlers ---
  const handleBankChange = (event) => {
    setSelectedBank(event.target.value);
    setShowTopPicks(false); // Reset top picks when other filters change
  };

  const handleCardTypeChange = (event) => {
    setSelectedCardType(event.target.value);
    setShowTopPicks(false); // Reset top picks when other filters change
  };

   const handleTopPicksToggle = () => {
       // Toggle the state and reset other filters if enabling top picks
       const activatingTopPicks = !showTopPicks;
       setShowTopPicks(activatingTopPicks);
       if (activatingTopPicks) {
           setSelectedBank('');
           setSelectedCardType('');
       }
   };


  // Basic JSON-LD Schema generation (same as before)
  const generateSchema = () => {
     const schema = {
       "@context": "https://schema.org",
       "@type": "CollectionPage",
       "name": "Travel Credit Card Guides & Reviews",
       "description": "Explore in-depth reviews and guides for the best travel credit cards available in 2025.",
       "url": "https://www.travelcardinsider.com/guides", // Replace with your actual domain
       "mainEntity": {
           "@type": "ItemList",
           "itemListElement": initialReviews.map((review, index) => ({ // Use initialReviews for schema
               "@type": "ListItem",
               "position": index + 1,
               "item": {
                   "@type": "Review", // Or "Article"
                   "name": review.title,
                   "url": `https://www.travelcardinsider.com/cards/${review.slug}`, // Replace domain
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: generateSchema() }}
        />
      </Head>

      

      <main className={styles.guidesContainer}>
        <h1 className={styles.pageTitle}>Travel Card Guides & Reviews</h1>
        <p className={styles.pageDescription}>
          Explore our expert reviews and find the perfect travel credit card for your adventures.
        </p>

        {/* --- Filters Section (Now functional) --- */}
        <div className={styles.filters}>
          <h2 className={styles.filterTitle}>Filter By:</h2>
           <select
             className={styles.filterSelect}
             value={selectedBank}
             onChange={handleBankChange} // Add onChange handler
            >
               <option value="">Bank (All)</option> {/* Default option */}
               {filterOptions.issuers?.map(issuer => <option key={issuer} value={issuer}>{issuer}</option>)}
           </select>
           <select
             className={styles.filterSelect}
             value={selectedCardType}
             onChange={handleCardTypeChange} // Add onChange handler
            >
               <option value="">Card Type (All)</option> {/* Default option */}
               {/* Dynamically populate card types from tags */}
               {filterOptions.cardTypes?.map(type => <option key={type} value={type}>{type}</option>)}
               {/* Fallback static options if dynamic ones fail
               <option>Airline</option>
               <option>Hotel</option>
               <option>General Travel</option>
               */}
           </select>
            <button
                className={`${styles.filterButton} ${showTopPicks ? styles.activeFilter : ''}`}
                onClick={handleTopPicksToggle} // Add onClick handler
            >
                Top Picks
            </button>
        </div>

        {/* --- Reviews Grid (Uses filteredReviews state) --- */}
        <div className={styles.reviewsGrid}>
          {filteredReviews.map((review) => ( // Map over filteredReviews
            <ReviewCard key={review.slug} review={review} />
          ))}
        </div>
         {filteredReviews.length === 0 && ( // Check filteredReviews length
             <p className={styles.noReviewsMessage}>No reviews match the selected filters.</p>
         )}
      </main>

      
    </>
  );
}

// Fetch data at build time (updated to include card types from tags)
export async function getStaticProps() {
  const reviews = getAllReviewsSorted();
  const issuers = getUniqueFilterValues('issuer');
  const cardTypes = getUniqueFilterValues('tags'); // Fetch unique tags for card types

  return {
    props: {
      reviews, // Pass initial reviews
       filterOptions: {
           issuers: issuers,
           cardTypes: cardTypes // Pass card types
       }
    },
  };
}