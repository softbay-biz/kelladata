<?php
function registration($data){
	include 'Helpers/isEmailExist.php';
	include 'Helpers/encrypt_password.php';
	include 'Helpers/bd.php';
	include 'Helpers/uploadFile.php';
	$bd = bd();
	//We check the kind of account for registration
if(isset($data->first_name) AND isset($data->account_type) AND isset($data->last_name) AND isset($data->email) AND isset($data->password)){
					$firstName = strip_tags($data->first_name);
					$lastName = strip_tags($data->last_name);
					$email = strip_tags($data->email);
					$account_type = strip_tags($data->account_type);
					$password = complex_mdp($data->password);
				//We check if this customer already exist
				if(isEmailExist($email,$bd) === true){
					return json_encode(array('message' => 'Ce mail existe deja!','error'=>true));
				}else{
					//Do tuff
					try{
                        $req = $bd->prepare('INSERT INTO members(first_name,last_name,email,password,account_type)
                        			VALUES(:first_name, :last_name, :email, :password, :account_type)');
                        $req->execute(array(
                                                                             'first_name' => $firstName,
                                                                             'last_name' => $lastName,
																																						 'email' => $email,
																																						 'password' => $password,
																																						 'account_type' => $account_type

                        ));
                        return json_encode(array('message' => 'New account added!','error'=>false));
                    }catch(Exception $i){
                                  return json_encode(array('message' => 'Error when saving customer data for registration!','error'=>true));
                              }
				}
			}else{
				return json_encode(array('message' => 'Number of insufficient parameters !','error'=>true));
			}
	}
?>
