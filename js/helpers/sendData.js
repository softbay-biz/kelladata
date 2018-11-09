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

export {sendData};
