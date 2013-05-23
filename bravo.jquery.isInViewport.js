(function ($) {

  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	// Copyright 2013, Brian Bravo	
	// Licensed under the MIT license.
	//
	// @author Brian Bravo
	// @desc determines if an HTML element is inside of the viewport (vertical-only)
	// 
	// github: https://github.com/BrianBravo/isInViewport	
	//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	 
    $.fn.isInViewport = function(options) {
    
    	//set default options
    	var settings = $.extend ({
	    	mode: 'middle',			//[optional] 	determines if calculation is made from the top, middle, or bottom or HTML element
	    	verticalOffset: 0		//[optional]	adds a buffer to HTML element
    	}, options );    	
    	
       	var windowHeight = $(window).height(),
	   		windowScrollTop = $(window).scrollTop(),
	   		elOffset = settings.verticalOffset;
	   	
	   	switch (settings.mode)
	   	{
		   	case 'bottom': /* bottom of HTML element is in viewport */
		   		elOffset += this.offset().top + this.outerHeight();
		   		break;
		   	case 'middle': /* middle of HTML element is in viewport */
		   		elOffset += this.offset().top + this.outerHeight()/2;
		   		break;
		   	case 'top':	   /* top of HTML element is in viewport */
		   	default:
		   		elOffset += this.offset().top;
		   		break;
	   	}
       
	   	return ((elOffset - windowScrollTop) <= windowHeight);
    };
 
}( jQuery ));
