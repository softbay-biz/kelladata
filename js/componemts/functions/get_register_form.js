import login from './../../modules/login.js';

function sendData(formDataToSend){
	return new Promise((resolve,reject)=>{
							let urlToSend = "API/entryPoint.php";
              let xhrSendAnnonce = new XMLHttpRequest();
                  xhrSendAnnonce.addEventListener("loadstart", () =>
                   {
                   });
                  xhrSendAnnonce.addEventListener("load", () =>
                   {
                        let response = JSON.parse(xhrSendAnnonce.responseText);
													resolve(response);
                   });
                  xhrSendAnnonce.addEventListener("error",()=>{
                    //console.log(e.error);
                  });
             xhrSendAnnonce.responseType = "text";
	           xhrSendAnnonce.open('POST',urlToSend, true);
	          xhrSendAnnonce.send(JSON.stringify(formDataToSend));
				});
}
function get_register_form(){

	let form = {
		requestName:btoa(btoa(btoa("registration"))),
		data:{
			first_name:document.getElementById("first_name").value,
			last_name:document.getElementById("last_name").value,
			email:document.getElementById("email").value,
			file:document.getElementById("file"),
			password:document.getElementById("password").value,
			confirm_password:document.getElementById("confirm_password").value
		}
	};

	if(form.data.first_name === "" || form.data.last_name === "" || form.data.email === ""
		|| form.data.password === ""){
		return alert("Veuillez remplir tout les champs!");
	}else{
		if(form.data.password != form.data.confirm_password){
			return alert("Les deux mots de passes ne se remssemble pas!");
		}else{
			let register_promise = sendData(form);
			 return register_promise.then((response)=>{
				 if(response.error === false){
					  document.getElementById('container').innerHTML = login;
				 }else{
					 alert(response.message);
				 }
			 }).catch((error)=>{
				 //console.log(error);
			 });
		}
	}
}
export {get_register_form};
