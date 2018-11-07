<?php
function authentification($data){
	include 'Helpers/isEmailExist.php';
	include 'Helpers/makeToken.php';
	include 'Helpers/bd.php';
	include 'Helpers/encrypt_password.php';
	include 'Modules/updateDetails.php';	
	$bd = bd();
	$user = array();
	if(isEmailExist($data->email,$bd) == false){
		return json_encode(array('message' => 'This email does not exist!')); 
	}else{
		$email = strip_tags($data->email);
		$mdp = complex_mdp($data->password);
		 try{
			$request = $bd->prepare('SELECT account.*,members.*
									  FROM account,members 
									  WHERE members.email = ? and
									        members.password = ? and
									        account.id_account = members.account_type AND members.activation = 1									         ');
	        $request->execute([$email,$mdp]);
			}catch(Exception $e){
				return json_encode(array('message' => 'Database connection error!','error'=>true));
			}	

			if($request->rowCount() < 1){
				return json_encode(array('message' => 'Not found','error'=>true));
			}else{
				/*We create a new token an save it to the data base 
					each time a person ask for an authentification
				*/
					$token = makeToken($email);
				//Here we save the new token
					$tokenAge = time();
					updateInformations('token',$token,$email,$bd);
					updateInformations('tokenAge',$tokenAge,$email,$bd);
					$user['token'] = $token;
					$user['tokenAge'] = $tokenAge;
				while($infos = $request->fetch()){
					$user['error'] = false;
					$user['id_members'] = $infos['id_members'];
					$user['account_type'] = $infos['type'];
					$user['first_name'] = $infos['first_name'];
					$user['last_name'] = $infos['last_name'];
					$user['email'] = $infos['email'];
					$user['phone_number'] = $infos['phone_number'];
					$user['restaurant_phone_number'] = $infos['restaurant_phone_number'];
					$user['postcode'] = $infos['postcode'];
					$user['restaurant_name'] = $infos['restaurant_name'];
					$user['address_line_1'] = $infos['address_line_1'];
					$user['address_line_2'] = $infos['address_line_2'];
					$user['motivation'] = $infos['motivation'];
					$user['availabilies'] = $infos['availabilies'];
					$user['restaurant_is_available'] = $infos['restaurant_is_available'];
					$user['firstRegistrationDate'] = $infos['firstRegistrationDate'];

				}
				return json_encode($user);
			}		
		}
	}
?>