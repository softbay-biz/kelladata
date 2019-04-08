const display_profil_informations = ()=>{
  const profile_display_image = document.getElementById("profile_display_image");
  if(localStorage.getItem("photo")){
    profile_display_image.src = "medias/images/original_image/"+localStorage.getItem("photo");
    console.log(profile_display_image.src);
  }
};

export {display_profil_informations}
