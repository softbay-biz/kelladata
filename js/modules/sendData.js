function sendData(formDataToSend){
	let urlToSend = "API/entryPoint.php";
              let xhrSendAnnonce = new XMLHttpRequest();
                  xhrSendAnnonce.addEventListener("loadstart", () =>
                   {
                   });
                  xhrSendAnnonce.addEventListener("load", () =>
                   {
                        let response = JSON.parse(xhrSendAnnonce.responseText);
                   });
                  xhrSendAnnonce.addEventListener("error",()=>{
                    //console.log(e.error);
                  });
             xhrSendAnnonce.responseType = "text";
	           xhrSendAnnonce.open('POST',urlToSend, true);
	          xhrSendAnnonce.send(JSON.stringify(formDataToSend));
}
