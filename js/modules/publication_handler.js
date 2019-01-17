import {sendData} from './../../js/helpers/sendData.js';
import {display_members_list} from './../../js/helpers/display_members_list.js';
import {dashboard_handler} from './../helpers/dashboard_handler.js';

let title = document.getElementById("publication_title");
let content = document.getElementById("summernote");

const resetForm = ()=>{
  document.getElementById("publication_title").value = "";
  document.getElementById("summernote").value = "";
};
const publication_handler = ()=>{
  dashboard_handler(document.getElementById("dashboard"));
  let new_article = document.getElementById('publication_new_article');
  new_article.addEventListener('click',(e)=>{
    publication_new_article_modal.classList.add("is-active");
  },false);
  let publication_new_article_modal = document.getElementById('publication_new_article_modal');
  publication_new_article_modal.addEventListener('click',(e)=>{
    if(e.target.id == "publication_pop_up_close" || e.target.id == "publication_pop_up_cancel"){
      publication_new_article_modal.classList.remove("is-active");
			resetForm();
    }
  },false);

  document.getElementById('publication_send').addEventListener("click",(e)=>{
    let title = document.getElementById("publication_title");
    let content = document.getElementById("summernote");
    let articles_list = document.getElementById('articles-list');
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
          alert('Article enregistré avec succès!');
          resetForm();
        }).catch((error)=>{
          //console.log(error);
        });
    }else{
      alert("Veuillez ne pas laisser le titre ou le contenu de l'article vide!");
    }
  },false);
};

export {publication_handler};
