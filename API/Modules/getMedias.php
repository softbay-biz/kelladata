<?php
function getMedias($data){
  include 'Helpers/bd.php';
	$bd = bd();
	 try{
			$request = $bd->prepare('SELECT * FROM media WHERE owner = ?');
	        $request->execute([$data->owner]);
			}catch(Exception $e){
				return json_encode(array('message' => 'Database connection error!','error'=>true));
			}

			if($request->rowCount() < 1){
				return json_encode(array('message' => 'Not found','error'=>true));
			}else{
				$medias = array();
				while($infos = $request->fetch()){
						array_push($medias,array(
																		"id" => $infos["id_media"],
																    "name" => $infos["name"],
																    "description" => $infos["description"],
																		"type" => $infos["type"],
																		"link_or_blob" => $infos["link_or_blob"],
																		"statut" => $infos["statut"],
																		"date_ajout" => $infos["date_ajout"]
																));
				}
				return json_encode(array("message"=>$medias,"error"=>false));
	}
}
?>
