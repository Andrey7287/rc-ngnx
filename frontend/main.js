'use strict';

/* Make jQuery available in global */
console.log(`jQuery ${$.fn.jquery} is loaded`);
window.$ = $;
window.jQuery = $;

/* Import project styles and components */
require('script-loader!slick-carousel');
require('./modules/ymap');
import '../sass/css.scss';
import OnResize from './modules/resize';
import scrollup from './modules/scrollup';

/* Define project components and variables */
var	mobileView = window.matchMedia("(max-width: 768px)").matches,
		resizeAlign = new OnResize,
		scrollTiming = 0;

/************************
****** Mobile menu ******
*************************/

$('.c-hamburger').on('click', function(){
	$(this).toggleClass('is-active');
	$('.site-nav-inner').slideToggle();
	$('.site-search__wrapp').removeClass('site-search__wrapp_act');
	$('.header-inner').add('.site-nav-outer').add('.site-contacts__social').removeClass('with-search');
});

$('.site-nav').on('click', '.site-nav__link', function(e){

	var $dropdown = $(this).next(),
			isDropdown = $dropdown.is('.dropdown');
	if ( isDropdown ) {
		$dropdown.slideToggle();
		return false;
	}

});

/***********************
******** SLIDER ********
************************/

$('.slider').slick({
	arrows: false,
	dots: true,
	appendDots: $('.slider-dots')
});

/************************
******* Scroll Up *******
*************************/

$(document).scroll(function(){

	if ( !scrollTiming ) {

		scrollTiming = setTimeout(function(){

			var scroll = $('body').scrollTop() ? $('body').scrollTop() : $('html').scrollTop();
			scroll >= 300 ? $('.scrollup').addClass('act') : $('.scrollup').removeClass('act');
			scrollTiming = 0;

		},300);

	}

});

$('.scrollup').scrollUp();

/*****************************
****** Search on mobile ******
************************&*****/

$('.site-search__toggle').click(()=>{

	var	mobileView = window.matchMedia("(max-width: 992px)").matches;

	$('.site-search__wrapp').toggleClass('site-search__wrapp_act');

	if ( mobileView ) {
		$('.header-inner').toggleClass('with-search');
		$('.site-nav-outer').toggleClass('with-search');
		$('.site-contacts__social').toggleClass('with-search');
		$('.c-hamburger').removeClass('is-active');
		$('.site-nav-inner').slideUp();
	}
});


