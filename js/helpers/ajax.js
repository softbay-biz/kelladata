const ajax = (data,url,method='GET') =>{
  return new Promise((resolve,reject)=>{
              let xhrSendData = new XMLHttpRequest();
                  xhrSendData.addEventListener("loadstart", () =>
                   {
                   });
                  xhrSendData.addEventListener("load", () =>
                   {
                          resolve(JSON.parse(xhrSendData.response));
                   });
                  xhrSendData.addEventListener("error",()=>{
                    //console.log(e.error);
                  });
             xhrSendData.responseType = "text";
	           xhrSendData.open(method,url, true);
	          xhrSendData.send(JSON.stringify(data));
				});
 };

 export {ajax};
