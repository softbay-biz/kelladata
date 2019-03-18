import all_medias from './../helpers/all_medias.js';
import articles_list from './../helpers/articles_list.js';
import {media_ui_model} from './../modules/media_ui_model.js';
import {display_media_pop_up} from './../helpers/display_media_pop_up.js';

const displayMedia = (order_by)=>{
  let wrapper = document.getElementById("data-account-display");
  wrapper.innerHTML = "";
  if(order_by === "all"){
  		for (let i = 0; i < all_medias.length; i++){
  				requestAnimationFrame(()=>{
  					document.getElementById("data-account-display").insertAdjacentHTML("afterbegin",media_ui_model(all_medias[i].type,all_medias[i]));
  				});
  		}
      for (let i = 0; i < articles_list.length; i++){
  				requestAnimationFrame(()=>{
  					document.getElementById("data-account-display").insertAdjacentHTML("afterbegin",media_ui_model(4,articles_list[i]));
  				});
  		}
    }else if(order_by === "images" || order_by === "image"){
      for (let i = 0; i < all_medias.length; i++){
        if(all_medias[i].type == 1){
          requestAnimationFrame(()=>{
            document.getElementById("data-account-display").insertAdjacentHTML("afterbegin",media_ui_model(all_medias[i].type,all_medias[i]));
          });
        }
  		}
    }else if(order_by === "videos" || order_by === "video"){
      for (let i = 0; i < all_medias.length; i++){
        if(all_medias[i].type == 2){
          requestAnimationFrame(()=>{
            document.getElementById("data-account-display").insertAdjacentHTML("afterbegin",media_ui_model(all_medias[i].type,all_medias[i],display_media_pop_up));
          });
        }
  		}
    }else if(order_by === "audios" || order_by === "audios"){
      for (let i = 0; i < all_medias.length; i++){
        if(all_medias[i].type == 3){
          requestAnimationFrame(()=>{
            document.getElementById("data-account-display").insertAdjacentHTML("afterbegin",media_ui_model(all_medias[i].type,all_medias[i],display_media_pop_up));
          });
        }
  		}
    }else if(order_by === "articles"){
      for (let i = 0; i < articles_list.length; i++){
  				requestAnimationFrame(()=>{
  					document.getElementById("data-account-display").insertAdjacentHTML("afterbegin",media_ui_model(4,articles_list[i],display_media_pop_up));
  				});
  		}
    }else{
      let words = order_by.split(" ");
      let content = new Array();
      let content_media = new Array();
      for (let i = 0; i < articles_list.length; i++){
        content = articles_list[i].titre.split(" ");
        content = content.map((x)=> x.toLowerCase());
        words = words.map((x)=> x.toLowerCase());
        for(let j = 0; j < words.length; j++){
          if(content.includes(words[j])){
            requestAnimationFrame(()=>{
    					document.getElementById("data-account-display").insertAdjacentHTML("afterbegin",media_ui_model(4,articles_list[i],display_media_pop_up));
    				});
            break;
          }
        }
  		}
      for(let i = 0; i < all_medias.length; i++){
        content = all_medias[i].name.split(" ");
        content = content.map((x)=> x.toLowerCase());
        words = words.map((x)=> x.toLowerCase());
        for(let j = 0; j < words.length; j++){
          if(content.includes(words[j])){
            requestAnimationFrame(()=>{
              document.getElementById("data-account-display").insertAdjacentHTML("afterbegin",media_ui_model(all_medias[i].type,all_medias[i],display_media_pop_up));
            });
            break;
          }
        }
      }
    }
    wrapper.addEventListener("click",(e)=>{
        if(e.target != e.currentTarget){
          display_media_pop_up(e.target.dataset.lightbox);
        }
      },{passive:true,capture:true});

};
const landing_page_search_result_handler = (order_by)=>{
  while (all_medias.length === 0 && articles_list === 0) {
    //console.log('Media not ready');
  }
  displayMedia(order_by);
};

export {landing_page_search_result_handler};
