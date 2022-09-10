export function cleanLightBox(src, image, video) {
  const imgsAndVideosToDelete = {
    images: document.querySelectorAll(".imageMedia"),
    videos: document.querySelectorAll(".videoMedia"),
    paragraphs: document.querySelectorAll(".caption"),
  };

  for (let key of Object.keys(imgsAndVideosToDelete)) {
    for (let element of imgsAndVideosToDelete[key]) {
      if (Array.from(imgsAndVideosToDelete[key]).indexOf(element) !== 0) {
        element?.remove();
      } else if (
        (image && src.includes("mp4")) ||
        (video && src.includes("jpg"))
      ) {
        element?.remove();
      }
    }
  }
}
