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
    <button id="deconnexion" class="button is-link is-outlined is-fullwidth">
      Deconnexion
    </button>
  </div>
</nav>
</nav>
<div class="data-account-display content-for-flex-box">

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
          <select id="media_type">
            <option data-id_type=1 >Image</option>
            <option data-id_type=2 >Video</option>
            <option data-id_type=3 >Audio</option>
          </select>
        </div>
      </div>
      </div>

      <div class="field">
      <label class="label">Description</label>
      <div class="control">
        <textarea id="media_description" class="textarea" placeholder="Make a description"></textarea>
      </div>
      </div>
      <div class="file has-name">
      <label class="file-label">
        <input class="file-input" id="upload_file" type="file" name="resume">
        <span class="file-cta">
          <span class="file-icon">
            <i class="fas fa-upload"></i>
          </span>
          <span class="file-label">
            Choose a file…
          </span>
        </span>
        <span class="file-name" id="media_name">
        </span>
      </label>
      </div>
      <div class="field">
      <div class="control">
        <figure class="image is-128x128">
          <img id="media_image_preview" src="" />
        </figure>
      </div>
      </div>
  </section>
  <footer class="modal-card-foot">
    <button class="button is-success" id="add_media">Add the media</button>
    <button class="button" id="close_pop_up_button">Cancel</button>
  </footer>
</div>`;

export default photograph;
