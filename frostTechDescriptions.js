function updateDescriptionSection(newState) {
  const allContainers = document.querySelectorAll('.tech_description-container');
  const newActiveContainer = document.querySelector(`.tech_description-container.is-${newState}`);

  // Animate out the currently active elements
  allContainers.forEach(container => {
    if (container !== newActiveContainer) {
      // Reduce opacity for inactive headers
      gsap.to(container.querySelector('.tech_description-header-wrap'), {
        opacity: 0.2,
        duration: 0.5
      });
      // Slide and fade out paragraphs smoothly
      const pWrap = container.querySelector('.tech_description-p-wrap');
      gsap.to(pWrap, {
        autoAlpha: 0, // Handles opacity and visibility
        height: 0, // Animate height to 0
        duration: 0.5,
        onComplete: () => {
          pWrap.style.display = 'none'; // Hide the element after animation
        }
      });
    }
  });

  // Animate in the new active elements
  gsap.to(newActiveContainer.querySelector('.tech_description-header-wrap'), {
    opacity: 1,
    duration: 0.5
  });
  // Reset and animate in the paragraph wrapper
  const newParagraphWrap = newActiveContainer.querySelector('.tech_description-p-wrap');
  newParagraphWrap.style.display = 'block';
  gsap.fromTo(newParagraphWrap, {
    autoAlpha: 0,
    height: 0
  }, {
    autoAlpha: 1,
    height: function() { return newParagraphWrap.scrollHeight + 'px'; }, // Animate height dynamically based on content
    duration: 0.5,
    clearProps: 'height' // Clear the inline height property after animation to handle dynamic content changes
  });
}

// Example usage:
document.addEventListener('DOMContentLoaded', function() {
  const techOptions = document.querySelectorAll('.tech_description-header-wrap');
  techOptions.forEach(option => {
    option.addEventListener('click', function() {
      const newState = this.closest('.tech_description-container').classList[1].split('-')[1];
      updateDescriptionSection(newState);
    });
  });

  // Initialize with the default state
  updateDescriptionSection('quakeshift');
});
