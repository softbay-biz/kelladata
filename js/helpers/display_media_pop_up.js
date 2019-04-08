const display_media_pop_up = (link)=>{
  document.getElementById("wrapper-modal").classList.add("is-active");
  document.getElementById("wrapper-modal-image").src = "medias/images/original_image/"+link;
  return document.getElementById("wrapper-modal-image-close").addEventListener("click",()=>{
    document.getElementById("wrapper-modal").classList.remove("is-active");
  });
};

export {display_media_pop_up};
