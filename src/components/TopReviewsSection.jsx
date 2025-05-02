// /components/TopReviewsSection.jsx
import ReviewCard from './ReviewCard';
import Link from 'next/link';
import styles from '@/styles/TopReviewsSection.module.css'; // Create this CSS module

export default function TopReviewsSection({ reviews }) {
  if (!reviews || reviews.length === 0) {
    return null; // Don't render anything if there are no featured reviews
  }

  return (
    <section className={styles.topReviewsSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Featured Card Reviews</h2>
        <div className={styles.reviewsGrid}>
          {reviews.map((review) => (
            <ReviewCard key={review.slug} review={review} />
          ))}
        </div>
        <div className={styles.viewAllLinkContainer}>
          <Link href="/guides" legacyBehavior>
            <a className={styles.viewAllLink}>View All Guides</a>
          </Link>
        </div>
      </div>
    </section>
  );
}