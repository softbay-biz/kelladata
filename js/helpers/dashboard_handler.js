import {callHomepage} from './callHomepage.js';
import all_medias from './../helpers/all_medias.js';
import {display_profil_informations} from './../helpers/display_profil_informations.js';
import articles_list from './../helpers/articles_list.js';
import {media_ui_model} from './../modules/media_ui_model.js';
import {displayMediaClient} from './../modules/displayMediaClient.js';
import {root_data} from './../modules/root.js';
import {sendData} from './sendData.js';
import {uploadFiles} from './uploadFiles.js';
import {getArticlesAsAdmin} from './getArticlesAsAdmin.js';
import {display_members_list} from './../helpers/display_members_list.js';
import {display_articles_request_list} from './../helpers/display_articles_request_list.js';

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
  const profile_pop_up = document.getElementById("profile_pop_up");
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
        }else if(e.target.id === "expert_images"){
          displayMediaClient(document.getElementById("data-account-display"),"images");
        }else if(e.target.id === "expert_videos"){
          displayMediaClient(document.getElementById("data-account-display"),"videos");
        }else if(e.target.id === "expert_audios"){
          displayMediaClient(document.getElementById("data-account-display"),"audios");
        }else if(e.target.id === "expert_surveys"){
          alert("expert_surveys");
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
          getArticlesAsAdmin("all");
        }else if(e.target.id === "publication_articles_published"){
          getArticlesAsAdmin("publish");
        }else if(e.target.id === "publication_articles_rejected"){
          getArticlesAsAdmin("rejected");
        }else if(e.target.id === "manage_members"){
            let form0 = {
            requestName:btoa(btoa(btoa("membersPendingValidation"))),
            data:{
            }
          };
          sendData(form0).then((response)=>{
            display_members_list(response);
          }).catch((error)=>{
            //console.log(error);
          });
        }else if(e.target.id === "manage_articles_request"){
          let form0 = {
          requestName:btoa(btoa(btoa("articlesPendingRequestToRead"))),
          data:{
          }
        };
        sendData(form0).then((response)=>{
          display_articles_request_list(response);
        }).catch((error)=>{
          //console.log(error);
        });
        }else if(e.target.id === "profile_image"){
          display_profil_informations();
          requestAnimationFrame(()=>{
            profile_pop_up.classList.add("is-active");
          });
        }else{
          e.stopPropagation();
        }
  },{passive:true,capture:false});
  profile_pop_up.addEventListener("click",(e)=>{
    if(e.target.id === "profile_pop_up_close" || e.target.id === "profile_pop_up_cancel"){
      requestAnimationFrame(()=>{
        profile_pop_up.classList.remove("is-active");
      });
    }
    else if(e.target.id === "profile_pop_up_update"){
      requestAnimationFrame(()=>{
        profile_pop_up.classList.remove("is-active");
      });
    }
  },false);
}

export {dashboard_handler};
