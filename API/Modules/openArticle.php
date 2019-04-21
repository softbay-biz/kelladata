<?php
function openArticle($data){
  include 'Helpers/bd.php';
	$bd = bd();
    try{
     $request = $bd->prepare('SELECT * FROM articles WHERE id_article = ?');
         $request->execute([strip_tags($data->id_article)]);
     }catch(Exception $e){
       return json_encode(array('message' => 'Database connection error!','error'=>true));
     }

			if($request->rowCount() < 1){
				return json_encode(array('message' => 'Not found','error'=>true));
			}else{
				$articles = array();
				while($infos = $request->fetch()){
						array_push($articles,array(
																		"id_article" => $infos["id_article"],
																    "titre" => $infos["titre"],
																		"id_auteur" => $infos["id_auteur"],
                                    "statut" => $infos["statut"],
																		"date_publication" => $infos["date_publication"],
                                    "contenu" => $infos["contenu"]
																));
				}
				return json_encode(array("message"=>$articles,"error"=>false));
	}
}
 ?>
