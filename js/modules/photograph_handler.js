import {sendData} from './../../js/helpers/sendData.js';
import {dashboard_handler} from './../helpers/dashboard_handler.js';
import {media_ui_model} from './../modules/media_ui_model.js';

const photograph_handler = ()=>{
  let media_ui_model = media_ui_model;
  let pop_up_content = document.getElementById("media_pop_up");
  let form0 = {
    requestName:btoa(btoa(btoa("membersPendingValidation"))),
    data:{
    }
  };
  dashboard_handler(document.getElementById("dashboard"));

  pop_up_content.addEventListener("click",(e)=>{
    if(e.target.id == "close_pop_up_cross" || e.target.id == "close_pop_up_button"){
      pop_up_content.classList.remove("is-active");
    }
  },false);

}
export {photograph_handler};
