document.addEventListener('DOMContentLoaded', function() {
  const navbarWrap = document.querySelector('.global-navbar_navbar-wrap');
  const arrowIcon = document.querySelector('.navbar-back_arrow-icon');
  const bigCircle = document.querySelector('.navbar-back_big-circle');
  const smallCircle = document.querySelector('.navbar-back_small-circle');
  const menuText = document.querySelector('.s-s5.is-navbar.is-menu');
  const navbarBackgroundPath = document.querySelector('.global-navbar_background svg path:nth-child(3)');
  const backButton = document.querySelector('.global-navbar_back-button');

  // Function to handle navbar wrap hover effects
  function handleNavbarWrapHover(enter) {
    const opacity = enter ? 1.0 : 0.5;
    const strokeGradient = enter ? 'url(#paint1_linear_3240_2372)' : 'url(#paint0_linear_3227_209)';

    gsap.to(arrowIcon, { opacity, duration: 0.3 });
    gsap.to(bigCircle, { opacity, duration: 0.3 });
    gsap.to(menuText, { opacity, duration: 0.3 });
    gsap.to(navbarBackgroundPath, { attr: { fill: strokeGradient }, duration: 0.3 });
  }

  // Function to handle back button hover effects
  function handleBackButtonHover(enter) {
    const bigCircleScale = enter ? 1.2 : 1.0;
    const bigCircleFill = enter ? '#6BE688' : 'none';
    const bigCircleOpacity = enter ? 1.0 : 0.5;
    const smallCircleScale = enter ? 0.8 : 1.0;
    const smallCircleOpacity = enter ? 1.0 : 0.5;
    const arrowStrokeWidth = enter ? 2 : 1;
    const strokeGradient = enter ? 'url(#paint1_linear_3240_2418)' : 'url(#paint0_linear_3227_209)';

    gsap.to(bigCircle, { scale: bigCircleScale, fill: bigCircleFill, opacity: bigCircleOpacity, duration: 0.3 });
    gsap.to(smallCircle, { scale: smallCircleScale, opacity: smallCircleOpacity, duration: 0.3 });
    gsap.to(arrowIcon.querySelector('path'), { strokeWidth: arrowStrokeWidth, duration: 0.3 });
    gsap.to(navbarBackgroundPath, { attr: { fill: strokeGradient }, duration: 0.3 });
  }

  // Event listeners for navbar wrap hover
  navbarWrap.addEventListener('mouseenter', function() {
    handleNavbarWrapHover(true);
  });

  navbarWrap.addEventListener('mouseleave', function() {
    handleNavbarWrapHover(false);
  });

  // Event listeners for back button hover
  backButton.addEventListener('mouseenter', function() {
    handleBackButtonHover(true);
  });

  backButton.addEventListener('mouseleave', function() {
    handleBackButtonHover(false);
  });
});
