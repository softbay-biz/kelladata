<?php
function validateBlockMedia($elementName,$elementValue,$id,$bd){
  $id_media = strip_tags($data->id_media);
  $validate = strip_tags($data->validate);
  try{
        $req = $bd->prepare('UPDATE media SET validate = ? WHERE id_article = ?');
        $req->execute([$validate,$id_media]);
            return json_encode(array('error'=>false,'message' => 'Article saved!'));
        }catch(Exception $i){
            return json_encode(array('error'=>true,'message' => 'Article not saved!'));
        }
    }
 ?>
