function initializeFrostTechImage() {
  console.log('Initializing Frost Tech Image...');

  function switchImageState(newState) {
    const allImages = document.querySelectorAll('.img.is-tech-image');
    console.log('Found images:', allImages);
  
    const currentActiveImage = document.querySelector('.img.is-tech-image.is-active');
    const newActiveImage = document.querySelector(`.img.is-tech-image.is-${newState}`);
    const currentActiveImageWrap = document.querySelector('.tech_image-wrap.is-active');
    const newActiveImageWrap = document.querySelector(`.tech_image-wrap.is-${newState}`);

    if (!newActiveImage || !newActiveImageWrap) {
      console.warn(`Image or wrap not found for state: ${newState}`);
      return;
    }

    // Animate out the current active image
    if (currentActiveImage && currentActiveImageWrap) {
      gsap.to(currentActiveImage, {
        scale: 0.8,
        opacity: 0,
        duration: 0.3,
        ease: "power4.out",
        onComplete: () => {
          currentActiveImage.classList.remove('is-active');
          currentActiveImageWrap.classList.remove('is-active');
          currentActiveImageWrap.style.display = 'none';
        }
      });
    }

    // Animate in the new active image
    gsap.fromTo(newActiveImage, {
      scale: 0.8,
      opacity: 0
    }, {
      scale: 1,
      opacity: 1,
      duration: 0.5,
      ease: "power4.out",
      onStart: () => {
        newActiveImage.classList.add('is-active');
        newActiveImageWrap.classList.add('is-active');
        newActiveImageWrap.style.display = 'flex';
      }
    });
  }

  function handleTechHeaderClick(event) {
    const newState = event.target.closest('.tech_description-container').classList[1].split('-')[1];
    switchImageState(newState);
  }

  function setupEventListeners() {
    document.querySelectorAll('.tech_description-header-wrap').forEach(header => {
      header.addEventListener('click', handleTechHeaderClick);
    });
  }

  // Initialize with default state
  switchImageState('quakeshift');
  setupEventListeners();

  console.log('Frost Tech image initialized');
}

// Cleanup function
function cleanupFrostTechImage() {
  // Remove event listeners
  document.querySelectorAll('.tech_description-header-wrap').forEach(header => {
    header.removeEventListener('click', handleTechHeaderClick);
  });

  // Kill any ongoing GSAP animations
  gsap.killTweensOf('.img.is-tech-image');

  console.log('Frost Tech image cleaned up');
}

// Ensure the functions are globally accessible
window.initializeFrostTechImage = initializeFrostTechImage;
window.cleanupFrostTechImage = cleanupFrostTechImage;
