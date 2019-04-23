import {sendData} from './../helpers/sendData.js';
import {display_members_list} from './../helpers/display_members_list.js';
import {dashboard_handler} from './../helpers/dashboard_handler.js';
import {displayArticles} from './../helpers/display_articles.js';
import all_medias from './../helpers/all_medias.js';
import articles_list from './../helpers/articles_list.js';
import {display_article_pop_up} from './../helpers/display_article_pop_up.js';
import {sup_code_editor} from './../vendors/sup_code_editor.js';

const title = document.getElementById("publication_title");
const content = document.getElementById("summernote");
let article_id = null;

const openArticle = ()=>{
  document.getElementById("data-account-display").addEventListener("click",(e)=>{
    if(e.target != e.currentTarget && e.target.classList.contains("read-article")){
      article_id = e.target.dataset.id;
      let form = {
        requestName:btoa(btoa(btoa("openArticle"))),
        data:{
          modify : "yes",
          id_article:e.target.dataset.id
        }
      };
      sendData(form).then((response)=>{
        const contenu = document.getElementById("summernote");
        const titre = document.getElementById("publication_title");
        const publication_new_article_modal = document.getElementById("publication_new_article_modal");
        publication_new_article_modal.classList.add("is-active");
        $('#summernote').summernote('reset');
        titre.value = response.message[0].titre;
        $('#summernote').summernote('editor.insertText', response.message[0].contenu);
      }).catch((error)=>{
        //console.log(error);
      });
    }
  },false);
};

const resetForm = ()=>{
  document.getElementById("publication_title").value = "";
  document.getElementById("summernote").value = "";
};
const publication_handler = ()=>{
  dashboard_handler(document.getElementById("dashboard"));
  openArticle();
  let new_article = document.getElementById('publication_new_article');
  document.getElementById("data-account-display").innerHTML = "";
  displayArticles(articles_list,localStorage.getItem("id"));
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
    article_id = null;
    let title = document.getElementById("publication_title");
    let content = document.getElementById("summernote");
    let articles_list = document.getElementById('articles-list');
    if(title.value != "" && content.value != ""){
        let form = {
          requestName:btoa(btoa(btoa("add_article"))),
          data:{
            statut:"publish",
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
  document.getElementById('publication_save').addEventListener("click",(e)=>{
    let title = document.getElementById("publication_title");
    let content = document.getElementById("summernote");
    let articles_list = document.getElementById('articles-list');
    if(title.value != "" && content.value != ""){
        let form = {
          requestName:btoa(btoa(btoa("updateArticle"))),
          data:{
            id_article:article_id,
            titre:title.value,
            contenu:content.value,
            id_auteur:localStorage.getItem("id")
          }
        };
        sendData(form).then((response)=>{
          if(response.error == false){
            alert('Article sauvegardé avec succès!');
          }else{
            alert('Article non sauvegardé : '.response.message);
          }
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
