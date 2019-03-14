import {sendData} from './../helpers/sendData.js';
import articles_list from './../helpers/articles_list.js';
import {media_ui_model} from './media_ui_model.js';
const form_articles = {
  requestName:btoa(btoa(btoa("getArticles"))),
  data:{
  }
};
const form_medias = {
  requestName:btoa(btoa(btoa("getMedias"))),
  data:{
  }
};
const root_data = ()=>{
  //Here we get some
		sendData(form_articles).then((response)=>{console.log(response);
			if(response.error == false){
				if(articles_list.length === 0){
					for(let i = 0; i < response.message.length; i++){
						articles_list.push(response.message[i]);
					}
				}
        preview_home_article.innerHTML = "";
				for(let i = 0; i < 4; i++){
						preview_home_article.insertAdjacentHTML("afterbegin",media_ui_model(4,articles_list[i]));
				}
			}else{
			}
		}).catch((error)=>{
			//console.log(error);
		});
		sendData(form_medias).then((response)=>{
			if(response.error == false){
				if(all_medias.length === 0){
					for(let i = 0; i < response.message.length; i++){
						all_medias.push(response.message[i]);
					}
				}
			}else{
			}
		}).catch((error)=>{
			//console.log(error);
		});
};

export {root_data};
