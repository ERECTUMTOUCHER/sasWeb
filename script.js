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
</script>
