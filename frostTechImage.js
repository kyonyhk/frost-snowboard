function switchImageState(newState) {
    const allImages = document.querySelectorAll('.tech_image-wrap img');
    const currentActiveImage = document.querySelector('.tech_image-wrap.is-active img');
    const newActiveImage = document.querySelector(`.tech_image-wrap.is-${newState} img`);

    // Animate out the current active image
    if (currentActiveImage) {
        gsap.to(currentActiveImage, {
            scale: 0.8,
            opacity: 0,
            duration: 0.3,
            ease: "power4.out",
            onComplete: () => {
                currentActiveImage.closest('.tech_image-wrap').classList.remove('is-active');
                currentActiveImage.style.display = 'none'; // Hide the image after animation
            }
        });
    }

    // Animate in the new active image
    newActiveImage.closest('.tech_image-wrap').style.display = 'block'; // Ensure it's visible before animation starts
    gsap.fromTo(newActiveImage, {
        scale: 0.8,
        opacity: 0
    }, {
        scale: 1,
        opacity: 1,
        duration: 0.5,
        ease: "power4.out",
        onStart: () => {
            newActiveImage.closest('.tech_image-wrap').classList.add('is-active');
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
