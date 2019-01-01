import {sendData} from './../../js/helpers/sendData.js';
import {dashboard_handler} from './../helpers/dashboard_handler.js';
import {media_ui_model} from './../modules/media_ui_model.js';

const form = {
	requestName:btoa(btoa(btoa("add_media"))),
	data:{
		name:"",
		type:0,
		description:"",
		owner:localStorage.getItem("id"),
		link_or_blob:""
	}
};
const getMyFile = (files)=>{
	 	let elt = "";
		let reader = new FileReader();
    	reader.addEventListener("load", function(){
				if(files.type.includes("image")){
					document.getElementById("media_image_preview").src = this.result;
					form.link_or_blob = this.result;
				}else if(files.type.includes("audio")){
					document.getElementById("media_image_preview").src = this.result;
					form.link_or_blob = this.result;
				}else if(files.type.includes("video")){
					//
				}
    	},false);
    	reader.readAsDataURL(files);
    };
const photograph_handler = ()=>{
  let pop_up_content = document.getElementById("media_pop_up");
  let name = document.getElementById("media_name").value;
  let type = document.getElementById("media_type").options[document.getElementById("media_type").selectedIndex].dataset.id_type;
  let description = document.getElementById("media_description").value;
  let file = document.getElementById("upload_file");
  dashboard_handler(document.getElementById("dashboard"));
  file.addEventListener("change",()=>{
		document.getElementById("media_name").innerHTML = file.files[0].name;
			getMyFile(file.files[0]);
  },false);
  pop_up_content.addEventListener("click",(e)=>{
    if(e.target.id == "close_pop_up_cross" || e.target.id == "close_pop_up_button"){
      pop_up_content.classList.remove("is-active");
    }else if(e.target.id == "add_media"){
			form.name = name;
			form.type = type;
			form.description = description;
      console.log(form);
          return sendData(form).then((response)=>{
            console.log(response);
          }).catch((error)=>{
            //console.log(error);
          });
    }
  },false);


}
export {photograph_handler};
