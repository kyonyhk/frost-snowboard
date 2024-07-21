function initializeFrostTechDescriptionHover() {
  console.log('Initializing Frost Tech Description Hover...');

  const techHeaders = document.querySelectorAll('.tech_description-header-wrap');
  console.log('Found hover elements:', techHeaders);

  function handleMouseEnter(event) {
    const header = event.target;
    if (!header.closest('.tech_description-container').classList.contains('is-active')) {
      gsap.to(header, {
        opacity: 0.5,
        duration: 0.5,
        ease: "power4.inOut"
      });
    }
  }

  function handleMouseLeave(event) {
    const header = event.target;
    if (!header.closest('.tech_description-container').classList.contains('is-active')) {
      gsap.to(header, {
        opacity: 0.2,
        duration: 0.3,
        ease: "power4.inOut"
      });
    }
  }

  function setupEventListeners() {
    techHeaders.forEach(header => {
      header.addEventListener('mouseenter', handleMouseEnter);
      header.addEventListener('mouseleave', handleMouseLeave);
    });
  }

  setupEventListeners();
  console.log('Frost Tech description hover initialized');
}

// Cleanup function
function cleanupFrostTechDescriptionHover() {
  const techHeaders = document.querySelectorAll('.tech_description-header-wrap');
  
  techHeaders.forEach(header => {
    header.removeEventListener('mouseenter', handleMouseEnter);
    header.removeEventListener('mouseleave', handleMouseLeave);
    
    // Reset any ongoing GSAP animations
    gsap.killTweensOf(header);
    gsap.set(header, { clearProps: "all" });
  });

  console.log('Frost Tech description hover cleaned up');
}

// Ensure the functions are globally accessible
window.initializeFrostTechDescriptionHover = initializeFrostTechDescriptionHover;
window.cleanupFrostTechDescriptionHover = cleanupFrostTechDescriptionHover;
