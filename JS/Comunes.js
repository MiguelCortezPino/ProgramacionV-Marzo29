
/*
let ButtonRegistrarA = document.querySelector("#buttonRegistarAlumn");
ButtonRegistrarA.addEventListener("click", function(){
	alert("Hola");
});
*/

Alumno={
	Nombre:"SIN ESPECIFICAR",
	Apellido:"SIN ESPECIFICAR",
	Edad:0,
	Correo:"SIN ESPECIFICAR",
	Telefono:"SIN ESPECIFICAR",
	Direccion:"SIN ESPECIFICAR",
	Nie:"SIN ESPECIFICAR",
	Error:"PROCESAR",
	CapNombreA: function (IdCampNombre) {
		ValorNombre=document.querySelector(IdCampNombre).value;
		if ((ValorNombre!="")&&(ValorNombre!=null)) {
			this.Nombre=ValorNombre;
		}else{
			this.Error="Favor Coloque el Nombre";
		}
		
	},
	CapApellidoA: function (IdCampApellido){
		ValorApellido=document.querySelector(IdCampApellido).value;
		if ((ValorApellido!="")&&(ValorApellido!=null)) {
			this.Apellido=ValorApellido;
		}else{
			this.Error="Favor Coloque el Apellido";
		}
	},
	CapEdadA: function (IdCampEdad){
		ValorEdad=document.querySelector(IdCampEdad).value;
		if ((ValorEdad!="")&&(ValorEdad!=null)) {
			this.Edad=ValorEdad;
		}else{
			this.Error="Favor Coloque la edad";
		}
	},
	CapCorreoA: function (IdCampCorreo){
		ValorCorreo=document.querySelector(IdCampCorreo).value;
		if ((ValorCorreo!="")&&(ValorCorreo!=null)) {
			this.Correo=ValorCorreo;
		}else{
			this.Error="Favor Coloque el Correo";
		}
	},

	CapTelefonoA: function (IdCampTelefono){
		ValorTelefono=document.querySelector(IdCampTelefono).value;
		if ((ValorTelefono!="")&&(ValorTelefono!=null)) {
			this.Telefono=ValorTelefono;
		}else{
			this.Error="Favor Coloque el Telefono";
		}
	},
	CapDireccionA: function (IdCampDireccion){
		ValorDireccion=document.querySelector(IdCampDireccion).value;
		if ((ValorDireccion!="")&&(ValorDireccion!=null)) {
			this.Direccion=ValorDireccion;
		}else{
			this.Error="Favor Coloque la Direccion";
		}
	},
	CapNieA: function (IdCampNie){
		ValorNie=document.querySelector(IdCampNie).value;
		if ((ValorNie!="")&&(ValorNie!=null)) {
			this.Nie=ValorNie;
		}else{
			this.Error="Favor Coloque El Nie";
		}
	}
}

function ValidarAlumno(){
	Alumno.CapNombreA("#RIdAlumno");
	Alumno.CapApellidoA("#RIdApellido");
	Alumno.CapEdadA("#RIdEdad");
	Alumno.CapCorreoA("#RIdCorreo");
	Alumno.CapTelefonoA("#RIdTelefono");
	Alumno.CapDireccionA("#RIdDireccion");
	Alumno.CapNieA("#RIdNie");

	let Url='Controller/AlumnosController.php';
	let Metodo="POST";

	fetch(Url, {
  		method: Metodo,
  		body: JSON.stringify(Alumno),
  		headers: {"Content-type": "application/json; charset=UTF-8"}
		})
		.then(response => response.json())
		.then(datos => RValidarAlumno(datos))
		.catch(err => console.log(err));

	//alert(Alumno.Error);
	//console.log(JSON.stringify(Alumno));
}

function RValidarAlumno(datos) {
	console.log(datos);
}

