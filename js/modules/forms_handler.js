import states from './../states/states.js';
import survey from './../helpers/form_modele.js';
import tab_temp_survey from './../modules/temp_survey.js';

const forms_handler = ()=>{
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
          states.contrainte_page = true;
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
  }else if(actualPage == 8){
    let g1 = document.getElementById("g1").value;
    let g2 = document.getElementById("g2").value;
    let g3b = document.getElementById("g3b").value;
    let g4 = document.getElementById("g4").value;
    let g5 = document.getElementById("g5").value;
    let g6b = document.getElementById("g6b").value;
    let g6c = document.getElementById("g6c").value;
    let g6d = document.getElementById("g6d").value;
    let g7 = document.getElementById("g7").value;
    let g8 = document.getElementById("g8").value;
    let g9 = document.getElementById("g9").value;
    let g10 = document.getElementById("g10").value;
    survey.section_g.g1 = g1;
    survey.section_g.g2 = g2;
    survey.section_g.g3b = g3b;
    survey.section_g.g4 = g4;
    survey.section_g.g6b = g6b;
    survey.section_g.g6c = g6c;
    survey.section_g.g6d = g6d;
    survey.section_g.g7 = g7;
    survey.section_g.g8 = g8;
    survey.section_g.g9 = g9;
    survey.section_g.g10 = g10;
  }else if(actualPage == 11){
    let j2 = document.getElementById("j2").value;
    let j3 = document.getElementById("j3").value;
    let j4 = document.getElementById("j4").value;
    let j5 = document.getElementById("j5").value;
    let j6 = document.getElementById("j6").value;
    let j7 = document.getElementById("j7").value;
    let j8 = document.getElementById("j8").value;
    let j9 = document.getElementById("j9").value;
    let j10 = document.getElementById("j10").value;
    let j11 = document.getElementById("j11").value;
    survey.section_j.j2 = j2;
    survey.section_j.j3 = j3;
    survey.section_j.j4 = j4;
    survey.section_j.j5 = j5;
    survey.section_j.j6 = j6;
    survey.section_j.j7 = j7;
    survey.section_j.j8 = j8;
    survey.section_j.j9 = j9;
    survey.section_j.j10 = parseInt(j10);
    survey.section_j.j11 = j11;
    stay_or_leave_page = 1;
  }else if(actualPage == 12){
    let k1 = document.getElementById("k1").value;
    let k2 = document.getElementById("k2").value;
    let k3 = document.getElementById("k3").value;
    let k4 = document.getElementById("k4").value;
    let k5 = document.getElementById("k5").value;
    let k6 = document.getElementById("k6").value;
    let k7 = document.getElementById("k7").value;
    let k8 = document.getElementById("k8").value;
    let k9 = document.getElementById("k9").value;
    let k10 = document.getElementById("k10").value;
    let k11 = document.getElementById("k11").value;
    let k12 = document.getElementById("k12").value;
    let k13 = document.getElementById("k13").value;
    let k14 = document.getElementById("k14").value;
    let k15 = document.getElementById("k15").value;
    survey.section_k.k1 = k1;
    survey.section_k.k2 = k2;
    survey.section_k.k3 = k3;
    survey.section_k.k4 = k4;
    survey.section_k.k5 = k5;
    survey.section_k.k6 = k6;
    survey.section_k.k7 = k7;
    survey.section_k.k8 = k8;
    survey.section_k.k9 = k9;
    survey.section_k.k10 = k10;
    survey.section_k.k11 = k11;
    survey.section_k.k12 = k12;
    survey.section_k.k13 = k13;
    survey.section_k.k14 = k14;
    survey.section_k.k15 = k15;
  }else if(actualPage == 13){
    let l1 = document.getElementById("l1").value;
    let l4 = document.getElementById("l4").value;
    survey.section_l.l1 = l1;
    survey.section_l.l4 = l4;
  }else if(actualPage == 14){
    let o1 = document.getElementById("o1").value;
    let o3 = document.getElementById("o3").value;
    let o5 = document.getElementById("o5").value;
    let o6 = document.getElementById("o6").value;
    survey.section_o.o1 = o1;
    survey.section_o.o3 = o3;
    survey.section_o.o5 = o5;
    survey.section_o.o6 = o6;
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
  if(b1 === "" || b2 === "" || b3 === "" || b4 === ""
  || b5 === "" || b6 === ""){
    alert("Veuillez remplir tout les champs");
  }else{
    survey.section_b.b1.push(b1);
    survey.section_b.b2.push(b2);
    survey.section_b.b3.push(b3);
    survey.section_b.b4.push(b4);
    survey.section_b.b5.push(b5);
    survey.section_b.b6.push(b6);
    let temp_table = `
      <tr>
        <td>${b1}</td>
        <td>${b2}</td>
        <td>${b3}</td>
        <td>${b4}</td>
        <td>${b5}</td>
        <td>${b6}</td>
      </tr>
    `;
    document.getElementById("table_temp_family").insertAdjacentHTML("afterbegin",temp_table);
    //We add option on section case   while(i>0){
        let option1 = document.createElement("option");
        option1.text = b1;
        let option2 = document.createElement("option");
        option2.text = b1;
        let option3 = document.createElement("option");
        option3.text = b1;
        let option4 = document.createElement("option");
        option4.text = b1;
        let option5 = document.createElement("option");
        option5.text = b1;
        if(parseInt(b3)>=10){
          document.getElementById("c0").add(option1);
        }
        else if(parseInt(b3)<5){
          document.getElementById("h1").add(option3);
        }
        if(b2 === "F"){
          document.getElementById("h2").add(option4);
        }
          document.getElementById("d0").add(option2);
          document.getElementById("k3").add(option5);

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
document.getElementById("h_submit").addEventListener('click',()=>{
  let h1 = document.getElementById("h1").value;
  let h2 = document.getElementById("h2").value;
  let h3 = document.getElementById("h3").value;
  let h4 = document.getElementById("h4").value;
  let h5 = document.getElementById("h5").value;
  let h6 = document.getElementById("h6").value;
  let h7 = document.getElementById("h7").value;
  let h8 = document.getElementById("h8").value;
  if(h1 === "" || h2 === "" || h3 === "" || h4 === "" || h5 === ""
    || h6 === "" || h7 === "" || h8 === ""){
    alert("Veuillez remplir au moins h1, h2, h3, h4, h5, h6, h7, h8 et h9!");
  }else{
    survey.section_h.h1.push(h1);
    survey.section_h.h2.push(h2);
    survey.section_h.h3.push(h3);
    survey.section_h.h4.push(h4);
    survey.section_h.h5.push(h5);
    survey.section_h.h6.push(h6);
    survey.section_h.h7.push(h7);
    survey.section_h.h8.push(h8);
    document.getElementById("h1").remove(document.getElementById("h1").selectedIndex);
    //We clear value
    document.getElementById("h1").value ="";
    document.getElementById("h2").value ="";
    document.getElementById("h3").value ="";
    document.getElementById("h4").value ="";
    document.getElementById("h5").value ="";
    document.getElementById("h6").value ="";
    document.getElementById("h7").value ="";
    document.getElementById("h8").value ="";
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
    document.getElementById("c9").style.visibility = "visible";
  }else{
    document.getElementById("c3").style.visibility = "visible";
    document.getElementById("c4").style.visibility = "visible";
    document.getElementById("c5").style.visibility = "visible";
    document.getElementById("c6").style.visibility = "visible";
    document.getElementById("c7").style.visibility = "visible";
    document.getElementById("c8").style.visibility = "visible";
    document.getElementById("c9").style.visibility = "hidden";
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
  if(e.target.value === "Oui"){
    document.getElementById("f19").style.visibility = "hidden";
  }else{
    document.getElementById("f19").style.visibility = "visible";
  }
},false);
document.getElementById("g2").addEventListener("change",(e)=>{
  if(e.target.value === "Autres"){
    addNewSelectOption(document.getElementById("g2"));
  }
},false);
document.getElementById("g3a1").addEventListener("change",(e)=>{
  survey.section_g.g3a.g3a1 = e.target.value;
  if(e.target.value !== ""){
    document.getElementById("g3a2").style.visibility = "hidden";
  }else{
    document.getElementById("g3a2").style.visibility = "visible";
  }
},false);
document.getElementById("g3a2").addEventListener("change",(e)=>{
  survey.section_g.g3a.g3a2 = e.target.value;
  let temp = document.getElementById("g3b");
  temp.selectedIndex = 2;
  if(e.target.value !== ""){
    document.getElementById("g3a1").style.visibility = "hidden";
  }else{
    document.getElementById("g3a1").style.visibility = "visible";
  }
},false);
document.getElementById("g6a").addEventListener("change",(e)=>{
  if(e.target.value !== ""){
    let hours = parseInt(prompt("Le nombre d'heures:"))*60;
    let minutes = parseInt(prompt("Le nombre de minutes:"));
    hours = parseInt(hours)+parseInt(minutes);
    hours = isNaN(hours)?0:hours;
    let option = e.target.options[e.target.selectedIndex].id;
    if(option === "g6a1"){
      survey.section_g.g6a.g6a1 = hours;
    }else if(option === "g6a2"){
      survey.section_g.g6a.g6a2 = hours;
    }else if(option === "g6a3"){
      survey.section_g.g6a.g6a3 = hours;
    }
    else if(option === "g6a4"){
      survey.section_g.g6a.g6a4 = hours;
    }
    else if(option === "g6a5"){
      survey.section_g.g6a.g6a5 = hours;
    }
    else if(option === "g6a6"){
      survey.section_g.g6a.g6a6 = hours;
    }
    else if(option === "g6a7"){
      survey.section_g.g6a.g6a7 = hours;
    }
    else if(option === "g6a8"){
      survey.section_g.g6a.g6a8 = hours;
    }
    else if(option === "g6a9"){
      survey.section_g.g6a.g6a9 = hours;
    }
  }
},false);
document.getElementById("i1").addEventListener("change",(e)=>{
  if(e.target.value !== ""){
    let prix= parseInt(prompt("Entrez le prix:"));
    prix = isNaN(prix)?0:prix;
    let option = e.target.options[e.target.selectedIndex].id;
    if(option === "i11"){
      survey.section_i.i1.i11 = prix;
    }else if(option === "i12"){
      survey.section_i.i1.i12 = prix;
    }else if(option === "i13"){
      survey.section_i.i1.i13 = prix;
    }
    else if(option === "i14"){
      survey.section_i.i1.i14 = prix;
    }else if(option === "i15"){
      survey.section_i.i1.i15 = prix;
    }else if(option === "i16"){
      survey.section_i.i1.i16 = prix;
    }
  }
},false);
document.getElementById("i2").addEventListener("change",(e)=>{
  if(e.target.value !== ""){
    let prix= parseInt(prompt("Entrez le prix:"));
    prix = isNaN(prix)?0:prix;
    let option = e.target.options[e.target.selectedIndex].id;
    if(option === "i21"){
      survey.section_i.i2.i21 = prix;
    }else if(option === "i22"){
      survey.section_i.i2.i22 = prix;
    }else if(option === "i23"){
      survey.section_i.i2.i23 = prix;
    }
    else if(option === "i24"){
      survey.section_i.i2.i24 = prix;
    }else if(option === "i25"){
      survey.section_i.i2.i25 = prix;
    }else if(option === "i26"){
      survey.section_i.i2.i26 = prix;
    }
  }
},false);
document.getElementById("i3").addEventListener("change",(e)=>{
  if(e.target.value !== ""){
    let prix= parseInt(prompt("Entrez le prix:"));
    prix = isNaN(prix)?0:prix;
    let option = e.target.options[e.target.selectedIndex].id;
    if(option === "i31"){
      survey.section_i.i3.i31 = prix;
    }else if(option === "i32"){
      survey.section_i.i3.i32 = prix;
    }else if(option === "i33"){
      survey.section_i.i3.i33 = prix;
    }
    else if(option === "i34"){
      survey.section_i.i3.i34 = prix;
    }else if(option === "i35"){
      survey.section_i.i3.i35 = prix;
    }else if(option === "i36"){
      survey.section_i.i3.i36 = prix;
    }
  }
},false);
document.getElementById("i4").addEventListener("change",(e)=>{
  if(e.target.value !== ""){
    let prix= parseInt(prompt("Entrez le prix:"));
    prix = isNaN(prix)?0:prix;
    let option = e.target.options[e.target.selectedIndex].id;
    if(option === "i41"){
      survey.section_i.i4.i41 = prix;
    }else if(option === "i42"){
      survey.section_i.i4.i42 = prix;
    }else if(option === "i43"){
      survey.section_i.i4.i43 = prix;
    }
    else if(option === "i44"){
      survey.section_i.i4.i44 = prix;
    }else if(option === "i45"){
      survey.section_i.i4.i45 = prix;
    }else if(option === "i46"){
      survey.section_i.i4.i46 = prix;
    }
  }
},false);
document.getElementById("g6b").addEventListener("change",(e)=>{
  if(e.target.value === "Autres"){
    addNewSelectOption(document.getElementById("g6b"));
  }
},false);
document.getElementById("g6c").addEventListener("change",(e)=>{
  if(e.target.value === "Oui"){
    document.getElementById("g6d").style.visibility = "hidden";
  }else{
    document.getElementById("g6d").style.visibility = "visible";
  }
},false);
document.getElementById("j1").addEventListener("change",(e)=>{
  let cultive= parseInt(prompt("1 si lui même cultive 0 sinon:"));
  let vendu= parseInt(prompt("1 si il vend 0 sinon:"));
  let benefice= parseInt(prompt("Entrez le benefice , mettre 0 sinon:"));
  cultive = isNaN(cultive)?0:cultive;
  vendu = isNaN(vendu)?0:vendu;
  benefice = isNaN(benefice)?0:benefice;
  if(e.target.value !== ""){
    let option = e.target.options[e.target.selectedIndex].id;
    if(option === "j101"){
      survey.section_j.j1.j101.cultive = cultive;
      survey.section_j.j1.j101.vendu = vendu;
      survey.section_j.j1.j101.benefice = benefice;
    }else if(option === "j102"){
      survey.section_j.j1.j102.cultive = cultive;
      survey.section_j.j1.j102.vendu = vendu;
      survey.section_j.j1.j102.benefice = benefice;
    }else if(option === "j103"){
      survey.section_j.j1.j103.cultive = cultive;
      survey.section_j.j1.j103.vendu = vendu;
      survey.section_j.j1.j103.benefice = benefice;
    }else if(option === "j104"){
      survey.section_j.j1.j104.cultive = cultive;
      survey.section_j.j1.j104.vendu = vendu;
      survey.section_j.j1.j104.benefice = benefice;
    }else if(option === "j105"){
      survey.section_j.j1.j105.cultive = cultive;
      survey.section_j.j1.j105.vendu = vendu;
      survey.section_j.j1.j105.benefice = benefice;
    }else if(option === "j106"){
      survey.section_j.j1.j106.cultive = cultive;
      survey.section_j.j1.j106.vendu = vendu;
      survey.section_j.j1.j106.benefice = benefice;
    }else if(option === "j107"){
      survey.section_j.j1.j107.cultive = cultive;
      survey.section_j.j1.j107.vendu = vendu;
      survey.section_j.j1.j107.benefice = benefice;
    }else if(option === "j108"){
      survey.section_j.j1.j108.cultive = cultive;
      survey.section_j.j1.j108.vendu = vendu;
      survey.section_j.j1.j108.benefice = benefice;
    }else if(option === "j109"){
      survey.section_j.j1.j109.cultive = cultive;
      survey.section_j.j1.j109.vendu = vendu;
      survey.section_j.j1.j109.benefice = benefice;
    }else if(option === "j110"){
      survey.section_j.j1.j110.cultive = cultive;
      survey.section_j.j1.j110.vendu = vendu;
      survey.section_j.j1.j110.benefice = benefice;
    }else if(option === "j111"){
      survey.section_j.j1.j111.cultive = cultive;
      survey.section_j.j1.j111.vendu = vendu;
      survey.section_j.j1.j111.benefice = benefice;
    }else if(option === "j112"){
      survey.section_j.j1.j112.cultive = cultive;
      survey.section_j.j1.j112.vendu = vendu;
      survey.section_j.j1.j112.benefice = benefice;
    }else if(option === "j113"){
      survey.section_j.j1.j113.cultive = cultive;
      survey.section_j.j1.j113.vendu = vendu;
      survey.section_j.j1.j113.benefice = benefice;
    }else if(option === "j114"){
      survey.section_j.j1.j114.cultive = cultive;
      survey.section_j.j1.j114.vendu = vendu;
      survey.section_j.j1.j114.benefice = benefice;
    }else if(option === "j115"){
      survey.section_j.j1.j115.cultive = cultive;
      survey.section_j.j1.j115.vendu = vendu;
      survey.section_j.j1.j115.benefice = benefice;
    }else if(option === "j116"){
      survey.section_j.j1.j116.cultive = cultive;
      survey.section_j.j1.j116.vendu = vendu;
      survey.section_j.j1.j116.benefice = benefice;
    }else if(option === "j117"){
      survey.section_j.j1.j117.cultive = cultive;
      survey.section_j.j1.j117.vendu = vendu;
      survey.section_j.j1.j117.benefice = benefice;
    }

  }
},false);
document.getElementById("l2").addEventListener("change",(e)=>{
  let payer= parseInt(prompt("Entrez la somme:"));
  let venir_du_champ= parseInt(prompt("Si le produit du ménage vient du champ, inscrire 1 si le produit n’a pas été acheté, inscrire 0):"));
  payer = isNaN(payer)?0:payer;
  venir_du_champ = isNaN(venir_du_champ)?0:venir_du_champ;
  if(e.target.value !== ""){
    let option = e.target.options[e.target.selectedIndex].id;
    if(option === "l201"){
      survey.section_l.l2.l201.payer = payer;
      survey.section_l.l2.l201.venir_du_champ = venir_du_champ;
    }else if(option === "l202"){
      survey.section_l.l2.l202.payer = payer;
      survey.section_l.l2.l202.venir_du_champ = venir_du_champ;
    }else if(option === "l203"){
      survey.section_l.l2.l203.payer = payer;
      survey.section_l.l2.l203.venir_du_champ = venir_du_champ;
    }else if(option === "l204"){
      survey.section_l.l2.l204.payer = payer;
      survey.section_l.l2.l204.venir_du_champ = venir_du_champ;
    }else if(option === "l205"){
      survey.section_l.l2.l205.payer = payer;
      survey.section_l.l2.l205.venir_du_champ = venir_du_champ;
    }else if(option === "l206"){
      survey.section_l.l2.l206.payer = payer;
      survey.section_l.l2.l206.venir_du_champ = venir_du_champ;
    }else if(option === "l207"){
      survey.section_l.l2.l207.payer = payer;
      survey.section_l.l2.l207.venir_du_champ = venir_du_champ;
    }else if(option === "l208"){
      survey.section_l.l2.l208.payer = payer;
      survey.section_l.l2.l208.venir_du_champ = venir_du_champ;
    }else if(option === "l209"){
      survey.section_l.l2.l209.payer = payer;
      survey.section_l.l2.l209.venir_du_champ = venir_du_champ;
    }else if(option === "l210"){
      survey.section_l.l2.l210.payer = payer;
      survey.section_l.l2.l210.venir_du_champ = venir_du_champ;
    }else if(option === "l211"){
      survey.section_l.l2.l211.payer = payer;
      survey.section_l.l2.l211.venir_du_champ = venir_du_champ;
    }else if(option === "l212"){
      survey.section_l.l2.l212.payer = payer;
      survey.section_l.l2.l212.venir_du_champ = venir_du_champ;
    }else if(option === "l213"){
      survey.section_l.l2.l213.payer = payer;
      survey.section_l.l2.l213.venir_du_champ = venir_du_champ;
    }else if(option === "l214"){
      survey.section_l.l2.l214.payer = payer;
      survey.section_l.l2.l214.venir_du_champ = venir_du_champ;
    }else if(option === "l215"){
      survey.section_l.l2.l215.payer = payer;
      survey.section_l.l2.l215.venir_du_champ = venir_du_champ;
    }
  }
},false);
document.getElementById("l3").addEventListener("change",(e)=>{
  let recu= parseInt(prompt("Entrez 1 si recu ou 2 sinon:"));
  let consomme= parseInt(prompt("Entrez 1 si consommés ou 2 sinon:"));
  recu = isNaN(recu)?0:recu;
  consomme = isNaN(consomme)?0:consomme;
  if(e.target.value !== ""){
    let option = e.target.options[e.target.selectedIndex].id;
    if(option === "l301"){
      survey.section_l.l3.l301.recu = recu;
      survey.section_l.l3.l301.consomme = consomme;
    }else if(option === "l302"){
      survey.section_l.l3.l302.recu = recu;
      survey.section_l.l3.l302.consomme = consomme;
    }else if(option === "l303"){
      survey.section_l.l3.l303.recu = recu;
      survey.section_l.l3.l303.consomme = consomme;
    }else if(option === "l304"){
      survey.section_l.l3.l304.recu = recu;
      survey.section_l.l3.l304.consomme = consomme;
    }else if(option === "l305"){
      survey.section_l.l3.l305.recu = recu;
      survey.section_l.l3.l305.consomme = consomme;
    }else if(option === "l306"){
      survey.section_l.l3.l306.recu = recu;
      survey.section_l.l3.l306.consomme = consomme;
    }else if(option === "l307"){
      survey.section_l.l3.l307.recu = recu;
      survey.section_l.l3.l307.consomme = consomme;
    }else if(option === "l308"){
      survey.section_l.l3.l308.recu = recu;
      survey.section_l.l3.l308.consomme = consomme;
    }else if(option === "l309"){
      survey.section_l.l3.l309.recu = recu;
      survey.section_l.l3.l309.consomme = consomme;
    }else if(option === "l310"){
      survey.section_l.l3.l310.recu = recu;
      survey.section_l.l3.l310.consomme = consomme;
    }else if(option === "l311"){
      survey.section_l.l3.l311.recu = recu;
      survey.section_l.l3.l311.consomme = consomme;
    }else if(option === "l312"){
      survey.section_l.l3.l312.recu = recu;
      survey.section_l.l3.l312.consomme = consomme;
    }else if(option === "l313"){
      survey.section_l.l3.l313.recu = recu;
      survey.section_l.l3.l313.consomme = consomme;
    }else if(option === "l314"){
      survey.section_l.l3.l314.recu = recu;
      survey.section_l.l3.l314.consomme = consomme;
    }else if(option === "l315"){
      survey.section_l.l3.l315.recu = recu;
      survey.section_l.l3.l315.consomme = consomme;
    }
  }
},false);
document.getElementById("j5").addEventListener("change",(e)=>{
  if(e.target.value == "Oui"){
    document.getElementById("j6").style.visibility = "hidden";
  }else{
    document.getElementById("j6").style.visibility = "visible";
  }
},false);
document.getElementById("j7").addEventListener("change",(e)=>{
  if(e.target.value == "Non"){
    document.getElementById("j8").style.visibility = "hidden";
  }else{
    document.getElementById("j8").style.visibility = "visible";
  }
},false);
document.getElementById("l1").addEventListener("change",(e)=>{
  if(e.target.value == "Non"){
    document.getElementById("l2").style.visibility = "hidden";
  }else{
    document.getElementById("l2").style.visibility = "visible";
  }
},false);
document.getElementById("j2").addEventListener("change",(e)=>{
  if(e.target.value === "Autres"){
    addNewSelectOption(document.getElementById("j2"));
  }
},false);
document.getElementById("j6").addEventListener("change",(e)=>{
  if(e.target.value === "Autres"){
    addNewSelectOption(document.getElementById("j6"));
  }
},false);
document.getElementById("j9").addEventListener("change",(e)=>{
  if(e.target.value === "Autres"){
    addNewSelectOption(document.getElementById("j9"));
  }
},false);
document.getElementById("k1").addEventListener("change",(e)=>{
  if(e.target.value == "Non"){
    document.getElementById("k2").style.visibility = "hidden";
    document.getElementById("k3").style.visibility = "hidden";
    document.getElementById("k4").style.visibility = "hidden";
    document.getElementById("k5").style.visibility = "hidden";
    document.getElementById("k6").style.visibility = "hidden";
    document.getElementById("k7").style.visibility = "hidden";
    document.getElementById("k8").style.visibility = "hidden";
    document.getElementById("k9").style.visibility = "hidden";
    document.getElementById("k10").style.visibility = "hidden";
    document.getElementById("k11").style.visibility = "hidden";
    document.getElementById("k12").style.visibility = "hidden";
    document.getElementById("k13").style.visibility = "hidden";
    document.getElementById("k14").style.visibility = "hidden";
    document.getElementById("k15").style.visibility = "hidden";
  }else{
    document.getElementById("k2").style.visibility = "visible";
    document.getElementById("k3").style.visibility = "visible";
    document.getElementById("k4").style.visibility = "visible";
    document.getElementById("k5").style.visibility = "visible";
    document.getElementById("k6").style.visibility = "visible";
    document.getElementById("k7").style.visibility = "visible";
    document.getElementById("k8").style.visibility = "visible";
    document.getElementById("k9").style.visibility = "visible";
    document.getElementById("k10").style.visibility = "visible";
    document.getElementById("k11").style.visibility = "visible";
    document.getElementById("k12").style.visibility = "visible";
    document.getElementById("k13").style.visibility = "visible";
    document.getElementById("k14").style.visibility = "visible";
    document.getElementById("k15").style.visibility = "visible";
  }
},false);
document.getElementById("k2").addEventListener("change",(e)=>{
  if(e.target.value === "Autres"){
    addNewSelectOption(document.getElementById("k2"));
  }
},false);
document.getElementById("k12").addEventListener("change",(e)=>{
  if(e.target.value == "Non"){
    document.getElementById("k13").style.visibility = "hidden";
    document.getElementById("k14").style.visibility = "hidden";
    document.getElementById("k15").style.visibility = "hidden";
  }else{
    document.getElementById("k13").style.visibility = "visible";
    document.getElementById("k14").style.visibility = "visible";
    document.getElementById("k15").style.visibility = "visible";
  }
},false);
document.getElementById("k6").addEventListener("change",(e)=>{
  if(e.target.value == "Non"){
    document.getElementById("k7").style.visibility = "hidden";
  }else{
    document.getElementById("k7").style.visibility = "visible";
  }
},false);
document.getElementById("o1").addEventListener("change",(e)=>{
  if(e.target.value == "Non"){
    document.getElementById("o2").style.visibility = "hidden";
    document.getElementById("o3").style.visibility = "hidden";
  }else{
    document.getElementById("o2").style.visibility = "visible";
    document.getElementById("o3").style.visibility = "visible";
  }
},false);
document.getElementById("k14").addEventListener("change",(e)=>{
  if(e.target.value === "Autres"){
    addNewSelectOption(document.getElementById("k14"));
  }
},false);
document.getElementById("k15").addEventListener("change",(e)=>{
  if(e.target.value === "Autres"){
    addNewSelectOption(document.getElementById("k15"));
  }
},false);
document.getElementById("o2").addEventListener("change",(e)=>{
  if(e.target.value !== ""){
    let prix= parseInt(prompt("Entrez le prix:"));
    prix = isNaN(prix)?-1:prix;
    let option = e.target.options[e.target.selectedIndex].id;
    if(option === "o201"){
      survey.section_o.o2.o201.payer = prix;
    }else if(option === "o202"){
      survey.section_o.o2.o202.payer = prix;
    }else if(option === "o203"){
      survey.section_o.o2.o203.payer = prix;
    }else if(option === "o204"){
      survey.section_o.o2.o204.payer = prix;
    }else if(option === "o205"){
      survey.section_o.o2.o205.payer = prix;
    }else if(option === "o206"){
      survey.section_o.o2.o206.payer = prix;
    }else if(option === "o207"){
      survey.section_o.o2.o207.payer = prix;
    }else if(option === "o208"){
      survey.section_o.o2.o208.payer = prix;
    }
  }
},false);
document.getElementById("o4").addEventListener("change",(e)=>{
  if(e.target.value !== ""){
    let prix= parseInt(prompt("Entrez le prix:"));
    prix = isNaN(prix)?-1:prix;
    let option = e.target.options[e.target.selectedIndex].id;
    if(option === "o401"){
      survey.section_o.o4.o401.payer = prix;
    }else if(option === "o402"){
      survey.section_o.o4.o402.payer = prix;
    }else if(option === "o403"){
      survey.section_o.o4.o403.payer = prix;
    }else if(option === "o404"){
      survey.section_o.o4.o404.payer = prix;
    }else if(option === "o405"){
      survey.section_o.o4.o405.payer = prix;
    }else if(option === "o406"){
      survey.section_o.o4.o406.payer = prix;
    }else if(option === "o407"){
      survey.section_o.o4.o407.payer = prix;
    }else if(option === "o408"){
      survey.section_o.o4.o408.payer = prix;
    }else if(option === "o409"){
      survey.section_o.o4.o409.payer = prix;
    }
  }
},false)};
//
function addNewSelectOption(select){
  let option = document.createElement("option");
  option.text = prompt("Entrez le nouveau choix :");
  return select.add(option);
}
function turnBoolToFrench(bool){
  return bool===true?"Oui":"Non";
}

export {forms_handler};
