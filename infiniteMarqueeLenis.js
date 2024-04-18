document.addEventListener('DOMContentLoaded', function() {
  const lenis = new Lenis({
    lerp: 0.1,
    smooth: true,
    smoothMobile: true,
    touchMultiplier: 2
  });

  function animate() {
    lenis.raf();
    requestAnimationFrame(animate);
  }

  animate();

  const marqueeContainer = document.querySelector('.cp_infinite-marquee-container');
  let isDown = false;
  let startX, startY, scrollLeft, scrollTop;

  function handleDragStart(e) {
    isDown = true;
    startX = e.pageX - marqueeContainer.offsetLeft;
    startY = e.pageY - marqueeContainer.offsetTop;
    scrollLeft = marqueeContainer.scrollLeft;
    scrollTop = marqueeContainer.scrollTop;
  }

  function handleDragEnd() {
    isDown = false;
  }

  function handleDragMove(e) {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - marqueeContainer.offsetLeft;
    const y = e.pageY - marqueeContainer.offsetTop;
    const walkX = (x - startX) * 3;
    const walkY = (y - startY) * 3;

    if (window.innerWidth <= 568) {
      marqueeContainer.scrollLeft = scrollLeft - walkX;
    } else {
      marqueeContainer.scrollTop = scrollTop - walkY;
    }
  }

  // Mouse events
  marqueeContainer.addEventListener('mousedown', handleDragStart);
  marqueeContainer.addEventListener('mouseleave', handleDragEnd);
  marqueeContainer.addEventListener('mouseup', handleDragEnd);
  marqueeContainer.addEventListener('mousemove', handleDragMove);

  // Touch events
  marqueeContainer.addEventListener('touchstart', (e) => handleDragStart(e.touches[0]));
  marqueeContainer.addEventListener('touchend', handleDragEnd);
  marqueeContainer.addEventListener('touchmove', (e) => handleDragMove(e.touches[0]));

  // Adjust scrolling direction based on screen size
  window.addEventListener('resize', () => {
    if (window.innerWidth > 568) {
      // Switch to vertical scroll
      marqueeContainer.style.overflowY = 'auto';
      marqueeContainer.style.overflowX = 'hidden';
    } else {
      // Switch to horizontal scroll
      marqueeContainer.style.overflowX = 'auto';
      marqueeContainer.style.overflowY = 'hidden';
    }
  });
});
