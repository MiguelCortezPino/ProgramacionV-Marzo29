<?php
require_once '../vendor/autoload.php';

use src\Model\Usuario;
use src\DB\GestionarDB;

$ObjUsuario = new Usuario();
$ObjUsuario->Usuario = $_POST['usuario'];
$ObjUsuario->Clave = md5($_POST['clave']);
$consulta00 = $ObjUsuario->AutenticarUsuario();
$EstablecerConex01 = new GestionarDB();
$conn01 = $EstablecerConex01->conectar();
$consulta01 = $conn01->query($consulta00);
$filas00 = $consulta01->num_rows;
if ($filas00 != 0) {
	while ($campo00 = $consulta01->fetch_assoc()) {
		$ObjUsuario->Id = $campo00["Id"];
		$ObjUsuario->Nombre = $campo00["Nombre"];
		$ObjUsuario->Apellido = $campo00["Apellido"];
		$ObjUsuario->Correo = $campo00["Correo"];
		$ObjUsuario->Rol = $campo00["Rol"];
	}
}
$consulta01->close();

if ($filas00 != 0) {
	$Token = sha1(uniqid(rand(), true));
	$ArrVsession = array();
	$ArrVsession[0] = "Token";
	$ArrVsession[1] = "Id";
	$ArrVsession[2] = "NombreUsuario";
	$ArrVsession[3] = "ApellidoUsuario";
	$ArrVsession[4] = "IdUsuario";
	$ArrVsession[5] = "ClaveUsuario";
	$ArrVsession[6] = "Correo";
	$ArrVsession[7] = "Rol";

	session_start();
	$_SESSION[$ArrVsession[0]] = $Token;
	$_SESSION[$ArrVsession[1]] = $ObjUsuario->Id;
	$_SESSION[$ArrVsession[2]] = $ObjUsuario->Nombre;
	$_SESSION[$ArrVsession[3]] = $ObjUsuario->Apellido;
	$_SESSION[$ArrVsession[4]] = $ObjUsuario->Usuario;
	$_SESSION[$ArrVsession[6]] = $ObjUsuario->Correo;
	$_SESSION[$ArrVsession[7]] = $ObjUsuario->Rol;

	setcookie($ArrVsession[0], $Token, time() + (60 * 60 + 24), "/");
	setcookie($ArrVsession[1], $ObjUsuario->Id, time() + (60 * 60 + 24), "/");
	setcookie($ArrVsession[2], $ObjUsuario->Nombre, time() + (60 * 60 + 24), "/");
	setcookie($ArrVsession[3], $ObjUsuario->Apellido, time() + (60 * 60 + 24), "/");
	setcookie($ArrVsession[4], $ObjUsuario->Usuario, time() + (60 * 60 + 24), "/");
	setcookie($ArrVsession[6], $ObjUsuario->Correo, time() + (60 * 60 + 24), "/");
	setcookie($ArrVsession[7], $ObjUsuario->Rol, time() + (60 * 60 + 24), "/");

	header("Location: ../Home.php");
} else {
	setcookie($ArrVsession[0], "", time() - 1, "/");
	setcookie($ArrVsession[1], "", time() - 1, "/");
	setcookie($ArrVsession[2], "", time() - 1, "/");
	setcookie($ArrVsession[3], "", time() - 1, "/");
	setcookie($ArrVsession[4], "", time() - 1, "/");
	setcookie($ArrVsession[6], "", time() - 1, "/");
	setcookie($ArrVsession[7], "", time() - 1, "/");
	header("Location: ../index.php");
}

$conn00->close();
