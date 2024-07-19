function setTheme(theme) {
  const root = document.documentElement;

  if (theme === 'quakeshift') {
    root.style.setProperty('--primary-color', '#6BE688');
    root.style.setProperty('--secondary-color', '#A1FCCF');
  } else if (theme === 'thermoflux') {
    root.style.setProperty('--primary-color', '#D97848');
    root.style.setProperty('--secondary-color', '#FDFDCE');
  } else if (theme === 'flexiweave') {
    root.style.setProperty('--primary-color', '#580DEB');
    root.style.setProperty('--secondary-color', '#877FCB');
  }

  // Update specific elements
  const techParagraphs = document.querySelectorAll('.paragraph.is-terminal.is-tech');
  const terminalIcons = document.querySelectorAll('.terminal-icon');
  const techBorderDivs = document.querySelectorAll('.tech_border-div');

  techParagraphs.forEach(paragraph => {
    const opacity = getComputedStyle(paragraph).opacity;
    paragraph.style.color = `rgba(var(--primary-color), ${opacity})`;
  });

  terminalIcons.forEach(icon => {
    const opacity = getComputedStyle(icon).opacity;
    icon.style.backgroundColor = `rgba(var(--primary-color), ${opacity})`;
  });

  techBorderDivs.forEach(border => {
    const opacity = getComputedStyle(border).opacity;
    border.style.borderColor = `rgba(var(--primary-color), ${opacity})`;
  });
}

document.addEventListener('DOMContentLoaded', function() {
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
  const counterFirstDigit = document.querySelector('.tech_counter-digit-wrap.is-first-digit');
  const counterSecondDigit = document.querySelector('.tech_counter-digit-wrap.is-second-digit');
  const quakeshiftImageWrap = document.querySelector('.tech_image-wrap.is-quakeshift');
  const quakeshiftImage = document.querySelector('.img.is-tech-image.is-quakeshift');
  const thermofluxImage = document.querySelector('.img.is-tech-image.is-thermoflux');
  const flexiweaveImage = document.querySelector('.img.is-tech-image.is-flexiweave');

  const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

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
    }
  }, ">-0.5");

  // Set quakeshift as active after intro animations
  tl.add(() => {
    document.querySelector('.global-terminal.is-tech.is-quakeshift').classList.add('is-active');
    setTheme('quakeshift'); // Set initial theme
  }, 'quakeshiftActive');

  // Add event listeners for switching themes
  document.querySelector('.tech_description-container.is-quakeshift').addEventListener('click', () => setTheme('quakeshift'));
  document.querySelector('.tech_description-container.is-thermoflux').addEventListener('click', () => setTheme('thermoflux'));
  document.querySelector('.tech_description-container.is-flexiweave').addEventListener('click', () => setTheme('flexiweave'));
});
