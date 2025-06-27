import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import GearCard from '@/components/GearCard'; // New component for displaying gear
import { getAllGearItems } from '@/utils/getGear'; // New utility to fetch gear data
import styles from '@/styles/GearPage.module.css'; // You'll create this CSS module

export default function GearPage({ gearItems }) {
  // Basic JSON-LD Schema generation for a CollectionPage of gear
  const generateSchema = () => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "Travel Gear Guides & Reviews",
      "description": "Explore expert guides and reviews for essential travel gear to enhance your adventures.",
      "url": "https://www.travelcardinsider.com/gear", // Replace with your actual domain
      "mainEntity": {
        "@type": "ItemList",
        "itemListElement": gearItems.map((item, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "item": {
            "@type": "Product", // Assuming each gear item is a product
            "name": item.title,
            "url": `https://www.travelcardinsider.com/gear/${item.slug}`, // Link to individual gear item page if you create one
            "image": item.image,
            "description": item.description,
            // Add more Product schema properties if available, e.g., brand, offers, aggregateRating
          }
        }))
      }
    };
    return JSON.stringify(schema);
  };

  return (
    <>
      <Head>
        <title>Travel Gear Guides & Reviews 2025 - TravelCardInsider</title>
        <meta
          name="description"
          content="Find the best travel gear for your needs. Explore comprehensive guides and reviews from TravelCardInsider."
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: generateSchema() }}
        />
      </Head>

      <Header />

      <main className={styles.gearContainer}>
        <h1 className={styles.pageTitle}>Travel Gear Guides & Reviews</h1>
        <p className={styles.pageDescription}>
          Discover essential travel gear recommended by experts for every adventure.
        </p>

        {/* --- Gear Grid --- */}
        <div className={styles.gearGrid}>
          {gearItems.length > 0 ? (
            gearItems.map((item) => (
              <GearCard key={item.slug} gearItem={item} />
            ))
          ) : (
            <p className={styles.noGearMessage}>No travel gear found at the moment.</p>
          )}
        </div>
      </main>

      <Footer />
    </>
  );
}

// Fetch data at build time
export async function getStaticProps() {
  const gearItems = getAllGearItems(); // Fetch all gear items

  return {
    props: {
      gearItems, // Pass gear items to the component
    },
    revalidate: 3600, // Re-generate page every hour (optional)
  };
}