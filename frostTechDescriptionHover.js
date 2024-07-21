function initializeFrostTechDescriptionHover() {
  document.addEventListener('DOMContentLoaded', () => {
    const techHeaders = document.querySelectorAll('.tech_description-header-wrap');
  
    techHeaders.forEach(header => {
      header.addEventListener('mouseenter', () => {
        if (!header.closest('.tech_description-container').classList.contains('is-active')) {
          gsap.to(header, {
            opacity: 0.5,
            duration: 0.5,
            ease: "power4.inOut"
          });
        }
      });
  
      header.addEventListener('mouseleave', () => {
        if (!header.closest('.tech_description-container').classList.contains('is-active')) {
          gsap.to(header, {
            opacity: 0.2,
            duration: 0.5,
            ease: "power4.inOut"
          });
        }
      });
    });
  });
}

// Ensure the function is accessible globally
window.initializeFrostTechDescriptionHover = initializeFrostTechDescriptionHover;
