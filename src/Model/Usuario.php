<?php

namespace src\Model;

class Usuario
{
    var $Id = 0;
    var $Nombre = "SIN ESPECIFICAR";
    var $Apellido = "SIN ESPECIFICAR";
    var $Usuario = "SIN ESPECIFICAR";
    var $Clave = "SIN ESPECIFICAR";
    var $Correo = "SIN ESPECIFICAR";
    var $Telefono = "SIN ESPECIFICAR";
    var $Rol = 0;
    var $Estado = 0;
    var $CodigoVerificacion = "SIN ESPECIFICAR";
    var $ModoAutenticacion = "SIN ESPECIFICAR";
    var $UsuarioCreacion = "SIN ESPECIFICAR";
    var $DireccionIP = "SIN ESPECIFICAR";

    function __construct() {}

    public function AutenticarUsuario()
    {
        $QueryComprobar = "SELECT * FROM usuarios WHERE Usuario='";
        $QueryComprobar .= $this->Usuario;
        $QueryComprobar .= "' AND Clave='";
        $QueryComprobar .= $this->Clave;
        $QueryComprobar .= "' AND Estado=2;";
        return $QueryComprobar;
    }
}
