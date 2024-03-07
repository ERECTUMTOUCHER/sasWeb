<script>
document.addEventListener("DOMContentLoaded", function() {
    var slider = document.querySelector("#announcement-slider .slider");
    var slides = document.querySelectorAll("#announcement-slider .slide");
    var prevButton = document.querySelector("#announcement-slider .prev");
    var nextButton = document.querySelector("#announcement-slider .next");
    var slideIndex = 0;
    var slideInterval = 10000; // 10 seconds

    showSlide(slideIndex);

    function showSlide(index) {
        slides.forEach(function(slide) {
            slide.style.opacity = 0;
            slide.style.transition = "opacity 0.5s ease";
        });
        if (index >= slides.length) { slideIndex = 0; }
        if (index < 0) { slideIndex = slides.length - 1; }
        slides[slideIndex].style.opacity = 1;
    }

    function moveSlide(n) {
        showSlide(slideIndex += n);
    }

    prevButton.addEventListener("click", function() {
        moveSlide(-1);
    });

    nextButton.addEventListener("click", function() {
        moveSlide(1);
    });

    var slideTimer = setInterval(function() {
        moveSlide(1);
    }, slideInterval);

    slider.addEventListener("mouseenter", function() {
        clearInterval(slideTimer);
    });

    slider.addEventListener("mouseleave", function() {
        slideTimer = setInterval(function() {
            moveSlide(1);
        }, slideInterval);
    });
});

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
                                
</script>
