<?php
function Barmenu($Roll=0){
	$ArrMiRoll=array();
	$ArrMiRoll[0]=" ";
	$ArrMiRoll[1]='
		<div class="accordion accordion-flush" id="accordionFlushExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingOne">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
        ALUMNOS
      </button>
    </h2>
    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">
      		<ul class="list-group">
				  <li class="list-group-item" onclick="RegistrarAlumno();">MOSTRAR</li>
				  <li class="list-group-item">REGISTRAR</li>
				  <li class="list-group-item">EDITAR</li>
				  <li class="list-group-item">SUSPENDER</li>
				  
			</ul>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
        DOCENTES
      </button>
    </h2>
    <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">B.</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
        PAGOS
      </button>
    </h2>
    <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">C.</div>
    </div>
  </div>
</div>
	';

	$ArrMiRoll[2]='
		<ul class="list-group">
			<li class="list-group-item">Notas</li>
			<li class="list-group-item">Pagos</li>
			<li class="list-group-item">Asignatura</li>
		</ul>
	';
	echo($ArrMiRoll[$Roll]);
}
?>