import tab_temp_survey from './../modules/temp_survey.js';
import survey from './../helpers/form_modele.js';
import {forms_handler} from './../modules/forms_handler.js';
import states from './../states/states.js';
import form1 from './../modules/forms/form1.js';
import profil from './../helpers/profil.js';
import {callHomepage} from './../helpers/callHomepage.js';

  const navigation = ()=>{ document.getElementById("navigation").addEventListener('click',(e)=>{
  const pagesNumber = 16;
  let actualPage = document.getElementById("navigation").getElementsByClassName('is-current')[0].dataset.page;
  const pagesArray = document.getElementsByClassName('pagination-link');
  const survey = document.getElementById("content-forms-elements");
  let current_form = document.getElementById(actualPage);
  document.getElementById("menu").addEventListener("change",()=>{
    if(e.target.value === "Deconnexion"){
      localStorage.setItem("connected","false");
      callHomepage();
      return alert("Vous êtes déconnectés!");
    }else if(e.target.value === "Formulaires"){
      document.getElementById("content-forms-elements").innerHTML = form1;
      forms_handler();
    }else if(e.target.value === "Profil"){
      document.getElementById("content-forms-elements").innerHTML = profil;
      forms_handler();
    }
  },false);

  if(e.target.id === "next"){
    if(actualPage<pagesNumber && states.contrainte_page === true){
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
    document.getElementById("content-forms-elements").innerHTML = "";
  }else if(e.target.id === "close0"){
    const adapter = new FileSync('db.json')
    // With lowdb/FileAsync
    db.read()
      .then(() => console.log('Content of my_project/db.json is loaded'));
    console.log(adapter);
  }
},false);};

function push_survey_to_temp(s){
  tab_temp_survey.push(s);
}

export {navigation};
