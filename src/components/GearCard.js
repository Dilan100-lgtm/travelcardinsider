// File: src/components/GearCard.js

import Link from 'next/link';
import Image from 'next/image';

// This component is responsible for the look of a single gear review card.
export default function GearCard({ gearItem }) {
  // We use the same CSS classes as your review cards for a consistent look.
  return (
    <div className="card review-card" key={gearItem.slug}>
      <Link href={`/gear/${gearItem.slug}`} className="review-card__image-link">
        <Image
          className="review-card__image"
          src={gearItem.image}
          alt={gearItem.description} // Alt text for accessibility
          width={500}
          height={300}
          loading="lazy"
          objectFit="cover"
        />
      </Link>
      <div className="card-content review-card__content">
        <h3>
          <Link href={`/gear/${gearItem.slug}`}>{gearItem.title}</Link>
        </h3>
        <p>{gearItem.description}</p>
        <Link href={`/gear/${gearItem.slug}`} className="cta-button read-more-button">
          Read More
        </Link>
      </div>
    </div>
  );
}