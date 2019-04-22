<?php
function updateArticle($data){
  include 'updateDetails2.php';
  include 'Helpers/bd.php';
  $id_article = strip_tags($data->id_article);
  $content_article = strip_tags($data->content);
  $title_article = strip_tags($data->title);
  updateInformations('articles',$title_article,$id_article,bd());
  updateInformations('articles',$content_article,$id_article,bd());

  return json_encode(array('error'=>false,'message' => $table[0].' : changed'));
}
 ?>
