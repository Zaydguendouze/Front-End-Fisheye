import { cleanLightBox } from "../utils/index.js";

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

        vdo.setAttribute("class", "videoMedia");
        vdo.autoplay = true;
        vdo.controls = true;

        lightboxContainer.appendChild(vdo);

        txt.innerText = title;

        txt.setAttribute("class", "caption");

        lightboxContainer.appendChild(txt);
      } else {
        img.src = src;

        img.setAttribute("class", "imageMedia");

        lightboxContainer.appendChild(img);

        txt.innerText = title;

        txt.setAttribute("class", "caption");

        lightboxContainer.appendChild(txt);
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

        const nativeElemToDelete = document.querySelectorAll(
          "div[id='lightbox'] video, div[id='lightbox'] img, div[id='lightbox'] p"
        );
        for (let el of nativeElemToDelete) {
          el?.remove();
        }

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

        cleanLightBox();
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

        const nativeElemToDelete = document.querySelectorAll(
          "div[id='lightbox'] video, div[id='lightbox'] img, div[id='lightbox'] p"
        );
        for (let el of nativeElemToDelete) {
          el?.remove();
        }

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

        cleanLightBox();
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
  const imageMedia = document.querySelector(".imageMedia");
  const videoMedia = document.querySelector(".videoMedia");
  const nativeElemToDelete = document.querySelectorAll(
    "div[id='lightbox'] video, div[id='lightbox'] img, div[id='lightbox'] p"
  );
  const caption = document.querySelector(".caption");
  imageMedia?.remove();
  videoMedia?.remove();
  caption?.remove();
  for (let el of nativeElemToDelete) {
    el?.remove();
  }

  lightboxContainer.classList.remove("active");
}

document.addEventListener("keyup", (e) => {
  if (e.key === "Escape") {
    closeLightbox();
  }
});
