<?php
function add_media($data){
  include 'Helpers/bd.php';
  include 'Helpers/uploadImage.php';
  $bd = bd();

  if($data->type == 1){
    //Uploading images
    imageFromString($data->link_or_blob);
    return json_encode(array('test'=>var_dump($data->link_or_blob)));
  }else if($data->type == 2){
    //Uploading video
  }else if($data->type == 3){
    //Uploading audio
    //
  }
}
 ?>
