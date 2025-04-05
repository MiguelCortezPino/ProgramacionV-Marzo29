function FijarValorMenus(ValorFijar) {
	var Mostrar;
	var Agregar;
	var Editar;

	Mostrar= document.getElementById("IdMostrar").value=ValorFijar;
	Agregar= document.getElementById("IdAgregar").value=ValorFijar;
	Editar= document.getElementById("IdEditar").value=ValorFijar;
	if(ValorFijar==1){
		InsertHtmlVmMostarEmp();
		EspecificarModul("EMISORES");
		ObtenerEmisores();
	}
	
}

function CapEmisorEditarXId() {

	let IdEmi=$('input:radio[name=emisor]:checked').val();
	Emisor ={};
	Emisor.Id=IdEmi;
	Emisor.IdUsuario=ObtenerCookies(" Id");
	let Url='http://localhost/FacturacionCeren/Controller/ObtenerEmisor.php';
	let Metodo="POST";

	fetch(Url, {
  		method: Metodo,
  		body: JSON.stringify(Emisor),
  		headers: {"Content-type": "application/json; charset=UTF-8"}
		})
		.then(response => response.json())
		.then(datos => RCapEmisorEditarXId(datos))
		.catch(err => console.log(err));
	
}

function RCapEmisorEditarXId(datos) {
	console.log(datos);
	let NombreEmpresa = document.getElementById("nombreEmp").value=datos.Emisor.Empresa;
	let NombreApoderado = document.getElementById("IdNombreApoderado").value=datos.Emisor.Nombre;
	let ApellidoApoderado = document.getElementById("IdApellidoApoderado").value=datos.Emisor.Apellido;
	let CorreoApoderado = document.getElementById("IdCorreoApo").value=datos.Emisor.Correo;
	let TelefonoApoderado = document.getElementById("IdTelApo").value=datos.Emisor.Telefono;
	let NitEmpresa = document.getElementById("IdNit").value=datos.Emisor.Nit;
	let NRCEmpresa = document.getElementById("IdNRC").value=datos.Emisor.Nrc;
	let Departamento = document.getElementById("IdDepartamentosVmME").value=datos.Emisor.Departamento;
	let Municipio = document.getElementById("IdMunicipiosVmME");
	let Direccion = document.getElementById("IdDireccionVmME").value=datos.Emisor.Direccion;


	var MostrarHTML='';
	MostrarHTML+='<option value="'+datos.Emisor.Municipio+'">'+datos.Emisor.Municipio+'</option>';
	Municipio.innerHTML = MostrarHTML;

	var ArrActividadesEco =[];
	var MostrarHTML01='';
		MostrarHTML01+='<table class="table table-bordered">';
		MostrarHTML01+='<tr>';
		MostrarHTML01+='<td>No</td>';
		MostrarHTML01+='<td>CODIGO</td>';
		MostrarHTML01+='<td>DESCRIPCION</td>';
		MostrarHTML01+='</tr>';
	if (datos.RegistrosA >0){
			let ItemArr=0;
			for (var ContA = 0; ContA < datos.Actividades.length; ContA++) {
				MostrarHTML01+='<tr>';
				MostrarHTML01+='<td>'+datos.Actividades[ContA].Numero+'</td>';
				MostrarHTML01+='<td>'+datos.Actividades[ContA].Codigo+'</td>';
				MostrarHTML01+='<td>'+datos.Actividades[ContA].Descripcion+'</td>';
				MostrarHTML01+='</tr>';

				ArrActividadesEco[ContA]=ActividadesEcon;
				ArrActividadesEco[ContA].Numero=datos.Actividades[ContA].Numero;
				ArrActividadesEco[ContA].Codido=datos.Actividades[ContA].Codigo;
				ArrActividadesEco[ContA].Descripcion=datos.Actividades[ContA].Descripcion;
				ItemArr=ItemArr+1;
			}
			ItemArr=ItemArr-1;
			sessionStorage.setItem('Actividades',JSON.stringify(ArrActividadesEco));
			sessionStorage.setItem('ItemActividad',ItemArr);
			console.log(ArrActividadesEco)
	}
	MostrarHTML01+='</table>';
	
	let Establecimiento= {
		Numero:0,
		Codigo:"0000",
		Tipo:"SIN ESPECIFICAR"
	}
	
	var ArrEstablecimientos=[];
	let ItemArrE=0;
	
	var MostrarHTML02='';
		MostrarHTML02+='<table class="table table-bordered">';
		MostrarHTML02+='<tr>';
		MostrarHTML02+='<td>No</td>';
		MostrarHTML02+='<td>CODIGO</td>';
		MostrarHTML02+='<td>TIPO</td>';
		MostrarHTML02+='</tr>';
		
		if (datos.RegistrosE >0){
			for (var ContE = 0; ContE < datos.Establecimientos.length; ContE++) {
				MostrarHTML02+='<tr>';
				MostrarHTML02+='<td>'+datos.Establecimientos[ContE].Numero+'</td>';
				MostrarHTML02+='<td>'+datos.Establecimientos[ContE].Codigo+'</td>';
				MostrarHTML02+='<td>'+datos.Establecimientos[ContE].Tipo+'</td>';
				MostrarHTML02+='<td>'+'<input type="radio"  name="CtrlRadioEstab" value="'+datos.Establecimientos[ContE].Numero+'"></td>';
				MostrarHTML02+='</tr>';

				ArrEstablecimientos[ContE]=Establecimiento;
				ArrEstablecimientos[ContE].Numero=datos.Establecimientos[ContE].Numero;
				ArrEstablecimientos[ContE].Codigo=datos.Establecimientos[ContE].Codigo;
				ArrEstablecimientos[ContE].Tipo=datos.Establecimientos[ContE].Tipo;
				ItemArrE=ItemArrE+1;
			}
			ItemArrE=ItemArrE-1;
			sessionStorage.setItem('Establecimientos',JSON.stringify(ArrEstablecimientos));
			sessionStorage.setItem('ItemEstablecimiento',ItemArrE);
		}
		
	MostrarHTML02+='</table>';


	let Punto ={
		Numero:0,
		NombrePunto:"SIN ESPECIFICAR",
		CodPunto:"0000",
		NumEstablecimiento:0
	}
	var ArrPuntoVetas=[];
	let ItemArrV=0;

	var MostrarHTML03='';
	MostrarHTML03+='<table class="table table-bordered">';
	MostrarHTML03+='<tr>';
	MostrarHTML03+='<td>No</td>';
	MostrarHTML03+='<td>P. VENTA</td>';
	MostrarHTML03+='<td>CODIGO</td>';
	MostrarHTML03+='<td>ESTABLECIMIENTO</td>';
	MostrarHTML03+='</tr>';
		if (datos.RegistrosV >0){
			for (var ContV = 0; ContV < datos.Pventas.length; ContV++) {
				MostrarHTML03+='<tr>';
				MostrarHTML03+='<td>'+datos.Pventas[ContV].Numero+'</td>';
				MostrarHTML03+='<td>'+datos.Pventas[ContV].Nombre+'</td>';
				MostrarHTML03+='<td>'+datos.Pventas[ContV].Codigo+'</td>';
				MostrarHTML03+='<td>'+datos.Pventas[ContV].NumeroEstab+'</td>';
				MostrarHTML03+='</tr>';

				ArrPuntoVetas[ContV]=Punto;
				ArrPuntoVetas[ContV].Numero=datos.Pventas[ContV].Numero;
				ArrPuntoVetas[ContV].NombrePunto=datos.Pventas[ContV].Nombre;
				ArrPuntoVetas[ContV].CodPunto=datos.Pventas[ContV].Codigo;
				ArrPuntoVetas[ContV].NumEstablecimiento=datos.Pventas[ContV].NumeroEstab;
				ItemArrV=ItemArrV+1;
			}
			ItemArrV=ItemArrV-1;
			sessionStorage.setItem('PuntosVenta',JSON.stringify(ArrPuntoVetas));
			sessionStorage.setItem('ItemPuntosVenta',ItemArrV);
		}
	MostrarHTML03+='</table>';

	document.getElementById('IdActividadesEco').innerHTML = MostrarHTML01;
	document.getElementById('IdEstabelcimientos').innerHTML = MostrarHTML02;
	document.getElementById('IdPuntoVenta').innerHTML = MostrarHTML03;
	document.getElementById("IdEmisorID").value=datos.Emisor.IdEmisor;
	/*
	ArrActividadesEco[ItemArr]=ActividadesEcon;
	ArrActividadesEco[ItemArr].Numero=ArrActividadesEco[ItemArr].Numero+1;
	ArrActividadesEco[ItemArr].Codido=Codigo;
	ArrActividadesEco[ItemArr].Descripcion=Descripcion;
	*/
	//document.getElementById('IdContenidoM').innerHTML = MostrarHTML;
}

