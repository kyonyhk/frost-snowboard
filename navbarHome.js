document.addEventListener('DOMContentLoaded', function() {
  const arrowIcon = document.querySelector('.navbar-back_arrow-icon');
  const bigCircle = document.querySelector('.navbar-back_big-circle');
  const smallCircle = document.querySelector('.navbar-back_small-circle');
  const navbarBackgroundPath = document.querySelector('.global-navbar_background svg path:nth-child(3)');
  const backButton = document.querySelector('.global-navbar_back-button');
  const textContainers = document.querySelectorAll('.global-navbar_text-container');

  console.log('Elements:', { arrowIcon, bigCircle, smallCircle, navbarBackgroundPath, backButton, textContainers });

  // Text container hover effect
  textContainers.forEach(container => {
    container.addEventListener('mouseenter', function() {
      console.log('Text container mouseenter');
      gsap.to(arrowIcon, { opacity: 1.0, duration: 0.5, ease: 'power4.inOut' });
      gsap.to(bigCircle, { opacity: 1.0, duration: 0.5, ease: 'power4.inOut' });
      gsap.to(container, { opacity: 1.0, duration: 0.5, ease: 'power4.inOut' });
      gsap.to(navbarBackgroundPath, { attr: { 'fill-opacity': 0.3 }, duration: 0.5, ease: 'power4.inOut' });
    });

    container.addEventListener('mouseleave', function() {
      console.log('Text container mouseleave');
      gsap.to(arrowIcon, { opacity: 0.5, duration: 0.3, ease: 'power4.inOut' });
      gsap.to(bigCircle, { opacity: 0.5, duration: 0.3, ease: 'power4.inOut' });
      gsap.to(container, { opacity: 0.5, duration: 0.3, ease: 'power4.inOut' });
      gsap.to(navbarBackgroundPath, { attr: { 'fill-opacity': 0.1 }, duration: 0.3, ease: 'power4.inOut' });
    });
  });

  // Back button hover effect
  backButton.addEventListener('mouseenter', function() {
    console.log('Back button mouseenter');
    gsap.to(bigCircle, { scale: 1.2, opacity: 1.0, duration: 0.5, ease: 'power4.inOut', fill: '#6BE688' });
    gsap.to(smallCircle, { scale: 0.8, opacity: 1.0, duration: 0.5, ease: 'power4.inOut' });
    gsap.to(arrowIcon, { strokeWidth: 2, duration: 0.5, ease: 'power4.inOut' });
    gsap.to(navbarBackgroundPath, { attr: { 'fill-opacity': 0.5 }, duration: 0.5, ease: 'power4.inOut' });
  });

  backButton.addEventListener('mouseleave', function() {
    console.log('Back button mouseleave');
    gsap.to(bigCircle, { scale: 1, opacity: 0.5, duration: 0.3, ease: 'power4.inOut', fill: '#A1FCCF' });
    gsap.to(smallCircle, { scale: 1, opacity: 0.5, duration: 0.3, ease: 'power4.inOut' });
    gsap.to(arrowIcon, { strokeWidth: 1, duration: 0.3, ease: 'power4.inOut' });
    gsap.to(navbarBackgroundPath, { attr: { 'fill-opacity': 0.1 }, duration: 0.3, ease: 'power4.inOut' });
  });

  // Text animation on hover
  textContainers.forEach(container => {
    const originalText = container.querySelector('.is-original-text');
    const animatedText = container.querySelector('.is-animated-text');

    const originalSplit = new SplitType(originalText, { types: 'chars' });
    const animatedSplit = new SplitType(animatedText, { types: 'chars' });

    gsap.set(animatedSplit.chars, { y: '100%' });

    container.addEventListener('mouseenter', () => {
      gsap.timeline()
        .to(originalSplit.chars, {
          y: '-100%',
          stagger: 0.1,
          duration: 0.6,
          ease: 'power4.inOut'
        })
        .to(animatedSplit.chars, {
          y: '-100%',
          stagger: 0.1,
          duration: 0.6,
          ease: 'power4.inOut'
        }, 0);
    });

    container.addEventListener('mouseleave', () => {
      gsap.timeline()
        .to(animatedSplit.chars, {
          y: '0%',
          stagger: 0.1,
          duration: 0.6,
          ease: 'power4.inOut'
        })
        .to(originalSplit.chars, {
          y: '0%',
          stagger: 0.1,
          duration: 0.6,
          ease: 'power4.inOut'
        }, 0);
    });
  });
});
