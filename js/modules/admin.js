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
            <td><a>0</a></td>
            <td>0</td>
            <td>0</td>
      </tr>

        </tbody>
      </table>
        <table class="table">
        <thead>
          <tr>
            <th><abbr title="User">User</abbr></th>
            <th><abbr title="User">Role</abbr></th>
            <th><abbr title="Email">Email</abbr></th>
            <th><abbr title="Phone">Phone</abbr></th>
            <th><abbr title="Address">Address</abbr></th>
            <th><abbr title="Action">Action</abbr></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><a>Bernard</a>
            </td>
            <td><a>Client</a>
            </td>
            <td>test1@gmailc.com</td>
            <td>23</td>
            <td>12</td>
            <td>
                <a class="button is-link">Accept</a>
                <a class="button is-danger">Reject</a>
            </td>
          </tr>
          <tr>
            <td><a>Stephy</a></td>
            <td><a>Client</a>
            </td>
            <td>test2@gmailc.com</td>
            <td>20</td>
            <td>11</td>
            <td>
              <a class="button is-link">Accept</a>
              <a class="button is-danger">Reject</a>
            </td>
      </tr>

        </tbody>
      </table>
</div>`;

export default admin;
