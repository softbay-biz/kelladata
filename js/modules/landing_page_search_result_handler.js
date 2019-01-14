import all_medias from './../helpers/all_medias.js';
import articles_list from './../helpers/articles_list.js';
import {media_ui_model} from './../modules/media_ui_model.js';

const displayMedia = (order_by)=>{
  document.getElementById("data-account-display").innerHTML = "";
  if(order_by === "all"){
  		for (let i = 0; i < all_medias.length; i++){
  				requestAnimationFrame(()=>{
  					document.getElementById("data-account-display").insertAdjacentHTML("afterbegin",media_ui_model(all_medias[i].type,all_medias[i]));
  				});
  		}
      for (let i = 0; i < articles_list.length; i++){console.log(articles_list);
  				requestAnimationFrame(()=>{
  					document.getElementById("data-account-display").insertAdjacentHTML("afterbegin",media_ui_model(4,articles_list[i]));
  				});
  		}
    }else if(order_by === "images"){
      for (let i = 0; i < all_medias.length; i++){
        if(all_medias[i].type == 1){
          requestAnimationFrame(()=>{
            document.getElementById("data-account-display").insertAdjacentHTML("afterbegin",media_ui_model(all_medias[i].type,all_medias[i]));
          });
        }
  		}
    }else if(order_by === "videos"){
      for (let i = 0; i < all_medias.length; i++){
        if(all_medias[i].type == 2){
          requestAnimationFrame(()=>{
            document.getElementById("data-account-display").insertAdjacentHTML("afterbegin",media_ui_model(all_medias[i].type,all_medias[i]));
          });
        }
  		}
    }else if(order_by === "audios"){
      for (let i = 0; i < all_medias.length; i++){
        if(all_medias[i].type == 3){
          requestAnimationFrame(()=>{
            document.getElementById("data-account-display").insertAdjacentHTML("afterbegin",media_ui_model(all_medias[i].type,all_medias[i]));
          });
        }
  		}
    }else if(order_by === "articles"){
      for (let i = 0; i < articles_list.length; i++){
  				requestAnimationFrame(()=>{
  					document.getElementById("data-account-display").insertAdjacentHTML("afterbegin",media_ui_model(4,articles_list[i]));
  				});
  		}
    }else{
      let words = order_by.split(" ");
      let content = new Array();
      for (let i = 0; i < articles_list.length; i++){
        content = articles_list[i].titre.split(" ");
  				requestAnimationFrame(()=>{
  					document.getElementById("data-account-display").insertAdjacentHTML("afterbegin",media_ui_model(4,articles_list[i]));
  				});
  		}
    }
};
const landing_page_search_result_handler = (order_by)=>{
  while (all_medias.length === 0 && articles_list === 0) {
    //console.log('Media not ready');
  }
  displayMedia(order_by);
};

export {landing_page_search_result_handler};
