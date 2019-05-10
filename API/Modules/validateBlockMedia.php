<?php
function validateBlockMedia($data){
  include 'Helpers/bd.php';
  $bd = bd();
  $id_media = strip_tags($data->id_media);
  $validate = strip_tags($data->validate);
  try{
        $req = $bd->prepare('UPDATE media SET statut = ? WHERE id_media = ?');
        $req->execute([$validate,$id_media]);
            return json_encode(array('error'=>false,'message' => 'Operation saved!'));
        }catch(Exception $i){
            return json_encode(array('error'=>true,'message' => 'Operation not saved!'));
        }
    }
 ?>
