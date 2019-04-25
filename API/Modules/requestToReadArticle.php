<?php
function requestToReadArticle($data){
    include 'Helpers/bd.php';
    include 'Helpers/isRequestToReadArticleExist.php';
    $bd = bd();
    $request = isRequestToReadArticleExist($data->id_article,$bd);
    
    if($request['exist'] == true){
      if($request['statut'] == 0){
        return json_encode(array('message' => 'Une requête de lecture pour cet article est toujours en cours de validation!','error'=>false));
      }else if($request['statut'] == 1){
        return json_encode(array('message' => 'Lecture...','error'=>false));
      }
    }else{
      $req = $bd->prepare('INSERT INTO articles_request_allow(id_members,id_article,statut)
            VALUES(:id_members, :id_article, :statut)');
      $req->execute(array(
                                                           'id_members' => strip_tags($data->id_member),
                                                           'id_article' => strip_tags($data->id_article),
                                                           'statut' => 0

      ));
      return json_encode(array('message' => 'Une demande de lecture a été envoyée à l\'administrateur, vous serrez notifier
        une fois que la demande serra confirmer. L\'équipe de Kelladata','error'=>false));
  }
}
 ?>