function EspecificarModul(Modulo){
	document.getElementById('EspModulo').innerHTML = "MODULO: "+Modulo;
}

function ObtenerEmisores() {
	alert("Emisores");

	UsuarioA ={};
	UsuarioA.IdUsuario=ObtenerCookies(" Id");

	let Url='http://localhost/FacturacionCeren/Controller/ObtenerEmisores.php';
	let Metodo="POST";
	
	fetch(Url, {
  		method: Metodo,
  		body: JSON.stringify(UsuarioA),
  		headers: {"Content-type": "application/json; charset=UTF-8"}
		})
		.then(response => response.json())
		.then(datos => RObtenerEmisores(datos))
		.catch(err => console.log(err));
}

const RObtenerEmisores = (datos) =>{
	console.log(datos);
	let MostrarHTML= '';
	MostrarHTML+='<table class="table">';
	MostrarHTML+='<tr>';
	MostrarHTML+='<td>'+'EMPRESA'+'</td>';
	MostrarHTML+='<td>'+'NOMBRE'+'</td>';
	MostrarHTML+='<td>'+'APELLIDO'+'</td>';
	MostrarHTML+='<td>'+'CORREO'+'</td>';
	MostrarHTML+='<td>'+'TELEFONO'+'</td>';
	MostrarHTML+='</tr>';
	for (var ContE = 0; ContE < datos.Emisores.length; ContE++) {
		MostrarHTML+='<tr>';
		MostrarHTML+='<td>'+datos.Emisores[ContE].Empresa+'</td>';
		MostrarHTML+='<td>'+datos.Emisores[ContE].Nombre+'</td>';
		MostrarHTML+='<td>'+datos.Emisores[ContE].Apellido+'</td>';
		MostrarHTML+='<td>'+datos.Emisores[ContE].Correo+'</td>';
		MostrarHTML+='<td>'+datos.Emisores[ContE].Telefono+'</td>';
		MostrarHTML+='<td>'+'<input type="radio" name="emisor" value="'+datos.Emisores[ContE].IdEmisor+'">'+'</td>';
		MostrarHTML+='</tr>';
	}
	MostrarHTML+='</table>';
	//MostrarHTML+='<p>'+datos.Registros+'</p>';
	document.getElementById('IdContenidoM').innerHTML = MostrarHTML;
}

function InsertHtmlVmMostarEmp() {

	$("#F-VmMostrar01").empty();
	var TextoHTML='<div class="row">';
	TextoHTML+='<div class="col">';
	TextoHTML+='<input type="hidden" id="IdEmisorID" name="nIdEmisorID" value="0">';
	TextoHTML+='<label for="nombreEmp" class="form-label">EMPRESA(*):</label>';
	TextoHTML+='<input type="text" id="nombreEmp" name="nnombreEmp" placeholder="Ingrese Nombre o Razon Social" class="validate[required] form-control">';
	TextoHTML+='</div>';
	TextoHTML+='</div>';

	TextoHTML+='<div class="row">';
	TextoHTML+='<div class="col">';
	TextoHTML+='<label for="IdNombreApoderado" class="form-label">NOMBRE(*):</label>';
	TextoHTML+='<input type="text" id="IdNombreApoderado" name="nIdNombreApoderado" placeholder="Nombre del Apoderado" class="form-control">';
	TextoHTML+='</div>';
	TextoHTML+='<div class="col">';
	TextoHTML+='<label for="IdApellidoApoderado" class="form-label">APELLIDO(*):</label>';
	TextoHTML+='<input type="text" id="IdApellidoApoderado" name="nIdApellidoApoderado" placeholder="Apellido del Apoderado" class="form-control">';
	TextoHTML+='</div>';
	TextoHTML+='</div>';


	TextoHTML+='<div class="row">';
	TextoHTML+='<div class="col">';
	TextoHTML+='<label for="IdCorreoApo" class="form-label">CORREO(*):</label>';
	TextoHTML+='<input type="text" id="IdCorreoApo" name="nIdCorreoApo" placeholder="Nombre del Apoderado" class="form-control">';
	TextoHTML+='</div>';
	TextoHTML+='<div class="col">';
	TextoHTML+='<label for="IdTelApo" class="form-label">TELEFONO(*):</label>';
	TextoHTML+='<input type="text" id="IdTelApo" name="nIdTelApo" placeholder="Apellido del Apoderado" class="form-control">';
	TextoHTML+='</div>';
	TextoHTML+='</div>';


	TextoHTML+='<div class="row">';
	TextoHTML+='<div class="col">';
	TextoHTML+='<label for="IdNit" class="form-label">NIT(*):</label>';
	TextoHTML+='<input type="text" id="IdNit" name="nIdNit" placeholder="Ingrese el NIT o DUI" class="form-control">';
	TextoHTML+='</div>';
	TextoHTML+='<div class="col">';
	TextoHTML+='<label for="IdNRC" class="form-label">NRC(*):</label>';
	TextoHTML+='<input type="text" id="IdNRC" name="nIdNRC" placeholder="Ingrese el NRC" class="form-control">';
	TextoHTML+='</div>';
	TextoHTML+='</div>';

	TextoHTML+='<div class="row">';
	TextoHTML+='<div class="col">';
	TextoHTML+='<label for="IdCodActividad" class="form-label">CODIGO ACTIVIDAD:</label>';
	TextoHTML+='<input type="text" id="IdCodActividad" name="nIdCodActividad" placeholder="Ingrese el codigo de la Actvidad" class="form-control">';
	TextoHTML+='</div>';
	TextoHTML+='<div class="col">';
	TextoHTML+='<label for="IdDescActividad" class="form-label">DESCRIPCION ACTIVIDAD:</label>';
	TextoHTML+='<input type="text" id="IdDescActividad" name="nIdDescActividad" placeholder="Ingrese el codigo de la Actvidad" class="form-control">';
	TextoHTML+='</div>';
	
	TextoHTML+='</div>';

	TextoHTML+='<div class="row">';
	TextoHTML+='<div class="col">';
	TextoHTML+='<button type="button" class="btn btn-dark" id="IdAddActividadEco" onclick="'+'AlmacenarActvidad();'+'">AGREGAR(+)</button>';
	TextoHTML+='&nbsp;';
	TextoHTML+='<button type="button" class="btn btn-dark" id="IdLessActividadEco" onclick="'+'EliminarActividad();'+'">QUITAR(-)</button>';
	//TextoHTML+='</div>';
	
	TextoHTML+='<div class="col-8" id="IdActividadesEco">';
	TextoHTML+='</div>';
	TextoHTML+='</div>';

	TextoHTML+='<div class="row">';
	TextoHTML+='<div class="col">';
	TextoHTML+='<select class="form-select" id="IdDepartamentosVmME" onchange="'+"LLamarMunicipio('IdDepartamentosVmME', 'IdMunicipiosVmME')"+'" aria-label="Default select example">';
	TextoHTML+=RetornarDepartamentos();
	TextoHTML+='</select>';
	TextoHTML+='</div>';
	TextoHTML+='<div class="col">';
	TextoHTML+='<select class="form-select" id="IdMunicipiosVmME" aria-label="Default select example">';
	TextoHTML+='';
	TextoHTML+='</select>';
	TextoHTML+='</div>';
	TextoHTML+='</div>';

	TextoHTML+='<div class="row">';
	TextoHTML+='<div class="col">';
	TextoHTML+='<label for="IdDireccionVmME" class="form-label">DIRECCION(*):</label>';
	TextoHTML+='<input type="text" id="IdDireccionVmME" name="nIdDireccionVmME" placeholder="Ingrese la direccion" class="form-control">';
	TextoHTML+='</div>';
	TextoHTML+='</div>';

	TextoHTML+='<div class="row">';
	TextoHTML+='<div class="col">';
	TextoHTML+='<label for="IdCodEstablecimiento" class="form-label">CODIGO ESTABLECIMIENTO:</label>';
	TextoHTML+='<input type="text" id="IdCodEstablecimiento" name="nIdCodEstablecimiento" placeholder="Ingrese el codigo del Establecimiento" class="form-control">';
	TextoHTML+='</div>';
	TextoHTML+='<div class="col">';
	TextoHTML+='<label for="IdTipEstablecimiento" class="form-label">TIPO ESTABLECIMIENTO:</label>';
	TextoHTML+='<select class="form-select" id="IdTipoEstablecimiento" aria-label="Default select example">';
	TextoHTML+=ReturnTipoEstablecimiento();
	TextoHTML+='</select>';
	TextoHTML+='</div>';
	TextoHTML+='</div>';

	TextoHTML+='<div class="row">';
	TextoHTML+='<div class="col">';
	TextoHTML+='<button type="button" class="btn btn-dark" id="IdAddEstablecimeinto" onclick="'+'AlmacenarEstablecimiento();'+'">AGREGAR(+)</button>';
	TextoHTML+='&nbsp;';
	TextoHTML+='<button type="button" class="btn btn-dark" id="IdLessEstablecimeinto" onclick="'+'EliminarEstablecimiento();'+'">QUITAR(-)</button>';

	TextoHTML+='<div class="col-8" id="IdEstabelcimientos">';
	TextoHTML+='</div>';
	TextoHTML+='</div>';


	TextoHTML+='<div class="row">';
	TextoHTML+='<div class="col">';
	TextoHTML+='<label for="IdCodPuntoVenta" class="form-label">COD. PUNTO DE VENTA:</label>';
	TextoHTML+='<input type="text" id="IdCodPuntoVenta" name="nIdCodPuntoVenta" placeholder="Codigo de Punto de Venta" class="form-control">';
	TextoHTML+='</div>';
	TextoHTML+='<div class="col">';
	TextoHTML+='<label for="IdPuntoDeVenta" class="form-label">PUNTO DE VENTA:</label>';
	TextoHTML+='<input type="text" id="IdPuntoDeVenta" name="nIdPuntoDeVenta" placeholder="Ingrese el Punto de Venta" class="form-control">';
	TextoHTML+='</div>';


	TextoHTML+='<div class="row">';
	TextoHTML+='<div class="col">';
	TextoHTML+='<button type="button" class="btn btn-dark" id="IdAddPuntoVenta" onclick="'+'AlmacenarPuntoVenta();'+'">AGREGAR(+)</button>';
	TextoHTML+='&nbsp;';
	TextoHTML+='<button type="button" class="btn btn-dark" id="IdLessPuntoVenta" onclick="'+'EliminarPuntoVenta();'+'">QUITAR(-)</button>';

	TextoHTML+='<div class="col-8" id="IdPuntoVenta">';
	TextoHTML+='</div>';
	TextoHTML+='</div>';
	

	TextoHTML+='<div class="row">';
	TextoHTML+='<div class="col">';
	TextoHTML+='<br/>';
	TextoHTML+='<button type="button" class="btn btn-primary btn-lg btn-block" onclick="'+'VerMetEmisor();'+'">REGISTRAR</button>';
	TextoHTML+='</div>';
	TextoHTML+='</div>';


	TextoHTML+='</div>';
	$("#F-VmMostrar01").append(TextoHTML);
}

