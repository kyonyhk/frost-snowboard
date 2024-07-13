document.addEventListener("DOMContentLoaded", () => {
  const cursorWrapper = document.querySelector(".cursor-wrapper");
  const cursor = document.querySelector(".cursor");
  const innerCursor = document.querySelector(".inner-cursor");
  const defaultCursor = document.querySelector(".default-cursor")
  
  if (!innerCursor) {
    console.error("Inner cursor element not found");
    return;
  }

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

    cursorWrapper.style.transform = `translate(${currentX}px, ${currentY}px)`;
    cursor.style.transform = `translate(-50%, -50%) rotate(45deg)`;
    defaultCursor.style.transform = `translate(${dx}px, ${dy}px) translate(-50%, -50%) rotate(45deg)`;

    // Inner cursor positioning
    innerCursor.style.left = '0px';
    innerCursor.style.top = '0px';
    innerCursor.style.transform = 'translate(-50%, -50%) rotate(45deg)';

    requestAnimationFrame(updateCursorPosition);
  }

  document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  updateCursorPosition();


  const hoverElements = document.querySelectorAll("a, button, [data-cursor='hover'], .loading_button-container");

  hoverElements.forEach((element) => {
    element.addEventListener("mouseenter", () => {
      cursor.classList.add("hover");
      innerCursor.classList.add("hover");
      defaultCursor.style.opacity = "0";
    });

    element.addEventListener("mouseleave", () => {
      cursor.classList.remove("hover");
      innerCursor.classList.remove("hover");
      defaultCursor.style.opacity = "1";
    });
  });
});
