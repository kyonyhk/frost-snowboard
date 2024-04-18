document.addEventListener('DOMContentLoaded', function() {
  var svgElement = document.querySelector('.cp-main_svg-wrap svg');
  console.log("SVG Element:", svgElement); // Check if the SVG element is being selected

  if (svgElement) {
    var currentUrl = window.location.href;
    console.log("Current URL:", currentUrl); // Log the current URL

    var paths = svgElement.querySelectorAll('path'); // Select all path elements within the SVG
    if (currentUrl.includes('ember-collection')) {
      paths.forEach(path => path.style.fill = '#D97848');
      console.log("Color set to #D97848 for all paths");
    } else if (currentUrl.includes('nebula-collection')) {
      paths.forEach(path => path.style.fill = '#580DEB');
      console.log("Color set to #580DEB for all paths");
    } else if (currentUrl.includes('apex-collection')) {
      paths.forEach(path => path.style.fill = '#6BE688');
      console.log("Color set to #6BE688 for all paths");
    }
  } else {
    console.log("SVG element not found");
  }
});
