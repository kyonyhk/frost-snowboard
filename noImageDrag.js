document.addEventListener('DOMContentLoaded', function() {
    // Select all images on the page
    var images = document.getElementsByTagName('img');

    // Disable dragstart event for each image
    for (var i = 0; i < images.length; i++) {
        images[i].addEventListener('dragstart', function(event) {
            event.preventDefault(); // This prevents the drag
        });
    }
});
