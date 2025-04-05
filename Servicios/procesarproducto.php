<?php

require_once '../vendor/autoload.php';
use src\DB\GestionarDB;

$EstableceConexion = new GestionarDB();
$conn00 = $EstableceConexion->conectar();

$datos = json_decode(file_get_contents('php://input'), true);

$sql = "INSERT INTO `productos`(`Nombre`, `SKU`, `Descripcion`) VALUES ('" . $datos["Nombre"] . "','" . $datos["Skup"] . "','" . $datos["Descripcion"] . "')";

$mensaje = "SIN ESPECIFICAR";

$respuesta=$conn01->query($sql);
if ($respuesta) {
    $mensaje = "Producto Registrado";
} else {
    $mensaje = "Error al registrar Producto";
}

$conn00->close();

$ArrMensaje = array();
$ArrMensaje["Respuesta"] = "Estoy en el servidor";
$ArrMensaje["Contenido"] = $datos;
$MensajeF01 = json_encode($ArrMensaje);
echo($MensajeF01);
?>