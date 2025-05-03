/* =============== VARIABLES =============== */
:root {
  /* -- Colors -- */
  /* Brand */
  --color-brand-primary: #0014a8;    /* Navy */
  --color-brand-primary-dark: #000f8a; /* Darker navy for hover */
  --color-brand-accent:  #e30d5c;      /* Red */
  --color-brand-accent-dark: #c30a4e; /* Darker red for hover */

  /* Backgrounds */
  --color-background-body: #f8f9fa; /* Slightly off-white base */
  --color-background-paper: #ffffff; /* For cards, modals etc. */
  --color-background-light: #f1f3f5; /* Light gray for subtle contrast */
  --color-background-dark: #343a40;  /* Dark background (e.g., footer) */
  --color-background-overlay: rgba(23, 43, 77, 0.75); /* Overlay */
  --color-background-info-light: #e7f5ff; /* Light blue info bg */
  --color-background-success-light: #e6fcf5; /* Light green success bg */

  /* Text */
  --color-text-primary: #212529;      /* Very dark gray (near black) */
  --color-text-secondary: #495057;   /* Medium dark gray */
  --color-text-muted: #6c757d;       /* Lighter gray */
  --color-text-light: #f8f9fa;       /* For dark backgrounds */
  --color-text-link: var(--color-brand-primary);
  --color-text-link-hover: var(--color-brand-primary-dark);
  --color-text-info: #1971c2;       /* Blue for info text */
  --color-text-success: #2f9e44;    /* Green for success */
  --color-text-danger: #e03131;     /* Red for danger/unsubscribe */

  /* Borders */
  --color-border-light: #dee2e6;     /* Light border for cards etc. */
  --color-border-medium: #ced4da;    /* Slightly darker border */
  --color-border-focus: var(--color-brand-primary); /* Focus outline */

  /* Status */
  --color-status-success: #37b24d;
  --color-status-danger: #f03e3e;
  --color-status-warning: #fcc419;

  /* -- Typography -- */
  --font-family-body: 'Roboto Condensed', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  --font-family-heading: 'Playfair Display', Georgia, serif;
  --font-weight-normal: 400;
  --font-weight-medium: 500; /* Added medium */
  --font-weight-bold: 700;
  --line-height-base: 1.6;
  --line-height-heading: 1.3;

  /* -- Spacing -- */
  --spacing-xs: 0.25rem; /* 4px */
  --spacing-sm: 0.5rem;  /* 8px */
  --spacing-md: 1rem;    /* 16px */
  --spacing-lg: 1.5rem;  /* 24px */
  --spacing-xl: 2rem;    /* 32px */
  --spacing-xxl: 3rem;   /* 48px */

  /* -- Borders & Radius -- */
  --border-radius-sm: 4px;
  --border-radius-md: 8px;
  --border-radius-lg: 16px;
  --border-width: 1px;

  /* -- Shadows -- */
  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.04);
  --shadow-md: 0 4px 8px rgba(0, 13, 64, 0.08); /* Softer medium */
  --shadow-lg: 0 10px 20px rgba(0, 13, 64, 0.1); /* Softer large */
  --shadow-focus-ring: 0 0 0 3px rgba(0, 20, 168, 0.25); /* Based on brand-primary */

  /* -- Transitions -- */
  --transition-duration: 200ms;
  --transition-timing-function: ease-in-out;
  --transition-base: all var(--transition-duration) var(--transition-timing-function);

  /* -- Z-Index -- */
  --z-index-dropdown: 1000;
  --z-index-sticky: 1020;
  --z-index-modal-backdrop: 1040;
  --z-index-modal: 1050;
  --z-index-popover: 1060;
  --z-index-tooltip: 1070;
  --z-index-header: 3000; /* Kept existing high index */
  --z-index-menu-backdrop: 2500;
}


/* =============== GLOBALS & DEFAULTS =============== */
html {
  height: 100%;
  box-sizing: border-box;
  scroll-behavior: smooth;
  scroll-padding-top: 4rem; /* Offset for fixed header */
}

*, *::before, *::after {
  box-sizing: inherit;
}

body {
  margin: 0;
  font-family: var(--font-family-body);
  font-weight: var(--font-weight-normal);
  line-height: var(--line-height-base);
  color: var(--color-text-primary);
  background-color: var(--color-background-body);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
  padding-top: 3.5rem; /* Avoid content overlap with fixed header */
}

