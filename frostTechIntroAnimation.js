document.addEventListener('DOMContentLoaded', function() {
  const techParagraphs = document.querySelectorAll('.paragraph.is-terminal.is-tech');
  const terminalIcons = document.querySelectorAll('.terminal-icon');
  const techBorderDivs = document.querySelectorAll('.tech_border-div');
  const techHeaders = document.querySelectorAll('.h-h5.is-tech');
  const quakeshiftHeading = document.querySelector('.h-h6.is-tech.is-active.is-quakeshift')
  const quakeshiftNumber = document.querySelector('.h-h4.is-tech.is-quakeshift')
  const quakeshiftParagraph = document.querySelector('.paragraph.p-p2.is-tech.is-quakeshift')
  const thermofluxHeading = document.querySelector('.h-h6.is-tech.is-active.is-thermoflux')
  const thermofluxNumber = document.querySelector('.h-h4.is-tech.is-thermoflux')
  const thermofluxParagraph = document.querySelector('.paragraph.p-p2.is-tech.is-thermoflux')
  const flexiweaveHeading = document.querySelector('.h-h6.is-tech.is-active.is-flexiweave')
  const flexiweaveNumber = document.querySelector('.h-h4.is-tech.is-flexiweave')
  const flexiweaveParagraph = document.querySelector('.paragraph.p-p2.is-tech.is-flexiweave')
  const counterFirstDigit = document.querySelector('.tech_counter-digit-wrap.is-first-digit')
  const counterSecondDigit = document.querySelector('.tech_counter-digit-wrap.is-second-digit')

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
  }, "+=0") // Starts right after the techParagraphs animations complete
  .from(techHeaders[0], {
    y: '100%',
    duration: 0.5
  }, "+=0.2") // Starts 0.2 seconds after the techBorderDivs animation begins
  .from(techHeaders[1], {
    y: '100%',
    duration: 0.5
  }, "+=0.2"); // Starts 0.2 seconds after the first header animation
  .from(quakeshiftHeading, {
    y: '100%',
    duration: 0.5
  }, ">")
  .from(quakeshiftNumber, {
    x: '-100%',
    duration: 0.5
  }, "<")
  .from(quakeshiftNumber, {
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
  .from(counterFirstDigit, {
    y: '100%',
    duration: 0.5
  })
  .from(counterSecondDigit, {
    y: '100%',
    duration: 0.5
  })
});