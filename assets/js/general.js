$( document ).ready(function() {
    console.log( "document loaded" );
});
$( window ).load(function() {
    console.log( "window loaded" );
});
$(document).ready(function(){
  $('ul li a').click(function(){
    $('li a').removeClass("active");
    $(this).addClass("active");
});
});
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener('click', ()=>{
   //Animate Links
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });

    //Hamburger Animation
    hamburger.classList.toggle("toggle");
    
});


// $("#navButton").click(function() {
// $('.nav-menu').toggleClass('expand');
// $(".menu").slideToggle();
// });

  // $('#navButton').on('click', function(){
  //   $('.navbar').toggleClass('expand');
  //   return false;
  // });

jQuery(document).ready(function(){
	
	jQuery('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');

		jQuery('ul.tabs li').removeClass('current');
		jQuery('.tab-content').removeClass('current');

		jQuery(this).addClass('current');
		jQuery("#"+tab_id).addClass('current');
	})

});
var typed = new Typed(".multiple-text", {
	strings: ["Web Designer","UI / UX Designer","App Designer","Graphic Designer" ],
	typeSpeed: 100,
	backSpeed: 100,
	backDelay: 1000,
	loop: true
});
// fade in grid items  ==================================

  $(document).on("scroll", function () {
    var pageTop = $(document).scrollTop()
    var pageBottom = pageTop + $(window).height()
    var tags = $(".fadein")

    for (var i = 0; i < tags.length; i++) {
      var tag = tags[i]

      if ($(tag).offset().top < pageBottom) {
        $(tag).addClass("visible")
      } else {
        $(tag).removeClass("visible")
      }
    }
  })

  $('.owl-carousel').owlCarousel({
    loop:true,
    nav:true,
    margin:10,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
});

jQuery(window).scroll(function(){
  if (jQuery(this).scrollTop() > 50) {
     jQuery('#header-area').addClass('newclass');
  } else {
     jQuery('#header-area').removeClass('newclass');
  }
});


    var btn = $('#back-to-top');

    $(window).scroll(function() {
      if ($(window).scrollTop() > 300) {
        btn.addClass('show');
      } else {
        btn.removeClass('show');
      }
    });
    
    btn.on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({scrollTop:0}, '300');
    });
    
    
