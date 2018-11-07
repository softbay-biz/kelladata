<?php
function registration($data){
	include 'Helpers/isEmailExist.php';
	include 'Helpers/encrypt_password.php';
	include 'Helpers/bd.php';
	include 'Helpers/uploadFile.php';
	$bd = bd();
	//We check the kind of account for registration
if(isset($data->first_name) AND isset($data->last_name) AND isset($data->email) AND isset($data->password)){
					$firstName = strip_tags($data->first_name);
					$lastName = strip_tags($data->last_name);
					$email = strip_tags($data->email);
					$password = complex_mdp($data->password);
				//We check if this customer already exist
				if(isEmailExist($email,$bd) === true){
					return json_encode(array('message' => 400,'error'=>true));
				}else{
					//Do tuff
					try{
                        $req = $bd->prepare('INSERT INTO members(first_name,last_name,password,email)
                        			VALUES(:first_name, :last_name, :password, :email)');
                        $req->execute(array(
                                                                             'first_name' => $firstName,
                                                                             'last_name' => $lastName,
                                                                             'password' => $password,
                                                                             'email' => $email,

                        ));
                        return json_encode(array('message' => 'New customer added!','error'=>false));
                    }catch(Exception $i){
                                  return json_encode(array('message' => 'Error when saving customer data for registration!','error'=>true));
                              }
				}
			}else{
				return json_encode(array('message' => 'Number of insufficient parameters r!','error'=>true));
			}
	}
?>