function VerMetEmisor() {
	let IdentficadorEmi = document.getElementById("IdEmisorID").value;
	if (IdentficadorEmi != 0) {
		EditarEmisorXId();
	}else{
		//alert("REGISTRAR");
		CapDatosEmisor();
	}
	
}


function EditarEmisorXId() {
	let Identificador = document.getElementById("IdEmisorID").value;
	let NombreEmpresa = document.getElementById("nombreEmp").value;
	let NombreApoderado = document.getElementById("IdNombreApoderado").value;
	let ApellidoApoderado = document.getElementById("IdApellidoApoderado").value;
	let CorreoApoderado = document.getElementById("IdCorreoApo").value;
	let TelefonoApoderado = document.getElementById("IdTelApo").value;
	let NitEmpresa = document.getElementById("IdNit").value;
	let NRCEmpresa = document.getElementById("IdNRC").value;
	let Departamento = document.getElementById("IdDepartamentosVmME").value;
	let Municipio = document.getElementById("IdMunicipiosVmME").value;
	let Direccion = document.getElementById("IdDireccionVmME").value;

	Emisor ={};

	Emisor.Id=Identificador;
	Emisor.Empresa=NombreEmpresa;
	Emisor.Nombre=NombreApoderado;
	Emisor.Apellido=ApellidoApoderado;
	Emisor.Correo=CorreoApoderado;
	Emisor.Telefono=TelefonoApoderado;
	Emisor.Nit=NitEmpresa;
	Emisor.Nrc=NRCEmpresa;
	Emisor.Departamento=Departamento;
	Emisor.Municipio=Municipio;
	Emisor.Direccion=Direccion;
	Emisor.IdUsuario=ObtenerCookies(" Id");
	if (typeof(Storage) !== 'undefined'){
		if (sessionStorage.getItem('Actividades') !== undefined
			&& sessionStorage.getItem('Actividades')){
			Emisor.Actividades=JSON.parse(sessionStorage.getItem('Actividades'));
		}
		if (sessionStorage.getItem('Establecimientos') !== undefined
			&& sessionStorage.getItem('Establecimientos')){
			Emisor.Establecimientos = JSON.parse(sessionStorage.getItem('Establecimientos'));
		}
		if (sessionStorage.getItem('PuntosVenta') !== undefined
			&& sessionStorage.getItem('PuntosVenta')){
			Emisor.Puntosventa = JSON.parse(sessionStorage.getItem('PuntosVenta'));
		}
	}


	let Url='http://localhost/FacturacionCeren/Controller/ActualizarEmisor.php';
	let Metodo="POST";
	
	fetch(Url, {
  		method: Metodo,
  		body: JSON.stringify(Emisor),
  		headers: {"Content-type": "application/json; charset=UTF-8"}
		})
		.then(response => response.json())
		.then(datos => REditarEmisorXId(datos))
		.catch(err => console.log(err));
}

function REditarEmisorXId(datos) {
	console.log(datos);
	let MostrarHTML= '';

	MostrarHTML+='<div class="row">';
	MostrarHTML+='<div class="col">';
	MostrarHTML+='<p>'+datos.Mensaje+'</p>';
	MostrarHTML+='</div>';
	MostrarHTML+='</div>';
	document.getElementById('F-VmMostrar01').innerHTML = MostrarHTML;
}

function CapDatosEmisor() {
	
	let NombreEmpresa = document.getElementById("nombreEmp").value;
	let NombreApoderado = document.getElementById("IdNombreApoderado").value;
	let ApellidoApoderado = document.getElementById("IdApellidoApoderado").value;
	let CorreoApoderado = document.getElementById("IdCorreoApo").value;
	let TelefonoApoderado = document.getElementById("IdTelApo").value;
	let NitEmpresa = document.getElementById("IdNit").value;
	let NRCEmpresa = document.getElementById("IdNRC").value;
	let Departamento = document.getElementById("IdDepartamentosVmME").value;
	let Municipio = document.getElementById("IdMunicipiosVmME").value;
	let Direccion = document.getElementById("IdDireccionVmME").value;
	//let IdUsuario= $.cookie('Id');
	
	Emisor ={};

	Emisor.Empresa=NombreEmpresa;
	Emisor.Nombre=NombreApoderado;
	Emisor.Apellido=ApellidoApoderado;
	Emisor.Correo=CorreoApoderado;
	Emisor.Telefono=TelefonoApoderado;
	Emisor.Nit=NitEmpresa;
	Emisor.Nrc=NRCEmpresa;
	Emisor.Departamento=Departamento;
	Emisor.Municipio=Municipio;
	Emisor.Direccion=Direccion;
	Emisor.IdUsuario=ObtenerCookies(" Id");
	if (typeof(Storage) !== 'undefined'){
		if (sessionStorage.getItem('Actividades') !== undefined
			&& sessionStorage.getItem('Actividades')){
			Emisor.Actividades=JSON.parse(sessionStorage.getItem('Actividades'));
		}
		if (sessionStorage.getItem('Establecimientos') !== undefined
			&& sessionStorage.getItem('Establecimientos')){
			Emisor.Establecimientos = JSON.parse(sessionStorage.getItem('Establecimientos'));
		}
		if (sessionStorage.getItem('PuntosVenta') !== undefined
			&& sessionStorage.getItem('PuntosVenta')){
			Emisor.Puntosventa = JSON.parse(sessionStorage.getItem('PuntosVenta'));
		}
	}

	let Url='http://localhost/FacturacionCeren/Controller/EmisorController.php';
	let Metodo="POST";
	
	fetch(Url, {
  		method: Metodo,
  		body: JSON.stringify(Emisor),
  		headers: {"Content-type": "application/json; charset=UTF-8"}
		})
		.then(response => response.json())
		.then(datos => mostrarData(datos))
		.catch(err => console.log(err));


	
	//alert(ObtenerCookies(" Id"));
}

