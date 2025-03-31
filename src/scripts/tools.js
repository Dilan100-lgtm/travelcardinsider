document.addEventListener('DOMContentLoaded', function () {
  console.log("DOM fully loaded and parsed");

  const MOBILE_MAX_WIDTH = 1100;

  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const mobileNav = document.getElementById('mobileNav');
  const menuBackdrop = document.getElementById('menuBackdrop');

  function isMobileView() {
    return window.innerWidth < MOBILE_MAX_WIDTH;
  }

  function toggleMobileNav() {
    if (!isMobileView()) return;

    mobileNav.classList.toggle('open');
    menuBackdrop.classList.toggle('open');
    hamburgerBtn.classList.toggle('open');
  }

  function closeMobileNav() {
    mobileNav.classList.remove('open');
    menuBackdrop.classList.remove('open');
    hamburgerBtn.classList.remove('open');

    // Close any open submenus
    document.querySelectorAll('.submenu-open').forEach(submenu => {
      submenu.classList.remove('submenu-open');
    });
  }

  function toggleSubmenu(liElement) {
    if (!isMobileView()) return;

    const alreadyOpen = liElement.classList.contains('submenu-open');

    // Close all other open submenus in the same parent
    const parentUl = liElement.parentElement;
    parentUl.querySelectorAll('.submenu-open').forEach(item => {
      item.classList.remove('submenu-open');
    });

    if (!alreadyOpen) {
      liElement.classList.add('submenu-open');
    }
  }

  function handleNavClick(e) {
    if (!isMobileView()) return;

    const link = e.target.closest('a');
    if (!link) return;

    const parentLi = link.closest('.has-dropdown');
    if (parentLi && link.classList.contains('dropdown-toggle')) {
      e.preventDefault();
      toggleSubmenu(parentLi);
    } else {
      closeMobileNav(); // Close menu if a link is clicked
    }
  }

  // Event Listeners
  hamburgerBtn.addEventListener('click', toggleMobileNav);
  menuBackdrop.addEventListener('click', closeMobileNav);
  mobileNav.addEventListener('click', handleNavClick);

  // Auto-close menu on resize to desktop
  window.addEventListener('resize', () => {
    if (!isMobileView()) {
      closeMobileNav();
    }
  });
});
