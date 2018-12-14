const register = `<div class="register">
   <div class="field">
  <label class="label">First name</label>
  <div class="control">
    <input id="first_name" class="input" type="text" placeholder="First name">
  </div>
</div>

<div class="field">
  <label class="label">Last name</label>
  <div class="control has-icons-right">
    <input id="last_name" class="input " type="text" placeholder="Last name">
    <span class="icon is-small is-left">
      <i class="fas fa-user"></i>
    </span>
    <span class="icon is-small is-right">
      <i class="fas fa-check"></i>
    </span>
  </div>
</div>

<div class="field">
  <label class="label">Account type</label>
  <div class="control">
    <div class="select">
      <select id="account_type">
        <option data-id=6 >Client</option>
        <option data-id=3>Expert</option>
        <option data-id=5 >Photographe</option>
        <option data-id=4 >Anthropologues</option>
        <option data-id=2 >Directeur de publications</option>
      </select>
    </div>
  </div>
</div>
<div class="field">
  <label class="label">Email</label>
  <div class="control has-icons-right">
    <input id="email" class="input " type="email" placeholder="address@email.com">
    <span class="icon is-small is-left">
      <i class="fas fa-envelope"></i>
    </span>
    <span class="icon is-small is-right">
      <i class="fas fa-exclamation-triangle"></i>
    </span>
  </div>
</div>

<div class="field">
  <label class="label">Password</label>
  <div class="control has-icons-right">
    <input id="password" class="input " type="password" placeholder="password">
    <span class="icon is-small is-left">
      <i class="fas fa-envelope"></i>
    </span>
    <span class="icon is-small is-right">
      <i class="fas fa-exclamation-triangle"></i>
    </span>
  </div>
</div>
<div class="field">
  <label class="label">Confirm password</label>
  <div class="control has-icons-right">
    <input id="confirm_password" class="input " type="password" placeholder="password">
    <span class="icon is-small is-left">
      <i class="fas fa-envelope"></i>
    </span>
    <span class="icon is-small is-right">
      <i class="fas fa-exclamation-triangle"></i>
    </span>
  </div>
</div>


<div class="field is-grouped">
  <div class="control">
    <button id="submitRegister" class="button is-link">Submit</button>
  </div>
</div>
</div>`;
export default register;
