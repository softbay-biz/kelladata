const display_article_pop_up = (data)=>{
  document.getElementById("article_pop_up").classList.add("is-active");
  requestAnimationFrame(()=>{
    document.getElementById("requestArticleDisplayMessage").innerHTML = data;
  });
  return document.getElementById("article_pop_up").addEventListener("click",(e)=>{
    if((e.target != e.currentTarget) && (e.target.id == "wrapper-modal-article-close" || e.target.id == "wrapper-modal-article-close-button")){

    }
    document.getElementById("article_pop_up").classList.remove("is-active");
  });
};

export {display_article_pop_up};
