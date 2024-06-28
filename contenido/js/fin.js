$(document).ready(function() {

var cantidad=0;

	$('.palabra').hover(function(){
		$(this).animate({
		'opacity':1
		},600);
		
		$('body,html').animate({'background-color':'#000'},15000)
		
		cantidad++;
	})

	if(cantidad>=100){
	
	}

	
} );