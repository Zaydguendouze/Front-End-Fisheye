export function lightbox(data) {
  const lightboxContainer = document.getElementById("lightbox");
  const nextBtn = document.querySelector(".lightbox_next");
  const prevBtn = document.querySelector(".lightbox_prev");

  const medias = document.querySelectorAll(
    ".galerie article img, article video"
  );

  let img = document.createElement("img");
  let txt = document.createElement("p");
  let vdo = document.createElement("video");

  let src = "";
  let title = "";

  medias.forEach((media) => {
    const openLightbox = () => {
      lightboxContainer.classList.add("active");

      const currentMedia = parseInt(media.parentElement.dataset.id);

      let index = 0;
      index = data.findIndex((element) => element.id === currentMedia);

      src = media.src;
      title = media.title;

      if (media.src.includes("mp4")) {
        vdo.src = src;

        vdo.setAttribute("id", "videoId");
        vdo.autoplay = true;
        vdo.controls = true;

        lightboxContainer.appendChild(vdo);

        txt.innerText = title;

        txt.setAttribute("id", "caption");

        lightboxContainer.appendChild(txt);

        closeBtn.onclick = function () {
          closeLightboxWithVdo();
        };
      } else {
        img.src = src;

        img.setAttribute("id", "imageId");
        img.setAttribute("class", "image");

        lightboxContainer.appendChild(img);

        txt.innerText = title;

        txt.setAttribute("id", "caption");

        lightboxContainer.appendChild(txt);

        closeBtn.onclick = function () {
          closeLightboxWithImg();
        };
      }

      const next = () => {
        console.log("-----");
        const image = document.getElementById("imageId");
        const text = document.getElementById("caption");
        const video = document.getElementById("videoId");

        if (index === medias.length - 1) {
          index = 0;
        } else {
          index = index + 1;
        }

        src = medias[index].src;
        title = medias[index].title;

        if (medias[index].src.includes("mp4")) {
          lightboxContainer.appendChild(vdo);
          vdo.src = src;
          vdo.autoplay = false;
          vdo.controls = true;
          lightboxContainer.appendChild(txt);
          text.innerText = title;
        }
        if (medias[index].src.includes("jpg")) {
          vdo.remove(video);
        }

        if (medias[index].src.includes("jpg")) {
          lightboxContainer.appendChild(img);
          img.src = src;
          lightboxContainer.appendChild(txt);
          txt.innerText = title;
        }
        if (medias[index].src.includes("mp4")) {
          img.remove(image);
        }
      };

      const prev = () => {
        if (index === 0) {
          index = medias.length - 1;
        } else {
          index = index - 1;
        }
        src = medias[index].src;
        title = medias[index].title;

        let image = document.getElementById("imageId");
        let text = document.getElementById("caption");
        let video = document.getElementById("videoId");

        if (medias[index].src.includes("mp4")) {
          lightboxContainer.appendChild(vdo);
          vdo.src = src;
          vdo.autoplay = false;
          vdo.controls = true;
          lightboxContainer.appendChild(txt);
          text.innerText = title;
        }
        if (medias[index].src.includes("jpg")) {
          vdo.remove(video);
        }

        if (medias[index].src.includes("jpg")) {
          lightboxContainer.appendChild(img);
          img.src = src;
          lightboxContainer.appendChild(txt);
          txt.innerText = title;
        }
        if (medias[index].src.includes("mp4")) {
          img.remove(image);
        }
      };

      document.addEventListener("keyup", (e) => {
        if (e.key === "Escape") {
          closeLightbox();
        }
      });

      nextBtn.addEventListener("click", next);
      prevBtn.addEventListener("click", prev);

      document.addEventListener("keyup", (e) => {
        if (e.key === "ArrowLeft") {
          prev();
        }
        if (e.key === "ArrowRight") {
          next();
        }
      });
    };

    nextBtn.addEventListener("click", nextBtn);

    media.addEventListener("click", openLightbox);
    media.addEventListener("keyup", (e) => {
      if (e.key === "Enter") {
        openLightbox();
      }
    });
  });

  function closeLightboxWithImg() {
    lightboxContainer.classList.remove("active");
    removeImgDom("imageId");
    removeTextDom("caption");
  }

  function closeLightboxWithVdo() {
    lightboxContainer.classList.remove("active");
    removeVideoDom("videoId");
    removeTextDom("caption");
  }

  function removeImgDom(imageDom) {
    var imageDom = document.getElementById("imageId");
    imageDom.parentNode.removeChild(imageDom);
  }

  function removeVideoDom(videoDom) {
    var videoDom = document.getElementById("videoId");
    videoDom.parentNode.removeChild(videoDom);
  }

  function removeTextDom(lightboxText) {
    var lightboxText = document.getElementById("caption");
    lightboxText.parentNode.removeChild(lightboxText);
  }
}

const closeBtn = document.querySelector(".lightbox_close");
closeBtn.addEventListener("click", () => {
  closeLightbox();
});
function closeLightbox() {
  const lightboxContainer = document.getElementById("lightbox");
  lightboxContainer.classList.remove("active");
}

document.addEventListener("keyup", (e) => {
  if (e.key === "Escape") {
    closeLightbox();
  }
});
