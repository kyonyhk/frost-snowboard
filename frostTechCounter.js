function initializeFrostTechCounter() {
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
  
      // Calculate the distance to move for each digit
      const offset = (newIndex - currentIndex) * 100;
  
      // Set the initial position of the digits
      gsap.set(digits.quakeshift, { y: `${(0 - currentIndex) * 100}%` });
      gsap.set(digits.thermoflux, { y: `${(1 - currentIndex) * 100}%` });
      gsap.set(digits.flexiweave, { y: `${(2 - currentIndex) * 100}%` });
  
      // Animate the digits to the new positions
      gsap.to(digits.quakeshift, { y: `${(0 - newIndex) * 100}%`, duration: 0.5, ease: 'power4.inOut' });
      gsap.to(digits.thermoflux, { y: `${(1 - newIndex) * 100}%`, duration: 0.5, ease: 'power4.inOut' });
      gsap.to(digits.flexiweave, { y: `${(2 - newIndex) * 100}%`, duration: 0.5, ease: 'power4.inOut' });
  
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
    // updateCounter('quakeshift');
  });
