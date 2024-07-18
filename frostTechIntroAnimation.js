document.addEventListener('DOMContentLoaded', function() {
  const techParagraphs = document.querySelectorAll('.paragraph.is-terminal.is-tech');
  const terminalIcons = document.querySelectorAll('.terminal-icon');
  const techBorderDivs = document.querySelectorAll('.tech_border-div');
  const techHeaders = document.querySelectorAll('.h-h5.is-tech');
  const quakeshiftHeading = document.querySelector('.h-h6.is-tech.is-active.is-quakeshift');
  const quakeshiftNumber = document.querySelector('.s-s4.is-tech.is-quakeshift'); // Corrected the selector to use class for h4 equivalent
  const quakeshiftParagraph = document.querySelector('.paragraph.p-p2.is-tech.is-quakeshift');
  const thermofluxHeading = document.querySelector('.h-h6.is-tech.is-active.is-thermoflux');
  const thermofluxNumber = document.querySelector('.s-s4.is-tech.is-thermoflux'); // Corrected the selector to use class for h4 equivalent
  const thermofluxParagraph = document.querySelector('.paragraph.p-p2.is-tech.is-thermoflux');
  const flexiweaveHeading = document.querySelector('.h-h6.is-tech.is-active.is-flexiweave');
  const flexiweaveNumber = document.querySelector('.s-s4.is-tech.is-flexiweave'); // Corrected the selector to use class for h4 equivalent
  const flexiweaveParagraph = document.querySelector('.paragraph.p-p2.is-tech.is-flexiweave');
  const counterFirstDigit = document.querySelector('.tech_counter-digit-wrap.is-first-digit');
  const counterSecondDigit = document.querySelector('.tech_counter-digit-wrap.is-second-digit');

  const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

  // Animate terminal icons
  tl.from(terminalIcons, {
    opacity: 0,
    rotate: '0deg',
    x: '-300%', // Moving from -300% on the x-axis
    duration: 0.5
  })
  .from(techParagraphs, {
    y: '100%', // Starts the animation from 100% below their original position
    stagger: 0.2, // Delay of 0.2 seconds between the start of each element's animation
    duration: 0.5,
  }, "+=0.1") // Adding a slight delay before starting the paragraphs animation
  .from(techBorderDivs, {
    opacity: 0,
    scale: 1.1,
    duration: 0.5
  }, "+=0.5") // Starts right after the techParagraphs animations complete
  .from(techHeaders, {
    y: '100%',
    stagger: 0.2,
    duration: 0.5
  }, "+=0.2") // Sequential delay between the headers animations
  .from(quakeshiftHeading, {
    y: '100%',
    duration: 0.5
  })
  .from(quakeshiftNumber, {
    x: '-100%',
    duration: 0.5
  }, "<") // Start animation at the same time as the previous
  .from(quakeshiftParagraph, {
    y: '100%',
    duration: 0.5
  }, "<") // Start animation at the same time as the previous
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
