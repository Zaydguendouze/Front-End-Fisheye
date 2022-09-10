export function lightbox(data) {
  const lightboxContainer = document.getElementById("lightbox");
  const nextBtn = document.querySelector(".lightbox_next");
  const prevBtn = document.querySelector(".lightbox_prev");

  const triPopularite = document.querySelector(".popularite");
  const triDate = document.querySelector(".date");
  const triTitre = document.querySelector(".titre");

  const medias = document.querySelectorAll(
    ".galerie article img, article video"
  );
  console.log("data", data);
  console.log("medias", medias);

  let img = document.createElement("img");
  let txt = document.createElement("p");
  let vdo = document.createElement("video");

  let src = "";
  let title = "";

  console.log("clicked lightbox");

  medias.forEach((media) => {
    const openLightbox = () => {
      lightboxContainer.classList.add("active");

      const currentMedia = parseInt(media.parentElement.dataset.id);

      let index = 0;
      index = data.findIndex((element) => element.id === currentMedia);

      src = media.src;
      title = media.title;

      console.log("clicked open lightbox");

      if (media.src.includes("mp4")) {
        vdo.src = src;

        vdo.setAttribute("class", "videoMedia");
        vdo.autoplay = true;
        vdo.controls = true;

        lightboxContainer.appendChild(vdo);

        txt.innerText = title;

        txt.setAttribute("class", "caption");

        lightboxContainer.appendChild(txt);

        closeBtn.onclick = function () {
          const videoMedia = document.querySelector(".videoMedia");
          const caption = document.querySelector(".caption");
          videoMedia.remove();
          caption.remove();
        };
      } else {
        img.src = src;

        img.setAttribute("class", "imageMedia");

        lightboxContainer.appendChild(img);

        txt.innerText = title;

        txt.setAttribute("class", "caption");

        lightboxContainer.appendChild(txt);

        closeBtn.onclick = function () {
          const imageMedia = document.querySelector(".imageMedia");
          const caption = document.querySelector(".caption");
          imageMedia.remove();
          caption.remove();
        };
      }

      const next = () => {
        const image = document.querySelector("imageMedia");
        const text = document.querySelector("caption");
        const video = document.querySelector("videoMedia");

        if (index === medias.length - 1) {
          index = 0;
        } else {
          index = index + 1;
        }

        src = medias[index].src;
        title = medias[index].title;

        console.log("clicked next");

        if (medias[index].src.includes("mp4")) {
          lightboxContainer.appendChild(vdo);
          vdo.src = src;
          vdo.autoplay = false;
          vdo.controls = true;
          lightboxContainer.appendChild(txt);
          txt.innerText = title;
        } else if (medias[index].src.includes("jpg")) {
          vdo.remove(video);
          txt.remove(text);
        }

        if (medias[index].src.includes("jpg")) {
          lightboxContainer.appendChild(img);
          img.src = src;
          lightboxContainer.appendChild(txt);
          txt.innerText = title;
        } else if (medias[index].src.includes("mp4")) {
          img.remove(image);
          txt.remove(text);
        }
      };

      const prev = () => {
        const image = document.querySelector("imageMedia");
        const text = document.querySelector("caption");
        const video = document.querySelector("videoMedia");

        if (index === 0) {
          index = medias.length - 1;
        } else {
          index = index - 1;
        }
        src = medias[index].src;
        title = medias[index].title;

        if (medias[index].src.includes("mp4")) {
          lightboxContainer.appendChild(vdo);
          vdo.src = src;
          vdo.autoplay = false;
          vdo.controls = true;
          lightboxContainer.appendChild(txt);
          txt.innerText = title;
        } else if (medias[index].src.includes("jpg")) {
          vdo.remove(video);
          txt.remove(text);
        }

        if (medias[index].src.includes("jpg")) {
          lightboxContainer.appendChild(img);
          img.src = src;
          lightboxContainer.appendChild(txt);
          txt.innerText = title;
        } else if (medias[index].src.includes("mp4")) {
          img.remove(image);
          txt.remove(text);
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

    media.addEventListener("click", openLightbox);
    media.addEventListener("keyup", (e) => {
      if (e.key === "Enter") {
        openLightbox();
      }
    });
  });
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
