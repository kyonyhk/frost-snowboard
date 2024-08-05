function handleMouseMove(event) {
  const container = event.currentTarget;
  const image = container.querySelector('img');
  
  const { left, top, width, height } = container.getBoundingClientRect();
  const x = (event.clientX - left) / width - 0.5;
  const y = (event.clientY - top) / height - 0.5;
  
  const maxMove = 10; // Maximum pixel movement
  
  image.style.transform = `
    translate(${-x * maxMove}px, ${-y * maxMove}px)
    scale(1.05)
  `;
}

function handleMouseLeave(event) {
  const container = event.currentTarget;
  const image = container.querySelector('img');
  
  image.style.transform = 'translate(0, 0) scale(1)';
}

function initRepelEffect() {
  const imageContainers = document.querySelectorAll('.tech_image-container');
  
  imageContainers.forEach(container => {
    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);
    
    // Add a transition for smoother movement
    const image = container.querySelector('img');
    image.style.transition = 'transform 0.1s ease-out';
  });
}

// Initialize the effect when the DOM is loaded
document.addEventListener('DOMContentLoaded', initRepelEffect);
