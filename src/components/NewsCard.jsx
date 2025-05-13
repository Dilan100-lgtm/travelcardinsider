// src/components/NewsCard.jsx
import Link from 'next/link';
import Image from 'next/image';
import styles from './NewsCard.module.css';

export default function NewsCard({ newsItem }) {
  if (!newsItem) return null;

  const formattedDate = new Date(newsItem.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <Link href={`/news/${newsItem.slug}`} passHref legacyBehavior>
      <a className={styles.card}>
        {newsItem.imageSrc && (
          <div className={styles.imageContainer}>
            <Image
              src={newsItem.imageSrc}
              alt={newsItem.imageAlt || newsItem.title}
              width={400}
              height={250}
              objectFit="cover"
              className={styles.image}
            />
          </div>
        )}
        <div className={styles.content}>
          {newsItem.category && <p className={styles.category}>{newsItem.category}</p>}
          <h3 className={styles.title}>{newsItem.title}</h3>
          <p className={styles.snippet}>{newsItem.snippet}</p>
          <div className={styles.meta}>
            <span className={styles.date}>{formattedDate}</span>
            {newsItem.author && <span className={styles.author}>By {newsItem.author}</span>}
          </div>
          <span className={styles.readMore}>Read More &rarr;</span>
        </div>
      </a>
    </Link>
  );
}