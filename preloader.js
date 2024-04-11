document.addEventListener('DOMContentLoaded', function() {
  var preloader = document.querySelector('.s-s3.is-loading');
  var loadingCounterWrap = document.querySelector('.loading_counter-wrap');
  var loadingTaglineWrap = document.querySelector('.loading_tagline-wrap');
  var load = 0;
  var interval = setInterval(function() {
    load++;
    if (preloader) {
      preloader.textContent = load + '%';
    }
    if (load >= 100) {
      clearInterval(interval);
      // Start the tagline animation after the preloader fades out
      setTimeout(function() {
        preloader.style.opacity = '0';
        preloader.style.transition = 'opacity 1s ease-out';
        preloader.style.transitionTimingFunction = 'cubic-bezier(0.19, 1, 0.22, 1)'; 

        // After the opacity transition completes, change the display settings
        setTimeout(function() {
          loadingCounterWrap.style.display = 'none';
          loadingTaglineWrap.style.display = 'block';
          animateTagline();
        }, 1000); // Match the duration of the opacity transition
      }, 1000);
    }
  }, 20);

function animateTagline() {
  var tagline = document.querySelector('.s-s4.is-loading.is-tagline');
  var split = new SplitType(tagline, { types: 'chars' });

  // Scramble text effect
  gsap.to(split.chars, {
    duration: 0.5,
    scrambleText: {
      text: "CONQUER YOUR NEXT SEASON",
      chars: "01Frost Quakeshift CoreFeel the terrain, not the tremors. Watch as Frost's QuakeShift Core absorbs the shock of rugged landscapes, keeping your ride smooth. It's the silent guardian in your board, ensuring each run is as steady as it is exhilarating.",
      revealDelay: 0.5,
      tweenLength: false
    },
    stagger: 0.05,
    ease: "power4.out"
  });
}

