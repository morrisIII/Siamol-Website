document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.querySelector('.nav-toggle');
  const mainNav = document.querySelector('.main-nav');
  const primaryNav = document.getElementById('primary-nav');

  if (navToggle && primaryNav) {
    navToggle.addEventListener('click', () => {
      const expanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', String(!expanded));
      primaryNav.classList.toggle('active');
    });

    // close nav when a link is clicked (mobile)
    primaryNav.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        primaryNav.classList.remove('active');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href === '#' || href === '') return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        target.setAttribute('tabindex', '-1');
        target.focus({ preventScroll: true });
      }
    });
  });

  // Customer rating buttons
  const rateButtons = document.querySelectorAll('.rate-btn');
  const rateResponse = document.querySelector('.rate-response');
  const ratingKey = 'siamol-rating';

  function updateRatingState(value) {
    rateButtons.forEach(btn => {
      const selected = btn.textContent.trim() === value;
      btn.classList.toggle('selected', selected);
      btn.setAttribute('aria-pressed', String(selected));
    });
    if (rateResponse) {
      rateResponse.textContent = value
        ? `Thanks for rating us ${value}/5. Your feedback helps us improve every job.`
        : '';
    }
  }

  if (rateButtons.length && rateResponse) {
    const savedRating = localStorage.getItem(ratingKey);
    if (savedRating) {
      updateRatingState(savedRating);
    }

    rateButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const rating = btn.textContent.trim();
        localStorage.setItem(ratingKey, rating);
        updateRatingState(rating);
      });
    });
  }
});