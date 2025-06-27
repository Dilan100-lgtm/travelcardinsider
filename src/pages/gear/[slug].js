// pages/gear/[slug].js
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link'; // Import Link for author link
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

  const hasStructuredBackpacks = gearItem.backpacks && gearItem.backpacks.length > 0;
  const isPortfolioReview = gearItem.slug === '2025-travel-backpack-portfolio-expert-review';

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

          {/* NEW: Author Section */}
          {gearItem.author && (
            <div className={styles.authorSection}>
              <div className={styles.authorAvatar}>
                <Image
                  src={gearItem.author.image || '/authors/default-author.webp'} // Default avatar if not provided
                  alt={gearItem.author.name}
                  width={60}
                  height={60}
                  objectFit="cover"
                  className={styles.authorImage}
                />
              </div>
              <div className={styles.authorInfo}>
                <p className={styles.authorName}>
                  By{' '}
                  {gearItem.author.link ? (
                    <Link href={gearItem.author.link}>{gearItem.author.name}</Link>
                  ) : (
                    <span>{gearItem.author.name}</span>
                  )}
                </p>
                <p className={styles.authorBio}>{gearItem.author.bio}</p>
              </div>
            </div>
          )}

          {/* Main review image (if it's not a portfolio review that uses sub-images heavily) */}
          {gearItem.image && !isPortfolioReview && (
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

          {/* Render Part I content OR standard content */}
          {isPortfolioReview ? (
            <div
              className={styles.articleContent}
              dangerouslySetInnerHTML={{ __html: gearItem.introContent }}
            />
          ) : (
            <div
              className={styles.articleContent}
              dangerouslySetInnerHTML={{ __html: gearItem.content }}
            />
          )}

          {/* Render Part II - Structured Backpack Reviews (only for portfolio review) */}
          {hasStructuredBackpacks && isPortfolioReview && (
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
                      objectFit="contain"
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

          {/* Render Part III content (only for portfolio review) */}
          {isPortfolioReview && (
            <div
              className={styles.articleContent}
              dangerouslySetInnerHTML={{ __html: gearItem.conclusionContent }}
            />
          )}

        </article>
      </main>

      <Footer />
    </>
  );
}

// getStaticPaths and getStaticProps remain the same
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