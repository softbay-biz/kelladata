import states from './../states/states.js';
import {sendData} from './../helpers/sendData.js';
import {media_ui_model} from './../modules/media_ui_model.js';
import articles_list from './../helpers/articles_list.js';
import all_medias from './../helpers/all_medias.js';

const home_handler = ()=>{
  let navbar = document.getElementById("navbar-top");
  let preview_home_article = document.getElementById("preview_home_article");
  preview_home_article.addEventListener("click",(e)=>{
    if(e.target != e.currentTarget){
      alert("Veuillez vous connecter pour consulter nos articles!");
    }
  },false);
};

export {home_handler};
