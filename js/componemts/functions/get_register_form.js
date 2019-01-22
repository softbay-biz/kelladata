import home from './../../modules/home.js';
import {sendData} from './../../helpers/sendData.js';

function get_register_form(){

	let form = {
		requestName:btoa(btoa(btoa("registration"))),
		data:{
			first_name:document.getElementById("first_name").value,
			last_name:document.getElementById("last_name").value,
			email:document.getElementById("email").value,
			account_type:document.getElementById("account_type"),
			password:document.getElementById("password").value,
			confirm_password:document.getElementById("confirm_password").value
		}
	};
	form.data.account_type = parseInt(form.data.account_type.options[form.data.account_type.selectedIndex].dataset.id);
	if(form.data.first_name === "" || form.data.last_name === "" || form.data.email === ""
		|| form.data.password === "" || form.data.account_type === ""){
			if(form.data.account_type == 0){
				return alert("Veuillez choisir un type de compte!");
			}
			else{
				return alert("Veuillez remplir tout les champs!");
			}
	}else{
		if(form.data.password != form.data.confirm_password){
			return alert("Les deux mots de passe ne se remssemble pas!");
		}else{
			let register_promise = sendData(form);
			 return register_promise.then((response)=>{console.log(response);
				 if(response.error == false){
					 console.log(response.message);
					  document.getElementById('container').innerHTML = home;
						alert("Vous serrez notifier par mail apres l'activation de votre compte par l'administrateur.");
				 }else{
					 alert(response.message);
				 }
			 }).catch((error)=>{
				 //console.log(error);
			 });
		}
	}
}
export {get_register_form};
