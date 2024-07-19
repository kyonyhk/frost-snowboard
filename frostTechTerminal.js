document.addEventListener('DOMContentLoaded', function() {
  const terminalContainers = document.querySelectorAll('.global-terminal');
  const techOptions = document.querySelectorAll('.tech_description-header-wrap');

  techOptions.forEach(option => option.addEventListener('click', function() {
    // Find currently active terminal
    const activeTerminal = document.querySelector('.global-terminal.is-active');
    const targetClass = this.parentElement.classList[1]; // Assuming the second class denotes the tech type
    const targetTerminal = document.querySelector(`.global-terminal.is-tech.${targetClass}`);

    // Exit animation for currently active terminal
    if (activeTerminal) {
      gsap.to(activeTerminal.querySelectorAll('.paragraph.is-terminal.is-tech'), {
        y: '-100%', // Slides up
        duration: 0.3,
        ease: 'power4.out',
        onComplete: () => {
          activeTerminal.style.display = 'none';
          activeTerminal.classList.remove('is-active');
        }
      });
      gsap.to(activeTerminal.querySelector('.terminal-icon'), {
        rotate: '90deg', // Additional rotation from its initial 45deg
        opacity: 0,
        duration: 0.3,
        ease: 'power4.out'
      });
    }

    // Set display to flex before starting entrance animation
    if (targetTerminal) {
      targetTerminal.style.display = 'flex';
      setTimeout(() => { // Ensure the display is set before animation starts
        gsap.from(targetTerminal.querySelectorAll('.paragraph.is-terminal.is-tech'), {
          y: '100%', // Starting state for entrance
          duration: 0.5, // Match the intro animation duration
          ease: 'power4.out',
          stagger: 0.1
        });
        gsap.from(targetTerminal.querySelector('.terminal-icon'), {
          rotate: '0deg', // Start from no rotation
          opacity: 0,
          duration: 0.5,
          ease: 'power4.out'
        });
        targetTerminal.classList.add('is-active');
      }, 20);
    }
  }));
});
