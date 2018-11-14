let survey = {
  section_a:{
  },
  section_b:{
  b1:[],b2:[],b3:[],b4:[],b5:[],b6:[],b7:[]
  },
  section_c:{c0:[],c1:[],c2:[],c3:[],c4:[],
  c5:[],c6:[],c7:[],c8:[],c9:[]
  },
  section_d:{d0:[],d1:[],d2:[],d3:[],d4:[],d5:[],d6:[],d7:[],d9a:[],d9b:[],d10:[],
  d11:[]
  },
  section_e:{}
};
document.getElementById("next").addEventListener("click",()=>{
  //let actualPage = document.getElementById("navigation").getElementsByClassName('is-current')[0].dataset.page;
  let actualPage = 1;
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
    if(survey.section_b.b1.length <1){
      alert("Veuillez enregistrer au moins un membre dans la famille!");
      stay_or_leave_page = 0;
    }
  }
  else if(actualPage == 3){
    /*Here we do nothing!
    */
  }
  else if(actualPage == 4){
    /*Here we do nothing
    */
  }
  else if(actualPage == 5){
    let e1 = document.getElementById("e1").value;
    let e2 = document.getElementById("e2").value;
    let e3 = document.getElementById("e3").value;
    let e4 = document.getElementById("e4").value;
    let e5 = document.getElementById("e5").value;
    let e6 = document.getElementById("e6").value;
    let e7 = document.getElementById("e7").value;
    let e8 = document.getElementById("e8").value;
    let e9 = document.getElementById("e9").value;
    let e10 = document.getElementById("e10").value;
    let e11 = document.getElementById("e11").value;
    let e12 = document.getElementById("e12").value;
    let e13 = document.getElementById("e13").value;
    let e14 = document.getElementById("e14").value;
    let e15 = document.getElementById("e15").value;
    let e16 = document.getElementById("e16").value;
    let e17 = document.getElementById("e17").value;
    let e18 = document.getElementById("e18").value;
    let e19 = document.getElementById("e19").value;
    let e20 = document.getElementById("e20").value;
    let e21 = document.getElementById("e21").value;
    let e22 = document.getElementById("e22").value;
    let e23 = document.getElementById("e23").value;
    let e24 = document.getElementById("e24").value;
        if(e1 === "" || e4 === "" || e11 === "" || e13 === "" || e15 === "" || e16 === ""
      || e18 === "" || e19 === "" || e20 === "" || e21 === "" || e22 === "" || e23 === ""
    || e24 === ""){
          alert("Veuillez au moins remplir les champs : e1,e4,e11,e13,e15,e16,e18...e24");
          stay_or_leave_page = 0;
        }else{
          survey.section_e.e1 = e1;
          survey.section_e.e2 = e2;
          survey.section_e.e3 = e3;
          survey.section_e.e4 = e4;
          survey.section_e.e5 = e5;
          survey.section_e.e6 = e6;
          survey.section_e.e7 = e7;
          survey.section_e.e8 = e8;
          survey.section_e.e9 = e9;
          survey.section_e.e10 = e10;
          survey.section_e.e11 = e11;
          survey.section_e.e12 = e12;
          survey.section_e.e13 = e13;
          survey.section_e.e14 = e14;
          survey.section_e.e15 = e15;
          survey.section_e.e16 = e16;
          survey.section_e.e17 = e17;
          survey.section_e.e18 = e18;
          survey.section_e.e19 = e19;
          survey.section_e.e20 = e20;
          survey.section_e.e21 = e21;
          survey.section_e.e22 = e22;
          survey.section_e.e23 = e23;
          survey.section_e.e24 = e24;
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
  if(b1 === "" || b2 === "" || b3 === "" || b4 === ""
  || b5 === "" || b6 === "" || b7 === ""){
    alert("Veuillez remplir tout les champs");
  }else{
    survey.section_b.b1.push(b1);
    survey.section_b.b2.push(b2);
    survey.section_b.b3.push(b3);
    survey.section_b.b4.push(b4);
    survey.section_b.b5.push(b5);
    survey.section_b.b6.push(b6);
    survey.section_b.b7.push(b7);
    //We add option on section case   while(i>0){
        let option1 = document.createElement("option");
        option1.text = b1;
        let option2 = document.createElement("option");
        option2.text = b1;
        if(parseInt(b3)>=10){
          document.getElementById("c0").add(option1);
        }
          document.getElementById("d0").add(option2);

    //We clear value
    document.getElementById("b1").value ="";
    document.getElementById("b2").value ="";
    document.getElementById("b3").value ="";
    document.getElementById("b4").value ="";
    document.getElementById("b5").value ="";
    document.getElementById("b6").value ="";
    document.getElementById("b7").value ="";
    alert('Nouveau membre ajoute!');
  }
},false);
document.getElementById("c_submit").addEventListener('click',()=>{
  let c0 = document.getElementById("c0").value;
  let c1 = document.getElementById("c1").value;
  let c2 = document.getElementById("c2").value;
  let c3 = document.getElementById("c3").value;
  let c4 = document.getElementById("c4").value;
  let c5 = document.getElementById("c5").value;
  let c6 = document.getElementById("c6").value;
  let c7 = document.getElementById("c7").value;
  let c8 = document.getElementById("c8").value;
  let c9 = document.getElementById("c9").value;
  if(c0 === "" || c1 === "" || c2 === "" || c9 === ""){
    alert("Veuillez remplir au moins c0, c1, c2 et c9!");
  }else{
    survey.section_c.c0.push(c0);
    survey.section_c.c1.push(c1);
    survey.section_c.c2.push(c2);
    survey.section_c.c3.push(c3);
    survey.section_c.c4.push(c4);
    survey.section_c.c5.push(c5);
    survey.section_c.c6.push(c6);
    survey.section_c.c7.push(c7);
    survey.section_c.c8.push(c8);
    survey.section_c.c9.push(c9);
    document.getElementById("c0").remove(document.getElementById("c0").selectedIndex);
    //We clear value
    document.getElementById("c1").value ="";
    document.getElementById("c2").value ="";
    document.getElementById("c3").value ="";
    document.getElementById("c4").value ="";
    document.getElementById("c5").value ="";
    document.getElementById("c6").value ="";
    document.getElementById("c7").value ="";
    document.getElementById("c8").value ="";
    document.getElementById("c9").value ="";
    alert('Informations du membre ajoutees!');
    console.log(survey);
  }
},false);
document.getElementById("c2").addEventListener("change",(e)=>{
  if(e.target.value === "Non"){
    document.getElementById("c3").style.visibility = "hidden";
    document.getElementById("c4").style.visibility = "hidden";
    document.getElementById("c5").style.visibility = "hidden";
    document.getElementById("c6").style.visibility = "hidden";
    document.getElementById("c7").style.visibility = "hidden";
    document.getElementById("c8").style.visibility = "hidden";
  }else{
    document.getElementById("c3").style.visibility = "visible";
    document.getElementById("c4").style.visibility = "visible";
    document.getElementById("c5").style.visibility = "visible";
    document.getElementById("c6").style.visibility = "visible";
    document.getElementById("c7").style.visibility = "visible";
    document.getElementById("c8").style.visibility = "visible";
  }
},false);
document.getElementById("c5").addEventListener("change",(e)=>{
  if(e.target.value === "Non"){
    document.getElementById("c6").style.visibility = "hidden";
    document.getElementById("c7").style.visibility = "hidden";
    document.getElementById("c8").style.visibility = "hidden";
  }else{
    document.getElementById("c6").style.visibility = "visible";
    document.getElementById("c7").style.visibility = "visible";
    document.getElementById("c8").style.visibility = "visible";
  }
},false);
document.getElementById("d_submit").addEventListener('click',()=>{
  let d0 = document.getElementById("d0").value;
  let d1 = document.getElementById("d1").value;
  let d2 = document.getElementById("d2").value;
  let d3 = document.getElementById("d3").value;
  let d4 = document.getElementById("d4").value;
  let d5 = document.getElementById("d5").value;
  let d6 = document.getElementById("d6").value;
  let d7 = document.getElementById("d7").value;
  let d9a = document.getElementById("d9a").value;
  let d9b = document.getElementById("d9b").value;
  let d10 = document.getElementById("d10").value;
  let d11 = document.getElementById("d11").value;
  if(d0 === "" || d1 === "" || d3 === "" || d4 === ""){
    alert("Veuillez remplir au moins d0, d1, d3 et d4!");
  }else{
    survey.section_d.d0.push(d0);
    survey.section_d.d1.push(d1);
    survey.section_d.d2.push(d2);
    survey.section_d.d3.push(d3);
    survey.section_d.d4.push(d4);
    survey.section_d.d5.push(d5);
    survey.section_d.d6.push(d6);
    survey.section_d.d7.push(d7);
    survey.section_d.d9a.push(d9a);
    survey.section_d.d9b.push(d9b);
    survey.section_d.d10.push(d10);
    survey.section_d.d11.push(d11);
    document.getElementById("d0").remove(document.getElementById("d0").selectedIndex);
    //We clear value
    document.getElementById("d1").value ="";
    document.getElementById("d2").value ="";
    document.getElementById("d3").value ="";
    document.getElementById("d4").value ="";
    document.getElementById("d5").value ="";
    document.getElementById("d6").value ="";
    document.getElementById("d7").value ="";
    document.getElementById("d9a").value ="";
    document.getElementById("d9b").value ="";
    document.getElementById("d10").value ="";
    document.getElementById("d11").value ="";
    alert('Informations du membre ajoutees!');
    console.log(survey);
  }
},false);
document.getElementById("d1").addEventListener("change",(e)=>{
  if(e.target.value === "Non"){
    document.getElementById("d2").style.visibility = "hidden";
  }else{
    document.getElementById("d2").style.visibility = "visible";
  }
},false);
document.getElementById("d4").addEventListener("change",(e)=>{
  if(e.target.value === "Non"){
    document.getElementById("d5").style.visibility = "hidden";
    document.getElementById("d6").style.visibility = "hidden";
    document.getElementById("d7").style.visibility = "hidden";
    document.getElementById("d9a").style.visibility = "hidden";
    document.getElementById("d9b").style.visibility = "hidden";
    document.getElementById("d10").style.visibility = "hidden";
    document.getElementById("d11").style.visibility = "hidden";
  }else{
    document.getElementById("d5").style.visibility = "visible";
    document.getElementById("d6").style.visibility = "visible";
    document.getElementById("d7").style.visibility = "visible";
    document.getElementById("d9a").style.visibility = "visible";
    document.getElementById("d9b").style.visibility = "visible";
    document.getElementById("d10").style.visibility = "visible";
    document.getElementById("d11").style.visibility = "visible";
  }
},false);
document.getElementById("e1").addEventListener("change",(e)=>{
  if(e.target.value === "Oui"){
    document.getElementById("e2").style.visibility = "hidden";
    document.getElementById("e3").style.visibility = "hidden";
  }else{
    document.getElementById("e2").style.visibility = "visible";
    document.getElementById("e3").style.visibility = "visible";
  }
},false);
document.getElementById("e3").addEventListener("change",(e)=>{
  if(e.target.value === "Oui"){
    document.getElementById("e4").style.visibility = "hidden";
    document.getElementById("e5").style.visibility = "hidden";
    document.getElementById("e6").style.visibility = "hidden";
    document.getElementById("e7").style.visibility = "hidden";
    document.getElementById("e8").style.visibility = "hidden";
    document.getElementById("e9").style.visibility = "hidden";
    document.getElementById("e10").style.visibility = "hidden";
  }else{
    document.getElementById("e4").style.visibility = "visible";
    document.getElementById("e5").style.visibility = "visible";
    document.getElementById("e6").style.visibility = "visible";
    document.getElementById("e7").style.visibility = "visible";
    document.getElementById("e8").style.visibility = "visible";
    document.getElementById("e9").style.visibility = "visible";
    document.getElementById("e10").style.visibility = "visible";
  }
},false);
document.getElementById("e9").addEventListener("change",(e)=>{
  if(e.target.value === "Non"){
    document.getElementById("e10").style.visibility = "hidden";
    document.getElementById("e11").style.visibility = "hidden";
  }else{
    document.getElementById("e10").style.visibility = "visible";
    document.getElementById("e11").style.visibility = "visible";
  }
},false);
document.getElementById("e11").addEventListener("change",(e)=>{
  if(e.target.value === "Non"){
    document.getElementById("e12").style.visibility = "hidden";
  }else{
    document.getElementById("e12").style.visibility = "visible";
  }
},false);
document.getElementById("e13").addEventListener("change",(e)=>{
  if(e.target.value === "Non"){
    document.getElementById("e14").style.visibility = "hidden";
  }else{
    document.getElementById("e14").style.visibility = "visible";
  }
},false);
document.getElementById("e16").addEventListener("change",(e)=>{
  if(e.target.value === "Non"){
    document.getElementById("e17").style.visibility = "hidden";
  }else{
    document.getElementById("e17").style.visibility = "visible";
  }
},false);
