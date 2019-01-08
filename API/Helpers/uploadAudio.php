<?php
function uploadAudio($data){
		$repertoireUpload = '../medias/audios/';
		list($type, $data) = explode(';base64,', $data, 2);
		$data = str_replace(' ', '+', $data);
		$data = base64_decode($data);
		$salt = 'rgorl'.mt_rand().'g$*kelladata'.time();
		$salt = str_shuffle($salt);
		$audioName = openssl_digest($salt,'sha512');
		file_put_contents($repertoireUpload.$audioName.'.mp3',$data);
	return $audioName.'.mp3';
  }
 ?>
