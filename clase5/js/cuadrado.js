var ancho = jQuery(window).width();
var alto = jQuery(window).height();


jQuery(window).resize(function(){
	ancho = jQuery(window).width();
	alto = jQuery(window).height();
});


jQuery(document).ready(function(){
	jQuery(".cuadrado").click(function(){
		devuelta();
	});
});

function devuelta()
{
	var nancho = ancho - jQuery(".cuadrado").width();
		//var nalto = alto - jQuery(".cuadrado").height();
	jQuery(".cuadrado").animate({
		"width": "100px",
		"height": "100px",
		"left" : nancho,
		//"top" : nalto,
		"background-color" : "blue"
	}, 1000, function(){
		var nalto = alto - jQuery(".cuadrado").height();
		jQuery(".cuadrado").animate({
			"width": "100px",
			"height": "100px",
			"top" : nalto,
			"background-color" : "yellow"
		},1000, function(){
			
			jQuery(".cuadrado").animate({
				"width": "100px",
				"height": "100px",
				"left" : 0,
				"background-color" : "green"
			},1000, function(){
				jQuery(".cuadrado").animate({
				"width": "100px",
				"height": "100px",
				"top" : 0,
				"background-color" : "red"
				},1000, function(){
					devuelta();
				})
			})
		})
	})
}