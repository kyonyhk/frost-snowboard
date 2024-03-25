document.addEventListener('DOMContentLoaded', function() {
  var preloader = document.querySelector('.s-s3.is-loading'); 
  var load = 0;
  var interval = setInterval(function() {
    load++;
    if (preloader) {
      preloader.textContent = load + '%'; 
    }
    if (load >= 100) {
      clearInterval(interval);
    }
  }, 20); 
});
