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
    gsap.to(navbarBackgroundPath, { attr: { 'fill-opacity': 0.5 }, duration: 0.5, ease: 'power4.inOut' });
  });

  menuText.addEventListener('mouseleave', function() {
    console.log('Menu text mouseleave');
    gsap.to(arrowIcon, { opacity: 0.5, duration: 0.3, ease: 'power4.inOut' });
    gsap.to(bigCircle, { opacity: 0.5, duration: 0.3, ease: 'power4.inOut' });
    gsap.to(menuText, { opacity: 0.5, duration: 0.3, ease: 'power4.inOut' });
    gsap.to(navbarBackgroundPath, { attr: { 'fill-opacity': 0.1 }, duration: 0.3, ease: 'power4.inOut' });
  });

  // Back button hover effect
  backButton.addEventListener('mouseenter', function() {
    console.log('Back button mouseenter');
    gsap.to(bigCircle, { scale: 1.2, opacity: 1.0, duration: 0.5, ease: 'power4.inOut', fill: '#6BE688' });
    gsap.to(smallCircle, { scale: 0.8, opacity: 1.0, duration: 0.5, ease: 'power4.inOut' });
    gsap.to(arrowIcon, { strokeWidth: 2, duration: 0.5, ease: 'power4.inOut' });
    gsap.to(navbarBackgroundPath, { attr: { 'fill-opacity': 1.0 }, duration: 0.5, ease: 'power4.inOut' });
  });

  backButton.addEventListener('mouseleave', function() {
    console.log('Back button mouseleave');
    gsap.to(bigCircle, { scale: 1, opacity: 0.5, duration: 0.3, ease: 'power4.inOut', fill: '#A1FCCF' });
    gsap.to(smallCircle, { scale: 1, opacity: 0.5, duration: 0.3, ease: 'power4.inOut' });
    gsap.to(arrowIcon, { strokeWidth: 1, duration: 0.3, ease: 'power4.inOut' });
    gsap.to(navbarBackgroundPath, { attr: { 'fill-opacity': 0.1 }, duration: 0.3, ease: 'power4.inOut' });
  });

  // Text animation on hover
  const textContainers = document.querySelectorAll('.global-navbar_text-container');

  textContainers.forEach(container => {
    const originalText = container.querySelector('.is-original-text');
    const animatedText = container.querySelector('.is-animated-text');

    const originalSplit = new SplitText(originalText, { type: "chars" });
    const animatedSplit = new SplitText(animatedText, { type: "chars" });

    container.addEventListener('mouseenter', () => {
      gsap.timeline()
        .to(originalSplit.chars, {
          y: "-100%",
          stagger: 0.1,
          duration: 0.6,
          ease: "power4.inOut"
        })
        .to(animatedSplit.chars, {
          y: "0%",
          stagger: 0.1,
          duration: 0.6,
          ease: "power4.inOut"
        }, 0);
    });

    container.addEventListener('mouseleave', () => {
      gsap.timeline()
        .to(animatedSplit.chars, {
          y: "100%",
          stagger: 0.1,
          duration: 0.6,
          ease: "power4.inOut"
        })
        .to(originalSplit.chars, {
          y: "0%",
          stagger: 0.1,
          duration: 0.6,
          ease: "power4.inOut"
        }, 0);
    });
  });
});
