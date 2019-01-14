const client = `<nav id="dashboard" class="panel dashboard">
<p class="panel-heading">
  Dashboard
</p>
<a class="panel-block">
 All
</a>
<a class="panel-block">
 Images
</a>
<a class="panel-block">
Videos
</a>
<a class="panel-block">
Audios
</a>
<a class="panel-block">
Allowed articles
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
<div class="data-account-display">
<input id="client-search-barre"type="text" placeholder="Search articles or medias (images, videos, audios)...">
</div>

</nav>`;

export default client;
