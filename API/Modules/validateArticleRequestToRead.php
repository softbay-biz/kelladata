<?php function validateArticleRequestToRead($data){
  include 'Helpers/bd.php';
  $bd = bd();
	$id = strip_tags($data->id);
  $statut= strip_tags($data->statut);
	try{
        $req = $bd->prepare('UPDATE articles_request_allow SET statut = ? WHERE id_articles_request_allow = ?');
        $req->execute([$statut,$id]);
            return json_encode(array('message' => 'Requête non validée!','error'=>false));
        }catch(Exception $i){
            return json_encode(array('message' => 'Database connection error!','error'=>true));
        }
    }
?>
