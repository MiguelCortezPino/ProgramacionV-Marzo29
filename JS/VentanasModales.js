function FijarVentanaModalMostrar() {
	var ValorVentanaMostrar=document.getElementById('IdMostrar').value;
	//alert(ValorVentanaMostrar);
	
	if (ValorVentanaMostrar==1) {
		var miPopupMostrar001;
		miPopupMostrar001 = window.open("Mostrar-Empresa.php","miventana001","width=1000,height=800,scrollbars=YES");
	}
	
}