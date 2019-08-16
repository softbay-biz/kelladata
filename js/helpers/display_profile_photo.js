const display_profile_photo = (id)=>{
  //We take proile photo from server
  if(localStorage.getItem("photo")){
    requestAnimationFrame(()=>{
      document.getElementById("profile_image").src = "medias/images/image_800px/"+localStorage.getItem("photo");
      document.getElementById("profile_image").style.maxHeight = "130px";
    });
  }
};

export{display_profile_photo};
