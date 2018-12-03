import {sendData} from './../../helpers/sendData.js';
import removeHeader from './../../helpers/removeHeader.js';
import states from './../../states/states.js';
import anthropologue from './../../modules/anthropologue.js';

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
					 states.removeHeader === true?"":removeHeader(states);
					 if(1){
						 document.getElementById('container').innerHTML = anthropologue;
					 }
				 }else{
					 alert(response.message);
				 }
			 }).catch((error)=>{
				 //console.log(error);
			 });
	}
}
export {get_login_form};
