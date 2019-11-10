var xixa = 1;

function sumar(n1 = 0,n2 = 0)
{
	xixa = 2;
	var total;
	total = n1 + n2;
	return total;
}


function suma(n1 = 0,n2 = 0)
{
	var total;
	total = n1 + n2;
	alert(total);
}

var llamarsuma = document.getElementById("llamarsuma");

llamarsuma.addEventListener("click",function(){
	suma(20,30);
});

var botones = document.getElementsByTagName("button");
console.log(botones);
var botones2 = document.getElementsByClassName("boton");
console.log(botones2);

/*for (var j = 0 ; j < botones2.length; j++){
	
	botones2[j].className = "nuevoboton";
}*/
	
var botones3 = document.querySelector(".boton");
var botones4 = document.querySelectorAll("button");
console.log(botones4);

/*console.log(xixa);
console.log(sumar(1,2));
console.log(xixa);*/
