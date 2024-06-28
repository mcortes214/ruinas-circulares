$(document).ready(function() {

	$('.texto').animate({
		'opacity':1
	},5000)

	$("#datos").keyup(function(){
		var dato = $(this).val();
		
		if(dato=="fuego"){
		window.location.href="fin.html";
		}
		
	});	
	

} );