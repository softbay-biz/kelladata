import {uploadFiles} from './uploadFiles.js';
import {sendData} from './sendData.js';

const updateLocalInfos = ()=>{
  localStorage.setItem("last_name",profile_informations_name.value);
  localStorage.setItem("first_name",profile_informations_surname.value);
  localStorage.setItem("email",informations_email.value);
};
const display_profil_informations = ()=>{
  const profile_display_image = document.getElementById("profile_display_image");
  const profile_pop_up_cancel = document.getElementById("profile_pop_up_cancel");
  const profile_informations_name = document.getElementById("profile_informations_name");
  const profile_informations_surname = document.getElementById("profile_informations_surname");
  const profile_informations_email = document.getElementById("profile_informations_email");
  //We make the profile photo clickable
  const source_cover = document.createElement("input");
  source_cover.type = "file";
	source_cover.accept = "images/*";
  source_cover.dataset.sentinelle = 0;
  profile_display_image.addEventListener('click',()=>{
    source_cover.click();
  },false);
  source_cover.addEventListener("change",()=>{
     uploadFiles(source_cover.files[0],profile_display_image,document.getElementById("profile_image"));
     source_cover.dataset.sentinelle = 1;
  });
  profile_pop_up_update.addEventListener("click",()=>{
    let form = {
      requestName:btoa(btoa(btoa("updateDetails"))),
      data:{
        a:["first_name",profile_informations_surname.value],
        b:["last_name",profile_informations_name.value],
        email:profile_informations_email.value,
        id:localStorage.getItem("id")
      }
    };
    if(source_cover.dataset.sentinelle == 1){
      form.data.c = ["image",document.getElementById("profile_image").src];
    }
    let updateDetails_promise = sendData(form);
     updateDetails_promise.then((response)=>{
       source_cover.dataset.sentinelle = 0;
       console.log(response);
       if(response.error == false){
         updateLocalInfos();
         alert("Profile mis à jour avec succès!");
       }else{
         alert("Probleme lors de la mise à jour du profil!");
         //Here we also update profile details
       }
     }).catch((error)=>{
       //console.log(error);
     });
  },false);
  if(localStorage.getItem("photo")){
    profile_display_image.src = "medias/images/original_image/"+localStorage.getItem("photo");
  }
  profile_informations_name.value = localStorage.getItem("last_name");
  profile_informations_surname.value = localStorage.getItem("first_name");
  profile_informations_email.value = localStorage.getItem("email");
};

export {display_profil_informations}
