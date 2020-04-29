jQuery(document).ready(function() {

	var navOffset = jQuery("#page_nav").offset().top;
	//alert(navOffset);

	//These will query the top postion of the viewport and width of window respectively
	jQuery(window).scroll(function() { //this function retrieves the top point of viewport on scroll
		var scroll = jQuery(window).scrollTop();
		
		if (scroll >= navOffset) {
		  $("#page_nav").addClass("fixed-navbar");
		  $("#narrow_nav").addClass("fixed-navbar");
		}	else {
			$("#page_nav").removeClass("fixed-navbar");
			$("#narrow_nav").removeClass("fixed-navbar");
		}
			
	});
	
	jQuery(window).resize(function() { //this function retrieves the width of viewport on resize
		var width = jQuery(window).width();
	
	// If you are more comfortable using jQuery instead of conditional CSS, you can use apply styles by swapping out attributes like the script below, which will change the navigation to single-column (note, this will only work when the browser is resized; you need to query on load or use conditional CSS if you want the styles applied when the page is loaded).
	
			if (width < 734) { //note the odd pixel value -- you sometimes have to calibrate a little to have it fire on time
				$("#page_nav").removeAttr("id", "page_nav").attr("id", "narrow_nav");
			}	else if (width > 734) {
				$("#narrow_nav").removeAttr("id", "narrow_nav").attr("id", "page_nav");
			}

	});
});