jQuery(document).ready(function(){
	jQuery('input[type="submit"]').click(function(){

		jQuery.ajax({
			method : "post",
			url : "buscar.php",
			/*data:{
				user : jQuery("#user").val(),
				password : jQuery("#password").val(),
			},*/
			dataType:"json",
			data: jQuery("#formulario").serialize(),
			beforeSend:function(){
				//alert("Estas enviando tu data...");
			}
		}).done(function(data){
			//alert(data);
			//jQuery(".respuesta").html(data.mensaje);

			/*if(data.tipo == 1)
			{
				jQuery(".respuesta").css({"color":"green"});
				setTimeout(function(){
					location.href = data.redirec;
				},1000);
			}else{
				jQuery(".respuesta").css({"color":"red"});
			}*/
			var html = "<table>";
			html += "<tr>";
			html += "<th>DNI</th><th>Nombre</th><th>Apellido</th><th>Accion</th>";
			html += "</tr>";
			jQuery.each(data.usuarios,function(indice,valor){
				html += "<tr>";
				html += "<td>"+valor.dni+"</td><td>"+valor.nombre+"</td><td>"+valor.apellido+"</td><td><a href='#' class='eliminar'>Eliminar</a></td>";
				html += "</tr>";
			});

			html += "</table>";
			jQuery(".respuesta").html(html);
		})


	});

});


	jQuery(document).on("click",".eliminar",function(e){
		e.preventDefault();
		//jQuery(this).index()
		var indice = jQuery(".eliminar").index(this);

		jQuery("table tr").eq(indice + 1).remove();
	});