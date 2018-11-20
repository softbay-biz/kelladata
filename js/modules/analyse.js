import survey from './../helpers/form_modele.js';

document.addEventListener("DOMContentLoaded",()=>{
  document.getElementById("execute").addEventListener("click",()=>{
    let variable_list = document.getElementById("variable_list");
    let section_list = document.getElementById("section_list");
    let section = section_list.options[section_list.selectedIndex].id;
    addVariablesToList(section);
  });
},false);
function addVariablesToList(section){
  if(section === "section_a"){
    console.log(Object.keys(survey.section_a));
  }else if(section === "section_b"){
    console.log(Object.keys(survey.section_b));
  }else if(section === "section_c"){
    console.log(Object.keys(survey.section_c));
  }
  else if(section === "section_d"){
    console.log(Object.keys(survey.section_d));
  }
  else if(section === "section_e"){
    console.log(Object.keys(survey.section_e));
  }
  else if(section === "section_f"){
    console.log(Object.keys(survey.section_f));
  }
  else if(section === "section_g"){
    console.log(Object.keys(survey.section_g));
  }
  else if(section === "section_h"){
    console.log(Object.keys(survey.section_h));
  }else if(section === "section_i"){
    console.log(Object.keys(survey.section_i));
  }
  else if(section === "section_j"){
    console.log(Object.keys(survey.section_j));
  }
  else if(section === "section_k"){
    console.log(Object.keys(survey.section_k));
  }else if(section === "section_l"){
    console.log(Object.keys(survey.section_l));
  }else if(section === "section_o"){
    console.log(Object.keys(survey.section_o));
  }
}
