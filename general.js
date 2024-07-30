$( document ).ready(function() {
    console.log( "document loaded" );
});
$( window ).load(function() {
    console.log( "window loaded" );
});

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
	strings: ["Student","Hacker","Programmer","Physics Enthutiast","Dreamer" ],
	typeSpeed: 100,
	backSpeed: 100,
	backDelay: 1000,
	loop: true
})