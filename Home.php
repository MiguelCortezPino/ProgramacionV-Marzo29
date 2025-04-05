<?php
require('Seguridad/Seguridad.php');
?>
<!DOCTYPE html>
<html>

<head>
	<link rel="stylesheet" type="text/css" href="CSS/BOOSTRAP/bootstrap.min.css">
	<title></title>
</head>

<body>
	<div class="container">
		<div class="row">
			<div class="col">
				<?php
				echo ("HOLA " . $_SESSION["NombreUsuario"] . "<br>");
				echo ("Mi Roll: " . $_SESSION["Rol"]);
				?>
				<a class="dropdown-item" href="Seguridad/salir.php">CERRAR SESION</a>
			</div>
		</div>

		<div class="row">
			<div class="col-4">
				<!--<?php
						require('Servicicios/ServiciosRolles.php');
						Barmenu($_SESSION["Rol"]);
						?>-->
			</div>
			<div class="col-8">
				<div id="MostrarInformacion">
					<p id="MensajeDeEnvio" style="color: red;"></p>
					<form id="FormMostrarInformacion">
						<div class="mb-3">
							<label for="exampleInputEmail1" class="form-label">Nombre</label>
							<input type="text" class="form-control" id="NombreProducto" aria-describedby="emailHelp">
							<div id="emailHelp" class="form-text">Favor ingrese Nombre del producto.</div>
						</div>

						<div class="mb-3">
							<label for="exampleInputEmail1" class="form-label">SKU</label>
							<input type="text" class="form-control" id="skuP" aria-describedby="emailHelp">
							<div id="emailHelp" class="form-text">Favor ingrese codigo Producto.</div>
						</div>

						<div class="mb-3">
							<label for="exampleInputEmail1" class="form-label">Descripcion</label>
							<input type="text" class="form-control" id="DescripcionP" aria-describedby="emailHelp">
							<div id="emailHelp" class="form-text">Favor ingrese la Descripcion.</div>
						</div>

						<div class="d-grid gap-2">
							<button class="btn btn-primary" Id="RegistroProducto" type="button">REGISTRAR</button>
						</div>
					</form>
					<form id="FormMostrarFaltas">
						<button class="btn btn-primary" id="MostrarFaltas" type="button">Mostrar Faltas</button>
						<table class="table table-striped" id="MostrarLasFaltas">
						</table>
					</form>
				</div>

			</div>
		</div>

		<div class="row">
			<div class="col">
			</div>
		</div>


	</div>

	<dialog id="VmodalMostrar">
		<button type="button" class="btn-close btn-dark" id="IdBotonCerrarModal01"></button>
		<form id="FormIngAlumnnos">
			Nombre:<input type="text" id="IdNombreAlumno"><br>
			Apellido:<input type="text" id="IdApellidoAlumno"><br>
			Edad:<input type="number" id="IdEdadAlumno"><br>
			Correo:<input type="email" id="IdCorreiAlumno"><br>
			Telefono:<input type="text" id="IdTelefonoAlumno"><br>
			direccion:<input type="text" id="IdDireccionAlumno"><br>
			NIE:<input type="text" id="IdNieAlumno"><br>
			<button type="button" id="RegistrarAlumno">REGISTRAR</button>
		</form>
	</dialog>
	<script type="text/javascript" src="JS/BOOSTRAP/bootstrap.min.js"></script>
	<script type="text/javascript" src="JS/main.js"></script>
	<script type="text/javascript" src="JS/Comunes.js"></script>
	<script type="text/javascript">
		let BotonRegisterP = document.querySelector('#RegistroProducto');
		BotonRegisterP.addEventListener("click", function() {
			RegistrarElProducto();
		});
		let BotonMostrarF = document.querySelector('#MostrarFaltas');
		BotonMostrarF.addEventListener("click", function() {
			MostrarTodasLasFaltas();
		});
	</script>
</body>

</html>