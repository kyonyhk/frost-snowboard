document.addEventListener('DOMContentLoaded', function() {
  const marquee = document.querySelector('.cp_infinite-marquee-container');
  let lastWidth = window.innerWidth;

  function updateMarquee() {
    // Remove existing animations to reset the marquee
    marquee.classList.remove('running');

    setTimeout(() => {
      marquee.classList.add('running');
    }, 50); // Short delay to re-trigger the animation
  }

  // Check if resizing crosses the threshold
  window.addEventListener('resize', function() {
    if ((lastWidth <= 568 && window.innerWidth > 568) || (lastWidth > 568 && window.innerWidth <= 568)) {
      updateMarquee();
      lastWidth = window.innerWidth;
    }
  });

  updateMarquee(); // Initialize marquee on load
});
