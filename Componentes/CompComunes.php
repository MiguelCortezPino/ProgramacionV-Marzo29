<?php

function CabecerasHTML01(){
	$ImprimirCabecera='
		<link rel="stylesheet" href="CSS/MDB5/mdb.min.css" />
		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"/>
	';
	echo($ImprimirCabecera);
}

function FooterHTML01(){
		$ImprimirPie='
			<script type="text/javascript" src="JS/DMB5/mdb.min.js"></script>
		';
		echo($ImprimirPie);
}

?>