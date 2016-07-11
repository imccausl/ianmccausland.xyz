$('a[href^="#"]').on('click', function(event) {
	var target = $(this.getAttribute('href'));
	
	if( target.length ) {
		event.preventDefault();
		$('.site-wrap').stop().animate({
			scrollTop: target.offset().top
		}, 1000);
	}
});