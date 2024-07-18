document.addEventListener('DOMContentLoaded', function() {
  const techParagraphs = document.querySelectorAll('.paragraph.is-terminal.is-tech');
  const terminalIcon = document.querySelectorAll('.terminal-icon');
  const techBorderDiv = document.querySelectorAll('.tech_border-div');
  const techHeaders = document.querySelectorAll('.h-h5.is-tech');
  const quakeshiftHeading = document.querySelector('.h-h6.is-tech.is-active.is-quakeshift');
  const quakeshiftNumber = document.querySelector('.s-s4.is-tech.is-quakeshift'); // Assuming this is the correct class
  const quakeshiftParagraph = document.querySelector('.paragraph.p-p2.is-tech.is-quakeshift');
  const thermofluxHeading = document.querySelector('.h-h6.is-tech.is-active.is-thermoflux');
  const thermofluxNumber = document.querySelector('.s-s4.is-tech.is-thermoflux'); // Assuming this is the correct class
  const thermofluxParagraph = document.querySelector('.paragraph.p-p2.is-tech.is-thermoflux');
  const flexiweaveHeading = document.querySelector('.h-h6.is-tech.is-active.is-flexiweave');
  const flexiweaveNumber = document.querySelector('.s-s4.is-tech.is-flexiweave'); // Assuming this is the correct class
  const flexiweaveParagraph = document.querySelector('.paragraph.p-p2.is-tech.is-flexiweave');
  const counterFirstDigit = document.querySelector('.tech_counter-digit-wrap.is-first-digit');
  const counterSecondDigit = document.querySelector('.tech_counter-digit-wrap.is-second-digit');
  const quakeshiftImage = document.querySelector('.img.is-tech-image.is-quakeshift');
  const thermofluxImage = document.querySelector('.img.is-tech-image.is-thermoflux');
  const flexiweaveImage = document.querySelector('.img.is-tech-image.is-flexiweave');

  // Initial positions for intro animation
  // gsap.set(terminalIcon, {
  //   autoAlpha: 0,
  //   opacity: 0,
  //   rotate: '0deg',
  //   x: '-300%',
  // });
  // gsap.set(techParagraphs, { autoAlpha: 0, y: '100%' });
  // gsap.set(techBorderDiv, { autoAlpha: 0, scale: 1.1, opacity: 0 });
  // gsap.set(techHeaders, { autoAlpha: 0, y: '100%' });
  // gsap.set(quakeshiftHeading, { autoAlpha: 0, y: '100%' });
  // gsap.set(quakeshiftNumber, { autoAlpha: 0, x: '-100%' });
  // gsap.set(quakeshiftParagraph, { autoAlpha: 0, y: '100%' }); 
  // gsap.set(thermofluxHeading, { autoAlpha: 0, y: '100%' });
  // gsap.set(thermofluxNumber, { autoAlpha: 0, x: '-100%' });
  // gsap.set(flexiweaveHeading, { autoAlpha: 0, y: '100%' });
  // gsap.set(flexiweaveNumber, { autoAlpha: 0, x: '-100%' });
  // gsap.set(counterFirstDigit, { autoAlpha: 0, y: '100%' });
  // gsap.set(counterSecondDigit, { autoAlpha: 0, y: '100%' });
  
  const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

  // Animate terminal icons
  tl.to(terminalIcon, {
    autoAlpha: 1, 
    opacity: 0.5,
    rotate: '45deg',
    x: '0%', // Moving from -300% on the x-axis
    duration: 0.5
  })
  .to(techParagraphs, {
    autoAlpha: 1,
    y: '0%', // Starts the animation from 100% below their original position
    stagger: 0.2, // Stagger of 0.2 seconds between the start of each element's animation
    duration: 0.5,
  }, "-=0.5") // Start immediately after terminalIcons with no delay
  .to(techBorderDiv, {
    autoAlpha: 1,
    opacity: 1,
    scale: 1.0,
    duration: 0.5
  }, "-=0.5") // Overlap with the end of techParagraphs animation
  .to(techHeaders, {
    autoAlpha: 1,
    y: '0%',
    stagger: 0.2,
    duration: 0.5
  }, "-=0.5") // Starts simultaneously with techBorderDivs
  .to(quakeshiftHeading, {
    autoAlpha: 1,
    y: '0%',
    duration: 0.5
  })
  .to(quakeshiftNumber, {
    autoAlpha: 1,
    x: '0%',
    duration: 0.5
  }, "<")
  .to(quakeshiftParagraph, {
    autoAlpha: 1,
    y: '0%',
    duration: 0.5
  }, "<")
  .to(thermofluxHeading, {
    autoAlpha: 1,
    y: '0%',
    duration: 0.5
  }, ">")
  .to(thermofluxNumber, {
    autoAlpha: 1,
    x: '0%',
    duration: 0.5
  }, "<")
  .to(flexiweaveHeading, {
    autoAlpha: 1,
    y: '0%',
    duration: 0.5
  }, ">")
  .to(flexiweaveNumber, {
    autoAlpha: 1,
    x: '0%',
    duration: 0.5
  }, "<")
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
  }, "<");
});
