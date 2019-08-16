import {sendData} from './../helpers/sendData.js';
const sendMail = (recipient,message)=>{
  let data = {
    requestName:btoa(btoa(btoa("sendMail"))),
    data:{
      from:'Kelladata',
      to:recipient,
      subject:'Notification de compte',
      message:message
    }

  };
  return sendData(data).then((response)=>{}).catch((error)=>{
    //console.log(error);
  });
};
export {sendMail};
