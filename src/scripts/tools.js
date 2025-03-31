document.addEventListener('DOMContentLoaded', function () {
  console.log("DOM fully loaded and parsed");

  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const mobileNav = document.getElementById('mobileNav');
  const menuBackdrop = document.getElementById('menuBackdrop');

  function toggleMobileNav() {
    // If it's desktop, do nothing
    if (window.innerWidth >= 989) {
      return;
    }
    mobileNav.classList.toggle('open');
    menuBackdrop.classList.toggle('open');
    hamburgerBtn.classList.toggle('open');
  }

  function closeMobileNav() {
    mobileNav.classList.remove('open');
    menuBackdrop.classList.remove('open');
    hamburgerBtn.classList.remove('open');
    document.querySelectorAll('.submenu-open').forEach(submenu => {
      submenu.classList.remove('submenu-open');
    });
  }

  function toggleSubmenu(liElement) {
    // If it's desktop, do nothing
    if (window.innerWidth >= 989) {
      return;
    }
    const alreadyOpen = liElement.classList.contains('submenu-open');
    // Close sibling submenus within the same parent <ul>
    const parentUl = liElement.parentElement;
    parentUl.querySelectorAll('.submenu-open').forEach(item => {
      item.classList.remove('submenu-open');
    });
    if (!alreadyOpen) {
      liElement.classList.add('submenu-open');
    }
  }

  function handleNavClick(e) {
    // If it's desktop, do nothing
    if (window.innerWidth >= 989) {
      return;
    }
    const link = e.target.closest('a');
    if (!link) return;

    const parentLi = link.closest('.has-dropdown');
    if (parentLi && link.classList.contains('dropdown-toggle')) {
      e.preventDefault();
      toggleSubmenu(parentLi);
    } else {
      closeMobileNav();
    }
  }

  hamburgerBtn.addEventListener('click', toggleMobileNav);
  menuBackdrop.addEventListener('click', closeMobileNav);
  mobileNav.addEventListener('click', handleNavClick);

  // Close menu on desktop resize
  window.addEventListener('resize', () => {
    if (window.innerWidth >= 989) {
      closeMobileNav();
    }
  });
});