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

  // Define all functions first
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
    const currentUrl = window.location.href;
    if (currentUrl.includes('ember')) {
      setCursorColor('#FDFDCE');
    } else if (currentUrl.includes('nebula')) {
      setCursorColor('#877FCB');
    } else {
      cursor.style.borderColor = '';
      cursor.style.backgroundColor = '';
      innerCursor.style.backgroundColor = '';
      defaultCursor.style.backgroundColor = '';
    }
  }

  function initializeCursorColor() {
    resetCursorColor();
  }

  let isHovering = false;

  function setHoverEffects() {
    const hoverElements = document.querySelectorAll(
      "a, button, [data-cursor='hover'], .loading_button-container"
    );
    const emberElement = document.querySelector(
      '.collections-main_heading.link.is-clickable.is-ember'
    );
    const nebulaElement = document.querySelector(
      '.collections-main_heading.link.is-clickable.is-nebula'
    );

    hoverElements.forEach((element) => {
      element.addEventListener('mouseenter', () => {
        cursor.classList.add('hover');
        innerCursor.classList.add('hover');
        defaultCursor.style.opacity = '0';

        isHovering = true;

        if (emberElement) {
          emberElement.addEventListener('mouseenter', () => setCursorColor('#FDFDCE'));
        }
        if (nebulaElement) {
          nebulaElement.addEventListener('mouseenter', () => setCursorColor('#877FCB'));
        }
      });

      element.addEventListener('mouseleave', () => {
        cursor.classList.remove('hover');
        innerCursor.classList.remove('hover');
        defaultCursor.style.opacity = '1';
        resetCursorColor();
      });
    });
  }

  function updateCursorPosition() {
    if (isHovering) {
      // Immediate positioning when hovering
      cursorWrapper.style.transform = `translate(${}px, ${}px)`;
    } else {
      //Smooth positioning when not hovering
      let dx = mouseX - currentX;
      let dy = mouseY - currentY;
      currentX += dx * easing;
      currentY += dy * easing;
  
      cursorWrapper.style.transform = `translate(${currentX}px, ${currentY}px)`;
    }
    
    cursor.style.transform = `translate(-50%, -50%) rotate(45deg)`;

    //Always update default cursor position immediately
    defaultCursor.style.transform = `translate(${dx}px, ${dy}px) translate(-50%, -50%) rotate(45deg)`;
    
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

  // Call functions in the correct order
  initializeCursorColor();
  setHoverEffects();
  updateCursorPosition();
});
