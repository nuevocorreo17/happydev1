jQuery(document).ready(function(){
	var elementoinput = jQuery("input[name='nombre']");
	var btnmostrar = jQuery(".mostrar");
	/*var elementolink = jQuery(".link");*/
	/*jQuery(".link").attr("href","http://google.com");*/
	/*jQuery(".link").attr("class","xixa");*/
	/*jQuery(".link").attr("target","_blank");*/
	

	/*elementolink.text("Nuevo texto");*/
	/*console.log(elementolink.text());*/

	/*elementolink.html("<span>Inicio</span>");*/
	/*console.log(elementolink.html());*/

	/*elementoinput.val("Perez");
	console.log(elementoinput.val());*/

	btnmostrar.click(function(){
		alert("abriendo menu");
	});

});