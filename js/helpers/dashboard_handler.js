import {callHomepage} from './callHomepage.js';
import all_medias from './../helpers/all_medias.js';
import articles_list from './../helpers/articles_list.js';
import {media_ui_model} from './../modules/media_ui_model.js';
import {displayMediaClient} from './../modules/displayMediaClient.js';
import {root_data} from './../modules/root.js';

const displayMedia = (data,statut=11)=>{
  document.getElementById("data-account-display").innerHTML = "";
  if(statut == 11){
    for (let i = 0; i < data.length; i++){
              requestAnimationFrame(()=>{
                document.getElementById("data-account-display").insertAdjacentHTML("afterbegin",media_ui_model(data[i].type,data[i]));
              });
    }
  }else{
    for (let i = 0; i < data.length; i++){
          if(data[i].statut == statut ){
              requestAnimationFrame(()=>{
                document.getElementById("data-account-display").insertAdjacentHTML("afterbegin",media_ui_model(data[i].type,data[i]));
              });
          }
    }
  }
};
const dashboard_handler = (dashboard)=>{
  //Event on the dashboard
  dashboard.addEventListener('click',(e)=>{
        if(e.target.id === "deconnexion"){
          localStorage.setItem("connected","false");
          callHomepage();
          root_data();
          return alert("Vous êtes déconnectés!");
        }else if(e.target.id === "new_media"){
          document.getElementById("media_pop_up").classList.toggle("is-active");
        }else if(e.target.id === "photograph_validated"){
          displayMedia(all_medias,1);
        }else if(e.target.id === "photograph_my_media"){
          displayMedia(all_medias);
        }else if(e.target.id === "photograph_pending"){
          displayMedia(all_medias,0);
        }else if(e.target.id === "photograph_rejected"){
          displayMedia(all_medias,-1);
        }else if(e.target.id === "client_media_display_all"){
          displayMediaClient(document.getElementById("data-account-display"),"all");
        }else if(e.target.id === "client_media_display_images"){
          displayMediaClient(document.getElementById("data-account-display"),"images");
        }else if(e.target.id === "client_media_display_audios"){
          displayMediaClient(document.getElementById("data-account-display"),"audios");
        }else if(e.target.id === "client_media_display_videos"){
          displayMediaClient(document.getElementById("data-account-display"),"videos");
        }else if(e.target.id === "client_media_display_articles"){
          displayMediaClient(document.getElementById("data-account-display"),"articles");
        }else if(e.target.id === "publication_articles"){
          alert('publication_articles');
        }else if(e.target.id === "publication_articles_published"){
          alert('publication_articles_published');
        }else if(e.target.id === "publication_articles_rejected"){
          alert('publication_articles_rejected');
        }else{
          e.stopPropagation();
        }
  },{passive:true,capture:false});
}

export {dashboard_handler};
