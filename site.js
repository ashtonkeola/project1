// I looked up guides to help with fixing the navigation while scrolling
// I used this site as a reference to guide me: https://www.w3schools.com/howto/howto_js_navbar_sticky.asp
// Grab the navigation bar
var navbar = document.getElementById('navigation');

// Grab the position of the bar
var topPosition = navbar.offsetTop;

// Calls the function while scrolling
window.onscroll = function() {whileScroll();};

// Fix the navigation to the top while scrolling
// Else statement tells the navigation to stay at original space
function whileScroll() {
  if (window.pageYOffset >= topPosition) {
    navbar.classList.add("fixed");
  } else {
    navbar.classList.remove("fixed");
  }
}

$.noConflict();

// Re-introduce $ scope to self executing function
(function($) {

  $(document).ready(function(){

    // Slide show function on main page
    $(function(){
      $('.slideshow img:gt(0)').hide();
      setInterval(function(){
        $('.slideshow :first-child').hide()
          .next('img').fadeIn(1000)
          .end().appendTo('.slideshow');},
      5000);
    });

  });

})(jQuery);