function RegistrarAlumno() {
	let regsitrarAlumn=document.querySelector("#FormMostrarInformacion");
	let MostrarHTML='';
	MostrarHTML+='<input id="RIdAlumno" class="form-control" type="text" placeholder="Nombre" aria-label="default input example"><br/>';
	MostrarHTML+='<input id="RIdApellido" class="form-control" type="text" placeholder="Apellido" aria-label="default input example"><br/>';
	MostrarHTML+='<input id="RIdEdad" class="form-control" type="number" placeholder="Edad" aria-label="default input example"><br/>';
	MostrarHTML+='<input id="RIdCorreo" class="form-control" type="email" placeholder="Correo" aria-label="default input example"><br/>';
	MostrarHTML+='<input id="RIdTelefono" class="form-control" type="tel" placeholder="Telefono" aria-label="default input example"><br/>';
	MostrarHTML+='<input id="RIdDireccion" class="form-control" type="text" placeholder="Direccion" aria-label="default input example"><br/>';
	MostrarHTML+='<input id="RIdNie" class="form-control" type="text" placeholder="NIE" aria-label="default input example"><br/>';
	MostrarHTML+='<div class="d-grid gap-2">';
	MostrarHTML+='<button id="buttonRegistarAlumn" class="btn btn-primary" type="button" onclick="ValidarAlumno();">REGISTRAR</button>';
	MostrarHTML+='</div>';

	regsitrarAlumn.innerHTML=MostrarHTML;
	
}

/*
let ButtonModal01 = document.querySelector("#BotonEnviar");
ButtonModal01.addEventListener("click", function(){
	VmMostrar("VmodalMostrar");
});

function VmMostrar(IdVentanaMoDal) {
	var VmodalMostar=document.getElementById(IdVentanaMoDal);
	VmodalMostar.showModal();
}

let ButtonCerrarModal01 = document.querySelector("#IdBotonCerrarModal01");
ButtonCerrarModal01.addEventListener("click", function(){
	CerrarVmMostrar("VmodalMostrar");
});

function CerrarVmMostrar(IdVentanaMoDal) {
	var VmodalMostar=document.getElementById(IdVentanaMoDal);
	VmodalMostar.close();
	
}

let ButtonRegistrarAlumn01=document.querySelector("#RegistrarAlumno");
ButtonRegistrarAlumn01.addEventListener("click", function(){
	CapValoresAlumnos()

});

function CapValoresAlumnos() {
	Alumno={
		Nombre:"SIN ESPECIFICAR",
		Apellido:"SIN ESPECIFICAR",
		Edad:0,
		Correo:"SIN ESPECIFICAR",
		Telefono:"SIN ESPECIFICAR",
		Direccion:"SIN ESPECIFICAR",
		Nie:"SIN ESPECIFICAR"
	}
	Alumno.Nombre=document.querySelector("#IdNombreAlumno").value;
	Alumno.Apellido=document.querySelector("#IdApellidoAlumno").value;
	Alumno.Edad=document.querySelector("#IdEdadAlumno").value;
	Alumno.Correo=document.querySelector("#IdCorreiAlumno").value;
	Alumno.Telefono=document.querySelector("#IdTelefonoAlumno").value;
	Alumno.Direccion=document.querySelector("#IdDireccionAlumno").value;
	Alumno.Nie=document.querySelector("#IdNieAlumno").value;
	console.log(Alumno);
	alert(Alumno.Nombre);
}

ButtonRegistrarFac.addEventListener("click", function(){ 
	let ObjFacultad={
		Nombre:"SIN ESPECIFCAR",
		Codigo:"SIN ESPECIFCAR"
	}
	let Facultad = document.querySelector("#IdFacultad");
	let CodFacultad = document.querySelector("#IdCodFacultad");
	ObjFacultad.Nombre=Facultad.value;
	ObjFacultad.Codigo=CodFacultad.value;

	let Url='Controller/RegistrarFacultad.php';
	let Metodo="POST";

	fetch(Url, {
  		method: Metodo,
  		body: JSON.stringify(ObjFacultad),
  		headers: {"Content-type": "application/json; charset=UTF-8"}
		})
		.then(response => response.json())
		.then(datos => RRegistrarFacultad(datos))
		.catch(err => console.log(err)); 
});

function RRegistrarFacultad(datos) {
	console.log(datos);
}
*/