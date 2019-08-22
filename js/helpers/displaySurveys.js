import {media_ui_model} from './../modules/media_ui_model.js';
const displaySurveys = (tab_surveys)=>{
	let surveys = tab_surveys.data;console.log(surveys);
	let taille = surveys.length;
		for (let i = 0; i < taille; i++){
				requestAnimationFrame(()=>{
					document.getElementById("data-account-display").insertAdjacentHTML("afterbegin",media_ui_model(5,surveys[i]));
				});
	}
};

export {displaySurveys};
