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

// Update nav selected
function updateNavigation() {
	var lastId,
    topMenu = $(".nav"), // Changed to match your CSS class name
    topMenuHeight = topMenu.outerHeight()+15,
    // All list items
    menuItems = topMenu.find("a"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function(){
      var item = $($(this).attr("href"));
      if (item.length) { return item; }
    });
    
   // Get container scroll position
   var fromTop = $(this).scrollTop()+topMenuHeight;
   
   // Get id of current scroll item
   var cur = scrollItems.map(function(){
     if ($(this).offset().top < fromTop)
       return this;
   });
   // Get the id of the current element
   cur = cur[cur.length-1];
   var id = cur && cur.length ? cur[0].id : "";
   
   if (lastId !== id) {
       lastId = id;
       // Set/remove active class
       menuItems
         .parent().removeClass("active")
         .end().filter("[href='#"+id+"']").parent().addClass("active");
   }                   
}

// Update slide switch highlight
function slideSwitch() {
	$('.switch-slide').on('click', function() {
		
	var activeSpan = $('.switch-toggle-slide .active');

	if (activeSpan.css('left') == '0px') {
		activeSpan.css('left', '50%');
	}
	
	if (activeSpan.css('left') == '125px') {
		activeSpan.css('left', '0');
	}
	
	if ($(this).hasClass('active-switch')) {
		$('.switch-slide').addClass('active-switch')
		$(this).removeClass('active-switch');
	}
	else {
		$('.switch-slide').removeClass('active-switch')
		$(this).addClass('active-switch');
	}
	});
}
// JavaScript (Blob)
window.addEventListener('scroll', function() {
  var container = document.getElementById('container');
  var svgBlob = document.querySelector('.svg-blob');
  var boundingClientRect = container.getBoundingClientRect();
  var blobPosition = boundingClientRect.top + window.pageYOffset;

  // Adjust this value as needed to determine when the SVG blob becomes active
  var triggerOffset = window.innerHeight * 0.5;

  if (window.pageYOffset > blobPosition - triggerOffset) {
    svgBlob.classList.add('active');
  } else {
    svgBlob.classList.remove('active');
  }
});


