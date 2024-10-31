(function( $ ) {
	'use strict';

	/**
	 * All of the code for your public-facing JavaScript source
	 * should reside in this file.
	 *
	 * Note: It has been assumed you will write jQuery code here, so the
	 * $ function reference has been prepared for usage within the scope
	 * of this function.
	 *
	 * This enables you to define handlers, for when the DOM is ready:
	 *
	 * $(function() {
	 *
	 * });
	 *
	 * When the window is loaded:
	 *
	 * $( window ).load(function() {
	 *
	 * });
	 *
	 * ...and/or other possibilities.
	 *
	 * Ideally, it is not considered best practise to attach more than a
	 * single DOM-ready or window-load handler for a particular page.
	 * Although scripts in the WordPress core, Plugins and Themes may be
	 * practising this, we should strive to set a better example in our own work.
	 */

})( jQuery );

$ = jQuery.noConflict(true);

$(document).ready(function () {

	$(function() {
		$('a[href*="#"]:not([href="#"])').click(function() {
		  if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
			  $('html, body').animate({
				scrollTop: target.offset().top -160
			  }, 700);
			  return false;
			}
		  }
		});
	  });

	if (rotemWrappingClass === 0) {
		var h2elembefore = $('.rotem-post-navigator').parent();
		h2elem = $(h2elembefore).find("h2");
		console.log(h2elem);
	} else {
		var h2elem = document.getElementsByTagName('h2');
	}
    

    if (h2elem.length > 1) {
        $(".rotem-post-navigator").append("<div class='rotem-post-navigator-header'>"+rotemHeaderTitle+"</div>");
    }

    if (h2elem.length > 1) {
        for (i = 0; i < h2elem.length; i++) {
			inloop = 0;
			if (rotemWrappingClass !== 0) {
				if (hasSomeParentTheClass(h2elem[i],rotemWrappingClass)) {
					inloop = 1;
				}
			} else {
				inloop = 1;
			}
			if (inloop === 1) {
				var theh2 = h2elem[i]; // pick h2
				var h2id = theh2.setAttribute("id", "rotem-post-navigator-title-" + i); // add id
				var h2title = theh2.innerHTML; // get title
				$(".rotem-post-navigator").append("<a class='rotem-post-navigator-link' href='#rotem-post-navigator-title-" + i + "'>" + h2title + "</a>");
			}
        }
    }

});

function hasSomeParentTheClass(element, classname) {
    if (element.className.split(' ').indexOf(classname)>=0) return true;
    return element.parentNode && hasSomeParentTheClass(element.parentNode, classname);
}