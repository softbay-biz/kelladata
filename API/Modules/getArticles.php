<?php
function getArticles($data){
  include 'Helpers/bd.php';
	$bd = bd();
	 try{
			$request = $bd->prepare('SELECT * FROM articles');
	        $request->execute();
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
																		"date_publication" => $infos["date_publication"]
																));
				}
				return json_encode(array("message"=>$articles,"error"=>false));
	}
}
 ?>
