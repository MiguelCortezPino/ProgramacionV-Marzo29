<!DOCTYPE html>
<html>
<head>
	<title></title>
	<?php 
		require('Componentes/CompComunes.php');
		CabecerasHTML01();
	?>	
</head>
<body>
	<div class="row">
  	<div class="col-md-3"></div>
  	<div class="col-md-6">
  		<h1 align="center">LOGIN</h1>
  		<form method="post" action="Seguridad/ControlAcceso.php">
  			<!-- Email input -->
  			<div class="form-outline mb-4">
    		<input type="text" id="usuarioU" class="form-control" name="usuario" />
    		<label class="form-label" for="form2Example1">Usuario</label>
  			</div>
  			<!-- Password input -->
  			<div class="form-outline mb-4">
    		<input type="password" id="claveUS" class="form-control"  name="clave" />
    		<label class="form-label" for="form2Example2">Contraseña</label>
  			</div>
  			<!-- 2 column grid layout for inline styling -->
  			<div class="row mb-4">
    		<div class="col d-flex justify-content-center">
      		<!-- Checkbox -->
      		<div class="form-check">
        		<input class="form-check-input" type="checkbox" value="" id="form2Example31" checked />
        		<label class="form-check-label" for="form2Example31"> Remember me </label>
      		</div>
    		</div>

    		<div class="col">
      		<!-- Simple link -->
      		<a href="#!">Forgot password?</a>
    		</div>
  			</div>

  			<!-- Submit button -->
  			<button type="Submit" class="btn btn-primary btn-block mb-4">ENTRAR</button>

  			<!-- Register buttons -->
  			<div class="text-center">
    		<p>Not a member? <a href="#!">Register</a></p>
    		<p>or sign up with:</p>
    		<button type="button" class="btn btn-link btn-floating mx-1">
      			<i class="fab fa-facebook-f"></i>
    		</button>

    		<button type="button" class="btn btn-link btn-floating mx-1">
      			<i class="fab fa-google"></i>
    		</button>

    		<button type="button" class="btn btn-link btn-floating mx-1">
      			<i class="fab fa-twitter"></i>
    		</button>

    		<button type="button" class="btn btn-link btn-floating mx-1">
      			<i class="fab fa-github"></i>
    		</button>
  		</div>
		</form>
  	</div>
  	<div class="col-md-3"></div>
	</div>
	<?php 
		
		FooterHTML01();
	?>
</body>
</html>