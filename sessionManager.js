document.addEventListener('DOMContentLoaded', function() {
  const savedPosition = sessionStorage.getItem('scrollPosition');
  if (savedPosition) {
    console.log('Scrolling to saved position:', savedPosition);
    window.scrollTo(0, parseInt(savedPosition, 10));
  }

  window.addEventListener('beforeunload', function() {
    const scrollY = window.scrollY || window.pageYOffset;
    console.log('Saving scroll position:', scrollY);
    sessionStorage.setItem('scrollPosition', scrollY.toString());
  });
});

window.onload = function() {
  const savedPosition = sessionStorage.getItem('scrollPosition');
  if (savedPosition) {
    window.scrollTo(0, parseInt(savedPosition, 10));
  }
};

