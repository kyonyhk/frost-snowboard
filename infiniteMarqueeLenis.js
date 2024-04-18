document.addEventListener('DOMContentLoaded', function() {
  const lenis = new Lenis({
    lerp: 0.1, // Smoothness of the scroll, adjust as needed
    smooth: true,
    smoothMobile: true,
    touchMultiplier: 2 // Increases or decreases touch sensitivity
  });

  function animate() {
    lenis.raf(); // Update Lenis on each frame
    requestAnimationFrame(animate);
  }

  animate();

  const marqueeContainer = document.querySelector('.cp_infinite-marquee-container');

  let isDown = false;
  let startX;
  let scrollLeft;
  
  marqueeContainer.addEventListener('mousedown', (e) => {
    isDown = true;
    startX = e.pageX - marqueeContainer.offsetLeft;
    scrollLeft = marqueeContainer.scrollLeft;
  });
  
  marqueeContainer.addEventListener('mouseleave', () => {
    isDown = false;
  });
  
  marqueeContainer.addEventListener('mouseup', () => {
    isDown = false;
  });
  
  marqueeContainer.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - marqueeContainer.offsetLeft;
    const walk = (x - startX) * 3; //scroll-fast
    marqueeContainer.scrollLeft = scrollLeft - walk;
  });
});
