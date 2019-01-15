import states from './../states/states.js';
import login from './../modules/login.js';
import register from './../modules/register.js';
import landing_page_search_result from './../modules/landing_page_search_result.js';
import {landing_page_search_result_handler} from './../modules/landing_page_search_result_handler.js';
import header from './../componemts/header.js';
import bottom from './../componemts/bottom.js';
import removeHomePage from './removeHomePage.js';
import home from './../modules/home.js';
import {home_handler} from './../modules/home_handler.js';
import {get_register_form} from './../componemts/functions/get_register_form.js';
import {get_login_form} from './../componemts/functions/get_login_form.js';
const callHomepage = ()=>{
	states.removeHomePage === false;
	//We load the home page
	document.getElementById("container").innerHTML = "";
	document.getElementById("container").insertAdjacentHTML("beforebegin",header);
	document.getElementById("container").insertAdjacentHTML("afterbegin",home);
	document.getElementById("container").insertAdjacentHTML("afterend",bottom);
	home_handler();
	//Event on the top barre
	document.getElementById('navbar-top').addEventListener('click',(e)=>{
		if(e.target.id === "login"){
			states.removeHomePage === true?"":removeHomePage(states);
			document.getElementById('container').innerHTML = login;
			document.getElementById('submitLogin').addEventListener('click',()=>{
				get_login_form();
			},false);
		}else if(e.target.id === "signup"){
			states.removeHomePage === true?"":removeHomePage(states);
			document.getElementById('container').innerHTML = register;
			document.getElementById('submitRegister').addEventListener('click',()=>{
				get_register_form();
			},false);
		}else if(e.target.id === "home"){
			states.removeHomePage === false;
			document.getElementById('container').innerHTML = home;
			home_handler();
		}else if(e.target.id === "menu_elt_all"){
			states.removeHomePage === true?"":removeHomePage(states);
			document.getElementById('container').innerHTML = landing_page_search_result;
			return landing_page_search_result_handler("all");
		}else if(e.target.id === "menu_elt_images"){
			states.removeHomePage === true?"":removeHomePage(states);
			document.getElementById('container').innerHTML = landing_page_search_result;
			return landing_page_search_result_handler("images");
		}else if(e.target.id === "menu_elt_videos"){
			states.removeHomePage === true?"":removeHomePage(states);
			document.getElementById('container').innerHTML = landing_page_search_result;
			return landing_page_search_result_handler("videos");
		}else if(e.target.id === "menu_elt_audios"){
			states.removeHomePage === true?"":removeHomePage(states);
			document.getElementById('container').innerHTML = landing_page_search_result;
			return landing_page_search_result_handler("audios");
		}else if(e.target.id === "menu_elt_articles"){
			states.removeHomePage === true?"":removeHomePage(states);
			document.getElementById('container').innerHTML = landing_page_search_result;
			return landing_page_search_result_handler("articles");
		}else{
			e.stopPropagation();
		}
	},{passive:true,capture:false});
	//Event on the landing page search barre
	let search_barre_landing_page = document.getElementById("search-barre-landing-page");
	search_barre_landing_page.addEventListener("keydown",(e)=>{
		if(e.keyCode == 13 && e.target.value.length > 0){
			states.removeHomePage === true?"":removeHomePage(states);
			document.getElementById('container').innerHTML = landing_page_search_result;
			return landing_page_search_result_handler(e.target.value);
		}
	},
	false);
};

export {callHomepage};
