// components/Header.js (or your file path)

"use client";
import { useEffect, useState } from "react";
import Image from 'next/image'; // Import Next.js Image
import Link from 'next/link';   // Import Next.js Link

const MOBILE_MAX_WIDTH = 1100;

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth < MOBILE_MAX_WIDTH;
      setIsMobileView(isMobile);
      // If resizing to desktop view, close mobile menu/submenus
      if (!isMobile) {
        setIsMobileMenuOpen(false);
        setOpenSubmenu(null);
      }
    };
    // Set initial view state
    handleResize();
    window.addEventListener("resize", handleResize);
    // Cleanup listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(prev => !prev);
     // Optionally reset submenus when opening/closing main menu
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

  // Define menu structure (Ensure hrefs are correct)
  const menuItems = [
      {
        label: "Featured Cards",
        submenuKey: "featured",
        links: [
         { label: "Best Travel Credit Cards", href: "#Best_Travel_Credit_Cards" },
         { label: "Luxury Travel Credit Cards", href: "#Luxury_TravelCredit_Cards" },
         { label: "Airline Credit Cards", href: "#Airline_Credit_Cards" },
         { label: "Hotel Credit Cards", href: "#Hotel_Credit_Cards" },
         { label: "No Annual Fee Credit Cards", href: "#No_Annual_Fee_Credit_Cards" },
         { label: "Business Credit Cards", href: "#Business_Credit_Cards" },
         // Using Next/Link for internal page navigation
         { label: "0% APR & Balance Transfer", href: "/zeroapr/Best-10-Zero-APR-And-Balance-Transfer-Credit-Cards-of-2025" },
         { label: "Cards With Lounge Access", href: "#Cards_With_Lounge_Access" },
         { label: "No Foreign Transaction Fee Cards", href: "#No_Foreign_Trans_Fees" },
         { label: "Beginners Travel Cards", href: "#Beginners_Travel_Credit_Cards" },
       ],
      },
      {
        label: "Tools",
        submenuKey: "tools",
        links: [
          { label: "Compare Travel Credit Cards", href: "#compare" },
          { label: "Personalized Recommendations", href: "#personalized_recs" },
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
        submenuKey: null, // No submenu
        links: [{ label: "Subscribe", href: "#subscribe" }], // Direct link
      },
   ];

  return (
    <header className="site-header">
      {/* Backdrop for mobile menu */}
      <div
        id="menuBackdrop"
        className={`menu-backdrop ${isMobileMenuOpen ? "open" : ""}`}
        onClick={handleBackdropClick}
        // Ensures backdrop is only active when menu is open
        style={{ visibility: isMobileMenuOpen ? 'visible' : 'hidden' }}
      />

      <div className="header-inner">
        {/* Logo + Toggle Container */}
        <div className="logo-toggle-container">
          {/* Hamburger Button */}
          <button
            id="hamburgerBtn"
            className={`menu-toggle ${isMobileMenuOpen ? "open" : ""}`}
            onClick={toggleMobileMenu}
            aria-label="Toggle Menu"
            aria-controls="mobileNav" // Controls the mobile nav container
            aria-expanded={isMobileMenuOpen} // Indicates if the nav is open
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>

          {/* Logo using Next.js Image */}
          <Link href="/" className="site-logo" aria-label="TravelCardInsider Home">
             {/* Replace width/height with actual logo dimensions */}
            <Image
                src="/6.jpg" // Ensure path is correct in /public
                alt="TravelCardInsider Logo"
                width={180} // Example width
                height={30} // Example height
                priority={true} // Prioritize loading for LCP
            />
          </Link>
        </div>

        {/* Navigation Container */}
        <nav
          id="mobileNav" // ID for aria-controls
          className={`main-nav ${isMobileMenuOpen ? "open" : ""}`}
          aria-hidden={!isMobileMenuOpen && isMobileView} // Hide from screen reader when closed on mobile
        >
          <ul className="nav-list">
            {/* Search Bar - moved outside mapping for structure */}
            <li className="header-actions">
              <div className="search-container">
                <input type="search" placeholder="Search..." aria-label="Search Site" />
              </div>
            </li>

            {/* Dynamic Menu Items */}
            {menuItems.map((item, index) => {
              const hasSubmenu = item.submenuKey && item.links.length > 1; // Check if it's a real submenu
              const isSubmenuOpen = openSubmenu === item.submenuKey;
              const submenuId = `submenu-${item.submenuKey}`; // Unique ID for submenu

              // Determine link target: use '#' if it's mainly a dropdown trigger, else use first link?
              const mainLinkHref = !hasSubmenu ? item.links[0].href : "#"; // Adjust logic if top-level items should also navigate

              // Check if the link is internal (starts with '/') or hash (#)
              const isInternalPageLink = mainLinkHref.startsWith('/') && !mainLinkHref.startsWith('//');

              return (
                <li
                  key={item.label + index} // Use label + index for potentially more stable key
                  className={hasSubmenu ? `has-dropdown ${isSubmenuOpen ? "submenu-open" : ""}` : ""}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}> {/* Wrapper for link + toggle */}
                    {/* Use Next/Link for internal pages, <a> for hash links/external */}
                    {isInternalPageLink ? (
                      <Link href={mainLinkHref} className="nav-link">
                          {item.label}
                      </Link>
                    ) : (
                      <a href={mainLinkHref} className="nav-link" onClick={ (e) => { if(mainLinkHref === "#" && !isMobileView) e.preventDefault(); }}>
                          {item.label}
                      </a>
                    )}

                    {/* Mobile Submenu Toggle Button */}
                    {hasSubmenu && isMobileView && (
                        <button
                            className="submenu-toggle-button" // Needs CSS to be styled and potentially hidden on desktop
                            onClick={() => toggleSubmenu(item.submenuKey)}
                            aria-controls={submenuId}
                            aria-expanded={isSubmenuOpen}
                            aria-label={`Toggle ${item.label} Submenu`}
                        >
                            {/* Simple +/- indicator, replace with icon if desired */}
                            {isSubmenuOpen ? '−' : '+'}
                        </button>
                    )}
                  </div>


                  {/* Submenu */}
                  {hasSubmenu && (
                    <ul
                      id={submenuId} // ID for aria-controls
                      className={`dropdown-menu ${item.label === "Blog" ? "Blog" : ""}`} // Keep specific class if needed by CSS
                      // Use aria-hidden for better screen reader support than just display:none
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