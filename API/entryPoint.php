<?php
//header('Access-Control-Allow-Origin: *');
//declare(strict_types=1);
//require_once 'Modules/domainOrigin.php';
if(1/*domainOrigin() === true*/){
	//header('Access-Control-Allow-Origin:'.$_SERVER['HTTP_ORIGIN']);
	$dataReceive = json_decode(file_get_contents('php://input'));
	$data = $dataReceive->data;
	$requestName = base64_decode(base64_decode(base64_decode(strip_tags($dataReceive->requestName))));
	$allowedModules = ['registration','authentification','membersPendingValidation','updateDetails','add_article'];
	//Switching following the type of the request
	if(in_array($requestName,$allowedModules,true) === true){
		include "Modules/{$requestName}.php";
		echo $requestName($data);
	}else{
		echo json_encode(array('message' => 'Request name not found!'));
	}
}else {
	echo json_encode(array('message' => 'Domain origin not allowed!'));
}
?>
