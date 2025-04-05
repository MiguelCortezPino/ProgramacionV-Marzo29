let ActividadesEcon = {
		Numero:0,
		Codido:"0000",
		Descripcion:"SIN ESPECIFICAR"
	}

function AlmacenarPuntoVenta() {
	let Punto ={
		Numero:0,
		NombrePunto:"SIN ESPECIFICAR",
		CodPunto:"0000",
		NumEstablecimiento:0
	}
	var ArrPuntoVetas=[];
	let ItemArr=0;
	let PuntoVenta=document.getElementById("IdCodPuntoVenta").value;
	let CodPuntoVenta=document.getElementById("IdPuntoDeVenta").value;
	if (typeof(Storage) !== 'undefined'){
			if($("#F-VmMostrar01 input[name='CtrlRadioEstab']:radio").is(':checked')){
				if (sessionStorage.getItem('PuntosVenta') !== undefined
				&& sessionStorage.getItem('PuntosVenta')){
					let Comprobar="PROCESAR";
					Punto.NumEstablecimiento=$('input:radio[name=CtrlRadioEstab]:checked').val();
					ItemArr=parseInt(sessionStorage.getItem('ItemPuntosVenta'));
					ItemArr=ItemArr+1;
					ArrPuntoVetas = JSON.parse(sessionStorage.getItem('PuntosVenta'));

					ArrPuntoVetas.forEach((ArrPuntoValues) => {
							if (Punto.NumEstablecimiento==ArrPuntoValues.NumEstablecimiento) {
								Punto.Numero=ArrPuntoValues.Numero+1;
								Punto.NombrePunto=PuntoVenta;
								Punto.CodPunto=CodPuntoVenta;
								Comprobar="NO PROCESAR";
							}
					});
					
					if (Comprobar=="PROCESAR") {
						Punto.Numero=ItemArr+1;
						Punto.NombrePunto=PuntoVenta;
						Punto.CodPunto=CodPuntoVenta;
					}

					ArrPuntoVetas[ItemArr]=Punto;
					sessionStorage.setItem('PuntosVenta',JSON.stringify(ArrPuntoVetas));
					sessionStorage.setItem('ItemPuntosVenta',ItemArr);


				}else{
					
					Punto.NumEstablecimiento=$('input:radio[name=CtrlRadioEstab]:checked').val();
					Punto.Numero=Punto.Numero+1;
					Punto.NombrePunto=PuntoVenta;
					Punto.CodPunto=CodPuntoVenta;
					ArrPuntoVetas[ItemArr]=Punto;
					sessionStorage.setItem('PuntosVenta',JSON.stringify(ArrPuntoVetas));
					sessionStorage.setItem('ItemPuntosVenta',ItemArr);
					//console.log(ArrPuntoVetas);
					//console.log(ItemArr);
					//alert(Punto.NumEstablecimiento);
				}

				var MostrarHTML='';
					MostrarHTML+='<table class="table table-bordered">';
					MostrarHTML+='<tr>';
					MostrarHTML+='<td>No</td>';
					MostrarHTML+='<td>P. VENTA</td>';
					MostrarHTML+='<td>CODIGO</td>';
					MostrarHTML+='<td>ESTABLECIMIENTO</td>';
					MostrarHTML+='</tr>';
					for (var ContY = 0; ContY < ArrPuntoVetas.length; ContY++) {
						MostrarHTML+='<tr>';
						MostrarHTML+='<td>'+ArrPuntoVetas[ContY].Numero+'</td>';
						MostrarHTML+='<td>'+ArrPuntoVetas[ContY].NombrePunto+'</td>';
						MostrarHTML+='<td>'+ArrPuntoVetas[ContY].CodPunto+'</td>';
						MostrarHTML+='<td>'+ArrPuntoVetas[ContY].NumEstablecimiento+'</td>';
						MostrarHTML+='</tr>';
					
					}
					MostrarHTML+='</table>';
					document.getElementById('IdPuntoVenta').innerHTML = MostrarHTML;
					console.log(ArrPuntoVetas);
					console.log(ItemArr);
			}else{
				alert("Por favor Seleccione una de las sucursales Ingresadas");
			}

	}else{
		alert("Storage no es comppatible con este navegador");
	}
	
	


	//--Fin Almacenar Punto de Venta
}

