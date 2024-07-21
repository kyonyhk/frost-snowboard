function initializeFrostTechTerminal() {
    function switchTerminalState(newState) {
        const allTerminals = document.querySelectorAll('.global-terminal');
        const currentActive = document.querySelector('.global-terminal.is-active');
        const newActive = document.querySelector(`.global-terminal.is-tech.is-${newState}`);
    
        // Animate out the current active terminal
        if (currentActive) {
            const paragraphs = currentActive.querySelectorAll('.paragraph.is-terminal.is-tech');
            const icon = currentActive.querySelector('.terminal-icon');
    
            gsap.to(paragraphs, {
                y: '-100%',
                duration: 0.3,
                ease: "power4.out",
                onComplete: () => {
                    currentActive.style.display = 'none'; // Hide the terminal after animation
                    currentActive.classList.remove('is-active');
                }
            });
    
            gsap.to(icon, {
                rotate: '+=90deg', // Add 90 degrees to whatever the current rotation is
                opacity: 0,
                duration: 0.3,
                ease: "power4.out"
            });
        }
    
        // Prepare and animate in the new active terminal
        newActive.style.display = 'flex'; // Ensure it's visible before animation starts
        newActive.classList.add('is-active');
    
        // Reset styles for entrance animation
        const newParagraphs = newActive.querySelectorAll('.paragraph.is-terminal.is-tech');
        const newIcon = newActive.querySelector('.terminal-icon');
    
        gsap.set(newParagraphs, {
            y: '100%', // Start below their original position
            clearProps: 'all'
        });
    
        gsap.set(newIcon, {
            x: '-300%', // Start from -300% on the x-axis
            rotate: '0deg', // Reset rotation to 0 degrees
            opacity: 0,
            clearProps: 'all'
        });
    
        // Animate them into view with initial intro animation settings
        gsap.to(newParagraphs, {
            y: '0%',
            duration: 0.5,
            ease: "power4.out",
            stagger: 0.1
        });
    
        gsap.to(newIcon, {
            x: '0%', // Animate to 0% on the x-axis
            rotate: '45deg', // Rotate to 45 degrees
            opacity: 1,
            duration: 0.5,
            ease: "power4.out"
        });
    }
    
    // Example usage, bind this to your state change triggers
    document.querySelectorAll('.tech_description-header-wrap').forEach(header => {
        header.addEventListener('click', function() {
            const newState = this.closest('.tech_description-container').classList[1].split('-')[1]; // Extracts 'quakeshift', 'thermoflux', or 'flexiweave'
            switchTerminalState(newState);
        });
    });
}
