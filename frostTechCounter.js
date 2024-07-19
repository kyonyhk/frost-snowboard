document.addEventListener('DOMContentLoaded', function() {
  let currentCategory = 'quakeshift'; // Default category

  function updateCounter(newCategory) {
    const quakeshiftDigit = document.querySelector('.h-h3.is-tech-counter.is-second-digit.is-quakeshift');
    const thermofluxDigit = document.querySelector('.h-h3.is-tech-counter.is-second-digit.is-thermoflux');
    const flexiweaveDigit = document.querySelector('.h-h3.is-tech-counter.is-second-digit.is-flexiweave');

    const digits = {
      quakeshift: quakeshiftDigit,
      thermoflux: thermofluxDigit,
      flexiweave: flexiweaveDigit
    };

    const categories = ['quakeshift', 'thermoflux', 'flexiweave'];
    const currentIndex = categories.indexOf(currentCategory);
    const newIndex = categories.indexOf(newCategory);

    // Position the digits based on the new index
    gsap.set(digits.quakeshift, { y: `${(currentIndex - 0) * 100}%` });
    gsap.set(digits.thermoflux, { y: `${(currentIndex - 1) * 100}%` });
    gsap.set(digits.flexiweave, { y: `${(currentIndex - 2) * 100}%` });

    // Animate to the new position
    gsap.to(digits.quakeshift, { y: `${(newIndex - 0) * 100}%`, duration: 0.5 });
    gsap.to(digits.thermoflux, { y: `${(newIndex - 1) * 100}%`, duration: 0.5 });
    gsap.to(digits.flexiweave, { y: `${(newIndex - 2) * 100}%`, duration: 0.5 });

    currentCategory = newCategory;
  }

  // Example usage:
  const techOptions = document.querySelectorAll('.tech_description-header-wrap');
  techOptions.forEach(option => {
    option.addEventListener('click', function() {
      const newState = this.closest('.tech_description-container').classList[1].split('-')[1];
      updateCounter(newState);
    });
  });

  // Initialize with the default state
  updateCounter('quakeshift');
});
