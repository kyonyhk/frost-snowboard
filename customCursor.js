document.addEventListener("DOMContentLoaded", () => {
  const cursorWrapper = document.querySelector(".cursor-wrapper");
  const cursor = document.querySelector(".cursor");
  const innerCursor = document.querySelector(".inner-cursor");
  const defaultCursor = document.querySelector(".default-cursor")
  
  if (!innerCursor) {
    console.error("Inner cursor element not found");
    return;
  }

  if ('ontouchstart' in window || navigator.maxTouchPoints) {
    // Early exit if a touch device is detected
    return;
  } else {
    // Show cursors only for non-touch devices
    cursorWrapper.style.display = 'block';
    cursor.style.display = 'block';
    innerCursor.style.display = 'block';
    defaultCursor.style.display = 'block';
  }

  // Mouse follow
  let mouseX = 0;
  let mouseY = 0;
  let currentX = 0;
  let currentY = 0;
  const easing = 0.15; // Adjust this value to change the smoothness (lower = smoother)

  function easeOutExpo(t) {
    return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
  }

  function updateCursorPosition() {
    // Calculate the distance to move
    let dx = mouseX - currentX;
    let dy = mouseY - currentY;

    // Apply easing
    currentX += dx * easing;
    currentY += dy * easing;

    // Update cursor wrapper position (smooth movement)
    cursorWrapper.style.transform = `translate(${currentX}px, ${currentY}px)`;

    // Update default cursor position (immediate)
    defaultCursor.style.transform = `translate(${mouseX - currentX}px, ${mouseY - currentY}px) translate(-50%, -50%) rotate(45deg)`;

    //Update hover state position (immediate)
    hoverX = mouseX - currentX;
    hoverY = mouseY - currentY;

    // Update hover elements position
    cursor.style.transform = `translate(${hoverX}px, ${hoverY}px) translate(-50%, -50%) rotate(45deg)`;
    innerCursor.style.transform = `translate(${hoverX}px, ${hoverY}px) translate(-50%, -50%) rotate(45deg)`;

    requestAnimationFrame(updateCursorPosition);
  }

  document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    // Immediately update hover position
    hoverX = mouseX - currentX;
    hoverY = mouseY - currentY;

    // Immediately update hover elements
    cursor.style.transform = `translate(${hoverX}px, ${hoverY}px) translate(-50%, -50%) rotate(45deg)`;
    innerCursor.style.transform = `translate(${hoverX}px, ${hoverY}px) translate(-50%, -50%) rotate(45deg)`;
  });

  updateCursorPosition();

  // Hover effects
  const hoverElements = document.querySelectorAll("a, button, [data-cursor='hover'], .loading_button-container");
  const emberElement = document.querySelector('.collections-main_heading.link.is-clickable.is-ember');
  const nebulaElement = document.querySelector('.collections-main_heading.link.is-clickable.is-nebula');

  // Helper function to convert hex to RGBA
  function hexToRGBA(hex, opacity) {
      let r = parseInt(hex.slice(1, 3), 16);
      let g = parseInt(hex.slice(3, 5), 16);
      let b = parseInt(hex.slice(5, 7), 16);
  
      return `rgba(${r}, ${g}, ${b}, ${opacity})`;
  }
  
  function setCursorColor(hexColor) {
      const borderColor = hexColor; // Full opacity for border
      const backgroundColor = hexToRGBA(hexColor, 0.2); // 20% opacity for cursor background
  
      cursor.style.borderColor = borderColor;
      cursor.style.backgroundColor = backgroundColor;
      innerCursor.style.backgroundColor = hexColor; // Full opacity for inner cursor
      defaultCursor.style.backgroundColor = hexColor; // Full opacity for default cursor
  }
  
  function resetCursorColor() {
      cursor.style.borderColor = '';
      cursor.style.backgroundColor = '';
      innerCursor.style.backgroundColor = '';
      defaultCursor.style.backgroundColor = '';
  }

  hoverElements.forEach((element) => {
    element.addEventListener("mouseenter", () => {
      cursor.classList.add("hover");
      innerCursor.classList.add("hover");
      defaultCursor.style.opacity = "0";

      // Ensure immediate position on hover
      cursor.style.transition = 'none';
      innerCursor.style.transition = 'none';
    });

    element.addEventListener("mouseleave", () => {
      cursor.classList.remove("hover");
      innerCursor.classList.remove("hover");
      defaultCursor.style.opacity = "1";
      resetCursorColor();

      // Restore transitions after leaving hover state
      cursor.style.transition = '';
      innerCursor.style.transition = '';
    });    
  });

  if (emberElement) {
    emberElement.addEventListener("mouseenter", () => {
      setCursorColor("#FDFDCE");
    });
  }

  if (nebulaElement) {
    nebulaElement.addEventListener("mouseenter", () => {
      setCursorColor("#877FCB");
    });
  }
});
