document.getElementById("navigation").addEventListener('click',(e)=>{

  const pagesNumber = 14;
  let actualPage = document.getElementById("navigation").getElementsByClassName('is-current')[0].dataset.page;
  const pagesArray = document.getElementsByClassName('pagination-link');
  const survey = document.getElementById("content-forms-elements");
  let current_form = document.getElementById(actualPage);
  console.log(current_form);
  if(e.target.id === "next"){
    if(actualPage<pagesNumber){
      pagesArray[actualPage-1].classList.remove("is-current");
      pagesArray[actualPage].classList.add("is-current");
      current_form.style.display = "none";
      document.getElementById((parseInt(actualPage)+1)).style.display = "block";
    }
  }else if(e.target.id === "prev"){
    if(actualPage > 1){
      pagesArray[actualPage-1].classList.remove("is-current");
      pagesArray[actualPage-2].classList.add("is-current");
      current_form.style.display = "none";
      document.getElementById((parseInt(actualPage)-1)).style.display = "block";
    }
  }
},false);
