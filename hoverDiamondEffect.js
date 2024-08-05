document.addEventListener('DOMContentLoaded', () => {
    const grid = document.querySelector('.hover-grid');
    let lastKnownPosition = null;
    let ticking = false;
    const gridSize = 60; 

    function createCircles() {
        const circleCount = gridSize * gridSize; 
        for (let i = 0; i < circleCount; i++) {
            let circle = document.createElement('div');
            circle.classList.add('circle');
            grid.appendChild(circle);
        }
    }

    createCircles();

    function handleMove(e) {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                if (lastKnownPosition) {
                    const circles = document.querySelectorAll('.circle');
                    const bounds = grid.getBoundingClientRect();
                    const circleWidth = bounds.width / gridSize;
                    const circleHeight = bounds.height / gridSize;

                    const scaleFactor = 100 / Math.min(bounds.width, bounds.height);

                    const clientX = e.touches ? e.touches[0].clientX : lastKnownPosition.x;
                    const clientY = e.touches ? e.touches[0].clientY : lastKnownPosition.y;

                    function dropShadow() {
                        boxShadow = "0px 0px 10px 0px #6BE688";
                    }

                    circles.forEach(circle => {
                        //Pixel based
                        const circleBounds = circle.getBoundingClientRect();
                        const circleCenterX = circleBounds.left + circleBounds.width / 2;
                        const circleCenterY = circleBounds.top + circleBounds.height / 2;
                        const mouseX = clientX;
                        const mouseY = clientY;
                        const dx = mouseX - circleCenterX;
                        const dy = mouseY - circleCenterY;
                        const distance = Math.sqrt(dx * dx + dy * dy);

                        let opacity, transform, borderRadius, backgroundColor, boxShadow;

                        if (distance < 30) {
                            opacity = 1;
                            transform = 'rotate(135deg)';
                            borderRadius = "4px";
                            backgroundColor = "rgba(161, 252, 207, 0.10)";
                            boxShadow = "0px 0px 20px 0px #6BE688";
                        } else if (distance < 60) {
                            opacity = 0.7;
                            transform = 'rotate(135deg)';
                            borderRadius = "4px";
                            backgroundColor = "rgba(161, 252, 207, 0.10)";
                            boxShadow = "0px 0px 15px 0px #6BE688";
                        } else if (distance < 90) {
                            opacity = 0.4;
                            transform = 'rotate(135deg)';
                            borderRadius = "4px";
                            backgroundColor = "rgba(161, 252, 207, 0.10)";
                            boxShadow = "0px 0px 10px 0px #6BE688";
                        } else {
                            opacity = 0.2;
                            transform = 'rotate(-45deg)';
                            borderRadius = "100px";
                            backgroundColor = "";
                            boxShadow = "";
                        }

                        circle.style.opacity = opacity;
                        circle.style.transform = transform;
                        circle.style.borderRadius = borderRadius;
                        circle.style.backgroundColor = backgroundColor;
                        circle.style.boxShadow = boxShadow;
                    });
                }
                ticking = false;
            });

            ticking = true;
        }
    }

    function handleMouseMove(e) {
        lastKnownPosition = { x: e.clientX, y: e.clientY };
        handleMove(e);
    }

    function handleTouchMove(e) {
        if (e.touches.length > 0) {
            const touch = e.touches[0];
            lastKnownPosition = { x: touch.clientX, y: touch.clientY };
            handleMove(e);
        }
    }

    grid.addEventListener('mousemove', handleMouseMove);
    grid.addEventListener('touchmove', handleTouchMove);
});
