const dataBase = (toDo)=>{
  if (!('indexedDB' in window)) {
  console.log('This browser doesn\'t support IndexedDB');
  return;
  }
 let db;
 // Ouvre une base de données
 let windowIndexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
 let DBOpenRequest = window.indexedDB.open("kelladata",3);

 // Ces deux gestionnaires d'événement interviennent quand la dase de données s'ouvre ou non.
 DBOpenRequest.onerror = function(event){
   console.log('Erreur de chargement de la base de donnés NoSQL.');
 };

 DBOpenRequest.onsuccess = function(event){
   console.log('La base est ouverte.');
   // Affecte le resutat de l'ouverture à la variable.
   //db = DBOpenRequest.result;
 };
 DBOpenRequest.onupgradeneeded = function(event){
   db = event.target.result
   let temps_survey_store = db.createObjectStore("temps_survey_store",{id: "id"});
   temps_survey_store.createIndex("survey1","survey1",{unique:true});
   console.log(temps_survey_store);
   temps_survey_store.transaction.complete = function(event){
     console.log('La transaction est lancée!');
     if(toDo.commandName = "add"){
       let transaction = db.transaction(["customers"], "readwrite");
     }else if(toDo.commandName = "delete"){
       //
     }else if(toDo.commandName = "see"){
      //
     }
   }
 };
//Tools
function getObjectStore(store_name, mode){
    let tx = db.transaction(store_name, mode);
    return tx.objectStore(store_name);
  }
};

export {dataBase};
