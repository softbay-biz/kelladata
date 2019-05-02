import all_medias from './../helpers/all_medias.js';
import articles_list from './../helpers/articles_list.js';
import {media_ui_model} from './../modules/media_ui_model.js';

const displayMediaClient = (contener,order_by)=>{
  contener.innerHTML = "";
  if(order_by === "all"){
  		for (let i = 0; i < all_medias.length; i++){
  				requestAnimationFrame(()=>{
  					contener.insertAdjacentHTML("afterbegin",media_ui_model(all_medias[i].type,all_medias[i]));
  				});
  		}
      for (let i = 0; i < articles_list.length; i++){
  				requestAnimationFrame(()=>{
  					contener.insertAdjacentHTML("afterbegin",media_ui_model(4,articles_list[i]));
  				});
  		}
    }else if(order_by === "images" || order_by === "image"){
      for (let i = 0; i < all_medias.length; i++){
        if(all_medias[i].type == 1){
          requestAnimationFrame(()=>{
            contener.insertAdjacentHTML("afterbegin",media_ui_model(all_medias[i].type,all_medias[i]));
          });
        }
  		}
    }else if(order_by === "videos" || order_by === "video"){
      for (let i = 0; i < all_medias.length; i++){
        if(all_medias[i].type == 2){
          requestAnimationFrame(()=>{
            contener.insertAdjacentHTML("afterbegin",media_ui_model(all_medias[i].type,all_medias[i]));
          });
        }
  		}
    }else if(order_by === "audios" || order_by === "audios"){
      for (let i = 0; i < all_medias.length; i++){
        if(all_medias[i].type == 3){
          requestAnimationFrame(()=>{
            contener.insertAdjacentHTML("afterbegin",media_ui_model(all_medias[i].type,all_medias[i]));
          });
        }
  		}
    }else if(order_by === "articles"){
      for (let i = 0; i < articles_list.length; i++){
  				requestAnimationFrame(()=>{
  					contener.insertAdjacentHTML("afterbegin",media_ui_model(4,articles_list[i]));
  				});
  		}
    }else if(order_by === "articles_open"){
      for (let i = 0; i < articles_list.length; i++){
  				requestAnimationFrame(()=>{
  					contener.insertAdjacentHTML("afterbegin",media_ui_model(4,articles_list[i]));
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
    					contener.insertAdjacentHTML("afterbegin",media_ui_model(4,articles_list[i]));
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
              contener.insertAdjacentHTML("afterbegin",media_ui_model(all_medias[i].type,all_medias[i]));
            });
            break;
          }
        }
      }
    }
};

export {displayMediaClient};
