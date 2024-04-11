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

  function createCharacterSpans(textElement, text) {
    textElement.innerHTML = ''; // Clear existing content
    text.split('').forEach(char => {
      const span = document.createElement('span');
      span.textContent = char;
      textElement.appendChild(span);
    });
  }

  function animateTagline() {
    var tagline = document.querySelector('.s-s4.is-loading.is-tagline');
    tagline.style.opacity = 0.2; // Reduce opacity for the entire tagline during the animation
  
    // Create spans for each character in the tagline
    createCharacterSpans(tagline, tagline.textContent);
  
    // Animate each character
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
              tagline.style.opacity = 1; // Reset opacity once all characters are done animating
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
    const originalText = "UNVEIL FROST";
    const alternateText = "CONQUER THE SEASON";

    if (button && textElement) {
      button.addEventListener('mouseover', function() {
        textElement.style.opacity = 0.2; // Reduce opacity during hover effect
        const currentText = textElement.textContent;
        const newText = currentText === originalText ? alternateText : originalText;
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
