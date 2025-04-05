$(document).ready(function(){

	$("#F-VmMostrar01").validationEngine();


	$('#IdEmpresa').click(function(){
    FijarValorMenus(1);
	});

	$('#IdBotonAgregar').click(function(){
	VmMostrar("VmodalMostrar");
	});

	$('#IdBotonMostrar').click(function(){
	VmMostrar("VmodalVerEmisor");
	ObtenerEmisorId("F-VmMostrar02");
	});

	$('#IdBotonEditar').click(function(){
	VmMostrar("VmodalMostrar");
	CapEmisorEditarXId();
	});

	$('#IdBotonCerrarModal01').click(function(){
	CerrarVmMostrar("VmodalMostrar");   
	});

	$('#IdBotonCerrarModal02').click(function(){
	CerrarVmMostrar("VmodalVerEmisor");   
	});
/*
	$('#IdDepartamentosVmME').change(function(){
      LLamarMunicipio('IdDepartamentosVmME', 'IdMunicipiosVmME');
  });

*/
});