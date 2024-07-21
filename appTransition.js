document.addEventListener('DOMContentLoaded', function() {
  console.log('DOMContentLoaded event fired');
  const body = document.body;
  const app = document.querySelector('.app');

  // Function to fade in the content
  function fadeInContent() {
    console.log('Fading in content');
    body.classList.remove('content-hidden');
  }

  // Call the fade-in function after a short delay to ensure smooth transition
  setTimeout(fadeInContent, 50);

  // Function to handle the fade-out effect
  function handleFadeOut(event) {
    const link = event.target.closest('a');
    if (!link) return;  // Exit if the click wasn't on a link or its children

    console.log('Link clicked:', link.href);
    event.preventDefault();

    if (app) {
      app.classList.add('fade-out');
      console.log('Applied fade-out class to .app element');
    }

    // Delay navigation to allow the fade-out effect to complete
    setTimeout(() => {
      window.location.href = link.href;
    }, 1000); // Match this duration with your CSS transition duration
  }

  // Add event listeners to all internal links
  const internalLinks = document.querySelectorAll('a[href^="/"]');
  if (internalLinks.length > 0) {
    console.log('Found internal links:', internalLinks.length);
    internalLinks.forEach(link => {
      link.addEventListener('click', handleFadeOut);
    });
  } else {
    console.log('No internal links found');
  }
});
