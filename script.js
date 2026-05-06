/* ============================================
   JVTEX.CO — OTM Web Design
   Shared JavaScript
   ============================================ */

document.addEventListener('DOMContentLoaded', function () {

  // Mobile menu toggle
  const menuBtn = document.querySelector('.menu-toggle');
  const navList = document.querySelector('nav ul');

  if (menuBtn && navList) {
    menuBtn.addEventListener('click', function () {
      navList.classList.toggle('open');
    });

    // Close menu when a link is tapped
    navList.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navList.classList.remove('open');
      });
    });
  }

  // Highlight current nav item based on filename
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('nav a').forEach(function (link) {
    const href = link.getAttribute('href');
    if (href && href === currentPage) {
      link.classList.add('active');
    }
  });

  // Form submission feedback (placeholder, replace action with Formspree endpoint at launch)
  const contactForm = document.querySelector('form.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      // Formspree handles real submission. This is just basic UX feedback if needed.
      // No e.preventDefault() so the form actually posts.
    });
  }

});