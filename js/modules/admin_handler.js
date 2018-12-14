import {sendData} from './../../js/helpers/sendData.js';
import {display_members_list} from './../../js/helpers/display_members_list.js';
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
        let temp_activation = parseInt(e.target.dataset.activation)==0?1:0;
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
      }
  },false);
    return sendData(form0).then((response)=>{
      display_members_list(response);
    }).catch((error)=>{
      //console.log(error);
    });
}
export {admin_handler};
