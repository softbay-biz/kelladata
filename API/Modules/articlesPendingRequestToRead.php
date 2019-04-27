<?php
function articlesPendingRequestToRead(){
	include 'Helpers/bd.php';
	$bd = bd();
	 try{
			$request = $bd->prepare('SELECT *
									  FROM articles_request_allow');
	        $request->execute();
			}catch(Exception $e){
				return json_encode(array('message' => 'Database connection error!','error'=>true));
			}

			if($request->rowCount() < 1){
				return json_encode(array('message' => 'Not found','error'=>true));
			}else{
				$articlesRequestToRead['articlesRequestToRead'] = array();
				while($infos = $request->fetch()){
						array_push($articlesRequestToRead['articlesRequestToRead'],array(
																		"id_articles_request_allow" => $infos["id_articles_request_allow"],
																    "id_members" => $infos["id_members"],
																    "id_article" => $infos["id_article"],
																		"statut" => $infos["statut"]
																));
				}
				return json_encode(array('message' => $articlesRequestToRead,'error'=>false));
	}
}
?>
