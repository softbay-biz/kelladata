<?php
function membersPendingValidation(){
	include 'Helpers/bd.php';
	$bd = bd();
	 try{
			$request = $bd->prepare('SELECT *
									  FROM members
									  WHERE account_type != 1
										ORDER BY id_members DESC');
	        $request->execute();
			}catch(Exception $e){
				return json_encode(array('message' => 'Database connection error!','error'=>true));
			}

			if($request->rowCount() < 1){
				return json_encode(array('message' => 'Not found','error'=>true));
			}else{
				$tab_temp = ['Admin','Directeur de publication','Expert','Anthropologue','Photographe','Client'];
				$user['users'] = array();
				while($infos = $request->fetch()){
						array_push($user['users'],array(
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