main {
  overflow-x: hidden; /* Prevent horizontal scroll */
}

/* Base Typography */
p {
  margin-top: 0;
  margin-bottom: var(--spacing-md);
  max-width: 75ch; /* Improve readability */
}

h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-family-heading);
  font-weight: var(--font-weight-bold);
  line-height: var(--line-height-heading);
  margin-top: 0;
  margin-bottom: var(--spacing-md);
  color: var(--color-text-primary);
  overflow-wrap: break-word;
}

/* Example heading sizes (adjust as needed) */
h1 { font-size: clamp(2rem, 5vw, 3rem); }
h2 { font-size: clamp(1.75rem, 4vw, 2.5rem); }
h3 { font-size: clamp(1.25rem, 3vw, 1.75rem); }
h4 { font-size: clamp(1.1rem, 2.5vw, 1.25rem); }

a {
  color: var(--color-text-link);
  text-decoration: none;
  transition: var(--transition-base);
}
a:hover {
  color: var(--color-text-link-hover);
  text-decoration: underline;
}

img, svg, video, canvas, audio, iframe, embed, object {
  display: block;
  max-width: 100%;
  height: auto;
}

/* Accessibility: Focus visible */
:focus-visible {
  outline: 2px solid var(--color-border-focus);
  outline-offset: 2px;
  box-shadow: var(--shadow-focus-ring);
  border-radius: var(--border-radius-sm); /* Apply radius to focus ring */
}
/* Remove default outline when focus-visible is supported */
:focus:not(:focus-visible) {
  outline: none;
  box-shadow: none;
}


/* =============== FONT DEFINITIONS =============== */
/* Use WOFF2 format primarily for better compression */
@font-face {
  font-family: 'Roboto Condensed';
  src: url('/fonts/Roboto_Condensed-Regular.woff2') format('woff2'),
       url('/fonts/Roboto_Condensed-Regular.ttf') format('truetype');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Roboto Condensed';
  src: url('/fonts/Roboto_Condensed-Bold.woff2') format('woff2'),
       url('/fonts/Roboto_Condensed-Bold.ttf') format('truetype');
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Playfair Display';
  src: url('/fonts/PlayfairDisplay-Regular.woff2') format('woff2'),
       url('/fonts/PlayfairDisplay-Regular.ttf') format('truetype');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Playfair Display';
  src: url('/fonts/Playfair-Display-Bold.woff2') format('woff2'),
       url('/fonts/Playfair-Display-Bold.ttf') format('truetype');
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}

/* =============== HEADER =============== */
.site-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: var(--color-background-paper);
  box-shadow: var(--shadow-sm);
  z-index: var(--z-index-header);
  font-family: var(--font-family-body); /* Consistent font */
  font-weight: var(--font-weight-medium);
  font-size: 0.95rem; /* Slightly smaller base for header */
  border-bottom: var(--border-width) solid var(--color-border-light);
}

.header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 1200px;
  height: 3.5rem;
  padding: 0 var(--spacing-md); /* Use variable */
}

.logo-toggle-container {
  display: flex;
  align-items: center;
  flex-shrink: 0;
}

.menu-toggle {
  display: none; /* Shown via media query */
  background: transparent;
  border: none;
  cursor: pointer;
  padding: var(--spacing-sm);
  margin-right: var(--spacing-md);
  color: var(--color-text-primary);
}

.bar {
  display: block;
  width: 1.5rem;
  height: 2px; /* Slightly thinner */
  background: currentColor; /* Inherit color */
  margin: 5px 0; /* Slightly more spacing */
  transition: transform 0.3s ease, opacity 0.3s ease;
  border-radius: 1px;
}
/* Hamburger animation remains the same */
.menu-toggle.open .bar:nth-child(1) { transform: translateY(7px) rotate(45deg); }
.menu-toggle.open .bar:nth-child(2) { opacity: 0; }
.menu-toggle.open .bar:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

.site-logo {
  display: inline-block;
  vertical-align: middle; /* Better alignment */
}
.site-logo img {
  display: block;
  height: auto;
  width: auto;
  max-height: calc(3.5rem - 1.5rem); /* Adjusted for visual balance */
}

