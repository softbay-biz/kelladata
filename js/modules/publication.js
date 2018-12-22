const publication = `
  <nav class="panel dashboard" id="dashboard">
  <p class="panel-heading">
    Dashboard
  </p>
  <div class="panel-block">
    <button id="execute" class="button is-link is-fullwidth">
      + New article
    </button>
  </div>
  <a class="panel-block">
    <span class="panel-icon">
      <i class="fas fa-book" aria-hidden="true"></i>
    </span>
    <img class="icone-li" src="images/book.svg"> Overview
  </a>
  <a class="panel-block">
    <span class="panel-icon">
      <i class="fas fa-book" aria-hidden="true"></i>
    </span>
    <img class="icone-li" src="images/download.svg"> Submitted
  </a>
  <a class="panel-block">
    <span class="panel-icon">
      <i class="fas fa-book" aria-hidden="true"></i>
    </span>
    <img class="icone-li" src="images/reload.svg"> Analyse stats
  </a>
  <a class="panel-block">
    <span class="panel-icon">
      <i class="fas fa-book" aria-hidden="true"></i>
    </span>
    <img class="icone-li" src="images/reload.svg"> Articles request
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
    <div id="editor_content">
        <nav class="article-block-header">
          <center>Text editor</center>
        </nav>
          <input class="input" type="text" id="publication_title" placeholder="Article title"></input>
    <br/>
        <textarea id="summernote" name="editordata"></textarea>
        <br/>
          <button class="button is-primary" id="publication_send">Add the article</button>
  </div>
  </div>
</div>
<nav class="navbar is-fixed-bottom" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">

    <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

</nav>`
;

export default publication;
