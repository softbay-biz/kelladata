import {sendData} from './../../js/helpers/sendData.js';
import all_medias from './../../js/helpers/all_medias.js';
import {dashboard_handler} from './../../js/helpers/dashboard_handler.js';
import {media_ui_model} from './../../js/modules/media_ui_model.js';
import {display_media_pop_up} from './../../js/helpers/display_media_pop_up.js';
import {display_article_pop_up} from './../../js/helpers/display_article_pop_up.js';
import {display_expert_pop_up_to_validation} from './../../js/helpers/display_expert_pop_up_to_validation.js';


const expert_handler = ()=>{
  let display = document.getElementById("data-account-display");
  let expert_wrapper_modal = document.getElementById("expert-wrapper-modal");
  expert_wrapper_modal.addEventListener("click",(e)=>{
    if(e.target.id == "expert_validate_button"){
      const form_articles_request = {
        requestName:btoa(btoa(btoa("x"))),
        data:{
          id_media:,
          validate : 1
        }
      };
      sendData(form_articles_request).then((response)=>{
        console.log(response);
        if(response.error == false){
        }else{
        }
      }).catch((error)=>{
        //console.log(error);
      });
    }else if(e.target.id == "expert_block_button"){
      const form_articles_request = {
        requestName:btoa(btoa(btoa("x"))),
        data:{
          id_media:,
          validate : 0
        }
      };
      sendData(form_articles_request).then((response)=>{
        console.log(response);
        if(response.error == false){
        }else{
        }
      }).catch((error)=>{
        //console.log(error);
      });;
    }
  },false);
  dashboard_handler(document.getElementById("dashboard"));
  display.addEventListener('contextmenu',(e)=>{
    e.preventDefault();
    if(e.target != e.currentTarget && e.target.dataset.type != 4){
      display_expert_pop_up_to_validation();
    }
  },false);
  display.addEventListener('click',(e)=>{
    if(e.target != e.currentTarget && e.target.dataset.type != 4){
      display_media_pop_up(e.target.dataset.lightbox);
    }else if(e.target != e.currentTarget && e.target.dataset.type == 4){
      const form_articles_request = {
        requestName:btoa(btoa(btoa("requestToReadArticle"))),
        data:{
          id_article : e.target.dataset.id,
          id_member : localStorage.getItem("id")
        }
      };
          sendData(form_articles_request).then((response)=>{
            if(response.error == false){
              display_article_pop_up(response.message);
            }else{
            }
          }).catch((error)=>{
            //console.log(error);
          });
    }
  },false);
};

export{expert_handler};
