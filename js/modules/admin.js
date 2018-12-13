const admin = `<nav class="panel dashboard" id="dashboard">
<p class="panel-heading">
  Dashboard
</p>
<a class="panel-block">
  <span class="panel-icon">
    <i class="fas fa-book" aria-hidden="true"></i>
  </span>
  <img class="icone-li" src="images/book.svg"> Overview
</a>

<nav class="panel">
  <a class="panel-block">
    <span class="panel-icon">
      <i class="fas fa-book" aria-hidden="true"></i>
    </span>
    <figure class="image is-128x128">
<img src="images/user.png">
</figure>
  </a>
  <div class="panel-block">
    <button id="deconnexion" class="button is-link is-outlined is-fullwidth">
      Deconnexion
    </button>
  </div>
</nav>
</nav>
<div class="data-account-display">
        <table class="table">
        <thead>
          <tr>
            <th><abbr title="User">Total User</abbr></th>
            <th><abbr title="Email">Total Photographs</abbr></th>
            <th><abbr title="Phone">Total Anthropologues</abbr></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong id="total_actif_user"></strong></td>
            <td><strong id="total_actif_photograph"></strong></td>
            <td><strong id="total_actif_anthropologue"></strong></td>
      </tr>

        </tbody>
      </table>
        <table class="table">
        <thead>
          <tr>
            <th><abbr title="User">First name</abbr></th>
            <th><abbr title="User">Last name</abbr></th>
            <th><abbr title="Role">Role</abbr></th>
            <th><abbr title="Email">Email</abbr></th>
            <th><abbr title="Action">Action</abbr></th>
          </tr>
        </thead>
        <tbody id="admin_members_list">

        </tbody>
      </table>
</div>`;

export default admin;
