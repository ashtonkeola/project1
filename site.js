// When the user scrolls the page, execute myFunction
window.onscroll = function() {whileScroll()};

// Get the navbar
var navbar = document.getElementById('navigation');

// Get the offset position of the navbar
var topPosition = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function whileScroll() {
  if (window.pageYOffset >= topPosition) {
    navbar.classList.add("fixed")
  } else {
    navbar.classList.remove("fixed");
  }
}
