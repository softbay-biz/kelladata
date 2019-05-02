import home from './../../modules/home.js';
import login from './../../modules/login.js';
import {get_login_form} from './../../componemts/functions/get_login_form.js';
import {sendData} from './../../helpers/sendData.js';
import {callHomepage} from './../../helpers/callHomepage.js';

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
				//return alert("Veuillez remplir tout les champs!");
			}
	}else{
		if(form.data.password != form.data.confirm_password){
			return alert("Les deux mots de passe ne se remssemble pas!");
		}else{
			if(document.getElementById("profil_photo").src != "https://bulma.io/images/placeholders/128x128.png"){
				form.data.profil_image = document.getElementById("profil_photo").src;
			}
			let register_promise = sendData(form);
			 return register_promise.then((response)=>{
				 if(response.error == false){
					  callHomepage();
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
