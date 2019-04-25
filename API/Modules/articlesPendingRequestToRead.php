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
				$articlesRequestToRead['users'] = array();
				while($infos = $request->fetch()){
						array_push($articlesRequestToRead['users'],array(
																		"id" => $infos["id_members"],
																    "first_name" => $infos["first_name"],
																    "last_name" => $infos["last_name"],
																		"email" => $infos["email"],
																		"account_type" => $tab_temp[$infos["account_type"]-1],
																		"photo" => $infos["photo"],
																		"activation" => $infos["activation"]
																));
				}$user['error'] = false;
				return json_encode($user);
	}
}
?>
