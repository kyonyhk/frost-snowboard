document.addEventListener('DOMContentLoaded', function() {
  document.body.style.cursor = 'none';
  document.querySelector('.cursor-wrapper').style.display = 'block';

  var preloaderShownKey = 'preloaderShown';
  var preloaderCounter = document.querySelector('.s-s3.is-loading');
  var preloaderSection = document.querySelector('.section.is-loading');

  // If preloader has already been shown in this session, hide it
  if (sessionStorage.getItem(preloaderShownKey)) {
    if (preloaderSection) {
      preloaderSection.style.display = 'none';
      preloaderCounter.style.display = 'none';
    }
    document.body.classList.remove('no-scroll'); // Allow scrolling
    return; // Exit early to skip the rest of the preloader logic
  } else {
    // Show the preloader if it hasn't been shown yet
    preloaderSection.style.display = 'block';
  }

  document.body.classList.add('no-scroll');
  var loadingCounterWrap = document.querySelector('.loading_counter-wrap');
  var loadingTaglineWrap = document.querySelector('.loading_tagline-wrap');
  var button = document.querySelector('.loading_button-container');
  var load = 0;

  var interval = setInterval(function() {
    load++;
    if (preloaderCounter) {
      preloaderCounter.textContent = load + '%';
    }
    if (load >= 100) {
      clearInterval(interval);
      setTimeout(function() {
        preloaderCounter.style.opacity = '0';
        preloaderCounter.style.transition = 'opacity 1s ease-out';
        preloaderCounter.style.transitionTimingFunction = 'cubic-bezier(0.19, 1, 0.22, 1)';
        
        setTimeout(function() {
          loadingCounterWrap.style.display = 'none';
          loadingTaglineWrap.style.display = 'block';

          // Ensure the changes have been rendered
          requestAnimationFrame(() => {
            animateTagline();
            initializeHoverEffect();
          });
        }, 1000); // Matches the duration of the opacity transition
      }, 1000);
    }
  }, 20);

  if (button) {
    button.addEventListener('click', function() {
      setTimeout(function() {
        document.body.classList.remove('no-scroll');
        // Set the flag in sessionStorage indicating that the preloader has been shown
        sessionStorage.setItem(preloaderShownKey, 'true');
      }, 5000); // Adjust this timeout to match the duration of your animation
    });
  }

  function createCharacterSpans(textElement, text) {
    textElement.innerHTML = '';
    text.split('').forEach(char => {
      const span = document.createElement('span');
      span.textContent = char;
      textElement.appendChild(span);
    });
  }

  function animateTagline() {
    var tagline = document.querySelector('.s-s4.is-loading.is-tagline');
    tagline.style.opacity = 0.2;
  
    createCharacterSpans(tagline, tagline.textContent);
  
    Array.from(tagline.children).forEach((charSpan, index) => {
      gsap.fromTo(charSpan, 
        { opacity: 0 }, 
        { 
          opacity: 1, 
          duration: 0.5, 
          onStart: () => scrambleCharacter(charSpan, charSpan.textContent),
          ease: "power4.out",
          onComplete: () => {
            if (index === tagline.children.length - 1) {
              tagline.style.opacity = 1;
            }
          }
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
    }, 500);
  }

  function initializeHoverEffect() {
    const button = document.querySelector('.loading_button-container');
    const textElement = document.querySelector('.s-s4.is-loading.is-tagline');
    const phrases = [
      "UNVEIL FROST",
      "CONQUER THE SEASON",
      "EMBRACE THE CHILL",
      "RIDE THE STORM",
      "MASTER THE PEAK"
    ];
    let currentIndex = 0;
    

    if (button && textElement) {
      button.addEventListener('mouseover', function() {
        textElement.style.opacity = 0.2; // Reduce opacity during hover effect
        currentIndex = (currentIndex + 1) % phrases.length // Cycle to the next phrase
        const newText = phrases[currentIndex];
        createCharacterSpans(textElement, newText); // Update text with character spans

        // Apply scramble effect to each character
        Array.from(textElement.children).forEach((charSpan, index) => {
          scrambleCharacter(charSpan, newText[index]);
          // Check if this is the last character
          if (index === textElement.children.length - 1) {
            // After the last character's animation completes, reset the opacity
            gsap.to(charSpan, {
              opacity: 1, 
              duration: 0.5,
              onComplete: () => {
                textElement.style.opacity = 1; // Reset opacity after all characters are done
              }
            });
          }
        });
      });
    }
  }
});
