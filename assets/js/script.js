/* ================================================================
   AEROBOUND WEBSITE SETTINGS
   Change LOADER_DURATION to control how long the intro stays visible.
   Example: 4500 = 4.5 seconds.
================================================================ */
const LOADER_DURATION = 4300;

/* Loading screen ------------------------------------------------ */
const loader = document.querySelector('[data-loader]');
const skipLoaderButton = document.querySelector('[data-loader-skip]');
let loaderTimer;

function closeLoader() {
  if (!loader || loader.classList.contains('is-leaving')) return;

  clearTimeout(loaderTimer);
  loader.classList.add('is-leaving');
  document.body.classList.remove('is-loading');

  window.setTimeout(() => loader.remove(), 800);
}

if (loader) {
  loaderTimer = window.setTimeout(closeLoader, LOADER_DURATION);
  skipLoaderButton?.addEventListener('click', closeLoader);

  // Keep the site usable for people who reduce animations.
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    window.setTimeout(closeLoader, 350);
  }
}

/* FAQ dropdowns ------------------------------------------------- */
document.querySelectorAll('.faq-q').forEach((button) => {
  button.addEventListener('click', () => {
    button.closest('.faq-item')?.classList.toggle('open');
  });
});

/* Mobile menu --------------------------------------------------- */
document.querySelectorAll('[data-menu]').forEach((button) => {
  button.addEventListener('click', () => {
    document.querySelector('.nav-links')?.classList.toggle('open');
  });
});

/* Automatic copyright year ------------------------------------- */
document.querySelectorAll('[data-year]').forEach((element) => {
  element.textContent = new Date().getFullYear();
});
