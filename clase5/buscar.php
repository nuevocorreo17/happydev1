<?php

$lista = array();
$usuarios = array();

$usuarios[0]["dni"] = "42890190";
$usuarios[0]["nombre"] = "Alonso";
$usuarios[0]["apellido"] = "Perez";
$usuarios[1]["dni"] = "12345678";
$usuarios[1]["nombre"] = "Marcelo";
$usuarios[1]["apellido"] = "Alborta";
$usuarios[2]["dni"] = "78945612";
$usuarios[2]["nombre"] = "Maria";
$usuarios[2]["apellido"] = "Lopez";


$lista["usuarios"] = $usuarios;


echo json_encode($lista);

die();
?>