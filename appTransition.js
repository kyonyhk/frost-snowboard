document.addEventListener('DOMContentLoaded', function() {
  console.log('DOMContentLoaded event fired');
  const app = document.querySelector('.app');
  
  // Ensure the page starts with the fade-in effect
  if (app) {
    app.classList.add('fade-in');
    setTimeout(() => {
      app.classList.remove('fade-in');
      console.log('Removed fade-in class from .app element');
    }, 1000); // Match this duration with your CSS transition duration
  }

  // Function to handle the fade-out effect
  function handleFadeOut(event) {
    console.log('Link clicked:', event.target.closest('a').href); // Log the clicked link
    if (app) {
      app.classList.add('fade-out');
      console.log('Applied fade-out class to .app element');
    }
    // Delay navigation to allow the fade-out effect to complete
    event.preventDefault();
    setTimeout(() => {
      window.location.href = event.target.closest('a').href;
    }, 1000); // Match this duration with your CSS transition duration
  }

  // Add event listeners to all internal links
  const internalLinks = document.querySelectorAll('a[href^="/"]');
  if (internalLinks.length > 0) {
    console.log('Found internal links:', internalLinks.length);
    internalLinks.forEach(link => {
      if (link.classList.contains('frost-tech-intro_link')) {
        // For the specific frost-tech link, add the event listener to the link itself
        link.addEventListener('click', handleFadeOut);
      } else {
        // For other links, add the event listener as before
        link.addEventListener('click', handleFadeOut);
      }
    });
  } else {
    console.log('No internal links found');
  }
});
