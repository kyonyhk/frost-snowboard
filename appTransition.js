document.addEventListener('DOMContentLoaded', function() {
  console.log('DOMContentLoaded event fired');

  // Apply the fade-in effect when the page loads
  const app = document.querySelector('.app');
  if (app) {
    console.log('Found .app element');
    app.classList.add('fade-in');
  } else {
    console.log('Could not find .app element');
  }

  // Function to handle the fade-out effect
  function handleFadeOut(event) {
    event.preventDefault(); // Prevent the default link behavior

    const link = event.currentTarget;
    const href = link.getAttribute('href');

    console.log('Navigating to:', href);

    if (app) {
      app.classList.remove('fade-in');
      app.classList.add('fade-out');
      console.log('Applied fade-out class to .app element');
    }

    // Wait for the fade-out transition to complete before navigating
    setTimeout(() => {
      console.log('Navigating to new page:', href);
      window.location.href = href;
    }, 1000); // Match this duration with your CSS transition duration
  }

  // Attach event listeners to all internal links
  const internalLinks = document.querySelectorAll('a[href^="/"]');
  if (internalLinks.length > 0) {
    console.log('Found internal links:', internalLinks.length);
    internalLinks.forEach(link => {
      link.addEventListener('click', handleFadeOut);
    });
  } else {
    console.log('No internal links found');
  }

  // Ensure the page starts with the fade-in effect
  window.addEventListener('pageshow', () => {
    console.log('pageshow event fired');
    if (app) {
      app.classList.add('fade-in');
      console.log('Re-applied fade-in class to .app element');
    }
  });
});
