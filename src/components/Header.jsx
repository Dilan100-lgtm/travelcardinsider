"use client";
import { useEffect, useState } from "react";

const MOBILE_MAX_WIDTH = 1100;

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const [isMobileView, setIsMobileView] = useState(false);

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
  };

  const handleBackdropClick = () => {
    setIsMobileMenuOpen(false);
    setOpenSubmenu(null);
  };

  const toggleSubmenu = (menuKey) => {
    setOpenSubmenu(prev => (prev === menuKey ? null : menuKey));
  };

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
        { label: "0% APR & Balance Transfer", href: "#Balance_Transfer_Credit_Cards" },
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
      submenuKey: null,
      links: [{ label: "Subscribe", href: "#subscribe" }],
    },
  ];

  return (
    <header className="site-header">
      <div className="menu-backdrop" style={{ display: isMobileMenuOpen ? "block" : "none" }} onClick={handleBackdropClick}></div>

      <div className="header-inner">
        {/* Logo + Toggle */}
        <div className="logo-toggle-container">
          <button
            id="hamburgerBtn"
            className={`menu-toggle ${isMobileMenuOpen ? "open" : ""}`}
            onClick={toggleMobileMenu}
            aria-label="Toggle Menu"
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>
          <a href="/" className="site-logo">
            <img src="/6.jpg" alt="TravelCardInsider Logo" />
          </a>
        </div>

        {/* Nav */}
        <nav id="mobileNav" className={`main-nav ${isMobileMenuOpen ? "open" : ""}`}>
          <ul className="nav-list">
            {/* Search */}
            <li className="header-actions">
              <div className="search-container">
                <input type="search" placeholder="Search..." aria-label="Search" />
              </div>
            </li>

            {/* Menu Items */}
            {menuItems.map((item, index) => (
              <li
                key={index}
                className={`has-dropdown ${
                  openSubmenu === item.submenuKey ? "submenu-open" : ""
                }`}
              >
                {item.submenuKey ? (
                  <a
                    href="#"
                    className="dropdown-toggle"
                    onClick={(e) => {
                      if (isMobileView) {
                        e.preventDefault();
                        toggleSubmenu(item.submenuKey);
                      }
                    }}
                  >
                    {item.label}
                  </a>
                ) : (
                  <a href={item.links[0].href}>{item.label}</a>
                )}

                {item.submenuKey && (
                  <ul className={`dropdown-menu ${item.label === "Blog" ? "Blog" : ""}`}>
                    {item.links.map((link, i) => (
                      <li key={i}>
                        <a href={link.href}>{link.label}</a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
