document.addEventListener('DOMContentLoaded', function() {
  var backButtonSvg = document.querySelector('.frost-tech-back_link .cta-svg');
  console.log("Back Button SVG:", backButtonSvg);

  if (!backButtonSvg) {
    console.error("SVG element not found. Please check the class names and structure.");
    return;
  }

  var currentUrl = window.location.href;
  console.log("Current URL:", currentUrl);

  function changeColor(element, color) {
    element.style.fill = color;
    console.log(`Changed color of ${element} to ${color}`);
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
  } else {
    console.log("No matching URL pattern found. No color change applied.");
  }
});
