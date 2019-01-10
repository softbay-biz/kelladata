import states from './../states/states.js';
import article_box_model from './../helpers/article_box_model.js';

const form = {
  requestName:btoa(btoa(btoa("getArticles"))),
  data:{
  }
};
const home_handler = ()=>{
  //Here we get some
    sendData(form_articles).then((response)=>{
      if(response.error == false){
      }else{
      }
    }).catch((error)=>{
      //console.log(error);
    });
};

export {home_handler};
