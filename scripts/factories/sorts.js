export function sorts(data) {
  const titre = document.getElementById("customselect-titre");
  const medias = Array.from(document.querySelectorAll(".galerie img, video"));

  console.log(data);
  medias.sort();
}
