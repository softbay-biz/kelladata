<?php
function getMedias($data){
  include 'Helpers/bd.php';
	$bd = bd();
	 try{
      if(isset($data->expert) && strip_tags($data->expert) == true){
        $request = $bd->prepare('SELECT * FROM media WHERE type = ?');
        $request->execute([strip_tags($data->type)]);
      }else{
        $request = $bd->prepare('SELECT * FROM media WHERE statut = 1');
        $request->execute();
      }
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
                                    "owner" => $infos["owner"],
																		"date_ajout" => $infos["date_ajout"]
																));
				}
				return json_encode(array("message"=>$medias,"error"=>false));
	}
}
?>
