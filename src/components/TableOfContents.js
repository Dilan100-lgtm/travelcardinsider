// components/TableOfContents.js
import React, { useState, useEffect, useRef, useCallback } from 'react';
// Using regular <a> tags for same-page anchor links is generally fine for this use case
// import Link from 'next/link';
import styles from './TableOfContents.module.css';

const TableOfContents = ({ sections }) => {
  const [activeSection, setActiveSection] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const tocRef = useRef(null);
  const observerRef = useRef(null); // To store the observer instance

  // ScrollSpy logic
  useEffect(() => {
    // Ensure observer is disconnected if it exists from a previous render or effect cleanup
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // A simple approach: if multiple are intersecting, the one "higher" on the page
          // might be preferred, or the one taking up more space.
          // This logic prefers the one that is more than 40% visible.
          // You might need to adjust this based on desired behavior.
          if (entry.intersectionRatio > 0.4) { // Adjust threshold (0.0 to 1.0)
            setActiveSection(entry.target.id);
          }
        }
      });
      // Fallback: If no section is "active" (e.g. scrolling fast, or at the very top/bottom)
      // find the first one that is at least partially visible from the top.
      if (!entries.some(e => e.isIntersecting && e.intersectionRatio > 0.4)) {
          const firstVisible = entries.find(e => e.isIntersecting);
          if (firstVisible) {
              setActiveSection(firstVisible.target.id);
          }
      }
    };

    const observerOptions = {
      rootMargin: "-20% 0px -65% 0px", // Adjusts the "active" zone in the viewport.
                                      // Tries to make sections active when they are more centered.
                                      // -X% top: element becomes active after scrolling X% from top of viewport
                                      // -Y% bottom: element remains active until Y% from bottom of viewport
      threshold: [0, 0.25, 0.5, 0.75, 1.0], // Trigger at different visibility percentages
    };

    observerRef.current = new IntersectionObserver(observerCallback, observerOptions);
    const currentObserver = observerRef.current; // Capture current observer for cleanup

    const sectionElements = sections
      .map(section => document.getElementById(section.id))
      .filter(el => el); // Filter out nulls if an ID doesn't exist

    if (sectionElements.length > 0) {
      sectionElements.forEach(el => currentObserver.observe(el));
    }

    // Set initial active section on load
    // Find the first section that is at least partially visible or closest to the top
    const initialVisibleSections = sectionElements.filter(el => {
        const rect = el.getBoundingClientRect();
        return rect.top >= 0 && rect.top <= window.innerHeight;
    });

    if (initialVisibleSections.length > 0) {
        // Sort by top position and pick the first one
        initialVisibleSections.sort((a,b) => a.getBoundingClientRect().top - b.getBoundingClientRect().top);
        if (initialVisibleSections[0]) {
             setActiveSection(initialVisibleSections[0].id);
        }
    } else if (sectionElements.length > 0 && sectionElements[0]) {
        // Default to the first section if none are initially visible (e.g. page very short or scrolled to bottom initially)
        // Or if the first section is above the viewport
        const firstSectionRect = sectionElements[0].getBoundingClientRect();
        if (firstSectionRect.bottom > 0) { // if first section is not entirely above viewport
            setActiveSection(sectionElements[0].id);
        }
    }


    return () => {
      if (currentObserver) {
        sectionElements.forEach(el => currentObserver.unobserve(el));
        currentObserver.disconnect(); // Fully disconnect the observer
      }
    };
  }, [sections]); // Re-run if sections array changes

  const handleLinkClick = useCallback((e) => {
    // Smooth scroll is handled by CSS `scroll-behavior: smooth;`
    // We just need to close the mobile menu if it's open
    if (window.innerWidth < 1024) { // Assuming 1024px is your mobile breakpoint
      setIsMobileMenuOpen(false);
    }
    // Optional: Manually set active section immediately on click for faster UI response
    // const targetId = e.currentTarget.getAttribute('href').substring(1);
    // setActiveSection(targetId);
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
      {/* Optional: Mobile Backdrop */}
      {isMobileMenuOpen && (
          <div className={styles.tocBackdrop} onClick={toggleMobileMenu} />
      )}
    </>
  );
};

export default TableOfContents;