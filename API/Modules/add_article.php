<?php
function add_article($data){
  include 'Helpers/bd.php';
	$bd = bd();
                        $req = $bd->prepare('INSERT INTO articles(titre,contenu,id_auteur,date_publication)
                        			VALUES(:titre, :contenu, :id_auteur, NOW())');
                        $req->execute(array(
                                                                             'titre' => strip_tags($data->titre),
                                                                             'contenu' => strip_tags($data->contenu),
																																						 'id_auteur' => strip_tags($data->id_auteur)

                        ));
                        return json_encode(array('message' => 'New article added!','error'=>false));
				}
?>
