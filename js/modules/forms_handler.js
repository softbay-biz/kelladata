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
  section_e:{},
  section_f:{
    f12:{}
  }
};
document.getElementById("next").addEventListener("click",()=>{
  //let actualPage = document.getElementById("navigation").getElementsByClassName('is-current')[0].dataset.page;
  let actualPage = 7;
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
  }else if(actualPage == 6){
    let e25 = document.getElementById("e25").value;
    let e26 = document.getElementById("e26").value;
    let e27 = document.getElementById("e27").value;
    let e28 = document.getElementById("e28").value;
    let e29 = document.getElementById("e29").value;
    let e30 = document.getElementById("e30").value;
    let e31 = document.getElementById("e31").value;
    let e32 = document.getElementById("e32").value;
    let e33 = document.getElementById("e33").value;
    let e34 = document.getElementById("e34").value;
    let e35 = document.getElementById("e35").value;
    let e36 = document.getElementById("e36").value;
    let e37 = document.getElementById("e37").value;
    let e38 = document.getElementById("e38").value;
    let e39 = document.getElementById("e39").value;
        if(e25 === "" || e26 === "" || e32 === ""){
          alert("Veuillez au moins remplir les champs : e25,e26 et e32");
          stay_or_leave_page = 0;
        }else{
          survey.section_e.e25 = e25;
          survey.section_e.e26 = e26;
          survey.section_e.e27 = e27;
          survey.section_e.e28 = e28;
          survey.section_e.e29 = e29;
          survey.section_e.e30 = e30;
          survey.section_e.e31 = e31;
          survey.section_e.e32 = e32;
          survey.section_e.e33 = e33;
          survey.section_e.e34 = e34;
          survey.section_e.e35 = e35;
          survey.section_e.e36 = e36;
          survey.section_e.e37 = e37;
          survey.section_e.e38 = e38;
          survey.section_e.e39= e39;
          stay_or_leave_page = 1;
        }
  }else if(actualPage == 7){
    let f1 = document.getElementById("f1").value;
    let f2a = document.getElementById("f2a").value;
    let f2b = document.getElementById("f2b").value;
    let f3 = document.getElementById("f3").value;
    let f4 = document.getElementById("f4").value;
    let f5 = document.getElementById("f5").value;
    let f6 = document.getElementById("f6").value;
    let f7 = document.getElementById("f7").value;
    let f8 = document.getElementById("f8").value;
    let f9 = document.getElementById("f9").value;
    let f10 = document.getElementById("f10").value;
    let f11 = document.getElementById("f11").value;
    let f1201 = document.getElementById("f1201").checked;
    let f1202 = document.getElementById("f1202").checked;
    let f1203= document.getElementById("f1203").checked;
    let f1204 = document.getElementById("f1204").checked;
    let f1205 = document.getElementById("f1205").checked;
    let f1206 = document.getElementById("f1206").checked;
    let f1207 = document.getElementById("f1207").checked;
    let f1208 = document.getElementById("f1208").checked;
    let f1209 = document.getElementById("f1209").checked;
    let f1210 = document.getElementById("f1210").checked;
    let f1211 = document.getElementById("f1211").checked;
    let f1212 = document.getElementById("f1212").checked;
    let f1213 = document.getElementById("f1213").checked;
    let f13 = document.getElementById("f13").value;
    let f14 = document.getElementById("f14").value;
    let f15 = document.getElementById("f15").value;
    let f17 = document.getElementById("f17").value;
    let f18 = document.getElementById("f18").value;
    let f19 = document.getElementById("f19").value;
    survey.section_f.f1 = f1;
    survey.section_f.f2a = f2a;
    survey.section_f.f2b = f2b;
    survey.section_f.f3 = f3;
    survey.section_f.f4 = f4;
    survey.section_f.f5 = f5;
    survey.section_f.f6 = f6;
    survey.section_f.f7 = f7;
    survey.section_f.f8 = f8;
    survey.section_f.f9 = f9;
    survey.section_f.f10 = f10;
    survey.section_f.f11 = f11;
    survey.section_f.f12.f1 = turnBoolToFrench(f1201);
    survey.section_f.f12.f2 = turnBoolToFrench(f1202);
    survey.section_f.f12.f3 = turnBoolToFrench(f1203);
    survey.section_f.f12.f4 = turnBoolToFrench(f1204);
    survey.section_f.f12.f5 = turnBoolToFrench(f1205);
    survey.section_f.f12.f6 = turnBoolToFrench(f1206);
    survey.section_f.f12.f7 = turnBoolToFrench(f1207);
    survey.section_f.f12.f8 = turnBoolToFrench(f1208);
    survey.section_f.f12.f9 = turnBoolToFrench(f1209);
    survey.section_f.f12.f10 = turnBoolToFrench(f1210);
    survey.section_f.f12.f11 = turnBoolToFrench(f1211);
    survey.section_f.f12.f12 = turnBoolToFrench(f1212);
    survey.section_f.f12.f13 = turnBoolToFrench(f1213);
    survey.section_f.f13 = f13;
    survey.section_f.f14 = f14;
    survey.section_f.f15 = f15;
    survey.section_f.f17 = f17;
    survey.section_f.f18 = f18;
    survey.section_f.f19 = f19;
    stay_or_leave_page = 1;
    console.log(survey);
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
document.getElementById("e26").addEventListener("change",(e)=>{
  if(e.target.value === "Non"){
    document.getElementById("e27").style.visibility = "hidden";
    document.getElementById("e28").style.visibility = "hidden";
    document.getElementById("e29").style.visibility = "hidden";
    document.getElementById("e30").style.visibility = "hidden";
    document.getElementById("e31").style.visibility = "hidden";
  }else{
    document.getElementById("e27").style.visibility = "visible";
    document.getElementById("e28").style.visibility = "visible";
    document.getElementById("e29").style.visibility = "visible";
    document.getElementById("e30").style.visibility = "visible";
    document.getElementById("e31").style.visibility = "visible";
  }
},false);
document.getElementById("e32").addEventListener("change",(e)=>{
  if(e.target.value === "Non"){
    document.getElementById("e33").style.visibility = "hidden";
    document.getElementById("e34").style.visibility = "hidden";
    document.getElementById("e35").style.visibility = "hidden";
    document.getElementById("e36").style.visibility = "hidden";
    document.getElementById("e37").style.visibility = "hidden";
    document.getElementById("e38").style.visibility = "hidden";
    document.getElementById("e39").style.visibility = "hidden";
  }else{
    document.getElementById("e33").style.visibility = "visible";
    document.getElementById("e34").style.visibility = "visible";
    document.getElementById("e35").style.visibility = "visible";
    document.getElementById("e36").style.visibility = "visible";
    document.getElementById("e37").style.visibility = "visible";
    document.getElementById("e38").style.visibility = "visible";
    document.getElementById("e39").style.visibility = "visible";
  }
},false);
document.getElementById("e2").addEventListener("change",(e)=>{
  if(e.target.value === "Autres"){
    addNewSelectOption(document.getElementById("e2"));
  }
},false);
document.getElementById("e5").addEventListener("change",(e)=>{
  if(e.target.value === "Autres"){
    addNewSelectOption(document.getElementById("e5"));
  }
},false);
document.getElementById("e6").addEventListener("change",(e)=>{
  if(e.target.value === "Autres"){
    addNewSelectOption(document.getElementById("e6"));
  }
},false);
document.getElementById("e8").addEventListener("change",(e)=>{
  if(e.target.value === "Autres"){
    addNewSelectOption(document.getElementById("e8"));
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
document.getElementById("e10").addEventListener("change",(e)=>{
  if(e.target.value === "Autres"){
    addNewSelectOption(document.getElementById("e10"));
  }
},false);
document.getElementById("e11").addEventListener("change",(e)=>{
  if(e.target.value === "Non"){
    document.getElementById("e12").style.visibility = "hidden";
  }else{
    document.getElementById("e12").style.visibility = "visible";
  }
},false);
document.getElementById("e12").addEventListener("change",(e)=>{
  if(e.target.value === "Autres"){
    addNewSelectOption(document.getElementById("e12"));
  }
},false);
document.getElementById("e13").addEventListener("change",(e)=>{
  if(e.target.value === "Non"){
    document.getElementById("e14").style.visibility = "hidden";
  }else{
    document.getElementById("e14").style.visibility = "visible";
  }
},false);
document.getElementById("e14").addEventListener("change",(e)=>{
  if(e.target.value === "Autres"){
    addNewSelectOption(document.getElementById("e14"));
  }
},false);
document.getElementById("e15").addEventListener("change",(e)=>{
  if(e.target.value === "Autres"){
    addNewSelectOption(document.getElementById("e15"));
  }
},false);
document.getElementById("e16").addEventListener("change",(e)=>{
  if(e.target.value === "Non"){
    document.getElementById("e17").style.visibility = "hidden";
  }else{
    document.getElementById("e17").style.visibility = "visible";
  }
},false);
document.getElementById("e17").addEventListener("change",(e)=>{
  if(e.target.value === "Autres"){
    addNewSelectOption(document.getElementById("e17"));
  }
},false);
document.getElementById("e20").addEventListener("change",(e)=>{
  if(e.target.value === "Autres"){
    addNewSelectOption(document.getElementById("e20"));
  }
},false);
document.getElementById("e22").addEventListener("change",(e)=>{
  if(e.target.value === "Autres"){
    addNewSelectOption(document.getElementById("e22"));
  }
},false);
document.getElementById("e23").addEventListener("change",(e)=>{
  if(e.target.value === "Autres"){
    addNewSelectOption(document.getElementById("e23"));
  }
},false);
document.getElementById("e27").addEventListener("change",(e)=>{
  if(e.target.value === "Autres"){
    addNewSelectOption(document.getElementById("e27"));
  }
},false);
document.getElementById("e28").addEventListener("change",(e)=>{
  if(e.target.value === "Autres"){
    addNewSelectOption(document.getElementById("e28"));
  }
},false);
document.getElementById("e33").addEventListener("change",(e)=>{
  if(e.target.value === "Autres"){
    addNewSelectOption(document.getElementById("e33"));
  }
},false);
document.getElementById("e35").addEventListener("change",(e)=>{
  if(e.target.value === "Autres"){
    addNewSelectOption(document.getElementById("e35"));
  }
},false);
document.getElementById("f8").addEventListener("change",(e)=>{
  if(e.target.value === "Autres"){
    addNewSelectOption(document.getElementById("f8"));
  }
},false);
document.getElementById("f9").addEventListener("change",(e)=>{
  if(e.target.value === "Autres"){
    addNewSelectOption(document.getElementById("f9"));
  }
},false);
document.getElementById("f10").addEventListener("change",(e)=>{
  if(e.target.value === "Autres"){
    addNewSelectOption(document.getElementById("f10"));
  }
},false);
document.getElementById("f11").addEventListener("change",(e)=>{
  if(e.target.value === "Autres"){
    addNewSelectOption(document.getElementById("f11"));
  }
},false);
document.getElementById("f13").addEventListener("change",(e)=>{
  if(e.target.value === "Autres"){
    addNewSelectOption(document.getElementById("f13"));
  }
},false);
document.getElementById("f17").addEventListener("change",(e)=>{
  if(e.target.value === "Autres"){
    addNewSelectOption(document.getElementById("f17"));
  }
},false);
document.getElementById("f18").addEventListener("change",(e)=>{
  if(e.target.value === "Non"){
    document.getElementById("f19").style.visibility = "hidden";
  }else{
    document.getElementById("f19").style.visibility = "visible";
  }
},false);
//
function addNewSelectOption(select){
  let option = document.createElement("option");
  option.text = prompt("Entrez le nouveau choix :");
  return select.add(option);
}
function turnBoolToFrench(bool){
  return bool===true?"Oui":"Non";
}
