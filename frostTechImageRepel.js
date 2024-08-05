document.addEventListener('DOMContentLoaded', function() {
  // Select all image containers
  const imageContainers = document.querySelectorAll('.tech_image-container');

  imageContainers.forEach(container => {
    container.addEventListener('mouseenter', function(event) {
      const { clientX, clientY, target } = event;
      const { top, left, width, height } = target.getBoundingClientRect();
      
      // Calculate the distance to repel
      const xDistance = clientX - (left + width / 2);
      const yDistance = clientY - (top + height / 2);

      gsap.to(container, {
        x: xDistance * 0.1, // Adjust this multiplier to control the amount of repelling
        y: yDistance * 0.1,
        duration: 0.5,
        ease: 'power4.out'
      });
    });

    container.addEventListener('mouseleave', function() {
      gsap.to(container, {
        x: 0,
        y: 0,
        duration: 0.2,
        ease: 'power4.out'
      });
    });
  });
});
