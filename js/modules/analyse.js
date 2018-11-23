import survey from './../helpers/form_modele.js';
import {graph} from './../modules/graph.js';

document.addEventListener("DOMContentLoaded",()=>{
  return document.getElementById("execute").addEventListener("click",()=>{
    let variable_list = document.getElementById("variable_list");
    let section_list = document.getElementById("section_list");
    let section = section_list.options[section_list.selectedIndex].id;
    requestAnimationFrame(()=>{
        //document.getElementById("myChart").innerHTML = "";
        addVariablesToList(section);
    })
  });
},false);
function addVariablesToList(section){
 let ctx = document.getElementById("myChart").getContext('2d');
  if(section === "section_a"){
    let tabElt = ["Arrondissement","Village"];
    let tabVal = [5,6];
    return graph(ctx,tabElt,tabVal,"polarArea");
  }else if(section === "section_b"){
    let tabElt = ["Homme(s)","Femme(s)","Père","Mère","Fils/Fille","Neveu/Nice","Petits fils/fille","Conjointe",
  "Célibataire","Marié mono","Marié poly","Veuf/Veuve","Divorcé","Séparé","Union libre"];
  let tabVal = [5,6,62,14,56,2,3,9,7,69,36,21,45,23,25];
    return graph(ctx,tabElt,tabVal,"radar");
  }else if(section === "section_c"){
    let tabElt = ["Parle Bassa'a","Parle Français","Parle Anglais","Autre langue","Primaire","Secondaire","Université","Formation",
  "NSP","Ont fréquentés","Fréquentent actuellement","Formation professionnelle/technique au secondaire","Formation générale",
  "Formation pour enseignant : ENIET, ENIEG","Université/ Formation professionnelle universitaire","Manque de performance scolaire",
"Etat de santé"];
  let tabVal = [5,6,62,14,56,2,3,9,7,69,36,21,45,23,25,0,5,3];
    return graph(ctx,tabElt,tabVal,"radar");
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
