// add classes for mobile navigation toggling
    var CSbody = document.querySelector("body");
    const CSnavbarMenu = document.querySelector("#cs-navigation");
    const CShamburgerMenu = document.querySelector("#cs-navigation .cs-toggle");

    CShamburgerMenu.addEventListener('click', function() {
        CShamburgerMenu.classList.toggle("cs-active");
        CSnavbarMenu.classList.toggle("cs-active");
        CSbody.classList.toggle("cs-open");
        // run the function to check the aria-expanded value
        ariaExpanded();
    });

    // checks the value of aria expanded on the cs-ul and changes it accordingly whether it is expanded or not 
    function ariaExpanded() {
        const csUL = document.querySelector('#cs-expanded');
        const csExpanded = csUL.getAttribute('aria-expanded');

        if (csExpanded === 'false') {
            csUL.setAttribute('aria-expanded', 'true');
        } else {
            csUL.setAttribute('aria-expanded', 'false');
        }
    }

        // This script adds a class to the body after scrolling 100px
    // and we used these body.scroll styles to create some on scroll 
    // animations with the navbar
    
    document.addEventListener('scroll', (e) => { 
        const scroll = document.documentElement.scrollTop;
        if(scroll >= 100){
    document.querySelector('body').classList.add('scroll')
        } else {
        document.querySelector('body').classList.remove('scroll')
        }
    });


    // mobile nav toggle code
    const dropDowns = Array.from(document.querySelectorAll('#cs-navigation .cs-dropdown'));
        for (const item of dropDowns) {
            const onClick = () => {
            item.classList.toggle('cs-active')
        }
        item.addEventListener('click', onClick)
        }
                                
//Announcement Board
let slideIndex = 0;
const slides = document.querySelectorAll('#announcement-slider .slide');

function showSlide(n) {
  slideIndex = (n + slides.length) % slides.length;
  const slideWidth = slides[0].clientWidth;
  document.querySelector('#announcement-slider .slider').style.transform = `translateX(-${slideIndex * slideWidth}px)`;
}

function moveSlide(n) {
  showSlide(slideIndex += n);
}

function autoSlide() {
  moveSlide(1);
}

setInterval(autoSlide, 10000); // Auto-slide every 10 seconds

showSlide(slideIndex);
//Spotify Carasol
function showMainPost(postId) {
    const mainPost = document.querySelector('.main-blogpost');
    const hoveredPost = document.getElementById(postId);

    // Clone the content of hovered blog post
    const clonedContent = hoveredPost.cloneNode(true);

    // Remove the anchor tag from the cloned content
    clonedContent.querySelector('a').remove();

    // Clear main blog post content
    mainPost.innerHTML = '';

    // Append cloned content to main blog post
    mainPost.appendChild(clonedContent);
}
