<?php
require_once '../vendor/autoload.php';

use src\DB\GestionarDB;

$EstablecerConex00 = new GestionarDB();
$conn00 = $EstablecerConex00->conectar();

$datos = json_decode(file_get_contents('php://input'), true);

$sql = "INSERT INTO productos (Nombre, SKU, Descripcion) VALUES ('";
$sql .= $datos["Nombre"];
$sql .= ", ";
$sql .= $datos["SkuP"];
$sql .= ", ";
$sql .= $datos["Descripcion"];
$sql .= "');";

$Mensaje = "SIN ESPECIFICAR";
$Respuesta = $conn00->query($sql);
if ($Respuesta) {
  $Mensaje = "Producto Registrado";
}
$conn00->close();

$ArrMensaje = array();
$ArrMensaje["Respuesta"] = "Estoy en el Servidor";
$ArrMensaje["Contenido"] = $sql;
$MensajeF01 = json_encode($ArrMensaje);
echo $MensajeF01;
