// components/GearCard.js
import Link from 'next/link';
import Image from 'next/image';
import styles from '@/styles/GearCard.module.css'; // You'll create this CSS module

export default function GearCard({ gearItem }) {
  const { slug, title, description, image, rating } = gearItem;

  return (
    <div className={styles.card}>
      <Link href={`/gear/${slug}`} className={styles.imageLink}> {/* Link to individual gear page if you create one */}
        <Image
          src={image}
          alt={title}
          width={500}
          height={300}
          layout="responsive" // Make image responsive
          objectFit="cover"
          className={styles.cardImage}
        />
      </Link>
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>
          <Link href={`/gear/${slug}`}>{title}</Link>
        </h3>
        {rating && (
          <div className={styles.cardRating}>
            Rating: {rating.toFixed(1)} / 10
          </div>
        )}
        <p className={styles.cardDescription}>{description}</p>
        <Link href={`/gear/${slug}`} className={styles.readMoreButton}>
          Read More
        </Link>
      </div>
    </div>
  );
}