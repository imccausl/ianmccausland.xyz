/* page-elements-display-controller.js */

// Cache reference to window and animation items



/* first, when the page loads, fadein the circle and main heading */

$( function() {
	var $window = $(window);
	var $animation_elements = $('.animation-element');
	var $img_buttons = $('.toggle-img-popup');
	
	$('.circle').fadeIn(2000);
	$('.site-wrap').trigger('scroll');
	
	/* then control the appearence of the various sections as the user scrolls to reveal them */
	function checkIfInView() {
		var window_height = $window.height();
		var window_top_position = $window.scrollTop();
		var window_bottom_position = (window_top_position + window_height);
	
		// for debugging: console.log("Window Height: " + window_height);
	
		$.each($animation_elements, function() {
			var $element = $(this);
			var element_height = $element.outerHeight();
			var element_top_position = $element.offset().top;
			var element_bottom_position =  (element_top_position + element_height);
		
			// for debugging: console.log("Element height: " + $element.outerHeight());
		
			//check to see if this current container is within viewport
			if ((element_bottom_position >= window_top_position) && (element_top_position <= window_bottom_position)) {
				$element.addClass('in-view');
			} else {
				$element.removeClass('in-view');
			}
		});
	}

	function toggleImgPopup() {
		
		console.log("button clicked!");
		
		if ($('#popup-window').hasClass('.popup-img-viewer--visible')) {
			$('#popup-window').removeClass('.popup-img-viewer--visible');
			$('#popup-window').fadeOut();
			
			$('.site-wrap').trigger('scroll'); /* if the user resizes the window while the popup-window is active, all the background content will disappear. So trigger a scroll when the window closes in order to restore the content via checkIfInView(); */
			
		} else {
			$('#popup-window').fadeIn();
			$('#popup-window').addClass('.popup-img-viewer--visible');
			
			var imgSrcUrl = $(this).find('.small-img').attr('src');
			var imgSrcHtml = '<img class="viewer-img" src="' + imgSrcUrl + '" />';
			
			console.log(imgSrcHtml);
			
			displayImg(imgSrcHtml);
		}
	}
	
	/* Hey! I wrote two functions! Just like I learned at Stanford... on iTunes U */
	
	function displayImg(srcHtml) {
		if ($('#popup-window').hasClass('.popup-img-viewer--visible')) {
			$('#popup-window').html(srcHtml);
		} else {
			$('#popup-window').removeClass('.popup-img-viewer--visible');
			console.log("An error occurred trying to display image in viewer.");
			toggleImgPopup();
		}
	}

	$('.site-wrap').on('scroll resize', checkIfInView);
	
	$.each($img_buttons, function(e) {
		$(this).on('click', toggleImgPopup)
	});
	
	$('.popup-background').on('click', toggleImgPopup);
});