function EliminarPuntoVenta() {
	let Punto ={
		Numero:0,
		NombrePunto:"SIN ESPECIFICAR",
		CodPunto:"0000",
		NumEstablecimiento:0
	}
	var ArrPuntoVetas=[];
	var ArrTempPuntoVentas=[];
	let ItemArr=0;
	if (typeof(Storage) !== 'undefined'){
		if (sessionStorage.getItem('PuntosVenta') !== undefined
			&& sessionStorage.getItem('PuntosVenta')){
			ItemArr=parseInt(sessionStorage.getItem('ItemPuntosVenta'));
			ArrTempPuntoVentas = JSON.parse(sessionStorage.getItem('PuntosVenta'));
			var Contar=0;
			ArrTempPuntoVentas.forEach((Arrvalues) => {
				if (Contar < ItemArr) {
					ArrPuntoVetas[Contar]=Arrvalues;
				}
				Contar=Contar+1;
			});


			var MostrarHTML='';
			MostrarHTML+='<table class="table table-bordered">';
			MostrarHTML+='<tr>';
			MostrarHTML+='<td>No</td>';
			MostrarHTML+='<td>P. VENTA</td>';
			MostrarHTML+='<td>CODIGO</td>';
			MostrarHTML+='<td>ESTABLECIMIENTO</td>';
			MostrarHTML+='</tr>';
			for (var ContY = 0; ContY < ItemArr; ContY++) {
				MostrarHTML+='<tr>';
				MostrarHTML+='<td>'+ArrPuntoVetas[ContY].Numero+'</td>';
				MostrarHTML+='<td>'+ArrPuntoVetas[ContY].NombrePunto+'</td>';
				MostrarHTML+='<td>'+ArrPuntoVetas[ContY].CodPunto+'</td>';
				MostrarHTML+='<td>'+ArrPuntoVetas[ContY].NumEstablecimiento+'</td>';
				MostrarHTML+='</tr>';
					
			}
			MostrarHTML+='</table>';
			document.getElementById('IdPuntoVenta').innerHTML = MostrarHTML;
			ItemArr=ItemArr-1;
			sessionStorage.setItem('PuntosVenta',JSON.stringify(ArrPuntoVetas));
			sessionStorage.setItem('ItemPuntosVenta',ItemArr);
			console.log(ArrPuntoVetas);
			console.log(ItemArr);


		}else{

		}
	}else{
		alert("Storage no es comppatible con este navegador");
	}
}


function AlmacenarEstablecimiento() {
	let Establecimiento= {
		Numero:0,
		Codigo:"0000",
		Tipo:"SIN ESPECIFICAR"
	}
	let Codigo=document.getElementById("IdCodEstablecimiento").value;
	let Tipo=document.getElementById("IdTipoEstablecimiento").value;
	var ArrEstablecimientos=[];
	let ItemArr=0;


	if (typeof(Storage) !== 'undefined'){

		if (sessionStorage.getItem('Establecimientos') !== undefined
			&& sessionStorage.getItem('Establecimientos')){

			ItemArr=parseInt(sessionStorage.getItem('ItemEstablecimiento'));
			ItemArr=ItemArr+1;

			var ArrEstablecimientos = JSON.parse(sessionStorage.getItem('Establecimientos'));
				ArrEstablecimientos[ItemArr]=Establecimiento;
				ArrEstablecimientos[ItemArr].Numero=ItemArr+1;
				ArrEstablecimientos[ItemArr].Codigo=Codigo;
				ArrEstablecimientos[ItemArr].Tipo=Tipo;

				sessionStorage.setItem('Establecimientos',JSON.stringify(ArrEstablecimientos));
				sessionStorage.setItem('ItemEstablecimiento',ItemArr);

		}else{
			ArrEstablecimientos[ItemArr]=Establecimiento;
			ArrEstablecimientos[ItemArr].Numero=ArrEstablecimientos[ItemArr].Numero+1;
			ArrEstablecimientos[ItemArr].Codigo=Codigo;
			ArrEstablecimientos[ItemArr].Tipo=Tipo;
			sessionStorage.setItem('Establecimientos',JSON.stringify(ArrEstablecimientos));
			sessionStorage.setItem('ItemEstablecimiento',ItemArr);
		}

		var MostrarHTML='';
			MostrarHTML+='<table class="table table-bordered">';
			MostrarHTML+='<tr>';
			MostrarHTML+='<td>No</td>';
			MostrarHTML+='<td>CODIGO</td>';
			MostrarHTML+='<td>TIPO</td>';
			MostrarHTML+='</tr>';
		for (var ContY = 0; ContY < ArrEstablecimientos.length; ContY++) {
			MostrarHTML+='<tr>';
			MostrarHTML+='<td>'+ArrEstablecimientos[ContY].Numero+'</td>';
			MostrarHTML+='<td>'+ArrEstablecimientos[ContY].Codigo+'</td>';
			MostrarHTML+='<td>'+ArrEstablecimientos[ContY].Tipo+'</td>';
			MostrarHTML+='<td>'+'<input type="radio"  name="CtrlRadioEstab" value="'+ArrEstablecimientos[ContY].Numero+'"></td>';
			MostrarHTML+='</tr>';
		
		}
			MostrarHTML+='</table>';

			document.getElementById('IdEstabelcimientos').innerHTML = MostrarHTML;
			console.log(ArrEstablecimientos);
			console.log(ItemArr);
	}else{
		alert("Storage no es comppatible con este navegador");
	}

}

