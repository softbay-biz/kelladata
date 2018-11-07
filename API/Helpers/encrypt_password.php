<?php
function complex_mdp($mdp){

	$salt = 'ffçà)^ù*$!:dr58&éèè-ibuhènjçtwingo';
    $mdp .= $salt;
    $mdp = openssl_digest($mdp,'sha512');

    return $mdp;
}
?>