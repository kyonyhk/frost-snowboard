document.addEventListener('DOMContentLoaded', function() {
  var svgElement = document.querySelector('.cp-main_svg');

  if (svgElement) {
    var currentUrl = window.location.href;

    if (currentUrl.includes('ember-collection')) {
      // Change color for Ember Collection
      svgElement.style.fill = '#D97848';
    } else if (currentUrl.includes('nebula-collection')) {
      // Change color for Nebula Collection
      svgElement.style.fill = '#580DEB';
    }
  }
});
