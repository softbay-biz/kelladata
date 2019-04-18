const uploadFiles = function (files,preview_container,preview_container_second = null){
	 	let elt = "";
		let reader = new FileReader();
    	reader.addEventListener("load", function(){
    			preview_container.src = this.result;
					if(preview_container_second != null){
						preview_container_second.src = this.result;
					}
    	},false);
    	reader.readAsDataURL(files);
    }
export {uploadFiles};
