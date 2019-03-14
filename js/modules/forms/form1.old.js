const form1 = `<h2>ETUDE PILOTE PROGRAMME KELLEWANDA : INDICATEURS DE SUIVI DU PROGRAMME KELLEWANDA AU CAMEROUN</h2>
  <div class="q_form" id=1>
    <h2>SECTION A : INFORMATION SUR QUESTIONNAIRE</h2>
    <div class="content-forms-small-left" >
          <div class="field">
            <label class="label">Date et heure du début de l’entretien</label>
            <div class="control">
              <input class="input" id="date" type="date" data-date-inline-picker="true">
            </div>
          </div>
          <div class="field">
            <div class="control">
              <input class="input" id="time" type="time" min="0:00" max="23:59">
            </div>
          </div>
          <div class="field">
            <label class="label">Nom ou code de la région</label>
            <div class="control">
              <input class="input" id="a2" type="text" placeholder="Text input">
            </div>
          </div>
            <div class="field">
              <label class="label">Nom ou code du Département</label>
              <div class="control">
                <input class="input" id="a3" type="text" placeholder="Text input">
              </div>
            </div>
              <div class="field">
                <label class="label">Nom ou code de l’Arrondissement</label>
                <div class="control">
                  <input class="input" id="a4" type="text" placeholder="Text input">
                </div>
              </div>



          </div>
          <div class="content-forms-small-right" >
            <div class="field">
              <label class="label">Nom ou code du village</label>
              <div class="control">
                <input class="input" id="a5" type="text" placeholder="Text input">
              </div>
            </div>
            <div class="field">
              <label class="label">Nom ou code du ménage</label>
              <div class="control">
                <input class="input" id="a6" type="text" placeholder="Text input">
              </div>
            </div>
            <div class="field">
              <label class="label">Numéro du questionnaire</label>
              <div class="control">
                <input class="input" id="a7" type="text" placeholder="Text input">
              </div>
            </div>
            <div class="field">
              <label class="label">Numéro de téléphone du chef du ménage</label>
              <div class="control">
                <input class="input" id="a8" type="text" placeholder="Text input">
              </div>
            </div>
            <div class="field">
              <label class="label">Nom ou code du groupe de collecte</label>
              <div class="control">
                <input class="input" id="a9" type="text" placeholder="Text input">
              </div>
            </div>
          </div>
  </div>
  <div class="q_form" style="display:block;" id=2>
    <h2>SECTION B : LISTES DES MEMBRES DU MENAGE</h2>
    <h3>NB : Les chiffres placés justes après les variables sont les codes à utiliser pour le remplissage du tableau</h3>
      <table class="table">
            <tr>
              <th>Membres du ménage</th>
              <th>Code B2 ( B2 : Sexe membre du ménage :M ou F)</th>
              <th>Code B3 (B3 : Age dernier anniversaire (en année révolu))</th>
              <th>Code B4 (B4 : Contribution au revenu du ménage : Oui ou Non)</th>
              <th>Code B5 (B5 : Liens de parenté avec le chef de ménage :<br/> Conjoint(e) ou Fils/Fille ou Frère/Soeur ou Neveu/Nièce ou Petits- fils/filles ou Père/Mère ou Autres)</th>
              <th>Code B6 (B6 : État matrimonial)</th>
              <th>Code B7 (Handicap du membre du ménage)</th>
              <th>Code B8 (avez-vous une activité ?)</th>
              <th>Code B9 (Code mère de l’enfant de 0 à 4 ans) « ne rien écrire pour les non-concernés »</th>
            </tr>
            <tr>
              <td><input id="b1" class="input" type="text" placeholder="Text input"></td>
              <td>
                <div class="select">
                  <select id="b2">
                    <option></option>
                    <option data-val=b201>M</option>
                    <option data-val=b202>F</option>
                  </select>
                </div>
              </td>
              <td><input id="b3" class="input" type="number" placeholder="Age"></td>
              <td>
                <div class="select">
                    <select id="b4">
                      <option></option>
                      <option data-val=b401>Oui</option>
                      <option data-val=b402>Non</option>
                    </select>
                  </div>
              </td>
              <td>
                <div class="select">
                    <select id="b5">
                      <option></option>
                      <option>Conjoint(e)</option>
                      <option>Fils/Fille</option>
                      <option>Frère/Soeur</option>
                      <option>Neveu/Niece</option>
                      <option>Petit-fils/fille</option>
                      <option>Père/Mère</option>
                      <option>Autres</option>
                    </select>
                  </div>
              </td>
              <td>
                <div class="select">
                    <select id="b6">
                      <option></option>
                      <option>Célibataire</option>
                      <option>Marié mono</option>
                      <option>Marié poly</option>
                      <option>Veuf (ve)</option>
                      <option>Divorcé</option>
                      <option>Séparé</option>
                      <option>Union libre</option>
                    </select>
                  </div>
              </td>
              <td>
                <div class="select">
                    <select id="b7">
                      <option></option>
                      <option>Kyste</option>
                      <option>Lipome</option>
                      <option>Hernie</option>
                      <option>Pas de handicap</option>
                      <option>Autres</option>
                    </select>
                  </div>
              </td>
              <td>
                <div class="select">
                  <select id="b8">
                    <option></option>
                    <option>Oui</option>
                    <option>Non</option>
                  </select>
                </div>
              </td>
              <td>
              <div class="select">
                <select id="b9">
                  <option></option>
                </select>
              </div>
              </td>
              <td><div class="control">
                    <button id="b_submit" class="button is-primary">Ajouter</button>
                  </div>
            </td>
            </tr>

    </table>
    <table class="table" id="table_temp_family">

  </table>
  </div>
  <div class="q_form" id=3>
    <h2>SECTION C : EDUCATION</h2>
    <h3>Une fois les membres du ménage identifié, les codes et les noms doivent apparaitre automatiquement à la section C en vue de leur poser les questions qui suivent.
La partie bleue s’affichera automatiquement pour la suite. Sauf la C1 concerne les enfants de 10 ans et plus.</h3>
    <table class="table">
          <tr>
            <th>C0 :Membres du ménage</th>
            <th>C1 : « langues lues et écrites des personnes de 10 et 20 ans dans le ménage » </th>
            <th>C2 :A déjà fréquenté l’école ?</th>
            <th>C3 : Niveau d’étude le plus élevé</th>
            <th>C4 :A fréquenté l’école l’année dernière?</th>
            <th>C5 : Fréquente actuellement une école ?</th>
            <th>C6 : Type de formation</th>
            <th>C7 : Quel est le nom de l’établissement ?</th>
            <th>C8 : Causes d’insatisfaction avec l’école ?</th>
            <th>C9 : Pourquoi ne va-t-il/elle pas à l’école actuellement ou n’a jamais été à l’école ?</th>
          </tr>
          <tr>
            <td><div class="select">
              <select id="c0">
              </select>
            </div></td>
            <td>
              <div class="select">
                <select id="c1">
                  <option></option>
                  <option>Bassa</option>
                  <option>Français</option>
                  <option>Anglais</option>
                  <option>Anglais</option>
                  <option>Autres</option>
                </select>
              </div>
            </td>
            <td><div class="select">
                <select id="c2">
                  <option></option>
                  <option>Oui</option>
                  <option>Non</option>
                </select>
              </div></td>
            <td>
              <div class="select">
                  <select id="c3">
                    <option></option>
                    <option>Primaire</option>
                    <option>Secondaire</option>
                    <option>Université</option>
                    <option>Formation</option>
                    <option>NSP 99</option>
                  </select>
                </div>
            </td>
            <td>
              <div class="select">
                  <select id="c4">
                    <option></option>
                    <option>Oui</option>
                    <option>Non</option>
                  </select>
                </div>
            </td>
            <td>
              <div class="select">
                  <select id="c5">
                    <option></option>
                    <option>Oui</option>
                    <option>Non</option>
                  </select>
                </div>
            </td>
            <td>
              <div class="select">
                  <select id="c6">
                    <option></option>
                    <option>Formation professionnelle/technique au secondaire</option>
                    <option>Formation générale</option>
                    <option>Formation pour enseignant : ENIET, ENIEG</option>
                    <option>Université/ Formation professionnelle universitaire</option>
                  </select>
                </div>
            </td>
            <td>
              <input id="c7" class="input" type="text" placeholder="Text input">
            </td>
            <td>
              <div class="select">
                  <select id="c8">
                    <option></option>
                    <option>Manque de performance scolaire</option>
                    <option>Etat de santé</option>
                  </select>
                </div>
            </td>
            <td>
              <input id="c9" class="input" type="text" placeholder="Text input">
            </td>
            <td>
              <div class="control">
                    <button id="c_submit" class="button is-primary">Ajouter</button>
                  </div>
            </td>
          </tr>

    </table>
  </div>
  <div class="q_form" id=4>
    <h2>SECTION D : SANTE</h2>
    <table class="table">
      <tr>
        <th>Membres du ménage âgés de plus de 4 ans  identifiés à B1</th>
        <th>D1 : Maladies/blessures comme obstacle au travail et à l’école durant les 15 derniers jours</th>
        <th>D2 : Types de maladies/blessures durant les 15 derniers jours</th>
        <th>D3 : Absence au travail/école durant les 15 derniers jours</th>
        <th>D4 : Sollicitation des soins médicaux durant les 15 derniers jours</th>
        <th>D5a : Fréquence  de service durant les 15 derniers jours à D4 
      </tr>
      <tr>
        <td><div class="select">
          <select id="d0">
          </select>
        </div></td>
        <td>
          <div class="select">
              <select id="d1">
                <option></option>
                <option>Oui</option>
                <option>Non</option>
              </select>
            </div>
        </td>
        <td>
          <input id="d2" class="input" type="text" placeholder="Text input">
        </td>
        <td>
          <input id="d3" class="input" type="text" placeholder="Text input">
        </td>
        <td>
          <div class="select">
              <select id="d4">
                <option></option>
                <option>Hôpital public</option>
                <option>Hôpital privé</option>
                <option>Automédication</option>
                <option>Médecine traditionnelle</option>
              </select>
            </div>
        </td>
        <td>
        <select id="d5a">
          <option></option>
          <option>Plus</option>
          <option>Moins</option>
          <option>Moyen</option>
        </select>
        </td>

        <td>
          <div class="control">
                <button id="d_submit" class="button is-primary">Ajouter</button>
              </div>
        </td>
      </tr>
    </table>
    <table class="table">
          <tr>
            <th>D5b: Maladies identifiées après diagnostic</th>
            <th>D6: Problèmes rencontrés avec ledit service</th>
            <th>D7 : Pourquoi n’a pas consulté un service de soins</th>
          </tr>
          <tr>
          <td>
            <input id="d5b" class="input" type="text" placeholder="Text input">
          </td>
          <td>
            <input id="d6" class="input" type="text" placeholder="Text input">
          </td>
          <td>
            <div class="select">
                <select id="d7">
                  <option></option>
                  <option>Pas nécessaire</option>
                  <option>Manque de moyen financier</option>
                  <option>Distance longue</option>
                  <option>Absence de soins appropriés</option>
                  <option>Mauvais accueil</option>
                  <option>Autres</option>
                </select>
              </div>
          </td>
          </tr>

    </table>
  </div>
  <div class="q_form" id=5>
    <h2>SECTION E : EMPLOI</h2>
    <div class="content-forms-small-left-third">
              <div class="field">
                <label class="label">Membres du ménage</label>
                <div class="control">
                  <select id="e0">
                    <option></option>
                  </select>
                </div>
              </div>
              <div class="field">
                <label class="label">Avez-vous travaillez la semaine dernière ?</label>
                <div class="control">
                  <select id="e1">
                    <option></option>
                    <option>Oui</option>
                    <option>Non</option>
                  </select>
                </div>
              </div>
              <div class="field">
                <label class="label">Pourquoi n’avez-vous pas travaillé la semaine dernière ?
(Raison principale)</label>
                <div class="control">
                  <select id="e2">
                    <option></option>
                    <option>Etait malade</option>
                    <option>Etait en vacances</option>
                    <option>Etait au repos</option>
                    <option>Est à la recherche du travail</option>
                    <option>A eu un problème</option>
                    <option>Autres</option>
                  </select>
                </div>
              </div>
              <div class="field">
                <label class="label">Etes-vous prêt ou disponible pour travailler ?</label>
                <div class="control">
                  <select id="e3">
                    <option></option>
                    <option>Oui</option>
                    <option>Non</option>
                  </select>
                </div>
              </div>
              <div class="field">
                <label class="label">Combien d’emploi avez-vous eu au cours des 07 derniers jours ?</label>
                <div class="control">
                  <input id="e4" class="input" type="number" placeholder="Text input">
                </div>
              </div>
              <div class="field">
                <label class="label">Quel est l’emploi qui vous a le plus occupé ces 07 derniers jours
(Une seule modalité est possible)</label>
                <div class="control">
                  <select id="e5">
                    <option></option>
                    <option>Electricien</option>
                    <option>Commerçant</option>
                    <option>Agriculteur</option>
                    <option>Eleveur</option>
                    <option>Domestique</option>
                    <option>Ménagère</option>
                    <option>Chasseur</option>
                    <option>Bûcheron</option>
                    <option>Couturier</option>
                    <option>Maçon</option>
                    <option>Secrétaire</option>
                    <option>Autres</option>
                  </select>
                </div>
              </div>
              <div class="field">
                <label class="label">Quelle était la nature du paiement de cet emploi ?</label>
                <div class="control">
                  <select id="e6">
                    <option></option>
                    <option>Salaire</option>
                    <option>Paiement en nature</option>
                    <option>Paiement jour/heure</option>
                    <option>Aide familiale rémunéré</option>
                    <option>A mon compte</option>
                    <option>Autres</option>
                  </select>
                </div>
              </div>
          </div>
          <div class="content-forms-small-left-third">
            <div class="field">
              <label class="label">Ou travaillez-vous ?</label>
              <div class="control">
                <select id="e7">
                  <option></option>
                  <option>Privé</option>
                  <option>Public</option>
                  <option>Parapublic</option>
                </select>
              </div>
            </div>
            <div class="field">
              <label class="label">Quelle est la branche de l’activité principale que vous occupé ?</label>
              <div class="control">
                <select id="e8">
                  <option></option>
                  <option>Agropastorale</option>
                  <option>Enseignement</option>
                  <option>Administration</option>
                  <option>Construction</option>
                  <option>Action sociale</option>
                  <option>Ingénierie</option>
                  <option>Autres</option>
                </select>
              </div>
            </div>
            <div class="field">
              <label class="label">Avez-vous cherché à augmenter vos revenus ?</label>
              <div class="control">
                <select id="e9">
                  <option></option>
                  <option>Oui</option>
                  <option>Non</option>
                </select>
              </div>
            </div>
            <div class="field">
              <label class="label">Comment avez cherché à augmenter vos revenus au cours de la semaine précédente ?</label>
              <div class="control">
                <select id="e10">
                  <option></option>
                  <option>En prenant un travail supplémentaire</option>
                  <option>En augmentant les heures et les jours de travail</option>
                  <option>En réduisant les dépenses</option>
                  <option>Autres</option>
                </select>
              </div>
            </div>
            <div class="field">
              <label class="label">Etes-vous encore prêts à prendre un travail supplémentaire dans les 04 semaines à venir ?</label>
              <div class="control">
                <select id="e11">
                  <option></option>
                  <option>Oui</option>
                  <option>Non</option>
                </select>
              </div>
            </div>
            <div class="field">
              <label class="label">Pourquoi n’avez-vous donc pas cherché du travail au cours de ces 04 dernières semaines ?</label>
              <div class="control">
                <select id="e12">
                  <option></option>
                  <option>Pas nécessaire</option>
                  <option>Cas de maladie</option>
                  <option>Absence de temps</option>
                  <option>Autres</option>
                </select>
              </div>
            </div>
          </div>
          <div class="content-forms-small-left-third">
            <div class="field">
              <label class="label">Est occupée, toute personne ayant travaillé au moins 03 mois de façon continue au cours des 12 derniers mois. Est-ce votre cas ?</label>
              <div class="control">
                <select id="e13">
                  <option></option>
                  <option>Oui</option>
                  <option>Non</option>
                </select>
              </div>
            </div>
            <div class="field">
              <label class="label">Quelle est la nature de cet emploi que vous avez occupé ?</label>
              <div class="control">
                <select id="e14">
                  <option></option>
                  <option>Emploi permanent</option>
                  <option>Emploi saisonnier</option>
                  <option>Emploi journalier</option>
                  <option>Autres</option>
                </select>
              </div>
            </div>
            <div class="field">
              <label class="label">Quel est l’emploi qui vous a le plus occupé au cours des 07 derniers jours ?</label>
              <div class="control">
                <select id="e15">
                  <option></option>
                  <option>Agriculture, élevage, Pêche</option>
                  <option>Administration (cadres supérieurs, moyens, subalternes, employés,ouvriers, manoeuvres, professions libérales)</option>
                  <option>Commerce</option>
                  <option>Artisanat</option>
                  <option>Services domestiques</option>
                  <option>Forces armées et sécurités</option>
                  <option>Autres</option>
                </select>
              </div>
            </div>
            <div class="field">
              <label class="label">Avez-vous droit à une pension de retraite dans ce travail ?</label>
              <div class="control">
                <select id="e16">
                  <option></option>
                  <option>Oui</option>
                  <option>Non</option>
                </select>
              </div>
            </div>
            <div class="field">
              <label class="label">Quel type de sécurité sociale avez-vous ?</label>
              <div class="control">
                <select id="e17">
                  <option></option>
                  <option>CNPS Assurance</option>
                  <option>CNPS</option>
                  <option>Autres</option>
                </select>
              </div>
            </div>
            <div class="field">
              <label class="label">Avez-vous droit à des congés payés dans ce travail ?</label>
              <div class="control">
                <select id="e18">
                  <option></option>
                  <option>Oui</option>
                  <option>Non</option>
                </select>
              </div>
            </div>
          </div>
          <div class="content-forms-small-left-third">
            <div class="field">
              <label class="label">Quel est l’avantage que vous avez tiré de ce travail ?</label>
              <div class="control">
                <input id="e19" class="input" type="text" placeholder="Text input">
              </div>
            </div>
            <div class="field">
              <label class="label">Combien de mois avez-vous exercé dans ce travail ?</label>
              <div class="control">
                <select id="e20">
                  <option></option>
                  <option>(1-3 mois)</option>
                  <option>(3-6 mois)</option>
                  <option>(6-9mois)</option>
                  <option>(9-12 mois)</option>
                  <option>Autres</option>
                </select>
              </div>
            </div>
            <div class="field">
              <label class="label">Votre condition de vie a-t-elle changée dans cette profession ?</label>
              <div class="control">
                <select id="e21">
                  <option></option>
                  <option>Oui</option>
                  <option>Non</option>
                </select>
              </div>
            </div>
            <div class="field">
              <label class="label">Quelle est l’emploi qui vous a le plus occupé au cours des douze derniers mois ?</label>
              <div class="control">
                <select id="e22">
                  <option></option>
                  <option>Electricien</option>
                  <option>Commerçant</option>
                  <option>Agriculteur/Eleveur</option>
                  <option>Domestique/Ménagère</option>
                  <option>Chasseur</option>
                  <option>Bûcheron</option>
                  <option>Couturier</option>
                  <option>Maçon</option>
                  <option>Secrétaire</option>
                  <option>Forces armé et sécurité</option>
                  <option>Artisanat/Boulanger</option>
                  <option>Cadres supérieurs, moyens, subalternes, employés, manoeuvres, professions libérales)</option>
                  <option>Enseignant</option>
                  <option>Autres</option>
                </select>
              </div>
            </div>
            <div class="field">
              <label class="label">Dans quelle branche d’activité avez-vous exercé au cours des 12 derniers mois ?</label>
              <div class="control">
                <select id="e23">
                  <option></option>
                  <option>Agropastorale</option>
                  <option>Education</option>
                  <option>Administration</option>
                  <option>Construction</option>
                  <option>Action sociale</option>
                  <option>Ingénierie</option>
                  <option>Fabrication</option>
                  <option>Réparation</option>
                  <option>Autres</option>
                </select>
              </div>
            </div>
            <div class="field">
              <label class="label">Quel a été votre revenu tiré de cet emploi durant les 30 derniers jours ?</label>
              <div class="control">
                <input id="e24" class="input" type="number" placeholder="Text input">
              </div>
            </div>
          </div>
  </div>
  <div class="q_form" id=6>
    <h2>SECTION E : EMPLOI (Suite)</h2>
    <div class="content-forms-small-left-third">
      <div class="field">
        <label class="label">Est-ce que ce revenu de travail a varié au cours des 12 derniers mois ?</label>
        <div class="control">
          <select id="e25">
            <option></option>
            <option>Oui</option>
            <option>Non</option>
          </select>
        </div>
      </div>
      <div class="field">
        <label class="label">Avez-vous exercé d’autres activités en même temps que l’emploi principal au cours des 12 derniers mois ?</label>
        <div class="control">
          <select id="e26">
            <option></option>
            <option>Oui</option>
            <option>Non</option>
          </select>
        </div>
      </div>
      <div class="field">
        <label class="label">Quel est l’emploi qui vous a le plus occupé après l’emploi principal au cours des 12 derniers mois ?</label>
        <div class="control">
          <select id="e27">
            <option></option>
            <option>Electricien</option>
            <option>Commerçant</option>
            <option>Agriculteur</option>
            <option>Eleveur</option>
            <option>Domestique/Ménagère</option>
            <option>Chasseur</option>
            <option>Bûcheron</option>
            <option>Couturier</option>
            <option>Maçon</option>
            <option>Secrétaire</option>
            <option>Artisanat</option>
            <option>Enseignant</option>
            <option>Autres</option>
          </select>
        </div>
      </div>
      <div class="field">
        <label class="label">Dans quelle branche d’activité avez-vous exercé cet emploi ?</label>
        <div class="control">
          <select id="e28">
            <option></option>
            <option>Agropastorale</option>
            <option>Education</option>
            <option>Administration</option>
            <option>Construction</option>
            <option>Action sociale</option>
            <option>Ingénierie</option>
            <option>Autres</option>
          </select>
        </div>
      </div>
      <div class="field">
        <label class="label">Cet emploi secondaire a-t-elle amélioré votre condition de vie ?</label>
        <div class="control">
          <select id="e29">
            <option></option>
            <option>Oui</option>
            <option>Non</option>
          </select>
        </div>
      </div>
    </div>
    <div class="content-forms-small-left-third">
      <div class="field">
        <label class="label">Au cours des 30 derniers jours, quel est le revenu que vous avez eu de cet emploi secondaire ?</label>
        <div class="control">
          <input id="e30" class="input" type="number" placeholder="Text input">
        </div>
      </div>
      <div class="field">
        <label class="label">Combien de mois avez-vous travaillez dans cet emploi secondaire durant les 12 derniers mois ?</label>
        <div class="control">
          <input id="e31" class="input" type="number" placeholder="Text input">
        </div>
      </div>
      <div class="field">
        <label class="label">Avant votre emploi principal au cours des 12 derniers mois, avez-vous occupez une autre activité ?</label>
        <div class="control">
          <select id="e32">
            <option></option>
            <option>Oui</option>
            <option>Non</option>
          </select>
        </div>
      </div>
      <div class="field">
        <label class="label">Quel est cet emploi ?</label>
        <div class="control">
          <select id="e33">
            <option></option>
            <option>Electricien</option>
            <option>Commerçant</option>
            <option>Agriculteur/Eleveur</option>
            <option>Domestique/Ménagère</option>
            <option>Chasseur</option>
            <option>Bûcheron</option>
            <option>Couturier</option>
            <option>Maçon</option>
            <option>Secrétaire</option>
            <option>Forces armé et sécurité</option>
            <option>Artisanat/Boulanger</option>
            <option>Cadres supérieurs, moyens, subalternes, employés, manoeuvres, professions libérales)</option>
            <option>Coiffure</option>
            <option>Transporteur</option>
            <option>Autres</option>
          </select>
        </div>
      </div>
      <div class="field">
        <label class="label">Vous avez exercé cet emploi pendant combien de temps ? (Nombre en mois)</label>
        <div class="control">
          <input id="e34" class="input" type="number" placeholder="Text input">
        </div>
      </div>
    </div>
    <div class="content-forms-small-left-third">
      <div class="field">
        <label class="label">Dans quelle branche d’activité avez-vous exercé cet emploi ?</label>
        <div class="control">
          <select id="e35">
            <option></option>
            <option>Agropastorale</option>
            <option>Education</option>
            <option>Administration</option>
            <option>Construction</option>
            <option>Action sociale</option>
            <option>Ingénierie</option>
            <option>Autres</option>
          </select>
        </div>
      </div>
      <div class="field">
        <label class="label">Dans cette activité, avez-vous droit à une pension retraite ?</label>
        <div class="control">
          <select id="e36">
            <option></option>
            <option>Oui</option>
            <option>Non</option>
          </select>
        </div>
      </div>
      <div class="field">
        <label class="label">Quelle était votre condition de vie dans cette activité ?</label>
        <div class="control">
          <select id="e37">
            <option></option>
            <option>Faible</option>
            <option>Moyen</option>
            <option>Passable</option>
            <option>Assez bien</option>
            <option>Bien</option>
            <option>Très bien</option>
          </select>
        </div>
      </div>
      <div class="field">
        <label class="label">Avez-vous droit à des congés payés dans ce travail ?</label>
        <div class="control">
          <select id="e38">
            <option></option>
            <option>Oui</option>
            <option>Non</option>
          </select>
        </div>
      </div>
      <div class="field">
        <label class="label">Quelle était la raison principale de votre départ de l’emploi précédent ?</label>
        <div class="control">
          <input id="e39" class="input" type="text" placeholder="Text input">
        </div>
      </div>
      <div class="field">
          <div class="control">
                <button id="e_submit" class="button is-primary">Ajouter</button>
          </div>
      </div>
    </div>
  </div>
  <div class="q_form" id=7>
    <h2>SECTION F : AVOIRS DU MENAGE « cette section concerne le chef du ménage »</h2>
    <div class="content-forms-small-left-third">
      <div class="field">
        <label class="label">Quelle est votre situation dans ce terrain ?</label>
        <div class="control">
          <select id="f1">
            <option></option>
            <option>Locataire (Paye en argent ou en nature)</option>
            <option>Propriétaire avec titre foncier</option>
            <option>Propriétaire avec certificat de propriété</option>
            <option>Propriétaire avec droit coutumier</option>
            <option>Propriétaire avec abandon du droit coutumier</option>
            <option>Propriétaire avec certificat d’achat</option>
          </select>
        </div>
      </div>
      <div class="field">
        <label class="label">Est-ce que votre logement dispose des pièces suivantes ?</label>
        <div class="control">
          <select id="f2a">
            <option></option>
            <option id="f2a1">Chambres à coucher</option>
            <option id="f2a2">Cuisines</option>
            <option id="f2a3">Salle de bain</option>
            <option id="f2a4">Salle à manger/Salon</option>
          </select>
        </div>
      </div>
      <div class="field">
        <label class="label">Existe-t-il une pièce aménagée pour la cuisine ?</label>
        <div class="control">
          <select id="f2b">
            <option></option>
            <option>Oui</option>
            <option>Non</option>
          </select>
        </div>
      </div>
      <div class="field">
        <label class="label">Quelles sont les superficies de vos terres ayant un titre de propriété coutumier ou légal ? (Superficie en hectare ou en décimale)</label>
        <div class="control">
          <select id="f3">
            <option></option>
            <option>Supérieur à 1 Ha</option>
            <option>Inférieur à 1 Ha</option>
          </select>
        </div>
      </div>
      <div class="field">
        <label class="label">Comparaison des superficies des terres possédées actuellement à celles possédées (s) il y’a un an ?</label>
        <div class="control">
          <select id="f4">
            <option></option>
            <option>Identique</option>
            <option>Pas eu de terre il y’a un an</option>
            <option>Plus d’un Ha</option>
            <option>Moins d’un Ha</option>
          </select>
        </div>
      </div>
      <div class="field">
        <label class="label">En dehors des terres qui sont votre propriété avec droit coutumier ou légal, est ce que vous :</label>
        <div class="control">
          <select id="f5">
            <option></option>
            <option>Exploitez les terres louées</option>
            <option>Exploitez des terres empruntées</option>
            <option>Exploitez des terres offertes comme cadeau</option>
            <option>Exploitez des terres gagées</option>
            <option>Aucune réponse</option>
          </select>
        </div>
      </div>
      <div class="field">
        <label class="label">Quelle est la superficie de ces terres qui ne sont pas votre propriété ?</label>
        <div class="control">
          <input id="f6" class="input" type="test" placeholder="Text input">
        </div>
      </div>
    </div>
    <div class="content-forms-small-left-third">
      <div class="field">
        <label class="label">Comparaison des superficies de ces terres à celles donc vous disposez il y’a une année ?
Nb : Ecrire la superficie à l’espace indiqué</label>
        <div class="control">
          <select id="f7">
            <option></option>
            <option>Identique</option>
            <option>Pas eu de terre il y’a un an</option>
            <option>Superficie supérieur à 1 hectare</option>
            <option>Superficie inférieur à 1 hectare</option>
            <option>Superficie en mètre carré</option>
          </select>
        </div>
      </div>
      <div class="field">
        <label class="label">Combien de gros bétail et grand troupeau possédez-vous actuellement ? « voire code 0001 » </label>
        <div class="control">
          <select id="f8">
            <option></option>
            <option>Boeufs</option>
            <option>Chevaux</option>
            <option>Vaches</option>
            <option>Autres</option>
          </select>
        </div>
      </div>
      <div class="field">
        <label class="label">Combien de têtes de gros bétail possédiez-vous il y’a un an ?</label>
        <div class="control">
          <select id="f9">
            <option></option>
            <option>Vaches</option>
            <option>Chevaux</option>
            <option>Boeufs</option>
            <option>Autres</option>
          </select>
        </div>
      </div>
      <div class="field">
        <label class="label">Combien de têtes de bétails moyens possédez-vous actuellement ?</label>
        <div class="control">
          <select id="f10">
            <option></option>
            <option>Moutons</option>
            <option>Chèvres</option>
            <option>Porcs</option>
            <option>Bouc</option>
            <option>Autres</option>
          </select>
        </div>
      </div>
      <div class="field">
        <label class="label">Combien de têtes de bétails moyens avez-vous possédez il y’a un an ?</label>
        <div class="control">
          <select id="f11">
            <option></option>
            <option>Moutons</option>
            <option>Chèvres</option>
            <option>Porcs</option>
            <option>Bouc</option>
            <option>Autres</option>
          </select>
        </div>
      </div>
    </div>
    <div class="content-forms-small-left-third">
      <div class="field">
        <label class="label">Les avoirs du ménage ci-après sont en état de marche ?</label>
        <div class="control">
            <label class="radio">
              <label class="label">Télévision</label>
              <input id="f1201" type="checkbox">
            </label>
            <div class="control">
                <label class="radio">
                  <label class="label">Poste radio</label>
                  <input id="f1202" type="checkbox">
                </label>
            </div>
            <div class="control">
                <label class="radio">
                  <label class="label">Cuisinière à Gaz</label>
                  <input id="f1203" type="checkbox">
            </div>
            <div class="control">
                <label class="radio">
                  <label class="label">Réchaud à pétrole</label>
                  <input id="f1204" type="checkbox">
            </div>
            <div class="control">
                <label class="radio">
                  <label class="label">Mixeur</label>
                <input id="f1205" type="checkbox">
            </div>
            <div class="control">
                <label class="radio">
                  <label class="label">Congélateur/frigo</label>
                <input id="f1206" type="checkbox">
            </div>
            <div class="control">
                <label class="radio">
                  <label class="label">Moto</label>
                <input id="f1207" type="checkbox">
            </div>
            <div class="control">
                <label class="radio">
                  <label class="label">Pousse-pousse/brouette</label>
                  <input id="f1208" type="checkbox">
            </div>
        </div>
      </div>
      <div class="control">
          <label class="radio">
            <label class="label">Antenne Canalsat</label>
            <input id="f1209" type="checkbox">
          </label>
      </div>
      <div class="control">
        <label class="radio">
            <label class="label">Téléphone fixe/ portable</label>
            <input id="f1210" type="checkbox">
            </label>
      </div>
      <div class="control">
          <label class="radio">
            <label class="label">Micro-onde</label>
            <input id="f1211" type="checkbox">
          </label>
      </div>
    </div>
    <div class="content-forms-small-left-third">
      <div class="control">
          <label class="radio">
            <label class="label">Pousse-pousse/brouette</label>
            <input id="f1212" type="checkbox">
            </label>
      </div>
      <div class="control">
          <label class="radio">
            <label class="label">Voiture</label>
            <input id="f1213" type="checkbox">
            </label>
      </div>
      <div class="control">
          <label class="radio">
            <label class="label">Vélo</label>
            <input id="f1214" type="checkbox">
            </label>
      </div>
      <div class="control">
          <label class="radio">
            <label class="label">Autres</label>
            <input id="f1215" type="checkbox">
            </label>
      </div>
      <div class="field">
        <label class="label">Quel est le système d’énergie propre <br/>au ménage qui fonctionne actuellement ?</label>
        <div class="control">
          <select id="f13">
            <option></option>
            <option>Enéo</option>
            <option>Energie solaire</option>
            <option>Groupe électrogène</option>
            <option>Lampe à pétrole</option>
            <option>Energie hydraulique</option>
            <option>Energie éolienne</option>
            <option>Lampes torches</option>
            <option>Autres</option>
          </select>
        </div>
      </div>
      <div class="field">
        <label class="label">Les besoins alimentaires du ménage au cours des 12 derniers mois ont été satisfaits :</label>
        <div class="control">
          <select id="f14">
            <option></option>
            <option>Rarement</option>
            <option>Quelques fois</option>
            <option>Souvent</option>
            <option>Toujours</option>
          </select>
        </div>
      </div>
      <div class="field">
        <label class="label">Comment était la situation du ménage comparée à celle il y’a un an ?</label>
        <div class="control">
          <select id="f15">
            <option></option>
            <option>Faible</option>
            <option>Moyen</option>
            <option>Passable</option>
            <option>Assez bien</option>
            <option>Bien</option>
            <option>Très bien</option>
            <option>Excellent</option>
          </select>
        </div>
      </div>
      <div class="field">
        <label class="label">Qui contribue le plus au besoin du ménage ?</label>
        <div class="control">
          <select id="f17">
            <option></option>
            <option>Extérieur du ménage</option>
            <option>Chef de ménage</option>
            <option>Epouse chef de ménage</option>
            <option>Fils/fille chef de ménage</option>
            <option>Neveu/nièce chef de ménage</option>
            <option>Autres</option>
          </select>
        </div>
      </div>
      <div class="field">
        <label class="label">Le ménage dispose-t-il d’un stock de céréales jusqu’à la prochaine récolte ?</label>
        <div class="control">
          <select id="f18">
            <option></option>
            <option>Oui</option>
            <option>Non</option>
          </select>
        </div>
      </div>
      <div class="field">
        <label class="label">Si non pourquoi ?</label>
        <div class="control">
          <input id="f19" class="input" type="text" placeholder="Text input">
        </div>
      </div>
    </div>
  </div>
  <div class="q_form" id=8>
    <h2>SECTION G : LOGEMENT ET CONFORT DU MENAGE « cette section concerne le chef du ménage »</h2>
    <div class="content-forms-small-left-third">
      <div class="field">
        <label class="label">Quel est le type principal de matériau du toit utilisé pour la couverture de votre habitation ?
(Notez le matériau principal) et à observer</label>
        <div class="control">
          <select id="g1">
            <option></option>
            <option>Tôles</option>
            <option>Tuiles</option>
            <option>Pailles</option>
            <option>Feuilles tissées</option>
            <option>Autres</option>
          </select>
        </div>
      </div>
      <div class="field">
        <label class="label">Quel est le matériau principal utilisé pour la construction De votre logement ? (et à observer)</label>
        <div class="control">
          <select id="g2">
            <option></option>
            <option>Parpaing</option>
            <option>Brique de terre</option>
            <option>Torchis (poto-poto)</option>
            <option>Planches</option>
            <option>Autres</option>
          </select>
        </div>
      </div>
      <div class="field">
        <label class="label">Quelle est la principale source d’eau de boisson ?(une seule modalité est possible)
(Si A, allez à G3b. Si B écrivez automatiquement NON G3b)</label>
<label class="label">A) Sources d’eau salubre</label>
      <div class="control">
        <select id="g3a1">
          <option></option>
          <option>Robinet</option>
          <option>Forage</option>
          <option>Puits fermé</option>
          <option>Puits fermé et aménagé</option>
          <option>Bonne fontaine</option>
          <option>Sources aménagées</option>
        </select>
      </div>
      <label class="label">B) Sources d’eau non salubre</label>
      <div class="control">
        <select id="g3a2">
          <option></option>
          <option>Sources ouvertes/non aménagées</option>
          <option>Puits ouverts</option>
          <option>Lacs</option>
          <option>Rivière</option>
        </select>
      </div>
      </div>
      <div class="field">
        <label class="label">Existe-t-elle dans votre ménage ?</label>
        <div class="control">
          <select id="g3b">
            <option></option>
            <option>Oui</option>
            <option>Non</option>
          </select>
        </div>
      </div>
      <div class="field">
        <label class="label">Quel est le type de toilette principal utilisé dans le ménage ? (une seule modalité est possible)</label>
        <div class="control">
          <select id="g4">
            <option></option>
            <option>WC avec chasse d’eau et fosse septique</option>
            <option>Latrines ordinaires</option>
            <option>Latrines à fosse ventilée</option>
            <option>Fosse artisanal/canon</option>
          </select>
        </div>
      </div>
    </div>
    <div class="content-forms-small-left-third">
      <div class="field">
        <label class="label">Quelle est la principale source de combustible pour la cuisine ?</label>
        <div class="control">
          <select id="g5">
            <option></option>
            <option>Electricité</option>
            <option>Energie solaire</option>
            <option>Gaz</option>
            <option>Pétrole</option>
            <option>Bois</option>
            <option>Charbon</option>
          </select>
        </div>
      </div>
      <div class="field">
        <label class="label">Quel est le temps mis pour atteindre les installations les plus proches de votre ménage ?</label>
        <div class="control">
          <select id="g6a">
            <option></option>
            <option id="g6a1">Marchés des produits alimentaires</option>
            <option id="g6a2">Marchés des produits cosmétiques</option>
            <option id="g6a3">Ecole primaire</option>
            <option id="g6a4">Ecole secondaire</option>
            <option id="g6a5">Ecole universitaire</option>
            <option id="g6a6">Structures de formations</option>
            <option id="g6a7">Structure sanitaire</option>
            <option id="g6a8">Structures administratives</option>
            <option id="g6a9">Points d’eau</option>
          </select>
        </div>
        <div class="field">
          <label class="label">Quel est le principal moyen de déplacement le plus utilisé ?</label>
          <div class="control">
            <select id="g6b">
              <option></option>
              <option>Moto</option>
              <option>Marche</option>
              <option>Taxi</option>
              <option>Car</option>
              <option>Vélo</option>
              <option>Voiture personnelle</option>
              <option>Voiture de transport</option>
              <option>Train</option>
              <option>Bus de ligne</option>
              <option>Autres</option>
            </select>
          </div>
        </div>
        <div class="field">
          <label class="label">Comment appelle-t-on votre lieu de résidence ?</label>
          <div class="control">
            <input id="g7" class="input" type="text" placeholder="Text input">
          </div>
        </div>
      </div>
    </div>
    <div class="content-forms-small-left-third">
      <div class="field">
        <label class="label">Quel est le matériau principal de construction du sol de votre ménage ?  (une seule modalité est possible) et à observer</label>
        <div class="control">
          <select id="g8">
            <option></option>
            <option>Sable+ciment (non lissé)</option>
            <option>Sable+ciment (lissé)</option>
            <option>Carreaux</option>
            <option>Terre nue</option>
            <option>Autres</option>
          </select>
        </div>
      </div>
      <div class="field">
        <label class="label">Quel est le type de logement dans lequel vous habitez ?</label>
        <div class="control">
          <select id="g9">
            <option></option>
            <option>Immeuble à appartement</option>
            <option>Villa</option>
            <option>Maison individuel simple</option>
            <option>Maison traditionnel ou case</option>
            <option>Hutte</option>
            <option>Autres</option>
          </select>
        </div>
      </div>
      <div class="field">
        <label class="label">Quel est le système d’évacuation des ordures dans le ménage ?</label>
        <div class="control">
          <select id="g10">
            <option></option>
            <option>Poubelle</option>
            <option>Existence d’un service de ramassage/collecte</option>
            <option>Dans la rivière</option>
            <option>Autres</option>
          </select>
        </div>
      </div>
    </div>
  </div>
  <div class="q_form" id=9>
    <h2>SECTION H : QUESTIONS SUR LES ENFANTS AGÉS DE MOINS DE CINQ ANS << cette section concerne tous les enfants âgés de 0 à 4 ans et de leurs mères. >></h2>
    <table class="table">
          <tr>
            <th>Nom enfant</th>
            <th>Code mère de l’enfant</th>
            <th>H2 : Date de naissance de l’enfant ?</th>
            <th>H3 : Lieu de naissance de l’enfant ?</th>
            <th>Poids enfant (en Kg)</th>
            <th>Taille enfant (en cm)</th>
            <th>H5 : Participation au programme <br/> de santé et de nutrition des enfants ?</th>
            <th>H6 : Personne ayant assisté à  l’accouchement de l’enfant?</th>
          </tr>
          <tr>
            <td>
              <div class="select">
                <select id="h1">
                  <option></option>
                </select>
              </div>
            </td>
            <td>
              <div class="select">
                <select id="h2">
                  <option></option>
                </select>
              </div>
            </td>
            <td><input id="h3" class="input" type="date" placeholder="Text input"></td>
            <td>
                <input id="h4" class="input" type="text" placeholder="Text input">
            </td>
            <td>
              <input id="h5" class="input" type="number" placeholder="Text input">
            </td>
            <td>
              <input id="h6" class="input" type="number" placeholder="Text input">
            </td>
            <td>
              <div class="select">
                <select id="h7">
                  <option></option>
                  <option>Oui</option>
                  <option>Non</option>
                </select>
              </div>
            </td>
            <td>
              <div class="select">
                <select id="h8">
                  <option></option>
                  <option>Membre ménage</option>
                  <option>Famille</option>
                  <option>Proche</option>
                </select>
              </div>
            </td>
            <td>
              <div class="control">
                    <button id="h_submit" class="button is-primary">Ajouter</button>
                  </div>
            </td>
          </tr>

  </table>
  </div>
  <div class="q_form" id=10>
    <h2>MODULE I : DEPENSES RETROSPECTIVES DU MENAGE « cette section concerne le chef du ménage »</h2>
    <div class="content-forms-small-left-third">
      <div class="field">
        <label class="label">Quels ont les dépenses scolaires du ménage pour l’année 2017/2018 ?</label>
        <div class="control">
          <select id="i1">
            <option></option>
            <option id="i11">Frais de scolarité</option>
            <option id="i12">Livres et fournitures scolaires</option>
            <option id="i13">Uniformes scolaires</option>
            <option id="i14">Frais de transport scolaire</option>
            <option id="i15">Cotisation des parents d’élèves (APE)</option>
            <option id="i16">Autres cotisation scolaires</option>
          </select>
        </div>
      </div>
      <div class="field">
        <label class="label">Quels sont les dépenses scolaires du ménage pour l’année en cours ?</label>
        <div class="control">
          <select id="i2">
            <option></option>
            <option id="i21">Frais de scolarité</option>
            <option id="i22">Livres et fournitures scolaires</option>
            <option id="i23">Uniformes scolaires</option>
            <option id="i24">Frais de transport scolaire</option>
            <option id="i25">Cotisations des parents d’élève (APE)</option>
            <option id="i26">Autres cotisations scolaires</option>
          </select>
        </div>
      </div>
      <div class="field">
        <label class="label">Quelles ont été les dépenses de santé du ménage au cours des 30 derniers jours ?</label>
        <div class="control">
          <select id="i3">
            <option></option>
            <option id="i31">Frais d’analyse médicale</option>
            <option id="i32">Frais de consultation médicale</option>
            <option id="i33">Médicaments</option>
            <option id="i34">Frais d’hospitalisation</option>
            <option id="i35">Autres services médicaux</option>
          </select>
        </div>
      </div>
    </div>
    <div class="content-forms-small-left-third">
        <div class="field">
          <label class="label">Quelles sont les dépenses d’intrants agricoles du ménage pour l’année 2017/2018 ?</label>
          <div class="control">
            <select id="i4">
              <option></option>
              <option id="i41">Semences</option>
              <option id="i42">Engrais</option>
              <option id="i43">Produits phytosanitaires</option>
              <option id="i44">Mains d’oeuvres</option>
              <option id="i45">Réparation de matériels agricole</option>
              <option id="i46">Location/achat du matériel agricole</option>
            </select>
          </div>
        </div>
      </div>
  </div>
  <div class="q_form" id=11>
    <h2>MODULE J : PRODUCTION AGRICOLE DE LA CAMPAGNE 2017/2018 « cette section concerne le chef du ménage. »</h2>
    <div class="content-forms-small-left-third">
      <div class="field">
        <label class="label">Quels sont les produits agricoles que vous avez cultivés pour l’année 2017-2018 ?</label>
        <div class="control">
          <select id="j1">
            <option></option>
            <option id="j101">Mais</option>
            <option id="j102">Manioc</option>
            <option id="j103">Banane plantain</option>
            <option id="j104">Macabo</option>
            <option id="j105">Taro</option>
            <option id="j106">Ignames</option>
            <option id="j107">Patates</option>
            <option id="j108">Piments</option>
            <option id="j109">Pistaches</option>
            <option id="j110">Haricots</option>
            <option id="j111">Cacao</option>
            <option id="j112">Palmier à huile</option>
            <option id="j113">Café</option>
            <option id="j114">Okok</option>
            <option id="j115">Tomates</option>
            <option id="j116">Carottes</option>
            <option id="j117">Autres</option>
          </select>
        </div>
      </div>
      <div class="field">
        <label class="label">Quels ont été les facilitateurs pour la vente de ces produits ?</label>
        <div class="control">
          <select id="j2">
            <option></option>
            <option>Marché</option>
            <option>Négociants</option>
            <option>Coopérative</option>
            <option>Office de commercialisation</option>
            <option>Autres</option>
          </select>
        </div>
      </div>
      <div class="field">
        <label class="label">Avez-vous utilisé les semences sélectionnées ?</label>
        <div class="control">
          <select id="j3">
            <option></option>
            <option>Oui</option>
            <option>Non</option>
          </select>
        </div>
      </div>
      <div class="field">
        <label class="label">Avez-vous reçu les services d’encadrements pour vos produits agricoles 2016/2017 ?</label>
        <div class="control">
          <select id="j4">
            <option></option>
            <option>Oui</option>
            <option>Non</option>
          </select>
        </div>
      </div>
      <div class="field">
        <label class="label">Avez-vous utilisé les engrais pour vos produits agricoles ?</label>
        <div class="control">
          <select id="j5">
            <option></option>
            <option>Oui</option>
            <option>Non</option>
          </select>
        </div>
      </div>
      <div class="field">
        <label class="label">Pourquoi n’avez-vous pas utilisé de l’engrais pour vos produits agricoles ?
Nb : Choisir la raison principale)</label>
        <div class="control">
          <select id="j6">
            <option></option>
            <option>Manque de moyens financiers</option>
            <option>Cherté des engrais</option>
            <option>Pas besoins des engrais</option>
            <option>Autres</option>
          </select>
        </div>
      </div>
    </div>
    <div class="content-forms-small-left-third">
      <div class="field">
        <label class="label">Avez-vous sollicité un crédit agricole pour vos produits agricoles ?</label>
        <div class="control">
          <select id="j7">
            <option></option>
            <option>Oui</option>
            <option>Non</option>
          </select>
        </div>
      </div>
      <div class="field">
        <label class="label">Avez-vous obtenu ce crédit agricole ?</label>
        <div class="control">
          <select id="j8">
            <option></option>
            <option>Oui</option>
            <option>Non</option>
          </select>
        </div>
      </div>
      <div class="field">
        <label class="label">Pourquoi n’avez-vous pas sollicité de crédit agricole ?</label>
        <div class="control">
          <select id="j9">
            <option></option>
            <option>Pas besoin</option>
            <option>As déjà les moyens</option>
            <option>Pas de structure pour crédit agricole</option>
            <option>Autres</option>
          </select>
        </div>
      </div>
      <div class="field">
        <label class="label">Quel est le nombre d’employé que vous avez utilisé pour le programme agricole 2016/2017 ?</label>
        <div class="control">
          <input id="j10" class="input" type="number" placeholder="Text input">
        </div>
      </div>
      <div class="field">
        <label class="label">Quels sont les matériels que vous avez utilisés pour la production agricole 2016/2017 ?</label>
        <div class="control">
          <select id="j11">
            <option></option>
            <option>Machette</option>
            <option>Houe</option>
            <option>Pioche</option>
            <option>Daba</option>
            <option>Tracteur</option>
            <option>Pompe à moteur</option>
          </select>
        </div>
      </div>
    </div>
  </div>
  <div class="q_form" id=12>
    <h2>MODULE K : ENTREPRISES ET ACTIVITES NON AGRICOLES « cette section concerne le chef du ménage. »</h2>
    <div class="content-forms-small-left-third">
      <div class="field">
        <label class="label">Le ménage/membre possède-t-il les activités/entreprises non agricoles ?</label>
        <div class="control">
          <select id="k1">
            <option></option>
            <option>Oui</option>
            <option>Non</option>
          </select>
        </div>
      </div>
      <div class="field">
        <label class="label">Quelles sont ces activités non agricoles que possède le ménage/membre ?(Trois entreprises principales sont notées ici)</label>
        <div class="control">
          <select id="k2">
            <option></option>
            <option>Elevage</option>
            <option>Chasse</option>
            <option>Pêche</option>
            <option>Transport</option>
            <option>Commerce</option>
            <option>Enseignement</option>
            <option>Coiffure</option>
            <option>Transport</option>
            <option>Electricité</option>
            <option>Maçon</option>
            <option>Domestique/ménagère</option>
            <option>Force armée et sécurité</option>
            <option>Buvette/restauration</option>
            <option>Autres</option>
          </select>
        </div>
      </div>
      <div class="field">
        <label class="label">Quel est le membre du ménage responsable de l’entreprise ?</label>
        <div class="control">
          <select id="k3">
            <option></option>
          </select>
        </div>
      </div>
      <div class="field">
        <label class="label">L’entreprise fonctionne depuis combien d’année ?(A écrire à la colonne code le nombre d’année, si moins d’un an, écrire 00)</label>
        <div class="control">
          <input id="k4" class="input" type="number" placeholder="Text input">
        </div>
      </div>
      <div class="field">
        <label class="label">Quel est le nombre de mois durant lesquels l’entreprise a fonctionnée ?(A écrire à la colonne code le nombre de mois)</label>
        <div class="control">
          <input id="k5" class="input" type="number" placeholder="Text input">
        </div>
      </div>
    </div>
    <div class="content-forms-small-left-third">
      <div class="field">
        <label class="label">Cette entreprise est-elle en activité actuellement ?</label>
        <div class="control">
          <select id="k6">
            <option></option>
            <option>Oui</option>
            <option>Non</option>
          </select>
        </div>
      </div>
      <div class="field">
        <label class="label">Quel est l’effectif des personnes qui travaillent actuellement dans l’entreprise ?</label>
        <div class="control">
          <input id="k7" class="input" type="number" placeholder="Text input">
        </div>
      </div>
      <div class="field">
        <label class="label">Quel etait le nombre de personnes qui travaillaient régulièrement dans cette entreprise il y a 12 mois ?
          (A écrire à la colonne code le nombre de personnes, si elles n’existent pas il y’a 12 mois, écrire 88)
        </label>
        <div class="control">
          <input id="k8" class="input" type="number" placeholder="Text input">
        </div>
      </div>
      <div class="field">
        <label class="label">Quelle était la dépense totale de l’entreprise par mois ?
        </label>
        <div class="control">
          <input id="k9" class="input" type="number" placeholder="Text input">
        </div>
      </div>
      <div class="field">
        <label class="label">Quelle était la dépense totale de l’entreprise par mois ?
        </label>
        <div class="control">
          <input id="k10" class="input" type="number" placeholder="Text input">
        </div>
      </div>
    </div>
    <div class="content-forms-small-left-third">
      <div class="field">
        <label class="label">Combien aviez-vous payez aux impôts et aux taxes par an ?
        </label>
        <div class="control">
          <input id="k11" class="input" type="number" placeholder="Text input">
        </div>
      </div>
      <div class="field">
        <label class="label">Le revenu de votre entreprise a-t-il évolué au cours des 02 dernières années ?</label>
        <div class="control">
          <select id="k12">
            <option></option>
            <option>Oui</option>
            <option>Non</option>
          </select>
        </div>
      </div>
      <div class="field">
        <label class="label">Si oui, de combien ?
        </label>
        <div class="control">
          <input id="k13" class="input" type="number" placeholder="Text input">
        </div>
      </div>
      <div class="field">
        <label class="label">Quelle était la raison principale de cette évolution ?</label>
        <div class="control">
          <select id="k14">
            <option></option>
            <option>Augmentation des capitaux</option>
            <option>Augmentation des partenaires</option>
            <option>Forte demande de la clientèle</option>
            <option>Augmentation des produits de vente</option>
            <option>Autres</option>
          </select>
        </div>
      </div>
      <div class="field">
        <label class="label">Quelles étaient les autres sources de revenus que vous disposez ?</label>
        <div class="control" id="k15">
          <div class="control">
              <label class="radio">
                <label class="label">Jeux du hasard (Pari-foot et PMUC)</label>
                <input id="k1501" type="checkbox">
              </label>
          </div>
          <div class="control">
              <label class="radio">
                <label class="label">Primes</label>
                <input id="k1502" type="checkbox">
              </label>
          </div>
          <div class="control">
              <label class="radio">
                <label class="label">Cotisations/Tontines</label>
                <input id="k1503" type="checkbox">
              </label>
          </div>
          <div class="control">
              <label class="radio">
                <label class="label">Heures supplémentaires</label>
                <input id="k1504" type="checkbox">
              </label>
          </div
          <div class="control">
              <label class="radio">
                <label class="label">Autres</label>
                <input id="k1505" type="checkbox">
              </label>
          </div>
        </div>
      </div>
    </div>
  <div class="q_form" id=13>
    <h2>MODULE L : DEPENSES ALIMENTAIRES DU MENAGE « cette section concerne le chef du ménage. »</h2>
    <div class="content-forms-small-left-third">
      <div class="field">
        <label class="label">Avez-vous fait les dépenses alimentaires du ménage au cours des 15 derniers jours ?</label>
        <div class="control">
          <select id="l1">
            <option></option>
            <option>Oui</option>
            <option>Non</option>
          </select>
        </div>
      </div>
      <div class="field">
        <label class="label">Avez-vous dépensé sur les produits suivants au cours
des 15 derniers jours ?
(Nb : Si le produit du ménage vient du champ, inscrire 1, par contre si le produit n’a pas été acheté, inscrire 0)</label>
        <div class="control">
          <select id="l2">
            <option></option>
            <option id="l201">Macabo</option>
            <option id="l202">Manioc</option>
            <option id="l203">Igname</option>
            <option id="l204">Patate</option>
            <option id="l205">Taro</option>
            <option id="l206">Plantains</option>
            <option id="l207">Poissons</option>
            <option id="l208">Viandes</option>
            <option id="l209">Gombo</option>
            <option id="l210">Arachides</option>
            <option id="l211">Mais</option>
            <option id="l212">Haricots</option>
            <option id="l213">Pistache</option>
            <option id="l214">Légumes</option>
            <option id="l215">Autres</option>
          </select>
        </div>
      </div>
      <div class="field">
        <label class="label">Au cours des 15 derniers jours, quels sont les cadeaux alimentaires que vous avez reçus et consommés ?</label>
        <div class="control">
          <select id="l3">
            <option></option>
            <option id="l301">Macabo</option>
            <option id="l302">Manioc</option>
            <option id="l303">Igname</option>
            <option id="l304">Patate</option>
            <option id="l305">Taro</option>
            <option id="l306">Plantains</option>
            <option id="l307">Poissons</option>
            <option id="l308">Viandes</option>
            <option id="l309">Gombo</option>
            <option id="l310">Arachides</option>
            <option id="l311">Mais</option>
            <option id="l312">Haricots</option>
            <option id="l313">Pistache</option>
            <option id="l314">Légumes</option>
            <option id="l315">Autres</option>
          </select>
        </div>
      </div>
      <div class="field">
        <label class="label">Ligne pour ménage ne maitrisant pas ses dépenses alimentaires au cours des 15 derniers jours (inscrire 99 à la colonne code)
        </label>
        <div class="control">
          <input id="l4" class="input" type="number" placeholder="Text input">
        </div>
      </div>
    </div>
  </div>
  <div class="q_form" id=14>
    <h2>MODULE M : DEPENSES NON ALIMENTAIRES DU MENAGE DES 30 JOURS «cette section concerne le chef du ménage.»</h2>
    <div class="content-forms-small-left-third">
      <div class="field">
        <label class="label">Avez-vous dépensé de l’argent au cours des 30 derniers jours autre que l’alimentation ?</label>
        <div class="control">
          <select id="m1">
            <option></option>
            <option>Oui</option>
            <option>Non</option>
          </select>
        </div>
      </div>
      <div class="field">
        <label class="label">Quelles sont les dépenses non alimentaires du ménage au cours des 30 derniers jours ? «plusieurs modalités sont possibles»</label>
        <div class="control">
            <label class="radio">
              <label class="label">Transport</label>
              <input id="m201" class="input" type="number" placeholder="Valeur">
            </label>
            <br/>
            <label class="radio">
              <label class="label">Scolarisation</label>
              <input id="m202" class="input" type="number" placeholder="Valeur">
            </label>
            <br/>
            <label class="radio">
              <label class="label">Vestimentaire</label>
              <input id="m203" class="input" type="number" placeholder="Valeur">
            </label>
            <br/>
            <label class="radio">
              <label class="label">Factures (Eau, électricité)</label>
              <input id="m204" class="input" type="number" placeholder="Valeur">
            </label>
            <br/>
            <label class="radio">
              <label class="label">Outils ménagers</label>
              <input id="m205" class="input" type="number" placeholder="Valeur">
            </label>
            <br/>
            <label class="radio">
              <label class="label">Intrant/Matériels agricoles</label>
              <input id="m206" class="input" type="number" placeholder="Valeur">
            </label>
            <br/>
            <label class="radio">
              <label class="label">Santé</label>
              <input id="m207" class="input" type="number" placeholder="Valeur">
            </label>
            <br/>
            <label class="radio">
              <label class="label">Autres</label>
              <input id="m208" class="input" type="number" placeholder="Valeur">
            </label>
        </div>
      </div>
    </div>
    <div class="content-forms-small-left-third">
    <div class="field">
      <label class="label">Est-ce que ces dépenses ont évolué ?</label>
      <div class="control">
        <select id="m3">
          <option></option>
          <option>Oui</option>
          <option>Non</option>
        </select>
      </div>
    </div>
    <div class="field">
      <label class="label">Avez-vous utilisé les éléments ci-après au cours des 30 derniers jours (autoconsommation) ?</label>
      <div class="control">
        <select id="m4">
          <option></option>
          <option id="m401">Bois</option>
          <option id="m402">Charbon</option>
          <option id="m403">Loyer</option>
          <option id="m404">Eau</option>
          <option id="m405">Electricité</option>
          <option id="m406">Gaz</option>
          <option id="m407">Pétrole</option>
          <option id="m408">Achat de piles</option>
          <option id="m409">Autres</option>
        </select>
      </div>
    </div>
      <div class="field">
        <label class="label">Combien envoyez-vous hors du ménage au cours des trente derniers jours ?
        </label>
        <div class="control">
          <input id="m5" class="input" type="number" placeholder="Text input">
        </div>
      </div>
    </div>
    </div>
    <div class="q_form" id=15>
      <h2>MODULE N : SUGGESTIONS POUR AMELIORER LES CONDITIONS DE VIE DE LA POPULATION DE BIYOUHA SELON LES SECTEURS D’ACTIVITES
      </h2><h2>cette section concerne le chef du ménage.</h2>
      <div class="content-forms-small-left-third">
      <div class="field">
        <label class="label">Qu’est-ce que vous pouvez suggérer pour améliorer le secteur de la santé ? (à ne pas lire les modalités de réponses))</label>
          <div class="control">
          <label class="radio">
            <label class="label">Création des services de soins spécialisés pour enfants, adultes et personnes de troisième âge</label>
            <input id="n101" type="checkbox">
          </label>
          <label class="radio">
            <label class="label">Rapprochement des services de soins de la population</label>
            <input id="n102" type="checkbox">
          </label>
          <label class="radio">
            <label class="label">Fluidifier de la qualité du service dans les soins de santé</label>
            <input id="n103" type="checkbox">
          </label>
          <label class="radio">
            <label class="label">Rapprochement des services de soins de la population</label>
            <input id="n104" type="checkbox">
          </label>
          <label class="radio">
            <label class="label">Autres</label>
            <input id="n105" type="text">
          </label>
        </div>
      </div>
      </div>
      <div class="content-forms-small-left-third">
      <div class="field">
        <label class="label">Que pouvons-nous faire pour améliorer le secteur de l’éducation dans votre village ?</label>
          <div class="control">
          <label class="radio">
            <label class="label">Insertion socioprofessionnelle des jeunes après leurs formations</label>
            <input id="n201" type="checkbox">
          </label>
          <label class="radio">
            <label class="label">Création des structures éducatives répondant aux besoins et à la demande de la population</label>
            <input id="n202" type="checkbox">
          </label>
          <label class="radio">
            <label class="label">Pour les personnes désoeuvrées et qui désirent poursuivre les études, faciliter leur inscription dans les écoles appropriées</label>
            <input id="n203" type="checkbox">
          </label>
          <label class="radio">
            <label class="label">Ouverture d’un centre pour apprentissage en langue locale pour les jeunes</label>
            <input id="n204" type="checkbox">
          </label>
          <label class="radio">
            <label class="label">Mettre en place une bibliothèque fonctionnelle pour les apprenants</label>
            <input id="n205" type="checkbox">
          </label>
          <label class="radio">
            <label class="label">Autres</label>
            <input id="n206" type="text">
          </label>
        </div>
      </div>
      </div>
      <div class="content-forms-small-left-third">
      <div class="field">
        <label class="label">Dans quel secteur d’activités souhaiteriez-vous exercer ? (Une seule réponse est possible)</label>
          <div class="control">
          <select id="n3">
            <option></option>
            <option id="">Agro-pastorale</option>
            <option id="">Enseignement</option>
            <option id="">Commerce</option>
            <option id="">Recyclage et gestion des ordures</option>
            <option id="">Administration</option>
            <option id="">Construction</option>
            <option id="">Action sociale</option>
            <option id="">Ingénierie</option>
            <option id="">Communication</option>
            <option id="">Autres</option>
          </select>
          </div>
      </div>
          <div class="field">
            <label class="label">Que pensez-vous qu’on puisse faire pour mieux améliorer ce secteur d’activité ?</label>
              <div class="control">
              <label class="radio">
                <label class="label">Assurance d’une sécurité sociale</label>
                <input id="n401" type="checkbox">
              </label>
              <label class="radio">
                <label class="label">Disposition pour payer les congés annuels</label>
                <input id="n402" type="checkbox">
              </label>
              <label class="radio">
                <label class="label">Eviter les licenciements abusifs</label>
                <input id="n403" type="checkbox">
              </label>
              <label class="radio">
                <label class="label">Organiser les concours du meilleur projet par secteur d’activité</label>
                <input id="n404" type="checkbox">
              </label>
              <label class="radio">
                <label class="label">Mettre en place les meilleurs projets d’activité</label>
                <input id="n405" type="checkbox">
              </label><br/>
              <label class="radio">
                <label class="label">Autres</label>
                <input id="n406" type="text">
              </label>
            </div>
          </div>
      </div>
      </div>
      <div class="q_form" id=16>
        <h2>MODULE N : DEPENSES ALIMENTAIRES DU MENAGE « cette section concerne le chef du ménage. »</h2>
        <div class="content-forms-small-left-third">
        <div class="field">
          <label class="label">Quelles sont les actions qui peuvent être menées pour aider les agriculteurs dans votre village ?</label>
            <div class="control">
            <label class="radio">
              <label class="label">Création d’une école d’agricultures</label>
              <input id="n501" type="checkbox">
            </label>
            <label class="radio">
              <label class="label">Faciliter la procédure d’obtention du titre foncier pour les terres détenues</label>
              <input id="n502" type="checkbox">
            </label>
            <label class="radio">
              <label class="label">Application directe et reconnaissance de la décision du tribunal coutumier en matière de règlement de litige foncier</label>
              <input id="n503" type="checkbox">
            </label>
            <label class="radio">
              <label class="label">Mettre les agriculteurs en coopérative</label>
              <input id="n504" type="checkbox">
            </label>
            <label class="radio">
              <label class="label">Faciliter et promouvoir l’obtention des intrants naturels des produits agricoles</label>
              <input id="n505" type="checkbox">
            </label>
            <label class="radio">
              <label class="label">Campagne de sensibilisation sur la météorologie</label>
              <input id="n506" type="checkbox">
            </label>
            <label class="radio">
              <label class="label">Aménager les routes pour faciliter le déplacement dans les installations les plus proches</label>
              <input id="n507" type="checkbox">
            </label>
          </div>
        </div>
        </div>
        <div class="content-forms-small-left-third">
          <div class="field">
            <div class="control">
            <label class="radio">
              <label class="label">Transformation des produits agricoles sur place</label>
              <input id="n508" type="checkbox">
            </label>
            <label class="radio">
              <label class="label">Mettre sur pied un système de conservation des produits agricoles jusqu’à la prochaine récolte</label>
              <input id="n509" type="checkbox">
            </label>
            <label class="radio">
              <label class="label">Autres-</label>
              <input id="n510" type="text">
            </label>
            </div>
          </div>
          <hr/>
              <div class="field">
                <label class="label">Que pouvons-nous faire pour améliorer la qualité des logements dans votre village ?</label>
                  <div class="control">
                  <label class="radio">
                    <label class="label">Construction des logements avec les matériaux locaux</label>
                    <input id="n601" type="checkbox">
                  </label>
                  <label class="radio">
                    <label class="label">Construction des logements avec des matériaux contemporains</label>
                    <input id="n602" type="checkbox">
                  </label>
                  <label class="radio">
                    <label class="label">Construction des logements écologiques et durables</label>
                    <input id="n603" type="checkbox">
                  </label>
                  <label class="label">Autres</label>
                  <input id="n604" type="text">
                  </label>
                  </div>
              </div>
        </div>
        <div class="content-forms-small-left-third">
          <div class="field">
          <div class="field">
            <div class="control">
            <label class="label">Heure de fin de l’entretien</label>
              <input class="input" id="z1" type="time" min="0:00" max="23:59">
            </div>
          </div>
          </div>
        </div>
  </div>`;

export default form1;
