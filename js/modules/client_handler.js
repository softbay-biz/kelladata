import {dashboard_handler} from './../helpers/dashboard_handler.js';
import {displayMediaClient} from './../modules/displayMediaClient.js';
import all_medias from './../helpers/all_medias.js';
import articles_list from './../helpers/articles_list.js';
import {sendData} from './../helpers/sendData.js';

const client_handler = ()=>{
  let display = document.getElementById("data-account-display");
  dashboard_handler(document.getElementById("dashboard"));
  let search_barre_landing_page = document.getElementById("client-search-barre");
  search_barre_landing_page.addEventListener("keydown",(e)=>{
    if(e.keyCode == 13 && e.target.value.length > 0){
      console.log(all_medias);
      return displayMediaClient(display,e.target.value);
    }
  },
  false);
  display.addEventListener('click',(e)=>{
    if(e.target != e.currentTarget){
      const form_articles_request = {
        requestName:btoa(btoa(btoa("articleRequest"))),
        data:{
        }
      };
          sendData(form_articles_request).then((response)=>{
            if(response.error == false){
              console.log(response);
            }else{
            }
          }).catch((error)=>{
            //console.log(error);
          });
    }
  },false);
};

export {client_handler};
