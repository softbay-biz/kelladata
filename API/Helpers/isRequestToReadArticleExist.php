<?php
function isRequestToReadArticleExist($id,$bd){
  $id = strip_tags($id);
	$req = $bd->prepare('SELECT * FROM articles_request_allow WHERE id_article = :id_article');
	$req->execute(array('id_article'=> $id));
	if($req->rowCount() >= 1){
    $response = $req->fetch();
		return array('exist' => true,'statut' => $response['statut']);
	}else{
		return array('exist' => false,'statut' => -1);
	}
}
 ?>
