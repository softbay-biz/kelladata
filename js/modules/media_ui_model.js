const media_ui_model = (type)=>{
  if(type === "image"){
    return `<div class="card media-card-custom">
              <div class="card-image">
                <figure class="image is-4by3">
                  <img src="images/africa-1933329_1920.jpg" alt="Placeholder image">
                </figure>
              </div>
            </div>`;
  }else if(type === "video"){
    return `<div class="card media-card-custom">
              <div class="card-image">
                <iframe width="100%" height="100%"
                  src="https://www.youtube.com/embed/tgbNymZ7vqY">
                </iframe>
              </div>
            </div>`;
  }else if(type === "song"){
    return `<div class="card media-card-custom">
              <div class="card-image">
                <figure class="image is-4by3">
                  <img class="media-card-custom" src="images/speaker.svg" alt="Placeholder image">
                </figure>
              </div>
            </div>`;
  }
};

export {media_ui_model};
