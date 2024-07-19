document.addEventListener('DOMContentLoaded', () => {
  const cursorWrapper = document.querySelector('.cursor-wrapper');
  const cursor = document.querySelector('.cursor');
  const innerCursor = document.querySelector('.inner-cursor');
  const defaultCursor = document.querySelector('.default-cursor');

  if (!innerCursor) {
    console.error('Inner cursor element not found');
    return;
  }

  if ('ontouchstart' in window || navigator.maxTouchPoints) {
    return;
  } else {
    cursorWrapper.style.display = 'block';
    cursor.style.display = 'block';
    innerCursor.style.display = 'block';
    defaultCursor.style.display = 'block';
  }

  const colorThemes = {
    quakeshift: { primary: '#6BE688', secondary: '#A1FCCF' },
    thermoflux: { primary: '#D97848', secondary: '#FDFDCE' },
    flexiweave: { primary: '#580DEB', secondary: '#877FCB' },
  };

  let currentTheme = 'quakeshift';

  function hexToRGBA(hex, opacity) {
    let r = parseInt(hex.slice(1, 3), 16);
    let g = parseInt(hex.slice(3, 5), 16);
    let b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
  }

  function setCursorColor(hexColor) {
    const borderColor = hexColor;
    const backgroundColor = hexToRGBA(hexColor, 0.2);
    cursor.style.borderColor = borderColor;
    cursor.style.backgroundColor = backgroundColor;
    innerCursor.style.backgroundColor = hexColor;
    defaultCursor.style.backgroundColor = hexColor;
  }

  function resetCursorColor() {
    const primaryColor = colorThemes[currentTheme].primary;
    setCursorColor(primaryColor);
  }

  function initializeCursorColor() {
    resetCursorColor();
  }

  let isClicking = false;

  function handleMouseDown(e) {
    isClicking = true;
    cursor.classList.add('clicking');
    innerCursor.classList.add('clicking');
    innerCursor.style.transform = 'translate(-50%, -50%) rotate(225deg)';
  }

  function handleMouseUp(e) {
    isClicking = false;
    cursor.classList.remove('clicking');
    innerCursor.classList.remove('clicking');
    innerCursor.style.transform = 'translate(-50%, -50%) rotate(45deg)';
  }

  // Attach event listeners to the document
  document.addEventListener('mousedown', handleMouseDown, true);
  document.addEventListener('mouseup', handleMouseUp, true);

  let isHovering = false;

  function setHoverEffects() {
    const hoverElements = document.querySelectorAll(
      "a, button, [data-cursor='hover'], .loading_button-container, .tech_description-header-wrap"
    );

    hoverElements.forEach((element) => {
      element.addEventListener('mouseenter', () => {
        cursor.classList.add('hover');
        innerCursor.classList.add('hover');
        defaultCursor.style.opacity = '0';

        isHovering = true;
      });

      element.addEventListener('mouseleave', () => {
        cursor.classList.remove('hover');
        innerCursor.classList.remove('hover');
        defaultCursor.style.opacity = '1';
        isHovering = false;
        resetCursorColor();
      });
    });
  }

  function updateCursorPosition() {
    if (isHovering || isClicking) {
      // Immediate positioning when hovering or clicking
      cursorWrapper.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
    } else {
      // Smooth positioning when not hovering or clicking
      let dx = mouseX - currentX;
      let dy = mouseY - currentY;
      currentX += dx * easing;
      currentY += dy * easing;

      cursorWrapper.style.transform = `translate(${currentX}px, ${currentY}px)`;
    }

    cursor.style.transform = `translate(-50%, -50%) rotate(45deg)`;

    // Always update default cursor position immediately
    defaultCursor.style.transform = `translate(${mouseX - currentX}px, ${mouseY - currentY}px) translate(-50%, -50%) rotate(45deg)`;

    innerCursor.style.left = '0px';
    innerCursor.style.top = '0px';
    innerCursor.style.transform = 'translate(-50%, -50%) rotate(45deg)';

    requestAnimationFrame(updateCursorPosition);
  }

  // Initialize variables and event listeners
  let mouseX = 0;
  let mouseY = 0;
  let currentX = 0;
  let currentY = 0;
  const easing = 0.15;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    if (isHovering) {
      currentX = mouseX;
      currentY = mouseY;
    }
  });

  // Update color theme when category changes
  function updateColorTheme(newCategory) {
    currentTheme = newCategory;
    resetCursorColor();
  }

  // Call functions in the correct order
  initializeCursorColor();
  setHoverEffects();
  updateCursorPosition();

  // Listen for category changes from the Frost Tech page
  document.addEventListener('categoryChange', (e) => {
    updateColorTheme(e.detail.newCategory);
  });
});
