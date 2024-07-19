document.addEventListener('DOMContentLoaded', () => {
  const apexElement = document.querySelector('.collections-main_heading.link.is-clickable.is-apex');
  const emberElement = document.querySelector('.collections-main_heading.link.is-clickable.is-ember');
  const nebulaElement = document.querySelector('.collections-main_heading.link.is-clickable.is-nebula');

  const defaultH2 = document.querySelector('.h-h2.is-collections-main.is-default');
  const defaultH5 = document.querySelector('.h-h5.is-collections-main.is-default');

  const apexH2One = document.querySelector('.h-h2.is-collections-main.is-default.is-one');
  const apexH5One = document.querySelector('.h-h5.is-collections-main.is-default.is-one');

  const emberH2One = document.querySelector('.h-h2.is-collections-main.is-default.is-one');
  const emberH2Two = document.querySelector('.h-h2.is-collections-main.is-default.is-two');
  const emberH2Three = document.querySelector('.h-h2.is-collections-main.is-default.is-three');

  const emberH5One = document.querySelector('.h-h5.is-collections-main.is-default.is-one');
  const emberH5Two = document.querySelector('.h-h5.is-collections-main.is-default.is-two');
  const emberH5Three = document.querySelector('.h-h5.is-collections-main.is-default.is-three');

  const nebulaH2One = document.querySelector('.h-h2.is-collections-main.is-default.is-one');
  const nebulaH2Two = document.querySelector('.h-h2.is-collections-main.is-default.is-two');
  const nebulaH2Three = document.querySelector('.h-h2.is-collections-main.is-default.is-three');

  const nebulaH5One = document.querySelector('.h-h5.is-collections-main.is-default.is-one');
  const nebulaH5Two = document.querySelector('.h-h5.is-collections-main.is-default.is-two');
  const nebulaH5Three = document.querySelector('.h-h5.is-collections-main.is-default.is-three');

  // Apex hover effects
  apexElement.addEventListener('mouseenter', () => {
    gsap.to(apexH2One, { color: '#6BE688', duration: 0.5, ease: "power4.inOut" });
    gsap.to(apexH5One, { color: '#A1FCCF', duration: 0.5, ease: "power4.inOut" });
  });

  apexElement.addEventListener('mouseleave', () => {
    gsap.to(defaultH2, { stroke: 'rgba(107, 230, 136, 0.5)', color: 'rgba(107, 230, 136, 0.1)', duration: 0.5, ease: "power4.inOut" });
    gsap.to(defaultH5, { stroke: 'rgba(161, 252, 207, 0.5)', color: 'rgba(161, 252, 207, 0.1)', duration: 0.5, ease: "power4.inOut" });
  });

  // Ember hover effects
  emberElement.addEventListener('mouseenter', () => {
    gsap.to(emberH2Two, { color: '#D97848', duration: 0.5, ease: "power4.inOut" });
    gsap.to(emberH5Two, { color: '#FDFDCE', duration: 0.5, ease: "power4.inOut" });
    gsap.to([emberH2One, emberH2Three], { color: '#D97848', opacity: 0.1, duration: 0.5, ease: "power4.inOut" });
    gsap.to([emberH5One, emberH5Three], { color: '#FDFDCE', opacity: 0.1, duration: 0.5, ease: "power4.inOut" });
    gsap.to(defaultH2, { stroke: '#D97848', opacity: 0.5, duration: 0.5, ease: "power4.inOut" });
    gsap.to(defaultH5, { stroke: '#FDFDCE', opacity: 0.5, duration: 0.5, ease: "power4.inOut" });
  });

  emberElement.addEventListener('mouseleave', () => {
    gsap.to(defaultH2, { stroke: 'rgba(107, 230, 136, 0.5)', color: 'rgba(107, 230, 136, 0.1)', duration: 0.5, ease: "power4.inOut" });
    gsap.to(defaultH5, { stroke: 'rgba(161, 252, 207, 0.5)', color: 'rgba(161, 252, 207, 0.1)', duration: 0.5, ease: "power4.inOut" });
  });

  // Nebula hover effects
  nebulaElement.addEventListener('mouseenter', () => {
    gsap.to(nebulaH2Three, { color: '#580DEB', duration: 0.5, ease: "power4.inOut" });
    gsap.to(nebulaH5Three, { color: '#877FCB', duration: 0.5, ease: "power4.inOut" });
    gsap.to([nebulaH2One, nebulaH2Two], { color: '#580DEB', opacity: 0.1, duration: 0.5, ease: "power4.inOut" });
    gsap.to([nebulaH5One, nebulaH5Two], { color: '#877FCB', opacity: 0.1, duration: 0.5, ease: "power4.inOut" });
    gsap.to(defaultH2, { stroke: '#580DEB', opacity: 0.5, duration: 0.5, ease: "power4.inOut" });
    gsap.to(defaultH5, { stroke: '#877FCB', opacity: 0.5, duration: 0.5, ease: "power4.inOut" });
  });

  nebulaElement.addEventListener('mouseleave', () => {
    gsap.to(defaultH2, { stroke: 'rgba(107, 230, 136, 0.5)', color: 'rgba(107, 230, 136, 0.1)', duration: 0.5, ease: "power4.inOut" });
    gsap.to(defaultH5, { stroke: 'rgba(161, 252, 207, 0.5)', color: 'rgba(161, 252, 207, 0.1)', duration: 0.5, ease: "power4.inOut" });
  });
});
