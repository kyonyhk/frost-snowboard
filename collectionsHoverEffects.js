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

  // Apex hover effects
  apexElement.addEventListener('mouseenter', () => {
    gsap.to(apexH2, { color: 'rgba(107, 230, 136, 1.0)', duration: 0.5, ease: "power4.inOut" });
    gsap.to(apexH5, { color: 'rgba(161, 252, 207, 1.0)', duration: 0.5, ease: "power4.inOut" });
  });

  apexElement.addEventListener('mouseleave', () => {
    gsap.to(defaultH2, { stroke: 'rgba(107, 230, 136, 0.5)', color: 'rgba(107, 230, 136, 0.1)', duration: 0.5, ease: "power4.inOut" });
    gsap.to(defaultH5, { stroke: 'rgba(161, 252, 207, 0.5)', color: 'rgba(161, 252, 207, 0.1)', duration: 0.5, ease: "power4.inOut" });
  });

  // Ember hover effects
  emberElement.addEventListener('mouseenter', () => {
    gsap.to(emberH2, { color: 'rgba(217, 120, 72, 1.0)', duration: 0.5, ease: "power4.inOut" });
    gsap.to(emberH5, { color: 'rgba(253, 253, 206, 1.0)', duration: 0.5, ease: "power4.inOut" });
    gsap.to(apexH2, { color: 'rgba(217, 120, 72, 0.1)', duration: 0.5, ease: "power4.inOut" });
    gsap.to(nebulaH2, { color: 'rgba(217, 120, 72, 0.1)', duration: 0.5, ease: "power4.inOut" });
    gsap.to(apexH5, { color: 'rgba(253, 253, 206, 0.1)', duration: 0.5, ease: "power4.inOut" });
    gsap.to(nebulaH5, { color: 'rgba(253, 253, 206, 0.1)', duration: 0.5, ease: "power4.inOut" });
    gsap.to(defaultH2, { stroke: '#rgba(217, 120, 72, 0.5)', duration: 0.5, ease: "power4.inOut" });
    gsap.to(defaultH5, { stroke: 'rgba(253, 253, 206, 0.5)', duration: 0.5, ease: "power4.inOut" });
  });

  emberElement.addEventListener('mouseleave', () => {
    gsap.to(defaultH2, { stroke: 'rgba(107, 230, 136, 0.5)', color: 'rgba(107, 230, 136, 0.1)', duration: 0.5, ease: "power4.inOut" });
    gsap.to(defaultH5, { stroke: 'rgba(161, 252, 207, 0.5)', color: 'rgba(161, 252, 207, 0.1)', duration: 0.5, ease: "power4.inOut" });
  });

  // Nebula hover effects
  nebulaElement.addEventListener('mouseenter', () => {
    gsap.to(nebulaH2, { color: 'rgba(88, 13, 235, 1.0)', duration: 0.5, ease: "power4.inOut" });
    gsap.to(nebulaH5, { color: 'rgba(135, 127, 203, 1.0)', duration: 0.5, ease: "power4.inOut" });
    gsap.to(apexH2, { color: 'rgba(88, 13, 235, 0.1)', duration: 0.5, ease: "power4.inOut" });
    gsap.to(emberH2, { color: 'rgba(88, 13, 235, 0.1)', duration: 0.5, ease: "power4.inOut" });
    gsap.to(apexH5, { color: 'rgba(135, 127, 203, 0.1)', duration: 0.5, ease: "power4.inOut" });
    gsap.to(emberH5, { color: 'rgba(135, 127, 203, 0.1)', duration: 0.5, ease: "power4.inOut" });
    gsap.to(defaultH2, { stroke: 'rgba(88, 13, 235, 0.5)', duration: 0.5, ease: "power4.inOut" });
    gsap.to(defaultH5, { stroke: 'rgba(135, 127, 203, 0.5)', duration: 0.5, ease: "power4.inOut" });
  });

  nebulaElement.addEventListener('mouseleave', () => {
    gsap.to(defaultH2, { stroke: 'rgba(107, 230, 136, 0.5)', color: 'rgba(107, 230, 136, 0.1)', duration: 0.5, ease: "power4.inOut" });
    gsap.to(defaultH5, { stroke: 'rgba(161, 252, 207, 0.5)', color: 'rgba(161, 252, 207, 0.1)', duration: 0.5, ease: "power4.inOut" });
  });
});
