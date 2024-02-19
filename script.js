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
document.addEventListener("DOMContentLoaded", function() {
  var instances = document.querySelectorAll(".hs__wrapper");

  instances.forEach(function(instance) {
    var arrows = instance.querySelectorAll(".arrow");
    var prevArrow = instance.querySelector('.arrow-prev');
    var nextArrow = instance.querySelector('.arrow-next');
    var box = instance.querySelector(".hs");
    var x = 0;
    var mx = 0;
    var maxScrollWidth = box.scrollWidth - (box.clientWidth / 2) - (box.offsetWidth / 2);

    arrows.forEach(function(arrow) {
      arrow.addEventListener('click', function() {
        if (this.classList.contains("arrow-next")) {
          x = ((box.offsetWidth / 2)) + box.scrollLeft - 10;
          box.scrollTo({
            left: x,
            behavior: 'smooth'
          });
        } else {
          x = ((box.offsetWidth / 2)) - box.scrollLeft - 10;
          box.scrollTo({
            left: -x,
            behavior: 'smooth'
          });
        }
      });
    });

    box.addEventListener('mousemove', function(e) {
      var mx2 = e.pageX - this.offsetLeft;
      if (mx) this.scrollLeft = this.sx + mx - mx2;
    });

    box.addEventListener('mousedown', function(e) {
      this.sx = this.scrollLeft;
      mx = e.pageX - this.offsetLeft;
    });

    box.addEventListener('scroll', function() {
      toggleArrows();
    });

    document.addEventListener("mouseup", function() {
      mx = 0;
    });

    function toggleArrows() {
      if (box.scrollLeft > maxScrollWidth - 10) {
        nextArrow.classList.add('disabled');
      } else if (box.scrollLeft < 10) {
        prevArrow.classList.add('disabled');
      } else {
        nextArrow.classList.remove('disabled');
        prevArrow.classList.remove('disabled');
      }
    }
  });
});

// JavaScript for carousel functionality
const slides = document.querySelectorAll('.slide');
let currentIndex = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.style.transform = `translateX(${(i - index) * 100}%)`;
  });
  currentIndex = index;
}

function nextSlide() {
  if (currentIndex < slides.length - 1) {
    showSlide(currentIndex + 1);
  } else {
    showSlide(0);
  }
}

function prevSlide() {
  if (currentIndex > 0) {
    showSlide(currentIndex - 1);
  } else {
    showSlide(slides.length - 1);
  }
}


