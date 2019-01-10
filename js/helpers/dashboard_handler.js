import {callHomepage} from './callHomepage.js';
import all_medias from './all_medias.js';
import {media_ui_model} from './../modules/media_ui_model.js';

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
                console.log("fdvx");
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
        }else{
          e.stopPropagation();
        }
  },{passive:true,capture:false});
}

export {dashboard_handler};
