const publication = `
  <nav class="panel dashboard" id="dashboard">
  <p class="panel-heading">
    Dashboard
  </p>
  <div class="panel-block">
    <button id="publication_new_article" class="button is-link is-fullwidth">
      + New article
    </button>
  </div>
  <a class="panel-block" id="publication_articles">
     My articles
  </a>
  <a class="panel-block" id="publication_articles_published">
     Published
  </a>
  <a class="panel-block" id="publication_articles_rejected">
     Rejected
  </a>

  <nav class="panel">
    <a class="panel-block">
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
<div class="modal" id="publication_new_article_modal">
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">New article</p>
        <button class="delete" aria-label="publication_pop_up_close" id="publication_pop_up_close"></button>
      </header>
      <section class="modal-card-body">
      <div id="editor_content">
          <nav class="article-block-header">
            <center>Text editor</center>
          </nav>
            <input class="input" type="text" id="publication_title" placeholder="Article title"></input>
          <textarea id="summernote" name="editordata"></textarea>

    </div>
      </section>
      <footer class="modal-card-foot">
        <button class="button is-primary" id="publication_send">Add the article</button>
        <button class="button" id="publication_pop_up_cancel">Cancel</button>
      </footer>
    </div>
</div>
<div class="data-account-display">
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
