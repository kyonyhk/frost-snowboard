document.addEventListener('DOMContentLoaded', function() {
  const button = document.querySelector('.loading_button-container');
  const textElement = document.querySelector('.s-s4.is-loading.is-preloader');
  const originalText = textElement.textContent;
  const chars = [...originalText]; // Convert string to array of characters

  button.addEventListener('mouseover', function() {
    chars.forEach((char, index) => {
      // Apply scrambleCharacter to each character
      scrambleCharacter(textElement.childNodes[index], char);
    });
  });
});
