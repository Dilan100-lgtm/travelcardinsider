// src/components/Header.jsx

"use client";
import { useEffect, useState } from "react";
import Image from 'next/image'; // Import Next.js Image
import Link from 'next/link';   // Import Next.js Link
import cardData from '@/data/finalcreditcard.json'; // Import card data

const allCards = cardData.cards; // Get the array of cards
const MOBILE_MAX_WIDTH = 1100;

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const [isMobileView, setIsMobileView] = useState(false);

  // --- Search State ---
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  // --------------------

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

  // --- Search Logic ---
  const handleSearchChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);

    if (query.length > 1) { // Start searching after 1 character
        const filteredCards = allCards.filter(card =>
            card['Card Name']?.toLowerCase().includes(query.toLowerCase())
        );
        setSearchResults(filteredCards.slice(0, 8)); // Show top 8 results
    } else {
        setSearchResults([]); // Clear results if query is short
    }
  };

  const handleResultClick = () => {
    setSearchQuery('');
    setSearchResults([]);
    setIsSearchFocused(false);
  };
  // --------------------


  // Define menu structure (Ensure hrefs are correct)
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
          { label: "Compare Travel Credit Cards", href: "/rewards-compare" }, // Updated href
          { label: "Personalized Recommendations", href: "/card-finder" }, // Updated href
        ],
      },
      {
        label: "Blog",
        submenuKey: "blog",
        links: [
          { label: "Guides", href: "#Credit_Card_Guids" }, // Keep or update these hrefs as needed
          { label: "News", href: "#Credit_Card_News" },
          // Add links to actual blog posts here if desired
        ],
      },
      {
        label: "Learn",
        submenuKey: "learn",
        links: [
         { label: "Travel Credit Card Basics", href: "#Credit_Card_Basics" },
         { label: "Rewards & Perks", href: "#Credit_Card_Rewards" },
         { label: "Credit Management", href: "#Credit_Management" },
         { label: "Advanced Strategies", href: "#Advanced_Strategies" },
         { label: "FAQs & Guides", href: "#FAQs_and_Guides" },
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
                src="/6.jpg" // Ensure path is correct in /public
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
              <div className="search-container"> {/* Added relative positioning needed for dropdown */}
                <input
                    type="search"
                    placeholder="Search Cards..."
                    aria-label="Search Credit Cards"
                    value={searchQuery}
                    onChange={handleSearchChange}
                    onFocus={() => setIsSearchFocused(true)}
                    // Delay blur slightly to allow clicking on results
                    onBlur={() => setTimeout(() => setIsSearchFocused(false), 200)}
                 />
                 {/* --- Search Results Dropdown --- */}
                 {isSearchFocused && searchResults.length > 0 && (
                    <ul className="search-results-dropdown">
                        {searchResults.map(card => (
                            // Check if reviewLink exists before creating Link
                            card.reviewLink ? (
                                <li key={card['Card Name']} onClick={handleResultClick}>
                                    <Link href={card.reviewLink} >
                                        {card['Card Name']}
                                    </Link>
                                </li>
                            ) : null // Don't render if no reviewLink
                        ))}
                    </ul>
                 )}
                 {/* ----------------------------- */}
              </div>
            </li>
             {/* --- End Updated Search Bar --- */}

            {menuItems.map((item, index) => {
              const hasSubmenu = item.submenuKey && item.links.length > (item.submenuKey === 'subscribe' ? 0 : 1); // Adjusted logic for Subscribe
              const isSubmenuOpen = openSubmenu === item.submenuKey;
              const submenuId = `submenu-${item.submenuKey}`;

              // Link target logic improved: Use first link for non-submenu items, '#' for dropdown triggers
              const mainLinkHref = !hasSubmenu && item.links.length > 0 ? item.links[0].href : "#";
              const isInternalPageLink = mainLinkHref.startsWith('/') && !mainLinkHref.startsWith('//');

              // Special case for 'Subscribe' which might be a direct link even if it has only one item
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
          </ul>
        </nav>
      </div>
    </header>
  );
}