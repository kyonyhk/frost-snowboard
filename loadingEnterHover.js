document.addEventListener('DOMContentLoaded', () => {
  const ctaButton = document.querySelector('.cta-button.is-clickable.is-loading');
  const characters = document.querySelectorAll('.h-h6.is-cta.is-loading');
  const ctaSvg = document.querySelector('.cta-svg');

  ctaButton.addEventListener('mouseenter', () => {
    gsap.to(characters, {
      duration: 0.5,
      opacity: 1,
      stagger: 0.03,
      ease: "power4.out",
    });
    gsap.to(ctaSvg, {
      duration: 0.5,
      delay: (characters.length * 0.03),
      x: "20%",
      scale: 1.5,
      ease: "power4.out"
    });
  });

  ctaButton.addEventListener('mouseleave', () => {
    gsap.to(characters, {
      duration: 0.2,
      opacity: 0,
      stagger: 0.01,
      ease: "power4.out",
    });
    gsap.to(ctaSvg, {
      duration: 0.2,
      delay: (characters.length * 0.01),
      x: "0%",
      scale: 1,
      ease: "power4.out"
    });
  });
});
