/* 	nav-controller.js 
   	-------------------
 	A short javascript that controls the opening and closing of the navbar when you click the hamburger
 	or when you click a link. */
 	
var navMenuToggle = document.getElementById("nav-toggle");
var navMenuItems = document.querySelectorAll("li.nav-item");
			
navMenuToggle.addEventListener("click", function(e) {
	e.preventDefault();
	navMenuToggle.classList.toggle("active");
});
			
/* 	automatically close the nav menu when a link is clicked from it. 
	Better UX. The for-loop and if statements make the nav menu scalable. */
			
if (navMenuItems.length > 0) {
	for (var i=0; i<navMenuItems.length; i++) {
		navMenuItems[i].addEventListener("click", function(e) {
		e.preventDefault();
		navMenuToggle.classList.toggle("active");
		});
	}
}		