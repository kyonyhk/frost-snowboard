document.addEventListener('DOMContentLoaded', function() {
  const button = document.querySelector('.loading_button-container');
  const textElement = document.querySelector('.s-s4.is-loading.is-preloader');
  let originalText = textElement.textContent;
  let isScrambling = false;

  button.addEventListener('mouseover', function() {
    if (!isScrambling) {
      isScrambling = true;
      let scramble = setInterval(() => {
        textElement.textContent = scrambleText(originalText); // Reuse the existing scrambleText function
      }, 50);

      setTimeout(() => {
        clearInterval(scramble);
        textElement.textContent = originalText;
        isScrambling = false;
      }, 500);
    }
  });
});
