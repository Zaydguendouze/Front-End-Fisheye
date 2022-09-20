export function cleanLightBox(src, image, video) {
  // Les élements que l'on veut supprimer pour changer de tri de galerie
  const imgsAndVideosToDelete = {
    images: document.querySelectorAll(".imageMedia"),
    videos: document.querySelectorAll(".videoMedia"),
    paragraphs: document.querySelectorAll(".caption"),
  };

  // Récupération des clés de chaque élement qui se dupliquent
  for (let key of Object.keys(imgsAndVideosToDelete)) {
    for (let element of imgsAndVideosToDelete[key]) {
      // Si le tableau contient des clés donc !== 0 on supprime les elements
      if (Array.from(imgsAndVideosToDelete[key]).indexOf(element) !== 0) {
        element?.remove();
        // et si des médias sont présents on supprime aussi
      } else if (
        (image && src.includes("mp4")) ||
        (video && src.includes("jpg"))
      ) {
        element?.remove();
      }
    }
  }
}
