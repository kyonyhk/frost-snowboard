document.addEventListener("DOMContentLoaded", function() {
    // Find the hover trigger elements
    const hoverEmber = document.querySelectorAll('.collections-main_heading.link.is-clickable.is-ember');
    const hoverNebula = document.querySelectorAll('.collections-main_heading.link.is-clickable.is-nebula');

    // Function to change the color of the SVG
    function changeSvgColor(color) {
        const svgPaths = document.querySelectorAll('.collections-svg path');
        svgPaths.forEach(path => {
            path.setAttribute('fill', color);
        });
    }

    // Add event listeners
    hoverEmber.forEach(element => {
        element.addEventListener('mouseenter', () => changeSvgColor('#D97848')); // Change to desired color on hover
        element.addEventListener('mouseleave', () => changeSvgColor('#6BE688')); // Change back to original color
    });

    hoverNebula.forEach(element => {
        element.addEventListener('mouseenter', () => changeSvgColor('#580DEB')); // Change to desired color on hover
        element.addEventListener('mouseleave', () => changeSvgColor('#6BE688')); // Change back to original color
    });
});
