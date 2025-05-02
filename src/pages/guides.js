// /pages/guides.js
import Head from 'next/head';
import Header from '@/components/Header'; // Adjust path as needed
import Footer from '@/components/Footer'; // Adjust path as needed
import ReviewCard from '@/components/ReviewCard'; // Adjust path as needed
import { getAllReviewsSorted, getUniqueFilterValues } from '@/utils/getAllReviews'; // Adjust path
import styles from '@/styles/GuidesPage.module.css'; // Create this CSS module

export default function GuidesPage({ reviews, filterOptions }) {

  // Basic JSON-LD Schema generation
  const generateSchema = () => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "Travel Credit Card Guides & Reviews",
      "description": "Explore in-depth reviews and guides for the best travel credit cards available in 2025.",
      "url": "https://www.travelcardinsider.com/guides", // Replace with your actual domain
      "mainEntity": {
          "@type": "ItemList",
          "itemListElement": reviews.map((review, index) => ({
              "@type": "ListItem",
              "position": index + 1,
              "item": {
                  "@type": "Review", // Or "Article" if more appropriate
                  "name": review.title,
                  "url": `https://www.travelcardinsider.com/cards/${review.slug}`, // Replace domain
                  "datePublished": review.publishedAt,
                  "author": {
                      "@type": "Organization", // Or "Person"
                      "name": "TravelCardInsider"
                  },
                  // Add reviewRating if applicable and available
                  ...(review.rating && {
                      "reviewRating": {
                          "@type": "Rating",
                          "ratingValue": review.rating.toString(),
                          "bestRating": "10", // Assuming 10 is the best rating
                          "worstRating": "1"
                      }
                  }),
                  "publisher": {
                     "@type": "Organization",
                     "name": "TravelCardInsider",
                     // Add logo URL if available
                     // "logo": {
                     //    "@type": "ImageObject",
                     //    "url": "https://www.travelcardinsider.com/logo.png"
                     // }
                   }
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
        {/* JSON-LD Schema */}
         <script
             type="application/ld+json"
             dangerouslySetInnerHTML={{ __html: generateSchema() }}
         />
      </Head>

      <Header />

      <main className={styles.guidesContainer}>
        <h1 className={styles.pageTitle}>Travel Card Guides & Reviews</h1>
        <p className={styles.pageDescription}>
          Explore our expert reviews and find the perfect travel credit card for your adventures.
        </p>

        {/* --- Filters Section (Non-functional placeholders) --- */}
        <div className={styles.filters}>
          <h2 className={styles.filterTitle}>Filter By:</h2>
           {/* Example using select dropdowns */}
           <select className={styles.filterSelect} disabled>
               <option value="">Bank</option>
               {filterOptions.issuers?.map(issuer => <option key={issuer} value={issuer}>{issuer}</option>)}
           </select>
           <select className={styles.filterSelect} disabled>
               <option value="">Card Type</option>
               {/* Add options dynamically later */}
               <option>Airline</option>
               <option>Hotel</option>
               <option>General Travel</option>
           </select>
            <button className={styles.filterButton} disabled>Top Picks</button>
            {/* Add more filters as needed */}
        </div>


        {/* --- Reviews Grid --- */}
        <div className={styles.reviewsGrid}>
          {reviews.map((review) => (
            <ReviewCard key={review.slug} review={review} />
          ))}
        </div>
         {reviews.length === 0 && (
             <p className={styles.noReviewsMessage}>No reviews found.</p>
         )}
      </main>

      <Footer />
    </>
  );
}

// Fetch data at build time
export async function getStaticProps() {
  const reviews = getAllReviewsSorted();
  // Prepare filter options (example for issuers)
  const issuers = getUniqueFilterValues('issuer');
  // Fetch other filter values similarly (e.g., for tags to represent 'type')

  return {
    props: {
      reviews,
       filterOptions: {
           issuers: issuers,
           // Add other filter options here
       }
    },
    // Optional: Revalidate the page periodically (e.g., every hour)
    // revalidate: 3600,
  };
}