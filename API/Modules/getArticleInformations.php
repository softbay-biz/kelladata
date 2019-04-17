<?php
function getArticleInformations($data){
  include 'Helpers/bd.php';
	$bd = bd();
  if(isset($data->modify) && $data->modify === "yes"){
    try{
     $request = $bd->prepare('SELECT * FROM articles');
         $request->execute();
     }catch(Exception $e){
       return json_encode(array('message' => 'Database connection error!','error'=>true));
     }
  }else{
    try{
     $request = $bd->prepare('SELECT * FROM articles WHERE statut = "publish"');
         $request->execute();
     }catch(Exception $e){
       return json_encode(array('message' => 'Database connection error!','error'=>true));
     }
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
																		"date_publication" => $infos["date_publication"]
																));
				}
				return json_encode(array("message"=>$articles,"error"=>false));
	}
}
 ?>
