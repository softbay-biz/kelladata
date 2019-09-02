const header = `<nav id="navbar-top" class="navbar is-fixed-on-top top-barre" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="#">
      <img id="home" src="images/KellaData green@2x.png" width="112" height="28">
    </a>

    <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true">
      </span>
      <span aria-hidden="true">
      </span>
      <span aria-hidden="true">
      </span>
    </a>
    <div class="navbar-menu" id="navMenu">
      <!-- navbar-start, navbar-end... -->
    </div>
  </div>
  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">
      <a class="navbar-item" id="menu_elt_all">
        Tous
      </a>

      <a class="navbar-item" id="menu_elt_images">
        Images
      </a>
      <a class="navbar-item" id="menu_elt_videos">
        Vidéos
      </a>
      <a class="navbar-item" id="menu_elt_audios">
        Audios
      </a>
      <a class="navbar-item" id="menu_elt_articles">
        Articles
      </a>

    </div>
    <div class="control has-icons-left has-icons-right">
        <input id="search-barre-landing-page" class="input is-medium search-barre-custom"  type="search"/>

    </div>
    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <a class="button is-primary" id="signup">
            S'inscrire
          </a>
          <a class="button is-light" id="login">
            Se connecter
          </a>
        </div>
      </div>
    </div>
  </div>
</nav>`;
export default header;
