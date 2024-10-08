document.addEventListener('DOMContentLoaded', function() {
  var svgElements = document.querySelectorAll('.cp-main_svg'); // Select all SVG elements

  var currentUrl = window.location.href;

  svgElements.forEach(function(svg) {
    var paths = svg.querySelectorAll('path'); // Select all path elements within each SVG
    if (currentUrl.includes('ember-collection')) {
      paths.forEach(path => path.style.fill = '#D97848');
    } else if (currentUrl.includes('nebula-collection')) {
      paths.forEach(path => path.style.fill = '#580DEB');
    } else if (currentUrl.includes('apex-collection')) {
      paths.forEach(path => path.style.fill = '#6BE688');
    }
  });
});
