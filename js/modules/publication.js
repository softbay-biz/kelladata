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
  <div id="article-left-part">
    <nav class="article-block-header">
      <center>Articles list</center>
    </nav>
        <div id="articles-list">
          <article class="media article-list">
                <figure class="media-left">
                  <p class="image is-64x64">
                    <img src="https://bulma.io/images/placeholders/128x128.png">
                  </p>
                </figure>
                <div class="media-content">
                  <div class="content">
                    <p>
                      <strong>John Smith</strong> <small>@johnsmith</small> <small>31m</small>
                      <br>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut.
                    </p>
                  </div>
                  <nav class="level is-mobile">
                    <div class="level-left">
                      <a class="level-item">
                        <span class="icon is-small"><i class="fas fa-reply"></i></span>
                      </a>
                      <a class="level-item">
                        <span class="icon is-small"><i class="fas fa-retweet"></i></span>
                      </a>
                      <a class="level-item">
                        <span class="icon is-small"><i class="fas fa-heart"></i></span>
                      </a>
                    </div>
                  </nav>
                </div>
          </article>
          <article class="media article-list">
                <figure class="media-left">
                  <p class="image is-64x64">
                    <img src="https://bulma.io/images/placeholders/128x128.png">
                  </p>
                </figure>
                <div class="media-content">
                  <div class="content">
                    <p>
                      <strong>John Smith</strong> <small>@johnsmith</small> <small>31m</small>
                      <br>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut.
                    </p>
                  </div>
                  <nav class="level is-mobile">
                    <div class="level-left">
                      <a class="level-item">
                        <span class="icon is-small"><i class="fas fa-reply"></i></span>
                      </a>
                      <a class="level-item">
                        <span class="icon is-small"><i class="fas fa-retweet"></i></span>
                      </a>
                      <a class="level-item">
                        <span class="icon is-small"><i class="fas fa-heart"></i></span>
                      </a>
                    </div>
                  </nav>
                </div>
          </article>
          <article class="media article-list">
                <figure class="media-left">
                  <p class="image is-64x64">
                    <img src="https://bulma.io/images/placeholders/128x128.png">
                  </p>
                </figure>
                <div class="media-content">
                  <div class="content">
                    <p>
                      <strong>John Smith</strong> <small>@johnsmith</small> <small>31m</small>
                      <br>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut.
                    </p>
                  </div>
                  <nav class="level is-mobile">
                    <div class="level-left">
                      <a class="level-item">
                        <span class="icon is-small"><i class="fas fa-reply"></i></span>
                      </a>
                      <a class="level-item">
                        <span class="icon is-small"><i class="fas fa-retweet"></i></span>
                      </a>
                      <a class="level-item">
                        <span class="icon is-small"><i class="fas fa-heart"></i></span>
                      </a>
                    </div>
                  </nav>
                </div>
          </article>
          <article class="media article-list">
                <figure class="media-left">
                  <p class="image is-64x64">
                    <img src="https://bulma.io/images/placeholders/128x128.png">
                  </p>
                </figure>
                <div class="media-content">
                  <div class="content">
                    <p>
                      <strong>John Smith</strong> <small>@johnsmith</small> <small>31m</small>
                      <br>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut.
                    </p>
                  </div>
                  <nav class="level is-mobile">
                    <div class="level-left">
                      <a class="level-item">
                        <span class="icon is-small"><i class="fas fa-reply"></i></span>
                      </a>
                      <a class="level-item">
                        <span class="icon is-small"><i class="fas fa-retweet"></i></span>
                      </a>
                      <a class="level-item">
                        <span class="icon is-small"><i class="fas fa-heart"></i></span>
                      </a>
                    </div>
                  </nav>
                </div>
          </article>
          <article class="media article-list">
                <figure class="media-left">
                  <p class="image is-64x64">
                    <img src="https://bulma.io/images/placeholders/128x128.png">
                  </p>
                </figure>
                <div class="media-content">
                  <div class="content">
                    <p>
                      <strong>John Smith</strong> <small>@johnsmith</small> <small>31m</small>
                      <br>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut.
                    </p>
                  </div>
                  <nav class="level is-mobile">
                    <div class="level-left">
                      <a class="level-item">
                        <span class="icon is-small"><i class="fas fa-reply"></i></span>
                      </a>
                      <a class="level-item">
                        <span class="icon is-small"><i class="fas fa-retweet"></i></span>
                      </a>
                      <a class="level-item">
                        <span class="icon is-small"><i class="fas fa-heart"></i></span>
                      </a>
                    </div>
                  </nav>
                </div>
          </article>
          <article class="media article-list">
                <figure class="media-left">
                  <p class="image is-64x64">
                    <img src="https://bulma.io/images/placeholders/128x128.png">
                  </p>
                </figure>
                <div class="media-content">
                  <div class="content">
                    <p>
                      <strong>John Smith</strong> <small>@johnsmith</small> <small>31m</small>
                      <br>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut.
                    </p>
                  </div>
                  <nav class="level is-mobile">
                    <div class="level-left">
                      <a class="level-item">
                        <span class="icon is-small"><i class="fas fa-reply"></i></span>
                      </a>
                      <a class="level-item">
                        <span class="icon is-small"><i class="fas fa-retweet"></i></span>
                      </a>
                      <a class="level-item">
                        <span class="icon is-small"><i class="fas fa-heart"></i></span>
                      </a>
                    </div>
                  </nav>
                </div>
          </article>
    </div>
  </div>
  <div id="article-right-part">
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
