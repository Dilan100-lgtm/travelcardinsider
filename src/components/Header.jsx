// src/components/Header.jsx

"use client";
import { useEffect, useState, useMemo } from "react"; // Added useMemo
import Image from 'next/image';
import Link from 'next/link';
import Fuse from 'fuse.js'; // Import Fuse.js
import cardData from '@/data/finalcreditcard.json';

const allCards = cardData.cards;
const MOBILE_MAX_WIDTH = 1100;

// --- Fuse.js Options ---
const fuseOptions = {
  keys: [
    'Card Name', // Field to search
    'Issuer',    // Another field to search
    'reviewLink' // Search the path too (e.g., "sapphire")
  ],
  includeScore: true, // Include relevance score in results
  threshold: 0.4,    // Adjust fuzziness (0 = perfect match, 1 = match anything)
                     // 0.3 or 0.4 is usually a good starting point
  minMatchCharLength: 2, // Minimum characters before searching starts
  // limit: 10 // Optional: Fuse can limit results internally too
};
// --------------------

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const [isMobileView, setIsMobileView] = useState(false);

  // Search State
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  // --- Memoize Fuse instance for performance ---
  // This prevents recreating the Fuse index on every render
  const fuse = useMemo(() => new Fuse(allCards, fuseOptions), []);
  // --------------------------------------------

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth < MOBILE_MAX_WIDTH;
      setIsMobileView(isMobile);
      if (!isMobile) {
        setIsMobileMenuOpen(false);
        setOpenSubmenu(null);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(prev => !prev);
     if (isMobileMenuOpen) {
        setOpenSubmenu(null);
     }
  };

  const handleBackdropClick = () => {
    setIsMobileMenuOpen(false);
    setOpenSubmenu(null);
  };

  const toggleSubmenu = (menuKey) => {
    setOpenSubmenu(prev => (prev === menuKey ? null : menuKey));
  };

  // --- Updated Search Logic with Fuse.js ---
  const handleSearchChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);

    if (query.length >= fuseOptions.minMatchCharLength) {
        const fuseResults = fuse.search(query);
        // Limit to top 5 results and extract the original card item
        setSearchResults(fuseResults.slice(0, 5).map(result => result.item));
    } else {
        setSearchResults([]); // Clear results if query is too short
    }
  };
  // -----------------------------------------

   // Define menu structure (Keep your existing menu items)
   const menuItems = [
      {
        label: "Featured Cards",
        submenuKey: "featured",
        links: [
         { label: "Best Travel Credit Cards", href: "/general/best-travel-cards-2025" },
         { label: "Best Luxury Travel Credit Cards", href: "/luxury/best-luxury-cards-2025" },
         { label: "Best Airline Travel Credit Cards", href: "/airline/best-airline-cards-2025" },
         { label: "Best Hotel Travel Credit Cards", href: "/hotel/best-hotel-cards-2025" },
         { label: "Best No Annual Fee Travel Credit Cards", href: "/no-fee/best-no-fee-cards-2025" },
         { label: "Best Business Travel Credit Cards", href: "/business/best-business-cards-2025" },
         { label: "Best 0% APR & Balance Transfer Travel Credit Cards", href: "/zeroapr/Best-10-Zero-APR-And-Balance-Transfer-Credit-Cards-of-2025" },
         { label: "Best Travel Credit Cards With Lounge Access", href: "/lounge/best-lounge-access-cards-2025" },
         { label: "Best Beginners Travel Credit Cards", href: "/beginners/best-beginners-cards-2025" },
       ],
      },
      {
        label: "Tools",
        submenuKey: "tools",
        links: [
          { label: "Compare Travel Credit Cards", href: "/rewards-compare" },
          { label: "Personalized Recommendations", href: "/card-finder" },
        ],
      },
      {
        label: "Blog",
        submenuKey: "blog",
        links: [
          { label: "Guides", href: "#Credit_Card_Guids" },
          { label: "News", href: "#Credit_Card_News" },
        ],
      },
      {
        label: "Learn",
        submenuKey: "learn",
        links: [
         { label: "Travel Credit Card Basics", href: "/learn/credit-card-basics" },
         { label: "Rewards & Perks", href: "/learn/rewards-and-perks" },
         { label: "Credit Management", href: "/learn/credit-management" },
         { label: "Advanced Strategies", href: "/learn/credit-management-guide" },
         { label: "FAQs & Guides", href: "/learn/faqs-and-guides" },
        ],
      },
      {
        label: "About",
        submenuKey: "about",
        links: [
         { label: "Who We Are", href: "#Credit_Card_Who_We_Are" },
         { label: "Our Mission", href: "#Credit_Card_Our_Mission" },
         { label: "How We Rate Credit Cards", href: "#Credit_Card_How_We_Rate" },
         { label: "Affiliate Disclosure", href: "#Credit_Card_Affiliate_Disclosure" },
         { label: "Contact Us", href: "#Credit_Card_Contact_Us" },
        ],
      },
      {
        label: "Subscribe",
        submenuKey: null,
        links: [{ label: "Subscribe", href: "#subscribe" }],
      },
   ];

  return (
    <header className="site-header">
      <div
        id="menuBackdrop"
        className={`menu-backdrop ${isMobileMenuOpen ? "open" : ""}`}
        onClick={handleBackdropClick}
        style={{ visibility: isMobileMenuOpen ? 'visible' : 'hidden' }}
      />

      <div className="header-inner">
        <div className="logo-toggle-container">
          <button
            id="hamburgerBtn"
            className={`menu-toggle ${isMobileMenuOpen ? "open" : ""}`}
            onClick={toggleMobileMenu}
            aria-label="Toggle Menu"
            aria-controls="mobileNav"
            aria-expanded={isMobileMenuOpen}
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>

          <Link href="/" className="site-logo" aria-label="TravelCardInsider Home">
            <Image
                src="/6.jpg"
                alt="TravelCardInsider Logo"
                width={180}
                height={30}
                priority={true}
            />
          </Link>
        </div>

        <nav
          id="mobileNav"
          className={`main-nav ${isMobileMenuOpen ? "open" : ""}`}
          aria-hidden={!isMobileMenuOpen && isMobileView}
        >
          <ul className="nav-list">
            {/* --- Updated Search Bar --- */}
            <li className="header-actions">
              <div className="search-container">
                <input
                    type="search"
                    placeholder="Search Cards..."
                    aria-label="Search Credit Cards"
                    value={searchQuery}
                    onChange={handleSearchChange}
                    onFocus={() => setIsSearchFocused(true)}
                    onBlur={() => setTimeout(() => setIsSearchFocused(false), 300)} // Keep delay
                 />
                 {/* --- Search Results Dropdown --- */}
                 {isSearchFocused && searchResults.length > 0 && (
                    <ul className="search-results-dropdown">
                        {searchResults.map(card => (
                            // Ensure card and reviewLink exist
                            card && card.reviewLink ? (
                                <li key={card.reviewLink || card['Card Name']}> {/* Use reviewLink as key if available */}
                                    <Link href={card.reviewLink}>
                                        {/* Display Card Name and maybe Issuer for context */}
                                        <span className="search-result-name">{card['Card Name']}</span>
                                        {card.Issuer && <span className="search-result-issuer"> - {card.Issuer}</span>}
                                    </Link>
                                </li>
                            ) : null
                        ))}
                    </ul>
                 )}
                 {/* No results message (optional) */}
                 {isSearchFocused && searchQuery.length >= fuseOptions.minMatchCharLength && searchResults.length === 0 && (
                    <div className="search-no-results"> {/* Style this class */}
                        No cards found.
                    </div>
                 )}
                 {/* ----------------------------- */}
              </div>
            </li>
             {/* --- End Updated Search Bar --- */}

            {/* --- Your Menu Items Mapping (keep as is) --- */}
            {menuItems.map((item, index) => {
                const hasSubmenu = item.submenuKey && item.links.length > (item.submenuKey === 'subscribe' ? 0 : 1);
                const isSubmenuOpen = openSubmenu === item.submenuKey;
                const submenuId = `submenu-${item.submenuKey}`;

                const mainLinkHref = !hasSubmenu && item.links.length > 0 ? item.links[0].href : "#";
                const isInternalPageLink = mainLinkHref.startsWith('/') && !mainLinkHref.startsWith('//');
                const isDirectLink = item.submenuKey === 'subscribe';

                return (
                  <li
                    key={item.label + index}
                    className={hasSubmenu ? `has-dropdown ${isSubmenuOpen ? "submenu-open" : ""}` : ""}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      {isInternalPageLink || isDirectLink ? (
                          <Link href={mainLinkHref} className="nav-link" onClick={(e) => { if (hasSubmenu && !isMobileView && !isDirectLink) e.preventDefault(); }}>
                             {item.label}
                          </Link>
                      ) : (
                          <a href={mainLinkHref} className="nav-link" onClick={(e) => { if (hasSubmenu && !isMobileView) e.preventDefault(); }}>
                              {item.label}
                          </a>
                      )}

                      {hasSubmenu && !isDirectLink && isMobileView && (
                          <button
                              className="submenu-toggle-button"
                              onClick={() => toggleSubmenu(item.submenuKey)}
                              aria-controls={submenuId}
                              aria-expanded={isSubmenuOpen}
                              aria-label={`Toggle ${item.label} Submenu`}
                          >
                              {isSubmenuOpen ? '−' : '+'}
                          </button>
                      )}
                    </div>

                    {hasSubmenu && !isDirectLink && (
                      <ul
                        id={submenuId}
                        className={`dropdown-menu ${item.label === "Blog" ? "Blog" : ""}`}
                         aria-hidden={!isSubmenuOpen && isMobileView}
                      >
                        {item.links.map((link, i) => {
                          const isSubInternalLink = link.href.startsWith('/') && !link.href.startsWith('//');
                          return (
                              <li key={link.label + i}>
                                  {isSubInternalLink ? (
                                      <Link href={link.href}>
                                          {link.label}
                                      </Link>
                                  ) : (
                                      <a href={link.href}>{link.label}</a>
                                  )}
                              </li>
                          );
                        })}
                      </ul>
                    )}
                  </li>
                );
              })}
            {/* --- End Menu Items Mapping --- */}

          </ul>
        </nav>
      </div>
    </header>
  );
}