// pages/gear/[slug].js
import Head from 'next/head';
import Image from 'next/image'; // Import Image component
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getAllGearItems, getGearItemBySlug } from '@/utils/getGear';
import styles from '@/styles/GearDetailPage.module.css';

export default function GearDetailPage({ gearItem }) {
  if (!gearItem) {
    return (
      <>
        <Head><title>Gear Not Found</title></Head>
        <Header />
        <main className={styles.gearDetailContainer}>
          <p>Sorry, this gear review could not be found.</p>
        </main>
        <Footer />
      </>
    );
  }

  // Check if there are structured backpacks for "Part II"
  const hasStructuredBackpacks = gearItem.backpacks && gearItem.backpacks.length > 0;

  return (
    <>
      <Head>
        <title>{gearItem.title} - TravelCardInsider</title>
        <meta name="description" content={gearItem.description} />
        <meta property="og:title" content={gearItem.title} />
        <meta property="og:description" content={gearItem.description} />
        <meta property="og:image" content={`https://www.travelcardinsider.com${gearItem.image}`} />
        <meta property="og:url" content={`https://www.travelcardinsider.com/gear/${gearItem.slug}`} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <Header />

      <main className={styles.gearDetailContainer}>
        <article className={styles.gearArticle}>
          <h1 className={styles.articleTitle}>{gearItem.title}</h1>
          <div className={styles.articleMeta}>
            <p>Published: {new Date(gearItem.publishedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
            {gearItem.rating && <p>Overall Rating: {gearItem.rating.toFixed(1)} / 10</p>}
          </div>

          {/* Main review image */}
          {gearItem.image && (
            <div className={styles.articleImageWrapper}>
              <Image
                src={gearItem.image}
                alt={gearItem.title}
                width={800} // Adjust as needed
                height={450} // Adjust as needed
                layout="responsive"
                objectFit="cover"
                className={styles.articleImage}
                priority // Since it's the main image for the review
              />
            </div>
          )}

          {/* Render Part I content */}
          <div
            className={styles.articleContent}
            dangerouslySetInnerHTML={{ __html: gearItem.content.split('<h2>Part III: The Final Verdict')[0] + '<h2>Part III: The Final Verdict' }}
          />

          {/* NEW: Render Part II - Structured Backpack Reviews */}
          {hasStructuredBackpacks && (
            <section className={styles.backpackPortfolioSection}>
              <h2>Part II: The 2025 Elite Seven Portfolio: In-Depth Reviews</h2>
              {gearItem.backpacks.map((backpack) => (
                <div key={backpack.slug} className={styles.backpackReviewCard}>
                  <h3>{backpack.order}. {backpack.name}: {backpack.subTitle}</h3>
                  <div className={styles.backpackImageWrapper}>
                    <Image
                      src={backpack.image}
                      alt={backpack.name}
                      width={400} // Adjust as needed for individual bag images
                      height={250} // Adjust as needed
                      layout="responsive"
                      objectFit="contain" // Use 'contain' for card-like images
                    />
                  </div>
                  <ul className={styles.backpackDetailsList}>
                    <li><strong>Persona:</strong> {backpack.persona}</li>
                    <li><strong>Bottom Line:</strong> {backpack.bottomLine}</li>
                    <li><strong>User Testimonial:</strong> {backpack.testimonial}</li>
                  </ul>
                </div>
              ))}
            </section>
          )}

          {/* Render Part III content (if separate from Part I) */}
          <div
            className={styles.articleContent}
            dangerouslySetInnerHTML={{ __html: '<h2>Part III: The Final Verdict' + gearItem.content.split('<h2>Part III: The Final Verdict')[1] }}
          />

        </article>
      </main>

      <Footer />
    </>
  );
}

// getStaticPaths and getStaticProps remain the same as before
export async function getStaticPaths() {
  const gearItems = getAllGearItems();
  const paths = gearItems.map((item) => ({
    params: { slug: item.slug },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const gearItem = getGearItemBySlug(params.slug);

  return {
    props: {
      gearItem,
    },
    revalidate: 3600,
  };
}