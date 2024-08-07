// This function sets the height of elements with the 'full-height' class to be the inner height of the window
function setFullHeight() {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);

    // Apply the height to elements with the 'full-height' class
    document.querySelectorAll('.full-height').forEach(element => {
        element.style.height = `${vh * 100}px`;
    });
}

// Run the function on initial load
setFullHeight();

// Make sure to update on resize
window.addEventListener('resize', () => {
    setFullHeight();
});
