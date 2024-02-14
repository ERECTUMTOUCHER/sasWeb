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
