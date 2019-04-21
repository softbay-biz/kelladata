const display_article_pop_up = (data)=>{
  document.getElementById("article_pop_up").classList.add("is-active");
  return document.getElementById("wrapper-modal-article-close").addEventListener("click",()=>{
    document.getElementById("wrapper-modal-article").classList.remove("is-active");
  });
};

export {display_article_pop_up};
