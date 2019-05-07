import {sendData} from './../../js/helpers/sendData.js';
import all_medias from './../../js/helpers/all_medias.js';
import {dashboard_handler} from './../../js/helpers/dashboard_handler.js';
import {media_ui_model} from './../modules/media_ui_model.js';


const expert_handler = ()=>{
  dashboard_handler(document.getElementById("dashboard"));
};

export{expert_handler};
