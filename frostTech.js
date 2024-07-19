function updateDescriptionSection(newState) {
  const allContainers = document.querySelectorAll('.tech_description-container');
  const newActiveContainer = document.querySelector(`.tech_description-container.is-${newState}`);
  
  // Animate out the currently active elements
  allContainers.forEach(container => {
    if (container !== newActiveContainer) {
      // Fade out inactive headers
      gsap.to(container.querySelector('.tech_description-header-wrap'), {
        opacity: 0.2,
        duration: 0.5
      });
      // Slide and fade out paragraphs smoothly
      gsap.to(container.querySelector('.tech_description-p-wrap'), {
        autoAlpha: 0, // Handles opacity and visibility
        height: 0, // Transition height to 0
        duration: 0.5
      });
    }
  });

  // Animate in the new active elements
  gsap.to(newActiveContainer.querySelector('.tech_description-header-wrap'), {
    opacity: 1,
    duration: 0.5
  });
  // Reset height and visibility before animating in
  const paragraphWrap = newActiveContainer.querySelector('.tech_description-p-wrap');
  gsap.set(paragraphWrap, { height: 'auto', autoAlpha: 0 }); // Set initial conditions for animation
  gsap.to(paragraphWrap, {
    autoAlpha: 1, // Handles opacity and visibility
    height: 'auto', // Transition height from 0 to auto
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
