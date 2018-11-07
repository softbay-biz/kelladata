<?php
function isEmailExist($email,$bd){
	$email = strip_tags($email);
	$req = $bd->prepare('SELECT email FROM members WHERE email = :email');
	$req->execute(array('email'=> $email));
	if($req->rowCount() >= 1){
		return true;
	}else{
		return false;
	}
}
?>