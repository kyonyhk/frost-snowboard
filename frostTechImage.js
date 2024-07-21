function initializeFrostTechImage() {
    function switchImageState(newState) {
        const allImages = document.querySelectorAll('.img.is-tech-image');
        const currentActiveImage = document.querySelector('.img.is-tech-image.is-active');
        const newActiveImage = document.querySelector(`.img.is-tech-image.is-${newState}`);
        const currentActiveImageWrap = document.querySelector('.tech_image-wrap.is-active')
        const newActiveImageWrap = document.querySelector(`.tech_image-wrap.is-${newState}`)
    
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
                    currentActiveImageWrap.classList.remove('is-active');
                    currentActiveImageWrap.style.display = 'none';
                }
            });
        }
    
        // Animate in the new active image
        const newImage = newActiveImage;
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
                newActiveImageWrap.classList.add('is-active');
                newActiveImageWrap.style.display = 'flex';
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
}

// Ensure the function is accessible globally
window.initializeFrostTechImage = initializeFrostTechImage;

