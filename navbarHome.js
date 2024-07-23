document.addEventListener('DOMContentLoaded', function() {
  const menuText = document.querySelector('.s-s5.is-navbar.is-menu');
  const arrowIcon = document.querySelector('.navbar-back_arrow-icon');
  const bigCircle = document.querySelector('.navbar-back_big-circle');
  const smallCircle = document.querySelector('.navbar-back_small-circle');
  const navbarBackgroundPath = document.querySelector('.global-navbar_background svg path:nth-child(3)');
  const backButton = document.querySelector('.global-navbar_back-button');

  console.log('Elements:', { menuText, arrowIcon, bigCircle, smallCircle, navbarBackgroundPath, backButton });

  // Menu text hover effect
  menuText.addEventListener('mouseenter', function() {
    console.log('Menu text mouseenter');
    gsap.to(arrowIcon, { opacity: 1.0, duration: 0.5, ease: 'power4.inOut' });
    gsap.to(bigCircle, { opacity: 1.0, duration: 0.5, ease: 'power4.inOut' });
    gsap.to(menuText, { opacity: 1.0, duration: 0.5, ease: 'power4.inOut' });
    gsap.to(navbarBackgroundPath, { attr: { fill: 'url(#paint1_linear_3240_2372)' }, duration: 0.5, ease: 'power4.inOut' });
  });

  menuText.addEventListener('mouseleave', function() {
    console.log('Menu text mouseleave');
    gsap.to(arrowIcon, { opacity: 0.5, duration: 0.3, ease: 'power4.inOut' });
    gsap.to(bigCircle, { opacity: 0.5, duration: 0.3, ease: 'power4.inOut' });
    gsap.to(menuText, { opacity: 0.5, duration: 0.3, ease: 'power4.inOut' });
    gsap.to(navbarBackgroundPath, { attr: { fill: 'url(#paint0_linear_3227_209)' }, duration: 0.3, ease: 'power4.inOut' });
  });

  // Back button hover effect
  backButton.addEventListener('mouseenter', function() {
    console.log('Back button mouseenter');
    gsap.to(bigCircle, { scale: 1.2, fill: '#6BE688', opacity: 1.0, duration: 0.5, ease: 'power4.inOut' });
    gsap.to(smallCircle, { scale: 0.8, opacity: 1.0, duration: 0.5, ease: 'power4.inOut' });
    gsap.to(arrowIcon.querySelector('path'), { strokeWidth: 2, duration: 0.5, ease: 'power4.inOut' });
    gsap.to(navbarBackgroundPath, { attr: { fill: 'url(#paint1_linear_3240_2418)' }, duration: 0.5, ease: 'power4.inOut' });
  });

  backButton.addEventListener('mouseleave', function() {
    console.log('Back button mouseleave');
    gsap.to(bigCircle, { scale: 1.0, fill: 'none', opacity: 0.5, duration: 0.3, ease: 'power4.inOut' });
    gsap.to(smallCircle, { scale: 1.0, opacity: 0.5, duration: 0.3, ease: 'power4.inOut' });
    gsap.to(arrowIcon.querySelector('path'), { strokeWidth: 1, duration: 0.3, ease: 'power4.inOut' });
    gsap.to(navbarBackgroundPath, { attr: { fill: 'url(#paint0_linear_3227_209)' }, duration: 0.3, ease: 'power4.inOut' });
  });
});
