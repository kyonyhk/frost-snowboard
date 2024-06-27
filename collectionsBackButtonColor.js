document.addEventListener('DOMContentLoaded', function() {
  var backButtonSvg = document.querySelector('.collections-back_link .cta-svg');
  var backButtonTextContainers = document.querySelectorAll('.collections-back_link .h-h6');
  console.log("Back Button SVG:", backButtonSvg);
  console.log("Back Button Text Containers:", backButtonTextContainers);

  var currentUrl = window.location.href;
  console.log("Current URL:", currentUrl); 

  function changeColor(element, strokeColor, fillColor) {
    element.style.stroke = strokeColor;
    element.style.fill = fillColor;
  }

  function changeTextColor(element, strokeColor, fillColor) {
    element.style.color = strokeColor;
    element.style.stroke = strokeColor;
    element.style.fill = fillColor;
  }

  if (currentUrl.includes('ember-collection')) {
    changeColor(backButtonSvg, '#D97848', 'rgba(217, 120, 72, 0.1)');
    backButtonTextContainers.forEach(function(text) {
      changeTextColor(text, '#D97848', 'rgba(217, 120, 72, 0.1)');
    });
    console.log("Color set to Ember theme");
  } else if (currentUrl.includes('nebula-collection')) {
    changeColor(backButtonSvg, '#580DEB', 'rgba(88, 13, 235, 0.1)');
    backButtonTextContainers.forEach(function(text) {
      changeTextColor(text, '#580DEB', 'rgba(88, 13, 235, 0.1)');
    });
    console.log("Color set to Nebula theme");
  } else if (currentUrl.includes('apex-collection')) {
    changeColor(backButtonSvg, '#6BE688', 'rgba(107, 230, 136, 0.1)');
    backButtonTextContainers.forEach(function(text) {
      changeTextColor(text, '#6BE688', 'rgba(107, 230, 136, 0.1)');
    });
    console.log("Color set to Apex theme");
  }
});
