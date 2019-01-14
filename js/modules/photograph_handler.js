import {sendData} from './../../js/helpers/sendData.js';
import all_medias from './../../js/helpers/all_medias.js';
import {dashboard_handler} from './../helpers/dashboard_handler.js';
import {media_ui_model} from './../modules/media_ui_model.js';

const form = {
	requestName:btoa(btoa(btoa("add_media"))),
	data:{
		name:"",
		type:0,
		description:"",
		link_or_blob:"",
		owner:localStorage.getItem("id")
	}
};

const getMedias = ()=>{
	let form0 = {
		requestName:btoa(btoa(btoa("getMedias"))),
		data:{
			owner:localStorage.getItem("id"),
		}
	};
	return sendData(form0).then((response)=>{
		if(response.error == false){
			document.getElementById("data-account-display").innerHTML = "";
			displayMedia(response.message);
		}else{
		}
	}).catch((error)=>{
		//console.log(error);
	});
};
const displayMedia = (data)=>{
	if(all_medias.length === 0){
		for (let i = 0; i < data.length; i++){
			all_medias.push(data[i]);
			if(data[i].owner == localStorage.getItem("id")){
				requestAnimationFrame(()=>{
					document.getElementById("data-account-display").insertAdjacentHTML("afterbegin",media_ui_model(data[i].type,data[i]));
				});
			}
		}
	}else{
		for (let i = 0; i < all_medias.length; i++){
			if(all_medias[i].owner == localStorage.getItem("id")){
				requestAnimationFrame(()=>{
					document.getElementById("data-account-display").insertAdjacentHTML("afterbegin",media_ui_model(all_medias[i].type,all_medias[i]));
				});
			}
		}
	}
};
const resetForm = ()=>{
	document.getElementById("media_name").value = "";
	document.getElementById("media_description").value = "";
	document.getElementById("upload_file").src = "";
};
const getMyFile = (files)=>{
	 	let elt = "";
		let reader = new FileReader();
    	reader.addEventListener("load", function(){
				if(files.type.includes("image")){
					document.getElementById("media_image_preview").src = this.result;
					form.data.link_or_blob = this.result;
					form.data.type = 1;
				}else if(files.type.includes("audio")){
					document.getElementById("media_image_preview").src = "";
					form.data.link_or_blob = this.result;
					form.data.type = 3;
				}else if(files.type.includes("video")){
					form.data.link_or_blob = this.result;
					console.log(this.result);
					form.data.type = 2;
				}
    	},false);
    	reader.readAsDataURL(files);
    };
const photograph_handler = ()=>{
	//We display medias
	getMedias();
	//
  let pop_up_content = document.getElementById("media_pop_up");
  let file = document.getElementById("upload_file");
  dashboard_handler(document.getElementById("dashboard"));
  file.addEventListener("change",()=>{
		document.getElementById("media_name").innerHTML = file.files[0].name;
			getMyFile(file.files[0]);
  },false);
  pop_up_content.addEventListener("click",(e)=>{
		let name = document.getElementById("media_name").value;
		let description = document.getElementById("media_description").value;
    if(e.target.id == "close_pop_up_cross" || e.target.id == "close_pop_up_button"){
      pop_up_content.classList.remove("is-active");
			resetForm();
    }else if(e.target.id == "add_media" && name != "" && description != "" && form.data.link_or_blob != "" &&
							document.getElementById("add_media").classList.value.indexOf("rfdd") == -1){
			form.data.name = name;
			form.data.description = description;
			document.getElementById("add_media").classList.add("is-loading");
          return sendData(form).then((response)=>{
						document.getElementById("add_media").classList.remove("is-loading");
						if(response.error == false){
							resetForm();
							alert("New media added!");
							pop_up_content.classList.remove("is-active");
							document.getElementById("data-account-display").insertAdjacentHTML('afterbegin',medias_ui_model(form.data.type,form.data));
							all_medias.push(form.data);
						}else{
							alert("Erreur from server : media not saved!")
						}
          }).catch((error)=>{
            //console.log(error);
          });
    }else if(e.target.id == "add_media" && (name == "" || description == "" || form.data.link_or_blob != "")){
			alert("All fileds should not be empty!");
		}
  },false);


}
export {photograph_handler};
