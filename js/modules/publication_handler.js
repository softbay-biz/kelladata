import {sendData} from './../../js/helpers/sendData.js';
import {display_members_list} from './../../js/helpers/display_members_list.js';
import {dashboard_handler} from './../helpers/dashboard_handler.js';

const publication_handler = ()=>{
  dashboard_handler(document.getElementById("dashboard"));
  document.getElementById('publication_send').addEventListener("click",(e)=>{
    let title = document.getElementById("publication_title");
    let content = document.getElementById("summernote");
    if(title.value != "" && content.value != ""){
        let form = {
          requestName:btoa(btoa(btoa("add_article"))),
          data:{
            titre:title.value,
            contenu:content.value,
            id_auteur:localStorage.getItem("id")
          }
        };
        sendData(form).then((response)=>{
          console.log(response);
          title.value = "";
          content.value = "";
        }).catch((error)=>{
          //console.log(error);
        });
    }else{
      alert("Veuillez ne pas laisser le titre ou le contenu de l'article vide!");
    }
  },false);
};

export {publication_handler};
