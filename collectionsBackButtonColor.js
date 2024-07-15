document.addEventListener("DOMContentLoaded", function() {
  var currentUrl = window.location.href;
  var backWrap = document.querySelector('.collections-back_wrap');
  var targetTexts = document.querySelectorAll('.collections-back_wrap .h-h6.is-cta.is-collections-back');
  var targetSVG = document.querySelector('.collections-back_wrap svg path');

  // Function to apply styles
  function applyStyles(color, opacity) {
    if (targetSVG) {
      targetSVG.style.stroke = color; // Change the stroke color of the SVG
    }
    targetTexts.forEach(function(element) {
      element.style.color = `rgba(${parseInt(color.slice(1, 3), 16)}, ${parseInt(color.slice(3, 5), 16)}, ${parseInt(color.slice(5, 7), 16)}, ${opacity})`; // Change text fill color with opacity
      element.style.webkitTextStroke = `1px ${color}`; // Stroke color with full opacity
    });
  }

  // Function to handle hover effect
  function handleHover(color) {
    if (backWrap) {
      backWrap.addEventListener('mouseenter', function() {
        applyStyles(color, 0.2); // 20% opacity on hover
      });
      backWrap.addEventListener('mouseleave', function() {
        applyStyles(color, 0); // 0% opacity on mouse leave
      });
    }
  }

  let color;
  if (currentUrl.includes('apex-collection')) {
    color = '#A1FCCF';
  } else if (currentUrl.includes('ember-collection')) {
    color = '#FDFDCE';
  } else if (currentUrl.includes('nebula-collection')) {
    color = '#877FCB';
  }

  if (color) {
    applyStyles(color, 0.2); // Initial state with 20% opacity
    handleHover(color); // Set up hover effect
  }
});
