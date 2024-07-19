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

  const collectionsSubheading = document.querySelector('.s-s5.is-collections');
  const collectionsDiamondIcon = document.querySelector('.global-icon_diamond.is-icon.is-collections');

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
    gsap.to(apexH2, { color: primaryGreen100, '-webkit-text-stroke': `1px ${primaryGreen50}`, duration: 0.5, ease: "power4.out" });
    gsap.to(emberH2, { color: primaryGreen10, '-webkit-text-stroke': `1px ${primaryGreen50}`, duration: 0.5, ease: "power4.out" });
    gsap.to(nebulaH2, { color: primaryGreen10, '-webkit-text-stroke': `1px ${primaryGreen50}`, duration: 0.5, ease: "power4.out" });
    gsap.to(apexH5, { color: secondaryGreen100, '-webkit-text-stroke': `1px ${secondaryGreen50}`, duration: 0.5, ease: "power4.out" });
    gsap.to(emberH5, { color: secondaryGreen10, '-webkit-text-stroke': `1px ${secondaryGreen50}`, duration: 0.5, ease: "power4.out" });
    gsap.to(nebulaH5, { color: secondaryGreen10, '-webkit-text-stroke': `1px ${secondaryGreen50}`, duration: 0.5, ease: "power4.out" });
    gsap.to(collectionsSubheading, { color: secondaryGreen100, duration: 0.5, ease: "power4.out" });
    gsap.to(collectionsDiamondIcon, { borderColor: primaryGreen100, boxShadow:`0 0 10px ${primaryGreen100}`, duration: 0.5, ease: "power4.out" });
  });

  apexElement.addEventListener('mouseleave', () => {
    gsap.to(apexH2, { color: primaryGreen10, '-webkit-text-stroke': `1px ${primaryGreen50}`, duration: 0.5, ease: "power4.out" });
    gsap.to(emberH2, { color: primaryGreen10, '-webkit-text-stroke': `1px ${primaryGreen50}`, duration: 0.5, ease: "power4.out" });
    gsap.to(nebulaH2, { color: primaryGreen10, '-webkit-text-stroke': `1px ${primaryGreen50}`, duration: 0.5, ease: "power4.out" });
    gsap.to(apexH5, { color: secondaryGreen10, '-webkit-text-stroke': `1px ${secondaryGreen50}`, duration: 0.5, ease: "power4.out" });
    gsap.to(emberH5, { color: secondaryGreen10, '-webkit-text-stroke': `1px ${secondaryGreen50}`, duration: 0.5, ease: "power4.out" });
    gsap.to(nebulaH5, { color: secondaryGreen10, '-webkit-text-stroke': `1px ${secondaryGreen50}`, duration: 0.5, ease: "power4.out" });
    gsap.to(collectionsSubheading, { color: secondaryGreen100, duration: 0.5, ease: "power4.out" });
    gsap.to(collectionsDiamondIcon, { borderColor: primaryGreen100, boxShadow:`0 0 10px ${primaryGreen100}`, duration: 0.5, ease: "power4.out" });
  });

  // Ember hover effects
  emberElement.addEventListener('mouseenter', () => {
    gsap.to(apexH2, { color: primaryYellow10, '-webkit-text-stroke': `1px ${primaryYellow50}`, duration: 0.5, ease: "power4.out" });
    gsap.to(emberH2, { color: primaryYellow100, '-webkit-text-stroke': `1px ${primaryYellow50}`, duration: 0.5, ease: "power4.out" });
    gsap.to(nebulaH2, { color: primaryYellow10, '-webkit-text-stroke': `1px ${primaryYellow50}`, duration: 0.5, ease: "power4.out" });
    gsap.to(apexH5, { color: secondaryYellow10, '-webkit-text-stroke': `1px ${secondaryYellow50}`, duration: 0.5, ease: "power4.out" });
    gsap.to(emberH5, { color: secondaryYellow100, '-webkit-text-stroke': `1px ${secondaryYellow50}`, duration: 0.5, ease: "power4.out" });
    gsap.to(nebulaH5, { color: secondaryYellow10, '-webkit-text-stroke': `1px ${secondaryYellow50}`, duration: 0.5, ease: "power4.out" });
    gsap.to(collectionsSubheading, { color: secondaryYellow100, duration: 0.5, ease: "power4.out" });
    gsap.to(collectionsDiamondIcon, { borderColor: primaryYellow100, boxShadow:`0 0 10px ${primaryYellow100}`, duration: 0.5, ease: "power4.out" });
  });

  emberElement.addEventListener('mouseleave', () => {
    gsap.to(apexH2, { color: primaryGreen10, '-webkit-text-stroke': `1px ${primaryGreen50}`, duration: 0.5, ease: "power4.out" });
    gsap.to(emberH2, { color: primaryGreen10, '-webkit-text-stroke': `1px ${primaryGreen50}`, duration: 0.5, ease: "power4.out" });
    gsap.to(nebulaH2, { color: primaryGreen10, '-webkit-text-stroke': `1px ${primaryGreen50}`, duration: 0.5, ease: "power4.out" });
    gsap.to(apexH5, { color: secondaryGreen10, '-webkit-text-stroke': `1px ${secondaryGreen50}`, duration: 0.5, ease: "power4.out" });
    gsap.to(emberH5, { color: secondaryGreen10, '-webkit-text-stroke': `1px ${secondaryGreen50}`, duration: 0.5, ease: "power4.out" });
    gsap.to(nebulaH5, { color: secondaryGreen10, '-webkit-text-stroke': `1px ${secondaryGreen50}`, duration: 0.5, ease: "power4.out" });
    gsap.to(collectionsSubheading, { color: secondaryGreen100, duration: 0.5, ease: "power4.out" });
    gsap.to(collectionsDiamondIcon, { borderColor: primaryGreen100, boxShadow:`0 0 10px ${primaryGreen100}`, duration: 0.5, ease: "power4.out" });
  });

  // Nebula hover effects
  nebulaElement.addEventListener('mouseenter', () => {
    gsap.to(apexH2, { color: primaryPurple10, '-webkit-text-stroke': `1px ${primaryPurple50}`, duration: 0.5, ease: "power4.out" });
    gsap.to(emberH2, { color: primaryPurple10, '-webkit-text-stroke': `1px ${primaryPurple50}`, duration: 0.5, ease: "power4.out" });
    gsap.to(nebulaH2, { color: primaryPurple100, '-webkit-text-stroke': `1px ${primaryPurple50}`, duration: 0.5, ease: "power4.out" });
    gsap.to(apexH5, { color: secondaryPurple10, '-webkit-text-stroke': `1px ${secondaryPurple50}`, duration: 0.5, ease: "power4.out" });
    gsap.to(emberH5, { color: secondaryPurple10, '-webkit-text-stroke': `1px ${secondaryPurple50}`, duration: 0.5, ease: "power4.out" });
    gsap.to(nebulaH5, { color: secondaryPurple100, '-webkit-text-stroke': `1px ${secondaryPurple50}`, duration: 0.5, ease: "power4.out" });
    gsap.to(collectionsSubheading, { color: secondaryPurple100, duration: 0.5, ease: "power4.out" });
    gsap.to(collectionsDiamondIcon, { borderColor: primaryPurple100, boxShadow:`0 0 10px ${primaryPurple100}`, duration: 0.5, ease: "power4.out" });
  });

  nebulaElement.addEventListener('mouseleave', () => {
    gsap.to(apexH2, { color: primaryGreen10, '-webkit-text-stroke': `1px ${primaryGreen50}`, duration: 0.5, ease: "power4.out" });
    gsap.to(emberH2, { color: primaryGreen10, '-webkit-text-stroke': `1px ${primaryGreen50}`, duration: 0.5, ease: "power4.out" });
    gsap.to(nebulaH2, { color: primaryGreen10, '-webkit-text-stroke': `1px ${primaryGreen50}`, duration: 0.5, ease: "power4.out" });
    gsap.to(apexH5, { color: secondaryGreen10, '-webkit-text-stroke': `1px ${secondaryGreen50}`, duration: 0.5, ease: "power4.out" });
    gsap.to(emberH5, { color: secondaryGreen10, '-webkit-text-stroke': `1px ${secondaryGreen50}`, duration: 0.5, ease: "power4.out" });
    gsap.to(nebulaH5, { color: secondaryGreen10, '-webkit-text-stroke': `1px ${secondaryGreen50}`, duration: 0.5, ease: "power4.out" });
    gsap.to(collectionsSubheading, { color: secondaryGreen100, duration: 0.5, ease: "power4.out" });
    gsap.to(collectionsDiamondIcon, { borderColor: primaryGreen100, boxShadow:`0 0 10px ${primaryGreen100}`, duration: 0.5, ease: "power4.out" });
  });
});
