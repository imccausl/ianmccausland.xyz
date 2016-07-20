/* page-elements-display-controller.js */

/* first, when the page loads, fadein the circle and main heading */

$( function() {
	$('.circle').fadeIn(2000);
});

/* then control the appearence of the various sections as the user scrolls to reveal them */


$( function() {
	$('.site-wrap').on('scroll', function() {
		console.log($(window).scrollTop());
		var elementPos = $('.flexbox').height();
		var viewPortHeight = $(window).height();
	
		var triggerAt = -850;
		var triggerHeight = (elementPos - viewPortHeight) + triggerAt;
	
		//alert("TriggerHeight: " + triggerHeight + "; ScrollTop: " + ($('.site-wrap').scrollTop()));
		if($('.site-wrap').scrollTop() > triggerHeight) {
			$('.flexbox').fadeIn(1500);
		}
	});
});