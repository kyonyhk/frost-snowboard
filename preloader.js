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
      setTimeout(function() {
        preloader.style.opacity = '0';
        preloader.style.transition = 'opacity 1s ease-out';
        preloader.style.transitionTimingFunction = 'cubic-bezier(0.19, 1, 0.22, 1)';
        
        setTimeout(function() {
          loadingCounterWrap.style.display = 'none';
          loadingTaglineWrap.style.display = 'block';

          // Ensure the changes have been rendered
          requestAnimationFrame(() => {
            animateTagline();
            // Initialize hover effect after the tagline is displayed
            initializeHoverEffect();
          });
        }, 1000); // Matches the duration of the opacity transition
      }, 1000);
    }
  }, 20);

  function animateTagline() {
    var tagline = document.querySelector('.s-s4.is-loading.is-tagline');
    var split = new SplitType(tagline, { types: 'chars' });

    split.chars.forEach(char => {
      let originalText = char.textContent;
      gsap.fromTo(char, 
        { opacity: 0 }, 
        { 
          opacity: 1, 
          duration: 0.5, 
          onStart: () => scrambleCharacter(char, originalText),
          ease: "power4.out"
        }
      );
    });
  }

  function scrambleCharacter(char, originalText) {
    let possibleChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let scrambleInterval = setInterval(() => {
      char.textContent = possibleChars.charAt(Math.floor(Math.random() * possibleChars.length));
    }, 50);

    setTimeout(() => {
      clearInterval(scrambleInterval);
      char.textContent = originalText;
    }, 500); // This duration should match the GSAP animation duration
  }

  function initializeHoverEffect() {
    const button = document.querySelector('.loading_button-container');
    const textElement = document.querySelector('.s-s4.is-loading.is-tagline');
    if (button && textElement) {
      const originalText = textElement.textContent;
      const chars = [...originalText]; // Convert string to array of characters

      button.addEventListener('mouseover', function() {
        chars.forEach((char, index) => {
          // Apply scrambleCharacter to each character
          scrambleCharacter(textElement.childNodes[index], char);
        });
      });
    }
  }
});
