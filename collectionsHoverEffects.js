document.addEventListener('DOMContentLoaded', () => {
  const apexElement = document.querySelector('.collections-main_heading.link.is-clickable.is-apex');
  const emberElement = document.querySelector('.collections-main_heading.link.is-clickable.is-ember');
  const nebulaElement = document.querySelector('.collections-main_heading.link.is-clickable.is-nebula');

  const defaultH2 = document.querySelector('.h-h2.is-collections-main.is-default');
  const defaultH5 = document.querySelector('.h-h5.is-collections-main.is-default');

  const apexH2 = document.querySelector('.h-h2.is-collections-main.is-default.is-one');
  const apexH5 = document.querySelector('.h-h5.is-collections-main.is-default.is-one');

  const emberH2 = document.querySelector('.h-h2.is-collections-main.is-default.is-two');
  const emberH5 = document.querySelector('.h-h5.is-collections-main.is-default.is-two');

  const nebulaH2 = document.querySelector('.h-h2.is-collections-main.is-default.is-three');
  const nebulaH5 = document.querySelector('.h-h5.is-collections-main.is-default.is-three');

  //Color variables
  const primaryGreen100 = 'rgba(107, 230, 136, 1.0)';
  const primaryGreen50 = 'rgba(107, 230, 136, 0.5)';
  const primaryGreen10 = 'rgba(107, 230, 136, 0.1)';

  const secondaryGreen100 = 'rgba(161, 252, 207, 1.0)';
  const secondaryGreen50 = 'rgba(161, 252, 207, 0.5)';
  const secondaryGreen10 = 'rgba(161, 252, 207, 0.1)';

  const primaryYellow100 = 'rgba(217, 120, 72, 1.0)';
  const primaryYellow50 = 'rgba(217, 120, 72, 0.5)';
  const primaryYellow10 = 'rgba(217, 120, 72, 0.1)';

  const secondaryYellow100 = 'rgba(253, 253, 206, 1.0)';
  const secondaryYellow50 = 'rgba(253, 253, 206, 0.5)';
  const secondaryYellow10 = 'rgba(253, 253, 206, 0.1)';

  const primaryPurple100 = 'rgba(88, 13, 235, 1.0)';
  const primaryPurple50 = 'rgba(88, 13, 235, 0.5)';
  const primaryPurple10 = 'rgba(88, 13, 235, 0.1)';

  const secondaryPurple100 = 'rgba(135, 127, 203, 1.0)';
  const secondaryPurple50 = 'gba(135, 127, 203, 0.5)';
  const secondaryPurple10 = 'rgba(135, 127, 203, 0.1)';

  // Apex hover effects
  apexElement.addEventListener('mouseenter', () => {
    gsap.to(apexH2, { color: primaryGreen100, stroke: primaryGreen50, duration: 0.5, ease: "power4.inOut" });
    gsap.to(emberH2, { color: primaryGreen10, stroke: primaryGreen50, duration: 0.5, ease: "power4.inOut" });
    gsap.to(nebulaH2, { color: primaryGreen10, stroke: primaryGreen50, duration: 0.5, ease: "power4.inOut" });
    gsap.to(apexH5, { color: secondaryGreen100, stroke: secondaryGreen50, duration: 0.5, ease: "power4.inOut" });
    gsap.to(emberH5, { color: secondaryGreen10, stroke: secondaryGreen50, duration: 0.5, ease: "power4.inOut" });
    gsap.to(nebulaH5, { color: secondaryGreen10, stroke: secondaryGreen50, duration: 0.5, ease: "power4.inOut" });
  });

  apexElement.addEventListener('mouseleave', () => {
    gsap.to(apexH2, { color: primaryGreen10, stroke: primaryGreen50, duration: 0.5, ease: "power4.inOut" });
    gsap.to(emberH2, { color: primaryGreen10, stroke: primaryGreen50, duration: 0.5, ease: "power4.inOut" });
    gsap.to(nebulaH2, { color: primaryGreen10, stroke: primaryGreen50, duration: 0.5, ease: "power4.inOut" });
    gsap.to(apexH5, { color: secondaryGreen10, stroke: secondaryGreen50, duration: 0.5, ease: "power4.inOut" });
    gsap.to(emberH5, { color: secondaryGreen10, stroke: secondaryGreen50, duration: 0.5, ease: "power4.inOut" });
    gsap.to(nebulaH5, { color: secondaryGreen10, stroke: secondaryGreen50, duration: 0.5, ease: "power4.inOut" });
  });

  // Ember hover effects
  emberElement.addEventListener('mouseenter', () => {
    gsap.to(apexH2, { color: primaryYellow10, stroke: primaryYellow50, duration: 0.5, ease: "power4.inOut" });
    gsap.to(emberH2, { color: primaryYellow100, stroke: primaryYellow50, duration: 0.5, ease: "power4.inOut" });
    gsap.to(nebulaH2, { color: primaryYellow10, stroke: primaryYellow50, duration: 0.5, ease: "power4.inOut" });
    gsap.to(apexH5, { color: secondaryYellow10, stroke: secondaryYellow50, duration: 0.5, ease: "power4.inOut" });
    gsap.to(emberH5, { color: secondaryYellow100, stroke: secondaryYellow50, duration: 0.5, ease: "power4.inOut" });
    gsap.to(nebulaH5, { color: secondaryYellow10, stroke: secondaryYellow50, duration: 0.5, ease: "power4.inOut" });
  });

  emberElement.addEventListener('mouseleave', () => {
    gsap.to(apexH2, { color: primaryGreen10, stroke: primaryGreen50, duration: 0.5, ease: "power4.inOut" });
    gsap.to(emberH2, { color: primaryGreen10, stroke: primaryGreen50, duration: 0.5, ease: "power4.inOut" });
    gsap.to(nebulaH2, { color: primaryGreen10, stroke: primaryGreen50, duration: 0.5, ease: "power4.inOut" });
    gsap.to(apexH5, { color: secondaryGreen10, stroke: secondaryGreen50, duration: 0.5, ease: "power4.inOut" });
    gsap.to(emberH5, { color: secondaryGreen10, stroke: secondaryGreen50, duration: 0.5, ease: "power4.inOut" });
    gsap.to(nebulaH5, { color: secondaryGreen10, stroke: secondaryGreen50, duration: 0.5, ease: "power4.inOut" });
  });

  // Nebula hover effects
  nebulaElement.addEventListener('mouseenter', () => {
    gsap.to(apexH2, { color: primaryPurple10, stroke: primaryPurple50, duration: 0.5, ease: "power4.inOut" });
    gsap.to(emberH2, { color: primaryPurple10, stroke: primaryPurple50, duration: 0.5, ease: "power4.inOut" });
    gsap.to(nebulaH2, { color: primaryPurple100, stroke: primaryPurple50, duration: 0.5, ease: "power4.inOut" });
    gsap.to(apexH5, { color: secondaryPurple10, stroke: secondaryPurple50, duration: 0.5, ease: "power4.inOut" });
    gsap.to(emberH5, { color: secondaryPurple10, stroke: secondaryPurple50, duration: 0.5, ease: "power4.inOut" });
    gsap.to(nebulaH5, { color: secondaryPurple100, stroke: secondaryPurple50, duration: 0.5, ease: "power4.inOut" });
  });

  nebulaElement.addEventListener('mouseleave', () => {
    gsap.to(apexH2, { color: primaryGreen10, stroke: primaryGreen50, duration: 0.5, ease: "power4.inOut" });
    gsap.to(emberH2, { color: primaryGreen10, stroke: primaryGreen50, duration: 0.5, ease: "power4.inOut" });
    gsap.to(nebulaH2, { color: primaryGreen10, stroke: primaryGreen50, duration: 0.5, ease: "power4.inOut" });
    gsap.to(apexH5, { color: secondaryGreen10, stroke: secondaryGreen50, duration: 0.5, ease: "power4.inOut" });
    gsap.to(emberH5, { color: secondaryGreen10, stroke: secondaryGreen50, duration: 0.5, ease: "power4.inOut" });
    gsap.to(nebulaH5, { color: secondaryGreen10, stroke: secondaryGreen50, duration: 0.5, ease: "power4.inOut" });
  });
});