function EliminarEstablecimiento() {
	let Establecimiento= {
		Numero:0,
		Codigo:"0000",
		Tipo:"SIN ESPECIFICAR"
	}
	var ArrEstablecimientos=[];
	var ArrTempEstablecimientos=[];
	let ItemArr=0;

	if (typeof(Storage) !== 'undefined'){
		if (sessionStorage.getItem('Establecimientos') !== undefined
			&& sessionStorage.getItem('Establecimientos')){
			ItemArr=parseInt(sessionStorage.getItem('ItemEstablecimiento'));
			ArrTempEstablecimientos = JSON.parse(sessionStorage.getItem('Establecimientos'));
			var Contar=0;
			ArrTempEstablecimientos.forEach((Arrvalues) => {
				if (Contar < ItemArr) {
					ArrEstablecimientos[Contar]=Arrvalues;
				}
				Contar=Contar+1;
			});


			var MostrarHTML='';
			MostrarHTML+='<table class="table table-bordered">';
			MostrarHTML+='<tr>';
			MostrarHTML+='<td>No</td>';
			MostrarHTML+='<td>CODIGO</td>';
			MostrarHTML+='<td>TIPO</td>';
			MostrarHTML+='</tr>';
		for (var ContY = 0; ContY < ItemArr; ContY++) {
			MostrarHTML+='<tr>';
			MostrarHTML+='<td>'+ArrEstablecimientos[ContY].Numero+'</td>';
			MostrarHTML+='<td>'+ArrEstablecimientos[ContY].Codigo+'</td>';
			MostrarHTML+='<td>'+ArrEstablecimientos[ContY].Tipo+'</td>';
			MostrarHTML+='<td>'+'<input type="radio"  name="CtrlRadioEstab" value="'+ArrEstablecimientos[ContY].Numero+'"></td>';
			MostrarHTML+='</tr>';
		
		}
			MostrarHTML+='</table>';
			document.getElementById('IdEstabelcimientos').innerHTML = MostrarHTML;
			ItemArr=ItemArr-1;
			sessionStorage.setItem('Establecimientos',JSON.stringify(ArrEstablecimientos));
			sessionStorage.setItem('ItemEstablecimiento',ItemArr);
			console.log(ArrEstablecimientos);
			console.log(ItemArr);
		}
	}else{
		alert("Storage no es comppatible con este navegador");
	}
}

