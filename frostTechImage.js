function switchImageState(newState) {
    const allImages = document.querySelectorAll('.img.is-tech-image');
    const currentActiveImage = document.querySelector('.img.is-tech-image.is-active');
    const newActiveImage = document.querySelector(`.img.is-tech-image.is-${newState}`);

    // Animate out the current active image
    if (currentActiveImage) {
        const currentImage = currentActiveImage;
        gsap.to(currentImage, {
            scale: 0.8,
            opacity: 0,
            duration: 0.3,
            ease: "power4.out",
            onComplete: () => {
                currentActiveImage.classList.remove('is-active');
                currentActiveImage.style.display = 'none'; // Hide the image after animation
            }
        });
    }

    // Animate in the new active image
    const newImage = newActiveImage;
    newActiveImage.style.display = 'block'; // Ensure it's visible before animation starts
    gsap.fromTo(newImage, {
        scale: 0.8,
        opacity: 0
    }, {
        scale: 1,
        opacity: 1,
        duration: 0.5,
        ease: "power4.out",
        onStart: () => {
            newActiveImage.classList.add('is-active');
        }
    });
}

// Example usage, bind this to your state change triggers
document.querySelectorAll('.tech_description-header-wrap').forEach(header => {
    header.addEventListener('click', function() {
        const newState = this.closest('.tech_description-container').classList[1].split('-')[1]; // Extracts 'quakeshift', 'thermoflux', or 'flexiweave'
        switchImageState(newState);
    });
});
