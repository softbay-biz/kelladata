import header from './componemts/header.js';
import bottom from './componemts/bottom.js';
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

document.addEventListener('DOMContentLoaded',()=>{
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
			default:

		}
	}else{
		callHomepage();
	}
},false);
