document.addEventListener("DOMContentLoaded", function() {
  var slider = document.querySelector("#announcement-slider .slider");
  var slides = document.querySelectorAll("#announcement-slider .slide");
  var prevButton = document.querySelector("#announcement-slider .prev");
  var nextButton = document.querySelector("#announcement-slider .next");
  var slideIndex = 0;

  showSlide(slideIndex);

  function showSlide(index) {
    slides.forEach(function(slide) {
      slide.style.display = "none";
    });
    if (index >= slides.length) { slideIndex = 0; }
    if (index < 0) { slideIndex = slides.length - 1; }
    slides[slideIndex].style.display = "block";
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
});
