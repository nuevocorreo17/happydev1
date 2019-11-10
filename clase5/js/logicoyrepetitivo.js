/*var edad = prompt("Ingrese su edad");
edad = parseInt(edad);

if (edad >= 18)
{
	alert("Felicitaciones eres mayor de edad");
}else{
	var confimacion = confirm("En serio no eres mayor de edad?");
	if(confimacion == true)
	{
		alert("Vuelve cuando seas mayor");
	}else{
		alert("Recargue la pagina");
	}
}*/

var meses = ["enero","febrero","marzo","abril","mayo","junio","julio","agosto","setiembre","octubre","noviembre","diciembre"];

for (var i = 0; i < meses.length; i++ ) {
	console.log("Este mes es "+meses[i]);
}

for (var i = meses.length; i >= 0; i-- ) {
	console.log("Este mes es "+meses[i]);
}