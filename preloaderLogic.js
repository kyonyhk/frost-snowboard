document.addEventListener('DOMContentLoaded', function() {
  var preloaderShownKey = 'preloaderShown';
  var preloaderCounter = document.querySelector('.s-s3.is-loading');
  var preloaderSection = document.querySelector('.section.is-loading');
  
  // List of URLs that should not trigger the preloader when navigating back to the home page
  var specialUrls = [
    '/collection/apex-collection',
    '/collection/ember-collection',
    '/collection/nebula-collection',
    '/frost-tech'
  ];

  // Check if the user is navigating back to the home page from a special URL
  var referrer = document.referrer;
  var isNavigatingBack = specialUrls.some(url => referrer.includes(url));

  // If navigating back from a special URL, hide the preloader
  if (isNavigatingBack) {
    if (preloaderSection) {
      preloaderSection.style.display = 'none';
      preloaderCounter.style.display = 'none';
    }
    document.body.classList.remove('no-scroll'); // Allow scrolling
    return; // Exit early to skip the rest of the preloader logic
  }

  // Show the preloader if not navigating back from a special URL
  preloaderSection.style.display = 'block';
  document.body.classList.add('no-scroll');
});