/* Main Navigation (Mobile) */
.main-nav {
  position: fixed;
  top: 3.5rem; /* Align below header */
  left: 0;
  width: min(80vw, 320px); /* Slightly wider */
  height: calc(100vh - 3.5rem);
  background: var(--color-background-paper);
  box-shadow: var(--shadow-lg);
  transform: translateX(-100%);
  transition: transform 0.3s ease-in-out;
  z-index: var(--z-index-header); /* Ensure above backdrop */
  overflow-y: auto;
  border-right: var(--border-width) solid var(--color-border-light);
}

.main-nav.open {
  transform: translateX(0);
}

.nav-list {
  list-style: none;
  padding: var(--spacing-md) 0; /* Add vertical padding */
  margin: 0;
}

.nav-list li {
  margin: 0;
}

/* General Nav Link Style (Mobile & Desktop Base) */
.nav-link {
  display: block;
  padding: var(--spacing-sm) var(--spacing-lg); /* Consistent padding */
  color: var(--color-text-secondary);
  font-weight: var(--font-weight-medium);
  text-decoration: none;
  transition: var(--transition-base);
  border-bottom: var(--border-width) solid var(--color-border-light);
  position: relative;
}
.nav-list > li:last-child > div > .nav-link, /* Target direct links in last li */
.nav-list > li:last-child > a.nav-link {      /* Target direct <a> tags */
    border-bottom: none;
}

.nav-link:hover {
  color: var(--color-text-link-hover);
  background-color: var(--color-background-light);
  text-decoration: none; /* Remove underline on hover */
}

/* Specific styling for CTA-like links (Subscribe/Unsubscribe) */
.nav-link.cta-style {
  display: inline-block; /* Allow margin/padding */
  width: calc(100% - var(--spacing-lg) * 2); /* Full width minus padding */
  margin: var(--spacing-md) var(--spacing-lg); /* Top/bottom margin */
  padding: var(--spacing-sm) var(--spacing-md);
  border-radius: var(--border-radius-md);
  text-align: center;
  font-weight: var(--font-weight-bold);
  color: var(--color-background-paper); /* White text */
  background-color: var(--color-brand-primary);
  border: none; /* Override default border */
}
.nav-link.cta-style:hover {
  background-color: var(--color-brand-primary-dark);
  color: var(--color-background-paper);
  transform: translateY(-1px);
}
/* Unsubscribe specific style */
.nav-link.cta-style[href="#"] {
  background-color: var(--color-status-danger);
}
.nav-link.cta-style[href="#"]:hover {
  background-color: #c92a2a; /* Darker red */
}


/* Mobile Submenu Styles */
.has-dropdown .dropdown-menu {
  display: none;
  list-style: none;
  margin: 0;
  padding: var(--spacing-sm) 0 var(--spacing-sm) var(--spacing-lg); /* Padding left for indent */
  background: var(--color-background-light);
  border-top: var(--border-width) solid var(--color-border-light);
}
.has-dropdown.submenu-open > .dropdown-menu {
  display: block;
}
.dropdown-menu li {
  margin: 0;
}
.dropdown-menu a {
  display: block;
  padding: var(--spacing-xs) var(--spacing-md); /* Adjust padding */
  font-size: 0.9rem;
  color: var(--color-text-secondary);
  border-bottom: none; /* Remove individual borders */
  transition: var(--transition-base);
}
.dropdown-menu a:hover {
  color: var(--color-text-link-hover);
  background-color: transparent; /* No background change */
}

/* Backdrop for mobile menu */
.menu-backdrop {
  position: fixed;
  inset: 0; /* Simpler positioning */
  background: rgba(0, 0, 0, 0.5); /* Slightly darker */
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease-in-out, visibility 0s 0.3s linear;
  z-index: var(--z-index-menu-backdrop);
}
.menu-backdrop.open {
  opacity: 1;
  visibility: visible;
  transition: opacity 0.3s ease-in-out;
}

