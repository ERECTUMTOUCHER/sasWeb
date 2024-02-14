// Your JavaScript code can go here

// Example JavaScript code to add interactivity
document.addEventListener('DOMContentLoaded', function() {
    // Code to execute after the DOM has loaded
    console.log('DOM content loaded');

    // Example: Change the text color of the header on click
    const header = document.querySelector('header');
    header.addEventListener('click', function() {
        header.style.color = getRandomColor();
    });
});

// Example function to generate random color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
document.querySelectorAll('.link').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = e.target.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    smoothScroll(targetElement);
  });
});

function smoothScroll(target) {
  const startPos = window.pageYOffset;
  const targetPos = target.getBoundingClientRect().top + window.pageYOffset;
  const distance = targetPos - startPos;
  const duration = 1000; // in milliseconds
  let startTime = null;

  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const run = ease(timeElapsed, startPos, distance, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  }

  function ease(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
  }

  requestAnimationFrame(animation);
}
