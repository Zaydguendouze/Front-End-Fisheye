export function lightbox() {
  // Création de la div de la lightbox
  const lightbox = document.getElementById("lightbox");
  const closeBtn = document.querySelector(".lightbox_close");
  const nextBtn = document.querySelector(".lightbox_next");
  const prevBtn = document.querySelector(".lightbox_prev");
  let lightboxText = document.getElementById("caption");
  let textGalerie = document.querySelectorAll(".infos p");

  // Création de l'id dans la div pour le css
  // lightbox.id = "lightbox";
  // lightbox.classList.add = "btn-next";
  // lightbox.classList.add = "btn-prev";

  // Ajout de l'enfant lightbox au body donc la div
  // document.body.appendChild(lightbox);

  // var medias = document.querySelectorAll(".galerie img, article video");
  // var medias = document.querySelectorAll(".galerie img, video");

  const images = document.querySelectorAll("article img");

  // console.log(lightbox);
  const videos = document.querySelectorAll("article video");

  let src = document.querySelector("video, img").src;

  var mediaLightbox = document.getElementById("imageId, videoId");

  console.log(lightboxText);

  images.forEach((image) => {
    image.addEventListener("click", (e) => {
      lightbox.classList.add("active");

      const img = document.createElement("img");
      const txt = document.createElement("p");

      img.src = image.src;

      img.setAttribute("id", "imageId");

      lightbox.appendChild(img);

      txt.innerText = image.nextElementSibling.outerText;

      lightbox.appendChild(txt);

      // lightboxText.innerHTML = textGalerie;

      console.log(images);

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

      let src = document.querySelector("video").src;

      vdo.src = src;

      vdo.setAttribute("id", "videoId");

      lightbox.appendChild(vdo);

      closeBtn.onclick = function () {
        closeLightboxWithVdo();
      };

      // console.log(mediaLightbox);

      // console.log(src);

      return videoId;
    });
  });

  // console.log(medias.nextElementSibling);

  // closeBtn.addEventListener("click", closeLightbox);

  // closeBtn.addEventListener("click", () => {
  //   lightbox.classList.remove("active");
  // });

  // closeBtn.addEventListener("click", closeLightbox);

  // closeBtn.addEventListener("click", closeLightboxWithVdo);
  // closeBtn.addEventListener("click", closeLightboxWithImg);

  function closeLightboxWithImg(e) {
    // if (e.target !== e.currentTarget) return;
    lightbox.classList.remove("active");
    removeImgDom("imageId");
    removeTextDom("caption");
  }

  function closeLightboxWithVdo(e) {
    // if (e.target !== e.currentTarget) return;
    lightbox.classList.remove("active");
    // removeImgDom("imageId");
    removeVideoDom("videoId");
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

  console.log(lightboxText.parentNode.removeChild(lightboxText));
  // NEXT
  // eventlistener sur les boutons

  // var slideIndex = 1;
  // showSlides(slideIndex);

  // function plusSlides(n) {
  //   showSlides((slideIndex += n));
  // }

  // function currentSlide(n) {
  //   showSlides((slideIndex = n));
  // }

  // function showSlides(n) {
  //   let i;
  //   let slides = document.getElementsByClassName("mySlides");
  //   let captionText = document.getElementById("caption");
  //   if (n > slides.length) {
  //     slideIndex = 1;
  //   }
  //   if (n < 1) {
  //     slideIndex = slides.length;
  //   }
  //   for (i = 0; i < slides.length; i++) {
  //     slides[i].style.display = "none";
  //   }
  //   slides[slideIndex - 1].style.display = "block";
  //   captionText.innerHTML = dots[slideIndex - 1].alt;
  // }

  /////////////////////////////////////

  // console.log(mediaLightbox);

  // var slide = document.querySelector(".medias");
  // var index = 0;
  // nextBtn.addEventListener("click", next);
  // prevBtn.addEventListener("click", prev);

  // function prev() {
  //   if (index <= 0) index = medias.length;
  //   index--;
  //   // return setImg();
  // }

  // function next() {
  //   if (index >= medias.length - 1) index = -1;
  //   index++;
  //   return setImg();
  // }

  // function setImg() {
  //   return mediaLightbox.setAttribute("src", "/assets/images/" + medias[index]);
  // }

  // const mediaOnLightbox = parseInt(media.parentElement.dataset.id);

  // console.log(data);

  // let mediaSelect = 0;
  // mediaSelect = medias.findIndex((element) => element.id === mediaOnLightbox);

  // if (mediaSelect === 0) {
  //   mediaSelect = medias.length - 1;
  // } else {
  //   mediaSelect = medias - 1;
  // }

  console.log(medias);
}
