import {dashboard_handler} from './../helpers/dashboard_handler.js';

const client_handler = ()=>{
  dashboard_handler(document.getElementById("dashboard"));
};

export {client_handler};
