const uploadFiles = function (files,preview_container){
	 	let elt = "";
		let reader = new FileReader();
    	reader.addEventListener("load", function(){
    			preview_container.src = this.result;
					profil_photo.dataset.blobImage = this.result;
    	},false);
    	reader.readAsDataURL(files);
    }
export {uploadFiles};
