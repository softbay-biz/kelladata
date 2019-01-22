import header from './componemts/header.js';
import bottom from './componemts/bottom.js';
import {sendData} from './helpers/sendData.js';
import {media_ui_model} from './modules/media_ui_model.js';
import articles_list from './helpers/articles_list.js';
import all_medias from './helpers/all_medias.js';
import home from './modules/home.js';
import {admin_handler} from './modules/admin_handler.js';
import {photograph_handler} from './modules/photograph_handler.js';
import {publication_handler} from './modules/publication_handler.js';
import register from './modules/register.js';
import login from './modules/login.js';
import admin from './modules/admin.js';
import {sup_code_editor} from './vendors/sup_code_editor.js';
import publication from './modules/publication.js';
import anthropologue from './modules/anthropologue.js';
import {forms_handler} from './modules/forms_handler.js';
import {navigation} from './modules/navigation.js';
import removeHomePage from './helpers/removeHomePage.js';
import {callHomepage} from './helpers/callHomepage.js';
import states from './states/states.js';
import {get_register_form} from './componemts/functions/get_register_form.js';
import {get_login_form} from './componemts/functions/get_login_form.js';
import photograph from './modules/photograph.js';
import client from './modules/client.js';
import {client_handler} from './modules/client_handler.js';

const form_articles = {
  requestName:btoa(btoa(btoa("getArticles"))),
  data:{
  }
};
const form_medias = {
  requestName:btoa(btoa(btoa("getMedias"))),
  data:{
  }
};
const root_data = ()=>{
  //Here we get some
		sendData(form_articles).then((response)=>{
			if(response.error == false){
				if(articles_list.length === 0){
					for(let i = 0; i < response.message.length; i++){
						articles_list.push(response.message[i]);
					}
				}
        preview_home_article.innerHTML = "";
				for(let i = 0; i < 4; i++){
						preview_home_article.insertAdjacentHTML("afterbegin",media_ui_model(4,articles_list[i]));
				}
			}else{
			}
		}).catch((error)=>{
			//console.log(error);
		});
		sendData(form_medias).then((response)=>{
			if(response.error == false){
				if(all_medias.length === 0){
					for(let i = 0; i < response.message.length; i++){
						all_medias.push(response.message[i]);
					}
				}
			}else{
			}
		}).catch((error)=>{
			//console.log(error);
		});
};
document.addEventListener('DOMContentLoaded',()=>{
  root_data();
	if(localStorage.getItem("connected") != null && localStorage.getItem("connected") == "true"){
		switch (atob(atob(localStorage.getItem("role")))) {
			case "1":
				document.getElementById('container').innerHTML = admin;
				admin_handler();
				break;
			case "2":
				document.getElementById('container').innerHTML = publication;
				publication_handler();
				sup_code_editor();
				break;
			case "4":
				document.getElementById('container').innerHTML = anthropologue;
				forms_handler();
				navigation();
				break;
			case "5":
				document.getElementById('container').innerHTML = photograph;
				photograph_handler();
				break;
			case "6":
				document.getElementById('container').innerHTML = client;
				client_handler();
				break;
			default:

		}
	}else{
		callHomepage();
	}
},false);
