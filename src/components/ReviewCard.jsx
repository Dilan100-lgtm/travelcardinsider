// components/ReviewCard.js  — safe for SSG

import Link from 'next/link';
import Image from 'next/image';
import styles from './ReviewCard.module.css';

export default function ReviewCard({ review }) {
  /* ---------- Ensure numeric rating ---------- */
  const numeric = Number(review.rating);
  const hasRating = isFinite(numeric);
  const display = hasRating ? numeric.toFixed(1) : '–';
  const percent = hasRating ? numeric * 10 : 0; // for star‑bar width

  return (
    <article className={styles.card}>
      <Link href={`/cards/${review.slug}`} legacyBehavior>
        <a className={styles.cardLink}>
          <div className={styles.imageWrap}>
            <Image
              src={review.image}
              alt={review.title}
              width={360}
              height={226}
              placeholder="blur"
              blurDataURL="/placeholder.webp"
            />
          </div>

          <h3 className={styles.cardTitle}>{review.title}</h3>
          <p className={styles.cardIssuer}>{review.issuer}</p>

          <div
            className={styles.cardRating}
            title={hasRating ? `Rated ${display} out of 10` : 'Not yet rated'}
          >
            <span className={styles.ratingValue}>{display}</span>
            <span
              className={styles.starFill}
              style={{ width: `${percent}%` }}
              aria-hidden="true"
            />
          </div>
        </a>
      </Link>
    </article>
  );
}
