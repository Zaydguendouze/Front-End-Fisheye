export function lightbox(data) {
  // Création de la div de la lightbox
  const lightbox = document.getElementById("lightbox");
  const closeBtn = document.querySelectorAll(".lightbox_close");
  const nextBtn = document.querySelector(".lightbox_next");
  const prevBtn = document.querySelector(".lightbox_prev");
  const lightboxText = document.querySelector(".lightbox_text");

  // Création de l'id dans la div pour le css
  // lightbox.id = "lightbox";
  // lightbox.classList.add = "btn-next";
  // lightbox.classList.add = "btn-prev";

  // Ajout de l'enfant lightbox au body donc la div
  // document.body.appendChild(lightbox);

  const images = document.querySelectorAll("article img");

  console.log(lightbox);
  const videos = document.querySelectorAll("article video");

  // console.log(images);

  images.forEach((image) => {
    image.addEventListener("click", (e) => {
      lightbox.classList.add("active");

      const img = document.createElement("img");

      img.src = image.src;

      img.setAttribute("id", "imageId");

      lightbox.appendChild(img);

      return imageId;
    });
  });

  videos.forEach((video) => {
    video.addEventListener("click", (e) => {
      lightbox.classList.add("active");

      const video = document.createElement("video");

      video.src = video.src;

      video.setAttribute("id", "videoId");

      lightbox.appendChild(video);

      return videoId;
    });
  });

  closeBtn.forEach((btn) => btn.addEventListener("click", closeLightbox));

  function closeLightbox(e) {
    if (e.target !== e.currentTarget) return;
    lightbox.classList.remove("active");
    removeImgDom("imageId");
    removeVideoDom("videoId");
  }

  function removeImgDom(imageDom) {
    var imageDom = document.getElementById("imageId");
    return imageDom.parentNode.removeChild(imageDom);
  }

  function removeVideoDom(videoDom) {
    var videoDom = document.getElementById("videoId");
    return videoDom.parentNode.removeChild(videoDom);
  }

  // NEXT
  // eventlistener sur les boutons

  // const mediaOnLightbox = parseInt(media.parentElement.dataset.id);

  // console.log(media);

  // let mediaSelect = 0;
  // mediaSelect = medias.findIndex((element) => element.id === mediaOnLightbox);

  // if (mediaSelect === 0) {
  //   mediaSelect = medias.length - 1;
  // } else {
  //   mediaSelect = medias - 1;
  // }

  console.log(images);
}
