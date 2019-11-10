var ancho = jQuery(window).width();
var alto = jQuery(window).height();

console.log(ancho+" - "+alto);

jQuery(window).resize(function(){
	ancho = jQuery(window).width();
	alto = jQuery(window).height();
});


jQuery(document).ready(function(){


	jQuery(".boton-agregar-clase").click(function(e){
		e.preventDefault();
		jQuery(".cuadrado").addClass("grande");
	});


	jQuery(".boton-eliminar-clase").click(function(e){
		e.preventDefault();
		jQuery(".cuadrado").removeClass("grande");
	});

	jQuery(".boton-agregarquitar-clase").click(function(e){
		e.preventDefault();

		if(jQuery(".cuadrado").hasClass("grande"))
		{
			jQuery(".cuadrado").removeClass("grande");
		}else{
			jQuery(".cuadrado").addClass("grande");
		}

		/*
			Metodo optimo
		jQuery(".cuadrado").toggleClass("grande");*/
	});

	jQuery(".mostrar-lightbox").click(function(e){
		e.preventDefault();
		jQuery(".contenedor-img").addClass("open");
		jQuery(".trama").addClass("open");
	});

	jQuery(".mostrar-lightbox-carino").click(function(e){
		e.preventDefault();

		/*jQuery(".trama").stop().fadeIn("fast",function(){
			jQuery(".contenedor-img").stop().fadeIn("slow");
		});*/

		jQuery(".trama").stop().fadeToggle("fast",function(){
			jQuery(".contenedor-img").stop().fadeToggle("slow");
		});
	});

	jQuery(".cerrar").click(function(e){
		e.preventDefault();
		/*jQuery(".contenedor-img").removeClass("open");
		jQuery(".trama").removeClass("open");*/		

		/*jQuery(".contenedor-img").stop().fadeOut("fast",function(){
			jQuery(".contenedor-img").attr("style","")
			jQuery(".trama").stop().fadeOut("slow",function(){
				jQuery(".trama").attr("style","")
			});

		});*/

		jQuery(".contenedor-img").stop().fadeToggle("fast",function(){
			jQuery(".trama").stop().fadeToggle("slow");
		});
	})	

	jQuery(".titulo-acordion").click(function(){

		if(jQuery(this).find("i").hasClass("fa-chevron-up"))
		{
			jQuery(this).find("i").removeClass("fa-chevron-up").addClass("fa-chevron-down");
		}else{
			jQuery(".titulo-acordion").find("i").removeClass("fa-chevron-up");
			jQuery(this).find("i").addClass("fa-chevron-up");
		}

		jQuery(".cuerpo-acordion").slideUp("slow");
		jQuery(this).next(".cuerpo-acordion").stop().slideToggle();
	});	

	jQuery(".animar").click(function(e){
		e.preventDefault();

		jQuery(".cuadrado").stop().animate({
			"width":"+=300px",
			"border-radius": "300px",
			"height":"+=300px",
			"background-color" : "green"
		},500,function(){
			setTimeout(function(){
				cambio();
			},1000);

			/*setInterval(function(){ 
				
			}, 3000);*/
		});
	});
});

function cambio()
{
	jQuery(".cuadrado").stop().animate({
		"width":"300px",
		"border-radius": "0",
		"height":"300px",
		"background-color" : "red"
	},500,function(){
		
	});
}
