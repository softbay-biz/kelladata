const photograph = `
<nav class="panel dashboard" id="dashboard">
<p class="panel-heading">
  Dashboard
</p>
<div class="panel-block">
  <button id="new_media" class="button is-link is-fullwidth">
    + New media
  </button>
</div>
<a class="panel-block">
  <img class="icone-li" src="images/book.svg"> My medias
</a>
<a class="panel-block">
  <img class="icone-li" src="images/download.svg"> Validaded
</a>
<a class="panel-block">
  <img class="icone-li" src="images/reload.svg"> Pending
</a>
<a class="panel-block">
  <img class="icone-li" src="images/reject.svg"> Rejected
</a>

<nav class="panel">
  <a class="panel-block">
    <figure class="image is-128x128">
<img src="images/user.png">
</figure>
  </a>
  <div class="panel-block">
    <button id="execute" class="button is-link is-outlined is-fullwidth">
      Deconnexion
    </button>
  </div>
</nav>
</nav>
<div class="data-account-display">
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

</nav>
<div class="modal" id="media_pop_up">
<div class="modal-background"></div>
<div class="modal-card">
  <header class="modal-card-head">
    <p class="modal-card-title">New media</p>
    <button class="delete" id="close_pop_up_cross" aria-label="close"></button>
  </header>
  <section class="modal-card-body">
    <div class="field">
      <label class="label">Name of the media</label>
      <div class="control">
        <input class="input" type="text" placeholder="Text input">
      </div>
      </div>

      <div class="field">
      <label class="label">Choose the media type</label>
      <div class="control">
        <div class="select">
          <select>
            <option>Image</option>
            <option>Video</option>
            <option>Audio</option>
          </select>
        </div>
      </div>
      </div>

      <div class="field">
      <label class="label">Description</label>
      <div class="control">
        <textarea class="textarea" placeholder="Make a description"></textarea>
      </div>
      </div>
      <center><figure class="image is-128x128">
        <img src="https://bulma.io/images/placeholders/256x256.png">
      </figure></center>
  </section>
  <footer class="modal-card-foot">
    <button class="button is-success">Add the media</button>
    <button class="button" id="close_pop_up_button">Cancel</button>
  </footer>
</div>`;

export default photograph;
