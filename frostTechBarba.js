function initializeFrostTech() {
  console.log('Initializing Frost Tech...');

  // Kill any existing GSAP animations
  gsap.killTweensOf("*");

  // Function to safely query elements
  function safeQuerySelector(selector) {
    const element = document.querySelector(selector);
    if (!element) {
      console.warn(`Element not found: ${selector}`);
    }
    return element;
  }

  // Query elements
  const techParagraphs = document.querySelectorAll('.paragraph.is-terminal.is-tech');
  const terminalIcons = document.querySelectorAll('.terminal-icon');
  const techBorderDivs = document.querySelectorAll('.tech_border-div');
  const techHeaders = document.querySelectorAll('.h-h5.is-tech');
  
  const quakeshiftHeading = safeQuerySelector('.h-h6.is-tech.is-active.is-quakeshift');
  const quakeshiftNumber = safeQuerySelector('.s-s4.is-tech.is-quakeshift');
  const quakeshiftParagraph = safeQuerySelector('.paragraph.p-p2.is-tech.is-quakeshift');
  const thermofluxHeading = safeQuerySelector('.h-h6.is-tech.is-active.is-thermoflux');
  const thermofluxNumber = safeQuerySelector('.s-s4.is-tech.is-thermoflux');
  const flexiweaveHeading = safeQuerySelector('.h-h6.is-tech.is-active.is-flexiweave');
  const flexiweaveNumber = safeQuerySelector('.s-s4.is-tech.is-flexiweave');
  const counterFirstDigit = safeQuerySelector('.h-h3.is-tech-counter.is-first-digit');
  const counterSecondDigit = safeQuerySelector('.h-h3.is-tech-counter.is-second-digit.is-quakeshift');
  const quakeshiftImageWrap = safeQuerySelector('.tech_image-wrap.is-quakeshift');
  const quakeshiftImage = safeQuerySelector('.img.is-tech-image.is-quakeshift');
  const quakeshiftDescriptionContainer = safeQuerySelector('.tech_description-container.is-quakeshift');

  // Check if critical elements are present
  if (!techParagraphs.length || !terminalIcons.length || !techBorderDivs.length || !techHeaders.length) {
    console.error('Critical elements not found. Aborting initialization.');
    return;
  }

  const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

  // Reset elements before animation
  gsap.set([techParagraphs, terminalIcons, techBorderDivs, techHeaders, quakeshiftHeading, quakeshiftNumber, quakeshiftParagraph], 
    { opacity: 0, visibility: 'hidden', y: '100%' });

  // Animation sequence
  tl.to(terminalIcons, {
    autoAlpha: 1,
    opacity: 0.5,
    rotate: '45deg',
    x: '0%',
    duration: 0.5
  })
  .to(techParagraphs, {
    autoAlpha: 1,
    y: '0%',
    stagger: 0.2,
    duration: 0.5,
  }, "-=0.5")
  .to(techBorderDivs, {
    autoAlpha: 1,
    opacity: 1,
    scale: 1.0,
    duration: 0.5
  }, "-=0.5")
  .to(techHeaders, {
    autoAlpha: 1,
    y: '0%',
    stagger: 0.2,
    duration: 0.5
  }, "-=0.5")
  .to([quakeshiftHeading, quakeshiftNumber, quakeshiftParagraph], {
    autoAlpha: 1,
    y: '0%',
    duration: 0.5
  })
  .add('quakeshiftActive')
  .to([thermofluxHeading, thermofluxNumber, flexiweaveHeading, flexiweaveNumber], {
    autoAlpha: 1,
    y: '0%',
    stagger: 0.2,
    duration: 0.5
  })
  .to([counterFirstDigit, counterSecondDigit], {
    autoAlpha: 1,
    y: '0%',
    stagger: 0.2,
    duration: 0.5
  })
  .to(quakeshiftImage, {
    autoAlpha: 1,
    scale: 1,
    opacity: 1,
    duration: 1,
    onStart: () => {
      if (quakeshiftImage) quakeshiftImage.classList.add('is-active');
      if (quakeshiftImageWrap) quakeshiftImageWrap.classList.add('is-active');
      if (quakeshiftDescriptionContainer) quakeshiftDescriptionContainer.classList.add('is-active');
    }
  }, ">-0.5");

  // Set quakeshift as active after intro animations
  tl.add(() => {
    const quakeshiftTerminal = document.querySelector('.global-terminal.is-tech.is-quakeshift');
    if (quakeshiftTerminal) quakeshiftTerminal.classList.add('is-active');
  }, 'quakeshiftActive');

  console.log('Frost Tech initialized');
}

// Cleanup function
function cleanupFrostTech() {
  gsap.killTweensOf("*");
  // Remove any event listeners or clean up any other resources here
}

// Ensure the functions are globally accessible
window.initializeFrostTech = initializeFrostTech;
window.cleanupFrostTech = cleanupFrostTech;
