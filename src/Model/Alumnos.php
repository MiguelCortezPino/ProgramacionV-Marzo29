<?php

namespace src\Model;

class Alumnos {
      var $Id=0;
      var $Nombre="SIN ESPECIFICAR";
      var $Apellido="SIN ESPECIFICAR";
      var $Edad=0;
      var $Correo="SIN ESPECIFICAR";
      var $Telefono="SIN ESPECIFICAR";
      var $direccion="SIN ESPECIFICAR";
      var $NIE="SIN ESPECIFICAR";
      var $UsuarioCreacion="SIN ESPECIFICAR";
      var $UsuarioModifica="SIN ESPECIFICAR";

      function __construct() {
            
      }


      function IngresarAlumno(){

            $HacerQuery="INSERT INTO alumnos (IdCarrera, Nombre, Apellido, Edad, Correo, Telefono, direccion, NIE) VALUES(";
            $HacerQuery.="1, '";
            $HacerQuery.=$this->Nombre;
            $HacerQuery.="', '";
            $HacerQuery.=$this->Apellido;
            $HacerQuery.="', ";
            $HacerQuery.=$this->Edad;
            $HacerQuery.=", '";
            $HacerQuery.=$this->Correo;
            $HacerQuery.="', '";
            $HacerQuery.=$this->Telefono;
            $HacerQuery.="', '";
            $HacerQuery.=$this->direccion;
            $HacerQuery.="', '";
            $HacerQuery.=$this->NIE;
            $HacerQuery.="')";
            return $HacerQuery;

      }      

}
?>
