$(document).ready(function() {

	$('.icono').hover(function(e) {
	
		e.preventDefault() ;
		
		$('body,html').animate({
		scrollTop: $('body').height()
		}, 3000);
		
	});
	
	$('.boton1').hover(function(e) {
		
		e.preventDefault();

		$('body,html').stop().animate({
		scrollTop: $('body').height()*2
		}, 3000);
		
	

	});

	
	
	$('.boton2').hover(function(e) {
		
		e.preventDefault();

		$('body,html').stop().animate({
		scrollTop: $('body').height()*3
		}, 3000);
	});	
	
	

	$('.boton3').hover(function(e) {

		e.preventDefault();
	
		$('body,html').stop().animate({
		scrollTop: $('body').height()*4
		}, 3000);
	});
	
	$('.boton4').hover(function(e) {

		e.preventDefault();
	
		$('body,html').stop().animate({
		});

	});	

	$('.textlink').hover(function() {
		
		$('this').css({"color" : "#FFF"});

	});
	
} );