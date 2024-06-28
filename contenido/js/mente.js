$(document).ready(function() {

	$('.texto').animate({
		'opacity':1
	},5000)

	$("#datos").keyup(function(){
		var dato = $(this).val();
		
		if(dato=="4262"){
		window.location.href="alma.html";
		}
		
	});
	
	$('a').click(function(){
		alert("4262");
	})
	
} );