<?php
function uploadAudio($data){
		if(move_uploaded_file($file,$nb.".mp3")){
			unset($file);
			echo "Fichier audio ".$nb." uploadé!";
		}else{
			echo "Erreur lors de l'upload du son!";
		}
  }
 ?>
