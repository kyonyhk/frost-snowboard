function switchImageState(newState) {
    const allImageWraps = document.querySelectorAll('.tech_image-wrap');
    const currentActiveImageWrap = document.querySelector('.tech_image-wrap.is-active');
    const newActiveImageWrap = document.querySelector(`.tech_image-wrap.is-${newState}`);

    // Animate out the current active image
    if (currentActiveImageWrap) {
        const currentImage = currentActiveImageWrap.querySelector('img');
        gsap.to(currentImage, {
            scale: 0.8,
            opacity: 0,
            duration: 0.3,
            ease: "power4.out",
            onComplete: () => {
                currentActiveImageWrap.classList.remove('is-active');
                currentActiveImageWrap.style.display = 'none'; // Hide the image after animation
            }
        });
    }

    // Animate in the new active image
    const newImage = newActiveImageWrap.querySelector('img');
    newActiveImageWrap.style.display = 'block'; // Ensure it's visible before animation starts
    gsap.fromTo(newImage, {
        scale: 0.8,
        opacity: 0
    }, {
        scale: 1,
        opacity: 1,
        duration: 0.5,
        ease: "power4.out",
        onStart: () => {
            newActiveImageWrap.classList.add('is-active');
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
