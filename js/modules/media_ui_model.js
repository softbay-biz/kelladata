import {display_media_pop_up} from './../helpers/display_media_pop_up.js';

const media_ui_model = (type,infos)=>{
  if(type == 1){
    return `<div  class="card media-card-custom imagesLightbox">
              <div class="card-image">
                <figure class="image is-4by3" data-type=${infos.type}>
                  <img data-lightbox=${infos.link_or_blob} src="medias/images/image_800px/${infos.link_or_blob}" alt="Placeholder image">
                </figure>
              </div>
            </div>`;
  }else if(type == 2){
    return `<div class="card media-card-custom">
              <div class="card-image">
              <video controls data-type=${infos.type}>
                <source src="medias/videos/${infos.link_or_blob}"
                        type="video/mp4">
              </video>
              </div>
            </div>`;
  }else if(type == 3){
    return `<div  class="card media-card-custom">
              <figure data-type=${infos.type}>
                <figcaption>${infos.name}</figcaption>
                <audio controls="controls">
                 <source src="medias/audios/${infos.link_or_blob}" />
                </audio>
              </figure>
            </div>`;
  }else if(type == 4){
    return `<div class="tile is-ancestor preview_home_article_elt">
              <div class="tile is-parent">
                <article data-type=4 data-id=${infos.id_article} class="tile is-child box">
                  <p data-type=4 data-id=${infos.id_article} class="title">Article</p>
                  <p class="subtitle"><h4 data-type=4 data-id=${infos.id_article} >${infos.date_publication}</h4></p>
                  <div data-type=4 data-id=${infos.id_article} ${infos.titre} class="content">
                    <p data-type=4 data-id=${infos.id_article}> ${infos.titre}</p>
                  </div>
                </article>
              </div>
            </div>`;
  }
};

export {media_ui_model};
