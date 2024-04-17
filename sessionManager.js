document.addEventListener('DOMContentLoaded', function() {
  if (sessionStorage.getItem('scrollPosition')) {
    window.scrollTo(0, sessionStorage.getItem('scrollPosition'));
  }

  window.addEventListener('beforeunload', function() {
    sessionStorage.setItem('scrollPosition', window.scrollY || window.pageYOffset);
  });
});
