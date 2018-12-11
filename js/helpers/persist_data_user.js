import states from './../states/states.js';
export const persist_data_user = (data)=>{
  localStorage.setItem("connected","true");
  localStorage.setItem("role",btoa(btoa(data.account_type)));
  localStorage.setItem("first_name",data.first_name);
  localStorage.setItem("last_name",data.last_name);
  localStorage.setItem("email",data.email);
};
