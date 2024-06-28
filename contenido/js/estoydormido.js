$(document).ready(function() {

$('body').mousemove(function(event){

var mousex = event.pageX;
var mousey = event.pageY;

	$('.creacion').animate({
	'left': $('body').width()-mousex,
	'top': $('body').height()-mousey
	},1);
	
	$('.imaginar').animate({
	'left': $('body').width()-mousex/2,
	'top': $('body').height()-mousey/2
	},1);

	$('.comenzar').animate({
	'left': mousex/2,
	'top': mousey/2
	},1);	

	$('.obra').animate({
	'left': mousex,
	'top': mousey
	},1);

	$('.humano').animate({
	'left': $('body').width()-mousex,
	'top': mousey
	},1);

	$('.inicio').animate({
	'left': $('body').width()-mousex/2,
	'top': mousey/2
	},1);	
	
	$('.sueño').animate({
	'left': $('body').width()/2+mousex/2,
	'top': $('body').height()-mousey
	},1);
	

})

} );