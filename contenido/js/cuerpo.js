$(document).ready(function() {

	var posx = 100 + Math.random() * 325 + '%';
	var posy = 100 + Math.random() * 325 + '%';
	
	$('.burbuja').css({'left':posx, 'top':posy});
	
	$('.texto').animate({
		'opacity':1
	},5000)
	
	$('.burbuja').click(function(){
		alert("materia");
	})
	
	$("#datos").keyup(function(){
		var dato = $(this).val();
		
		if(dato=="materia"){
		window.location.href="mente.html";
		}
		
	});
			
} );