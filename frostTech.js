function updateDescriptionSection(newState) {
  const allContainers = document.querySelectorAll('.tech_description-container');
  const newActiveContainer = document.querySelector(`.tech_description-container.is-${newState}`);
  
  // Animate out the currently active elements
  allContainers.forEach(container => {
    if (container !== newActiveContainer) {
      // Fade out inactive headers and hide paragraphs
      gsap.to(container.querySelector('.tech_description-header-wrap'), {
        opacity: 0.2,
        duration: 0.5
      });
      gsap.to(container.querySelector('.tech_description-p-wrap'), {
        y: '100%', // Move down
        opacity: 0,
        duration: 0.5,
        onComplete: () => {
          container.querySelector('.tech_description-p-wrap').style.display = 'none';
        }
      });
    }
  });

  // Animate in the new active elements
  gsap.to(newActiveContainer.querySelector('.tech_description-header-wrap'), {
    opacity: 1,
    duration: 0.5
  });
  // Ensure the paragraph is visible and reset position before animating
  const paragraphWrap = newActiveContainer.querySelector('.tech_description-p-wrap');
  paragraphWrap.style.display = 'block';
  gsap.fromTo(paragraphWrap, {
    y: '100%', // Start from below
    opacity: 0
  }, {
    y: '0%', // Move to original position
    opacity: 1,
    duration: 0.5
  });
}

// Example usage:
document.addEventListener('DOMContentLoaded', function() {
  const techOptions = document.querySelectorAll('.tech_description-header-wrap');
  techOptions.forEach(option => {
    option.addEventListener('click', function() {
      const newState = this.closest('.tech_description-container').classList[1].split('-')[1]; // Assuming class like 'is-quakeshift'
      updateDescriptionSection(newState);
    });
  });

  // Initialize with the default state
  updateDescriptionSection('quakeshift');
});
