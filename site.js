/* eslint-disable */
/*! modernizr 3.5.0 (Custom Build) | MIT *
/* eslint-enable */
$('html').addClass('js').removeClass('no-js')

//Connect to function

var navv = document.getElementById("navigation");
var fixed = navv.offsetTop;

$(window).onscroll = function(){whileScroll(){
  if (window.pageYOffset >= fixed) {
    navbar.classList.add("fixed")
  } else {
    navbar.classList.remove("fixed");
  }};
