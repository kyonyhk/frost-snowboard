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

  // Get the last page from session storage
  var lastPage = sessionStorage.getItem('lastPage');
  var isNavigatingBack = specialUrls.includes(lastPage);

  console.log('Last Page:', lastPage);
  console.log('Is Navigating Back:', isNavigatingBack);

  // If navigating back from a special URL, hide the preloader and set scroll position
  if (isNavigatingBack) {
    console.log('Navigating back from a special URL, hiding preloader...');
    if (preloaderSection) {
      preloaderSection.style.display = 'none';
      preloaderCounter.style.display = 'none';
    }
    document.body.classList.remove('no-scroll'); // Allow scrolling

    // Restore scroll position
    var path = window.location.pathname;
    var scrollKey = 'scrollPosition-' + path;
    var savedPosition = parseInt(sessionStorage.getItem(scrollKey), 10);
    if (!isNaN(savedPosition) && savedPosition > 0) {
      window.scrollTo(0, savedPosition);
    }
    return; // Exit early to skip the rest of the preloader logic
  }

  console.log('Showing preloader...');
  // Show the preloader if not navigating back from a special URL
  preloaderSection.style.display = 'block';
  document.body.classList.add('no-scroll');
});