/* Header Actions (Search) */
.header-actions {
  display: flex;
  align-items: center;
  padding: var(--spacing-sm) var(--spacing-lg); /* Match link padding */
  border-bottom: var(--border-width) solid var(--color-border-light);
}
.search-container {
  position: relative; /* For results dropdown positioning */
  margin: 0;
  width: 100%;
}
.search-container input[type="search"] {
  border: var(--border-width) solid var(--color-border-medium);
  border-radius: var(--border-radius-md);
  padding: var(--spacing-sm) var(--spacing-md);
  font-size: 0.95rem;
  width: 100%;
  box-sizing: border-box;
  transition: var(--transition-base);
}
.search-container input[type="search"]::placeholder {
  color: var(--color-text-muted);
}
.search-container input[type="search"]:focus {
  outline: none;
  border-color: var(--color-border-focus);
  box-shadow: var(--shadow-focus-ring);
}


/* ====== MOBILE HEADER STYLES ====== */
@media (max-width: 1099px) {
  .menu-toggle {
    display: flex; /* Show hamburger */
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .main-nav {
     position: fixed; /* Keep fixed */
  }
   .submenu-toggle-button {
      background: transparent;
      border: none;
      padding: var(--spacing-sm);
      cursor: pointer;
      margin-left: auto; /* Push to right */
      font-size: 1.2em;
      line-height: 1;
      color: var(--color-text-muted);
   }
}

/* ====== DESKTOP HEADER STYLES ====== */
@media (min-width: 1100px) {
  .menu-toggle, .menu-backdrop, .submenu-toggle-button {
    display: none;
  }

  .main-nav {
    position: static;
    width: auto;
    height: auto;
    transform: none;
    box-shadow: none;
    overflow: visible;
    padding: 0;
    margin-left: var(--spacing-lg); /* Space between logo and nav */
    background: transparent;
    display: flex;
    flex-direction: row;
    align-items: center;
    transition: none;
    border: none; /* Remove mobile border */
  }

  .nav-list {
    display: flex;
    flex-direction: row;
    align-items: center; /* Center items vertically */
    height: 100%;
    padding: 0;
    margin: 0;
  }

  .nav-list li {
    margin: 0; /* Let links handle spacing */
    height: 100%; /* Make li fill header height */
    display: flex; /* Allow vertical alignment */
    align-items: center;
  }

   /* Search bar positioning and style on desktop */
  .nav-list li.header-actions {
      margin-left: auto; /* Push search to the right */
      margin-right: var(--spacing-sm); /* Space before buttons */
      order: 98; /* Ensure it comes before the CTA button */
      padding: 0;
      border: none;
      height: auto; /* Reset height */
  }
  .nav-list li.header-actions .search-container {
      margin: 0;
  }
   .nav-list li.header-actions input[type="search"] {
       width: 200px; /* Fixed width */
       padding: 0.5rem var(--spacing-md);
   }
   .nav-list li.header-actions input[type="search"]:focus {
       width: 240px; /* Expand on focus */
   }

  /* General desktop link styling */
  .nav-link {
     display: flex; /* Align text vertically */
     align-items: center;
     height: 100%;
     padding: 0 var(--spacing-md); /* Horizontal padding */
     border-bottom: none; /* Remove mobile border */
     font-weight: var(--font-weight-medium);
     position: relative;
     white-space: nowrap; /* Prevent wrapping */
  }
   /* Underline effect for non-CTA links */
   .nav-link:not(.cta-style)::after {
       content: '';
       position: absolute;
       width: 0;
       height: 2px;
       display: block;
       bottom: 10px; /* Position underline */
       left: 50%;
       transform: translateX(-50%);
       background: var(--color-brand-primary);
       transition: width var(--transition-duration) ease-in-out;
   }
   .nav-link:not(.cta-style):hover::after {
       width: calc(100% - var(--spacing-md) * 2); /* Match padding */
   }
   .nav-link:hover {
      background-color: transparent; /* No background on hover for regular links */
      color: var(--color-text-link-hover);
   }

  /* Desktop Subscribe/Unsubscribe Button */
  /* Inherits .nav-link and .cta-style */
  .nav-link.cta-style {
     margin-left: var(--spacing-lg); /* Space before button */
     height: auto; /* Let padding define height */
     align-self: center; /* Vertically center button */
     order: 99; /* Ensure it's the last item */
  }


  /* --- DESKTOP DROPDOWN --- */
  .nav-list li.has-dropdown {
     position: relative;
  }

  .has-dropdown .dropdown-menu {
    position: absolute;
    background: var(--color-background-paper);
    margin: 0; /* Reset margin */
    padding: var(--spacing-sm) 0; /* Vertical padding */
    border: var(--border-width) solid var(--color-border-light);
    box-shadow: var(--shadow-lg);
    border-radius: var(--border-radius-md);
    display: none; /* Hidden by default */
    opacity: 0; /* Start hidden for transition */
    visibility: hidden;
    top: calc(100% + 5px); /* Gap below parent */
    left: 0;
    min-width: 240px; /* Wider dropdown */
    z-index: var(--z-index-dropdown);
    list-style: none;
    transition: opacity var(--transition-duration) ease-in-out, visibility 0s var(--transition-duration) linear;
  }
  /* Remove bridge element/logic - use hover state */
  .nav-list li.has-dropdown:hover > .dropdown-menu {
    display: block; /* Show on hover */
    opacity: 1;
    visibility: visible;
    transition: opacity var(--transition-duration) ease-in-out;
  }

   /* Styling for items INSIDE dropdown */
  .dropdown-menu li {
      margin: 0;
      height: auto;
      display: block;
  }
  .dropdown-menu a {
      display: block;
      padding: var(--spacing-sm) var(--spacing-lg); /* Consistent padding */
      font-size: 0.9rem;
      font-weight: var(--font-weight-normal);
      color: var(--color-text-secondary);
      white-space: nowrap;
      border: none;
      transition: var(--transition-base);
  }
   .dropdown-menu a:hover {
       color: var(--color-text-link-hover);
       background-color: var(--color-background-light);
   }
} /* End Desktop Media Query */


/* =============== HERO SECTION =============== */
/* Using Tailwind classes in index.js - this section can be minimal */
/* Example of potential override if needed */
.hero-section h1 {
    /* text-shadow: 0 1px 3px rgba(0,0,0,0.4); */ /* Add text shadow if needed */
}

/* =============== BUTTONS (Refined) =============== */
.cta-button,
.Apply-button,
.submit,
.cta-button-secondary {
  display: inline-flex; /* Use flex for alignment */
  align-items: center;
  justify-content: center;
  padding: 0.65rem 1.25rem; /* Adjust padding for better feel */
  border-radius: var(--border-radius-md); /* Use variable */
  font-weight: var(--font-weight-bold);
  text-decoration: none;
  text-align: center;
  cursor: pointer;
  transition: var(--transition-base);
  border: var(--border-width) solid transparent; /* Base border */
  margin: 0.25rem; /* Adjust margin */
  line-height: 1.4;
}
.cta-button:active,
.Apply-button:active,
.submit:active,
.cta-button-secondary:active {
  transform: scale(0.97); /* Slightly more noticeable press */
}

/* Primary CTA Button */
.cta-button {
    background-color: var(--color-brand-accent); /* Use brand accent */
    color: white;
    border-color: var(--color-brand-accent);
}
.cta-button:hover {
    background-color: var(--color-brand-accent-dark);
    border-color: var(--color-brand-accent-dark);
    transform: translateY(-1px);
    box-shadow: var(--shadow-sm);
}

/* Apply/Default Button (Blue) */
.Apply-button, .submit {
    background-color: var(--color-brand-primary); /* Use brand primary */
    color: white;
    border-color: var(--color-brand-primary);
}
.Apply-button:hover, .submit:hover {
    background-color: var(--color-brand-primary-dark);
    border-color: var(--color-brand-primary-dark);
    transform: translateY(-1px);
    box-shadow: var(--shadow-sm);
}

/* Secondary/Outline Button */
.cta-button-secondary {
   border-color: var(--color-border-medium);
   color: var(--color-text-link);
   background-color: transparent;
}
.cta-button-secondary:hover {
    background-color: var(--color-background-light);
    border-color: var(--color-border-medium);
    color: var(--color-text-link-hover);
    transform: translateY(-1px);
}


/* =============== CARDS (Refined) =============== */
.card-grid {
     gap: var(--spacing-xl); /* Ensure good gap */
}

.featured-card, .card {
    background-color: var(--color-background-paper);
    border-radius: var(--border-radius-lg); /* Softer radius */
    box-shadow: var(--shadow-md); /* Start with medium shadow */
    border: none; /* Remove border if shadow is sufficient */
    overflow: hidden; /* Needed for image radius */
}
.featured-card:hover, .card:hover {
    transform: translateY(-6px); /* Slightly more lift */
    box-shadow: var(--shadow-lg);
}

.featured-card__image, .review_img {
    width: 100%;
    aspect-ratio: 16 / 9; /* Maintain aspect ratio */
    object-fit: cover; /* Cover ensures image fills space */
    border-radius: 0; /* Remove radius if using cover */
    margin-bottom: 0; /* Remove bottom margin */
}
.featured-card__image {
     object-fit: contain; /* Contain might be better for product shots */
     background-color: #fdfdfd; /* Add subtle bg for contained images */
     padding: var(--spacing-sm);
     max-height: 200px; /* Reset max-height if using aspect-ratio */
}

.featured-card__description, .card-content {
    padding: var(--spacing-lg); /* Consistent padding */
}

.featured-card__description h3, .card-content h3 {
    font-size: 1.15rem; /* Adjust size */
    margin-bottom: var(--spacing-xs);
}

.featured-card__description p, .card-content p {
    font-size: 0.9rem;
    color: var(--color-text-secondary); /* Use secondary color */
    margin-bottom: var(--spacing-lg); /* More space before buttons */
    min-height: auto; /* Remove min-height if not needed */
}
.card-content p {
    /* Line clamp handled by Tailwind/JS */
}

/* Card Buttons Container */
.featured-card__description .flex, .card-content .mt-auto {
    padding-top: var(--spacing-md);
    border-top: var(--border-width) solid var(--color-border-light); /* Add separator */
    margin-top: auto; /* Push to bottom */
}
.featured-card__description .flex {
    gap: var(--spacing-sm);
}
.card-content .mt-auto {
     text-align: center; /* Center "Read More" */
}


/* =============== REVIEWS SECTION =============== */
.reviews-container {
     /* Section spacing handled by Tailwind */
}
.reviews-container h2 { /* Handled by Tailwind */ }
.reviews-grid {
    gap: var(--spacing-xl); /* Consistent gap */
}


/* =============== FOOTER (Refined) =============== */
.site-footer {
  background: var(--color-text-primary); /* Use dark text color as base */
  color: var(--color-text-light);
  border-top: 4px solid var(--color-brand-primary); /* Use brand color */
}

.footer-col h3 {
  border-bottom: 1px solid var(--color-brand-primary); /* Use brand color */
  padding-bottom: var(--spacing-sm);
  margin-bottom: var(--spacing-lg); /* More space below heading */
}

.footlink a {
  color: var(--color-text-muted); /* Muted color for links */
  text-decoration: none;
}
.footlink a:hover {
  color: var(--color-text-light); /* Brighter on hover */
  text-decoration: underline;
}

.footer-disclaimer {
  color: var(--color-text-muted); /* Muted color */
}

.footer-bottom {
  color: var(--color-text-muted); /* Muted color */
  border-top: 1px solid rgba(255, 255, 255, 0.1); /* Very subtle top border */
}


/* =============== UTILITIES (Optional) =============== */
.line-clamp-3 {
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
}


/* =============== HEADER SEARCH BAR (Refined) =============== */
.search-container input[type="search"] {
  background-color: var(--color-background-light); /* Lighter background */
  font-size: 0.9rem; /* Match dropdown */
  border-radius: var(--border-radius-md);
}

.search-results-base,
.search-results-dropdown,
.search-no-results {
    border-radius: 0 0 var(--border-radius-md) var(--border-radius-md);
    box-shadow: var(--shadow-lg); /* More noticeable shadow */
    border: var(--border-width) solid var(--color-border-light);
    border-top: none;
}

.search-results-dropdown li a {
  font-size: 0.85rem; /* Slightly smaller */
  padding: var(--spacing-xs) var(--spacing-md);
}

.search-result-issuer {
    color: var(--color-text-muted); /* Use muted color */
}

/* --- Mobile Search Results --- */
@media (max-width: 1100px) {
  .search-results-base,
  .search-results-dropdown,
  .search-no-results {
      box-shadow: var(--shadow-md); /* Keep some shadow */
      border-radius: var(--border-radius-md); /* Consistent radius */
  }
}