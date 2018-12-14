import states from './../states/states.js';
import login from './../modules/login.js';
import register from './../modules/register.js';
import header from './../componemts/header.js';
import bottom from './../componemts/bottom.js';
import removeHomePage from './removeHomePage.js';
import home from './../modules/home.js';
import {get_register_form} from './../componemts/functions/get_register_form.js';
import {get_login_form} from './../componemts/functions/get_login_form.js';
const callHomepage = ()=>{
	states.removeHomePage === false;
	//We load the home page
	document.getElementById("container").innerHTML = "";
	document.getElementById("container").insertAdjacentHTML("beforebegin",header);
	document.getElementById("container").insertAdjacentHTML("afterbegin",home);
	document.getElementById("container").insertAdjacentHTML("afterend",bottom);
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
		}else{
			e.stopPropagation();
		}
	},{passive:true,capture:false});
};

export {callHomepage};
