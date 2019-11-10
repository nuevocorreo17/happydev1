jQuery(document).ready(function(){

	var n = 1;
	jQuery(".boton-abajo").click(function(e){
		e.preventDefault();
		n++;
		jQuery("section").append("<div class='cuadrado'>"+n+"</div>");
	})

	var j=1;
	jQuery(".boton-arriba").click(function(e){
		e.preventDefault();
		j++;
		jQuery("section").prepend("<div class='cuadrado'>"+j+"</div>");
	})

	/*jQuery(".cuadrado").click(function(){
		jQuery(this).remove();
	})*/
});

jQuery(document).on("click",".cuadrado",function(){
	jQuery(this).remove();
})