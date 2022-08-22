export function lightbox() {
  // Création de la div de la lightbox
  const lightbox = document.getElementById("lightbox");
  const closeBtn = document.querySelector(".lightbox_close");
  const nextBtn = document.querySelector(".lightbox_next");
  const prevBtn = document.querySelector(".lightbox_prev");
  let lightboxText = document.getElementById("caption");
  let textGalerie = document.querySelectorAll(".infos p");

  const images = document.querySelectorAll("article img");
  const videos = document.querySelectorAll("article video");

  // let src = document.querySelector("video, img").src;

  var mediaLightbox = document.getElementById("imageId, videoId");

  // console.log(lightboxText);

  images.forEach((image) => {
    image.addEventListener("click", (e) => {
      lightbox.classList.add("active");

      const img = document.createElement("img");
      const txt = document.createElement("p");

      img.src = image.src;

      img.setAttribute("id", "imageId");

      lightbox.appendChild(img);

      txt.innerText = image.nextElementSibling.firstElementChild.innerHTML;

      txt.setAttribute("id", "caption");

      lightbox.appendChild(txt);

      // lightboxText.innerHTML = textGalerie;

      // console.log(image);

      closeBtn.onclick = function () {
        closeLightboxWithImg();
      };

      return imageId;
    });
  });

  videos.forEach((video) => {
    video.addEventListener("click", (e) => {
      lightbox.classList.add("active");

      const vdo = document.createElement("video");
      const txt = document.createElement("p");

      let src = document.querySelector("video").src;

      vdo.src = src;

      vdo.setAttribute("id", "videoId");
      vdo.autoplay = true;
      vdo.controls = true;

      lightbox.appendChild(vdo);

      txt.innerText = video.nextElementSibling.firstElementChild.innerHTML;

      txt.setAttribute("id", "caption");

      lightbox.appendChild(txt);

      closeBtn.onclick = function () {
        closeLightboxWithVdo();
      };

      // console.log(src);

      return videoId;
    });
  });

  function closeLightboxWithImg(e) {
    lightbox.classList.remove("active");
    removeImgDom("imageId");
    removeTextDom("caption");
  }

  function closeLightboxWithVdo(e) {
    lightbox.classList.remove("active");
    removeVideoDom("videoId");
    removeTextDom("caption");
  }

  function removeImgDom(imageDom) {
    var imageDom = document.getElementById("imageId");
    imageDom.parentNode.removeChild(imageDom);
  }

  function removeVideoDom(videoDom) {
    var videoDom = document.getElementById("videoId");
    return videoDom.parentNode.removeChild(videoDom);
  }

  function removeTextDom(lightboxText) {
    var lightboxText = document.getElementById("caption");
    lightboxText.parentNode.removeChild(lightboxText);
  }

  // console.log(lightboxText.parentNode.removeChild(lightboxText));
  // NEXT
  // eventlistener sur les boutons

  // console.log(medias);
}
