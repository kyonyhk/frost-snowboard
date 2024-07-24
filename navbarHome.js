document.addEventListener('DOMContentLoaded', function() {
  gsap.registerPlugin(MorphSVGPlugin)
  
  const menuText = document.querySelector('.s-s5.is-navbar.is-menu');
  const arrowIcon = document.querySelector('.navbar-back_arrow-icon');
  const bigCircle = document.querySelector('.navbar-back_big-circle');
  const smallCircle = document.querySelector('.navbar-back_small-circle');
  const navbarBackgroundPath = document.querySelector('.global-navbar_background svg path:nth-child(3)');
  const backButton = document.querySelector('.global-navbar_back-button');
  const textContainers = document.querySelectorAll('.global-navbar_text-container');
  const navbarContainer = document.querySelector('.global-navbar_navbar-container');

  console.log('Elements:', { menuText, arrowIcon, bigCircle, smallCircle, navbarBackgroundPath, backButton, textContainers });

  // Text container hover effect
  textContainers.forEach(container => {
    container.addEventListener('mouseenter', function() {
      console.log('Text container mouseenter');
      gsap.to(arrowIcon, { opacity: 1.0, duration: 0.5, ease: 'power4.inOut' });
      gsap.to(bigCircle, { opacity: 1.0, duration: 0.5, ease: 'power4.inOut' });
      gsap.to(container.querySelector('.is-original-text'), { opacity: 1.0, duration: 0.5, ease: 'power4.inOut' });
      gsap.to(navbarBackgroundPath, { attr: { 'fill-opacity': 0.3 }, duration: 0.5, ease: 'power4.inOut' });
    });

    container.addEventListener('mouseleave', function() {
      console.log('Text container mouseleave');
      gsap.to(arrowIcon, { opacity: 0.5, duration: 0.3, ease: 'power4.inOut' });
      gsap.to(bigCircle, { opacity: 0.5, duration: 0.3, ease: 'power4.inOut' });
      gsap.to(container.querySelector('.is-original-text'), { opacity: 0.5, duration: 0.3, ease: 'power4.inOut' });
      gsap.to(navbarBackgroundPath, { attr: { 'fill-opacity': 0.1 }, duration: 0.3, ease: 'power4.inOut' });
    });
  });

  // Back button hover effect
  backButton.addEventListener('mouseenter', function() {
    console.log('Back button mouseenter');
    gsap.to(bigCircle, { scale: 1.2, opacity: 1.0, duration: 0.5, ease: 'power4.inOut', fill: '#6BE688' });
    gsap.to(smallCircle, { scale: 0.8, opacity: 1.0, duration: 0.5, ease: 'power4.inOut' });
    gsap.to(arrowIcon, { strokeWidth: 2, opacity: 1.0, duration: 0.5, ease: 'power4.inOut' });
    gsap.to(navbarBackgroundPath, { attr: { 'fill-opacity': 0.5 }, duration: 0.5, ease: 'power4.inOut' });
  });

  backButton.addEventListener('mouseleave', function() {
    console.log('Back button mouseleave');
    gsap.to(bigCircle, { scale: 1, opacity: 0.5, duration: 0.3, ease: 'power4.inOut', fill: '#A1FCCF' });
    gsap.to(smallCircle, { scale: 1, opacity: 0.5, duration: 0.3, ease: 'power4.inOut' });
    gsap.to(arrowIcon, { strokeWidth: 1, opacity: 0.5, duration: 0.3, ease: 'power4.inOut' });
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
          y: '00%',
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

  // Menu click to expand navbar
  menuText.addEventListener('click', function() {
    console.log('Menu text click');
    const originalText = menuText.querySelector('.is-original-text');
    const originalSplit = new SplitType(originalText, { types: 'chars' });

    // Step 1: Menu text exit animation
    gsap.timeline()
      .to(originalSplit.chars, {
        y: '-100%',
        stagger: 0.1,
        duration: 0.6,
        ease: 'power4.inOut'
      });

    // Step 2: SVG background shape change
    gsap.to(navbarBackgroundPath, {
      morphSVG: {
        shape: "M69.9964 64C68.0752 64 67.1621 61.4271 68.5098 60.0579C75.6163 52.8379 80.0009 42.931 80.0009 32C80.0009 21.069 75.6163 11.1621 68.5098 3.94211C67.1621 2.57292 68.0752 0 69.9964 0H608C625.673 0 640 14.3269 640 32C640 49.6731 625.673 64 608 64H69.9964ZM0.00460815 31.4512C0.00154114 31.6338 0 31.8167 0 32C0 32.1833 0.00154114 32.3662 0.00460815 32.5488C0.00215149 32.3661 0.000923157 32.1832 0.000923157 32C0.000923157 31.8168 0.00215149 31.6339 0.00460815 31.4512Z",
      },
      duration: 1,
      ease: 'power4.inOut'
    });

    // Step 3: Back button movement
    gsap.to(backButton, {
      x: 50,
      duration: 1,
      ease: 'power4.inOut'
    });

    // Step 4: Show and animate in other texts
    gsap.set(navbarContainer, { display: 'block' });
    textContainers.forEach(container => {
      const originalText = container.querySelector('.is-original-text');
      const animatedText = container.querySelector('.is-animated-text');

      const originalSplit = new SplitType(originalText, { types: 'chars' });
      const animatedSplit = new SplitType(animatedText, { types: 'chars' });

      gsap.set(originalSplit.chars, { y: '0%' });

      gsap.timeline()
        .to(originalSplit.chars, {
          y: '-100%',
          stagger: 0.1,
          duration: 0.6,
          ease: 'power4.inOut'
        });
    });
  });
});
