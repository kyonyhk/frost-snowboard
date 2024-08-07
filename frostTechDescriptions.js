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
      if (pWrap) {
        gsap.to(pWrap, {
          autoAlpha: 0, // Handles opacity and visibility
          height: 0, // Animate height to 0
          duration: 0.5,
          onComplete: () => {
            pWrap.style.display = 'none'; // Hide the element after animation
          }
        });
      }
      // Remove is-active class from inactive containers
      container.classList.remove('is-active');
    }
  });

  // Animate in the new active elements
  gsap.to(newActiveContainer.querySelector('.tech_description-header-wrap'), {
    opacity: 1,
    duration: 0.5
  });

  // Reset and animate in the paragraph wrapper
  const newParagraphWrap = newActiveContainer.querySelector('.tech_description-p-wrap');
  if (newParagraphWrap) {
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

  // Add is-active class to the new active container
  newActiveContainer.classList.add('is-active');
}

// Example usage:
document.addEventListener('DOMContentLoaded', function() {
  const techOptions = document.querySelectorAll('.tech_description-header-wrap');
  techOptions.forEach(option => {
    option.addEventListener('click', function() {
      const parentContainer = this.closest('.tech_description-container');
      if (parentContainer.classList.contains('is-active')) {
        return; // Do nothing if the clicked element is already active
      }
      const newState = parentContainer.classList[1].split('-')[1];
      updateDescriptionSection(newState);
    });
  });

  // Initialize with the default state
  // updateDescriptionSection('quakeshift'); // Ensure to add the is-active class initially
});
