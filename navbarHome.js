document.addEventListener('DOMContentLoaded', function () {
  gsap.registerPlugin(MorphSVGPlugin);

  const menuContainer = document.querySelector('.global-navbar_text-container.is-menu');
  const arrowIcon = document.querySelector('.navbar-back_arrow-icon');
  const bigCircle = document.querySelector('.navbar-back_big-circle');
  const smallCircle = document.querySelector('.navbar-back_small-circle');
  const backButton = document.querySelector('.global-navbar_back-button');
  const textContainers = document.querySelectorAll('.global-navbar_text-container');
  const navbarContainer = document.querySelector('.global-navbar_navbar-container');
  
  const fillSvgElement = document.querySelector('.global-navbar_background-fill svg');
  const fillGElement = fillSvgElement.querySelector('g');
  const defaultFillPath = document.getElementById('defaultFillPath');
  const expandedFillPath = document.getElementById('expandedFillPath');

  const strokeSvgElement = document.querySelector('.global-navbar_background-fill svg');
  const strokeGElement = fillSvgElement.querySelector('g');
  const defaultStrokePath = document.getElementById('defaultFillPath');
  const expandedStrokePath = document.getElementById('expandedFillPath');
  
  const strokePath = document.querySelector('.global-navbar_background-stroke svg path:nth-child(3)');

  console.log('Elements:', {
    menuContainer,
    arrowIcon,
    bigCircle,
    smallCircle,
    strokePath,
    backButton,
    textContainers,
    fillSvgElement,
    fillGElement,
    defaultFillPath,
    expandedFillPath,
    strokeSvgElement,
    strokeGElement,
    defaultStrokePath,
    expandedStrokePath,
    strokePath
  });

  // Ensure paths are correctly selected
  if (!defaultStrokePath || !expandedStrokePath) {
    console.error('SVG paths not found or incorrectly referenced.');
    return;
  }

  // Text container hover effect
  textContainers.forEach((container) => {
    container.addEventListener('mouseenter', function () {
      gsap.to(arrowIcon, { opacity: 1.0, duration: 0.5, ease: 'power4.inOut' });
      gsap.to(bigCircle, { opacity: 1.0, duration: 0.5, ease: 'power4.inOut' });
      gsap.to(container, { opacity: 1.0, duration: 0.5, ease: 'power4.inOut' });
      gsap.to(strokePath, { attr: { 'fill-opacity': 0.3 }, duration: 0.5, ease: 'power4.inOut' });
    });

    container.addEventListener('mouseleave', function () {
      gsap.to(arrowIcon, { opacity: 0.5, duration: 0.3, ease: 'power4.inOut' });
      gsap.to(bigCircle, { opacity: 0.5, duration: 0.3, ease: 'power4.inOut' });
      gsap.to(container, { opacity: 0.5, duration: 0.3, ease: 'power4.inOut' });
      gsap.to(strokePath, { attr: { 'fill-opacity': 0.1 }, duration: 0.3, ease: 'power4.inOut' });
    });
  });

  // Back button hover effect
  backButton.addEventListener('mouseenter', function () {
    gsap.to(bigCircle, { scale: 1.2, opacity: 1.0, duration: 0.5, ease: 'power4.inOut', fill: '#6BE688' });
    gsap.to(smallCircle, { scale: 0.8, opacity: 1.0, duration: 0.5, ease: 'power4.inOut' });
    gsap.to(arrowIcon, { strokeWidth: 2, opacity: 1.0, duration: 0.5, ease: 'power4.inOut' });
    gsap.to(strokePath, { attr: { 'fill-opacity': 0.5 }, duration: 0.5, ease: 'power4.inOut' });
  });

  backButton.addEventListener('mouseleave', function () {
    gsap.to(bigCircle, { scale: 1, opacity: 0.5, duration: 0.3, ease: 'power4.inOut', fill: '#A1FCCF' });
    gsap.to(smallCircle, { scale: 1, opacity: 0.5, duration: 0.3, ease: 'power4.inOut' });
    gsap.to(arrowIcon, { strokeWidth: 1, opacity: 0.5, duration: 0.3, ease: 'power4.inOut' });
    gsap.to(strokePath, { attr: { 'fill-opacity': 0.1 }, duration: 0.3, ease: 'power4.inOut' });
  });

  // Text animation on hover
  textContainers.forEach((container) => {
    const originalText = container.querySelector('.is-original-text');
    const animatedText = container.querySelector('.is-animated-text');

    const originalSplit = new SplitType(originalText, { types: 'chars' });
    const animatedSplit = new SplitType(animatedText, { types: 'chars' });

    gsap.set(animatedSplit.chars, { y: '100%' });

    container.addEventListener('mouseenter', () => {
      gsap.timeline()
        .to(originalSplit.chars, { y: '-100%', stagger: 0.1, duration: 0.6, ease: 'power4.inOut' })
        .to(animatedSplit.chars, { y: '-100%', stagger: 0.1, duration: 0.6, ease: 'power4.inOut' }, 0);
    });

    container.addEventListener('mouseleave', () => {
      gsap.timeline()
        .to(animatedSplit.chars, { y: '0%', stagger: 0.1, duration: 0.6, ease: 'power4.inOut' })
        .to(originalSplit.chars, { y: '0%', stagger: 0.1, duration: 0.6, ease: 'power4.inOut' }, 0);
    });
  });

  // Menu click to expand navbar
  // Initial setup
  gsap.set(expandedFillPath, { opacity: 0 });

  // Menu click to expand navbar
  menuContainer.addEventListener('click', function () {
    console.log('Menu text click');

    gsap.timeline()
      .to(defaultFillPath, {
        morphSVG: expandedFillPath,
        duration: 1,
        ease: 'power4.inOut',
        onStart: () => gsap.set(expandedFillPath, { opacity: 1 }), // Ensure expanded path becomes visible
        onComplete: () => gsap.set(defaultFillPath, { opacity: 0 }) // Hide default path after morphing
      })
      .to(fillSvgElement, {
        attr: { viewBox: "0 0 640 64" },
        duration: 1,
        ease: 'power4.inOut'
      }, 0)
      .to(fillSvgElement, {
        width: 640,
        duration: 1,
        ease: 'power4.inOut'
      }, 0)
      .to(fillGElement, {
        attr: { filter: 'url(#expandedBackgroundFilter)' },
        duration: 1,
        ease: 'power4.inOut'
      }, 0)
      .to(defaultStrokePath, {
        morphSVG: expandedStrokePath,
        duration: 1,
        ease: 'power4.inOut',
        onStart: () => gsap.set(expandedStrokePath, { opacity: 0.1 }),
        onComplete: () => gsap.set(defaultStrokePath, { opacity: 0 })
      }, 0)
      .to(strokeSvgElement, {
        attr: { viewBox: "0 0 640 64" },
        duration: 1,
        ease: 'power4.inOut'
      }, 0)
      .to(strokeSvgElement, {
        width: 640,
        duration: 1,
        ease: 'power4.inOut'
      }, 0);
  });
});