const mostrarData = (datos) =>{
	console.log(datos);
	let MostrarHTML= '';

	MostrarHTML+='<div class="row">';
	MostrarHTML+='<div class="col">';
	MostrarHTML+='<p>'+datos.Mensaje+'</p>';
	MostrarHTML+='</div>';
	MostrarHTML+='</div>';
	document.getElementById('F-VmMostrar01').innerHTML = MostrarHTML;
	
}


function ObtenerCookies(ClaveCookie) {
	var valor=0;
	ArrCookies=document.cookie.split(";");
	ArrCookies.forEach((ValoresCookies) => {
		var ArrCookie=ValoresCookies.split("=");
		if (ArrCookie[0]==ClaveCookie) {
			valor=ArrCookie[1];
		}	
	});
	return valor;
}





function ReturnTipoEstablecimiento() {
	var TextoHTML='<option value="SIN ESPECIFICAR">'+'SIN ESPECIFICAR'+'</option>';
	
	TextoHTML += '<option value="CASA MATRIZ">CASA MATRIZ</option>';
	TextoHTML += '<option value="SUCURSAL">SUCURSAL</option>';
	TextoHTML += '<option value="AGENCIA">AGENCIA</option>';
	TextoHTML += '<option value="BODEGA">BODEGA</option>';
	TextoHTML += '<option value="PREDIO">PREDIO</option>';
	TextoHTML += '<option value="OTRO">OTRO</option>';
	

	return TextoHTML;
}

function RetornarDepartamentos() {
	var TextoHTML='<option value="SIN ESPECIFICAR">'+'SIN ESPECIFICAR'+'</option>';
	
	TextoHTML += '<option value="SAN SALVADOR">SAN SALVADOR</option>';
	TextoHTML += '<option value="CABAÑAS">CABAÑAS</option>';
	TextoHTML += '<option value="CHALATENANGO">CHALATENANGO</option>';
	TextoHTML += '<option value="CUSCATLAN">CUSCATLAN</option>';
	TextoHTML += '<option value="LA LIBERTAD">LA LIBERTAD</option>';
	TextoHTML += '<option value="LA PAZ">LA PAZ</option>';
	TextoHTML += '<option value="SAN VICENTE">SAN VICENTE</option>';
	TextoHTML += '<option value="MORAZAN">MORAZAN</option>';
	TextoHTML += '<option value="SAN MIGUEL">SAN MIGUEL</option>';
	TextoHTML += '<option value="USULUTAN">USULUTAN</option>';
	TextoHTML += '<option value="LA UNION">LA UNION</option>';
	TextoHTML += '<option value="AUACHAPAN">AUACHAPAN</option>';
	TextoHTML += '<option value="SONSONATE">SONSONATE</option>';
	TextoHTML += '<option value="SANTA ANA">SANTA ANA</option>';

	return TextoHTML;
}

function ObtenerEmisorId(IdDetalleE) {
	let IdEmi=$('input:radio[name=emisor]:checked').val();

	Emisor ={};
	Emisor.Id=IdEmi;
	Emisor.IdUsuario=ObtenerCookies(" Id");
	let Url='http://localhost/FacturacionCeren/Controller/ObtenerEmisor.php';
	let Metodo="POST";

	fetch(Url, {
  		method: Metodo,
  		body: JSON.stringify(Emisor),
  		headers: {"Content-type": "application/json; charset=UTF-8"}
		})
		.then(response => response.json())
		.then(datos => mostrarElEmisor(datos))
		.catch(err => console.log(err));

	//document.getElementById(IdDetalleE).innerHTML=IdEmi;
}

const mostrarElEmisor = (datos) =>{
	console.log(datos);
	let MostrarHTML= '';


	MostrarHTML+='<div class="row">';
	MostrarHTML+='<div class="col">';
	MostrarHTML+='<table class="table">';
	if (datos.Registros >0) {
		MostrarHTML+='<tr>';
			MostrarHTML+='<td colspan="2">';
			MostrarHTML+='EMPRESA: ';
			MostrarHTML+=datos.Emisor.Empresa;
			MostrarHTML+='</td>';

			MostrarHTML+='<td>';
			MostrarHTML+='TEL: ';
			MostrarHTML+=datos.Emisor.Telefono;
			MostrarHTML+='</td>';

			MostrarHTML+='<td>';
			MostrarHTML+='CORREO: ';
			MostrarHTML+=datos.Emisor.Correo;
			MostrarHTML+='</td>';
		MostrarHTML+='</tr>';

		MostrarHTML+='<tr>';
			MostrarHTML+='<td>';
			MostrarHTML+='NOMBRE: ';
			MostrarHTML+=datos.Emisor.Nombre;
			MostrarHTML+='</td>';

			MostrarHTML+='<td>';
			MostrarHTML+='APELLIDO: ';
			MostrarHTML+=datos.Emisor.Apellido;
			MostrarHTML+='</td>';

			MostrarHTML+='<td>';
			MostrarHTML+='NIT: ';
			MostrarHTML+=datos.Emisor.Nit;
			MostrarHTML+='</td>';

			MostrarHTML+='<td>';
			MostrarHTML+='NRC: ';
			MostrarHTML+=datos.Emisor.Nrc;
			MostrarHTML+='</td>';

		MostrarHTML+='</tr>';

		MostrarHTML+='<tr>';
			MostrarHTML+='<td>';
			MostrarHTML+='DEPARTAMENTO: ';
			MostrarHTML+=datos.Emisor.Departamento;
			MostrarHTML+='</td>';

			MostrarHTML+='<td>';
			MostrarHTML+='MUNICIPIO: ';
			MostrarHTML+=datos.Emisor.Municipio;
			MostrarHTML+='</td>';

			MostrarHTML+='<td  colspan="2">';
			MostrarHTML+='DIRECCION: ';
			MostrarHTML+=datos.Emisor.Direccion;
			MostrarHTML+='</td>';
		MostrarHTML+='</tr>';

	}
	MostrarHTML+='</table>';
	MostrarHTML+='<table class="table">';
	MostrarHTML+='<tr>';
	MostrarHTML+='<td>'+'NUMERO'+'</td>';
	MostrarHTML+='<td>'+'CODIGO'+'</td>';
	MostrarHTML+='<td>'+'DESCRIPCION'+'</td>';
	MostrarHTML+='</tr>';
		if (datos.RegistrosA >0){
			for (var ContA = 0; ContA < datos.Actividades.length; ContA++) {
				MostrarHTML+='<tr>';
				MostrarHTML+='<td>'+datos.Actividades[ContA].Numero+'</td>';
				MostrarHTML+='<td>'+datos.Actividades[ContA].Codigo+'</td>';
				MostrarHTML+='<td>'+datos.Actividades[ContA].Descripcion+'</td>';
				MostrarHTML+='</tr>';
			}
		}
	MostrarHTML+='</table>';

	
	MostrarHTML+='<table class="table">';
	MostrarHTML+='<tr>';
	MostrarHTML+='<td>'+'NUMERO'+'</td>';
	MostrarHTML+='<td>'+'CODIGO'+'</td>';
	MostrarHTML+='<td>'+'TIPO'+'</td>';
	MostrarHTML+='</tr>';
		if (datos.RegistrosE >0){
			for (var ContE = 0; ContE < datos.Establecimientos.length; ContE++) {
				MostrarHTML+='<tr>';
				MostrarHTML+='<td>'+datos.Establecimientos[ContE].Numero+'</td>';
				MostrarHTML+='<td>'+datos.Establecimientos[ContE].Codigo+'</td>';
				MostrarHTML+='<td>'+datos.Establecimientos[ContE].Tipo+'</td>';
				MostrarHTML+='</tr>';
			}
		}
	MostrarHTML+='</table>';


	MostrarHTML+='<table class="table">';
	MostrarHTML+='<tr>';
	MostrarHTML+='<td>'+'NUMERO'+'</td>';
	MostrarHTML+='<td>'+'NOMBRE'+'</td>';
	MostrarHTML+='<td>'+'CODIGO'+'</td>';
	MostrarHTML+='<td>'+'NUM. ESTABLECIMIENTO'+'</td>';

	MostrarHTML+='</tr>';
		if (datos.RegistrosV >0){
			for (var ContV = 0; ContV < datos.Pventas.length; ContV++) {
				MostrarHTML+='<tr>';
				MostrarHTML+='<td>'+datos.Pventas[ContV].Numero+'</td>';
				MostrarHTML+='<td>'+datos.Pventas[ContV].Nombre+'</td>';
				MostrarHTML+='<td>'+datos.Pventas[ContV].Codigo+'</td>';
				MostrarHTML+='<td>'+datos.Pventas[ContV].NumeroEstab+'</td>';

				MostrarHTML+='</tr>';
			}
		}
	MostrarHTML+='</table>';

	MostrarHTML+='</div>';
	MostrarHTML+='</div>';
	document.getElementById('F-VmMostrar02').innerHTML = MostrarHTML;
	
}


