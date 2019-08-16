import {sendData} from './../../js/helpers/sendData.js';
import {sendMail} from './../../js/modules/sendMail.js';
import {display_members_list} from './../../js/helpers/display_members_list.js';
import {display_articles_request_list} from './../../js/helpers/display_articles_request_list.js';
import {dashboard_handler} from './../helpers/dashboard_handler.js';

const admin_handler = ()=>{
  let table_list = document.getElementById("admin_members_list");
  let form0 = {
    requestName:btoa(btoa(btoa("membersPendingValidation"))),
    data:{
    }
  };
  dashboard_handler(document.getElementById("dashboard"));
  table_list.addEventListener("click",(e)=>{
      if(e.target.id == "admin_action_member"){
        let act = parseInt(e.target.dataset.activation);
        let temp_activation = 0;
        if(act == 0){
          temp_activation = 1;
          //Compte désactivé
          sendMail(e.target.dataset.email,'Votre compte a été activé');
        }else{
          temp_activation = 0;
          //Compte activé
          sendMail(e.target.dataset.email,'Votre compte a été désactivé');
        }
        let form = {
      		requestName:btoa(btoa(btoa("updateDetails"))),
          data:{email:"none",id:e.target.dataset.id,
            '1':["activation",temp_activation]
          }
      	};
        return sendData(form).then((response)=>{
            return sendData(form0).then((response)=>{
              display_members_list(response);
            }).catch((error)=>{
              //console.log(error);
            });
        }).catch((error)=>{
          //console.log(error);
        });
      }else if(e.target.id == "admin_action_article_request"){
        let temp_statut = parseInt(e.target.dataset.statut)==0?1:0;
        let form = {
      		requestName:btoa(btoa(btoa("validateArticleRequestToRead"))),
          data:{id:e.target.dataset.id,
            statut:temp_statut
          }
      	};
        return sendData(form).then((response)=>{
          let formTemp = {
            requestName:btoa(btoa(btoa("articlesPendingRequestToRead"))),
            data:{
            }
          };
            return sendData(formTemp).then((response)=>{
              display_articles_request_list(response);
            }).catch((error)=>{
              //console.log(error);
            });
        }).catch((error)=>{
          //console.log(error);
        });
      }
  },false);
    return sendData(form0).then((response)=>{
      display_members_list(response);
    }).catch((error)=>{
      //console.log(error);
    });
}
export {admin_handler};
