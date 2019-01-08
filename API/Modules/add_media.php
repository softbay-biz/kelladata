<?php
function add_media($data){
  include 'Helpers/bd.php';
  include 'Helpers/uploadImage.php';
  include 'Helpers/uploadAudio.php';
  include 'Helpers/uploadVideo.php';
  $bd = bd();
  if($data->type == 1){
    //Uploading images
    return json_encode(array('message'=>imageFromString($data->link_or_blob),
    'error'=>false
  ));
  }else if($data->type == 2){
    //Uploading video
    return json_encode(array('message'=>uploadVideo($data->link_or_blob),
    'error'=>false
  ));
  }else if($data->type == 3){
    //Uploading audio
    return json_encode(array('message'=>uploadAudio($data->link_or_blob),
    'error'=>false
  ));
}else{
  return json_encode(array('message'=>'Type of file not found!','error' => true));
}
}
 ?>
