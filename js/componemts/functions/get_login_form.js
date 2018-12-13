import {persist_data_user} from './../../helpers/persist_data_user.js';
import {sendData} from './../../helpers/sendData.js';
import {display_members_list} from './../../helpers/display_members_list.js';
import removeHeader from './../../helpers/removeHeader.js';
import states from './../../states/states.js';
import {admin_handler} from './../../modules/admin_handler.js';
import anthropologue from './../../modules/anthropologue.js';
import admin from './../../modules/admin.js';

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
					 if(response.message.account_type == 6){
						 persist_data_user(response.message);
						 document.getElementById('container').innerHTML = anthropologue;
						 states.removeHeader === true?"":removeHeader(states);
					 }else if(response.message.account_type == 1){
													 let form0 = {
												     requestName:btoa(btoa(btoa("membersPendingValidation"))),
												     data:{
												     }
												   };
													 persist_data_user(response.message);
													 document.getElementById('container').innerHTML = admin;
													 states.removeHeader === true?"":removeHeader(states);
													 admin_handler();
															 return sendData(form0).then((response)=>{
													       display_members_list(response);
													     }).catch((error)=>{
													       //console.log(error);
													     });
					 }else{
						 console.log("Account type not found!");

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
