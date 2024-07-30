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
    const flexiweaveActive = document.querySelector('.tech_description-container.is-flexiweave.is-active');
    const thermofluxActive = document.querySelector('.tech_description-container.is-thermoflux.is-active');
    const quakeshiftActive = document.querySelector('.tech_description-container.is-quakeshift.is-active');

    if (flexiweaveActive) {
      setCursorColor('#877FCB');
    } else if (thermofluxActive) {
      setCursorColor('#FDFDCE');
    } else if (quakeshiftActive) {
      setCursorColor('#6BE688'); // Default green color
    } else if (currentUrl.includes('ember')) {
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

  let isClicking = false;

  function handleMouseDown(e) {
    isClicking = true;
    cursor.classList.add('clicking');
    innerCursor.classList.add('clicking');
    innerCursor.style.transform = 'translate(-50%, -50%) rotate(225deg)';
    console.log('Mouse down'); // Debugging line
  }

  function handleMouseUp(e) {
    isClicking = false;
    cursor.classList.remove('clicking');
    innerCursor.classList.remove('clicking');
    innerCursor.style.transform = 'translate(-50%, -50%) rotate(45deg)';
    console.log('Mouse up'); // Debugging line
  }

  // Attach event listeners to the document
  document.addEventListener('mousedown', handleMouseDown, true);
  document.addEventListener('mouseup', handleMouseUp, true);

  let isHovering = false;

  function setHoverEffects() {
    const hoverElements = document.querySelectorAll(
      "a, button, [data-cursor='hover'], .loading_button-container, .tech_description-header-wrap"
    );
    const navbarLinks = document.querySelectorAll('.global-navbar-link, .global-navbar_back-link');
  
    const emberElement = document.querySelector(
      '.collections-main_heading.link.is-clickable.is-ember'
    );
    const nebulaElement = document.querySelector(
      '.collections-main_heading.link.is-clickable.is-nebula'
    );
  
    function handleMouseEnter(element) {
      cursor.classList.remove('hover', 'blur-default', 'blur-navbar');
      cursor.classList.add('hover');
      innerCursor.classList.add('hover');
      defaultCursor.style.opacity = '0';
      isHovering = true;
  
      if (element.classList.contains('global-navbar-link') || element.classList.contains('global-navbar_back-link')) {
        cursor.classList.add('blur-navbar');
      } else if (hoverElements || emberElements || nebulaElements) {
        cursor.classList.add('blur-default');
      }
  
      if (element === emberElement) {
        setCursorColor('#FDFDCE');
      } else if (element === nebulaElement) {
        setCursorColor('#877FCB');
      }
    }
  
    function handleMouseLeave() {
      cursor.classList.remove('hover', 'blur-default', 'blur-navbar');
      innerCursor.classList.remove('hover');
      defaultCursor.style.opacity = '1';
      isHovering = false;
      resetCursorColor();
    }
  
    hoverElements.forEach((element) => {
      element.addEventListener('mouseenter', () => handleMouseEnter(element));
      element.addEventListener('mouseleave', handleMouseLeave);
    });
  
    navbarLinks.forEach((link) => {
      link.addEventListener('mouseenter', () => handleMouseEnter(link));
      link.addEventListener('mouseleave', handleMouseLeave);
    });
  }

  function updateCursorPosition() {
    if (isHovering || isClicking) {
      // Immediate positioning when hovering or clicking
      cursorWrapper.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
    } else {
      //Smooth positioning when not hovering or clicking
      let dx = mouseX - currentX;
      let dy = mouseY - currentY;
      currentX += dx * easing;
      currentY += dy * easing;
  
      cursorWrapper.style.transform = `translate(${currentX}px, ${currentY}px)`;
    }
    
    cursor.style.transform = `translate(-50%, -50%) rotate(45deg)`;

    //Always update default cursor position immediately
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

  // Call functions in the correct order
  initializeCursorColor();
  setHoverEffects();
  updateCursorPosition();

  // Update the cursor color when a category is selected on the Frost Tech page
  const techOptions = document.querySelectorAll('.tech_description-header-wrap');
  techOptions.forEach(option => {
    option.addEventListener('click', () => {
      setTimeout(resetCursorColor, 10); // Slight delay to ensure the class change is detected
    });
  });
});
