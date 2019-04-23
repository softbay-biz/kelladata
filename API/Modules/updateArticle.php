<?php
function updateArticle($data){
  include 'Helpers/bd.php';
  $id_article = strip_tags($data->id_article);
  $content_article = strip_tags($data->contenu);
  $title_article = strip_tags($data->titre);
    //Here we modify a specific article
    updateAnArticle('titre',$title_article,$id_article,bd());
    updateAnArticle('contenu',$content_article,$id_article,bd());
  return json_encode(array('error'=>false,'message' => 'Article saved'));
}
function updateAnArticle($elementName,$elementValue,$id,$bd){
  $id = strip_tags($id);
  $elementName = strip_tags($elementName);
  $elementValue = strip_tags($elementValue);
  try{
        $req = $bd->prepare('UPDATE articles SET '.$elementName.' = ? WHERE id_article = ?');
        $req->execute([$elementValue,$id]);
            return true;
        }catch(Exception $i){
            return false;
        }
    }
 ?>
