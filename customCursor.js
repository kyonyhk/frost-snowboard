document.addEventListener("DOMContentLoaded", () => {
  const cursorWrapper = document.querySelector(".cursor-wrapper");
  const cursor = document.querySelector(".cursor");
  const innerCursor = document.querySelector(".inner-cursor");
  
  if (!innerCursor) {
    console.error("Inner cursor element not found");
    return;
  }

  document.addEventListener("mousemove", (e) => {
      requestAnimationFrame(() => {
        cursorWrapper.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
        cursor.style.transform = `translate(-50%, -50%)`;
        innerCursor.style.left = '50%';
        innerCursor.style.top = '50%';
        innerCursor.style.transform = 'translate(-50%, -50%)';
      });
  });

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
