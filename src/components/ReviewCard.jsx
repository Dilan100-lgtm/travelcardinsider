// /components/ReviewCard.jsx
import Link from 'next/link';
import styles from './ReviewCard.module.css'; // Import the CSS module

// Simple Star Icon component (replace with react-icons if preferred)
const StarIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" {...props}>
    <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
  </svg>
);


export default function ReviewCard({ review }) {
  if (!review) return null; // Handle cases where review might be null

  const formattedDate = new Date(review.publishedAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <Link href={`/review/${review.slug}`} passHref legacyBehavior>
      <a className={styles.card}>
        {/* Optional Image Placeholder - Add later if needed
        <div className={styles.imageContainer} style={{ backgroundImage: `url(${review.imageUrl || '/placeholder.jpg'})` }}></div> */}
        <div className={styles.content}>
          <h3 className={styles.title}>{review.title}</h3>

           {/* Render Tags if they exist */}
           {review.tags && review.tags.length > 0 && (
              <div className={styles.tags}>
                {review.tags.slice(0, 3).map((tag) => ( // Show max 3 tags
                    <span key={tag} className={styles.tag}>{tag}</span>
                ))}
              </div>
           )}

          <div className={styles.meta}>
            <span className={styles.publishedDate}>{formattedDate}</span>
            {review.rating && (
              <span className={styles.rating}>
                <StarIcon className={styles.ratingStar} />
                {review.rating.toFixed(1)}
              </span>
            )}
          </div>
        </div>
      </a>
    </Link>
  );
}