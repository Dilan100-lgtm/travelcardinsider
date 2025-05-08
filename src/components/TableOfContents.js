// src/components/TableOfContents.js
import React, { useState, useEffect, useRef, useCallback } from 'react';
import styles from './TableOfContents.module.css';

const TableOfContents = ({ sections }) => {
  const [activeSection, setActiveSection] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const tocRef = useRef(null);
  const observerRef = useRef(null); // To store the observer instance

  // ScrollSpy logic
  useEffect(() => {
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    const observerCallback = (entries) => {
      let bestVisibleEntry = null;
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Prioritize entries that are more fully visible
          if (!bestVisibleEntry || entry.intersectionRatio > bestVisibleEntry.intersectionRatio) {
            bestVisibleEntry = entry;
          }
        }
      });

      // If we found a best entry based on visibility ratio, use it
      if (bestVisibleEntry && bestVisibleEntry.intersectionRatio > 0.1) { // Lowered threshold slightly
        setActiveSection(bestVisibleEntry.target.id);
      } else {
        // Fallback: if no section is significantly visible (e.g., between sections or scrolled fast)
        // find the topmost visible entry, even if only slightly visible
        const topmostVisible = entries
          .filter(entry => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0]; // Find the one closest to the top edge

        if (topmostVisible) {
          setActiveSection(topmostVisible.target.id);
        }
        // If nothing is intersecting at all, maybe keep the last active one? (Current behavior does this implicitly)
      }
    };

    const observerOptions = {
      rootMargin: "-20% 0px -65% 0px", // Active zone in the middle of viewport
      threshold: Array.from({ length: 21 }, (_, i) => i * 0.05), // More thresholds (0, 0.05, ..., 1.0)
    };

    observerRef.current = new IntersectionObserver(observerCallback, observerOptions);
    const currentObserver = observerRef.current;

    const sectionElements = sections
      .map(section => document.getElementById(section.id))
      .filter(el => el); // Filter out nulls

    if (sectionElements.length > 0) {
      sectionElements.forEach(el => currentObserver.observe(el));

      // --- Initial Active Section Logic ---
      // Find sections currently intersecting or just above the viewport top
      const visibleOrAboveSections = sectionElements.filter(el => {
          const rect = el.getBoundingClientRect();
          // Check if bottom edge is below the top threshold (e.g., 25% of viewport height)
          // And top edge is not too far below the bottom edge (e.g. visible or partially visible)
          return rect.bottom > (window.innerHeight * 0.25) && rect.top < window.innerHeight;
      });

      if (visibleOrAboveSections.length > 0) {
          // Sort by proximity to the top threshold (smallest positive top value is best)
          visibleOrAboveSections.sort((a,b) => Math.abs(a.getBoundingClientRect().top - window.innerHeight * 0.25) - Math.abs(b.getBoundingClientRect().top - window.innerHeight * 0.25));
          setActiveSection(visibleOrAboveSections[0].id);
      } else if (sectionElements[0]) {
          // Default to first section if nothing else qualifies
          setActiveSection(sectionElements[0].id);
      }
      // --- End Initial Active Section Logic ---

    }

    return () => {
      if (currentObserver) {
        sectionElements.forEach(el => {
            // Check if element still exists before unobserving
            if (el) {
                currentObserver.unobserve(el);
            }
        });
        currentObserver.disconnect();
      }
    };
  }, [sections]); // Re-run only if sections array itself changes identity

  const handleLinkClick = useCallback((e) => {
    if (window.innerWidth < 1024) {
      setIsMobileMenuOpen(false);
    }
    // Optional: Manually set active section for faster feedback
    const targetId = e.currentTarget.getAttribute('href').substring(1);
    setActiveSection(targetId);
    // Default smooth scroll happens via CSS
  }, []);

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(prev => !prev);
  }, []);

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        className={`${styles.mobileTocToggle} ${isMobileMenuOpen ? styles.open : ''}`}
        onClick={toggleMobileMenu}
        aria-expanded={isMobileMenuOpen}
        aria-controls="toc-nav"
        aria-label={isMobileMenuOpen ? "Close table of contents" : "Open table of contents"}
      >
        <span className={styles.mobileTocToggleIcon}>
          <span></span>
          <span></span>
          <span></span>
        </span>
        <span className={styles.mobileTocToggleText}>Page Sections</span>
      </button>

      <nav
        ref={tocRef}
        id="toc-nav"
        className={`${styles.tocContainer} ${isMobileMenuOpen ? styles.mobileOpen : ''}`}
        aria-label="Table of Contents"
      >
        {/* Use more specific title if desired */}
        <h3 className={styles.tocTitle}>In This Review</h3>
        <ul className={styles.tocList}>
          {sections.map((section) => (
            <li
              key={section.id}
              className={`${styles.tocItem} ${
                activeSection === section.id ? styles.active : ''
              }`}
            >
              <a href={`#${section.id}`} onClick={handleLinkClick}>
                {section.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      {/* Mobile Backdrop */}
      {isMobileMenuOpen && (
          <div className={styles.tocBackdrop} onClick={toggleMobileMenu} />
      )}
    </>
  );
};

export default TableOfContents;
