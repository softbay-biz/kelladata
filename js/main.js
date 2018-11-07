import header from './componemts/header.js';
import bottom from './componemts/bottom.js';
import home from './modules/home.js';
import register from './modules/register.js';
import login from './modules/login.js';
import removeHomePage from './helpers/removeHomePage.js';
import states from './states/states.js';
import {get_register_form} from './componemts/functions/get_register_form.js';

document.addEventListener('DOMContentLoaded',()=>{
	//We load the home page
	document.getElementById("container").insertAdjacentHTML("beforebegin",header);
	document.getElementById("container").insertAdjacentHTML("afterbegin",home);
	document.getElementById("container").insertAdjacentHTML("afterend",bottom);
	//Event on the top barre
	document.getElementById('navbar-top').addEventListener('click',(e)=>{
		if(e.target.id === "login"){
			states.removeHomePage === true?"":removeHomePage(states);
			document.getElementById('container').innerHTML = login;
		}else if(e.target.id === "signup"){
			states.removeHomePage === true?"":removeHomePage(states);
			document.getElementById('container').innerHTML = register;
			document.getElementById('submitRegister').addEventListener('click',()=>{
				get_register_form();
			},false);
		}else if(e.target.id === "home"){
			states.removeHomePage === false;
			document.getElementById('container').innerHTML = home;
		}else{
			e.stopPropagation();
		}
	},{passive:true,capture:false})
},false);
