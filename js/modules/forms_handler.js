let survey = {
  section_a:{
    a1:"DateAndTime",
    a2:"value",
    a3:"value",
    a4:"value",
    a5:"value",
    a6:"value",
    a7:"value",
    a8:"value"
  }
};

document.getElementById("next").addEventListener("click",()=>{
  let actualPage = document.getElementById("navigation").getElementsByClassName('is-current')[0].dataset.page;
  let stay_or_leave_page = 0;//1 leave 0 stay
  if(actualPage == 1){
    let date = document.getElementById("date").value;
    let time = document.getElementById("time").value;
    let a2 = document.getElementById("a2").value;
    let a3 = document.getElementById("a3").value;
    let a4 = document.getElementById("a4").value;
    let a5 = document.getElementById("a5").value;
    let a6 = document.getElementById("a6").value;
    let a7 = document.getElementById("a7").value;
    let a8 = document.getElementById("a8").value;
        if(date === "" || time === "" || a2 === "" || a3 === "" || a4 === "" || a5 === ""
      || a6 === "" || a7 === "" || a8 === ""){
          alert("Veuillez remplir tout les champs");
          stay_or_leave_page = 0;
        }else{
          survey.section_a.a1 = date+"/"+time;
          survey.section_a.a2 = a2;
          survey.section_a.a3 = a3;
          survey.section_a.a4 = a4;
          survey.section_a.a5 = a5;
          survey.section_a.a6 = a6;
          survey.section_a.a7 = a7;
          survey.section_a.a8 = a8;
          stay_or_leave_page = 1;
        }
  }else if(actualPage == 2){
    if(b1 === "" || b2 === "" || b3 === "" || b4 === ""
  || b5 === "" || b6 === "" || b7 === ""){
    stay_or_leave_page = 0;
    alert("Veuillez remplir tout les champs");
    }else{
      stay_or_leave_page = 1;
    }
  }
},false);
//Add people on the family list
document.getElementById("b_submit").addEventListener('click',()=>{
  let b1 = document.getElementById("b1").value;
  let b2 = document.getElementById("b2").value;
  let b3 = document.getElementById("b3").value;
  let b4 = document.getElementById("b4").value;
  let b5 = document.getElementById("b5").value;
  let b6 = document.getElementById("b6").value;
  let b7 = document.getElementById("b7").value;
},false);
