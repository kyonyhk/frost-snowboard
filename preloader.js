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
    const originalText = "UNVEIL FROST"; // Default text
    const alternateText = "CONQUER THE SEASON"; // Text to toggle to

    // Create spans for each character in the original text
    function createCharacterSpans(text) {
        textElement.innerHTML = ''; // Clear existing content
        text.split('').forEach(char => {
            const span = document.createElement('span');
            span.textContent = char;
            textElement.appendChild(span);
        });
    }

    createCharacterSpans(originalText); // Initialize with original text

    if (button && textElement) {
        button.addEventListener('mouseover', function() {
            const currentText = textElement.textContent;
            const newText = currentText === originalText ? alternateText : originalText;
            createCharacterSpans(newText); // Update text with character spans

            // Apply scramble effect to each character
            Array.from(textElement.children).forEach((charSpan, index) => {
                scrambleCharacter(charSpan, newText[index]);
            });
        });
    }
  }
});
