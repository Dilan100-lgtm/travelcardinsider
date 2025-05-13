// src/pages/news/index.js
import Head from 'next/head';
import Header from '@/components/Header'; // Assuming correct path
import Footer from '@/components/Footer'; // Assuming correct path
import NewsCard from '@/components/NewsCard';
import { getAllNews } from '@/utils/newsUtils';
import styles from '@/styles/NewsPage.module.css'; // You'll create this

export default function NewsPage({ allNews }) {
  const generateSchema = () => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "Latest Travel News & Updates",
      "description": "Stay informed with the latest news, articles, and updates from the world of travel and credit cards.",
      "url": "https://www.travelcardinsider.com/news", // Replace with your actual domain
      "mainEntity": {
        "@type": "ItemList",
        "itemListElement": allNews.map((newsItem, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "item": {
            "@type": "NewsArticle",
            "headline": newsItem.title,
            "url": `https://www.travelcardinsider.com/news/${newsItem.slug}`, // Replace domain
            "datePublished": newsItem.date,
            "author": { "@type": "Organization", "name": newsItem.author || "TravelCardInsider" },
            "image": newsItem.imageSrc ? `https://www.travelcardinsider.com${newsItem.imageSrc}` : undefined, // Replace domain
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
        <title>Latest Travel News & Updates - TravelCardInsider</title>
        <meta
          name="description"
          content="Stay informed with the latest news, articles, and updates from the world of travel, credit cards, and loyalty programs from TravelCardInsider."
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: generateSchema() }}
        />
        {/* Add other relevant meta tags, canonical URL etc. */}
        <link rel="canonical" href="https://www.travelcardinsider.com/news" />
      </Head>

      {/* <Header /> Already included in _app.js or similar layout component usually */}

      <main className={styles.newsContainer}>
        <h1 className={styles.pageTitle}>Latest News & Insights</h1>
        <p className={styles.pageDescription}>
          Your source for the latest updates in travel, credit cards, and loyalty programs.
        </p>

        {/* News Grid */}
        <div className={styles.newsGrid}>
          {allNews.map((newsItem) => (
            <NewsCard key={newsItem.slug} newsItem={newsItem} />
          ))}
        </div>
        {allNews.length === 0 && (
          <p className={styles.noNewsMessage}>No news articles available at the moment. Please check back later.</p>
        )}
      </main>

      {/* <Footer /> Already included in _app.js or similar layout component usually */}
    </>
  );
}

export async function getStaticProps() {
  const allNews = getAllNews(); // Fetches all news, sorted by date
  return {
    props: {
      allNews,
    },
    revalidate: 3600, // Optional: revalidate every hour
  };
}