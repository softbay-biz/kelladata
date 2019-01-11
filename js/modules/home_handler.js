import states from './../states/states.js';
import {sendData} from './../helpers/sendData.js';
import {media_ui_model} from './../modules/media_ui_model.js';
import articles_list from './../helpers/articles_list.js';
import all_medias from './../helpers/all_medias.js';

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
const home_handler = ()=>{
  let preview_home_article = document.getElementById("preview_home_article");
  preview_home_article.addEventListener("click",(e)=>{
    if(e.target != e.currentTarget){
      alert("Veuillez vous connecter pour consulter nos articles!");
    }
  },false);
  //Here we get some
    sendData(form_articles).then((response)=>{
      preview_home_article.innerHTML = "";
      if(response.error == false){
        if(articles_list.length === 0){
          for(let i = 0; i < response.message.length; i++){
            articles_list.push(response.message[i]);
          }
        }
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

export {home_handler};
