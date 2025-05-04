import React from 'react';
import styles from '../styles/StarRating.module.css'; // Path to the CSS module

// Simple SVG Star shape
const StarIcon = ({ fill }) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill={fill} xmlns="http://www.w3.org/2000/svg">
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z"/>
  </svg>
);

const StarRating = ({ rating }) => {
  const totalStars = 5;
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5; // Simplified: show full star if >= 0.5
  const emptyStars = totalStars - fullStars - (halfStar ? 1 : 0);

  const starColor = "#ffc107"; // Gold color for stars
  const emptyColor = "#e0e0e0"; // Light gray for empty stars

  return (
    <div className={styles.starRatingContainer}>
      {[...Array(fullStars)].map((_, i) => (
        <StarIcon key={`full-${i}`} fill={starColor} />
      ))}
      {halfStar && (
         <StarIcon key="half" fill={starColor} /> // Shows a full star for the half
      )}
      {[...Array(emptyStars)].map((_, i) => (
        <StarIcon key={`empty-${i}`} fill={emptyColor} />
      ))}
    </div>
  );
};

export default StarRating;