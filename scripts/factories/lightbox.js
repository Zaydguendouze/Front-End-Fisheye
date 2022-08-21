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
    // const img
    // selectionner les medias et si dispo afficher dans la lightbox et afficher dans infos le nom du media
    image.addEventListener("click", (e) => {
      //supp les images

      lightbox.classList.add("active");

      const img = document.createElement("img");

      img.src = image.src;

      img.setAttribute("id", "imageId");
      // while (lightbox.firstChild) {
      //   lightbox.removeChild(lightbox.firstChild);
      // }

      lightbox.appendChild(img);

      return imageId;

      // console.log(lightbox?.lastChild);
    });
  });

  videos.forEach((video) => {
    // const img
    // selectionner les medias et si dispo afficher dans la lightbox et afficher dans infos le nom du media
    video.addEventListener("click", (e) => {
      //supp les images

      lightbox.classList.add("active");

      const video = document.createElement("video");

      video.src = video.src;
      // while (lightbox.firstChild) {
      //   lightbox.removeChild(lightbox.firstChild);
      // }

      lightbox.appendChild(video);
      console.log(video);
    });
  });

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

  closeBtn.forEach((btn) => btn.addEventListener("click", closeLightbox));

  function closeLightbox(e) {
    if (e.target !== e.currentTarget) return;
    lightbox.classList.remove("active");
    removeImgDom("imageId");
  }

  function removeImgDom(imageDom) {
    var imageDom = document.getElementById("imageId");
    return imageDom.parentNode.removeChild(imageDom);
  }

  // closeLightbox() {
  //   images.reset();
  // }

  console.log(images);

  // const nextBtn =
}
