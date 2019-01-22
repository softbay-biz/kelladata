const displayArticles = (tab_articles,owner=0)=>{
	if(owner != 0){
		for (let i = 0; i < tab_articles.length; i++){
			if(tab_articles[i].owner == owner){
				requestAnimationFrame(()=>{
					document.getElementById("data-account-display").insertAdjacentHTML("afterbegin",media_ui_model(tab_articles[i].type,tab_articles[i]));
				});
			}
		}
	}
};

export {displayArticles};
