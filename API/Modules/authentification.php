<?php
function authentification($data){
	include 'Helpers/isEmailExist.php';
	include 'Helpers/bd.php';
	include 'Helpers/encrypt_password.php';
	$bd = bd();
	$user = array();
	if(isEmailExist($data->email,$bd) == false){
		return json_encode(array('message' => 'This email does not exist!'));
	}else{
		$email = strip_tags($data->email);
		$mdp = complex_mdp($data->password);
		 try{
			$request = $bd->prepare('SELECT type_account.*,members.*
									  FROM type_account,members
									  WHERE members.email = ? and
									        members.password = ? and
									        type_account.id_type_account = members.account_type	and members.activation = 1								         ');
	        $request->execute([$email,$mdp]);
			}catch(Exception $e){
				return json_encode(array('message' => 'Database connection error!','error'=>true));
			}

			if($request->rowCount() < 1){
				return json_encode(array('message' => 'Not found','error'=>true));
			}else{
				while($infos = $request->fetch()){
					$user['id_members'] = $infos['id_members'];
					$user['account_type'] = $infos['account_type'];
					$user['first_name'] = $infos['first_name'];
					$user['last_name'] = $infos['last_name'];
					$user['email'] = $infos['email'];
					$user['photo'] = $infos['photo'];

				}
				return json_encode(array('message' =>$user,'error'=>false));
			}
		}
	}
?>
