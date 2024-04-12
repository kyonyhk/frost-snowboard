document.addEventListener('mousemove', function(e) {
    var glow = document.querySelector('.glow-effect');
    glow.style.left = e.pageX + 'px';
    glow.style.top = e.pageY + 'px';
});

document.addEventListener('mouseover', function(e) {
    if (e.target.matches('a, button, input[type="button"], input[type="submit"], label[for], select, .custom-link, .is-clickable')) { // Match clickable elements
        document.querySelector('.glow-effect').style.display = 'block';
    }
});

document.addEventListener('mouseout', function(e) {
    if (e.target.matches('a, button, input[type="button"], input[type="submit"], label[for], select, .custom-link, .is-clickable')) {
        document.querySelector('.glow-effect').style.display = 'none';
    }
});
