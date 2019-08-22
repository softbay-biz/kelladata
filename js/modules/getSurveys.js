import {ajax} from './../helpers/ajax.js';
import {displaySurveys} from './../helpers/displaySurveys.js';
const getSurveys = ()=>{
		return ajax('','http://51.15.211.179:4000/api/data','GET').then((response)=>{
						displaySurveys(response);
						}).catch((error)=>{console.log(error);
						});
};
export {getSurveys};
