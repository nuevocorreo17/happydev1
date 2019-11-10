<?php

$user = $_POST["user"];
$password = $_POST["password"];

//print_r($_POST);
$respuesta = array();

if($user == "nuevocorreo17" and $password == "123456")
{
	$respuesta["mensaje"] = "logueado";
	$respuesta["tipo"] = 1;
	$respuesta["redirec"] = "http://google.com";
}else{
	$respuesta["mensaje"] = "vuelve a intentar";
	$respuesta["tipo"] = 2;	

}

echo json_encode($respuesta);

die();
?>