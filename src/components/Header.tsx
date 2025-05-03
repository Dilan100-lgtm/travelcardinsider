// src/components/Header.tsx
"use client";
import { useEffect, useState, useMemo } from "react";
import Image from 'next/image';
import Link from 'next/link';
import Fuse from 'fuse.js';
import cardData from '@/data/finalcreditcard.json';
import { useAuth } from '@/context/AuthProvider';

const allCards = cardData.cards;
const MOBILE_MAX_WIDTH = 1100;

const fuseOptions = {
  keys: ['Card Name', 'Issuer', 'reviewLink'],
  includeScore: true,
  threshold: 0.4,
  minMatchCharLength: 2,
};

export default function Header() {
  const { user, logout } = useAuth();

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
        { label: "Who We Are", href: "/about/who-we-are" },
        { label: "Our Mission", href: "/about/our-mission" },
        { label: "How We Rate Credit Cards", href: "/about/how-we-rate" },
        { label: "Affiliate Disclosure", href: "/about/affiliate-disclosure" },
        { label: "Contact Us", href: "/about/contact" },
      ],
    },
    {
      label: user ? "Unsubscribe" : "Subscribe",
      submenuKey: null,
      links: [
        user
          ? { label: "Unsubscribe", href: "#", onClick: logout }
          : { label: "Subscribe", href: "/subscribe" },
      ],
    },
  ];

  return (
    // (no change to JSX structure — preserve as-is)
    <header className="site-header">
      ...
    </header>
  );
}
