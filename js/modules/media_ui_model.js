const media_ui_model = (type,infos)=>{
  if(type == 1){
    return `<div class="card media-card-custom">
              <div class="card-image">
                <figure class="image is-4by3">
                  <img src="medias/images/image_800px/${infos.link_or_blob}" alt="Placeholder image">
                </figure>
              </div>
            </div>`;
  }else if(type == 2){
    return `<div class="card media-card-custom">
              <div class="card-image">
              <video controls>
                <source src="medias/videos/${infos.link_or_blob}"
                        type="video/mp4">
              </video>
              </div>
            </div>`;
  }else if(type == 3){
    return `<div class="card media-card-custom">
              <figure>
                <figcaption>${infos.name}</figcaption>
                <audio autoplay="autoplay" controls="controls>
                 <source src="medias/audios/${infos.link_or_blob}" />
                </audio>
              </figure>
            </div>`;
  }else if(type == 4){
    return `<div class="tile is-ancestor preview_home_article_elt">
              <div class="tile is-parent">
                <article class="tile is-child box">
                  <p class="title">Article</p>
                  <p class="subtitle"><h4>${infos.date_publication}</h4></p>
                  <div class="content">
                    <p>${infos.titre}</p>
                  </div>
                </article>
              </div>
            </div>`;
  }
};

export {media_ui_model};
