const admin = `<nav class="panel dashboard" id="dashboard">
<p class="panel-heading">
  Dashboard
</p>
<a id="manage_members" class="panel-block">
 Manage members
</a>
<a id="manage_articles_request" class="panel-block">
 Manage articles request
</a>


<nav class="panel">
  <a class="panel-block">
    <figure class="image is-128x128">
<img id="profile_image" src="images/user.png">
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
        <table class="table" id="admin_members_list">
        
      </table>
</div>`;

export default admin;
