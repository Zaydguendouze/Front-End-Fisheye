export function lightbox(data) {
  const lightboxContainer = document.getElementById("lightbox");
  // const closeBtn = document.querySelector(".lightbox_close");
  const nextBtn = document.querySelector(".lightbox_next");
  const prevBtn = document.querySelector(".lightbox_prev");

  const images = document.querySelector(".galerie img");
  const videos = document.querySelectorAll("article video");
  const medias = document.querySelectorAll(
    ".galerie article img, article video"
  );

  let img = document.createElement("img");
  let txt = document.createElement("p");

  let vdo = document.createElement("video");
  let src = "";
  let title = "";

  // let Id = 0;

  // const filteredObj = data.filter((obj) => obj.id === 625025343)[0];

  // const allIds = data.map((o) => o.id);

  // // ... creation d'une copie de allIds
  // const sortedIds = [...allIds].sort((x, y) => y - x);

  // console.log("sortedIds", sortedIds);

  // console.log("allIds", allIds);

  // const dataTitleAlt = document.querySelector(".galerie img, video").alt;

  // console.log(data.map((o) => o.title));

  // function txtImg() {
  //   for (var i = 0; i < medias.length; i++) {
  //     var caption = document.createElement("p");
  //     caption.textContent = medias[i].dataset.title;
  //   }
  // }

  // console.log(data.sort((a, b) => (a.id < b.id ? -1 : Number(a.id > b.id))));

  // const mediaSelected = data.sort((a, b) =>
  //   a.id < b.id ? -1 : Number(a.id > b.id)
  // );

  // console.log(mediaSelected);

  medias.forEach((media) => {
    const openLightbox = () => {
      lightboxContainer.classList.add("active");

      const currentMedia = parseInt(media.parentElement.dataset.id);

      let index = 0;
      index = data.findIndex((element) => element.id === currentMedia);
      // console.log(typeof currentMedia);
      // console.log("index", index);
      // console.log("media en cours", currentMedia);

      // id = data.findIndex((element) => element.data === data);
      src = media.src;
      title = media.title;
      // console.log("index", id);
      // console.log("titre", title);
      // console.log("source", src);

      if (media.src.includes("mp4")) {
        // const vdo = document.createElement("video");
        // const txt = document.createElement("p");

        vdo.src = src;

        vdo.setAttribute("id", "videoId");
        vdo.autoplay = true;
        vdo.controls = false;

        lightboxContainer.appendChild(vdo);

        txt.innerText = title;

        txt.setAttribute("id", "caption");

        lightboxContainer.appendChild(txt);

        closeBtn.onclick = function () {
          closeLightboxWithVdo();
        };

        // return videoId;
      } else {
        // const img = document.createElement("img");
        // const txt = document.createElement("p");

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

        // return imageId;
      }

      const next = () => {
        // let nextIndex = index % medias.length;
        // if (medias.length == nextIndex + 1) {
        //   nextIndex = -1;
        // }
        console.log("-----");
        let image = document.getElementById("imageId");
        let text = document.getElementById("caption");
        let video = document.querySelector("video");
        // lightboxContainer.appendChild([nextIndex + 1]);
        if (index === medias.length - 1) {
          // img.src = medias[index].src;
          index = 0;
        } else {
          index = index + 1;
        }
        src = medias[index].src;
        title = medias[index].title;

        console.log("index", index);
        console.log("titre", title);
        console.log("source", src);
        console.log("image", image);

        console.log("video", video);

        if (medias[index].src.includes("mp4")) {
          video.src = src;
          // video.setAttribute("controls");
          video.autoplay = false;
          video.controls = true;
          text.innerText = title;
        }
        if (!medias[index].src.includes("mp4")) {
          image.src = src;
          text.innerText = title;
        }
        // video.src = src;
        // vdo.autoplay = false;
        // vdo.controls = true;
        // }
        // if (index > lightboxText.length - 1) index = 0;
        // txt.innerText = lightboxText[index].firstChild.textContent;
        // console.log("nextIndex", nextIndex);
        // console.log("media en cours", currentMedia);
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
        let video = document.querySelector("video");

        if (medias[index].src.includes("mp4")) {
          video.src = src;
          // video.setAttribute("controls", "controls");
          video.autoplay = false;
          video.controls = true;
          text.innerText = title;
        }
        if (!medias[index].src.includes("mp4")) {
          image.src = src;
          text.innerText = title;
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
