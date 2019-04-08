const client = `<nav id="dashboard" class="panel dashboard">
<p class="panel-heading">
  Dashboard
</p>
<a id="client_media_display_all" class="panel-block">
 All
</a>
<a id="client_media_display_images" class="panel-block">
 Images
</a>
<a id="client_media_display_videos" class="panel-block">
Videos
</a>
<a id="client_media_display_audios" class="panel-block">
Audios
</a>
<a id="client_media_display_articles" class="panel-block">
Articles
</a>
<a id="client_media_display_allowed_articles" class="panel-block">
Allowed articles
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
<div class="data-account-display-header">
  <input id="client-search-barre"type="text" placeholder="Search articles or medias (images, videos, audios)...">
</div>
<div class="data-account-display" id="data-account-display">
</div>
</nav>`;

export default client;
