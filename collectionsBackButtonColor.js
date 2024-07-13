document.addEventListener("DOMContentLoaded", function() {
  var currentUrl = window.location.href;
  var targetTexts = document.querySelectorAll('.collections-back_wrap .h-h6.is-cta.is-collections-back');
  var targetSVG = document.querySelector('.collections-back_wrap .cta-svg');

  // Function to apply styles
  function applyStyles(color, opacity) {
    targetSVG.style.fill = color; // Change the fill color of the SVG
    targetTexts.forEach(function(element) {
      element.style.color = `rgba(${parseInt(color.slice(1, 3), 16)}, ${parseInt(color.slice(3, 5), 16)}, ${parseInt(color.slice(5, 7), 16)}, ${opacity})`; // Change text fill color with opacity
      element.style.webkitTextStroke = `1px ${color}`; // Stroke color with full opacity
    });
  }

  if (currentUrl.includes('apex-collection')) {
    applyStyles('#A1FCCF', 0.2);
  } else if (currentUrl.includes('ember-collection')) {
    applyStyles('#FDFDCE', 0.2);
  } else if (currentUrl.includes('nebula-collection')) {
    applyStyles('#877FCB', 0.2);
  }
});
