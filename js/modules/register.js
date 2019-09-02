const register = `<div class="register">
   <div class="field">
   <a class="navbar-item" href="#">
     <img id="home" src="images/KellaData green@2x.png" width="112" height="28">
   </a>
  <label class="label">Votre prénom</label>
  <div class="control">
    <input id="first_name" class="input" type="text" placeholder="">
  </div>
</div>

<div class="field">
  <label class="label">Votre nom</label>
  <div class="control has-icons-right">
    <input id="last_name" class="input " type="text" placeholder="">
  </div>
</div>

<div class="field">
  <label class="label">Type de compte</label>
  <div class="control">
    <div class="select">
      <select id="account_type">
        <option data-id=6 >Client</option>
        <option data-id=3>Expert</option>
        <option data-id=5 >Photographe</option>
        <option data-id=4 >Anthropologue</option>
        <option data-id=2 >Directeur de publications</option>
      </select>
    </div>
  </div>
</div>
<div class="field">
  <label class="label">Email</label>
  <div class="control">
    <input id="email" class="input " type="email" placeholder="Adresse email">
  </div>
</div>

<div class="field">
  <label class="label">Mot de passe</label>
  <div class="control">
    <input id="password" class="input " type="password" placeholder="Mot de passe">
  </div>
</div>
<div class="field">
  <label class="label">Confirmer le mot de passe</label>
  <div class="control has-icons-right">
    <input id="confirm_password" class="input " type="password" placeholder="password">
  </div>
</div>


<div class="field is-grouped">
  <div class="control">
    <button id="submitRegister" class="button is-link">S'inscrire'</button>
  </div>
</div>
</div>`;
/*
<div class="field" style ="cursor:pointer">
<label class="label">Cliquez sur le cadre pour choisir une photo de profil</label>
  <center><figure class="image is-128x128">
  <img id="profil_photo" src="https://bulma.io/images/placeholders/128x128.png">
  </figure></center>
</div>
*/
export default register;
