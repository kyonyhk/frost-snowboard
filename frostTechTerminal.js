document.addEventListener('DOMContentLoaded', function() {
  const terminalContainers = document.querySelectorAll('.global-terminal');
  const techOptions = document.querySelectorAll('.tech_description-header-wrap');

  // Setup initial states for all elements
  terminalContainers.forEach(container => {
    if (!container.classList.contains('is-active')) {
      container.style.display = 'none';
    }
    gsap.set(container.querySelectorAll('.paragraph.is-terminal.is-tech'), { y: '100%' });
    gsap.set(container.querySelector('.terminal-icon'), { opacity: 0, rotate: '0deg', x: '-300%' });
  });

  techOptions.forEach(option => option.addEventListener('click', function() {
    const currentActive = document.querySelector('.global-terminal.is-active');
    const currentClass = this.closest('.tech_description-container').classList[1]; // Assuming the second class denotes the tech type
    const newActive = document.querySelector(`.global-terminal.is-tech.${currentClass}`);

    // Exit animations for current active elements
    if (currentActive) {
      gsap.to(currentActive.querySelectorAll('.paragraph.is-terminal.is-tech'), {
        y: '-100%',
        duration: 0.3,
        ease: 'power4.out',
        onComplete: () => {
          currentActive.style.display = 'none';
          currentActive.classList.remove('is-active');
          gsap.set(currentActive.querySelectorAll('.paragraph.is-terminal.is-tech'), { y: '100%' });
        }
      });
      gsap.to(currentActive.querySelector('.terminal-icon'), {
        rotate: '135deg', // Additional 90deg rotation
        opacity: 0,
        duration: 0.3,
        ease: 'power4.out',
        onComplete: () => {
          gsap.set(currentActive.querySelector('.terminal-icon'), { rotate: '0deg', x: '-300%', opacity: 0 });
        }
      });
    }

    // Setup and animate new active elements
    if (newActive && newActive !== currentActive) {
      newActive.style.display = 'flex';
      newActive.classList.add('is-active');
      gsap.from(newActive.querySelectorAll('.paragraph.is-terminal.is-tech'), {
        y: '100%',
        duration: 0.5,
        ease: 'power4.out',
        stagger: 0.1
      });
      gsap.from(newActive.querySelector('.terminal-icon'), {
        x: '-300%',
        opacity: 0,
        rotate: '0deg',
        duration: 0.5,
        ease: 'power4.out'
      });
    }
  }));
});
