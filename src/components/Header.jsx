// src/components/Header.jsx

"use client";
import { useEffect, useState, useMemo } from "react";
import Image from 'next/image';
import Link from 'next/link';
import Fuse from 'fuse.js';
import cardData from '@/data/finalcreditcard.json';
import EmailSignupModal from './EmailSignupModal'; // *** IMPORT THE MODAL ***

const allCards = cardData.cards;
const MOBILE_MAX_WIDTH = 1100;

const fuseOptions = {
  keys: [ 'Card Name', 'Issuer', 'reviewLink' ],
  includeScore: true,
  threshold: 0.4,
  minMatchCharLength: 2,
};

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const [isMobileView, setIsMobileView] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [isSubscribeModalOpen, setIsSubscribeModalOpen] = useState(false); // *** ADD MODAL STATE ***

  const fuse = useMemo(() => new Fuse(allCards, fuseOptions), []);

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

  const handleSearchChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    if (query.length >= fuseOptions.minMatchCharLength) {
        const fuseResults = fuse.search(query);
        setSearchResults(fuseResults.slice(0, 5).map(result => result.item));
    } else {
        setSearchResults([]);
    }
  };

  // *** FUNCTION TO OPEN MODAL ***
  const openSubscribeModal = (e) => {
    e.preventDefault(); // Prevent default link behavior
    setIsSubscribeModalOpen(true);
    setIsMobileMenuOpen(false); // Close mobile menu if open
  };

  // *** FUNCTION TO CLOSE MODAL ***
  const closeSubscribeModal = () => {
    setIsSubscribeModalOpen(false);
  };


   // Define menu structure (Keep your existing menu items)
   const menuItems = [
      // ... (keep your existing Featured Cards, Tools, Blog, Learn, About sections) ...
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
          { label: "Compare Travel Credit Cards", href: "/compare" },
          { label: "Personalized Card Finder", href: "/card-finder" },
          { label: "Rewards Calculator", href: "/rewards-compare" },
          { label: "RewardMax Analyzer", href: "/rewards" },

        ],
      },
      {
        label: "Blog",
        submenuKey: "blog",
        links: [
          { label: "Guides", href: "/guides" },
          { label: "News", href: "#Credit_Card_News" }, // Consider making this a real link
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
         { label: "Who We Are", href: "/about/who-we-are" },
         { label: "Our Mission", href: "/about/our-mission" },
         { label: "How We Rate Credit Cards", href: "/about/how-we-rate" },
         { label: "Affiliate Disclosure", href: "/about/affiliate-disclosure" },
         { label: "Contact Us", href: "/about/contact" },
        ],
      },
      // { // *** REMOVE THE OLD SUBSCRIBE MENU ITEM ***
      //   label: "Subscribe",
      //   submenuKey: null,
      //   links: [{ label: "Subscribe", href: "#subscribe" }],
      // },
   ];

  return (
    <> {/* Use Fragment shorthand */}
      <header className="site-header">
        {/* ... (rest of the header structure: backdrop, logo, toggle, search) ... */}
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
              <span className="bar"></span><span className="bar"></span><span className="bar"></span>
            </button>
             <Link href="/" className="site-logo" aria-label="TravelCardInsider Home">
               <Image src="/6.jpg" alt="TravelCardInsider Logo" width={180} height={30} priority={true} />
             </Link>
          </div>

          <nav
            id="mobileNav"
            className={`main-nav ${isMobileMenuOpen ? "open" : ""}`}
            aria-hidden={!isMobileMenuOpen && isMobileView}
          >
            <ul className="nav-list">
                {/* --- Search Bar --- */}
                <li className="header-actions">
                  <div className="search-container">
                    <input
                      type="search"
                      placeholder="Search Cards..."
                      aria-label="Search Credit Cards"
                      value={searchQuery}
                      onChange={handleSearchChange}
                      onFocus={() => setIsSearchFocused(true)}
                      onBlur={() => setTimeout(() => setIsSearchFocused(false), 300)}
                    />
                    {isSearchFocused && searchResults.length > 0 && (
                      <ul className="search-results-dropdown">
                        {searchResults.map(card => (
                          card && card.reviewLink ? (
                            <li key={card.reviewLink || card['Card Name']}>
                              <Link href={card.reviewLink}>
                                <span className="search-result-name">{card['Card Name']}</span>
                                {card.Issuer && <span className="search-result-issuer"> - {card.Issuer}</span>}
                              </Link>
                            </li>
                          ) : null
                        ))}
                      </ul>
                    )}
                    {isSearchFocused && searchQuery.length >= fuseOptions.minMatchCharLength && searchResults.length === 0 && (
                      <div className="search-no-results">No cards found.</div>
                    )}
                  </div>
                </li>
              {/* Map menu items */}
              {menuItems.map((item, index) => {
                const hasSubmenu = item.submenuKey && item.links.length > 1; // Adjusted logic slightly
                const isSubmenuOpen = openSubmenu === item.submenuKey;
                const submenuId = `submenu-${item.submenuKey}`;
                const mainLinkHref = !hasSubmenu && item.links.length > 0 ? item.links[0].href : "#";
                const isInternalPageLink = mainLinkHref.startsWith('/') && !mainLinkHref.startsWith('//');

                return (
                  <li key={item.label + index} className={hasSubmenu ? `has-dropdown ${isSubmenuOpen ? "submenu-open" : ""}` : ""}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      {isInternalPageLink ? (
                        <Link href={mainLinkHref} className="nav-link" onClick={(e) => { if (hasSubmenu && !isMobileView) e.preventDefault(); }}>
                          {item.label}
                        </Link>
                      ) : (
                        <a href={mainLinkHref} className="nav-link" onClick={(e) => { if (hasSubmenu && !isMobileView) e.preventDefault(); }}>
                          {item.label}
                        </a>
                      )}
                      {hasSubmenu && isMobileView && (
                        <button className="submenu-toggle-button" onClick={() => toggleSubmenu(item.submenuKey)} aria-controls={submenuId} aria-expanded={isSubmenuOpen} aria-label={`Toggle ${item.label} Submenu`}>
                          {isSubmenuOpen ? '−' : '+'}
                        </button>
                      )}
                    </div>
                    {hasSubmenu && (
                      <ul id={submenuId} className={`dropdown-menu ${item.label === "Blog" ? "Blog" : ""}`} aria-hidden={!isSubmenuOpen && isMobileView}>
                        {item.links.map((link, i) => {
                           const isSubInternalLink = link.href.startsWith('/') && !link.href.startsWith('//');
                          return (
                            <li key={link.label + i}>
                              {isSubInternalLink ? <Link href={link.href}>{link.label}</Link> : <a href={link.href}>{link.label}</a>}
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </li>
                );
              })}

              {/* --- ADD THE SUBSCRIBE BUTTON SEPARATELY --- */}
              <li className="header-actions subscribe-button-container"> {/* Optional container for styling */}
                 <button onClick={openSubscribeModal} className="subscribe-button"> {/* Use button for action */}
                     Subscribe
                 </button>
              </li>
              {/* --- END SUBSCRIBE BUTTON --- */}
            </ul>
          </nav>
        </div>
      </header>

      {/* --- RENDER THE MODAL CONDITIONALLY --- */}
      {isSubscribeModalOpen && <EmailSignupModal onClose={closeSubscribeModal} />}
    </>
  );
}