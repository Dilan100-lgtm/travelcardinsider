// src/components/Header.tsx
"use client";
import { useEffect, useState, useMemo } from "react";
import Image from 'next/image';
import Link from 'next/link';
import Fuse from 'fuse.js';
import cardData from '@/data/finalcreditcard.json';
import { useAuth } from '@/context/AuthProvider'; // <-- Import useAuth

const allCards = cardData.cards;
const MOBILE_MAX_WIDTH = 1100;

const fuseOptions = {
  keys: ['Card Name', 'Issuer', 'reviewLink'],
  includeScore: true,
  threshold: 0.4,
  minMatchCharLength: 2,
};

// Define interface for menu links, including optional onClick
interface MenuLink {
  label: string;
  href: string;
  onClick?: () => void; // Optional onClick handler
}

interface MenuItem {
  label: string;
  submenuKey: string | null;
  links: MenuLink[];
}


export default function Header() {
  const { user, logout } = useAuth(); // <-- Get user and logout function
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const [isMobileView, setIsMobileView] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [isSearchFocused, setIsSearchFocused] = useState(false);

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
    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(prev => !prev);
    if (isMobileMenuOpen) { // If closing menu, also close submenu
      setOpenSubmenu(null);
    }
  };

  const handleBackdropClick = () => {
    setIsMobileMenuOpen(false);
    setOpenSubmenu(null);
  };

  const toggleSubmenu = (menuKey: string) => {
    setOpenSubmenu(prev => (prev === menuKey ? null : menuKey));
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    setSearchQuery(query);
    if (query.length >= fuseOptions.minMatchCharLength) {
      const fuseResults = fuse.search(query);
      setSearchResults(fuseResults.slice(0, 5).map(result => result.item));
    } else {
      setSearchResults([]);
    }
  };

  // --- Define Menu Items INSIDE the component to access user/logout ---
  const menuItems: MenuItem[] = useMemo(() => {
      // Base items without Subscribe/Unsubscribe
      const baseItems: MenuItem[] = [
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
                { label: "News", href: "#Credit_Card_News" }, // Assuming this is an anchor link
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
      ];

      // Create the dynamic Auth menu item
      const authItem: MenuItem = user
        ? {
            label: "Unsubscribe", // Main label for the menu item
            submenuKey: null, // No submenu
            links: [{ label: "Unsubscribe", href: "#", onClick: logout }], // Add onClick handler
          }
        : {
            label: "Subscribe", // Main label for the menu item
            submenuKey: null, // No submenu
            links: [{ label: "Subscribe", href: "/subscribe" }], // Link to subscribe page
          };

      return [...baseItems, authItem]; // Combine base items with the dynamic one

  }, [user, logout]); // Recalculate when user or logout changes

  return (
    <header className="site-header">
      {/* Menu Backdrop */}
      <div
        id="menuBackdrop"
        className={`menu-backdrop ${isMobileMenuOpen ? "open" : ""}`}
        onClick={handleBackdropClick}
        style={{ visibility: isMobileMenuOpen ? 'visible' : 'hidden' }}
      />
      <div className="header-inner">
        <div className="logo-toggle-container">
          {/* Hamburger Button */}
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
          {/* Logo */}
          <Link href="/" className="site-logo" aria-label="TravelCardInsider Home">
            <Image src="/6.jpg" alt="TravelCardInsider Logo" width={180} height={30} priority={true} />
          </Link>
        </div>
        {/* Main Navigation */}
        <nav id="mobileNav" className={`main-nav ${isMobileMenuOpen ? "open" : ""}`} aria-hidden={!isMobileMenuOpen && isMobileView}>
          <ul className="nav-list">
            {/* Search Bar Item */}
            <li className="header-actions">
              <div className="search-container">
                <input
                  type="search"
                  placeholder="Search Cards..."
                  aria-label="Search Credit Cards"
                  value={searchQuery}
                  onChange={handleSearchChange}
                  onFocus={() => setIsSearchFocused(true)}
                  // Use timeout to allow click on results before blur hides them
                  onBlur={() => setTimeout(() => setIsSearchFocused(false), 150)}
                />
                {/* Search Results Dropdown */}
                {isSearchFocused && searchQuery.length >= fuseOptions.minMatchCharLength && (
                  searchResults.length > 0 ? (
                    <ul className="search-results-dropdown">
                      {searchResults.map(card => card && card.reviewLink && (
                        <li key={card.reviewLink || card['Card Name']}>
                          <Link href={card.reviewLink} onClick={() => {setIsMobileMenuOpen(false); setOpenSubmenu(null);}}>
                            <span className="search-result-name">{card['Card Name']}</span>
                            {card.Issuer && <span className="search-result-issuer"> - {card.Issuer}</span>}
                          </Link>
                        </li>
                      ))}
                    </ul>
                   ) : (
                    <div className="search-no-results">No cards found.</div>
                   )
                )}
              </div>
            </li>
            {/* Mapped Menu Items */}
            {menuItems.map((item, index) => {
              const hasSubmenu = item.submenuKey && item.links.length > 1; // Submenu exists if key and more than 1 link
              const isSubmenuOpen = openSubmenu === item.submenuKey;
              const submenuId = `submenu-${item.submenuKey}`;
              // Determine properties of the primary link/action for the menu item
              const primaryLink = item.links[0];
              // A direct link is one without a submenu, like Subscribe/Unsubscribe
              const isDirectLink = !item.submenuKey;
              // Check if the href is for internal navigation
              const isInternalPageLink = primaryLink.href.startsWith('/') && !primaryLink.href.startsWith('//');

               // Function to render the main link/button for the menu item
              const renderMainLink = () => {
                const linkProps = {
                  className: `nav-link ${isDirectLink ? 'cta-style' : ''}`, // Add a class to style Subscribe/Unsubscribe if needed
                  onClick: (e: React.MouseEvent<HTMLElement>) => {
                    if (primaryLink.onClick) { // Handle onClick specifically for Unsubscribe
                      e.preventDefault(); // Prevent navigation since href is "#"
                      primaryLink.onClick();
                      setIsMobileMenuOpen(false); // Close mobile menu on action
                      setOpenSubmenu(null);
                    } else if (hasSubmenu && !isMobileView) {
                      // Prevent default only for desktop dropdown hover triggers (handled by CSS typically)
                      // e.preventDefault(); // Commented out: CSS hover handles desktop dropdowns
                    } else {
                       // Close mobile menu on any direct navigation click
                      if (isMobileMenuOpen) {
                          handleBackdropClick();
                      }
                    }
                    // Allow default navigation for regular links
                  }
                };

                if (primaryLink.onClick) { // Render Unsubscribe as an <a> tag styled as needed
                    return <a href={primaryLink.href} {...linkProps}>{item.label}</a>;
                } else if (isInternalPageLink || isDirectLink) { // Render Subscribe or other internal links
                    return <Link href={primaryLink.href} {...linkProps}>{item.label}</Link>;
                } else { // Render external links or anchor links
                    return <a href={primaryLink.href} {...linkProps}>{item.label}</a>;
                }
              };


              return (
                <li key={item.label + index} className={hasSubmenu ? `has-dropdown ${isSubmenuOpen ? "submenu-open" : ""}` : ""}>
                  {/* Container for link and optional submenu toggle */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    {/* Render the main link/action */}
                    {renderMainLink()}

                    {/* Mobile Submenu Toggle Button */}
                    {hasSubmenu && isMobileView && (
                      <button
                        className="submenu-toggle-button"
                        onClick={() => toggleSubmenu(item.submenuKey!)}
                        aria-controls={submenuId}
                        aria-expanded={isSubmenuOpen}
                        aria-label={`Toggle ${item.label} Submenu`}
                      >
                        {isSubmenuOpen ? '−' : '+'}
                      </button>
                    )}
                  </div>
                  {/* Submenu UL */}
                  {hasSubmenu && (
                    <ul id={submenuId} className={`dropdown-menu ${item.label === "Blog" ? "Blog" : ""}`} aria-hidden={!isSubmenuOpen && isMobileView}>
                      {item.links.map((link, i) => {
                        const isSubInternalLink = link.href.startsWith('/') && !link.href.startsWith('//');
                        return (
                          <li key={link.label + i}>
                            {isSubInternalLink ? (
                              <Link href={link.href} onClick={handleBackdropClick}>{link.label}</Link> // Close menu on sublink click
                            ) : (
                              <a href={link.href} onClick={handleBackdropClick}>{link.label}</a> // Close menu on sublink click
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