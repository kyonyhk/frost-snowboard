function initializeFrostTech() {
  const techParagraphs = document.querySelectorAll('.paragraph.is-terminal.is-tech');
  const terminalIcons = document.querySelectorAll('.terminal-icon');
  const techBorderDivs = document.querySelectorAll('.tech_border-div');
  const techHeaders = document.querySelectorAll('.h-h5.is-tech');
  const quakeshiftHeading = document.querySelector('.h-h6.is-tech.is-active.is-quakeshift');
  const quakeshiftNumber = document.querySelector('.s-s4.is-tech.is-quakeshift');
  const quakeshiftParagraph = document.querySelector('.paragraph.p-p2.is-tech.is-quakeshift');
  const thermofluxHeading = document.querySelector('.h-h6.is-tech.is-active.is-thermoflux');
  const thermofluxNumber = document.querySelector('.s-s4.is-tech.is-thermoflux');
  const thermofluxParagraph = document.querySelector('.paragraph.p-p2.is-tech.is-thermoflux');
  const flexiweaveHeading = document.querySelector('.h-h6.is-tech.is-active.is-flexiweave');
  const flexiweaveNumber = document.querySelector('.s-s4.is-tech.is-flexiweave');
  const flexiweaveParagraph = document.querySelector('.paragraph.p-p2.is-tech.is-flexiweave');
  const counterFirstDigit = document.querySelector('.h-h3.is-tech-counter.is-first-digit');
  const counterSecondDigit = document.querySelector('.h-h3.is-tech-counter.is-second-digit.is-quakeshift');
  const quakeshiftImageWrap = document.querySelector('.tech_image-wrap.is-quakeshift');
  const quakeshiftImage = document.querySelector('.img.is-tech-image.is-quakeshift');
  const thermofluxImage = document.querySelector('.img.is-tech-image.is-thermoflux');
  const flexiweaveImage = document.querySelector('.img.is-tech-image.is-flexiweave');
  const quakeshiftDescriptionContainer = document.querySelector('.tech_description-container.is-quakeshift')
  
  // Check if the elements are correctly selected
  console.log(counterFirstDigit, counterSecondDigit);
  
  const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
  
  // Ensure elements are hidden before starting the animation
  gsap.set([techParagraphs, terminalIcons, techBorderDivs, techHeaders, quakeshiftHeading, quakeshiftNumber, quakeshiftParagraph], { opacity: 0, visibility: 'hidden' });
  
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
  .add('quakeshiftActive') // Correct method to add a label
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
  }, ">-0.3")
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
    onStart: () => {
      quakeshiftImage.classList.add('is-active');
      quakeshiftImageWrap.classList.add('is-active');
      quakeshiftDescriptionContainer.classList.add('is-active');
    }
  }, ">-0.5");
  
  // Set quakeshift as active after intro animations
  tl.add(() => {
    document.querySelector('.global-terminal.is-tech.is-quakeshift').classList.add('is-active');
  }, 'quakeshiftActive');  
}
