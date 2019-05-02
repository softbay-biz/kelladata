import header from './componemts/header.js';
import bottom from './componemts/bottom.js';
import {sendData} from './helpers/sendData.js';
import {media_ui_model} from './modules/media_ui_model.js';
import articles_list from './helpers/articles_list.js';
import media_model_pop_up from './helpers/media_model_pop_up.js';
import all_medias from './helpers/all_medias.js';
import home from './modules/home.js';
import {admin_handler} from './modules/admin_handler.js';
import {photograph_handler} from './modules/photograph_handler.js';
import {publication_handler} from './modules/publication_handler.js';
import register from './modules/register.js';
import login from './modules/login.js';
import admin from './modules/admin.js';
import expert from './modules/expert.js';
import {root_data} from './modules/root.js';
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
import {display_profile_photo} from './helpers/display_profile_photo.js';


document.addEventListener('DOMContentLoaded',()=>{
	if(localStorage.getItem("connected") != null && localStorage.getItem("connected") == "true"){
		root_data();
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
			case "3":
				document.getElementById('container').innerHTML = expert;
				break;
			case "4":
				document.getElementById('container').innerHTML = anthropologue;
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
			default:break;

		}
		display_profile_photo();

	}else{
		callHomepage();
	}
  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach( el => {
      el.addEventListener('click', () => {

        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');

      });
    });
  }

},false);
