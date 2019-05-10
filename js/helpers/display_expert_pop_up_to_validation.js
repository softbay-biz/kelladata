const display_expert_pop_up_to_validation = ()=>{
  document.getElementById("expert-wrapper-modal").classList.add("is-active");
  return document.getElementById("expert-wrapper-modal-image-close").addEventListener("click",()=>{
    document.getElementById("expert-wrapper-modal").classList.remove("is-active");
  });
};

export {display_expert_pop_up_to_validation};
