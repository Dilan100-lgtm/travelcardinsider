// components/RatingTooltip.js
import React, { useEffect, useRef, useCallback } from 'react';
// Assuming ReviewPage.module.css is in a 'styles' directory at the root of your project
// and this 'components' directory is also at the root. Adjust path if your structure differs.
// If amex-business-gold.js is in pages/reviews/ and styles is in styles/,
// and components is in components/, then this path is likely:
// import styles from '../styles/ReviewPage.module.css';
// However, if amex-business-gold.js uses ../../styles/ReviewPage.module.css
// it implies 'styles' is one level above 'pages'.
// Let's assume 'styles' is in the root, so for a component in 'components/', it's:
import styles from '../styles/ReviewPage.module.css'; // Adjust this path as per your project structure

const RatingTooltip = ({ ratingValue, ratingCriteria, onClose }) => {
  const tooltipRef = useRef(null);

  // Using the closeTooltip passed from parent which controls 'showRatingInfo' state
  const handleClose = useCallback(() => {
    if (onClose) {
      onClose();
    }
  }, [onClose]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      const isInfoButton = event.target.closest(`.${styles.infoIconButton}`);
      if (tooltipRef.current && !tooltipRef.current.contains(event.target) && !isInfoButton) {
        handleClose();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [handleClose]); // Dependency on handleClose which has onClose as its dependency

  if (!ratingValue) return null;

  return (
    <div
      ref={tooltipRef}
      className={styles.ratingTooltip}
      role="tooltip"
      aria-live="polite"
    >
      <strong>TCI Rating: {ratingValue.toFixed(1)}/10</strong>
      <p className={styles.tooltipIntro}>Our TCI rating system criteria including rewards, welcome bonus, annual fee, redemption flexibility, travel benefits, APR, foreign transaction fees, user experience, and other features.</p>
      {/*
      // If you want to display criteria dynamically, ensure 'ratingCriteria' prop is passed and correctly formatted
      {ratingCriteria && ratingCriteria.length > 0 && (
        <ul className={styles.tooltipList}>
          {ratingCriteria.map((criterion, index) => <li key={index}>{criterion}</li>)}
        </ul>
      )}
      */}
    </div>
  );
};

export default RatingTooltip;