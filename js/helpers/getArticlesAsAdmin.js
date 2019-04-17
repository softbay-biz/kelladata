import {sendData} from './sendData.js';
import {media_ui_model} from './../modules/media_ui_model.js';

const getArticlesAsAdmin = (order_by)=>{
  const wrapper = document.getElementById("data-account-display");
  wrapper.innerHTML = "";
  const form_articles = {
    requestName:btoa(btoa(btoa("getArticles"))),
    data:{
      modify : "yes"
    }
  };
  let tempLoader = `<div id="media_main_loader" class="media_main_loader"> <figure class="image is-128x128">
            <img src="images/Reload-1s-200px.svg">
        </figure>
  </div>`;
  wrapper.insertAdjacentHTML("afterbegin",tempLoader);
  sendData(form_articles).then((response)=>{
    if(response.error == false){
      wrapper.innerHTML = "";
      for(let i = 0; i < 4; i++){
          wrapper.insertAdjacentHTML("afterbegin",media_ui_model(4,response.message[i]));
      }
    }else{
    }
  }).catch((error)=>{
    //console.log(error);
  });
};

export {getArticlesAsAdmin};
