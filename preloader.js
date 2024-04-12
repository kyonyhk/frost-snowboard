document.addEventListener('DOMContentLoaded', function() {
  document.body.classList.add('no-scroll');
  var preloader = document.querySelector('.s-s3.is-loading');
  var loadingCounterWrap = document.querySelector('.loading_counter-wrap');
  var loadingTaglineWrap = document.querySelector('.loading_tagline-wrap');
  var button = document.querySelector('.loading_button-container');
  var preloaderSection = document.querySelector('.section.is-loading');
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
            initializeHoverEffect();
          });
        }, 1000); // Matches the duration of the opacity transition
      }, 1000);
    }
  }, 20);

    if (button) {
    button.addEventListener('click', function() {
      setTimeout(function() {
        // Unlock scrolling by removing the class from the body
        document.body.classList.remove('no-scroll');
      }, 5550); // Adjust this timeout to match the duration of your animation
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
  
  function scrambleCharacter(char, index, newText, originalText, alternateText) {
    let possibleChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let scrambleInterval = setInterval(() => {
      char.textContent = possibleChars.charAt(Math.floor(Math.random() * possibleChars.length));
    }, 50);
  
    setTimeout(() => {
      clearInterval(scrambleInterval);
      // Decide the final text after scrambling: either from originalText or alternateText
      const finalText = Math.random() > 0.5 ? originalText : alternateText;
      char.textContent = finalText.charAt(index);
    }, 500);
  }
  
  function initializeHoverEffect() {
    const button = document.querySelector('.loading_button-container');
    const textElement = document.querySelector('.s-s4.is-loading.is-tagline');
    const originalText = "UNVEIL FROST";
    const alternateText = "CONQUER THE SEASON";
  
    if (button && textElement) {
      button.addEventListener('mouseover', function() {
        textElement.style.opacity = 0.2;
        const currentText = textElement.textContent.trim();
        const newText = currentText === originalText ? alternateText : originalText;
        createCharacterSpans(textElement, newText);
  
        Array.from(textElement.children).forEach((charSpan, index) => {
          // Pass additional parameters to scrambleCharacter to determine the final text
          scrambleCharacter(charSpan, index, newText, originalText, alternateText);
        });
      });
  
      button.addEventListener('mouseleave', () => {
        // Reset to original text when the mouse leaves the button
        createCharacterSpans(textElement, originalText);
        gsap.to(textElement.children, { opacity: 1, duration: 0.5 });
      });
    }
  }

});
