document.addEventListener('DOMContentLoaded', () => {
  const ctaButton = document.querySelector('.cta-button.is-clickable.is-frost-tech-intro');
  const characters = document.querySelectorAll('.h-h6.is-cta.is-frost-tech');
  const ctaSvg = document.querySelector('.cta-svg');

  ctaButton.addEventListener('mouseenter', () => {
    gsap.to(characters, {
      duration: 0.5,
      color: "rgba(107, 230, 136, 1)", // Ensure the fill color goes to 100%
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
      color: "rgba(107, 230, 136, 0.1)", // Change the fill color to 10%
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
