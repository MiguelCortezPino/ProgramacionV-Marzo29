<?php
@session_start();
if(!isset($_SESSION['Token'])){
	header("Location: index.php");
	exit;
}

if(!isset($_COOKIE['Token'])){
	header("Location: index.php");
	exit;
}

if($_SESSION['Token']!=$_COOKIE['Token']){
	header("Location: index.php");
	exit;
}
?>