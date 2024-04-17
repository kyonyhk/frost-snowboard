document.addEventListener('DOMContentLoaded', function() {
  var enterButton = document.querySelector('.enter-button');
  if (enterButton) {
    enterButton.addEventListener('click', function() {
      // Implementation remains similar
    });
  }

  window.addEventListener('beforeunload', function() {
    if (document.referrer.includes('yourdomain.com/subdomain')) {
      sessionStorage.setItem('scrollPosition', window.scrollY || window.pageYOffset);
    } else {
      sessionStorage.removeItem('scrollPosition'); // Clear when not needed
    }
  });

  // On load, only scroll if the referrer is correct
  if (document.referrer.includes('yourdomain.com/subdomain')) {
    let savedPosition = parseInt(sessionStorage.getItem('scrollPosition'), 10);
    if (!isNaN(savedPosition) && savedPosition > 0) {
      window.scrollTo(0, savedPosition);
      console.log('Scrolling to saved position:', savedPosition);
    }
  } else {
    window.scrollTo(0, 0); // Reset to top if not coming from a subdomain
  }
});
