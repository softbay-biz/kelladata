import {callHomepage} from './callHomepage.js';

const dashboard_handler = (dashboard)=>{
  //Event on the dashboard
  dashboard.addEventListener('click',(e)=>{
        if(e.target.id === "deconnexion"){
          localStorage.setItem("connected","false");
          callHomepage();
          return alert("Vous êtes déconnectés!");
        }
  },{passive:true,capture:false});
}

export {dashboard_handler};
