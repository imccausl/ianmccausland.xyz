var idleTimer = null;
var idleState = false;
var idleWait = 5000;
var animateTimer = null;
var animateWait = 10000;

(function ($) {
	$(document).ready(function () {
		$('*').bind('mousemove keydown scroll', function () {
			clearTimeout(idleTimer);
			
			if (idleState == true) {
				$('#scroll-indicator').removeClass('idle-user');
			}
			
			idleState = false;
			idleTimer = setTimeout( function() {
				$('#scroll-indicator').addClass('idle-user');
				
				idleState = true; 
				
				// wait 10 seconds for the animation to finish
				animateTimer = setTimeout( function() {
					idleWait = 7000; // set a new idle wait time to increase space between animations.
					
					// after the animation finishes, start the whole process again
					clearTimeout(animateTimer);
					$('body').trigger('mousemove');
					}, animateWait);
					
				}, idleWait);
				
			
		});
		
		$('body').trigger('mousemove');
	});
}) (jQuery);