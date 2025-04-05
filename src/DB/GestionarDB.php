<?php

namespace src\DB;

class GestionarDB
{
  var $servidor;
  var $usuario;
  var $clave;
  var $base;

  function __construct()
  {
    $this->servidor = "localhost";
    $this->usuario = "root";
    $this->clave = "";
    $this->base = "universidad";
  }

  function conectar()
  {
    $Conexion = new \mysqli($this->servidor, $this->usuario, $this->clave, $this->base);
    if ($Conexion->connect_error) {
      die("Connection failed: " . $Conexion->connect_error);
    }

    return $Conexion;
  }
}
