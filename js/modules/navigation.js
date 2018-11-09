document.getElementById("navigation").addEventListener('click',(e)=>{
  const pagesNumber = 11;
  let actualPage = document.getElementById("navigation").getElementsByClassName('is-current')[0].dataset.page;
  const pagesArray = document.getElementsByClassName('pagination-link');
  if(e.target.id === "next"){
    if(actualPage<pagesNumber){
      pagesArray[actualPage-1].classList.remove("is-current");
      pagesArray[actualPage].classList.add("is-current");
    }
  }else if(e.target.id === "prev"){
    if(actualPage > 1){
      pagesArray[actualPage-1].classList.remove("is-current");
      pagesArray[actualPage-2].classList.add("is-current");
    }
  }
},false);
