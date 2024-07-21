function initializeFrostTechDescriptionHover() {
  console.log('Initializing Frost Tech Description Hover...');
  
  document.addEventListener('DOMContentLoaded', () => {
    const techHeaders = document.querySelectorAll('.tech_description-header-wrap');
    console.log('Found hover elements:', techHeaders);

  
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
            duration: 0.3,
            ease: "power4.inOut"
          });
        }
      });
    });
  });

  console.log('Frost Tech description hover initialized');
}

// Ensure the function is globally accessible
window.initializeFrostTechDescriptionHover = initializeFrostTechDescriptionHover;
