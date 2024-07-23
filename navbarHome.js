document.addEventListener('DOMContentLoaded', function() {
  const navbarWrap = document.querySelector('.global-navbar_navbar-wrap');
  const arrowIcon = document.querySelector('.navbar-back_arrow-icon');
  const bigCircle = document.querySelector('.navbar-back_big-circle');
  const smallCircle = document.querySelector('.navbar-back_small-circle');
  const menuText = document.querySelector('.s-s5.is-navbar.is-menu');
  const navbarBackgroundPath = document.querySelector('.global-navbar_background svg path:nth-child(3)');
  const backButton = document.querySelector('.global-navbar_back-button');

  navbarWrap.addEventListener('mouseenter', function() {
    gsap.to(arrowIcon, { opacity: 1.0, duration: 0.3 });
    gsap.to(bigCircle, { opacity: 1.0, duration: 0.3 });
    gsap.to(menuText, { opacity: 1.0, duration: 0.3 });
    gsap.to(navbarBackgroundPath, { attr: { fill: 'url(#paint1_linear_3240_2372)' }, duration: 0.3 });
  });

  navbarWrap.addEventListener('mouseleave', function() {
    gsap.to(arrowIcon, { opacity: 0.5, duration: 0.3 });
    gsap.to(bigCircle, { opacity: 0.5, duration: 0.3 });
    gsap.to(menuText, { opacity: 0.5, duration: 0.3 });
    gsap.to(navbarBackgroundPath, { attr: { fill: 'url(#paint0_linear_3227_209)' }, duration: 0.3 });
  });

  backButton.addEventListener('mouseenter', function() {
    gsap.to(bigCircle, { scale: 1.2, fill: '#6BE688', opacity: 1.0, duration: 0.3 });
    gsap.to(smallCircle, { scale: 0.8, opacity: 1.0, duration: 0.3 });
    gsap.to(arrowIcon.querySelector('path'), { strokeWidth: 2, duration: 0.3 });
    gsap.to(navbarBackgroundPath, { attr: { fill: 'url(#paint1_linear_3240_2418)' }, duration: 0.3 });
  });

  backButton.addEventListener('mouseleave', function() {
    gsap.to(bigCircle, { scale: 1.0, opacity: 0.5, duration: 0.3 });
    gsap.to(smallCircle, { scale: 1.0, opacity: 0.5, duration: 0.3 });
    gsap.to(arrowIcon.querySelector('path'), { strokeWidth: 1, duration: 0.3 });
    gsap.to(navbarBackgroundPath, { attr: { fill: 'url(#paint0_linear_3227_209)' }, duration: 0.3 });
  });
});
