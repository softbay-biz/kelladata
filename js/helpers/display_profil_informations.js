import {uploadFiles} from './uploadFiles.js';
const display_profil_informations = ()=>{
  const profile_display_image = document.getElementById("profile_display_image");
  const profile_pop_up_cancel = document.getElementById("profile_pop_up_cancel");
  //We make the profile photo clickable
  const source_cover = document.createElement("input");
  source_cover.type = "file";
	source_cover.accept = "images/*";
  profile_display_image.addEventListener('click',()=>{
    source_cover.click();
  },false);
  source_cover.addEventListener("change",()=>{
    uploadFiles(source_cover.files[0],profile_display_image);
  });
  profile_pop_up_update.addEventListener("click",()=>{
    console.log("Hello");
  },false);
  if(localStorage.getItem("photo")){
    profile_display_image.src = "medias/images/original_image/"+localStorage.getItem("photo");
    document.getElementById("profile_informations_name").value = localStorage.getItem("last_name");
    document.getElementById("profile_informations_surname").value = localStorage.getItem("first_name");
    document.getElementById("profile_informations_email").value = localStorage.getItem("email");
  }
};

export {display_profil_informations}
