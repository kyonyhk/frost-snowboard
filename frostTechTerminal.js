document.addEventListener('DOMContentLoaded', function() {
  const terminalContainers = document.querySelectorAll('.global-terminal');
  const techOptions = document.querySelectorAll('.tech_description-header-wrap');

  techOptions.forEach(option => option.addEventListener('click', function() {
    const currentActive = document.querySelector('.global-terminal.is-active');
    const currentClass = this.closest('.tech_description-container').classList[1]; // Assuming the second class denotes the tech type
    const newActive = document.querySelector(`.global-terminal.is-tech.${currentClass}`);

    // Hide current active terminal text and icon
    if (currentActive) {
      gsap.to(currentActive.querySelectorAll('.paragraph.is-terminal.is-tech'), {
        y: '-100%',
        duration: 0.3,
        ease: 'power4.out',
        onComplete: () => {
          currentActive.style.display = 'none';
          currentActive.classList.remove('is-active');
        }
      });
      gsap.to(currentActive.querySelector('.terminal-icon'), {
        rotate: '135deg', // Continuing rotation from 45deg to 90deg more
        opacity: 0,
        duration: 0.3,
        ease: 'power4.out'
      });
    }

    // Prepare and show new active terminal
    if (newActive && newActive !== currentActive) {
      newActive.style.display = 'flex';
      newActive.classList.add('is-active');
      gsap.from(newActive.querySelectorAll('.paragraph.is-terminal.is-tech'), {
        y: '100%',
        duration: 0.5,
        ease: 'power4.out',
        stagger: 0.1,
        clearProps: 'all'
      });
      gsap.from(newActive.querySelector('.terminal-icon'), {
        rotate: '0deg', // Start from 0deg
        opacity: 0,
        duration: 0.5,
        ease: 'power4.out',
        clearProps: 'all'
      });
    }
  }));
});
