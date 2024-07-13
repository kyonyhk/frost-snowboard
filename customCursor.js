document.addEventListener("DOMContentLoaded", () => {
  const cursorWrapper = document.querySelector(".cursor-wrapper");
  const cursor = document.querySelector(".cursor");
  const innerCursor = document.querySelector(".inner-cursor");
  
  if (!innerCursor) {
    console.error("Inner cursor element not found");
    return;
  }

  let mouseX = 0;
  let mouseY = 0;
  let cursorX = 0;
  let cursorY = 0;
  const lagFactor = 0.15; // Adjust this value to change the amount of lag (0.1 to 0.2 is usually good)

  function updateCursorPosition() {
    cursorX += (mouseX - cursorX) * lagFactor;
    cursorY += (mouseY - cursorY) * lagFactor;

    cursorWrapper.style.transform = `translate(${cursorX}px, ${cursorY}px)`;
    cursor.style.transform = `translate(-50%, -50%)`;

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
    });

    element.addEventListener("mouseleave", () => {
      cursor.classList.remove("hover");
      innerCursor.classList.remove("hover");
    });
  });
});
