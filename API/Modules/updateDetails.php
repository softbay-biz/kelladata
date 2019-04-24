<?php
function updateDetails($data){
	include 'Helpers/isEmailExist.php';
	include 'Helpers/bd.php';
	include 'Helpers/encrypt_password.php';
	include 'Helpers/uploadImage.php';

	$bd = bd();
	$response = array();
	$email = $data->email;
	$id = $data->id;
	foreach ($data as $key => $table) {
		updateDetails2($id,$email,$table,$bd);
	}
	return json_encode(array('message' =>'changed','error'=>false));
	//Here whe collect new informations
}
function updateDetails2($id,$email,$table,$bd){
	//table -> [id,element,value]
	if($table[0] == "email"){
		$element = strip_tags($table[0]);
		//We check if the new email dont already exist
			if((isEmailExist($table[1],$bd) === true)){
				return json_encode(array('error'=>true,'message' => 'This email already belong to someone!'));
			}else{
					if(updateInformations($table[0],$table[1],$id,$bd) == true){
						return json_encode(array('message' => $table[0].' : changed','error'=>false));
					}else{
						return json_encode(array('error'=>true,'message' => 'Error when changing '.$table[0].'!'));
					}
			}
	}else if($table[0] == "image"){
		//
		$imageName = imageFromString($table[1]);
		updateInformations("photo",$imageName,$id,$bd);
	}else if($table[0] == "password"){
		//
		$mdp = complex_mdp($table[1]);
		resetPassword("password",$mdp,$email,$bd);
	}
	else{
			if(updateInformations($table[0],$table[1],$id,$bd) == true){
				return json_encode(array('error'=>false,'message' => $table[0].' : changed'));
			}else{
				return json_encode(array('error'=>false,'message' => 'Error when changing '.$table[0].'!'));
			}
	}

	}
function updateInformations($elementName,$elementValue,$id,$bd){
	//We remove html tags in case
	$id = strip_tags($id);
	$elementName = strip_tags($elementName);
	$elementValue = strip_tags($elementValue);
	try{
        $req = $bd->prepare('UPDATE members SET '.$elementName.' = ? WHERE id_members = ?');
        $req->execute([$elementValue,$id]);
            return true;
        }catch(Exception $i){
            return false;
        }
    }
function resetPassword($elementName,$elementValue,$email,$bd){
	$elementName = strip_tags($elementName);
	$elementValue = strip_tags($elementValue);
	try{
        $req = $bd->prepare('UPDATE members SET '.$elementName.' = ? WHERE email = ?');
        $req->execute([$elementValue,$email]);
            return true;
        }catch(Exception $i){
            return false;
        }
    }
?>
