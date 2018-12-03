import survey from './../helpers/form_modele.js';
import {graph} from './../modules/graph.js';

document.addEventListener("DOMContentLoaded",()=>{
  let variable_list = document.getElementById("variable_list");
  let section_list = document.getElementById("section_list");
  let ordonnees = [
    ["Arrondissement","Village"],
    ["Homme(s)","Femme(s)","Père","Mère","Fils/Fille","Neveu/Nice","Petits fils/fille","Conjointe",
    "Célibataire","Marié mono","Marié poly","Veuf/Veuve","Divorcé","Séparé","Union libre"],
    ["Parle Bassa'a","Parle Français","Parle Anglais","Autre langue","Primaire","Secondaire","Université","Formation",
                "NSP","Ont fréquentés","Fréquentent actuellement","Formation professionnelle/technique au secondaire","Formation générale",
                "Formation pour enseignant : ENIET, ENIEG","Université/ Formation professionnelle universitaire","Manque de performance scolaire",
              "Etat de santé"],
              ["A un enfant d’un an","A eu des soins prénatals avant l’accouchement","Handicap Physique","Handicap Mental",
            "Maladies/blessures comme obstacle au travail et à l’école durant les 15 derniers jours","D5","D6","D7"]
  ];
  document.getElementById("execute").addEventListener("click",()=>{
    let section = section_list.options[section_list.selectedIndex].id;
    requestAnimationFrame(()=>{
        document.getElementById("diplay_graph").innerHTML = "";
        addVariablesToList(section,ordonnees,variable_list);
    })
  });
  section_list.addEventListener("change",()=>{
    switch (section_list.options[section_list.selectedIndex].id) {
      case "section_a":
            addOptionsToSelect(variable_list,ordonnees[0]);
            break
      case "section_b":
            addOptionsToSelect(variable_list,ordonnees[1]);
        break;
      case "section_c":
              addOptionsToSelect(variable_list,ordonnees[2]);
        break;
      default:

    }
  });
},false);
function addVariablesToList(section,ordonnees,variable_list){
  if(section === "section_a"){
    if(variable_list.options[variable_list.selectedIndex].id != 0){
      //alert(variable_list.options[variable_list.selectedIndex].id);
    }else{
      let tabVal = [5,6];
      addGraphs("graph_a",tabVal,ordonnees[0],"bar","");
    }
  }else if(section === "section_b"){
        let tabVal = [5,6,62,14,56,2,3,9,7,69,36,21,45,23,25];
        addGraphs("graph_b",tabVal,ordonnees[1],"bar","");
  }else if(section === "section_c"){
      let tabVal = [5,6,62,14,56,2,3,9,7,69,36,21,45,23,25,0,5,3];
        addTable("graph_c",tabVal,ordonnees[2],"bar","");
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
function addGraphs(id,x,y,type,label,single=false){
  let container = document.getElementById("diplay_graph");
  let canvas = `<canvas class="small-chart" id="graph${id}"></canvas>`;
  let identifier = "";
  requestAnimationFrame(()=>{
    container.insertAdjacentHTML("beforeend",canvas);
    identifier = "graph"+id;
    chart(identifier,type,x,y,label);
  });
}
function addTable(id,x,y,type,label,single=false){
  let container = document.getElementById("diplay_graph");
  let table = `<table class="table">
  <thead>
      <tr>
      <th><abbr title="Position">Variables</abbr></th>
      <th><abbr title="Played">Effectif</abbr></th>
      <th><abbr title="Won">Pourcentage</abbr></th>
      </tr>
      </thead>
      <tfoot>
      </tfoot>
        </thead><tbody>
  `;
  for(let i=0;i<y.length;i++){
      table += `
    <tr>
      <td>${y[i]}</td>
      <td>38</td>
      <td>23</td>
    </tr>`;
  }
  table += `</tbody></table>`;
  container.insertAdjacentHTML("beforeend",table);
}
function chart(identifier,type,x,y,label){
  let ctx = document.getElementById(identifier).getContext('2d');
        return new Chart(ctx, {
    type: type,
    data: {
        labels: y,
        datasets: [{
            label: label,
            data: x,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});
}
function addOptionsToSelect(select,tab){
  select.options.length = 0;
  let option0 = document.createElement("option");
  option0.text = " ";
  option0.id = 0;
  select.add(option0);
  let taille = tab.length;
  for(let i=0;i<taille;i++){
    let option = document.createElement("option");
    option.text = tab[i];
    option.id = tab[i];
    select.add(option);
  }
}
