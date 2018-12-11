import tab_temp_survey from './../modules/temp_survey.js';
import survey from './../helpers/form_modele.js';

document.getElementById("navigation").addEventListener('click',(e)=>{
  const pagesNumber = 14;
  let actualPage = document.getElementById("navigation").getElementsByClassName('is-current')[0].dataset.page;
  const pagesArray = document.getElementsByClassName('pagination-link');
  const survey = document.getElementById("content-forms-elements");
  let current_form = document.getElementById(actualPage);

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
  }else if(e.target.id === "close"){
    const adapter = new FileSync('db.json')
    // With lowdb/FileAsync
    db.read()
      .then(() => console.log('Content of my_project/db.json is loaded'));
    console.log(adapter);
  }
},false);

function push_survey_to_temp(s){
  tab_temp_survey.push(s);
}
