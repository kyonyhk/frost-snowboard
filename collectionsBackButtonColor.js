document.addEventListener('DOMContentLoaded', function() {
  var backButtonSvg = document.querySelector('.collections-back_link .cta-svg');
  console.log("Back Button SVG:", backButtonSvg);

  var currentUrl = window.location.href;
  console.log("Current URL:", currentUrl); 

  function changeColor(element, color) {
    element.style.fill = color;
  }

  if (currentUrl.includes('ember-collection')) {
    changeColor(backButtonSvg, '#D97848');
    console.log("Color set to Ember theme");
  } else if (currentUrl.includes('nebula-collection')) {
    changeColor(backButtonSvg, '#580DEB');
    console.log("Color set to Nebula theme");
  } else if (currentUrl.includes('apex-collection')) {
    changeColor(backButtonSvg, '#6BE688');
    console.log("Color set to Apex theme");
  }
});