function EliminarActividad() {
	let ItemArr=0;
	var ArrTempActividadesEcon=[];
	var ArrActividadesEco =[];

	ActividadesEcon.Numero=0;
	ActividadesEcon.Codido="0000";
	ActividadesEcon.Descripcion="SIN ESPECIFICAR";

	if (typeof(Storage) !== 'undefined'){
		if (sessionStorage.getItem('Actividades') !== undefined
			&& sessionStorage.getItem('Actividades')){
			ItemArr=parseInt(sessionStorage.getItem('ItemActividad'));
			ArrTempActividadesEcon = JSON.parse(sessionStorage.getItem('Actividades'));

			
			var Contar=0;
			ArrTempActividadesEcon.forEach((Arrvalues) => {
				if (Contar < ItemArr) {
					ArrActividadesEco[Contar]=Arrvalues;
				}
				Contar=Contar+1;
			});
			
			
			

			var MostrarHTML='';
			MostrarHTML+='<table class="table table-bordered">';
			MostrarHTML+='<tr>';
			MostrarHTML+='<td>No</td>';
			MostrarHTML+='<td>CODIGO</td>';
			MostrarHTML+='<td>DESCRIPCION</td>';
			MostrarHTML+='</tr>';
		for (var ContY = 0; ContY < ItemArr; ContY++) {
			MostrarHTML+='<tr>';
			MostrarHTML+='<td>'+ArrActividadesEco[ContY].Numero+'</td>';
			MostrarHTML+='<td>'+ArrActividadesEco[ContY].Codido+'</td>';
			MostrarHTML+='<td>'+ArrActividadesEco[ContY].Descripcion+'</td>';
			MostrarHTML+='</tr>';
		
		}
			MostrarHTML+='</table>';
			document.getElementById('IdActividadesEco').innerHTML = MostrarHTML;
			ItemArr=ItemArr-1;
			sessionStorage.setItem('Actividades',JSON.stringify(ArrActividadesEco));
			sessionStorage.setItem('ItemActividad',ItemArr);
			console.log(ArrActividadesEco);
			console.log(ItemArr);
		}
		
	}else{
		alert("Storage no es comppatible con este navegador");
	}
	
}

function AlmacenarActvidad() {

	ActividadesEcon.Numero=0;
	ActividadesEcon.Codido="0000";
	ActividadesEcon.Descripcion="SIN ESPECIFICAR";

	let Codigo=document.getElementById("IdCodActividad").value;
	let Descripcion=document.getElementById("IdDescActividad").value;

	let ItemArr=0;
	var ArrActividadesEco =[];

	if (typeof(Storage) !== 'undefined') {
		//console.log(Storage);
		if (sessionStorage.getItem('Actividades') !== undefined
			&& sessionStorage.getItem('Actividades')) {
			//console.log(JSON.parse(sessionStorage.getItem('Actividades')));
			ItemArr=parseInt(sessionStorage.getItem('ItemActividad'));
			ItemArr=ItemArr+1;
			if(ItemArr <= 3){
				var ArrActividadesEco = JSON.parse(sessionStorage.getItem('Actividades'));
				ArrActividadesEco[ItemArr]=ActividadesEcon;
				ArrActividadesEco[ItemArr].Numero=ItemArr+1;
				ArrActividadesEco[ItemArr].Codido=Codigo;
				ArrActividadesEco[ItemArr].Descripcion=Descripcion;

				sessionStorage.setItem('Actividades',JSON.stringify(ArrActividadesEco));
				sessionStorage.setItem('ItemActividad',ItemArr);
			//console.log(ArrActividadesEco);
				//console.log(ItemArr);
			}
			
		}else{
			ArrActividadesEco[ItemArr]=ActividadesEcon;
			ArrActividadesEco[ItemArr].Numero=ArrActividadesEco[ItemArr].Numero+1;
			ArrActividadesEco[ItemArr].Codido=Codigo;
			ArrActividadesEco[ItemArr].Descripcion=Descripcion;
			sessionStorage.setItem('Actividades',JSON.stringify(ArrActividadesEco));
			sessionStorage.setItem('ItemActividad',ItemArr);
			//console.log(sessionStorage.getItem('Actividades'));			
		}
		
				
		
	}else{
		alert("Storage no es comppatible con este navegador");
	} // Fin If typeof

	if(ItemArr <= 3){
		var MostrarHTML='';
		MostrarHTML+='<table class="table table-bordered">';
		MostrarHTML+='<tr>';
		MostrarHTML+='<td>No</td>';
		MostrarHTML+='<td>CODIGO</td>';
		MostrarHTML+='<td>DESCRIPCION</td>';
		MostrarHTML+='</tr>';
		for (var ContX = 0; ContX < ArrActividadesEco.length; ContX++) {
			MostrarHTML+='<tr>';
			MostrarHTML+='<td>'+ArrActividadesEco[ContX].Numero+'</td>';
			MostrarHTML+='<td>'+ArrActividadesEco[ContX].Codido+'</td>';
			MostrarHTML+='<td>'+ArrActividadesEco[ContX].Descripcion+'</td>';
			MostrarHTML+='</tr>';
			
		}
		MostrarHTML+='</table>';
		document.getElementById('IdActividadesEco').innerHTML = MostrarHTML;
		
	}
	console.log(ItemArr);
// Fin  AlmacenarActvidad
}