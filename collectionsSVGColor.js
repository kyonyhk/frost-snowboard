document.addEventListener('DOMContentLoaded', function() {
  var svgElement = document.querySelector('.cp-main_svg-wrap svg');

  console.log("SVG Element:", svgElement); // Check if the SVG element is being selected

  if (svgElement) {
    var currentUrl = window.location.href;
    console.log("Current URL:", currentUrl); // Log the current URL

    if (currentUrl.includes('ember-collection')) {
      svgElement.style.fill = '#D97848';
      console.log("Color set to #D97848");
    } else if (currentUrl.includes('nebula-collection')) {
      svgElement.style.fill = '#580DEB';
      console.log("Color set to #580DEB");
    }
  } else {
    console.log("SVG element not found");
  }
});
