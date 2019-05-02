<?php
function articlesPendingRequestToRead(){
	include 'Helpers/bd.php';
	$bd = bd();
	 try{
			$request = $bd->prepare('SELECT
				articles_request_allow.id_articles_request_allow as id_articles_request_allow,
				articles_request_allow.statut as statut,
				members.first_name as first_name,
				members.last_name as last_name,
				members.email as email,
				articles.titre as title
									  FROM members,articles_request_allow,articles
										WHERE members.id_members = articles_request_allow.id_members AND
										articles_request_allow.id_article = articles.id_article');
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
																    "first_name" => $infos["first_name"],
																		"last_name" => $infos["last_name"],
																    "title" => $infos["title"],
																		"email" => $infos["email"],
																		"statut" => $infos["statut"]
																));
				}
				return json_encode(array('message' => $articlesRequestToRead,'error'=>false));
	}
}
?>
