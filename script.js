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
        if (!this.classList.contains("disabled")) {
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