function VmMostrar(IdVentanaMoDal) {
	var VmodalMostar=document.getElementById(IdVentanaMoDal);
	VmodalMostar.showModal();
}

function CerrarVmMostrar(IdVentanaMoDal) {
	var VmodalMostar=document.getElementById(IdVentanaMoDal);
	VmodalMostar.close();
	sessionStorage.removeItem('ItemActividad');
	sessionStorage.removeItem('Actividades');
	sessionStorage.removeItem('Establecimientos');
	sessionStorage.removeItem('ItemEstablecimiento');
	let SetearFormu=document.getElementById('F-VmMostrar01');
	SetearFormu.reset();
	document.getElementById('IdActividadesEco').innerHTML = "";
	document.getElementById('IdEstabelcimientos').innerHTML = "";
	document.getElementById('IdPuntoVenta').innerHTML = "";
}

function LLamarMunicipio(IdMunicipio01, IdMunicipio02)
{
	var ImprimirDiplo01 = document.getElementById(IdMunicipio01).value;//"RUsuarioE13"
	var mostrarDiplo = '';
	if(ImprimirDiplo01=="SAN SALVADOR")
	{
		mostrarDiplo += '<option value="SIN ASIGNAR">SIN ASIGNAR</option>';
		mostrarDiplo += '<option value="SAN SALVADOR">SAN SALVADOR</option>';
		mostrarDiplo += '<option value="AGUILARES">AGUILARES</option>';
		mostrarDiplo += '<option value="APOPA">APOPA</option>';
		mostrarDiplo += '<option value="AYUTUXTEPEQUE">AYUTUXTEPEQUE</option>';
		mostrarDiplo += '<option value="CUSCATANCINGO">CUSCATANCINGO</option>';
		mostrarDiplo += '<option value="CIUDAD DELGADO">CIUDAD DELGADO</option>';
		mostrarDiplo += '<option value="EL PAISNAL">EL PAISNAL</option>';
		mostrarDiplo += '<option value="GUAZAPA">GUAZAPA</option>';
		mostrarDiplo += '<option value="ILOPANGO">ILOPANGO</option>';
		mostrarDiplo += '<option value="MEJICANOS">MEJICANOS</option>';
		mostrarDiplo += '<option value="NEJAPA">NEJAPA</option>';
		mostrarDiplo += '<option value="PANCHIMALCO">PANCHIMALCO</option>';
		mostrarDiplo += '<option value="ROSARIO DE MORA">ROSARIO DE MORA</option>';
		mostrarDiplo += '<option value="SAN MARCOS">SAN MARCOS</option>';
		mostrarDiplo += '<option value="SAN MARTIN">SAN MARTIN</option>';
		mostrarDiplo += '<option value="SANTIAGO TEXACUANGOS">SANTIAGO TEXACUANGOS</option>';
		mostrarDiplo += '<option value="SANTO TOMAS">SANTO TOMAS</option>';
		mostrarDiplo += '<option value="SOYAPANGO">SOYAPANGO</option>';
		mostrarDiplo += '<option value="TONACATEPEQUE">TONACATEPEQUE</option>';

	}

	if(ImprimirDiplo01=="CABAÑAS")
	{
		mostrarDiplo += '<option value="SIN ASIGNAR">SIN ASIGNAR</option>';
		mostrarDiplo += '<option value="CINQUERA">CINQUERA</option>';
		mostrarDiplo += '<option value="DOLORES">DOLORES</option>';
		mostrarDiplo += '<option value="GUACOTECTI">GUACOTECTI</option>';
		mostrarDiplo += '<option value="ILOBASCO">ILOBASCO</option>';
		mostrarDiplo += '<option value="JUTIAPA">JUTIAPA</option>';
		mostrarDiplo += '<option value="SAN ISIDRO">SAN ISIDRO</option>';
		mostrarDiplo += '<option value="SENSUNTEPEQUE">SENSUNTEPEQUE</option>';
		mostrarDiplo += '<option value="TEJUTEPEQUE">TEJUTEPEQUE</option>';
		mostrarDiplo += '<option value="VICTORIA">VICTORIA</option>';

	}

		if(ImprimirDiplo01=="CHALATENANGO")
		{
			mostrarDiplo += '<option value="SIN ASIGNAR">SIN ASIGNAR</option>';
			mostrarDiplo += '<option value="CHALATENANGO">CHALATENANGO</option>';
			mostrarDiplo += '<option value="AGUA CALIENTE">AGUA CALIENTE</option>';
			mostrarDiplo += '<option value="ARCATAO">ARCATAO</option>';
			mostrarDiplo += '<option value="AZACUALPA">AZACUALPA</option>';
			mostrarDiplo += '<option value="CITALA">CITALA</option>';
			mostrarDiplo += '<option value="COMALAPA">COMALAPA</option>';
			mostrarDiplo += '<option value="CONCEPCION QUEZALTEPEQUE">CONCEPCION QUEZALTEPEQUE</option>';
			mostrarDiplo += '<option value="DULCE NOMBRE DE MARIA">DULCE NOMBRE DE MARIA</option>';
			mostrarDiplo += '<option value="EL CARRIZAL">EL CARRIZAL</option>';
			mostrarDiplo += '<option value="EL PARAISO">EL PARAISO</option>';
			mostrarDiplo += '<option value="LA LAGUNA">LA LAGUNA</option>';
			mostrarDiplo += '<option value="LA PALMA">LA PALMA</option>';
			mostrarDiplo += '<option value="LA REINA">LA REINA</option>';
			mostrarDiplo += '<option value="LAS VUELTAS">LAS VUELTAS</option>';
			mostrarDiplo += '<option value="NOMBRE DE JESUS">NOMBRE DE JESUS</option>';
			mostrarDiplo += '<option value="NUEVA CONCEPCION">NUEVA CONCEPCION</option>';
			mostrarDiplo += '<option value="NUEVA TRINIDAD">NUEVA TRINIDAD</option>';
			mostrarDiplo += '<option value="OJOS DE AGUA">OJOS DE AGUA</option>';
			mostrarDiplo += '<option value="POTONICO">POTONICO</option>';
			mostrarDiplo += '<option value="SAN ANTONIO DE LA CRUZ">SAN ANTONIO DE LA CRUZ</option>';
			mostrarDiplo += '<option value="SAN FERNANDO">SAN FERNANDO</option>';
			mostrarDiplo += '<option value="SAN ANTONIO DE LOS RANCHOS">SAN ANTONIO DE LOS RANCHOS</option>';
			mostrarDiplo += '<option value="SAN FRANCISCO LEMPA">SAN FRANCISCO LEMPA</option>';
			mostrarDiplo += '<option value="SAN FRANCISCO MORAZAN">SAN FRANCISCO MORAZAN</option>';
			mostrarDiplo += '<option value="SAN IGNACIO">SAN IGNACIO</option>';
			mostrarDiplo += '<option value="SAN ISIDRO LABRADOR">SAN ISIDRO LABRADOR</option>';
			mostrarDiplo += '<option value="SAN JOSE CANCASQUE">SAN JOSE CANCASQUE</option>';
			mostrarDiplo += '<option value="SAN JOSE LAS FLORES">SAN JOSE LAS FLORES</option>';
			mostrarDiplo += '<option value="SAN LUIS DEL CARMEN">SAN LUIS DEL CARMEN</option>';
			mostrarDiplo += '<option value="SAN MIGUEL DE MERCEDEZ">SAN MIGUEL DE MERCEDEZ</option>';
			mostrarDiplo += '<option value="SAN RAFAEL">SAN RAFAEL</option>';
			mostrarDiplo += '<option value="SANTA RITA">SANTA RITA</option>';
			mostrarDiplo += '<option value="TEJUTLA">TEJUTLA</option>';
	}

	if(ImprimirDiplo01=="CUSCATLAN")
	{
		mostrarDiplo += '<option value="SIN ASIGNAR">SIN ASIGNAR</option>';
		mostrarDiplo += '<option value="COJUTEPEQUE">COJUTEPEQUE</option>';
		mostrarDiplo += '<option value="CANDELARIA">CANDELARIA</option>';
		mostrarDiplo += '<option value="EL CARMEN">EL CARMEN</option>';
		mostrarDiplo += '<option value="EL ROSARIO">EL ROSARIO</option>';
		mostrarDiplo += '<option value="MONTE SAN JUAN">MONTE SAN JUAN</option>';
		mostrarDiplo += '<option value="ORATORIO DE CONCEPCION">ORATORIO DE CONCEPCION</option>';
		mostrarDiplo += '<option value="SAN BARTOLOME PERULAPIA">SAN BARTOLOME PERULAPIA</option>';
		mostrarDiplo += '<option value="SAN CRISTOBAL">SAN CRISTOBAL</option>';
		mostrarDiplo += '<option value="SAN JOSE GUAYABAL">SAN JOSE GUAYABAL</option>';
		mostrarDiplo += '<option value="SAN PEDRO PERULAPAN">SAN PEDRO PERULAPAN</option>';
		mostrarDiplo += '<option value="SAN RAFAEL CEDROS">SAN RAFAEL CEDROS</option>';
		mostrarDiplo += '<option value="SAN RAMON">SAN RAMON</option>';
		mostrarDiplo += '<option value="SANTA CRUZ ANALQUITO">SANTA CRUZ ANALQUITO</option>';
		mostrarDiplo += '<option value="SANTA CRUZ MICHAPA">SANTA CRUZ MICHAPA</option>';
		mostrarDiplo += '<option value="SUCHITOTO">SUCHITOTO</option>';
		mostrarDiplo += '<option value="TENANCINGO">TENANCINGO</option>';
}

if(ImprimirDiplo01=="CUSCATLAN")
{
	mostrarDiplo += '<option value="SIN ASIGNAR">SIN ASIGNAR</option>';
	mostrarDiplo += '<option value="COJUTEPEQUE">COJUTEPEQUE</option>';
	mostrarDiplo += '<option value="CANDELARIA">CANDELARIA</option>';
	mostrarDiplo += '<option value="EL CARMEN">EL CARMEN</option>';
	mostrarDiplo += '<option value="EL ROSARIO">EL ROSARIO</option>';
	mostrarDiplo += '<option value="MONTE SAN JUAN">MONTE SAN JUAN</option>';
	mostrarDiplo += '<option value="ORATORIO DE CONCEPCION">ORATORIO DE CONCEPCION</option>';
	mostrarDiplo += '<option value="SAN BARTOLOME PERULAPIA">SAN BARTOLOME PERULAPIA</option>';
	mostrarDiplo += '<option value="SAN CRISTOBAL">SAN CRISTOBAL</option>';
	mostrarDiplo += '<option value="SAN JOSE GUAYABAL">SAN JOSE GUAYABAL</option>';
	mostrarDiplo += '<option value="SAN PEDRO PERULAPAN">SAN PEDRO PERULAPAN</option>';
	mostrarDiplo += '<option value="SAN RAFAEL CEDROS">SAN RAFAEL CEDROS</option>';
	mostrarDiplo += '<option value="SAN RAMON">SAN RAMON</option>';
	mostrarDiplo += '<option value="SANTA CRUZ ANALQUITO">SANTA CRUZ ANALQUITO</option>';
	mostrarDiplo += '<option value="SANTA CRUZ MICHAPA">SANTA CRUZ MICHAPA</option>';
	mostrarDiplo += '<option value="SUCHITOTO">SUCHITOTO</option>';
	mostrarDiplo += '<option value="TENANCINGO">TENANCINGO</option>';

}

if(ImprimirDiplo01=="LA LIBERTAD")
{
	mostrarDiplo += '<option value="SIN ASIGNAR">SIN ASIGNAR</option>';
	mostrarDiplo += '<option value="SANTA TECLA">SANTA TECLA</option>';
	mostrarDiplo += '<option value="ANTIGUO CUSCATLAN">ANTIGUO CUSCATLAN</option>';
	mostrarDiplo += '<option value="CHILTUIPAN">CHILTUIPAN</option>';
	mostrarDiplo += '<option value="CIUDAD ARCE">CIUDAD ARCE</option>';
	mostrarDiplo += '<option value="COLON">COLON</option>';
	mostrarDiplo += '<option value="COMASAGUA">COMASAGUA</option>';
	mostrarDiplo += '<option value="HUIZUCAR">HUIZUCAR</option>';
	mostrarDiplo += '<option value="JAYAQUE">JAYAQUE</option>';
	mostrarDiplo += '<option value="JICALAPA">JICALAPA</option>';
	mostrarDiplo += '<option value="NUEVO CUSCATLAN">NUEVO CUSCATLAN</option>';
	mostrarDiplo += '<option value="PUERTO DE LA LIBERTAD">PUERTO DE LA LIBERTAD</option>';
	mostrarDiplo += '<option value="QUEZALTEPEQUE">QUEZALTEPEQUE</option>';
	mostrarDiplo += '<option value="SACACOYO">SACACOYO</option>';
	mostrarDiplo += '<option value="SAN JOSE VILLANUEVA">SAN JOSE VILLANUEVA</option>';
	mostrarDiplo += '<option value="SAN JUAN OPICO">SAN JUAN OPICO</option>';
	mostrarDiplo += '<option value="SAN MATIAS">SAN MATIAS</option>';
	mostrarDiplo += '<option value="SAN PABLO TACACHICO">SAN PABLO TACACHICO</option>';
	mostrarDiplo += '<option value="TALNIQUE">TALNIQUE</option>';
	mostrarDiplo += '<option value="TAMANIQUE">TAMANIQUE</option>';
	mostrarDiplo += '<option value="TEOTEPEQUE">TEOTEPEQUE</option>';
	mostrarDiplo += '<option value="TEPECOYO">TEPECOYO</option>';
	mostrarDiplo += '<option value="ZARAGOZA">ZARAGOZA</option>';
}

if(ImprimirDiplo01=="LA PAZ")
{
	mostrarDiplo += '<option value="SIN ASIGNAR">SIN ASIGNAR</option>';
	mostrarDiplo += '<option value="ZACATECOLUCA">ZACATECOLUCA</option>';
	mostrarDiplo += '<option value="CUYULTITAN">CUYULTITAN</option>';
	mostrarDiplo += '<option value="EL ROSARIO">EL ROSARIO</option>';
	mostrarDiplo += '<option value="JERUSALEN">JERUSALEN</option>';
	mostrarDiplo += '<option value="MERCEDES LA CEIBA">MERCEDES LA CEIBA</option>';
	mostrarDiplo += '<option value="OLOCUILTA">OLOCUILTA</option>';
	mostrarDiplo += '<option value="PARAISO DE OSORIO">PARAISO DE OSORIO</option>';
	mostrarDiplo += '<option value="SAN ANTONIO MASAHUAT">SAN ANTONIO MASAHUAT</option>';
	mostrarDiplo += '<option value="SAN EMIGDIO">SAN EMIGDIO</option>';
	mostrarDiplo += '<option value="SAN FRANCISCO CHINAMECA">SAN FRANCISCO CHINAMECA</option>';
	mostrarDiplo += '<option value="SAN PEDRO MASAHUAT">SAN PEDRO MASAHUAT</option>';
	mostrarDiplo += '<option value="SAN JUAN NONUALCO">SAN JUAN NONUALCO</option>';
	mostrarDiplo += '<option value="SAN JUAN TALPA">SAN JUAN TALPA</option>';
	mostrarDiplo += '<option value="SAN JUAN TEPESONTES">SAN JUAN TEPEZONTES</option>';
	mostrarDiplo += '<option value="SAN JUAN LA HERRADURA">SAN LUIS LA HERRADURA</option>';
	mostrarDiplo += '<option value="SAN LUIS TALPA">SAN LUIS TALPA</option>';
	mostrarDiplo += '<option value="SAN MIGUEL TEPEZONTES">SAN MIGUEL TEPEZONTES</option>';
	mostrarDiplo += '<option value="SAN PEDRO NONUALCO">SAN PEDRO NONUALCO</option>';
	mostrarDiplo += '<option value="SAN RAFAEL OBRAJUELO">SAN RAFAEL OBRAJUELO</option>';
	mostrarDiplo += '<option value="SANTA MARIA OSTUMA">SANTA MARIA OSTUMA</option>';
	mostrarDiplo += '<option value="SANTIAGO NONUALCO">SANTIAGO NONUALCO</option>';
	mostrarDiplo += '<option value="TAPALHUACA">TAPALHUACA</option>';
}

if(ImprimirDiplo01=="SAN VICENTE")
{
	mostrarDiplo += '<option value="SIN ASIGNAR">SIN ASIGNAR</option>';
	mostrarDiplo += '<option value="APASTEPEQUE">APASTEPEQUE</option>';
	mostrarDiplo += '<option value="GUADALUPE">GUADALUPE</option>';
	mostrarDiplo += '<option value="SAN CAYETANO ISTEPEQUE">SAN CAYETANO ISTEPEQUE</option>';
	mostrarDiplo += '<option value="SAN ESTEBAN CATARINA">SAN ESTEBAN CATARINA</option>';
	mostrarDiplo += '<option value="SAN ILDEFONSO">SAN ILDEFONSO</option>';
	mostrarDiplo += '<option value="SAN LORENZO">SAN LORENZO</option>';
	mostrarDiplo += '<option value="SAN SEBASTIAN">SAN SEBASTIAN</option>';
	mostrarDiplo += '<option value="SAN VICENTE">SAN VICENTE</option>';
	mostrarDiplo += '<option value="SANTA CLARA">SANTA CLARA</option>';
	mostrarDiplo += '<option value="SANTO DOMINGO">SANTO DOMINGO</option>';
	mostrarDiplo += '<option value="TECOLUCA">TECOLUCA</option>';
	mostrarDiplo += '<option value="TEPETITAN">TEPETITAN</option>';
	mostrarDiplo += '<option value="VERAPAZ">VERAPAZ</option>';
}

if(ImprimirDiplo01=="MORAZAN")
{
	mostrarDiplo += '<option value="SIN ASIGNAR">SIN ASIGNAR</option>';
	mostrarDiplo += '<option value="ARAMBALA">ARAMBALA</option>';
	mostrarDiplo += '<option value="CACAOPERA">CACAOPERA</option>';
	mostrarDiplo += '<option value="CHILANGA">CHILANGA</option>';
	mostrarDiplo += '<option value="CORINTO">CORINTO</option>';
	mostrarDiplo += '<option value="DELICIAS DE CONCEPCION">DELICIAS DE CONCEPCION</option>';
	mostrarDiplo += '<option value="EL DIVISADERO">EL DIVISADERO</option>';
	mostrarDiplo += '<option value="EL ROSARIO">EL ROSARIO</option>';
	mostrarDiplo += '<option value="GAULOCOCTI">GAULOCOCTI</option>';
	mostrarDiplo += '<option value="GUATAJIAGUA">GUATAJIAGUA</option>';
	mostrarDiplo += '<option value="JOATECA">JOATECA</option>';
	mostrarDiplo += '<option value="JOCOATIQUE">JOCOATIQUE</option>';
	mostrarDiplo += '<option value="JOCORO">JOCORO</option>';
	mostrarDiplo += '<option value="LOLOTIQUILLO">LOLOTIQUILLO</option>';
	mostrarDiplo += '<option value="MEANGUERA">MEANGUERA</option>';
	mostrarDiplo += '<option value="OSICALA">OSICALA</option>';
	mostrarDiplo += '<option value="PERQUIN">PERQUIN</option>';
	mostrarDiplo += '<option value="SAN CARLOS">SAN CARLOS</option>';
	mostrarDiplo += '<option value="SAN FERNANDO">SAN FERNANDO</option>';
	mostrarDiplo += '<option value="SAN FRANCISCO GOTERA">SAN FRANCISCO GOTERA</option>';
	mostrarDiplo += '<option value="SAN ISIDRO">SAN ISIDRO</option>';
	mostrarDiplo += '<option value="SAN SIMON">SAN SIMON</option>';
	mostrarDiplo += '<option value="SENSEMBRA">SENSEMBRA</option>';
	mostrarDiplo += '<option value="SOCIEDAD">SOCIEDAD</option>';
	mostrarDiplo += '<option value="TOROLA">TOROLA</option>';
	mostrarDiplo += '<option value="YAMABAL">YAMABAL</option>';
	mostrarDiplo += '<option value="YOLOAIQUIN">YOLOAIQUIN</option>';
}

if(ImprimirDiplo01=="SAN MIGUEL")
{
	mostrarDiplo += '<option value="SIN ASIGNAR">SIN ASIGNAR</option>';
	mostrarDiplo += '<option value="SAN MIGUEL">SAN MIGUEL</option>';
	mostrarDiplo += '<option value="CAROLINA">CAROLINA</option>';
	mostrarDiplo += '<option value="CHAPELTIQUE">CHAPELTIQUE</option>';
	mostrarDiplo += '<option value="CHINAMECA">CHINAMECA</option>';
	mostrarDiplo += '<option value="CHIRILAGUA">CHIRILAGUA</option>';
	mostrarDiplo += '<option value="CIUDAD BARRIOS">CIUDAD BARRIOS</option>';
	mostrarDiplo += '<option value="COMARACAN">COMARACAN</option>';
	mostrarDiplo += '<option value="EL TRANSITO">EL TRANSITO</option>';
	mostrarDiplo += '<option value="LOLOTIQUE">LOLOTIQUE</option>';
	mostrarDiplo += '<option value="MONCAGUA">MONCAGUA</option>';
	mostrarDiplo += '<option value="NUEVA GUADALUPE">NUEVA GUADALUPE</option>';
	mostrarDiplo += '<option value="NUEVO EDEN DE SAN JUAN">NUEVO EDEN DE SAN JUAN</option>';
	mostrarDiplo += '<option value="QUELEPA">QUELEPA</option>';
	mostrarDiplo += '<option value="SAN ANTONIO DEL MOSCO">SAN ANTONIO DEL MOSCO</option>';
	mostrarDiplo += '<option value="SAN GERARDO">SAN GERARDO</option>';
	mostrarDiplo += '<option value="SAN JORGE">SAN JORGE</option>';
	mostrarDiplo += '<option value="SAN LUIS DE LA REINA">SAN LUIS DE LA REINA</option>';
	mostrarDiplo += '<option value="SAN RAFAEL ORIENTE">SAN RAFAEL ORIENTE</option>';
	mostrarDiplo += '<option value="SESORI">SESORI</option>';
	mostrarDiplo += '<option value="ULUAZAPA">ULUAZAPA</option>';
}

if(ImprimirDiplo01=="USULUTAN")
{
	mostrarDiplo += '<option value="SIN ASIGNAR">SIN ASIGNAR</option>';
	mostrarDiplo += '<option value="ALEGRIA">ALEGRIA</option>';
	mostrarDiplo += '<option value="BERLIN">BERLIN</option>';
	mostrarDiplo += '<option value="CALIFORNIA">CALIFORNIA</option>';
	mostrarDiplo += '<option value="CONCEPCION BATRES">CONCEPCION BATRES</option>';
	mostrarDiplo += '<option value="EL TRIUNFO">EL TRIUNFO</option>';
	mostrarDiplo += '<option value="EREGUAYAQUIN">EREGUAYAQUIN</option>';
	mostrarDiplo += '<option value="ESTANZUELAS">ESTANZUELAS</option>';
	mostrarDiplo += '<option value="JIQUILSCO">JIQUILSCO</option>';
	mostrarDiplo += '<option value="JUCUAPA">JUCUAPA</option>';
	mostrarDiplo += '<option value="JUCUARAN">JUCUARAN</option>';
	mostrarDiplo += '<option value="MERCEDEZ UMAÑA">MERCEDEZ UMAÑA</option>';
	mostrarDiplo += '<option value="NUEVA GRANADA">NUEVA GRANADA</option>';
	mostrarDiplo += '<option value="OZATLAN">OZATLAN</option>';
	mostrarDiplo += '<option value="PUERTO EL TRIUNFO">PUERTO EL TRIUNFO</option>';
	mostrarDiplo += '<option value="SAN AGUSTIN">SAN AGUSTIN</option>';
	mostrarDiplo += '<option value="SAN BUAENAAVENTURA">SAN BUAENAAVENTURA</option>';
	mostrarDiplo += '<option value="SAN DIONICIO">SAN DIONICIO</option>';
	mostrarDiplo += '<option value="SAN FRANCISCO JAVIER">SAN FRANCISCO JAVIER</option>';
	mostrarDiplo += '<option value="SANTA ELENA">SANTA ELENA</option>';
	mostrarDiplo += '<option value="SANTA MARIA">SANTA MARIA</option>';
	mostrarDiplo += '<option value="SANTIAGO DE MARIA">SANTIAGO DE MARIA</option>';
	mostrarDiplo += '<option value="TECAPAN">TECAPAN</option>';
	mostrarDiplo += '<option value="USULUTAN">USULUTAN</option>';
}

if(ImprimirDiplo01=="LA UNION")
{
	mostrarDiplo += '<option value="SIN ASIGNAR">SIN ASIGNAR</option>';
	mostrarDiplo += '<option value="ANAMOROS">ANAMOROS</option>';
	mostrarDiplo += '<option value="BOLIVAR">BOLIVAR</option>';
	mostrarDiplo += '<option value="CONCEPCION DE ORIENTE">CONCEPCION DE ORIENTE</option>';
	mostrarDiplo += '<option value="CONCHAGUA">CONCHAGUA</option>';
	mostrarDiplo += '<option value="EL CARMEN">EL CARMEN</option>';
	mostrarDiplo += '<option value="EL SAUCE">EL SAUCE</option>';
	mostrarDiplo += '<option value="INTIPUCA">INTIPUCA</option>';
	mostrarDiplo += '<option value="LA UNION">LA UNION</option>';
	mostrarDiplo += '<option value="LISLIQUE">LISLIQUE</option>';
	mostrarDiplo += '<option value="MEANGUERA DEL GOLFO">MEANGUERA DEL GOLFO</option>';
	mostrarDiplo += '<option value="NUEVA ESPARTA">NUEVA ESPARTA</option>';
	mostrarDiplo += '<option value="PASAQUINA">PASAQUINA</option>';
	mostrarDiplo += '<option value="POLOROS">POLOROS</option>';
	mostrarDiplo += '<option value="SAN ALEJO">SAN ALEJO</option>';
	mostrarDiplo += '<option value="SAN JOSE">SAN JOSE</option>';
	mostrarDiplo += '<option value="SANTA ROSA DE LIMA">SANTA ROSA DE LIMA</option>';
	mostrarDiplo += '<option value="YAYANTIQUE">YAYANTIQUE</option>';
	mostrarDiplo += '<option value="YUCUAIQUIN">YUCUAIQUIN</option>';
}

if(ImprimirDiplo01=="AUACHAPAN")
{
	mostrarDiplo += '<option value="SIN ASIGNAR">SIN ASIGNAR</option>';
	mostrarDiplo += '<option value="AUACHAPAN">AUACHAPAN</option>';
	mostrarDiplo += '<option value="APANECA">APANECA</option>';
	mostrarDiplo += '<option value="ATIQUIZAYA">ATIQUIZAYA</option>';
	mostrarDiplo += '<option value="CONCEPCION DE ATACO">CONCEPCION DE ATACO</option>';
	mostrarDiplo += '<option value="EL REFUGIO">EL REFUGIO</option>';
	mostrarDiplo += '<option value="GUAYMANGO">GUAYMANGO</option>';
	mostrarDiplo += '<option value="JUJUTLA">JUJUTLA</option>';
	mostrarDiplo += '<option value="SAN FRANCISCO MENENDEZ">SAN FRANCISCO MENENDEZ</option>';
	mostrarDiplo += '<option value="SAN LORENZO">SAN LORENZO</option>';
	mostrarDiplo += '<option value="SAN PEDRO PUXTLA">SAN PEDRO PUXTLA</option>';
	mostrarDiplo += '<option value="TACUBA">TACUBA</option>';
	mostrarDiplo += '<option value="TURIN">TURIN</option>';

}

if(ImprimirDiplo01=="SONSONATE")
{
	mostrarDiplo += '<option value="SIN ASIGNAR">SIN ASIGNAR</option>';
	mostrarDiplo += '<option value="ACAJUTLA">ACAJUTLA</option>';
	mostrarDiplo += '<option value="ARMENIA">ARMENIA</option>';
	mostrarDiplo += '<option value="CALUCO">CALUCO</option>';
	mostrarDiplo += '<option value="CUISNAHUAT">CUISNAHUAT</option>';
	mostrarDiplo += '<option value="IZALCO">IZALCO</option>';
	mostrarDiplo += '<option value="JUAYUA">JUAYUA</option>';
	mostrarDiplo += '<option value="NAHUIZALCO">NAHUIZALCO</option>';
	mostrarDiplo += '<option value="SALCOATITAN">SALCOATITAN</option>';
	mostrarDiplo += '<option value="SAN ANTONIO DEL MONTE">SAN ANTONIO DEL MONTE</option>';
	mostrarDiplo += '<option value="SAN JULIAN">SAN JULIAN</option>';
	mostrarDiplo += '<option value="SANTA CATARINA MASAHUAT">SANTA CATARINA MASAHUAT</option>';
	mostrarDiplo += '<option value="SANTA ISABEL ISHUATAN">SANTA ISABEL ISHUATAN</option>';
	mostrarDiplo += '<option value="SANTO DOMINGO DE GUZMAN">SANTO DOMINGO DE GUZMAN</option>';
	mostrarDiplo += '<option value="SONSONATE">SONSONATE</option>';
	mostrarDiplo += '<option value="SONZACATE">SONZACATE</option>';
}

if(ImprimirDiplo01=="SANTA ANA")
{
	mostrarDiplo += '<option value="SIN ASIGNAR">SIN ASIGNAR</option>';
	mostrarDiplo += '<option value="CANDELARIA DE LA FRONTERA">CANDELARIA DE LA FRONTERA</option>';
	mostrarDiplo += '<option value="CHALCHUAPA">CHALCHUAPA</option>';
	mostrarDiplo += '<option value="COATEPEQUE">COATEPEQUE</option>';
	mostrarDiplo += '<option value="EL CONGO">EL CONGO</option>';
	mostrarDiplo += '<option value="EL PORVENIR">EL PORVENIR</option>';
	mostrarDiplo += '<option value="MASAHUAT">MASAHUAT</option>';
	mostrarDiplo += '<option value="METAPAN">METAPAN</option>';
	mostrarDiplo += '<option value="SAN ANTONIO PAJONAL">SAN ANTONIO PAJONAL</option>';
	mostrarDiplo += '<option value="SAN SEBASTIAN SALITRILLO">SAN SEBASTIAN SALITRILLO</option>';
	mostrarDiplo += '<option value="SANTA ANA">SANTA ANA</option>';
	mostrarDiplo += '<option value="SANTA ROSA GUACHIPILIN">SANTA ROSA GUACHIPILIN</option>';
	mostrarDiplo += '<option value="SANTIAGO DE LA FRONTERA">SANTIAGO DE LA FRONTERA</option>';
	mostrarDiplo += '<option value="TEXISTEPEQUE">TEXISTEPEQUE</option>';
}

	var ImprimirDiplo = document.getElementById(IdMunicipio02);//"RUsuarioE14"
	ImprimirDiplo.innerHTML=mostrarDiplo;
}