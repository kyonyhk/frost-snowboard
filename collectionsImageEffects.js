document.addEventListener('DOMContentLoaded', function() {
    const mainImageContainer = document.querySelector('.cp_main-image-container img');
    const marqueeImages = document.querySelectorAll('.cp_infinite-marquee-image-wrap img');
    let originalMainImageSrc = mainImageContainer.src;

    marqueeImages.forEach(img => {
        // Hover functionality
        img.addEventListener('mouseenter', function() {
            mainImageContainer.src = this.src;
        });

        img.addEventListener('mouseleave', function() {
            mainImageContainer.src = originalMainImageSrc;
        });

        // Click functionality
        img.addEventListener('click', function() {
            originalMainImageSrc = this.src;
            mainImageContainer.src = this.src;
        });
    });
});
