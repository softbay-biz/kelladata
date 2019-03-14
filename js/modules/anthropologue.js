const anthropologue = `
<div class="panel dashboard" id="deconnexion">
     <p class="panel-heading">
        Dashboard
    </p>
    <ul>
        <button class="button  is-success is-rounded"> <i class="fa fa-plus"> </i> New Form</button>
        <li><i class="fa fa-inbox"></i> <span>Profil</span> </li>
        <li><i class="fa fa-inbox"></i> <span>Submitted</span> </li>
        <li><i class="fa fa-refresh"></i> <span>In process</span> </li>
        <li><i class="fa fa-check"></i> <span>Verified</span></li>
        <li><i class="fa fa-trash"></i> <span>Trash</span></li>
        <li><i class="fa fa-deconnection"></i> <span>Deconnexion</span></li>
    </ul>

</div>
<div class="content-forms column is-four-fifths-desktop is-offset-2">
<script type="module" src="js/modules/navigation.js"></script>
  <script type="module" src="js/modules/forms_handler.js"></script>
  <nav class="pagination" id="navigation" role="navigation" aria-label="pagination">

    <nav>
        <a class="select-menu-ctn">    <select id="menu" class="select">
                  <option></option>
                  <option>Formulaires</option>
                  <option>Profil</option>
                  <option>Deconnexion</option>
                </select>
        </a>
        <a id="prev" class="pagination-previous" title="This is the first page">Previous</a>
        <a id="next" class="pagination-next">Save -> Next page</a>
    </nav><br>
    <ul class="pagination-list">
    <li>
      <a class="pagination-link is-current" data-page=1 aria-label="Page 1" aria-current="page">1</a>
    </li>
      <li>
        <a class="pagination-link" data-page=2 aria-label="Goto page 2">2</a>
      </li>
      <li>
        <a class="pagination-link" data-page=3 aria-label="Goto page 3">3</a>
      </li>
      <li>
        <a class="pagination-link" data-page=4 aria-label="Goto page 4">4</a>
      </li>
      <li>
        <a class="pagination-link" data-page=5 aria-label="Goto page 5">5</a>
      </li>
      <li>
        <a class="pagination-link" data-page=6 aria-label="Goto page 6">6</a>
      </li>
      <li>
        <a class="pagination-link" data-page=7 aria-label="Goto page 7">7</a>
      </li>
      <li>
        <a class="pagination-link" data-page=8 aria-label="Goto page 8">8</a>
      </li>
      <li>
        <a class="pagination-link" data-page=9 aria-label="Goto page 9">9</a>
      </li>
      <li>
        <a class="pagination-link" data-page=10 aria-label="Goto page 10">10</a>
      </li>
      <li>
        <a class="pagination-link" data-page=11 aria-label="Goto page 11">11</a>
      </li>
      <li>
        <a class="pagination-link" data-page=12 aria-label="Goto page 12">12</a>
      </li>
      <li>
        <a class="pagination-link" data-page=13 aria-label="Goto page 13">13</a>
      </li>
      <li>
        <a class="pagination-link" data-page=14 aria-label="Goto page 14">14</a>
      </li>
      <li>
        <a class="pagination-link" data-page=15 aria-label="Goto page 15">15</a>
      </li>
      <li>
        <a class="pagination-link" data-page=15 aria-label="Goto page 16">16</a>
      </li>
    </ul>
    <a id="close" class="pagination-next buttonSaveAndClose">Close</a>
  </nav>
  <div id="content-forms-elements">

  </div>
</div>
`;

export default anthropologue;
