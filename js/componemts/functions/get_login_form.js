import {sendData} from './../../helpers/sendData.js';

function get_login_form(){

	let form = {
		requestName:btoa(btoa(btoa("authentification"))),
		data:{
			email:document.getElementById("email").value,
			password:document.getElementById("password").value,
		}
	};

	if(form.data.email === "" || form.data.password === ""){
				return alert("Veuillez remplir tout les champs!");
	}else{
			let register_promise = sendData(form);
			 return register_promise.then((response)=>{
				 if(response.error === false){
					 alert('Connexion avec l adress : '+response.message.email);
				 }else{
					 alert(response.message);
				 }
			 }).catch((error)=>{
				 //console.log(error);
			 });
	}
}
export {get_login_form};
