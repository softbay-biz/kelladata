<?php
function uploadVideo($data){
  $repertoireUpload = '../medias/videos/';
  list($type, $data) = explode(';base64,', $data, 2);
  $data = str_replace(' ', '+', $data);
  $data = base64_decode($data);
  $salt = 'rgorl'.mt_rand().'g$*kelladata'.time();
  $salt = str_shuffle($salt);
  $videoName = openssl_digest($salt,'sha512');
  file_put_contents($repertoireUpload.$videoName.'.mp4',$data);
return $videoName.'.mp4';
}
 ?>
