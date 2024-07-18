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

  // Initial positions for intro animation
  gsap.set(terminalIcon, {
    opacity: 0,
    rotate: '0deg',
    x: '-300%',
  });
  gsap.set(techParagraphs, { y: '100%' });
  gsap.set(techBorderDiv, { scale: 1.1, opacity: 0 });
  gsap.set(techHeader, { y: '100%' });
  gsap.set(quakeshiftHeading, { y: '100%' });
  gsap.set(quakeshiftNumber, { x: '-100%' });
  gsap.set(quakeshiftParagraph, { y: '100%' }); 
  gsap.set(thermofluxHeading, { y: '100%' });
  gsap.set(thermofluxNumber, { x: '-100%' });
  gsap.set(flexiweaveHeading, { y: '100%' });
  gsap.set(counterFirstDigit, { y: '100%' });
  gsap.set(counterSecondDigit, { y: '100%' });
  
  const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

  // Animate terminal icons
  tl.from(terminalIcon, {
    opacity: 0,
    rotate: '0deg',
    x: '-300%', // Moving from -300% on the x-axis
    duration: 0.5
  })
  .from(techParagraphs, {
    y: '100%', // Starts the animation from 100% below their original position
    autoAlpha: 0,
    stagger: 0.2, // Stagger of 0.2 seconds between the start of each element's animation
    duration: 0.5,
  }, "-=0.5") // Start immediately after terminalIcons with no delay
  .from(techBorderDiv, {
    opacity: 0,
    scale: 1.1,
    duration: 0.5
  }, "-=0.5") // Overlap with the end of techParagraphs animation
  .from(techHeaders, {
    y: '100%',
    stagger: 0.2,
    duration: 0.5
  }, "-=0.5") // Starts simultaneously with techBorderDivs
  .from(quakeshiftHeading, {
    y: '100%',
    duration: 0.5
  })
  .from(quakeshiftNumber, {
    x: '-100%',
    duration: 0.5
  }, "<")
  .from(quakeshiftParagraph, {
    y: '100%',
    duration: 0.5
  }, "<")
  .from(thermofluxHeading, {
    y: '100%',
    duration: 0.5
  }, ">")
  .from(thermofluxNumber, {
    x: '-100%',
    duration: 0.5
  }, "<")
  .from(flexiweaveHeading, {
    y: '100%',
    duration: 0.5
  }, ">")
  .from(flexiweaveNumber, {
    x: '-100%',
    duration: 0.5
  }, "<")
  .from([counterFirstDigit, counterSecondDigit], {
    y: '100%',
    stagger: 0.2,
    duration: 0.5
  });
});
