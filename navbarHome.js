document.addEventListener('DOMContentLoaded', function() {
  const navbarWrap = document.querySelector('.global-navbar_navbar-wrap');
  const arrowIcon = document.querySelector('.navbar-back_arrow-icon');
  const bigCircle = document.querySelector('.navbar-back_big-circle');
  const menuText = document.querySelector('.s-s5.is-navbar.is-menu');
  const navbarBackgroundPath = document.querySelector('.global-navbar_background svg path:nth-child(3)');

  // Navbar default hover
  navbarWrap.addEventListener('mouseenter', function() {
    gsap.to(arrowIcon, { opacity: 1.0, duration: 0.3 });
    gsap.to(bigCircle, { opacity: 1.0, duration: 0.3 });
    gsap.to(menuText, { opacity: 1.0, duration: 0.3 });
    gsap.to(navbarBackgroundPath, { stroke: 'url(#paint1_linear_3240_2372)', duration: 0.3 });
  });

  navbarWrap.addEventListener('mouseleave', function() {
    gsap.to(arrowIcon, { opacity: 0.5, duration: 0.3 });
    gsap.to(bigCircle, { opacity: 0.5, duration: 0.3 });
    gsap.to(menuText, { opacity: 0.5, duration: 0.3 });
    gsap.to(navbarBackgroundPath, { stroke: 'none', duration: 0.3 });
  });
});
