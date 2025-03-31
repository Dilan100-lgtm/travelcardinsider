"use client";
import { useEffect } from "react";

const MOBILE_MAX_WIDTH = 1100;

export default function Header() {
  useEffect(() => {
    const hamburgerBtn = document.getElementById("hamburgerBtn");
    const mobileNav = document.getElementById("mobileNav");
    const menuBackdrop = document.getElementById("menuBackdrop");

    const isMobileView = () => window.innerWidth < MOBILE_MAX_WIDTH;

    const toggleMobileNav = () => {
      if (!isMobileView()) return;
      mobileNav.classList.toggle("open");
      menuBackdrop.classList.toggle("open");
      hamburgerBtn.classList.toggle("open");
    };

    const closeMobileNav = () => {
      mobileNav.classList.remove("open");
      menuBackdrop.classList.remove("open");
      hamburgerBtn.classList.remove("open");
      document.querySelectorAll(".submenu-open").forEach(el => el.classList.remove("submenu-open"));
    };

    const toggleSubmenu = (liElement) => {
      if (!isMobileView()) return;
      const alreadyOpen = liElement.classList.contains("submenu-open");
      const parentUl = liElement.parentElement;
      parentUl.querySelectorAll(".submenu-open").forEach(item => item.classList.remove("submenu-open"));
      if (!alreadyOpen) {
        liElement.classList.add("submenu-open");
      }
    };

    const handleNavClick = (e) => {
      if (!isMobileView()) return;
      const link = e.target.closest("a");
      if (!link) return;
      const parentLi = link.closest(".has-dropdown");
      if (parentLi && link.classList.contains("dropdown-toggle")) {
        e.preventDefault();
        toggleSubmenu(parentLi);
      } else {
        closeMobileNav();
      }
    };

    // Attach event listeners
    hamburgerBtn?.addEventListener("click", toggleMobileNav);
    menuBackdrop?.addEventListener("click", closeMobileNav);
    mobileNav?.addEventListener("click", handleNavClick);
    window.addEventListener("resize", () => {
      if (!isMobileView()) closeMobileNav();
    });

    // Cleanup on unmount
    return () => {
      hamburgerBtn?.removeEventListener("click", toggleMobileNav);
      menuBackdrop?.removeEventListener("click", closeMobileNav);
      mobileNav?.removeEventListener("click", handleNavClick);
      window.removeEventListener("resize", closeMobileNav);
    };
  }, []);

  return (
    <header className="site-header">
      {/* Your header JSX goes here */}
    </header>
  );
}
