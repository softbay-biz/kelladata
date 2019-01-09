<?php
function add_media($data){
  include 'Helpers/bd.php';
  include 'Helpers/uploadImage.php';
  include 'Helpers/uploadAudio.php';
  include 'Helpers/uploadVideo.php';
  $bd = bd();
  $media_name = '';
  if($data->type == 1){
    //Uploading images
    $media_name = imageFromString($data->link_or_blob);
  }else if($data->type == 2){
    //Uploading video
    $media_name = uploadVideo($data->link_or_blob);
  }else if($data->type == 3){
    //Uploading audio
    $media_name = uploadAudio($data->link_or_blob);
  }else{
    return json_encode(array('message'=>'Type of file not found!','error' => true));
  }
  $req = $bd->prepare('INSERT INTO media(name,description,type,link_or_blob,owner,statut,date_ajout)
                        			VALUES(:name, :description, :type, :link_or_blob, :owner, :statut, NOW())');
  $req->execute(array(
                   'name' => strip_tags($data->name),
                   'description' => strip_tags($data->description),
                   'type' => $data->type,
                   'link_or_blob' => $media_name,
                   'owner' => strip_tags($data->owner),
                   'statut' => 0
                 ));
    return json_encode(array('message' => 'New media added!','error'=>false));
}
 ?>
